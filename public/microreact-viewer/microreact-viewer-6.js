(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[6],{

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ui = __webpack_require__(27);

var _state = __webpack_require__(2);

var _PanePlaceholder = _interopRequireDefault(__webpack_require__(498));

var _NetworkPane = _interopRequireDefault(__webpack_require__(579));

var _isValidNetwork = _interopRequireDefault(__webpack_require__(202));

var _networkFile = _interopRequireDefault(__webpack_require__(78));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var networkId = _ref.networkId;
  return {
    componentName: "Network",
    file: (0, _networkFile["default"])(state, networkId),
    isEmpty: !(0, _isValidNetwork["default"])(state, networkId),
    PaneComponent: _NetworkPane["default"]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var networkId = _ref2.networkId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(networkId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_PanePlaceholder["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(38));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(499);

var _propTypes2 = __webpack_require__(14);

var _PaneIcon = _interopRequireDefault(__webpack_require__(54));

var _FileLoader = _interopRequireDefault(__webpack_require__(165));

var _excluded = ["PaneComponent", "isEmpty", "file"];

var PanePlaceholder = /*#__PURE__*/_react["default"].memo(function (props) {
  var PaneComponent = props.PaneComponent,
      isEmpty = props.isEmpty,
      file = props.file,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  if (isEmpty) {
    var _props$emptyLabel;

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-pane-placeholder",
      onClick: props.onEditPane
    }, /*#__PURE__*/_react["default"].createElement("figure", null, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
      component: props.componentName
    })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "outlined",
      disableElevation: true,
      size: "small"
    }, (_props$emptyLabel = props.emptyLabel) !== null && _props$emptyLabel !== void 0 ? _props$emptyLabel : "Edit".concat(props.componentName)));
  } else if (file && !file._content) {
    return /*#__PURE__*/_react["default"].createElement(_FileLoader["default"], {
      file: file
    });
  }

  return /*#__PURE__*/_react["default"].createElement(PaneComponent, rest);
});

PanePlaceholder.displayName = "PanePlaceholder";
PanePlaceholder.propTypes = {
  componentName: _propTypes["default"].string,
  emptyLabel: _propTypes["default"].string,
  file: _propTypes2.FileDescriptor,
  isEmpty: _propTypes["default"].bool.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  PaneComponent: _propTypes["default"].object.isRequired
};
PanePlaceholder.defaultProps = {
  isEmpty: true
};
var _default = PanePlaceholder;
exports["default"] = _default;

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(38));

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(53));

var _excluded = ["active"];

var LassoIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 22 22"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(593 387)"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    opacity: "0.375"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M -1.89315e-07 0L 0.123997 -0.992283L -1.35966 -1.17768L -0.964432 0.264332L -1.89315e-07 0ZM 4.01985 14.6667L 3.05542 14.931L 3.31413 15.8749L 4.26338 15.6366L 4.01985 14.6667ZM 14.6402 12L 14.8837 12.9699L 15.4278 12.8333L 15.5948 12.2977L 14.6402 12ZM 10.794 0.341051L 0.123997 -0.992283L -0.123997 0.992283L 10.546 2.32562L 10.794 0.341051ZM -0.964432 0.264332L 3.05542 14.931L 4.98428 14.4023L 0.964432 -0.264332L -0.964432 0.264332ZM 4.26338 15.6366L 14.8837 12.9699L 14.3967 11.0301L 3.77632 13.6968L 4.26338 15.6366ZM 15.5948 12.2977L 18.2747 3.70515L 16.3654 3.10967L 13.6856 11.7023L 15.5948 12.2977Z",
    transform: "translate(-589.32 -383.333)"
  })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.6799 5.33333C 4.15997 5.33333 5.3598 4.13943 5.3598 2.66667C 5.3598 1.19391 4.15997 0 2.6799 0C 1.19983 0 0 1.19391 0 2.66667C 0 4.13943 1.19983 5.33333 2.6799 5.33333Z",
    transform: "translate(-592 -386)"
  })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.6799 5.33333C 4.15997 5.33333 5.3598 4.13943 5.3598 2.66667C 5.3598 1.19391 4.15997 0 2.6799 0C 1.19983 0 0 1.19391 0 2.66667C 0 4.13943 1.19983 5.33333 2.6799 5.33333Z",
    transform: "translate(-581.33 -384.667)"
  })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.6799 5.33333C 4.15997 5.33333 5.3598 4.13943 5.3598 2.66667C 5.3598 1.19391 4.15997 0 2.6799 0C 1.19983 0 0 1.19391 0 2.66667C 0 4.13943 1.19983 5.33333 2.6799 5.33333Z",
    transform: "translate(-587.98 -371.333)"
  })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.6799 5.33333C 4.15997 5.33333 5.3598 4.13943 5.3598 2.66667C 5.3598 1.19391 4.15997 0 2.6799 0C 1.19983 0 0 1.19391 0 2.66667C 0 4.13943 1.19983 5.33333 2.6799 5.33333Z",
    transform: "translate(-577.36 -374)"
  }))));
});

LassoIcon.displayName = "LassoIcon";

var LassoButton = /*#__PURE__*/_react["default"].memo(function (props) {
  var active = props.active,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({}, rest, {
    className: (0, _classnames["default"])("mr-controls-button", props.className),
    color: active ? "primary" : undefined,
    onClick: props.onClick,
    size: "small",
    title: props.title || (active ? "Disable lasso filter" : "Activate lasso filter"),
    variant: "contained"
  }), /*#__PURE__*/_react["default"].createElement(LassoIcon, null));
});

LassoButton.displayName = "LassoButton";
LassoButton.propTypes = {
  active: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired
};
var _default = LassoButton;
exports["default"] = _default;

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.anyPostfix = void 0;

var _state = __webpack_require__(2);

