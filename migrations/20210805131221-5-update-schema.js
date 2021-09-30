const updateSchema = require("./schema");

module.exports = {
  async up(db, client) {
    let index = 0;

    const oldProjectsCount = await db.collection("projects").count({});
    const oldProjectsCursor = db.collection("projects").find({ "json.version": { $in: [ 1, 2 ] } });

    for await (const doc of oldProjectsCursor) {
      console.log("Updating project %s / %s. %s \r", index, oldProjectsCount, doc._id);

      if (doc.json) {
        // console.log(JSON.stringify(doc.json, null, 2))
        // console.log((doc))

        try {
          const json = updateSchema(doc.json);
          await db.collection("projects").updateOne(
            { id: doc.id },
            { $set: { json } },
          );
        }
        catch (error) {
          console.log(error.stack);
          throw error;
        }
      }

      index++;
    }
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
