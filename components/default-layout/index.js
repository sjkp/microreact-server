import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Toolbar from "@mui/material/Toolbar";

import Link from "../link";

import defaultStyles from "./index.module.css";

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
            {/* <Link
              className={defaultStyles["logo-link"]}
              naked
              href="/"
            >
              <Image
                alt="Logo"
                height={32}
                src="/images/logos/cgps-short.svg"
                width={98}
              />
            </Link> */}
          </Box>

          <Box
            component="nav"
            className={defaultStyles["nav-links"]}
          >
            <Link variant="button" underline="hover" color="textPrimary" href="/">
              Home
            </Link>
            <Link variant="button" underline="hover" color="textPrimary" href="/about">
              About AMR Landscape Project
            </Link>

          </Box>
        </Toolbar>
      </AppBar>

      {/*
      <Drawer
        anchor="left"
        onClose={handleDrawerClose}
        open={open}
      >
        <Box
          className={defaultStyles.drawer}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <header>
            <small>Version { publicRuntimeConfig.version }</small>
            <Link href="/" className="header">
              <Image
                src="/images/logos/microreact.svg"
                alt="logo"
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
          </List>

          <footer>
            <a href="http://www.pathogensurveillance.net/">
              <Image
                src="/images/logos/cgps-short.svg"
                height="36px"
                layout="fill"
                alt="CGPS logo"
              />
            </a>
          </footer>
        </Box>
      </Drawer>
      */}

      { props.children }
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
