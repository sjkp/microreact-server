import React from 'react';

import apiHtml from 'html-loader!markdown-loader!../../tutorials/API.md';

import HelpTabs from './HelpTabs.react';
import Upload from './Upload.react';
import Markdown from './Markdown.react.js';

const ApiDocumentationPage = () => (
  <Upload>
    <HelpTabs />
    <Markdown className="mr-documentation" html={apiHtml} />
  </Upload>
);

ApiDocumentationPage.displayName = 'ApiDocumentationPage';

export default ApiDocumentationPage;
