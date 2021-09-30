/* global dialogPolyfill */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Overlay from './Overlay.react';
import EditProject from './EditProject.react';

class EditProjectPortal extends React.Component {

  static propTypes = {
    onProjectUpdated: PropTypes.func,
    onDeleteProject: PropTypes.func,
    onHideOverlay: PropTypes.func,
    projectId: PropTypes.string,
    projectTitle: PropTypes.string,
  }

  componentDidMount() {
    if (this.confirmDeleteDialog && !this.confirmDeleteDialog.showModal) {
      dialogPolyfill.registerDialog(this.confirmDeleteDialog);
    }
  }

  showDeleteDialog = () => {
    this.confirmDeleteDialog.showModal();
  };

  confirmDeleteProject = () => {
    this.props.onDeleteProject(this.props.projectId);
    this.cancelDeleteProject();
    this.props.onHideOverlay();
  };

  cancelDeleteProject = () => {
    this.confirmDeleteDialog.close();
  };

  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <Overlay
          isOpen={this.props.projectId !== null}
          closeMenu={this.props.onHideOverlay}
          className="mdl-shadow--2dp cgps-overlay--full-height"
        >
          {this.props.projectId ? (
            <EditProject
              projectId={this.props.projectId}
              closeMenu={this.props.onHideOverlay}
              onProjectUpdated={this.props.onProjectUpdated}
              showDeleteDialog={this.showDeleteDialog}
            />
          ) : null}
        </Overlay>
        <dialog ref={el => { this.confirmDeleteDialog = el; }} className="mdl-dialog">
          <h3 className="mr-heading mdl-dialog__title">Are you sure?</h3>
          <div className="mdl-dialog__content">
            <p>
              This will permanently delete the project:<br />
            </p>
            <p><strong>{this.props.projectTitle}</strong></p>
            <p>
              This action cannot be undone.
            </p>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button mdl-button--raised" style={{ color: '#ba2b2b' }} onClick={this.confirmDeleteProject}>Delete</button>
            <button type="button" className="mdl-button mr-muted" onClick={this.cancelDeleteProject}>Cancel</button>
          </div>
        </dialog>
      </React.Fragment>,
      document.getElementById('mr-modal-portal')
    );
  }

}

export default EditProjectPortal;
