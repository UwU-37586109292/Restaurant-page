/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Meows/Meows.ttf */ "./fonts/Meows/Meows.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./fonts/Montserrat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../PNG/background2.jpg */ "./PNG/background2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* fonts */\n@font-face {\n    font-family: 'meows';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center fixed;\n    background-size: cover;\n\n    --line-under: rgb(10, 126, 194);\n}\n\nh1,\np {\n    margin: 5px;\n}\n\n#content {\n    height: 100vh;\n}\n\n.flex {\n    display: flex;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.center {\n    align-items: center;\n    justify-content: center;\n}\n\n.justify-center {\n    justify-content: center;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    margin: 5px;\n}\n\n.main {\n    height: minmax(100vh, fit-content);\n}\n\n.container {\n    width: clamp(300px, 80%, 950px);\n    height: fit-content;\n    border-radius: 20px;\n    background-color: rgba(216, 213, 204, 0.6)\n}\n\n.blur {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n}\n\n.section-header {\n    font-size: xx-large;\n}\n\n.section-header-small {\n    font-size: x-large;\n    border-bottom: 3px solid var(--line-under);\n    margin: 20px;\n}\n\n.start {\n    align-content: flex-start;\n}\n\n.menu-item {\n    /* justify-content: space-between; */\n    width: 100%;\n    padding: 10px 0px;\n}\n\n.menu-image {\n    float: left;\n    width: 250px;\n    height: 250px;\n    overflow: hidden;\n    object-fit: cover;\n    margin: 0 10px;\n    border-radius: 10px;\n}\n\n.menu-item .name {\n    font-size: x-large;\n}\n\n.description {\n    font-size: large;\n    margin-right: 10px;\n}\n\n.price {\n    margin-top: auto;\n    font-size: x-large;\n}\n\n/* hero */\n.hero {\n    font-size: x-large;\n    max-width: 500px;\n    margin-top: 5%;\n    margin-left: 5%;\n    padding: 20px;\n}\n\n/* header */\nheader {\n    /* background-color: aliceblue; */\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    font-size: x-large;\n}\n\n#cafeName {\n    font-family: 'meows', Arial, Helvetica, sans-serif;\n    font-size: xxx-large;\n}\n\nheader img {\n    max-width: 70px;\n}\n\nheader li {\n    margin-left: 30px;\n    margin-bottom: 5px;\n}\n\n/* hover effect on nav bar */\nheader li {\n    position: relative;\n}\n\nheader li::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: var(--line-under);\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n}\n\nheader li:hover {\n    cursor: pointer;\n}\n\nheader li:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n/* footer */\nfooter {\n    margin-top: auto;\n}\n\nfooter>* {\n    margin: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;AACV;IACI,oBAAoB;IACpB,+DAAuD;IACvD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,+DAA2D;AAC/D;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,aAAa;IACb,uDAAuD;IACvD,0EAA8D;IAC9D,sBAAsB;;IAEtB,+BAA+B;AACnC;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,mBAAmB;IACnB;AACJ;;AAEA;IACI,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,SAAS;AACT;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,iCAAiC;IACjC,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kDAAkD;IAClD,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,4BAA4B;AAC5B;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,SAAS;IACT,OAAO;IACP,uBAAuB;IACvB,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA,WAAW;AACX;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["/* fonts */\n@font-face {\n    font-family: 'meows';\n    src: url('../fonts/Meows/Meows.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url('../fonts/Montserrat-Bold.ttf') format('truetype');\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n    background: url(../PNG/background2.jpg) no-repeat center fixed;\n    background-size: cover;\n\n    --line-under: rgb(10, 126, 194);\n}\n\nh1,\np {\n    margin: 5px;\n}\n\n#content {\n    height: 100vh;\n}\n\n.flex {\n    display: flex;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.center {\n    align-items: center;\n    justify-content: center;\n}\n\n.justify-center {\n    justify-content: center;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    margin: 5px;\n}\n\n.main {\n    height: minmax(100vh, fit-content);\n}\n\n.container {\n    width: clamp(300px, 80%, 950px);\n    height: fit-content;\n    border-radius: 20px;\n    background-color: rgba(216, 213, 204, 0.6)\n}\n\n.blur {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n}\n\n.section-header {\n    font-size: xx-large;\n}\n\n.section-header-small {\n    font-size: x-large;\n    border-bottom: 3px solid var(--line-under);\n    margin: 20px;\n}\n\n.start {\n    align-content: flex-start;\n}\n\n.menu-item {\n    /* justify-content: space-between; */\n    width: 100%;\n    padding: 10px 0px;\n}\n\n.menu-image {\n    float: left;\n    width: 250px;\n    height: 250px;\n    overflow: hidden;\n    object-fit: cover;\n    margin: 0 10px;\n    border-radius: 10px;\n}\n\n.menu-item .name {\n    font-size: x-large;\n}\n\n.description {\n    font-size: large;\n    margin-right: 10px;\n}\n\n.price {\n    margin-top: auto;\n    font-size: x-large;\n}\n\n/* hero */\n.hero {\n    font-size: x-large;\n    max-width: 500px;\n    margin-top: 5%;\n    margin-left: 5%;\n    padding: 20px;\n}\n\n/* header */\nheader {\n    /* background-color: aliceblue; */\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    font-size: x-large;\n}\n\n#cafeName {\n    font-family: 'meows', Arial, Helvetica, sans-serif;\n    font-size: xxx-large;\n}\n\nheader img {\n    max-width: 70px;\n}\n\nheader li {\n    margin-left: 30px;\n    margin-bottom: 5px;\n}\n\n/* hover effect on nav bar */\nheader li {\n    position: relative;\n}\n\nheader li::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: var(--line-under);\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n}\n\nheader li:hover {\n    cursor: pointer;\n}\n\nheader li:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n/* footer */\nfooter {\n    margin-top: auto;\n}\n\nfooter>* {\n    margin: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showContactUs)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


