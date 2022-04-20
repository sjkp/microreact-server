const shortUUID = require("short-uuid");

module.exports = {

  async up(db, client) {
    let index = 0;

    const docCursor = db.collection("folders").find();

    for await (const doc of docCursor) {
      console.info("Adding id to folder %s %s", index, doc._id);

      await db.collection("folders").updateOne(
        { _id: doc._id },
        {
          $set: { id: shortUUID.generate() },
        },
      );

      index++;
    }
  },

  async down(db, client) {},

};
