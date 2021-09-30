import React from 'react';

const CsvFileRequirements = () => (
  <div className="mr-upload-requirements">
    <h3 className="mr-upload-requirements-title">
      .csv file?
    </h3>
    <p>
      This is your <strong>data</strong> file.
      It must contain an <code>id</code> column with a valid identifier for every row,
        which must be unique and must not contain full stops or commas:
    </p>
    <p>
      Geolocations can be specified by <code>latitude</code> and <code>longitude</code> columns.
      You can find the latitude and longitude for a certain location using <a href="http://www.spatialepidemiology.net/user_maps" target="_blank">this service</a>.
    </p>
    <p>
      Temporal data can be specified by <code>year</code>, <code>month</code> and <code>day</code> columns.
    </p>
  </div>
);

CsvFileRequirements.displayName = 'CsvFileRequirements';

export default CsvFileRequirements;
