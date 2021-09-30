import PropTypes from 'prop-types';
import React from 'react';

import Upload from './Upload.react';
import ApiError from './ApiError.react';

const NotFoundPage = () => (
  <Upload>
    <ApiError code={404} message="Page not found" />
  </Upload>
);

NotFoundPage.displayName = 'NotFoundPage';

NotFoundPage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default NotFoundPage;
