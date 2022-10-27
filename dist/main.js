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
___CSS_LOADER_EXPORT___.push([module.id, "/* fonts */\n@font-face {\n    font-family: 'meows';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center fixed;\n    background-size: cover;\n\n    --line-under: rgb(10, 126, 194);\n    --background-opaque: rgba(216, 213, 204, 0.6);\n}\n\nh1,\np {\n    margin: 5px;\n}\n\n#content {\n    height: 100vh;\n}\n\n.flex {\n    display: flex;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.center {\n    align-items: center;\n    justify-content: center;\n}\n\n.justify-center {\n    justify-content: center;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    margin: 5px;\n}\n\n.main {\n    height: minmax(100vh, fit-content);\n}\n\n.container {\n    width: clamp(300px, 80%, 950px);\n    height: fit-content;\n    border-radius: 20px;\n    background-color: var(--background-opaque);\n    margin-bottom: 10px;\n}\n\n.blur {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n}\n\n.section-header {\n    font-size: xx-large;\n}\n\n.section-header-small {\n    font-size: x-large;\n    border-bottom: 3px solid var(--line-under);\n    margin: 20px;\n}\n\n.start {\n    align-content: flex-start;\n}\n\n.menu-item {\n    /* justify-content: space-between; */\n    width: 100%;\n    padding: 10px 0px;\n}\n\n.menu-image {\n    float: left;\n    width: 250px;\n    height: 250px;\n    overflow: hidden;\n    object-fit: cover;\n    margin: 0 10px;\n    border-radius: 10px;\n}\n\n.menu-item .name {\n    font-size: x-large;\n}\n\n.description {\n    font-size: large;\n    margin-right: 10px;\n}\n\n.price {\n    margin-top: auto;\n    font-size: x-large;\n}\n\n/* hero */\n.hero {\n    font-size: x-large;\n    max-width: 500px;\n    margin-top: 5%;\n    margin-left: 5%;\n    padding: 20px;\n}\n\n/* header */\nheader {\n    /* background-color: aliceblue; */\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    font-size: x-large;\n}\n\n#cafeName {\n    font-family: 'meows', Arial, Helvetica, sans-serif;\n    font-size: xxx-large;\n}\n\nheader img {\n    max-width: 70px;\n}\n\nheader li {\n    margin-left: 30px;\n    margin-bottom: 5px;\n}\n\n/* hover effect on nav bar */\nheader li {\n    position: relative;\n}\n\nheader li::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: var(--line-under);\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n}\n\nheader li:hover {\n    cursor: pointer;\n}\n\nheader li:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n/* footer */\nfooter {\n    margin-top: auto;\n    background-color: var(--background-opaque);\n}\n\nfooter>* {\n    margin: 10px;\n}\n\n.icon {\n    max-width: 22px;\n    max-height: 22px;\n}\n\n#map {\n    margin-bottom: 25px;\n}\n\n#gmap_canvas {\n    border-radius: 20px;\n}\n\n#contact-container p {\n    margin: 0;\n}\n\n.contact-info {\n    margin: 5px;\n}\n\n.contact-info .icon {\n    margin-right: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;AACV;IACI,oBAAoB;IACpB,+DAAuD;IACvD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,+DAA2D;AAC/D;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,aAAa;IACb,uDAAuD;IACvD,0EAA8D;IAC9D,sBAAsB;;IAEtB,+BAA+B;IAC/B,6CAA6C;AACjD;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,mBAAmB;IACnB,0CAA0C;IAC1C,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,SAAS;AACT;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,iCAAiC;IACjC,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kDAAkD;IAClD,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,4BAA4B;AAC5B;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,SAAS;IACT,OAAO;IACP,uBAAuB;IACvB,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA,WAAW;AACX;IACI,gBAAgB;IAChB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["/* fonts */\n@font-face {\n    font-family: 'meows';\n    src: url('../fonts/Meows/Meows.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url('../fonts/Montserrat-Bold.ttf') format('truetype');\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n    background: url(../PNG/background2.jpg) no-repeat center fixed;\n    background-size: cover;\n\n    --line-under: rgb(10, 126, 194);\n    --background-opaque: rgba(216, 213, 204, 0.6);\n}\n\nh1,\np {\n    margin: 5px;\n}\n\n#content {\n    height: 100vh;\n}\n\n.flex {\n    display: flex;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.center {\n    align-items: center;\n    justify-content: center;\n}\n\n.justify-center {\n    justify-content: center;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    margin: 5px;\n}\n\n.main {\n    height: minmax(100vh, fit-content);\n}\n\n.container {\n    width: clamp(300px, 80%, 950px);\n    height: fit-content;\n    border-radius: 20px;\n    background-color: var(--background-opaque);\n    margin-bottom: 10px;\n}\n\n.blur {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n}\n\n.section-header {\n    font-size: xx-large;\n}\n\n.section-header-small {\n    font-size: x-large;\n    border-bottom: 3px solid var(--line-under);\n    margin: 20px;\n}\n\n.start {\n    align-content: flex-start;\n}\n\n.menu-item {\n    /* justify-content: space-between; */\n    width: 100%;\n    padding: 10px 0px;\n}\n\n.menu-image {\n    float: left;\n    width: 250px;\n    height: 250px;\n    overflow: hidden;\n    object-fit: cover;\n    margin: 0 10px;\n    border-radius: 10px;\n}\n\n.menu-item .name {\n    font-size: x-large;\n}\n\n.description {\n    font-size: large;\n    margin-right: 10px;\n}\n\n.price {\n    margin-top: auto;\n    font-size: x-large;\n}\n\n/* hero */\n.hero {\n    font-size: x-large;\n    max-width: 500px;\n    margin-top: 5%;\n    margin-left: 5%;\n    padding: 20px;\n}\n\n/* header */\nheader {\n    /* background-color: aliceblue; */\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    font-size: x-large;\n}\n\n#cafeName {\n    font-family: 'meows', Arial, Helvetica, sans-serif;\n    font-size: xxx-large;\n}\n\nheader img {\n    max-width: 70px;\n}\n\nheader li {\n    margin-left: 30px;\n    margin-bottom: 5px;\n}\n\n/* hover effect on nav bar */\nheader li {\n    position: relative;\n}\n\nheader li::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: var(--line-under);\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n}\n\nheader li:hover {\n    cursor: pointer;\n}\n\nheader li:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n/* footer */\nfooter {\n    margin-top: auto;\n    background-color: var(--background-opaque);\n}\n\nfooter>* {\n    margin: 10px;\n}\n\n.icon {\n    max-width: 22px;\n    max-height: 22px;\n}\n\n#map {\n    margin-bottom: 25px;\n}\n\n#gmap_canvas {\n    border-radius: 20px;\n}\n\n#contact-container p {\n    margin: 0;\n}\n\n.contact-info {\n    margin: 5px;\n}\n\n.contact-info .icon {\n    margin-right: 5px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _PNG_contact_wall_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PNG/contact/wall-clock.png */ "./PNG/contact/wall-clock.png");
/* harmony import */ var _PNG_contact_telephone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PNG/contact/telephone.png */ "./PNG/contact/telephone.png");
/* harmony import */ var _PNG_contact_arroba_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PNG/contact/arroba.png */ "./PNG/contact/arroba.png");
/* harmony import */ var _PNG_contact_placeholder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PNG/contact/placeholder.png */ "./PNG/contact/placeholder.png");






function showContactUs() {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.insertToMainSection)(prepareContactUsContents())
}

