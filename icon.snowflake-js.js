(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.snowflake-js"],{

/***/ "../../src/components/icon/assets/snowflake.js":
/*!************************************************************************************!*\
  !*** /Users/hyunghwan.byun/mastermind_eui/src/components/icon/assets/snowflake.js ***!
  \************************************************************************************/
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



var EuiIconSnowflake = function EuiIconSnowflake(_ref) {
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
    d: "M7.007.5a.5.5 0 011 0v2.024a.999.999 0 00.268-.227l1.027-1.233a.5.5 0 01.769.64L8.275 3.86a.999.999 0 01-.268.227v2.548l2.207-1.274c0-.114.02-.231.062-.346l.968-2.632a.5.5 0 11.938.345l-.554 1.506a.998.998 0 00-.062.346l1.753-1.012a.5.5 0 11.5.866l-1.753 1.012c.1.057.21.098.33.119l1.582.273a.5.5 0 11-.17.986l-2.764-.478a1 1 0 01-.33-.12L8.506 7.5l2.207 1.274a1 1 0 01.33-.119l2.764-.478a.5.5 0 11.17.986l-1.582.273a.999.999 0 00-.33.12l1.753 1.011a.5.5 0 11-.5.866l-1.753-1.012c0 .115.02.231.062.346l.554 1.506a.5.5 0 01-.938.345l-.968-2.632a.999.999 0 01-.062-.346L8.007 8.366v2.548c.098.058.19.133.268.227l1.796 2.155a.5.5 0 01-.769.64l-1.027-1.233a.999.999 0 00-.268-.226V14.5a.5.5 0 01-1 0v-2.024a.999.999 0 00-.269.227l-1.027 1.233a.5.5 0 01-.768-.64l1.795-2.155a.999.999 0 01.269-.227V8.366L4.8 9.64c0 .114-.02.231-.062.346l-.969 2.632a.5.5 0 11-.938-.345l.554-1.506a1 1 0 00.062-.346l-1.753 1.012a.5.5 0 01-.5-.866l1.753-1.012a.999.999 0 00-.33-.119l-1.582-.273a.5.5 0 01.17-.986l2.764.478c.12.02.232.062.33.12L6.508 7.5 4.3 6.226a.999.999 0 01-.33.119l-2.765.478a.5.5 0 11-.17-.986l1.582-.273a.999.999 0 00.33-.12L1.194 4.434a.5.5 0 11.5-.866l1.753 1.012c0-.114-.02-.231-.062-.346L2.83 2.727a.5.5 0 11.938-.345l.969 2.632a.999.999 0 01.062.346l2.207 1.274V4.086a1 1 0 01-.269-.227L4.943 1.704a.5.5 0 01.768-.64l1.027 1.233c.079.094.17.17.269.227V.5z"
  }));
};

var icon = EuiIconSnowflake;

/***/ })

}]);
//# sourceMappingURL=icon.snowflake-js.js.map