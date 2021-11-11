(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[10],{

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ui = __webpack_require__(26);

var _isValidTimeline = _interopRequireDefault(__webpack_require__(614));

var _state = __webpack_require__(2);

var _PanePlaceholder = _interopRequireDefault(__webpack_require__(494));

var _TimelinePane = _interopRequireDefault(__webpack_require__(615));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  return {
    componentName: "Timeline",
    isEmpty: !(0, _isValidTimeline["default"])(state, timelineId),
    PaneComponent: _TimelinePane["default"],
    paneId: timelineId
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var timelineId = _ref2.timelineId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(timelineId));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_PanePlaceholder["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _layoutModel = _interopRequireDefault(__webpack_require__(39));

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

/***/ 494:
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

__webpack_require__(495);

var _propTypes2 = __webpack_require__(14);

var _PaneIcon = _interopRequireDefault(__webpack_require__(53));

var _FileLoader = _interopRequireDefault(__webpack_require__(164));

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

/***/ 495:
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

var _reselect = __webpack_require__(10);

var _selectedIdsList = _interopRequireDefault(__webpack_require__(162));

var selectedIdsSetSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _selectedIdsList["default"])(state);
}, function (selectedIds) {
  return new Set(selectedIds);
});
var _default = selectedIdsSetSelector;
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

var _datetime = __webpack_require__(54);

var _state = __webpack_require__(2);

var _paneSize = _interopRequireDefault(__webpack_require__(493));

var _dataExtent = _interopRequireDefault(__webpack_require__(622));

var autoUnitSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _dataExtent["default"])(state, timelineId);
}, function (state, timelineId) {
  return (0, _paneSize["default"])(state, timelineId);
}, function (filterExtent, size) {
  if (filterExtent) {
    var unit = (0, _datetime.unitFromRange)(filterExtent, size.width / 4);
    return unit;
  }

  return null;
});

var filteredRangeUnitSelector = function filteredRangeUnitSelector(state, timelineId) {
  var _state$timelines$time;

  return (_state$timelines$time = state.timelines[timelineId].unit) !== null && _state$timelines$time !== void 0 ? _state$timelines$time : autoUnitSelector(state, timelineId);
};

var _default = filteredRangeUnitSelector;
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _constants = __webpack_require__(12);

var _datetime = __webpack_require__(54);

var _state = __webpack_require__(2);

var _paneSize = _interopRequireDefault(__webpack_require__(493));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _rowsWithDateField = _interopRequireDefault(__webpack_require__(101));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var fullRangeUnitSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _rowsWithDateField["default"])(state, timelineId);
}, function (state, timelineId) {
  return (0, _paneSize["default"])(state, timelineId);
}, function (_ref, size) {
  var extent = _ref.extent;

  if (extent) {
    return (0, _datetime.unitFromRange)(extent, size.width / 8);
  } else {
    return "day";
  }
});
var fullRangeChartDataSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _rowsWithDateField["default"])(state, timelineId);
}, function (state, timelineId) {
  return fullRangeUnitSelector(state, timelineId);
}, function (state) {
  return (0, _rows["default"])(state);
}, function (_ref2, unit, rows) {
  var dateFieldName = _ref2.dateFieldName;
  var dataset = _constants.emptyArray;

  if (dateFieldName) {
    var groups = {};

    var _iterator = _createForOfIteratorHelper(rows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (row[dateFieldName]) {
          var _row$MrScalar;

          var rowCount = (_row$MrScalar = row["--mr-scalar"]) !== null && _row$MrScalar !== void 0 ? _row$MrScalar : 1;
          var unitLabel = (0, _datetime.toUnitString)(row[dateFieldName], unit);

          if (unitLabel in groups) {
            groups[unitLabel].groupCount += rowCount;
          } else {
            var _boundsOf = (0, _datetime.boundsOf)(row[dateFieldName], unit),
                _boundsOf2 = (0, _slicedToArray2["default"])(_boundsOf, 2),
                unitStartDate = _boundsOf2[0],
                unitEndDate = _boundsOf2[1];

            groups[unitLabel] = {
              unitLabel: unitLabel,
              unitStartDate: unitStartDate,
              unitEndDate: unitEndDate,
              groupCount: rowCount
            };
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    dataset = Object.values(groups);
    dataset.sort(function (a, b) {
      return a.unitStartDate - b.unitStartDate;
    });
  }

  return {
    dataset: dataset
  };
});
var _default = fullRangeChartDataSelector;
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

var _bounds = _interopRequireDefault(__webpack_require__(196));

var _fullRangeExtent = _interopRequireDefault(__webpack_require__(524));

function filteredRangeExtentSelector(state, timelineId) {
  return (0, _bounds["default"])(state, timelineId) || (0, _fullRangeExtent["default"])(state, timelineId);
}

var _default = filteredRangeExtentSelector;
exports["default"] = _default;

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _fullRangeChartData = _interopRequireDefault(__webpack_require__(511));

var fullRangeExtentSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _fullRangeChartData["default"])(state, timelineId);
}, function (_ref) {
  var dataset = _ref.dataset;

  if (dataset && dataset.length) {
    return [dataset[0].unitStartDate.valueOf(), dataset[dataset.length - 1].unitEndDate.valueOf()];
  } else {
    return null;
  }
});
var _default = fullRangeExtentSelector;
exports["default"] = _default;

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _timelineState = _interopRequireDefault(__webpack_require__(208));

function isValidNetworkSelector(state, timelineId) {
  var timelineState = (0, _timelineState["default"])(state, timelineId);
  return timelineState.dataType && (timelineState.yearField || timelineState.valueField);
}

