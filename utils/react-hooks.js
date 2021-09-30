import React from "react";

import debounce from "lodash.debounce";

export function debouncedCallback(func) {
  return React.useCallback(
    debounce(
      func,
      1000,
    ),
    [],
  );
}