var _baseGraph = _interopRequireDefault(__webpack_require__(173));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anyPostfix = /^(.*)__(colour|color|linewidth|linestyle)$/i;
exports.anyPostfix = anyPostfix;
var edgeAttributesSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _baseGraph["default"])(state, networkId);
}, function (graph) {
  var attributes = new Set();

  var _iterator = _createForOfIteratorHelper(graph.edges),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var edge = _step.value;

      for (var _i = 0, _Object$keys = Object.keys(edge); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (key !== "id" && key !== "from" && key !== "to" && key !== "arrows" && key !== "arrowStrikethrough") {
          attributes.add(key);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var fields = [];

  var _iterator2 = _createForOfIteratorHelper(attributes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _key = _step2.value;

      var match = _key.match(anyPostfix);

      fields.push({
        name: _key,
        label: (match !== null ? match[1] : _key).replace(/_/g, " ")
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return fields;
});
var _default = edgeAttributesSelector;
exports["default"] = _default;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = canvasLasso;

var _geometry = __webpack_require__(100);

/* eslint-disable prefer-object-spread */

/* eslint no-param-reassign: 0 */
function drawLines(ctx, coordinates) {
  ctx.moveTo(coordinates[0][0], coordinates[0][1]);

  for (var i = 1; i < coordinates.length; i++) {
    ctx.lineTo(coordinates[i][0], coordinates[i][1]);
  }

  ctx.stroke();
}

function drawPoints(ctx, coordinates, r, drawLast) {
  for (var i = 0; i < coordinates.length - (drawLast ? 1 : 0); i++) {
    ctx.fillRect(coordinates[i][0] - r, coordinates[i][1] - r, r * 2, r * 2);
    ctx.strokeRect(coordinates[i][0] - r + ctx.lineWidth, coordinates[i][1] - r + ctx.lineWidth, r * 2 - ctx.lineWidth, r * 2 - ctx.lineWidth);
  }
}

function canvasLasso(mouseCanvas, drawingCanvas, options) {
  var lasso = Object.assign({
    clearBeforeDraw: false,
    dotsStyle: "#383838",
    isActive: false,
    lineWidth: 2,
    path: null,
    pointFillStyle: "#ffffff",
    pointSize: 14,
    pointStrokeStyle: "#000000",
    strokeStyle: "#3C7383",
    clear: function clear() {
      var ctx = drawingCanvas.getContext("2d");

      if (lasso.clearBeforeDraw) {
        ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
      }
    },
    draw: function draw() {
      var ctx = drawingCanvas.getContext("2d");

      if (lasso.clearBeforeDraw) {
        ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
      }

      var path = lasso.internalPath || lasso.path;

      if (lasso.isActive) {
        if (Array.isArray(path) && path.length > 0) {
          var scale = 1;
          ctx.strokeStyle = lasso.strokeStyle;
          ctx.lineWidth = lasso.lineWidth * scale;
          ctx.beginPath();
          var points = lasso.translateToCanvas(path);
          drawLines(ctx, points);
          ctx.lineWidth = 1 * scale;
          ctx.fillStyle = lasso.pointFillStyle;
          ctx.strokeStyle = lasso.pointStrokeStyle;
          drawPoints(ctx, points, scale * lasso.pointSize / 2, !!lasso.path);
          ctx.closePath();
        }
      }

      lasso.updateCanvas();
    },
    destroy: function destroy() {
      mouseCanvas.removeEventListener("mousedown", handleMousedown);
      mouseCanvas.removeEventListener("mouseup", handleMouseup);
    },
    isPointInside: function isPointInside(point, path) {
      return (0, _geometry.isPointInPolygon)(point, path || lasso.path);
    },
    onPathChange: function onPathChange(path) {
      lasso.setPath(path);
    },
    onRedrawRequested: function onRedrawRequested() {
      lasso.draw();
      lasso.updateCanvas();
    },
    setActive: function setActive(isActive) {
      lasso.isActive = isActive;
      lasso.updateCanvas();
    },
    setPath: function setPath(path) {
      lasso.path = path;
      lasso.internalPath = null;

      if (lasso.onRedrawRequested) {
        lasso.onRedrawRequested();
      }
    },
    translateToCanvas: function translateToCanvas(points) {
      return points;
    },
    translateFromCanvas: function translateFromCanvas(x, y) {
      return {
        x: x,
        y: y
      };
    },
    updateCanvas: function updateCanvas() {
      if (lasso.isActive) {
        if (!Array.isArray(lasso.path)) {
          mouseCanvas.style.cursor = "crosshair";
          mouseCanvas.title = "Click to draw points";
        } else {
          mouseCanvas.style.cursor = null;
          mouseCanvas.title = "Click outside the path to clear";
        }
      } else {
        mouseCanvas.style.cursor = null;
        mouseCanvas.title = "";

        if (lasso.internalPath) {
          lasso.internalPath = null;
        }
      }
    }
  }, options);

  var handleOnClick = function handleOnClick(event) {
    if (!lasso.isActive) return;
    var point = lasso.translateFromCanvas(event.offsetX, event.offsetY);

    if (Array.isArray(lasso.path)) {
      if (!(0, _geometry.isPointInPolygon)(point, lasso.path)) {
        lasso.onPathChange(null);
      }

      return;
    }

    if (!lasso.internalPath) {
      lasso.internalPath = [];
    }

    if (lasso.internalPath.length > 0) {
      var padding = lasso.pointSize;
      var pointTopLeft = lasso.translateFromCanvas(event.offsetX - padding, event.offsetY - padding);
      var pointBottomRight = lasso.translateFromCanvas(event.offsetX + padding, event.offsetY + padding);

      if (pointBottomRight[0] >= lasso.internalPath[0][0] && pointTopLeft[0] <= lasso.internalPath[0][0] && (pointBottomRight[1] >= lasso.internalPath[0][1] && pointTopLeft[1] <= lasso.internalPath[0][1] || pointBottomRight[1] <= lasso.internalPath[0][1] && pointTopLeft[1] >= lasso.internalPath[0][1])) {
        // push the first point to the end of the path to close the polygon
        // and mark the path as finished
        var path = lasso.internalPath;
        path.push(path[0]);
        lasso.internalPath = null;
        lasso.onPathChange(path);
        return;
      }
    }

    lasso.internalPath.push(point);

    if (lasso.onRedrawRequested) {
      lasso.onRedrawRequested();
    }
  };

  var offsetX = null;
  var offsetY = null;

  var handleMousedown = function handleMousedown(event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
  };

  var handleMouseup = function handleMouseup(event) {
    if (event.target.nodeName === "CANVAS") {
      if (Math.abs(offsetX - event.offsetX) < 5 && Math.abs(offsetY - event.offsetY) < 5) {
        handleOnClick(event);
      }
    }

    offsetX = null;
    offsetY = null;
  };

  mouseCanvas.addEventListener("mousedown", handleMousedown, false
  /* useCapture */
  );
  mouseCanvas.addEventListener("mouseup", handleMouseup, false
  /* useCapture */
  );
  lasso.updateCanvas();
  return lasso;
}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(10);

var _rows = _interopRequireDefault(__webpack_require__(17));

var _rowsWithStyleFields = _interopRequireDefault(__webpack_require__(108));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var baseStylesSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (allRows) {
  var styles = {};

  var _iterator = _createForOfIteratorHelper(allRows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      styles[row[0]] = {};
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return styles;
});
var rowStylesSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _rowsWithStyleFields["default"])(state);
}, function (state) {
  return baseStylesSelector(state);
}, function (_ref, baseStyle) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
      rows = _ref2[0];

  var _iterator2 = _createForOfIteratorHelper(rows),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var row = _step2.value;
      var style = baseStyle[row[0]];
      style.label = row["--microreact-label"];
      style.colour = row["--microreact-colour"];
      style.colourLabel = row["--microreact-colour-label"];
      style.shape = row["--microreact-shape"];
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return [baseStyle];
});
var _default = rowStylesSelector;
exports["default"] = _default;

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(95);

