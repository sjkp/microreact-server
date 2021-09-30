/* eslint-disable class-methods-use-this */

import PropTypes from "prop-types";
import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';

import { UiFloatingFilter, UiRadioList, UiIconButtonMenu, emptyArray } from "microreact-viewer";

import { root as rootClassname } from "../styles/move-project-to-folder.module.css";

import * as DataHooks from "../utils/data-hooks";

const MoveProjectToFolderContent = React.memo(
  (props) => {
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
      <React.Fragment>
        <UiFloatingFilter
          items={data || emptyArray}
          label="Type a name to search or create"
          createNewItem={
            (name) => {
              return {
                name,
                label: `"${name} (create new)`
              }
            }
          }
        >
          {
            (items) => (
              <UiRadioList
                boxed={false}
                items={items}
                nullable
                nullOptionLabel="Without a folder"
                onChange={props.onMove}
                value={props.folder}
                valueProperty="name"
              />
            )
          }
        </UiFloatingFilter>
      </React.Fragment>
    );
  }
);

MoveProjectToFolderContent.displayName = "MoveProjectToFolderContent";

MoveProjectToFolderContent.propTypes = {
  projectProps: PropTypes.object,
};

const ButtonIcon = <FolderOpenTwoToneIcon />;

const MoveProjectToFolderMenu = React.memo(
  (props) => {
    return (
      <UiIconButtonMenu
        content={() => <MoveProjectToFolderContent {...props} />}
        hideOnClick={false}
        icon={ButtonIcon}
        title="Move Project to Folder"
        className={rootClassname}
      />
    );
  }
);

MoveProjectToFolderMenu.displayName = "MoveProjectToFolderMenu";

MoveProjectToFolderMenu.propTypes = {
  projectProps: PropTypes.object,
};

export default MoveProjectToFolderMenu;