var _default = isValidNetworkSelector;
exports["default"] = _default;

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _TimelinePane = _interopRequireDefault(__webpack_require__(616));

var _timelines = __webpack_require__(74);

var _filteredRangeExtent = _interopRequireDefault(__webpack_require__(512));

var _filteredRangeUnit = _interopRequireDefault(__webpack_require__(504));

// import chartDataSelector from "../selectors/timelines/chart-data";
// import chartSpecSelector from "../selectors/timelines/chart-spec";
var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  // const timelineState = state.timelines[timelineId];
  return {
    // chartData: chartDataSelector(state, timelineId),
    // chartSpec: chartSpecSelector(state, timelineId),
    bounds: (0, _filteredRangeExtent["default"])(state, timelineId),
    unit: (0, _filteredRangeUnit["default"])(state, timelineId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var timelineId = _ref2.timelineId;
  return {
    onSelectItem: function onSelectItem(item, merge) {
      return dispatch((0, _timelines.selectItem)(timelineId, item, merge));
    },
    onChange: function onChange(bounds) {
      return dispatch((0, _timelines.setFilter)(timelineId, bounds));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_TimelinePane["default"]);

exports["default"] = _default;

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(18));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Paper = _interopRequireDefault(__webpack_require__(36));

var _InputBase = _interopRequireDefault(__webpack_require__(475));

var _Divider = _interopRequireDefault(__webpack_require__(93));

__webpack_require__(617);

var Datetime = _interopRequireWildcard(__webpack_require__(54));

var _downloads = __webpack_require__(50);

var _TimelineSlider = _interopRequireDefault(__webpack_require__(618));

var _TimelineControls = _interopRequireDefault(__webpack_require__(621));

var _TimelineFullRangeChart = _interopRequireDefault(__webpack_require__(624));

var _TimelineFilteredRangeChart = _interopRequireDefault(__webpack_require__(626));

var _charts = __webpack_require__(159);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function formatRange(bounds, unit) {
  var length = Datetime.rangeLength(bounds, unit);
  return "".concat(length, " ").concat(unit).concat(length !== 1 ? "s" : "");
}

var TimelinePane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TimelinePane, _React$PureComponent);

  var _super = _createSuper(TimelinePane);

  function TimelinePane() {
    var _this;

    (0, _classCallCheck2["default"])(this, TimelinePane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      vegaError: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredRangeChartRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signalListeners", {
      onItemSelect: function onItemSelect(_, _ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            event = _ref2[0],
            item = _ref2[1];

        if (item) {
          _this.props.onSelectItem(item, event.metaKey || event.ctrilKey);
        } else {
          _this.props.onSelectItem(false);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadPNG", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var dataUrl;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _charts.exportPNG)(_this.filteredRangeChartRef.current);

            case 2:
              dataUrl = _context.sent;
              (0, _downloads.downloadDataUrl)(dataUrl, "timeline.png", "image/png");

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
              return (0, _charts.exportSVG)(_this.filteredRangeChartRef.current);

            case 2:
              dataUrl = _context2.sent;
              (0, _downloads.downloadDataUrl)(dataUrl, "timeline.svg", "image/svg+xml");

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMinBoundChange", function (event) {
      var timestamp = Datetime.ISODateToTimestamp(event.target.value);

      if (Datetime.isTimestamp(timestamp)) {
        var bounds = (0, _toConsumableArray2["default"])(_this.props.bounds);
        bounds[0] = timestamp;

        _this.props.onChange(bounds);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMaxBoundChange", function (event) {
      var timestamp = Datetime.ISODateToTimestamp(event.target.value);

      if (Datetime.isTimestamp(timestamp)) {
        var bounds = (0, _toConsumableArray2["default"])(_this.props.bounds);
        bounds[1] = timestamp;

        _this.props.onChange(bounds);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(TimelinePane, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if (props.bounds === null) {
        return false;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-timeline-pane",
        style: {
          height: props.height,
          width: props.width
        }
      }, /*#__PURE__*/_react["default"].createElement(_TimelineFilteredRangeChart["default"], {
        timelineId: props.timelineId,
        signalListeners: this.signalListeners,
        ref: this.filteredRangeChartRef
      }), /*#__PURE__*/_react["default"].createElement(_TimelineFullRangeChart["default"], {
        timelineId: props.timelineId
      }), /*#__PURE__*/_react["default"].createElement(_TimelineSlider["default"], {
        timelineId: props.timelineId,
        width: props.width - 32,
        height: 48
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-time-range"
      }, /*#__PURE__*/_react["default"].createElement(_Paper["default"] // className="mr-time-bounds"
      , null, /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
        onChange: this.handleMinBoundChange,
        type: "date",
        value: Datetime.timestampToISODate(props.bounds[0])
      }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
        orientation: "vertical"
      }), /*#__PURE__*/_react["default"].createElement("span", null, formatRange(props.bounds, props.unit)), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
        orientation: "vertical"
      }), /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
        onChange: this.handleMaxBoundChange,
        type: "date",
        value: Datetime.timestampToISODate(props.bounds[1])
      }))), /*#__PURE__*/_react["default"].createElement(_TimelineControls["default"], {
        onDownloadPNG: this.downloadPNG,
        onDownloadSVG: this.downloadSVG,
        timelineId: props.timelineId
      }));
    }
  }]);
  return TimelinePane;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(TimelinePane, "propTypes", {
  // chartData: PropTypes.shape({
  //   dataset: PropTypes.arrayOf(
  //     PropTypes.object.isRequired,
  //   ).isRequired,
  // }).isRequired,
  timelineId: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  controls: _propTypes["default"].bool,
  height: _propTypes["default"].number.isRequired,
  onSelectItem: _propTypes["default"].func.isRequired,
  chartSpec: _propTypes["default"].object,
  width: _propTypes["default"].number.isRequired
});
var _default = TimelinePane;
exports["default"] = _default;

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _timelines = __webpack_require__(74);