var _NetworkPane = _interopRequireDefault(__webpack_require__(580));

var _filters = __webpack_require__(50);

var _networks = __webpack_require__(77);

var _graph = _interopRequireDefault(__webpack_require__(590));

var _hasLayout = _interopRequireDefault(__webpack_require__(592));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var networkId = _ref.networkId;
  var networkState = state.networks[networkId];
  return {
    controls: networkState.controls,
    dragableNodes: true,
    geographicLayout: networkState.geographicLayout,
    graph: (0, _graph["default"])(state, networkId),
    hasLasso: true,
    labelSize: networkState.labelSize,
    lassoActive: networkState.lasso,
    lassoPath: networkState.path,
    maxLabelSize: networkState.maxFontSize,
    maxNodeSize: networkState.maxNodeSize,
    minLabelSize: networkState.minFontSize,
    minNodeSize: networkState.minNodeSize,
    nodeSize: networkState.nodeSize,
    recomputeLayout: !(0, _hasLayout["default"])(state, networkId),
    showLabels: networkState.showLabels,
    showNodes: networkState.showNodes,
    viewport: networkState.viewport
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var networkId = _ref2.networkId;
  return {
    onLassoPathChange: function onLassoPathChange(path) {
      return dispatch((0, _networks.setFilter)(networkId, path));
    },
    onLayoutChange: function onLayoutChange(layout) {
      return dispatch((0, _networks.setLayout)(networkId, layout));
    },
    onNodeSelect: function onNodeSelect(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    },
    onViewportChange: function onViewportChange(value) {
      return dispatch((0, _networks.update)(networkId, "viewport", value));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_NetworkPane["default"]);

exports["default"] = _default;

/***/ }),

/***/ 580:
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

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _lodash = _interopRequireDefault(__webpack_require__(449));

var _lasso = _interopRequireDefault(__webpack_require__(581));

var _renderers = __webpack_require__(583);

var _downloads = __webpack_require__(52);

var _networks = __webpack_require__(208);

var _ZoomControls = _interopRequireDefault(__webpack_require__(180));

var _NetworkControls = _interopRequireDefault(__webpack_require__(584));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

sigma.canvas.nodes.def = _renderers.nodeRenderer;
sigma.canvas.edges.def = _renderers.edgeRenderer;

