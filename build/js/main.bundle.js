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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classes = ['heart', 'atom', 'grass', 'paw'];
var wrapper = document.querySelector('.table-block');
wrapper.addEventListener('mouseover', function (event) {
  makeHover(event);
});
wrapper.addEventListener('mouseout', function () {
  document.querySelectorAll('.white-bg').forEach(function (element) {
    return element.classList.remove('white-bg');
  });
});
var tdArray = wrapper.querySelectorAll('td');
var sizeX = wrapper.rows.length;
var sizeY = wrapper.rows[0].cells.length;

var randomIntegerGenerator = function randomIntegerGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var fillInTheTable = function fillInTheTable() {
  tdArray.forEach(function (tdItem) {
    var num = randomIntegerGenerator(0, 3);
    tdItem.classList.add(classes[num]);
    tdItem.dataset.image = classes[num];
  });
};

fillInTheTable();

var makeHover = function makeHover(event) {
  var target = event.target;

  if (target.tagName === 'TD') {
    target.classList.add('white-bg');
    var x = target.cellIndex;
    var y = target.parentNode.rowIndex;
    makeHoverByClass(x, y, target);
  }
};

var makeHoverByClass = function makeHoverByClass(x, y, currentCell) {
  if (x - 1 >= 0) {
    var nextCell = wrapper.rows[y].cells[x - 1];

    if (currentCell.getAttribute('data-image') === nextCell.getAttribute('data-image') && !nextCell.classList.contains('white-bg')) {
      nextCell.classList.add('white-bg');
      makeHoverByClass(x - 1, y, nextCell);
    }
  }

  if (y - 1 >= 0) {
    var _nextCell = wrapper.rows[y - 1].cells[x];

    if (currentCell.getAttribute('data-image') === _nextCell.getAttribute('data-image') && !_nextCell.classList.contains('white-bg')) {
      _nextCell.classList.add('white-bg');

      makeHoverByClass(x, y - 1, _nextCell);
    }
  }

  if (y + 1 < sizeY) {
    var _nextCell2 = wrapper.rows[y + 1].cells[x];

    if (currentCell.getAttribute('data-image') === _nextCell2.getAttribute('data-image') && !_nextCell2.classList.contains('white-bg')) {
      _nextCell2.classList.add('white-bg');

      makeHoverByClass(x, y + 1, _nextCell2);
    }
  }

  if (x + 1 < sizeX) {
    var _nextCell3 = wrapper.rows[y].cells[x + 1];

    if (currentCell.getAttribute('data-image') === _nextCell3.getAttribute('data-image') && !_nextCell3.classList.contains('white-bg')) {
      _nextCell3.classList.add('white-bg');

      makeHoverByClass(x + 1, y, _nextCell3);
    }
  }
};

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map