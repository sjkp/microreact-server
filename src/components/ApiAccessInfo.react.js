/* eslint new-cap: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import ApiUtils from '../utils/api';
import config from '../utils/config';

export default class Compoent extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    token: null,
    hasApiAccess: config.user.hasApiAccess,
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  showApiAccessToken = () => {
    ApiUtils.getApiAcessToken()
      .then((data) => {
        this.setState({
          hasApiAccess: true,
          token: data.token,
        });
      });
  }

  revokeApiAccessToken = () => {
    ApiUtils.revokeApiAcessToken()
      .then(() => {
        this.setState({
          hasApiAccess: false,
          token: null,
        });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.hasApiAccess ?
            <p>
              API access is currently enabled.
            </p> :
            <p>
              API access to your account is currently disabled.
              <br />
              Enable API only if you wish to access to your projects programmatically.
            </p>
        }

        {
          this.state.token && (
            <p>
              Your API access token is: <code>{ this.state.token }</code>
            </p>
          )
        }

        <p>
          {
            this.state.hasApiAccess ?
              <React.Fragment>
                { !this.state.token && <button className="mdl-button mdl-js-button" onClick={this.showApiAccessToken}>Show access token</button> }
                <button className="mdl-button mdl-js-button" onClick={this.revokeApiAccessToken}>Revoke access token</button>
              </React.Fragment>
              :
              <button className="mdl-button mdl-js-button" onClick={this.showApiAccessToken}>Enable API Access</button>
          }
        </p>
      </div>
    );
  }
}
