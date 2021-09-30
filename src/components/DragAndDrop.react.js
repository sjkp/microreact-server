import '../css/drop-indicator.css';

import 'jquery-draghover';

import React from 'react';

class DragAndDrop extends React.Component {
  static displayName = 'DragAndDrop';

  state = {
    indicatorVisible: false,
  };

  componentDidMount() {
    $('body').on('drop', event => {
      event.preventDefault();
      this.hideDropIndicator();
      if (event && event.originalEvent &&
        event.originalEvent.dataTransfer &&
        event.originalEvent.dataTransfer.files) {
        this.props.onDrop(Array.from(event.originalEvent.dataTransfer.files));
      }
    });
    $.draghover({
      draghoverstart: () => {
        this.showDropIndicator();
      },
      draghoverend: () => {
        this.hideDropIndicator();
      },
    });
  }

  componentWillUnmount() {
    $('body').off('drop');
    $.draghover(false);
  }

  showDropIndicator = () => {
    if (! this.state.indicatorVisible) {
      this.setState({ indicatorVisible: true });
    }
  };

  hideDropIndicator = () => {
    if (this.state.indicatorVisible) {
      this.setState({ indicatorVisible: false });
    }
  };

  render() {
    return (
      <div
        className={`wgsa-drag-and-drop ${this.state.indicatorVisible ? 'is-dragover' : ''}`}
      >
        <div className="wgsa-drop-indicator">
          <div className="wgsa-drop-indicator__message">
            <div className="wgsa-drop-indicator__icons">
              <span className="wgsa-file-icon">
                <i className="material-icons">insert_drive_file</i>
                <span>.csv</span>
              </span>
              <span className="wgsa-file-icon">
                <i className="material-icons">insert_drive_file</i>
                <span>.nwk</span>
              </span>
            </div>
            <h3 className="wgsa-drop-indicator__title">Drop to add to Microreact</h3>
          </div>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default DragAndDrop;