var Network = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Network, _React$PureComponent);

  var _super = _createSuper(Network);

  function Network() {
    var _this;

    (0, _classCallCheck2["default"])(this, Network);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sigmaRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadPNG", function () {
      var dataUrl = (0, _networks.exportPNG)(_this.sigmaInst);
      (0, _downloads.downloadDataUrl)(dataUrl, "network.png", "image/png");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadSVG", function () {
      var dataUrl = (0, _networks.exportSVG)(_this.sigmaInst);
      (0, _downloads.downloadDataUrl)(dataUrl, "network.svg", "image/svg+xml");
    });
    return _this;
  }

  (0, _createClass2["default"])(Network, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.sigmaInst = new sigma({
        graph: this.props.graph,
        renderer: {
          container: this.sigmaRef.current,
          type: "canvas"
        },
        settings: {
          defaultEdgeColor: this.props.edgeColour,
          defaultLabelSize: this.props.labelSize,
          defaultNodeColour: this.props.labelSize,
          drawLabels: this.props.showLabels,
          drawNodes: this.props.showNodes,
          font: this.props.fontFamily,
          maxNodeSize: this.props.nodeSize / 2,
          minNodeSize: this.props.minNodeSize,
          nodeColor: this.props.nodeColour,
          sideMargin: 1
        }
      });
      var area = this.sigmaInst.renderers[0].camera.quadtree.area;

      this.sigmaInst.renderers[0].camera.quadtree.area = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var nodes = area.apply(_this2.sigmaInst.renderers[0].camera.quadtree, args);
        return nodes.sort(function (a, b) {
          if (a.isHighlighted && !b.isHighlighted) return 1;
          if (!a.isHighlighted && b.isHighlighted) return -1;
          return 0;
        });
      };

      if (this.props.draggableNodes) {
        sigma.plugins.dragNodes(this.sigmaInst, this.sigmaInst.renderers[0]);
      }

      this.sigmaInst.initalZoomRatio = this.sigmaInst.settings("zoomingRatio");

      if (this.props.onViewportChange) {
        this.sigmaInst.camera.bind("coordinatesUpdated", (0, _lodash["default"])(function () {
          return _this2.props.onViewportChange(_this2.saveViewport());
        }, 200
        /* same as Sigma's mouseZoomDuration and doubleClickZoomDuration */
        ));
      }

      if (this.props.onNodeSelect) {
        this.sigmaInst.bind("clickNodes", function (event) {
          return _this2.handleNodeClick(event);
        });
        this.sigmaInst.bind("clickStage", function (event) {
          return _this2.handleStageClick(event);
        });
      }

      this.sigmaInst.bind("overNode", function (event) {
        var data = event.data;

        if (data.node.hoverLabel && data.node.isActive !== false) {
          data.node.label = data.node.hoverLabel;

          _this2.sigmaInst.refresh();
        }

        if (_this2.props.onNodeHover) {
          _this2.props.onNodeHover(event);
        }
      });
      this.sigmaInst.bind("outNode", function (event) {
        var data = event.data;

        if (data.node.hoverLabel && data.node.label) {
          data.node.label = undefined;

          _this2.sigmaInst.refresh();
        }

        if (_this2.props.onNodeLeave) {
          _this2.props.onNodeLeave(event);
        }
      });

      if (this.props.hasLasso) {
        this.canvasLasso = (0, _lasso["default"])(this.sigmaInst, {
          isActive: this.props.lassoActive,
          path: this.props.lassoPath,
          onPathChange: function onPathChange(path) {
            return _this2.props.onLassoPathChange(path);
          }
        });
        this.sigmaInst.canvasLasso = this.canvasLasso;
      }

      var renderer = this.sigmaInst.renderers[0]; // Keep renderer's keys on the sigma instance to allow custom renderers to access them

      this.sigmaInst.settings("rendererXKey", "".concat(renderer.options.prefix, "x"));
      this.sigmaInst.settings("rendererYKey", "".concat(renderer.options.prefix, "y"));
      this.sigmaInst.settings("rendererSizeKey", "".concat(renderer.options.prefix, "size"));
      this.sigmaInst.settings("_camera", this.sigmaInst.camera);

      if (this.props.viewport) {
        this.restoreViewport(this.props.viewport);
      }

      if (this.props.recomputeLayout) {
        this.startLayout();
      } else {
        this.sigmaInst.refresh();
      }

      window.sigmaInst = this.sigmaInst;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.showLabels !== this.props.showLabels) {
        this.sigmaInst.settings("drawLabels", this.props.showLabels);
      }

      if (prevProps.showNodes !== this.props.showNodes) {
        this.sigmaInst.settings("drawNodes", this.props.showNodes);
      }

      if (prevProps.nodeSize !== this.props.nodeSize) {
        this.sigmaInst.settings("maxNodeSize", this.props.nodeSize / 2);
      }

      if (prevProps.labelSize !== this.props.labelSize) {
        this.sigmaInst.settings("defaultLabelSize", this.props.labelSize);
      }

      if (this.props.graph !== prevProps.graph) {
        this.sigmaInst.graph.clear();
        this.sigmaInst.graph.read(this.props.graph);
      }

      if (prevProps.lassoActive !== this.props.lassoActive) {
        this.canvasLasso.setActive(this.props.lassoActive);
      }

      if (prevProps.lassoPath !== this.props.lassoPath) {
        this.canvasLasso.setPath(this.props.lassoPath);
      }

      this.sigmaInst.refresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
      } // if (this.props.onViewportChange) {
      //   this.props.onViewportChange(this.saveViewport());
      // }


      if (this.canvasLasso) {
        this.canvasLasso.destroy();
      }

      if (this.sigmaInst) {
        this.sigmaInst.kill();
      }
    }
  }, {
    key: "getNodeNeighbours",
    value: function getNodeNeighbours(nodeIds) {
      var _this3 = this;

      var neighbours = new Set();

      var _iterator = _createForOfIteratorHelper(nodeIds),
          _step;

      try {
        var _loop = function _loop() {
          var nodeId = _step.value;
          neighbours.add(nodeId);

          _this3.props.graph.edges.forEach(function (edge) {
            if (edge.source === nodeId) {
              neighbours.add(edge.target);
            }

            if (edge.target === nodeId) {
              neighbours.add(edge.source);
            }
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return Array.from(neighbours);
    }
  }, {
    key: "getNodeComponent",
    value: function getNodeComponent(nodeIds) {
      var _this4 = this;

      var queue = nodeIds;
      var visited = new Set();

      var _loop2 = function _loop2() {
        var nodeId = queue.pop();
        visited.add(nodeId);

        _this4.props.graph.edges.forEach(function (edge) {
          if (edge.source === nodeId && !visited.has(edge.target)) {
            queue.push(edge.target);
          }

          if (edge.target === nodeId && !visited.has(edge.source)) {
            queue.push(edge.source);
          }
        });
      };

      while (queue.length) {
        _loop2();
      }

      return Array.from(visited);
    }
  }, {
    key: "startLayout",
    value: function startLayout() {
      var _this5 = this;

      if (!this.sigmaInst || this.sigmaInst.isForceAtlas2Running()) {
        return;
      }

      if (this.props.onLayoutStart) {
        this.props.onLayoutStart();
      }

      this.sigmaInst.renderers[0].settings("drawEdges", false);
      this.sigmaInst.startForceAtlas2(_objectSpread({
        worker: true,
        barnesHutOptimize: false
      }, this.props.layoutSettings));
      this.timeoutID = setTimeout(function () {
        return _this5.stopLayout();
      }, this.props.layoutDuration);
    }
  }, {
    key: "stopLayout",
    value: function stopLayout() {
      if (!this.sigmaInst || !this.sigmaInst.isForceAtlas2Running()) {
        return;
      }

      this.sigmaInst.renderers[0].settings("drawEdges", true);
      this.sigmaInst.stopForceAtlas2();
      var nodes = this.sigmaInst.graph.nodes();
      var layout = {};

      var _iterator2 = _createForOfIteratorHelper(nodes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var node = _step2.value;
          layout[node.id] = {
            x: node.x,
            y: node.y
          };
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (this.props.onLayoutChange) {
        this.props.onLayoutChange(layout);
      }
    }
  }, {
    key: "handleNodeClick",
    value: function handleNodeClick(event) {
      var ctrlKey = event.data.captor.metaKey || event.data.captor.ctrlKey;
      var altKey = event.data.captor.altKey || event.data.captor.shiftKey;
      var clickedNodeIds = event.data.node.map(function (node) {
        return node.id;
      });

      if (altKey && ctrlKey) {
        var ids = this.getNodeComponent(clickedNodeIds);
        this.props.onNodeSelect(ids);
      } else if (altKey) {
        var _ids = this.getNodeNeighbours(clickedNodeIds);

        this.props.onNodeSelect(_ids, ctrlKey);
      } else {
        this.props.onNodeSelect(clickedNodeIds, ctrlKey);
      }
    }
  }, {
    key: "handleStageClick",
    value: function handleStageClick(event) {
      var _event$data$captor = event.data.captor,
          isDragging = _event$data$captor.isDragging,
          metaKey = _event$data$captor.metaKey,
          ctrlKey = _event$data$captor.ctrlKey;
      var append = metaKey || ctrlKey;

      if (!isDragging && !append) {
        this.props.onNodeSelect();
      }
    }
  }, {
    key: "handleZoomChange",
    value: function handleZoomChange(delta) {
      var ratio = Math.pow(this.sigmaInst.settings("zoomingRatio"), -delta);
      var animation = {
        duration: this.sigmaInst.settings("mouseZoomDuration")
      };
      sigma.utils.zoomTo(this.sigmaInst.camera, 0, 0, ratio, animation);
    }
  }, {
    key: "handleZoomReset",
    value: function handleZoomReset() {
      var animation = {
        duration: this.sigmaInst.settings("mouseZoomDuration")
      };
      sigma.utils.zoomTo(this.sigmaInst.camera, 0, 0, 1 / this.sigmaInst.camera.ratio, animation);
    }
  }, {
    key: "saveViewport",
    value: function saveViewport() {
      return {
        x: this.sigmaInst.camera.x,
        y: this.sigmaInst.camera.y,
        ratio: this.sigmaInst.camera.ratio
      };
    }
  }, {
    key: "restoreViewport",
    value: function restoreViewport(viewport) {
      this.sigmaInst.camera.x = viewport.x;
      this.sigmaInst.camera.y = viewport.y;
      this.sigmaInst.camera.ratio = viewport.ratio;
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: this.props.height,
          width: this.props.width
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-network",
        ref: this.sigmaRef,
        style: {
          height: this.props.height,
          width: this.props.width
        }
      }), /*#__PURE__*/_react["default"].createElement(_NetworkControls["default"], {
        networkId: this.props.networkId,
        onDownloadPNG: this.downloadPNG,
        onDownloadSVG: this.downloadSVG,
        onShuffleNodes: function onShuffleNodes() {
          return _this6.startLayout();
        }
      }), /*#__PURE__*/_react["default"].createElement(_ZoomControls["default"], {
        className: (0, _classnames["default"])({
          visible: this.props.controls
        }),
        onReset: function onReset() {
          return _this6.handleZoomReset();
        },
        onZoomIn: function onZoomIn() {
          return _this6.handleZoomChange(+1);
        },
        onZoomOut: function onZoomOut() {
          return _this6.handleZoomChange(-1);
        }
      }));
    }
  }]);
  return Network;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Network, "propTypes", {
  children: _propTypes["default"].node,
  controls: _propTypes["default"].bool.isRequired,
  draggableNodes: _propTypes["default"].bool,
  edgeColour: _propTypes["default"].string,
  fontFamily: _propTypes["default"].string,
  graph: _propTypes["default"].shape({
    edges: _propTypes["default"].array,
    nodes: _propTypes["default"].array
  }),
  hasLasso: _propTypes["default"].bool,
  height: _propTypes["default"].number.isRequired,
  labelColour: _propTypes["default"].string,
  labelSize: _propTypes["default"].number,
  lassoActive: _propTypes["default"].bool,
  lassoPath: _propTypes["default"].array,
  layoutDuration: _propTypes["default"].number,
  layoutSettings: _propTypes["default"].object,
  minNodeSize: _propTypes["default"].number,
  networkId: _propTypes["default"].string.isRequired,
  nodeColour: _propTypes["default"].string,
  nodeRenderer: _propTypes["default"].func,
  nodeSize: _propTypes["default"].number,
  onControlsVisibleChange: _propTypes["default"].func,
  onLassoActiveChange: _propTypes["default"].func,
  onLassoPathChange: _propTypes["default"].func,
  onLayoutChange: _propTypes["default"].func,
  onLayoutStart: _propTypes["default"].func,
  onNodeHover: _propTypes["default"].func,
  onNodeLeave: _propTypes["default"].func,
  onNodeSelect: _propTypes["default"].func,
  onViewportChange: _propTypes["default"].func,
  recomputeLayout: _propTypes["default"].bool,
  showLabels: _propTypes["default"].bool,
  showNodes: _propTypes["default"].bool,
  viewport: _propTypes["default"].object,
  width: _propTypes["default"].number.isRequired
});
(0, _defineProperty2["default"])(Network, "defaultProps", {
  draggableNodes: false,
  edgeColour: "#ccc",
  fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  hasLasso: false,
  labelColour: "#222",
  labelSize: 14,
  layoutDuration: 1000,
  maxLabelSize: 160,
  minNodeSize: 1,
  nodeColour: "#ccc",
  nodeSize: 16,
  secondaryControls: [],
  showLabels: true,
  showNodes: true,
  theme: "turquoise"
});
var _default = Network;
exports["default"] = _default;

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _canvasLasso = _interopRequireDefault(__webpack_require__(509));

