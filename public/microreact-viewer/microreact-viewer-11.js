(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[11],{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _panes = __webpack_require__(53);

var _state = __webpack_require__(3);

var _ViewsPane = _interopRequireDefault(__webpack_require__(645));

var _views = __webpack_require__(648);

var _ui = __webpack_require__(25);

function mapStateToProps(state) {
  return {
    entries: state.views,
    key: state.views.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _panes.setSidePane)());
    },
    onCreateView: function onCreateView() {
      return dispatch((0, _views.createNewView)());
    },
    onDeleteView: function onDeleteView(view) {
      return dispatch((0, _views.deleteView)(view));
    },
    onEntriesListChange: function onEntriesListChange(viewsList) {
      return dispatch((0, _views.setViewsList)(viewsList));
    },
    onLoadView: function onLoadView(view) {
      return dispatch((0, _ui.loadView)(view));
    },
    onRenameView: function onRenameView(view, name) {
      return dispatch((0, _views.renameView)(view, name));
    },
    onResaveView: function onResaveView(view) {
      return dispatch((0, _views.resaveView)(view));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_ViewsPane["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = __webpack_require__(45);

var _panes = __webpack_require__(53);

var _SelectionPane = _interopRequireDefault(__webpack_require__(649));

var _constants = __webpack_require__(12);

var _selectedRows = _interopRequireDefault(__webpack_require__(522));

var _state = __webpack_require__(3);

var _dataColumns = _interopRequireDefault(__webpack_require__(21));

function mapStateToProps(state) {
  var _selectedRowsSelector;

  return {
    selectedRows: (_selectedRowsSelector = (0, _selectedRows["default"])(state)) !== null && _selectedRowsSelector !== void 0 ? _selectedRowsSelector : _constants.emptyArray,
    fullDatasetColumns: (0, _dataColumns["default"])(state),
    selectionBreakdownField: state.filters.selectionBreakdownField
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _panes.setSidePane)());
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    },
    onSelectionBreakdownFieldChange: function onSelectionBreakdownFieldChange(field) {
      return dispatch((0, _filters.setSelectionBreakdownField)(field));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_SelectionPane["default"], mapStateToProps, mapDispatchToProps);

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

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _selectedIdsList = _interopRequireDefault(__webpack_require__(158));

var selectedIdsSetSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _selectedIdsList["default"])(state);
}, function (selectedIds) {
  return new Set(selectedIds);
});
var _default = selectedIdsSetSelector;
exports["default"] = _default;

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _ListSubheader = _interopRequireDefault(__webpack_require__(165));

var _react = _interopRequireDefault(__webpack_require__(1));

var _CloseRounded = _interopRequireDefault(__webpack_require__(39));

__webpack_require__(493);

var _UiIconButton = _interopRequireDefault(__webpack_require__(162));

var UiSidePaneHeader = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
    className: "mr-ui-side-pane-header",
    disableSticky: props.disableSticky
  }, props.title, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-actions"
  }, props.children, /*#__PURE__*/_react["default"].createElement(_UiIconButton["default"], {
    onClick: props.onClose
  }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], null))));
});

UiSidePaneHeader.displayName = "UiSidePaneHeader";
UiSidePaneHeader.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disableSticky: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].node.isRequired
};
var _default = UiSidePaneHeader;
exports["default"] = _default;

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeImage = shapeImage;
exports.linearGradientImage = linearGradientImage;

var _miniSvgDataUri = _interopRequireDefault(__webpack_require__(441));

var _phylocanvas = __webpack_require__(94);

/* eslint-disable no-lonely-if */

