(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[0],{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _ChartPane = _interopRequireDefault(__webpack_require__(523));

var _charts = __webpack_require__(182);

var _chartData = _interopRequireDefault(__webpack_require__(528));

var _vegaSpec = _interopRequireDefault(__webpack_require__(529));

var _chartType = _interopRequireDefault(__webpack_require__(171));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var chartId = _ref.chartId;
  return {
    chartData: (0, _chartData["default"])(state),
    chartType: (0, _chartType["default"])(state, chartId),
    vegaSpec: (0, _vegaSpec["default"])(state, chartId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var chartId = _ref2.chartId;
  return {
    onSelectItem: function onSelectItem(item, merge) {
      return dispatch((0, _charts.selectItem)(chartId, item, merge));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_ChartPane["default"]);

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

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chartState = _interopRequireDefault(__webpack_require__(46));

var seriesStackingSelector = function seriesStackingSelector(state, chartId) {
  var chartState = (0, _chartState["default"])(state, chartId);
  return chartState.seriesStacking || "off"; // if (chartState.seriesField) {
  //   return chartState.seriesStacking || "off";
  // }
  // else {
  //   return "off";
  // }
};

var _default = seriesStackingSelector;
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

var _chartState = _interopRequireDefault(__webpack_require__(46));

var mainAxisEncodingSelector = function mainAxisEncodingSelector(state, chartId) {
  var chartState = (0, _chartState["default"])(state, chartId);

  if (!chartState.xAxisField && !chartState.yAxisField) {
    return undefined;
  }

  if (chartState.xAxisField && !chartState.xAxisMode) {
    return "x";
  }

  if (chartState.yAxisField && !chartState.yAxisMode) {
    return "y";
  }

  if (chartState.xAxisField) {
    return "x";
  }

  return undefined; // if (!chartState.xAxisField && !chartState.yAxisField) {
  //   return "field";
  // }
  // if (chartState.xAxisField && !chartState.yAxisField) {
  //   return "field";
  // }
  // return chartState.xAxisMode ?? "frequency";
  // if (chartState.xAxisField) {
  //   return chartState.xAxisMode ?? "field";
  // }
  // if (chartState.xAxisMode === "frequency" || chartState.xAxisMode === "cumulative-frequency") {
  //   return chartState.xAxisMode;
  // }
  // return "frequency";
};

var _default = mainAxisEncodingSelector;
exports["default"] = _default;

/***/ }),

/***/ 523:
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _vegaTooltip = __webpack_require__(439);

var _reactVega = __webpack_require__(436);

__webpack_require__(524);

var _ChartControls = _interopRequireDefault(__webpack_require__(525));

var _propTypes2 = __webpack_require__(14);

var _charts = __webpack_require__(156);

var _downloads = __webpack_require__(68);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var noScrollStyle = {};
var scrollStyle = {
  overflow: "auto"
};

var handleError = function handleError(err) {
  // if (this.state.vegaError !== err.message) {
  //   this.setState({ vegaError: err.message });
  // }
  console.error("vega error", err);
};

var handleParseError = function handleParseError(err) {
  // if (this.state.vegaError !== err.message) {
  //   this.setState({ vegaError: err.message });
  // }
  console.error("vega parse error", err);
};

var Chart = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Chart, _React$PureComponent);

  var _super = _createSuper(Chart);

  function Chart() {
    var _this;

    (0, _classCallCheck2["default"])(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      vegaError: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "vegaRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signalListeners", {
      onItemSelect: function onItemSelect(_) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [],
            _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            event = _ref2[0],
            item = _ref2[1];

        event === null || event === void 0 ? void 0 : event.stopPropagation();

        if (item) {
          _this.props.onSelectItem(item, event.metaKey || event.ctrilKey);
        } else {
          _this.props.onSelectItem(false);
        }
      } // brush: (_, item) => {
      //   const keys = Object.keys(item);
      //   if (keys.length === 0) {
      //     this.debouncedSelectItem(false);
      //   }
      //   else {
      //     this.debouncedSelectItem(item);
      //   }
      // },
      // onItemSelect: (event, item) => {
      // if (item) {
      //   for (const row of this.props.chartData.table) {
      //     if (
      //       (!this.props.xAxisField || row[this.props.xAxisField] === item[this.props.xAxisField])
      //       &&
      //       (!this.props.yAxisField || row[this.props.yAxisField] === item[this.props.yAxisField])
      //       &&
      //       (!this.props.seriesField || row[this.props.seriesField] === item[this.props.seriesField])
      //     ) {
      //       this.props.setHighlightedIds([ row.__id ]);
      //       break;
      //     }
      //   }
      // }
      // },

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
              (0, _downloads.downloadDataUrl)(dataUrl, "chart.png", "image/png");

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
              (0, _downloads.downloadDataUrl)(dataUrl, "chart.svg", "image/svg+xml");

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    return _this;
  }

  (0, _createClass2["default"])(Chart, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-chart",
        style: props.chartType === "custom" ? scrollStyle : noScrollStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-chart",
        onClick: this.signalListeners.onItemSelect
      }, props.vegaSpec instanceof Error && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-error"
      }, props.vegaSpec.message), props.vegaSpec && /*#__PURE__*/_react["default"].createElement(_reactVega.Vega, {
        data: this.props.chartData,
        logLevel: 2,
        onError: handleError // onNewView={
        //   () => {
        //     if (this.state.vegaError !== null) {
        //       this.setState({ vegaError: null });
        //     }
        //   }
        // }
        ,
        onParseError: handleParseError,
        ref: this.vegaRef,
        signalListeners: this.signalListeners,
        spec: props.vegaSpec,
        tooltip: new _vegaTooltip.Handler().call
      })), /*#__PURE__*/_react["default"].createElement(_ChartControls["default"], {
        chartId: this.props.chartId,
        onDownloadPNG: this.downloadPNG,
        onDownloadSVG: this.downloadSVG
      }));
    }
  }]);
  return Chart;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Chart, "propTypes", {
  chartData: _propTypes["default"].shape({
    table: _propTypes["default"].arrayOf(_propTypes["default"].object.isRequired).isRequired
  }).isRequired,
  chartId: _propTypes["default"].string.isRequired,
  chartType: _propTypes2.ChartTypes,
  className: _propTypes["default"].string,
  onSelectItem: _propTypes["default"].func.isRequired,
  vegaSpec: _propTypes["default"].object
});
var _default = Chart;
exports["default"] = _default;

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _charts = __webpack_require__(182);

