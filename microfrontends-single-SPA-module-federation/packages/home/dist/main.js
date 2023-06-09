/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/single-spa/lib/esm/single-spa.min.js":
/*!***************************************************************!*\
  !*** ../../node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOTSTRAPPING": () => (/* binding */ m),
/* harmony export */   "LOADING_SOURCE_CODE": () => (/* binding */ p),
/* harmony export */   "LOAD_ERROR": () => (/* binding */ y),
/* harmony export */   "MOUNTED": () => (/* binding */ w),
/* harmony export */   "MOUNTING": () => (/* binding */ d),
/* harmony export */   "NOT_BOOTSTRAPPED": () => (/* binding */ h),
/* harmony export */   "NOT_LOADED": () => (/* binding */ l),
/* harmony export */   "NOT_MOUNTED": () => (/* binding */ v),
/* harmony export */   "SKIP_BECAUSE_BROKEN": () => (/* binding */ P),
/* harmony export */   "UNMOUNTING": () => (/* binding */ E),
/* harmony export */   "UPDATING": () => (/* binding */ g),
/* harmony export */   "addErrorHandler": () => (/* binding */ a),
/* harmony export */   "checkActivityFunctions": () => (/* binding */ bt),
/* harmony export */   "ensureJQuerySupport": () => (/* binding */ ft),
/* harmony export */   "getAppNames": () => (/* binding */ yt),
/* harmony export */   "getAppStatus": () => (/* binding */ Pt),
/* harmony export */   "getMountedApps": () => (/* binding */ Et),
/* harmony export */   "mountRootParcel": () => (/* binding */ C),
/* harmony export */   "navigateToUrl": () => (/* binding */ nt),
/* harmony export */   "pathToActiveWhen": () => (/* binding */ _t),
/* harmony export */   "registerApplication": () => (/* binding */ Ot),
/* harmony export */   "removeErrorHandler": () => (/* binding */ c),
/* harmony export */   "setBootstrapMaxTime": () => (/* binding */ F),
/* harmony export */   "setMountMaxTime": () => (/* binding */ J),
/* harmony export */   "setUnloadMaxTime": () => (/* binding */ Q),
/* harmony export */   "setUnmountMaxTime": () => (/* binding */ H),
/* harmony export */   "start": () => (/* binding */ xt),
/* harmony export */   "triggerAppChange": () => (/* binding */ Mt),
/* harmony export */   "unloadApplication": () => (/* binding */ At),
/* harmony export */   "unregisterApplication": () => (/* binding */ Tt)
/* harmony export */ });
/* single-spa@5.9.4 - ESM - prod */
var t = Object.freeze({
  __proto__: null,

  get start() {
    return xt;
  },

  get ensureJQuerySupport() {
    return ft;
  },

  get setBootstrapMaxTime() {
    return F;
  },

  get setMountMaxTime() {
    return J;
  },

  get setUnmountMaxTime() {
    return H;
  },

  get setUnloadMaxTime() {
    return Q;
  },

  get registerApplication() {
    return Ot;
  },

  get unregisterApplication() {
    return Tt;
  },

  get getMountedApps() {
    return Et;
  },

  get getAppStatus() {
    return Pt;
  },

  get unloadApplication() {
    return At;
  },

  get checkActivityFunctions() {
    return bt;
  },

  get getAppNames() {
    return yt;
  },

  get pathToActiveWhen() {
    return _t;
  },

  get navigateToUrl() {
    return nt;
  },

  get triggerAppChange() {
    return Mt;
  },

  get addErrorHandler() {
    return a;
  },

  get removeErrorHandler() {
    return c;
  },

  get mountRootParcel() {
    return C;
  },

  get NOT_LOADED() {
    return l;
  },

  get LOADING_SOURCE_CODE() {
    return p;
  },

  get NOT_BOOTSTRAPPED() {
    return h;
  },

  get BOOTSTRAPPING() {
    return m;
  },

  get NOT_MOUNTED() {
    return v;
  },

  get MOUNTING() {
    return d;
  },

  get UPDATING() {
    return g;
  },

  get LOAD_ERROR() {
    return y;
  },

  get MOUNTED() {
    return w;
  },

  get UNMOUNTING() {
    return E;
  },

  get SKIP_BECAUSE_BROKEN() {
    return P;
  }

});

