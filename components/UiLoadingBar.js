import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const LoadingBarStyle = {
  position: "fixed",
  width: "100%",
  top: "48px",
  left: 0,
  right: 0,
};

function UiLoadingBar() {
  return (
    <LinearProgress
      style={LoadingBarStyle}
      variant="indeterminate"
      color="primary"
    />
  );
}

export default UiLoadingBar;