var _chartState = _interopRequireDefault(__webpack_require__(46));

var _dataColumns = _interopRequireDefault(__webpack_require__(21));

var _dataFileUrl = _interopRequireDefault(__webpack_require__(526));

var _seriesStacking = _interopRequireDefault(__webpack_require__(511));

var _state = __webpack_require__(3);

var _ChartControls = _interopRequireDefault(__webpack_require__(527));

var _mainAxisEncoding = _interopRequireDefault(__webpack_require__(512));

var _seriesField = _interopRequireDefault(__webpack_require__(172));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var chartId = _ref.chartId;
  var chartState = (0, _chartState["default"])(state, chartId);
  return {
    chartType: chartState.type,
    controls: chartState.controls,
    dataFileUrl: (0, _dataFileUrl["default"])(state, chartId),
    fullDatasetColumns: (0, _dataColumns["default"])(state),
    interpolateType: chartState.interpolate,
    mainAxisEncoding: (0, _mainAxisEncoding["default"])(state, chartId),
    seriesDataColumn: (0, _seriesField["default"])(state, chartId),
    seriesField: chartState.seriesField,
    seriesOrder: chartState.seriesOrder,
    seriesStacking: (0, _seriesStacking["default"])(state, chartId),
    seriesType: chartState.seriesType,
    showSelection: chartState.showSelection,
    spec: chartState.spec,
    xAxisField: chartState.xAxisField,
    xAxisMode: chartState.xAxisMode,
    xAxisOrder: chartState.xAxisOrder,
    xAxisType: chartState.xAxisType,
    yAxisField: chartState.yAxisField,
    yAxisMode: chartState.yAxisMode,
    yAxisOrder: chartState.yAxisOrder,
    yAxisType: chartState.yAxisType
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var chartId = _ref2.chartId;
  return {
    onChartTypeChange: function onChartTypeChange(value) {
      return dispatch((0, _charts.update)(chartId, "type", value));
    },
    onControlsChange: function onControlsChange(value) {
      return dispatch((0, _charts.update)(chartId, "controls", value));
    },
    onInterpolateChange: function onInterpolateChange(value) {
      return dispatch((0, _charts.update)(chartId, "interpolate", value));
    },
    onMainAxisFieldChange: function onMainAxisFieldChange(name, value) {
      return dispatch((0, _charts.updateMainAxisField)(chartId, name, value));
    },
    onSeriesFieldChage: function onSeriesFieldChage(value) {
      return dispatch((0, _charts.update)(chartId, "seriesField", value));
    },
    onSeriesOrderChange: function onSeriesOrderChange(value) {
      return dispatch((0, _charts.update)(chartId, "seriesOrder", value));
    },
    onSeriesStackingChange: function onSeriesStackingChange(value) {
      return dispatch((0, _charts.update)(chartId, "seriesStacking", value || "off"));
    },
    onSeriesTypeChange: function onSeriesTypeChange(value) {
      return dispatch((0, _charts.update)(chartId, "seriesType", value));
    },
    onShowSelecttionChange: function onShowSelecttionChange(value) {
      return dispatch((0, _charts.update)(chartId, "showSelection", value));
    },
    onSpecChange: function onSpecChange(value) {
      return dispatch((0, _charts.update)(chartId, "spec", value));
    },
    onXAxisFieldChage: function onXAxisFieldChage(value) {
      return dispatch((0, _charts.update)(chartId, "xAxisField", value));
    },
    onXAxisModeChange: function onXAxisModeChange(value) {
      return dispatch((0, _charts.update)(chartId, "xAxisMode", value));
    },
    onXAxisOrderChange: function onXAxisOrderChange(value) {
      return dispatch((0, _charts.update)(chartId, "xAxisOrder", value));
    },
    onXAxisTypeChange: function onXAxisTypeChange(value) {
      return dispatch((0, _charts.update)(chartId, "xAxisType", value));
    },
    onYAxisFieldChage: function onYAxisFieldChage(value) {
      return dispatch((0, _charts.update)(chartId, "yAxisField", value));
    },
    onYAxisModeChange: function onYAxisModeChange(value) {
      return dispatch((0, _charts.update)(chartId, "yAxisMode", value));
    },
    onYAxisOrderChange: function onYAxisOrderChange(value) {
      return dispatch((0, _charts.update)(chartId, "xAxisOrder", value));
    },
    onYAxisTypeChange: function onYAxisTypeChange(value) {
      return dispatch((0, _charts.update)(chartId, "yAxisType", value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_ChartControls["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var dataFileUrlSelector = function dataFileUrlSelector(state) {
  var _Object$values$find;

  var url = (_Object$values$find = Object.values(state.files).find(function (x) {
    return x.type === "data" && !!x.url;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.url;

  if (url && url.startsWith("/api/files/")) {
    return "https://beta.microreact.org".concat(url);
  } else {
    return url;
  }
};

var _default = dataFileUrlSelector;
exports["default"] = _default;

/***/ }),

/***/ 527:
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

var _Box = _interopRequireDefault(__webpack_require__(23));

var _Divider = _interopRequireDefault(__webpack_require__(93));

var _EditRounded = _interopRequireDefault(__webpack_require__(440));

var _IconButton = _interopRequireDefault(__webpack_require__(19));

var _Menu = _interopRequireDefault(__webpack_require__(160));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes2 = __webpack_require__(14);

var Downloads = _interopRequireWildcard(__webpack_require__(68));

var Charts = _interopRequireWildcard(__webpack_require__(156));

var _Animation = _interopRequireDefault(__webpack_require__(163));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(157));

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(159));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiRadioList = _interopRequireDefault(__webpack_require__(97));

var _UiCombobox = _interopRequireDefault(__webpack_require__(27));

var _UiSelect = _interopRequireDefault(__webpack_require__(37));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//#region ChartDataTypeSelect
var options = [{
  label: "Auto (based on the column type)",
  value: "auto"
}, {
  label: "Quantitative",
  value: "quantitative"
}, {
  label: "Temporal",
  value: "temporal"
}, {
  label: "Ordinal",
  value: "ordinal"
}, {
  label: "Nominal",
  value: "nominal"
}];

var ChartDataTypeSelect = /*#__PURE__*/_react["default"].memo(function (props) {
  var _props$value;

  return /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    label: "Data Type",
    onChange: function onChange(value) {
      return props.onChange(value);
    },
    options: options,
    value: (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : "auto"
  });
});

ChartDataTypeSelect.displayName = "ChartDataTypeSelect";
ChartDataTypeSelect.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].oneOf(["auto", "nominal", "quantitative", "ordinal", "temporal"])
}; //#endregion
//#region XAxisMenu

var MainAxisMenu = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$axisOrder;

  return /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    className: "mr-chart-axis-menu",
    disableHeader: true,
    onClear: props.axisField && props.onAxisReset && function () {
      return props.onAxisReset();
    },
    ref: ref,
    title: props.title
  }, /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    autoFocus: true,
    label: "".concat(props.title, " Column"),
    onChange: function onChange(item) {
      return props.onAxisFieldChange(item.name);
    },
    options: props.fullDatasetColumns,
    value: props.axisField
  }), /*#__PURE__*/_react["default"].createElement(ChartDataTypeSelect, {
    onChange: function onChange(value) {
      return props.onAxisTypeChange(value);
    },
    value: props.axisType
  }), /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    label: "Sort by",
    value: (_props$axisOrder = props.axisOrder) !== null && _props$axisOrder !== void 0 ? _props$axisOrder : "ascending",
    onChange: function onChange(value) {
      return props.onAxisOrderChange(value);
    },
    options: [{
      label: "Ascending order",
      value: "ascending"
    }, {
      label: "Descending order",
      value: "descending"
    }]
  }), props.children);
});

