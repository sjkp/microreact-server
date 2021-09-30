/* eslint-disable class-methods-use-this */

import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import Popper from "@material-ui/core/Popper";
import PropTypes from "prop-types";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { UiDialog } from "microreact-viewer";
import { useSnackbar } from "notistack";

import UiCopyTextfield from "./UiCopyTextfield";
import UiAvatar from "./UiAvatar";

import { root as dialogClassname } from "../styles/project-dialog.module.css";
import { root as rootClassname } from "../styles/project-access-dialog.module.css";

import UiSelect from "./UiSelect";
import UiDataHook from "./UiDataHook";

import * as DataHooks from "../utils/data-hooks";
import * as ReactHooks from "../utils/react-hooks";
import * as ApiClient from "../utils/api-client";

const AutocompletePopper = function (props) {
  return (
    <Popper
      {...props}
      modifiers={
        {
          preventOverflow: { enabled: false },
          flip: { enabled: false },
        }
      }
    />
  );
};

const EmailAddressesInput = (props) => {
  const { data } = DataHooks.userShareEmailsHook();

  return (
    <Autocomplete
      size="small"
      disableClearable
      ListboxProps={
        { style: { maxHeight: "30vh" } }
      }
      PopperComponent={AutocompletePopper}
      multiple
      options={data || []}
      // defaultValue={[top100Films[13].title]}
      freeSolo
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={option}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={
        (params) => (
          <TextField
            {...params}
            variant="filled"
            label=""
            type="email"
            placeholder="Enter an email address to share then press enter"
          />
        )
      }
      value={props.value}
      onChange={(event, value) => props.onChange(value)}
    />
  );
};

const SharingSection = ({ projectAccessData }) => {
  const [ emails, setEmails ] = React.useState([]);
  const [ sendingStatus, setSendingStatus ] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Paper
      variant="outlined"
      component="section"
      className="users"
    >

      <EmailAddressesInput
        value={emails}
        onChange={setEmails}
      />

      <List dense>

        {
          projectAccessData.shares.map(
            ({ email, kind, createdAt }) => (
              <ListItem
                key={email}
                dense
              >
                <ListItemAvatar>
                  <UiAvatar
                    email={email}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={email}
                  secondary={
                    (kind === "user") ? `Added on ${new Date(createdAt).toLocaleDateString()}` :
                      (kind === "invitation") ? `Invitation sent on ${new Date(createdAt).toLocaleDateString()}` :
                        null
                  }
                />
                <ListItemSecondaryAction>
                  {
                    (kind === "invitation") && (
                      <IconButton
                        title="Resend invitation email"
                        disabled={sendingStatus}
                        onClick={
                          () => {
                            setSendingStatus(true);
                            ApiClient.sendInvitation(projectAccessData.id, [ email ])
                              .then(() => {
                                setEmails([]);
                                DataHooks.projectAccessMutation(projectAccessData.id);
                                enqueueSnackbar("Invitation email has been sent", { variant: "success" });
                              })
                              .catch((err) => {
                                enqueueSnackbar(err.message, { variant: "error" });
                              })
                              .then(() => setSendingStatus(false));
                          }
                        }
                      >
                        <SendRoundedIcon />
                        { sendingStatus && <CircularProgress size={24} /> }
                      </IconButton>
                    )
                  }
                  <IconButton
                    title="Remove user"
                    onClick={
                      () => {
                        setSendingStatus(true);
                        ApiClient.revokeInvitation(projectAccessData.id, kind, email)
                          .then(() => {
                            DataHooks.projectAccessMutation(projectAccessData.id);
                            enqueueSnackbar("Invitation has been revoked", { variant: "success" });
                          })
                          .catch((err) => {
                            enqueueSnackbar(err.message, { variant: "error" });
                          })
                          .then(() => setSendingStatus(false));
                      }
                    }
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          )
        }

        {
          (emails.length > 0) && (
            <div className="send-invitation">
              <Button
                color="primary"
                variant="outlined"
                onClick={() => setEmails([])}
                disabled={sendingStatus}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                variant="contained"
                disableElevation
                disabled={sendingStatus}
                onClick={
                  () => {
                    setSendingStatus(true);
                    ApiClient.sendInvitation(projectAccessData.id, emails)
                      .then(() => {
                        setEmails([]);
                        DataHooks.projectAccessMutation(projectAccessData.id);
                        enqueueSnackbar("Invitation email has been sent", { variant: "success" });
                      })
                      .catch((err) => {
                        enqueueSnackbar(err.message, { variant: "error" });
                      })
                      .then(() => setSendingStatus(false));
                  }
                }
              >
                Send Invitation
                { sendingStatus && <CircularProgress size={24} /> }
              </Button>
            </div>
          )
        }

      </List>

    </Paper>
  );
};

SharingSection.propTypes = {
  projectAccessData: PropTypes.object.isRequired,
};

const AccessLevelSection = ({ projectAccessData }) => {
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

AccessLevelSection.propTypes = {
  projectAccessData: PropTypes.object.isRequired,
};

class ProjectAccessDialog extends React.PureComponent {

  state = {
    access: null,
  }

  render() {
    const { props } = this;

    return (
      <UiDialog
        className={clsx(rootClassname, dialogClassname)}
        onClose={props.onClose}
        isOpen
        title="Share with People"
      >
        <div className="full-content">
          <UiDataHook
            dataHook={() => DataHooks.projectAccessHook(props.projectId)}
          >
            {
              ({ data: projectAccessData }) => {
                return (
                  <React.Fragment>
                    <section className="project-link">
                      <UiCopyTextfield
                        label="Project Link"
                        value={projectAccessData.url}
                      />
                    </section>

                    <AccessLevelSection
                      projectAccessData={projectAccessData}
                    />

                    <SharingSection
                      projectAccessData={projectAccessData}
                    />

                  </React.Fragment>
                );
              }
            }
          </UiDataHook>
        </div>
      </UiDialog>
    );
  }

}

ProjectAccessDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

ProjectAccessDialog.defaultProps = {
};

export default ProjectAccessDialog;
