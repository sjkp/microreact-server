(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[5],{

/***/ 459:
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

var _MapPane = _interopRequireDefault(__webpack_require__(557));

var _isValidMap = _interopRequireDefault(__webpack_require__(581));

var _geodataFile = _interopRequireDefault(__webpack_require__(192));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  return {
    componentName: "Map",
    file: (0, _geodataFile["default"])(state, mapId),
    isEmpty: !(0, _isValidMap["default"])(state, mapId),
    PaneComponent: _MapPane["default"]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(mapId));
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

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var minScaledMarkerNodeSelector = function minScaledMarkerNodeSelector(state, mapId) {
  var _state$maps$mapId$nod;

  return Math.max(1, (_state$maps$mapId$nod = state.maps[mapId].nodeSize) !== null && _state$maps$mapId$nod !== void 0 ? _state$maps$mapId$nod : 14);
};

var _default = minScaledMarkerNodeSelector;
exports["default"] = _default;

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _SvgIcon = _interopRequireDefault(__webpack_require__(54));

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

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _minScaledMarkerSize = _interopRequireDefault(__webpack_require__(501));

var maxScaledMarkerRadiusSelector = function maxScaledMarkerRadiusSelector(state, mapId) {
  var _state$maps$mapId$max;

  return (_state$maps$mapId$max = state.maps[mapId].maxMarkerSize) !== null && _state$maps$mapId$max !== void 0 ? _state$maps$mapId$max : state.maps[mapId].nodeSize * 2;
};

var _default = maxScaledMarkerRadiusSelector;
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

var _mapState = _interopRequireDefault(__webpack_require__(30));

var hasMarkerSizeLegendSelector = function hasMarkerSizeLegendSelector(state, mapId) {
  var mapState = (0, _mapState["default"])(state, mapId);
  return mapState.showMarkers && mapState.scaleMarkers;
};

var _default = hasMarkerSizeLegendSelector;
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

var _hasGeojsonData = _interopRequireDefault(__webpack_require__(525));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var hasRegionColourLegendSelector = function hasRegionColourLegendSelector(state, mapId) {
  var mapState = (0, _mapState["default"])(state, mapId);
  return mapState.showRegions && (0, _hasGeojsonData["default"])(state, mapId);
};

var _default = hasRegionColourLegendSelector;
exports["default"] = _default;

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _geojsonLayerData = _interopRequireDefault(__webpack_require__(104));

var hasGeojsonDataSelector = function hasGeojsonDataSelector(state, mapId) {
  return !!(0, _geojsonLayerData["default"])(state, mapId);
};

var _default = hasGeojsonDataSelector;
exports["default"] = _default;

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Scale = __webpack_require__(115);

var _d3Array = __webpack_require__(193);

var _arrays = __webpack_require__(24);

var _state = __webpack_require__(2);

var _rowsByRegion = _interopRequireDefault(__webpack_require__(180));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _colourPalettes = _interopRequireDefault(__webpack_require__(181));

// import randomcolor from "randomcolor";
var computeColourMethods = {
  max: _d3Array.max,
  mean: _d3Array.mean,
  median: _d3Array.median,
  min: _d3Array.min,
  mode: _arrays.mode,
  sum: _d3Array.sum,
  first: _arrays.firstElement,
  last: _arrays.lastElement,
  unique: _arrays.uniqueElementsCount
};
var regionValueFunctionSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _dataColumnsByFieldMap["default"])(state).get(state.maps[mapId].regionsColourField);
}, function (state, mapId) {
  return state.maps[mapId].regionsColourMethod;
}, function (regionsColourDataField, regionsColourMethod) {
  if (regionsColourDataField) {
    var colourMethod = regionsColourMethod || (regionsColourDataField.isNumeric ? "sum" : "mode");
    return function (rows) {
      return computeColourMethods[colourMethod](rows, function (x) {
        return x[regionsColourDataField.name];
      });
    };
  } else {
    return function (rows) {
      return (0, _d3Array.sum)(rows, function (x) {
        var _x$MrScalar;

        return (_x$MrScalar = x["--mr-scalar"]) !== null && _x$MrScalar !== void 0 ? _x$MrScalar : 1;
      });
    };
  }
});
var regionColoursMapSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _rowsByRegion["default"])(state, mapId);
}, function (state, mapId) {
  return state.maps[mapId].regionsColourPalette;
}, function (state, mapId) {
  return regionValueFunctionSelector(state, mapId);
}, function (state) {
  return (0, _colourPalettes["default"])(state);
}, function (rowsByRegion, regionsColourPaletteName, regionValueFunction, colourPalettes) {
  var domainValues = [];
  var coloursByRegion = {};

  for (var _i = 0, _Object$keys = Object.keys(rowsByRegion); _i < _Object$keys.length; _i++) {
    var regionId = _Object$keys[_i];
    var regionRows = rowsByRegion[regionId];

    if (regionRows.length) {
      var value = regionValueFunction(regionRows);
      coloursByRegion[regionId] = {
        value: value
      };
      domainValues.push(value);
    }
  }

  var colourPalette = colourPalettes.find(function (x) {
    return x.name === regionsColourPaletteName;
  });

  if (colourPalette) {
    var domainExtent = (0, _d3Array.extent)(domainValues);
    var colourGetter = (0, _d3Scale.scaleLinear)().domain(domainExtent).range([Array.isArray(colourPalette.entries[0]) ? colourPalette.entries[0][1] : colourPalette.entries[0], Array.isArray(colourPalette.entries[colourPalette.entries.length - 1]) ? colourPalette.entries[colourPalette.entries.length - 1][1] : colourPalette.entries[colourPalette.entries.length - 1]]);

    for (var _i2 = 0, _Object$keys2 = Object.keys(coloursByRegion); _i2 < _Object$keys2.length; _i2++) {
      var _regionId = _Object$keys2[_i2];
      var regionEntry = coloursByRegion[_regionId];
      var colour = colourGetter(regionEntry.value);
      regionEntry.colour = colour;
    }
  }

  return coloursByRegion;
});
var _default = regionColoursMapSelector;
exports["default"] = _default;

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = __webpack_require__(51);

var _maps = __webpack_require__(73);

var _config = _interopRequireDefault(__webpack_require__(50));

var _hasMarkerSizeLegend = _interopRequireDefault(__webpack_require__(523));

var _hasRegionColourLegend = _interopRequireDefault(__webpack_require__(524));

var _mapboxStyle = _interopRequireDefault(__webpack_require__(558));

var _mapViewport = _interopRequireDefault(__webpack_require__(559));

var _MapPane = _interopRequireDefault(__webpack_require__(560));

var _markersLayerData = _interopRequireDefault(__webpack_require__(167));

var _state = __webpack_require__(2);

function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  var mapState = state.maps[mapId];
  return {
    controls: mapState.controls,
    hasLegend: (0, _hasMarkerSizeLegend["default"])(state, mapId) || (0, _hasRegionColourLegend["default"])(state, mapId),
    mapboxApiAccessToken: mapState.mapboxApiAccessToken || (0, _config["default"])(state).mapboxApiAccessToken,
    mapboxStyle: (0, _mapboxStyle["default"])(state, mapId),
    markers: (0, _markersLayerData["default"])(state, mapId),
    showMarkers: mapState.showMarkers,
    showRegions: !!mapState.geodata && mapState.showRegions,
    trackViewport: mapState.trackViewport,
    viewport: (0, _mapViewport["default"])(state, mapId)
  };
}

