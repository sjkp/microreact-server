import requireUserMiddleware from "cgps-application-server/middleware/require-user";
import { ApiError } from "next/dist/next-server/server/api-utils";

import ProjectsService from "../../../services/projects";

import serverRuntimeConfig from "../../../utils/server-runtime-config";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: serverRuntimeConfig.bodySizeLimit,
    },
  },
};

export default async function (req, res) {
  const user = await requireUserMiddleware(req, res);

  const projectModel = await ProjectsService.getProjectDocument(req.query?.project, user);

  if (!projectModel.hasOnwerAccess(user)) {
    throw new ApiError(403);
  }

  await projectModel.saveJson(req.body);

  return res.json({
    isOwner: true,
    id: projectModel.id,
    url: projectModel.url(),
  });
}
