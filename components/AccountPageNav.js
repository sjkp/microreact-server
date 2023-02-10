/* eslint-disable class-methods-use-this */

import PropTypes from "prop-types";
import React from "react";
import Drawer from "@mui/material/Drawer";
import clsx from "clsx";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import IconButton from "@mui/material/IconButton";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";

import styles from "../styles/account-page-nav.module.css";

import * as DataHooks from "../utils/data-hooks";

import Link from "./link";

function StyledTreeItem(props) {
  // eslint-disable-next-line no-unused-vars
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
          <span title={labelText} className={styles.labelText}>
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

StyledTreeItem.propTypes = {
  labelIcon: PropTypes.string,
  labelText: PropTypes.string,
  showTitle: PropTypes.string,
  labelInfo: PropTypes.string,
  href: PropTypes.string,
  expanded: PropTypes.bool,
};

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
          key={item.id}
          nodeId={item.id}
          labelText={item.name}
          labelIcon={FolderOutlinedIcon}
          href={`/my-account/folder/${item.id}/${item.name}`}
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

        <hr />

        <StyledTreeItem
          nodeId="3"
          labelText="Folders"
          showTitle={!isOpen}
          labelIcon={ExpandMoreOutlinedIcon}
          expanded={showFolders}
        />

        { showFolders && (<ProjectFoldersTreeItems />) }

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
