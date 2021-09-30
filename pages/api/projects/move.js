import { ApiError } from "next/dist/next-server/server/api-utils";
import requireUserMiddleware from "cgps-application-server/middleware/require-user";

import ProjectsService from "../../../services/projects";

export default async function (req, res) {
  const user = await requireUserMiddleware(req, res);

  const projectModel = await ProjectsService.getProjectDocument(req.query?.project, user);

  if (!projectModel.hasOnwerAccess(user)) {
    throw new ApiError(403);
  }

  projectModel.folder = req.body.folder ?? null;

  await projectModel.save();

  return res.json(true);
}
