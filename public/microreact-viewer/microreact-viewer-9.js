(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[9],{

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(96);

var _ui = __webpack_require__(27);

var _PanePlaceholder = _interopRequireDefault(__webpack_require__(498));

var _TablePane = _interopRequireDefault(__webpack_require__(606));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var tableId = _ref.tableId;
  var tableState = state.tables[tableId];
  return {
    fileKind: "data",
    isEmpty: !tableState.columns,
    PaneComponent: _TablePane["default"],
    paneId: tableId
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var tableId = _ref2.tableId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(tableId));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_PanePlaceholder["default"]);

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

/***/ 513:
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

var _UiSelectList = _interopRequireDefault(__webpack_require__(170));

__webpack_require__(514);

var _propTypes2 = __webpack_require__(14);

var groupBy = function groupBy(item) {
  var _item$group;

  return (_item$group = item.group) !== null && _item$group !== void 0 ? _item$group : "";
};

var MultipleDataColumnsSelect = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_UiFloatingFilter["default"], {
    className: (0, _classnames["default"])("mr-multiple-data-columns-select", props.className),
    items: props.dataColumns,
    label: "Search columns",
    style: props.style,
    renderItems: function renderItems(items) {
      return /*#__PURE__*/_react["default"].createElement(_UiSelectList["default"], {
        items: items,
        onChange: props.onChange,
        value: props.value,
        groupItem: groupBy,
        selectOnly: true,
        style: {
          height: 40 + props.dataColumns.length * 28,
          maxHeight: "calc(100vh - ".concat(props.maxHeightOffset, ")")
        }
      });
    }
  });
});

MultipleDataColumnsSelect.displayName = "MultipleDataColumnsSelect";
MultipleDataColumnsSelect.propTypes = {
  className: _propTypes["default"].string,
  dataColumns: _propTypes["default"].arrayOf(_propTypes2.DataColumn),
  maxHeightOffset: _propTypes["default"].string,
  multiple: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  style: _propTypes["default"].object,
  value: _propTypes["default"].array
};
MultipleDataColumnsSelect.defaultProps = {};
var _default = MultipleDataColumnsSelect;
exports["default"] = _default;

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = __webpack_require__(51);

var _tables = __webpack_require__(76);

var _selectedIdsList = _interopRequireDefault(__webpack_require__(106));

var _sortState = _interopRequireDefault(__webpack_require__(200));

var _tableData = _interopRequireDefault(__webpack_require__(199));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _TablePane = _interopRequireDefault(__webpack_require__(607));

