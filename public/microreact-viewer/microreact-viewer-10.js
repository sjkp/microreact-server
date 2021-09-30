(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[10],{

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ui = __webpack_require__(25);

var _state = __webpack_require__(3);

var _PanePlaceholder = _interopRequireDefault(__webpack_require__(488));

var _TreePane = _interopRequireDefault(__webpack_require__(625));

var _isValidTree = _interopRequireDefault(__webpack_require__(195));

var _treeFile = _interopRequireDefault(__webpack_require__(185));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var treeId = _ref.treeId;
  return {
    componentName: "Tree",
    file: (0, _treeFile["default"])(state, treeId),
    isEmpty: !(0, _isValidTree["default"])(state, treeId),
    PaneComponent: _TreePane["default"]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var treeId = _ref2.treeId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(treeId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_PanePlaceholder["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _layoutModel = _interopRequireDefault(__webpack_require__(49));

var paneWidthSelector = function paneWidthSelector(state, paneId) {
  var model = (0, _layoutModel["default"])(state);
  var node = model.getNodeById(paneId);
  return node._rect.width;
};

var paneHeightSelector = function paneHeightSelector(state, paneId) {
  var model = (0, _layoutModel["default"])(state);
  var node = model.getNodeById(paneId);
  return node._rect.height;
};

var paneSizeSelector = (0, _state.createKeyedStateSelector)(function (state, paneId) {
  return paneWidthSelector(state, paneId);
}, function (state, paneId) {
  return paneHeightSelector(state, paneId);
}, function (width, height) {
  return {
    width: width,
    height: height
  };
});
var _default = paneSizeSelector;
exports["default"] = _default;

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(38));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(489);

var _propTypes2 = __webpack_require__(14);

var _PaneIcon = _interopRequireDefault(__webpack_require__(48));

var _FileLoader = _interopRequireDefault(__webpack_require__(161));

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

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 496:
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

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(47));

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

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = canvasLasso;

var _geometry = __webpack_require__(99);

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
    if (Math.abs(offsetX - event.offsetX) < 5 && Math.abs(offsetY - event.offsetY) < 5) {
      handleOnClick(event);
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

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(11);

var _rows = _interopRequireDefault(__webpack_require__(17));

var _rowsWithStyleFields = _interopRequireDefault(__webpack_require__(101));

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

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _labelColumn = _interopRequireDefault(__webpack_require__(192));

var _rows = _interopRequireDefault(__webpack_require__(17));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var labelsSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state, treeId) {
  return (0, _labelColumn["default"])(state, treeId);
}, function (rows, labelColumn) {
  var labels = [];

  if (labelColumn) {
    var _iterator = _createForOfIteratorHelper(rows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (row[labelColumn.name]) {
          var _row$labelColumn$name;

          labels.push((_row$labelColumn$name = row[labelColumn.name]) === null || _row$labelColumn$name === void 0 ? void 0 : _row$labelColumn$name.toString());
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return labels;
});
var _default = labelsSelector;
exports["default"] = _default;

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _filters = __webpack_require__(45);

var _trees = __webpack_require__(71);

var _selectedIdsList = _interopRequireDefault(__webpack_require__(158));

var _phylocanvasProps = _interopRequireDefault(__webpack_require__(626));

var _TreePane = _interopRequireDefault(__webpack_require__(629));

var _ui = __webpack_require__(25);

var mapStateToProps = function mapStateToProps(state, _ref) {
  var treeId = _ref.treeId;
  var treeState = state.trees[treeId];
  return {
    controls: treeState.controls,
    isLassoActive: treeState.lasso,
    lassoPath: treeState.path || null,
    phylocanvasProps: (0, _phylocanvasProps["default"])(state, treeId),
    selectedIds: (0, _selectedIdsList["default"])(state),
    treeType: state.trees[treeId].type
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var treeId = _ref2.treeId;
  return {
    onAddHistoryEntry: function onAddHistoryEntry(label) {
      return dispatch((0, _ui.addHistoryEntry)("Tree", label));
    },
    onAlignLabelsChange: function onAlignLabelsChange(value) {
      return dispatch((0, _trees.update)(treeId, "alignLabels", value));
    },
    onFilterChange: function onFilterChange(ids, path) {
      return dispatch((0, _trees.setTreeFilter)(treeId, ids, path));
    },
    onPhylocanvasStateChange: function onPhylocanvasStateChange(updater, event) {
      return dispatch((0, _trees.setPhylocanvasProps)(treeId, updater, event));
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    },
    onShowLeafLabelsChange: function onShowLeafLabelsChange(value) {
      return dispatch((0, _trees.update)(treeId, "showLeafLabels", value));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_TreePane["default"]);

exports["default"] = _default;

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _state = __webpack_require__(3);

var _filteredIds = _interopRequireDefault(__webpack_require__(54));

var _labelsDataColumn = _interopRequireDefault(__webpack_require__(107));

var _labels = _interopRequireDefault(__webpack_require__(520));

var _metadataValues = _interopRequireDefault(__webpack_require__(627));

var _paneSize = _interopRequireDefault(__webpack_require__(487));

var _rowsByLabel = _interopRequireDefault(__webpack_require__(179));

var _rowStyles = _interopRequireDefault(__webpack_require__(507));

var _selectedIdsList = _interopRequireDefault(__webpack_require__(158));

var _config = _interopRequireDefault(__webpack_require__(50));

var _metadataBlocks = _interopRequireDefault(__webpack_require__(628));

var _treeFile = _interopRequireDefault(__webpack_require__(185));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var noShape = false;
var nodeStylesSelector = (0, _state.createKeyedStateSelector)(function (state, treeId) {
  return (0, _labels["default"])(state, treeId);
}, function (state) {
  return (0, _rowStyles["default"])(state);
}, function (state, treeId) {
  return (0, _rowsByLabel["default"])(state, treeId);
}, function (state) {
  return (0, _filteredIds["default"])(state);
}, function (labels, _ref, rowsByLabel, filteredIds) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
      rowStyles = _ref2[0];

  var nodeStyles = {};

  var _iterator = _createForOfIteratorHelper(labels),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var label = _step.value;
      var labelRows = rowsByLabel.get(label);
      var rowStyle = rowStyles[labelRows[0][0]];
      var isActive = !filteredIds || labelRows.some(function (row) {
        return filteredIds.has(row[0]);
      });
      nodeStyles[label] = {
        fillColour: rowStyle.colour,
        strokeColour: rowStyle.colour,
        shape: isActive ? rowStyle.shape : noShape,
        label: rowStyle.label
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return nodeStyles;
});
var phylocanvasPropsSelector = (0, _state.createKeyedStateSelector)(function (_, treeId) {
  return treeId;
}, function (state, treeId) {
  var _treeFileSelector;

  return (_treeFileSelector = (0, _treeFile["default"])(state, treeId)) === null || _treeFileSelector === void 0 ? void 0 : _treeFileSelector._content;
}, function (state, treeId) {
  return state.trees[treeId];
}, function (state, treeId) {
  return nodeStylesSelector(state, treeId);
}, function (state, treeId) {
  return (0, _paneSize["default"])(state, treeId);
}, function (state, treeId) {
  return (0, _metadataBlocks["default"])(state, treeId);
}, function (state, treeId) {
  return (0, _metadataValues["default"])(state, treeId);
}, function (state) {
  return (0, _selectedIdsList["default"])(state);
}, function (state) {
  return (0, _labelsDataColumn["default"])(state);
}, function (state) {
  return (0, _config["default"])(state);
}, function (treeId, treeFileContent, phylocanvasProps, styles, size, metadataBlocks, metadataValues, selectedIds, labelsDataColumn, defaults) {
  var originalSource = phylocanvasProps === null || phylocanvasProps === void 0 ? void 0 : phylocanvasProps.source;

  while ((_originalSource = originalSource) !== null && _originalSource !== void 0 && _originalSource.original) {
    var _originalSource;

    originalSource = originalSource.original;
  }

  var source = originalSource === treeFileContent ? phylocanvasProps === null || phylocanvasProps === void 0 ? void 0 : phylocanvasProps.source : treeFileContent;
  return _objectSpread(_objectSpread({}, phylocanvasProps), {}, {
    fontFamily: defaults.fontFamily,
    id: treeId,
    interactive: true,
    labelField: labelsDataColumn ? labelsDataColumn.label : null,
    blocks: metadataBlocks,
    metadata: metadataValues,
    padding: 32,
    selectedIds: selectedIds,
    size: size,
    source: source,
    strokeColour: "#222",
    styles: styles,
    shapeBorderAlpha: 0.56
  });
});
var _default = phylocanvasPropsSelector;
exports["default"] = _default;

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _constants = __webpack_require__(12);

var _state = __webpack_require__(3);

var _labels = _interopRequireDefault(__webpack_require__(520));

var _rowsByLabel = _interopRequireDefault(__webpack_require__(179));

var _treeState = _interopRequireDefault(__webpack_require__(55));

var _colourMapForField = _interopRequireDefault(__webpack_require__(95));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var colourMapsByFieldSelector = (0, _state.createCombinedStateSelector)(function (state, treeId) {
  return (0, _treeState["default"])(state, treeId).blocks || _constants.emptyArray;
}, _colourMapForField["default"], function (valueToColourMaps, keys) {
  var colourMapsByField = {};

  for (var index = 0; index < keys.length; index++) {
    colourMapsByField[keys[index]] = valueToColourMaps[index];
  }

  return colourMapsByField;
});
var metadataValuesSelector = (0, _reselect.createSelector)(function (state, treeId) {
  return (0, _labels["default"])(state, treeId);
}, function (state, treeId) {
  return (0, _rowsByLabel["default"])(state, treeId);
}, function (state, treeId) {
  return colourMapsByFieldSelector(state, treeId);
}, function (state, treeId) {
  return (0, _dataColumnsByFieldMap["default"])(state, treeId);
}, function (labels, rowsByLabel, colourMapsByField, dataColumnsByFieldMap) {
  var metadata = {};

  var _iterator = _createForOfIteratorHelper(labels),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var label = _step.value;
      metadata[label] = {};
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(labels),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _label = _step2.value;
      var labelRows = rowsByLabel.get(_label);

      if (labelRows && labelRows.length) {
        var row = labelRows[0];

        for (var _i = 0, _Object$keys = Object.keys(colourMapsByField); _i < _Object$keys.length; _i++) {
          var colourFieldName = _Object$keys[_i];
          var dataColumn = dataColumnsByFieldMap.get(colourFieldName);
          var dataColumnLabel = dataColumn.label || dataColumn.name;
          var colourMap = colourMapsByField[colourFieldName];
          metadata[_label][dataColumnLabel] = {
            colour: colourMap.get && colourMap.get(row[colourFieldName]) || "transparent",
            label: row[colourFieldName]
          };
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return metadata;
});
var _default = metadataValuesSelector;
exports["default"] = _default;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _constants = __webpack_require__(12);

var _treeState = _interopRequireDefault(__webpack_require__(55));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var metadataBlocksSelector = (0, _reselect.createSelector)(function (state, treeId) {
  return (0, _treeState["default"])(state, treeId).blocks || _constants.emptyArray;
}, function (state, treeId) {
  return (0, _dataColumnsByFieldMap["default"])(state, treeId);
}, function (blocks, dataColumnsByFieldMap) {
  var labels = [];

  var _iterator = _createForOfIteratorHelper(blocks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      var dataColumn = dataColumnsByFieldMap.get(field);
      labels.push(dataColumn.label || dataColumn.name);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return labels;
});
var _default = metadataBlocksSelector;
exports["default"] = _default;

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _Menu = _interopRequireDefault(__webpack_require__(206));

var _phylocanvas = _interopRequireDefault(__webpack_require__(630));

var _downloads = __webpack_require__(68);

var _propTypes2 = __webpack_require__(14);

__webpack_require__(632);

var _TreeControls = _interopRequireDefault(__webpack_require__(633));

var _TreeZoomControls = _interopRequireDefault(__webpack_require__(643));

var _TreeContextMenu = _interopRequireDefault(__webpack_require__(644));

var _browser = __webpack_require__(20);

var _events = __webpack_require__(103);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// import { triggerEvent } from "../utils/browser";
// import UiContextMenu from "./UiContextMenu.react";
var TreePane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TreePane, _React$PureComponent);

  var _super = _createSuper(TreePane);

  function TreePane() {
    var _this;

    (0, _classCallCheck2["default"])(this, TreePane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "canvasRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "lassoRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scalebarRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleContextMenu", function (event) {
      event.preventDefault(); // this.setState({
      //   contextMenuPosition: {
      //     left: event.clientX,
      //     top: event.clientY,
      //   },
      // });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMenuClose", function () {
      _this.setState({
        contextMenuPosition: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTreeTypeChange", function (type) {
      _this.tree.setTreeType(type);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDownloadNewick", function () {
      (0, _downloads.downloadDataUrl)(_this.tree.exportNewick(), "tree.nwk", "plain/text");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDownloadPNG", function () {
      (0, _downloads.downloadDataUrl)(_this.tree.exportPNG(), "tree.png", "image/png");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDownloadSVG", function () {
      (0, _downloads.downloadDataUrl)(_this.tree.exportSVG(), "tree.svg", "image/svg+xml");
    });
    return _this;
  }

  (0, _createClass2["default"])(TreePane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var PhylocanvasGL = (0, _phylocanvas["default"])(this);
      this.tree = new PhylocanvasGL(this.canvasRef.current, this.props.phylocanvasProps);
      this.tree.renderLasso();
      this.tree.setProps = this.props.onPhylocanvasStateChange;

      if (this.props.phylocanvasProps.scale && !this.props.phylocanvasProps.transform) {
        this.tree.view.style.visibility = "hidden";
        (0, _browser.nextTick)(function () {
          console.debug("Convert state");

          _this2.tree.convertState();

          _this2.tree.view.style.visibility = "";
        });
      }

      this.beforeScreenshotUnsubscribe = (0, _events.subscribe)("before-screenshot", function () {
        _this2.tree.deck.setProps({
          glOptions: {
            preserveDrawingBuffer: true
          }
        });

        _this2.tree.deck.redraw(true);
      });
      this.afterScreenshotUnsubscribe = (0, _events.subscribe)("after-screenshot", function () {
        _this2.tree.deck.setProps({
          glOptions: {
            preserveDrawingBuffer: undefined
          }
        });

        _this2.tree.deck.redraw(true);
      }); // window[`mr-${this.props.treeId}`] = () => this.tree;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isLassoActive !== this.props.isLassoActive) {
        this.tree.lasso.setActive(this.props.isLassoActive);
      }

      if (prevProps.lassoPath !== this.props.lassoPath) {
        this.tree.lasso.setPath(this.props.lassoPath);
      }

      if (prevProps.phylocanvasProps !== this.props.phylocanvasProps) {
        this.tree.props = this.props.phylocanvasProps;
      }

      this.tree.render();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$beforeScreensho, _this$afterScreenshot;

      if (this.tree) {
        if (this.tree.lasso) {
          this.tree.lasso.destroy();
        }

        this.tree.destroy();
        this.tree = undefined;
        delete this.tree;
      }

      (_this$beforeScreensho = this.beforeScreenshotUnsubscribe) === null || _this$beforeScreensho === void 0 ? void 0 : _this$beforeScreensho.call(this);
      (_this$afterScreenshot = this.afterScreenshotUnsubscribe) === null || _this$afterScreenshot === void 0 ? void 0 : _this$afterScreenshot.call(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$contextMe,
          _this3 = this;

      var size = this.props.phylocanvasProps.size;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-tree",
        ref: this.canvasRef,
        onContextMenu: this.handleContextMenu
      }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
        open: !!this.state.contextMenuPosition,
        onClose: this.handleMenuClose,
        anchorReference: "anchorPosition",
        anchorPosition: (_this$state$contextMe = this.state.contextMenuPosition) !== null && _this$state$contextMe !== void 0 ? _this$state$contextMe : undefined
      }, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.handleMenuClose
      }, /*#__PURE__*/_react["default"].createElement(_TreeContextMenu["default"], {
        onAlignLabelsChange: this.props.onAlignLabelsChange,
        onShowLeafLabelsChange: this.props.onShowLeafLabelsChange,
        phylocanvasProps: this.props.phylocanvasProps,
        tree: this.tree,
        menuPosition: this.state.contextMenuPosition,
        node: this.state.contextMenuNode
      }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("canvas", {
        className: "mr-lasso-canvas",
        height: size.height,
        width: size.width,
        ref: this.lassoRef
      })), /*#__PURE__*/_react["default"].createElement(_TreeControls["default"] // className={this.props.controls ? "visible" : ""}
      , {
        onTypeChange: this.handleTreeTypeChange,
        onDownloadNewick: this.handleDownloadNewick,
        onDownloadPNG: this.handleDownloadPNG,
        onDownloadSVG: this.handleDownloadSVG,
        treeId: this.props.treeId
      }), /*#__PURE__*/_react["default"].createElement(_TreeZoomControls["default"], {
        className: this.props.controls ? "visible" : "",
        onBranchZoomIn: function onBranchZoomIn() {
          return _this3.tree.setBranchZoom(_this3.tree.getBranchZoom() + 0.1);
        },
        onBranchZoomOut: function onBranchZoomOut() {
          return _this3.tree.setBranchZoom(_this3.tree.getBranchZoom() - 0.1);
        },
        onStepZoomIn: function onStepZoomIn() {
          return _this3.tree.setStepZoom(_this3.tree.getStepZoom() + 0.1);
        },
        onStepZoomOut: function onStepZoomOut() {
          return _this3.tree.setStepZoom(_this3.tree.getStepZoom() - 0.1);
        },
        onZoomIn: function onZoomIn() {
          return _this3.tree.zoomIn();
        },
        onZoomOut: function onZoomOut() {
          return _this3.tree.zoomOut();
        },
        treeType: this.props.treeType
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-tree-scalebar",
        ref: this.scalebarRef
      }));
    }
  }]);
  return TreePane;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(TreePane, "displayName", "TreePane");
(0, _defineProperty2["default"])(TreePane, "propTypes", {
  controls: _propTypes["default"].bool.isRequired,
  // height: PropTypes.number.isRequired,
  isLassoActive: _propTypes["default"].bool.isRequired,
  lassoPath: _propTypes["default"].arrayOf(_propTypes2.GeometricPoint),
  onAddHistoryEntry: _propTypes["default"].func.isRequired,
  onAlignLabelsChange: _propTypes["default"].func.isRequired,
  onFilterChange: _propTypes["default"].func.isRequired,
  // onPhylocanvasInitialise: PropTypes.func.isRequired,
  onPhylocanvasStateChange: _propTypes["default"].func.isRequired,
  onSelectRows: _propTypes["default"].func.isRequired,
  onShowLeafLabelsChange: _propTypes["default"].func.isRequired,
  phylocanvasProps: _propTypes["default"].object,
  selectedIds: _propTypes["default"].array.isRequired,
  treeId: _propTypes["default"].string.isRequired,
  treeType: _propTypes2.TreeType.isRequired // width: PropTypes.number.isRequired,

});
var _default = TreePane;
exports["default"] = _default;

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _get2 = _interopRequireDefault(__webpack_require__(113));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _phylocanvas = _interopRequireWildcard(__webpack_require__(94));

var _canvasLasso = _interopRequireDefault(__webpack_require__(506));

var _convertState = _interopRequireDefault(__webpack_require__(631));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function zoomToScale(zoom) {
  return Math.pow(2, zoom); // eslint-disable-line no-restricted-properties
}

var displayModes = {
  Visible: "",
  Hidden: "none"
};
var treeTypeLabels = Object.entries(_phylocanvas.TreeTypes).reduce(function (prev, _ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      label = _ref2[0],
      value = _ref2[1];

  prev[value] = label;
  return prev;
}, {});

function _default(treePane) {
  return /*#__PURE__*/function (_PhylocanvasGL) {
    (0, _inherits2["default"])(Phylocanvas, _PhylocanvasGL);

    var _super = _createSuper(Phylocanvas);

    function Phylocanvas(view, props) {
      var _this;

      (0, _classCallCheck2["default"])(this, Phylocanvas);
      _this = _super.call(this, view, props);
      var tree = (0, _assertThisInitialized2["default"])(_this);
      tree.lasso = (0, _canvasLasso["default"])(tree.view, treePane.lassoRef.current, {
        isActive: treePane.props.isLassoActive,
        clearBeforeDraw: true,
        path: treePane.props.lassoPath,
        onPathChange: function onPathChange(path) {
          if (path === null && treePane.props.selectedIds.length) {
            return;
          }

          var ids = null;

          if (path) {
            ids = [];
            var nodes = tree.getNodes();

            var _iterator = _createForOfIteratorHelper(nodes.leaves),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var leaf = _step.value;

                if (tree.lasso.isPointInside(leaf, path)) {
                  ids.push(leaf.id);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          treePane.props.onFilterChange(ids, path);
        },
        onRedrawRequested: function onRedrawRequested() {
          tree.render();
        },
        translateToCanvas: function translateToCanvas(points) {
          var scale = zoomToScale(tree.getZoom());
          return points.map(function (x) {
            return tree.projectPoint(x, scale);
          });
        },
        translateFromCanvas: function translateFromCanvas(x, y) {
          return tree.unprojectPoint([x, y]);
        }
      });
      tree.deck.setProps({
        // _onMetrics: (metrics) => {
        //   if (treePane?.framerateRef?.current) {
        //     treePane.framerateRef.current.innerHTML = `${metrics.fps.toFixed(0)} fps`;
        //   }
        // },
        getCursor: function getCursor(info) {
          if (treePane.props.isLassoActive && !Array.isArray(tree.lasso.path)) {
            return null;
          } else {
            return info.isDragging ? "grabbing" : "grab";
          }
        }
      });
      tree.convertState = _convertState["default"].bind(tree, tree);
      return _this;
    }

    (0, _createClass2["default"])(Phylocanvas, [{
      key: "collapseNode",
      value: function collapseNode(node) {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Phylocanvas.prototype), "collapseNode", this).call(this, node);
        treePane.props.onAddHistoryEntry("Collapse subtree");
      }
    }, {
      key: "handleClick",
      value: function handleClick(info, event) {
        var tree = this;

        if (event.rightButton) {
          var node = tree.pickNodeFromLayer(info);
          event.preventDefault();
          treePane.setState({
            contextMenuPosition: {
              left: event.center.x,
              top: event.center.y
            },
            contextMenuNode: node
          });
        } else {
          (0, _get2["default"])((0, _getPrototypeOf2["default"])(Phylocanvas.prototype), "handleClick", this).call(this, info, event);
        }
      }
    }, {
      key: "getLeafNodes",
      value: function getLeafNodes(nodeOrId) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$includeHidden = _ref3.includeHidden,
            includeHidden = _ref3$includeHidden === void 0 ? false : _ref3$includeHidden;

        var nodes = this.getGraphWithStyles();
        var subtreeNode = nodeOrId ? this.findNodeById(nodeOrId) : nodes.root;
        var leafNodes = [];

        for (var i = subtreeNode.preIndex; i < subtreeNode.preIndex + subtreeNode.totalNodes; i++) {
          var node = nodes.preorderTraversal[i];

          if (node.isLeaf && (includeHidden || !node.isHidden)) {
            leafNodes.push(node);
          }
        }

        return leafNodes;
      }
    }, {
      key: "render",
      value: function render() {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Phylocanvas.prototype), "render", this).call(this);
        var tree = this;
        tree.renderLasso();
        tree.renderScalebar();
      }
    }, {
      key: "renderLasso",
      value: function renderLasso() {
        var tree = this;

        if (tree.lasso && tree.lasso.isActive) {
          treePane.lassoRef.current.style.display = displayModes.Visible; // tree.layers.lasso.ctx.save();
          // tree.layers.lasso.ctx.scale(tree.pixelRatio, tree.pixelRatio);

          tree.lasso.draw(); // tree.layers.lasso.ctx.restore();

          tree.lasso.updateCanvas();
        } else {
          treePane.lassoRef.current.style.display = displayModes.Hidden;
        }
      }
    }, {
      key: "renderScalebar",
      value: function renderScalebar() {
        var _treePane$scalebarRef;

        var tree = this;

        if (treePane !== null && treePane !== void 0 && (_treePane$scalebarRef = treePane.scalebarRef) !== null && _treePane$scalebarRef !== void 0 && _treePane$scalebarRef.current) {
          var scaleValue = 80 / tree.getBranchScale() / tree.getScale();
          var minDigitis = parseInt(Math.abs(Math.log(scaleValue) / Math.log(10)), 10);
          treePane.scalebarRef.current.innerHTML = scaleValue.toFixed(minDigitis + 2);
        }
      }
    }, {
      key: "rerootNode",
      value: function rerootNode(node) {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Phylocanvas.prototype), "rerootNode", this).call(this, node);
        treePane.props.onAddHistoryEntry("Re-root tree");
      }
    }, {
      key: "setRoot",
      value: function setRoot(nodeOrId) {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Phylocanvas.prototype), "setRoot", this).call(this, nodeOrId, {
          ids: this.getLeafNodes(nodeOrId).map(function (x) {
            return x.id;
          })
        });
        treePane.props.onAddHistoryEntry("View subtree");
      }
    }, {
      key: "selectNode",
      value: function selectNode(node, isAppend) {
        var tree = this;

        if (node && node.isLeaf) {
          treePane.props.onSelectRows([node.id], isAppend);
        } else {
          // prevent node selection when a lasso path is being drawn
          if (treePane.props.lassoPath) {
            if (treePane.props.selectedIds.length) {
              treePane.props.onSelectRows();
            }

            return;
          }

          if (node && !node.isHidden) {
            var nodes = tree.getLeafNodes(node, {
              includeHidden: true
            });
            treePane.props.onFilterChange(nodes.map(function (x) {
              return x.id;
            }));
          } else if (!isAppend) {
            if (treePane.props.selectedIds.length) {
              treePane.props.onSelectRows();
            } else {
              treePane.props.onFilterChange(null);
            }
          }
        }
      } // eslint-disable-next-line class-methods-use-this

    }, {
      key: "selectLeafNodes",
      value: function selectLeafNodes(ids, isAppend) {
        // prevent node selection when a lasso path is being drawn
        if (ids && Array.isArray(ids)) {
          treePane.props.onSelectRows(ids, isAppend);
        }
      }
    }, {
      key: "setTreeType",
      value: function setTreeType(type) {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Phylocanvas.prototype), "setTreeType", this).call(this, type);
        treePane.props.onAddHistoryEntry("Set tree type to ".concat(treeTypeLabels[type]));
      }
    }, {
      key: "zoomIn",
      value: function zoomIn() {
        this.setZoom(this.getZoom() + 0.1);
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.setZoom(this.getZoom() - 0.1);
      } // Moved to componentDidMount to avoid updating the store when tree loads
      // tree.setProps = (updater) => {
      //   // console.debug('setState', Object.keys(updater));
      //   component.props.onPhylocanvasStateChange(updater);
      // };

    }]);
    return Phylocanvas;
  }(_phylocanvas["default"]);
}

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _phylocanvas = __webpack_require__(94);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Tree = /*#__PURE__*/function () {
  function Tree(tree, state) {
    (0, _classCallCheck2["default"])(this, Tree);
    this.tree = tree;
    this.stepScale = state.stepScale;
    this.branchScale = state.branchScale;
    this.offsetX = state.offsetX;
    this.offsetY = state.offsetY;
    this.scale = state.scale;
    this.size = state.prevSize;
    this.padding = state.padding;
    this.includeLabelAlignment = false;
    this.bounds = this.getBounds();
  }

  (0, _createClass2["default"])(Tree, [{
    key: "getPostorderTraversal",
    value: function getPostorderTraversal() {
      var nodes = this.tree.getNodes();
      var postorderTraversal = nodes.postorderTraversal.map(function (node) {
        return _objectSpread(_objectSpread({}, node), {}, {
          parent: (node.parent || {}).postIndex,
          children: node.children ? node.children.map(function (_) {
            return _.postIndex;
          }) : undefined
        });
      });
      postorderTraversal.forEach(function (node) {
        node.parent = postorderTraversal[node.parent];
        node.children = node.children ? node.children.map(function (_) {
          return postorderTraversal[_];
        }) : undefined;
      });
      return postorderTraversal;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var nodes = Array.from(this.getLeaves());
      return {
        minX: nodes.reduce(function (acc, v) {
          return acc.x < v.x ? acc : v;
        }).x,
        minY: nodes.reduce(function (acc, v) {
          return acc.y < v.y ? acc : v;
        }).y,
        maxX: nodes.reduce(function (acc, v) {
          return acc.x > v.x ? acc : v;
        }).x,
        maxY: nodes.reduce(function (acc, v) {
          return acc.y > v.y ? acc : v;
        }).y
      };
    }
  }]);
  return Tree;
}();

