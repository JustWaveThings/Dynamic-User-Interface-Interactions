"use strict";
(self["webpackChunkwebpack_template_repository"] = self["webpackChunkwebpack_template_repository"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'RobotoRegular', Arial, Helvetica, sans-serif;\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tformat: ('ttf');\n}\n\n:root {\n\t/* from coolors */\n\t--charcoal: rgb(22, 47, 60);\n\t--rosy-brown: rgb(193, 148, 138);\n\t--air-superiority-blue: hsla(201, 33%, 62%, 1);\n\t--isabelline: hsla(20, 33%, 95%, 1);\n\t--khaki: hsla(45, 23%, 65%, 1);\n\n\t--dark-background: var(--charcoal);\n\t--light-background: var(--isabelline);\n\t--accent-color: var(--air-superiority-blue);\n\t--rosy-color: var(--rosy-brown);\n\t--highlight-color: var(--khaki);\n\t--text-color-dark: black;\n\t--text-color-light: white;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\topacity: 0.96;\n}\n\nbody {\n\tbackground-color: var(--dark-background);\n\tcolor: var(--text-color-light);\n\tfont-family: 'RobotoRegular', sans-serif;\n\tfont-size: 16px;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100dvh;\n\twidth: 100dvw;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 30%;\n}\n\nheader {\n\talign-self: flex-start;\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100dvw;\n\tbackground-color: var(--accent-color);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tflex-grow: 1;\n\tmargin: 0;\n}\n\nul {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tflex-grow: 1;\n\tmargin: 0;\n\tpadding: 0;\n\tinset: 0;\n}\nli {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.nav.item {\n\tdisplay: flex;\n\tflex-basis: 12rem;\n\ttext-align: center;\n\tflex-shrink: 0;\n\tfont-size: 1.5rem;\n\tbackground-color: var(--accent-color);\n\tcolor: var(--text-color-light);\n\tposition: relative;\n\ttransition: background-color 250ms ease-in-out;\n}\n\n.nav.item > span,\n.sub-li > span {\n\tflex: 1;\n\tpadding: 1rem;\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n}\n\n.nav .item:hover {\n\tbackground-color: var(--rosy-color);\n\tcolor: var(--text-color-light);\n\topacity: 1;\n\ttransition: background-color 250ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\n.nav.item:last-of-type {\n\tmargin-left: auto;\n}\n\n.sub-nav {\n\tvisibility: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttop: -4rem;\n\tposition: absolute;\n\topacity: 0.9;\n}\n\n.sub-li {\n\tborder: 1px solid var(--dark-background);\n\tbackground-color: var(--rosy-color);\n}\n\n.sub-li:nth-child(even) {\n\tbackground-color: rgba(193, 148, 138, 0.85);\n}\n\n.sub-li:hover {\n\tbackground-color: var(--highlight-color);\n\ttransition: background-color 350ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\n.sub-span {\n\tflex: 1;\n\tdisplay: block;\n\tpadding: 0.2rem;\n\topacity: 1;\n}\n\n.active > .sub-nav {\n\tvisibility: visible;\n\ttransform: translate(0, 8rem);\n\ttransition: transform 350ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 3rem;\n}\n\n.img-slider-frame {\n\tposition: relative;\n\twidth: 600px;\n\theight: 400px;\n\toverflow: hidden;\n\tbox-shadow: 0px 8px 50px 0px rgba(0, 0, 0, 0.6);\n}\n\n.img-slider-container {\n\tdisplay: flex;\n\tposition: absolute;\n\t\n\tleft: 0%;\n\ttransform: translate(-50%, -50%);\n}\n.slider-interface-nav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.slider-images-of-cats {\n\tdisplay: none;\n  }\n  \n.slider-images-of-cats.active-image {\n\tdisplay: flex;\n\tposition: absolute;\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n  }\n\nbutton {\n\tbackground-color: var(--accent-color);\n\tcolor: var(--text-color-light);\n\tfont-size: 1.5rem;\n\tpadding: 1rem;\n\tborder: none;\n\tborder-radius: 5rem;\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n\ttransition: translate 1000ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\nbutton:hover {\n\tbackground-color: var(--highlight-color);\n\ttransform: scale(2);\n}\nbutton.active-slider {\n\tbackground-color: var(--text-color-light);\n\ttransform: scale(1.5);\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,0DAA0D;CAC1D,4CAAoC;CACpC,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,2BAA2B;CAC3B,gCAAgC;CAChC,8CAA8C;CAC9C,mCAAmC;CACnC,8BAA8B;;CAE9B,kCAAkC;CAClC,qCAAqC;CACrC,2CAA2C;CAC3C,+BAA+B;CAC/B,+BAA+B;CAC/B,wBAAwB;CACxB,yBAAyB;AAC1B;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,aAAa;AACd;;AAEA;CACC,wCAAwC;CACxC,8BAA8B;CAC9B,wCAAwC;CACxC,eAAe;CACf,SAAS;CACT,UAAU;CACV,cAAc;CACd,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;CACC,sBAAsB;CACtB,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,qCAAqC;AACtC;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,yBAAyB;CACzB,mBAAmB;CACnB,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,YAAY;CACZ,SAAS;CACT,UAAU;CACV,QAAQ;AACT;AACA;CACC,gBAAgB;CAChB,UAAU;CACV,SAAS;AACV;;AAEA;CACC,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,cAAc;CACd,iBAAiB;CACjB,qCAAqC;CACrC,8BAA8B;CAC9B,kBAAkB;CAClB,8CAA8C;AAC/C;;AAEA;;CAEC,OAAO;CACP,aAAa;CACb,+CAA+C;AAChD;;AAEA;CACC,mCAAmC;CACnC,8BAA8B;CAC9B,UAAU;CACV,oEAAoE;AACrE;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,UAAU;CACV,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,wCAAwC;CACxC,mCAAmC;AACpC;;AAEA;CACC,2CAA2C;AAC5C;;AAEA;CACC,wCAAwC;CACxC,oEAAoE;AACrE;;AAEA;CACC,OAAO;CACP,cAAc;CACd,eAAe;CACf,UAAU;AACX;;AAEA;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,6DAA6D;AAC9D;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;AACV;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,+CAA+C;AAChD;;AAEA;CACC,aAAa;CACb,kBAAkB;;CAElB,QAAQ;CACR,gCAAgC;AACjC;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,aAAa;EACZ;;AAEF;CACC,aAAa;CACb,kBAAkB;CAClB,+CAA+C;EAC9C;;AAEF;CACC,qCAAqC;CACrC,8BAA8B;CAC9B,iBAAiB;CACjB,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,+CAA+C;CAC/C,8DAA8D;AAC/D;;AAEA;CACC,wCAAwC;CACxC,mBAAmB;AACpB;AACA;CACC,yCAAyC;CACzC,qBAAqB;AACtB","sourcesContent":["@font-face {\n\tfont-family: 'RobotoRegular', Arial, Helvetica, sans-serif;\n\tsrc: url(./fonts/Roboto-Regular.ttf);\n\tformat: ('ttf');\n}\n\n:root {\n\t/* from coolors */\n\t--charcoal: rgb(22, 47, 60);\n\t--rosy-brown: rgb(193, 148, 138);\n\t--air-superiority-blue: hsla(201, 33%, 62%, 1);\n\t--isabelline: hsla(20, 33%, 95%, 1);\n\t--khaki: hsla(45, 23%, 65%, 1);\n\n\t--dark-background: var(--charcoal);\n\t--light-background: var(--isabelline);\n\t--accent-color: var(--air-superiority-blue);\n\t--rosy-color: var(--rosy-brown);\n\t--highlight-color: var(--khaki);\n\t--text-color-dark: black;\n\t--text-color-light: white;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\topacity: 0.96;\n}\n\nbody {\n\tbackground-color: var(--dark-background);\n\tcolor: var(--text-color-light);\n\tfont-family: 'RobotoRegular', sans-serif;\n\tfont-size: 16px;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100dvh;\n\twidth: 100dvw;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 30%;\n}\n\nheader {\n\talign-self: flex-start;\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100dvw;\n\tbackground-color: var(--accent-color);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tflex-grow: 1;\n\tmargin: 0;\n}\n\nul {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tflex-grow: 1;\n\tmargin: 0;\n\tpadding: 0;\n\tinset: 0;\n}\nli {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.nav.item {\n\tdisplay: flex;\n\tflex-basis: 12rem;\n\ttext-align: center;\n\tflex-shrink: 0;\n\tfont-size: 1.5rem;\n\tbackground-color: var(--accent-color);\n\tcolor: var(--text-color-light);\n\tposition: relative;\n\ttransition: background-color 250ms ease-in-out;\n}\n\n.nav.item > span,\n.sub-li > span {\n\tflex: 1;\n\tpadding: 1rem;\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n}\n\n.nav .item:hover {\n\tbackground-color: var(--rosy-color);\n\tcolor: var(--text-color-light);\n\topacity: 1;\n\ttransition: background-color 250ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\n.nav.item:last-of-type {\n\tmargin-left: auto;\n}\n\n.sub-nav {\n\tvisibility: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttop: -4rem;\n\tposition: absolute;\n\topacity: 0.9;\n}\n\n.sub-li {\n\tborder: 1px solid var(--dark-background);\n\tbackground-color: var(--rosy-color);\n}\n\n.sub-li:nth-child(even) {\n\tbackground-color: rgba(193, 148, 138, 0.85);\n}\n\n.sub-li:hover {\n\tbackground-color: var(--highlight-color);\n\ttransition: background-color 350ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\n.sub-span {\n\tflex: 1;\n\tdisplay: block;\n\tpadding: 0.2rem;\n\topacity: 1;\n}\n\n.active > .sub-nav {\n\tvisibility: visible;\n\ttransform: translate(0, 8rem);\n\ttransition: transform 350ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 3rem;\n}\n\n.img-slider-frame {\n\tposition: relative;\n\twidth: 600px;\n\theight: 400px;\n\toverflow: hidden;\n\tbox-shadow: 0px 8px 50px 0px rgba(0, 0, 0, 0.6);\n}\n\n.img-slider-container {\n\tdisplay: flex;\n\tposition: absolute;\n\t\n\tleft: 0%;\n\ttransform: translate(-50%, -50%);\n}\n.slider-interface-nav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.slider-images-of-cats {\n\tdisplay: none;\n  }\n  \n.slider-images-of-cats.active-image {\n\tdisplay: flex;\n\tposition: absolute;\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n  }\n\nbutton {\n\tbackground-color: var(--accent-color);\n\tcolor: var(--text-color-light);\n\tfont-size: 1.5rem;\n\tpadding: 1rem;\n\tborder: none;\n\tborder-radius: 5rem;\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n\ttransition: translate 1000ms cubic-bezier(0, 2.47, 0.38, 0.91);\n}\n\nbutton:hover {\n\tbackground-color: var(--highlight-color);\n\ttransform: scale(2);\n}\nbutton.active-slider {\n\tbackground-color: var(--text-color-light);\n\ttransform: scale(1.5);\n}\n\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_component_helpers_progressively_collapsing_menu_toggleClickedElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/component_helpers/progressively collapsing menu/toggleClickedElement */ "./src/modules/component_helpers/progressively collapsing menu/toggleClickedElement.js");
/* harmony import */ var _modules_component_helpers_image_slider_cats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/component_helpers/image_slider/cats */ "./src/modules/component_helpers/image_slider/cats.js");
/* harmony import */ var _modules_component_helpers_image_slider_sliderInterfaceContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/component_helpers/image_slider/sliderInterfaceContainer */ "./src/modules/component_helpers/image_slider/sliderInterfaceContainer.js");
/* harmony import */ var _modules_component_helpers_image_slider_sliderController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/component_helpers/image_slider/sliderController */ "./src/modules/component_helpers/image_slider/sliderController.js");







_modules_component_helpers_progressively_collapsing_menu_toggleClickedElement__WEBPACK_IMPORTED_MODULE_1__["default"].init('.nav.item');

(0,_modules_component_helpers_image_slider_cats__WEBPACK_IMPORTED_MODULE_2__.createCats)();

const main = document.querySelector('.main');
main.appendChild((0,_modules_component_helpers_image_slider_sliderInterfaceContainer__WEBPACK_IMPORTED_MODULE_3__["default"])());


(0,_modules_component_helpers_image_slider_sliderController__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_component_helpers_image_slider_sliderController__WEBPACK_IMPORTED_MODULE_4__.setActive)(0)
;(0,_modules_component_helpers_image_slider_sliderController__WEBPACK_IMPORTED_MODULE_4__.sliderNavAdvanceRecursive)()


/* 

I have a currently working image slider that I'm trying to add a pause for 5 seconds if the user clicks the advance button.

So here's the issue. I need to pause the advance of the recursive function sliderNavAdvance() on a click in the slider nav container. 

Currently the slider advances every 1 second, even if I click on the slider nav container.

My dillema: I need to be able to get the value of the pauseRecursiveSlider variable from the sliderController function to the sliderNavAdvanceRecursive function every time there's a click event on the slider nav container.  

I can't get the value of the pause variable to the sliderNavAdvanceRecursive function.  I declared the pause variable in the module scope, I know I can't export a non const variable to another module as that would not get updated after the inital import into the other module. I've tried numerous things to overcome this short of looking up a solution that implements it... 

Here is my repo/branch that is up to date, and I can share my screen and talk through this with anyone who can lend a hand.  I've been at this issue for several hours and it's a foundational thing that I'm missing. 

https://github.com/JustWaveThings/Dynamic-User-Interface-Interactions/tree/feature_pause_advance_on_nav_click 
*/

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/cats.js":
/*!************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/cats.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cats": () => (/* binding */ cats),
/* harmony export */   "createCats": () => (/* binding */ createCats)
/* harmony export */ });
/* harmony import */ var _images_for_slider_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images_for_slider/1.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/1.jpg");
/* harmony import */ var _images_for_slider_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images_for_slider/2.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/2.jpg");
/* harmony import */ var _images_for_slider_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images_for_slider/3.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/3.jpg");
/* harmony import */ var _images_for_slider_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images_for_slider/4.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/4.jpg");
/* harmony import */ var _images_for_slider_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images_for_slider/5.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/5.jpg");
/* harmony import */ var _images_for_slider_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images_for_slider/6.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/6.jpg");
/* harmony import */ var _images_for_slider_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images_for_slider/7.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/7.jpg");
/* harmony import */ var _images_for_slider_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images_for_slider/8.jpg */ "./src/modules/component_helpers/image_slider/images_for_slider/8.jpg");
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createImage */ "./src/modules/component_helpers/image_slider/createImage.js");










