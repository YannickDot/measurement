var true =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _metrics = __webpack_require__(3);\n\nObject.defineProperty(exports, 'UnitMass', {\n  enumerable: true,\n  get: function () {\n    return _metrics.UnitMass;\n  }\n});\nObject.defineProperty(exports, 'UnitVolume', {\n  enumerable: true,\n  get: function () {\n    return _metrics.UnitVolume;\n  }\n});\nObject.defineProperty(exports, 'UnitDuration', {\n  enumerable: true,\n  get: function () {\n    return _metrics.UnitDuration;\n  }\n});\n\nvar _measurement = __webpack_require__(1);\n\nObject.defineProperty(exports, 'Measurement', {\n  enumerable: true,\n  get: function () {\n    return _measurement.exposeFactory;\n  }\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.exposeFactory = exposeFactory;\nclass Measurement {\n  constructor(value, unit) {\n    this.value = unit.__truncated ? Math.trunc(value) : value;\n    this.unit = unit;\n  }\n\n  convertTo(unit) {\n    if (this.unit.__type !== unit.__type) {\n      throw new Error(`A ${ this.unit.__type } cannot be converted to a ${ unit.__type }`);\n    }\n    let newValue = this.value * this.unit.coef / unit.coef;\n    return Object.freeze(new Measurement(newValue, unit));\n  }\n\n  toString() {\n    return `${ this.value }${ this.unit.__unit }`;\n  }\n\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'string') {\n      return `${ this.value }${ this.unit.__unit }`;\n    } else if (hint === 'number') {\n      return this.value;\n    } else {\n      return this.value;\n    }\n  }\n\n  equals(otherMeasurement) {\n    return otherMeasurement.value * otherMeasurement.unit.coef === this.value * this.unit.coef;\n  }\n}\n\nfunction exposeFactory(...args) {\n  return Object.freeze(new Measurement(...args));\n}\n\n// const TYPE_TEMPERATURE = \"Temperature\"\n// export const UnitTemperature = {\n//   celcius : {coef: 10**0, __unit: '°C', __type: TYPE_TEMPERATURE },\n//   fahrenheit : {coef: 60, __unit: '°F', __type: TYPE_TEMPERATURE },\n//   kelvin : {coef: 60*60, __unit: '°K', __type: TYPE_TEMPERATURE },\n// }\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/measurement.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/measurement.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst TYPE_DURATION = \"Duration\";\n\nconst UnitDuration = exports.UnitDuration = {\n  seconds: { coef: Math.pow(10, 0), __unit: 's', __type: TYPE_DURATION, __truncated: true },\n  minutes: { coef: 60, __unit: 'min', __type: TYPE_DURATION, __truncated: true },\n  hours: { coef: 60 * 60, __unit: 'h', __type: TYPE_DURATION, __truncated: true },\n  days: { coef: 24 * 60 * 60, __unit: 'd', __type: TYPE_DURATION, __truncated: true }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/metrics/duration.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/metrics/duration.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _duration = __webpack_require__(2);\n\nObject.defineProperty(exports, 'UnitDuration', {\n  enumerable: true,\n  get: function () {\n    return _duration.UnitDuration;\n  }\n});\n\nvar _mass = __webpack_require__(4);\n\nObject.defineProperty(exports, 'UnitMass', {\n  enumerable: true,\n  get: function () {\n    return _mass.UnitMass;\n  }\n});\n\nvar _volume = __webpack_require__(5);\n\nObject.defineProperty(exports, 'UnitVolume', {\n  enumerable: true,\n  get: function () {\n    return _volume.UnitVolume;\n  }\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/metrics/index.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/metrics/index.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst TYPE_MASS = \"Mass\";\n\nconst UnitMass = exports.UnitMass = {\n  milligrams: { coef: Math.pow(10, -3), __unit: 'mg', __type: TYPE_MASS },\n  grams: { coef: Math.pow(10, 0), __unit: 'g', __type: TYPE_MASS },\n  kilograms: { coef: Math.pow(10, 3), __unit: 'kg', __type: TYPE_MASS },\n  tons: { coef: Math.pow(10, 6), __unit: 't', __type: TYPE_MASS },\n  pounds: { coef: 453.592, __unit: 'lbs', __type: TYPE_MASS },\n  ounces: { coef: 28.3495, __unit: 'lbs', __type: TYPE_MASS },\n  stone: { coef: 6350.29, __unit: 'st', __type: TYPE_MASS }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/metrics/mass.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/metrics/mass.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst TYPE_VOLUME = \"Volume\";\n\nconst UnitVolume = exports.UnitVolume = {\n  milliliters: { coef: Math.pow(10, 0), __unit: 'mL', __type: TYPE_VOLUME },\n  liters: { coef: Math.pow(10, 3), __unit: 'L', __type: TYPE_VOLUME }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/metrics/volume.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/metrics/volume.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(0);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi main\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_main?");

/***/ }
/******/ ]);