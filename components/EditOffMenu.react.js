import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { UiIconButtonMenu } from "microreact-viewer/src/viewer";

import * as Auth from "../utils/auth";

import EditOffIcon from "./EditOffIcon.react";
import UiLoadingBar from "./UiLoadingBar";

function EditOffContent(props) {
  const { data: session, status } = useSession();
  const loading = (status === "loading");
  const [ isCopying, setCopying ] = useState(false);

  if (loading) {
    return (
      <UiLoadingBar />
    );
  }

  if (session) {
    return (
      <div>
        <p style={{ maxWidth: 280 }}>
          You cannot edit this project because you are not the owner.
        </p>
        <Button
          variant="text"
          color="primary"
          disabled={isCopying}
          onClick={
            () => {
              setCopying(true);
              props.onMakeCopy();
            }
          }
        >
          { isCopying && (<UiLoadingBar />) }
          { isCopying ? "Making a copying..." : "Make a copy" }
        </Button>
      </div>
    );
  }
  else {
    return (
      <React.Fragment>
        <p style={{ maxWidth: 280 }}>
          You cannot edit this project because you are not signed in.
        </p>
        <Button
          variant="text"
          color="primary"
          onClick={Auth.signin}
        >
          Sign in to edit
        </Button>
      </React.Fragment>
    );
  }
}

const icon = (<EditOffIcon />);

const EditOffMenu = React.memo(
  (props) => {
    return (
      <UiIconButtonMenu
        // content={EditOffContent}
        disableCloseButton
        disableHeader
        hideOnClick={false}
        icon={icon}
        title="Edit project"
      >
        <EditOffContent
          onMakeCopy={props.onMakeCopy}
        />
      </UiIconButtonMenu>
    );
  }
);

EditOffMenu.displayName = "EditOffMenu";

EditOffMenu.propTypes = {
  onMakeCopy: PropTypes.func.isRequired,
};

export default EditOffMenu;
