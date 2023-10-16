"use strict";
(self["webpackChunkmodsencurtrack"] = self["webpackChunkmodsencurtrack"] || []).push([[894],{

/***/ 3894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Homepage)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Homepage/styled.css
var styled = __webpack_require__(7933);
;// CONCATENATED MODULE: ./src/components/Homepage/styled.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styled/* default */.Z, options);




       /* harmony default export */ const Homepage_styled = (styled/* default */.Z && styled/* default */.Z.locals ? styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/constants/currencyIcons.js + 11 modules
var currencyIcons = __webpack_require__(9883);
// EXTERNAL MODULE: ./src/helpers/getDataFromLocalStorage.js
var getDataFromLocalStorage = __webpack_require__(6317);
// EXTERNAL MODULE: ./src/components/Modal/index.jsx + 2 modules
var Modal = __webpack_require__(3831);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Homepage/CurrencyCard/styled.css
var CurrencyCard_styled = __webpack_require__(3006);
;// CONCATENATED MODULE: ./src/components/Homepage/CurrencyCard/styled.css

      
      
      
      
      
      
      
      
      

var styled_options = {};

styled_options.styleTagTransform = (styleTagTransform_default());
styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      styled_options.insert = insertBySelector_default().bind(null, "head");
    
styled_options.domAPI = (styleDomAPI_default());
styled_options.insertStyleElement = (insertStyleElement_default());

var styled_update = injectStylesIntoStyleTag_default()(CurrencyCard_styled/* default */.Z, styled_options);




       /* harmony default export */ const Homepage_CurrencyCard_styled = (CurrencyCard_styled/* default */.Z && CurrencyCard_styled/* default */.Z.locals ? CurrencyCard_styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/components/Homepage/CurrencyCard/config.js
var configCurrencyCard = {
  NO_INFO_MSG: 'No info yet'
};
/* harmony default export */ const config = (configCurrencyCard);
;// CONCATENATED MODULE: ./src/components/Homepage/CurrencyCard/index.jsx






var CurrencyCard = function CurrencyCard(_ref) {
  var _ref$currency = _ref.currency,
    currency = _ref$currency === void 0 ? 'ifix' : _ref$currency,
    _ref$convertTo = _ref.convertTo,
    convertTo = _ref$convertTo === void 0 ? null : _ref$convertTo,
    onClick = _ref.onClick,
    _ref$isCurrency = _ref.isCurrency,
    isCurrency = _ref$isCurrency === void 0 ? false : _ref$isCurrency;
  var currencyFrom = currencyIcons/* default */.Z[currency];
  var currencyTo = currencyIcons/* default */.Z[convertTo];
  var notVisible = currencyFrom === currencyTo;
  var _getDataFromLocalStor = (0,getDataFromLocalStorage/* default */.Z)(),
    data = _getDataFromLocalStor.data;
  var convertedValue = (0,react.useMemo)(function () {
    if (!isCurrency) return;
    return (data === null || data === void 0 ? void 0 : data.data[currencyTo.code].value) / (data === null || data === void 0 ? void 0 : data.data[currencyFrom.code].value);
  }, [isCurrency, data, currencyTo, currencyFrom]);
  var handleOpenModal = function handleOpenModal() {
    onClick(true);
  };
  if (notVisible) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", {
    onClick: handleOpenModal,
    className: "card-wrapper"
  }, /*#__PURE__*/react.createElement("img", {
    src: currencyFrom === null || currencyFrom === void 0 ? void 0 : currencyFrom.icon,
    alt: "card icon",
    className: "card-ico"
  }), /*#__PURE__*/react.createElement("div", {
    className: "card-text"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-title"
  }, currencyFrom === null || currencyFrom === void 0 ? void 0 : currencyFrom.displayName), /*#__PURE__*/react.createElement("div", {
    className: "card-subtitle"
  }, convertTo && (currencyTo === null || currencyTo === void 0 ? void 0 : currencyTo.currencyText) + ' ' + convertedValue.toFixed(5) || config.NO_INFO_MSG)));
};
CurrencyCard.propTypes = {
  currency: (prop_types_default()).string,
  convertTo: (prop_types_default()).string,
  onClick: (prop_types_default()).func,
  data: (prop_types_default()).object
};
/* harmony default export */ const Homepage_CurrencyCard = (CurrencyCard);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Homepage/CurrencyTable/styled.css
var CurrencyTable_styled = __webpack_require__(7700);
;// CONCATENATED MODULE: ./src/components/Homepage/CurrencyTable/styled.css

      
      
      
      
      
      
      
      
      

var CurrencyTable_styled_options = {};

CurrencyTable_styled_options.styleTagTransform = (styleTagTransform_default());
CurrencyTable_styled_options.setAttributes = (setAttributesWithoutAttributes_default());

      CurrencyTable_styled_options.insert = insertBySelector_default().bind(null, "head");
    
CurrencyTable_styled_options.domAPI = (styleDomAPI_default());
CurrencyTable_styled_options.insertStyleElement = (insertStyleElement_default());

var CurrencyTable_styled_update = injectStylesIntoStyleTag_default()(CurrencyTable_styled/* default */.Z, CurrencyTable_styled_options);




       /* harmony default export */ const Homepage_CurrencyTable_styled = (CurrencyTable_styled/* default */.Z && CurrencyTable_styled/* default */.Z.locals ? CurrencyTable_styled/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Homepage/CurrencyTable/index.jsx



var CurrencyTable = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children,
    type = _ref.type;
  return /*#__PURE__*/react.createElement("div", {
    className: "tableWrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "tableHeader"
  }, type), /*#__PURE__*/react.createElement("div", {
    className: "tableBody"
  }, children));
});
CurrencyTable.displayName = 'CurrencyTable';
CurrencyTable.propTypes = {
  children: (prop_types_default()).array,
  type: (prop_types_default()).string
};
/* harmony default export */ const Homepage_CurrencyTable = (CurrencyTable);
;// CONCATENATED MODULE: ./src/components/Homepage/index.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Homepage = function Homepage() {
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalActive = _useState2[0],
    setModalActive = _useState2[1];
  var _useState3 = (0,react.useState)('australian_dollar'),
    _useState4 = _slicedToArray(_useState3, 2),
    convertTo = _useState4[0],
    setConvertTo = _useState4[1];
  var _getDataFromLocalStor = (0,getDataFromLocalStorage/* default */.Z)(),
    data = _getDataFromLocalStor.data;
  var handleChangeCurrency = (0,react.useCallback)(function (event) {
    setConvertTo(event.target.value);
    setModalActive(false);
  }, []);
  var stocks = (0,react.useMemo)(function () {
    return Object.keys(currencyIcons/* default */.Z).filter(function (key) {
      return !currencyIcons/* default */.Z[key].isCurrency;
    }).map(function (key) {
      return /*#__PURE__*/react.createElement(Homepage_CurrencyCard, {
        key: key,
        onClick: setModalActive,
        currency: key,
        isCurrency: false
      });
    });
  }, []);
  var quotes = (0,react.useMemo)(function () {
    return Object.keys(currencyIcons/* default */.Z).filter(function (key) {
      return currencyIcons/* default */.Z[key].isCurrency && key !== convertTo;
    }).map(function (key) {
      return /*#__PURE__*/react.createElement(Homepage_CurrencyCard, {
        key: key,
        onClick: setModalActive,
        currency: key,
        convertTo: convertTo,
        data: data,
        isCurrency: true
      });
    });
  }, [convertTo, data]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Homepage_CurrencyTable, {
    type: "Stocks"
  }, stocks), /*#__PURE__*/react.createElement(Homepage_CurrencyTable, {
    type: "Quotes"
  }, quotes), /*#__PURE__*/react.createElement(Modal/* default */.Z, {
    active: modalActive,
    setActive: setModalActive
  }, /*#__PURE__*/react.createElement("h2", null, "Choose which currency to convert the cards to"), /*#__PURE__*/react.createElement("h3", null, "Now selected:"), /*#__PURE__*/react.createElement("select", {
    className: "currencySelect",
    onChange: handleChangeCurrency
  }, Object.keys(currencyIcons/* default */.Z).map(function (key) {
    var element = currencyIcons/* default */.Z[key];
    if (element.isCurrency) {
      return /*#__PURE__*/react.createElement("option", {
        key: key,
        value: key
      }, element.displayName);
    }
  }))));
};
/* harmony default export */ const components_Homepage = (Homepage);

