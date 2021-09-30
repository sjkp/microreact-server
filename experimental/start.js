const apiUtils = require("next/dist/next-server/server/api-utils.js");

const nextApiResolver = apiUtils.apiResolver;
// apiUtils.apiResolver = async function (...args) {
//   console.log("custom api");
//   return nextApiResolver.apply(null, args);
// };

// console.log(apiUtils)

require("./node_modules/.bin/next");