/* eslint-disable no-bitwise */
function drawShape(shape, x, y, radius, fillColour, highlightColour) {
  var borderWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
  var borderColour = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "rgba(0, 0, 0, 0.56)";

  if (radius <= 0 || !shape) {
    return "";
  }

  return _phylocanvas.Utils.drawVectorShape(shape, x, y, radius, fillColour, borderColour, borderWidth); // if (highlightColour) {
  //   // drawHalo(ctx, x, y, radius, highlightColour);
  //   ctx.strokeStyle = highlightColour;
  //   const lineWidth = ctx.lineWidth;
  //   ctx.lineWidth = defaults.highlight.width;
  //   ctx.beginPath();
  //   ctx.arc(x, y, radius + defaults.NODE_RADIUS + Math.floor((radius / defaults.NODE_RADIUS) / 2), 0, Math.PI * 2, false);
  //   ctx.closePath();
  //   ctx.stroke();
  //   ctx.lineWidth = lineWidth;
  // }
}

function shapeImage(width, height, size, shape, fillColour) {
  var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var borderColour = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "rgba(0, 0, 0, 0.56)";
  var shapeSvgElement = drawShape(shape, width / 2, height / 2, size);
  return (0, _miniSvgDataUri["default"])("\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"".concat(width, "\"\n      height=\"").concat(height, "\"\n    >\n      <g\n        fill=\"").concat(fillColour, "\"\n        stroke=\"").concat(borderColour, "\"\n        linewidth=\"").concat(borderWidth, "\"\n      >\n        ").concat(shapeSvgElement, "\n      </g>\n    </svg>\n  "));
}

function linearGradientImage(width, height, startColour, stopColour) {
  return (0, _miniSvgDataUri["default"])("\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"".concat(width, "\"\n      height=\"").concat(height, "\"\n    >\n      <defs>\n        <linearGradient\n          id=\"gradientDef\" \n          gradientTransform=\"rotate(90)\"\n        >\n          <stop offset=\"5%\"  stop-color=\"").concat(startColour, "\" />\n          <stop offset=\"95%\" stop-color=\"").concat(stopColour, "\" />\n        </linearGradient>\n      </defs>\n\n      <rect\n        x=\"0\"\n        y=\"0\"\n        width=\"").concat(width, "\"\n        height=\"").concat(height, "\"\n        fill=\"url(#gradientDef)\"\n      />\n    </svg>\n  ")).replace("#", "%23");
}

/***/ }),

/***/ 502:
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

__webpack_require__(492);

var _ShapeSvgImage = _interopRequireDefault(__webpack_require__(503));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ShapesLegend = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ShapesLegend, _React$PureComponent);

  var _super = _createSuper(ShapesLegend);

  function ShapesLegend() {
    (0, _classCallCheck2["default"])(this, ShapesLegend);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ShapesLegend, [{
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-legend-entries mr-shapes-legend",
        id: props.id
      }, this.props.entries.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          onClick: _this.props.onSelectQueryRows ? function (e) {
            return _this.props.onSelectQueryRows(item.value, e.metaKey || e.ctrlKey);
          } : undefined
        }, /*#__PURE__*/_react["default"].createElement(_ShapeSvgImage["default"], {
          shape: item.shape,
          colour: "transparent"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.label));
      }));
    }
  }]);
  return ShapesLegend;
}(_react["default"].PureComponent);

ShapesLegend.displayName = "ShapesLegend";
ShapesLegend.propTypes = {
  entries: _propTypes["default"].array.isRequired,
  id: _propTypes["default"].string.isRequired,
  onSelectQueryRows: _propTypes["default"].func
};
ShapesLegend.defaultProps = {
  shapeSize: 32
};
var _default = ShapesLegend;
exports["default"] = _default;

/***/ }),

/***/ 503:
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

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _svg = __webpack_require__(494);

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Shape = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Shape, _React$PureComponent);

  var _super = _createSuper(Shape);

  function Shape() {
    (0, _classCallCheck2["default"])(this, Shape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Shape, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("img", {
        width: this.props.width,
        height: this.props.height,
        src: (0, _svg.shapeImage)(this.props.width, this.props.height, this.props.size, this.props.shape, this.props.colour, this.props.borderWidth, this.props.borderColour)
      });
    }
  }]);
  return Shape;
}(_react["default"].PureComponent);

