import PropTypes from 'prop-types';
import React from 'react';

class ApiError extends React.Component {
  static displayName = 'ApiError';

  static propTypes = {
    code: PropTypes.number,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  };

  static defaultProps = {
    code: null,
  };

  getErrorIcon() {
    switch (this.props.code) {
      case 401:
        return 'vpn_key';
      case 403:
        return 'lock';
      case 404:
        return 'block';
      default:
        return 'error_outline';
    }
  }

  getErrorMessage() {
    if (this.props.message) {
      return this.props.message;
    }
    switch (this.props.code) {
      case 401:
        return 'You are not authorised to access this project. Please sign in and try again.';
      case 403:
        return 'You are not authorised to access this project.';
      case 404:
        return 'Project not found';
      default:
        return this.props.code;
    }
  }

  renderMessage(errorMessage) {
    if (Array.isArray(errorMessage)) {
      return (
        <ul>
          {
            errorMessage.map(err =>
              <li key={err}>
                {err}
              </li>
            )
          }
        </ul>
      );
    } else {
      return (
        <p>
          { errorMessage }
        </p>
      );
    }
  }

  render() {
    const errorIcon = this.getErrorIcon();
    const errorMessage = this.getErrorMessage();
    return (
      <div className="mdl-typography--text-center">
        <h1 className="material-icons mr-error-icon">{errorIcon}</h1>
        { this.renderMessage(errorMessage) }
      </div>
    );
  }
}

export default ApiError;