function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {
    onPathChange: function onPathChange(path) {
      return dispatch((0, _maps.setFilter)(mapId, path));
    },
    onViewportChange: function onViewportChange(viewport) {
      return dispatch((0, _maps.setViewport)(mapId, viewport));
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    },
    onSelectRegion: function onSelectRegion(region, merge) {
      return dispatch((0, _maps.selectRegion)(mapId, region, merge));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_MapPane["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _config = _interopRequireDefault(__webpack_require__(50));

// const categories = [ "labels", "roads", "buildings", "parks", "water", "background" ];
// const layerSelector = {
//   background: /background/,
//   water: /water/,
//   parks: /park/,
//   buildings: /building/,
//   roads: /bridge|road|tunnel/,
//   labels: /label|place|poi/
// };
var mapboxStyleSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  var _configSelector, _configSelector$maps;

  return state.maps[mapId].style || ((_configSelector = (0, _config["default"])(state)) === null || _configSelector === void 0 ? void 0 : (_configSelector$maps = _configSelector.maps) === null || _configSelector$maps === void 0 ? void 0 : _configSelector$maps.style);
}, function (style) {
  if (style === "microreact") {
    var mapboxStyle = {
      version: 8,
      sources: {
        countries: {
          type: "vector",
          // "url": "mapbox://map-id"
          // "url": "http://tileserver.com/layer.json",
          tiles: ["".concat(location.origin, "/public/vector/tiles/{z}/{x}/{y}.pbf")],
          maxzoom: 6
        }
      },
      glyphs: "".concat(location.origin, "/public/vector/glyphs/{fontstack}/{range}.pbf"),
      layers: [{
        id: "background",
        type: "background",
        paint: {
          "background-color": "#cad2d3"
        }
      }, {
        id: "country-glow-outer",
        type: "line",
        source: "countries",
        "source-layer": "country",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-color": "#226688",
          "line-width": 5,
          "line-opacity": {
            stops: [[0, 0], [1, 0.1]]
          }
        }
      }, {
        id: "country-glow-inner",
        type: "line",
        source: "countries",
        "source-layer": "country",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-color": "#226688",
          "line-width": {
            stops: [[0, 1.2], [1, 1.6], [2, 2], [3, 2.4]]
          },
          "line-opacity": 0.8
        } // rainbow start

      }, {
        id: "area-white",
        type: "fill",
        source: "countries",
        // "filter":["in","ADM0_A3",'ATA'],
        "source-layer": "country",
        paint: {
          "fill-color": "#efefee"
        }
      }, {
        id: "geo-lines",
        type: "line",
        source: "countries",
        "source-layer": "geo-lines",
        paint: {
          "line-color": "#226688",
          "line-width": {
            stops: [[0, 0.2], [4, 1]]
          },
          "line-dasharray": [6, 2]
        }
      }, {
        id: "land-border-country",
        type: "line",
        source: "countries",
        "source-layer": "land-border-country",
        paint: {
          "line-color": "#fff",
          "line-width": {
            base: 1.5,
            stops: [[0, 0], [1, 0.8], [2, 1]]
          }
        }
      }, {
        id: "state",
        type: "line",
        source: "countries",
        "source-layer": "state",
        minzoom: 3,
        filter: ["in", "ADM0_A3", "USA", "CAN", "AUS"],
        paint: {
          "line-color": "#226688",
          "line-opacity": 0.25,
          "line-dasharray": [6, 2, 2, 2],
          "line-width": 1.2
        } // LABELS

      }, {
        id: "country-abbrev",
        type: "symbol",
        source: "countries",
        "source-layer": "country-name",
        minzoom: 1.8,
        maxzoom: 3,
        layout: {
          "text-field": "{ABBREV}",
          "text-font": ["Open Sans Semibold"],
          "text-transform": "uppercase",
          "text-max-width": 20,
          "text-size": {
            stops: [[3, 10], [4, 11], [5, 12], [6, 16]]
          },
          "text-letter-spacing": {
            stops: [[4, 0], [5, 1], [6, 2]]
          },
          "text-line-height": {
            stops: [[5, 1.2], [6, 2]]
          }
        },
        paint: {
          "text-halo-color": "#fff",
          "text-halo-width": 1.5
        }
      }, {
        id: "country-name",
        type: "symbol",
        source: "countries",
        "source-layer": "country-name",
        minzoom: 3,
        layout: {
          "text-field": "{NAME}",
          "text-font": ["Open Sans Semibold"],
          "text-transform": "uppercase",
          "text-max-width": 20,
          "text-size": {
            stops: [[3, 10], [4, 11], [5, 12], [6, 16]]
          }
        },
        paint: {
          "text-halo-color": "#fff",
          "text-halo-width": 1.5
        }
      }, {
        id: "geo-lines-lables",
        type: "symbol",
        source: "countries",
        "source-layer": "geo-lines",
        minzoom: 1,
        layout: {
          "text-field": "{DISPLAY}",
          "text-font": ["Open Sans Semibold"],
          "text-offset": [0, 1],
          "symbol-placement": "line",
          "symbol-spacing": 600,
          "text-size": 9
        },
        paint: {
          "text-color": "#226688",
          "text-halo-width": 1.5
        }
      }]
    };
    return mapboxStyle; // const visibility = {
    //   water: false,
    //   parks: true,
    //   buildings: true,
    //   roads: true,
    //   labels: true,
    //   background: true,
    // };
    // for (const layer of mapboxStyle.layers) {
    //   return categories.every(name => visibility[name] || !layerSelector[name].test(layer.id));
    // }
    // mapboxStyle.layers = mapboxStyle.layers.filter(layer => {
    //   return categories.every(name => visibility[name] || !layerSelector[name].test(layer.id));
    // })
    // return mapboxStyle;
  } else {
    return "mapbox://styles/mapbox/".concat(style || "light", "-v9");
  }
});
var _default = mapboxStyleSelector;
exports["default"] = _default;

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactMapGl = __webpack_require__(448);

var _state = __webpack_require__(2);

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _markersLayerData = _interopRequireDefault(__webpack_require__(167));

var _paneSize = _interopRequireDefault(__webpack_require__(497));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultViewportSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _markersLayerData["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _paneSize["default"])(state, mapId);
}, function (markers, size) {
  var defaultViewport = new _reactMapGl.WebMercatorViewport({
    width: size.width,
    height: size.height,
    longitude: 0,
    latitude: 0,
    zoom: 0,
    bearing: 0,
    pitch: 0,
    altitude: 1.5
  });

  if (markers !== null && markers !== void 0 && markers.length) {
    //#region Find a bounding box which fits all markers
    var north = markers[0];
    var south = markers[0];
    var east = markers[0];
    var west = markers[0];

    var _iterator = _createForOfIteratorHelper(markers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var marker = _step.value;

        if (marker.position[1] > west.position[1]) {
          west = marker;
        }

        if (marker.position[1] < east.position[1]) {
          east = marker;
        }

        if (marker.position[0] > south.position[0]) {
          south = marker;
        }

        if (marker.position[0] < north.position[0]) {
          north = marker;
        }
      } //#endregion
      //#region Create a view from the bounding box which fits all markers

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var longitude = defaultViewport.longitude;
    var latitude = defaultViewport.latitude;
    var zoom = defaultViewport.zoom;

    try {
      var newViewport = defaultViewport.fitBounds([[Number(south.position[0]), Number(west.position[1])], [Number(north.position[0]), Number(east.position[1])]], {
        duration: 0,
        padding: 64
      });
      longitude = newViewport.longitude;
      latitude = newViewport.latitude;
      zoom = newViewport.zoom;
    } catch (error) {
      console.error(error);
    } //#endregion


    return {
      altitude: defaultViewport.defaultViewport,
      latitude: latitude,
      longitude: longitude,
      zoom: Math.max(0, zoom),
      bearing: defaultViewport.defaultViewport,
      pitch: defaultViewport.defaultViewport
    };
  }

  return undefined;
});

var mapViewportSelector = function mapViewportSelector(state, mapId) {
  var viewport = (0, _mapState["default"])(state, mapId).viewport;

  if (viewport) {
    return viewport;
  } else {
    return defaultViewportSelector(state, mapId);
  }
};

var _default = mapViewportSelector;
exports["default"] = _default;

/***/ }),

/***/ 560:
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

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _react = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(13));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactMapGl = _interopRequireWildcard(__webpack_require__(448));

var _lodash = _interopRequireDefault(__webpack_require__(449));

__webpack_require__(561);

var _ZoomControls = _interopRequireDefault(__webpack_require__(179));

var _MapMarkersLayer = _interopRequireDefault(__webpack_require__(562));

var _MapLassoLayer = _interopRequireDefault(__webpack_require__(564));

var _MapControls = _interopRequireDefault(__webpack_require__(566));

var _MapGeojsonLayer = _interopRequireDefault(__webpack_require__(570));

var _MapLegend = _interopRequireDefault(__webpack_require__(573));

var _MapTooltip = _interopRequireDefault(__webpack_require__(579));

var _downloads = __webpack_require__(53);

var _propTypes2 = __webpack_require__(14);

var HtmlUtils = _interopRequireWildcard(__webpack_require__(35));

var _events = __webpack_require__(61);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InteractiveMap = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactMapGl["default"], (0, _extends2["default"])({}, props.viewport, {
    height: props.height,
    mapboxApiAccessToken: props.mapboxApiAccessToken,
    mapId: props.mapId,
    mapStyle: props.mapboxStyle,
    onClick: props.onClick,
    onResize: props.onResize,
    onHover: props.onHover,
    onViewportChange: props.onViewportChange,
    ref: props.reactMapRef,
    width: props.width
  }), props.showRegions && /*#__PURE__*/_react["default"].createElement(_MapGeojsonLayer["default"], {
    mapId: props.mapId
  }), /*#__PURE__*/_react["default"].createElement(_MapMarkersLayer["default"], {
    mapId: props.mapId
  }), /*#__PURE__*/_react["default"].createElement(_MapLassoLayer["default"], {
    mapId: props.mapId
  }), /*#__PURE__*/_react["default"].createElement(_reactMapGl.ScaleControl, null));
});

InteractiveMap.displayName = "InteractiveMap";
InteractiveMap.propTypes = {
  height: _propTypes["default"].number.isRequired,
  mapboxApiAccessToken: _propTypes["default"].string.isRequired,
  mapboxStyle: _propTypes2.MapboxStyle.isRequired,
  mapId: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func.isRequired,
  onResize: _propTypes["default"].func.isRequired,
  onViewportChange: _propTypes["default"].func.isRequired,
  reactMapRef: _propTypes2.ReactRef,
  showRegions: _propTypes["default"].bool.isRequired,
  viewport: _reactMapGl["default"].propTypes.viewState,
  width: _propTypes["default"].number.isRequired
};

var MapPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MapPane, _React$PureComponent);

  var _super = _createSuper(MapPane);

  function MapPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, MapPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "elementRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "reactMapRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getMapboxWrapper", function () {
      return _this.reactMapRef.current.getMap();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMarkerClick", function (event) {
      var isAppend = event.srcEvent.metaKey || event.srcEvent.ctrlKey;

      if (_this.props.showMarkers) {
        var marker = _this.findMarkerAtPoint(event.offsetCenter);

        if (marker) {
          _this.props.onSelectRows(marker.rows.map(function (row) {
            return row[0];
          }), isAppend);

          return;
        }
      }

      if (_this.props.showRegions && event.features) {
        var feature = event.features.find(function (x) {
          return x.layer.id === "mr-geojson-layer";
        });

        if (feature) {
          _this.props.onSelectRegion(feature.properties["mr-region-id"], isAppend);

          return;
        }
      }

      if (!isAppend) {
        _this.props.onSelectRows();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMapHover", function (event) {
      if (_this.props.showMarkers) {
        var marker = _this.findMarkerAtPoint(event.offsetCenter);

        if (marker) {
          var _this$state$hover;

          if (marker !== ((_this$state$hover = _this.state.hover) === null || _this$state$hover === void 0 ? void 0 : _this$state$hover.marker)) {
            _this.setState({
              hover: {
                marker: marker,
                x: event.srcEvent.offsetX,
                y: event.srcEvent.offsetY
              }
            });
          }

          return;
        }
      }

      if (_this.props.showRegions) {
        var region = event.features && event.features.find(function (x) {
          return x.layer.id === "mr-geojson-layer";
        });

        if (region) {
          var _this$state$hover2;

          if (region !== ((_this$state$hover2 = _this.state.hover) === null || _this$state$hover2 === void 0 ? void 0 : _this$state$hover2.region)) {
            _this.setState({
              hover: {
                region: region,
                x: event.srcEvent.offsetX,
                y: event.srcEvent.offsetY
              }
            });
          }

          return;
        }
      }

      if (_this.state.hover) {
        _this.setState({
          hover: null
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleViewportChange", function (viewState, interactionState, oldViewState) {
      // Ignores the very first viewport change event by waiting for the reference to be set
      if (oldViewState && Object.keys(oldViewState).length === 0) {
        _this.setState({
          renderedAt: new Date().valueOf()
        });
      } else {
        if (!oldViewState || oldViewState.altitude !== viewState.altitude || oldViewState.bearing !== viewState.bearing || oldViewState.latitude !== viewState.latitude || oldViewState.longitude !== viewState.longitude || oldViewState.pitch !== viewState.pitch || oldViewState.zoom !== viewState.zoom) {
          _this.props.onViewportChange({
            altitude: viewState.altitude,
            bearing: viewState.bearing,
            latitude: viewState.latitude,
            longitude: viewState.longitude,
            pitch: viewState.pitch,
            zoom: viewState.zoom
          });
        } else {
          _this.setState({
            renderedAt: new Date().valueOf()
          });
        }

        if (_this.props.trackViewport) {
          _this.debouncedViewportFilter();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleResize", function () {
      _this.setState({
        renderedWidth: _this.props.width,
        renderedHeight: _this.props.height
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleZoom", function (delta) {
      _this.handleViewportChange(_objectSpread(_objectSpread({}, _this.props.viewport), {}, {
        zoom: _this.props.viewport.zoom + delta
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDownloadPNG", function () {
      var mapboxMap = _this.reactMapRef.current.getMap();

      mapboxMap.once("render", function (x) {
        HtmlUtils.exportHtmlElementAsDataUrl(_this.elementRef.current).then(function (url) {
          return (0, _downloads.downloadDataUrl)(url, "map.png", "image/png");
        });
      });
      mapboxMap.triggerRepaint();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleViewportFilter", function () {
      var mapboxMap = _this.reactMapRef.current.getMap();

      var bounds = mapboxMap.getBounds();

      _this.props.onPathChange([bounds.getNorthWest().toArray(), bounds.getNorthEast().toArray(), bounds.getSouthEast().toArray(), bounds.getSouthWest().toArray(), bounds.getNorthWest().toArray()]);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "debouncedViewportFilter", (0, _lodash["default"])(_this.handleViewportFilter, 200));
    return _this;
  }

  (0, _createClass2["default"])(MapPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.beforeScreenshotUnsubscribe = (0, _events.subscribe)("before-screenshot", function () {
        var _mapbox = _this2.getMapboxWrapper();

        _mapbox._preserveDrawingBuffer = true;

        _mapbox._render();
      });
      this.afterScreenshotUnsubscribe = (0, _events.subscribe)("after-screenshot", function () {
        var _mapbox = _this2.getMapboxWrapper();

        _mapbox._preserveDrawingBuffer = false;

        _mapbox._render();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this === null || this === void 0 ? void 0 : this.beforeScreenshotUnsubscribe();
      this === null || this === void 0 ? void 0 : this.afterScreenshotUnsubscribe();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // require("../../dev/compare-prev-props")(prevProps, this.props, "map-props");
      // require("../../dev/compare-prev-props")(prevState, this.state, "map-state");
      if (this.props.trackViewport && this.props.trackViewport !== prevProps.trackViewport) {
        this.handleViewportFilter();
      }
    }
  }, {
    key: "findMarkerAtPoint",
    value: function findMarkerAtPoint(point) {
      // Reverse order so that markers on top are tested first
      for (var index = this.props.markers.length - 1; index >= 0; index--) {
        var marker = this.props.markers[index];

        if (point.x >= marker.minx && point.x <= marker.maxx && point.y >= marker.miny && point.y <= marker.maxy) {
          return this.props.markers[index];
        }
      }

      return undefined;
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      var state = this.state;

      if (state.hover) {
        return /*#__PURE__*/_react["default"].createElement(_MapTooltip["default"], (0, _extends2["default"])({
          mapId: this.props.mapId
        }, state.hover));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props,
          state = this.state;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: state.hover ? "mr-map hovered" : "mr-map",
        ref: this.elementRef // style={
        //   {
        //     width: this.props.width,
        //     height: this.props.height,
        //   }
        // }

      }, /*#__PURE__*/_react["default"].createElement(InteractiveMap, {
        height: props.height,
        mapboxApiAccessToken: props.mapboxApiAccessToken,
        mapId: props.mapId,
        mapboxStyle: props.mapboxStyle,
        onClick: this.handleMarkerClick,
        onHover: this.handleMapHover,
        onResize: this.handleResize,
        onViewportChange: this.handleViewportChange,
        reactMapRef: this.reactMapRef,
        viewport: props.viewport,
        width: props.width,
        showRegions: props.showRegions // markersOverlayRef={this.markersOverlayRef}
        // lassoOverlayRef={this.lassoOverlayRef}
        ,
        renderedWidth: state.renderedWidth,
        renderedHeight: state.renderedHeight,
        renderedAt: state.renderedAt
      }), this.renderTooltip(), props.hasLegend && /*#__PURE__*/_react["default"].createElement(_MapLegend["default"], {
        mapId: this.props.mapId
      }), /*#__PURE__*/_react["default"].createElement(_MapControls["default"], {
        mapId: this.props.mapId,
        onDownloadPNG: this.handleDownloadPNG
      }), /*#__PURE__*/_react["default"].createElement(_ZoomControls["default"], {
        className: (0, _classnames["default"])({
          visible: this.props.controls
        }),
        onZoomIn: function onZoomIn() {
          return _this3.handleZoom(+1);
        },
        onZoomOut: function onZoomOut() {
          return _this3.handleZoom(-1);
        }
      }));
    }
  }]);
  return MapPane;
}(_react["default"].PureComponent);

MapPane.displayName = "MapPane";
MapPane.propTypes = {
  controls: _propTypes["default"].bool.isRequired,
  hasLegend: _propTypes["default"].bool.isRequired,
  height: _propTypes["default"].number.isRequired,
  mapboxApiAccessToken: _propTypes["default"].string.isRequired,
  mapboxStyle: _propTypes2.MapboxStyle.isRequired,
  mapId: _propTypes["default"].string.isRequired,
  markers: _propTypes["default"].arrayOf(_propTypes2.MapMarker).isRequired,
  onPathChange: _propTypes["default"].func.isRequired,
  onSelectRegion: _propTypes["default"].func.isRequired,
  onSelectRows: _propTypes["default"].func.isRequired,
  onViewportChange: _propTypes["default"].func.isRequired,
  showMarkers: _propTypes["default"].bool.isRequired,
  showRegions: _propTypes["default"].bool.isRequired,
  tileLayerOpts: _propTypes["default"].string,
  tileLayerUrl: _propTypes["default"].string,
  trackViewport: _propTypes["default"].bool.isRequired,
  type: _propTypes["default"].string,
  viewport: _reactMapGl["default"].propTypes.viewState,
  width: _propTypes["default"].number.isRequired,
  zoom: _propTypes["default"].number
};
var _default = MapPane;
exports["default"] = _default;

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MapMarkersLayer = _interopRequireDefault(__webpack_require__(563));

var _state = __webpack_require__(2);

var _maxScaledMarkerSize = _interopRequireDefault(__webpack_require__(503));

var _minScaledMarkerSize = _interopRequireDefault(__webpack_require__(501));

var _selectedIdsSet = _interopRequireDefault(__webpack_require__(173));

var _markersLayerData = _interopRequireDefault(__webpack_require__(167));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  var mapState = state.maps[mapId];
  return {
    fixedSize: !mapState.scaleMarkers,
    markers: (0, _markersLayerData["default"])(state, mapId),
    nodeRadius: mapState.nodeSize / 2,
    minScaledMarkerRadius: (0, _minScaledMarkerSize["default"])(state, mapId) / 2,
    maxScaledMarkerRadius: (0, _maxScaledMarkerSize["default"])(state, mapId) / 2,
    selectedIds: (0, _selectedIdsSet["default"])(state),
    showMarkers: mapState.showMarkers,
    globalOpacity: mapState.markersOpacity / 100
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {};
};

var _default = (0, _state.connectToPresentStateWithRef)(_MapMarkersLayer["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(22));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactMapGl = __webpack_require__(448);

var _drawing = __webpack_require__(171);

var _defaults = _interopRequireDefault(__webpack_require__(42));

var _propTypes2 = __webpack_require__(14);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function round(x, n) {
  var tenN = Math.pow(10, n);
  return Math.round(x * tenN) / tenN;
}

var MapMarkersLayer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MapMarkersLayer, _React$PureComponent);

  var _super = _createSuper(MapMarkersLayer);

  function MapMarkersLayer() {
    var _this;

    (0, _classCallCheck2["default"])(this, MapMarkersLayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "canvasOverlayRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "markerBounds", []);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCanvasOverlayRedraw", function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          ctx = _ref.ctx,
          isDragging = _ref.isDragging,
          project = _ref.project,
          unproject = _ref.unproject;
      var _this$props = _this.props,
          compositeOperation = _this$props.compositeOperation,
          renderWhileDragging = _this$props.renderWhileDragging,
          globalOpacity = _this$props.globalOpacity;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = compositeOperation;
      ctx.globalAlpha = globalOpacity;

      if ((renderWhileDragging || !isDragging) && _this.props.showMarkers && _this.props.markers) {
        var _iterator = _createForOfIteratorHelper(_this.props.markers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var marker = _step.value;

            if (marker.rows.length > 0) {
              var pixel = project(marker.position);
              var pixelX = round(pixel[0], 1);
              var pixelY = round(pixel[1], 1);

              if (pixelX + _this.props.nodeRadius >= 0 && pixelX - _this.props.nodeRadius < width && pixelY + _this.props.nodeRadius >= 0 && pixelY - _this.props.nodeRadius < height) {
                var isHighlighted = marker.rows.some(function (row) {
                  return _this.props.selectedIds.has(row[0]);
                });
                var size = _this.props.fixedSize ? _this.props.nodeRadius : _this.props.minScaledMarkerRadius + (_this.props.maxScaledMarkerRadius - _this.props.minScaledMarkerRadius) * marker.ratio;

                if (marker.slices) {
                  (0, _drawing.drawPieChart)(ctx, pixelX, pixelY, size, marker.slices, isHighlighted && _defaults["default"].THEME.COLOURS.GREEN);
                } else {
                  (0, _drawing.drawShape)(ctx, pixelX, pixelY, size, marker.rows[0]["--microreact-shape"], marker.rows[0]["--microreact-colour"], isHighlighted && _defaults["default"].THEME.COLOURS.GREEN);
                }

                marker.minx = pixelX - size;
                marker.maxx = pixelX + size;
                marker.miny = pixelY - size;
                marker.maxy = pixelY + size;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(MapMarkersLayer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactMapGl.CanvasOverlay, (0, _extends2["default"])({}, this.props, {
        redraw: this.onCanvasOverlayRedraw
      }));
    }
  }]);
  return MapMarkersLayer;
}(_react["default"].PureComponent);

exports["default"] = MapMarkersLayer;
MapMarkersLayer.displayName = "MapMarkersOverlay";
MapMarkersLayer.propTypes = {
  compositeOperation: _propTypes["default"].string,
  dotFill: _propTypes["default"].string,
  dotRadius: _propTypes["default"].number,
  globalOpacity: _propTypes["default"].number,
  markers: _propTypes["default"].arrayOf(_propTypes2.MapMarker).isRequired,
  renderWhileDragging: _propTypes["default"].bool,
  showMarkers: _propTypes["default"].bool.isRequired
};
MapMarkersLayer.defaultProps = {
  renderWhileDragging: true,
  dotRadius: 4,
  dotFill: "#1FBAD6",
  globalOpacity: 0.1,
  // Same as browser default.
  compositeOperation: "source-over"
};

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _maps = __webpack_require__(73);

var _MapLassoLayer = _interopRequireDefault(__webpack_require__(565));

var _state = __webpack_require__(2);

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  var mapState = state.maps[mapId];
  return {
    isActive: mapState.lasso,
    path: mapState.path
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {
    onPathChange: function onPathChange(path) {
      return dispatch((0, _maps.setFilter)(mapId, path));
    }
  };
};

var _default = (0, _state.connectToPresentStateWithRef)(_MapLassoLayer["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 565:
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

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactMapGl = __webpack_require__(448);

var _geometry = __webpack_require__(102);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function round(x, n) {
  var tenN = Math.pow(10, n);
  return Math.round(x * tenN) / tenN;
}

function drawLines(ctx, coordinates) {
  ctx.moveTo(coordinates[0][0], coordinates[0][1]);

  for (var i = 1; i < coordinates.length; i++) {
    ctx.lineTo(coordinates[i][0], coordinates[i][1]);
  }

  ctx.stroke();
}

function drawPoints(ctx, coordinates, r) {
  for (var i = 0; i < coordinates.length; i++) {
    ctx.fillRect(coordinates[i][0] - r, coordinates[i][1] - r, r * 2, r * 2);
    ctx.strokeRect(coordinates[i][0] - r + ctx.lineWidth, coordinates[i][1] - r + ctx.lineWidth, r * 2 - ctx.lineWidth, r * 2 - ctx.lineWidth);
  }
}

function translateToCanvas(points, project) {
  // const context = useContext(MapContext);
  // const { viewport } = context;
  // const project = viewport.project.bind(viewport);
  return points.map(function (position) {
    var pixel = project(position);
    return [round(pixel[0], 1), round(pixel[1], 1)];
  });
}

function translateFromCanvas(x, y, unproject) {
  // const context = useContext(MapContext);
  // const { viewport } = context;
  // const unproject = viewport.unproject.bind(viewport);
  var position = unproject([x, y]);
  return [position[0], position[1]];
}

var MapLassoOverlay = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MapLassoOverlay, _React$PureComponent);

  var _super = _createSuper(MapLassoOverlay);

  function MapLassoOverlay() {
    var _this;

    (0, _classCallCheck2["default"])(this, MapLassoOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCanvasOverlayRedraw", function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          ctx = _ref.ctx,
          isDragging = _ref.isDragging,
          project = _ref.project,
          unproject = _ref.unproject;

      if (!_this.mouseCanvas) {
        _this.addEvents(ctx.canvas);
      }

      var path = _this.getPath();

      if (_this.props.isActive) {
        ctx.clearRect(0, 0, width, height);

        if (Array.isArray(path) && path.length > 0) {
          var scale = 1;
          ctx.strokeStyle = _this.props.strokeStyle;
          ctx.lineWidth = _this.props.lineWidth * scale;
          ctx.beginPath();
          var points = translateToCanvas(path, project);
          drawLines(ctx, points);
          ctx.lineWidth = 1 * scale;
          ctx.fillStyle = _this.props.pointFillStyle;
          ctx.strokeStyle = _this.props.pointStrokeStyle;
          drawPoints(ctx, points, scale * _this.props.pointSize / 2);
          ctx.closePath();
        }
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      if (_this.props.isActive) {
        if (!Array.isArray(path)) {
          ctx.canvas.style.cursor = "crosshair";
          ctx.canvas.title = "Click to draw points";
        } else {
          ctx.canvas.style.cursor = null;
          ctx.canvas.title = "Click outside the path to clear";
        }
      } else {
        ctx.canvas.style.cursor = null;
        ctx.canvas.title = ""; // if (lasso.internalPath) {
        //   lasso.internalPath = null;
        // }
      }

      _this.unproject = unproject;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPath", function () {
      return _this.props.path || _this.state.internalPath;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnClick", function (event) {
      if (!_this.props.isActive) return;
      var point = translateFromCanvas(event.offsetX, event.offsetY, _this.unproject);

      if (Array.isArray(_this.props.path)) {
        if (!(0, _geometry.isPointInPolygon)(point, _this.props.path)) {
          _this.props.onPathChange(null);
        }

        return;
      }

      var internalPath = _this.state.internalPath ? (0, _toConsumableArray2["default"])(_this.state.internalPath) : [];

      if (internalPath.length > 0) {
        var padding = _this.props.pointSize;
        var pointTopLeft = translateFromCanvas(event.offsetX - padding, event.offsetY - padding, _this.unproject);
        var pointBottomRight = translateFromCanvas(event.offsetX + padding, event.offsetY + padding, _this.unproject);

        if (pointBottomRight[0] >= internalPath[0][0] && pointTopLeft[0] <= internalPath[0][0] && (pointBottomRight[1] >= internalPath[0][1] && pointTopLeft[1] <= internalPath[0][1] || pointBottomRight[1] <= internalPath[0][1] && pointTopLeft[1] >= internalPath[0][1])) {
          // push the first point to the end of the path to close the polygon
          // and mark the path as finished
          var path = internalPath;
          path.push(path[0]);

          _this.setState({
            internalPath: null
          });

          _this.props.onPathChange(path);

          return;
        }
      }

      internalPath.push(point);

      _this.setState({
        internalPath: internalPath
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "offsetX", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "offsetY", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMousedown", function (event) {
      _this.offsetX = event.offsetX;
      _this.offsetY = event.offsetY;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseup", function (event) {
      if (Math.abs(_this.offsetX - event.offsetX) < 5 && Math.abs(_this.offsetY - event.offsetY) < 5) {
        _this.handleOnClick(event);
      }

      _this.offsetX = null;
      _this.offsetY = null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addEvents", function (mouseCanvas) {
      _this.mouseCanvas = mouseCanvas;

      _this.mouseCanvas.addEventListener("mousedown", _this.handleMousedown, false
      /* useCapture */
      );

      _this.mouseCanvas.addEventListener("mouseup", _this.handleMouseup, false
      /* useCapture */
      );
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeEvents", function () {
      var _this$mouseCanvas, _this$mouseCanvas2;

      (_this$mouseCanvas = _this.mouseCanvas) === null || _this$mouseCanvas === void 0 ? void 0 : _this$mouseCanvas.removeEventListener("mousedown", _this.handleMousedown);
      (_this$mouseCanvas2 = _this.mouseCanvas) === null || _this$mouseCanvas2 === void 0 ? void 0 : _this$mouseCanvas2.removeEventListener("mouseup", _this.handleMouseup);
    });
    return _this;
  }

  (0, _createClass2["default"])(MapLassoOverlay, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.isActive) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_reactMapGl.CanvasOverlay, {
        path: this.getPath,
        internalPath: this.state.internalPath,
        redraw: this.onCanvasOverlayRedraw
      });
    }
  }]);
  return MapLassoOverlay;
}(_react["default"].PureComponent);

exports["default"] = MapLassoOverlay;
MapLassoOverlay.displayName = "MapLassoOverlay";
MapLassoOverlay.propTypes = {
  isActive: _propTypes["default"].bool.isRequired,
  onPathChange: _propTypes["default"].func.isRequired,
  path: _propTypes["default"].array
};
MapLassoOverlay.defaultProps = {
  dotsStyle: "#383838",
  isActive: false,
  lineWidth: 2,
  path: null,
  pointFillStyle: "#ffffff",
  pointSize: 14,
  pointStrokeStyle: "#000000",
  strokeStyle: "#3C7383"
};

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _maps = __webpack_require__(73);

var _dataColumns = _interopRequireDefault(__webpack_require__(18));

var _ui = __webpack_require__(27);

var _MapControls = _interopRequireDefault(__webpack_require__(567));

var _regionsColourMethodType = _interopRequireDefault(__webpack_require__(569));

var _maxScaledMarkerSize = _interopRequireDefault(__webpack_require__(503));

var _minScaledMarkerSize = _interopRequireDefault(__webpack_require__(501));

var _hasGeojsonData = _interopRequireDefault(__webpack_require__(525));

var _colourPalettes = _interopRequireDefault(__webpack_require__(181));

var _state = __webpack_require__(2);

var _config = _interopRequireDefault(__webpack_require__(50));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  var mapState = state.maps[mapId];
  return {
    colourPalettes: (0, _colourPalettes["default"])(state),
    controls: mapState.controls,
    dataFields: (0, _dataColumns["default"])(state),
    groupMarkersByRegion: mapState.groupMarkersByRegion,
    hasGeojsonData: (0, _hasGeojsonData["default"])(state, mapId),
    isReadOnly: (0, _config["default"])(state).readOnly,
    lasso: mapState.lasso,
    markersOpacity: mapState.markersOpacity,
    maxNodeSize: mapState.maxNodeSize,
    maxScaledMarkerSize: (0, _maxScaledMarkerSize["default"])(state, mapId),
    minNodeSize: mapState.minNodeSize,
    // minScaledMarkerSize: minScaledMarkerNodeSelector(state, mapId),
    nodeSize: mapState.nodeSize,
    regionsColourField: mapState.regionsColourField,
    regionsColourMethod: mapState.regionsColourMethod,
    regionsColourMethodType: (0, _regionsColourMethodType["default"])(state, mapId),
    regionsColourOpacity: mapState.regionsColourOpacity,
    regionsColourPalette: mapState.regionsColourPalette,
    scaleMarkers: mapState.scaleMarkers,
    scaleType: mapState.scaleType,
    showMarkers: mapState.showMarkers,
    showRegionOutlines: mapState.showRegionOutlines,
    showRegions: mapState.showRegions,
    style: mapState.style,
    trackViewport: mapState.trackViewport,
    type: mapState.type
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {
    onControlsChange: function onControlsChange(value) {
      return dispatch((0, _maps.update)(mapId, "controls", value));
    },
    onEditPane: function onEditPane() {
      return dispatch((0, _ui.openPaneEditor)(mapId));
    },
    onGroupMarkersByRegionChange: function onGroupMarkersByRegionChange(value) {
      return dispatch((0, _maps.update)(mapId, "groupMarkersByRegion", value));
    },
    onLassoChange: function onLassoChange(value) {
      return dispatch((0, _maps.setLasso)(mapId, value));
    },
    onMarkersOpacityChange: function onMarkersOpacityChange(value) {
      return dispatch((0, _maps.update)(mapId, "markersOpacity", value));
    },
    onMaxMarkerSizeChange: function onMaxMarkerSizeChange(value) {
      return dispatch((0, _maps.update)(mapId, "maxMarkerSize", value));
    },
    onMinMarkerSizeChange: function onMinMarkerSizeChange(value) {
      return dispatch((0, _maps.update)(mapId, "minMarkerSize", value));
    },
    onNodeSizeChange: function onNodeSizeChange(value) {
      return dispatch((0, _maps.update)(mapId, "nodeSize", Number(value)));
    },
    onRegionsColourFieldChange: function onRegionsColourFieldChange(value) {
      return dispatch((0, _maps.update)(mapId, "regionsColourField", value));
    },
    onRegionsColourMethodChange: function onRegionsColourMethodChange(value) {
      return dispatch((0, _maps.update)(mapId, "regionsColourMethod", value));
    },
    onRegionsColourOpacityChange: function onRegionsColourOpacityChange(value) {
      return dispatch((0, _maps.update)(mapId, "regionsColourOpacity", value));
    },
    onRegionsColourPaletteChange: function onRegionsColourPaletteChange(value) {
      return dispatch((0, _maps.update)(mapId, "regionsColourPalette", value));
    },
    onScaleMarkersChange: function onScaleMarkersChange(value) {
      return dispatch((0, _maps.update)(mapId, "scaleMarkers", value));
    },
    onScaleTypeChange: function onScaleTypeChange(value) {
      return dispatch((0, _maps.update)(mapId, "scaleType", value));
    },
    onShowMarkersChange: function onShowMarkersChange(value) {
      return dispatch((0, _maps.update)(mapId, "showMarkers", value));
    },
    onShowRegionOutlinesChange: function onShowRegionOutlinesChange(value) {
      return dispatch((0, _maps.update)(mapId, "showRegionOutlines", value));
    },
    onShowRegionsChange: function onShowRegionsChange(value) {
      return dispatch((0, _maps.update)(mapId, "showRegions", value));
    },
    onShowTileLayerSettings: function onShowTileLayerSettings() {
      return dispatch((0, _maps.update)(mapId, "tileLayerDialog", true));
    },
    onStyleChange: function onStyleChange(value) {
      return dispatch((0, _maps.update)(mapId, "style", value));
    },
    onTrackViewportChange: function onTrackViewportChange(value) {
      return dispatch((0, _maps.setTrackViewport)(mapId, value));
    }
  };
};

var _default = (0, _state.connectToPresentState)(_MapControls["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _Divider = _interopRequireDefault(__webpack_require__(97));

var _Menu = _interopRequireDefault(__webpack_require__(163));

var _CropFreeOutlined = _interopRequireDefault(__webpack_require__(460));

var _Box = _interopRequireDefault(__webpack_require__(23));

__webpack_require__(568);

var _Animation = _interopRequireDefault(__webpack_require__(166));

var _UiControlsMenu = _interopRequireDefault(__webpack_require__(164));

var _LassoButton = _interopRequireDefault(__webpack_require__(502));

var _UiToggleSwitch = _interopRequireDefault(__webpack_require__(43));

var _UiToggleSlider = _interopRequireDefault(__webpack_require__(178));

var _UiRadioList = _interopRequireDefault(__webpack_require__(98));

var _GradientColourPalettePicker = _interopRequireDefault(__webpack_require__(205));

var _propTypes2 = __webpack_require__(14);

var _UiTabs = _interopRequireDefault(__webpack_require__(215));

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiControlsButton = _interopRequireDefault(__webpack_require__(162));

var _UiSlider = _interopRequireDefault(__webpack_require__(177));

var _UiToggleButtons = _interopRequireDefault(__webpack_require__(122));

var mapStyles = [{
  value: "microreact",
  label: "Microreact"
}, {
  value: "light",
  label: "Light"
}, {
  value: "dark",
  label: "Dark"
}, {
  value: "streets",
  label: "Streets"
}, {
  value: "satellite",
  label: "Satellite"
}, {
  value: "basic",
  label: "Basic"
}, {
  value: "bright",
  label: "Bright"
}];
var colourMethods = [{
  value: "sum",
  label: "Sum",
  type: "continuous"
}, {
  value: "mean",
  label: "Mean",
  type: "continuous"
}, {
  value: "median",
  label: "Median",
  type: "continuous"
}, {
  value: "mode",
  label: "Mode",
  type: "continuous"
}, {
  value: "min",
  label: "Min",
  type: "continuous"
}, {
  value: "max",
  label: "Max",
  type: "continuous"
}, {
  value: "first",
  label: "First",
  type: "discrete"
}, {
  value: "last",
  label: "Last",
  type: "discrete"
}, {
  value: "mode",
  label: "Most frequent value",
  type: "discrete"
}, {
  value: "unique",
  label: "Number of unique values",
  type: "discrete"
}];

var MapControls = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-main-controls",
    "data-html2canvas-ignore": "true"
  }, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
    button: _UiControlsButton["default"],
    icon: /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)
  }, !props.isReadOnly && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    onClick: props.onEditPane
  }, "Edit Map"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null)), /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
    key: "png",
    onClick: props.onDownloadPNG
  }, "Download as PNG image")), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
    active: props.controls,
    onClick: function onClick() {
      return props.onControlsChange(!props.controls);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Animation["default"], {
    "in": props.controls
  }, /*#__PURE__*/_react["default"].createElement(_LassoButton["default"], {
    active: props.lasso,
    title: props.lasso ? "Disable map region filter" : "Activate map region filter",
    onClick: function onClick() {
      return props.onLassoChange(!props.lasso);
    }
  }), /*#__PURE__*/_react["default"].createElement(_UiControlsButton["default"], {
    active: props.trackViewport,
    onClick: function onClick() {
      return props.onTrackViewportChange(!props.trackViewport);
    },
    title: "Filter on current viewport"
  }, /*#__PURE__*/_react["default"].createElement(_CropFreeOutlined["default"], null)), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    hideOnClick: true,
    title: "Style"
  }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
    items: mapStyles,
    onChange: props.onStyleChange,
    value: props.style
  })), props.hasGeojsonData && /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    className: "map-regions",
    title: "Regions"
  }, /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Show regions",
    onChange: props.onShowRegionsChange,
    value: props.showRegions
  }), props.showRegions && /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Outline regions",
    onChange: props.onShowRegionOutlinesChange,
    value: props.showRegionOutlines
  }), props.showRegions && /*#__PURE__*/_react["default"].createElement(_UiSlider["default"], {
    label: "Fill colour opacity",
    max: 100,
    min: 0,
    onChange: function onChange(value) {
      return props.onRegionsColourOpacityChange(value);
    },
    unit: "%",
    value: props.regionsColourOpacity
  }), props.showRegions && /*#__PURE__*/_react["default"].createElement(_UiTabs["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    label: "Colour by"
  }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
    items: props.dataFields,
    onChange: props.onRegionsColourFieldChange,
    value: props.regionsColourField,
    nullable: true,
    valueProperty: "name",
    nullOptionLabel: "NUMBER OF ENTRIES"
  })), !!props.regionsColourMethodType && /*#__PURE__*/_react["default"].createElement("div", {
    label: "Colour method"
  }, /*#__PURE__*/_react["default"].createElement(_UiRadioList["default"], {
    items: colourMethods.filter(function (x) {
      return x.type === props.regionsColourMethodType;
    }),
    onChange: props.onRegionsColourMethodChange,
    value: props.regionsColourMethod
  })), /*#__PURE__*/_react["default"].createElement(_UiTabs["default"].TabPanel, {
    label: "Colour palette"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/_react["default"].createElement(_GradientColourPalettePicker["default"], {
    onChange: function onChange(item) {
      return props.onRegionsColourPaletteChange(item.name);
    },
    onlyContinuousPalettes: true,
    value: props.colourPalettes.find(function (x) {
      return x.name === props.regionsColourPalette;
    })
  }))))), /*#__PURE__*/_react["default"].createElement(_UiControlsMenu["default"], {
    className: "mr-map-markers-menu",
    title: "Markers"
  }, /*#__PURE__*/_react["default"].createElement(_UiToggleSlider["default"], {
    checked: props.showMarkers,
    label: "Map Markers",
    max: props.maxNodeSize,
    min: props.minNodeSize,
    onChange: props.onNodeSizeChange,
    onCheckedChange: props.onShowMarkersChange,
    unit: "px",
    value: props.nodeSize
  }), props.showMarkers && /*#__PURE__*/_react["default"].createElement(_UiSlider["default"], {
    label: "Marker opacity",
    max: 100,
    min: 0,
    onChange: function onChange(value) {
      return props.onMarkersOpacityChange(value);
    },
    unit: "%",
    value: props.markersOpacity
  }), props.showMarkers && props.hasGeojsonData && /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Group by region",
    onChange: props.onGroupMarkersByRegionChange,
    value: props.groupMarkersByRegion
  }), props.showMarkers && /*#__PURE__*/_react["default"].createElement(_UiToggleSwitch["default"], {
    label: "Scale markers",
    onChange: props.onScaleMarkersChange,
    value: props.scaleMarkers
  }), props.showMarkers && props.scaleMarkers && /*#__PURE__*/_react["default"].createElement(_UiToggleButtons["default"], {
    label: "Scaling function",
    onChange: props.onScaleTypeChange,
    value: props.scaleType
  }, /*#__PURE__*/_react["default"].createElement("small", {
    value: "square"
  }, "sqrt"), /*#__PURE__*/_react["default"].createElement("small", {
    value: "logarithmic"
  }, "log"), /*#__PURE__*/_react["default"].createElement("small", {
    value: "linear"
  }, "linear")), props.showMarkers && props.scaleMarkers && /*#__PURE__*/_react["default"].createElement(_UiSlider["default"], {
    label: "Max marker size",
    max: 128,
    min: props.nodeSize,
    onChange: function onChange(value) {
      return props.onMaxMarkerSizeChange(value);
    },
    unit: "px",
    value: props.maxScaledMarkerSize
  }))));
});

