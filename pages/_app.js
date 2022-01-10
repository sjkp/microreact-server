import "../styles/showcase.css";
import "../styles/viewer.css";
import "../styles/feedback.css";

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { SessionProvider as AuthSessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import DefaultLayout from "../layouts/default";
import muiTheme from "../utils/mui-theme";

export default function App(props) {
  const { Component } = props;
  const { session, ...pageProps } = props.pageProps;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Microreact</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/microreact-viewer/microreact-viewer.css" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <AuthSessionProvider session={session}>
          <SnackbarProvider>
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </SnackbarProvider>
        </AuthSessionProvider>

      </ThemeProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
