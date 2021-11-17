import Divider from "@material-ui/core/Divider";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";
import { useSession } from "next-auth/client";

import { UiIconButtonMenu } from "microreact-viewer";

import * as Auth from "../utils/auth";

import EditOffIcon from "./EditOffIcon.react";
import UiLoadingBar from "./UiLoadingBar";

function EditOffContent(props) {
  const [ session, loading ] = useSession();

  if (loading) {
    return (
      <UiLoadingBar />
    );
  }

  if (session) {
    return (
      <div>
        <p>
          You cannot edit this project.
        </p>
        <Button
          variant="text"
          color="primary"
          onClick={props.onMakeCopy}
        >
          Make a copy
        </Button>
      </div>
    );
  }
  else {
    return (
      <React.Fragment>
        <p>
          You cannot edit this project.
        </p>
        <Button
          variant="text"
          color="primary"
          onClick={Auth.signin}
        >
          Sign in to make a copy
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
        title="Labels, Colours, and Shapes"
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
