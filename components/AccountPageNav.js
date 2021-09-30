/* eslint-disable class-methods-use-this */

import React from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";

import styles from "../styles/account-page-nav.module.css";

import * as DataHooks from "../utils/data-hooks";

import Link from "./Link";

function StyledTreeItem(props) {
  const { labelText, labelIcon: LabelIcon, showTitle, labelInfo, href, expanded, ...other } = props;
  const LinkComponent = href ? Link : "div";

  return (
    <TreeItem
      className={clsx(styles.listItem, { expanded })}
      // icon={<LabelIcon />}
      title={showTitle ? labelText : undefined}
      label={
        <LinkComponent
          className={styles.link}
          href={href}
          // activeClassName={href ? styles.activeLink : undefined}
        >
          <LabelIcon color="inherit" className={styles.labelIcon} />
          <span className={styles.labelText}>
            { labelText }
          </span>
          {/* <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography> */}
        </LinkComponent>
      }
      {...other}
    />
  );
}

function ProjectFoldersTreeItems() {
  const { data, isError, isLoading } = DataHooks.userFoldersDataHook();

  if (isLoading) {
    return (
      <LinearProgress
        variant="indeterminate"
        color="primary"
      />
    );
  }

  if (isError) {
    return (
      <pre>{ isError }</pre>
    );
  }

  if (!data) {
    return "No folders";
  }

  return (
    data.map(
      (item) => (
        <StyledTreeItem
          key={item.name}
          nodeId={item.name}
          labelText={item.label}
          labelIcon={FolderOutlinedIcon}
        />
      )
    )
  );
}

const noSelection = [];

function AccountPageNav() {
  const [ isOpen, setOpen ] = React.useState(true);
  const [ showFolders, setShowFolders ] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      className={styles.drawer}
      classes={
        {
          paper: clsx(styles.drawerPaper, !isOpen && "closed"),
        }
      }
      open={isOpen}
    >
      <TreeView
        className={styles.treeView}
        selected={noSelection}
        onNodeSelect={
          (event, nodeId) => {
            if (nodeId === "3") {
              setShowFolders(!showFolders);
            }
          }
        }
        // expanded={showFolders ? [ "3" ] : []}
        // defaultCollapseIcon={<ArrowDropDownIcon />}
        // defaultExpandIcon={<ArrowRightIcon />}
        // defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem
          nodeId="0"
          labelText="My Projects"
          showTitle={!isOpen}
          labelIcon={WorkOutlineIcon}
          href="/my-account"
        />

        <StyledTreeItem
          nodeId="1"
          labelText="Starred"
          showTitle={!isOpen}
          labelIcon={StarOutlineOutlinedIcon}
          href="/my-account/starred"
        />

        <StyledTreeItem
          nodeId="2"
          labelText="Shared with me"
          showTitle={!isOpen}
          labelIcon={PeopleOutlinedIcon}
          href="/my-account/shared"
        />

        {/*
        <hr />

        <StyledTreeItem
          nodeId="3"
          labelText="Folders"
          showTitle={!isOpen}
          labelIcon={ExpandMoreOutlinedIcon}
          expanded={showFolders}
        />

        { showFolders && (<ProjectFoldersTreeItems />) }
        */}

        <hr />

        <StyledTreeItem
          nodeId="4"
          labelText="Bin"
          showTitle={!isOpen}
          labelIcon={DeleteOutlineOutlinedIcon}
          href="/my-account/bin"
        />

        <hr />

        <StyledTreeItem
          nodeId="5"
          labelText="Account Settings"
          showTitle={!isOpen}
          labelIcon={SettingsOutlinedIcon}
          href="/my-account/settings"

        />

        <StyledTreeItem
          nodeId="6"
          labelText="Sign out"
          showTitle={!isOpen}
          labelIcon={VpnKeyTwoToneIcon}
          href="/signout"

        />

      </TreeView>

      <footer>
        <IconButton
          onClick={() => setOpen(!isOpen)}
        >
          { isOpen ? <ChevronLeftOutlinedIcon /> : <ChevronRightOutlinedIcon /> }
        </IconButton>
      </footer>
    </Drawer>
  );
}

export default AccountPageNav;