var _state = __webpack_require__(3);

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var tableId = _ref.tableId;
  var tableState = state.tables[tableId];
  var data = (0, _tableData["default"])(state, tableId);
  var sort = (0, _sortState["default"])(state, tableId);
  var selectedIds = (0, _selectedIdsList["default"])(state);
  return {
    data: data,
    sort: sort,
    selectedIds: selectedIds,
    displayMode: tableState.displayMode,
    columns: tableState.columns,
    fieldsMap: (0, _dataColumnsByFieldMap["default"])(state),
    dataColumns: (0, _dataColumns["default"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var tableId = _ref2.tableId;
  return {
    onColumnExpand: function onColumnExpand(field) {
      return dispatch((0, _tables.expandColumn)(tableId, field));
    },
    onColumnMove: function onColumnMove(oldIndex, newIndex) {
      return dispatch((0, _tables.moveColumn)(tableId, oldIndex, newIndex));
    },
    onColumnResize: function onColumnResize(field, width) {
      return dispatch((0, _tables.resizeColumn)(tableId, field, width));
    },
    onColumnSort: function onColumnSort(field, direction) {
      return dispatch((0, _tables.sortColumn)(tableId, field, direction));
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TablePane["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

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

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reselect = __webpack_require__(10);

var _lib = _interopRequireDefault(__webpack_require__(84));

__webpack_require__(527);

var _browser = __webpack_require__(21);

var TextUtils = _interopRequireWildcard(__webpack_require__(71));

var _TableComponents = _interopRequireWildcard(__webpack_require__(608));

var _TableControls = _interopRequireDefault(__webpack_require__(616));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var dataGetter = function dataGetter(args) {
  if (args.column.dataColumn.urlField) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: args.rowData[args.column.dataColumn.urlField],
      target: "_blank",
      rel: "noreferrer"
    }, args.rowData[args.column.field]);
  }

  return TextUtils.toText(args.column.dataType, args.rowData[args.column.field], false
  /* convertBlanks */
  ); // const value = args.rowData[args.column.field];
  // if (args.column.dataType === "date") {
  //   return timestampToDateString(value);
  // }
  // if (args.column.dataType === "boolean") {
  //   return (value === true) ? "✅" : (value === false) ? "❌" : null;
  // }
  // else {
  //   return value;
  // }
};

var displayModeToRowHeight = {
  comfortable: 40,
  cosy: 32,
  compact: 24
};

var TablePane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TablePane, _React$PureComponent);

  var _super = _createSuper(TablePane);

  function TablePane() {
    var _this;

    (0, _classCallCheck2["default"])(this, TablePane);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      columnIndex: null,
      rowIndex: null,
      scrollToRow: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tableRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataColumnsSelector", (0, _reselect.createSelector)(function (props) {
      return props.columns;
    }, function (props) {
      return props.fieldsMap;
    }, function (props) {
      return props.dataColumns;
    }, function (columns, fieldsMap, dataColumns) {
      var tableColumns = [];
      var fields = new Set();

      var _iterator = _createForOfIteratorHelper(columns),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var col = _step.value;
          var dataColumn = fieldsMap.get(col.field);

          if (dataColumn) {
            fields.add(col.field);
            tableColumns.push({
              dataColumn: dataColumn,
              dataKey: col.field,
              dataType: dataColumn.dataType,
              field: dataColumn.name,
              frozen: col.fixed,
              hidden: col.hidden || false,
              key: "data-".concat(col.field),
              minWidth: 40,
              resizable: true,
              sort: col.sort,
              group: dataColumn.group,
              sortable: true,
              tableId: _this.props.tableId,
              title: col.label || dataColumn.label || dataColumn.name,
              width: col.width || 100,
              dataGetter: dataGetter
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(dataColumns),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _dataColumn = _step2.value;

          if (!fields.has(_dataColumn.name)) {
            tableColumns.push({
              dataColumn: _dataColumn,
              dataKey: _dataColumn.name,
              dataType: _dataColumn.dataType,
              field: _dataColumn.name,
              hidden: false,
              key: "data-".concat(_dataColumn.name),
              minWidth: 40,
              resizable: true,
              group: _dataColumn.group,
              sortable: true,
              tableId: _this.props.tableId,
              title: _dataColumn.label || _dataColumn.name,
              width: 100,
              dataGetter: dataGetter
            });
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return tableColumns;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tableColumnsSelector", (0, _reselect.createSelector)(_this.dataColumnsSelector, function (props) {
      return props.selectedIds;
    }, function (dataColumns, selectedIds) {
      return [{
        key: "--microreact-selection-cell",
        dataKey: "--microreact-selection-cell",
        field: "--microreact-selection-cell",
        title: "--microreact-selection-cell",
        width: 40,
        tableId: _this.props.tableId,
        hidden: false,
        minWidth: 40,
        resizable: false,
        selectedIds: selectedIds,
        frozen: true
      }].concat((0, _toConsumableArray2["default"])(dataColumns));
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTableHeaderRow", function (_ref) {
      var cells = _ref.cells,
          columns = _ref.columns;
      // if (columns?.length === 1 && columns?.[0]?.frozen) {
      //   return null;
      // }
      // if (headerIndex === 0) {
      //   if (columns?.length === 1) {
      //     return null;
      //   }
      //   // return (
      //   //   columns.map(
      //   //     (x) => (
      //   //       <div
      //   //         role="gridcell"
      //   //         className="BaseTable__header-cell"
      //   //         key={x.dataKey}
      //   //         style={
      //   //           { width: x.width }
      //   //         }
      //   //       >
      //   //         <div
      //   //           className="BaseTable__header-cell-text">
      //   //             { x.group || null }
      //   //         </div>
      //   //       </div>
      //   //     )
      //   //   )
      //   // );
      //   const groupCells = [];
      //   groupCells.push(
      //     <div
      //       role="gridcell"
      //       className="BaseTable__header-cell"
      //       key={columns[0].dataKey}
      //       style={
      //         { width: columns[0].width }
      //       }
      //     >
      //       <div className="BaseTable__header-cell-text" />
      //     </div>
      //   );
      //   let previousColumn = columns[1];
      //   let width = 0;
      //   for (let index = 1; index < columns.length; index++) {
      //     const column = columns[index];
      //     if (column.group !== previousColumn.group) {
      //       groupCells.push(
      //         <div
      //           role="gridcell"
      //           className="BaseTable__header-cell mr-group-cell"
      //           key={previousColumn.dataKey}
      //           style={
      //             { width }
      //           }
      //         >
      //           <div
      //             className="BaseTable__header-cell-text">
      //               { previousColumn.group || null }
      //           </div>
      //         </div>
      //       );
      //       width = 0;
      //     }
      //     width += column.width;
      //     previousColumn = column;
      //   }
      //   return groupCells;
      // }
      return /*#__PURE__*/_react["default"].createElement(_TableComponents.SortableContainer, {
        axis: "x",
        useDragHandle: true,
        onSortEnd: function onSortEnd(args) {
          _this.props.onColumnMove(args.oldIndex - 1, Math.max(args.newIndex - 1, 0));
        },
        helperContainer: function helperContainer() {
          return _this.tableRef.current.tableNode;
        }
      }, cells);
    });
    return _this;
  }

  (0, _createClass2["default"])(TablePane, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (prevProps.selectedIds !== props.selectedIds && props.selectedIds && props.selectedIds.length) {
        var rowIndex = props.data[0].findIndex(function (x) {
          return x[0] === props.selectedIds[0];
        });
        this.tableRef.current.scrollToRow(rowIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var columns = this.tableColumnsSelector(props);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-table",
        style: {
          height: props.height,
          width: props.width
        }
      }, /*#__PURE__*/_react["default"].createElement(_TableControls["default"], {
        tableId: props.tableId
      }), /*#__PURE__*/_react["default"].createElement(_lib["default"], {
        columns: columns,
        components: _TableComponents["default"],
        data: props.data[0],
        fixed: true,
        headerCellProps: function headerCellProps(args) {
          return {
            index: args.columnIndex,
            tagName: _TableComponents.HeaderCellComponent
          };
        },
        headerHeight: 40 // headerHeight={[ 32, 40 ]}
        ,
        headerRenderer: this.renderTableHeaderRow,
        height: props.height - 24,
        onColumnExpand: function onColumnExpand(column) {
          props.onColumnExpand(column.field);
        },
        onColumnResizeEnd: function onColumnResizeEnd(args) {
          (0, _browser.nextTick)(function () {
            return props.onColumnResize(args.column.field, args.width);
          });
        } // onColumnSort={
        //   (args) => {
        //     props.onColumnSort(
        //       args.column.field,
        //       (args.order === "asc" && props.sort[args.column.field] === "desc") ? undefined : args.order
        //     );
        //   }
        // }
        ,
        onSelectRows: props.onSelectRows,
        ref: this.tableRef,
        rowHeight: displayModeToRowHeight[props.displayMode],
        rowKey: 0,
        sortState: props.sort,
        width: props.width
      }));
    }
  }]);
  return TablePane;
}(_react["default"].PureComponent);