var _TimelineSlider = _interopRequireDefault(__webpack_require__(619));

var _fullRangeExtent = _interopRequireDefault(__webpack_require__(524));

var _filteredRangeExtent = _interopRequireDefault(__webpack_require__(512));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  var dataBounds = (0, _fullRangeExtent["default"])(state, timelineId);
  return {
    max: dataBounds[1],
    min: dataBounds[0],
    value: (0, _filteredRangeExtent["default"])(state, timelineId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var timelineId = _ref2.timelineId;
  return {
    onChange: function onChange(bounds) {
      return dispatch((0, _timelines.setFilter)(timelineId, bounds));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_TimelineSlider["default"]);

exports["default"] = _default;

/***/ }),

/***/ 619:
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactRnd = __webpack_require__(476);

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _lodash = _interopRequireDefault(__webpack_require__(445));

var _classnames = _interopRequireDefault(__webpack_require__(13));

__webpack_require__(620);

var Datetime = _interopRequireWildcard(__webpack_require__(54));

var _browser = __webpack_require__(19);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      isDragging: false,
      bounds: null,
      pointer: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", (0, _lodash["default"])(function (bounds) {
      if (_this.state.bounds && (_this.state.isDragging || _this.state.isBrushing)) {
        _this.props.onChange(bounds);
      }
    }, 200));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventPoint", function (event) {
      return event.pageX - _this.props.padding;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBrushMouseDown", function (event) {
      _this.setState({
        isBrushing: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBrushMouseMove", function (event) {
      var x = _this.eventPoint(event);

      if (_this.state.isBrushing) {
        var _this$state$brushX;

        if (((_this$state$brushX = _this.state.brushX) !== null && _this$state$brushX !== void 0 ? _this$state$brushX : undefined) === undefined) {
          _this.setState({
            pointerX: null,
            brushX: _this.state.pointerX
          });
        } else {
          var bounds = _this.pixelsToBounds(Math.min(_this.state.brushX, x), Math.abs(_this.state.brushX - x));

          _this.setState({
            bounds: bounds
          });

          _this.onChange(bounds);
        }
      } else {
        _this.setState({
          pointerX: x
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBrushMouseUp", function (event) {
      if (_this.state.isBrushing) {
        var x = _this.eventPoint(event);

        if (x !== _this.state.brushX && _this.state.brushX) {
          var bounds = _this.pixelsToBounds(Math.min(_this.state.brushX, x), Math.abs(_this.state.brushX - x));

          _this.setState({
            bounds: bounds
          });

          _this.props.onChange(bounds);

          (0, _browser.nextFrame)(function () {
            return _this.setState({
              bounds: null,
              pointerX: null,
              brushX: null,
              isBrushing: false
            });
          });
        } else {
          _this.setState({
            bounds: null,
            pointerX: null,
            brushX: null,
            isBrushing: false
          });
        }
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(_default, [{
    key: "valueToPixel",
    value: function valueToPixel(value) {
      var dataRange = this.props.max - this.props.min;
      var pixel = (value - this.props.min) / dataRange * this.props.width;
      return pixel;
    }
  }, {
    key: "boundsToPixels",
    value: function boundsToPixels(bounds) {
      // TODO: use `scaleUtc`
      var dataRange = this.props.max - this.props.min;
      var sliderStart = (bounds[0] - this.props.min) / dataRange * this.props.width;
      var sliderEnd = (bounds[1] - this.props.min) / dataRange * this.props.width;
      return {
        start: sliderStart,
        width: sliderEnd - sliderStart
      };
    }
  }, {
    key: "pixelsToBounds",
    value: function pixelsToBounds(start, width) {
      var dataRange = this.props.max - this.props.min;
      var sliderStart = start / this.props.width * dataRange;
      var sliderEnd = (start + width) / this.props.width * dataRange;
      return [Math.max(sliderStart + this.props.min, this.props.min), Math.min(sliderEnd + this.props.min, this.props.max)];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;

      if (props.value === null) {
        return null;
      }

      var timeBounds = this.state.bounds || props.value;
      var sliderBounds = this.boundsToPixels(timeBounds);
      var trackSize = {
        width: sliderBounds.width,
        height: 16
      };
      var trackPosition = {
        x: sliderBounds.start,
        y: 0
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("mr-timeline-slider", {
          "mr-is-brushing": this.state.isBrushing
        }),
        style: {
          width: props.width,
          height: props.height
        },
        onMouseUp: this.handleBrushMouseUp
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-range-box",
        style: {
          height: props.height,
          top: 0,
          left: trackPosition.x,
          width: sliderBounds.width
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-dimmers",
        style: {
          width: props.width,
          height: props.height
        },
        onMouseMove: this.handleBrushMouseMove,
        onMouseDown: this.handleBrushMouseDown
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-dimmer-before",
        style: {
          width: sliderBounds.start
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-dimmer-after",
        style: {
          width: props.width - trackSize.width - sliderBounds.start
        }
      }), this.state.pointerX && !this.state.isDragging && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-brush-pointer",
        style: {
          left: this.state.pointerX + 1
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-slider-rail",
        style: {
          top: props.height - trackSize.height,
          height: trackSize.height
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactRnd.Rnd, {
        bounds: "parent",
        minWidth: 1,
        maxWidth: props.width,
        minHeight: trackSize.height,
        maxHeight: trackSize.height,
        position: trackPosition,
        size: trackSize,
        onDrag: function onDrag(e, delta) {
          var bounds = _this2.pixelsToBounds(delta.x > 0 ? delta.x : 0, sliderBounds.width);

          _this2.setState({
            bounds: bounds,
            isDragging: true
          });

          _this2.onChange(bounds);
        },
        onDragStop: function onDragStop(e, delta) {
          var bounds = _this2.pixelsToBounds(delta.x > 0 ? delta.x : 0, sliderBounds.width);

          _this2.setState({
            bounds: bounds,
            isDragging: false
          });

          props.onChange(bounds);
          (0, _browser.nextFrame)(function () {
            return _this2.setState({
              bounds: null,
              isDragging: false
            });
          });
        },
        onResize: function onResize(e, direction, ref, delta, position) {
          var bounds = _this2.pixelsToBounds(position.x > 0 ? position.x : 0, ref.offsetWidth);

          _this2.setState({
            bounds: bounds,
            isDragging: true
          });

          _this2.onChange(bounds);
        },
        onResizeStop: function onResizeStop(e, direction, ref, delta, position) {
          var bounds = _this2.pixelsToBounds(position.x > 0 ? position.x : 0, ref.offsetWidth);

          _this2.setState({
            bounds: bounds,
            isDragging: false
          });

          props.onChange(bounds);
          (0, _browser.nextFrame)(function () {
            return _this2.setState({
              bounds: null,
              isDragging: false
            });
          });
        },
        className: "mr-slider-track",
        enableResizing: {
          top: false,
          right: true,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        },
        dragAxis: "x",
        resizeHandleClasses: {
          left: "mr-slider-handle",
          right: "mr-slider-handle"
        },
        resizeHandleStyles: {
          left: {
            height: props.height,
            width: 4,
            left: -2,
            top: trackSize.height - props.height
          },
          right: {
            height: props.height,
            width: 4,
            right: -2,
            top: trackSize.height - props.height
          }
        },
        resizeHandleComponent: {
          left: /*#__PURE__*/_react["default"].createElement("div", {
            title: Datetime.timestampToDateString(props.value[0]),
            style: {
              height: "100%"
            },
            onDoubleClick: function onDoubleClick() {
              return props.onChange([props.min, props.value[1]]);
            }
          }),
          right: /*#__PURE__*/_react["default"].createElement("div", {
            title: Datetime.timestampToDateString(props.value[1]),
            style: {
              height: "100%"
            },
            onDoubleClick: function onDoubleClick() {
              return props.onChange([props.value[0], props.max]);
            }
          })
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("mr-range-info", {
          "mr-visible": this.state.isDragging || this.state.isBrushing
        })
      }, Datetime.rangeToDurationDistance(timeBounds)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-track-hover",
        title: "Drag to move range"
      }))));
    }
  }]);
  return _default;
}(_react["default"].PureComponent);

exports["default"] = _default;
(0, _defineProperty2["default"])(_default, "displayName", "TimelineSlider");
(0, _defineProperty2["default"])(_default, "propTypes", {
  height: _propTypes["default"].number,
  max: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  trackSize: _propTypes["default"].number,
  value: _propTypes["default"].arrayOf(_propTypes["default"].number.isRequired).isRequired,
  width: _propTypes["default"].number.isRequired,
  padding: _propTypes["default"].number
});
(0, _defineProperty2["default"])(_default, "defaultProps", {
  height: 12,
  trackSize: 4,
  padding: 16
});

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _timelines = __webpack_require__(74);

var _ui = __webpack_require__(26);

var _dataColumns = _interopRequireDefault(__webpack_require__(20));

var _fullRangeChartData = _interopRequireDefault(__webpack_require__(511));

var _filteredRangeExtent = _interopRequireDefault(__webpack_require__(512));

var _filteredRangeUnit = _interopRequireDefault(__webpack_require__(504));

var _state = __webpack_require__(2);

var _TimelineControls = _interopRequireDefault(__webpack_require__(623));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  var timelineState = state.timelines[timelineId];
  return {
    controls: timelineState.controls,
    maxNodeSize: 160,
    minNodeSize: 14,
    nodeSize: timelineState.nodeSize,
    speed: timelineState.speed,
    style: timelineState.style,
    laneField: timelineState.laneField,
    silderTemporalRange: (0, _filteredRangeExtent["default"])(state, timelineId),
    fullRangeChartData: (0, _fullRangeChartData["default"])(state, timelineId),
    unit: timelineState.unit,
    dataFields: (0, _dataColumns["default"])(state),
    chartUnit: (0, _filteredRangeUnit["default"])(state, timelineId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var timelineId = _ref2.timelineId;
  return {
    onBoundsChange: function onBoundsChange(bounds) {
      return dispatch((0, _timelines.setFilter)(timelineId, bounds));
    },
    onControlsChange: function onControlsChange(value) {
      return dispatch((0, _timelines.update)(timelineId, "controls", value));
    },
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(timelineId));
    },
    onNodeSizeChange: function onNodeSizeChange(value) {
      return dispatch((0, _timelines.update)(timelineId, "nodeSize", value));
    },
    onSpeedChange: function onSpeedChange(value) {
      return dispatch((0, _timelines.update)(timelineId, "speed", value));
    },
    onStackByFieldChange: function onStackByFieldChange(value) {
      return dispatch((0, _timelines.update)(timelineId, "laneField", value));
    },
    onStyleChange: function onStyleChange(value) {
      return dispatch((0, _timelines.update)(timelineId, "style", value));
    },
    onUnitChange: function onUnitChange(value) {
      return dispatch((0, _timelines.update)(timelineId, "unit", value || null));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TimelineControls["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _rowsWithDateField = _interopRequireDefault(__webpack_require__(101));

var _activeRowsWithStyleFields = _interopRequireDefault(__webpack_require__(96));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dataExtentSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _rowsWithDateField["default"])(state, timelineId);
}, function (state) {
  return (0, _activeRowsWithStyleFields["default"])(state);
}, function (_ref, _ref2) {
  var dateFieldName = _ref.dateFieldName;
  var rows = _ref2.rows;

  if (dateFieldName) {
    var minDate = Number.MAX_SAFE_INTEGER;
    var maxDate = Number.MIN_SAFE_INTEGER;

    var _iterator = _createForOfIteratorHelper(rows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (row[dateFieldName]) {
          if (row[dateFieldName] < minDate) {
            minDate = row[dateFieldName];
          }

          if (row[dateFieldName] > maxDate) {
            maxDate = row[dateFieldName];
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return [minDate, maxDate];
  } else {
    return null;
  }
});
var _default = dataExtentSelector;
exports["default"] = _default;

/***/ }),

/***/ 623:
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _FastForwardRounded = _interopRequireDefault(__webpack_require__(477));

var _FastRewindRounded = _interopRequireDefault(__webpack_require__(478));

var _PauseRounded = _interopRequireDefault(__webpack_require__(479));

var _PlayArrowRounded = _interopRequireDefault(__webpack_require__(480));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SkipNextRounded = _interopRequireDefault(__webpack_require__(481));

var _SkipPreviousRounded = _interopRequireDefault(__webpack_require__(482));

var _Slider = _interopRequireDefault(__webpack_require__(108));

var _Menu = _interopRequireDefault(__webpack_require__(161));

var _Divider = _interopRequireDefault(__webpack_require__(93));

var _reselect = __webpack_require__(10);

var _constants = __webpack_require__(12);

var _propTypes2 = __webpack_require__(14);

var _Animation = _interopRequireDefault(__webpack_require__(165));

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(163));

var _UiRadioList = _interopRequireDefault(__webpack_require__(98));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(160));

var _UiFieldsList = _interopRequireDefault(__webpack_require__(107));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var timelineSyles = [{
  label: "Bar Chart",
  value: "bar"
}, {
  label: "Normalised Bar Chart",
  value: "normalised-bar"
} // { label: "Bubble Chart", value: "bubble" },
];
var timelineUnits = Object.entries(_constants.timeUnits).map(function (_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      value = _ref2[0],
      label = _ref2[1];

  return {
    value: value,
    label: label
  };
});

var TimelineControls = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TimelineControls, _React$PureComponent);

  var _super = _createSuper(TimelineControls);

  function TimelineControls() {
    var _this;

    (0, _classCallCheck2["default"])(this, TimelineControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isPlaying: false,
      isMovingWindow: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "marksSelector", (0, _reselect.createSelector)(function (props) {
      return props.fullRangeChartData;
    }, function (_ref3) {
      var dataset = _ref3.dataset;
      var marks = [];

      if (dataset && dataset.length) {
        var _iterator = _createForOfIteratorHelper(dataset),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var binData = _step.value;
            marks.push(binData.unitStartDate.valueOf());
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        marks.push(dataset[dataset.length - 1].unitEndDate.valueOf());
      }

      return marks;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "boundsIndecies", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      var _props$silderTemporal = (0, _slicedToArray2["default"])(props.silderTemporalRange, 2),
          lowerTimestamp = _props$silderTemporal[0],
          upperTimestamp = _props$silderTemporal[1];

      var marks = _this.marksSelector(props);

      var lowerIndex;
      var upperIndex;

      var _iterator2 = _createForOfIteratorHelper(marks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mark = _step2.value;

          if (lowerIndex === undefined && mark >= lowerTimestamp) {
            lowerIndex = marks.indexOf(mark);
          }

          if (mark <= upperTimestamp) {
            upperIndex = marks.indexOf(mark);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return [lowerIndex, upperIndex];
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "moveBounds", function (startDelta, endDelta) {
      var _assertThisInitialize2 = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize2.props;

      var _this$boundsIndecies = _this.boundsIndecies(),
          _this$boundsIndecies2 = (0, _slicedToArray2["default"])(_this$boundsIndecies, 2),
          lowerIndex = _this$boundsIndecies2[0],
          upperIndex = _this$boundsIndecies2[1];

      var minIndex = lowerIndex + startDelta;
      var maxIndex = upperIndex + endDelta;

      var marks = _this.marksSelector(props);

      if (minIndex >= 0 && maxIndex <= marks.length - 1) {
        props.onBoundsChange([marks[minIndex], marks[maxIndex]]);
      }

      return maxIndex >= marks.length - 1;
    });
    return _this;
  }

  (0, _createClass2["default"])(TimelineControls, [{
    key: "componentWillUnmount",
    value: // componentDidUpdate(prevProps, prevState) {
    //   if (prevState.isPlaying !== this.state.isPlaying) {
    //     if (this.state.isPlaying) {
    //       this.startTimelinePlay();
    //     } else {
    //       this.stopTimelinePlay();
    //     }
    //   }
    // }
    function componentWillUnmount() {
      this.stopTimelinePlay();
    }
  }, {
    key: "playTimeline",
    value: function playTimeline(event) {
      if (this.state.isPlaying) {
        this.stopTimelinePlay();
        this.setState({
          isPlaying: false
        });
      } else {
        this.startTimelinePlay();
        this.setState({
          isPlaying: true,
          isMovingWindow: event.metaKey || event.ctrlKey
        });
      }
    }
  }, {
    key: "startTimelinePlay",
    value: function startTimelinePlay() {
      this.props.onUnitChange(this.props.chartUnit);
      this.timerTick(true);
    }
  }, {
    key: "stopTimelinePlay",
    value: function stopTimelinePlay() {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
      }

      this.timeoutID = null;
    }
  }, {
    key: "timerTick",
    value: function timerTick() {
      var _this2 = this;

      var rewind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var props = this.props;
      var isFinished = this.moveBounds(this.state.isMovingWindow ? +1 : 0, +1);

      if (isFinished) {
        if (rewind) {
          var _this$boundsIndecies3 = this.boundsIndecies(),
              _this$boundsIndecies4 = (0, _slicedToArray2["default"])(_this$boundsIndecies3, 2),
              lowerIndex = _this$boundsIndecies4[0],
              upperIndex = _this$boundsIndecies4[1];

          this.moveBounds(-lowerIndex, 1 - upperIndex);
          this.timeoutID = setTimeout(function () {
            return _this2.timerTick();
          }, props.speed * 1000);
        } else {
          this.setState({
            isPlaying: false
          });
        }
      } else {
        this.timeoutID = setTimeout(function () {
          return _this2.timerTick();
        }, props.speed * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-main-controls"
      }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
        button: _UiControlsButton["default"],
        icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
      }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
        onClick: props.onEditPane
      }, "Edit Timeline"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
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
      }, /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
        onClick: function onClick() {
          var _this3$boundsIndecies = _this3.boundsIndecies(),
              _this3$boundsIndecies2 = (0, _slicedToArray2["default"])(_this3$boundsIndecies, 2),
              upperIndex = _this3$boundsIndecies2[1];

          var marks = _this3.marksSelector(props);

          var delta = marks.length - 1 - upperIndex;

          if (delta > 0) {
            _this3.moveBounds(delta, delta);
          }
        }
      }, /*#__PURE__*/_react["default"].createElement(_SkipNextRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
        onClick: function onClick() {
          return _this3.moveBounds(+1, +1);
        }
      }, /*#__PURE__*/_react["default"].createElement(_FastForwardRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
        onClick: function onClick(event) {
          return _this3.playTimeline(event);
        },
        title: this.state.isPlaying ? "Pause" : "Play timeline. Hold Ctrl/Cmd + click for moving window."
      }, this.state.isPlaying ? /*#__PURE__*/_react["default"].createElement(_PauseRounded["default"], null) : /*#__PURE__*/_react["default"].createElement(_PlayArrowRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
        onClick: function onClick() {
          return _this3.moveBounds(-1, -1);
        }
      }, /*#__PURE__*/_react["default"].createElement(_FastRewindRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
        onClick: function onClick() {
          var _this3$boundsIndecies3 = _this3.boundsIndecies(),
              _this3$boundsIndecies4 = (0, _slicedToArray2["default"])(_this3$boundsIndecies3, 1),
              lowerIndex = _this3$boundsIndecies4[0];

          if (lowerIndex > 0) {
            _this3.moveBounds(-lowerIndex, -lowerIndex);
          }
        }
      }, /*#__PURE__*/_react["default"].createElement(_SkipPreviousRounded["default"], null)), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
        title: "Speed",
        hideOnClick: true
      }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
        items: Object.keys(_constants.timeSpeeds).map(function (key) {
          return {
            value: key,
            label: "1 ".concat(props.chartUnit, " per ").concat(_constants.timeSpeeds[key])
          };
        }),
        onChange: function onChange(value) {
          return props.onSpeedChange(parseInt(value, 10));
        },
        value: props.speed.toString()
      })), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
        title: "Unit",
        hideOnClick: true
      }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
        nullable: true,
        nullOptionLabel: "Auto",
        items: timelineUnits,
        onChange: props.onUnitChange,
        value: props.unit
      })), props.style === "bubble" && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
        title: "Stack by",
        hideOnClick: true,
        onClear: props.laneField && function () {
          return props.onStackByFieldChange();
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiFieldsList["default"], {
        columns: props.dataFields,
        onChange: function onChange(value) {
          return props.onStackByFieldChange(value);
        },
        value: props.laneField
      })), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
        className: "mr-timeline-points-menu",
        title: "Type"
      }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
        items: timelineSyles,
        onChange: props.onStyleChange,
        value: props.style
      }), props.style === "bubble" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("label", null, "Max Bubble Size: ", /*#__PURE__*/_react["default"].createElement("strong", null, props.nodeSize), " pixels"), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
        max: props.maxNodeSize,
        min: props.minNodeSize,
        onChange: function onChange(event, value) {
          return props.onNodeSizeChange(value);
        },
        value: props.nodeSize
      })))));
    }
  }]);
  return TimelineControls;
}(_react["default"].PureComponent);

