module.exports = {
  async up(db, client) {
    let index = 0;

    const cursor = db.collection("accounts").find(
      {
        providerType: { $ne: null },
        providerId: { $ne: null },
      },
      {
        _id: 1,
        providerType: 1,
        providerId: 1,
      }
    );

    for await (const doc of cursor) {
      console.log("Updating account %s %s\r", index, doc._id);

      await db.collection("accounts").updateOne(
        { _id: doc._id },
        {
          $set: {
            type: doc.providerType,
            provider: doc.providerId,
          },
        },
      );

      index++;
    }

    console.log("\n");
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
