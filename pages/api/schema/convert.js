import { ApiError } from "next/dist/server/api-utils";
import createMicroreactDocument from "microreact.js";

import serverRuntimeConfig from "../../../utils/server-runtime-config";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: serverRuntimeConfig.bodySizeLimit,
    },
  },
};

export default async function (req, res) {
  if (!req.body) {
    throw new ApiError(400, "Invalid request");
  }

  if (req.body.schema) {
    const { schema } = require("microreact-viewer");
    res.json(
      schema(req.body)
    );
  }
  else {
    const json = await createMicroreactDocument(req.body);
    res.json(json);
  }
}