function n(t) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}

function e(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}

var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {}).CustomEvent,
    o = function () {
  try {
    var t = new r("cat", {
      detail: {
        foo: "bar"
      }
    });
    return "cat" === t.type && "bar" === t.detail.foo;
  } catch (t) {}

  return !1;
}() ? r : "undefined" != typeof document && "function" == typeof document.createEvent ? function (t, n) {
  var e = document.createEvent("CustomEvent");
  return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e;
} : function (t, n) {
  var e = document.createEventObject();
  return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e;
},
    i = [];

function u(t, n, e) {
  var r = f(t, n, e);
  i.length ? i.forEach(function (t) {
    return t(r);
  }) : setTimeout(function () {
    throw r;
  });
}

function a(t) {
  if ("function" != typeof t) throw Error(s(28, !1));
  i.push(t);
}

function c(t) {
  if ("function" != typeof t) throw Error(s(29, !1));
  var n = !1;
  return i = i.filter(function (e) {
    var r = e === t;
    return n = n || r, !r;
  }), n;
}

function s(t, n) {
  for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];

  return "single-spa minified message #".concat(t, ": ").concat(n ? n + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(r.length ? "&arg=".concat(r.join("&arg=")) : "");
}

function f(t, n, e) {
  var r,
      o = "".concat(N(n), " '").concat(T(n), "' died in status ").concat(n.status, ": ");

  if (t instanceof Error) {
    try {
      t.message = o + t.message;
    } catch (t) {}

    r = t;
  } else {
    console.warn(s(30, !1, n.status, T(n)));

    try {
      r = Error(o + JSON.stringify(t));
    } catch (n) {
      r = t;
    }
  }

  return r.appOrParcelName = T(n), n.status = e, r;
}

var l = "NOT_LOADED",
    p = "LOADING_SOURCE_CODE",
    h = "NOT_BOOTSTRAPPED",
    m = "BOOTSTRAPPING",
    v = "NOT_MOUNTED",
    d = "MOUNTING",
    w = "MOUNTED",
    g = "UPDATING",
    E = "UNMOUNTING",
    y = "LOAD_ERROR",
    P = "SKIP_BECAUSE_BROKEN";

function O(t) {
  return t.status === w;
}

function b(t) {
  try {
    return t.activeWhen(window.location);
  } catch (n) {
    return u(n, t, P), !1;
  }
}

function T(t) {
  return t.name;
}

function A(t) {
  return Boolean(t.unmountThisParcel);
}

function N(t) {
  return A(t) ? "parcel" : "application";
}

function S() {
  for (var t = arguments.length - 1; t > 0; t--) for (var n in arguments[t]) "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);

  return arguments[0];
}

function _(t, n) {
  for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];

  return null;
}

function D(t) {
  return t && ("function" == typeof t || (n = t, Array.isArray(n) && !_(n, function (t) {
    return "function" != typeof t;
  })));
  var n;
}

function U(t, n) {
  var e = t[n] || [];
  0 === (e = Array.isArray(e) ? e : [e]).length && (e = [function () {
    return Promise.resolve();
  }]);
  var r = N(t),
      o = T(t);
  return function (t) {
    return e.reduce(function (e, i, u) {
      return e.then(function () {
        var e = i(t);
        return j(e) ? e : Promise.reject(s(15, !1, r, o, n, u));
      });
    }, Promise.resolve());
  };
}

function j(t) {
  return t && "function" == typeof t.then && "function" == typeof t.catch;
}

function M(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== h ? t : (t.status = m, t.bootstrap ? V(t, "bootstrap").then(e).catch(function (e) {
      if (n) throw f(e, t, P);
      return u(e, t, P), t;
    }) : Promise.resolve().then(e));
  });

  function e() {
    return t.status = v, t;
  }
}