var _sigma = __webpack_require__(582);

function _default(sigmaInst, options) {
  var renderer = sigmaInst.renderers[0];
  var mouseCanvas = renderer.domElements.mouse;
  renderer.initDOM("canvas", "lasso");
  var drawingCanvas = renderer.domElements.lasso;
  mouseCanvas.parentElement.insertBefore(drawingCanvas, mouseCanvas);
  var width = renderer.width;
  var height = renderer.height;
  renderer.width = 0;
  renderer.height = 0;
  renderer.resize(width, height);
  var lasso = (0, _canvasLasso["default"])(mouseCanvas, drawingCanvas, {
    clearBeforeDraw: true,
    isActive: options.isActive,
    path: options.path,
    onPathChange: options.onPathChange,
    translateToCanvas: function translateToCanvas(points) {
      return (0, _sigma.translateGraphToCanvas)(sigmaInst, points);
    },
    translateFromCanvas: function translateFromCanvas(x, y) {
      return (0, _sigma.translateCanvasToGraph)(sigmaInst, x, y);
    },
    onRedrawRequested: function onRedrawRequested() {
      lasso.draw();
      lasso.updateCanvas();
    }
  });
  sigmaInst.renderers[0].bind("render", lasso.draw);
  return lasso;
}

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateCanvasToGraph = translateCanvasToGraph;
exports.translateGraphToCanvas = translateGraphToCanvas;

/* global sigma */

/* eslint new-cap: */
function translateCanvasToGraph(sigmaInst, renderX, renderY) {
  var relCos = Math.cos(sigmaInst.camera.angle) / sigmaInst.camera.ratio;
  var relSin = Math.sin(sigmaInst.camera.angle) / sigmaInst.camera.ratio;
  var xOffset = (sigmaInst.renderers[0].width || 0) / 2 - sigmaInst.camera.x * relCos - sigmaInst.camera.y * relSin;
  var yOffset = (sigmaInst.renderers[0].height || 0) / 2 - sigmaInst.camera.y * relCos + sigmaInst.camera.x * relSin;
  var camX = (renderX - xOffset) / relCos;
  var camY = (renderY - yOffset) / relCos;
  var bounds = sigma.utils.getBoundaries(sigmaInst.graph, '', true);
  var minX = bounds.minX;
  var minY = bounds.minY;
  var maxX = bounds.maxX;
  var maxY = bounds.maxY;
  var w = sigmaInst.renderers[0].width;
  var h = sigmaInst.renderers[0].height;
  var scale = sigmaInst.settings('scalingMode') === 'outside' ? Math.max(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1)) : Math.min(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1));
  var margin = (sigmaInst.settings('rescaleIgnoreSize') ? 0 : (sigmaInst.settings('maxNodeSize') || bounds.sizeMax) / scale) + (sigmaInst.settings('sideMargin') || 0);
  maxX += margin;
  minX -= margin;
  maxY += margin;
  minY -= margin;
  scale = sigmaInst.settings('scalingMode') === 'outside' ? Math.max(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1)) : Math.min(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1));
  var np = -1;
  var nodeX = camX / (np ? scale : 1) + (maxX + minX) / 2;
  var nodeY = camY / (np ? scale : 1) + (maxY + minY) / 2;
  return [nodeX, nodeY];
}