function prepareContactUsContents() {
    const main = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.prepareMainElement)()
    main.classList.add('flex', 'justify-center')

    const contactContainer = document.createElement('div')
    contactContainer.id = 'contact-container'
    contactContainer.classList.add('flex', 'column', 'blur', 'container', 'center')

    const contactHeader = document.createElement('h1')
    contactHeader.textContent = 'Contact info'
    contactHeader.classList.add('section-header')
    contactContainer.appendChild(contactHeader)

    const openingHours = prepareContactInfoElement()
    appendIconToElement(openingHours, _PNG_contact_wall_clock_png__WEBPACK_IMPORTED_MODULE_1__)
    appendInfoTextToElement(openingHours, 'Mon - Fri: 10AM - 10PM\nSat: 9AM - 10 PM\nSun: closed')
    contactContainer.appendChild(openingHours)

    const telephone = prepareContactInfoElement()
    appendIconToElement(telephone, _PNG_contact_telephone_png__WEBPACK_IMPORTED_MODULE_2__)
    appendInfoTextToElement(telephone, '(+11) 123-555-123')
    contactContainer.appendChild(telephone)

    const email = prepareContactInfoElement()
    appendIconToElement(email, _PNG_contact_arroba_png__WEBPACK_IMPORTED_MODULE_3__)
    appendInfoTextToElement(email, 'cat.cafe@gmail.com')
    contactContainer.appendChild(email)

    const address = prepareContactInfoElement()
    appendIconToElement(address, _PNG_contact_placeholder_png__WEBPACK_IMPORTED_MODULE_4__)
    appendInfoTextToElement(address, '69 Lake Str, Hamburg, US')
    contactContainer.appendChild(address)

    const location = document.createElement('div')
    location.id = 'map'
    location.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="509" height="314" id="gmap_canvas" src="https://maps.google.com/maps?q=69%20Lake%20st,%20hamburg,%20US&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:314px;width:509px;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:314px;width:509px; }</style></div></div>'
    contactContainer.appendChild(location)

    main.appendChild(contactContainer)
    return main
}

