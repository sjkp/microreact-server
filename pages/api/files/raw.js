import { ApiError } from "next/dist/next-server/server/api-utils";

import FileStorage from "../../../services/file-storage";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function (req, res) {
  const fileHash = req.query.id || req.query.hash || (Object.keys(req.query)?.[0]);
  if (!fileHash) {
    throw new ApiError(400);
  }

  const stream = await FileStorage.readStream(fileHash);

  res.setHeader("Access-Control-Allow-Origin", "https://vega.github.io");
  res.setHeader("Cache-control", "private, max-age=31536000, immutable");

  stream.pipe(res);
}
