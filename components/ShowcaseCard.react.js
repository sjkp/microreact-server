/* eslint-disable react/jsx-no-target-blank */

import PropTypes from "prop-types";
import React from "react";
// import Link from "next/link";

const ShowcaseCard = (props) => (
  <article className="mr-showcase-card" tabIndex="0">
    <h2 className="mr-showcase-card-title">
      {props.title}
    </h2>
    <img src={`${props.imageUrl}?20181022165700`} />
    <div className="mr-showcase-card-body">
      <strong className="mr-showcase-card-subtitle">{props.subTitle}</strong>
      <p>{props.supportingText}</p>
      {/* <button to={props.linkUrl} className="mdl-button mdl-button--colored mdl-button--raised">
        View Project
      </button> */}
      <a
        className="mr-showcase-card-link"
        title="View Publication"
        href={props.supportingLink}
        target="_blank"
      >
        {props.supportingLink}
      </a>
    </div>
    {/* {
      props.externalLink
        ?
        (<a className="link-overlay" href={props.linkUrl}/>)
        :
        (<Link to={props.linkUrl} className="link-overlay" />)
    } */}
    <a className="link-overlay" href={props.linkUrl} />
  </article>
);

ShowcaseCard.propTypes = {
  title: PropTypes.node.isRequired,
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  supportingText: PropTypes.node.isRequired,
  supportingLink: PropTypes.string.isRequired,
};

export default ShowcaseCard;
