import PropTypes from "prop-types";
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

function formatOptions(props) {
  if (props.children) {
    return props.children;
  }
  else if (props.items) {
    return props.items.map(
      (item) => (
        <MenuItem
          key={item.value}
          value={0}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <PeopleOutlineOutlinedIcon />
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: 16 }}
            >
              Restricted Access
              <Typography
                color="textSecondary"
                component="small"
                variant="caption"
              >
                Only you and people added below can access this project
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      )
    );
  }
  return undefined;
}

function UiSelect(props) {
  const { size, variant, ...rest } = props;
  return (
    <FormControl
      size={size}
      variant={variant}
    >
      <InputLabel>
        { props.label }
      </InputLabel>
      <Select
        {...rest}
      >
        { formatOptions(props) }
      </Select>
    </FormControl>
  );
}

UiSelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.any.isRequired,
  variant: PropTypes.string,
};

UiSelect.Item = MenuItem;

export default UiSelect;