var Radial = /*#__PURE__*/function (_Tree) {
  (0, _inherits2["default"])(Radial, _Tree);

  var _super = _createSuper(Radial);

  function Radial() {
    (0, _classCallCheck2["default"])(this, Radial);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Radial, [{
    key: "getLeaves",
    value: /*#__PURE__*/_regenerator["default"].mark(function getLeaves() {
      var stepOffset, postorderTraversal, preorderTraversal, _iterator, _step, _node2, rootIdx, root, i, node, angle, _iterator2, _step2, child, _i, _node, dist;

      return _regenerator["default"].wrap(function getLeaves$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              stepOffset = 0;
              postorderTraversal = this.getPostorderTraversal();
              preorderTraversal = new Array(postorderTraversal.length);
              _iterator = _createForOfIteratorHelper(postorderTraversal);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _node2 = _step.value;
                  preorderTraversal[_node2.preIndex] = _node2;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              rootIdx = this.tree.getNodes().root.preIndex;
              root = preorderTraversal[rootIdx];

              for (i = root.postIndex - root.totalNodes + 1; i <= root.postIndex; i++) {
                node = postorderTraversal[i];

                if (node.isLeaf) {
                  // leaf nodes are angled at step offsets (use a fixed step angle for all leaf nodes)
                  node.angle = stepOffset * (_phylocanvas.Angles.Degrees360 / root.visibleLeaves);
                } else {
                  angle = 0;
                  _iterator2 = _createForOfIteratorHelper(node.children);

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      child = _step2.value;
                      angle += child.angle * child.totalLeaves;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  node.angle = angle / node.totalLeaves;
                }

                if (node.isLeaf && !node.isHidden || node.isCollapsed && !node.isHidden) {
                  stepOffset += 1;
                }
              }

              _i = root.preIndex;

            case 9:
              if (!(_i < root.preIndex + root.totalNodes)) {
                _context.next = 20;
                break;
              }

              _node = preorderTraversal[_i]; // calculate vector horizontal and vertical components to position the node

              dist = _node.branchLength * this.branchScale;
              _node.x = (_node !== root ? _node.parent.x : 0) + dist * Math.cos(_node.angle);
              _node.y = (_node !== root ? _node.parent.y : 0) + dist * Math.sin(_node.angle);

              if (!_node.isLeaf) {
                _context.next = 17;
                break;
              }

              _context.next = 17;
              return {
                x: _node.x,
                y: _node.y,
                angle: _node.angle
              };

            case 17:
              _i++;
              _context.next = 9;
              break;

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, getLeaves, this);
    })
  }, {
    key: "getBranchScale",
    value: function getBranchScale() {
      var totalLength = Math.min(this.width, this.height) / 2;
      var nodes = this.tree.getNodes();

      if (nodes.root.totalLeafLength > 0) {
        return totalLength / nodes.root.totalLeafLength;
      }

      if (nodes.root.totalLeafLength < 0) {
        return totalLength * nodes.root.totalLeafLength;
      }

      return 0;
    }
  }]);
  return Radial;
}(Tree);

