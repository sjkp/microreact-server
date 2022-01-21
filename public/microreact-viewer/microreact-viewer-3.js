(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[3],{

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = __webpack_require__(51);

var _panes = __webpack_require__(58);

var _styles = __webpack_require__(82);

var _LegendPane = _interopRequireDefault(__webpack_require__(546));

var _legends = _interopRequireDefault(__webpack_require__(553));

var _state = __webpack_require__(2);

function mapStateToProps(state) {
  return {
    direction: state.styles.legendDirection,
    legends: (0, _legends["default"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _panes.setSidePane)());
    },
    onDirectionChange: function onDirectionChange(direction) {
      return dispatch((0, _styles.setLegendDirection)(direction));
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_LegendPane["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _clsx = _interopRequireDefault(__webpack_require__(119));

var _Divider = _interopRequireDefault(__webpack_require__(96));

var _htmlsvg = _interopRequireDefault(__webpack_require__(457));

var _ListSubheader = _interopRequireDefault(__webpack_require__(71));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(508);

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiIconButton = _interopRequireDefault(__webpack_require__(176));

var _constants = __webpack_require__(12);

var _LegendsList = _interopRequireDefault(__webpack_require__(519));

var _html = __webpack_require__(35);

var _downloads = __webpack_require__(53);

var _UiSidePaneHeader = _interopRequireDefault(__webpack_require__(500));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LegendPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(LegendPane, _React$PureComponent);

  var _super = _createSuper(LegendPane);

  function LegendPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, LegendPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "elRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadSvg", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(legendId) {
        var htmlElement;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                htmlElement = _this.elRef.current.querySelector("[id=\"".concat(legendId, "\"]"));
                _context.next = 3;
                return (0, _htmlsvg["default"])(htmlElement, {
                  downloadSvg: true,
                  downloadPng: false,
                  convertDataUrl: false,
                  // you need to convert images to dataurl if you wanna download png image
                  filename: legendId
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadPng", function (legendId) {
      var htmlElement = _this.elRef.current.querySelector("[id=\"".concat(legendId, "\"]"));

      (0, _html.exportHtmlElementAsDataUrl)(htmlElement).then(function (url) {
        return (0, _downloads.downloadDataUrl)(url, "legend.png", "image/png");
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(LegendPane, [{
    key: "renderExportMenu",
    value: function renderExportMenu() {
      var _this2 = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
        button: _UiIconButton["default"],
        icon: _constants.icons.menu
      }, props.legends.length > 1 && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
        onClick: function onClick() {
          return props.onDirectionChange(props.direction === "row" ? "column" : "row");
        }
      }, props.direction === "row" ? "Stack Vertically" : "Stack Horizontally"), props.legends.length > 1 && /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, "Download as SVG"), props.legends.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
          key: item.id,
          onClick: function onClick() {
            return _this2.downloadSvg(item.id);
          }
        }, item.title);
      }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, "Download as PNG"), props.legends.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
          key: item.id,
          onClick: function onClick() {
            return _this2.downloadPng(item.id);
          }
        }, item.title);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-legend-pane"
      }, /*#__PURE__*/_react["default"].createElement(_UiSidePaneHeader["default"], {
        disableSticky: true,
        onClose: props.onClose,
        title: "Legend"
      }, this.renderExportMenu()), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _clsx["default"])("mr-legends", props.direction === "row" ? "mr-stack-horizontally" : "mr-stack-vertically"),
        ref: this.elRef
      }, /*#__PURE__*/_react["default"].createElement(_LegendsList["default"], {
        legends: props.legends
      })));
    }
  }]);
  return LegendPane;
}(_react["default"].PureComponent);

LegendPane.displayName = "Legend";
LegendPane.propTypes = {
  direction: _propTypes["default"].string.isRequired,
  legends: _propTypes["default"].array.isRequired,
  onDirectionChange: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func.isRequired
};
var _default = LegendPane;
exports["default"] = _default;

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(10);

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(57));

var _shapesDataColumn = _interopRequireDefault(__webpack_require__(108));

var _allTreesMetadataFields = _interopRequireDefault(__webpack_require__(554));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var legendsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (state) {
  return (0, _shapesDataColumn["default"])(state);
}, function (state) {
  return (0, _allTreesMetadataFields["default"])(state);
}, function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (colourColumn, shapeColumn, treesMetadataFields, columnsByFieldMapSelector) {
  var legends = [];

  if (colourColumn) {
    legends.push({
      field: colourColumn.name,
      title: "Colours by ".concat(columnsByFieldMapSelector.get(colourColumn.name).label),
      type: "colours",
      id: "".concat(colourColumn.name, "-colours")
    });
  }

  if (shapeColumn) {
    legends.push({
      field: shapeColumn.name,
      title: "Shapes by ".concat(columnsByFieldMapSelector.get(shapeColumn.name).label),
      type: "shapes",
      id: "".concat(colourColumn.name, "-shapes")
    });
  }

  var _iterator = _createForOfIteratorHelper(treesMetadataFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      var dataColumn = columnsByFieldMapSelector.get(field);

      if (dataColumn && field !== (colourColumn === null || colourColumn === void 0 ? void 0 : colourColumn.name)) {
        legends.push({
          field: field,
          type: "colours",
          title: "Colours by ".concat(columnsByFieldMapSelector.get(field).label),
          id: "".concat(field, "-colours")
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return legends;
});
var _default = legendsSelector;
exports["default"] = _default;

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _sets = __webpack_require__(42);

var _metadataFields = _interopRequireDefault(__webpack_require__(555));

var _constants = __webpack_require__(12);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var allTreesMetadataFieldsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.trees;
}, _metadataFields["default"], function (arriesOfFields) {
  if (arriesOfFields.length === 0) {
    return _constants.emptyArray;
  } else if (arriesOfFields.length === 1) {
    return arriesOfFields[0];
  } else {
    var union = new Set();

    var _iterator = _createForOfIteratorHelper(arriesOfFields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var array = _step.value;

        var _iterator2 = _createForOfIteratorHelper(array),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var element = _step2.value;
            union.add(element);
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

    return Array.from(union);
  }
});
var _default = allTreesMetadataFieldsSelector;
exports["default"] = _default;

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = __webpack_require__(12);

var _treeState = _interopRequireDefault(__webpack_require__(60));

var metadataFieldsSelector = function metadataFieldsSelector(state, treeId) {
  return (0, _treeState["default"])(state, treeId).blocks || _constants.emptyArray;
};

var _default = metadataFieldsSelector;
exports["default"] = _default;

/***/ })

}]);