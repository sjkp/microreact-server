import validUrl from "valid-url";

import publicRuntimeConfig from "../utils/public-runtime-config";

function absoluteUrl(path) {
  return `${publicRuntimeConfig.baseUrl}${path}`;
}

function isValidUrl(url) {
  return validUrl.isUri(url);
}

function relativeUrl(path) {
  const baseUrl = new URL(publicRuntimeConfig.baseUrl);
  return `${baseUrl.pathname}${path}`;
}

module.exports = {
  absolute: absoluteUrl,
  isValid: isValidUrl,
  relative: relativeUrl,
};
