import React from 'react';

const DotFileRequirements = () => (
  <div className="mr-upload-requirements">
    <h3 className="mr-upload-requirements-title">.dot file?</h3>
    <p>
      This is your <strong>network</strong> file which must be in
      valid <a href="https://en.wikipedia.org/wiki/DOT_(graph_description_language)" target="_blank" rel="noopener">DOT format</a>.
    </p>
    <p>
      Every node ID must correspond to an identifier that is specified in the <code>id</code> column of your <strong>data</strong> file.
    </p>
    <p>
      The number of nodes in the <code>.dot</code> file must match the number of identifiers within the <code>id</code> column of the <strong>data</strong> file.
    </p>
  </div>
);

DotFileRequirements.displayName = 'DotFileRequirements';

export default DotFileRequirements;
