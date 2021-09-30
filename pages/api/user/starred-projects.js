import requireUserMiddleware from "cgps-application-server/middleware/require-user";
import ProjectsService from "../../../services/projects";

export default async function (req, res) {
  const user = await requireUserMiddleware(req, res);

  const projects = await ProjectsService.findUserStarredProjects(user);

  return res.json(projects);
}