function L(t, n) {
  return Promise.resolve().then(function () {
    if (t.status !== w) return t;
    t.status = E;
    var e = Object.keys(t.parcels).map(function (n) {
      return t.parcels[n].unmountThisParcel();
    });
    return Promise.all(e).then(r, function (e) {
      return r().then(function () {
        var r = Error(e.message);
        if (n) throw f(r, t, P);
        u(r, t, P);
      });
    }).then(function () {
      return t;
    });

    function r() {
      return V(t, "unmount").then(function () {
        t.status = v;
      }).catch(function (e) {
        if (n) throw f(e, t, P);
        u(e, t, P);
      });
    }
  });
}

var R = !1,
    I = !1;

function x(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== v ? t : (R || (window.dispatchEvent(new o("single-spa:before-first-mount")), R = !0), V(t, "mount").then(function () {
      return t.status = w, I || (window.dispatchEvent(new o("single-spa:first-mount")), I = !0), t;
    }).catch(function (e) {
      return t.status = w, L(t, !0).then(r, r);

      function r() {
        if (n) throw f(e, t, P);
        return u(e, t, P), t;
      }
    }));
  });
}

var B = 0,
    G = {
  parcels: {}
};

function C() {
  return W.apply(G, arguments);
}

function W(t, e) {
  var r = this;
  if (!t || "object" !== n(t) && "function" != typeof t) throw Error(s(2, !1));
  if (t.name && "string" != typeof t.name) throw Error(s(3, !1, n(t.name)));
  if ("object" !== n(e)) throw Error(s(4, !1, name, n(e)));
  if (!e.domElement) throw Error(s(5, !1, name));
  var o,
      i = B++,
      u = "function" == typeof t,
      a = u ? t : function () {
    return Promise.resolve(t);
  },
      c = {
    id: i,
    parcels: {},
    status: u ? p : h,
    customProps: e,
    parentName: T(r),
    unmountThisParcel: function () {
      return y.then(function () {
        if (c.status !== w) throw Error(s(6, !1, name, c.status));
        return L(c, !0);
      }).then(function (t) {
        return c.parentName && delete r.parcels[c.id], t;
      }).then(function (t) {
        return m(t), t;
      }).catch(function (t) {
        throw c.status = P, d(t), t;
      });
    }
  };
  r.parcels[i] = c;
  var l = a();
  if (!l || "function" != typeof l.then) throw Error(s(7, !1));
  var m,
      d,
      E = (l = l.then(function (t) {
    if (!t) throw Error(s(8, !1));
    var n = t.name || "parcel-".concat(i);
    if (Object.prototype.hasOwnProperty.call(t, "bootstrap") && !D(t.bootstrap)) throw Error(s(9, !1, n));
    if (!D(t.mount)) throw Error(s(10, !1, n));
    if (!D(t.unmount)) throw Error(s(11, !1, n));
    if (t.update && !D(t.update)) throw Error(s(12, !1, n));
    var e = U(t, "bootstrap"),
        r = U(t, "mount"),
        u = U(t, "unmount");
    c.status = h, c.name = n, c.bootstrap = e, c.mount = r, c.unmount = u, c.timeouts = q(t.timeouts), t.update && (c.update = U(t, "update"), o.update = function (t) {
      return c.customProps = t, $(function (t) {
        return Promise.resolve().then(function () {
          if (t.status !== w) throw Error(s(32, !1, T(t)));
          return t.status = g, V(t, "update").then(function () {
            return t.status = w, t;
          }).catch(function (n) {
            throw f(n, t, P);
          });
        });
      }(c));
    });
  })).then(function () {
    return M(c, !0);
  }),
      y = E.then(function () {
    return x(c, !0);
  }),
      O = new Promise(function (t, n) {
    m = t, d = n;
  });
  return o = {
    mount: function () {
      return $(Promise.resolve().then(function () {
        if (c.status !== v) throw Error(s(13, !1, name, c.status));
        return r.parcels[i] = c, x(c);
      }));
    },
    unmount: function () {
      return $(c.unmountThisParcel());
    },
    getStatus: function () {
      return c.status;
    },
    loadPromise: $(l),
    bootstrapPromise: $(E),
    mountPromise: $(y),
    unmountPromise: $(O)
  };
}

