import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

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
