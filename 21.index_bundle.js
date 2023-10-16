"use strict";
(self["webpackChunkmodsencurtrack"] = self["webpackChunkmodsencurtrack"] || []).push([[21],{

/***/ 3831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Modal)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Modal/styled.css
var styled = __webpack_require__(6623);
;// CONCATENATED MODULE: ./src/components/Modal/styled.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styled/* default */.Z, options);




       /* harmony default export */ const Modal_styled = (styled/* default */.Z && styled/* default */.Z.locals ? styled/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/hooks/use-portal.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function usePortal() {
  var portalContainerRef = (0,react.useRef)(null);
  var _useState = (0,react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    portal = _useState2[0],
    setPortal = _useState2[1];
  (0,react.useEffect)(function () {
    var portalContainer = document.createElement('div');
    portalContainerRef.current = portalContainer;
    document.body.appendChild(portalContainer);
    return function () {
      document.body.removeChild(portalContainer);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (portalContainerRef.current) {
      setPortal(portalContainerRef.current);
    }
  }, []);
  return portal;
}
/* harmony default export */ const use_portal = (usePortal);
;// CONCATENATED MODULE: ./src/components/Modal/index.jsx





var Modal = function Modal(_ref) {
  var active = _ref.active,
    setActive = _ref.setActive,
    children = _ref.children;
  var portal = use_portal();
  return portal && /*#__PURE__*/react_dom.createPortal( /*#__PURE__*/react.createElement("div", {
    className: active ? 'modal active' : 'modal',
    onClick: function onClick() {
      return setActive(false);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: active ? 'modal_content active' : 'modal_content',
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, children)), portal);
};
Modal.propTypes = {
  active: (prop_types_default()).bool,
  setActive: (prop_types_default()).func
  // children: PropTypes.array,
};

/* harmony default export */ const components_Modal = (Modal);

/***/ }),

/***/ 9883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ constants_currencyIcons)
});

;// CONCATENATED MODULE: ./src/assets/images/card_icons/australian_dollar.png
/* harmony default export */ const australian_dollar = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVhSURBVHgB7Z1PaBxVGMC/NxsLKTaJWvFfI3ux7SGaRVJoEgQ3t11KtxdNRDGKQtaDEgRzScTE1ksEiebQRPBQsLTGSyol68WNl9aCVabQQ+zF/kPEP5BGSQtmd3zf23npZprdeTNv3iRNvx9sZjM7mWV/873vffPNJGHgYWfbm887kDhkWZBzAJJAILbjgF36j40tLkxdrn6BySctycGWhh03P+BrBoGojeNMrCS2jy3aE4v4rRAo5DXdnOdPU0CoYK9YjWmUaOF3IvJIXhBSDaVldAasZW8+2bDN+RWI4JRLaStxX3kUiFA4Fp9sGWPtQIQlhzmQcl9I+AyctIDQggRqQgI1IYGakEBNSKAmJFATEqgJCdSEBGpCAjUhgZqQQE1IoCZbSmDr4w/BZx/2i2VcbCmBfQc74aVcp1jGBQ1hTUigJg0QM10du6GbP6799jec/OYH0AX39/SeXdC0Yzt079st1lWWB+7YFt8P3zdKYhU49NYBeC9/+4PhB337/WMQhkw6BUeGXoAn15kwut2D5KVt7y7oH5yCKIlVYK+b3Ke/LEJfbr9I9iPjX8ONf5aD7GbNgVjiP3vi1DmlfXw7b0PUxCYQIwKjBYfQyMczIhpwXe/B/fD58aLyfqQ8FDc+dVocjI0ktkmkyx1SZ85fEstCsRINMm+pgPWdjLxhHrkbLQ+JTaAUdeJUZeKYm79QWd+hLjCbrtwDgJNBFBNQFMQiECNHijrrRiAOZXw089mzS1FipqdyD8BcMfpcFpZYBEp5Z368tGb9XLEShdm02s0RKBuJuhTRIRaBMsK8w64wL/PgU3C3Ek8E7ls7fCUXf7kuyo+2Pa2r0VWPiwvXxDKT3jy38xgXWF2+XPUMPZSHEhEsZ/yQETzwSo+S8DgwLtBbvngJUs7gPvCB8o5N5DeFRPMR6ClfvAQtZ97hp34Yzbh9cWZYnM00baBItvOZAQcMgeXLz4WPxPOH2/M1t8NtcNvcG5/ckSfXA1PC7Bfv1mycitSwcD2WetFoBNYqX7wELWcwlz6bGRaNCBzSS57z4Ga3MzN5uB9+cg+OKYyeC9cqX7xgOYMTQ9ByplaEYYTie+N5s4zWQzy6TdSPZiOwRvniJWg548dVt9eI0nDfKHGSXysxgbEIlOULghHghxQXtDtTDxTZP3hUTDZ4MDEqVXJsEIxFYPX5LeYgv4ckSHdGBRGNvF+IZA0U4OYi0BXxKo8AWSzXQ+aqIN0ZVTDqMMe2PvEgRI0RgdXdl4Jb5/khuzOt7gQQ5VCT3erm+6OvF40MYdXyxUvQckaVNn7RCbnxb7BLByoYEahavngx1Z2RfcRCUW00BMFMBCqWL16iLmeQgZd7Vi+jqqaTIEQusF73xY+g3Rk/UN6RoRfF8/GjpwNf/VMh8knEr/viB3ZnxHVdHsXeehBzmUovECeibE/7ahSjPFPnxJELxOGH1Oq++IHdGYwauZ9qJg+/tjohqIDRPDI+E/pgqhB5NwaHb4ZfPZvWOJvAFhWmAO8Hx333rnPnVZZPEih2jk9C2IVZclOBSXESo+2suMDz3L5cp+jOxH25k+7O0oQEahL77W0mmD7+HWAeOhtDzvOyJXLgRkJDWBMSqAkJ1IQEakICNSGBmpBATUigJiRQExKoCQnUhARqQgI1IYGacIHOFSBCwcCxLQfYLBDhYMy2WJkEhiXB2Fhi+Y/zlxsf6XiAAejfCnAPwdv4n/55YfqkmERKVuMoX2ye3+Db/NiuM0jgl1u/n7u17bHnvmLOSiNFYn0w8ri819f8M4JqHk3lk6VyedRhLMW3pj/SjTDniuOwWWax2b/sqe+rX/ofsOEIMh10AukAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/bitcoin.png
/* harmony default export */ const bitcoin = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQZSURBVHgB7ZxPSFRBGMC/eVoSZNQhKoXYg+ITojbQ6qCh5UEvqaFe/IfSoUjDS4FGpYR56JCmYpeQxCDyoHnxYiooERb0OuWikAaaRAdJIUTWab7RBVl2y31jb/Yt3w/evr97+e03M998szwGQWSdMnMAeBEzWKE49QABHLjFOLM2NqDl/czM/M57LHCQ4/Ec9iceeACMNwARHs7a4+J+t0xY8yt4KgWivM1DCeMcmBeIf8JERBrGei5KNPACRh7J2z3oyu8XrVXAckzT498PX4GIGL4JuYZ/HzQDYQ+DFxmcsTNA2IIBKzREh0h9n308BhBKkEBFSKAiJFAREqgICVSEBCpCAhUhgYqQQEVIoCIkUBHtAo8nJUPrk04oKa8K+wzeq7/dCNFIFAhMguxLeXAx93LYZ8oqqqBUbCg72qAmrAgJVIQEKkICFYkHh8ABoOBKUcjrcp+cDDXXb4b87sHEQ3JfWl4Ja6urMOubgTmxLS8tgm5Y9mmTgwOgnJobdbCXjLwZhN5n3VpFOiYwOAJTzHTIFqnLrO8LTI29hUhIFd/N2k57vgt5dxvqZETqwDGBwaDMxodtMora7jdBpOAPUn+nUf4Ia6u/oLbsqpZIdO0gsrwdeZ8+Tss+Mlz/+b9x/Sjcdm8regsKi4XIRHAa1wvESMQoRM5mnAOniYk8cHlxq++jCLRJIE/UQUwITDFNuZ/VkMq4XmC+SIdOiJQG+8I5EhgZKWnpIhfcGoV7e7pBB47NhfeSlDRTzkRqt6eGA/19MDI8CDrQLhDzN9zsgvI6H7eBLlzfB66KaZxOtEegnblwquj7SioqxXy6WDbjE6IUFpiROI0rIxArOCgMCwhYH0SR+SFqjU7g6iY8J0T29nTJ472uNe4W1/eBAy/7ZBRiLoijs9PExExkcmxU7lNJoPuICYG4IIVgU3Ya1wvE0n6gDhioCzqJ6wXiugiCUzmKwAjA4mlre5dcVMJKTMwXE0Ita27tzYgXhDBd8Waeh0QhEaOuqaFe29qwqxfWLdHnPRIzEp0L645F4MjwUMjrMjJFNQYl4Lw4FKUV1bLJDvS/kBG3vLQEk+OjWvq8YLQtrAfwZmTC0+d9YH2YhlvXqkM+83pkVIouK8iLiv/D7IQSaUVIoCIkUBESqIj2ivSczyfTkcmJ8H9xC4zg0TaAINpHYbdDTVgREqgICVSEBCpCAhUhgYqQQEVIoCIkUBESqAgJVIQEKoICF4CwBQdmGeJjCAhbMMYtAzY5CbTJBoOWuG8/fs6fPHb0CAO4AMSu4cA73n32vZKDSLyR0MxEewZiV+Cr4OON9WY8lgInLGvFMBJyRX/YAcRfwcgLvEcfz1nwAzle0+PfhGZxxyueppd0IwwWOBdjhcGGpqyZiZ23/gD/11M4/55kbgAAAABJRU5ErkJggg==");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/bovespa.png
/* harmony default export */ const bovespa = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANDSURBVHgB7d1PSBRhGMfx552ZDrYu1KE92KHJgykIeSk8Kl46FO5BQ7zVqT8HO3dppRCqS130IhF0sH/QIgV1MY+ml6VCli7aIantEpoSuOvbPFMbg2DOzjOzM6u/Dyi7DrPCl2femdFFFW3TeXagZ4t01lRGvyZtExBpKmilC5XNymjxdX7Zu0lVH9g92UPptHVDE10j2JHT596BtfJoYTb/g5+7ATleqtl6qxR1EezOmUjrZ7mXIxr8nCcP8WrgtNp0mrkP288M2daB8hJB7TT1GqZVzhEEpLOGswieJAhEK+o3CGtfYIqUbRCIIKAQAgohoBACCiGgEAIKIaAQAgohoBACCiGgEAIKIaAQAgohoBACCiGgEAIKIaCQRQ2k/bhNJ1qPUVALHxZppfSdwtRQAW+OXKX2VpuCmpmbp5GxuxSmhgo4MfWMertP1bRPX/dpSqcOuo/TzSkKW0MFnHk37374dWVo8F+8qOzZkwjHuzx8ntbWN+j25EOKSkNNoF/eeBev55wpbKKo7LkJ3B6vuBTtG8/2VMB6x2OJCBjGQh9HPBZ7QL44fjM5Treca7yg4orHYg3I8R6M8SKfov6+nkAR44zHYgvojfdo+pV7i1VrxLjjsVgCeuONO3cXd5zrNA5QS8QkxGN1D7g93sTUU/frX0ol3xGTEo/VNeBO8ar8RExSPFa3gLvFq/pfxKTFY3W5lfMbr6oakffhiGzlWylwvNWNjb+vEe7PApnqPDegKUK1xvM6msm4+7ZkjrjPJZPH3//Pa6xTmCI9hCXxmPdwlh62HC7seCyyCZTG8+JJXI0ogFQka2CY8RhPYlKFfgiHHS/pQg94aXhw38Rjoa+BvF7xrx5n5hZoPwh9DeT1KslrVtjwzgQhBBRCQCEEFEJAIQQUQkAhBBRCQCEEFEJAIQQUQkAhBBRCQCEEFEJAIQQUQkAhBBQySNNngmAUFZwJ1HmCQJTWHFAhYECmWRk1S58WlzNtHYdJqW4C/7S+/376xWP3JGJZlRwfzwT+OK3cZg6TP30tFn+1dLQ92dpSTZjEXTiTZ5mVC4W8558ReHVlh+xKuZzTSnc5m/FHupl7pcInW5X/+PL5rHfTb+D1oCPhaXhKAAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/canadian_dollar.png
/* harmony default export */ const canadian_dollar = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVaSURBVHgB7Z1faFtVHMd/N2kFWTsdFftnQ8o6S91DW9axzQ40xVYEp3N9cmiYPmysakW0RWGwpgNl0jGcA1vci3YV9cH+wSnYTM0eNpk6SYtoqVut4Gb3IrPtQJtl1/M9ya3Zmq5Jzjm5sfw+cHtv2uQ0+fA75/c751xai26icd1Gn23bT3g8tJ3IKieGyKYwWXY4Eol2hibDk4k/spwLX3ntnbfl53XYRC8RsyhC2FtzkWsQeSX+OCYvPz/va3FZS0wqiGi81gCJHjxC5BHLS4fauDOyfFW15fnRvF+JSRvbpgZPftQbICYjZLIVQVhDTEagUsEYyGNfxljlHmKUYIGKsEBFWKAiLFARFqgIC1SEBSrCAhVhgYqwQEVYoCIsUBEWqMiyEli8uozaDu4X51LKFstK4MPNj4rjMXFso2zBXVgRFqhIHrnEisJCqtm0gYrXlFLBysL57w/3n6DLF/9IuZ1q0UbFfZWyjepNdfHv1ZG/deFz0207FaymezfalCUgbceuJ6lmc508knHh53Fq2f7Ukm3d/5CPWva9TCVrUk8Yp4Mh6ny+nXSStQiEOH/rnvlouzozI2Wd/2lcXjucOXlqybb8L+wm/4t75tv54pMTN7SxGKm0nS7GBSLq2t/cT/WNPvl49NtzdPzosQXiUsWRh9f2vn2MBt7/kNzEqEDI6zreQ+vWV8oP3PXqAREFIcoU1HlO5HW/fliOaW5jVGDgnS4p7/LFS9T29F7lAby+6QF5Hu7/NCfkAWNlDLoaEoUueWCrSBzAxFiWKUYEJna1Q68d0FY6rIgnoKnf9ZYiKhgR6G/dLc/oaiNnz9FyxojA+qYH5RnZVicoexLbzwW0C8TsokBkX3xY3VV/MJ44mnftlBk+F9AusDo+wzDRdUdEDTkq2kUxjgyfCxK1C8S8FKBgNkFXPCkhw3cP9VHTjm2uitReBxbEP8zszCyZwCmLDvX1iHlwmZjldCx4zux0bJqIWjE4YLZe/F8uZ0Giv+FxUSJ1yki/eUqILo4Ihdzer4aMrlBrj8Ap0b2qxblEvOlRMgsiLNmMBHVozeYNcvECUYrpZLt/r/akBrRHoBMNa6sqyS0QoRCLro6uDIltBzvIBNoFngnGpllOMnETiAw81y7G4xnZpZ0FV51oF3hhbNzoG04XSHTqx/pG/QW4doHIgAPvxdbosEuWC4yc/UGeTSQTI1l4uP8zGYXYYsyFKLw6PS3PBXforxeNCES3cebB2d7oTsba9bHxePav9FfAl8JYHYhujGmXU0a4KdFZR/zmS/3riEYL6YDYAXPKCEjEtCvbYDOrOr6wezqoX6C3oqgsQIaY+2eOTn0epFV3FcmsvLXJNz8mToyNk2kgr2XfK/K6543DNDbyI+kma/vCuF8FMwOnKzvzVRyJU7FbbX6jtkylFMHvwC6gs4XaK8bjvqPvkgmyurEOILL5mZ2LzlRutbHePfRBWgU62kLkmVwVz7pAB8xXsWNXvLrkhuUobBg5K8/JXpOstkS0QSzuPMDQENu0/yUr2wmu3RuDQR1Huq9Jtk0AsRCILJvt7U6+O0sRFqiIa11YJ/L+GMt2ZQvVtSSyXOAurAgLVIQFKsICFWGBirBARVigIixQERaoCAtUhAUqwgIVYYGKsEBFPLZl/0ZMpoQ9Yh1ykJgMscIe27ZYYIZ4I95O78SflyYrikpXCZtbiEkD+8jwxHcfySQSiUQD4hQmJkWscCRSGMCVF18mr0z9fc/Kuz/2eq3bORKXwj4SiRQ8G5oM/ffPCBJ5pGpLeTSKiLxey3+kO46oVK5HPYOWZQ+ePP99KPFH/wKEwwHHlf1GewAAAABJRU5ErkJggg==");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/dollar.png
/* harmony default export */ const dollar = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT0SURBVHgB7Z1NTFxVFIDPnbEQUoZoIrHpaDIpCx8uChuIVk0o0MadgFs7rTtb1JgYDdBEh4XVWJv4R11qwYUuSmelBjsjiYRW2sXQmPSZ2DpdDKGGRMOg2JLO6z23ffBmSsvrO+29b5rzJTDvzTAEvpx77rnn3oCACqxuq0MIp0cI8aK8TQAD4Dg5AJErrcCwPWnnvS8J9yLRkXi4rqbuPQHOm8DcFgfEJ8tXl4fzk/l/8F4JVPI21f4so64VmI2REfnfypWdKDGC9yryWJ5/pCt0pi6tDisRqYE/gblrSiXYGRGbIAVMIHCyjcih2wJMILBSkTnQ4dwXnEQEGBIskAgLJMICibBAIiyQCAskwgKJsEAiLJAICyQSWoFbH4vDZ+9+Dl99dExdh5XQChx4dRC6nu2G9pZ2eT0AYSW0AmP1sdXrhs0NEFY4BxJhgURYIBHx1G7LAYO0bW+Dzme61GQRq1/LdQ3yOrZ5LQ8WLhduPM4XYE5eZ6YzkD2VAdMYE4ilyftvHVLigoJS9729Vwk1hZEhjPK+PnyMJA+Jy+8zfnRcRbAptEegKy9eURzbF22w/zhf9hwKXlxaBPuCvfpcfEtcDvty8UX5NX0H+oxE4kOgmf6X+8vk2RfOwxvDr6/mOD/g+7HQ7txxI/Iwdx6S6WDfO3tBN1ojEH/R08d/Xb3HiOnb3wvFf4sQBIxkbzTuSnZrj0KtOdDa9mTZ/cjYSGB57vu9NHhmbV1oHcJWU3PZfWb6JFA4c24Gjn4zooZyeuKEyqO60Sowdh8iZGTsC/VhCq1DuDI/VUZkNaJVYOZUtuweZ+RqR6tArNcwb7m0yTrvQJVL1F5I47A9LlcPXrAGHDsxqgRvxOJSUaUCExPGehhZC+/pTapCmIKSPj4KY+lRMEm0senRFGjmnD2r6r+W5laoramFIGC35rm256Fnd6/qzFDqSQpGBCIo8YfJ71XrXrWu6oO17fG9XbIONCXReD/QBWtEPxJxHWw1WZCUacC7W3dmdubBXwvfS+I3uzpeidgb9M7yOqjalj5OIkMfD5U917mjE3RT1XsiGG3ecqZ9O61BG4Sq31TyNmGDTkQUtAvE9vvp8RmYGD0p21sWUNm6ZS0H+inE7zXaBfYnX1MzrttVpoATiHfYFgy09LULxG1JF1wL9+zqhaBUNiOy01nQjfZCeuHvBbV6cOm6ua9RuDznuxDGOvDw4BF1+MgF18cHjwyBbozUgQP7B2FPT/KW5/0Owfg6x91ekrtyuEGlG+27csiHX36gHislxgOeAzwo60ET8hBja+Gps1Ny2M1BsxyOQcsPrANxS3Tq7C9gilAs5XBTCM/IeM8BYn5z91Awv83Mri3R1Ca83GzXvWxbDyNDuJIsHhSaLj8ohPWdW6LgzG1igvADH28jwgKJsEAioRVYXDLTor9bQivQO8Omf0pDWAl1RxoLa/zhTJ5A3YhQlDG3oxBicS48iRBhgURYIBEWSIQFEmGBRFggERZIhAUSYYFEWCCRiFytXwImICInI1CEt1cUdoSTi0QchwUGpCRgOPrXxYV847bGR0DA08D4xnGcT+2J379Vk0jNSm0KxzMw/nCc3PLKlRReRvHTfH7+//gTj393LXKtjiPxzmDkSXmvlP0zAi/WC1ZClCAlQ7NVttP5j3QjAi45JScdjYr0bz/ak96XrgP2/az427273QAAAABJRU5ErkJggg==");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/euro.png
/* harmony default export */ const euro = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARxSURBVHgB7ZxNaFNZFMfPvW0GZrTV2dipk0J0oIVKmeDMorpqGZgRZqTdzAzT2Uhr61aNGzcmBcWVVN0puHBTPxetFfxAsbipC8WAWLALrVq/EWqsupC+5/1ffSXWtE1yyHsv9vwg9OUlL4tfz7n33HMfT9EsovENLaRVu3JVGykVI4Fc100rRen3jtP7NH1+PPsz5R0sj7csr6IlSdK0lYR5cPa/dt71TqaHJ/HOCoS8peq7K0qpOAkLgoicct+2QqLGCUSeyMsfuKrS3ybt8Q/xDbGIrrhHQsG4jmrVEaVSJBSHnm7XLumfSSgKRapNm+lZxr6iUTFNAgsRyEQEMhGBTEQgExHIRAQyEYFMRCATEchEBDIRgUxEIBMRyEQEMhGBTCoppFRXLaHmX5qorraGoitX2HOZ12/o9thdGr1zlyaePKcwEDqBkNbV0UbrzF9InIuR67eo73A/Xbtxi4JE1a3906UQAFlbezpos5HnATm3EW2Pn898Z92vTVayx6mhS9R3qD+wiAyFwOjKGjp5eC9Fa1fYND1ybJCO9A/a47m+/0dLs41UXPPw8TPqTuyhUZPefhO4wGx5EPFvz868ownXJhPdViZk/2Ou9VtixbLa+hQFBFJy8Og+Kw+TQ/umHfTi5WTe10Pa0MWrFP2xhtY2NdBPq6J0eugy+Umgk0gy0fNZ5M2VsguRSPbRxKNn9p/gN4GlcGP9ajp/7KA9Xv9XZ2jKkkIJrJDG2AVQipSrPBCIQAz+KEeQuqfOXKJyxpcxEONcNttMvQdGx+7l/DwXmak3RY+RpaTkYyBqNS9dOUDe+o2doZNY8ghEmqI2q65aOnPOi7hCxr4J8zuLMgJng2UYCmcs01D4lju+TyJeg+BVCKOpGHwXuOxTKmcyU/Q1IA1VJiKQie8C0U0GjQ2r6Wug5LPw76bVlDJNg2y8Fr3XKM0HNAq6E7spbJS8DlxjmgaesNnMdT4XmL3xClst6Esd+MVSbsv/9PfG32ba8fmwaJdyufCK6bAuzwohkFkYq5AR80JKdv3XRuVMYGWMl7rexlC5EphARCF23hCFJ0w6z7cHnA/YEsWM7zeBFtJeN7rONFg5EneZdtn2LR0zfUY/CVSgtxUJiSh3zvUfLCidbfQe2ms34/FbidR+8pvQbayDhe42gLhOM/lAHI4X9ca6B0QgBbuybu3A/S+QghUL6sDG+lV2N2+NWQZ66Y6xdDu2NRfzrR3ZIBohEoX2fEAconREbi7KDSIM42Lzp7u08EIkItIuDI+EpvgOrcByQfqBTEQgExHIRAQyEYFMRCATEchEBDIRgUxEIBMRyEQEMhGBTEQgExHIRAQy0S6590koCjycGxE4QEJRuC4EOloEFkmFE+mtyDwdG6+ubfheEfl/X0QZY4a+Aw9uDh23k0ilU5lSJhxJyAuMfZXONykcW4Hj6YFJ7UZaXVIHSJgXRJ6ejrTCGd6r2V+Ixdtj0+p9ij4+X1oe0k1WGiqVAdJ6YOL62eHszz4Amy2x5LL2orYAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/ifix.png
/* harmony default export */ const ifix = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASuSURBVHgB7Z1faFtVHMe/N8kebJKygYtQ9xB9mJt2WISiMJF2iji7mgjdKK7C/qCw+rD6sArOPylqQbqH9mHtQ8cQdUzdwHQ6qA+mBZm4dmic3QgTXH0waKdY13aITXo9vzMmcVuaP7+e5Dz8PpCS3HOTm3xy7jm/3/ldGgc3Ub+trWkJbtTreCIu3DAEwEXSddxkdjHbkxqNT+c2OTfuhJuiq4NB35su0AUhL8pP/6q5TE9yPD5Lj7VAkucP+MYcBw0QCqN6pG8+00wSPfSYep7IKwHlalE503c3PNUe9q3KXIZQOi6aPV5fJgahTNyoRw2CD0IoC9dBxAMZ+8rGgRP2QGAhApmIQCYikIkIZCICmYhAJiKQiQhkIgKZiEAmIpCJCGRitcC60FrYjpUCSdzokcP44sggRocPWy3SOoEb7gnj5EAfHLVaOXj8EziqWHP0nZjebiNWCdzycCOO9sYwN38New7GMHT8BPa8GrsuUW2ndtvwhu67PwYLiGxpQl/3y/jjz7+0vF9mZvT2uYUFjH0zia2PbcaOrU8quQs4f+lH2IIVAjvbt+OVF3Yj9dM0dnYfxO+zs/9rJ4kjX45j80MNiD7RrKvb56YuwgaqLpDk7XtuhxbUfahfy7od/ywuYvSrr3HnmtV4PtJijcSqCnx7fyc6ItvwwanTeGtoWEtaDmpPnJ1ErT+AvW1RBGtqcOa771FNqiIw6K9B34EuNa49qmbaExh4/1hJzz/zbZIqYkris3p2pseF5Jui4gJJHoUljZvqtbwhFaqUw+TUBS2RJhYaG0ni3MI1VJqKCqSA+NihXty7bh1e6x/Eh5+dBgeSmP7tipZIIQ6d3pWWWLE4kORRLEfjF4UpI4kxrAQjiXEdK9YGArpnVzprqYjA3OyCPuzkDxewklBP/C/grnDWYlwgBci52UXqspkLweh1q5G1GB0DO1pb8MZLL96SXZiiGlmLMYEUIHft2pk3uzDFzVmLaYlGTuGg36+zi4TqDdTz8mUXpqDjbe86oI/fqd4HhU6mMCTw+htOnJ2ouLxc6Pj0ZdLNFLKkz0QEMhGBTEQgExHIxAeL2Kdix7q7Qnnbz6kUkHJfm7BGYPfeXXqlOb1MthJ9vEkJXquLTbZgjcDGTQ+owHcC+3v78u5DCwURJdEmgdaMgbWBGlwtsJaXnrkC25BJhIkIZCICmYhAJiKQiQhkIgKZiEAmRjIRKm7TraP1aeirgAoQVLXiulBIPWdi2f2uqtXtu9V+Hc+0qH3nUQg6Pq2ImwzAnfrWtsKfsAyonEmXrBVbj6Da7uv9g8tW7mhpnurLxRbP6Ut8d/i9FSvi3w5jAm9APasY0iWUPIt9Tep9pmsyxhcT0gZqwWnD9eVSkEmEiQhkIgKZiEAmIpCJCGQiApmIQCYikIkIZCICmYhAJiKQiUetd/4MoTwcJFUPdOMQysJxXRLoiMAy8XqzPd6ZSxenQ+s3roHjPAKheFx34PypTz/Sk4jPl43R+QyhOJQr7UzhpT+/plJ/121c//HSknOH9MQCqJ7n82Z3J+M5P0aQS0O0PZzNZGKu4zaoZvkn3YSOVGiydeJTn58cz236F07exNrvOwnBAAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/libra.png
/* harmony default export */ const libra = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgB7Z3RS1NRHMd/924LcigFZaCQwxdnSQpq9GKkvvTUxF4EFbKHIIO0lwwSnKDPaQ9FPQX1YBShf4Aa5VNOGCY5n3KBItpDKEU4ttu+R67MMXPbD3au8PvAuOfce3YfPvzOPfec32EzKI2OGv81I2G0mS4zQBb5SABhy7LCiXhieCISWU29YNiFNp/vlLfYO5SU1k/C4Vg05vF4hl+Fw79QVQIhr8hbNGsYRh0J2RD2uD3NkGiihsgTeTlRF4vFhlAwOvx+n8vt+k5CzsQp3mwaLiNIQl6YZLaZpmHWkpAfFgXwDJRnX54kxw2fSQILEchEBDIRgUxEIBMRyEQEMhGBTEQgExHIRAQyEYFMRCATEchEBDIRgUzc5GDOlJXRhcbL6gj+7OxQNBKh5dA8OQVHCqxuaKT23l6qbmzMeH1rbY0+PH9Gn6emSDdGZ81FixxCUXExdQ88oqZAQNURcaHpafq5vq7qZ8vLlVQ7IiFy9HbP/nUdOErg6Lv3VOH3K3GIsE+Tk6qcztVAm4pQiNQt0XWptDRIDqDr4QA1tLYqEcGuTlqcm6PY7m7GttGVCC3MzqiuXlZZqaTr6s6OGIURSde7u1UZ0YSoOgq0GevvU8LRrSFRB44YRNrv9qojoigbeTZo+6TvPtW3tKjRWQeOEIiuC/DcyxWI0yUPaO/C56uq1Oj7Y2Ulp+hzCtoFektK1PH39jYdR2Qqx0QEMhGBTEQgExHIRAQyEYFMCr4ag6Wqm733Dpyzl6eyWVH5Nv+FXg4OklMo+FTOW1yyLyydw86nghVqJ6FlPTBVFITcGRmh5fl5ejH4+Mjv6lw8zYSWxYRUCVvraxnPHxdkEGEiApmIQCYikIkIZKJdYNONvRywzmV5DlpzIngftHcfREKhA1s4MuWDnYi2xDpkPRh/emg6EvkR5ElCM9NH5nxxD9wPL+OFFq9FINKYyAMjmWSTGnXpUzpbZrogJKQgz45izGQKnWAveBdGDhfbMgCELMzMqChLn4VATEWVX7XFnhh88N1MQCq2geBehabgEYioQwRiawYEZoMt006B2iAqsc0DA5CuZ6ajNhcdR+Q9kIkIZCICmYhAJiKQiQhkIgKZiEAmIpCJCGQiApmIQCYikIkIZCICmYhAJhAYJSFfwqZF1iQJ+WEkBZpkisA88bg8w67Fzc3V2tJzp5P1KyRkTbLnjr9e/DqhBhG32x1MHsIkZEv4hPtEEAWXqm1s/K0vK39rJayTJJH4XxB5SXk9B/6MIJVbdXW+WDwWTLbE70vLj3TvEcVgi/HizdLSx9QL/wCoHFcd2lHoSAAAAABJRU5ErkJggg==");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/peso.png
/* harmony default export */ const peso = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP5SURBVHgB7Z1NSFRRFIDPfTMFOhUFZmBQU5uysoR+sEWi2cJo4RAEIrSojbWJcVuGSoK0UjeVRbZQxBbGWEEGpmILoxQGlZxapC6U/FlE/gXivO65OtMojs7MoXdn5HzwfPe+9xzw49x77j0PHAFrKMw/kSOE3yWErQCE6QQGwASv/OH1+5cqmtt8I6G3RKDhynHuTnLsLBNguoEJi+k3axYWtlV4ury/sK8EKnnJjk4hRCYwmyMjcn7enosSDeyryGN5kSMgMylpsUw1C/OPOg2bfRiYqPELyDVksigHJibEErgMYYhTwMSEEGYBzoE898WKEE4DGBIskAgLJMICibBAIiyQCAskwgKJsEAiLJAICyTCAomwQCIskAgLJMICidhBE8mOnXC16LY6h2N+bkYdQwNf5NEL8Yg2gekZZ+FywfWIn5+aGIO+Tx3wrrURpifHIV7QJtCxYznyMLq6P7Su+wxGZ0pqGhyTsg8ePgr5UvjprItQV1MaNxGpTWAAjKzu9tZNn0OBxe4H6lxa9QLqqkvDireShEkioz98cPfONXjV9Fj1i0sqlUzdJFwWbml6BG1yHkRK7tWAbiwdwtmXCoLt9Iwz6rx33/5V1yNhdNgX/F0c1kOD/+bDudkZlWysQhRdOWGCBVyQkm65K8EKGp49DEbp/8ayCPTJrNnd7gn2MXpwKTM9MQ5fBz5DLJw5n6cyda+MuPnZ38HrfT2dYBWWCcRsW1dzP9jHYYsCUV7o9WjAJIJHW2uDtmVNQm/lRoe/qXNK6n7QRUILxEU2siC3e7qwNAsH/mAksAdO3rFr1fVocKx8hhny2YH9s1VsySz8RO5SPlq0S7EsAjHbhhYBMALxiDViNoq4LRmBa8EsXCwjEpc20WbhlH1pUPv8vWq7b+bD1OQY6CLhkgjKK62qV20sQuiUhySUwOVKTD3slcsWnBJwx6Eb7eWsSMB9Mw757DyX6mNlprrSbelcFw7tAnE7ln7yXNj7jpVkEwB3HS2ypBUP8hDtApPXCFoPzN4438XDnLcW7QKxENDwNPxcZvXCOFq0C8QqSjy9JIoWfi9MhAUSYYFEWCARFkiEBRJhgURYIBFtC+neng44cKhBVo5fQyKjraC6VeAhTIQFEmGBRFggERZIhAUSYYFEWCARFkiEBRJhgURYIBEWSIQFEmGBRFggEQNMGAUmVrwYgR5gYkR4DcNggbHi32arsPV/nxzJOJK6R/azgIkY04Ta5jf9zSqJbLfby+XJC0ykeBe228uxYVM9388/p4+nvVwy/UnAkbghGHlS3g2PJ+TLCEIpdGU6xeJSuUzPmfJ9J/+TbkSuVKQLj03mi8a3g12ht/4CuY9JXI18newAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/won.png
/* harmony default export */ const won = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7Z0/TBNxFMe/d7QOIokmUjZoHYxoDSQaYYFQWBhELi5C1MT4Z3cWDSWmxE3ZjTGRBFxIUxlwKBBZkEhCpAbiQIHNymCiuKCe936lSUXA0sfvjpr3SZrftXcX0k/fr+/X9y6HgS1ctLpaAMMyYHY6T4MQYANzBuy5DfzqG4sPL+fvM3IbLZZ1tALlvc7mXQi78eQr/H2T8edf6IkSSPKO4PCEAaMewj+hiPwGf4QkmvQCRZ7IKxwn6uorsNGrttutrqAfZWkIe8bGz4jpgxGFUCSm5Uxhsw5CUThTudOk+QyhSIygCYGFCGQiApmIQCYikIkIZCICmYhAJiKQiQhkIgKZiEAmIpCJCGQiApmIQCY+aCYQOI7uK5fhNuvr35EYHUMmswadaBfYFmlGW2szvOLps0HoRLvA5MSU9ijYiemZd9CNdoGZzGckncf/iiQRJiKQiQhkIgKZaE8iRChYg/Lyw3Cb1IcF6Ea7QFpEd3e5v5AmhoZHMPRyBDrRLnB6ZhZnw7U77qfIDIVq1C+HdHoFhUDH03l0PJ23HfQ6/W3dGB3WVRseEnbk9j/sQSq1gHsPYgWdE3OOpw+l534M8y5M092QJMJEBDIRgUxEIBMRyEQEMhGBTEQgE88FVlVWqvFTiRZdPRdITSfCq7I/F88FnghVq3FpeRWliOcCw+HTaiy0kHDQ8FQgFRKoqrKUXlXNp1LEU4FtkSY1jo+/wX6Sa+bnvl914plAenO5hvt+1+0aG86rIq4bV0R4JjD35pLjU3uevrmMHd6hUBsKZhNTOq0/MXkisOHCORV9VDUupuSenMhO+Usd7X9NU6pW64rs7XClqbSVO7euqTHxaqyo5EHV63nnQVXp2GY1O5VadORVK6kE9UPcSEyuC6ToCwQqnV8ea6yGT/+jx7h987oTbU2oaq384wIm+mB0N5NyuN4ToWULff8lRl/vS4RQFIbP1KqpnHYW49NvZ11dEnneVCp1pBrDRAQyEYFMRCATEchEBDIRgUxEIBMRyEQEMhGBTEQgExHIRAQyEYFMRCAT06mmluYlAQcAA5hzItCOQygKOyvQFIFFUgZ/X9nHxffLJ0/VHXPCsRFCwdiwBxLxF8Mqifjgi9J8hlAQ5MqHQ1HaVgLj6p7w/ogNYwDCrlDkkat4/j8jyMeybgR/YCO6eX9puUk3VLJYySZbMz4aH5zM3/cbDFP/sQEioD8AAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/assets/images/card_icons/yen.png
/* harmony default export */ const yen = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPhSURBVHgB7ZxLSFRRGID/cw3DpkUtUogiC3pQZtIDc5WKgvbAWQhJRRGC0KLoBSFkqQUaZA9bRIL0IGGCFleEEoyyTSK1GEqiRfhYahsXmRg4p/OfvDHIPO7ML3MO8X+budc7Hphv/nP+//x3uAIWUXW4tlQ6IiiEUyMA8oFRyLAEEQYhWvrd0Hj0FeEdlAaDq3Iiy6+rv5wHJi4RCffmnLmWQdedxnMtUMuT2e/UaREwPpDhWfG7DCU6eKojj+WlgCharp2po6pgXb6QcgyYlJHzosyBSKQZmLSQznzQcYTYBUxaOKpScSQAr33pk+8AQ4IFEmGBRFggERZIhAUSYYFEWCARFkiEBRJhgURYIBEWSIQFEmGBRFggkYwLzMtdA8fraiFXvS7lmA31JyEQWAGZJuMCCwu2a4G3bl5bsg/crsYKHjmox840GRf4YfgTTE79+BeJVBrqT+mxcMwhNXamybjAmZkZuNHWoV5/6ajZSYiaivIDaoxqfXzlaiuYwEgSGR0bh+ehl/q4qfFSWuthdAT3qLGmVASawFgW7u17BZ9HvsLKQAAunjsDqeJNXZy2PQtfhgmMljF3Ox/qqYyLf83CVPTDMRV5JcV79br3qPspmMSoQBTQ2nZbH+N03LRxQ9L/wag7YcHU9TBeSH9R09jte62nclPj5aSlDZYsiKuWgDdv34NprNiJYCT5KW2iS5au7mdgA1YI9FPa2FCyxMKavXCi0saWkiUWVjUT4pU2tpQsscjavK2gGSwCk0pleSmsX7cWfqqpvWd3ERyqqtDrXntHp57mNmFdO2txaWNTyRILK/uB0aUNYkvJEgtrG6rRa50tJUssloEhMCl4RXEyHnc9iHsN10ncEo6OTYAJjAnEMiXPZxcm0fvyYOk62+kgqmuOSjAEbtu8dS4WXuSdbjgb9z0YgSYzs7EIRPCD+/nwkxZmXw++K0eEBRJhgURYIBFjSQQzMG7VAgmysMeFBPdMsBWGRbepTGxMYGHBDt3780Ol6gUmArd+Ju4JI0brwJLifaoOjN/C9yIPdxqJGDC4TzZaBw4Nf0x43RM4YGkjAeEkQoQFEjE6hZNxR619Jn6ylgpWC7S1iRoNT2EiLJAICyTCAomwQCIskAgLJMICibBAIiyQCAskwgKJsEAiLJAICyTCAomgQDM/rPs/CDsgwQUmLQQKlI5ggWkSEaIl6/u3kfEtWwtWK537gfGPhPv9vS9COolkOznNGI7A+ESGZ525ZjzSAl33yXS2yCkTyiowiVGOvOfo46lYfF0/Gj4SUREpiqQAfkj3XyZARlzpZLn9bmgw+sIfLTRWl5VlAC8AAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/constants/currencyIcons.js











var currencyIcons = {
  australian_dollar: {
    icon: australian_dollar,
    displayName: 'Australian Dollar',
    currencyText: 'A$',
    code: 'AUD',
    isCurrency: true
  },
  bitcoin: {
    icon: bitcoin,
    displayName: 'Bitcoin',
    currencyText: '₿',
    code: 'BTC',
    isCurrency: true
  },
  bovespa: {
    icon: bovespa,
    displayName: 'Bovespa Index',
    currencyText: null,
    code: '',
    isCurrency: false
  },
  canadian_dollar: {
    icon: canadian_dollar,
    displayName: 'Canadian Dollar',
    currencyText: 'C$',
    code: 'CAD',
    isCurrency: true
  },
  dollar: {
    icon: dollar,
    displayName: 'Commercial Dollar',
    currencyText: '$',
    code: 'USD',
    isCurrency: true
  },
  euro: {
    icon: euro,
    displayName: 'Euro',
    currencyText: '€',
    code: 'EUR',
    isCurrency: true
  },
  ifix: {
    icon: ifix,
    displayName: 'IFIX',
    currencyText: null,
    code: '',
    isCurrency: false
  },
  libra: {
    icon: libra,
    displayName: 'Libra',
    currencyText: '£',
    code: 'TRY',
    isCurrency: true
  },
  peso: {
    icon: peso,
    displayName: 'Argentine Peso',
    currencyText: '₱',
    code: 'ARS',
    isCurrency: true
  },
  won: {
    icon: won,
    displayName: 'Yuan',
    currencyText: '元',
    code: 'CNY',
    isCurrency: true
  },
  yen: {
    icon: yen,
    displayName: 'Yen',
    currencyText: '¥',
    code: 'JPY',
    isCurrency: true
  }
};
/* harmony default export */ const constants_currencyIcons = (currencyIcons);

/***/ }),

/***/ 6623:
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
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
    height: 100vh;
    width: 100vw;
    background-color: var(--color-black-half-opacity);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    opacity: 0;
    transform: scale(1);
    transition: 0.2s;
    pointer-events: none;
    justify-content: center;
}
.modal.active {
    opacity: 1;
    pointer-events: all;
}
.modal_content {
    max-width: 400px;
    padding: 20px;
    border-radius: 12px;
    transform: scale(0);
    transition: 0.5s;
    background-color: white;
}

.modal_content.active {
    transform: scale(1);
}
@media (max-width: 400px) {
    .modal_content {
        max-width: 200px;
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);