import '../css/cgps-avatar.css';
import '../css/navigation-drawer.css';

import React from 'react';

import config from '../utils/config';
import Link from "./Link.react";

class NavigationDrawer extends React.Component {
  static displayName = 'NavigationDrawer';

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  getHeader = () => {
    const { isAuthenticated, user } = config;
    if (isAuthenticated) {
      return (
        <header className="mdl-color-text--blue-grey-50 mr-drawer-header">
          <Link
            className="cgps-avatar cgps-avatar--mini mdl-color-text--blue-grey-50"
            to="/myaccount"
          >
            <img src={user.photo} className="cgps-avatar__image" />
            <div className="cgps-avatar__name">
              <span>{user.name}</span>
            </div>
            <div className="cgps-avatar__contact">
              <span>{user.email}</span>
            </div>
          </Link>
        </header>
      );
    }
    return (
      <header className="mdl-layout-title">
        <a href="">
          <img src="images/logos/microreact.svg" />
        </a>
      </header>
    );
  };

  getMyAccountMenu = () => {
    const { isAuthenticated } = config;
    if (isAuthenticated) {
      return (
        <Link className="mdl-navigation__link" to="/myaccount">
          <i className="material-icons">account_circle</i>My account
        </Link>
      );
    }

    return null;
  };

  getUserMenu = () => {
    const { isAuthenticated } = config;
    if (isAuthenticated) {
      return (
        <a className="mdl-navigation__link" href="signout">
          <i className="material-icons">lock_open</i>Sign out
        </a>
      );
    }

    return (
      <Link
        className="mdl-navigation__link"
        title="Sign in to your Microreact account"
        to="/signin"
      >
        <i className="material-icons">vpn_key</i>Sign in
      </Link>
    );
  };

  closeMenu = () => {
    $('.mdl-layout__obfuscator').click();
  };

  render() {
    const { isAuthenticated, version } = config;
    return (
      <div
        className="mdl-layout__drawer"
        onClick={this.closeMenu}
        data-html2canvas-ignore="true"
      >
        <button
          title="Close navigation pane"
          className={`mdl-button mdl-button--icon mdl-navigation__close ${isAuthenticated ? 'mdl-color-text--blue-grey-50' : ''}`}
        >
          <i className="material-icons">close</i>
        </button>
        { this.getHeader() }
        {
          version &&
          <Link to="/release-notes" className="mr-version">
            v{version} &ndash; Release Notes
          </Link>
        }
        <nav className="mdl-navigation">
          { this.getMyAccountMenu() }
          <Link className="mdl-navigation__link" to="/">
            <i className="material-icons">home</i>Showcase
          </Link>
          <Link className="mdl-navigation__link" to="/upload">
            <i className="material-icons">cloud_upload</i>Upload
          </Link>
          <Link className="mdl-navigation__link" to="/instructions">
            <i className="material-icons">help</i>Instructions
          </Link>
          <Link className="mdl-navigation__link" to="tutorials">
            <i className="material-icons">format_list_numbered</i>Tutorials
          </Link>
          <Link className="mdl-navigation__link" to="/api-docs">
            <i className="material-icons">code</i>API
          </Link>
          <Link className="mdl-navigation__link" to="/about">
            <i className="material-icons">info_outline</i>About
          </Link>
          { this.getUserMenu() }
        </nav>
        <footer>
          <a href="http://www.pathogensurveillance.net/">
            <img className="cgps-logo" src="images/logos/cgps-short.svg" />
          </a>
        </footer>
      </div>
    );
  }
}

export default NavigationDrawer;
