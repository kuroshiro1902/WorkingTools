// ==UserScript==
// @name         Get content by selectors
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tool
// @author       Jason
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  (function Tool() {
    const t = document.createElement("aside");
    t.id = "Tool_Jason_1902";
    document.body.append(t);
    const s = document.createElement("style");
    s.innerHTML = `
    *{box-sizing:border-box;margin:0;padding:0}#Tool_Jason_1902{position:fixed;bottom:0;right:0;z-index:999999;color:#fff;font-family:Comic Sans,cursive;--blue: #006bfc;--green: #00a44d;--dark: #122335;--yellow: #f9ae01;--pink: #ff0185}#Tool_Jason_1902 img{height:64px!important}#Tool_Jason_1902 button{font-family:inherit;outline:none;color:inherit;padding:.4rem .2rem;cursor:pointer;border-radius:4px;background-color:#1e3a55}#Tool_Jason_1902 button.toggle{color:var(--dark);background-color:var(--yellow);margin:4px;float:right;width:48px}#Tool_Jason_1902 label{display:block}#Tool_Jason_1902 button.submit{background-color:var(--pink);padding:8px;float:right}#Tool_Jason_1902 .Container{width:30vw;min-width:480px;height:100vh;display:flex;flex-direction:column;justify-content:space-between;background-color:#122335}#Tool_Jason_1902 main{padding:16px;max-height:100%;overflow-y:auto}#Tool_Jason_1902 main::-webkit-scrollbar{width:8px}#Tool_Jason_1902 main::-webkit-scrollbar-track{background-color:#1e3a55}#Tool_Jason_1902 main::-webkit-scrollbar-thumb{background-color:var(--blue);border-radius:4px}#Tool_Jason_1902 input,#Tool_Jason_1902 textarea{background-color:#fff!important;border-radius:6px}#Tool_Jason_1902 .input{width:100%;font-family:inherit;font-weight:bolder;letter-spacing:1.5px;word-spacing:2px;font-size:inherit;padding:4px 8px;-moz-tab-size:16px;tab-size:16px;outline:none;resize:none;color:var(--dark)}#Tool_Jason_1902 .input::placeholder{opacity:.7}#Tool_Jason_1902 p._content{margin-left:20px;margin-bottom:4px;color:#ff41a3;border-bottom:1px solid rgba(44,88,135,.5019607843)}
    `;
    s.setAttribute("data-role", "tool");
    document.head.appendChild(s);
  })();
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
      r(l);
    new MutationObserver((l) => {
      for (const o of l)
        if (o.type === "childList")
          for (const i of o.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
      const o = {};
      return (
        l.integrity && (o.integrity = l.integrity),
        l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function r(l) {
      if (l.ep) return;
      l.ep = !0;
      const o = n(l);
      fetch(l.href, o);
    }
  })();
  function cc(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Yu = { exports: {} },
    tl = {},
    Xu = { exports: {} },
    L = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Gn = Symbol.for("react.element"),
    fc = Symbol.for("react.portal"),
    dc = Symbol.for("react.fragment"),
    pc = Symbol.for("react.strict_mode"),
    mc = Symbol.for("react.profiler"),
    hc = Symbol.for("react.provider"),
    vc = Symbol.for("react.context"),
    yc = Symbol.for("react.forward_ref"),
    gc = Symbol.for("react.suspense"),
    wc = Symbol.for("react.memo"),
    Sc = Symbol.for("react.lazy"),
    Fi = Symbol.iterator;
  function kc(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Fi && e[Fi]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Gu = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Zu = Object.assign,
    Ju = {};
  function on(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Ju),
      (this.updater = n || Gu);
  }
  on.prototype.isReactComponent = {};
  on.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  on.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function qu() {}
  qu.prototype = on.prototype;
  function Ho(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Ju),
      (this.updater = n || Gu);
  }
  var Bo = (Ho.prototype = new qu());
  Bo.constructor = Ho;
  Zu(Bo, on.prototype);
  Bo.isPureReactComponent = !0;
  var Ui = Array.isArray,
    bu = Object.prototype.hasOwnProperty,
    Wo = { current: null },
    es = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ts(e, t, n) {
    var r,
      l = {},
      o = null,
      i = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        bu.call(t, r) && !es.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
      l.children = s;
    }
    if (e && e.defaultProps)
      for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
      $$typeof: Gn,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Wo.current,
    };
  }
  function Ec(e, t) {
    return {
      $$typeof: Gn,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Qo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gn;
  }
  function xc(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var $i = /\/+/g;
  function Sl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? xc("" + e.key)
      : t.toString(36);
  }
  function wr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
      switch (o) {
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Gn:
            case fc:
              i = !0;
          }
      }
    if (i)
      return (
        (i = e),
        (l = l(i)),
        (e = r === "" ? "." + Sl(i, 0) : r),
        Ui(l)
          ? ((n = ""),
            e != null && (n = e.replace($i, "$&/") + "/"),
            wr(l, t, n, "", function (f) {
              return f;
            }))
          : l != null &&
            (Qo(l) &&
              (l = Ec(
                l,
                n +
                  (!l.key || (i && i.key === l.key)
                    ? ""
                    : ("" + l.key).replace($i, "$&/") + "/") +
                  e
              )),
            t.push(l)),
        1
      );
    if (((i = 0), (r = r === "" ? "." : r + ":"), Ui(e)))
      for (var u = 0; u < e.length; u++) {
        o = e[u];
        var s = r + Sl(o, u);
        i += wr(o, t, n, s, l);
      }
    else if (((s = kc(e)), typeof s == "function"))
      for (e = s.call(e), u = 0; !(o = e.next()).done; )
        (o = o.value), (s = r + Sl(o, u++)), (i += wr(o, t, n, s, l));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return i;
  }
  function nr(e, t, n) {
    if (e == null) return e;
    var r = [],
      l = 0;
    return (
      wr(e, r, "", "", function (o) {
        return t.call(n, o, l++);
      }),
      r
    );
  }
  function Cc(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var se = { current: null },
    Sr = { transition: null },
    _c = {
      ReactCurrentDispatcher: se,
      ReactCurrentBatchConfig: Sr,
      ReactCurrentOwner: Wo,
    };
  L.Children = {
    map: nr,
    forEach: function (e, t, n) {
      nr(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        nr(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        nr(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Qo(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  L.Component = on;
  L.Fragment = dc;
  L.Profiler = mc;
  L.PureComponent = Ho;
  L.StrictMode = pc;
  L.Suspense = gc;
  L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _c;
  L.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Zu({}, e.props),
      l = e.key,
      o = e.ref,
      i = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (i = Wo.current)),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var u = e.type.defaultProps;
      for (s in t)
        bu.call(t, s) &&
          !es.hasOwnProperty(s) &&
          (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      u = Array(s);
      for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
      r.children = u;
    }
    return { $$typeof: Gn, type: e.type, key: l, ref: o, props: r, _owner: i };
  };
  L.createContext = function (e) {
    return (
      (e = {
        $$typeof: vc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: hc, _context: e }),
      (e.Consumer = e)
    );
  };
  L.createElement = ts;
  L.createFactory = function (e) {
    var t = ts.bind(null, e);
    return (t.type = e), t;
  };
  L.createRef = function () {
    return { current: null };
  };
  L.forwardRef = function (e) {
    return { $$typeof: yc, render: e };
  };
  L.isValidElement = Qo;
  L.lazy = function (e) {
    return { $$typeof: Sc, _payload: { _status: -1, _result: e }, _init: Cc };
  };
  L.memo = function (e, t) {
    return { $$typeof: wc, type: e, compare: t === void 0 ? null : t };
  };
  L.startTransition = function (e) {
    var t = Sr.transition;
    Sr.transition = {};
    try {
      e();
    } finally {
      Sr.transition = t;
    }
  };
  L.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  L.useCallback = function (e, t) {
    return se.current.useCallback(e, t);
  };
  L.useContext = function (e) {
    return se.current.useContext(e);
  };
  L.useDebugValue = function () {};
  L.useDeferredValue = function (e) {
    return se.current.useDeferredValue(e);
  };
  L.useEffect = function (e, t) {
    return se.current.useEffect(e, t);
  };
  L.useId = function () {
    return se.current.useId();
  };
  L.useImperativeHandle = function (e, t, n) {
    return se.current.useImperativeHandle(e, t, n);
  };
  L.useInsertionEffect = function (e, t) {
    return se.current.useInsertionEffect(e, t);
  };
  L.useLayoutEffect = function (e, t) {
    return se.current.useLayoutEffect(e, t);
  };
  L.useMemo = function (e, t) {
    return se.current.useMemo(e, t);
  };
  L.useReducer = function (e, t, n) {
    return se.current.useReducer(e, t, n);
  };
  L.useRef = function (e) {
    return se.current.useRef(e);
  };
  L.useState = function (e) {
    return se.current.useState(e);
  };
  L.useSyncExternalStore = function (e, t, n) {
    return se.current.useSyncExternalStore(e, t, n);
  };
  L.useTransition = function () {
    return se.current.useTransition();
  };
  L.version = "18.2.0";
  Xu.exports = L;
  var $ = Xu.exports;
  const Nc = cc($);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Pc = $,
    Tc = Symbol.for("react.element"),
    zc = Symbol.for("react.fragment"),
    Lc = Object.prototype.hasOwnProperty,
    Rc =
      Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    jc = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ns(e, t, n) {
    var r,
      l = {},
      o = null,
      i = null;
    n !== void 0 && (o = "" + n),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (i = t.ref);
    for (r in t) Lc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: Tc,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Rc.current,
    };
  }
  tl.Fragment = zc;
  tl.jsx = ns;
  tl.jsxs = ns;
  Yu.exports = tl;
  var P = Yu.exports,
    Xl = {},
    rs = { exports: {} },
    we = {},
    ls = { exports: {} },
    os = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(x, T) {
      var z = x.length;
      x.push(T);
      e: for (; 0 < z; ) {
        var Q = (z - 1) >>> 1,
          Z = x[Q];
        if (0 < l(Z, T)) (x[Q] = T), (x[z] = Z), (z = Q);
        else break e;
      }
    }
    function n(x) {
      return x.length === 0 ? null : x[0];
    }
    function r(x) {
      if (x.length === 0) return null;
      var T = x[0],
        z = x.pop();
      if (z !== T) {
        x[0] = z;
        e: for (var Q = 0, Z = x.length, er = Z >>> 1; Q < er; ) {
          var vt = 2 * (Q + 1) - 1,
            wl = x[vt],
            yt = vt + 1,
            tr = x[yt];
          if (0 > l(wl, z))
            yt < Z && 0 > l(tr, wl)
              ? ((x[Q] = tr), (x[yt] = z), (Q = yt))
              : ((x[Q] = wl), (x[vt] = z), (Q = vt));
          else if (yt < Z && 0 > l(tr, z)) (x[Q] = tr), (x[yt] = z), (Q = yt);
          else break e;
        }
      }
      return T;
    }
    function l(x, T) {
      var z = x.sortIndex - T.sortIndex;
      return z !== 0 ? z : x.id - T.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var i = Date,
        u = i.now();
      e.unstable_now = function () {
        return i.now() - u;
      };
    }
    var s = [],
      f = [],
      m = 1,
      h = null,
      p = 3,
      g = !1,
      w = !1,
      S = !1,
      I = typeof setTimeout == "function" ? setTimeout : null,
      d = typeof clearTimeout == "function" ? clearTimeout : null,
      a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function c(x) {
      for (var T = n(f); T !== null; ) {
        if (T.callback === null) r(f);
        else if (T.startTime <= x)
          r(f), (T.sortIndex = T.expirationTime), t(s, T);
        else break;
        T = n(f);
      }
    }
    function v(x) {
      if (((S = !1), c(x), !w))
        if (n(s) !== null) (w = !0), yl(k);
        else {
          var T = n(f);
          T !== null && gl(v, T.startTime - x);
        }
    }
    function k(x, T) {
      (w = !1), S && ((S = !1), d(_), (_ = -1)), (g = !0);
      var z = p;
      try {
        for (
          c(T), h = n(s);
          h !== null && (!(h.expirationTime > T) || (x && !Pe()));

        ) {
          var Q = h.callback;
          if (typeof Q == "function") {
            (h.callback = null), (p = h.priorityLevel);
            var Z = Q(h.expirationTime <= T);
            (T = e.unstable_now()),
              typeof Z == "function" ? (h.callback = Z) : h === n(s) && r(s),
              c(T);
          } else r(s);
          h = n(s);
        }
        if (h !== null) var er = !0;
        else {
          var vt = n(f);
          vt !== null && gl(v, vt.startTime - T), (er = !1);
        }
        return er;
      } finally {
        (h = null), (p = z), (g = !1);
      }
    }
    var C = !1,
      N = null,
      _ = -1,
      M = 5,
      R = -1;
    function Pe() {
      return !(e.unstable_now() - R < M);
    }
    function an() {
      if (N !== null) {
        var x = e.unstable_now();
        R = x;
        var T = !0;
        try {
          T = N(!0, x);
        } finally {
          T ? cn() : ((C = !1), (N = null));
        }
      } else C = !1;
    }
    var cn;
    if (typeof a == "function")
      cn = function () {
        a(an);
      };
    else if (typeof MessageChannel < "u") {
      var Di = new MessageChannel(),
        ac = Di.port2;
      (Di.port1.onmessage = an),
        (cn = function () {
          ac.postMessage(null);
        });
    } else
      cn = function () {
        I(an, 0);
      };
    function yl(x) {
      (N = x), C || ((C = !0), cn());
    }
    function gl(x, T) {
      _ = I(function () {
        x(e.unstable_now());
      }, T);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (x) {
        x.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        w || g || ((w = !0), yl(k));
      }),
      (e.unstable_forceFrameRate = function (x) {
        0 > x || 125 < x
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (M = 0 < x ? Math.floor(1e3 / x) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return p;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(s);
      }),
      (e.unstable_next = function (x) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var T = 3;
            break;
          default:
            T = p;
        }
        var z = p;
        p = T;
        try {
          return x();
        } finally {
          p = z;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (x, T) {
        switch (x) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            x = 3;
        }
        var z = p;
        p = x;
        try {
          return T();
        } finally {
          p = z;
        }
      }),
      (e.unstable_scheduleCallback = function (x, T, z) {
        var Q = e.unstable_now();
        switch (
          (typeof z == "object" && z !== null
            ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
            : (z = Q),
          x)
        ) {
          case 1:
            var Z = -1;
            break;
          case 2:
            Z = 250;
            break;
          case 5:
            Z = 1073741823;
            break;
          case 4:
            Z = 1e4;
            break;
          default:
            Z = 5e3;
        }
        return (
          (Z = z + Z),
          (x = {
            id: m++,
            callback: T,
            priorityLevel: x,
            startTime: z,
            expirationTime: Z,
            sortIndex: -1,
          }),
          z > Q
            ? ((x.sortIndex = z),
              t(f, x),
              n(s) === null &&
                x === n(f) &&
                (S ? (d(_), (_ = -1)) : (S = !0), gl(v, z - Q)))
            : ((x.sortIndex = Z), t(s, x), w || g || ((w = !0), yl(k))),
          x
        );
      }),
      (e.unstable_shouldYield = Pe),
      (e.unstable_wrapCallback = function (x) {
        var T = p;
        return function () {
          var z = p;
          p = T;
          try {
            return x.apply(this, arguments);
          } finally {
            p = z;
          }
        };
      });
  })(os);
  ls.exports = os;
  var Oc = ls.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var is = $,
    ge = Oc;
  function y(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var us = new Set(),
    jn = {};
  function Lt(e, t) {
    qt(e, t), qt(e + "Capture", t);
  }
  function qt(e, t) {
    for (jn[e] = t, e = 0; e < t.length; e++) us.add(t[e]);
  }
  var Qe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Gl = Object.prototype.hasOwnProperty,
    Mc =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vi = {},
    Ai = {};
  function Ic(e) {
    return Gl.call(Ai, e)
      ? !0
      : Gl.call(Vi, e)
      ? !1
      : Mc.test(e)
      ? (Ai[e] = !0)
      : ((Vi[e] = !0), !1);
  }
  function Dc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Fc(e, t, n, r) {
    if (t === null || typeof t > "u" || Dc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function ae(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      te[e] = new ae(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    te[e] = new ae(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    te[e] = new ae(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    te[e] = new ae(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    te[e] = new ae(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ko = /[\-:]([a-z])/g;
  function Yo(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ko, Yo);
      te[t] = new ae(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ko, Yo);
      te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ko, Yo);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  te.xlinkHref = new ae(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Xo(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Fc(t, n, l, r) && (n = null),
      r || l === null
        ? Ic(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ge = is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rr = Symbol.for("react.element"),
    Ot = Symbol.for("react.portal"),
    Mt = Symbol.for("react.fragment"),
    Go = Symbol.for("react.strict_mode"),
    Zl = Symbol.for("react.profiler"),
    ss = Symbol.for("react.provider"),
    as = Symbol.for("react.context"),
    Zo = Symbol.for("react.forward_ref"),
    Jl = Symbol.for("react.suspense"),
    ql = Symbol.for("react.suspense_list"),
    Jo = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    cs = Symbol.for("react.offscreen"),
    Hi = Symbol.iterator;
  function fn(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Hi && e[Hi]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var B = Object.assign,
    kl;
  function wn(e) {
    if (kl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        kl = (t && t[1]) || "";
      }
    return (
      `
` +
      kl +
      e
    );
  }
  var El = !1;
  function xl(e, t) {
    if (!e || El) return "";
    El = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (f) {
            var r = f;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (f) {
            r = f;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (f) {
          r = f;
        }
        e();
      }
    } catch (f) {
      if (f && r && typeof f.stack == "string") {
        for (
          var l = f.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];

        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      (El = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
  }
  function Uc(e) {
    switch (e.tag) {
      case 5:
        return wn(e.type);
      case 16:
        return wn("Lazy");
      case 13:
        return wn("Suspense");
      case 19:
        return wn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = xl(e.type, !1)), e;
      case 11:
        return (e = xl(e.type.render, !1)), e;
      case 1:
        return (e = xl(e.type, !0)), e;
      default:
        return "";
    }
  }
  function bl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Mt:
        return "Fragment";
      case Ot:
        return "Portal";
      case Zl:
        return "Profiler";
      case Go:
        return "StrictMode";
      case Jl:
        return "Suspense";
      case ql:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case as:
          return (e.displayName || "Context") + ".Consumer";
        case ss:
          return (e._context.displayName || "Context") + ".Provider";
        case Zo:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Jo:
          return (
            (t = e.displayName || null), t !== null ? t : bl(e.type) || "Memo"
          );
        case Je:
          (t = e._payload), (e = e._init);
          try {
            return bl(e(t));
          } catch {}
      }
    return null;
  }
  function $c(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return bl(t);
      case 8:
        return t === Go ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ft(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fs(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Vc(e) {
    var t = fs(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function lr(e) {
    e._valueTracker || (e._valueTracker = Vc(e));
  }
  function ds(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = fs(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Rr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function eo(e, t) {
    var n = t.checked;
    return B({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Bi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ft(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ps(e, t) {
    (t = t.checked), t != null && Xo(e, "checked", t, !1);
  }
  function to(e, t) {
    ps(e, t);
    var n = ft(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? no(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && no(e, t.type, ft(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Wi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function no(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Sn = Array.isArray;
  function Kt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ro(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return B({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Qi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(y(92));
        if (Sn(n)) {
          if (1 < n.length) throw Error(y(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ft(n) };
  }
  function ms(e, t) {
    var n = ft(t.value),
      r = ft(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Ki(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function hs(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? hs(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var or,
    vs = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          or = or || document.createElement("div"),
            or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = or.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ac = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xn).forEach(function (e) {
    Ac.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xn[t] = xn[e]);
    });
  });
  function ys(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (xn.hasOwnProperty(e) && xn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function gs(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = ys(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Hc = B(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function oo(e, t) {
    if (t) {
      if (Hc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(y(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(y(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(y(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(y(62));
    }
  }
  function io(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uo = null;
  function qo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var so = null,
    Yt = null,
    Xt = null;
  function Yi(e) {
    if ((e = qn(e))) {
      if (typeof so != "function") throw Error(y(280));
      var t = e.stateNode;
      t && ((t = il(t)), so(e.stateNode, e.type, t));
    }
  }
  function ws(e) {
    Yt ? (Xt ? Xt.push(e) : (Xt = [e])) : (Yt = e);
  }
  function Ss() {
    if (Yt) {
      var e = Yt,
        t = Xt;
      if (((Xt = Yt = null), Yi(e), t)) for (e = 0; e < t.length; e++) Yi(t[e]);
    }
  }
  function ks(e, t) {
    return e(t);
  }
  function Es() {}
  var Cl = !1;
  function xs(e, t, n) {
    if (Cl) return e(t, n);
    Cl = !0;
    try {
      return ks(e, t, n);
    } finally {
      (Cl = !1), (Yt !== null || Xt !== null) && (Es(), Ss());
    }
  }
  function Mn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n;
  }
  var ao = !1;
  if (Qe)
    try {
      var dn = {};
      Object.defineProperty(dn, "passive", {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener("test", dn, dn),
        window.removeEventListener("test", dn, dn);
    } catch {
      ao = !1;
    }
  function Bc(e, t, n, r, l, o, i, u, s) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, f);
    } catch (m) {
      this.onError(m);
    }
  }
  var Cn = !1,
    jr = null,
    Or = !1,
    co = null,
    Wc = {
      onError: function (e) {
        (Cn = !0), (jr = e);
      },
    };
  function Qc(e, t, n, r, l, o, i, u, s) {
    (Cn = !1), (jr = null), Bc.apply(Wc, arguments);
  }
  function Kc(e, t, n, r, l, o, i, u, s) {
    if ((Qc.apply(this, arguments), Cn)) {
      if (Cn) {
        var f = jr;
        (Cn = !1), (jr = null);
      } else throw Error(y(198));
      Or || ((Or = !0), (co = f));
    }
  }
  function Rt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Cs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Xi(e) {
    if (Rt(e) !== e) throw Error(y(188));
  }
  function Yc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Rt(e)), t === null)) throw Error(y(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Xi(l), e;
          if (o === r) return Xi(l), t;
          o = o.sibling;
        }
        throw Error(y(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              (i = !0), (n = o), (r = l);
              break;
            }
            if (u === r) {
              (i = !0), (r = o), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(y(189));
        }
      }
      if (n.alternate !== r) throw Error(y(190));
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t;
  }
  function _s(e) {
    return (e = Yc(e)), e !== null ? Ns(e) : null;
  }
  function Ns(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ns(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ps = ge.unstable_scheduleCallback,
    Gi = ge.unstable_cancelCallback,
    Xc = ge.unstable_shouldYield,
    Gc = ge.unstable_requestPaint,
    K = ge.unstable_now,
    Zc = ge.unstable_getCurrentPriorityLevel,
    bo = ge.unstable_ImmediatePriority,
    Ts = ge.unstable_UserBlockingPriority,
    Mr = ge.unstable_NormalPriority,
    Jc = ge.unstable_LowPriority,
    zs = ge.unstable_IdlePriority,
    nl = null,
    Ue = null;
  function qc(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
      try {
        Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var je = Math.clz32 ? Math.clz32 : tf,
    bc = Math.log,
    ef = Math.LN2;
  function tf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((bc(e) / ef) | 0)) | 0;
  }
  var ir = 64,
    ur = 4194304;
  function kn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ir(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = kn(u)) : ((o &= i), o !== 0 && (r = kn(o)));
    } else (i = n & ~l), i !== 0 ? (r = kn(i)) : o !== 0 && (r = kn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function nf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - je(o),
        u = 1 << i,
        s = l[i];
      s === -1
        ? (!(u & n) || u & r) && (l[i] = nf(u, t))
        : s <= t && (e.expiredLanes |= u),
        (o &= ~u);
    }
  }
  function fo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ls() {
    var e = ir;
    return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
  }
  function _l(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - je(t)),
      (e[t] = n);
  }
  function lf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - je(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function ei(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - je(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var O = 0;
  function Rs(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var js,
    ti,
    Os,
    Ms,
    Is,
    po = !1,
    sr = [],
    rt = null,
    lt = null,
    ot = null,
    In = new Map(),
    Dn = new Map(),
    be = [],
    of =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Zi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        rt = null;
        break;
      case "dragenter":
      case "dragleave":
        lt = null;
        break;
      case "mouseover":
      case "mouseout":
        ot = null;
        break;
      case "pointerover":
      case "pointerout":
        In.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(t.pointerId);
    }
  }
  function pn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = qn(t)), t !== null && ti(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function uf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (rt = pn(rt, e, t, n, r, l)), !0;
      case "dragenter":
        return (lt = pn(lt, e, t, n, r, l)), !0;
      case "mouseover":
        return (ot = pn(ot, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return In.set(o, pn(In.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), Dn.set(o, pn(Dn.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Ds(e) {
    var t = St(e.target);
    if (t !== null) {
      var n = Rt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Cs(n)), t !== null)) {
            (e.blockedOn = t),
              Is(e.priority, function () {
                Os(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (uo = r), n.target.dispatchEvent(r), (uo = null);
      } else return (t = qn(n)), t !== null && ti(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Ji(e, t, n) {
    kr(e) && n.delete(t);
  }
  function sf() {
    (po = !1),
      rt !== null && kr(rt) && (rt = null),
      lt !== null && kr(lt) && (lt = null),
      ot !== null && kr(ot) && (ot = null),
      In.forEach(Ji),
      Dn.forEach(Ji);
  }
  function mn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      po ||
        ((po = !0),
        ge.unstable_scheduleCallback(ge.unstable_NormalPriority, sf)));
  }
  function Fn(e) {
    function t(l) {
      return mn(l, e);
    }
    if (0 < sr.length) {
      mn(sr[0], e);
      for (var n = 1; n < sr.length; n++) {
        var r = sr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      rt !== null && mn(rt, e),
        lt !== null && mn(lt, e),
        ot !== null && mn(ot, e),
        In.forEach(t),
        Dn.forEach(t),
        n = 0;
      n < be.length;
      n++
    )
      (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
      Ds(n), n.blockedOn === null && be.shift();
  }
  var Gt = Ge.ReactCurrentBatchConfig,
    Dr = !0;
  function af(e, t, n, r) {
    var l = O,
      o = Gt.transition;
    Gt.transition = null;
    try {
      (O = 1), ni(e, t, n, r);
    } finally {
      (O = l), (Gt.transition = o);
    }
  }
  function cf(e, t, n, r) {
    var l = O,
      o = Gt.transition;
    Gt.transition = null;
    try {
      (O = 4), ni(e, t, n, r);
    } finally {
      (O = l), (Gt.transition = o);
    }
  }
  function ni(e, t, n, r) {
    if (Dr) {
      var l = mo(e, t, n, r);
      if (l === null) Il(e, t, r, Fr, n), Zi(e, r);
      else if (uf(l, e, t, n, r)) r.stopPropagation();
      else if ((Zi(e, r), t & 4 && -1 < of.indexOf(e))) {
        for (; l !== null; ) {
          var o = qn(l);
          if (
            (o !== null && js(o),
            (o = mo(e, t, n, r)),
            o === null && Il(e, t, r, Fr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Il(e, t, r, null, n);
    }
  }
  var Fr = null;
  function mo(e, t, n, r) {
    if (((Fr = null), (e = qo(r)), (e = St(e)), e !== null))
      if (((t = Rt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Cs(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Fr = e), null;
  }
  function Fs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Zc()) {
          case bo:
            return 1;
          case Ts:
            return 4;
          case Mr:
          case Jc:
            return 16;
          case zs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var tt = null,
    ri = null,
    Er = null;
  function Us() {
    if (Er) return Er;
    var e,
      t = ri,
      n = t.length,
      r,
      l = "value" in tt ? tt.value : tt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function xr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ar() {
    return !0;
  }
  function qi() {
    return !1;
  }
  function Se(e) {
    function t(n, r, l, o, i) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ar
          : qi),
        (this.isPropagationStopped = qi),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ar));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ar));
        },
        persist: function () {},
        isPersistent: ar,
      }),
      t
    );
  }
  var un = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    li = Se(un),
    Jn = B({}, un, { view: 0, detail: 0 }),
    ff = Se(Jn),
    Nl,
    Pl,
    hn,
    rl = B({}, Jn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== hn &&
              (hn && e.type === "mousemove"
                ? ((Nl = e.screenX - hn.screenX), (Pl = e.screenY - hn.screenY))
                : (Pl = Nl = 0),
              (hn = e)),
            Nl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Pl;
      },
    }),
    bi = Se(rl),
    df = B({}, rl, { dataTransfer: 0 }),
    pf = Se(df),
    mf = B({}, Jn, { relatedTarget: 0 }),
    Tl = Se(mf),
    hf = B({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vf = Se(hf),
    yf = B({}, un, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    gf = Se(yf),
    wf = B({}, un, { data: 0 }),
    eu = Se(wf),
    Sf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    kf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ef = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ef[e])
      ? !!t[e]
      : !1;
  }
  function oi() {
    return xf;
  }
  var Cf = B({}, Jn, {
      key: function (e) {
        if (e.key) {
          var t = Sf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? kf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oi,
      charCode: function (e) {
        return e.type === "keypress" ? xr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? xr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    _f = Se(Cf),
    Nf = B({}, rl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tu = Se(Nf),
    Pf = B({}, Jn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oi,
    }),
    Tf = Se(Pf),
    zf = B({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lf = Se(zf),
    Rf = B({}, rl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jf = Se(Rf),
    Of = [9, 13, 27, 32],
    ii = Qe && "CompositionEvent" in window,
    _n = null;
  Qe && "documentMode" in document && (_n = document.documentMode);
  var Mf = Qe && "TextEvent" in window && !_n,
    $s = Qe && (!ii || (_n && 8 < _n && 11 >= _n)),
    nu = String.fromCharCode(32),
    ru = !1;
  function Vs(e, t) {
    switch (e) {
      case "keyup":
        return Of.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function As(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var It = !1;
  function If(e, t) {
    switch (e) {
      case "compositionend":
        return As(t);
      case "keypress":
        return t.which !== 32 ? null : ((ru = !0), nu);
      case "textInput":
        return (e = t.data), e === nu && ru ? null : e;
      default:
        return null;
    }
  }
  function Df(e, t) {
    if (It)
      return e === "compositionend" || (!ii && Vs(e, t))
        ? ((e = Us()), (Er = ri = tt = null), (It = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $s && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ff = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ff[e.type] : t === "textarea";
  }
  function Hs(e, t, n, r) {
    ws(r),
      (t = Ur(t, "onChange")),
      0 < t.length &&
        ((n = new li("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Nn = null,
    Un = null;
  function Uf(e) {
    bs(e, 0);
  }
  function ll(e) {
    var t = Ut(e);
    if (ds(t)) return e;
  }
  function $f(e, t) {
    if (e === "change") return t;
  }
  var Bs = !1;
  if (Qe) {
    var zl;
    if (Qe) {
      var Ll = "oninput" in document;
      if (!Ll) {
        var ou = document.createElement("div");
        ou.setAttribute("oninput", "return;"),
          (Ll = typeof ou.oninput == "function");
      }
      zl = Ll;
    } else zl = !1;
    Bs = zl && (!document.documentMode || 9 < document.documentMode);
  }
  function iu() {
    Nn && (Nn.detachEvent("onpropertychange", Ws), (Un = Nn = null));
  }
  function Ws(e) {
    if (e.propertyName === "value" && ll(Un)) {
      var t = [];
      Hs(t, Un, e, qo(e)), xs(Uf, t);
    }
  }
  function Vf(e, t, n) {
    e === "focusin"
      ? (iu(), (Nn = t), (Un = n), Nn.attachEvent("onpropertychange", Ws))
      : e === "focusout" && iu();
  }
  function Af(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ll(Un);
  }
  function Hf(e, t) {
    if (e === "click") return ll(t);
  }
  function Bf(e, t) {
    if (e === "input" || e === "change") return ll(t);
  }
  function Wf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Me = typeof Object.is == "function" ? Object.is : Wf;
  function $n(e, t) {
    if (Me(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Gl.call(t, l) || !Me(e[l], t[l])) return !1;
    }
    return !0;
  }
  function uu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function su(e, t) {
    var n = uu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = uu(n);
    }
  }
  function Qs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Qs(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ks() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Rr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Qf(e) {
    var t = Ks(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Qs(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ui(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = su(n, o));
          var i = su(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Kf = Qe && "documentMode" in document && 11 >= document.documentMode,
    Dt = null,
    ho = null,
    Pn = null,
    vo = !1;
  function au(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vo ||
      Dt == null ||
      Dt !== Rr(r) ||
      ((r = Dt),
      "selectionStart" in r && ui(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Pn && $n(Pn, r)) ||
        ((Pn = r),
        (r = Ur(ho, "onSelect")),
        0 < r.length &&
          ((t = new li("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Dt))));
  }
  function cr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ft = {
      animationend: cr("Animation", "AnimationEnd"),
      animationiteration: cr("Animation", "AnimationIteration"),
      animationstart: cr("Animation", "AnimationStart"),
      transitionend: cr("Transition", "TransitionEnd"),
    },
    Rl = {},
    Ys = {};
  Qe &&
    ((Ys = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ft.animationend.animation,
      delete Ft.animationiteration.animation,
      delete Ft.animationstart.animation),
    "TransitionEvent" in window || delete Ft.transitionend.transition);
  function ol(e) {
    if (Rl[e]) return Rl[e];
    if (!Ft[e]) return e;
    var t = Ft[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ys) return (Rl[e] = t[n]);
    return e;
  }
  var Xs = ol("animationend"),
    Gs = ol("animationiteration"),
    Zs = ol("animationstart"),
    Js = ol("transitionend"),
    qs = new Map(),
    cu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function pt(e, t) {
    qs.set(e, t), Lt(t, [e]);
  }
  for (var jl = 0; jl < cu.length; jl++) {
    var Ol = cu[jl],
      Yf = Ol.toLowerCase(),
      Xf = Ol[0].toUpperCase() + Ol.slice(1);
    pt(Yf, "on" + Xf);
  }
  pt(Xs, "onAnimationEnd");
  pt(Gs, "onAnimationIteration");
  pt(Zs, "onAnimationStart");
  pt("dblclick", "onDoubleClick");
  pt("focusin", "onFocus");
  pt("focusout", "onBlur");
  pt(Js, "onTransitionEnd");
  qt("onMouseEnter", ["mouseout", "mouseover"]);
  qt("onMouseLeave", ["mouseout", "mouseover"]);
  qt("onPointerEnter", ["pointerout", "pointerover"]);
  qt("onPointerLeave", ["pointerout", "pointerover"]);
  Lt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  Lt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Lt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  Lt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  Lt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var En =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Gf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(En)
    );
  function fu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Kc(r, t, void 0, e), (e.currentTarget = null);
  }
  function bs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              s = u.instance,
              f = u.currentTarget;
            if (((u = u.listener), s !== o && l.isPropagationStopped()))
              break e;
            fu(l, u, f), (o = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (s = u.instance),
              (f = u.currentTarget),
              (u = u.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            fu(l, u, f), (o = s);
          }
      }
    }
    if (Or) throw ((e = co), (Or = !1), (co = null), e);
  }
  function F(e, t) {
    var n = t[ko];
    n === void 0 && (n = t[ko] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ea(t, e, 2, !1), n.add(r));
  }
  function Ml(e, t, n) {
    var r = 0;
    t && (r |= 4), ea(n, e, r, t);
  }
  var fr = "_reactListening" + Math.random().toString(36).slice(2);
  function Vn(e) {
    if (!e[fr]) {
      (e[fr] = !0),
        us.forEach(function (n) {
          n !== "selectionchange" && (Gf.has(n) || Ml(n, !1, e), Ml(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fr] || ((t[fr] = !0), Ml("selectionchange", !1, t));
    }
  }
  function ea(e, t, n, r) {
    switch (Fs(t)) {
      case 1:
        var l = af;
        break;
      case 4:
        l = cf;
        break;
      default:
        l = ni;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !ao ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Il(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = St(u)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    xs(function () {
      var f = o,
        m = qo(n),
        h = [];
      e: {
        var p = qs.get(e);
        if (p !== void 0) {
          var g = li,
            w = e;
          switch (e) {
            case "keypress":
              if (xr(n) === 0) break e;
            case "keydown":
            case "keyup":
              g = _f;
              break;
            case "focusin":
              (w = "focus"), (g = Tl);
              break;
            case "focusout":
              (w = "blur"), (g = Tl);
              break;
            case "beforeblur":
            case "afterblur":
              g = Tl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = pf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Tf;
              break;
            case Xs:
            case Gs:
            case Zs:
              g = vf;
              break;
            case Js:
              g = Lf;
              break;
            case "scroll":
              g = ff;
              break;
            case "wheel":
              g = jf;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = gf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = tu;
          }
          var S = (t & 4) !== 0,
            I = !S && e === "scroll",
            d = S ? (p !== null ? p + "Capture" : null) : p;
          S = [];
          for (var a = f, c; a !== null; ) {
            c = a;
            var v = c.stateNode;
            if (
              (c.tag === 5 &&
                v !== null &&
                ((c = v),
                d !== null &&
                  ((v = Mn(a, d)), v != null && S.push(An(a, v, c)))),
              I)
            )
              break;
            a = a.return;
          }
          0 < S.length &&
            ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: S }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (g = e === "mouseout" || e === "pointerout"),
            p &&
              n !== uo &&
              (w = n.relatedTarget || n.fromElement) &&
              (St(w) || w[Ke]))
          )
            break e;
          if (
            (g || p) &&
            ((p =
              m.window === m
                ? m
                : (p = m.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
            g
              ? ((w = n.relatedTarget || n.toElement),
                (g = f),
                (w = w ? St(w) : null),
                w !== null &&
                  ((I = Rt(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) &&
                  (w = null))
              : ((g = null), (w = f)),
            g !== w)
          ) {
            if (
              ((S = bi),
              (v = "onMouseLeave"),
              (d = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((S = tu),
                (v = "onPointerLeave"),
                (d = "onPointerEnter"),
                (a = "pointer")),
              (I = g == null ? p : Ut(g)),
              (c = w == null ? p : Ut(w)),
              (p = new S(v, a + "leave", g, n, m)),
              (p.target = I),
              (p.relatedTarget = c),
              (v = null),
              St(m) === f &&
                ((S = new S(d, a + "enter", w, n, m)),
                (S.target = c),
                (S.relatedTarget = I),
                (v = S)),
              (I = v),
              g && w)
            )
              t: {
                for (S = g, d = w, a = 0, c = S; c; c = jt(c)) a++;
                for (c = 0, v = d; v; v = jt(v)) c++;
                for (; 0 < a - c; ) (S = jt(S)), a--;
                for (; 0 < c - a; ) (d = jt(d)), c--;
                for (; a--; ) {
                  if (S === d || (d !== null && S === d.alternate)) break t;
                  (S = jt(S)), (d = jt(d));
                }
                S = null;
              }
            else S = null;
            g !== null && du(h, p, g, S, !1),
              w !== null && I !== null && du(h, I, w, S, !0);
          }
        }
        e: {
          if (
            ((p = f ? Ut(f) : window),
            (g = p.nodeName && p.nodeName.toLowerCase()),
            g === "select" || (g === "input" && p.type === "file"))
          )
            var k = $f;
          else if (lu(p))
            if (Bs) k = Bf;
            else {
              k = Af;
              var C = Vf;
            }
          else
            (g = p.nodeName) &&
              g.toLowerCase() === "input" &&
              (p.type === "checkbox" || p.type === "radio") &&
              (k = Hf);
          if (k && (k = k(e, f))) {
            Hs(h, k, n, m);
            break e;
          }
          C && C(e, p, f),
            e === "focusout" &&
              (C = p._wrapperState) &&
              C.controlled &&
              p.type === "number" &&
              no(p, "number", p.value);
        }
        switch (((C = f ? Ut(f) : window), e)) {
          case "focusin":
            (lu(C) || C.contentEditable === "true") &&
              ((Dt = C), (ho = f), (Pn = null));
            break;
          case "focusout":
            Pn = ho = Dt = null;
            break;
          case "mousedown":
            vo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (vo = !1), au(h, n, m);
            break;
          case "selectionchange":
            if (Kf) break;
          case "keydown":
          case "keyup":
            au(h, n, m);
        }
        var N;
        if (ii)
          e: {
            switch (e) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break e;
              case "compositionend":
                _ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break e;
            }
            _ = void 0;
          }
        else
          It
            ? Vs(e, n) && (_ = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (_ = "onCompositionStart");
        _ &&
          ($s &&
            n.locale !== "ko" &&
            (It || _ !== "onCompositionStart"
              ? _ === "onCompositionEnd" && It && (N = Us())
              : ((tt = m),
                (ri = "value" in tt ? tt.value : tt.textContent),
                (It = !0))),
          (C = Ur(f, _)),
          0 < C.length &&
            ((_ = new eu(_, e, null, n, m)),
            h.push({ event: _, listeners: C }),
            N ? (_.data = N) : ((N = As(n)), N !== null && (_.data = N)))),
          (N = Mf ? If(e, n) : Df(e, n)) &&
            ((f = Ur(f, "onBeforeInput")),
            0 < f.length &&
              ((m = new eu("onBeforeInput", "beforeinput", null, n, m)),
              h.push({ event: m, listeners: f }),
              (m.data = N)));
      }
      bs(h, t);
    });
  }
  function An(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ur(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Mn(e, n)),
        o != null && r.unshift(An(e, o, l)),
        (o = Mn(e, t)),
        o != null && r.push(An(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function jt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function du(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        f = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        f !== null &&
        ((u = f),
        l
          ? ((s = Mn(n, o)), s != null && i.unshift(An(n, s, u)))
          : l || ((s = Mn(n, o)), s != null && i.push(An(n, s, u)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Zf = /\r\n?/g,
    Jf = /\u0000|\uFFFD/g;
  function pu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zf,
        `
`
      )
      .replace(Jf, "");
  }
  function dr(e, t, n) {
    if (((t = pu(t)), pu(e) !== t && n)) throw Error(y(425));
  }
  function $r() {}
  var yo = null,
    go = null;
  function wo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var So = typeof setTimeout == "function" ? setTimeout : void 0,
    qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    mu = typeof Promise == "function" ? Promise : void 0,
    bf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof mu < "u"
        ? function (e) {
            return mu.resolve(null).then(e).catch(ed);
          }
        : So;
  function ed(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Dl(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Fn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Fn(t);
  }
  function it(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function hu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var sn = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + sn,
    Hn = "__reactProps$" + sn,
    Ke = "__reactContainer$" + sn,
    ko = "__reactEvents$" + sn,
    td = "__reactListeners$" + sn,
    nd = "__reactHandles$" + sn;
  function St(e) {
    var t = e[Fe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ke] || n[Fe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = hu(e); e !== null; ) {
            if ((n = e[Fe])) return n;
            e = hu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function qn(e) {
    return (
      (e = e[Fe] || e[Ke]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ut(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
  }
  function il(e) {
    return e[Hn] || null;
  }
  var Eo = [],
    $t = -1;
  function mt(e) {
    return { current: e };
  }
  function U(e) {
    0 > $t || ((e.current = Eo[$t]), (Eo[$t] = null), $t--);
  }
  function D(e, t) {
    $t++, (Eo[$t] = e.current), (e.current = t);
  }
  var dt = {},
    oe = mt(dt),
    de = mt(!1),
    _t = dt;
  function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function pe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Vr() {
    U(de), U(oe);
  }
  function vu(e, t, n) {
    if (oe.current !== dt) throw Error(y(168));
    D(oe, t), D(de, n);
  }
  function ta(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(y(108, $c(e) || "Unknown", l));
    return B({}, n, r);
  }
  function Ar(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        dt),
      (_t = oe.current),
      D(oe, e),
      D(de, de.current),
      !0
    );
  }
  function yu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n
      ? ((e = ta(e, t, _t)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        U(de),
        U(oe),
        D(oe, e))
      : U(de),
      D(de, n);
  }
  var Ae = null,
    ul = !1,
    Fl = !1;
  function na(e) {
    Ae === null ? (Ae = [e]) : Ae.push(e);
  }
  function rd(e) {
    (ul = !0), na(e);
  }
  function ht() {
    if (!Fl && Ae !== null) {
      Fl = !0;
      var e = 0,
        t = O;
      try {
        var n = Ae;
        for (O = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Ae = null), (ul = !1);
      } catch (l) {
        throw (Ae !== null && (Ae = Ae.slice(e + 1)), Ps(bo, ht), l);
      } finally {
        (O = t), (Fl = !1);
      }
    }
    return null;
  }
  var Vt = [],
    At = 0,
    Hr = null,
    Br = 0,
    ke = [],
    Ee = 0,
    Nt = null,
    He = 1,
    Be = "";
  function gt(e, t) {
    (Vt[At++] = Br), (Vt[At++] = Hr), (Hr = e), (Br = t);
  }
  function ra(e, t, n) {
    (ke[Ee++] = He), (ke[Ee++] = Be), (ke[Ee++] = Nt), (Nt = e);
    var r = He;
    e = Be;
    var l = 32 - je(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - je(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (He = (1 << (32 - je(t) + l)) | (n << l) | r),
        (Be = o + e);
    } else (He = (1 << o) | (n << l) | r), (Be = e);
  }
  function si(e) {
    e.return !== null && (gt(e, 1), ra(e, 1, 0));
  }
  function ai(e) {
    for (; e === Hr; )
      (Hr = Vt[--At]), (Vt[At] = null), (Br = Vt[--At]), (Vt[At] = null);
    for (; e === Nt; )
      (Nt = ke[--Ee]),
        (ke[Ee] = null),
        (Be = ke[--Ee]),
        (ke[Ee] = null),
        (He = ke[--Ee]),
        (ke[Ee] = null);
  }
  var ye = null,
    ve = null,
    V = !1,
    Re = null;
  function la(e, t) {
    var n = xe(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function gu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ye = e), (ve = it(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Nt !== null ? { id: He, overflow: Be } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = xe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ye = e),
              (ve = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Co(e) {
    if (V) {
      var t = ve;
      if (t) {
        var n = t;
        if (!gu(e, t)) {
          if (xo(e)) throw Error(y(418));
          t = it(n.nextSibling);
          var r = ye;
          t && gu(e, t)
            ? la(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
        }
      } else {
        if (xo(e)) throw Error(y(418));
        (e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e);
      }
    }
  }
  function wu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ye = e;
  }
  function pr(e) {
    if (e !== ye) return !1;
    if (!V) return wu(e), (V = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps))),
      t && (t = ve))
    ) {
      if (xo(e)) throw (oa(), Error(y(418)));
      for (; t; ) la(e, t), (t = it(t.nextSibling));
    }
    if ((wu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(y(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ve = it(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ve = null;
      }
    } else ve = ye ? it(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oa() {
    for (var e = ve; e; ) e = it(e.nextSibling);
  }
  function en() {
    (ve = ye = null), (V = !1);
  }
  function ci(e) {
    Re === null ? (Re = [e]) : Re.push(e);
  }
  var ld = Ge.ReactCurrentBatchConfig;
  function ze(e, t) {
    if (e && e.defaultProps) {
      (t = B({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Wr = mt(null),
    Qr = null,
    Ht = null,
    fi = null;
  function di() {
    fi = Ht = Qr = null;
  }
  function pi(e) {
    var t = Wr.current;
    U(Wr), (e._currentValue = t);
  }
  function _o(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Zt(e, t) {
    (Qr = e),
      (fi = Ht = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (fe = !0), (e.firstContext = null));
  }
  function _e(e) {
    var t = e._currentValue;
    if (fi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
        if (Qr === null) throw Error(y(308));
        (Ht = e), (Qr.dependencies = { lanes: 0, firstContext: e });
      } else Ht = Ht.next = e;
    return t;
  }
  var kt = null;
  function mi(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function ia(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), mi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ye(e, r)
    );
  }
  function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var qe = !1;
  function hi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ua(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function We(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), j & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ye(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), mi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ye(e, n)
    );
  }
  function Cr(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ei(e, n);
    }
  }
  function Su(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Kr(e, t, n, r) {
    var l = e.updateQueue;
    qe = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        f = s.next;
      (s.next = null), i === null ? (o = f) : (i.next = f), (i = s);
      var m = e.alternate;
      m !== null &&
        ((m = m.updateQueue),
        (u = m.lastBaseUpdate),
        u !== i &&
          (u === null ? (m.firstBaseUpdate = f) : (u.next = f),
          (m.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var h = l.baseState;
      (i = 0), (m = f = s = null), (u = o);
      do {
        var p = u.lane,
          g = u.eventTime;
        if ((r & p) === p) {
          m !== null &&
            (m = m.next =
              {
                eventTime: g,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var w = e,
              S = u;
            switch (((p = t), (g = n), S.tag)) {
              case 1:
                if (((w = S.payload), typeof w == "function")) {
                  h = w.call(g, h, p);
                  break e;
                }
                h = w;
                break e;
              case 3:
                w.flags = (w.flags & -65537) | 128;
              case 0:
                if (
                  ((w = S.payload),
                  (p = typeof w == "function" ? w.call(g, h, p) : w),
                  p == null)
                )
                  break e;
                h = B({}, h, p);
                break e;
              case 2:
                qe = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (p = l.effects),
            p === null ? (l.effects = [u]) : p.push(u));
        } else
          (g = {
            eventTime: g,
            lane: p,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            m === null ? ((f = m = g), (s = h)) : (m = m.next = g),
            (i |= p);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (p = u),
            (u = p.next),
            (p.next = null),
            (l.lastBaseUpdate = p),
            (l.shared.pending = null);
        }
      } while (1);
      if (
        (m === null && (s = h),
        (l.baseState = s),
        (l.firstBaseUpdate = f),
        (l.lastBaseUpdate = m),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (i |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (Tt |= i), (e.lanes = i), (e.memoizedState = h);
    }
  }
  function ku(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(y(191, l));
          l.call(r);
        }
      }
  }
  var sa = new is.Component().refs;
  function No(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : B({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Rt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ue(),
        l = at(e),
        o = We(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = ut(e, o, l)),
        t !== null && (Oe(t, e, l, r), Cr(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ue(),
        l = at(e),
        o = We(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = ut(e, o, l)),
        t !== null && (Oe(t, e, l, r), Cr(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ue(),
        r = at(e),
        l = We(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = ut(e, l, r)),
        t !== null && (Oe(t, e, r, n), Cr(t, e, r));
    },
  };
  function Eu(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !$n(n, r) || !$n(l, o)
        : !0
    );
  }
  function aa(e, t, n) {
    var r = !1,
      l = dt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = _e(o))
        : ((l = pe(t) ? _t : oe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? bt(e, l) : dt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function xu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Po(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = sa), hi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = _e(o))
      : ((o = pe(t) ? _t : oe.current), (l.context = bt(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (No(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && sl.enqueueReplaceState(l, l.state, null),
        Kr(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function vn(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(y(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(y(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              u === sa && (u = l.refs = {}),
                i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(y(284));
      if (!n._owner) throw Error(y(290, e));
    }
    return e;
  }
  function mr(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        y(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Cu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ca(e) {
    function t(d, a) {
      if (e) {
        var c = d.deletions;
        c === null ? ((d.deletions = [a]), (d.flags |= 16)) : c.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) t(d, a), (a = a.sibling);
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
      return d;
    }
    function l(d, a) {
      return (d = ct(d, a)), (d.index = 0), (d.sibling = null), d;
    }
    function o(d, a, c) {
      return (
        (d.index = c),
        e
          ? ((c = d.alternate),
            c !== null
              ? ((c = c.index), c < a ? ((d.flags |= 2), a) : c)
              : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function i(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, a, c, v) {
      return a === null || a.tag !== 6
        ? ((a = Wl(c, d.mode, v)), (a.return = d), a)
        : ((a = l(a, c)), (a.return = d), a);
    }
    function s(d, a, c, v) {
      var k = c.type;
      return k === Mt
        ? m(d, a, c.props.children, v, c.key)
        : a !== null &&
          (a.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === Je &&
              Cu(k) === a.type))
        ? ((v = l(a, c.props)), (v.ref = vn(d, a, c)), (v.return = d), v)
        : ((v = Lr(c.type, c.key, c.props, null, d.mode, v)),
          (v.ref = vn(d, a, c)),
          (v.return = d),
          v);
    }
    function f(d, a, c, v) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== c.containerInfo ||
        a.stateNode.implementation !== c.implementation
        ? ((a = Ql(c, d.mode, v)), (a.return = d), a)
        : ((a = l(a, c.children || [])), (a.return = d), a);
    }
    function m(d, a, c, v, k) {
      return a === null || a.tag !== 7
        ? ((a = Ct(c, d.mode, v, k)), (a.return = d), a)
        : ((a = l(a, c)), (a.return = d), a);
    }
    function h(d, a, c) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = Wl("" + a, d.mode, c)), (a.return = d), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case rr:
            return (
              (c = Lr(a.type, a.key, a.props, null, d.mode, c)),
              (c.ref = vn(d, null, a)),
              (c.return = d),
              c
            );
          case Ot:
            return (a = Ql(a, d.mode, c)), (a.return = d), a;
          case Je:
            var v = a._init;
            return h(d, v(a._payload), c);
        }
        if (Sn(a) || fn(a))
          return (a = Ct(a, d.mode, c, null)), (a.return = d), a;
        mr(d, a);
      }
      return null;
    }
    function p(d, a, c, v) {
      var k = a !== null ? a.key : null;
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return k !== null ? null : u(d, a, "" + c, v);
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case rr:
            return c.key === k ? s(d, a, c, v) : null;
          case Ot:
            return c.key === k ? f(d, a, c, v) : null;
          case Je:
            return (k = c._init), p(d, a, k(c._payload), v);
        }
        if (Sn(c) || fn(c)) return k !== null ? null : m(d, a, c, v, null);
        mr(d, c);
      }
      return null;
    }
    function g(d, a, c, v, k) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return (d = d.get(c) || null), u(a, d, "" + v, k);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case rr:
            return (
              (d = d.get(v.key === null ? c : v.key) || null), s(a, d, v, k)
            );
          case Ot:
            return (
              (d = d.get(v.key === null ? c : v.key) || null), f(a, d, v, k)
            );
          case Je:
            var C = v._init;
            return g(d, a, c, C(v._payload), k);
        }
        if (Sn(v) || fn(v)) return (d = d.get(c) || null), m(a, d, v, k, null);
        mr(a, v);
      }
      return null;
    }
    function w(d, a, c, v) {
      for (
        var k = null, C = null, N = a, _ = (a = 0), M = null;
        N !== null && _ < c.length;
        _++
      ) {
        N.index > _ ? ((M = N), (N = null)) : (M = N.sibling);
        var R = p(d, N, c[_], v);
        if (R === null) {
          N === null && (N = M);
          break;
        }
        e && N && R.alternate === null && t(d, N),
          (a = o(R, a, _)),
          C === null ? (k = R) : (C.sibling = R),
          (C = R),
          (N = M);
      }
      if (_ === c.length) return n(d, N), V && gt(d, _), k;
      if (N === null) {
        for (; _ < c.length; _++)
          (N = h(d, c[_], v)),
            N !== null &&
              ((a = o(N, a, _)),
              C === null ? (k = N) : (C.sibling = N),
              (C = N));
        return V && gt(d, _), k;
      }
      for (N = r(d, N); _ < c.length; _++)
        (M = g(N, d, _, c[_], v)),
          M !== null &&
            (e && M.alternate !== null && N.delete(M.key === null ? _ : M.key),
            (a = o(M, a, _)),
            C === null ? (k = M) : (C.sibling = M),
            (C = M));
      return (
        e &&
          N.forEach(function (Pe) {
            return t(d, Pe);
          }),
        V && gt(d, _),
        k
      );
    }
    function S(d, a, c, v) {
      var k = fn(c);
      if (typeof k != "function") throw Error(y(150));
      if (((c = k.call(c)), c == null)) throw Error(y(151));
      for (
        var C = (k = null), N = a, _ = (a = 0), M = null, R = c.next();
        N !== null && !R.done;
        _++, R = c.next()
      ) {
        N.index > _ ? ((M = N), (N = null)) : (M = N.sibling);
        var Pe = p(d, N, R.value, v);
        if (Pe === null) {
          N === null && (N = M);
          break;
        }
        e && N && Pe.alternate === null && t(d, N),
          (a = o(Pe, a, _)),
          C === null ? (k = Pe) : (C.sibling = Pe),
          (C = Pe),
          (N = M);
      }
      if (R.done) return n(d, N), V && gt(d, _), k;
      if (N === null) {
        for (; !R.done; _++, R = c.next())
          (R = h(d, R.value, v)),
            R !== null &&
              ((a = o(R, a, _)),
              C === null ? (k = R) : (C.sibling = R),
              (C = R));
        return V && gt(d, _), k;
      }
      for (N = r(d, N); !R.done; _++, R = c.next())
        (R = g(N, d, _, R.value, v)),
          R !== null &&
            (e && R.alternate !== null && N.delete(R.key === null ? _ : R.key),
            (a = o(R, a, _)),
            C === null ? (k = R) : (C.sibling = R),
            (C = R));
      return (
        e &&
          N.forEach(function (an) {
            return t(d, an);
          }),
        V && gt(d, _),
        k
      );
    }
    function I(d, a, c, v) {
      if (
        (typeof c == "object" &&
          c !== null &&
          c.type === Mt &&
          c.key === null &&
          (c = c.props.children),
        typeof c == "object" && c !== null)
      ) {
        switch (c.$$typeof) {
          case rr:
            e: {
              for (var k = c.key, C = a; C !== null; ) {
                if (C.key === k) {
                  if (((k = c.type), k === Mt)) {
                    if (C.tag === 7) {
                      n(d, C.sibling),
                        (a = l(C, c.props.children)),
                        (a.return = d),
                        (d = a);
                      break e;
                    }
                  } else if (
                    C.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === Je &&
                      Cu(k) === C.type)
                  ) {
                    n(d, C.sibling),
                      (a = l(C, c.props)),
                      (a.ref = vn(d, C, c)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                  n(d, C);
                  break;
                } else t(d, C);
                C = C.sibling;
              }
              c.type === Mt
                ? ((a = Ct(c.props.children, d.mode, v, c.key)),
                  (a.return = d),
                  (d = a))
                : ((v = Lr(c.type, c.key, c.props, null, d.mode, v)),
                  (v.ref = vn(d, a, c)),
                  (v.return = d),
                  (d = v));
            }
            return i(d);
          case Ot:
            e: {
              for (C = c.key; a !== null; ) {
                if (a.key === C)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === c.containerInfo &&
                    a.stateNode.implementation === c.implementation
                  ) {
                    n(d, a.sibling),
                      (a = l(a, c.children || [])),
                      (a.return = d),
                      (d = a);
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              (a = Ql(c, d.mode, v)), (a.return = d), (d = a);
            }
            return i(d);
          case Je:
            return (C = c._init), I(d, a, C(c._payload), v);
        }
        if (Sn(c)) return w(d, a, c, v);
        if (fn(c)) return S(d, a, c, v);
        mr(d, c);
      }
      return (typeof c == "string" && c !== "") || typeof c == "number"
        ? ((c = "" + c),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, c)), (a.return = d), (d = a))
            : (n(d, a), (a = Wl(c, d.mode, v)), (a.return = d), (d = a)),
          i(d))
        : n(d, a);
    }
    return I;
  }
  var tn = ca(!0),
    fa = ca(!1),
    bn = {},
    $e = mt(bn),
    Bn = mt(bn),
    Wn = mt(bn);
  function Et(e) {
    if (e === bn) throw Error(y(174));
    return e;
  }
  function vi(e, t) {
    switch ((D(Wn, t), D(Bn, e), D($e, bn), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = lo(t, e));
    }
    U($e), D($e, t);
  }
  function nn() {
    U($e), U(Bn), U(Wn);
  }
  function da(e) {
    Et(Wn.current);
    var t = Et($e.current),
      n = lo(t, e.type);
    t !== n && (D(Bn, e), D($e, n));
  }
  function yi(e) {
    Bn.current === e && (U($e), U(Bn));
  }
  var A = mt(0);
  function Yr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ul = [];
  function gi() {
    for (var e = 0; e < Ul.length; e++)
      Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0;
  }
  var _r = Ge.ReactCurrentDispatcher,
    $l = Ge.ReactCurrentBatchConfig,
    Pt = 0,
    H = null,
    X = null,
    J = null,
    Xr = !1,
    Tn = !1,
    Qn = 0,
    od = 0;
  function ne() {
    throw Error(y(321));
  }
  function wi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Me(e[n], t[n])) return !1;
    return !0;
  }
  function Si(e, t, n, r, l, o) {
    if (
      ((Pt = o),
      (H = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_r.current = e === null || e.memoizedState === null ? ad : cd),
      (e = n(r, l)),
      Tn)
    ) {
      o = 0;
      do {
        if (((Tn = !1), (Qn = 0), 25 <= o)) throw Error(y(301));
        (o += 1),
          (J = X = null),
          (t.updateQueue = null),
          (_r.current = fd),
          (e = n(r, l));
      } while (Tn);
    }
    if (
      ((_r.current = Gr),
      (t = X !== null && X.next !== null),
      (Pt = 0),
      (J = X = H = null),
      (Xr = !1),
      t)
    )
      throw Error(y(300));
    return e;
  }
  function ki() {
    var e = Qn !== 0;
    return (Qn = 0), e;
  }
  function De() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J;
  }
  function Ne() {
    if (X === null) {
      var e = H.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = X.next;
    var t = J === null ? H.memoizedState : J.next;
    if (t !== null) (J = t), (X = e);
    else {
      if (e === null) throw Error(y(310));
      (X = e),
        (e = {
          memoizedState: X.memoizedState,
          baseState: X.baseState,
          baseQueue: X.baseQueue,
          queue: X.queue,
          next: null,
        }),
        J === null ? (H.memoizedState = J = e) : (J = J.next = e);
    }
    return J;
  }
  function Kn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vl(e) {
    var t = Ne(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = X,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = o.next), (o.next = i);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var u = (i = null),
        s = null,
        f = o;
      do {
        var m = f.lane;
        if ((Pt & m) === m)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: f.action,
                hasEagerState: f.hasEagerState,
                eagerState: f.eagerState,
                next: null,
              }),
            (r = f.hasEagerState ? f.eagerState : e(r, f.action));
        else {
          var h = {
            lane: m,
            action: f.action,
            hasEagerState: f.hasEagerState,
            eagerState: f.eagerState,
            next: null,
          };
          s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
            (H.lanes |= m),
            (Tt |= m);
        }
        f = f.next;
      } while (f !== null && f !== o);
      s === null ? (i = r) : (s.next = u),
        Me(r, t.memoizedState) || (fe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (H.lanes |= o), (Tt |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = Ne(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      Me(o, t.memoizedState) || (fe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function pa() {}
  function ma(e, t) {
    var n = H,
      r = Ne(),
      l = t(),
      o = !Me(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (fe = !0)),
      (r = r.queue),
      Ei(ya.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Yn(9, va.bind(null, n, r, l, t), void 0, null),
        q === null)
      )
        throw Error(y(349));
      Pt & 30 || ha(n, t, l);
    }
    return l;
  }
  function ha(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = H.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (H.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function va(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ga(t) && wa(e);
  }
  function ya(e, t, n) {
    return n(function () {
      ga(t) && wa(e);
    });
  }
  function ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Me(e, n);
    } catch {
      return !0;
    }
  }
  function wa(e) {
    var t = Ye(e, 1);
    t !== null && Oe(t, e, 1, -1);
  }
  function _u(e) {
    var t = De();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = sd.bind(null, H, e)),
      [t.memoizedState, e]
    );
  }
  function Yn(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = H.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (H.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Sa() {
    return Ne().memoizedState;
  }
  function Nr(e, t, n, r) {
    var l = De();
    (H.flags |= e),
      (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function al(e, t, n, r) {
    var l = Ne();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (X !== null) {
      var i = X.memoizedState;
      if (((o = i.destroy), r !== null && wi(r, i.deps))) {
        l.memoizedState = Yn(t, n, o, r);
        return;
      }
    }
    (H.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
  }
  function Nu(e, t) {
    return Nr(8390656, 8, e, t);
  }
  function Ei(e, t) {
    return al(2048, 8, e, t);
  }
  function ka(e, t) {
    return al(4, 2, e, t);
  }
  function Ea(e, t) {
    return al(4, 4, e, t);
  }
  function xa(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ca(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), al(4, 4, xa.bind(null, t, e), n)
    );
  }
  function xi() {}
  function _a(e, t) {
    var n = Ne();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Na(e, t) {
    var n = Ne();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Pa(e, t, n) {
    return Pt & 21
      ? (Me(n, t) ||
          ((n = Ls()), (H.lanes |= n), (Tt |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
  }
  function id(e, t) {
    var n = O;
    (O = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
      e(!1), t();
    } finally {
      (O = n), ($l.transition = r);
    }
  }
  function Ta() {
    return Ne().memoizedState;
  }
  function ud(e, t, n) {
    var r = at(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      za(e))
    )
      La(t, n);
    else if (((n = ia(e, t, n, r)), n !== null)) {
      var l = ue();
      Oe(n, e, r, l), Ra(n, t, r);
    }
  }
  function sd(e, t, n) {
    var r = at(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (za(e)) La(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
            var s = t.interleaved;
            s === null
              ? ((l.next = l), mi(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ia(e, t, l, r)),
        n !== null && ((l = ue()), Oe(n, e, r, l), Ra(n, t, r));
    }
  }
  function za(e) {
    var t = e.alternate;
    return e === H || (t !== null && t === H);
  }
  function La(e, t) {
    Tn = Xr = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Ra(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ei(e, n);
    }
  }
  var Gr = {
      readContext: _e,
      useCallback: ne,
      useContext: ne,
      useEffect: ne,
      useImperativeHandle: ne,
      useInsertionEffect: ne,
      useLayoutEffect: ne,
      useMemo: ne,
      useReducer: ne,
      useRef: ne,
      useState: ne,
      useDebugValue: ne,
      useDeferredValue: ne,
      useTransition: ne,
      useMutableSource: ne,
      useSyncExternalStore: ne,
      useId: ne,
      unstable_isNewReconciler: !1,
    },
    ad = {
      readContext: _e,
      useCallback: function (e, t) {
        return (De().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: _e,
      useEffect: Nu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Nr(4194308, 4, xa.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Nr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Nr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = De();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = De();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = ud.bind(null, H, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = De();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: _u,
      useDebugValue: xi,
      useDeferredValue: function (e) {
        return (De().memoizedState = e);
      },
      useTransition: function () {
        var e = _u(!1),
          t = e[0];
        return (e = id.bind(null, e[1])), (De().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = H,
          l = De();
        if (V) {
          if (n === void 0) throw Error(y(407));
          n = n();
        } else {
          if (((n = t()), q === null)) throw Error(y(349));
          Pt & 30 || ha(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Nu(ya.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Yn(9, va.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = De(),
          t = q.identifierPrefix;
        if (V) {
          var n = Be,
            r = He;
          (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Qn++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = od++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    cd = {
      readContext: _e,
      useCallback: _a,
      useContext: _e,
      useEffect: Ei,
      useImperativeHandle: Ca,
      useInsertionEffect: ka,
      useLayoutEffect: Ea,
      useMemo: Na,
      useReducer: Vl,
      useRef: Sa,
      useState: function () {
        return Vl(Kn);
      },
      useDebugValue: xi,
      useDeferredValue: function (e) {
        var t = Ne();
        return Pa(t, X.memoizedState, e);
      },
      useTransition: function () {
        var e = Vl(Kn)[0],
          t = Ne().memoizedState;
        return [e, t];
      },
      useMutableSource: pa,
      useSyncExternalStore: ma,
      useId: Ta,
      unstable_isNewReconciler: !1,
    },
    fd = {
      readContext: _e,
      useCallback: _a,
      useContext: _e,
      useEffect: Ei,
      useImperativeHandle: Ca,
      useInsertionEffect: ka,
      useLayoutEffect: Ea,
      useMemo: Na,
      useReducer: Al,
      useRef: Sa,
      useState: function () {
        return Al(Kn);
      },
      useDebugValue: xi,
      useDeferredValue: function (e) {
        var t = Ne();
        return X === null ? (t.memoizedState = e) : Pa(t, X.memoizedState, e);
      },
      useTransition: function () {
        var e = Al(Kn)[0],
          t = Ne().memoizedState;
        return [e, t];
      },
      useMutableSource: pa,
      useSyncExternalStore: ma,
      useId: Ta,
      unstable_isNewReconciler: !1,
    };
  function rn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Uc(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Hl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function To(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var dd = typeof WeakMap == "function" ? WeakMap : Map;
  function ja(e, t, n) {
    (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Jr || ((Jr = !0), (Uo = r)), To(e, t);
      }),
      n
    );
  }
  function Oa(e, t, n) {
    (n = We(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          To(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          To(e, t),
            typeof r != "function" &&
              (st === null ? (st = new Set([this])) : st.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function Pu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new dd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Nd.bind(null, e, t, n)), t.then(e, e));
  }
  function Tu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function zu(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = We(-1, 1)), (t.tag = 2), ut(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var pd = Ge.ReactCurrentOwner,
    fe = !1;
  function ie(e, t, n, r) {
    t.child = e === null ? fa(t, null, n, r) : tn(t, e.child, n, r);
  }
  function Lu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Zt(t, l),
      (r = Si(e, t, n, r, o, l)),
      (n = ki()),
      e !== null && !fe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Xe(e, t, l))
        : (V && n && si(t), (t.flags |= 1), ie(e, t, r, l), t.child)
    );
  }
  function Ru(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ri(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ma(e, t, o, r, l))
        : ((e = Lr(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)
      )
        return Xe(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = ct(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ma(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if ($n(o, r) && e.ref === t.ref)
        if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (fe = !0);
        else return (t.lanes = e.lanes), Xe(e, t, l);
    }
    return zo(e, t, n, r, l);
  }
  function Ia(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          D(Wt, he),
          (he |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            D(Wt, he),
            (he |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          D(Wt, he),
          (he |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        D(Wt, he),
        (he |= r);
    return ie(e, t, l, n), t.child;
  }
  function Da(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function zo(e, t, n, r, l) {
    var o = pe(n) ? _t : oe.current;
    return (
      (o = bt(t, o)),
      Zt(t, l),
      (n = Si(e, t, n, r, o, l)),
      (r = ki()),
      e !== null && !fe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Xe(e, t, l))
        : (V && r && si(t), (t.flags |= 1), ie(e, t, n, l), t.child)
    );
  }
  function ju(e, t, n, r, l) {
    if (pe(n)) {
      var o = !0;
      Ar(t);
    } else o = !1;
    if ((Zt(t, l), t.stateNode === null))
      Pr(e, t), aa(t, n, r), Po(t, n, r, l), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        f = n.contextType;
      typeof f == "object" && f !== null
        ? (f = _e(f))
        : ((f = pe(n) ? _t : oe.current), (f = bt(t, f)));
      var m = n.getDerivedStateFromProps,
        h =
          typeof m == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      h ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== r || s !== f) && xu(t, i, r, f)),
        (qe = !1);
      var p = t.memoizedState;
      (i.state = p),
        Kr(t, r, i, l),
        (s = t.memoizedState),
        u !== r || p !== s || de.current || qe
          ? (typeof m == "function" && (No(t, n, m, r), (s = t.memoizedState)),
            (u = qe || Eu(t, n, u, r, p, s, f))
              ? (h ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = f),
            (r = u))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (i = t.stateNode),
        ua(e, t),
        (u = t.memoizedProps),
        (f = t.type === t.elementType ? u : ze(t.type, u)),
        (i.props = f),
        (h = t.pendingProps),
        (p = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = _e(s))
          : ((s = pe(n) ? _t : oe.current), (s = bt(t, s)));
      var g = n.getDerivedStateFromProps;
      (m =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== h || p !== s) && xu(t, i, r, s)),
        (qe = !1),
        (p = t.memoizedState),
        (i.state = p),
        Kr(t, r, i, l);
      var w = t.memoizedState;
      u !== h || p !== w || de.current || qe
        ? (typeof g == "function" && (No(t, n, g, r), (w = t.memoizedState)),
          (f = qe || Eu(t, n, f, r, p, w, s) || !1)
            ? (m ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, w, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, w, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = w)),
          (i.props = r),
          (i.state = w),
          (i.context = s),
          (r = f))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Lo(e, t, n, r, o, l);
  }
  function Lo(e, t, n, r, l, o) {
    Da(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && yu(t, n, !1), Xe(e, t, o);
    (r = t.stateNode), (pd.current = t);
    var u =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, u, o)))
        : ie(e, t, u, o),
      (t.memoizedState = r.state),
      l && yu(t, n, !0),
      t.child
    );
  }
  function Fa(e) {
    var t = e.stateNode;
    t.pendingContext
      ? vu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && vu(e, t.context, !1),
      vi(e, t.containerInfo);
  }
  function Ou(e, t, n, r, l) {
    return en(), ci(l), (t.flags |= 256), ie(e, t, n, r), t.child;
  }
  var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ua(e, t, n) {
    var r = t.pendingProps,
      l = A.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      D(A, l & 1),
      e === null)
    )
      return (
        Co(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = dl(i, r, 0, null)),
                (e = Ct(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = jo(n)),
                (t.memoizedState = Ro),
                e)
              : Ci(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return md(e, t, i, r, u, l, n);
    if (o) {
      (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = ct(u, o)) : ((o = Ct(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? jo(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ro),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = ct(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ci(e, t) {
    return (
      (t = dl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function hr(e, t, n, r) {
    return (
      r !== null && ci(r),
      tn(t, e.child, null, n),
      (e = Ci(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function md(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Hl(Error(y(422)))), hr(e, t, i, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = dl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Ct(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && tn(t, e.child, null, i),
          (t.child.memoizedState = jo(i)),
          (t.memoizedState = Ro),
          o);
    if (!(t.mode & 1)) return hr(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (o = Error(y(419))), (r = Hl(o, r, void 0)), hr(e, t, i, r)
      );
    }
    if (((u = (i & e.childLanes) !== 0), fe || u)) {
      if (((r = q), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Ye(e, l), Oe(r, e, l, -1));
      }
      return Li(), (r = Hl(Error(y(421)))), hr(e, t, i, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Pd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (ve = it(l.nextSibling)),
        (ye = t),
        (V = !0),
        (Re = null),
        e !== null &&
          ((ke[Ee++] = He),
          (ke[Ee++] = Be),
          (ke[Ee++] = Nt),
          (He = e.id),
          (Be = e.overflow),
          (Nt = t)),
        (t = Ci(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Mu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), _o(e.return, t, n);
  }
  function Bl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function $a(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((ie(e, t, r.children, n), (r = A.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
          else if (e.tag === 19) Mu(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Yr(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Bl(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Yr(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Bl(t, !0, n, null, o);
          break;
        case "together":
          Bl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Pr(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Xe(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Tt |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = ct(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function hd(e, t, n) {
    switch (t.tag) {
      case 3:
        Fa(t), en();
        break;
      case 5:
        da(t);
        break;
      case 1:
        pe(t.type) && Ar(t);
        break;
      case 4:
        vi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        D(Wr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (D(A, A.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ua(e, t, n)
            : (D(A, A.current & 1),
              (e = Xe(e, t, n)),
              e !== null ? e.sibling : null);
        D(A, A.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return $a(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          D(A, A.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ia(e, t, n);
    }
    return Xe(e, t, n);
  }
  var Va, Oo, Aa, Ha;
  Va = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  Oo = function () {};
  Aa = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      (e = t.stateNode), Et($e.current);
      var o = null;
      switch (n) {
        case "input":
          (l = eo(e, l)), (r = eo(e, r)), (o = []);
          break;
        case "select":
          (l = B({}, l, { value: void 0 })),
            (r = B({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (l = ro(e, l)), (r = ro(e, r)), (o = []);
          break;
        default:
          typeof l.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = $r);
      }
      oo(n, r);
      var i;
      n = null;
      for (f in l)
        if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
          if (f === "style") {
            var u = l[f];
            for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
          } else
            f !== "dangerouslySetInnerHTML" &&
              f !== "children" &&
              f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              f !== "autoFocus" &&
              (jn.hasOwnProperty(f)
                ? o || (o = [])
                : (o = o || []).push(f, null));
      for (f in r) {
        var s = r[f];
        if (
          ((u = l != null ? l[f] : void 0),
          r.hasOwnProperty(f) && s !== u && (s != null || u != null))
        )
          if (f === "style")
            if (u) {
              for (i in u)
                !u.hasOwnProperty(i) ||
                  (s && s.hasOwnProperty(i)) ||
                  (n || (n = {}), (n[i] = ""));
              for (i in s)
                s.hasOwnProperty(i) &&
                  u[i] !== s[i] &&
                  (n || (n = {}), (n[i] = s[i]));
            } else n || (o || (o = []), o.push(f, n)), (n = s);
          else
            f === "dangerouslySetInnerHTML"
              ? ((s = s ? s.__html : void 0),
                (u = u ? u.__html : void 0),
                s != null && u !== s && (o = o || []).push(f, s))
              : f === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(f, "" + s)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (jn.hasOwnProperty(f)
                  ? (s != null && f === "onScroll" && F("scroll", e),
                    o || u === s || (o = []))
                  : (o = o || []).push(f, s));
      }
      n && (o = o || []).push("style", n);
      var f = o;
      (t.updateQueue = f) && (t.flags |= 4);
    }
  };
  Ha = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function yn(e, t) {
    if (!V)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function vd(e, t, n) {
    var r = t.pendingProps;
    switch ((ai(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return re(t), null;
      case 1:
        return pe(t.type) && Vr(), re(t), null;
      case 3:
        return (
          (r = t.stateNode),
          nn(),
          U(de),
          U(oe),
          gi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (pr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Re !== null && (Ao(Re), (Re = null)))),
          Oo(e, t),
          re(t),
          null
        );
      case 5:
        yi(t);
        var l = Et(Wn.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Aa(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(y(166));
            return re(t), null;
          }
          if (((e = Et($e.current)), pr(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Fe] = t), (r[Hn] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                F("cancel", r), F("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) F(En[l], r);
                break;
              case "source":
                F("error", r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", r), F("load", r);
                break;
              case "details":
                F("toggle", r);
                break;
              case "input":
                Bi(r, o), F("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  F("invalid", r);
                break;
              case "textarea":
                Qi(r, o), F("invalid", r);
            }
            oo(n, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 &&
                        dr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (o.suppressHydrationWarning !== !0 &&
                        dr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : jn.hasOwnProperty(i) &&
                    u != null &&
                    i === "onScroll" &&
                    F("scroll", r);
              }
            switch (n) {
              case "input":
                lr(r), Wi(r, o, !0);
                break;
              case "textarea":
                lr(r), Ki(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = $r);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = hs(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[Fe] = t),
              (e[Hn] = r),
              Va(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = io(n, r)), n)) {
                case "dialog":
                  F("cancel", e), F("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  F("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < En.length; l++) F(En[l], e);
                  l = r;
                  break;
                case "source":
                  F("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  F("error", e), F("load", e), (l = r);
                  break;
                case "details":
                  F("toggle", e), (l = r);
                  break;
                case "input":
                  Bi(e, r), (l = eo(e, r)), F("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = B({}, r, { value: void 0 })),
                    F("invalid", e);
                  break;
                case "textarea":
                  Qi(e, r), (l = ro(e, r)), F("invalid", e);
                  break;
                default:
                  l = r;
              }
              oo(n, l), (u = l);
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === "style"
                    ? gs(e, s)
                    : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && vs(e, s))
                    : o === "children"
                    ? typeof s == "string"
                      ? (n !== "textarea" || s !== "") && On(e, s)
                      : typeof s == "number" && On(e, "" + s)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (jn.hasOwnProperty(o)
                        ? s != null && o === "onScroll" && F("scroll", e)
                        : s != null && Xo(e, o, s, i));
                }
              switch (n) {
                case "input":
                  lr(e), Wi(e, r, !1);
                  break;
                case "textarea":
                  lr(e), Ki(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ft(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Kt(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        Kt(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return re(t), null;
      case 6:
        if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
          if (((n = Et(Wn.current)), Et($e.current), pr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Fe] = t),
              (o = r.nodeValue !== n) && ((e = ye), e !== null))
            )
              switch (e.tag) {
                case 3:
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    dr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Fe] = t),
              (t.stateNode = r);
        }
        return re(t), null;
      case 13:
        if (
          (U(A),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (V && ve !== null && t.mode & 1 && !(t.flags & 128))
            oa(), en(), (t.flags |= 98560), (o = !1);
          else if (((o = pr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(y(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(y(317));
              o[Fe] = t;
            } else
              en(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            re(t), (o = !1);
          } else Re !== null && (Ao(Re), (Re = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || A.current & 1 ? G === 0 && (G = 3) : Li())),
            t.updateQueue !== null && (t.flags |= 4),
            re(t),
            null);
      case 4:
        return (
          nn(),
          Oo(e, t),
          e === null && Vn(t.stateNode.containerInfo),
          re(t),
          null
        );
      case 10:
        return pi(t.type._context), re(t), null;
      case 17:
        return pe(t.type) && Vr(), re(t), null;
      case 19:
        if ((U(A), (o = t.memoizedState), o === null)) return re(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) yn(o, !1);
          else {
            if (G !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((i = Yr(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      yn(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return D(A, (A.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              K() > ln &&
              ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Yr(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yn(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !V)
              )
                return re(t), null;
            } else
              2 * K() - o.renderingStartTime > ln &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = K()),
            (t.sibling = null),
            (n = A.current),
            D(A, r ? (n & 1) | 2 : n & 1),
            t)
          : (re(t), null);
      case 22:
      case 23:
        return (
          zi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? he & 1073741824 &&
              (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : re(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function yd(e, t) {
    switch ((ai(t), t.tag)) {
      case 1:
        return (
          pe(t.type) && Vr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          nn(),
          U(de),
          U(oe),
          gi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return yi(t), null;
      case 13:
        if (
          (U(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(y(340));
          en();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return U(A), null;
      case 4:
        return nn(), null;
      case 10:
        return pi(t.type._context), null;
      case 22:
      case 23:
        return zi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vr = !1,
    le = !1,
    gd = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Bt(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          W(e, t, r);
        }
      else n.current = null;
  }
  function Mo(e, t, n) {
    try {
      n();
    } catch (r) {
      W(e, t, r);
    }
  }
  var Iu = !1;
  function wd(e, t) {
    if (((yo = Dr), (e = Ks()), ui(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              s = -1,
              f = 0,
              m = 0,
              h = e,
              p = null;
            t: for (;;) {
              for (
                var g;
                h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                  h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                  h.nodeType === 3 && (i += h.nodeValue.length),
                  (g = h.firstChild) !== null;

              )
                (p = h), (h = g);
              for (;;) {
                if (h === e) break t;
                if (
                  (p === n && ++f === l && (u = i),
                  p === o && ++m === r && (s = i),
                  (g = h.nextSibling) !== null)
                )
                  break;
                (h = p), (p = h.parentNode);
              }
              h = g;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      go = { focusedElem: e, selectionRange: n }, Dr = !1, E = t;
      E !== null;

    )
      if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (E = e);
      else
        for (; E !== null; ) {
          t = E;
          try {
            var w = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (w !== null) {
                    var S = w.memoizedProps,
                      I = w.memoizedState,
                      d = t.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? S : ze(t.type, S),
                        I
                      );
                    d.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var c = t.stateNode.containerInfo;
                  c.nodeType === 1
                    ? (c.textContent = "")
                    : c.nodeType === 9 &&
                      c.documentElement &&
                      c.removeChild(c.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(y(163));
              }
          } catch (v) {
            W(t, t.return, v);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (E = e);
            break;
          }
          E = t.return;
        }
    return (w = Iu), (Iu = !1), w;
  }
  function zn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Mo(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function cl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Io(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ba(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ba(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Fe],
          delete t[Hn],
          delete t[ko],
          delete t[td],
          delete t[nd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Wa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Du(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wa(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Do(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Do(e, t, n), e = e.sibling; e !== null; )
        Do(e, t, n), (e = e.sibling);
  }
  function Fo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fo(e, t, n), e = e.sibling; e !== null; )
        Fo(e, t, n), (e = e.sibling);
  }
  var b = null,
    Le = !1;
  function Ze(e, t, n) {
    for (n = n.child; n !== null; ) Qa(e, t, n), (n = n.sibling);
  }
  function Qa(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
      try {
        Ue.onCommitFiberUnmount(nl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        le || Bt(n, t);
      case 6:
        var r = b,
          l = Le;
        (b = null),
          Ze(e, t, n),
          (b = r),
          (Le = l),
          b !== null &&
            (Le
              ? ((e = b),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : b.removeChild(n.stateNode));
        break;
      case 18:
        b !== null &&
          (Le
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8
                ? Dl(e.parentNode, n)
                : e.nodeType === 1 && Dl(e, n),
              Fn(e))
            : Dl(b, n.stateNode));
        break;
      case 4:
        (r = b),
          (l = Le),
          (b = n.stateNode.containerInfo),
          (Le = !0),
          Ze(e, t, n),
          (b = r),
          (Le = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !le &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && (o & 2 || o & 4) && Mo(n, t, i),
              (l = l.next);
          } while (l !== r);
        }
        Ze(e, t, n);
        break;
      case 1:
        if (
          !le &&
          (Bt(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            W(n, t, u);
          }
        Ze(e, t, n);
        break;
      case 21:
        Ze(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
          : Ze(e, t, n);
        break;
      default:
        Ze(e, t, n);
    }
  }
  function Fu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gd()),
        t.forEach(function (r) {
          var l = Td.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function Te(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (b = u.stateNode), (Le = !1);
                break e;
              case 3:
                (b = u.stateNode.containerInfo), (Le = !0);
                break e;
              case 4:
                (b = u.stateNode.containerInfo), (Le = !0);
                break e;
            }
            u = u.return;
          }
          if (b === null) throw Error(y(160));
          Qa(o, i, l), (b = null), (Le = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (f) {
          W(l, t, f);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ka(t, e), (t = t.sibling);
  }
  function Ka(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Te(t, e), Ie(e), r & 4)) {
          try {
            zn(3, e, e.return), cl(3, e);
          } catch (S) {
            W(e, e.return, S);
          }
          try {
            zn(5, e, e.return);
          } catch (S) {
            W(e, e.return, S);
          }
        }
        break;
      case 1:
        Te(t, e), Ie(e), r & 512 && n !== null && Bt(n, n.return);
        break;
      case 5:
        if (
          (Te(t, e),
          Ie(e),
          r & 512 && n !== null && Bt(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (S) {
            W(e, e.return, S);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === "input" && o.type === "radio" && o.name != null && ps(l, o),
                io(u, i);
              var f = io(u, o);
              for (i = 0; i < s.length; i += 2) {
                var m = s[i],
                  h = s[i + 1];
                m === "style"
                  ? gs(l, h)
                  : m === "dangerouslySetInnerHTML"
                  ? vs(l, h)
                  : m === "children"
                  ? On(l, h)
                  : Xo(l, m, h, f);
              }
              switch (u) {
                case "input":
                  to(l, o);
                  break;
                case "textarea":
                  ms(l, o);
                  break;
                case "select":
                  var p = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var g = o.value;
                  g != null
                    ? Kt(l, !!o.multiple, g, !1)
                    : p !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Kt(l, !!o.multiple, o.defaultValue, !0)
                        : Kt(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[Hn] = o;
            } catch (S) {
              W(e, e.return, S);
            }
        }
        break;
      case 6:
        if ((Te(t, e), Ie(e), r & 4)) {
          if (e.stateNode === null) throw Error(y(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (S) {
            W(e, e.return, S);
          }
        }
        break;
      case 3:
        if (
          (Te(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Fn(t.containerInfo);
          } catch (S) {
            W(e, e.return, S);
          }
        break;
      case 4:
        Te(t, e), Ie(e);
        break;
      case 13:
        Te(t, e),
          Ie(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Pi = K())),
          r & 4 && Fu(e);
        break;
      case 22:
        if (
          ((m = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((le = (f = le) || m), Te(t, e), (le = f)) : Te(t, e),
          Ie(e),
          r & 8192)
        ) {
          if (
            ((f = e.memoizedState !== null),
            (e.stateNode.isHidden = f) && !m && e.mode & 1)
          )
            for (E = e, m = e.child; m !== null; ) {
              for (h = E = m; E !== null; ) {
                switch (((p = E), (g = p.child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    zn(4, p, p.return);
                    break;
                  case 1:
                    Bt(p, p.return);
                    var w = p.stateNode;
                    if (typeof w.componentWillUnmount == "function") {
                      (r = p), (n = p.return);
                      try {
                        (t = r),
                          (w.props = t.memoizedProps),
                          (w.state = t.memoizedState),
                          w.componentWillUnmount();
                      } catch (S) {
                        W(r, n, S);
                      }
                    }
                    break;
                  case 5:
                    Bt(p, p.return);
                    break;
                  case 22:
                    if (p.memoizedState !== null) {
                      $u(h);
                      continue;
                    }
                }
                g !== null ? ((g.return = p), (E = g)) : $u(h);
              }
              m = m.sibling;
            }
          e: for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  (l = h.stateNode),
                    f
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((u = h.stateNode),
                        (s = h.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = ys("display", i)));
                } catch (S) {
                  W(e, e.return, S);
                }
              }
            } else if (h.tag === 6) {
              if (m === null)
                try {
                  h.stateNode.nodeValue = f ? "" : h.memoizedProps;
                } catch (S) {
                  W(e, e.return, S);
                }
            } else if (
              ((h.tag !== 22 && h.tag !== 23) ||
                h.memoizedState === null ||
                h === e) &&
              h.child !== null
            ) {
              (h.child.return = h), (h = h.child);
              continue;
            }
            if (h === e) break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e) break e;
              m === h && (m = null), (h = h.return);
            }
            m === h && (m = null),
              (h.sibling.return = h.return),
              (h = h.sibling);
          }
        }
        break;
      case 19:
        Te(t, e), Ie(e), r & 4 && Fu(e);
        break;
      case 21:
        break;
      default:
        Te(t, e), Ie(e);
    }
  }
  function Ie(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Wa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(y(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), (r.flags &= -33));
            var o = Du(e);
            Fo(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = Du(e);
            Do(e, u, i);
            break;
          default:
            throw Error(y(161));
        }
      } catch (s) {
        W(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sd(e, t, n) {
    (E = e), Ya(e);
  }
  function Ya(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || vr;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || le;
          u = vr;
          var f = le;
          if (((vr = i), (le = s) && !f))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Vu(l)
                  : s !== null
                  ? ((s.return = i), (E = s))
                  : Vu(l);
          for (; o !== null; ) (E = o), Ya(o), (o = o.sibling);
          (E = l), (vr = u), (le = f);
        }
        Uu(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : Uu(e);
    }
  }
  function Uu(e) {
    for (; E !== null; ) {
      var t = E;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                le || cl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !le)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ze(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && ku(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ku(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var f = t.alternate;
                  if (f !== null) {
                    var m = f.memoizedState;
                    if (m !== null) {
                      var h = m.dehydrated;
                      h !== null && Fn(h);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(y(163));
            }
          le || (t.flags & 512 && Io(t));
        } catch (p) {
          W(t, t.return, p);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (E = n);
        break;
      }
      E = t.return;
    }
  }
  function $u(e) {
    for (; E !== null; ) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (E = n);
        break;
      }
      E = t.return;
    }
  }
  function Vu(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              cl(4, t);
            } catch (s) {
              W(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                W(t, l, s);
              }
            }
            var o = t.return;
            try {
              Io(t);
            } catch (s) {
              W(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Io(t);
            } catch (s) {
              W(t, i, s);
            }
        }
      } catch (s) {
        W(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (E = u);
        break;
      }
      E = t.return;
    }
  }
  var kd = Math.ceil,
    Zr = Ge.ReactCurrentDispatcher,
    _i = Ge.ReactCurrentOwner,
    Ce = Ge.ReactCurrentBatchConfig,
    j = 0,
    q = null,
    Y = null,
    ee = 0,
    he = 0,
    Wt = mt(0),
    G = 0,
    Xn = null,
    Tt = 0,
    fl = 0,
    Ni = 0,
    Ln = null,
    ce = null,
    Pi = 0,
    ln = 1 / 0,
    Ve = null,
    Jr = !1,
    Uo = null,
    st = null,
    yr = !1,
    nt = null,
    qr = 0,
    Rn = 0,
    $o = null,
    Tr = -1,
    zr = 0;
  function ue() {
    return j & 6 ? K() : Tr !== -1 ? Tr : (Tr = K());
  }
  function at(e) {
    return e.mode & 1
      ? j & 2 && ee !== 0
        ? ee & -ee
        : ld.transition !== null
        ? (zr === 0 && (zr = Ls()), zr)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fs(e.type))),
          e)
      : 1;
  }
  function Oe(e, t, n, r) {
    if (50 < Rn) throw ((Rn = 0), ($o = null), Error(y(185)));
    Zn(e, n, r),
      (!(j & 2) || e !== q) &&
        (e === q && (!(j & 2) && (fl |= n), G === 4 && et(e, ee)),
        me(e, r),
        n === 1 && j === 0 && !(t.mode & 1) && ((ln = K() + 500), ul && ht()));
  }
  function me(e, t) {
    var n = e.callbackNode;
    rf(e, t);
    var r = Ir(e, e === q ? ee : 0);
    if (r === 0)
      n !== null && Gi(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Gi(n), t === 1))
        e.tag === 0 ? rd(Au.bind(null, e)) : na(Au.bind(null, e)),
          bf(function () {
            !(j & 6) && ht();
          }),
          (n = null);
      else {
        switch (Rs(r)) {
          case 1:
            n = bo;
            break;
          case 4:
            n = Ts;
            break;
          case 16:
            n = Mr;
            break;
          case 536870912:
            n = zs;
            break;
          default:
            n = Mr;
        }
        n = tc(n, Xa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Xa(e, t) {
    if (((Tr = -1), (zr = 0), j & 6)) throw Error(y(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n) return null;
    var r = Ir(e, e === q ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
    else {
      t = r;
      var l = j;
      j |= 2;
      var o = Za();
      (q !== e || ee !== t) && ((Ve = null), (ln = K() + 500), xt(e, t));
      do
        try {
          Cd();
          break;
        } catch (u) {
          Ga(e, u);
        }
      while (1);
      di(),
        (Zr.current = o),
        (j = l),
        Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = fo(e)), l !== 0 && ((r = l), (t = Vo(e, l)))),
        t === 1)
      )
        throw ((n = Xn), xt(e, 0), et(e, r), me(e, K()), n);
      if (t === 6) et(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Ed(l) &&
            ((t = br(e, r)),
            t === 2 && ((o = fo(e)), o !== 0 && ((r = o), (t = Vo(e, o)))),
            t === 1))
        )
          throw ((n = Xn), xt(e, 0), et(e, r), me(e, K()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            wt(e, ce, Ve);
            break;
          case 3:
            if (
              (et(e, r),
              (r & 130023424) === r && ((t = Pi + 500 - K()), 10 < t))
            ) {
              if (Ir(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ue(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = So(wt.bind(null, e, ce, Ve), t);
              break;
            }
            wt(e, ce, Ve);
            break;
          case 4:
            if ((et(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - je(r);
              (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = K() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * kd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = So(wt.bind(null, e, ce, Ve), r);
              break;
            }
            wt(e, ce, Ve);
            break;
          case 5:
            wt(e, ce, Ve);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return me(e, K()), e.callbackNode === n ? Xa.bind(null, e) : null;
  }
  function Vo(e, t) {
    var n = Ln;
    return (
      e.current.memoizedState.isDehydrated && (xt(e, t).flags |= 256),
      (e = br(e, t)),
      e !== 2 && ((t = ce), (ce = n), t !== null && Ao(t)),
      e
    );
  }
  function Ao(e) {
    ce === null ? (ce = e) : ce.push.apply(ce, e);
  }
  function Ed(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!Me(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function et(e, t) {
    for (
      t &= ~Ni,
        t &= ~fl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - je(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Au(e) {
    if (j & 6) throw Error(y(327));
    Jt();
    var t = Ir(e, 0);
    if (!(t & 1)) return me(e, K()), null;
    var n = br(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = fo(e);
      r !== 0 && ((t = r), (n = Vo(e, r)));
    }
    if (n === 1) throw ((n = Xn), xt(e, 0), et(e, t), me(e, K()), n);
    if (n === 6) throw Error(y(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      wt(e, ce, Ve),
      me(e, K()),
      null
    );
  }
  function Ti(e, t) {
    var n = j;
    j |= 1;
    try {
      return e(t);
    } finally {
      (j = n), j === 0 && ((ln = K() + 500), ul && ht());
    }
  }
  function zt(e) {
    nt !== null && nt.tag === 0 && !(j & 6) && Jt();
    var t = j;
    j |= 1;
    var n = Ce.transition,
      r = O;
    try {
      if (((Ce.transition = null), (O = 1), e)) return e();
    } finally {
      (O = r), (Ce.transition = n), (j = t), !(j & 6) && ht();
    }
  }
  function zi() {
    (he = Wt.current), U(Wt);
  }
  function xt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), qf(n)), Y !== null))
      for (n = Y.return; n !== null; ) {
        var r = n;
        switch ((ai(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Vr();
            break;
          case 3:
            nn(), U(de), U(oe), gi();
            break;
          case 5:
            yi(r);
            break;
          case 4:
            nn();
            break;
          case 13:
            U(A);
            break;
          case 19:
            U(A);
            break;
          case 10:
            pi(r.type._context);
            break;
          case 22:
          case 23:
            zi();
        }
        n = n.return;
      }
    if (
      ((q = e),
      (Y = e = ct(e.current, null)),
      (ee = he = t),
      (G = 0),
      (Xn = null),
      (Ni = fl = Tt = 0),
      (ce = Ln = null),
      kt !== null)
    ) {
      for (t = 0; t < kt.length; t++)
        if (((n = kt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            (o.next = l), (r.next = i);
          }
          n.pending = r;
        }
      kt = null;
    }
    return e;
  }
  function Ga(e, t) {
    do {
      var n = Y;
      try {
        if ((di(), (_r.current = Gr), Xr)) {
          for (var r = H.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Xr = !1;
        }
        if (
          ((Pt = 0),
          (J = X = H = null),
          (Tn = !1),
          (Qn = 0),
          (_i.current = null),
          n === null || n.return === null)
        ) {
          (G = 1), (Xn = t), (Y = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = ee),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var f = s,
              m = u,
              h = m.tag;
            if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
              var p = m.alternate;
              p
                ? ((m.updateQueue = p.updateQueue),
                  (m.memoizedState = p.memoizedState),
                  (m.lanes = p.lanes))
                : ((m.updateQueue = null), (m.memoizedState = null));
            }
            var g = Tu(i);
            if (g !== null) {
              (g.flags &= -257),
                zu(g, i, u, o, t),
                g.mode & 1 && Pu(o, f, t),
                (t = g),
                (s = f);
              var w = t.updateQueue;
              if (w === null) {
                var S = new Set();
                S.add(s), (t.updateQueue = S);
              } else w.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Pu(o, f, t), Li();
                break e;
              }
              s = Error(y(426));
            }
          } else if (V && u.mode & 1) {
            var I = Tu(i);
            if (I !== null) {
              !(I.flags & 65536) && (I.flags |= 256),
                zu(I, i, u, o, t),
                ci(rn(s, u));
              break e;
            }
          }
          (o = s = rn(s, u)),
            G !== 4 && (G = 2),
            Ln === null ? (Ln = [o]) : Ln.push(o),
            (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var d = ja(o, s, t);
                Su(o, d);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  c = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (c !== null &&
                      typeof c.componentDidCatch == "function" &&
                      (st === null || !st.has(c))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var v = Oa(o, u, t);
                  Su(o, v);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        qa(n);
      } catch (k) {
        (t = k), Y === n && n !== null && (Y = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Za() {
    var e = Zr.current;
    return (Zr.current = Gr), e === null ? Gr : e;
  }
  function Li() {
    (G === 0 || G === 3 || G === 2) && (G = 4),
      q === null || (!(Tt & 268435455) && !(fl & 268435455)) || et(q, ee);
  }
  function br(e, t) {
    var n = j;
    j |= 2;
    var r = Za();
    (q !== e || ee !== t) && ((Ve = null), xt(e, t));
    do
      try {
        xd();
        break;
      } catch (l) {
        Ga(e, l);
      }
    while (1);
    if ((di(), (j = n), (Zr.current = r), Y !== null)) throw Error(y(261));
    return (q = null), (ee = 0), G;
  }
  function xd() {
    for (; Y !== null; ) Ja(Y);
  }
  function Cd() {
    for (; Y !== null && !Xc(); ) Ja(Y);
  }
  function Ja(e) {
    var t = ec(e.alternate, e, he);
    (e.memoizedProps = e.pendingProps),
      t === null ? qa(e) : (Y = t),
      (_i.current = null);
  }
  function qa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = yd(n, t)), n !== null)) {
          (n.flags &= 32767), (Y = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (G = 6), (Y = null);
          return;
        }
      } else if (((n = vd(n, t, he)), n !== null)) {
        Y = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Y = t;
        return;
      }
      Y = t = e;
    } while (t !== null);
    G === 0 && (G = 5);
  }
  function wt(e, t, n) {
    var r = O,
      l = Ce.transition;
    try {
      (Ce.transition = null), (O = 1), _d(e, t, n, r);
    } finally {
      (Ce.transition = l), (O = r);
    }
    return null;
  }
  function _d(e, t, n, r) {
    do Jt();
    while (nt !== null);
    if (j & 6) throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(y(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (lf(e, o),
      e === q && ((Y = q = null), (ee = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        yr ||
        ((yr = !0),
        tc(Mr, function () {
          return Jt(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = Ce.transition), (Ce.transition = null);
      var i = O;
      O = 1;
      var u = j;
      (j |= 4),
        (_i.current = null),
        wd(e, n),
        Ka(n, e),
        Qf(go),
        (Dr = !!yo),
        (go = yo = null),
        (e.current = n),
        Sd(n),
        Gc(),
        (j = u),
        (O = i),
        (Ce.transition = o);
    } else e.current = n;
    if (
      (yr && ((yr = !1), (nt = e), (qr = l)),
      (o = e.pendingLanes),
      o === 0 && (st = null),
      qc(n.stateNode),
      me(e, K()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Jr) throw ((Jr = !1), (e = Uo), (Uo = null), e);
    return (
      qr & 1 && e.tag !== 0 && Jt(),
      (o = e.pendingLanes),
      o & 1 ? (e === $o ? Rn++ : ((Rn = 0), ($o = e))) : (Rn = 0),
      ht(),
      null
    );
  }
  function Jt() {
    if (nt !== null) {
      var e = Rs(qr),
        t = Ce.transition,
        n = O;
      try {
        if (((Ce.transition = null), (O = 16 > e ? 16 : e), nt === null))
          var r = !1;
        else {
          if (((e = nt), (nt = null), (qr = 0), j & 6)) throw Error(y(331));
          var l = j;
          for (j |= 4, E = e.current; E !== null; ) {
            var o = E,
              i = o.child;
            if (E.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var f = u[s];
                  for (E = f; E !== null; ) {
                    var m = E;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zn(8, m, o);
                    }
                    var h = m.child;
                    if (h !== null) (h.return = m), (E = h);
                    else
                      for (; E !== null; ) {
                        m = E;
                        var p = m.sibling,
                          g = m.return;
                        if ((Ba(m), m === f)) {
                          E = null;
                          break;
                        }
                        if (p !== null) {
                          (p.return = g), (E = p);
                          break;
                        }
                        E = g;
                      }
                  }
                }
                var w = o.alternate;
                if (w !== null) {
                  var S = w.child;
                  if (S !== null) {
                    w.child = null;
                    do {
                      var I = S.sibling;
                      (S.sibling = null), (S = I);
                    } while (S !== null);
                  }
                }
                E = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
            else
              e: for (; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  (d.return = o.return), (E = d);
                  break e;
                }
                E = o.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var c = i.child;
            if (i.subtreeFlags & 2064 && c !== null) (c.return = i), (E = c);
            else
              e: for (i = a; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cl(9, u);
                    }
                  } catch (k) {
                    W(u, u.return, k);
                  }
                if (u === i) {
                  E = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  (v.return = u.return), (E = v);
                  break e;
                }
                E = u.return;
              }
          }
          if (
            ((j = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          )
            try {
              Ue.onPostCommitFiberRoot(nl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (O = n), (Ce.transition = t);
      }
    }
    return !1;
  }
  function Hu(e, t, n) {
    (t = rn(n, t)),
      (t = ja(e, t, 1)),
      (e = ut(e, t, 1)),
      (t = ue()),
      e !== null && (Zn(e, 1, t), me(e, t));
  }
  function W(e, t, n) {
    if (e.tag === 3) Hu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (st === null || !st.has(r)))
          ) {
            (e = rn(n, e)),
              (e = Oa(t, e, 1)),
              (t = ut(t, e, 1)),
              (e = ue()),
              t !== null && (Zn(t, 1, e), me(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = ue()),
      (e.pingedLanes |= e.suspendedLanes & n),
      q === e &&
        (ee & n) === n &&
        (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Pi)
          ? xt(e, 0)
          : (Ni |= n)),
      me(e, t);
  }
  function ba(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
        : (t = 1));
    var n = ue();
    (e = Ye(e, t)), e !== null && (Zn(e, t, n), me(e, n));
  }
  function Pd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ba(e, n);
  }
  function Td(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    r !== null && r.delete(t), ba(e, n);
  }
  var ec;
  ec = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), hd(e, t, n);
        fe = !!(e.flags & 131072);
      }
    else (fe = !1), V && t.flags & 1048576 && ra(t, Br, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Pr(e, t), (e = t.pendingProps);
        var l = bt(t, oe.current);
        Zt(t, n), (l = Si(null, t, r, e, l, n));
        var o = ki();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              pe(r) ? ((o = !0), Ar(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              hi(t),
              (l.updater = sl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Po(t, r, e, n),
              (t = Lo(null, t, r, !0, o, n)))
            : ((t.tag = 0), V && o && si(t), ie(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Pr(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Ld(r)),
            (e = ze(r, e)),
            l)
          ) {
            case 0:
              t = zo(null, t, r, e, n);
              break e;
            case 1:
              t = ju(null, t, r, e, n);
              break e;
            case 11:
              t = Lu(null, t, r, e, n);
              break e;
            case 14:
              t = Ru(null, t, r, ze(r.type, e), n);
              break e;
          }
          throw Error(y(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ze(r, l)),
          zo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ze(r, l)),
          ju(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Fa(t), e === null)) throw Error(y(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ua(e, t),
            Kr(t, r, null, n);
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = rn(Error(y(423)), t)), (t = Ou(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = rn(Error(y(424)), t)), (t = Ou(e, t, r, n, l));
              break e;
            } else
              for (
                ve = it(t.stateNode.containerInfo.firstChild),
                  ye = t,
                  V = !0,
                  Re = null,
                  n = fa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((en(), r === l)) {
              t = Xe(e, t, n);
              break e;
            }
            ie(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          da(t),
          e === null && Co(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          wo(r, l) ? (i = null) : o !== null && wo(r, o) && (t.flags |= 32),
          Da(e, t),
          ie(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && Co(t), null;
      case 13:
        return Ua(e, t, n);
      case 4:
        return (
          vi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ze(r, l)),
          Lu(e, t, r, l, n)
        );
      case 7:
        return ie(e, t, t.pendingProps, n), t.child;
      case 8:
        return ie(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ie(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            D(Wr, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (Me(o.value, i)) {
              if (o.children === l.children && !de.current) {
                t = Xe(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        (s = We(-1, n & -n)), (s.tag = 2);
                        var f = o.updateQueue;
                        if (f !== null) {
                          f = f.shared;
                          var m = f.pending;
                          m === null
                            ? (s.next = s)
                            : ((s.next = m.next), (m.next = s)),
                            (f.pending = s);
                        }
                      }
                      (o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        _o(o.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(y(341));
                  (i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    _o(i, n, t),
                    (i = o.sibling);
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          ie(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Zt(t, n),
          (l = _e(l)),
          (r = r(l)),
          (t.flags |= 1),
          ie(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ze(r, t.pendingProps)),
          (l = ze(r.type, l)),
          Ru(e, t, r, l, n)
        );
      case 15:
        return Ma(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ze(r, l)),
          Pr(e, t),
          (t.tag = 1),
          pe(r) ? ((e = !0), Ar(t)) : (e = !1),
          Zt(t, n),
          aa(t, r, l),
          Po(t, r, l, n),
          Lo(null, t, r, !0, e, n)
        );
      case 19:
        return $a(e, t, n);
      case 22:
        return Ia(e, t, n);
    }
    throw Error(y(156, t.tag));
  };
  function tc(e, t) {
    return Ps(e, t);
  }
  function zd(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function xe(e, t, n, r) {
    return new zd(e, t, n, r);
  }
  function Ri(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ld(e) {
    if (typeof e == "function") return Ri(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Zo)) return 11;
      if (e === Jo) return 14;
    }
    return 2;
  }
  function ct(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = xe(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Lr(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Ri(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Mt:
          return Ct(n.children, l, o, t);
        case Go:
          (i = 8), (l |= 8);
          break;
        case Zl:
          return (
            (e = xe(12, n, t, l | 2)), (e.elementType = Zl), (e.lanes = o), e
          );
        case Jl:
          return (e = xe(13, n, t, l)), (e.elementType = Jl), (e.lanes = o), e;
        case ql:
          return (e = xe(19, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
        case cs:
          return dl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ss:
                i = 10;
                break e;
              case as:
                i = 9;
                break e;
              case Zo:
                i = 11;
                break e;
              case Jo:
                i = 14;
                break e;
              case Je:
                (i = 16), (r = null);
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = xe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Ct(e, t, n, r) {
    return (e = xe(7, e, r, t)), (e.lanes = n), e;
  }
  function dl(e, t, n, r) {
    return (
      (e = xe(22, e, r, t)),
      (e.elementType = cs),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wl(e, t, n) {
    return (e = xe(6, e, null, t)), (e.lanes = n), e;
  }
  function Ql(e, t, n) {
    return (
      (t = xe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Rd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = _l(0)),
      (this.expirationTimes = _l(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = _l(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ji(e, t, n, r, l, o, i, u, s) {
    return (
      (e = new Rd(e, t, n, u, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = xe(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      hi(o),
      e
    );
  }
  function jd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ot,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function nc(e) {
    if (!e) return dt;
    e = e._reactInternals;
    e: {
      if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(y(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pe(n)) return ta(e, n, t);
    }
    return t;
  }
  function rc(e, t, n, r, l, o, i, u, s) {
    return (
      (e = ji(n, r, !0, e, l, o, i, u, s)),
      (e.context = nc(null)),
      (n = e.current),
      (r = ue()),
      (l = at(n)),
      (o = We(r, l)),
      (o.callback = t ?? null),
      ut(n, o, l),
      (e.current.lanes = l),
      Zn(e, l, r),
      me(e, r),
      e
    );
  }
  function pl(e, t, n, r) {
    var l = t.current,
      o = ue(),
      i = at(l);
    return (
      (n = nc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = We(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = ut(l, t, i)),
      e !== null && (Oe(e, l, i, o), Cr(e, l, i)),
      i
    );
  }
  function el(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Bu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oi(e, t) {
    Bu(e, t), (e = e.alternate) && Bu(e, t);
  }
  function Od() {
    return null;
  }
  var lc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Mi(e) {
    this._internalRoot = e;
  }
  ml.prototype.render = Mi.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    pl(e, t, null, null);
  };
  ml.prototype.unmount = Mi.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zt(function () {
        pl(null, e, null, null);
      }),
        (t[Ke] = null);
    }
  };
  function ml(e) {
    this._internalRoot = e;
  }
  ml.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ms();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
      be.splice(n, 0, e), n === 0 && Ds(e);
    }
  };
  function Ii(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function hl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Wu() {}
  function Md(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var f = el(i);
          o.call(f);
        };
      }
      var i = rc(t, r, e, 0, null, !1, !1, "", Wu);
      return (
        (e._reactRootContainer = i),
        (e[Ke] = i.current),
        Vn(e.nodeType === 8 ? e.parentNode : e),
        zt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var f = el(s);
        u.call(f);
      };
    }
    var s = ji(e, 0, !1, null, null, !1, !1, "", Wu);
    return (
      (e._reactRootContainer = s),
      (e[Ke] = s.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      zt(function () {
        pl(t, s, n, r);
      }),
      s
    );
  }
  function vl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = el(i);
          u.call(s);
        };
      }
      pl(t, i, e, l);
    } else i = Md(n, t, e, l, r);
    return el(i);
  }
  js = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kn(t.pendingLanes);
          n !== 0 &&
            (ei(t, n | 1), me(t, K()), !(j & 6) && ((ln = K() + 500), ht()));
        }
        break;
      case 13:
        zt(function () {
          var r = Ye(e, 1);
          if (r !== null) {
            var l = ue();
            Oe(r, e, 1, l);
          }
        }),
          Oi(e, 1);
    }
  };
  ti = function (e) {
    if (e.tag === 13) {
      var t = Ye(e, 134217728);
      if (t !== null) {
        var n = ue();
        Oe(t, e, 134217728, n);
      }
      Oi(e, 134217728);
    }
  };
  Os = function (e) {
    if (e.tag === 13) {
      var t = at(e),
        n = Ye(e, t);
      if (n !== null) {
        var r = ue();
        Oe(n, e, t, r);
      }
      Oi(e, t);
    }
  };
  Ms = function () {
    return O;
  };
  Is = function (e, t) {
    var n = O;
    try {
      return (O = e), t();
    } finally {
      O = n;
    }
  };
  so = function (e, t, n) {
    switch (t) {
      case "input":
        if ((to(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = il(r);
              if (!l) throw Error(y(90));
              ds(r), to(r, l);
            }
          }
        }
        break;
      case "textarea":
        ms(e, n);
        break;
      case "select":
        (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
    }
  };
  ks = Ti;
  Es = zt;
  var Id = { usingClientEntryPoint: !1, Events: [qn, Ut, il, ws, Ss, Ti] },
    gn = {
      findFiberByHostInstance: St,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Dd = {
      bundleType: gn.bundleType,
      version: gn.version,
      rendererPackageName: gn.rendererPackageName,
      rendererConfig: gn.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ge.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = _s(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: gn.findFiberByHostInstance || Od,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
      try {
        (nl = gr.inject(Dd)), (Ue = gr);
      } catch {}
  }
  we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
  we.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ii(t)) throw Error(y(200));
    return jd(e, t, null, n);
  };
  we.createRoot = function (e, t) {
    if (!Ii(e)) throw Error(y(299));
    var n = !1,
      r = "",
      l = lc;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
      (t = ji(e, 1, !1, null, null, n, !1, r, l)),
      (e[Ke] = t.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      new Mi(t)
    );
  };
  we.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(y(188))
        : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (e = _s(t)), (e = e === null ? null : e.stateNode), e;
  };
  we.flushSync = function (e) {
    return zt(e);
  };
  we.hydrate = function (e, t, n) {
    if (!hl(t)) throw Error(y(200));
    return vl(null, e, t, !0, n);
  };
  we.hydrateRoot = function (e, t, n) {
    if (!Ii(e)) throw Error(y(405));
    var r = (n != null && n.hydratedSources) || null,
      l = !1,
      o = "",
      i = lc;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
      (t = rc(t, null, e, 1, n ?? null, l, !1, o, i)),
      (e[Ke] = t.current),
      Vn(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (l = n._getVersion),
          (l = l(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, l])
            : t.mutableSourceEagerHydrationData.push(n, l);
    return new ml(t);
  };
  we.render = function (e, t, n) {
    if (!hl(t)) throw Error(y(200));
    return vl(null, e, t, !1, n);
  };
  we.unmountComponentAtNode = function (e) {
    if (!hl(e)) throw Error(y(40));
    return e._reactRootContainer
      ? (zt(function () {
          vl(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Ke] = null);
          });
        }),
        !0)
      : !1;
  };
  we.unstable_batchedUpdates = Ti;
  we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!hl(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return vl(e, t, n, !1, r);
  };
  we.version = "18.2.0-next-9e3b772b8-20220608";
  function oc() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
      } catch (e) {
        console.error(e);
      }
  }
  oc(), (rs.exports = we);
  var Fd = rs.exports,
    Qu = Fd;
  (Xl.createRoot = Qu.createRoot), (Xl.hydrateRoot = Qu.hydrateRoot);
  const Qt = $.forwardRef(function (
    { children: e, styles: t = {}, onClick: n = () => {}, ...r },
    l
  ) {
    return P.jsx("button", { ref: l, style: t, ...r, onClick: n, children: e });
  });
  Qt.displayName = "Button";
  function Ud({
    defaultValue: e = "123",
    styles: t = {},
    onChange: n = () => {},
    onKeyDown: r = () => {},
    placeholder: l = "",
    ...o
  }) {
    const i = $.useCallback((u) => {
      if (u.key == "Tab") {
        u.preventDefault();
        const m = u.target;
        var s = m.selectionStart,
          f = m.selectionEnd;
        (m.value = m.value.substring(0, s) + "	" + m.value.substring(f)),
          (m.selectionStart = m.selectionEnd = s + 1);
      }
    }, []);
    return P.jsx("textarea", {
      className: "input",
      defaultValue: e,
      onChange: n,
      onKeyDown: (u) => {
        i(u), r(u);
      },
      rows: 8,
      style: t,
      placeholder: l,
      spellCheck: !1,
      ...o,
    });
  }
  function $d({ title: e = "", datas: t }) {
    let n = 0;
    return (
      $.useEffect(() => {
        t.map((r, l) => {
          document.querySelector(`[data-index="${e}${l}"]`).innerHTML = t[l];
        });
      }, [t]),
      P.jsxs("details", {
        open: !0,
        children: [
          P.jsx("summary", {
            style: {
              cursor: "pointer",
              color: t.length === 0 ? "crimson" : null,
            },
            children: e,
          }),
          P.jsx("div", {
            children:
              t.length === 0
                ? P.jsx("p", {
                    className: "_content",
                    style: { color: "crimson" },
                    title: "No content matches selectors",
                    children: "Null",
                  })
                : t.map((r, l) =>
                    P.jsx(
                      "p",
                      { className: "_content", "data-index": `${e}${n++}` },
                      l
                    )
                  ),
          }),
        ],
      })
    );
  }
  const ic = $.memo(
    ({ results: e }) => (
      (e = e ?? {}),
      P.jsx("div", {
        children: Object.keys(e).map((t) =>
          P.jsx($d, { title: t, datas: e[t] }, t)
        ),
      })
    )
  );
  ic.displayName = "Results";
  function Kl({ children: e, style: t }) {
    return P.jsxs("div", {
      children: [
        e,
        P.jsx("span", { style: { display: "block", clear: "both", ...t } }),
      ],
    });
  }
  const Ku = (e) => document.querySelector(e),
    Vd = [
      "meta[property='article:published_time']",
      "meta[name='pubdate']",
      "meta[name='its_publication']",
    ],
    Ad = $.memo(function () {
      const [e, t] = $.useState(!1),
        [n, r] = $.useState(null),
        [l, o] = $.useState([]),
        i = $.useCallback(() => {
          var s;
          r(
            (s = Ku("meta[property='og:type']")) == null ? void 0 : s.outerHTML
          );
          const u = Vd.map((f) => {
            var m;
            return (m = Ku(f)) == null ? void 0 : m.outerHTML;
          });
          o(u.filter((f) => f));
        }, []);
      return P.jsx("form", {
        onSubmit: (u) => {
          u.preventDefault(), t(!0), i();
        },
        style: { border: "1px solid #3f3f3f", borderRadius: 4, padding: 8 },
        children: e
          ? P.jsxs(P.Fragment, {
              children: [
                P.jsxs("details", {
                  open: !0,
                  children: [
                    P.jsx("summary", {
                      style: { cursor: "pointer" },
                      children: "Meta type",
                    }),
                    P.jsx("p", {
                      style: {
                        paddingLeft: 16,
                        color: n ? "var(--pink)" : "crimson",
                      },
                      children: n ?? "null",
                    }),
                  ],
                }),
                P.jsxs("details", {
                  open: !0,
                  children: [
                    P.jsx("summary", {
                      style: { cursor: "pointer" },
                      children: "Meta Publish date",
                    }),
                    P.jsx("ul", {
                      style: { paddingLeft: 16 },
                      children:
                        l.length > 0
                          ? l.map((u, s) =>
                              P.jsx(
                                "li",
                                {
                                  style: {
                                    color: u ? "var(--pink)" : "crimson",
                                    marginLeft: 8,
                                  },
                                  children: u,
                                },
                                s
                              )
                            )
                          : P.jsx("p", {
                              style: { color: "crimson", marginLeft: 2 },
                              children: "null",
                            }),
                    }),
                  ],
                }),
              ],
            })
          : P.jsx(Qt, { children: "Get meta tags" }),
      });
    }),
    uc = "toolSearchingPosition",
    sc = "toolSearchingType",
    Hd = JSON.parse(localStorage.getItem(uc)),
    Bd = localStorage.getItem(sc),
    Yl = { publish_time: " ", content: " ", author: " ", ...Hd },
    Wd = `{
	"publish_time":"${Yl.publish_time}",
	"content":"${Yl.content}",
	"author":"${Yl.author}"
}`;
  function Qd() {
    const [e, t] = $.useState(Bd ?? "innerText"),
      [n, r] = $.useState(Wd),
      [l, o] = $.useState(""),
      [i, u] = $.useState(!0),
      [s, f] = $.useState(null),
      [m, h] = $.useState(!1),
      [p, g] = $.useState(!1),
      w = $.useMemo(() => s, [p]),
      S = $.useRef(),
      I = $.useCallback((c, v) => {
        if (c.trim().length === 0)
          return o("Không được để trống vị trí tìm kiếm");
        v.trim().length === 0 && t((k) => "innerText");
        try {
          const k = JSON.parse(c),
            C = Object.keys(k).reduce(
              (_, M) => (k[M].trim() !== "" && (_[M] = k[M]), _),
              {}
            );
          let N = {};
          for (let _ in C)
            N[_] = Array.from(document.querySelectorAll(C[_])).map(
              (M) => M[v] ?? ""
            );
          h(!0),
            f(N),
            g((_) => !_),
            localStorage.setItem(uc, JSON.stringify(C)),
            localStorage.setItem(sc, v.trim());
        } catch (k) {
          o(k.message);
        }
      }, []),
      d = $.useCallback((c) => {
        c.shiftKey &&
          c.key === "Enter" &&
          (c.preventDefault(), c.target.form && S.current.click());
      }, []),
      a = $.useCallback(() => {
        document.querySelectorAll("iframe").forEach((v) => v.remove());
      }, []);
    return i
      ? P.jsxs("div", {
          className: "Container",
          children: [
            P.jsxs("main", {
              children: [
                P.jsx(Ad, {}),
                P.jsxs("form", {
                  onSubmit: (c) => {
                    c.preventDefault(), I(n, e);
                  },
                  children: [
                    P.jsx(Kl, {
                      style: { marginBottom: 8 },
                      children: P.jsxs("label", {
                        children: [
                          P.jsx("small", {
                            style: { color: "var(--yellow)" },
                            children: `Thuộc tính tìm kiếm (mặc định sẽ là innerText, có thể thay đổi thành innerHTML hoặc bất kì thuộc tính nào
              của một thẻ HTML, hãy cẩn thận):`,
                          }),
                          P.jsx("input", {
                            className: "input",
                            value: e,
                            style: { color: "var(--pink)" },
                            onChange: (c) => {
                              c.nativeEvent.data !== " " &&
                                (h(!1), t(c.target.value.trim()));
                            },
                            spellCheck: !1,
                          }),
                        ],
                      }),
                    }),
                    P.jsxs("label", {
                      children: [
                        P.jsx("small", {
                          style: { color: "var(--green)" },
                          children: "Vị trí tìm kiếm (JSON)",
                        }),
                        P.jsx(Ud, {
                          defaultValue: n,
                          placeholder: `JSON object, e.g:

{
	"title":"Welcome"
}`,
                          onChange: (c) => {
                            h(!1), r(c.target.value), o("");
                          },
                          onKeyDown: d,
                        }),
                      ],
                    }),
                    P.jsx("small", {
                      style: { color: "crimson" },
                      children: l,
                    }),
                    P.jsx(Kl, {
                      children: P.jsx(Qt, {
                        className: "submit",
                        ref: S,
                        children: "Submit",
                      }),
                    }),
                    P.jsx(Kl, {
                      children: P.jsx("small", {
                        style: { color: "var(--blue)", float: "right" },
                        children: "tips >> SHIFT ENTER to submit",
                      }),
                    }),
                  ],
                }),
                P.jsx("p", {
                  style: {
                    color: m ? "#00a44d" : "var(--yellow)",
                    fontWeight: "bolder",
                  },
                  children: `${m ? "RESULT:" : "Not submitted..."}`,
                }),
                P.jsx(ic, { results: w }),
              ],
            }),
            P.jsxs("div", {
              style: {
                clear: "both",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              },
              children: [
                P.jsx(Qt, {
                  onClick: a,
                  title: "Xóa các thẻ iframes trong trang web",
                  styles: {
                    width: "unset",
                    height: 32,
                    fontSize: 13,
                    margin: 4,
                    color: "var(--yellow)",
                  },
                  children: "Remove iframes",
                }),
                P.jsx(Qt, {
                  className: "toggle",
                  onClick: () => {
                    u(!1);
                  },
                  children: "Hide",
                }),
              ],
            }),
          ],
        })
      : P.jsx(Qt, {
          className: "toggle",
          onClick: () => {
            u(!0);
          },
          children: "Show",
        });
  }
  Xl.createRoot(document.getElementById("Tool_Jason_1902")).render(
    P.jsx(Nc.StrictMode, { children: P.jsx(Qd, {}) })
  );
})();
