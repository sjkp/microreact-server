/* eslint-disable class-methods-use-this */
import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

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

UiEmptyState.propTypes = {
  icon: PropTypes.node,
  message: PropTypes.node,
};

UiEmptyState.defaultProps = {
  icon: (<WorkOutlineIcon />),
};

export default UiEmptyState;
