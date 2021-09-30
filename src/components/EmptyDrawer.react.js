import '../css/cgps-avatar.css';
import '../css/navigation-drawer.css';

import React from 'react';
import { Link } from 'react-router';

import config from '../utils/config';

class NavigationDrawer extends React.Component {
  static displayName = 'NavigationDrawer';

  render() {
    const { isAuthenticated, version } = config;
    return (
      <div className="mdl-layout__drawer" onClick={this.closeMenu}>
        <div
        >
          a
        </div>
      </div>
    );
  }
}

export default NavigationDrawer;
