"use strict";
(self["webpackChunkbuy_tools"] = self["webpackChunkbuy_tools"] || []).push([["src_index_js"],{

/***/ "./src/app.svelte":
/*!************************!*\
  !*** ./src/app.svelte ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "../../node_modules/svelte/internal/index.mjs");
/* harmony import */ var home_fruit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home/fruit */ "webpack/container/remote/home/fruit");
/* harmony import */ var home_fruit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(home_fruit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "webpack/container/remote/store/store");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_store__WEBPACK_IMPORTED_MODULE_2__);
/* src/app.svelte generated by Svelte v3.49.0 */





function create_fragment(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.textContent = "Add To Cart";
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = (home_fruit__WEBPACK_IMPORTED_MODULE_1___default())[/*image*/ ctx[0]].image)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img, "max-height", "200px");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "text-align", "center");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "mui-btn mui-btn--primary");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(button, "width", "100%");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "mui-panel");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, img);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, button);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*addToCart*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*image*/ 1 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = (home_fruit__WEBPACK_IMPORTED_MODULE_1___default())[/*image*/ ctx[0]].image)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let image = (store_store__WEBPACK_IMPORTED_MODULE_2___default().image);

	store_store__WEBPACK_IMPORTED_MODULE_2___default().subscribe(() => {
		$$invalidate(0, image = (store_store__WEBPACK_IMPORTED_MODULE_2___default().image));
	});

	const addToCart = () => {
		store_store__WEBPACK_IMPORTED_MODULE_2___default().incrementCount();
	};

	return [image, addToCart];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var single_spa_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa-svelte */ "../../node_modules/single-spa-svelte/lib/single-spa-svelte.js");
/* harmony import */ var _app_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.svelte */ "./src/app.svelte");



const svelteLifecycles = (0,single_spa_svelte__WEBPACK_IMPORTED_MODULE_0__["default"])({
  component: _app_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]
});

const bootstrap = svelteLifecycles.bootstrap;
const mount = svelteLifecycles.mount;
const unmount = svelteLifecycles.unmount;


/***/ })

}]);
//# sourceMappingURL=src_index_js.js.map