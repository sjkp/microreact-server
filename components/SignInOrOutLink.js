import React from "react";
import { signin, useSession } from "next-auth/client";

import Link from "components/Link";

import styles from "styles/my-projects-link.module.css";

/**
 * The approach used in this component shows how to built a sign in and sign out
 * component that works on pages which support both client and server side
 * rendering, and avoids any flash incorrect content on initial page load.
 **/
const SignInOrOutLink = () => {
  const [session, loading] = useSession();

  const classname = `nojs-show ${!session && loading ? styles.loading : styles.loaded}`;

  if (session) {
    return (
      <ListItem href="/api/" button component="a">
        <ListItemIcon>
          <VpnKeyTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItem>
    );
  }

  return (
    <React.Fragment>
      <noscript>
        <style>{".nojs-show { opacity: 1; top: 0; }"}</style>
      </noscript>

      {
        !session && (
          <Link
            variant="button"
            color="textPrimary"
            className={classname}
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signin();
            }}
          >
            Sign in
          </Link>
        )
      }

      {
        session && (
          <Link
            variant="button"
            color="textPrimary"
            href="/my-projects"
            className={classname}
          >
            Projects
          </Link>
        )
      }
    </React.Fragment>
  );
};

export default SignInOrOutLink;