function $(t) {
  return t.then(function () {
    return null;
  });
}

function k(e) {
  var r = T(e),
      o = "function" == typeof e.customProps ? e.customProps(r, window.location) : e.customProps;
  ("object" !== n(o) || null === o || Array.isArray(o)) && (o = {}, console.warn(s(40, !1), r, o));
  var i = S({}, o, {
    name: r,
    mountParcel: W.bind(e),
    singleSpa: t
  });
  return A(e) && (i.unmountSelf = e.unmountThisParcel), i;
}

var K = {
  bootstrap: {
    millis: 4e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  mount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unmount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unload: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  update: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  }
};

function F(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(16, !1));
  K.bootstrap = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function J(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(17, !1));
  K.mount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function H(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(18, !1));
  K.unmount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function Q(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(19, !1));
  K.unload = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function V(t, n) {
  var e = t.timeouts[n],
      r = e.warningMillis,
      o = N(t);
  return new Promise(function (i, u) {
    var a = !1,
        c = !1;
    t[n](k(t)).then(function (t) {
      a = !0, i(t);
    }).catch(function (t) {
      a = !0, u(t);
    }), setTimeout(function () {
      return l(1);
    }, r), setTimeout(function () {
      return l(!0);
    }, e.millis);
    var f = s(31, !1, n, o, T(t), e.millis);

    function l(t) {
      if (!a) if (!0 === t) c = !0, e.dieOnTimeout ? u(Error(f)) : console.error(f);else if (!c) {
        var n = t,
            o = n * r;
        console.warn(f), o + r < e.millis && setTimeout(function () {
          return l(n + 1);
        }, r);
      }
    }
  });
}

function q(t) {
  var n = {};

  for (var e in K) n[e] = S({}, K[e], t && t[e] || {});

  return n;
}

function z(t) {
  return Promise.resolve().then(function () {
    return t.loadPromise ? t.loadPromise : t.status !== l && t.status !== y ? t : (t.status = p, t.loadPromise = Promise.resolve().then(function () {
      var o = t.loadApp(k(t));
      if (!j(o)) throw r = !0, Error(s(33, !1, T(t)));
      return o.then(function (r) {
        var o;
        t.loadErrorTime = null, "object" !== n(e = r) && (o = 34), Object.prototype.hasOwnProperty.call(e, "bootstrap") && !D(e.bootstrap) && (o = 35), D(e.mount) || (o = 36), D(e.unmount) || (o = 37);
        var i = N(e);

        if (o) {
          var a;

          try {
            a = JSON.stringify(e);
          } catch (t) {}

          return console.error(s(o, !1, i, T(t), a), e), u(void 0, t, P), t;
        }

        return e.devtools && e.devtools.overlays && (t.devtools.overlays = S({}, t.devtools.overlays, e.devtools.overlays)), t.status = h, t.bootstrap = U(e, "bootstrap"), t.mount = U(e, "mount"), t.unmount = U(e, "unmount"), t.unload = U(e, "unload"), t.timeouts = q(e.timeouts), delete t.loadPromise, t;
      });
    }).catch(function (n) {
      var e;
      return delete t.loadPromise, r ? e = P : (e = y, t.loadErrorTime = new Date().getTime()), u(n, t, e), t;
    }));
    var e, r;
  });
}

var X,
    Y = "undefined" != typeof window,
    Z = {
  hashchange: [],
  popstate: []
},
    tt = ["hashchange", "popstate"];

function nt(t) {
  var n;
  if ("string" == typeof t) n = t;else if (this && this.href) n = this.href;else {
    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(s(14, !1));
    n = t.currentTarget.href, t.preventDefault();
  }
  var e = ct(window.location.href),
      r = ct(n);
  0 === n.indexOf("#") ? window.location.hash = r.hash : e.host !== r.host && r.host ? window.location.href = n : r.pathname === e.pathname && r.search === e.search ? window.location.hash = r.hash : window.history.pushState(null, null, n);
}

