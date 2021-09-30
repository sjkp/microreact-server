import PropTypes from "prop-types";
import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import InputLabel from "@material-ui/core/InputLabel";

import { CopyToClipboard } from "react-copy-to-clipboard";

class UiCopyTextfield extends React.PureComponent {

  state = {
    copied: false,
  }

  render() {
    const { props, state } = this;

    return (
      <FormControl
        variant="outlined"
        color="primary"
        title={props.title || "Copy URL"}
        size={props.size}
      >
        { props.label && (<InputLabel>{ props.label }</InputLabel>) }

        <CopyToClipboard
          text={props.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <OutlinedInput
            value={props.value}
            label={props.label}
            readOnly
            color="primary"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Copy"
                  edge="end"
                >
                  { state.copied ? <DoneOutlineRoundedIcon /> : <FileCopyRoundedIcon /> }
                </IconButton>
              </InputAdornment>
            }
          />
        </CopyToClipboard>
      </FormControl>
    );
  }

}

UiCopyTextfield.displayName = "UiCopyTextfield";

UiCopyTextfield.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default UiCopyTextfield;
