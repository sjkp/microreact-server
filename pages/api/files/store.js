import bytes from "bytes";
import requireUserMiddleware from "cgps-application-server/middleware/require-user";
import logger from "cgps-application-server/logger";

import FileStorage from "../../../services/file-storage";

import serverRuntimeConfig from "../../../utils/server-runtime-config";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
  // Only logged in users can save files
  const user = await requireUserMiddleware(req, res);

  const fileHash = await FileStorage.storeStream(
    req,
    bytes.parse(serverRuntimeConfig.bodySizeLimit),
  );

  const fileUri = FileStorage.uri(fileHash);

  logger.info("file saved", { fileHash }, { user, req, res });

  res.json({
    hash: fileHash,
    url: fileUri,
  });
}
