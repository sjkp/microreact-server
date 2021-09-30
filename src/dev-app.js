/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */

import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
setConfig({ showReactDomPatchNotification: false });

import App from "./app";

export default hot(App);
