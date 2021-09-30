import React from 'react';

import CsvFileRequirements from './CsvFileRequirements.react';
import DotFileRequirements from './DotFileRequirements.react';
import NwkFileRequirements from './NwkFileRequirements.react';

const ShortFileRequirements = () => (
  <div className="mr-file-requirements mdl-grid">
    <div className="mdl-cell">
      <CsvFileRequirements />
    </div>
    <div className="mdl-cell">
      <NwkFileRequirements />
    </div>
    <div className="mdl-cell">
      <DotFileRequirements />
    </div>
  </div>
);

ShortFileRequirements.displayName = 'ShortFileRequirements';

export default ShortFileRequirements;
