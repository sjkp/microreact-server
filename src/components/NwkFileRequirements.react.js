import React from 'react';

const NwkFileRequirements = () => (
  <div className="mr-upload-requirements">
    <h3 className="mr-upload-requirements-title">.nwk file?</h3>
    <p>
      This is your <strong>tree</strong> file which must be in
      valid <a href="https://en.wikipedia.org/wiki/Newick_format" target="_blank" rel="noopener">Newick format</a>.
    </p>
    <p>
      Every leaf label must correspond to an identifier that is specified in the <code>id</code> column of your <strong>data</strong> file.
    </p>
    <p>
      The number of labels in the <code>.nwk</code> file must match the number of identifiers within the <code>id</code> column of the <strong>data</strong> file.
    </p>
  </div>
);

NwkFileRequirements.displayName = 'NwkFileRequirements';

export default NwkFileRequirements;
