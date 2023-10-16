"use strict";
(self["webpackChunkmodsencurtrack"] = self["webpackChunkmodsencurtrack"] || []).push([[104],{

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Timeline)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/styled.css
var styled = __webpack_require__(6324);
;// CONCATENATED MODULE: ./src/components/Timeline/styled.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styled/* default */.Z, options);




       /* harmony default export */ const Timeline_styled = (styled/* default */.Z && styled/* default */.Z.locals ? styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Modal/index.jsx + 2 modules
var Modal = __webpack_require__(3831);
;// CONCATENATED MODULE: ./src/components/Timeline/config.js
var TimelineConfig = {
  NOTATION_TEXT: 'Notation: High, Low - The highest and lowest price recorded during trades; Open - trades starts on this cost; Close - trades stops on this cost.',
  MAX_DATA_ENTERED_TEXT: 'The maximum number of values has been entered',
  DRAW_GRAPH_BUTTON_TEXT: 'Draw Graph',
  GUIDE_TEXT: 'Press on currency image to set data',
  MAX_DATA_ARRAY_LENGTH: 30
};
/* harmony default export */ const config = (TimelineConfig);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/Graph/styled.css
var Graph_styled = __webpack_require__(896);
;// CONCATENATED MODULE: ./src/components/Timeline/Graph/styled.css

      
      
      
      
      
      
      
      
      

var styled_options = {};

styled_options.styleTagTransform = (styleTagTransform_default());
styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      styled_options.insert = insertBySelector_default().bind(null, "head");
    
styled_options.domAPI = (styleDomAPI_default());
styled_options.insertStyleElement = (insertStyleElement_default());

var styled_update = injectStylesIntoStyleTag_default()(Graph_styled/* default */.Z, styled_options);




       /* harmony default export */ const Timeline_Graph_styled = (Graph_styled/* default */.Z && Graph_styled/* default */.Z.locals ? Graph_styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/components/Timeline/Graph/index.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var COLOR_GRAY = 'rgb(128,128,128)';
var Graph = /*#__PURE__*/function (_Component) {
  _inherits(Graph, _Component);
  var _super = _createSuper(Graph);
  function Graph(props) {
    var _this;
    _classCallCheck(this, Graph);
    _this = _super.call(this, props);
    _this.canvasRef = /*#__PURE__*/react.createRef();
    _this.myChart = null;
    return _this;
  }
  _createClass(Graph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        isReady = _this$props.isReady,
        datas = _this$props.datas;
      if (this.canvasRef.current && isReady) {
        var ctx = this.canvasRef.current.getContext('2d');
        this.myChart = new window.Chart(ctx, {
          type: 'candlestick',
          data: {
            datasets: [{
              data: datas,
              borderWidth: 2
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                grid: {
                  color: COLOR_GRAY
                },
                color: COLOR_GRAY
              },
              y: {
                grid: {
                  color: COLOR_GRAY
                },
                position: 'right',
                color: COLOR_GRAY
              }
            }
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.myChart) {
        this.myChart.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "canvasWrapper"
      }, /*#__PURE__*/react.createElement("canvas", {
        ref: this.canvasRef
      }));
    }
  }]);
  return Graph;
}(react.Component);
Graph.propTypes = {
  isReady: (prop_types_default()).bool,
  datas: (prop_types_default()).array
};
/* harmony default export */ const Timeline_Graph = (Graph);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/GraphDataInputs/styled.css
var GraphDataInputs_styled = __webpack_require__(7230);
;// CONCATENATED MODULE: ./src/components/Timeline/GraphDataInputs/styled.css

      
      
      
      
      
      
      
      
      

var GraphDataInputs_styled_options = {};

GraphDataInputs_styled_options.styleTagTransform = (styleTagTransform_default());
GraphDataInputs_styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      GraphDataInputs_styled_options.insert = insertBySelector_default().bind(null, "head");
    
GraphDataInputs_styled_options.domAPI = (styleDomAPI_default());
GraphDataInputs_styled_options.insertStyleElement = (insertStyleElement_default());

var GraphDataInputs_styled_update = injectStylesIntoStyleTag_default()(GraphDataInputs_styled/* default */.Z, GraphDataInputs_styled_options);




       /* harmony default export */ const Timeline_GraphDataInputs_styled = (GraphDataInputs_styled/* default */.Z && GraphDataInputs_styled/* default */.Z.locals ? GraphDataInputs_styled/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/helpers/addOneDay.js
var addOneDay = function addOneDay(dateString) {
  var date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
};
/* harmony default export */ const helpers_addOneDay = (addOneDay);
;// CONCATENATED MODULE: ./src/helpers/formatDate.js
var formatDate = function formatDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
};
/* harmony default export */ const helpers_formatDate = (formatDate);
;// CONCATENATED MODULE: ./src/components/Timeline/GraphDataInputs/config.js
var GraphDataInputsConfig = {
  WARNING_MESSAGE_INVALID_DATA: 'Close value must be between Low and High values',
  ADD_INPUT_TEXT: 'Add'
};
/* harmony default export */ const GraphDataInputs_config = (GraphDataInputsConfig);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/GraphDataInputs/TradeInput/styled.css
var TradeInput_styled = __webpack_require__(3655);
;// CONCATENATED MODULE: ./src/components/Timeline/GraphDataInputs/TradeInput/styled.css

      
      
      
      
      
      
      
      
      

var TradeInput_styled_options = {};

TradeInput_styled_options.styleTagTransform = (styleTagTransform_default());
TradeInput_styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      TradeInput_styled_options.insert = insertBySelector_default().bind(null, "head");
    
TradeInput_styled_options.domAPI = (styleDomAPI_default());
TradeInput_styled_options.insertStyleElement = (insertStyleElement_default());

var TradeInput_styled_update = injectStylesIntoStyleTag_default()(TradeInput_styled/* default */.Z, TradeInput_styled_options);




       /* harmony default export */ const GraphDataInputs_TradeInput_styled = (TradeInput_styled/* default */.Z && TradeInput_styled/* default */.Z.locals ? TradeInput_styled/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Timeline/GraphDataInputs/TradeInput/config.js
var tradeInputConfig = {
  MAX_INPUT_LENGTH: 10
};
/* harmony default export */ const TradeInput_config = (tradeInputConfig);
;// CONCATENATED MODULE: ./src/components/Timeline/GraphDataInputs/TradeInput/index.jsx




var TradeInput = function TradeInput(_ref) {
  var setValue = _ref.setValue,
    label = _ref.label,
    value = _ref.value;
  var checkLength = function checkLength(e) {
    if (e.target.value.length > TradeInput_config.MAX_INPUT_LENGTH) {
      return false;
    } else return true;
  };
  var handleChangeInput = function handleChangeInput(e) {
    checkLength(e) && setValue(e);
  };
  return /*#__PURE__*/react.createElement("label", {
    className: "labelInput"
  }, label, " value:", /*#__PURE__*/react.createElement("input", {
    type: "number",
    onChange: handleChangeInput,
    placeholder: label,
    value: value || '',
    className: "tradeInput"
  }));
};
TradeInput.propTypes = {
  setValue: (prop_types_default()).func,
  label: (prop_types_default()).string,
  value: (prop_types_default()).number
};
/* harmony default export */ const GraphDataInputs_TradeInput = (TradeInput);
;// CONCATENATED MODULE: ./src/components/Timeline/GraphDataInputs/index.jsx
function GraphDataInputs_typeof(o) { "@babel/helpers - typeof"; return GraphDataInputs_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, GraphDataInputs_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function GraphDataInputs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function GraphDataInputs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, GraphDataInputs_toPropertyKey(descriptor.key), descriptor); } }
function GraphDataInputs_createClass(Constructor, protoProps, staticProps) { if (protoProps) GraphDataInputs_defineProperties(Constructor.prototype, protoProps); if (staticProps) GraphDataInputs_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function GraphDataInputs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) GraphDataInputs_setPrototypeOf(subClass, superClass); }
function GraphDataInputs_setPrototypeOf(o, p) { GraphDataInputs_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GraphDataInputs_setPrototypeOf(o, p); }
function GraphDataInputs_createSuper(Derived) { var hasNativeReflectConstruct = GraphDataInputs_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GraphDataInputs_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GraphDataInputs_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GraphDataInputs_possibleConstructorReturn(this, result); }; }
function GraphDataInputs_possibleConstructorReturn(self, call) { if (call && (GraphDataInputs_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return GraphDataInputs_assertThisInitialized(self); }
function GraphDataInputs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function GraphDataInputs_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function GraphDataInputs_getPrototypeOf(o) { GraphDataInputs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GraphDataInputs_getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = GraphDataInputs_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function GraphDataInputs_toPropertyKey(arg) { var key = GraphDataInputs_toPrimitive(arg, "string"); return GraphDataInputs_typeof(key) === "symbol" ? key : String(key); }
function GraphDataInputs_toPrimitive(input, hint) { if (GraphDataInputs_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (GraphDataInputs_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var GraphDataInputs = /*#__PURE__*/function (_Component) {
  GraphDataInputs_inherits(GraphDataInputs, _Component);
  var _super = GraphDataInputs_createSuper(GraphDataInputs);
  function GraphDataInputs(props) {
    var _this;
    GraphDataInputs_classCallCheck(this, GraphDataInputs);
    _this = _super.call(this, props);
    _defineProperty(GraphDataInputs_assertThisInitialized(_this), "handleButtonAddClick", function () {
      var _this$state = _this.state,
        open = _this$state.open,
        high = _this$state.high,
        low = _this$state.low,
        close = _this$state.close;
      var handleDatasChange = _this.props.handleDatasChange;
      if (close < low || close > high) {
        alert(GraphDataInputs_config.WARNING_MESSAGE_INVALID_DATA);
        return;
      }
      handleDatasChange(function (prev) {
        return [].concat(_toConsumableArray(prev), [{
          x: Date.parse(_this.dateInputRef.current.value),
          o: open,
          h: high,
          l: low,
          c: close
        }]);
      });
      _this.dateInputRef.current.value = helpers_addOneDay(_this.dateInputRef.current.value);
    });
    _this.state = {
      open: 0,
      high: 0,
      low: 0,
      close: 0
    };
    _this.dateInputRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  GraphDataInputs_createClass(GraphDataInputs, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react.createElement("div", {
        className: "inputsWrapper"
      }, /*#__PURE__*/react.createElement("h1", null, "Enter the data to display"), /*#__PURE__*/react.createElement(GraphDataInputs_TradeInput, {
        setValue: function setValue(e) {
          _this2.setState({
            open: +e.target.value
          });
        },
        label: "Open",
        value: this.state.open
      }), /*#__PURE__*/react.createElement(GraphDataInputs_TradeInput, {
        setValue: function setValue(e) {
          _this2.setState({
            high: +e.target.value
          });
        },
        label: "High",
        value: this.state.high
      }), /*#__PURE__*/react.createElement(GraphDataInputs_TradeInput, {
        setValue: function setValue(e) {
          _this2.setState({
            low: +e.target.value
          });
        },
        label: "Low",
        value: this.state.low
      }), /*#__PURE__*/react.createElement(GraphDataInputs_TradeInput, {
        setValue: function setValue(e) {
          _this2.setState({
            close: +e.target.value
          });
        },
        label: "Close",
        value: this.state.close
      }), /*#__PURE__*/react.createElement("label", {
        className: "labelInput"
      }, "Pick date:", /*#__PURE__*/react.createElement("input", {
        type: "date",
        defaultValue: helpers_formatDate(),
        ref: this.dateInputRef,
        className: "dateInput"
      })), /*#__PURE__*/react.createElement("button", {
        className: "buttonAddOHLC",
        onClick: this.handleButtonAddClick
      }, GraphDataInputs_config.ADD_INPUT_TEXT));
    }
  }]);
  return GraphDataInputs;
}(react.Component);
GraphDataInputs.propTypes = {
  handleDatasChange: (prop_types_default()).func
};
/* harmony default export */ const Timeline_GraphDataInputs = (GraphDataInputs);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/SelectCurrency/styled.css
var SelectCurrency_styled = __webpack_require__(2733);
;// CONCATENATED MODULE: ./src/components/Timeline/SelectCurrency/styled.css

      
      
      
      
      
      
      
      
      

var SelectCurrency_styled_options = {};

SelectCurrency_styled_options.styleTagTransform = (styleTagTransform_default());
SelectCurrency_styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      SelectCurrency_styled_options.insert = insertBySelector_default().bind(null, "head");
    
SelectCurrency_styled_options.domAPI = (styleDomAPI_default());
SelectCurrency_styled_options.insertStyleElement = (insertStyleElement_default());

var SelectCurrency_styled_update = injectStylesIntoStyleTag_default()(SelectCurrency_styled/* default */.Z, SelectCurrency_styled_options);




       /* harmony default export */ const Timeline_SelectCurrency_styled = (SelectCurrency_styled/* default */.Z && SelectCurrency_styled/* default */.Z.locals ? SelectCurrency_styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/constants/currencyIcons.js + 11 modules
var currencyIcons = __webpack_require__(9883);
;// CONCATENATED MODULE: ./src/components/Timeline/SelectCurrency/index.jsx




var SelectCurrency = function SelectCurrency(_ref) {
  var handleCurrencyChange = _ref.handleCurrencyChange,
    selectedCurrency = _ref.selectedCurrency;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", {
    className: "selectCurrency",
    value: selectedCurrency,
    onChange: handleCurrencyChange
  }, Object.keys(currencyIcons/* default */.Z).map(function (key) {
    var element = currencyIcons/* default */.Z[key];
    if (element.isCurrency) {
      return /*#__PURE__*/react.createElement("option", {
        key: key,
        value: key
      }, element.displayName);
    }
  })));
};
SelectCurrency.propTypes = {
  handleCurrencyChange: (prop_types_default()).func,
  selectedCurrency: (prop_types_default()).string
};
/* harmony default export */ const Timeline_SelectCurrency = (SelectCurrency);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/SelectedCurrencyCard/styled.css
var SelectedCurrencyCard_styled = __webpack_require__(6242);
;// CONCATENATED MODULE: ./src/components/Timeline/SelectedCurrencyCard/styled.css

      
      
      
      
      
      
      
      
      

var SelectedCurrencyCard_styled_options = {};

SelectedCurrencyCard_styled_options.styleTagTransform = (styleTagTransform_default());
SelectedCurrencyCard_styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      SelectedCurrencyCard_styled_options.insert = insertBySelector_default().bind(null, "head");
    
SelectedCurrencyCard_styled_options.domAPI = (styleDomAPI_default());
SelectedCurrencyCard_styled_options.insertStyleElement = (insertStyleElement_default());

var SelectedCurrencyCard_styled_update = injectStylesIntoStyleTag_default()(SelectedCurrencyCard_styled/* default */.Z, SelectedCurrencyCard_styled_options);




       /* harmony default export */ const Timeline_SelectedCurrencyCard_styled = (SelectedCurrencyCard_styled/* default */.Z && SelectedCurrencyCard_styled/* default */.Z.locals ? SelectedCurrencyCard_styled/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Timeline/SelectedCurrencyCard/index.jsx




var SelectedCurrencyCard = function SelectedCurrencyCard(_ref) {
  var selectedCurrency = _ref.selectedCurrency,
    handleOpenModal = _ref.handleOpenModal;
  return /*#__PURE__*/react.createElement("div", {
    className: "selectedCurrency",
    onClick: handleOpenModal
  }, /*#__PURE__*/react.createElement("img", {
    className: "currencyIco",
    src: currencyIcons/* default */.Z[selectedCurrency].icon,
    alt: currencyIcons/* default */.Z[selectedCurrency].code
  }), /*#__PURE__*/react.createElement("div", {
    className: "currencyTextInfoWrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "currencyTextTitle"
  }, currencyIcons/* default */.Z[selectedCurrency].displayName), /*#__PURE__*/react.createElement("div", {
    className: "currencyTextCode"
  }, currencyIcons/* default */.Z[selectedCurrency].code)));
};
SelectedCurrencyCard.propTypes = {
  selectedCurrency: (prop_types_default()).string,
  handleOpenModal: (prop_types_default()).func
};
/* harmony default export */ const Timeline_SelectedCurrencyCard = (SelectedCurrencyCard);
;// CONCATENATED MODULE: ./src/components/Timeline/index.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Timeline_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Timeline_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Timeline_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Timeline_arrayLikeToArray(o, minLen); }
function Timeline_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Timeline = function Timeline() {
  var _useState = (0,react.useState)('australian_dollar'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCurrency = _useState2[0],
    setSelectedCurrency = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalActive = _useState4[0],
    setModalActive = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    datas = _useState6[0],
    setDatas = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isReadyToDraw = _useState8[0],
    setIsReadyToDraw = _useState8[1];
  var handleCurrencyChange = function handleCurrencyChange(event) {
    setIsReadyToDraw(false);
    setDatas([]);
    setSelectedCurrency(event.target.value);
    setModalActive(true);
  };
  var handleOpenModal = function handleOpenModal() {
    setModalActive(true);
  };
  var handleDrawGraph = function handleDrawGraph() {
    setIsReadyToDraw(true);
    setModalActive(false);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "timelineWrapper"
  }, /*#__PURE__*/react.createElement(Timeline_SelectCurrency, {
    selectedCurrency: selectedCurrency,
    handleCurrencyChange: handleCurrencyChange
  }), /*#__PURE__*/react.createElement(Timeline_SelectedCurrencyCard, {
    selectedCurrency: selectedCurrency,
    handleOpenModal: handleOpenModal
  }), isReadyToDraw ? /*#__PURE__*/react.createElement(Timeline_Graph, {
    isReady: isReadyToDraw,
    datas: datas
  }) : /*#__PURE__*/react.createElement("p", {
    className: "guide"
  }, config.GUIDE_TEXT), /*#__PURE__*/react.createElement(Modal/* default */.Z, {
    active: modalActive,
    setActive: setModalActive
  }, datas.length < config.MAX_DATA_ARRAY_LENGTH ? /*#__PURE__*/react.createElement(Timeline_GraphDataInputs, {
    handleDatasChange: setDatas
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, config.MAX_DATA_ENTERED_TEXT), /*#__PURE__*/react.createElement("button", {
    className: "drawGraph",
    onClick: handleDrawGraph
  }, config.DRAW_GRAPH_BUTTON_TEXT)), /*#__PURE__*/react.createElement("div", {
    className: "chartDataListWrapper"
  }, datas.length ? /*#__PURE__*/react.createElement("ol", {
    className: "chartDataList"
  }, datas.map(function (_ref, index) {
    var o = _ref.o,
      h = _ref.h,
      l = _ref.l,
      c = _ref.c;
    return /*#__PURE__*/react.createElement("li", {
      key: index,
      className: "charDataItem"
    }, /*#__PURE__*/react.createElement("span", null, "Trades Opens: ", o), /*#__PURE__*/react.createElement("span", null, "Maximum Cost: ", h), /*#__PURE__*/react.createElement("span", null, "Minimum Cost: ", l), /*#__PURE__*/react.createElement("span", null, "Trades Close: ", c));
  })) : /*#__PURE__*/react.createElement("p", null, config.NOTATION_TEXT))));
};
/* harmony default export */ const components_Timeline = (Timeline);

/***/ }),

