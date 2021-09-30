import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";

export const AccessLevels = {
  0: {
    title: "Private Access",
    icon: (<LockOutlinedIcon />),
  },
  4: {
    title: "Restricted Access",
    icon: (<PeopleOutlineOutlinedIcon />),
  },
  1: {
    title: "Public Access",
    icon: (<PublicOutlinedIcon />),
  },
};
