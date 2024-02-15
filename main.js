/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/utils/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/utils/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/comfortaa/Comfortaa-Regular.ttf */ "./src/fonts/comfortaa/Comfortaa-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Bucket-cropped.png */ "./src/images/Bucket-cropped.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* body - The main body for the application. */
body{
    padding: 0;
    margin: 0;
}

/* * - All elements for the application. */
*{
    box-sizing: border-box;
}

/* font-0 - Comfortaa font */
@font-face {
    font-family: comfortaa;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Mobile & Desktop Minimization */
#mobile-minimization{
    display: none;
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Main Content| */
#content{
    /* border: 1px solid red; */
    margin: 0 auto;
    width: 1000px;
    padding: 10px;
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Main Title| */
.main-title-container{
    /* border: 1px solid black; */
    text-align: center;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    letter-spacing: 3px;
    font-size: 25px;
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Input Fields| */

/* input-fields - The parent container for all the input fields. */
.input-fields{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    /* border: 1px solid orange; */
    margin-top: 50px;
}

/* Set Form */
.set-form{
    /* border: 1px solid blue; */
    text-align: center;
    padding: 10px; 
    
}
.set-form > div:nth-child(1) > label{
    display: block;
    font-size: 18px;
    font-weight: bold; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #18181b;
}
.set-form > div:nth-child(1) > input{
    border-radius: 10px;
    border: 1px solid #94a3b8;
    padding: 5px 10px 5px 10px;
    font-size: 15px;
}
.set-form > div:nth-child(2) > button{
    margin-top: 5px;
    border: 1px solid #94a3b8;
    border-radius: 10px; 
    padding: 5px 10px 5px 10px; 
    font-size: 15px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #18181b;
    font-weight: bold; 
}
.set-form > div:nth-child(2) > button:hover{
    cursor: pointer; 
    background-color: #f87171;
    border: 1px solid #f87171; 
}
.set-form > div:nth-child(2) > button:focus{
    border-color: #f87171;
    outline: none;
}
.set-form > div:nth-child(1) > input:focus{
    border-color: #0d9488;
    outline: none;
}

/* Get Form */
.get-form{
    /* border: 1px solid purple;  */
    text-align: center;
    padding: 10px;
}
.get-form > div:nth-child(1) > label{
    display: block;
    font-size: 18px;
    font-weight: bold; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #18181b;
}
.get-form > div:nth-child(1) > input{
    border-radius: 10px;
    border: 1px solid #94a3b8;
    padding: 5px 10px 5px 10px;
    font-size: 15px;
}
.get-form > div:nth-child(2) > button{
    margin-top: 5px;
    border: 1px solid #94a3b8;
    border-radius: 10px; 
    padding: 5px 10px 5px 10px; 
    font-size: 15px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #18181b;
    font-weight: bold; 
}
.get-form > div:nth-child(2) > button:hover{
    cursor: pointer; 
    background-color: #f87171;
    border: 1px solid #f87171;
}
.get-form > div:nth-child(2) > button:focus{
    border-color: #f87171;
    outline: none; 
}
.get-form > div:nth-child(1) > input:focus{
    border-color: #0d9488;
    outline: none;
}

/* Remove Form */
.remove-form{
    /* border: 1px solid lightcoral; */
    text-align: center;
    padding: 10px; 
}
.remove-form > div:nth-child(1) > label{
    display: block; 
    font-size: 18px;
    font-weight: bold; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #18181b;
}
.remove-form > div:nth-child(1) > input{
    border-radius: 10px;
    border: 1px solid #94a3b8;
    padding: 5px 10px 5px 10px;
    font-size: 15px;
}
.remove-form > div:nth-child(2) > button{
    margin-top: 5px;
    border: 1px solid #94a3b8;
    border-radius: 10px; 
    padding: 5px 10px 5px 10px; 
    font-size: 15px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #18181b;
    font-weight: bold; 
}
.remove-form > div:nth-child(2) > button:hover{
    cursor: pointer;
    background-color:#f87171;
    border: 1px solid #f87171;
}
.remove-form > div:nth-child(2) > button:focus{
    border-color: #f87171;
    outline: none;
}
.remove-form > div:nth-child(1) > input:focus{
    border-color: #0d9488;
    outline: none; 
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Buckets Field| */
/* buckets-field - The buckets field container. */
.bucket-field{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    
    margin-top: 50px;
    /* border: 1px solid green; */
    text-align: center; 
}

/* Each bucket */
.bucket-field > div{
    width: 150px;
    height: 150px;
    /* border: 1px solid black;  */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 100% 100%;
}

.bucket-field > div > div{ /* Bucket index and value */
    color: red;
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
}


/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Data Fields| */
.data-field{
    display: flex;
    justify-content: center;
    gap: 10px; 

    /* border: 1px solid yellow; */
    margin-top: 50px;
}
.data-field > div{ /* Data Containers */
    border: 1px solid #94a3b8;
    padding: 10px; 
    border-radius: 10px;
}
.data-field > div > div:nth-child(1){ /* Data Title */
    text-decoration: underline;
    font-weight: bold;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 15px; 
}
.data-field > div > div:nth-child(2){ /* Data Value */
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 15px;
}

/* Keys Data */
.keys-data > div:nth-child(2){
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* Values Data */
.values-data > div:nth-child(2){
    display: flex;
    flex-wrap: flex;
    gap: 10px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* Entries Data */
.entries-data > div:nth-child(2){
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Button Field| */
.button-field{
    display: flex;
    justify-content: center;
    gap: 15px;

    /* border: 1px solid lightblue; */
    margin-top: 50px;
}
.button-field > button{ 
    font-size: 15px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    border-radius: 10px; 
    border: 1px solid #94a3b8;
    cursor: pointer;
    padding: 5px 10px 5px 10px;
}
.button-field > button:hover{
    background-color: #f87171;
    border: 1px solid #f87171;
}
.button-field > button:focus{
    border: 1px solid #0d9488;
    outline: none;  
}


/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Mobile Section| */
/* Media-0 - Will display that mobile and desktop minimization doesn't exist. */
@media only screen and (max-width: 1019px){
    body{
        background: linear-gradient(to left, #6441A5, #2a0845);
    }

    #content{
        display: none; 
    }
    
    #mobile-minimization{
        display: block;
        text-align: center; 
        font-size: 20px; 
        font-weight: bold;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white; 
        margin-top: 30px;
    }
}`, "",{"version":3,"sources":["webpack://./src/utils/style.css"],"names":[],"mappings":"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","sourcesContent":["/* body - The main body for the application. */\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n/* * - All elements for the application. */\n*{\n    box-sizing: border-box;\n}\n\n/* font-0 - Comfortaa font */\n@font-face {\n    font-family: comfortaa;\n    src: url(../fonts/comfortaa/Comfortaa-Regular.ttf);\n}\n\n/* Mobile & Desktop Minimization */\n#mobile-minimization{\n    display: none;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content| */\n#content{\n    /* border: 1px solid red; */\n    margin: 0 auto;\n    width: 1000px;\n    padding: 10px;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Title| */\n.main-title-container{\n    /* border: 1px solid black; */\n    text-align: center;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    letter-spacing: 3px;\n    font-size: 25px;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Input Fields| */\n\n/* input-fields - The parent container for all the input fields. */\n.input-fields{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    \n    /* border: 1px solid orange; */\n    margin-top: 50px;\n}\n\n/* Set Form */\n.set-form{\n    /* border: 1px solid blue; */\n    text-align: center;\n    padding: 10px; \n    \n}\n.set-form > div:nth-child(1) > label{\n    display: block;\n    font-size: 18px;\n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n}\n.set-form > div:nth-child(1) > input{\n    border-radius: 10px;\n    border: 1px solid #94a3b8;\n    padding: 5px 10px 5px 10px;\n    font-size: 15px;\n}\n.set-form > div:nth-child(2) > button{\n    margin-top: 5px;\n    border: 1px solid #94a3b8;\n    border-radius: 10px; \n    padding: 5px 10px 5px 10px; \n    font-size: 15px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n    font-weight: bold; \n}\n.set-form > div:nth-child(2) > button:hover{\n    cursor: pointer; \n    background-color: #f87171;\n    border: 1px solid #f87171; \n}\n.set-form > div:nth-child(2) > button:focus{\n    border-color: #f87171;\n    outline: none;\n}\n.set-form > div:nth-child(1) > input:focus{\n    border-color: #0d9488;\n    outline: none;\n}\n\n/* Get Form */\n.get-form{\n    /* border: 1px solid purple;  */\n    text-align: center;\n    padding: 10px;\n}\n.get-form > div:nth-child(1) > label{\n    display: block;\n    font-size: 18px;\n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n}\n.get-form > div:nth-child(1) > input{\n    border-radius: 10px;\n    border: 1px solid #94a3b8;\n    padding: 5px 10px 5px 10px;\n    font-size: 15px;\n}\n.get-form > div:nth-child(2) > button{\n    margin-top: 5px;\n    border: 1px solid #94a3b8;\n    border-radius: 10px; \n    padding: 5px 10px 5px 10px; \n    font-size: 15px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n    font-weight: bold; \n}\n.get-form > div:nth-child(2) > button:hover{\n    cursor: pointer; \n    background-color: #f87171;\n    border: 1px solid #f87171;\n}\n.get-form > div:nth-child(2) > button:focus{\n    border-color: #f87171;\n    outline: none; \n}\n.get-form > div:nth-child(1) > input:focus{\n    border-color: #0d9488;\n    outline: none;\n}\n\n/* Remove Form */\n.remove-form{\n    /* border: 1px solid lightcoral; */\n    text-align: center;\n    padding: 10px; \n}\n.remove-form > div:nth-child(1) > label{\n    display: block; \n    font-size: 18px;\n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n}\n.remove-form > div:nth-child(1) > input{\n    border-radius: 10px;\n    border: 1px solid #94a3b8;\n    padding: 5px 10px 5px 10px;\n    font-size: 15px;\n}\n.remove-form > div:nth-child(2) > button{\n    margin-top: 5px;\n    border: 1px solid #94a3b8;\n    border-radius: 10px; \n    padding: 5px 10px 5px 10px; \n    font-size: 15px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n    font-weight: bold; \n}\n.remove-form > div:nth-child(2) > button:hover{\n    cursor: pointer;\n    background-color:#f87171;\n    border: 1px solid #f87171;\n}\n.remove-form > div:nth-child(2) > button:focus{\n    border-color: #f87171;\n    outline: none;\n}\n.remove-form > div:nth-child(1) > input:focus{\n    border-color: #0d9488;\n    outline: none; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Buckets Field| */\n/* buckets-field - The buckets field container. */\n.bucket-field{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    \n    margin-top: 50px;\n    /* border: 1px solid green; */\n    text-align: center; \n}\n\n/* Each bucket */\n.bucket-field > div{\n    width: 150px;\n    height: 150px;\n    /* border: 1px solid black;  */\n    background-image: url('../images/Bucket-cropped.png');\n    background-size: 100% 100%;\n}\n\n.bucket-field > div > div{ /* Bucket index and value */\n    color: red;\n    margin-top: 5px;\n    font-weight: bold;\n    font-size: 18px;\n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Data Fields| */\n.data-field{\n    display: flex;\n    justify-content: center;\n    gap: 10px; \n\n    /* border: 1px solid yellow; */\n    margin-top: 50px;\n}\n.data-field > div{ /* Data Containers */\n    border: 1px solid #94a3b8;\n    padding: 10px; \n    border-radius: 10px;\n}\n.data-field > div > div:nth-child(1){ /* Data Title */\n    text-decoration: underline;\n    font-weight: bold;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 15px; \n}\n.data-field > div > div:nth-child(2){ /* Data Value */\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 15px;\n}\n\n/* Keys Data */\n.keys-data > div:nth-child(2){\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* Values Data */\n.values-data > div:nth-child(2){\n    display: flex;\n    flex-wrap: flex;\n    gap: 10px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* Entries Data */\n.entries-data > div:nth-child(2){\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Button Field| */\n.button-field{\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n\n    /* border: 1px solid lightblue; */\n    margin-top: 50px;\n}\n.button-field > button{ \n    font-size: 15px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    border-radius: 10px; \n    border: 1px solid #94a3b8;\n    cursor: pointer;\n    padding: 5px 10px 5px 10px;\n}\n.button-field > button:hover{\n    background-color: #f87171;\n    border: 1px solid #f87171;\n}\n.button-field > button:focus{\n    border: 1px solid #0d9488;\n    outline: none;  \n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Mobile Section| */\n/* Media-0 - Will display that mobile and desktop minimization doesn't exist. */\n@media only screen and (max-width: 1019px){\n    body{\n        background: linear-gradient(to left, #6441A5, #2a0845);\n    }\n\n    #content{\n        display: none; \n    }\n    \n    #mobile-minimization{\n        display: block;\n        text-align: center; \n        font-size: 20px; \n        font-weight: bold;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white; \n        margin-top: 30px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/utils/style.css":
/*!*****************************!*\
  !*** ./src/utils/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/utils/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/DomContent.js":
/*!***********************************!*\
  !*** ./src/modules/DomContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateBuckets: () => (/* binding */ CreateBuckets),
/* harmony export */   InitializeDomContent: () => (/* binding */ InitializeDomContent),
/* harmony export */   PlaceInBucket: () => (/* binding */ PlaceInBucket)
/* harmony export */ });
/* harmony import */ var _HashMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HashMap */ "./src/modules/HashMap.js");
/* harmony import */ var _utils_Buckets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Buckets */ "./src/utils/Buckets.js");



// IntializeDomContent(): Will initialize all dom content into the application.
function InitializeDomContent(){
    NodeReferences();
}

// NodeReferences(): All node values.
function NodeReferences(){
    CreateMainTitle();

    CreateInputFields();

    CreateButtonField();

    CreateDataField();
    
    CreateBucketField();
    
    CreateBuckets();

    PlaceInBucket(); 
}

// CreateDataField(): The data field will display all the data output data from the bucket field. 
function CreateDataField(){
    const dataField = document.createElement('div');
    dataField.classList.add('data-field');

    const content = document.getElementById('content'); 
    content.appendChild(dataField);

    DisplayGetData(null); 

    DisplayDataExist(null);

    DisplayRemovedData(null);
}

// DisplayRemovedKey(): 
function DisplayRemovedData(valueRemoved){
    const removeDataContainer = document.createElement('div');

    const removeDataTitle = document.createElement('div'); 
    const removeDataValue = document.createElement('div');

    const dataField = document.querySelector('.data-field');

    removeDataTitle.textContent = "Data Removed";
    if (valueRemoved === null)
    {
        removeDataValue.textContent = 'N/A'; 
    }
    else 
    {
        removeDataValue.textContent = `${valueRemoved}`;
    }

    removeDataContainer.appendChild(removeDataTitle);
    removeDataContainer.appendChild(removeDataValue); 

    dataField.appendChild(removeDataContainer); 
}

// DisplayGetData():
function DisplayGetData(value){
    const getDataContainer = document.createElement('div');
    
    const getDataTitle = document.createElement('div');
    const getDataValue = document.createElement('div');

    const dataField = document.querySelector('.data-field');

    getDataTitle.textContent = "Hash Value";
    if (value === null)
    {
        getDataValue.textContent = 'N/A'; 
    }
    else
    {
        getDataValue.textContent = `${value}`;
    }

    getDataContainer.appendChild(getDataTitle);
    getDataContainer.appendChild(getDataValue); 

    
    dataField.appendChild(getDataContainer); 
}

// DisplayDataExist():
function DisplayDataExist(hasData){
    const dataExist = document.createElement('div'); 

    const dataExistTitle = document.createElement('div'); 
    const dataExistValue = document.createElement('div');

    const dataField = document.querySelector('.data-field');

    dataExistTitle.textContent = "Data Exist";
    if (hasData === null)
    {
        dataExistValue.textContent = 'N/A';
    }
    else if (hasData)
    {
        dataExistValue.textContent = `${hasData}`; 
    }
    else if (!hasData)
    {
        dataExistValue.textContent = `${hasData}`; 
    }

    dataExist.appendChild(dataExistTitle);
    dataExist.appendChild(dataExistValue);

    dataField.appendChild(dataExist); 
}

// CreateMainTitle(): Creates the main title logo.
function CreateMainTitle(){
    const content = document.getElementById('content');

    const mainTitleContainer = document.createElement('div');
    mainTitleContainer.classList.add('main-title-container'); 
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'HashMap Table';
    mainTitleContainer.appendChild(mainTitle);

    content.appendChild(mainTitleContainer); 
}

// CreateInputField(): Creates the input field for the user to enter strings. 
function CreateInputFields(){
    const inputFields = document.createElement('div'); 
    inputFields.classList.add('input-fields'); 

    const content = document.getElementById('content');

    content.appendChild(inputFields); 

    CreateSetField();
    SetButton();

    CreateGetField(); 
    GetButton(); 

    CreateRemoveField();
    RemoveButton(); 
}

// CreateSetField(): Data can be entered into buckets using this field. 
function CreateSetField(){
    const inputFields = document.querySelector('.input-fields'); 

    const setForm = document.createElement('form'); 
    setForm.classList.add('set-form'); 

    const formSectionOne = document.createElement('div');
    const formSectionTwo = document.createElement('div'); 

    const label = document.createElement('label'); 
    label.textContent = 'Enter First Names Here';
    label.setAttribute('for', 'name'); 

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    input.setAttribute('name', 'name');
    input.setAttribute('maxLength', `${30}`); 
    input.setAttribute('required', `${true}`); 

    formSectionOne.appendChild(label);
    formSectionOne.appendChild(input); 

    const submit = document.createElement('button');
    submit.textContent = 'Submit';

    formSectionTwo.appendChild(submit); 

    setForm.appendChild(formSectionOne); 
    setForm.appendChild(formSectionTwo);

    inputFields.appendChild(setForm);
}

// CreateGetField(): Creates the get field for the user gather data from the hash map table.
function CreateGetField(){
    const inputFields = document.querySelector('.input-fields'); 

    const getForm = document.createElement('form');
    getForm.classList.add('get-form'); 

    const getFormSectionOne = document.createElement('div');
    const getFormSectionTwo = document.createElement('div');

    const getLabel = document.createElement('label'); 
    getLabel.textContent = 'Enter Hash Key To Get Data From Table';
    getLabel.setAttribute('for', 'get-name');

    const get = document.createElement('input');
    get.setAttribute('type', 'number');
    get.setAttribute('id', 'get-name');
    get.setAttribute('name', 'getName'); 
    get.setAttribute('required', `${true}`); 

    getFormSectionOne.appendChild(getLabel);
    getFormSectionOne.appendChild(get); 

    const getSubmit = document.createElement('button');
    getSubmit.setAttribute('type', 'submit');
    getSubmit.textContent = 'Submit'; 

    getFormSectionTwo.appendChild(getSubmit);

    getForm.appendChild(getFormSectionOne); 
    getForm.appendChild(getFormSectionTwo); 

    inputFields.appendChild(getForm); 
}

// CreateRemoveField(): Can remove bucket data using this field. 
function CreateRemoveField(){
    const inputFields = document.querySelector('.input-fields'); 

    const removeForm = document.createElement('form');
    removeForm.classList.add('remove-form');

    const removeFormSectionOne = document.createElement('div');
    const removeFormSectionTwo = document.createElement('div'); 

    const removeLabel = document.createElement('label');
    removeLabel.setAttribute('for', 'remove-name');
    removeLabel.textContent = 'Enter Key To Remove It From Table';

    const removeInput = document.createElement('input'); 
    removeInput.setAttribute('type', 'number'); 
    removeInput.setAttribute('id', 'remove-name');
    removeInput.setAttribute('name', 'removeName');
    removeInput.setAttribute('required', `${true}`); 

    removeFormSectionOne.appendChild(removeLabel); 
    removeFormSectionOne.appendChild(removeInput);

    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'submit'); 
    removeButton.textContent = "Submit";

    removeFormSectionTwo.appendChild(removeButton);

    removeForm.appendChild(removeFormSectionOne); 
    removeForm.appendChild(removeFormSectionTwo); 

    inputFields.appendChild(removeForm); 
}

// RemoveButton(): 
function RemoveButton(){
    const removeSubmit = document.querySelector('.remove-form > div:nth-child(2) > button');

    removeSubmit.addEventListener('click', RemoveValue);
}

// RemoveValue():
function RemoveValue(e){
    e.preventDefault();

    const removeInput = document.querySelector('.remove-form > div:nth-child(1) > input');
    const bucketField = document.querySelector('.bucket-field'); 
    const removeForm = document.querySelector('.remove-form');
    const dataField = document.querySelector('.data-field'); 
    
    if (removeInput.validity.valueMissing)
    {
        removeInput.setCustomValidity("Please enter a numerical value first.");
        removeInput.reportValidity(); 
    }
    else
    {
        let number = Number(removeInput.value);

        removeForm.reset(); 

        const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43); 
    
        dataField.replaceChildren(); 
    
        DisplayRemovedData(HashMapObj.remove(number)); 
        bucketField.replaceChildren();
        CreateBuckets();
        PlaceInBucket();
    }
}

// GetButton(): Input field that will allow the user to get data from the hash map table.
function GetButton(){
    const getSubmit = document.querySelector('.get-form > div:nth-child(2) > button');

    getSubmit.addEventListener('click', GetValue); 
}

// GetKey(): Function will allow the user get the value by submitting the correct key. 
function GetValue(e){
    e.preventDefault(); 

    const dataField = document.querySelector('.data-field'); 
    const getInput = document.querySelector('.get-form > div:nth-child(1) > input');
    const getForm = document.querySelector('.get-form');

    if (getInput.validity.valueMissing)
    {
        getInput.setCustomValidity("Please enter a numerical value first.");
        getInput.reportValidity();
    }
    else
    {
        let number = Number(getInput.value);

        getForm.reset(); 

        const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43); 
    
        dataField.replaceChildren(); // Overall Parent replacing all child nodes. 
        DisplayGetData(HashMapObj.get(number)); // Note: May Need to reset at some point for new data. 
        DisplayDataExist(HashMapObj.has(number));
    }
}

// CreateButtonField(): Creates button field to output data. 
function CreateButtonField(){
    const content = document.getElementById('content');

    const buttonField = document.createElement('div');
    buttonField.classList.add('button-field');

    content.appendChild(buttonField);

    CreateLengthButton();
    LengthButton();

    CreateClearButton();
    ClearButton();

    CreateKeysButton();
    KeysButton(); 

    CreateValuesButton(); 
    ValuesButton(); 

    CreateEntriesButton();
    EntriesButton(); 
}

// CreateLengthButton(): Length button will output all the number of keys inside the hash map.
function CreateLengthButton(){
    const buttonField = document.querySelector('.button-field');

    const lengthButton = document.createElement('button'); 
    lengthButton.textContent = 'Length';

    buttonField.appendChild(lengthButton); 
}

// LengthButton(): User length button.
function LengthButton(){
    const lengthButton = document.querySelector('.button-field > button:nth-child(1)'); 

    lengthButton.addEventListener('click', DisplayLengthData);
}

// DisplayLengthData(): Displays the length data. 
function DisplayLengthData(){
    const dataField = document.querySelector('.data-field');

    const lengthData = document.createElement('div'); 
    const lengthDataTitle = document.createElement('div');
    const lengthDataValue = document.createElement('div');

    const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43);
    
    lengthDataTitle.textContent = 'Length'
    lengthDataValue.textContent = `${HashMapObj.length()}`;

    lengthData.appendChild(lengthDataTitle);
    lengthData.appendChild(lengthDataValue);

    dataField.replaceChildren(); 
    dataField.appendChild(lengthData); 
}

// CreateClearButton(): Creates a clear button that will remove all the entries in the hash map.
function CreateClearButton(){
    const buttonField = document.querySelector('.button-field');

    const clearButton = document.createElement('button'); 
    clearButton.textContent = 'Clear';

    buttonField.appendChild(clearButton);
}

// ClearButton(): User clear button. 
function ClearButton(){
    const clearButton = document.querySelector('.button-field > button:nth-child(2)'); 
    
    clearButton.addEventListener('click', ClearData);
}

// ClearData(): Clears all the key entries in the hash map.
function ClearData(){
    const bucketField = document.querySelector('.bucket-field');
    const dataField = document.querySelector('.data-field');

    const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43);

    HashMapObj.clear(); 
    bucketField.replaceChildren();
    dataField.replaceChildren();

    DisplayGetData(null);
    DisplayDataExist(null);
    DisplayRemovedData(null);

    CreateBuckets();
    PlaceInBucket();     
}

// CreateKeysButton(): Creates a keys button that will return an array containing all the keys on the hash table.
function CreateKeysButton(){
    const buttonField = document.querySelector('.button-field');

    const keysButton = document.createElement('button');
    keysButton.textContent = 'Keys';

    buttonField.appendChild(keysButton); 
}

// KeysButton(): User keys button.
function KeysButton(){
    const keysButton = document.querySelector('.button-field > button:nth-child(3)');
    
    keysButton.addEventListener('click', DisplayKeys);
}

// DisplayKeys(): Will the number of keys on the hash table.
function DisplayKeys(){
    const dataField = document.querySelector('.data-field');

    const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43);
    const keysOnHashTable = HashMapObj.keys();

    const keysData = document.createElement('div');
    keysData.classList.add('keys-data'); 

    const keysDataTitle = document.createElement('div');
    keysDataTitle.textContent = "Keys On Hash Table";

    const keysDataValue = document.createElement('div'); 

    keysData.appendChild(keysDataTitle); 
    keysData.appendChild(keysDataValue); 

    for (let i = 0; i < keysOnHashTable.length; i++)
    {
        const key = document.createElement('div');
        key.textContent = `${keysOnHashTable[i]}`;
        
        keysDataValue.appendChild(key); 
    }

    dataField.replaceChildren();
    dataField.appendChild(keysData);
}

// CreateValuesButton(): Will create a button that will return an array containing all the values.
function CreateValuesButton(){
    const buttonField = document.querySelector('.button-field'); 

    const valuesButton = document.createElement('button'); 
    valuesButton.textContent = 'Values';

    buttonField.appendChild(valuesButton);
}

// ValuesButton(): User values Button 
function ValuesButton(){
    const valuesButton = document.querySelector('.button-field > button:nth-child(4)');

    valuesButton.addEventListener('click', DisplayValues); 
}

// DisplayValues(): Will display all the values on the hash table. 
function DisplayValues(){
    const dataField = document.querySelector('.data-field');

    const valuesData = document.createElement('div');
    valuesData.classList.add('values-data');

    const valuesDataTitle = document.createElement('div'); 
    valuesDataTitle.textContent = 'Values On Hash Table';

    const valuesDataValue = document.createElement('div'); 

    valuesData.appendChild(valuesDataTitle); 
    valuesData.appendChild(valuesDataValue);

    const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43); 
    const valuesOnHashTable = HashMapObj.values(); 

    for(let i = 0; i < valuesOnHashTable.length; i++)
    {
        const value = document.createElement('div');
        value.textContent = `${valuesOnHashTable[i]}`; 
        valuesDataValue.appendChild(value); 
    }

    dataField.replaceChildren(); 
    dataField.appendChild(valuesData);
}

// CreatesEntriesButton(): Will create a entries button that returns an array that contains each key and value pair. 
function CreateEntriesButton(){
    const buttonField = document.querySelector('.button-field');
    
    const entriesButton = document.createElement('button');
    entriesButton.textContent = 'Entries'; 

    buttonField.appendChild(entriesButton); 
}

// EntriesButton(): User entries button.
function EntriesButton(){
    const entriesButton = document.querySelector('.button-field > button:nth-child(5)'); 

    entriesButton.addEventListener('click', DisplayEntries);
}

// DisplayEntries(): Will display all the key and value pairs on the hash table.
function DisplayEntries(){
    const dataField = document.querySelector('.data-field'); 

    const entriesData = document.createElement('div');
    entriesData.classList.add('entries-data');

    const entriesDataTitle = document.createElement('div');
    entriesDataTitle.textContent = "Entries On Hash Table";

    const entriesDataValue = document.createElement('div'); 

    entriesData.appendChild(entriesDataTitle);
    entriesData.appendChild(entriesDataValue);

    const HashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43);
    const entriesOnHashTable = HashMapObj.entries();

    for (let i = 0; i < entriesOnHashTable.length; i++)
    {
        const entry = document.createElement('div');
        entry.textContent = `[${entriesOnHashTable[i]}]`;
        entriesDataValue.appendChild(entry);
    } 

    dataField.replaceChildren(); 
    dataField.appendChild(entriesData);
}


// SubmitButton(): The submit button to enter data. 
function SetButton(){
    const submit = document.querySelector('.set-form > div:nth-child(2) > button');
    
    submit.addEventListener('click', SubmitKey);
}

// SubmitKey(): Will submit data into the hashmap field. 
function SubmitKey(e){
    e.preventDefault();
    const input = document.querySelector('.set-form > div:nth-child(1) > input'); 
    const setForm = document.querySelector('.set-form'); 
    
    if (input.validity.valueMissing)
    {
        input.setCustomValidity('Please enter a name first.');
        input.reportValidity(); 
    }
    else if (Number(input.value))
    {
        input.setCustomValidity("Can't use numerical values in this field."); 
        input.reportValidity(); 
    }
    else
    {
        let string = input.value;

        setForm.reset(); 
    
        const hashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43); 
        hashMapObj.hash(string);
    
        hashMapObj.set(hashMapObj.hashCode, string);
        
        PlaceInBucket(); 
    }
}

// CreateBucketsField(): Creates the buckets field that will hold all the data. 
function CreateBucketField(){
    const content = document.getElementById('content');
    const bucketField = document.createElement('div');
    bucketField.classList.add('bucket-field'); 
    
    content.appendChild(bucketField); 
}

// CreateBuckets(): Will create buckets for the bucket field. 
function CreateBuckets(){
    const bucketField = document.querySelector('.bucket-field'); 

    for (let i = 0; i < _utils_Buckets__WEBPACK_IMPORTED_MODULE_1__.buckets.length; i++)
    {
        const bucket = document.createElement('div');
        bucket.dataset.bucket = i;

        const empty = document.createElement('div');
        empty.classList.add('empty-bucket');
        empty.textContent = 'Empty';

        bucket.appendChild(empty); 
        bucketField.appendChild(bucket); 
    }
}

// PlaceInBucket(): Will place the hash data inside a bucket. 
function PlaceInBucket(){
    const bucketsInField = document.querySelectorAll('.bucket-field > div'); 

    for (let i = 0; i < _utils_Buckets__WEBPACK_IMPORTED_MODULE_1__.buckets.length; i++)
    {
        if (_utils_Buckets__WEBPACK_IMPORTED_MODULE_1__.buckets[i] !== null && !bucketsInField[i].children.item(1))
        {            
            bucketsInField[i].removeChild(bucketsInField[i].children.item(0)); // Remove 'empty' node as the first node. 

            const bucketIndex = document.createElement('div');
            const bucketValue = document.createElement('div');
            const data = _utils_Buckets__WEBPACK_IMPORTED_MODULE_1__.buckets[i];
            bucketIndex.textContent = data[1];
            bucketValue.textContent = data[0]; 
            bucketsInField[i].appendChild(bucketIndex);
            bucketsInField[i].appendChild(bucketValue); 
        }
        else if (_utils_Buckets__WEBPACK_IMPORTED_MODULE_1__.buckets[i] !== null && bucketsInField[i].children.item(1))
        {
            bucketsInField[i].replaceChildren();

            const bucketIndex = document.createElement('div');
            const bucketValue = document.createElement('div');
            const data = _utils_Buckets__WEBPACK_IMPORTED_MODULE_1__.buckets[i];
            bucketIndex.textContent = data[1];
            bucketValue.textContent = data[0]; 
            bucketsInField[i].appendChild(bucketIndex);
            bucketsInField[i].appendChild(bucketValue);
        }
    }
}


/***/ }),

/***/ "./src/modules/HashMap.js":
/*!********************************!*\
  !*** ./src/modules/HashMap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HashMap: () => (/* binding */ HashMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Buckets */ "./src/utils/Buckets.js");
/* harmony import */ var _DomContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomContent */ "./src/modules/DomContent.js");




// HashMap Class Test: 
class HashMap{
    constructor(table_size){
        this.table_size = table_size;
        this.hashCode = null; 
        this.loadFactor = 0.75;
        this.loadIncrease = 10;
    }

    stringToNumber(string){
        let hashCode = 0;
        let number = 0;
        
        for (let i = 0; i < string.length; i++)
        {
            number += string.charCodeAt(i);
        }

        // The Mod Method (Hashing by division)
        hashCode = number % this.table_size;  

        return hashCode;
    }

    hash(key){
        this.hashCode = this.stringToNumber(key);
    }

    set(key, value){
        let valuesInBuckets = 0;
        let increaseBuckets = 0;
        let placedInsideBucket = false;
        let itemFound = false;
        
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item, index) => {
            // Test if the hash code value is already in the buckets field.
            if (item !== null && item[0] === value)
            {
                itemFound = true;
            }

            // Test if the buckets field index has increased due to the load factor. 
            if (index === key)
            {
                // buckets[index] = [value, key];
                for (let i = 0; i < _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length; i++)
                {
                    const bucketItem = _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i];
                    if (bucketItem !== null && bucketItem[0] === value)
                    {
                        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i] = null;
                    }
                }
                _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[index] = [value, key]; 

                const bucketField = document.querySelector('.bucket-field'); 
                bucketField.replaceChildren();
                (0,_DomContent__WEBPACK_IMPORTED_MODULE_1__.CreateBuckets)(); 
                (0,_DomContent__WEBPACK_IMPORTED_MODULE_1__.PlaceInBucket)();
            }
        }); 

        if ((key < 0 || key >= _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length) && !(itemFound))
        {
            for (let i = 0; i < _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length; i++)
            {
                if (_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i] === null && !placedInsideBucket)
                {
                    _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i] = [value, key];
                    placedInsideBucket = true;
                }
                else if (_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i] !== null && !placedInsideBucket)
                {
                    const itemPair = _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i];
                    if (itemPair[1] === key)
                    {
                        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[i] = [value, key]; 
                        placedInsideBucket = true; 
                    }   
                }
            }
        }

        // Test if the bucket has reached the default load factor. 
        // Note: This test could be in its own function.
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if(item !== null)
            {
                valuesInBuckets++;
            }
                
            if ((Math.floor(_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length * this.loadFactor)) === valuesInBuckets)
            {
                while(increaseBuckets < this.loadIncrease)
                {
                    increaseBuckets++;
                    _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length += 1
                    _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length - 1] = null;
                }

                const bucketField = document.querySelector('.bucket-field');
                bucketField.replaceChildren();
                (0,_DomContent__WEBPACK_IMPORTED_MODULE_1__.CreateBuckets)();
                (0,_DomContent__WEBPACK_IMPORTED_MODULE_1__.PlaceInBucket)();
            }
        });
    }
    
    get(key){
        let itemFound = false; 
        let value = null;
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null && item[1] === key)
            {
                itemFound = true;
                value = item[0];
            }
        });

        if (itemFound)
        {
            return value; 
        }
        else
        {
            return value; 
        }
    }
    
    has(key){
        let itemFound = false; 

        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null && item[1] === key)
            {
                itemFound = true;
            }
        });

        if (itemFound)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    remove(key){
        let itemFound = false;

        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item, index) => {
            if (item !== null && item[1] === key)
            {
                itemFound = true;
                _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[index] = null;
            }
        });

        if (itemFound)
        {
            return true;
        }
        else 
        {
            return false; 
        }
    }

    length(){
        let keysOnHashTable = 0;

        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null)
            {
                keysOnHashTable++;
            }
        });

        return keysOnHashTable;
    }

    clear(){
        let bucketIndexReached = 0;

        while (bucketIndexReached < (_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length)){
            _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.shift(); 
            _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.push(null); 
            bucketIndexReached++;
        }
    }

    keys(){
        let keysOnHashTable = [];
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null)
            {
                keysOnHashTable.push(item[1]);
            }
        });

        return keysOnHashTable;
    }

    values(){
        let valuesOnHashTable = [];
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null)
            {
                valuesOnHashTable.push(item[0]); 
            }
        });

        return valuesOnHashTable; 
    }

    entries(){
        let entriesOnHashTable = [];
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null)
            {
                entriesOnHashTable.push([item[0], item[1]]);
            }
        });

        return entriesOnHashTable; 
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashMap);

/***/ }),

/***/ "./src/utils/Buckets.js":
/*!******************************!*\
  !*** ./src/utils/Buckets.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buckets: () => (/* binding */ buckets)
/* harmony export */ });
let buckets = new Array(16).fill(null); 

/***/ }),

/***/ "./src/fonts/comfortaa/Comfortaa-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/comfortaa/Comfortaa-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "886fcced57daea5944e7.ttf";

/***/ }),

/***/ "./src/images/Bucket-cropped.png":
/*!***************************************!*\
  !*** ./src/images/Bucket-cropped.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34a3a44e83f64f3483b5.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _modules_DomContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DomContent */ "./src/modules/DomContent.js");
/* harmony import */ var _utils_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/style.css */ "./src/utils/style.css");


 

(0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_0__.InitializeDomContent)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1B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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsR0FBRztBQUMxQyxzQ0FBc0MsS0FBSzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsZ0RBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsZ0RBQU87QUFDdEM7QUFDQSxxQ0FBcUM7QUFDckMsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEQ7O0FBRWpDOztBQUUzQix5RUFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9zcmMvdXRpbHMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9zcmMvdXRpbHMvc3R5bGUuY3NzPzJkZmEiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9zcmMvbW9kdWxlcy9Eb21Db250ZW50LmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL3NyYy9tb2R1bGVzL0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vc3JjL3V0aWxzL0J1Y2tldHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2NvbWZvcnRhYS9Db21mb3J0YWEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQnVja2V0LWNyb3BwZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogYm9keSAtIFRoZSBtYWluIGJvZHkgZm9yIHRoZSBhcHBsaWNhdGlvbi4gKi9cbmJvZHl7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qICogLSBBbGwgZWxlbWVudHMgZm9yIHRoZSBhcHBsaWNhdGlvbi4gKi9cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogZm9udC0wIC0gQ29tZm9ydGFhIGZvbnQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi8qIE1vYmlsZSAmIERlc2t0b3AgTWluaW1pemF0aW9uICovXG4jbW9iaWxlLW1pbmltaXphdGlvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxNYWluIENvbnRlbnR8ICovXG4jY29udGVudHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxNYWluIFRpdGxlfCAqL1xuLm1haW4tdGl0bGUtY29udGFpbmVye1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8SW5wdXQgRmllbGRzfCAqL1xuXG4vKiBpbnB1dC1maWVsZHMgLSBUaGUgcGFyZW50IGNvbnRhaW5lciBmb3IgYWxsIHRoZSBpbnB1dCBmaWVsZHMuICovXG4uaW5wdXQtZmllbGRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIFNldCBGb3JtICovXG4uc2V0LWZvcm17XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgXG59XG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogIzE4MTgxYjtcbn1cbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgXG4gICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogIzE4MTgxYjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NzE3MTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg3MTcxOyBcbn1cbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjg3MTcxO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEdldCBGb3JtICovXG4uZ2V0LWZvcm17XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcHVycGxlOyAgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGNvbG9yOiAjMTgxODFiO1xufVxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyBcbiAgICBmb250LXNpemU6IDE1cHg7IFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGNvbG9yOiAjMTgxODFiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbn1cbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg3MTcxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmODcxNzE7XG59XG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogI2Y4NzE3MTtcbiAgICBvdXRsaW5lOiBub25lOyBcbn1cbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dDpmb2N1c3tcbiAgICBib3JkZXItY29sb3I6ICMwZDk0ODg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogUmVtb3ZlIEZvcm0gKi9cbi5yZW1vdmUtZm9ybXtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4OyBcbn1cbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogIzE4MTgxYjtcbn1cbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgXG4gICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogIzE4MTgxYjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmODcxNzE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NzE3MTtcbn1cbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjg3MTcxO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4O1xuICAgIG91dGxpbmU6IG5vbmU7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxCdWNrZXRzIEZpZWxkfCAqL1xuLyogYnVja2V0cy1maWVsZCAtIFRoZSBidWNrZXRzIGZpZWxkIGNvbnRhaW5lci4gKi9cbi5idWNrZXQtZmllbGR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuLyogRWFjaCBidWNrZXQgKi9cbi5idWNrZXQtZmllbGQgPiBkaXZ7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmJ1Y2tldC1maWVsZCA+IGRpdiA+IGRpdnsgLyogQnVja2V0IGluZGV4IGFuZCB2YWx1ZSAqL1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxEYXRhIEZpZWxkc3wgKi9cbi5kYXRhLWZpZWxke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgKi9cbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmRhdGEtZmllbGQgPiBkaXZ7IC8qIERhdGEgQ29udGFpbmVycyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5kYXRhLWZpZWxkID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKXsgLyogRGF0YSBUaXRsZSAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTVweDsgXG59XG4uZGF0YS1maWVsZCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMil7IC8qIERhdGEgVmFsdWUgKi9cbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi8qIEtleXMgRGF0YSAqL1xuLmtleXMtZGF0YSA+IGRpdjpudGgtY2hpbGQoMil7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuXG4vKiBWYWx1ZXMgRGF0YSAqL1xuLnZhbHVlcy1kYXRhID4gZGl2Om50aC1jaGlsZCgyKXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogZmxleDtcbiAgICBnYXA6IDEwcHg7IFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuXG4vKiBFbnRyaWVzIERhdGEgKi9cbi5lbnRyaWVzLWRhdGEgPiBkaXY6bnRoLWNoaWxkKDIpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8QnV0dG9uIEZpZWxkfCAqL1xuLmJ1dHRvbi1maWVsZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTsgKi9cbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbnsgXG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn1cbi5idXR0b24tZmllbGQgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NzE3MTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg3MTcxO1xufVxuLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbjpmb2N1c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGQ5NDg4O1xuICAgIG91dGxpbmU6IG5vbmU7ICBcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxNb2JpbGUgU2VjdGlvbnwgKi9cbi8qIE1lZGlhLTAgLSBXaWxsIGRpc3BsYXkgdGhhdCBtb2JpbGUgYW5kIGRlc2t0b3AgbWluaW1pemF0aW9uIGRvZXNuJ3QgZXhpc3QuICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTlweCl7XG4gICAgYm9keXtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM2NDQxQTUsICMyYTA4NDUpO1xuICAgIH1cblxuICAgICNjb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG4gICAgXG4gICAgI21vYmlsZS1taW5pbWl6YXRpb257XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICBmb250LXNpemU6IDIwcHg7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3V0aWxzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4Q0FBOEM7QUFDOUM7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBLDBDQUEwQztBQUMxQztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxzQkFBc0I7SUFDdEIsNENBQWtEO0FBQ3REOztBQUVBLGtDQUFrQztBQUNsQztJQUNJLGFBQWE7QUFDakI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SyxtQkFBbUI7QUFDbkI7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssaUJBQWlCO0FBQ2pCO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw2SUFBNkk7SUFDN0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SyxtQkFBbUI7O0FBRW5CLGtFQUFrRTtBQUNsRTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBLGFBQWE7QUFDYjtJQUNJLDRC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SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCw2SUFBNkk7QUFDako7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsNklBQTZJO0FBQ2pKOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULDZJQUE2STtBQUNqSjs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNklBQTZJO0lBQzdJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOzs7QUFHQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLHFCQUFxQjtBQUNyQiwrRUFBK0U7QUFDL0U7SUFDSTtRQUNJLHNEQUFzRDtJQUMxRDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsNklBQTZJO1FBQzdJLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBib2R5IC0gVGhlIG1haW4gYm9keSBmb3IgdGhlIGFwcGxpY2F0aW9uLiAqL1xcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogKiAtIEFsbCBlbGVtZW50cyBmb3IgdGhlIGFwcGxpY2F0aW9uLiAqL1xcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIGZvbnQtMCAtIENvbWZvcnRhYSBmb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2NvbWZvcnRhYS9Db21mb3J0YWEtUmVndWxhci50dGYpO1xcbn1cXG5cXG4vKiBNb2JpbGUgJiBEZXNrdG9wIE1pbmltaXphdGlvbiAqL1xcbiNtb2JpbGUtbWluaW1pemF0aW9ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1haW4gQ29udGVudHwgKi9cXG4jY29udGVudHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxNYWluIFRpdGxlfCAqL1xcbi5tYWluLXRpdGxlLWNvbnRhaW5lcntcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8SW5wdXQgRmllbGRzfCAqL1xcblxcbi8qIGlucHV0LWZpZWxkcyAtIFRoZSBwYXJlbnQgY29udGFpbmVyIGZvciBhbGwgdGhlIGlucHV0IGZpZWxkcy4gKi9cXG4uaW5wdXQtZmllbGRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7ICovXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qIFNldCBGb3JtICovXFxuLnNldC1mb3Jte1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbiAgICBcXG59XFxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGxhYmVse1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgY29sb3I6ICMxODE4MWI7XFxufVxcbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IFxcbiAgICBmb250LXNpemU6IDE1cHg7IFxcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiAjMTgxODFiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxufVxcbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmODcxNzE7IFxcbn1cXG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmZvY3Vze1xcbiAgICBib3JkZXItY29sb3I6ICNmODcxNzE7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dDpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBHZXQgRm9ybSAqL1xcbi5nZXQtZm9ybXtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcHVycGxlOyAgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogIzE4MTgxYjtcXG59XFxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgXFxuICAgIGZvbnQtc2l6ZTogMTVweDsgXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgY29sb3I6ICMxODE4MWI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG59XFxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NzE3MTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NzE3MTtcXG59XFxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjg3MTcxO1xcbiAgICBvdXRsaW5lOiBub25lOyBcXG59XFxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGlucHV0OmZvY3Vze1xcbiAgICBib3JkZXItY29sb3I6ICMwZDk0ODg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFJlbW92ZSBGb3JtICovXFxuLnJlbW92ZS1mb3Jte1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbn1cXG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgY29sb3I6ICMxODE4MWI7XFxufVxcbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IFxcbiAgICBmb250LXNpemU6IDE1cHg7IFxcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiAjMTgxODFiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxufVxcbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjg3MTcxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg3MTcxO1xcbn1cXG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmZvY3Vze1xcbiAgICBib3JkZXItY29sb3I6ICNmODcxNzE7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dDpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4O1xcbiAgICBvdXRsaW5lOiBub25lOyBcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxCdWNrZXRzIEZpZWxkfCAqL1xcbi8qIGJ1Y2tldHMtZmllbGQgLSBUaGUgYnVja2V0cyBmaWVsZCBjb250YWluZXIuICovXFxuLmJ1Y2tldC1maWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxufVxcblxcbi8qIEVhY2ggYnVja2V0ICovXFxuLmJ1Y2tldC1maWVsZCA+IGRpdntcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0J1Y2tldC1jcm9wcGVkLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLmJ1Y2tldC1maWVsZCA+IGRpdiA+IGRpdnsgLyogQnVja2V0IGluZGV4IGFuZCB2YWx1ZSAqL1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8RGF0YSBGaWVsZHN8ICovXFxuLmRhdGEtZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7IFxcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5kYXRhLWZpZWxkID4gZGl2eyAvKiBEYXRhIENvbnRhaW5lcnMgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgcGFkZGluZzogMTBweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5kYXRhLWZpZWxkID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKXsgLyogRGF0YSBUaXRsZSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNXB4OyBcXG59XFxuLmRhdGEtZmllbGQgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiBEYXRhIFZhbHVlICovXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBLZXlzIERhdGEgKi9cXG4ua2V5cy1kYXRhID4gZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyogVmFsdWVzIERhdGEgKi9cXG4udmFsdWVzLWRhdGEgPiBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IGZsZXg7XFxuICAgIGdhcDogMTBweDsgXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyogRW50cmllcyBEYXRhICovXFxuLmVudHJpZXMtZGF0YSA+IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8QnV0dG9uIEZpZWxkfCAqL1xcbi5idXR0b24tZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTsgKi9cXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbnsgXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbn1cXG4uYnV0dG9uLWZpZWxkID4gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg3MTcxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg3MTcxO1xcbn1cXG4uYnV0dG9uLWZpZWxkID4gYnV0dG9uOmZvY3Vze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGQ5NDg4O1xcbiAgICBvdXRsaW5lOiBub25lOyAgXFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8TW9iaWxlIFNlY3Rpb258ICovXFxuLyogTWVkaWEtMCAtIFdpbGwgZGlzcGxheSB0aGF0IG1vYmlsZSBhbmQgZGVza3RvcCBtaW5pbWl6YXRpb24gZG9lc24ndCBleGlzdC4gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTlweCl7XFxuICAgIGJvZHl7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzY0NDFBNSwgIzJhMDg0NSk7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyBcXG4gICAgfVxcbiAgICBcXG4gICAgI21vYmlsZS1taW5pbWl6YXRpb257XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7IFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgICAgICBjb2xvcjogd2hpdGU7IFxcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBIYXNoTWFwIGZyb20gXCIuL0hhc2hNYXBcIjtcbmltcG9ydCB7IGJ1Y2tldHMgfSBmcm9tIFwiLi4vdXRpbHMvQnVja2V0c1wiO1xuXG4vLyBJbnRpYWxpemVEb21Db250ZW50KCk6IFdpbGwgaW5pdGlhbGl6ZSBhbGwgZG9tIGNvbnRlbnQgaW50byB0aGUgYXBwbGljYXRpb24uXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZURvbUNvbnRlbnQoKXtcbiAgICBOb2RlUmVmZXJlbmNlcygpO1xufVxuXG4vLyBOb2RlUmVmZXJlbmNlcygpOiBBbGwgbm9kZSB2YWx1ZXMuXG5mdW5jdGlvbiBOb2RlUmVmZXJlbmNlcygpe1xuICAgIENyZWF0ZU1haW5UaXRsZSgpO1xuXG4gICAgQ3JlYXRlSW5wdXRGaWVsZHMoKTtcblxuICAgIENyZWF0ZUJ1dHRvbkZpZWxkKCk7XG5cbiAgICBDcmVhdGVEYXRhRmllbGQoKTtcbiAgICBcbiAgICBDcmVhdGVCdWNrZXRGaWVsZCgpO1xuICAgIFxuICAgIENyZWF0ZUJ1Y2tldHMoKTtcblxuICAgIFBsYWNlSW5CdWNrZXQoKTsgXG59XG5cbi8vIENyZWF0ZURhdGFGaWVsZCgpOiBUaGUgZGF0YSBmaWVsZCB3aWxsIGRpc3BsYXkgYWxsIHRoZSBkYXRhIG91dHB1dCBkYXRhIGZyb20gdGhlIGJ1Y2tldCBmaWVsZC4gXG5mdW5jdGlvbiBDcmVhdGVEYXRhRmllbGQoKXtcbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRhRmllbGQuY2xhc3NMaXN0LmFkZCgnZGF0YS1maWVsZCcpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0YUZpZWxkKTtcblxuICAgIERpc3BsYXlHZXREYXRhKG51bGwpOyBcblxuICAgIERpc3BsYXlEYXRhRXhpc3QobnVsbCk7XG5cbiAgICBEaXNwbGF5UmVtb3ZlZERhdGEobnVsbCk7XG59XG5cbi8vIERpc3BsYXlSZW1vdmVkS2V5KCk6IFxuZnVuY3Rpb24gRGlzcGxheVJlbW92ZWREYXRhKHZhbHVlUmVtb3ZlZCl7XG4gICAgY29uc3QgcmVtb3ZlRGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcmVtb3ZlRGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGNvbnN0IHJlbW92ZURhdGFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtZmllbGQnKTtcblxuICAgIHJlbW92ZURhdGFUaXRsZS50ZXh0Q29udGVudCA9IFwiRGF0YSBSZW1vdmVkXCI7XG4gICAgaWYgKHZhbHVlUmVtb3ZlZCA9PT0gbnVsbClcbiAgICB7XG4gICAgICAgIHJlbW92ZURhdGFWYWx1ZS50ZXh0Q29udGVudCA9ICdOL0EnOyBcbiAgICB9XG4gICAgZWxzZSBcbiAgICB7XG4gICAgICAgIHJlbW92ZURhdGFWYWx1ZS50ZXh0Q29udGVudCA9IGAke3ZhbHVlUmVtb3ZlZH1gO1xuICAgIH1cblxuICAgIHJlbW92ZURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlRGF0YVRpdGxlKTtcbiAgICByZW1vdmVEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZURhdGFWYWx1ZSk7IFxuXG4gICAgZGF0YUZpZWxkLmFwcGVuZENoaWxkKHJlbW92ZURhdGFDb250YWluZXIpOyBcbn1cblxuLy8gRGlzcGxheUdldERhdGEoKTpcbmZ1bmN0aW9uIERpc3BsYXlHZXREYXRhKHZhbHVlKXtcbiAgICBjb25zdCBnZXREYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgZ2V0RGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ2V0RGF0YVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpO1xuXG4gICAgZ2V0RGF0YVRpdGxlLnRleHRDb250ZW50ID0gXCJIYXNoIFZhbHVlXCI7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKVxuICAgIHtcbiAgICAgICAgZ2V0RGF0YVZhbHVlLnRleHRDb250ZW50ID0gJ04vQSc7IFxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBnZXREYXRhVmFsdWUudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX1gO1xuICAgIH1cblxuICAgIGdldERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RGF0YVRpdGxlKTtcbiAgICBnZXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGdldERhdGFWYWx1ZSk7IFxuXG4gICAgXG4gICAgZGF0YUZpZWxkLmFwcGVuZENoaWxkKGdldERhdGFDb250YWluZXIpOyBcbn1cblxuLy8gRGlzcGxheURhdGFFeGlzdCgpOlxuZnVuY3Rpb24gRGlzcGxheURhdGFFeGlzdChoYXNEYXRhKXtcbiAgICBjb25zdCBkYXRhRXhpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICBjb25zdCBkYXRhRXhpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjb25zdCBkYXRhRXhpc3RWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtZmllbGQnKTtcblxuICAgIGRhdGFFeGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJEYXRhIEV4aXN0XCI7XG4gICAgaWYgKGhhc0RhdGEgPT09IG51bGwpXG4gICAge1xuICAgICAgICBkYXRhRXhpc3RWYWx1ZS50ZXh0Q29udGVudCA9ICdOL0EnO1xuICAgIH1cbiAgICBlbHNlIGlmIChoYXNEYXRhKVxuICAgIHtcbiAgICAgICAgZGF0YUV4aXN0VmFsdWUudGV4dENvbnRlbnQgPSBgJHtoYXNEYXRhfWA7IFxuICAgIH1cbiAgICBlbHNlIGlmICghaGFzRGF0YSlcbiAgICB7XG4gICAgICAgIGRhdGFFeGlzdFZhbHVlLnRleHRDb250ZW50ID0gYCR7aGFzRGF0YX1gOyBcbiAgICB9XG5cbiAgICBkYXRhRXhpc3QuYXBwZW5kQ2hpbGQoZGF0YUV4aXN0VGl0bGUpO1xuICAgIGRhdGFFeGlzdC5hcHBlbmRDaGlsZChkYXRhRXhpc3RWYWx1ZSk7XG5cbiAgICBkYXRhRmllbGQuYXBwZW5kQ2hpbGQoZGF0YUV4aXN0KTsgXG59XG5cbi8vIENyZWF0ZU1haW5UaXRsZSgpOiBDcmVhdGVzIHRoZSBtYWluIHRpdGxlIGxvZ28uXG5mdW5jdGlvbiBDcmVhdGVNYWluVGl0bGUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW5UaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5UaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlLWNvbnRhaW5lcicpOyBcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdIYXNoTWFwIFRhYmxlJztcbiAgICBtYWluVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblRpdGxlQ29udGFpbmVyKTsgXG59XG5cbi8vIENyZWF0ZUlucHV0RmllbGQoKTogQ3JlYXRlcyB0aGUgaW5wdXQgZmllbGQgZm9yIHRoZSB1c2VyIHRvIGVudGVyIHN0cmluZ3MuIFxuZnVuY3Rpb24gQ3JlYXRlSW5wdXRGaWVsZHMoKXtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBpbnB1dEZpZWxkcy5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZHMnKTsgXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZHMpOyBcblxuICAgIENyZWF0ZVNldEZpZWxkKCk7XG4gICAgU2V0QnV0dG9uKCk7XG5cbiAgICBDcmVhdGVHZXRGaWVsZCgpOyBcbiAgICBHZXRCdXR0b24oKTsgXG5cbiAgICBDcmVhdGVSZW1vdmVGaWVsZCgpO1xuICAgIFJlbW92ZUJ1dHRvbigpOyBcbn1cblxuLy8gQ3JlYXRlU2V0RmllbGQoKTogRGF0YSBjYW4gYmUgZW50ZXJlZCBpbnRvIGJ1Y2tldHMgdXNpbmcgdGhpcyBmaWVsZC4gXG5mdW5jdGlvbiBDcmVhdGVTZXRGaWVsZCgpe1xuICAgIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkcycpOyBcblxuICAgIGNvbnN0IHNldEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IFxuICAgIHNldEZvcm0uY2xhc3NMaXN0LmFkZCgnc2V0LWZvcm0nKTsgXG5cbiAgICBjb25zdCBmb3JtU2VjdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm1TZWN0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyBcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBGaXJzdCBOYW1lcyBIZXJlJztcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7IFxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heExlbmd0aCcsIGAkezMwfWApOyBcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgYCR7dHJ1ZX1gKTsgXG5cbiAgICBmb3JtU2VjdGlvbk9uZS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybVNlY3Rpb25Ud28uYXBwZW5kQ2hpbGQoc3VibWl0KTsgXG5cbiAgICBzZXRGb3JtLmFwcGVuZENoaWxkKGZvcm1TZWN0aW9uT25lKTsgXG4gICAgc2V0Rm9ybS5hcHBlbmRDaGlsZChmb3JtU2VjdGlvblR3byk7XG5cbiAgICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZChzZXRGb3JtKTtcbn1cblxuLy8gQ3JlYXRlR2V0RmllbGQoKTogQ3JlYXRlcyB0aGUgZ2V0IGZpZWxkIGZvciB0aGUgdXNlciBnYXRoZXIgZGF0YSBmcm9tIHRoZSBoYXNoIG1hcCB0YWJsZS5cbmZ1bmN0aW9uIENyZWF0ZUdldEZpZWxkKCl7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGRzJyk7IFxuXG4gICAgY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBnZXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2dldC1mb3JtJyk7IFxuXG4gICAgY29uc3QgZ2V0Rm9ybVNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBnZXRGb3JtU2VjdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZ2V0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyBcbiAgICBnZXRMYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBIYXNoIEtleSBUbyBHZXQgRGF0YSBGcm9tIFRhYmxlJztcbiAgICBnZXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdnZXQtbmFtZScpO1xuXG4gICAgY29uc3QgZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBnZXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIGdldC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dldC1uYW1lJyk7XG4gICAgZ2V0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdnZXROYW1lJyk7IFxuICAgIGdldC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgYCR7dHJ1ZX1gKTsgXG5cbiAgICBnZXRGb3JtU2VjdGlvbk9uZS5hcHBlbmRDaGlsZChnZXRMYWJlbCk7XG4gICAgZ2V0Rm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQoZ2V0KTsgXG5cbiAgICBjb25zdCBnZXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBnZXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGdldFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnOyBcblxuICAgIGdldEZvcm1TZWN0aW9uVHdvLmFwcGVuZENoaWxkKGdldFN1Ym1pdCk7XG5cbiAgICBnZXRGb3JtLmFwcGVuZENoaWxkKGdldEZvcm1TZWN0aW9uT25lKTsgXG4gICAgZ2V0Rm9ybS5hcHBlbmRDaGlsZChnZXRGb3JtU2VjdGlvblR3byk7IFxuXG4gICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoZ2V0Rm9ybSk7IFxufVxuXG4vLyBDcmVhdGVSZW1vdmVGaWVsZCgpOiBDYW4gcmVtb3ZlIGJ1Y2tldCBkYXRhIHVzaW5nIHRoaXMgZmllbGQuIFxuZnVuY3Rpb24gQ3JlYXRlUmVtb3ZlRmllbGQoKXtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZHMnKTsgXG5cbiAgICBjb25zdCByZW1vdmVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHJlbW92ZUZvcm0uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWZvcm0nKTtcblxuICAgIGNvbnN0IHJlbW92ZUZvcm1TZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVtb3ZlRm9ybVNlY3Rpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICBjb25zdCByZW1vdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcmVtb3ZlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncmVtb3ZlLW5hbWUnKTtcbiAgICByZW1vdmVMYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBLZXkgVG8gUmVtb3ZlIEl0IEZyb20gVGFibGUnO1xuXG4gICAgY29uc3QgcmVtb3ZlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcbiAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7IFxuICAgIHJlbW92ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVtb3ZlLW5hbWUnKTtcbiAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmVtb3ZlTmFtZScpO1xuICAgIHJlbW92ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCBgJHt0cnVlfWApOyBcblxuICAgIHJlbW92ZUZvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKHJlbW92ZUxhYmVsKTsgXG4gICAgcmVtb3ZlRm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQocmVtb3ZlSW5wdXQpO1xuXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTsgXG4gICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICAgIHJlbW92ZUZvcm1TZWN0aW9uVHdvLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG5cbiAgICByZW1vdmVGb3JtLmFwcGVuZENoaWxkKHJlbW92ZUZvcm1TZWN0aW9uT25lKTsgXG4gICAgcmVtb3ZlRm9ybS5hcHBlbmRDaGlsZChyZW1vdmVGb3JtU2VjdGlvblR3byk7IFxuXG4gICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQocmVtb3ZlRm9ybSk7IFxufVxuXG4vLyBSZW1vdmVCdXR0b24oKTogXG5mdW5jdGlvbiBSZW1vdmVCdXR0b24oKXtcbiAgICBjb25zdCByZW1vdmVTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uJyk7XG5cbiAgICByZW1vdmVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZW1vdmVWYWx1ZSk7XG59XG5cbi8vIFJlbW92ZVZhbHVlKCk6XG5mdW5jdGlvbiBSZW1vdmVWYWx1ZShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZW1vdmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dCcpO1xuICAgIGNvbnN0IGJ1Y2tldEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1Y2tldC1maWVsZCcpOyBcbiAgICBjb25zdCByZW1vdmVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1mb3JtJyk7XG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtZmllbGQnKTsgXG4gICAgXG4gICAgaWYgKHJlbW92ZUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZylcbiAgICB7XG4gICAgICAgIHJlbW92ZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGVudGVyIGEgbnVtZXJpY2FsIHZhbHVlIGZpcnN0LlwiKTtcbiAgICAgICAgcmVtb3ZlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTsgXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBudW1iZXIgPSBOdW1iZXIocmVtb3ZlSW5wdXQudmFsdWUpO1xuXG4gICAgICAgIHJlbW92ZUZvcm0ucmVzZXQoKTsgXG5cbiAgICAgICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTsgXG4gICAgXG4gICAgICAgIGRhdGFGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTsgXG4gICAgXG4gICAgICAgIERpc3BsYXlSZW1vdmVkRGF0YShIYXNoTWFwT2JqLnJlbW92ZShudW1iZXIpKTsgXG4gICAgICAgIGJ1Y2tldEZpZWxkLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBDcmVhdGVCdWNrZXRzKCk7XG4gICAgICAgIFBsYWNlSW5CdWNrZXQoKTtcbiAgICB9XG59XG5cbi8vIEdldEJ1dHRvbigpOiBJbnB1dCBmaWVsZCB0aGF0IHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgaGFzaCBtYXAgdGFibGUuXG5mdW5jdGlvbiBHZXRCdXR0b24oKXtcbiAgICBjb25zdCBnZXRTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uJyk7XG5cbiAgICBnZXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHZXRWYWx1ZSk7IFxufVxuXG4vLyBHZXRLZXkoKTogRnVuY3Rpb24gd2lsbCBhbGxvdyB0aGUgdXNlciBnZXQgdGhlIHZhbHVlIGJ5IHN1Ym1pdHRpbmcgdGhlIGNvcnJlY3Qga2V5LiBcbmZ1bmN0aW9uIEdldFZhbHVlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgXG5cbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpOyBcbiAgICBjb25zdCBnZXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dCcpO1xuICAgIGNvbnN0IGdldEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWZvcm0nKTtcblxuICAgIGlmIChnZXRJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAge1xuICAgICAgICBnZXRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnRlciBhIG51bWVyaWNhbCB2YWx1ZSBmaXJzdC5cIik7XG4gICAgICAgIGdldElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBudW1iZXIgPSBOdW1iZXIoZ2V0SW5wdXQudmFsdWUpO1xuXG4gICAgICAgIGdldEZvcm0ucmVzZXQoKTsgXG5cbiAgICAgICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTsgXG4gICAgXG4gICAgICAgIGRhdGFGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTsgLy8gT3ZlcmFsbCBQYXJlbnQgcmVwbGFjaW5nIGFsbCBjaGlsZCBub2Rlcy4gXG4gICAgICAgIERpc3BsYXlHZXREYXRhKEhhc2hNYXBPYmouZ2V0KG51bWJlcikpOyAvLyBOb3RlOiBNYXkgTmVlZCB0byByZXNldCBhdCBzb21lIHBvaW50IGZvciBuZXcgZGF0YS4gXG4gICAgICAgIERpc3BsYXlEYXRhRXhpc3QoSGFzaE1hcE9iai5oYXMobnVtYmVyKSk7XG4gICAgfVxufVxuXG4vLyBDcmVhdGVCdXR0b25GaWVsZCgpOiBDcmVhdGVzIGJ1dHRvbiBmaWVsZCB0byBvdXRwdXQgZGF0YS4gXG5mdW5jdGlvbiBDcmVhdGVCdXR0b25GaWVsZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25GaWVsZC5jbGFzc0xpc3QuYWRkKCdidXR0b24tZmllbGQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRmllbGQpO1xuXG4gICAgQ3JlYXRlTGVuZ3RoQnV0dG9uKCk7XG4gICAgTGVuZ3RoQnV0dG9uKCk7XG5cbiAgICBDcmVhdGVDbGVhckJ1dHRvbigpO1xuICAgIENsZWFyQnV0dG9uKCk7XG5cbiAgICBDcmVhdGVLZXlzQnV0dG9uKCk7XG4gICAgS2V5c0J1dHRvbigpOyBcblxuICAgIENyZWF0ZVZhbHVlc0J1dHRvbigpOyBcbiAgICBWYWx1ZXNCdXR0b24oKTsgXG5cbiAgICBDcmVhdGVFbnRyaWVzQnV0dG9uKCk7XG4gICAgRW50cmllc0J1dHRvbigpOyBcbn1cblxuLy8gQ3JlYXRlTGVuZ3RoQnV0dG9uKCk6IExlbmd0aCBidXR0b24gd2lsbCBvdXRwdXQgYWxsIHRoZSBudW1iZXIgb2Yga2V5cyBpbnNpZGUgdGhlIGhhc2ggbWFwLlxuZnVuY3Rpb24gQ3JlYXRlTGVuZ3RoQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkJyk7XG5cbiAgICBjb25zdCBsZW5ndGhCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgbGVuZ3RoQnV0dG9uLnRleHRDb250ZW50ID0gJ0xlbmd0aCc7XG5cbiAgICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChsZW5ndGhCdXR0b24pOyBcbn1cblxuLy8gTGVuZ3RoQnV0dG9uKCk6IFVzZXIgbGVuZ3RoIGJ1dHRvbi5cbmZ1bmN0aW9uIExlbmd0aEJ1dHRvbigpe1xuICAgIGNvbnN0IGxlbmd0aEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7IFxuXG4gICAgbGVuZ3RoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUxlbmd0aERhdGEpO1xufVxuXG4vLyBEaXNwbGF5TGVuZ3RoRGF0YSgpOiBEaXNwbGF5cyB0aGUgbGVuZ3RoIGRhdGEuIFxuZnVuY3Rpb24gRGlzcGxheUxlbmd0aERhdGEoKXtcbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpO1xuXG4gICAgY29uc3QgbGVuZ3RoRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjb25zdCBsZW5ndGhEYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsZW5ndGhEYXRhVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IEhhc2hNYXBPYmogPSBuZXcgSGFzaE1hcCg0Myk7XG4gICAgXG4gICAgbGVuZ3RoRGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ0xlbmd0aCdcbiAgICBsZW5ndGhEYXRhVmFsdWUudGV4dENvbnRlbnQgPSBgJHtIYXNoTWFwT2JqLmxlbmd0aCgpfWA7XG5cbiAgICBsZW5ndGhEYXRhLmFwcGVuZENoaWxkKGxlbmd0aERhdGFUaXRsZSk7XG4gICAgbGVuZ3RoRGF0YS5hcHBlbmRDaGlsZChsZW5ndGhEYXRhVmFsdWUpO1xuXG4gICAgZGF0YUZpZWxkLnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgICBkYXRhRmllbGQuYXBwZW5kQ2hpbGQobGVuZ3RoRGF0YSk7IFxufVxuXG4vLyBDcmVhdGVDbGVhckJ1dHRvbigpOiBDcmVhdGVzIGEgY2xlYXIgYnV0dG9uIHRoYXQgd2lsbCByZW1vdmUgYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBoYXNoIG1hcC5cbmZ1bmN0aW9uIENyZWF0ZUNsZWFyQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkJyk7XG5cbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBjbGVhckJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGVhcic7XG5cbiAgICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChjbGVhckJ1dHRvbik7XG59XG5cbi8vIENsZWFyQnV0dG9uKCk6IFVzZXIgY2xlYXIgYnV0dG9uLiBcbmZ1bmN0aW9uIENsZWFyQnV0dG9uKCl7XG4gICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbiAgICBcbiAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENsZWFyRGF0YSk7XG59XG5cbi8vIENsZWFyRGF0YSgpOiBDbGVhcnMgYWxsIHRoZSBrZXkgZW50cmllcyBpbiB0aGUgaGFzaCBtYXAuXG5mdW5jdGlvbiBDbGVhckRhdGEoKXtcbiAgICBjb25zdCBidWNrZXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWNrZXQtZmllbGQnKTtcbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpO1xuXG4gICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTtcblxuICAgIEhhc2hNYXBPYmouY2xlYXIoKTsgXG4gICAgYnVja2V0RmllbGQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgZGF0YUZpZWxkLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgRGlzcGxheUdldERhdGEobnVsbCk7XG4gICAgRGlzcGxheURhdGFFeGlzdChudWxsKTtcbiAgICBEaXNwbGF5UmVtb3ZlZERhdGEobnVsbCk7XG5cbiAgICBDcmVhdGVCdWNrZXRzKCk7XG4gICAgUGxhY2VJbkJ1Y2tldCgpOyAgICAgXG59XG5cbi8vIENyZWF0ZUtleXNCdXR0b24oKTogQ3JlYXRlcyBhIGtleXMgYnV0dG9uIHRoYXQgd2lsbCByZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGtleXMgb24gdGhlIGhhc2ggdGFibGUuXG5mdW5jdGlvbiBDcmVhdGVLZXlzQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkJyk7XG5cbiAgICBjb25zdCBrZXlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAga2V5c0J1dHRvbi50ZXh0Q29udGVudCA9ICdLZXlzJztcblxuICAgIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKGtleXNCdXR0b24pOyBcbn1cblxuLy8gS2V5c0J1dHRvbigpOiBVc2VyIGtleXMgYnV0dG9uLlxuZnVuY3Rpb24gS2V5c0J1dHRvbigpe1xuICAgIGNvbnN0IGtleXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkID4gYnV0dG9uOm50aC1jaGlsZCgzKScpO1xuICAgIFxuICAgIGtleXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5S2V5cyk7XG59XG5cbi8vIERpc3BsYXlLZXlzKCk6IFdpbGwgdGhlIG51bWJlciBvZiBrZXlzIG9uIHRoZSBoYXNoIHRhYmxlLlxuZnVuY3Rpb24gRGlzcGxheUtleXMoKXtcbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpO1xuXG4gICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTtcbiAgICBjb25zdCBrZXlzT25IYXNoVGFibGUgPSBIYXNoTWFwT2JqLmtleXMoKTtcblxuICAgIGNvbnN0IGtleXNEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5c0RhdGEuY2xhc3NMaXN0LmFkZCgna2V5cy1kYXRhJyk7IFxuXG4gICAgY29uc3Qga2V5c0RhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleXNEYXRhVGl0bGUudGV4dENvbnRlbnQgPSBcIktleXMgT24gSGFzaCBUYWJsZVwiO1xuXG4gICAgY29uc3Qga2V5c0RhdGFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgIGtleXNEYXRhLmFwcGVuZENoaWxkKGtleXNEYXRhVGl0bGUpOyBcbiAgICBrZXlzRGF0YS5hcHBlbmRDaGlsZChrZXlzRGF0YVZhbHVlKTsgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNPbkhhc2hUYWJsZS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBrZXkudGV4dENvbnRlbnQgPSBgJHtrZXlzT25IYXNoVGFibGVbaV19YDtcbiAgICAgICAgXG4gICAgICAgIGtleXNEYXRhVmFsdWUuYXBwZW5kQ2hpbGQoa2V5KTsgXG4gICAgfVxuXG4gICAgZGF0YUZpZWxkLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGRhdGFGaWVsZC5hcHBlbmRDaGlsZChrZXlzRGF0YSk7XG59XG5cbi8vIENyZWF0ZVZhbHVlc0J1dHRvbigpOiBXaWxsIGNyZWF0ZSBhIGJ1dHRvbiB0aGF0IHdpbGwgcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSB2YWx1ZXMuXG5mdW5jdGlvbiBDcmVhdGVWYWx1ZXNCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQnKTsgXG5cbiAgICBjb25zdCB2YWx1ZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgdmFsdWVzQnV0dG9uLnRleHRDb250ZW50ID0gJ1ZhbHVlcyc7XG5cbiAgICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZCh2YWx1ZXNCdXR0b24pO1xufVxuXG4vLyBWYWx1ZXNCdXR0b24oKTogVXNlciB2YWx1ZXMgQnV0dG9uIFxuZnVuY3Rpb24gVmFsdWVzQnV0dG9uKCl7XG4gICAgY29uc3QgdmFsdWVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbjpudGgtY2hpbGQoNCknKTtcblxuICAgIHZhbHVlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlWYWx1ZXMpOyBcbn1cblxuLy8gRGlzcGxheVZhbHVlcygpOiBXaWxsIGRpc3BsYXkgYWxsIHRoZSB2YWx1ZXMgb24gdGhlIGhhc2ggdGFibGUuIFxuZnVuY3Rpb24gRGlzcGxheVZhbHVlcygpe1xuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7XG5cbiAgICBjb25zdCB2YWx1ZXNEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFsdWVzRGF0YS5jbGFzc0xpc3QuYWRkKCd2YWx1ZXMtZGF0YScpO1xuXG4gICAgY29uc3QgdmFsdWVzRGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHZhbHVlc0RhdGFUaXRsZS50ZXh0Q29udGVudCA9ICdWYWx1ZXMgT24gSGFzaCBUYWJsZSc7XG5cbiAgICBjb25zdCB2YWx1ZXNEYXRhVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICB2YWx1ZXNEYXRhLmFwcGVuZENoaWxkKHZhbHVlc0RhdGFUaXRsZSk7IFxuICAgIHZhbHVlc0RhdGEuYXBwZW5kQ2hpbGQodmFsdWVzRGF0YVZhbHVlKTtcblxuICAgIGNvbnN0IEhhc2hNYXBPYmogPSBuZXcgSGFzaE1hcCg0Myk7IFxuICAgIGNvbnN0IHZhbHVlc09uSGFzaFRhYmxlID0gSGFzaE1hcE9iai52YWx1ZXMoKTsgXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsdWVzT25IYXNoVGFibGUubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGAke3ZhbHVlc09uSGFzaFRhYmxlW2ldfWA7IFxuICAgICAgICB2YWx1ZXNEYXRhVmFsdWUuYXBwZW5kQ2hpbGQodmFsdWUpOyBcbiAgICB9XG5cbiAgICBkYXRhRmllbGQucmVwbGFjZUNoaWxkcmVuKCk7IFxuICAgIGRhdGFGaWVsZC5hcHBlbmRDaGlsZCh2YWx1ZXNEYXRhKTtcbn1cblxuLy8gQ3JlYXRlc0VudHJpZXNCdXR0b24oKTogV2lsbCBjcmVhdGUgYSBlbnRyaWVzIGJ1dHRvbiB0aGF0IHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBlYWNoIGtleSBhbmQgdmFsdWUgcGFpci4gXG5mdW5jdGlvbiBDcmVhdGVFbnRyaWVzQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkJyk7XG4gICAgXG4gICAgY29uc3QgZW50cmllc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVudHJpZXNCdXR0b24udGV4dENvbnRlbnQgPSAnRW50cmllcyc7IFxuXG4gICAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQoZW50cmllc0J1dHRvbik7IFxufVxuXG4vLyBFbnRyaWVzQnV0dG9uKCk6IFVzZXIgZW50cmllcyBidXR0b24uXG5mdW5jdGlvbiBFbnRyaWVzQnV0dG9uKCl7XG4gICAgY29uc3QgZW50cmllc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQgPiBidXR0b246bnRoLWNoaWxkKDUpJyk7IFxuXG4gICAgZW50cmllc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlFbnRyaWVzKTtcbn1cblxuLy8gRGlzcGxheUVudHJpZXMoKTogV2lsbCBkaXNwbGF5IGFsbCB0aGUga2V5IGFuZCB2YWx1ZSBwYWlycyBvbiB0aGUgaGFzaCB0YWJsZS5cbmZ1bmN0aW9uIERpc3BsYXlFbnRyaWVzKCl7XG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtZmllbGQnKTsgXG5cbiAgICBjb25zdCBlbnRyaWVzRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVudHJpZXNEYXRhLmNsYXNzTGlzdC5hZGQoJ2VudHJpZXMtZGF0YScpO1xuXG4gICAgY29uc3QgZW50cmllc0RhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVudHJpZXNEYXRhVGl0bGUudGV4dENvbnRlbnQgPSBcIkVudHJpZXMgT24gSGFzaCBUYWJsZVwiO1xuXG4gICAgY29uc3QgZW50cmllc0RhdGFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgIGVudHJpZXNEYXRhLmFwcGVuZENoaWxkKGVudHJpZXNEYXRhVGl0bGUpO1xuICAgIGVudHJpZXNEYXRhLmFwcGVuZENoaWxkKGVudHJpZXNEYXRhVmFsdWUpO1xuXG4gICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTtcbiAgICBjb25zdCBlbnRyaWVzT25IYXNoVGFibGUgPSBIYXNoTWFwT2JqLmVudHJpZXMoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllc09uSGFzaFRhYmxlLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgWyR7ZW50cmllc09uSGFzaFRhYmxlW2ldfV1gO1xuICAgICAgICBlbnRyaWVzRGF0YVZhbHVlLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICB9IFxuXG4gICAgZGF0YUZpZWxkLnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgICBkYXRhRmllbGQuYXBwZW5kQ2hpbGQoZW50cmllc0RhdGEpO1xufVxuXG5cbi8vIFN1Ym1pdEJ1dHRvbigpOiBUaGUgc3VibWl0IGJ1dHRvbiB0byBlbnRlciBkYXRhLiBcbmZ1bmN0aW9uIFNldEJ1dHRvbigpe1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b24nKTtcbiAgICBcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTdWJtaXRLZXkpO1xufVxuXG4vLyBTdWJtaXRLZXkoKTogV2lsbCBzdWJtaXQgZGF0YSBpbnRvIHRoZSBoYXNobWFwIGZpZWxkLiBcbmZ1bmN0aW9uIFN1Ym1pdEtleShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQnKTsgXG4gICAgY29uc3Qgc2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtZm9ybScpOyBcbiAgICBcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKVxuICAgIHtcbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIG5hbWUgZmlyc3QuJyk7XG4gICAgICAgIGlucHV0LnJlcG9ydFZhbGlkaXR5KCk7IFxuICAgIH1cbiAgICBlbHNlIGlmIChOdW1iZXIoaW5wdXQudmFsdWUpKVxuICAgIHtcbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJDYW4ndCB1c2UgbnVtZXJpY2FsIHZhbHVlcyBpbiB0aGlzIGZpZWxkLlwiKTsgXG4gICAgICAgIGlucHV0LnJlcG9ydFZhbGlkaXR5KCk7IFxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBsZXQgc3RyaW5nID0gaW5wdXQudmFsdWU7XG5cbiAgICAgICAgc2V0Rm9ybS5yZXNldCgpOyBcbiAgICBcbiAgICAgICAgY29uc3QgaGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTsgXG4gICAgICAgIGhhc2hNYXBPYmouaGFzaChzdHJpbmcpO1xuICAgIFxuICAgICAgICBoYXNoTWFwT2JqLnNldChoYXNoTWFwT2JqLmhhc2hDb2RlLCBzdHJpbmcpO1xuICAgICAgICBcbiAgICAgICAgUGxhY2VJbkJ1Y2tldCgpOyBcbiAgICB9XG59XG5cbi8vIENyZWF0ZUJ1Y2tldHNGaWVsZCgpOiBDcmVhdGVzIHRoZSBidWNrZXRzIGZpZWxkIHRoYXQgd2lsbCBob2xkIGFsbCB0aGUgZGF0YS4gXG5mdW5jdGlvbiBDcmVhdGVCdWNrZXRGaWVsZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGJ1Y2tldEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVja2V0RmllbGQuY2xhc3NMaXN0LmFkZCgnYnVja2V0LWZpZWxkJyk7IFxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVja2V0RmllbGQpOyBcbn1cblxuLy8gQ3JlYXRlQnVja2V0cygpOiBXaWxsIGNyZWF0ZSBidWNrZXRzIGZvciB0aGUgYnVja2V0IGZpZWxkLiBcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVCdWNrZXRzKCl7XG4gICAgY29uc3QgYnVja2V0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVja2V0LWZpZWxkJyk7IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWNrZXRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3QgYnVja2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1Y2tldC5kYXRhc2V0LmJ1Y2tldCA9IGk7XG5cbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW1wdHkuY2xhc3NMaXN0LmFkZCgnZW1wdHktYnVja2V0Jyk7XG4gICAgICAgIGVtcHR5LnRleHRDb250ZW50ID0gJ0VtcHR5JztcblxuICAgICAgICBidWNrZXQuYXBwZW5kQ2hpbGQoZW1wdHkpOyBcbiAgICAgICAgYnVja2V0RmllbGQuYXBwZW5kQ2hpbGQoYnVja2V0KTsgXG4gICAgfVxufVxuXG4vLyBQbGFjZUluQnVja2V0KCk6IFdpbGwgcGxhY2UgdGhlIGhhc2ggZGF0YSBpbnNpZGUgYSBidWNrZXQuIFxuZXhwb3J0IGZ1bmN0aW9uIFBsYWNlSW5CdWNrZXQoKXtcbiAgICBjb25zdCBidWNrZXRzSW5GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWNrZXQtZmllbGQgPiBkaXYnKTsgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAoYnVja2V0c1tpXSAhPT0gbnVsbCAmJiAhYnVja2V0c0luRmllbGRbaV0uY2hpbGRyZW4uaXRlbSgxKSlcbiAgICAgICAgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgYnVja2V0c0luRmllbGRbaV0ucmVtb3ZlQ2hpbGQoYnVja2V0c0luRmllbGRbaV0uY2hpbGRyZW4uaXRlbSgwKSk7IC8vIFJlbW92ZSAnZW1wdHknIG5vZGUgYXMgdGhlIGZpcnN0IG5vZGUuIFxuXG4gICAgICAgICAgICBjb25zdCBidWNrZXRJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnVja2V0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBidWNrZXRzW2ldO1xuICAgICAgICAgICAgYnVja2V0SW5kZXgudGV4dENvbnRlbnQgPSBkYXRhWzFdO1xuICAgICAgICAgICAgYnVja2V0VmFsdWUudGV4dENvbnRlbnQgPSBkYXRhWzBdOyBcbiAgICAgICAgICAgIGJ1Y2tldHNJbkZpZWxkW2ldLmFwcGVuZENoaWxkKGJ1Y2tldEluZGV4KTtcbiAgICAgICAgICAgIGJ1Y2tldHNJbkZpZWxkW2ldLmFwcGVuZENoaWxkKGJ1Y2tldFZhbHVlKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnVja2V0c1tpXSAhPT0gbnVsbCAmJiBidWNrZXRzSW5GaWVsZFtpXS5jaGlsZHJlbi5pdGVtKDEpKVxuICAgICAgICB7XG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgY29uc3QgYnVja2V0SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1Y2tldFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYnVja2V0c1tpXTtcbiAgICAgICAgICAgIGJ1Y2tldEluZGV4LnRleHRDb250ZW50ID0gZGF0YVsxXTtcbiAgICAgICAgICAgIGJ1Y2tldFZhbHVlLnRleHRDb250ZW50ID0gZGF0YVswXTsgXG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5hcHBlbmRDaGlsZChidWNrZXRJbmRleCk7XG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5hcHBlbmRDaGlsZChidWNrZXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBidWNrZXRzIH0gZnJvbSBcIi4uL3V0aWxzL0J1Y2tldHNcIjtcbmltcG9ydCB7IENyZWF0ZUJ1Y2tldHMgfSBmcm9tIFwiLi9Eb21Db250ZW50XCI7XG5pbXBvcnQgeyBQbGFjZUluQnVja2V0IH0gZnJvbSBcIi4vRG9tQ29udGVudFwiO1xuXG4vLyBIYXNoTWFwIENsYXNzIFRlc3Q6IFxuZXhwb3J0IGNsYXNzIEhhc2hNYXB7XG4gICAgY29uc3RydWN0b3IodGFibGVfc2l6ZSl7XG4gICAgICAgIHRoaXMudGFibGVfc2l6ZSA9IHRhYmxlX3NpemU7XG4gICAgICAgIHRoaXMuaGFzaENvZGUgPSBudWxsOyBcbiAgICAgICAgdGhpcy5sb2FkRmFjdG9yID0gMC43NTtcbiAgICAgICAgdGhpcy5sb2FkSW5jcmVhc2UgPSAxMDtcbiAgICB9XG5cbiAgICBzdHJpbmdUb051bWJlcihzdHJpbmcpe1xuICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgTW9kIE1ldGhvZCAoSGFzaGluZyBieSBkaXZpc2lvbilcbiAgICAgICAgaGFzaENvZGUgPSBudW1iZXIgJSB0aGlzLnRhYmxlX3NpemU7ICBcblxuICAgICAgICByZXR1cm4gaGFzaENvZGU7XG4gICAgfVxuXG4gICAgaGFzaChrZXkpe1xuICAgICAgICB0aGlzLmhhc2hDb2RlID0gdGhpcy5zdHJpbmdUb051bWJlcihrZXkpO1xuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKXtcbiAgICAgICAgbGV0IHZhbHVlc0luQnVja2V0cyA9IDA7XG4gICAgICAgIGxldCBpbmNyZWFzZUJ1Y2tldHMgPSAwO1xuICAgICAgICBsZXQgcGxhY2VkSW5zaWRlQnVja2V0ID0gZmFsc2U7XG4gICAgICAgIGxldCBpdGVtRm91bmQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIFRlc3QgaWYgdGhlIGhhc2ggY29kZSB2YWx1ZSBpcyBhbHJlYWR5IGluIHRoZSBidWNrZXRzIGZpZWxkLlxuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwgJiYgaXRlbVswXSA9PT0gdmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGUgYnVja2V0cyBmaWVsZCBpbmRleCBoYXMgaW5jcmVhc2VkIGR1ZSB0byB0aGUgbG9hZCBmYWN0b3IuIFxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBrZXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gYnVja2V0c1tpbmRleF0gPSBbdmFsdWUsIGtleV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWNrZXRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVja2V0SXRlbSA9IGJ1Y2tldHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXRJdGVtICE9PSBudWxsICYmIGJ1Y2tldEl0ZW1bMF0gPT09IHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidWNrZXRzW2luZGV4XSA9IFt2YWx1ZSwga2V5XTsgXG5cbiAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWNrZXQtZmllbGQnKTsgXG4gICAgICAgICAgICAgICAgYnVja2V0RmllbGQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgQ3JlYXRlQnVja2V0cygpOyBcbiAgICAgICAgICAgICAgICBQbGFjZUluQnVja2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyBcblxuICAgICAgICBpZiAoKGtleSA8IDAgfHwga2V5ID49IGJ1Y2tldHMubGVuZ3RoKSAmJiAhKGl0ZW1Gb3VuZCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVja2V0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVja2V0c1tpXSA9PT0gbnVsbCAmJiAhcGxhY2VkSW5zaWRlQnVja2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0c1tpXSA9IFt2YWx1ZSwga2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkSW5zaWRlQnVja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYnVja2V0c1tpXSAhPT0gbnVsbCAmJiAhcGxhY2VkSW5zaWRlQnVja2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVBhaXIgPSBidWNrZXRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBhaXJbMV0gPT09IGtleSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0c1tpXSA9IFt2YWx1ZSwga2V5XTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWRJbnNpZGVCdWNrZXQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRlc3QgaWYgdGhlIGJ1Y2tldCBoYXMgcmVhY2hlZCB0aGUgZGVmYXVsdCBsb2FkIGZhY3Rvci4gXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgdGVzdCBjb3VsZCBiZSBpbiBpdHMgb3duIGZ1bmN0aW9uLlxuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVzSW5CdWNrZXRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoKE1hdGguZmxvb3IoYnVja2V0cy5sZW5ndGggKiB0aGlzLmxvYWRGYWN0b3IpKSA9PT0gdmFsdWVzSW5CdWNrZXRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdoaWxlKGluY3JlYXNlQnVja2V0cyA8IHRoaXMubG9hZEluY3JlYXNlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVhc2VCdWNrZXRzKys7XG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldHMubGVuZ3RoICs9IDFcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0c1tidWNrZXRzLmxlbmd0aCAtIDFdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWNrZXQtZmllbGQnKTtcbiAgICAgICAgICAgICAgICBidWNrZXRGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICBDcmVhdGVCdWNrZXRzKCk7XG4gICAgICAgICAgICAgICAgUGxhY2VJbkJ1Y2tldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0KGtleSl7XG4gICAgICAgIGxldCBpdGVtRm91bmQgPSBmYWxzZTsgXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwgJiYgaXRlbVsxXSA9PT0ga2V5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW1Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpdGVtWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbUZvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoYXMoa2V5KXtcbiAgICAgICAgbGV0IGl0ZW1Gb3VuZCA9IGZhbHNlOyBcblxuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIGl0ZW1bMV0gPT09IGtleSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbUZvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmUoa2V5KXtcbiAgICAgICAgbGV0IGl0ZW1Gb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIGl0ZW1bMV0gPT09IGtleSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ1Y2tldHNbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW1Gb3VuZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxlbmd0aCgpe1xuICAgICAgICBsZXQga2V5c09uSGFzaFRhYmxlID0gMDtcblxuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleXNPbkhhc2hUYWJsZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5c09uSGFzaFRhYmxlO1xuICAgIH1cblxuICAgIGNsZWFyKCl7XG4gICAgICAgIGxldCBidWNrZXRJbmRleFJlYWNoZWQgPSAwO1xuXG4gICAgICAgIHdoaWxlIChidWNrZXRJbmRleFJlYWNoZWQgPCAoYnVja2V0cy5sZW5ndGgpKXtcbiAgICAgICAgICAgIGJ1Y2tldHMuc2hpZnQoKTsgXG4gICAgICAgICAgICBidWNrZXRzLnB1c2gobnVsbCk7IFxuICAgICAgICAgICAgYnVja2V0SW5kZXhSZWFjaGVkKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlzKCl7XG4gICAgICAgIGxldCBrZXlzT25IYXNoVGFibGUgPSBbXTtcbiAgICAgICAgYnVja2V0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXlzT25IYXNoVGFibGUucHVzaChpdGVtWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGtleXNPbkhhc2hUYWJsZTtcbiAgICB9XG5cbiAgICB2YWx1ZXMoKXtcbiAgICAgICAgbGV0IHZhbHVlc09uSGFzaFRhYmxlID0gW107XG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVzT25IYXNoVGFibGUucHVzaChpdGVtWzBdKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXNPbkhhc2hUYWJsZTsgXG4gICAgfVxuXG4gICAgZW50cmllcygpe1xuICAgICAgICBsZXQgZW50cmllc09uSGFzaFRhYmxlID0gW107XG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZW50cmllc09uSGFzaFRhYmxlLnB1c2goW2l0ZW1bMF0sIGl0ZW1bMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVudHJpZXNPbkhhc2hUYWJsZTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoTWFwOyIsImV4cG9ydCBsZXQgYnVja2V0cyA9IG5ldyBBcnJheSgxNikuZmlsbChudWxsKTsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBJbml0aWFsaXplRG9tQ29udGVudCB9IGZyb20gXCIuL21vZHVsZXMvRG9tQ29udGVudFwiO1xuXG5pbXBvcnQgJy4vdXRpbHMvc3R5bGUuY3NzJzsgXG5cbkluaXRpYWxpemVEb21Db250ZW50KCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==