const cats = [_images_for_slider_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_for_slider_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_for_slider_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_for_slider_4_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_for_slider_5_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_for_slider_6_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_for_slider_7_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_for_slider_8_jpg__WEBPACK_IMPORTED_MODULE_7__];

const createCats = () => {
	cats.forEach((cat, index) => {
		const catImage = (0,_createImage__WEBPACK_IMPORTED_MODULE_8__.createImage)(cat, 'image of cat');
		catImage.dataset.imageIndex = index;
		catImage.classList.add('slider-images-of-cats')
		;(0,_createImage__WEBPACK_IMPORTED_MODULE_8__.appendImage)(catImage);
	});
};


/***/ }),

/***/ "./src/modules/component_helpers/image_slider/createImage.js":
/*!*******************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/createImage.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendImage": () => (/* binding */ appendImage),
/* harmony export */   "createImage": () => (/* binding */ createImage)
/* harmony export */ });
function createImage(src, alt,  width = '600', height = '400', ) {
	const img = new Image();
	img.src = src;
	img.alt = alt;
	img.width = width;
	img.height = height;

	return img;
}

function appendImage(image, container = '.img-slider-container') {
	const myContainer = document.querySelector(container);
	myContainer.appendChild(image);
}




/***/ }),

/***/ "./src/modules/component_helpers/image_slider/sliderController.js":
/*!************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/sliderController.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setActive": () => (/* binding */ setActive),
/* harmony export */   "sliderNavAdvanceRecursive": () => (/* binding */ sliderNavAdvanceRecursive)
/* harmony export */ });
/* harmony import */ var _sliderInterfaceContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderInterfaceContainer */ "./src/modules/component_helpers/image_slider/sliderInterfaceContainer.js");
/* eslint-disable no-plusplus */


