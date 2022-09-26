/* eslint-disable consistent-return */
import { Provider, connect } from "react-redux";

import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import React from "react";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import MenuIcon from "@mui/icons-material/Menu";

import MicroreactViewer, { utils as ViewerUtils, UiIconButton, selectors as viewerSelectors, store as viewerStore, actions as viewerActions } from "microreact-viewer";

import fetcher from "../utils/viewer-fetch-proxy";
import useLeavePageConfirm from "../hooks/leave-page-confirm";
import * as Projects from "../utils/projects";

// import SaveViewMenu from "./SaveViewMenu";
import ProjectSaveDialog from "./ProjectSaveDialog";
import ProjectAccessDialog from "./ProjectAccessDialog";
import ManageAccountsIcon from "./ManageAccountsIcon";
import EditOffMenu from "./EditOffMenu.react";

ViewerUtils.proxy.setFetcher(fetcher);

const ChangesChecker = (props) => {
  useLeavePageConfirm();
  return null;
};

const SaveButton = React.memo(
  (props) => {
    return (
      <UiIconButton
        colour="inherit"
        onClick={props.toggleSaveDialog}
        title="Save Project"
        className={
          clsx(
            "mr-save-project",
            { "mr-has-changes": props.hasChanges },
          )
        }
      >
        <SaveRoundedIcon />
      </UiIconButton>
    );
  }
);

SaveButton.displayName = "SaveButton";

const mapStateToProps = (state, { chartId }) => {
  const presentState = viewerSelectors.presentStateSelector(state);
  return {
    hasChanges: presentState.config.isDirty,
  };
};
const ConnectedSaveButton = connect(mapStateToProps)(SaveButton);

class ProjectViewer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isAccessDialogOpen: false,
      isSaveDialogOpen: false,
      projectProps: props.projectProps ?? {},
    };

    window.ViewerUtils = ViewerUtils;
  }

  componentWillMount() {
    viewerStore.dispatch(
      viewerActions.config({
        readOnly: !this.canEdit(),
      })
    );
  }

  /**
   * A user can edit a project if it has not been uploaded to the server yet (local),
   * or the user is the owner of the project
   * @return {boolean}
  */
  canEdit = () => {
    return (
      (this.props.projectProps === null || this.state.projectProps.isOwner)
    );
  }

  /**
   * A user can change sharing settings when the user is the owner of the project
   * @return {boolean}
  */
  canChangeSharingSettings = () => {
    return (
      this.state.projectProps.isOwner
    );
  }

  hasChanges = () => {
    const presentState = viewerSelectors.presentStateSelector(viewerStore.getState());
    return presentState.config.isDirty;
  }

  /**
   * A user can save a view if the project is already on the server.
   * @return {boolean}
  */
  canSaveView = () => {
    return (this.props.projectProps?.id || this.state.projectProps?.id);
  }

  handleFeedback = () => {
    this.feedbackRef?.current?.open();
  }

  handleProjectPropsChange = (updater, callback) => {
    this.setState(
      {
        projectProps: {
          ...this.state.projectProps,
          ...updater,
        },
      },
      callback,
    );
  }

  toggleSaveDialog = () => {
    this.setState({ isSaveDialogOpen: !this.state.isSaveDialogOpen });
  }

  toggleAccessDialog = () => {
    this.setState({ isAccessDialogOpen: !this.state.isAccessDialogOpen });
  }

  // handleEnableEdit = () => {
  //   viewerStore.dispatch(
  //     viewerActions.config({
  //       readOnly: false,
  //     })
  //   );
  //   this.setState({ editMode: true });
  // }

  handleMakeCopy = () => {
    viewerStore.dispatch(viewerActions.save())
      .then(Projects.saveProjectOnServer)
      .then((savedProjectProps) => {
        viewerStore.dispatch(
          viewerActions.config({
            readOnly: false,
          })
        );
        this.setSavedProjectProps(savedProjectProps);
      });
  }

  setSavedProjectProps = (
    savedProjectProps,
    callback,
    extraState = {},
  ) => {
    viewerStore.dispatch(
      viewerActions.config({
        isDirty: false,
      })
    );
    this.setState(
      {
        ...extraState,
        projectProps: {
          ...this.state.projectProps,
          ...savedProjectProps,
        },
      },
      callback,
    );
  }

  renderViewerComponents = () => {
    let prependNavButtons = null;
    const presentState = viewerSelectors.presentStateSelector(viewerStore.getState());
    if (presentState.config.readOnly) {
      prependNavButtons = (
        <EditOffMenu
          onMakeCopy={this.handleMakeCopy}
        />
        // <UiIconButton
        //   colour="inherit"
        //   onClick={this.handleEnableEdit}
        //   title="Edit this project"
        // >
        // </UiIconButton>
      );
    }
    return {
      drawerButton: (
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => document.querySelector("button#toggle-drawer-button")?.click()}
        >
          <MenuIcon />
        </IconButton>
      ),
      prependNavButtons,
      appendNavButtons: (
        <React.Fragment>
          {/*
          {
            this.canSaveView() && (
              <SaveViewMenu
                projectProps={this.state.projectProps}
              />
            )
          }
          */}

          {
            this.canChangeSharingSettings() && (
              <UiIconButton
                colour="inherit"
                onClick={this.toggleAccessDialog}
                title="Project Access"
              >
                <ManageAccountsIcon />
              </UiIconButton>
            )
          }

          <ConnectedSaveButton
            toggleSaveDialog={this.toggleSaveDialog}
          />
        </React.Fragment>
      ),
    };
  }

  renderAccessDialog() {
    if (this.state.isAccessDialogOpen) {
      return (
        <ProjectAccessDialog
          onClose={() => this.setState({ isAccessDialogOpen: false })}
          projectId={this.state.projectProps.id}
        />
      );
    }
    else {
      return null;
    }
  }

  renderSaveDialog() {
    if (this.state.isSaveDialogOpen) {
      return (
        <ProjectSaveDialog
          projectProps={this.state.projectProps}
          onClose={
            () => this.setState({ isSaveDialogOpen: false })
          }
          onSavedOnServer={
            (savedProjectProps) => {
              this.setSavedProjectProps(
                savedProjectProps,
                () => this.setState({ isSaveDialogOpen: false }),
                { isAccessDialogOpen: true },
              );
            }
          }
          onUpdatedOnServer={
            (savedProjectProps) => {
              this.setSavedProjectProps(
                savedProjectProps,
              );
            }
          }
        />
      );
    }
  }

  render() {
    return (
      <Provider store={viewerStore}>
        <MicroreactViewer
          components={this.renderViewerComponents()}
          disableThemeProvider
        >
          { this.renderAccessDialog() }

          { this.renderSaveDialog() }
        </MicroreactViewer>

        {
          this.canEdit() && (<ChangesChecker />)
        }
      </Provider>
    );
  }

}

ProjectViewer.propTypes = {
  projectProps: PropTypes.object,
};

ProjectViewer.defaultProps = {
  projectProps: null,
};

ProjectViewer.displayName = "ProjectViewer";

export default ProjectViewer;
