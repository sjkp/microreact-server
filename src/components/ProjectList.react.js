/* eslint new-cap: 0 */

import React from 'react';
// import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Link from "./Link.react";

class ProjectList extends React.Component {

  static propTypes = {
    projects: PropTypes.array,
    onEditProject: PropTypes.func,
  };

  static defaultProps = {
    projects: [],
  };

  renderProjects = (projects) => (
    <table className="mdl-data-table mdl-typography--table-striped">
      <tbody>
        {
          projects.map((project) => {
            const projectUrl = `/project/${project.shortId}`;
            const { shortId, name, createdAt, id } = project;
            const completeUrl = `${window.location.origin}${projectUrl}`;
            return (
              <tr key={shortId}>
                <td title={name} className="mdl-data-table__cell--non-numeric">
                  {name}
                </td>
                <td className="mdl-data-table__cell--non-numeric mr-muted">
                  {new Date(createdAt).toLocaleDateString()}
                </td>
                <td className="mdl-data-table__cell--non-numeric">
                  <Link to={projectUrl} target="_blank" title={completeUrl}>
                    {completeUrl}
                  </Link>
                </td>
                <td>
                  { id ?
                    <div className="mdl-color-text--grey mr-project-actions">
                      <button id={`editbtn-${shortId}`} className="mdl-button mdl-button--icon" onClick={() => this.props.onEditProject(project)}>
                        <i className="material-icons">edit</i>
                      </button>
                      <div className="mdl-tooltip" htmlFor={`editbtn-${shortId}`}>Edit Project</div>
                    </div> :
                    null
                  }
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );

  renderProjectFolders = (projects) => {
    const folders = Array.from(new Set(projects.map(x => x.folder || ''))).sort();
    return (
      folders.map(folder => (
        <div key={folder || ''} className="mr-myaccount-folder">
          { <h3 className="mr-myaccount-folder-title">{folder || '(Unsorted)'}</h3> }
          { this.renderProjects(projects.filter(x => (x.folder || '') === folder)) }
        </div>
      ))
    );
  };

  render() {
    const projects = this.props.projects || [];
    const userProjects = projects.filter(project => !project.shared);
    const sharedProjects = projects.filter(project => project.shared);

    return (
      <React.Fragment>
        {
          userProjects.length ?
          this.renderProjectFolders(userProjects) :
          <p className="mr-placeholder-text">
            You do not have any projects. <Link to="/upload">Upload a new project</Link>.
          </p>
        }
        {
          sharedProjects.length ?
          <React.Fragment>
            <h2 className="mr-heading mdl-typography--display-1">Shared with me</h2>
            {this.renderProjectFolders(sharedProjects)}
          </React.Fragment> :
          null
        }
      </React.Fragment>
    );
  }
}

export default ProjectList;