var Rectangular = /*#__PURE__*/function (_Tree2) {
  (0, _inherits2["default"])(Rectangular, _Tree2);

  var _super2 = _createSuper(Rectangular);

  function Rectangular(tree, state) {
    var _this;

    (0, _classCallCheck2["default"])(this, Rectangular);
    _this = _super2.call(this, tree, state);
    _this.mainAxis = "x";
    return _this;
  }

  (0, _createClass2["default"])(Rectangular, [{
    key: "getLeaves",
    value: /*#__PURE__*/_regenerator["default"].mark(function getLeaves() {
      var nodes, branchScale;
      return _regenerator["default"].wrap(function getLeaves$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              nodes = this.tree.getNodes();
              branchScale = this.branchScale;
              _context2.next = 4;
              return {
                x: 0,
                y: 0,
                angle: _phylocanvas.Angles.Degrees0
              };

            case 4:
              _context2.next = 6;
              return {
                x: nodes.root.totalSubtreeLength * branchScale,
                y: this.stepScale * nodes.root.visibleLeaves,
                angle: _phylocanvas.Angles.Degrees0
              };

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, getLeaves, this);
    })
  }, {
    key: "getBranchScale",
    value: function getBranchScale() {
      var nodes = this.tree.getNodes();
      var treeHeight = nodes.root.visibleLeaves * this.stepScale;
      var treeWidth = this.size.width / this.size.height * treeHeight;
      var totalLeafLength = nodes.root.totalLeafLength;
      return treeWidth / totalLeafLength;
    }
  }]);
  return Rectangular;
}(Tree);

