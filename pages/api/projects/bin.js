import { ApiError } from "next/dist/next-server/server/api-utils";
import requireUserMiddleware from "cgps-application-server/middleware/require-user";
import logger from "cgps-application-server/logger";

import ProjectsService from "../../../services/projects";

export default async function (req, res) {
  const user = await requireUserMiddleware(req, res);

  const projectModel = await ProjectsService.getProjectDocument(req.query?.project, user);

  if (!projectModel.hasOnwerAccess(user)) {
    throw new ApiError(403);
  }

  const isBinned = Boolean(req.body.binned);

  if (typeof isBinned === "boolean") {
    projectModel.binned = isBinned;
  }
  else {
    throw new ApiError(400);
  }

  await projectModel.save();

  logger.info(`project ${isBinned ? "binned" : "unbinned"}`, { project: projectModel.id }, { user, req, res });

  return res.json(true);
}