/***/ 3655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tradeInput {
    width: 100%;
    height: 30px;
    text-align: center;
    font-family: 'Poppins-SemiBold';
    border: 1px solid var(--color-black);
}
.labelInput {
    display: flex;
    flex-direction: column;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.inputsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.buttonAddOHLC {
    width: 120px;
    height: 50px;
    background-color: transparent;
    border: 2px solid var(--color-black);
    font-family: 'Poppins-SemiBold';
    transition: 0.1s ease-in-out;
    font-size: large;
}
.buttonAddOHLC:hover {
    border: 6px solid var(--color-black);
}
.dateInput {
    width: 100%;
    height: 30px;
    text-align: center;
    font-family: 'Poppins-SemiBold';
    border: 1px solid var(--color-black);
    margin-top: 10px;
    margin-bottom: 10px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.canvasWrapper {
    width: auto !important;
    height: auto !important;
    overflow: scroll;
}
.canvasWrapper canvas {
    width: auto !important;
    height: auto !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.selectedCurrency {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: 'Poppins-Regular';
    color: var(--text-color);
    margin-bottom: 50px;
}
.currencyTextInfoWrapper {
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-between;
}
.currencyTextTitle {
    font-size: 35px;
}
.canvasWrapper {
    width: var(--container-width);
}
.selectCurrency {
    color: var(--text-color);
    background-color: var(--background-color);
    border: none;
    width: 300px;
    font-family: sans-serif;
    font-size: 30px;
    height: 100px;
    transition: 0.3s ease;
    margin-bottom: 150px;
    cursor: pointer;
}
.selectCurrency:hover {
    background-color: var(--hover-color);
}
@media (max-width: 400px) {
    .selectCurrency {
        width: 200px;
        font-size: 20px;
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 400px) {
    .selectedCurrency {
        width: 200px;
    }
    .currencyTextCode {
        font-size: 10px;
    }
    .currencyIco {
        transform: scale(0.8);
    }
}

.selectedCurrency {
    width: 450px;
    max-width: var(--container-width);
    cursor: pointer;
    transition: 0.5s;
}
.selectedCurrency:hover {
    background-color: var(--hover-color-input);
}
.currencyTextTitle {
    font-size: clamp(10px, 5vw, 40px);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.timelineWrapper {
    width: var(--container-width);
    margin: auto;
    display: flex;
    flex-direction: column;
}
body {
    counter-reset: section;
}
.guide {
    font-family: sans-serif;
    font-size: clamp(20px, 5vw, 40px);
    color: var(--text-color);
}

.chartDataList {
    max-height: 100px;
    overflow: auto;
}
.charDataItem {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    flex-direction: column;
    position: relative;
}
.charDataItem:before {
    counter-increment: section;
    content: counter(section) '.';
    position: absolute;
    margin-left: -20px;
}
.drawGraph {
    width: 120px;
    height: 50px;
    background-color: transparent;
    border: 2px solid var(--color-black);
    font-family: 'Poppins-SemiBold';
    transition: 0.1s ease-in-out;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);