function showContactUs() {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.insertToMainSection)(prepareContactUsContents())
}

function prepareContactUsContents() {
    const main = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.prepareMainElement)()
    main.textContent = 'Contact us!'

    return main
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showFooter)
/* harmony export */ });
/* harmony import */ var _PNG_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PNG/icon.png */ "./PNG/icon.png");


function showFooter() {
    //    <a href="https://www.flaticon.com/free-icons/cafe" title="cafe icons">Cafe icons created by noomtah - Flaticon</a>

    const footer = document.createElement('footer')
    footer.textContent = 'Created by Zuzka'
    footer.classList.add('footer', 'flex', 'center')

    const githubLink = document.createElement('a')
    githubLink.href = "https://github.com/UwU-37586109292"

    const githubIcon = new Image();
    githubIcon.src = _PNG_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    githubIcon.alt = "github-user-link"

    githubLink.appendChild(githubIcon)
    footer.appendChild(githubLink)

    const mainContent = document.getElementById('content')
    mainContent.appendChild(footer)
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHomePage)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


function showHomePage() {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.insertToMainSection)(prepareHomePageContent())
}

function prepareHomePageContent() {
    const main = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.prepareMainElement)()
    const hero = document.createElement('div')
    hero.classList.add('hero', 'container')

    const name = document.createElement('h1')
    name.textContent = 'Catteine'
    hero.appendChild(name)

    const description = document.createElement('p')
    description.textContent = 'We are a small cat café, which means that while visiting us you are also visiting couple of our cats as well. Feel free to pet them and please be mindful of their comfort.'
    hero.appendChild(description)

    main.appendChild(hero)
    return main
}

// Photo by <a href="https://unsplash.com/@ricardol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ricardo L</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _PNG_menu_items_drip_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PNG/menu_items/drip.jpg */ "./PNG/menu_items/drip.jpg");
/* harmony import */ var _PNG_menu_items_aeropress_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PNG/menu_items/aeropress.jpg */ "./PNG/menu_items/aeropress.jpg");
/* harmony import */ var _PNG_menu_items_chemex_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PNG/menu_items/chemex.jpg */ "./PNG/menu_items/chemex.jpg");
/* harmony import */ var _PNG_menu_items_cupcake_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PNG/menu_items/cupcake.jpg */ "./PNG/menu_items/cupcake.jpg");
/* harmony import */ var _PNG_menu_items_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PNG/menu_items/tiramisu.jpg */ "./PNG/menu_items/tiramisu.jpg");







