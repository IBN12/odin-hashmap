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
}`, "",{"version":3,"sources":["webpack://./src/utils/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,UAAU;IACV,SAAS;AACb;;AAEA,0CAA0C;AAC1C;IACI,sBAAsB;AAC1B;;AAEA,4BAA4B;AAC5B;IACI,sBAAsB;IACtB,4CAAkD;AACtD;;AAEA,kCAAkC;AAClC;IACI,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,mBAAmB;AACnB;IACI,2BAA2B;IAC3B,cAAc;IACd,aAAa;IACb,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,iBAAiB;AACjB;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,6IAA6I;IAC7I,mBAAmB;IACnB,eAAe;AACnB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,mBAAmB;;AAEnB,kEAAkE;AAClE;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA,aAAa;AACb;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,aAAa;;AAEjB;AACA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,6IAA6I;IAC7I,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;IACf,6IAA6I;IAC7I,cAAc;IACd,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,aAAa;AACb;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,6IAA6I;IAC7I,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;IACf,6IAA6I;IAC7I,cAAc;IACd,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,gBAAgB;AAChB;IACI,kCAAkC;IAClC,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,6IAA6I;IAC7I,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;IACf,6IAA6I;IAC7I,cAAc;IACd,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,yBAAyB;AAC7B;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,oBAAoB;AACpB,iDAAiD;AACjD;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,SAAS;;IAET,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA,gBAAgB;AAChB;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,yDAAqD;IACrD,0BAA0B;AAC9B;;AAEA,2BAA2B,2BAA2B;IAClD,UAAU;IACV,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;;AAGA,4KAA4K;AAC5K,4KAA4K;AAC5K,kBAAkB;AAClB;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,8BAA8B;IAC9B,gBAAgB;AACpB;AACA,mBAAmB,oBAAoB;IACnC,yBAAyB;IACzB,aAAa;IACb,mBAAmB;AACvB;AACA,sCAAsC,eAAe;IACjD,0BAA0B;IAC1B,iBAAiB;IACjB,6IAA6I;IAC7I,eAAe;AACnB;AACA,sCAAsC,eAAe;IACjD,6IAA6I;IAC7I,eAAe;AACnB;;AAEA,cAAc;AACd;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,6IAA6I;AACjJ;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,6IAA6I;AACjJ;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,6IAA6I;AACjJ;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,mBAAmB;AACnB;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,iCAAiC;IACjC,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,6IAA6I;IAC7I,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,0BAA0B;AAC9B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,aAAa;AACjB;;;AAGA,4KAA4K;AAC5K,4KAA4K;AAC5K,qBAAqB;AACrB,+EAA+E;AAC/E;IACI;QACI,sDAAsD;IAC1D;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,eAAe;QACf,iBAAiB;QACjB,6IAA6I;QAC7I,YAAY;QACZ,gBAAgB;IACpB;AACJ","sourcesContent":["/* body - The main body for the application. */\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n/* * - All elements for the application. */\n*{\n    box-sizing: border-box;\n}\n\n/* font-0 - Comfortaa font */\n@font-face {\n    font-family: comfortaa;\n    src: url(../fonts/comfortaa/Comfortaa-Regular.ttf);\n}\n\n/* Mobile & Desktop Minimization */\n#mobile-minimization{\n    display: none;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content| */\n#content{\n    /* border: 1px solid red; */\n    margin: 0 auto;\n    width: 1000px;\n    padding: 10px;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Title| */\n.main-title-container{\n    /* border: 1px solid black; */\n    text-align: center;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    letter-spacing: 3px;\n    font-size: 25px;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Input Fields| */\n\n/* input-fields - The parent container for all the input fields. */\n.input-fields{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    \n    /* border: 1px solid orange; */\n    margin-top: 50px;\n}\n\n/* Set Form */\n.set-form{\n    /* border: 1px solid blue; */\n    text-align: center;\n    padding: 10px; \n    \n}\n.set-form > div:nth-child(1) > label{\n    display: block;\n    font-size: 18px;\n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n}\n.set-form > div:nth-child(1) > input{\n    border-radius: 10px;\n    border: 1px solid #94a3b8;\n    padding: 5px 10px 5px 10px;\n    font-size: 15px;\n}\n.set-form > div:nth-child(2) > button{\n    margin-top: 5px;\n    border: 1px solid #94a3b8;\n    border-radius: 10px; \n    padding: 5px 10px 5px 10px; \n    font-size: 15px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n    font-weight: bold; \n}\n.set-form > div:nth-child(2) > button:hover{\n    cursor: pointer; \n    background-color: #f87171;\n    border: 1px solid #f87171; \n}\n.set-form > div:nth-child(2) > button:focus{\n    border-color: #f87171;\n    outline: none;\n}\n.set-form > div:nth-child(1) > input:focus{\n    border-color: #0d9488;\n    outline: none;\n}\n\n/* Get Form */\n.get-form{\n    /* border: 1px solid purple;  */\n    text-align: center;\n    padding: 10px;\n}\n.get-form > div:nth-child(1) > label{\n    display: block;\n    font-size: 18px;\n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n}\n.get-form > div:nth-child(1) > input{\n    border-radius: 10px;\n    border: 1px solid #94a3b8;\n    padding: 5px 10px 5px 10px;\n    font-size: 15px;\n}\n.get-form > div:nth-child(2) > button{\n    margin-top: 5px;\n    border: 1px solid #94a3b8;\n    border-radius: 10px; \n    padding: 5px 10px 5px 10px; \n    font-size: 15px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n    font-weight: bold; \n}\n.get-form > div:nth-child(2) > button:hover{\n    cursor: pointer; \n    background-color: #f87171;\n    border: 1px solid #f87171;\n}\n.get-form > div:nth-child(2) > button:focus{\n    border-color: #f87171;\n    outline: none; \n}\n.get-form > div:nth-child(1) > input:focus{\n    border-color: #0d9488;\n    outline: none;\n}\n\n/* Remove Form */\n.remove-form{\n    /* border: 1px solid lightcoral; */\n    text-align: center;\n    padding: 10px; \n}\n.remove-form > div:nth-child(1) > label{\n    display: block; \n    font-size: 18px;\n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n}\n.remove-form > div:nth-child(1) > input{\n    border-radius: 10px;\n    border: 1px solid #94a3b8;\n    padding: 5px 10px 5px 10px;\n    font-size: 15px;\n}\n.remove-form > div:nth-child(2) > button{\n    margin-top: 5px;\n    border: 1px solid #94a3b8;\n    border-radius: 10px; \n    padding: 5px 10px 5px 10px; \n    font-size: 15px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: #18181b;\n    font-weight: bold; \n}\n.remove-form > div:nth-child(2) > button:hover{\n    cursor: pointer;\n    background-color:#f87171;\n    border: 1px solid #f87171;\n}\n.remove-form > div:nth-child(2) > button:focus{\n    border-color: #f87171;\n    outline: none;\n}\n.remove-form > div:nth-child(1) > input:focus{\n    border-color: #0d9488;\n    outline: none; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Buckets Field| */\n/* buckets-field - The buckets field container. */\n.bucket-field{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    \n    margin-top: 50px;\n    /* border: 1px solid green; */\n    text-align: center; \n}\n\n/* Each bucket */\n.bucket-field > div{\n    width: 150px;\n    height: 150px;\n    /* border: 1px solid black;  */\n    background-image: url('../images/Bucket-cropped.png');\n    background-size: 100% 100%;\n}\n\n.bucket-field > div > div{ /* Bucket index and value */\n    color: red;\n    margin-top: 5px;\n    font-weight: bold;\n    font-size: 18px;\n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Data Fields| */\n.data-field{\n    display: flex;\n    justify-content: center;\n    gap: 10px; \n\n    /* border: 1px solid yellow; */\n    margin-top: 50px;\n}\n.data-field > div{ /* Data Containers */\n    border: 1px solid #94a3b8;\n    padding: 10px; \n    border-radius: 10px;\n}\n.data-field > div > div:nth-child(1){ /* Data Title */\n    text-decoration: underline;\n    font-weight: bold;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 15px; \n}\n.data-field > div > div:nth-child(2){ /* Data Value */\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 15px;\n}\n\n/* Keys Data */\n.keys-data > div:nth-child(2){\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* Values Data */\n.values-data > div:nth-child(2){\n    display: flex;\n    flex-wrap: flex;\n    gap: 10px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* Entries Data */\n.entries-data > div:nth-child(2){\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Button Field| */\n.button-field{\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n\n    /* border: 1px solid lightblue; */\n    margin-top: 50px;\n}\n.button-field > button{ \n    font-size: 15px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    border-radius: 10px; \n    border: 1px solid #94a3b8;\n    cursor: pointer;\n    padding: 5px 10px 5px 10px;\n}\n.button-field > button:hover{\n    background-color: #f87171;\n    border: 1px solid #f87171;\n}\n.button-field > button:focus{\n    border: 1px solid #0d9488;\n    outline: none;  \n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Mobile Section| */\n/* Media-0 - Will display that mobile and desktop minimization doesn't exist. */\n@media only screen and (max-width: 1019px){\n    body{\n        background: linear-gradient(to left, #6441A5, #2a0845);\n    }\n\n    #content{\n        display: none; \n    }\n    \n    #mobile-minimization{\n        display: block;\n        text-align: center; \n        font-size: 20px; \n        font-weight: bold;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white; \n        margin-top: 30px;\n    }\n}"],"sourceRoot":""}]);
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
        console.log('Removal Index: ', number); // Testing
        console.log('Removal Index Type: ', typeof(number)); // Testing 
    
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
        console.log(number); // Testing

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
        console.log('Entered Value: ', string); // Testing 
    
        const hashMapObj = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"](43); 
        hashMapObj.hash(string);
        console.log('The hash code: ', hashMapObj.hashCode); // Testing
    
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
    console.log('Set of buckets in the field: ', bucketField); // Testing
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
            console.log(bucketsInField[i].children.item(0)); // Testing
            console.log(bucketsInField[i].children.item(1)); // Testing

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



/** |Project: HashMap|
 * => Assignment:
 * 1. Start by creating a HashMap class or factory function. It's up to you which you want to use.
 * Then proceed to create the following methods: 
 * 
 * 2. hash takes a value and produces a hash code with it. We did implement a fairly good hash
 * function in the previous lesson. You are free to use that, or if you wish, you can conduct your own
 * research. Beware, this is a deep deep rabbit hole.
 * 
 * Note: Hash maps could accommodate various data types for keys like 
 * numbers, strings, objects. But for this project, only handle keys 
 * of type strings. 
 * 
 * 3. set(key, value) takes two arguments, the first is a key and the second is a value that is assigned
 * to this key. If a key already exists, then the old value is overwritten.
 * 
 * Remember to grow your buckets size when it needs to, by calculating if 
 * your bucket has reached the 'load factor'. 
 * 
 * 4. get(key) takes one argument as a key and returns the value that is assigned to this
 * key. If a key is not found, return null. 
 * 
 * 5. remove(key) takes a key argument. If the given key is in the hash map, it should 
 * remove the entry with that key and return true. If the key isn't in the hash map, it
 * should return false. 
 * 
 * 6. length() returns the number of stored keys in the hash map. 
 * 
 * 7. clear() removes all entries in the hash map. 
 * 
 * 8. keys() returns an array containing all the keys inside the hash map.
 * 
 * 9. values() returns an array containing all the values.
 * 
 * 10. entries() returns an array that contains each 'key', 'value' pair. Example:
 * [[firstKey, firstValue]], [secondKey, secondValue].
 * 
 * Remember that a hash map does not preserve insertion order when you are retrieving your hash map's data.
 * It is normal and expected for keys and values to appear out of the order you inserted them in. 
 */

// HashMap Factory Function Test:
// const HashMap = () => {
//     const testReturn = 1;

//     return {testReturn};
// }

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
        console.log('HashMap Class key: ', key); // Testing
        console.log('HashMap Class value: ', value); // Testing 
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
            console.log('Trying to access index out of bounds.'); // Testing
            console.log('Assigning the value to the most current empty index.'); // Testing 
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

        console.log(_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets) // Testing
        console.log('\n'); // Testing 

        // Test if the bucket has reached the default load factor. 
        // Note: This test could be in its own function.
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if(item !== null)
            {
                valuesInBuckets++;
            }
                
            if ((Math.floor(_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length * this.loadFactor)) === valuesInBuckets)
            {
                // Grow the 'Buckets Array' by a certain size. 
                console.log('Buckets Array Will Grow'); // Testing 
                while(increaseBuckets < this.loadIncrease)
                {
                    increaseBuckets++;
                    _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length += 1
                    _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets[_utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.length - 1] = null;
                }

                console.log('Buckets: ', _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets); // Testing 
                const bucketField = document.querySelector('.bucket-field');
                bucketField.replaceChildren();
                (0,_DomContent__WEBPACK_IMPORTED_MODULE_1__.CreateBuckets)();
                (0,_DomContent__WEBPACK_IMPORTED_MODULE_1__.PlaceInBucket)();
            }
        });
        console.log(valuesInBuckets); // Testing 
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

        console.log('Buckets after clearing entries: ', _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets); // Testing   
        console.log('\n'); // Testing 
    }

    keys(){
        let keysOnHashTable = [];
        _utils_Buckets__WEBPACK_IMPORTED_MODULE_0__.buckets.forEach((item) => {
            if (item !== null)
            {
                keysOnHashTable.push(item[1]);
            }
        });

        console.log('The keys inside the hash map: ', keysOnHashTable); // Testing
        console.log('\n'); // Testing 
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

        console.log('The values inside the hash map: ', valuesOnHashTable); // Testing 
        console.log('\n'); // Testing 
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

        console.log('The entries inside the hash map: ', entriesOnHashTable); // Testing
        console.log('\n'); // Testing
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDRKQUEyRDtBQUN2Ryw0Q0FBNEMsb0lBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1B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Ly4vc3JjL3V0aWxzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vc3JjL3V0aWxzL3N0eWxlLmNzcz8yZGZhIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vc3JjL21vZHVsZXMvRG9tQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvLi9zcmMvbW9kdWxlcy9IYXNoTWFwLmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC8uL3NyYy91dGlscy9CdWNrZXRzLmpzIiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWhhc2htYXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4taGFzaG1hcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1oYXNobWFwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jb21mb3J0YWEvQ29tZm9ydGFhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0J1Y2tldC1jcm9wcGVkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJvZHkgLSBUaGUgbWFpbiBib2R5IGZvciB0aGUgYXBwbGljYXRpb24uICovXG5ib2R5e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiAqIC0gQWxsIGVsZW1lbnRzIGZvciB0aGUgYXBwbGljYXRpb24uICovXG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIGZvbnQtMCAtIENvbWZvcnRhYSBmb250ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4vKiBNb2JpbGUgJiBEZXNrdG9wIE1pbmltaXphdGlvbiAqL1xuI21vYmlsZS1taW5pbWl6YXRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8TWFpbiBDb250ZW50fCAqL1xuI2NvbnRlbnR7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8TWFpbiBUaXRsZXwgKi9cbi5tYWluLXRpdGxlLWNvbnRhaW5lcntcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfElucHV0IEZpZWxkc3wgKi9cblxuLyogaW5wdXQtZmllbGRzIC0gVGhlIHBhcmVudCBjb250YWluZXIgZm9yIGFsbCB0aGUgaW5wdXQgZmllbGRzLiAqL1xuLmlucHV0LWZpZWxkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vKiBTZXQgRm9ybSAqL1xuLnNldC1mb3Jte1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIFxufVxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6ICMxODE4MWI7XG59XG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b257XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IFxuICAgIGZvbnQtc2l6ZTogMTVweDsgXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6ICMxODE4MWI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufVxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NzE3MTsgXG59XG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogI2Y4NzE3MTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogIzBkOTQ4ODtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBHZXQgRm9ybSAqL1xuLmdldC1mb3Jte1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTsgICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogIzE4MTgxYjtcbn1cbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgXG4gICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogIzE4MTgxYjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NzE3MTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg3MTcxO1xufVxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpmb2N1c3tcbiAgICBib3JkZXItY29sb3I6ICNmODcxNzE7XG4gICAgb3V0bGluZTogbm9uZTsgXG59XG4uZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBGb3JtICovXG4ucmVtb3ZlLWZvcm17XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDsgXG59XG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6ICMxODE4MWI7XG59XG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b257XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IFxuICAgIGZvbnQtc2l6ZTogMTVweDsgXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6ICMxODE4MWI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufVxuLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjg3MTcxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmODcxNzE7XG59XG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogI2Y4NzE3MTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogIzBkOTQ4ODtcbiAgICBvdXRsaW5lOiBub25lOyBcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8QnVja2V0cyBGaWVsZHwgKi9cbi8qIGJ1Y2tldHMtZmllbGQgLSBUaGUgYnVja2V0cyBmaWVsZCBjb250YWluZXIuICovXG4uYnVja2V0LWZpZWxke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi8qIEVhY2ggYnVja2V0ICovXG4uYnVja2V0LWZpZWxkID4gZGl2e1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5idWNrZXQtZmllbGQgPiBkaXYgPiBkaXZ7IC8qIEJ1Y2tldCBpbmRleCBhbmQgdmFsdWUgKi9cbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8RGF0YSBGaWVsZHN8ICovXG4uZGF0YS1maWVsZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDsgXG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5kYXRhLWZpZWxkID4gZGl2eyAvKiBEYXRhIENvbnRhaW5lcnMgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZGF0YS1maWVsZCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIERhdGEgVGl0bGUgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE1cHg7IFxufVxuLmRhdGEtZmllbGQgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiBEYXRhIFZhbHVlICovXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4vKiBLZXlzIERhdGEgKi9cbi5rZXlzLWRhdGEgPiBkaXY6bnRoLWNoaWxkKDIpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuLyogVmFsdWVzIERhdGEgKi9cbi52YWx1ZXMtZGF0YSA+IGRpdjpudGgtY2hpbGQoMil7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IGZsZXg7XG4gICAgZ2FwOiAxMHB4OyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuLyogRW50cmllcyBEYXRhICovXG4uZW50cmllcy1kYXRhID4gZGl2Om50aC1jaGlsZCgyKXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEJ1dHRvbiBGaWVsZHwgKi9cbi5idXR0b24tZmllbGR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7ICovXG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5idXR0b24tZmllbGQgPiBidXR0b257IFxuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG59XG4uYnV0dG9uLWZpZWxkID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NzE3MTtcbn1cbi5idXR0b24tZmllbGQgPiBidXR0b246Zm9jdXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBkOTQ4ODtcbiAgICBvdXRsaW5lOiBub25lOyAgXG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8TW9iaWxlIFNlY3Rpb258ICovXG4vKiBNZWRpYS0wIC0gV2lsbCBkaXNwbGF5IHRoYXQgbW9iaWxlIGFuZCBkZXNrdG9wIG1pbmltaXphdGlvbiBkb2Vzbid0IGV4aXN0LiAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE5cHgpe1xuICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNjQ0MUE1LCAjMmEwODQ1KTtcbiAgICB9XG5cbiAgICAjY29udGVudHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXG4gICAgfVxuICAgIFxuICAgICNtb2JpbGUtbWluaW1pemF0aW9ue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICBjb2xvcjogd2hpdGU7IFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91dGlscy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOENBQThDO0FBQzlDO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQSwwQ0FBMEM7QUFDMUM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFrRDtBQUN0RDs7QUFFQSxrQ0FBa0M7QUFDbEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssbUJBQW1CO0FBQ25CO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLGlCQUFpQjtBQUNqQjtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNklBQTZJO0lBQzdJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssbUJBQW1COztBQUVuQixrRUFBa0U7QUFDbEU7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2SUFBNkk7SUFDN0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZiw2SUFBNkk7SUFDN0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7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QUNmLDZJQUE2STtJQUM3SSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7O0FBR0EsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SyxxQkFBcUI7QUFDckIsK0VBQStFO0FBQy9FO0lBQ0k7UUFDSSxzREFBc0Q7SUFDMUQ7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLDZJQUE2STtRQUM3SSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSAtIFRoZSBtYWluIGJvZHkgZm9yIHRoZSBhcHBsaWNhdGlvbi4gKi9cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qICogLSBBbGwgZWxlbWVudHMgZm9yIHRoZSBhcHBsaWNhdGlvbi4gKi9cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBmb250LTAgLSBDb21mb3J0YWEgZm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhO1xcbiAgICBzcmM6IHVybCguLi9mb250cy9jb21mb3J0YWEvQ29tZm9ydGFhLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuLyogTW9iaWxlICYgRGVza3RvcCBNaW5pbWl6YXRpb24gKi9cXG4jbW9iaWxlLW1pbmltaXphdGlvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxNYWluIENvbnRlbnR8ICovXFxuI2NvbnRlbnR7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8TWFpbiBUaXRsZXwgKi9cXG4ubWFpbi10aXRsZS1jb250YWluZXJ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfElucHV0IEZpZWxkc3wgKi9cXG5cXG4vKiBpbnB1dC1maWVsZHMgLSBUaGUgcGFyZW50IGNvbnRhaW5lciBmb3IgYWxsIHRoZSBpbnB1dCBmaWVsZHMuICovXFxuLmlucHV0LWZpZWxkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4vKiBTZXQgRm9ybSAqL1xcbi5zZXQtZm9ybXtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyBcXG4gICAgXFxufVxcbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBsYWJlbHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiAjMTgxODFiO1xcbn1cXG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b257XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyBcXG4gICAgZm9udC1zaXplOiAxNXB4OyBcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogIzE4MTgxYjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbn1cXG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg3MTcxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg3MTcxOyBcXG59XFxuLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjg3MTcxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogIzBkOTQ4ODtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogR2V0IEZvcm0gKi9cXG4uZ2V0LWZvcm17XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTsgICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGxhYmVse1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgY29sb3I6ICMxODE4MWI7XFxufVxcbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmdldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRhM2I4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IFxcbiAgICBmb250LXNpemU6IDE1cHg7IFxcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiAjMTgxODFiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxufVxcbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmODcxNzE7XFxufVxcbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogI2Y4NzE3MTtcXG4gICAgb3V0bGluZTogbm9uZTsgXFxufVxcbi5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dDpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBSZW1vdmUgRm9ybSAqL1xcbi5yZW1vdmUtZm9ybXtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyBcXG59XFxuLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGxhYmVse1xcbiAgICBkaXNwbGF5OiBibG9jazsgXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiAjMTgxODFiO1xcbn1cXG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5yZW1vdmUtZm9ybSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b257XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyBcXG4gICAgZm9udC1zaXplOiAxNXB4OyBcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogIzE4MTgxYjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbn1cXG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4NzE3MTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NzE3MTtcXG59XFxuLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbjpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjg3MTcxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogIzBkOTQ4ODtcXG4gICAgb3V0bGluZTogbm9uZTsgXFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8QnVja2V0cyBGaWVsZHwgKi9cXG4vKiBidWNrZXRzLWZpZWxkIC0gVGhlIGJ1Y2tldHMgZmllbGQgY29udGFpbmVyLiAqL1xcbi5idWNrZXQtZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbn1cXG5cXG4vKiBFYWNoIGJ1Y2tldCAqL1xcbi5idWNrZXQtZmllbGQgPiBkaXZ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9CdWNrZXQtY3JvcHBlZC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbi5idWNrZXQtZmllbGQgPiBkaXYgPiBkaXZ7IC8qIEJ1Y2tldCBpbmRleCBhbmQgdmFsdWUgKi9cXG4gICAgY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfERhdGEgRmllbGRzfCAqL1xcbi5kYXRhLWZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4OyBcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgeWVsbG93OyAqL1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uZGF0YS1maWVsZCA+IGRpdnsgLyogRGF0YSBDb250YWluZXJzICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEzYjg7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZGF0YS1maWVsZCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIERhdGEgVGl0bGUgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDsgXFxufVxcbi5kYXRhLWZpZWxkID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKXsgLyogRGF0YSBWYWx1ZSAqL1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogS2V5cyBEYXRhICovXFxuLmtleXMtZGF0YSA+IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qIFZhbHVlcyBEYXRhICovXFxuLnZhbHVlcy1kYXRhID4gZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7IFxcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qIEVudHJpZXMgRGF0YSAqL1xcbi5lbnRyaWVzLWRhdGEgPiBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEJ1dHRvbiBGaWVsZHwgKi9cXG4uYnV0dG9uLWZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7ICovXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5idXR0b24tZmllbGQgPiBidXR0b257IFxcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0YTNiODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG59XFxuLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NzE3MTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NzE3MTtcXG59XFxuLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbjpmb2N1c3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBkOTQ4ODtcXG4gICAgb3V0bGluZTogbm9uZTsgIFxcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1vYmlsZSBTZWN0aW9ufCAqL1xcbi8qIE1lZGlhLTAgLSBXaWxsIGRpc3BsYXkgdGhhdCBtb2JpbGUgYW5kIGRlc2t0b3AgbWluaW1pemF0aW9uIGRvZXNuJ3QgZXhpc3QuICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE5cHgpe1xcbiAgICBib2R5e1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM2NDQxQTUsICMyYTA4NDUpO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXFxuICAgIH1cXG4gICAgXFxuICAgICNtb2JpbGUtbWluaW1pemF0aW9ue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyBcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICAgICAgY29sb3I6IHdoaXRlOyBcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSGFzaE1hcCBmcm9tIFwiLi9IYXNoTWFwXCI7XG5pbXBvcnQgeyBidWNrZXRzIH0gZnJvbSBcIi4uL3V0aWxzL0J1Y2tldHNcIjtcblxuLy8gSW50aWFsaXplRG9tQ29udGVudCgpOiBXaWxsIGluaXRpYWxpemUgYWxsIGRvbSBjb250ZW50IGludG8gdGhlIGFwcGxpY2F0aW9uLlxuZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxpemVEb21Db250ZW50KCl7XG4gICAgTm9kZVJlZmVyZW5jZXMoKTtcbn1cblxuLy8gTm9kZVJlZmVyZW5jZXMoKTogQWxsIG5vZGUgdmFsdWVzLlxuZnVuY3Rpb24gTm9kZVJlZmVyZW5jZXMoKXtcbiAgICBDcmVhdGVNYWluVGl0bGUoKTtcblxuICAgIENyZWF0ZUlucHV0RmllbGRzKCk7XG5cbiAgICBDcmVhdGVCdXR0b25GaWVsZCgpO1xuXG4gICAgQ3JlYXRlRGF0YUZpZWxkKCk7XG4gICAgXG4gICAgQ3JlYXRlQnVja2V0RmllbGQoKTtcbiAgICBcbiAgICBDcmVhdGVCdWNrZXRzKCk7XG5cbiAgICBQbGFjZUluQnVja2V0KCk7IFxufVxuXG4vLyBDcmVhdGVEYXRhRmllbGQoKTogVGhlIGRhdGEgZmllbGQgd2lsbCBkaXNwbGF5IGFsbCB0aGUgZGF0YSBvdXRwdXQgZGF0YSBmcm9tIHRoZSBidWNrZXQgZmllbGQuIFxuZnVuY3Rpb24gQ3JlYXRlRGF0YUZpZWxkKCl7XG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0YUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2RhdGEtZmllbGQnKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRhdGFGaWVsZCk7XG5cbiAgICBEaXNwbGF5R2V0RGF0YShudWxsKTsgXG5cbiAgICBEaXNwbGF5RGF0YUV4aXN0KG51bGwpO1xuXG4gICAgRGlzcGxheVJlbW92ZWREYXRhKG51bGwpO1xufVxuXG4vLyBEaXNwbGF5UmVtb3ZlZEtleSgpOiBcbmZ1bmN0aW9uIERpc3BsYXlSZW1vdmVkRGF0YSh2YWx1ZVJlbW92ZWQpe1xuICAgIGNvbnN0IHJlbW92ZURhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHJlbW92ZURhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjb25zdCByZW1vdmVEYXRhVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7XG5cbiAgICByZW1vdmVEYXRhVGl0bGUudGV4dENvbnRlbnQgPSBcIkRhdGEgUmVtb3ZlZFwiO1xuICAgIGlmICh2YWx1ZVJlbW92ZWQgPT09IG51bGwpXG4gICAge1xuICAgICAgICByZW1vdmVEYXRhVmFsdWUudGV4dENvbnRlbnQgPSAnTi9BJzsgXG4gICAgfVxuICAgIGVsc2UgXG4gICAge1xuICAgICAgICByZW1vdmVEYXRhVmFsdWUudGV4dENvbnRlbnQgPSBgJHt2YWx1ZVJlbW92ZWR9YDtcbiAgICB9XG5cbiAgICByZW1vdmVEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZURhdGFUaXRsZSk7XG4gICAgcmVtb3ZlRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVEYXRhVmFsdWUpOyBcblxuICAgIGRhdGFGaWVsZC5hcHBlbmRDaGlsZChyZW1vdmVEYXRhQ29udGFpbmVyKTsgXG59XG5cbi8vIERpc3BsYXlHZXREYXRhKCk6XG5mdW5jdGlvbiBEaXNwbGF5R2V0RGF0YSh2YWx1ZSl7XG4gICAgY29uc3QgZ2V0RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IGdldERhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdldERhdGFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtZmllbGQnKTtcblxuICAgIGdldERhdGFUaXRsZS50ZXh0Q29udGVudCA9IFwiSGFzaCBWYWx1ZVwiO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbClcbiAgICB7XG4gICAgICAgIGdldERhdGFWYWx1ZS50ZXh0Q29udGVudCA9ICdOL0EnOyBcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2V0RGF0YVZhbHVlLnRleHRDb250ZW50ID0gYCR7dmFsdWV9YDtcbiAgICB9XG5cbiAgICBnZXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGdldERhdGFUaXRsZSk7XG4gICAgZ2V0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXREYXRhVmFsdWUpOyBcblxuICAgIFxuICAgIGRhdGFGaWVsZC5hcHBlbmRDaGlsZChnZXREYXRhQ29udGFpbmVyKTsgXG59XG5cbi8vIERpc3BsYXlEYXRhRXhpc3QoKTpcbmZ1bmN0aW9uIERpc3BsYXlEYXRhRXhpc3QoaGFzRGF0YSl7XG4gICAgY29uc3QgZGF0YUV4aXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgY29uc3QgZGF0YUV4aXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgZGF0YUV4aXN0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7XG5cbiAgICBkYXRhRXhpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRGF0YSBFeGlzdFwiO1xuICAgIGlmIChoYXNEYXRhID09PSBudWxsKVxuICAgIHtcbiAgICAgICAgZGF0YUV4aXN0VmFsdWUudGV4dENvbnRlbnQgPSAnTi9BJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaGFzRGF0YSlcbiAgICB7XG4gICAgICAgIGRhdGFFeGlzdFZhbHVlLnRleHRDb250ZW50ID0gYCR7aGFzRGF0YX1gOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoIWhhc0RhdGEpXG4gICAge1xuICAgICAgICBkYXRhRXhpc3RWYWx1ZS50ZXh0Q29udGVudCA9IGAke2hhc0RhdGF9YDsgXG4gICAgfVxuXG4gICAgZGF0YUV4aXN0LmFwcGVuZENoaWxkKGRhdGFFeGlzdFRpdGxlKTtcbiAgICBkYXRhRXhpc3QuYXBwZW5kQ2hpbGQoZGF0YUV4aXN0VmFsdWUpO1xuXG4gICAgZGF0YUZpZWxkLmFwcGVuZENoaWxkKGRhdGFFeGlzdCk7IFxufVxuXG4vLyBDcmVhdGVNYWluVGl0bGUoKTogQ3JlYXRlcyB0aGUgbWFpbiB0aXRsZSBsb2dvLlxuZnVuY3Rpb24gQ3JlYXRlTWFpblRpdGxlKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBtYWluVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi10aXRsZS1jb250YWluZXInKTsgXG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSAnSGFzaE1hcCBUYWJsZSc7XG4gICAgbWFpblRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5UaXRsZUNvbnRhaW5lcik7IFxufVxuXG4vLyBDcmVhdGVJbnB1dEZpZWxkKCk6IENyZWF0ZXMgdGhlIGlucHV0IGZpZWxkIGZvciB0aGUgdXNlciB0byBlbnRlciBzdHJpbmdzLiBcbmZ1bmN0aW9uIENyZWF0ZUlucHV0RmllbGRzKCl7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgaW5wdXRGaWVsZHMuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmllbGRzJyk7IFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0RmllbGRzKTsgXG5cbiAgICBDcmVhdGVTZXRGaWVsZCgpO1xuICAgIFNldEJ1dHRvbigpO1xuXG4gICAgQ3JlYXRlR2V0RmllbGQoKTsgXG4gICAgR2V0QnV0dG9uKCk7IFxuXG4gICAgQ3JlYXRlUmVtb3ZlRmllbGQoKTtcbiAgICBSZW1vdmVCdXR0b24oKTsgXG59XG5cbi8vIENyZWF0ZVNldEZpZWxkKCk6IERhdGEgY2FuIGJlIGVudGVyZWQgaW50byBidWNrZXRzIHVzaW5nIHRoaXMgZmllbGQuIFxuZnVuY3Rpb24gQ3JlYXRlU2V0RmllbGQoKXtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZHMnKTsgXG5cbiAgICBjb25zdCBzZXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyBcbiAgICBzZXRGb3JtLmNsYXNzTGlzdC5hZGQoJ3NldC1mb3JtJyk7IFxuXG4gICAgY29uc3QgZm9ybVNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtU2VjdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRW50ZXIgRmlyc3QgTmFtZXMgSGVyZSc7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpOyBcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhMZW5ndGgnLCBgJHszMH1gKTsgXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIGAke3RydWV9YCk7IFxuXG4gICAgZm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKGlucHV0KTsgXG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGZvcm1TZWN0aW9uVHdvLmFwcGVuZENoaWxkKHN1Ym1pdCk7IFxuXG4gICAgc2V0Rm9ybS5hcHBlbmRDaGlsZChmb3JtU2VjdGlvbk9uZSk7IFxuICAgIHNldEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVNlY3Rpb25Ud28pO1xuXG4gICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoc2V0Rm9ybSk7XG59XG5cbi8vIENyZWF0ZUdldEZpZWxkKCk6IENyZWF0ZXMgdGhlIGdldCBmaWVsZCBmb3IgdGhlIHVzZXIgZ2F0aGVyIGRhdGEgZnJvbSB0aGUgaGFzaCBtYXAgdGFibGUuXG5mdW5jdGlvbiBDcmVhdGVHZXRGaWVsZCgpe1xuICAgIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkcycpOyBcblxuICAgIGNvbnN0IGdldEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZ2V0Rm9ybS5jbGFzc0xpc3QuYWRkKCdnZXQtZm9ybScpOyBcblxuICAgIGNvbnN0IGdldEZvcm1TZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ2V0Rm9ybVNlY3Rpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGdldExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgXG4gICAgZ2V0TGFiZWwudGV4dENvbnRlbnQgPSAnRW50ZXIgSGFzaCBLZXkgVG8gR2V0IERhdGEgRnJvbSBUYWJsZSc7XG4gICAgZ2V0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZ2V0LW5hbWUnKTtcblxuICAgIGNvbnN0IGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZ2V0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICBnZXQuc2V0QXR0cmlidXRlKCdpZCcsICdnZXQtbmFtZScpO1xuICAgIGdldC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZ2V0TmFtZScpOyBcbiAgICBnZXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIGAke3RydWV9YCk7IFxuXG4gICAgZ2V0Rm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQoZ2V0TGFiZWwpO1xuICAgIGdldEZvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKGdldCk7IFxuXG4gICAgY29uc3QgZ2V0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZ2V0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBnZXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JzsgXG5cbiAgICBnZXRGb3JtU2VjdGlvblR3by5hcHBlbmRDaGlsZChnZXRTdWJtaXQpO1xuXG4gICAgZ2V0Rm9ybS5hcHBlbmRDaGlsZChnZXRGb3JtU2VjdGlvbk9uZSk7IFxuICAgIGdldEZvcm0uYXBwZW5kQ2hpbGQoZ2V0Rm9ybVNlY3Rpb25Ud28pOyBcblxuICAgIGlucHV0RmllbGRzLmFwcGVuZENoaWxkKGdldEZvcm0pOyBcbn1cblxuLy8gQ3JlYXRlUmVtb3ZlRmllbGQoKTogQ2FuIHJlbW92ZSBidWNrZXQgZGF0YSB1c2luZyB0aGlzIGZpZWxkLiBcbmZ1bmN0aW9uIENyZWF0ZVJlbW92ZUZpZWxkKCl7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGRzJyk7IFxuXG4gICAgY29uc3QgcmVtb3ZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICByZW1vdmVGb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1mb3JtJyk7XG5cbiAgICBjb25zdCByZW1vdmVGb3JtU2VjdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlbW92ZUZvcm1TZWN0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgY29uc3QgcmVtb3ZlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHJlbW92ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JlbW92ZS1uYW1lJyk7XG4gICAgcmVtb3ZlTGFiZWwudGV4dENvbnRlbnQgPSAnRW50ZXIgS2V5IFRvIFJlbW92ZSBJdCBGcm9tIFRhYmxlJztcblxuICAgIGNvbnN0IHJlbW92ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXG4gICAgcmVtb3ZlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpOyBcbiAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbW92ZS1uYW1lJyk7XG4gICAgcmVtb3ZlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3JlbW92ZU5hbWUnKTtcbiAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgYCR7dHJ1ZX1gKTsgXG5cbiAgICByZW1vdmVGb3JtU2VjdGlvbk9uZS5hcHBlbmRDaGlsZChyZW1vdmVMYWJlbCk7IFxuICAgIHJlbW92ZUZvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKHJlbW92ZUlucHV0KTtcblxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7IFxuICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgICByZW1vdmVGb3JtU2VjdGlvblR3by5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuXG4gICAgcmVtb3ZlRm9ybS5hcHBlbmRDaGlsZChyZW1vdmVGb3JtU2VjdGlvbk9uZSk7IFxuICAgIHJlbW92ZUZvcm0uYXBwZW5kQ2hpbGQocmVtb3ZlRm9ybVNlY3Rpb25Ud28pOyBcblxuICAgIGlucHV0RmllbGRzLmFwcGVuZENoaWxkKHJlbW92ZUZvcm0pOyBcbn1cblxuLy8gUmVtb3ZlQnV0dG9uKCk6IFxuZnVuY3Rpb24gUmVtb3ZlQnV0dG9uKCl7XG4gICAgY29uc3QgcmVtb3ZlU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbicpO1xuXG4gICAgcmVtb3ZlU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVtb3ZlVmFsdWUpO1xufVxuXG4vLyBSZW1vdmVWYWx1ZSgpOlxuZnVuY3Rpb24gUmVtb3ZlVmFsdWUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVtb3ZlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW5wdXQnKTtcbiAgICBjb25zdCBidWNrZXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWNrZXQtZmllbGQnKTsgXG4gICAgY29uc3QgcmVtb3ZlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtZm9ybScpO1xuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7IFxuICAgIFxuICAgIGlmIChyZW1vdmVJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAge1xuICAgICAgICByZW1vdmVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnRlciBhIG51bWVyaWNhbCB2YWx1ZSBmaXJzdC5cIik7XG4gICAgICAgIHJlbW92ZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7IFxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBsZXQgbnVtYmVyID0gTnVtYmVyKHJlbW92ZUlucHV0LnZhbHVlKTtcblxuICAgICAgICByZW1vdmVGb3JtLnJlc2V0KCk7IFxuXG4gICAgICAgIGNvbnN0IEhhc2hNYXBPYmogPSBuZXcgSGFzaE1hcCg0Myk7IFxuICAgIFxuICAgICAgICBkYXRhRmllbGQucmVwbGFjZUNoaWxkcmVuKCk7IFxuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZhbCBJbmRleDogJywgbnVtYmVyKTsgLy8gVGVzdGluZ1xuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZhbCBJbmRleCBUeXBlOiAnLCB0eXBlb2YobnVtYmVyKSk7IC8vIFRlc3RpbmcgXG4gICAgXG4gICAgICAgIERpc3BsYXlSZW1vdmVkRGF0YShIYXNoTWFwT2JqLnJlbW92ZShudW1iZXIpKTsgXG4gICAgICAgIGJ1Y2tldEZpZWxkLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBDcmVhdGVCdWNrZXRzKCk7XG4gICAgICAgIFBsYWNlSW5CdWNrZXQoKTtcbiAgICB9XG59XG5cbi8vIEdldEJ1dHRvbigpOiBJbnB1dCBmaWVsZCB0aGF0IHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgaGFzaCBtYXAgdGFibGUuXG5mdW5jdGlvbiBHZXRCdXR0b24oKXtcbiAgICBjb25zdCBnZXRTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uJyk7XG5cbiAgICBnZXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHZXRWYWx1ZSk7IFxufVxuXG4vLyBHZXRLZXkoKTogRnVuY3Rpb24gd2lsbCBhbGxvdyB0aGUgdXNlciBnZXQgdGhlIHZhbHVlIGJ5IHN1Ym1pdHRpbmcgdGhlIGNvcnJlY3Qga2V5LiBcbmZ1bmN0aW9uIEdldFZhbHVlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgXG5cbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpOyBcbiAgICBjb25zdCBnZXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dCcpO1xuICAgIGNvbnN0IGdldEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWZvcm0nKTtcblxuICAgIGlmIChnZXRJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAge1xuICAgICAgICBnZXRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnRlciBhIG51bWVyaWNhbCB2YWx1ZSBmaXJzdC5cIik7XG4gICAgICAgIGdldElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBudW1iZXIgPSBOdW1iZXIoZ2V0SW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIpOyAvLyBUZXN0aW5nXG5cbiAgICAgICAgZ2V0Rm9ybS5yZXNldCgpOyBcblxuICAgICAgICBjb25zdCBIYXNoTWFwT2JqID0gbmV3IEhhc2hNYXAoNDMpOyBcbiAgICBcbiAgICAgICAgZGF0YUZpZWxkLnJlcGxhY2VDaGlsZHJlbigpOyAvLyBPdmVyYWxsIFBhcmVudCByZXBsYWNpbmcgYWxsIGNoaWxkIG5vZGVzLiBcbiAgICAgICAgRGlzcGxheUdldERhdGEoSGFzaE1hcE9iai5nZXQobnVtYmVyKSk7IC8vIE5vdGU6IE1heSBOZWVkIHRvIHJlc2V0IGF0IHNvbWUgcG9pbnQgZm9yIG5ldyBkYXRhLiBcbiAgICAgICAgRGlzcGxheURhdGFFeGlzdChIYXNoTWFwT2JqLmhhcyhudW1iZXIpKTtcbiAgICB9XG59XG5cbi8vIENyZWF0ZUJ1dHRvbkZpZWxkKCk6IENyZWF0ZXMgYnV0dG9uIGZpZWxkIHRvIG91dHB1dCBkYXRhLiBcbmZ1bmN0aW9uIENyZWF0ZUJ1dHRvbkZpZWxkKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkZpZWxkLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1maWVsZCcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25GaWVsZCk7XG5cbiAgICBDcmVhdGVMZW5ndGhCdXR0b24oKTtcbiAgICBMZW5ndGhCdXR0b24oKTtcblxuICAgIENyZWF0ZUNsZWFyQnV0dG9uKCk7XG4gICAgQ2xlYXJCdXR0b24oKTtcblxuICAgIENyZWF0ZUtleXNCdXR0b24oKTtcbiAgICBLZXlzQnV0dG9uKCk7IFxuXG4gICAgQ3JlYXRlVmFsdWVzQnV0dG9uKCk7IFxuICAgIFZhbHVlc0J1dHRvbigpOyBcblxuICAgIENyZWF0ZUVudHJpZXNCdXR0b24oKTtcbiAgICBFbnRyaWVzQnV0dG9uKCk7IFxufVxuXG4vLyBDcmVhdGVMZW5ndGhCdXR0b24oKTogTGVuZ3RoIGJ1dHRvbiB3aWxsIG91dHB1dCBhbGwgdGhlIG51bWJlciBvZiBrZXlzIGluc2lkZSB0aGUgaGFzaCBtYXAuXG5mdW5jdGlvbiBDcmVhdGVMZW5ndGhCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQnKTtcblxuICAgIGNvbnN0IGxlbmd0aEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBsZW5ndGhCdXR0b24udGV4dENvbnRlbnQgPSAnTGVuZ3RoJztcblxuICAgIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKGxlbmd0aEJ1dHRvbik7IFxufVxuXG4vLyBMZW5ndGhCdXR0b24oKTogVXNlciBsZW5ndGggYnV0dG9uLlxuZnVuY3Rpb24gTGVuZ3RoQnV0dG9uKCl7XG4gICAgY29uc3QgbGVuZ3RoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTsgXG5cbiAgICBsZW5ndGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5TGVuZ3RoRGF0YSk7XG59XG5cbi8vIERpc3BsYXlMZW5ndGhEYXRhKCk6IERpc3BsYXlzIHRoZSBsZW5ndGggZGF0YS4gXG5mdW5jdGlvbiBEaXNwbGF5TGVuZ3RoRGF0YSgpe1xuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7XG5cbiAgICBjb25zdCBsZW5ndGhEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGNvbnN0IGxlbmd0aERhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxlbmd0aERhdGFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTtcbiAgICBcbiAgICBsZW5ndGhEYXRhVGl0bGUudGV4dENvbnRlbnQgPSAnTGVuZ3RoJ1xuICAgIGxlbmd0aERhdGFWYWx1ZS50ZXh0Q29udGVudCA9IGAke0hhc2hNYXBPYmoubGVuZ3RoKCl9YDtcblxuICAgIGxlbmd0aERhdGEuYXBwZW5kQ2hpbGQobGVuZ3RoRGF0YVRpdGxlKTtcbiAgICBsZW5ndGhEYXRhLmFwcGVuZENoaWxkKGxlbmd0aERhdGFWYWx1ZSk7XG5cbiAgICBkYXRhRmllbGQucmVwbGFjZUNoaWxkcmVuKCk7IFxuICAgIGRhdGFGaWVsZC5hcHBlbmRDaGlsZChsZW5ndGhEYXRhKTsgXG59XG5cbi8vIENyZWF0ZUNsZWFyQnV0dG9uKCk6IENyZWF0ZXMgYSBjbGVhciBidXR0b24gdGhhdCB3aWxsIHJlbW92ZSBhbGwgdGhlIGVudHJpZXMgaW4gdGhlIGhhc2ggbWFwLlxuZnVuY3Rpb24gQ3JlYXRlQ2xlYXJCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQnKTtcblxuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsZWFyJztcblxuICAgIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKGNsZWFyQnV0dG9uKTtcbn1cblxuLy8gQ2xlYXJCdXR0b24oKTogVXNlciBjbGVhciBidXR0b24uIFxuZnVuY3Rpb24gQ2xlYXJCdXR0b24oKXtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuICAgIFxuICAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2xlYXJEYXRhKTtcbn1cblxuLy8gQ2xlYXJEYXRhKCk6IENsZWFycyBhbGwgdGhlIGtleSBlbnRyaWVzIGluIHRoZSBoYXNoIG1hcC5cbmZ1bmN0aW9uIENsZWFyRGF0YSgpe1xuICAgIGNvbnN0IGJ1Y2tldEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1Y2tldC1maWVsZCcpO1xuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7XG5cbiAgICBjb25zdCBIYXNoTWFwT2JqID0gbmV3IEhhc2hNYXAoNDMpO1xuXG4gICAgSGFzaE1hcE9iai5jbGVhcigpOyBcbiAgICBidWNrZXRGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBkYXRhRmllbGQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBEaXNwbGF5R2V0RGF0YShudWxsKTtcbiAgICBEaXNwbGF5RGF0YUV4aXN0KG51bGwpO1xuICAgIERpc3BsYXlSZW1vdmVkRGF0YShudWxsKTtcblxuICAgIENyZWF0ZUJ1Y2tldHMoKTtcbiAgICBQbGFjZUluQnVja2V0KCk7ICAgICBcbn1cblxuLy8gQ3JlYXRlS2V5c0J1dHRvbigpOiBDcmVhdGVzIGEga2V5cyBidXR0b24gdGhhdCB3aWxsIHJldHVybiBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUga2V5cyBvbiB0aGUgaGFzaCB0YWJsZS5cbmZ1bmN0aW9uIENyZWF0ZUtleXNCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQnKTtcblxuICAgIGNvbnN0IGtleXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBrZXlzQnV0dG9uLnRleHRDb250ZW50ID0gJ0tleXMnO1xuXG4gICAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQoa2V5c0J1dHRvbik7IFxufVxuXG4vLyBLZXlzQnV0dG9uKCk6IFVzZXIga2V5cyBidXR0b24uXG5mdW5jdGlvbiBLZXlzQnV0dG9uKCl7XG4gICAgY29uc3Qga2V5c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQgPiBidXR0b246bnRoLWNoaWxkKDMpJyk7XG4gICAgXG4gICAga2V5c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlLZXlzKTtcbn1cblxuLy8gRGlzcGxheUtleXMoKTogV2lsbCB0aGUgbnVtYmVyIG9mIGtleXMgb24gdGhlIGhhc2ggdGFibGUuXG5mdW5jdGlvbiBEaXNwbGF5S2V5cygpe1xuICAgIGNvbnN0IGRhdGFGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWZpZWxkJyk7XG5cbiAgICBjb25zdCBIYXNoTWFwT2JqID0gbmV3IEhhc2hNYXAoNDMpO1xuICAgIGNvbnN0IGtleXNPbkhhc2hUYWJsZSA9IEhhc2hNYXBPYmoua2V5cygpO1xuXG4gICAgY29uc3Qga2V5c0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlzRGF0YS5jbGFzc0xpc3QuYWRkKCdrZXlzLWRhdGEnKTsgXG5cbiAgICBjb25zdCBrZXlzRGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5c0RhdGFUaXRsZS50ZXh0Q29udGVudCA9IFwiS2V5cyBPbiBIYXNoIFRhYmxlXCI7XG5cbiAgICBjb25zdCBrZXlzRGF0YVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAga2V5c0RhdGEuYXBwZW5kQ2hpbGQoa2V5c0RhdGFUaXRsZSk7IFxuICAgIGtleXNEYXRhLmFwcGVuZENoaWxkKGtleXNEYXRhVmFsdWUpOyBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c09uSGFzaFRhYmxlLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGtleS50ZXh0Q29udGVudCA9IGAke2tleXNPbkhhc2hUYWJsZVtpXX1gO1xuICAgICAgICBcbiAgICAgICAga2V5c0RhdGFWYWx1ZS5hcHBlbmRDaGlsZChrZXkpOyBcbiAgICB9XG5cbiAgICBkYXRhRmllbGQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgZGF0YUZpZWxkLmFwcGVuZENoaWxkKGtleXNEYXRhKTtcbn1cblxuLy8gQ3JlYXRlVmFsdWVzQnV0dG9uKCk6IFdpbGwgY3JlYXRlIGEgYnV0dG9uIHRoYXQgd2lsbCByZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHZhbHVlcy5cbmZ1bmN0aW9uIENyZWF0ZVZhbHVlc0J1dHRvbigpe1xuICAgIGNvbnN0IGJ1dHRvbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1maWVsZCcpOyBcblxuICAgIGNvbnN0IHZhbHVlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICB2YWx1ZXNCdXR0b24udGV4dENvbnRlbnQgPSAnVmFsdWVzJztcblxuICAgIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKHZhbHVlc0J1dHRvbik7XG59XG5cbi8vIFZhbHVlc0J1dHRvbigpOiBVc2VyIHZhbHVlcyBCdXR0b24gXG5mdW5jdGlvbiBWYWx1ZXNCdXR0b24oKXtcbiAgICBjb25zdCB2YWx1ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWZpZWxkID4gYnV0dG9uOm50aC1jaGlsZCg0KScpO1xuXG4gICAgdmFsdWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheVZhbHVlcyk7IFxufVxuXG4vLyBEaXNwbGF5VmFsdWVzKCk6IFdpbGwgZGlzcGxheSBhbGwgdGhlIHZhbHVlcyBvbiB0aGUgaGFzaCB0YWJsZS4gXG5mdW5jdGlvbiBEaXNwbGF5VmFsdWVzKCl7XG4gICAgY29uc3QgZGF0YUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtZmllbGQnKTtcblxuICAgIGNvbnN0IHZhbHVlc0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YWx1ZXNEYXRhLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlcy1kYXRhJyk7XG5cbiAgICBjb25zdCB2YWx1ZXNEYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgdmFsdWVzRGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1ZhbHVlcyBPbiBIYXNoIFRhYmxlJztcblxuICAgIGNvbnN0IHZhbHVlc0RhdGFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgIHZhbHVlc0RhdGEuYXBwZW5kQ2hpbGQodmFsdWVzRGF0YVRpdGxlKTsgXG4gICAgdmFsdWVzRGF0YS5hcHBlbmRDaGlsZCh2YWx1ZXNEYXRhVmFsdWUpO1xuXG4gICAgY29uc3QgSGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTsgXG4gICAgY29uc3QgdmFsdWVzT25IYXNoVGFibGUgPSBIYXNoTWFwT2JqLnZhbHVlcygpOyBcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPbkhhc2hUYWJsZS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gYCR7dmFsdWVzT25IYXNoVGFibGVbaV19YDsgXG4gICAgICAgIHZhbHVlc0RhdGFWYWx1ZS5hcHBlbmRDaGlsZCh2YWx1ZSk7IFxuICAgIH1cblxuICAgIGRhdGFGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTsgXG4gICAgZGF0YUZpZWxkLmFwcGVuZENoaWxkKHZhbHVlc0RhdGEpO1xufVxuXG4vLyBDcmVhdGVzRW50cmllc0J1dHRvbigpOiBXaWxsIGNyZWF0ZSBhIGVudHJpZXMgYnV0dG9uIHRoYXQgcmV0dXJucyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGVhY2gga2V5IGFuZCB2YWx1ZSBwYWlyLiBcbmZ1bmN0aW9uIENyZWF0ZUVudHJpZXNCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZmllbGQnKTtcbiAgICBcbiAgICBjb25zdCBlbnRyaWVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZW50cmllc0J1dHRvbi50ZXh0Q29udGVudCA9ICdFbnRyaWVzJzsgXG5cbiAgICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChlbnRyaWVzQnV0dG9uKTsgXG59XG5cbi8vIEVudHJpZXNCdXR0b24oKTogVXNlciBlbnRyaWVzIGJ1dHRvbi5cbmZ1bmN0aW9uIEVudHJpZXNCdXR0b24oKXtcbiAgICBjb25zdCBlbnRyaWVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1maWVsZCA+IGJ1dHRvbjpudGgtY2hpbGQoNSknKTsgXG5cbiAgICBlbnRyaWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUVudHJpZXMpO1xufVxuXG4vLyBEaXNwbGF5RW50cmllcygpOiBXaWxsIGRpc3BsYXkgYWxsIHRoZSBrZXkgYW5kIHZhbHVlIHBhaXJzIG9uIHRoZSBoYXNoIHRhYmxlLlxuZnVuY3Rpb24gRGlzcGxheUVudHJpZXMoKXtcbiAgICBjb25zdCBkYXRhRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1maWVsZCcpOyBcblxuICAgIGNvbnN0IGVudHJpZXNEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW50cmllc0RhdGEuY2xhc3NMaXN0LmFkZCgnZW50cmllcy1kYXRhJyk7XG5cbiAgICBjb25zdCBlbnRyaWVzRGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW50cmllc0RhdGFUaXRsZS50ZXh0Q29udGVudCA9IFwiRW50cmllcyBPbiBIYXNoIFRhYmxlXCI7XG5cbiAgICBjb25zdCBlbnRyaWVzRGF0YVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgZW50cmllc0RhdGEuYXBwZW5kQ2hpbGQoZW50cmllc0RhdGFUaXRsZSk7XG4gICAgZW50cmllc0RhdGEuYXBwZW5kQ2hpbGQoZW50cmllc0RhdGFWYWx1ZSk7XG5cbiAgICBjb25zdCBIYXNoTWFwT2JqID0gbmV3IEhhc2hNYXAoNDMpO1xuICAgIGNvbnN0IGVudHJpZXNPbkhhc2hUYWJsZSA9IEhhc2hNYXBPYmouZW50cmllcygpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzT25IYXNoVGFibGUubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGBbJHtlbnRyaWVzT25IYXNoVGFibGVbaV19XWA7XG4gICAgICAgIGVudHJpZXNEYXRhVmFsdWUuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgIH0gXG5cbiAgICBkYXRhRmllbGQucmVwbGFjZUNoaWxkcmVuKCk7IFxuICAgIGRhdGFGaWVsZC5hcHBlbmRDaGlsZChlbnRyaWVzRGF0YSk7XG59XG5cblxuLy8gU3VibWl0QnV0dG9uKCk6IFRoZSBzdWJtaXQgYnV0dG9uIHRvIGVudGVyIGRhdGEuIFxuZnVuY3Rpb24gU2V0QnV0dG9uKCl7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC1mb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbicpO1xuICAgIFxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFN1Ym1pdEtleSk7XG59XG5cbi8vIFN1Ym1pdEtleSgpOiBXaWxsIHN1Ym1pdCBkYXRhIGludG8gdGhlIGhhc2htYXAgZmllbGQuIFxuZnVuY3Rpb24gU3VibWl0S2V5KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtZm9ybSA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbnB1dCcpOyBcbiAgICBjb25zdCBzZXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC1mb3JtJyk7IFxuICAgIFxuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAge1xuICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgbmFtZSBmaXJzdC4nKTtcbiAgICAgICAgaW5wdXQucmVwb3J0VmFsaWRpdHkoKTsgXG4gICAgfVxuICAgIGVsc2UgaWYgKE51bWJlcihpbnB1dC52YWx1ZSkpXG4gICAge1xuICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIkNhbid0IHVzZSBudW1lcmljYWwgdmFsdWVzIGluIHRoaXMgZmllbGQuXCIpOyBcbiAgICAgICAgaW5wdXQucmVwb3J0VmFsaWRpdHkoKTsgXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcblxuICAgICAgICBzZXRGb3JtLnJlc2V0KCk7IFxuICAgICAgICBjb25zb2xlLmxvZygnRW50ZXJlZCBWYWx1ZTogJywgc3RyaW5nKTsgLy8gVGVzdGluZyBcbiAgICBcbiAgICAgICAgY29uc3QgaGFzaE1hcE9iaiA9IG5ldyBIYXNoTWFwKDQzKTsgXG4gICAgICAgIGhhc2hNYXBPYmouaGFzaChzdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGhhc2ggY29kZTogJywgaGFzaE1hcE9iai5oYXNoQ29kZSk7IC8vIFRlc3RpbmdcbiAgICBcbiAgICAgICAgaGFzaE1hcE9iai5zZXQoaGFzaE1hcE9iai5oYXNoQ29kZSwgc3RyaW5nKTtcbiAgICAgICAgXG4gICAgICAgIFBsYWNlSW5CdWNrZXQoKTsgXG4gICAgfVxufVxuXG4vLyBDcmVhdGVCdWNrZXRzRmllbGQoKTogQ3JlYXRlcyB0aGUgYnVja2V0cyBmaWVsZCB0aGF0IHdpbGwgaG9sZCBhbGwgdGhlIGRhdGEuIFxuZnVuY3Rpb24gQ3JlYXRlQnVja2V0RmllbGQoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBidWNrZXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1Y2tldEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2J1Y2tldC1maWVsZCcpOyBcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1Y2tldEZpZWxkKTsgXG59XG5cbi8vIENyZWF0ZUJ1Y2tldHMoKTogV2lsbCBjcmVhdGUgYnVja2V0cyBmb3IgdGhlIGJ1Y2tldCBmaWVsZC4gXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQnVja2V0cygpe1xuICAgIGNvbnN0IGJ1Y2tldEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1Y2tldC1maWVsZCcpOyBcbiAgICBjb25zb2xlLmxvZygnU2V0IG9mIGJ1Y2tldHMgaW4gdGhlIGZpZWxkOiAnLCBidWNrZXRGaWVsZCk7IC8vIFRlc3RpbmdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjb25zdCBidWNrZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVja2V0LmRhdGFzZXQuYnVja2V0ID0gaTtcblxuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbXB0eS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1idWNrZXQnKTtcbiAgICAgICAgZW1wdHkudGV4dENvbnRlbnQgPSAnRW1wdHknO1xuXG4gICAgICAgIGJ1Y2tldC5hcHBlbmRDaGlsZChlbXB0eSk7IFxuICAgICAgICBidWNrZXRGaWVsZC5hcHBlbmRDaGlsZChidWNrZXQpOyBcbiAgICB9XG59XG5cbi8vIFBsYWNlSW5CdWNrZXQoKTogV2lsbCBwbGFjZSB0aGUgaGFzaCBkYXRhIGluc2lkZSBhIGJ1Y2tldC4gXG5leHBvcnQgZnVuY3Rpb24gUGxhY2VJbkJ1Y2tldCgpe1xuICAgIGNvbnN0IGJ1Y2tldHNJbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1Y2tldC1maWVsZCA+IGRpdicpOyBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVja2V0cy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGlmIChidWNrZXRzW2ldICE9PSBudWxsICYmICFidWNrZXRzSW5GaWVsZFtpXS5jaGlsZHJlbi5pdGVtKDEpKVxuICAgICAgICB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5yZW1vdmVDaGlsZChidWNrZXRzSW5GaWVsZFtpXS5jaGlsZHJlbi5pdGVtKDApKTsgLy8gUmVtb3ZlICdlbXB0eScgbm9kZSBhcyB0aGUgZmlyc3Qgbm9kZS4gXG5cbiAgICAgICAgICAgIGNvbnN0IGJ1Y2tldEluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBidWNrZXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGJ1Y2tldHNbaV07XG4gICAgICAgICAgICBidWNrZXRJbmRleC50ZXh0Q29udGVudCA9IGRhdGFbMV07XG4gICAgICAgICAgICBidWNrZXRWYWx1ZS50ZXh0Q29udGVudCA9IGRhdGFbMF07IFxuICAgICAgICAgICAgYnVja2V0c0luRmllbGRbaV0uYXBwZW5kQ2hpbGQoYnVja2V0SW5kZXgpO1xuICAgICAgICAgICAgYnVja2V0c0luRmllbGRbaV0uYXBwZW5kQ2hpbGQoYnVja2V0VmFsdWUpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChidWNrZXRzW2ldICE9PSBudWxsICYmIGJ1Y2tldHNJbkZpZWxkW2ldLmNoaWxkcmVuLml0ZW0oMSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldHNJbkZpZWxkW2ldLmNoaWxkcmVuLml0ZW0oMCkpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRzSW5GaWVsZFtpXS5jaGlsZHJlbi5pdGVtKDEpKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgY29uc3QgYnVja2V0SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1Y2tldFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYnVja2V0c1tpXTtcbiAgICAgICAgICAgIGJ1Y2tldEluZGV4LnRleHRDb250ZW50ID0gZGF0YVsxXTtcbiAgICAgICAgICAgIGJ1Y2tldFZhbHVlLnRleHRDb250ZW50ID0gZGF0YVswXTsgXG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5hcHBlbmRDaGlsZChidWNrZXRJbmRleCk7XG4gICAgICAgICAgICBidWNrZXRzSW5GaWVsZFtpXS5hcHBlbmRDaGlsZChidWNrZXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBidWNrZXRzIH0gZnJvbSBcIi4uL3V0aWxzL0J1Y2tldHNcIjtcbmltcG9ydCB7IENyZWF0ZUJ1Y2tldHMgfSBmcm9tIFwiLi9Eb21Db250ZW50XCI7XG5pbXBvcnQgeyBQbGFjZUluQnVja2V0IH0gZnJvbSBcIi4vRG9tQ29udGVudFwiO1xuLyoqIHxQcm9qZWN0OiBIYXNoTWFwfFxuICogPT4gQXNzaWdubWVudDpcbiAqIDEuIFN0YXJ0IGJ5IGNyZWF0aW5nIGEgSGFzaE1hcCBjbGFzcyBvciBmYWN0b3J5IGZ1bmN0aW9uLiBJdCdzIHVwIHRvIHlvdSB3aGljaCB5b3Ugd2FudCB0byB1c2UuXG4gKiBUaGVuIHByb2NlZWQgdG8gY3JlYXRlIHRoZSBmb2xsb3dpbmcgbWV0aG9kczogXG4gKiBcbiAqIDIuIGhhc2ggdGFrZXMgYSB2YWx1ZSBhbmQgcHJvZHVjZXMgYSBoYXNoIGNvZGUgd2l0aCBpdC4gV2UgZGlkIGltcGxlbWVudCBhIGZhaXJseSBnb29kIGhhc2hcbiAqIGZ1bmN0aW9uIGluIHRoZSBwcmV2aW91cyBsZXNzb24uIFlvdSBhcmUgZnJlZSB0byB1c2UgdGhhdCwgb3IgaWYgeW91IHdpc2gsIHlvdSBjYW4gY29uZHVjdCB5b3VyIG93blxuICogcmVzZWFyY2guIEJld2FyZSwgdGhpcyBpcyBhIGRlZXAgZGVlcCByYWJiaXQgaG9sZS5cbiAqIFxuICogTm90ZTogSGFzaCBtYXBzIGNvdWxkIGFjY29tbW9kYXRlIHZhcmlvdXMgZGF0YSB0eXBlcyBmb3Iga2V5cyBsaWtlIFxuICogbnVtYmVycywgc3RyaW5ncywgb2JqZWN0cy4gQnV0IGZvciB0aGlzIHByb2plY3QsIG9ubHkgaGFuZGxlIGtleXMgXG4gKiBvZiB0eXBlIHN0cmluZ3MuIFxuICogXG4gKiAzLiBzZXQoa2V5LCB2YWx1ZSkgdGFrZXMgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGlzIGEga2V5IGFuZCB0aGUgc2Vjb25kIGlzIGEgdmFsdWUgdGhhdCBpcyBhc3NpZ25lZFxuICogdG8gdGhpcyBrZXkuIElmIGEga2V5IGFscmVhZHkgZXhpc3RzLCB0aGVuIHRoZSBvbGQgdmFsdWUgaXMgb3ZlcndyaXR0ZW4uXG4gKiBcbiAqIFJlbWVtYmVyIHRvIGdyb3cgeW91ciBidWNrZXRzIHNpemUgd2hlbiBpdCBuZWVkcyB0bywgYnkgY2FsY3VsYXRpbmcgaWYgXG4gKiB5b3VyIGJ1Y2tldCBoYXMgcmVhY2hlZCB0aGUgJ2xvYWQgZmFjdG9yJy4gXG4gKiBcbiAqIDQuIGdldChrZXkpIHRha2VzIG9uZSBhcmd1bWVudCBhcyBhIGtleSBhbmQgcmV0dXJucyB0aGUgdmFsdWUgdGhhdCBpcyBhc3NpZ25lZCB0byB0aGlzXG4gKiBrZXkuIElmIGEga2V5IGlzIG5vdCBmb3VuZCwgcmV0dXJuIG51bGwuIFxuICogXG4gKiA1LiByZW1vdmUoa2V5KSB0YWtlcyBhIGtleSBhcmd1bWVudC4gSWYgdGhlIGdpdmVuIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZCBcbiAqIHJlbW92ZSB0aGUgZW50cnkgd2l0aCB0aGF0IGtleSBhbmQgcmV0dXJuIHRydWUuIElmIHRoZSBrZXkgaXNuJ3QgaW4gdGhlIGhhc2ggbWFwLCBpdFxuICogc2hvdWxkIHJldHVybiBmYWxzZS4gXG4gKiBcbiAqIDYuIGxlbmd0aCgpIHJldHVybnMgdGhlIG51bWJlciBvZiBzdG9yZWQga2V5cyBpbiB0aGUgaGFzaCBtYXAuIFxuICogXG4gKiA3LiBjbGVhcigpIHJlbW92ZXMgYWxsIGVudHJpZXMgaW4gdGhlIGhhc2ggbWFwLiBcbiAqIFxuICogOC4ga2V5cygpIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGtleXMgaW5zaWRlIHRoZSBoYXNoIG1hcC5cbiAqIFxuICogOS4gdmFsdWVzKCkgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgdmFsdWVzLlxuICogXG4gKiAxMC4gZW50cmllcygpIHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBlYWNoICdrZXknLCAndmFsdWUnIHBhaXIuIEV4YW1wbGU6XG4gKiBbW2ZpcnN0S2V5LCBmaXJzdFZhbHVlXV0sIFtzZWNvbmRLZXksIHNlY29uZFZhbHVlXS5cbiAqIFxuICogUmVtZW1iZXIgdGhhdCBhIGhhc2ggbWFwIGRvZXMgbm90IHByZXNlcnZlIGluc2VydGlvbiBvcmRlciB3aGVuIHlvdSBhcmUgcmV0cmlldmluZyB5b3VyIGhhc2ggbWFwJ3MgZGF0YS5cbiAqIEl0IGlzIG5vcm1hbCBhbmQgZXhwZWN0ZWQgZm9yIGtleXMgYW5kIHZhbHVlcyB0byBhcHBlYXIgb3V0IG9mIHRoZSBvcmRlciB5b3UgaW5zZXJ0ZWQgdGhlbSBpbi4gXG4gKi9cblxuLy8gSGFzaE1hcCBGYWN0b3J5IEZ1bmN0aW9uIFRlc3Q6XG4vLyBjb25zdCBIYXNoTWFwID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHRlc3RSZXR1cm4gPSAxO1xuXG4vLyAgICAgcmV0dXJuIHt0ZXN0UmV0dXJufTtcbi8vIH1cblxuLy8gSGFzaE1hcCBDbGFzcyBUZXN0OiBcbmV4cG9ydCBjbGFzcyBIYXNoTWFwe1xuICAgIGNvbnN0cnVjdG9yKHRhYmxlX3NpemUpe1xuICAgICAgICB0aGlzLnRhYmxlX3NpemUgPSB0YWJsZV9zaXplO1xuICAgICAgICB0aGlzLmhhc2hDb2RlID0gbnVsbDsgXG4gICAgICAgIHRoaXMubG9hZEZhY3RvciA9IDAuNzU7XG4gICAgICAgIHRoaXMubG9hZEluY3JlYXNlID0gMTA7XG4gICAgfVxuXG4gICAgc3RyaW5nVG9OdW1iZXIoc3RyaW5nKXtcbiAgICAgICAgbGV0IGhhc2hDb2RlID0gMDtcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIE1vZCBNZXRob2QgKEhhc2hpbmcgYnkgZGl2aXNpb24pXG4gICAgICAgIGhhc2hDb2RlID0gbnVtYmVyICUgdGhpcy50YWJsZV9zaXplOyAgXG5cbiAgICAgICAgcmV0dXJuIGhhc2hDb2RlO1xuICAgIH1cblxuICAgIGhhc2goa2V5KXtcbiAgICAgICAgdGhpcy5oYXNoQ29kZSA9IHRoaXMuc3RyaW5nVG9OdW1iZXIoa2V5KTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIYXNoTWFwIENsYXNzIGtleTogJywga2V5KTsgLy8gVGVzdGluZ1xuICAgICAgICBjb25zb2xlLmxvZygnSGFzaE1hcCBDbGFzcyB2YWx1ZTogJywgdmFsdWUpOyAvLyBUZXN0aW5nIFxuICAgICAgICBsZXQgdmFsdWVzSW5CdWNrZXRzID0gMDtcbiAgICAgICAgbGV0IGluY3JlYXNlQnVja2V0cyA9IDA7XG4gICAgICAgIGxldCBwbGFjZWRJbnNpZGVCdWNrZXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGl0ZW1Gb3VuZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgYnVja2V0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGUgaGFzaCBjb2RlIHZhbHVlIGlzIGFscmVhZHkgaW4gdGhlIGJ1Y2tldHMgZmllbGQuXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gbnVsbCAmJiBpdGVtWzBdID09PSB2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUZXN0IGlmIHRoZSBidWNrZXRzIGZpZWxkIGluZGV4IGhhcyBpbmNyZWFzZWQgZHVlIHRvIHRoZSBsb2FkIGZhY3Rvci4gXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGtleSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBidWNrZXRzW2luZGV4XSA9IFt2YWx1ZSwga2V5XTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRJdGVtID0gYnVja2V0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1Y2tldEl0ZW0gIT09IG51bGwgJiYgYnVja2V0SXRlbVswXSA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldHNbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1Y2tldHNbaW5kZXhdID0gW3ZhbHVlLCBrZXldOyBcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1Y2tldEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1Y2tldC1maWVsZCcpOyBcbiAgICAgICAgICAgICAgICBidWNrZXRGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICBDcmVhdGVCdWNrZXRzKCk7IFxuICAgICAgICAgICAgICAgIFBsYWNlSW5CdWNrZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IFxuXG4gICAgICAgIGlmICgoa2V5IDwgMCB8fCBrZXkgPj0gYnVja2V0cy5sZW5ndGgpICYmICEoaXRlbUZvdW5kKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RyeWluZyB0byBhY2Nlc3MgaW5kZXggb3V0IG9mIGJvdW5kcy4nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lnbmluZyB0aGUgdmFsdWUgdG8gdGhlIG1vc3QgY3VycmVudCBlbXB0eSBpbmRleC4nKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVja2V0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVja2V0c1tpXSA9PT0gbnVsbCAmJiAhcGxhY2VkSW5zaWRlQnVja2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0c1tpXSA9IFt2YWx1ZSwga2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkSW5zaWRlQnVja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYnVja2V0c1tpXSAhPT0gbnVsbCAmJiAhcGxhY2VkSW5zaWRlQnVja2V0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVBhaXIgPSBidWNrZXRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBhaXJbMV0gPT09IGtleSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0c1tpXSA9IFt2YWx1ZSwga2V5XTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWRJbnNpZGVCdWNrZXQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldHMpIC8vIFRlc3RpbmdcbiAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgIC8vIFRlc3QgaWYgdGhlIGJ1Y2tldCBoYXMgcmVhY2hlZCB0aGUgZGVmYXVsdCBsb2FkIGZhY3Rvci4gXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgdGVzdCBjb3VsZCBiZSBpbiBpdHMgb3duIGZ1bmN0aW9uLlxuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVzSW5CdWNrZXRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoKE1hdGguZmxvb3IoYnVja2V0cy5sZW5ndGggKiB0aGlzLmxvYWRGYWN0b3IpKSA9PT0gdmFsdWVzSW5CdWNrZXRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEdyb3cgdGhlICdCdWNrZXRzIEFycmF5JyBieSBhIGNlcnRhaW4gc2l6ZS4gXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0J1Y2tldHMgQXJyYXkgV2lsbCBHcm93Jyk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgd2hpbGUoaW5jcmVhc2VCdWNrZXRzIDwgdGhpcy5sb2FkSW5jcmVhc2UpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmNyZWFzZUJ1Y2tldHMrKztcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0cy5sZW5ndGggKz0gMVxuICAgICAgICAgICAgICAgICAgICBidWNrZXRzW2J1Y2tldHMubGVuZ3RoIC0gMV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCdWNrZXRzOiAnLCBidWNrZXRzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWNrZXQtZmllbGQnKTtcbiAgICAgICAgICAgICAgICBidWNrZXRGaWVsZC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICBDcmVhdGVCdWNrZXRzKCk7XG4gICAgICAgICAgICAgICAgUGxhY2VJbkJ1Y2tldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzSW5CdWNrZXRzKTsgLy8gVGVzdGluZyBcbiAgICB9XG4gICAgXG4gICAgZ2V0KGtleSl7XG4gICAgICAgIGxldCBpdGVtRm91bmQgPSBmYWxzZTsgXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwgJiYgaXRlbVsxXSA9PT0ga2V5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW1Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpdGVtWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbUZvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoYXMoa2V5KXtcbiAgICAgICAgbGV0IGl0ZW1Gb3VuZCA9IGZhbHNlOyBcblxuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIGl0ZW1bMV0gPT09IGtleSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbUZvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmUoa2V5KXtcbiAgICAgICAgbGV0IGl0ZW1Gb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIGl0ZW1bMV0gPT09IGtleSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ1Y2tldHNbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW1Gb3VuZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxlbmd0aCgpe1xuICAgICAgICBsZXQga2V5c09uSGFzaFRhYmxlID0gMDtcblxuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleXNPbkhhc2hUYWJsZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5c09uSGFzaFRhYmxlO1xuICAgIH1cblxuICAgIGNsZWFyKCl7XG4gICAgICAgIGxldCBidWNrZXRJbmRleFJlYWNoZWQgPSAwO1xuXG4gICAgICAgIHdoaWxlIChidWNrZXRJbmRleFJlYWNoZWQgPCAoYnVja2V0cy5sZW5ndGgpKXtcbiAgICAgICAgICAgIGJ1Y2tldHMuc2hpZnQoKTsgXG4gICAgICAgICAgICBidWNrZXRzLnB1c2gobnVsbCk7IFxuICAgICAgICAgICAgYnVja2V0SW5kZXhSZWFjaGVkKys7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnQnVja2V0cyBhZnRlciBjbGVhcmluZyBlbnRyaWVzOiAnLCBidWNrZXRzKTsgLy8gVGVzdGluZyAgIFxuICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG4gICAgfVxuXG4gICAga2V5cygpe1xuICAgICAgICBsZXQga2V5c09uSGFzaFRhYmxlID0gW107XG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5c09uSGFzaFRhYmxlLnB1c2goaXRlbVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUga2V5cyBpbnNpZGUgdGhlIGhhc2ggbWFwOiAnLCBrZXlzT25IYXNoVGFibGUpOyAvLyBUZXN0aW5nXG4gICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcbiAgICAgICAgcmV0dXJuIGtleXNPbkhhc2hUYWJsZTtcbiAgICB9XG5cbiAgICB2YWx1ZXMoKXtcbiAgICAgICAgbGV0IHZhbHVlc09uSGFzaFRhYmxlID0gW107XG4gICAgICAgIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVzT25IYXNoVGFibGUucHVzaChpdGVtWzBdKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgdmFsdWVzIGluc2lkZSB0aGUgaGFzaCBtYXA6ICcsIHZhbHVlc09uSGFzaFRhYmxlKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuICAgICAgICByZXR1cm4gdmFsdWVzT25IYXNoVGFibGU7IFxuICAgIH1cblxuICAgIGVudHJpZXMoKXtcbiAgICAgICAgbGV0IGVudHJpZXNPbkhhc2hUYWJsZSA9IFtdO1xuICAgICAgICBidWNrZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVudHJpZXNPbkhhc2hUYWJsZS5wdXNoKFtpdGVtWzBdLCBpdGVtWzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgZW50cmllcyBpbnNpZGUgdGhlIGhhc2ggbWFwOiAnLCBlbnRyaWVzT25IYXNoVGFibGUpOyAvLyBUZXN0aW5nXG4gICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgICAgICByZXR1cm4gZW50cmllc09uSGFzaFRhYmxlOyBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hNYXA7IiwiZXhwb3J0IGxldCBidWNrZXRzID0gbmV3IEFycmF5KDE2KS5maWxsKG51bGwpOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEluaXRpYWxpemVEb21Db250ZW50IH0gZnJvbSBcIi4vbW9kdWxlcy9Eb21Db250ZW50XCI7XG5cbmltcG9ydCAnLi91dGlscy9zdHlsZS5jc3MnOyBcblxuSW5pdGlhbGl6ZURvbUNvbnRlbnQoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9