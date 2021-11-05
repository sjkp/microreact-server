module.exports = {

  async up(db, client) {
    let index = 0;
    const now = new Date();

    const projectsCursor = db.collection("projects").find(
      {
        folder: { $ne: null },
        owner: { $ne: null },
      },
      {
        folder: 1,
        owner: 1,
      }
    );

    for await (const projectDoc of projectsCursor) {
      console.log("Moving folder of project %s %s", index, projectDoc._id, projectDoc.owner, projectDoc.folder);

      const { value: folderDoc } = await db.collection("folders").findOneAndUpdate(
        { name: projectDoc.folder.trim(), owner: projectDoc.owner },
        {
          $setOnInsert: {
            name: projectDoc.folder.trim(),
            owner: projectDoc.owner,
            createdAt: now,
            updatedAt: now,
          },
        },
        {
          returnOriginal: false,
          upsert: true,
        }
      );

      await db.collection("projects").updateOne(
        { _id: projectDoc._id },
        { $set: { folder: folderDoc._id } },
      );

      index++;
    }

    await db.collection("folders").createIndex({ owner: 1 });
  },

  async down(db, client) {
    await db.collection("projects").updateMany(
      { _folder: { $ne: null } },
      { $unset: { _folder: 1 } },
    );
  },

};
