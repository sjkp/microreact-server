import '../css/footer.css';

const React = require('react');

const Footer = () => (
  <footer className="mr-footer">
    <p>
      <span>Funded by </span>
      <img
        src="images/logos/wellcome-white.png"
        className="mr-footer-logo-square"
      />
    </p>
    <p>
      <span>Developed at </span>
      <img src="images/logos/bdi-white.png" className="mr-footer-logo-square" />
      <img src="images/logos/sanger.svg" className="mr-footer-logo" />
    </p>
    <p>
      <a
        href="https://www.pathogensurveillance.net"
        target="_blank"
        rel="noopener"
      >
        <img
          src="images/logos/cgps-long-white.svg"
          className="mr-footer-logo-cgps"
        />
      </a>
    </p>
    <p className="cgps-copyright">
      © 2018 Centre for Genomic Pathogen Surveillance
    </p>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;
