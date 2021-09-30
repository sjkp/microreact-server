import React from "react";
import { Link } from "react-router";

import Storage from "../utils/storage";
import CookieConsent from "./CookieConsent.react";

class Cookies extends React.Component {
  static displayName = "Cookies";

  state = {
    cookieSeen: null,
  };

  componentWillMount() {
    setImmediate(() => this.setState({ cookieSeen: Storage.getCookieSeen() }));
  }

  render() {
    if (this.state.cookieSeen === null) {
      return null;
    }
    return (
      <CookieConsent
        visible={!this.state.cookieSeen}
        onAccept={() => {
          Storage.setCookieSeen(true);
          this.setState({ cookieSeen: true });
        }}
      >
        <Link
          className="mdl-button"
          to="/privacy-and-terms"
        >
          Read our policy
        </Link>
      </CookieConsent>
    );
  }
}

export default Cookies;