MapControls.displayName = "MapControls";
MapControls.propTypes = {
  colourPalettes: _propTypes["default"].arrayOf(_propTypes2.StylePalette),
  controls: _propTypes["default"].bool.isRequired,
  dataFields: _propTypes["default"].arrayOf(_propTypes2.DataColumn).isRequired,
  groupMarkersByRegion: _propTypes["default"].bool,
  hasGeojsonData: _propTypes["default"].bool,
  isReadOnly: _propTypes["default"].bool.isRequired,
  lasso: _propTypes["default"].bool.isRequired,
  mapId: _propTypes["default"].string,
  markersOpacity: _propTypes["default"].number,
  maxNodeSize: _propTypes["default"].number.isRequired,
  maxScaledMarkerSize: _propTypes["default"].number,
  minNodeSize: _propTypes["default"].number.isRequired,
  minScaledMarkerSize: _propTypes["default"].number,
  nodeSize: _propTypes["default"].number.isRequired,
  onControlsChange: _propTypes["default"].func.isRequired,
  onDownloadPNG: _propTypes["default"].func.isRequired,
  onEditPane: _propTypes["default"].func.isRequired,
  onGroupMarkersByRegionChange: _propTypes["default"].func.isRequired,
  onLassoChange: _propTypes["default"].func.isRequired,
  onMarkersOpacityChange: _propTypes["default"].func.isRequired,
  onMaxMarkerSizeChange: _propTypes["default"].func.isRequired,
  onMinMarkerSizeChange: _propTypes["default"].func.isRequired,
  onNodeSizeChange: _propTypes["default"].func.isRequired,
  onRegionsColourFieldChange: _propTypes["default"].func.isRequired,
  onRegionsColourMethodChange: _propTypes["default"].func.isRequired,
  onRegionsColourOpacityChange: _propTypes["default"].func.isRequired,
  onRegionsColourPaletteChange: _propTypes["default"].func.isRequired,
  onScaleMarkersChange: _propTypes["default"].func.isRequired,
  onScaleTypeChange: _propTypes["default"].func.isRequired,
  onShowMarkersChange: _propTypes["default"].func.isRequired,
  onShowRegionOutlinesChange: _propTypes["default"].func.isRequired,
  onShowRegionsChange: _propTypes["default"].func.isRequired,
  onStyleChange: _propTypes["default"].func.isRequired,
  onTrackViewportChange: _propTypes["default"].func.isRequired,
  regionsColourField: _propTypes["default"].string,
  regionsColourMethod: _propTypes["default"].oneOf(colourMethods.map(function (x) {
    return x.value;
  })),
  regionsColourMethodType: _propTypes["default"].oneOf(["continuous", "discrete"]),
  regionsColourOpacity: _propTypes["default"].number,
  regionsColourPalette: _propTypes["default"].string,
  scaleMarkers: _propTypes["default"].bool.isRequired,
  scaleType: _propTypes["default"].string,
  showMarkers: _propTypes["default"].bool,
  showRegionOutlines: _propTypes["default"].bool,
  showRegions: _propTypes["default"].bool,
  style: _propTypes["default"].string,
  trackViewport: _propTypes["default"].bool.isRequired,
  type: _propTypes["default"].string
};
var _default = MapControls;
exports["default"] = _default;

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var regionsColourMethodTypeSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, mapId) {
  return state.maps[mapId].regionsColourField;
}, function (fieldsMap, regionsColourFieldName) {
  if (regionsColourFieldName) {
    var regionsColourDataField = fieldsMap.get(regionsColourFieldName);
    return regionsColourDataField.isNumeric ? "continuous" : "discrete";
  } else {
    return undefined;
  }
});
var _default = regionsColourMethodTypeSelector;
exports["default"] = _default;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(96);

