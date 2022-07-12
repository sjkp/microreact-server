/* eslint-disable class-methods-use-this */

import React from "react";

import UiLoadingSpinner from "../components/UiLoadingSpinner";

export async function getServerSideProps(context) {
  return { props: {} };
}

class Welcome extends React.Component {

  componentDidMount() {
    if (
      process.browser
      &&
      window !== undefined
      &&
      window.opener
      &&
      window.opener.location.origin === window.location.origin
      &&
      window.close
    ) {
      setTimeout(window.close, 0);
    }
    else {
      setTimeout(
        () => {
          window.location = "/my-account";
        },
        0,
      );
    }
  }

  render() {
    return (
      <UiLoadingSpinner />
    );
  }

}

export default Welcome;
