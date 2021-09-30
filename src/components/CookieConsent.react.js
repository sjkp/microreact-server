import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CSSMotion from "rc-animate/es/CSSMotion";

import "../css/cookie-consent.css";

const CookieConsent = (props) => {
  const { appName = "Microreact", theme = "turquoise", visible = true, children, onAccept, className } = props;
  return (
    <CSSMotion visible={visible} transitionAppear removeOnLeave motionName="libmr">
      { (animation) =>
        <aside className={clsx("libmr-CookieConsent", `libmr-CookieConsent-${theme}`, className, animation.className)}>
          <div className="libmr-CookieConsent-message">
            <h2>We use cookies to give you the best online experience.</h2>
            <p>
              By using {appName}, you agree to our use of cookies in accordance with our cookie policy.
            </p>
            <div className="libmr-CookieConsent-actions">
              { children }
              <button className="mdl-button" onClick={onAccept}>
                Accept
              </button>
            </div>
          </div>
        </aside> }
    </CSSMotion>
  );
};

CookieConsent.propTypes = {
  appName: PropTypes.string,
  className: PropTypes.string,
  onAccept: PropTypes.func,
  children: PropTypes.node,
  visible: PropTypes.bool,
  theme: PropTypes.string,
};

export default CookieConsent;
