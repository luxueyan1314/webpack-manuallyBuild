/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./src/css/test.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./src/css/test.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/_css-loader@3.2.0@css-loader/dist/runtime/getUrl.js */ \"./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../image/logo.png */ \"./src/image/logo.png\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../image/big.jpg */ \"./src/image/big.jpg\"));\n// Module\nexports.push([module.i, \"body {\\n    background: #ccc;\\n}\\n\\n#box1 {\\n    width: 60px;\\n    height: 60px;\\n    background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n\\n#box2 {\\n    width: 300px;\\n    height: 300px;\\n    background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/test.css?./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/getUrl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/test.css":
/*!**************************!*\
  !*** ./src/css/test.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./test.css */ \"./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./src/css/test.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/test.css?");

/***/ }),

/***/ "./src/image/big.jpg":
/*!***************************!*\
  !*** ./src/image/big.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"09c7a2fb758aec6639d11f4140850dff.jpg\";\n\n//# sourceURL=webpack:///./src/image/big.jpg?");

/***/ }),

/***/ "./src/image/logo.png":
/*!****************************!*\
  !*** ./src/image/logo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEo0lEQVR4Xu2ZTYgcRRTH/68HT35BDn6g4geoBxXx4EERjcRLQHbr9WZF1BUVBSHgriiKomZlF7+IH1HUg4oRjQeXrapZAwtLhIlihHhIAnpYPBhQUfGwqLvoYaeflMyEyaR7umtmp7eH6brN1L/qvferVx9dRRjyQkMeP0oAZQYMOYFyCgx5ApSL4KZMgfHx8S3r6+vPARgFsAbgA2PM65uRjbkDCMNwh4i44K9pC3i/iMxYaw/nCSI3ABMTE6evrq7uBvBwhwD/aUB4MS8IuQBg5rsBuFG/IktgInIgCIIZrfWXSXql1DQR3eLqReSgtXY6S9/tmn4DIGZ+H8ADCc693fh/Z0x9nYhmK5XKzNzcXL29npm/A3BV4//vjTFXFwoAM7ug3ahfHOPYL0R0V3OEwzC8WUQ+BXBBjPYrEZm11i611jGztP42xnQ1mF01SiPNzJ8AcGkfV/YYY6biKpj5DQCTCe1eWltbm11aWnK7BgoJgJnvBPAagPNjgvghiqL7qtXqoU4AR0dHbwyCYC+Ay2N0h6Momq1Wq58XDgAzzwHYEReciLxqrX08LXNa65VSu4nosYQ27szwaCGmQBiGIyLyIYAtMc4eI6KHtNbf+gTf1IZheL2IvAfg2rT2m7IGMLNtnOZO8c+t4FrrZ9Mcz1IfhuGMiDzTSZsrAKXUNiJywZ8R49Q3QRDsnJ+fP5IluKyasbGx66IoctvmDXFtiOgRrfVbWftr6rx3AaXUPreFJcz1p621fT3FKaWeIqIXEgJdXFlZCWu12r9ZQWQGwMyO/EEAp8V0/gWAKWOMO5z0vTCzO/S4LXNbgrE7jDFuUU4tmQAws1uIHkwY9Slr7Z5US30QKKUmiciBiFuDPtZa35tmNhWAUmoXESWes7tdfNIcy1rffh5obSci09ba5zv1lQXAn0R0VlInBQfwl7X27J4AMPNHAP5PJSI6ICK3tXZYQAA1AFsb/u7VWt/fEwDXWCm1NQiCZa31rxt1BM2a4mm6OH/CMLwsiqLIWns8rX3qFGjvYBAApAXdWl8C8KHltGUGbNBFhC/4JH2vA1JOAd+R6JW4r700fa/+lBmQRnijt0Gl1HYA24noypaLjmMisgxg0Vq76OPTQGVAymVpM+59xph7skIYGACdPlrigs16xB4IAMzsnsPezTqqDd2kMebNtDaFB8DM7kLzaHsgRORehpuXpe7ysxqjuUlr/XUnCIMAwF1fu7eCEyUpvduDEZF3rLVxz2Yn+hoEAJ8BGG+JP/G6ipmdzumbpWaMuXXQM+AnABc2g6jX6+ctLCz8HhfUyMjIuZVK5beWuj+MMecMOgCvR0zflPbVn7LOpK2yvR6EfB3st74E0Eag798C/R5R3/7LDCgz4GQC5RTodRdwry+NPmJhEtGuVhv91mf9iGr61E0GnHSw8QXYZ/3PxpiLfGx4A1BKvUxET/gYyUsrIq9Ya5/0secNwHXOzD8CuMTHUA7a48aYS33tdAWgAeF2EXHXWmf6Gt1g/d9EtGyM2d9Nv10D6MZYEduUAIo4Knn6VGZAnrSLaKvMgCKOSp4+lRmQJ+0i2hr6DPgPiClwXyf/W1sAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/image/logo.png?");

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/js/math.js\");\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/data.json */ \"./src/json/data.json\");\nvar _json_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/data.json */ \"./src/json/data.json\", 1);\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/test.css */ \"./src/css/test.css\");\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_test_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//注意data会自动被转换为原生的js对象或者数组\ndocument.write(\"entry.js is work <br/>\");\ndocument.write(Object(_math__WEBPACK_IMPORTED_MODULE_0__[\"cube\"])(2) + '<br/>');\n// document.write(JSON.stringify(data) + '<br/>')\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/*! exports provided: square, cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cube\", function() { return cube; });\nfunction square(x) {\n    return x * x;\n}\n\nfunction cube(x) {\n    return x * x * x;\n}\n\n//# sourceURL=webpack:///./src/js/math.js?");

/***/ }),

/***/ "./src/json/data.json":
/*!****************************!*\
  !*** ./src/json/data.json ***!
  \****************************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"Tom\\\",\\\"age\\\":12}\");\n\n//# sourceURL=webpack:///./src/json/data.json?");

/***/ })

/******/ });