exports["default"] = TimelineControls;
TimelineControls.displayName = "TimelineControls";
TimelineControls.propTypes = {
  controls: _propTypes["default"].bool.isRequired,
  dataFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  laneField: _propTypes["default"].string,
  maxNodeSize: _propTypes["default"].number.isRequired,
  minNodeSize: _propTypes["default"].number.isRequired,
  nodeSize: _propTypes["default"].number.isRequired,
  onBoundsChange: _propTypes["default"].func.isRequired,
  onControlsChange: _propTypes["default"].func.isRequired,
  onDownloadPNG: _propTypes["default"].func.isRequired,
  onDownloadSVG: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  onNodeSizeChange: _propTypes["default"].func.isRequired,
  onSpeedChange: _propTypes["default"].func.isRequired,
  onStackByFieldChange: _propTypes["default"].func.isRequired,
  onStyleChange: _propTypes["default"].func.isRequired,
  onUnitChange: _propTypes["default"].func.isRequired,
  silderTemporalRange: _propTypes["default"].array.isRequired,
  speed: _propTypes["default"].number.isRequired,
  style: _propTypes["default"].string.isRequired,
  unit: _propTypes["default"].string
};

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _reactVega = __webpack_require__(443);

var _fullRangeChartSpec = _interopRequireDefault(__webpack_require__(625));