Shape.displayName = "Shape";
Shape.propTypes = {
  borderColour: _propTypes["default"].string,
  borderWidth: _propTypes["default"].number,
  colour: _propTypes["default"].string,
  height: _propTypes["default"].number,
  isHighlighted: _propTypes["default"].bool,
  shape: _propTypes["default"].string,
  size: _propTypes["default"].number,
  theme: _propTypes2.ThemeDef,
  width: _propTypes["default"].number
};
Shape.defaultProps = {
  borderColour: "rgba(0, 0, 0, 0.56)",
  borderWidth: 1,
  height: 32,
  shape: "circle",
  size: 7,
  width: 32
};
var _default = Shape;
exports["default"] = _default;

/***/ }),

/***/ 504:
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

__webpack_require__(492);

var _LinearGradientSvgImage = _interopRequireDefault(__webpack_require__(505));

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ColoursLegend = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ColoursLegend, _React$PureComponent);

  var _super = _createSuper(ColoursLegend);

  function ColoursLegend() {
    (0, _classCallCheck2["default"])(this, ColoursLegend);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColoursLegend, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if (props.scale === "discrete" || props.scale === "binned") {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-legend-entries",
          id: props.id
        }, props.entries.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            onClick: props.onSelectQueryRows ? function (e) {
              return props.onSelectQueryRows(item.value, e.metaKey || e.ctrlKey);
            } : undefined
          }, /*#__PURE__*/_react["default"].createElement("code", {
            style: {
              backgroundColor: item.colour
            }
          }), item.label);
        }));
      }

      if (props.scale === "continuous") {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-legend-entries",
          id: props.id
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "mr-legend-table",
          border: "0"
        }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            paddingLeft: "6px",
            minWidth: "16px"
          },
          rowSpan: "3"
        }, /*#__PURE__*/_react["default"].createElement(_LinearGradientSvgImage["default"], {
          width: 16,
          height: 120,
          startColour: props.entries[0].colour,
          stopColour: props.entries[1].colour
        })), /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            height: "20px",
            verticalAlign: "top",
            textAlign: "left"
          }
        }, "\xA0", props.entries[0].value)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            height: "*"
          }
        }, "\xA0")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            height: "20px",
            verticalAlign: "bottom",
            textAlign: "left"
          }
        }, "\xA0", props.entries[1].value)))));
      }

      return null;
    }
  }]);
  return ColoursLegend;
}(_react["default"].PureComponent);

ColoursLegend.displayName = "ColoursLegend";
ColoursLegend.propTypes = {
  entries: _propTypes["default"].array.isRequired,
  id: _propTypes["default"].string.isRequired,
  onSelectQueryRows: _propTypes["default"].func,
  scale: _propTypes["default"].string.isRequired
};
var _default = ColoursLegend;
exports["default"] = _default;

/***/ }),

/***/ 505:
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

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _svg = __webpack_require__(494);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LinearGradientSvgImage = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(LinearGradientSvgImage, _React$PureComponent);

  var _super = _createSuper(LinearGradientSvgImage);

  function LinearGradientSvgImage() {
    (0, _classCallCheck2["default"])(this, LinearGradientSvgImage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LinearGradientSvgImage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("img", {
        width: this.props.width,
        height: this.props.height,
        src: (0, _svg.linearGradientImage)(this.props.width, this.props.height, this.props.startColour, this.props.stopColour)
      });
    }
  }]);
  return LinearGradientSvgImage;
}(_react["default"].PureComponent);

LinearGradientSvgImage.displayName = "LinearGradientSvgImage";
LinearGradientSvgImage.propTypes = {
  height: _propTypes["default"].number,
  startColour: _propTypes["default"].string,
  stopColour: _propTypes["default"].string,
  width: _propTypes["default"].number
};
LinearGradientSvgImage.defaultProps = {
  height: 32,
  width: 32
};
var _default = LinearGradientSvgImage;
exports["default"] = _default;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _Typography = _interopRequireDefault(__webpack_require__(75));

var _WorkOutline = _interopRequireDefault(__webpack_require__(484));

__webpack_require__(647);