function translateGraphToCanvas(sigmaInst, points) {
  var relCos = Math.cos(sigmaInst.camera.angle) / sigmaInst.camera.ratio;
  var relSin = Math.sin(sigmaInst.camera.angle) / sigmaInst.camera.ratio;
  var xOffset = (sigmaInst.renderers[0].width || 0) / 2 - sigmaInst.camera.x * relCos - sigmaInst.camera.y * relSin;
  var yOffset = (sigmaInst.renderers[0].height || 0) / 2 - sigmaInst.camera.y * relCos + sigmaInst.camera.x * relSin;
  var bounds = sigma.utils.getBoundaries(sigmaInst.graph, '', true);
  var minX = bounds.minX;
  var minY = bounds.minY;
  var maxX = bounds.maxX;
  var maxY = bounds.maxY;
  var w = sigmaInst.renderers[0].width;
  var h = sigmaInst.renderers[0].height;
  var scale = sigmaInst.settings('scalingMode') === 'outside' ? Math.max(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1)) : Math.min(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1));
  var margin = (sigmaInst.settings('rescaleIgnoreSize') ? 0 : (sigmaInst.settings('maxNodeSize') || bounds.sizeMax) / scale) + (sigmaInst.settings('sideMargin') || 0);
  maxX += margin;
  minX -= margin;
  maxY += margin;
  minY -= margin;
  scale = sigmaInst.settings('scalingMode') === 'outside' ? Math.max(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1)) : Math.min(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1));
  var np = -1;
  return points.map(function (point) {
    var camX = (point[0] - (maxX + minX) / 2) * (np ? scale : 1);
    var camY = (point[1] - (maxY + minY) / 2) * (np ? scale : 1);
    var x = camX * relCos + camY * relSin + xOffset;
    var y = camY * relCos + camX * relSin + yOffset;
    return [x, y];
  });
}

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edgeRenderer = exports.nodeRenderer = void 0;

var _drawing = __webpack_require__(172);

var _defaults = _interopRequireDefault(__webpack_require__(40));

/* eslint max-params: 0 */

/* eslint no-param-reassign: 0 */

/* eslint-disable no-restricted-properties */
var nodeRenderer = function nodeRenderer(node, ctx, settings) {
  var camera = settings("_camera");
  if (!camera) return;

  if (node.isActive !== false) {
    var nodeRatio = Math.pow(camera.ratio, settings("nodesPowRatio"));
    var proportionalNodeSize = node[settings("rendererSizeKey")] * nodeRatio;

    if (proportionalNodeSize) {
      (0, _drawing.drawShape)(ctx, node[settings("rendererXKey")], node[settings("rendererYKey")], proportionalNodeSize, node.style.shape, node.style.colour, node.isHighlighted ? _defaults["default"].THEME.COLOURS.GREEN : null);
    }
  }
};

exports.nodeRenderer = nodeRenderer;

var edgeRenderer = function edgeRenderer(edge, source, target, ctx, settings) {
  var camera = settings("_camera");
  if (!camera) return;

  if (source.isActive !== false && target.isActive !== false) {
    ctx.strokeStyle = edge.style.colour || settings("defaultEdgeColor");
    ctx.lineWidth = edge.style.width || 1;

    switch (edge.style.line) {
      case "dashed":
        ctx.setLineDash([4, 8]);
        break;

      case "dotted":
        ctx.setLineDash([1, 2]);
        break;

      case "solid":
      default:
        ctx.setLineDash([]);
    }

    ctx.beginPath();
    ctx.moveTo(source[settings("rendererXKey")], source[settings("rendererYKey")]);
    ctx.lineTo(target[settings("rendererXKey")], target[settings("rendererYKey")]);
    ctx.stroke();
    ctx.setLineDash([]);
    var nodeSize = source[settings("rendererSizeKey")];

    if (edge.style.label && nodeSize >= settings("labelThreshold")) {
      ctx.fillStyle = ctx.strokeStyle;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(edge.style.label, Math.round((source[settings("rendererXKey")] + target[settings("rendererXKey")]) / 2), Math.round((source[settings("rendererYKey")] + target[settings("rendererYKey")]) / 2));
      ctx.textAlign = "start";
      ctx.textBaseline = "alphabetic";
    }
  }
};

exports.edgeRenderer = edgeRenderer;

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _networks = __webpack_require__(77);

var _ui = __webpack_require__(27);

var _state = __webpack_require__(2);

var _NetworkControls = _interopRequireDefault(__webpack_require__(585));

var _edgeColourAttributes = _interopRequireDefault(__webpack_require__(586));

var _edgeLabelAttributes = _interopRequireDefault(__webpack_require__(587));

var _edgeLineStyleAttributes = _interopRequireDefault(__webpack_require__(588));

var _edgeLineWidthAttributes = _interopRequireDefault(__webpack_require__(589));

