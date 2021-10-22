/* eslint-disable quote-props */

module.exports = {
  "extends": [
    "cgps",
    "cgps/react",
  ],

  "env": {
    "node": true,
    "browser": true,
  },

  "parser": "@babel/eslint-parser",

  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
      ],
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        [
          "@babel/plugin-transform-runtime",
          { "regenerator": true },
        ],
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-do-expressions",
      ],
    },
  },

  "plugins": [
    "@babel",
  ],

  "settings": {
    "react": {
      "version": "latest",
    },
  //   "import/resolver": {
  //     "webpack": {
  //       "config": {
  //         "resolve": {
  //           "alias": {
  //             ...([ "components", "models", "services", "styles", "utils" ].reduce((prev, x) => { prev[x] = require("path").join(__dirname, x); return prev; }, {})),
  //           }
  //         }
  //       }
  //     }
  //   }
  },

  "rules": {
  },

};
