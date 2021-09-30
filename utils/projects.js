import * as Api from "./api-client";

async function storeFilesOnServer(projectJson) {
  for (const file of Object.values(projectJson.files)) {
    if (file.blob) {
      const { hash, url } = await Api.storeFile(file.blob);
      file.hash = hash;
      file.url = url;
      file.blob = undefined;
    }
  }
}

export async function saveProjectOnServer(projectJson, linkedProjectId) {
  await storeFilesOnServer(projectJson);

  const project = await Api.saveProject(
    projectJson,
    linkedProjectId,
  );

  window.history.pushState(null, projectJson.meta.name, project.url);

  return project;
}

export async function updateProjectOnServer(projectId, projectJson) {
  await storeFilesOnServer(projectJson);

  const project = await Api.updateProject(
    projectId,
    projectJson,
  );

  window.history.pushState(null, projectJson.meta.name, project.url);

  return project;
}

