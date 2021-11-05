import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import dynamic from "next/dynamic";

import ManageAccountsIcon from "./ManageAccountsIcon";
import UiLoadingBar from "./UiLoadingBar";

import { root as rootClassName } from "../styles/account-project-card.module.css";

const MoveProjectToFolderMenu = dynamic(
  () => import("./MoveProjectToFolderMenu"),
  {
    loading: UiLoadingBar,
    ssr: false,
  },
);

function AccountProjectCard(props) {
  return (
    <Card
      className={rootClassName}
      variant="outlined"
    >
      <CardContent
        component="a"
        href={props.url}
        onClick={props.onLoading}
      >
        <Typography
          className="title"
          color="textPrimary"
          title={props.name}
        >
          { props.name }
        </Typography>

        <Typography
          className="attribute"
          color="textSecondary"
        >
          Project ID: { props.id }
        </Typography>

        <Typography
          className="attribute"
          color="textSecondary"
        >
          {
            (props.access === 0) ? "Restricted Access" :
              (props.access === 1) ? "Public Access" :
                props.access
          }
        </Typography>

        <Typography
          className="attribute"
          color="textSecondary"
        >
          Created { new Date(props.createdAt).toLocaleDateString() }
        </Typography>
      </CardContent>

      {
        (!props.shared)
          &&
          (
            <CardActions className="secondary">
              <IconButton
                title={props.starred ? "Starred" : "Not Starred"}
                onClick={props.onStar}
              >
                {
                  props.starred
                    ?
                    <StarOutlinedIcon fontSize="inherit" />
                    :
                    <StarOutlineOutlinedIcon fontSize="inherit" />
                }
              </IconButton>
            </CardActions>
          )
      }

      {
        (!props.shared) && (
          <CardActions disableSpacing className="main">
            <MoveProjectToFolderMenu
              projectId={props.id}
              folder={props.folder}
              onMove={props.onMove}
            />

            <IconButton
              title="Edit Project Access"
              onClick={props.onAccess}
            >
              <ManageAccountsIcon />
            </IconButton>

            <IconButton
              component="a"
              title="Edit Project Files"
              href={`${props.url}?ui=edit`}
              onClick={props.onLoading}
            >
              <EditTwoToneIcon />
            </IconButton>

            <IconButton
              title={props.binned ? "Restore Project" : "Delete Project"}
              onClick={props.onDelete}
            >
              {
                props.binned
                  ?
                  <RestoreFromTrashOutlinedIcon fontSize="inherit" />
                  :
                  <DeleteOutlineOutlinedIcon fontSize="inherit" />
              }
            </IconButton>
          </CardActions>
        )
      }
    </Card>
  );
}

AccountProjectCard.propTypes = {
  access: PropTypes.number,
  binned: PropTypes.bool,
  folder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onAccess: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  onStar: PropTypes.func.isRequired,
  shared: PropTypes.bool,
  starred: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

export default AccountProjectCard;