var Circular = /*#__PURE__*/function (_Tree3) {
  (0, _inherits2["default"])(Circular, _Tree3);

  var _super3 = _createSuper(Circular);

  function Circular() {
    var _this2;

    (0, _classCallCheck2["default"])(this, Circular);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super3.call.apply(_super3, [this].concat(args));
    _this2.includeLabelAlignment = _this2.tree.alignLabels;
    _this2.bounds = _this2.getBounds();
    return _this2;
  }

  (0, _createClass2["default"])(Circular, [{
    key: "getLeaves",
    value: /*#__PURE__*/_regenerator["default"].mark(function getLeaves() {
      var stepOffset, _this$tree$getNodes, root, postorderTraversal, i, node, angle, distanceFromRoot, dist, x, y;

      return _regenerator["default"].wrap(function getLeaves$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              stepOffset = 0;
              _this$tree$getNodes = this.tree.getNodes(), root = _this$tree$getNodes.root;
              postorderTraversal = this.getPostorderTraversal();
              i = root.postIndex - root.totalNodes + 1;

            case 4:
              if (!(i <= root.postIndex)) {
                _context3.next = 18;
                break;
              }

              node = postorderTraversal[i];

              if (!node.isLeaf) {
                _context3.next = 14;
                break;
              }

              // leaf nodes are angled at step offsets (use a fixed step angle for all leaf nodes)
              angle = stepOffset * (_phylocanvas.Angles.Degrees360 / root.visibleLeaves); // calculate vector horizontal and vertical components to position the node

              distanceFromRoot = node.distanceFromRoot - root.distanceFromRoot;
              dist = distanceFromRoot * this.branchScale;
              x = dist * Math.cos(angle);
              y = dist * Math.sin(angle);
              _context3.next = 14;
              return {
                x: x,
                y: y,
                angle: angle
              };

            case 14:
              if (node.isLeaf && !node.isHidden || node.isCollapsed && !node.isHidden) {
                stepOffset += 1;
              }

            case 15:
              i++;
              _context3.next = 4;
              break;

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, getLeaves, this);
    })
  }, {
    key: "getBranchScale",
    value: function getBranchScale() {
      var totalLength = Math.min(this.width, this.height) / 2;
      var nodes = this.tree.getNodes();

      if (nodes.root.totalLeafLength > 0) {
        return totalLength / nodes.root.totalLeafLength;
      }

      if (nodes.root.totalLeafLength < 0) {
        return totalLength * nodes.root.totalLeafLength;
      }

      return 0;
    }
  }]);
  return Circular;
}(Tree);

var Diagonal = /*#__PURE__*/function (_Tree4) {
  (0, _inherits2["default"])(Diagonal, _Tree4);

  var _super4 = _createSuper(Diagonal);

  function Diagonal(tree, state) {
    var _this3;

    (0, _classCallCheck2["default"])(this, Diagonal);
    _this3 = _super4.call(this, tree, state);
    _this3.mainAxis = "x";
    return _this3;
  }

  (0, _createClass2["default"])(Diagonal, [{
    key: "getLeaves",
    value: /*#__PURE__*/_regenerator["default"].mark(function getLeaves() {
      var nodes, root, maxY, maxX;
      return _regenerator["default"].wrap(function getLeaves$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              nodes = this.tree.getNodes();
              root = nodes.root;
              maxY = (root.visibleLeaves - 1) * this.stepScale;
              maxX = maxY / 2;
              _context4.next = 6;
              return {
                x: 0,
                y: 0,
                angle: _phylocanvas.Angles.Degrees0
              };

            case 6:
              _context4.next = 8;
              return {
                x: maxX,
                y: maxY,
                angle: _phylocanvas.Angles.Degrees0
              };

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, getLeaves, this);
    })
  }, {
    key: "getBranchScale",
    value: function getBranchScale() {
      var nodes = this.tree.getNodes();
      var totalLength = this.size.width - this.padding * 2;

      if (nodes.root.totalLeafLength > 0) {
        return totalLength / nodes.root.totalLeafLength;
      }

      if (nodes.root.totalLeafLength < 0) {
        return totalLength * nodes.root.totalLeafLength;
      }

      return 0;
    }
  }]);
  return Diagonal;
}(Tree);

var Hierarchical = /*#__PURE__*/function (_Tree5) {
  (0, _inherits2["default"])(Hierarchical, _Tree5);

  var _super5 = _createSuper(Hierarchical);

  function Hierarchical(tree, state) {
    var _this4;

    (0, _classCallCheck2["default"])(this, Hierarchical);
    _this4 = _super5.call(this, tree, state);
    _this4.mainAxis = "y";
    return _this4;
  }

  (0, _createClass2["default"])(Hierarchical, [{
    key: "getLeaves",
    value: /*#__PURE__*/_regenerator["default"].mark(function getLeaves() {
      var nodes, root, angle, maxY, minX;
      return _regenerator["default"].wrap(function getLeaves$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              nodes = this.tree.getNodes();
              root = nodes.root;
              angle = _phylocanvas.Angles.Degrees90;
              maxY = root.totalSubtreeLength * this.branchScale;
              minX = -1 * (root.visibleLeaves - 1) * this.stepScale;
              _context5.next = 7;
              return {
                x: minX,
                y: 0,
                angle: angle
              };

            case 7:
              _context5.next = 9;
              return {
                x: 0,
                y: maxY,
                angle: angle
              };

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, getLeaves, this);
    })
  }, {
    key: "getBranchScale",
    value: function getBranchScale() {
      var nodes = this.tree.getNodes();
      var treeWidth = nodes.root.visibleLeaves * this.stepScale;
      var treeHeight = this.size.height / this.size.width * treeWidth;
      var totalLeafLength = nodes.root.totalSubtreeLength;
      return treeHeight / totalLeafLength;
    }
  }]);
  return Hierarchical;
}(Tree);

function _default(tree) {
  var _TreeTypes$Radial$Tre;

  var oldState = _objectSpread({}, tree.props);

  tree.setProps({
    offsetX: undefined,
    offsetY: undefined,
    branchScale: undefined,
    stepScale: undefined,
    scale: undefined,
    renderLabels: undefined,
    renderInternalLabels: undefined,
    renderBranchLengths: undefined,
    renderLeafLabels: undefined,
    renderLeafBorders: undefined,
    showNodes: undefined,
    showLabels: oldState.renderLabels,
    showInternalLabels: oldState.renderInternalLabels,
    showBranchLengths: oldState.renderBranchLengths,
    showLeafLabels: oldState.renderLeafLabels,
    showShapeBorders: oldState.renderLeafBorders,
    showShapes: oldState.showNodes
  });
  var TreeFactory = (_TreeTypes$Radial$Tre = {}, (0, _defineProperty2["default"])(_TreeTypes$Radial$Tre, _phylocanvas.TreeTypes.Radial, Radial), (0, _defineProperty2["default"])(_TreeTypes$Radial$Tre, _phylocanvas.TreeTypes.Rectangular, Rectangular), (0, _defineProperty2["default"])(_TreeTypes$Radial$Tre, _phylocanvas.TreeTypes.Circular, Circular), (0, _defineProperty2["default"])(_TreeTypes$Radial$Tre, _phylocanvas.TreeTypes.Diagonal, Diagonal), (0, _defineProperty2["default"])(_TreeTypes$Radial$Tre, _phylocanvas.TreeTypes.Hierarchical, Hierarchical), _TreeTypes$Radial$Tre)[oldState.type];
  var treeObj = new TreeFactory(tree, oldState);
  var oldBounds = treeObj.bounds;
  var defaultBranchScale = treeObj.getBranchScale();
  var currentState = tree.props;
  tree.props = _objectSpread({}, tree.props);
  tree.props.size = oldState.prevSize;

  function getDefaultScale() {
    var bounds = oldBounds;
    var area = {
      width: tree.props.size.width,
      height: tree.props.size.height,
      left: tree.props.padding,
      top: tree.props.padding,
      right: tree.props.size.width - tree.props.padding,
      bottom: tree.props.size.height - tree.props.padding
    };
    var treeWidth = bounds.maxX - bounds.minX;
    var treeHeight = bounds.maxY - bounds.minY;
    var canvasWidth = Math.max(area.width * 0.333, area.right - area.left - tree.props.nodeSize);
    var canvasHeight = Math.max(area.height * 0.333, area.bottom - area.top - tree.props.nodeSize);
    var xZoomRatio = canvasWidth / treeWidth;
    var yZoomRatio = canvasHeight / treeHeight;
    var scale = Math.min(xZoomRatio, yZoomRatio);
    return scale;
  }

  var treeWidth = oldBounds.maxX - oldBounds.minX;
  var treeHeight = oldBounds.maxY - oldBounds.minY;
  var treeCenterX = (oldBounds.minX + treeWidth / 2) * oldState.scale + oldState.offsetX;
  var treeCenterY = (oldBounds.minY + treeHeight / 2) * oldState.scale + oldState.offsetY;
  var defaultScale = getDefaultScale();
  var area = tree.getDrawingArea();
  tree.props = currentState;
  tree.setProps({
    transform: _objectSpread(_objectSpread({}, tree.props.transform), {}, {
      x: treeCenterX / area.width,
      y: treeCenterY / area.height,
      z: oldState.scale / defaultScale,
      branch: oldState.branchScale / defaultBranchScale,
      step: oldState.stepScale / 8
    })
  });
}

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _trees = __webpack_require__(71);

