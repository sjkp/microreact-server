/* eslint-disable class-methods-use-this */

import PropTypes from "prop-types";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';

import { UiFloatingFilter, UiRadioList, UiIconButtonMenu, emptyArray } from "microreact-viewer/index";

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
            (label) => {
              return {
                id: `${label} (create new)`,
                name: `"${label}" (create new)`,
              };
            }
          }
          renderItems={
            (items) => (
              <UiRadioList
                boxed={false}
                items={items}
                nullable
                nullOptionLabel={<em>unassigned to a folder</em>}
                onChange={(value) => props.onMove(value, data)}
                value={props.folder}
                labelProperty="name"
                valueProperty="id"
              />
            )
          }
        />
      </React.Fragment>
    );
  }
);

MoveProjectToFolderContent.displayName = "MoveProjectToFolderContent";

MoveProjectToFolderContent.propTypes = {
  folder: PropTypes.string,
  onMove: PropTypes.func.isRequired,
  projectProps: PropTypes.object,
};

const ButtonIcon = <FolderOpenTwoToneIcon />;

const MoveProjectToFolderMenu = React.memo(
  (props) => {
    return (
      <UiIconButtonMenu
        content={() => <MoveProjectToFolderContent {...props} />}
        hideOnClick={true}
        icon={ButtonIcon}
        title="Move Project to Folder"
        className={rootClassname}
      />
    );
  }
);

MoveProjectToFolderMenu.displayName = "MoveProjectToFolderMenu";

MoveProjectToFolderMenu.propTypes = {
  folder: PropTypes.string,
  onMove: PropTypes.func.isRequired,
  projectProps: PropTypes.object,
};

export default MoveProjectToFolderMenu;
