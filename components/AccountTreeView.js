import React from 'react';
import PropTypes from 'prop-types';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';

import styles from "../styles/account-page-nav.module.css";

import Link from "./Link";

function StyledTreeItem(props) {
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
