import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from './Dropdown.react';
import config from '../utils/config';

const timelineFormats = [
  'YYYY-MM-DD',
  'DD/MM/YYY',
  'DD.MM.YYY',
  'MM/DD/YYY',
  'MM.DD.YYY',
  'ISO 8601',
];

class SetProjectMetadata extends React.Component {
  static displayName = 'SetProjectMetadata';

  static propTypes = {
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    fields: PropTypes.array,
    warnings: PropTypes.array,
    handleCancelProject: PropTypes.func.isRequired,
    handleSetProjectMetadata: PropTypes.func.isRequired,
  };

  state = {
    metadata: {
      name: this.props.projectName || null,
      description: this.props.projectDescription || null,
      website: null,
      email: null,
      id_field: null,
      map_latitude: null,
      map_longitude: null,
      timeline_field: null,
      timeline_format: null,
      timeline_year_field: null,
      timeline_month_field: null,
      timeline_dat_field: null,
    },
    isProjectListed: false,
    showIdFields: false,
    showMapFields: false,
    showTimelineFields: false,
    useOneFieldForTimeline: false,
    fields: this.props.fields.map(x => x.trim().toLowerCase()),
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  handleProjectMetadata = (metadataName, metadataValue) => {
    this.setState({
      metadata: {
        ...(this.state.metadata),
        [metadataName]: metadataValue,
      },
    });
  };

  isAllRequiredMetadataProvided = () => {
    return (this.state.metadata.name);
  };

  handleInputChange = (event) => {
    this.handleProjectMetadata(event.target.id, event.target.value);
  };

  handleIsListedInputChange = () => {
    this.setState({ isProjectListed: !this.state.isProjectListed });
  };

  handleCancel = () => {
    this.props.handleCancelProject();
  };

  handleCreateProject = () => {
    const metadata = {
      name: this.state.metadata.name,
      description: this.state.metadata.description,
      email: this.state.metadata.email,
      website: this.state.metadata.website,
    };

    if (this.state.showIdFields) {
      metadata.id = this.state.metadata.id_field;
    }

    if (this.state.showMapFields) {
      metadata.map_latitude = this.state.metadata.map_latitude;
      metadata.map_longitude = this.state.metadata.map_longitude;
    }

    if (this.state.showTimelineFields) {
      if (this.state.useOneFieldForTimeline) {
        metadata.timeline_field = this.state.metadata.timeline_field;
        metadata.timeline_format = this.state.metadata.timeline_format;
      } else {
        metadata.timeline_field = {
          year: this.state.metadata.timeline_year_field,
          month: this.state.metadata.timeline_month_field,
          day: this.state.metadata.timeline_day_field,
        };
      }
    }

    this.props.handleSetProjectMetadata(metadata);
  };

  renderValidationWarnings = () => {
    const { warnings = [] } = this.props;

    if (!warnings || warnings.length === 0) {
      return null;
    }

    return warnings.map(
      ({ message }) => (
        <p className="mr-warning mdl-shadow--2dp">
          <i className="material-icons">warning</i>
          { message }
        </p>
      )
    );
  };

  renderIdSettings = () => {
    const containsId = (
      this.state.fields.indexOf('__id') >= 0 || this.state.fields.indexOf('id') >= 0
    );

    if (containsId) {
      return null;
    }

    if (this.state.showIdFields) {
      return (
        <div className="mr-project-settings">
          <h6>ID Settings</h6>
          <div className="mr-project-fields">
            <Dropdown
              id="id_field"
              label="ID column"
              options={this.props.fields}
              selected={this.state.metadata.id_field}
              fullWidth
              floatingLabel
              onChange={value => this.handleProjectMetadata('id_field', value)}
            />
          </div>
        </div>
      );
    }

    return (
      <p className="mr-warning mdl-shadow--2dp">
        <i className="material-icons">warning</i>
        The project does not contain an <code>id</code> column.
        <br />
        You need
        to <a href="javascript:;" onClick={() => this.setState({ showIdFields: true })}>choose a different ID column</a>
      </p>
    );
  };

  renderMapSettings = () => {
    const containsMap = (
      (this.state.fields.indexOf('__latitude') >= 0 || this.state.fields.indexOf('latitude') >= 0) &&
      (this.state.fields.indexOf('__longitude') >= 0 || this.state.fields.indexOf('longitude') >= 0)
    );

    if (containsMap) {
      return null;
    }

    if (this.state.showMapFields) {
      return (
        <div className="mr-project-settings">
          <h6>Map Settings</h6>
          <div className="mr-project-fields">
            <Dropdown
              id="map_latitude"
              label="Latitude column"
              options={this.props.fields}
              selected={this.state.metadata.map_latitude}
              fullWidth
              floatingLabel
              onChange={value => this.handleProjectMetadata('map_latitude', value)}
            />
            <Dropdown
              id="map_longitude"
              label="Longitude column"
              options={this.props.fields}
              selected={this.state.metadata.map_longitude}
              fullWidth
              floatingLabel
              onChange={value => this.handleProjectMetadata('map_longitude', value)}
            />
          </div>
        </div>
      );
    }

    return (
      <p className="mr-warning mdl-shadow--2dp">
        <i className="material-icons">language</i>
        The project does not contain <code>latitude</code> and <code>longitude</code> columns.
        <br />
        You can continue without map,
        or <a href="javascript:;" onClick={() => this.setState({ showMapFields: true })}>choose different map columns</a>
      </p>
    );
  };

  renderTimelineSettings = () => {
    const containsTimeline = (
      this.state.fields.indexOf('year') >= 0 || this.state.fields.indexOf('__year') >= 0
    );

    if (containsTimeline) {
      return null;
    }

    if (this.state.showTimelineFields) {
      return (
        <div className="mr-project-settings">
          <h6>Timeline Settings</h6>
          <div className="">
            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-1">
              <input
                type="radio" id="option-1" className="mdl-radio__button" name="options"
                checked={!this.state.useOneFieldForTimeline}
                onChange={() => this.setState({ useOneFieldForTimeline: false })}
              />
              <span className="mdl-radio__label">Use different columns for year, month, and day.</span>
            </label>
            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-2">
              <input
                type="radio" id="option-2" className="mdl-radio__button" name="options"
                checked={this.state.useOneFieldForTimeline}
                onChange={() => this.setState({ useOneFieldForTimeline: true })}
              />
              <span className="mdl-radio__label">Use the same column for year, month, and day.</span>
            </label>
          </div>
          {
            this.state.useOneFieldForTimeline ?
            <div className="mr-project-fields">
              <Dropdown
                id="timeline_field"
                label="Timeline column"
                options={this.props.fields}
                selected={this.state.metadata.timeline_field}
                fullWidth
                floatingLabel
                onChange={value => this.handleProjectMetadata('timeline_field', value)}
              />
              <Dropdown
                id="timeline_month_field"
                label="Format"
                options={timelineFormats}
                selected={this.state.metadata.timeline_format}
                fullWidth
                floatingLabel
                onChange={value => this.handleProjectMetadata('timeline_format', value)}
              />
            </div> :
            <div className="mr-project-fields">
              <Dropdown
                id="timeline_year_field"
                label="Year column"
                options={this.props.fields}
                selected={this.state.metadata.timeline_year_field}
                fullWidth
                floatingLabel
                onChange={value => this.handleProjectMetadata('timeline_year_field', value)}
              />
              <Dropdown
                id="timeline_month_field"
                label="Month column"
                options={this.props.fields}
                selected={this.state.metadata.timeline_month_field}
                fullWidth
                floatingLabel
                onChange={value => this.handleProjectMetadata('timeline_month_field', value)}
              />
              <Dropdown
                id="timeline_day_field"
                label="Day column"
                options={this.props.fields}
                selected={this.state.metadata.timeline_day_field}
                fullWidth
                floatingLabel
                onChange={value => this.handleProjectMetadata('timeline_day_field', value)}
              />
            </div>
          }
        </div>
      );
    }

    return (
      <p className="mr-warning mdl-shadow--2dp">
        <i className="material-icons">access_time</i>
        The project does not contain <code>year</code>, <code>month</code>, and <code>day</code> columns.
        <br />
        You can continue without timeline,
        or <a href="javascript:;" onClick={() => this.setState({ showTimelineFields: true })}>choose different timeline columns</a>
      </p>
    );
  };

  renderNotSignedInWarning() {
    if (config.isAuthenticated) {
      return null;
    }

    return (
      <p className="mr-warning mdl-shadow--2dp">
        <i className="material-icons">person</i>
        You are not currently signed in. You can <a href="signin">sign in or create an account</a>, or continue without signing in however you will not be able to edit or delete the project.
      </p>
    );
  }

  render() {
    const hasFields = this.props.fields && this.props.fields.length > 0;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col" style={{ margin: 'auto auto' }}>
          <h4 className="mr-heading">
            Create a new project
          </h4>

          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
            <input ref="projectName" className="mdl-textfield__input" type="text" pattern=".+" id="name" value={this.state.metadata.name} onChange={this.handleInputChange} />
            <label className="mdl-textfield__label" htmlFor="name">The name of your project: <span style={{ color: '#ff0000' }}>*</span></label>
            <span className="mdl-textfield__error">Project name is required.</span>
          </div>

          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
            <textarea className="mdl-textfield__input" rows="3" id="description" onChange={this.handleInputChange}>
              {this.state.metadata.description}
            </textarea>
            <label className="mdl-textfield__label" htmlFor="description">Describe your project (briefly):</label>
          </div>

          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
            <input className="mdl-textfield__input" type="email" id="email" value={this.state.metadata.email} onChange={this.handleInputChange} />
            <label className="mdl-textfield__label" htmlFor="email">Your email address:</label>
            <span className="mdl-textfield__error">Type a valid email address.</span>
          </div>

          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
            <input className="mdl-textfield__input" type="text" pattern="(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?" id="website" value={this.state.metadata.website} onChange={this.handleInputChange} />
            <label className="mdl-textfield__label" htmlFor="website">Your project website:</label>
            <span className="mdl-textfield__error">Type a valid URL.</span>
          </div>
          { this.renderNotSignedInWarning() }
          { hasFields && this.renderIdSettings() }
          { hasFields && this.renderMapSettings() }
          { hasFields && this.renderTimelineSettings() }
          { this.renderValidationWarnings() }
          <p className="mdl-typography--text-right">
            <button
              className="mdl-button mdl-button--raised"
              onClick={this.handleCancel}
              style={{ marginRight: 16 }}
            >
              Cancel
            </button>
            <button
              className="mdl-button mdl-button--raised mdl-button--colored"
              disabled={!this.isAllRequiredMetadataProvided()}
              onClick={this.handleCreateProject}
            >
              Create project
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default SetProjectMetadata;
