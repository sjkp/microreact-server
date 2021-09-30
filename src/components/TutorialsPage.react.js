import '../css/tutorials.css';

import React from 'react';
import { Link } from 'react-router';

import HelpTabs from './HelpTabs.react';
import Upload from './Upload.react';
import Markdown from './Markdown.react.js';

const tutorials = {
  ncbi: {
    title: 'Using Microreact API with NCBI FTP Files',
    description: 'Use the Microreact API to create a project linked to files on NCBI FTP servers.',
    icon: 'file_upload',
    html: require('html-loader!markdown-loader!../../tutorials/ncbi.md'),
  },
  'google-sheets': {
    title: 'Link Microreact projects to Google Sheets',
    description: 'Create an auto-publishing CSV file using Google Sheets.',
    icon: 'grid_on',
    html: require('html-loader!markdown-loader!../../tutorials/google-sheets.md'),
  },
  'shared-files': {
    title: 'Linking to Figshare, Dropbox, and Google Drive',
    description: 'Link to files shared on Figshare, Dropbox, and Google Drive.',
    icon: 'link',
    html: require('html-loader!markdown-loader!../../tutorials/shared-files.md'),
  },
};

class TutorialsPage extends React.Component {
  static displayName = 'TutorialsPage';

  getList() {
    return (
      <ul className="mr-tutorial-list">
        {
          Object.keys(tutorials).map(tutorialId => {
            const tutorial = tutorials[tutorialId];
            return (
              <li key={tutorialId} className="mr-tutorial-card">
                <h3 className="mr-tutorial-card-title">{tutorial.title}</h3>
                <i className="material-icons" role="presentation" _style="">{tutorial.icon}</i>
                <p>{tutorial.description}</p>
                <Link
                  className="mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  to={`tutorials/${tutorialId}`}
                >
                  Read tutorial
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }

  getTutorial = (tutorialId) => (
    <Markdown html={tutorials[tutorialId].html} />
  );

  render() {
    const { params } = this.props;
    const { tutorialId } = params || {};
    return (
      <Upload>
        <HelpTabs />
        {
          typeof(tutorialId) === 'undefined' ?
            this.getList() :
            this.getTutorial(tutorialId)
        }
      </Upload>
    );
  }
}

export default TutorialsPage;
