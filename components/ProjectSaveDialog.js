/* eslint-disable class-methods-use-this */

import { useSession } from "next-auth/react";
import Button from "@material-ui/core/Button";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import clsx from "clsx";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import InsertDriveFileTwoToneIcon from "@material-ui/icons/InsertDriveFileTwoTone";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import TextField from "@material-ui/core/TextField";
import WebAssetTwoToneIcon from "@material-ui/icons/WebAssetTwoTone";

import { actions as viewerActions, utils as viewerUtils, selectors as viewerSelectors, store as ViewerStore, UiDialog } from "microreact-viewer";

import * as LocalStorage from "../utils/local-storage";
import * as Projects from "../utils/projects";
import * as Auth from "../utils/auth";

import UiCopyTextfield from "./UiCopyTextfield";
import UiIconStack from "./UiIconStack.react";
import UiMicroreactIcon from "./UiMicroreactIcon.react";

import { root as dialogClassname } from "../styles/project-dialog.module.css";
import { root as rootClassname } from "../styles/project-save-dialog.module.css";

function UpdateProjectButton(props) {
  const { data: session, status } = useSession();
  const loading = (status === "loading");

  if (loading) {
    return null;
  }

  if (session) {

    return (
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className="mr-microreact-org"
        onClick={props.handleUpdateOnServer}
      >
        <UiIconStack>
          <WebAssetTwoToneIcon />
          <EditRoundedIcon style={{ marginTop: "3px" }} />
        </UiIconStack>
        <p>
          Update
          <br/>
          <strong>This Project</strong>
        </p>
      </Button>
    );
  }
}

function SaveProjectButton(props) {
  const { data: session, status } = useSession();
  const loading = (status === "loading");

  if (loading) {
    return (
      <Button
        variant="outlined"
        size="large"
        color="primary"
      >
        <Skeleton variant="rect" />
      </Button>
    );
  }

  if (session) {
    return (
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className="mr-microreact-org"
        onClick={props.handleSaveOnServer}
      >
        <UiIconStack>
          <WebAssetTwoToneIcon />
          <UiMicroreactIcon style={{ marginTop: "3px" }} />
        </UiIconStack>
        <p>
          Save as
          <br/>
          <strong>a New Project</strong>
        </p>
      </Button>
    );
  }
  else {
    return (
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className="mr-microreact-org"
        // href="/signin"
        // target="_blank"
        onClick={Auth.signin}
      >
        <UiIconStack>
          <WebAssetTwoToneIcon />
          <UiMicroreactIcon style={{ marginTop: "3px" }} />
        </UiIconStack>
        <p>
          Sign in to save on
          <br/>
          <strong>Microreact.org</strong>
        </p>
      </Button>
    );
  }
}

function getInitialState() {
  const presentState = viewerSelectors.presentStateSelector(ViewerStore.getState());
  return {
    name: presentState.meta.name || "Unnamed Project",
    description: presentState.meta.description || "",
    jsonDataPromise: ViewerStore.dispatch(viewerActions.save()),
  };
}

class ProjectSaveDialog extends React.PureComponent {

  constructor() {
    super();
    this.state = getInitialState();
  }

  state = null

  createProjectDocument = async () => {
    const project = await this.state.jsonDataPromise;
    project.meta.name = this.state.name;
    project.meta.description = this.state.description;
    return project;
  }

  handleDownloadFile = () => {
    this.createProjectDocument()
      .then((doc) => {
        return viewerUtils.files.serialiseBlobs(doc.files).then(() => doc);
      })
      .then((data) => {
        viewerUtils.downloads.downloadDataUrl(
          JSON.stringify(
            data,
            null,
            2,
          ),
          `${data.meta.name ?? "Unnamed Project"}.microreact`,
          "application/json",
        );
      });
  }

  handleLocalStorage = () => {
    this.setState({ savingMode: "local" });

    Promise.resolve()
      .then(this.createProjectDocument)
      .then(LocalStorage.saveProject)
      .then((project) => {
        // window.history.pushState(null, projectJson.meta.name, project.url);
        this.setState({
          // projectUrl: project.url,
          savingMode: "done",
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

  handleSaveOnServer = () => {
    this.setState({ savingMode: "server" });

    this.createProjectDocument()
      .then((projectJson) => {
        return Projects.saveProjectOnServer(projectJson)
          .then((savedProjectProps) => {
            this.props.onSavedOnServer(savedProjectProps);
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

  handleUpdateOnServer = () => {
    this.setState({ savingMode: "server" });

    this.createProjectDocument()
      .then((projectJson) => {
        return Projects.updateProjectOnServer(this.props.projectProps.id, projectJson)
          .then((savedProjectProps) => {
            this.setState({
              projectUrl: savedProjectProps.url,
              savingMode: "done",
            });
            this.props.onUpdatedOnServer(savedProjectProps);
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
    const { props } = this;

    return (
      <UiDialog
        className={clsx(rootClassname, dialogClassname)}
        container={viewerUtils.html.getContainerElement}
        onClose={this.props.onClose}
        isOpen
        title={
          (this.state.savingMode === "server") ? "Saving project on Microreact.org..." :
            (this.state.savingMode === "local") ? "Saving project to Local Storage..." :
              (this.state.savingMode === "done") ? "Project Saved!" :
                "Save Project"
        }
      >
        <div className="full-content">
          { (this.state.savingMode === "local" || this.state.savingMode === "local" || this.state.savingMode === "server") && (<LinearProgress />) }

          {
            (this.state.savingMode === "done") && (
              <div>
                <CheckCircleTwoToneIcon
                  className="mr-saved-done"
                />
              </div>
            )
          }

          {
            (this.state.savingMode) && (
              <div className="mr-blinder">
                { (this.state.savingMode === "error") && (<pre>{ this.state.savingError?.message }</pre>) }
                {
                  (this.state.savingMode === "done" || this.state.projectUrl) && (
                    <UiCopyTextfield
                      value={this.state.projectUrl}
                    />
                  )
                }
              </div>
            )
          }

          <section className="mr-project-info">
            <TextField
              label="Project name"
              variant="outlined"
              size="small"
              placeholder="The name of your project"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <TextField
              label="Description (optional Markdown)"
              multiline
              rows={2}
              // defaultValue="Default Value"
              placeholder="Describe your project (briefly)"
              variant="outlined"
              value={this.state.description}
              onChange={(event) => this.setState({ description: event.target.value })}
            />
          </section>

          <section className="mr-save-actions">

            <Button
              variant="outlined"
              size="large"
              color="primary"
              className="mr-download-file"
              onClick={(this.handleDownloadFile)}
            >
              <UiIconStack>
                <InsertDriveFileTwoToneIcon />
                <GetAppRoundedIcon style={{ marginTop: "6px" }} />
              </UiIconStack>
              <p>
                Download as
                <br/>
                <strong><code>.microreact</code> file</strong>
              </p>
            </Button>

            {
              props.projectProps.isOwner && (
                <UpdateProjectButton
                  handleUpdateOnServer={this.handleUpdateOnServer}
                />
              )
            }

            <SaveProjectButton
              handleSaveOnServer={this.handleSaveOnServer}
            />

          </section>

        </div>
      </UiDialog>
    );
  }

}

ProjectSaveDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSavedOnServer: PropTypes.func.isRequired,
  onUpdatedOnServer: PropTypes.func.isRequired,
  projectProps: PropTypes.object,
};

ProjectSaveDialog.defaultProps = {
  projectProps: {},
};

ProjectSaveDialog.displayName = "ProjectSaveDialog";

export default ProjectSaveDialog;
