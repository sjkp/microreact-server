import React, { useState } from "react";
import PropTypes from "prop-types";

import { vimeo as className } from "../styles/vimeo-player.module.css";

const UiVimeoPlayer = (props) => {
  const [ showPlayer, setShowPlayer ] = useState(false);

  const triggerPlayer = () => {
    setShowPlayer(true);
  };

  return (
    <div
      className={className}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <span className="overlay" onClick={triggerPlayer}>
        <i className="play-icon" />
      </span>
      <img
        className="thumbnail"
        src={props.thumbnail}
        width={props.width}
        height={props.height}
      />
      {
        showPlayer && (
          <iframe
            className="player"
            src={props.src}
            width={props.width}
            height={props.height}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        )
      }
    </div>
  );
};

UiVimeoPlayer.displayName = "UiVimeoPlayer";

UiVimeoPlayer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  thumbnail: PropTypes.string,
  src: PropTypes.string,
};

UiVimeoPlayer.defaultProps = {
  width: "801px",
  height: "451px",
};

export default UiVimeoPlayer;
