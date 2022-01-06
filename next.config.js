const fs = require("fs");
const path = require("path");

// const withPlugins = require('next-compose-plugins');
// const modules = [
//   'microreact-viewer',
//   "@phylocanvas/phylocanvas.gl",
//   "kepler.gl",
// ]
// const withTM = require('next-transpile-modules')(modules);

function getServerRuntimeConfig() {
  const mergeOptions = require("merge-options");

  const serverRuntimeConfig = require("./defaults.json");

  if (fs.existsSync(path.resolve(__dirname, "config.json"))) {
    return mergeOptions(serverRuntimeConfig, require("./config.json"));
  }
  else {
    return serverRuntimeConfig;
  }
}

function getPublicRuntimeConfig(serverRuntimeConfig) {
  const packageJson = require("./package.json");

  return {
    version: packageJson.version,
    googleAnalyticsAccount: serverRuntimeConfig.googleAnalyticsAccount,
    mapboxApiAccessToken: serverRuntimeConfig.mapboxApiAccessToken,
    baseUrl: serverRuntimeConfig.baseUrl,
    options: {
      disableViewerDrawer: serverRuntimeConfig.disableViewerDrawer,
      disableUploadPage: serverRuntimeConfig.disableUploadPage,
    },
  };
}

const serverRuntimeConfig = getServerRuntimeConfig();
module.exports.serverRuntimeConfig = serverRuntimeConfig;

const publicRuntimeConfig = getPublicRuntimeConfig(serverRuntimeConfig);
module.exports.publicRuntimeConfig = publicRuntimeConfig;

module.exports = ({

  // env: {
  //   mapboxApiAccessToken: serverRuntimeConfig.mapboxApiAccessToken,
  // },

  // Will only be available on the server side
  serverRuntimeConfig,

  // Will be available on both server and client
  publicRuntimeConfig,

  async rewrites() {
    return [
      {
        source: "/accept-invitation/:token",
        destination: "/api/invitations/accept",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/showcase",
        destination: "/",
        permanent: false,
      },
      {
        source: "/myaccount",
        destination: "/my-account",
        permanent: false,
      },
      {
        source: "/api/files/get",
        destination: "/api/files/raw",
        permanent: false,
      },
      {
        source: "/api/files/local",
        destination: "/api/files/raw",
        permanent: false,
      },
    ];
  },

  // Custom Webpack Config: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias["microreact-viewer"] = path.resolve(__dirname, "public", "microreact-viewer", "microreact-viewer.js");
    return config;
  },
});
