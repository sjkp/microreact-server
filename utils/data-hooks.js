/* eslint-disable no-throw-literal */

import swr, { mutate } from "swr";

function apiEndpointHook(endpointUrl) {
  const { data, error } = swr(endpointUrl);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

function apiEndpointMutation(endpointUrl, data = undefined, update = true) {
  return mutate(
    endpointUrl,
    data,
    update,
  );
}

export function projectAccessHook(projectId) {
  return apiEndpointHook(`/api/projects/access?project=${projectId}`);
}

export function projectAccessMutation(projectId) {
  return apiEndpointMutation(`/api/projects/access?project=${projectId}`);
}

export function userAccessToken() {
  return apiEndpointHook("/api/user/access-token");
}

export function userFoldersDataHook() {
  const { data, ...rest } = apiEndpointHook("/api/user/folders");
  if (data) {
    return {
      ...rest,
      data: data.map((x) => {
        return {
          name: x,
          label: x,
        };
      }),
    };
  }
  else {
    return rest;
  }
}

export function userShareEmailsHook() {
  return apiEndpointHook("/api/user/share-emails");
}

export function userProjectsHook() {
  return apiEndpointHook("/api/user/projects");
}

export function userProjectsMutation(data, update) {
  return apiEndpointMutation("/api/user/projects", data, update);
}

export function userSharedProjectsHook() {
  return apiEndpointHook("/api/user/shared-projects");
}
