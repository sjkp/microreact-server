import React from "react";

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

UiIconStack.displayName = "IconStack";

export default UiIconStack;
