const connect = require("cgps-application-server/db/connect");
// const mongoose = require("mongoose");

const serverRuntimeConfig = require("../utils/server-runtime-config");

// mongoose.set('debug', true);

// export function toObjectId(value) {
//   if (typeof value === "string") {
//     return new mongoose.Types.ObjectId(value);
//   }
//   else {
//     return value;
//   }
// }

export default async function connectToDatabase() {
  const db = connect({
    overwriteModels: true,
    url: serverRuntimeConfig.mongodb.url,
  });

  const ProjectModel = require("../models/project");
  const UserModel = require("../models/user");

  return db;
}
