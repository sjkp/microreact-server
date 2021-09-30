module.exports = async function getViews(user) {
  const ProjectModel = require("./index");
  const projectDocs = await (
    ProjectModel.find(
      {
        linkedProjectId: this.linkedProjectId || this.id,
        owner: user?.id,
      },
      {
        id: 1,
        version: 1,
        "json.image": 1,
        "json.meta.name": 1,
      },
    )
      .lean()
  );

  const views = [];
  for (const doc of projectDocs) {
    views.push({
      title: doc.json.meta.name,
      url: ProjectModel.projectUrl(doc.version, doc.id, doc.json.meta.name),
      image: doc.json.image,
      // type: "private",
    });
  }

  return views;
};
