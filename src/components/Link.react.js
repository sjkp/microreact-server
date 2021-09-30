import React from "react";

const Link = React.memo(
  (args) => {
    const { to, children, ...rest } = args;
    return (
      <a
        {...rest}
        href={to}
      >
        { children }
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;
