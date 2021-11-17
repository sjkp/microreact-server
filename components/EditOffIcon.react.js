import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { mdiPencilOffOutline } from "@mdi/js";

const EditOffIcon = React.memo(
  (props) => (
    <SvgIcon {...props}>
      <path d={mdiPencilOffOutline} />
    </SvgIcon>
  ),
);

EditOffIcon.displayName = "EditOffIcon";

export default EditOffIcon;
