import '../css/markdown.css';
import '../css/documentation.css';

import React from 'react';
import PropTypes from 'prop-types';

class Markdown extends React.Component {
  static displayName = 'Markdown';

  static propTypes = {
    html: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  componentDidMount() {
    this.refs.container.innerHTML = this.props.html;
  }

  render() {
    return (
      <div
        ref="container"
        className="markdown-body mr-documentation"
      />
    );
  }
}

export default Markdown;
