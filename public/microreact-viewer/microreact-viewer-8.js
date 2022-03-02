(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[8],{

/***/ 467:
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

var _SlicerPane = _interopRequireDefault(__webpack_require__(599));

var _isValidSlicer = _interopRequireDefault(__webpack_require__(605));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var slicerId = _ref.slicerId;
  return {
    componentName: "Slicer",
    isEmpty: !(0, _isValidSlicer["default"])(state, slicerId),
    PaneComponent: _SlicerPane["default"],
    paneId: slicerId,
    emptyLabel: "Choose column"
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var slicerId = _ref2.slicerId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(slicerId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_PanePlaceholder["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _layoutModel = _interopRequireDefault(__webpack_require__(41));

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

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(499);

var _propTypes2 = __webpack_require__(14);

var _PaneIcon = _interopRequireDefault(__webpack_require__(55));

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

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _sets = __webpack_require__(44);

var _text = __webpack_require__(71);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _filteredFieldIds = _interopRequireDefault(__webpack_require__(185));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _filteredNonDataIds = _interopRequireDefault(__webpack_require__(182));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var blankItem = {
  name: undefined,
  label: "(blank)"
};
var filteredDataIdsSelector = (0, _state.createCombinedStateSelector)(function (state, field) {
  return state.filters.dataFilters.map(function (x) {
    return x.field;
  }).filter(function (x) {
    return x !== field;
  });
}, _filteredFieldIds["default"], function (sets) {
  return (0, _sets.intersect)(sets.filter(function (x) {
    return x !== undefined;
  }));
});
var filterableValuesSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _filteredNonDataIds["default"])(state);
}, function (state, field) {
  return filteredDataIdsSelector(state, field);
}, function (_, field) {
  return field;
}, function (fieldsMap, rows, filteredNonDataIds, filteredDataIds, field) {
  var dataColumn = fieldsMap.get(field);
  var uniqueValues = new Set();
  var hasBlanks = false;

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      var value = row[dataColumn.name];

      if (value == null || value === undefined) {
        hasBlanks = true;
      } else if (!uniqueValues.has(value) && (!filteredNonDataIds || filteredNonDataIds.has(row[0])) && (!filteredDataIds || filteredDataIds.has(row[0]))) {
        uniqueValues.add(value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var items = [];

  if (hasBlanks) {
    items.push(blankItem);
  }

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
});
var _default = filterableValuesSelector;
exports["default"] = _default;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filterableValues = _interopRequireDefault(__webpack_require__(505));

var _filters = __webpack_require__(51);

var _dataFieldFilter = _interopRequireDefault(__webpack_require__(168));

var _state = __webpack_require__(2);

var _DataColumnFilterByValues = _interopRequireDefault(__webpack_require__(512));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var field = _ref.field;
  return {
    uniqueValues: (0, _filterableValues["default"])(state, field),
    filter: (0, _dataFieldFilter["default"])(state, field)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var field = _ref2.field;
  return {
    onColumnFilterChange: function onColumnFilterChange(operator, value) {
      return dispatch((0, _filters.setFieldFilter)(field, operator, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_DataColumnFilterByValues["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _Box = _interopRequireDefault(__webpack_require__(23));

var _Divider = _interopRequireDefault(__webpack_require__(97));

var _propTypes2 = __webpack_require__(14);

var _UiSelectList = _interopRequireDefault(__webpack_require__(170));

var _UiFloatingFilter = _interopRequireDefault(__webpack_require__(103));

var _constants = __webpack_require__(12);

var DataColumnFilterByValues = /*#__PURE__*/_react["default"].memo(function (props) {
  var valuesFilter = props.filter && props.filter.operator === "in" ? props.filter : undefined;
  var selectedValues = valuesFilter ? valuesFilter.value : _constants.emptyArray;
  return /*#__PURE__*/_react["default"].createElement(_UiFloatingFilter["default"], {
    items: props.uniqueValues,
    label: "Search",
    valueGetter: function valueGetter(x) {
      var _x$label, _x$label$toString;

      return (_x$label = x.label) === null || _x$label === void 0 ? void 0 : (_x$label$toString = _x$label.toString()) === null || _x$label$toString === void 0 ? void 0 : _x$label$toString.toLowerCase();
    },
    renderItems: function renderItems(items) {
      var _props$height;

      return /*#__PURE__*/_react["default"].createElement(_UiSelectList["default"] // boxed={false}
      , {
        disableSelectAll: true,
        items: items,
        onChange: function onChange(selection) {
          props.onColumnFilterChange(selection.length > 0 ? "in" : null, selection);
        },
        style: {
          height: 40 + props.uniqueValues.length * 28,
          maxHeight: (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : "max(144px, calc(60vh - 256px))"
        },
        value: selectedValues
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    alignItems: "center",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "primary",
    disabled: selectedValues.length === 0,
    onClick: function onClick() {
      return props.onColumnFilterChange(null);
    }
  }, "Clear")));
});

DataColumnFilterByValues.displayName = "DataColumnFilterByValues";
DataColumnFilterByValues.propTypes = {
  filter: _propTypes2.DataFilter,
  height: _propTypes["default"].number,
  onColumnFilterChange: _propTypes["default"].func.isRequired,
  uniqueValues: _propTypes["default"].array
};
var _default = DataColumnFilterByValues;
exports["default"] = _default;

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SlicerPane = _interopRequireDefault(__webpack_require__(600));

var _filters = __webpack_require__(51);

var _chartAxisType = _interopRequireDefault(__webpack_require__(189));

var _chartData = _interopRequireDefault(__webpack_require__(603));

var _chartSpec = _interopRequireDefault(__webpack_require__(604));

var _dataColumn = _interopRequireDefault(__webpack_require__(107));

var _state = __webpack_require__(2);

var _ui = __webpack_require__(27);

var _slicerState = _interopRequireDefault(__webpack_require__(75));

var _config = _interopRequireDefault(__webpack_require__(50));

// import dataFieldFilterSelector from "../selectors/filters/data-field-filter";
function mapStateToProps(state, _ref) {
  var slicerId = _ref.slicerId;
  var dataColumn = (0, _dataColumn["default"])(state, slicerId);
  var slicerState = (0, _slicerState["default"])(state, slicerId);
  return {
    chartAxisType: (0, _chartAxisType["default"])(state, slicerId),
    chartData: (0, _chartData["default"])(state, slicerId),
    chartSpec: (0, _chartSpec["default"])(state, slicerId),
    dataColumn: dataColumn,
    isReadOnly: (0, _config["default"])(state).readOnly,
    slicerType: slicerState.slicerType
  };
}

function mapDispatchToProps(dispatch, _ref2) {
  var slicerId = _ref2.slicerId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(slicerId));
    },
    onColumnFilterChange: function onColumnFilterChange(field, operator, value) {
      return dispatch((0, _filters.setFieldFilter)(field, operator, value));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_SlicerPane["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(19));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactVega = __webpack_require__(447);

var _lodash = _interopRequireDefault(__webpack_require__(449));

__webpack_require__(601);

var _charts = __webpack_require__(161);

var _downloads = __webpack_require__(53);

var _DataColumnFilterByValues = _interopRequireDefault(__webpack_require__(511));

var _SlicerControls = _interopRequireDefault(__webpack_require__(602));

var _propTypes2 = __webpack_require__(14);

var _constants = __webpack_require__(12);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// const scrollStyle = {
//   overflow: "auto",
// };
var SlicerPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SlicerPane, _React$PureComponent);

  var _super = _createSuper(SlicerPane);

  function SlicerPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, SlicerPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      vegaError: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "vegaRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFilterChange", function (selection, append) {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      var field = _this.props.dataColumn.name;

      if (selection.length === 0) {
        props.onColumnFilterChange(field, null);
      } else if (props.chartAxisType === "quantitative") {
        var filterRange = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

        if (append && props.filter && props.filter.operator === "between") {
          filterRange[0] = props.filter.value[0];
          filterRange[1] = props.filter.value[1];
        }

        var _iterator = _createForOfIteratorHelper(selection),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var selectedRange = _step.value;
            var rangePoints = selectedRange.split("–");
            var rangeStart = parseFloat(rangePoints[0]);
            var rangeEnd = parseFloat(rangePoints[1]);

            if (rangeStart < filterRange[0]) {
              filterRange[0] = rangeStart;
            }

            if (rangeEnd > filterRange[1]) {
              filterRange[1] = rangeEnd;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        props.onColumnFilterChange(field, "between", filterRange);
      } else {
        var values = selection;

        if (append && props.filter && props.filter.operator === "in" && props.filter.value) {
          values = Array.from(new Set([].concat((0, _toConsumableArray2["default"])(selection), (0, _toConsumableArray2["default"])(props.filter.value))));
        }

        props.onColumnFilterChange(field, "in", values);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "debouncedFilterChange", (0, _lodash["default"])(_this.handleFilterChange, 200));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signalListeners", {
      onItemSelect: function onItemSelect(_) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [],
            _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            event = _ref2[0],
            item = _ref2[1];

        // console.debug(_, event, item)
        var _assertThisInitialize2 = (0, _assertThisInitialized2["default"])(_this),
            props = _assertThisInitialize2.props;

        event === null || event === void 0 ? void 0 : event.stopPropagation();

        if (item) {
          var key = props.chartAxisType === "quantitative" ? Object.keys(item).find(function (x) {
            return x.endsWith("_range");
          }) : props.dataColumn.name;

          if (key in item) {
            _this.debouncedFilterChange([item[key]], event.metaKey || event.ctrilKey);
          }
        } else {
          _this.debouncedFilterChange([]);
        }
      },
      brush: function brush(_, item) {
        var _assertThisInitialize3 = (0, _assertThisInitialized2["default"])(_this),
            props = _assertThisInitialize3.props;

        var field = props.dataColumn.name;
        var selection = field in item ? item[field] : _constants.emptyArray;

        _this.debouncedFilterChange(selection);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadPNG", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var dataUrl;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _charts.exportPNG)(_this.vegaRef.current);

            case 2:
              dataUrl = _context.sent;
              (0, _downloads.downloadDataUrl)(dataUrl, "data-slicer-chart.png", "image/png");

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadSVG", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var dataUrl;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _charts.exportSVG)(_this.vegaRef.current);

            case 2:
              dataUrl = _context2.sent;
              (0, _downloads.downloadDataUrl)(dataUrl, "data-slicer-chart.svg", "image/svg+xml");

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    return _this;
  }

  (0, _createClass2["default"])(SlicerPane, [{
    key: "renderSlicer",
    value: function renderSlicer() {
      var props = this.props;

      if (props.slicerType === "chart" && props.chartSpec) {
        return /*#__PURE__*/_react["default"].createElement(_reactVega.Vega, {
          data: this.props.chartData,
          logLevel: 2,
          onError: console.error,
          onParseError: console.error // onNewView={console.debug}
          ,
          ref: this.vegaRef,
          signalListeners: this.signalListeners,
          spec: props.chartSpec
        });
      }

      if (props.slicerType === "values") {
        return /*#__PURE__*/_react["default"].createElement(_DataColumnFilterByValues["default"], {
          field: props.dataColumn.name,
          height: props.height - 64
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-slicer" // style={scrollStyle}

      }, this.renderSlicer(), /*#__PURE__*/_react["default"].createElement(_SlicerControls["default"], {
        isReadOnly: props.isReadOnly,
        onDownloadPNG: this.downloadPNG,
        onDownloadSVG: this.downloadSVG,
        onEditPane: props.onEditPane,
        slicerId: props.slicerId,
        slicerType: props.slicerType
      }));
    }
  }]);
  return SlicerPane;
}(_react["default"].PureComponent);

SlicerPane.propTypes = {
  chartAxisType: _propTypes["default"].string,
  chartData: _propTypes2.ChartDataTable.isRequired,
  chartSpec: _propTypes["default"].object,
  dataColumn: _propTypes2.DataColumn.isRequired,
  filter: _propTypes2.DataFilter,
  height: _propTypes["default"].number.isRequired,
  isReadOnly: _propTypes["default"].bool.isRequired,
  onColumnFilterChange: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  slicerId: _propTypes["default"].string.isRequired,
  slicerType: _propTypes["default"].string.isRequired
};
var _default = SlicerPane;
exports["default"] = _default;

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Menu = _interopRequireDefault(__webpack_require__(163));

var _Divider = _interopRequireDefault(__webpack_require__(97));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(162));

var SlicerControls = /*#__PURE__*/_react["default"].memo(function (props) {
  var isChart = props.slicerType === "chart";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-main-controls"
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _UiControlsButton["default"],
    icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
  }, !props.isReadOnly && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onEditPane
  }, "Edit Data Slicer"), isChart && /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), isChart && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onDownloadPNG
  }, "Download as PNG image"), isChart && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onDownloadSVG
  }, "Download as SVG image")));
});

SlicerControls.displayName = "SlicerControls";
SlicerControls.propTypes = {
  isReadOnly: _propTypes["default"].bool.isRequired,
  onDownloadPNG: _propTypes["default"].func.isRequired,
  onDownloadSVG: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  slicerId: _propTypes["default"].string.isRequired,
  slicerType: _propTypes["default"].string.isRequired
};
var _default = SlicerControls;
exports["default"] = _default;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rows = _interopRequireDefault(__webpack_require__(17));

var _dataColumn = _interopRequireDefault(__webpack_require__(107));

var _slicerState = _interopRequireDefault(__webpack_require__(75));

var _state = __webpack_require__(2);

var chartDataSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _rows["default"])(state);
}, function (state, slicerId) {
  return (0, _dataColumn["default"])(state, slicerId);
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).includedValues;
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).dataValues;
}, function (rows, dataColumn, includedValues, dataValues) {
  if (includedValues === "custom" && dataValues && dataValues.length > 0) {
    var table = [];

    for (var index = 0; index < rows.length; index++) {
      var _row$dataColumn$name;

      var row = rows[index];

      if (dataValues.includes((_row$dataColumn$name = row[dataColumn.name]) === null || _row$dataColumn$name === void 0 ? void 0 : _row$dataColumn$name.toString())) {
        table.push(row);
      }
    }

    return {
      table: table
    };
  } else {
    return {
      table: rows
    };
  }
});
var _default = chartDataSelector;
exports["default"] = _default;

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _charts = __webpack_require__(161);

