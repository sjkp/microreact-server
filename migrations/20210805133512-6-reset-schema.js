module.exports = {
  async up(db, client) {
    await db.collection("projects").update(
      {},
      {
        $set: {
          "json.schema": "https://microreact.org/schema/v1.json",
        },
        $unset: {
          "json.version": 1,
        },
      },
      {
        multi: true,
      },
    );
  },

  async down(db, client) {
    return Promise.resolve();
  },
};