function et(t) {
  var n = this;

  if (t) {
    var e = t[0].type;
    tt.indexOf(e) >= 0 && Z[e].forEach(function (e) {
      try {
        e.apply(n, t);
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    });
  }
}

function rt() {
  Lt([], arguments);
}

function ot(t, n) {
  return function () {
    var e = window.location.href,
        r = t.apply(this, arguments),
        o = window.location.href;
    return X && e === o || (Bt() ? window.dispatchEvent(it(window.history.state, n)) : Lt([])), r;
  };
}

function it(t, n) {
  var e;

  try {
    e = new PopStateEvent("popstate", {
      state: t
    });
  } catch (n) {
    (e = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, t);
  }

  return e.singleSpa = !0, e.singleSpaTrigger = n, e;
}

if (Y) {
  window.addEventListener("hashchange", rt), window.addEventListener("popstate", rt);
  var ut = window.addEventListener,
      at = window.removeEventListener;
  window.addEventListener = function (t, n) {
    if (!("function" == typeof n && tt.indexOf(t) >= 0) || _(Z[t], function (t) {
      return t === n;
    })) return ut.apply(this, arguments);
    Z[t].push(n);
  }, window.removeEventListener = function (t, n) {
    if (!("function" == typeof n && tt.indexOf(t) >= 0)) return at.apply(this, arguments);
    Z[t] = Z[t].filter(function (t) {
      return t !== n;
    });
  }, window.history.pushState = ot(window.history.pushState, "pushState"), window.history.replaceState = ot(window.history.replaceState, "replaceState"), window.singleSpaNavigate ? console.warn(s(41, !1)) : window.singleSpaNavigate = nt;
}

function ct(t) {
  var n = document.createElement("a");
  return n.href = t, n;
}

var st = !1;

function ft() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;

  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !st) {
    var n = t.fn.on,
        e = t.fn.off;
    t.fn.on = function (t, e) {
      return lt.call(this, n, window.addEventListener, t, e, arguments);
    }, t.fn.off = function (t, n) {
      return lt.call(this, e, window.removeEventListener, t, n, arguments);
    }, st = !0;
  }
}

function lt(t, n, e, r, o) {
  return "string" != typeof e ? t.apply(this, o) : (e.split(/\s+/).forEach(function (t) {
    tt.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, ""));
  }), "" === e.trim() ? this : t.apply(this, o));
}

var pt = {};

