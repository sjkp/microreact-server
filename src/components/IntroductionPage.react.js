import React from 'react';

import HelpTabs from './HelpTabs.react';
import Upload from './Upload.react';

class TutorialsPage extends React.Component {
  render() {
    return (
      <Upload>
        <HelpTabs />
        <center>
          <iframe
            src="https://player.vimeo.com/video/393391441?autoplay=0&loop=1&color=3C7383&title=0&byline=0&portrait=0"
            width="801"
            height="451"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </center>
      </Upload>
    );
  }
}

export default TutorialsPage;
