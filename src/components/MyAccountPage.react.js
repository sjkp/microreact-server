import '../css/cgps-avatar.css';
import '../css/my-account.css';

import React from 'react';
import { Link } from 'react-router';

import Upload from './Upload.react';
import UiLoadingSpinner from '../../components/UiLoadingSpinner';
import ApiError from './ApiError.react';
// import ProjectList from './ProjectList.react';
import ApiAccessInfo from './ApiAccessInfo.react';
// import EditProjectPortal from './EditProjectPortal.react';

import ApiUtils from '../utils/api';
import config from '../utils/config';

class MyProjectsPage extends React.Component {

  state = {
    loading: true,
    error: null,
    projects: [],
    editingProjectId: null,
    editingProjectTitle: null,
  };

  componentDidMount() {
    componentHandler.upgradeDom();
    // this.loadProjectData();
  }

  getContents = () => {
    const { user } = config;

    if (this.state.loading) {
      return (
        <UiLoadingSpinner>
          Loading Project List
        </UiLoadingSpinner>
      );
    }

    if (this.state.error) {
      return (
        <ApiError {...this.state.error} />
      );
    }

    return (
      <div className="mr-myaccount">
        <div className="mdl-grid">
          <div className="cgps-avatar mdl-cell mdl-cell--6-col">
            <div className="cgps-avatar__image">
              {
                (user.provider === 'passwordless') ?
                <a href="https://gravatar.com/" target="_blank" rel="noopener" title="Change Image on Gravatar">
                  <img src={user.photo} />
                </a> :
                <img src={user.photo} />
              }
            </div>
            <div className="cgps-avatar__name">
              Signed in as <strong>{user.name}</strong> (<span className="cgps-avatar__provider">{ user.provider }</span>)
            </div>
            <div className="cgps-avatar__contact">
              {user.email}
              <br />
              
              <a href="signout">Sign out</a>
            </div>
          </div>
          {
            user.organisation ?
            <div className="mr-org-avatar mdl-cell mdl-cell--6-col">
              <a className="mr-org-avatar mdl-cell mdl-cell--6-col" href={user.organisationUrl} target="_blank">
                <img src={user.organisationLogo} className="mr-organisation-image" title={user.organisationName} />
              </a>
            </div> : null
          }
        </div>
        <section className="mdl-tabs mdl-js-tabs">
          <div className="mdl-tabs__tab-bar">
            <a href="#myProjectsTab" className="mdl-tabs__tab is-active">
              My Projects
            </a>
            <a href="#apiAccessTab" className="mdl-tabs__tab">
              API Access
            </a>
          </div>
          <div className="mdl-tabs__panel is-active" id="myProjectsTab">
            <ProjectList
              projects={this.state.projects}
              onEditProject={project => this.setState({
                editingProjectId: project.id,
                editingProjectTitle: `${project.name} (${project.shortId})`,
              })}
            />
          </div>
          <div className="mdl-tabs__panel" id="apiAccessTab">
            <ApiAccessInfo />
          </div>
        </section>

        <Link to="/upload" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mr-floating-button mdl-shadow--4dp">
          <i className="material-icons">cloud_upload</i>
        </Link>
        <EditProjectPortal
          projectId={this.state.editingProjectId}
          projectTitle={this.state.editingProjectTitle}
          onDeleteProject={this.handleDeleteProject}
          onProjectUpdated={this.handleProjectUpdated}
          onHideOverlay={() => this.setState({
            editingProjectId: null,
            editingProjectTitle: null,
          })}
        />
      </div>
    );
  };

  loadProjectData = () => {
    ApiUtils.getUserProjects()
      .then(projects =>
        this.setState({
          projects,
          loading: false,
        })
      )
      .catch(error =>
        this.setState({
          error,
          loading: false,
        })
      );
  };

  handleDeleteProject = (projectId) => {
    ApiUtils.deleteUserProject(projectId)
      .then(() => this.loadProjectData());
  };

  handleProjectUpdated = () => {
    this.loadProjectData();
  };

  render() {
    return (
      <Upload className="mr-myaccount-page">
        { this.getContents() }
      </Upload>
    );
  }
}

export default MyProjectsPage;