var _config = _interopRequireDefault(__webpack_require__(50));

var _dataColumn = _interopRequireDefault(__webpack_require__(107));

var _paneSize = _interopRequireDefault(__webpack_require__(497));

var _chartAxisType = _interopRequireDefault(__webpack_require__(189));

var _slicerState = _interopRequireDefault(__webpack_require__(75));

var chartSpecSelector = (0, _state.createKeyedStateSelector)(function (state, slicerId) {
  return (0, _dataColumn["default"])(state, slicerId);
}, function (state, slicerId) {
  return (0, _chartAxisType["default"])(state, slicerId);
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).chartMainAxis;
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).includedValues;
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).topNValues;
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).chartOrder;
}, function (state, slicerId) {
  return (0, _slicerState["default"])(state, slicerId).chartMaxBins;
}, function (state, slicerId) {
  return (0, _paneSize["default"])(state, slicerId);
}, function (state) {
  return (0, _config["default"])(state);
}, function (dataColumn, axisType, chartMainAxis, includedValues, topNValues, chartOrder, chartMaxBins, size, defaults) {
  var isBinned = axisType === "quantitative";
  var binnedFieldName = "bin_maxbins_".concat(chartMaxBins, "_").concat(dataColumn.name, "_range");
  var vlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    autosize: {
      contains: "padding",
      type: "fit"
    },
    bounds: "flush",
    config: {
      axis: {
        labelFont: defaults.fontFamily,
        labelFontSize: 11
      },
      view: {
        stroke: "transparent"
      }
    },
    data: {
      name: "table"
    },
    mark: "bar",
    encoding: {
      x: {
        field: dataColumn.name,
        type: isBinned ? "ordinal" : axisType,
        axis: {
          title: null
        },
        bin: isBinned ? {
          maxbins: chartMaxBins
        } : false,
        sort: chartOrder !== "alphabetical" ? {
          op: "count",
          order: chartOrder
        } : undefined
      },
      y: {
        aggregate: "sum",
        field: "--mr-scalar",
        type: "quantitative",
        axis: {
          title: null
        }
      },
      fill: {
        value: defaults.theme.primary.light
      },
      strokeWidth: {
        value: 1
      },
      stroke: {
        value: defaults.theme.background.main
      },
      tooltip: [{
        field: isBinned ? binnedFieldName : dataColumn.name,
        type: "nominal",
        title: dataColumn.name
      }, {
        field: "sum_--mr-scalar",
        type: "quantitative",
        title: "Entries"
      }]
    },
    height: size.height,
    padding: {
      left: 8,
      top: 24,
      right: 8,
      bottom: 8
    },
    width: size.width,
    selection: {
      brush: {
        type: "interval",
        encodings: [chartMainAxis]
      }
    }
  };

  if (includedValues === "top" && topNValues && Number.isInteger(topNValues) && topNValues > 0) {
    vlSpec.encoding.y.field = "count";
    vlSpec.encoding.y.aggregate = undefined;
    vlSpec.transform = [{
      aggregate: [{
        op: "count",
        as: "count"
      }],
      groupby: [dataColumn.name]
    }, {
      window: [{
        op: "rank",
        as: "rank"
      }],
      sort: [{
        field: "count",
        order: "descending"
      }]
    }, {
      filter: "datum.rank <= ".concat(topNValues)
    }];

    if (vlSpec.encoding.x.sort) {
      vlSpec.encoding.x.sort.op = undefined;
      vlSpec.encoding.x.sort.field = "rank";
      vlSpec.encoding.x.sort.order = vlSpec.encoding.x.sort.order === "descending" ? "ascending" : "descending";
    }

    vlSpec.encoding.tooltip[1].field = "count";
  }

  if (chartMainAxis === "y") {
    var mainAxis = vlSpec.encoding.x;
    vlSpec.encoding.x = vlSpec.encoding.y;
    vlSpec.encoding.y = mainAxis;
  }

  var vgSpec = (0, _charts.vegaLiteToVega)(vlSpec);
  return vgSpec;
});
var _default = chartSpecSelector;
exports["default"] = _default;

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicerState = _interopRequireDefault(__webpack_require__(75));

function isValidSlicerSelector(state, slicerId) {
  var slicerState = (0, _slicerState["default"])(state, slicerId);
  return slicerState.field;
}

var _default = isValidSlicerSelector;
exports["default"] = _default;

/***/ })

}]);