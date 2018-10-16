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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var rocky = __webpack_require__(2);

	//initialize watchface
	var d = new Date();
	var timeString = d.toLocaleTimeString()
	var hmsArray = timeString.split(":")
	var timeInSeconds = (parseInt(hmsArray[0]*3600) + parseInt(hmsArray[1]*60) + parseInt(hmsArray[2]*1))
	var currentTimeInCentiDays = parseInt(timeInSeconds / 864)
	rocky.requestDraw();

	rocky.on('draw', function(event) {
	  var ctx = event.context;

	  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

	  var offsetY = (ctx.canvas.clientHeight - ctx.canvas.unobstructedHeight) / 2;
	  var centerX = ctx.canvas.unobstructedWidth / 2;

	  ctx.fillStyle = 'white';
	  ctx.textAlign = 'center';
	  ctx.font = '26px bold Leco-numbers-am-pm';
	  ctx.fillText(currentTimeInCentiDays, centerX, (66 - offsetY));

	});

	rocky.on('secondchange', function(event) {

	  var d = new Date();
	  var timeString = d.toLocaleTimeString();
	  var hmsArray = timeString.split(":");
	  var timeInSeconds = (parseInt(hmsArray[0]*3600) + parseInt(hmsArray[1]*60) + parseInt(hmsArray[2]));
	  //console.log("currentTimeInCentiDays: " + currentTimeInCentiDays);
	  if(timeInSeconds % 864 == 0)
	  {
	    currentTimeInCentiDays = timeInSeconds / 864
	    console.log("one centiDay has elapsed: " + currentTimeInCentiDays)

	    rocky.requestDraw();
	  }
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = _rocky;


/***/ })
/******/ ]);