TablePane.displayName = "TablePane";
TablePane.propTypes = {
  columns: _propTypes["default"].array.isRequired,
  data: _propTypes["default"].array.isRequired,
  displayMode: _propTypes["default"].string.isRequired,
  height: _propTypes["default"].number.isRequired,
  onColumnExpand: _propTypes["default"].func.isRequired,
  onColumnMove: _propTypes["default"].func.isRequired,
  onColumnResize: _propTypes["default"].func.isRequired,
  onColumnSort: _propTypes["default"].func.isRequired,
  onSelectRows: _propTypes["default"].func.isRequired,
  rowKey: _propTypes["default"].number,
  sort: _propTypes["default"].object.isRequired,
  tourStep: _propTypes["default"].string,
  width: _propTypes["default"].number.isRequired
};
TablePane.defaultProps = {
  rowKey: 0
};
var _default = TablePane;
exports["default"] = _default;

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeaderCellComponent = exports.SortableContainer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactSortableHoc = __webpack_require__(452);

var _DragIndicatorOutlined = _interopRequireDefault(__webpack_require__(469));

var _CheckBoxTwoTone = _interopRequireDefault(__webpack_require__(470));

var _CheckBoxOutlineBlankTwoTone = _interopRequireDefault(__webpack_require__(471));

__webpack_require__(527);

var _TableColumnMenu = _interopRequireDefault(__webpack_require__(609));

