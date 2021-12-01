/* eslint-disable class-methods-use-this */

import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";

import { useSnackbar } from "notistack";

import UiAvatar from "./UiAvatar";

import * as DataHooks from "../utils/data-hooks";
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

const ProjectAccessSharingSection = ({ projectAccessData }) => {
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

ProjectAccessSharingSection.propTypes = {
  projectAccessData: PropTypes.object.isRequired,
};

export default ProjectAccessSharingSection;
