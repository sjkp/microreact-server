import React from 'react';

class Spinner extends React.Component {
  static displayName = 'Spinner';

  componentDidMount() {
    componentHandler.upgradeElement(this.spinner);
  }

  render() {
    return (
      <div
        ref={el => {
          this.spinner = el;
        }}
        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"
      >
      </div>
    );
  }
}

export default Spinner;