MainAxisMenu.displayName = "MainAxisMenu";
MainAxisMenu.propTypes = {
  axisBins: _propTypes["default"].number,
  axisField: _propTypes["default"].string,
  axisOrder: _propTypes["default"].string,
  axisType: _propTypes["default"].string,
  children: _propTypes["default"].node,
  fullDatasetColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  onAxisFieldChange: _propTypes["default"].func.isRequired,
  onAxisOrderChange: _propTypes["default"].func.isRequired,
  onAxisReset: _propTypes["default"].func.isRequired,
  onAxisTypeChange: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired
}; //#endregion
//#region SecondaryAxisMenu

var SecondaryAxisMenu = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$axisMode;

  return /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    className: "mr-chart-axis-menu",
    disableHeader: true,
    onClear: props.axisMode && function () {
      return props.onAxisReset();
    },
    ref: ref,
    title: props.title
  }, /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
    autoFocus: true,
    label: "Data",
    options: [{
      label: "Frequency (number of entries)",
      value: "frequency"
    }, {
      label: "Cumulative (cumulative number of entries)",
      value: "cumulative-frequency"
    }, {
      label: "Sum of (a numeric column)",
      value: "sum-of"
    }, {
      label: "Cumulative Sum of (a numeric column)",
      value: "cumulative-sum-of"
    }, {
      label: "Average of (a numeric column)",
      value: "average-of"
    }],
    onChange: function onChange(value) {
      return props.onAxisModeChange(value);
    },
    size: "small",
    value: (_props$axisMode = props.axisMode) !== null && _props$axisMode !== void 0 ? _props$axisMode : "frequency",
    variant: "outlined"
  }), (props.axisMode === "sum-of" || props.axisMode === "cumulative-sum-of" || props.axisMode === "average-of") && /*#__PURE__*/_react["default"].createElement(_UiCombobox["default"], {
    autoFocus: true,
    label: "".concat(props.title, " Column"),
    onChange: function onChange(item) {
      return props.onAxisFieldChange(item.name);
    },
    options: props.fullDatasetColumns.filter(function (x) {
      return x.isNumeric;
    }),
    value: props.axisField
  }));
});

SecondaryAxisMenu.displayName = "SecondaryAxisMenu";
SecondaryAxisMenu.propTypes = {
  axisField: _propTypes["default"].string,
  axisMode: _propTypes2.ChartAxisMode,
  fullDatasetColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  onAxisFieldChange: _propTypes["default"].func.isRequired,
  onAxisModeChange: _propTypes["default"].func.isRequired,
  onAxisReset: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired
}; //#endregion
//#region ChartControls

var chartTypes = [{
  label: "Area Chart",
  value: "area"
}, {
  label: "Bar Chart",
  value: "bar"
}, {
  label: "Circle Chart",
  value: "circle"
}, {
  label: "Line Chart",
  value: "line"
}, {
  label: "Point",
  value: "point"
}, {
  label: "Tick",
  value: "tick"
}, {
  label: "Custom",
  value: "custom"
}];
var stackingTypes = [{
  label: "None",
  value: "off"
}, {
  label: "Stacked view",
  value: "stacked"
}, {
  label: "Normalised stacked view",
  value: "normalised"
}, {
  label: "Row view",
  value: "facet"
}, {
  label: "Overlapping row view",
  value: "overlapping"
}];
var interpolateTypes = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Step",
  value: "step"
}, {
  label: "Basis",
  value: "basis"
}, {
  label: "Cardinal",
  value: "cardinal"
}, {
  label: "Monotone",
  value: "monotone"
}];