var _excluded = ["index", "children"];
var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref) {
  var children = _ref.children;
  return children;
});
var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      // "white-space": "nowrap",
      alignItems: "center"
    }
  }, children);
});
exports.SortableContainer = SortableContainer;
var DraggableHandle = (0, _reactSortableHoc.sortableHandle)(function () {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "draggable-handle",
    title: "Drag to move column"
  }, /*#__PURE__*/_react["default"].createElement(_DragIndicatorOutlined["default"], {
    fontSize: "small"
  }));
});

var HeaderCellComponent = function HeaderCellComponent(args) {
  var index = args.index,
      children = args.children,
      rest = (0, _objectWithoutProperties2["default"])(args, _excluded);
  return /*#__PURE__*/_react["default"].createElement(SortableItem, {
    key: "item-".concat(index),
    index: index
  }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, rest, {
    onClick: function onClick(event) {
      if (event.target && event.target.classList && (event.target.classList.contains("BaseTable__header-cell") || event.target.classList.contains("BaseTable__header-cell-text") || event.target.classList.contains("BaseTable__sort-indicator"))) {
        rest.onClick(event);
      }
    }
  }), children));
};

exports.HeaderCellComponent = HeaderCellComponent;

var HeaderTextComponent = function HeaderTextComponent(args) {
  if (args.column.dataKey === "--microreact-selection-cell") {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !args.column.frozen && /*#__PURE__*/_react["default"].createElement(DraggableHandle, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: args.className
  }, args.column.title), /*#__PURE__*/_react["default"].createElement(_TableColumnMenu["default"], {
    tableColumn: args.column
  }));
};

var CellContent = function CellContent(attributes) {
  if (attributes.column.dataKey === "--microreact-selection-cell") {
    var _attributes$column$se;

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: attributes.className,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick(event) {
        return attributes.container.props.onSelectRows([attributes.rowData[0]], !(event.metaKey || event.ctrlKey));
      }
    }, (_attributes$column$se = attributes.column.selectedIds) !== null && _attributes$column$se !== void 0 && _attributes$column$se.includes(attributes.rowData[attributes.container.props.rowKey]) ? /*#__PURE__*/_react["default"].createElement(_CheckBoxTwoTone["default"], null) : /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlankTwoTone["default"], null));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: attributes.className
  }, attributes.cellData);
};

var tabelComponents = {
  TableCell: CellContent,
  TableHeaderCell: HeaderTextComponent
};
var _default = tabelComponents;
exports["default"] = _default;

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataFieldFilter = _interopRequireDefault(__webpack_require__(168));

var _state = __webpack_require__(2);

var _TableHeaderMenu = _interopRequireDefault(__webpack_require__(610));

function mapStateToProps(state, _ref) {
  var tableColumn = _ref.tableColumn;
  return {
    filter: (0, _dataFieldFilter["default"])(state, tableColumn.field)
  };
}

var _default = (0, _state.connectToPresentState)(_TableHeaderMenu["default"], mapStateToProps, null);

exports["default"] = _default;

/***/ }),

/***/ 610:
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

var _FilterListRounded = _interopRequireDefault(__webpack_require__(204));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(611);

var _propTypes2 = __webpack_require__(14);

var _TableColumnControls = _interopRequireDefault(__webpack_require__(612));

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TableHeaderMenu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TableHeaderMenu, _React$PureComponent);

  var _super = _createSuper(TableHeaderMenu);

  function TableHeaderMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableHeaderMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "menuRef", /*#__PURE__*/_react["default"].createRef());
    return _this;
  }

  (0, _createClass2["default"])(TableHeaderMenu, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiPopoverMenu["default"], {
        button: _IconButton["default"],
        buttonProps: {
          className: (0, _classnames["default"])("mr-table-column-menu-trigger", {
            "mr-has-filters": !!this.props.filter
          }),
          color: "primary",
          component: "span",
          size: "small",
          children: /*#__PURE__*/_react["default"].createElement(_FilterListRounded["default"], null)
        },
        className: "mr-table-column-menu",
        direction: "right",
        ref: this.menuRef,
        title: this.props.tableColumn.title
      }, /*#__PURE__*/_react["default"].createElement(_TableColumnControls["default"], {
        menuRef: this.menuRef,
        tableColumn: props.tableColumn
      }));
    }
  }]);
  return TableHeaderMenu;
}(_react["default"].PureComponent);