var _ui = __webpack_require__(25);

var _state = __webpack_require__(3);

var _TreeControls = _interopRequireDefault(__webpack_require__(634));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var treeId = _ref.treeId;
  return {
    controls: state.trees[treeId].controls,
    lasso: state.trees[treeId].lasso,
    type: state.trees[treeId].type
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var treeId = _ref2.treeId;
  return {
    onControlsChange: function onControlsChange(value) {
      return dispatch((0, _trees.update)(treeId, "controls", value));
    },
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(treeId));
    },
    onLassoChange: function onLassoChange(value) {
      return dispatch((0, _trees.setTreeLasso)(treeId, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TreeControls["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Menu = _interopRequireDefault(__webpack_require__(160));

var _Divider = _interopRequireDefault(__webpack_require__(93));

var _propTypes2 = __webpack_require__(14);

var _Animation = _interopRequireDefault(__webpack_require__(163));

var _CircularTreeIcon = _interopRequireDefault(__webpack_require__(635));

var _DiagonalTreeIcon = _interopRequireDefault(__webpack_require__(636));

var _HierarchicalTreeIcon = _interopRequireDefault(__webpack_require__(637));

var _LassoButton = _interopRequireDefault(__webpack_require__(496));

var _RadialTreeIcon = _interopRequireDefault(__webpack_require__(638));

var _RectangularTreeIcon = _interopRequireDefault(__webpack_require__(110));

var _TreeMetadataMenu = _interopRequireDefault(__webpack_require__(639));

var _TreeStyleMenu = _interopRequireDefault(__webpack_require__(641));

var _UiSpeedDial = _interopRequireDefault(__webpack_require__(209));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(157));

var treeTypes = [{
  value: "rc",
  label: "Rectangular Tree",
  icon: /*#__PURE__*/_react["default"].createElement(_RectangularTreeIcon["default"], null)
}, {
  value: "cr",
  label: "Circular Tree",
  icon: /*#__PURE__*/_react["default"].createElement(_CircularTreeIcon["default"], null)
}, {
  value: "rd",
  label: "Radial Tree",
  icon: /*#__PURE__*/_react["default"].createElement(_RadialTreeIcon["default"], null)
}, {
  value: "dg",
  label: "Diagonal Tree",
  icon: /*#__PURE__*/_react["default"].createElement(_DiagonalTreeIcon["default"], null)
}, {
  value: "hr",
  label: "Hierarchical Tree",
  icon: /*#__PURE__*/_react["default"].createElement(_HierarchicalTreeIcon["default"], null)
}];

var TreeControls = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-main-controls"
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _UiControlsButton["default"],
    icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onEditPane
  }, "Edit Tree"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onDownloadNewick
  }, "Download as Newick"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
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
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_UiSpeedDial["default"], {
    items: treeTypes,
    label: "Tree Type",
    value: props.type,
    onChange: props.onTypeChange
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_TreeMetadataMenu["default"], {
    treeId: props.treeId
  }), /*#__PURE__*/_react["default"].createElement(_TreeStyleMenu["default"], {
    treeId: props.treeId
  })));
});

TreeControls.displayName = "TreeControls";
TreeControls.propTypes = {
  controls: _propTypes["default"].bool.isRequired,
  lasso: _propTypes["default"].bool.isRequired,
  onControlsChange: _propTypes["default"].func.isRequired,
  onDownloadNewick: _propTypes["default"].func.isRequired,
  onDownloadPNG: _propTypes["default"].func.isRequired,
  onDownloadSVG: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  onLassoChange: _propTypes["default"].func.isRequired,
  onTypeChange: _propTypes["default"].func.isRequired,
  treeId: _propTypes["default"].string.isRequired,
  type: _propTypes2.TreeType.isRequired
};
var _default = TreeControls;
exports["default"] = _default;

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(47));

var CircularTreeIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 22 22"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(657 344)"
  }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10 5.01653L 9 5.01653L 9 6.01653L 10 6.01653L 10 5.01653ZM 6 13.0165L 6.83205 12.4618L 6.25871 11.6018L 5.41812 12.2033L 6 13.0165ZM 2 16.0165L 1.21913 16.6412L 2 16.0165ZM 10 20.0165L 10 19.0165L 9.97764 19.0165L 9.95531 19.0175L 10 20.0165ZM 10 11.0165L 15 11.0165L 15 9.01653L 10 9.01653L 10 11.0165ZM 16 10.0165C 16 8.59154 15.6409 7.45632 15.0508 6.5712C 14.4649 5.69234 13.6908 5.11891 12.9472 4.7471C 12.2075 4.37724 11.4799 4.1973 10.9456 4.10826C 10.6762 4.06334 10.4494 4.0405 10.2861 4.02883C 10.2043 4.02299 10.1379 4.01992 10.0895 4.0183C 10.0652 4.01749 10.0455 4.01705 10.0305 4.01681C 10.023 4.01669 10.0167 4.01662 10.0116 4.01658C 10.009 4.01656 10.0068 4.01654 10.0048 4.01654C 10.0039 4.01653 10.003 4.01653 10.0022 4.01653C 10.0018 4.01653 10.0012 4.01653 10.001 4.01653C 10.0005 4.01653 10 4.01653 10 5.01653C 10 6.01653 9.99953 6.01653 9.99908 6.01652C 9.99895 6.01652 9.99852 6.01652 9.99827 6.01652C 9.99776 6.01652 9.99733 6.01652 9.99697 6.01652C 9.99626 6.01652 9.99583 6.01651 9.99569 6.01651C 9.9954 6.01651 9.99626 6.01652 9.99822 6.01655C 10.0021 6.01661 10.0104 6.01678 10.0228 6.01719C 10.0477 6.01802 10.0887 6.01983 10.1436 6.02375C 10.2537 6.03162 10.4176 6.04783 10.6169 6.08104C 11.0201 6.14825 11.5425 6.28081 12.0528 6.53595C 12.5592 6.78914 13.0351 7.15321 13.3867 7.6806C 13.7341 8.20173 14 8.94151 14 10.0165L 16 10.0165ZM 14 10.0165C 14 11.0915 13.7341 11.8313 13.3867 12.3525C 13.0351 12.8798 12.5592 13.2439 12.0528 13.4971C 11.5425 13.7522 11.0201 13.8848 10.6169 13.952C 10.4176 13.9852 10.2537 14.0014 10.1436 14.0093C 10.0887 14.0132 10.0477 14.015 10.0228 14.0159C 10.0104 14.0163 10.0021 14.0164 9.99822 14.0165C 9.99626 14.0165 9.9954 14.0165 9.99569 14.0165C 9.99583 14.0165 9.99626 14.0165 9.99697 14.0165C 9.99733 14.0165 9.99776 14.0165 9.99827 14.0165C 9.99852 14.0165 9.99895 14.0165 9.99908 14.0165C 9.99953 14.0165 10 14.0165 10 15.0165C 10 16.0165 10.0005 16.0165 10.001 16.0165C 10.0012 16.0165 10.0018 16.0165 10.0022 16.0165C 10.003 16.0165 10.0039 16.0165 10.0048 16.0165C 10.0068 16.0165 10.009 16.0165 10.0116 16.0165C 10.0167 16.0164 10.023 16.0164 10.0305 16.0162C 10.0455 16.016 10.0652 16.0156 10.0895 16.0147C 10.1379 16.0131 10.2043 16.0101 10.2861 16.0042C 10.4494 15.9926 10.6762 15.9697 10.9456 15.9248C 11.4799 15.8358 12.2075 15.6558 12.9472 15.286C 13.6908 14.9141 14.4649 14.3407 15.0508 13.4619C 15.6409 12.5767 16 11.4415 16 10.0165L 14 10.0165ZM 11 5.01653L 11 0.0165289L 9 0.0165289L 9 5.01653L 11 5.01653ZM 10 0.0165289C 10.1104 1.01041 10.1099 1.01047 10.1094 1.01052C 10.1093 1.01054 10.1088 1.01059 10.1085 1.01062C 10.108 1.01068 10.1075 1.01073 10.1071 1.01078C 10.1062 1.01087 10.1056 1.01093 10.1053 1.01097C 10.1046 1.01104 10.105 1.01099 10.1064 1.01086C 10.1092 1.0106 10.1161 1.00997 10.127 1.00915C 10.1487 1.00751 10.186 1.00507 10.2378 1.00313C 10.3413 0.999236 10.5017 0.99733 10.7087 1.00751C 11.1233 1.0279 11.7198 1.09654 12.4179 1.29199C 13.804 1.68012 15.6099 2.57232 17.2106 4.63047L 18.7894 3.40259C 16.8901 0.960739 14.696 -0.147057 12.9571 -0.633935C 12.0927 -0.875986 11.3454 -0.963594 10.8069 -0.990076C 10.5373 -1.00333 10.3189 -1.00133 10.1626 -0.99546C 10.0845 -0.992522 10.0217 -0.988608 9.9758 -0.985126C 9.95283 -0.983385 9.93404 -0.98175 9.91962 -0.980397C 9.91241 -0.979721 9.90628 -0.979114 9.90127 -0.9786C 9.89876 -0.978343 9.89653 -0.978109 9.89458 -0.9779C 9.8936 -0.977796 9.8927 -0.977698 9.89186 -0.977607C 9.89145 -0.977562 9.89087 -0.977499 9.89066 -0.977476C 9.89011 -0.977415 9.88957 -0.977355 10 0.0165289ZM 10 0.0165289C 10 -0.983471 9.99962 -0.983471 9.99922 -0.983471C 9.99906 -0.983471 9.99864 -0.98347 9.99832 -0.98347C 9.99768 -0.983469 9.99695 -0.983467 9.99614 -0.983465C 9.99451 -0.98346 9.99255 -0.983452 9.99025 -0.983439C 9.98566 -0.983413 9.97973 -0.983365 9.9725 -0.983281C 9.95804 -0.983113 9.93837 -0.982797 9.91375 -0.982209C 9.86451 -0.981033 9.7954 -0.978765 9.70854 -0.974395C 9.53493 -0.965659 9.28961 -0.948486 8.98959 -0.914681C 8.39132 -0.84727 7.566 -0.712663 6.65341 -0.442265C 4.844 0.0938563 2.58218 1.19825 1.152 3.48652L 2.848 4.54653C 3.91782 2.83482 5.656 1.93921 7.22159 1.47533C 7.9965 1.24573 8.70243 1.13033 9.21353 1.07274C 9.4682 1.04405 9.6721 1.02997 9.80904 1.02308C 9.87745 1.01964 9.92895 1.018 9.9615 1.01722C 9.97777 1.01683 9.98928 1.01666 9.99579 1.01658C 9.99905 1.01655 10.001 1.01653 10.0018 1.01653C 10.0021 1.01653 10.0021 1.01653 10.0019 1.01653C 10.0017 1.01653 10.0015 1.01653 10.0012 1.01653C 10.001 1.01653 10.0007 1.01653 10.0007 1.01653C 10.0003 1.01653 10 1.01653 10 0.0165289ZM 10 14.0165C 8.73055 14.0165 7.59558 13.6071 6.83205 12.4618L 5.16795 13.5712C 6.40442 15.4259 8.26945 16.0165 10 16.0165L 10 14.0165ZM 6 13.0165C 5.41812 12.2033 5.41809 12.2033 5.41806 12.2033C 5.41803 12.2033 5.41799 12.2033 5.41794 12.2034C 5.41783 12.2035 5.41769 12.2036 5.4175 12.2037C 5.41712 12.204 5.41657 12.2044 5.41586 12.2049C 5.41442 12.2059 5.41231 12.2074 5.40955 12.2094C 5.40402 12.2134 5.39586 12.2192 5.3852 12.2268C 5.3639 12.2421 5.33263 12.2646 5.29248 12.2934C 5.21219 12.3511 5.09637 12.4345 4.9538 12.5376C 4.66876 12.7437 4.27629 13.0289 3.84674 13.3449C 2.99584 13.9709 1.97224 14.738 1.35982 15.2483L 2.64018 16.7847C 3.19934 16.3188 4.17573 15.5858 5.03194 14.9559C 5.45594 14.644 5.8438 14.3622 6.12571 14.1583C 6.26661 14.0564 6.38091 13.9741 6.45988 13.9174C 6.49936 13.889 6.52999 13.867 6.55069 13.8521C 6.56104 13.8447 6.56891 13.8391 6.57415 13.8353C 6.57678 13.8335 6.57874 13.832 6.58004 13.8311C 6.58068 13.8307 6.58116 13.8303 6.58147 13.8301C 6.58162 13.83 6.58174 13.8299 6.5818 13.8299C 6.58184 13.8298 6.58186 13.8298 6.58188 13.8298C 6.58188 13.8298 6.58188 13.8298 6 13.0165ZM 2.78087 15.3918C 1.91608 14.3108 1.4615 12.9795 1.22855 11.873C 1.11353 11.3267 1.05614 10.8524 1.02765 10.5177C 1.01344 10.3507 1.00652 10.2196 1.00315 10.133C 1.00147 10.0897 1.00068 10.0576 1.00032 10.0378C 1.00013 10.028 1.00005 10.0211 1.00002 10.0175C 1 10.0157 0.999998 10.0147 0.999997 10.0146C 0.999997 10.0145 0.999998 10.0146 0.999998 10.0149C 0.999999 10.0151 0.999999 10.0153 0.999999 10.0156C 1 10.0157 1 10.0159 1 10.016C 1 10.0163 1 10.0165 0 10.0165C -1 10.0165 -1 10.0168 -1 10.0171C -1 10.0172 -1 10.0176 -0.999999 10.0178C -0.999999 10.0183 -0.999998 10.0188 -0.999997 10.0194C -0.999994 10.0206 -0.999989 10.022 -0.999982 10.0236C -0.999968 10.0268 -0.999942 10.0309 -0.999897 10.0358C -0.999808 10.0456 -0.999643 10.0587 -0.999339 10.075C -0.99873 10.1077 -0.997566 10.1533 -0.995341 10.2106C -0.990892 10.3252 -0.982189 10.487 -0.965148 10.6873C -0.931138 11.0869 -0.863529 11.6439 -0.72855 12.285C -0.461496 13.5535 0.0839238 15.2222 1.21913 16.6412L 2.78087 15.3918ZM 1.21913 16.6412C 3.0549 18.9359 5.24508 20.0328 6.97468 20.552C 7.83757 20.8111 8.58799 20.9273 9.12868 20.9787C 9.39943 21.0044 9.6189 21.014 9.77519 21.017C 9.85337 21.0185 9.91589 21.0184 9.96126 21.0177C 9.98396 21.0174 10.0024 21.017 10.0163 21.0166C 10.0233 21.0163 10.0292 21.0161 10.0339 21.016C 10.0363 21.0159 10.0384 21.0158 10.0402 21.0157C 10.0411 21.0157 10.0419 21.0156 10.0426 21.0156C 10.043 21.0156 10.0435 21.0156 10.0437 21.0156C 10.0442 21.0155 10.0447 21.0155 10 20.0165C 9.95531 19.0175 9.95575 19.0175 9.95617 19.0175C 9.95629 19.0175 9.9567 19.0175 9.95693 19.0175C 9.95741 19.0174 9.95781 19.0174 9.95814 19.0174C 9.95881 19.0174 9.95921 19.0174 9.95934 19.0174C 9.95959 19.0173 9.95876 19.0174 9.95687 19.0174C 9.95309 19.0175 9.94508 19.0178 9.933 19.0179C 9.90885 19.0183 9.86852 19.0185 9.81342 19.0174C 9.70313 19.0153 9.53426 19.0082 9.31797 18.9877C 8.88457 18.9465 8.26609 18.8515 7.54971 18.6365C 6.12077 18.2075 4.31095 17.3044 2.78087 15.3918L 1.21913 16.6412ZM 10 21.0165C 16.0523 21.0165 21 16.0688 21 10.0165L 19 10.0165C 19 14.9642 14.9477 19.0165 10 19.0165L 10 21.0165Z",
    transform: "matrix(0.707107 0.707107 -0.707107 0.707107 -645.994 -347.156)"
  })))));
});

