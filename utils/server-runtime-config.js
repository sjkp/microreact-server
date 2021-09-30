const getConfig = require("next/config").default;

const { serverRuntimeConfig } = getConfig();

module.exports = serverRuntimeConfig;