function prepareContactInfoElement() {
    const element = document.createElement('div')
    element.classList.add('flex', 'contact-info')
    return element
}

function appendIconToElement(element, iconSrc) {
    const icon = new Image();
    icon.src = iconSrc
    icon.classList.add('icon')
    element.appendChild(icon)
}

function appendInfoTextToElement(element, text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    paragraph.style.whiteSpace = 'pre-line'
    element.appendChild(paragraph)
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
/* harmony import */ var _PNG_icon_light_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PNG/icon_light.png */ "./PNG/icon_light.png");



function showFooter() {
    //    <a href="https://www.flaticon.com/free-icons/cafe" title="cafe icons">Cafe icons created by noomtah - Flaticon</a>

    const footer = document.createElement('footer')
    footer.textContent = 'Created by Zuzka'
    footer.classList.add('footer', 'flex', 'center')

    const githubLink = document.createElement('a')
    githubLink.href = "https://github.com/UwU-37586109292"

    const githubIcon = new Image();
    githubIcon.src = _PNG_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    githubIcon.id = 'icon'
    githubIcon.alt = "github-user-link"
    githubIcon.style.display = 'block'


    const githubIconLight = new Image();
    githubIconLight.src = _PNG_icon_light_png__WEBPACK_IMPORTED_MODULE_1__;
    githubIconLight.id = 'icon-light'
    githubIconLight.alt = "github-user-link"
    githubIconLight.style.display = 'none'

    githubLink.appendChild(githubIcon)
    githubLink.appendChild(githubIconLight)

    githubIcon.addEventListener('mouseover', function () {
        event.target.style.display = 'none'
        document.getElementsByClassName('footer')[0].style.color = 'white'
        document.getElementById('icon-light').style.display = 'block'
    })
    githubIconLight.addEventListener('mouseleave', function () {
        event.target.style.display = 'none'
        document.getElementsByClassName('footer')[0].style.color = 'black'
        document.getElementById('icon').style.display = 'block'
    })

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

/***/ "./PNG/contact/arroba.png":
/*!********************************!*\
  !*** ./PNG/contact/arroba.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "691bc9bcce3e59327c13.png";

/***/ }),

/***/ "./PNG/contact/placeholder.png":
/*!*************************************!*\
  !*** ./PNG/contact/placeholder.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "331482282b17d4ab1127.png";

/***/ }),

/***/ "./PNG/contact/telephone.png":
/*!***********************************!*\
  !*** ./PNG/contact/telephone.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a2683943c16a93bfd16.png";

/***/ }),

/***/ "./PNG/contact/wall-clock.png":
/*!************************************!*\
  !*** ./PNG/contact/wall-clock.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2ed6532ebaea388b61.png";

/***/ }),