TableHeaderMenu.displayName = "TableHeaderMenu";
TableHeaderMenu.propTypes = {
  tableColumn: _propTypes2.TableColumn.isRequired,
  filter: _propTypes2.DataFilter
};
var _default = TableHeaderMenu;
exports["default"] = _default;

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tables = __webpack_require__(76);

var _filterableValues = _interopRequireDefault(__webpack_require__(505));

var _filters = __webpack_require__(51);

var _dataFieldFilter = _interopRequireDefault(__webpack_require__(168));

var _state = __webpack_require__(2);

var _TableHeaderMenuContent = _interopRequireDefault(__webpack_require__(613));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var tableColumn = _ref.tableColumn;
  return {
    uniqueValues: (0, _filterableValues["default"])(state, tableColumn.field),
    filter: (0, _dataFieldFilter["default"])(state, tableColumn.field)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var tableColumn = _ref2.tableColumn;
  return {
    onColumnExpand: function onColumnExpand(field) {
      return dispatch((0, _tables.expandColumn)(tableColumn.tableId, field));
    },
    onColumnFilterChange: function onColumnFilterChange(field, operator, value) {
      return dispatch((0, _filters.setFieldFilter)(field, operator, value));
    },
    onColumnHide: function onColumnHide(field) {
      return dispatch((0, _tables.hideColumn)(tableColumn.tableId, field));
    },
    onColumnSort: function onColumnSort(field, direction) {
      return dispatch((0, _tables.sortColumn)(tableColumn.tableId, field, direction));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TableHeaderMenuContent["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 613:
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

var _Button = _interopRequireDefault(__webpack_require__(29));

var _IconButton = _interopRequireDefault(__webpack_require__(20));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SortByAlphaRounded = _interopRequireDefault(__webpack_require__(472));

var _VisibilityOffTwoTone = _interopRequireDefault(__webpack_require__(473));

var _Accordion = _interopRequireDefault(__webpack_require__(474));

var _AccordionSummary = _interopRequireDefault(__webpack_require__(475));

var _AccordionDetails = _interopRequireDefault(__webpack_require__(476));

var _Typography = _interopRequireDefault(__webpack_require__(78));

var _PlayArrow = _interopRequireDefault(__webpack_require__(477));

var _TextField = _interopRequireDefault(__webpack_require__(62));

var _MenuItem = _interopRequireDefault(__webpack_require__(81));

var _ToggleButton = _interopRequireDefault(__webpack_require__(206));

var _ToggleButtonGroup = _interopRequireDefault(__webpack_require__(207));

var _js = __webpack_require__(118);

var _Box = _interopRequireDefault(__webpack_require__(23));

__webpack_require__(614);

var _propTypes2 = __webpack_require__(14);

var _MdiIcon = _interopRequireDefault(__webpack_require__(82));

var _browser = __webpack_require__(21);

var _DataColumnFilterByValues = _interopRequireDefault(__webpack_require__(511));

var _SortByAlphaInverseRoundedIcon = _interopRequireDefault(__webpack_require__(615));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var operatorsByFieldDataType = {
  text: [/*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "equals",
    key: "equals"
  }, "Text is equal to"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "not-equals",
    key: "not-equals"
  }, "Text is not equal to"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "includes",
    key: "includes"
  }, "Text contains"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "excludes",
    key: "excludes"
  }, "Text does not contain"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "starts-with",
    key: "starts-with"
  }, "Text starts with"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "not-starts-with",
    key: "not-starts-with"
  }, "Text does not start with"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "ends-with",
    key: "ends-with"
  }, "Text ends with"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "not-ends-with",
    key: "not-ends-with"
  }, "Text does not end with"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "regex",
    key: "regex"
  }, "Matches a regular expression"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "not-regex",
    key: "not-regex"
  }, "Does not match a regular expression")],
  number: [/*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "greater-than",
    key: "greater-than"
  }, "Greater than"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "greater-than-or-equal",
    key: "greater-than-or-equal"
  }, "Greater than or equal to"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "less-than",
    key: "less-than"
  }, "Less than"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "less-than-or-equal",
    key: "less-than-or-equal"
  }, "Less than or equal to"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "between",
    key: "between"
  }, "Is between"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "not-between",
    key: "not-between"
  }, "Is not between")]
};
operatorsByFieldDataType.date = operatorsByFieldDataType.number;

var TableHeaderMenuContent = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(TableHeaderMenuContent, _React$PureComponent);

  var _super = _createSuper(TableHeaderMenuContent);

  function TableHeaderMenuContent() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableHeaderMenuContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      conditionOperator: _this.props.filter && _this.props.filter.operator !== "in" ? _this.props.filter.operator : undefined,
      conditionValue: _this.props.filter && _this.props.filter.operator !== "in" ? _this.props.filter.value : undefined,
      expandedSection: _this.props.filter && _this.props.filter.operator !== "in" ? "condition" : "values"
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputEL", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleConditionOperatorChange", function (event) {
      (0, _browser.nextTick)(function () {
        return _this.inputEL.current.focus();
      });

      _this.setState({
        conditionOperator: event.target.value,
        conditionValue: _this.state.conditionValue
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleConditionValueChange", function (event) {
      var conditionValue = _this.state.conditionValue ? (0, _toConsumableArray2["default"])(_this.state.conditionValue) : [];
      conditionValue[parseInt(event.target.name, 10)] = event.target.value;

      _this.setState({
        conditionValue: conditionValue
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleAccordionChange", function (section, isExpanded) {
      _this.setState({
        expandedSection: isExpanded ? section : false
      });

      (0, _browser.triggerWindowResize)(128);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleApplyFilter", function (event) {
      event.preventDefault();

      _this.props.onColumnFilterChange(_this.props.tableColumn.field, _this.state.conditionOperator, _this.state.conditionValue);

      _this.setState({
        isOpen: false
      });

      _this.closeMenu();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClearFilter", function () {
      _this.props.onColumnFilterChange(_this.props.tableColumn.field, null, null);

      _this.setState({
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFilterByValuesChange", function (selection) {
      _this.props.onColumnFilterChange(_this.props.tableColumn.field, selection.length ? "in" : null, selection);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeMenu", function () {
      var _this$props$menuRef;

      (_this$props$menuRef = _this.props.menuRef) === null || _this$props$menuRef === void 0 ? void 0 : _this$props$menuRef.current.close();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sortBy", function (event, direction) {
      _this.props.onColumnSort(_this.props.tableColumn.field, direction);
    });
    return _this;
  }

  (0, _createClass2["default"])(TableHeaderMenuContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.inputEL.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _this$state$condition,
          _this$state$condition2;

      var props = this.props;
      var valuesFilter = props.filter && props.filter.operator === "in" ? props.filter : undefined;
      var conditionFilter = props.filter && props.filter.operator !== "in" ? props.filter : undefined;
      var isMultiValue = this.state.conditionOperator === "between" || this.state.conditionOperator === "not-between";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-table-column-controls"
      }, !props.filtersOnly && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        style: {
          marginBottom: 4
        },
        className: "mr-action-buttons"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return _this2.props.onColumnHide(_this2.props.tableColumn.field);
        },
        size: "small",
        title: "Hide this column"
      }, /*#__PURE__*/_react["default"].createElement(_VisibilityOffTwoTone["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return _this2.props.onColumnExpand(_this2.props.tableColumn.field);
        },
        size: "small",
        title: "Expand this column"
      }, /*#__PURE__*/_react["default"].createElement(_MdiIcon["default"], null, _js.mdiArrowExpandHorizontal))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        style: {
          marginBottom: 4
        }
      }, "Sort", /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
        size: "small",
        value: this.props.tableColumn.sort,
        exclusive: true,
        onChange: this.sortBy
      }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
        value: "asc",
        title: "Sort by ascending order"
      }, /*#__PURE__*/_react["default"].createElement(_SortByAlphaRounded["default"], {
        fontSize: "small"
      })), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
        value: "desc",
        title: "Sort by decreasing order"
      }, /*#__PURE__*/_react["default"].createElement(_SortByAlphaInverseRoundedIcon["default"], {
        fontSize: "small"
      }))))), /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
        className: "mr-filter-by-condition",
        expanded: this.state.expandedSection === "condition",
        elevation: 0,
        onChange: function onChange(event, isExpanded) {
          return _this2.handleAccordionChange("condition", isExpanded);
        }
      }, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_PlayArrow["default"], null),
        "aria-label": "Expand"
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Filter by condition")), /*#__PURE__*/_react["default"].createElement(_AccordionDetails["default"], null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        select: true,
        label: "Condition",
        value: this.state.conditionOperator || "",
        onChange: this.handleConditionOperatorChange,
        variant: "outlined",
        size: "small"
      }, operatorsByFieldDataType[props.tableColumn.dataType]), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        style: {
          margin: "8px 0"
        }
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        inputRef: this.inputEL,
        value: ((_this$state$condition = this.state.conditionValue) === null || _this$state$condition === void 0 ? void 0 : _this$state$condition[0]) || "",
        onChange: this.handleConditionValueChange,
        variant: "outlined",
        size: "small",
        label: isMultiValue ? "From" : "Value",
        type: props.tableColumn.dataType,
        name: "0",
        style: {
          width: "100%"
        }
      }), isMultiValue && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        value: ((_this$state$condition2 = this.state.conditionValue) === null || _this$state$condition2 === void 0 ? void 0 : _this$state$condition2[1]) || "",
        onChange: this.handleConditionValueChange,
        variant: "outlined",
        size: "small",
        label: "To",
        type: props.tableColumn.dataType,
        style: {
          marginLeft: 8,
          width: "100%"
        },
        name: "1"
      })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        alignItems: "center",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "primary",
        onClick: this.handleApplyFilter,
        disabled: !this.state.conditionOperator || !this.state.conditionValue
      }, "Apply filter"), !!conditionFilter && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleClearFilter
      }, "Clear"))))), /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
        elevation: 0,
        onChange: function onChange(event, isExpanded) {
          return _this2.handleAccordionChange("values", isExpanded);
        },
        expanded: this.state.expandedSection === "values"
      }, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_PlayArrow["default"], null),
        "aria-label": "Expand"
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Filter by values")), /*#__PURE__*/_react["default"].createElement(_AccordionDetails["default"], null, /*#__PURE__*/_react["default"].createElement(_DataColumnFilterByValues["default"], {
        field: props.tableColumn.field
      }))));
    }
  }]);
  return TableHeaderMenuContent;
}(_react["default"].PureComponent);