var ChartControls = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ChartControls, _React$PureComponent);

  var _super = _createSuper(ChartControls);

  function ChartControls() {
    var _this;

    (0, _classCallCheck2["default"])(this, ChartControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      spec: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "chartTypeMenu", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "xAxisMenu", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "yAxisMenu", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "vegaSpecMenu", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSpecChange", function (event) {
      var spec = Charts.vegaEditorDataUrlToSpec(event.target.value) || event.target.value;

      _this.setState({
        spec: spec
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveSpecChanges", function () {
      try {
        if (_this.state.spec) {
          var json = JSON.parse(_this.state.spec);

          _this.props.onSpecChange(JSON.stringify(json, null, 2));
        } else {
          _this.props.onSpecChange(null);
        }
      } catch (error) {
        console.error(error);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "generateDefaultSpec", function () {
      var _this$props$dataFileU, _this$props$fullDatas;

      return "\n{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v4.json\",\n  \"data\": {\n    \"url\": \"".concat((_this$props$dataFileU = _this.props.dataFileUrl) !== null && _this$props$dataFileU !== void 0 ? _this$props$dataFileU : "...", "\",\n    \"format\": {\"type\": \"csv\"}\n  },\n  \"transform\": [\n    { \"sample\" : 100 }\n  ],\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\n      \"field\": \"").concat(_this.props.xAxisField || ((_this$props$fullDatas = _this.props.fullDatasetColumns.find(function (_, i) {
        return i === 0;
      })) === null || _this$props$fullDatas === void 0 ? void 0 : _this$props$fullDatas.name), "\",\n      \"type\": \"nominal\"\n    },\n    \"y\": {\n      \"aggregate\": \"count\"\n    }\n  }\n}\n    ");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "openInVegaEditor", function () {
      var url = Charts.vegaEditorSpecToDataUrl(_this.state.spec || _this.generateDefaultSpec());
      Downloads.openUrl(url);
    });
    return _this;
  }

  (0, _createClass2["default"])(ChartControls, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _props$seriesDataColu,
          _props$seriesStacking;

      var props = this.props;
      var isStandardChartType = props.chartType && props.chartType !== "custom";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-main-controls"
      }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
        button: _UiControlsButton["default"],
        icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
      }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
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
      }, props.chartType === "custom" && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
        className: "mr-chart-spec-menu",
        onClear: props.spec && function () {
          return props.onSpecChange(null);
        },
        onClose: this.saveSpecChanges,
        onOpen: function onOpen() {
          return _this2.setState({
            spec: props.spec || ""
          });
        },
        ref: this.vegaSpecMenu,
        title: "Vega Spec"
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        style: {
          marginBottom: 4
        },
        className: "mr-action-buttons"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: this.openInVegaEditor,
        size: "small",
        title: "Edit in Vega Editor"
      }, /*#__PURE__*/_react["default"].createElement(_EditRounded["default"], null))), /*#__PURE__*/_react["default"].createElement("textarea", {
        value: this.state.spec,
        onChange: this.handleSpecChange,
        placeholder: "Enter Vega or Vega-Lite sepc"
      })), isStandardChartType && /*#__PURE__*/_react["default"].createElement(MainAxisMenu, {
        axisField: (_props$seriesDataColu = props.seriesDataColumn) === null || _props$seriesDataColu === void 0 ? void 0 : _props$seriesDataColu.name,
        axisOrder: props.seriesOrder,
        axisType: props.seriesType,
        fullDatasetColumns: props.fullDatasetColumns,
        onAxisFieldChange: function onAxisFieldChange(field) {
          return props.onSeriesFieldChage(field);
        },
        onAxisOrderChange: props.onSeriesOrderChange,
        onAxisReset: props.seriesField && props.onSeriesFieldChage,
        onAxisTypeChange: props.onSeriesTypeChange,
        title: "Series"
      }, /*#__PURE__*/_react["default"].createElement(_UiSelect["default"], {
        label: "Stacking",
        value: (_props$seriesStacking = props.seriesStacking) !== null && _props$seriesStacking !== void 0 ? _props$seriesStacking : "off",
        onChange: props.onSeriesStackingChange,
        options: stackingTypes
      })), isStandardChartType && (!props.mainAxisEncoding || props.mainAxisEncoding === "y") ? /*#__PURE__*/_react["default"].createElement(MainAxisMenu, {
        axisField: props.yAxisField,
        axisOrder: props.yAxisOrder,
        axisType: props.yAxisType,
        fullDatasetColumns: props.fullDatasetColumns,
        onAxisFieldChange: function onAxisFieldChange(field) {
          return props.onMainAxisFieldChange("yAxisField", field);
        },
        onAxisOrderChange: props.onYAxisOrderChange,
        onAxisReset: function onAxisReset() {
          return props.onMainAxisFieldChange("yAxisField");
        },
        onAxisTypeChange: props.onYAxisTypeChange,
        ref: this.yAxisMenu,
        title: "Y Axis"
      }) : /*#__PURE__*/_react["default"].createElement(SecondaryAxisMenu, {
        axisField: props.yAxisField,
        axisMode: props.yAxisMode,
        fullDatasetColumns: props.fullDatasetColumns,
        onAxisFieldChange: function onAxisFieldChange(field) {
          return props.onYAxisFieldChage(field);
        },
        onAxisModeChange: props.onYAxisModeChange,
        onAxisReset: function onAxisReset() {
          return props.onMainAxisFieldChange("yAxisField");
        },
        ref: this.yAxisMenu,
        title: "Y Axis"
      }), isStandardChartType && (!props.mainAxisEncoding || props.mainAxisEncoding === "x") ? /*#__PURE__*/_react["default"].createElement(MainAxisMenu, {
        axisField: props.xAxisField,
        axisOrder: props.xAxisOrder,
        axisType: props.xAxisType,
        fullDatasetColumns: props.fullDatasetColumns,
        onAxisFieldChange: function onAxisFieldChange(field) {
          return props.onMainAxisFieldChange("xAxisField", field);
        },
        onAxisOrderChange: props.onXAxisOrderChange,
        onAxisReset: function onAxisReset() {
          return props.onMainAxisFieldChange("xAxisField");
        },
        onAxisTypeChange: props.onXAxisTypeChange,
        ref: this.xAxisMenu,
        title: "X Axis"
      }) : /*#__PURE__*/_react["default"].createElement(SecondaryAxisMenu, {
        axisField: props.xAxisField,
        axisMode: props.xAxisMode,
        fullDatasetColumns: props.fullDatasetColumns,
        onAxisFieldChange: function onAxisFieldChange(field) {
          return props.onXAxisFieldChage(field);
        },
        onAxisModeChange: props.onXAxisModeChange,
        onAxisReset: function onAxisReset() {
          return props.onMainAxisFieldChange("xAxisField");
        },
        ref: this.xAxisMenu,
        title: "X Axis"
      }), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
        title: "Chart Type",
        hideOnClick: true,
        onClear: props.chartType && function () {
          return props.onChartTypeChange();
        },
        ref: this.chartTypeMenu
      }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
        items: chartTypes,
        onChange: function onChange(value) {
          props.onChartTypeChange(value);

          if (value) {
            setTimeout(function () {
              if (value === "custom") {
                _this2.chartTypeMenu.current.close();

                _this2.vegaSpecMenu.current.open();
              } else if (!props.xAxisField && !props.yAxisField) {
                _this2.chartTypeMenu.current.close();

                _this2.xAxisMenu.current.open();
              }
            }, 16);
          }
        },
        value: props.chartType
      }), (props.chartType === "area" || props.chartType === "line") && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-subheader"
      }, "Interpolate"), /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
        items: interpolateTypes,
        onChange: props.onInterpolateChange,
        value: props.interpolateType
      })))));
    }
  }]);
  return ChartControls;
}(_react["default"].PureComponent);