/* 
 1. this needs to assign event listeners using event delegation for the slider interface container buttons and the left and right arrows. We need to use the data-attributes I assigned to the buttons and images. -- done

 2. this needs to be able to update the slider interface container buttons to reflect the current image being displayed by putting a class on the button that matches the current image being displayed.  -- done 
  
 2.1 I will put an 'active' on both the button and the image that should be displayed and style them separately in css. This should update either by a click on a button in the slider nav   -- done

 2.2 make the arrows work to advance - rewind   done 
 
 2.3 or by the timing function that moves the slider forward every 5 seconds     

 3. need a function that will remove a class from the active button and image and add it to the next button and image every 5 seconds if no other button is clicked in the last 5 seconds.  this function will also need to loop back to the first image and button if it is on the last image and button. if a button is clicked, the timer should reset to 5 seconds. if the left or right arrow is clicked, the timer should reset to 5 seconds. 
 
*/

function setActive(index) {
  const buttons = document.querySelectorAll(
    '.nav-slider-position-indicator-buttons'
  );
  const images = document.querySelectorAll('.slider-images-of-cats');
  buttons.forEach((button) => {
    button.classList.remove('active-slider');
  });
  images.forEach((image) => {
    image.classList.remove('active-image');
  });
  buttons[index].classList.toggle('active-slider');
  images[index].classList.toggle('active-image');
}

function navArrowAction(arrow) {
  const catListLength =
    document.querySelectorAll('.slider-images-of-cats').length - 1;

  let currentActiveIndex =
    document.querySelector('.active-slider').dataset.navIndex;

  if (arrow === 'slider-reverse') {
    if (currentActiveIndex === '0') {
      setActive(catListLength);
    } else {
      setActive(currentActiveIndex - 1);
    }
  }

  if (arrow === 'slider-forward') {
    if (+currentActiveIndex === catListLength) {
      setActive('0');
    } else {
      setActive(++currentActiveIndex);
    }
  }
}



function sliderController() {
  // grab the slider interface container
  const sliderNavContainer = document.querySelector('.slider-interface-nav');

  // event delegation to handle either a click on the slider nav button or an arrow
  sliderNavContainer.addEventListener('click', (e) => {
    if (!e.target.dataset.navIndex) {
      const arrow = e.target.dataset.navArrow;
      navArrowAction(arrow);
      return;
    }

    const index = e.target.dataset.navIndex;
    setActive(index);
  });
}

// how to pass pauseRecursiveSlider to the recursive function from sliderController?

let pauseRecursiveSlider = false;

function sliderNavAdvanceRecursive() {
   // going to try to just make another event listener within this function and do it all in here... it's not the right way but it's a path to resolution. 
  
   
   const pauseClickListener = document.querySelector('.slider-interface-nav')
   pauseClickListener.addEventListener('click', () => {pauseRecursiveSlider = true});

  const catListLength =
    document.querySelectorAll('.slider-images-of-cats').length - 1;
  let currentActiveIndex =
    document.querySelector('.active-slider').dataset.navIndex;
  // console.log(currentActiveIndex);
  if (+currentActiveIndex === catListLength) {
    currentActiveIndex = -1;
  }
  currentActiveIndex++;
  setActive(currentActiveIndex);

  if (pauseRecursiveSlider) {
    
    setTimeout(() => {
      sliderNavAdvanceRecursive(false);
    }, 5000);
  } else {
   
    setTimeout(sliderNavAdvanceRecursive, 5000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderController);

// this version as of 3 / 13 / 23 the autoadvance and the nav forward back buttons work...


/***/ }),

/***/ "./src/modules/component_helpers/image_slider/sliderInterfaceContainer.js":
/*!********************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/sliderInterfaceContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cats */ "./src/modules/component_helpers/image_slider/cats.js");


function sliderInterfaceContainer() {
	const sliderInterface = document.createElement('nav');
	sliderInterface.classList.add('slider-interface-nav');

	const leftArrow = document.createElement('button');
	leftArrow.classList.add('left-arrow');
	leftArrow.dataset.navArrow = 'slider-reverse';
	leftArrow.textContent = '<';// replace with image 

	const rightArrow = document.createElement('button');
	rightArrow.classList.add('right-arrow');
	rightArrow.dataset.navArrow = 'slider-forward';
	rightArrow.textContent = '>'; // replace with image 

	sliderInterface.appendChild(leftArrow);

	_cats__WEBPACK_IMPORTED_MODULE_0__.cats.forEach((_, index) => {
		const imageIndex = document.createElement('button');
		imageIndex.dataset.navIndex = index;
		imageIndex.classList.add('nav-slider-position-indicator-buttons')
		imageIndex.textContent = ''; // replace with image
		sliderInterface.appendChild(imageIndex);
	});

	sliderInterface.appendChild(rightArrow);

	return sliderInterface;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderInterfaceContainer);