/***/ "./PNG/icon.png":
/*!**********************!*\
  !*** ./PNG/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./PNG/icon_light.png":
/*!****************************!*\
  !*** ./PNG/icon_light.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNnQjtBQUNJO0FBQ0o7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUFVOztBQUVWLHFEQUFZOztBQUVaLHVEQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTWVvd3MvTWVvd3MudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTW9udHNlcnJhdC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL1BORy9iYWNrZ3JvdW5kMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGZvbnRzICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWVvd3MnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgLS1saW5lLXVuZGVyOiByZ2IoMTAsIDEyNiwgMTk0KTtcXG4gICAgLS1iYWNrZ3JvdW5kLW9wYXF1ZTogcmdiYSgyMTYsIDIxMywgMjA0LCAwLjYpO1xcbn1cXG5cXG5oMSxcXG5wIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBtaW5tYXgoMTAwdmgsIGZpdC1jb250ZW50KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgODAlLCA5NTBweCk7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtb3BhcXVlKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJsdXIge1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXItc21hbGwge1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1saW5lLXVuZGVyKTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxufVxcblxcbi5tZW51LWltYWdlIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIC5uYW1lIHtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcmljZSB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLyogaGVybyAqL1xcbi5oZXJvIHtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4jY2FmZU5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ21lb3dzJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDcwcHg7XFxufVxcblxcbmhlYWRlciBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi8qIGhvdmVyIGVmZmVjdCBvbiBuYXYgYmFyICovXFxuaGVhZGVyIGxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIgbGk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5lLXVuZGVyKTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmhlYWRlciBsaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGxpOmhvdmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1vcGFxdWUpO1xcbn1cXG5cXG5mb290ZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgICBtYXgtd2lkdGg6IDIycHg7XFxuICAgIG1heC1oZWlnaHQ6IDIycHg7XFxufVxcblxcbiNtYXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4jZ21hcF9jYW52YXMge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jY29udGFjdC1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIC5pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTtBQUNWO0lBQ0ksb0JBQW9CO0lBQ3BCLCtEQUF1RDtJQUN2RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUEyRDtBQUMvRDs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYix1REFBdUQ7SUFDdkQsMEVBQThEO0lBQzlELHNCQUFzQjs7SUFFdEIsK0JBQStCO0lBQy9CLDZDQUE2QztBQUNqRDs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxnQkFBZ0I7SUFDaEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZm9udHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtZW93cyc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9NZW93cy9NZW93cy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9QTkcvYmFja2dyb3VuZDIuanBnKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICAtLWxpbmUtdW5kZXI6IHJnYigxMCwgMTI2LCAxOTQpO1xcbiAgICAtLWJhY2tncm91bmQtb3BhcXVlOiByZ2JhKDIxNiwgMjEzLCAyMDQsIDAuNik7XFxufVxcblxcbmgxLFxcbnAge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IG1pbm1heCgxMDB2aCwgZml0LWNvbnRlbnQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA4MCUsIDk1MHB4KTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1vcGFxdWUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlci1zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpbmUtdW5kZXIpO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLm5hbWUge1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4vKiBoZXJvICovXFxuLmhlcm8ge1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbiNjYWZlTmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWVvd3MnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogNzBweDtcXG59XFxuXFxuaGVhZGVyIGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLyogaG92ZXIgZWZmZWN0IG9uIG5hdiBiYXIgKi9cXG5oZWFkZXIgbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciBsaTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmUtdW5kZXIpO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgbGk6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW9wYXF1ZSk7XFxufVxcblxcbmZvb3Rlcj4qIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIG1heC13aWR0aDogMjJweDtcXG4gICAgbWF4LWhlaWdodDogMjJweDtcXG59XFxuXFxuI21hcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbiNnbWFwX2NhbnZhcyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNjb250YWN0LWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gLmljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGluc2VydFRvTWFpblNlY3Rpb24sIHByZXBhcmVNYWluRWxlbWVudCB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgb3BlbmluZ0hvdXJzSWNvbiBmcm9tICcuLi9QTkcvY29udGFjdC93YWxsLWNsb2NrLnBuZydcbmltcG9ydCB0ZWxlcGhvbmVJY29uIGZyb20gJy4uL1BORy9jb250YWN0L3RlbGVwaG9uZS5wbmcnXG5pbXBvcnQgZW1haWxJY29uIGZyb20gJy4uL1BORy9jb250YWN0L2Fycm9iYS5wbmcnXG5pbXBvcnQgcGluSWNvbiBmcm9tICcuLi9QTkcvY29udGFjdC9wbGFjZWhvbGRlci5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dDb250YWN0VXMoKSB7XG4gICAgaW5zZXJ0VG9NYWluU2VjdGlvbihwcmVwYXJlQ29udGFjdFVzQ29udGVudHMoKSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUNvbnRhY3RVc0NvbnRlbnRzKCkge1xuICAgIGNvbnN0IG1haW4gPSBwcmVwYXJlTWFpbkVsZW1lbnQoKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWNlbnRlcicpXG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q29udGFpbmVyLmlkID0gJ2NvbnRhY3QtY29udGFpbmVyJ1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjb2x1bW4nLCAnYmx1cicsICdjb250YWluZXInLCAnY2VudGVyJylcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IGluZm8nXG4gICAgY29udGFjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlcicpXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKVxuXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gcHJlcGFyZUNvbnRhY3RJbmZvRWxlbWVudCgpXG4gICAgYXBwZW5kSWNvblRvRWxlbWVudChvcGVuaW5nSG91cnMsIG9wZW5pbmdIb3Vyc0ljb24pXG4gICAgYXBwZW5kSW5mb1RleHRUb0VsZW1lbnQob3BlbmluZ0hvdXJzLCAnTW9uIC0gRnJpOiAxMEFNIC0gMTBQTVxcblNhdDogOUFNIC0gMTAgUE1cXG5TdW46IGNsb3NlZCcpXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnMpXG5cbiAgICBjb25zdCB0ZWxlcGhvbmUgPSBwcmVwYXJlQ29udGFjdEluZm9FbGVtZW50KClcbiAgICBhcHBlbmRJY29uVG9FbGVtZW50KHRlbGVwaG9uZSwgdGVsZXBob25lSWNvbilcbiAgICBhcHBlbmRJbmZvVGV4dFRvRWxlbWVudCh0ZWxlcGhvbmUsICcoKzExKSAxMjMtNTU1LTEyMycpXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWxlcGhvbmUpXG5cbiAgICBjb25zdCBlbWFpbCA9IHByZXBhcmVDb250YWN0SW5mb0VsZW1lbnQoKVxuICAgIGFwcGVuZEljb25Ub0VsZW1lbnQoZW1haWwsIGVtYWlsSWNvbilcbiAgICBhcHBlbmRJbmZvVGV4dFRvRWxlbWVudChlbWFpbCwgJ2NhdC5jYWZlQGdtYWlsLmNvbScpXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbClcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBwcmVwYXJlQ29udGFjdEluZm9FbGVtZW50KClcbiAgICBhcHBlbmRJY29uVG9FbGVtZW50KGFkZHJlc3MsIHBpbkljb24pXG4gICAgYXBwZW5kSW5mb1RleHRUb0VsZW1lbnQoYWRkcmVzcywgJzY5IExha2UgU3RyLCBIYW1idXJnLCBVUycpXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvY2F0aW9uLmlkID0gJ21hcCdcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1hcG91dGVyXCI+PGRpdiBjbGFzcz1cImdtYXBfY2FudmFzXCI+PGlmcmFtZSB3aWR0aD1cIjUwOVwiIGhlaWdodD1cIjMxNFwiIGlkPVwiZ21hcF9jYW52YXNcIiBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP3E9NjklMjBMYWtlJTIwc3QsJTIwaGFtYnVyZywlMjBVUyZ0PSZ6PTE1JmllPVVURjgmaXdsb2M9Jm91dHB1dD1lbWJlZFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCIgbWFyZ2luaGVpZ2h0PVwiMFwiIG1hcmdpbndpZHRoPVwiMFwiPjwvaWZyYW1lPjxhIGhyZWY9XCJodHRwczovLzEyM21vdmllcy10by5vcmdcIj48L2E+PGJyPjxzdHlsZT4ubWFwb3V0ZXJ7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpyaWdodDtoZWlnaHQ6MzE0cHg7d2lkdGg6NTA5cHg7fTwvc3R5bGU+PHN0eWxlPi5nbWFwX2NhbnZhcyB7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6bm9uZSFpbXBvcnRhbnQ7aGVpZ2h0OjMxNHB4O3dpZHRoOjUwOXB4OyB9PC9zdHlsZT48L2Rpdj48L2Rpdj4nXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbilcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcilcbiAgICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ29udGFjdEluZm9FbGVtZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjb250YWN0LWluZm8nKVxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEljb25Ub0VsZW1lbnQoZWxlbWVudCwgaWNvblNyYykge1xuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uLnNyYyA9IGljb25TcmNcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcbn1cblxuZnVuY3Rpb24gYXBwZW5kSW5mb1RleHRUb0VsZW1lbnQoZWxlbWVudCwgdGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHRcbiAgICBwYXJhZ3JhcGguc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtbGluZSdcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaClcbn0iLCJpbXBvcnQgSWNvbiBmcm9tICcuLi9QTkcvaWNvbi5wbmcnO1xuaW1wb3J0IEljb25SZXZlcnMgZnJvbSAnLi4vUE5HL2ljb25fbGlnaHQucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuICAgIC8vICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9jYWZlXCIgdGl0bGU9XCJjYWZlIGljb25zXCI+Q2FmZSBpY29ucyBjcmVhdGVkIGJ5IG5vb210YWggLSBGbGF0aWNvbjwvYT5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgWnV6a2EnXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicsICdmbGV4JywgJ2NlbnRlcicpXG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vVXdVLTM3NTg2MTA5MjkyXCJcblxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRodWJJY29uLnNyYyA9IEljb247XG4gICAgZ2l0aHViSWNvbi5pZCA9ICdpY29uJ1xuICAgIGdpdGh1Ykljb24uYWx0ID0gXCJnaXRodWItdXNlci1saW5rXCJcbiAgICBnaXRodWJJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cblxuICAgIGNvbnN0IGdpdGh1Ykljb25MaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdGh1Ykljb25MaWdodC5zcmMgPSBJY29uUmV2ZXJzO1xuICAgIGdpdGh1Ykljb25MaWdodC5pZCA9ICdpY29uLWxpZ2h0J1xuICAgIGdpdGh1Ykljb25MaWdodC5hbHQgPSBcImdpdGh1Yi11c2VyLWxpbmtcIlxuICAgIGdpdGh1Ykljb25MaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uTGlnaHQpXG5cbiAgICBnaXRodWJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9vdGVyJylbMF0uc3R5bGUuY29sb3IgPSAnd2hpdGUnXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uLWxpZ2h0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuICAgIGdpdGh1Ykljb25MaWdodC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb290ZXInKVswXS5zdHlsZS5jb2xvciA9ICdibGFjaydcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0pXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluaylcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcilcbn0iLCJpbXBvcnQgeyBpbnNlcnRUb01haW5TZWN0aW9uLCBwcmVwYXJlTWFpbkVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93SG9tZVBhZ2UoKSB7XG4gICAgaW5zZXJ0VG9NYWluU2VjdGlvbihwcmVwYXJlSG9tZVBhZ2VDb250ZW50KCkpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVIb21lUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IHByZXBhcmVNYWluRWxlbWVudCgpXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJywgJ2NvbnRhaW5lcicpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQ2F0dGVpbmUnXG4gICAgaGVyby5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdXZSBhcmUgYSBzbWFsbCBjYXQgY2Fmw6ksIHdoaWNoIG1lYW5zIHRoYXQgd2hpbGUgdmlzaXRpbmcgdXMgeW91IGFyZSBhbHNvIHZpc2l0aW5nIGNvdXBsZSBvZiBvdXIgY2F0cyBhcyB3ZWxsLiBGZWVsIGZyZWUgdG8gcGV0IHRoZW0gYW5kIHBsZWFzZSBiZSBtaW5kZnVsIG9mIHRoZWlyIGNvbWZvcnQuJ1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm8pXG4gICAgcmV0dXJuIG1haW5cbn1cblxuLy8gUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0ByaWNhcmRvbD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5SaWNhcmRvIEw8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4iLCJpbXBvcnQgeyBpbnNlcnRUb01haW5TZWN0aW9uLCBwcmVwYXJlTWFpbkVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJ1xuaW1wb3J0IERyaXBJbWFnZSBmcm9tICcuLi9QTkcvbWVudV9pdGVtcy9kcmlwLmpwZydcbmltcG9ydCBBZXJvcHJlc3NJbWFnZSBmcm9tICcuLi9QTkcvbWVudV9pdGVtcy9hZXJvcHJlc3MuanBnJ1xuaW1wb3J0IENoZW1leEltYWdlIGZyb20gJy4uL1BORy9tZW51X2l0ZW1zL2NoZW1leC5qcGcnXG5pbXBvcnQgQ3VwYWNha2VJbWFnZSBmcm9tICcuLi9QTkcvbWVudV9pdGVtcy9jdXBjYWtlLmpwZydcbmltcG9ydCBUaXJhbWlzdUltYWdlIGZyb20gJy4uL1BORy9tZW51X2l0ZW1zL3RpcmFtaXN1LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgaW5zZXJ0VG9NYWluU2VjdGlvbihwcmVwYXJlTWVudVBhZ2VDb250ZW50KCkpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVNZW51UGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IHByZXBhcmVNYWluRWxlbWVudCgpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2p1c3RpZnktY2VudGVyJylcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjb2x1bW4nLCAnYmx1cicsICdjb250YWluZXInLCAnY2VudGVyJylcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlcicpXG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9ICfwn5C+IE1lbnUg8J+QvidcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpXG5cbiAgICBjb25zdCBiZXZlcmFnZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYmV2ZXJhZ2VzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyLXNtYWxsJylcbiAgICBiZXZlcmFnZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnQmV2ZXJhZ2VzJ1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzSGVhZGVyKVxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVwYXJlTWVudUl0ZW0oJ0RyaXAnLCAnQnJld2VkIHdpdGggSGFyaW8gVjYwIGJyZXdlciBoYXMgc3Ryb25nIGZsYXZvciBhbmQgYXJvbWEuIEdyZWF0IHdheSB0byBraWNrIG9mZiB5b3VyIGRheScsIDQsIERyaXBJbWFnZSkpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVwYXJlTWVudUl0ZW0oJ0Flcm9wcmVzcycsICdDb2ZmZWUgYnJld2VkIHVzaW5nIGFpciBwcmVzc3VyZS4gRmluZSBncmFpbmVkIGJlYW5zIGdpdmUgdGhlIGNvZmZlZSBzcGVjaWFsIHRhc3RlJywgMywgQWVyb3ByZXNzSW1hZ2UpKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlcGFyZU1lbnVJdGVtKCdDaGVtZXgnLCAnQnJld2VkIHVzaW5nIHNpbWlsYXIgdGVjaG5pcXVlIGFzIGRyaXAsIGJ1dCBkdWUgdG8gbGFyZ2VyIGZpbHRlciBhcmVhIHRoZSBjb2ZmZWUgaGFzIG1vcmUgZGVsaWNhdGUgZmxhdm91ci4gRXNwZWNpYWxseSBlbmpveWFibGUgaW4gdGhlIGFmdGVybm9vbnMnLCA1LCBDaGVtZXhJbWFnZSkpXG5cbiAgICBjb25zdCBjYWtlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjYWtlc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlci1zbWFsbCcpXG4gICAgY2FrZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnQ2FrZXMnXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWtlc0hlYWRlcilcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlcGFyZU1lbnVJdGVtKCdDdXBjYWtlJywgJ1dlIHByZXBhcmUgYmF0Y2ggb2YgY3VwYWNrZXMgZXZlcnkgZGF5LiBGbGF2b3VycyB2YXJ5IGRlcGVuZGluZyBvbiBmcmVzaCBpbmdyZWRpZW50cyBhdCBoYW5kJywgMy41MCwgQ3VwYWNha2VJbWFnZSkpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVwYXJlTWVudUl0ZW0oJ1RpcmFtaXN1JywgJ01hZGUgYWNjb3JkaW5nIHRvIE5hbmFcXCdzIHJlY2lwZScsIDcuNTAsIFRpcmFtaXN1SW1hZ2UpKVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gcHJlcGFyZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VTcmMpIHtcbiAgICBjb25zdCBtZW51SXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVJdGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ21lbnUtaXRlbScpXG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGltYWdlU3JjXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpXG4gICAgY29uc3QgY3JvcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY3JvcHBlci5jbGFzc0xpc3QuYWRkKCdjcm9wJylcbiAgICBjcm9wcGVyLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIG1lbnVJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChjcm9wcGVyKVxuXG4gICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjb2x1bW4nLCAnc3RhcnQnKVxuXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lJylcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXG5cbiAgICBjb25zdCBwcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxuICAgIHByaWNlRGl2LnRleHRDb250ZW50ID0gJyQnICsgcHJpY2VcblxuICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChuYW1lRGl2KVxuICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdilcbiAgICBtZW51SXRlbVRleHQuYXBwZW5kQ2hpbGQocHJpY2VEaXYpXG5cbiAgICBtZW51SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0KVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtV3JhcHBlclxufSIsImltcG9ydCBzaG93SG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHNob3dNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBzaG93Q29udGFjdFVzIGZyb20gJy4vY29udGFjdC5qcydcbmltcG9ydCBJY29uIGZyb20gJy4uL1BORy9wZXQtbG92ZS5wbmcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dOYXZCYXIoKSB7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgIGNvbnN0IGNhZmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYWZlTmFtZS50ZXh0Q29udGVudCA9ICdDYXR0ZWluZSdcblxuICAgIGNvbnN0IGNhZmVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgY2FmZUxvZ28uc3JjID0gSWNvblxuICAgIGNhZmVMb2dvLmFsdCA9IFwiY2F0LWNhZmUtbG9nb1wiXG5cbiAgICBjb25zdCBuYW1lV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmFtZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjZW50ZXInKVxuICAgIG5hbWVXcmFwcGVyLmlkID0gJ2NhZmVOYW1lJ1xuICAgIG5hbWVXcmFwcGVyLmFwcGVuZENoaWxkKGNhZmVMb2dvKVxuICAgIG5hbWVXcmFwcGVyLmFwcGVuZENoaWxkKGNhZmVOYW1lKVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdjZW50ZXInKVxuXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBhYm91dFVzLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJ1xuICAgIGFib3V0VXMub25jbGljayA9IHNob3dIb21lUGFnZVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgbWVudS5vbmNsaWNrID0gc2hvd01lbnVcblxuICAgIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb250YWN0VXMudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cydcbiAgICBjb250YWN0VXMub25jbGljayA9IHNob3dDb250YWN0VXNcblxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoYWJvdXRVcylcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG1lbnUpXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0VXMpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZVdyYXBwZXIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxpc3QpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG59IiwiZnVuY3Rpb24gaW5zZXJ0VG9NYWluU2VjdGlvbihuZXdOb2RlKSB7XG4gICAgY29uc3QgbWFpbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgaWYgKG1haW5Ob2RlKSB7XG4gICAgICAgIG1haW5Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG1haW5Ob2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcbiAgICBtYWluLmlkID0gJ21haW4nXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZXhwb3J0IHtcbiAgICBpbnNlcnRUb01haW5TZWN0aW9uLFxuICAgIHByZXBhcmVNYWluRWxlbWVudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHNob3dIb21lUGFnZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgc2hvd05hdkJhciBmcm9tICcuL25hdmlnYXRpb24uanMnXG5pbXBvcnQgc2hvd0Zvb3RlciBmcm9tICcuL2Zvb3Rlci5qcydcblxuY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGVudHMuaWQgPSAnY29udGVudCdcbmNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnY29sdW1uJylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudHMpXG5cbnNob3dOYXZCYXIoKVxuXG5zaG93SG9tZVBhZ2UoKVxuXG5zaG93Rm9vdGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=