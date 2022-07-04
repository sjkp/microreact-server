/* eslint-disable class-methods-use-this */

import React from "react";

import UiLoadingSpinner from "../components/UiLoadingSpinner";

class Welcome extends React.Component {

  componentDidMount() {
    if (process.browser) {
      console.log("window.opener", window.opener)
      if (window !== undefined && window.opener && window.close) {
        // setTimeout(window.close, 0);
      }
    }
    setTimeout(
      () => {
        window.location = "/my-account";
      },
      0,
    );
  }

  render() {
    return (
      <UiLoadingSpinner />
    );
  }

}

export default Welcome;