TableHeaderMenuContent.displayName = "TableHeaderMenuContent";
TableHeaderMenuContent.propTypes = {
  filter: _propTypes2.DataFilter,
  menuRef: _propTypes2.ReactRef,
  onColumnExpand: _propTypes["default"].func.isRequired,
  onColumnFilterChange: _propTypes["default"].func.isRequired,
  onColumnHide: _propTypes["default"].func.isRequired,
  onColumnSort: _propTypes["default"].func.isRequired,
  tableColumn: _propTypes2.TableColumn,
  uniqueValues: _propTypes["default"].array
};
var _default = TableHeaderMenuContent;
exports["default"] = _default;

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SortByAlphaInverseRoundedIcon;

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(54));

function SortByAlphaInverseRoundedIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "m 9.7292311,16.14 h -5.33 L 10.119231,7.85 c 0.46,-0.66 -0.02,-1.57 -0.8199999,-1.57 h -6.48 c -0.44,0 -0.79,0.36 -0.79,0.8 v 0.01 c 0,0.44 0.36,0.8 0.79,0.8 h 5.09 l -5.73,8.28 c -0.46,0.66 0.02,1.57 0.82,1.57 h 6.72 c 0.4399999,0 0.7899999,-0.36 0.7899999,-0.79 0.02,-0.45 -0.34,-0.81 -0.7799999,-0.81 z m 12.5719749,1.59 c 0.6,0 1.01,-0.6 0.79,-1.16 l -3.73,-9.54 c -0.18,-0.46 -0.63,-0.76 -1.12,-0.76 -0.49,0 -0.94,0.3 -1.12,0.76 l -3.74,9.53 c -0.22,0.56 0.19,1.16 0.79,1.16 0.35,0 0.67,-0.22 0.8,-0.55 l 0.71,-1.9 h 5.11 l 0.71,1.9 c 0.13,0.34 0.45,0.56 0.8,0.56 z m -6.01,-4.09 1.94,-5.18 1.94,5.18 z M 12.93,2.65 c -0.2,-0.2 -0.51,-0.2 -0.71,0 l -2.01,2.01 h 4.72 z m -0.7,18.7 c 0.2,0.2 0.51,0.2 0.71,0 l 1.98,-1.98 h -4.66 z"
  }));
}

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tables = __webpack_require__(76);

