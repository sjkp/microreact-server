const connect = require("cgps-application-server/db/connect");

const serverRuntimeConfig = require("../utils/server-runtime-config");

export default async function connectToDatabase() {
  const db = connect({
    overwriteModels: true,
    url: serverRuntimeConfig.mongodb.url,
  });

  const ProjectModel = require("../models/project");
  const UserModel = require("../models/user");

  return db;
}
