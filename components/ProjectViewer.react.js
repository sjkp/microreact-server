/* eslint-disable consistent-return */
import { Provider } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import React from "react";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import MenuIcon from "@material-ui/icons/Menu";

import MicroreactViewer, { utils as ViewerUtils, UiIconButton, selectors as viewerSelectors, store as ViewerStore, actions as viewerActions } from "microreact-viewer";

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
    ViewerStore.dispatch(
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
  //   ViewerStore.dispatch(
  //     viewerActions.config({
  //       readOnly: false,
  //     })
  //   );
  //   this.setState({ editMode: true });
  // }

  handleMakeCopy = () => {
    ViewerStore.dispatch(viewerActions.save())
      .then(Projects.saveProjectOnServer)
      .then((savedProjectProps) => {
        ViewerStore.dispatch(
          viewerActions.config({
            readOnly: false,
          })
        );
        this.setState(
          {
            projectProps: {
              ...this.state.projectProps,
              ...savedProjectProps,
            },
          }
        );
      });
  }

  renderViewerComponents = () => {
    let prependNavButtons = null;
    const presentState = viewerSelectors.presentStateSelector(ViewerStore.getState());
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

          <UiIconButton
            colour="inherit"
            onClick={this.toggleSaveDialog}
            title="Save Project"
          >
            <SaveRoundedIcon />
          </UiIconButton>
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
            (savedProjectProps) => {
              if (savedProjectProps?.isOwner) {
                this.setState(
                  {
                    isAccessDialogOpen: true,
                    projectProps: {
                      ...this.state.projectProps,
                      ...savedProjectProps,
                    },
                  },
                  () => this.setState({ isSaveDialogOpen: false }),
                );
              }
              else {
                this.setState({ isSaveDialogOpen: false });
              }
            }
          }
        />
      );
    }
  }

  render() {
    return (
      <Provider store={ViewerStore}>
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