var _config = _interopRequireDefault(__webpack_require__(49));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var networkId = _ref.networkId;
  return {
    controls: state.networks[networkId].controls,
    edgeColourAttributes: (0, _edgeColourAttributes["default"])(state, networkId),
    edgeColourFilter: state.networks[networkId].edgeColourFilter,
    edgeLabelAttributes: (0, _edgeLabelAttributes["default"])(state, networkId),
    edgeLabelFilter: state.networks[networkId].edgeLabelFilter,
    edgeLineStyleAttributes: (0, _edgeLineStyleAttributes["default"])(state, networkId),
    edgeLineStyleFilter: state.networks[networkId].edgeLineStyleFilter,
    edgeLineWidthAttributes: (0, _edgeLineWidthAttributes["default"])(state, networkId),
    edgeLineWidthFilter: state.networks[networkId].edgeLineWidthFilter,
    isReadOnly: (0, _config["default"])(state).readOnly,
    labelSize: state.networks[networkId].labelSize,
    lasso: state.networks[networkId].lasso,
    maxLabelSize: state.networks[networkId].maxFontSize,
    maxNodeSize: state.networks[networkId].maxNodeSize,
    minLabelSize: state.networks[networkId].minFontSize,
    minNodeSize: state.networks[networkId].minNodeSize,
    networkFileId: state.networks[networkId].file,
    nodeSize: state.networks[networkId].nodeSize,
    showLabels: state.networks[networkId].showLabels,
    showNodes: state.networks[networkId].showNodes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var networkId = _ref2.networkId;
  return {
    onControlsChange: function onControlsChange(value) {
      return dispatch((0, _networks.update)(networkId, "controls", value));
    },
    onEdgeFilterChange: function onEdgeFilterChange(filter, value) {
      return dispatch((0, _networks.update)(networkId, filter, value));
    },
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(networkId));
    },
    onLabelSizeChange: function onLabelSizeChange(value) {
      return dispatch((0, _networks.update)(networkId, "labelSize", value));
    },
    onLassoChange: function onLassoChange(value) {
      return dispatch((0, _networks.setLasso)(networkId, value));
    },
    onNodeSizeChange: function onNodeSizeChange(value) {
      return dispatch((0, _networks.update)(networkId, "nodeSize", value));
    },
    onShowLabelsChange: function onShowLabelsChange(value) {
      return dispatch((0, _networks.update)(networkId, "showLabels", value));
    },
    onShowNodesChange: function onShowNodesChange(value) {
      return dispatch((0, _networks.update)(networkId, "showNodes", value));
    },
    onDownloadDOT: function onDownloadDOT(fileId) {
      return dispatch((0, _networks.downloadFile)(networkId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_NetworkControls["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ShuffleRounded = _interopRequireDefault(__webpack_require__(463));

var _Slider = _interopRequireDefault(__webpack_require__(112));

var _Menu = _interopRequireDefault(__webpack_require__(163));

var _Divider = _interopRequireDefault(__webpack_require__(96));

var _Animation = _interopRequireDefault(__webpack_require__(166));

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(164));

var _LassoButton = _interopRequireDefault(__webpack_require__(502));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(162));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(42));

var _UiFieldsList = _interopRequireDefault(__webpack_require__(111));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var NetworkControls = /*#__PURE__*/_react["default"].memo(function (props) {
  var _props$edgeColourAttr, _props$edgeLabelAttri, _props$edgeLineStyleA, _props$edgeLineWidthA;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-main-controls"
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _UiControlsButton["default"],
    icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
  }, !props.isReadOnly && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onEditPane
  }, "Edit Network"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return props.onDownloadDOT(props.networkFileId);
    }
  }, "Download as DOT"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onDownloadPNG
  }, "Download as PNG image"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onDownloadSVG
  }, "Download as SVG image")), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
    active: props.controls,
    onClick: function onClick() {
      return props.onControlsChange(!props.controls);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Animation["default"], {
    "in": props.controls
  }, /*#__PURE__*/_react["default"].createElement(_LassoButton["default"], {
    active: props.lasso,
    onClick: function onClick() {
      return props.onLassoChange(!props.lasso);
    }
  }), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
    onClick: function onClick() {
      return props.onShuffleNodes();
    },
    title: "Shuffle nodes"
  }, /*#__PURE__*/_react["default"].createElement(_ShuffleRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    className: "mr-network-styles-menu",
    title: "Nodes & Labels"
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Node Size: ", /*#__PURE__*/_react["default"].createElement("strong", null, props.nodeSize), " pixels"), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: props.maxNodeSize,
    min: props.minNodeSize,
    onChange: function onChange(event, value) {
      return props.onNodeSizeChange(value);
    },
    value: props.nodeSize
  }), /*#__PURE__*/_react["default"].createElement("label", null, "Label Size: ", /*#__PURE__*/_react["default"].createElement("strong", null, props.labelSize), " pixels"), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: props.maxLabelSize,
    min: props.minLabelSize,
    onChange: function onChange(event, value) {
      return props.onLabelSizeChange(value);
    },
    value: props.labelSize
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Show Nodes",
    onChange: props.onShowNodesChange,
    value: props.showNodes
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Show Labels",
    onChange: props.onShowLabelsChange,
    value: props.showLabels
  })), ((_props$edgeColourAttr = props.edgeColourAttributes) === null || _props$edgeColourAttr === void 0 ? void 0 : _props$edgeColourAttr.length) > 0 && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    fixedSize: true,
    hideOnClick: true,
    onClear: props.edgeColourFilter && function () {
      return props.onEdgeFilterChange("edgeColourFilter");
    },
    title: "Edge Colours"
  }, /*#__PURE__*/_react["default"].createElement(_UiFieldsList["default"], {
    columns: props.edgeColourAttributes,
    onChange: function onChange(value) {
      return props.onEdgeFilterChange("edgeColourFilter", value);
    },
    value: props.edgeColourFilter
  })), ((_props$edgeLabelAttri = props.edgeLabelAttributes) === null || _props$edgeLabelAttri === void 0 ? void 0 : _props$edgeLabelAttri.length) > 0 && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    fixedSize: true,
    hideOnClick: true,
    onClear: props.edgeLabelFilter && function () {
      return props.onEdgeFilterChange("edgeLabelFilter");
    },
    title: "Edge Labels"
  }, /*#__PURE__*/_react["default"].createElement(_UiFieldsList["default"], {
    columns: props.edgeLabelAttributes,
    onChange: function onChange(value) {
      return props.onEdgeFilterChange("edgeLabelFilter", value);
    },
    value: props.edgeLabelFilter
  })), ((_props$edgeLineStyleA = props.edgeLineStyleAttributes) === null || _props$edgeLineStyleA === void 0 ? void 0 : _props$edgeLineStyleA.length) > 0 && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    fixedSize: true,
    hideOnClick: true,
    onClear: props.edgeLineStyleFilter && function () {
      return props.onEdgeFilterChange("edgeLineStyleFilter");
    },
    title: "Edge Style"
  }, /*#__PURE__*/_react["default"].createElement(_UiFieldsList["default"], {
    columns: props.edgeLineStyleAttributes,
    onChange: function onChange(value) {
      return props.onEdgeFilterChange("edgeLineStyleFilter", value);
    },
    value: props.edgeLineStyleFilter
  })), ((_props$edgeLineWidthA = props.edgeLineWidthAttributes) === null || _props$edgeLineWidthA === void 0 ? void 0 : _props$edgeLineWidthA.length) > 0 && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    fixedSize: true,
    hideOnClick: true,
    onClear: props.edgeLineWidthFilter && function () {
      return props.onEdgeFilterChange("edgeLineWidthFilter");
    },
    title: "Edge Width"
  }, /*#__PURE__*/_react["default"].createElement(_UiFieldsList["default"], {
    columns: props.edgeLineWidthAttributes,
    onChange: function onChange(value) {
      return props.onEdgeFilterChange("edgeLineWidthFilter", value);
    },
    value: props.edgeLineWidthFilter
  }))));
});

NetworkControls.displayName = "NetworkControls";
NetworkControls.propTypes = {
  controls: _propTypes["default"].bool.isRequired,
  edgeColourAttributes: _propTypes["default"].array.isRequired,
  edgeColourFilter: _propTypes["default"].string,
  edgeLabelAttributes: _propTypes["default"].array.isRequired,
  edgeLabelFilter: _propTypes["default"].string,
  edgeLineStyleAttributes: _propTypes["default"].array.isRequired,
  edgeLineStyleFilter: _propTypes["default"].string,
  edgeLineWidthAttributes: _propTypes["default"].array.isRequired,
  edgeLineWidthFilter: _propTypes["default"].string,
  isReadOnly: _propTypes["default"].bool.isRequired,
  labelSize: _propTypes["default"].number.isRequired,
  lasso: _propTypes["default"].bool.isRequired,
  maxLabelSize: _propTypes["default"].number.isRequired,
  maxNodeSize: _propTypes["default"].number.isRequired,
  minLabelSize: _propTypes["default"].number.isRequired,
  minNodeSize: _propTypes["default"].number.isRequired,
  networkId: _propTypes["default"].string.isRequired,
  nodeSize: _propTypes["default"].number.isRequired,
  onControlsChange: _propTypes["default"].func.isRequired,
  onEdgeFilterChange: _propTypes["default"].func.isRequired,
  onLabelSizeChange: _propTypes["default"].func.isRequired,
  onLassoChange: _propTypes["default"].func.isRequired,
  onNodeSizeChange: _propTypes["default"].func.isRequired,
  onShowLabelsChange: _propTypes["default"].func.isRequired,
  onShowNodesChange: _propTypes["default"].func.isRequired,
  onShuffleNodes: _propTypes["default"].func.isRequired,
  showLabels: _propTypes["default"].bool.isRequired,
  showNodes: _propTypes["default"].bool.isRequired
};
var _default = NetworkControls;
exports["default"] = _default;

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _edgeAttributes = _interopRequireDefault(__webpack_require__(504));

