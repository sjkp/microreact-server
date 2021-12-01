/* eslint-disable class-methods-use-this */

import Box from "@material-ui/core/Box";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import PropTypes from "prop-types";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import React from "react";
import Typography from "@material-ui/core/Typography";

import UiSelect from "./UiSelect";

import * as ReactHooks from "../utils/react-hooks";
import * as ApiClient from "../utils/api-client";

const ProjectAccessLevelSection = ({ projectAccessData }) => {
  const [ accessState, setAccessState ] = React.useState(null);

  const handleSave = ReactHooks.debouncedCallback(
    (access) => ApiClient.updateProjectAccess(projectAccessData.id, access)
  );

  return (
    <section className="access-level">
      <UiSelect
        label="Access Control"
        variant="outlined"
        // size="small"
        className="access-level-select"
        value={accessState ?? projectAccessData.access}
        onChange={
          (event) => {
            setAccessState(event.target.value);
            handleSave(event.target.value);
          }
        }
      >
        <UiSelect.Item value={0}>
          <Box
            display="flex"
            alignItems="center"
          >
            <PeopleOutlineOutlinedIcon />
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: 16 }}
            >
              Restricted Access
              <Typography
                color="textSecondary"
                component="small"
                variant="caption"
              >
                Only you and people added below can access this project
              </Typography>
            </Box>
          </Box>
        </UiSelect.Item>
        <UiSelect.Item value={1}>
          <Box
            display="flex"
            alignItems="center"
          >
            <PublicOutlinedIcon />
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: 16 }}
            >
              Public Access
                <Typography
                  color="textSecondary"
                  component="small"
                  variant="caption"
                >
                Anyone on the Internet with this link can view the project
              </Typography>
            </Box>
          </Box>
        </UiSelect.Item>
      </UiSelect>
    </section>
  );
};

ProjectAccessLevelSection.propTypes = {
  projectAccessData: PropTypes.object.isRequired,
};

export default ProjectAccessLevelSection;
