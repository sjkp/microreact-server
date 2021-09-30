import { ApiError } from "next/dist/next-server/server/api-utils";

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
    const schemaConvertor = require("../../../services/schema-convertor");
    const ProxyService = require("../../../services/proxy-service");

    const isDataUrl = ProxyService.isValidUrl(req.body.data);
    const dataUrl = isDataUrl ? req.body.data : undefined;
    // const dataFile = !isDataUrl ? req.body.data : undefined;
    const dataFile = await (
      isDataUrl
        ?
        ProxyService.get(req.body.data)
        :
        req.body.data
    );

    const isTreeUrl = ProxyService.isValidUrl(req.body.tree);
    const treeUrl = isTreeUrl ? req.body.tree : undefined;
    const treeFile = !isTreeUrl ? req.body.tree : undefined;

    const isNetworkUrl = ProxyService.isValidUrl(req.body.network);
    const networkUrl = isNetworkUrl ? req.body.network : undefined;
    const networkFile = !isNetworkUrl ? req.body.network : undefined;

    const doc = {
      ...req.body,
      dataFile,
      dataUrl,
      treeFile,
      treeUrl,
      networkFile,
      networkUrl,
    };
    const json = schemaConvertor(doc);
    res.json(json);
  }
}
