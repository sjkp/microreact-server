const apiUtils = require("next/dist/next-server/server/api-utils.js");

const nextApiResolver = apiUtils.apiResolver;
// apiUtils.apiResolver = async function (...args) {
//   return nextApiResolver.apply(null, args);
// };

require("./node_modules/.bin/next");