function showMenu() {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.insertToMainSection)(prepareMenuPageContent())
}

function prepareMenuPageContent() {
    const menuImagesSrc = '../PNG/menu_items/'
    const main = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.prepareMainElement)()
    main.classList.add('flex', 'justify-center')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('flex', 'column', 'blur', 'container', 'center')

    const menuHeader = document.createElement('h1')
    menuHeader.classList.add('section-header')
    menuHeader.textContent = '🐾 Menu 🐾'
    menuContainer.appendChild(menuHeader)

    const beveragesHeader = document.createElement('h2')
    beveragesHeader.classList.add('section-header-small')
    beveragesHeader.textContent = 'Beverages'
    menuContainer.appendChild(beveragesHeader)

    menuContainer.appendChild(prepareMenuItem('Drip', 'Brewed with Hario V60 brewer has strong flavor and aroma. Great way to kick off your day', 4, _PNG_menu_items_drip_jpg__WEBPACK_IMPORTED_MODULE_1__))
    menuContainer.appendChild(prepareMenuItem('Aeropress', 'Coffee brewed using air pressure. Fine grained beans give the coffee special taste', 3, _PNG_menu_items_aeropress_jpg__WEBPACK_IMPORTED_MODULE_2__))
    menuContainer.appendChild(prepareMenuItem('Chemex', 'Brewed using similar technique as drip, but due to larger filter area the coffee has more delicate flavour. Especially enjoyable in the afternoons', 5, _PNG_menu_items_chemex_jpg__WEBPACK_IMPORTED_MODULE_3__))

    const cakesHeader = document.createElement('h2')
    cakesHeader.classList.add('section-header-small')
    cakesHeader.textContent = 'Cakes'
    menuContainer.appendChild(cakesHeader)

    menuContainer.appendChild(prepareMenuItem('Cupcake', 'We prepare batch of cupackes every day. Flavours vary depending on fresh ingredients at hand', 3.50, _PNG_menu_items_cupcake_jpg__WEBPACK_IMPORTED_MODULE_4__))
    menuContainer.appendChild(prepareMenuItem('Tiramisu', 'Made according to Nana\'s recipe', 7.50, _PNG_menu_items_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_5__))

    main.appendChild(menuContainer)

    return main
}

function prepareMenuItem(name, description, price, imageSrc) {
    const menuItemWrapper = document.createElement('div')
    menuItemWrapper.classList.add('flex', 'menu-item')

    const image = new Image();
    image.src = imageSrc
    image.classList.add('menu-image')
    const cropper = document.createElement('div')
    cropper.classList.add('crop')
    cropper.appendChild(image)
    menuItemWrapper.appendChild(cropper)

    const menuItemText = document.createElement('div')
    menuItemText.classList.add('flex', 'column', 'start')

    const nameDiv = document.createElement('div')
    nameDiv.classList.add('name')
    nameDiv.textContent = name

    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')
    descriptionDiv.textContent = description

    const priceDiv = document.createElement('div')
    priceDiv.classList.add('price')
    priceDiv.textContent = '$' + price

    menuItemText.appendChild(nameDiv)
    menuItemText.appendChild(descriptionDiv)
    menuItemText.appendChild(priceDiv)

    menuItemWrapper.appendChild(menuItemText)

    return menuItemWrapper
}

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showNavBar)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _PNG_pet_love_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PNG/pet-love.png */ "./PNG/pet-love.png");






