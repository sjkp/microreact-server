module.exports = {
  async up(db, client) {
    await db.collection("projects").createIndex({ updatedAt: 1 });
  },
  async down(db, client) {
  }
};
