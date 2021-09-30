import '../css/about.css';

import React from 'react';
import { Link } from 'react-router';

import Upload from './Upload.react';

const AboutPage = () => (
  <Upload className="mr-about-page">
    <section className="mdl-typography--text-center">
      <h2>
        Microreact has been developed by the <a href="http://www.pathogensurveillance.net">Centre&nbsp;for&nbsp;Genomic&nbsp;Pathogen&nbsp;Surveillance</a> at Imperial&nbsp;College&nbsp;London and the Wellcome&nbsp;Genome&nbsp;Campus.
      </h2>
      <p className="mr-leading-paragraph">
        Microreact is a JavaScript application using the following libraries:
      </p>
      <ul>
        <li>
          <a href="http://www.chartjs.org/" target="_blank">Chart.js</a>
        </li>
        <li>
          <a href="http://leafletjs.com/" target="_blank">Leaflet</a>
        </li>
        <li>
          <a href="http://phylocanvas.org/" target="_blank">Phylocanvas</a>
        </li>
        <li>
          <a href="https://facebook.github.io/react/" target="_blank">React</a>
        </li>
        <li>
          <a href="http://sigmajs.org/" target="_blank">Sigma</a>
        </li>
        <li>
          and <Link to="/open-source-software">other open source software</Link>.
        </li>
      </ul>
      <p>
        By using Microreact, you agree to our use of cookies in accordance
        with <Link to="/privacy-and-terms">our cookie policy</Link>.
      </p>
    </section>
    <section className="mdl-typography--text-center">
      <p>If you use Microreact within a publication please cite:</p>
      <p>
        <a href="http://mgen.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.000093" target="_blank">
          <cite>
            Argim&#243;n S, Abudahab K, Goater R, Fedosejev A, Bhai J, Glasner C, Feil E,
            Holden M, Yeats C, <br />
            Grundmann H, Spratt B, Aanensen D. 30/11/2016. M Gen 2(11): doi:10.1099/mgen.0.000093
          </cite>
        </a>
      </p>
    </section>
    <section className="mdl-grid">
      <div className="mdl-cell mdl-cell--6-col mdl-typography--text-center">
        <h3>Developed by</h3>
        <ul>
          <li>Khalil Abudahab</li>
          <li>Richard Goater</li>
          <li>Artemij Fedosejev</li>
          <li>Jyothish NT</li>
          <li>Stephano</li>
        </ul>
      </div>
      <div className="mdl-cell mdl-cell--6-col mdl-typography--text-center">
        <h3>with thanks to</h3>
        <ul>
          <li>Silvia Argimón</li>
          <li>Corinna Glasner</li>
          <li>Corin Yeats</li>
          <li>David Alonso García</li>
          <li>Hajo Grundmann</li>
        </ul>
      </div>
    </section>
    <section className="mdl-typography--text-center">
      <p className="mr-funding-acknowledge">
        We gratefully acknowledge funding by <strong>The Wellcome Trust</strong>.
      </p>
    </section>
    <section className="mdl-typography--text-center">
      <p className="mr-funding-acknowledge">
      Maps sponsored by the <a href="https://www.mapbox.com/community/" target="_blank">Mapbox Community team</a>.
      </p>
    </section>
    <section className="mdl-typography--text-center">
      <h3>Questions? Ideas? Feedback?</h3>
      <p>
        <a className="mdl-button mdl-button--colored" href="mailto:support@microreact.net">support@microreact.net</a>
        <a className="mdl-button mdl-button--icon" href="https://twitter.com/MyMicroreact" title="Follow @MyMicroreact"><i className="twitter-icon"></i></a>
      </p>
    </section>
  </Upload>
);

AboutPage.displayName = 'AboutPage';

export default AboutPage;