/* eslint-disable class-methods-use-this */
function UiEmptyState(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-ui-empty-state"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon"
  }, props.icon), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    color: "textPrimary"
  }, props.title), props.subtitle && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    color: "textPrimary"
  }, props.subtitle));
}

UiEmptyState.defaultProps = {
  icon: /*#__PURE__*/_react["default"].createElement(_WorkOutline["default"], null)
};
var _default = UiEmptyState;
exports["default"] = _default;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _rows = _interopRequireDefault(__webpack_require__(17));

var _selectedIdsSet = _interopRequireDefault(__webpack_require__(490));

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

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

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

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _AddCircleTwoTone = _interopRequireDefault(__webpack_require__(480));

var _CircularProgress = _interopRequireDefault(__webpack_require__(188));

var _ViewCompact = _interopRequireDefault(__webpack_require__(481));

var _MoreVert = _interopRequireDefault(__webpack_require__(482));

var _reactHashchange = _interopRequireDefault(__webpack_require__(483));

var _reactSortableHoc = __webpack_require__(442);

__webpack_require__(646);

var BrowserUtils = _interopRequireWildcard(__webpack_require__(20));

var _UiEmptyState = _interopRequireDefault(__webpack_require__(521));

var _UiIconButton = _interopRequireDefault(__webpack_require__(162));

var _UiSidePaneHeader = _interopRequireDefault(__webpack_require__(491));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(157));

var _arrays = __webpack_require__(26);

var _html = __webpack_require__(35);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SortableItem = (0, _reactSortableHoc.sortableElement)(function (props) {
  var _props$currentViewId;

  return /*#__PURE__*/_react["default"].createElement("li", {
    key: props.item.meta.id,
    className: (_props$currentViewId = props.currentViewId) !== null && _props$currentViewId !== void 0 && _props$currentViewId.startsWith(props.item.meta.id) ? "mr-views-item mr-selected" : "mr-views-item"
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _UiControlsButton["default"],
    icon: /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return props.onRenameView(props.item);
    }
  }, "Rename View"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return props.onResaveView(props.item);
    }
  }, "Update View"), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return props.onDeleteView(props.item);
    }
  }, "Delete View")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "mr-view-button",
    onClick: function onClick() {
      return props.onLoadView(props.item);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.item.meta.image
  }), /*#__PURE__*/_react["default"].createElement("span", null, props.item.meta.name)));
});
SortableItem.displayName = "ViewListItem";
SortableItem.propTypes = {
  item: _propTypes["default"].object.isRequired,
  onRenameView: _propTypes["default"].func.isRequired,
  onResaveView: _propTypes["default"].func.isRequired,
  onDownloadView: _propTypes["default"].func.isRequired
};
var SortableList = (0, _reactSortableHoc.sortableContainer)(function (props) {
  return /*#__PURE__*/_react["default"].createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(SortableItem, {
      index: index,
      key: item.meta.id,
      item: item,
      currentViewId: props.currentViewId,
      onRenameView: props.onRenameView,
      onResaveView: props.onResaveView,
      onDownloadView: props.onDownloadView,
      onLoadView: props.onLoadView
    });
  }));
});

var ViewsPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ViewsPane, _React$PureComponent);

  var _super = _createSuper(ViewsPane);

  function ViewsPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, ViewsPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isSaving: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCreateView", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      _this.setState({
        isSaving: true
      }, props.onCreateView);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRenameView", function (item) {
      var _assertThisInitialize2 = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize2.props;

      var name = window.prompt("Enter view title", item.meta.name); // eslint-disable-line no-alert

      if (name) {
        props.onRenameView(item, name);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSortEnd", function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;

      _this.props.onEntriesListChange((0, _arrays.swap)(_this.props.entries, oldIndex, newIndex));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderList", function (_ref2) {
      var hash = _ref2.hash;

      var _assertThisInitialize3 = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize3.props,
          state = _assertThisInitialize3.state;

      var currentViewId = BrowserUtils.getPageHash(hash);
      return /*#__PURE__*/_react["default"].createElement("ul", null, state.isSaving && /*#__PURE__*/_react["default"].createElement("li", {
        className: "mr-views-item"
      }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
        size: 80,
        thickness: 1
      })), /*#__PURE__*/_react["default"].createElement(SortableList, {
        currentViewId: currentViewId,
        items: props.entries // onDownloadView={props.onDownloadView}
        ,
        onLoadView: props.onLoadView,
        onRenameView: _this.handleRenameView,
        onResaveView: props.onResaveView,
        onSortEnd: _this.handleSortEnd,
        pressDelay: 640,
        helperContainer: _html.getContainerElement,
        helperClass: "mr-dragable"
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderContent", function () {
      var _assertThisInitialize4 = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize4.props,
          state = _assertThisInitialize4.state;

      if (props.entries.length === 0 && !state.isSaving) {
        return /*#__PURE__*/_react["default"].createElement(_UiEmptyState["default"] // title="No Views"
        , {
          subtitle: "You can add a new view by clicking the plus button",
          icon: /*#__PURE__*/_react["default"].createElement(_ViewCompact["default"], null)
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_reactHashchange["default"], {
        render: _this.renderList
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ViewsPane, [{
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-views-pane",
        "data-html2canvas-ignore": "true"
      }, /*#__PURE__*/_react["default"].createElement(_UiSidePaneHeader["default"], {
        onClose: props.onClose,
        title: "Views"
      }, /*#__PURE__*/_react["default"].createElement(_UiIconButton["default"], {
        onClick: this.handleCreateView,
        disabled: state.isSaving
      }, /*#__PURE__*/_react["default"].createElement(_AddCircleTwoTone["default"], null))), this.renderContent());
    }
  }]);
  return ViewsPane;
}(_react["default"].PureComponent);

ViewsPane.displayName = "ViewsPane";
ViewsPane.propTypes = {
  entries: _propTypes["default"].array.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onCreateView: _propTypes["default"].func.isRequired,
  onDeleteView: _propTypes["default"].func.isRequired,
  onEntriesListChange: _propTypes["default"].func.isRequired,
  onLoadView: _propTypes["default"].func.isRequired,
  onRenameView: _propTypes["default"].func.isRequired,
  onResaveView: _propTypes["default"].func.isRequired
};
var _default = ViewsPane;
exports["default"] = _default;

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewView = createNewView;
exports.deleteView = deleteView;
exports.renameView = renameView;
exports.setViewsList = setViewsList;
exports.resaveView = resaveView;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _hash = __webpack_require__(57);

var _ui = __webpack_require__(25);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function createViewDocument(doc) {
  doc.views = undefined;
  doc.files = undefined;
  doc.schema = undefined;
  doc.timestamp = undefined;
  doc.meta = {
    id: (0, _hash.generateHashId)(),
    name: "Unnamed View",
    image: doc.meta.image
  };
  return doc;
}

function createNewView() {
  return function (dispatch) {
    return dispatch((0, _ui.save)()).then(createViewDocument).then(function (doc) {
      return dispatch({
        type: "MICROREACT VIEWER/ADD VIEW",
        payload: doc,
        label: "Project: Add view"
      });
    });
  };
}

function deleteView(viewDocument) {
  return {
    type: "MICROREACT VIEWER/DELETE VIEW",
    payload: viewDocument,
    label: "Project: Delete view"
  };
} // export function loadView(viewDocument) {
//   return (dispatch, getState) => {
//     const state = getPresentState(getState());
//     setPageHash(viewDocument.meta.id);
//     return (
//       dispatch(
//         load(
//           {
//             ...viewDocument,
//             files: state.files,
//             meta: state.meta,
//             views: state.views,
//           }
//         )
//       )
//     );
//   };
// }


function renameView(viewDocument, name) {
  return {
    type: "MICROREACT VIEWER/UPDATE VIEW",
    label: "Project: Rename view",
    payload: _objectSpread(_objectSpread({}, viewDocument), {}, {
      meta: _objectSpread(_objectSpread({}, viewDocument.meta), {}, {
        name: name
      })
    })
  };
}

function setViewsList(viewsList) {
  return {
    type: "MICROREACT VIEWER/SET VIEWS LIST",
    payload: viewsList
  };
}

function resaveView(view) {
  return function (dispatch) {
    return dispatch((0, _ui.save)()).then(createViewDocument).then(function (doc) {
      doc.meta.id = view.meta.id;
      doc.meta.name = view.meta.name;
      return dispatch({
        type: "MICROREACT VIEWER/UPDATE VIEW",
        payload: doc,
        label: "Project: Update view"
      });
    });
  };
}

/***/ }),

