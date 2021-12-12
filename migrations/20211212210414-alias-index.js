module.exports = {
  async up(db, client) {
    await db.collection("projects").createIndex({ alias: 1 });
  },

  async down(db, client) {
  }
};
