import React from 'react';
// import { Link } from 'react-router';

import UiLoadingSpinner from '../../components/UiLoadingSpinner';
import ApiError from './ApiError.react';
import Link from "./Link.react";

import ApiUtils from '../utils/api';

class ListedProjects extends React.Component {
  static displayName = 'ListedProjects';

  state = {
    loading: true,
    error: null,
    projects: [],
  };

  componentDidMount() {
    ApiUtils.getListedProjects()
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
  }

  render() {
    if (this.state.loading) {
      return <UiLoadingSpinner><em>Loading listed projects...</em></UiLoadingSpinner>;
    }
    if (this.state.error) {
      return (
        <ApiError {...this.state.error} />
      );
    }
    return (
      <div className="mr-listed-projects">
        {
          this.state.projects.map(({ name, shortId, description, createdAt }, index) =>
            <Link
              key={index}
              to={`/project/${shortId}`}
              title="View Project"
              className="mr-listed-project"
            >
              <h3 className="mr-listed-project-title">{name}</h3>
              <p>{description}</p>
              <span className="mr-listed-project-date">{new Date(createdAt).toLocaleDateString()}</span>
            </Link>
          )
        }
      </div>
    );
  }
}

export default ListedProjects;
