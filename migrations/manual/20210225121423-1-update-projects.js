module.exports = {

  async up(db, client) {
    let index = 0;
    const now = new Date();

    const oldProjectsCount = await db.collection("project").count({});
    const oldProjectsCursor = db.collection("project").find({});
    for await (const doc of oldProjectsCursor) {
      console.log("Updating project %s / %s. %s \r", index, oldProjectsCount, doc._id);

      const {
        _id,
        accessLevel,
        createdAt,
        createdBy,
        dataFile,
        dataUrl,
        defaultView,
        description,
        email,
        fields,
        files,
        folder,
        id,
        invitations,
        lastAccessedAt,
        lastUpdatedAt,
        name,
        networkFile,
        networkUrl,
        organisation,
        settings,
        sharedWith,
        shortId,
        treeFile,
        treeUrl,
        version,
        viewsCount,
        website,
      } = doc;

      const newDoc = {
        access: (accessLevel === 0 ? 0 : 1),
        listed: (accessLevel === 2),
        _id: doc._id,
        createdAt,
        owner: createdBy,
        folder,
        updatedAt: lastUpdatedAt,
        id: shortId,
        version,
        shares: [],
        json: {
          meta: {
            description,
            email,
            name,
            website,
          },
          lastAccessedAt,
          dataFile,
          dataUrl,
          defaultView,
          fields,
          files,
          id,
          networkFile,
          networkUrl,
          organisation,
          settings,
          treeFile,
          treeUrl,
          viewsCount,
        },
      };

      if (sharedWith) {
        for (const userId of sharedWith) {
          newDoc.shares.push({
            kind: "user",
            user: userId,
            createdAt: now,
          });
        }
      }

      if (invitations) {
        for (const invitation of invitations) {
          newDoc.shares.push({
            kind: "invitation",
            token: invitation.token,
            email: invitation.email,
            createdAt: invitation.datetime || now,
          });
        }
      }

      await db.collection("projects").insertOne(newDoc);

      index++;
    }

    await db.collection("project").rename("_projects");
  },

  async down(db, client) {
    await db.collection("_projects").rename("project");
  },

};
