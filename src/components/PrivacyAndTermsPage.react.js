import React from 'react';

import md from 'html-loader!markdown-loader!../../tutorials/privacy-and-terms.md';

import Upload from './Upload.react';
import Markdown from './Markdown.react.js';

const Page = () => (
  <Upload>
    <Markdown className="mr-documentation" html={md} />
  </Upload>
);

Page.displayName = 'PrivacyAndTermsPage';

export default Page;
