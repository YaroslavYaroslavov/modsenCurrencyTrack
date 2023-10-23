"use strict";
(self["webpackChunkmodsencurtrack"] = self["webpackChunkmodsencurtrack"] || []).push([[739],{

/***/ 4739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_BankCard)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/pages/BankCard/styled.css
var styled = __webpack_require__(8653);
;// CONCATENATED MODULE: ./src/components/pages/BankCard/styled.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styled/* default */.Z, options);




       /* harmony default export */ const BankCard_styled = (styled/* default */.Z && styled/* default */.Z.locals ? styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/constants/banksData.js
var BanksCurrencyHave = [{
  bankName: 'Приорбанк',
  haveCurrency: ['USD', 'EUR'],
  coord: [55.485576, 28.768349],
  balloonContent: 'улица Евфросиньи Полоцкой, 1А'
}, {
  bankName: 'Беларусбанк',
  haveCurrency: ['TRY', 'JPY'],
  coord: [55.490309, 28.780989],
  balloonContent: 'Октябрьская улица, 39, Полоцк, Витебская область'
}, {
  bankName: 'Белинвестбанк',
  haveCurrency: ['BTC'],
  coord: [55.484639, 28.772916],
  balloonContent: 'проспект Франциска Скорины, 24, Полоцк, Витебская область'
}];
/* harmony default export */ const banksData = (BanksCurrencyHave);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/pages/BankCard/Autocomplete/styled.css
var Autocomplete_styled = __webpack_require__(985);
;// CONCATENATED MODULE: ./src/components/pages/BankCard/Autocomplete/styled.css

      
      
      
      
      
      
      
      
      

var styled_options = {};

styled_options.styleTagTransform = (styleTagTransform_default());
styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      styled_options.insert = insertBySelector_default().bind(null, "head");
    
styled_options.domAPI = (styleDomAPI_default());
styled_options.insertStyleElement = (insertStyleElement_default());

var styled_update = injectStylesIntoStyleTag_default()(Autocomplete_styled/* default */.Z, styled_options);




       /* harmony default export */ const BankCard_Autocomplete_styled = (Autocomplete_styled/* default */.Z && Autocomplete_styled/* default */.Z.locals ? Autocomplete_styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/helpers/findCoordByCur.js
var findCoordinatesByCurrency = function findCoordinatesByCurrency(banks, suggestion) {
  var bank = banks.find(function (bank) {
    return bank.haveCurrency.includes(suggestion);
  });
  if (bank) {
    return bank.coord;
  }
  return null;
};
/* harmony default export */ const findCoordByCur = (findCoordinatesByCurrency);
;// CONCATENATED MODULE: ./src/components/pages/BankCard/Autocomplete/config.js
var autocompleteConfig = {
  notFoundMessage: 'Not found'
};
/* harmony default export */ const config = (autocompleteConfig);
;// CONCATENATED MODULE: ./src/components/pages/BankCard/Autocomplete/index.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var notFoundMessage = config.notFoundMessage;
var AutocompleteInput = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AutocompleteInput, _React$PureComponent);
  var _super = _createSuper(AutocompleteInput);
  function AutocompleteInput(props) {
    var _this;
    _classCallCheck(this, AutocompleteInput);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var value = event.target.value;
      _this.setState({
        inputValue: value
      });
      if (value) {
        var mockSuggestions = Array.from(new Set(banksData.flatMap(function (bank) {
          return bank.haveCurrency;
        })));
        var filteredSuggestions = mockSuggestions.filter(function (suggestion) {
          return suggestion.toLowerCase().includes(value.toLowerCase());
        });
        _this.setState({
          suggestions: filteredSuggestions
        });
      } else {
        _this.setState({
          suggestions: []
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleSuggestionClick", function (suggestion) {
      var coord = findCoordByCur(banksData, suggestion);
      if (coord) {
        _this.props.handleZoomPoint(coord);
      }
      _this.setState({
        inputValue: '',
        suggestions: []
      });
    });
    _this.state = {
      inputValue: '',
      suggestions: []
    };
    return _this;
  }
  _createClass(AutocompleteInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        inputValue = _this$state.inputValue,
        suggestions = _this$state.suggestions;
      return /*#__PURE__*/react.createElement("div", {
        className: "autocompleteInputWrapper flexColumn"
      }, /*#__PURE__*/react.createElement("input", {
        className: "autocompleteInput",
        type: "text",
        value: inputValue,
        onChange: this.handleInputChange,
        placeholder: "Type currency code"
      }), /*#__PURE__*/react.createElement("div", {
        className: "suggestionWrapper"
      }, inputValue && !suggestions.length ? /*#__PURE__*/react.createElement("div", {
        className: "suggestion"
      }, notFoundMessage) : suggestions.map(function (suggestion) {
        return /*#__PURE__*/react.createElement("div", {
          key: suggestion,
          className: "suggestion",
          onClick: _this2.handleSuggestionClick.bind(_this2, suggestion)
        }, suggestion);
      })));
    }
  }]);
  return AutocompleteInput;
}(react.PureComponent);
AutocompleteInput.propTypes = {
  handleZoomPoint: (prop_types_default()).func
};
/* harmony default export */ const Autocomplete = (AutocompleteInput);
;// CONCATENATED MODULE: ./src/components/pages/BankCard/index.jsx
function BankCard_typeof(o) { "@babel/helpers - typeof"; return BankCard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, BankCard_typeof(o); }
function BankCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function BankCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, BankCard_toPropertyKey(descriptor.key), descriptor); } }
function BankCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) BankCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) BankCard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function BankCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) BankCard_setPrototypeOf(subClass, superClass); }
function BankCard_setPrototypeOf(o, p) { BankCard_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BankCard_setPrototypeOf(o, p); }
function BankCard_createSuper(Derived) { var hasNativeReflectConstruct = BankCard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = BankCard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = BankCard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BankCard_possibleConstructorReturn(this, result); }; }
function BankCard_possibleConstructorReturn(self, call) { if (call && (BankCard_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return BankCard_assertThisInitialized(self); }
function BankCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function BankCard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function BankCard_getPrototypeOf(o) { BankCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BankCard_getPrototypeOf(o); }
function BankCard_defineProperty(obj, key, value) { key = BankCard_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function BankCard_toPropertyKey(arg) { var key = BankCard_toPrimitive(arg, "string"); return BankCard_typeof(key) === "symbol" ? key : String(key); }
function BankCard_toPrimitive(input, hint) { if (BankCard_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (BankCard_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var BankCard = /*#__PURE__*/function (_Component) {
  BankCard_inherits(BankCard, _Component);
  var _super = BankCard_createSuper(BankCard);
  function BankCard(props) {
    var _this;
    BankCard_classCallCheck(this, BankCard);
    _this = _super.call(this, props);
    BankCard_defineProperty(BankCard_assertThisInitialized(_this), "handleZoomPoint", function (coord) {
      var map = _this.state.map;
      map.panTo(coord);
      _this.mapRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
    _this.mapRef = /*#__PURE__*/react.createRef();
    _this.state = {
      ymaps: window.ymaps,
      map: null
    };
    return _this;
  }
  BankCard_createClass(BankCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.state.ymaps.ready(function () {
        var myMap = new _this2.state.ymaps.Map(_this2.mapRef.current, {
          center: [55.485576, 28.768349],
          zoom: 14
        }, {
          searchControlProvider: 'yandex#search'
        });
        banksData.forEach(function (bank) {
          var placemark = new _this2.state.ymaps.Placemark(bank.coord, {
            hintContent: bank.bankName,
            balloonContent: bank.balloonContent
          }, {
            iconLayout: 'default#imageWithContent',
            iconImageSize: [50, 50],
            iconImageOffset: [-25, -50],
            iconContentOffset: [15, 15]
          });
          myMap.geoObjects.add(placemark);
        });
        _this2.setState({
          map: myMap
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Autocomplete, {
        handleZoomPoint: this.handleZoomPoint
      }), /*#__PURE__*/react.createElement("div", {
        ref: this.mapRef,
        id: "map",
        className: "yandexMap"
      }));
    }
  }]);
  return BankCard;
}(react.Component);
/* harmony default export */ const pages_BankCard = (BankCard);

/***/ }),

/***/ 985:
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
___CSS_LOADER_EXPORT___.push([module.id, `.autocompleteInput {
  background: var(--input-background-color);
  color: var(--text-color);
  border: none;
  font-size: 18px;
  width: 350px;
  height: 65px;
  border-radius: 10px;
  padding-left: 20px;
  box-sizing: border-box;
}
.autocompleteInput::placeholder {
  color: var(--text-color);
}
.autocompleteInputWrapper {
  width: 350px;
  margin: auto;

  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
  position: relative;
}
.suggestionWrapper {
  position: absolute;
  top: 68px;
  z-index: 1;
  transition: 0.3s;
}
.suggestion {
  background: var(--input-background-color);
  color: var(--text-color);
  width: 350px;
  cursor: pointer;
  padding-left: 20px;
  height: 65px;
  display: flex;
  align-items: center;
  font-family: var(--font-Light);
}
.suggestion:hover {
  background-color: var(--hover-color);
}
@media (max-width: 900px) {
  .suggestion {
    width: 350px;
  }
  .autocompleteInput {
    width: 350px;
  }
}
@media (max-width: 430px) {
  .suggestion {
    width: 350px;
  }
  .autocompleteInput {
    width: 350px;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8653:
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
___CSS_LOADER_EXPORT___.push([module.id, `.yandexMap {
    width: 100%;
    height: 400px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);