var _MapGeojsonLayer = _interopRequireDefault(__webpack_require__(571));

var _geojsonLayerData = _interopRequireDefault(__webpack_require__(104));

var _geojsonLayerStyle = _interopRequireDefault(__webpack_require__(572));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  var mapState = state.maps[mapId];

  if (mapState.geodata) {
    return {
      layerData: (0, _geojsonLayerData["default"])(state, mapId),
      layerStyle: (0, _geojsonLayerStyle["default"])(state, mapId),
      showRegions: mapState.showRegions
    };
  } else {
    return {
      showRegions: false
    };
  }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {};
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_MapGeojsonLayer["default"]);

exports["default"] = _default;

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactMapGl = __webpack_require__(448);

var MapGeojsonLayer = /*#__PURE__*/_react["default"].memo(function (props) {
  if (props.showRegions && props.layerData) {
    return /*#__PURE__*/_react["default"].createElement(_reactMapGl.Source, {
      type: "geojson",
      data: props.layerData
    }, /*#__PURE__*/_react["default"].createElement(_reactMapGl.Layer, {
      id: "mr-geojson-layer",
      type: "fill",
      paint: props.layerStyle
    }));
  } else {
    return null;
  }
});

MapGeojsonLayer.displayName = "MapGeojsonLayer";
MapGeojsonLayer.propTypes = {
  layerData: _propTypes["default"].object.isRequired,
  layerStyle: _propTypes["default"].object.isRequired,
  mapId: _propTypes["default"].string.isRequired,
  showRegions: _propTypes["default"].bool.isRequired
};
var _default = MapGeojsonLayer;
exports["default"] = _default;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _geojsonLayerData = _interopRequireDefault(__webpack_require__(104));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _regionsColoursMap = _interopRequireDefault(__webpack_require__(526));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// function defaultValueFunction(rows) {
//   return rows.length;
// }
// const computeColourMethods = {
//   max,
//   mean,
//   median,
//   min,
//   mode,
//   sum,
//   first: firstElement,
//   last: lastElement,
//   unique: uniqueElementsCount,
// };
// const regionValueFunctionSelector = createKeyedStateSelector(
//   (state) => fieldsMapSelector(state),
//   (state, mapId) => state.maps[mapId].regionsColourField,
//   (state, mapId) => state.maps[mapId].regionsColourMethod,
//   (
//     fieldsMap,
//     regionsColourFieldName,
//     regionsColourMethod,
//   ) => {
//     if (regionsColourFieldName) {
//       const regionsColourDataField = fieldsMap.get(regionsColourFieldName);
//       const colourMethod = regionsColourMethod || (regionsColourDataField.isNumeric ? "sum" : "mode");
//       return (rows) => {
//         return computeColourMethods[colourMethod](
//           rows,
//           (x) => x[regionsColourDataField.name],
//         );
//       };
//     }
//     else {
//       return defaultValueFunction;
//     }
//   },
// );
// const regionColourFunctionSelector = createKeyedStateSelector(
//   (state, mapId) => rowsByRegionSelector(state, mapId),
//   // (state, mapId) => state.maps[mapId].regionsColourField,
//   (state, mapId) => state.maps[mapId].regionsColourPalette,
//   (state, mapId) => regionValueFunctionSelector(state, mapId),
//   (
//     rowsByRegion,
//     // regionsColourFieldName,
//     regionsColourPaletteName,
//     regionValueFunction,
//   ) => {
//     const domainValues = [];
//     for (const regionId of Object.keys(rowsByRegion)) {
//       const regionRows = rowsByRegion[regionId];
//       if (regionRows.length) {
//         const value = regionValueFunction(regionRows);
//         domainValues.push(value);
//       }
//     }
//     const colourPalette = colourRanges.find((x) => x.name === regionsColourPaletteName);
//     const colourGetter = scaleLinear()
//       .domain(extent(domainValues))
//       .range([ colourPalette.entries[0], colourPalette.entries[colourPalette.entries.length - 1] ]);
//     return (rows) => (rows.length ? colourGetter(regionValueFunction(rows)) : "transparent");
//   },
// );
var geojsonLayerStyleSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _geojsonLayerData["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _regionsColoursMap["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).showRegionOutlines;
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).regionsColourOpacity;
}, function (geojson, regionColours, showRegionOutlines, regionsColourOpacity) {
  var color = {
    property: "mr-region-id",
    stops: []
  };

  var _iterator = _createForOfIteratorHelper(geojson.features),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _regionColours$featur, _regionColours$featur2;

      var feature = _step.value;
      color.stops.push([feature.properties["mr-region-id"], (_regionColours$featur = (_regionColours$featur2 = regionColours[feature.properties["mr-region-id"]]) === null || _regionColours$featur2 === void 0 ? void 0 : _regionColours$featur2.colour) !== null && _regionColours$featur !== void 0 ? _regionColours$featur : "transparent"]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var style = {
    "fill-color": color,
    "fill-opacity": regionsColourOpacity / 100,
    "fill-outline-color": showRegionOutlines ? "rgba(0, 0, 0, 1)" : color
  };

  if (regionsColourOpacity === 0) {
    style["fill-opacity"] = 100;
    style["fill-color"] = "rgba(0, 0, 0, 0)";
  }

  return style;
});
var _default = geojsonLayerStyleSelector;
exports["default"] = _default;

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = __webpack_require__(96);

