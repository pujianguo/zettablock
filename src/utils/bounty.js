! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.bounty = e() : t.bounty = e()
}(this, function () {
  return function (t) {
    function e(n) {
      if (r[n]) return r[n].exports;
      var a = r[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.p = "/", e(0)
  }([function (t, e, r) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = r(1);
    Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function () {
        return n(a).default
      }
    })
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function a(t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r
      }
      return Array.from(t)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var l = r(2),
      i = n(l),
      o = r(5),
      u = r(10),
      c = n(u),
      f = 10,
      d = 3,
      s = function (t, e, r, n) {
        var a, l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
          i = (a = (a = o.append.call(t, "g"), o.attr).call(a, "id", "digit-" + n), o.style).call(a, "filter", "url(#motionFilter-" + n + ")");
        return l.forEach(function (t, n) {
          var a;
          (a = (a = o.append.call(i, "text"), o.attr).call(a, "y", -n * e * r), o.text).call(a, t)
        }), i
      },
      p = function (t, e, r) {
        var n;
        return (n = (n = o.append.call(t, "g"), o.append).call(n, "text"), o.text).call(n, e)
      },
      v = function (t, e) {
        var r;
        return (r = (r = (r = (r = (r = (r = (r = o.append.call(t, "filter"), o.attr).call(r, "id", "motionFilter-" + e), o.attr).call(r, "width", "300%"), o.attr).call(r, "x", "-100%"), o.append).call(r, "feGaussianBlur"), o.attr).call(r, "class", "blurValues"), o.attr).call(r, "in", "SourceGraphic"), o.attr).call(r, "stdDeviation", "0 0")
      },
      y = function (t, e) {
        var r;
        return (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = o.append.call(t, "linearGradient"), o.attr).call(r, "id", "gradient-" + e), o.attr).call(r, "x1", "0%"), o.attr).call(r, "y1", "0%"), o.attr).call(r, "x2", "0%"), o.attr).call(r, "y2", "100%"), o.append).call(r, "stop"), o.attr).call(r, "offset", "0"), o.attr).call(r, "stop-color", "white"), o.attr).call(r, "stop-opacity", "0"), o.select).call(r, "#gradient-" + e), o.append).call(r, "stop"), o.attr).call(r, "offset", "0.2"), o.attr).call(r, "stop-color", "white"), o.attr).call(r, "stop-opacity", "1"), o.select).call(r, "#gradient-" + e), o.append).call(r, "stop"), o.attr).call(r, "offset", "0.8"), o.attr).call(r, "stop-color", "white"), o.attr).call(r, "stop-opacity", "1"), o.select).call(r, "#gradient-" + e), o.append).call(r, "stop"), o.attr).call(r, "offset", "1"), o.attr).call(r, "stop-color", "white"), o.attr).call(r, "stop-opacity", "0")
      },
      h = function (t, e) {
        var r;
        return (r = (r = (r = (r = (r = (r = (r = o.append.call(t, "mask"), o.attr).call(r, "id", "mask-" + e), o.append).call(r, "rect"), o.attr).call(r, "x", 0), o.attr).call(r, "y", 0), o.attr).call(r, "width", "100%"), o.attr).call(r, "height", "100%"), o.attr).call(r, "fill", "url(#gradient-" + e + ")")
      },
      g = function (t, e, r) {
        e = e > 0 ? e : 0
        o.attr.call(t, "width", e), o.attr.call(t, "height", r), o.attr.call(t, "viewBox", "0 0 " + e + " " + r), o.style.call(t, "overflow", "hidden")
      };
    e.default = function (t) {
      var e, r = t.el,
        n = t.value,
        l = t.initialValue,
        u = void 0 === l ? null : l,
        m = t.lineHeight,
        b = void 0 === m ? 1.35 : m,
        x = t.letterSpacing,
        _ = void 0 === x ? 1 : x,
        M = t.animationDelay,
        j = void 0 === M ? 100 : M,
        w = t.letterAnimationDelay,
        P = void 0 === w ? 100 : w,
        O = t.duration,
        S = void 0 === O ? 3e3 : O,
        N = (0, o.select)(r),
        A = window.getComputedStyle(N),
        E = parseInt(A.fontSize, 10),
        D = (E * b - E) / 2 + E / 10,
        B = E * b - D,
        F = Date.now(),
        k = 0,
        I = E * b + D;
      N.innerHTML = "";
      var q = o.append.call(N, "svg"),
        C = (e = o.append.call(q, "svg"), o.attr).call(e, "mask", "url(#mask-" + F + ")"),
        G = o.append.call(q, "defs");
      y(G, F), h(G, F);
      var H = function (t, e) {
          for (var r = String(t).replace(/ /g, " ").split(""), n = String(t).search(/\d/); e.length > r.length;) {
            var a = e[e.length - r.length - 1 + n];
            r.splice(n, 0, isNaN(parseInt(a, 10)) ? a : "0")
          }
          return r
        },
        V = String(u || "0"),
        z = H(String(n), V),
        L = H(V, String(n)),
        T = z.map(function (t, e) {
          var r = e + "-" + F;
          return isNaN(parseInt(t, 10)) || isNaN(parseInt(L[e], 10)) ? {
            isDigit: !1,
            node: p(C, t, E),
            value: t,
            offset: {
              x: 0,
              y: B
            }
          } : {
            isDigit: !0,
            id: r,
            node: s(C, E, b, r),
            filter: v(G, r),
            value: Number(t),
            initial: Number(L[e]),
            offset: {
              x: 0,
              y: B + Number(L[e]) * (E * b)
            }
          }
        }),
        J = [],
        K = T.filter(function (t) {
          return t.isDigit
        });
      K.forEach(function (t, e) {
        var r = t.initial * (E * b),
          n = (d * f + t.value) * (E * b),
          a = (0, c.default)({
            from: r,
            to: n,
            duration: S,
            delay: (K.length - 1 - e) * P + j,
            step: function (e) {
              var a;
              t.offset.y = B + e % (E * b * f), (a = t.node, o.attr).call(a, "transform", "translate(" + t.offset.x + ", " + t.offset.y + ")");
              var l = (r + n) / 2,
                i = Number(Math.abs(Math.abs(Math.abs(e - l) - l) - r) / 100).toFixed(1);
              (a = t.filter, o.attr).call(a, "stdDeviation", "0 " + i)
            },
            end: 0 === e ? function () {
              N.querySelectorAll('[style*="filter"]').forEach(function (t) {
                t.style.filter = ""
              }), R()
            } : function (t) {
              return t
            }
          });
        J.push(a)
      });
      var Q = function (t) {
          k = 0, T.forEach(function (t) {
            var e = t.node.getBBox(),
              r = e.width;
            t.offset.x = k, t.isDigit && [].concat(a(t.node.childNodes)).forEach(function (t) {
              var e = t.getBBox(),
                n = e.width,
                a = (r - n) / 2;
              t.setAttribute("x", a)
            }), k += r + _
          }), k -= _, T.forEach(function (t) {
            var e;
            (e = t.node, o.attr).call(e, "transform", "translate(" + t.offset.x + ", " + t.offset.y + ")")
          }), g(q, k, I), J.forEach(function (e) {
            return e.update(t)
          })
        },
        R = (0, i.default)(Q),
        U = function () {
          J.forEach(function (t) {
            return t.pause()
          })
        },
        W = function () {
          J.forEach(function (t) {
            return t.resume()
          })
        };
      return {
        cancel: R,
        pause: U,
        resume: W
      }
    }
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t) {
      var e = void 0,
        r = function r(n) {
          e = requestAnimationFrame(r), t(n)
        };
      return r(0),
        function () {
          return cancelAnimationFrame(e)
        }
    }
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t) {
      var e = document.createElementNS(l.default.svg, t);
      return this.appendChild(e), e
    };
    var a = r(6),
      l = n(a)
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t, e) {
      return this.setAttribute(t, e), this
    }
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = r(7);
    Object.defineProperty(e, "select", {
      enumerable: !0,
      get: function () {
        return n(a).default
      }
    });
    var l = r(3);
    Object.defineProperty(e, "append", {
      enumerable: !0,
      get: function () {
        return n(l).default
      }
    });
    var i = r(4);
    Object.defineProperty(e, "attr", {
      enumerable: !0,
      get: function () {
        return n(i).default
      }
    });
    var o = r(8);
    Object.defineProperty(e, "style", {
      enumerable: !0,
      get: function () {
        return n(o).default
      }
    });
    var u = r(9);
    Object.defineProperty(e, "text", {
      enumerable: !0,
      get: function () {
        return n(u).default
      }
    })
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      svg: "http://www.w3.org/2000/svg"
    }
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t) {
      return t === String(t) ? document.querySelector(t) : t
    }
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return this.style.setProperty(t, e, r), this
    }
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t) {
      return this.textContent = t, this
    }
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = function (t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    };
    e.default = function (t) {
      var e = t.from,
        n = t.to,
        a = t.duration,
        l = void 0 === a ? 3e3 : a,
        i = t.delay,
        o = void 0 === i ? 0 : i,
        u = t.easing,
        c = void 0 === u ? r : u,
        f = t.start,
        d = void 0 === f ? function (t) {
          return t
        } : f,
        s = t.step,
        p = void 0 === s ? function (t) {
          return t
        } : s,
        v = t.end,
        y = void 0 === v ? function (t) {
          return t
        } : v,
        h = e,
        g = 0,
        m = !1,
        b = 0,
        x = !1,
        _ = function (t) {
          if (!x) {
            g || (g = t, b = t, d(h)), m && (g += t - b);
            var r = Math.min(Math.max(t - g - o, 0), l) / l;
            h = c(r) * (n - e) + e, p(h), 1 === r && (x = !0, y(h)), b = t
          }
        },
        M = function () {
          m = !0
        },
        j = function () {
          m = !1
        };
      return {
        update: _,
        pause: M,
        resume: j
      }
    }
  }])
});
