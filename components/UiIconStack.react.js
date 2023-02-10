import React from "react";
import PropTypes from "prop-types";

import { root as rootClassName } from "../styles/ui-icon-stack.module.css";

const UiIconStack = React.memo(
  (props) => (
    <figure
      className={`mr-ui-icon-stack ${rootClassName}`}
      style={props.style}
    >
      { props.children }
    </figure>
  ),
);

UiIconStack.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

UiIconStack.displayName = "IconStack";

export default UiIconStack;