var _filters = __webpack_require__(51);

var _maps = __webpack_require__(73);

var _markerSizeLegendItems = _interopRequireDefault(__webpack_require__(574));

var _maxScaledMarkerSize = _interopRequireDefault(__webpack_require__(503));

var _minScaledMarkerSize = _interopRequireDefault(__webpack_require__(501));

var _MapLegend = _interopRequireDefault(__webpack_require__(575));

var _scaleMarkersField = _interopRequireDefault(__webpack_require__(577));

var _markersLayerData = _interopRequireDefault(__webpack_require__(167));

var _regionColourLegendItems = _interopRequireDefault(__webpack_require__(578));

var _hasMarkerSizeLegend = _interopRequireDefault(__webpack_require__(523));

var _hasRegionColourLegend = _interopRequireDefault(__webpack_require__(524));

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  var hasMarkerSizeLegend = (0, _hasMarkerSizeLegend["default"])(state, mapId);
  var hasRegionColourLegend = (0, _hasRegionColourLegend["default"])(state, mapId);
  var mapState = state.maps[mapId];
  return {
    hasMarkerSizeLegend: hasMarkerSizeLegend,
    hasRegionColourLegend: hasRegionColourLegend,
    markers: (0, _markersLayerData["default"])(state, mapId),
    markerSizeLegendItems: hasMarkerSizeLegend ? (0, _markerSizeLegendItems["default"])(state, mapId) : null,
    maxScaledMarkerSize: (0, _maxScaledMarkerSize["default"])(state, mapId),
    minScaledMarkerSize: (0, _minScaledMarkerSize["default"])(state, mapId),
    nodeSize: mapState.nodeSize,
    regionColourLegendItems: hasRegionColourLegend ? (0, _regionColourLegendItems["default"])(state, mapId) : null,
    scaleMarkersDataField: (0, _scaleMarkersField["default"])(state, mapId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var mapId = _ref2.mapId;
  return {
    onMaxMarkerSizeChange: function onMaxMarkerSizeChange(value) {
      return dispatch((0, _maps.update)(mapId, "maxMarkerSize", value));
    },
    onMinMarkerSizeChange: function onMinMarkerSizeChange(value) {
      return dispatch((0, _maps.update)(mapId, "minMarkerSize", value));
    },
    onNodeSizeChange: function onNodeSizeChange(value) {
      return dispatch((0, _maps.update)(mapId, "nodeSize", Number(value)));
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    }
  };
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return mapStateToProps(state.present, props);
}, mapDispatchToProps)(_MapLegend["default"]);

