import { ApiError } from "next/dist/next-server/server/api-utils";
import requireUserMiddleware from "cgps-application-server/middleware/require-user";

import * as ProjectsService from "../../../services/projects";

export default async function (req, res) {
  const user = await requireUserMiddleware(req, res);

  const projectModel = await ProjectsService.getProjectDocument(req.query?.project, user);

  if (!projectModel.hasOnwerAccess(user)) {
    throw new ApiError(403);
  }

  let alias;
  if ("alias" in req.body) {
    if (typeof req.body.alias === "string") {
      alias = req.body.alias.toLowerCase().replace(/[^0-9a-z]+/g, "-");
    }
    else {
      alias = null;
    }
  }
  else {
    throw new ApiError(400, "Bad Request");
  }

  if (
    (alias === null)
    ||
    (await ProjectsService.checkProjectAlias(alias))
  ) {
    projectModel.alias = alias;
    await projectModel.save();
    return res.json(true);
  }
  else {
    return res.json(false);
  }

}
