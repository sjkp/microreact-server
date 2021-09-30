(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[6],{

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(92);

var _NotePane = _interopRequireDefault(__webpack_require__(585));

var _notes = __webpack_require__(197);

var _noteState = _interopRequireDefault(__webpack_require__(587));

var _ui = __webpack_require__(25);

var mapStateToProps = function mapStateToProps(state, _ref) {
  var noteId = _ref.noteId;
  var noteState = (0, _noteState["default"])(state, noteId);
  return {
    source: noteState.source
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var noteId = _ref2.noteId;
  return {
    onQueryChange: function onQueryChange(value) {
      return dispatch((0, _ui.query)(value));
    },
    onSourceChange: function onSourceChange(value) {
      return dispatch((0, _notes.update)(noteId, "source", value));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_NotePane["default"]);

exports["default"] = _default;

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _DoneOutlineRounded = _interopRequireDefault(__webpack_require__(454));

var _EditRounded = _interopRequireDefault(__webpack_require__(440));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactMarkdown = _interopRequireDefault(__webpack_require__(455));

__webpack_require__(586);

var _UiControlsButton = _interopRequireDefault(__webpack_require__(157));

var BrowserUtils = _interopRequireWildcard(__webpack_require__(20));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotePane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(NotePane, _React$PureComponent);

  var _super = _createSuper(NotePane);

  function NotePane() {
    var _this;

    (0, _classCallCheck2["default"])(this, NotePane);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isEditing: !_this.props.source,
      markdown: ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleLinkClick", function (event) {
      event.preventDefault();
      BrowserUtils.changeLocation(event.target.href);
      var query = BrowserUtils.parseQueryString(event.target.href);

      _this.props.onQueryChange(query);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderers", {
      link: function link(args) {
        var _args$href;

        if ((_args$href = args.href) !== null && _args$href !== void 0 && _args$href.startsWith("?")) {
          var url = BrowserUtils.pageUrl();
          url.search = args.href;
          return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({}, args, {
            href: url.href,
            onClick: _this.handleLinkClick
          }));
        }

        return /*#__PURE__*/_react["default"].createElement("a", args);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textareaRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "save", function () {
      _this.props.onSourceChange(_this.state.markdown);

      _this.setState({
        isEditing: false
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(NotePane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.isEditing) {
        this.textareaRef.current.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.isEditing !== this.state.isEditing && this.state.isEditing) {
        this.textareaRef.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.isEditing) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-note-pane"
        }, /*#__PURE__*/_react["default"].createElement("textarea", {
          ref: this.textareaRef,
          value: this.state.markdown,
          onChange: function onChange(_ref) {
            var target = _ref.target;
            return _this2.setState({
              markdown: target.value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-main-controls"
        }, /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
          "aria-label": "Preview changes",
          color: "inherit",
          size: "small",
          onClick: this.save,
          title: "Preview changes"
        }, /*#__PURE__*/_react["default"].createElement(_DoneOutlineRounded["default"], null))));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-note-pane"
      }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
        renderers: this.renderers,
        source: this.props.source || ""
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-main-controls"
      }, /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
        "aria-label": "Edit note",
        title: "Edit note",
        color: "inherit",
        size: "small",
        onClick: function onClick() {
          return _this2.setState({
            markdown: _this2.props.source,
            isEditing: true
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_EditRounded["default"], null))));
    }
  }]);
  return NotePane;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(NotePane, "displayName", "NotePane");
(0, _defineProperty2["default"])(NotePane, "propTypes", {
  source: _propTypes["default"].string,
  onSourceChange: _propTypes["default"].func.isRequired
});
NotePane.displayName = "NotePane";
NotePane.propTypes = {
  source: _propTypes["default"].string,
  onQueryChange: _propTypes["default"].func.isRequired,
  onSourceChange: _propTypes["default"].func.isRequired
};
var _default = NotePane;
exports["default"] = _default;

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _notes = __webpack_require__(205);

var noteStateSelector = function noteStateSelector(state, noteId) {
  return state.notes[noteId] || _notes.initialState;
};

var _default = noteStateSelector;
exports["default"] = _default;

/***/ })

}]);