function showNavBar() {

    const mainContent = document.getElementById('content')

    const cafeName = document.createElement('div')
    cafeName.textContent = 'Catteine'

    const cafeLogo = new Image();
    cafeLogo.src = _PNG_pet_love_png__WEBPACK_IMPORTED_MODULE_3__
    cafeLogo.alt = "cat-cafe-logo"

    const nameWrapper = document.createElement('div')
    nameWrapper.classList.add('flex', 'center')
    nameWrapper.id = 'cafeName'
    nameWrapper.appendChild(cafeLogo)
    nameWrapper.appendChild(cafeName)

    const header = document.createElement('header')
    const navList = document.createElement('ul')
    navList.classList.add('flex', 'center')

    const aboutUs = document.createElement('li')
    aboutUs.textContent = 'About us'
    aboutUs.onclick = _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]

    const menu = document.createElement('li')
    menu.textContent = 'Menu'
    menu.onclick = _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]

    const contactUs = document.createElement('li')
    contactUs.textContent = 'Contact us'
    contactUs.onclick = _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]

    navList.appendChild(aboutUs)
    navList.appendChild(menu)
    navList.appendChild(contactUs)

    header.appendChild(nameWrapper)
    header.appendChild(navList)
    header.classList.add('header')

    mainContent.appendChild(header)
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertToMainSection": () => (/* binding */ insertToMainSection),
/* harmony export */   "prepareMainElement": () => (/* binding */ prepareMainElement)
/* harmony export */ });
function insertToMainSection(newNode) {
    const mainNode = document.getElementById('main')
    if (mainNode) {
        mainNode.parentNode.replaceChild(newNode, mainNode)
    } else {
        document.getElementById('content').appendChild(newNode)
    }
}

function prepareMainElement() {
    const main = document.createElement('main')
    main.classList.add('main')
    main.id = 'main'
    return main
}



/***/ }),

/***/ "./PNG/background2.jpg":
/*!*****************************!*\
  !*** ./PNG/background2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7284dc2e66902f605662.jpg";

/***/ }),

/***/ "./PNG/icon.png":
/*!**********************!*\
  !*** ./PNG/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./PNG/menu_items/aeropress.jpg":
/*!**************************************!*\
  !*** ./PNG/menu_items/aeropress.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ace4889e745085c97fc.jpg";

/***/ }),

/***/ "./PNG/menu_items/chemex.jpg":
/*!***********************************!*\
  !*** ./PNG/menu_items/chemex.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65a7a691769c3fc3a0f2.jpg";

/***/ }),

/***/ "./PNG/menu_items/cupcake.jpg":
/*!************************************!*\
  !*** ./PNG/menu_items/cupcake.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b76cc887213df167721.jpg";

/***/ }),

/***/ "./PNG/menu_items/drip.jpg":
/*!*********************************!*\
  !*** ./PNG/menu_items/drip.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6811672f7e13e27a2a4.jpg";

/***/ }),

/***/ "./PNG/menu_items/tiramisu.jpg":
/*!*************************************!*\
  !*** ./PNG/menu_items/tiramisu.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "461bfc324b1ab447e1f3.jpg";

/***/ }),

/***/ "./PNG/pet-love.png":
/*!**************************!*\
  !*** ./PNG/pet-love.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26f14b7e085ef48c0cae.png";

/***/ }),

/***/ "./fonts/Meows/Meows.ttf":
/*!*******************************!*\
  !*** ./fonts/Meows/Meows.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8eaa7eb79f1926228f3d.ttf";

/***/ }),

