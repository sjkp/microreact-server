import { ApiError } from "next/dist/server/api-utils";
import * as ProjectsService from "../../../services/projects";

export default async function (req, res) {
  if (!req.query?.project) {
    throw new ApiError(400);
  }
  const [ projectId ] = req.query?.project.split("/");
  const metadata = await ProjectsService.getProjectMetadata(projectId);

  if (metadata && metadata.image && metadata.image.startsWith("data:image/png")) {
    const imageBuffer = Buffer.from(
      metadata.image.substr(22),
      "base64",
    );
    res.writeHead(
      200,
      {
        "Content-Type": "image/png",
        "Content-Length": imageBuffer.length,
      },
    );
    res.end(imageBuffer);
  }
  else {
    res.status(200);
    res.end();
  }
}
