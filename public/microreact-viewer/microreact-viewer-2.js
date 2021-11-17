(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[2],{

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(95);

var _reduxUndo = __webpack_require__(113);

var _panes = __webpack_require__(57);

var _HistoryPane = _interopRequireDefault(__webpack_require__(542));

var mapStateToProps = function mapStateToProps(rootState) {
  return {
    rootState: rootState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _panes.setSidePane)());
    },
    onJump: function onJump(index) {
      return dispatch(_reduxUndo.ActionCreators.jump(index));
    },
    onRedo: function onRedo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    },
    onUndo: function onUndo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HistoryPane["default"]);

exports["default"] = _default;

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _ListSubheader = _interopRequireDefault(__webpack_require__(168));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(507);

// import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
// import UiIconButton from "./UiIconButton.react";
var UiSidePaneHeader = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
    className: "mr-ui-side-pane-header",
    disableSticky: props.disableSticky
  }, props.title, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-actions"
  }, props.children));
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

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(18));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _List = _interopRequireDefault(__webpack_require__(121));

var _ListItem = _interopRequireDefault(__webpack_require__(61));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(213));

var _ListItemText = _interopRequireDefault(__webpack_require__(83));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _RedoRounded = _interopRequireDefault(__webpack_require__(455));

var _UndoRounded = _interopRequireDefault(__webpack_require__(203));

var _reselect = __webpack_require__(10);

__webpack_require__(543);

var _shortcuts = __webpack_require__(191);

var _PaneIcon = _interopRequireDefault(__webpack_require__(54));

var _UiIconButton = _interopRequireDefault(__webpack_require__(177));

var _UiSidePaneHeader = _interopRequireDefault(__webpack_require__(500));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var History = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(History, _React$PureComponent);

  var _super = _createSuper(History);

  function History() {
    var _this;

    (0, _classCallCheck2["default"])(this, History);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entriesSelector", (0, _reselect.createSelector)(function (props) {
      return props.rootState;
    }, function (rootState) {
      var entries = [].concat((0, _toConsumableArray2["default"])(rootState.past.map(function (item, index, array) {
        return {
          label: item.config.label,
          index: index - array.length
        };
      })), [{
        label: rootState.present.config.label,
        index: 0
      }], (0, _toConsumableArray2["default"])(rootState.future.map(function (item, index, array) {
        return {
          label: item.config.label,
          index: index + 1
        };
      })));

      var _iterator = _createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          var _item$label$split = item.label.split(": "),
              _item$label$split2 = (0, _slicedToArray2["default"])(_item$label$split, 2),
              source = _item$label$split2[0],
              label = _item$label$split2[1];

          item.label = label;
          item.source = source;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return entries.reverse();
    }));
    return _this;
  }

  (0, _createClass2["default"])(History, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var canUndo = props.rootState.past.length > 0;
      var canRedo = props.rootState.future.length > 0;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-history-pane"
      }, /*#__PURE__*/_react["default"].createElement(_UiSidePaneHeader["default"], {
        onClose: props.onClose,
        title: "Session History"
      }, /*#__PURE__*/_react["default"].createElement(_UiIconButton["default"], {
        disabled: !canUndo,
        onClick: props.onUndo,
        title: "Undo (".concat(_shortcuts.keyMap.undo.description, ")")
      }, /*#__PURE__*/_react["default"].createElement(_UndoRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiIconButton["default"], {
        disabled: !canRedo,
        onClick: props.onRedo,
        title: "Redo (".concat(_shortcuts.keyMap.redo.description, ")")
      }, /*#__PURE__*/_react["default"].createElement(_RedoRounded["default"], null))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
        dense: true
      }, this.entriesSelector(props).map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          button: item.index !== 0,
          key: item.index,
          onClick: function onClick() {
            return props.onJump(item.index);
          },
          selected: item.index === 0
        }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_PaneIcon["default"], {
          component: item.source
        })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
          primary: item.label
        }));
      })));
    }
  }]);
  return History;
}(_react["default"].PureComponent);

History.displayName = "History";
History.propTypes = {
  onClose: _propTypes["default"].func.isRequired,
  onJump: _propTypes["default"].func.isRequired,
  onRedo: _propTypes["default"].func.isRequired,
  onUndo: _propTypes["default"].func.isRequired,
  rootState: _propTypes["default"].object.isRequired
};
var _default = History;
exports["default"] = _default;

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);