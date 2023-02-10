/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

function UiDataHook(props) {
  const { dataHook, EmptyView, ErrorView, children: DataView, LoadingView, ...rest } = props;
  const { data, isError, isLoading } = dataHook();

  if (isLoading || props.isLoading) {
    if (LoadingView) {
      return (<LoadingView />);
    }
    else {
      return (
        <LinearProgress
          color="primary"
          variant="indeterminate"
        />
      );
    }
  }

  if (isError) {
    if (ErrorView) {
      return (
        <ErrorView
          {...rest}
          error={isError}
        />
      );
    }
    else {
      return (
        <pre {...rest}>{ isError.message || JSON.stringify(isError, null, 2) }</pre>
      );
    }
  }

  if (!data && EmptyView) {
    return (
      <EmptyView {...rest} />
    );
  }

  return (
    <DataView
      {...rest}
      data={data}
    />
  );
}

UiDataHook.propTypes = {
  children: PropTypes.elementType.isRequired,
  dataHook: PropTypes.func.isRequired,
  EmptyView: PropTypes.elementType,
  ErrorView: PropTypes.elementType,
  isLoading: PropTypes.bool,
  LoadingView: PropTypes.elementType,
};

export default UiDataHook;
