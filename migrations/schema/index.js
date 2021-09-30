const versions = [
  require("./version-2"),
  require("./version-3"),
];

function updateSchema(originalDocument) {
  // Determine the version of the document

  // console.time("Convert schema");

  const curentDocumentVersion = originalDocument.version || 1;
  let doc = originalDocument;
  for (let version = curentDocumentVersion; version < versions.length + 1; version++) {
    const updater = versions[version - 1];
    doc = updater(doc);
    doc.version = (version + 1);
    doc.schema = `https://microreact.org/schema/v${doc.version}.json`;
  }

  // console.timeEnd("Convert schema");

  return doc;
}

module.exports = updateSchema;

module.exports.version = (versions.length + 1);