/***/ }),

/***/ "./src/modules/component_helpers/progressively collapsing menu/toggleClickedElement.js":
/*!*********************************************************************************************!*\
  !*** ./src/modules/component_helpers/progressively collapsing menu/toggleClickedElement.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// for adding and removing event listeners to the menu dropdown in html.  On click, the menu dropdown will toggle class between having an 'active' class and removing the 'active' class.

const ToggleClickedElement = (() => {
	let targetElement;

	const removeActiveClassFromAllElements = () => {
		targetElement.forEach((element) => {
			element.classList.remove('active');
		});
	};

	const clickOutsideElement = (e) => {
		const navItem = e.target.closest('.nav.item');
		if (!e.target.matches('.nav-text')) {
			removeActiveClassFromAllElements();
		} else if (navItem && navItem.querySelector('.nav-text')) {
			navItem.classList.toggle('active');
		}
	};

	const closeMenuWhenClickOutside = () => {
		document.addEventListener('click', clickOutsideElement);
	};

	const addActiveClassToSingleElement = (e) => {
		closeMenuWhenClickOutside();
	};

	return {
		init: (targetSelector) => {
			targetElement = document.querySelectorAll(targetSelector);
			targetElement.forEach((element) => {
				element.addEventListener(
					'click',
					addActiveClassToSingleElement
				);
			});
		},
		destroy: () => {
			targetElement.forEach((element) => {
				element.removeEventListener(
					'click',
					addActiveClassToSingleElement
				);
				element.removeEventListener('click', clickOutsideElement);
			});
		},
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleClickedElement);


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

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/1.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/1.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf77033a0451428a8a22.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/2.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/2.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "903ef7671fbe4bf8e335.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/3.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/3.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "760dcd1aaac21e67c20a.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/4.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/4.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "354c6d52693247b20222.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/5.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/5.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0c6cec8ba32920aa016.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/6.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/6.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3729238be93de4f4d8cb.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/7.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/7.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "277fea59d8c65529fae1.jpg";

/***/ }),

