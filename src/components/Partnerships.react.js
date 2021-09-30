import '../css/partnerships.css';

import React from 'react';

const Partnerships = () => <div className=" mr-partnerships">
  <div className="">
    <a href="https://www.gov.uk/government/organisations/public-health-england" target="_blank">
      <img src="images/phe.png" />
    </a>
  </div>
  <div className="">
    <a href="http://www.cdc.gov/" target="_blank" title="Centers for Disease Control and Prevention">
      <img src="images/cdc-logo.png" />
    </a>
  </div>
  <div className="">
    <a href="http://www.phac-aspc.gc.ca/cphs-sspc/" target="_blank" title="Canadian Public Health Service">
      <img src="images/cphs-logo.png" />
    </a>
  </div>
  {/* <div className="">
    <a href="https://holtlab.net/" target="_blank" title="Kat Holt lab based in the Centre for Systems Genomics">
      <img src="images/csg-logo.png" />
    </a>
  </div> */}
  <div className="">
    <a href="http://www.imperial.ac.uk/" target="_blank">
    <img src="images/ic-logo.jpg" />
    </a>
  </div>
  <div className="">
    <a href="http://mgen.microbiologyresearch.org/content/journal/mgen" target="_blank">
      <img src="images/mgen.png" />
    </a>
  </div>
</div>;

export default Partnerships;
