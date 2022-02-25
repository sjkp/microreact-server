(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ProjectViewer"] = factory();
	else
		root["ProjectViewer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "microreact-viewer-" + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"1":1,"2":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "microreact-viewer-" + chunkId + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				var onLinkComplete = function (event) {
/******/ 					// avoid mem leaks.
/******/ 					linkTag.onerror = linkTag.onload = null;
/******/ 					if (event.type === 'load') {
/******/ 						resolve();
/******/ 					} else {
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realHref = event && event.target && event.target.href || fullhref;
/******/ 						var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 						err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 						err.type = errorType;
/******/ 						err.request = realHref;
/******/ 						delete installedCssChunks[chunkId]
/******/ 						linkTag.parentNode.removeChild(linkTag)
/******/ 						reject(err);
/******/ 					}
/******/ 				};
/******/ 				linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				document.head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/microreact-viewer/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(226);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCache = clearCache;
exports.createCombinedStateSelector = createCombinedStateSelector;
exports.createKeyedStateSelector = createKeyedStateSelector;
exports.newId = newId;
exports.updateKeyedState = updateKeyedState;
exports.removeKeyedState = removeKeyedState;
exports.replaceKeyedState = replaceKeyedState;
exports.updateAll = updateAll;
exports.connectToPresentState = connectToPresentState;
exports.connectToPresentStateWithRef = connectToPresentStateWithRef;
exports.getPresentState = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _reactRedux = __webpack_require__(96);

var _reReselect = _interopRequireDefault(__webpack_require__(228));

var _constants = __webpack_require__(12);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var selectors = [];

function clearCache() {
  var _iterator = _createForOfIteratorHelper(selectors),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selector = _step.value;

      if (selector.clearCache) {
        selector.clearCache();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function createCombinedStateSelector(stateKeysSelector, baseSelector, resultFunc) {
  var lastArgs = null;
  var lastResult = null;

  var selector = function selector(state, stateId) {
    var rawKeys = stateKeysSelector(state, stateId);
    var keys = Array.isArray(rawKeys) ? rawKeys : Object.keys(rawKeys);
    var args = [];

    for (var i = 0; i < keys.length; i++) {
      args.push(baseSelector(state, keys[i]));
    }

    var recompute = false;

    if (lastArgs === null || lastArgs.length !== args.length) {
      recompute = true;
    } else {
      for (var _i = 0; _i < args.length; _i++) {
        if (lastArgs[_i] !== args[_i]) {
          recompute = true;
          break;
        }
      }
    }

    if (recompute) {
      lastResult = resultFunc.call(null, args, keys);
    }

    lastArgs = args;
    return lastResult;
  };

  return selector;
}

var getPresentState = function getPresentState(rootState) {
  return rootState.present;
};

exports.getPresentState = getPresentState;

var keySelector = function keySelector(_, stateId) {
  if (!stateId) {
    throw new Error("Invalid state key");
  }

  return stateId;
};

function createKeyedStateSelector() {
  var baseSelector = _reReselect["default"].apply(null, arguments);

  var selector = baseSelector(keySelector);
  selectors.push(selector);
  return selector;
}

function newId(state, prefix, ignoreKeys) {
  var index = 0;
  var newKey;
  var allKeys = Object.keys(state);

  if (ignoreKeys) {
    var _iterator2 = _createForOfIteratorHelper(ignoreKeys),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var key = _step2.value;
        allKeys.push(key);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  do {
    index++;
    newKey = "".concat(prefix, "-").concat(index);
  } while (allKeys.includes(newKey));

  return newKey;
}

function updateKeyedState(state, stateId, updater) {
  var nextState = _objectSpread({}, state || _constants.emptyObject);

  nextState[stateId] = _objectSpread(_objectSpread({}, nextState[stateId] || _constants.emptyObject), updater);
  return nextState;
}

function removeKeyedState(state, stateId) {
  var nextState = _objectSpread({}, state);

  nextState[stateId] = undefined;
  delete nextState[stateId];
  return nextState;
}

function replaceKeyedState(state, stateId, updater) {
  var nextState = _objectSpread({}, state);

  nextState[stateId] = updater;
  return nextState;
}

function updateAll(state, updater) {
  var nextState = Object.assign({}, state);

  for (var _i2 = 0, _Object$keys = Object.keys(state); _i2 < _Object$keys.length; _i2++) {
    var stateId = _Object$keys[_i2];
    nextState[stateId] = Object.assign({}, state[stateId], updater);
  }

  return nextState;
}

function connectToPresentState(component, mapStateToProps, mapDispatchToProps) {
  return (0, _reactRedux.connect)(mapStateToProps ? function (state, props) {
    return mapStateToProps(state.present, props);
  } : null, mapDispatchToProps)(component);
}

function connectToPresentStateWithRef(component, mapStateToProps, mapDispatchToProps) {
  return (0, _reactRedux.connect)(mapStateToProps ? function (state, props) {
    return mapStateToProps(state.present, props);
  } : null, mapDispatchToProps, null, {
    forwardRef: true
  })(component);
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeSpeeds = exports.timeUnits = exports.icons = exports.halfWidthWithPaddingStyle = exports.halfWidthStyle = exports.fullWithStyle = exports.fullSizeStyle = exports.editableComponents = exports.emptyString = exports.emptyObject = exports.emptySet = exports.emptyArray = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _Menu = _interopRequireDefault(__webpack_require__(163));

var emptyArray = [];
exports.emptyArray = emptyArray;
var emptySet = new Set();
exports.emptySet = emptySet;
var emptyObject = {};
exports.emptyObject = emptyObject;
var emptyString = "";
exports.emptyString = emptyString;
var editableComponents = ["Map", "Network", "Table", "Timeline", "Tree"];
exports.editableComponents = editableComponents;
var fullSizeStyle = {
  height: "100%",
  width: "100%"
};
exports.fullSizeStyle = fullSizeStyle;
var fullWithStyle = {
  width: "100%"
};
exports.fullWithStyle = fullWithStyle;
var halfWidthStyle = {
  width: "50%"
};
exports.halfWidthStyle = halfWidthStyle;
var halfWidthWithPaddingStyle = {
  width: "calc(50% - 8px)"
};
exports.halfWidthWithPaddingStyle = halfWidthWithPaddingStyle;
var icons = {
  menu: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
};
exports.icons = icons;
var timeUnits = {
  year: "Year",
  quarter: "Quarter",
  month: "Month",
  week: "Week",
  day: "Day"
};
exports.timeUnits = timeUnits;
var timeSpeeds = {
  1: "1 second",
  3: "3 seconds",
  10: "10 seconds",
  20: "20 seconds",
  30: "30 seconds",
  60: "60 seconds"
};
exports.timeSpeeds = timeSpeeds;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeType = exports.ThemeDef = exports.TableColumn = exports.StylePalette = exports.ReactRef = exports.MapboxStyle = exports.MapMarker = exports.MapLocation = exports.LabelValuePair = exports.GeometricPoint = exports.HistoryEntry = exports.FileExtension = exports.FileKind = exports.FileDescriptor = exports.DataFilter = exports.DataColumn = exports.ColourModes = exports.ChartDataTable = exports.ChartAxisMode = exports.ChartTypes = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

// eslint-disable-next-line no-unused-vars
// function createEnumType(items) {
//   const type = PropTypes.oneOf(items);
//   for (const item of items) {
//     type[item] = type
//   }
// }
var ChartTypes = _propTypes["default"].oneOf(["area", "bar", "circle", "line", "point", "tick", "custom"]);

exports.ChartTypes = ChartTypes;

var ChartAxisMode = _propTypes["default"].oneOf(["field", "frequency", "cumulative-frequency", "sum-of", "cumulative-sum-of", "average-of"]);

exports.ChartAxisMode = ChartAxisMode;
ChartAxisMode.FIELD = "field";

var ChartDataTable = _propTypes["default"].shape({
  table: _propTypes["default"].arrayOf(_propTypes["default"].object.isRequired).isRequired
});

exports.ChartDataTable = ChartDataTable;

var ColourModes = _propTypes["default"].oneOf(["categorical", "field", "gradient"]);

exports.ColourModes = ColourModes;

var DataColumn = _propTypes["default"].shape({
  dataType: _propTypes["default"].string.isRequired,
  isNumeric: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired
});

exports.DataColumn = DataColumn;

var DataFilter = _propTypes["default"].shape({
  operator: _propTypes["default"].string,
  value: _propTypes["default"].any
});

exports.DataFilter = DataFilter;

var FileDescriptor = _propTypes["default"].shape({
  id: _propTypes["default"].string.isRequired,
  format: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired,
  url: _propTypes["default"].string,
  blob: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Blob)])
});

exports.FileDescriptor = FileDescriptor;

var FileKind = _propTypes["default"].oneOf(["microrect", "data", "geo", "network", "tree"]);

exports.FileKind = FileKind;

var FileExtension = _propTypes["default"].shape({
  kind: FileKind.isRequired,
  extension: _propTypes["default"].string.isRequired
});

exports.FileExtension = FileExtension;

var HistoryEntry = _propTypes["default"].shape({
  index: _propTypes["default"].number.isRequired,
  label: _propTypes["default"].string.isRequired,
  image: _propTypes["default"].string
});

exports.HistoryEntry = HistoryEntry;

var GeometricPoint = _propTypes["default"].arrayOf(_propTypes["default"].number.isRequired);

exports.GeometricPoint = GeometricPoint;

var LabelValuePair = _propTypes["default"].shape({
  label: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any.isRequired
});

exports.LabelValuePair = LabelValuePair;

var MapLocation = _propTypes["default"].arrayOf(_propTypes["default"].number.isRequired);

exports.MapLocation = MapLocation;

var MapMarker = _propTypes["default"].shape({
  maxx: _propTypes["default"].number,
  maxy: _propTypes["default"].number,
  minx: _propTypes["default"].number,
  miny: _propTypes["default"].number,
  position: MapLocation.isRequired,
  rows: _propTypes["default"].array.isRequired,
  style: _propTypes["default"].shape({
    colour: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].any,
    shape: _propTypes["default"].string.isRequired
  }),
  slices: _propTypes["default"].arrayOf(_propTypes["default"].array)
});

exports.MapMarker = MapMarker;

var MapboxStyle = _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].object.isRequired]);

exports.MapboxStyle = MapboxStyle;

var ReactRef = _propTypes["default"].shape({
  current: _propTypes["default"].object
});

exports.ReactRef = ReactRef;

var StylePalette = _propTypes["default"].shape({
  entries: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].array.isRequired, _propTypes["default"].string.isRequired])).isRequired,
  type: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired
});

exports.StylePalette = StylePalette;

var TableColumn = _propTypes["default"].shape({
  align: _propTypes["default"].oneOf(["right", "left"]),
  dataKey: _propTypes["default"].string.isRequired,
  field: _propTypes["default"].string.isRequired,
  frozen: _propTypes["default"].oneOf([true, false, "right", "left"]),
  hidden: _propTypes["default"].bool.isRequired,
  key: _propTypes["default"].string.isRequired,
  minWidth: _propTypes["default"].number.isRequired,
  resizable: _propTypes["default"].bool.isRequired,
  sort: _propTypes["default"].oneOf(["asc", "desc"]),
  sortable: _propTypes["default"].bool.isRequired,
  tableId: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired
});

exports.TableColumn = TableColumn;

var ThemeDef = _propTypes["default"].shape({
  background: _propTypes["default"].shape({
    main: _propTypes["default"].string.isRequired,
    highlight: _propTypes["default"].string.isRequired,
    hover: _propTypes["default"].string.isRequired,
    disabled: _propTypes["default"].string.isRequired // paper: PropTypes.string.isRequired,
    // default: PropTypes.string.isRequired,

  }).isRequired,
  text: _propTypes["default"].shape({
    primary: _propTypes["default"].string.isRequired,
    secondary: _propTypes["default"].string.isRequired,
    disabled: _propTypes["default"].string.isRequired,
    hint: _propTypes["default"].string.isRequired
  }).isRequired,
  primary: _propTypes["default"].shape({
    light: _propTypes["default"].string.isRequired,
    main: _propTypes["default"].string.isRequired,
    dark: _propTypes["default"].string.isRequired,
    contrast: _propTypes["default"].string.isRequired
  }).isRequired,
  secondary: _propTypes["default"].shape({
    light: _propTypes["default"].string.isRequired,
    main: _propTypes["default"].string.isRequired,
    dark: _propTypes["default"].string.isRequired,
    contrast: _propTypes["default"].string.isRequired
  }).isRequired
});

exports.ThemeDef = ThemeDef;

var TreeType = _propTypes["default"].oneOf(["rc", "cr", "rd", "dg", "hr"]);

exports.TreeType = TreeType;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import fullDatasetSelector from "./full-dataset";
var dataColumnsByFieldMapSelector = (0, _reselect.createSelector)(_dataColumns["default"], // fullDatasetSelector,
function () {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var map = new Map(); // if (fullDataset?.rawColumns) {
  //   for (const item of fullDataset.rawColumns) {
  //     map.set(item.name, item);
  //   }
  // }

  var _iterator = _createForOfIteratorHelper(columns),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      map.set(item.name, item);
      map.set(item.normalised, item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return map;
});
var _default = dataColumnsByFieldMapSelector;
exports["default"] = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

var rowsSelector = function rowsSelector(state) {
  var _fullDatasetSelector;

  return (_fullDatasetSelector = (0, _fullDataset["default"])(state)) === null || _fullDatasetSelector === void 0 ? void 0 : _fullDatasetSelector.rows;
};

var _default = rowsSelector;
exports["default"] = _default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var groupSeparator = "::";
var dataColumnsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _fullDataset["default"])(state);
}, function (dataset) {
  var columns = [];

  if (dataset !== null && dataset !== void 0 && dataset.columns) {
    var _iterator = _createForOfIteratorHelper(dataset.columns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var rawDataType = item.type === "date" || item.type === "timestamp" ? "date" : item.type === "integer" || item.type === "real" || item.type === "percent" || item.type === "currency" ? "number" : "text";
        var dataType = item.userDataType || rawDataType;
        var normalisedName = item.name.trim().toLowerCase();
        var label = item.name;
        var group = null;

        if (item.label) {
          label = item.label;
        } else if (item.name.toLowerCase().endsWith("__autocolour")) {
          label = item.name.substring(0, item.name.length - 12);
        } else if (item.name.toLowerCase().endsWith("__autocolor")) {
          label = item.name.substring(0, item.name.length - 11);
        }

        if (label.includes(groupSeparator)) {
          var strings = label.split(groupSeparator);
          group = strings[0];
          label = strings[1];
        }

        columns.push({
          label: label,
          group: group,
          name: item.name,
          format: item.format,
          normalised: normalisedName,
          dataType: dataType,
          rawDataType: rawDataType,
          isNumeric: dataType === "number",
          colourPalette: item.colourPalette,
          shapePalette: item.shapePalette,
          urlField: item.urlField
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return columns;
});
var _default = dataColumnsSelector;
exports["default"] = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMac = isMac;
exports.nextTick = nextTick;
exports.nextFrame = nextFrame;
exports.nextAnimation = nextAnimation;
exports.triggerWindowResize = triggerWindowResize;
exports.changeLocation = changeLocation;
exports.pageUrl = pageUrl;
exports.getPageHash = getPageHash;
exports.parseQueryString = parseQueryString;
exports.setPageHash = setPageHash;

var _queryString = _interopRequireDefault(__webpack_require__(232));

var _slugify = _interopRequireDefault(__webpack_require__(233));

function isMac() {
  return typeof navigator !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
}

function nextTick(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  setTimeout(callback, delay);
}

function nextFrame(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  setTimeout(callback, delay);
}

function nextAnimation(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  setTimeout(callback, delay);
}

function triggerWindowResize() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  setTimeout(function () {
    return window.dispatchEvent(new Event("resize"));
  }, delay);
} // export function triggerEvent(element, event, delay = 0) {
//   setTimeout(
//     () => element.dispatchEvent(new Event(event)),
//     delay,
//   );
// }


function changeLocation(path) {
  window.history.pushState(null, null, path);
}

function pageUrl(url) {
  return new URL(window.location);
}

function getPageHash() {
  var _window, _window$location;

  if ((_window = window) !== null && _window !== void 0 && (_window$location = _window.location) !== null && _window$location !== void 0 && _window$location.hash) {
    return window.location.hash.substr(1, 4);
  } else {
    return undefined;
  }
}

function parseQueryString(url) {
  return _queryString["default"].parse(new URL(url).search);
}

function setPageHash(id, title) {
  var hash = id;

  if (title) {
    var slug = (0, _slugify["default"])(title, {
      lower: true,
      strict: true
    });
    hash += "-".concat(slug);
  }

  window.location.hash = hash;
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstElement = firstElement;
exports.filterByQuery = filterByQuery;
exports.lastElement = lastElement;
exports.mode = mode;
exports.summarise = summarise;
exports.sortComparator = sortComparator;
exports.swap = swap;
exports.uniqueElements = uniqueElements;
exports.uniqueElementsCount = uniqueElementsCount;
exports.remove = remove;
exports.update = update;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-plusplus */
function firstElement(array) {
  return array.length ? array[0] : undefined;
}

function filterByQuery(rows, fieldsMap, query) {
  var queryFieldNames = Object.keys(query).filter(function (x) {
    return fieldsMap.has(x);
  });
  var ids = [];

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      var match = true;

      var _iterator2 = _createForOfIteratorHelper(queryFieldNames),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var field = _step2.value;

          if (Array.isArray(query[field]) ? !query[field].includes(row[field]) : row[field] !== query[field]) {
            match = false;
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (match) {
        ids.push(row[0]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return ids;
}

function lastElement(array) {
  return array.length ? array[array.length - 1] : undefined;
} // export function leftJoin(
//   array1,
//   array2,
//   { key, key1, key2, match, propMap1, propMap2, leftAs, rightAs } = {}
// ) {
//   if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length === 0 || array2.length === 0) {
//     throw new Error("Cannot join empty arrays.");
//   }
//   const matchItems = match;
//   if (typeof matchItems !== "function") {
//     return [];
//   }
//   const emptyMatch = array2[0].map(() => null);
//   return array1.reduce((prev, cur) => {
//     const matches = array2.filter((a2) => matchItems(cur, a2));
//     return matches.length === 0
//       ? prev.concat(
//         [
//           ...cur,
//           ...emptyMatch,
//         ]
//       )
//       : prev.concat(
//         matches.map((m) =>
//           [
//             ...cur,
//             ...m,
//           ]
//         )
//       );
//   }, []);
// }


function mode(array, valueOf) {
  if (array.length === 0) {
    return undefined;
  }

  var modeMap = {};
  var maxEl = valueOf ? valueOf(array[0]) : array[0];
  var maxCount = 1;

  for (var i = 0; i < array.length; i++) {
    var el = valueOf ? valueOf(array[i]) : array[i];

    if (modeMap[el] == null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }

    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }

  return maxEl;
}

function summarise(array) {
  if (!array || array.length === 0) {
    return "none";
  } else if (array.length <= 2) {
    return array.join(", and ");
  } else {
    var _array = (0, _slicedToArray2["default"])(array, 3),
        first = _array[0],
        second = _array[1],
        third = _array[2];

    if (array.length === 3) {
      return "".concat(first, ", ").concat(second, ", and ").concat(third);
    } else {
      return "".concat(first, ", ").concat(second, ", ").concat(third, " + ").concat(array.length - 3);
    }
  }
}

function sortComparator(property) {
  return function (a, b) {
    var _a$property, _a$property$toString, _a$property$toString$, _b$property, _b$property$toString;

    return a === null || a === void 0 ? void 0 : (_a$property = a[property]) === null || _a$property === void 0 ? void 0 : (_a$property$toString = _a$property.toString()) === null || _a$property$toString === void 0 ? void 0 : (_a$property$toString$ = _a$property$toString.toLowerCase()) === null || _a$property$toString$ === void 0 ? void 0 : _a$property$toString$.localeCompare(b === null || b === void 0 ? void 0 : (_b$property = b[property]) === null || _b$property === void 0 ? void 0 : (_b$property$toString = _b$property.toString()) === null || _b$property$toString === void 0 ? void 0 : _b$property$toString.toLowerCase()); // if (a[property] > b[property]) {
    //   return 1;
    // }
    // if (a[property] < b[property]) {
    //   return -1;
    // }
    // return 0;
  };
}

function swap(array, oldInex, newIndex) {
  var copy = array.slice();
  copy[newIndex] = array[oldInex];
  copy[oldInex] = array[newIndex];
  return copy;
}

function uniqueElements(array, valueOf) {
  var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var unique = new Set();

  if (typeof valueOf === "function") {
    var _iterator3 = _createForOfIteratorHelper(array),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;
        unique.add(valueOf(item));
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } else if (typeof valueOf === "string") {
    var _iterator4 = _createForOfIteratorHelper(array),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _item = _step4.value;
        unique.add(_item[valueOf]);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  } else {
    var _iterator5 = _createForOfIteratorHelper(array),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _item2 = _step5.value;
        unique.add(_item2);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  if (sort) {
    return Array.from(unique).sort();
  } else {
    return Array.from(unique);
  }
}

function uniqueElementsCount(array, valueOf) {
  return uniqueElements(array, valueOf).length;
}

function remove(array, predicate) {
  var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var index = array.findIndex(predicate);

  if (index >= 0) {
    if (clone) {
      var copy = (0, _toConsumableArray2["default"])(array);
      copy.splice(index, 1);
      return copy;
    } else {
      array.splice(index, 1);
      return array;
    }
  } else if (clone) {
    return (0, _toConsumableArray2["default"])(array);
  } else {
    return array;
  }
}

function update(array, predicate, updater) {
  var newArray = (0, _toConsumableArray2["default"])(array);
  var index = array.findIndex(predicate);

  if (index >= 0) {
    newArray[index] = _objectSpread(_objectSpread({}, array[index]), updater);
  } else {
    newArray.push(updater);
  }

  return newArray;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(10);

var _idFieldName = _interopRequireDefault(__webpack_require__(123));

var _mainDatasetConfig = _interopRequireDefault(__webpack_require__(64));

var _datasets = __webpack_require__(65);

var _constants = __webpack_require__(12);

var _state = __webpack_require__(3);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dataFilesKeysSelector = function dataFilesKeysSelector(state) {
  var keys = [];

  for (var _i = 0, _Object$entries = Object.entries(state.files); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        file = _Object$entries$_i[1];

    if (file.type === "data") {
      keys.push(key);
    }
  }

  return keys;
};

var fileSelector = function fileSelector(state, fileId) {
  return state.files[fileId];
};

var dataFilesSelector = (0, _state.createCombinedStateSelector)(dataFilesKeysSelector, fileSelector, function (files, keys) {
  var filesById = {};

  for (var index = 0; index < keys.length; index++) {
    filesById[keys[index]] = files[index];
  }

  return filesById;
});
var fullDatasetSelector = (0, _reselect.createSelector)(function (state) {
  return state.datasets;
}, dataFilesSelector, function (state) {
  return (0, _mainDatasetConfig["default"])(state);
}, function (state) {
  return (0, _idFieldName["default"])(state);
}, function (datasetConfigs, files, mainDatasetConfig, idFieldName) {
  var _files$mainDatasetCon;

  var allDatasetConfigs = Object.values(datasetConfigs);

  if (mainDatasetConfig !== null && mainDatasetConfig !== void 0 && mainDatasetConfig.file && (_files$mainDatasetCon = files[mainDatasetConfig === null || mainDatasetConfig === void 0 ? void 0 : mainDatasetConfig.file]) !== null && _files$mainDatasetCon !== void 0 && _files$mainDatasetCon._content) {
    var mergedDataset = files[mainDatasetConfig.file]._content;
    var otherDatasets = allDatasetConfigs.filter(function (x) {
      return x.idFieldName === undefined;
    });

    var _iterator = _createForOfIteratorHelper(otherDatasets),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _files$datasetConfig$;

        var datasetConfig = _step.value;

        if (datasetConfig.masterFieldName && datasetConfig.linkFieldName && (_files$datasetConfig$ = files[datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.file]) !== null && _files$datasetConfig$ !== void 0 && _files$datasetConfig$._content) {
          mergedDataset = (0, _datasets.mergeBasicDatasets)(mergedDataset, files[datasetConfig.file]._content, datasetConfig.masterFieldName, datasetConfig.linkFieldName);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var finalDataset = (0, _datasets.createFullDataset)(mergedDataset); // for (const field of Object.keys(mainDatasetConfig.columns || emptyObject)) {
    //   const column = finalDataset.columns.find((x) => x.name === field);
    //   column.userDataType = mainDatasetConfig.columns[field].dataType;
    // }

    var _loop = function _loop() {
      var field = _Object$keys[_i2];
      var column = finalDataset.columns.find(function (x) {
        return x.name === field;
      });
      column.label = mainDatasetConfig.labels[field];
    };

    for (var _i2 = 0, _Object$keys = Object.keys(mainDatasetConfig.labels || _constants.emptyObject); _i2 < _Object$keys.length; _i2++) {
      _loop();
    }

    var _iterator2 = _createForOfIteratorHelper(finalDataset.rows),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _row$idFieldName;

        var row = _step2.value;
        row[0] = (_row$idFieldName = row[idFieldName]) === null || _row$idFieldName === void 0 ? void 0 : _row$idFieldName.toString();

        if (mainDatasetConfig !== null && mainDatasetConfig !== void 0 && mainDatasetConfig.aggregation) {
          var _row$mainDatasetConfi;

          row["--mr-scalar"] = (_row$mainDatasetConfi = row[mainDatasetConfig.aggregation]) !== null && _row$mainDatasetConfi !== void 0 ? _row$mainDatasetConfi : 0;
        } else {
          var _row$MrScalar;

          row["--mr-scalar"] = (_row$MrScalar = row["--mr-scalar"]) !== null && _row$MrScalar !== void 0 ? _row$MrScalar : 1;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return finalDataset;
  }

  return undefined;
});
var _default = fullDatasetSelector;
exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapQueryToProps = mapQueryToProps;

function mapQueryToProps(map) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = {};

  var _loop = function _loop() {
    var queryKey = _Object$keys[_i];

    var _loop2 = function _loop2() {
      var propKey = _Object$keys2[_i2];

      if (map[propKey].key === queryKey) {
        var newValue = null;

        if (map[propKey].values) {
          newValue = Object.keys(map[propKey].values).find(function (valueKey) {
            return map[propKey].values[valueKey] === query[queryKey];
          });
        } else {
          newValue = query[queryKey];
        }

        switch (map[propKey].type) {
          case Number:
            newValue = parseInt(newValue, 10);
            break;

          case Boolean:
            newValue = (newValue || 1).toString() === "1";
            break;

          case Array:
            newValue = (newValue || "").split(",");
            break;
        }

        props[propKey] = newValue;
      }
    };

    for (var _i2 = 0, _Object$keys2 = Object.keys(map); _i2 < _Object$keys2.length; _i2++) {
      _loop2();
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
    _loop();
  }

  return props;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof3 = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFiles = addFiles;
exports.addHistoryEntry = addHistoryEntry;
exports.batch = batch;
exports.commitFiles = commitFiles;
exports.config = config;
exports.closePaneEditor = closePaneEditor;
exports.fetchFile = fetchFile;
exports.addOrUpdateFile = addOrUpdateFile;
exports.openPaneEditor = openPaneEditor;
exports.load = load;
exports.loadDocument = loadDocument;
exports.loadView = loadView;
exports.reset = reset;
exports.setPendingFiles = setPendingFiles;
exports.save = save;
exports.setMasterDataset = setMasterDataset;
exports.query = query;
exports.verify = verify;
exports.unload = unload;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _typeof2 = _interopRequireDefault(__webpack_require__(33));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _files = __webpack_require__(38);

var _datasets = __webpack_require__(125);

var _files2 = __webpack_require__(126);

var _maps = __webpack_require__(73);

var _networks = __webpack_require__(79);

var _tables = __webpack_require__(76);

var _trees = __webpack_require__(74);

var _notes = __webpack_require__(116);

var _timelines = __webpack_require__(77);

var _mainDatasetConfig = _interopRequireDefault(__webpack_require__(64));

var _datasets2 = __webpack_require__(65);

var _html = __webpack_require__(35);

var _state = __webpack_require__(3);

var _text = __webpack_require__(71);

var _events = __webpack_require__(61);

var _hash = __webpack_require__(46);

var _trees2 = __webpack_require__(89);

var _schema = _interopRequireWildcard(__webpack_require__(132));

var _isValidTree = _interopRequireDefault(__webpack_require__(201));

var _isValidNetwork = _interopRequireDefault(__webpack_require__(202));

var _constants = __webpack_require__(12);

var _browser = __webpack_require__(21);

var _panes = __webpack_require__(69);

var _layoutModel = _interopRequireDefault(__webpack_require__(40));

var _panes2 = __webpack_require__(58);

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createLabelFromFileName(file, allFiles) {
  var hasMoreThanOfTheSameType = allFiles.filter(function (x) {
    return x.type === file.type;
  }).length > 1;

  if (hasMoreThanOfTheSameType) {
    var fileName = file.name || file.id;

    if (allFiles.length > 1 && allFiles.every(function (x) {
      return !!x.name;
    })) {
      var prefix = (0, _text.longestCommonStartingSubstring)(allFiles.map(function (x) {
        return x.name;
      }));

      if (prefix && prefix.length) {
        fileName = fileName.substring(prefix.length);
      }
    }

    return (0, _files.nameWithoutExtention)(fileName);
  } else {
    var fileNamesByType = {
      data: "Metadata",
      tree: "Tree",
      network: "Network",
      geo: "Regions",
      markdown: "Note"
    };
    return fileNamesByType[file.type] || file.id;
  }
}

function addFiles(rawFiles, paneId) {
  var commit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dispatch, getState) {
      var state, filesToLoad, _iterator, _step, _loop, fileDescriptors, _iterator2, _step2, file, failedFiles, nextPendingFiles, _iterator3, _step3, _loop2;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = (0, _state.getPresentState)(getState());
              dispatch(config({
                isBuzy: true
              }));
              filesToLoad = (0, _toConsumableArray2["default"])(rawFiles);
              _iterator = _createForOfIteratorHelper(state.config.pendingFiles || _constants.emptyArray);

              try {
                _loop = function _loop() {
                  var pendindFile = _step.value;

                  if (!filesToLoad.find(function (x) {
                    return x.id === pendindFile.id;
                  })) {
                    filesToLoad.push(pendindFile);
                  }
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _context.next = 7;
              return (0, _files.loadFiles)(filesToLoad);

            case 7:
              fileDescriptors = _context.sent;

              if (paneId) {
                _iterator2 = _createForOfIteratorHelper(fileDescriptors);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    file = _step2.value;
                    file.paneId = paneId;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              failedFiles = fileDescriptors.filter(function (x) {
                return !!x.error;
              });

              if (!(failedFiles.length === 0)) {
                _context.next = 17;
                break;
              }

              if (!(fileDescriptors.length === 1 && fileDescriptors[0].type === "microreact")) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", dispatch(load(fileDescriptors[0]._content)));

            case 15:
              if (!commit) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return", dispatch(commitFiles(fileDescriptors)));

            case 17:
              nextPendingFiles = (0, _toConsumableArray2["default"])(state.config.pendingFiles || _constants.emptyArray);
              _iterator3 = _createForOfIteratorHelper(fileDescriptors);

              try {
                _loop2 = function _loop2() {
                  var processedFile = _step3.value;
                  var pendingFileIndex = nextPendingFiles.findIndex(function (x) {
                    return x.id === processedFile.id;
                  });

                  if (pendingFileIndex >= 0) {
                    nextPendingFiles[pendingFileIndex] = _objectSpread(_objectSpread({}, nextPendingFiles[pendingFileIndex]), processedFile);
                  } else {
                    nextPendingFiles.push(processedFile);
                  }
                };

                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              dispatch(config({
                isBuzy: false,
                pendingFiles: nextPendingFiles
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function addHistoryEntry(source, label) {
  return {
    label: "".concat(source, ": ").concat(label),
    payload: undefined,
    savable: false,
    type: "MICROREACT VIEWER/ADD HISTORY ENTRY"
  };
}

function batch(actions) {
  return {
    payload: actions,
    savable: false,
    type: "MICROREACT VIEWER/BATCH"
  };
}

function commitFiles(fileDescriptors) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var isEmpty = !(0, _fullDataset["default"])(state);
    var actions = [];
    var paneIds = [];
    var orphanPanes = [];
    var hasDataFiles = !isEmpty;

    var _iterator4 = _createForOfIteratorHelper(fileDescriptors),
        _step4;

    try {
      var _loop3 = function _loop3() {
        var file = _step4.value;
        actions.push((0, _files2.addFile)(file));

        if (file.type === "data") {
          hasDataFiles = true;
          var dataset = file._content;
          actions.push((0, _datasets.addDataset)(file.id));

          var _detectAnnotationFiel = (0, _datasets2.detectAnnotationFields)(dataset.columns),
              dataFields = _detectAnnotationFiel.dataFields;

          var paneId = file.paneId || (0, _state.newId)(state.tables, "table", paneIds);
          paneIds.push(paneId);
          var label = createLabelFromFileName(file, fileDescriptors);
          actions.push((0, _tables.addTable)(paneId, label, file.id, dataFields.map(function (field) {
            return {
              field: field.name,
              fixed: field.name === (file.idFieldName || file.linkFieldName)
            };
          })));

          if (!file.paneId) {
            orphanPanes.push({
              paneId: paneId,
              label: label,
              component: "Table"
            });
          } //#region Add a map if the data file includes default LATITUDE and LONGITUDE columns


          var latitudeField = dataset.columns.find(function (x) {
            return /(__LATITUDE$)|(^LATITUDE$)/i.test(x.name);
          });
          var longitudeField = dataset.columns.find(function (x) {
            return /(__LONGITUDE$)|(^LONGITUDE$)/i.test(x.name);
          });

          if (latitudeField && longitudeField) {
            actions.push((0, _maps.addGeographicCoordinatesMap)("Map", latitudeField.name, longitudeField.name));
          } //#endregion
          //#region Add a timeline if data include YEAR, MONTH, and DAY columns


          var yearField = dataset.columns.find(function (x) {
            return /(__year$)|(^year$)/i.test(x.name);
          });
          var monthField = dataset.columns.find(function (x) {
            return /(__month$)|(^month$)/i.test(x.name);
          });
          var dayField = dataset.columns.find(function (x) {
            return /(__day$)|(^day$)/i.test(x.name);
          });

          if (yearField) {
            actions.push((0, _timelines.addYearMonthDayTimeline)("Timeline", yearField.name, monthField ? monthField.name : undefined, dayField ? dayField.name : undefined));
          } //#endregion

        } else if (file.type === "tree") {
          if (!hasDataFiles) {
            var leafLabels = (0, _trees2.newickLabels)(file._content);
            var dataFile = {
              id: (0, _hash.generateHashId)(),
              name: "metadata",
              format: "text/csv",
              blob: "id\n".concat(leafLabels.join("\n")),
              type: "data",
              _content: (0, _datasets2.createBasicDataset)(leafLabels.map(function (id) {
                return {
                  id: id
                };
              }))
            };
            actions.push((0, _files2.addFile)(dataFile));
            actions.push((0, _datasets.addDataset)(dataFile.id, {
              idFieldName: "id"
            }));

            var _label2 = createLabelFromFileName(dataFile, fileDescriptors);

            actions.push((0, _tables.addTable)(null, _label2, dataFile.id, [{
              field: "id"
            }]));
            file.labelFieldName = "id";
          }

          var _paneId = file.paneId || (0, _state.newId)(state.trees, "tree", paneIds);

          paneIds.push(_paneId);

          var _label = createLabelFromFileName(file, fileDescriptors);

          actions.push((0, _trees.addTree)(_paneId, _label, file.id, file.labelFieldName));

          if (!file.paneId) {
            orphanPanes.push({
              paneId: _paneId,
              label: _label,
              component: "Tree"
            });
          }
        } else if (file.type === "network") {
          var _paneId2 = file.paneId || (0, _state.newId)(state.networks, "network", paneIds);

          paneIds.push(_paneId2);

          var _label3 = createLabelFromFileName(file, fileDescriptors);

          actions.push((0, _networks.addNetwork)(_paneId2, _label3, file.id, file.labelFieldName));

          if (!file.paneId) {
            orphanPanes.push({
              paneId: _paneId2,
              label: _label3,
              component: "Network"
            });
          }
        } else if (file.type === "markdown") {
          var _paneId3 = file.paneId || (0, _state.newId)(state.notes, "note", paneIds);

          paneIds.push(_paneId3);

          var _label4 = createLabelFromFileName(file, fileDescriptors);

          actions.push((0, _notes.addNote)(_paneId3, _label4, file._content));

          if (!file.paneId) {
            orphanPanes.push({
              paneId: _paneId3,
              label: _label4,
              component: "Note"
            });
          }
        } else if (file.type === "geo") {
          actions.push((0, _maps.addGeoData)(file.paneId, file.id, {
            linkType: file.linkType,
            linkFieldName: file.masterFieldName,
            linkPropertyName: file.linkPropertyName
          }));
        }
      };

      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop3();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    actions.push(config({
      isBuzy: false,
      pendingFiles: null
    }));

    if (orphanPanes.length && state.panes.model) {
      actions.push((0, _panes2.setLayoutModel)((0, _panes.addMissingPaneTabs)((0, _layoutModel["default"])(state), orphanPanes)));
    }

    dispatch(batch(actions));
    dispatch(verify());
  };
}

function config(payload) {
  return {
    payload: payload,
    savable: false,
    type: "MICROREACT VIEWER/CONFIG"
  };
}

function closePaneEditor(paneId) {
  return config({
    editor: null
  });
}

function fetchFile(fileId, rawFile) {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dispatch) {
      var processedFile;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(config({
                isBuzy: true
              }));
              _context2.prev = 1;
              rawFile.id = fileId;
              _context2.next = 5;
              return (0, _files.loadFile)(rawFile);

            case 5:
              processedFile = _context2.sent;
              return _context2.abrupt("return", dispatch(batch([(0, _files2.updateFile)(processedFile), config({
                isBuzy: false
              })])));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);
              return _context2.abrupt("return", dispatch(config({
                processingError: _context2.t0.message || _context2.t0
              })));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function addOrUpdateFile(fileId, paneId, rawFile) {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(dispatch) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!fileId) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", dispatch(fetchFile(fileId, rawFile)));

            case 4:
              return _context3.abrupt("return", dispatch(addFiles([rawFile], paneId)));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
}

function openPaneEditor(paneId) {
  return config({
    editor: {
      mode: "edit",
      paneId: paneId
    }
  });
}

function load(payload) {
  return function (dispatch) {
    if (payload.files) {
      payload.files = (0, _files.clearLoadedContent)(payload.files);
    }

    var loadMainDocumentAction = dispatch(loadDocument(payload));

    if (payload.schema && payload.views) {
      var _payload$views$find, _payload$views$find$m;

      var currentViewId = (0, _browser.getPageHash)() || ((_payload$views$find = payload.views.find(function (x) {
        return x.isDefault;
      })) === null || _payload$views$find === void 0 ? void 0 : (_payload$views$find$m = _payload$views$find.meta) === null || _payload$views$find$m === void 0 ? void 0 : _payload$views$find$m.id);

      if (currentViewId) {
        var viewDocument = payload.views.find(function (x) {
          return x.meta.id === currentViewId;
        });

        if (viewDocument) {
          dispatch(loadView(viewDocument));
        }
      }
    }

    return loadMainDocumentAction;
  };
}

function loadDocument(payload) {
  return function (dispatch) {
    // TODO: no need to show a loader as files are not fetched here
    var doc = (0, _schema["default"])(payload);
    return dispatch({
      label: doc.schema ? "Project: Load project" : "Project: Load view",
      payload: doc,
      savable: false,
      type: "MICROREACT VIEWER/LOAD"
    });
  };
}

function loadView(viewDocument) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    (0, _browser.setPageHash)(viewDocument.meta.id, viewDocument.meta.name);
    return dispatch(loadDocument(_objectSpread(_objectSpread({}, viewDocument), {}, {
      files: state.files,
      meta: state.meta,
      views: state.views
    })));
  };
}

function reset() {
  return {
    payload: (0, _schema["default"])(),
    savable: false,
    type: "MICROREACT VIEWER/LOAD"
  };
}

function setPendingFiles(nextPendingFiles) {
  return config({
    pendingFiles: nextPendingFiles
  });
}

function save() {
  return function (dispatch, getState) {
    return Promise.resolve().then(function () {
      return (0, _events.publish)("before-screenshot");
    }).then(function () {
      return (0, _html.exportHtmlElementAsDataUrl)((0, _html.getContainerElement)().querySelector("main.MuiPaper-root"), true
      /* resize */
      );
    }).then( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(image) {
        var state, doc;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _events.publish)("after-screenshot");
                state = (0, _state.getPresentState)(getState());
                doc = _objectSpread({}, state); // Set schema and metadata

                doc.schema = "https://microreact.org/schema/v".concat(_schema.version, ".json");
                doc.meta = _objectSpread({}, doc.meta);
                doc.meta.image = image;
                doc.meta.timestamp = new Date().toISOString(); // Remove config attributes

                doc.config = undefined; // Serialise file blobs and remove file loaded content

                doc.files = (0, _files.clearLoadedContent)(doc.files);
                return _context4.abrupt("return", doc);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
}

function setMasterDataset(datasetId) {
  return function (dispatch, getState) {
    dispatch((0, _datasets.updateDataset)(datasetId, {
      idFieldName: ""
    }));
    dispatch(verify());
  };
}

function query(updater) {
  return {
    delay: true,
    payload: updater,
    savable: false,
    type: "MICROREACT VIEWER/QUERY"
  };
}

function verify() {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState()); //#region Check that all files are loaded without errors
    //#endregion
    //#region Check that Dataset has an ID column

    if (state.datasets) {
      var masterDataset = (0, _mainDatasetConfig["default"])(state);

      if (!masterDataset || !masterDataset.idFieldName) {
        var paneId = masterDataset ? Object.entries(state.tables).find(function (_ref5) {
          var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
              tableId = _ref6[0],
              tableState = _ref6[1];

          return tableState.file === masterDataset.file;
        })[0] : Object.keys(state.tables)[0];
        return dispatch(config({
          editor: {
            mode: "validation",
            paneId: paneId
          }
        }));
      }

      var _loop4 = function _loop4() {
        var dataset = _Object$values[_i];

        if (!dataset.idFieldName && (!dataset.masterFieldName || !dataset.linkFieldName)) {
          return {
            v: dispatch(config({
              editor: {
                mode: "validation",
                paneId: Object.entries(state.tables).find(function (_ref7) {
                  var _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
                      tableId = _ref8[0],
                      tableState = _ref8[1];

                  return tableState.file === dataset.file;
                })[0]
              }
            }))
          };
        }
      };

      for (var _i = 0, _Object$values = Object.values(state.datasets); _i < _Object$values.length; _i++) {
        var _ret = _loop4();

        if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
      }
    } //#endregion
    //#region Check that all tree files are linked


    for (var _i2 = 0, _Object$keys = Object.keys(state.trees); _i2 < _Object$keys.length; _i2++) {
      var treeId = _Object$keys[_i2];

      if (!(0, _isValidTree["default"])(state, treeId)) {
        return dispatch(config({
          editor: {
            mode: "validation",
            paneId: treeId
          }
        }));
      }
    } //#endregion
    //#region Check that all network files are linked


    for (var _i3 = 0, _Object$keys2 = Object.keys(state.networks); _i3 < _Object$keys2.length; _i3++) {
      var networkId = _Object$keys2[_i3];

      if (!(0, _isValidNetwork["default"])(state, networkId)) {
        return dispatch(config({
          editor: {
            mode: "validation",
            paneId: networkId
          }
        }));
      }
    } //#endregion


    dispatch(config({
      editor: null
    }));
  };
}

function unload() {
  return {
    savable: false,
    type: "MICROREACT VIEWER/UNLOAD"
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _clsx = _interopRequireDefault(__webpack_require__(119));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _Popper = _interopRequireDefault(__webpack_require__(344));

var _TextField = _interopRequireDefault(__webpack_require__(62));

var _Autocomplete = _interopRequireDefault(__webpack_require__(345));

var _Checkbox = _interopRequireDefault(__webpack_require__(145));

var _CheckBoxOutlineBlank = _interopRequireDefault(__webpack_require__(346));

var _CheckBox = _interopRequireDefault(__webpack_require__(347));

var _constants = __webpack_require__(12);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var icon = /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlank["default"], {
  fontSize: "small"
});

var checkedIcon = /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
  fontSize: "small"
});
/*
// getOptionLabel={(option) => typeof option === "string" ? option : option.label || option.name}
//
// getOptionLabel={(option) => ((typeof option === "string") ? option : (option.label || option.name))}
//
// if the type of option is string, then return it, otherwsie return the option's label or name
//
// if (the type of option is string) then
//   return it,
//  otherwsie
//    return the option's label or name
//
// if (typeof option === "string") {
//   return option;
// }
// else {
//   return option.label || option.name;
// }
*/


function getOptionLabel(option) {
  if (typeof option === "string") {
    return option;
  } else {
    return option.label || option.name;
  }
}

function renderMultiOption(option, _ref) {
  var selected = _ref.selected;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    icon: icon,
    checkedIcon: checkedIcon,
    style: {
      marginRight: 8
    },
    checked: selected
  }), getOptionLabel(option));
}

var UiCombobox = /*#__PURE__*/_react["default"].memo(function (props) {
  var _props$groupBy, _props$optionRenderer;

  var defaultOptionRenderer = props.multiple ? renderMultiOption : undefined;
  var defaultOptionGroupBy = props.grouped ? function (option) {
    return option.group;
  } : undefined;
  return /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    debug: props.debug,
    autoHighlight: true,
    className: (0, _clsx["default"])("mr-ui-combobox", "MuiFormControl-root", props.className),
    disableClearable: !props.clearable,
    disableCloseOnSelect: !!props.multiple,
    getOptionLabel: getOptionLabel,
    groupBy: (_props$groupBy = props.groupBy) !== null && _props$groupBy !== void 0 ? _props$groupBy : defaultOptionGroupBy // renderGroup={props.groupRenderer ?? undefined}
    ,
    renderOption: (_props$optionRenderer = props.optionRenderer) !== null && _props$optionRenderer !== void 0 ? _props$optionRenderer : defaultOptionRenderer // limitTags={props.limitTags}
    ,
    multiple: props.multiple,
    onChange: function onChange(event, item) {
      return props.onChange(item, event);
    },
    options: props.options,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: params.InputProps.ref
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({}, params, {
        autoFocus: props.autoFocus,
        error: props.error,
        fullWidth: true,
        helperText: props.helperText,
        label: props.label,
        placeholder: props.placeholder,
        required: props.required,
        variant: "outlined",
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          autoComplete: "disabled" // disable autocomplete and autofill

        })
      })));
    },
    size: "small",
    style: _constants.fullWithStyle,
    value: props.value || (props.multiple ? _constants.emptyArray : null),
    PaperComponent: function PaperComponent(args) {
      return /*#__PURE__*/_react["default"].createElement(_Paper["default"], (0, _extends2["default"])({}, args, {
        className: (0, _clsx["default"])(args.className, props.className)
      }));
    } // PopperComponent={
    //   props.appendContent ?
    //     (params) => {
    //       const { children } = params;
    //       return (
    //         <Popper {...params}>
    //           { props.perpendContent }
    //           { children }
    //           { props.appendContent }
    //         </Popper>
    //       );
    //     }
    //     :
    //     undefined
    // }

  });
});

UiCombobox.displayName = "UiCombobox";
UiCombobox.defaultProps = {
  clearable: false,
  limitTags: 2
};
UiCombobox.propTypes = {
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  clearable: _propTypes["default"].bool,
  helperText: _propTypes["default"].string,
  label: _propTypes["default"].string,
  limitTags: _propTypes["default"].number,
  multiple: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  options: _propTypes["default"].array,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].any
};
var _default = UiCombobox;
exports["default"] = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function mapStateSelector(state, mapId) {
  return state.maps[mapId];
}

var _default = mapStateSelector;
exports["default"] = _default;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _MenuItem = _interopRequireDefault(__webpack_require__(81));

var _MenuList = _interopRequireDefault(__webpack_require__(316));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Button = _interopRequireDefault(__webpack_require__(29));

__webpack_require__(317);

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UiDropdownMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  var _props$button;

  return /*#__PURE__*/_react["default"].createElement(_UiPopoverMenu["default"], {
    button: (_props$button = props.button) !== null && _props$button !== void 0 ? _props$button : _Button["default"],
    buttonProps: _objectSpread({
      children: props.icon,
      size: "small",
      variant: "contained",
      title: props.title,
      className: props.className,
      style: props.style
    }, props.buttonProps),
    className: "mr-ui-dropdown-menu",
    direction: "right",
    disableCloseButton: true,
    hideOnClick: props.hideOnClick
  }, /*#__PURE__*/_react["default"].createElement(_MenuList["default"], {
    className: "mr-ui-dropdown-menu"
  }, props.children));
});

UiDropdownMenu.displayName = "UiDropdownMenu";
UiDropdownMenu.propTypes = {
  button: _propTypes["default"].elementType,
  icon: _propTypes["default"].element,
  children: _propTypes["default"].node,
  title: _propTypes["default"].string,
  className: _propTypes["default"].string,
  hideOnClick: _propTypes["default"].bool
};
UiDropdownMenu.defaultProps = {
  hideOnClick: true
};
UiDropdownMenu.Item = _MenuItem["default"];
var _default = UiDropdownMenu;
exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportHtmlElementAsDataUrl = exportHtmlElementAsDataUrl;
exports.getContainerElement = getContainerElement;
exports.canvasPixelRatio = canvasPixelRatio;

var _html2canvas = _interopRequireDefault(__webpack_require__(269));

function exportHtmlElementAsDataUrl(domElement) {
  var resize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html2canvasConfig = {
    useCORS: true
  };

  if (resize) {
    var _document$querySelect;

    html2canvasConfig.width = window.innerWidth - (((_document$querySelect = document.querySelector(".mr-views-pane")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getBoundingClientRect().width) || 0);
  }

  return Promise.resolve().then(function () {
    return (0, _html2canvas["default"])(domElement, html2canvasConfig);
  }).then(function (canvas) {
    if (resize) {
      var thumbnailCanvas = document.createElement("canvas");
      var width = 240;
      var height = 240;

      if (canvas.width > canvas.height) {
        height = canvas.height * (width / canvas.width);
      }

      if (canvas.height > canvas.width) {
        width = canvas.width * (height / canvas.height);
      }

      thumbnailCanvas.setAttribute("width", width);
      thumbnailCanvas.setAttribute("height", height);
      var ctx = thumbnailCanvas.getContext("2d");
      ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, width, height);
      return thumbnailCanvas.toDataURL();
    } else {
      return canvas.toDataURL();
    }
  });
}

function getContainerElement() {
  return document.querySelector("#microreact-viewer");
}

function canvasPixelRatio(ctx) {
  var backingStorePixelRatio = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStorePixelRatio;
} // export function exportCanvasesAsDataUrl(size, canvases) {
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");
//   const resolution = canvasPixelRatio(ctx);
//   canvas.setAttribute("width", `${size.width * resolution}px`);
//   canvas.setAttribute("height", `${size.height * resolution}px`);
//   for (const layer of canvases) {
//     ctx.globalAlpha = 1.0;
//     ctx.drawImage(layer, 0, 0);
//   }
//   return canvas.toDataURL();
// }

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(39));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Select = _interopRequireDefault(__webpack_require__(362));

var _MenuItem = _interopRequireDefault(__webpack_require__(81));

var _InputLabel = _interopRequireDefault(__webpack_require__(150));

var _FormControl = _interopRequireDefault(__webpack_require__(151));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _Typography = _interopRequireDefault(__webpack_require__(78));

var _excluded = ["size", "variant", "style", "options"];

function formatOptions(props) {
  if (props.children) {
    return props.children;
  } else if (props.options) {
    return props.options.map(function (item) {
      var _item$label;

      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: item.value,
        value: item.value
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        alignItems: "center"
      }, item.icon, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        flexDirection: "column"
      }, (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value, item.secondary && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        color: "textSecondary",
        component: "small",
        variant: "caption"
      }, item.secondary))));
    });
  }

  return undefined;
}

function UiSelect(props) {
  var size = props.size,
      variant = props.variant,
      style = props.style,
      options = props.options,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    size: size,
    variant: variant,
    style: style,
    className: props.disabled ? "mr-disabled" : undefined
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, props.label), /*#__PURE__*/_react["default"].createElement(_Select["default"], (0, _extends2["default"])({}, rest, {
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    }
  }), formatOptions(props)));
}

UiSelect.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  size: _propTypes["default"].string,
  style: _propTypes["default"].object,
  value: _propTypes["default"].any.isRequired,
  variant: _propTypes["default"].string
};
UiSelect.defaultProps = {
  variant: "outlined",
  size: "small"
};
UiSelect.Item = _MenuItem["default"];
var _default = UiSelect;
exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLoadedContent = clearLoadedContent;
exports.fileSize = fileSize;
exports.nameWithoutExtention = nameWithoutExtention;
exports.normaliseFilename = normaliseFilename;
exports.loadFile = loadFile;
exports.loadFiles = loadFiles;
exports.serialiseBlobs = serialiseBlobs;
exports.FileKinds = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _filesize3 = _interopRequireDefault(__webpack_require__(238));

var _hash = __webpack_require__(46);

var _data = __webpack_require__(239);

var _json = __webpack_require__(241);

var _text = __webpack_require__(243);

var _xlsx = __webpack_require__(246);

var _constants = __webpack_require__(12);

var _promises = __webpack_require__(247);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FileTypes = ["data", "tree", "network", "geo", "markdown", "unknown"];
var FileKinds = [{
  extensions: ["microreact"],
  nameValidator: /\.(microreact)$/i,
  format: "application/json",
  type: "microreact",
  name: "Microreact Project"
}, {
  extensions: ["csv", "tsv"],
  nameValidator: /\.(csv|tsv)$/i,
  format: "text/csv",
  type: "data",
  name: "Data (CSV or TSV)",
  linkable: true
}, {
  extensions: ["xlsx", "xlsm", "xlam", "xlsb", "xls", "xla", "ods", "dbf"],
  nameValidator: /\.(xlsx|xlsm|xlam|xlsb|xls|xla|ods|dbf)$/i,
  format: "application/x-speadsheet",
  type: "data",
  name: "Data (Excel or ODS Speadsheet)",
  linkable: true
}, {
  extensions: ["nwk", "newick", "tree", "tre", "nexus", "nhx"],
  nameValidator: /\.(nwk|newick|tree|tre|nexus|nhx)$/i,
  format: "text/x-nh",
  type: "tree",
  name: "Tree (Newick)",
  linkable: true
}, {
  extensions: ["dot", "graph", "gv"],
  nameValidator: /\.(dot|graph|gv)$/i,
  format: "text/vnd.graphviz",
  type: "network",
  name: "Network (Graphviz DOT)",
  linkable: true
}, {
  extensions: ["geojson", "geo.json"],
  nameValidator: /\.(geojson|geo\.json)$/i,
  format: "application/geo+json",
  type: "geo",
  name: "Geographical features (GeoJSON)",
  linkable: true
}, {
  extensions: ["markdown"],
  nameValidator: /\.md$/i,
  format: "text/markdown",
  type: "markdown",
  name: "Markdown formatted text",
  linkable: true
}];
exports.FileKinds = FileKinds;

function base64ToBlob(base64) {
  return fetch(base64).then(function (res) {
    return res.blob();
  });
}

function blobToBase64(blob) {
  return new Promise(function (resolve, _) {
    var reader = new FileReader();

    reader.onloadend = function () {
      return resolve(reader.result);
    };

    reader.readAsDataURL(blob);
  });
}

function clearLoadedContent(docFiles) {
  var files = {};

  for (var _i = 0, _Object$keys = Object.keys(docFiles); _i < _Object$keys.length; _i++) {
    var fileId = _Object$keys[_i];
    files[fileId] = _objectSpread(_objectSpread({}, docFiles[fileId]), {}, {
      _content: undefined
    });
  }

  return files;
}

function fileSize(input) {
  var _filesize = (0, _filesize3["default"])(input, {
    output: "array"
  }),
      _filesize2 = (0, _slicedToArray2["default"])(_filesize, 2),
      size = _filesize2[0],
      unit = _filesize2[1];

  return "".concat(size.toFixed(2), " ").concat(unit);
}

function nameWithoutExtention(name) {
  return (name !== null && name !== void 0 ? name : _constants.emptyString).replace(/\.[^/.]+$/, "");
}

function normaliseFilename(input) {
  var filename = (input || _constants.emptyString).split("/").pop().split("#")[0].split("?")[0] || _constants.emptyString;

  return filename.replace(/_/g, "-");
}

function guessFileFormat(fileName) {
  var _iterator = _createForOfIteratorHelper(FileKinds),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          nameValidator = _step$value.nameValidator,
          format = _step$value.format;

      if (nameValidator.test(fileName)) {
        return format;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return undefined;
}

function loadFile(_x, _x2) {
  return _loadFile.apply(this, arguments);
}

function _loadFile() {
  _loadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(input, onProgress) {
    var _input$id, _input$format;

    var loadedFile, loader;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loadedFile = {
              id: (_input$id = input.id) !== null && _input$id !== void 0 ? _input$id : (0, _hash.generateHashId)(),
              name: normaliseFilename(input.name || input.url),
              size: input.size,
              settings: input.settings
            }; // const fileKind = FileKinds.find((x) => x.format === loadedFile.format);
            // The format of local files can be guessed from file extension

            loadedFile.format = (_input$format = input.format) !== null && _input$format !== void 0 ? _input$format : guessFileFormat(input.name);

            if (loadedFile.format === "application/json") {
              loadedFile.type = "microreact";
              loader = _json.loadJsonFile;
            } else if (loadedFile.format === "text/csv") {
              loadedFile.type = "data";
              loader = _data.loadCsvFile;
            } else if (loadedFile.format === "application/x-speadsheet") {
              loadedFile.type = "data";
              loader = _xlsx.loadSpeadsheetFile;
            } else if (loadedFile.format === "text/x-nh") {
              loadedFile.type = "tree";
              loader = _text.loadTextFile;
            } else if (loadedFile.format === "text/vnd.graphviz") {
              loadedFile.type = "network";
              loader = _text.loadTextFile;
            } else if (loadedFile.format === "application/geo+json") {
              loadedFile.type = "geo";
              loader = _json.loadGeoJsonFile;
            } else if (loadedFile.format === "text/markdown") {
              loadedFile.type = "markdown";
              loader = _text.loadTextFile;
            } else {
              loadedFile.type = "unknown";
            }

            _context.prev = 3;

            if (loader) {
              _context.next = 6;
              break;
            }

            throw new Error("Unsupported file type");

          case 6:
            if (input._content) {
              _context.next = 22;
              break;
            }

            if (!input.url) {
              _context.next = 14;
              break;
            }

            loadedFile.url = input.url;
            _context.next = 11;
            return loader(loadedFile.url, loadedFile.settings, onProgress);

          case 11:
            loadedFile._content = _context.sent;
            _context.next = 20;
            break;

          case 14:
            if (!(input instanceof File || input.blob)) {
              _context.next = 20;
              break;
            }

            loadedFile.blob = input.blob || input;

            if (loadedFile.blob && typeof loadedFile.blob === "string") {
              if (/^data:.*\/.*;base64,/i.test(loadedFile.blob)) {
                loadedFile.blob = base64ToBlob(loadedFile.blob);
              } else {
                loadedFile.blob = new Blob([loadedFile.blob], {
                  type: input.format
                });
              }
            }

            _context.next = 19;
            return loader(loadedFile.blob);

          case 19:
            loadedFile._content = _context.sent;

          case 20:
            _context.next = 25;
            break;

          case 22:
            loadedFile.url = input.url;
            loadedFile.blob = input.blob;
            loadedFile._content = input._content;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](3);
            console.error("Cannot read file", input, _context.t0);
            loadedFile.error = _context.t0.message;

          case 31:
            return _context.abrupt("return", loadedFile);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 27]]);
  }));
  return _loadFile.apply(this, arguments);
}

function processFiles(_x3) {
  return _processFiles.apply(this, arguments);
}

function _processFiles() {
  _processFiles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(files) {
    var processedFiles, _iterator2, _step2, file, processedFile;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            processedFiles = [];
            _iterator2 = _createForOfIteratorHelper(files);
            _context2.prev = 2;

            _iterator2.s();

          case 4:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 12;
              break;
            }

            file = _step2.value;
            _context2.next = 8;
            return loadFile(file);

          case 8:
            processedFile = _context2.sent;
            processedFiles.push(processedFile);

          case 10:
            _context2.next = 4;
            break;

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](2);

            _iterator2.e(_context2.t0);

          case 17:
            _context2.prev = 17;

            _iterator2.f();

            return _context2.finish(17);

          case 20:
            processedFiles.sort(function (a, b) {
              return FileTypes.indexOf(a.type) - FileTypes.indexOf(b.type);
            });
            return _context2.abrupt("return", processedFiles);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 14, 17, 20]]);
  }));
  return _processFiles.apply(this, arguments);
}

function loadFiles(_x4) {
  return _loadFiles.apply(this, arguments);
}

function _loadFiles() {
  _loadFiles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(files) {
    var delay,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            delay = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 1000;
            return _context3.abrupt("return", Promise.all([processFiles(files), (0, _promises.promiseTimeout)(delay)]).then(function (_ref) {
              var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
                  processedFiles = _ref2[0];

              return processedFiles;
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadFiles.apply(this, arguments);
}

function serialiseBlobs(_x5) {
  return _serialiseBlobs.apply(this, arguments);
}

function _serialiseBlobs() {
  _serialiseBlobs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(files) {
    var _i2, _Object$keys2, fileId;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _i2 = 0, _Object$keys2 = Object.keys(files);

          case 1:
            if (!(_i2 < _Object$keys2.length)) {
              _context4.next = 10;
              break;
            }

            fileId = _Object$keys2[_i2];

            if (!(files[fileId].blob instanceof Blob)) {
              _context4.next = 7;
              break;
            }

            _context4.next = 6;
            return blobToBase64(files[fileId].blob);

          case 6:
            files[fileId].blob = _context4.sent;

          case 7:
            _i2++;
            _context4.next = 1;
            break;

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _serialiseBlobs.apply(this, arguments);
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _flexlayoutReact = _interopRequireDefault(__webpack_require__(91));

var _panes = __webpack_require__(69);

var borders = [{
  type: "border",
  size: 240,
  location: "right",
  children: [{
    id: "--mr-legend-pane",
    type: "tab",
    name: "Legend",
    component: "Legend",
    enableClose: false,
    enableDrag: false
  }, {
    id: "--mr-selection-pane",
    type: "tab",
    name: "Selection",
    component: "Selection",
    enableClose: false,
    enableDrag: false
  }, {
    id: "--mr-history-pane",
    type: "tab",
    name: "History",
    component: "History",
    enableClose: false,
    enableDrag: false
  }, {
    id: "--mr-views-pane",
    type: "tab",
    name: "Views",
    component: "Views",
    enableClose: false,
    enableDrag: false
  }]
}];
var global = {
  borderBarSize: 20,
  borderEnableDrop: false,
  borderMinSize: 160,
  splitterSize: 2,
  tabEnableClose: false,
  tabEnableFloat: false,
  tabSetHeaderHeight: 1,
  tabSetMinHeight: 160,
  tabSetMinWidth: 160,
  tabSetTabStripHeight: 1
};
var defaultLayoutSelector = (0, _reselect.createSelector)(function (state) {
  return state.charts;
}, function (state) {
  return state.maps;
}, function (state) {
  return state.networks;
}, function (state) {
  return state.notes;
}, function (state) {
  return state.tables;
}, function (state) {
  return state.timelines;
}, function (state) {
  return state.trees;
}, function (state) {
  return state.slicers;
}, function (charts, maps, networks, notes, tables, timelines, trees, slicers) {
  var leftPanes = null;
  var topPanes = [];
  var slicerIds = Object.keys(slicers);

  if (slicerIds.length) {
    topPanes.push({
      type: "tabset",
      weight: 16,
      children: slicerIds.map(function (slicerId) {
        return {
          id: slicerId,
          type: "tab",
          name: slicers[slicerId].title,
          component: "Slicer"
        };
      })
    });
  }

  var noteIds = Object.keys(notes);

  if (noteIds.length) {
    leftPanes = {
      type: "tabset",
      weight: 16,
      children: noteIds.map(function (noteId) {
        return {
          id: noteId,
          type: "tab",
          name: notes[noteId].title,
          component: "Note"
        };
      })
    };
  }

  var mapIds = Object.keys(maps);

  if (mapIds.length) {
    topPanes.push({
      type: "tabset",
      children: mapIds.map(function (mapId) {
        return {
          id: mapId,
          type: "tab",
          name: maps[mapId].title,
          component: "Map" // config: { mapId },

        };
      })
    });
  }

  var networkIds = Object.keys(networks);

  if (networkIds.length) {
    topPanes.push({
      type: "tabset",
      children: networkIds.map(function (networkId) {
        return {
          id: networkId,
          type: "tab",
          name: networks[networkId].title,
          component: "Network" // config: { networkId },

        };
      })
    });
  }

  var chartIds = Object.keys(charts);

  if (chartIds.length) {
    topPanes.push({
      type: "tabset",
      children: chartIds.map(function (chartId) {
        return {
          id: chartId,
          type: "tab",
          name: charts[chartId].title,
          component: "Chart" // config: { chartId },

        };
      })
    });
  }

  var treeIds = Object.keys(trees);

  if (treeIds.length) {
    topPanes.push({
      type: "tabset",
      children: treeIds.map(function (treeId) {
        return {
          id: treeId,
          type: "tab",
          name: trees[treeId].title,
          component: "Tree" // config: { treeId },

        };
      })
    });
  }

  var bottomPanes = [];
  var timelineIds = Object.keys(timelines);

  if (timelineIds.length) {
    Array.prototype.push.apply(bottomPanes, timelineIds.map(function (timelineId) {
      return {
        id: timelineId,
        type: "tab",
        name: timelines[timelineId].title,
        component: "Timeline" // config: { timelineId },

      };
    }));
  }

  var tableIds = Object.keys(tables);

  if (tableIds.length) {
    Array.prototype.push.apply(bottomPanes, tableIds.map(function (tableId) {
      return {
        id: tableId,
        type: "tab",
        name: tables[tableId].title,
        component: "Table" // config: { tableId },

      };
    }));
  }

  var panes = {
    type: "row",
    children: []
  };

  if (leftPanes) {
    panes.children.push(leftPanes);
  }

  panes.children.push({
    type: "row",
    children: [{
      type: "row",
      weight: 64,
      children: topPanes
    }, {
      type: "tabset",
      weight: 48,
      children: bottomPanes
    }]
  });
  return {
    layout: panes
  };
});
var layoutModelSelector = (0, _reselect.createSelector)(function (state) {
  return state.panes.model || defaultLayoutSelector(state);
}, function (json) {
  if (!json.borders) {
    json.borders = borders;
  }

  json.global = global;

  var model = _flexlayoutReact["default"].Model.fromJson(json);

  (0, _panes.relayoutModel)(model);
  return model;
});
var _default = layoutModelSelector;
exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  colour: "transparent",
  fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  highlight: {
    colour: "#3C7383",
    width: 4
  },
  maps: {
    style: "light"
  },
  shape: "circle",
  stroke: {
    colour: "#222",
    width: 1
  },
  theme: {
    background: {
      main: "#ffffff",
      highlight: "#f8f9fa",
      hover: "#e8eaed",
      disabled: "rgba(0, 0, 0, 0.24)"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    primary: {
      light: "#6ca2b3",
      main: "#3c7383",
      dark: "#024756",
      contrast: "#fff" // light: "#9768c0",
      // main: "#673c8f",
      // dark: "#391161",
      // contrast: "#fff",

    },
    secondary: {
      light: "#e998d8",
      main: "#b668a6",
      dark: "#853a77",
      contrast: "#000000"
    }
  },
  validFileExtensions: [{
    kind: "data",
    extension: "csv"
  }, {
    kind: "data",
    extension: "xlsx"
  }, {
    kind: "data",
    extension: "xls"
  }, {
    kind: "data",
    extension: "ods"
  }, {
    kind: "data",
    extension: "tsv"
  }, {
    kind: "tree",
    extension: "nwk"
  }, {
    kind: "tree",
    extension: "newick"
  }, {
    kind: "tree",
    extension: "tre"
  }, {
    kind: "tree",
    extension: "nex"
  }, {
    kind: "tree",
    extension: "nexus"
  }, {
    kind: "tree",
    extension: "nhx"
  }, {
    kind: "network",
    extension: "dot"
  }, {
    kind: "geo",
    extension: "geojson"
  }, {
    kind: "microrect",
    extension: "microrect"
  }],
  DELAY: 64,
  SHAPE: "circle",
  PATTERN: "solid",
  COLOUR: "#555555",
  COLOUR_DARK: "#383838",
  LABEL_COLOUR: "#2A2A2A",
  TREE_TYPE: "radial",
  LAYOUT: {
    MINIMUM_CONTAINER_WIDTH: 150,
    MINIMUM_CONTAINER_HEIGHT: 50
  },
  HIGHLIGHT_COLOUR: "#3C7383",
  HIGHLIGHT_WIDTH: 4,
  MAP: {
    CENTER: {
      LATITUDE: 47.34452036,
      LONGITUDE: 5.85082183
    },
    ZOOM: 4
  },
  MIN_WIDTH: 240,
  MIN_HEIGHT: 160,
  NODE_RADIUS: 7,
  COMPONENTS: {
    LEGEND: "Legend",
    MAP: "Map",
    NETWORK: "Network",
    SEARCH: "Search",
    TABLE: "Table",
    TIMELINE: "Timeline",
    TREE: "Tree"
  },
  THEME: {
    COLOURS: {
      GREEN: "#3C7383",
      LIGHT_GREEN: "#9BB7BF"
    },
    ICONS: {
      MAP: "language",
      TREE: "nature",
      NETWORK: "device_hub",
      TIMELINE: "access_time",
      LEGEND: "map",
      SHARE: "share",
      TABLE: "grid_on"
    }
  }
};
exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(95));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Switch = _interopRequireDefault(__webpack_require__(152));

__webpack_require__(363);

var UiToggleSwitch = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    className: (0, _classnames["default"])("mr-ui-switch", "MuiFormControl-root", props.className),
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: props.value,
      color: "primary",
      onChange: function onChange(event) {
        return props.onChange(event.target.checked);
      }
    }),
    label: props.label,
    labelPlacement: props.labelPlacement
  });
});

UiToggleSwitch.displayName = "UiToggleSwitch";
UiToggleSwitch.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].string.isRequired,
  labelPlacement: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].bool.isRequired
};
UiToggleSwitch.defaultProps = {
  labelPlacement: "start"
};
var _default = UiToggleSwitch;
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var dataColumnByFieldSelector = function dataColumnByFieldSelector(state, field) {
  return (0, _dataColumnsByFieldMap["default"])(state).get(field);
};

var _default = dataColumnByFieldSelector;
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersect = intersect;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function intersect(sets) {
  if (sets.length === 0) {
    return undefined;
  }

  if (sets.length === 1) {
    return sets[0];
  }

  if (sets.length === 2) {
    var _sets = (0, _slicedToArray2["default"])(sets, 2),
        setA = _sets[0],
        setB = _sets[1];

    if (sets[1].size < sets[0].size) {
      setA = sets[1];
      setB = sets[0];
    }

    var intersectionSet = new Set();

    var _iterator = _createForOfIteratorHelper(setA),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (setB.has(value)) {
          intersectionSet.add(value);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return intersectionSet;
  }

  var i = sets.reduce(function (m, s, index) {
    return s.size < sets[m].size ? index : m;
  }, 0);

  var _sets$splice = sets.splice(i, 1),
      _sets$splice2 = (0, _slicedToArray2["default"])(_sets$splice, 1),
      smallest = _sets$splice2[0];

  var res = new Set();

  var _iterator2 = _createForOfIteratorHelper(smallest),
      _step2;

  try {
    var _loop = function _loop() {
      var val = _step2.value;

      if (sets.every(function (s) {
        return s.has(val);
      })) {
        res.add(val);
      }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return res;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _CloseRounded = _interopRequireDefault(__webpack_require__(47));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _Popover = _interopRequireDefault(__webpack_require__(94));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(143);

var _html = __webpack_require__(35);

var _constants = __webpack_require__(12);

var _browser = __webpack_require__(21);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiPopoverMenu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiPopoverMenu, _React$PureComponent);

  var _super = _createSuper(UiPopoverMenu);

  function UiPopoverMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiPopoverMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "anchorEl", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function () {
      if (_this.props.onOpen) {
        _this.props.onOpen((0, _assertThisInitialized2["default"])(_this));
      }

      _this.setState({
        isOpen: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      if (_this.props.onClose) {
        _this.props.onClose((0, _assertThisInitialized2["default"])(_this));
      }

      _this.setState({
        isOpen: false
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(UiPopoverMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(props.button, _objectSpread(_objectSpread({}, props.buttonProps), {}, {
        onClick: this.open,
        ref: this.anchorEl,
        className: (0, _classnames["default"])(props.buttonProps.className, {
          "is-open": this.state.isOpen
        })
      })), /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
        anchorEl: this.anchorEl.current,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: props.direction
        },
        container: _html.getContainerElement,
        onClose: this.close,
        open: this.state.isOpen,
        PaperProps: {
          className: (0, _classnames["default"])(props.className, "mr-ui-popover-menu")
        },
        transformOrigin: {
          vertical: "top",
          horizontal: props.direction
        }
      }, !props.disableHeader && props.title && /*#__PURE__*/_react["default"].createElement("header", {
        className: "mr-header"
      }, props.title), !props.disableCloseButton && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: "mr-floating-action-buttons",
        onClick: this.close,
        size: "small",
        title: "Close menu"
      }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-ui-popover-click-trap",
        onClick: props.hideOnClick ? function () {
          return (0, _browser.nextTick)(_this2.close);
        } : undefined
      }, this.state.isOpen ? props.children : null, this.state.isOpen && props.content ? /*#__PURE__*/_react["default"].createElement(props.content) : null)));
    }
  }]);
  return UiPopoverMenu;
}(_react["default"].PureComponent);

UiPopoverMenu.propTypes = {
  button: _propTypes["default"].elementType,
  content: _propTypes["default"].elementType,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  direction: _propTypes["default"].oneOf(["left", "right"]).isRequired,
  disableCloseButton: _propTypes["default"].bool,
  disableHeader: _propTypes["default"].bool,
  hideOnClick: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  onOpen: _propTypes["default"].func,
  tagName: _propTypes["default"].elementType,
  title: _propTypes["default"].string
};
UiPopoverMenu.defaultProps = {
  button: "button",
  buttonProps: _constants.emptyObject,
  direction: "right"
};
var _default = UiPopoverMenu;
exports["default"] = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHashId = generateHashId;
exports.generateUniqueName = generateUniqueName;

// import shortUUID from "short-uuid";

/**
 * Generates a hash string of specified length
 * @param {number} count
 * @returns {string} hash string
 */
function generateHashId() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  return Math.random().toString(36).substr(2, count);
} // export function generateUUID() {
//   return shortUUID.generate();
// }


function generateUniqueName(allNames, name) {
  var uniqueName = name;
  var postfix = 1;

  while (allNames.has(uniqueName)) {
    uniqueName = "".concat(name, "-").concat(postfix);
    postfix += 1;
  }

  return uniqueName;
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloseRounded");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFetcher = setFetcher;
exports.getFetcher = getFetcher;

/* eslint-disable no-undef-init */
var fetcherFunction = undefined;

function setFetcher(fetcher) {
  fetcherFunction = fetcher;
}

function getFetcher() {
  return fetcherFunction || undefined;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ClearRounded = _interopRequireDefault(__webpack_require__(288));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _InputAdornment = _interopRequireDefault(__webpack_require__(93));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _TextField = _interopRequireDefault(__webpack_require__(62));

__webpack_require__(135);

var UiTextfield = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    autoFocus: props.autoFocus,
    className: props.className,
    disabled: props.disabled,
    InputProps: props.clearable ? {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return props.onChange(props.nullValue);
        },
        edge: "end"
      }, /*#__PURE__*/_react["default"].createElement(_ClearRounded["default"], null)))
    } : undefined,
    helperText: props.helperText,
    label: props.label,
    onChange: function onChange(event) {
      return props.onChange(event.target.value, event);
    },
    size: "small",
    style: props.style,
    type: props.type,
    value: props.value,
    variant: props.variant
  });
});

UiTextfield.displayName = "UiTextfield";
UiTextfield.propTypes = {
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  clearable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  helperText: _propTypes["default"].string,
  label: _propTypes["default"].string,
  nullValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  style: _propTypes["default"].object,
  type: _propTypes["default"].string,
  value: _propTypes["default"].string,
  variant: _propTypes["default"].string
};
var _default = UiTextfield;
exports["default"] = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var configSelector = function configSelector(state) {
  return state.config;
};

var _default = configSelector;
exports["default"] = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSelectionBreakdownField = setSelectionBreakdownField;
exports.setFieldFilter = setFieldFilter;
exports.resetTreeFilters = exports.resetTimelineFilters = exports.resetTableFilters = exports.resetNetworkFilters = exports.resetMapFilters = exports.resetAllFilters = exports.setSearchValue = exports.setSearchOperator = exports.selectQueryRows = exports.selectRows = void 0;

var _constants = __webpack_require__(12);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _arrays = __webpack_require__(24);

var _state = __webpack_require__(3);

var selectRows = function selectRows() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.emptyArray;
  var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (dispatch, getState) {
    if (ids.length === 0) {
      var state = (0, _state.getPresentState)(getState());

      if (state.filters.selection.length === 0) {
        return;
      }
    }

    dispatch({
      delay: true,
      label: "Filters: Select rows",
      payload: {
        ids: ids,
        merge: merge
      },
      savable: false,
      type: "MICROREACT VIEWER/SELECT ROWS"
    });
  };
};

exports.selectRows = selectRows;

var selectQueryRows = function selectQueryRows(query) {
  var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (dispatch, getState) {
    if (query) {
      var state = (0, _state.getPresentState)(getState());
      var rows = (0, _rows["default"])(state);
      var dataColumnsByFieldMap = (0, _dataColumnsByFieldMap["default"])(state);
      var ids = (0, _arrays.filterByQuery)(rows, dataColumnsByFieldMap, query);
      dispatch(selectRows(ids, merge));
    } else {
      dispatch(selectRows(false, merge));
    }
  };
};

exports.selectQueryRows = selectQueryRows;

function setSelectionBreakdownField(field) {
  return {
    delay: true,
    group: "Filters/selection breakdown field",
    label: "Filters: Set selection breakdown column to ".concat(field),
    payload: field,
    savable: false,
    type: "MICROREACT VIEWER/SET SELECTION BREAKDOWN FIELD"
  };
}

function setFieldFilter(field, operator, value) {
  return {
    delay: true,
    label: "Filters: Change column ".concat(field, " filter"),
    group: "Filters/field ".concat(field),
    payload: {
      field: field,
      operator: operator,
      value: value
    },
    type: "MICROREACT VIEWER/SET FIELD FILTER"
  };
}

var setSearchOperator = function setSearchOperator(operator) {
  return {
    delay: true,
    group: "Filters/search",
    label: "Filters: Change search filter",
    payload: operator,
    type: "MICROREACT VIEWER/SET SEARCH OPERATOR"
  };
};

exports.setSearchOperator = setSearchOperator;

var setSearchValue = function setSearchValue(value) {
  return {
    delay: true,
    group: "Filters/search",
    label: "Filters: Change search filter",
    payload: value,
    type: "MICROREACT VIEWER/SET SEARCH VALUE"
  };
};

exports.setSearchValue = setSearchValue;

var resetAllFilters = function resetAllFilters() {
  return {
    delay: true,
    group: "Filters/reset",
    label: "Filters: Reset all filters",
    payload: null,
    type: "MICROREACT VIEWER/RESET ALL FILTERS"
  };
};

exports.resetAllFilters = resetAllFilters;

var resetMapFilters = function resetMapFilters() {
  return {
    delay: true,
    group: "Filters/reset",
    label: "Filters: Reset map filters",
    payload: null,
    type: "MICROREACT VIEWER/RESET MAP FILTERS"
  };
};

exports.resetMapFilters = resetMapFilters;

var resetNetworkFilters = function resetNetworkFilters() {
  return {
    delay: true,
    group: "Filters/reset",
    label: "Filters: Reset network filters",
    payload: null,
    type: "MICROREACT VIEWER/RESET NETWORK FILTERS"
  };
};

exports.resetNetworkFilters = resetNetworkFilters;

var resetTableFilters = function resetTableFilters() {
  return {
    delay: true,
    group: "Filters/reset",
    label: "Filters: Reset table filters",
    payload: null,
    type: "MICROREACT VIEWER/RESET TABLE FILTERS"
  };
};

exports.resetTableFilters = resetTableFilters;

var resetTimelineFilters = function resetTimelineFilters() {
  return {
    delay: true,
    group: "Filters/reset",
    label: "Filters: Reset timeline filters",
    payload: null,
    type: "MICROREACT VIEWER/RESET TIMELINE FILTERS"
  };
};

exports.resetTimelineFilters = resetTimelineFilters;

var resetTreeFilters = function resetTreeFilters() {
  return {
    delay: true,
    group: "Filters/reset",
    label: "Filters: Reset tree filters",
    payload: null,
    type: "MICROREACT VIEWER/RESET TREE FILTERS"
  };
};

exports.resetTreeFilters = resetTreeFilters;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _charts = __webpack_require__(133);

var chartStateSelector = function chartStateSelector(state, chartId) {
  return state.charts[chartId] || _charts.initialState;
};

var _default = chartStateSelector;
exports["default"] = _default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openUrl = openUrl;
exports.downloadDataUrl = void 0;

var _downloadjs = _interopRequireDefault(__webpack_require__(263));

// const windowURL = window.URL || window.webkitURL;
// function generateObjectUrl(type, data) {
//   if (data instanceof Blob) {
//     return windowURL.createObjectURL(data);
//   }
//   if (type === "svg") {
//     return windowURL.createObjectURL(
//       new Blob(
//         [ data ],
//         { type: "image/svg+xml" }
//       )
//     );
//   }
//   if (type === "txt" || type === "nwk") {
//     return windowURL.createObjectURL(
//       new Blob(
//         [ data ],
//         { type: "text/plain;charset=utf-8" }
//       )
//     );
//   }
//   if (type === "microreact") {
//     return windowURL.createObjectURL(
//       new Blob(
//         [ data ],
//         { type: "application/json" }
//       )
//     );
//   }
//   else {
//     return data;
//   }
// }
var downloadDataUrl = _downloadjs["default"]; // export function downloadDataUrl(data, filename, type) {
//   const anchor = document.createElement("a");
//   if (typeof anchor.download !== "undefined") {
//     anchor.download = `microreact-${filename}.${type}`;
//     const url = generateObjectUrl(type, data);
//     anchor.href = url;
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
//     windowURL.revokeObjectURL(url);
//   }
//   else if (type === "png") {
//     document.location.href = data.replace("data:image/png", "image/octet-stream");
//   }
//   else {
//     const url = generateObjectUrl(type, data);
//     document.location.href = url;
//     windowURL.revokeObjectURL(url);
//   }
// }

exports.downloadDataUrl = downloadDataUrl;

function openUrl(url) {
  var anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
} // export function addExportCallback(key, callback) {
//   exportFunctions[key] = callback;
// }
// export function removeExportCallback(key) {
//   exportFunctions[key] = undefined;
// }
// export function resetExportCallbacks() {
//   exportFunctions = {};
// }
// export function exportFile(key, filename, download = true) {
//   if (typeof (exportFunctions[key]) === "function") {
//     return Promise.resolve(filename)
//       .then(exportFunctions[key])
//       .then((dataUrl) => {
//         if (download) {
//           const [ , type ] = key.split("-");
//           downloadDataUrl(dataUrl, filename, type);
//         }
//         return dataUrl;
//       });
//   } else {
//     throw new Error(`Invalid export type: ${key}`);
//   }
// }

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AccessTimeTwoTone = _interopRequireDefault(__webpack_require__(308));

var _EqualizerRounded = _interopRequireDefault(__webpack_require__(309));

var _NoteTwoTone = _interopRequireDefault(__webpack_require__(310));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _PublicTwoTone = _interopRequireDefault(__webpack_require__(311));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ShareTwoTone = _interopRequireDefault(__webpack_require__(136));

var _TableChartTwoTone = _interopRequireDefault(__webpack_require__(312));

var _VisibilityTwoTone = _interopRequireDefault(__webpack_require__(313));

var _DescriptionTwoTone = _interopRequireDefault(__webpack_require__(314));

var _UndoRounded = _interopRequireDefault(__webpack_require__(203));

var _js = __webpack_require__(118);

var _RectangularTreeIcon = _interopRequireDefault(__webpack_require__(117));

var _MdiIcon = _interopRequireDefault(__webpack_require__(82));

var _FilterAltIcon = _interopRequireDefault(__webpack_require__(315));

var PaneIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  switch (props.component) {
    case "Chart":
      return /*#__PURE__*/_react["default"].createElement(_EqualizerRounded["default"], null);

    case "Slicer":
      return /*#__PURE__*/_react["default"].createElement(_FilterAltIcon["default"], null);

    case "Filters":
      return /*#__PURE__*/_react["default"].createElement(_MdiIcon["default"], null, _js.mdiFilter);

    case "History":
      return /*#__PURE__*/_react["default"].createElement(_UndoRounded["default"], null);

    case "Map":
      return /*#__PURE__*/_react["default"].createElement(_PublicTwoTone["default"], null);

    case "Network":
      return /*#__PURE__*/_react["default"].createElement(_MdiIcon["default"], null, _js.mdiGraphql);

    case "Note":
      return /*#__PURE__*/_react["default"].createElement(_NoteTwoTone["default"], null);

    case "Table":
      return /*#__PURE__*/_react["default"].createElement(_TableChartTwoTone["default"], null);

    case "Timeline":
      return /*#__PURE__*/_react["default"].createElement(_AccessTimeTwoTone["default"], null);

    case "Tree":
      return /*#__PURE__*/_react["default"].createElement(_RectangularTreeIcon["default"], null);

    case "Styles":
      return /*#__PURE__*/_react["default"].createElement(_VisibilityTwoTone["default"], null);

    case "Views":
      return /*#__PURE__*/_react["default"].createElement(_ShareTwoTone["default"], null);

    default:
      return /*#__PURE__*/_react["default"].createElement(_DescriptionTwoTone["default"], null);
  }
});

PaneIcon.displayName = "History";
PaneIcon.propTypes = {
  component: _propTypes["default"].string
};
var _default = PaneIcon;
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTimestamp = isTimestamp;
exports.isValidDateInstance = isValidDateInstance;
exports.fromTimestamp = fromTimestamp;
exports.timestampToDateString = timestampToDateString;
exports.timestampToISODate = timestampToISODate;
exports.ISODateToTimestamp = ISODateToTimestamp;
exports.unitFromRange = unitFromRange;
exports.rangeToDurationDistance = rangeToDurationDistance;
exports.rangeLength = rangeLength;
exports.boundsOf = boundsOf;
exports.groupTemporalData = groupTemporalData;
exports.toDateInstance = toDateInstance;
exports.timestampToDateInstance = timestampToDateInstance;
exports.isoDateToDateInstance = isoDateToDateInstance;
exports.toUnitString = toUnitString;
exports.groupFormatStrings = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _dateFns = __webpack_require__(225);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var NOW = new Date();
var groupFormatStrings = {
  year: "yyyy",
  quarter: "yyyy-QQQ",
  month: "yyyy-MM",
  week: "RRRR-'W'II",
  day: "yyyy-MM-dd"
};
exports.groupFormatStrings = groupFormatStrings;
var formats = {
  "YYYY-M-D": "yyyy-M-d",
  "DD/MM/YYYY": "dd/MM/yyyy",
  "YYYY/M/D": "yyyy/M/d",
  "M/D/YYYY": "M/d/yyyy",
  "MMMM DD, YYYY": "MMMM dd, yyyy",
  "MMM DD, YYYY": "MMM dd, yyyy",
  "MMMM Do, YYYY": "MMMM do, yyyy",
  "MMM Do, YYYY": "MMM do, yyyy"
};

function isTimestamp(value) {
  return Number.isFinite(value);
}

function isValidDateInstance(value) {
  return value instanceof Date;
}

function fromTimestamp(value) {
  return new Date(value);
}

function timestampToDateString(value) {
  return (value instanceof Date ? value : new Date(value)).toLocaleDateString();
}

function timestampToISODate(value) {
  return (value instanceof Date ? value : new Date(value)).toISOString().substring(0, 10);
}

function ISODateToTimestamp(value) {
  return (value instanceof Date ? value : new Date(value)).valueOf();
}

function unitFromRange(extent, numberOfBars) {
  var _extent = (0, _slicedToArray2["default"])(extent, 2),
      startTimestamp = _extent[0],
      endTimestamp = _extent[1];

  var rangeInDays = (0, _dateFns.differenceInDays)(endTimestamp, startTimestamp); // const numberOfBars = size / barSize;

  if (rangeInDays < numberOfBars) {
    return "day";
  }

  if (rangeInDays / 7 < numberOfBars) {
    return "week";
  }

  if (rangeInDays / 30 < numberOfBars) {
    return "month";
  }

  if (rangeInDays / 90 < numberOfBars) {
    return "quarter";
  }

  return "year";
}

function rangeToDurationDistance(_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      startTimestamp = _ref2[0],
      endTimestamp = _ref2[1];

  var label = (0, _dateFns.formatDistance)(startTimestamp, endTimestamp);
  return label;
}

function rangeLength(_ref3, unit) {
  var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
      startTimestamp = _ref4[0],
      endTimestamp = _ref4[1];

  if (unit === "year") {
    return (0, _dateFns.differenceInCalendarYears)(endTimestamp, startTimestamp);
  }

  if (unit === "quarter") {
    return (0, _dateFns.differenceInCalendarQuarters)(endTimestamp, startTimestamp);
  }

  if (unit === "month") {
    return (0, _dateFns.differenceInCalendarMonths)(endTimestamp, startTimestamp);
  }

  if (unit === "week") {
    return (0, _dateFns.differenceInCalendarISOWeeks)(endTimestamp, startTimestamp);
  }

  if (unit === "day") {
    return (0, _dateFns.differenceInCalendarDays)(endTimestamp, startTimestamp);
  }

  throw new Error("Invalid unit ".concat(unit));
}

function boundsOf(value, unit) {
  if (unit === "year") {
    return [(0, _dateFns.startOfYear)(value), (0, _dateFns.endOfYear)(value)];
  }

  if (unit === "quarter") {
    return [(0, _dateFns.startOfQuarter)(value), (0, _dateFns.endOfQuarter)(value)];
  }

  if (unit === "month") {
    return [(0, _dateFns.startOfMonth)(value), (0, _dateFns.endOfMonth)(value)];
  }

  if (unit === "week") {
    return [(0, _dateFns.startOfWeek)(value, {
      weekStartsOn: 1
    }), // ISO Week starts on Monday (1). See https://en.wikipedia.org/wiki/ISO_week_date
    (0, _dateFns.endOfWeek)(value, {
      weekStartsOn: 1
    })];
  }

  if (unit === "day") {
    return [(0, _dateFns.startOfDay)(value), (0, _dateFns.endOfDay)(value)];
  }

  throw new Error("Invalid unit ".concat(unit));
}

function groupTemporalData(temporalData, unit) {
  var groups = {};
  var groupByTimestamp = new Map();

  var _iterator = _createForOfIteratorHelper(temporalData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
          value = _step$value[0],
          row = _step$value[1];

      var timestampValue = value.valueOf();
      var key = groupByTimestamp.get(timestampValue);

      if (key === undefined) {
        key = toUnitString(value, unit);
        groupByTimestamp.set(timestampValue, key);
      }

      if (groups[key]) {
        groups[key].rows.push(row);
      } else {
        var _boundsOf = boundsOf(value, unit),
            _boundsOf2 = (0, _slicedToArray2["default"])(_boundsOf, 2),
            groupStartDate = _boundsOf2[0],
            groupEndDate = _boundsOf2[1];

        groups[key] = {
          groupLabel: key,
          groupStartDate: groupStartDate,
          groupEndDate: groupEndDate,
          rows: [row]
        };
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var groupedData = Object.values(groups);
  return groupedData;
}

function toDateInstance(value) {
  var formatString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var praseFormatString = formats[formatString];

  if (praseFormatString) {
    return (0, _dateFns.parse)(value, praseFormatString, NOW);
  } else {
    return (0, _dateFns.parseISO)(value);
  }
}

function timestampToDateInstance(value) {
  return (0, _dateFns.fromUnixTime)(value);
}

function isoDateToDateInstance(value) {
  return (0, _dateFns.parseISO)(value);
}

function toUnitString(dateInstance, unit) {
  return (0, _dateFns.format)(dateInstance, groupFormatStrings[unit]);
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _idDataField = _interopRequireDefault(__webpack_require__(128));

var coloursDataColumnSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state) {
  return (0, _dataColumns["default"])(state);
}, function (state) {
  return (0, _idDataField["default"])(state);
}, function (state) {
  return state.styles.coloursField;
}, function (fieldsMap, allFields, idField, colourByFieldName) {
  if (colourByFieldName) {
    var coloursDataColumn = fieldsMap.get(colourByFieldName);

    if (coloursDataColumn) {
      return coloursDataColumn;
    }
  }

  return allFields.find(function (x) {
    return !!x.colourPalette;
  }) || allFields.find(function (x) {
    return /__autocolou?r$/i.test(x.name);
  }) || allFields.find(function (x) {
    return x.name !== (idField === null || idField === void 0 ? void 0 : idField.name);
  }) || allFields[0];
});
var _default = coloursDataColumnSelector;
exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addView = addView;
exports.removePane = removePane;
exports.setLayoutModel = setLayoutModel;
exports.setSidePane = setSidePane;

var _layoutModel = _interopRequireDefault(__webpack_require__(40));

var _panes = __webpack_require__(69);

var _state = __webpack_require__(3);

var _charts = __webpack_require__(186);

var _maps = __webpack_require__(73);

var _networks = __webpack_require__(79);

var _notes = __webpack_require__(116);

var _tables = __webpack_require__(76);

var _timelines = __webpack_require__(77);

var _trees = __webpack_require__(74);

var _slicers = __webpack_require__(134);

/* eslint-disable no-use-before-define */

/* eslint-disable consistent-return */
function addView(componentName) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());

    switch (componentName) {
      case "Chart":
        {
          var paneId = (0, _state.newId)(state.charts, "chart");
          return dispatch((0, _charts.addChart)(paneId));
        }

      case "Map":
        {
          var _paneId = (0, _state.newId)(state.maps, "map");

          return dispatch((0, _maps.addMap)(_paneId));
        }

      case "Network":
        {
          var _paneId2 = (0, _state.newId)(state.networks, "network");

          return dispatch((0, _networks.addNetwork)(_paneId2));
        }

      case "Note":
        {
          var _paneId3 = (0, _state.newId)(state.notes, "note");

          return dispatch((0, _notes.addNote)(_paneId3));
        }

      case "Slicer":
        {
          var _paneId4 = (0, _state.newId)(state.slicers, "slicer");

          return dispatch((0, _slicers.addSlicer)(_paneId4));
        }

      case "Table":
        {
          var _paneId5 = (0, _state.newId)(state.tables, "table");

          return dispatch((0, _tables.addTable)(_paneId5));
        }

      case "Timeline":
        {
          var _paneId6 = (0, _state.newId)(state.timelines, "timeline");

          return dispatch((0, _timelines.addTimeline)(_paneId6));
        }

      case "Tree":
        {
          var _paneId7 = (0, _state.newId)(state.trees, "tree");

          return dispatch((0, _trees.addTree)(_paneId7));
        }
    }
  };
}

function removePane(paneId) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var layoutModel = (0, _layoutModel["default"])(state);
    var newModel = (0, _panes.removeTabFromModel)(layoutModel, paneId); // const updateLayoutModelAction = setLayoutModel(newModel);
    // updateLayoutModelAction.group = `${paneId}/remove`;

    var node = layoutModel.getNodeById(paneId);

    switch (node._attributes.component) {
      case "Chart":
        {
          dispatch((0, _charts.removeChart)(paneId));
          break;
        }

      case "Map":
        {
          dispatch((0, _maps.removeMap)(paneId));
          break;
        }

      case "Network":
        {
          dispatch((0, _networks.removeNetwork)(paneId));
          break;
        }

      case "Note":
        {
          dispatch((0, _notes.removeNote)(paneId));
          break;
        }

      case "Slicer":
        {
          dispatch((0, _slicers.removeSlicer)(paneId));
          break;
        }

      case "Table":
        {
          dispatch((0, _tables.removeTable)(paneId));
          break;
        }

      case "Timeline":
        {
          dispatch((0, _timelines.removeTimeline)(paneId));
          break;
        }

      case "Tree":
        {
          dispatch((0, _trees.removeTree)(paneId));
          break;
        }
    }

    dispatch(setLayoutModel(newModel));
  };
}

function setLayoutModel(model) {
  return {
    delay: true,
    group: "layout model",
    label: model.actionLabel ? "Layout: ".concat(model.actionLabel) : undefined,
    payload: model.toJson(),
    savable: false,
    type: "MICROREACT VIEWER/SET LAYOUT MODEL"
  };
}

function setSidePane() {
  var sidePane = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var layoutModel = (0, _layoutModel["default"])(state);
    var newModel = (0, _panes.selectBorderTab)(layoutModel, sidePane);
    dispatch(setLayoutModel(newModel));
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _filteredNonDataIds = _interopRequireDefault(__webpack_require__(182));

var _filteredDataIds = _interopRequireDefault(__webpack_require__(262));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filteredIdsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _filteredNonDataIds["default"])(state);
}, function (state) {
  return (0, _filteredDataIds["default"])(state);
}, function (nonDataIds, tableIds) {
  var ids;

  if (nonDataIds && (ids === undefined || nonDataIds.size < ids.size)) {
    ids = nonDataIds;
  }

  if (tableIds && (ids === undefined || tableIds.size < ids.size)) {
    ids = tableIds;
  }

  if (ids) {
    var intersection = new Set();

    var _iterator = _createForOfIteratorHelper(ids),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var id = _step.value;

        if ((nonDataIds === undefined || nonDataIds.has(id)) && (tableIds === undefined || tableIds.has(id))) {
          intersection.add(id);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return intersection;
  } // Return undefined to singnal that no active filters are applied


  return undefined;
});
var _default = filteredIdsSelector;
exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var treeStateSelector = function treeStateSelector(state, treeId) {
  return state.trees[treeId];
};

var _default = treeStateSelector;
exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.publish = publish;

var _postal = _interopRequireDefault(__webpack_require__(266));

var channel = _postal["default"].channel();

function subscribe(event, callback) {
  var subscription = channel.subscribe(event, callback);
  return function () {
    return subscription.unsubscribe();
  };
}

function publish(event, data) {
  return channel.publish(event, data);
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mainDatasetConfigSelector = function mainDatasetConfigSelector(state) {
  var datasetIds = Object.keys(state.datasets);

  if (datasetIds.length === 1) {
    state.datasets[datasetIds[0]].id = datasetIds[0];
    return state.datasets[datasetIds[0]];
  }

  for (var _i = 0, _datasetIds = datasetIds; _i < _datasetIds.length; _i++) {
    var datasetId = _datasetIds[_i];
    var dataset = state.datasets[datasetId];

    if ("idFieldName" in dataset) {
      dataset.id = datasetId;
      return dataset;
    }
  }

  return undefined;
};

var _default = mainDatasetConfigSelector;
exports["default"] = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAnnotationFields = detectAnnotationFields;
exports.createBasicDataset = createBasicDataset;
exports.createFullDataset = createFullDataset;
exports.mergeBasicDatasets = mergeBasicDatasets;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _arrayJoin = __webpack_require__(221);

var _dataAnalyzer = _interopRequireDefault(__webpack_require__(222));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function generateColourPalette(rows, valueField, colourField) {
  var valueToColour = new Map();

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      var value = row[valueField.name];
      var colour = row[colourField.name];

      if (value !== null && value !== undefined && value !== "" && colour !== null && colour !== undefined && colour !== "") {
        valueToColour.set(value, colour.toLowerCase());
      }
    } // valueToColour.set("", "transparent");

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Array.from(valueToColour.entries());
}

function generateCustomPalettes(dataset, annotationColumns) {
  var colourPalettes = [];
  var shapePalettes = [];

  var _iterator2 = _createForOfIteratorHelper(annotationColumns),
      _step2;

  try {
    var _loop = function _loop() {
      var styleField = _step2.value;
      var annotatedColumn = dataset.columns.find(function (x) {
        return x.name === styleField.annotatedFieldName;
      }) || dataset.columns.find(function (x) {
        return x.normalised === styleField.annotatedFieldName.toLowerCase();
      });

      if (annotatedColumn) {
        var paletteName = "palette-from-".concat(styleField.normalised);
        var paletteEntries = generateColourPalette(dataset.rows, annotatedColumn, styleField);
        var palette = {
          entries: paletteEntries,
          label: styleField.name,
          name: paletteName,
          type: "custom"
        };

        if (styleField.annotationType === "colour") {
          colourPalettes.push(palette);
          annotatedColumn.colourPalette = paletteName;
        } else if (styleField.annotationType === "shape") {
          shapePalettes.push(palette);
          annotatedColumn.shapePalette = paletteName;
        }
      }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return {
    colourPalettes: colourPalettes,
    shapePalettes: shapePalettes
  };
}

function detectAnnotationFields(datasetColumns) {
  var annotationFields = [];
  var dataFields = [];

  var _iterator3 = _createForOfIteratorHelper(datasetColumns),
      _step3;

  try {
    var _loop2 = function _loop2() {
      var field = _step3.value;
      var annotaionMatch = field.name.match(/(.+)__(color|colour|shape|pattern|url)$/i);

      if (annotaionMatch !== null) {
        field.annotatedFieldName = annotaionMatch[1];
        field.annotationType = annotaionMatch[2].toLowerCase();

        if (field.annotationType === "color") {
          field.annotationType = "colour";
        }

        if (field.annotationType === "url") {
          var annotatedColumn = datasetColumns.find(function (x) {
            return x.name === field.annotatedFieldName;
          });

          if (annotatedColumn) {
            annotatedColumn.urlField = field.name;
          }
        }

        annotationFields.push(field);
      } else if (field.name !== "--mr-index") {
        dataFields.push(field);
      }
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return {
    annotationFields: annotationFields,
    dataFields: dataFields
  };
}

function createBasicDataset(rows) {
  var headerRow = Object.keys(rows[0]);
  return (0, _dataAnalyzer["default"])(rows, headerRow);
}

function createFullDataset(baseDataset) {
  var _detectAnnotationFiel = detectAnnotationFields(baseDataset.columns),
      annotationFields = _detectAnnotationFiel.annotationFields,
      dataFields = _detectAnnotationFiel.dataFields;

  var customPalettes = generateCustomPalettes(baseDataset, annotationFields);
  return {
    columns: dataFields,
    // rawColumns: baseDataset.columns,
    rows: (0, _toConsumableArray2["default"])(baseDataset.rows),
    colourPalettes: customPalettes.colourPalettes,
    shapePalettes: customPalettes.shapePalettes
  };
}

function mergeBasicDatasets(masterDataset, linkedDataset, masterFieldName, linkFieldName) {
  var leftDataField = masterDataset.columns.find(function (x) {
    return x.name === masterFieldName;
  });
  var rightDataField = linkedDataset.columns.find(function (x) {
    return x.name === linkFieldName;
  });
  var mergedRows = (0, _arrayJoin.leftJoin)(masterDataset.rows, linkedDataset.rows, {
    key1: leftDataField.name,
    key2: rightDataField.name
  });
  var mergedFields = [].concat((0, _toConsumableArray2["default"])(masterDataset.columns), (0, _toConsumableArray2["default"])(linkedDataset.columns));
  return {
    columns: mergedFields,
    rows: mergedRows
  };
}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@loaders.gl/core");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fileDescriptorSelector = function fileDescriptorSelector(state, fileId) {
  return state.files[fileId];
};

var _default = fileDescriptorSelector;
exports["default"] = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function networkStateSelector(state, networkId) {
  return state.networks[networkId];
}

var _default = networkStateSelector;
exports["default"] = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relayoutModel = relayoutModel;
exports.selectBorderTab = selectBorderTab;
exports.removeTabFromModel = removeTabFromModel;
exports.createNewTab = createNewTab;
exports.addMissingPaneTabs = addMissingPaneTabs;

var _flexlayoutReact = _interopRequireDefault(__webpack_require__(91));

var _events = __webpack_require__(61);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var metrics = {
  borderBarSize: 20,
  headerBarSize: 20,
  tabBarSize: 20
};

function addTab(label, tab) {
  (0, _events.publish)("add-new-pane", [label, tab]);
}

function cloneModel(model) {
  return _flexlayoutReact["default"].Model.fromJson(model.toJson());
}

function findTabSetNodeId(model) {
  for (var _i = 0, _Object$values = Object.values(model._idMap); _i < _Object$values.length; _i++) {
    var node = _Object$values[_i];

    if (node._attributes.type === "tabset") {
      return node._attributes.id;
    }
  }

  return undefined;
}

function relayoutModel(model, rect) {
  model._layout(new _flexlayoutReact["default"].Rect(0, 0, window.innerWidth, window.innerHeight - 48), // new FlexLayout.Rect(rect.x, rect.y, rect.width, rect.height)
  metrics);
}

function selectBorderTab(model, tabComponentName) {
  var json = model.toJson();
  json.borders[0].selected = json.borders[0].children.findIndex(function (x) {
    return x.component === tabComponentName;
  });

  var newModel = _flexlayoutReact["default"].Model.fromJson(json);

  return newModel;
}

function removeTabFromModel(model, tabId) {
  var newModel = cloneModel(model);
  newModel.doAction(_flexlayoutReact["default"].Actions.deleteTab(tabId));
  return newModel;
}

function createNewTab(component) {
  addTab("Drag to add new ".concat(component), {
    "new": true,
    component: component
  });
} // export function reopenPaneTab(paneId, name, component) {
//   addTab(
//     `Drag to add ${name}`,
//     {
//       id: paneId,
//       type: "tab",
//       name,
//       component,
//     }
//   );
// }


function addMissingPaneTabs(model, orphanPanes) {
  var newModel = cloneModel(model);
  var tabsetNodeId = findTabSetNodeId(model);

  var _iterator = _createForOfIteratorHelper(orphanPanes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          paneId = _step$value.paneId,
          label = _step$value.label,
          component = _step$value.component;
      newModel.doAction(_flexlayoutReact["default"].Actions.addNode({
        id: paneId,
        type: "tab",
        name: label,
        component: component
      }, tabsetNodeId, _flexlayoutReact["default"].DockLocation.CENTER, -1));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newModel;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ui = __webpack_require__(27);

var _fileDescriptor = _interopRequireDefault(__webpack_require__(67));

var _state = __webpack_require__(3);

var _FileEditor = _interopRequireDefault(__webpack_require__(380));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var fileId = _ref.fileId;
  return {
    file: (0, _fileDescriptor["default"])(state, fileId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var fileId = _ref2.fileId,
      paneId = _ref2.paneId;
  return {
    onFileChange: function onFileChange(file) {
      return dispatch((0, _ui.addOrUpdateFile)(fileId, paneId, file));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_FileEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureWidth = measureWidth;
exports.longestCommonStartingSubstring = longestCommonStartingSubstring;
exports.entriesLabel = entriesLabel;
exports.toText = toText;

var _datetime = __webpack_require__(56);

var context;
var correctionUnit;

function createContext() {
  var canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  var font = "400 13px Roboto, Helvetica, Arial, sans-serif";
  context.font = font;
  correctionUnit = context.measureText(" ").width;
  return context;
}

function measureWidth(text) {
  var _context;

  var strong = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // const weight = strong ? 700 : 400;
  // context.font = `${weight} ${font}`;
  var textMetrics = ((_context = context) !== null && _context !== void 0 ? _context : createContext()).measureText(text);
  return Math.ceil(textMetrics.width + correctionUnit);
}

function longestCommonStartingSubstring(arr1) {
  var arr = arr1.concat().sort();
  var a1 = arr[0];
  var a2 = arr[arr.length - 1];
  var L = a1.length;
  var i = 0;

  while (i < L && a1.charAt(i) === a2.charAt(i)) {
    i += 1;
  }

  return a1.substring(0, i);
}

function entriesLabel(number) {
  return number === 1 ? "entry" : "entries";
}

function toText(dataType, value) {
  var convertBlanks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (value === null || value === undefined || value === "") {
    if (convertBlanks) {
      return "(blank)";
    } else {
      return "";
    }
  }

  if (dataType === "date" || dataType === "timestamp") {
    return (0, _datetime.timestampToDateString)(value);
  }

  if (dataType === "boolean") {
    return value === true ? "✅" : value === false ? "❌" : null;
  } else {
    return value;
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGeoData = addGeoData;
exports.addGeographicCoordinatesMap = addGeographicCoordinatesMap;
exports.addMap = addMap;
exports.removeMap = removeMap;
exports.selectRegion = selectRegion;
exports.setFilter = setFilter;
exports.setLasso = setLasso;
exports.setTrackViewport = setTrackViewport;
exports.setViewport = setViewport;
exports.update = update;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _rowsByRegion = _interopRequireDefault(__webpack_require__(180));

var _state = __webpack_require__(3);

var _filters = __webpack_require__(51);

function addGeoData(mapId, fileId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    delay: true,
    label: "Map: Add geographical features",
    mapId: mapId,
    payload: {
      file: fileId,
      linkType: options.linkType || "geographic-coordinates",
      linkFieldName: options.linkFieldName,
      linkPropertyName: options.linkPropertyName
    },
    type: "MICROREACT VIEWER/ADD GEO DATA"
  };
}

function addGeographicCoordinatesMap(title, latitudeField, longitudeField, unit) {
  return {
    delay: true,
    label: "Map: Add geographical map",
    payload: {
      title: title,
      dataType: "geographic-coordinates",
      coordinateUnit: unit || "decimal-degrees",
      latitudeField: latitudeField,
      longitudeField: longitudeField
    },
    type: "MICROREACT VIEWER/ADD MAP"
  };
}

function addMap(paneId, title) {
  return {
    payload: {
      paneId: paneId,
      title: title || "Map"
    },
    type: "MICROREACT VIEWER/ADD MAP"
  };
}

function removeMap(paneId) {
  return function (dispatch, getState) {
    var _mapState$geodata;

    var state = (0, _state.getPresentState)(getState());
    var mapState = (0, _mapState["default"])(state, paneId);
    dispatch({
      delay: true,
      group: "".concat(paneId, "/remove"),
      label: "Map: Remove Map",
      payload: {
        paneId: paneId,
        fileId: mapState === null || mapState === void 0 ? void 0 : (_mapState$geodata = mapState.geodata) === null || _mapState$geodata === void 0 ? void 0 : _mapState$geodata.file
      },
      type: "MICROREACT VIEWER/REMOVE MAP"
    });
  };
}

function selectRegion(mapId, regionId, merge) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var rowsByRegion = (0, _rowsByRegion["default"])(state, mapId);
    dispatch((0, _filters.selectRows)(rowsByRegion[regionId].map(function (x) {
      return x[0];
    }), merge));
  };
}

function setFilter(mapId) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    delay: true,
    group: "".concat(mapId, "/filter"),
    label: "Map: Set map filter",
    mapId: mapId,
    payload: path,
    type: "MICROREACT VIEWER/SET MAP FILTER"
  };
}

function setLasso(mapId, isLassoActive) {
  return {
    delay: true,
    group: "".concat(mapId, "/lasso"),
    label: "Map: Toggle lasso",
    mapId: mapId,
    payload: isLassoActive,
    type: "MICROREACT VIEWER/SET MAP LASSO"
  };
}

function setTrackViewport(mapId, isActive) {
  return {
    delay: true,
    group: "".concat(mapId, "/trackViewport"),
    label: "Map: Toggle filter on current viewport",
    mapId: mapId,
    payload: isActive,
    type: "MICROREACT VIEWER/SET MAP TRACK VIEWPORT"
  };
}

function setViewport(mapId, viewport) {
  return {
    group: "".concat(mapId, "/viewport"),
    label: "Map: Pan/zoom map",
    mapId: mapId,
    payload: viewport,
    savable: false,
    type: "MICROREACT VIEWER/SET MAP VIEWPORT"
  };
}

function update(mapId, key, value) {
  return {
    delay: true,
    group: "".concat(mapId, "/").concat(key),
    label: key === "nodeSize" ? "Map: Set marker size ".concat(value) : key === "regionsColourField" ? "Map: Set regions colour by column to ".concat(value) : key === "regionsColourMethod" ? "Map: Set regions colour method to ".concat(value) : key === "regionsColourPalette" ? "Map: Set regions colour palaette to ".concat(value) : key === "style" ? "Map: Set map style to ".concat(value) : key === "scaleMarkers" ? "Map: Toggle scale markers" : key === "showMarkers" ? "Map: Toggle show markers" : key === "showRegions" ? "Map: Toggle show regions" : key === "showRegionOutlines" ? "Map: Toggle region borders" : key === "regionsColourOpacity" ? "Map: Set regions colour opacity to ".concat(value) : undefined,
    mapId: mapId,
    payload: (0, _defineProperty2["default"])({}, key, value),
    type: "MICROREACT VIEWER/UPDATE MAP"
  };
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTree = addTree;
exports.removeTree = removeTree;
exports.setTreeFilter = setTreeFilter;
exports.setTreeLasso = setTreeLasso;
exports.setPhylocanvasProps = setPhylocanvasProps;
exports.update = update;

var _treeState = _interopRequireDefault(__webpack_require__(60));

var Arrays = _interopRequireWildcard(__webpack_require__(24));

var _state = __webpack_require__(3);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable indent */
function addTree(paneId, title, file, labelFieldName) {
  return {
    type: "MICROREACT VIEWER/ADD TREE",
    payload: {
      paneId: paneId,
      title: title || "Tree",
      file: file,
      labelFieldName: labelFieldName
    }
  };
}

function removeTree(paneId) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var treeState = (0, _treeState["default"])(state, paneId);
    dispatch({
      delay: true,
      group: "".concat(paneId, "/remove"),
      label: "Tree: Remove Tree",
      payload: {
        paneId: paneId,
        fileId: treeState.file
      },
      type: "MICROREACT VIEWER/REMOVE TREE"
    });
  };
}

function setTreeFilter(treeId, ids, path) {
  return {
    delay: true,
    group: "".concat(treeId, "/filter"),
    label: "Tree: Change tree filter",
    payload: {
      ids: ids,
      path: path
    },
    treeId: treeId,
    type: "MICROREACT VIEWER/SET TREE FILTER"
  };
}

function setTreeLasso(treeId, lasso) {
  return {
    delay: true,
    group: "".concat(treeId, "/lasso"),
    label: "Tree: Toggle tree lasso",
    payload: lasso,
    treeId: treeId,
    type: "MICROREACT VIEWER/SET TREE LASSO"
  };
}

function setPhylocanvasProps(treeId, updater, origin) {
  return {
    delay: origin !== "viewport" && origin !== "hover",
    group: "".concat(treeId, "/").concat(Object.keys(updater)),
    label: origin === "viewport" ? "Tree: Pan/zoom tree" : undefined,
    payload: updater,
    treeId: treeId,
    savable: origin !== "viewport" && origin !== "hover",
    type: "MICROREACT VIEWER/SET PHYLOCANVAS PROPS"
  };
}

function update(treeId, key, value) {
  return {
    delay: true,
    group: "".concat(treeId, "/").concat(key),
    label: key === "alignLabels" ? "Tree: Toggle align labels" : key === "blockHeaderFontSize" ? "Tree: Set metadata header font size to ".concat(value) : key === "blockSize" ? "Tree: Set metadata block size to ".concat(value) : key === "blockPadding" ? "Tree: Set metadata block gap to ".concat(value) : key === "blocks" ? "Tree: Set metadata columns to ".concat(Arrays.summarise(value)) : key === "fontSize" ? "Tree: Set font size to ".concat(value) : key === "nodeSize" ? "Tree: Set node size to ".concat(value) : key === "showBlockHeaders" ? "Tree: Toggle metadata headers" : key === "showBranchLengths" ? "Tree: Toggle branch lengths" : key === "showLeafLabels" ? "Tree: Toggle leaf labels" : key === "showPiecharts" ? "Tree: Toggle internal nodes" : key === "showShapeBorders" ? "Tree: Toggle shape borders" : key === "showShapes" ? "Tree: Toggle node shapes" : key === "styleLeafLabels" ? "Tree: Toggle colour leaf labels" : key === "styleLeafNodes" ? "Tree: Toggle colour leaf nodes" : key === "styleNodeEdges" ? "Tree: Toggle colour internal edges" : key === "styleNodeLines" ? "Tree: Toggle colour internal edges" : undefined,
    payload: {
      key: key,
      value: value
    },
    treeId: treeId,
    type: "MICROREACT VIEWER/UPDATE TREE"
  };
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function slicerStateSelector(state, slicerId) {
  return state.slicers[slicerId];
}

var _default = slicerStateSelector;
exports["default"] = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = addTable;
exports.downloadAsCsv = downloadAsCsv;
exports.expandColumn = expandColumn;
exports.hideColumn = hideColumn;
exports.moveColumn = moveColumn;
exports.removeTable = removeTable;
exports.resizeColumn = resizeColumn;
exports.setVisibleColumns = setVisibleColumns;
exports.sortColumn = sortColumn;
exports.update = update;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _papaparse = _interopRequireDefault(__webpack_require__(264));

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

var _tableState = _interopRequireDefault(__webpack_require__(90));

var _paneName = _interopRequireDefault(__webpack_require__(265));

var _state = __webpack_require__(3);

var _text = __webpack_require__(71);

var _files = __webpack_require__(38);

var _downloads = __webpack_require__(53);

var _tableData = _interopRequireDefault(__webpack_require__(199));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function addTable(paneId, title, fileId, columns) {
  return {
    type: "MICROREACT VIEWER/ADD TABLE",
    payload: {
      paneId: paneId,
      title: title || "Table",
      columns: columns,
      file: fileId
    }
  };
}

function downloadAsCsv(tableId) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());

    var _tableDataSelector = (0, _tableData["default"])(state, tableId),
        _tableDataSelector2 = (0, _slicedToArray2["default"])(_tableDataSelector, 1),
        rows = _tableDataSelector2[0];

    var name = (0, _paneName["default"])(state, tableId);
    var tableColumns = state.tables[tableId].columns.map(function (x) {
      return x.field;
    });

    var csv = _papaparse["default"].unparse(rows, {
      quotes: true,
      columns: tableColumns
    });

    (0, _downloads.downloadDataUrl)(csv, "".concat((0, _files.normaliseFilename)(name), ".csv"), "text/csv");
  };
}

function expandColumn(tableId, field) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());

    var _fullDatasetSelector = (0, _fullDataset["default"])(state),
        columns = _fullDatasetSelector.columns,
        rows = _fullDatasetSelector.rows;

    var tableColumn = state.tables[tableId].columns.find(function (x) {
      return x.field === field;
    });
    var dataColumn = columns.find(function (x) {
      return x.name === field;
    });
    var longestLabel = "";

    var _iterator = _createForOfIteratorHelper(rows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (row[dataColumn.name] && row[dataColumn.name].length > longestLabel.length) {
          longestLabel = row[dataColumn.name];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var width = Math.max((0, _text.measureWidth)(tableColumn.label || dataColumn.name) + 36,
    /* (twice padding of 8px) plus 4px (for sort indicator) plus 16px (for filter menu button)  */
    (0, _text.measureWidth)(longestLabel) + 16
    /* (twice padding of 8px) */
    );
    dispatch(resizeColumn(tableId, field, width));
  };
}

function hideColumn(tableId, field) {
  return {
    delay: true,
    label: "Table: Hide ".concat(field, " column"),
    payload: field,
    tableId: tableId,
    type: "MICROREACT VIEWER/HIDE COLUMN"
  };
}

function moveColumn(tableId, oldIndex, newIndex) {
  return {
    delay: true,
    label: "Table: Move column",
    payload: {
      oldIndex: oldIndex,
      newIndex: newIndex
    },
    tableId: tableId,
    type: "MICROREACT VIEWER/MOVE COLUMN"
  };
}

function removeTable(paneId) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var tableState = (0, _tableState["default"])(state, paneId);
    dispatch({
      delay: true,
      group: "".concat(paneId, "/remove"),
      label: "Table: Remove Table",
      payload: {
        paneId: paneId,
        fileId: tableState.file
      },
      type: "MICROREACT VIEWER/REMOVE TABLE"
    });
  };
}

function resizeColumn(tableId, field, width) {
  return {
    delay: true,
    label: "Table: Resize ".concat(field, " column"),
    payload: {
      field: field,
      width: width
    },
    tableId: tableId,
    type: "MICROREACT VIEWER/RESIZE COLUMN"
  };
}

function setVisibleColumns(tableId, fields) {
  return {
    delay: true,
    label: "Table: Change visible columns",
    payload: fields,
    tableId: tableId,
    type: "MICROREACT VIEWER/SET VISIBLE COLUMNS"
  };
}

function sortColumn(tableId, field, direction) {
  return {
    delay: true,
    label: "Table: Sort by ".concat(field),
    payload: {
      field: field,
      direction: direction
    },
    tableId: tableId,
    type: "MICROREACT VIEWER/SORT COLUMN"
  };
}

function update(tableId, key, value) {
  return {
    delay: true,
    group: "".concat(tableId, "/").concat(key),
    label: key === "displayMode" ? "Table: Set display mode to ".concat(value) : key === "hideUnselected" ? "Table: Toogle show/hide unselected entries" : undefined,
    payload: (0, _defineProperty2["default"])({}, key, value),
    tableId: tableId,
    type: "MICROREACT VIEWER/UPDATE TABLE"
  };
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addYearMonthDayTimeline = addYearMonthDayTimeline;
exports.addTimeline = addTimeline;
exports.removeTimeline = removeTimeline;
exports.setFilter = setFilter;
exports.update = update;
exports.selectItem = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var Datetime = _interopRequireWildcard(__webpack_require__(56));

var _state = __webpack_require__(3);

var _filters = __webpack_require__(51);

var _style = _interopRequireDefault(__webpack_require__(268));

var _rowsWithDateField = _interopRequireDefault(__webpack_require__(105));

var _rowsWithStyleFields = _interopRequireDefault(__webpack_require__(108));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function addYearMonthDayTimeline(title, yearFieldName, monthFieldName, dayFieldName) {
  return {
    type: "MICROREACT VIEWER/ADD TIMELINE",
    payload: {
      title: title,
      dataType: "year-month-day",
      yearField: yearFieldName,
      monthField: monthFieldName,
      dayField: dayFieldName
    }
  };
}

function addTimeline(paneId, title) {
  return {
    type: "MICROREACT VIEWER/ADD TIMELINE",
    payload: {
      paneId: paneId,
      title: title || "Timeline",
      dataType: "year-month-day"
    }
  };
}

function removeTimeline(paneId) {
  return {
    delay: true,
    group: "".concat(paneId, "/remove"),
    label: "Timeline: Remove Timeline",
    payload: {
      paneId: paneId
    },
    type: "MICROREACT VIEWER/REMOVE TREE"
  };
}

var selectItem = function selectItem(timelineId, item, merge) {
  return function (dispatch, getState) {
    var ids = false;

    if (item) {
      var state = (0, _state.getPresentState)(getState());
      var style = (0, _style["default"])(state, timelineId);

      if (style === "bubble") {
        ids = item.sliceRows.map(function (row) {
          return row[0];
        });
      } else {
        var _rowsWithDateFieldSel = (0, _rowsWithDateField["default"])(state, timelineId),
            dateFieldName = _rowsWithDateFieldSel.dateFieldName;

        var _rowsWithStyleFieldsS = (0, _rowsWithStyleFields["default"])(state),
            _rowsWithStyleFieldsS2 = (0, _slicedToArray2["default"])(_rowsWithStyleFieldsS, 1),
            rows = _rowsWithStyleFieldsS2[0];

        var lowerTimestamp = item.unitStartDate.valueOf();
        var upperTimestamp = item.unitEndDate.valueOf();
        ids = [];

        var _iterator = _createForOfIteratorHelper(rows),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _row$dateFieldName;

            var row = _step.value;
            var timestamp = (_row$dateFieldName = row[dateFieldName]) === null || _row$dateFieldName === void 0 ? void 0 : _row$dateFieldName.valueOf();

            if (timestamp && row["--microreact-colour"] === item.groupColour && timestamp >= lowerTimestamp && timestamp <= upperTimestamp) {
              ids.push(row[0]);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }

    dispatch((0, _filters.selectRows)(ids, merge));
  };
};

exports.selectItem = selectItem;

function setFilter(timelineId, bounds) {
  return {
    delay: true,
    group: "".concat(timelineId, "/filter"),
    label: "Timeline: Set timeline filter to [".concat(bounds.map(Datetime.timestampToDateString).join(", "), "]"),
    payload: bounds || null,
    timelineId: timelineId,
    type: "MICROREACT VIEWER/SET TIMELINE FILTER"
  };
}

function update(timelineId, key, value) {
  return {
    delay: true,
    group: "".concat(timelineId, "/").concat(key),
    label: key === "style" ? "Timeline: Set timeline type to ".concat(value) : key === "unit" ? "Timeline: Set time unit ".concat(value) : key === "speed" ? "Timeline: Set playback speed to ".concat(value) : key === "laneField" ? "Timeline: Set stack by column to ".concat(value) : key === "nodeSize" ? "Timeline: Set bubble size to ".concat(value) : undefined,
    payload: (0, _defineProperty2["default"])({}, key, value),
    timelineId: timelineId,
    type: "MICROREACT VIEWER/UPDATE TIMELINE"
  };
}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNetwork = addNetwork;
exports.downloadFile = downloadFile;
exports.removeNetwork = removeNetwork;
exports.setLasso = setLasso;
exports.setFilter = setFilter;
exports.setLayout = setLayout;
exports.update = update;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _networkState = _interopRequireDefault(__webpack_require__(68));

var _state = __webpack_require__(3);

var _downloads = __webpack_require__(53);

var _networkFile = _interopRequireDefault(__webpack_require__(80));

function addNetwork(paneId, title, file, nodeFieldName) {
  return {
    type: "MICROREACT VIEWER/ADD NETWORK",
    payload: {
      paneId: paneId,
      title: title,
      file: file,
      nodeFieldName: nodeFieldName
    }
  };
}

function downloadFile(networkId) {
  return function (_, getState) {
    var _file$name;

    var state = (0, _state.getPresentState)(getState());
    var file = (0, _networkFile["default"])(state, networkId);
    (0, _downloads.downloadDataUrl)(file._content, (_file$name = file.name) !== null && _file$name !== void 0 ? _file$name : "network.dot", file.format);
  };
}

function removeNetwork(paneId) {
  return function (dispatch, getState) {
    var state = (0, _state.getPresentState)(getState());
    var networkState = (0, _networkState["default"])(state, paneId);
    dispatch({
      delay: true,
      group: "".concat(paneId, "/remove"),
      label: "Network: Remove Network",
      payload: {
        paneId: paneId,
        fileId: networkState.file
      },
      type: "MICROREACT VIEWER/REMOVE NETWORK"
    });
  };
}

function setLasso(networkId, isLassoActive) {
  return {
    delay: true,
    group: "".concat(networkId, "/lasso"),
    label: "Network: Toggle lasso",
    networkId: networkId,
    payload: isLassoActive,
    type: "MICROREACT VIEWER/SET NETWORK LASSO"
  };
}

function setFilter(networkId) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function (dispatch, getState) {
    var _state$filters, _state$filters$select;

    var state = (0, _state.getPresentState)(getState());

    if (path !== null || ((_state$filters = state.filters) === null || _state$filters === void 0 ? void 0 : (_state$filters$select = _state$filters.selection) === null || _state$filters$select === void 0 ? void 0 : _state$filters$select.length) === 0) {
      dispatch({
        delay: true,
        group: "".concat(networkId, "/filter"),
        label: "Network: Change network filter",
        type: "MICROREACT VIEWER/SET NETWORK FILTER",
        networkId: networkId,
        payload: {
          path: path
        }
      });
    }
  };
}

function setLayout(networkId, layout) {
  return {
    delay: true,
    group: "".concat(networkId, "/filter"),
    label: "Network: Change network layout",
    type: "MICROREACT VIEWER/SET NETWORK LAYOUT",
    networkId: networkId,
    payload: {
      layout: layout
    }
  };
}

function update(networkId, key, value) {
  return {
    delay: true,
    group: "".concat(networkId, "/").concat(key),
    label: key === "nodeSize" ? "Network: Set node size ".concat(value) : key === "labelSize" ? "Map: Set label size to ".concat(value) : key === "showLabels" ? "Map: Toggle scale labels" : key === "showNodes" ? "Map: Toggle show nodes" : undefined,
    type: "MICROREACT VIEWER/UPDATE NETWORK",
    networkId: networkId,
    payload: (0, _defineProperty2["default"])({}, key, value)
  };
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fileDescriptor = _interopRequireDefault(__webpack_require__(67));

var _networkState = _interopRequireDefault(__webpack_require__(68));

function networkFileSelector(state, networkId) {
  var _networkStateSelector;

  return (0, _fileDescriptor["default"])(state, (_networkStateSelector = (0, _networkState["default"])(state, networkId)) === null || _networkStateSelector === void 0 ? void 0 : _networkStateSelector.file);
}

var _default = networkFileSelector;
exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(39));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _SvgIcon = _interopRequireDefault(__webpack_require__(54));

var _excluded = ["children"];

var MdiIcon = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], rest, /*#__PURE__*/_react["default"].createElement("path", {
    d: children
  }));
});

MdiIcon.propTypes = {
  children: _propTypes["default"].node
};
MdiIcon.displayName = "MdiIcon";
var _default = MdiIcon;
exports["default"] = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCustomColourPalette = addCustomColourPalette;
exports.addCustomShapePalette = addCustomShapePalette;
exports.setColourByField = setColourByField;
exports.setDataColumnColourPalette = setDataColumnColourPalette;
exports.setDataColumnColourField = setDataColumnColourField;
exports.setLabelByField = setLabelByField;
exports.setShapeByField = setShapeByField;
exports.setDefaultColour = setDefaultColour;
exports.setLegendDirection = setLegendDirection;
exports.updateColourPalette = updateColourPalette;

function addCustomColourPalette(palette) {
  return {
    delay: true,
    label: "Project: Add colour palette",
    type: "MICROREACT VIEWER/ADD CUSTOM COLOUR PALETTE",
    payload: palette
  };
}

function addCustomShapePalette(palette) {
  return {
    delay: true,
    label: "Project: Add shape palette",
    type: "MICROREACT VIEWER/ADD CUSTOM SHAPE PALETTE",
    payload: palette
  };
}

function setColourByField(field) {
  return {
    delay: true,
    label: "Project: Colour by ".concat(field),
    type: "MICROREACT VIEWER/SET COLOUR BY FIELD",
    payload: field
  };
}

function setDataColumnColourPalette(field, palette, mode) {
  return {
    delay: true,
    label: "Project: Set colour palette of ".concat(field, " to ").concat(palette),
    type: "MICROREACT VIEWER/SET COLOUR SETTINGS",
    payload: {
      field: field,
      settings: {
        palette: palette,
        mode: mode
      }
    }
  };
}

function setDataColumnColourField(field, colourField) {
  return {
    delay: true,
    label: "Project: Colour ".concat(field, " as ").concat(colourField),
    type: "MICROREACT VIEWER/SET COLOUR SETTINGS",
    payload: {
      field: field,
      settings: {
        field: colourField
      }
    }
  };
}

function setLabelByField(field) {
  return {
    delay: true,
    label: "Project: Label by ".concat(field),
    type: "MICROREACT VIEWER/SET LABEL BY FIELD",
    payload: field
  };
}

function setShapeByField(field) {
  return {
    delay: true,
    label: field ? "Project: Shape by ".concat(field) : "Project: Set shapes field to default",
    type: "MICROREACT VIEWER/SET SHAPE BY FIELD",
    payload: field !== null && field !== void 0 ? field : null
  };
}

function setDefaultColour(defaultColour) {
  return {
    delay: true,
    label: "Project: Set default colour to ".concat(defaultColour),
    type: "MICROREACT VIEWER/SET DEFAULT COLOUR",
    payload: defaultColour
  };
}

function setLegendDirection(direction) {
  return {
    delay: true,
    type: "MICROREACT VIEWER/SET LEGEND DIRECTION",
    payload: direction
  };
}

function updateColourPalette(palette) {
  return {
    delay: true,
    label: "Project: Update colour palette",
    type: "MICROREACT VIEWER/UPDATE COLOUR PALETTE",
    payload: palette
  };
}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-base-table/lib");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataColumnByField = _interopRequireDefault(__webpack_require__(43));

var _colourPalettes = _interopRequireDefault(__webpack_require__(181));

/**
 * Returns the colour palette used for a field
 */
var colourPaletteForFieldSelector = function colourPaletteForFieldSelector(state, field) {
  var _state$styles$colourS;

  var sourceFieldName = field;

  if ((_state$styles$colourS = state.styles.colourSettings[field]) !== null && _state$styles$colourS !== void 0 && _state$styles$colourS.field) {
    sourceFieldName = state.styles.colourSettings[field].field;
  }

  var settings = state.styles.colourSettings[sourceFieldName];
  var colourPalettes = (0, _colourPalettes["default"])(state);

  if (settings !== null && settings !== void 0 && settings.palette) {
    var palette = colourPalettes.find(function (x) {
      return x.name === settings.palette;
    });

    if (palette) {
      return palette;
    }
  }

  var sourceDataColumn = (0, _dataColumnByField["default"])(state, sourceFieldName);

  if (sourceDataColumn !== null && sourceDataColumn !== void 0 && sourceDataColumn.colourPalette) {
    var _palette = colourPalettes.find(function (x) {
      return x.name === sourceDataColumn.colourPalette;
    });

    if (_palette) {
      return _palette;
    }
  }

  return colourPalettes.find(function (x) {
    return x.name === "microreact colour palette";
  });
};

var _default = colourPaletteForFieldSelector;
exports["default"] = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colourSteps = exports.colourRanges = void 0;

var _colorRanges = __webpack_require__(249);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var colourRanges = [{
  entries: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f", "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  label: "Microreact Auto Colour Palette",
  name: "microreact colour palette",
  type: "qualitative"
}];
exports.colourRanges = colourRanges;

var _iterator = _createForOfIteratorHelper(_colorRanges.COLOR_RANGES),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var x = _step.value;

    if (x.colors.length === 3 && x.name.endsWith("3")) {
      var name = "".concat(x.name.substring(0, x.name.length - 1), "2");
      colourRanges.push({
        entries: [x.colors[0], x.colors[x.colors.length - 1]],
        name: name,
        type: x.type
      }); // if (x.type === "singlehue" || x.type === "sequential") {
      //   colourRanges.push({
      //     entries: [ x.colors[0], x.colors[x.colors.length - 1] ],
      //     name: `Gradient ${x.name}`,
      //     type: "gradient",
      //     scale: "continuous",
      //   });
      // }

      if (x.type === "singlehue") {
        colourRanges.push({
          entries: ["#ffffff", x.colors[x.colors.length - 1]],
          name: "Stark ".concat(name),
          type: x.type
        }); // colourRanges.push({
        //   entries: [ x.colors[x.colors.length - 1], x.colors[x.colors.length - 1] ],
        //   name: `Single colour ${name}`,
        //   type: "Single Colour",
        // });
      }
    }

    colourRanges.push({
      entries: x.colors,
      label: x.name,
      name: x.name,
      type: x.type
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

colourRanges.sort(function (a, b) {
  if (a.type > b.type) {
    return 1;
  } else if (a.type < b.type) {
    return -1;
  } else {
    return 0;
  }
});
var steps = new Set();

for (var _i = 0, _colourRanges = colourRanges; _i < _colourRanges.length; _i++) {
  var item = _colourRanges[_i];
  steps.add(item.entries.length);
}

var colourSteps = Array.from(steps).sort(function (a, b) {
  return a - b;
}); // export function textColourOnBackground(backgroundColour) {
//   const [ r, g, b ] = Utils["colour-to-rgba"](backgroundColour);
//   return (
//     (r * 0.299 + g * 0.587 + b * 0.114) > 186
//       ? "#000000"
//       : "#FFFFFF"
//   );
// }

exports.colourSteps = colourSteps;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colourPaletteForField = _interopRequireDefault(__webpack_require__(86));

/**
 * Returns the colour palette used for a field
 */
var colourModeForFieldSelector = function colourModeForFieldSelector(state, field) {
  var _settings$mode;

  var settings = state.styles.colourSettings[field];

  if (settings !== null && settings !== void 0 && settings.field) {
    return "field";
  }

  var colourPalettle = (0, _colourPaletteForField["default"])(state, field);

  if ((colourPalettle === null || colourPalettle === void 0 ? void 0 : colourPalettle.bins) >= 0) {
    return "gradient";
  }

  return (_settings$mode = settings === null || settings === void 0 ? void 0 : settings.mode) !== null && _settings$mode !== void 0 ? _settings$mode : "categorical";
};

var _default = colourModeForFieldSelector;
exports["default"] = _default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newickLabels = newickLabels;

var _phylocanvas = __webpack_require__(101);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function newickLabels(source) {
  var rootNode = _phylocanvas.Newick.parse_newick(source);

  var queue = [rootNode];
  var labels = [];

  while (queue.length) {
    var node = queue.shift();

    if (node.children) {
      var _iterator = _createForOfIteratorHelper(node.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var childNode = _step.value;
          queue.push(childNode);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (node.name) {
      labels.push(node.name.replace(/^'|'$|^"|"$/g, ""));
    }
  }

  return labels;
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var tableStateSelector = function tableStateSelector(state, tableId) {
  return state.tables[tableId];
};

var _default = tableStateSelector;
exports["default"] = _default;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("flexlayout-react");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _CloseRounded = _interopRequireDefault(__webpack_require__(47));

var _Dialog = _interopRequireDefault(__webpack_require__(282));

var _DialogActions = _interopRequireDefault(__webpack_require__(283));

var _DialogContent = _interopRequireDefault(__webpack_require__(284));

var _DialogTitle = _interopRequireDefault(__webpack_require__(285));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _LinearProgress = _interopRequireDefault(__webpack_require__(286));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(287);

var _html = __webpack_require__(35);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiDialog = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiDialog, _React$PureComponent);

  var _super = _createSuper(UiDialog);

  function UiDialog() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isDialogOpen: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function () {
      _this.setState({
        isDialogOpen: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      } else {
        _this.setState({
          isDialogOpen: false
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(UiDialog, [{
    key: "render",
    value: function render() {
      var _props$isOpen;

      var props = this.props;
      var isOpen = (_props$isOpen = props.isOpen) !== null && _props$isOpen !== void 0 ? _props$isOpen : this.state.isDialogOpen;

      if (!isOpen) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        className: (0, _classnames["default"])("mr-ui-dialog", props.className),
        container: _html.getContainerElement,
        disableBackdropClick: true,
        fullWidth: true,
        maxWidth: props.maxWidth,
        onClose: this.close,
        open: isOpen,
        disableEscapeKeyDown: true
      }, props.showProgress && /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], null), /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, props.title, props.hasCloseButton && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: "mr-floating-action-buttons",
        onClick: this.close,
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], null))), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
        dividers: !props.disableDividers
      }, props.children), props.actions && /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, props.actions));
    }
  }]);
  return UiDialog;
}(_react["default"].PureComponent);

UiDialog.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  hasCloseButton: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  maxWidth: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  showProgress: _propTypes["default"].bool,
  title: _propTypes["default"].node
};
UiDialog.defaultProps = {
  hasCloseButton: true,
  isOpen: false,
  maxWidth: "sm"
};
UiDialog.displayName = "UiDialog";
var _default = UiDialog;
exports["default"] = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(95));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _Radio = _interopRequireDefault(__webpack_require__(366));

var _RadioGroup = _interopRequireDefault(__webpack_require__(367));

var _react = _interopRequireDefault(__webpack_require__(1));

var _DoneRounded = _interopRequireDefault(__webpack_require__(153));

__webpack_require__(368);

var _EmptyIcon = _interopRequireDefault(__webpack_require__(154));

var UiRadioList = /*#__PURE__*/_react["default"].memo(function (props) {
  var control = props.boxed ? /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
    color: "primary",
    size: "small"
  }) : /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
    color: "primary",
    size: "small",
    icon: /*#__PURE__*/_react["default"].createElement(_EmptyIcon["default"], null),
    checkedIcon: /*#__PURE__*/_react["default"].createElement(_DoneRounded["default"], null)
  });
  return /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    className: (0, _classnames["default"])("mr-ui-radio-list", props.className),
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    value: props.value || null
  }, props.nullable && /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: control,
    label: props.nullOptionLabel,
    value: null
  }), props.items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      control: control,
      key: item[props.valueProperty],
      label: item[props.labelProperty],
      value: item[props.valueProperty]
    });
  }));
});

UiRadioList.displayName = "RadioList";
UiRadioList.propTypes = {
  boxed: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  items: _propTypes["default"].array,
  labelProperty: _propTypes["default"].string,
  nullable: _propTypes["default"].bool,
  nullOptionLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  valueProperty: _propTypes["default"].string
};
UiRadioList.defaultProps = {
  boxed: true,
  labelProperty: "label",
  nullable: false,
  nullOptionLabel: "None",
  valueProperty: "value"
};
var _default = UiRadioList;
exports["default"] = _default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(10);

var _rowsWithStyleFields = _interopRequireDefault(__webpack_require__(108));

var _filteredIds = _interopRequireDefault(__webpack_require__(59));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import selectedIdsSetSelector from "./selected-ids-set";
var activeRowsWithStyleFieldsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rowsWithStyleFields["default"])(state);
}, function (state) {
  return (0, _filteredIds["default"])(state);
}, function (_ref, filteredIds) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
      styledRows = _ref2[0];

  if (filteredIds) {
    var rows = [];

    var _iterator = _createForOfIteratorHelper(styledRows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (filteredIds.has(row[0])) {
          rows.push(row);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      rows: rows
    };
  } else {
    return {
      rows: styledRows
    };
  }
}); // const activeRowsWithStyleFieldsSelector = createSelector(
//   (state) => activeRowsWithStyleFieldsBaseSelector(state),
//   (state) => selectedIdsSetSelector(state),
//   (
//     [ styledRows ],
//     selectedIds,
//   ) => {
//     if (selectedIds) {
//       for (const row of styledRows) {
//         row["--microreact-selected"] = selectedIds.has(row[0]);
//       }
//       return [ styledRows ];
//     }
//     else {
//       return [ styledRows ];
//     }
//   },
// );

var _default = activeRowsWithStyleFieldsSelector;
exports["default"] = _default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Scale = __webpack_require__(115);

var _d3Array = __webpack_require__(193);

var _state = __webpack_require__(3);

var _colourPaletteForField = _interopRequireDefault(__webpack_require__(86));

var _uniqueValues = _interopRequireDefault(__webpack_require__(194));

var _dataColumnByField = _interopRequireDefault(__webpack_require__(43));

var _colourModeForField = _interopRequireDefault(__webpack_require__(88));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var discreteValueToColourMapSelector = (0, _state.createKeyedStateSelector)(function (state, field) {
  return (0, _colourPaletteForField["default"])(state, field);
}, function (state, field) {
  var _colourPaletteForFiel;

  return ((_colourPaletteForFiel = (0, _colourPaletteForField["default"])(state, field)) === null || _colourPaletteForFiel === void 0 ? void 0 : _colourPaletteForFiel.type) !== "custom" ? (0, _uniqueValues["default"])(state, field) : undefined;
}, function (state) {
  return state.styles.defaultColour;
}, function (palette, uniqueFieldValues, defaultColour) {
  var colourMap = new Map();

  if (palette.type === "custom") {
    var _iterator = _createForOfIteratorHelper(palette.entries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        colourMap.set(item[0], item[1]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = 0;

    var _iterator2 = _createForOfIteratorHelper(uniqueFieldValues),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var value = _step2.value;

        if ((value !== null && value !== void 0 ? value : undefined) !== undefined) {
          var colour = index <= palette.entries.length ? palette.entries[index] : palette.entries[index % palette.entries.length];
          colourMap.set(value, colour);
          index += 1;
        } else {
          colourMap.set(value, defaultColour);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  colourMap.scale = "discrete";
  return colourMap;
});
var continuousValueToColourMapSelector = (0, _state.createKeyedStateSelector)(function (state, field) {
  return (0, _colourPaletteForField["default"])(state, field);
}, function (state, field) {
  return (0, _uniqueValues["default"])(state, field);
}, function (palette, uniqueValues) {
  var domainExtent = (0, _d3Array.extent)(uniqueValues);
  var range = palette.type === "custom" ? [palette.entries[0][1], palette.entries[palette.entries.length - 1][1]] : [palette.entries[0], palette.entries[palette.entries.length - 1]];
  var colourGetter = (0, _d3Scale.scaleLinear)().domain(domainExtent).range(range);
  var colourMap = new Map();

  var _iterator3 = _createForOfIteratorHelper(uniqueValues),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var value = _step3.value;
      colourMap.set(value, colourGetter(value));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  colourMap.scale = "continuous";
  colourMap.domain = domainExtent;
  colourMap.range = range;
  return colourMap;
});
var binnedValueToColourMapSelector = (0, _state.createKeyedStateSelector)(function (state, field) {
  return (0, _colourPaletteForField["default"])(state, field);
}, function (state, field) {
  return (0, _uniqueValues["default"])(state, field);
}, function (palette, uniqueValues) {
  var _palette$bins;

  var domainExtent = (0, _d3Array.extent)(uniqueValues);
  var range = palette.type === "custom" ? [palette.entries[0][1], palette.entries[palette.entries.length - 1][1]] : [palette.entries[0], palette.entries[palette.entries.length - 1]];
  var numberOfBins = (_palette$bins = palette.bins) !== null && _palette$bins !== void 0 ? _palette$bins : palette.entries.length;
  var binLength = Math.abs(domainExtent[1] - domainExtent[0]) / numberOfBins;
  var colourGetter = (0, _d3Scale.scaleLinear)().domain([1, numberOfBins]).range(range);
  var colourMap = new Map();

  var _iterator4 = _createForOfIteratorHelper(uniqueValues),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var value = _step4.value;
      var binIndex = Math.floor((value - domainExtent[0]) / binLength);
      colourMap.set(value, colourGetter(binIndex));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  colourMap.scale = "binned";
  colourMap.numberOfBins = numberOfBins;
  colourMap.binLength = binLength;
  colourMap.colourGetter = colourGetter;
  colourMap.domain = domainExtent;
  colourMap.range = range;
  return colourMap;
});

function colourMapForFieldSelector(state, field) {
  var dataColumn = (0, _dataColumnByField["default"])(state, field);
  var colourPalette = (0, _colourPaletteForField["default"])(state, field);
  var colourMode = (0, _colourModeForField["default"])(state, field);

  if (colourPalette && dataColumn !== null && dataColumn !== void 0 && dataColumn.isNumeric && colourMode === "gradient") {
    if (colourPalette.bins > 0 || colourPalette.entries.length > 2) {
      return binnedValueToColourMapSelector(state, field);
    } else if (colourPalette.bins === 0 || colourPalette.entries.length === 2) {
      return continuousValueToColourMapSelector(state, field);
    } else {
      return continuousValueToColourMapSelector(state, field);
    }
  }

  return discreteValueToColourMapSelector(state, field);
}

var _default = colourMapForFieldSelector;
exports["default"] = _default;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("@phylocanvas/phylocanvas.gl");

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPointInPolygon = isPointInPolygon;

/* eslint-disable no-plusplus */
function isPointInPolygon(point, vs) {
  var _point$x, _point$y;

  // ray-casting algorithm based on
  // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
  // https://web.archive.org/web/20180115151705/https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
  var x = (_point$x = point.x) !== null && _point$x !== void 0 ? _point$x : point[0];
  var y = (_point$y = point.y) !== null && _point$y !== void 0 ? _point$y : point[1];
  var inside = false;

  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0];
    var yi = vs[i][1];
    var xj = vs[j][0];
    var yj = vs[j][1];
    var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;

    if (intersect) {
      inside = !inside;
    }
  }

  return inside;
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _reselect = __webpack_require__(10);

var _Backspace = _interopRequireDefault(__webpack_require__(364));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _InputAdornment = _interopRequireDefault(__webpack_require__(93));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SearchRounded = _interopRequireDefault(__webpack_require__(144));

var _TextField = _interopRequireDefault(__webpack_require__(62));

__webpack_require__(365);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiFloatingFilter = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiFloatingFilter, _React$PureComponent);

  var _super = _createSuper(UiFloatingFilter);

  function UiFloatingFilter() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiFloatingFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      filter: ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "itemsSelector", (0, _reselect.createSelector)(function (props) {
      return props.items;
    }, function (props) {
      return props.valueGetter;
    }, function (props) {
      return props.createNewItem;
    }, function (_, state) {
      return state.filter;
    }, function (allItems, valueGetter, createNewItem, filter) {
      var items = allItems;

      if (filter) {
        var filterText = filter.toLowerCase();
        items = items.filter(function (item) {
          var _valueGetter;

          return (_valueGetter = valueGetter(item)) === null || _valueGetter === void 0 ? void 0 : _valueGetter.includes(filterText);
        });

        if (createNewItem) {
          if (!items.find(function (item) {
            return valueGetter(item) === filterText;
          })) {
            items.push(createNewItem(filter));
          }
        }
      }

      return items;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClearFilter", function () {
      var _this$inputRef, _this$inputRef$curren;

      _this.setState({
        filter: ""
      });

      (_this$inputRef = _this.inputRef) === null || _this$inputRef === void 0 ? void 0 : (_this$inputRef$curren = _this$inputRef.current) === null || _this$inputRef$curren === void 0 ? void 0 : _this$inputRef$curren.focus();
    });
    return _this;
  }

  (0, _createClass2["default"])(UiFloatingFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var items = this.itemsSelector(props, state);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-floating-filter", props.className)
      }, !props.disabled && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        autoFocus: true,
        variant: "outlined",
        placeholder: props.label,
        size: "small",
        InputProps: {
          startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "start"
          }, /*#__PURE__*/_react["default"].createElement(_SearchRounded["default"], null)),
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end",
            style: {
              visibility: !state.filter ? "hidden" : "visible"
            }
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            onClick: this.handleClearFilter,
            edge: "end",
            size: "small"
          }, /*#__PURE__*/_react["default"].createElement(_Backspace["default"], null)))
        },
        inputRef: this.inputRef,
        className: "mr-filter",
        onChange: function onChange(event) {
          return _this2.setState({
            filter: event.target.value
          });
        },
        value: state.filter
      }), props.renderItems(items), props.children);
    }
  }]);
  return UiFloatingFilter;
}(_react["default"].PureComponent);

UiFloatingFilter.displayName = "UiFloatingFilter";
UiFloatingFilter.propTypes = {
  children: _propTypes["default"].node,
  renderItems: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string,
  items: _propTypes["default"].array.isRequired,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  createNew: _propTypes["default"].bool
};
UiFloatingFilter.defaultProps = {
  label: "Search",
  valueGetter: function valueGetter(x) {
    return x.name.toString().toLowerCase();
  }
};
var _default = UiFloatingFilter;
exports["default"] = _default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _state = __webpack_require__(3);

var _geodataFile = _interopRequireDefault(__webpack_require__(192));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var geojsonLayerDataSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return state.maps[mapId].geodata;
}, function (state, mapId) {
  var _geodataFileSelector;

  return (_geodataFileSelector = (0, _geodataFile["default"])(state, mapId)) === null || _geodataFileSelector === void 0 ? void 0 : _geodataFileSelector._content;
}, function (geodata, geofileContent) {
  if (!geodata) {
    return undefined;
  } // if (geodata.format !== "application/geo+json") {
  //   throw new Error(`Invalid geo data format: ${geodata.format}`);
  // }


  if (geofileContent.type !== "FeatureCollection") {
    throw new Error("Invalid GeoJSON type: ".concat(geofileContent.type));
  }

  var index = 0;

  var _iterator = _createForOfIteratorHelper(geofileContent.features),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var feature = _step.value;
      feature.properties["mr-region-id"] = index;
      index += 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return _objectSpread({}, geofileContent);
});
var _default = geojsonLayerDataSelector;
exports["default"] = _default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = __webpack_require__(12);

var _state = __webpack_require__(3);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var rowsWithDateFieldSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, timelineId) {
  return state.timelines[timelineId].dataType;
}, function (state, timelineId) {
  return state.timelines[timelineId].yearField;
}, function (state, timelineId) {
  return state.timelines[timelineId].monthField;
}, function (state, timelineId) {
  return state.timelines[timelineId].dayField;
}, function (state, timelineId) {
  return state.timelines[timelineId].valueField;
}, function (state, timelineId) {
  return "--mr-".concat(timelineId);
}, function (rows, fieldsMap, timelineType, yearFieldName, monthFieldName, dayFieldName, valueFieldName, timelineFieldName) {
  var minDate = Number.MAX_SAFE_INTEGER;
  var maxDate = Number.MIN_SAFE_INTEGER;

  if (timelineType === "year-month-day") {
    var yearField = fieldsMap.get(yearFieldName);

    if (yearField) {
      var monthField = fieldsMap.get(monthFieldName);
      var dayField = fieldsMap.get(dayFieldName);
      var yearFieldIndex = yearField.name;

      var _iterator = _createForOfIteratorHelper(rows),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          var yearValue = parseInt(row[yearFieldIndex], 10);

          if (Number.isInteger(yearValue)) {
            var month = 1;
            var day = 1;

            if (monthField) {
              var monthValue = parseInt(row[monthField.name], 10);

              if (Number.isInteger(monthValue)) {
                month = monthValue;
              }
            }

            if (dayField) {
              var dayValue = parseInt(row[dayField.name], 10);

              if (Number.isInteger(dayValue)) {
                day = dayValue;
              }
            }

            if (dayField && Number.isFinite(row[dayField.name])) {
              day = parseInt(row[dayField.name], 10);
            }

            var dateInstance = new Date(yearValue, month - 1, day);
            row[timelineFieldName] = dateInstance;
            var timestamp = dateInstance.valueOf();

            if (timestamp < minDate) {
              minDate = timestamp;
            }

            if (timestamp > maxDate) {
              maxDate = timestamp;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        extent: [minDate, maxDate],
        dateFieldName: timelineFieldName
      };
    }
  } else if (timelineType === "formatted-value") {
    var valueDataColumn = fieldsMap.get(valueFieldName);

    if (valueDataColumn) {
      var _iterator2 = _createForOfIteratorHelper(rows),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _row = _step2.value;

          if (_row[valueDataColumn.name] instanceof Date) {
            // const dateInstance = (
            //   (timelineFields.format && timelineFields.format !== valueDataColumn.format)
            //     ?
            //     Datetime.toDate(row[valueDataColumn.name], timelineFields.format)
            //     :
            //     row[valueDataColumn.name]
            // );
            var _timestamp = _row[valueDataColumn.name].valueOf();

            if (_timestamp < minDate) {
              minDate = _timestamp;
            }

            if (_timestamp > maxDate) {
              maxDate = _timestamp;
            } // row[timelineId] = valueDataColumn.name;

          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return {
        extent: [minDate, maxDate],
        dateFieldName: valueDataColumn.name
      };
    }
  } else {
    throw new Error("Invalid timeline type ".concat(timelineType));
  }

  return _constants.emptyObject;
});
var _default = rowsWithDateFieldSelector;
exports["default"] = _default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _filteredIds = _interopRequireDefault(__webpack_require__(59));

var selectedIdsListSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _filteredIds["default"])(state);
}, function (state) {
  return state.filters.selection;
}, function (filteredIds, selectedIds) {
  if (filteredIds) {
    return selectedIds.filter(function (id) {
      return filteredIds.has(id);
    });
  } else {
    return selectedIds;
  }
});
var _default = selectedIdsListSelector;
exports["default"] = _default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _slicerState = _interopRequireDefault(__webpack_require__(75));

function dataColumnSelector(state, slicerId) {
  var fieldsMap = (0, _dataColumnsByFieldMap["default"])(state);

  var _slicerStateSelector = (0, _slicerState["default"])(state, slicerId),
      field = _slicerStateSelector.field;

  if (field) {
    return fieldsMap.get(field);
  } else {
    return undefined;
  }
}

var _default = dataColumnSelector;
exports["default"] = _default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(57));

var _labelsDataColumn = _interopRequireDefault(__webpack_require__(114));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _shapesDataColumn = _interopRequireDefault(__webpack_require__(109));

var _colourMapForField = _interopRequireDefault(__webpack_require__(100));

var _shapeMapByField = _interopRequireDefault(__webpack_require__(195));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var emptyLabel = " ";

var colourMapSelector = function colourMapSelector(state) {
  var colourColumn = (0, _coloursDataColumn["default"])(state);

  if (colourColumn) {
    return (0, _colourMapForField["default"])(state, colourColumn.name);
  } else {
    return undefined;
  }
};

var shapeMapSelector = function shapeMapSelector(state) {
  var shapesColumn = (0, _shapesDataColumn["default"])(state);

  if (shapesColumn) {
    return (0, _shapeMapByField["default"])(state, shapesColumn.name);
  } else {
    return undefined;
  }
};

var rowsWithStyleFieldsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _labelsDataColumn["default"])(state);
}, function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (state) {
  return colourMapSelector(state);
}, function (state) {
  return state.styles.defaultColour;
}, function (state) {
  return (0, _shapesDataColumn["default"])(state);
}, function (state) {
  return shapeMapSelector(state);
}, function (state) {
  return state.styles.defaultShape;
}, function (allRows, labelByDataField, colourByDataField, colourMap, defaultColour, shapeByDataField, shapeMap, defaultShape) {
  var _iterator = _createForOfIteratorHelper(allRows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _row$labelByDataField;

      var row = _step.value;
      row["--microreact-label"] = labelByDataField ? ((_row$labelByDataField = row[labelByDataField.name]) === null || _row$labelByDataField === void 0 ? void 0 : _row$labelByDataField.toString()) || emptyLabel : emptyLabel;
      row["--microreact-colour"] = defaultColour;
      row["--microreact-shape"] = defaultShape;

      if (colourByDataField) {
        row["--microreact-colour-label"] = row[colourByDataField.name] || "(blank)";
        row["--microreact-colour"] = colourMap.get(row[colourByDataField.name]) || defaultColour;
      }

      if (shapeByDataField) {
        row["--microreact-shape-label"] = row[shapeByDataField.name];
        row["--microreact-shape"] = shapeMap.get(row[shapeByDataField.name]) || defaultShape;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return [allRows];
});
var _default = rowsWithStyleFieldsSelector;
exports["default"] = _default;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(57));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var shapesDataColumnSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state) {
  return (0, _dataColumns["default"])(state);
}, function (state) {
  return state.styles.shapesField;
}, function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (fieldsMap, allFields, shapeByFieldName, colourByDataField) {
  if (shapeByFieldName) {
    return fieldsMap.get(shapeByFieldName);
  } else if (colourByDataField && colourByDataField.shapePalette) {
    return colourByDataField;
  } else {
    return (
      /*allFields.find((x) => !!x.shapePalette) ||*/
      undefined
    );
  }
});
var _default = shapesDataColumnSelector;
exports["default"] = _default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fileDescriptor = _interopRequireDefault(__webpack_require__(67));

var _treeState = _interopRequireDefault(__webpack_require__(60));

function treeFileSelector(state, treeId) {
  var _treeStateSelector;

  return (0, _fileDescriptor["default"])(state, (_treeStateSelector = (0, _treeState["default"])(state, treeId)) === null || _treeStateSelector === void 0 ? void 0 : _treeStateSelector.file);
}

var _default = treeFileSelector;
exports["default"] = _default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _UiFloatingFilter = _interopRequireDefault(__webpack_require__(103));

var _UiRadioList = _interopRequireDefault(__webpack_require__(98));

var _propTypes2 = __webpack_require__(14);

var UiFieldsList = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiFloatingFilter["default"], {
    className: (0, _classnames["default"])("mr-ui-fields-list", props.className),
    items: props.columns,
    label: "Search columns",
    renderItems: function renderItems(items) {
      return /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
        items: items,
        onChange: props.onChange,
        value: props.value,
        valueProperty: "name"
      });
    }
  });
});

UiFieldsList.displayName = "UiFieldsList";
UiFieldsList.propTypes = {
  className: _propTypes["default"].string,
  columns: _propTypes["default"].arrayOf(_propTypes2.DataColumn),
  nullable: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string
};
UiFieldsList.defaultProps = {};
var _default = UiFieldsList;
exports["default"] = _default;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("redux-undo");

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _idDataField = _interopRequireDefault(__webpack_require__(128));

var labelsDataColumnSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state) {
  return (0, _idDataField["default"])(state);
}, function (state) {
  return state.styles.labelsField;
}, function (fieldsMap, idField, labelByFieldName) {
  if (labelByFieldName) {
    var field = fieldsMap.get(labelByFieldName);
    return field;
  } else {
    return idField;
  }
});
var _default = labelsDataColumnSelector;
exports["default"] = _default;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNote = addNote;
exports.removeNote = removeNote;
exports.update = update;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

function addNote(paneId, title, source) {
  return {
    type: "MICROREACT VIEWER/ADD NOTE",
    payload: {
      paneId: paneId,
      title: title || "Note",
      source: source
    }
  };
}

function removeNote(paneId) {
  return {
    delay: true,
    group: "".concat(paneId, "/remove"),
    label: "Note: Remove Note",
    payload: {
      paneId: paneId
    },
    type: "MICROREACT VIEWER/REMOVE NOTE"
  };
}

function update(noteId, key, value) {
  return {
    delay: true,
    group: "".concat(noteId, "/").concat(key),
    label: key === "source" ? "Note: Update note" : undefined,
    type: "MICROREACT VIEWER/UPDATE NOTE",
    noteId: noteId,
    payload: (0, _defineProperty2["default"])({}, key, value)
  };
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(54));

var RectangularTreeIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 22 22"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(697 345)"
  }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 3.1875L 0 13L 0 3.1875Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11 0L 11 6L 11 0Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6 10L 6 16L 6 10Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6 16L 14 16L 6 16Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6 10L 14 10L 6 10Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 13L 5 13L 0 13Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 3.1875L 11 3.1875L 0 3.1875Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11 6L 17 6L 11 6Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11 0L 17 0L 11 0Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 3.1875L 0 2.1875L -1 2.1875L -1 3.1875L 0 3.1875ZM 0 13L -1 13L -1 14L 0 14L 0 13ZM 11 0L 11 -1L 10 -1L 10 0L 11 0ZM 11 6L 10 6L 10 7L 11 7L 11 6ZM 6 10L 6 9L 5 9L 5 10L 6 10ZM 6 16L 5 16L 5 17L 6 17L 6 16ZM -1 3.1875L -1 13L 1 13L 1 3.1875L -1 3.1875ZM 10 0L 10 6L 12 6L 12 0L 10 0ZM 5 10L 5 16L 7 16L 7 10L 5 10ZM 6 17L 14 17L 14 15L 6 15L 6 17ZM 6 11L 14 11L 14 9L 6 9L 6 11ZM 0 14L 5 14L 5 12L 0 12L 0 14ZM 0 4.1875L 11 4.1875L 11 2.1875L 0 2.1875L 0 4.1875ZM 11 7L 17 7L 17 5L 11 5L 11 7ZM 11 1L 17 1L 17 -1L 11 -1L 11 1Z",
    transform: "matrix(1 0 0 -1 -694 -326)"
  })))));
});

RectangularTreeIcon.displayName = "RectangularTreeIcon";
var _default = RectangularTreeIcon;
exports["default"] = _default;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("@mdi/js");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/get");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Box = _interopRequireDefault(__webpack_require__(23));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ToggleButton = _interopRequireDefault(__webpack_require__(206));

var _ToggleButtonGroup = _interopRequireDefault(__webpack_require__(207));

var style = {
  height: 40
};

var UiToggleButtons = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: "mr-toggle-buttons",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    style: style
  }, props.label, /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
    size: "small",
    value: props.value,
    exclusive: true,
    onChange: function onChange(event, value) {
      return props.onChange(value);
    }
  }, props.children.map(function (x) {
    return /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      key: x.props.value,
      value: x.props.value,
      title: x.props.title
    }, x);
  })));
});

UiToggleButtons.displayName = "UiToggleButtons";
UiToggleButtons.propTypes = {
  children: _propTypes["default"].array.isRequired,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].any
};
var _default = UiToggleButtons;
exports["default"] = _default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mainDatasetConfig = _interopRequireDefault(__webpack_require__(64));

var idFieldNameSelector = function idFieldNameSelector(state) {
  var masterDataset = (0, _mainDatasetConfig["default"])(state);
  return masterDataset && (masterDataset.idFieldName || "--mr-index");
};

var _default = idFieldNameSelector;
exports["default"] = _default;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncIterator");

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDataset = exports.setColumnLabel = exports.addDataset = void 0;

var addDataset = function addDataset(file, options) {
  return {
    type: "MICROREACT VIEWER/ADD DATASET",
    payload: {
      file: file,
      options: options
    }
  };
};

exports.addDataset = addDataset;

var setColumnLabel = function setColumnLabel(datasetId, column, label) {
  return {
    type: "MICROREACT VIEWER/SET COLUMN LABEL",
    datasetId: datasetId,
    payload: {
      column: column,
      label: label
    }
  };
};

exports.setColumnLabel = setColumnLabel;

var updateDataset = function updateDataset(datasetId, options) {
  return {
    type: "MICROREACT VIEWER/UPDATE DATASET",
    datasetId: datasetId,
    payload: options
  };
};

exports.updateDataset = updateDataset;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFileContent = setFileContent;
exports.updateFile = updateFile;
exports.removeFile = exports.addFile = void 0;

var addFile = function addFile(fileDescriptor) {
  return {
    type: "MICROREACT VIEWER/ADD FILE",
    payload: {
      _content: fileDescriptor._content,
      blob: fileDescriptor.blob,
      format: fileDescriptor.format,
      hash: fileDescriptor.hash,
      id: fileDescriptor.id,
      name: fileDescriptor.name,
      type: fileDescriptor.type,
      url: fileDescriptor.url,
      size: fileDescriptor.size
    }
  };
};

exports.addFile = addFile;

function setFileContent(file) {
  return {
    payload: file,
    savable: false,
    type: "MICROREACT VIEWER/UPDATE FILE"
  };
}

var removeFile = function removeFile(fileId) {
  return {
    type: "MICROREACT VIEWER/REMOVE FILE",
    label: "Project: Remove file",
    payload: fileId
  };
};

exports.removeFile = removeFile;

function updateFile(file) {
  return {
    label: "Project: Update file",
    payload: file,
    type: "MICROREACT VIEWER/UPDATE FILE"
  };
}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("geojson-geometries-lookup");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _idFieldName = _interopRequireDefault(__webpack_require__(123));

var idDataFieldSelector = function idDataFieldSelector(state) {
  return (0, _dataColumnsByFieldMap["default"])(state).get((0, _idFieldName["default"])(state));
};

var _default = idDataFieldSelector;
exports["default"] = _default;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _maps = __webpack_require__(254);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var rowsWithPositionFieldSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).dataType;
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).latitudeField;
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).longitudeField;
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).iso3166Field;
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).iso3166Subdivisions;
}, function (state, mapId) {
  return "--mr-".concat(mapId);
}, function (rows, fieldsMap, dataType, latitudeField, longitudeField, iso3166Field, iso3166Subdivisions, positionFieldName) {
  if (dataType === "geographic-coordinates") {
    var latitudeDataColumn = fieldsMap.get(latitudeField);
    var longitudeDataColumn = fieldsMap.get(longitudeField);

    if (!latitudeDataColumn || !longitudeDataColumn) {
      return undefined;
    } // group all rows by position in order to create
    // one marker for all rows at the same position


    var _iterator = _createForOfIteratorHelper(rows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _row$latitudeDataColu, _row$longitudeDataCol;

        var row = _step.value;
        var latitudeValue = typeof row[latitudeDataColumn.name] === "number" ? (_row$latitudeDataColu = row[latitudeDataColumn.name]) !== null && _row$latitudeDataColu !== void 0 ? _row$latitudeDataColu : null : parseFloat(row[latitudeDataColumn.name]);
        var longitudeValue = typeof row[longitudeDataColumn.name] === "number" ? (_row$longitudeDataCol = row[longitudeDataColumn.name]) !== null && _row$longitudeDataCol !== void 0 ? _row$longitudeDataCol : null : parseFloat(row[longitudeDataColumn.name]);

        if (latitudeValue >= -90 && latitudeValue <= 90 && longitudeValue >= -180 && longitudeValue <= 180) {
          row[positionFieldName] = [// [lng, lat]: http://visgl.github.io/react-map-gl/docs/api-reference/canvas-overlay
          longitudeValue, latitudeValue];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (dataType === "iso-3166-codes") {
    var valueDataColumn = fieldsMap.get(iso3166Field);
    var ignoreSubdivisions = iso3166Subdivisions === false;

    if (!valueDataColumn) {
      return undefined;
    }

    for (var index = 0; index < rows.length; index++) {
      var _row = rows[index];
      var codeValue = _row[valueDataColumn.name];

      if (codeValue && codeValue.toUpperCase) {
        if (ignoreSubdivisions && codeValue.length > 2) {
          codeValue = codeValue.substr(0, 2);
        }

        codeValue = codeValue.toUpperCase();
        var codeEntry = (0, _maps.praseCode)(codeValue);

        if (codeEntry) {
          _row["--microreact-iso3166-code-name"] = codeEntry[2];
          _row[positionFieldName] = codeEntry[0];
        }
      }
    }
  } else {
    throw new Error("Invalid map type ".concat(dataType));
  }

  return positionFieldName;
});
var _default = rowsWithPositionFieldSelector;
exports["default"] = _default;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("vis/lib/network/dotparser");

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePredicate = makePredicate;

var _escapeStringRegexp = _interopRequireDefault(__webpack_require__(261));

function makePredicate(operator, expression) {
  switch (operator) {
    case "in":
      {
        return function (x) {
          return expression.includes(x === null || x === void 0 ? void 0 : x.valueOf());
        };
      }

    case "includes":
      {
        var regexp = new RegExp((0, _escapeStringRegexp["default"])(expression[0]), "i");
        return function (x) {
          return regexp.test(x) === true;
        };
      }

    case "excludes":
      {
        var _regexp = new RegExp((0, _escapeStringRegexp["default"])(expression[0]), "i");

        return function (x) {
          return _regexp.test(x) === false;
        };
      }

    case "equals":
      {
        var _regexp2 = new RegExp("^".concat((0, _escapeStringRegexp["default"])(expression[0]), "$"), "i");

        return function (x) {
          return _regexp2.test(x) === true;
        };
      }

    case "not-equals":
      {
        var _regexp3 = new RegExp("^".concat((0, _escapeStringRegexp["default"])(expression[0]), "$"), "i");

        return function (x) {
          return _regexp3.test(x) === false;
        };
      }

    case "starts-with":
      {
        var _regexp4 = new RegExp("^".concat((0, _escapeStringRegexp["default"])(expression[0])), "i");

        return function (x) {
          return _regexp4.test(x) === true;
        };
      }

    case "not-starts-with":
      {
        var _regexp5 = new RegExp("^".concat((0, _escapeStringRegexp["default"])(expression[0])), "i");

        return function (x) {
          return _regexp5.test(x) === false;
        };
      }

    case "ends-with":
      {
        var _regexp6 = new RegExp("".concat((0, _escapeStringRegexp["default"])(expression[0]), "$"), "i");

        return function (x) {
          return _regexp6.test(x) === true;
        };
      }

    case "not-ends-with":
      {
        var _regexp7 = new RegExp("".concat((0, _escapeStringRegexp["default"])(expression[0]), "$"), "i");

        return function (x) {
          return _regexp7.test(x) === false;
        };
      }

    case "greater-than":
      {
        var filterValue = Number(expression[0]);
        return function (x) {
          return (x === null || x === void 0 ? void 0 : x.valueOf()) > filterValue;
        };
      }

    case "greater-than-or-equal":
      {
        var _filterValue = Number(expression[0]);

        return function (x) {
          return (x === null || x === void 0 ? void 0 : x.valueOf()) >= _filterValue;
        };
      }

    case "less-than":
      {
        var _filterValue2 = Number(expression[0]);

        return function (x) {
          return (x === null || x === void 0 ? void 0 : x.valueOf()) < _filterValue2;
        };
      }

    case "less-than-or-equal":
      {
        var _filterValue3 = Number(expression[0]);

        return function (x) {
          return (x === null || x === void 0 ? void 0 : x.valueOf()) <= _filterValue3;
        };
      }

    case "between":
      {
        var minValue = Number(expression[0]);
        var maxValue = Number(expression[1]);
        return function (x) {
          return (x === null || x === void 0 ? void 0 : x.valueOf()) >= minValue && (x === null || x === void 0 ? void 0 : x.valueOf()) <= maxValue;
        };
      }

    case "not-between":
      {
        var _minValue = Number(expression[0]);

        var _maxValue = Number(expression[1]);

        return function (x) {
          return (x === null || x === void 0 ? void 0 : x.valueOf()) < _minValue || (x === null || x === void 0 ? void 0 : x.valueOf()) > _maxValue;
        };
      }

    case "regex":
      {
        var _regexp8 = new RegExp(expression[0], "i");

        return function (x) {
          return _regexp8.test(x) === true;
        };
      }

    case "not-regex":
      {
        var _regexp9 = new RegExp(expression[0], "i");

        return function (x) {
          return _regexp9.test(x) === false;
        };
      }

    default:
      throw new Error("Invalid filter operator: ".concat(operator));
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _require = __webpack_require__(12),
    emptyObject = _require.emptyObject;

var versions = [// require("./version-1-to-2"),
];
var emptyDocumentPayload = {
  charts: {},
  datasets: {},
  filters: {},
  maps: {},
  meta: {},
  networks: {},
  notes: {},
  panes: {},
  query: {},
  slicers: {},
  styles: {},
  tables: {},
  timelines: {},
  trees: {},
  ui: {}
};

function updateSchema() {
  var originalDocument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;

  var doc = _objectSpread(_objectSpread({}, emptyDocumentPayload), originalDocument);

  return doc; // Determine the version of the document

  var versionRegexp = /https:\/\/microreact\.org\/schema\/v(\d+)\.json/i;

  var _originalDocument$sch = originalDocument.schema.match(versionRegexp),
      _originalDocument$sch2 = (0, _slicedToArray2["default"])(_originalDocument$sch, 2),
      _ = _originalDocument$sch2[0],
      schemaVersion = _originalDocument$sch2[1];

  var curentDocumentVersion = schemaVersion || 1;

  for (var version = curentDocumentVersion; version < versions.length + 1; version++) {
    var updater = versions[version - 1];
    doc = updater(doc);
    doc.schema = "https://microreact.org/schema/v".concat(version + 1, ".json");
  }

  return doc;
}

module.exports = updateSchema;
module.exports.version = versions.length + 1;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.initialState = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  controls: true,
  interpolate: "linear",
  seriesStacking: "stacked",
  showSelection: false
};
exports.initialState = initialState;
var queryPropMap = {
  controls: {
    key: "cc",
    type: Boolean
  }
};

function updateChart(state, chartId, updater) {
  return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, chartId, _objectSpread(_objectSpread({}, state[chartId]), updater)));
}

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD CHART":
      {
        var chartId = action.payload.chartId || (0, _state.newId)(state, "chart");
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, chartId, _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title
        }, action.payload)));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var charts = {};

        for (var _i = 0, _Object$keys = Object.keys(action.payload.charts); _i < _Object$keys.length; _i++) {
          var _chartId = _Object$keys[_i];
          charts[_chartId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.charts[_chartId]), (0, _query.mapQueryToProps)(queryPropMap, action.payload.query));
        }

        return charts;
      }

    case "MICROREACT VIEWER/REMOVE CHART":
      {
        return (0, _state.removeKeyedState)(state, action.payload.paneId);
      }

    case "MICROREACT VIEWER/UPDATE CHART":
      {
        return updateChart(state, action.chartId, action.payload);
      }

    default:
      return state;
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSlicer = removeSlicer;
exports.update = exports.addSlicer = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var addSlicer = function addSlicer(paneId, title) {
  return {
    type: "MICROREACT VIEWER/ADD SLICER",
    payload: {
      paneId: paneId,
      title: title || "Slicer"
    }
  };
};

exports.addSlicer = addSlicer;

function removeSlicer(paneId) {
  return {
    delay: true,
    group: "".concat(paneId, "/remove"),
    label: "Slicer: Remove Slicer",
    payload: {
      paneId: paneId
    },
    type: "MICROREACT VIEWER/REMOVE SLICER"
  };
}

var update = function update(slicerId, key, value) {
  return {
    type: "MICROREACT VIEWER/UPDATE SLICER",
    slicerId: slicerId,
    payload: (0, _defineProperty2["default"])({}, key, value),
    label: key === "field" ? "Slicer: Set column to ".concat(value) : key === "chartType" ? "Slicer: Set chart type to ".concat(value) : undefined,
    delay: true
  };
};

exports.update = update;

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShareTwoTone");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertDriveFileTwoTone");

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDial");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialAction");

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(301);

var UiSpinningLoader = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-spinning-loader"
  }, /*#__PURE__*/_react["default"].createElement("div", null, props.children));
});

UiSpinningLoader.displayName = "UiSpinningLoader";
UiSpinningLoader.propTypes = {
  children: _propTypes["default"].node
};
var _default = UiSpinningLoader;
exports["default"] = _default;

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EditTwoTone");

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchRounded");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ColourSettingsMenu = _interopRequireDefault(__webpack_require__(350));

var _colourModeForField = _interopRequireDefault(__webpack_require__(88));

var _state = __webpack_require__(3);

function mapStateToProps(state, _ref) {
  var field = _ref.field;
  return {
    colourSettings: state.styles.colourSettings[field],
    colourMode: (0, _colourModeForField["default"])(state, field)
  };
}

var _default = (0, _state.connectToPresentState)(_ColourSettingsMenu["default"], mapStateToProps, null);

exports["default"] = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _List = _interopRequireDefault(__webpack_require__(121));

var _ListItem = _interopRequireDefault(__webpack_require__(63));

var _ListSubheader = _interopRequireDefault(__webpack_require__(72));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(354);

var _ColourPalette = _interopRequireDefault(__webpack_require__(355));

var _propTypes2 = __webpack_require__(14);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ColourPaletteList = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ColourPaletteList, _React$PureComponent);

  var _super = _createSuper(ColourPaletteList);

  function ColourPaletteList() {
    (0, _classCallCheck2["default"])(this, ColourPaletteList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColourPaletteList, [{
    key: "getItems",
    value: function getItems() {
      var groups = {};

      var _iterator = _createForOfIteratorHelper(this.props.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          groups[item.type] = groups[item.type] || [];
          groups[item.type].push(item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return Object.entries(groups);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var groups = this.getItems();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-colour-palette-list"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-list"
      }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
        subheader: /*#__PURE__*/_react["default"].createElement("li", null)
      }, groups.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            group = _ref2[0],
            items = _ref2[1];

        return /*#__PURE__*/_react["default"].createElement("li", {
          key: group
        }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, group), items.map(function (item) {
          var _props$value;

          return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
            key: item.name,
            onClick: function onClick(event) {
              return props.onChange(item, event);
            },
            title: item.label,
            selected: item.name === ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.name)
          }, /*#__PURE__*/_react["default"].createElement(_ColourPalette["default"], {
            palette: item,
            bins: props.bins
          }));
        })));
      }))));
    }
  }]);
  return ColourPaletteList;
}(_react["default"].PureComponent);

ColourPaletteList.displayName = "ColourPaletteList";
ColourPaletteList.propTypes = {
  bins: _propTypes["default"].number,
  items: _propTypes["default"].arrayOf(_propTypes2.StylePalette).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes2.StylePalette
};
var _default = ColourPaletteList;
exports["default"] = _default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _CustomColourPaletteEditor = _interopRequireDefault(__webpack_require__(357));

var _styles = __webpack_require__(83);

var _colourMapForField = _interopRequireDefault(__webpack_require__(100));

function mapStateToProps(state, _ref) {
  var bins = _ref.bins,
      field = _ref.field;
  return {
    colourMap: field && !(bins >= 0) ? (0, _colourMapForField["default"])(state, field) : undefined
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddPalette: function onAddPalette(palette) {
      return dispatch((0, _styles.addCustomColourPalette)(palette));
    },
    onUpdatePalette: function onUpdatePalette(palette) {
      return dispatch((0, _styles.updateColourPalette)(palette));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_CustomColourPaletteEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _CloseRounded = _interopRequireDefault(__webpack_require__(47));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _Popover = _interopRequireDefault(__webpack_require__(94));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(143);

var _html = __webpack_require__(35);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiPopover = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiPopover, _React$PureComponent);

  var _super = _createSuper(UiPopover);

  function UiPopover() {
    (0, _classCallCheck2["default"])(this, UiPopover);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(UiPopover, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
        anchorEl: props.anchorEl,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: this.props.direction
        },
        container: _html.getContainerElement,
        onClose: props.onClose,
        open: props.isOpen,
        PaperProps: {
          className: (0, _classnames["default"])(this.props.className, "mr-ui-popover-menu")
        },
        transformOrigin: {
          vertical: "top",
          horizontal: this.props.direction
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.props.hideOnClick ? this.close : undefined
      }, this.props.children));
    }
  }]);
  return UiPopover;
}(_react["default"].PureComponent);

UiPopover.propTypes = {
  buttonProps: _propTypes["default"].object,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  direction: _propTypes["default"].oneOf(["left", "right"]).isRequired,
  hideOnClick: _propTypes["default"].bool,
  enableCloseButton: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  onOpen: _propTypes["default"].func,
  tagName: _propTypes["default"].elementType
};
UiPopover.defaultProps = {
  direction: "left",
  hideOnClick: true
};
var _default = UiPopover;
exports["default"] = _default;

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DoneRounded");

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(54));

var EmptyIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 24 24"
  }));
});

EmptyIcon.displayName = "EmptyIcon";
var _default = EmptyIcon;
exports["default"] = _default;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(39));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

var _excluded = ["icon", "title", "content"];

var UiIconButtonMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  var icon = props.icon,
      title = props.title,
      content = props.content,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_UiPopoverMenu["default"], (0, _extends2["default"])({}, rest, {
    button: _IconButton["default"],
    buttonProps: {
      title: title,
      color: "inherit",
      size: "small",
      children: icon
    },
    title: title,
    content: content
  }));
});

UiIconButtonMenu.displayName = "UiIconButtonMenu";
UiIconButtonMenu.propTypes = {
  content: _propTypes["default"].elementType,
  icon: _propTypes["default"].element,
  title: _propTypes["default"].string
};
var _default = UiIconButtonMenu;
exports["default"] = _default;

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _AutoSizer = _interopRequireDefault(__webpack_require__(158));

var _lib = _interopRequireDefault(__webpack_require__(84));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _default = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(_default, _React$PureComponent);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      columnIndex: null,
      rowIndex: null,
      scrollToRow: 0
    });
    return _this;
  }

  (0, _createClass2["default"])(_default, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_AutoSizer["default"], null, function (_ref) {
        var height = _ref.height,
            width = _ref.width;
        return /*#__PURE__*/_react["default"].createElement(_lib["default"], {
          fixed: true,
          className: "mr-mini-table",
          columns: props.data.columns.sort(function (a, b) {
            if (props.activeFields.includes(a) && props.activeFields.includes(b)) {
              return 0;
            }

            if (props.activeFields.includes(a)) {
              return -1;
            }

            if (props.activeFields.includes(b)) {
              return 1;
            }

            return 0;
          }).map(function (x) {
            return {
              active: props.activeFields.includes(x),
              className: props.activeFields.includes(x) ? "active" : "inactive",
              dataKey: x.name,
              key: x.name,
              headerClassName: props.activeFields.includes(x) ? "active" : "inactive",
              name: x.name,
              minWidth: 120,
              title: x.label || x.name,
              width: Math.max(120, x.name.length * 13 * 0.66)
            };
          }),
          data: props.data.rows,
          rowKey: "--mr-index",
          width: width,
          height: Math.max(200, height - 4),
          headerCellProps: function headerCellProps(_ref2) {
            var column = _ref2.column;
            return {
              tagName: function tagName(args) {
                return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, args, {
                  title: column.active ? "Click to select" : props.inactiveColumnTitle,
                  onClick: function onClick(event) {
                    if (column.active) {
                      props.onHeaderClick(props.data.columns.find(function (x) {
                        return x.name === column.name;
                      }), event);
                    }
                  }
                }));
              }
            };
          }
        });
      });
    }
  }]);
  return _default;
}(_react["default"].PureComponent);

exports["default"] = _default;
(0, _defineProperty2["default"])(_default, "displayName", "MiniTable");
(0, _defineProperty2["default"])(_default, "propTypes", {
  data: _propTypes["default"].object.isRequired,
  onHeaderClick: _propTypes["default"].func
});

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/AutoSizer");

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ListItem = _interopRequireDefault(__webpack_require__(63));

var _ListItemText = _interopRequireDefault(__webpack_require__(85));

var _ListSubheader = _interopRequireDefault(__webpack_require__(72));

var _reactWindow = __webpack_require__(432);

var _reselect = __webpack_require__(10);

var _lodash = _interopRequireDefault(__webpack_require__(433));

var _reactVirtualized = __webpack_require__(434);

__webpack_require__(435);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiList = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiList, _React$PureComponent);

  var _super = _createSuper(UiList);

  function UiList() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiList);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "groupsSelector", (0, _reselect.createSelector)(function (params) {
      return params.items;
    }, function (params) {
      return params.groupItem;
    }, function (items, groupItem) {
      if (items && groupItem) {
        var groups = (0, _lodash["default"])(items, groupItem);
        return groups;
      } else {
        return undefined;
      }
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "itemsSelector", (0, _reselect.createSelector)(function (params) {
      return params.items;
    }, _this.groupsSelector, function (items, groups) {
      if (items && groups) {
        var itemsWithGroups = [];

        for (var _i = 0, _Object$keys = Object.keys(groups); _i < _Object$keys.length; _i++) {
          var groupName = _Object$keys[_i];

          if (groupName) {
            itemsWithGroups.push(groupName);
          }

          var _iterator = _createForOfIteratorHelper(groups[groupName]),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              itemsWithGroups.push(item);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return itemsWithGroups;
      } else {
        return items;
      }
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderItem", function (args, items, groups) {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      var item = items[args.index];

      if (typeof item === "string") {
        return props.renderGroup(item, args, groups[item]);
      } else {
        return props.renderItem(item, args);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(UiList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var groups = this.groupsSelector(props);
      var items = this.itemsSelector(props);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-ui-list", props.className),
        style: {
          height: "100%",
          width: "100%" // height: items.length * 28,
          // maxHeight: "100vh",

        }
      }, /*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return /*#__PURE__*/_react["default"].createElement(_reactWindow.FixedSizeList, {
          height: height,
          width: width,
          itemSize: 28,
          itemCount: items.length,
          className: "MuiList-root MuiList-dense"
        }, function (args) {
          return _this2.renderItem(args, items, groups);
        });
      }));
    }
  }]);
  return UiList;
}(_react["default"].PureComponent);

UiList.displayName = "UiList";
UiList.propTypes = {
  className: _propTypes["default"].string,
  groupItem: _propTypes["default"].func,
  items: _propTypes["default"].array,
  renderItem: _propTypes["default"].func,
  renderGroup: _propTypes["default"].func
};
UiList.defaultProps = {
  renderItem: function renderItem(item, args) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true,
      style: args.style,
      key: args.index
    }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: item
    }));
  },
  renderGroup: function renderGroup(item, args) {
    return /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
      button: true,
      style: args.style,
      key: args.index
    }, item);
  }
};
var _default = UiList;
exports["default"] = _default;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataFieldToAxisType = dataFieldToAxisType;
exports.exportPNG = exportPNG;
exports.exportSVG = exportSVG;
exports.vegaLiteToVega = vegaLiteToVega;
exports.vegaEditorDataUrlToSpec = vegaEditorDataUrlToSpec;
exports.vegaEditorSpecToDataUrl = vegaEditorSpecToDataUrl;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _vegaLite = __webpack_require__(399);

var _lzString = _interopRequireDefault(__webpack_require__(400));

var vegaEditorDataUrlRegex = /https:\/\/vega\.github\.io\/editor\/#\/url\/vega(?:-lite)?\/(.*)/i;

function dataFieldToAxisType(dataColumn) {
  if (dataColumn) {
    switch (dataColumn.dataType) {
      case "integer":
      case "real":
      case "percent":
      case "number":
        return "quantitative";

      case "date":
      case "timestamp":
        return "temporal";

      default:
        return "nominal";
    }
  } else {
    return undefined;
  }
}

function getView(_x) {
  return _getView.apply(this, arguments);
}

function _getView() {
  _getView = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(vega) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return vega.vegaEmbed.current.resultPromise;

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result.view);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getView.apply(this, arguments);
}

function exportPNG(_x2) {
  return _exportPNG.apply(this, arguments);
}

function _exportPNG() {
  _exportPNG = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(vega) {
    var view, dataUrl;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getView(vega);

          case 2:
            view = _context2.sent;
            _context2.next = 5;
            return view.toImageURL("png");

          case 5:
            dataUrl = _context2.sent;
            return _context2.abrupt("return", dataUrl);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _exportPNG.apply(this, arguments);
}

function exportSVG(_x3) {
  return _exportSVG.apply(this, arguments);
}

function _exportSVG() {
  _exportSVG = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(vega) {
    var view, dataUrl;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getView(vega);

          case 2:
            view = _context3.sent;
            _context3.next = 5;
            return view.toSVG();

          case 5:
            dataUrl = _context3.sent;
            return _context3.abrupt("return", dataUrl);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _exportSVG.apply(this, arguments);
}

function vegaLiteToVega(vlSpec) {
  var vgSpec;

  if (vlSpec.$schema && vlSpec.$schema.startsWith("https://vega.github.io/schema/vega-lite")) {
    try {
      vgSpec = (0, _vegaLite.compile)(vlSpec, {}).spec;
      vgSpec.signals = [].concat((0, _toConsumableArray2["default"])(vgSpec.signals || []), [// {
      //   name: 'tooltip',
      //   value: {},
      //   on: [
      //     { events: 'rect:mousedown', update: 'datum' },
      //   ],
      // },
      {
        name: "onItemSelect",
        value: {},
        on: [{
          events: "click",
          update: "[ event, datum ]"
        }]
      } // {
      //   name: 'onSeriesSelect',
      //   value: {},
      //   on: [
      //     { events: 'dblclick', update: 'datum' },
      //   ],
      // },
      ]);
    } catch (error) {
      console.error(vgSpec, vlSpec);
      return error;
    }
  } else {
    vgSpec = vlSpec;
  }

  return vgSpec;
}

function vegaEditorDataUrlToSpec(value) {
  var match = value === null || value === void 0 ? void 0 : value.match(vegaEditorDataUrlRegex);

  if (match && match[1]) {
    return _lzString["default"].decompressFromEncodedURIComponent(match[1]);
  } else {
    return undefined;
  }
}

function vegaEditorSpecToDataUrl(specString) {
  var serializedSpec = _lzString["default"].compressToEncodedURIComponent(specString);

  var url = "https://vega.github.io/editor#/url/vega-lite/".concat(serializedSpec);
  return url;
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(39));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _TuneRounded = _interopRequireDefault(__webpack_require__(428));

var _excluded = ["active", "children", "className"];

var UiControlsButton = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var active = props.active,
      children = props.children,
      className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({}, rest, {
    className: (0, _classnames["default"])("mr-controls-button", className),
    color: active ? "primary" : undefined,
    size: "small",
    variant: "contained",
    ref: ref
  }), children);
});

UiControlsButton.displayName = "UiControlsButton";
UiControlsButton.propTypes = {
  active: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string
};
UiControlsButton.defaultProps = {
  active: false,
  children: /*#__PURE__*/_react["default"].createElement(_TuneRounded["default"], null)
};
var _default = UiControlsButton;
exports["default"] = _default;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _ArrowDropDownTwoTone = _interopRequireDefault(__webpack_require__(429));

var _Chip = _interopRequireDefault(__webpack_require__(430));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(431);

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiControlsMenu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiControlsMenu, _React$PureComponent);

  var _super = _createSuper(UiControlsMenu);

  function UiControlsMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiControlsMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "menuRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function () {
      _this.menuRef.current.open();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      _this.menuRef.current.close();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "popoverMenuButtonProps", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      return {
        className: (0, _classnames["default"])("mr-controls-menu-trigger", props.className),
        icon: /*#__PURE__*/_react["default"].createElement(_ArrowDropDownTwoTone["default"], null),
        label: props.summary || props.title,
        // onClick: () => this.menuRef.current.open(),
        onDelete: props.onClear || undefined,
        size: "small",
        // variant: "outlined",
        color: props.onClear ? "primary" : undefined,
        style: props.style
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(UiControlsMenu, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiPopoverMenu["default"], {
        button: _Chip["default"],
        buttonProps: this.popoverMenuButtonProps(),
        className: (0, _classnames["default"])("mr-controls-menu", // { "mr-fixed-size": props.fixedSize },
        props.className),
        direction: "right" // hideOnClick={props.hideOnClick}
        ,
        disableCloseButton: props.disableHeader,
        disableHeader: props.disableHeader,
        onClose: props.onClose,
        onOpen: props.onOpen,
        ref: this.menuRef,
        title: props.title
      }, props.children);
    }
  }]);
  return UiControlsMenu;
}(_react["default"].PureComponent);

UiControlsMenu.displayName = "ControlsMenu";
UiControlsMenu.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disableHeader: _propTypes["default"].bool,
  fixedSize: _propTypes["default"].bool,
  hideOnClick: _propTypes["default"].bool,
  onClear: _propTypes["default"].oneOfType([_propTypes["default"].oneOf([false]), _propTypes["default"].func]),
  onClose: _propTypes["default"].func,
  onOpen: _propTypes["default"].func,
  style: _propTypes["default"].object,
  summary: _propTypes["default"].node,
  title: _propTypes["default"].node.isRequired
};
var _default = UiControlsMenu;
exports["default"] = _default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _files = __webpack_require__(126);

var _state = __webpack_require__(3);

var _FileLoader = _interopRequireDefault(__webpack_require__(300));

function mapDispatchToProps(dispatch) {
  return {
    onFileLoaded: function onFileLoaded(file) {
      return dispatch((0, _files.setFileContent)(file));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_FileLoader["default"], null, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactTransitionGroup = __webpack_require__(443);

var duration = 300;
var transition = "opacity ".concat(duration, "ms ease-in-out");
var outStyle = {
  transition: transition,
  opacity: 0
};
var inStyle = {
  transition: transition,
  opacity: 1
};
var hiddenStyle = {
  transition: transition,
  opacity: 0,
  visibility: "hidden"
};
var transitionStyles = {
  entering: inStyle,
  entered: inStyle,
  exiting: outStyle,
  exited: hiddenStyle
}; // const Animation = ({ in: inProp, children }) => (
//   <Transition in={inProp} timeout={duration}>
//     {(state) => (
//       <div style={{
//         ...defaultStyle,
//         ...transitionStyles[state],
//       }}>
//         { children }
//       </div>
//     )}
//   </Transition>
// );

var Animation = function Animation(props) {
  if (Array.isArray(props.children)) {
    return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
      "in": props["in"],
      mountOnEnter: true,
      timeout: duration,
      unmountOnExit: true
    }, function (state) {
      return props.children.map(function (el, index) {
        if ( /*#__PURE__*/_react["default"].isValidElement(el)) {
          return /*#__PURE__*/_react["default"].cloneElement(el, {
            key: index,
            style: transitionStyles[state]
          });
        } else {
          return el;
        }
      });
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
      "in": props["in"],
      mountOnEnter: true,
      timeout: duration,
      unmountOnExit: true
    }, function (state) {
      return /*#__PURE__*/_react["default"].cloneElement(props.children, {
        style: transitionStyles[state]
      });
    });
  }
};

Animation.propTypes = {
  children: _propTypes["default"].node,
  "in": _propTypes["default"].bool
};
var _default = Animation;
exports["default"] = _default;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _geojsonGeometriesLookup = _interopRequireDefault(__webpack_require__(127));

var _centroid = _interopRequireDefault(__webpack_require__(248));

var _drawing = __webpack_require__(171);

var _state = __webpack_require__(3);

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _geojsonLayerData = _interopRequireDefault(__webpack_require__(104));

var _activeRowsWithStyleFields = _interopRequireDefault(__webpack_require__(99));

var _rowsWithPositionField = _interopRequireDefault(__webpack_require__(129));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var markersLayerDataSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _rowsWithPositionField["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).scaleType;
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).groupMarkersByRegion;
}, function (state, mapId) {
  var _mapStateSelector$geo;

  return (_mapStateSelector$geo = (0, _mapState["default"])(state, mapId).geodata) === null || _mapStateSelector$geo === void 0 ? void 0 : _mapStateSelector$geo.middlePointPropertyName;
}, function (state, mapId) {
  return (0, _geojsonLayerData["default"])(state, mapId);
}, function (state) {
  return (0, _activeRowsWithStyleFields["default"])(state);
}, function (positionFieldName, scaleType, groupMarkersByRegion, middlePointPropertyName, geojson, _ref) {
  var activeRows = _ref.rows;
  var groupedByPosition = {};

  if (positionFieldName && groupMarkersByRegion) {
    // group all rows by region in order to create
    // one marker per region
    var _iterator = _createForOfIteratorHelper(geojson.features),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _feature$properties$m;

        var feature = _step.value;
        groupedByPosition[feature.properties["mr-region-id"]] = {
          position: (_feature$properties$m = feature.properties[middlePointPropertyName]) !== null && _feature$properties$m !== void 0 ? _feature$properties$m : (0, _centroid["default"])(feature).geometry.coordinates,
          rows: [],
          magnitude: 0
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var lookup = new _geojsonGeometriesLookup["default"](geojson);

    for (var index = 0; index < activeRows.length; index++) {
      var row = activeRows[index];

      if (row[positionFieldName]) {
        var _row$MrScalar;

        var magnitude = (_row$MrScalar = row["--mr-scalar"]) !== null && _row$MrScalar !== void 0 ? _row$MrScalar : 1;
        var featureCollection = lookup.getContainers({
          type: "Point",
          coordinates: row[positionFieldName]
        });

        var _iterator2 = _createForOfIteratorHelper(featureCollection.features),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var regionFeature = _step2.value;
            var groupData = groupedByPosition[regionFeature.properties["mr-region-id"]];
            groupData.rows.push(row);
            groupData.magnitude += magnitude;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } else if (positionFieldName) {
    // group all rows by position in order to create
    // one marker for all rows at the same position
    for (var _index = 0; _index < activeRows.length; _index++) {
      var _row = activeRows[_index];

      if (_row[positionFieldName]) {
        var _row$MrScalar2;

        var _magnitude = (_row$MrScalar2 = _row["--mr-scalar"]) !== null && _row$MrScalar2 !== void 0 ? _row$MrScalar2 : 1;

        var groupKey = _row[positionFieldName].join(",");

        if (!groupedByPosition[groupKey]) {
          groupedByPosition[groupKey] = {
            position: _row[positionFieldName],
            rows: [_row],
            magnitude: _magnitude
          };
        } else {
          groupedByPosition[groupKey].rows.push(_row);
          groupedByPosition[groupKey].magnitude += _magnitude;
        }
      }
    }
  } else {
    return undefined;
  }

  var markers = Object.values(groupedByPosition);

  if (markers.length) {
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;

    var _iterator3 = _createForOfIteratorHelper(markers),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _marker4 = _step3.value;

        if (_marker4.rows.length > 0) {
          if (_marker4.magnitude < min) {
            min = _marker4.magnitude;
          }

          if (_marker4.magnitude > max) {
            max = _marker4.magnitude;
          }

          _marker4.ratio = 0;

          if (_marker4.rows.length > 1) {
            var _iterator8 = _createForOfIteratorHelper(_marker4.rows),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _row2 = _step8.value;

                if (_row2["--microreact-colour"] !== _marker4.rows[0]["--microreact-colour"] || _row2["--microreact-shape"] !== _marker4.rows[0]["--microreact-shape"]) {
                  _marker4.slices = (0, _drawing.getGroupedColours)(_marker4.rows);
                  break;
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (max === min) {
      var _iterator4 = _createForOfIteratorHelper(markers),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var marker = _step4.value;
          marker.ratio = 1;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    } else if (scaleType === "square") {
      var correction = -min;
      var range = Math.pow(max + correction, 0.5);

      var _iterator5 = _createForOfIteratorHelper(markers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _marker = _step5.value;
          _marker.ratio = Math.pow(_marker.magnitude + correction, 0.5) / range;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    } else if (scaleType === "logarithmic") {
      var _correction = 0;

      if (min <= 0) {
        _correction = -min + 1;
      }

      var _range = (max + _correction) / (min + _correction);

      var k = 1 / (_range === 1 ? 1 : Math.log10(_range));
      var c = 0 - k * Math.log10(min + _correction);

      if (_range !== 0) {
        var _iterator6 = _createForOfIteratorHelper(markers),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _marker2 = _step6.value;
            _marker2.ratio = k * Math.log10(_marker2.magnitude + _correction) + c;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } else if (scaleType === "linear") {
      var _range2 = max - min;

      if (_range2 !== 0) {
        var _iterator7 = _createForOfIteratorHelper(markers),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _marker3 = _step7.value;
            _marker3.ratio = (_marker3.magnitude - min) / _range2;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  }

  return markers;
});
var _default = markersLayerDataSelector;
exports["default"] = _default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function dataFieldFilterSelector(state, field) {
  return state.filters.dataFilters.find(function (x) {
    return x.field === field;
  });
}

var _default = dataFieldFilterSelector;
exports["default"] = _default;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _rows = _interopRequireDefault(__webpack_require__(17));

var _selectedIdsSet = _interopRequireDefault(__webpack_require__(173));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var selectedRowsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _selectedIdsSet["default"])(state);
}, function (allRows, selectedId) {
  if (selectedId && selectedId.size) {
    var rows = [];

    var _iterator = _createForOfIteratorHelper(allRows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (selectedId.has(row[0])) {
          rows.push(row);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return rows;
  } else {
    return undefined;
  }
});
var _default = selectedRowsSelector;
exports["default"] = _default;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ListItem = _interopRequireDefault(__webpack_require__(63));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(213));

var _ListItemText = _interopRequireDefault(__webpack_require__(85));

var _ListSubheader = _interopRequireDefault(__webpack_require__(72));

var _Checkbox = _interopRequireDefault(__webpack_require__(145));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _DoneRounded = _interopRequireDefault(__webpack_require__(153));

__webpack_require__(436);

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(42));

var _UiList = _interopRequireDefault(__webpack_require__(160));

var _EmptyIcon = _interopRequireDefault(__webpack_require__(154));

var _constants = __webpack_require__(12);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function toggleSelection(selection, toggledValues) {
  var newSelection = [];

  var _iterator = _createForOfIteratorHelper(selection),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;

      if (!toggledValues.includes(value)) {
        newSelection.push(value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(toggledValues),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _value = _step2.value;

      if (!selection.includes(_value)) {
        newSelection.push(_value);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return newSelection;
}

var UiSelectList = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiSelectList, _React$PureComponent);

  var _super = _createSuper(UiSelectList);

  function UiSelectList() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiSelectList);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderItem", function (item, args) {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
        key: item.name,
        role: undefined,
        button: true,
        onClick: function onClick() {
          return props.onChange(toggleSelection(props.value, [item.name]));
        },
        style: args.style,
        disableGutters: true,
        dense: true
      }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        checked: props.value.indexOf(item.name) !== -1,
        color: "primary",
        disableRipple: true,
        edge: "start",
        tabIndex: -1,
        icon: props.boxed ? undefined : /*#__PURE__*/_react["default"].createElement(_EmptyIcon["default"], null),
        checkedIcon: props.boxed ? undefined : /*#__PURE__*/_react["default"].createElement(_DoneRounded["default"], null)
      })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
        disableTypography: true,
        primary: item.label,
        title: item.label
      }), props.selectOnly && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        className: "mr-select-only",
        color: "primary",
        size: "small",
        onClick: function onClick(event) {
          event.stopPropagation();
          props.onChange(toggleSelection(_constants.emptyArray, [item.name]));
        }
      }, "Only"));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderGroup", function (groupName, args, groupItems) {
      var _assertThisInitialize2 = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize2.props;

      return /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
        key: args.index,
        onClick: function onClick() {
          return props.onChange(toggleSelection(props.value, groupItems.map(function (x) {
            return x.name;
          })));
        },
        style: args.style,
        title: "Click to toggle group"
      }, groupName);
    });
    return _this;
  }

  (0, _createClass2["default"])(UiSelectList, [{
    key: "render",
    value: function render() {
      var _props$style;

      var props = this.props;
      var allSelected = props.items.length && props.items.every(function (x) {
        return props.value.includes(x.name);
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-ui-select-list", props.className),
        title: props.title,
        style: (_props$style = props.style) !== null && _props$style !== void 0 ? _props$style : {
          height: 40 + props.items.length * 28,
          maxHeight: props.maxHeight
        }
      }, !props.disableSelectAll && props.items.length > 0 && /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
        className: "mr-select-all",
        label: props.selectAllLabel || "Select all",
        onChange: function onChange() {
          return props.onChange(toggleSelection(props.value, allSelected ? props.items.map(function (x) {
            return x.name;
          }) : props.items.map(function (x) {
            return x.name;
          }).filter(function (x) {
            return !props.value.includes(x);
          })));
        },
        value: allSelected // labelPlacement={"end"}

      }), /*#__PURE__*/_react["default"].createElement(_UiList["default"], {
        groupItem: props.groupItem,
        items: props.items,
        renderGroup: this.renderGroup,
        renderItem: this.renderItem,
        value: props.value
      }));
    }
  }]);
  return UiSelectList;
}(_react["default"].PureComponent);

UiSelectList.displayName = "UiSelectList";
UiSelectList.propTypes = {
  boxed: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  disableSelectAll: _propTypes["default"].bool,
  groupItem: _propTypes["default"].func,
  items: _propTypes["default"].array,
  maxHeight: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  selectAllLabel: _propTypes["default"].string,
  style: _propTypes["default"].object,
  title: _propTypes["default"].string,
  value: _propTypes["default"].array
};
UiSelectList.defaultProps = {
  boxed: true,
  disableSelectAll: false,
  maxHeight: "calc(100vh - 200px)",
  value: _constants.emptyArray
};
var _default = UiSelectList;
exports["default"] = _default;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawShape = drawShape;
exports.drawPieChart = drawPieChart;
exports.getGroupedColours = getGroupedColours;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _phylocanvas = __webpack_require__(101);

var _defaults = _interopRequireDefault(__webpack_require__(41));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function drawShape(ctx, x, y, radius, shape, colour, highlightColour) {
  var borderWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var borderStyle = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "rgba(0, 0, 0, 0.56)";

  if (radius <= 0 || !shape) {
    return;
  }

  ctx.fillStyle = "black";
  ctx.fillStyle = colour;

  var emoji = _phylocanvas.Utils.emoji(shape);

  if (emoji) {
    // const font = ctx.font;
    ctx.font = "".concat(radius * 2, "px Segoe UI Emoji");
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(emoji, x, y - radius / 2); // ctx.font = font;
  } else if (shape in _phylocanvas.Utils.shapes) {
    ctx.beginPath();

    _phylocanvas.Utils.shapes[shape].renderCanvas(x, y, radius, ctx);

    ctx.fill();

    if (borderWidth > 0) {
      ctx.strokeStyle = borderStyle;
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }

    ctx.closePath();
  } else {
    console.error("Invalid shape ".concat(shape));
  }

  if (highlightColour) {
    // drawHalo(ctx, x, y, radius, highlightColour);
    ctx.strokeStyle = highlightColour;
    var lineWidth = ctx.lineWidth;
    ctx.lineWidth = _defaults["default"].highlight.width;
    ctx.beginPath();
    ctx.arc(x, y, radius + _defaults["default"].NODE_RADIUS + Math.floor(radius / _defaults["default"].NODE_RADIUS / 2), 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = lineWidth;
  }
}

function drawPieChart(ctx, x, y, radius, slices) {
  var highlight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var borderWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
  var startingAngle = _phylocanvas.Angles.Degrees270;

  var _iterator = _createForOfIteratorHelper(slices),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
          colour = _step$value[0],
          value = _step$value[1];

      ctx.fillStyle = colour;
      ctx.beginPath();
      ctx.moveTo(x, y);
      var endingAngle = startingAngle + Math.PI * 2 * value; // Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)

      ctx.arc(x, y, radius, startingAngle, endingAngle, false);
      ctx.fill();
      ctx.closePath();
      startingAngle = endingAngle;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (borderWidth > 0) {
    ctx.beginPath();
    ctx.arc(x, y, radius, _phylocanvas.Angles.Degrees0, _phylocanvas.Angles.Degrees360);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.56)";
    ctx.strokeWidth = borderWidth;
    ctx.stroke();
    ctx.closePath();
  }

  if (highlight) {
    ctx.strokeStyle = _defaults["default"].HIGHLIGHT_COLOUR;
    ctx.lineWidth = _defaults["default"].HIGHLIGHT_WIDTH;
    ctx.beginPath();
    ctx.arc(x, y, radius * 2, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = borderWidth;
  }
}

function getGroupedColours(rows) {
  var groupedData = {};
  var sum = 0;

  var _iterator2 = _createForOfIteratorHelper(rows),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _row$MrScalar;

      var row = _step2.value;
      var colour = row["--microreact-colour"];
      var magnitude = (_row$MrScalar = row["--mr-scalar"]) !== null && _row$MrScalar !== void 0 ? _row$MrScalar : 1;
      sum += magnitude;

      if (!groupedData[colour]) {
        groupedData[colour] = magnitude;
      } else {
        groupedData[colour] += magnitude;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var slices = [];

  var _iterator3 = _createForOfIteratorHelper(Object.keys(groupedData).sort()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _colour = _step3.value;
      slices.push([_colour, groupedData[_colour] / sum]);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return slices;
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotparser = _interopRequireDefault(__webpack_require__(130));

var _state = __webpack_require__(3);

var _networkFile = _interopRequireDefault(__webpack_require__(80));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var baseGraphSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  var _networkFileSelector;

  return (_networkFileSelector = (0, _networkFile["default"])(state, networkId)) === null || _networkFileSelector === void 0 ? void 0 : _networkFileSelector._content;
}, function (dotString) {
  if (!dotString) {
    return null;
  }

  var parsedData = _dotparser["default"].DOTToGraph(dotString);

  var _iterator = _createForOfIteratorHelper(parsedData.nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      node.id = node.id.toString();

      if (node.pos) {
        var pos = node.pos.split(",");

        if (pos.length === 2) {
          node.x = pos[0];
          node.y = pos[1];
        }
      }

      if (node.x && node.y) {
        node.x = parseFloat(node.x);
        node.y = parseFloat(node.y);
        node.fixed = true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var index = 0;

  var _iterator2 = _createForOfIteratorHelper(parsedData.edges),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var edge = _step2.value;
      edge.arrowStrikethrough = false;
      edge.id = edge.id || "edge-".concat(index++);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return parsedData;
});
var _default = baseGraphSelector;
exports["default"] = _default;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _selectedIdsList = _interopRequireDefault(__webpack_require__(106));

var selectedIdsSetSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _selectedIdsList["default"])(state);
}, function (selectedIds) {
  return new Set(selectedIds);
});
var _default = selectedIdsSetSelector;
exports["default"] = _default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chartState = _interopRequireDefault(__webpack_require__(52));

var chartTypeSelector = function chartTypeSelector(state, chartId) {
  return (0, _chartState["default"])(state, chartId).type;
};

var _default = chartTypeSelector;
exports["default"] = _default;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chartState = _interopRequireDefault(__webpack_require__(52));

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(57));

var _dataColumnByField = _interopRequireDefault(__webpack_require__(43));

var seriesFieldSelector = function seriesFieldSelector(state, chartId) {
  var _chartStateSelector = (0, _chartState["default"])(state, chartId),
      seriesField = _chartStateSelector.seriesField;

  if (seriesField) {
    return (0, _dataColumnByField["default"])(state, seriesField);
  } else {
    return (0, _coloursDataColumn["default"])(state);
  }
};

var _default = seriesFieldSelector;
exports["default"] = _default;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var UiIconButton = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  if (props.hidden) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    "aria-label": props.title,
    className: props.className,
    color: props.active ? "primary" : props.colour,
    disabled: props.disabled,
    onClick: props.onClick,
    ref: ref,
    size: "small",
    style: props.style,
    title: props.title
  }, props.children);
});

UiIconButton.displayName = "UiIconButton";
UiIconButton.propTypes = {
  active: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  colour: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  hidden: _propTypes["default"].bool,
  onClick: _propTypes["default"].func.isRequired,
  style: _propTypes["default"].object,
  title: _propTypes["default"].string
};
var _default = UiIconButton;
exports["default"] = _default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Slider = _interopRequireDefault(__webpack_require__(112));

__webpack_require__(135);

var UiSlider = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("mr-ui-slider", props.className),
    title: props.title
  }, /*#__PURE__*/_react["default"].createElement("label", null, props.label, ": ", /*#__PURE__*/_react["default"].createElement("strong", null, props.value), props.unit), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: props.max,
    min: props.min,
    onChange: function onChange(event, value) {
      return props.onChange(value, event);
    },
    value: props.value
  }));
});

UiSlider.displayName = "UiSlider";
UiSlider.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].string.isRequired,
  max: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  unit: _propTypes["default"].string,
  value: _propTypes["default"].number.isRequired
};
var _default = UiSlider;
exports["default"] = _default;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Slider = _interopRequireDefault(__webpack_require__(112));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(95));

var _Switch = _interopRequireDefault(__webpack_require__(152));

var _Animation = _interopRequireDefault(__webpack_require__(166));

var UiToggleSlider = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("mr-ui-slider", "mr-ui-switch", props.className),
    title: props.title
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: props.checked,
      color: "primary",
      onChange: function onChange(event) {
        return props.onCheckedChange(event.target.checked);
      }
    }),
    label: props.checked ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.label, ": ", /*#__PURE__*/_react["default"].createElement("strong", null, props.value), props.unit) : props.label,
    labelPlacement: "start"
  }), /*#__PURE__*/_react["default"].createElement(_Animation["default"], {
    "in": props.checked
  }, /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: props.max,
    min: props.min,
    onChange: function onChange(event, value) {
      return props.onChange(value, event);
    },
    value: props.value
  })));
});

UiToggleSlider.displayName = "UiToggleSlider";
UiToggleSlider.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].string.isRequired,
  max: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onCheckedChange: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  unit: _propTypes["default"].string,
  value: _propTypes["default"].number.isRequired,
  checked: _propTypes["default"].bool.isRequired
};
var _default = UiToggleSlider;
exports["default"] = _default;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _ZoomInRounded = _interopRequireDefault(__webpack_require__(216));

var _ZoomOutMapRounded = _interopRequireDefault(__webpack_require__(217));

var _ZoomOutRounded = _interopRequireDefault(__webpack_require__(218));

__webpack_require__(444);

var ZoomControls = function ZoomControls(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("mr-zoom-controls", props.className),
    draggable: "false",
    "data-html2canvas-ignore": "true"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-button",
    title: "Zoom in",
    onClick: props.onZoomIn
  }, /*#__PURE__*/_react["default"].createElement(_ZoomInRounded["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-divider"
  }), props.onReset && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-button",
    title: "Zoom in",
    onClick: props.onReset
  }, /*#__PURE__*/_react["default"].createElement(_ZoomOutMapRounded["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-divider"
  })), props.children && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-divider"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-button",
    title: "Zoom out",
    onClick: props.onZoomOut
  }, /*#__PURE__*/_react["default"].createElement(_ZoomOutRounded["default"], null)));
};

ZoomControls.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  onReset: _propTypes["default"].func,
  onZoomIn: _propTypes["default"].func.isRequired,
  onZoomOut: _propTypes["default"].func.isRequired
};
var _default = ZoomControls;
exports["default"] = _default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _geojsonGeometriesLookup = _interopRequireDefault(__webpack_require__(127));

var _state = __webpack_require__(3);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _geojsonLayerData = _interopRequireDefault(__webpack_require__(104));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _markersLayerData = _interopRequireDefault(__webpack_require__(167));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var geodataLinkDataFieldSelector = function geodataLinkDataFieldSelector(state, mapId) {
  var _masState$geodata;

  var masState = (0, _mapState["default"])(state, mapId);

  if (masState !== null && masState !== void 0 && (_masState$geodata = masState.geodata) !== null && _masState$geodata !== void 0 && _masState$geodata.linkField) {
    var fieldsMap = (0, _dataColumnsByFieldMap["default"])(state);
    return fieldsMap.get(masState.geodata.linkField);
  } else {
    return undefined;
  }
};

var rowsByRegionSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).geodata;
}, function (state, mapId) {
  return geodataLinkDataFieldSelector(state, mapId);
}, function (state, mapId) {
  return (0, _geojsonLayerData["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _markersLayerData["default"])(state, mapId);
}, function (geodata, geodataLinkDataField, geojson, markersLayerData) {
  if (!geodata) {
    return undefined;
  }

  var rowsByRegion = {};

  var _iterator = _createForOfIteratorHelper(geojson.features),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _feature = _step.value;
      rowsByRegion[_feature.properties["mr-region-id"]] = [];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (geodata.linkType === "geographic-coordinates") {
    var lookup = new _geojsonGeometriesLookup["default"](geojson);

    var _iterator2 = _createForOfIteratorHelper(markersLayerData),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var marker = _step2.value;
        var collection = lookup.getContainers({
          type: "Point",
          coordinates: marker.position
        });

        var _iterator3 = _createForOfIteratorHelper(collection.features),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var feature = _step3.value;
            var regionRows = rowsByRegion[feature.properties["mr-region-id"]];

            var _iterator4 = _createForOfIteratorHelper(marker.rows),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var row = _step4.value;
                regionRows.push(row);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else if (geodata.linkType === "field-property") {
    var _iterator5 = _createForOfIteratorHelper(geojson.features),
        _step5;

    try {
      var _loop = function _loop() {
        var feature = _step5.value;
        var propertyValue = feature[geodata.linkPropertyName];
        var regionRows = rowsByRegion[feature.properties["mr-region-id"]];

        if (propertyValue !== undefined) {
          var _iterator6 = _createForOfIteratorHelper(markersLayerData),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var datum = _step6.value;
              var rows = datum.rows.filter(function (x) {
                return x[geodataLinkDataField.name] === propertyValue;
              });

              var _iterator7 = _createForOfIteratorHelper(rows),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _row = _step7.value;
                  regionRows.push(_row);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      };

      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  return rowsByRegion;
});
var _default = rowsByRegionSelector;
exports["default"] = _default;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _constants = __webpack_require__(12);

var _colours = __webpack_require__(87);

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var colourPalettesSelector = (0, _reselect.createSelector)(function (state) {
  var _fullDatasetSelector;

  return ((_fullDatasetSelector = (0, _fullDataset["default"])(state)) === null || _fullDatasetSelector === void 0 ? void 0 : _fullDatasetSelector.colourPalettes) || _constants.emptyArray;
}, function (state) {
  return state.styles.colourPalettes;
}, function (dataColourPalettes, customColourPalettes) {
  if (dataColourPalettes || customColourPalettes) {
    var uniqueNames = new Set();
    var allPalettes = [];

    if (customColourPalettes) {
      var _iterator = _createForOfIteratorHelper(customColourPalettes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var palette = _step.value;
          uniqueNames.add(palette.name);
          allPalettes.push(palette);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (dataColourPalettes) {
      var _iterator2 = _createForOfIteratorHelper(dataColourPalettes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _palette = _step2.value;

          if (!uniqueNames.has(_palette.name)) {
            uniqueNames.add(_palette.name);
            allPalettes.push(_palette);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    var _iterator3 = _createForOfIteratorHelper(_colours.colourRanges),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _palette2 = _step3.value;
        allPalettes.push(_palette2);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return allPalettes;
  } else {
    return _colours.colourRanges;
  }
});
var _default = colourPalettesSelector;
exports["default"] = _default;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _filteredMapIds = _interopRequireDefault(__webpack_require__(253));

var _filteredTreeIds = _interopRequireDefault(__webpack_require__(256));

var _filteredNetworkIds = _interopRequireDefault(__webpack_require__(257));

var _filteredTimelineIds = _interopRequireDefault(__webpack_require__(259));

var _filteredSearchIds = _interopRequireDefault(__webpack_require__(260));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filteredNonDataIdsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _filteredMapIds["default"])(state);
}, function (state) {
  return (0, _filteredTreeIds["default"])(state);
}, function (state) {
  return (0, _filteredNetworkIds["default"])(state);
}, function (state) {
  return (0, _filteredTimelineIds["default"])(state);
}, function (state) {
  return (0, _filteredSearchIds["default"])(state);
}, function (mapRowIds, treeRowIds, networkRowIds, timelineRowIds, searchRowIds) {
  var ids;

  if (mapRowIds && (ids === undefined || mapRowIds.size < ids.size)) {
    ids = mapRowIds;
  }

  if (treeRowIds && (ids === undefined || treeRowIds.size < ids.size)) {
    ids = treeRowIds;
  }

  if (networkRowIds && (ids === undefined || networkRowIds.size < ids.size)) {
    ids = networkRowIds;
  }

  if (timelineRowIds && (ids === undefined || timelineRowIds.size < ids.size)) {
    ids = timelineRowIds;
  }

  if (searchRowIds && (ids === undefined || searchRowIds.size < ids.size)) {
    ids = searchRowIds;
  }

  if (ids) {
    var intersection = new Set();

    var _iterator = _createForOfIteratorHelper(ids),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var id = _step.value;

        if ((mapRowIds === undefined || mapRowIds.has(id)) && (treeRowIds === undefined || treeRowIds.has(id)) && (networkRowIds === undefined || networkRowIds.has(id)) && (timelineRowIds === undefined || timelineRowIds.has(id)) && (searchRowIds === undefined || searchRowIds.has(id))) {
          intersection.add(id);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return intersection;
  } // Return undefined to singnal that no active filters are applied


  return undefined;
});
var _default = filteredNonDataIdsSelector;
exports["default"] = _default;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _labelColumn = _interopRequireDefault(__webpack_require__(196));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var rowsByLabelSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state, treeId) {
  return (0, _labelColumn["default"])(state, treeId);
}, function (rows, labelColumn) {
  if (!labelColumn) {
    return undefined;
  }

  var rowsByLabel = new Map();

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _row$labelColumn$name;

      var row = _step.value;
      var label = (_row$labelColumn$name = row[labelColumn.name]) === null || _row$labelColumn$name === void 0 ? void 0 : _row$labelColumn$name.toString();

      if (label) {
        var array = rowsByLabel.get(label) || [];
        array.push(row);
        rowsByLabel.set(label, array);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return rowsByLabel;
});
var _default = rowsByLabelSelector;
exports["default"] = _default;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _originalLayout = _interopRequireDefault(__webpack_require__(258));

var layoutSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return state.networks[networkId].layout;
}, function (state, networkId) {
  return (0, _originalLayout["default"])(state, networkId);
}, // getGeographicLayout,
function (currentLayout, originalLayout, geographicLayout) {
  if (geographicLayout) {
    return geographicLayout;
  }

  if (currentLayout) {
    return currentLayout;
  }

  if (originalLayout) {
    return originalLayout;
  }

  return null;
});
var _default = layoutSelector;
exports["default"] = _default;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressions = __webpack_require__(131);

var _state = __webpack_require__(3);

var _rows = _interopRequireDefault(__webpack_require__(17));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _datetime = __webpack_require__(56);

var _dataFieldFilter = _interopRequireDefault(__webpack_require__(168));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filteredFieldIdsSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, field) {
  return (0, _dataFieldFilter["default"])(state, field);
}, function (allRows, fieldsMap, filter) {
  if (filter) {
    var dataColumn = fieldsMap.get(filter.field);

    if (dataColumn && filter.value) {
      var intersection = [];
      var filterValue = filter.value;

      if (dataColumn.dataType === "date") {
        filterValue = filterValue.map(_datetime.ISODateToTimestamp);
      }

      var predicate = (0, _expressions.makePredicate)(filter.operator, filterValue);

      var _iterator = _createForOfIteratorHelper(allRows),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;

          if (predicate(row[dataColumn.name])) {
            intersection.push(row[0]);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return new Set(intersection);
    }
  }

  return undefined;
});
var _default = filteredFieldIdsSelector;
exports["default"] = _default;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeChart = removeChart;
exports.updateMainAxisField = exports.update = exports.selectItem = exports.addChart = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _state = __webpack_require__(3);

var _arrays = __webpack_require__(24);

var _chartType = _interopRequireDefault(__webpack_require__(174));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _seriesField = _interopRequireDefault(__webpack_require__(175));

var _xAxisField = _interopRequireDefault(__webpack_require__(187));

var _yAxisField = _interopRequireDefault(__webpack_require__(188));

var _filters = __webpack_require__(51);

var addChart = function addChart(paneId, title) {
  return {
    type: "MICROREACT VIEWER/ADD CHART",
    payload: {
      paneId: paneId,
      title: title || "Chart"
    }
  };
};

exports.addChart = addChart;

function removeChart(paneId) {
  return {
    delay: true,
    group: "".concat(paneId, "/remove"),
    label: "Chart: Remove Chart",
    payload: {
      paneId: paneId
    },
    type: "MICROREACT VIEWER/REMOVE CHART"
  };
}

var selectItem = function selectItem(chartId, item, merge) {
  return function (dispatch, getState) {
    if (item) {
      var state = (0, _state.getPresentState)(getState());
      var rows = (0, _rows["default"])(state);
      var fieldsMap = (0, _dataColumnsByFieldMap["default"])(state);
      var chartType = (0, _chartType["default"])(state, chartId);
      var ids = [];

      if (chartType === "custom") {
        ids = (0, _arrays.filterByQuery)(rows, fieldsMap, item);
      } else {
        var xAxisField = (0, _xAxisField["default"])(state, chartId);
        var yAxisField = (0, _yAxisField["default"])(state, chartId);
        var seriesField = (0, _seriesField["default"])(state, chartId);
        var query = {};

        if (xAxisField && xAxisField.name in item) {
          query[xAxisField.name] = item[xAxisField.name];
        }

        if (yAxisField && yAxisField.name in item) {
          query[yAxisField.name] = item[yAxisField.name];
        }

        if (seriesField && seriesField.name in item) {
          query[seriesField.name] = item[seriesField.name];
        }

        ids = (0, _arrays.filterByQuery)(rows, fieldsMap, query);
      }

      dispatch((0, _filters.selectRows)(ids, merge));
    } else {
      dispatch((0, _filters.selectRows)(false, merge));
    }
  };
};

exports.selectItem = selectItem;

var update = function update(chartId, key, value) {
  return {
    delay: true,
    chartId: chartId,
    label: key === "type" ? "Chart: Set chart type to ".concat(value) : key === "seriesField" ? "Chart: Set series column to ".concat(value) : key === "xAxisField" ? "Chart: Set X axis column to ".concat(value) : key === "yAxisField" ? "Chart: Set Y axis column to ".concat(value) : key === "seriesStacking" ? "Chart: Set series stacking to ".concat(value) : key === "interpolate" ? "Chart: Set interpolate to ".concat(value) : undefined,
    payload: (0, _defineProperty2["default"])({}, key, value),
    type: "MICROREACT VIEWER/UPDATE CHART"
  };
};

exports.update = update;

var updateMainAxisField = function updateMainAxisField(chartId, key, value) {
  return function (dispatch) {
    dispatch(update(chartId, key, value));

    if (key === "xAxisField") {
      dispatch(update(chartId, "xAxisMode"));
    }

    if (key === "yAxisField") {
      dispatch(update(chartId, "yAxisMode"));
    }
  };
};

exports.updateMainAxisField = updateMainAxisField;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _chartState = _interopRequireDefault(__webpack_require__(52));

var xAxisFieldSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).xAxisField;
}, function (fieldsMap, xAxisField) {
  if (xAxisField) {
    return fieldsMap.get(xAxisField);
  } else {
    return undefined;
  }
});
var _default = xAxisFieldSelector;
exports["default"] = _default;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _chartState = _interopRequireDefault(__webpack_require__(52));

var yAxisFieldSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).yAxisField;
}, function (fieldsMap, yAxisField) {
  if (yAxisField) {
    return fieldsMap.get(yAxisField);
  } else {
    return undefined;
  }
});
var _default = yAxisFieldSelector;
exports["default"] = _default;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _charts = __webpack_require__(161);

var _dataColumn = _interopRequireDefault(__webpack_require__(107));

var _slicerState = _interopRequireDefault(__webpack_require__(75));

function chartAxisTypeSelector(state, slicerId) {
  var _slicerStateSelector = (0, _slicerState["default"])(state, slicerId),
      chartAxisType = _slicerStateSelector.chartAxisType;

  if (!chartAxisType || chartAxisType === "auto") {
    var dataColumn = (0, _dataColumn["default"])(state, slicerId);
    return (0, _charts.dataFieldToAxisType)(dataColumn);
  } else {
    return chartAxisType;
  }
}

var _default = chartAxisTypeSelector;
exports["default"] = _default;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyMap = exports.CommandKey = void 0;

var _browser = __webpack_require__(21);

// import { configure } from "react-hotkeys";
// configure({
//   customKeyCodes: {
//     [isMac ? "meta" : "ctrl"]: "CommandKey",
//   },
// });
var CommandKey = (0, _browser.isMac)() ? "Cmd" : "Ctrl";
exports.CommandKey = CommandKey;
var keyMap = {
  undo: {
    name: "Undo",
    sequence: "meta+z",
    description: (0, _browser.isMac)() ? "Cmd+Z" : "Ctrl+Z"
  },
  redo: {
    name: "Redo",
    sequences: (0, _browser.isMac)() ? "meta+shift+z" : ["ctrl+shift+z", "ctrl+y"],
    description: (0, _browser.isMac)() ? "Cmd + Shift + Z" : "Ctrl + Shift + Z or Ctrl + Y"
  }
};
exports.keyMap = keyMap;

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fileDescriptor = _interopRequireDefault(__webpack_require__(67));

var _mapState = _interopRequireDefault(__webpack_require__(30));

function geodataFileSelector(state, networkId) {
  var _mapStateSelector, _mapStateSelector$geo;

  return (0, _fileDescriptor["default"])(state, (_mapStateSelector = (0, _mapState["default"])(state, networkId)) === null || _mapStateSelector === void 0 ? void 0 : (_mapStateSelector$geo = _mapStateSelector.geodata) === null || _mapStateSelector$geo === void 0 ? void 0 : _mapStateSelector$geo.file);
}

var _default = geodataFileSelector;
exports["default"] = _default;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _arrays = __webpack_require__(24);

var _rows = _interopRequireDefault(__webpack_require__(17));

/**
 * Returns unique values of a field. Caches values by field name.
 *
 * @param {Object} state - Current viewer state
 * @param {String} field - The column name to be queried.
 */
var uniqueValuesSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (_, field) {
  return field;
}, function (rows, field) {
  return (0, _arrays.uniqueElements)(rows, field, true);
});
var _default = uniqueValuesSelector;
exports["default"] = _default;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataColumnByField = _interopRequireDefault(__webpack_require__(43));

var _shapePalettes = _interopRequireDefault(__webpack_require__(252));

var _state = __webpack_require__(3);

var shapeMapByFieldSelector = (0, _state.createKeyedStateSelector)(function (state, field) {
  return (0, _dataColumnByField["default"])(state, field);
}, function (state) {
  return (0, _shapePalettes["default"])(state);
}, function (dataColumn, shapePalettes) {
  if (dataColumn) {
    if (dataColumn.shapePalette) {
      var palette = shapePalettes.find(function (x) {
        return x.name === dataColumn.shapePalette;
      });
      var shapesMap = new Map(palette.entries);
      return shapesMap;
    } else {
      return new Map();
    }
  } else {
    return undefined;
  }
});
var _default = shapeMapByFieldSelector;
exports["default"] = _default;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function labelColumnSelector(state, treeId) {
  var fieldsByName = (0, _dataColumnsByFieldMap["default"])(state);
  return fieldsByName.get(state.trees[treeId].labelField);
}

var _default = labelColumnSelector;
exports["default"] = _default;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var nodeIdColumnSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, networkId) {
  return state.networks[networkId].nodeField;
}, function (fieldsMap, nodeFieldName) {
  return fieldsMap.get(nodeFieldName);
});
var rowsByNodeIdSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state, networkId) {
  return nodeIdColumnSelector(state, networkId);
}, function (rows, nodeIdColumn) {
  if (!nodeIdColumn) {
    return undefined;
  }

  var rowsByLabel = new Map();

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _row$nodeIdColumn$nam;

      var row = _step.value;
      var label = (_row$nodeIdColumn$nam = row[nodeIdColumn.name]) === null || _row$nodeIdColumn$nam === void 0 ? void 0 : _row$nodeIdColumn$nam.toString();

      if (label) {
        var array = rowsByLabel.get(label) || [];
        array.push(row);
        rowsByLabel.set(label, array);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return rowsByLabel;
});
var _default = rowsByNodeIdSelector;
exports["default"] = _default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var boundsSelector = function boundsSelector(state, timelineId) {
  var _state$timelines$time;

  return (_state$timelines$time = state.timelines[timelineId]) === null || _state$timelines$time === void 0 ? void 0 : _state$timelines$time.bounds;
};

var _default = boundsSelector;
exports["default"] = _default;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(267));

var _state = __webpack_require__(3);

var _activeRowsWithStyleFields = _interopRequireDefault(__webpack_require__(99));

var _selectedRows = _interopRequireDefault(__webpack_require__(169));

var _sortState = _interopRequireDefault(__webpack_require__(200));

var _tableState = _interopRequireDefault(__webpack_require__(90));

var dataSelector = function dataSelector(state, tableId) {
  var tableState = (0, _tableState["default"])(state, tableId);

  if (tableState.hideUnselected) {
    var selectedRows = (0, _selectedRows["default"])(state);
    return selectedRows ? {
      rows: selectedRows
    } : (0, _activeRowsWithStyleFields["default"])(state);
  } else {
    return (0, _activeRowsWithStyleFields["default"])(state);
  }
};

var tableDataSelector = (0, _state.createKeyedStateSelector)(function (state, tableId) {
  return dataSelector(state, tableId);
}, function (state, tableId) {
  return (0, _sortState["default"])(state, tableId);
}, function (_ref, sortState) {
  var rows = _ref.rows;
  var fields = Object.keys(sortState);

  if (fields.length) {
    var sorted = (0, _lodash["default"])(rows, Object.keys(sortState), Object.values(sortState));
    return [sorted];
  } else {
    return [rows];
  }
});
var _default = tableDataSelector;
exports["default"] = _default;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sortStateSelector = (0, _state.createKeyedStateSelector)(function (state, tableId) {
  return state.tables[tableId].columns;
}, function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (columns) {
  var sortState = {};

  var _iterator = _createForOfIteratorHelper(columns),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var column = _step.value;

      if (column.sort) {
        sortState[column.field] = column.sort;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return sortState;
});
var _default = sortStateSelector;
exports["default"] = _default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _treeState = _interopRequireDefault(__webpack_require__(60));

function isValidTreeSelector(state, treeId) {
  var treeState = (0, _treeState["default"])(state, treeId);
  return treeState.file && treeState.labelField;
}

var _default = isValidTreeSelector;
exports["default"] = _default;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _networkState = _interopRequireDefault(__webpack_require__(68));

function isValidNetworkSelector(state, networkId) {
  var networkState = (0, _networkState["default"])(state, networkId);
  return networkState.file && networkState.nodeField;
}

var _default = isValidNetworkSelector;
exports["default"] = _default;

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/UndoRounded");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterListRounded");

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _get2 = _interopRequireDefault(__webpack_require__(120));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reselect = __webpack_require__(10);

var _colours = __webpack_require__(87);

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

var _propTypes2 = __webpack_require__(14);

var _browser = __webpack_require__(21);

var _ColourPaletteList = _interopRequireDefault(__webpack_require__(147));

var _CustomColourPaletteEditor = _interopRequireDefault(__webpack_require__(148));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(42));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GradientColourPalettePicker = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(GradientColourPalettePicker, _React$PureComponent);

  var _super = _createSuper(GradientColourPalettePicker);

  function GradientColourPalettePicker(props) {
    var _props$value, _props$value2, _props$value$bins, _props$value3, _props$value4, _props$value4$entries, _props$value5, _props$value5$entries;

    var _this;

    (0, _classCallCheck2["default"])(this, GradientColourPalettePicker);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "itemsSelector", (0, _reselect.createSelector)(function (params) {
      return params.numberOfBins;
    }, function (numberOfBins) {
      return _this.props.colourPalettes.filter(function (x) {
        var numberOfSteps = numberOfBins === 0 ? 2 : numberOfBins;
        return numberOfSteps === x.entries.length;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stepSizeOptions", _colours.colourSteps.map(function (value) {
      if (value === 2) {
        return {
          value: 0,
          label: "Continuous"
        };
      } else {
        return {
          value: value
        };
      }
    }));
    var isCustom = (props === null || props === void 0 ? void 0 : (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.type) === "custom" && (props === null || props === void 0 ? void 0 : (_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.bins) >= 0;
    _this.state = {
      numberOfBins: (_props$value$bins = props === null || props === void 0 ? void 0 : (_props$value3 = props.value) === null || _props$value3 === void 0 ? void 0 : _props$value3.bins) !== null && _props$value$bins !== void 0 ? _props$value$bins : (props === null || props === void 0 ? void 0 : (_props$value4 = props.value) === null || _props$value4 === void 0 ? void 0 : (_props$value4$entries = _props$value4.entries) === null || _props$value4$entries === void 0 ? void 0 : _props$value4$entries.length) === 2 ? 0 : props === null || props === void 0 ? void 0 : (_props$value5 = props.value) === null || _props$value5 === void 0 ? void 0 : (_props$value5$entries = _props$value5.entries) === null || _props$value5$entries === void 0 ? void 0 : _props$value5$entries.length,
      custom: isCustom
    };
    return _this;
  }

  (0, _createClass2["default"])(GradientColourPalettePicker, [{
    key: "setState",
    value: function setState(updater) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(GradientColourPalettePicker.prototype), "setState", this).call(this, updater, _browser.triggerWindowResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !props.onlyContinuousPalettes && /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Number of steps",
        onChange: function onChange(value) {
          return _this2.setState({
            numberOfBins: value
          });
        },
        options: this.stepSizeOptions,
        value: state.numberOfBins
      }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
        label: "Custom Palette",
        onChange: function onChange(value) {
          return _this2.setState({
            custom: value
          });
        },
        value: state.custom
      }), !state.custom && /*#__PURE__*/_react["default"].createElement(_ColourPaletteList["default"], {
        bins: state.numberOfBins,
        items: this.itemsSelector(state),
        onChange: props.onChange,
        value: props.value
      }), state.custom && /*#__PURE__*/_react["default"].createElement(_CustomColourPaletteEditor["default"], {
        bins: state.numberOfBins,
        colourPalette: props.value,
        field: props.field,
        onClose: props.onMenuClose,
        onCustomPaletteCreated: props.onChange
      }));
    }
  }]);
  return GradientColourPalettePicker;
}(_react["default"].PureComponent);

GradientColourPalettePicker.displayName = "GradientColourPalettePicker";
GradientColourPalettePicker.propTypes = {
  onlyContinuousPalettes: _propTypes["default"].bool,
  colourPalettes: _propTypes["default"].arrayOf(_propTypes2.StylePalette),
  field: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  onMenuClose: _propTypes["default"].func,
  value: _propTypes2.StylePalette
};
GradientColourPalettePicker.defaultProps = {
  colourPalettes: _colours.colourRanges
};
var _default = GradientColourPalettePicker;
exports["default"] = _default;

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/ToggleButton");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/ToggleButtonGroup");

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphLabels = graphLabels;
exports.exportPNG = exportPNG;
exports.exportSVG = exportSVG;

var _dotparser = _interopRequireDefault(__webpack_require__(130));

var _canvas2svg = _interopRequireDefault(__webpack_require__(388));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var layers = ["scene", "mouse", "lasso"];

function graphLabels(source) {
  var parsedData = _dotparser["default"].DOTToGraph(source);

  var labels = [];

  var _iterator = _createForOfIteratorHelper(parsedData.nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      labels.push(node.id.toString());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return labels;
}

function exportPNG(sigma) {
  var renderer = sigma.renderers[0];
  var canvas = document.createElement("canvas");
  canvas.setAttribute("width", "".concat(renderer.width, "px"));
  canvas.setAttribute("height", "".concat(renderer.height, "px"));
  var ctx = canvas.getContext("2d");

  var _iterator2 = _createForOfIteratorHelper(layers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var id = _step2.value;

      if (id in renderer.domElements) {
        ctx.drawImage(renderer.domElements[id], 0, 0);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return canvas.toDataURL();
}

function exportSVG(sigma) {
  var renderer = sigma.renderers[0];
  var originalCtxs = {};
  var svgCtx = new _canvas2svg["default"](renderer.width, renderer.height);

  svgCtx.clearRect = function () {};

  for (var _i = 0, _Object$keys = Object.keys(renderer.contexts); _i < _Object$keys.length; _i++) {
    var id = _Object$keys[_i];
    originalCtxs[id] = renderer.contexts[id];
    renderer.contexts[id] = svgCtx;
  }

  sigma.refresh();

  for (var _i2 = 0, _Object$keys2 = Object.keys(originalCtxs); _i2 < _Object$keys2.length; _i2++) {
    var _id = _Object$keys2[_i2];
    renderer.contexts[_id] = originalCtxs[_id];
  }

  return svgCtx.getSerializedSvg(false);
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function timelineStateSelector(state, timelineId) {
  return state.timelines[timelineId];
}

var _default = timelineStateSelector;
exports["default"] = _default;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.initialState = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  source: ""
};
exports.initialState = initialState;
var queryPropMap = {};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD NOTE":
      {
        var noteId = action.payload.noteId || (0, _state.newId)(state, "note");
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, noteId, _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title
        }, action.payload)));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var notes = {};

        for (var _i = 0, _Object$keys = Object.keys(action.payload.notes); _i < _Object$keys.length; _i++) {
          var _noteId = _Object$keys[_i];
          notes[_noteId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.notes[_noteId]), (0, _query.mapQueryToProps)(queryPropMap, action.payload.query));
        }

        return notes;
      }

    case "MICROREACT VIEWER/REMOVE NOTE":
      {
        return (0, _state.removeKeyedState)(state, action.payload.paneId);
      }

    case "MICROREACT VIEWER/UPDATE NOTE":
      {
        return (0, _state.updateKeyedState)(state, action.noteId, action.payload);
      }

    default:
      return state;
  }
}

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SpeedDial = _interopRequireDefault(__webpack_require__(138));

var _SpeedDialAction = _interopRequireDefault(__webpack_require__(139));

__webpack_require__(437);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var floatingActingButtonProps = {
  className: "mr-controls-button",
  size: "small",
  color: "default",
  style: {
    transition: ""
  }
};

var UiSpeedDial = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiSpeedDial, _React$PureComponent);

  var _super = _createSuper(UiSpeedDial);

  function UiSpeedDial() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiSpeedDial);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (item, event) {
      _this.handleClose();

      _this.props.onChange(item[_this.props.valueProperty], event);
    });
    return _this;
  }

  (0, _createClass2["default"])(UiSpeedDial, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var selectedItem = props.items.find(function (x) {
        return x[props.valueProperty] === props.value;
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-ui-speed-dial", "mr-controls-button", props.className),
        style: props.style
      }, /*#__PURE__*/_react["default"].createElement(_SpeedDial["default"], {
        ariaLabel: props.label,
        direction: "down",
        FabProps: _objectSpread(_objectSpread({}, floatingActingButtonProps), {}, {
          title: props.label
        }),
        icon: selectedItem[props.iconProperty],
        onClose: this.handleClose,
        onOpen: this.handleOpen,
        open: this.state.isOpen
      }, props.items.map(function (item) {
        return item !== selectedItem && /*#__PURE__*/_react["default"].createElement(_SpeedDialAction["default"], {
          FabProps: floatingActingButtonProps,
          icon: item[props.iconProperty],
          key: item[props.valueProperty],
          onClick: function onClick(event) {
            return _this2.handleClick(item, event);
          },
          tooltipTitle: item[props.labelProperty]
        });
      })));
    }
  }]);
  return UiSpeedDial;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(UiSpeedDial, "displayName", "UiSpeedDial");
(0, _defineProperty2["default"])(UiSpeedDial, "propTypes", {
  className: _propTypes["default"].string,
  iconProperty: _propTypes["default"].string,
  items: _propTypes["default"].array.isRequired,
  label: _propTypes["default"].string,
  labelProperty: _propTypes["default"].string,
  nullable: _propTypes["default"].bool,
  nullOptionLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  style: _propTypes["default"].object,
  value: _propTypes["default"].string,
  valueProperty: _propTypes["default"].string
});
(0, _defineProperty2["default"])(UiSpeedDial, "defaultProps", {
  labelProperty: "label",
  valueProperty: "value",
  iconProperty: "icon"
});
var _default = UiSpeedDial;
exports["default"] = _default;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Tab = _interopRequireDefault(__webpack_require__(438));

var _TabContext = _interopRequireDefault(__webpack_require__(439));

var _TabList = _interopRequireDefault(__webpack_require__(440));

var _TabPanel = _interopRequireDefault(__webpack_require__(441));

__webpack_require__(442);

var _browser = __webpack_require__(21);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiTabs = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiTabs, _React$PureComponent);

  var _super = _createSuper(UiTabs);

  function UiTabs() {
    var _this$props$defaultPa, _this$props$defaultPa2;

    var _this;

    (0, _classCallCheck2["default"])(this, UiTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: (_this$props$defaultPa = (_this$props$defaultPa2 = _this.props.defaultPaneIndex) === null || _this$props$defaultPa2 === void 0 ? void 0 : _this$props$defaultPa2.toString()) !== null && _this$props$defaultPa !== void 0 ? _this$props$defaultPa : "0"
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event, newValue) {
      _this.selectTab(newValue);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectTab", function (index) {
      _this.setState({
        value: index.toString()
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(UiTabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _browser.nextAnimation)(function () {
        return _this2.setState({
          loaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      var tabs = props.children.filter(function (x) {
        return !!x;
      });
      return /*#__PURE__*/_react["default"].createElement(_TabContext["default"], {
        value: state.value
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-ui-tabs", props.className),
        style: props.style
      }, /*#__PURE__*/_react["default"].createElement(_TabList["default"], {
        onChange: this.handleChange,
        variant: "fullWidth",
        indicatorColor: "primary",
        textColor: "primary"
      }, tabs.map(function (tab, index) {
        return /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
          key: tab.props.label || tab.key || index,
          label: tab.props.label || index,
          value: index.toString()
        });
      })), tabs.map(function (tab, index) {
        return /*#__PURE__*/_react["default"].createElement(_TabPanel["default"], {
          key: tab.props.label || tab.key || index,
          value: index.toString()
        }, tab.props.children);
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if (props.selectedIndex) {
        return {
          value: props.selectedIndex.toString()
        };
      } else {
        return null;
      }
    }
  }]);
  return UiTabs;
}(_react["default"].PureComponent);

UiTabs.displayName = "UiTabs";
UiTabs.propTypes = {
  children: _propTypes["default"].array.isRequired,
  className: _propTypes["default"].string,
  defaultPaneIndex: _propTypes["default"].number,
  selectedIndex: _propTypes["default"].number,
  style: _propTypes["default"].object
};
UiTabs.TabPanel = "div";
var _default = UiTabs;
exports["default"] = _default;

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ZoomInRounded");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ZoomOutMapRounded");

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ZoomOutRounded");

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  actions: true,
  utils: true,
  Theme: true,
  store: true,
  defaults: true,
  constants: true,
  selectors: true,
  schema: true
};
Object.defineProperty(exports, "Theme", {
  enumerable: true,
  get: function get() {
    return _Theme["default"];
  }
});
Object.defineProperty(exports, "store", {
  enumerable: true,
  get: function get() {
    return _store["default"];
  }
});
Object.defineProperty(exports, "defaults", {
  enumerable: true,
  get: function get() {
    return _defaults["default"];
  }
});
exports.schema = exports.selectors = exports.constants = exports["default"] = exports.utils = exports.actions = void 0;

var _Viewer = _interopRequireDefault(__webpack_require__(220));

var _Theme = _interopRequireDefault(__webpack_require__(403));

var _store = _interopRequireDefault(__webpack_require__(407));

var _defaults = _interopRequireDefault(__webpack_require__(41));

var _constants = _interopRequireWildcard(__webpack_require__(12));

exports.constants = _constants;

var ui = _interopRequireWildcard(__webpack_require__(27));

var _components = __webpack_require__(425);

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var events = _interopRequireWildcard(__webpack_require__(61));

var downloads = _interopRequireWildcard(__webpack_require__(53));

var html = _interopRequireWildcard(__webpack_require__(35));

var proxy = _interopRequireWildcard(__webpack_require__(48));

var files = _interopRequireWildcard(__webpack_require__(38));

var _selectors = _interopRequireWildcard(__webpack_require__(445));

exports.selectors = _selectors;

var _schema = _interopRequireWildcard(__webpack_require__(132));

exports.schema = _schema;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/newline-after-import */

/* eslint-disable import/first */
var actions = ui;
exports.actions = actions;
var utils = {
  downloads: downloads,
  events: events,
  files: files,
  html: html,
  proxy: proxy
};
exports.utils = utils;
var _default = _Viewer["default"];
exports["default"] = _default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxUndo = __webpack_require__(113);

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

var _Viewer = _interopRequireDefault(__webpack_require__(229));

var _config = _interopRequireDefault(__webpack_require__(50));

var _state = __webpack_require__(3);

function mapStateToProps(state) {
  return {
    theme: (0, _config["default"])(state).theme,
    datasets: state.datasets,
    files: state.files,
    isEmpty: !(0, _fullDataset["default"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUndo: function onUndo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    },
    onRedo: function onRedo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    }
  };
}

var _default = (0, _state.connectToPresentState)(_Viewer["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("array-join");

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTypedDataset;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _window = __webpack_require__(223);

var _typeAnalyzer = __webpack_require__(224);

var _datetime = __webpack_require__(56);

var _PARSE_FIELD_VALUE_FR;

var ALL_FIELD_TYPES = {
  "boolean": "boolean",
  date: "date",
  geojson: "geojson",
  integer: "integer",
  real: "real",
  string: "string",
  timestamp: "timestamp",
  point: "point"
};
var ACCEPTED_ANALYZER_TYPES = [_typeAnalyzer.DATA_TYPES.DATE, // AnalyzerDataTypes.TIME,
_typeAnalyzer.DATA_TYPES.DATETIME, _typeAnalyzer.DATA_TYPES.NUMBER, _typeAnalyzer.DATA_TYPES.INT, _typeAnalyzer.DATA_TYPES.FLOAT, // AnalyzerDataTypes.BOOLEAN,
_typeAnalyzer.DATA_TYPES.STRING, _typeAnalyzer.DATA_TYPES.GEOMETRY, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.ZIPCODE, _typeAnalyzer.DATA_TYPES.ARRAY, _typeAnalyzer.DATA_TYPES.OBJECT];
var PARSE_FIELD_VALUE_FROM_STRING = (_PARSE_FIELD_VALUE_FR = {}, (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, ALL_FIELD_TYPES["boolean"], {
  valid: function valid(d) {
    return typeof d === "boolean";
  },
  parse: function parse(d) {
    return d === "true" || d === "True" || d === "1" || /yes/i.test(d);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, ALL_FIELD_TYPES.integer, {
  valid: function valid(d) {
    return parseInt(d, 10) === d;
  },
  parse: function parse(d) {
    return parseInt(d, 10);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, ALL_FIELD_TYPES.timestamp, {
  valid: function valid(d, field) {
    return (0, _datetime.isValidDateInstance)(d); // return (
    //   [ "x", "X" ].includes(field.format) ?
    //     typeof d === "number" :
    //     typeof d === "string"
    // );
  },
  parse: function parse(d, field) {
    return ["x", "X"].includes(field.format) ? (0, _datetime.timestampToDateInstance)(d) : (0, _datetime.isoDateToDateInstance)(d);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, ALL_FIELD_TYPES.date, {
  valid: function valid(d, field) {
    return (0, _datetime.isValidDateInstance)(d);
  },
  parse: function parse(d, field) {
    return (0, _datetime.toDateInstance)(d, field.format);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, ALL_FIELD_TYPES.real, {
  valid: function valid(d) {
    return parseFloat(d) === d;
  },
  parse: function parse(d) {
    var number = parseFloat(d);
    return Number.isNaN(number) ? null : number;
  }
}), _PARSE_FIELD_VALUE_FR);
var IGNORE_DATA_TYPES = Object.keys(_typeAnalyzer.DATA_TYPES).filter(function (type) {
  return !ACCEPTED_ANALYZER_TYPES.includes(type);
});

function getSampleForTypeAnalyze(allData, headerNames) {
  var sampleCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var total = Math.min(sampleCount, allData.length); // const fieldOrder = fields.map(f => f.name);

  var sample = [];

  for (var index = 0; index < total; index++) {
    sample.push({});
  } // collect sample data for each field


  headerNames.forEach(function (field) {
    // data counter
    var i = 0; // sample counter

    var j = 0;

    while (j < total) {
      if (i >= allData.length) {
        // if depleted data pool
        sample[j][field] = null;
        j++;
      } else if (allData[i][field] !== null && allData[i][field] !== undefined) {
        sample[j][field] = allData[i][field];
        j++;
        i++;
      } else {
        i++;
      }
    }
  });
  return sample;
}

function getFieldsFromData(data, fieldOrder) {
  // add a check for epoch timestamp
  var metadata = _typeAnalyzer.Analyzer.computeColMeta(data, [// { regex: /.*geojson|all_points/g, dataType: "GEOMETRY" },
  ], {
    ignoredDataTypes: IGNORE_DATA_TYPES
  });

  var _renameDuplicateField = renameDuplicateFields(fieldOrder),
      fieldByIndex = _renameDuplicateField.fieldByIndex;

  var result = fieldOrder.reduce(function (orderedArray, field, index) {
    var name = fieldByIndex[index];
    var fieldMeta = metadata.find(function (m) {
      return m.key === field;
    });

    var _ref = fieldMeta || {},
        type = _ref.type,
        format = _ref.format;

    var fieldType = analyzerTypeToFieldType(type);
    orderedArray[index] = {
      name: name,
      format: format,
      normalised: name.toLowerCase(),
      type: fieldType
    };

    if (name === "--mr-index") {
      orderedArray[index].label = "Index (Microreact)";
    } else if (name === "--mr-scalar") {
      orderedArray[index].label = "Number of entries (Microreact)";
    }

    return orderedArray;
  }, []);
  return result;
}

function renameDuplicateFields(fieldOrder) {
  return fieldOrder.reduce(function (accu, field, i) {
    var allNames = accu.allNames;
    var fieldName = field; // add a counter to duplicated names

    if (allNames.includes(field)) {
      var counter = 0;

      while (allNames.includes("".concat(field, "-").concat(counter))) {
        counter++;
      }

      fieldName = "".concat(field, "-").concat(counter);
    }

    accu.fieldByIndex[i] = fieldName;
    accu.allNames.push(fieldName);
    return accu;
  }, {
    allNames: [],
    fieldByIndex: {}
  });
}

function analyzerTypeToFieldType(aType) {
  var DATE = _typeAnalyzer.DATA_TYPES.DATE,
      TIME = _typeAnalyzer.DATA_TYPES.TIME,
      DATETIME = _typeAnalyzer.DATA_TYPES.DATETIME,
      NUMBER = _typeAnalyzer.DATA_TYPES.NUMBER,
      INT = _typeAnalyzer.DATA_TYPES.INT,
      FLOAT = _typeAnalyzer.DATA_TYPES.FLOAT,
      BOOLEAN = _typeAnalyzer.DATA_TYPES.BOOLEAN,
      STRING = _typeAnalyzer.DATA_TYPES.STRING,
      GEOMETRY = _typeAnalyzer.DATA_TYPES.GEOMETRY,
      GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING,
      PAIR_GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING,
      ZIPCODE = _typeAnalyzer.DATA_TYPES.ZIPCODE,
      ARRAY = _typeAnalyzer.DATA_TYPES.ARRAY,
      OBJECT = _typeAnalyzer.DATA_TYPES.OBJECT; // TODO: un recognized types
  // CURRENCY PERCENT NONE

  switch (aType) {
    case DATE:
      return ALL_FIELD_TYPES.date;

    case TIME:
    case DATETIME:
      // return ALL_FIELD_TYPES.date;
      return ALL_FIELD_TYPES.timestamp;

    case NUMBER:
    case FLOAT:
      return ALL_FIELD_TYPES.real;

    case INT:
      return ALL_FIELD_TYPES.integer;

    case BOOLEAN:
      return ALL_FIELD_TYPES["boolean"];

    case GEOMETRY:
    case GEOMETRY_FROM_STRING:
    case PAIR_GEOMETRY_FROM_STRING:
    case ARRAY:
    case OBJECT:
      // TODO: create a new data type for objects and arrays
      return ALL_FIELD_TYPES.geojson;

    case STRING:
    case ZIPCODE:
      return ALL_FIELD_TYPES.string;

    default:
      _window.console.warn("Unsupported analyzer type: ".concat(aType));

      return ALL_FIELD_TYPES.string;
  }
}

function parseCsvRowsByFieldType(rows, geoFieldIdx, field) {
  var parser = PARSE_FIELD_VALUE_FROM_STRING[field.type];

  if (parser) {
    // check first not null value of it's already parsed
    var first = rows.find(function (r) {
      return r[field.name] !== undefined && r[field.name] !== null;
    });

    if (!first || parser.valid(first[field.name], field)) {
      return;
    }

    rows.forEach(function (row) {
      if (Array.isArray(row[field.name]) && row[field.name].length === 0) {
        row[field.name] = null;
      } // parse string value based on field type
      else if (row[field.name] !== null) {
        row[field.name] = parser.parse(row[field.name], field); // if (geoFieldIdx > -1 && row[geoFieldIdx] && row[geoFieldIdx].properties) {
        //   row[geoFieldIdx].properties[field.name] = row[field.name];
        // }
      }
    });
  }
}

function guessDataColumnsFromRows(rows, headerRow) {
  var sample = getSampleForTypeAnalyze(rows, headerRow);
  var columns = getFieldsFromData(sample, headerRow);
  return columns;
}

function parseRowsByDataColumns(rows, fields) {
  // Edit rows in place
  var geojsonFieldIdx = fields.findIndex(function (f) {
    return f.name === "_geojson";
  });
  fields.forEach(parseCsvRowsByFieldType.bind(null, rows, geojsonFieldIdx));
  return rows;
}

function createTypedDataset(rawRows, headers) {
  var columns = guessDataColumnsFromRows(rawRows, headers);
  var rows = parseRowsByDataColumns(rawRows, columns);
  return {
    columns: columns,
    rows: rows
  };
}

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = require("global/window");

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = require("type-analyzer");

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(227),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";


/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = require("re-reselect");

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactHotkeys = __webpack_require__(230);

__webpack_require__(231);

var _shortcuts = __webpack_require__(190);

var _browser = __webpack_require__(21);

var _state = __webpack_require__(3);

var _constants = __webpack_require__(12);

var _BusyIndicator = _interopRequireDefault(__webpack_require__(234));

var _DropFiles = _interopRequireDefault(__webpack_require__(237));

var _FileLoader = _interopRequireDefault(__webpack_require__(165));

var _HeaderBar = _interopRequireDefault(__webpack_require__(302));

var _LayoutManager = _interopRequireDefault(__webpack_require__(370));

var _PanesEditor = _interopRequireDefault(__webpack_require__(374));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var invertedSpinnerPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAOXRFWHRTb2Z0d2FyZQBBbmltYXRlZCBQTkcgQ3JlYXRvciB2MS42LjIgKHd3dy5waHBjbGFzc2VzLm9yZyl0zchKAAAARHRFWHRUZWNobmljYWwgaW5mb3JtYXRpb25zADUuNi40MC0zMyt1YnVudHUxNi4wNC4xK2RlYi5zdXJ5Lm9yZysxOyAyLjMuMDKTIQ0AAAAIYWNUTAAAABQAAAAAHC3xUgAAABpmY1RMAAAAAAAAACgAAAAoAAAAAAAAAAAAKAPoAAAoDRS9AAACIElEQVRYhe2WMWsVQRSF7wxLCGIR5FUiqUQklWUKsfQXiL/Cyh8giIWktEwtVhZimUpEtBGxtBQtLNRGJEjQnM8is8/J7Oxm384EU+yBYWfPezt75t577qyzCQA80DjnFsAF59xX4Lv3XlPWqwagAbaA+8A7SYeSkLQPPALW/5cwD2wDzyX9CqI6A7h7Whp8zzBgIWkXOABaIccQcS/iZ3Prrco14UYR2d57YNvMHjvnLo/c6J9orRglXBchpbck7WfSmEttO78zciOTsAyvpNttSlfAK+C8VU5xRyVwY8gIyTiQ9B54KGlRO2ItliqBi8DHTPGnpvgZ2sqWpLVkp32GmzqOIMlLehILiwVG8z3gChCnwqybnt5ATODMgJvA75wJwjgEdoA0YsML1wCwBrw8wQQPQtSGIlbTHP844Hp0bOXayDOg7ZljkEv1NI6jnrfbYwaAb8DmxGik/OoccE7Sp5whwvXeSEOcjkmAa7ExEpP8AC4VvKwYjZldNTNzzi3JaP7GzL5EL1eYa4CLf7PkPytzDfC5T71zbs85lx7gSq5DnC/mJK1LepvxyGtJG1bWMlJ+CmcGbAJPg2M/hJ63kTxo1hVzEhej6CTxQaiPHHsmcKz5BnPkirfFmMKOP37T+p3M1Y5atZOk6RE3JHhsyxhaq7weC1HvLB4izwL6vlBmk4zlZpNU4maTWCk3m6QiN5tkJcwmKeVmk5RyfwGCZALwfvZeKwAAABpmY1RMAAAAAQAAACgAAAAoAAAAAAAAAAAAKAPoAACzfv5pAAACH2ZkQVQAAAACWIXtljFrFUEUhc8MD7FILRosgoj1+wGSwh8hkl9iYZNO8VekFLQSA6lsxU5FBLuAVoKKIDGEdz6LtyvDvJ19+3Y3McUeGHbnvOXOmXvvmTdBPQBESTNJ25LmwG1JNyRthRAs6aekd8BhjPFXnzV6AZgBc+Ap8NH2wjb1APLnB9s7FyEsArvAke3TVFSH8WIMDbEwBFy3fQCcpRlKUeKq8a1qiVhYq5WbVRMnZD2PwK6kgxDCTtedAgohSFL9/JKtocK8xDUuEm3v2T7JS5ZlZx23sP2g6+bWIWqZtWh7Dzhdqdtm+G37ITBTx3I2caEhe/eAV5KudtjUH0nvQwhvJH2S9L0KfEXSW0mfq2NnEGrFAm4Cx23NX+EH8AS4k2QojTfm+Ccu2n6WCksFJu8vgVssnZluMC9PMRE9OMn2XZKjpKHpz4D9hoy1Bx4J0fb+mqZ/RPN5psKzsxHauPocVAhhATSqDyE8l/Q4a/im95yLY3BRkmzPgZM0ZVVpvwLbPbOR8324SrIdbd8HjithC+A1y8tBF0Ocr0lqsLyxXAO2bJc+vjCT1Ad1GjzvidJvscBZq2KHcCsixkBTqXtxQeVsScOzkcccwjUT6m6IczVJW+D/ilmBLwntUt60PPlNpjd3aU3S549/o+Nhg/gb9+MQjJbBVvIyYDLJUG4yyUjcZBIN5SaTjMhNJtkIk0mGcpNJhnJ/AfFGwMr5jLszAAAAGmZjVEwAAAADAAAAKAAAACgAAAAAAAAAAAAoA+gAAF7oLYAAAAISZmRBVAAAAARYhe2Wv2pUQRTGv29YgpWIpIrBIqWmTiUWvoDgU/gAVnaWljZCKgvRSh8hhY0IQqwEbYQINhJUELSInp/NvXF2Mru5f1ZMcQ8M9+5v7p7z7Zn5Zq81IIAkaU3SpqQdYEvSJUnnbYekQ+CT7XeS9oHPKaVfQ2r1FTYDdoAHwPuIIB/A3LUZRxHxGrgLbEVE+hfCEnAjIvaaggwc3yPiXkSs9dWQFgwBGxHxBDjKO5THIlbyjN3Oa9TqFvcnhB53DTjoIqa8P4W9WVS3ZLMCRibulqTHks7lD9gWoGUMOGa2a2wuZ1u3xnKBKZtYt71bissF9WH5XCPyWVGv7N4xmxVQkgRcl3SxJq6IH7b3gVe230o6bHJuAFdtXwOuZHXC9lPb9zXftaUdTNkDqfmV7VJXOyPpi6SHkh5J+phSijJH8/2Z7W1JN5vPe5JeNvkHHTetQS4AB7WNDjwHLmfnWc11teJj2MmIiG3gRUT8BH5HxFfgDtB2fVjintGuX568bX80bt60vS7pg+1v+rslyk1eXlXJOYSdELiKqC31IGZVTJLF2G6UOcewOlB983dlXXJ3Yb3jbJjklLnJJNJkkk65u7Clif9rlO+DbSwS2mV58+Up31IGszNrkiF//L2Ohx75e+/HMbGyDi6FZyEmk4xlk0lWxCaTaCybTLJCNpmkV0wmGcsmk4xlfwBOLDVN6DRbngAAABpmY1RMAAAABQAAACgAAAAoAAAAAAAAAAAAKAPoAACzIl/6AAACImZkQVQAAAAGWIXtl7FqFFEYhc9/WYJIEAkpLBIQBEljsFEsxMrGl/ANfAorH0AsLcTCQhB8By2MgoWNYGUIIrGIKCl0z2eR2WUyO3d3ZmdiUsyBy8B3d/4597/3XNjQEgISsCLpckTcBK5I2oiIi5IsaR/4GhGfgZ2I2AP+ppS8zPcay/bI9i3gse0vtikP4NizGGPgI/DQ9pbtdCLmgDXgpe1x1ViLcWj7BbDd1mjKjOk88KzcobJyrMpL7DfwCFjNfF81Hmbg9AmsAuMmBqtbnWOF3gNXM2aSpBRN2gtcAA4kKSIEHJufx8pzGfZd0r2I+LDIR669qUjt65nW9STbbzm6FWY8NOpg0cUNSc+BOyX8S9JORLyR9EnSvqSRpEvANUm3JW1LWllUPyI2I2J3hhdOJ/dT9RyU763J3XdX0g1JPyS9AnZTSuXfTmvYThGxJemBpPuSzlUWrYiYvLsZEd8WLaQu+rXBacgmRhJwHXhXs70Ux2c0x0Nr5RYyV8B52084umb+2D4Antpey70zOYPl4lZ+28tzKcOs+qOSCpOStC5pHdiLiJ/FNivz7oyJPlS31UuxJiHpwqo1u7B6oB5C0gNrrRMrXNV/D8kSbMZEHxpCUmWnHpJ5hU9VowzPGW2yveXtqf5JWpqd2ZCMMubmGW51PbSo3/o8dlFvHZwLz4KGkHRlQ0h6YkNI1JUNIemRDSFppSEkXdkQkq7sH1IIk7I+UJFuAAAAGmZjVEwAAAAHAAAAKAAAACgAAAAAAAAAAAAoA+gAAF60jBMAAAIhZmRBVAAAAAhYhe2XsYoUQRRF3yuGZZANNjIwEDEQlQVhAwNBMBCD/QA/x8TISMTQwG8wNtzMDQ0UNFEwE2VZZBX1ng2mW3p66vV0d426QV9oZuYUU337Vd1XtFuBJCUzu2Rm983smpntuLvM7Avwwd3fA6/c/SPwK6WkkvuNMbgv6UgSkgCWPhv8DfAI2AVm/8QcsCXpU9NIj+uHpBfATSANuV8Krty4mVkCLlCprlpTzapm2Imkp5J2gvtbxsMKbH8ufZc0B47bBttLHbFKr4HdwEzWYF+lyuSD3J6L9mPAvgL3+ix5VN6QAVvAY+BkZY2H6Ri4m/PgY0tYq3ryq8Bld/9eTXzezG4At8xsz8zmPab67O633f1teyAKQ7QnusKzxIAZcAV4Uu/XpjIhOgS2OzxkN2Wv5Q6YmS2qLOm6pIN1JoGHGQ+DFT1Ip4A58Kw2FgTnCLiYmzyqQDTW1ZLCvsYiWM/XhGa/9d/x/SZQVw9NwDngMDpxGonOThJ19DGszf8wYA/4ljlx3gHNEyb75G1WFJIck5SAO8AB8BP4DbxkcbIUa1RIcqqMzoFsr6wbdXNyVb+1ZiwFTLZqtoStmNiEOkMyhLnF1TIrr0Z7zhKWB/aXQjKQdU78XxW9H0RG+yxvc3naL0mj2ZkNySww12V4UHsYMP/g/ViijVWwE54FTSEpZVNINsSmkFgpm0KyQTaFZJCmkJSyKSSl7BQhOgpnB8Oy1QAAABpmY1RMAAAACQAAACgAAAAoAAAAAAAAAAAAKAPoAACzx71PAAACG2ZkQVQAAAAKWIXtljFrFEEYhr9dDgkWkiJYpLCQYCGS4kp/guT3iOQvSAoLkRSWqfIDArEKIVhaWATTJT9ACCEGI76PzewxNzcze3uzd6bYF4a9e/Zu7t1vvnfmKluCgDUze2lmm8BFVVVXZnZfVZWW8XudBDwDvkqiGcAPYA8YA6P/alDSoW8uGH8kHQGvgbrLvHVixO7HPm9mVgM1cA341ZvIY7+BfWAjN1/gYQaG1/D1DHMGLxszvrGQOZ0D44SZqMF5lTQK7IWG/GpG2A2wM8+Sp8rbiQEbwLewVC26lfQm46FfAU8l7Uo6kXSXCY0/roFXsflSYUj1RC48U0zSCNgC3jsDM6EJ3n8HnmQ8JHtroeVu5MKzBXxpM+l6uHhps2lOCXgEfGwJzi2wHZs8VYHUvdyWlNzXgBHwqSU0B66KEx99pyW3h9bAGnCaCcwN8DxmLrejL8JCPmHANnDnL3XQl28tUrilhCTGJNXA50hImiqeUfDHYqGQhJI0lvQ3duK46jZn9epC4jPXi+eZsLzwjcgN864+D++lmHVg92Z2DFg4zOwX8NN/6rmfvAML+QwDNiVNnd1umT/ENuyVhcRnktaBXeDMheMd8Dj25b73w2KlYpwyqsi9kDX9Vdt0/xWxlZ4kXdgoYS5neJ4qts1VwnqpZm8VzMKHoCEkpWwISU9sCImVsiEkPbIhJJ00hKSUDSEpZf8AyetMZIxBStUAAAAaZmNUTAAAAAsAAAAoAAAAKAAAAAAAAAAAACgD6AAAXlFupgAAAm1mZEFUAAAADFiF7ZexitVAFIb/CeFWW22hsOUWsohYiZWPYLGVj+Bj2FpZiFj6DBZbCfoALmijIqulrYKwLBddPZ/FTcLc8cwkubl7ucU9MCR8k5z8OTP/TCLtYlqETTwEqCTdlHS/Qa8lvQ8h2NAcVaZ5/d71RQY8AC7MDDMD+GVmL4BrA/K5QuUc0/MS6/qAGvgGtOLi+ArczYhxBQ6NwULN7CCq3NKxOb8Ajs2sV0yuvJMYsJ+WzYk5cFzQcHUBVMDbtmKFdg7c8XLkzJCbEyXzeDkq4J6Z/UjLls5JM/tsZvsFDdm5tepwS5LMrAIOgVd9IoFnzbI0Kca6WZIEzIAnwN+ccYC5mf031N4a1NdXWpJKa2INPO0xzcumip2OdbultIZWTSXfFAwzB448caN2iAEs5R0DjoDzeKiTeflITuGuxCQeM7PKzJ47JmkFvjOz2skzKFYySRrALeDS2V0ws0vgwBue9GFenxVYek+WAV8kfQxh8VEVQlB0Xku6HQuxpik6xjztyzENZVVV/QFOAXlN0o06evv2LZUkXJUNujaEcAZ0lZPUipOk67G4OIFluCegj+Vytex7LC4SLmCvdYkn1Hvg2KHM5YlZFVewrV7LcjbOOXLI8MbTJRXlsVlcwaSaP1OBXjU8kX0sdnUqeIkBp5J+S5qlSUMIn9obS59W695dlhiL78XHzmL9AdhzirGWfbm4F6fMzGrgIXDG4ufqBDjsS7jxaKq5NO22wSQda/6T03laFLRqjBriEqvliysJHrOT5HJNYZs3yQC2HSbxYqtMUmI7k6yR7UwyKnYmmcp2JpnK/gFomMhycSo2XgAAABpmY1RMAAAADQAAACgAAAAoAAAAAAAAAAAAKAPoAACzmxzcAAACi2ZkQVQAAAAOWIXtmD+LU0EUxe88QsrFQlQsRGRBESuLLZb9AGLn9/BLWIjl1n4IsbCyFsTKQhFcEMRiG7FQF4uAOT8L52UnkzuTMX82QfbA403O/Hnn3TsndxKzc/znCPHeFfrl9MsZvzZuUBCSTuoK/Vbhcnh9TVxwBrUgFV3jigB2zOwgznljZj9DCNX5nU1HLW0vw3U5B9wGPnOKY+B+RcPZQVIHvJJEdv0C9rw5XdbO39jra+VmLkk3JI0AJJFC0hFwsaLBDeky6Z5ZG9gHxokosvZTYOnUFgXMA3BJ0kmf2lRk5EbAvrd4KQKlvhKXz5nhgMfU8QIYpDpW7ZbSi1oUOAReOkaZRFHSHU9c9c0X4HJ+wgG7wI801elelPTE24trN0kPoAMOc3HJnnwPDJ11mrCwSTKRt4BRZpK+PQaueenJH+b1qcLlc2rcJ+BdCH8rbgjBknZnZndTIbLTWiqHz/tKnLVyIQSFEF4D5l1mtttb2TtW9QstyrWOPYpiJ0QUZ2Z2ORWXLqAC7wmYx5XW6rmvqbgekdupuc5bbF56vbSWhPfcIInYJHr9feBMqgluSVm6XVrOjFfTCGbR/J4LrEUgH1PjUlfngnPuZhrBDMdT9S57QE1gq0lKa/UnmyFw4O3BiI+tC/4rqrW4JyTtpUevrNSNJF3xylXz74oKWr8XH8SSNyH6dgjhrZl926hJYrWYQpLuZ13X/Z4naFE0pRi4J2nsHLdOgOvpxFxgXjdXeQSbfI4mee4cWB/Fo5YbuDMzSRR5QdIh8AX4IOmhpGGuo6WirBXRLDPP34ZK0pmZsn8VZsZtxCQt3EYryYLc2Zqkkdu8SUrYGpPM485NskJuu0zyB2B0hGF2GNTOAAAAGmZjVEwAAAAPAAAAKAAAACgAAAAAAAAAAAAoA+gAAF4NzzUAAAKRZmRBVAAAABBYhe2Xv4oUQRDGq4flEBExPNRI5BLhOC4TfAIDX8B38SEEAwMDIyPxEcREEDkwEEzERBNNNFkOlaufwXWvvbVVPbO7s3uH+MEwzdddtTX1p6tW5D/+caT87oJ9dfbVOb8xbhIYUgt1wb40OAtvbyi3EjyPR1FYC5Nq7XmvrC3nybT0yAjc+UQSP8cKPM/UfB83OqLc6sz+UG6IbhERAS4CF4JzS2O0IgGuAi+AE+AYeARc9pRHHoj2Is7KhFz22isW8RSY1HaMnTfRh85xwD1VxXl+Agf1V9UJ3vvlA7gCbXHA7UKmlGaPiOwA94GuNq5WoAFvMYSLdGlK6XsxzsFdmb+nl8IoRQLsAceqCjALcVkDN6Lw9BWJDZ3tNkPT4pOIvCserEJc3oc2N7RaW97uRZwM5VJKCrwGxHtE5GYp5VYnWad39p5NKX0A5vIwGycicu1MiySvv3lFkrkrrdbkKesLrxfWyPDCdZXHZt7Lb43KuDVh94W3ThdrlMft1h40of5hDWx5wJ5pcXVVW4Mtd6v2YI2U0ue5fmd+oGXgMgNmqF9VJ8Cd4KIWEfk4VOGyGNqL94HfdlLIl/SJql5vKdwogE5Vn9Tdo+4mqnoE7EQG2lt/lUGhmTqqepDnvwgPXMGR0AxxngPfBKMWqjoF9mpBa2DkwXVGsDKkdqr6uOE5VPWZqnp2LXz1qgg9yOmIPzUFURs3BfbLeS/3xvh3Hw4KwC6nf45s1xARkZTSQ+C9tWNrRZINnOLjCLjkyW6tSFS1A57bwgC+5sJYkN1qkchfL76s8u4tcOjJej1mjDzs7cX5Ei6d4ktK6VdDdvudZCjOw7g1iNtqJ1mGO9Nxa0Vus51kWe4P852DkqrQbMcAAAAaZmNUTAAAABEAAAAoAAAAKAAAAAAAAAAAACgD6AAAsgx4JQAAAoRmZEFUAAAAEliF7ZixihRBEIZrhuU45IKNLjIwXOUEEQMDAxHxQcxMfABfwFCMxWcw8Q0MDhMNBEEwUcHkghPkXAStz+B61tra6t6e3Rk9xB+G6f27u7amqv+unhH5j38cTbq3mX4N+jUYPxo3yThiJ7WZfilwHlFfLbcRoojnsrAVJqYdRa9rey6aU7IjA3BnE43Ea6xDFBnLr+MGR25tta6/lquxXcP1xh8TSbQPWmGU+nJCGkUcQz99lOqNuBqRbMN5m70565zt1AzvUcPlbK1wwASYAjXVqYhBRQLsAA9U9VhVAd4BN42jiy0ityb6bDV+TpEDWuARqzgCzm/99BlUCwI4UNW5quIv4P5ExhNJ7diZiOw2TbMggK558SyI5Jt1rkPipqXSFBnTnlzJ8Y5rTcQW0evuk2BSyeGalNnl4p2KuH0bQRfNL97BUgT8mBLnS1+Ju2wjaNE0zYdOJB7rUt7ngJm1r6qtiNyI1mDC+1qDfVG1zQCXgO9+A0xbzE9VvRBtsEO8uERLZYlLVeJeqiKLQab9VkQ+/02RzETkrk+v+f1cRH6sc2hTFFMM7AIvouqR0jsHDuxE76Cvm1V1tYYDdlT1SVB7LZ4BOQGPJxLgHPA0EITFHLjm/aipKBsjnViuAC+tQy6tHfc4bT/FJ94mvd6mALeAkzVpBXgDTCUI1GgiUdVWVQ9zgjDXcRLGSjZHFUlad+twAtzJ2Ms+/TawDu4VBIGqHgG3+X28D/UwmkiSQA69INL9NTCrsTO2SK4Cn0zgvqrqQ2BP4qAsOPtlYbCPh8bewi6wLyLX5fQM+gr42Lanhxr3/0tzuxd3kWUHhzhujfZ9cLRKsgn3C/52wF5bBJvLAAAAGmZjVEwAAAATAAAAKAAAACgAAAAAAAAAAAAoA+gAAF+aq8wAAAJZZmRBVAAAABRYhe2XsYrVUBCG54TLZQuLZYvLrUW2EJFlS1/AZh9D8CXExkqsLGSrxdoH0EYsLMVCLFTstREbkeVyWfk/mwQOJ3POPXuTyCL3h5Dkn2QymZl/cmK2w3+O0O6bjF2OXc71k3GzTCDxTU3GbgUuhWer5baCl/FcFQZhFh172euOU867p+THRuCuJoL5PdbBy0zMb+JGR663msRey9X4ruEujX8mEm8OxsIo2XJCmkQcY7+9V+qtuBqRDOFSn0M4n7CdSMrYiWQod+VFEgcXG5XhU9RwOV89DjDA9VVS3+QADoDHwFdJ34HnwDK+Jjcy0s2zpVzq03tOHNwC+EAfr4F5ydkQVAsCeCgJbwNuzjLBlQK+7AIz6x9ogLshBOcSMzNbeuQY2azKoKRDSau0tm32AK57vTfGj4uSfY8DmhDCfTPbi5UbHX82s2/xP0mMXBZryhvPtfRlY+6Gmd1LyxudvwL+bApoWxRLDMwlvcmJQ9Ja0u34xjTA3JipHTVZDphJeuaMlRgvJeUEPJ1IgL00uEgQHdbAnTSOSb8k7Ti5BbyNA0pmXrc/lZRdqI76JQHmwBFwCpxvKCvAF+DAnESNmjlgCTyR9FHSRUEM8fYbODanmqOKBNiX5H1bSzgHTjLP6GFQNoEHmeZ3OeAXcAJ4bdYLanCpgXdp83fBOYL4BBzV+B1NJPhLpzSTK+ApsJ9JynQiAR4VhLACXgDH7SipWlSMLZJrks4krduEXQDv2948bHut2p+3EBu8ommDWJjZAvgRQvgZQuj+Q2L/zSbuLzt+LiwQUv54AAAAGmZjVEwAAAAVAAAAKAAAACgAAAAAAAAAAAAoA+gAALJQ2bYAAAI/ZmRBVAAAABZYhe2YwWoUQRCGq5phj0EkT+AhwqISJIfgA4gnyQt49+BrSE7iUXyOnMSDh9wDHhf1rgcFFV2Dpj4PmZFOp7rTuzM7CbI/NDP710x1dVf93T0rssZ/Dm2vIWM3x27O8yvjmkwg8UshY5cCl8Kz1XJLwZvxXBZ6oYnuvdnr7lPOe6fkRwbgriZU/Brr4M1MzF/EDY5cbYXEXsvV+K7hFsZoIvHWwVgYJVtOSCsRx9Cj91K9FFcjkj5c6rMP5xOyFkkZa5H05dYiqfBdwxUdXyqaDJ8LtCa9cXrSA+jS3JUVSZMJrhTwogfMldVjH1TPlpkFYAO4bmZZoY0uEiCY2S5waGYAmNkMeNAGega5JSNtni3lUp9ePwLcAD5zHl+BreyLA6GYYmBiZq/MjEx70j0/ukgAEZF9Vb1f6KNb/sYVSTtzz4CTLp9d/UW/j4HtNI6VigQIwBbwOg4oTmuEl6OJxMwaM5sCz4HvjiBSzIDN2E+61Vly9XDGZmZBVacicldEfrX0pojcBO6JyB1gUvDX4aeIPAohfJHkTJqOPOaKswg0wFNgntbSgpgDe14f3kiq6xB47NTQv/qq5H4Ae1HdDbOTcFr4H9I1rAskDTzzzAzYqelvYZEAE+D3kik9Bl6QCMKJJ09chHaTf1PYDbw2Bw6A3cLB4BzXRyRT4F2uvlqcAG+BfeAW0OT8eVz32ZkGV/VXbLvEbIjIQxG5DVxTVQO+qeonEXkPHKnqRxH5o6reJ22R+wvnORFcwRQ6GAAAABpmY1RMAAAAFwAAACgAAAAoAAAAAAAAAAAAKAPoAABfxgpfAAACUGZkQVQAAAAYWIXtVz2LFEEQfa+Z4DCQ44LDRDnEQDARMTAQLzfyD5gJ/gcT8QcYXCz+CRMxNRAxUxENDIQTPIw0OFRO6xnszNrbW907H7t3i8yDZoZX3TXVXfV6a4ER/zlYP0PGbo7dnPkr46pMIPGikLGjwKXwbG25XvBOPJeFQaiid+/0mveU89aU/GAJ3HqC8GusgXcyMb+IWzpytRUSe1uuje82XGccm0i8ezAWRsmWE9JKxLHs3Xup7sW1EckQLvU5hPMJjCIpYxTJUG4USQvfbbii4xNFleFzgbZJb5yetAHtza2tSKpMcKWAuzaYK6vHIVjaCRbJdcAokqHciYhE0pakcwC+AjgIIeS+ebwikVSZ2QNJ3yUdSTqU9MzMdhasXa1IzCxIOi/pqZmpgZk1462ZnfLWxu1WqV0CAEiqJN0guQvgh6QnAD6EEOKCnopEUpC0Q/IugDsANgv72CX5PIlnTsWWPOPgNgE8BnBLUrOB+yTfmNkLku8AHNRrtwFcknQNwBVJG4XAAAAk4yzO9KRxF4Jo0syQtBenJoXHdcC+mZ1OYvHimhrS0wuSvnQJrgN3aGY39S8rc9eMe6wOfkpqAp4zNhxJxPNIztgT7iPJ2yRfRq7cMss1n3GK7/XNn4Nfkh6Z2baXMY9beL2Y2YakvTol6jmONLlqrtcpbfXr0kokAEJ9n12sL9vXkv6U6ivCezN7KOmymVWJX+97U46YR6kOAUxEg0n9npF0leQFAGclbdX19Q3APoBPAF5J+kzyN0nvL22R+wsMyLLxbmCPhAAAABpmY1RMAAAAGQAAACgAAAAoAAAAAAAAAAAAKAPoAACytTsDAAACVGZkQVQAAAAaWIXtlrGKFEEQhv9qhuMQEblgwzMxOFCMDhEDfQVfwee5wEAMNDMQH0AwFWUjA5NDTpMLNBERUTTw7qQ+g90d27a7d3Zn91xkfxi6+aunpqa6/qKkNf5z2HgNBbtn7J45vzSuKQQSvxQKdlW4FDlbV24u5DJeuoVeaKJ9LnuTfcrl3qn50QK41YQpX2MT5DIT89O4haNUWyGxd+W6+O7CzYxTE0muD8bCqNlKQlqKOBb997mrnovrIpI+XOqzD5cntBZJHWuR9OXWIunguwtXdfxP0RT4UqBdrje+nnQAnZtbWZE0heBqAc86YC6tHvtgYRmskquAtUj6clWRAJK0BQzM7IOZfdGqiAQYAI+Bb8DJeN0DNguB5BwvRyTABvAcwN3T5xmwA5yKoOJxqx2XgB1JB5X3vkt6IOm+pEMziwu6FQkQgG1Jt8zsrKShpKGZHUfnqyJJA5QkAZeB/al/Z/ZD0itgaGb7kj6OTQPgkqTrknYlnZkEb2ZPJd02s09KEpPE0nLxFDLy4r4JvKYAd+/EVfAw+W5InmxcbXrdPQA33P3rvMHVOHc/AjbUQSS5mc5DCG5mL8zspqQ30qjlMGo77T7HTfbxmnJm9nNyWcla4orDZ3D3LeAecDTLHdbg7ncz387FUz30+5fcg7tfA564+1Gm9XR9ToBHwLlCYrJcrhjTog0atY0GuOLue+5+MK3mIrwF7rj7LtAkfnPfaznT38j1pT/AqEk3kraBq2Z2UdIFSefHRz5Lei/pUNJL4J2ZHY/7ZbWlpNwvQR+7fJe+q60AAAAaZmNUTAAAABsAAAAoAAAAKAAAAAAAAAAAACgD6AAAXyPo6gAAAk1mZEFUAAAAHFiF7Zi/ihRBEMarm2G5QEQMLj7O5GIRuUjEJ7jAx/AZTA3EQIx9AV9ARAxEMDAVETww0URQ1OA85PD7XbAzXG9vd0/P7NwfZD8Ytuer6e6aqv5qijVb4z+Ha399xq6EXYnnT41rMo6Ek3zGbgUuRspWy41CKuK5LKyEJhinoteNYy41p7SOTcBdTDhLn7EOqciEfB83OXJny0f2Wq5m7RpuMM5MJKk6GAqjZMsJ6VTEMfXbp1I9iqsRySpcvOYqXJqwtUjKWItkVW4tkoq1a7jiwueKJsPnHK1Jb5ieuAEdzV1YkTQZ50oOD20wpz2PkjywAcwKTvZhsggukMAN4I0kJP0FXgK7wLmLxwObwBeW8RvYseVyEpeV8N5s4tR64G4buaULeDUw5ZOlOHzrDeecdZeZheM7wEOgCSbXRDHeYww3B7ADHHZ5DaLX4R/wqDKS04sE8MCTKLWpdD8HtiWdqXA6FV8FPiaEsgBJPyU9ALZbhZ+aSMJ+UK2T183sNXCp762cc3/M7J2ZvTWz92b2vTXNzOyTmX12zsWfvrh76uWWDiewJ+mwEMEa7gC4L6mJ9ugTWKo7WoBvvyZ7kg5GOhdy94INzdLHoO5LkojkTWA/Vx8zNTO+/8ZJeRqNXPPpJW0CT4GjXMorcDkVgCFcsWQwL0G3gBeSjoZEVNIHTpQe71XFlar6wgU0zBuKx5L2+84h8AO4He0xSCRdmYmdK/4VK8k752ZmtgXsOueuAVvOuSvt3F82LzvPzOxrW2pGlZljtd8LIFRXbFMAAAAaZmNUTAAAAB0AAAAoAAAAKAAAAAAAAAAAACgD6AAAsumakAAAAkhmZEFUAAAAHliF7ZgxixRBFISrh2WjQwxE5JAL5AIjYxExMvIHiLl/wMDI7DAQf4GBiJE/wMBIROQiI7PLjgMjEwMxOFbZ+gxudh36Xs/N7MweIlvQTFNv+83rel3NsNIG/zlS/awKcQdxB79fGzcpFNJcVBXiauFyRLGu3EqIFC91YRAmjXmk3mKec9Gatjwagfs3kRSfsQUiZZr8WdzoKJ2tKot35brk7sL1xrmZJLoHm8Zoi5WMtBZzjL37qNUrcV1MMoTLcw7hYkIbk7RjY5Kh3MYkHXKfzdneAvZsfwY+AY9sbwWLzx+2K+A1p7EPXNJfZXKlSpwaXI7+HHDV9sw2+QD2eu329AsGm6SStJ1SmkpSSmk5atyzPdHqKmowB+zYnuf9rRWcAdfVH6Mq+E3SgSQBy1FjCjwE+t6Tzp6rc7VJngcmWeAHsKv+7R3vqgFulIxSt/odMAkSlTBaiyWpsj2pi8jPYBPPbHdVcUzuBMDt2hTLArMi58DTjkqOqqAkVUAFvMpaG7X7LbCzgnEGoZIk4LLtwxbDLPAd2GsUul6TNAnglu3jkmEyNX8C74HHti8G+cYxSV4xcN/2rCRfYCBs79u+oPigDzdJcwe2K9sPbB93LG4xfbIOBYskcMf2UWSWQsu/RDseA3mBS7mBbdtvgN8dzHMY5Ize05trvTI4uYLuAh9tz1sUfFnY8CAu/swJBjAFbgIvgKNMvQ/AlSzfYJMsP/yy4lr/iq0VnaaUrknaBb6mlA5SSr+yHM1cK3F/AGz2P3tNnIUhAAAAGmZjVEwAAAAfAAAAKAAAACgAAAAAAAAAAAAoA+gAAF9/SXkAAAKTZmRBVAAAACBYhe1YPYsUQRSsN0wgIheIkRwGIgYnioHBhbKRP+ISwR9hIP4Ff4SRgZgJhz/DQDgUFLzQQOU8dLXKYGfWvnev57NvEbFg2dnq6e439bpe9w7wH/84rPmuMu0M2hncf2ZcnQkk7VRl2tHBeURtQ7lJiBTPZWEW6uQ6Uq+99lzUp2scFOD+ThjiNdYiUibl+7jiyK2tyrUP5YaMPYQbjY2ZJKqDqTG62nJGOhNzlH76KNWTuCEmmcP5MUdzaXCQVJFsb/BVfepukBtrGCepkrQjaV/SkaTXkvYk1chjYyaBpIuS3ukkfkl6KKktHWNKDVyfeZykByQVfL6SvD7xuYuZpAZw08wQ4AKA2wDeOn5MeZhdcqomxZC0bkmuf7gOUQB93CyT1Kl6QZA/XSe67z6uK/BBXA3gS/sjSPUljD9Np3XNBzCaqwEcpsqlMLMbQechSvitbzJXS3pvZpCEIN27kmoz8+kbc8Ccd7IheY2kPJpSc0TyambiLhQrM5WZfQRwAKxUSx1tZufN7H5TsMdgrJnyXLPVPTkl4R98InnFPVlX9UfCeUzjJN0huczsKJL0omdvzk0wO8UAUEmqJb3ya9DhcZLqcnttP7eCpIWkpTNJGuBS0qOBShZVEFipWJF86oML0v2c5PYE48xCBQAkL0v60GGYFoeSbiFO0Ykxo3mmcGuC5F1JxznDJEruk+wrzmVM4iPW6kT9PSdfE+CS5DnEKpY3SfoEJCuSeySPM8G12IoGmKNWhjtNalXAF+2aDNL8ZpNG8QGu5Za0LelZWoIkfZZ0L7o/GDOaZzCXvlnIvjxs1NwFsDCzbwBeAjhwpxw/QZHjVvvHHS7ArtRt9BVwhBLrqphJfgM8n/kek72SAAAAABpmY1RMAAAAIQAAACgAAAAoAAAAAAAAAAAAKAPoAACxm/LxAAACjmZkQVQAAAAiWIXtVz1rFUEUPXcYJEWwkGAVVMRCYi8hpYiVpa3gb7DyD/gDrPwBVmJtbSPWglioKIJik0ZQkZjkHIu3+5x3M7NvPybPIB5YdvbM15l7587cBf7jH4c171CoZ6aemfbHxsWCkLRTKNSjg/PI1fXlRiFn8ZIXJiEm5Zz12rLncn26xkEF7mTCkN9jLXKWSfllXHUESUFSOknAYsAM4RbGnsABktYk3ZP0huQ7SfdJrpcW0nvgGiAZJD3QUTwiGTHMimmdbzOOk7RF8idJuWdf0s6INedcPYpr99ttM1szM6QPZsfQtRErb8GpXGhE3JQ0r0nLAA6SDh59OE7iJF2UdNi6VVLq4j1JWxkRq7tJJF01s9C4FACQlF8CeJtMXrpZQqEOrs1gLgK45Fya4nkI4cBxdO8uLkzlIoDzqfUcXmHa3TnZmsHMNiShECRfXIecgGXcpCCJwJ8950Wame80xL3LhPfiIoCv7UfG1RsYnk2nSYMXMJiLkj57VYngK5nOfSzho3o0F83sPTB36XyGxt3bkoKz7NAEc1pm09zDR7KE5qD+RvJcYeIuVL2LP5jZR2BmtTSizWwdwB2SQ2+JocFU5poE9WEm1WqxK2nTraxPolAvaSW5Q/Iwk2619/MTSTEzUAnVXAzM3HyK5DO/B933XfS3Yk1uBkk3JO27IEkF7pI8XbCYR1ULAk3iSvKxF5eU9yRd7imwOgIASNqU9KkQLD8kncXfCJKUkHQ9938i6akWf0e7UDdI0g+SgeSt5nhp8VrSBeQtdqxcLhEMzWF9xsy2Jf0C8CKE8D3TtoRqd3E6YPo+MSgdviWhK0+3lgkai2pBEpEX1yV4telWX3IgqlnwN7RIiDQZN1k6AAAAGmZjVEwAAAAjAAAAKAAAACgAAAAAAAAAAAAoA+gAAFwNIRgAAAJzZmRBVAAAACRYhe2Yv4sUMRzFX8JwHFfIsVgeVqIWIlaCcvj3+L9cYWlhZWFtISLY2FjZXSUWgoqlzdro4e73YzEzt5mQzM6P7BWyD8IOL5PJy/vON/nOSnv853DNr8/0W6LfEvfvjKsyQsJBPtOvHi5Gqm8Q5xI3CfDAgaQT59wK+OG9X0Wi4oeluKLwTZOZnQLn1FgDb4GFuq52xvRwfibXBXDfzJZmRtSeA7l3dae4nBRYmNmnxjnMjABLM7um7qriVcdciXYpzgPPQmGRwAvgViRCSock5fQcTgIeNSLi0LZtaWbHox9cAkAFvKEfZ5GQnIthX5mEaRLjIuMcwHvgcMSaU6GexjXv3tOUZY24ZfPuTXEj5sdzwKGZfQ4TIkqSs2B7GbP/xZjGAXfCxIiufwM3Z0w2G5WkB5Lk3ObUC64/SvoaTN6e0dbDFS0cKkm3gaR659wH59wqoi367eP8XK4CboTuRTjXdDfG3JvlvHNuASh0Mbj+GQ1ICdjG2RyukjbvXEJkPGhMeLcJH8RVwK9WYCLUYYnVDt4WnrC4HVIz9nJe0vc2xHGTdFcbF0On+rhwgngjHs1VzrkvUh3S0MFG4EMz8953TBuTJMrwwzkzuxeVVeFmvQROMhP3oehZfAR8S5VZDZ5MEFgMXtIfSe+kOknCJknAscYVCuGzU/ON58zs1MzWiVJrDTwesNDcBPNDLMmb2QHwKlFqvab+/CxXfI7nalB/ML2gLvv/mtlL4HrSn+0o6mCHbJLmaKKw4gj/m+krl1pc+UkSEiVRLMRVRlyf4Ks9SYaSI7G7JCkgriiqDL9PkqHcPknmcv8Axkas3cLPM2UAAAAaZmNUTAAAACUAAAAoAAAAKAAAAAAAAAAAACgD6AAAscdTYgAAAkVmZEFUAAAAJliF7Za/ahVBGMXPLEsQC7EQ6yBoISnEIqS0thAfxSewsRYLsfYpJJWFTbAVsRIVbRVFkhAheH4W2b137mR2793duZLiHhh29uz8Oft9c2ZG2mAawiqNgErSDUl3JP2RdBBC+LlOYSmqjiLgqu1nwDENbH8CduJ2ub6FuKxQSaqAu8AHIthuq/tRn2U/Xoo7A1DZfmD70DZxaUXaPgW2kgHXipli2w+BE/pxAtRaTMnCOBqezqUpFrBr+ziNXCaS++c6rwkzlcB12x8z6y3Fb9u7Ov/X0vloTC0zcZXtl7GwWGBUfwPcbrae+AfT9HQGYgQnAfeA08gEaUr/As+BS4MGLgGgBl4vMcXTjClyUYy/lTGM7T3bpz2GeJVsKcuQS/U4rll7L3Iha8T9ArZHRiPlh3PAZeBLzhDN84ntVQyxHpPY3omNkZjksIne2Mkmow4h7ElSCPOLTVR/K+lbNLmbunu4+JuSNoO5WtJNIKs+hHAQQnBmkPjZx1VTuRrYjqOX4J3GR2NI206uCiFcARRHMar/SDrkBCzjPIWrpfma6xC5Siq7uD7hK3G1pKP2JZPqLS2GfpX0tBOk62oUV0l636Y4KUeSPmse+jhSfVw8QboRD+eAW831KT1FHjcbdNlzdShnu7J9H/jaaPsOPLLP1udIlDuL2xfbNXCtubFcGLSuWHYStPjvJomJkiiW4lp5cX2Ch5wkXWNN4YpEs7xJCoorii7HbkyyKrcxSSFuYxJN5TYmKchdLJP8A/3pz6Swh8rMAAAAAElFTkSuQmCC";

var Viewer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Viewer, _React$PureComponent);

  var _super = _createSuper(Viewer);

  function Viewer() {
    var _this;

    (0, _classCallCheck2["default"])(this, Viewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlers", {
      undo: function undo() {
        return _this.props.onUndo();
      },
      redo: function redo() {
        return _this.props.onRedo();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Viewer, [{
    key: "componentWillUnmount",
    value: // eslint-disable-next-line class-methods-use-this
    function componentWillUnmount() {
      (0, _browser.nextFrame)(function () {
        (0, _state.clearCache)(); // clearPhylocanvasCache();
      }, 1000);
    }
  }, {
    key: "renderViewerContent",
    value: function renderViewerContent() {
      var props = this.props;

      if (props.isEmpty) {
        return /*#__PURE__*/_react["default"].createElement(_DropFiles["default"], {
          key: "empty"
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_DropFiles["default"], {
        key: "non-empty"
      }, /*#__PURE__*/_react["default"].createElement(_reactHotkeys.GlobalHotKeys, {
        keyMap: _shortcuts.keyMap,
        handlers: this.handlers
      }), /*#__PURE__*/_react["default"].createElement(_HeaderBar["default"], {
        appendNavButtons: props.components.appendNavButtons,
        drawerButton: props.components.drawerButton,
        prependNavButtons: props.components.prependNavButtons
      }), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        component: "main",
        className: "mr-viewer-main",
        elevation: 0,
        square: true
      }, /*#__PURE__*/_react["default"].createElement(_LayoutManager["default"], null)), props.children, /*#__PURE__*/_react["default"].createElement("img", {
        className: "mr-spinner",
        src: invertedSpinnerPng
      }));
    }
  }, {
    key: "renderDataFileLoaders",
    value: function renderDataFileLoaders() {
      var props = this.props; // Makes sure that all dataset files have been loaded (i.e. has a _content property)

      for (var _i = 0, _Object$values = Object.values(props.datasets || _constants.emptyObject); _i < _Object$values.length; _i++) {
        var dataset = _Object$values[_i];
        var datasetFileDescriptor = props.files[dataset.file];

        if (!datasetFileDescriptor._content) {
          return /*#__PURE__*/_react["default"].createElement(_FileLoader["default"], {
            key: datasetFileDescriptor.id,
            file: datasetFileDescriptor
          });
        }
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderViewerContent(), /*#__PURE__*/_react["default"].createElement(_BusyIndicator["default"], null), /*#__PURE__*/_react["default"].createElement(_PanesEditor["default"], null));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "microreact-viewer",
        id: "microreact-viewer"
      }, this.renderDataFileLoaders());
    }
  }]);
  return Viewer;
}(_react["default"].PureComponent);

Viewer.displayName = "Viewer";
Viewer.propTypes = {
  children: _propTypes["default"].node,
  components: _propTypes["default"].object,
  datasets: _propTypes["default"].object,
  files: _propTypes["default"].object,
  isEmpty: _propTypes["default"].bool.isRequired,
  onRedo: _propTypes["default"].func,
  onUndo: _propTypes["default"].func
};
Viewer.defaultProps = {
  components: _constants.emptyObject
};
var _default = Viewer;
exports["default"] = _default;

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = require("react-hotkeys");

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BusyIndicator = _interopRequireDefault(__webpack_require__(235));

var _state = __webpack_require__(3);

function mapStateToProps(state) {
  return {
    isBuzy: state.config.isBuzy
  };
}

var _default = (0, _state.connectToPresentState)(_BusyIndicator["default"], mapStateToProps);

exports["default"] = _default;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _CircularProgress = _interopRequireDefault(__webpack_require__(191));

__webpack_require__(236);

var BusyIndicator = /*#__PURE__*/_react["default"].memo(function (props) {
  if (props.isBuzy) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-busy-indicator"
    }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      size: 430,
      thickness: 1
    }));
  } else {
    return null;
  }
});

BusyIndicator.displayName = "BusyIndicator";
BusyIndicator.propTypes = {
  isBuzy: _propTypes["default"].bool.isRequired
};
var _default = BusyIndicator;
exports["default"] = _default;

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = __webpack_require__(12);

var _ui = __webpack_require__(27);

var _config = _interopRequireDefault(__webpack_require__(50));

var _state = __webpack_require__(3);

var _DropFiles = _interopRequireDefault(__webpack_require__(270));

function mapStateToProps(state) {
  var defaults = (0, _config["default"])(state);
  return {
    validFileExtensions: defaults.validFileExtensions || _constants.emptyArray,
    pendingFiles: state.config.pendingFiles || _constants.emptyArray
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddFiles: function onAddFiles(files, paneId) {
      return dispatch((0, _ui.addFiles)(files, paneId, false));
    },
    onCommitFiles: function onCommitFiles(files) {
      return dispatch((0, _ui.addFiles)(files, undefined, true));
    },
    onPendingFileChange: function onPendingFileChange(files) {
      return dispatch((0, _ui.setPendingFiles)(files));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_DropFiles["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = require("filesize");

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCsvFile = loadCsvFile;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _asyncIterator2 = _interopRequireDefault(__webpack_require__(124));

var _core = __webpack_require__(66);

var _csv = __webpack_require__(240);

var _datasets = __webpack_require__(65);

var _proxy = __webpack_require__(48);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// if any of these value occurs in csv, parse it to null;
var CsvNullValues = ["", "null", "NULL", "Null", "NaN", "\n"];

function cleanUpFalsyCsvValue(value) {
  // analyzer will set any fields to 'string' if there are empty values
  // which will be parsed as '' by d3.csv
  // here we parse empty data as null
  if (!value || CsvNullValues.includes(value)) {
    return null;
  } else {
    return value.trim ? value.trim() : value;
  }
}

function loadCsvFile(_x, _x2, _x3) {
  return _loadCsvFile.apply(this, arguments);
}

function _loadCsvFile() {
  _loadCsvFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fileBlobOrUrl, settings, onProgress) {
    var loaderOptions, rows, groups, index, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, batch, _iterator3, _step3, row, _i, _Object$keys, _key, keys, _iterator4, _step4, _field, key, _iterator5, _step5, field, _index, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _batch, _iterator6, _step6, _row, _i2, _Object$keys2, _key2;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loaderOptions = {
              fetch: (0, _proxy.getFetcher)(),
              csv: {
                dynamicTyping: false,
                // header: header ?? "auto",
                header: true,
                // If true, the first row of parsed data will be interpreted as field names
                rowFormat: "object",
                skipEmptyLines: true,
                // transform: cleanUpFalsyCsvValue,
                transformHeader: function transformHeader(x) {
                  return x.trim ? x.trim() : x;
                }
              }
            };

            if (!(settings !== null && settings !== void 0 && settings.aggregate)) {
              _context.next = 40;
              break;
            }

            groups = {};
            index = 1;
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context.prev = 6;
            _context.t0 = _asyncIterator2["default"];
            _context.next = 10;
            return (0, _core.loadInBatches)(fileBlobOrUrl, _csv.CSVLoader, loaderOptions);

          case 10:
            _context.t1 = _context.sent;
            _iterator = (0, _context.t0)(_context.t1);

          case 12:
            _context.next = 14;
            return _iterator.next();

          case 14:
            if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
              _context.next = 21;
              break;
            }

            batch = _step.value;
            _iterator3 = _createForOfIteratorHelper(batch.data);

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                row = _step3.value;

                for (_i = 0, _Object$keys = Object.keys(row); _i < _Object$keys.length; _i++) {
                  _key = _Object$keys[_i];
                  row[_key] = cleanUpFalsyCsvValue(row[_key]);
                }

                keys = [];
                _iterator4 = _createForOfIteratorHelper(settings.aggregate);

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    _field = _step4.value;
                    keys.push(row[_field]);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                key = keys.join();

                if (key in groups) {
                  groups[key]["--mr-scalar"] += 1;
                } else {
                  groups[key] = {
                    "--mr-scalar": 1,
                    "--mr-index": (index++).toString()
                  };
                  _iterator5 = _createForOfIteratorHelper(settings.aggregate);

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      field = _step5.value;
                      groups[key][field] = row[field];
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

          case 18:
            _iteratorAbruptCompletion = false;
            _context.next = 12;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t2 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return _iterator["return"]();

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(27);

          case 37:
            rows = Object.values(groups);
            _context.next = 76;
            break;

          case 40:
            _index = 1;
            rows = [];
            _iteratorAbruptCompletion2 = false;
            _didIteratorError2 = false;
            _context.prev = 44;
            _context.t3 = _asyncIterator2["default"];
            _context.next = 48;
            return (0, _core.loadInBatches)(fileBlobOrUrl, _csv.CSVLoader, loaderOptions);

          case 48:
            _context.t4 = _context.sent;
            _iterator2 = (0, _context.t3)(_context.t4);

          case 50:
            _context.next = 52;
            return _iterator2.next();

          case 52:
            if (!(_iteratorAbruptCompletion2 = !(_step2 = _context.sent).done)) {
              _context.next = 60;
              break;
            }

            _batch = _step2.value;
            onProgress && onProgress(_batch.bytesUsed);
            _iterator6 = _createForOfIteratorHelper(_batch.data);

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                _row = _step6.value;
                _row["--mr-index"] = _index.toString();

                for (_i2 = 0, _Object$keys2 = Object.keys(_row); _i2 < _Object$keys2.length; _i2++) {
                  _key2 = _Object$keys2[_i2];
                  _row[_key2] = cleanUpFalsyCsvValue(_row[_key2]);
                }

                rows.push(_row);
                _index += 1;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

          case 57:
            _iteratorAbruptCompletion2 = false;
            _context.next = 50;
            break;

          case 60:
            _context.next = 66;
            break;

          case 62:
            _context.prev = 62;
            _context.t5 = _context["catch"](44);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t5;

          case 66:
            _context.prev = 66;
            _context.prev = 67;

            if (!(_iteratorAbruptCompletion2 && _iterator2["return"] != null)) {
              _context.next = 71;
              break;
            }

            _context.next = 71;
            return _iterator2["return"]();

          case 71:
            _context.prev = 71;

            if (!_didIteratorError2) {
              _context.next = 74;
              break;
            }

            throw _iteratorError2;

          case 74:
            return _context.finish(71);

          case 75:
            return _context.finish(66);

          case 76:
            return _context.abrupt("return", (0, _datasets.createBasicDataset)(rows));

          case 77:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 23, 27, 37], [28,, 32, 36], [44, 62, 66, 76], [67,, 71, 75]]);
  }));
  return _loadCsvFile.apply(this, arguments);
}

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = require("@loaders.gl/csv");

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findGeoJSONPropertyNames = findGeoJSONPropertyNames;
exports.loadJsonFile = loadJsonFile;
exports.loadGeoJsonFile = loadGeoJsonFile;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _core = __webpack_require__(66);

var _json = __webpack_require__(242);

var _proxy = __webpack_require__(48);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function findGeoJSONPropertyNames(geoJson) {
  var properties = new Set();

  var _iterator = _createForOfIteratorHelper(geoJson.features),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var feature = _step.value;

      for (var _i = 0, _Object$keys = Object.keys(feature.properties); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        properties.add(key);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Array.from(properties);
}

function loadJsonFile(_x, _x2, _x3) {
  return _loadJsonFile.apply(this, arguments);
}

function _loadJsonFile() {
  _loadJsonFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fileBlobOrUrl, settings, onProgress) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _core.load)(fileBlobOrUrl, _json.JSONLoader, {
              fetch: (0, _proxy.getFetcher)()
            });

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadJsonFile.apply(this, arguments);
}

function loadGeoJsonFile(_x4, _x5, _x6) {
  return _loadGeoJsonFile.apply(this, arguments);
} // export async function loadGeoJsonFile(fileBlobOrUrl, settings, onProgress) {
//   const loaderOptions = {
//     fetch: getFetcher(),
//     metadata: true,
//   };
//   let data;
//   for await (const batch of await loadInBatches(fileBlobOrUrl, JSONLoader, loaderOptions)) {
//     // bytesUsed += batch.length;
//     onProgress && onProgress(batch.bytesUsed);
//     if (batch.batchType === "final-result") {
//       data = batch.container;
//     }
//   }
//   findGeoJSONPropertyNames(data);
//   return data;
// }


function _loadGeoJsonFile() {
  _loadGeoJsonFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fileBlobOrUrl, settings, onProgress) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return loadJsonFile(fileBlobOrUrl, settings, onProgress);

          case 2:
            data = _context2.sent;
            data.properties = findGeoJSONPropertyNames(data);
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadGeoJsonFile.apply(this, arguments);
}

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = require("@loaders.gl/json");

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTextFile = loadTextFile;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _awaitAsyncGenerator2 = _interopRequireDefault(__webpack_require__(244));

var _wrapAsyncGenerator2 = _interopRequireDefault(__webpack_require__(245));

var _asyncIterator2 = _interopRequireDefault(__webpack_require__(124));

var _core = __webpack_require__(66);

var _proxy = __webpack_require__(48);

var arrayBufferAsText = function arrayBufferAsText(arrayBuffer) {
  return new TextDecoder().decode(arrayBuffer);
};

var TextLoader = {
  name: "TEXT",
  extension: "txt",
  extensions: ["txt"],
  testText: null,
  parse: function () {
    var _parse = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(arrayBuffer) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", arrayBufferAsText(arrayBuffer));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function parse(_x) {
      return _parse.apply(this, arguments);
    }

    return parse;
  }(),
  parseSync: arrayBufferAsText,
  parseTextSync: function parseTextSync(x) {
    return x;
  },
  parseInBatches: function parseInBatches(asyncIterator, options) {
    return (0, _wrapAsyncGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, batch;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context2.prev = 2;
              _iterator = (0, _asyncIterator2["default"])(asyncIterator);

            case 4:
              _context2.next = 6;
              return (0, _awaitAsyncGenerator2["default"])(_iterator.next());

            case 6:
              if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                _context2.next = 13;
                break;
              }

              batch = _step.value;
              _context2.next = 10;
              return arrayBufferAsText(batch);

            case 10:
              _iteratorAbruptCompletion = false;
              _context2.next = 4;
              break;

            case 13:
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](2);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 19:
              _context2.prev = 19;
              _context2.prev = 20;

              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context2.next = 24;
                break;
              }

              _context2.next = 24;
              return (0, _awaitAsyncGenerator2["default"])(_iterator["return"]());

            case 24:
              _context2.prev = 24;

              if (!_didIteratorError) {
                _context2.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context2.finish(24);

            case 28:
              return _context2.finish(19);

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 15, 19, 29], [20,, 24, 28]]);
    }))();
  }
}; // export async function loadTextFile(input) {
//   const data = await load(
//     input,
//     TextLoader,
//     {
//       fetch: getFetcher(),
//     },
//   );
//   return data;
// }

function loadTextFile(_x2, _x3, _x4) {
  return _loadTextFile.apply(this, arguments);
}

function _loadTextFile() {
  _loadTextFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(fileBlobOrUrl, settings, onProgress) {
    var loaderOptions, data, bytesUsed, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, batch;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            loaderOptions = {
              fetch: (0, _proxy.getFetcher)()
            };
            data = [];
            bytesUsed = 0;
            _iteratorAbruptCompletion2 = false;
            _didIteratorError2 = false;
            _context3.prev = 5;
            _context3.t0 = _asyncIterator2["default"];
            _context3.next = 9;
            return (0, _core.loadInBatches)(fileBlobOrUrl, TextLoader, loaderOptions);

          case 9:
            _context3.t1 = _context3.sent;
            _iterator2 = (0, _context3.t0)(_context3.t1);

          case 11:
            _context3.next = 13;
            return _iterator2.next();

          case 13:
            if (!(_iteratorAbruptCompletion2 = !(_step2 = _context3.sent).done)) {
              _context3.next = 21;
              break;
            }

            batch = _step2.value;
            data.push(batch);
            bytesUsed += batch.length;
            onProgress && onProgress(bytesUsed);

          case 18:
            _iteratorAbruptCompletion2 = false;
            _context3.next = 11;
            break;

          case 21:
            _context3.next = 27;
            break;

          case 23:
            _context3.prev = 23;
            _context3.t2 = _context3["catch"](5);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t2;

          case 27:
            _context3.prev = 27;
            _context3.prev = 28;

            if (!(_iteratorAbruptCompletion2 && _iterator2["return"] != null)) {
              _context3.next = 32;
              break;
            }

            _context3.next = 32;
            return _iterator2["return"]();

          case 32:
            _context3.prev = 32;

            if (!_didIteratorError2) {
              _context3.next = 35;
              break;
            }

            throw _iteratorError2;

          case 35:
            return _context3.finish(32);

          case 36:
            return _context3.finish(27);

          case 37:
            return _context3.abrupt("return", data.join(""));

          case 38:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _loadTextFile.apply(this, arguments);
}

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/awaitAsyncGenerator");

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapAsyncGenerator");

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSpeadsheetFile = loadSpeadsheetFile;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _core = __webpack_require__(66);

var _proxy = __webpack_require__(48);

var _datasets = __webpack_require__(65);

// import { ExcelLoader } from "@loaders.gl/excel";
function readSpeadsheetFile(arrayBuffer, options) {
  var workbook = options.XLSX.read(arrayBuffer, // new Uint8Array(arrayBuffer),
  {
    type: "array"
  });
  var worksheet = workbook.Sheets[workbook.SheetNames[0]];
  var result = options.XLSX.utils.sheet_to_json(worksheet);
  return result;
}

var XlsxLoader = {
  name: "XLSX",
  extension: "xlsx",
  extensions: ["xlsx"],
  testText: null,
  parse: readSpeadsheetFile,
  parseSync: readSpeadsheetFile
};

function loadSpeadsheetFile(_x) {
  return _loadSpeadsheetFile.apply(this, arguments);
}

function _loadSpeadsheetFile() {
  _loadSpeadsheetFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(input) {
    var _yield$import, XLSX, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 446, 7));

          case 2:
            _yield$import = _context.sent;
            XLSX = _yield$import["default"];
            _context.next = 6;
            return (0, _core.load)(input, XlsxLoader, {
              fetch: (0, _proxy.getFetcher)(),
              XLSX: XLSX
            });

          case 6:
            data = _context.sent;
            return _context.abrupt("return", (0, _datasets.createBasicDataset)(data));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadSpeadsheetFile.apply(this, arguments);
}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseTimeout = promiseTimeout;

function promiseTimeout(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = require("@turf/centroid");

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_COLOR_RANGE = exports.COLOR_RANGES = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _colorbrewer = _interopRequireDefault(__webpack_require__(250));

var _customColorRanges = __webpack_require__(251);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Add colorbrewer color schemes (Data Science requirement)
// See http://colorbrewer2.org/
var colorBrewerMap = Object.entries(_colorbrewer["default"].schemeGroups).reduce(function (accu, _ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      type = _ref2[0],
      palettes = _ref2[1];

  return _objectSpread(_objectSpread({}, accu), palettes.reduce(function (group, name) {
    return _objectSpread(_objectSpread({}, group), {}, (0, _defineProperty2["default"])({}, name, type));
  }, {}));
}, {});
var colorRanges = (0, _toConsumableArray2["default"])(_customColorRanges.VizColorPalette);

for (var _i = 0, _Object$entries = Object.entries(_colorbrewer["default"]); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      keyName = _Object$entries$_i[0],
      colorScheme = _Object$entries$_i[1];

  if (keyName !== 'schemeGroups') {
    for (var _i2 = 0, _Object$entries2 = Object.entries(colorScheme); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
          lenKey = _Object$entries2$_i[0],
          colors = _Object$entries2$_i[1];

      colorRanges.push({
        name: "ColorBrewer ".concat(keyName, "-").concat(lenKey),
        type: colorBrewerMap[keyName],
        category: 'ColorBrewer',
        colors: colors
      });
    }
  }
}

var COLOR_RANGES = colorRanges;
exports.COLOR_RANGES = COLOR_RANGES;
var DEFAULT_COLOR_RANGE = colorRanges.find(function (_ref3) {
  var name = _ref3.name;
  return name === 'Global Warming';
}) || {
  name: 'Global Warming',
  type: 'SEQ',
  category: 'Uber',
  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
};
exports.DEFAULT_COLOR_RANGE = DEFAULT_COLOR_RANGE;

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = require("colorbrewer");

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VizColorPalette = exports.DataVizColors = exports.DIV = exports.QUA = exports.SIN = exports.SEQ = void 0;
// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 *
 * Great tool to create color palette
 * http://www.perbang.dk/rgbgradient/
 */
var SEQ = 'sequential';
exports.SEQ = SEQ;
var SIN = 'singlehue';
exports.SIN = SIN;
var QUA = 'qualitative';
exports.QUA = QUA;
var DIV = 'diverging';
exports.DIV = DIV;
var DataVizColors = {
  aqua: '#12939A',
  tumbleweed: '#DDB27C',
  mule_fawn: '#88572C',
  tree_poppy: '#FF991F',
  flame: '#F15C17',
  sapphire: '#223F9A',
  orchid: '#DA70BF',
  chathams_blue: '#125C77',
  med_aquamarine: '#4DC19C',
  crocodile: '#776E57',
  java: '#17B8BE',
  chalky: '#F6D18A',
  light_taupe: '#B7885E',
  peach_orange: '#FFCB99',
  apricot: '#F89570',
  portage: '#829AE3',
  light_orchid: '#E79FD5',
  blue_green: '#1E96BE',
  bermuda: '#89DAC1',
  cloudy: '#B3AD9E'
};
exports.DataVizColors = DataVizColors;
var quaColors = Object.values(DataVizColors);
var qualitativeColors = [{
  name: 'Uber Viz Qualitative 0',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 3)
}, {
  name: 'Uber Viz Qualitative 0.5',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 4)
}, {
  name: 'Uber Viz Qualitative 1',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 5)
}, {
  name: 'Uber Viz Qualitative 1.2',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 6)
}, {
  name: 'Uber Viz Qualitative 1.4',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 7)
}, {
  name: 'Uber Viz Qualitative 1.6',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 8)
}, {
  name: 'Uber Viz Qualitative 1.8',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 9)
}, {
  name: 'Uber Viz Qualitative 2',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 10)
}, {
  name: 'Uber Viz Qualitative 3',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 15)
}, {
  name: 'Uber Viz Qualitative 4',
  type: QUA,
  category: 'Uber',
  colors: quaColors.slice(0, 20)
}];
var sequantialColors = [{
  name: 'Uber Viz Sequential 1',
  type: SEQ,
  category: 'Uber',
  colors: ['#E6FAFA', '#89C6CA', '#00939C']
}, {
  name: 'Uber Viz Sequential 2',
  type: SEQ,
  category: 'Uber',
  colors: ['#E6FAFA', '#AAD7DA', '#68B4BB', '#00939C']
}, {
  name: 'Uber Viz Sequential 3',
  type: SEQ,
  category: 'Uber',
  colors: ['#E6FAFA', '#B8E0E1', '#89C6CA', '#56ACB3', '#00939C']
}, {
  name: 'Uber Viz Sequential 4',
  type: SEQ,
  category: 'Uber',
  colors: ['#E6FAFA', '#C1E5E6', '#9DD0D4', '#75BBC1', '#4BA7AF', '#00939C']
}, {
  name: 'Uber Viz Sequential 5',
  type: SEQ,
  category: 'Uber',
  colors: ['#E6FAFA', '#C1E5E6', '#9DD0D4', '#75BBC1', '#4BA7AF', '#00939C', '#108188']
}, {
  name: 'Uber Viz Sequential 6',
  type: SEQ,
  category: 'Uber',
  colors: ['#E6FAFA', '#C1E5E6', '#9DD0D4', '#75BBC1', '#4BA7AF', '#00939C', '#108188', '#0E7077']
}];
var divergingColors = [{
  name: 'Uber Viz Diverging 0',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#FEEEE8', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 0.5',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#EFBEAE', '#A2D4D7', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 1',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#EC9370', '#FEEEE8', '#85C4C8', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 1.5',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#DD7755', '#F8C0AA', '#BAE1E2', '#5DBABF', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 2',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#E17449', '#F5B097', '#FEEEE8', '#A2D4D7', '#65B3BA', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 2.5',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#D45F39', '#E68F71', '#F8C0AA', '#BAE1E2', '#7CC7CB', '#3EADB3', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 3',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#DA6436', '#EC9370', '#F8C0AA', '#FEEEE8', '#B2DCDF', '#65B3BA', '#49A6AE', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 3.5',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#D0532B', '#DD7755', '#EB9C80', '#F8C0AA', '#BAE1E2', '#8CCED1', '#5DBABF', '#2FA7AE', '#00939C'].reverse()
}, {
  name: 'Uber Viz Diverging 4',
  type: DIV,
  category: 'Uber',
  colors: ['#C22E00', '#D55A2B', '#E68059', '#F2A587', '#F8C0AA', '#FEEEE8', '#BAE1E2', '#97CED1', '#71BABF', '#49A6AE', '#00939C'].reverse()
}];
var customPalette = [{
  name: 'UberPool',
  type: DIV,
  category: 'Uber',
  colors: ['#223F9A', '#2C51BE', '#482BBD', '#7A0DA6', '#AE0E7F', '#CF1750', '#E31A1A', '#FD7900', '#FAC200', '#FAE300']
}, {
  name: 'UberPool 9',
  type: DIV,
  category: 'Uber',
  colors: ['#2C51BE', '#482BBD', '#7A0DA6', '#AE0E7F', '#CF1750', '#E31A1A', '#FD7900', '#FAC200', '#FAE300']
}, {
  name: 'UberPool 8',
  type: DIV,
  category: 'Uber',
  colors: ['#213E9A', '#3C1FA7', '#811CB5', '#C318B0', '#D01367', '#DE0F0E', '#EC7007', '#F9E200']
}, {
  name: 'UberPool 7',
  type: DIV,
  category: 'Uber',
  colors: ['#213E9A', '#461FA9', '#9B1BBA', '#CA168E', '#DA102C', '#E95E08', '#F9E200']
}, {
  name: 'UberPool 6',
  type: DIV,
  category: 'Uber',
  colors: ['#213E9A', '#551EAD', '#C019BD', '#D31256', '#E6470A', '#F9E200']
}, {
  name: 'UberPool 5',
  type: DIV,
  category: 'Uber',
  colors: ['#213E9A', '#6E1DB2', '#CA168E', '#E2260C', '#F9E200']
}, {
  name: 'UberPool 4',
  type: DIV,
  category: 'Uber',
  colors: ['#213E9A', '#9B1BBA', '#DA102C', '#F9E200']
}, {
  name: 'UberPool 3',
  type: DIV,
  category: 'Uber',
  colors: ['#213E9A', '#CA168E', '#F9E200']
}, {
  name: 'Ice And Fire 3',
  type: DIV,
  category: 'Uber',
  colors: ['#0198BD', '#FAFEB3', '#D50255']
}, {
  name: 'Ice And Fire 4',
  type: DIV,
  category: 'Uber',
  colors: ['#0198BD', '#E8FEB5', '#FEAD54', '#D50255']
}, {
  name: 'Ice And Fire 5',
  type: DIV,
  category: 'Uber',
  colors: ['#0198BD', '#49E3CE', '#FAFEB3', '#FEAD54', '#D50255']
}, {
  name: 'Ice And Fire',
  type: DIV,
  category: 'Uber',
  colors: ['#0198BD', '#49E3CE', '#E8FEB5', '#FEEDB1', '#FEAD54', '#D50255']
}, {
  name: 'Ice And Fire 7',
  type: DIV,
  category: 'Uber',
  colors: ['#0198BD', '#54BAB9', '#A7DCB6', '#FAFEB3', '#FCD583', '#FEAD54', '#D50255']
}, {
  name: 'Ice And Fire 8',
  type: DIV,
  category: 'Uber',
  colors: ['#007A99', '#0198BD', '#49E3CE', '#E8FEB5', '#FEEDB1', '#FEAD54', '#D50255', '#7F1941']
}, {
  name: 'Global Warming 3',
  type: SEQ,
  category: 'Uber',
  colors: ['#5A1846', '#C70039', '#FFC300']
}, {
  name: 'Global Warming 4',
  type: SEQ,
  category: 'Uber',
  colors: ['#5A1846', '#831A3D', '#E3611C', '#FFC300']
}, {
  name: 'Global Warming 5',
  type: SEQ,
  category: 'Uber',
  colors: ['#5A1846', '#831A3D', '#AC1C17', '#D55D0E', '#FFC300']
}, {
  name: 'Global Warming',
  type: SEQ,
  category: 'Uber',
  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
}, {
  name: 'Global Warming 7',
  type: SEQ,
  category: 'Uber',
  colors: ['#5A1846', '#751A43', '#911932', '#AC1C17', '#C84411', '#E37B0A', '#FFC300']
}, {
  name: 'Global Warming 8',
  type: SEQ,
  category: 'Uber',
  colors: ['#4C0035', '#650031', '#7F0023', '#98000A', '#B21800', '#CB4600', '#E57F00', '#FFC300']
}, {
  name: 'Sunrise 3',
  type: SEQ,
  category: 'Uber',
  colors: ['#355C7D', '#C06C84', '#F8B195']
}, {
  name: 'Sunrise 4',
  type: SEQ,
  category: 'Uber',
  colors: ['#355C7D', '#9A627C', '#C86A7E', '#F8B195']
}, {
  name: 'Sunrise',
  type: SEQ,
  category: 'Uber',
  colors: ['#355C7D', '#6C5B7B', '#C06C84', '#F67280', '#F8B195']
}, {
  name: 'Sunrise 6',
  type: SEQ,
  category: 'Uber',
  colors: ['#355C7D', '#63617F', '#916681', '#D88185', '#E8998D', '#F8B195']
}, {
  name: 'Sunrise 7',
  type: SEQ,
  category: 'Uber',
  colors: ['#355C7D', '#63617F', '#916681', '#C06C84', '#D28389', '#E59A8F', '#F8B195']
}, {
  name: 'Sunrise 8',
  type: SEQ,
  category: 'Uber',
  colors: ['#194266', '#355C7D', '#63617F', '#916681', '#C06C84', '#D28389', '#E59A8F', '#F8B195']
}, {
  name: 'Ocean Green 3',
  type: SEQ,
  category: 'Uber',
  colors: ['#3A748A', '#3EACA8', '#E5EEc1']
}, {
  name: 'Ocean Green 4',
  type: SEQ,
  category: 'Uber',
  colors: ['#547A82', '#3EACA8', '#A2D4AB', '#E5EEc1']
}, {
  name: 'Ocean Green 5',
  type: SEQ,
  category: 'Uber',
  colors: ['#3A748A', '#54A38F', '#73BC84', '#A9D597', '#E5EEc1']
}, {
  name: 'Ocean Green 6',
  type: SEQ,
  category: 'Uber',
  colors: ['#37535E', '#3A748A', '#4095B5', '#52AEC9', '#72BFC4', '#93CFBF']
}, {
  name: 'Ocean Green 7',
  type: SEQ,
  category: 'Uber',
  colors: ['#3A748A', '#4B9A95', '#5EAB8B', '#73BC84', '#92CC8B', '#BEDDA5', '#E5EEc1']
}, {
  name: 'Ocean Green 8',
  type: SEQ,
  category: 'Uber',
  colors: ['#37535E', '#3A748A', '#4B9A95', '#5EAB8B', '#73BC84', '#92CC8B', '#BEDDA5', '#E5EEc1']
}, {
  name: 'Pink Wine 3',
  type: SEQ,
  category: 'Uber',
  colors: ['#50315E', '#956485', '#EDD1CA']
}, {
  name: 'Pink Wine 4',
  type: SEQ,
  category: 'Uber',
  colors: ['#50315E', '#774976', '#B28294', '#EDD1CA']
}, {
  name: 'Pink Wine 5',
  type: SEQ,
  category: 'Uber',
  colors: ['#50315E', '#643D68', '#956485', '#C1939D', '#EDD1CA']
}, {
  name: 'Pink Wine 6',
  type: SEQ,
  category: 'Uber',
  colors: ['#2C1E3D', '#573660', '#83537C', '#A6758E', '#C99DA4', '#EDD1CA']
}, {
  name: 'Pink Wine 7',
  type: SEQ,
  category: 'Uber',
  colors: ['#2C1E3D', '#4F315A', '#774976', '#956485', '#B28294', '#CFA4A8', '#EDD1CA']
}, {
  name: 'Pink Wine',
  type: SEQ,
  category: 'Uber',
  colors: ['#2C1E3D', '#50315E', '#764476', '#9A5B88', '#B77495', '#CF91A3', '#E0B1B3', '#EDD1CA']
}, {
  name: 'Purple Blue Yellow 3',
  type: SEQ,
  category: 'Uber',
  colors: ['#2B1E3E', '#5EA28D', '#D6DEBF']
}, {
  name: 'Purple Blue Yellow 4',
  type: SEQ,
  category: 'Uber',
  colors: ['#2B1E3E', '#466373', '#7BA889', '#D6DEBF']
}, {
  name: 'Purple Blue Yellow 5',
  type: SEQ,
  category: 'Uber',
  colors: ['#2B1E3E', '#3A4B66', '#5F8E86', '#8BB68D', '#D6DEBF']
}, {
  name: 'Purple Blue Yellow 6',
  type: SEQ,
  category: 'Uber',
  colors: ['#2B1E3E', '#343D5E', '#4F777E', '#709E87', '#99BE95', '#D6DEBF']
}, {
  name: 'Purple Blue Yellow 7',
  type: SEQ,
  category: 'Uber',
  colors: ['#2B1E3E', '#303558', '#466373', '#5F8E86', '#7BA889', '#A4C39B', '#D6DEBF']
}, {
  name: 'Purple Blue Yellow',
  type: SEQ,
  category: 'Uber',
  colors: ['#2B1E3E', '#383C65', '#3E5F7E', '#49838A', '#5EA28D', '#82BB92', '#AECEA1', '#D6DEBF']
}];
var VizColorPalette = [].concat(divergingColors, sequantialColors, qualitativeColors, customPalette);
exports.VizColorPalette = VizColorPalette;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _reselect = __webpack_require__(10);

var _constants = __webpack_require__(12);

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

var shapePalettesSelector = (0, _reselect.createSelector)(function (state) {
  var _fullDatasetSelector;

  return ((_fullDatasetSelector = (0, _fullDataset["default"])(state)) === null || _fullDatasetSelector === void 0 ? void 0 : _fullDatasetSelector.shapePalettes) || _constants.emptyArray;
}, function (state) {
  return state.styles.shapePalettes || _constants.emptyArray;
}, function (dataShapePalettes, customShapePalettes) {
  if (dataShapePalettes || customShapePalettes) {
    return [].concat((0, _toConsumableArray2["default"])(dataShapePalettes), (0, _toConsumableArray2["default"])(customShapePalettes));
  } else {
    return _constants.emptyArray;
  }
});
var _default = shapePalettesSelector;
exports["default"] = _default;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _geometry = __webpack_require__(102);

var _state = __webpack_require__(3);

var _sets = __webpack_require__(44);

var _rowsWithPositionField = _interopRequireDefault(__webpack_require__(129));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mapIdsSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state, mapId) {
  return (0, _rowsWithPositionField["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).path;
}, function (rows, positionFieldName, path) {
  if (!positionFieldName) {
    return undefined;
  }

  if (path === null) {
    return undefined;
  } // find which markers (and row IDs) are inside the region


  var ids = new Set();

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;

      if (row[positionFieldName] && (0, _geometry.isPointInPolygon)(row[positionFieldName], path)) {
        ids.add(row[0]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return ids;
});

var mapIds = function mapIds(state, mapId) {
  if ((0, _mapState["default"])(state, mapId).path) {
    return mapIdsSelector(state, mapId);
  } else {
    return undefined;
  }
};

var filteredMapIdsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.maps;
}, mapIds, function (sets) {
  return (0, _sets.intersect)(sets.filter(function (x) {
    return x !== undefined;
  }));
});
var _default = filteredMapIdsSelector;
exports["default"] = _default;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.praseCode = praseCode;
exports.convertDMSToDD = convertDMSToDD;

var _iso3166Codes = _interopRequireDefault(__webpack_require__(255));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var codes = new Map();

var _iterator = _createForOfIteratorHelper(_iso3166Codes["default"]),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var row = _step.value;
    var code = row.shift();
    codes.set(code, [[row[0], row[1]], row[2]]);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function praseCode(code) {
  if (code) {
    return codes.get(code);
  }

  return undefined;
}

function convertDMSToDD(dms) {
  var parts = dms.split(/[^\d+(\,\d+)\d+(\.\d+)?\w]+/);
  var degrees = parseFloat(parts[0]);
  var minutes = parseFloat(parts[1]);
  var seconds = parseFloat(parts[2].replace(",", "."));
  var direction = parts[3];
  var dd = degrees + minutes / 60 + seconds / (60 * 60);

  if (direction === "S" || direction === "W") {
    dd *= -1;
  } // Don't do anything for N or E


  return dd;
}

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("microreact-data/iso-3166-codes");

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _sets = __webpack_require__(44);

var _trees = __webpack_require__(89);

var _rowsByLabel = _interopRequireDefault(__webpack_require__(183));

var _treeFile = _interopRequireDefault(__webpack_require__(110));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function labelsToRowIds(labels, rowsByLabel) {
  var ids = new Set();

  var _iterator = _createForOfIteratorHelper(labels),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var label = _step.value;

      var _iterator2 = _createForOfIteratorHelper(rowsByLabel.get(label) || []),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          ids.add(row[0]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return ids;
}

var treeIdsSelector = (0, _state.createKeyedStateSelector)(function (state, treeId) {
  return state.trees[treeId].ids;
}, function (state, treeId) {
  return state.trees[treeId].ids && (0, _rowsByLabel["default"])(state, treeId);
}, function (labels, rowsByLabel) {
  if (labels && rowsByLabel) {
    return labelsToRowIds(labels, rowsByLabel);
  } else {
    return undefined;
  }
});
var subtreeIdsSelector = (0, _state.createKeyedStateSelector)(function (state, treeId) {
  return state.trees[treeId].subtreeIds;
}, function (state, treeId) {
  return state.trees[treeId].subtreeIds && (0, _rowsByLabel["default"])(state, treeId);
}, function (labels, rowsByLabel) {
  if (labels && rowsByLabel) {
    return labelsToRowIds(labels, rowsByLabel);
  } else {
    return undefined;
  }
});
var allLeafIdsSelector = (0, _state.createKeyedStateSelector)(function (state, treeId) {
  var _treeFileSelector;

  return (_treeFileSelector = (0, _treeFile["default"])(state, treeId)) === null || _treeFileSelector === void 0 ? void 0 : _treeFileSelector._content;
}, function (state, treeId) {
  return (0, _rowsByLabel["default"])(state, treeId);
}, function (treeFileContent, rowsByLabel) {
  if (treeFileContent && rowsByLabel) {
    var labels = (0, _trees.newickLabels)(treeFileContent);
    return labelsToRowIds(labels, rowsByLabel);
  } else {
    return undefined;
  }
});

var treeActiveIdsSelector = function treeActiveIdsSelector(state, treeId) {
  var ids = treeIdsSelector(state, treeId);

  if (ids) {
    return ids;
  }

  var subtreeIds = subtreeIdsSelector(state, treeId);

  if (subtreeIds) {
    return subtreeIds;
  }

  if (state.trees[treeId].hideOrphanDataRows) {
    return allLeafIdsSelector(state, treeId);
  }

  return undefined;
};

var filteredTreeIdsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.trees;
}, treeActiveIdsSelector, function (sets) {
  return (0, _sets.intersect)(sets.filter(function (x) {
    return x !== undefined;
  }));
});
var _default = filteredTreeIdsSelector;
exports["default"] = _default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _sets = __webpack_require__(44);

var _geometry = __webpack_require__(102);

var _layout = _interopRequireDefault(__webpack_require__(184));

var _rowsByNodeId = _interopRequireDefault(__webpack_require__(197));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var nodeIdsSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _layout["default"])(state, networkId);
}, function (state, networkId) {
  return state.networks[networkId].path;
}, function (layout, path) {
  if (layout === null || path === null) {
    return undefined;
  }

  var ids = new Set();

  for (var _i = 0, _Object$keys = Object.keys(layout); _i < _Object$keys.length; _i++) {
    var nodeId = _Object$keys[_i];
    var point = layout[nodeId];

    if (point.x !== undefined && point.y !== undefined && (0, _geometry.isPointInPolygon)(point, path)) {
      ids.add(nodeId);
    }
  }

  return ids;
});
var networkIdsSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return nodeIdsSelector(state, networkId);
}, function (state, networkId) {
  return (0, _rowsByNodeId["default"])(state, networkId);
}, function (nodeIds, rowsByNodeId) {
  if (nodeIds) {
    var ids = new Set();

    var _iterator = _createForOfIteratorHelper(nodeIds),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nodeId = _step.value;
        var rows = rowsByNodeId.get(nodeId);

        if (rows) {
          var _iterator2 = _createForOfIteratorHelper(rows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var row = _step2.value;
              ids.add(row[0]);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return ids;
  } else {
    return undefined;
  }
});
var filteredNetworkIdsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.networks;
}, networkIdsSelector, function (sets) {
  return (0, _sets.intersect)(sets.filter(function (x) {
    return x !== undefined;
  }));
});
var _default = filteredNetworkIdsSelector;
exports["default"] = _default;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _baseGraph = _interopRequireDefault(__webpack_require__(172));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var originalLayoutSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _baseGraph["default"])(state, networkId);
}, function (parsedData) {
  if (parsedData === null) {
    return null;
  }

  var layout = {};

  var _iterator = _createForOfIteratorHelper(parsedData.nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.x && node.y) {
        layout[node.id] = node;
      } else {
        return null;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return layout;
});
var _default = originalLayoutSelector;
exports["default"] = _default;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _state = __webpack_require__(3);

var _sets = __webpack_require__(44);

var _bounds2 = _interopRequireDefault(__webpack_require__(198));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _rowsWithDateField = _interopRequireDefault(__webpack_require__(105));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var timelineActiveIds = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _rowsWithDateField["default"])(state, timelineId);
}, function (state, timelineId) {
  return (0, _bounds2["default"])(state, timelineId);
}, function (state) {
  return (0, _rows["default"])(state);
}, function (_ref, bounds, rows) {
  var dateFieldName = _ref.dateFieldName;

  if (!bounds) {
    return undefined;
  }

  var _bounds = (0, _slicedToArray2["default"])(bounds, 2),
      lowerTimestamp = _bounds[0],
      upperTimestamp = _bounds[1]; // find which data points (and row IDs) are inside the filter interval


  var ids = new Set();

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _row$dateFieldName;

      var row = _step.value;
      var timestamp = (_row$dateFieldName = row[dateFieldName]) === null || _row$dateFieldName === void 0 ? void 0 : _row$dateFieldName.valueOf();

      if (timestamp && timestamp >= lowerTimestamp && timestamp <= upperTimestamp) {
        ids.add(row[0]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return ids;
});
var filteredTimelineIdsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.timelines;
}, timelineActiveIds, function (sets) {
  return (0, _sets.intersect)(sets.filter(function (x) {
    return x !== undefined;
  }));
});
var _default = filteredTimelineIdsSelector;
exports["default"] = _default;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _expressions = __webpack_require__(131);

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filteredSearchIdsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _dataColumns["default"])(state);
}, function (state) {
  return state.filters.searchOperator;
}, function (state) {
  return state.filters.searchValue;
}, function (dataRows, dataColumns, searchOperator, searchValue) {
  if (searchValue) {
    var predicate = (0, _expressions.makePredicate)(searchOperator, [searchValue]);
    var rowIds = new Set();

    var _iterator = _createForOfIteratorHelper(dataColumns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dataColumn = _step.value;

        var _iterator2 = _createForOfIteratorHelper(dataRows),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var row = _step2.value;

            if (!rowIds.has(row[0]) && row[dataColumn.name] !== null && predicate(row[dataColumn.name])) {
              rowIds.add(row[0]);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return rowIds;
  } else {
    return undefined;
  }
});
var _default = filteredSearchIdsSelector;
exports["default"] = _default;

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = require("escape-string-regexp");

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _sets = __webpack_require__(44);

var _filteredFieldIds = _interopRequireDefault(__webpack_require__(185));

var filteredDataIdsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.filters.dataFilters.map(function (x) {
    return x.field;
  });
}, _filteredFieldIds["default"], function (sets) {
  return (0, _sets.intersect)(sets.filter(function (x) {
    return x !== undefined;
  }));
});
var _default = filteredDataIdsSelector;
exports["default"] = _default;

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = require("downloadjs");

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layoutModel = _interopRequireDefault(__webpack_require__(40));

var paneNameSelector = function paneNameSelector(state, paneId) {
  var model = (0, _layoutModel["default"])(state);
  var node = model.getNodeById(paneId);
  return node._attributes.name;
};

var _default = paneNameSelector;
exports["default"] = _default;

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = require("postal");

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = require("lodash.orderby");

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var styleSelector = function styleSelector(state, timelineId) {
  return state.timelines[timelineId].style;
};

var _default = styleSelector;
exports["default"] = _default;

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _reactFileDrop = __webpack_require__(271);

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(272);

var _propTypes2 = __webpack_require__(14);

var _FilesQueue = _interopRequireDefault(__webpack_require__(273));

var _DropFilesGraphics = _interopRequireDefault(__webpack_require__(289));

var _PlusFloatingActingButton = _interopRequireDefault(__webpack_require__(295));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DropFiles = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DropFiles, _React$PureComponent);

  var _super = _createSuper(DropFiles);

  function DropFiles(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DropFiles);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      dragOver: false,
      fileLoading: false,
      files: [],
      errorFiles: [],
      validFileExtensions: _this.props.validFileExtensions.filter(function (x) {
        return !_this.props.fileKind || x.kind === _this.props.fileKind;
      }).map(function (x) {
        return x.extension;
      })
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBrowseFiles", function () {
      _this._fileInput.current.value = null;

      _this._fileInput.current.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleAddUrls", function () {
      _this.setState({
        showFilesDialog: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCloseUrls", function () {
      var _this$props$pendingFi;

      if (_this.state.showFilesDialog) {
        _this.setState({
          showFilesDialog: false
        });
      }

      if ((_this$props$pendingFi = _this.props.pendingFiles) !== null && _this$props$pendingFi !== void 0 && _this$props$pendingFi.length) {
        _this.props.onPendingFileChange([]);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (_ref) {
      var files = _ref.target.files;

      if (!files) {
        return;
      }

      _this._handleFileInput(files);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
      var fileExt = _this.state.validFileExtensions.find(function (ext) {
        return filename.endsWith(ext);
      });

      return Boolean(fileExt);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (files, e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }

      var nextState = {
        files: [],
        errorFiles: [],
        dragOver: false
      };

      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file && _this._isValidFileType(file.name)) {
          nextState.files.push(file);
        } else {
          nextState.files.push(file);
          nextState.errorFiles.push(file.name);
        }
      }

      _this.setState(nextState, function () {
        if (nextState.files.length) {
          _this.props.onAddFiles(nextState.files, _this.props.paneId);
        }
      });
    });
    _this._fileInput = /*#__PURE__*/_react["default"].createRef();
    _this.frame = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(DropFiles, [{
    key: "renderMessage",
    value: function renderMessage() {
      var _this$state = this.state,
          errorFiles = _this$state.errorFiles,
          files = _this$state.files;

      if (errorFiles.length) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "File ".concat(errorFiles.join(", "), " is not supported."));
      } else if (this.props.fileLoading && files.length) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "file-uploader__message"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "loading-action"
        }, "Uploading"), /*#__PURE__*/_react["default"].createElement("div", null, files.map(function (f, i) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, f.name);
        }), "..."), /*#__PURE__*/_react["default"].createElement("div", {
          className: "loading-spinner"
        }, "Loading..."));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _props$pendingFiles,
          _this2 = this;

      var props = this.props;
      var hasFiles = ((_props$pendingFiles = props.pendingFiles) === null || _props$pendingFiles === void 0 ? void 0 : _props$pendingFiles.length) > 0;
      return /*#__PURE__*/_react["default"].createElement(_reactFileDrop.FileDrop // frame={this.frame.current || document}
      , {
        className: (0, _classnames["default"])("mr-drop-files", {
          "is-drag-over": this.state.dragOver
        }),
        targetAlwaysVisible: true,
        onDragOver: function onDragOver() {
          return _this2.setState({
            dragOver: true
          });
        },
        onDragLeave: function onDragLeave() {
          return _this2.setState({
            dragOver: false
          });
        },
        onDrop: this._handleFileInput
      }, this.props.children ? this.props.children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-drop-box"
      }, /*#__PURE__*/_react["default"].createElement(_DropFilesGraphics["default"], {
        fileKind: props.fileKind,
        onAddUrls: this.handleAddUrls,
        onBrowseFiles: this.handleBrowseFiles,
        validFileExtensions: this.state.validFileExtensions
      })), /*#__PURE__*/_react["default"].createElement(_PlusFloatingActingButton["default"], {
        onAddUrls: this.handleAddUrls,
        onBrowseFiles: this.handleBrowseFiles
      })), /*#__PURE__*/_react["default"].createElement("input", {
        multiple: true,
        onChange: this._onChange,
        ref: this._fileInput,
        style: {
          display: "none"
        },
        type: "file"
      }), (this.state.showFilesDialog || hasFiles) && /*#__PURE__*/_react["default"].createElement(_FilesQueue["default"], {
        onBrowseFiles: this.handleBrowseFiles,
        onClose: this.handleCloseUrls,
        onCommitFiles: this.props.onCommitFiles,
        onPendingFileChange: this.props.onPendingFileChange,
        pendingFiles: props.pendingFiles
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.fileLoading && props.fileLoading === false && state.files.length) {
        return {
          files: [],
          fileLoading: props.fileLoading
        };
      }

      return {
        fileLoading: props.fileLoading
      };
    }
  }]);
  return DropFiles;
}(_react["default"].PureComponent);

DropFiles.displayName = "DropFiles";
DropFiles.propTypes = {
  children: _propTypes["default"].node,
  fileKind: _propTypes2.FileKind,
  fileLoading: _propTypes["default"].bool,
  onAddFiles: _propTypes["default"].func.isRequired,
  onCommitFiles: _propTypes["default"].func.isRequired,
  onPendingFileChange: _propTypes["default"].func.isRequired,
  paneId: _propTypes["default"].string,
  pendingFiles: _propTypes["default"].arrayOf(_propTypes2.FileDescriptor),
  plusButton: _propTypes["default"].bool,
  validFileExtensions: _propTypes["default"].arrayOf(_propTypes2.FileExtension.isRequired).isRequired
};
DropFiles.defaultProps = {
  plusButton: true
};
var _default = DropFiles;
exports["default"] = _default;

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = require("react-file-drop");

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _reselect = __webpack_require__(10);

var _Box = _interopRequireDefault(__webpack_require__(23));

var _MenuItem = _interopRequireDefault(__webpack_require__(81));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Table = _interopRequireDefault(__webpack_require__(274));

var _TableBody = _interopRequireDefault(__webpack_require__(275));

var _TableCell = _interopRequireDefault(__webpack_require__(276));

var _TableContainer = _interopRequireDefault(__webpack_require__(277));

var _TableHead = _interopRequireDefault(__webpack_require__(278));

var _TableRow = _interopRequireDefault(__webpack_require__(279));

var _TextField = _interopRequireDefault(__webpack_require__(62));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _AddCircleOutlineRounded = _interopRequireDefault(__webpack_require__(280));

__webpack_require__(281);

var _files = __webpack_require__(38);

var _hash = __webpack_require__(46);

var _UiDialog = _interopRequireDefault(__webpack_require__(92));

var _UiTextfield = _interopRequireDefault(__webpack_require__(49));

var _propTypes2 = __webpack_require__(14);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var fileNameCellStyle = {
  maxWidth: "680px"
};
var fileKindCellStyle = {
  width: "240px",
  minWidth: "240px",
  maxWidth: "240px"
};

var FilesQueue = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(FilesQueue, _React$PureComponent);

  var _super = _createSuper(FilesQueue);

  function FilesQueue() {
    var _this;

    (0, _classCallCheck2["default"])(this, FilesQueue);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleContinue", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      var files = props.pendingFiles;

      var _iterator = _createForOfIteratorHelper(files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;

          if (typeof file.url === "string" && !!file.url && !file.format) {
            return false;
          }

          if (typeof file.url !== "string" && !file.format) {
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return props.onCommitFiles(files);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filesSelector", (0, _reselect.createSelector)(function (props) {
      return props.pendingFiles;
    }, function (pendingFiles) {
      var files = (0, _toConsumableArray2["default"])(pendingFiles); // if (files.length === 0 || files[files.length - 1].url !== "") {
      //   files.push({
      //     url: "",
      //     id: generateHashId(),
      //   });
      // }

      return files;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFileChange", function (file, key, value) {
      var files = (0, _toConsumableArray2["default"])(_this.props.pendingFiles);
      var fileIndex = files.indexOf(file);

      if (fileIndex >= 0) {
        if (value === undefined) {
          files.splice(fileIndex, 1);
        } else {
          files[fileIndex] = _objectSpread(_objectSpread({}, files[fileIndex]), {}, (0, _defineProperty2["default"])({}, key, value));
        }
      } else {
        files.push(_objectSpread(_objectSpread({}, file || {}), {}, (0, _defineProperty2["default"])({}, key, value)));
      }

      _this.props.onPendingFileChange(files);
    });
    return _this;
  }

  (0, _createClass2["default"])(FilesQueue, [{
    key: "renderFileError",
    value: function renderFileError(fileId) {
      var _this$props, _this$props$pendingFi;

      if ((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.pendingFiles && (_this$props$pendingFi = this.props.pendingFiles.find(function (x) {
        return x.id === fileId;
      })) !== null && _this$props$pendingFi !== void 0 && _this$props$pendingFi.error) {
        var _this$props$pendingFi2;

        return /*#__PURE__*/_react["default"].createElement("strong", null, "\xA0 ERROR: \xA0", (_this$props$pendingFi2 = this.props.pendingFiles.find(function (x) {
          return x.id === fileId;
        })) === null || _this$props$pendingFi2 === void 0 ? void 0 : _this$props$pendingFi2.error);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$pendingFi3,
          _this2 = this;

      var props = this.props;
      var files = this.filesSelector(props);
      var newFileId = (0, _hash.generateHashId)();
      return /*#__PURE__*/_react["default"].createElement(_UiDialog["default"], {
        className: "mr-files-queue",
        actions: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          variant: "outlined",
          disableElevation: true,
          onClick: props.onClose
        }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          color: "primary",
          variant: "contained",
          disableElevation: true,
          onClick: this.handleContinue,
          disabled: ((_this$props$pendingFi3 = this.props.pendingFiles) === null || _this$props$pendingFi3 === void 0 ? void 0 : _this$props$pendingFi3.length) === 0
        }, "Continue")),
        isOpen: true,
        maxWidth: "md",
        onClose: props.onClose,
        title: "Add Files or URLs"
      }, /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], null, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "File"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        style: fileKindCellStyle
      }, "File kind"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, files.map(function (row) {
        var _row$format;

        var fileNameCell;

        if (typeof row.url === "string") {
          var _row$url;

          fileNameCell = /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
            clearable: !!row.url,
            label: "Enter URL",
            onChange: function onChange(value) {
              return _this2.handleFileChange(row, "url", value);
            },
            size: "small",
            style: {
              width: "100%"
            },
            value: (_row$url = row.url) !== null && _row$url !== void 0 ? _row$url : "",
            variant: "outlined"
          });
        } else {
          fileNameCell = /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
            clearable: true,
            onChange: function onChange(value) {
              return _this2.handleFileChange(row, "blob", undefined);
            },
            readOnly: true,
            size: "small",
            style: {
              width: "100%"
            },
            value: row.name,
            variant: "outlined"
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          key: row.id
        }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
          style: fileNameCellStyle
        }, fileNameCell, _this2.renderFileError(row.id)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
          style: fileKindCellStyle
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          select: true,
          label: "",
          value: (_row$format = row.format) !== null && _row$format !== void 0 ? _row$format : "",
          onChange: function onChange(event) {
            return _this2.handleFileChange(row, "format", event.target.value);
          },
          variant: "outlined",
          size: "small",
          style: {
            width: "100%"
          },
          required: true
        }, _files.FileKinds.filter(function (x) {
          return x.linkable;
        }).map(function (option) {
          return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
            key: option.format,
            value: option.format
          }, option.name);
        }))));
      }), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
        key: newFileId
      }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
        label: "Enter URL",
        onChange: function onChange(value) {
          return _this2.handleFileChange({
            id: newFileId
          }, "url", value);
        },
        size: "small",
        style: {
          width: "100%"
        },
        value: "",
        variant: "outlined"
      })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        style: fileKindCellStyle
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: props.onBrowseFiles,
        startIcon: /*#__PURE__*/_react["default"].createElement(_AddCircleOutlineRounded["default"], null)
      }, "add more files"))))))));
    }
  }]);
  return FilesQueue;
}(_react["default"].PureComponent);

FilesQueue.displayName = "AddFilesStep";
FilesQueue.propTypes = {
  onBrowseFiles: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onCommitFiles: _propTypes["default"].func.isRequired,
  onPendingFileChange: _propTypes["default"].func.isRequired,
  pendingFiles: _propTypes["default"].arrayOf(_propTypes2.FileDescriptor)
};
var _default = FilesQueue;
exports["default"] = _default;

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutlineRounded");

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ClearRounded");

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _GridOn = _interopRequireDefault(__webpack_require__(290));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ShareTwoTone = _interopRequireDefault(__webpack_require__(136));

__webpack_require__(291);

var _FileIcon = _interopRequireDefault(__webpack_require__(292));

var _RectangularTreeIcon = _interopRequireDefault(__webpack_require__(117));

var _propTypes2 = __webpack_require__(14);

var DropFilesGraphics = function DropFilesGraphics(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "drop-files-graphics"
  }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Drop files here"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", {
    onClick: props.onBrowseFiles
  }, "browse your files"), "\xA0or\xA0", /*#__PURE__*/_react["default"].createElement("b", {
    onClick: props.onAddUrls
  }, "add Urls")), /*#__PURE__*/_react["default"].createElement("figure", {
    onClick: props.onBrowseFiles
  }, (!props.fileKind || props.fileKind === "data") && /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], {
    label: "data",
    icon: _GridOn["default"]
  }), (!props.fileKind || props.fileKind === "network") && /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], {
    label: "network",
    icon: _ShareTwoTone["default"]
  }), (!props.fileKind || props.fileKind === "tree") && /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], {
    label: "tree",
    icon: _RectangularTreeIcon["default"]
  }), props.fileKind && props.fileKind !== "data" && props.fileKind !== "network" && props.fileKind !== "tree" && /*#__PURE__*/_react["default"].createElement(_FileIcon["default"], {
    label: "tree"
  })), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://docs.microreact.org/instructions/creating-a-microreact-project/supported-file-formats",
    target: "_blank"
  }, "Supported files"), ":"), /*#__PURE__*/_react["default"].createElement("p", null, props.validFileExtensions.reduce(function (accumulator, currentValue, currentIndex, array) {
    if (currentIndex > 0) {
      accumulator.push(", ");
    }

    if (array.length > 1 && currentIndex === array.length - 1) {
      accumulator.push(" and ");
    }

    accumulator.push( /*#__PURE__*/_react["default"].createElement("code", {
      key: currentValue
    }, ".", currentValue));
    return accumulator;
  }, []))));
};

DropFilesGraphics.displayName = "DropFilesGraphics";
DropFilesGraphics.propTypes = {
  fileKind: _propTypes2.FileKind,
  onAddUrls: _propTypes["default"].func.isRequired,
  onBrowseFiles: _propTypes["default"].func.isRequired,
  validFileExtensions: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
var _default = DropFilesGraphics;
exports["default"] = _default;

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GridOn");

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(293);

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _Badge = _interopRequireDefault(__webpack_require__(294));

var _InsertDriveFileTwoTone = _interopRequireDefault(__webpack_require__(137));

var FileIcon = function FileIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: props.label,
    className: (0, _classnames["default"])("file-icon", props.label),
    classes: {
      badge: "label"
    },
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_InsertDriveFileTwoTone["default"], {
    color: "action"
  }), props.icon && /*#__PURE__*/_react["default"].createElement(props.icon, {
    className: "diacritic",
    color: "action"
  }));
};

FileIcon.propTypes = {
  label: _propTypes["default"].string,
  icon: _propTypes["default"].any
};
var _default = FileIcon;
exports["default"] = _default;

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SpeedDial = _interopRequireDefault(__webpack_require__(138));

var _SpeedDialAction = _interopRequireDefault(__webpack_require__(139));

var _Backdrop = _interopRequireDefault(__webpack_require__(296));

var _SpeedDialIcon = _interopRequireDefault(__webpack_require__(297));

var _InsertDriveFile = _interopRequireDefault(__webpack_require__(298));

var _js = __webpack_require__(118);

__webpack_require__(299);

var _MdiIcon = _interopRequireDefault(__webpack_require__(82));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PlusFloatingActingButton = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(PlusFloatingActingButton, _React$PureComponent);

  var _super = _createSuper(PlusFloatingActingButton);

  function PlusFloatingActingButton() {
    var _this;

    (0, _classCallCheck2["default"])(this, PlusFloatingActingButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(PlusFloatingActingButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-plus-actions"
      }, /*#__PURE__*/_react["default"].createElement(_Backdrop["default"], {
        open: this.state.isOpen
      }), /*#__PURE__*/_react["default"].createElement(_SpeedDial["default"], {
        ariaLabel: "SpeedDial tooltip example",
        icon: /*#__PURE__*/_react["default"].createElement(_SpeedDialIcon["default"], null) // onClose={this.handleClose}
        // onOpen={this.handleOpen}
        ,
        open: this.state.isOpen,
        onClick: function onClick() {
          return _this2.setState({
            isOpen: !_this2.state.isOpen
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_SpeedDialAction["default"], {
        icon: /*#__PURE__*/_react["default"].createElement(_InsertDriveFile["default"], null),
        tooltipTitle: "Browse Files",
        tooltipOpen: true,
        onClick: this.props.onBrowseFiles
      }), /*#__PURE__*/_react["default"].createElement(_SpeedDialAction["default"], {
        icon: /*#__PURE__*/_react["default"].createElement(_MdiIcon["default"], null, _js.mdiLinkVariantPlus),
        tooltipTitle: "Add URLs",
        tooltipOpen: true,
        onClick: this.props.onAddUrls
      })));
    }
  }]);
  return PlusFloatingActingButton;
}(_react["default"].PureComponent);

PlusFloatingActingButton.propTypes = {
  onAddUrls: _propTypes["default"].func.isRequired,
  onBrowseFiles: _propTypes["default"].func.isRequired
};
var _default = PlusFloatingActingButton;
exports["default"] = _default;

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialIcon");

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertDriveFile");

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes2 = __webpack_require__(14);

var _files = __webpack_require__(38);

var _UiSpinningLoader = _interopRequireDefault(__webpack_require__(140));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FileLoader = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(FileLoader, _React$PureComponent);

  var _super = _createSuper(FileLoader);

  function FileLoader() {
    var _this;

    (0, _classCallCheck2["default"])(this, FileLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      bytesUsed: 0
    });
    return _this;
  }

  (0, _createClass2["default"])(FileLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var props = this.props;
      (0, _files.loadFile)(props.file, function (bytesUsed) {
        return _this2.setState({
          bytesUsed: bytesUsed
        });
      }).then(function (loadedFile) {
        return _this2.props.onFileLoaded(loadedFile);
      })["catch"](function (error) {
        return _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;

      if (state.error) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-pane-placeholder"
        }, state.error.message);
      }

      return /*#__PURE__*/_react["default"].createElement(_UiSpinningLoader["default"], null, "Loading ", props.file.name || "file", "\xA0", state.bytesUsed > 0 && "(".concat((0, _files.fileSize)(state.bytesUsed), ")"), "\u2026");
    }
  }]);
  return FileLoader;
}(_react["default"].PureComponent);

FileLoader.displayName = "FileLoader";
FileLoader.propTypes = {
  file: _propTypes2.FileDescriptor.isRequired,
  onFileLoaded: _propTypes["default"].func.isRequired
};
var _default = FileLoader;
exports["default"] = _default;

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _panes = __webpack_require__(58);

var _ui = __webpack_require__(27);

var _HeaderBar = _interopRequireDefault(__webpack_require__(303));

var _config = _interopRequireDefault(__webpack_require__(50));

var _state = __webpack_require__(3);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isReadOnly: (0, _config["default"])(state).readOnly,
    title: state.meta.name
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSave: function onSave() {
      return dispatch((0, _ui.save)());
    },
    onSidePaneChange: function onSidePaneChange(pane) {
      return dispatch((0, _panes.setSidePane)(pane));
    },
    onToggleHistoryPane: function onToggleHistoryPane() {
      return dispatch((0, _panes.setSidePane)("History"));
    },
    onToggleStylesPane: function onToggleStylesPane() {
      return dispatch((0, _panes.setSidePane)("Styles"));
    },
    onToggleViewsPane: function onToggleViewsPane() {
      return dispatch((0, _panes.setSidePane)("Views"));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_HeaderBar["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _AppBar = _interopRequireDefault(__webpack_require__(304));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Toolbar = _interopRequireDefault(__webpack_require__(305));

var _Typography = _interopRequireDefault(__webpack_require__(78));

__webpack_require__(141);

var _AddPaneMenu = _interopRequireDefault(__webpack_require__(306));

var _DownloadFilesMenuButton = _interopRequireDefault(__webpack_require__(318));

var _InfoMenu = _interopRequireDefault(__webpack_require__(322));

var _SearchBox = _interopRequireDefault(__webpack_require__(325));

var _StylesMenuTrigger = _interopRequireDefault(__webpack_require__(338));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HeaderBar = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(HeaderBar, _React$PureComponent);

  var _super = _createSuper(HeaderBar);

  function HeaderBar() {
    (0, _classCallCheck2["default"])(this, HeaderBar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(HeaderBar, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
        className: "mr-header-bar",
        position: "static"
      }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
        variant: "dense"
      }, props.drawerButton, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "h1",
        variant: "h6",
        color: "inherit",
        noWrap: true,
        style: {
          flexGrow: 1
        }
      }, props.title, /*#__PURE__*/_react["default"].createElement(_InfoMenu["default"], null)), /*#__PURE__*/_react["default"].createElement(_SearchBox["default"], null), /*#__PURE__*/_react["default"].createElement("nav", null, props.prependNavButtons, !props.isReadOnly && /*#__PURE__*/_react["default"].createElement(_AddPaneMenu["default"], null), /*#__PURE__*/_react["default"].createElement(_StylesMenuTrigger["default"], null), "\xA0", /*#__PURE__*/_react["default"].createElement(_DownloadFilesMenuButton["default"], null), "\xA0", props.appendNavButtons)));
    }
  }]);
  return HeaderBar;
}(_react["default"].PureComponent);

HeaderBar.displayName = "HeaderBar";
HeaderBar.propTypes = {
  appendNavButtons: _propTypes["default"].node,
  drawerButton: _propTypes["default"].node,
  isReadOnly: _propTypes["default"].bool.isRequired,
  onSave: _propTypes["default"].func,
  onToggleHistoryPane: _propTypes["default"].func.isRequired,
  onToggleStylesPane: _propTypes["default"].func.isRequired,
  onToggleViewsPane: _propTypes["default"].func.isRequired,
  prependNavButtons: _propTypes["default"].node,
  title: _propTypes["default"].string
};
HeaderBar.defaultProps = {
  appendNavButtons: false,
  drawerButton: false,
  prependNavButtons: false,
  title: "Microreact"
};
var _default = HeaderBar;
exports["default"] = _default;

/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ui = __webpack_require__(27);

var _state = __webpack_require__(3);

var _AddPaneMenu = _interopRequireDefault(__webpack_require__(307));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)());
    }
  };
};

var _default = (0, _state.connectToPresentState)(_AddPaneMenu["default"], null, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Divider = _interopRequireDefault(__webpack_require__(97));

var _EditTwoTone = _interopRequireDefault(__webpack_require__(142));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(141);

var _panes = __webpack_require__(69);

var _PaneIcon = _interopRequireDefault(__webpack_require__(55));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var AddPaneMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _IconButton["default"],
    buttonProps: {
      color: "inherit",
      size: "small",
      title: "Add or edit views",
      children: /*#__PURE__*/_react["default"].createElement(_EditTwoTone["default"], null)
    }
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Chart");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Chart"
  }), "\xA0 Create New Chart"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Map");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Map"
  }), "\xA0 Create New Map"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Network");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Network"
  }), "\xA0 Create New Network"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Note");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Note"
  }), "\xA0 Create New Note"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Table");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Table"
  }), "\xA0 Create New Table"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Timeline");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Timeline"
  }), "\xA0 Create New Timeline"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Tree");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Tree"
  }), "\xA0 Create New Tree"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), "\xA0\xA0Experimental", /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return (0, _panes.createNewTab)("Slicer");
    }
  }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
    component: "Slicer"
  }), "\xA0 Create New Data Slicer"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onEditPane
  }, /*#__PURE__*/_react["default"].createElement(_EditTwoTone["default"], null), "\xA0 Edit Existing Panels"));
});

AddPaneMenu.displayName = "AddPaneMenu";
AddPaneMenu.propTypes = {
  onEditPane: _propTypes["default"].func.isRequired
};
var _default = AddPaneMenu;
exports["default"] = _default;

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessTimeTwoTone");

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EqualizerRounded");

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NoteTwoTone");

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PublicTwoTone");

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChartTwoTone");

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityTwoTone");

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DescriptionTwoTone");

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(54));

var FilterAltIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({
    enableBackground: "new 0 0 24 24",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, props), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0,0h24 M24,24H0",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0,0h24v24H0V0z",
    fill: "none"
  })), /*#__PURE__*/_react["default"].createElement("polygon", {
    opacity: ".3",
    points: "7,6 17,6 11.99,12.3"
  }));
});

FilterAltIcon.displayName = "FilterAltIcon";
var _default = FilterAltIcon;
exports["default"] = _default;

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _GetAppRounded = _interopRequireDefault(__webpack_require__(319));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _DownloadFilesMenuContent = _interopRequireDefault(__webpack_require__(320));

/* eslint-disable class-methods-use-this */
var Icon = /*#__PURE__*/_react["default"].createElement(_GetAppRounded["default"], null);

var DownloadFilesMenuButton = /*#__PURE__*/_react["default"].memo(function () {
  return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _IconButton["default"],
    buttonProps: {
      color: "inherit",
      size: "small",
      title: "Download Project Files",
      children: Icon
    }
  }, /*#__PURE__*/_react["default"].createElement(_DownloadFilesMenuContent["default"], null));
});

DownloadFilesMenuButton.displayName = "DownloadFilesMenuButton";
DownloadFilesMenuButton.propTypes = {
  files: _propTypes["default"].object
};
var _default = DownloadFilesMenuButton;
exports["default"] = _default;

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GetAppRounded");

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _DownloadFilesMenuContent = _interopRequireDefault(__webpack_require__(321));

function mapStateToProps(state) {
  return {
    files: state.files
  };
}

var _default = (0, _state.connectToPresentStateWithRef)(_DownloadFilesMenuContent["default"], mapStateToProps);

exports["default"] = _default;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _PaneIcon = _interopRequireDefault(__webpack_require__(55));

var _downloads = __webpack_require__(53);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var icons = {
  data: "Table",
  network: "Network",
  tree: "Tree",
  geo: "Map"
};

var DownloadFilesMenuContent = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DownloadFilesMenuContent, _React$PureComponent);

  var _super = _createSuper(DownloadFilesMenuContent);

  function DownloadFilesMenuContent() {
    (0, _classCallCheck2["default"])(this, DownloadFilesMenuContent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DownloadFilesMenuContent, [{
    key: "filesSelector",
    value: function filesSelector() {
      var props = this.props;
      return Object.values(props.files);
    }
  }, {
    key: "render",
    value: function render() {
      return this.filesSelector().map(function (item) {
        var _item$url;

        return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
          key: item.id,
          alignItems: "flex-start",
          button: true,
          component: item.url ? "a" : undefined,
          href: (_item$url = item.url) !== null && _item$url !== void 0 ? _item$url : undefined,
          target: item.url ? "_blank" : undefined,
          download: item.url ? item.name : undefined,
          onClick: item.blob ? function () {
            return (0, _downloads.downloadDataUrl)(item.blob, item.name, item.format);
          } : undefined
        }, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
          component: icons[item.type]
        }), "\u2003", item.name || "".concat(item.type, " file"));
      });
    }
  }]);
  return DownloadFilesMenuContent;
}(_react["default"].PureComponent);

DownloadFilesMenuContent.displayName = "DownloadFilesMenuContent";
DownloadFilesMenuContent.propTypes = {
  files: _propTypes["default"].object
};
var _default = DownloadFilesMenuContent;
exports["default"] = _default;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InfoMenu = _interopRequireDefault(__webpack_require__(323));

var _state = __webpack_require__(3);

var mapStateToProps = function mapStateToProps(state) {
  return state.meta;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _state.connectToPresentStateWithRef)(_InfoMenu["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _reselect = __webpack_require__(10);

var _InfoTwoTone = _interopRequireDefault(__webpack_require__(324));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Typography = _interopRequireDefault(__webpack_require__(78));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MenuIcon = /*#__PURE__*/_react["default"].createElement(_InfoTwoTone["default"], null);

var DownloadFilesMenu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DownloadFilesMenu, _React$PureComponent);

  var _super = _createSuper(DownloadFilesMenu);

  function DownloadFilesMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, DownloadFilesMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filesSelector", (0, _reselect.createSelector)(function (props) {
      return props.files;
    }, function (filesState) {
      var items = [];

      for (var _i = 0, _Object$values = Object.values(filesState); _i < _Object$values.length; _i++) {
        var file = _Object$values[_i];
        items.push(_objectSpread(_objectSpread({}, file), {}, {
          label: file.name || "".concat(file.type, " file")
        }));
      }

      return items;
    }));
    return _this;
  }

  (0, _createClass2["default"])(DownloadFilesMenu, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
        button: _IconButton["default"],
        buttonProps: {
          color: "inherit",
          size: "small",
          title: "Project Info",
          children: MenuIcon
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-content",
        style: {
          maxWidth: 400
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "h2",
        variant: "h6",
        color: "primary"
      }, "About Project"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "h3",
        variant: "subtitle1",
        color: "primary"
      }, props.name), /*#__PURE__*/_react["default"].createElement("p", null, props.description || "(no description)"), props.email && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "mailto:".concat(props.email),
        target: "_blank",
        rel: "noreferrer"
      }, props.email)), props.website && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: props.website,
        target: "_blank",
        rel: "noreferrer"
      }, props.website))));
    }
  }]);
  return DownloadFilesMenu;
}(_react["default"].PureComponent);

DownloadFilesMenu.displayName = "DownloadFilesMenu";
DownloadFilesMenu.propTypes = {
  name: _propTypes["default"].string,
  description: _propTypes["default"].string,
  email: _propTypes["default"].string,
  website: _propTypes["default"].string
};
var _default = DownloadFilesMenu;
exports["default"] = _default;

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoTwoTone");

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(96);

var _filters = __webpack_require__(51);

var _hasMaps = _interopRequireDefault(__webpack_require__(326));

var _hasNetworks = _interopRequireDefault(__webpack_require__(327));

var _hasTimelines = _interopRequireDefault(__webpack_require__(328));

var _hasTrees = _interopRequireDefault(__webpack_require__(329));

var _numberOfFilteredRows = _interopRequireDefault(__webpack_require__(330));

var _numberOfSelectedRows = _interopRequireDefault(__webpack_require__(331));

var _visibleRowCount = _interopRequireDefault(__webpack_require__(332));

var _numberOfRows = _interopRequireDefault(__webpack_require__(333));

var _SearchBox = _interopRequireDefault(__webpack_require__(334));

// import { setMapFilter } from "../actions/map";
// import { setFilter } from "../actions/networks";
// import { resetTableFilter } from "../actions/table";
// import { setTreeFilter } from "../actions/trees";
var mapStateToProps = function mapStateToProps(state) {
  return {
    filteredRowCount: (0, _numberOfFilteredRows["default"])(state),
    hasNetworks: (0, _hasNetworks["default"])(state),
    hasMaps: (0, _hasMaps["default"])(state),
    hasTimelines: (0, _hasTimelines["default"])(state),
    hasTrees: (0, _hasTrees["default"])(state),
    rowCount: (0, _numberOfRows["default"])(state),
    searchOperator: state.filters.searchOperator,
    searchValue: state.filters.searchValue,
    selectedRowCount: (0, _numberOfSelectedRows["default"])(state),
    visibleRowCount: (0, _visibleRowCount["default"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onResetAllFilters: function onResetAllFilters() {
      return dispatch((0, _filters.resetAllFilters)());
    },
    onResetMapFilters: function onResetMapFilters() {
      return dispatch((0, _filters.resetMapFilters)());
    },
    onResetNetworkFilters: function onResetNetworkFilters() {
      return dispatch((0, _filters.resetNetworkFilters)());
    },
    onResetTableFilters: function onResetTableFilters() {
      return dispatch((0, _filters.resetTableFilters)());
    },
    onResetTimelineFilters: function onResetTimelineFilters() {
      return dispatch((0, _filters.resetTimelineFilters)());
    },
    onResetTreeFilters: function onResetTreeFilters() {
      return dispatch((0, _filters.resetTreeFilters)());
    },
    onSearchOperatorChange: function onSearchOperatorChange(operator) {
      return dispatch((0, _filters.setSearchOperator)(operator));
    },
    onSearchValueChange: function onSearchValueChange(value) {
      return dispatch((0, _filters.setSearchValue)(value));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_SearchBox["default"]);

exports["default"] = _default;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var hasMapsSelector = function hasMapsSelector(state) {
  return Object.keys(state.maps).length > 0;
};

var _default = hasMapsSelector;
exports["default"] = _default;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var hasNetworksSelector = function hasNetworksSelector(state) {
  return Object.keys(state.networks).length > 0;
};

var _default = hasNetworksSelector;
exports["default"] = _default;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var hasTimelinesSelector = function hasTimelinesSelector(state) {
  return state.timelines && Object.keys(state.timelines).length > 0;
};

var _default = hasTimelinesSelector;
exports["default"] = _default;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var hasTreesSelector = function hasTreesSelector(state) {
  return Object.keys(state.trees).length > 0;
};

var _default = hasTreesSelector;
exports["default"] = _default;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _filteredIds = _interopRequireDefault(__webpack_require__(59));

var numberOfFilteredRowsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _filteredIds["default"])(state);
}, function (filteredIds) {
  if (filteredIds) {
    return filteredIds.size;
  } else {
    return 0;
  }
});
var _default = numberOfFilteredRowsSelector;
exports["default"] = _default;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _selectedIdsList = _interopRequireDefault(__webpack_require__(106));

var numberOfSelectedRowsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _selectedIdsList["default"])(state);
}, function (selectedIds) {
  if (selectedIds) {
    return selectedIds.length;
  } else {
    return 0;
  }
});
var _default = numberOfSelectedRowsSelector;
exports["default"] = _default;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _rows = _interopRequireDefault(__webpack_require__(17));

var _filteredIds = _interopRequireDefault(__webpack_require__(59));

var visibleRowCountSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _filteredIds["default"])(state);
}, function (allRows, filteredIds) {
  if (filteredIds) {
    return filteredIds.size;
  } else if (allRows) {
    return allRows.length;
  } else {
    return 0;
  }
});
var _default = visibleRowCountSelector;
exports["default"] = _default;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rows = _interopRequireDefault(__webpack_require__(17));

var numberOfRowsSelector = function numberOfRowsSelector(state) {
  var rows = (0, _rows["default"])(state);
  return rows ? rows.length : 0;
};

var _default = numberOfRowsSelector;
exports["default"] = _default;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _reactDebounceInput = __webpack_require__(335);

var _ExplicitRounded = _interopRequireDefault(__webpack_require__(336));

var _FilterListRounded = _interopRequireDefault(__webpack_require__(204));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SearchRounded = _interopRequireDefault(__webpack_require__(144));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

__webpack_require__(337);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var resetFiltersMenuButtonProps = {
  // color: "primary",
  title: "Reset filters",
  // size: "small",
  children: /*#__PURE__*/_react["default"].createElement(_FilterListRounded["default"], null)
};

var ResetFiltersMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: "button",
    buttonProps: resetFiltersMenuButtonProps
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onResetAllFilters
  }, "Reset All Filters"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onResetTableFilters
  }, "Reset Table Filter"), props.hasMaps && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onResetMapFilters
  }, "Reset Map Filter"), props.hasNetworks && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onResetNetworkFilters
  }, "Reset Network Filter"), props.hasTimelines && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onResetTimelineFilters
  }, "Reset Timeline Filter"), props.hasTrees && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onResetTreeFilters
  }, "Reset Tree Filter"));
});

ResetFiltersMenu.displayName = "ResetFiltersMenu";

var SearchBox = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SearchBox, _React$PureComponent);

  var _super = _createSuper(SearchBox);

  function SearchBox() {
    var _this;

    (0, _classCallCheck2["default"])(this, SearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      focus: false,
      extactMatch: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function () {
      _this.setState({
        focus: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function () {
      _this.setState({
        focus: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function () {
      _this.inputRef.current.focus();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSearchValueChange", function (event) {
      var searchValue = event.target.value;

      _this.props.onSearchValueChange(searchValue);
    });
    return _this;
  }

  (0, _createClass2["default"])(SearchBox, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-search-box", {
          "mr-search-box--active": this.state.focus
        }),
        onClick: this.onClick
      }, /*#__PURE__*/_react["default"].createElement(_SearchRounded["default"], {
        title: "Use filter buttons in data table headers to search in a specific column"
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: (0, _classnames["default"])({
          active: props.searchOperator !== "includes"
        }),
        onClick: function onClick() {
          return props.onSearchOperatorChange(props.searchOperator === "includes" ? "equals" : "includes");
        },
        title: props.searchOperator === "includes" ? "Switch to exact match" : "Switch to partial match"
      }, /*#__PURE__*/_react["default"].createElement(_ExplicitRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactDebounceInput.DebounceInput, {
        className: "mr-search-box__input",
        debounceTimeout: 1000,
        minLength: 1,
        onBlur: this.onBlur,
        onChange: this.handleSearchValueChange,
        onFocus: this.onFocus,
        placeholder: "SEARCH IN ALL COLUMNS",
        inputRef: this.inputRef,
        type: "text",
        value: props.searchValue
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "mr-search-totals"
      }, props.visibleRowCount, " of ", props.rowCount), /*#__PURE__*/_react["default"].createElement(ResetFiltersMenu, {
        hasMaps: props.hasMaps,
        hasNetworks: props.hasNetworks,
        hasTimelines: props.hasTimelines,
        hasTrees: props.hasTrees,
        onResetAllFilters: props.onResetAllFilters,
        onResetMapFilters: props.onResetMapFilters,
        onResetNetworkFilters: props.onResetNetworkFilters,
        onResetTableFilters: props.onResetTableFilters,
        onResetTimelineFilters: props.onResetTimelineFilters,
        onResetTreeFilters: props.onResetTreeFilters
      }));
    }
  }]);
  return SearchBox;
}(_react["default"].PureComponent);

SearchBox.displayName = "SearchBox";
SearchBox.propTypes = {
  filteredRowCount: _propTypes["default"].number,
  hasMaps: _propTypes["default"].bool.isRequired,
  hasNetworks: _propTypes["default"].bool.isRequired,
  hasTimelines: _propTypes["default"].bool.isRequired,
  hasTrees: _propTypes["default"].bool.isRequired,
  onResetAllFilters: _propTypes["default"].func.isRequired,
  onResetMapFilters: _propTypes["default"].func.isRequired,
  onResetNetworkFilters: _propTypes["default"].func.isRequired,
  onResetTableFilters: _propTypes["default"].func.isRequired,
  onResetTimelineFilters: _propTypes["default"].func.isRequired,
  onResetTreeFilters: _propTypes["default"].func.isRequired,
  onSearchOperatorChange: _propTypes["default"].func.isRequired,
  onSearchValueChange: _propTypes["default"].func.isRequired,
  rowCount: _propTypes["default"].number,
  searchOperator: _propTypes["default"].string.isRequired,
  searchValue: _propTypes["default"].string,
  visibleRowCount: _propTypes["default"].number
};
ResetFiltersMenu.propTypes = {
  hasMaps: SearchBox.propTypes.hasMaps,
  hasNetworks: SearchBox.propTypes.hasNetworks,
  hasTimelines: SearchBox.propTypes.hasTimelines,
  hasTrees: SearchBox.propTypes.hasTrees,
  onResetAllFilters: SearchBox.propTypes.onResetAllFilters,
  onResetMapFilters: SearchBox.propTypes.onResetMapFilters,
  onResetNetworkFilters: SearchBox.propTypes.onResetNetworkFilters,
  onResetTableFilters: SearchBox.propTypes.onResetTableFilters,
  onResetTimelineFilters: SearchBox.propTypes.onResetTimelineFilters,
  onResetTreeFilters: SearchBox.propTypes.onResetTreeFilters
};
var _default = SearchBox;
exports["default"] = _default;

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = require("react-debounce-input");

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExplicitRounded");

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _PaneIcon = _interopRequireDefault(__webpack_require__(55));

var _StylesMenuContent = _interopRequireDefault(__webpack_require__(339));

var _UiIconButtonMenu = _interopRequireDefault(__webpack_require__(155));

var StylesPaneIcon = /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
  component: "Styles"
});

var StylesMenu = /*#__PURE__*/_react["default"].memo(function () {
  return /*#__PURE__*/_react["default"].createElement(_UiIconButtonMenu["default"], {
    content: _StylesMenuContent["default"],
    disableCloseButton: true,
    disableHeader: true,
    hideOnClick: false,
    icon: StylesPaneIcon,
    title: "Labels, Colours, and Shapes"
  });
});

StylesMenu.displayName = "StylesMenu";
StylesMenu.propTypes = {
  files: _propTypes["default"].object
};
var _default = StylesMenu;
exports["default"] = _default;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = __webpack_require__(83);

var _colourableDataFields = _interopRequireDefault(__webpack_require__(340));

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(57));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _labelsDataColumn = _interopRequireDefault(__webpack_require__(114));

var _shapableDataFields = _interopRequireDefault(__webpack_require__(341));

var _shapesDataColumn = _interopRequireDefault(__webpack_require__(109));

var _StylesMenuContent = _interopRequireDefault(__webpack_require__(342));

var _state = __webpack_require__(3);

var mapStateToProps = function mapStateToProps(state) {
  var colourByDataField = (0, _coloursDataColumn["default"])(state);
  return {
    colourableFields: (0, _colourableDataFields["default"])(state),
    colourByDataField: colourByDataField,
    defaultColour: state.styles.defaultColour,
    labelByDataField: (0, _labelsDataColumn["default"])(state),
    labelFields: (0, _dataColumns["default"])(state),
    shapableDataFields: (0, _shapableDataFields["default"])(state),
    shapeByDataField: (0, _shapesDataColumn["default"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onColourByFieldChange: function onColourByFieldChange(field) {
      return dispatch((0, _styles.setColourByField)(field));
    },
    onDefaultColourChange: function onDefaultColourChange(field) {
      return dispatch((0, _styles.setDefaultColour)(field));
    },
    onLabelByFieldChange: function onLabelByFieldChange(field) {
      return dispatch((0, _styles.setLabelByField)(field));
    },
    onShapeByFieldChange: function onShapeByFieldChange(field) {
      return dispatch((0, _styles.setShapeByField)(field));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_StylesMenuContent["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _constants = __webpack_require__(12);

var _arrays = __webpack_require__(24);

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var colourableDataFieldsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _dataColumns["default"])(state);
}, function (state) {
  return state.styles.colourSettings || _constants.emptyObject;
}, function (allDataColumns, colourSettings) {
  // const allDataColumns = dataColumns.sort(sortComparator("name"));
  var colourableDataColumns = [];
  var autocolouredDataColumns = [];

  var _iterator = _createForOfIteratorHelper(allDataColumns),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _dataColumn = _step.value;
      _dataColumn.isAutocoloured = !_dataColumn.colourPalette && !colourSettings[_dataColumn.name];

      if (_dataColumn.isAutocoloured) {
        autocolouredDataColumns.push(_dataColumn);
      } else {
        colourableDataColumns.push(_dataColumn);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  for (var _i = 0, _autocolouredDataColu = autocolouredDataColumns; _i < _autocolouredDataColu.length; _i++) {
    var dataColumn = _autocolouredDataColu[_i];
    colourableDataColumns.push(dataColumn);
  }

  return colourableDataColumns;
});
var _default = colourableDataFieldsSelector;
exports["default"] = _default;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var shapableDataFieldsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _dataColumns["default"])(state);
}, function (allFields) {
  return allFields.filter(function (x) {
    return !!x.shapePalette;
  });
});
var _default = shapableDataFieldsSelector;
exports["default"] = _default;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Divider = _interopRequireDefault(__webpack_require__(97));

__webpack_require__(343);

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _DefaultColourPicker = _interopRequireDefault(__webpack_require__(348));

var _propTypes2 = __webpack_require__(14);

var _ColourSettingsMenu = _interopRequireDefault(__webpack_require__(146));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StylesMenuContent = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(StylesMenuContent, _React$PureComponent);

  var _super = _createSuper(StylesMenuContent);

  function StylesMenuContent() {
    (0, _classCallCheck2["default"])(this, StylesMenuContent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StylesMenuContent, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-styles-menu-content"
      }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        label: "Labels Column",
        options: props.labelFields,
        onChange: function onChange(item) {
          return props.onLabelByFieldChange(item.name);
        },
        value: props.labelByDataField
      }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        label: "Colour Column",
        options: props.colourableFields,
        onChange: function onChange(item) {
          return props.onColourByFieldChange(item.name);
        },
        groupBy: function groupBy(x) {
          return x.isAutocoloured ? "Autocolour" : "User Defined";
        },
        value: props.colourByDataField
      }), /*#__PURE__*/_react["default"].createElement(_ColourSettingsMenu["default"], {
        label: "Colour Palette",
        field: props.colourByDataField.name
      }), /*#__PURE__*/_react["default"].createElement(_DefaultColourPicker["default"], {
        onDefaultColourChange: props.onDefaultColourChange,
        defaultColour: props.defaultColour
      }), props.shapableDataFields.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        clearable: true,
        label: "Shape Column",
        onChange: function onChange(item) {
          return props.onShapeByFieldChange(item === null || item === void 0 ? void 0 : item.name);
        },
        options: props.shapableDataFields,
        value: props.shapeByDataField
      })));
    }
  }]);
  return StylesMenuContent;
}(_react["default"].PureComponent);

StylesMenuContent.displayName = "StylesColumns";
StylesMenuContent.propTypes = {
  colourableFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  colourByDataField: _propTypes2.DataColumn.isRequired,
  defaultColour: _propTypes["default"].string.isRequired,
  labelByDataField: _propTypes2.DataColumn,
  labelFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  onColourByFieldChange: _propTypes["default"].func.isRequired,
  onDefaultColourChange: _propTypes["default"].func.isRequired,
  onLabelByFieldChange: _propTypes["default"].func.isRequired,
  onShapeByFieldChange: _propTypes["default"].func.isRequired,
  shapableDataFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  shapeByDataField: _propTypes2.DataColumn
};
var _default = StylesMenuContent;
exports["default"] = _default;

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBoxOutlineBlank");

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBox");

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(349);

var _constants = __webpack_require__(12);

var _UiTextfield = _interopRequireDefault(__webpack_require__(49));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DefaultColourPicker = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DefaultColourPicker, _React$PureComponent);

  var _super = _createSuper(DefaultColourPicker);

  function DefaultColourPicker() {
    (0, _classCallCheck2["default"])(this, DefaultColourPicker);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DefaultColourPicker, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
        className: (0, _classnames["default"])("mr-default-colour-picker", props.defaultColour === "transparent" ? "mr-null-value" : null),
        clearable: true,
        helperText: "Used for missing values",
        label: "Default colour",
        nullValue: "transparent",
        onChange: props.onDefaultColourChange,
        type: "color",
        value: props.defaultColour,
        variant: "outlined",
        style: _constants.fullWithStyle
      }, /*#__PURE__*/_react["default"].createElement("span", null, "transparent"));
    }
  }]);
  return DefaultColourPicker;
}(_react["default"].PureComponent);

DefaultColourPicker.displayName = "DefaultColourPicker";
DefaultColourPicker.propTypes = {
  defaultColour: _propTypes["default"].string.isRequired,
  onDefaultColourChange: _propTypes["default"].func.isRequired
};
var _default = DefaultColourPicker;
exports["default"] = _default;

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _clsx = _interopRequireDefault(__webpack_require__(119));

var _ColourSettingsContent = _interopRequireDefault(__webpack_require__(351));

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

__webpack_require__(369);

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DataColumnColourSettingsButton = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$colourSettings;

  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.onClick,
    className: (0, _clsx["default"])(props.className, "mr-colour-settings-button", "MuiFormControl-root"),
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense",
    role: "button"
  }, props.colourMode === "categorical" ? "Categorical" : props.colourMode === "gradient" ? "Gradient" : props.colourMode === "field" ? "Reuse ".concat((_props$colourSettings = props.colourSettings) === null || _props$colourSettings === void 0 ? void 0 : _props$colourSettings.field) : null), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined",
    focusable: "false",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10l5 5 5-5z"
  })), /*#__PURE__*/_react["default"].createElement("fieldset", {
    "aria-hidden": "true",
    className: "MuiOutlinedInput-notchedOutline"
  }, /*#__PURE__*/_react["default"].createElement("legend", null, props.label && /*#__PURE__*/_react["default"].createElement("span", null, "\u200B", props.label)))));
});

DataColumnColourSettingsButton.displayName = "DataColumnColourSettingsButton";
DataColumnColourSettingsButton.propTypes = {
  className: _propTypes["default"].string,
  colourMode: _propTypes2.ColourModes,
  colourSettings: _propTypes["default"].object,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

var DataColumnColourSettingsMenu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DataColumnColourSettingsMenu, _React$PureComponent);

  var _super = _createSuper(DataColumnColourSettingsMenu);

  function DataColumnColourSettingsMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, DataColumnColourSettingsMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "menuRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeMenu", function () {
      var _this$menuRef$current;

      (_this$menuRef$current = _this.menuRef.current) === null || _this$menuRef$current === void 0 ? void 0 : _this$menuRef$current.close();
    });
    return _this;
  }

  (0, _createClass2["default"])(DataColumnColourSettingsMenu, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiPopoverMenu["default"], {
        button: DataColumnColourSettingsButton,
        buttonProps: props,
        className: "mr-colour-settings-menu",
        disableCloseButton: true,
        ref: this.menuRef
      }, /*#__PURE__*/_react["default"].createElement(_ColourSettingsContent["default"], {
        field: props.field,
        menuRef: this.menuRef,
        onMenuClose: this.closeMenu
      }));
    }
  }]);
  return DataColumnColourSettingsMenu;
}(_react["default"].PureComponent);

DataColumnColourSettingsMenu.displayName = "DataColumnColourSettingsMenu";
DataColumnColourSettingsMenu.propTypes = {
  colourMode: _propTypes2.ColourModes,
  field: _propTypes["default"].string.isRequired
};
var _default = DataColumnColourSettingsMenu;
exports["default"] = _default;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ColourSettingsContent = _interopRequireDefault(__webpack_require__(352));

var _styles = __webpack_require__(83);

var _colourPaletteForField = _interopRequireDefault(__webpack_require__(86));

var _colourModeForField = _interopRequireDefault(__webpack_require__(88));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _state = __webpack_require__(3);

var _dataColumnByField = _interopRequireDefault(__webpack_require__(43));

function mapStateToProps(state, _ref) {
  var field = _ref.field;
  return {
    colourMode: (0, _colourModeForField["default"])(state, field),
    colourPalette: (0, _colourPaletteForField["default"])(state, field),
    colourSettings: state.styles.colourSettings[field],
    dataColumn: (0, _dataColumnByField["default"])(state, field),
    dataColumns: (0, _dataColumns["default"])(state) // numberOfUniqueValues: uniqueValuesSelector(state, field).length,

  };
}

function mapDispatchToProps(dispatch, _ref2) {
  var field = _ref2.field;
  return {
    onDataColumnColourFieldChange: function onDataColumnColourFieldChange(colourAsField) {
      return dispatch((0, _styles.setDataColumnColourField)(field, colourAsField));
    },
    onDataColumnColourPaletteChange: function onDataColumnColourPaletteChange(paletteName, colourMode) {
      return dispatch((0, _styles.setDataColumnColourPalette)(field, paletteName, colourMode));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_ColourSettingsContent["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _propTypes2 = __webpack_require__(14);

var _CategoricalColourPalettePicker = _interopRequireDefault(__webpack_require__(353));

var _GradientColourPalettePicker = _interopRequireDefault(__webpack_require__(205));

var _UiToggleButtons = _interopRequireDefault(__webpack_require__(122));

var _UiFieldsList = _interopRequireDefault(__webpack_require__(111));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ColourSettingsContent = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ColourSettingsContent, _React$PureComponent);

  var _super = _createSuper(ColourSettingsContent);

  function ColourSettingsContent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ColourSettingsContent);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "elementRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colourModeOptions", [{
      label: "Categorical",
      value: "categorical"
    }, {
      label: "Gradient",
      value: "gradient"
    }, {
      label: "Reuse",
      value: "field"
    }]);
    _this.state = {
      colourMode: props.colourMode
    };

    if (!props.dataColumn.isNumeric) {
      _this.colourModeOptions.splice(1, 1);
    }

    return _this;
  }

  (0, _createClass2["default"])(ColourSettingsContent, [{
    key: "renderCategoricalMode",
    value: function renderCategoricalMode() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_CategoricalColourPalettePicker["default"], {
        field: props.field,
        onChange: function onChange(palette) {
          props.onDataColumnColourPaletteChange(palette.name);
        },
        onMenuClose: props.onMenuClose,
        value: props.colourPalette
      });
    }
  }, {
    key: "renderGradientMode",
    value: function renderGradientMode() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_GradientColourPalettePicker["default"], {
        field: props.field,
        onChange: function onChange(palette) {
          props.onDataColumnColourPaletteChange(palette.name, "gradient");
        },
        onMenuClose: props.onMenuClose,
        value: props.colourPalette
      });
    }
  }, {
    key: "renderFieldMode",
    value: function renderFieldMode() {
      var _props$colourSettings;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiFieldsList["default"], {
        columns: props.dataColumns,
        onChange: function onChange(value) {
          return props.onDataColumnColourFieldChange(value);
        },
        value: (_props$colourSettings = props.colourSettings) === null || _props$colourSettings === void 0 ? void 0 : _props$colourSettings.field,
        valueProperty: "name"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var state = this.state;
      return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        flexDirection: "column"
      }, /*#__PURE__*/_react["default"].createElement(_UiToggleButtons["default"] // label="Colour Mode"
      , {
        onChange: function onChange(value) {
          return _this2.setState({
            colourMode: value !== null && value !== void 0 ? value : state.colourMode
          });
        },
        value: state.colourMode
      }, this.colourModeOptions.map(function (x) {
        return /*#__PURE__*/_react["default"].createElement("small", {
          key: x.value,
          value: x.value
        }, x.label);
      })), state.colourMode === "categorical" ? this.renderCategoricalMode() : state.colourMode === "gradient" ? this.renderGradientMode() : state.colourMode === "field" ? this.renderFieldMode() : null);
    }
  }]);
  return ColourSettingsContent;
}(_react["default"].PureComponent);

ColourSettingsContent.displayName = "ColourSettingsContent";
ColourSettingsContent.propTypes = {
  colourMode: _propTypes2.ColourModes,
  colourPalette: _propTypes2.StylePalette,
  colourSettings: _propTypes["default"].object,
  dataColumn: _propTypes2.DataColumn.isRequired,
  dataColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn),
  field: _propTypes["default"].string.isRequired,
  onDataColumnColourFieldChange: _propTypes["default"].func.isRequired,
  onDataColumnColourPaletteChange: _propTypes["default"].func.isRequired,
  onMenuClose: _propTypes["default"].func.isRequired
};
var _default = ColourSettingsContent;
exports["default"] = _default;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _get2 = _interopRequireDefault(__webpack_require__(120));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reselect = __webpack_require__(10);

var _colours = __webpack_require__(87);

var _propTypes2 = __webpack_require__(14);

var _browser = __webpack_require__(21);

var _ColourPaletteList = _interopRequireDefault(__webpack_require__(147));

var _CustomColourPaletteEditor = _interopRequireDefault(__webpack_require__(148));

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(42));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function calculateDefaultNumberOfSteps(colours) {
  if (colours >= 24) {
    return 24;
  } else {
    var _iterator = _createForOfIteratorHelper(_colours.colourSteps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var step = _step.value;

        if (step >= colours) {
          return step;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return 24;
  }
}

var CategoricalColourPalettePicker = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(CategoricalColourPalettePicker, _React$PureComponent);

  var _super = _createSuper(CategoricalColourPalettePicker);

  function CategoricalColourPalettePicker(props) {
    var _props$value$entries$, _props$value, _props$value$entries, _props$value2, _props$value3;

    var _this;

    (0, _classCallCheck2["default"])(this, CategoricalColourPalettePicker);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "itemsSelector", (0, _reselect.createSelector)(function (params) {
      return params.paletteType;
    }, function (params) {
      return params.paletteSize;
    }, function (paletteType, paletteSize) {
      return _this.props.colourPalettes.filter(function (x) {
        return (paletteType === "all" || paletteType === x.type) && paletteSize === x.entries.length;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "paletteTypeOptions", [{
      value: "all"
    }, {
      value: "diverging"
    }, {
      value: "qualitative"
    }, {
      value: "sequential"
    }, {
      value: "singlehue"
    }]);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "paletteSizeOptions", _colours.colourSteps.map(function (value) {
      return {
        value: value
      };
    }));
    _this.state = {
      paletteType:
      /* props?.value?.type ?? */
      "all",
      paletteSize: calculateDefaultNumberOfSteps((_props$value$entries$ = props === null || props === void 0 ? void 0 : (_props$value = props.value) === null || _props$value === void 0 ? void 0 : (_props$value$entries = _props$value.entries) === null || _props$value$entries === void 0 ? void 0 : _props$value$entries.length) !== null && _props$value$entries$ !== void 0 ? _props$value$entries$ : 24),
      custom: (props === null || props === void 0 ? void 0 : (_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.type) === "custom" && !((props === null || props === void 0 ? void 0 : (_props$value3 = props.value) === null || _props$value3 === void 0 ? void 0 : _props$value3.bins) >= 0)
    };
    return _this;
  }

  (0, _createClass2["default"])(CategoricalColourPalettePicker, [{
    key: "setState",
    value: function setState(updater) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(CategoricalColourPalettePicker.prototype), "setState", this).call(this, updater, _browser.triggerWindowResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !state.custom && /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Palette type",
        onChange: function onChange(value) {
          return _this2.setState({
            paletteType: value
          });
        },
        options: this.paletteTypeOptions,
        value: state.paletteType
      }), !state.custom && /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Number of colours",
        onChange: function onChange(value) {
          return _this2.setState({
            paletteSize: value
          });
        },
        options: this.paletteSizeOptions,
        value: state.paletteSize
      }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
        label: "Custom Palette",
        onChange: function onChange(value) {
          return _this2.setState({
            custom: value
          });
        },
        value: state.custom
      }), !state.custom && /*#__PURE__*/_react["default"].createElement(_ColourPaletteList["default"], {
        items: this.itemsSelector(state),
        onChange: props.onChange,
        value: props.value
      }), state.custom && /*#__PURE__*/_react["default"].createElement(_CustomColourPaletteEditor["default"], {
        colourPalette: props.value,
        field: props.field,
        onClose: props.onMenuClose,
        onCustomPaletteCreated: props.onChange
      }));
    }
  }]);
  return CategoricalColourPalettePicker;
}(_react["default"].PureComponent);

CategoricalColourPalettePicker.displayName = "CategoricalColourPalettePicker";
CategoricalColourPalettePicker.propTypes = {
  colourPalettes: _propTypes["default"].arrayOf(_propTypes2.StylePalette),
  field: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onMenuClose: _propTypes["default"].func.isRequired,
  value: _propTypes2.StylePalette
};
CategoricalColourPalettePicker.defaultProps = {
  colourPalettes: _colours.colourRanges
};
var _default = CategoricalColourPalettePicker;
exports["default"] = _default;

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _d3Scale = __webpack_require__(115);

__webpack_require__(356);

var _propTypes2 = __webpack_require__(14);

var ColourPalette = /*#__PURE__*/_react["default"].memo(function (props) {
  var range = [Array.isArray(props.palette.entries[0]) ? props.palette.entries[0][1] : props.palette.entries[0], Array.isArray(props.palette.entries[props.palette.entries.length - 1]) ? props.palette.entries[props.palette.entries.length - 1][1] : props.palette.entries[props.palette.entries.length - 1]];
  var numberOfBins = props.palette.bins || props.bins;

  if (numberOfBins === 0) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-colour-palette",
      title: props.title,
      style: {
        background: "linear-gradient(0.25turn, ".concat(range[0], ", ").concat(range[1], ")")
      }
    });
  } else if (numberOfBins > 0) {
    var entries = [];
    var colourGetter = (0, _d3Scale.scaleLinear)().domain([1, numberOfBins]).range(range);

    for (var index = 1; index <= numberOfBins; index++) {
      entries.push( /*#__PURE__*/_react["default"].createElement("span", {
        key: index,
        style: {
          backgroundColor: colourGetter(index)
        }
      }));
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-colour-palette",
      title: props.title
    }, entries);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-colour-palette",
    title: props.title
  }, props.palette.entries.map(function (entry) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: Array.isArray(entry) ? entry[0] : entry,
      style: {
        backgroundColor: Array.isArray(entry) ? entry[1] : entry
      },
      title: Array.isArray(entry) ? "".concat(entry[0], ": ").concat(entry[1]) : undefined
    });
  }));
});

ColourPalette.displayName = "ColourPalette";
ColourPalette.propTypes = {
  palette: _propTypes2.StylePalette.isRequired,
  title: _propTypes["default"].string
};
var _default = ColourPalette;
exports["default"] = _default;

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _lib = _interopRequireDefault(__webpack_require__(84));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(358);

var _constants = __webpack_require__(12);

var _hash = __webpack_require__(46);

var _propTypes2 = __webpack_require__(14);

var _ColourPicker = _interopRequireDefault(__webpack_require__(359));

var _browser = __webpack_require__(21);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CustomColourPaletteEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(CustomColourPaletteEditor, _React$PureComponent);

  var _super = _createSuper(CustomColourPaletteEditor);

  function CustomColourPaletteEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomColourPaletteEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tableRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "baseTableCols", [{
      dataKey: "value",
      key: "value",
      name: "value",
      title: "Value",
      width: 160,
      className: "mr-value-cell",
      cellRenderer: function cellRenderer(_ref) {
        var cellData = _ref.cellData,
            columns = _ref.columns,
            column = _ref.column,
            columnIndex = _ref.columnIndex,
            rowData = _ref.rowData,
            rowIndex = _ref.rowIndex,
            container = _ref.container,
            isScrolling = _ref.isScrolling;

        if (_this.isNumeric()) {
          return rowIndex === 0 ? "Start colour" : "End colour";
        } else {
          return cellData === null || cellData === void 0 ? void 0 : cellData.toString();
        }
      }
    }, {
      dataKey: "colour",
      key: "colour",
      name: "colour",
      title: "Colour",
      width: 184,
      cellRenderer: function cellRenderer(_ref2) {
        var cellData = _ref2.cellData,
            columns = _ref2.columns,
            column = _ref2.column,
            columnIndex = _ref2.columnIndex,
            rowData = _ref2.rowData,
            rowIndex = _ref2.rowIndex,
            container = _ref2.container,
            isScrolling = _ref2.isScrolling;
        return /*#__PURE__*/_react["default"].createElement(_ColourPicker["default"], {
          value: cellData !== null && cellData !== void 0 ? cellData : "white",
          onChange: function onChange(colour) {
            return _this.updateEntry(rowData, {
              colour: colour
            });
          }
        });
      }
    }]);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isNumeric", function () {
      return _this.props.bins >= 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateEntry", function (row, update) {
      var rows = (0, _toConsumableArray2["default"])(_this.state.rows);
      var index = rows.findIndex(function (x) {
        return x.id === row.id;
      });
      rows[index] = _objectSpread(_objectSpread(_objectSpread({}, rows[index]), row), update);

      _this.setState({
        rows: rows
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSave", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var entries = [];

      var _iterator = _createForOfIteratorHelper(state.rows),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          entries.push([row.value, row.colour]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (props.colourPalette.type === "custom") {
        props.onUpdatePalette({
          bins: props.bins,
          entries: entries,
          name: props.colourPalette.name
        });
      } else {
        var palette = {
          bins: props.bins,
          entries: entries,
          label: props.field ? "Custom Palettle for ".concat(props.field) : undefined,
          name: "palette-".concat((0, _hash.generateHashId)())
        };
        props.onAddPalette(palette // props.field,
        );

        if (props.onCustomPaletteCreated) {
          (0, _browser.nextTick)(function () {
            return props.onCustomPaletteCreated(palette);
          });
        }
      }

      props.onClose && props.onClose();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderActions", function () {
      return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        style: _constants.fullSizeStyle
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: _this.handleSave,
        variant: "outlined",
        size: "small",
        disableElevation: true
      }, "Confirm"));
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomColourPaletteEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      var rows = [];

      if (props.colourPalette.type === "custom") {
        var _iterator2 = _createForOfIteratorHelper(props.colourPalette.entries),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var x = _step2.value;
            rows.push({
              id: (0, _hash.generateHashId)(),
              value: x[0],
              colour: x[1]
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else if (this.isNumeric()) {
        rows.push({
          id: 0,
          colour: props.colourPalette.entries[0]
        });
        rows.push({
          id: 1,
          colour: props.colourPalette.entries[props.colourPalette.entries.length - 1]
        });
      } else {
        var _iterator3 = _createForOfIteratorHelper(props.colourMap.entries()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = (0, _slicedToArray2["default"])(_step3.value, 2),
                value = _step3$value[0],
                colour = _step3$value[1];

            rows.push({
              id: (0, _hash.generateHashId)(),
              value: value,
              colour: colour
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      this.setState({
        rows: rows // initialRows: rows,

      });
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-custom-colour-palette-editor"
      }, /*#__PURE__*/_react["default"].createElement(_lib["default"], {
        columns: this.baseTableCols,
        data: state.rows,
        fixed: true,
        headerHeight: 0,
        height: this.isNumeric() ? 104 : 264,
        ref: this.tableRef,
        rowHeight: 32,
        rowKey: "id",
        width: 368 - 2,
        footerHeight: 40,
        footerRenderer: this.renderActions
      }));
    }
  }]);
  return CustomColourPaletteEditor;
}(_react["default"].PureComponent);

CustomColourPaletteEditor.propTypes = {
  colourMap: _propTypes["default"].instanceOf(Map),
  colourPalette: _propTypes2.StylePalette,
  field: _propTypes["default"].string,
  mode: _propTypes["default"].oneOf(["edit", "create"]),
  onAddPalette: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func,
  onUpdatePalette: _propTypes["default"].func.isRequired,
  bins: _propTypes["default"].number
};
CustomColourPaletteEditor.displayName = "CustomColourPaletteEditor";
var _default = CustomColourPaletteEditor;
exports["default"] = _default;

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactColor = __webpack_require__(360);

__webpack_require__(361);

var _UiPopover = _interopRequireDefault(__webpack_require__(149));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ColourPicker = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ColourPicker, _React$PureComponent);

  var _super = _createSuper(ColourPicker);

  function ColourPicker() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColourPicker);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      colour: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "anchorRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      if (_this.state.colour) {
        _this.handleClose();
      } else {
        _this.setState({
          colour: _this.props.value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      var colour = _this.state.colour;

      if (colour) {
        _this.setState({
          colour: null
        });

        _this.props.onChange(colour);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (args) {
      _this.setState({
        colour: args.hex
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColourPicker, [{
    key: "render",
    value: function render() {
      var _this$state$colour;

      var currentValue = (_this$state$colour = this.state.colour) !== null && _this$state$colour !== void 0 ? _this$state$colour : this.props.value;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-colour-picker",
        ref: this.anchorRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-swatch",
        onClick: this.handleClick
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-colour",
        style: {
          background: currentValue
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-label"
      }, currentValue)), this.state.colour && /*#__PURE__*/_react["default"].createElement(_UiPopover["default"], {
        className: "mr-colour-picker-dialog",
        isOpen: true,
        onClose: this.handleClose,
        anchorEl: this.anchorRef.current
      }, /*#__PURE__*/_react["default"].createElement(_reactColor.SketchPicker, {
        color: this.state.colour,
        onChange: this.handleChange
      })));
    }
  }]);
  return ColourPicker;
}(_react["default"].PureComponent);

ColourPicker.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].string.isRequired
};
var _default = ColourPicker;
exports["default"] = _default;

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Backspace");

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _panes = __webpack_require__(58);

var _ui = __webpack_require__(27);

var _layoutModel = _interopRequireDefault(__webpack_require__(40));

var _LayoutManager = _interopRequireDefault(__webpack_require__(371));

var _state = __webpack_require__(3);

var mapStateToProps = function mapStateToProps(state) {
  return {
    layoutModel: (0, _layoutModel["default"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLayoutModelChange: function onLayoutModelChange(model) {
      return dispatch((0, _panes.setLayoutModel)(model));
    },
    onAddView: function onAddView(componentName) {
      return dispatch((0, _panes.addView)(componentName));
    },
    onEditPane: function onEditPane(paneId) {
      return dispatch((0, _ui.openPaneEditor)(paneId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_LayoutManager["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _flexlayoutReact = _interopRequireDefault(__webpack_require__(91));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _CloseRounded = _interopRequireDefault(__webpack_require__(47));

__webpack_require__(372);

var _components = __webpack_require__(373);

var _browser = __webpack_require__(21);

var _constants = __webpack_require__(12);

var _events = __webpack_require__(61);

var _UiSpinningLoader = _interopRequireDefault(__webpack_require__(140));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var closeIcon = /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], null);

var modelActionLabels = {
  FlexLayout_AddNode: "Add pane",
  FlexLayout_MoveNode: "Move pane",
  FlexLayout_DeleteTab: "Close pane",
  FlexLayout_RenameTab: "Rename pane",
  // FlexLayout_SelectTab: "Select pane",
  // FlexLayout_SetActiveTabset: "Set active paneset",
  FlexLayout_AdjustSplit: "Resize panes",
  FlexLayout_AdjustBorderSplit: "Resize panes",
  FlexLayout_MaximizeToggle: "Maximize pane" // FlexLayout_UpdateModelAttributes: "Update model attributes",
  // FlexLayout_UpdateNodeAttributes: "Update pane attributes",
  // FlexLayout_FloatTab: "Float pane",
  // FlexLayout_UnFloatTab: "Un float pane",

};

var DynamicPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DynamicPane, _React$PureComponent);

  var _super = _createSuper(DynamicPane);

  function DynamicPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, DynamicPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      PaneComponent: null
    });
    return _this;
  }

  (0, _createClass2["default"])(DynamicPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var componentName = this.props.node.getComponent();
      this.props.fetchComponent(componentName).then(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            PaneComponent = _ref2[0],
            done = _ref2[1];

        _this2.setState({
          PaneComponent: PaneComponent
        }, function () {
          return setTimeout(done, 0);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      var PaneComponent = state.PaneComponent;

      if (PaneComponent) {
        var component = props.node.getComponent();
        var rect = props.node.getRect();
        var paneId = "".concat(component.toLowerCase(), "Id");
        return /*#__PURE__*/_react["default"].createElement(PaneComponent, (0, _extends2["default"])({}, (0, _defineProperty2["default"])({}, paneId, props.node._attributes.id), {
          height: rect.height,
          width: rect.width
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_UiSpinningLoader["default"], null);
      }
    }
  }]);
  return DynamicPane;
}(_react["default"].PureComponent);

DynamicPane.propTypes = {
  fetchComponent: _propTypes["default"].func.isRequired,
  node: _propTypes["default"].object.isRequired
};

var LayoutManager = /*#__PURE__*/function (_React$PureComponent2) {
  (0, _inherits2["default"])(LayoutManager, _React$PureComponent2);

  var _super2 = _createSuper(LayoutManager);

  function LayoutManager() {
    var _this3;

    (0, _classCallCheck2["default"])(this, LayoutManager);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "elRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "queue", []);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "fetchComponent", function (componentName) {
      return new Promise(function (resolve) {
        var componentPromise = (0, _components.componentLoader)(componentName);

        _this3.queue.push({
          promise: componentPromise,
          callback: resolve
        });

        if (_this3.queue.length === 1) {
          (0, _browser.nextTick)(_this3.dequeue);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "dequeue", function () {
      var request = _this3.queue.shift();

      if (request) {
        request.promise.then(function (componentModule) {
          return request.callback([componentModule, _this3.dequeue]);
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "componentFactory", function (node) {
      if ( // node._attributes.enableDrag === false
      // &&
      !node._visible) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(DynamicPane, {
        fetchComponent: _this3.fetchComponent,
        node: node
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "updateRect", function () {
      _this3.props.onLayoutModelChange(_this3.props.layoutModel);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "handleModelAction", function (action) {
      _this3.props.layoutModel.actionLabel = modelActionLabels[action.type];

      if (action.type === _flexlayoutReact["default"].Actions.ADD_NODE && action.data.json["new"] === true) {
        var component = action.data.json.component;

        var _this3$props$onAddVie = _this3.props.onAddView(component),
            payload = _this3$props$onAddVie.payload;

        action.data.json = {
          id: payload.paneId,
          type: "tab",
          name: component,
          component: component
        };
        _this3.props.layoutModel.actionLabel = "Add ".concat(component, " pane");

        if (_constants.editableComponents.includes(component)) {
          (0, _browser.nextFrame)(function () {
            return _this3.props.onEditPane(payload.paneId);
          });
        }
      }

      if (action.type === _flexlayoutReact["default"].Actions.SELECT_TAB) {
        var tabNode = _this3.props.layoutModel.getNodeById(action.data.tabNode);

        if (tabNode._visible) {
          if (tabNode.getParent()._attributes.type === "border") {
            tabNode.getParent()._setSelected(-1);

            (0, _browser.nextTick)(function () {
              return _this3.props.onLayoutModelChange(_this3.props.layoutModel);
            });
          }

          return;
        }
      } // Ignore set active tabset action as we do not use active tabs


      if (action.type === _flexlayoutReact["default"].Actions.SET_ACTIVE_TABSET) {
        return;
      } // eslint-disable-next-line consistent-return


      return action;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "classNameMapper", function (defaultClassName) {
      if (defaultClassName === "flexlayout__layout") {
        return (0, _classnames["default"])("flexlayout__layout", "mr-panes");
      } else {
        return defaultClassName;
      }
    });
    return _this3;
  }

  (0, _createClass2["default"])(LayoutManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.addNewPaneUnsubscribe = (0, _events.subscribe)("add-new-pane", function (_ref4) {
        var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
            label = _ref5[0],
            tab = _ref5[1];

        _this4.elRef.current.addTabWithDragAndDrop("".concat(label, "<br />(Esc to cancel)"), tab);

        (0, _browser.nextFrame)(function () {
          return _flexlayoutReact["default"].DragDrop.instance._glass.focus();
        });
      });
      this.props.onLayoutModelChange(this.props.layoutModel);
      window.addEventListener("resize", this.updateRect);
    } // componentDidUpdate(prevProps, prevState) {
    //   if (prevProps.layoutModel !== this.props.layoutModel && prevProps.layoutModel && this.props.layoutModel) {
    //     const rect = prevProps.layoutModel._borderRects.outer;
    //     relayoutModel(this.props.layoutModel, rect);
    //   }
    // }

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this === null || this === void 0 ? void 0 : this.addNewPaneUnsubscribe();
      window.removeEventListener("resize", this.updateRect);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_flexlayoutReact["default"].Layout, {
        classNameMapper: this.classNameMapper,
        factory: this.componentFactory,
        model: this.props.layoutModel,
        onAction: this.handleModelAction,
        onModelChange: this.props.onLayoutModelChange,
        ref: this.elRef,
        popoutURL: "/popout.html",
        icons: {
          close: closeIcon
        }
      });
    }
  }]);
  return LayoutManager;
}(_react["default"].PureComponent);

LayoutManager.displayName = "Panes";
LayoutManager.propTypes = {
  layoutModel: _propTypes["default"].object.isRequired,
  onAddView: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  onLayoutModelChange: _propTypes["default"].func.isRequired
};
var _default = LayoutManager;
exports["default"] = _default;

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentLoader = componentLoader;

// export function componentLoader(componentName) {
//   if (componentName === "Chart") { return Promise.resolve(require("../containers/ChartPane.react").default); }
//   if (componentName === "History") { return Promise.resolve(require("../containers/HistoryPane.react").default); }
//   if (componentName === "Legend") { return Promise.resolve(require("../containers/LegendPane.react").default); }
//   if (componentName === "Map") { return Promise.resolve(require("../containers/MapPane.react").default); }
//   if (componentName === "Network") { return Promise.resolve(require("../containers/NetworkPlaceholder.react").default); }
//   if (componentName === "Note") { return Promise.resolve(require("../containers/NotePane.react").default); }
//   if (componentName === "Table") { return Promise.resolve(require("../containers/TablePlaceholder.react").default); }
//   if (componentName === "Timeline") { return Promise.resolve(require("../containers/TimelinePane.react").default); }
//   if (componentName === "Tree") { return Promise.resolve(require("../containers/TreePlaceholder.react").default); }
//   if (componentName === "Views") { return Promise.resolve(require("../containers/ViewsPane.react").default); }
//   throw new Error(`Unknown component ${componentName}`);
// }
// import Chart from "../containers/ChartPane.react";
// import History from "../containers/HistoryPane.react";
// import Legend from "../containers/LegendPane.react";
// import Map from "../containers/MapPane.react";
// import Network from "../containers/NetworkPlaceholder.react";
// import Note from "../containers/NotePane.react";
// import Table from "../containers/TablePlaceholder.react";
// import Timeline from "../containers/TimelinePane.react";
// import Tree from "../containers/TreePlaceholder.react";
// import Views from "../containers/ViewsPane.react";
// import Selection from "../containers/SelectionPane.react";
// export function componentLoader(componentName) {
//   if (componentName === "Chart") { return Promise.resolve(Chart); }
//   if (componentName === "History") { return Promise.resolve(History); }
//   if (componentName === "Legend") { return Promise.resolve(Legend); }
//   if (componentName === "Map") { return Promise.resolve(Map); }
//   if (componentName === "Network") { return Promise.resolve(Network); }
//   if (componentName === "Note") { return Promise.resolve(Note); }
//   if (componentName === "Table") { return Promise.resolve(Table); }
//   if (componentName === "Timeline") { return Promise.resolve(Timeline); }
//   if (componentName === "Tree") { return Promise.resolve(Tree); }
//   if (componentName === "Views") { return Promise.resolve(Views); }
//   if (componentName === "Selection") { return Promise.resolve(Selection); }
//   throw new Error(`Unknown component ${componentName}`);
// }
function componentLoader(componentName) {
  if (componentName === "Chart") {
    return __webpack_require__.e(/* import() | chart */ 1).then(__webpack_require__.t.bind(null, 453, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "History") {
    return __webpack_require__.e(/* import() | history */ 2).then(__webpack_require__.t.bind(null, 454, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Legend") {
    return Promise.all(/* import() | legend */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, 456, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Map") {
    return __webpack_require__.e(/* import() | map */ 5).then(__webpack_require__.t.bind(null, 459, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Network") {
    return __webpack_require__.e(/* import() | network */ 6).then(__webpack_require__.t.bind(null, 462, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Note") {
    return __webpack_require__.e(/* import() | note */ 7).then(__webpack_require__.t.bind(null, 464, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Slicer") {
    return __webpack_require__.e(/* import() | slicer */ 8).then(__webpack_require__.t.bind(null, 467, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Table") {
    return __webpack_require__.e(/* import() | table */ 9).then(__webpack_require__.t.bind(null, 468, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Timeline") {
    return __webpack_require__.e(/* import() | timeline */ 10).then(__webpack_require__.t.bind(null, 478, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Tree") {
    return __webpack_require__.e(/* import() | tree */ 11).then(__webpack_require__.t.bind(null, 487, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Views") {
    return Promise.all(/* import() | views */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.t.bind(null, 489, 7)).then(function (x) {
      return x["default"];
    });
  }

  if (componentName === "Selection") {
    return Promise.all(/* import() | views */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.t.bind(null, 495, 7)).then(function (x) {
      return x["default"];
    });
  }

  throw new Error("Unknown component ".concat(componentName));
}

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ui = __webpack_require__(27);

var _layoutModel = _interopRequireDefault(__webpack_require__(40));

var _state = __webpack_require__(3);

var _PanesEditor = _interopRequireDefault(__webpack_require__(375));

var _panes = __webpack_require__(58);

var mapStateToProps = function mapStateToProps(state) {
  var _state$config$editor, _state$config$editor2, _state$config$editor3, _state$config$editor4;

  return {
    layoutModel: (0, _layoutModel["default"])(state),
    paneId: (_state$config$editor = state.config.editor) === null || _state$config$editor === void 0 ? void 0 : _state$config$editor.paneId,
    mode: (_state$config$editor2 = state.config.editor) === null || _state$config$editor2 === void 0 ? void 0 : _state$config$editor2.mode,
    isValidator: ((_state$config$editor3 = state.config.editor) === null || _state$config$editor3 === void 0 ? void 0 : _state$config$editor3.mode) === "validation",
    isEditor: ((_state$config$editor4 = state.config.editor) === null || _state$config$editor4 === void 0 ? void 0 : _state$config$editor4.mode) === "edit"
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _ui.closePaneEditor)());
    },
    onContinue: function onContinue() {
      return dispatch((0, _ui.verify)());
    },
    onEditPane: function onEditPane(paneId) {
      return dispatch((0, _ui.openPaneEditor)(paneId));
    },
    onRemovePane: function onRemovePane(paneId) {
      return dispatch((0, _panes.removePane)(paneId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_PanesEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _List = _interopRequireDefault(__webpack_require__(121));

var _ListItem = _interopRequireDefault(__webpack_require__(63));

var _ListItemText = _interopRequireDefault(__webpack_require__(85));

var _ListItemAvatar = _interopRequireDefault(__webpack_require__(376));

var _Avatar = _interopRequireDefault(__webpack_require__(377));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _reselect = __webpack_require__(10);

__webpack_require__(156);

var _MapPaneEditor = _interopRequireDefault(__webpack_require__(378));

var _NetworkPaneEditor = _interopRequireDefault(__webpack_require__(386));

var _PaneIcon = _interopRequireDefault(__webpack_require__(55));

var _TablePaneEditor = _interopRequireDefault(__webpack_require__(389));

var _TimelinePaneEditor = _interopRequireDefault(__webpack_require__(394));

var _TreePaneEditor = _interopRequireDefault(__webpack_require__(396));

var _SlicerPaneEditor = _interopRequireDefault(__webpack_require__(398));

var _UiDialog = _interopRequireDefault(__webpack_require__(92));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PaneEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(PaneEditor, _React$PureComponent);

  var _super = _createSuper(PaneEditor);

  function PaneEditor(_props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PaneEditor);
    _this = _super.call(this, _props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "panesSelector", (0, _reselect.createSelector)(function (props) {
      return props.layoutModel;
    }, function (layoutModel) {
      var panes = [];

      for (var _i = 0, _Object$values = Object.values(layoutModel._idMap); _i < _Object$values.length; _i++) {
        var node = _Object$values[_i];

        if (node._attributes.type === "tab" && node._attributes.component && !node._attributes.id.startsWith("#") && !node._attributes.id.startsWith("--mr-")) {
          panes.push({
            paneId: node._attributes.id,
            component: node._attributes.component,
            name: node._attributes.name
          });
        }
      }

      return panes;
    }));
    _this.state = {
      isEditor: _props.isEditor
    };
    return _this;
  }

  (0, _createClass2["default"])(PaneEditor, [{
    key: "renderStep",
    value: function renderStep() {
      var props = this.props;
      var pane = this.panesSelector(props).find(function (x) {
        return x.paneId === props.paneId;
      });

      if (!props.paneId || !pane) {
        return null;
      }

      var key = [props.isEditor, props.isValidator, props.paneId].join("-");

      if (pane.component === "Table") {
        return /*#__PURE__*/_react["default"].createElement(_TablePaneEditor["default"], {
          tableId: pane.paneId,
          key: key
        });
      }

      if (pane.component === "Map") {
        return /*#__PURE__*/_react["default"].createElement(_MapPaneEditor["default"], {
          mapId: pane.paneId,
          key: key
        });
      }

      if (pane.component === "Tree") {
        return /*#__PURE__*/_react["default"].createElement(_TreePaneEditor["default"], {
          treeId: pane.paneId,
          key: key
        });
      }

      if (pane.component === "Network") {
        return /*#__PURE__*/_react["default"].createElement(_NetworkPaneEditor["default"], {
          networkId: pane.paneId,
          key: key
        });
      }

      if (pane.component === "Timeline") {
        return /*#__PURE__*/_react["default"].createElement(_TimelinePaneEditor["default"], {
          timelineId: pane.paneId,
          key: key
        });
      }

      if (pane.component === "Slicer") {
        return /*#__PURE__*/_react["default"].createElement(_SlicerPaneEditor["default"], {
          slicerId: pane.paneId,
          key: key
        });
      }

      return null;
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var props = this.props;
      var pane = this.panesSelector(props).find(function (x) {
        return x.paneId === props.paneId;
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !props.isValidator && pane && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "outlined",
        disableElevation: true,
        onClick: function onClick() {
          return props.onRemovePane(pane.paneId);
        },
        className: "mr-remove-pane"
      }, "Remove ", pane.component), !props.isValidator && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "outlined",
        disableElevation: true,
        onClick: props.onClose
      }, "Close"), props.isValidator && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "primary",
        variant: "contained",
        disableElevation: true,
        onClick: props.onContinue
      }, "Continue"));
    }
  }, {
    key: "renderNav",
    value: function renderNav() {
      var props = this.props;

      if (this.state.isEditor) {
        return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
          variant: "outlined",
          className: "mr-panes-list"
        }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
          component: "nav",
          dense: true,
          disablePadding: true
        }, this.panesSelector(props).map(function (pane) {
          return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
            button: true,
            disableGutters: true,
            key: pane.paneId,
            onClick: function onClick() {
              return props.onEditPane(pane.paneId);
            },
            selected: props.paneId === pane.paneId
          }, /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
            component: pane.component
          }))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
            primary: pane.name,
            secondary: /*#__PURE__*/_react["default"].createElement("small", null, /*#__PURE__*/_react["default"].createElement("code", null, pane.paneId))
          }));
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var props = this.props;
      var pane = this.panesSelector(props).find(function (x) {
        return x.paneId === props.paneId;
      });

      if (pane) {
        var node = props.layoutModel.getNodeById(this.props.paneId);

        if (props.isEditor) {
          return "Edit Panel: ".concat(node === null || node === void 0 ? void 0 : node._attributes.name);
        } else if (props.isValidator) {
          return (node === null || node === void 0 ? void 0 : node._attributes.component) === "Table" ? "Data Table" : node === null || node === void 0 ? void 0 : node._attributes.component;
        } else {
          return node === null || node === void 0 ? void 0 : node._attributes.name;
        }
      } else {
        return "Select a panel to edit";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var isOpen = props.isEditor || props.isValidator;

      if (!isOpen) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_UiDialog["default"], {
        actions: this.renderActions(),
        className: "mr-panes-editor",
        disableDividers: true,
        fullWidth: true,
        hasCloseButton: !props.isValidator,
        isOpen: true,
        maxWidth: "md",
        onClose: props.onClose,
        title: this.renderTitle()
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        flexDirection: "row",
        style: {
          height: "100%",
          maxHeight: "100%"
        }
      }, this.renderNav(), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        className: "mr-pane-options",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
      }, this.renderStep())));
    }
  }]);
  return PaneEditor;
}(_react["default"].PureComponent);

PaneEditor.displayName = "PaneEditor";
PaneEditor.propTypes = {
  isEditor: _propTypes["default"].bool.isRequired,
  isValidator: _propTypes["default"].bool.isRequired,
  layoutModel: _propTypes["default"].object.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onContinue: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  onRemovePane: _propTypes["default"].func.isRequired,
  paneId: _propTypes["default"].string
};

var PaneEditorDialog = /*#__PURE__*/_react["default"].memo(function (props) {
  var isOpen = props.isEditor || props.isValidator;

  if (isOpen) {
    return /*#__PURE__*/_react["default"].createElement(PaneEditor, props);
  } else {
    return null;
  }
});

PaneEditorDialog.displayName = "PaneEditorDialog";
var _default = PaneEditorDialog;
exports["default"] = _default;

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _maps = __webpack_require__(73);

var _MapPaneEditor = _interopRequireDefault(__webpack_require__(379));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  return {
    dataFields: (0, _dataColumns["default"])(state),
    mapState: (0, _mapState["default"])(state, mapId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {
    onMapPropChange: function onMapPropChange(prop, value) {
      return dispatch((0, _maps.update)(mapId, prop, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_MapPaneEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _FileEditor = _interopRequireDefault(__webpack_require__(70));

var _propTypes2 = __webpack_require__(14);

var _constants = __webpack_require__(12);

function MapPaneEditor(props) {
  var _mapState$geodata;

  var mapState = props.mapState;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    label: "Map Type",
    variant: "outlined",
    size: "small",
    value: mapState.dataType,
    onChange: function onChange(value) {
      return props.onMapPropChange("dataType", value);
    },
    options: [{
      label: "Geographic Coordinates",
      secondary: "Metadata includes latitude and longitude columns",
      value: "geographic-coordinates"
    }, {
      label: "ISO 3166 Codes",
      secondary: "Metadata include a column for ISO 3166-1 or 3166-2 codes",
      value: "iso-3166-codes"
    }]
  }), mapState.dataType === "geographic-coordinates" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    style: _constants.halfWidthWithPaddingStyle
  }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "Latitude Column",
    options: props.dataFields.filter(function (x) {
      return x.isNumeric;
    }),
    onChange: function onChange(value) {
      return props.onMapPropChange("latitudeField", value.name);
    },
    value: mapState.latitudeField
  })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    style: _constants.halfWidthWithPaddingStyle
  }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "Longitude Column",
    options: props.dataFields.filter(function (x) {
      return x.isNumeric;
    }),
    onChange: function onChange(value) {
      return props.onMapPropChange("longitudeField", value.name);
    },
    value: mapState.longitudeField
  })))), mapState.dataType === "iso-3166-codes" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "ISO 3166 Column",
    options: props.dataFields.filter(function (x) {
      return x.dataType === "text";
    }),
    onChange: function onChange(value) {
      return props.onMapPropChange("iso3166Field", value.name);
    },
    value: mapState.iso3166Field
  }), /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    label: "Principal Subdivisions",
    variant: "outlined",
    size: "small",
    value: mapState.iso3166Subdivisions,
    onChange: function onChange(value) {
      return props.onMapPropChange("iso3166Subdivisions", value);
    },
    options: [{
      label: "Include Subdivisions",
      secondary: "Use both ISO 3166-1 and 3166-2 codes",
      value: true
    }, {
      label: "Ignore Subdivisions",
      secondary: "ISO 3166-2 codes will be replaced by 3166-1 codes (e.g. GB-CAM becomes GB)",
      value: false
    }]
  })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_FileEditor["default"], {
    fileId: mapState === null || mapState === void 0 ? void 0 : (_mapState$geodata = mapState.geodata) === null || _mapState$geodata === void 0 ? void 0 : _mapState$geodata.file,
    label: "GeoJSON File",
    paneId: props.mapId
  }));
}

MapPaneEditor.displayName = "MapPaneEditor";
MapPaneEditor.propTypes = {
  dataFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  mapId: _propTypes["default"].string.isRequired,
  mapState: _propTypes["default"].object.isRequired,
  onMapPropChange: _propTypes["default"].func.isRequired
};
var _default = MapPaneEditor;
exports["default"] = _default;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _FormControl = _interopRequireDefault(__webpack_require__(151));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _InputAdornment = _interopRequireDefault(__webpack_require__(93));

var _InputLabel = _interopRequireDefault(__webpack_require__(150));

var _OutlinedInput = _interopRequireDefault(__webpack_require__(381));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _validUrl = _interopRequireDefault(__webpack_require__(382));

var _SaveTwoTone = _interopRequireDefault(__webpack_require__(383));

var _InsertDriveFileTwoTone = _interopRequireDefault(__webpack_require__(137));

var _LinkTwoTone = _interopRequireDefault(__webpack_require__(384));

var _HighlightOffTwoTone = _interopRequireDefault(__webpack_require__(385));

var _EditTwoTone = _interopRequireDefault(__webpack_require__(142));

__webpack_require__(156);

var _browser = __webpack_require__(21);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FileEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(FileEditor, _React$PureComponent);

  var _super = _createSuper(FileEditor);

  function FileEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, FileEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      url: undefined
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fileInputRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.fileInputRef.current.value = null;

      _this.fileInputRef.current.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "editUrl", function () {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      _this.setState({
        url: url
      }, function () {
        return (0, _browser.nextTick)(function () {
          return _this.inputRef.current.focus();
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFileInputChange", function (event) {
      if (event.target.files && event.target.files.length === 1) {
        _this.props.onFileChange(event.target.files[0]);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSaveUrl", function () {
      var url = _this.state.url;
      var format = _this.props.file.format;

      _this.props.onFileChange({
        url: url,
        format: format
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(FileEditor, [{
    key: "renderInput",
    value: function renderInput() {
      var _this2 = this,
          _this$props$file,
          _this$props$file2,
          _this$props$file4;

      var props = this.props;

      if (this.state.url || this.state.url === "") {
        var isValidUrl = this.state.url === "" || _validUrl["default"].isUri(this.state.url);

        return /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          autoFocus: true,
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, this.state.url && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            title: isValidUrl ? "Save new URL" : "Invalid URL",
            onClick: this.onSaveUrl,
            edge: "end",
            disabled: !isValidUrl
          }, /*#__PURE__*/_react["default"].createElement(_SaveTwoTone["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            title: "Cancel",
            onClick: function onClick() {
              return _this2.setState({
                url: undefined
              });
            },
            edge: "end"
          }, /*#__PURE__*/_react["default"].createElement(_HighlightOffTwoTone["default"], null))),
          inputRef: this.inputRef,
          label: props.label,
          onChange: function onChange(event) {
            return _this2.setState({
              url: event.target.value
            });
          },
          placeholder: "Enter URL",
          value: this.state.url || "",
          error: !isValidUrl
        });
      }

      if (!props.file) {
        return /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          autoFocus: true,
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            edge: "end",
            onClick: this.handleClick,
            title: "Replace file"
          }, /*#__PURE__*/_react["default"].createElement("input", {
            onChange: this.onFileInputChange,
            ref: this.fileInputRef,
            style: {
              display: "none"
            },
            type: "file"
          }), /*#__PURE__*/_react["default"].createElement(_InsertDriveFileTwoTone["default"], null))),
          inputRef: this.inputRef,
          label: props.label,
          onChange: function onChange(event) {
            return _this2.setState({
              url: event.target.value
            });
          },
          placeholder: "Enter URL or select a file",
          value: this.state.url || ""
        });
      }

      if ((_this$props$file = this.props.file) !== null && _this$props$file !== void 0 && _this$props$file.blob || (_this$props$file2 = this.props.file) !== null && _this$props$file2 !== void 0 && _this$props$file2.name) {
        var _this$props$file$blob, _this$props$file$blob2, _this$props$file3;

        return /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          label: props.label,
          value: (_this$props$file$blob = (_this$props$file$blob2 = this.props.file.blob) === null || _this$props$file$blob2 === void 0 ? void 0 : _this$props$file$blob2.name) !== null && _this$props$file$blob !== void 0 ? _this$props$file$blob : (_this$props$file3 = this.props.file) === null || _this$props$file3 === void 0 ? void 0 : _this$props$file3.name,
          readOnly: true,
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            edge: "end",
            onClick: this.handleClick,
            title: "Replace file"
          }, /*#__PURE__*/_react["default"].createElement("input", {
            onChange: this.onFileInputChange,
            ref: this.fileInputRef,
            style: {
              display: "none"
            },
            type: "file"
          }), /*#__PURE__*/_react["default"].createElement(_InsertDriveFileTwoTone["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            title: "Enter URL",
            onClick: function onClick() {
              return _this2.editUrl();
            },
            edge: "end"
          }, /*#__PURE__*/_react["default"].createElement(_LinkTwoTone["default"], null)))
        });
      }

      if ((_this$props$file4 = this.props.file) !== null && _this$props$file4 !== void 0 && _this$props$file4.url) {
        var _this$props$file5;

        return /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            edge: "end",
            onClick: this.handleClick,
            title: "Replace file"
          }, /*#__PURE__*/_react["default"].createElement("input", {
            onChange: this.onFileInputChange,
            ref: this.fileInputRef,
            style: {
              display: "none"
            },
            type: "file"
          }), /*#__PURE__*/_react["default"].createElement(_InsertDriveFileTwoTone["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            title: "Edit URL",
            onClick: function onClick() {
              return _this2.editUrl(_this2.props.file.url);
            },
            edge: "end"
          }, /*#__PURE__*/_react["default"].createElement(_EditTwoTone["default"], null))),
          label: props.label,
          onChange: function onChange(event) {
            return _this2.setState({
              url: event.target.value
            });
          },
          value: (_this$props$file5 = this.props.file) === null || _this$props$file5 === void 0 ? void 0 : _this$props$file5.url
        });
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.file !== prevProps.file) {
        this.setState({
          url: undefined
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var size = props.size,
          variant = props.variant,
          label = props.label;
      return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        size: size,
        variant: variant
      }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, label), this.renderInput());
    }
  }]);
  return FileEditor;
}(_react["default"].PureComponent);

FileEditor.displayName = "FileEditor";
FileEditor.propTypes = {
  file: _propTypes["default"].object,
  onFileChange: _propTypes["default"].func.isRequired
};
FileEditor.defaultProps = {
  variant: "outlined",
  size: "small"
};
var _default = FileEditor;
exports["default"] = _default;

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = require("valid-url");

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SaveTwoTone");

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkTwoTone");

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HighlightOffTwoTone");

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _networks = __webpack_require__(79);

var _state = __webpack_require__(3);

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

var _networkFile = _interopRequireDefault(__webpack_require__(80));

var _networkState = _interopRequireDefault(__webpack_require__(68));

var _NetworkPaneEditor = _interopRequireDefault(__webpack_require__(387));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var networkId = _ref.networkId;
  return {
    mergedDataset: (0, _fullDataset["default"])(state),
    networkFile: (0, _networkFile["default"])(state, networkId),
    networkState: (0, _networkState["default"])(state, networkId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var networkId = _ref2.networkId;
  return {
    onNetworkPropChange: function onNetworkPropChange(prop, value) {
      return dispatch((0, _networks.update)(networkId, prop, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_NetworkPaneEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _reselect = __webpack_require__(10);

var _constants = __webpack_require__(12);

var _networks = __webpack_require__(208);

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _FileEditor = _interopRequireDefault(__webpack_require__(70));

var _MiniTable = _interopRequireDefault(__webpack_require__(157));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NetworkPaneEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(NetworkPaneEditor, _React$PureComponent);

  var _super = _createSuper(NetworkPaneEditor);

  function NetworkPaneEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, NetworkPaneEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allowedFieldsSelector", (0, _reselect.createSelector)(function (props) {
      return props.mergedDataset;
    }, function (data) {
      var _data$networkFile;

      return (_data$networkFile = data.networkFile) === null || _data$networkFile === void 0 ? void 0 : _data$networkFile._content;
    }, function (dataFile, networkFileContent) {
      var allowedFields = [];

      if (networkFileContent) {
        var nodeLabels = new Set((0, _networks.graphLabels)(networkFileContent));

        var _iterator = _createForOfIteratorHelper(dataFile.columns),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;

            var _iterator2 = _createForOfIteratorHelper(dataFile.rows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;

                if (nodeLabels.has(row[field.name])) {
                  allowedFields.push(field);
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return allowedFields;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultLabelField", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      return _this.allowedFieldsSelector(props).find(function (x, i) {
        return i === 0;
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(NetworkPaneEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;

      if (!props.networkState.nodeField) {
        var nodeField = this.defaultLabelField();

        if (nodeField) {
          props.onNetworkPropChange("nodeField", nodeField.name);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props$networkState$n;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FileEditor["default"], {
        fileId: props.networkState.file,
        label: "Network File",
        paneId: props.networkId
      }), props.networkFile && /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        autoFocus: !props.networkState.nodeField,
        error: !props.networkState.nodeField,
        helperText: "Choose the metadata column which contains network node labels",
        label: "Labels Column",
        onChange: function onChange(value) {
          return props.onNetworkPropChange("nodeField", value.name);
        },
        options: this.allowedFieldsSelector(props),
        required: true,
        value: (_props$networkState$n = props.networkState.nodeField) !== null && _props$networkState$n !== void 0 ? _props$networkState$n : this.defaultLabelField()
      }), props.networkFile && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        style: _constants.fullSizeStyle,
        variant: "outlined"
      }, /*#__PURE__*/_react["default"].createElement(_MiniTable["default"], {
        activeFields: this.allowedFieldsSelector(props),
        data: props.mergedDataset,
        inactiveColumnTitle: "This column does not contain network node labels",
        onHeaderClick: function onHeaderClick(header) {
          return props.onNetworkPropChange("nodeField", header.name);
        }
      })));
    }
  }]);
  return NetworkPaneEditor;
}(_react["default"].PureComponent);

NetworkPaneEditor.displayName = "NetworkPaneEditor";
NetworkPaneEditor.propTypes = {
  mergedDataset: _propTypes["default"].object.isRequired,
  networkFile: _propTypes["default"].object.isRequired,
  networkId: _propTypes["default"].string.isRequired,
  networkState: _propTypes["default"].object.isRequired,
  onNetworkPropChange: _propTypes["default"].func.isRequired
};
var _default = NetworkPaneEditor;
exports["default"] = _default;

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports = require("canvas2svg");

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _tables = __webpack_require__(76);

var _datasets = __webpack_require__(125);

var _TablePaneEditor = _interopRequireDefault(__webpack_require__(390));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _mainDatasetConfig = _interopRequireDefault(__webpack_require__(64));

var _tableState = _interopRequireDefault(__webpack_require__(90));

var _dataFiles = _interopRequireDefault(__webpack_require__(393));

var _ui = __webpack_require__(27);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function mapStateToProps(state, _ref) {
  var tableId = _ref.tableId;
  var masterDataset = (0, _mainDatasetConfig["default"])(state);
  var tableState = (0, _tableState["default"])(state, tableId);
  var dataFiles = (0, _dataFiles["default"])(state);
  var masterDataFile = dataFiles.find(function (x) {
    return x.id === (masterDataset === null || masterDataset === void 0 ? void 0 : masterDataset.file);
  });
  var datasets = Object.values(state.datasets);
  return {
    dataColumns: (0, _dataColumns["default"])(state),
    dataColumnsByFieldMap: (0, _dataColumnsByFieldMap["default"])(state),
    dataFiles: dataFiles,
    datasets: Object.values(state.datasets),
    isLinkedDataset: !!(masterDataset && masterDataset.file !== tableState.file),
    isMasterDataset: !!(masterDataset && masterDataset.file === tableState.file),
    linkedDataFile: dataFiles.find(function (x) {
      return x.id === tableState.file;
    }),
    masterDataFile: masterDataFile,
    masterDataset: masterDataset,
    tableDataset: datasets.find(function (x) {
      return x.file === tableState.file;
    }),
    tableState: tableState
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var tableId = _ref2.tableId;
  return {
    onSetMasterDataset: function onSetMasterDataset(id) {
      return dispatch((0, _ui.setMasterDataset)(id));
    },
    onTablePropChange: function onTablePropChange(prop, value) {
      return dispatch((0, _tables.update)(tableId, prop, value));
    },
    onUpdateColumnLabel: function onUpdateColumnLabel(id, columnName, value) {
      return dispatch((0, _datasets.setColumnLabel)(id, columnName, value));
    },
    onUpdateDataset: function onUpdateDataset(id, value) {
      return dispatch((0, _datasets.updateDataset)(id, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TablePaneEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _reselect = __webpack_require__(10);

var _Box = _interopRequireDefault(__webpack_require__(23));

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _DataColumnsEditor = _interopRequireDefault(__webpack_require__(391));

var _FileEditor = _interopRequireDefault(__webpack_require__(70));

var _constants = __webpack_require__(12);

var _propTypes2 = __webpack_require__(14);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TablePaneEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TablePaneEditor, _React$PureComponent);

  var _super = _createSuper(TablePaneEditor);

  function TablePaneEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, TablePaneEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "possibleIdFields", (0, _reselect.createSelector)(function (props) {
      return props.masterDataFile._content;
    }, function (_ref) {
      var rows = _ref.rows,
          columns = _ref.columns;
      var idFields = [];

      var _iterator = _createForOfIteratorHelper(columns),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dataColumn = _step.value;

          if (dataColumn.name !== "--mr-index") {
            var values = new Set();
            var isUnique = true;

            var _iterator2 = _createForOfIteratorHelper(rows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;
                var value = row[dataColumn.name];

                if (value === undefined || value === null || values.has(value)) {
                  isUnique = false;
                  break;
                } else {
                  values.add(value);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (isUnique) {
              idFields.push(dataColumn);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (idFields.length === 0) {
        idFields.push(columns.find(function (x) {
          return x.name === "--mr-index";
        }));
      }

      return idFields;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultIdField", function () {
      var _this$possibleIdField;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      return (_this$possibleIdField = _this.possibleIdFields(props).find(function (x) {
        return /^id$/i.test(x);
      })) !== null && _this$possibleIdField !== void 0 ? _this$possibleIdField : _this.possibleIdFields(props).find(function (x, i) {
        return i === 0;
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getDataColumns", function (dataFile) {
      var dataColumns = [];

      var _iterator3 = _createForOfIteratorHelper(dataFile._content.columns),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var column = _step3.value;

          var dataColumn = _this.props.dataColumnsByFieldMap.get(column.name);

          if (dataColumn) {
            dataColumns.push(dataColumn);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return dataColumns;
    });
    return _this;
  }

  (0, _createClass2["default"])(TablePaneEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props$masterDataset;

      var props = this.props;

      if (props.isMasterDataset && !((_props$masterDataset = props.masterDataset) !== null && _props$masterDataset !== void 0 && _props$masterDataset.idFieldName)) {
        var idField = this.defaultIdField();

        if (idField) {
          props.onUpdateDataset(props.masterDataset.id, {
            idFieldName: idField.name
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props$masterDataset3, _props$masterDataset4, _props$masterDataset$, _props$masterDataset5, _props$tableDataset, _props$tableDataset2, _props$tableDataset3;

      var props = this.props;
      var tableState = props.tableState;

      if (!props.masterDataset) {
        var _props$masterDataset2;

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-section"
        }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
          autoFocus: true,
          error: !((_props$masterDataset2 = props.masterDataset) !== null && _props$masterDataset2 !== void 0 && _props$masterDataset2.idFieldName) // helperText="Each row must have an unique id (i.e. the column cannot contain an id more than once)"
          ,
          label: "Main data file",
          onChange: function onChange(item) {
            var dataset = props.datasets.find(function (x) {
              return x.file === item.id;
            });
            props.onSetMasterDataset(dataset.id);
          },
          options: props.dataFiles,
          required: true // value={props.masterDataset?.idFieldName ?? this.defaultIdField()}

        })));
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FileEditor["default"], {
        fileId: tableState.file,
        label: "Data File",
        paneId: props.tableId
      }), props.isMasterDataset && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-section"
      }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        autoFocus: true,
        error: !((_props$masterDataset3 = props.masterDataset) !== null && _props$masterDataset3 !== void 0 && _props$masterDataset3.idFieldName) // helperText="Each row must have an unique id (i.e. the column cannot contain an id more than once)"
        ,
        label: (_props$masterDataset4 = props.masterDataset) !== null && _props$masterDataset4 !== void 0 && _props$masterDataset4.idFieldName ? "ID column" : "Select an ID column (Each row must have an unique id)",
        onChange: function onChange(item) {
          return props.onUpdateDataset(props.masterDataset.id, {
            idFieldName: item.name
          });
        },
        options: this.possibleIdFields(props),
        required: true,
        value: (_props$masterDataset$ = (_props$masterDataset5 = props.masterDataset) === null || _props$masterDataset5 === void 0 ? void 0 : _props$masterDataset5.idFieldName) !== null && _props$masterDataset$ !== void 0 ? _props$masterDataset$ : this.defaultIdField()
      })), props.isMasterDataset && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        variant: "outlined",
        style: _constants.fullSizeStyle
      }, props.masterDataFile && /*#__PURE__*/_react["default"].createElement(_DataColumnsEditor["default"], {
        dataColumns: this.getDataColumns(props.masterDataFile),
        onUpdateColumnLabel: function onUpdateColumnLabel(column, label) {
          return props.onUpdateColumnLabel(props.tableDataset.id, column, label);
        }
      })), props.isLinkedDataset && props.linkedDataFile && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-section"
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        style: _constants.fullSizeStyle
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        style: {
          width: "50%"
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        label: "Column in ".concat(props.masterDataFile.name),
        options: props.masterDataFile._content.columns,
        onChange: function onChange(item) {
          props.onUpdateDataset(props.tableDataset.id, {
            masterFieldName: item.name
          });
        },
        value: (_props$tableDataset = props.tableDataset) === null || _props$tableDataset === void 0 ? void 0 : _props$tableDataset.masterFieldName
      })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        style: {
          width: "50%"
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        label: "Column in ".concat(props.linkedDataFile.name),
        options: props.linkedDataFile._content.columns,
        onChange: function onChange(item) {
          props.onUpdateDataset(props.tableDataset.id, {
            linkFieldName: item.name
          });
        },
        value: (_props$tableDataset2 = props.tableDataset) === null || _props$tableDataset2 === void 0 ? void 0 : _props$tableDataset2.linkFieldName
      })))), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        variant: "outlined",
        style: _constants.fullSizeStyle
      }, props.linkedDataFile && ((_props$tableDataset3 = props.tableDataset) === null || _props$tableDataset3 === void 0 ? void 0 : _props$tableDataset3.linkFieldName) && /*#__PURE__*/_react["default"].createElement(_DataColumnsEditor["default"], {
        dataColumns: this.getDataColumns(props.linkedDataFile)
      }))));
    }
  }]);
  return TablePaneEditor;
}(_react["default"].PureComponent);

TablePaneEditor.displayName = "TablePaneEditor";
TablePaneEditor.propTypes = {
  dataColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn),
  dataColumnsByFieldMap: _propTypes["default"].instanceOf(Map),
  dataFiles: _propTypes["default"].array.isRequired,
  datasets: _propTypes["default"].array.isRequired,
  isLinkedDataset: _propTypes["default"].bool.isRequired,
  isMasterDataset: _propTypes["default"].bool.isRequired,
  linkedDataFile: _propTypes["default"].object.isRequired,
  masterDataFile: _propTypes["default"].object,
  masterDataset: _propTypes["default"].object,
  onSetMasterDataset: _propTypes["default"].func.isRequired,
  onTablePropChange: _propTypes["default"].func.isRequired,
  onUpdateColumnLabel: _propTypes["default"].func.isRequired,
  onUpdateDataset: _propTypes["default"].func.isRequired,
  tableDataset: _propTypes["default"].object.isRequired,
  tableId: _propTypes["default"].string.isRequired,
  tableState: _propTypes["default"].object.isRequired
};
var _default = TablePaneEditor;
exports["default"] = _default;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _AutoSizer = _interopRequireDefault(__webpack_require__(158));

var _lib = _interopRequireDefault(__webpack_require__(84));

var _ColourSettingsMenu = _interopRequireDefault(__webpack_require__(146));

__webpack_require__(392);

var _propTypes2 = __webpack_require__(14);

var _UiTextfield = _interopRequireDefault(__webpack_require__(49));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DataColumnsEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DataColumnsEditor, _React$PureComponent);

  var _super = _createSuper(DataColumnsEditor);

  function DataColumnsEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, DataColumnsEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      columnIndex: null,
      rowIndex: null,
      scrollToRow: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", [{
      dataKey: "label",
      key: "name",
      name: "name",
      title: "Column",
      width: 300,
      cellRenderer: function cellRenderer(_ref) {
        var cellData = _ref.cellData,
            columns = _ref.columns,
            column = _ref.column,
            columnIndex = _ref.columnIndex,
            rowData = _ref.rowData,
            rowIndex = _ref.rowIndex,
            container = _ref.container,
            isScrolling = _ref.isScrolling;
        return /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
          onChange: function onChange(value) {
            return _this.props.onUpdateColumnLabel(rowData.name, value);
          },
          size: "small",
          value: cellData,
          variant: "outlined"
        });
      }
    }, {
      dataKey: "dataType",
      key: "dataType",
      name: "dataType",
      title: "Data Type",
      width: 96 // cellRenderer: ({ cellData, columns, column, columnIndex, rowData, rowIndex, container, isScrolling }) => {
      //   return (
      //     <UiTextfield
      //       disabled
      //       variant="outlined"
      //       size="small"
      //       value={cellData}
      //     />
      //   );
      // },

    }, {
      className: "mr-colour-settings",
      dataKey: "colours",
      key: "colours",
      name: "colours",
      title: "Colours",
      width: 160,
      cellRenderer: function cellRenderer(_ref2) {
        var cellData = _ref2.cellData,
            columns = _ref2.columns,
            column = _ref2.column,
            columnIndex = _ref2.columnIndex,
            rowData = _ref2.rowData,
            rowIndex = _ref2.rowIndex,
            container = _ref2.container,
            isScrolling = _ref2.isScrolling;
        return /*#__PURE__*/_react["default"].createElement(_ColourSettingsMenu["default"], {
          field: rowData.name
        });
      }
    }, {
      className: "",
      dataKey: "shapes",
      key: "shapes",
      name: "shapes",
      title: "Shapes",
      width: 160,
      cellRenderer: function cellRenderer(_ref3) {
        var cellData = _ref3.cellData,
            columns = _ref3.columns,
            column = _ref3.column,
            columnIndex = _ref3.columnIndex,
            rowData = _ref3.rowData,
            rowIndex = _ref3.rowIndex,
            container = _ref3.container,
            isScrolling = _ref3.isScrolling;
        return null;
      }
    }]);
    return _this;
  }

  (0, _createClass2["default"])(DataColumnsEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_AutoSizer["default"], null, function (_ref4) {
        var height = _ref4.height,
            width = _ref4.width;
        return /*#__PURE__*/_react["default"].createElement(_lib["default"], {
          fixed: true,
          className: "mr-data-columns-editor",
          columns: _this2.columns,
          data: props.dataColumns.filter(function (x) {
            return !x.name.startsWith("--mr-");
          }),
          rowKey: "name",
          width: width,
          height: Math.max(200, height - 4),
          rowHeight: 42
        });
      });
    }
  }]);
  return DataColumnsEditor;
}(_react["default"].PureComponent);

exports["default"] = DataColumnsEditor;
DataColumnsEditor.displayName = "DataColumnsEditor";
DataColumnsEditor.propTypes = {
  dataColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  onHeaderClick: _propTypes["default"].func
};

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var dataFilesSelector = function dataFilesSelector(state) {
  return Object.values(state.files).filter(function (x) {
    return x.type === "data";
  });
};

var _default = dataFilesSelector;
exports["default"] = _default;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _timelines = __webpack_require__(77);

var _TimelinePaneEditor = _interopRequireDefault(__webpack_require__(395));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _timelineState = _interopRequireDefault(__webpack_require__(209));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  return {
    dataFields: (0, _dataColumns["default"])(state),
    timelineState: (0, _timelineState["default"])(state, timelineId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var timelineId = _ref2.timelineId;
  return {
    onTimelinePropChange: function onTimelinePropChange(prop, value) {
      return dispatch((0, _timelines.update)(timelineId, prop, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TimelinePaneEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _propTypes2 = __webpack_require__(14);

function TimelinePaneEditor(props) {
  var timelineState = props.timelineState;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    label: "Temporal Data Type",
    variant: "outlined",
    size: "small",
    value: timelineState.dataType,
    onChange: function onChange(value) {
      return props.onTimelinePropChange("dataType", value);
    },
    options: [{
      label: "Three columns: Year, Month, and Day",
      secondary: "Metadata includes three columns for year, month, and day.",
      value: "year-month-day"
    }, {
      label: "One column: Formatted Values",
      secondary: "Metadata include one column of temporal data",
      value: "formatted-value"
    }]
  }), timelineState.dataType === "year-month-day" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "Year Column",
    options: props.dataFields.filter(function (x) {
      return x.dataType === "number";
    }),
    onChange: function onChange(value) {
      return props.onTimelinePropChange("yearField", value.name);
    },
    value: timelineState.yearField
  }), /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "Month Column",
    options: props.dataFields.filter(function (x) {
      return x.dataType === "number";
    }),
    onChange: function onChange(value) {
      return props.onTimelinePropChange("monthField", value.name);
    },
    value: timelineState.monthField
  }), /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "Day Column",
    options: props.dataFields.filter(function (x) {
      return x.dataType === "number";
    }),
    onChange: function onChange(value) {
      return props.onTimelinePropChange("dayField", value.name);
    },
    value: timelineState.dayField
  })), timelineState.dataType === "formatted-value" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    label: "Temporal Data Column",
    options: props.dataFields.filter(function (x) {
      return x.dataType === "date";
    }),
    onChange: function onChange(value) {
      return props.onTimelinePropChange("valueField", value.name);
    },
    value: timelineState.valueField
  })));
}

TimelinePaneEditor.displayName = "TimelinePaneEditor";
TimelinePaneEditor.propTypes = {
  dataFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  timelineId: _propTypes["default"].string.isRequired,
  timelineState: _propTypes["default"].object.isRequired,
  onTimelinePropChange: _propTypes["default"].func.isRequired
};
var _default = TimelinePaneEditor;
exports["default"] = _default;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _trees = __webpack_require__(74);

var _treeState = _interopRequireDefault(__webpack_require__(60));

var _fullDataset = _interopRequireDefault(__webpack_require__(25));

var _treeFile = _interopRequireDefault(__webpack_require__(110));

var _state = __webpack_require__(3);

var _TreePaneEditor = _interopRequireDefault(__webpack_require__(397));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var treeId = _ref.treeId;
  return {
    mergedDataset: (0, _fullDataset["default"])(state),
    treeFile: (0, _treeFile["default"])(state, treeId),
    treeState: (0, _treeState["default"])(state, treeId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var treeId = _ref2.treeId;
  return {
    onTreePropChange: function onTreePropChange(prop, value) {
      return dispatch((0, _trees.update)(treeId, prop, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TreePaneEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _reselect = __webpack_require__(10);

var _constants = __webpack_require__(12);

var _trees = __webpack_require__(89);

var _FileEditor = _interopRequireDefault(__webpack_require__(70));

var _MiniTable = _interopRequireDefault(__webpack_require__(157));

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(42));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TreePaneEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TreePaneEditor, _React$PureComponent);

  var _super = _createSuper(TreePaneEditor);

  function TreePaneEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, TreePaneEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "leafLabelsSelector", (0, _reselect.createSelector)(function (props) {
      var _props$treeFile;

      return (_props$treeFile = props.treeFile) === null || _props$treeFile === void 0 ? void 0 : _props$treeFile._content;
    }, function (treeFileContent) {
      if (treeFileContent) {
        var treeLabels = new Set((0, _trees.newickLabels)(treeFileContent));
        return treeLabels;
      }

      return undefined;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allowedFieldsSelector", (0, _reselect.createSelector)(function (props) {
      return props.mergedDataset;
    }, _this.leafLabelsSelector, function (dataFile, treeLabels) {
      var allowedFields = [];

      if (treeLabels) {
        var _iterator = _createForOfIteratorHelper(dataFile.columns),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;

            var _iterator2 = _createForOfIteratorHelper(dataFile.rows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _row$field$name;

                var row = _step2.value;

                if (treeLabels.has((_row$field$name = row[field.name]) === null || _row$field$name === void 0 ? void 0 : _row$field$name.toString())) {
                  allowedFields.push(field);
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return allowedFields;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "numberOfOrphanDataRows", function () {
      var mergedDataset = _this.props.mergedDataset;

      var treeLabels = _this.leafLabelsSelector(_this.props);

      if (treeLabels) {
        return mergedDataset.rows.length - treeLabels.size;
      }

      return 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultLabelField", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      return _this.allowedFieldsSelector(props).find(function (x, i) {
        return i === 0;
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(TreePaneEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;

      if (!props.treeState.labelField) {
        var labelField = this.defaultLabelField();

        if (labelField) {
          props.onTreePropChange("labelField", labelField.name);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _treeState$labelField;

      var props = this.props;
      var treeState = props.treeState;
      var numberOfOrphanDataRows = this.numberOfOrphanDataRows();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FileEditor["default"], {
        fileId: treeState.file,
        label: "Tree File",
        paneId: props.treeId
      }), props.treeFile && /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        autoFocus: !treeState.labelField,
        error: !treeState.labelField,
        helperText: "Choose the metadata column which contains tree leaf labels",
        label: "Labels Column",
        onChange: function onChange(value) {
          return props.onTreePropChange("labelField", value.name);
        },
        options: this.allowedFieldsSelector(props),
        required: true,
        value: (_treeState$labelField = treeState.labelField) !== null && _treeState$labelField !== void 0 ? _treeState$labelField : this.defaultLabelField()
      }), props.treeFile && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        style: _constants.fullSizeStyle,
        variant: "outlined"
      }, /*#__PURE__*/_react["default"].createElement(_MiniTable["default"], {
        activeFields: this.allowedFieldsSelector(props),
        data: props.mergedDataset,
        inactiveColumnTitle: "This column does not contain tree labels",
        onHeaderClick: function onHeaderClick(header) {
          return props.onTreePropChange("labelField", header.name);
        }
      })), numberOfOrphanDataRows > 0 && /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
        label: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hide ", /*#__PURE__*/_react["default"].createElement("strong", null, numberOfOrphanDataRows), " data ", numberOfOrphanDataRows === 1 ? "entry" : "entries", " without matching tree leaves"),
        onChange: function onChange(value) {
          return props.onTreePropChange("hideOrphanDataRows", value);
        },
        value: treeState.hideOrphanDataRows
      }));
    }
  }]);
  return TreePaneEditor;
}(_react["default"].PureComponent);

TreePaneEditor.displayName = "TreePaneEditor";
TreePaneEditor.propTypes = {
  mergedDataset: _propTypes["default"].object.isRequired,
  onTreePropChange: _propTypes["default"].func.isRequired,
  treeFile: _propTypes["default"].object,
  treeId: _propTypes["default"].string.isRequired,
  treeState: _propTypes["default"].object.isRequired
};
var _default = TreePaneEditor;
exports["default"] = _default;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicers = __webpack_require__(134);

var _state = __webpack_require__(3);

var _slicerState = _interopRequireDefault(__webpack_require__(75));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _chartAxisType = _interopRequireDefault(__webpack_require__(189));

var _SlicerPaneEditor = _interopRequireDefault(__webpack_require__(401));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _dataColumn = _interopRequireDefault(__webpack_require__(107));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var slicerId = _ref.slicerId;
  return {
    chartAxisType: (0, _chartAxisType["default"])(state, slicerId),
    dataColumn: (0, _dataColumn["default"])(state, slicerId),
    dataColumns: (0, _dataColumns["default"])(state),
    dataRows: (0, _rows["default"])(state),
    slicerState: (0, _slicerState["default"])(state, slicerId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var slicerId = _ref2.slicerId;
  return {
    onSlicerPropChange: function onSlicerPropChange(prop, value) {
      return dispatch((0, _slicers.update)(slicerId, prop, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_SlicerPaneEditor["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports = require("vega-lite");

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports = require("lz-string");

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _reselect = __webpack_require__(10);

var _propTypes2 = __webpack_require__(14);

var _constants = __webpack_require__(12);

var _text = __webpack_require__(71);

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _UiTextfield = _interopRequireDefault(__webpack_require__(49));

var _ChartDataTypeSelect = _interopRequireDefault(__webpack_require__(402));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SlicerPaneEditor = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SlicerPaneEditor, _React$PureComponent);

  var _super = _createSuper(SlicerPaneEditor);

  function SlicerPaneEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, SlicerPaneEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "uniqueDataValues", (0, _reselect.createSelector)(function (props) {
      return props.dataRows;
    }, function (props) {
      return props.dataColumn;
    }, function (rows, dataColumn) {
      var uniqueValues = new Set();

      if (dataColumn) {
        var _iterator = _createForOfIteratorHelper(rows),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var row = _step.value;
            var value = row[dataColumn.name];
            uniqueValues.add(value === null || value === void 0 ? void 0 : value.toString());
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var items = [];

      var _iterator2 = _createForOfIteratorHelper(Array.from(uniqueValues).sort()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _value = _step2.value;
          items.push({
            name: _value,
            label: (0, _text.toText)(dataColumn.dataType, _value)
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return items;
    }));
    return _this;
  }

  (0, _createClass2["default"])(SlicerPaneEditor, [{
    key: "render",
    value: function render() {
      var _slicerState$dataValu;

      var props = this.props;
      var slicerState = props.slicerState;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        label: "Data Column",
        onChange: function onChange(value) {
          return props.onSlicerPropChange("field", value.name);
        },
        options: props.dataColumns,
        value: slicerState.field
      }), /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Slicer Type",
        variant: "outlined",
        size: "small",
        value: slicerState.slicerType,
        onChange: function onChange(value) {
          return props.onSlicerPropChange("slicerType", value);
        },
        options: [{
          label: "Filter Chart",
          // secondary: "Metadata include a column for ISO 3166-1 or 3166-2 codes",
          value: "chart"
        }, {
          label: "Filter by values",
          // secondary: "Metadata include a column for ISO 3166-1 or 3166-2 codes",
          value: "values"
        } // {
        //   label: "Filter by condition",
        //   // secondary: "Metadata include a column for ISO 3166-1 or 3166-2 codes",
        //   value: "condition",
        // },
        ]
      }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        justifyContent: "space-between"
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        style: slicerState.includedValues === "top" ? _constants.halfWidthWithPaddingStyle : _constants.fullSizeStyle
      }, /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Included Values",
        variant: "outlined",
        size: "small",
        value: slicerState.includedValues,
        onChange: function onChange(value) {
          return props.onSlicerPropChange("includedValues", value);
        },
        options: [{
          label: "Include all values",
          value: "all"
        }, {
          label: "Top N values",
          value: "top"
        }, {
          label: "Choose which values to include (Filter Chart only)",
          value: "custom"
        }],
        style: _constants.fullSizeStyle
      })), slicerState.includedValues === "top" && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        style: _constants.halfWidthWithPaddingStyle
      }, /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
        autoFocus: true,
        fullWidth: true,
        label: "Maximum number of values",
        onChange: function onChange(value) {
          return props.onSlicerPropChange("topNValues", parseInt(value, 10));
        },
        style: _constants.fullSizeStyle,
        type: "number",
        value: slicerState.topNValues.toString(),
        variant: "outlined"
      }))), slicerState.includedValues === "custom" && /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
        autoFocus: true,
        label: "Values to include",
        multiple: true,
        onChange: function onChange(values) {
          return props.onSlicerPropChange("dataValues", values.map(function (x) {
            return x.name;
          }));
        },
        options: this.uniqueDataValues(props),
        value: ((_slicerState$dataValu = slicerState.dataValues) === null || _slicerState$dataValu === void 0 ? void 0 : _slicerState$dataValu.length) > 0 ? this.uniqueDataValues(props).filter(function (x) {
          return slicerState.dataValues.includes(x.name);
        }) : []
      }), slicerState.slicerType === "chart" && /*#__PURE__*/_react["default"].createElement(_ChartDataTypeSelect["default"], {
        value: slicerState.chartAxisType,
        onChange: function onChange(value) {
          return props.onSlicerPropChange("chartAxisType", value);
        }
      }), slicerState.slicerType === "chart" && /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Chart Type",
        variant: "outlined",
        size: "small",
        value: slicerState.chartMainAxis,
        onChange: function onChange(value) {
          return props.onSlicerPropChange("chartMainAxis", value);
        },
        options: [{
          label: "Vertical bar chart",
          secondary: "Data values are plotted on the x-axis",
          value: "x"
        }, {
          label: "Horizontal bar chart",
          secondary: "Data values are plotted on the y-axis",
          value: "y"
        }]
      }), slicerState.slicerType === "chart" && /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Sort by",
        variant: "outlined",
        size: "small",
        value: slicerState.chartOrder,
        onChange: function onChange(value) {
          return props.onSlicerPropChange("chartOrder", value);
        },
        options: [{
          label: "Values (alphabetical order)",
          value: "alphabetical"
        }, {
          label: "Frequency (descending order)",
          value: "descending"
        }, {
          label: "Frequency (ascending order)",
          value: "ascending"
        }]
      }), slicerState.slicerType === "chart" && props.chartAxisType === "quantitative" && /*#__PURE__*/_react["default"].createElement(_UiTextfield["default"], {
        fullWidth: true,
        helperText: "There will often be fewer bins since the domain get sliced at \u201Cnicely-rounded\u201D values.",
        label: "Maximum number of bins",
        onChange: function onChange(value) {
          return props.onSlicerPropChange("chartMaxBins", value);
        },
        type: "number",
        value: slicerState.chartMaxBins,
        variant: "outlined"
      }));
    }
  }]);
  return SlicerPaneEditor;
}(_react["default"].PureComponent);

SlicerPaneEditor.displayName = "SlicerPaneEditor";
SlicerPaneEditor.propTypes = {
  chartAxisType: _propTypes["default"].string,
  dataColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  dataRows: _propTypes["default"].array.isRequired,
  onSlicerPropChange: _propTypes["default"].func.isRequired,
  slicerId: _propTypes["default"].string.isRequired,
  slicerState: _propTypes["default"].object.isRequired
};
var _default = SlicerPaneEditor;
exports["default"] = _default;

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

var options = [{
  label: "Auto",
  secondary: "Based on the detected data type of the column",
  value: "auto"
}, {
  label: "Discrete",
  secondary: "Rendered as bar chart",
  value: "nominal"
}, {
  label: "Continuous",
  secondary: "Rendered as binned bar chart",
  value: "quantitative"
}];

var ChartDataTypeSelect = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    label: "Chart Data Type",
    onChange: function onChange(value) {
      return props.onChange(value);
    },
    options: options,
    size: "small",
    value: props.value,
    variant: "outlined"
  });
});

ChartDataTypeSelect.displayName = "ChartDataTypeSelect";
ChartDataTypeSelect.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].oneOf(["auto", "nominal", "quantitative"])
};
var _default = ChartDataTypeSelect;
exports["default"] = _default;

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(__webpack_require__(50));

var _Theme = _interopRequireDefault(__webpack_require__(404));

var _state = __webpack_require__(3);

var _defaults = _interopRequireDefault(__webpack_require__(41));

function mapStateToProps(state) {
  var _configSelector$theme;

  return {
    theme: (_configSelector$theme = (0, _config["default"])(state).theme) !== null && _configSelector$theme !== void 0 ? _configSelector$theme : _defaults["default"].theme
  };
}

var _default = (0, _state.connectToPresentState)(_Theme["default"], mapStateToProps);

exports["default"] = _default;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _styles = __webpack_require__(405);

var _reselect = __webpack_require__(10);

var _CssBaseline = _interopRequireDefault(__webpack_require__(406));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _defaults = _interopRequireDefault(__webpack_require__(41));

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Theme = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Theme, _React$PureComponent);

  var _super = _createSuper(Theme);

  function Theme() {
    var _this;

    (0, _classCallCheck2["default"])(this, Theme);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", (0, _reselect.createSelector)(function (props) {
      return props.theme;
    }, function (theme) {
      var muiTheme = (0, _styles.createMuiTheme)({
        palette: {
          text: {
            primary: theme.text.primary,
            secondary: theme.text.secondary,
            disabled: theme.text.disabled,
            hint: theme.text.hint
          },
          primary: {
            light: theme.primary.light,
            main: theme.primary.main,
            dark: theme.primary.dark,
            contrastText: theme.primary.contrast
          },
          secondary: {
            light: theme.secondary.light,
            main: theme.secondary.main,
            dark: theme.secondary.dark,
            contrastText: theme.secondary.contrast
          }
        }
      });
      var style = {
        "--primary-light": theme.primary.light,
        "--primary-main": theme.primary.main,
        "--primary-dark": theme.primary.dark,
        "--primary-contrast": theme.primary.contrast,
        "--secondary-main": theme.secondary.main,
        "--secondary-contrast": theme.secondary.contrast,
        "--text-primary": theme.text.primary,
        "--text-secondary": theme.text.secondary,
        "--text-disabled": theme.text.disabled,
        "--text-hint": theme.text.hint,
        "--background-main": theme.background.main,
        "--background-highlight": theme.background.highlight,
        "--background-hover": theme.background.hover,
        "--background-disabled": theme.background.disabled
      };
      return {
        muiTheme: muiTheme,
        style: style
      };
    }));
    return _this;
  }

  (0, _createClass2["default"])(Theme, [{
    key: "render",
    value: function render() {
      var props = this.props;

      var _this$themeSelector = this.themeSelector(props),
          muiTheme = _this$themeSelector.muiTheme,
          style = _this$themeSelector.style;

      return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
        theme: muiTheme
      }, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, props.children));
    }
  }]);
  return Theme;
}(_react["default"].PureComponent);

Theme.displayName = "Theme";
Theme.propTypes = {
  children: _propTypes["default"].node,
  theme: _propTypes2.ThemeDef
};
Theme.defaultProps = {
  theme: _defaults["default"].theme
};
var _default = Theme;
exports["default"] = _default;

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = __webpack_require__(159);

var _reduxThunk = _interopRequireDefault(__webpack_require__(408));

var _reducers = _interopRequireDefault(__webpack_require__(409));

var _storeMiddleware = _interopRequireDefault(__webpack_require__(424));

var store = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk["default"], _storeMiddleware["default"]), typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
  return f;
})(_redux.createStore)(_reducers["default"]);

if (false) {}

var _default = store;
exports["default"] = _default;

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _redux = __webpack_require__(159);

var _reduxUndo = _interopRequireDefault(__webpack_require__(113));

var _charts = _interopRequireDefault(__webpack_require__(133));

var _config = _interopRequireDefault(__webpack_require__(410));

var _datasets = _interopRequireDefault(__webpack_require__(411));

var _files = _interopRequireDefault(__webpack_require__(412));

var _filters = _interopRequireDefault(__webpack_require__(413));

var _maps = _interopRequireDefault(__webpack_require__(414));

var _meta = _interopRequireDefault(__webpack_require__(415));

var _networks = _interopRequireDefault(__webpack_require__(416));

var _notes = _interopRequireDefault(__webpack_require__(210));

var _panes = _interopRequireDefault(__webpack_require__(417));

var _slicers = _interopRequireDefault(__webpack_require__(418));

var _styles = _interopRequireDefault(__webpack_require__(419));

var _tables = _interopRequireDefault(__webpack_require__(420));

var _timelines = _interopRequireDefault(__webpack_require__(421));

var _trees = _interopRequireDefault(__webpack_require__(422));

var _views = _interopRequireDefault(__webpack_require__(423));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var combinedReducer = (0, _redux.combineReducers)({
  charts: _charts["default"],
  config: _config["default"],
  datasets: _datasets["default"],
  files: _files["default"],
  filters: _filters["default"],
  maps: _maps["default"],
  meta: _meta["default"],
  networks: _networks["default"],
  notes: _notes["default"],
  panes: _panes["default"],
  slicers: _slicers["default"],
  styles: _styles["default"],
  tables: _tables["default"],
  timelines: _timelines["default"],
  trees: _trees["default"],
  views: _views["default"]
});

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var nextState = state;

  if (action.type === "MICROREACT VIEWER/BATCH") {
    nextState = action.payload.reduce(combinedReducer, state);
  } else {
    nextState = combinedReducer(state, action);
  }

  var label = action.label || (state.config ? state.config.label : undefined);

  if (label !== nextState.config.label) {
    nextState.config = _objectSpread({}, nextState.config);
    nextState.config.label = label;
  }

  if (action.type.startsWith("MICROREACT VIEWER/") && action.savable !== false && !nextState.config.isDirty) {
    nextState.config = _objectSpread({}, nextState.config);
    nextState.config.isDirty = true;
  }

  return nextState;
}

var undoableReducer = (0, _reduxUndo["default"])(rootReducer, {
  limit: 10,
  ignoreInitialState: true,
  filter: function filter(action, currentState, previousHistory) {
    return !!action.label;
  },
  groupBy: function groupBy(action, currentState, previousHistory) {
    var _action$group;

    return (_action$group = action.group) !== null && _action$group !== void 0 ? _action$group : null;
  }
});

function _default(state, action) {
  var currentState = state;

  if (action.type === "MICROREACT VIEWER/UNLOAD") {
    currentState = undefined;
  }

  var nextState = undoableReducer(currentState, action);

  if (action.type.startsWith("@@redux-undo/")) {
    return _objectSpread(_objectSpread({}, nextState), {}, {
      present: _objectSpread(_objectSpread({}, nextState.present), {}, {
        panes: _objectSpread(_objectSpread({}, nextState.present.panes), {}, {
          model: _objectSpread(_objectSpread({}, nextState.present.panes.model), {}, {
            borders: [_objectSpread(_objectSpread({}, nextState.present.panes.model.borders[0]), {}, {
              selected: state.present.panes.model.borders[0].selected
            })]
          })
        })
      })
    });
  }

  return nextState;
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _constants = __webpack_require__(12);

var _defaults = _interopRequireDefault(__webpack_require__(41));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = _objectSpread({
  editor: null,
  isBuzy: false,
  isDirty: false,
  mapboxApiAccessToken: null,
  pendingFiles: null,
  readOnly: false,
  theme: null
}, _defaults["default"]);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/LOAD":
      {
        var _action$payload, _action$payload$query;

        var nextState = _objectSpread(_objectSpread(_objectSpread({}, state), action.payload.config || _constants.emptyObject), {}, {
          editor: initialState.editor,
          isBuzy: initialState.isBuzy,
          isDirty: initialState.isDirty
        });

        if (((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : (_action$payload$query = _action$payload.query) === null || _action$payload$query === void 0 ? void 0 : _action$payload$query.ui) === "edit") {
          nextState.editor = {
            mode: "edit"
          };
        }

        return nextState;
      }

    case "MICROREACT VIEWER/CONFIG":
      {
        return _objectSpread(_objectSpread({}, state), action.payload || _constants.emptyObject);
      }

    default:
      {
        return state;
      }
  }
};

exports["default"] = _default;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/LOAD":
      {
        return _objectSpread({}, action.payload.datasets);
      }

    case "MICROREACT VIEWER/ADD DATASET":
      {
        var datasetId = action.payload.datasetId || (0, _state.newId)(state, "dataset");
        return (0, _state.updateKeyedState)(state, datasetId, _objectSpread(_objectSpread({}, initialState), {}, {
          id: datasetId,
          file: action.payload.file,
          label: action.payload.label
        }, action.payload.options));
      }

    case "MICROREACT VIEWER/SET COLUMN LABEL":
      {
        return (0, _state.updateKeyedState)(state, action.datasetId, {
          labels: (0, _state.replaceKeyedState)(state.labels, action.payload.column, action.payload.label)
        });
      }

    case "MICROREACT VIEWER/UPDATE DATASET":
      {
        return (0, _state.updateKeyedState)(state, action.datasetId, action.payload);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _state = __webpack_require__(3);

var _files = __webpack_require__(38);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD FILE":
      {
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, action.payload.id, {
          _content: action.payload._content,
          blob: action.payload.blob,
          format: action.payload.format,
          hash: action.payload.hash,
          id: action.payload.id,
          name: (0, _files.normaliseFilename)(action.payload.name),
          size: action.payload.size,
          type: action.payload.type,
          url: action.payload.url
        }));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var files = {};

        if (action.payload.files) {
          for (var _i = 0, _Object$entries = Object.entries(action.payload.files); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                file = _Object$entries$_i[1];

            files[key] = {
              _content: file._content,
              blob: file.blob,
              format: file.format,
              hash: file.hash,
              id: key,
              name: (0, _files.normaliseFilename)(file.name),
              size: file.size,
              type: file.type,
              url: file.url
            };
          }
        }

        return files;
      }

    case "MICROREACT VIEWER/REMOVE FILE":
      {
        return (0, _state.removeKeyedState)(state, action.payload);
      }

    case "MICROREACT VIEWER/REMOVE TREE":
    case "MICROREACT VIEWER/REMOVE NETWORK":
    case "MICROREACT VIEWER/REMOVE MAP":
      {
        if (action.payload.fileId) {
          return (0, _state.removeKeyedState)(state, action.payload.fileId);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/UPDATE FILE":
      {
        return (0, _state.replaceKeyedState)(state, action.payload.id, action.payload);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _constants = __webpack_require__(12);

var Arrays = _interopRequireWildcard(__webpack_require__(24));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var initialState = {
  dataFilters: [],
  searchOperator: "includes",
  searchValue: "",
  selection: _constants.emptyArray,
  selectionBreakdownField: null
};

function addRowsToSelection(state, payload) {
  var selectedids = state.selection || _constants.emptyArray;
  var merge = payload.merge || false;

  if (payload.ids) {
    if (merge) {
      var newHighlightedId = new Set(selectedids);

      var _iterator = _createForOfIteratorHelper(payload.ids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;

          if (newHighlightedId.has(id)) {
            newHighlightedId["delete"](id);
          } else {
            newHighlightedId.add(id);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        selection: Array.from(newHighlightedId)
      });
    }

    if (!merge) {
      return _objectSpread(_objectSpread({}, state), {}, {
        selection: Array.from(payload.ids)
      });
    }
  }

  if (merge === false && state.selection !== _constants.emptyArray) {
    return _objectSpread(_objectSpread({}, state), {}, {
      selection: _constants.emptyArray
    });
  }

  return state;
}

function applyQueryToState(currentState, query) {
  if (query.dfc || query.dfr) {
    var nextState = _objectSpread(_objectSpread({}, currentState), {}, {
      dataFilters: (0, _toConsumableArray2["default"])(currentState.dataFilters || [])
    });

    if (query.dfr === "*") {
      nextState.dataFilters = [];
    } else if (query.dfr) {
      Arrays.remove(nextState.dataFilters, function (x) {
        return x.field === query.dfr;
      }, false);
    }

    if (query.dfc && query.dfo && query.dfv) {
      Arrays.remove(nextState.dataFilters, function (x) {
        return x.field === query.dfc;
      }, false);
      nextState.dataFilters.push({
        field: query.dfc,
        operator: query.dfo,
        value: [query.dfv]
      });
    }

    return nextState;
  }

  return currentState;
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/LOAD":
      {
        var _action$payload;

        // const queryState = mapQueryToProps(queryPropMap, action.payload.query);
        // for (const key of Object.keys(queryState)) {
        //   if (Array.isArray(queryState[key])) {
        //     queryState[key] = queryState[key].map((x) => x.toLowerCase());
        //   }
        //   else if (typeof queryState[key] === "string") {
        //     queryState[key] = queryState[key].toLowerCase();
        //   }
        // }
        var nextState = _objectSpread(_objectSpread({}, initialState), action.payload.filters || _constants.emptyObject);

        if ((_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.query) {
          return applyQueryToState(nextState, action.payload.query);
        } else {
          return nextState;
        }
      }

    case "MICROREACT VIEWER/QUERY":
      {
        return applyQueryToState(state, action.payload);
      }

    case "MICROREACT VIEWER/RESET ALL FILTERS":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          dataFilters: initialState.dataFilters,
          searchValue: initialState.searchValue,
          selection: initialState.selection
        });
      }

    case "MICROREACT VIEWER/RESET TABLE FILTERS":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          dataFilters: initialState.dataFilters
        });
      }

    case "MICROREACT VIEWER/SELECT ROWS":
      {
        return addRowsToSelection(state, action.payload);
      }

    case "MICROREACT VIEWER/SET FIELD FILTER":
      {
        var dataFilters = (0, _toConsumableArray2["default"])(state.dataFilters);
        var index = dataFilters.findIndex(function (x) {
          return x.field === action.payload.field;
        });

        if (index < 0) {
          dataFilters.push({
            field: action.payload.field
          });
          index = dataFilters.length - 1;
        }

        if (action.payload.operator) {
          if (action.payload.operator === "in") {
            for (var valueIndex = 0; valueIndex < action.payload.value.length; valueIndex++) {
              if (action.payload.value[valueIndex] === null) {
                action.payload.value[valueIndex] = undefined;
              }
            }
          }

          dataFilters[index] = _objectSpread(_objectSpread({}, dataFilters[index]), {}, {
            operator: action.payload.operator,
            value: action.payload.value
          });
        } else {
          dataFilters.splice(index, 1);
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          dataFilters: dataFilters
        });
      }

    case "MICROREACT VIEWER/SET SEARCH OPERATOR":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          searchOperator: action.payload
        });
      }

    case "MICROREACT VIEWER/SET SEARCH VALUE":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          searchValue: action.payload
        });
      }

    case "MICROREACT VIEWER/SET SELECTION BREAKDOWN FIELD":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          selectionBreakdownField: action.payload
        });
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _constants = __webpack_require__(12);

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  bounds: undefined,
  centre: undefined,
  controls: false,
  dataType: "geographic-coordinates",
  grouped: true,
  groupMarkersByRegion: false,
  lasso: false,
  markersOpacity: 100,
  maxNodeSize: 64,
  minNodeSize: 4,
  nodeSize: 14,
  path: null,
  regionsColourField: null,
  regionsColourOpacity: 100,
  regionsColourPalette: "ColorBrewer YlOrBr-2",
  scaleMarkers: false,
  scaleType: "logarithmic",
  showMarkers: true,
  showRegionOutlines: true,
  showRegions: true,
  source: undefined,
  style: "",
  tileLayerDialog: false,
  tileLayerOpts: null,
  tileLayerUrl: null,
  trackViewport: false,
  type: "mapbox"
};
var queryPropMap = {
  centre: {
    key: "mo",
    type: Array
  },
  controls: {
    key: "mc",
    type: Boolean
  },
  maxNodeSize: {
    key: "mxns",
    type: Number
  },
  minNodeSize: {
    key: "mmns",
    type: Number
  },
  nodeSize: {
    key: "mns",
    type: Number
  },
  minMarkerSize: {
    key: "mmnr",
    type: Number
  },
  maxMarkerSize: {
    key: "mxnr",
    type: Number
  },
  scaleMarkers: {
    key: "msm",
    type: Boolean
  },
  style: {
    key: "ms"
  },
  tileLayerOpts: {
    key: "mto"
  },
  tileLayerUrl: {
    key: "mtu"
  },
  // zoom: { key: "mz", type: Number },
  scaleType: {
    key: "mst",
    values: {
      square: "s",
      quadratic: "q",
      logarithmic: "g",
      linear: "l"
    }
  }
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD GEO DATA":
      {
        var _state$mapId$title, _state$mapId;

        var mapId = action.mapId || Object.keys(state)[0] || "map-1";
        return (0, _state.updateKeyedState)(state, mapId, _objectSpread(_objectSpread({}, mapId in state ? _constants.emptyObject : initialState), {}, {
          title: (_state$mapId$title = (_state$mapId = state[mapId]) === null || _state$mapId === void 0 ? void 0 : _state$mapId.title) !== null && _state$mapId$title !== void 0 ? _state$mapId$title : "Map",
          geodata: {
            file: action.payload.file,
            linkType: action.payload.linkType,
            linkField: action.payload.linkFieldName,
            linkProperty: action.payload.linkPropertyName
          }
        }));
      }

    case "MICROREACT VIEWER/ADD MAP":
      {
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, (0, _state.newId)(state, "map"), _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title
        }, action.payload)));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var maps = {};

        for (var _i = 0, _Object$keys = Object.keys(action.payload.maps); _i < _Object$keys.length; _i++) {
          var _mapId = _Object$keys[_i];
          maps[_mapId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.maps[_mapId]), (0, _query.mapQueryToProps)(queryPropMap, action.payload.query));
        }

        return maps;
      }

    case "MICROREACT VIEWER/RESET ALL FILTERS":
    case "MICROREACT VIEWER/RESET MAP FILTERS":
      {
        return (0, _state.updateAll)(state, {
          path: null
        });
      }

    case "MICROREACT VIEWER/QUERY":
      {
        var queryState = (0, _query.mapQueryToProps)(queryPropMap, action.payload);

        if (Object.keys(queryState)) {
          return (0, _state.updateAll)(state, queryState);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/REMOVE FILE":
      {
        for (var _i2 = 0, _Object$keys2 = Object.keys(state); _i2 < _Object$keys2.length; _i2++) {
          var _state$_mapId, _state$_mapId$geodata;

          var _mapId2 = _Object$keys2[_i2];

          if (((_state$_mapId = state[_mapId2]) === null || _state$_mapId === void 0 ? void 0 : (_state$_mapId$geodata = _state$_mapId.geodata) === null || _state$_mapId$geodata === void 0 ? void 0 : _state$_mapId$geodata.file) === action.payload) {
            return (0, _state.updateKeyedState)(state, _mapId2, {
              geodata: undefined
            });
          }
        }

        return state;
      }

    case "MICROREACT VIEWER/REMOVE MAP":
      {
        return (0, _state.removeKeyedState)(state, action.payload.paneId);
      }

    case "MICROREACT VIEWER/SET MAP FILTER":
      {
        return (0, _state.updateKeyedState)(state, action.mapId, {
          path: action.payload || null
        });
      }

    case "MICROREACT VIEWER/SET MAP LASSO":
      {
        return (0, _state.updateKeyedState)(state, action.mapId, {
          lasso: action.payload,
          path: null,
          trackViewport: false
        });
      }

    case "MICROREACT VIEWER/SET MAP TRACK VIEWPORT":
      {
        return (0, _state.updateKeyedState)(state, action.mapId, {
          trackViewport: action.payload,
          path: null,
          lasso: false
        });
      }

    case "MICROREACT VIEWER/SET MAP VIEWPORT":
      {
        return (0, _state.updateKeyedState)(state, action.mapId, {
          viewport: action.payload
        });
      }

    case "MICROREACT VIEWER/UPDATE MAP":
      {
        // mapPropsToQuery(queryPropMap, action.payload);
        return (0, _state.updateKeyedState)(state, action.mapId, action.payload);
      }
    // case "HISTORY REVERT": {
    //   return action.payload.state.map;
    // }

    default:
      return state;
  }
}

;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  name: "Unnamed Project"
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/LOAD":
      {
        return _objectSpread(_objectSpread({}, initialState), action.payload.meta);
      }

    case "MICROREACT VIEWER/UPDATE META":
      {
        return _objectSpread(_objectSpread({}, initialState), action.payload);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  controls: false,
  edgeColourFilter: null,
  edgeLabelFilter: null,
  edgeLineStyleFilter: null,
  edgeLineWidthFilter: null,
  geographicLayout: false,
  labelSize: 16,
  lasso: false,
  layout: null,
  maxFontSize: 64,
  maxNodeSize: 64,
  minFontSize: 0,
  minNodeSize: 4,
  nodeSize: 14,
  path: null,
  randomSeed: 0,
  scale: 0,
  showLabels: true,
  showNodes: true
};
var queryPropMap = {
  controls: {
    key: "nc",
    type: Boolean
  },
  fontSize: {
    key: "nts",
    type: Number
  },
  maxNodeSize: {
    key: "nxns",
    type: Number
  },
  minNodeSize: {
    key: "nmns",
    type: Number
  },
  nodeSize: {
    key: "nns",
    type: Number
  },
  showLabels: {
    key: "nl",
    type: Boolean
  },
  randomSeed: {
    key: "nrs",
    type: Number
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD NETWORK":
      {
        var networkId = action.payload.paneId || (0, _state.newId)(state, "network");
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, networkId, _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title || "Network",
          nodeField: action.payload.nodeFieldName,
          file: action.payload.file
        })));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var nextState = {};
        var queryProps = (0, _query.mapQueryToProps)(queryPropMap, action.payload.query);

        for (var _i = 0, _Object$keys = Object.keys(action.payload.networks); _i < _Object$keys.length; _i++) {
          var _networkId = _Object$keys[_i];
          nextState[_networkId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.networks[_networkId]), queryProps);
        }

        return nextState;
      }

    case "MICROREACT VIEWER/QUERY":
      {
        var queryState = (0, _query.mapQueryToProps)(queryPropMap, action.payload);

        if (Object.keys(queryState)) {
          return (0, _state.updateAll)(state, queryState);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/REMOVE FILE":
      {
        for (var _i2 = 0, _Object$keys2 = Object.keys(state); _i2 < _Object$keys2.length; _i2++) {
          var _networkId2 = _Object$keys2[_i2];

          if (state[_networkId2].file === action.payload) {
            var _nextState = (0, _state.removeKeyedState)(state, _networkId2);

            _nextState[_networkId2] = initialState;
            return _nextState;
          }
        }

        return state;
      }

    case "MICROREACT VIEWER/REMOVE NETWORK":
      {
        return (0, _state.removeKeyedState)(state, action.payload.paneId);
      }

    case "MICROREACT VIEWER/RESET ALL FILTERS":
    case "MICROREACT VIEWER/RESET NETWORK FILTERS":
      {
        return (0, _state.updateAll)(state, {
          path: null
        });
      }

    case "MICROREACT VIEWER/SET NETWORK FILTER":
      {
        var networkState = state[action.networkId];
        return (0, _state.updateKeyedState)(state, action.networkId, {
          path: action.payload !== undefined ? action.payload.path : networkState.path
        });
      }

    case "MICROREACT VIEWER/SET NETWORK LASSO":
      {
        var _networkState = state[action.networkId];
        return (0, _state.updateKeyedState)(state, action.networkId, {
          lasso: action.payload,
          path: action.payload === false ? null : _networkState.path
        });
      }

    case "MICROREACT VIEWER/SET NETWORK LAYOUT":
      {
        return (0, _state.updateKeyedState)(state, action.networkId, {
          path: null,
          layout: action.payload.layout
        });
      }

    case "MICROREACT VIEWER/UPDATE NETWORK":
      {
        return (0, _state.updateKeyedState)(state, action.networkId, action.payload);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/LOAD":
      {
        var _action$payload, _action$payload$panes;

        var model;

        if ((_action$payload = action.payload) !== null && _action$payload !== void 0 && (_action$payload$panes = _action$payload.panes) !== null && _action$payload$panes !== void 0 && _action$payload$panes.model) {
          model = action.payload.panes.model;

          if (model.borders && (model.borders[0].children.some(function (x) {
            return x.component === "Styles";
          }) || model.borders[0].children.length !== 4)) {
            model.borders = null;
          }
        }

        return _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.panes), {}, {
          model: model
        });
      }

    case "MICROREACT VIEWER/SET LAYOUT MODEL":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          model: action.payload
        });
      }

    default:
      {
        return state;
      }
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.initialState = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _constants = __webpack_require__(12);

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  chartAxisType: "auto",
  chartMaxBins: 10,
  chartOrder: "alphabetical",
  slicerType: "values",
  dataValues: [],
  includedValues: "all",
  topNValues: 10,
  chartMainAxis: "y"
};
exports.initialState = initialState;
var queryPropMap = {
  controls: {
    key: "sc",
    type: Boolean
  }
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD SLICER":
      {
        var slicerId = action.payload.slicerId || (0, _state.newId)(state, "slicer");
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, slicerId, _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title
        }, action.payload)));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var slicers = {};

        for (var _i = 0, _Object$keys = Object.keys(action.payload.slicers || _constants.emptyObject); _i < _Object$keys.length; _i++) {
          var _action$payload$slice, _action$payload$slice2, _action$payload$slice3;

          var _slicerId = _Object$keys[_i];
          slicers[_slicerId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.slicers[_slicerId]), {}, {
            field: (_action$payload$slice = (_action$payload$slice2 = action.payload.slicers[_slicerId]) === null || _action$payload$slice2 === void 0 ? void 0 : _action$payload$slice2.field) !== null && _action$payload$slice !== void 0 ? _action$payload$slice : (_action$payload$slice3 = action.payload.slicers[_slicerId]) === null || _action$payload$slice3 === void 0 ? void 0 : _action$payload$slice3.dataField
          }, (0, _query.mapQueryToProps)(queryPropMap, action.payload.query));
        }

        return slicers;
      }

    case "MICROREACT VIEWER/REMOVE SLICER":
      {
        return (0, _state.removeKeyedState)(state, action.payload.paneId);
      }

    case "MICROREACT VIEWER/UPDATE SLICER":
      {
        return (0, _state.updateKeyedState)(state, action.slicerId, action.payload);
      }

    default:
      return state;
  }
}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _arrays = __webpack_require__(24);

var _hash = __webpack_require__(46);

var _query = __webpack_require__(26);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  coloursField: null,
  colourPalettes: [],
  defaultColour: "transparent",
  defaultShape: "circle",
  colourSettings: {},
  labelsField: null,
  legendDirection: "row",
  shapesField: null,
  shapePalettes: []
};
var queryPropMap = {
  coloursField: {
    key: "cbc"
  },
  shapesField: {
    key: "sbc"
  },
  labelsField: {
    key: "lbc"
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD CUSTOM COLOUR PALETTE":
      {
        var name = action.payload.name || "palette-".concat((0, _hash.generateHashId)());
        return _objectSpread(_objectSpread({}, state), {}, {
          colourPalettes: [].concat((0, _toConsumableArray2["default"])(state.colourPalettes || []), [{
            bins: action.payload.bins,
            entries: action.payload.entries,
            label: action.payload.label,
            name: name,
            type: "custom"
          }])
        });
      }

    case "MICROREACT VIEWER/ADD CUSTOM SHAPE PALETTE":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          shapePalettes: [].concat((0, _toConsumableArray2["default"])(state.shapePalettes || []), [{
            entries: action.payload.entries,
            label: action.payload.label,
            name: action.payload.name || "palette-".concat((0, _hash.generateHashId)()),
            type: "custom"
          }])
        });
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var queryProps = (0, _query.mapQueryToProps)(queryPropMap, action.payload.query);
        return _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.styles), queryProps);
      }

    case "MICROREACT VIEWER/QUERY":
      {
        var queryState = (0, _query.mapQueryToProps)(queryPropMap, action.payload);

        if (Object.keys(queryState)) {
          return _objectSpread(_objectSpread({}, state), queryState);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/SET COLOUR BY FIELD":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          coloursField: action.payload
        });
      }

    case "MICROREACT VIEWER/SET DEFAULT COLOUR":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          defaultColour: action.payload
        });
      }

    case "MICROREACT VIEWER/SET COLOUR SETTINGS":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          colourSettings: _objectSpread(_objectSpread({}, state.colourSettings), {}, (0, _defineProperty2["default"])({}, action.payload.field, action.payload.settings))
        });
      }

    case "MICROREACT VIEWER/SET LABEL BY FIELD":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          labelsField: action.payload
        });
      }

    case "MICROREACT VIEWER/SET LEGEND DIRECTION":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          legendDirection: action.payload
        });
      }

    case "MICROREACT VIEWER/SET SHAPE BY FIELD":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          shapesField: action.payload
        });
      }

    case "MICROREACT VIEWER/UPDATE COLOUR PALETTE":
      {
        var colourPalettes = (0, _arrays.update)(state.colourPalettes, function (x) {
          return x.name === action.payload.name;
        }, {
          entries: action.payload.entries,
          label: action.payload.label,
          name: action.payload.name,
          type: "custom"
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          colourPalettes: colourPalettes
        });
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _arrays = __webpack_require__(24);

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  displayMode: "cosy",
  hideUnselected: false
};
var queryPropMap = {};

function updateTableColumn(state, tableId, field, updater) {
  var columns = state[tableId].columns.slice();
  var columnIndex = columns.findIndex(function (x) {
    return x.field === field;
  });

  if (columnIndex === -1) {
    throw new Error("Cannot find column \"".concat(field, "\""));
  }

  columns[columnIndex] = Object.assign({}, columns[columnIndex], updater);
  return (0, _state.updateKeyedState)(state, tableId, {
    columns: columns
  });
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD TABLE":
      {
        var tableId = action.payload.paneId || (0, _state.newId)(state, "table");
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, tableId, _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title
        }, action.payload)));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var tables = {};

        for (var _i = 0, _Object$keys = Object.keys(action.payload.tables); _i < _Object$keys.length; _i++) {
          var _tableId = _Object$keys[_i];
          tables[_tableId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.tables[_tableId]), (0, _query.mapQueryToProps)(queryPropMap, action.payload.query));
        }

        return tables;
      }

    case "MICROREACT VIEWER/QUERY":
      {
        var queryState = (0, _query.mapQueryToProps)(queryPropMap, action.payload);

        if (Object.keys(queryState)) {
          return (0, _state.updateAll)(state, queryState);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/HIDE COLUMN":
      {
        return updateTableColumn(state, action.tableId, action.payload, {
          hidden: true
        });
      }

    case "MICROREACT VIEWER/MOVE COLUMN":
      {
        action.label = "Table: Move ".concat(state[action.tableId].columns[action.payload.oldIndex].field, " column");
        var updater = {
          columns: (0, _arrays.swap)(state[action.tableId].columns, action.payload.oldIndex, action.payload.newIndex)
        };
        return (0, _state.updateKeyedState)(state, action.tableId, updater);
      }

    case "MICROREACT VIEWER/RESIZE COLUMN":
      {
        return updateTableColumn(state, action.tableId, action.payload.field, {
          width: action.payload.width
        });
      }

    case "MICROREACT VIEWER/SET VISIBLE COLUMNS":
      {
        var columns = (0, _toConsumableArray2["default"])(state[action.tableId].columns);

        for (var index = 0; index < columns.length; index++) {
          var tableColumn = columns[index];
          columns[index] = _objectSpread(_objectSpread({}, tableColumn), {}, {
            hidden: !action.payload.includes(tableColumn.field)
          });
        }

        var _iterator = _createForOfIteratorHelper(action.payload),
            _step;

        try {
          var _loop = function _loop() {
            var field = _step.value;

            if (!columns.find(function (x) {
              return x.field === field;
            })) {
              columns.push({
                field: field
              });
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return (0, _state.updateKeyedState)(state, action.tableId, {
          columns: columns
        });
      }

    case "MICROREACT VIEWER/SORT COLUMN":
      {
        return updateTableColumn(state, action.tableId, action.payload.field, {
          sort: action.payload.direction
        });
      }

    case "MICROREACT VIEWER/UPDATE TABLE":
      {
        return (0, _state.updateKeyedState)(state, action.tableId, action.payload);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  bounds: null,
  controls: false,
  nodeSize: 14,
  playing: false,
  speed: 1,
  laneField: null,
  style: "bar",
  unit: null,
  viewport: null
};
var queryPropMap = {
  controls: {
    key: "lc",
    type: Boolean
  },
  playing: {
    key: "lp",
    type: Boolean
  },
  speed: {
    key: "ls",
    type: Number
  },
  unit: {
    key: "lu",
    values: {
      year: "y",
      quarter: "q",
      month: "m",
      week: "w",
      day: "d"
    }
  },
  minNodeSize: {
    key: "lnns",
    type: Number
  },
  maxNodeSize: {
    key: "lxns",
    type: Number
  },
  nodeSize: {
    key: "lns",
    type: Number
  }
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD TIMELINE":
      {
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, (0, _state.newId)(state, "timeline"), _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title
        }, action.payload)));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var timelines = {};

        for (var _i = 0, _Object$keys = Object.keys(action.payload.timelines); _i < _Object$keys.length; _i++) {
          var timelineId = _Object$keys[_i];
          timelines[timelineId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.timelines[timelineId]), (0, _query.mapQueryToProps)(queryPropMap, action.payload.query));
        }

        return timelines;
      }

    case "MICROREACT VIEWER/QUERY":
      {
        var queryState = (0, _query.mapQueryToProps)(queryPropMap, action.payload);

        if (Object.keys(queryState)) {
          return (0, _state.updateAll)(state, queryState);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/RESET ALL FILTERS":
    case "MICROREACT VIEWER/RESET TIMELINE FILTERS":
      {
        return (0, _state.updateAll)(state, {
          bounds: null
        });
      }

    case "MICROREACT VIEWER/SET TIMELINE FILTER":
      {
        return (0, _state.updateKeyedState)(state, action.timelineId, {
          bounds: action.payload || null
        });
      }

    case "MICROREACT VIEWER/UPDATE TIMELINE":
      {
        return (0, _state.updateKeyedState)(state, action.timelineId, action.payload);
      }

    default:
      return state;
  }
}

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(39));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _query = __webpack_require__(26);

var _state = __webpack_require__(3);

var _excluded = ["fontFamily", "id", "interactive", "labelField", "log", "metadata", "padding", "partialRender", "selectedIds", "showLabels", "size", "strokeColour", "styles"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  controls: false,
  ids: null,
  lasso: false,
  path: null,
  subtreeIds: null,
  alignLabels: true,
  blockHeaderFontSize: 13,
  blockSize: 14,
  blockPadding: 0,
  blocks: [],
  fontSize: 16,
  nodeSize: 14,
  showBlockHeaders: true,
  showBlockLabels: false,
  showBranchLengths: false,
  showEdges: true,
  showInternalLabels: false,
  showLabels: true,
  showLeafLabels: false,
  showPiecharts: true,
  showShapeBorders: true,
  showShapes: true,
  scaleLineAlpha: true,
  styleLeafLabels: false,
  styleNodeEdges: false,
  type: "rc",
  hideOrphanDataRows: false
};
var queryPropMap = {
  controls: {
    key: "tc",
    type: Boolean
  },
  blockSize: {
    key: "tbl",
    type: Number
  },
  fontSize: {
    key: "tts",
    type: Number
  },
  minBlockSize: {
    key: "tnbl",
    type: Number
  },
  maxBlockSize: {
    key: "txbl",
    type: Number
  },
  minFontSize: {
    key: "tnts",
    type: Number
  },
  maxFontSize: {
    key: "txts",
    type: Number
  },
  minNodeSize: {
    key: "tmns",
    type: Number
  },
  maxNodeSize: {
    key: "txns",
    type: Number
  },
  nodeSize: {
    key: "tns",
    type: Number
  },
  showLabels: {
    key: "tl",
    type: Boolean
  },
  type: {
    key: "tt"
  }
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD TREE":
      {
        var treeId = action.payload.paneId || (0, _state.newId)(state, "tree");
        return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, treeId, _objectSpread(_objectSpread({}, initialState), {}, {
          title: action.payload.title || "Tree",
          labelField: action.payload.labelFieldName,
          file: action.payload.file
        })));
      }

    case "MICROREACT VIEWER/LOAD":
      {
        var nextState = {};
        var queryProps = (0, _query.mapQueryToProps)(queryPropMap, action.payload.query);

        for (var _i = 0, _Object$keys = Object.keys(action.payload.trees); _i < _Object$keys.length; _i++) {
          var _treeId = _Object$keys[_i];
          nextState[_treeId] = _objectSpread(_objectSpread(_objectSpread({}, initialState), action.payload.trees[_treeId]), queryProps);
        }

        return nextState;
      }

    case "MICROREACT VIEWER/QUERY":
      {
        var queryState = (0, _query.mapQueryToProps)(queryPropMap, action.payload);

        if (Object.keys(queryState)) {
          return (0, _state.updateAll)(state, queryState);
        } else {
          return state;
        }
      }

    case "MICROREACT VIEWER/REMOVE FILE":
      {
        for (var _i2 = 0, _Object$keys2 = Object.keys(state); _i2 < _Object$keys2.length; _i2++) {
          var _treeId2 = _Object$keys2[_i2];

          if (state[_treeId2].file === action.payload) {
            var _nextState = (0, _state.removeKeyedState)(state, _treeId2);

            _nextState[_treeId2] = initialState;
            return _nextState;
          }
        }

        return state;
      }

    case "MICROREACT VIEWER/REMOVE TREE":
      {
        return (0, _state.removeKeyedState)(state, action.payload.paneId);
      }

    case "MICROREACT VIEWER/RESET ALL FILTERS":
    case "MICROREACT VIEWER/RESET TREE FILTERS":
      {
        return (0, _state.updateAll)(state, {
          ids: null,
          path: null
        });
      }
    // case "MICROREACT VIEWER/REVERT HISTORY": {
    //   return {
    //     ...action.payload.state.tree,
    //     phylocanvas: {
    //       ...action.payload.state.tree.phylocanvas,
    //       contextMenu: {
    //         ...action.payload.state.tree.phylocanvas.contextMenu,
    //         open: false,
    //       },
    //     },
    //   };
    // }

    case "MICROREACT VIEWER/SET PHYLOCANVAS PROPS":
      {
        var treeState = state[action.treeId];
        var ids = treeState.ids;
        var subtreeIds = treeState.subtreeIds;
        var path = treeState.path;
        var lasso = treeState.lasso;

        if (action.payload.rootId && action.payload.rootId !== treeState.rootId) {
          subtreeIds = action.payload.ids;
          ids = null;
        } else if (Array.isArray(action.payload.ids)) {
          ids = action.payload.ids;
        }

        if (action.payload.rootId === null && treeState.rootId) {
          ids = null;
          subtreeIds = null;
        }

        if (action.payload.type && action.payload.type !== treeState.type) {
          path = null;
          lasso = false;
        }

        var _action$payload = action.payload,
            fontFamily = _action$payload.fontFamily,
            id = _action$payload.id,
            interactive = _action$payload.interactive,
            labelField = _action$payload.labelField,
            log = _action$payload.log,
            metadata = _action$payload.metadata,
            padding = _action$payload.padding,
            partialRender = _action$payload.partialRender,
            selectedIds = _action$payload.selectedIds,
            showLabels = _action$payload.showLabels,
            size = _action$payload.size,
            strokeColour = _action$payload.strokeColour,
            styles = _action$payload.styles,
            phylocanvasStateUpdate = (0, _objectWithoutProperties2["default"])(_action$payload, _excluded);

        var updater = _objectSpread({
          ids: ids,
          subtreeIds: subtreeIds,
          path: path,
          lasso: lasso
        }, phylocanvasStateUpdate);

        return (0, _state.updateKeyedState)(state, action.treeId, updater);
      }

    case "MICROREACT VIEWER/SET TREE FILTER":
      {
        var _treeState = state[action.treeId];
        return (0, _state.updateKeyedState)(state, action.treeId, {
          ids: action.payload.ids || null,
          path: action.payload !== undefined ? action.payload.path : _treeState.path
        });
      }

    case "MICROREACT VIEWER/SET TREE LASSO":
      {
        var _treeState2 = state[action.treeId];
        return (0, _state.updateKeyedState)(state, action.treeId, {
          lasso: action.payload,
          ids: action.payload === false ? null : _treeState2.ids,
          path: action.payload === false ? null : _treeState2.path
        });
      }

    case "MICROREACT VIEWER/UPDATE TREE":
      {
        return (0, _state.updateKeyedState)(state, action.treeId, (0, _defineProperty2["default"])({}, action.payload.key, action.payload.value));
      }

    default:
      return state;
  }
}

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _arrays = __webpack_require__(24);

var initialState = [];

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "MICROREACT VIEWER/ADD VIEW":
      {
        return [action.payload || {}].concat((0, _toConsumableArray2["default"])(state));
      }

    case "MICROREACT VIEWER/DELETE VIEW":
      {
        return (0, _arrays.remove)(state, function (item) {
          return item.meta.id === action.payload.meta.id;
        });
      }

    case "MICROREACT VIEWER/LOAD":
      {
        return action.payload.views || initialState;
      }

    case "MICROREACT VIEWER/SET VIEWS LIST":
      {
        return action.payload;
      }

    case "MICROREACT VIEWER/UPDATE VIEW":
      {
        return (0, _arrays.update)(state, function (item) {
          return item.meta.id === action.payload.meta.id;
        }, action.payload);
      }

    case "MICROREACT VIEWER/SET DEFAULT VIEW":
      {
        var nextState = state;

        if (state.find(function (item) {
          return item.isDefault;
        })) {
          nextState = (0, _arrays.update)(state, function (item) {
            return item.isDefault;
          }, {
            isDefault: false
          });
        }

        return (0, _arrays.update)(nextState, function (item) {
          return item.meta.id === action.payload.meta.id;
        }, {
          isDefault: true
        });
      }

    default:
      {
        return state;
      }
  }
};

exports["default"] = _default;

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = delayDispatchMiddleware;

var _browser = __webpack_require__(21);

/* eslint-disable consistent-return */
// const dispatch = store.dispatch;
// store.dispatch = function (action) {
//   // const image = document.createElement("img");
//   // // image.src = "/images/logos/icon-spinner.gif";
//   // image.src = "/images/spinner.png";
//   // image.classList.add("microreact-viewer-spinner");
//   // document.body.appendChild(image);
//   // // const handler = setTimeout(
//   // //   () => document.body.appendChild(image),
//   // //   16,
//   // // );
//   // const unsubscribe = store.subscribe(() => {
//   //   // clearTimeout(handler);
//   //   image.remove();
//   //   unsubscribe();
//   // });
//   // dispatch(action)
//   // window.setTimeout(
//   //   () => dispatch(action),
//   //   0,
//   // );
//   // window.setTimeout(
//   //   () => {
//   //     dispatch(action);
//   //     image.remove();
//   //   },
//   //   0,
//   // )
//   if (!action.immediate) {
//     if (document.body.classList.contains("mr-has-loading-spinner")) {
//       dispatch(action);
//     }
//     else {
//       document.body.classList.add("mr-has-loading-spinner");
//       nextFrame(
//         () => {
//           dispatch(action);
//           document.body.classList.remove("mr-has-loading-spinner");
//         }
//       );
//     }
//   }
//   else {
//     dispatch(action);
//   }
// };
function delayDispatchMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (action.delay || action.type.startsWith("@@redux-undo/")) {
        if (document.body.classList.contains("mr-has-loading-spinner")) {
          return next(action);
        } else {
          document.body.classList.add("mr-has-loading-spinner");
          (0, _browser.nextFrame)(function () {
            next(action);
            document.body.classList.remove("mr-has-loading-spinner");
          });
        }
      } else {
        return next(action);
      }
    };
  };
}

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UiCloseIconButton", {
  enumerable: true,
  get: function get() {
    return _UiCloseIconButton["default"];
  }
});
Object.defineProperty(exports, "UiCombobox", {
  enumerable: true,
  get: function get() {
    return _UiCombobox["default"];
  }
});
Object.defineProperty(exports, "UiContextMenu", {
  enumerable: true,
  get: function get() {
    return _UiContextMenu["default"];
  }
});
Object.defineProperty(exports, "UiControlsButton", {
  enumerable: true,
  get: function get() {
    return _UiControlsButton["default"];
  }
});
Object.defineProperty(exports, "UiControlsMenu", {
  enumerable: true,
  get: function get() {
    return _UiControlsMenu["default"];
  }
});
Object.defineProperty(exports, "UiDialog", {
  enumerable: true,
  get: function get() {
    return _UiDialog["default"];
  }
});
Object.defineProperty(exports, "UiDropdownMenu", {
  enumerable: true,
  get: function get() {
    return _UiDropdownMenu["default"];
  }
});
Object.defineProperty(exports, "UiFieldsList", {
  enumerable: true,
  get: function get() {
    return _UiFieldsList["default"];
  }
});
Object.defineProperty(exports, "UiFloatingFilter", {
  enumerable: true,
  get: function get() {
    return _UiFloatingFilter["default"];
  }
});
Object.defineProperty(exports, "UiIconButton", {
  enumerable: true,
  get: function get() {
    return _UiIconButton["default"];
  }
});
Object.defineProperty(exports, "UiIconButtonMenu", {
  enumerable: true,
  get: function get() {
    return _UiIconButtonMenu["default"];
  }
});
Object.defineProperty(exports, "UiList", {
  enumerable: true,
  get: function get() {
    return _UiList["default"];
  }
});
Object.defineProperty(exports, "UiPopover", {
  enumerable: true,
  get: function get() {
    return _UiPopover["default"];
  }
});
Object.defineProperty(exports, "UiPopoverMenu", {
  enumerable: true,
  get: function get() {
    return _UiPopoverMenu["default"];
  }
});
Object.defineProperty(exports, "UiRadioList", {
  enumerable: true,
  get: function get() {
    return _UiRadioList["default"];
  }
});
Object.defineProperty(exports, "UiSelectList", {
  enumerable: true,
  get: function get() {
    return _UiSelectList["default"];
  }
});
Object.defineProperty(exports, "UiSlider", {
  enumerable: true,
  get: function get() {
    return _UiSlider["default"];
  }
});
Object.defineProperty(exports, "UiSpeedDial", {
  enumerable: true,
  get: function get() {
    return _UiSpeedDial["default"];
  }
});
Object.defineProperty(exports, "UiTabs", {
  enumerable: true,
  get: function get() {
    return _UiTabs["default"];
  }
});
Object.defineProperty(exports, "UiTextfield", {
  enumerable: true,
  get: function get() {
    return _UiTextfield["default"];
  }
});
Object.defineProperty(exports, "UiToggleButtons", {
  enumerable: true,
  get: function get() {
    return _UiToggleButtons["default"];
  }
});
Object.defineProperty(exports, "UiToggleSlider", {
  enumerable: true,
  get: function get() {
    return _UiToggleSlider["default"];
  }
});
Object.defineProperty(exports, "UiToggleSwitch", {
  enumerable: true,
  get: function get() {
    return _UiToggleSwitch["default"];
  }
});
Object.defineProperty(exports, "UiZoomControls", {
  enumerable: true,
  get: function get() {
    return _ZoomControls["default"];
  }
});
Object.defineProperty(exports, "UiSvgIcon", {
  enumerable: true,
  get: function get() {
    return _MdiIcon["default"];
  }
});

var _UiCloseIconButton = _interopRequireDefault(__webpack_require__(426));

var _UiCombobox = _interopRequireDefault(__webpack_require__(28));

var _UiContextMenu = _interopRequireDefault(__webpack_require__(427));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(162));

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(164));

var _UiDialog = _interopRequireDefault(__webpack_require__(92));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiFieldsList = _interopRequireDefault(__webpack_require__(111));

var _UiFloatingFilter = _interopRequireDefault(__webpack_require__(103));

var _UiIconButton = _interopRequireDefault(__webpack_require__(176));

var _UiIconButtonMenu = _interopRequireDefault(__webpack_require__(155));

var _UiList = _interopRequireDefault(__webpack_require__(160));

var _UiPopover = _interopRequireDefault(__webpack_require__(149));

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

var _UiRadioList = _interopRequireDefault(__webpack_require__(98));

var _UiSelectList = _interopRequireDefault(__webpack_require__(170));

var _UiSlider = _interopRequireDefault(__webpack_require__(177));

var _UiSpeedDial = _interopRequireDefault(__webpack_require__(214));

var _UiTabs = _interopRequireDefault(__webpack_require__(215));

var _UiTextfield = _interopRequireDefault(__webpack_require__(49));

var _UiToggleButtons = _interopRequireDefault(__webpack_require__(122));

var _UiToggleSlider = _interopRequireDefault(__webpack_require__(178));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(42));

var _ZoomControls = _interopRequireDefault(__webpack_require__(179));

var _MdiIcon = _interopRequireDefault(__webpack_require__(82));

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _CloseRounded = _interopRequireDefault(__webpack_require__(47));

var UiCloseIconButton = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: props.className,
    color: props.active ? "primary" : undefined,
    onClick: props.onClick,
    size: "small",
    style: props.style,
    title: props.title || "Close"
  }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], null), props.children);
});

UiCloseIconButton.displayName = "UiCloseIconButton";
UiCloseIconButton.propTypes = {
  active: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  style: _propTypes["default"].object
};
var _default = UiCloseIconButton;
exports["default"] = _default;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Menu = _interopRequireDefault(__webpack_require__(211));

var _Popover = _interopRequireDefault(__webpack_require__(94));

__webpack_require__(212);

var _html = __webpack_require__(35);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UiContextMenu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(UiContextMenu, _React$PureComponent);

  var _super = _createSuper(UiContextMenu);

  function UiContextMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, UiContextMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      point: undefined
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
      event.preventDefault();

      _this.setState({
        point: {
          left: event.clientX,
          top: event.clientY
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        point: undefined
      });

      _this.props.onClose && _this.props.onClose();
    });
    return _this;
  }

  (0, _createClass2["default"])(UiContextMenu, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var isOpened = this.state.point !== undefined;
      return (
        /*#__PURE__*/
        // <div
        //   onContextMenu={this.handleClick}
        //   // ref={props.forwardRef}
        // >
        _react["default"].createElement(_Popover["default"] // anchorEl={this.anchorEl.current}
        // anchorOrigin={
        //   {
        //     vertical: "bottom",
        //     horizontal: this.props.direction,
        //   }
        // }
        , {
          container: _html.getContainerElement,
          onClose: this.handleClose,
          open: isOpened,
          PaperProps: {
            className: (0, _classnames["default"])(this.props.className, "mr-ui-context-menu"),
            elevation: 0,
            square: true
          } // transformOrigin={
          //   {
          //     vertical: "top",
          //     horizontal: this.props.direction,
          //   }
          // }

        }, isOpened && props.renderMenu(this.state.point)) // {/* <Menu
        //   container={getContainerElement}
        //   PaperProps={
        //     {
        //       className: classnames(
        //         this.props.className,
        //         "mr-ui-context-menu"
        //       ),
        //       // elevation: false,
        //       square: true,
        //     }
        //   }
        //   elevation={0}
        //   keepMounted
        //   open={this.state.point !== undefined}
        //   onClose={this.handleClose}
        //   anchorReference="anchorPosition"
        //   anchorPosition={this.state.point}
        // >
        //   { (this.state.point !== undefined) && props.renderMenu(this.state.point) }
        // </Menu> */}
        // { props.children }
        // </div>

      );
    }
  }]);
  return UiContextMenu;
}(_react["default"].PureComponent);

UiContextMenu.displayName = "UiContextMenu";
UiContextMenu.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  forwardRef: _propTypes["default"].object,
  renderMenu: _propTypes["default"].func.isRequired
};
var _default = UiContextMenu;
exports["default"] = _default;

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TuneRounded");

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropDownTwoTone");

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 432 */
/***/ (function(module, exports) {

module.exports = require("react-window");

/***/ }),
/* 433 */
/***/ (function(module, exports) {

module.exports = require("lodash.groupby");

/***/ }),
/* 434 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 438 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),
/* 439 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/TabContext");

/***/ }),
/* 440 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/TabList");

/***/ }),
/* 441 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/TabPanel");

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 443 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.presentStateSelector = exports.rootStateSelector = void 0;

var rootStateSelector = function rootStateSelector(state) {
  return state;
};

exports.rootStateSelector = rootStateSelector;

var presentStateSelector = function presentStateSelector(state) {
  return state.present;
};

exports.presentStateSelector = presentStateSelector;

/***/ }),
/* 446 */
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ }),
/* 447 */
/***/ (function(module, exports) {

module.exports = require("react-vega");

/***/ }),
/* 448 */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),
/* 449 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 450 */
/***/ (function(module, exports) {

module.exports = require("vega-tooltip");

/***/ }),
/* 451 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EditRounded");

/***/ }),
/* 452 */
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),
/* 453 */,
/* 454 */,
/* 455 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RedoRounded");

/***/ }),
/* 456 */,
/* 457 */
/***/ (function(module, exports) {

module.exports = require("htmlsvg");

/***/ }),
/* 458 */
/***/ (function(module, exports) {

module.exports = require("mini-svg-data-uri");

/***/ }),
/* 459 */,
/* 460 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CropFreeOutlined");

/***/ }),
/* 461 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MapTwoTone");

/***/ }),
/* 462 */,
/* 463 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShuffleRounded");

/***/ }),
/* 464 */,
/* 465 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DoneOutlineRounded");

/***/ }),
/* 466 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 467 */,
/* 468 */,
/* 469 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DragIndicatorOutlined");

/***/ }),
/* 470 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBoxTwoTone");

/***/ }),
/* 471 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBoxOutlineBlankTwoTone");

/***/ }),
/* 472 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SortByAlphaRounded");

/***/ }),
/* 473 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOffTwoTone");

/***/ }),
/* 474 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),
/* 475 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),
/* 476 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),
/* 477 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrow");

/***/ }),
/* 478 */,
/* 479 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),
/* 480 */
/***/ (function(module, exports) {

module.exports = require("react-rnd");

/***/ }),
/* 481 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FastForwardRounded");

/***/ }),
/* 482 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FastRewindRounded");

/***/ }),
/* 483 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PauseRounded");

/***/ }),
/* 484 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrowRounded");

/***/ }),
/* 485 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipNextRounded");

/***/ }),
/* 486 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipPreviousRounded");

/***/ }),
/* 487 */,
/* 488 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ControlCameraRounded");

/***/ }),
/* 489 */,
/* 490 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleTwoTone");

/***/ }),
/* 491 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewCompact");

/***/ }),
/* 492 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),
/* 493 */
/***/ (function(module, exports) {

module.exports = require("react-hashchange");

/***/ }),
/* 494 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WorkOutline");

/***/ }),
/* 495 */,
/* 496 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DonutSmall");

/***/ })
/******/ ]);
});