var _fullRangeChartData = _interopRequireDefault(__webpack_require__(511));

var onError = function onError(err) {
  return console.error("Timeline", err);
};

var onParseError = function onParseError(err) {
  return console.error("Timeline", err);
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  return {
    data: (0, _fullRangeChartData["default"])(state, timelineId),
    onError: onError,
    onParseError: onParseError,
    spec: (0, _fullRangeChartSpec["default"])(state, timelineId),
    className: "mr-timeline-full-range-chart"
  };
};

var mapDispatchToProps = null;

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_reactVega.Vega);

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

var _state = __webpack_require__(2);

var _config = _interopRequireDefault(__webpack_require__(51));

var _paneSize = _interopRequireDefault(__webpack_require__(493));

var fullRangeChartSpecSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _paneSize["default"])(state, timelineId);
}, function (state) {
  return (0, _config["default"])(state);
}, function (size, defaults) {
  var vlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    autosize: {
      contains: "padding",
      type: "fit"
    },
    bounds: "flush",
    data: {
      name: "dataset"
    },
    mark: {
      type: "rect"
    },
    config: {
      view: {
        stroke: "transparent"
      }
    },
    encoding: {
      x: {
        field: "unitStartDate",
        type: "temporal",
        axis: {
          title: null,
          grid: false,
          tickExtra: true,
          bandPosition: 1,
          padding: 0,
          tickColor: defaults.theme.primary.main,
          tickSize: 3,
          // tickWidth: 0,
          // domainWidth: 0,
          labelAlign: {
            condition: [{
              test: {
                field: "index",
                equal: 0
              },
              value: "left"
            }, {
              test: {
                field: "index",
                equal: 1
              },
              value: "right"
            }],
            value: "center"
          }
        } // scale: { domain: dataTemporalRange },

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
      // strokeOpacity: {
      //   value: 0.1,
      // },
      x2: {
        field: "unitEndDate",
        type: "temporal",
        axis: null
      },
      y: {
        // aggregate: "sum",
        field: "groupCount",
        type: "quantitative",
        axis: null
      } // tooltip: [
      //   {
      //     field: "startDate",
      //     type: "temporal",
      //     title: "From",
      //   },
      //   {
      //     field: "endDate",
      //     type: "temporal",
      //     title: "To",
      //   },
      //   {
      //     field: "rows",
      //     title: "Number of entries",
      //   },
      // ],

    },
    height: 48,
    padding: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 2
    },
    width: size.width - 32
  };
  return vlSpec;
});
var _default = fullRangeChartSpecSelector;
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