exports["default"] = _default;

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _markersLayerData = _interopRequireDefault(__webpack_require__(167));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var _maxScaledMarkerSize = _interopRequireDefault(__webpack_require__(503));

var _minScaledMarkerSize = _interopRequireDefault(__webpack_require__(501));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var numberOfMarks = {
  1: [1],
  2: [0, 1],
  3: [0, 0.5, 1],
  4: [0, 0.33, 0.67, 1],
  5: [0, 0.25, 0.5, 0.75, 1]
};
var markerSizeLegendItemsSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _markersLayerData["default"])(state, mapId);
}, function (state, mapId) {
  return (0, _minScaledMarkerSize["default"])(state, mapId) / 2;
}, function (state, mapId) {
  return (0, _maxScaledMarkerSize["default"])(state, mapId) / 2;
}, function (markers, minScaledMarkerRadius, maxScaledMarkerRadius) {
  var markersByMagnitude = new Map();

  var _iterator = _createForOfIteratorHelper(markers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var marker = _step.value;

      if (marker.magnitude) {
        markersByMagnitude.set(marker.magnitude, marker);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var orderedMarks = Array.from(markersByMagnitude.keys()).sort(function (a, b) {
    return a - b;
  });
  var items = [];
  var radiusRange = maxScaledMarkerRadius - minScaledMarkerRadius;

  if (orderedMarks.length > 0) {
    var marks = numberOfMarks[Math.min(5, orderedMarks.length)];

    var _iterator2 = _createForOfIteratorHelper(marks),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var mark = _step2.value;
        var index = Math.round(mark * (orderedMarks.length - 1));
        var value = orderedMarks[index];
        items.push({
          value: value,
          radius: minScaledMarkerRadius + radiusRange * markersByMagnitude.get(value).ratio
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return items;
});
var _default = markerSizeLegendItemsSelector;
exports["default"] = _default;

/***/ }),

/***/ 575:
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

var _CloseRounded = _interopRequireDefault(__webpack_require__(47));

var _MapTwoTone = _interopRequireDefault(__webpack_require__(461));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(576);

var _propTypes2 = __webpack_require__(14);

var _UiPopoverMenu = _interopRequireDefault(__webpack_require__(45));

var _UiSlider = _interopRequireDefault(__webpack_require__(177));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MapLegend = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MapLegend, _React$PureComponent);

  var _super = _createSuper(MapLegend);

  function MapLegend() {
    var _this;

    (0, _classCallCheck2["default"])(this, MapLegend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isExpanded: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectRows", function (value, event) {
      var append = event.metaKey || event.ctrlKey;
      var rowIds = [];

      var _iterator = _createForOfIteratorHelper(_this.props.markers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var marker = _step.value;

          if (marker.magnitude === value) {
            var _iterator2 = _createForOfIteratorHelper(marker.rows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;
                rowIds.push(row[0]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _this.props.onSelectRows(rowIds, append);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleLegend", function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(MapLegend, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _props$regionColourLe,
          _props$regionColourLe2,
          _props$regionColourLe3,
          _props$regionColourLe4;

      var props = this.props;

      if (!this.state.isExpanded) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-map-legend-button",
          onClick: this.toggleLegend,
          title: "Expand Legend"
        }, /*#__PURE__*/_react["default"].createElement(_MapTwoTone["default"], null));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-map-legend"
      }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], {
        onClick: this.toggleLegend,
        title: "Collapse Legend"
      }), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, props.hasMarkerSizeLegend && /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("table", {
        className: "mr-legend-table"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2",
        title: props.scaleMarkersDataField ? props.scaleMarkersDataField.name : "# entries"
      }, "Marker", /*#__PURE__*/_react["default"].createElement("br", null), "Size"))), /*#__PURE__*/_react["default"].createElement("tbody", null, props.markerSizeLegendItems.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: item.value
        }, /*#__PURE__*/_react["default"].createElement("td", {
          title: "".concat(Math.round(item.radius * 2), " px")
        }, /*#__PURE__*/_react["default"].createElement("svg", {
          width: "".concat(props.maxScaledMarkerSize * 2 + 2, "px"),
          height: "".concat(item.radius * 2 + 2, "px"),
          xmlns: "http://www.w3.org/2000/svg",
          onClick: function onClick(event) {
            return _this2.selectRows(item.value, event);
          }
        }, /*#__PURE__*/_react["default"].createElement("circle", {
          cx: props.maxScaledMarkerSize + 1,
          cy: item.radius + 1,
          r: item.radius
        }))), /*#__PURE__*/_react["default"].createElement("td", null, item.value));
      })))), props.hasRegionColourLegend && /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("table", {
        className: "mr-legend-table"
      }, /*#__PURE__*/_react["default"].createElement("thead", {
        style: {
          height: "16px"
        }
      }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2",
        title: props.scaleMarkersDataField ? props.scaleMarkersDataField.name : "# entries"
      }, "Region", /*#__PURE__*/_react["default"].createElement("br", null), "Colour"))), /*#__PURE__*/_react["default"].createElement("tbody", {
        style: {
          height: "calc(100% - 16px)"
        }
      }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          background: "linear-gradient(".concat((_props$regionColourLe = props.regionColourLegendItems[0]) === null || _props$regionColourLe === void 0 ? void 0 : _props$regionColourLe.colour, ", ").concat((_props$regionColourLe2 = props.regionColourLegendItems[props.regionColourLegendItems.length - 1]) === null || _props$regionColourLe2 === void 0 ? void 0 : _props$regionColourLe2.colour, ")"),
          minWidth: "8px"
        },
        rowSpan: "2"
      }, "\xA0"), /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          verticalAlign: "top",
          textAlign: "left"
        }
      }, "\xA0", (_props$regionColourLe3 = props.regionColourLegendItems[0]) === null || _props$regionColourLe3 === void 0 ? void 0 : _props$regionColourLe3.value)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          verticalAlign: "bottom",
          textAlign: "left"
        }
      }, "\xA0", (_props$regionColourLe4 = props.regionColourLegendItems[props.regionColourLegendItems.length - 1]) === null || _props$regionColourLe4 === void 0 ? void 0 : _props$regionColourLe4.value)))))))));
    }
  }]);
  return MapLegend;
}(_react["default"].PureComponent);

