"use strict";
(self["webpackChunkstore"] = self["webpackChunkstore"] || []).push([["src_store_js"],{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createStore = () => {
  let count = 0;
  let image = 0;
  const subscribers = [];
  return {
    get count() {
      return count;
    },

    incrementCount() {
      count += 1;
      subscribers.forEach(fn => fn());
    },

    get image() {
      return image;
    },

    set image(img) {
      image = img;
      subscribers.forEach(fn => fn());
    },

    subscribe(fn) {
      subscribers.push(fn);
    }

  };
};

const store = createStore();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

}]);
//# sourceMappingURL=src_store_js.js.map