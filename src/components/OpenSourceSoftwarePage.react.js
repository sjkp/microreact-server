import React from 'react';

import md from 'html-loader!markdown-loader!../../tutorials/open-source-software.md';

import Upload from './Upload.react';
import Markdown from './Markdown.react.js';

const Page = () => (
  <Upload>
    <Markdown className="mr-documentation" html={md} />
  </Upload>
);

Page.displayName = 'OpenSourceSoftwarePage';

export default Page;