MapLegend.displayName = "MapLegend";
MapLegend.propTypes = {
  hasMarkerSizeLegend: _propTypes["default"].bool.isRequired,
  hasRegionColourLegend: _propTypes["default"].bool.isRequired,
  markers: _propTypes["default"].array.isRequired,
  markerSizeLegendItems: _propTypes["default"].array,
  maxScaledMarkerSize: _propTypes["default"].number.isRequired,
  onSelectRows: _propTypes["default"].func.isRequired,
  regionColourLegendItems: _propTypes["default"].array,
  scaleMarkersDataField: _propTypes2.DataColumn
};
var _default = MapLegend;
exports["default"] = _default;

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

var _mapState = _interopRequireDefault(__webpack_require__(30));

var scaleMarkersFieldSelector = (0, _state.createKeyedStateSelector)(function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (state, mapId) {
  return (0, _mapState["default"])(state, mapId).scaleByField;
}, function (fieldsMap, scaleByField) {
  if (scaleByField) {
    return fieldsMap.get(scaleByField);
  } else {
    return undefined;
  }
});
var _default = scaleMarkersFieldSelector;
exports["default"] = _default;

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(2);

var _regionsColoursMap = _interopRequireDefault(__webpack_require__(526));

var regionColourLegendItemsSelector = (0, _state.createKeyedStateSelector)(function (state, mapId) {
  return (0, _regionsColoursMap["default"])(state, mapId);
}, function (regionColoursMap) {
  return Object.values(regionColoursMap).sort(function (a, b) {
    return a.value - b.value;
  });
});
var _default = regionColourLegendItemsSelector;
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

var _rowsByRegion = _interopRequireDefault(__webpack_require__(180));

var _MapTooltip = _interopRequireDefault(__webpack_require__(580));

var _state = __webpack_require__(2);

var mapStateToProps = function mapStateToProps(state, _ref) {
  var mapId = _ref.mapId;
  return {
    rowsByRegion: (0, _rowsByRegion["default"])(state, mapId)
  };
};

var _default = (0, _state.connectToPresentState)(_MapTooltip["default"], mapStateToProps);

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

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var MapTooltip = /*#__PURE__*/_react["default"].memo(function (props) {
  if (props.region) {
    var properties = [];

    for (var _i = 0, _Object$keys = Object.keys(props.region.properties); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (key !== "mr-region-id") {
        properties.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: key
        }, key, ": ", /*#__PURE__*/_react["default"].createElement("strong", null, props.region.properties[key])));
      }
    }

    var numberOfRowsInRegion = props.rowsByRegion[props.region.properties["mr-region-id"]].length;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-tooltip",
      style: {
        left: props.x + 4,
        top: props.y + 4
      }
    }, /*#__PURE__*/_react["default"].createElement("center", null, "Region"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", null, numberOfRowsInRegion, " ", numberOfRowsInRegion === 1 ? "row" : "rows", "."), properties);
  } else if (props.marker) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mr-tooltip",
      style: {
        left: props.x + 4,
        top: props.y + 4
      }
    }, /*#__PURE__*/_react["default"].createElement("center", null, "Marker"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", null, "Location: ", props.marker.position.join(", ")), props.marker.rows.length === 1 ? /*#__PURE__*/_react["default"].createElement("div", null, "Row ID: ", props.marker.rows[0][0]) : /*#__PURE__*/_react["default"].createElement("div", null, props.marker.rows.length, " rows."));
  }

  return null;
});

MapTooltip.displayName = "MapTooltip";
MapTooltip.propTypes = {
  marker: _propTypes["default"].object,
  region: _propTypes["default"].object,
  rowsByRegion: _propTypes["default"].object,
  x: _propTypes["default"].number,
  y: _propTypes["default"].number
};
var _default = MapTooltip;
exports["default"] = _default;

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mapState = _interopRequireDefault(__webpack_require__(30));

function isValidMapSelector(state, mapId) {
  var mapState = (0, _mapState["default"])(state, mapId);
  return mapState.dataType === "geographic-coordinates" && mapState.latitudeField && mapState.longitudeField || mapState.dataType === "iso-3166-codes" && mapState.iso3166Field;
}

var _default = isValidMapSelector;
exports["default"] = _default;

/***/ })

}]);