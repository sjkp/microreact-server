import '../css/showcase.css';

import React from 'react';

import Upload from './Upload.react';
import Showcase from './Showcase.react';
import ListedProjects from './ListedProjects.react';
import TwitterFeed from './TwitterFeed.react';
// import { Link } from 'react-router';
import Link from "./Link.react";

const ShowcasePage = () => (
  <Upload className="mr-showcase">
    <section className="mdl-typography--text-center mr-showcase__intro">

{/*
<Link to="/project/Ny8H4gsH">http://localhost:8082/project/Ny8H4gsH</Link>
<Link to="/project/spcmemqkZjwDSPEJ2hhgqa">http://localhost:8082/project/spcmemqkZjwDSPEJ2hhgqa</Link>
<Link to="/project/iqoeG2JJWoyDtxvjaRCC9G">http://localhost:8082/project/iqoeG2JJWoyDtxvjaRCC9G</Link>
<Link to="/project/v5qSTHLQ4oBTXumssT5AsT">http://localhost:8082/project/v5qSTHLQ4oBTXumssT5AsT</Link>
<Link to="/project/wM1wmQ7gRP27C43gynUoCC">http://localhost:8082/project/wM1wmQ7gRP27C43gynUoCC</Link>

<a href="/project/wM1wmQ7gRP27C43gynUoCC">http://localhost:8082/project/wM1wmQ7gRP27C43gynUoCC</a>
*/}

      <h1 className="mr-showcase__title">
        <strong>Open data visualization</strong> and <strong>sharing</strong>{' '}
        for <strong>genomic epidemiology</strong>
      </h1>
      <div className="mr-showcase__video">
        <iframe
          src="https://player.vimeo.com/video/193252797?autoplay=0&loop=1&color=3C7383&title=0&byline=0&portrait=0"
          width="801"
          height="451"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    <section className="mr-used-by">
      <div className="mr-used-by-content">
        <h2 className="mr-used-by-title">In partnership with</h2>
        <div className="mr-used-by-images">
          <img
            src="images/partners/phe.png"
            alt="Public Health England"
            title="Public Health England"
          />
          <img
            src="images/partners/cdc.png"
            alt="Centers for Disease Control and Prevention"
            title="Centers for Disease Control and Prevention"
          />
          <img
            src="images/partners/ecdc.png"
            alt="European Centre for Disease Prevention and Control"
            title="European Centre for Disease Prevention and Control"
          />
          <img
            src="images/partners/microbiology-society.png"
            alt="Microbiology Society"
            title="Microbiology Society"
          />
          <img
            src="images/partners/niph.svg"
            alt="Norwegian Institute of Public Health"
            title="Norwegian Institute of Public Health"
          />
        </div>
      </div>
    </section>
    </section>
    <section className="mdl-tabs mdl-js-tabs">
      <div className="mdl-tabs__tab-bar">
        <a href="#showcaseTab" className="mdl-tabs__tab is-active">
          Showcase
        </a>
        <a href="#projectsTab" className="mdl-tabs__tab">
          Listed projects
        </a>
      </div>
      <div className="mdl-tabs__panel is-active" id="showcaseTab">
        <Showcase />
      </div>
      <div className="mdl-tabs__panel" id="projectsTab">
        <ListedProjects />
      </div>
    </section>
    {/*
    <section className="mr-showcase-community">
      <TwitterFeed />
    </section>
    */}
  </Upload>
);

ShowcasePage.displayName = 'ShowcasePage';

export default ShowcasePage;