CircularTreeIcon.displayName = "CircularTreeIcon";
var _default = CircularTreeIcon;
exports["default"] = _default;

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(47));

var DiagonalTreeIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 22 22"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(577 344)"
  }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 9L -0.447215 8.10557L -0.447219 9.89443L 0 9ZM 2.24999 10.125L 1.80277 11.0194L 1.80278 11.0194L 2.24999 10.125ZM 6.74998 12.375L 6.30277 13.2694L 6.30277 13.2694L 6.74998 12.375ZM 9.00004 13.5L 9.44726 12.6056L 9.44724 12.6056L 9.00004 13.5ZM 13.5 15.75L 13.0528 16.6444L 13.0528 16.6444L 13.5 15.75ZM 15.75 16.875L 15.3028 17.7694L 15.3028 17.7694L 15.75 16.875ZM 0.447215 9.89443L 18.4471 0.894426L 17.5527 -0.894426L -0.447215 8.10557L 0.447215 9.89443ZM -0.447219 9.89443L 1.80277 11.0194L 2.69721 9.23059L 0.447219 8.10558L -0.447219 9.89443ZM 1.80278 11.0194L 6.30277 13.2694L 7.19719 11.4806L 2.6972 9.23059L 1.80278 11.0194ZM 6.30277 13.2694L 8.55283 14.3944L 9.44724 12.6056L 7.19718 11.4806L 6.30277 13.2694ZM 8.55282 14.3944L 13.0528 16.6444L 13.9472 14.8556L 9.44726 12.6056L 8.55282 14.3944ZM 13.0528 16.6444L 15.3028 17.7694L 16.1972 15.9806L 13.9472 14.8556L 13.0528 16.6444ZM 15.3028 17.7694L 17.5528 18.8944L 18.4472 17.1056L 16.1972 15.9806L 15.3028 17.7694Z",
    transform: "matrix(1 0 0 -1 -576 -324)"
  })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M -0.447214 1.39443L 5.55279 4.39443L 6.44721 2.60557L 0.447214 -0.394427L -0.447214 1.39443ZM 5.55279 4.39443L 12.5528 7.89443L 13.4472 6.10557L 6.44721 2.60557L 5.55279 4.39443ZM 6.44721 4.39443L 13.4472 0.894427L 12.5528 -0.894427L 5.55279 2.60557L 6.44721 4.39443Z",
    transform: "matrix(1 0 0 -1 -571 -329.5)"
  })))));
});

DiagonalTreeIcon.displayName = "DiagonalTreeIcon";
var _default = DiagonalTreeIcon;
exports["default"] = _default;

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(47));

var HierarchicalTreeIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 22 22"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(537 344)"
  }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 3.1875L 0 13L 0 3.1875Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11 0L 11 6L 11 0Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6 10L 6 16L 6 10Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6 16L 14 16L 6 16Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6 10L 14 10L 6 10Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 13L 5 13L 0 13Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 3.1875L 11 3.1875L 0 3.1875Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11 6L 17 6L 11 6Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11 0L 17 0L 11 0Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 3.1875L 0 2.1875L -1 2.1875L -1 3.1875L 0 3.1875ZM 0 13L -1 13L -1 14L 0 14L 0 13ZM 11 0L 11 -1L 10 -1L 10 0L 11 0ZM 11 6L 10 6L 10 7L 11 7L 11 6ZM 6 10L 6 9L 5 9L 5 10L 6 10ZM 6 16L 5 16L 5 17L 6 17L 6 16ZM -1 3.1875L -1 13L 1 13L 1 3.1875L -1 3.1875ZM 10 0L 10 6L 12 6L 12 0L 10 0ZM 5 10L 5 16L 7 16L 7 10L 5 10ZM 6 17L 14 17L 14 15L 6 15L 6 17ZM 6 11L 14 11L 14 9L 6 9L 6 11ZM 0 14L 5 14L 5 12L 0 12L 0 14ZM 0 4.1875L 11 4.1875L 11 2.1875L 0 2.1875L 0 4.1875ZM 11 7L 17 7L 17 5L 11 5L 11 7ZM 11 1L 17 1L 17 -1L 11 -1L 11 1Z",
    transform: "matrix(6.12323e-17 1 1 -6.12323e-17 -534 -341)"
  })))));
});

HierarchicalTreeIcon.displayName = "HierarchicalTreeIcon";
var _default = HierarchicalTreeIcon;
exports["default"] = _default;

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(47));