var colourPostfix = /^(.*)__(colour|color)$/i;
var edgeColourAttributesSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _edgeAttributes["default"])(state, networkId);
}, function (fields) {
  return fields.filter(function (attribute) {
    return colourPostfix.test(attribute.name);
  });
});
var _default = edgeColourAttributesSelector;
exports["default"] = _default;

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _edgeAttributes = _interopRequireWildcard(__webpack_require__(504));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var edgeLabelAttributesSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _edgeAttributes["default"])(state, networkId);
}, function (fields) {
  return fields.filter(function (attribute) {
    return !_edgeAttributes.anyPostfix.test(attribute.name);
  });
});
var _default = edgeLabelAttributesSelector;
exports["default"] = _default;

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _edgeAttributes = _interopRequireDefault(__webpack_require__(504));

var lineStylePostfix = /^(.*)__(linestyle)$/i;
var edgeLineStyleAttributesSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _edgeAttributes["default"])(state, networkId);
}, function (fields) {
  return fields.filter(function (attribute) {
    return lineStylePostfix.test(attribute.name);
  });
});
var _default = edgeLineStyleAttributesSelector;
exports["default"] = _default;

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _edgeAttributes = _interopRequireDefault(__webpack_require__(504));

var lineWidthPostfix = /^(.*)__(linewidth)$/i;
var edgeLineWidthAttributesSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _edgeAttributes["default"])(state, networkId);
}, function (fields) {
  return fields.filter(function (attribute) {
    return lineWidthPostfix.test(attribute.name);
  });
});
var _default = edgeLineWidthAttributesSelector;
exports["default"] = _default;

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _state = __webpack_require__(2);

var _selectedIdsSet = _interopRequireDefault(__webpack_require__(174));

var _filteredIds = _interopRequireDefault(__webpack_require__(58));

var _baseGraph = _interopRequireDefault(__webpack_require__(173));

var _edgeStyles = _interopRequireDefault(__webpack_require__(591));

var _layout = _interopRequireDefault(__webpack_require__(185));

var _rowsByNodeId = _interopRequireDefault(__webpack_require__(197));

var _rowStyles = _interopRequireDefault(__webpack_require__(510));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var graphSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _baseGraph["default"])(state, networkId);
}, function (state, networkId) {
  return (0, _layout["default"])(state, networkId);
}, function (state) {
  return (0, _rowStyles["default"])(state);
}, function (state, networkId) {
  return (0, _edgeStyles["default"])(state, networkId);
}, function (state) {
  return (0, _filteredIds["default"])(state);
}, function (state, networkId) {
  return (0, _selectedIdsSet["default"])(state, networkId);
}, function (state, networkId) {
  return (0, _rowsByNodeId["default"])(state, networkId);
}, function (state, networkId) {
  return Math.pow(2, state.networks[networkId].scale);
}, function (parsedData, layout, _ref, edgeStyles, filteredIds, highlightedIds, rowsByNodeId, scale) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
      rowStyles = _ref2[0];

  var step = 2 * Math.PI / parsedData.nodes.length;
  var nodes = [];

  var _iterator = _createForOfIteratorHelper(parsedData.nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      var i = parsedData.nodes.indexOf(node);
      var nodeRows = rowsByNodeId.get(node.id);

      if (nodeRows) {
        var nodeStyle = rowStyles[nodeRows[0][0]];
        var isActive = !filteredIds || nodeRows.some(function (row) {
          return filteredIds.has(row[0]);
        });
        nodes.push({
          id: node.id,
          isActive: isActive,
          isHighlighted: highlightedIds.has(node.id),
          label: isActive ? nodeStyle.label : "",
          size: 1,
          style: nodeStyle,
          weight: 1,
          x: (layout ? layout[node.id].x : Math.cos(i * step)) * scale,
          y: (layout ? layout[node.id].y : Math.sin(i * step)) * scale
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var edges = [];

  var _iterator2 = _createForOfIteratorHelper(parsedData.edges),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var edge = _step2.value;
      var fromNodeRows = rowsByNodeId.get(edge.from);
      var toNodeRows = rowsByNodeId.get(edge.to);

      if (fromNodeRows && toNodeRows) {
        edges.push({
          id: edge.id,
          source: edge.from,
          target: edge.to,
          style: edgeStyles[edge.id]
        });
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return {
    nodes: nodes,
    edges: edges
  };
});
var _default = graphSelector;
exports["default"] = _default;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _baseGraph = _interopRequireDefault(__webpack_require__(173));

var _defaults = _interopRequireDefault(__webpack_require__(40));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var edgeStylesSelector = (0, _state.createKeyedStateSelector)(function (state, networkId) {
  return (0, _baseGraph["default"])(state, networkId);
}, // edgeLabelAttributesSelector,
function (state, networkId) {
  return state.networks[networkId].edgeColourFilter;
}, function (state, networkId) {
  return state.networks[networkId].edgeLabelFilter;
}, function (state, networkId) {
  return state.networks[networkId].edgeLineStyleFilter;
}, function (state, networkId) {
  return state.networks[networkId].edgeLineWidthFilter;
}, function (graph, // edgeLabelFilters,
edgeColourFilter, edgeLabelFilter, edgeLineStyleFilter, edgeLineWidthFilter) {
  var edgeStyles = {};

  var _iterator = _createForOfIteratorHelper(graph.edges),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var edge = _step.value;
      var style = {};
      style.colour = edge[edgeColourFilter] || _defaults["default"].COLOUR_DARK;
      style.label = edge[edgeLabelFilter] || undefined;
      style.line = edge[edgeLineStyleFilter] || "solid";
      style.width = edge[edgeLineWidthFilter] || 1; // const title = [ `From: ${edge.from} To: (${edge.to})` ];
      // for (const { label, field } of edgeLabelFilters) {
      //   title.push(`${label}: ${edge[field]}`);
      // }
      // style.title = title.join('. ');

      edgeStyles[edge.id] = style;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return edgeStyles;
});
var _default = edgeStylesSelector;
exports["default"] = _default;

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(__webpack_require__(185));

var hasLayoutSelector = function hasLayoutSelector(state, networkId) {
  return (0, _layout["default"])(state, networkId) !== null;
};

var _default = hasLayoutSelector;
exports["default"] = _default;

/***/ })

}]);