function ht(t) {
  return Promise.resolve().then(function () {
    var n = pt[T(t)];
    if (!n) return t;
    if (t.status === l) return mt(t, n), t;
    if ("UNLOADING" === t.status) return n.promise.then(function () {
      return t;
    });
    if (t.status !== v && t.status !== y) return t;
    var e = t.status === y ? Promise.resolve() : V(t, "unload");
    return t.status = "UNLOADING", e.then(function () {
      return mt(t, n), t;
    }).catch(function (e) {
      return function (t, n, e) {
        delete pt[T(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, u(e, t, P), n.reject(e);
      }(t, n, e), t;
    });
  });
}

function mt(t, n) {
  delete pt[T(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = l, n.resolve();
}

function vt(t, n, e, r) {
  pt[T(t)] = {
    app: t,
    resolve: e,
    reject: r
  }, Object.defineProperty(pt[T(t)], "promise", {
    get: n
  });
}

function dt(t) {
  return pt[t];
}

var wt = [];

function gt() {
  var t = [],
      n = [],
      e = [],
      r = [],
      o = new Date().getTime();
  return wt.forEach(function (i) {
    var u = i.status !== P && b(i);

    switch (i.status) {
      case y:
        u && o - i.loadErrorTime >= 200 && e.push(i);
        break;

      case l:
      case p:
        u && e.push(i);
        break;

      case h:
      case v:
        !u && dt(T(i)) ? t.push(i) : u && r.push(i);
        break;

      case w:
        u || n.push(i);
    }
  }), {
    appsToUnload: t,
    appsToUnmount: n,
    appsToLoad: e,
    appsToMount: r
  };
}

function Et() {
  return wt.filter(O).map(T);
}

function yt() {
  return wt.map(T);
}

function Pt(t) {
  var n = _(wt, function (n) {
    return T(n) === t;
  });

  return n ? n.status : null;
}

function Ot(t, e, r, o) {
  var i = function (t, e, r, o) {
    var i,
        u = {
      name: null,
      loadApp: null,
      activeWhen: null,
      customProps: null
    };
    return "object" === n(t) ? (function (t) {
      if (Array.isArray(t) || null === t) throw Error(s(39, !1));
      var e = ["name", "app", "activeWhen", "customProps"],
          r = Object.keys(t).reduce(function (t, n) {
        return e.indexOf(n) >= 0 ? t : t.concat(n);
      }, []);
      if (0 !== r.length) throw Error(s(38, !1, e.join(", "), r.join(", ")));
      if ("string" != typeof t.name || 0 === t.name.length) throw Error(s(20, !1));
      if ("object" !== n(t.app) && "function" != typeof t.app) throw Error(s(20, !1));

      var o = function (t) {
        return "string" == typeof t || "function" == typeof t;
      };

      if (!(o(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(o))) throw Error(s(24, !1));
      if (!St(t.customProps)) throw Error(s(22, !1));
    }(t), u.name = t.name, u.loadApp = t.app, u.activeWhen = t.activeWhen, u.customProps = t.customProps) : (function (t, n, e, r) {
      if ("string" != typeof t || 0 === t.length) throw Error(s(20, !1));
      if (!n) throw Error(s(23, !1));
      if ("function" != typeof e) throw Error(s(24, !1));
      if (!St(r)) throw Error(s(22, !1));
    }(t, e, r, o), u.name = t, u.loadApp = e, u.activeWhen = r, u.customProps = o), u.loadApp = "function" != typeof (i = u.loadApp) ? function () {
      return Promise.resolve(i);
    } : i, u.customProps = function (t) {
      return t || {};
    }(u.customProps), u.activeWhen = function (t) {
      var n = Array.isArray(t) ? t : [t];
      return n = n.map(function (t) {
        return "function" == typeof t ? t : _t(t);
      }), function (t) {
        return n.some(function (n) {
          return n(t);
        });
      };
    }(u.activeWhen), u;
  }(t, e, r, o);

  if (-1 !== yt().indexOf(i.name)) throw Error(s(21, !1, i.name));
  wt.push(S({
    loadErrorTime: null,
    status: l,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: []
      }
    }
  }, i)), Y && (ft(), Lt());
}

function bt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location;
  return wt.filter(function (n) {
    return n.activeWhen(t);
  }).map(T);
}

function Tt(t) {
  if (0 === wt.filter(function (n) {
    return T(n) === t;
  }).length) throw Error(s(25, !1, t));
  return At(t).then(function () {
    var n = wt.map(T).indexOf(t);
    wt.splice(n, 1);
  });
}

function At(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    waitForUnmount: !1
  };
  if ("string" != typeof t) throw Error(s(26, !1));

  var e = _(wt, function (n) {
    return T(n) === t;
  });

  if (!e) throw Error(s(27, !1, t));
  var r,
      o = dt(T(e));

  if (n && n.waitForUnmount) {
    if (o) return o.promise;
    var i = new Promise(function (t, n) {
      vt(e, function () {
        return i;
      }, t, n);
    });
    return i;
  }

  return o ? (r = o.promise, Nt(e, o.resolve, o.reject)) : r = new Promise(function (t, n) {
    vt(e, function () {
      return r;
    }, t, n), Nt(e, t, n);
  }), r;
}

function Nt(t, n, e) {
  L(t).then(ht).then(function () {
    n(), setTimeout(function () {
      Lt();
    });
  }).catch(e);
}

function St(t) {
  return !t || "function" == typeof t || "object" === n(t) && null !== t && !Array.isArray(t);
}

function _t(t, n) {
  var e = function (t, n) {
    var e = 0,
        r = !1,
        o = "^";
    "/" !== t[0] && (t = "/" + t);

    for (var i = 0; i < t.length; i++) {
      var u = t[i];
      (!r && ":" === u || r && "/" === u) && a(i);
    }

    return a(t.length), new RegExp(o, "i");

    function a(i) {
      var u = t.slice(e, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
      if (o += r ? "[^/]+/?" : u, i === t.length) if (r) n && (o += "$");else {
        var a = n ? "" : ".*";
        o = "/" === o.charAt(o.length - 1) ? "".concat(o).concat(a, "$") : "".concat(o, "(/").concat(a, ")?(#.*)?$");
      }
      r = !r, e = i;
    }
  }(t, n);

  return function (t) {
    var n = t.origin;
    n || (n = "".concat(t.protocol, "//").concat(t.host));
    var r = t.href.replace(n, "").replace(t.search, "").split("?")[0];
    return e.test(r);
  };
}

var Dt = !1,
    Ut = [],
    jt = Y && window.location.href;

function Mt() {
  return Lt();
}

function Lt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 ? arguments[1] : void 0;
  if (Dt) return new Promise(function (t, e) {
    Ut.push({
      resolve: t,
      reject: e,
      eventArguments: n
    });
  });
  var r,
      i = gt(),
      u = i.appsToUnload,
      a = i.appsToUnmount,
      c = i.appsToLoad,
      s = i.appsToMount,
      f = !1,
      p = jt,
      h = jt = window.location.href;
  return Bt() ? (Dt = !0, r = u.concat(c, a, s), g()) : (r = c, d());

  function m() {
    f = !0;
  }

  function d() {
    return Promise.resolve().then(function () {
      var t = c.map(z);
      return Promise.all(t).then(y).then(function () {
        return [];
      }).catch(function (t) {
        throw y(), t;
      });
    });
  }

  function g() {
    return Promise.resolve().then(function () {
      if (window.dispatchEvent(new o(0 === r.length ? "single-spa:before-no-app-change" : "single-spa:before-app-change", O(!0))), window.dispatchEvent(new o("single-spa:before-routing-event", O(!0, {
        cancelNavigation: m
      }))), f) return window.dispatchEvent(new o("single-spa:before-mount-routing-event", O(!0))), E(), void nt(p);
      var n = u.map(ht),
          e = a.map(L).map(function (t) {
        return t.then(ht);
      }).concat(n),
          i = Promise.all(e);
      i.then(function () {
        window.dispatchEvent(new o("single-spa:before-mount-routing-event", O(!0)));
      });
      var l = c.map(function (t) {
        return z(t).then(function (t) {
          return Rt(t, i);
        });
      }),
          h = s.filter(function (t) {
        return c.indexOf(t) < 0;
      }).map(function (t) {
        return Rt(t, i);
      });
      return i.catch(function (t) {
        throw y(), t;
      }).then(function () {
        return y(), Promise.all(l.concat(h)).catch(function (n) {
          throw t.forEach(function (t) {
            return t.reject(n);
          }), n;
        }).then(E);
      });
    });
  }

  function E() {
    var n = Et();
    t.forEach(function (t) {
      return t.resolve(n);
    });

    try {
      var e = 0 === r.length ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new o(e, O())), window.dispatchEvent(new o("single-spa:routing-event", O()));
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }

    if (Dt = !1, Ut.length > 0) {
      var i = Ut;
      Ut = [], Lt(i);
    }

    return n;
  }

  function y() {
    t.forEach(function (t) {
      et(t.eventArguments);
    }), et(n);
  }

  function O() {
    var t,
        o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = arguments.length > 1 ? arguments[1] : void 0,
        m = {},
        d = (e(t = {}, w, []), e(t, v, []), e(t, l, []), e(t, P, []), t);
    o ? (c.concat(s).forEach(function (t, n) {
      E(t, w);
    }), u.forEach(function (t) {
      E(t, l);
    }), a.forEach(function (t) {
      E(t, v);
    })) : r.forEach(function (t) {
      E(t);
    });
    var g = {
      detail: {
        newAppStatuses: m,
        appsByNewStatus: d,
        totalAppChanges: r.length,
        originalEvent: null == n ? void 0 : n[0],
        oldUrl: p,
        newUrl: h,
        navigationIsCanceled: f
      }
    };
    return i && S(g.detail, i), g;

    function E(t, n) {
      var e = T(t);
      n = n || Pt(e), m[e] = n, (d[n] = d[n] || []).push(e);
    }
  }
}

