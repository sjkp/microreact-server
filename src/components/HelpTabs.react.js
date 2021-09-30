import React from 'react';
import { Link } from 'react-router';

const tabs = {
  'Creating and editing projects': 'instructions',
  Introduction: 'introduction',
  Tutorials: 'tutorials',
  API: 'api-docs',
};

const HelpTabs = () => (
  <div className="mdl-tabs is-upgraded" style={{ marginBottom: '32px' }}>
    <div className="mdl-tabs__tab-bar">
      {
        Object.keys(tabs).map(label => {
          const link = tabs[label];
          const { pathname } = window.location;
          const isActive = pathname.slice(1).indexOf(link) === 0;
          return (
            <Link
              key={label}
              className={`mdl-tabs__tab ${isActive ? 'is-active' : ''}`}
              to={link}
            >
              {label}
            </Link>
          );
        })
      }
    </div>
  </div>
);

export default HelpTabs;