/***/ }),

/***/ 3006:
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
___CSS_LOADER_EXPORT___.push([module.id, `.card-wrapper {
    display: flex;
    border: 1px solid var(--color-gray);
    background: var(--card-background-color);

    border-radius: 8px;
    align-items: center;
    width: 490px;
    padding-left: 30px;

    padding-top: 30px;
    padding-bottom: 30px;
    height: 90px;
    gap: 30px;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    transition: 0.3s ease-out;
}
.card-wrapper:hover {
    transform: scale(1.05);
}
.card-title {
    font-family: 'Poppins-Regular';
    font-size: 35px;

    color: var(--card-title-color);
}

.card-subtitle {
    font-family: 'Poppins-Light';
    font-size: 32px;

    color: var(--card-subtitle-color);
}
@media (max-width: 1650px) {
    .card-wrapper {
        width: 100%;
    }
}
@media (max-width: 790px) {
    .card-wrapper {
        min-width: 100%;
        height: 30px;
        margin-bottom: 0px;
    }
    .card-wrapper img {
        height: 40px;
    }
    .card-title {
        font-size: 4vw;
        white-space: wrap;
    }

    .card-subtitle {
        font-size: 3vw;
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7700:
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
___CSS_LOADER_EXPORT___.push([module.id, `.tableHeader {
    font-family: 'Poppins-Light';
    color: var(--text-color);
    font-size: 32px;
    border-bottom: 2px solid var(--color-gray);
    min-width: 170px;
    max-width: 350px;
    margin-left: 50px;
    padding-bottom: 25px;
    margin-bottom: 25px;
}
.tableWrapper {
    width: var(--container-width);
    margin: auto;
}
.tableBody {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7933:
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
___CSS_LOADER_EXPORT___.push([module.id, `.currencySelect {
    font-family: 'Poppins-SemiBold';
    height: 30px;
    width: 200px;
}
.currencySelect option {
    font-family: 'Poppins-Regular';
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);