exports["default"] = ChartControls;
ChartControls.propTypes = {
  chartType: _propTypes2.ChartTypes,
  controls: _propTypes["default"].bool.isRequired,
  dataFileUrl: _propTypes["default"].string,
  fullDatasetColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  interpolateType: _propTypes["default"].string.isRequired,
  mainAxisEncoding: _propTypes["default"].oneOf(["x", "y"]),
  onChartTypeChange: _propTypes["default"].func.isRequired,
  onControlsChange: _propTypes["default"].func.isRequired,
  onDownloadPNG: _propTypes["default"].func.isRequired,
  onDownloadSVG: _propTypes["default"].func.isRequired,
  onInterpolateChange: _propTypes["default"].func.isRequired,
  onMainAxisFieldChange: _propTypes["default"].func.isRequired,
  onSeriesFieldChage: _propTypes["default"].func.isRequired,
  onSeriesOrderChange: _propTypes["default"].func.isRequired,
  onSeriesStackingChange: _propTypes["default"].func.isRequired,
  onSeriesTypeChange: _propTypes["default"].func.isRequired,
  onShowSelecttionChange: _propTypes["default"].func.isRequired,
  onSpecChange: _propTypes["default"].func.isRequired,
  onXAxisFieldChage: _propTypes["default"].func.isRequired,
  onXAxisModeChange: _propTypes["default"].func.isRequired,
  onXAxisOrderChange: _propTypes["default"].func.isRequired,
  onXAxisTypeChange: _propTypes["default"].func.isRequired,
  onYAxisFieldChage: _propTypes["default"].func.isRequired,
  onYAxisModeChange: _propTypes["default"].func.isRequired,
  onYAxisOrderChange: _propTypes["default"].func.isRequired,
  onYAxisTypeChange: _propTypes["default"].func.isRequired,
  seriesDataColumn: _propTypes2.DataColumn,
  seriesField: _propTypes["default"].string,
  seriesOrder: _propTypes["default"].string,
  seriesStacking: _propTypes["default"].string,
  seriesType: _propTypes["default"].string,
  showSelection: _propTypes["default"].bool,
  spec: _propTypes["default"].string,
  xAxisBins: _propTypes["default"].number,
  xAxisField: _propTypes["default"].string,
  xAxisMode: _propTypes2.ChartAxisMode,
  xAxisOrder: _propTypes["default"].string,
  xAxisType: _propTypes["default"].string,
  yAxisField: _propTypes["default"].string,
  yAxisMode: _propTypes2.ChartAxisMode,
  yAxisOrder: _propTypes["default"].string,
  yAxisType: _propTypes["default"].string
}; //#endregion

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _activeRowsWithStyleFields = _interopRequireDefault(__webpack_require__(166));

// import activeRowsSelector from "../filters/active-rows";
// import chartStateSelector from "./chart-state";
// import selectedRowsSelector from "../filters/selected-rows";
// import selectedIdsListSelector from "../filters/selected-ids-list";
// const dataSelector = (state, chartId) => {
//   if (chartStateSelector(state, chartId).showSelection) {
//     return selectedRowsSelector(state) ?? activeRowsSelector(state);
//   }
//   return activeRowsSelector(state);
// };
var chartDataSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _activeRowsWithStyleFields["default"])(state);
}, function (_ref) {
  var rows = _ref.rows;
  return {
    table: rows
  };
});
var _default = chartDataSelector;
exports["default"] = _default;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _state = __webpack_require__(3);

var _charts = __webpack_require__(156);

var _chartState = _interopRequireDefault(__webpack_require__(46));

