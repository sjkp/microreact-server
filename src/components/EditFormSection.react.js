/* eslint no-param-reassign: ["error", { "props": false }] */

import PropTypes from 'prop-types';

import React from 'react';
import clsx from 'clsx';

class EditFormSection extends React.Component {
  static displayName = 'EditFormSection';

  static propTypes = {
    expanded: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    expanded: true,
  };

  state = {
    expanded: this.props.expanded,
  };

  render() {
    const { className, title, icon, children } = this.props;
    const { expanded } = this.state;
    return (
      <section
        className={clsx(
          'mr-project-form-section', className, { 'is-expanded': expanded }
        )}
      >
        <header
          className="mr-project-form-header"
          onClick={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
          title={expanded ? 'Click to Collapse' : 'Click to Expand'}
        >
          <i className="material-icons">{icon}</i>
          <h3 className="mr-project-form-title">
            {title}
          </h3>
          <i className="material-icons">{expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
        </header>
        <div style={{ display: expanded ? '' : 'none' }}>
          { children }
        </div>
      </section>
    );
  }
}

export default EditFormSection;