/***/ "./src/modules/component_helpers/image_slider/images_for_slider/8.jpg":
/*!****************************************************************************!*\
  !*** ./src/modules/component_helpers/image_slider/images_for_slider/8.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ffdf649763a91bbdaa4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50X2hlbHBlcnMvaW1hZ2Vfc2xpZGVyL2NhdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50X2hlbHBlcnMvaW1hZ2Vfc2xpZGVyL2NyZWF0ZUltYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudF9oZWxwZXJzL2ltYWdlX3NsaWRlci9zbGlkZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudF9oZWxwZXJzL2ltYWdlX3NsaWRlci9zbGlkZXJJbnRlcmZhY2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50X2hlbHBlcnMvcHJvZ3Jlc3NpdmVseSBjb2xsYXBzaW5nIG1lbnUvdG9nZ2xlQ2xpY2tlZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcblxcdGZvcm1hdDogKCd0dGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC8qIGZyb20gY29vbG9ycyAqL1xcblxcdC0tY2hhcmNvYWw6IHJnYigyMiwgNDcsIDYwKTtcXG5cXHQtLXJvc3ktYnJvd246IHJnYigxOTMsIDE0OCwgMTM4KTtcXG5cXHQtLWFpci1zdXBlcmlvcml0eS1ibHVlOiBoc2xhKDIwMSwgMzMlLCA2MiUsIDEpO1xcblxcdC0taXNhYmVsbGluZTogaHNsYSgyMCwgMzMlLCA5NSUsIDEpO1xcblxcdC0ta2hha2k6IGhzbGEoNDUsIDIzJSwgNjUlLCAxKTtcXG5cXG5cXHQtLWRhcmstYmFja2dyb3VuZDogdmFyKC0tY2hhcmNvYWwpO1xcblxcdC0tbGlnaHQtYmFja2dyb3VuZDogdmFyKC0taXNhYmVsbGluZSk7XFxuXFx0LS1hY2NlbnQtY29sb3I6IHZhcigtLWFpci1zdXBlcmlvcml0eS1ibHVlKTtcXG5cXHQtLXJvc3ktY29sb3I6IHZhcigtLXJvc3ktYnJvd24pO1xcblxcdC0taGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1raGFraSk7XFxuXFx0LS10ZXh0LWNvbG9yLWRhcms6IGJsYWNrO1xcblxcdC0tdGV4dC1jb2xvci1saWdodDogd2hpdGU7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0b3BhY2l0eTogMC45NjtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDBkdmg7XFxuXFx0d2lkdGg6IDEwMGR2dztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDMwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR3aWR0aDogMTAwZHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbm5hdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGluc2V0OiAwO1xcbn1cXG5saSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi5pdGVtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtYmFzaXM6IDEycmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5hdi5pdGVtID4gc3BhbixcXG4uc3ViLWxpID4gc3BhbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ubmF2IC5pdGVtOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3N5LWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGN1YmljLWJlemllcigwLCAyLjQ3LCAwLjM4LCAwLjkxKTtcXG59XFxuXFxuLm5hdi5pdGVtOmxhc3Qtb2YtdHlwZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zdWItbmF2IHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHRvcDogLTRyZW07XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnN1Yi1saSB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3N5LWNvbG9yKTtcXG59XFxuXFxuLnN1Yi1saTpudGgtY2hpbGQoZXZlbikge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkzLCAxNDgsIDEzOCwgMC44NSk7XFxufVxcblxcbi5zdWItbGk6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzNTBtcyBjdWJpYy1iZXppZXIoMCwgMi40NywgMC4zOCwgMC45MSk7XFxufVxcblxcbi5zdWItc3BhbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLmFjdGl2ZSA+IC5zdWItbmF2IHtcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDhyZW0pO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBjdWJpYy1iZXppZXIoMCwgMi40NywgMC4zOCwgMC45MSk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDNyZW07XFxufVxcblxcbi5pbWctc2xpZGVyLWZyYW1lIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3gtc2hhZG93OiAwcHggOHB4IDUwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLmltZy1zbGlkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXG5cXHRsZWZ0OiAwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLnNsaWRlci1pbnRlcmZhY2UtbmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5zbGlkZXItaW1hZ2VzLW9mLWNhdHMge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4uc2xpZGVyLWltYWdlcy1vZi1jYXRzLmFjdGl2ZS1pbWFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB9XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cmVtO1xcblxcdGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcblxcdHRyYW5zaXRpb246IHRyYW5zbGF0ZSAxMDAwbXMgY3ViaWMtYmV6aWVyKDAsIDIuNDcsIDAuMzgsIDAuOTEpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgyKTtcXG59XFxuYnV0dG9uLmFjdGl2ZS1zbGlkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLDBEQUEwRDtDQUMxRCw0Q0FBb0M7Q0FDcEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IsZ0NBQWdDO0NBQ2hDLDhDQUE4QztDQUM5QyxtQ0FBbUM7Q0FDbkMsOEJBQThCOztDQUU5QixrQ0FBa0M7Q0FDbEMscUNBQXFDO0NBQ3JDLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IsK0JBQStCO0NBQy9CLHdCQUF3QjtDQUN4Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtDQUN0QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsOEJBQThCO0NBQzlCLHdDQUF3QztDQUN4QyxlQUFlO0NBQ2YsU0FBUztDQUNULFVBQVU7Q0FDVixjQUFjO0NBQ2QsYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLFFBQVE7QUFDVDtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLHFDQUFxQztDQUNyQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLDhDQUE4QztBQUMvQzs7QUFFQTs7Q0FFQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLCtDQUErQztBQUNoRDs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyw4QkFBOEI7Q0FDOUIsVUFBVTtDQUNWLG9FQUFvRTtBQUNyRTs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLDJDQUEyQztBQUM1Qzs7QUFFQTtDQUNDLHdDQUF3QztDQUN4QyxvRUFBb0U7QUFDckU7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsY0FBYztDQUNkLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLDZEQUE2RDtBQUM5RDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjs7Q0FFbEIsUUFBUTtDQUNSLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7RUFDWjs7QUFFRjtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsK0NBQStDO0VBQzlDOztBQUVGO0NBQ0MscUNBQXFDO0NBQ3JDLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsK0NBQStDO0NBQy9DLDhEQUE4RDtBQUMvRDs7QUFFQTtDQUNDLHdDQUF3QztDQUN4QyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHlDQUF5QztDQUN6QyxxQkFBcUI7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXHRzcmM6IHVybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XFxuXFx0Zm9ybWF0OiAoJ3R0ZicpO1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LyogZnJvbSBjb29sb3JzICovXFxuXFx0LS1jaGFyY29hbDogcmdiKDIyLCA0NywgNjApO1xcblxcdC0tcm9zeS1icm93bjogcmdiKDE5MywgMTQ4LCAxMzgpO1xcblxcdC0tYWlyLXN1cGVyaW9yaXR5LWJsdWU6IGhzbGEoMjAxLCAzMyUsIDYyJSwgMSk7XFxuXFx0LS1pc2FiZWxsaW5lOiBoc2xhKDIwLCAzMyUsIDk1JSwgMSk7XFxuXFx0LS1raGFraTogaHNsYSg0NSwgMjMlLCA2NSUsIDEpO1xcblxcblxcdC0tZGFyay1iYWNrZ3JvdW5kOiB2YXIoLS1jaGFyY29hbCk7XFxuXFx0LS1saWdodC1iYWNrZ3JvdW5kOiB2YXIoLS1pc2FiZWxsaW5lKTtcXG5cXHQtLWFjY2VudC1jb2xvcjogdmFyKC0tYWlyLXN1cGVyaW9yaXR5LWJsdWUpO1xcblxcdC0tcm9zeS1jb2xvcjogdmFyKC0tcm9zeS1icm93bik7XFxuXFx0LS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWtoYWtpKTtcXG5cXHQtLXRleHQtY29sb3ItZGFyazogYmxhY2s7XFxuXFx0LS10ZXh0LWNvbG9yLWxpZ2h0OiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRvcGFjaXR5OiAwLjk2O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRoZWlnaHQ6IDEwMGR2aDtcXG5cXHR3aWR0aDogMTAwZHZ3O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMzAlO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdHdpZHRoOiAxMDBkdnc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbnVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aW5zZXQ6IDA7XFxufVxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2Lml0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1iYXNpczogMTJyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2Lml0ZW0gPiBzcGFuLFxcbi5zdWItbGkgPiBzcGFuIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5uYXYgLml0ZW06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc3ktY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDIuNDcsIDAuMzgsIDAuOTEpO1xcbn1cXG5cXG4ubmF2Lml0ZW06bGFzdC1vZi10eXBlIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnN1Yi1uYXYge1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0dG9wOiAtNHJlbTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0b3BhY2l0eTogMC45O1xcbn1cXG5cXG4uc3ViLWxpIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc3ktY29sb3IpO1xcbn1cXG5cXG4uc3ViLWxpOm50aC1jaGlsZChldmVuKSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTMsIDE0OCwgMTM4LCAwLjg1KTtcXG59XFxuXFxuLnN1Yi1saTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDM1MG1zIGN1YmljLWJlemllcigwLCAyLjQ3LCAwLjM4LCAwLjkxKTtcXG59XFxuXFxuLnN1Yi1zcGFuIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBhZGRpbmc6IDAuMnJlbTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWN0aXZlID4gLnN1Yi1uYXYge1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgOHJlbSk7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDM1MG1zIGN1YmljLWJlemllcigwLCAyLjQ3LCAwLjM4LCAwLjkxKTtcXG59XFxuXFxuLm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogM3JlbTtcXG59XFxuXFxuLmltZy1zbGlkZXItZnJhbWUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJveC1zaGFkb3c6IDBweCA4cHggNTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4uaW1nLXNsaWRlci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcblxcdGxlZnQ6IDAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uc2xpZGVyLWludGVyZmFjZS1uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNsaWRlci1pbWFnZXMtb2YtY2F0cyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbi5zbGlkZXItaW1hZ2VzLW9mLWNhdHMuYWN0aXZlLWltYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIH1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVyZW07XFxuXFx0Ym94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNsYXRlIDEwMDBtcyBjdWJpYy1iZXppZXIoMCwgMi40NywgMC4zOCwgMC45MSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbn1cXG5idXR0b24uYWN0aXZlLXNsaWRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vbW9kdWxlcy9jb21wb25lbnRfaGVscGVycy9wcm9ncmVzc2l2ZWx5IGNvbGxhcHNpbmcgbWVudS90b2dnbGVDbGlja2VkRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVDYXRzIH0gZnJvbSAnLi9tb2R1bGVzL2NvbXBvbmVudF9oZWxwZXJzL2ltYWdlX3NsaWRlci9jYXRzJztcbmltcG9ydCBzbGlkZXJJbnRlcmZhY2VDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2NvbXBvbmVudF9oZWxwZXJzL2ltYWdlX3NsaWRlci9zbGlkZXJJbnRlcmZhY2VDb250YWluZXInO1xuaW1wb3J0IHNsaWRlckNvbnRyb2xsZXIsIHtzZXRBY3RpdmUsICBzbGlkZXJOYXZBZHZhbmNlUmVjdXJzaXZlfSBmcm9tICcuL21vZHVsZXMvY29tcG9uZW50X2hlbHBlcnMvaW1hZ2Vfc2xpZGVyL3NsaWRlckNvbnRyb2xsZXInO1xuXG5cbnRvZ2dsZS5pbml0KCcubmF2Lml0ZW0nKTtcblxuY3JlYXRlQ2F0cygpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2xpZGVySW50ZXJmYWNlQ29udGFpbmVyKCkpO1xuXG5cbnNsaWRlckNvbnRyb2xsZXIoKTtcbnNldEFjdGl2ZSgwKVxuc2xpZGVyTmF2QWR2YW5jZVJlY3Vyc2l2ZSgpXG5cblxuLyogXG5cbkkgaGF2ZSBhIGN1cnJlbnRseSB3b3JraW5nIGltYWdlIHNsaWRlciB0aGF0IEknbSB0cnlpbmcgdG8gYWRkIGEgcGF1c2UgZm9yIDUgc2Vjb25kcyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIGFkdmFuY2UgYnV0dG9uLlxuXG5TbyBoZXJlJ3MgdGhlIGlzc3VlLiBJIG5lZWQgdG8gcGF1c2UgdGhlIGFkdmFuY2Ugb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzbGlkZXJOYXZBZHZhbmNlKCkgb24gYSBjbGljayBpbiB0aGUgc2xpZGVyIG5hdiBjb250YWluZXIuIFxuXG5DdXJyZW50bHkgdGhlIHNsaWRlciBhZHZhbmNlcyBldmVyeSAxIHNlY29uZCwgZXZlbiBpZiBJIGNsaWNrIG9uIHRoZSBzbGlkZXIgbmF2IGNvbnRhaW5lci5cblxuTXkgZGlsbGVtYTogSSBuZWVkIHRvIGJlIGFibGUgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgcGF1c2VSZWN1cnNpdmVTbGlkZXIgdmFyaWFibGUgZnJvbSB0aGUgc2xpZGVyQ29udHJvbGxlciBmdW5jdGlvbiB0byB0aGUgc2xpZGVyTmF2QWR2YW5jZVJlY3Vyc2l2ZSBmdW5jdGlvbiBldmVyeSB0aW1lIHRoZXJlJ3MgYSBjbGljayBldmVudCBvbiB0aGUgc2xpZGVyIG5hdiBjb250YWluZXIuICBcblxuSSBjYW4ndCBnZXQgdGhlIHZhbHVlIG9mIHRoZSBwYXVzZSB2YXJpYWJsZSB0byB0aGUgc2xpZGVyTmF2QWR2YW5jZVJlY3Vyc2l2ZSBmdW5jdGlvbi4gIEkgZGVjbGFyZWQgdGhlIHBhdXNlIHZhcmlhYmxlIGluIHRoZSBtb2R1bGUgc2NvcGUsIEkga25vdyBJIGNhbid0IGV4cG9ydCBhIG5vbiBjb25zdCB2YXJpYWJsZSB0byBhbm90aGVyIG1vZHVsZSBhcyB0aGF0IHdvdWxkIG5vdCBnZXQgdXBkYXRlZCBhZnRlciB0aGUgaW5pdGFsIGltcG9ydCBpbnRvIHRoZSBvdGhlciBtb2R1bGUuIEkndmUgdHJpZWQgbnVtZXJvdXMgdGhpbmdzIHRvIG92ZXJjb21lIHRoaXMgc2hvcnQgb2YgbG9va2luZyB1cCBhIHNvbHV0aW9uIHRoYXQgaW1wbGVtZW50cyBpdC4uLiBcblxuSGVyZSBpcyBteSByZXBvL2JyYW5jaCB0aGF0IGlzIHVwIHRvIGRhdGUsIGFuZCBJIGNhbiBzaGFyZSBteSBzY3JlZW4gYW5kIHRhbGsgdGhyb3VnaCB0aGlzIHdpdGggYW55b25lIHdobyBjYW4gbGVuZCBhIGhhbmQuICBJJ3ZlIGJlZW4gYXQgdGhpcyBpc3N1ZSBmb3Igc2V2ZXJhbCBob3VycyBhbmQgaXQncyBhIGZvdW5kYXRpb25hbCB0aGluZyB0aGF0IEknbSBtaXNzaW5nLiBcblxuaHR0cHM6Ly9naXRodWIuY29tL0p1c3RXYXZlVGhpbmdzL0R5bmFtaWMtVXNlci1JbnRlcmZhY2UtSW50ZXJhY3Rpb25zL3RyZWUvZmVhdHVyZV9wYXVzZV9hZHZhbmNlX29uX25hdl9jbGljayBcbiovIiwiaW1wb3J0IGNhdDEgZnJvbSAnLi9pbWFnZXNfZm9yX3NsaWRlci8xLmpwZyc7XG5pbXBvcnQgY2F0MiBmcm9tICcuL2ltYWdlc19mb3Jfc2xpZGVyLzIuanBnJztcbmltcG9ydCBjYXQzIGZyb20gJy4vaW1hZ2VzX2Zvcl9zbGlkZXIvMy5qcGcnO1xuaW1wb3J0IGNhdDQgZnJvbSAnLi9pbWFnZXNfZm9yX3NsaWRlci80LmpwZyc7XG5pbXBvcnQgY2F0NSBmcm9tICcuL2ltYWdlc19mb3Jfc2xpZGVyLzUuanBnJztcbmltcG9ydCBjYXQ2IGZyb20gJy4vaW1hZ2VzX2Zvcl9zbGlkZXIvNi5qcGcnO1xuaW1wb3J0IGNhdDcgZnJvbSAnLi9pbWFnZXNfZm9yX3NsaWRlci83LmpwZyc7XG5pbXBvcnQgY2F0OCBmcm9tICcuL2ltYWdlc19mb3Jfc2xpZGVyLzguanBnJztcbmltcG9ydCB7IGFwcGVuZEltYWdlLCBjcmVhdGVJbWFnZSB9IGZyb20gJy4vY3JlYXRlSW1hZ2UnO1xuXG5leHBvcnQgY29uc3QgY2F0cyA9IFtjYXQxLCBjYXQyLCBjYXQzLCBjYXQ0LCBjYXQ1LCBjYXQ2LCBjYXQ3LCBjYXQ4XTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhdHMgPSAoKSA9PiB7XG5cdGNhdHMuZm9yRWFjaCgoY2F0LCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IGNhdEltYWdlID0gY3JlYXRlSW1hZ2UoY2F0LCAnaW1hZ2Ugb2YgY2F0Jyk7XG5cdFx0Y2F0SW1hZ2UuZGF0YXNldC5pbWFnZUluZGV4ID0gaW5kZXg7XG5cdFx0Y2F0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWltYWdlcy1vZi1jYXRzJylcblx0XHRhcHBlbmRJbWFnZShjYXRJbWFnZSk7XG5cdH0pO1xufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYywgYWx0LCAgd2lkdGggPSAnNjAwJywgaGVpZ2h0ID0gJzQwMCcsICkge1xuXHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0aW1nLnNyYyA9IHNyYztcblx0aW1nLmFsdCA9IGFsdDtcblx0aW1nLndpZHRoID0gd2lkdGg7XG5cdGltZy5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0cmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gYXBwZW5kSW1hZ2UoaW1hZ2UsIGNvbnRhaW5lciA9ICcuaW1nLXNsaWRlci1jb250YWluZXInKSB7XG5cdGNvbnN0IG15Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuXHRteUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUltYWdlLCBhcHBlbmRJbWFnZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBzbGlkZXJJbnRlcmZhY2VDb250YWluZXIgZnJvbSAnLi9zbGlkZXJJbnRlcmZhY2VDb250YWluZXInO1xuXG4vKiBcbiAxLiB0aGlzIG5lZWRzIHRvIGFzc2lnbiBldmVudCBsaXN0ZW5lcnMgdXNpbmcgZXZlbnQgZGVsZWdhdGlvbiBmb3IgdGhlIHNsaWRlciBpbnRlcmZhY2UgY29udGFpbmVyIGJ1dHRvbnMgYW5kIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MuIFdlIG5lZWQgdG8gdXNlIHRoZSBkYXRhLWF0dHJpYnV0ZXMgSSBhc3NpZ25lZCB0byB0aGUgYnV0dG9ucyBhbmQgaW1hZ2VzLiAtLSBkb25lXG5cbiAyLiB0aGlzIG5lZWRzIHRvIGJlIGFibGUgdG8gdXBkYXRlIHRoZSBzbGlkZXIgaW50ZXJmYWNlIGNvbnRhaW5lciBidXR0b25zIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgaW1hZ2UgYmVpbmcgZGlzcGxheWVkIGJ5IHB1dHRpbmcgYSBjbGFzcyBvbiB0aGUgYnV0dG9uIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBpbWFnZSBiZWluZyBkaXNwbGF5ZWQuICAtLSBkb25lIFxuICBcbiAyLjEgSSB3aWxsIHB1dCBhbiAnYWN0aXZlJyBvbiBib3RoIHRoZSBidXR0b24gYW5kIHRoZSBpbWFnZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYW5kIHN0eWxlIHRoZW0gc2VwYXJhdGVseSBpbiBjc3MuIFRoaXMgc2hvdWxkIHVwZGF0ZSBlaXRoZXIgYnkgYSBjbGljayBvbiBhIGJ1dHRvbiBpbiB0aGUgc2xpZGVyIG5hdiAgIC0tIGRvbmVcblxuIDIuMiBtYWtlIHRoZSBhcnJvd3Mgd29yayB0byBhZHZhbmNlIC0gcmV3aW5kICAgZG9uZSBcbiBcbiAyLjMgb3IgYnkgdGhlIHRpbWluZyBmdW5jdGlvbiB0aGF0IG1vdmVzIHRoZSBzbGlkZXIgZm9yd2FyZCBldmVyeSA1IHNlY29uZHMgICAgIFxuXG4gMy4gbmVlZCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZW1vdmUgYSBjbGFzcyBmcm9tIHRoZSBhY3RpdmUgYnV0dG9uIGFuZCBpbWFnZSBhbmQgYWRkIGl0IHRvIHRoZSBuZXh0IGJ1dHRvbiBhbmQgaW1hZ2UgZXZlcnkgNSBzZWNvbmRzIGlmIG5vIG90aGVyIGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSBsYXN0IDUgc2Vjb25kcy4gIHRoaXMgZnVuY3Rpb24gd2lsbCBhbHNvIG5lZWQgdG8gbG9vcCBiYWNrIHRvIHRoZSBmaXJzdCBpbWFnZSBhbmQgYnV0dG9uIGlmIGl0IGlzIG9uIHRoZSBsYXN0IGltYWdlIGFuZCBidXR0b24uIGlmIGEgYnV0dG9uIGlzIGNsaWNrZWQsIHRoZSB0aW1lciBzaG91bGQgcmVzZXQgdG8gNSBzZWNvbmRzLiBpZiB0aGUgbGVmdCBvciByaWdodCBhcnJvdyBpcyBjbGlja2VkLCB0aGUgdGltZXIgc2hvdWxkIHJlc2V0IHRvIDUgc2Vjb25kcy4gXG4gXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlKGluZGV4KSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcubmF2LXNsaWRlci1wb3NpdGlvbi1pbmRpY2F0b3ItYnV0dG9ucydcbiAgKTtcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1pbWFnZXMtb2YtY2F0cycpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2xpZGVyJyk7XG4gIH0pO1xuICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtaW1hZ2UnKTtcbiAgfSk7XG4gIGJ1dHRvbnNbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1zbGlkZXInKTtcbiAgaW1hZ2VzW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtaW1hZ2UnKTtcbn1cblxuZnVuY3Rpb24gbmF2QXJyb3dBY3Rpb24oYXJyb3cpIHtcbiAgY29uc3QgY2F0TGlzdExlbmd0aCA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1pbWFnZXMtb2YtY2F0cycpLmxlbmd0aCAtIDE7XG5cbiAgbGV0IGN1cnJlbnRBY3RpdmVJbmRleCA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1zbGlkZXInKS5kYXRhc2V0Lm5hdkluZGV4O1xuXG4gIGlmIChhcnJvdyA9PT0gJ3NsaWRlci1yZXZlcnNlJykge1xuICAgIGlmIChjdXJyZW50QWN0aXZlSW5kZXggPT09ICcwJykge1xuICAgICAgc2V0QWN0aXZlKGNhdExpc3RMZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBY3RpdmUoY3VycmVudEFjdGl2ZUluZGV4IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFycm93ID09PSAnc2xpZGVyLWZvcndhcmQnKSB7XG4gICAgaWYgKCtjdXJyZW50QWN0aXZlSW5kZXggPT09IGNhdExpc3RMZW5ndGgpIHtcbiAgICAgIHNldEFjdGl2ZSgnMCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBY3RpdmUoKytjdXJyZW50QWN0aXZlSW5kZXgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gc2xpZGVyQ29udHJvbGxlcigpIHtcbiAgLy8gZ3JhYiB0aGUgc2xpZGVyIGludGVyZmFjZSBjb250YWluZXJcbiAgY29uc3Qgc2xpZGVyTmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1pbnRlcmZhY2UtbmF2Jyk7XG5cbiAgLy8gZXZlbnQgZGVsZWdhdGlvbiB0byBoYW5kbGUgZWl0aGVyIGEgY2xpY2sgb24gdGhlIHNsaWRlciBuYXYgYnV0dG9uIG9yIGFuIGFycm93XG4gIHNsaWRlck5hdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC5kYXRhc2V0Lm5hdkluZGV4KSB7XG4gICAgICBjb25zdCBhcnJvdyA9IGUudGFyZ2V0LmRhdGFzZXQubmF2QXJyb3c7XG4gICAgICBuYXZBcnJvd0FjdGlvbihhcnJvdyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm5hdkluZGV4O1xuICAgIHNldEFjdGl2ZShpbmRleCk7XG4gIH0pO1xufVxuXG4vLyBob3cgdG8gcGFzcyBwYXVzZVJlY3Vyc2l2ZVNsaWRlciB0byB0aGUgcmVjdXJzaXZlIGZ1bmN0aW9uIGZyb20gc2xpZGVyQ29udHJvbGxlcj9cblxubGV0IHBhdXNlUmVjdXJzaXZlU2xpZGVyID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBzbGlkZXJOYXZBZHZhbmNlUmVjdXJzaXZlKCkge1xuICAgLy8gZ29pbmcgdG8gdHJ5IHRvIGp1c3QgbWFrZSBhbm90aGVyIGV2ZW50IGxpc3RlbmVyIHdpdGhpbiB0aGlzIGZ1bmN0aW9uIGFuZCBkbyBpdCBhbGwgaW4gaGVyZS4uLiBpdCdzIG5vdCB0aGUgcmlnaHQgd2F5IGJ1dCBpdCdzIGEgcGF0aCB0byByZXNvbHV0aW9uLiBcbiAgXG4gICBcbiAgIGNvbnN0IHBhdXNlQ2xpY2tMaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItaW50ZXJmYWNlLW5hdicpXG4gICBwYXVzZUNsaWNrTGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cGF1c2VSZWN1cnNpdmVTbGlkZXIgPSB0cnVlfSk7XG5cbiAgY29uc3QgY2F0TGlzdExlbmd0aCA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1pbWFnZXMtb2YtY2F0cycpLmxlbmd0aCAtIDE7XG4gIGxldCBjdXJyZW50QWN0aXZlSW5kZXggPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtc2xpZGVyJykuZGF0YXNldC5uYXZJbmRleDtcbiAgLy8gY29uc29sZS5sb2coY3VycmVudEFjdGl2ZUluZGV4KTtcbiAgaWYgKCtjdXJyZW50QWN0aXZlSW5kZXggPT09IGNhdExpc3RMZW5ndGgpIHtcbiAgICBjdXJyZW50QWN0aXZlSW5kZXggPSAtMTtcbiAgfVxuICBjdXJyZW50QWN0aXZlSW5kZXgrKztcbiAgc2V0QWN0aXZlKGN1cnJlbnRBY3RpdmVJbmRleCk7XG5cbiAgaWYgKHBhdXNlUmVjdXJzaXZlU2xpZGVyKSB7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzbGlkZXJOYXZBZHZhbmNlUmVjdXJzaXZlKGZhbHNlKTtcbiAgICB9LCA1MDAwKTtcbiAgfSBlbHNlIHtcbiAgIFxuICAgIHNldFRpbWVvdXQoc2xpZGVyTmF2QWR2YW5jZVJlY3Vyc2l2ZSwgNTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyQ29udHJvbGxlcjtcblxuLy8gdGhpcyB2ZXJzaW9uIGFzIG9mIDMgLyAxMyAvIDIzIHRoZSBhdXRvYWR2YW5jZSBhbmQgdGhlIG5hdiBmb3J3YXJkIGJhY2sgYnV0dG9ucyB3b3JrLi4uXG4iLCJpbXBvcnQgeyBjYXRzIH0gZnJvbSAnLi9jYXRzJztcblxuZnVuY3Rpb24gc2xpZGVySW50ZXJmYWNlQ29udGFpbmVyKCkge1xuXHRjb25zdCBzbGlkZXJJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblx0c2xpZGVySW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1pbnRlcmZhY2UtbmF2Jyk7XG5cblx0Y29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGxlZnRBcnJvdy5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFycm93Jyk7XG5cdGxlZnRBcnJvdy5kYXRhc2V0Lm5hdkFycm93ID0gJ3NsaWRlci1yZXZlcnNlJztcblx0bGVmdEFycm93LnRleHRDb250ZW50ID0gJzwnOy8vIHJlcGxhY2Ugd2l0aCBpbWFnZSBcblxuXHRjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZCgncmlnaHQtYXJyb3cnKTtcblx0cmlnaHRBcnJvdy5kYXRhc2V0Lm5hdkFycm93ID0gJ3NsaWRlci1mb3J3YXJkJztcblx0cmlnaHRBcnJvdy50ZXh0Q29udGVudCA9ICc+JzsgLy8gcmVwbGFjZSB3aXRoIGltYWdlIFxuXG5cdHNsaWRlckludGVyZmFjZS5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuXG5cdGNhdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcblx0XHRjb25zdCBpbWFnZUluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0aW1hZ2VJbmRleC5kYXRhc2V0Lm5hdkluZGV4ID0gaW5kZXg7XG5cdFx0aW1hZ2VJbmRleC5jbGFzc0xpc3QuYWRkKCduYXYtc2xpZGVyLXBvc2l0aW9uLWluZGljYXRvci1idXR0b25zJylcblx0XHRpbWFnZUluZGV4LnRleHRDb250ZW50ID0gJyc7IC8vIHJlcGxhY2Ugd2l0aCBpbWFnZVxuXHRcdHNsaWRlckludGVyZmFjZS5hcHBlbmRDaGlsZChpbWFnZUluZGV4KTtcblx0fSk7XG5cblx0c2xpZGVySW50ZXJmYWNlLmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xuXG5cdHJldHVybiBzbGlkZXJJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlckludGVyZmFjZUNvbnRhaW5lcjtcbiIsIi8vIGZvciBhZGRpbmcgYW5kIHJlbW92aW5nIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgbWVudSBkcm9wZG93biBpbiBodG1sLiAgT24gY2xpY2ssIHRoZSBtZW51IGRyb3Bkb3duIHdpbGwgdG9nZ2xlIGNsYXNzIGJldHdlZW4gaGF2aW5nIGFuICdhY3RpdmUnIGNsYXNzIGFuZCByZW1vdmluZyB0aGUgJ2FjdGl2ZScgY2xhc3MuXG5cbmNvbnN0IFRvZ2dsZUNsaWNrZWRFbGVtZW50ID0gKCgpID0+IHtcblx0bGV0IHRhcmdldEVsZW1lbnQ7XG5cblx0Y29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tQWxsRWxlbWVudHMgPSAoKSA9PiB7XG5cdFx0dGFyZ2V0RWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNsaWNrT3V0c2lkZUVsZW1lbnQgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IG5hdkl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2Lml0ZW0nKTtcblx0XHRpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5uYXYtdGV4dCcpKSB7XG5cdFx0XHRyZW1vdmVBY3RpdmVDbGFzc0Zyb21BbGxFbGVtZW50cygpO1xuXHRcdH0gZWxzZSBpZiAobmF2SXRlbSAmJiBuYXZJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGV4dCcpKSB7XG5cdFx0XHRuYXZJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjbG9zZU1lbnVXaGVuQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlRWxlbWVudCk7XG5cdH07XG5cblx0Y29uc3QgYWRkQWN0aXZlQ2xhc3NUb1NpbmdsZUVsZW1lbnQgPSAoZSkgPT4ge1xuXHRcdGNsb3NlTWVudVdoZW5DbGlja091dHNpZGUoKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGluaXQ6ICh0YXJnZXRTZWxlY3RvcikgPT4ge1xuXHRcdFx0dGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0U2VsZWN0b3IpO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdGFkZEFjdGl2ZUNsYXNzVG9TaW5nbGVFbGVtZW50XG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRlc3Ryb3k6ICgpID0+IHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRhZGRBY3RpdmVDbGFzc1RvU2luZ2xlRWxlbWVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlRWxlbWVudCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQ2xpY2tlZEVsZW1lbnQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=