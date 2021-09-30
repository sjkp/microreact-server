import '../css/cgps-login.css';

import React from 'react';
import Login from 'cgps-user-accounts/components/login';

import Upload from './Upload.react';
import SignInPasswordless from './SignInPasswordless.react';

import config from '../utils/config';

const LoginPage = props => {
  const { query = {} } = props.location;
  const { message } = query;
  return (
    <Upload>
      <Login
        appName="Microreact"
        strategies={config.strategies}
        additional={
          config.strategies.includes('passwordless') &&
          <SignInPasswordless />
        }
        message={message}
        contactEmail="support@microreact.net"
      />
    </Upload>
  );
};

LoginPage.displayName = 'LoginPage';

export default LoginPage;
