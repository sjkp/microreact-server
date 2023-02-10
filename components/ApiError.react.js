/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import React from "react";

function getErrorMessage(code) {
  switch (code) {
    case 401:
      return "You are not authorised to access this project. Please sign in and try again.";
    case 403:
      return "You are not authorised to access this project.";
    case 404:
      return "This project could not be found";
    default:
      return code;
  }
}

const ApiError = React.memo(
  (props) => (
      <div
        STYLE="color:#000;background:#fff;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center"
      >
        <div>
          <h1 STYLE="display:inline-block;border-right:1px solid rgba(0, 0, 0,.3);margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top">
            { props.code }
          </h1>
          <div STYLE="display:inline-block;text-align:left;line-height:54px;height:49px;vertical-align:middle">
            <h2 STYLE="font-size:14px;font-weight:normal;margin:0;padding:0">
              { getErrorMessage(props.code) }
            </h2>
          </div>
        </div>
        {/* <pre>
          { props.message || props.error?.message }
        </pre> */}
      </div>
  ),
);

ApiError.propTypes = {
  code: PropTypes.number,
  error: PropTypes.object,
  message: PropTypes.string,
  status: PropTypes.string,
};

ApiError.displayName = "ApiError";

export default ApiError;
