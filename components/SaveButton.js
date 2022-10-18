import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import { UiIconButton } from "microreact-viewer/index";
import { connectToPresentState } from "microreact-viewer/utils/state";

const SaveButton = React.memo(
  (props) => {
    return (
      <UiIconButton
        colour="inherit"
        onClick={props.onClick}
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

SaveButton.propTypes = {
  hasChanges: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    hasChanges: state.config.isDirty,
  };
};

export default connectToPresentState(SaveButton, mapStateToProps);
