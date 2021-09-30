import '../css/cgps-overlay.css';

import PropTypes from 'prop-types';

import React from 'react';

class Overlay extends React.Component {
  static displayName = 'Overlay';

  static propTypes = {
    closeButton: PropTypes.bool,
    isOpen: PropTypes.bool,
    closeMenu: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeMenuOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeMenuOnEsc);
  }

  closeMenuOnEsc = (event) => {
    if (this.props.isOpen && event.keyCode === 27) {
      this.props.closeMenu();
    }
  };

  render() {
    const { isOpen } = this.props;
    return (
      <div className={`cgps-overlay ${isOpen ? 'cgps-overlay--is-visible' : ''}`}>
        <div
          className={`cgps-overlay__content ${this.props.className}`}
          onClick={e => e.stopPropagation()}
        >
          { this.props.closeButton ? (
            <button onClick={this.props.closeMenu}
              className="mdl-button mdl-button--icon mdl-color-text--grey cgps-overlay__close"
            >
              <i className="material-icons">close</i>
            </button>
          ) : null }
          { isOpen ? this.props.children : null }
        </div>
      </div>
    );
  }
}

export default Overlay;