var _defaultSpec = _interopRequireDefault(__webpack_require__(530));

var _chartType = _interopRequireDefault(__webpack_require__(171));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var customChartSpecSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).spec;
}, function (spec) {
  if (spec) {
    var vlSpec = JSON.parse(spec);
    return vlSpec;
  } else {
    return undefined;
  }
});

var vegaLiteSpecSelector = function vegaLiteSpecSelector(state, chartId) {
  var chartType = (0, _chartType["default"])(state, chartId);

  if (chartType === "custom") {
    return customChartSpecSelector(state, chartId);
  }

  if (chartType) {
    return (0, _defaultSpec["default"])(state, chartId);
  }

  return undefined;
};

var vegaSpecSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return vegaLiteSpecSelector(state, chartId);
}, function (spec) {
  if (!spec) {
    return undefined;
  }

  var vlSpec = _objectSpread(_objectSpread({}, spec), {}, {
    padding: {
      left: 8,
      top: 32,
      right: 8,
      bottom: 8
    },
    data: {
      name: "table"
    }
  });

  var vgSpec = (0, _charts.vegaLiteToVega)(vlSpec);
  return vgSpec;
});
var _default = vegaSpecSelector;
exports["default"] = _default;

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _state = __webpack_require__(3);

var _colourMapForField = _interopRequireDefault(__webpack_require__(95));

var _chartState = _interopRequireDefault(__webpack_require__(46));

var _seriesStacking = _interopRequireDefault(__webpack_require__(511));

var _xAxisField = _interopRequireDefault(__webpack_require__(183));

var _yAxisField = _interopRequireDefault(__webpack_require__(184));

var _seriesField = _interopRequireDefault(__webpack_require__(172));

var _xAxisType = _interopRequireDefault(__webpack_require__(531));

var _yAxisType = _interopRequireDefault(__webpack_require__(532));

var _seriesType = _interopRequireDefault(__webpack_require__(533));

var _chartType = _interopRequireDefault(__webpack_require__(171));

var _paneSize = _interopRequireDefault(__webpack_require__(487));

var _rows = _interopRequireDefault(__webpack_require__(17));

var _filteredIds = _interopRequireDefault(__webpack_require__(54));

var _yAxisMode = _interopRequireDefault(__webpack_require__(534));

var _xAxisMode = _interopRequireDefault(__webpack_require__(535));

var _mainAxisEncoding = _interopRequireDefault(__webpack_require__(512));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultColourRange = ["#3C7383"];

var seriesValueToColourMapSelector = function seriesValueToColourMapSelector(state, chartId) {
  var seriesDataColumn = (0, _seriesField["default"])(state, chartId);

  if (seriesDataColumn) {
    return (0, _colourMapForField["default"])(state, seriesDataColumn.name);
  } else {
    return undefined;
  }
};

var seriesScaleSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _seriesField["default"])(state, chartId);
}, function (state) {
  return (0, _rows["default"])(state);
}, function (state) {
  return (0, _filteredIds["default"])(state);
}, function (state, chartId) {
  return seriesValueToColourMapSelector(state, chartId);
}, function (seriesDataColumn, rows, filteredIds, seriesValueToColourMap) {
  if (!seriesDataColumn) {
    return null;
  }

  var uniqueValues = new Set();

  var _iterator = _createForOfIteratorHelper(rows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;

      if (!filteredIds || filteredIds.has(row[0])) {
        var _value = row[seriesDataColumn.name];
        uniqueValues.add(_value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var uniqueSeriesValues = Array.from(uniqueValues).sort();
  var colours = defaultColourRange;

  if (seriesValueToColourMap) {
    colours = [];

    var _iterator2 = _createForOfIteratorHelper(uniqueSeriesValues),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var value = _step2.value;
        colours.push(seriesValueToColourMap.get(value));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    colours = Array.from(colours);
  }

  return {
    domain: uniqueSeriesValues,
    range: colours
  };
});
var defaultSpecSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _chartType["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).interpolate;
}, function (state, chartId) {
  return (0, _mainAxisEncoding["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _xAxisMode["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _xAxisField["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _xAxisType["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).xAxisOrder;
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).xAxisBins;
}, function (state, chartId) {
  return (0, _yAxisMode["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _yAxisField["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _yAxisType["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).yAxisOrder;
}, function (state, chartId) {
  return (0, _seriesField["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _seriesType["default"])(state, chartId);
}, function (state, chartId) {
  var _chartStateSelector$s;

  return (_chartStateSelector$s = (0, _chartState["default"])(state, chartId).seriesOrder) !== null && _chartStateSelector$s !== void 0 ? _chartStateSelector$s : "ascending";
}, function (state, chartId) {
  return (0, _seriesStacking["default"])(state, chartId);
}, function (state, chartId) {
  return seriesScaleSelector(state, chartId);
}, function (chartType, interpolateType, mainAxisEncoding, xAxisMode, xAxisDataColumn, xAxisType, xAxisOrder, xAxisBins, yAxisMode, yAxisDataColumn, yAxisType, yAxisOrder, seriesDataColumn, seriesFieldType, seriesOrder, seriesStacking, seriesScale) {
  var vlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite",
    transform: [{
      aggregate: [],
      groupby: []
    }],
    mark: {
      type: chartType,
      point: chartType === "line",
      interpolate: interpolateType,
      // fillOpacity: 0.5,
      // strokeOpacity: 1,
      strokeWidth: 2,
      thickness: chartType === "tick" ? 4 : undefined
    },
    encoding: {
      tooltip: []
    } // data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array

  };
  var xAxis = {
    mode: xAxisMode,
    dataColumn: xAxisDataColumn,
    type: xAxisType,
    order: xAxisOrder,
    encoding: "x"
  };
  var yAxis = {
    mode: yAxisMode,
    dataColumn: yAxisDataColumn,
    type: yAxisType,
    order: yAxisOrder,
    encoding: "y"
  };
  var mainAxis;
  var secondaryAxis;

  if (mainAxisEncoding === "x") {
    mainAxis = xAxis;
    secondaryAxis = yAxis;
  } else if (mainAxisEncoding === "y") {
    mainAxis = yAxis;
    secondaryAxis = xAxis;
  } // We cannot have a chart without a x or y axis


  if (!mainAxis || !mainAxis.dataColumn) {
    return undefined;
  } //#region Add main axis


  if (mainAxis.mode === "field") {
    vlSpec.transform[0].groupby.push(mainAxis.dataColumn.name);
    vlSpec.encoding[mainAxis.encoding] = {
      field: mainAxis.dataColumn.name,
      type: mainAxis.type,
      axis: {
        title: mainAxis.dataColumn.label,
        format: mainAxis.type === "temporal" ? "%Y-%m-%d" : undefined
      },
      timeUnit: mainAxis.type === "temporal" ? "yearmonthdate" : undefined,
      sort: xAxisOrder
    };
    vlSpec.encoding.tooltip.push({
      field: mainAxis.dataColumn.name,
      title: mainAxis.dataColumn.label,
      type: mainAxis.type
    });
  } //#endregion
  //#region Add other axis


  if (secondaryAxis.mode === "frequency") {
    vlSpec.transform[0].aggregate = [{
      op: "sum",
      field: "--mr-scalar",
      as: "--mr-frequency"
    }];
    vlSpec.encoding[secondaryAxis.encoding] = {
      field: "--mr-frequency",
      type: "quantitative",
      axis: {
        tickMinStep: 1,
        title: "Number of entries",
        gridWidth: {
          condition: {
            test: "floor(datum.value) === datum.value",
            value: 1
          },
          value: 0
        }
      },
      stack: false
    };
  } else if (secondaryAxis.mode === "cumulative-frequency") {
    vlSpec.transform[0].aggregate = [{
      op: "sum",
      field: "--mr-scalar",
      as: "--mr-frequency"
    }];
    vlSpec.transform.push({
      sort: [{
        field: mainAxis.dataColumn.name
      }],
      window: [{
        op: "sum",
        field: "--mr-frequency",
        as: "--mr-cumulative-frequency"
      }],
      frame: [null, 0]
    });
    vlSpec.encoding[secondaryAxis.encoding] = {
      field: "--mr-cumulative-frequency",
      type: "quantitative"
    };
  } else if (secondaryAxis.mode === "sum-of" && secondaryAxis.dataColumn) {
    vlSpec.transform[0].aggregate = [{
      op: "sum",
      field: secondaryAxis.dataColumn.name,
      as: "--mr-sum"
    }];
    vlSpec.encoding[secondaryAxis.encoding] = {
      field: "--mr-sum",
      type: "quantitative"
    };
  } else if (secondaryAxis.mode === "cumulative-sum-of" && secondaryAxis.dataColumn) {
    vlSpec.transform[0].aggregate = [{
      op: "sum",
      field: secondaryAxis.dataColumn.name,
      as: "--mr-sum"
    }];
    vlSpec.transform.push({
      sort: [{
        field: mainAxis.dataColumn.name
      }],
      window: [{
        op: "sum",
        field: "--mr-sum",
        as: "--mr-cumulative-sum"
      }],
      frame: [null, 0]
    });
    vlSpec.encoding[secondaryAxis.encoding] = {
      field: "--mr-cumulative-sum",
      type: "quantitative"
    };
  } else if (secondaryAxis.mode === "average-of" && secondaryAxis.dataColumn) {
    vlSpec.transform[0].aggregate = [{
      op: "average",
      field: secondaryAxis.dataColumn.name,
      as: "--mr-average"
    }];
    vlSpec.encoding[secondaryAxis.encoding] = {
      field: "--mr-average",
      type: "quantitative"
    };
  }

  if (vlSpec.encoding[secondaryAxis.encoding]) {
    vlSpec.encoding.tooltip.push({
      field: vlSpec.encoding[secondaryAxis.encoding].field,
      type: vlSpec.encoding[secondaryAxis.encoding].type,
      title: vlSpec.encoding[secondaryAxis.encoding].axis.title
    });
    vlSpec.encoding[secondaryAxis.encoding].axis.tickMinStep = 1;
    vlSpec.encoding[secondaryAxis.encoding].axis.gridWidth = {
      condition: {
        test: "floor(datum.value) === datum.value",
        value: 1
      },
      value: 0
    };

    if (seriesStacking === "off") {
      vlSpec.encoding[secondaryAxis.encoding].stack = false;
    } else if (seriesStacking === "facet" || seriesStacking === "overlapping") {
      vlSpec.encoding[secondaryAxis.encoding].stack = false;
      vlSpec.encoding[secondaryAxis.encoding].axis = null;
    } else if (seriesStacking === "normalised") {
      vlSpec.encoding[secondaryAxis.encoding].stack = "normalize";
    } else if (seriesStacking === "stacked") {
      vlSpec.encoding[secondaryAxis.encoding].stack = true;
    }
  } //#endregion
  //#region Add colour series


  if (seriesDataColumn) {
    vlSpec.transform[0].groupby.push(seriesDataColumn.name);
    vlSpec.encoding.tooltip.push({
      field: seriesDataColumn.name,
      title: seriesDataColumn.label,
      type: seriesFieldType
    });

    if (seriesStacking === "facet" || seriesStacking === "overlapping") {
      vlSpec.encoding.row = {
        field: seriesDataColumn.name,
        type: seriesFieldType,
        spacing: 0,
        header: {
          title: seriesDataColumn.label,
          labelPadding: 4,
          // labelFontSize: 11,
          // titleFontSize: 13,
          labelAlign: "left",
          labelAngle: 0
        },
        sort: {
          op: "sum",
          field: vlSpec.encoding[secondaryAxis.encoding].field,
          order: seriesOrder
        }
      };
    }

    vlSpec.encoding.color = {
      field: seriesDataColumn.name,
      type: seriesFieldType,
      scale: seriesScale,
      legend: false
    };
  } else {
    vlSpec.encoding.color = {
      value: defaultColourRange[0],
      scale: false,
      legend: false
    };
  } //#endregion


  return vlSpec;
});
var vlSpecSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _seriesStacking["default"])(state, chartId);
}, function (state, chartId) {
  return seriesScaleSelector(state, chartId);
}, function (state, chartId) {
  return defaultSpecSelector(state, chartId);
}, function (state, chartId) {
  return (0, _paneSize["default"])(state, chartId);
}, function (seriesStacking, seriesScale, vlSpec, size) {
  if (vlSpec) {
    vlSpec.bounds = "flush";
    vlSpec.autosize = {
      type: "fit",
      contains: "padding"
    };

    if (vlSpec.encoding.y) {
      vlSpec.encoding.y.scale = undefined; // Divide the overall chart pane height by the number of unique values (number of rows)
      // in row view (facet) and overlapping row view (overlapping)

      if (seriesStacking === "facet" || seriesStacking === "overlapping") {
        var numberOfDomainValues = seriesScale.domain.length;
        var step = Math.floor((size.height - 40) / numberOfDomainValues);

        if (seriesStacking === "overlapping" && numberOfDomainValues > 1) {
          var overlap = numberOfDomainValues / 2;
          vlSpec.encoding.y.scale = {
            range: [step, -overlap * step]
          };
        }

        vlSpec.width = size.width - 120;
        vlSpec.height = step;
      } else {
        vlSpec.width = size.width;
        vlSpec.height = size.height;
      }
    }

    return _objectSpread({}, vlSpec);
  }

  return vlSpec;
});
var _default = vlSpecSelector;
exports["default"] = _default;

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _charts = __webpack_require__(156);

var _chartState = _interopRequireDefault(__webpack_require__(46));

var _xAxisField = _interopRequireDefault(__webpack_require__(183));

var xAxisTypeSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _xAxisField["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).xAxisType;
}, function (xAxisField, xAxisType) {
  if (xAxisType === "auto") {
    return (0, _charts.dataFieldToAxisType)(xAxisField);
  }

  return xAxisType || (0, _charts.dataFieldToAxisType)(xAxisField);
});
var _default = xAxisTypeSelector;
exports["default"] = _default;

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _charts = __webpack_require__(156);

var _chartState = _interopRequireDefault(__webpack_require__(46));

var _yAxisField = _interopRequireDefault(__webpack_require__(184));

var yAxisTypeSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _yAxisField["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).yAxisType;
}, function (yAxisField, yAxisType) {
  if (yAxisType === "auto") {
    return (0, _charts.dataFieldToAxisType)(yAxisField);
  }

  return yAxisType || (0, _charts.dataFieldToAxisType)(yAxisField);
});
var _default = yAxisTypeSelector;
exports["default"] = _default;

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _charts = __webpack_require__(156);

var _chartState = _interopRequireDefault(__webpack_require__(46));

var _seriesField = _interopRequireDefault(__webpack_require__(172));

var seriesTypeSelector = (0, _state.createKeyedStateSelector)(function (state, chartId) {
  return (0, _seriesField["default"])(state, chartId);
}, function (state, chartId) {
  return (0, _chartState["default"])(state, chartId).seriesType;
}, function (seriesField, seriesType) {
  if (seriesType === "auto") {
    return (0, _charts.dataFieldToAxisType)(seriesField);
  }

  return seriesType || (0, _charts.dataFieldToAxisType)(seriesField);
});
var _default = seriesTypeSelector;
exports["default"] = _default;

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chartState = _interopRequireDefault(__webpack_require__(46));

var yAxisModeSelector = function yAxisModeSelector(state, chartId) {
  var chartState = (0, _chartState["default"])(state, chartId);

  if (chartState.yAxisMode) {
    return chartState.yAxisMode;
  }

  if (!chartState.yAxisField) {
    return "frequency";
  }

  return "field"; // if (!chartState.xAxisField && !chartState.yAxisField) {
  //   return "field";
  // }
  // if (chartState.yAxisField && !chartState.xAxisField) {
  //   return "field";
  // }
  // return chartState.yAxisMode ?? "frequency";
  // if (chartState.yAxisField) {
  //   return chartState.yAxisMode ?? "field";
  // }
  // if (chartState.yAxisMode === "frequency" || chartState.yAxisMode === "cumulative-frequency") {
  //   return chartState.yAxisMode;
  // }
  // return "frequency";
};

var _default = yAxisModeSelector;
exports["default"] = _default;

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chartState = _interopRequireDefault(__webpack_require__(46));

var xAxisModeSelector = function xAxisModeSelector(state, chartId) {
  var _chartState$xAxisMode;

  var chartState = (0, _chartState["default"])(state, chartId);

  if (!chartState.xAxisField) {
    return "frequency";
  }

  return (_chartState$xAxisMode = chartState.xAxisMode) !== null && _chartState$xAxisMode !== void 0 ? _chartState$xAxisMode : "field"; // if (!chartState.xAxisField && !chartState.yAxisField) {
  //   return "field";
  // }
  // if (chartState.xAxisField && !chartState.yAxisField) {
  //   return "field";
  // }
  // return chartState.xAxisMode ?? "frequency";
  // if (chartState.xAxisField) {
  //   return chartState.xAxisMode ?? "field";
  // }
  // if (chartState.xAxisMode === "frequency" || chartState.xAxisMode === "cumulative-frequency") {
  //   return chartState.xAxisMode;
  // }
  // return "frequency";
};

var _default = xAxisModeSelector;
exports["default"] = _default;

/***/ })

}]);