function Rt(t, n) {
  return b(t) ? M(t).then(function (t) {
    return n.then(function () {
      return b(t) ? x(t) : t;
    });
  }) : n.then(function () {
    return t;
  });
}

var It = !1;

function xt(t) {
  var n;
  It = !0, t && t.urlRerouteOnly && (n = t.urlRerouteOnly, X = n), Y && Lt();
}

function Bt() {
  return It;
}

Y && setTimeout(function () {
  It || console.warn(s(1, !1));
}, 5e3);
var Gt = {
  getRawAppData: function () {
    return [].concat(wt);
  },
  reroute: Lt,
  NOT_LOADED: l,
  toLoadPromise: z,
  toBootstrapPromise: M,
  unregisterApplication: Tt
};
Y && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Gt);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "../../node_modules/single-spa/lib/esm/single-spa.min.js");

(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('product-image', () => __webpack_require__.e(/*! import() */ "webpack_container_remote_productImage_ProductImage").then(__webpack_require__.t.bind(__webpack_require__, /*! productImage/ProductImage */ "webpack/container/remote/productImage/ProductImage", 23)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('header', () => __webpack_require__.e(/*! import() */ "webpack_container_remote_nav_Header").then(__webpack_require__.t.bind(__webpack_require__, /*! nav/Header */ "webpack/container/remote/nav/Header", 23)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('footer', () => __webpack_require__.e(/*! import() */ "webpack_container_remote_nav_Footer").then(__webpack_require__.t.bind(__webpack_require__, /*! nav/Footer */ "webpack/container/remote/nav/Footer", 23)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('buy-tools', () => __webpack_require__.e(/*! import() */ "webpack_container_remote_buyTools_BuyTools").then(__webpack_require__.t.bind(__webpack_require__, /*! buyTools/BuyTools */ "webpack/container/remote/buyTools/BuyTools", 23)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.start)();

/***/ }),

/***/ "webpack/container/reference/buyTools":
/*!***************************!*\
  !*** external "buyTools" ***!
  \***************************/
/***/ ((module) => {

module.exports = buyTools;

/***/ }),

/***/ "webpack/container/reference/nav":
/*!**********************!*\
  !*** external "nav" ***!
  \**********************/
/***/ ((module) => {

module.exports = nav;

/***/ }),

/***/ "webpack/container/reference/productImage":
/*!*******************************!*\
  !*** external "productImage" ***!
  \*******************************/
/***/ ((module) => {

module.exports = productImage;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "home:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_remote_productImage_ProductImage": [
/******/ 				"webpack/container/remote/productImage/ProductImage"
/******/ 			],
/******/ 			"webpack_container_remote_nav_Header": [
/******/ 				"webpack/container/remote/nav/Header"
/******/ 			],
/******/ 			"webpack_container_remote_nav_Footer": [
/******/ 				"webpack/container/remote/nav/Footer"
/******/ 			],
/******/ 			"webpack_container_remote_buyTools_BuyTools": [
/******/ 				"webpack/container/remote/buyTools/BuyTools"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/productImage/ProductImage": [
/******/ 				"default",
/******/ 				"./ProductImage",
/******/ 				"webpack/container/reference/productImage"
/******/ 			],
/******/ 			"webpack/container/remote/nav/Header": [
/******/ 				"default",
/******/ 				"./Header",
/******/ 				"webpack/container/reference/nav"
/******/ 			],
/******/ 			"webpack/container/remote/nav/Footer": [
/******/ 				"default",
/******/ 				"./Footer",
/******/ 				"webpack/container/reference/nav"
/******/ 			],
/******/ 			"webpack/container/remote/buyTools/BuyTools": [
/******/ 				"default",
/******/ 				"./BuyTools",
/******/ 				"webpack/container/reference/buyTools"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "home";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/productImage");
/******/ 					initExternal("webpack/container/reference/nav");
/******/ 					initExternal("webpack/container/reference/buyTools");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:3001/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("main" == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhome"] = self["webpackChunkhome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map