/***/ 649:
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _reselect = __webpack_require__(11);

var _DonutSmall = _interopRequireDefault(__webpack_require__(486));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Typography = _interopRequireDefault(__webpack_require__(75));

var _ListSubheader = _interopRequireDefault(__webpack_require__(165));

__webpack_require__(650);

var _drawing = __webpack_require__(169);

var _ColoursLegend = _interopRequireDefault(__webpack_require__(504));

var _ShapesLegend = _interopRequireDefault(__webpack_require__(502));

var _UiEmptyState = _interopRequireDefault(__webpack_require__(521));

var _UiSidePaneHeader = _interopRequireDefault(__webpack_require__(491));

var _SelectionChart = _interopRequireDefault(__webpack_require__(651));

var _UiCombobox = _interopRequireDefault(__webpack_require__(27));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SelectionPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SelectionPane, _React$PureComponent);

  var _super = _createSuper(SelectionPane);

  function SelectionPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectionPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selectedColour: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slicesSelector", (0, _reselect.createSelector)(function (props) {
      return props.selectedRows;
    }, _drawing.getGroupedColours));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "coloursLegendEntriesSelector", (0, _reselect.createSelector)(function (props) {
      return props.selectedRows;
    }, function (_, state) {
      return state.selectedColour;
    }, function (rows, selectedColour) {
      var unique = {};

      var _iterator = _createForOfIteratorHelper(rows),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;

          if (!selectedColour || row["--microreact-colour"] === selectedColour) {
            var key = row["--microreact-colour"];

            if (key in unique) {
              unique[key].count += 1;
            } else {
              unique[key] = {
                count: 1,
                colour: row["--microreact-colour"],
                label: row["--microreact-colour-label"],
                value: row[0]
              };
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var items = Object.values(unique);

      for (var _i = 0, _items = items; _i < _items.length; _i++) {
        var item = _items[_i];
        item.label = "".concat(item.label, " (").concat(item.count, ")");
      }

      return items;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shapesLegendEntriesSelector", (0, _reselect.createSelector)(function (props) {
      return props.selectedRows;
    }, function (_, state) {
      return state.selectedColour;
    }, function (rows, selectedColour) {
      var unique = {};

      var _iterator2 = _createForOfIteratorHelper(rows),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;

          if (!selectedColour || row["--microreact-colour"] === selectedColour) {
            var key = row["--microreact-shape"];

            if (key in unique) {
              unique[key].count += 1;
            } else {
              unique[key] = {
                count: 1,
                shape: row["--microreact-shape"],
                label: row["--microreact-shape-label"],
                value: row[0]
              };
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var items = Object.values(unique);

      for (var _i2 = 0, _items2 = items; _i2 < _items2.length; _i2++) {
        var item = _items2[_i2];
        item.label = "".concat(item.label, " (").concat(item.count, ")");
      }

      return items;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signalListeners", {
      onItemSelect: function onItemSelect(_, _ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            event = _ref2[0],
            item = _ref2[1];

        _this.setState({
          selectedColour: item ? item["--microreact-colour"] : null
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(SelectionPane, [{
    key: "renderSelectionChart",
    value: function renderSelectionChart() {
      var props = this.props;

      if (props.selectedRows.length === 0) {
        return /*#__PURE__*/_react["default"].createElement(_UiEmptyState["default"], {
          title: "No Selection",
          subtitle: "Make a selection to see summary",
          icon: /*#__PURE__*/_react["default"].createElement(_DonutSmall["default"], null)
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SelectionChart["default"], {
        signalListeners: this.signalListeners
      }));
    }
  }, {
    key: "renderSelectedSlice",
    value: function renderSelectedSlice() {
      var props = this.props,
          state = this.state;

      if (props.selectedRows.length === 0) {
        return null;
      }

      if (!state.selectedColour) {
        return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "subtitle1",
          color: "textSecondary"
        }, "Select a chart slice to see details");
      }

      return /*#__PURE__*/_react["default"].createElement(_ShapesLegend["default"], {
        id: "selected-chart-slice-legend",
        entries: this.shapesLegendEntriesSelector(props, state)
      });
    }
  }, {
    key: "renderSelectionLegends",
    value: function renderSelectionLegends() {
      var props = this.props,
          state = this.state;

      if (props.selectedRows.length === 0) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
        component: "div"
      }, "Colours Legend"), /*#__PURE__*/_react["default"].createElement(_ColoursLegend["default"], {
        entries: this.shapesLegendEntriesSelector(props, state),
        id: "selection-colours-legend",
        scale: "discrete"
      }), /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
        component: "div"
      }, "Shapes Legend"), /*#__PURE__*/_react["default"].createElement(_ShapesLegend["default"], {
        id: "selection-shapes-legend",
        entries: this.shapesLegendEntriesSelector(props, state)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-selection-pane"
      }, /*#__PURE__*/_react["default"].createElement(_UiSidePaneHeader["default"], {
        onClose: props.onClose,
        title: "Selection Summary"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-selection-content"
      }, this.renderSelectionChart()));
    }
  }]);
  return SelectionPane;
}(_react["default"].PureComponent);

SelectionPane.displayName = "SelectionPane";
SelectionPane.propTypes = {
  onClose: _propTypes["default"].func.isRequired,
  onSelectRows: _propTypes["default"].func.isRequired,
  selectedRows: _propTypes["default"].array.isRequired
};
var _default = SelectionPane;
exports["default"] = _default;

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactVega = __webpack_require__(436);

var _selectionChartSpec = _interopRequireDefault(__webpack_require__(652));

var _selectionChartData = _interopRequireDefault(__webpack_require__(653));

var _state = __webpack_require__(3);

var onError = function onError(err) {
  return console.error("SelectionChart", err);
};

var onParseError = function onParseError(err) {
  return console.error("SelectionChart", err);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    className: "mr-timeline-filtered-range-chart",
    data: (0, _selectionChartData["default"])(state),
    onError: onError,
    onParseError: onParseError,
    spec: (0, _selectionChartSpec["default"])(state) // onNewView: console.debug,

  };
};

var mapDispatchToProps = null;

var _default = (0, _state.connectToPresentStateWithRef)(_reactVega.Vega, mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(11);

var _charts = __webpack_require__(156);

var _config = _interopRequireDefault(__webpack_require__(50));

var _paneSize = _interopRequireDefault(__webpack_require__(487));

var _colourMapForField = _interopRequireDefault(__webpack_require__(95));

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(52));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function colourMapToScale(colourMap) {
  var domain = [];
  var range = [];

  var _iterator = _createForOfIteratorHelper(colourMap.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
          value = _step$value[0],
          colour = _step$value[1];

      domain.push(value);
      range.push(colour);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    domain: domain,
    range: range
  };
}

var selectionChartSpecSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _paneSize["default"])(state, "--mr-selection-pane");
}, function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (state) {
  return (0, _config["default"])(state);
}, function (state) {
  return state.filters.selectionBreakdownField;
}, function (state) {
  return state.filters.selectionBreakdownField ? (0, _colourMapForField["default"])(state, state.filters.selectionBreakdownField) : null;
}, function (size, coloursDataColumn, defaults, selectionBreakdownField, selectionBreakdownColourMap) {
  var vlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    autosize: {
      contains: "padding",
      type: "fit"
    },
    bounds: "flush",
    data: {
      name: "table"
    },
    view: {
      stroke: null
    },
    height: size.width,
    padding: {
      left: 0,
      top: 2,
      right: 0,
      bottom: 8
    },
    width: size.width - 32,
    layer: [{
      transform: [{
        aggregate: [{
          op: "sum",
          field: "--mr-scalar",
          as: "--mr-selection-colour-frequency"
        }],
        groupby: [coloursDataColumn.name, "--microreact-colour"]
      }],
      mark: {
        type: "arc",
        innerRadius: 33,
        outerRadius: 100
      },
      encoding: {
        theta: {
          // aggregate: "count",
          // field: coloursDataColumn.name,
          field: "--mr-selection-colour-frequency",
          type: "quantitative",
          stack: "normalize"
        },
        color: {
          field: "--microreact-colour",
          type: "nominal",
          legend: false,
          scale: false
        },
        strokeWidth: {
          value: 2
        },
        stroke: {
          value: defaults.theme.background.main
        },
        tooltip: [{
          field: coloursDataColumn.name,
          title: coloursDataColumn.name,
          type: "nominal"
        }, {
          field: "--mr-selection-colour-frequency",
          title: "Number of entries",
          type: "quantitative"
        }]
      }
    } // {
    //   data: { name: "table2" },
    //   "mark": {"type": "arc", "innerRadius": 50, "outerRadius": 100 },
    //   "encoding": {
    //     "theta": {"field": "value", "type": "quantitative", "stack": "normalize"},
    //     "color": {"field": "category", "type": "nominal", legend: false}
    //   }
    // }
    ]
  };

  if (selectionBreakdownField) {
    vlSpec.layer.push({
      transform: [{
        aggregate: [{
          op: "sum",
          field: "--mr-scalar",
          as: "--mr-selection-details-frequency"
        }],
        groupby: [coloursDataColumn.name, "--microreact-colour", selectionBreakdownField]
      }],
      mark: {
        type: "arc",
        innerRadius: 66,
        outerRadius: 100
      },
      encoding: {
        theta: {
          field: "--mr-selection-details-frequency",
          type: "quantitative",
          stack: "normalize"
        },
        color: {
          field: selectionBreakdownField,
          type: "nominal",
          scale: colourMapToScale(selectionBreakdownColourMap),
          legend: false
        },
        strokeWidth: {
          value: 2
        },
        stroke: {
          value: defaults.theme.background.main
        },
        tooltip: [{
          field: selectionBreakdownField,
          title: selectionBreakdownField,
          type: "nominal"
        }, {
          field: "--mr-selection-details-frequency",
          title: "Number of entries",
          type: "quantitative"
        }]
      }
    });
  }

  var vgSpec = (0, _charts.vegaLiteToVega)(vlSpec);
  return vgSpec;
});
var _default = selectionChartSpecSelector;
exports["default"] = _default;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _constants = __webpack_require__(12);

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(52));

var _activeRowsWithStyleFields = _interopRequireDefault(__webpack_require__(166));

var _selectedRows = _interopRequireDefault(__webpack_require__(522));

var selectionChartDataSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _selectedRows["default"])(state);
}, function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (state) {
  return (0, _activeRowsWithStyleFields["default"])(state);
}, function (selectedRows, coloursDataColumn) {
  var rows = [{
    "category": 1,
    "value": 4
  }, {
    "category": 2,
    "value": 6
  }, {
    "category": 3,
    "value": 10
  }, {
    "category": 4,
    "value": 3
  }, {
    "category": 5,
    "value": 7
  }, {
    "category": 6,
    "value": 8
  }];
  return {
    table: selectedRows !== null && selectedRows !== void 0 ? selectedRows : _constants.emptyArray // table2: [
    //   {"category": 1, "value": 4},
    //   {"category": 2, "value": 6},
    // ],

  };
});
var _default = selectionChartDataSelector;
exports["default"] = _default;

/***/ })

}]);