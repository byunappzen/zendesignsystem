(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.tokens-tokenDate-js"],{

/***/ "../../src/components/icon/assets/tokens/tokenDate.js":
/*!*******************************************************************************************!*\
  !*** /Users/hyunghwan.byun/mastermind_eui/src/components/icon/assets/tokens/tokenDate.js ***!
  \*******************************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "../../node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconTokenDate = function EuiIconTokenDate(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M13 11.567C13 12.36 12.36 13 11.567 13H4.433C3.64 13 3 12.36 3 11.567V4.433C3 3.64 3.64 3 4.433 3H6v-.495a.51.51 0 01.412-.497L6.5 2c.276 0 .5.214.5.505V3h2v-.495a.51.51 0 01.412-.497L9.5 2c.276 0 .5.214.5.505V3h1.567C12.36 3 13 3.64 13 4.433v7.134zM4 6v5.33c0 .37.3.67.67.67h6.66c.37 0 .67-.3.67-.67V6H4zm1.5 4c.245 0 .45.183.492.412L6 10.5c0 .245-.183.45-.412.492L5.5 11a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L5.5 10zM8 10c.245 0 .45.183.492.412l.008.088c0 .245-.183.45-.412.492L8 11a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L8 10zm2.5 0c.245 0 .45.183.492.412L11 10.5c0 .245-.183.45-.412.492L10.5 11a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L10.5 10zm-5-1.5c.245 0 .45.183.492.412L6 9c0 .245-.183.45-.412.492L5.5 9.5A.505.505 0 015 9c0-.245.183-.45.412-.492L5.5 8.5zm2.5 0c.245 0 .45.183.492.412L8.5 9c0 .245-.183.45-.412.492L8 9.5a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L8 8.5zm2.5 0c.245 0 .45.183.492.412L11 9c0 .245-.183.45-.412.492L10.5 9.5A.505.505 0 0110 9c0-.245.183-.45.412-.492L10.5 8.5zM5.5 7c.245 0 .45.183.492.412L6 7.5c0 .245-.183.45-.412.492L5.5 8a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L5.5 7zM8 7c.245 0 .45.183.492.412L8.5 7.5c0 .245-.183.45-.412.492L8 8a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L8 7zm2.5 0c.245 0 .45.183.492.412L11 7.5c0 .245-.183.45-.412.492L10.5 8a.505.505 0 01-.5-.5c0-.245.183-.45.412-.492L10.5 7zM4 5h8v-.33c0-.37-.3-.67-.67-.67H4.67C4.3 4 4 4.3 4 4.67V5z"
  }));
};

var icon = EuiIconTokenDate;

/***/ })

}]);
//# sourceMappingURL=icon.tokens-tokenDate-js.js.map