/* eslint-disable quote-props */

module.exports = {
  async up(db, client) {
    await db.collection("projects").dropIndexes();
    await db.collection("projects").createIndex({ "linkedProjectId": 1 });
    await db.collection("projects").createIndex({ "shares.token": 1 });
    await db.collection("projects").createIndex({ "shares.user": 1 });
    await db.collection("projects").createIndex({ "shares.email": 1 });
    await db.collection("projects").createIndex({ createdAt: 1 });
    await db.collection("projects").createIndex({ id: 1 });
    await db.collection("projects").createIndex({ owner: 1 });
    await db.collection("projects").createIndex({ owner: 1, binned: 1 });
    await db.collection("projects").createIndex({ owner: 1, starred: 1 });
    await db.collection("projects").createIndex({ version: 1 });
  },

  async down(db, client) {},
};