/***/ "./fonts/Montserrat-Bold.ttf":
/*!***********************************!*\
  !*** ./fonts/Montserrat-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c155811b35513d5beaa.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");





const contents = document.createElement('div')
contents.id = 'content'
contents.classList.add('flex', 'column')
document.body.appendChild(contents)

;(0,_navigation_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

;(0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQW9CO0FBQ2dCO0FBQ0k7QUFDSjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQVU7O0FBRVYscURBQVk7O0FBRVosdURBQVUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NZW93cy9NZW93cy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vUE5HL2JhY2tncm91bmQyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZm9udHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtZW93cyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICAtLWxpbmUtdW5kZXI6IHJnYigxMCwgMTI2LCAxOTQpO1xcbn1cXG5cXG5oMSxcXG5wIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBtaW5tYXgoMTAwdmgsIGZpdC1jb250ZW50KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgODAlLCA5NTBweCk7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAyMTMsIDIwNCwgMC42KVxcbn1cXG5cXG4uYmx1ciB7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlci1zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpbmUtdW5kZXIpO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLm5hbWUge1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4vKiBoZXJvICovXFxuLmhlcm8ge1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbiNjYWZlTmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWVvd3MnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogNzBweDtcXG59XFxuXFxuaGVhZGVyIGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLyogaG92ZXIgZWZmZWN0IG9uIG5hdiBiYXIgKi9cXG5oZWFkZXIgbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciBsaTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmUtdW5kZXIpO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgbGk6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG5mb290ZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVO0FBQ1Y7SUFDSSxvQkFBb0I7SUFDcEIsK0RBQXVEO0lBQ3ZELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0RBQTJEO0FBQy9EOztBQUVBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCwwRUFBOEQ7SUFDOUQsc0JBQXNCOztJQUV0QiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBmb250cyAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ21lb3dzJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL01lb3dzL01lb3dzLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL1BORy9iYWNrZ3JvdW5kMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIC0tbGluZS11bmRlcjogcmdiKDEwLCAxMjYsIDE5NCk7XFxufVxcblxcbmgxLFxcbnAge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IG1pbm1heCgxMDB2aCwgZml0LWNvbnRlbnQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA4MCUsIDk1MHB4KTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxMywgMjA0LCAwLjYpXFxufVxcblxcbi5ibHVyIHtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyLXNtYWxsIHtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tbGluZS11bmRlcik7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSAubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi8qIGhlcm8gKi9cXG4uaGVybyB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuI2NhZmVOYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtZW93cycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA3MHB4O1xcbn1cXG5cXG5oZWFkZXIgbGkge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKiBob3ZlciBlZmZlY3Qgb24gbmF2IGJhciAqL1xcbmhlYWRlciBsaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIGxpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluZS11bmRlcik7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBsaTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbmZvb3Rlcj4qIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW5zZXJ0VG9NYWluU2VjdGlvbiwgcHJlcGFyZU1haW5FbGVtZW50IH0gZnJvbSAnLi91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0NvbnRhY3RVcygpIHtcbiAgICBpbnNlcnRUb01haW5TZWN0aW9uKHByZXBhcmVDb250YWN0VXNDb250ZW50cygpKVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ29udGFjdFVzQ29udGVudHMoKSB7XG4gICAgY29uc3QgbWFpbiA9IHByZXBhcmVNYWluRWxlbWVudCgpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzISdcblxuICAgIHJldHVybiBtYWluXG59IiwiaW1wb3J0IEljb24gZnJvbSAnLi4vUE5HL2ljb24ucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcbiAgICAvLyAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2FmZVwiIHRpdGxlPVwiY2FmZSBpY29uc1wiPkNhZmUgaWNvbnMgY3JlYXRlZCBieSBub29tdGFoIC0gRmxhdGljb248L2E+XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IFp1emthJ1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInLCAnZmxleCcsICdjZW50ZXInKVxuXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1V3VS0zNzU4NjEwOTI5MlwiXG5cbiAgICBjb25zdCBnaXRodWJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0aHViSWNvbi5zcmMgPSBJY29uO1xuICAgIGdpdGh1Ykljb24uYWx0ID0gXCJnaXRodWItdXNlci1saW5rXCJcblxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbilcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluaylcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcilcbn0iLCJpbXBvcnQgeyBpbnNlcnRUb01haW5TZWN0aW9uLCBwcmVwYXJlTWFpbkVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93SG9tZVBhZ2UoKSB7XG4gICAgaW5zZXJ0VG9NYWluU2VjdGlvbihwcmVwYXJlSG9tZVBhZ2VDb250ZW50KCkpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVIb21lUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IHByZXBhcmVNYWluRWxlbWVudCgpXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJywgJ2NvbnRhaW5lcicpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQ2F0dGVpbmUnXG4gICAgaGVyby5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdXZSBhcmUgYSBzbWFsbCBjYXQgY2Fmw6ksIHdoaWNoIG1lYW5zIHRoYXQgd2hpbGUgdmlzaXRpbmcgdXMgeW91IGFyZSBhbHNvIHZpc2l0aW5nIGNvdXBsZSBvZiBvdXIgY2F0cyBhcyB3ZWxsLiBGZWVsIGZyZWUgdG8gcGV0IHRoZW0gYW5kIHBsZWFzZSBiZSBtaW5kZnVsIG9mIHRoZWlyIGNvbWZvcnQuJ1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm8pXG4gICAgcmV0dXJuIG1haW5cbn1cblxuLy8gUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0ByaWNhcmRvbD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5SaWNhcmRvIEw8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4iLCJpbXBvcnQgeyBpbnNlcnRUb01haW5TZWN0aW9uLCBwcmVwYXJlTWFpbkVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJ1xuaW1wb3J0IERyaXBJbWFnZSBmcm9tICcuLi9QTkcvbWVudV9pdGVtcy9kcmlwLmpwZydcbmltcG9ydCBBZXJvcHJlc3NJbWFnZSBmcm9tICcuLi9QTkcvbWVudV9pdGVtcy9hZXJvcHJlc3MuanBnJ1xuaW1wb3J0IENoZW1leEltYWdlIGZyb20gJy4uL1BORy9tZW51X2l0ZW1zL2NoZW1leC5qcGcnXG5pbXBvcnQgQ3VwYWNha2VJbWFnZSBmcm9tICcuLi9QTkcvbWVudV9pdGVtcy9jdXBjYWtlLmpwZydcbmltcG9ydCBUaXJhbWlzdUltYWdlIGZyb20gJy4uL1BORy9tZW51X2l0ZW1zL3RpcmFtaXN1LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgaW5zZXJ0VG9NYWluU2VjdGlvbihwcmVwYXJlTWVudVBhZ2VDb250ZW50KCkpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVNZW51UGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUltYWdlc1NyYyA9ICcuLi9QTkcvbWVudV9pdGVtcy8nXG4gICAgY29uc3QgbWFpbiA9IHByZXBhcmVNYWluRWxlbWVudCgpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2p1c3RpZnktY2VudGVyJylcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjb2x1bW4nLCAnYmx1cicsICdjb250YWluZXInLCAnY2VudGVyJylcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlcicpXG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9ICfwn5C+IE1lbnUg8J+QvidcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpXG5cbiAgICBjb25zdCBiZXZlcmFnZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYmV2ZXJhZ2VzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyLXNtYWxsJylcbiAgICBiZXZlcmFnZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnQmV2ZXJhZ2VzJ1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzSGVhZGVyKVxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVwYXJlTWVudUl0ZW0oJ0RyaXAnLCAnQnJld2VkIHdpdGggSGFyaW8gVjYwIGJyZXdlciBoYXMgc3Ryb25nIGZsYXZvciBhbmQgYXJvbWEuIEdyZWF0IHdheSB0byBraWNrIG9mZiB5b3VyIGRheScsIDQsIERyaXBJbWFnZSkpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVwYXJlTWVudUl0ZW0oJ0Flcm9wcmVzcycsICdDb2ZmZWUgYnJld2VkIHVzaW5nIGFpciBwcmVzc3VyZS4gRmluZSBncmFpbmVkIGJlYW5zIGdpdmUgdGhlIGNvZmZlZSBzcGVjaWFsIHRhc3RlJywgMywgQWVyb3ByZXNzSW1hZ2UpKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlcGFyZU1lbnVJdGVtKCdDaGVtZXgnLCAnQnJld2VkIHVzaW5nIHNpbWlsYXIgdGVjaG5pcXVlIGFzIGRyaXAsIGJ1dCBkdWUgdG8gbGFyZ2VyIGZpbHRlciBhcmVhIHRoZSBjb2ZmZWUgaGFzIG1vcmUgZGVsaWNhdGUgZmxhdm91ci4gRXNwZWNpYWxseSBlbmpveWFibGUgaW4gdGhlIGFmdGVybm9vbnMnLCA1LCBDaGVtZXhJbWFnZSkpXG5cbiAgICBjb25zdCBjYWtlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjYWtlc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlci1zbWFsbCcpXG4gICAgY2FrZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnQ2FrZXMnXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWtlc0hlYWRlcilcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlcGFyZU1lbnVJdGVtKCdDdXBjYWtlJywgJ1dlIHByZXBhcmUgYmF0Y2ggb2YgY3VwYWNrZXMgZXZlcnkgZGF5LiBGbGF2b3VycyB2YXJ5IGRlcGVuZGluZyBvbiBmcmVzaCBpbmdyZWRpZW50cyBhdCBoYW5kJywgMy41MCwgQ3VwYWNha2VJbWFnZSkpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVwYXJlTWVudUl0ZW0oJ1RpcmFtaXN1JywgJ01hZGUgYWNjb3JkaW5nIHRvIE5hbmFcXCdzIHJlY2lwZScsIDcuNTAsIFRpcmFtaXN1SW1hZ2UpKVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gcHJlcGFyZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VTcmMpIHtcbiAgICBjb25zdCBtZW51SXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVJdGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ21lbnUtaXRlbScpXG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGltYWdlU3JjXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpXG4gICAgY29uc3QgY3JvcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY3JvcHBlci5jbGFzc0xpc3QuYWRkKCdjcm9wJylcbiAgICBjcm9wcGVyLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIG1lbnVJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChjcm9wcGVyKVxuXG4gICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjb2x1bW4nLCAnc3RhcnQnKVxuXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lJylcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXG5cbiAgICBjb25zdCBwcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxuICAgIHByaWNlRGl2LnRleHRDb250ZW50ID0gJyQnICsgcHJpY2VcblxuICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChuYW1lRGl2KVxuICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdilcbiAgICBtZW51SXRlbVRleHQuYXBwZW5kQ2hpbGQocHJpY2VEaXYpXG5cbiAgICBtZW51SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0KVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtV3JhcHBlclxufSIsImltcG9ydCBzaG93SG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHNob3dNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBzaG93Q29udGFjdFVzIGZyb20gJy4vY29udGFjdC5qcydcbmltcG9ydCBJY29uIGZyb20gJy4uL1BORy9wZXQtbG92ZS5wbmcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dOYXZCYXIoKSB7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgIGNvbnN0IGNhZmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYWZlTmFtZS50ZXh0Q29udGVudCA9ICdDYXR0ZWluZSdcblxuICAgIGNvbnN0IGNhZmVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgY2FmZUxvZ28uc3JjID0gSWNvblxuICAgIGNhZmVMb2dvLmFsdCA9IFwiY2F0LWNhZmUtbG9nb1wiXG5cbiAgICBjb25zdCBuYW1lV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmFtZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjZW50ZXInKVxuICAgIG5hbWVXcmFwcGVyLmlkID0gJ2NhZmVOYW1lJ1xuICAgIG5hbWVXcmFwcGVyLmFwcGVuZENoaWxkKGNhZmVMb2dvKVxuICAgIG5hbWVXcmFwcGVyLmFwcGVuZENoaWxkKGNhZmVOYW1lKVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjZW50ZXInKVxuXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBhYm91dFVzLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJ1xuICAgIGFib3V0VXMub25jbGljayA9IHNob3dIb21lUGFnZVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgbWVudS5vbmNsaWNrID0gc2hvd01lbnVcblxuICAgIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb250YWN0VXMudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cydcbiAgICBjb250YWN0VXMub25jbGljayA9IHNob3dDb250YWN0VXNcblxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoYWJvdXRVcylcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG1lbnUpXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0VXMpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZVdyYXBwZXIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxpc3QpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG59IiwiZnVuY3Rpb24gaW5zZXJ0VG9NYWluU2VjdGlvbihuZXdOb2RlKSB7XG4gICAgY29uc3QgbWFpbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgaWYgKG1haW5Ob2RlKSB7XG4gICAgICAgIG1haW5Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG1haW5Ob2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcbiAgICBtYWluLmlkID0gJ21haW4nXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZXhwb3J0IHtcbiAgICBpbnNlcnRUb01haW5TZWN0aW9uLFxuICAgIHByZXBhcmVNYWluRWxlbWVudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHNob3dIb21lUGFnZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgc2hvd05hdkJhciBmcm9tICcuL25hdmlnYXRpb24uanMnXG5pbXBvcnQgc2hvd0Zvb3RlciBmcm9tICcuL2Zvb3Rlci5qcydcblxuY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGVudHMuaWQgPSAnY29udGVudCdcbmNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnY29sdW1uJylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudHMpXG5cbnNob3dOYXZCYXIoKVxuXG5zaG93SG9tZVBhZ2UoKVxuXG5zaG93Rm9vdGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=