var _reactVega = __webpack_require__(443);

var _vegaTooltip = __webpack_require__(446);

var _filteredRangeChartData = _interopRequireDefault(__webpack_require__(627));

var _filteredRangeChartSpec = _interopRequireDefault(__webpack_require__(628));

var _state = __webpack_require__(2);

var onError = function onError(err) {
  return console.error("Timeline", err);
};

var onParseError = function onParseError(err) {
  return console.error("Timeline", err);
};

var handler = new _vegaTooltip.Handler({
  theme: "timeline"
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var timelineId = _ref.timelineId;
  return {
    className: "mr-timeline-filtered-range-chart",
    data: (0, _filteredRangeChartData["default"])(state, timelineId),
    onError: onError,
    onParseError: onParseError,
    spec: (0, _filteredRangeChartSpec["default"])(state, timelineId),
    tooltip: handler.call
  };
};

var mapDispatchToProps = null;

var _default = (0, _state.connectToPresentStateWithRef)(_reactVega.Vega, mapStateToProps, mapDispatchToProps);

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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _state = __webpack_require__(2);

var _selectedIdsSet = _interopRequireDefault(__webpack_require__(496));

var _rowsWithDateField = _interopRequireDefault(__webpack_require__(101));

var _filteredRangeUnit = _interopRequireDefault(__webpack_require__(504));

var _activeRowsWithStyleFields = _interopRequireDefault(__webpack_require__(96));

var _datetime = __webpack_require__(54);

var _constants = __webpack_require__(12);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var chartDataSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _rowsWithDateField["default"])(state, timelineId);
}, function (state, timelineId) {
  return (0, _filteredRangeUnit["default"])(state, timelineId);
}, function (state) {
  return (0, _selectedIdsSet["default"])(state);
}, function (state) {
  return (0, _activeRowsWithStyleFields["default"])(state);
}, function (_ref, unit, selectionSet, _ref2) {
  var _dataset;

  var dateFieldName = _ref.dateFieldName;
  var rows = _ref2.rows;
  var dataset = null;

  if (dateFieldName) {
    var groups = {};
    var countsByUnits = {};

    var _iterator = _createForOfIteratorHelper(rows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;

        if (row[dateFieldName]) {
          var _row$MrScalar, _countsByUnits$unitLa;

          var rowCount = (_row$MrScalar = row["--mr-scalar"]) !== null && _row$MrScalar !== void 0 ? _row$MrScalar : 1;
          var unitLabel = (0, _datetime.toUnitString)(row[dateFieldName], unit);
          countsByUnits[unitLabel] = ((_countsByUnits$unitLa = countsByUnits[unitLabel]) !== null && _countsByUnits$unitLa !== void 0 ? _countsByUnits$unitLa : 0) + rowCount;
          var groupKey = "".concat(unitLabel, " ").concat(row["--microreact-colour"]);

          if (groupKey in groups) {
            groups[groupKey].groupCount += rowCount;

            if (!groups[groupKey].isSelected) {
              groups[groupKey].isSelected = selectionSet.has(row[0]);
            }
          } else {
            var _boundsOf = (0, _datetime.boundsOf)(row[dateFieldName], unit),
                _boundsOf2 = (0, _slicedToArray2["default"])(_boundsOf, 2),
                unitStartDate = _boundsOf2[0],
                unitEndDate = _boundsOf2[1];

            groups[groupKey] = {
              unitLabel: unitLabel,
              unitStartDate: unitStartDate,
              unitEndDate: unitEndDate,
              groupCount: rowCount,
              groupColour: row["--microreact-colour"],
              groupLabel: row["--microreact-colour-label"],
              isSelected: selectionSet.size === 0 || selectionSet.has(row[0])
            };
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    dataset = Object.values(groups);

    var _iterator2 = _createForOfIteratorHelper(dataset),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        item.unitCount = countsByUnits[item.unitLabel];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return {
    dataset: (_dataset = dataset) !== null && _dataset !== void 0 ? _dataset : _constants.emptyArray
  };
});
var _default = chartDataSelector;
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

var _state = __webpack_require__(2);

var _charts = __webpack_require__(159);

var _config = _interopRequireDefault(__webpack_require__(51));

var _paneSize = _interopRequireDefault(__webpack_require__(493));

var _laneField = _interopRequireDefault(__webpack_require__(629));

var _filteredRangeUnit = _interopRequireDefault(__webpack_require__(504));

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(55));

var chartSpecSelector = (0, _state.createKeyedStateSelector)(function (state, timelineId) {
  return (0, _filteredRangeUnit["default"])(state, timelineId);
}, function (state, timelineId) {
  return state.timelines[timelineId].style;
}, function (state, timelineId) {
  return state.timelines[timelineId].nodeSize;
}, function (state, timelineId) {
  return (0, _laneField["default"])(state, timelineId);
}, function (state, timelineId) {
  return (0, _paneSize["default"])(state, timelineId);
}, function (state) {
  return (0, _config["default"])(state).fontFamily;
}, function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (unit, style, nodeSize, laneField, size, fontFamily, colourByDataField) {
  var vlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    autosize: {
      contains: "padding",
      type: "fit"
    },
    // "selection": {"grid": {"type": "interval", "bind": "scales"}},
    // "selection": {
    //   "zoom_x": {"type": "interval", "bind": "scales", "encodings": ["x"]},
    //   "zoom_y": {"type": "interval", "bind": "scales", "encodings": ["y"]}
    // },
    bounds: "flush",
    config: {
      background: "#f9f9fa",
      axis: {
        labelFont: fontFamily,
        labelFontSize: 11
      },
      view: {
        stroke: "transparent"
      }
    },
    data: {
      name: "dataset"
    },
    mark: "bar",
    encoding: {
      x: {
        field: "unitStartDate",
        type: "temporal",
        axis: {
          title: null,
          grid: false
        }
      },
      x2: {
        field: "unitEndDate",
        type: "temporal",
        axis: null,
        grid: false
      },
      y: {
        // aggregate: "sum",
        field: "groupCount",
        type: "quantitative",
        axis: {
          title: null
        }
      },
      color: {
        field: "groupColour",
        scale: null
      },
      fillOpacity: {
        field: "isSelected",
        scale: {
          domain: [false, true],
          range: [0.14, 1]
        },
        legend: false
      },
      tooltip: [{
        field: "unitLabel",
        type: "nominal",
        title: unit
      }, {
        field: "unitCount",
        type: "quantitative",
        title: "unitCount"
      }, {
        field: "groupLabel",
        type: "nominal",
        title: colourByDataField.name
      }, {
        field: "groupCount",
        type: "quantitative",
        title: "groupCount"
      }]
    },
    height: size.height - 48 - 12,
    padding: {
      left: 16,
      top: 32,
      right: 16,
      bottom: 2
    },
    width: size.width
  };

  if (style === "normalised-bar") {
    vlSpec.encoding.y.stack = "normalize";
  }

  var vgSpec = (0, _charts.vegaLiteToVega)(vlSpec);
  return vgSpec;
});
var _default = chartSpecSelector;
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

var _state = __webpack_require__(2);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var laneFieldSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, timelineId) {
  return state.timelines[timelineId].laneField;
}, function (fieldsMap, laneField) {
  if (laneField) {
    return fieldsMap.get(laneField);
  } else {
    return undefined;
  }
});
var _default = laneFieldSelector;
exports["default"] = _default;

/***/ })

}]);