import React from "react";
import PropTypes from "prop-types";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import MailIcon from "@mui/icons-material/Mail";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import styles from "../styles/account-page-nav.module.css";

import Link from "./link";

function StyledTreeItem(props) {
  // eslint-disable-next-line no-unused-vars
  const { labelText, labelIcon: LabelIcon, labelInfo, href, ...other } = props;
  const LinkComponent = href ? Link : "div";

  return (
    <TreeItem
      className={styles.root}
      // icon={<LabelIcon />}
      // label={labelText}
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

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  href: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function AccountTreeView() {
  return (
    <TreeView
      // className={classes.root}
      // defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem
        nodeId="0"
        labelText="My Projects"
        labelIcon={MailIcon}
        href="/my-account"
      />
      <StyledTreeItem
        nodeId="1"
        labelText="Starred"
        labelIcon={StarOutlineOutlinedIcon}
        href="/my-account/starred"
      />
      <StyledTreeItem
        nodeId="2"
        labelText="Shared with me"
        labelIcon={PeopleOutlinedIcon}
        href="/my-account/shared"
      />
      <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem
        nodeId="4"
        labelText="Bin"
        labelIcon={DeleteOutlineOutlinedIcon}
        href="/my-account/bin"
      />
    </TreeView>
  );
}
