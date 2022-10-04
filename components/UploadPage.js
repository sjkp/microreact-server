/* eslint-disable class-methods-use-this */

import React from "react";
import { actions, store as ViewerStore } from "microreact-viewer/index";

import publicRuntimeConfig from "../utils/public-runtime-config";
import ProjectViewer from "./ProjectViewer.react";

class UploadPage extends React.Component {

  componentDidMount() {
    ViewerStore.dispatch(
      actions.config({
        mapboxApiAccessToken: publicRuntimeConfig.mapboxApiAccessToken,
        readOnly: false,
      })
    );
    ViewerStore.dispatch(
      actions.reset()
    );
  }

  render() {
    return (
      <ProjectViewer />
    );
  }
}

export default UploadPage;
