/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./storage.js":
/*!********************!*\
  !*** ./storage.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"meetingData\": () => (/* binding */ meetingData),\n/* harmony export */   \"hours\": () => (/* binding */ hours),\n/* harmony export */   \"days\": () => (/* binding */ days),\n/* harmony export */   \"initLocalStorage\": () => (/* binding */ initLocalStorage),\n/* harmony export */   \"getMeetingData\": () => (/* binding */ getMeetingData),\n/* harmony export */   \"setMeetingData\": () => (/* binding */ setMeetingData)\n/* harmony export */ });\nconst meetingData = [\r\n];\r\n\r\nconst meetingDataKey = 'meetingData';\r\n\r\nfunction initLocalStorage() {\r\n  if (localStorage.getItem(meetingDataKey) == null) {\r\n    localStorage.setItem(meetingDataKey, JSON.stringify(meetingData));\r\n  }\r\n}\r\n\r\nfunction getMeetingData() {\r\n  return JSON.parse(localStorage.getItem(meetingDataKey));\r\n}\r\n\r\nfunction setMeetingData(data) {\r\n  localStorage.setItem(meetingDataKey, JSON.stringify(data));\r\n}\r\n\r\nconst hours = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];\r\nconst days = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./storage.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;