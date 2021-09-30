/* eslint-disable class-methods-use-this */
import React from "react";
import Typography from "@material-ui/core/Typography";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import { root as rootClassName } from "../styles/ui-empty-state.module.css";

function UiEmptyState(props) {
  return (
    <div className={rootClassName}>
      <div className="icon">
        { props.icon }
      </div>
      <Typography
        variant="h5"
        color="textSecondary"
      >
        { props.message }
      </Typography>
    </div>
  );
}

UiEmptyState.defaultProps = {
  icon: (<WorkOutlineIcon />),
};

export default UiEmptyState;