var RadialTreeIcon = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 22 22"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(617 345)"
  }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10.5363 0.266879L 12.0363 5.68355L 13.9637 5.14979L 12.4637 -0.266879L 10.5363 0.266879ZM 13.4913 6.28765L 19.9913 2.62098L 19.0087 0.879022L 12.5087 4.54569L 13.4913 6.28765ZM 12.1221 4.93781L 9.1221 10.4378L 10.8779 11.3955L 13.8779 5.89552L 12.1221 4.93781ZM 10.296 9.96149L 0.29603 6.86228L -0.29603 8.77264L 9.70397 11.8718L 10.296 9.96149ZM 9.1221 11.3955L 11.6221 15.9789L 13.3779 15.0211L 10.8779 10.4378L 9.1221 11.3955ZM 11.5862 15.0939L 9.58619 19.5939L 11.4138 20.4061L 13.4138 15.9061L 11.5862 15.0939ZM 12.2078 16.4564L 18.2078 18.2897L 18.7922 16.377L 12.7922 14.5436L 12.2078 16.4564Z",
    transform: "translate(-616 -344)"
  })))));
});

RadialTreeIcon.displayName = "RadialTreeIcon";
var _default = RadialTreeIcon;
exports["default"] = _default;

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _trees = __webpack_require__(71);

var _TreeMetadataMenu = _interopRequireDefault(__webpack_require__(640));

var _dataColumns = _interopRequireDefault(__webpack_require__(21));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var treeId = _ref.treeId;
  var treeState = state.trees[treeId];
  return {
    blockHeaderFontSize: treeState.blockHeaderFontSize,
    blockLength: treeState.blockLength,
    blockPadding: treeState.blockPadding,
    blocks: treeState.blocks,
    colourFields: (0, _dataColumns["default"])(state),
    fontSize: treeState.fontSize,
    maxBlockLength: 160,
    maxBlockPadding: 16,
    maxFontSize: 64,
    minBlockLength: 1,
    minBlockPadding: 0,
    minFontSize: 1,
    showBlockHeaders: treeState.showBlockHeaders,
    treeType: treeState.type
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var treeId = _ref2.treeId;
  return {
    onBlockHeaderFontSizeChange: function onBlockHeaderFontSizeChange(value) {
      return dispatch((0, _trees.update)(treeId, "blockHeaderFontSize", value));
    },
    onBlockLengthChange: function onBlockLengthChange(value) {
      return dispatch((0, _trees.update)(treeId, "blockLength", value));
    },
    onBlockPaddingChange: function onBlockPaddingChange(value) {
      return dispatch((0, _trees.update)(treeId, "blockPadding", value));
    },
    onBlocksChange: function onBlocksChange(value) {
      return dispatch((0, _trees.update)(treeId, "blocks", value));
    },
    onShowBlockHeadersChange: function onShowBlockHeadersChange(value) {
      return dispatch((0, _trees.update)(treeId, "showBlockHeaders", value));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_TreeMetadataMenu["default"]);

exports["default"] = _default;

/***/ }),

/***/ 640:
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

var _propTypes2 = __webpack_require__(14);

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(159));

var _UiToggleSlider = _interopRequireDefault(__webpack_require__(174));

var _UiSelectList = _interopRequireDefault(__webpack_require__(168));

var _UiSlider = _interopRequireDefault(__webpack_require__(173));

var _UiFloatingFilter = _interopRequireDefault(__webpack_require__(96));

var TreeMetadataMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    style: props.style,
    className: (0, _classnames["default"])("mr-tree-metadata-menu", props.className),
    title: "Metadata blocks"
  }, /*#__PURE__*/_react["default"].createElement("section", null, (props.treeType === "rc" || props.treeType === "dg" || props.treeType === "hr") && /*#__PURE__*/_react["default"].createElement(_UiToggleSlider["default"], {
    label: "Block Headers",
    onCheckedChange: props.onShowBlockHeadersChange,
    checked: props.showBlockHeaders,
    max: props.maxFontSize,
    min: props.minFontSize,
    onChange: props.onBlockHeaderFontSizeChange,
    unit: "px",
    value: props.blockHeaderFontSize
  }), /*#__PURE__*/_react["default"].createElement(_UiSlider["default"], {
    label: "Block Length",
    max: props.maxBlockLength,
    min: props.minBlockLength,
    onChange: props.onBlockLengthChange,
    unit: "px",
    value: props.blockLength
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSlider["default"], {
    label: "Block gap",
    onCheckedChange: function onCheckedChange(checked) {
      return props.onBlockPaddingChange(checked ? 2 : 0);
    },
    checked: props.blockPadding > 0,
    max: props.maxBlockPadding,
    min: props.minBlockPadding,
    onChange: props.onBlockPaddingChange,
    unit: "px",
    value: props.blockPadding
  })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_UiFloatingFilter["default"], {
    items: props.colourFields,
    label: "Search columns"
  }, function (items) {
    return /*#__PURE__*/_react["default"].createElement(_UiSelectList["default"], {
      items: items,
      onChange: props.onBlocksChange,
      value: props.blocks,
      selectAll: true,
      selectOnly: true,
      style: {
        height: 40 + props.colourFields.length * 28,
        maxHeight: "calc(100vh - 400px)"
      }
    });
  })));
});

TreeMetadataMenu.displayName = "TreeMetadataMenu";
TreeMetadataMenu.propTypes = {
  blockHeaderFontSize: _propTypes["default"].number.isRequired,
  blockLength: _propTypes["default"].number.isRequired,
  blockPadding: _propTypes["default"].number.isRequired,
  blocks: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired),
  className: _propTypes["default"].string,
  colourFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  maxBlockLength: _propTypes["default"].number.isRequired,
  maxBlockPadding: _propTypes["default"].number.isRequired,
  maxFontSize: _propTypes["default"].number.isRequired,
  minBlockLength: _propTypes["default"].number.isRequired,
  minBlockPadding: _propTypes["default"].number.isRequired,
  minFontSize: _propTypes["default"].number.isRequired,
  onBlockHeaderFontSizeChange: _propTypes["default"].func.isRequired,
  onBlockLengthChange: _propTypes["default"].func.isRequired,
  onBlockPaddingChange: _propTypes["default"].func.isRequired,
  onBlocksChange: _propTypes["default"].func,
  onMetadataLabelsChange: _propTypes["default"].func,
  onShowBlockHeadersChange: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  showBlockHeaders: _propTypes["default"].bool,
  showMetadataLabels: _propTypes["default"].bool,
  toggle: _propTypes["default"].func,
  treeType: _propTypes2.TreeType.isRequired
};
var _default = TreeMetadataMenu;
exports["default"] = _default;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _trees = __webpack_require__(71);

var _TreeStyleMenu = _interopRequireDefault(__webpack_require__(642));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var treeId = _ref.treeId;
  return {
    alignLabels: state.trees[treeId].alignLabels,
    fontSize: state.trees[treeId].fontSize,
    maxFontSize: 64,
    maxNodeSize: 64,
    minFontSize: 4,
    minNodeSize: 1,
    nodeSize: state.trees[treeId].nodeSize,
    showBranchLengths: state.trees[treeId].showBranchLengths,
    showInternalLabels: state.trees[treeId].showInternalLabels,
    showLeafLabels: state.trees[treeId].showLeafLabels,
    showShapeBorders: state.trees[treeId].showShapeBorders,
    showShapes: state.trees[treeId].showShapes,
    showPiecharts: state.trees[treeId].showPiecharts,
    styleLeafLabels: state.trees[treeId].styleLeafLabels,
    styleLeafNodes: state.trees[treeId].styleLeafNodes,
    styleNodeEdges: state.trees[treeId].styleNodeEdges,
    styleNodeLines: state.trees[treeId].styleNodeLines,
    scaleLineAlpha: state.trees[treeId].scaleLineAlpha
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var treeId = _ref2.treeId;
  return {
    onAlignLabelsChange: function onAlignLabelsChange(value) {
      return dispatch((0, _trees.update)(treeId, "alignLabels", value));
    },
    onFontSizeChange: function onFontSizeChange(value) {
      return dispatch((0, _trees.update)(treeId, "fontSize", value));
    },
    onNodeSizeChange: function onNodeSizeChange(value) {
      return dispatch((0, _trees.update)(treeId, "nodeSize", value));
    },
    onShowBranchLengthsChange: function onShowBranchLengthsChange(value) {
      return dispatch((0, _trees.update)(treeId, "showBranchLengths", value));
    },
    onShowInternalLabelsChange: function onShowInternalLabelsChange(value) {
      return dispatch((0, _trees.update)(treeId, "showInternalLabels", value));
    },
    onShowLeafLabelsChange: function onShowLeafLabelsChange(value) {
      return dispatch((0, _trees.update)(treeId, "showLeafLabels", value));
    },
    onShowShapeBordersChange: function onShowShapeBordersChange(value) {
      return dispatch((0, _trees.update)(treeId, "showShapeBorders", value));
    },
    onShowShapesChange: function onShowShapesChange(value) {
      return dispatch((0, _trees.update)(treeId, "showShapes", value));
    },
    onShowPiechartsChange: function onShowPiechartsChange(value) {
      return dispatch((0, _trees.update)(treeId, "showPiecharts", value));
    },
    onStyleLeafLabelsChange: function onStyleLeafLabelsChange(value) {
      return dispatch((0, _trees.update)(treeId, "styleLeafLabels", value));
    },
    onStyleLeafNodesChange: function onStyleLeafNodesChange(value) {
      return dispatch((0, _trees.update)(treeId, "styleLeafNodes", value));
    },
    onStyleNodeEdgesChange: function onStyleNodeEdgesChange(value) {
      return dispatch((0, _trees.update)(treeId, "styleNodeEdges", value));
    },
    onStyleNodeLinesChange: function onStyleNodeLinesChange(value) {
      return dispatch((0, _trees.update)(treeId, "styleNodeLines", value));
    },
    onScaleLineAlphaChange: function onScaleLineAlphaChange(value) {
      return dispatch((0, _trees.update)(treeId, "scaleLineAlpha", value));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_TreeStyleMenu["default"]);

exports["default"] = _default;

/***/ }),

/***/ 642:
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

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(159));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(56));

var _UiToggleSlider = _interopRequireDefault(__webpack_require__(174));

var TreeStylesMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    style: props.style,
    className: (0, _classnames["default"])("mr-tree-styles-menu", props.className),
    title: "Nodes & Labels"
  }, /*#__PURE__*/_react["default"].createElement(_UiToggleSlider["default"], {
    checked: props.showShapes,
    label: "Leaf Nodes",
    max: props.maxNodeSize,
    min: props.minNodeSize,
    onChange: props.onNodeSizeChange,
    onCheckedChange: props.onShowShapesChange,
    unit: "px",
    value: props.nodeSize
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Leaf Borders",
    onChange: props.onShowShapeBordersChange,
    value: props.showShapeBorders
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_UiToggleSlider["default"], {
    checked: props.showLeafLabels,
    label: "Leaf Labels",
    max: props.maxFontSize,
    min: props.minFontSize,
    onChange: props.onFontSizeChange,
    onCheckedChange: props.onShowLeafLabelsChange,
    unit: "px",
    value: props.fontSize
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Align Leaf Labels",
    onChange: props.onAlignLabelsChange,
    value: props.alignLabels
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Colour Leaf Labels",
    onChange: props.onStyleLeafLabelsChange,
    value: props.styleLeafLabels
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Show Internal Nodes",
    onChange: props.onShowPiechartsChange,
    value: props.showPiecharts
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Show Internal Labels",
    onChange: props.onShowInternalLabelsChange,
    value: props.showInternalLabels
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Show Branch Lengths",
    onChange: props.onShowBranchLengthsChange,
    value: props.showBranchLengths
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Colour Internal Edges",
    onChange: props.onStyleNodeEdgesChange,
    value: props.styleNodeEdges
  }), /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Opaque Edges",
    onChange: function onChange(value) {
      return props.onScaleLineAlphaChange(!value);
    },
    value: !props.scaleLineAlpha
  }));
});