var _ui = __webpack_require__(27);

var _TableControls = _interopRequireDefault(__webpack_require__(617));

var _config = _interopRequireDefault(__webpack_require__(50));

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _visibleFields = _interopRequireDefault(__webpack_require__(618));

var _state = __webpack_require__(3);

var mapStateToProps = function mapStateToProps(state, _ref) {
  var tableId = _ref.tableId;
  var tableState = state.tables[tableId];
  return {
    controls: !!tableState.controls,
    dataFields: (0, _dataColumns["default"])(state),
    displayMode: tableState.displayMode,
    hideUnselected: tableState.hideUnselected,
    isReadOnly: (0, _config["default"])(state).readOnly,
    showSelection: tableState.showSelection,
    visibleFields: (0, _visibleFields["default"])(state, tableId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var tableId = _ref2.tableId;
  return {
    onControlsChange: function onControlsChange(value) {
      return dispatch((0, _tables.update)(tableId, "controls", value));
    },
    onDisplayModeChange: function onDisplayModeChange(value) {
      return dispatch((0, _tables.update)(tableId, "displayMode", value));
    },
    onDownloadCsv: function onDownloadCsv() {
      return dispatch((0, _tables.downloadAsCsv)(tableId));
    },
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(tableId));
    },
    onHideUnselectedChange: function onHideUnselectedChange(value) {
      return dispatch((0, _tables.update)(tableId, "hideUnselected", value));
    },
    onShowSelecttionChange: function onShowSelecttionChange(value) {
      return dispatch((0, _tables.update)(tableId, "showSelection", value));
    },
    onVisibleFieldsChange: function onVisibleFieldsChange(fields) {
      return dispatch((0, _tables.setVisibleColumns)(tableId, fields));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_TableControls["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Divider = _interopRequireDefault(__webpack_require__(97));

var _Menu = _interopRequireDefault(__webpack_require__(163));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Animation = _interopRequireDefault(__webpack_require__(166));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(162));

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(164));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiRadioList = _interopRequireDefault(__webpack_require__(98));

var _MultipleDataColumnsSelect = _interopRequireDefault(__webpack_require__(513));

var _propTypes2 = __webpack_require__(14);

// import ToggleSelectionOnlyButton from "./ToggleSelectionOnlyButton.react";
var displayModes = [{
  value: "comfortable",
  label: "Comfortable"
}, {
  value: "cosy",
  label: "Cosy"
}, {
  value: "compact",
  label: "Compact"
}];

var TableColumns = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-main-controls"
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _UiControlsButton["default"],
    icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
  }, !props.isReadOnly && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onEditPane
  }, "Edit Table"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: function onClick() {
      return props.onHideUnselectedChange(!props.hideUnselected);
    }
  }, props.hideUnselected ? "Show" : "Hide", " unselected entries"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onDownloadCsv
  }, "Download as CSV")), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
    active: props.controls,
    onClick: function onClick() {
      return props.onControlsChange(!props.controls);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Animation["default"], {
    "in": props.controls
  }, /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    title: "Display density",
    summary: "Density",
    hideOnClick: true
  }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
    items: displayModes,
    onChange: props.onDisplayModeChange,
    value: props.displayMode
  })), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    title: "Columns"
  }, /*#__PURE__*/_react["default"].createElement(_MultipleDataColumnsSelect["default"], {
    dataColumns: props.dataFields,
    maxHeightOffset: "216px",
    onChange: props.onVisibleFieldsChange,
    value: props.visibleFields
  }))));
});

TableColumns.displayName = "TableColumns";
TableColumns.propTypes = {
  controls: _propTypes["default"].bool.isRequired,
  dataFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  displayMode: _propTypes["default"].string.isRequired,
  isReadOnly: _propTypes["default"].bool.isRequired,
  onControlsChange: _propTypes["default"].func.isRequired,
  onDisplayModeChange: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  onShowSelecttionChange: _propTypes["default"].func.isRequired,
  onVisibleFieldsChange: _propTypes["default"].func.isRequired,
  showSelection: _propTypes["default"].bool,
  visibleFields: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired)
};
var _default = TableColumns;
exports["default"] = _default;

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var visibleFieldsSelector = (0, _state.createKeyedStateSelector)(function (state, tableId) {
  return state.tables[tableId].columns;
}, function (allColumns) {
  var visibleColumns = [];

  var _iterator = _createForOfIteratorHelper(allColumns),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var column = _step.value;

      if (!column.hidden) {
        visibleColumns.push(column.field);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return visibleColumns;
});
var _default = visibleFieldsSelector;
exports["default"] = _default;

/***/ })

}]);