import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AppBar from "@mui/material/AppBar";
import BackupTwoToneIcon from "@mui/icons-material/BackupTwoTone";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import FeedbackTwoToneIcon from "@mui/icons-material/FeedbackTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";

import Link from "../components/Link";
import publicRuntimeConfig from "../utils/public-runtime-config";

import defaultStyles from "../styles/default-layout.module.css";
import * as ApiClient from "../utils/api-client";
// import Feedback from "../components/Feedback.react";

const Feedback = dynamic(
  () => import("../components/Feedback.react"),
  {
    // loading: UiLoadingSpinner,
    ssr: false,
  },
);

const SignInOrOutLink = () => {
  const { data: session, status } = useSession();
  const loading = (status === "loading");

  if (!loading) {
    if (session) {
      return (
        <ListItem
          button
          component="a"
          href="/api/auth/signout"
          onClick={(e) => {
            e.preventDefault();
            signOut({ callbackUrl: "/" });
          }}
        >
          <ListItemIcon>
            <VpnKeyTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </ListItem>
      );
    }
    else {
      return (
        <ListItem
          button
          component="a"
          href="/signin"
        >
          <ListItemIcon>
            <VpnKeyTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Sign in" />
        </ListItem>
      );
    }
  }
};

const DefaultLayout = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={defaultStyles.root}>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            id="toggle-drawer-button"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Box display="flex" alignItems="center" flexGrow={1}>
            <Link
              className={defaultStyles["logo-link"]}
              naked
              href="/"
            >
              <img
                src="/images/logos/microreact.svg"
              />
            </Link>
          </Box>

          <Box
            component="nav"
            className={defaultStyles["nav-links"]}
          >
            <Link variant="button" color="textPrimary" href="/">
              Showcase
            </Link>
            <Link variant="button" color="textPrimary" href="/upload">
              Upload
            </Link>
            <Link variant="button" color="textPrimary" href="https://docs.microreact.org/" target="_blank">
              Documentation
            </Link>
            <Link variant="button" color="textPrimary" href="/my-account">
              My Account
            </Link>
          </Box>

          {/* <IconButton
            color="primary"
            href="https://twitter.com/MyMicroreact"
            target="_blank"
            title="Follow @MyMicroreact"
            rel="noopener"
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            color="primary"
            href="mailto:support@microreact.net"
            title="Contact us"
          >
            <EmailIcon />
          </IconButton> */}

          {/* <Button href="#" color="primary" variant="outlined">
            Login
          </Button> */}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        onClose={handleDrawerClose}
        open={open}
      >
        <Box
          // display="flex"
          // justifyContent="flex-start"
          // flexDirection="column"
          // alignItems="center"
          className={defaultStyles.drawer}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <header>
            <small>Version { publicRuntimeConfig.version.endsWith(".0.0") ? publicRuntimeConfig.version.substr(0, publicRuntimeConfig.version.length - 4) : publicRuntimeConfig.version }</small>
            <Link href="/" className="header">
              <Image
                src="/images/logos/microreact.svg"
                width={176}
                height={40}
              />
            </Link>
          </header>

          <Divider />

          <List>
            <ListItem href="/" button component="a">
              <ListItemIcon>
                <HomeTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Showcase" />
            </ListItem>
            <ListItem href="/upload" button component="a">
              <ListItemIcon>
                <BackupTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Upload" />
            </ListItem>
            <ListItem href="https://docs.microreact.org/" target="_blank" button component="a">
              <ListItemIcon>
                <ContactSupportTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Documentation" />
            </ListItem>
            <ListItem href="/my-account" button component="a">
              <ListItemIcon>
                <AccountCircleTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItem>
            <SignInOrOutLink />

            <ListItem button component="button" onClick={() => document.querySelector("button#open-feedback-button")?.click()}>
              <ListItemIcon>
                <FeedbackTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Send Feedback" />
            </ListItem>

          </List>

          {/* <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div> */}
          <footer>
            <a href="http://www.pathogensurveillance.net/">
              <img src="/images/logos/cgps-short.svg" height="36px" />
            </a>
          </footer>
        </Box>
      </Drawer>

      <Feedback
        renderButton={(onOpen) => (<button id="open-feedback-button" onClick={onOpen} style={{ display: "none" }} />)}
        onSend={ApiClient.sendFeedback}
        onBeforeScreenshot={() => window.ViewerUtils && window.ViewerUtils.events.publish("before-screenshot")}
        onAfterScreenshot={() => window.ViewerUtils && window.ViewerUtils.events.publish("after-screenshot")}
      />

      { props.children }
    </div>
  );
};

export default DefaultLayout;