TreeStylesMenu.displayName = "TreeStylesMenu";
TreeStylesMenu.propTypes = {
  alignLabels: _propTypes["default"].bool.isRequired,
  className: _propTypes["default"].string,
  fontSize: _propTypes["default"].number.isRequired,
  maxFontSize: _propTypes["default"].number.isRequired,
  maxNodeSize: _propTypes["default"].number.isRequired,
  minFontSize: _propTypes["default"].number.isRequired,
  minNodeSize: _propTypes["default"].number.isRequired,
  nodeSize: _propTypes["default"].number.isRequired,
  onAlignLabelsChange: _propTypes["default"].func.isRequired,
  onFontSizeChange: _propTypes["default"].func.isRequired,
  onNodeSizeChange: _propTypes["default"].func.isRequired,
  onShowBranchLengthsChange: _propTypes["default"].func.isRequired,
  onShowInternalLabelsChange: _propTypes["default"].func.isRequired,
  onShowLeafLabelsChange: _propTypes["default"].func.isRequired,
  onShowPiechartsChange: _propTypes["default"].func.isRequired,
  onShowShapeBordersChange: _propTypes["default"].func.isRequired,
  onShowShapesChange: _propTypes["default"].func.isRequired,
  onStyleLeafLabelsChange: _propTypes["default"].func.isRequired,
  onStyleNodeEdgesChange: _propTypes["default"].func.isRequired,
  showBranchLengths: _propTypes["default"].bool.isRequired,
  showInternalLabels: _propTypes["default"].bool.isRequired,
  showLeafLabels: _propTypes["default"].bool.isRequired,
  showPiecharts: _propTypes["default"].bool.isRequired,
  showShapeBorders: _propTypes["default"].bool.isRequired,
  showShapes: _propTypes["default"].bool.isRequired,
  styleLeafLabels: _propTypes["default"].bool.isRequired,
  styleNodeEdges: _propTypes["default"].bool.isRequired
};
var _default = TreeStylesMenu;
exports["default"] = _default;

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _ControlCameraRounded = _interopRequireDefault(__webpack_require__(478));

var _phylocanvas = __webpack_require__(94);

var _ZoomControls = _interopRequireDefault(__webpack_require__(175));

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var modes = ["scale", "branch", "step"];

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
      mode: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getMode", function () {
      switch (_this.props.treeType) {
        case _phylocanvas.TreeTypes.Rectangular:
        case _phylocanvas.TreeTypes.Diagonal:
        case _phylocanvas.TreeTypes.Hierarchical:
          return modes[_this.state.mode];

        case _phylocanvas.TreeTypes.Circular:
        case _phylocanvas.TreeTypes.Radial:
          return modes[_this.state.mode === 2 ? 0 : _this.state.mode];
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getIconClass", function () {
      var mode = _this.getMode();

      switch (mode) {
        case "scale":
          return null;

        case "branch":
          return _this.props.treeType === _phylocanvas.TreeTypes.Hierarchical ? "mr-vertical" : "mr-horizontal";

        case "step":
          return _this.props.treeType === _phylocanvas.TreeTypes.Hierarchical ? "mr-horizontal" : "mr-vertical";
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMode", function () {
      var mode = _this.getMode();

      switch (mode) {
        case "scale":
          return _this.setState({
            mode: 1
          });

        case "branch":
          return _this.setState({
            mode: 2
          });

        case "step":
          return _this.setState({
            mode: 0
          });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleZoomIn", function () {
      var mode = _this.getMode();

      switch (mode) {
        case "scale":
          return _this.props.onZoomIn();

        case "branch":
          return _this.props.onBranchZoomIn();

        case "step":
          return _this.props.onStepZoomIn();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleZoomOut", function () {
      var mode = _this.getMode();

      switch (mode) {
        case "scale":
          return _this.props.onZoomOut();

        case "branch":
          return _this.props.onBranchZoomOut();

        case "step":
          return _this.props.onStepZoomOut();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(_default, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_ZoomControls["default"], {
        className: this.props.className,
        onZoomIn: this.handleZoomIn,
        onZoomOut: this.handleZoomOut
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-button",
        title: "Toogle zoom mode",
        onClick: this.toggleMode
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.getIconClass()
      }, /*#__PURE__*/_react["default"].createElement(_ControlCameraRounded["default"], null))));
    }
  }]);
  return _default;
}(_react["default"].PureComponent);

exports["default"] = _default;
(0, _defineProperty2["default"])(_default, "displayName", "TreeZoomControls");
(0, _defineProperty2["default"])(_default, "propTypes", {
  className: _propTypes["default"].string,
  onBranchZoomIn: _propTypes["default"].func.isRequired,
  onBranchZoomOut: _propTypes["default"].func.isRequired,
  onStepZoomIn: _propTypes["default"].func.isRequired,
  onStepZoomOut: _propTypes["default"].func.isRequired,
  onZoomIn: _propTypes["default"].func.isRequired,
  onZoomOut: _propTypes["default"].func.isRequired,
  treeType: _propTypes2.TreeType.isRequired
});

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ZoomInRounded = _interopRequireDefault(__webpack_require__(210));

var _ZoomOutMapRounded = _interopRequireDefault(__webpack_require__(211));

var _ZoomOutRounded = _interopRequireDefault(__webpack_require__(212));

var _downloads = __webpack_require__(68);

__webpack_require__(207);

/* eslint-disable react/jsx-no-target-blank */
var Link = /*#__PURE__*/_react["default"].createElement("div", {
  className: "mr-ui-context-menu-item single-action"
}, /*#__PURE__*/_react["default"].createElement("a", {
  href: "http://phylocanvas.gl/",
  style: {
    height: "100%",
    textAlign: "center",
    display: "block"
  },
  target: "_blank",
  title: "About PhyloCanvas"
}, /*#__PURE__*/_react["default"].createElement("img", {
  src: "https://microreact.org/images/logos/phylocanvas.svg",
  style: {
    height: "100%"
  }
})));

var TreeContextMenu = /*#__PURE__*/_react["default"].memo(function (props) {
  if (!props.tree) {
    return null;
  }

  var tree = props.tree,
      node = props.node;

  if (node && !node.isLeaf) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-item single-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return tree.setRoot(node);
      }
    }, "View Subtree")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-item single-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return tree.collapseNode(node, {
          refit: true
        });
      }
    }, tree.props.collapsedIds && tree.props.collapsedIds.includes(node.id) ? "Expand" : "Collapse", " Subtree")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-item single-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return tree.rotateNode(node, {
          refit: false
        });
      }
    }, tree.props.rotatedIds && tree.props.rotatedIds.includes(node.id) ? "Derotate" : "Rotate", " Subtree")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-divider"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-item single-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return tree.rerootNode(node);
      }
    }, "Set as Root (Re-root)")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-divider"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-item single-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return (0, _downloads.downloadDataUrl)(tree.getLeafNodes(node).map(function (x) {
          return x.label;
        }).join("\n"), "leaf-labels.txt", "plain/text");
      }
    }, "Export Leaf Labels")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-item single-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return (0, _downloads.downloadDataUrl)(tree.exportNewick(node), "tree.nwk", "plain/text");
      }
    }, "Export as Newick File")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-ui-context-menu-divider"
    }), Link);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item multi-action",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, "Zoom", /*#__PURE__*/_react["default"].createElement("button", {
    title: "Zoom out",
    onClick: function onClick() {
      return tree.zoomOut();
    }
  }, /*#__PURE__*/_react["default"].createElement(_ZoomOutRounded["default"], null)), /*#__PURE__*/_react["default"].createElement("button", {
    title: "Fit in panel",
    onClick: function onClick() {
      return tree.fitInPanel();
    }
  }, /*#__PURE__*/_react["default"].createElement(_ZoomOutMapRounded["default"], null)), /*#__PURE__*/_react["default"].createElement("button", {
    title: "Zoom in",
    onClick: function onClick() {
      return tree.zoomIn();
    }
  }, /*#__PURE__*/_react["default"].createElement(_ZoomInRounded["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return tree.setSource(tree.getGraphWithoutLayout().originalSource);
    }
  }, "Redraw Original Tree")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-divider"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return props.onShowLeafLabelsChange(!props.phylocanvasProps.showLeafLabels);
    }
  }, props.phylocanvasProps.showLeafLabels ? "Hide" : "Show", " Leaf Labels")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return props.onAlignLabelsChange(!props.phylocanvasProps.alignLabels);
    }
  }, props.phylocanvasProps.alignLabels ? "Unalign" : "Align", " Leaf Labels")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-divider"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return tree.midpointRoot();
    }
  }, "Midpoint Root")), (tree.props.collapsedIds && tree.props.collapsedIds.length) > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return tree.resetCollapsedNodes({
        refit: true
      });
    }
  }, "Expand collapsed subtrees")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-divider"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return (0, _downloads.downloadDataUrl)(tree.getLeafNodes(node).map(function (x) {
        return x.label;
      }).join("\n"), "leaf-labels.txt", "plain/text");
    }
  }, "Export Leaf Labels")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return (0, _downloads.downloadDataUrl)(tree.exportNewick(), "tree.nwk", "plain/text");
    }
  }, "Export as Newick File")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-item single-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return (0, _downloads.downloadDataUrl)(tree.exportPNG(), "tree.png", "image/png");
    }
  }, "Export as PNG Image")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-context-menu-divider"
  }), Link);
});

TreeContextMenu.displayName = "TreeContextMenu";
TreeContextMenu.propTypes = {
  onAlignLabelsChange: _propTypes["default"].func.isRequired,
  onShowLeafLabelsChange: _propTypes["default"].func.isRequired,
  phylocanvasProps: _propTypes["default"].object,
  tree: _propTypes["default"].object,
  node: _propTypes["default"].object
};
var _default = TreeContextMenu;
exports["default"] = _default;

/***/ })

}]);