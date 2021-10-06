module.exports = {

  async up(db, client) {
    await db.collection("projects").update(
      {
        version: 2,
      },
      {
        $set: {
          access: 1,
          shares: [],
        },
        $unset: {
          accessLevel: 1,
          sharedWith: 1,
          invitations: 1,
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
