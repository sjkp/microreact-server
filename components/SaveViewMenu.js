/* eslint-disable class-methods-use-this */

import IconButton from "@material-ui/core/IconButton";
import LinkTwoToneIcon from "@material-ui/icons/LinkTwoTone";
import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { actions as viewerActions, store as ViewerStore, UiPopoverMenu } from "microreact-viewer";

import { root as rootClassname } from "../styles/save-view-menu.module.css";

import * as ProjectUtils from "../utils/projects";

import UiCopyTextfield from "./UiCopyTextfield";

const FilesDialogIcon = <LinkTwoToneIcon />;

class SaveViewContent extends React.PureComponent {

  state = {
    json: null,
    isSaving: false,
  }

  createProjectDocument = async () => {
    const project = await this.state.jsonDataPromise;
    return project;
  }

  componentDidMount() {
    ViewerStore.dispatch(viewerActions.save())
      .then((json) => {
        this.setState({ json });
      });
  }

  handleSave = () => {
    this.setState({ isSaving: true });

    Promise.resolve(this.state.json)
      .then((projectJson) => {
        return ProjectUtils.saveProjectOnServer(projectJson, this.props.projectProps.id)
          .then((viewProps) => {
            this.setState({ viewProps });
          });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          savingMode: "error",
          savingError: error,
        });
      });
  }

  render() {
    const { props, state } = this;

    return (
      <React.Fragment>
        <div className="mr-thumbnail">
          {
            state.json?.image
              ?
              <img src={state.json.image} />
              :
              <span>Capturing screenshot&hellip;</span>
          }
        </div>

        <footer>
          {
            this.state.viewProps
              ?
              <UiCopyTextfield
                size="small"
                value={this.state.viewProps.url}
              />
              :
              <Button
                color="primary"
                variant="outlined"
                disableElevation
                disabled={state.isSaving}
                onClick={this.handleSave}
              >
                Get a permanent link for the current view
                { state.isSaving && <CircularProgress size={24} /> }
              </Button>
          }
        </footer>
      </React.Fragment>
    );
  }

}

SaveViewContent.displayName = "SaveViewContent";

SaveViewContent.propTypes = {
  projectProps: PropTypes.object,
};

const SaveViewMenu = React.memo(
  (props) => {
    return (
      <UiPopoverMenu
        button={IconButton}
        buttonProps={
          {
            color: "inherit",
            size: "small",
            children: FilesDialogIcon,
          }
        }
        hideOnClick={false}
        className={rootClassname}
        title="Save Current View"
      >
        <SaveViewContent
          projectProps={props.projectProps}
        />
      </UiPopoverMenu>
    );
  }
);

SaveViewMenu.displayName = "SaveViewMenu";

SaveViewMenu.propTypes = {
  projectProps: PropTypes.object,
};

export default SaveViewMenu;
