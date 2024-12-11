(() => {
  var e,
    a,
    d,
    c,
    f = {
      16577: (e) => {
        async function a(e) {
          return new Promise((a) => setTimeout(a, e));
        }
        e.exports = {
          safeImport: async function (
            e,
            { RETRY_DELAY: d = 2e3, RETRY_LIMIT: c = 10 } = {}
          ) {
            if ("true" === window?.localStorage?.UNSAFE_IMPORT) return e();
            for (let f = 0; f < c; f++)
              try {
                return await e();
              } catch (e) {
                console.error(e), await a(d);
              }
            document.location.reload();
          },
        };
      },
    },
    t = {};
  function r(e) {
    var a = t[e];
    if (void 0 !== a) return a.exports;
    var d = (t[e] = { id: e, loaded: !1, exports: {} });
    return f[e].call(d.exports, d, d.exports, r), (d.loaded = !0), d.exports;
  }
  (r.m = f),
    (r.amdO = {}),
    (r.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return r.d(a, { a }), a;
    }),
    (a = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (r.t = function (d, c) {
      if ((1 & c && (d = this(d)), 8 & c)) return d;
      if ("object" == typeof d && d) {
        if (4 & c && d.__esModule) return d;
        if (16 & c && "function" == typeof d.then) return d;
      }
      var f = Object.create(null);
      r.r(f);
      var t = {};
      e = e || [null, a({}), a([]), a(a)];
      for (var b = 2 & c && d; "object" == typeof b && !~e.indexOf(b); b = a(b))
        Object.getOwnPropertyNames(b).forEach((e) => (t[e] = () => d[e]));
      return (t.default = () => d), r.d(f, t), f;
    }),
    (r.d = (e, a) => {
      for (var d in a)
        r.o(a, d) &&
          !r.o(e, d) &&
          Object.defineProperty(e, d, { enumerable: !0, get: a[d] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((a, d) => (r.f[d](e, a), a), []))),
    (r.u = (e) =>
      "chunk/" +
      (2143 === e ? "app" : e) +
      "." +
      {
        128: "c11f2511",
        321: "35ed85c9",
        421: "aed77a36",
        440: "18d5f1ac",
        470: "74df2503",
        491: "c42d822a",
        556: "65f1971e",
        717: "609e82ec",
        733: "e3c85b8b",
        853: "1be377e9",
        920: "8a6b3898",
        938: "76d8a475",
        948: "18b80918",
        965: "0ddaccc1",
        1020: "af554364",
        1130: "17eb57ad",
        1274: "9b380660",
        1281: "13508c91",
        1348: "e1817e74",
        1350: "f8dc2a3f",
        1459: "7629e418",
        1462: "13b4cf57",
        1492: "f46a6176",
        1527: "26d6233b",
        1530: "26403f31",
        1532: "ae94383b",
        1567: "969e7b50",
        1588: "b397c0be",
        1698: "b2ef3b0a",
        1750: "d9115149",
        1751: "90dfe310",
        1778: "e96a3a7d",
        1803: "f8699b27",
        1841: "1f83723e",
        1847: "ec062c22",
        1891: "ac519d08",
        1923: "13f4d8f1",
        1984: "a62ab974",
        1989: "70cbf50d",
        1992: "ed9b59bf",
        2012: "23d5dfa4",
        2077: "d7bc8b83",
        2143: "c481aad6",
        2164: "88cc2927",
        2184: "a723f8f5",
        2185: "afab164d",
        2201: "e7e30595",
        2320: "ddf24c17",
        2366: "dea8eea6",
        2370: "4c5f3138",
        2387: "82ce684c",
        2489: "f23e1247",
        2518: "c637c392",
        2656: "de59989a",
        2663: "b80f5d73",
        2740: "bc5f6eee",
        2979: "1ad54971",
        2992: "dcf64b8a",
        3014: "8ac4b477",
        3138: "2527bf43",
        3206: "f638d82d",
        3227: "4537ffb3",
        3266: "9d814ef6",
        3285: "a19a623f",
        3405: "26316b1c",
        3463: "a0bc3139",
        3495: "f0aede05",
        3498: "63e89afb",
        3581: "1f1beac8",
        3688: "ac0d1647",
        3705: "b4788f0b",
        3741: "c7854f51",
        3744: "48e707de",
        3779: "5218c0f8",
        3843: "4db1da13",
        3883: "78f4ba24",
        3892: "27bcbe35",
        3927: "a0aec0bd",
        3929: "461f6a7d",
        3961: "af0d2c93",
        3970: "cd0a4e01",
        3989: "681abcd4",
        4075: "4c234f33",
        4145: "802640ed",
        4185: "9dcec13a",
        4194: "8d9b3c35",
        4226: "2be7d30e",
        4233: "47e5af13",
        4240: "e4c041d3",
        4247: "8eba35c5",
        4249: "a57f92c6",
        4260: "dc82a844",
        4299: "13b2d54c",
        4314: "cbd2e133",
        4317: "3d21d194",
        4341: "352a7851",
        4378: "6a9a39cb",
        4382: "dc137f1d",
        4383: "c19b31a2",
        4438: "0e794872",
        4466: "972ad2dd",
        4487: "95298001",
        4488: "5f78f20a",
        4543: "6e0bdb1c",
        4548: "5676b46d",
        4560: "ccb35eab",
        4583: "e8ad7622",
        4627: "f5758724",
        4691: "c5307735",
        4791: "1f8d172d",
        4887: "635c90b1",
        4927: "ac94d893",
        5232: "dbe73353",
        5305: "4cdd7f71",
        5396: "3a806c64",
        5477: "1e213f06",
        5510: "783c8593",
        5523: "9839f0ea",
        5558: "288d4090",
        5585: "6e7aa1e5",
        5606: "75ded8ef",
        5634: "c9c1a760",
        5640: "d77561df",
        5658: "6138ccd4",
        5768: "18232edf",
        5783: "11f0135c",
        5796: "da0131f3",
        5876: "4774e4c2",
        5996: "09dda911",
        6123: "66964834",
        6137: "75643327",
        6221: "497adb3d",
        6231: "cad26acf",
        6239: "7b0a2d5b",
        6244: "0aed1934",
        6262: "5b3aae23",
        6421: "82c2aaa7",
        6422: "70dc75d6",
        6467: "39b6789f",
        6535: "e81902ec",
        6550: "f3fe572d",
        6555: "4fc50343",
        6564: "79c4f320",
        6582: "26ac1431",
        6597: "4e29c19f",
        6710: "912c6e29",
        6738: "f672730b",
        6804: "da7e7ac7",
        6864: "67fc0a2d",
        6874: "9087b2fe",
        6894: "dbbb7114",
        6895: "1a832ece",
        6955: "2b7094f7",
        7074: "b244e91a",
        7144: "c465140f",
        7278: "92ef14a6",
        7279: "2e18bcee",
        7290: "35383304",
        7302: "c35a6186",
        7351: "c1c93221",
        7379: "5ac5bcf8",
        7411: "58b98b94",
        7413: "8eef7eb6",
        7453: "2ca839ad",
        7455: "1d32c0ce",
        7491: "d4afd030",
        7537: "badda949",
        7567: "8557c7f2",
        7642: "7d5c6471",
        7665: "8a333a9e",
        7672: "7a19463c",
        7711: "ba01e4ca",
        7717: "0cfe1213",
        7721: "3330815b",
        7722: "34df612b",
        7851: "8cdf08d5",
        7890: "92111f48",
        7919: "65b8877a",
        7925: "1c9e323e",
        7952: "56804133",
        7984: "86c3f756",
        8025: "5b47e9e2",
        8068: "ae8359a8",
        8093: "83bac059",
        8193: "83a7c684",
        8195: "8e36b154",
        8196: "ea2ca43b",
        8231: "032a2fdc",
        8317: "e6a12789",
        8432: "203d1ef0",
        8454: "4c5b1148",
        8488: "f610ade2",
        8538: "c4040e6a",
        8539: "ffa9ebb7",
        8634: "2c124fb6",
        8670: "ec3f80e9",
        8671: "d285efd3",
        8799: "2064e7ed",
        8918: "8aacc637",
        8995: "3676c404",
        9009: "4ce462dc",
        9047: "2f897943",
        9116: "f0bdd86a",
        9118: "0f543f4f",
        9203: "4c54ad35",
        9228: "655628c8",
        9250: "ececfa12",
        9255: "e0afa77d",
        9260: "e9d9b7f7",
        9264: "512f9937",
        9273: "5e9116b6",
        9276: "5fac6b9a",
        9380: "5907939d",
        9393: "6cbc1c9d",
        9469: "0f221d55",
        9530: "fc11e2e9",
        9545: "39da2509",
        9761: "a9e32dce",
        9858: "de1c7b64",
        9909: "365339b2",
        9926: "c6a48558",
      }[e] +
      ".js"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (d = {}),
    (c = "@snx-v3/liquidity:"),
    (r.l = (e, a, f, t) => {
      if (d[e]) d[e].push(a);
      else {
        var b, o;
        if (void 0 !== f)
          for (
            var n = document.getElementsByTagName("script"), i = 0;
            i < n.length;
            i++
          ) {
            var u = n[i];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == c + f
            ) {
              b = u;
              break;
            }
          }
        b ||
          ((o = !0),
          ((b = document.createElement("script")).charset = "utf-8"),
          (b.timeout = 120),
          r.nc && b.setAttribute("nonce", r.nc),
          b.setAttribute("data-webpack", c + f),
          (b.src = e)),
          (d[e] = [a]);
        var l = (a, c) => {
            (b.onerror = b.onload = null), clearTimeout(s);
            var f = d[e];
            if (
              (delete d[e],
              b.parentNode && b.parentNode.removeChild(b),
              f && f.forEach((e) => e(c)),
              a)
            )
              return a(c);
          },
          s = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: b }),
            12e4
          );
        (b.onerror = l.bind(null, b.onerror)),
          (b.onload = l.bind(null, b.onload)),
          o && document.head.appendChild(b);
      }
    }),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (r.p = ""),
    (() => {
      var e = { 179: 0 };
      r.f.j = (a, d) => {
        var c = r.o(e, a) ? e[a] : void 0;
        if (0 !== c)
          if (c) d.push(c[2]);
          else {
            var f = new Promise((d, f) => (c = e[a] = [d, f]));
            d.push((c[2] = f));
            var t = r.p + r.u(a),
              b = new Error();
            r.l(
              t,
              (d) => {
                if (r.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    t = d && d.target && d.target.src;
                  (b.message =
                    "Loading chunk " + a + " failed.\n(" + f + ": " + t + ")"),
                    (b.name = "ChunkLoadError"),
                    (b.type = f),
                    (b.request = t),
                    c[1](b);
                }
              },
              "chunk-" + a,
              a
            );
          }
      };
      var a = (a, d) => {
          var c,
            f,
            [t, b, o] = d,
            n = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (c in b) r.o(b, c) && (r.m[c] = b[c]);
            if (o) o(r);
          }
          for (a && a(d); n < t.length; n++)
            (f = t[n]), r.o(e, f) && e[f] && e[f][0](), (e[f] = 0);
        },
        d = (globalThis.webpackChunk_snx_v3_liquidity =
          globalThis.webpackChunk_snx_v3_liquidity || []);
      d.forEach(a.bind(null, 0)), (d.push = a.bind(null, d.push.bind(d)));
    })(),
    (r.nc = void 0),
    (() => {
      "use strict";
      var e = r(16577);
      !(async function () {
        const { bootstrap: a } = await (0, e.safeImport)(() =>
          Promise.all([r.e(6710), r.e(2143)]).then(r.bind(r, 78361))
        );
        a();
      })();
    })();
})();
//# sourceMappingURL=main.js.map
