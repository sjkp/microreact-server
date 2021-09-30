import requireUserMiddleware from "cgps-application-server/middleware/require-user";
import databaseService from "../../../services/dataabse";

export default async function (req, res) {
  const user = await requireUserMiddleware(req, res);

  const db = await databaseService();

  const docs = [
    // "Folder 1",
  ];

  const projectFolders = await db.models.Project.distinct(
    "folder",
    {
      owner: user.id,
    },
  );

  for (const folderName of projectFolders) {
    if (folderName) {
      docs.push(folderName);
    }
  }

  return res.json(docs.sort());
}
