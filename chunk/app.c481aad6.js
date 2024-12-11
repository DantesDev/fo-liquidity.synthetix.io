(globalThis.webpackChunk_snx_v3_liquidity =
  globalThis.webpackChunk_snx_v3_liquidity || []).push([
  [2143],
  {
    45071: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => c });
      var r = a(2784),
        n = a(96596),
        i = a(79929),
        o = a(90711),
        s = a(12944),
        l = a(52322);
      function c({
        value: e,
        prefix: t = "",
        suffix: a = "",
        "data-cy": c,
        showTooltip: d,
      }) {
        const {
          formattedValue: u,
          preciseValue: h,
          isMaxUint: x,
        } = (0, r.useMemo)(() => {
          if (!e) return { formattedValue: "-", preciseValue: "-" };
          const t = e.eq(0) ? "0.00" : (0, n.Aq)(e),
            a = (0, i.wei)(t.replaceAll(",", ""));
          return {
            isMaxUint: (0, i.wei)(o.PS).lte(e),
            formattedValue: t,
            preciseValue: e.eq(a) ? t : e.toString(),
          };
        }, [e]);
        return (0, l.jsx)(s.u, {
          label: (0, l.jsx)(l.Fragment, {
            children: x
              ? "You cannot borrow sUSD against this collateral"
              : (0, l.jsxs)(l.Fragment, { children: [t, h, a] }),
          }),
          isDisabled: u === h || !d,
          children: (0, l.jsxs)("span", {
            "data-cy": c,
            children: [t, x ? "Infinite" : u, !x && a],
          }),
        });
      }
    },
    99581: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => d });
      var r = a(2784),
        n = a(84626),
        i = a(87651),
        o = a(59176),
        s = a(65068),
        l = a(52322);
      const c = "true" === window?.localStorage?.CONTRACT_ERROR_OPEN;
      function d({ contractError: e }) {
        const [t, a] = r.useState(c);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            t
              ? null
              : (0, l.jsx)(n.z, {
                  variant: "link",
                  onClick: () => a(!0),
                  color: "inherit",
                  fontWeight: "normal",
                  fontStyle: "italic",
                  children: "details...",
                }),
            (0, l.jsxs)(i.U, {
              in: t,
              animateOpacity: !0,
              children: [
                (0, l.jsx)(o.x, {
                  fontStyle: "italic",
                  fontSize: "0.8em",
                  children: e.name,
                }),
                (0, l.jsx)(o.x, {
                  whiteSpace: "pre",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                  pl: "0.5em",
                  children: Object.entries(e.args)
                    .map(
                      ([e, t]) =>
                        `${e}: ${
                          t instanceof Date
                            ? (0, s.Z)(t, "yyyy-MM-dd HH:mm:ss")
                            : t
                        }`
                    )
                    .join("\n"),
                }),
              ],
            }),
          ],
        });
      }
    },
    14204: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          DepositModal: () => ge,
          DepositModalUi: () => me,
          default: () => fe,
        });
      var r = a(75429),
        n = a(11082),
        i = a(59176),
        o = a(74008),
        s = a(84626),
        l = a(70065),
        c = a(45071),
        d = a(42219),
        u = a(99581),
        h = a(96596),
        x = a(77528),
        p = a(13797),
        m = a(25042),
        g = a(42383),
        f = a(908),
        y = a(63322),
        j = a(8176),
        b = a(22668),
        w = a(37330),
        C = a(17716),
        L = a(68881),
        M = a(99),
        S = a(35834),
        A = a(95772),
        k = a(37888),
        D = a(79929),
        v = a(28145),
        I = a(50986),
        T = a(10528),
        F = a(2784);
      var N = a(34367),
        E = a(20870);
      var z = a(89536),
        P = a(18914),
        O = a(95042),
        H = a(5348);
      const $ = [
        "function deposit() payable",
        "function withdraw(uint256 wad)",
      ];
      var R = a(97737),
        U = a(49494),
        B = a(73557),
        W = a(16060),
        Z = a(1651),
        q = a(52465),
        V = a(21849),
        G = a(81826),
        _ = a(9875),
        Q = a(97386);
      const Y = "SET_REQUIRE_APPROVAL",
        K = "SET_WRAP_AMOUNT",
        X = "SET_INFINITE_APPROVAL",
        J = "RETRY",
        ee = "RUN",
        te = "RESET",
        ae = "idle",
        re = "wrap",
        ne = "approve",
        ie = "deposit",
        oe = "failed",
        se = "success",
        le = { [ne]: ne, [re]: re, [ie]: ie },
        ce = "wrapEth",
        de = "approveWETH",
        ue = "executeDeposit",
        he = {
          wrapAmount: (0, D.wei)(0),
          error: null,
          requireApproval: !1,
          infiniteApproval: !1,
        },
        xe = (0, _.C)({
          id: "DepositMachine",
          initial: ae,
          predictableActionArguments: !0,
          context: he,
          on: {
            [ee]: {
              target: ie,
              actions: (0, Q.f0)({
                wrapAmount: (e) => he.wrapAmount,
                error: (e) => he.error,
                requireApproval: (e) => he.requireApproval,
                infiniteApproval: (e) => he.infiniteApproval,
              }),
            },
            [Y]: {
              actions: (0, Q.f0)({
                requireApproval: (e, t) => t.requireApproval,
              }),
            },
            [K]: { actions: (0, Q.f0)({ wrapAmount: (e, t) => t.wrapAmount }) },
            [X]: {
              actions: (0, Q.f0)({
                infiniteApproval: (e, t) => t.infiniteApproval,
              }),
            },
          },
          states: {
            [ae]: {
              on: {
                [ee]: [
                  { target: re, cond: (e) => e.wrapAmount.gt(0) },
                  { target: ne, cond: (e) => e.requireApproval },
                  { target: ie },
                ],
              },
            },
            [re]: {
              invoke: {
                src: ce,
                onError: {
                  target: oe,
                  actions: (0, Q.f0)({
                    error: (e, t) => ({ error: t.data, step: le.wrap }),
                  }),
                },
                onDone: [
                  { target: ne, cond: (e) => e.requireApproval },
                  { target: ie },
                ],
              },
            },
            [ne]: {
              invoke: {
                src: de,
                onDone: { target: ie },
                onError: {
                  target: oe,
                  actions: (0, Q.f0)({
                    error: (e, t) => ({ error: t.data, step: le.approve }),
                  }),
                },
              },
            },
            [ie]: {
              invoke: {
                src: ue,
                onDone: { target: se },
                onError: {
                  target: oe,
                  actions: (0, Q.f0)({
                    error: (e, t) => ({ error: t.data, step: le.deposit }),
                  }),
                },
              },
            },
            [oe]: {
              on: {
                [J]: [
                  {
                    target: ne,
                    cond: (e) => e.error?.step === le.approve,
                    actions: (0, Q.f0)({ error: (e) => null }),
                  },
                  {
                    target: re,
                    cond: (e) => e.error?.step === le.wrap,
                    actions: (0, Q.f0)({ error: (e) => null }),
                  },
                  {
                    target: ie,
                    cond: (e) => e.error?.step === le.deposit,
                    actions: (0, Q.f0)({ error: (e) => null }),
                  },
                ],
              },
            },
            [se]: {},
          },
        });
      var pe = a(52322);
      const me = ({
          collateralChange: e,
          isOpen: t,
          onClose: a,
          collateralType: l,
          setInfiniteApproval: d,
          onSubmit: u,
          state: h,
          availableCollateral: x,
          poolName: p,
          title: g = "Manage Collateral",
          txSummary: f,
        }) => {
          const y = h.context.wrapAmount,
            j = h.context.infiniteApproval,
            b = h.context.requireApproval,
            w = h.context.error,
            C = h.matches(ne) || h.matches(ie) || h.matches(re),
            L = "WETH" === l?.symbol,
            M = { wrap: L ? 1 : 0, approve: L ? 2 : 1, deposit: L ? 3 : 2 };
          if (t)
            return h.matches(se)
              ? (0, pe.jsx)(V.s, {
                  onClose: u,
                  title: "Collateral successfully Updated",
                  subline: (0, pe.jsxs)(pe.Fragment, {
                    children: [
                      "Your ",
                      (0, pe.jsx)("b", { children: "Collateral" }),
                      " has been updated, read more about it in the",
                      " ",
                      (0, pe.jsx)(n.r, {
                        href: "https://docs.synthetix.io/v/synthetix-v3-user-documentation",
                        target: "_blank",
                        color: "cyan.500",
                        children: "Synthetix V3 Documentation",
                      }),
                    ],
                  }),
                  alertText: (0, pe.jsxs)(pe.Fragment, {
                    children: [
                      (0, pe.jsx)("b", { children: "Collateral" }),
                      " successfully Updated",
                    ],
                  }),
                  summary: f,
                })
              : (0, pe.jsxs)("div", {
                  "data-cy": "deposit multistep",
                  children: [
                    (0, pe.jsxs)(i.x, {
                      color: "gray.50",
                      fontSize: "20px",
                      fontWeight: 700,
                      children: [
                        (0, pe.jsx)(r.R, {
                          cursor: "pointer",
                          onClick: a,
                          mr: 2,
                        }),
                        g,
                      ],
                    }),
                    (0, pe.jsx)(o.i, { my: 4 }),
                    L
                      ? (0, pe.jsx)(m.P0, {
                          step: M.wrap,
                          title: "Wrap",
                          subtitle: y.eq(0)
                            ? (0, pe.jsxs)(i.x, {
                                as: "div",
                                children: [
                                  (0, pe.jsx)(c.$, {
                                    value: e,
                                    suffix: ` ${l?.symbol}`,
                                  }),
                                  " from balance will be used.",
                                ],
                              })
                            : (0, pe.jsxs)(i.x, {
                                as: "div",
                                children: [
                                  "You must wrap additional ",
                                  (0, pe.jsx)(c.$, {
                                    value: y,
                                    suffix: " ETH",
                                  }),
                                  " before depositing.",
                                ],
                              }),
                          status: {
                            failed: w?.step === re,
                            disabled: "WETH" !== l?.symbol,
                            success: y.eq(0) || h.matches(se),
                            loading: h.matches(re) && !w,
                          },
                        })
                      : null,
                    (0, pe.jsx)(m.P0, {
                      step: M.approve,
                      title: `Approve ${l?.symbol} transfer`,
                      status: {
                        failed: w?.step === ne,
                        success: !b || h.matches(se),
                        loading: h.matches(ne) && !w,
                      },
                      checkboxLabel: b
                        ? `Approve unlimited ${l?.symbol} transfers to Synthetix.`
                        : void 0,
                      checkboxProps: {
                        isChecked: j,
                        onChange: (e) => d(e.target.checked),
                      },
                    }),
                    (0, pe.jsx)(m.P0, {
                      step: M.deposit,
                      title: `Deposit & Lock ${l?.symbol}`,
                      subtitle: (0, pe.jsx)(pe.Fragment, {
                        children: h.matches(se)
                          ? (0, pe.jsxs)(i.x, {
                              children: [
                                (0, pe.jsx)(c.$, {
                                  value: e,
                                  suffix: ` ${l?.symbol}`,
                                }),
                                " ",
                                "deposited & locked in ",
                                p,
                                ".",
                              ],
                            })
                          : (0, pe.jsx)(pe.Fragment, {
                              children:
                                x && x.gt((0, D.wei)(0))
                                  ? (0, pe.jsx)(pe.Fragment, {
                                      children: x.gte(e)
                                        ? (0, pe.jsx)(i.x, {
                                            children: (0, pe.jsx)(c.$, {
                                              prefix:
                                                "This will deposit and lock ",
                                              value: e,
                                              suffix: ` ${l?.symbol} to ${p}.`,
                                            }),
                                          })
                                        : (0, pe.jsxs)(pe.Fragment, {
                                            children: [
                                              (0, pe.jsx)(i.x, {
                                                children: (0, pe.jsx)(c.$, {
                                                  prefix:
                                                    "This will deposit and lock ",
                                                  value: x,
                                                  suffix: ` ${l?.symbol} to ${p}.`,
                                                }),
                                              }),
                                              (0, pe.jsx)(i.x, {
                                                children: (0, pe.jsx)(c.$, {
                                                  prefix: "An additional ",
                                                  value: e.sub(x),
                                                  suffix: ` ${l?.symbol} will be deposited and locked from your wallet.`,
                                                }),
                                              }),
                                            ],
                                          }),
                                    })
                                  : (0, pe.jsx)(i.x, {
                                      children: (0, pe.jsx)(c.$, {
                                        prefix: "This will deposit and lock ",
                                        value: e,
                                        suffix: ` ${l?.symbol} to ${p}.`,
                                      }),
                                    }),
                            }),
                      }),
                      status: {
                        failed: w?.step === ie,
                        disabled: h.matches(se) && b,
                        success: h.matches(se),
                        loading: h.matches(ie) && !w,
                      },
                    }),
                    (0, pe.jsx)(s.z, {
                      isDisabled: C,
                      onClick: u,
                      width: "100%",
                      mt: "6",
                      "data-cy": "deposit confirm button",
                      children: (() => {
                        switch (!0) {
                          case Boolean(w):
                            return "Retry";
                          case C:
                            return "Processing...";
                          case h.matches(se):
                            return "Continue";
                          default:
                            return "Execute Transaction";
                        }
                      })(),
                    }),
                  ],
                });
        },
        ge = ({ onClose: e, isOpen: t, title: a, liquidityPosition: r }) => {
          const { collateralChange: n, setCollateralChange: i } = (0,
            F.useContext)(p.n),
            o = r?.collateralAmount ?? d.GH,
            s = r?.accountCollateral.availableCollateral ?? d.GH,
            [c, m] = (0, F.useState)({
              currentCollateral: d.GH,
              collateralChange: d.GH,
              currentDebt: d.GH,
            }),
            V = (0, B.s0)(),
            { collateralSymbol: _, poolId: Q, accountId: ae } = (0, z.UO)(),
            re = (0, v.useQueryClient)(),
            { network: ne } = (0, f.LN)(),
            { data: oe } = (0, b.a)(),
            { data: le } = (0, E.b)(),
            { data: he } = (0, y.t)(_),
            ge = (0, x.Yz)(ne?.id, ne?.preset),
            { data: fe } = (0, N.H)((0, x.$l)(_)),
            ye = (0, x.Yz)(ne?.id, ne?.preset) ? fe : he?.tokenAddress,
            je = n.sub(s),
            { approve: be, requireApproval: we } = (0, g.y)({
              contractAddress: ye,
              amount: je.gt(0)
                ? ge
                  ? U.parseUnits(je.toString(), 6)
                  : U.parseUnits(je.toString(), he?.decimals)
                : 0,
              spender: ge ? le?.address : oe?.address,
            }),
            Ce = (0, l.p)({ isClosable: !0, duration: 9e3 }),
            Le = (0, F.useMemo)(
              () => `${Math.floor(1e12 * Math.random())}`,
              []
            ),
            { exec: Me, wethBalance: Se } = (() => {
              const e = (0, f.mx)(),
                { data: t } = (0, y.t)("WETH"),
                { data: a, refetch: r } = (0, O.G)(),
                { data: n, refetch: i } = (0, H.mM)(t?.tokenAddress),
                { mutateAsync: o, isPending: s } = (0, v.useMutation)({
                  mutationFn: async (a) => {
                    if (!t || !e) return;
                    const r = new I.CH(t?.tokenAddress, $, e),
                      n = await r.deposit({ value: a.toBN() });
                    await n.wait();
                  },
                });
              return {
                exec: (0, F.useCallback)(
                  async (e) => {
                    if (a) {
                      if (a.lt(e)) throw new Error("Amount exceeds balance");
                      await o(e), r(), i();
                    }
                  },
                  [a, o, r, i]
                ),
                isLoading: s,
                wethBalance: n,
                ethBalance: a,
              };
            })(),
            Ae =
              "WETH" === he?.symbol && je.gt(Se || 0)
                ? je.sub(Se || 0)
                : (0, D.wei)(0),
            { data: ke } = (0, P.A)(Q),
            { exec: De } = (({
              accountId: e,
              newAccountId: t,
              poolId: a,
              collateralTypeAddress: r,
              collateralChange: n,
              currentCollateral: i,
              availableCollateral: o,
              decimals: s,
            }) => {
              const [l, c] = (0, F.useReducer)(C.I, C.E),
                { data: d } = (0, b.a)(),
                { data: u, refetch: x } = (0, L.Y_)(),
                { gasSpeed: p } = (0, A.jU)(),
                { network: m } = (0, f.LN)(),
                g = (0, f.mx)(),
                y = (0, f.yL)(),
                j = (0, v.useMutation)({
                  mutationFn: async () => {
                    if (m && y && g && d && a && r && o && !n.eq(0))
                      try {
                        c({ type: "prompting" });
                        const l = await g.getAddress(),
                          x = e ?? t,
                          f = new I.CH(d.address, d.abi, g),
                          j = e
                            ? void 0
                            : f.populateTransaction["createAccount(uint128)"](
                                T.O$.from(x)
                              ),
                          b = n.sub(o),
                          C = b.gt(0)
                            ? (0, h.vz)(b.toString(), s)
                            : T.O$.from(0),
                          L = C.gt(0)
                            ? f.populateTransaction.deposit(T.O$.from(x), r, C)
                            : void 0,
                          A = f.populateTransaction.delegateCollateral(
                            T.O$.from(x),
                            T.O$.from(a),
                            r,
                            i.add(n).toBN(),
                            (0, D.wei)(1).toBN()
                          ),
                          v = Promise.all([j, L, A].filter(w._)),
                          [F, N] = await Promise.all([
                            v,
                            (0, S.o)({ provider: y }),
                          ]);
                        u && F.unshift(u);
                        const { multicallTxn: E, gasLimit: z } = await (0,
                          k.dI)(m, F, "useDeposit", l),
                          P = (0, M.F)({
                            gasLimit: z,
                            gasPrices: N,
                            gasSpeed: p,
                          }),
                          O = await g.sendTransaction({ ...E, ...P });
                        c({ type: "pending", payload: { txnHash: O.hash } }),
                          await O.wait(),
                          c({ type: "success" });
                      } catch (e) {
                        throw (c({ type: "error", payload: { error: e } }), e);
                      }
                  },
                  onSuccess: () => {
                    x();
                  },
                });
              return {
                mutation: j,
                txnState: l,
                settle: () => c({ type: "settled" }),
                isLoading: j.isPending,
                exec: j.mutateAsync,
              };
            })({
              accountId: ae,
              newAccountId: Le,
              poolId: Q,
              collateralTypeAddress: ye,
              collateralChange: n,
              currentCollateral: o,
              availableCollateral: s || (0, D.wei)(0),
              decimals: Number(he?.decimals) || 18,
            }),
            { exec: ve } = (({
              accountId: e,
              newAccountId: t,
              poolId: a,
              collateralTypeAddress: r,
              collateralChange: n,
              currentCollateral: i,
              availableCollateral: o,
              collateralSymbol: s,
            }) => {
              const [l, c] = (0, F.useReducer)(C.I, C.E),
                { data: d } = (0, b.a)(),
                { data: u } = (0, E.b)(),
                { data: p, refetch: m } = (0, L.Y_)(),
                { data: j } = (0, N.X)(),
                { data: z } = (0, y.t)(s),
                { gasSpeed: P } = (0, A.jU)(),
                { network: O } = (0, f.LN)(),
                H = (0, f.mx)(),
                $ = (0, f.yL)(),
                R = (0, v.useMutation)({
                  mutationFn: async () => {
                    if (
                      O &&
                      $ &&
                      H &&
                      d &&
                      u &&
                      a &&
                      r &&
                      o &&
                      j?.sUSD &&
                      !n.eq(0)
                    )
                      try {
                        c({ type: "prompting" });
                        const r = e ?? t,
                          l = new I.CH(d.address, d.abi, H),
                          m = new I.CH(u.address, u.abi, H),
                          f = e
                            ? void 0
                            : l.populateTransaction["createAccount(uint128)"](
                                T.O$.from(r)
                              ),
                          y = n.sub(o),
                          j = y.gt(0)
                            ? (0, h.vz)(y.toString(), 6)
                            : T.O$.from(0),
                          b = (0, x.$l)(s),
                          C = y.gt(0)
                            ? (0, h.vz)(y.toString(), 18)
                            : T.O$.from(0),
                          L = j.gt(0)
                            ? m.populateTransaction.wrap(b, j, C)
                            : void 0,
                          A = z?.tokenAddress;
                        if (!A) throw "synth not found";
                        const v = new I.CH(A, g.P, H),
                          F = C.gt(0)
                            ? v.populateTransaction.approve(d.address, C)
                            : void 0,
                          N = C.gt(0)
                            ? l.populateTransaction.deposit(T.O$.from(r), A, C)
                            : void 0,
                          E = l.populateTransaction.delegateCollateral(
                            T.O$.from(r),
                            T.O$.from(a),
                            A,
                            i
                              .toBN()
                              .add((0, h.vz)(n.toString(), 18))
                              .toString(),
                            (0, D.wei)(1).toBN()
                          ),
                          R = Promise.all([L, F, f, N, E].filter(w._)),
                          [U, B] = await Promise.all([
                            R,
                            (0, S.o)({ provider: $ }),
                          ]);
                        p && U.unshift(p);
                        const W = await H.getAddress(),
                          { multicallTxn: Z, gasLimit: q } = await (0, k.dI)(
                            O,
                            U,
                            "useDepositBaseAndromeda",
                            W
                          ),
                          V = (0, M.F)({
                            gasLimit: q,
                            gasPrices: B,
                            gasSpeed: P,
                          }),
                          G = await H.sendTransaction({ ...Z, ...V });
                        c({ type: "pending", payload: { txnHash: G.hash } }),
                          await G.wait(),
                          c({ type: "success" });
                      } catch (e) {
                        throw (c({ type: "error", payload: { error: e } }), e);
                      }
                  },
                  onSuccess: () => {
                    m();
                  },
                });
              return {
                mutation: R,
                txnState: l,
                settle: () => c({ type: "settled" }),
                isLoading: R.isPending,
                exec: R.mutateAsync,
              };
            })({
              accountId: ae,
              newAccountId: Le,
              poolId: Q,
              collateralTypeAddress: ye,
              collateralChange: n,
              currentCollateral: o,
              availableCollateral: s || (0, D.wei)(0),
              collateralSymbol: _,
            }),
            Ie = (0, j.o)(),
            [Te, Fe] = (0, R.e)(xe, {
              services: {
                [ce]: async () => {
                  try {
                    await Me(Te.context.wrapAmount);
                  } catch (e) {
                    const t = Ie(e);
                    throw (
                      (t && console.error(new Error(t.name), t),
                      Ce.closeAll(),
                      Ce({
                        title: "Wrapping ETH failed",
                        description: t
                          ? (0, pe.jsx)(u.M, { contractError: t })
                          : e.message || "Please try again.",
                        status: "error",
                        variant: "left-accent",
                        duration: 36e5,
                      }),
                      Error("Wrapping failed", { cause: e }))
                    );
                  }
                },
                [de]: async () => {
                  try {
                    Ce({
                      title: "Approve collateral for transfer",
                      description: ae
                        ? "The next transaction will lock this collateral."
                        : "The next transaction will create your account and and lock this collateral",
                      status: "info",
                      variant: "left-accent",
                    }),
                      await be(Boolean(Te.context.infiniteApproval));
                  } catch (e) {
                    const t = Ie(e);
                    throw (
                      (t && console.error(new Error(t.name), t),
                      Ce.closeAll(),
                      Ce({
                        title: "Approval failed",
                        description: t
                          ? (0, pe.jsx)(u.M, { contractError: t })
                          : "Please try again.",
                        status: "error",
                        variant: "left-accent",
                        duration: 36e5,
                      }),
                      Error("Approve failed", { cause: e }))
                    );
                  }
                },
                [ue]: async () => {
                  try {
                    Ce.closeAll(),
                      Ce({
                        title: Boolean(ae)
                          ? "Locking your collateral"
                          : "Creating your account and locking your collateral",
                        description: "",
                        variant: "left-accent",
                      }),
                      m({
                        currentCollateral: o,
                        currentDebt: r?.debt || d.GH,
                        collateralChange: n,
                      }),
                      ge ? await ve() : await De(),
                      await Promise.all([
                        re.invalidateQueries({
                          queryKey: [`${ne?.id}-${ne?.preset}`, "EthBalance"],
                        }),
                        re.invalidateQueries({
                          queryKey: [
                            `${ne?.id}-${ne?.preset}`,
                            "LiquidityPosition",
                          ],
                        }),
                        "SNX" === he?.symbol
                          ? re.invalidateQueries({
                              queryKey: [
                                `${ne?.id}-${ne?.preset}`,
                                "TransferableSynthetix",
                              ],
                            })
                          : Promise.resolve(),
                        re.invalidateQueries({
                          queryKey: [`${ne?.id}-${ne?.preset}`, "Allowance"],
                        }),
                        re.invalidateQueries({
                          queryKey: [
                            `${ne?.id}-${ne?.preset}`,
                            "LiquidityPositions",
                          ],
                        }),
                        ae
                          ? Promise.resolve()
                          : re.invalidateQueries({
                              queryKey: [`${ne?.id}-${ne?.preset}`, "Accounts"],
                            }),
                      ]),
                      i(d.GH),
                      Ce.closeAll(),
                      Ce({
                        title: "Success",
                        description:
                          "Your locked collateral amount has been updated.",
                        status: "success",
                        duration: 5e3,
                        variant: "left-accent",
                      });
                  } catch (e) {
                    const t = Ie(e);
                    throw (
                      (t && console.error(new Error(t.name), t),
                      Ce.closeAll(),
                      Ce({
                        title: "Could not complete locking collateral",
                        description: t
                          ? (0, pe.jsx)(u.M, { contractError: t })
                          : "Please try again.",
                        status: "error",
                        variant: "left-accent",
                        duration: 36e5,
                      }),
                      Error("Lock collateral failed", { cause: e }))
                    );
                  }
                },
              },
            }),
            Ne = Ae.toString(),
            Ee = Te.matches(se) || Te.matches(ie);
          (0, F.useEffect)(() => {
            Ee || Fe(K, { wrapAmount: (0, D.wei)(Ne) });
          }, [Ne, Fe, Ee]),
            (0, F.useEffect)(() => {
              Fe(Y, { requireApproval: we });
            }, [we, Fe]);
          const ze = (0, B.TH)(),
            Pe = (0, F.useCallback)(() => {
              Te.matches(se) &&
                Q &&
                he?.symbol &&
                (Fe(te),
                e(),
                V({
                  pathname: (0, W.Gn)("/positions/:collateralType/:poolId", {
                    collateralType: he.symbol,
                    poolId: Q,
                  }),
                  search: ze.search,
                })),
                Fe(te),
                e();
            }, [ze.search, Fe, e, Te, Q, he?.symbol, V]),
            Oe = (0, F.useCallback)(async () => {
              Te.matches(se) ? Pe() : Te.context.error ? Fe(J) : Fe(ee);
            }, [Pe, Fe, Te]),
            He = (0, F.useMemo)(() => {
              const e = [
                {
                  label: "Locked " + he?.symbol,
                  value: (0, pe.jsx)(Z.D, {
                    value: c.currentCollateral,
                    newValue: c.currentCollateral.add(c.collateralChange),
                    formatFn: (e) => (0, h.Aq)(e),
                    hasChanges: c.collateralChange.abs().gt(0),
                    size: "sm",
                  }),
                },
              ];
              return ge
                ? e
                : [
                    ...e,
                    {
                      label: "C-ratio",
                      value: (0, pe.jsx)(q.p, {
                        currentCollateral: c.currentCollateral,
                        currentDebt: c.currentDebt,
                        collateralChange: c.collateralChange,
                        collateralPrice: r?.collateralPrice ?? d.GH,
                        debtChange: d.GH,
                        size: "sm",
                      }),
                    },
                  ];
            }, [
              he?.symbol,
              ge,
              r?.collateralPrice,
              c.collateralChange,
              c.currentCollateral,
              c.currentDebt,
            ]);
          return (0, pe.jsx)(me, {
            collateralChange: n,
            isOpen: t,
            onClose: e,
            collateralType: he,
            state: Te,
            setInfiniteApproval: (e) => {
              Fe(X, { infiniteApproval: e });
            },
            onSubmit: Oe,
            poolName: ke?.name || "",
            availableCollateral: s || (0, D.wei)(0),
            title: a,
            txSummary: (0, pe.jsx)(G.v, { items: He }),
          });
        },
        fe = ge;
    },
    25042: (e, t, a) => {
      "use strict";
      a.d(t, { nQ: () => l, P0: () => g });
      var r = a(38035),
        n = a(81540),
        i = a(28535),
        o = a(21112),
        s = a(52322);
      const l = (0, o.I)({
          viewBox: "0 0 14 14",
          path: (0, s.jsx)("g", {
            fill: "currentColor",
            children: (0, s.jsx)("polygon", {
              points:
                "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039",
            }),
          }),
        }),
        c = (0, o.I)({
          d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
        });
      function d({ status: e, children: t }) {
        switch (!0) {
          case e.failed:
            return (0, s.jsx)(c, { color: "white" });
          case e.success:
            return (0, s.jsx)(l, { color: "white" });
          case e.loading:
            return (0, s.jsx)(n.$, { color: "white", width: 6, height: 6 });
          case e.disabled:
          default:
            return (0, s.jsx)(i.xu, {
              __css: {
                display: "inline",
                fontWeight: "medium",
                textAlign: "center",
                fontSize: "md",
              },
              children: t,
            });
        }
      }
      function u(e) {
        switch (!0) {
          case e.failed:
            return "red.700";
          case e.disabled:
          case e.loading:
            return "gray.900";
          case e.success:
            return "green.700";
          default:
            return "gray.900";
        }
      }
      function h({ status: e, children: t }) {
        return (0, s.jsx)(r.k, {
          width: 10,
          height: 10,
          minWidth: 10,
          minHeight: 10,
          justifyContent: "center",
          alignItems: "center",
          bg: u(e),
          rounded: "full",
          transitionProperty: "background",
          transitionDuration: "normal",
          children: (0, s.jsx)(d, { status: e, children: t }),
        });
      }
      var x = a(78876),
        p = a(59176);
      function m({ children: e, ...t }) {
        return (0, s.jsx)(r.k, {
          mt: "0.5",
          children: (0, s.jsx)(x.X, {
            size: "sm",
            ...t,
            children: (0, s.jsx)(i.xu, {
              fontSize: "xs",
              opacity: "0.66",
              children: e,
            }),
          }),
        });
      }
      function g({
        step: e,
        title: t,
        subtitle: a,
        checkboxLabel: n,
        checkboxProps: i,
        status: o,
        children: l,
        ...c
      }) {
        return (0, s.jsxs)(r.k, {
          position: "relative",
          alignItems: "center",
          gap: 4,
          rounded: "lg",
          mt: "6",
          p: "4",
          border: "1px solid",
          transitionProperty: "border-color",
          transitionDuration: "normal",
          borderColor: u(o),
          ...c,
          children: [
            (0, s.jsx)(h, { status: o, children: e }),
            (0, s.jsxs)(r.k, {
              direction: "column",
              children: [
                (0, s.jsx)(p.x, { children: t }),
                a
                  ? (0, s.jsx)(p.x, {
                      as: "div",
                      fontSize: "xs",
                      opacity: "0.66",
                      children: a,
                    })
                  : null,
                n ? (0, s.jsx)(m, { ...i, children: n }) : null,
                l,
              ],
            }),
          ],
        });
      }
    },
    12944: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => i });
      var r = a(92841),
        n = a(52322);
      const i = ({ ...e }) =>
        (0, n.jsx)(r.u, {
          hasArrow: !0,
          bg: "gray.900",
          p: 3,
          borderRadius: "4px",
          ...e,
        });
    },
    63883: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => i });
      var r = a(62929),
        n = a(52322);
      const i = ({ width: e = "24px", height: t = "24px" }) =>
        (0, n.jsxs)(r.J, {
          width: e,
          height: t,
          viewBox: "0 0 30 30",
          fill: "none",
          children: [
            (0, n.jsxs)("g", {
              clipPath: "url(#clip0_10043_2361)",
              children: [
                (0, n.jsx)("path", {
                  d: "M15 30C23.3125 30 30 23.3125 30 15C30 6.68745 23.3125 0 15 0C6.68745 0 0 6.68745 0 15C0 23.3125 6.68745 30 15 30Z",
                  fill: "#2775CA",
                }),
                (0, n.jsx)("path", {
                  d: "M19.125 17.375C19.125 15.1875 17.8125 14.4375 15.1875 14.1251C13.3125 13.875 12.9375 13.3751 12.9375 12.5C12.9375 11.6249 13.5625 11.0625 14.8125 11.0625C15.9375 11.0625 16.5625 11.4375 16.875 12.375C16.9375 12.5625 17.125 12.6875 17.3125 12.6875H18.3124C18.5625 12.6875 18.75 12.5 18.75 12.2501V12.1875C18.4999 10.8125 17.3749 9.75 15.9375 9.62505V8.12505C15.9375 7.875 15.75 7.6875 15.4375 7.62495H14.5C14.25 7.62495 14.0625 7.81245 13.9999 8.12505V9.5625C12.1249 9.81255 10.9375 11.0625 10.9375 12.6251C10.9375 14.6876 12.1875 15.5 14.8125 15.8126C16.5625 16.125 17.125 16.5 17.125 17.5001C17.125 18.5001 16.2499 19.1876 15.0625 19.1876C13.4374 19.1876 12.8749 18.5 12.6874 17.5625C12.625 17.3126 12.4375 17.1875 12.25 17.1875H11.1874C10.9375 17.1875 10.75 17.375 10.75 17.625V17.6876C10.9999 19.25 12 20.375 14.0625 20.6876V22.1876C14.0625 22.4375 14.25 22.625 14.5624 22.6875H15.4999C15.7499 22.6875 15.9375 22.5 16 22.1876V20.6876C17.875 20.375 19.125 19.0625 19.125 17.375Z",
                  fill: "white",
                }),
                (0, n.jsx)("path", {
                  d: "M11.8125 23.9374C6.9375 22.1875 4.43745 16.75 6.25005 11.9374C7.18755 9.31245 9.25005 7.3125 11.8125 6.375C12.0625 6.25005 12.1875 6.06255 12.1875 5.74995V4.875C12.1875 4.62495 12.0625 4.43745 11.8125 4.37505C11.7499 4.37505 11.625 4.37505 11.5624 4.43745C5.625 6.31245 2.37495 12.625 4.24995 18.5625C5.37495 22.0624 8.0625 24.75 11.5624 25.875C11.8125 25.9999 12.0625 25.875 12.1249 25.6249C12.1875 25.5625 12.1875 25.5 12.1875 25.375V24.4999C12.1875 24.3124 12 24.0625 11.8125 23.9374ZM18.4375 4.43745C18.1875 4.3125 17.9375 4.43745 17.875 4.6875C17.8125 4.75005 17.8125 4.81245 17.8125 4.93755V5.8125C17.8125 6.06255 18 6.31245 18.1875 6.43755C23.0625 8.18745 25.5625 13.6249 23.75 18.4375C22.8125 21.0625 20.75 23.0625 18.1875 24C17.9374 24.1249 17.8125 24.3124 17.8125 24.625V25.5C17.8125 25.75 17.9374 25.9375 18.1875 25.9999C18.25 25.9999 18.375 25.9999 18.4375 25.9375C24.375 24.0625 27.6251 17.7499 25.7501 11.8125C24.6251 8.25 21.875 5.56245 18.4375 4.43745Z",
                  fill: "white",
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_10043_2361",
                children: (0, n.jsx)("rect", {
                  width: "30",
                  height: "30",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
    },
    71679: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ri: () => c,
        su: () => x,
        D7: () => p,
        RF: () => l,
        xi: () => o,
        Bg: () => d,
        ET: () => g,
        TR: () => i,
        K7: () => h,
        PF: () => s,
        vK: () => b,
        P$: () => j,
        o: () => u,
        sF: () => f,
        b0: () => m,
        LK: () => y,
      });
      var r = a(62929),
        n = a(52322);
      const i = ({
          color: e = "#00D1FF",
          width: t = "126px",
          height: a = "22px",
          withText: i = !0,
        }) =>
          (0, n.jsxs)(r.J, {
            width: t,
            height: a,
            viewBox: "0 0 126 22",
            fill: "none",
            color: e,
            children: [
              (0, n.jsx)("path", {
                d: "M7.00677 4.80523C6.804 4.57155 6.55437 4.45443 6.25731 4.45443H0.182051C0.128089 4.45443 0.0839395 4.43722 0.0506907 4.40281C0.0168969 4.36895 0 4.33065 0 4.28957V0.164856C0 0.12378 0.0168969 0.0860357 0.0506907 0.0516214C0.0839395 0.0172071 0.128089 0 0.182051 0H6.60179C8.22171 0 9.61925 0.667193 10.7939 2.00047L12.3533 3.91823L9.31565 7.65107L7.00677 4.80523ZM18.2263 1.97993C19.4009 0.659977 20.805 0 22.4386 0H28.8381C28.8921 0 28.9324 0.0138767 28.9597 0.0410751C28.9864 0.0688286 29 0.109904 29 0.164856V4.28957C29 4.33065 28.9864 4.36895 28.9597 4.40281C28.9324 4.43722 28.8921 4.45443 28.8381 4.45443H22.7629C22.4658 4.45443 22.2162 4.57155 22.0134 4.80523L17.5379 10.291L22.0336 15.8178C22.2363 16.0382 22.4789 16.1481 22.7629 16.1481H28.8381C28.8921 16.1481 28.9324 16.1653 28.9597 16.1997C28.9864 16.2341 29 16.2791 29 16.3335V20.4582C29 20.4993 28.9864 20.5376 28.9597 20.5714C28.9324 20.6058 28.8921 20.623 28.8381 20.623H22.4386C20.805 20.623 19.4075 19.9564 18.2465 18.6226L14.5204 14.0444L10.7939 18.6226C9.61925 19.9564 8.21517 20.623 6.58162 20.623H0.182051C0.128089 20.623 0.0872099 20.6058 0.0605018 20.5714C0.0332488 20.537 0.0201673 20.4926 0.0201673 20.4371V16.3124C0.0201673 16.2713 0.0332488 16.2336 0.0605018 16.1991C0.0872099 16.1647 0.128089 16.1475 0.182051 16.1475H6.25731C6.54074 16.1475 6.79038 16.031 7.00677 15.7967L11.4011 10.3937L18.2263 1.97993Z",
                fill: "#00D1FF",
              }),
              i &&
                (0, n.jsxs)("g", {
                  children: [
                    (0, n.jsx)("path", {
                      d: "M42.9 3.86001V15.72H51.7V17.86H40.4V3.86001H42.9Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M53.4645 7.02001H55.7845V17.86H53.4645V7.02001ZM53.4645 3.30001H55.7845V5.62001H53.4645V3.30001Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M61.0055 7.02001H68.5055V21.78H66.1855V16.38L64.4455 17.86H61.0055C59.4255 17.86 58.1655 16.54 58.1655 15.02V9.86002C58.1655 8.28002 59.4855 7.02001 61.0055 7.02001ZM61.6255 15.86H65.4855C65.8655 15.86 66.1855 15.56 66.1855 15.16V9.04002H61.6255C60.9855 9.04002 60.4655 9.54002 60.4655 10.18V14.7C60.4655 15.36 60.9855 15.86 61.6255 15.86Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M74.5408 15.86H78.3008C78.6808 15.86 79.0008 15.56 79.0008 15.16V7.02001H81.3208V17.86H79.0008V16.4L77.3208 17.86H73.9008C72.3808 17.86 71.0808 16.6 71.0808 15.02V7.02001H73.3808V14.7C73.3808 15.36 73.8808 15.86 74.5408 15.86Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M83.9333 7.02001H86.2533V17.86H83.9333V7.02001ZM83.9333 3.30001H86.2533V5.62001H83.9333V3.30001Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M96.6542 7.02001V3.14001H98.9742V17.86H96.6542V16.38L94.9142 17.86H91.4742C89.8942 17.86 88.6342 16.54 88.6342 15.02V9.86002C88.6342 8.28002 89.9542 7.02001 91.4742 7.02001H96.6542ZM92.0942 15.86H95.9542C96.3342 15.86 96.6542 15.56 96.6542 15.16V9.04002H92.0942C91.4542 9.04002 90.9342 9.54002 90.9342 10.18V14.7C90.9342 15.36 91.4542 15.86 92.0942 15.86Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M101.59 7.02001H103.91V17.86H101.59V7.02001ZM101.59 3.30001H103.91V5.62001H101.59V3.30001Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M113.09 15.86V17.86H110.31C108.77 17.86 107.51 16.66 107.51 15.08V9.04002H105.63V7.02001H107.51V4.64002H109.83V7.02001H113.11V9.04002H109.83V14.74C109.83 15.4 110.27 15.86 110.93 15.86H113.09Z",
                      fill: "white",
                    }),
                    (0, n.jsx)("path", {
                      d: "M116.587 21.78L118.747 17.22L113.947 7.02001H116.467L119.947 14.74L123.267 7.02001H125.747L119.067 21.78H116.587Z",
                      fill: "white",
                    }),
                  ],
                }),
            ],
          }),
        o = ({
          width: e = "24px",
          height: t = "24px",
          fill: a = "#627EEA",
          ...i
        }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            height: t,
            viewBox: "0 0 30 30",
            fill: "none",
            ...i,
            children: [
              (0, n.jsx)("path", {
                d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15Z",
                fill: a,
              }),
              (0, n.jsx)("path", {
                d: "M15.467 3.75v8.316l7.028 3.14L15.467 3.75Z",
                fill: "#fff",
                fillOpacity: ".602",
              }),
              (0, n.jsx)("path", {
                d: "m15.467 3.75-7.03 11.456 7.03-3.14V3.75Z",
                fill: "#fff",
              }),
              (0, n.jsx)("path", {
                d: "M15.467 20.595v5.65l7.033-9.73-7.033 4.08Z",
                fill: "#fff",
                fillOpacity: ".602",
              }),
              (0, n.jsx)("path", {
                d: "M15.467 26.245v-5.651l-7.03-4.08 7.03 9.731Z",
                fill: "#fff",
              }),
              (0, n.jsx)("path", {
                d: "m15.467 19.287 7.028-4.08-7.028-3.14v7.22Z",
                fill: "#fff",
                fillOpacity: ".2",
              }),
              (0, n.jsx)("path", {
                d: "m8.438 15.206 7.029 4.081v-7.22l-7.03 3.14Z",
                fill: "#fff",
                fillOpacity: ".602",
              }),
            ],
          }),
        s = ({
          width: e = "24px",
          height: t = "24px",
          color: a = "white",
          fill: i = "#FF0420",
          ...o
        }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            height: t,
            viewBox: "0 0 34 34",
            ...o,
            children: [
              (0, n.jsx)("path", {
                d: "M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z",
                fill: i,
              }),
              (0, n.jsx)("path", {
                d: "M12.3295 21.76C11.3042 21.76 10.4641 21.5131 9.80918 21.0195C9.16298 20.5171 8.83984 19.8031 8.83984 18.8775C8.83984 18.6836 8.8614 18.4456 8.90444 18.1635C9.01651 17.5289 9.1759 16.7664 9.38269 15.8761C9.96858 13.452 11.4808 12.24 13.9193 12.24C14.5828 12.24 15.1773 12.3546 15.7029 12.5838C16.2285 12.8041 16.6421 13.1391 16.9437 13.5886C17.2453 14.0294 17.3961 14.5583 17.3961 15.1753C17.3961 15.3604 17.3745 15.594 17.3314 15.8761C17.2022 16.6606 17.0471 17.4231 16.8662 18.1635C16.5646 19.3711 16.0433 20.2747 15.3022 20.8741C14.5612 21.4647 13.5703 21.76 12.3295 21.76ZM12.5105 19.856C12.993 19.856 13.4023 19.7105 13.7384 19.4196C14.083 19.1288 14.3286 18.6836 14.4751 18.0842C14.6732 17.2556 14.824 16.5328 14.9274 15.9158C14.9619 15.7306 14.9791 15.5411 14.9791 15.3472C14.9791 14.5451 14.5699 14.144 13.7513 14.144C13.2688 14.144 12.8552 14.2894 12.5105 14.5803C12.1744 14.8712 11.9332 15.3164 11.7867 15.9158C11.6316 16.5064 11.4765 17.2291 11.3214 18.0842C11.287 18.2605 11.2697 18.4456 11.2697 18.6395C11.2697 19.4505 11.6833 19.856 12.5105 19.856Z",
                fill: a,
              }),
              (0, n.jsx)("path", {
                d: "M17.9895 21.6278C17.8947 21.6278 17.8215 21.597 17.7698 21.5352C17.7267 21.4647 17.7138 21.3854 17.731 21.2972L19.5146 12.7028C19.5318 12.6059 19.5792 12.5265 19.6568 12.4648C19.7344 12.4031 19.8162 12.3722 19.9024 12.3722H23.3404C24.2968 12.3722 25.0636 12.575 25.641 12.9805C26.2269 13.386 26.5199 13.9721 26.5199 14.739C26.5199 14.9594 26.494 15.1886 26.4423 15.4266C26.2269 16.4403 25.7918 17.1895 25.1369 17.6744C24.4907 18.1592 23.6031 18.4016 22.4744 18.4016H20.7295L20.135 21.2972C20.1178 21.3942 20.0704 21.4735 19.9928 21.5352C19.9153 21.597 19.8334 21.6278 19.7473 21.6278H17.9895ZM22.5648 16.5769C22.9267 16.5769 23.2412 16.4755 23.5084 16.2728C23.7841 16.0701 23.965 15.7792 24.0513 15.4001C24.0771 15.2503 24.09 15.1181 24.09 15.0035C24.09 14.7479 24.0168 14.5539 23.8703 14.4217C23.7238 14.2806 23.4739 14.2101 23.1206 14.2101H21.5697L21.0785 16.5769H22.5648Z",
                fill: a,
              }),
            ],
          }),
        l = ({ width: e = "24px", height: t = "24px", ...a }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            height: t,
            viewBox: "0 0 19 18",
            fill: "none",
            ...a,
            children: [
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.79517 2.75357C6.44891 2.75357 3.73624 5.46625 3.73624 8.8125C3.73624 12.1588 6.44891 14.8714 9.79517 14.8714C13.1414 14.8714 15.8541 12.1588 15.8541 8.8125C15.8541 5.46625 13.1414 2.75357 9.79517 2.75357ZM2.48267 8.8125C2.48267 4.77392 5.75658 1.5 9.79517 1.5C13.8337 1.5 17.1077 4.77392 17.1077 8.8125C17.1077 12.8511 13.8337 16.125 9.79517 16.125C5.75658 16.125 2.48267 12.8511 2.48267 8.8125Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.03962 7.48711C9.04452 7.25329 9.11127 7.15806 9.15621 7.11271C9.21551 7.05288 9.33009 6.98862 9.54225 6.95486C9.98435 6.88451 10.5823 6.98693 11.0758 7.11688L11.6819 7.27652L12.0011 6.06428L11.395 5.90465C10.8745 5.76757 10.0611 5.60296 9.34526 5.71686C8.97845 5.77523 8.57742 5.91591 8.26586 6.23026C7.94168 6.55735 7.78576 6.99985 7.78576 7.51481V7.53855L7.78756 7.56221C7.83275 8.15802 8.18724 8.55401 8.55492 8.8144C8.89199 9.05311 9.30983 9.22697 9.64735 9.36742C9.66009 9.37272 9.67272 9.37797 9.68522 9.38318C10.0665 9.54198 10.3494 9.6643 10.5455 9.80792C10.7181 9.93436 10.7353 10.0108 10.7353 10.0783C10.7353 10.3402 10.6583 10.4442 10.5979 10.4988C10.5171 10.5719 10.3654 10.6431 10.1066 10.6754C9.57934 10.741 8.8945 10.6119 8.39035 10.4769L7.7849 10.3148L7.4606 11.5257L8.06605 11.6878C8.59887 11.8305 9.48099 12.0165 10.2615 11.9193C10.6565 11.8701 11.0939 11.7404 11.4387 11.4286C11.8039 11.0983 11.9889 10.6336 11.9889 10.0783C11.9889 9.47293 11.6504 9.06337 11.2862 8.79661C10.9547 8.55379 10.534 8.37864 10.1954 8.23769C10.1859 8.23376 10.1765 8.22986 10.1672 8.22598C9.78653 8.06741 9.49239 7.94221 9.27941 7.79139C9.09878 7.66347 9.051 7.56996 9.03962 7.48711Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.79517 11.0063C10.1413 11.0063 10.422 11.2869 10.422 11.633V13.2H9.16838V11.633C9.16838 11.2869 9.449 11.0063 9.79517 11.0063Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.422 4.425V5.99196C10.422 6.33813 10.1413 6.61875 9.79517 6.61875C9.449 6.61875 9.16838 6.33813 9.16838 5.99196V4.425H10.422Z",
                fill: "white",
              }),
            ],
          });
      a(63883);
      const c = ({ width: e = "24px", height: t = "24px", ...a }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            height: t,
            viewBox: "0 0 42 42",
            ...a,
            children: [
              (0, n.jsx)("circle", {
                cx: "21",
                cy: "21",
                r: "21",
                fill: "#2D374B",
              }),
              (0, n.jsx)("path", {
                d: "M25.089 19.4942L27.7327 15.0085L34.8586 26.1072L34.8619 28.2365L34.8386 13.5798C34.8303 13.403 34.7795 13.2308 34.6907 13.0777C34.6018 12.9246 34.4774 12.7952 34.328 12.7003L21.4989 5.32125C21.3456 5.24842 21.1779 5.21102 21.0082 5.21182C20.8386 5.21262 20.6712 5.2516 20.5186 5.32587C20.479 5.34572 20.4407 5.3679 20.4037 5.39231L20.3591 5.42053L7.90602 12.6367L7.85753 12.6585C7.79299 12.6884 7.7314 12.7243 7.67359 12.7657C7.44004 12.9325 7.28088 13.1839 7.23002 13.4664C7.22223 13.5092 7.21692 13.5525 7.21411 13.5959L7.23361 25.5397L13.871 15.2522C14.7066 13.8881 16.5273 13.4487 18.2174 13.4725L20.201 13.5238L8.51275 32.2682L9.89067 33.0614L21.719 13.5426L26.9472 13.5236L15.1494 33.5342L20.0663 36.3639L20.6538 36.7018C20.9073 36.8025 21.1886 36.8081 21.4458 36.7175L34.4553 29.1783L31.9668 30.6196L25.089 19.4942ZM26.0978 34.0217L21.132 26.228L24.1631 21.0845L30.6846 31.3633L26.0978 34.0217Z",
                fill: "#2D374B",
              }),
              (0, n.jsx)("path", {
                d: "M21.1323 26.228L26.0981 34.0214L30.6851 31.363L24.1639 21.0845L21.1323 26.228Z",
                fill: "#28A0F0",
              }),
              (0, n.jsx)("path", {
                d: "M34.8623 28.2368L34.859 26.1074L27.7331 15.0087L25.0879 19.4939L31.9669 30.6193L34.4554 29.1781C34.5759 29.0804 34.6745 28.9584 34.7446 28.8201C34.8148 28.6818 34.855 28.5302 34.8626 28.3753L34.8623 28.2368Z",
                fill: "#28A0F0",
              }),
              (0, n.jsx)("path", {
                d: "M5.00171 30.2455L8.5141 32.2694L20.2024 13.5251L18.2187 13.4738C16.5286 13.4499 14.7079 13.8891 13.8723 15.2534L7.23495 25.541L5.00299 28.9718V30.2466L5.00171 30.2455Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M26.9474 13.5248L21.7195 13.5438L9.89111 33.0626L14.0254 35.4431L15.1496 33.5362L26.9474 13.5248Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M37.065 13.4979C37.0411 12.9583 36.8863 12.4327 36.614 11.9664C36.3417 11.5 35.96 11.1068 35.5019 10.8208L22.5047 3.34657C22.0407 3.11856 21.5306 3 21.0137 3C20.4967 3 19.9866 3.11856 19.5226 3.34657C19.4141 3.40121 6.88305 10.6689 6.88305 10.6689C6.70895 10.7525 6.54242 10.8511 6.38535 10.9634C5.97846 11.2528 5.64243 11.6306 5.40249 12.0684C5.16255 12.5063 5.02494 12.9928 5 13.4915V28.971L7.23196 25.5402L7.21477 13.5969C7.22521 13.4332 7.27184 13.2738 7.35129 13.1302C7.43074 12.9867 7.54104 12.8625 7.67424 12.7667C7.73325 12.7244 20.4782 5.34712 20.5188 5.32685C20.6714 5.25259 20.8387 5.21361 21.0084 5.21281C21.1781 5.21201 21.3458 5.24941 21.4991 5.32224L34.3282 12.7018C34.4776 12.7967 34.602 12.9261 34.6908 13.0792C34.7797 13.2323 34.8304 13.4045 34.8387 13.5813V28.3768C34.8356 28.5302 34.7998 28.6812 34.7337 28.8196C34.6675 28.9581 34.5726 29.0808 34.4552 29.1796L31.9667 30.6208L30.684 31.3648L26.0969 34.0232L21.4449 36.7192C21.1877 36.81 20.9064 36.8044 20.653 36.7036L15.1493 33.538L14.0251 35.4447L18.9713 38.2924C19.135 38.3852 19.2807 38.4678 19.4002 38.5351C19.5855 38.6377 19.7117 38.7082 19.7561 38.7298C20.1699 38.9111 20.6173 39.0032 21.0691 38.9999C21.4834 39.0005 21.8942 38.9232 22.28 38.7721L35.7915 30.9474C36.1727 30.6509 36.4843 30.2744 36.7042 29.8445C36.9242 29.4145 37.0471 28.9415 37.0645 28.4589L37.065 13.4979Z",
                fill: "#96BEDC",
              }),
            ],
          }),
        d = ({ w: e = "94px", h: t = "94px" }) =>
          (0, n.jsxs)(r.J, {
            w: e,
            h: t,
            viewBox: "0 0 94 94",
            fill: "none",
            children: [
              (0, n.jsx)("g", {
                filter: "url(#filter0_d_1044_28165)",
                children: (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M47 76.3333C63.2004 76.3333 76.3333 63.2004 76.3333 47C76.3333 30.7996 63.2004 17.6667 47 17.6667C30.7996 17.6667 17.6667 30.7996 17.6667 47C17.6667 63.2004 30.7996 76.3333 47 76.3333ZM47 79C64.6731 79 79 64.6731 79 47C79 29.3269 64.6731 15 47 15C29.3269 15 15 29.3269 15 47C15 64.6731 29.3269 79 47 79Z",
                  fill: "#FF4A60",
                }),
              }),
              (0, n.jsx)("g", {
                filter: "url(#filter1_d_1044_28165)",
                children: (0, n.jsx)("path", {
                  d: "M56.3334 39.5466L54.4534 37.6666L47.0001 45.12L39.5467 37.6666L37.6667 39.5466L45.1201 47L37.6667 54.4533L39.5467 56.3333L47.0001 48.88L54.4534 56.3333L56.3334 54.4533L48.8801 47L56.3334 39.5466Z",
                  fill: "#FF4A60",
                }),
              }),
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsxs)("filter", {
                    id: "filter0_d_1044_28165",
                    x: "0",
                    y: "0",
                    width: "94",
                    height: "94",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, n.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, n.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, n.jsx)("feOffset", {}),
                      (0, n.jsx)("feGaussianBlur", { stdDeviation: "7.5" }),
                      (0, n.jsx)("feColorMatrix", {
                        type: "matrix",
                        values:
                          "0 0 0 0 1 0 0 0 0 0.116667 0 0 0 0 0.222667 0 0 0 0.6 0",
                      }),
                      (0, n.jsx)("feBlend", {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_1044_28165",
                      }),
                      (0, n.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_1044_28165",
                        result: "shape",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("filter", {
                    id: "filter1_d_1044_28165",
                    x: "22.6667",
                    y: "22.6666",
                    width: "48.6667",
                    height: "48.6666",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, n.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, n.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, n.jsx)("feOffset", {}),
                      (0, n.jsx)("feGaussianBlur", { stdDeviation: "7.5" }),
                      (0, n.jsx)("feColorMatrix", {
                        type: "matrix",
                        values:
                          "0 0 0 0 1 0 0 0 0 0.116667 0 0 0 0 0.222667 0 0 0 0.6 0",
                      }),
                      (0, n.jsx)("feBlend", {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_1044_28165",
                      }),
                      (0, n.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_1044_28165",
                        result: "shape",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        u = ({
          width: e = "20px",
          height: t = "20ox",
          color: a = "whiteAlpha.700",
          ...i
        }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            color: a,
            height: t,
            viewBox: "0 0 20 20",
            fill: "none",
            ...i,
            children: [
              (0, n.jsx)("path", {
                d: "M6.58154 6.2701C6.23637 6.2701 5.95654 6.54993 5.95654 6.8951C5.95654 7.24028 6.23637 7.5201 6.58154 7.5201H10.3101C10.6553 7.5201 10.9351 7.24028 10.9351 6.8951C10.9351 6.54993 10.6553 6.2701 10.3101 6.2701H6.58154Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                d: "M13.972 9.10498C13.6268 9.10498 13.347 9.38481 13.347 9.72998C13.347 10.0752 13.6268 10.355 13.972 10.355H14.1873C14.5324 10.355 14.8123 10.0752 14.8123 9.72998C14.8123 9.38481 14.5324 9.10498 14.1873 9.10498H13.972Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.2918 11.6311L17.2916 11.6447V12.3416C17.2916 14.6883 15.3892 16.5907 13.0426 16.5907H7.07331C4.72664 16.5907 2.82422 14.6883 2.82422 12.3416V7.38508C2.82422 5.0384 4.72664 3.13599 7.07331 3.13599H13.0426C15.3892 3.13599 17.2916 5.0384 17.2916 7.38508V7.90016L17.2918 7.91382L17.2916 7.92747V11.6174L17.2918 11.6311ZM7.07331 4.38599C5.41699 4.38599 4.07422 5.72876 4.07422 7.38508V12.3416C4.07422 13.9979 5.41699 15.3407 7.07331 15.3407H13.0426C14.6989 15.3407 16.0416 13.9979 16.0416 12.3416V12.2561H13.871C12.4998 12.2552 11.3876 11.1445 11.3867 9.77282C11.3867 8.40047 12.4998 7.28966 13.8706 7.28882H16.0401C15.9893 5.67705 14.6667 4.38599 13.0426 4.38599H7.07331ZM13.8714 11.0061H16.0416V8.53882H13.8712C13.1891 8.53932 12.6369 9.09162 12.6367 9.77223C12.6372 10.4535 13.1895 11.0056 13.8714 11.0061Z",
                fill: "currentColor",
              }),
            ],
          }),
        h = ({ color: e = "cyan.400", width: t = "29", height: a = "21" }) =>
          (0, n.jsx)(r.J, {
            width: t,
            height: a,
            viewBox: "0 0 29 21",
            fill: "none",
            color: e,
            children: (0, n.jsx)("path", {
              d: "M6.81239 5.45766C6.61525 5.22805 6.37254 5.11297 6.08372 5.11297H0.177C0.124536 5.11297 0.0816109 5.09606 0.0492845 5.06224C0.0164282 5.02898 0 4.99134 0 4.95098V0.89807C0 0.85771 0.0164282 0.820622 0.0492845 0.786807C0.0816109 0.752992 0.124536 0.736084 0.177 0.736084H6.41864C7.99362 0.736084 9.35239 1.39166 10.4944 2.70173L12.0106 4.58611L9.05721 8.25396L6.81239 5.45766ZM17.7207 2.68155C18.8627 1.38457 20.2278 0.736084 21.8161 0.736084H28.0381C28.0906 0.736084 28.1298 0.749719 28.1563 0.776444C28.1822 0.803714 28.1955 0.844074 28.1955 0.89807V4.95098C28.1955 4.99134 28.1822 5.02898 28.1563 5.06224C28.1298 5.09606 28.0906 5.11297 28.0381 5.11297H22.1314C21.8426 5.11297 21.5998 5.22805 21.4027 5.45766L17.0514 10.8479L21.4223 16.2785C21.6195 16.495 21.8553 16.603 22.1314 16.603H28.0381C28.0906 16.603 28.1298 16.6199 28.1563 16.6538C28.1822 16.6876 28.1955 16.7318 28.1955 16.7852V20.8381C28.1955 20.8785 28.1822 20.9161 28.1563 20.9494C28.1298 20.9832 28.0906 21.0001 28.0381 21.0001H21.8161C20.2278 21.0001 18.8691 20.3451 17.7403 19.0345L14.1176 14.5359L10.4944 19.0345C9.35239 20.3451 7.98727 21.0001 6.39903 21.0001H0.177C0.124536 21.0001 0.0847905 20.9832 0.0588234 20.9494C0.0323264 20.9156 0.0196078 20.8719 0.0196078 20.8174V16.7645C0.0196078 16.7241 0.0323264 16.687 0.0588234 16.6532C0.0847905 16.6194 0.124536 16.6025 0.177 16.6025H6.08372C6.35929 16.6025 6.602 16.488 6.81239 16.2578L11.0848 10.9488L17.7207 2.68155Z",
              fill: "currentColor",
            }),
          }),
        x = ({
          width: e = "24px",
          height: t = "24px",
          fill: a = "#0052FF",
          ...i
        }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            height: t,
            viewBox: "0 0 24 24",
            ...i,
            children: [
              (0, n.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "white",
              }),
              (0, n.jsx)("g", {
                width: "24",
                height: "24",
                fill: "white",
                children: (0, n.jsx)("path", {
                  d: "M11.9791 24C18.618 24 24 18.6274 24 12C24 5.37257 18.618 0 11.9791 0C5.6804 0 0.513182 4.8359 0 10.9913H15.8889V13.0087H8.6297e-08C0.513182 19.1641 5.6804 24 11.9791 24Z",
                  fill: a,
                }),
              }),
            ],
          }),
        p = ({ width: e = "15px", height: t = "15px", ...a }) =>
          (0, n.jsxs)(r.J, {
            width: e,
            height: t,
            viewBox: "0 0 24 24",
            fill: "none",
            ...a,
            children: [
              (0, n.jsx)("path", {
                d: "M9.84893 10.3091C9.247 10.3091 8.77179 10.8341 8.77179 11.4746C8.77179 12.1151 9.25756 12.6401 9.84893 12.6401C10.4509 12.6401 10.9261 12.1151 10.9261 11.4746C10.9366 10.8341 10.4509 10.3091 9.84893 10.3091ZM13.7034 10.3091C13.1015 10.3091 12.6263 10.8341 12.6263 11.4746C12.6263 12.1151 13.112 12.6401 13.7034 12.6401C14.3053 12.6401 14.7806 12.1151 14.7806 11.4746C14.7806 10.8341 14.3053 10.3091 13.7034 10.3091Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M18.8354 1.49976H4.68468C3.49138 1.49976 2.51984 2.46578 2.51984 3.6628V17.8591C2.51984 19.0561 3.49138 20.0222 4.68468 20.0222H16.66L16.1003 18.0796L17.452 19.3291L18.7298 20.5052L21.0002 22.5002V3.6628C21.0002 2.46578 20.0287 1.49976 18.8354 1.49976ZM14.7591 15.2131C14.7591 15.2131 14.379 14.7615 14.0622 14.3625C15.4456 13.974 15.9736 13.113 15.9736 13.113C15.5406 13.3965 15.1288 13.596 14.7591 13.7325C14.2311 13.953 13.7242 14.1 13.2279 14.184C12.2141 14.373 11.2848 14.3205 10.4928 14.1735C9.89088 14.058 9.37343 13.89 8.94046 13.722C8.69757 13.6275 8.43357 13.512 8.16956 13.365C8.13788 13.344 8.1062 13.3335 8.07452 13.3125C8.0534 13.302 8.04284 13.2915 8.03228 13.281C7.84219 13.176 7.73659 13.1025 7.73659 13.1025C7.73659 13.1025 8.24348 13.9425 9.58463 14.3415C9.26782 14.7405 8.8771 15.2131 8.8771 15.2131C6.54328 15.1396 5.65623 13.617 5.65623 13.617C5.65623 10.2359 7.1769 7.49539 7.1769 7.49539C8.69757 6.36136 10.1443 6.39286 10.1443 6.39286L10.2499 6.51887C8.34908 7.06488 7.47258 7.8944 7.47258 7.8944C7.47258 7.8944 7.70491 7.76839 8.09564 7.58989C9.22558 7.09638 10.1232 6.95988 10.4928 6.92838C10.5562 6.91788 10.609 6.90737 10.6723 6.90737C11.3165 6.82337 12.0452 6.80237 12.8055 6.88637C13.8087 7.00188 14.8859 7.29588 15.9841 7.8944C15.9841 7.8944 15.1499 7.10688 13.3546 6.56087L13.5025 6.39286C13.5025 6.39286 14.9492 6.36136 16.4699 7.49539C16.4699 7.49539 17.9906 10.2359 17.9906 13.617C17.9906 13.617 17.093 15.1396 14.7591 15.2131Z",
                fill: "#FEFEFF",
              }),
            ],
          }),
        m = ({ ...e }) =>
          (0, n.jsxs)(r.J, {
            viewBox: "0 0 24 24",
            fill: "none",
            ...e,
            children: [
              (0, n.jsx)("g", {
                clipPath: "url(#clip0_14230_11024)",
                children: (0, n.jsx)("path", {
                  d: "M10.573 13.5844L4.98887 20.25H6.31212L11.1608 14.4623L15.0334 20.25H19.5L13.6438 11.498L19.5 4.50809H18.1767L13.0564 10.6201L8.9666 4.50809H4.5L10.5733 13.5844H10.573ZM12.3854 11.4209L12.9788 12.2924L17.6999 19.227H15.6673L11.8573 13.6306L11.264 12.7591L6.3115 5.48454H8.34405L12.3854 11.4206V11.4209Z",
                  fill: "white",
                }),
              }),
              (0, n.jsx)("defs", {
                children: (0, n.jsx)("clipPath", {
                  id: "clip0_14230_11024",
                  children: (0, n.jsx)("rect", {
                    width: "15",
                    height: "15.75",
                    fill: "white",
                    transform: "matrix(-1 0 0 -1 19.5 20.25)",
                  }),
                }),
              }),
            ],
          }),
        g = ({ ...e }) =>
          (0, n.jsxs)(r.J, {
            viewBox: "0 0 24 24",
            fill: "none",
            ...e,
            children: [
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.0002 2.25049C6.61603 2.25049 2.25058 6.72675 2.25058 12.2476C2.25058 16.6642 5.04356 20.4121 8.91822 21.7331C9.40578 21.8258 9.58498 21.5163 9.58498 21.2514C9.58498 21.013 9.57529 20.2251 9.57207 19.3907C6.85819 19.995 6.28668 18.2121 6.28668 18.2121C5.84271 17.0566 5.20501 16.7487 5.20501 16.7487C4.32029 16.1279 5.2712 16.1411 5.2712 16.1411C6.24955 16.2123 6.76617 17.1708 6.76617 17.1708C7.63635 18.6988 9.04737 18.2568 9.60274 18.0018C9.68992 17.3562 9.94339 16.9142 10.2211 16.6642C8.05611 16.411 5.77975 15.5535 5.77975 11.7245C5.77975 10.6335 6.16075 9.74127 6.78393 9.04103C6.68222 8.7894 6.34964 7.77297 6.87757 6.39566C6.87757 6.39566 7.69609 6.12749 9.55915 7.42037C10.3373 7.19854 11.1704 7.08763 12.0002 7.08432C12.8284 7.08763 13.6631 7.19854 14.4428 7.42037C16.3043 6.12749 17.1212 6.39566 17.1212 6.39566C17.6523 7.77297 17.3181 8.7894 17.2164 9.04103C17.8412 9.74127 18.219 10.6335 18.219 11.7245C18.219 15.5634 15.9378 16.4093 13.768 16.6576C14.1183 16.9672 14.4299 17.5764 14.4299 18.5084C14.4299 19.846 14.4186 20.922 14.4186 21.2514C14.4186 21.5179 14.5946 21.8292 15.0886 21.7315C18.96 20.4088 21.7498 16.6626 21.7498 12.2476C21.7498 6.72675 17.3843 2.25049 12.0002 2.25049Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M5.94295 16.6031C5.92196 16.6527 5.84447 16.6676 5.77505 16.6328C5.70401 16.5997 5.66526 16.5319 5.68787 16.4822C5.70885 16.4309 5.78473 16.4176 5.85577 16.4508C5.9268 16.4855 5.96716 16.5534 5.94295 16.6031Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M6.33886 17.055C6.29204 17.0997 6.20163 17.0782 6.14028 17.0086C6.0757 16.9391 6.0644 16.8464 6.11122 16.8017C6.15965 16.757 6.24683 16.7785 6.31141 16.8481C6.37437 16.9176 6.38729 17.0103 6.33886 17.055Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M6.72318 17.6313C6.66345 17.6743 6.56497 17.6346 6.50523 17.5452C6.4455 17.4558 6.4455 17.3498 6.50685 17.3068C6.56658 17.2638 6.66345 17.3018 6.7248 17.3912C6.78453 17.4806 6.78453 17.5882 6.72318 17.6313Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M7.24861 18.1876C7.19533 18.2488 7.08071 18.2323 6.99837 18.1495C6.91281 18.0684 6.8902 17.9542 6.94348 17.8946C6.99837 17.8333 7.11138 17.8515 7.19533 17.9326C7.27928 18.0121 7.30512 18.128 7.24861 18.1876Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M7.97585 18.5102C7.95164 18.588 7.84185 18.6244 7.73207 18.5913C7.62229 18.5565 7.54964 18.4655 7.57224 18.386C7.59484 18.3066 7.70463 18.2702 7.81602 18.3049C7.92742 18.3397 7.99846 18.4307 7.97585 18.5102Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M8.77338 18.5695C8.77661 18.6523 8.68297 18.7202 8.56673 18.7218C8.45049 18.7251 8.35524 18.6573 8.35524 18.5762C8.35524 18.4934 8.44726 18.4255 8.5635 18.4239C8.67813 18.4222 8.77338 18.4884 8.77338 18.5695Z",
                fill: "#FEFEFF",
              }),
              (0, n.jsx)("path", {
                d: "M9.51542 18.4407C9.52995 18.5218 9.44923 18.6029 9.33299 18.6261C9.21998 18.6476 9.11504 18.598 9.10051 18.5185C9.08598 18.4357 9.16832 18.353 9.28133 18.3314C9.39757 18.3099 9.50089 18.3596 9.51542 18.4407Z",
                fill: "#FEFEFF",
              }),
            ],
          }),
        f = ({ ...e }) =>
          (0, n.jsxs)(r.J, {
            viewBox: "0 0 24 24",
            fill: "none",
            ...e,
            children: [
              (0, n.jsx)("g", {
                clipPath: "url(#clip0_14230_11037)",
                children: (0, n.jsx)("path", {
                  d: "M6.52381 7.30209C7.07677 9.37496 7.54202 11.0837 7.55756 11.0993C7.57316 11.1148 7.90732 9.92686 8.30024 8.45929L9.32137 4.64551L9.62823 3.5H12.0094C13.3191 3.5 14.3906 3.51182 14.3906 3.52623C14.3906 3.54974 16.36 10.9554 16.4034 11.0949C16.4133 11.1268 16.8207 9.64756 17.3088 7.80784C17.7969 5.96812 18.2549 4.24627 18.3265 3.98145L18.4566 3.5H21.1385C22.6135 3.5 23.8214 3.52245 23.8226 3.5498C23.8239 3.57716 22.7107 7.40183 21.349 12.0491L18.873 20.4985L16.5341 20.4993L14.1951 20.5L14.0945 20.1514C14.0392 19.9597 13.5453 18.2065 12.9969 16.2554C12.4485 14.3044 11.9924 12.7011 11.9833 12.6925C11.9742 12.6839 11.4737 14.4369 10.8711 16.5881L9.77539 20.4994L7.43902 20.4997C5.27152 20.5 5.10012 20.4916 5.06752 20.3838C5.04813 20.3199 3.93934 16.5472 2.60352 12C1.26769 7.45283 0.15877 3.67976 0.139312 3.61548C0.105777 3.50491 0.252535 3.49947 2.8111 3.51587L5.51842 3.5332L6.52381 7.30209Z",
                  fill: "white",
                }),
              }),
              (0, n.jsx)("defs", {
                children: (0, n.jsx)("clipPath", {
                  id: "clip0_14230_11037",
                  children: (0, n.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        y = ({ ...e }) =>
          (0, n.jsx)(r.J, {
            viewBox: "0 0 24 24",
            fill: "none",
            ...e,
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z",
              fill: "white",
            }),
          }),
        j = ({ ...e }) =>
          (0, n.jsxs)(r.J, {
            width: "15",
            height: "14",
            viewBox: "0 0 15 14",
            fill: "none",
            ...e,
            children: [
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.75 3.30322C5.93307 3.30322 6.09678 3.41547 6.16031 3.58454L7.03581 5.91453L9.40183 6.7767C9.57352 6.83926 9.6875 7.00048 9.6875 7.18076C9.6875 7.36104 9.57352 7.52226 9.40183 7.58482L7.03581 8.44699L6.16031 10.777C6.09678 10.9461 5.93307 11.0583 5.75 11.0583C5.56693 11.0583 5.40322 10.9461 5.33969 10.777L4.46419 8.44699L2.09817 7.58482C1.92648 7.52226 1.8125 7.36104 1.8125 7.18076C1.8125 7.00048 1.92648 6.83926 2.09817 6.7767L4.46419 5.91453L5.33969 3.58454C5.40322 3.41547 5.56693 3.30322 5.75 3.30322ZM5.75 4.97554L5.21499 6.39936C5.17068 6.51728 5.07626 6.61026 4.95651 6.6539L3.51067 7.18076L4.95651 7.70762C5.07626 7.75126 5.17068 7.84424 5.21499 7.96217L5.75 9.38598L6.28501 7.96217C6.32932 7.84424 6.42374 7.75126 6.54349 7.70762L7.98933 7.18076L6.54349 6.6539C6.42374 6.61026 6.32932 6.51728 6.28501 6.39936L5.75 4.97554Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M5.21499 6.39936L5.75 4.97554L6.28501 6.39936C6.32932 6.51728 6.42374 6.61026 6.54349 6.6539L7.98933 7.18076L6.54349 7.70762C6.42374 7.75126 6.32932 7.84424 6.28501 7.96217L5.75 9.38598L5.21499 7.96217C5.17068 7.84424 5.07626 7.75126 4.95651 7.70762L3.51067 7.18076L4.95651 6.6539C5.07626 6.61026 5.17068 6.51728 5.21499 6.39936Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.4103 2.14851C11.3468 1.97943 11.1831 1.86719 11 1.86719C10.8169 1.86719 10.6532 1.97943 10.5897 2.14851L10.1868 3.2206L9.09817 3.61731C8.92648 3.67988 8.8125 3.8411 8.8125 4.02138C8.8125 4.20166 8.92648 4.36287 9.09817 4.42544L10.1868 4.82215L10.5897 5.89424C10.6532 6.06332 10.8169 6.17556 11 6.17556C11.1831 6.17556 11.3468 6.06332 11.4103 5.89424L11.8132 4.82215L12.9018 4.42544C13.0735 4.36287 13.1875 4.20166 13.1875 4.02138C13.1875 3.8411 13.0735 3.67988 12.9018 3.61731L11.8132 3.2206L11.4103 2.14851Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.4103 8.46736C11.3468 8.29828 11.1831 8.18604 11 8.18604C10.8169 8.18604 10.6532 8.29828 10.5897 8.46736L10.1868 9.53945L9.09817 9.93616C8.92648 9.99872 8.8125 10.1599 8.8125 10.3402C8.8125 10.5205 8.92648 10.6817 9.09817 10.7443L10.1868 11.141L10.5897 12.2131C10.6532 12.3822 10.8169 12.4944 11 12.4944C11.1831 12.4944 11.3468 12.3822 11.4103 12.2131L11.8132 11.141L12.9018 10.7443C13.0735 10.6817 13.1875 10.5205 13.1875 10.3402C13.1875 10.1599 13.0735 9.99872 12.9018 9.93616L11.8132 9.53945L11.4103 8.46736Z",
                fill: "white",
              }),
            ],
          }),
        b = ({ ...e }) =>
          (0, n.jsxs)(r.J, {
            width: "178px",
            height: "178px",
            viewBox: "0 0 178 178",
            fill: "none",
            ...e,
            children: [
              (0, n.jsx)("circle", {
                cx: "89.0198",
                cy: "88.4095",
                r: "88.305",
                fill: "#06061B",
              }),
              (0, n.jsx)("path", {
                d: "M68.0815 75.158C67.5149 74.5153 66.8174 74.1932 65.9874 74.1932H49.0126C48.8618 74.1932 48.7384 74.1459 48.6455 74.0512C48.5511 73.9581 48.5039 73.8528 48.5039 73.7398V62.3958C48.5039 62.2828 48.5511 62.179 48.6455 62.0844C48.7384 61.9897 48.8618 61.9424 49.0126 61.9424H66.9499C71.4761 61.9424 75.381 63.7773 78.6629 67.4442L83.0201 72.7185L74.5327 82.9848L68.0815 75.158ZM99.4299 67.3877C102.712 63.7575 106.635 61.9424 111.199 61.9424H129.08C129.231 61.9424 129.344 61.9805 129.42 62.0553C129.495 62.1317 129.533 62.2446 129.533 62.3958V73.7398C129.533 73.8528 129.495 73.9581 129.42 74.0512C129.344 74.1459 129.231 74.1932 129.08 74.1932H112.105C111.275 74.1932 110.578 74.5153 110.011 75.158L97.5064 90.2452L110.068 105.445C110.634 106.051 111.312 106.354 112.105 106.354H129.08C129.231 106.354 129.344 106.401 129.42 106.496C129.495 106.59 129.533 106.714 129.533 106.864V118.208C129.533 118.321 129.495 118.426 129.42 118.519C129.344 118.614 129.231 118.661 129.08 118.661H111.199C106.635 118.661 102.73 116.828 99.4863 113.159L89.0754 100.568L78.6629 113.159C75.381 116.828 71.4578 118.661 66.8936 118.661H49.0126C48.8618 118.661 48.7476 118.614 48.673 118.519C48.5968 118.424 48.5603 118.302 48.5603 118.15V106.806C48.5603 106.693 48.5968 106.589 48.673 106.494C48.7476 106.399 48.8618 106.352 49.0126 106.352H65.9874C66.7793 106.352 67.4768 106.032 68.0815 105.387L80.3595 90.5276L99.4299 67.3877Z",
                fill: "#00D1FF",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.62306 101.122C1.02459 96.9706 0.714844 92.7262 0.714844 88.4095C0.714844 85.5803 0.84789 82.7823 1.10807 80.0212L11.5198 67.3877C14.8017 63.7575 18.7248 61.9424 23.2891 61.9424H41.1701C41.3209 61.9424 41.4336 61.9805 41.5097 62.0553C41.5844 62.1317 41.6224 62.2446 41.6224 62.3958V73.7398C41.6224 73.8528 41.5844 73.9581 41.5097 74.0512C41.4336 74.1459 41.3209 74.1932 41.1701 74.1932H24.1953C23.3653 74.1932 22.6678 74.5153 22.1012 75.158L9.59627 90.2452L22.1576 105.445C22.7241 106.051 23.4018 106.354 24.1953 106.354H41.1701C41.3209 106.354 41.4336 106.401 41.5097 106.496C41.5844 106.59 41.6224 106.714 41.6224 106.864V118.208C41.6224 118.321 41.5844 118.426 41.5097 118.519C41.4336 118.614 41.3209 118.661 41.1701 118.661H23.2891C18.7248 118.661 14.82 116.828 11.5761 113.159L1.62306 101.122Z",
                fill: "#00D1FF",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M176.393 101.284C177.007 97.0816 177.325 92.7827 177.325 88.4095C177.325 85.5791 177.192 82.7799 176.931 80.0176L168.27 90.5276L155.992 105.387C155.387 106.032 154.689 106.352 153.898 106.352H136.923C136.772 106.352 136.658 106.399 136.583 106.494C136.507 106.589 136.47 106.693 136.47 106.806V118.15C136.47 118.302 136.507 118.424 136.583 118.519C136.658 118.614 136.772 118.661 136.923 118.661H154.804C159.368 118.661 163.291 116.828 166.573 113.159L176.393 101.284ZM153.898 74.1932C154.728 74.1932 155.425 74.5153 155.992 75.158L162.443 82.9848L170.93 72.7185L166.573 67.4442C163.291 63.7773 159.386 61.9424 154.86 61.9424H136.923C136.772 61.9424 136.649 61.9897 136.556 62.0844C136.461 62.179 136.414 62.2828 136.414 62.3958V73.7398C136.414 73.8528 136.461 73.9581 136.556 74.0512C136.649 74.1459 136.772 74.1932 136.923 74.1932H153.898Z",
                fill: "#00D1FF",
              }),
            ],
          });
    },
    13797: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => o, T: () => s });
      var r = a(79929),
        n = a(2784),
        i = a(52322);
      const o = (0, n.createContext)({
          collateralChange: (0, r.wei)(0),
          debtChange: (0, r.wei)(0),
          withdrawAmount: (0, r.wei)(0),
          setDebtChange: () => {},
          setCollateralChange: () => {},
          setWithdrawAmount: () => {},
        }),
        s = ({ children: e }) => {
          const [t, a] = (0, n.useState)((0, r.wei)(0)),
            [s, l] = (0, n.useState)((0, r.wei)(0)),
            [c, d] = (0, n.useState)((0, r.wei)(0));
          return (0, i.jsx)(o.Provider, {
            value: {
              debtChange: t,
              setDebtChange: a,
              collateralChange: s,
              setCollateralChange: l,
              withdrawAmount: c,
              setWithdrawAmount: d,
            },
            children: e,
          });
        };
    },
    59391: (e, t, a) => {
      "use strict";
      a.d(t, { Zj: () => n });
      a(79929);
      var r = a(42219);
      const n = (e, t) => (e.eq(0) || t.eq(0) ? r.GH : t.div(e));
    },
    42219: (e, t, a) => {
      "use strict";
      a.d(t, {
        yq: () => u,
        os: () => d,
        br: () => c,
        lm: () => h,
        dA: () => o,
        ii: () => l,
        sO: () => m,
        GH: () => s,
        Ko: () => p,
        Q4: () => x,
        kw: () => g,
        DM: () => f,
      });
      var r = a(90711),
        n = a(79929),
        i = a.n(n);
      const o = { SHOW_TESTNETS: "SHOW_TESTNETS" },
        s = new (i())(0),
        l = new (i())(1),
        c = (new (i())(r.Bz), 9),
        d = 1.5,
        u = 3e5,
        h = "8678fe160b1f4d45ad3f3f71502fc57b",
        x = (e = "optimism-mainnet") => {
          switch (e) {
            case "mainnet":
              return "https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-mainnet/api";
            case "sepolia":
              return "https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-sepolia/api";
            case "optimism-mainnet":
              return "https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-optimism-mainnet/api";
            case "arbitrum":
              return "https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-arbitrum-mainnet/api";
            case "base-sepolia":
              return "https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-base-sepolia-andromeda/api";
            case "base":
              return "https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-base-mainnet-andromeda/api";
            default:
              return `https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-${e}/api`;
          }
        },
        p = (e = 8453) => {
          switch (e) {
            case 1:
              return "https://api.synthetix.io/v3/mainnet/sc-pool-apy-all";
            case 8453:
            default:
              return "https://api.synthetix.io/v3/base/sc-pool-apy-all";
            case 42161:
              return "https://api.synthetix.io/v3/arbitrum/sc-pool-apy-all";
          }
        },
        m = { TERMS_CONDITIONS_ACCEPTED: "TERMS_CONDITIONS_ACCEPTED" },
        g =
          "https://hermes-mainnet.rpc.extrnode.com/9b85d7db-f562-48e2-ab56-79c01f212582",
        f =
          "https://hermes-mainnet.rpc.extrnode.com/9b85d7db-f562-48e2-ab56-79c01f212582";
    },
    42097: (e, t, a) => {
      "use strict";
      async function r(e, t) {
        if (!t) throw new Error("Missing preset");
        const r = `${Number(e).toFixed(0)}-${t}`;
        switch (r) {
          case "1-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(9393).then(a.t.bind(a, 29393, 19)),
              a.e(7278).then(a.t.bind(a, 77278, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          case "11155111-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(3463).then(a.t.bind(a, 33463, 19)),
              a.e(8432).then(a.t.bind(a, 8432, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          case "10-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(2320).then(a.t.bind(a, 62320, 19)),
              a.e(9530).then(a.t.bind(a, 29530, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          case "8453-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6244).then(a.t.bind(a, 56244, 19)),
              a.e(4438).then(a.t.bind(a, 24438, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          case "84532-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6804).then(a.t.bind(a, 96804, 19)),
              a.e(1588).then(a.t.bind(a, 11588, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          case "42161-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(8317).then(a.t.bind(a, 98317, 19)),
              a.e(1567).then(a.t.bind(a, 61567, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          case "421614-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(5783).then(a.t.bind(a, 15783, 19)),
              a.e(5523).then(a.t.bind(a, 35523, 19)),
            ]);
            return { address: e.contracts.AccountProxy, abi: t };
          }
          default:
            throw new Error(`Unsupported deployment ${r} for AccountProxy`);
        }
      }
      a.d(t, { w: () => r });
    },
    32152: (e, t, a) => {
      "use strict";
      async function r(e, t) {
        if (!t) throw new Error("Missing preset");
        const r = `${Number(e).toFixed(0)}-${t}`;
        switch (r) {
          case "1-main": {
            const [{ default: e }] = await Promise.all([
              a.e(4226).then(a.t.bind(a, 74226, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          case "11155111-main": {
            const [{ default: e }] = await Promise.all([
              a.e(4317).then(a.t.bind(a, 74317, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          case "10-main": {
            const [{ default: e }] = await Promise.all([
              a.e(4185).then(a.t.bind(a, 94185, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          case "8453-andromeda": {
            const [{ default: e }] = await Promise.all([
              a.e(733).then(a.t.bind(a, 80733, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          case "84532-andromeda": {
            const [{ default: e }] = await Promise.all([
              a.e(6422).then(a.t.bind(a, 86422, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          case "42161-main": {
            const [{ default: e }] = await Promise.all([
              a.e(9118).then(a.t.bind(a, 29118, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          case "421614-main": {
            const [{ default: e }] = await Promise.all([
              a.e(2366).then(a.t.bind(a, 2366, 19)),
            ]);
            return { address: void 0, abi: e };
          }
          default:
            throw new Error(`Unsupported deployment ${r} for AllErrors`);
        }
      }
      a.d(t, { a: () => r });
    },
    6702: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => n });
      const r = [
        "error NotEnoughAllowance(address walletAddress, address tokenAddress, uint256 requiredAllowance, uint256 availableAllowance)",
        "error NotEnoughBalance(address walletAddress, address tokenAddress, uint256 requiredAmount, uint256 availableAmount)",
        "function closePosition(address coreProxyAddress, address accountProxyAddress, uint128 accountId, uint128 poolId, address collateralType)",
      ];
      async function n(e, t) {
        const a = `${Number(e).toFixed(0)}-${t}`;
        switch (a) {
          case "1-main":
            return {
              address: "0x800b12d24ebb639bce7280861b05149f0d60f99e",
              abi: r,
            };
          case "11155111-main":
            return {
              address: "0xcc998ef6d1923f206be1fed700eb1afebd69fbce",
              abi: r,
            };
          case "42161-main":
            return {
              address: "0x28551921507790D91260d8eD08E3D688d525A752",
              abi: r,
            };
          case "421614-main":
            return {
              address: "0x0482BD380d46bCC924f3DD29307ECdAad8fF2a0C",
              abi: r,
            };
          default:
            throw new Error(`Unsupported deployment ${a} for ClosePosition`);
        }
      }
    },
    93976: (e, t, a) => {
      "use strict";
      async function r(e, t) {
        if (!t) throw new Error("Missing preset");
        const r = `${Number(e).toFixed(0)}-${t}`;
        switch (r) {
          case "1-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(9393).then(a.t.bind(a, 29393, 19)),
              a.e(7290).then(a.t.bind(a, 47290, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          case "11155111-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(3463).then(a.t.bind(a, 33463, 19)),
              a.e(8231).then(a.t.bind(a, 48231, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          case "10-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(2320).then(a.t.bind(a, 62320, 19)),
              a.e(5232).then(a.t.bind(a, 55232, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          case "8453-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6244).then(a.t.bind(a, 56244, 19)),
              a.e(9276).then(a.t.bind(a, 9276, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          case "84532-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6804).then(a.t.bind(a, 96804, 19)),
              a.e(5585).then(a.t.bind(a, 64466, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          case "42161-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(8317).then(a.t.bind(a, 98317, 19)),
              a.e(8488).then(a.t.bind(a, 18488, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          case "421614-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(5783).then(a.t.bind(a, 15783, 19)),
              a.e(9116).then(a.t.bind(a, 19116, 19)),
            ]);
            return { address: e.contracts.CoreProxy, abi: t };
          }
          default:
            throw new Error(`Unsupported deployment ${r} for CoreProxy`);
        }
      }
      a.d(t, { k: () => r });
    },
    16658: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => n });
      const r = [
        "function aggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes[] returnData)",
        "function blockAndAggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
        "function getBasefee() view returns (uint256 basefee)",
        "function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)",
        "function getBlockNumber() view returns (uint256 blockNumber)",
        "function getChainId() view returns (uint256 chainid)",
        "function getCurrentBlockCoinbase() view returns (address coinbase)",
        "function getCurrentBlockDifficulty() view returns (uint256 difficulty)",
        "function getCurrentBlockGasLimit() view returns (uint256 gaslimit)",
        "function getCurrentBlockTimestamp() view returns (uint256 timestamp)",
        "function getEthBalance(address addr) view returns (uint256 balance)",
        "function getLastBlockHash() view returns (bytes32 blockHash)",
        "function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
        "function tryBlockAndAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
        "function aggregate3(tuple(address target, bool allowFailure, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
        "function aggregate3Value(tuple(address target, bool allowFailure, uint256 value, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
      ];
      async function n(e, t) {
        const n = `${Number(e).toFixed(0)}-${t}`;
        switch (n) {
          case "1-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(9393).then(a.t.bind(a, 29393, 19)),
              a.e(8670).then(a.t.bind(a, 68670, 19)),
            ]);
            return { address: e.contracts.TrustedMulticallForwarder, abi: t };
          }
          case "11155111-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(3463).then(a.t.bind(a, 33463, 19)),
              a.e(9926).then(a.t.bind(a, 49926, 19)),
            ]);
            return { address: e.contracts.TrustedMulticallForwarder, abi: t };
          }
          case "10-main": {
            const { optimism: e } = await Promise.all([
              a.e(4691),
              a.e(3495),
              a.e(470),
            ]).then(a.bind(a, 40470));
            return { address: e.contracts.multicall3.address, abi: r };
          }
          case "8453-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6244).then(a.t.bind(a, 56244, 19)),
              a.e(4145).then(a.t.bind(a, 24145, 19)),
            ]);
            return { address: e.contracts.TrustedMulticallForwarder, abi: t };
          }
          case "84532-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6804).then(a.t.bind(a, 96804, 19)),
              a.e(1841).then(a.t.bind(a, 31841, 19)),
            ]);
            return { address: e.contracts.TrustedMulticallForwarder, abi: t };
          }
          case "42161-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(8317).then(a.t.bind(a, 98317, 19)),
              a.e(2164).then(a.t.bind(a, 42164, 19)),
            ]);
            return { address: e.contracts.TrustedMulticallForwarder, abi: t };
          }
          case "421614-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(5783).then(a.t.bind(a, 15783, 19)),
              a.e(7491).then(a.t.bind(a, 67491, 19)),
            ]);
            return { address: e.contracts.TrustedMulticallForwarder, abi: t };
          }
          default:
            throw new Error(`Unsupported deployment ${n} for Multicall3`);
        }
      }
    },
    77693: (e, t, a) => {
      "use strict";
      async function r(e, t) {
        if (!t) throw new Error("Missing preset");
        const r = `${Number(e).toFixed(0)}-${t}`;
        switch (r) {
          case "8453-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6244).then(a.t.bind(a, 56244, 19)),
              a.e(1350).then(a.t.bind(a, 21350, 19)),
            ]);
            return { address: e.contracts.PythERC7412Wrapper, abi: t };
          }
          case "84532-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6804).then(a.t.bind(a, 96804, 19)),
              a.e(6955).then(a.t.bind(a, 36955, 19)),
            ]);
            return { address: e.contracts.PythERC7412Wrapper, abi: t };
          }
          case "11155111-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(3463).then(a.t.bind(a, 33463, 19)),
              a.e(440).then(a.t.bind(a, 70440, 19)),
            ]);
            return { address: e.contracts.PythERC7412Wrapper, abi: t };
          }
          case "42161-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(8317).then(a.t.bind(a, 98317, 19)),
              a.e(5658).then(a.t.bind(a, 75658, 19)),
            ]);
            return { address: e.contracts.PythERC7412Wrapper, abi: t };
          }
          case "421614-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(5783).then(a.t.bind(a, 15783, 19)),
              a.e(2012).then(a.t.bind(a, 82012, 19)),
            ]);
            return { address: e.contracts.PythERC7412Wrapper, abi: t };
          }
          default:
            throw new Error(
              `Unsupported deployment ${r} for PythERC7412Wrapper`
            );
        }
      }
      a.d(t, { O: () => r });
    },
    61269: (e, t, a) => {
      "use strict";
      async function r(e, t) {
        if (!t) throw new Error("Missing preset");
        const r = `${Number(e).toFixed(0)}-${t}`;
        switch (r) {
          case "1-main": {
            const [{ default: e }] = await Promise.all([
              a.e(9264).then(a.t.bind(a, 79264, 19)),
            ]);
            return e;
          }
          case "11155111-main": {
            const [{ default: e }] = await Promise.all([
              a.e(1803).then(a.t.bind(a, 61803, 19)),
            ]);
            return e;
          }
          case "10-main": {
            const [{ default: e }] = await Promise.all([
              a.e(7721).then(a.t.bind(a, 27721, 19)),
            ]);
            return e;
          }
          case "8453-andromeda": {
            const [{ default: e }] = await Promise.all([
              a.e(5510).then(a.t.bind(a, 95510, 19)),
            ]);
            return e;
          }
          case "84532-andromeda": {
            const [{ default: e }] = await Promise.all([
              a.e(7984).then(a.t.bind(a, 97984, 19)),
            ]);
            return e;
          }
          case "42161-main": {
            const [{ default: e }] = await Promise.all([
              a.e(3741).then(a.t.bind(a, 63741, 19)),
            ]);
            return e;
          }
          case "421614-main": {
            const [{ default: e }] = await Promise.all([
              a.e(1532).then(a.t.bind(a, 41532, 19)),
            ]);
            return e;
          }
          default:
            throw new Error(`Unsupported deployment ${r} for pythFeeds`);
        }
      }
      a.d(t, { p: () => r });
    },
    89709: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => n });
      const r = ["function updatePriceFeeds(bytes[] updateData) payable"];
      async function n(e, t) {
        if (!t) throw new Error("Missing preset");
        const a = `${Number(e).toFixed(0)}-${t}`;
        switch (a) {
          case "1-main":
            return {
              address: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
              abi: r,
            };
          case "11155111-main":
            return {
              address: "0xDd24F84d36BF92C65F92307595335bdFab5Bbd21",
              abi: r,
            };
          case "10-main":
          case "42161-main":
            return {
              address: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
              abi: r,
            };
          case "8453-andromeda":
            return {
              address: "0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a",
              abi: r,
            };
          case "84532-andromeda":
            return {
              address: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
              abi: r,
            };
          case "421614-main":
            return {
              address: "0x4374e5a8b9C22271E9EB878A2AA31DE97DF15DAF",
              abi: r,
            };
          default:
            throw new Error(`Unsupported deployment ${a} for Extras`);
        }
      }
    },
    70011: (e, t, a) => {
      "use strict";
      async function r(e, t) {
        if (!t) throw new Error("Missing preset");
        const r = `${Number(e).toFixed(0)}-${t}`;
        switch (r) {
          case "1-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(9393).then(a.t.bind(a, 29393, 19)),
              a.e(8634).then(a.t.bind(a, 38634, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          case "11155111-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(3463).then(a.t.bind(a, 33463, 19)),
              a.e(8538).then(a.t.bind(a, 78538, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          case "10-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(2320).then(a.t.bind(a, 62320, 19)),
              a.e(6137).then(a.t.bind(a, 46137, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          case "8453-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6244).then(a.t.bind(a, 56244, 19)),
              a.e(1020).then(a.t.bind(a, 71020, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          case "84532-andromeda": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(6804).then(a.t.bind(a, 96804, 19)),
              a.e(2387).then(a.t.bind(a, 42387, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          case "42161-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(8317).then(a.t.bind(a, 98317, 19)),
              a.e(2992).then(a.t.bind(a, 12992, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          case "421614-main": {
            const [{ default: e }, { default: t }] = await Promise.all([
              a.e(5783).then(a.t.bind(a, 15783, 19)),
              a.e(6864).then(a.t.bind(a, 36864, 19)),
            ]);
            return { address: e.contracts.USDProxy, abi: t };
          }
          default:
            throw new Error(`Unsupported deployment ${r} for USDProxy`);
        }
      }
      a.d(t, { K: () => r });
    },
    10896: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => o });
      var r = a(6702),
        n = a(908),
        i = a(28145);
      function o(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t;
        return (0, i.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "ClosePosition"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw "OMFG";
            return (0, r.o)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
    },
    22668: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => o });
      var r = a(93976),
        n = a(908),
        i = a(28145);
      function o(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t;
        return (0, i.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "CoreProxy"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw "OMFG";
            return (0, r.k)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
    },
    98966: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => o });
      const r = [
        "function depositDebtToRepay(address synthetixCore, address spotMarket, uint128 accountId, uint128 poolId, address collateralType, uint128 spotMarketId)",
      ];
      var n = a(908),
        i = a(28145);
      function o(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t;
        return (0, i.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "DebtRepayer"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw new Error("OMFG");
            return (async function (e, t) {
              const a = `${Number(e).toFixed(0)}-${t}`;
              switch (a) {
                case "8453-andromeda":
                  return {
                    address: "0xBD8004ea5c73E33d405d35d594221Efc733F7E37",
                    abi: r,
                  };
                case "84532-andromeda":
                  return {
                    address: "0x0d08ff9e0ceddf81a85bc160d5d378eea7a1e200",
                    abi: r,
                  };
                default:
                  throw new Error(
                    `Unsupported deployment ${a} for DebtRepayer`
                  );
              }
            })(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
    },
    20870: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => i });
      var r = a(908),
        n = a(28145);
      function i(e) {
        const { network: t } = (0, r.LN)(),
          i = e || t;
        return (0, n.useQuery)({
          queryKey: [`${i?.id}-${i?.preset}`, "SpotMarketProxy"],
          enabled: Boolean(i),
          queryFn: async function () {
            if (!i) throw new Error("OMFG");
            return (async function (e, t) {
              if (!t) throw new Error("Missing preset");
              const r = `${Number(e).toFixed(0)}-${t}`;
              switch (r) {
                case "1-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(9393).then(a.t.bind(a, 29393, 19)),
                    a.e(965).then(a.t.bind(a, 30965, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                case "11155111-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(3463).then(a.t.bind(a, 33463, 19)),
                    a.e(9273).then(a.t.bind(a, 49273, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                case "10-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(2320).then(a.t.bind(a, 62320, 19)),
                    a.e(3581).then(a.t.bind(a, 53581, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                case "8453-andromeda": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(6244).then(a.t.bind(a, 56244, 19)),
                    a.e(3688).then(a.t.bind(a, 13688, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                case "84532-andromeda": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(6804).then(a.t.bind(a, 96804, 19)),
                    a.e(7711).then(a.t.bind(a, 57711, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                case "42161-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(8317).then(a.t.bind(a, 98317, 19)),
                    a.e(5996).then(a.t.bind(a, 85996, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                case "421614-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(5783).then(a.t.bind(a, 15783, 19)),
                    a.e(4927).then(a.t.bind(a, 4927, 19)),
                  ]);
                  return { address: e.contracts.SpotMarketProxy, abi: t };
                }
                default:
                  throw new Error(
                    `Unsupported deployment ${r} for SpotMarketProxy`
                  );
              }
            })(i.id, i.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
    },
    89990: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => i });
      var r = a(908),
        n = a(28145);
      function i(e) {
        const { network: t } = (0, r.LN)(),
          i = e || t;
        return (0, n.useQuery)({
          queryKey: [`${i?.id}-${i?.preset}`, "SystemToken"],
          enabled: Boolean(i),
          queryFn: async function () {
            if (!i) throw new Error("OMFG");
            return (async function (e, t) {
              if (!t) throw new Error("Missing preset");
              const r = `${Number(e).toFixed(0)}-${t}`;
              switch (r) {
                case "1-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(5876).then(a.t.bind(a, 55876, 19)),
                  ]);
                  return e;
                }
                case "11155111-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(4299).then(a.t.bind(a, 94299, 19)),
                  ]);
                  return e;
                }
                case "10-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(3206).then(a.t.bind(a, 13206, 19)),
                  ]);
                  return e;
                }
                case "8453-andromeda": {
                  const [{ default: e }] = await Promise.all([
                    a.e(9858).then(a.t.bind(a, 29858, 19)),
                  ]);
                  return e;
                }
                case "84532-andromeda": {
                  const [{ default: e }] = await Promise.all([
                    a.e(2518).then(a.t.bind(a, 62518, 19)),
                  ]);
                  return e;
                }
                case "42161-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(7379).then(a.t.bind(a, 37379, 19)),
                  ]);
                  return e;
                }
                case "421614-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(7351).then(a.t.bind(a, 27351, 19)),
                  ]);
                  return e;
                }
                default:
                  throw new Error(
                    `Unsupported deployment ${r} for SystemToken`
                  );
              }
            })(i.id, i.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
    },
    4902: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => o });
      var r = a(70011),
        n = a(908),
        i = a(28145);
      function o(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t;
        return (0, i.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "USDProxy"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw new Error("OMFG");
            return (0, r.K)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
    },
    96596: (e, t, a) => {
      "use strict";
      a.d(t, { Aq: () => o, vz: () => n, i_: () => i });
      var r = a(79929);
      const n = (e, t = 18) => (0, r.wei)(e, t).toBN(),
        i = (e, t = 6, a = 4) =>
          e.length <= t + a
            ? e
            : `${e.substring(0, t)}...${e.substring(e.length - a)}`;
      function o(e, t, a = 2) {
        try {
          const r = e.toString(),
            n = e.toNumber(),
            i = n < 0 ? -n - Math.floor(-n) : n - Math.floor(n),
            o = (0 !== i ? -Math.floor(Math.log10(i) + 1) : 0) + a;
          return isNaN(n)
            ? r
            : n.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: o,
                ...t,
              });
        } catch (t) {
          return e + "";
        }
      }
    },
    77528: (e, t, a) => {
      "use strict";
      a.d(t, { $l: () => n, Ds: () => i, Yz: () => r });
      const r = (e, t) => (e?.toString(), "andromeda" === t);
      function n(e) {
        switch (e?.toLowerCase()) {
          case "usdc":
          case "susdc":
          default:
            return i;
          case "statausdc":
          case "sstatausdc":
            return o;
        }
      }
      const i = "1",
        o = "3";
    },
    63201: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => n });
      var r = a(1415);
      function n(e) {
        return e.some((e) => void 0 === e)
          ? "~"
          : (0, r.x)(e.map((e) => e?.address || "").join());
      }
    },
    37330: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => r });
      const r = (e) => null != e;
    },
    1415: (e, t, a) => {
      "use strict";
      function r(e) {
        return (e || "").split("").reduce(function (e, t) {
          return (e = (e << 5) - e + t.charCodeAt(0)) & e;
        }, 0);
      }
      a.d(t, { x: () => r });
    },
    17716: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => r, I: () => n });
      const r = {
        error: null,
        modalOpen: !1,
        txnStatus: "unsent",
        txnHash: null,
      };
      function n(e, t) {
        switch (t.type) {
          case "prompting":
            return { ...e, txnStatus: "prompting", modalOpen: !0, error: null };
          case "pending":
            return { ...e, txnStatus: "pending", txnHash: t.payload.txnHash };
          case "success":
            return { ...e, txnStatus: "success" };
          case "error":
            return { ...e, txnStatus: "error", error: t.payload.error };
          case "settled":
            return {
              ...e,
              modalOpen: !1,
              txnStatus: "unsent",
              error: null,
              txnHash: null,
            };
          default:
            return e;
        }
      }
    },
    9978: (e, t, a) => {
      "use strict";
      a.d(t, { NN: () => x, ar: () => m, nW: () => p });
      var r = a(63201),
        n = a(908),
        i = a(68881),
        o = a(63322),
        s = a(22668),
        l = a(89990),
        c = a(37888),
        d = a(79929),
        u = a(28145),
        h = a(50986);
      const x = async ({
        accountId: e,
        tokenAddresses: t,
        provider: a,
        CoreProxy: r,
      }) => {
        const n = new h.CH(r.address, r.abi, a),
          i = t.flatMap((t) => [
            n.populateTransaction.getAccountAvailableCollateral(e, t),
            n.populateTransaction.getAccountCollateral(e, t),
          ]);
        return {
          decoder: (e) => {
            if (!Array.isArray(e)) throw Error("Expected array");
            return t.map((t, a) => {
              const [r] = n.interface.decodeFunctionResult(
                  "getAccountAvailableCollateral",
                  e[2 * a]
                ),
                {
                  totalAssigned: i,
                  totalDeposited: o,
                  totalLocked: s,
                } = n.interface.decodeFunctionResult(
                  "getAccountCollateral",
                  e[2 * a + 1]
                );
              return {
                tokenAddress: t,
                availableCollateral: (0, d.wei)(r),
                totalAssigned: (0, d.wei)(i),
                totalDeposited: (0, d.wei)(o),
                totalLocked: (0, d.wei)(s),
                symbol: "",
                displaySymbol: "",
                decimals: 18,
              };
            });
          },
          calls: await Promise.all(i),
        };
      };
      function p({ accountId: e }) {
        const { data: t } = (0, s.a)(),
          { network: a } = (0, n.LN)(),
          { data: d } = (0, o.T)(),
          h = (0, n.yL)(),
          { data: p } = (0, l.p)();
        return (0, u.useQuery)({
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "AccountCollateral",
            { accountId: e },
            { contractsHash: (0, r.K)([t, p]) },
          ],
          enabled: Boolean(a && h && t && e && d && d.length > 0 && p),
          queryFn: async function () {
            if (!(a && h && t && e && d && d.length > 0 && p)) throw "OMFG";
            const r = d.map((e) => e.tokenAddress).concat([p.address]),
              { calls: n, decoder: o } = await x({
                accountId: e,
                tokenAddresses: r,
                provider: h,
                CoreProxy: t,
              }),
              s = [...n],
              l = await (0, i.QH)(await (0, i.kp)(a), a).catch(() => {});
            l && s.unshift(l);
            return (await (0, c.Iy)(a, h, s, o, "useAccountCollateral")).map(
              (e) => {
                if (
                  `${p.address}`.toLowerCase() ===
                  `${e.tokenAddress}`.toLowerCase()
                )
                  return Object.assign(e, {
                    symbol: p.symbol,
                    displaySymbol: p.name,
                    decimals: p.decimals,
                  });
                const t = d.find(
                  (t) =>
                    `${t.tokenAddress}`.toLowerCase() ===
                    `${e.tokenAddress}`.toLowerCase()
                );
                return Object.assign(e, {
                  symbol: t?.symbol ?? "",
                  displaySymbol: t?.displaySymbol ?? "",
                  decimals: t?.decimals ?? 18,
                });
              }
            );
          },
        });
      }
      function m(e, t) {
        const { network: a } = (0, n.LN)(),
          { data: r, isPending: i } = p({ accountId: e });
        return (0, u.useQuery)({
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "AccountSpecificCollateral",
            { accountId: e },
            { token: t },
            { isPendingAccountCollaterals: i },
          ],
          enabled: Boolean(e && t && r),
          queryFn: async function () {
            if (!(e && t && r)) throw "OMFG";
            return (
              r.find(
                ({ tokenAddress: e }) =>
                  `${e}`.toLowerCase() === `${t}`.toLowerCase()
              ) || null
            );
          },
        });
      }
    },
    42383: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => g, y: () => f });
      var r = a(17716),
        n = a(28145),
        i = a(908),
        o = a(50986),
        s = a(55588),
        l = a(79929);
      const c = s.rK.transform((e) => (0, l.wei)(e)),
        d = ["function allowance(address, address) view returns (uint256)"];
      var u = a(99),
        h = a(35834),
        x = a(95772),
        p = a(90711),
        m = a(2784);
      const g = [
          "function approve(address spender, uint256 amount) returns (bool)",
        ],
        f = ({ contractAddress: e, amount: t, spender: a }, s) => {
          const [l, f] = (0, m.useReducer)(r.I, r.E),
            { data: y, refetch: j } = (({ contractAddress: e, spender: t }) => {
              const { activeWallet: a } = (0, i.Os)(),
                { network: r } = (0, i.LN)(),
                s = (0, i.M9)();
              return (0, n.useQuery)({
                queryKey: [
                  `${r?.id}-${r?.preset}`,
                  "Allowance",
                  { accountAddress: a?.address },
                  { contractAddress: e, spender: t },
                ],
                queryFn: async () => {
                  if (!(e && t && a?.address && s)) throw new Error("OMG");
                  const r = new o.CH(e, d, s),
                    n = await r.allowance(a.address, t);
                  return c.parse(n);
                },
                enabled: Boolean(a?.address && e && t && s),
              });
            })({ contractAddress: e, spender: a }),
            b = Boolean(y?.gte(t)),
            w = (0, i.mx)(),
            { gasSpeed: C } = (0, x.jU)(),
            L = (0, i.yL)(),
            M = (0, n.useMutation)({
              mutationFn: async (r) => {
                if (!(w && e && a && L))
                  throw new Error(
                    "Signer, contract address or spender is not defined"
                  );
                if (!b)
                  try {
                    f({ type: "prompting" });
                    const n = new o.CH(e, g, w),
                      i = r ? p.Bz : t,
                      s = (0, h.o)({ provider: L }),
                      l = n.estimateGas.approve(a, i),
                      c = n
                        .connect(w)
                        .populateTransaction.approve(a, i, { gasLimit: l }),
                      [d, x, m] = await Promise.all([s, l, c]),
                      y = (0, u.F)({ gasLimit: x, gasPrices: d, gasSpeed: C }),
                      b = await w.sendTransaction({ ...m, ...y });
                    f({ type: "pending", payload: { txnHash: b.hash } }),
                      await b.wait(),
                      f({ type: "success" }),
                      j();
                  } catch (e) {
                    throw (f({ type: "error", payload: { error: e } }), e);
                  }
              },
              ...s,
            });
          return {
            mutation: M,
            txnState: l,
            isLoading: M.isPending,
            approve: M.mutateAsync,
            refetchAllowance: j,
            requireApproval: !b,
          };
        };
    },
    16908: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => l, L: () => o });
      var r = a(42219),
        n = a(908),
        i = a(28145);
      function o(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t;
        return (0, i.useQuery)({
          queryKey: ["apr", a?.id],
          queryFn: async () => {
            try {
              return await l(a?.id);
            } catch (e) {
              return;
            }
          },
          staleTime: 6e4,
          enabled: Boolean(a?.id),
        });
      }
      const s = [n.PZ.id, n.PO.id, n.RR.id];
      async function l(e) {
        try {
          const t = e && s.includes(e);
          if (!t)
            throw new Error("Apr endpoint not supported for this network");
          const a = await fetch((0, r.Ko)(e)),
            n = await a.json(),
            i = n?.sort((e, t) => t.apr7d - e.apr7d)[0];
          return {
            combinedApr: 100 * i.apr7d,
            cumulativePnl: t ? i.cumulativePnl : 0,
            collateralAprs: n,
          };
        } catch (e) {
          return (
            console.error(e),
            { combinedApr: 0, cumulativePnl: 0, collateralAprs: [] }
          );
        }
      }
    },
    908: (e, t, a) => {
      "use strict";
      a.d(t, {
        PO: () => L,
        PZ: () => m,
        RR: () => g,
        g5: () => A,
        dF: () => p,
        NM: () => y,
        EY: () => D,
        ZQ: () => k,
        getMagicProvider: () => x,
        M9: () => I,
        T9: () => N,
        LN: () => F,
        yL: () => z,
        eK: () => v,
        mx: () => E,
        Os: () => T,
      });
      var r = a(42219),
        n = a(77693),
        i = a(71679),
        o = a(28145),
        s = a(42764),
        l = a(1005),
        c = a(8550),
        d = a(2784);
      class u extends l.r {
        constructor() {
          if (!window.$chainId) throw new Error("Empty window.$chainId");
          if (!window.$magicWallet)
            throw new Error("Empty window.$magicWallet");
          super("http://127.0.0.1:8545", {
            chainId: window.$chainId,
            name: "Anvil",
          }),
            Object.defineProperty(this, "magicWallet", {
              enumerable: !0,
              value: window.$magicWallet,
              writable: !1,
            }),
            Object.defineProperty(this, "chainId", {
              enumerable: !0,
              value: window.$chainId,
              writable: !1,
            });
        }
        async listAccounts() {
          return [this.magicWallet];
        }
        async send(e, t) {
          if ("eth_chainId" === e)
            return `0x${Number(this.chainId).toString(16)}`;
          if ("eth_accounts" === e) return [this.magicWallet];
          try {
            const a = await super.send(e, t);
            return (
              console.log("MAGIC.send", { method: e, params: t, result: a }), a
            );
          } catch (a) {
            throw (
              (console.log("MAGIC.send ERROR", {
                method: e,
                params: t,
                error: a,
              }),
              a)
            );
          }
        }
      }
      var h = a(52322);
      function x() {
        if (window.$magicWallet && window.$chainId) return new u();
      }
      Number(0).toString(16);
      const p = ({ networkId: e, size: t = "24px", ...a }) => {
          switch (e) {
            case 1:
            case 11155111:
              return (0, h.jsx)(i.xi, { w: t, h: t, ...a });
            case 10:
            case 11155420:
              return (0, h.jsx)(i.PF, { w: t, h: t, ...a });
            case 84531:
            case 84532:
            case 8453:
              return (0, h.jsx)(i.su, { w: t, h: t, ...a });
            case 13370:
              return (0, h.jsx)(i.K7, { w: "29px", h: "21px", ...a });
            case 421614:
            case 42161:
              return (0, h.jsx)(i.Ri, { w: t, h: t, ...a });
            case 2192:
            case 13001:
              return (0, h.jsx)(i.vK, { w: t, h: t, ...a });
            default:
              return (0, h.jsx)(i.Bg, { w: t, h: t, ...a });
          }
        },
        m = {
          id: 8453,
          preset: "andromeda",
          hexId: `0x${Number(8453).toString(16)}`,
          token: "ETH",
          name: "base",
          rpcUrl: (e) => `https://base-mainnet.infura.io/v3/${e ?? r.lm}`,
          label: "Base",
          isSupported: !0,
          publicRpcUrl: "https://base.publicnode.com",
          isTestnet: !1,
        },
        g = {
          id: 1,
          preset: "main",
          hexId: `0x${Number(1).toString(16)}`,
          token: "ETH",
          name: "mainnet",
          rpcUrl: (e) => `https://mainnet.infura.io/v3/${e ?? r.lm}`,
          label: "Ethereum",
          isSupported: !0,
          publicRpcUrl: "https://ethereum.publicnode.com",
          isTestnet: !1,
        },
        f = {
          id: 10,
          preset: "main",
          hexId: `0x${Number(10).toString(16)}`,
          token: "ETH",
          name: "optimism-mainnet",
          rpcUrl: (e) => `https://optimism-mainnet.infura.io/v3/${e ?? r.lm}`,
          label: "Optimism",
          isSupported: !0,
          publicRpcUrl: "https://mainnet.optimism.io",
          isTestnet: !1,
        },
        y = {
          id: 11155111,
          preset: "main",
          hexId: `0x${Number(11155111).toString(16)}`,
          token: "ETH",
          name: "sepolia",
          rpcUrl: (e) => `https://sepolia.infura.io/v3/${e ?? r.lm}`,
          label: "Sepolia Testnet",
          isSupported: !0,
          publicRpcUrl: "https://ethereum-sepolia.publicnode.com",
          isTestnet: !0,
        },
        j = {
          id: 84532,
          preset: "andromeda",
          hexId: `0x${Number(84532).toString(16)}`,
          token: "ETH",
          name: "base-sepolia",
          rpcUrl: (e) => `https://base-sepolia.infura.io/v3/${e ?? r.lm}`,
          label: "Base Sepolia",
          isSupported: !0,
          publicRpcUrl: "https://sepolia.base.org",
          isTestnet: !0,
        },
        b = {
          id: 13370,
          preset: "main",
          hexId: `0x${Number(13370).toString(16)}`,
          token: "ETH",
          name: "cannon",
          rpcUrl: () => "http://127.0.0.1:8545",
          label: "Cannon",
          isSupported: !1,
          publicRpcUrl: "http://127.0.0.1:8545",
          isTestnet: !0,
        },
        w = {
          id: 11155420,
          preset: "main",
          hexId: `0x${Number(11155420).toString(16)}`,
          token: "ETH",
          name: "optimism-sepolia",
          rpcUrl: (e) => `https://optimism-sepolia.infura.io/v3/${e ?? r.lm}`,
          label: "Optimism Sepolia",
          isSupported: !1,
          publicRpcUrl: "https://sepolia.optimism.io/",
          isTestnet: !0,
        },
        C = {
          id: 421614,
          preset: "main",
          hexId: `0x${Number(421614).toString(16)}`,
          token: "ETH",
          name: "arbitrum-sepolia",
          rpcUrl: (e) => `https://arbitrum-sepolia.infura.io/v3/${e ?? r.lm}`,
          label: "Arbitrum Sepolia",
          isSupported: !0,
          publicRpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
          isTestnet: !0,
        },
        L = {
          id: 42161,
          preset: "main",
          hexId: `0x${Number(42161).toString(16)}`,
          token: "ETH",
          name: "arbitrum",
          rpcUrl: (e) => `https://arbitrum-mainnet.infura.io/v3/${e ?? r.lm}`,
          label: "Arbitrum",
          isSupported: !0,
          publicRpcUrl: "https://arb1.arbitrum.io/rpc",
          isTestnet: !1,
        },
        M = {
          id: 2192,
          preset: "main",
          hexId: `0x${Number(2192).toString(16)}`,
          token: "ETH",
          name: "SNAX",
          rpcUrl: () => "https://mainnet.snaxchain.io/",
          label: "Snaxchain",
          isSupported: !0,
          publicRpcUrl: "https://mainnet.snaxchain.io/",
          isTestnet: !1,
        },
        S = {
          id: 13001,
          preset: "main",
          hexId: `0x${Number(13001).toString(16)}`,
          token: "ETH",
          name: "SNAX",
          rpcUrl: () => "https://testnet.snaxchain.io/",
          label: "Snaxchain",
          isSupported: !0,
          publicRpcUrl: "https://testnet.snaxchain.io/",
          isTestnet: !0,
        },
        A = [m, g, f, y, j, b, w, C, L, M, S];
      async function k(e, t) {
        return (0, n.O)(e, t).then(
          () => !0,
          () => !1
        );
      }
      A.find(
        (e) =>
          `${e.id}-${e.preset}` ===
          window.localStorage.getItem("DEFAULT_NETWORK")
      ) ?? A[1];
      const D = {
        name: "Synthetix",
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM0MCAyNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzAwRDFGRiIgZD0iTTgyLjE0OCA1NS45MnEtMy41NjQtNC4wODEtOC43ODYtNC4wODNIMi4xMzRjLS42MzIgMC0xLjE1LS4yLTEuNTQtLjYtLjM5Ni0uMzk1LS41OTQtLjg0LS41OTQtMS4zMTl2LTQ4UTAgMS4yMDEuNTk0LjYwMUMuOTg0LjIgMS41MDIgMCAyLjEzNCAwSDc3LjRjMTguOTkyIDAgMzUuMzc3IDcuNzY0IDQ5LjE0OSAyMy4yOGwxOC4yODMgMjIuMzE3LTM1LjYxNCA0My40NHptMTMxLjU0LTMyLjg4UTIzNC4zNDUgMCAyNjMuMDczIDBoNzUuMDI5cS45NDguMDAxIDEuNDI1LjQ3OC40NzEuNDgzLjQ3MyAxLjQ0djQ4YzAgLjQ3OC0uMTYuOTI0LS40NzMgMS4zMThxLS40NzcuNi0xLjQyNS42aC03MS4yMjdjLTMuNDgzIDAtNi40MSAxLjM2NC04Ljc4NyA0LjA4M2wtNTIuNDcxIDYzLjgzOSA1Mi43MDggNjQuMzE2YzIuMzc3IDIuNTY1IDUuMjIxIDMuODQ0IDguNTUgMy44NDRoNzEuMjI3cS45NDggMCAxLjQyNS42Yy4zMTMuNDAxLjQ3My45MjQuNDczIDEuNTU3djQ4YzAgLjQ3OC0uMTYuOTI0LS40NzMgMS4zMThxLS40NzcuNi0xLjQyNS42MDFoLTc1LjAyOXEtMjguNzMuMDAxLTQ5LjE0OS0yMy4yOGwtNDMuNjg0LTUzLjI3OC00My42OTEgNTMuMjc4cS0yMC42NTggMjMuMjgxLTQ5LjM4NSAyMy4yOEgyLjEzNGMtLjYzMiAwLTEuMTEyLS4yMDEtMS40MjUtLjYwMS0uMzItLjQwMS0uNDczLS45MTctLjQ3My0xLjU2M3YtNDhjMC0uNDc4LjE1NC0uOTE4LjQ3My0xLjMxOC4zMTMtLjQwMS43OTMtLjYwMSAxLjQyNS0uNjAxaDcxLjIyOGMzLjMyMyAwIDYuMjUtMS4zNTYgOC43ODYtNC4wODJsNTEuNTItNjIuODc2eiIvPgo8L3N2Zz4K",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYyIiBoZWlnaHQ9IjU2IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNzYyIDU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEQxRkYiIGQ9Ik03My40OTIgMjYuMjEycS00Ljg3MS00Ljc2LTExLjcxLTQuNzZIMTYuNThxLTEuMjYgMC0yLjE2Mi0uODc3YTIuODYgMi44NiAwIDAgMS0uOTAzLTIuMTM0di0zLjY2NnEwLTEuMjAyLjkwMy0yLjA4YTMgMyAwIDAgMSAyLjE2Mi0uODc2aDU4LjI4YS40OC40OCAwIDAgMCAuMzU1LS4xMzcuNDIuNDIgMCAwIDAgLjEzNy0uM1YuNDM3cTAtLjIxNy0uMTM3LS4zMjhBLjU2LjU2IDAgMCAwIDc0Ljg2IDBIMTYuNThROS42ODcgMCA0Ljg0NCA0Ljc2MiAwIDkuNTIyIDAgMTYuMjUydi43MTJxMCA2Ljc4NiA0Ljg0MyAxMS41NDcgNC44NDIgNC43NiAxMS43MzggNC43Nmg0NS4ycTEuMjA1IDAgMi4xMDYuODQ4LjkwNC44NDkuOTAzIDIuMTA4djMuNjY1cTAgMS4yNi0uOTAzIDIuMTA4dC0yLjEwNi44NDhIMy40NDhhLjQyLjQyIDAgMCAwLS4zLjEzNy40OC40OCAwIDAgMC0uMTM4LjM1N3YxMC45NDRxMCAuMTY1LjEzNy4zYS40Mi40MiAwIDAgMCAuMy4xMzhoNTguMzM0cTYuODQgMCAxMS43MS00Ljc4OHQ0Ljg3MS0xMS41MnYtLjcxMnEtLjAwMS02LjczMi00Ljg3LTExLjQ5Mk0xNzEuNjIyIDBoLTEyLjY0MWEuNDcuNDcgMCAwIDAtLjMwMS4xMDlxLS4xMzcuMTEtLjEzNy4zMjh2MTMuOXEwIDEuODA1LTEuODYgMi43MzZsLTI1LjIyNiAxMC40NS0yNS4yMjYtMTAuNDVxLTEuODYtLjkzLTEuODYxLTIuNzM3Vi40MzdxMC0uMjE3LS4xMDktLjMyOC0uMTEyLS4xMDgtLjMyOS0uMTA5SDkxLjI5YS40Ny40NyAwIDAgMC0uMy4xMDlxLS4xMzcuMTEtLjEzNy4zMjh2MTUuOTI0cTAgMy41NTkgMS45NyA2LjUxMiAxLjk3IDIuOTU0IDUuMzYzIDQuMzc3bDI2LjQ4NiAxMS4xMDh2MTUuODdhLjQ4LjQ4IDAgMCAwIC4xMzcuMzU3LjQ4LjQ4IDAgMCAwIC4zNTUuMTM3aDEyLjY0MWEuNDIuNDIgMCAwIDAgLjMtLjEzNy40OC40OCAwIDAgMCAuMTM3LS4zNTZ2LTE1Ljg3bDI2LjQ4Ni0xMS4wNTNjMi4yNi0uOTg2IDQuMDUtMi40NTQgNS4zNjItNC40MDVxMS45Ny0yLjkyNyAxLjk2OS02LjQ4NVYuNDM3cTAtLjIxNy0uMTM3LS4zMjhhLjQ3LjQ3IDAgMCAwLS4zLS4xMDltOTMuODk0IDBoLTEyLjY0MXEtLjIyIDAtLjMyOC4xMzdhLjQ2LjQ2IDAgMCAwLS4xMDkuM3Y0Mi40NjRoLTUuMzA4cS0xLjQ3OSAwLTIuNTE3LTEuMzEzTDIyMC4wOTggNS43NDVRMjE2LjE1Ni4yMTkgMjA5LjIwOCAwaC0yMS4xMjJhLjQ4LjQ4IDAgMCAwLS4zNTYuMTM3LjQyLjQyIDAgMCAwLS4xMzcuM3Y1My44NDZxMCAuMTY1LjEzNy4zYS40OC40OCAwIDAgMCAuMzU2LjEzOGgxMi42NDFhLjQyLjQyIDAgMCAwIC4zMDEtLjEzNy40Mi40MiAwIDAgMCAuMTM3LS4zVjExLjgxOGg1LjMwOHExLjQ3NyAwIDIuNTE3IDEuMzY4bDI0LjUxNSAzNS44NDNxMy45NCA1LjUyOCAxMC44OSA1LjY5aDIxLjEyM3EuMjE3IDAgLjMyOC0uMTM2YS40Ny40NyAwIDAgMCAuMTA5LS4zVi40MzZhLjQ4LjQ4IDAgMCAwLS4xMDktLjNxLS4xMTItLjEzNy0uMzMtLjEzN1ptOTEuMzY2IDBIMjc5LjQ1cS0uMjIgMC0uMzI4LjEzN2EuNDYuNDYgMCAwIDAtLjEwOS4zdjEwLjk0NXEtLjAwMS4xNjQuMTA5LjMuMTA4LjEzNy4zMjguMTM3aDMxLjk1N3Y0Mi40NjRxMCAuMTY1LjEwOS4zLjExLjEzOC4zMjkuMTM4aDEyLjY0MXEuMjE5IDAgLjMyOC0uMTM3YS40Ny40NyAwIDAgMCAuMTA5LS4zVjExLjgxOGgzMS45NTdhLjQ4LjQ4IDAgMCAwIC4zNTUtLjEzNy40Mi40MiAwIDAgMCAuMTM3LS4zVi40MzdhLjQyLjQyIDAgMCAwLS4xMzctLjMuNDcuNDcgMCAwIDAtLjM1My0uMTM3bTkzLjg5MyAwaC0xMi42NDFhLjQyLjQyIDAgMCAwLS4zMDEuMTM3LjQyLjQyIDAgMCAwLS4xMzcuM1YyMS40NWgtNTEuMjJWLjQzN2EuNDIuNDIgMCAwIDAtLjEzNy0uMy41LjUgMCAwIDAtLjM1NS0uMTM3aC0xMi42NDFhLjQyLjQyIDAgMCAwLS4zLjEzNy40Mi40MiAwIDAgMC0uMTM3LjN2NTMuODQ2cTAgLjE2NS4xMzcuM2EuNDIuNDIgMCAwIDAgLjMuMTM4aDEyLjY0MWEuNDguNDggMCAwIDAgLjM1NS0uMTM3LjQyLjQyIDAgMCAwIC4xMzctLjNWMzMuMjdoNTEuMjJ2MjEuMDEycTAgLjE2NS4xMzcuM2EuNDIuNDIgMCAwIDAgLjMwMS4xMzhoMTIuNjQxYS40OC40OCAwIDAgMCAuMzU1LS4xMzcuNDIuNDIgMCAwIDAgLjEzNy0uM1YuNDM2YS40My40MyAwIDAgMC0uMTM3LS4zLjQ4LjQ4IDAgMCAwLS4zNTUtLjEzN1ptOTMuNTU4IDBoLTYxLjM0MnEtNi44NDEgMC0xMS43MSA0Ljc2LTQuODcxIDQuNzYxLTQuODcxIDExLjQ5MnYyMi4xNjJxMCA2Ljc4NiA0Ljg3MSAxMS41NDcgNC44NjkgNC43NiAxMS43MSA0Ljc2MWg2MS4zNDJhLjQyLjQyIDAgMCAwIC4zMDEtLjEzNy40Mi40MiAwIDAgMCAuMTM3LS4zVjQzLjM0cTAtLjIxOS0uMTM3LS4zMjhhLjQ4LjQ4IDAgMCAwLS4zMDEtLjExaC02MS4zNDJxLTEuMjYuMDAxLTIuMTM0LS44NzQtLjg3Ny0uODc1LS44NzctMi4wOHYtNi42NzdoNjQuMzE0cS4yMTcgMCAuMzI4LS4xMzdhLjQ4LjQ4IDAgMCAwIC4xMDktLjNWMjEuODg4cTAtLjIxOS0uMTA5LS4zMjktLjExLS4xMDgtLjMyOC0uMTA5SDQ3OS45OHYtNi42NzZxMC0xLjIwMy44NzctMi4wOC44NzQtLjg3NSAyLjEzNC0uODc2aDYxLjM0MnEuMTY0IDAgLjMwMS0uMTM3YS40Mi40MiAwIDAgMCAuMTM3LS4zVi40MzdhLjQyLjQyIDAgMCAwLS4xMzctLjMuNDIuNDIgMCAwIDAtLjMwMS0uMTM3bTkzLjQ1IDBoLTc3LjQzMnEtLjIyIDAtLjMyOC4xMzdhLjQ2LjQ2IDAgMCAwLS4xMDkuM3YxMC45NDVxLS4wMDEuMTY0LjEwOS4zLjEwOS4xMzcuMzI4LjEzN2gzMS45NTd2NDIuNDY0cTAgLjE2NS4xMDkuMy4xMS4xMzguMzI5LjEzOGgxMi42NDFxLjIxOSAwIC4zMjgtLjEzN2EuNDYuNDYgMCAwIDAgLjEwOS0uM1YxMS44MThoMzEuOTU3YS40OC40OCAwIDAgMCAuMzU1LS4xMzcuNDIuNDIgMCAwIDAgLjEzNy0uM1YuNDM3YS40Mi40MiAwIDAgMC0uMTM3LS4zLjQ4LjQ4IDAgMCAwLS4zNTMtLjEzN20yOS40MzEuMTA5cS0uMTEtLjEwOC0uMzI5LS4xMDloLTEyLjY0cS0uMjIgMC0uMzI5LjEwOS0uMTEuMTEtLjEwOS4zMjh2NTMuODQ2cS0uMDAxLjE2NS4xMDkuMy4xMDkuMTM4LjMyOS4xMzhoMTIuNjRxLjIxOCAwIC4zMjktLjEzN2EuNDguNDggMCAwIDAgLjEwOS0uM1YuNDM2cTAtLjIxNy0uMTA5LS4zMjhabTM0LjkgMTMuMTg5cS0uODIyLS45My0yLjAyNS0uOTNoLTE2LjQxNmEuNDguNDggMCAwIDEtLjM1NS0uMTM4LjQuNCAwIDAgMS0uMTM3LS4zVi45ODVxMC0uMTYzLjEzNy0uM2EuNDguNDggMCAwIDEgLjM1NS0uMTM3aDE3LjM0NnE2LjU2NyAwIDExLjMyOCA1LjMwOGw0LjIxMyA1LjA4OS04LjIwOCA5LjkwNHptMzAuMzE0LTcuNDk2UTczNy4xODkuNTQ4IDc0My44MS41NDhoMTcuMjkycS4yMTggMCAuMzI5LjExLjEwOS4xMS4xMDkuMzI3VjExLjkzcTAgLjE2NC0uMTA5LjMtLjExLjEzNy0uMzI5LjEzN2gtMTYuNDE2cS0xLjIwMyAwLTIuMDI1LjkzMWwtMTIuMDkzIDE0LjU1NiAxMi4xNDggMTQuNjY1cS44Mi44NzYgMS45Ny44NzZoMTYuNDE2cS4yMTggMCAuMzI5LjEzNy4xMDkuMTM3LjEwOS4zNTVWNTQuODNhLjQ3LjQ3IDAgMCAxLS4xMDkuM3EtLjExLjEzOC0uMzI5LjEzOGgtMTcuMjlxLTYuNjIyIDAtMTEuMzI4LTUuMzA4bC0xMC4wNjgtMTIuMTQ4LTEwLjA2OSAxMi4xNDhxLTQuNzYxIDUuMzA4LTExLjM4MiA1LjMwOGgtMTcuMjkycS0uMjIgMC0uMzI5LS4xMzdhLjU1LjU1IDAgMCAxLS4xMDktLjM1N1Y0My44MzFhLjQ3LjQ3IDAgMCAxIC4xMDktLjNxLjEwOS0uMTM4LjMyOS0uMTM3aDE2LjQxNnExLjE0NyAwIDIuMDI1LS45MzFsMTEuODczLTE0LjMzN3oiLz4KPC9zdmc+Cg==",
        description: "Synthetix | The derivatives liquidity protocol.",
        recommendedInjectedWallets: [
          { name: "MetaMask", url: "https://metamask.io" },
          { name: "Brave Wallet", url: "https://brave.com/wallet" },
        ],
        gettingStartedGuide: "https://synthetix.io",
        explore: "https://blog.synthetix.io",
      };
      function v(e) {
        const { network: t } = F(),
          a = e ?? t,
          r = e?.id === t?.id && e?.preset === t?.preset,
          { data: n } = (0, o.useQuery)({
            queryKey: [
              `${a?.id}-${a?.preset}`,
              "ProviderForChain",
              { isDefaultChain: r },
            ],
            enabled: Boolean(a),
            queryFn: () => {
              if (!a) throw "OMFG";
              if (r) {
                const e = x();
                if (e) return e;
              }
              return a ? new l.r(a.rpcUrl()) : null;
            },
          });
        return n;
      }
      function I() {
        const { network: e } = F();
        return v(e);
      }
      function T() {
        const [{ wallet: e }, t, a] = (0, s.Or)();
        if (!e)
          return {
            activeWallet: void 0,
            walletsInfo: void 0,
            connect: t,
            disconnect: a,
          };
        const r = e?.accounts[0];
        return { activeWallet: r, walletsInfo: e, connect: t, disconnect: a };
      }
      function F() {
        const [{ connectedChain: e }, t] = (0, s.Um)(),
          a = (0, d.useCallback)(
            async (e) => {
              const a = A.find((t) => t.id === e);
              if (a) return await t({ chainId: a?.hexId });
            },
            [t]
          ),
          r = A.find((t) => t.hexId === e?.id);
        return r
          ? { network: r, setNetwork: a }
          : { network: void 0, setNetwork: a };
      }
      function N() {
        const [{ wallet: e }] = (0, s.Or)();
        return Boolean(e);
      }
      function E() {
        const e = z(),
          { activeWallet: t } = T(),
          { data: a } = (0, o.useQuery)({
            queryKey: ["Wallet signer", t?.address],
            enabled: Boolean(e && t),
            queryFn: () => {
              if (!e || !t) throw "OMFG";
              return e.getSigner(t.address);
            },
          });
        return a;
      }
      function z() {
        const [{ wallet: e }] = (0, s.Or)(),
          { data: t } = (0, o.useQuery)({
            queryKey: ["Wallet provider", e?.accounts.map((e) => e.address)],
            enabled: Boolean(e),
            queryFn: () => {
              if (!e) throw "OMFG";
              return x() ?? new c.Q(e.provider, "any");
            },
          });
        return t;
      }
    },
    86689: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => m });
      var r = a(17716),
        n = a(908),
        i = a(68881),
        o = a(22668),
        s = a(99),
        l = a(35834),
        c = a(95772),
        d = a(37888),
        u = a(28145),
        h = a(50986),
        x = a(10528),
        p = a(2784);
      const m = ({
        accountId: e,
        poolId: t,
        collateralTypeAddress: a,
        debtChange: m,
      }) => {
        const [g, f] = (0, p.useReducer)(r.I, r.E),
          { data: y } = (0, o.a)(),
          { data: j, refetch: b } = (0, i.Y_)(),
          w = (0, n.mx)(),
          { gasSpeed: C } = (0, c.jU)(),
          L = (0, n.yL)(),
          { network: M } = (0, n.LN)(),
          S = (0, u.useMutation)({
            mutationFn: async () => {
              if (w && y && t && e && a && M && L && !m.eq(0))
                try {
                  f({ type: "prompting" });
                  const r = new h.CH(
                      y.address,
                      y.abi,
                      w
                    ).populateTransaction.mintUsd(
                      x.O$.from(e),
                      x.O$.from(t),
                      a,
                      m.abs().toBN()
                    ),
                    n = Promise.all([r]),
                    [i, o] = await Promise.all([n, (0, l.o)({ provider: L })]);
                  j && i.unshift(j);
                  const c = await w.getAddress(),
                    { multicallTxn: u, gasLimit: p } = await (0, d.dI)(
                      M,
                      i,
                      "useBorrow",
                      c
                    ),
                    g = (0, s.F)({ gasLimit: p, gasPrices: o, gasSpeed: C }),
                    b = await w.sendTransaction({ ...u, ...g });
                  f({ type: "pending", payload: { txnHash: b.hash } }),
                    await b.wait(),
                    f({ type: "success" });
                } catch (e) {
                  throw (f({ type: "error", payload: { error: e } }), e);
                }
            },
            onSuccess: () => {
              b();
            },
          });
        return {
          mutation: S,
          txnState: g,
          settle: () => f({ type: "settled" }),
          isLoading: S.isPending,
          exec: S.mutateAsync,
        };
      };
    },
    68881: (e, t, a) => {
      "use strict";
      a.d(t, { QH: () => j, kp: () => f, Y_: () => w, Sb: () => b });
      a(5875),
        a(50509),
        a(38728),
        a(64810),
        a(43419),
        a(32825),
        a(16093),
        a(77829),
        a(60253),
        a(49225),
        a(79941),
        a(57265),
        a(25888),
        a(15840),
        a(37610),
        a(13351);
      var r = a(17123),
        n = a(42219),
        i = a(61269);
      var o = a(89709),
        s = a(16658),
        l = a(77693),
        c = a(96596),
        d = a(908),
        u = a(37595),
        h = a(79929),
        x = a(28145),
        p = a(99268);
      const m = new r.O(n.kw);
      function g(e) {
        return Array.from(
          new Set(
            Object.entries(e).filter(
              ([e, t]) =>
                66 === String(t).length &&
                (e.startsWith("pyth_feed_id_") ||
                  (e.startsWith("pyth") && e.endsWith("FeedId")))
            )
          )
        );
      }
      async function f(e) {
        return await (0, i.p)(e.id, e.preset);
      }
      async function y(e) {
        const t = (
            await Promise.all(
              u.Im.map((e) =>
                (async function (e, t) {
                  if (!t) throw new Error("Missing preset");
                  const r = `${Number(e).toFixed(0)}-${t}`;
                  switch (r) {
                    case "1-main": {
                      const [{ default: e }] = await Promise.all([
                        a.e(9469).then(a.t.bind(a, 89469, 19)),
                      ]);
                      return e;
                    }
                    case "11155111-main": {
                      const [{ default: e }] = await Promise.all([
                        a.e(4548).then(a.t.bind(a, 54548, 19)),
                      ]);
                      return e;
                    }
                    case "10-main": {
                      const [{ default: e }] = await Promise.all([
                        a.e(1992).then(a.t.bind(a, 91992, 19)),
                      ]);
                      return e;
                    }
                    case "8453-andromeda": {
                      const [{ default: e }] = await Promise.all([
                        a.e(9203).then(a.t.bind(a, 50853, 19)),
                      ]);
                      return e;
                    }
                    case "84532-andromeda": {
                      const [{ default: e }] = await Promise.all([
                        a.e(7717).then(a.t.bind(a, 67717, 19)),
                      ]);
                      return e;
                    }
                    case "42161-main": {
                      const [{ default: e }] = await Promise.all([
                        a.e(7919).then(a.t.bind(a, 27919, 19)),
                      ]);
                      return e;
                    }
                    case "421614-main": {
                      const [{ default: e }] = await Promise.all([
                        a.e(6564).then(a.t.bind(a, 56564, 19)),
                      ]);
                      return e;
                    }
                    default:
                      throw new Error(`Unsupported deployment ${r} for Extras`);
                  }
                })(e.id, e.preset)
              )
            )
          )
            .map(g)
            .flat(),
          r = Array.from(
            new Set(
              t
                .map(([e, t]) =>
                  e.startsWith("pyth_feed_id_")
                    ? {
                        symbol: e.replace("pyth_feed_id_", "").toUpperCase(),
                        priceId: t,
                      }
                    : e.startsWith("pyth") && e.endsWith("FeedId")
                    ? {
                        symbol: e
                          .replace("pyth", "")
                          .replace("FeedId", "")
                          .toUpperCase(),
                        priceId: t,
                      }
                    : { symbol: null, priceId: null }
                )
                .filter(({ symbol: e, priceId: t }) => e && t)
            )
          );
        return e.map((e) => {
          const t = "WETH" === e.symbol ? "ETH" : e.symbol,
            a = r.find((e) => e.symbol?.toUpperCase() === t.toUpperCase());
          return { ...e, priceId: a?.priceId };
        });
      }
      const j = async (e, t) => {
          if (!e.length) return null;
          const a = Array.from(new Set(e)),
            r = await m.getPriceFeedsUpdateData(a),
            n = await (0, o.N)(t.id, t.preset);
          return {
            to: n.address,
            data: new p.vU(n.abi).encodeFunctionData("updatePriceFeeds", [r]),
            value: a.length,
          };
        },
        b = (e) =>
          (0, x.useQuery)({
            queryKey: ["offline-prices", e?.map((e) => e.id).join("-")],
            enabled: Boolean(e && e.length > 0),
            queryFn: async () => {
              if (!e) throw "useOfflinePrices is missing required data";
              const t = ["sUSDC", "USDC"],
                a = e.filter((e) => !t.includes(e.symbol)),
                r = [
                  { symbol: "sUSDC", price: (0, h.wei)(1).toBN() },
                  { symbol: "USDC", price: (0, h.wei)(1).toBN() },
                  { symbol: "USDx", price: (0, h.wei)(1).toBN() },
                ];
              if (!a.length) return r;
              const n = await y(a),
                i = await m.getLatestPriceFeeds(n.map((e) => e.priceId));
              return (
                i?.forEach((e) => {
                  const t = n.find(({ priceId: t }) => t === `0x${e.id}`),
                    a = e.getPriceUnchecked();
                  t &&
                    r.push({
                      symbol: t.symbol,
                      price: (0, c.vz)(a.price, 18 + a.expo),
                    });
                }),
                r
              );
            },
            refetchInterval: 6e4,
          }),
        w = (e) => {
          const { network: t } = (0, d.LN)(),
            a = e || t,
            r = (0, d.M9)(),
            { activeWallet: n } = (0, d.Os)(),
            i = n?.address;
          return (0, x.useQuery)({
            queryKey: [
              `${a?.id}-${a?.preset}`,
              "PriceUpdates",
              { walletAddress: i },
            ],
            enabled: Boolean(a && r && n),
            queryFn: async () => {
              if (!(a && r && n)) throw "OMG";
              try {
                const { address: e, abi: t } = await (0, s.C)(a.id, a.preset),
                  n = new p.vU(t),
                  o = new p.vU([
                    "function getLatestPrice(bytes32 priceId, uint256 stalenessTolerance) external view returns (int256)",
                  ]),
                  c = await f(a);
                if (
                  ("true" === window.localStorage.getItem("DEBUG") &&
                    console.log("[useCollateralPriceUpdates]", {
                      pythFeedIds: c,
                    }),
                  0 === c.length)
                )
                  return null;
                const { address: d } = await (0, l.O)(a.id, a.preset),
                  u = [
                    ...c.map((e) => ({
                      target: d,
                      callData: o.encodeFunctionData("getLatestPrice", [
                        e,
                        1600,
                      ]),
                      value: 0,
                      requireSuccess: !1,
                    })),
                  ],
                  h = n.encodeFunctionData("aggregate3Value", [u]),
                  x = await r.call({ data: h, to: e }),
                  m = n.decodeFunctionResult("aggregate3Value", x || "")[0],
                  g = [];
                if (
                  (m.forEach(({ success: e }, t) => {
                    e || g.push(c[t]);
                  }),
                  "true" === window.localStorage.getItem("DEBUG") &&
                    console.log("[useCollateralPriceUpdates]", {
                      outdatedPriceIds: g,
                    }),
                  g.length)
                ) {
                  const e = await j(g, a).catch(() => {});
                  if (e) return { ...e, from: i };
                }
                return null;
              } catch (e) {
                return null;
              }
            },
            refetchInterval: 12e4,
          });
        };
    },
    63322: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => u, T: () => d });
      var r = a(77528),
        n = a(908),
        i = a(89990),
        o = a(79929),
        s = a(28145),
        l = a(90711);
      async function c(e, t) {
        return (
          await (async function (e, t) {
            if (!t) throw new Error("Missing preset");
            const r = `${Number(e).toFixed(0)}-${t}`;
            switch (r) {
              case "1-main": {
                const [{ default: e }] = await Promise.all([
                  a.e(7302).then(a.t.bind(a, 77302, 19)),
                ]);
                return e;
              }
              case "11155111-main": {
                const [{ default: e }] = await Promise.all([
                  a.e(6555).then(a.t.bind(a, 6555, 19)),
                ]);
                return e;
              }
              case "10-main": {
                const [{ default: e }] = await Promise.all([
                  a.e(1778).then(a.t.bind(a, 81778, 19)),
                ]);
                return e;
              }
              case "8453-andromeda": {
                const [{ default: e }] = await Promise.all([
                  a.e(3014).then(a.t.bind(a, 33014, 19)),
                ]);
                return e;
              }
              case "84532-andromeda": {
                const [{ default: e }] = await Promise.all([
                  a.e(421).then(a.t.bind(a, 70421, 19)),
                ]);
                return e;
              }
              case "42161-main": {
                const [{ default: e }] = await Promise.all([
                  a.e(5640).then(a.t.bind(a, 95640, 19)),
                ]);
                return e;
              }
              case "421614-main": {
                const [{ default: e }] = await Promise.all([
                  a.e(3843).then(a.t.bind(a, 63843, 19)),
                ]);
                return e;
              }
              default:
                throw new Error(
                  `Unsupported deployment ${r} for CollateralTokens`
                );
            }
          })(e, t)
        )
          .map((e) => ({
            address: e.address,
            symbol: e.symbol,
            displaySymbol: e.symbol,
            name: e.name,
            decimals: e.decimals,
            depositingEnabled: e.depositingEnabled,
            issuanceRatioD18: (0, o.wei)(e.issuanceRatioD18, 18, !0),
            liquidationRatioD18: (0, o.wei)(e.liquidationRatioD18, 18, !0),
            liquidationRewardD18: (0, o.wei)(e.liquidationRewardD18, 18, !0),
            minDelegationD18: (0, o.wei)(e.minDelegationD18, 18, !0),
            oracleNodeId: e.oracleNodeId,
            tokenAddress: e.tokenAddress,
            oracle: {
              constPrice: e.oracle.constPrice
                ? (0, o.wei)(e.oracle.constPrice, 18, !0)
                : void 0,
              externalContract: e.oracle.externalContract,
              stalenessTolerance: e.oracle.stalenessTolerance,
              pythFeedId: e.oracle.pythFeedId,
            },
          }))
          .filter(({ depositingEnabled: e }) => e);
      }
      function d(e = !1, t) {
        const { network: a } = (0, n.LN)(),
          o = t || a,
          { data: d } = (0, i.p)(t);
        return (0, s.useQuery)({
          enabled: Boolean(o?.id && o?.preset && d),
          queryKey: [
            `${o?.id}-${o?.preset}`,
            "CollateralTypes",
            { systemToken: d?.symbol, includeDelegationOff: e },
          ],
          queryFn: async () => {
            if (!(o?.id && o?.preset && d))
              throw Error(
                "useCollateralTypes should not be enabled when contracts missing"
              );
            const t = (await c(o.id, o.preset))
              .map((e) => {
                const t = (0, r.Yz)(o?.id, o?.preset);
                return t && "sUSDC" === e.symbol
                  ? {
                      ...e,
                      symbol: "USDC",
                      displaySymbol: "USDC",
                      name: "USD Coin",
                    }
                  : t && "sStataUSDC" === e.symbol
                  ? {
                      ...e,
                      symbol: "stataUSDC",
                      displaySymbol: "stataUSDC",
                      name: "Static aUSDC",
                    }
                  : { ...e, displaySymbol: e.displaySymbol ?? e.symbol };
              })
              .filter((e) => e.tokenAddress !== d.address);
            return e ? t : t.filter((e) => e.minDelegationD18.lt(l.Bz));
          },
          staleTime: 36e5,
          placeholderData: [],
        });
      }
      function u(e) {
        const { data: t, isFetching: a } = d();
        return {
          isFetching: a,
          data: (function (e) {
            if (t && t?.length)
              return e
                ? t?.find(
                    (t) => `${t.symbol}`.toLowerCase() === `${e}`.toLowerCase()
                  )
                : t[0];
          })(e),
        };
      }
    },
    8176: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => x });
      var r = a(32152),
        n = a(908),
        i = a(28145);
      var o = a(10896),
        s = a(37888),
        l = a(99268),
        c = a(10528),
        d = a(49494),
        u = a(2784);
      const h = [
        "error CannotSelfApprove(address addr)",
        "error InvalidTransferRecipient(address addr)",
        "error InvalidOwner(address addr)",
        "error TokenDoesNotExist(uint256 id)",
        "error TokenAlreadyMinted(uint256 id)",
      ];
      function x() {
        const { data: e } = (function (e) {
            const { network: t } = (0, n.LN)(),
              a = e || t;
            return (0, i.useQuery)({
              queryKey: [`${a?.id}-${a?.preset}`, "AllErrors"],
              enabled: Boolean(a),
              queryFn: async function () {
                if (!a) throw new Error("OMFG");
                return (0, r.a)(a.id, a.preset);
              },
              staleTime: 1 / 0,
              throwOnError: !1,
            });
          })(),
          { data: t } = (0, o.b)();
        return (0, u.useCallback)(
          (a) => {
            if (e)
              try {
                const r = (0, s.ZT)(a);
                if (!r) return void console.error({ error: a });
                const n = new l.vU([
                    ...e.abi,
                    ...s.P,
                    ...h,
                    ...(t ? t.abi : []),
                  ]).parseError(r),
                  i = Object.fromEntries(
                    Object.entries(n.args)
                      .filter(([e]) => `${parseInt(e)}` !== e)
                      .map(([e, t]) => {
                        if (t instanceof c.O$) {
                          const a = parseFloat(d.formatEther(t.toString()));
                          return a > 0.001
                            ? [e, a]
                            : t.toNumber() >
                                new Date(2e3, 1, 1).getTime() / 1e3 &&
                              t.toNumber() <
                                new Date(2100, 1, 1).getTime() / 1e3
                            ? [e, new Date(1e3 * t.toNumber())]
                            : [e, parseFloat(t.toString())];
                        }
                        return [e, t];
                      })
                  );
                return {
                  data: r,
                  name: n.name,
                  signature: n.signature,
                  args: i,
                };
              } catch (e) {
                return void console.error(e);
              }
          },
          [e, t]
        );
      }
    },
    95042: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => l });
      var r = a(28145),
        n = a(908),
        i = a(55588),
        o = a(79929);
      const s = i.rK.transform((e) => (0, o.wei)(e));
      function l() {
        const { activeWallet: e } = (0, n.Os)(),
          t = (0, n.M9)(),
          { network: a } = (0, n.LN)();
        return (0, r.useQuery)({
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "EthBalance",
            { accountAddress: e?.address },
          ],
          enabled: Boolean(t && e),
          queryFn: async () => {
            if (!t || !e) throw "OMFG";
            return s.parse(await t.getBalance(e.address));
          },
        });
      }
    },
    99: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => s });
      var r = a(79929),
        n = a(42219);
      const i = (0, r.wei)(n.os, n.br);
      function o(e) {
        return (0, r.wei)(e ?? 0, n.br)
          .mul(i)
          .toBN();
      }
      function s({ gasPrices: e, gasSpeed: t, gasLimit: a }) {
        const r = e[t];
        if ("baseFeePerGas" in r) {
          const { baseFeePerGas: e, ...t } = r;
          return { ...t, gasLimit: o(a) };
        }
        return { ...r, gasLimit: o(a) };
      }
    },
    35834: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => d });
      a(908), a(40903);
      var r = a(67640);
      const n = (e) => "number" == typeof e && e == e,
        i = (e, t) =>
          ((e, t, a) => {
            const r = e.length;
            if (t > 1) return Array(r);
            if (1 === t) return e.slice();
            const i = !Array.isArray(t),
              o = [];
            let s,
              l = 0,
              c = 0;
            for (; l < r; l++)
              if (((s = e[l]), n(s) && (i || n(s)))) {
                (o[l] = a ? 0 : s), (c = s), l++;
                break;
              }
            if (!i) {
              for (; l < r; l++)
                (s = e[l]),
                  n(s) && n(t[l])
                    ? (c = o[l] = t[l] * s + (1 - t[l]) * c)
                    : (o[l] = o[l - 1]);
              return o;
            }
            const d = 1 - t;
            for (; l < r; l++)
              (s = e[l]), n(s) ? (c = o[l] = t * s + d * c) : (o[l] = o[l - 1]);
            return o;
          })(e, 2 / (t + 1)),
        o = (e, t, a) =>
          e.filter((e, a) => !t.includes(a)).map((e) => e[a].toNumber());
      var s = a(79929),
        l = a(42219);
      const c = () => {
          const e = (0, s.wei)(1, 9).toBN(),
            t = (0, s.wei)(5, 9).toBN(),
            a = (0, s.wei)(1, 9).toBN();
          return {
            average: {
              maxPriorityFeePerGas: a,
              maxFeePerGas: t,
              baseFeePerGas: e,
            },
            fast: {
              maxPriorityFeePerGas: a,
              maxFeePerGas: t,
              baseFeePerGas: e,
            },
            fastest: {
              maxPriorityFeePerGas: a,
              maxFeePerGas: t,
              baseFeePerGas: e,
            },
          };
        },
        d = async ({ provider: e }) => {
          try {
            return (await e.getBlock("latest")).baseFeePerGas
              ? (async (e, t = "latest") => {
                  const a = await e
                      .send("eth_feeHistory", [
                        r.hexStripZeros(r.hexlify(10)),
                        t,
                        [15, 30, 45],
                      ])
                      .then((e) => ({
                        baseFeePerGas: e.baseFeePerGas.map((e) =>
                          (0, s.wei)(e, l.br, !0)
                        ),
                        reward: e.reward.map((e) =>
                          e.map((e) => (0, s.wei)(e, l.br, !0))
                        ),
                      })),
                    n = a.reward,
                    d = a.baseFeePerGas.at(-1);
                  if (!n.length)
                    return (
                      console.error(new Error("Error: block reward was empty")),
                      c()
                    );
                  if (!d)
                    return (
                      console.error(
                        new Error("Error: currentBaseFee was empty")
                      ),
                      c()
                    );
                  const u = ((e, t) => {
                      const a = [];
                      return (
                        e
                          .map((e) => e[t])
                          .forEach((e, t) => {
                            e.gt(5) && a.push(t);
                          }),
                        a
                      );
                    })(n, 0),
                    h = o(n, u, 0),
                    x = o(n, u, 1),
                    p = o(n, u, 2),
                    m = i(h, h.length)[h.length - 1],
                    g = i(x, x.length)[x.length - 1],
                    f = i(p, p.length)[p.length - 1];
                  if (void 0 === m || void 0 === g || void 0 === f)
                    throw new Error("Error: ema was undefined");
                  const y = (0, s.wei)(Math.min(m, 1), l.br),
                    j = (0, s.wei)(Math.min(g, 2), l.br),
                    b = (0, s.wei)(Math.min(f, 4), l.br),
                    w = (e, t) => e.mul((0, s.wei)(2, l.br)).add(t);
                  return {
                    average: {
                      maxPriorityFeePerGas: y.toBN(),
                      maxFeePerGas: w(d, y).toBN(),
                      baseFeePerGas: d.toBN(),
                    },
                    fast: {
                      maxPriorityFeePerGas: j.toBN(),
                      maxFeePerGas: w(d, j).toBN(),
                      baseFeePerGas: d.toBN(),
                    },
                    fastest: {
                      maxPriorityFeePerGas: b.toBN(),
                      maxFeePerGas: w(d, b).toBN(),
                      baseFeePerGas: d.toBN(),
                    },
                  };
                })(e)
              : (async (e) => {
                  try {
                    const t = await e.getGasPrice();
                    return {
                      fastest: { gasPrice: t },
                      fast: { gasPrice: t },
                      average: { gasPrice: t },
                    };
                  } catch (e) {
                    throw new Error(
                      "Could not retrieve gas price from provider"
                    );
                  }
                })(e);
          } catch (e) {
            throw new Error(`Could not fetch and compute network fee. ${e}`);
          }
        };
    },
    95772: (e, t, a) => {
      "use strict";
      a.d(t, { G2: () => o, jU: () => s });
      var r = a(2784),
        n = a(52322);
      const i = (0, r.createContext)({
          gasSpeed: "average",
          setGasSpeed: () => {},
        }),
        o = ({ children: e }) => {
          const [t, a] = (0, r.useState)("average");
          return (0, n.jsx)(i.Provider, {
            value: { gasSpeed: t, setGasSpeed: a },
            children: e,
          });
        },
        s = () => (0, r.useContext)(i);
    },
    34367: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => d, H: () => u });
      var r = a(28145),
        n = a(908),
        i = a(63322),
        o = a(20870),
        s = a(77528),
        l = a(89990),
        c = a(50986);
      function d(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t,
          d = (0, n.eK)(a),
          u = (0, s.Yz)(a?.id, a?.preset),
          { data: h } = (0, i.T)(!1, e),
          { data: x } = (0, o.b)(e),
          { data: p } = (0, l.p)(e);
        return (0, r.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "GetUSDTokens"],
          enabled: Boolean(x && d && a && h?.length && p),
          queryFn: async () => {
            if (!(x && d && a && h?.length && p)) throw "OMFG";
            const e = new c.CH(x.address, x.abi, d),
              t = u ? (await e.getWrapper(s.Ds))?.wrapCollateralType : void 0;
            return {
              snxUSD: p.address,
              sUSD: h?.find((e) =>
                u
                  ? "usdc" === e.symbol.toLowerCase()
                  : "susdc" === e.symbol.toLowerCase()
              )?.tokenAddress,
              USDC: t,
            };
          },
        });
      }
      const u = (e, t) => {
        const { network: a } = (0, n.LN)(),
          i = t || a,
          l = (0, n.eK)(i),
          d = (0, s.Yz)(i?.id, i?.preset),
          { data: u } = (0, o.b)(t);
        return (0, r.useQuery)({
          queryKey: [`${i?.id}-${i?.preset}`, "GetWrapperToken", e],
          enabled: Boolean(i && l && u && d),
          queryFn: async () => {
            if (!(i && l && u && d)) throw "OMFG";
            const e = new c.CH(u.address, u.abi, l);
            return d ? (await e.getWrapper(s.Ds))?.wrapCollateralType : void 0;
          },
        });
      };
    },
    89536: (e, t, a) => {
      "use strict";
      a.d(t, { UO: () => s });
      var r = a(73557),
        n = a(39857),
        i = a(2784);
      function o(e) {
        const t = Object.entries(e).filter(([, e]) => void 0 !== e);
        return Object.fromEntries(t);
      }
      const s = () => {
        const e = (0, r.UO)(),
          [t] = (0, n.lr)();
        return (0, i.useMemo)(() => {
          return (
            (a = { ...o(e), ...((r = t), Object.fromEntries(Array.from(r))) }),
            Object.fromEntries(
              Object.entries(a).sort(([e], [t]) => e.localeCompare(t))
            )
          );
          var a, r;
        }, [e, t]);
      };
    },
    18914: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c, O: () => l });
      var r = a(63201),
        n = a(908),
        i = a(22668),
        o = a(28145),
        s = a(50986);
      function l(e) {
        const { network: t } = (0, n.LN)(),
          a = e || t,
          { data: l } = (0, i.a)(a),
          c = (0, n.eK)(a);
        return (0, o.useQuery)({
          enabled: Boolean(c && l),
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "Pools",
            { contractsHash: (0, r.K)([l]) },
          ],
          queryFn: async () => {
            if (!c || !l) throw "OMFG";
            const e = new s.CH(l.address, l.abi, c),
              [t, a] = await Promise.all([
                e.getPreferredPool(),
                e.getApprovedPools(),
              ]),
              r = [{ id: t, isPreferred: !0 }].concat(
                a.map((e) => ({ id: e, isPreferred: !1 }))
              ),
              n = await Promise.all(
                r.map(async ({ id: t }) => await e.getPoolName(t))
              );
            return r.map((e, t) => ({
              id: `${e.id}`,
              name: n[t] || "Unnamed Pool",
              isPreferred: e.isPreferred,
            }));
          },
        });
      }
      function c(e, t) {
        const { network: a } = (0, n.LN)(),
          r = t || a,
          { data: i } = l(r);
        return (0, o.useQuery)({
          queryKey: [`${r?.id}-${r?.preset}`, "Pool", { poolId: e }],
          enabled: Boolean(i),
          queryFn: () => {
            if (!i) throw "OMFG";
            return i.find((t) => `${t.id}` == `${e}`);
          },
        });
      }
    },
    37595: (e, t, a) => {
      "use strict";
      a.d(t, { Y4: () => u, Im: () => h, AI: () => c, s6: () => l });
      var r = a(42219),
        n = a(908),
        i = a(21287),
        o = a(16908),
        s = a(28145);
      function l() {
        return (0, s.useQuery)({
          queryKey: ["poolsList"],
          queryFn: async () => {
            try {
              const [e, t] = await Promise.all([p(), x()]);
              return { synthetixPools: e.map((e, a) => ({ ...e, apr: t[a] })) };
            } catch (e) {
              throw e;
            }
          },
          staleTime: 6e5,
        });
      }
      function c(e, t) {
        const { data: a, isPending: r } = l();
        return {
          data: a?.synthetixPools.find(
            (a) => a?.network?.id === e && a?.poolInfo?.[0]?.pool?.id === t
          ),
          isLoading: r,
        };
      }
      const d = [n.RR.id, n.PZ.id, n.PO.id];
      async function u(e) {
        return fetch("https://api-v2.dhedge.org/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query:
              "\n          query GetFund($address: String!) {\n              fund(address: $address) {\n                totalValue\n                apy {\n                  monthly\n                  weekly\n                }\n              }\n            }",
            variables: { address: e },
          }),
        })
          .then((e) => e.json())
          .then(({ data: e }) => ({
            tvl: (0, i.compactInteger)(e.fund.totalValue / 1e18, 1),
            apy: e.fund.apy.weekly,
          }));
      }
      const h = n.g5
        .filter((e) => d.includes(e.id) && e.isSupported)
        .map((e) => e);
      async function x() {
        return Promise.all(h.map((e) => (0, o.O)(e.id)));
      }
      async function p() {
        const e = h.map((e) => (0, r.Q4)(e.name));
        return (
          await Promise.all(
            e.map((e) =>
              fetch(e, {
                method: "POST",
                body: JSON.stringify({ query: m }),
              }).then((e) => e.json())
            )
          )
        ).map((e, t) => ({ network: h[t], poolInfo: e?.data?.vaults ?? [] }));
      }
      const m = ((e) => e[0])`
  query PoolsListData {
    vaults(where: { pool: "1" }) {
      collateral_type {
        id
        oracle_node_id
        total_amount_deposited
      }
      pool {
        name
        id
      }
    }
  }
`;
    },
    18498: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => y });
      var r = a(42219),
        n = a(37330),
        i = a(17716),
        o = a(908),
        s = a(68881),
        l = a(22668),
        c = a(99),
        d = a(35834),
        u = a(95772),
        h = a(89990),
        x = a(37888),
        p = a(28145),
        m = a(50986),
        g = a(10528),
        f = a(2784);
      const y = ({
        accountId: e,
        poolId: t,
        collateralTypeAddress: a,
        debtChange: y,
        availableUSDCollateral: j,
      }) => {
        const [b, w] = (0, f.useReducer)(i.I, i.E),
          { data: C } = (0, l.a)(),
          { data: L, refetch: M } = (0, s.Y_)(),
          { data: S } = (0, h.p)(),
          A = (0, o.mx)(),
          { network: k } = (0, o.LN)(),
          { gasSpeed: D } = (0, u.jU)(),
          v = (0, o.yL)(),
          I = (0, p.useMutation)({
            mutationFn: async () => {
              if (!A || !k || !v) throw new Error("No signer or network");
              if (!(C && t && e && a && S)) return;
              if (y.eq(0)) return;
              const i = y.abs(),
                o = i.sub(j || r.GH);
              try {
                w({ type: "prompting" });
                const r = new m.CH(C.address, C.abi, A),
                  s = o.lte(0)
                    ? void 0
                    : r.populateTransaction.deposit(
                        g.O$.from(e),
                        S.address,
                        o.toBN()
                      ),
                  l = r.populateTransaction.burnUsd(
                    g.O$.from(e),
                    g.O$.from(t),
                    a,
                    i.toBN()
                  ),
                  u = Promise.all([s, l].filter(n._)),
                  h = await A.getAddress(),
                  [p, f] = await Promise.all([u, (0, d.o)({ provider: v })]);
                L && p.unshift(L);
                const { multicallTxn: y, gasLimit: j } = await (0, x.dI)(
                    k,
                    p,
                    "useRepay",
                    h
                  ),
                  b = (0, c.F)({ gasLimit: j, gasPrices: f, gasSpeed: D }),
                  M = await A.sendTransaction({ ...y, ...b });
                w({ type: "pending", payload: { txnHash: M.hash } }),
                  await M.wait(),
                  w({ type: "success" });
              } catch (e) {
                throw (w({ type: "error", payload: { error: e } }), e);
              }
            },
            onSuccess: () => {
              M();
            },
          });
        return {
          mutation: I,
          txnState: b,
          settle: () => w({ type: "settled" }),
          isLoading: I.isPending,
          exec: I.mutateAsync,
        };
      };
    },
    5348: (e, t, a) => {
      "use strict";
      a.d(t, { mM: () => l, Z: () => c });
      var r = a(908),
        n = a(79929),
        i = a(28145),
        o = a(50986);
      const s = [
          "function balanceOf(address) view returns (uint256)",
          "function decimals() view returns (uint8)",
        ],
        l = (e, t) => {
          const { activeWallet: a } = (0, r.Os)(),
            { network: l } = (0, r.LN)(),
            c = t || l,
            d = (0, r.eK)(c),
            u = a?.address;
          return (0, i.useQuery)({
            enabled: Boolean(u && e && d && c),
            queryKey: [
              `${c?.id}-${c?.preset}`,
              "TokenBalance",
              { accountAddress: u, tokenAddress: e },
            ],
            queryFn: async () => {
              if (!(u && e && d && c)) throw "OMFG";
              const t = new o.CH(e, s, d),
                [a, r] = await Promise.all([t.balanceOf(u), t.decimals()]);
              return { balance: a, decimals: r };
            },
            select: ({ balance: e, decimals: t }) => (0, n.wei)(e, t),
            refetchInterval: 12e4,
          });
        },
        c = (e, t) => {
          const { activeWallet: a } = (0, r.Os)(),
            { network: l } = (0, r.LN)(),
            c = t || l,
            d = (0, r.eK)(c),
            u = a?.address,
            h = (0, i.useQueryClient)();
          return (0, i.useQuery)({
            queryKey: [
              `${c?.id}-${c?.preset}`,
              "TokenBalance",
              {
                accountAddress: u,
                tokenAddresses: e
                  .map((e) => e.slice(2, 6).toLowerCase())
                  .sort(),
              },
            ],
            enabled: Boolean(u && e.length && d && c),
            queryFn: async () => {
              if (!(u && e.length && d && c)) throw "OMFG";
              return await Promise.all(
                e.map(async (t) => {
                  const a = new o.CH(t, s, d),
                    [r, n] = await Promise.all([a.balanceOf(u), a.decimals()]);
                  return (
                    h.setQueryData(
                      [
                        `${c?.id}-${c?.preset}`,
                        "TokenBalance",
                        {
                          accountAddress: u,
                          tokenAddresses: e
                            .map((e) => e.slice(2, 6).toLowerCase())
                            .sort(),
                        },
                      ],
                      { balance: r, decimals: n }
                    ),
                    { balance: r, decimals: n }
                  );
                })
              );
            },
            select: (e) =>
              e.map(({ balance: e, decimals: t }) => (0, n.wei)(e, t)),
            refetchInterval: 12e4,
          });
        };
    },
    70332: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => g });
      var r = a(17716),
        n = a(908),
        i = a(68881),
        o = a(22668),
        s = a(99),
        l = a(35834),
        c = a(95772),
        d = a(37888),
        u = a(79929),
        h = a(28145),
        x = a(50986),
        p = a(10528),
        m = a(2784);
      const g = ({
        accountId: e,
        poolId: t,
        collateralTypeAddress: a,
        collateralChange: g,
        currentCollateral: f,
      }) => {
        const [y, j] = (0, m.useReducer)(r.I, r.E),
          { data: b } = (0, o.a)(),
          { data: w, refetch: C } = (0, i.Y_)(),
          L = (0, n.mx)(),
          { gasSpeed: M } = (0, c.jU)(),
          S = (0, n.yL)(),
          { network: A } = (0, n.LN)(),
          k = (0, h.useMutation)({
            mutationFn: async () => {
              if (!L || !A || !S) throw new Error("No signer or network");
              if (b && t && a && !g.eq(0) && !f.eq(0))
                try {
                  j({ type: "prompting" });
                  const r = new x.CH(
                      b.address,
                      b.abi,
                      L
                    ).populateTransaction.delegateCollateral(
                      p.O$.from(e),
                      p.O$.from(t),
                      a,
                      f.add(g).toBN(),
                      (0, u.wei)(1).toBN()
                    ),
                    n = await L.getAddress(),
                    i = Promise.all([r]),
                    [o, c] = await Promise.all([i, (0, l.o)({ provider: S })]);
                  w && o.unshift(w);
                  const { multicallTxn: h, gasLimit: m } = await (0, d.dI)(
                      A,
                      o,
                      "useUndelegate",
                      n
                    ),
                    y = (0, s.F)({ gasLimit: m, gasPrices: c, gasSpeed: M }),
                    C = await L.sendTransaction({ ...h, ...y });
                  j({ type: "pending", payload: { txnHash: C.hash } }),
                    await C.wait(),
                    j({ type: "success" });
                } catch (e) {
                  throw (j({ type: "error", payload: { error: e } }), e);
                }
            },
            onSuccess: () => {
              C();
            },
          });
        return {
          mutation: k,
          txnState: y,
          settle: () => j({ type: "settled" }),
          isLoading: k.isPending,
          exec: k.mutateAsync,
        };
      };
    },
    42736: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => L });
      var r = a(96596),
        n = a(77528),
        i = a(37330),
        o = a(17716),
        s = a(42383),
        l = a(908),
        c = a(68881),
        d = a(22668),
        u = a(98966),
        h = a(99),
        x = a(35834),
        p = a(95772),
        m = a(34367),
        g = a(20870),
        f = a(37888),
        y = a(79929),
        j = a(28145),
        b = a(50986),
        w = a(10528),
        C = a(2784);
      const L = ({
        accountId: e,
        poolId: t,
        collateralTypeAddress: a,
        collateralChange: L,
        currentCollateral: M,
        liquidityPosition: S,
      }) => {
        const [A, k] = C.useReducer(o.I, o.E),
          { data: D } = (0, d.a)(),
          { data: v } = (0, g.b)(),
          { data: I, refetch: T } = (0, c.Y_)(),
          F = (0, l.mx)(),
          { gasSpeed: N } = (0, p.jU)(),
          E = (0, l.yL)(),
          { network: z } = (0, l.LN)(),
          { data: P } = (0, m.X)(),
          O = S?.debt.gt(0),
          H = O && S ? S.debt : (0, y.wei)(0),
          { data: $ } = (0, u.W)(),
          { approve: R, requireApproval: U } = (0, s.y)({
            contractAddress: P?.USDC,
            amount: (0, r.vz)(H.toString(), 6).mul(110).div(100),
            spender: $?.address,
          }),
          B = (0, j.useMutation)({
            mutationFn: async () => {
              if (!F || !z || !E) throw new Error("No signer or network");
              if (D && t && a && v && !L.eq(0) && !M.eq(0))
                try {
                  k({ type: "prompting" }), O && U && (await R(!1));
                  const r = [];
                  if ($) {
                    const i = new b.CH(
                      $.address,
                      $.abi,
                      F
                    ).populateTransaction.depositDebtToRepay(
                      D.address,
                      v.address,
                      e,
                      t,
                      a,
                      n.Ds
                    );
                    r.push(i);
                  }
                  const o = new b.CH(D.address, D.abi, F),
                    s = o.populateTransaction.burnUsd(
                      w.O$.from(e),
                      w.O$.from(t),
                      a,
                      H.abs().mul(10).toBN()
                    );
                  r.push(s);
                  const l = o.populateTransaction.delegateCollateral(
                    w.O$.from(e),
                    w.O$.from(t),
                    a,
                    M.add(L).toBN(),
                    (0, y.wei)(1).toBN()
                  );
                  r.push(l);
                  const c = Promise.all([...r].filter(i._)),
                    [d, u] = await Promise.all([c, (0, x.o)({ provider: E })]);
                  (d[1].requireSuccess = !1), I && d.unshift(I);
                  const p = await F.getAddress(),
                    { multicallTxn: m, gasLimit: g } = await (0, f.dI)(
                      z,
                      d,
                      "useUndelegateBase",
                      p
                    ),
                    j = (0, h.F)({ gasLimit: g, gasPrices: u, gasSpeed: N }),
                    C = await F.sendTransaction({ ...m, ...j });
                  k({ type: "pending", payload: { txnHash: C.hash } }),
                    await C.wait(),
                    k({ type: "success" });
                } catch (e) {
                  throw (k({ type: "error", payload: { error: e } }), e);
                }
            },
            onSuccess: () => {
              T();
            },
          });
        return {
          mutation: B,
          txnState: A,
          settle: () => k({ type: "settled" }),
          isLoading: B.isPending,
          exec: B.mutateAsync,
        };
      };
    },
    37888: (e, t, a) => {
      "use strict";
      a.d(t, {
        P: () => b,
        Iy: () => v,
        ZT: () => S,
        n8: () => L,
        dI: () => D,
      });
      a(5875),
        a(50509),
        a(38728),
        a(64810),
        a(43419),
        a(32825),
        a(16093),
        a(77829),
        a(60253),
        a(49225),
        a(79941),
        a(57265),
        a(25888),
        a(15840),
        a(37610),
        a(13351);
      var r = a(17123),
        n = a(42219),
        i = a(93976),
        o = a(42097),
        s = a(70011),
        l = a(6702),
        c = a(77693),
        d = a(89709),
        u = a(16658),
        h = a(32152),
        x = a(37330),
        p = a(908),
        m = a(99780),
        g = a(99268),
        f = a(10528),
        y = a(1005);
      const j =
          "true" === window.localStorage.getItem("DEBUG") ||
          "snx" === window.localStorage.DEBUG?.slice(0, 3),
        b = [
          "error InvalidArgument()",
          "error InvalidUpdateDataSource()",
          "error InvalidUpdateData()",
          "error InsufficientFee()",
          "error NoFreshUpdate()",
          "error PriceFeedNotFoundWithinRange()",
          "error PriceFeedNotFound()",
          "error StalePrice()",
          "error InvalidWormholeVaa()",
          "error InvalidGovernanceMessage()",
          "error InvalidGovernanceTarget()",
          "error InvalidGovernanceDataSource()",
          "error OldGovernanceMessage()",
          "error InvalidWormholeAddressToSet()",
        ];
      async function w({ priceIds: e, isTestnet: t }) {
        const a = new r.O(t ? n.DM : n.kw);
        return await a.getPriceFeedsUpdateData(e);
      }
      function C(e, t) {
        if (`${e}`.startsWith("0x08c379a0")) {
          const t = `0x${e.substring(10)}`,
            a = m.$.decode(["string"], t);
          return console.error(a), { name: `Revert ${a[0]}`, args: [] };
        }
        try {
          return new g.vU(Array.from(new Set([...t.abi, ...b]))).parseError(e);
        } catch (e) {
          return (
            console.error(`Error parsing failure: ${e}`),
            { name: "Unknown", args: [] }
          );
        }
      }
      const L = (e) => {
        switch (e) {
          case "cannon":
          case "optimism-mainnet":
          case "base":
          case "base-sepolia":
            return "0x4200000000000000000000000000000000000006";
          case "mainnet":
            return "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
          case "sepolia":
            return "0x7b79995e5f793a07bc00c21412e50ecae098e7f9";
          case "arbitrum":
            return "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
          case "arbitrum-sepolia":
            return "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73";
          default:
            throw new Error(`Unsupported chain ${e}`);
        }
      };
      async function M({ network: e, calls: t, label: a }) {
        const r = await (0, i.k)(e.id, e.preset),
          n = await (0, o.w)(e.id, e.preset),
          u = await (0, s.K)(e.id, e.preset),
          h = await (0, l.o)(e.id, e.preset).catch(() => {}),
          x = await (0, c.O)(e.id, e.preset),
          p = await (0, d.N)(e.id, e.preset),
          m = new g.vU(
            Array.from(
              new Set([
                ...r.abi,
                ...n.abi,
                ...u.abi,
                ...(h ? h.abi : []),
                ...x.abi,
                ...p.abi,
              ])
            )
          );
        console.log(
          `[${a}] calls`,
          t.map(({ data: e, value: t, ...a }) => {
            try {
              const { name: a, args: r } = m.parseTransaction({
                data: e,
                value: t,
              });
              if (
                Object.keys(r).filter(([e]) => `${e}` != `${parseInt(e)}`)
                  .length > 0
              ) {
                return {
                  $: a,
                  ...Object.fromEntries(
                    Object.entries(r).filter(
                      ([e]) => `${e}` != `${parseInt(e)}`
                    )
                  ),
                };
              }
              const n = Object.entries(r)
                .filter(([e]) => `${e}` == `${parseInt(e)}`)
                .map(([, e]) => e);
              return { $: a, ...n };
            } catch {
              return { $: "unknown", data: e, value: t, ...a };
            }
          })
        );
      }
      function S(e) {
        return (
          e?.error?.error?.error?.data ||
          e?.error?.error?.data ||
          e?.error?.data?.data ||
          e?.error?.data ||
          e?.data?.data ||
          e?.data
        );
      }
      function A(e) {
        try {
          const [t, a] = e.args,
            [r, n, [i]] = m.$.decode(["uint8", "uint64", "bytes32[]"], a);
          return i;
        } catch {}
      }
      async function k(e, t, a, r) {
        const n = await (0, u.C)(e.id, e.preset),
          i = new g.vU(n.abi),
          o = {
            from: a || L(e.name),
            to: n.address,
            data: i.encodeFunctionData("aggregate3Value", [
              t.map((e) => ({
                target: e.to,
                callData: e.data,
                value: e.value ? f.O$.from(e.value) : f.O$.from(0),
                requireSuccess: e.requireSuccess ?? !0,
              })),
            ]),
            value: t.reduce(
              (e, t) => (t.value ? e.add(t.value) : e),
              f.O$.from(0)
            ),
          };
        return { multicallTxn: o, gasLimit: await r.estimateGas(o), _calls: t };
      }
      const D = async (e, t, a, r) => {
        const n = (0, p.getMagicProvider)() ?? new y.r(e.rpcUrl());
        if (!(await (0, p.ZQ)(e.id, e.preset))) return await k(e, t, r, n);
        const i = await (0, h.a)(e.id, e.preset),
          o = await (0, l.o)(e.id, e.preset).catch(() => {});
        o && o.abi.forEach((e) => i.abi.push(e));
        const s = await (0, d.N)(e.id, e.preset);
        for (;;)
          try {
            return (
              j && (await M({ network: e, calls: t, label: a })),
              await k(e, t, r, n)
            );
          } catch (o) {
            console.error(o);
            let l = S(o);
            if (!l && o.transaction)
              try {
                console.log(
                  "Error is missing revert data, trying provider.call, instead of estimate gas..."
                );
                l = await n.call(o.transaction);
              } catch (e) {
                console.error(e),
                  console.log(
                    "provider.call(error.transaction) failed, trying to extract error"
                  ),
                  (l = S(o));
              }
            if (!l) throw o;
            console.log(`[${a}]`, { errorData: l });
            const c = C(l, i);
            if (!c) throw o;
            console.log(`[${a}]`, { parsedError: c });
            const d = [];
            if (
              ("OracleDataRequired" === c.name && d.push(A(c)),
              "Errors" === c.name)
            )
              for (const e of c?.args?.[0] ?? [])
                try {
                  const t = C(e, i);
                  "OracleDataRequired" === t?.name && d.push(A(t));
                } catch {}
            const u = Array.from(new Set(d));
            if (
              (console.log(`[${a}]`, { missingPriceUpdates: u }), u.length < 1)
            )
              throw o;
            const h = await w({ priceIds: u, isTestnet: e.isTestnet }),
              x = {
                from: r,
                to: s.address,
                data: new g.vU(s.abi).encodeFunctionData("updatePriceFeeds", [
                  h,
                ]),
                value: f.O$.from(u.length),
                requireSuccess: !1,
              };
            console.log(`[${a}]`, { extraPriceUpdateTxn: x }), (t = [x, ...t]);
          }
      };
      async function v(e, t, a, r, n) {
        const i = await (0, u.C)(e.id, e.preset),
          o = L(e.name),
          {
            _calls: s,
            multicallTxn: l,
            gasLimit: c,
          } = await D(
            e,
            a.filter(x._).map((e) => (e.from ? e : { ...e, from: o })),
            n,
            o
          ),
          h = await t.call({ ...l, gasLimit: c.mul(15).div(10) });
        if ("0x" === h) throw new Error(`[${n}] Call returned 0x`);
        if (l.to?.toLowerCase() === i.address.toLowerCase()) {
          const t = new g.vU(i.abi).decodeFunctionResult(
            "aggregate3Value",
            h
          )[0];
          j && console.log(`[${n}] multicall`, t);
          const a = [],
            o = await (0, d.N)(e.id, e.preset);
          t.forEach(({ returnData: e }, t) => {
            s?.[t]?.to !== o.address && a.push(e);
          });
          const l = r(a);
          return j && console.log(`[${n}] result`, l), l;
        }
        const p = r(h);
        return j && console.log(`[${n}] result`, p), p;
      }
    },
    55588: (e, t, a) => {
      "use strict";
      a.d(t, { Rx: () => s, LW: () => l, rK: () => o });
      var r = a(10528),
        n = a(30195),
        i = a(79929);
      const o = n.z.custom((e) => r.O$.isBigNumber(e)),
        s = o.transform((e) => (0, i.wei)(e, 0).toNumber()),
        l = o.transform((e) => (0, i.wei)(e));
    },
    52465: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var r = a(38035),
        n = a(59176),
        i = a(59391),
        o = a(45071),
        s = a(42219),
        l = a(52322);
      const c = ({
        size: e,
        currentCollateral: t,
        currentDebt: a,
        collateralChange: c,
        debtChange: d,
        collateralPrice: u,
      }) =>
        (0, l.jsxs)(r.k, {
          alignItems: "center",
          gap: 1.5,
          children: [
            (0, l.jsx)(n.x, {
              color: "white",
              fontSize: "lg" === e ? "20px" : "12px",
              fontWeight: "lg" === e ? "800" : "700",
              children:
                t && a
                  ? t.gt(0) && a.eq(0)
                    ? "Infinite"
                    : (0, l.jsx)(o.$, {
                        value: (0, i.Zj)(a, t.mul(u)).mul(100),
                        suffix: "%",
                      })
                  : " N/A",
            }),
            (!c?.eq(0) || !d.eq(0)) &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("span", { children: "→" }),
                  (0, l.jsx)(n.x, {
                    color: "white",
                    fontSize: "lg" === e ? "20px" : "12px",
                    fontWeight: "lg" === e ? "800" : "700",
                    children:
                      (t || s.GH).add(c).gt(0) && (a || s.GH).add(d).eq(0)
                        ? "Infinite"
                        : (0, l.jsx)(o.$, {
                            value: (0, i.Zj)(
                              (a || s.GH).add(d),
                              (t || s.GH).add(c).mul(u)
                            ).mul(100),
                            suffix: "%",
                          }),
                  }),
                ],
              }),
          ],
        });
    },
    1651: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => l });
      var r = a(38035),
        n = a(59176),
        i = a(7754),
        o = a(52322);
      const s = {
          sm: { fontSize: "12px", fontWeight: "700", lineHeight: "14px" },
          md: { fontSize: "16px", fontWeight: "400", lineHeight: "16px" },
          lg: { fontSize: "18px", fontWeight: "800", lineHeight: "32px" },
        },
        l = ({
          formatFn: e,
          value: t,
          newValue: a,
          hasChanges: l,
          "data-cy": c,
          withColor: d,
          size: u = "lg",
        }) =>
          (0, o.jsxs)(r.k, {
            gap: "1",
            alignItems: "center",
            color: "white",
            fontSize: s[u].fontSize,
            fontWeight: s[u].fontWeight,
            lineHeight: s[u].lineHeight,
            children: [
              (0, o.jsx)(n.x, {
                "data-cy": c,
                textAlign: "center",
                opacity: t.eq(0) ? "70%" : void 0,
                color:
                  d && t.gt(0) ? "green.700" : t.lt(0) ? "red.700" : "gray.50",
                whiteSpace: "nowrap",
                children: e(t),
              }),
              l && !t.eq(a)
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(i.m, {}),
                      (0, o.jsx)(n.x, {
                        textAlign: "center",
                        opacity: a.eq(0) ? "70%" : void 0,
                        color:
                          d && a.gt(0)
                            ? "green.700"
                            : a.lt(0)
                            ? "red.700"
                            : "gray.50",
                        whiteSpace: "nowrap",
                        children: e(a),
                      }),
                    ],
                  })
                : null,
            ],
          });
    },
    21849: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => u });
      var r = a(38035),
        n = a(74409),
        i = a(74008),
        o = a(59176),
        s = a(47443),
        l = a(84626),
        c = a(25042),
        d = a(52322);
      function u({
        title: e,
        subline: t,
        alertText: a,
        summary: u,
        onClose: h,
      }) {
        return (0, d.jsxs)(r.k, {
          flexDir: "column",
          gap: "6",
          borderColor: "gray.900",
          rounded: "base",
          height: "fit-content",
          children: [
            e &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)(n.X, {
                    color: "gray.50",
                    fontSize: "20px",
                    fontWeight: 700,
                    children: e,
                  }),
                  (0, d.jsx)(i.i, {}),
                ],
              }),
            t &&
              (0, d.jsx)(o.x, {
                color: "white",
                fontSize: "14px",
                fontWeight: 400,
                children: t,
              }),
            (0, d.jsxs)(s.b, {
              colorScheme: "green",
              rounded: "base",
              borderRadius: "6px",
              children: [
                (0, d.jsx)(r.k, {
                  bg: "green.500",
                  p: "1",
                  rounded: "full",
                  mr: "2",
                  children: (0, d.jsx)(c.nQ, {
                    w: "12px",
                    h: "12px",
                    color: "green.900",
                  }),
                }),
                (0, d.jsx)(o.x, {
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  children: a,
                }),
              ],
            }),
            u,
            (0, d.jsx)(l.z, { w: "100%", onClick: h, children: "Continue" }),
          ],
        });
      }
    },
    81826: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => i });
      var r = a(38035),
        n = a(52322);
      const i = ({ items: e, ...t }) =>
        (0, n.jsx)(r.k, {
          p: 3.5,
          borderRadius: "4px",
          background: "#1F1F34",
          flexDir: "column",
          gap: 3,
          ...t,
          children: e.map(({ value: e, label: t }, a) =>
            (0, n.jsxs)(
              r.k,
              {
                fontWeight: 700,
                fontSize: "12px",
                flex: 1,
                width: "100%",
                children: [
                  (0, n.jsx)(r.k, {
                    alignItems: "center",
                    justify: "flex-start",
                    textAlign: "left",
                    flexGrow: 1,
                    children: t,
                  }),
                  (0, n.jsx)(r.k, {
                    alignItems: "center",
                    justify: "flex-end",
                    textAlign: "right",
                    flexGrow: 1,
                    children: e,
                  }),
                ],
              },
              a
            )
          ),
        });
    },
    78361: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { bootstrap: () => Ji });
      var r = a(17029),
        n = a(2784),
        i = a(39857),
        o = a(74465),
        s = a(50019),
        l = a(17150),
        c = a(84586),
        d = a(39279);
      const u = {
          "green-cyan": {
            500: "linear(to-tr, green.500, cyan.500)",
            600: "linear(to-tr, green.600, cyan.600)",
            700: "linear(to-tr, green.700, cyan.800)",
          },
          grey: { 900: "linear(to-tr, grey.900, blackAlpha.900)" },
          dark: { 500: "linear(to-tr, #171923, #141414)" },
          "pink-purple": {
            500: "linear(to-tr, pink.500, purple.500)",
            600: "linear(to-tr, pink.600, purple.600)",
            700: "linear(to-tr, pink.700, purple.800)",
          },
          "pink-blue": {
            500: "linear(to-tr, pink.500, blue.500)",
            600: "linear(to-tr, pink.600, blue.600)",
            700: "linear(to-tr, pink.700, blue.800)",
          },
          "pink-cyan": {
            500: "linear(to-tr, pink.500, cyan.500)",
            600: "linear(to-tr, pink.600, cyan.600)",
            700: "linear(to-tr, pink.700, cyan.800)",
          },
          orange: {
            500: "linear(to-tr, orange.500, orange.300)",
            600: "linear(to-tr, orange.600, orange.400)",
            700: "linear(to-tr, orange.700, orange.500)",
          },
        },
        h = {
          defaultProps: { colorScheme: "cyan" },
          variants: {
            solid: (0, c.k0)((e) => {
              const { colorScheme: t } = e;
              if ("gray" === t) {
                const t = (0, d.x)("gray.100", "whiteAlpha.200")(e);
                return {
                  borderRadius: "base",
                  color: (0, d.x)("black", "whiteAlpha.900")(e),
                  bg: t,
                  _hover: {
                    bg: (0, d.x)("gray.200", "whiteAlpha.300")(e),
                    _disabled: { bg: t },
                  },
                  _active: { bg: (0, d.x)("gray.300", "whiteAlpha.400")(e) },
                };
              }
              if ("cyan" === t)
                return {
                  borderRadius: "base",
                  bgGradient: u["green-cyan"][500],
                  color: "black",
                  _hover: {
                    bgGradient: u["green-cyan"][600],
                    _disabled: { background: u["green-cyan"][500] },
                  },
                  _active: { bgGradient: u["green-cyan"][700] },
                };
              const a = `${t}.500`,
                r = `${t}.600`,
                n = `${t}.700`,
                i = (0, d.x)(a, `${t}.600`)(e);
              return {
                borderRadius: "base",
                bg: i,
                color: (0, d.x)("white", "white")(e),
                _hover: {
                  bg: (0, d.x)(r, `${t}.500`)(e),
                  _disabled: { bg: i },
                },
                _active: { bg: (0, d.x)(n, `${t}.400`)(e) },
              };
            }),
            outline: (e) =>
              "gray" === e.colorScheme || "grey" === e.colorScheme
                ? {
                    color: "white",
                    borderColor: "gray.900",
                    _hover: { bg: "whiteAlpha.200" },
                    _active: { bg: "whiteAlpha.400" },
                    borderRadius: "base",
                  }
                : {
                    color: "cyan.500",
                    border: "1px solid",
                    borderColor: "cyan.500",
                    _hover: { bg: "rgb(0, 209, 255, 0.12)" },
                    _active: { bg: "rgb(0, 209, 255, 0.24)" },
                    borderRadius: "base",
                  },
            ghost: {
              color: "cyan.500",
              _hover: { bg: "rgb(0, 209, 255, 0.12)" },
              _active: { bg: "rgb(0, 209, 255, 0.24)" },
              borderRadius: "base",
            },
          },
        },
        x = (0, o.B1)({
          useSystemColorMode: !1,
          initialColorMode: "dark",
          colors: {
            gray: {
              50: "#F6F6F6",
              100: "#F1F1F1",
              200: "#DDDDDF",
              300: "#C3C3C9",
              400: "#AAAAB2",
              500: "#91919B",
              600: "#7A7A85",
              700: "#63636E",
              800: "#4D4D57",
              900: "#303037",
            },
            red: {
              50: "#FFEDEF",
              100: "#FFC4CB",
              200: "#FF9BA7",
              300: "#FF7384",
              400: "#FF4A60",
              500: "#E4364B",
              600: "#C53030",
              700: "#9B2C2C",
              800: "#822727",
              900: "#63171B",
            },
            orange: {
              50: "#FFF3EB",
              100: "#FFD8BE",
              200: "#FFBE92",
              300: "#FFA365",
              400: "#FF9A54",
              500: "#FC8738",
              600: "#DC732D",
              700: "#96420A",
              800: "#743002",
              900: "#522100",
            },
            yellow: {
              50: "#FFFBEF",
              100: "#FFF2CA",
              200: "#FFF5A8",
              300: "#FFF889",
              400: "#FFF458",
              500: "#FAE527",
              600: "#EAD516",
              700: "#B5932B",
              800: "#776017",
              900: "#55430D",
            },
            green: {
              50: "#EDFFF9",
              100: "#C3FFEC",
              200: "#9AE6B4",
              300: "#72FFD3",
              400: "#47FAC2",
              500: "#34EDB3",
              600: "#2BD39F",
              700: "#11946B",
              800: "#077250",
              900: "#015037",
            },
            blue: {
              50: "#EDF6FF",
              100: "#C4E2FF",
              200: "#9CCFFF",
              300: "#73BBFF",
              400: "#479EF0",
              500: "#3182CE",
              600: "#1F68AC",
              700: "#11508A",
              800: "#073968",
              900: "#012546",
            },
            cyan: {
              50: "#E5FAFF",
              100: "#B7F2FF",
              200: "#8AEAFF",
              300: "#5CE1FF",
              400: "#2ED9FF",
              500: "#00D1FF",
              600: "#00B0D6",
              700: "#008EAD",
              800: "#006D85",
              900: "#004B5C",
            },
            purple: {
              50: "#F0EEFF",
              100: "#CFC9FF",
              200: "#AEA4FF",
              300: "#8D7EFF",
              400: "#6B59FF",
              500: "#5744EA",
              600: "#402FC8",
              700: "#2D1EA6",
              800: "#1D1084",
              900: "#10104E",
            },
            pink: {
              50: "#FDE8FF",
              100: "#F9B6FF",
              200: "#F583FF",
              300: "#F471FF",
              400: "#EB46FF",
              500: "#EE2EFF",
              600: "#BE02CE",
              700: "#8D0099",
              800: "#6E0077",
              900: "#4E0055",
            },
            navy: {
              50: "#522ED1",
              100: "#401FB7",
              200: "#3719A6",
              300: "#2F1298",
              400: "#1F0777",
              500: "#150942",
              600: "#0E052F",
              700: "#0B0B22",
              800: "#0A0A25",
              900: "#06061B",
            },
            error: "#FF4A60",
            success: "#34EDB3",
            warning: "#FC8738",
          },
          shadows: { outline: "0 0 0 3px rgba(0, 209, 255, 1)" },
          fonts: {
            heading:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            display:
              '"GT America Condensed", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: '"GT America Mono", SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          },
          components: {
            Popover: {
              variants: {
                responsive: { popper: { maxWidth: "unset", width: "unset" } },
              },
            },
            Button: h,
            Input: {
              defaultProps: {
                focusBorderColor: "cyan.500",
                errorBorderColor: "red.500",
              },
            },
            Select: {
              defaultProps: {
                focusBorderColor: "cyan.500",
                iconColor: "cyan.500",
                errorBorderColor: "red.500",
              },
            },
            NumberInput: {
              defaultProps: {
                focusBorderColor: "cyan.500",
                errorBorderColor: "red.500",
              },
            },
            Alert: {
              defaultProps: { variant: "left-accent" },
              variants: {
                "left-accent": (e) => ({
                  container: {
                    bg: `${e.colorScheme}.900`,
                    borderInlineStartColor: `${e.colorScheme}.500`,
                  },
                }),
                solid: (e) => ({
                  icon: { color: "white" },
                  container: { bg: `${e.colorScheme}.500`, color: "white" },
                }),
              },
            },
            Textarea: {
              defaultProps: {
                focusBorderColor: "cyan.500",
                colorScheme: "cyan",
                errorBorderColor: "red.500",
              },
            },
            Skeleton: {
              defaultProps: { startColor: "gray.900", endColor: "gray.800" },
            },
            Checkbox: {
              defaultProps: { colorScheme: "cyan" },
              baseStyle: {
                control: {
                  borderColor: "cyan.500",
                  _checked: {
                    bg: "cyan.500",
                    borderColor: "cyan.500",
                    _hover: { bg: "cyan.600", borderColor: "cyan.600" },
                  },
                  _invalid: { borderColor: "red.500" },
                  _disabled: { _hover: { borderColor: "transparent" } },
                  _hover: { borderColor: "cyan.600" },
                },
              },
            },
            Radio: {
              defaultProps: { colorScheme: "cyan" },
              baseStyle: {
                control: {
                  borderColor: "cyan.500",
                  _checked: {
                    bg: "cyan.500",
                    borderColor: "cyan.500",
                    _hover: { bg: "cyan.600", borderColor: "cyan.600" },
                  },
                  _invalid: { borderColor: "red.500" },
                  _disabled: { _hover: { borderColor: "transparent" } },
                  _hover: { borderColor: "cyan.600" },
                },
              },
            },
            Badge: {
              defaultProps: { colorScheme: "cyan" },
              variants: {
                subtle: (e) => ({
                  color: `${e.colorScheme}.500`,
                  border: "0px",
                  display: "flex",
                  alignItems: "center",
                }),
                solid: (e) => ({
                  background: `${e.colorScheme}.500`,
                  color: "black",
                }),
                outline: (e) => ({
                  borderColor: `${e.colorScheme}.500`,
                  color: `${e.colorScheme}.500`,
                  boxShadow: "unset",
                }),
              },
            },
            Tag: {
              defaultProps: { colorScheme: "cyan", variant: "solid" },
              variants: {
                solid: (e) => ({
                  container: {
                    background: `${e.colorScheme}.500`,
                    color: "black",
                  },
                }),
              },
            },
            Accordion: {
              baseStyle: {
                container: {
                  borderColor: "gray.900",
                  borderWidth: "1px",
                  borderRadius: "base",
                },
              },
            },
            Progress: {
              defaultProps: {
                colorScheme: "cyan",
                variant: "solid",
                borderRadius: "full",
              },
              variants: {
                solid: (e) => ({
                  filledTrack: {
                    background: `${e.colorScheme}.500`,
                    borderRadius: "full",
                  },
                  track: { borderRadius: "full" },
                }),
              },
            },
            Tabs: {
              defaultProps: { colorScheme: "cyan" },
              variants: {
                "solid-rounded": (e) => ({
                  tab: {
                    _selected: {
                      background: `${e.colorScheme}.500`,
                      color: "black",
                    },
                    color: `${e.colorScheme}.500`,
                  },
                }),
                "soft-rounded": {
                  tab: {
                    _selected: {
                      background: "whiteAlpha.300",
                      color: "cyan.500",
                    },
                    color: "cyan.500",
                  },
                },
              },
            },
            Tooltip: {
              baseStyle: {
                textAlign: "center",
                bg: "gray.900",
                color: "white.500",
                "--popper-arrow-bg": "var(--chakra-colors-gray-900)",
              },
            },
            Switch: {
              defaultProps: { colorScheme: "cyan" },
              baseStyle: { track: { _checked: { background: "cyan.500" } } },
            },
            Spinner: { baseStyle: { color: "cyan.500" } },
            Menu: {
              parts: ["button", "list", "item"],
              baseStyle: {
                button: {
                  borderRadius: "base",
                  color: "white",
                  span: { display: "flex", alignItems: "center", px: 2 },
                  height: "100%",
                },
                list: {
                  mt: 2,
                  bgColor: "navy.900",
                  padding: 0,
                  border: "none",
                  borderRadius: "md",
                  py: 0,
                },
                item: {
                  bgColor: "blackAlpha.300",
                  color: "whiteAlpha.900",
                  p: 3,
                  _hover: { bgColor: "whiteAlpha.400" },
                  _active: { bgColor: "navy.900" },
                  _first: {
                    borderTopLeftRadius: "md",
                    borderTopRightRadius: "md",
                  },
                  _last: {
                    borderBottomLeftRadius: "md",
                    borderBottomRightRadius: "md",
                  },
                  _focus: { bgColor: "blackAlpha.400" },
                },
              },
            },
          },
          gradients: u,
          textStyles: {
            "heading-4xl": {
              fontSize: { base: "60px", lg: "72px" },
              fontFamily: "heading",
              lineHeight: { base: "57.6px", lg: "72px" },
              fontWeight: 700,
            },
            "heading-3xl": {
              fontSize: { base: "48px", md: "60px" },
              fontFamily: "heading",
              lineHeight: { base: "57.6px", md: "72px", lg: "60px" },
              fontWeight: 700,
            },
            "heading-2xl": {
              fontSize: { base: "36px", md: "48px" },
              fontFamily: "heading",
              lineHeight: { base: "120%" },
              fontWeight: 700,
            },
            "heading-xl": {
              fontSize: { base: "30px", lg: "36px" },
              fontFamily: "heading",
              lineHeight: { base: "36px", lg: "120%" },
              fontWeight: 700,
            },
            "heading-lg": {
              fontSize: { base: "24px", lg: "30px" },
              fontFamily: "heading",
              lineHeight: { base: "28.8px", lg: "36px" },
              fontWeight: 700,
            },
            "heading-md": {
              fontSize: { base: "20px", lg: "24px" },
              fontFamily: "heading",
              lineHeight: "24px",
              fontWeight: 700,
            },
            "heading-sm": {
              fontSize: "16px",
              fontFamily: "heading",
              lineHeight: "19.2px",
              fontWeight: 700,
            },
            "heading-xs": {
              fontSize: "14px",
              fontFamily: "heading",
              lineHeight: "16.8px",
              fontWeight: 700,
            },
          },
          sizes: {
            px: "1px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem",
            max: "max-content",
            min: "min-content",
            full: "100%",
            "3xs": "14rem",
            "2xs": "16rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            "8xl": "90rem",
            container: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
          },
          styles: { global: { body: { bg: "navy.900" } } },
        });
      var p = a(28165),
        m = a(52322);
      const g = () =>
        (0, m.jsx)(p.xB, {
          styles:
            "\n      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200..700&display=swap');\n      @font-face {\n        font-family: 'GT America Condensed';\n        font-style: normal;\n        font-display: swap;\n        font-weight: 700;\n        src: local('GT America Condensed'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold.woff2') format('woff2'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold.woff') format('woff'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold.otf') format('opentype');\n      }\n      @font-face {\n        font-family: 'GT America Condensed';\n        font-style: italic;\n        font-display: swap;\n        font-weight: 700;\n        src: local('GT America Condensed'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold%20Italic.woff2')\n            format('woff2'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold%20Italic.woff')\n            format('woff'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold%20Italic.otf')\n            format('opentype');\n      }\n      @font-face {\n        font-family: 'GT America Condensed';\n        font-style: normal;\n        font-display: swap;\n        font-weight: 100;\n        src: local('GT America Condensed'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin.woff2') format('woff2'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin.woff') format('woff'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin.otf') format('opentype');\n      }\n      @font-face {\n        font-family: 'GT America Condensed';\n        font-style: italic;\n        font-display: swap;\n        font-weight: 100;\n        src: local('GT America Condensed'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin%20Italic.woff2')\n            format('woff2'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin%20Italic.woff')\n            format('woff'),\n          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin%20Italic.otf')\n            format('opentype');\n      }\n      @font-face {\n        font-family: 'GT America Mono';\n        font-style: normal;\n        font-display: swap;\n        font-weight: 700;\n        src: local('GT America Mono'),\n          url('https://fonts.synthetix.io/GT%20America%20Mono%20Bold.woff2') format('woff2'),\n          url('https://fonts.synthetix.io/GT%20America%20Mono%20Bold.woff') format('woff'),\n          url('https://fonts.synthetix.io/GT%20America%20Mono%20Bold.otf') format('opentype');\n      }\n      @font-face {\n        font-family: 'Lustra Text';\n        font-style: normal;\n        font-display: swap;\n        font-weight: 400;\n        src: local('Lustra Text'),\n          url('https://fonts.synthetix.io/Lustra%20Text%20Thin.otf') format('opentype');\n      }\n    ",
        });
      var f = a(42219),
        y = a(28145),
        j = a(32684),
        b = a(95772),
        w = a(66901),
        C = a(26468),
        L = a(19433),
        M = a(54326),
        S = a(97217),
        A = a(59176),
        k = a(28535),
        D = a(97010),
        v = a(11082),
        I = a(84626);
      const T = ({ defaultOpen: e = !0 }) => {
        const [t, a] = (0, n.useState)(e),
          [r, o] = (0, n.useState)(!1);
        return (0, m.jsxs)(w.u_, {
          isOpen: t,
          onClose: () => {},
          children: [
            (0, m.jsx)(C.Z, {}),
            (0, m.jsxs)(L.h, {
              bgGradient: x.gradients.dark[500],
              pt: "10",
              pb: "3",
              borderWidth: "1px",
              borderColor: "gray.900",
              "data-cy": "transaction modal",
              children: [
                (0, m.jsx)(M.x, {
                  py: 0,
                  textAlign: "center",
                  children: "Synthetix Terms of Service",
                }),
                (0, m.jsxs)(S.f, {
                  fontSize: "xs",
                  color: "gray.600",
                  children: [
                    (0, m.jsx)(A.x, {
                      fontSize: "sm",
                      children:
                        "By clicking “I Agree” below, you agree to be bound by the terms of this Agreement. As such, you fully understand that:",
                    }),
                    (0, m.jsx)(k.xu, {
                      onScroll: (e) => {
                        const t = e.currentTarget;
                        t.scrollTop + 10 >= t.scrollHeight - t.offsetHeight
                          ? o(!0)
                          : o(!1);
                      },
                      as: "div",
                      my: 2,
                      py: 3,
                      height: "350px",
                      overflow: "auto",
                      overflowX: "scroll",
                      sx: {
                        "::-webkit-scrollbar": { display: "block" },
                        "::-webkit-scrollbar-track": {
                          backgroundColor: "transparent",
                        },
                        "::-webkit-scrollbar-track-piece": {
                          backgroundColor: "transparent",
                        },
                        "::-webkit-scrollbar-corner": {
                          backgroundColor: "transparent",
                        },
                      },
                      children: (0, m.jsx)(D.QI, {
                        children: (0, m.jsxs)(A.x, {
                          fontSize: "14px",
                          children: [
                            (0, m.jsxs)(D.HC, {
                              children: [
                                (0, m.jsxs)(v.r, {
                                  href: "https://synthetix.io/",
                                  target: "_blank",
                                  color: "cyan.500",
                                  _focusVisible: { outline: "none" },
                                  children: ["Synthetix", " "],
                                }),
                                "is a blockchain-based decentralized finance project. You are participating at your own risk.",
                              ],
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "Synthetix is offered for use “as is” and without any guarantees regarding security. The protocol is made up of immutable code and can be accessed through a variety of user interfaces.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "No central entity operates the Synthetix protocol. Decisions related to the protocol are governed by a dispersed group of participants who collectively govern and maintain the protocol.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "Synthetix DAO does not unilaterally offer, maintain, operate, administer, or control any trading interfaces. The only user interfaces maintained by Synthetix DAO are the governance and liquidity interfaces herein.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "The rules and parameters associated with the Synthetix protocol and Synthetix DAO governance are subject to change at any time.",
                            }),
                            (0, m.jsxs)(D.HC, {
                              mt: 2,
                              children: [
                                "Your use of Synthetix is conditioned upon your acceptance to be bound by the Synthetix Term of Use, which can be found",
                                " ",
                                (0, m.jsx)(v.r, {
                                  as: i.rU,
                                  to: "/terms",
                                  target: "_blank",
                                  color: "cyan.500",
                                  _focusVisible: { outline: "none" },
                                  children: "here",
                                }),
                                ".",
                              ],
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "The laws that apply to your use of Synthetix may vary based upon the jurisdiction in which you are located. We strongly encourage you to speak with legal counsel in your jurisdiction if you have any questions regarding your use of Synthetix.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "By entering into this agreement, you are not agreeing to enter into a partnership. You understand that Synthetix is a decentralized protocol provided on an “as is” basis.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "You hereby release all present and future claims against Synthetix DAO related to your use of the protocol, the SNX token, SNX DAO governance, and any other facet of the protocol.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "You agree to indemnify and hold harmless SNX DAO and its affiliates for any costs arising out of or relating to your use of the Synthetix protocol.",
                            }),
                            (0, m.jsx)(D.HC, {
                              mt: 2,
                              children:
                                "You are not accessing the protocol from Burma (Myanmar), Cuba, Iran, Sudan, Syria, the Western Balkans, Belarus, Côte d’Ivoire, Democratic Republic of the Congo, Iraq, Lebanon, Liberia, Libya, North Korea, Russia, certain sanctioned areas of Ukraine, Somalia, Venezuela, Yemen, or Zimbabwe (collectively, “Prohibited Jurisdictions”), or any other jurisdiction listed as a Specially Designated National by the United States Office of Foreign Asset Control (“OFAC”).",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, m.jsx)(I.z, {
                  variant: "outline",
                  _focusVisible: { outline: "none" },
                  my: 4,
                  mx: 6,
                  onClick: () => {
                    r &&
                      (localStorage.setItem(
                        f.sO.TERMS_CONDITIONS_ACCEPTED,
                        JSON.stringify(!0)
                      ),
                      a(!1));
                  },
                  isDisabled: !r,
                  children: "I agree",
                }),
              ],
            }),
          ],
        });
      };
      var F = a(73557),
        N = a(81540),
        E = a(38035),
        z = a(17190),
        P = a(27234),
        O = a(10625),
        H = a(67046),
        $ = a(99058),
        R = a(17383),
        U = a(74008),
        B = a(39415),
        W = a(41098),
        Z = a(32899),
        q = a(82554),
        V = a(71679),
        G = a(908),
        _ = a(96596);
      const Q = (e, t) => {
        "undefined" != typeof window &&
          window.localStorage.setItem(e, JSON.stringify(t));
      };
      function Y(e, t) {
        const [a, r] = (0, n.useState)(() => {
          const a = (function (e) {
            if ("undefined" != typeof window) {
              const t = window.localStorage.getItem(e);
              try {
                if (null != t) return JSON.parse(t);
              } catch (e) {
                console.error(e);
              }
            }
            return null;
          })(e);
          return null != a ? a : t;
        });
        return [
          a,
          (t) => {
            const n = t instanceof Function ? t(a) : t;
            r(n), Q(e, n);
          },
        ];
      }
      var K = a(45647),
        X = a(41330),
        J = a(42097);
      function ee(e) {
        const { network: t } = (0, G.LN)(),
          a = e || t;
        return (0, y.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "AccountProxy"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw new Error("OMFG");
            return (0, J.w)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var te = a(22668),
        ae = a(16658);
      function re(e) {
        const { network: t } = (0, G.LN)(),
          a = e || t;
        return (0, y.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "Multicall3"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw new Error("OMFG");
            return (0, ae.C)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var ne = a(63201),
        ie = a(50986);
      function oe() {
        const { activeWallet: e } = (0, G.Os)(),
          { network: t } = (0, G.LN)(),
          a = (0, G.yL)(),
          { data: r } = ee(),
          { data: n } = re(),
          i = e?.address;
        return (0, y.useQuery)({
          queryKey: [
            `${t?.id}-${t?.preset}`,
            "Accounts",
            { walletAddress: i },
            { contractsHash: (0, ne.K)([r, n]) },
          ],
          enabled: Boolean(a && i && r && n),
          queryFn: async function () {
            if (!(a && i && r && n)) throw "OMFG";
            const t = new ie.CH(r.address, r.abi, a),
              o = new ie.CH(n.address, n.abi, a),
              s = await t.balanceOf(e.address);
            if (s.eq(0)) return [];
            const l = Array.from(Array(s.toNumber()).keys()).map((a) => ({
                target: r.address,
                callData: t.interface.encodeFunctionData(
                  "tokenOfOwnerByIndex",
                  [e.address, a]
                ),
              })),
              { returnData: c } = await o.callStatic.aggregate(l);
            return c
              .map(
                (e) =>
                  t.interface.decodeFunctionResult("tokenOfOwnerByIndex", e)[0]
              )
              .map((e) => e.toString());
          },
          placeholderData: [],
        });
      }
      var se = a(12944);
      const le = G.g5.filter(({ isSupported: e, isTestnet: t }) => e && !t),
        ce = G.g5.filter(({ isSupported: e, isTestnet: t }) => e && t);
      function de() {
        const [e, t] = (0, n.useState)("Copy"),
          {
            activeWallet: a,
            walletsInfo: r,
            connect: o,
            disconnect: s,
          } = (0, G.Os)(),
          { network: l, setNetwork: c } = (0, G.LN)(),
          { data: d, isPending: u, isFetching: h } = oe(),
          x = (function () {
            const { data: e } = (0, te.a)(),
              t = (0, G.mx)(),
              { network: a } = (0, G.LN)(),
              r = (0, y.useQueryClient)();
            return {
              enabled: Boolean(a && e),
              mutation: (0, y.useMutation)({
                mutationFn: async function () {
                  try {
                    if (!e || !t) throw "OMFG";
                    const n = new ie.CH(e.address, e.abi, t),
                      i = await n["createAccount()"](),
                      o = await i.wait();
                    let s;
                    return (
                      await r.invalidateQueries({
                        queryKey: [`${a?.id}-${a?.preset}`, "Accounts"],
                      }),
                      o.logs.forEach((e) => {
                        if (
                          e.topics[0] ===
                          n.interface.getEventTopic("AccountCreated")
                        ) {
                          const t = n.interface.decodeEventLog(
                            "AccountCreated",
                            e.data,
                            e.topics
                          )?.accountId;
                          s = t?.toString();
                        }
                      }),
                      [s]
                    );
                  } catch (e) {
                    throw (console.error(e), e);
                  }
                },
              }),
            };
          })(),
          [p, g] = Y(f.dA.SHOW_TESTNETS, !1),
          [j] = (0, i.lr)(),
          b = (0, F.s0)(),
          { pathname: w } = (0, F.TH)();
        (0, n.useEffect)(() => {
          if (!u && !h)
            if (d?.length) {
              const e = j.get("accountId");
              e &&
                !d?.includes(e) &&
                (j.set("accountId", d[0]),
                b({ pathname: w, search: j.toString() }, { replace: !0 }));
            } else {
              j.get("accountId") &&
                (j.delete("accountId"),
                b({ pathname: w, search: j.toString() }, { replace: !0 }));
            }
        }, [d, u, h, j, b, w]),
          (0, n.useEffect)(() => {
            if (!r) {
              const e = localStorage.getItem("connectedWallets");
              e &&
                o({ autoSelect: { disableModals: !0, label: JSON.parse(e) } });
            }
            r &&
              localStorage.setItem("connectedWallets", JSON.stringify(r.label));
          }, [r, o, b, w]),
          (0, n.useEffect)(() => {
            if (!j.get("accountId") && d?.length) {
              const e = localStorage.getItem("accountId");
              e && d.find((t) => String(t) === e)
                ? j.set("accountId", e)
                : j.set("accountId", d[0]),
                b({ pathname: w, search: j.toString() }, { replace: !0 });
            }
          }, [d, b, w, j]),
          (0, n.useEffect)(() => {
            const e = j.get("accountId");
            e && localStorage.setItem("accountId", e);
          }, [j]);
        const C = !a,
          L = a && !l;
        return (0, m.jsxs)(E.k, {
          children: [
            (0, m.jsxs)(O.v, {
              children: [
                (0, m.jsx)(H.j, {
                  as: I.z,
                  variant: "outline",
                  colorScheme: "gray",
                  sx: { "> span": { display: "flex", alignItems: "center" } },
                  mr: 1,
                  px: 3,
                  children: (0, m.jsx)(G.dF, {
                    filter: l?.isTestnet ? "grayscale(1)" : "",
                    networkId: C ? 8453 : L ? 0 : l?.id,
                  }),
                }),
                (0, m.jsxs)($.q, {
                  border: "1px",
                  borderColor: "gray.900",
                  children: [
                    le.map(({ id: e, preset: t, label: a }) =>
                      (0, m.jsxs)(
                        R.s,
                        {
                          onClick: () => c(e),
                          isDisabled:
                            !!window.$chainId && window.$chainId !== e,
                          children: [
                            (0, m.jsx)(G.dF, { networkId: e, size: "20px" }),
                            (0, m.jsx)(A.x, {
                              variant: "nav",
                              ml: 2,
                              children: a,
                            }),
                          ],
                        },
                        `${e}-${t}`
                      )
                    ),
                    p && (0, m.jsx)(U.i, { color: "gray.900" }),
                    (0, m.jsx)(B._, {
                      children: (0, m.jsxs)(E.k, {
                        py: 4,
                        px: 3,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                          (0, m.jsx)(A.x, {
                            fontSize: "14px",
                            fontFamily: "heading",
                            lineHeight: "20px",
                            children: "Show Testnets",
                          }),
                          (0, m.jsx)(W.r, {
                            mr: 2,
                            size: "sm",
                            color: "gray.900",
                            colorScheme: "gray",
                            isChecked: p,
                            onChange: () => g(!p),
                          }),
                        ],
                      }),
                    }),
                    (p ? ce : []).map(({ id: e, preset: t, label: a }) =>
                      (0, m.jsxs)(
                        R.s,
                        {
                          onClick: () => c(e),
                          isDisabled:
                            !!window.$chainId && window.$chainId !== e,
                          children: [
                            (0, m.jsx)(G.dF, {
                              filter: "grayscale(1)",
                              networkId: e,
                              size: "20px",
                            }),
                            (0, m.jsx)(A.x, {
                              variant: "nav",
                              ml: 2,
                              children: a,
                            }),
                          ],
                        },
                        `${e}-${t}`
                      )
                    ),
                  ],
                }),
              ],
            }),
            a
              ? (0, m.jsxs)(O.v, {
                  placement: "bottom-end",
                  children: [
                    (0, m.jsxs)(H.j, {
                      as: I.z,
                      variant: "outline",
                      colorScheme: "gray",
                      ml: 2,
                      height: 10,
                      py: "6px",
                      px: "9.5px",
                      whiteSpace: "nowrap",
                      "data-cy": "wallet button",
                      children: [
                        (0, m.jsx)(V.o, { color: "white" }),
                        (0, m.jsx)(A.x, {
                          as: "span",
                          ml: 1,
                          color: "white",
                          fontWeight: 700,
                          fontSize: "xs",
                          userSelect: "none",
                          "data-cy": "short wallet address",
                          children: a.ens?.name || (0, _.i_)(a.address),
                        }),
                      ],
                    }),
                    (0, m.jsx)($.q, {
                      children: (0, m.jsx)(E.k, {
                        border: "1px solid",
                        rounded: "base",
                        borderColor: "gray.900",
                        w: "370px",
                        _hover: { bg: "navy.700" },
                        backgroundColor: "navy.700",
                        opacity: 1,
                        p: "4",
                        children: (0, m.jsxs)(E.k, {
                          flexDir: "column",
                          w: "100%",
                          gap: "2",
                          children: [
                            (0, m.jsxs)(E.k, {
                              justifyContent: "space-between",
                              children: [
                                (0, m.jsxs)(A.x, {
                                  fontSize: "14px",
                                  color: "gray.500",
                                  children: ["Connected with ", r?.label],
                                }),
                                (0, m.jsx)(I.z, {
                                  onClick: (e) => {
                                    e.stopPropagation(),
                                      r &&
                                        (s(r),
                                        localStorage.removeItem(
                                          "connectedWallets"
                                        ));
                                  },
                                  size: "xs",
                                  variant: "outline",
                                  colorScheme: "gray",
                                  color: "white",
                                  children: "Disconnect",
                                }),
                              ],
                            }),
                            (0, m.jsxs)(A.x, {
                              fontWeight: 700,
                              color: "white",
                              fontSize: "16px",
                              children: [
                                (0, _.i_)(a.address),
                                " ",
                                (0, m.jsx)(se.u, {
                                  label: e,
                                  closeOnClick: !1,
                                  children: (0, m.jsx)(K.T, {
                                    ml: "2",
                                    onClick: () => {
                                      navigator.clipboard.writeText(a.address),
                                        t("Copied"),
                                        setTimeout(() => {
                                          t("Copy");
                                        }, 1e4);
                                    },
                                  }),
                                }),
                              ],
                            }),
                            (0, m.jsxs)(E.k, {
                              flexDir: "column",
                              p: "2",
                              border: "1px solid",
                              borderColor: "gray.900",
                              rounded: "base",
                              gap: "2",
                              children: [
                                (0, m.jsxs)(E.k, {
                                  w: "100%",
                                  justifyContent: "space-between",
                                  children: [
                                    (0, m.jsx)(A.x, {
                                      fontWeight: 400,
                                      fontSize: "14px",
                                      children: "Account(s)",
                                    }),
                                    (0, m.jsx)(v.r, {
                                      href: "/#/account/settings",
                                      children: (0, m.jsx)(Z.h, {
                                        variant: "outline",
                                        colorScheme: "gray",
                                        size: "xs",
                                        icon: (0, m.jsx)(X.e, {}),
                                        "aria-label": "account settings",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, m.jsx)(E.k, {
                                  "data-cy": "accounts list",
                                  flexDir: "column",
                                  children: d?.map((e) =>
                                    (0, m.jsxs)(
                                      A.x,
                                      {
                                        display: "flex",
                                        alignItems: "center",
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        p: "3",
                                        "data-cy": "account id",
                                        "data-account-id": e,
                                        _hover: { bg: "whiteAlpha.300" },
                                        onClick: (t) => {
                                          t.stopPropagation(),
                                            j.set("accountId", e),
                                            b({
                                              pathname: w,
                                              search: j.toString(),
                                            });
                                        },
                                        children: [
                                          "#",
                                          (0, _.i_)(e, 4, 4),
                                          j.get("accountId") === e &&
                                            (0, m.jsx)(q.C, {
                                              ml: 2,
                                              colorScheme: "cyan",
                                              variant: "outline",
                                              children: "Connected",
                                            }),
                                        ],
                                      },
                                      e
                                    )
                                  ),
                                }),
                                (0, m.jsx)(I.z, {
                                  onClick: (e) => {
                                    e.preventDefault(),
                                      e.stopPropagation(),
                                      x.mutation.mutate();
                                  },
                                  isDisabled:
                                    !x.enabled || x.mutation.isPending,
                                  size: "xs",
                                  variant: "outline",
                                  colorScheme: "gray",
                                  color: "white",
                                  leftIcon: (0, m.jsx)("svg", {
                                    width: "8",
                                    height: "8",
                                    viewBox: "0 0 8 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, m.jsx)("path", {
                                      d: "M3.5 3.5V0.5H4.5V3.5H7.5V4.5H4.5V7.5H3.5V4.5H0.5V3.5H3.5Z",
                                      fill: "white",
                                    }),
                                  }),
                                  w: "130px",
                                  "data-cy": "create new account button",
                                  children: "Create Account",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
              : (0, m.jsx)(I.z, {
                  "data-cy": "connect wallet button",
                  onClick: () => o(),
                  type: "button",
                  size: "sm",
                  ml: 2,
                  py: 5,
                  children: "Connect Wallet",
                }),
          ],
        });
      }
      var ue = a(89536),
        he = a(69231);
      const xe = ({ symbol: e, width: t = 30, height: a = 30, ...r }) =>
        e
          ? (0, m.jsx)(he.E, {
              src: `https://synthetixio.github.io/synthetix-assets/collateral/${e?.toUpperCase()}.svg`,
              fallback: (0, m.jsx)(he.E, {
                src: `https://synthetixio.github.io/synthetix-assets/synths/${e}.svg`,
                fallbackSrc:
                  "https://synthetixio.github.io/synthetix-assets/collateral/UNKNOWN.svg",
                alt: e,
                style: { width: t, height: a },
                ...r,
              }),
              alt: e,
              style: { width: t, height: a },
              ...r,
            })
          : (0, m.jsx)(he.E, {
              src: "https://synthetixio.github.io/synthetix-assets/collateral/UNKNOWN.svg",
              fallbackSrc:
                "https://synthetixio.github.io/synthetix-assets/collateral/UNKNOWN.svg",
              alt: e,
              style: { width: t, height: a },
              ...r,
            });
      var pe = a(74409),
        me = a(81672),
        ge = a(17993),
        fe = a(87651),
        ye = a(47443),
        je = a(52929),
        be = a(74444),
        we = a(85573),
        Ce = a(79929),
        Le = a.n(Ce);
      const Me = /^([0-9]*[.])?[0-9]{0,18}$/;
      function Se(e) {
        const t = parseFloat(e.toString());
        return t === e.toNumber() ? `${t}` : e.toString();
      }
      function Ae({
        value: e,
        onChange: t,
        min: a,
        max: r,
        InputProps: i,
        disabled: o,
      }) {
        const [s, l] = (0, n.useState)(e.gt(0) ? e.toString() : ""),
          c = (0, n.useCallback)(
            (r) => {
              if (r.target.value.length > 24) return;
              let n = r.target.value;
              if (
                (isNaN(Number(r.target.value)) ||
                  (a &&
                    a.gt(Number(r.target.value)) &&
                    (n = a.toNumber().toString())),
                l(n),
                !t)
              )
                return;
              if (!Me.test(`${n}`)) return;
              let i = e;
              try {
                i = (0, Ce.wei)(n || 0);
              } catch (e) {}
              e.eq(i) || t(i);
            },
            [a, t, e]
          ),
          d = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            d.current &&
              (Me.test(`${s}`)
                ? e && e.eq(0)
                  ? d.current.setCustomValidity("Value required")
                  : a && a.gte(0) && e && e.lt(a)
                  ? d.current.setCustomValidity(
                      `Value smaller than minimum of ${Se(a)}`
                    )
                  : r && r.gte(0) && e && e.gt(r)
                  ? d.current.setCustomValidity(
                      `Value greater than maximum of ${Se(r)}`
                    )
                  : d.current.setCustomValidity("")
                : d.current.setCustomValidity("Invalid number"));
          }, [s, a, r, e]),
          (0, n.useEffect)(() => (e.eq(0) ? l("") : l(Se(e))), [e]),
          (0, m.jsx)(we.I, {
            ref: d,
            flex: "1",
            type: "number",
            step: "any",
            border: "none",
            borderWidth: "0px",
            textAlign: "end",
            p: 0,
            outline: "none",
            fontFamily: "heading",
            fontSize: "xl",
            fontWeight: "700",
            lineHeight: "2xl",
            color: "white",
            height: "unset",
            autoFocus: !0,
            placeholder: "00.00",
            _focus: { boxShadow: "none !important" },
            _placeholder: { color: "whiteAlpha.700" },
            _disabled: { color: "white" },
            value: s,
            onChange: c,
            disabled: o,
            ...i,
            maxLength: 10,
          })
        );
      }
      var ke = a(5348),
        De = a(45071);
      const ve = (e) =>
        (0, m.jsx)(E.k, {
          bg: "navy.700",
          borderWidth: "1px",
          borderColor: "gray.900",
          borderRadius: "base",
          ...e,
        });
      var Ie = a(4902);
      function Te(e) {
        const { network: t } = (0, G.LN)(),
          r = e || t;
        return (0, y.useQuery)({
          queryKey: [`${r?.id}-${r?.preset}`, "V2xSynthetix"],
          enabled: Boolean(r),
          queryFn: async function () {
            if (!r) throw new Error("OMFG");
            return (async function (e, t) {
              if (!t) throw new Error("Missing preset");
              const r = `${Number(e).toFixed(0)}-${t}`;
              switch (r) {
                case "1-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(9393).then(a.t.bind(a, 29393, 19)),
                    a.e(7537).then(a.t.bind(a, 77537, 19)),
                  ]);
                  return { address: e.contracts.V2x, abi: t };
                }
                case "11155111-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(3463).then(a.t.bind(a, 33463, 19)),
                    a.e(4383).then(a.t.bind(a, 4383, 19)),
                  ]);
                  return { address: e.contracts.V2x, abi: t };
                }
                default:
                  throw new Error(`Unsupported deployment ${r} for V2x`);
              }
            })(r.id, r.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var Fe = a(7987);
      function Ne(e) {
        const { data: t } = Te(e),
          a = (0, G.eK)(e);
        return (0, y.useQuery)({
          queryKey: [
            `${e?.id}-${e?.preset}`,
            "V2 sUSD",
            { contractsHash: (0, ne.K)([t]) },
          ],
          enabled: Boolean(a && t),
          queryFn: async function () {
            if (!a || !t) throw "OMFG";
            const e = new ie.CH(t.address, t.abi, a);
            return await e.synths(Fe.s("sUSD"));
          },
        });
      }
      const Ee = ({
        onClose: e,
        onConfirm: t,
        setAmount: a,
        amount: r,
        network: i,
      }) => {
        const [o, s] = (0, n.useState)(!1),
          { data: l } = Ne(i),
          { data: c } = (0, ke.mM)(l, i),
          { data: d } = (0, Ie.a)(i),
          { data: u } = (0, ke.mM)(d?.address, i);
        return (
          (0, n.useEffect)(() => {
            c && r.eq(0) && !o && (a(c), s(!0));
          }, [r, o, a, c]),
          (0, m.jsxs)(ge.g, {
            gap: 2.5,
            children: [
              (0, m.jsx)(A.x, {
                width: "100%",
                textAlign: "left",
                fontSize: "14px",
                children:
                  "Convert your sUSD on Ethereum Mainnet to V3 compatible sUSD. You will need V3 compatible sUSD to interact with the new Synthetix products.",
              }),
              (0, m.jsx)(ve, {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                p: 3,
                children: (0, m.jsxs)(E.k, {
                  alignItems: "center",
                  children: [
                    (0, m.jsx)(E.k, {
                      flexDir: "column",
                      gap: "1",
                      children: (0, m.jsxs)(E.k, {
                        flexDir: "column",
                        gap: "1",
                        children: [
                          (0, m.jsx)(ve, {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            py: 1.5,
                            px: 2.5,
                            width: "fit-content",
                            children: (0, m.jsxs)(A.x, {
                              display: "flex",
                              gap: 2,
                              alignItems: "center",
                              fontWeight: "600",
                              children: [
                                (0, m.jsx)(xe, {
                                  symbol: "susd",
                                  width: 16,
                                  height: 16,
                                }),
                                "V2 sUSD",
                              ],
                            }),
                          }),
                          (0, m.jsxs)(E.k, {
                            fontSize: "xs",
                            color: "whiteAlpha.700",
                            gap: "1",
                            children: [
                              "Balance: ",
                              (0, m.jsx)(De.$, { value: c }),
                              (0, m.jsx)(A.x, {
                                as: "span",
                                cursor: "pointer",
                                onClick: () => {
                                  c && a(c);
                                },
                                color: c?.eq(r) ? "gray.600" : "cyan.500",
                                fontWeight: 700,
                                children: " Max",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsx)(E.k, {
                      flexDir: "column",
                      flexGrow: 1,
                      children: (0, m.jsx)(Ae, {
                        InputProps: {
                          isRequired: !0,
                          "data-max": c?.toString(),
                          type: "number",
                          min: 0,
                        },
                        value: r,
                        onChange: (e) => a(e),
                        min: f.GH,
                      }),
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(ve, {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                p: 3,
                children: (0, m.jsxs)(E.k, {
                  alignItems: "center",
                  children: [
                    (0, m.jsxs)(E.k, {
                      flexDir: "column",
                      gap: "1",
                      children: [
                        (0, m.jsx)(ve, {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          py: 1.5,
                          px: 2.5,
                          width: "fit-content",
                          children: (0, m.jsxs)(A.x, {
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            fontWeight: "600",
                            children: [
                              (0, m.jsx)(xe, {
                                symbol: "susd",
                                width: 16,
                                height: 16,
                              }),
                              "V3 sUSD",
                            ],
                          }),
                        }),
                        (0, m.jsxs)(E.k, {
                          fontSize: "xs",
                          color: "whiteAlpha.700",
                          gap: "1",
                          children: [
                            "Balance: ",
                            (0, m.jsx)(De.$, { value: u }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsx)(E.k, {
                      flexDir: "column",
                      flexGrow: 1,
                      children: (0, m.jsx)(Ae, { disabled: !0, value: r }),
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: c?.lt(r),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  borderRadius: "6px",
                  status: "error",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsx)(be.X, {
                      children:
                        "You cannot convert more than your v2 sUSD balance",
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(I.z, {
                isDisabled: c?.lt(r) || r.lte(0),
                mt: 3,
                width: "100%",
                onClick: t,
                children: "Convert",
              }),
              (0, m.jsx)(I.z, {
                variant: "outline",
                colorScheme: "gray",
                onClick: e,
                width: "100%",
                children: "Later",
              }),
            ],
          })
        );
      };
      var ze = a(70065),
        Pe = a(99581),
        Oe = a(25042),
        He = a(42383),
        $e = a(8176);
      function Re(e) {
        const { network: t } = (0, G.LN)(),
          r = e || t;
        return (0, y.useQuery)({
          queryKey: [`${r?.id}-${r?.preset}`, "LegacyMarket"],
          enabled: Boolean(r),
          queryFn: async function () {
            if (!r) throw new Error("OMFG");
            return (async function (e, t) {
              if (!t) throw new Error("Missing preset");
              const r = `${Number(e).toFixed(0)}-${t}`;
              switch (r) {
                case "1-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(9393).then(a.t.bind(a, 29393, 19)),
                    a.e(7453).then(a.t.bind(a, 67453, 19)),
                  ]);
                  return { address: e.contracts.LegacyMarketProxy, abi: t };
                }
                case "11155111-main": {
                  const [{ default: e }, { default: t }] = await Promise.all([
                    a.e(3463).then(a.t.bind(a, 33463, 19)),
                    a.e(8025).then(a.t.bind(a, 18025, 19)),
                  ]);
                  return { address: e.contracts.LegacyMarketProxy, abi: t };
                }
                default:
                  throw new Error(`Unsupported deployment ${r} for Extras`);
              }
            })(r.id, r.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var Ue = a(35834),
        Be = a(99);
      function We(e) {
        try {
          if (e.cause?.data) return e.cause?.data;
          if (e.cause?.cause?.data) return e.cause?.cause?.data;
          if (e.cause?.cause?.cause?.data) return e.cause?.cause?.cause?.data;
          if (e.cause?.cause?.error?.data) return e.cause?.cause?.error?.data;
          if (e.cause?.cause?.cause?.error?.data)
            return e.cause?.cause?.cause?.error?.data;
          if (e?.error?.error?.data) return e?.error?.error?.data;
        } catch (e) {
          console.error("exception error parser:", e);
        }
      }
      var Ze = a(99268);
      var qe = a(5438),
        Ve = a(45501),
        Ge = a(81826),
        _e = a(1651);
      const Qe = ({ onConfirm: e, v2Balance: t, v3Balance: a, amount: r }) =>
        (0, m.jsxs)(ge.g, {
          spacing: 6,
          children: [
            (0, m.jsxs)(A.x, {
              width: "100%",
              textAlign: "left",
              fontSize: "14px",
              children: [
                "Your ",
                (0, m.jsx)("b", { children: "V2 sUSD" }),
                " has been converted to ",
                (0, m.jsx)("b", { children: "V3 sUSD" }),
              ],
            }),
            (0, m.jsxs)(ye.b, {
              rounded: "base",
              colorScheme: "green",
              borderRadius: "6px",
              children: [
                (0, m.jsx)(E.k, {
                  bg: "green.500",
                  p: "1",
                  rounded: "full",
                  mr: "3.5",
                  children: (0, m.jsx)(qe.n, {
                    w: "12px",
                    h: "12px",
                    color: "green.900",
                  }),
                }),
                (0, m.jsxs)(A.x, {
                  fontSize: "16px",
                  children: [
                    (0, m.jsx)("b", { children: "sUSD" }),
                    " successfully converted",
                  ],
                }),
              ],
            }),
            (0, m.jsx)(Ge.v, {
              width: "100%",
              items: [
                {
                  label: "Total V2 sUSD",
                  value: (0, m.jsx)(_e.D, {
                    value: t,
                    newValue: t.sub(r),
                    formatFn: (e) => (0, _.Aq)(e),
                    hasChanges: !0,
                    size: "sm",
                  }),
                },
                {
                  label: "Total V3 sUSD",
                  value: (0, m.jsx)(_e.D, {
                    value: a,
                    newValue: a.add(r),
                    formatFn: (e) => (0, _.Aq)(e),
                    hasChanges: !0,
                    size: "sm",
                  }),
                },
              ],
            }),
            (0, m.jsx)(I.z, {
              mb: -2,
              width: "100%",
              onClick: e,
              children: "Continue",
            }),
            (0, m.jsxs)(I.z, {
              display: "flex",
              alignItems: "center",
              gap: 1,
              variant: "outline",
              colorScheme: "gray",
              width: "100%",
              children: [
                "Deposit sUSD to Curve",
                (0, m.jsx)(Ve.H, { transform: "rotate(45deg)" }),
              ],
            }),
          ],
        });
      function Ye({ onSuccess: e, amount: t, network: a, onBack: r }) {
        const { data: i } = Re(),
          { data: o } = Ne(a),
          { data: s } = (0, ke.mM)(o, a),
          { data: l } = (0, Ie.a)(a),
          { data: c } = (0, ke.mM)(l?.address, a),
          [d, u] = (0, n.useState)(!1),
          [h, x] = (0, n.useState)({ step: 1, status: "idle" }),
          [p, g] = (0, n.useState)({
            amount: f.GH,
            v2Balance: f.GH,
            v3Balance: f.GH,
          }),
          {
            approve: j,
            refetchAllowance: w,
            requireApproval: C,
          } = (0, He.y)({
            contractAddress: o,
            amount: t.toBN(),
            spender: i?.address,
          }),
          L = (0, ze.p)({ isClosable: !0, duration: 9e3 }),
          { migrate: M, isSuccess: S } = (function ({ amount: e }) {
            const [t, a] = (0, n.useState)(!1),
              [r, i] = (0, n.useState)(!1),
              o = (0, G.mx)(),
              { data: s } = Re(),
              { gasSpeed: l } = (0, b.jU)(),
              c = (0, G.M9)(),
              d = (0, y.useQueryClient)(),
              { network: u } = (0, G.LN)();
            return {
              migrate: (0, n.useCallback)(async () => {
                try {
                  if (!s || !o) throw "OMFG";
                  a(!0), i(!1);
                  const t = await (0, Ue.o)({ provider: o.provider }),
                    r = new ie.CH(s.address, s.abi, o),
                    n = await r.populateTransaction.convertUSD(e.toBN()),
                    h = await c?.estimateGas(n),
                    x = (0, Be.F)({
                      gasLimit: (0, Ce.wei)(h || f.GH).toBN(),
                      gasPrices: t,
                      gasSpeed: l,
                    }),
                    p = await o.sendTransaction({ ...n, ...x });
                  await p.wait(),
                    a(!1),
                    i(!0),
                    d.invalidateQueries({
                      queryKey: [`${u?.id}-${u?.preset}`, "TokenBalance"],
                    });
                } catch (e) {
                  if (s)
                    try {
                      const t = new Ze.vU(s.abi),
                        a = We(e),
                        r = t.parseError(a);
                      console.error("error:", r);
                    } catch {}
                  throw (a(!1), e);
                }
              }, [e, l, s, u?.id, u?.preset, c, d, o]),
              isLoading: t,
              isSuccess: r,
            };
          })({ amount: t }),
          k = (0, $e.o)(),
          D = (0, n.useCallback)(async () => {
            try {
              if (h.step > 2) return void e();
              1 === h.step &&
                C &&
                (x({ step: 1, status: "pending" }), await j(d), w()),
                x({ step: 2, status: "pending" }),
                g({ amount: t, v2Balance: s || f.GH, v3Balance: c || f.GH }),
                await M(),
                x({ step: 2, status: "success" }),
                L.closeAll(),
                L({
                  title: "Success",
                  description: "Migration executed.",
                  status: "success",
                  duration: 5e3,
                  variant: "left-accent",
                });
            } catch (e) {
              const t = k(e);
              t && console.error(new Error(t.name), t),
                x((e) => ({ step: e.step, status: "error" })),
                L.closeAll(),
                L({
                  title: "Migration failed",
                  description: t
                    ? (0, m.jsx)(Pe.M, { contractError: t })
                    : "Please try again.",
                  status: "error",
                  variant: "left-accent",
                  duration: 36e5,
                });
            }
          }, [t, j, k, d, M, e, w, C, L, h.step, s, c]);
        return S
          ? (0, m.jsx)(Qe, { ...p, onConfirm: e })
          : (0, m.jsxs)(ge.g, {
              spacing: 0,
              children: [
                (0, m.jsx)(Oe.P0, {
                  width: "100%",
                  step: 1,
                  title: "Approve sUSD transfer",
                  status: {
                    failed: 1 === h.step && "error" === h.status,
                    success: h.step > 1,
                    loading: 1 === h.step && "pending" === h.status,
                  },
                  checkboxLabel:
                    "Approve unlimited sUSD transfers to Synthetix",
                  checkboxProps: {
                    isChecked: d,
                    onChange: (e) => u(e.target.checked),
                  },
                  mt: 0,
                }),
                (0, m.jsx)(Oe.P0, {
                  width: "100%",
                  step: 2,
                  title: "Convert sUSD",
                  mb: 4,
                  mt: 4,
                  subtitle: (0, m.jsxs)(A.x, {
                    children: [
                      "This will convert ",
                      (0, m.jsx)(De.$, { value: t, suffix: " v2 sUSD" }),
                      " to v3 sUSD",
                    ],
                  }),
                  status: {
                    failed: 2 === h.step && "error" === h.status,
                    success: 2 === h.step && "sucess" === h.status,
                    loading: 2 === h.step && "pending" === h.status,
                  },
                }),
                (0, m.jsx)(I.z, {
                  isDisabled: "pending" === h.status,
                  onClick: D,
                  width: "100%",
                  mb: 2,
                  children: (() => {
                    switch (!0) {
                      case "error" === h.status:
                        return "Retry";
                      case "pending" === h.status:
                        return "Processing...";
                      case 2 === h.step && "sucess" === h.status:
                        return "Done";
                      default:
                        return "Execute Transaction";
                    }
                  })(),
                }),
                "pending" !== h.status &&
                  (0, m.jsx)(I.z, {
                    variant: "outline",
                    colorScheme: "gray",
                    width: "100%",
                    onClick: r,
                    children: "Back",
                  }),
              ],
            });
      }
      const Ke = ({ onConfirm: e, network: t }) =>
        (0, m.jsxs)(ge.g, {
          spacing: 6,
          children: [
            (0, m.jsxs)(A.x, {
              width: "100%",
              textAlign: "left",
              fontSize: "14px",
              children: [
                "Your migration to Synthetix V3 on ",
                t.name,
                " has been successfully Completed.",
              ],
            }),
            (0, m.jsx)(E.k, {
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              children: (0, m.jsx)(he.E, {
                maxWidth: "455px",
                width: "100%",
                src: "/Migrate Launch.png",
                alt: "Synthetix V3 Launch",
              }),
            }),
            (0, m.jsxs)(ye.b, {
              borderRadius: "6px",
              colorScheme: "green",
              children: [
                (0, m.jsx)(E.k, {
                  bg: "green.500",
                  p: "1",
                  rounded: "full",
                  mr: "3.5",
                  children: (0, m.jsx)(qe.n, {
                    w: "12px",
                    h: "12px",
                    color: "green.900",
                  }),
                }),
                (0, m.jsx)(A.x, {
                  fontSize: "16px",
                  children: "Migration successfully Completed",
                }),
              ],
            }),
            (0, m.jsx)(ge.g, {
              width: "100%",
              spacing: 4,
              children: (0, m.jsx)(I.z, {
                width: "100%",
                onClick: e,
                children: "See Position on V3",
              }),
            }),
          ],
        });
      var Xe = a(16060);
      const Je = ({
        onClose: e,
        isOpen: t,
        network: a,
        type: r,
        accountId: i,
      }) => {
        const [o, s] = (0, n.useState)(0),
          [l, c] = (0, n.useState)(f.GH),
          d = (0, F.TH)(),
          u = (0, F.s0)();
        (0, n.useEffect)(() => {
          t || (s(0), c(f.GH));
        }, [t]);
        const h = (0, n.useCallback)(() => {
          if (i) {
            const e = new URLSearchParams(d.search);
            e.set("accountId", i),
              u(
                { pathname: (0, Xe.Gn)("/dashboard"), search: e.toString() },
                { replace: !0 }
              );
          }
          e();
        }, [i, d.search, u, e]);
        return (0, m.jsxs)(w.u_, {
          size: "lg",
          isOpen: t,
          onClose: e,
          closeOnOverlayClick: !1,
          children: [
            (0, m.jsx)(C.Z, {}),
            (0, m.jsxs)(L.h, {
              mt: "100px",
              borderWidth: "1px",
              borderColor: "gray.900",
              bg: "navy.900",
              color: "white",
              children: [
                (0, m.jsxs)(E.k, {
                  justifyContent: "space-between",
                  p: 6,
                  alignItems: "center",
                  children: [
                    (0, m.jsx)(pe.X, {
                      fontSize: "20px",
                      children:
                        2 === o
                          ? "Migration successful"
                          : "Convert your sUSD to V3 on Mainnet",
                    }),
                    (0, m.jsx)(me.P, { onClick: e, color: "gray" }),
                  ],
                }),
                (0, m.jsx)(E.k, {
                  width: "100%",
                  px: 6,
                  children: (0, m.jsx)(U.i, { colorScheme: "gray" }),
                }),
                (0, m.jsx)(S.f, {
                  p: 6,
                  pt: 2,
                  children:
                    t &&
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        0 === o &&
                          (0, m.jsx)(Ee, {
                            amount: l,
                            setAmount: c,
                            onClose: e,
                            onConfirm: () => s(1),
                            network: a,
                          }),
                        1 === o &&
                          (0, m.jsx)(Ye, {
                            network: a,
                            onSuccess: () => {
                              "migration" === r ? s(2) : e();
                            },
                            onBack: () => s(0),
                            amount: l,
                          }),
                        2 === o && (0, m.jsx)(Ke, { network: a, onConfirm: h }),
                      ],
                    }),
                }),
              ],
            }),
          ],
        });
      };
      function et({ network: e }) {
        const [t, a] = (0, n.useState)(!1),
          { network: r } = (0, G.LN)(),
          i = (0, ue.UO)(),
          { activeWallet: o } = (0, G.Os)();
        return (
          (0, n.useEffect)(() => {
            "snxusd" === i.convert?.toLowerCase() && a(!0);
          }, [i.convert]),
          o && r?.id === e.id
            ? (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsx)(Je, {
                    type: "convert",
                    network: e,
                    onClose: () => a(!1),
                    isOpen: t,
                  }),
                  (0, m.jsxs)(I.z, {
                    variant: "outline",
                    colorScheme: "gray",
                    px: 3,
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    onClick: () => a(!0),
                    children: [
                      (0, m.jsx)(xe, { width: 24, height: 24, symbol: "susd" }),
                      "Convert sUSD",
                    ],
                  }),
                ],
              })
            : null
        );
      }
      function tt() {
        const { network: e } = (0, G.LN)(),
          { onClose: t } = (0, P.q)(),
          a = (0, F.TH)();
        return (
          (0, n.useEffect)(() => {
            t();
          }, [a, t]),
          (0, m.jsx)(m.Fragment, {
            children: (0, m.jsx)(E.k, {
              bg: "navy.700",
              mb: "4",
              py: "3",
              borderBottomWidth: "1px",
              borderBottomColor: "gray.900",
              px: "10",
              children: (0, m.jsxs)(z.W, {
                maxW: "1236px",
                as: E.k,
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                  (0, m.jsxs)(E.k, {
                    display: { base: "none", md: "inline-block" },
                    flexDirection: "row",
                    justifyContent: "space-between",
                    children: [
                      (0, m.jsx)(v.r, {
                        to: { pathname: "/", search: a.search },
                        as: i.OL,
                        py: 4,
                        children: (0, m.jsx)(V.TR, {}),
                      }),
                      (0, m.jsx)(v.r, {
                        ml: 6,
                        as: i.OL,
                        to: { pathname: "/dashboard", search: a.search },
                        fontWeight: 700,
                        fontSize: "14px",
                        display: "inline",
                        px: 3,
                        py: 2.5,
                        textDecoration: "none",
                        color: "gray.500",
                        _hover: { textDecoration: "none" },
                        _activeLink: { color: "white" },
                        children: "Dashboard",
                      }),
                      (0, m.jsx)(v.r, {
                        ml: 2.5,
                        as: i.OL,
                        to: { pathname: "/pools", search: a.search },
                        fontWeight: 700,
                        fontSize: "14px",
                        display: "inline",
                        textDecoration: "none",
                        px: 3,
                        py: 2.5,
                        color: "gray.500",
                        _hover: { textDecoration: "none" },
                        _activeLink: { color: "white" },
                        children: "Pools",
                      }),
                    ],
                  }),
                  (0, m.jsx)(k.xu, {
                    display: { md: "none" },
                    children: (0, m.jsx)(v.r, {
                      to: "/",
                      as: i.OL,
                      py: 4,
                      pr: 2,
                      children: (0, m.jsx)(V.K7, {}),
                    }),
                  }),
                  (0, m.jsxs)(E.k, {
                    gap: 3,
                    flexWrap: "wrap-reverse",
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                      e && [G.RR.id, G.NM.id].includes(e.id)
                        ? (0, m.jsx)(et, { network: e })
                        : null,
                      (0, m.jsx)(de, {}),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      const at = () =>
          (0, m.jsx)(E.k, {
            borderTop: "1px solid",
            borderTopColor: "gray.900",
            bg: "navy.700",
            children: (0, m.jsxs)(z.W, {
              maxW: "1236px",
              as: E.k,
              height: "72px",
              alignItems: "center",
              justifyContent: "space-between",
              children: [
                (0, m.jsx)(V.TR, { withText: !1 }),
                (0, m.jsxs)(E.k, {
                  alignItems: "center",
                  children: [
                    (0, m.jsx)(v.r, {
                      href: "https://x.com/synthetixdefi",
                      target: "_blank",
                      children: (0, m.jsx)(V.b0, {
                        w: "24px",
                        h: "24px",
                        mr: 2,
                      }),
                    }),
                    (0, m.jsx)(v.r, {
                      href: "https://t.me/+bCyT8IqLvHsyMzJk",
                      target: "_blank",
                      children: (0, m.jsx)(V.LK, { w: "24px", h: "24px" }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        rt = () =>
          (0, m.jsx)(k.xu, {
            as: "main",
            minHeight: "100vh",
            color: "rgba(255,255,255,0.85)",
            display: "flex",
            flexDirection: "column",
            bg: "navy.900",
            children: (0, m.jsxs)(E.k, {
              flex: "1",
              flexDirection: "column",
              children: [
                (0, m.jsx)(tt, {}),
                (0, m.jsx)(z.W, {
                  display: "flex",
                  flexDir: "column",
                  maxW: "1236px",
                  flex: "1",
                  children: (0, m.jsx)(F.j3, {}),
                }),
                (0, m.jsx)(at, {}),
              ],
            }),
          });
      var nt = a(18671),
        it = a(68588);
      const ot = () => {
          const { t: e } = (0, it.$G)();
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(nt.Z, {
                children: (0, m.jsx)("title", {
                  children: e("not-found.page-title"),
                }),
              }),
              (0, m.jsxs)(E.k, {
                height: "100%",
                direction: "column",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
                children: [
                  (0, m.jsx)(pe.X, { fontSize: "5xl", children: "Not found" }),
                  (0, m.jsx)(i.rU, {
                    to: "/",
                    children: (0, m.jsx)(v.r, {
                      color: "cyan.500",
                      children: "Return to Home",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        st = ({ tokenBalance: e, ...t }) =>
          (0, m.jsxs)(ye.b, {
            borderLeftColor: "cyan.500",
            borderRadius: "6px",
            ...t,
            children: [
              (0, m.jsx)(je.z, { color: "cyan.500" }),
              (0, m.jsxs)(A.x, {
                color: "white",
                fontFamily: "heading",
                fontSize: "16px",
                lineHeight: "24px",
                children: [
                  "You have a ",
                  e.toString(2),
                  " SNX active staking position on V2.",
                  (0, m.jsx)(A.x, {
                    as: "span",
                    color: "cyan.500",
                    cursor: "pointer",
                    children: " Migrate to V3",
                  }),
                ],
              }),
            ],
          }),
        lt = ({ isOpen: e }) =>
          (0, m.jsxs)(w.u_, {
            isOpen: e,
            onClose: () => {},
            children: [
              (0, m.jsx)(C.Z, {}),
              (0, m.jsxs)(L.h, {
                p: 6,
                borderWidth: "1px",
                borderColor: "gray.900",
                mt: "17.5%",
                bg: "navy.700",
                children: [
                  (0, m.jsx)(M.x, {
                    p: 0,
                    children: "Collateral Not Supported",
                  }),
                  (0, m.jsx)(U.i, { my: 6 }),
                  (0, m.jsx)(A.x, {
                    color: "white",
                    fontFamily: "heading",
                    fontSize: "14px",
                    lineHeight: "20px",
                    children:
                      "This collateral is not supported on this network. Go back to your dashboard to see your active positions on this network.",
                  }),
                  (0, m.jsx)(I.z, {
                    as: i.rU,
                    mt: 6,
                    to: { pathname: "/dashboard", search: location.search },
                    children: "Back to Dashboard",
                  }),
                ],
              }),
            ],
          });
      var ct = a(84471),
        dt = a(64565),
        ut = a(70189),
        ht = a(78534),
        xt = a(80774),
        pt = a(5832),
        mt = a(66983),
        gt = a(79443),
        ft = a(37330),
        yt = a(17716),
        jt = a(68881),
        bt = a(20870);
      function wt(e) {
        const { network: t } = (0, G.LN)(),
          r = e || t;
        return (0, y.useQuery)({
          queryKey: [`${r?.id}-${r?.preset}`, "SynthTokens"],
          enabled: Boolean(r),
          queryFn: async function () {
            if (!r) throw new Error("OMFG");
            return (async function (e, t) {
              if (!t) throw new Error("Missing preset");
              const r = `${Number(e).toFixed(0)}-${t}`;
              switch (r) {
                case "1-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(4488).then(a.t.bind(a, 74488, 19)),
                  ]);
                  return e;
                }
                case "11155111-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(4233).then(a.t.bind(a, 74233, 19)),
                  ]);
                  return e;
                }
                case "10-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(8995).then(a.t.bind(a, 58995, 19)),
                  ]);
                  return e;
                }
                case "8453-andromeda": {
                  const [{ default: e }] = await Promise.all([
                    a.e(7642).then(a.t.bind(a, 17642, 19)),
                  ]);
                  return e;
                }
                case "84532-andromeda": {
                  const [{ default: e }] = await Promise.all([
                    a.e(4487).then(a.t.bind(a, 4487, 19)),
                  ]);
                  return e;
                }
                case "42161-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(7925).then(a.t.bind(a, 37925, 19)),
                  ]);
                  return e;
                }
                case "421614-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(6535).then(a.t.bind(a, 96535, 19)),
                  ]);
                  return e;
                }
                default:
                  throw new Error(
                    `Unsupported deployment ${r} for SynthTokens`
                  );
              }
            })(r.id, r.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var Ct = a(37888),
        Lt = a(10528);
      var Mt = a(63322);
      function St(e) {
        const { network: t } = (0, G.LN)(),
          r = e || t;
        return (0, y.useQuery)({
          queryKey: [`${r?.id}-${r?.preset}`, "RewardsDistributors"],
          enabled: Boolean(r),
          queryFn: async function () {
            if (!r) throw new Error("OMFG");
            return (async function (e, t) {
              if (!t) throw new Error("Missing preset");
              const r = `${Number(e).toFixed(0)}-${t}`;
              switch (r) {
                case "1-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(7279).then(a.t.bind(a, 47279, 19)),
                  ]);
                  return e;
                }
                case "11155111-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(4075).then(a.t.bind(a, 94075, 19)),
                  ]);
                  return e;
                }
                case "10-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(938).then(a.t.bind(a, 30938, 19)),
                  ]);
                  return e;
                }
                case "8453-andromeda": {
                  const [{ default: e }] = await Promise.all([
                    a.e(1527).then(a.t.bind(a, 61527, 19)),
                  ]);
                  return e;
                }
                case "84532-andromeda": {
                  const [{ default: e }] = await Promise.all([
                    a.e(2370).then(a.t.bind(a, 92370, 19)),
                  ]);
                  return e;
                }
                case "42161-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(6874).then(a.t.bind(a, 76874, 19)),
                  ]);
                  return e;
                }
                case "421614-main": {
                  const [{ default: e }] = await Promise.all([
                    a.e(3892).then(a.t.bind(a, 53892, 19)),
                  ]);
                  return e;
                }
                default:
                  throw new Error(
                    `Unsupported deployment ${r} for RewardsDistributors`
                  );
              }
            })(r.id, r.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var At = a(30195);
      const kt = At.z.array(
        At.z.object({
          address: At.z.string(),
          name: At.z.string(),
          symbol: At.z.string(),
          payoutTokenAddress: At.z.string(),
          displaySymbol: At.z.string().optional(),
          distributorAddress: At.z.string(),
          decimals: At.z.number(),
          claimableAmount: At.z.instanceof(Ce.Wei),
          isPoolReward: At.z.boolean(),
        })
      );
      function Dt({ poolId: e, collateralSymbol: t, accountId: a }) {
        const { data: r } = (0, Mt.t)(t),
          n = r?.tokenAddress,
          { network: i } = (0, G.LN)(),
          o = (0, G.yL)(),
          { data: s } = wt(),
          { data: l } = re(i),
          { data: c } = (0, te.a)(i),
          { data: d } = St(i),
          u =
            d && n
              ? d
                  .filter((e) => e.isRegistered)
                  .filter(
                    (e) =>
                      !e.collateralType ||
                      (e.collateralType &&
                        e.collateralType.address.toLowerCase() ===
                          n.toLowerCase())
                  )
              : [];
        return (0, y.useQuery)({
          enabled: Boolean(i && c && l && d && e && n && a && s),
          queryKey: [
            `${i?.id}-${i?.preset}`,
            "Rewards",
            { accountId: a },
            { collateralAddress: n },
            { contractsHash: (0, ne.K)([c, l, ...u, ...(s ?? [])]) },
          ],
          queryFn: async () => {
            if (!(i && c && l && u && e && n && a)) throw new Error("OMG");
            if (0 === u.length) return [];
            try {
              const t = new ie.CH(c.address, c.abi, o),
                r = u.map(({ address: r }) =>
                  t.populateTransaction.getAvailableRewards(
                    Lt.O$.from(a),
                    Lt.O$.from(e),
                    n.toLowerCase(),
                    r.toLowerCase()
                  )
                ),
                i = u.map(({ address: r }) =>
                  t.populateTransaction.getAvailablePoolRewards(
                    Lt.O$.from(a),
                    Lt.O$.from(e),
                    n.toLowerCase(),
                    r.toLowerCase()
                  )
                ),
                d = (await Promise.all([...r, ...i])).map((e) => ({
                  target: c.address,
                  callData: e.data,
                  allowFailure: !0,
                })),
                h = new ie.CH(l.address, l.abi, o),
                x = await h.callStatic.aggregate3(d),
                p = x.slice(0, r.length),
                m = x.slice(r.length),
                g = p.map((e) => {
                  if (!e.success) return f.GH;
                  const a = t.interface.decodeFunctionResult(
                    "getAvailableRewards",
                    e.returnData
                  )[0];
                  return (0, Ce.wei)(a);
                }),
                y = m.map((e) => {
                  if (!e.success) return f.GH;
                  const a = t.interface.decodeFunctionResult(
                    "getAvailablePoolRewards",
                    e.returnData
                  )[0];
                  return (0, Ce.wei)(a);
                }),
                j = u
                  .map((e, t) => {
                    const a = g[t].add(y[t]),
                      r = e.payoutToken.symbol,
                      n = s?.find(
                        (t) =>
                          t.address.toUpperCase() ===
                          e.payoutToken.address?.toUpperCase()
                      ),
                      i = n ? n?.symbol.slice(1) : r;
                    return {
                      address: e.address,
                      name: e.name,
                      symbol: r,
                      displaySymbol: i,
                      distributorAddress: e.address,
                      decimals: e.payoutToken.decimals,
                      payoutTokenAddress: e.payoutToken.address,
                      claimableAmount: a,
                      isPoolReward: y[t].gt(0),
                    };
                  })
                  .sort(
                    (e, t) =>
                      t.claimableAmount.toNumber() -
                      e.claimableAmount.toNumber()
                  );
              return kt.parse(j);
            } catch (e) {
              return console.error(e), [];
            }
          },
        });
      }
      var vt = a(60110);
      function It({ chain: e, address: t, isTx: a = !1 }) {
        switch (e) {
          case "sepolia":
            return `https://sepolia.etherscan.io/${a ? "tx" : "address"}/${t}`;
          case "arbitrum":
            return `https://arbiscan.io/${a ? "tx" : "address"}/${t}`;
          case "optimism":
            return `https://optimistic.etherscan.io/${
              a ? "tx" : "address"
            }/${t}`;
          case "base":
            return `https://basescan.org/${a ? "tx" : "address"}/${t}`;
          case "base-sepolia":
            return `https://sepolia.basescan.org/${a ? "tx" : "address"}/${t}`;
          default:
            return `https://etherscan.io/${a ? "tx" : "address"}/${t}`;
        }
      }
      function Tt() {
        return (0, m.jsxs)(ye.b, {
          borderRadius: "6px",
          status: "warning",
          mb: "6",
          children: [
            (0, m.jsx)(je.z, {}),
            (0, m.jsx)(A.x, {
              children:
                "This action will reset the withdrawal waiting period to 24 hours",
            }),
          ],
        });
      }
      const Ft = ({ rewards: e, txnStatus: t, txnHash: a }) => {
        const [r, i] = (0, n.useState)(!1),
          { network: o } = (0, G.LN)();
        return (
          (0, n.useEffect)(() => {
            "prompting" === t && i(!0),
              "error" === t && i(!1),
              "success" === t &&
                setTimeout(() => {
                  i(!1);
                }, 1200);
          }, [t]),
          (0, m.jsxs)(w.u_, {
            isOpen: r,
            onClose: () => i(!1),
            children: [
              (0, m.jsx)(C.Z, { bg: "#06061B80" }),
              (0, m.jsx)(L.h, {
                bg: "navy.700",
                mt: "10%",
                borderWidth: "1px",
                borderColor: "gray.900",
                minWidth: "384px",
                children: (0, m.jsxs)(S.f, {
                  p: 6,
                  children: [
                    (0, m.jsx)(A.x, {
                      color: "gray.50",
                      fontSize: "20px",
                      fontWeight: 700,
                      children: "Claiming Rewards",
                    }),
                    (0, m.jsx)(U.i, { my: 4 }),
                    (0, m.jsxs)(E.k, {
                      position: "relative",
                      alignItems: "center",
                      gap: 4,
                      mb: 6,
                      rounded: "lg",
                      mt: "6",
                      p: "4",
                      border: "2px solid",
                      transitionProperty: "border-color",
                      transitionDuration: "normal",
                      borderColor: "success" === t ? "green.500" : "gray.900",
                      children: [
                        (0, m.jsx)(E.k, {
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "100px",
                          bg: "success" === t ? "green.600" : "gray.900",
                          width: "40px",
                          height: "40px",
                          p: 3,
                          children:
                            "success" === t
                              ? (0, m.jsx)(qe.n, { color: "white" })
                              : (0, m.jsx)(vt.D, {
                                  size: "25px",
                                  isIndeterminate: !0,
                                  color: "gray.700",
                                }),
                        }),
                        (0, m.jsxs)(E.k, {
                          flexDirection: "column",
                          alignItems: "space-between",
                          justifyContent: "space-between",
                          ml: 2,
                          children: [
                            e.map(({ collateralSymbol: e, amount: t }) =>
                              (0, m.jsx)(
                                A.x,
                                {
                                  fontSize: "14px",
                                  fontWeight: 700,
                                  lineHeight: "20px",
                                  color: "white",
                                  children: (0, m.jsx)(De.$, {
                                    value: (0, Ce.wei)(t),
                                    prefix: "Claiming ",
                                    suffix: e ? ` ${e}` : void 0,
                                  }),
                                },
                                e
                              )
                            ),
                            (0, m.jsx)(A.x, {
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "gray.500",
                              children: "Claim your rewards",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsx)(Tt, {}),
                    "success" === t &&
                      (0, m.jsx)(I.z, {
                        mt: 5,
                        variant: "solid",
                        justifyContent: "center",
                        px: 3,
                        py: 3,
                        width: "100%",
                        textAlign: "center",
                        children: "Done",
                      }),
                    a &&
                      (0, m.jsx)(E.k, {
                        justifyContent: "center",
                        px: 3,
                        py: 3,
                        mt: 6,
                        mb: 1,
                        borderTop: "1px solid",
                        borderTopColor: "gray.900",
                        children: (0, m.jsx)(v.r, {
                          variant: "outline",
                          href: It({
                            chain: o?.name || "",
                            address: a,
                            isTx: !0,
                          }),
                          fontFamily: "heading",
                          color: "cyan.500",
                          fontWeight: 700,
                          lineHeight: "20px",
                          fontSize: "14px",
                          target: "_blank",
                          mt: 3,
                          children: "View Transaction",
                        }),
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var Nt = a(76364),
        Et = a(56317);
      const zt = () =>
        (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)(xt.Tr, {
              borderBottom: "1px solid #2D2D38",
              children: [
                (0, m.jsx)(gt.Td, {
                  pl: "16px",
                  border: "none",
                  children: (0, m.jsx)(Nt.s, {
                    startColor: "whiteAlpha.500",
                    endColor: "whiteAlpha.200",
                    h: "30px",
                    w: "30px",
                  }),
                }),
                (0, m.jsx)(gt.Td, {
                  pl: "16px",
                  border: "none",
                  children: (0, m.jsx)(Et.O, {
                    startColor: "whiteAlpha.500",
                    endColor: "whiteAlpha.200",
                    height: "30px",
                    children: (0, m.jsx)(A.x, { mr: 4, children: "Loading" }),
                  }),
                }),
                (0, m.jsx)(gt.Td, {
                  textAlign: "end",
                  pr: "0px",
                  border: "none",
                  children: (0, m.jsx)(Et.O, {
                    startColor: "whiteAlpha.500",
                    endColor: "whiteAlpha.200",
                    height: "30px",
                    children: (0, m.jsx)(A.x, { children: "Loading" }),
                  }),
                }),
              ],
            }),
            (0, m.jsxs)(xt.Tr, {
              borderBottom: "1px solid #2D2D38",
              children: [
                (0, m.jsx)(gt.Td, {
                  pl: "16px",
                  border: "none",
                  children: (0, m.jsx)(Nt.s, {
                    startColor: "whiteAlpha.200",
                    endColor: "whiteAlpha.500",
                    h: "30px",
                    w: "30px",
                  }),
                }),
                (0, m.jsx)(gt.Td, {
                  pl: "16px",
                  border: "none",
                  children: (0, m.jsx)(Et.O, {
                    startColor: "whiteAlpha.200",
                    endColor: "whiteAlpha.500",
                    height: "30px",
                    children: (0, m.jsx)(A.x, { mr: 4, children: "Loading" }),
                  }),
                }),
                (0, m.jsx)(gt.Td, {
                  textAlign: "end",
                  pr: "0px",
                  border: "none",
                  children: (0, m.jsx)(Et.O, {
                    startColor: "whiteAlpha.200",
                    endColor: "whiteAlpha.500",
                    height: "30px",
                    children: (0, m.jsx)(A.x, { children: "Loading" }),
                  }),
                }),
              ],
            }),
            (0, m.jsxs)(xt.Tr, {
              borderBottom: "1px solid #2D2D38",
              children: [
                (0, m.jsx)(gt.Td, {
                  pl: "16px",
                  border: "none",
                  children: (0, m.jsx)(Nt.s, {
                    startColor: "whiteAlpha.500",
                    endColor: "whiteAlpha.200",
                    h: "30px",
                    w: "30px",
                  }),
                }),
                (0, m.jsx)(gt.Td, {
                  pl: "16px",
                  border: "none",
                  children: (0, m.jsx)(Et.O, {
                    startColor: "whiteAlpha.500",
                    endColor: "whiteAlpha.200",
                    height: "30px",
                    children: (0, m.jsx)(A.x, { mr: 4, children: "Loading" }),
                  }),
                }),
                (0, m.jsx)(gt.Td, {
                  textAlign: "end",
                  pr: "0px",
                  border: "none",
                  children: (0, m.jsx)(Et.O, {
                    startColor: "whiteAlpha.500",
                    endColor: "whiteAlpha.200",
                    height: "30px",
                    children: (0, m.jsx)(A.x, { children: "Loading" }),
                  }),
                }),
              ],
            }),
          ],
        });
      var Pt = a(78071);
      const Ot = (e, t = 5, a = 5) =>
          e.length <= t + a ? e : `${e.slice(0, t)}...${e.slice(-a)}`,
        Ht = ({
          displaySymbol: e,
          claimableAmount: t,
          distributorAddress: a,
        }) => {
          const { network: r } = (0, G.LN)();
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsxs)(xt.Tr, {
              children: [
                (0, m.jsxs)(gt.Td, {
                  display: "flex",
                  alignItems: "center",
                  px: 4,
                  py: 3,
                  border: "none",
                  w: "100%",
                  children: [
                    (0, m.jsx)(Pt.p, {
                      in: !0,
                      children: (0, m.jsx)(xe, {
                        height: 30,
                        width: 30,
                        symbol: e,
                      }),
                    }),
                    (0, m.jsx)(Pt.p, {
                      in: !0,
                      children: (0, m.jsx)(E.k, {
                        flexDirection: "column",
                        ml: "12px",
                        children: (0, m.jsx)(v.r, {
                          href: It({ chain: r?.name || "mainnet", address: a }),
                          target: "_blank",
                          children: (0, m.jsx)(se.u, {
                            label: `Distributed by ${Ot(a)}`,
                            children: (0, m.jsx)(A.x, {
                              color: "gray.50",
                              fontSize: "14px",
                              fontFamily: "heading",
                              fontWeight: 500,
                              lineHeight: "20px",
                              children: e,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, m.jsx)(gt.Td, {
                  alignItems: "center",
                  px: 4,
                  py: 3,
                  border: "none",
                  children: (0, m.jsx)(Pt.p, {
                    in: !0,
                    children: (0, m.jsx)(A.x, {
                      color: "gray.50",
                      fontSize: "14px",
                      fontFamily: "heading",
                      fontWeight: 500,
                      lineHeight: "20px",
                      children: (0, m.jsx)(De.$, { value: t, showTooltip: !0 }),
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      function $t() {
        const e = (0, ue.UO)(),
          { data: t } = (0, Mt.t)(e.collateralSymbol),
          { isPending: a, data: r } = Dt({
            poolId: e.poolId,
            collateralSymbol: e.collateralSymbol,
            accountId: e.accountId,
          }),
          i = n.useMemo(
            () =>
              r
                ?.map(
                  ({
                    distributorAddress: a,
                    payoutTokenAddress: r,
                    claimableAmount: n,
                    isPoolReward: i,
                  }) => ({
                    poolId: e.poolId || "",
                    collateralAddress: t?.tokenAddress || "",
                    accountId: e.accountId,
                    distributorAddress: a,
                    amount: n,
                    payoutTokenAddress: r,
                    isPoolReward: i,
                  })
                )
                .filter(({ amount: e }) => e.gt(0)) || [],
            [e.accountId, t?.tokenAddress, e.poolId, r]
          ),
          { exec: o, txnState: s } = (function (e) {
            const t = (0, ze.p)({ isClosable: !0, duration: 9e3 }),
              { network: a } = (0, G.LN)(),
              { data: r } = (0, bt.b)(),
              i = (0, G.mx)(),
              { data: o } = (0, te.a)(),
              [s, l] = n.useReducer(yt.I, yt.E),
              c = (0, y.useQueryClient)(),
              d = (0, G.yL)(),
              { gasSpeed: u } = (0, b.jU)(),
              { data: h } = wt(),
              { data: x, refetch: p } = (0, jt.Y_)(),
              g = (0, $e.o)(),
              f = (0, y.useMutation)({
                mutationFn: async function () {
                  try {
                    if (!i || !a || !d) throw new Error("No signer or network");
                    if (!e.filter(({ amount: e }) => e?.gt(0)).length) return;
                    if (!o) throw new Error("CoreProxy undefined");
                    if (!r) throw new Error("SpotMarketProxy undefined");
                    if (!h) throw new Error("synthTokens undefined");
                    l({ type: "prompting" });
                    const n = [],
                      s = new ie.CH(o.address, o.abi, i),
                      p = new ie.CH(r.address, r.abi, i);
                    e.forEach(
                      ({
                        poolId: e,
                        collateralAddress: t,
                        accountId: a,
                        distributorAddress: r,
                        amount: i,
                        payoutTokenAddress: o,
                        isPoolReward: l,
                      }) => {
                        l
                          ? n.push(
                              s.populateTransaction.claimPoolRewards(
                                Lt.O$.from(a),
                                Lt.O$.from(e),
                                t,
                                r
                              )
                            )
                          : n.push(
                              s.populateTransaction.claimRewards(
                                Lt.O$.from(a),
                                Lt.O$.from(e),
                                t,
                                r
                              )
                            );
                        const c = h.find(
                          (e) => e.address.toUpperCase() === o?.toUpperCase()
                        );
                        c &&
                          i &&
                          i.gt(0) &&
                          n.push(
                            p.populateTransaction.unwrap(
                              c.synthMarketId,
                              i.toBN(),
                              i.toBN().sub(i?.toBN().div(100))
                            )
                          );
                      }
                    );
                    const m = Promise.all(n.filter(ft._)),
                      g = await i.getAddress(),
                      [f, y] = await Promise.all([
                        m,
                        (0, Ue.o)({ provider: d }),
                      ]);
                    x && f.unshift(x);
                    const { multicallTxn: j, gasLimit: b } = await (0, Ct.dI)(
                        a,
                        f,
                        "useClaimAllRewards",
                        g
                      ),
                      w = (0, Be.F)({ gasLimit: b, gasPrices: y, gasSpeed: u }),
                      C = await i.sendTransaction({ ...j, ...w });
                    let L;
                    return (
                      l({ type: "pending", payload: { txnHash: C.hash } }),
                      (await C.wait()).logs.forEach((e) => {
                        if (
                          e.topics[0] ===
                          s.interface.getEventTopic("RewardsClaimed")
                        ) {
                          const { amount: t } = s.interface.decodeEventLog(
                            "RewardsClaimed",
                            e.data,
                            e.topics
                          );
                          L = t;
                        }
                      }),
                      l({ type: "success" }),
                      c.invalidateQueries({
                        queryKey: [`${a?.id}-${a?.preset}`, "Rewards"],
                      }),
                      t.closeAll(),
                      t({
                        title: "Success",
                        description: "Your rewards has been claimed.",
                        status: "success",
                        duration: 5e3,
                        variant: "left-accent",
                      }),
                      L
                    );
                  } catch (e) {
                    const a = g(e);
                    a && console.error(new Error(a.name), a),
                      l({ type: "error", payload: { error: e } }),
                      t.closeAll(),
                      t({
                        title: "Claiming failed",
                        description: a
                          ? (0, m.jsx)(Pe.M, { contractError: a })
                          : "Please try again.",
                        status: "error",
                        variant: "left-accent",
                        duration: 36e5,
                      });
                  }
                },
                onSuccess: () => {
                  p();
                },
              });
            return {
              mutation: f,
              txnState: s,
              settle: () => l({ type: "settled" }),
              isLoading: f.isPending,
              exec: f.mutateAsync,
            };
          })(i);
        return (0, m.jsxs)(ve, {
          bg: "navy.700",
          py: 4,
          px: 4,
          flexDir: "column",
          children: [
            (0, m.jsx)(Ft, {
              rewards: (r || [])
                ?.filter((e) => e.claimableAmount.gt(0))
                .map(({ claimableAmount: e, displaySymbol: t }) => ({
                  collateralSymbol: t,
                  amount: e.toNumber(),
                })),
              txnStatus: s.txnStatus,
              txnHash: s.txnHash,
            }),
            (0, m.jsxs)(E.k, {
              alignItems: "center",
              justifyContent: "space-between",
              children: [
                (0, m.jsx)(A.x, {
                  color: "gray.500",
                  fontFamily: "heading",
                  lineHeight: "4",
                  fontSize: "xs",
                  mb: "8px",
                  children: "Rewards",
                }),
                (0, m.jsx)(I.z, {
                  size: "sm",
                  variant: "solid",
                  isDisabled: !i.length,
                  _disabled: {
                    bg: "gray.900",
                    backgroundImage: "none",
                    color: "gray.500",
                    opacity: 0.5,
                    cursor: "not-allowed",
                  },
                  onClick: () => o(),
                  children: "Claim",
                }),
              ],
            }),
            (0, m.jsx)(dt.x, {
              width: "100%",
              mb: "8px",
              children: (0, m.jsxs)(ut.i, {
                children: [
                  (0, m.jsx)(ht.h, {
                    children: (0, m.jsxs)(xt.Tr, {
                      borderBottom: "1px solid #2D2D38",
                      children: [
                        (0, m.jsxs)(pt.Th, {
                          textTransform: "unset",
                          color: "gray.600",
                          border: "none",
                          fontFamily: "heading",
                          fontSize: "12px",
                          lineHeight: "16px",
                          letterSpacing: 0.6,
                          fontWeight: 700,
                          px: 4,
                          py: 3,
                          children: [
                            "Rewards type",
                            (0, m.jsx)(se.u, {
                              label: "Total rewards active for the Pool",
                              children: (0, m.jsx)(ct.s, { ml: 1, mb: "1px" }),
                            }),
                          ],
                        }),
                        (0, m.jsx)(pt.Th, {
                          textTransform: "unset",
                          color: "gray.600",
                          border: "none",
                          fontFamily: "heading",
                          fontSize: "12px",
                          lineHeight: "16px",
                          letterSpacing: 0.6,
                          fontWeight: 700,
                          px: 4,
                          py: 3,
                          children: "Earnings",
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsxs)(mt.p, {
                    children: [
                      e.accountId
                        ? null
                        : (0, m.jsx)(xt.Tr, {
                            children: (0, m.jsx)(gt.Td, {
                              display: "flex",
                              alignItems: "left",
                              px: 4,
                              border: "none",
                              w: "100%",
                              children: (0, m.jsx)(A.x, {
                                color: "gray.500",
                                fontFamily: "heading",
                                fontSize: "xs",
                                children:
                                  "Create a Position to see your earnings",
                              }),
                            }),
                          }),
                      e.accountId && a ? (0, m.jsx)(zt, {}) : null,
                      e.accountId && !a && r && 0 === r.length
                        ? (0, m.jsx)(xt.Tr, {
                            children: (0, m.jsx)(gt.Td, {
                              display: "flex",
                              alignItems: "left",
                              px: 4,
                              border: "none",
                              w: "100%",
                              children: (0, m.jsx)(A.x, {
                                color: "gray.500",
                                fontFamily: "heading",
                                fontSize: "xs",
                                children: "No Rewards Available",
                              }),
                            }),
                          })
                        : null,
                      e.accountId && !a && r && r.length > 0
                        ? r?.map((e) =>
                            (0, m.jsx)(
                              Ht,
                              {
                                displaySymbol: e.displaySymbol,
                                claimableAmount: e.claimableAmount,
                                distributorAddress: e.distributorAddress,
                              },
                              e.address
                            )
                          )
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      const Rt = ({ children: e, ...t }) =>
          (0, m.jsx)(Et.O, {
            startColor: "gray.700",
            endColor: "navy.800",
            ...t,
            children: e,
          }),
        Ut = ({ children: e, ...t }) =>
          (0, m.jsx)(Nt.s, {
            startColor: "gray.700",
            endColor: "navy.800",
            ...t,
            children: e,
          }),
        Bt = ({ isLoading: e, title: t, label: a, value: r }) =>
          (0, m.jsxs)(E.k, {
            bg: "navy.700",
            border: "1px solid",
            borderColor: "gray.900",
            rounded: "base",
            flexDir: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minWidth: "200px",
            flex: 1,
            height: "88px",
            px: 6,
            py: 4,
            children: [
              (0, m.jsxs)(E.k, {
                alignItems: "center",
                mb: 1,
                children: [
                  (0, m.jsx)(A.x, {
                    fontSize: "14px",
                    color: "gray.500",
                    mr: 1,
                    children: t,
                  }),
                  a &&
                    (0, m.jsx)(se.u, {
                      label: a,
                      p: 3,
                      mt: 1,
                      children: (0, m.jsx)(ct.s, { w: "10px", h: "10px" }),
                    }),
                ],
              }),
              (0, m.jsx)(E.k, {
                w: "100%",
                justifyContent: "center",
                height: "36px",
                alignItems: "center",
                children: (0, m.jsx)(Rt, {
                  isLoaded: !e,
                  height: "24px",
                  minWidth: e ? "40%" : "initial",
                  startColor: "gray.700",
                  endColor: "navy.800",
                  children: (0, m.jsx)(Pt.p, {
                    in: !0,
                    children: (0, m.jsx)(A.x, {
                      fontSize: "24px",
                      lineHeight: "24px",
                      fontWeight: 800,
                      "data-cy": "stats box",
                      "data-title": t,
                      children: r || "$0.00",
                    }),
                  }),
                }),
              }),
            ],
          });
      var Wt = a(77528),
        Zt = a(9978),
        qt = a(1415),
        Vt = a(34367),
        Gt = a(55588);
      const _t = Gt.rK.transform((e) => (0, Ce.wei)(e));
      async function Qt({ CoreProxyContract: e, collateralAddresses: t }) {
        const a = await Promise.all(
          t.map((t) => e.populateTransaction.getCollateralPrice(t))
        );
        if (0 === a.length) return { calls: [], decoder: () => [] };
        return {
          calls: a,
          decoder: (t) => {
            if (Array.isArray(t))
              return t.map((t) => {
                const a = e.interface.decodeFunctionResult(
                  "getCollateralPrice",
                  t
                )[0];
                return _t.parse(a);
              });
            {
              const a = e.interface.decodeFunctionResult(
                "getCollateralPrice",
                t
              )[0];
              return _t.parse(a);
            }
          },
        };
      }
      a(40903);
      var Yt = a(59391);
      function Kt(e, t) {
        return t.reduce((t, a) => ((t[a[e]] = a), t), {});
      }
      var Xt = a(89990);
      const Jt = At.z.object({
          value: Gt.rK.transform((e) => (0, Ce.wei)(e)).optional(),
          amount: Gt.rK.transform((e) => (0, Ce.wei)(e)),
        }),
        ea = Gt.rK.transform((e) => (0, Ce.wei)(e)),
        ta = async ({
          CoreProxyContract: e,
          accountId: t,
          poolId: a,
          tokenAddress: r,
        }) => ({
          calls: await Promise.all([
            e.populateTransaction.getPositionCollateral(t, a, r),
            e.populateTransaction.getPositionDebt(t, a, r),
          ]),
          decoder: (t) => {
            if (Array.isArray(t) && 2 === t.length) {
              const a = e.interface.decodeFunctionResult(
                  "getPositionCollateral",
                  t[0]
                ),
                r = e.interface.decodeFunctionResult(
                  "getPositionDebt",
                  t[1]
                )[0];
              return { debt: ea.parse(r), collateral: Jt.parse({ ...a }) };
            }
            throw Error("Expected array with two items");
          },
        });
      var aa = a(18914);
      const ra = ({ accountId: e }) => {
        const { data: t } = (0, te.a)(),
          { data: a } = (0, aa.O)(),
          { data: r } = (0, Mt.T)(),
          { network: n } = (0, G.LN)(),
          i = (0, G.eK)(n);
        return (0, y.useQuery)({
          queryKey: [
            `${n?.id}-${n?.preset}`,
            "LiquidityPositions",
            { accountId: e },
            {
              pools: (0, qt.x)((a ? a.map((e) => e.id).sort() : []).join()),
              contractsHash: (0, ne.K)([t, ...(r || [])]),
            },
          ],
          staleTime: 3e5,
          enabled: Boolean(n && i && t && e && r && a),
          queryFn: async () => {
            if (!(n && i && t && e && r && a)) throw "OMFG";
            const o = new ie.CH(t.address, t.abi, i),
              s = (
                await Promise.all(
                  a.map(async ({ id: t, name: a, isPreferred: n }) =>
                    Promise.all(
                      r.map(async (r) => {
                        const { calls: i, decoder: s } = await ta({
                          CoreProxyContract: o,
                          accountId: e,
                          poolId: t,
                          tokenAddress: r.tokenAddress,
                        });
                        return {
                          calls: i,
                          decoder: s,
                          poolName: a,
                          collateralType: r,
                          poolId: t,
                          isPreferred: n,
                        };
                      })
                    )
                  )
                )
              ).flat(),
              { calls: l, decoder: c } = await Qt({
                collateralAddresses: r.map((e) => e.tokenAddress),
                CoreProxyContract: o,
              }),
              d = s.map((e) => e.calls).flat(),
              u = await Promise.all(
                r.map(
                  (t) =>
                    o.populateTransaction.getAccountAvailableCollateral(
                      e,
                      t.tokenAddress
                    ),
                  []
                )
              ),
              h = l.concat(d).concat(u),
              x = s.at(0)?.decoder,
              p = await (0, jt.QH)(await (0, jt.kp)(n), n).catch(() => {});
            return (
              p && h.unshift(p),
              await (0, Ct.Iy)(
                n,
                i,
                h,
                (t) => {
                  if (!Array.isArray(t)) throw Error("Expected array");
                  if (!x) return {};
                  const a = c(t.slice(0, l.length)),
                    n = Kt(
                      "address",
                      Array.isArray(a)
                        ? a.map((e, t) => ({
                            price: e,
                            address: r[t].tokenAddress,
                          }))
                        : [{ price: a, address: r[0].tokenAddress }]
                    );
                  var i;
                  const u = ((i = t.slice(l.length, l.length + d.length)),
                    Array.from({ length: i.length / 2 }, (e, t) => [
                      i[2 * t],
                      i[2 * t + 1],
                    ])).map((e) => x(e)),
                    h = t
                      .slice(l.length + d.length)
                      .map((e) =>
                        o.interface.decodeFunctionResult(
                          "getAccountAvailableCollateral",
                          e
                        )
                      ),
                    p = Kt(
                      "address",
                      Array.isArray(h)
                        ? h.map((e, t) => ({
                            availableCollateral: (0, Ce.wei)(e[0]),
                            address: r[t].tokenAddress,
                          }))
                        : [
                            {
                              availableCollateral: (0, Ce.wei)(h[0]),
                              address: r[0].tokenAddress,
                            },
                          ]
                    );
                  return Kt(
                    "id",
                    u.map(({ debt: t, collateral: a }, r) => {
                      const {
                          poolName: i,
                          collateralType: o,
                          poolId: l,
                          isPreferred: c,
                        } = s[r],
                        d = a.amount,
                        u = n?.[o.tokenAddress].price,
                        h = u ? d.mul(u) : (0, Ce.wei)(0),
                        x = p?.[o.tokenAddress].availableCollateral,
                        m = (0, Yt.Zj)(t, h);
                      return {
                        id: `${l}-${o.symbol}`,
                        accountId: e,
                        poolId: l,
                        poolName: i,
                        collateralPrice: u,
                        collateralAmount: d,
                        collateralValue: h,
                        collateralType: o,
                        cRatio: m,
                        debt: t,
                        isPreferred: c,
                        availableCollateral: x,
                      };
                    })
                  );
                },
                "useLiquidityPositions"
              )
            );
          },
        });
      };
      const na = () => {
        const e = (0, ue.UO)(),
          { network: t } = (0, G.LN)(),
          { data: a } = (0, Vt.X)(),
          { data: r, isPending: i } = ra({ accountId: e.accountId }),
          { data: o, isPending: s } = (0, Mt.T)(),
          { data: l, isPending: c } = (0, Zt.nW)({ accountId: e.accountId }),
          d =
            (0, Wt.Yz)(t?.id, t?.preset) && a?.USDC
              ? l?.map((e) => e.tokenAddress).concat(a.USDC) || []
              : l?.map((e) => e.tokenAddress) || [],
          { data: u, isPending: h } = (0, ke.Z)(d.filter(Boolean)),
          x = u?.map((e, t) => ({ balance: e, tokenAddress: d[t] })),
          { data: p, isPending: g } = ((e) => {
            const { network: t } = (0, G.LN)(),
              { data: a } = (0, te.a)(e),
              { data: r } = (0, Mt.T)(!1, e),
              { data: n } = (0, Vt.X)(e),
              i = e || t,
              o =
                (0, Wt.Yz)(i?.id, i?.preset) && n?.sUSD
                  ? r?.map((e) => e.tokenAddress).concat(n.sUSD)
                  : r?.map((e) => e.tokenAddress),
              s = (0, G.M9)(),
              l = (0, G.eK)(e),
              c = e ? l : s;
            return (0, y.useQuery)({
              enabled: Boolean(a && o && o?.length > 0),
              queryKey: [
                `${i?.id}-${i?.preset}`,
                "CollateralPrices",
                {
                  collaterals: (0, qt.x)(o?.sort().join()),
                  contractsHash: (0, ne.K)([a]),
                },
              ],
              queryFn: async () => {
                if (!(a && o && 0 != o.length && i && c))
                  throw "useCollateralPrices missing required data";
                const e = new ie.CH(a.address, a.abi, c),
                  { calls: t, decoder: r } = await Qt({
                    CoreProxyContract: e,
                    collateralAddresses: o,
                  }),
                  n = [...t],
                  s = await (0, jt.QH)(await (0, jt.kp)(i), i).catch(() => {});
                s && n.unshift(s);
                const l = await (0, Ct.Iy)(i, c, n, r, "useCollateralPrices");
                return o.reduce(
                  (e, t, a) => (
                    Array.isArray(l) ? (e[t] = l[a]) : (e[t] = l), e
                  ),
                  {}
                );
              },
            });
          })(),
          j = (0, Wt.Yz)(t?.id, t?.preset),
          { data: b } = (0, Xt.p)(),
          w = (0, n.useMemo)(
            () =>
              (function (e, t, a, r, n, i, o) {
                if (!(e && t && a && o)) return;
                const s = e?.filter((e) => e.tokenAddress !== o.address);
                return r && !s
                  ? r.map((e) =>
                      n && "USDC" === e.symbol
                        ? {
                            collateral: {
                              ...e,
                              availableCollateral: f.GH,
                              totalDeposited: f.GH,
                              totalAssigned: f.GH,
                              totalLocked: f.GH,
                            },
                            balance:
                              (t &&
                                t.find((t) => t.tokenAddress === e.tokenAddress)
                                  ?.balance) ||
                              f.GH,
                            price: f.ii,
                          }
                        : {
                            collateral: {
                              tokenAddress: e.tokenAddress,
                              symbol: e.symbol,
                              displaySymbol: e.displaySymbol,
                              availableCollateral: f.GH,
                              totalDeposited: f.GH,
                              totalAssigned: f.GH,
                              totalLocked: f.GH,
                            },
                            balance: f.GH,
                            price: f.GH,
                          }
                    )
                  : t && a
                  ? s?.map((e) => {
                      let r =
                        t.find(
                          (t) =>
                            t.tokenAddress.toLowerCase() ===
                            e.tokenAddress.toLowerCase()
                        )?.balance || (0, Ce.wei)(0);
                      const o = a[e.tokenAddress] ?? f.ii;
                      return (
                        n &&
                          "USDC" === e.symbol &&
                          (r =
                            t.find((e) => e.tokenAddress === i)?.balance ||
                            (0, Ce.wei)(0)),
                        { collateral: e, balance: r, price: o }
                      );
                    })
                  : void 0;
              })(l, x, p, o, j, a?.USDC, b),
            [l, x, p, o, j, a?.USDC, b]
          ),
          C =
            (L = r) &&
            Object.values(L).reduce((e, t) => e.add(t.debt), new (Le())(0));
        var L;
        const M = (function (e) {
            return e
              ?.map((e) =>
                e.collateral.availableCollateral.add(e.balance).mul(e.price)
              )
              .reduce((e, t) => e.add(t), f.GH)
              .toNumber()
              .toFixed(2);
          })(w),
          S = (function (e) {
            return e
              ?.map((e) => e.collateral.totalAssigned.mul(e.price))
              .reduce((e, t) => e.add(t), f.GH)
              .toNumber()
              .toFixed(2);
          })(w),
          k = c || h || g || i || s;
        return (0, m.jsxs)(E.k, {
          flexWrap: "wrap",
          w: "100%",
          gap: "4",
          mt: 6,
          children: [
            (0, m.jsx)(Bt, {
              title: "Available to Lock",
              isLoading: Boolean(e.accountId && k),
              value: (0, m.jsx)(De.$, {
                prefix: "$",
                value: (0, Ce.wei)(M || "0"),
              }),
              label: (0, m.jsx)(m.Fragment, {
                children: (0, m.jsxs)(A.x, {
                  textAlign: "left",
                  children: [
                    "Total assets that can be Locked, including:",
                    (0, m.jsx)("br", {}),
                    " - Unlocked assets not yet withdrawn",
                    (0, m.jsx)("br", {}),
                    " - Available assets in your wallet",
                  ],
                }),
              }),
            }),
            (0, m.jsx)(Bt, {
              title: "Total Locked",
              isLoading: Boolean(e.accountId && k),
              value: (0, m.jsx)(De.$, {
                prefix: "$",
                value: (0, Ce.wei)(S || "0"),
              }),
              label: (0, m.jsx)(m.Fragment, {
                children: (0, m.jsx)(A.x, {
                  textAlign: "left",
                  children: "All assets locked in Positions ",
                }),
              }),
            }),
            (0, m.jsx)(Bt, {
              title: "Total " + (j ? "PNL" : "Debt"),
              isLoading: Boolean(e.accountId && k),
              value: (0, m.jsx)(De.$, { prefix: "$", value: C?.abs() || f.GH }),
              label: (0, m.jsx)(m.Fragment, {
                children: (0, m.jsxs)(A.x, {
                  textAlign: "left",
                  children: [
                    "Aggregated ",
                    j ? "PNL" : "Debt",
                    " of all your open Positions",
                  ],
                }),
              }),
            }),
          ],
        });
      };
      var ia = a(32246),
        oa = a(92841);
      async function sa({ targetNetwork: e, provider: t, nodeId: r }) {
        const n = await (async function (e, t) {
            if (!t) throw new Error("Missing preset");
            const r = `${Number(e).toFixed(0)}-${t}`;
            switch (r) {
              case "1-main": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(9393).then(a.t.bind(a, 29393, 19)),
                  a.e(4314).then(a.t.bind(a, 74314, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              case "11155111-main": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(3463).then(a.t.bind(a, 33463, 19)),
                  a.e(1989).then(a.t.bind(a, 1989, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              case "10-main": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(2320).then(a.t.bind(a, 62320, 19)),
                  a.e(7722).then(a.t.bind(a, 87722, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              case "8453-andromeda": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(6244).then(a.t.bind(a, 56244, 19)),
                  a.e(1274).then(a.t.bind(a, 61274, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              case "84532-andromeda": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(6804).then(a.t.bind(a, 96804, 19)),
                  a.e(1750).then(a.t.bind(a, 91750, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              case "42161-main": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(8317).then(a.t.bind(a, 98317, 19)),
                  a.e(948).then(a.t.bind(a, 80948, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              case "421614-main": {
                const [{ default: e }, { default: t }] = await Promise.all([
                  a.e(5783).then(a.t.bind(a, 15783, 19)),
                  a.e(3927).then(a.t.bind(a, 43927, 19)),
                ]);
                return { address: e.contracts.OracleManagerProxy, abi: t };
              }
              default:
                throw new Error(
                  `Unsupported deployment ${r} for OracleManagerProxy`
                );
            }
          })(e.id, e.preset),
          i = new ie.CH(n.address, n.abi, t),
          o = await i.populateTransaction.process(r);
        o.from = (0, Ct.n8)(e?.name || "");
        const s = [o];
        return await (0, Ct.Iy)(
          e,
          t,
          s,
          (e) => {
            const t = i.interface.decodeFunctionResult(
              "process",
              Array.isArray(e) ? e[0] : e
            );
            return t?.node
              ? {
                  price: new Ce.Wei(t.node.price),
                  timestamp: new Date(
                    Number(t.node.timestamp.mul(1e3).toString())
                  ),
                }
              : {
                  price: new Ce.Wei(t.price),
                  timestamp: new Date(Number(t.timestamp.mul(1e3).toString())),
                };
          },
          "useOraclePrice"
        );
      }
      function la(e, t) {
        const { network: a } = (0, G.LN)(),
          r = t || a,
          n = (0, G.eK)(r);
        return (0, y.useQuery)({
          refetchInterval: 12e4,
          enabled: Boolean(r && n && e),
          queryKey: [`${r?.id}-${r?.preset}`, "oracle-price", { nodeId: e }],
          queryFn: async () => {
            if (!(r && n && e)) throw new Error("OMG");
            return sa({ targetNetwork: r, provider: n, nodeId: e });
          },
        });
      }
      const ca = (e) => {
        const { data: t } = (0, Mt.T)(!0),
          a = t?.filter((e) => "stataUSDC" !== e.symbol),
          r = t?.filter((e) => "stataUSDC" === e.symbol),
          { data: i } = (0, jt.Sb)(
            (a || []).map((e) => ({
              id: e.tokenAddress,
              oracleId: e.oracleNodeId,
              symbol: e.symbol,
            }))
          ),
          { data: o } = la(r?.[0]?.oracleNodeId);
        return (0, n.useMemo)(() => {
          if (!t || !i) return f.GH;
          const a = i
            .concat(
              o ? [{ symbol: "stataUSDC", price: o.price.toString() }] : []
            )
            .find((t) => `${t?.symbol}`.toUpperCase() === `${e}`.toUpperCase());
          return a?.price ? (0, Ce.wei)(a?.price) : f.GH;
        }, [i, t, e, o]);
      };
      function da({ accountId: e }) {
        const { data: t } = (0, te.a)(),
          { network: a } = (0, G.LN)(),
          r = (0, G.yL)();
        return (0, y.useQuery)({
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "AccountCollateralUnlockDate",
            { accountId: e },
            { contractsHash: (0, ne.K)([t]) },
          ],
          enabled: Boolean(r && t && e),
          queryFn: async function () {
            if (!(r && t && e)) throw "OMFG";
            const a = new ie.CH(t.address, t.abi, r),
              [n, i] = await Promise.all([
                a.getAccountLastInteraction(e),
                a.getConfigUint(Fe.s("accountTimeoutWithdraw")),
              ]),
              o = n.add(i);
            return new Date(1e3 * o.toNumber());
          },
        });
      }
      var ua = a(74479);
      function ha(e) {
        const { data: t, isLoading: a } = da({ accountId: e }),
          {
            minutes: r,
            hours: i,
            seconds: o,
            isRunning: s,
            restart: l,
          } = (0, ua.useTimer)({ expiryTimestamp: new Date(), autoStart: !1 });
        return (
          (0, n.useEffect)(() => {
            t && !a && l(t, !0);
          }, [t, a, l]),
          {
            minutes: r,
            hours: i,
            seconds: o,
            isRunning: s && !![r, i, o].find((e) => e > 0),
            accountCollateralUnlockDate: t,
          }
        );
      }
      const xa = ({ targetCratio: e, liquidationCratio: t, cRatio: a }) =>
          t && e && a
            ? a <= 0
              ? "success"
              : a < t
              ? "error"
              : a < e
              ? "warning"
              : "success"
            : "success",
        pa = (e) => e >= Number.MAX_SAFE_INTEGER,
        ma = ({ targetCratio: e, liquidationCratio: t, cRatio: a }) =>
          t && e && a
            ? a < 0
              ? 0
              : a >= e
              ? 75 + (25 * (a - e)) / t
              : a >= t
              ? 25 + (50 * (a - t)) / (e - t)
              : (25 * a) / t
            : 0,
        ga = ({ value: e }) =>
          !e || e < 0
            ? (0, m.jsx)(m.Fragment, { children: "N/A" })
            : pa(e)
            ? (0, m.jsx)(m.Fragment, { children: "Infinite" })
            : (0, m.jsx)(De.$, { value: (0, Ce.wei)(e), suffix: "%" }),
        fa = {
          success: { colorScheme: "green", bg: "green.900", label: "HEALTHY" },
          error: { colorScheme: "red", bg: "red.900", label: "Unhealthy" },
          warning: { colorScheme: "orange", bg: "orange.900", label: "MANAGE" },
        },
        ya = ({ liquidationCratio: e, targetCratio: t, cRatio: a }) => {
          const r = xa({ targetCratio: t, liquidationCratio: e, cRatio: a });
          return (0, m.jsx)(q.C, {
            colorScheme: fa[r].colorScheme,
            border: "1px solid",
            bg: fa[r].bg,
            children: fa[r].label,
          });
        },
        ja = ({ debt: e, showPNL: t, ...a }) => {
          const r = t ? e.mul(-1) : e;
          return (0, m.jsx)(A.x, {
            ...a,
            color: e.eq(0) ? "white.500" : e.lt(0) ? "green.500" : "red.500",
            children: (0, m.jsx)(De.$, {
              prefix: (r.gte(0) ? "" : "-") + "$",
              value: r.abs(),
            }),
          });
        };
      function ba({
        poolId: e,
        collateralType: t,
        debt: a,
        final: r,
        cRatio: o,
        isBase: s,
        apr: l,
        collateralAmount: c,
        availableCollateral: d,
        accountId: u,
      }) {
        const { data: h } = Dt({
            poolId: e,
            collateralSymbol: t?.symbol,
            accountId: u,
          }),
          x = ca(t.symbol),
          [p] = (0, i.lr)(),
          g = (0, F.s0)(),
          { minutes: f, hours: y, isRunning: j } = ha(u),
          b = (a) => {
            p.set("manageAction", a),
              g({
                pathname: `/positions/${t.symbol}/${e}`,
                search: p.toString(),
              });
          },
          w = (0, n.useMemo)(
            () =>
              (h || []).reduce((e, t) => e + t.claimableAmount.toNumber(), 0) >
              0,
            [h]
          );
        return (0, m.jsxs)(xt.Tr, {
          borderBottomWidth: r ? "none" : "1px",
          children: [
            (0, m.jsx)(gt.Td, {
              border: "none",
              children: (0, m.jsx)(Pt.p, {
                in: !0,
                children: (0, m.jsxs)(E.k, {
                  alignItems: "center",
                  _hover: { textDecoration: "underline", cursor: "pointer" },
                  onClick: () => b(a.gt(0) ? "repay" : "claim"),
                  children: [
                    (0, m.jsx)(xe, { symbol: t.symbol }),
                    (0, m.jsxs)(E.k, {
                      flexDirection: "column",
                      ml: 3,
                      children: [
                        (0, m.jsx)(A.x, {
                          color: "white",
                          fontWeight: 700,
                          lineHeight: "1.25rem",
                          fontFamily: "heading",
                          fontSize: "sm",
                          children: t.symbol,
                        }),
                        (0, m.jsx)(A.x, {
                          color: "gray.500",
                          fontFamily: "heading",
                          fontSize: "0.75rem",
                          lineHeight: "1rem",
                          children: t.displaySymbol,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, m.jsx)(gt.Td, {
              border: "none",
              children: (0, m.jsxs)(E.k, {
                flexDirection: "column",
                alignItems: "flex-end",
                children: [
                  (0, m.jsx)(A.x, {
                    color: "white",
                    lineHeight: "1.25rem",
                    fontFamily: "heading",
                    fontSize: "sm",
                    children:
                      x.gt(0) &&
                      (0, m.jsx)(De.$, { prefix: "$", value: c.mul(x) }),
                  }),
                  (0, m.jsx)(A.x, {
                    color: "gray.500",
                    fontFamily: "heading",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    children: (0, m.jsx)(De.$, {
                      value: c,
                      suffix: ` ${t.symbol.toString()}`,
                    }),
                  }),
                ],
              }),
            }),
            (0, m.jsx)(gt.Td, {
              border: "none",
              children: (0, m.jsxs)(E.k, {
                flexDirection: "column",
                alignItems: "flex-end",
                children: [
                  (0, m.jsxs)(A.x, {
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    lineHeight: "1.25rem",
                    fontFamily: "heading",
                    fontSize: "sm",
                    gap: 1.5,
                    children: [
                      x.gt(0) &&
                        (0, m.jsx)(De.$, { prefix: "$", value: d.mul(x) }),
                      d.gt(0) &&
                        j &&
                        (0, m.jsx)(oa.u, {
                          label: `Withdrawal available in ${y}H${f}M`,
                          children: (0, m.jsx)(ia.w, {}),
                        }),
                    ],
                  }),
                  (0, m.jsx)(k.xu, {
                    color: "gray.500",
                    fontFamily: "heading",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    children:
                      d.gt(0) && !j
                        ? (0, m.jsx)(A.x, {
                            color: "cyan.500",
                            fontFamily: "heading",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            cursor: "pointer",
                            onClick: () => b("withdraw"),
                            children: "Withdraw",
                          })
                        : (0, m.jsx)(De.$, {
                            value: d,
                            suffix: ` ${t.symbol.toString()}`,
                          }),
                  }),
                ],
              }),
            }),
            (0, m.jsx)(gt.Td, {
              border: "none",
              children: (0, m.jsx)(Pt.p, {
                in: !0,
                children: (0, m.jsxs)(E.k, {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  children: [
                    (0, m.jsx)(A.x, {
                      color: "white",
                      lineHeight: "1.25rem",
                      fontFamily: "heading",
                      fontSize: "sm",
                      children: l && l > 0 ? l.toFixed(2).concat("%") : "-",
                    }),
                    w &&
                      (0, m.jsx)(A.x, {
                        color: "cyan.500",
                        fontFamily: "heading",
                        fontSize: "0.75rem",
                        lineHeight: "1rem",
                        cursor: "pointer",
                        onClick: () => b("deposit"),
                        children: "Claim Rewards",
                      }),
                  ],
                }),
              }),
            }),
            (0, m.jsx)(gt.Td, {
              border: "none",
              children: (0, m.jsxs)(E.k, {
                flexDirection: "column",
                alignItems: "flex-end",
                children: [
                  (0, m.jsx)(ja, {
                    debt: a,
                    showPNL: s,
                    lineHeight: "1.25rem",
                    fontFamily: "heading",
                    fontSize: "sm",
                  }),
                  (0, m.jsx)(fe.U, {
                    in: !a.eq(0),
                    children: (0, m.jsx)(A.x, {
                      color: "cyan.500",
                      fontFamily: "heading",
                      fontSize: "0.75rem",
                      lineHeight: "1rem",
                      cursor: "pointer",
                      onClick: () => b(a.gt(0) ? "repay" : "claim"),
                      children: a.gt(0) ? "Repay Debt" : "Claim Credit",
                    }),
                  }),
                ],
              }),
            }),
            !s &&
              (0, m.jsx)(gt.Td, {
                border: "none",
                children: (0, m.jsx)(Pt.p, {
                  in: !0,
                  children: (0, m.jsxs)(E.k, {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    children: [
                      (0, m.jsx)(A.x, {
                        color: "white",
                        fontSize: "sm",
                        lineHeight: "1.25rem",
                        fontFamily: "heading",
                        children: (0, m.jsx)(ga, { value: 100 * o.toNumber() }),
                      }),
                      (0, m.jsx)(ya, {
                        cRatio: 100 * o.toNumber(),
                        liquidationCratio:
                          100 * (t?.liquidationRatioD18?.toNumber() || 0),
                        targetCratio:
                          100 * (t?.issuanceRatioD18.toNumber() || 0),
                      }),
                    ],
                  }),
                }),
              }),
            (0, m.jsx)(gt.Td, {
              border: "none",
              pr: 0,
              children: (0, m.jsx)(E.k, {
                justifyContent: "flex-end",
                children: (0, m.jsx)(I.z, {
                  fontSize: "sm",
                  lineHeight: "1.25rem",
                  height: "2rem",
                  fontWeight: 700,
                  pt: "5px",
                  pb: "5px",
                  pl: "12px",
                  pr: "12px",
                  borderWidth: "1px",
                  borderColor: "gray.900",
                  borderRadius: "4px",
                  onClick: () => b("deposit"),
                  children: "Manage",
                }),
              }),
            }),
          ],
        });
      }
      function wa() {
        const e = Array.from({ length: 2 }, (e, t) => t);
        return (0, m.jsx)(m.Fragment, {
          children: e.map((e) =>
            (0, m.jsxs)(
              xt.Tr,
              {
                borderBottomWidth: 1 === e ? "none" : "1px",
                children: [
                  (0, m.jsx)(gt.Td, {
                    border: "none",
                    children: (0, m.jsxs)(E.k, {
                      alignItems: "center",
                      children: [
                        (0, m.jsx)(Ut, {
                          children: (0, m.jsx)(xe, { symbol: "SNX" }),
                        }),
                        (0, m.jsxs)(E.k, {
                          flexDirection: "column",
                          ml: 3,
                          children: [
                            (0, m.jsx)(Rt, {
                              height: "1rem",
                              mb: 1,
                              width: "70%",
                              children: (0, m.jsx)(A.x, {
                                color: "white",
                                fontWeight: 700,
                                lineHeight: "1.25rem",
                                fontFamily: "heading",
                                children: "sUSDC",
                              }),
                            }),
                            (0, m.jsx)(Rt, {
                              height: "0.75rem",
                              children: (0, m.jsx)(A.x, {
                                color: "gray.500",
                                fontFamily: "heading",
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                children: "Synthetic USDC",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    border: "none",
                    children: (0, m.jsxs)(E.k, {
                      flexDirection: "column",
                      alignItems: "flex-end",
                      children: [
                        (0, m.jsx)(Rt, {
                          height: "1rem",
                          mb: 1,
                          children: (0, m.jsx)(A.x, {
                            color: "white",
                            fontWeight: 700,
                            lineHeight: "1.25rem",
                            fontFamily: "heading",
                            children: "$100,000",
                          }),
                        }),
                        (0, m.jsx)(Rt, {
                          height: "0.75rem",
                          children: (0, m.jsx)(A.x, {
                            color: "gray.500",
                            fontFamily: "heading",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            children: "200 SNX",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    border: "none",
                    children: (0, m.jsxs)(E.k, {
                      flexDirection: "column",
                      alignItems: "flex-end",
                      children: [
                        (0, m.jsx)(Rt, {
                          height: "1rem",
                          mb: 1,
                          children: (0, m.jsx)(A.x, {
                            color: "white",
                            fontWeight: 700,
                            lineHeight: "1.25rem",
                            fontFamily: "heading",
                            children: "$100,000",
                          }),
                        }),
                        (0, m.jsx)(Rt, {
                          height: "0.75rem",
                          children: (0, m.jsx)(A.x, {
                            color: "gray.500",
                            fontFamily: "heading",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            children: "200 SNX",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    border: "none",
                    children: (0, m.jsxs)(E.k, {
                      flexDirection: "column",
                      alignItems: "flex-end",
                      children: [
                        (0, m.jsx)(Rt, {
                          height: "1rem",
                          mb: 1,
                          width: "70%",
                          children: (0, m.jsx)(A.x, {
                            color: "white",
                            fontWeight: 700,
                            lineHeight: "1.25rem",
                            fontFamily: "heading",
                            children: "$20,000",
                          }),
                        }),
                        (0, m.jsx)(Rt, {
                          height: "0.75rem",
                          children: (0, m.jsx)(A.x, {
                            color: "cyan.500",
                            fontFamily: "heading",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            children: "Claim Credit",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    border: "none",
                    children: (0, m.jsxs)(E.k, {
                      flexDirection: "column",
                      alignItems: "flex-end",
                      children: [
                        (0, m.jsx)(Rt, {
                          height: "1rem",
                          mb: 1,
                          children: (0, m.jsx)(A.x, {
                            color: "white",
                            fontWeight: 700,
                            lineHeight: "1.25rem",
                            fontFamily: "heading",
                            children: "5000%",
                          }),
                        }),
                        (0, m.jsx)(Rt, {
                          height: "0.75rem",
                          children: (0, m.jsx)(q.C, {
                            colorScheme: "green",
                            border: "1px solid",
                            bg: "green.900",
                            children: "HEALTHY",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    border: "none",
                    children: (0, m.jsx)(E.k, {
                      flexDirection: "column",
                      children: (0, m.jsx)(Rt, {
                        height: "1.75rem",
                        children: (0, m.jsx)(I.z, {
                          fontSize: "0.75rem",
                          lineHeight: "1rem",
                          height: "1.75rem",
                          fontWeight: 700,
                          borderWidth: "1px",
                          borderColor: "gray.900",
                          borderRadius: "4px",
                          disabled: !0,
                          children: "Manage",
                        }),
                      }),
                    }),
                  }),
                ],
              },
              e
            )
          ),
        });
      }
      const Ca = ({ isLoading: e, positions: t, apr: a, systemToken: r }) => {
        const n = (0, F.s0)(),
          { activeWallet: o } = (0, G.Os)(),
          { network: s } = (0, G.LN)(),
          l = (0, Wt.Yz)(s?.id, s?.preset);
        return (0, m.jsx)(dt.x, {
          maxW: "100%",
          mt: 4,
          borderColor: "gray.900",
          borderWidth: "1px",
          borderRadius: "5px",
          p: 6,
          sx: { borderCollapse: "separate !important", borderSpacing: 0 },
          bg: "navy.700",
          children: o?.address
            ? 0 !== t?.length || e
              ? (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsxs)(E.k, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [
                        (0, m.jsxs)(pe.X, {
                          _hover: { cursor: "pointer", opacity: 0.9 },
                          onClick: () => n(`/pools/${s?.id}/1`),
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: "28px",
                          color: "gray.50",
                          children: [
                            "Spartan Council Pool",
                            s &&
                              (0, m.jsx)(E.k, {
                                alignItems: "center",
                                fontSize: "12px",
                                color: "gray.500",
                                gap: 1,
                                children: (0, m.jsxs)(E.k, {
                                  alignItems: "center",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                  color: "gray.500",
                                  gap: 1,
                                  children: [
                                    (0, m.jsx)(G.dF, {
                                      size: "14px",
                                      networkId: s.id,
                                      mr: 1,
                                    }),
                                    s.label,
                                    " Network",
                                  ],
                                }),
                              }),
                          ],
                        }),
                        (0, m.jsx)(Pt.p, {
                          in: !0,
                          children: (0, m.jsx)(I.z, {
                            as: i.rU,
                            mt: { base: 2, md: 0 },
                            size: "sm",
                            to: {
                              pathname: `/pools/${s?.id}/1`,
                              search: location.search,
                            },
                            variant: "outline",
                            colorScheme: "gray",
                            color: "white",
                            children: "Details",
                          }),
                        }),
                      ],
                    }),
                    (0, m.jsxs)(ut.i, {
                      variant: "simple",
                      children: [
                        (0, m.jsx)(La, { isBase: l }),
                        (0, m.jsxs)(mt.p, {
                          children: [
                            (0, m.jsx)(Aa, {}),
                            e
                              ? (0, m.jsx)(wa, {})
                              : (0, m.jsx)(m.Fragment, {
                                  children: t?.map((e, n) => {
                                    const i = a?.find(
                                      (t) =>
                                        t.collateralType.toLowerCase() ===
                                        e.collateralType.tokenAddress.toLowerCase()
                                    );
                                    return (0, m.jsx)(
                                      ba,
                                      {
                                        ...e,
                                        final: n === t.length - 1,
                                        isBase: l,
                                        apr: 100 * i?.apr7d,
                                        systemTokenSymbol: r?.symbol,
                                      },
                                      e.poolName.concat(n.toString())
                                    );
                                  }),
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, m.jsx)(Sa, {})
            : (0, m.jsx)(Ma, {}),
        });
      };
      function La({ isBase: e }) {
        return (0, m.jsx)(ht.h, {
          children: (0, m.jsxs)(xt.Tr, {
            children: [
              (0, m.jsx)(pt.Th, {
                py: 5,
                textTransform: "unset",
                color: "gray.600",
                border: "none",
                fontFamily: "heading",
                fontSize: "12px",
                lineHeight: "16px",
                children: "Collateral",
              }),
              (0, m.jsx)(pt.Th, {
                textAlign: "right",
                border: "none",
                textTransform: "unset",
                py: 5,
                children: (0, m.jsxs)(E.k, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  children: [
                    (0, m.jsx)(A.x, {
                      color: "gray.600",
                      fontFamily: "heading",
                      fontSize: "12px",
                      lineHeight: "16px",
                      mr: 1,
                      children: "Locked",
                    }),
                    (0, m.jsx)(se.u, {
                      label: (0, m.jsx)(A.x, {
                        textAlign: "left",
                        children:
                          "Unlocked assets can be locked into a position at any time or withdrawn after 24h since last activity",
                      }),
                      children: (0, m.jsx)(ct.s, { w: "10px", h: "10px" }),
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(pt.Th, {
                textAlign: "right",
                border: "none",
                textTransform: "unset",
                py: 5,
                children: (0, m.jsx)(A.x, {
                  color: "gray.600",
                  fontFamily: "heading",
                  fontSize: "12px",
                  lineHeight: "16px",
                  mr: 1,
                  children: "Unlocked",
                }),
              }),
              (0, m.jsx)(pt.Th, {
                border: "none",
                textTransform: "unset",
                py: 5,
                children: (0, m.jsxs)(E.k, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  children: [
                    (0, m.jsx)(A.x, {
                      color: "gray.600",
                      fontFamily: "heading",
                      fontSize: "12px",
                      lineHeight: "16px",
                      mr: 1,
                      children: "APR",
                    }),
                    (0, m.jsx)(se.u, {
                      label: (0, m.jsx)(E.k, {
                        flexDirection: "column",
                        alignItems: "start",
                        children: (0, m.jsx)(A.x, {
                          textAlign: "left",
                          fontSize: "14px",
                          children:
                            "APR is averaged over the trailing 7 days and is comprised of both performance and rewards",
                        }),
                      }),
                      children: (0, m.jsx)(ct.s, { w: "10px", h: "10px" }),
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(pt.Th, {
                border: "none",
                textTransform: "unset",
                py: 5,
                children: (0, m.jsxs)(E.k, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  children: [
                    (0, m.jsx)(A.x, {
                      color: "gray.600",
                      fontFamily: "heading",
                      fontSize: "12px",
                      lineHeight: "16px",
                      mr: 1,
                      children: e ? "PNL" : "Debt",
                    }),
                    (0, m.jsx)(se.u, {
                      label: e
                        ? "Your portion of the pool's total debt, which fluctuates based on trader performance and market conditions"
                        : (0, m.jsxs)(A.x, {
                            textAlign: "left",
                            children: [
                              "Debt consists of:",
                              (0, m.jsx)("br", {}),
                              "- Your portion of the pool's total debt, which fluctuates based on trader performance and market conditions",
                              (0, m.jsx)("br", {}),
                              "- The amount you've borrowed against your collateral without incurring interest",
                            ],
                          }),
                      children: (0, m.jsx)(ct.s, { w: "10px", h: "10px" }),
                    }),
                  ],
                }),
              }),
              !e &&
                (0, m.jsx)(pt.Th, {
                  border: "none",
                  textTransform: "unset",
                  py: 5,
                  children: (0, m.jsxs)(E.k, {
                    justifyContent: "flex-end",
                    alignItems: "center",
                    children: [
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        mr: 1,
                        children: "C-Ratio",
                      }),
                      (0, m.jsx)(se.u, {
                        label: (0, m.jsx)(E.k, {
                          flexDirection: "column",
                          alignItems: "start",
                          children: (0, m.jsx)(A.x, {
                            textAlign: "left",
                            fontSize: "14px",
                            children:
                              "C-ratio is a dynamic number that represents a ratio between your locked collateral and your debt",
                          }),
                        }),
                        children: (0, m.jsx)(ct.s, { w: "10px", h: "10px" }),
                      }),
                    ],
                  }),
                }),
              (0, m.jsx)(pt.Th, {
                py: 5,
                textTransform: "unset",
                color: "gray.600",
                border: "none",
                fontFamily: "heading",
                fontSize: "12px",
                lineHeight: "16px",
                children: " ",
              }),
            ],
          }),
        });
      }
      const Ma = () => {
          const { connect: e } = (0, G.Os)();
          return (0, m.jsxs)(E.k, {
            w: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            children: [
              (0, m.jsx)(A.x, {
                color: "gray.500",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "14px",
                my: "4",
                pl: "3",
                children: "Please connect wallet to view active positions",
              }),
              (0, m.jsx)(I.z, {
                size: "sm",
                "data-cy": "connect wallet button",
                onClick: () => {
                  e();
                },
                children: "Connect Wallet",
              }),
            ],
          });
        },
        Sa = () =>
          (0, m.jsxs)(E.k, {
            justifyContent: "space-between",
            alignItems: "baseline",
            w: "100%",
            children: [
              (0, m.jsx)(A.x, {
                color: "gray.500",
                fontWeight: 500,
                fontSize: "14px",
                my: "4",
                pl: "3",
                children:
                  "You can open a new position by browsing the different Pools and choosing a vault for collateral type",
              }),
              (0, m.jsx)(i.rU, {
                to: "/pools",
                children: (0, m.jsx)(I.z, {
                  size: "sm",
                  "data-cy": "all pools button",
                  children: "Explore all Pools",
                }),
              }),
            ],
          }),
        Aa = () =>
          (0, m.jsxs)(xt.Tr, {
            border: "none",
            borderTop: "1px",
            borderTopColor: "gray.900",
            width: "100%",
            height: "0px",
            children: [
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
              (0, m.jsx)(gt.Td, {
                height: "0px",
                border: "none",
                px: 0,
                pt: 0,
                pb: 4,
              }),
            ],
          });
      var ka = a(16908);
      const Da = () => {
        const e = (0, ue.UO)(),
          { network: t } = (0, G.LN)(),
          { data: a, isPending: r } = ra({ accountId: e.accountId }),
          { data: n } = (0, ka.L)(),
          { data: i, isPending: o } = (0, Xt.p)(),
          s = (function (e, t = !1) {
            const a = e ? Object.keys(e) : [];
            return e
              ? a.map((a) => {
                  const r = e[a];
                  return (
                    t &&
                      "sUSDC" === r.collateralType.symbol &&
                      ((r.collateralType.symbol = "USDC"),
                      (r.collateralType.displaySymbol = "USDC"),
                      (r.collateralType.name = "USD Coin")),
                    r
                  );
                })
              : [];
          })(a, (0, Wt.Yz)(t?.id, t?.preset)),
          l = s.filter(
            (e) => e.collateralAmount?.gt(0) || e.availableCollateral?.gt(0)
          ),
          c = r || o;
        return (0, m.jsxs)(E.k, {
          flexDir: "column",
          children: [
            (0, m.jsx)(pe.X, {
              fontSize: "1.25rem",
              fontFamily: "heading",
              lineHeight: "1.75rem",
              mt: 4,
              children: "Positions",
            }),
            (0, m.jsx)(Ca, {
              isLoading: Boolean(e.accountId && c),
              positions: l,
              apr: n?.collateralAprs,
              systemToken: i,
            }),
          ],
        });
      };
      var va = a(63883),
        Ia = a(13797);
      const Ta = ({
          issuanceRatioD18: e,
          collateralAmount: t,
          collateralPrice: a,
          debt: r,
          collateralChange: n,
          debtChange: i,
        }) => {
          const o = e || (0, Ce.wei)(1),
            s = (0, Ce.wei)(r || 0).add(i),
            l = (0, Ce.wei)(t || 0).add(n),
            c = l.mul(a || 0),
            d = (0, Yt.Zj)(s, c),
            u = (0, Ce.wei)(l)
              .mul(a || 0)
              .div(o)
              .sub(r || 0),
            h = u.gte(0) ? u : (0, Ce.wei)(0);
          return {
            isValid:
              (i.lte(0) && n.gte(0)) ||
              ((d.gte(o) || d.lte(0)) && (s.lte(0) || l.gt(0))),
            hasChanges: !n.eq(0) || !i.eq(0),
            newCRatio: d,
            newDebt: s,
            newCollateralAmount: l,
            maxDebt: h,
          };
        },
        Fa = ({ liquidityPosition: e }) => {
          const t = (0, ue.UO)(),
            { network: a } = (0, G.LN)(),
            { data: r } = (0, Xt.p)(),
            i = (0, Wt.Yz)(a?.id, a?.preset),
            {
              debtChange: o,
              collateralChange: s,
              setDebtChange: l,
            } = (0, n.useContext)(Ia.n),
            { data: c } = (0, Mt.t)(t.collateralSymbol),
            { maxDebt: d } = Ta({
              issuanceRatioD18: c?.issuanceRatioD18,
              collateralAmount: e?.collateralAmount,
              collateralPrice: e?.collateralPrice,
              debt: e?.debt,
              collateralChange: s,
              debtChange: o,
            }),
            u = (0, Ce.wei)(d.toBN().sub(1)),
            h = i ? t.collateralSymbol : r?.symbol;
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsx)(A.x, {
                fontSize: "md",
                fontWeight: "700",
                mb: "2",
                children: i ? "Claim" : "Borrow",
              }),
              (0, m.jsxs)(ve, {
                display: "flex",
                p: 3,
                mb: "6",
                children: [
                  (0, m.jsxs)(A.x, {
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    fontWeight: "600",
                    mx: "2",
                    children: [
                      i ? (0, m.jsx)(va.o, {}) : (0, m.jsx)(V.RF, {}),
                      h,
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    flexGrow: 1,
                    children: [
                      (0, m.jsx)(Ae, {
                        InputProps: {
                          isRequired: !0,
                          "data-cy": "borrow amount input",
                          "data-max": u.toString(),
                          type: "number",
                          min: 0,
                        },
                        value: o,
                        onChange: (e) => l(e),
                        max: u,
                        min: f.GH,
                      }),
                      (0, m.jsx)(E.k, {
                        flexDirection: "column",
                        alignItems: "flex-end",
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        children: (0, m.jsxs)(E.k, {
                          gap: "1",
                          cursor: "pointer",
                          onClick: () => {
                            u && l(u);
                          },
                          children: [
                            (0, m.jsx)(A.x, { children: "Max:" }),
                            (0, m.jsx)(De.$, { value: u }),
                            " ",
                            i ? "USDC" : r?.symbol,
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(fe.U, {
                in: o.gt(0),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  borderRadius: "6px",
                  colorScheme: "orange",
                  mb: "6",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsx)(A.x, {
                      children:
                        "As a security precaution, borrowed assets can only be withdrawn to your wallet after 24 hs since your previous account activity.",
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(I.z, {
                isDisabled: o.lte(0),
                "data-cy": "borrow submit",
                type: "submit",
                children: o.lte(0) ? "Enter Amount" : i ? "Claim" : "Borrow",
              }),
            ],
          });
        };
      var Na = a(95042);
      function Ea() {
        const { network: e } = (0, G.LN)(),
          { activeWallet: t } = (0, G.Os)(),
          a = (0, G.yL)(),
          { data: r } = (0, Mt.t)("SNX"),
          n = t?.address,
          i = r?.tokenAddress;
        return (0, y.useQuery)({
          enabled: Boolean(a && n && i),
          queryKey: [
            `${e?.id}-${e?.preset}`,
            "TransferableSynthetix",
            { address: t?.address },
          ],
          queryFn: async function () {
            if (!(a && n && i))
              throw "useTransferableSynthetix should not be enabled";
            const t = new ie.CH(
              i,
              [
                "function balanceOf(address owner) view returns (uint256)",
                "function transferableSynthetix(address account) view returns (uint256 transferable)",
                "function collateral(address account) view returns (uint256 collateral)",
              ],
              a
            );
            try {
              if ("cannon" === e?.name) {
                const e = await t.balanceOf(n);
                return { transferable: (0, Ce.wei)(e) };
              }
              const [a, r] = await Promise.all([
                t.transferableSynthetix(n),
                t.collateral(n),
              ]);
              return {
                transferable: (0, Ce.wei)(a),
                collateral: (0, Ce.wei)(r),
              };
            } catch (e) {
              throw (console.error(e), e);
            }
          },
        });
      }
      const za = (e, t) =>
          new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
            ...t,
          }).format(Number(e)),
        Pa = (e, t) =>
          new Intl.NumberFormat("en-EN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            ...t,
          }).format(Number(e));
      var Oa = a(52465);
      const Ha = ({
          accountCollateral: e,
          collateralChange: t,
          setCollateralChange: a,
          displaySymbol: r,
          symbol: i,
          tokenBalance: o,
          ethBalance: s,
          snxBalance: l,
          minDelegation: c,
          currentCollateral: d,
          currentDebt: u,
          collateralPrice: h,
          isBase: x,
        }) => {
          const p = ca(i),
            g = (0, n.useMemo)(
              () =>
                "SNX" === i
                  ? l?.transferable || f.GH
                  : "WETH" !== i
                  ? o || f.GH
                  : o && s
                  ? o.add(s)
                  : f.GH,
              [i, o, s, l?.transferable]
            ),
            y = (0, n.useMemo)(
              () => g?.add(e.availableCollateral.toString()),
              [e.availableCollateral, g]
            ),
            j = (0, n.useMemo)(() => {
              const e = [
                {
                  label: "Locked " + i,
                  value: (0, m.jsx)(_e.D, {
                    value: d,
                    newValue: d.add(t),
                    formatFn: (e) => (0, _.Aq)(e),
                    hasChanges: t.abs().gt(0),
                    size: "sm",
                  }),
                },
              ];
              return x
                ? e
                : [
                    ...e,
                    {
                      label: "C-ratio",
                      value: (0, m.jsx)(Oa.p, {
                        currentCollateral: d,
                        currentDebt: u,
                        collateralChange: t,
                        collateralPrice: h,
                        debtChange: f.GH,
                        size: "sm",
                      }),
                    },
                  ];
            }, [t, h, d, u, x, i]),
            b = t.abs().gt(y);
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsx)(A.x, {
                color: "gray./50",
                fontSize: "sm",
                fontWeight: "700",
                mb: "3",
                children: "Deposit & Lock Collateral",
              }),
              (0, m.jsxs)(ve, {
                display: "flex",
                p: 3,
                mb: "6",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: "1",
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: i,
                              width: 16,
                              height: 16,
                            }),
                            r,
                          ],
                        }),
                      }),
                      (0, m.jsx)(oa.u, {
                        label: (0, m.jsxs)(E.k, {
                          flexDirection: "column",
                          alignItems: "flex-start",
                          fontSize: "xs",
                          color: "whiteAlpha.700",
                          children: [
                            (0, m.jsxs)(E.k, {
                              gap: "1",
                              children: [
                                (0, m.jsx)(A.x, {
                                  children: "Unlocked Balance:",
                                }),
                                (0, m.jsx)(De.$, {
                                  value: e?.availableCollateral,
                                }),
                              ],
                            }),
                            (0, m.jsxs)(E.k, {
                              gap: "1",
                              children: [
                                (0, m.jsx)(A.x, {
                                  children: "Wallet Balance:",
                                }),
                                (0, m.jsx)(De.$, {
                                  value: "SNX" === i ? l?.transferable : o,
                                }),
                              ],
                            }),
                            "WETH" === i
                              ? (0, m.jsxs)(E.k, {
                                  gap: "1",
                                  children: [
                                    (0, m.jsx)(A.x, {
                                      children: "ETH Balance:",
                                    }),
                                    (0, m.jsx)(De.$, { value: s }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        children: (0, m.jsxs)(A.x, {
                          fontSize: "12px",
                          "data-cy": "balance amount",
                          children: [
                            "Balance: ",
                            (0, m.jsx)(De.$, { value: y }),
                            y?.gt(0) &&
                              (0, m.jsx)(A.x, {
                                as: "span",
                                cursor: "pointer",
                                onClick: () => {
                                  y && a(y);
                                },
                                color: "cyan.500",
                                fontWeight: 700,
                                children: " Max",
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDir: "column",
                    flexGrow: 1,
                    children: [
                      (0, m.jsx)(Ae, {
                        InputProps: {
                          "data-cy": "deposit amount input",
                          "data-max": y?.toString(),
                          min: 0,
                        },
                        value: t,
                        onChange: (e) => {
                          a(e);
                        },
                        max: y,
                        min: f.GH,
                      }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          p.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: t.abs().mul(p),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              l?.collateral &&
                l?.collateral.gt(0) &&
                "SNX" === i &&
                (0, m.jsx)(st, { mb: "6", tokenBalance: l.collateral }),
              (0, m.jsx)(fe.U, {
                in: t.gt(0) && !b,
                animateOpacity: !0,
                children: (0, m.jsx)(Tt, {}),
              }),
              (0, m.jsx)(fe.U, {
                in: t.gt(0) && t.add(d).lt(c),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  mb: 6,
                  status: "error",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(be.X, {
                      children: [
                        "Your deposit must be ",
                        Pa(parseFloat(c.toString())),
                        " ",
                        i,
                        " or higher",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: b,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  mb: 6,
                  status: "error",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsx)(be.X, {
                      children:
                        "You cannot Deposit & Lock more Collateral than your Balance amount",
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: t.abs().gt(0) && !b && t.add(d).gte(c),
                animateOpacity: !0,
                children: (0, m.jsx)(Ge.v, { mb: 6, items: j }),
              }),
              (0, m.jsx)(I.z, {
                "data-cy": "deposit submit",
                type: "submit",
                isDisabled: t.lte(0) || void 0 === g || t.add(d).lt(c) || b,
                children: t.lte(0)
                  ? "Enter Amount"
                  : "Deposit & Lock Collateral",
              }),
            ],
          });
        },
        $a = ({ liquidityPosition: e }) => {
          const { collateralChange: t, setCollateralChange: a } = (0,
            n.useContext)(Ia.n),
            { network: r } = (0, G.LN)(),
            { collateralSymbol: i } = (0, ue.UO)(),
            { data: o } = (0, Mt.t)(i),
            { data: s } = Ea(),
            l = (0, Wt.Yz)(r?.id, r?.preset),
            { data: c } = (0, Vt.H)((0, Wt.$l)(i)),
            d = l ? c : o?.tokenAddress,
            { data: u } = (0, ke.mM)(d),
            { data: h } = (0, Na.G)();
          return o && e?.accountCollateral
            ? (0, m.jsx)(Ha, {
                accountCollateral: e.accountCollateral,
                displaySymbol: o?.displaySymbol || "",
                tokenBalance: u,
                snxBalance: s,
                ethBalance: h,
                symbol: o?.symbol || "",
                setCollateralChange: a,
                collateralChange: t,
                minDelegation: o.minDelegationD18,
                currentCollateral: e?.collateralAmount ?? f.GH,
                currentDebt: e?.debt ?? f.GH,
                collateralPrice: e?.collateralPrice ?? f.GH,
                isBase: l,
              })
            : null;
        };
      var Ra = a(36371),
        Ua = a(73582),
        Ba = a(2969),
        Wa = a(3181),
        Za = a(13272),
        qa = a(95509);
      const Va = ({ liquidityPosition: e, isDebtWithdrawal: t = !1 }) => {
          const { setWithdrawAmount: a, withdrawAmount: r } = (0, n.useContext)(
              Ia.n
            ),
            i = e?.accountId,
            o = (0, F.UO)(),
            { data: s } = (0, Mt.t)(o.collateralSymbol),
            { network: l } = (0, G.LN)(),
            c = (0, Wt.Yz)(l?.id, l?.preset),
            { data: d } = (0, Xt.p)(),
            { data: u } = (0, Zt.ar)(i, d?.address),
            h = (0, n.useMemo)(
              () =>
                c
                  ? (e?.accountCollateral.availableCollateral || f.GH).add(
                      u?.availableCollateral || f.GH
                    )
                  : t
                  ? u?.availableCollateral || f.GH
                  : e?.accountCollateral.availableCollateral || f.GH,
              [
                c,
                t,
                e?.accountCollateral.availableCollateral,
                u?.availableCollateral,
              ]
            ),
            { data: x, isLoading: p } = da({ accountId: i }),
            g = t ? d?.symbol : s?.symbol,
            y = ca(g),
            { minutes: j, hours: b, isRunning: w } = ha(i),
            C = p ? null : x;
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsxs)(A.x, {
                color: "gray./50",
                fontSize: "sm",
                fontWeight: "700",
                mb: "3",
                children: ["Withdraw ", t ? "" : "Collateral"],
              }),
              (0, m.jsxs)(ve, {
                display: "flex",
                p: 3,
                mb: "6",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: "1",
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          fontSize: "16px",
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: g,
                              width: 16,
                              height: 16,
                            }),
                            g,
                          ],
                        }),
                      }),
                      (0, m.jsxs)(E.k, {
                        fontSize: "12px",
                        gap: "1",
                        children: [
                          (0, m.jsx)(A.x, {
                            children: t ? "Max Withdraw:" : "Unlocked:",
                          }),
                          (0, m.jsx)(De.$, { value: h }),
                          h.gt(0) &&
                            (0, m.jsx)(A.x, {
                              cursor: "pointer",
                              onClick: () => {
                                h && a(h);
                              },
                              color: "cyan.500",
                              fontWeight: 700,
                              children: "Max",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDir: "column",
                    flexGrow: 1,
                    children: [
                      (0, m.jsx)(Ae, {
                        InputProps: {
                          isRequired: !0,
                          "data-cy": "withdraw amount input",
                          "data-max": h.toString(),
                          type: "number",
                          min: 0,
                        },
                        value: r,
                        onChange: (e) => a(e),
                        max: h,
                        min: f.GH,
                      }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          y.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: r.abs().mul(y),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(fe.U, {
                in: h.gt(0) && w,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  status: "warning",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You will be able to withdraw assets in ",
                        b,
                        "H",
                        j,
                        "M. Any account activity will reset this timer to 24H.",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: h.gt(0) && !w,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  status: "success",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You can now withdraw ",
                        (0, m.jsx)(De.$, { value: h, suffix: ` ${g}` }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: r.gt(h),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  colorScheme: "red",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You cannot Withdraw more ",
                        t ? "" : "Collateral",
                        " than your Unlocked Balance",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(I.z, {
                isDisabled: r.lte(0) || w || !C || r.gt(h),
                "data-cy": "claim submit",
                type: "submit",
                children: r.gt(0) ? "Withdraw" : "Enter Amount",
              }),
            ],
          });
        },
        Ga = [
          {
            title: "Deposit & Lock",
            link: "deposit",
            icon: (e) =>
              (0, m.jsxs)("svg", {
                width: "37",
                height: "36",
                viewBox: "0 0 37 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, m.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.875 18C6.875 15.7218 8.72183 13.875 11 13.875H26C28.2782 13.875 30.125 15.7218 30.125 18V27C30.125 29.2782 28.2782 31.125 26 31.125H11C8.72183 31.125 6.875 29.2782 6.875 27V18ZM11 16.125C9.96447 16.125 9.125 16.9645 9.125 18V27C9.125 28.0355 9.96447 28.875 11 28.875H26C27.0355 28.875 27.875 28.0355 27.875 27V18C27.875 16.9645 27.0355 16.125 26 16.125H11Z",
                    fill: "cyan" === e ? "#00D1FF" : "white",
                  }),
                  (0, m.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.375 12C11.375 8.06497 14.565 4.875 18.5 4.875C22.435 4.875 25.625 8.06497 25.625 12V16.125H11.375V12ZM18.5 7.125C15.8076 7.125 13.625 9.30761 13.625 12V13.875H23.375V12C23.375 9.30761 21.1924 7.125 18.5 7.125Z",
                    fill: "cyan" === e ? "#00D1FF" : "white",
                  }),
                ],
              }),
          },
          {
            title: "Unlock",
            link: "undelegate",
            icon: (e) =>
              (0, m.jsxs)("svg", {
                width: "32",
                height: "28",
                viewBox: "0 0 32 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, m.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.375 14C0.375 11.7218 2.22183 9.875 4.5 9.875H19.5C21.7782 9.875 23.625 11.7218 23.625 14V23C23.625 25.2782 21.7782 27.125 19.5 27.125H4.5C2.22183 27.125 0.375 25.2782 0.375 23V14ZM4.5 12.125C3.46447 12.125 2.625 12.9645 2.625 14V23C2.625 24.0355 3.46447 24.875 4.5 24.875H19.5C20.5355 24.875 21.375 24.0355 21.375 23V14C21.375 12.9645 20.5355 12.125 19.5 12.125H4.5Z",
                    fill: "cyan" === e ? "#00D1FF" : "white",
                  }),
                  (0, m.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.875 8C16.875 4.06497 20.065 0.875 24 0.875C27.935 0.875 31.125 4.06497 31.125 8V11H28.875V8C28.875 5.30761 26.6924 3.125 24 3.125C21.3076 3.125 19.125 5.30761 19.125 8V11H16.875V8Z",
                    fill: "cyan" === e ? "#00D1FF" : "white",
                  }),
                ],
              }),
          },
          {
            title: "Withdraw",
            link: "withdraw",
            icon: (e) =>
              (0, m.jsxs)("svg", {
                width: "37",
                height: "36",
                viewBox: "0 0 37 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, m.jsx)("path", {
                    d: "M6.60986 29.7349C6.60986 29.942 6.77776 30.1099 6.98486 30.1099L28.7349 30.1099C28.942 30.1099 29.1099 29.942 29.1099 29.7349L29.1099 21.1099L31.3599 21.1099L31.3599 29.7349C31.3599 31.1846 30.1846 32.3599 28.7349 32.3599L6.98486 32.3599C5.53512 32.3599 4.35986 31.1846 4.35986 29.7349L4.35986 21.1099L6.60986 21.1099L6.60986 22.2348L6.60986 29.7349Z",
                    fill: "cyan" === e ? "#00D1FF" : "white",
                  }),
                  (0, m.jsx)("path", {
                    d: "M18.9849 26.7349L16.7349 26.7349L16.7349 7.94653L12.3555 12.3259L10.8728 10.6273L17.8599 3.64019L24.8469 10.6273L23.3643 12.3259L18.9849 7.94653L18.9849 26.7349Z",
                    fill: "cyan" === e ? "#00D1FF" : "white",
                  }),
                ],
              }),
          },
        ],
        _a = (0, n.lazy)(() =>
          (0, qa.safeImport)(() => a.e(1984).then(a.bind(a, 91984)))
        ),
        Qa = (0, n.lazy)(() =>
          (0, qa.safeImport)(() => a.e(3929).then(a.bind(a, 63929)))
        ),
        Ya = (0, n.lazy)(() =>
          (0, qa.safeImport)(() => a.e(4249).then(a.bind(a, 44249)))
        ),
        Ka = (0, n.lazy)(() =>
          (0, qa.safeImport)(() => Promise.resolve().then(a.bind(a, 14204)))
        ),
        Xa = (0, n.lazy)(() =>
          (0, qa.safeImport)(() => a.e(9545).then(a.bind(a, 49545)))
        ),
        Ja = (0, n.lazy)(() =>
          (0, qa.safeImport)(() => a.e(7665).then(a.bind(a, 17665)))
        ),
        er = At.z.enum([
          "borrow",
          "deposit",
          "repay",
          "claim",
          "undelegate",
          "withdraw",
          "withdraw-debt",
        ]),
        tr = (e) =>
          !e || Ga.find((t) => t.link === e) ? "collateral" : "debt",
        ar = ({
          liquidityPosition: e,
          setTxnModalOpen: t,
          txnModalOpen: a,
        }) => {
          const r = (0, ue.UO)(),
            { network: i } = (0, G.LN)(),
            o = (0, F.s0)(),
            s = (0, F.TH)(),
            {
              debtChange: l,
              collateralChange: c,
              setCollateralChange: d,
              setDebtChange: u,
              setWithdrawAmount: h,
            } = (0, n.useContext)(Ia.n),
            { data: x } = (0, Mt.t)(r.collateralSymbol),
            p = (0, Wt.Yz)(i?.id, i?.preset),
            { isValid: g } = Ta({
              issuanceRatioD18: x?.issuanceRatioD18,
              collateralAmount: e?.collateralAmount,
              collateralPrice: e?.collateralPrice,
              debt: e?.debt,
              collateralChange: c,
              debtChange: l,
            }),
            f = er.safeParse(r.manageAction),
            y = f.success ? f.data : void 0,
            j = !!p || g,
            b = (0, n.useCallback)(
              (e) => {
                e.preventDefault();
                e.target.reportValidity() && j && t(y);
              },
              [j, y, t]
            );
          (0, n.useEffect)(() => {
            const t = new URLSearchParams(s.search);
            if (t.get("manageAction")) return;
            if (!e) return;
            if (!x) return;
            const a = (0, Yt.Zj)(e.debt, e.collateralValue);
            if (!p && (e.debt.eq(0) || a.gt(x.issuanceRatioD18)))
              return (
                t.set("manageAction", "borrow"),
                void o(
                  { pathname: s.pathname, search: t.toString() },
                  { replace: !0 }
                )
              );
            if (a.mul(0.9).lt(x.liquidationRatioD18))
              return (
                t.set("manageAction", p ? "deposit" : "repay"),
                void o(
                  { pathname: s.pathname, search: t.toString() },
                  { replace: !0 }
                )
              );
            t.set("manageAction", "deposit"),
              o(
                { pathname: s.pathname, search: t.toString() },
                { replace: !0 }
              );
          }, [x, p, e, s.pathname, s.search, o]);
          const w = (e) => {
              d((0, Ce.wei)(0)), u((0, Ce.wei)(0));
              const t = new URLSearchParams(s.search);
              t.set("manageAction", e),
                o(
                  { pathname: s.pathname, search: t.toString() },
                  { replace: !0 }
                );
            },
            C = y,
            [L, M] = (0, n.useState)(tr(C)),
            S = ((e) => {
              const t = [
                {
                  title: e ? "Claim" : "Claim/Borrow",
                  link: "claim",
                  icon: (e) =>
                    (0, m.jsxs)("svg", {
                      width: "37",
                      height: "36",
                      viewBox: "0 0 37 36",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, m.jsxs)("g", {
                          clipPath: "url(#clip0_11314_79978)",
                          children: [
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M16.0903 8.50714C9.39782 8.50714 3.97247 13.9325 3.97247 20.625C3.97247 27.3175 9.39782 32.7429 16.0903 32.7429C22.7828 32.7429 28.2082 27.3175 28.2082 20.625C28.2082 13.9325 22.7828 8.50714 16.0903 8.50714ZM1.46533 20.625C1.46533 12.5478 8.01317 6 16.0903 6C24.1675 6 30.7153 12.5478 30.7153 20.625C30.7153 28.7022 24.1675 35.25 16.0903 35.25C8.01317 35.25 1.46533 28.7022 1.46533 20.625Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M14.5792 17.9742C14.589 17.5066 14.7225 17.3161 14.8124 17.2254C14.931 17.1058 15.1602 16.9772 15.5845 16.9097C16.4687 16.769 17.6646 16.9739 18.6515 17.2338L19.8638 17.553L20.5023 15.1286L19.29 14.8093C18.2491 14.5351 16.6222 14.2059 15.1905 14.4337C14.4569 14.5505 13.6548 14.8318 13.0317 15.4605C12.3834 16.1147 12.0715 16.9997 12.0715 18.0296V18.0771L12.0751 18.1244C12.1655 19.316 12.8745 20.108 13.6098 20.6288C14.284 21.1062 15.1197 21.4539 15.7947 21.7348C15.8202 21.7454 15.8454 21.7559 15.8704 21.7664C16.6329 22.084 17.1988 22.3286 17.591 22.6158C17.9362 22.8687 17.9707 23.0216 17.9707 23.1567C17.9707 23.6803 17.8165 23.8884 17.6957 23.9976C17.5342 24.1438 17.2307 24.2862 16.7131 24.3507C15.6587 24.482 14.289 24.2239 13.2807 23.9538L12.0698 23.6296L11.4212 26.0513L12.6321 26.3756C13.6977 26.661 15.462 27.0331 17.023 26.8386C17.8131 26.7402 18.6878 26.4808 19.3774 25.8572C20.1078 25.1967 20.4778 24.2672 20.4778 23.1567C20.4778 21.9459 19.8008 21.1267 19.0724 20.5932C18.4094 20.1076 17.5679 19.7573 16.8907 19.4754C16.8718 19.4675 16.8531 19.4597 16.8345 19.452C16.0731 19.1348 15.4848 18.8844 15.0588 18.5828C14.6976 18.3269 14.602 18.1399 14.5792 17.9742Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M16.0903 25.0125C16.7827 25.0125 17.3439 25.5737 17.3439 26.2661V29.4H14.8368V26.2661C14.8368 25.5737 15.398 25.0125 16.0903 25.0125Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M17.3439 11.85V14.9839C17.3439 15.6763 16.7827 16.2375 16.0903 16.2375C15.398 16.2375 14.8368 15.6763 14.8368 14.9839V11.85H17.3439Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              d: "M30.5 4.5V1.5H33.5V4.5H36.5V7.5H33.5V10.5H30.5V7.5H27.5V4.5H30.5Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                          ],
                        }),
                        (0, m.jsx)("defs", {
                          children: (0, m.jsx)("clipPath", {
                            id: "clip0_11314_79978",
                            children: (0, m.jsx)("rect", {
                              width: "36",
                              height: "36",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                              transform: "translate(0.5)",
                            }),
                          }),
                        }),
                      ],
                    }),
                },
                {
                  title: "Repay Debt",
                  link: "repay",
                  icon: (e) =>
                    (0, m.jsxs)("svg", {
                      width: "37",
                      height: "36",
                      viewBox: "0 0 37 36",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, m.jsxs)("g", {
                          clipPath: "url(#clip0_11314_79981)",
                          children: [
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M16.0903 8.50714C9.39782 8.50714 3.97247 13.9325 3.97247 20.625C3.97247 27.3175 9.39782 32.7429 16.0903 32.7429C22.7828 32.7429 28.2082 27.3175 28.2082 20.625C28.2082 13.9325 22.7828 8.50714 16.0903 8.50714ZM1.46533 20.625C1.46533 12.5478 8.01317 6 16.0903 6C24.1675 6 30.7153 12.5478 30.7153 20.625C30.7153 28.7022 24.1675 35.25 16.0903 35.25C8.01317 35.25 1.46533 28.7022 1.46533 20.625Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M14.5792 17.9742C14.589 17.5066 14.7225 17.3161 14.8124 17.2254C14.931 17.1058 15.1602 16.9772 15.5845 16.9097C16.4687 16.769 17.6646 16.9739 18.6515 17.2338L19.8638 17.553L20.5023 15.1286L19.29 14.8093C18.2491 14.5351 16.6222 14.2059 15.1905 14.4337C14.4569 14.5505 13.6548 14.8318 13.0317 15.4605C12.3834 16.1147 12.0715 16.9997 12.0715 18.0296V18.0771L12.0751 18.1244C12.1655 19.316 12.8745 20.108 13.6098 20.6288C14.284 21.1062 15.1197 21.4539 15.7947 21.7348C15.8202 21.7454 15.8454 21.7559 15.8704 21.7664C16.6329 22.084 17.1988 22.3286 17.591 22.6158C17.9362 22.8687 17.9707 23.0216 17.9707 23.1567C17.9707 23.6803 17.8165 23.8884 17.6957 23.9976C17.5342 24.1438 17.2307 24.2862 16.7131 24.3507C15.6587 24.482 14.289 24.2239 13.2807 23.9538L12.0698 23.6296L11.4212 26.0513L12.6321 26.3756C13.6977 26.661 15.462 27.0331 17.023 26.8386C17.8131 26.7402 18.6878 26.4808 19.3774 25.8572C20.1078 25.1967 20.4778 24.2672 20.4778 23.1567C20.4778 21.9459 19.8008 21.1267 19.0724 20.5932C18.4094 20.1076 17.5679 19.7573 16.8907 19.4754C16.8718 19.4675 16.8531 19.4597 16.8345 19.452C16.0731 19.1348 15.4848 18.8844 15.0588 18.5828C14.6976 18.3269 14.602 18.1399 14.5792 17.9742Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M16.0903 25.0125C16.7827 25.0125 17.3439 25.5737 17.3439 26.2661V29.4H14.8368V26.2661C14.8368 25.5737 15.398 25.0125 16.0903 25.0125Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M17.3439 11.85V14.9839C17.3439 15.6763 16.7827 16.2375 16.0903 16.2375C15.398 16.2375 14.8368 15.6763 14.8368 14.9839V11.85H17.3439Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              d: "M30.5 4.5H33.5H36.5V7.5H33.5H30.5H27.5V4.5H30.5Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                          ],
                        }),
                        (0, m.jsx)("defs", {
                          children: (0, m.jsx)("clipPath", {
                            id: "clip0_11314_79981",
                            children: (0, m.jsx)("rect", {
                              width: "36",
                              height: "36",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                              transform: "translate(0.5)",
                            }),
                          }),
                        }),
                      ],
                    }),
                },
              ];
              return e
                ? t
                : [
                    ...t,
                    {
                      title: "Withdraw",
                      link: "withdraw-debt",
                      icon: (e) =>
                        (0, m.jsxs)("svg", {
                          width: "37",
                          height: "36",
                          viewBox: "0 0 37 36",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, m.jsx)("path", {
                              d: "M6.60986 29.7349C6.60986 29.942 6.77776 30.1099 6.98486 30.1099L28.7349 30.1099C28.942 30.1099 29.1099 29.942 29.1099 29.7349L29.1099 21.1099L31.3599 21.1099L31.3599 29.7349C31.3599 31.1846 30.1846 32.3599 28.7349 32.3599L6.98486 32.3599C5.53512 32.3599 4.35986 31.1846 4.35986 29.7349L4.35986 21.1099L6.60986 21.1099L6.60986 22.2348L6.60986 29.7349Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                            (0, m.jsx)("path", {
                              d: "M18.9849 26.7349L16.7349 26.7349L16.7349 7.94653L12.3555 12.3259L10.8728 10.6273L17.8599 3.64019L24.8469 10.6273L23.3643 12.3259L18.9849 7.94653L18.9849 26.7349Z",
                              fill: "cyan" === e ? "#00D1FF" : "white",
                            }),
                          ],
                        }),
                    },
                  ];
            })(p);
          return (
            (0, n.useEffect)(() => {
              M(tr(C));
            }, [C]),
            (0, m.jsxs)(m.Fragment, {
              children: [
                a
                  ? null
                  : (0, m.jsxs)(k.xu, {
                      as: "form",
                      onSubmit: b,
                      children: [
                        (0, m.jsxs)(Ra.m, {
                          isFitted: !0,
                          index: "collateral" === L ? 0 : 1,
                          children: [
                            (0, m.jsxs)(Ua.t, {
                              children: [
                                (0, m.jsx)(Ba.O, {
                                  color:
                                    "collateral" === L ? "white" : "gray.500",
                                  fontWeight: 700,
                                  fontSize: ["12px", "16px"],
                                  onClick: () => {
                                    "collateral" !== L && w(Ga[0].link);
                                  },
                                  whiteSpace: "nowrap",
                                  children: "Manage Collateral",
                                }),
                                (0, m.jsx)(Ba.O, {
                                  color: "debt" === L ? "white" : "gray.500",
                                  fontWeight: 700,
                                  fontSize: ["12px", "16px"],
                                  onClick: () => {
                                    "debt" !== L && w(S[0].link);
                                  },
                                  whiteSpace: "nowrap",
                                  children: "Manage " + (p ? "PnL" : "Debt"),
                                }),
                              ],
                            }),
                            (0, m.jsxs)(Wa.n, {
                              children: [
                                (0, m.jsx)(Za.x, {
                                  px: "0",
                                  children: (0, m.jsx)(E.k, {
                                    flexDir: ["column", "row"],
                                    gap: 4,
                                    children: Ga.map((e) =>
                                      (0, m.jsxs)(
                                        E.k,
                                        {
                                          h: "84px",
                                          minH: ["90px", "84px"],
                                          justifyContent: "center",
                                          border: "1px solid",
                                          flexDir: "column",
                                          alignItems: "center",
                                          borderColor:
                                            C === e.link
                                              ? "cyan.500"
                                              : "gray.900",
                                          rounded: "base",
                                          cursor: "pointer",
                                          onClick: () => w(e.link),
                                          flex: "1",
                                          minWidth: ["100%", "auto"],
                                          children: [
                                            e.icon(
                                              C === e.link ? "cyan" : "white"
                                            ),
                                            (0, m.jsx)(A.x, {
                                              fontSize: "14px",
                                              fontWeight: 700,
                                              mt: "2",
                                              color:
                                                C === e.link
                                                  ? "cyan.500"
                                                  : "white",
                                              textAlign: "center",
                                              lineHeight: "1.1",
                                              children: e.title,
                                            }),
                                          ],
                                        },
                                        e.title.concat("-tab-actions")
                                      )
                                    ),
                                  }),
                                }),
                                (0, m.jsx)(Za.x, {
                                  px: "0",
                                  children: (0, m.jsx)(E.k, {
                                    flexDir: ["column", "row"],
                                    gap: 4,
                                    children: S.map((e) =>
                                      (0, m.jsxs)(
                                        E.k,
                                        {
                                          flex: "1",
                                          h: "84px",
                                          minH: ["90px", "84px"],
                                          justifyContent: "center",
                                          border: "1px solid",
                                          flexDir: "column",
                                          alignItems: "center",
                                          borderColor:
                                            C === e.link
                                              ? "cyan.500"
                                              : "gray.900",
                                          rounded: "base",
                                          cursor: "pointer",
                                          onClick: () => w(e.link),
                                          minWidth: ["100%", "auto"],
                                          children: [
                                            e.icon(
                                              C === e.link ? "cyan" : "white"
                                            ),
                                            (0, m.jsx)(A.x, {
                                              fontSize: "14px",
                                              fontWeight: 700,
                                              mt: "2",
                                              color:
                                                C === e.link
                                                  ? "cyan.500"
                                                  : "white",
                                              textAlign: "center",
                                              lineHeight: "1.1",
                                              children: e.title,
                                            }),
                                          ],
                                        },
                                        e.title.concat("-tab-actions")
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, m.jsxs)(E.k, {
                          direction: "column",
                          children: [
                            "borrow" === C
                              ? (0, m.jsx)(Fa, { liquidityPosition: e })
                              : null,
                            "claim" === C
                              ? (0, m.jsx)(hn, { liquidityPosition: e })
                              : null,
                            "withdraw" === C
                              ? (0, m.jsx)(Va, { liquidityPosition: e })
                              : null,
                            "withdraw-debt" === C
                              ? (0, m.jsx)(Va, {
                                  liquidityPosition: e,
                                  isDebtWithdrawal: !0,
                                })
                              : null,
                            "deposit" === C
                              ? (0, m.jsx)($a, { liquidityPosition: e })
                              : null,
                            "repay" === C
                              ? (0, m.jsx)(Tr, { liquidityPosition: e })
                              : null,
                            "undelegate" === C
                              ? (0, m.jsx)($r, { liquidityPosition: e })
                              : null,
                          ],
                        }),
                      ],
                    }),
                (0, m.jsxs)(n.Suspense, {
                  fallback: (0, m.jsxs)(E.k, {
                    gap: 4,
                    flexDirection: "column",
                    children: [
                      (0, m.jsx)(Et.O, {
                        maxW: "232px",
                        width: "100%",
                        height: "20px",
                      }),
                      (0, m.jsx)(U.i, { my: 4 }),
                      (0, m.jsx)(Et.O, { width: "100%", height: "20px" }),
                      (0, m.jsx)(Et.O, { width: "100%", height: "20px" }),
                    ],
                  }),
                  children: [
                    "repay" === a
                      ? (0, m.jsx)(_a, {
                          availableCollateral:
                            e?.usdCollateral.availableCollateral,
                          onClose: () => {
                            d((0, Ce.wei)(0)), u((0, Ce.wei)(0)), t(void 0);
                          },
                          isOpen: "repay" === a,
                        })
                      : null,
                    "borrow" === a
                      ? (0, m.jsx)(Qa, {
                          onClose: () => {
                            d((0, Ce.wei)(0)), u((0, Ce.wei)(0)), t(void 0);
                          },
                          isOpen: "borrow" === a,
                        })
                      : null,
                    "claim" === a
                      ? (0, m.jsx)(Ya, {
                          onClose: () => {
                            d((0, Ce.wei)(0)), u((0, Ce.wei)(0)), t(void 0);
                          },
                          isOpen: "claim" === a,
                          liquidityPosition: e,
                        })
                      : null,
                    "deposit" === a
                      ? (0, m.jsx)(Ka, {
                          onClose: () => {
                            d((0, Ce.wei)(0)), u((0, Ce.wei)(0)), t(void 0);
                          },
                          isOpen: "deposit" === a,
                          liquidityPosition: e,
                        })
                      : null,
                    "undelegate" === a
                      ? (0, m.jsx)(Xa, {
                          liquidityPosition: e,
                          onClose: () => {
                            d((0, Ce.wei)(0)), u((0, Ce.wei)(0)), t(void 0);
                          },
                          isOpen: "undelegate" === a,
                        })
                      : null,
                    "withdraw" === a
                      ? (0, m.jsx)(Ja, {
                          liquidityPosition: e,
                          onClose: () => {
                            d((0, Ce.wei)(0)),
                              u((0, Ce.wei)(0)),
                              h((0, Ce.wei)(0)),
                              t(void 0);
                          },
                          isOpen: "withdraw" === a,
                          account: !0,
                        })
                      : null,
                    "withdraw-debt" === a
                      ? (0, m.jsx)(Ja, {
                          liquidityPosition: e,
                          onClose: () => {
                            d((0, Ce.wei)(0)),
                              u((0, Ce.wei)(0)),
                              h((0, Ce.wei)(0)),
                              t(void 0);
                          },
                          isOpen: "withdraw-debt" === a,
                          account: !0,
                          isDebtWithdrawal: !0,
                        })
                      : null,
                  ],
                }),
              ],
            })
          );
        };
      var rr = a(20688),
        nr = a(65311),
        ir = a(25195);
      const or = ({ left: e, text: t, tooltipText: a }) =>
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(k.xu, {
                position: "absolute",
                height: "40%",
                transform: "translateX(-50%)",
                left: e,
                top: 0,
                bottom: 0,
                margin: "auto",
                children: (0, m.jsxs)(A.x, {
                  color: "gray.700",
                  whiteSpace: "nowrap",
                  fontSize: "xx-small",
                  transform: "translateY(calc(-100% - 10px) )",
                  children: [
                    t,
                    " ",
                    (0, m.jsx)(oa.u, {
                      label: a,
                      hasArrow: !0,
                      children: (0, m.jsx)(ct.s, {}),
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(k.xu, {
                position: "absolute",
                height: "40%",
                width: "1px",
                bg: "gray.900",
                left: e,
                top: 0,
                bottom: 0,
                margin: "auto",
              }),
            ],
          }),
        sr = ({
          targetCratio: e,
          liquidationCratio: t,
          currentCRatio: a,
          newCratio: r,
          hasChanges: n,
        }) => {
          const i = xa(
              n
                ? { targetCratio: e, liquidationCratio: t, cRatio: r }
                : { targetCratio: e, liquidationCratio: t, cRatio: a }
            ),
            o = ma({ cRatio: r, targetCratio: e, liquidationCratio: t }),
            s = ma({ cRatio: a, targetCratio: e, liquidationCratio: t });
          return (0, m.jsxs)(E.k, {
            flexDir: "column",
            gap: "2",
            children: [
              (0, m.jsxs)(A.x, {
                color: "gray.500",
                fontSize: "xs",
                children: [
                  "C-Ratio",
                  " ",
                  (0, m.jsx)(oa.u, {
                    textAlign: "left",
                    label:
                      "C-ratio is a dynamic number that represents a ratio between your locked collateral and your debt",
                    p: "3",
                    children: (0, m.jsx)(ct.s, { w: "10px", h: "10px" }),
                  }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                color: "white",
                fontWeight: 800,
                fontSize: "20px",
                flexDir: ["column", "row"],
                alignItems: "center",
                gap: 2,
                children: [
                  (0, m.jsx)(ga, { value: a }),
                  n
                    ? (0, m.jsxs)(m.Fragment, {
                        children: [
                          (0, m.jsx)("span", { children: "→" }),
                          (0, m.jsx)(A.x, {
                            children:
                              !r || r < 0
                                ? "N/A"
                                : pa(r)
                                ? "Infinite"
                                : `${r.toFixed(2)} %`,
                          }),
                        ],
                      })
                    : null,
                  0 !== (n ? r || 0 : a)
                    ? (0, m.jsx)(ya, {
                        cRatio: n ? r || 0 : a,
                        liquidationCratio: t,
                        targetCratio: e,
                      })
                    : null,
                ],
              }),
              (0, m.jsxs)(k.xu, {
                position: "relative",
                height: "100px",
                width: "full",
                overflowX: "hidden",
                children: [
                  (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(or, {
                        left: "25%",
                        text: t
                          ? `Liquidation < ${t.toFixed(0)}%`
                          : "Liquidation",
                        tooltipText:
                          "Point at which your Position gets liquidated",
                      }),
                      (0, m.jsx)(or, {
                        left: "75%",
                        text: e
                          ? `Borrowing Ratio ${
                              pa(e) ? "Infinite" : e.toFixed(0)
                            }%`
                          : "Borrowing Ratio",
                        tooltipText: "Min point at which you can borrow assets",
                      }),
                    ],
                  }),
                  (0, m.jsxs)(k.xu, {
                    top: 0,
                    bottom: 0,
                    height: "12px",
                    position: "absolute",
                    margin: "auto",
                    width: "100%",
                    children: [
                      (0, m.jsx)(ir.E, {
                        variant:
                          s < o && !(s >= 100 && o > 100) ? `update-${i}` : i,
                        top: 0,
                        bottom: 0,
                        height: "12px",
                        position: "absolute",
                        margin: "auto",
                        left: "0",
                        width: "100%",
                        value: Math.min(o, s),
                      }),
                      (0, m.jsx)(ir.E, {
                        variant: s >= o ? `update-${i}` : i,
                        top: 0,
                        bottom: 0,
                        height: "12px",
                        position: "absolute",
                        margin: "auto",
                        width: "100%",
                        left: `${Math.min(o, s)}%`,
                        display: 0 === r ? "none" : "block",
                        value: Math.abs(o - s),
                      }),
                    ],
                  }),
                  (0, m.jsx)(k.xu, {
                    bg: i,
                    height: "12px",
                    position: "absolute",
                    left: `${o}%`,
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    display: 0 === r ? "none" : "block",
                    children:
                      a > 0
                        ? (0, m.jsxs)(m.Fragment, {
                            children: [
                              (0, m.jsx)(rr.A, {
                                position: "absolute",
                                right: 0,
                                top: 0,
                                transform: "translate(50%,-100%)",
                                color: i,
                              }),
                              (0, m.jsx)(nr.$, {
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                                transform: "translate(50%,100%)",
                                color: i,
                              }),
                            ],
                          })
                        : null,
                  }),
                ],
              }),
            ],
          });
        },
        lr = ({
          newCratio: e,
          currentCRatio: t,
          targetCratio: a,
          liquidationCratio: r,
          hasChanges: n,
        }) =>
          (0, m.jsx)(sr, {
            liquidationCratio: r || 100,
            targetCratio: a || 100,
            currentCRatio: t || 0,
            newCratio: e,
            hasChanges: n,
          });
      function cr({
        liquidityPosition: e,
        collateralType: t,
        newCollateralAmount: a,
        hasChanges: r,
      }) {
        return (0, m.jsx)(ve, {
          p: 4,
          flex: "1",
          flexDirection: "row",
          bg: "navy.700",
          children: (0, m.jsxs)(E.k, {
            opacity: e || r ? "100%" : "40%",
            flexDirection: "column",
            width: "100%",
            children: [
              (0, m.jsx)(E.k, {
                alignItems: "center",
                mb: "4px",
                children: (0, m.jsx)(A.x, {
                  color: "gray.500",
                  fontSize: "xs",
                  fontFamily: "heading",
                  lineHeight: "16px",
                  children: "Collateral",
                }),
              }),
              (0, m.jsxs)(E.k, {
                width: "100%",
                children: [
                  e && t
                    ? (0, m.jsxs)(E.k, {
                        direction: "column",
                        children: [
                          (0, m.jsx)(_e.D, {
                            value: e.collateralAmount,
                            newValue: a,
                            formatFn: (e) =>
                              (0, m.jsxs)(m.Fragment, {
                                children: [(0, _.Aq)(e), " ", t.displaySymbol],
                              }),
                            hasChanges: r,
                            "data-cy": "manage stats collateral",
                          }),
                          (0, m.jsx)(_e.D, {
                            value: e.collateralAmount.mul(e.collateralPrice),
                            newValue: a.mul(e.collateralPrice),
                            formatFn: (e) =>
                              (0, _.Aq)(e, {
                                currency: "USD",
                                style: "currency",
                              }),
                            size: "md",
                            hasChanges: r,
                            "data-cy": "manage stats collateral",
                          }),
                        ],
                      })
                    : null,
                  e && t
                    ? null
                    : (0, m.jsxs)(E.k, {
                        direction: "column",
                        children: [
                          (0, m.jsx)(_e.D, {
                            value: f.GH,
                            newValue: a,
                            formatFn: (e) =>
                              (0, m.jsxs)(m.Fragment, {
                                children: [(0, _.Aq)(e), " ", t?.displaySymbol],
                              }),
                            hasChanges: r,
                          }),
                          (0, m.jsx)(A.x, {
                            fontWeight: "400",
                            color: "white",
                            fontSize: "16px",
                            children: (0, _.Aq)(f.GH, {
                              currency: "USD",
                              style: "currency",
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          }),
        });
      }
      function dr({ debt: e, newDebt: t, hasChanges: a }) {
        const { network: r } = (0, G.LN)(),
          n = (0, Wt.Yz)(r?.id, r?.preset);
        return (0, m.jsx)(ve, {
          p: 4,
          flex: "1",
          flexDirection: "row",
          bg: "navy.700",
          children: (0, m.jsxs)(E.k, {
            flexDirection: "column",
            width: "100%",
            children: [
              (0, m.jsxs)(E.k, {
                alignItems: "center",
                mb: "4px",
                children: [
                  (0, m.jsx)(A.x, {
                    color: "gray.500",
                    fontSize: "xs",
                    fontFamily: "heading",
                    lineHeight: "16px",
                    children: "Debt",
                  }),
                  (0, m.jsx)(oa.u, {
                    label: n
                      ? "Your portion of the pool's total debt, which fluctuates based on trader performance and market conditions"
                      : (0, m.jsxs)(A.x, {
                          children: [
                            "Debt consists of:",
                            (0, m.jsx)("br", {}),
                            "- Your portion of the pool's total debt, which fluctuates based on trader performance and market conditions",
                            (0, m.jsx)("br", {}),
                            "- The amount you've borrowed against your collateral without incurring interest",
                          ],
                        }),
                    textAlign: "start",
                    py: 2,
                    px: 3,
                    children: (0, m.jsx)(E.k, {
                      height: "12px",
                      width: "12px",
                      ml: "4px",
                      alignItems: "center",
                      justifyContent: "center",
                      children: (0, m.jsx)(ct.s, {
                        color: "gray.500",
                        height: "10px",
                        width: "10px",
                      }),
                    }),
                  }),
                ],
              }),
              (0, m.jsx)(E.k, {
                width: "100%",
                children: (0, m.jsx)(_e.D, {
                  value: e,
                  newValue: t,
                  formatFn: (e) => (0, m.jsx)(ja, { debt: e, as: "span" }),
                  hasChanges: a,
                }),
              }),
            ],
          }),
        });
      }
      function ur({ debt: e, newDebt: t, hasChanges: a }) {
        const { network: r } = (0, G.LN)(),
          n = (0, Wt.Yz)(r?.id, r?.preset);
        return (0, m.jsx)(ve, {
          p: 4,
          flex: "1",
          flexDirection: "row",
          bg: "navy.700",
          justifyContent: "space-between",
          children: (0, m.jsxs)(E.k, {
            flexDirection: "column",
            width: "100%",
            children: [
              (0, m.jsxs)(E.k, {
                alignItems: "center",
                mb: "4px",
                children: [
                  (0, m.jsx)(A.x, {
                    color: "gray.500",
                    fontSize: "xs",
                    fontFamily: "heading",
                    lineHeight: "16px",
                    children: "PnL",
                  }),
                  (0, m.jsx)(se.u, {
                    label: n
                      ? "Your portion of the pool's total debt, which fluctuates based on trader performance and market conditions"
                      : (0, m.jsxs)(A.x, {
                          children: [
                            "Debt consists of:",
                            (0, m.jsx)("br", {}),
                            "- Your portion of the pool's total debt, which fluctuates based on trader performance and market conditions",
                            (0, m.jsx)("br", {}),
                            "- The amount you've borrowed against your collateral without incurring interest",
                          ],
                        }),
                    textAlign: "start",
                    py: 2,
                    px: 3,
                    children: (0, m.jsx)(E.k, {
                      height: "12px",
                      width: "12px",
                      ml: "4px",
                      alignItems: "center",
                      justifyContent: "center",
                      children: (0, m.jsx)(ct.s, {
                        color: "white",
                        height: "9px",
                        width: "9px",
                      }),
                    }),
                  }),
                ],
              }),
              (0, m.jsx)(E.k, {
                width: "100%",
                children: (0, m.jsx)(_e.D, {
                  value: e.mul(-1),
                  newValue: t.mul(-1),
                  formatFn: (e) =>
                    (0, _.Aq)(e, {
                      currency: "USD",
                      style: "currency",
                      maximumFractionDigits: 4,
                    }),
                  withColor: !0,
                  hasChanges: a,
                }),
              }),
            ],
          }),
        });
      }
      const hr = ({
          liquidityPosition: e,
          collateralType: t,
          collateralValue: a,
          cRatio: r,
          newCollateralAmount: n,
          newCratio: i,
          newDebt: o,
          hasChanges: s,
          debt: l,
        }) => {
          const { network: c } = (0, G.LN)();
          return (0, m.jsxs)(E.k, {
            direction: "column",
            gap: 4,
            children: [
              (0, m.jsx)(A.x, {
                color: "white",
                fontSize: "lg",
                fontFamily: "heading",
                fontWeight: "bold",
                lineHeight: "16px",
                children: "Overview",
              }),
              (0, m.jsxs)(E.k, {
                flexWrap: "wrap",
                direction: ["column", "row"],
                gap: 4,
                children: [
                  (0, m.jsx)(cr, {
                    liquidityPosition: e,
                    collateralType: t,
                    newCollateralAmount: n,
                    collateralValue: a,
                    hasChanges: s,
                  }),
                  (0, Wt.Yz)(c?.id, c?.preset)
                    ? (0, m.jsx)(ur, {
                        debt: e ? e.debt : f.GH,
                        newDebt: o,
                        hasChanges: s,
                      })
                    : (0, m.jsx)(dr, {
                        debt: e ? e.debt : f.GH,
                        newDebt: o,
                        hasChanges: s,
                      }),
                ],
              }),
              (0, Wt.Yz)(c?.id, c?.preset)
                ? null
                : (0, m.jsx)(ve, {
                    py: 4,
                    px: 6,
                    flexDirection: "column",
                    bg: "navy.700",
                    children: (0, m.jsx)(lr, {
                      hasChanges: s,
                      currentCRatio:
                        a.gt(0) && l.eq(0)
                          ? Number.MAX_SAFE_INTEGER
                          : 100 * r.toNumber(),
                      liquidationCratio:
                        100 * (t?.liquidationRatioD18?.toNumber() || 0),
                      newCratio:
                        n.gt(0) && o.eq(0)
                          ? Number.MAX_SAFE_INTEGER
                          : 100 * i.toNumber(),
                      targetCratio: 100 * (t?.issuanceRatioD18.toNumber() || 0),
                    }),
                  }),
            ],
          });
        },
        xr = ({ liquidityPosition: e }) => {
          const { collateralSymbol: t } = (0, ue.UO)(),
            { debtChange: a, collateralChange: r } = (0, n.useContext)(Ia.n),
            { data: i } = (0, Mt.t)(t),
            o = e?.collateralValue || (0, Ce.wei)(0),
            s = (0, Yt.Zj)(e?.debt || (0, Ce.wei)(0), o),
            {
              newCRatio: l,
              newCollateralAmount: c,
              newDebt: d,
              hasChanges: u,
            } = Ta({
              issuanceRatioD18: i?.issuanceRatioD18,
              collateralAmount: e?.collateralAmount,
              collateralPrice: e?.collateralPrice,
              debt: e?.debt,
              collateralChange: r,
              debtChange: a,
            });
          return (0, m.jsx)(hr, {
            hasChanges: u,
            newCratio: l,
            newDebt: d,
            newCollateralAmount: c,
            liquidityPosition: e,
            collateralType: i,
            cRatio: s,
            collateralValue: o,
            debt: e?.debt || f.GH,
          });
        };
      var pr = a(14204),
        mr = a(75429),
        gr = a(36474);
      const fr = ({ onClose: e, onConfirm: t }) =>
          (0, m.jsxs)(ge.g, {
            spacing: 2,
            align: "start",
            children: [
              (0, m.jsxs)(E.k, {
                children: [
                  (0, m.jsxs)(ge.g, {
                    gap: 6,
                    flex: 1,
                    align: "start",
                    fontWeight: "400",
                    fontSize: "14px",
                    children: [
                      (0, m.jsx)(pe.X, {
                        size: "sm",
                        children: "Synthetix V3 is now live!",
                      }),
                      (0, m.jsxs)(A.x, {
                        children: [
                          "Migrate to Synthetix V3 to ",
                          (0, m.jsx)("b", {
                            children: "earn fees from both V2 and V3 ",
                          }),
                          "markets and much more:",
                        ],
                      }),
                      (0, m.jsxs)(D.aV, {
                        spacing: 2,
                        children: [
                          (0, m.jsxs)(D.HC, {
                            children: [
                              (0, m.jsx)(D.DE, { as: qe.n, color: "cyan.500" }),
                              "V2 Legacy Market Fees",
                            ],
                          }),
                          (0, m.jsxs)(D.HC, {
                            children: [
                              (0, m.jsx)(D.DE, { as: qe.n, color: "cyan.500" }),
                              "V3 SC Pool Fees",
                            ],
                          }),
                          (0, m.jsxs)(D.HC, {
                            children: [
                              (0, m.jsx)(D.DE, { as: qe.n, color: "cyan.500" }),
                              "LP Incentives",
                            ],
                          }),
                          (0, m.jsxs)(D.HC, {
                            children: [
                              (0, m.jsx)(D.DE, { as: qe.n, color: "cyan.500" }),
                              "Improved LP experience",
                            ],
                          }),
                        ],
                      }),
                      (0, m.jsxs)(A.x, {
                        fontSize: "sm",
                        children: [
                          "Learn more about",
                          " ",
                          (0, m.jsx)(v.r, {
                            target: "_blank",
                            color: "cyan.500",
                            href: "https://docs.synthetix.io/v/synthetix-v3-user-documentation/liquidity-providers-aka-staking/providing-liquidity-and-earning-rewards/staking-snx-on-eth-mainnet-v3-via-migration-to-legacy-market",
                            children: "Synthetix V3 migration process",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsx)(E.k, {
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    children: (0, m.jsx)(he.E, {
                      width: "165px",
                      src: "/synthetix-rocket.png",
                      alt: "Synthetix V3 Launch",
                    }),
                  }),
                ],
              }),
              (0, m.jsx)(gr.L, {}),
              (0, m.jsx)(gr.L, {}),
              (0, m.jsx)(gr.L, {}),
              (0, m.jsx)(gr.L, {}),
              (0, m.jsx)(I.z, {
                width: "100%",
                onClick: t,
                children: "Start Migration",
              }),
              (0, m.jsx)(I.z, {
                variant: "outline",
                colorScheme: "gray",
                width: "100%",
                onClick: e,
                children: "Later",
              }),
            ],
          }),
        yr = ({ onClose: e, onConfirm: t }) =>
          (0, m.jsxs)(ge.g, {
            spacing: 2,
            align: "start",
            children: [
              (0, m.jsx)(A.x, {
                fontWeight: "700",
                children: "Migrating to Synthetix V3 consists of:",
              }),
              (0, m.jsxs)(E.k, {
                mt: 2.5,
                flexDir: "column",
                gap: 2.5,
                fontSize: "14px",
                fontWeight: "400",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "center",
                    gap: 2.5,
                    children: [
                      (0, m.jsx)(E.k, {
                        width: 4,
                        children: (0, m.jsxs)("svg", {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 12 12",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M8.66602 3.33464C8.66602 4.80739 7.47211 6.0013 5.99935 6.0013C4.52659 6.0013 3.33268 4.80739 3.33268 3.33464C3.33268 1.86188 4.52659 0.667969 5.99935 0.667969C7.47211 0.667969 8.66602 1.86188 8.66602 3.33464ZM7.66602 3.33464C7.66602 4.27782 6.90541 5.01653 5.99935 5.01653C5.09329 5.01653 4.33268 4.27782 4.33268 3.33464C4.33268 2.39145 5.09329 1.65274 5.99935 1.65274C6.90541 1.65274 7.66602 2.39145 7.66602 3.33464Z",
                              fill: "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M5.99935 6.66797C3.05383 6.66797 0.666016 8.06086 0.666016 9.77908V10.3499C0.666016 10.8937 1.11373 11.3346 1.66602 11.3346H10.3327C10.885 11.3346 11.3327 10.8937 11.3327 10.3499V9.77908C11.3327 8.06086 8.94487 6.66797 5.99935 6.66797ZM1.66602 9.77908C1.66602 9.40806 1.92996 8.89769 2.73776 8.42647C3.52361 7.96806 4.67444 7.65274 5.99935 7.65274C7.32426 7.65274 8.47509 7.96806 9.26093 8.42647C10.0687 8.89769 10.3327 9.40806 10.3327 9.77908V10.3499H1.66602V9.77908Z",
                              fill: "white",
                            }),
                          ],
                        }),
                      }),
                      (0, m.jsx)(A.x, {
                        flex: 1,
                        children: "Creation of an Account on Synthetix V3",
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    alignItems: "center",
                    gap: 2.5,
                    children: [
                      (0, m.jsx)(E.k, {
                        width: 4,
                        children: (0, m.jsxs)("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M12.5701 3.50845C11.9243 2.86259 10.8771 2.86259 10.2313 3.50845C9.58542 4.1543 9.58542 5.20144 10.2313 5.8473C10.8771 6.49315 11.9243 6.49315 12.5701 5.8473C13.216 5.20144 13.216 4.1543 12.5701 3.50845ZM10.9384 4.21555C11.1937 3.96022 11.6077 3.96022 11.863 4.21555C12.1184 4.47089 12.1184 4.88486 11.863 5.14019C11.6077 5.39552 11.1937 5.39552 10.9384 5.14019C10.6831 4.88486 10.6831 4.47089 10.9384 4.21555Z",
                              fill: "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M14.4058 1.67272C14.2735 1.54042 14.1066 1.46073 13.9626 1.40881C13.8117 1.35441 13.6425 1.31534 13.4696 1.28623C13.1236 1.22799 12.7119 1.20147 12.2952 1.19264C10.2345 1.14896 8.39798 2.27302 7.20433 3.86456L6.48635 4.82186L6.43706 4.92045L3.84686 3.81037C3.65893 3.72983 3.44091 3.77182 3.29634 3.91639L1.0527 6.16003C0.857434 6.3553 0.857434 6.67188 1.0527 6.86714L1.52372 7.33816C2.18804 8.00248 3.23127 8.05696 3.95773 7.50159L4.71241 7.80346L4.31617 8.1997C4.12091 8.39496 4.12091 8.71155 4.31617 8.90681L4.37057 8.9612L3.50031 9.83146C3.30505 10.0267 3.30505 10.3433 3.50031 10.5386C3.69558 10.7338 4.01216 10.7338 4.20742 10.5386L5.07767 9.66831L6.41025 11.0009L5.54001 11.8711C5.34474 12.0664 5.34474 12.383 5.54001 12.5782C5.73527 12.7735 6.05185 12.7735 6.24711 12.5782L7.11736 11.708L7.17172 11.7624C7.36698 11.9576 7.68356 11.9576 7.87883 11.7624L8.27507 11.3661L8.57696 12.1208C8.02159 12.8473 8.07606 13.8905 8.74038 14.5548L9.21141 15.0259C9.40667 15.2211 9.72325 15.2211 9.91851 15.0259L12.1622 12.7822C12.3067 12.6377 12.3487 12.4196 12.2682 12.2317L11.1581 9.6415L11.2567 9.5922L12.214 8.87423C13.8055 7.68057 14.9296 5.84407 14.8859 3.78334C14.8771 3.36665 14.8506 2.95499 14.7923 2.60896C14.7632 2.43601 14.7241 2.26687 14.6697 2.11599C14.6178 1.97199 14.5381 1.80503 14.4058 1.67272ZM12.274 2.19241C12.6699 2.2008 13.0267 2.22574 13.3036 2.27236C13.4422 2.29568 13.5481 2.3224 13.6234 2.34953C13.6631 2.36383 13.6859 2.37534 13.6971 2.38149C13.7032 2.39263 13.7147 2.4155 13.729 2.45518C13.7562 2.53041 13.7829 2.6364 13.8062 2.77495C13.8528 3.05189 13.8778 3.40864 13.8861 3.80452C13.9215 5.4747 13.0078 7.02884 11.614 8.07423L10.7288 8.7381L8.64387 9.78058L6.29798 7.43468L7.34045 5.34972L8.00433 4.46456C9.04972 3.07071 10.6038 2.15702 12.274 2.19241ZM3.76408 4.86286L5.98907 5.81643L5.39713 7.00031L4.1224 6.49042C3.88643 6.39603 3.61693 6.45135 3.43722 6.63106C3.10409 6.96419 2.56396 6.96419 2.23083 6.63106L2.11336 6.51359L3.76408 4.86286ZM10.2621 10.0895L9.07823 10.6814L9.58813 11.9562C9.68251 12.1921 9.62719 12.4616 9.44749 12.6413C9.11435 12.9745 9.11435 13.5146 9.44749 13.8477L9.56496 13.9652L11.2157 12.3145L10.2621 10.0895ZM5.68956 8.24052L5.37683 8.55325L7.52527 10.7017L7.83801 10.389L5.68956 8.24052Z",
                              fill: "white",
                            }),
                            (0, m.jsx)("path", {
                              d: "M5.22726 11.5584C5.42252 11.3631 5.42252 11.0466 5.22726 10.8513C5.032 10.656 4.71542 10.656 4.52015 10.8513L3.50031 11.8711C3.30505 12.0664 3.30505 12.383 3.50031 12.5782C3.69558 12.7735 4.01216 12.7735 4.20742 12.5782L5.22726 11.5584Z",
                              fill: "white",
                            }),
                          ],
                        }),
                      }),
                      (0, m.jsx)(A.x, {
                        flex: 1,
                        children:
                          "Migration of your SNX Collateral (including escrowed SNX) and your debt to a New Liquidity Position on the Liquidity App",
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    alignItems: "center",
                    gap: 2.5,
                    children: [
                      (0, m.jsx)(E.k, {
                        width: 4,
                        children: (0, m.jsxs)("svg", {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 12 12",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M0.833984 6.0013C0.833984 4.98878 1.6548 4.16797 2.66732 4.16797H9.33398C10.3465 4.16797 11.1673 4.98878 11.1673 6.0013V10.0013C11.1673 11.0138 10.3465 11.8346 9.33398 11.8346H2.66732C1.6548 11.8346 0.833984 11.0138 0.833984 10.0013V6.0013ZM2.66732 5.16797C2.20708 5.16797 1.83398 5.54106 1.83398 6.0013V10.0013C1.83398 10.4615 2.20708 10.8346 2.66732 10.8346H9.33398C9.79422 10.8346 10.1673 10.4615 10.1673 10.0013V6.0013C10.1673 5.54106 9.79422 5.16797 9.33398 5.16797H2.66732Z",
                              fill: "white",
                            }),
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M2.83398 3.33464C2.83398 1.58573 4.25175 0.167969 6.00065 0.167969C7.74955 0.167969 9.16732 1.58573 9.16732 3.33464V5.16797H2.83398V3.33464ZM6.00065 1.16797C4.80403 1.16797 3.83398 2.13802 3.83398 3.33464V4.16797H8.16732V3.33464C8.16732 2.13802 7.19727 1.16797 6.00065 1.16797Z",
                              fill: "white",
                            }),
                          ],
                        }),
                      }),
                      (0, m.jsx)(A.x, {
                        flex: 1,
                        children: "Lock of funds for 7 days",
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    alignItems: "center",
                    gap: 2.5,
                    children: [
                      (0, m.jsx)(E.k, {
                        width: 4,
                        children: (0, m.jsxs)("svg", {
                          width: "10",
                          height: "11",
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, m.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M3.43675 4.45617L2.13565 3.15508L9.26758 3.15508L9.26758 2.42138L2.13565 2.42138L3.43675 1.12028L2.91803 0.601562L0.731365 2.78823L2.91803 4.9749L3.43675 4.45617ZM6.56219 6.08028L7.86329 7.38138L0.731363 7.38138L0.731363 8.11508L7.86329 8.11508L6.56219 9.41617L7.08091 9.9349L9.26758 7.74823L7.08091 5.56156L6.56219 6.08028Z",
                              fill: "white",
                            }),
                            (0, m.jsx)("path", {
                              d: "M2.13565 3.15508L2.13565 2.95508L1.65281 2.95508L1.99423 3.2965L2.13565 3.15508ZM3.43675 4.45617L3.57817 4.5976L3.7196 4.45617L3.57817 4.31475L3.43675 4.45617ZM9.26758 3.15508L9.26758 3.35508L9.46758 3.35508L9.46758 3.15508L9.26758 3.15508ZM9.26758 2.42138L9.46758 2.42138L9.46758 2.22138L9.26758 2.22138L9.26758 2.42138ZM2.13565 2.42138L1.99423 2.27996L1.65281 2.62138L2.13565 2.62138L2.13565 2.42138ZM3.43675 1.12028L3.57817 1.2617L3.7196 1.12028L3.57817 0.978862L3.43675 1.12028ZM2.91803 0.601562L3.05945 0.460141L2.91803 0.31872L2.77661 0.460141L2.91803 0.601562ZM0.731365 2.78823L0.589943 2.64681L0.448522 2.78823L0.589943 2.92965L0.731365 2.78823ZM2.91803 4.9749L2.77661 5.11632L2.91803 5.25774L3.05945 5.11632L2.91803 4.9749ZM7.86329 7.38138L7.86329 7.58138L8.34613 7.58138L8.00471 7.23996L7.86329 7.38138ZM6.56219 6.08028L6.42077 5.93886L6.27935 6.08028L6.42077 6.22171L6.56219 6.08028ZM0.731363 7.38138L0.731364 7.18138L0.531363 7.18138L0.531363 7.38138L0.731363 7.38138ZM0.731363 8.11508L0.531363 8.11508L0.531363 8.31508L0.731363 8.31508L0.731363 8.11508ZM7.86329 8.11508L8.00471 8.2565L8.34613 7.91508L7.86329 7.91508L7.86329 8.11508ZM6.56219 9.41617L6.42077 9.27475L6.27935 9.41617L6.42077 9.5576L6.56219 9.41617ZM7.08091 9.9349L6.93949 10.0763L7.08091 10.2177L7.22233 10.0763L7.08091 9.9349ZM9.26758 7.74823L9.409 7.88965L9.55042 7.74823L9.409 7.60681L9.26758 7.74823ZM7.08091 5.56156L7.22233 5.42014L7.08091 5.27872L6.93949 5.42014L7.08091 5.56156ZM1.99423 3.2965L3.29533 4.5976L3.57817 4.31475L2.27707 3.01365L1.99423 3.2965ZM9.26758 2.95508L2.13565 2.95508L2.13565 3.35508L9.26758 3.35508L9.26758 2.95508ZM9.06758 2.42138L9.06758 3.15508L9.46758 3.15508L9.46758 2.42138L9.06758 2.42138ZM2.13565 2.62138L9.26758 2.62138L9.26758 2.22138L2.13565 2.22138L2.13565 2.62138ZM3.29533 0.978862L1.99423 2.27996L2.27707 2.5628L3.57817 1.2617L3.29533 0.978862ZM2.77661 0.742984L3.29533 1.2617L3.57817 0.978862L3.05945 0.460141L2.77661 0.742984ZM0.872786 2.92965L3.05945 0.742984L2.77661 0.460141L0.589943 2.64681L0.872786 2.92965ZM3.05945 4.83347L0.872786 2.64681L0.589943 2.92965L2.77661 5.11632L3.05945 4.83347ZM3.29533 4.31475L2.77661 4.83347L3.05945 5.11632L3.57817 4.5976L3.29533 4.31475ZM8.00471 7.23996L6.70361 5.93886L6.42077 6.22171L7.72187 7.5228L8.00471 7.23996ZM0.731363 7.58138L7.86329 7.58138L7.86329 7.18138L0.731364 7.18138L0.731363 7.58138ZM0.931364 8.11508L0.931364 7.38138L0.531363 7.38138L0.531363 8.11508L0.931364 8.11508ZM7.86329 7.91508L0.731364 7.91507L0.731363 8.31508L7.86329 8.31508L7.86329 7.91508ZM6.70361 9.5576L8.00471 8.2565L7.72187 7.97366L6.42077 9.27475L6.70361 9.5576ZM7.22233 9.79347L6.70361 9.27475L6.42077 9.5576L6.93949 10.0763L7.22233 9.79347ZM9.12616 7.60681L6.93949 9.79347L7.22233 10.0763L9.409 7.88965L9.12616 7.60681ZM6.93949 5.70298L9.12616 7.88965L9.409 7.60681L7.22233 5.42014L6.93949 5.70298ZM6.70361 6.22171L7.22233 5.70298L6.93949 5.42014L6.42077 5.93886L6.70361 6.22171Z",
                              fill: "white",
                            }),
                          ],
                        }),
                      }),
                      (0, m.jsxs)(A.x, {
                        flex: 1,
                        children: [
                          "(optional) Conversion of your sUSD into V3 compatible sUSD. You can",
                          (0, m.jsx)(v.r, {
                            color: "cyan.500",
                            target: "_blank",
                            href: `${window.location.origin}/#/?convert=snxusd`,
                            children: " convert your sUSD ",
                          }),
                          "at anytime",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsxs)(ye.b, {
                my: 6,
                status: "info",
                borderRadius: "6px",
                children: [
                  (0, m.jsx)(je.z, {}),
                  (0, m.jsxs)(A.x, {
                    fontSize: "14px",
                    children: [
                      "Migration to V3 is currently only available on ",
                      (0, m.jsx)("b", { children: "Ethereum Mainnet" }),
                      ". Learn more about",
                      (0, m.jsx)(v.r, {
                        color: "cyan.500",
                        href: "https://blog.synthetix.io/synthetix-v3-migration-treasury-council-initiates-transition/",
                        isExternal: !0,
                        children: " migrating to V3.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(I.z, {
                width: "100%",
                onClick: t,
                children: "Continue",
              }),
              (0, m.jsx)(I.z, {
                width: "100%",
                variant: "outline",
                colorScheme: "gray",
                onClick: e,
                children: "Back",
              }),
            ],
          });
      var jr = a(29117),
        br = a(78876);
      function wr(e) {
        const { activeWallet: t } = (0, G.Os)(),
          a = (0, G.eK)(e),
          { data: r } = re(e),
          { data: n } = Te(e),
          i = t?.address;
        return (0, y.useQuery)({
          queryKey: [
            `${e?.id}-${e?.preset}`,
            "V2Position",
            { walletAddress: i },
            { contractsHash: (0, ne.K)([n, r]) },
          ],
          enabled: Boolean(a && i && n && r),
          queryFn: async function () {
            if (!(a && i && n && r)) throw "OMFG";
            const e = new Ze.vU(n.abi),
              t = [
                {
                  target: n.address,
                  callData: e.encodeFunctionData("collateral", [i]),
                },
                {
                  target: n.address,
                  callData: e.encodeFunctionData("balanceOf", [i]),
                },
                {
                  target: n.address,
                  callData: e.encodeFunctionData("debtBalanceOf", [
                    i,
                    Fe.s("sUSD"),
                  ]),
                },
                {
                  target: n.address,
                  callData: e.encodeFunctionData("collateralisationRatio", [i]),
                },
                {
                  target: n.address,
                  callData: e.encodeFunctionData("transferableSynthetix", [i]),
                },
              ],
              o = new ie.CH(r.address, r.abi, a),
              { returnData: s } = await o.callStatic.aggregate(t),
              [l, c, d, u, h] = [
                (0, Ce.wei)(e.decodeFunctionResult("collateral", s[0])[0]),
                (0, Ce.wei)(e.decodeFunctionResult("collateral", s[1])[0]),
                (0, Ce.wei)(e.decodeFunctionResult("collateral", s[2])[0]),
                (0, Ce.wei)(e.decodeFunctionResult("collateral", s[3])[0]),
                (0, Ce.wei)(e.decodeFunctionResult("collateral", s[4])[0]),
              ];
            return {
              collateral: l,
              balance: c,
              debt: d,
              cratio: u,
              transferableSynthetix: h,
            };
          },
        });
      }
      const Cr = ({ onConfirm: e, collateral: t, cRatio: a, accountId: r }) => {
        const [i, o] = (0, n.useState)("Copy");
        return (0, m.jsxs)(ge.g, {
          spacing: 6,
          children: [
            (0, m.jsxs)(A.x, {
              width: "100%",
              textAlign: "left",
              fontSize: "14px",
              children: [
                "Your ",
                (0, m.jsx)("b", { children: "Collateral" }),
                " has been migrated to Synthetix V3 System",
              ],
            }),
            (0, m.jsxs)(ye.b, {
              rounded: "base",
              colorScheme: "green",
              borderRadius: "6px",
              children: [
                (0, m.jsx)(E.k, {
                  bg: "green.500",
                  p: "1",
                  rounded: "full",
                  mr: "3.5",
                  children: (0, m.jsx)(qe.n, {
                    w: "12px",
                    h: "12px",
                    color: "green.900",
                  }),
                }),
                (0, m.jsxs)(A.x, {
                  fontSize: "16px",
                  children: [
                    (0, m.jsx)("b", { children: "Collateral" }),
                    " successfully migrated",
                  ],
                }),
              ],
            }),
            (0, m.jsx)(Ge.v, {
              width: "100%",
              items: [
                { label: "Total Collateral", value: t },
                { label: "C-ratio", value: `${a}%` },
                {
                  label: "Account Id",
                  value: (0, m.jsxs)(m.Fragment, {
                    children: [
                      `#${r}`,
                      (0, m.jsx)(oa.u, {
                        label: i,
                        closeOnClick: !1,
                        children: (0, m.jsx)(K.T, {
                          ml: "2",
                          onClick: () => {
                            navigator.clipboard.writeText(r),
                              o("Copied"),
                              setTimeout(() => {
                                o("Copy");
                              }, 1e4);
                          },
                          cursor: "pointer",
                        }),
                      }),
                    ],
                  }),
                },
              ],
            }),
            (0, m.jsx)(I.z, {
              width: "100%",
              onClick: e,
              children: "Continue",
            }),
          ],
        });
      };
      var Lr = a(58105);
      const Mr = ({ onClose: e, network: t, onConfirm: r }) => {
          const { data: i } = (0, Mt.t)("SNX"),
            [o, s] = (0, n.useState)(!1),
            { data: l } = wr(t),
            {
              migrate: c,
              transaction: d,
              isLoading: u,
              isSuccess: h,
              accountId: x,
            } = (function () {
              const [e, t] = (0, n.useState)(!1),
                [a, r] = (0, n.useState)(!1),
                { network: i } = (0, G.LN)(),
                o = (0, G.M9)(),
                s = (0, G.mx)(),
                { data: l } = Re(),
                { gasSpeed: c } = (0, b.jU)(),
                d = (0, y.useQueryClient)(),
                u = (0, n.useMemo)(
                  () => Math.floor(1e12 * Math.random()).toString(),
                  []
                ),
                { data: h } = (0, y.useQuery)({
                  queryKey: [
                    `${i?.id}-${i?.preset}`,
                    "MigrateTxn",
                    { contractsHash: (0, ne.K)([l]) },
                  ],
                  enabled: Boolean(s && l),
                  queryFn: async function () {
                    if (!l || !s) throw "OMFG";
                    const e = new ie.CH(l.address, l.abi, s),
                      t = await s.getAddress(),
                      a = await e.populateTransaction.migrate(u, { from: t });
                    try {
                      const [e, t] = await Promise.all([
                          await o?.estimateGas(a),
                          await o?.getFeeData(),
                        ]),
                        r = await (0, Ue.o)({ provider: s.provider }),
                        n = (0, Be.F)({
                          gasLimit: (0, Ce.wei)(e || f.GH).toBN(),
                          gasPrices: r,
                          gasSpeed: c,
                        });
                      return {
                        ...a,
                        gasLimit: n.gasLimit,
                        gasPrice: t?.gasPrice,
                      };
                    } catch (e) {
                      if (l)
                        try {
                          const t = new Ze.vU(l.abi),
                            a = We(e),
                            r = t.parseError(a);
                          console.error("error:", r);
                        } catch {}
                      return null;
                    }
                  },
                });
              return {
                migrate: (0, n.useCallback)(async () => {
                  try {
                    if (!(l && s && h)) throw "OMFG";
                    t(!0), r(!1);
                    const e = await (0, Ue.o)({ provider: s.provider }),
                      a = await s.getAddress(),
                      n = new ie.CH(l.address, l.abi, s),
                      x = await n.populateTransaction.migrate(u, { from: a }),
                      p = await o?.estimateGas(x),
                      m = (0, Be.F)({
                        gasLimit: (0, Ce.wei)(p || f.GH).toBN(),
                        gasPrices: e,
                        gasSpeed: c,
                      }),
                      g = await n.migrate(u, { ...m });
                    await g.wait(),
                      t(!1),
                      r(!0),
                      d.invalidateQueries({
                        queryKey: [`${i?.id}-${i?.preset}`, "Accounts"],
                      });
                  } catch (e) {
                    throw (t(!1), e);
                  }
                }, [u, c, l, i?.id, i?.preset, o, d, s, h]),
                transaction: h,
                isLoading: e,
                isSuccess: a,
                accountId: u,
              };
            })(),
            { data: p } = (function () {
              const e = (0, G.eK)(G.RR);
              return (0, y.useQuery)({
                queryKey: ["rates-mainnet"],
                enabled: Boolean(e),
                queryFn: async function () {
                  if (!e) throw "Mainnet provider missing";
                  const { address: t, abi: r } = await a
                      .e(1530)
                      .then(a.bind(a, 21530)),
                    n = new ie.CH(t, r, e),
                    i = await n.ratesForCurrencies([
                      (0, Lr.formatBytes32String)("SNX"),
                      (0, Lr.formatBytes32String)("ETH"),
                    ]);
                  return {
                    snx: (0, Ce.wei)(i[0] || 0),
                    eth: (0, Ce.wei)(i[1] || 0),
                  };
                },
                staleTime: 6e4,
                refetchInterval: 6e4,
              });
            })(),
            g = p?.snx || f.GH,
            j = p?.eth || f.GH,
            [w, C] = (0, n.useState)({
              collateral: "0",
              cRatio: "0",
              accountId: "",
            }),
            L = l?.cratio.eq(0)
              ? "0"
              : (0, Ce.wei)(1)
                  .div(l?.cratio || (0, Ce.wei)(1))
                  .mul(100)
                  .toString(2),
            M = (0, n.useCallback)(() => {
              C({
                cRatio: L,
                collateral: l?.collateral?.toString(2) || "0",
                accountId: x,
              }),
                c();
            }, [x, L, l?.collateral, c]);
          return h
            ? (0, m.jsx)(Cr, {
                onConfirm: () => r(w.accountId),
                cRatio: w.cRatio,
                collateral: w.collateral,
                accountId: w.accountId,
              })
            : (0, m.jsxs)(ge.g, {
                spacing: 2.5,
                align: "start",
                fontSize: "12px",
                children: [
                  (0, m.jsx)(pe.X, {
                    size: "sm",
                    children: "Summary of your migration",
                  }),
                  (0, m.jsx)(k.xu, {
                    p: 3.5,
                    borderRadius: "4px",
                    background: "#1F1F34",
                    width: "100%",
                    children: (0, m.jsxs)(jr.U, {
                      fontWeight: "700",
                      justifyContent: "space-between",
                      children: [
                        (0, m.jsx)(A.x, { children: "C-Ratio" }),
                        (0, m.jsxs)(jr.U, {
                          children: [
                            (0, m.jsxs)(A.x, { children: [L, "%"] }),
                            (0, m.jsx)(ya, {
                              cRatio: Number(L),
                              liquidationCratio: 105,
                              targetCratio: 500,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsxs)(A.x, {
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "gray",
                    as: "i",
                    children: [
                      "Warning: if your c-ratio is below V3 liquidation ratio (105%), your account will be",
                      " ",
                      (0, m.jsx)(v.r, {
                        target: "_blank",
                        color: "cyan.500",
                        href: "https://docs.synthetix.io/v/v3/for-liquidity-integrators/liquidity-positions/position-liquidations",
                        children: "liquidated",
                      }),
                      " ",
                      "during the migration. We recommend to commence this migration only if you have a healthy c-ratio.",
                    ],
                  }),
                  (0, m.jsx)(k.xu, {
                    p: 3.5,
                    borderRadius: "4px",
                    background: "#1F1F34",
                    width: "100%",
                    children: (0, m.jsxs)(ge.g, {
                      align: "stretch",
                      spacing: 3,
                      children: [
                        (0, m.jsxs)(jr.U, {
                          fontWeight: "700",
                          justifyContent: "space-between",
                          children: [
                            (0, m.jsxs)(A.x, {
                              children: [
                                "SNX Collateral",
                                " ",
                                (0, m.jsx)(oa.u, {
                                  hasArrow: !0,
                                  textAlign: "left",
                                  label:
                                    "Your SNX Collateral will not appear on your wallet anymore as it will be deposited in your Account. You can see the details on your Dashboard.",
                                  children: (0, m.jsx)(ct.s, {}),
                                }),
                              ],
                            }),
                            (0, m.jsxs)(A.x, {
                              children: [
                                l?.collateral?.toString(2),
                                " SNX",
                                g?.gt(0) &&
                                  (0, m.jsxs)(m.Fragment, {
                                    children: [
                                      " ($",
                                      g.mul(l?.collateral).toString(2),
                                      ")",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, m.jsxs)(jr.U, {
                          color: "gray",
                          justifyContent: "space-between",
                          children: [
                            (0, m.jsx)(A.x, { children: "Balance" }),
                            (0, m.jsxs)(A.x, {
                              children: [
                                l?.balance?.toString(2),
                                " SNX",
                                g?.gt(0) &&
                                  (0, m.jsxs)(m.Fragment, {
                                    children: [
                                      " ($",
                                      g.mul(l?.balance).toString(2),
                                      ")",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, m.jsxs)(jr.U, {
                          color: "gray",
                          justifyContent: "space-between",
                          children: [
                            (0, m.jsxs)(A.x, {
                              children: [
                                "Escrowed",
                                " ",
                                (0, m.jsx)(oa.u, {
                                  hasArrow: !0,
                                  textAlign: "left",
                                  label:
                                    "Escrowed SNX will be locked in the V3 system until the escrowed date. It can still be delegated but not withdrawn.",
                                  children: (0, m.jsx)(ct.s, {}),
                                }),
                              ],
                            }),
                            (0, m.jsxs)(A.x, {
                              children: [
                                l?.collateral?.sub(l?.balance)?.toString(2),
                                " SNX",
                                g?.gt(0) &&
                                  (0, m.jsxs)(m.Fragment, {
                                    children: [
                                      " ($",
                                      g
                                        .mul(l?.collateral?.sub(l?.balance))
                                        .toString(2),
                                      ")",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, m.jsxs)(jr.U, {
                          fontWeight: "700",
                          justifyContent: "space-between",
                          children: [
                            (0, m.jsxs)(A.x, {
                              children: [
                                "Debt",
                                " ",
                                (0, m.jsx)(oa.u, {
                                  hasArrow: !0,
                                  label: (0, m.jsx)(A.x, {
                                    textAlign: "left",
                                    children:
                                      "Your debt amount will be the same on V3. Debt is however now determined by the collateral deposited.",
                                  }),
                                  children: (0, m.jsx)(ct.s, {}),
                                }),
                              ],
                            }),
                            (0, m.jsxs)(A.x, {
                              children: ["$", l?.debt?.toString(2)],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(br.X, {
                    size: "sm",
                    onChange: (e) => s(e.currentTarget.checked),
                    children: "I understand that this action cannot be undone",
                  }),
                  (0, m.jsx)(k.xu, {
                    mb: 3.5,
                    p: 3.5,
                    borderRadius: "4px",
                    background: "#1F1F34",
                    width: "100%",
                    children: (0, m.jsxs)(jr.U, {
                      justifyContent: "space-between",
                      children: [
                        (0, m.jsx)(A.x, { children: "Estimated Gas" }),
                        void 0 !== d &&
                          (0, m.jsx)(m.Fragment, {
                            children: d?.gasLimit.gt(0)
                              ? (0, m.jsxs)(A.x, {
                                  children: [
                                    (0, m.jsx)(De.$, {
                                      value: (0, Ce.wei)(
                                        (0, Lr.formatEther)(
                                          d?.gasLimit
                                            .mul(d.gasPrice || 1)
                                            .toString() || 0
                                        )
                                      ),
                                      suffix: " ETH",
                                    }),
                                    j?.gt(0) &&
                                      (0, m.jsxs)(m.Fragment, {
                                        children: [
                                          " ($",
                                          j
                                            .mul(
                                              (0, Lr.formatEther)(
                                                d?.gasLimit
                                                  .mul(d.gasPrice || 1)
                                                  .toString() || 0
                                              )
                                            )
                                            .toString(2),
                                          ")",
                                        ],
                                      }),
                                  ],
                                })
                              : (0, m.jsx)(A.x, {
                                  color: "red",
                                  children:
                                    "Transaction error occured, please seek support",
                                }),
                          }),
                      ],
                    }),
                  }),
                  (0, m.jsx)(fe.U, {
                    in: l?.balance.lt(i?.minDelegationD18),
                    animateOpacity: !0,
                    children: (0, m.jsxs)(ye.b, {
                      mb: 3.5,
                      status: "error",
                      borderRadius: "6px",
                      children: [
                        (0, m.jsx)(je.z, {}),
                        (0, m.jsxs)(be.X, {
                          fontSize: "16px",
                          children: [
                            "The minimal locked amount on V3 is ",
                            (0, m.jsx)(De.$, { value: i?.minDelegationD18 }),
                            " ",
                            "SNX. You can manually unstake your V2 SNX on the",
                            " ",
                            (0, m.jsx)(v.r, {
                              textDecoration: "underline",
                              href: "https://staking.synthetix.io/staking/burn",
                              target: "_blank",
                              children: "Staking App",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  u
                    ? (0, m.jsxs)(E.k, {
                        fontSize: "14px",
                        fontWeight: 700,
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        gap: 2,
                        p: 3,
                        color: "cyan.500",
                        children: [(0, m.jsx)(N.$, {}), "Loading"],
                      })
                    : (0, m.jsxs)(m.Fragment, {
                        children: [
                          (0, m.jsx)(I.z, {
                            width: "100%",
                            isDisabled: !(
                              d?.gasLimit &&
                              d?.gasLimit.gt(0) &&
                              o
                            ),
                            onClick: M,
                            children: "Migrate",
                          }),
                          (0, m.jsx)(I.z, {
                            variant: "outline",
                            colorScheme: "gray",
                            onClick: e,
                            width: "100%",
                            children: "Cancel",
                          }),
                        ],
                      }),
                ],
              });
        },
        Sr = ({ network: e, onClose: t, isOpen: a, onSuccess: r }) => {
          const i = (0, y.useQueryClient)(),
            [o, s] = (0, n.useState)(0);
          return (
            (0, n.useEffect)(() => {
              a || s(0);
            }, [a]),
            (0, m.jsxs)(w.u_, {
              size: "lg",
              isOpen: a,
              onClose: t,
              closeOnOverlayClick: !1,
              children: [
                (0, m.jsx)(C.Z, {}),
                (0, m.jsxs)(L.h, {
                  mt: "100px",
                  borderWidth: "1px",
                  borderColor: "gray.900",
                  bg: "navy.900",
                  color: "white",
                  children: [
                    (0, m.jsxs)(E.k, {
                      justifyContent: "space-between",
                      p: 6,
                      alignItems: "center",
                      children: [
                        (0, m.jsxs)(pe.X, {
                          fontSize: "20px",
                          children: [
                            "Migrate to Synthetix V3 on",
                            " ",
                            (0, m.jsx)(A.x, {
                              as: "span",
                              textTransform: "capitalize",
                              children: e.name,
                            }),
                          ],
                        }),
                        (0, m.jsx)(me.P, { onClick: t, color: "gray" }),
                      ],
                    }),
                    (0, m.jsx)(E.k, {
                      width: "100%",
                      px: 6,
                      children: (0, m.jsx)(U.i, {
                        borderColor: "gray.900",
                        mb: 6,
                        colorScheme: "gray",
                      }),
                    }),
                    (0, m.jsxs)(S.f, {
                      pt: 0,
                      pb: 6,
                      children: [
                        0 === o &&
                          (0, m.jsx)(fr, { onConfirm: () => s(1), onClose: t }),
                        1 === o &&
                          (0, m.jsx)(yr, {
                            onConfirm: () => s(2),
                            onClose: () => s(0),
                          }),
                        2 === o &&
                          (0, m.jsx)(Mr, {
                            onConfirm: (a) => {
                              i.invalidateQueries({
                                queryKey: [
                                  `${e?.id}-${e?.preset}`,
                                  "V2Position",
                                ],
                              }),
                                r(a),
                                t();
                            },
                            onClose: t,
                            network: e,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Ar = ({ network: e, type: t = "banner" }) => {
          const [a, r] = (0, n.useState)(!1),
            [i, o] = (0, n.useState)(""),
            [s, l] = (0, n.useState)(!1),
            { data: c } = wr(e),
            { network: d, setNetwork: u } = (0, G.LN)(),
            { connect: h, activeWallet: x } = (0, G.Os)(),
            p = (0, F.TH)(),
            g = (0, F.s0)(),
            f = (0, n.useCallback)(async () => {
              try {
                if (!x) return void h();
                if (!((d && d.id === e.id) || (await u(e.id)))) return;
                r(!0);
              } catch (e) {}
            }, [x, h, d, e.id, u]);
          return (
            (0, n.useEffect)(() => {
              const e = new URLSearchParams(p.search).get("migrate");
              if (e && "snx" === e.toLowerCase()) {
                r(!0);
                const e = new URLSearchParams(p.search);
                e.delete("migrate"),
                  g({ pathname: p.pathname, search: e.toString() });
              }
            }, [p.pathname, p.search, g]),
            (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)(Sr, {
                  onSuccess: (e) => {
                    o(e), l(!0);
                  },
                  network: e,
                  onClose: () => r(!1),
                  isOpen: a,
                }),
                (0, m.jsx)(Je, {
                  network: e,
                  onClose: () => l(!1),
                  isOpen: s,
                  type: "migration",
                  accountId: i,
                }),
                !!c &&
                  c?.collateral.gt(0) &&
                  c.debt.gt(0) &&
                  (0, m.jsxs)(Pt.p, {
                    in: !0,
                    children: [
                      "banner" === t &&
                        (0, m.jsxs)(m.Fragment, {
                          children: [
                            (0, m.jsx)(U.i, { my: 4 }),
                            (0, m.jsxs)(E.k, {
                              justifyContent: ["center", "space-between"],
                              w: "100%",
                              flexWrap: "wrap",
                              gap: 4,
                              children: [
                                (0, m.jsx)(he.E, { src: "/Rocket.png" }),
                                (0, m.jsxs)(E.k, {
                                  mt: 1,
                                  flex: 1,
                                  alignItems: "flex-start",
                                  flexDir: "column",
                                  gap: 6,
                                  children: [
                                    (0, m.jsxs)(pe.X, {
                                      fontSize: "20px",
                                      fontWeight: 700,
                                      color: "white",
                                      children: [
                                        "You have a ",
                                        (0, m.jsx)(De.$, {
                                          value: c?.collateral,
                                        }),
                                        " SNX position on Synthetix V2 on",
                                        " ",
                                        (0, m.jsx)(A.x, {
                                          as: "span",
                                          textTransform: "capitalize",
                                          children: e.name,
                                        }),
                                      ],
                                    }),
                                    (0, m.jsx)(A.x, {
                                      maxW: "484px",
                                      fontSize: "14px",
                                      color: "gray.500",
                                      children:
                                        "Migrate your SNX to Synthetix V3 to earn fees from both V2 and V3 markets and much more.",
                                    }),
                                  ],
                                }),
                                (0, m.jsxs)(E.k, {
                                  mt: "auto",
                                  alignItems: "flex-center",
                                  gap: 2,
                                  children: [
                                    (0, m.jsx)(I.z, {
                                      fontSize: "sm",
                                      fontWeight: 700,
                                      colorScheme: "gray",
                                      variant: "outline",
                                      onClick: f,
                                      children: x
                                        ? d?.id !== e.id
                                          ? "Switch Network"
                                          : "Migrate to V3"
                                        : "Connect",
                                    }),
                                    (0, m.jsx)(v.r, {
                                      href: "https://blog.synthetix.io/synthetix-v3-migration-treasury-council-initiates-transition/",
                                      target: "_blank",
                                      rel: "noopener",
                                      children: (0, m.jsx)(I.z, {
                                        fontSize: "sm",
                                        fontWeight: 700,
                                        variant: "outline",
                                        colorScheme: "gray",
                                        children: "Learn More",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      "alert" === t &&
                        (0, m.jsxs)(ye.b, {
                          mb: 6,
                          borderLeftColor: "cyan.500",
                          borderRadius: "6px",
                          children: [
                            (0, m.jsx)(je.z, { color: "cyan.500" }),
                            (0, m.jsxs)(A.x, {
                              color: "white",
                              fontFamily: "heading",
                              fontSize: "16px",
                              lineHeight: "24px",
                              children: [
                                "You have a ",
                                (0, m.jsx)(De.$, { value: c?.collateral }),
                                " SNX active staking position on V2 on",
                                " ",
                                (0, m.jsx)(A.x, {
                                  as: "span",
                                  textTransform: "capitalize",
                                  children: e.name,
                                }),
                                ".",
                                (0, m.jsx)(A.x, {
                                  onClick: f,
                                  as: "span",
                                  color: "cyan.500",
                                  cursor: "pointer",
                                  children: " Migrate to V3",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            })
          );
        },
        kr = ({
          collateralChange: e,
          setCollateralChange: t,
          displaySymbol: a,
          symbol: r,
          tokenBalance: i,
          ethBalance: o,
          snxBalance: s,
          onSubmit: l,
          minDelegation: c,
          hasAccount: d,
          availableCollateral: u,
        }) => {
          const [h, x] = (0, n.useState)(0),
            p = ca(r),
            { network: g } = (0, G.LN)(),
            y = (0, n.useMemo)(
              () =>
                "SNX" === r
                  ? s?.transferable || f.GH
                  : "WETH" !== r
                  ? i || f.GH
                  : i && o
                  ? i.add(o)
                  : f.GH,
              [r, i, o, s?.transferable]
            ),
            j = (0, n.useMemo)(() => y?.add(u), [u, y]),
            b = e.gt(j);
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsxs)(A.x, {
                color: "gray.50",
                fontSize: "20px",
                fontWeight: 700,
                children: [
                  h > 0 &&
                    (0, m.jsx)(mr.R, {
                      cursor: "pointer",
                      onClick: () => x(0),
                      mr: 2,
                    }),
                  "Open Liquidity Position",
                ],
              }),
              (0, m.jsx)(U.i, { my: 5, bg: "gray.900" }),
              0 === h &&
                (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(A.x, {
                      color: "gray.50",
                      fontSize: "sm",
                      fontWeight: "700",
                      mb: 2,
                      children: "Deposit & Lock Collateral",
                    }),
                    (0, m.jsx)(ve, {
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                      mb: "6",
                      children: (0, m.jsxs)(E.k, {
                        alignItems: "center",
                        children: [
                          (0, m.jsxs)(E.k, {
                            alignItems: "flex-start",
                            flexDir: "column",
                            gap: "1",
                            children: [
                              (0, m.jsx)(ve, {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                py: 1.5,
                                px: 2.5,
                                width: "fit-content",
                                children: (0, m.jsxs)(A.x, {
                                  display: "flex",
                                  gap: 2,
                                  alignItems: "center",
                                  fontWeight: "600",
                                  children: [
                                    (0, m.jsx)(xe, {
                                      symbol: r,
                                      width: 16,
                                      height: 16,
                                    }),
                                    a,
                                  ],
                                }),
                              }),
                              (0, m.jsx)(oa.u, {
                                label: (0, m.jsxs)(E.k, {
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  fontSize: "xs",
                                  color: "whiteAlpha.700",
                                  children: [
                                    (0, m.jsxs)(E.k, {
                                      gap: "1",
                                      children: [
                                        (0, m.jsx)(A.x, {
                                          children: "Unlocked Balance:",
                                        }),
                                        (0, m.jsx)(De.$, { value: u }),
                                      ],
                                    }),
                                    (0, m.jsxs)(E.k, {
                                      gap: "1",
                                      children: [
                                        (0, m.jsx)(A.x, {
                                          children: "Wallet Balance:",
                                        }),
                                        (0, m.jsx)(De.$, {
                                          value:
                                            "SNX" === r ? s?.transferable : i,
                                        }),
                                      ],
                                    }),
                                    "WETH" === r
                                      ? (0, m.jsxs)(E.k, {
                                          gap: "1",
                                          children: [
                                            (0, m.jsx)(A.x, {
                                              children: "ETH Balance:",
                                            }),
                                            (0, m.jsx)(De.$, { value: o }),
                                          ],
                                        })
                                      : null,
                                  ],
                                }),
                                children: (0, m.jsxs)(A.x, {
                                  fontSize: "12px",
                                  "data-cy": "balance amount",
                                  children: [
                                    "Balance: ",
                                    (0, m.jsx)(De.$, { value: j }),
                                    (0, m.jsx)(A.x, {
                                      as: "span",
                                      cursor: "pointer",
                                      onClick: () => {
                                        j && t(j);
                                      },
                                      color: "cyan.500",
                                      fontWeight: 700,
                                      children: " Max",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, m.jsxs)(E.k, {
                            flexDir: "column",
                            flexGrow: 1,
                            children: [
                              (0, m.jsx)(Ae, {
                                InputProps: {
                                  "data-cy": "deposit amount input",
                                  "data-max": y?.toString(),
                                  type: "number",
                                  min: 0,
                                },
                                value: e,
                                onChange: (e) => {
                                  t(e);
                                },
                                max: y,
                                min: f.GH,
                              }),
                              (0, m.jsx)(E.k, {
                                fontSize: "xs",
                                color: "whiteAlpha.700",
                                alignSelf: "flex-end",
                                gap: "1",
                                children:
                                  p.gt(0) &&
                                  (0, m.jsx)(De.$, {
                                    prefix: "$",
                                    value: e.abs().mul(p),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    "SNX" === r &&
                      g &&
                      [G.RR.id, G.NM.id].includes(g.id) &&
                      (0, m.jsx)(Ar, { network: g, type: "alert" }),
                    (0, m.jsx)(fe.U, {
                      in: e.gt(0) && !b && e.gte(c),
                      animateOpacity: !0,
                      children: (0, m.jsx)(Tt, {}),
                    }),
                    (0, m.jsx)(fe.U, {
                      in: e.gt(0) && e.lt(c) && !b,
                      animateOpacity: !0,
                      children: (0, m.jsxs)(ye.b, {
                        mb: 6,
                        status: "error",
                        borderRadius: "6px",
                        children: [
                          (0, m.jsx)(je.z, {}),
                          (0, m.jsxs)(be.X, {
                            children: [
                              "Your deposit must be ",
                              Pa(parseFloat(c.toString())),
                              " ",
                              r,
                              " ",
                              "or higher",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsx)(fe.U, {
                      in: b,
                      animateOpacity: !0,
                      children: (0, m.jsxs)(ye.b, {
                        mb: 6,
                        status: "error",
                        borderRadius: "6px",
                        children: [
                          (0, m.jsx)(je.z, {}),
                          (0, m.jsx)(be.X, {
                            children:
                              "You cannot Deposit & Lock more Collateral than your Balance amount",
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsx)(I.z, {
                      "data-cy": "deposit submit",
                      onClick: () => {
                        d ? l() : x(1);
                      },
                      isDisabled: e.lte(0) || void 0 === y || e.lt(c) || b,
                      children: e.lte(0) ? "Enter Amount" : "Deposit & Lock",
                    }),
                  ],
                }),
              1 === h &&
                (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsxs)(A.x, {
                      children: [
                        "In order to open a position on Synthetix Liquidity, you need an Account. It’s a one time action needed that you won’t have to reproduce for the next positions. Accounts are represented as ERC-721 compliant tokens (NFTs). Read more about it in the",
                        " ",
                        (0, m.jsx)(v.r, {
                          href: "https://docs.synthetix.io/v/synthetix-v3-user-documentation",
                          target: "_blank",
                          color: "cyan.500",
                          children: "Synthetix V3 Documentation",
                        }),
                      ],
                    }),
                    (0, m.jsx)("br", {}),
                    (0, m.jsxs)(D.QI, {
                      children: [
                        (0, m.jsx)(D.HC, {
                          children: "Transferable like any NFT",
                        }),
                        (0, m.jsx)("br", {}),
                        (0, m.jsx)(D.HC, {
                          children:
                            "Improve security by delegating permissions",
                        }),
                        (0, m.jsx)("br", {}),
                        (0, m.jsx)(D.HC, {
                          children:
                            "Simplify collaborative liquidity positions management",
                        }),
                      ],
                    }),
                    (0, m.jsx)(I.z, {
                      onClick: () => {
                        l(), x(0);
                      },
                      mt: 8,
                      children: "Accept & Continue",
                    }),
                  ],
                }),
            ],
          });
        },
        Dr = ({ submit: e, hasAccount: t, liquidityPosition: a }) => {
          const { collateralChange: r, setCollateralChange: i } = (0,
            n.useContext)(Ia.n),
            { network: o } = (0, G.LN)(),
            s = (0, ue.UO)(),
            { data: l } = (0, Mt.t)(s.collateralSymbol),
            { data: c } = Ea(),
            { data: d } = (0, Vt.H)((0, Wt.$l)(s.collateralSymbol)),
            u = (0, Wt.Yz)(o?.id, o?.preset) ? d : l?.tokenAddress,
            { data: h } = (0, ke.mM)(u),
            { data: x } = (0, Na.G)();
          return l
            ? (0, m.jsx)(kr, {
                displaySymbol: l?.displaySymbol || "",
                tokenBalance: h,
                snxBalance: c,
                ethBalance: x,
                symbol: l?.symbol || "",
                minDelegation: l.minDelegationD18,
                setCollateralChange: i,
                collateralChange: r,
                onSubmit: e,
                hasAccount: t,
                availableCollateral:
                  a?.accountCollateral.availableCollateral || f.GH,
              })
            : null;
        },
        vr = ({ collateralSymbol: e, poolName: t, isOpen: a, poolId: r }) => {
          const n = ui(e),
            { network: i } = (0, G.LN)(),
            o = (0, F.s0)();
          return (0, m.jsxs)(E.k, {
            alignItems: "center",
            children: [
              (0, m.jsx)(E.k, {
                bg: "linear-gradient(180deg, #08021E 0%, #1F0777 100%)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                display: "flex",
                children: (0, m.jsx)(xe, {
                  symbol: n || "",
                  height: 42,
                  width: 42,
                  fill: "#0B0B22",
                  color: "#00D1FF",
                }),
              }),
              (0, m.jsxs)(E.k, {
                direction: "column",
                gap: 0.5,
                children: [
                  (0, m.jsxs)(pe.X, {
                    ml: 4,
                    fontWeight: 700,
                    fontSize: ["18px", "20px", "24px"],
                    color: "gray.50",
                    display: "flex",
                    alignItems: "center",
                    children: [a ? "Open " : "", " ", n, " Liquidity Position"],
                  }),
                  (0, m.jsxs)(pe.X, {
                    ml: 4,
                    fontWeight: 700,
                    fontSize: ["12px", "16px"],
                    color: "gray.50",
                    display: "flex",
                    alignItems: "center",
                    _hover: { cursor: "pointer" },
                    onClick: () => o(`/pools/${i?.id}/${r}`),
                    children: [
                      t && (0, m.jsx)(A.x, { mr: 2, children: t }),
                      (0, m.jsxs)(E.k, {
                        mt: 0.25,
                        alignItems: "center",
                        fontSize: ["10px", "12px"],
                        color: "gray.500",
                        fontWeight: "500",
                        children: [
                          (0, m.jsx)(G.dF, {
                            size: "14px",
                            networkId: i?.id,
                            mr: 1,
                          }),
                          (0, m.jsxs)(A.x, {
                            mt: 0.5,
                            children: [i?.label, " Network"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ir = ({ liquidityPosition: e, poolName: t }) => {
          const { collateralSymbol: a, accountId: r } = (0, ue.UO)(),
            { data: i } = (0, Mt.t)(a),
            { refetch: o } = oe(),
            {
              collateralChange: s,
              setCollateralChange: l,
              setDebtChange: c,
            } = (0, n.useContext)(Ia.n),
            [d, u] = (0, n.useState)(null),
            { network: h } = (0, G.LN)();
          return (0, m.jsxs)(k.xu, {
            mb: 12,
            mt: 8,
            children: [
              (0, m.jsx)(k.xu, {
                px: [0, 6],
                children: (0, m.jsx)(vr, {
                  collateralSymbol: a,
                  poolName: t,
                  isOpen: !0,
                }),
              }),
              (0, m.jsxs)(E.k, {
                mt: 6,
                flexDirection: ["column", "column", "row"],
                gap: 4,
                children: [
                  (0, m.jsxs)(ve, {
                    gap: 4,
                    flex: 1,
                    p: 6,
                    flexDirection: "column",
                    bg: "navy.700",
                    height: "fit-content",
                    children: [
                      (0, m.jsxs)(E.k, {
                        direction: ["column", "row"],
                        gap: 4,
                        children: [
                          (0, m.jsx)(cr, {
                            liquidityPosition: e,
                            collateralType: i,
                            newCollateralAmount: s,
                            collateralValue: f.GH,
                            hasChanges: s.gt(0),
                          }),
                          (0, Wt.Yz)(h?.id, h?.preset)
                            ? (0, m.jsx)(ur, {
                                debt: e ? e.debt : f.GH,
                                newDebt: f.GH,
                                hasChanges: !1,
                              })
                            : (0, m.jsx)(dr, {
                                debt: e ? e.debt : f.GH,
                                newDebt: f.GH,
                                hasChanges: !1,
                              }),
                        ],
                      }),
                      !(0, Wt.Yz)(h?.id, h?.preset) &&
                        (0, m.jsx)(ve, {
                          py: 4,
                          px: 6,
                          flexDirection: "column",
                          bg: "navy.700",
                          children: (0, m.jsx)(lr, {
                            hasChanges: s.gt(0),
                            currentCRatio: 0,
                            liquidationCratio:
                              100 * (i?.liquidationRatioD18?.toNumber() || 0),
                            newCratio: s.gt(0) ? Number.MAX_SAFE_INTEGER : 0,
                            targetCratio:
                              100 * (i?.issuanceRatioD18.toNumber() || 0),
                          }),
                        }),
                      (0, m.jsx)($t, {}),
                    ],
                  }),
                  (0, m.jsxs)(ve, {
                    flex: 1,
                    maxW: ["100%", "100%", "501px"],
                    p: 6,
                    flexDirection: "column",
                    bg: "navy.700",
                    height: "fit-content",
                    children: [
                      !d &&
                        (0, m.jsx)(Dr, {
                          submit: () => {
                            u("deposit");
                          },
                          hasAccount: !!r,
                          liquidityPosition: e,
                        }),
                      "deposit" === d
                        ? (0, m.jsx)(pr.default, {
                            liquidityPosition: e,
                            onClose: () => {
                              l(f.GH), c(f.GH), u(null), o();
                            },
                            isOpen: "deposit" === d,
                            title: "Open Liquidity Position",
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Tr = ({ liquidityPosition: e }) => {
          const { debtChange: t, setDebtChange: a } = (0, n.useContext)(Ia.n),
            { network: r } = (0, G.LN)(),
            { collateralSymbol: i } = (0, F.UO)(),
            o = (0, Wt.Yz)(r?.id, r?.preset),
            s = e?.usdCollateral.availableCollateral,
            { data: l } = (0, Xt.p)(),
            { data: c } = (0, ke.mM)(l?.address),
            d = o ? i : l?.symbol,
            u = ca(d);
          if (e?.debt.gt(0.01) && (0, Wt.Yz)(r?.id, r?.preset))
            return (0, m.jsx)(Nr, { liquidityPosition: e });
          const h = e?.debt.gt(0),
            x = c?.gt(0.01) ? c : (0, Ce.wei)(0),
            p = h ? e?.debt : (0, Ce.wei)(0),
            g = h ? e?.debt : f.GH;
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsx)(A.x, {
                color: "gray./50",
                fontSize: "sm",
                fontWeight: "700",
                mb: "3",
                children: "Repay Debt",
              }),
              (0, m.jsxs)(ve, {
                display: "flex",
                p: 3,
                mb: "6",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: "1",
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          fontSize: "16px",
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: d,
                              width: 16,
                              height: 16,
                            }),
                            d,
                          ],
                        }),
                      }),
                      (0, m.jsx)(E.k, {
                        fontSize: "12px",
                        gap: "1",
                        children: (0, m.jsx)(E.k, {
                          gap: "1",
                          mr: "3",
                          cursor: "pointer",
                          children: (0, m.jsxs)(A.x, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                              (0, m.jsx)(De.$, {
                                prefix: "Debt: $",
                                value: p,
                                "data-cy": "current debt",
                              }),
                              p?.gt(0) &&
                                (0, m.jsxs)(m.Fragment, {
                                  children: [
                                    " ",
                                    (0, m.jsx)(v.r, {
                                      onClick: (e) => {
                                        e.preventDefault(), p && a(p.neg());
                                      },
                                      color: "cyan.500",
                                      fontWeight: 700,
                                      children: "Max",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDirection: "column",
                    flexGrow: 1,
                    children: [
                      (0, m.jsx)(Ae, {
                        InputProps: {
                          isRequired: !0,
                          "data-cy": "repay amount input",
                          "data-max": g?.toString(),
                          type: "number",
                          min: 0,
                        },
                        value: t.abs(),
                        onChange: (e) => a(e.mul(-1)),
                        max: g,
                        min: f.GH,
                      }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          u.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: t.abs().mul(u),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(I.z, {
                "data-cy": "repay submit",
                type: "submit",
                isDisabled: !(g && x && p && s) || t.gte(0),
                children: t.gte(0) ? "Enter Amount" : "Repay",
              }),
            ],
          });
        };
      var Fr = a(98966);
      const Nr = ({ liquidityPosition: e }) => {
        const { network: t } = (0, G.LN)(),
          a = (0, Wt.Yz)(t?.id, t?.preset),
          r = (0, F.UO)(),
          [o] = (0, i.lr)(),
          s = (0, y.useQueryClient)(),
          l = e.debt.gt(0.01) ? e.debt : (0, Ce.wei)(0),
          { data: c } = (0, Xt.p)(),
          { data: d } = (0, Vt.H)((0, Wt.$l)(r.collateralSymbol)),
          { data: u } = (0, ke.mM)(a ? d : e.tokenAddress),
          h = (0, n.useMemo)(
            () => Number(u?.toString()) >= l.toNumber(),
            [l, u]
          ),
          {
            exec: x,
            settle: p,
            isLoading: g,
          } = (({
            accountId: e,
            poolId: t,
            collateralTypeAddress: a,
            availableUSDCollateral: r,
            debt: i,
          }) => {
            const [o, s] = n.useReducer(yt.I, yt.E),
              { data: l } = (0, te.a)(),
              { data: c } = (0, bt.b)(),
              { data: d, refetch: u } = (0, jt.Y_)(),
              h = (0, G.mx)(),
              { network: x } = (0, G.LN)(),
              { gasSpeed: p } = (0, b.jU)(),
              m = (0, G.yL)(),
              { data: g } = (0, Fr.W)(),
              f = (0, y.useMutation)({
                mutationFn: async () => {
                  if (!h || !x || !m) throw new Error("No signer or network");
                  if (l && t && e && a && c && r)
                    try {
                      s({ type: "prompting" });
                      const r = [];
                      if (g) {
                        const n = new ie.CH(
                          g.address,
                          g.abi,
                          h
                        ).populateTransaction.depositDebtToRepay(
                          l.address,
                          c.address,
                          e,
                          t,
                          a,
                          Wt.Ds
                        );
                        r.push(n);
                      }
                      const n = new ie.CH(
                        l.address,
                        l.abi,
                        h
                      ).populateTransaction.burnUsd(
                        Lt.O$.from(e),
                        Lt.O$.from(t),
                        a,
                        i?.mul(110).div(100).toBN().toString() || "0"
                      );
                      r.push(n);
                      const o = Promise.all(r),
                        [u, f] = await Promise.all([
                          o,
                          (0, Ue.o)({ provider: m }),
                        ]);
                      d && u.unshift(d);
                      const y = await h.getAddress(),
                        { multicallTxn: j, gasLimit: b } = await (0, Ct.dI)(
                          x,
                          u,
                          "useRepay",
                          y
                        ),
                        w = (0, Be.F)({
                          gasLimit: b,
                          gasPrices: f,
                          gasSpeed: p,
                        }),
                        C = await h.sendTransaction({ ...j, ...w });
                      s({ type: "pending", payload: { txnHash: C.hash } }),
                        await C.wait(),
                        s({ type: "success" });
                    } catch (e) {
                      throw (s({ type: "error", payload: { error: e } }), e);
                    }
                },
                onSuccess: () => {
                  u();
                },
              });
            return {
              mutation: f,
              txnState: o,
              settle: () => s({ type: "settled" }),
              isLoading: f.isPending,
              exec: f.mutateAsync,
            };
          })({
            accountId: o.get("accountId") || "",
            poolId: r.poolId,
            collateralTypeAddress: e?.tokenAddress,
            availableUSDCollateral: e.accountCollateral.availableCollateral,
            debt: l,
          }),
          { data: f } = (0, Fr.W)(),
          {
            approve: j,
            requireApproval: w,
            isLoading: C,
          } = (0, He.y)({
            contractAddress: d,
            amount: (0, _.vz)(l.toString(), 6).mul(110).div(100),
            spender: f?.address,
          }),
          L = (0, n.useCallback)(async () => {
            try {
              w && (await j(!1)),
                await x(),
                await Promise.all([
                  s.invalidateQueries({
                    queryKey: [`${t?.id}-${t?.preset}`, "TokenBalance"],
                  }),
                  s.invalidateQueries({
                    queryKey: [`${t?.id}-${t?.preset}`, "Allowance"],
                  }),
                  s.invalidateQueries({
                    queryKey: [`${t?.id}-${t?.preset}`, "LiquidityPosition"],
                  }),
                  s.invalidateQueries({
                    queryKey: [
                      `${t?.id}-${t?.preset}`,
                      "AccountCollateralUnlockDate",
                    ],
                  }),
                ]),
                p();
            } catch (e) {}
          }, [j, x, t?.id, t?.preset, s, w, p]);
        return (0, m.jsxs)(E.k, {
          flexDirection: "column",
          children: [
            (0, m.jsxs)(A.x, {
              fontSize: "md",
              fontWeight: "700",
              mb: "0.5",
              children: ["Repay ", a ? r.collateralSymbol : c?.symbol],
            }),
            (0, m.jsx)(A.x, {
              fontSize: "sm",
              color: "gray.400",
              mb: "4",
              children:
                "Your account currently has a positive debt. This amount must be paid to initiate collateral withdrawal.",
            }),
            (0, m.jsxs)(I.z, {
              isDisabled: !h,
              isLoading: g || C,
              onClick: L,
              "data-cy": "repay",
              children: [
                "Repay USDC $",
                (0, m.jsx)(De.$, { value: l, "data-cy": "current debt" }),
                h ? "" : "(Insufficient Balance)",
              ],
            }),
          ],
        });
      };
      var Er = a(80877);
      const zr = At.z.object({
          id: Gt.Rx,
          weight: Gt.LW,
          maxDebtShareValue: Gt.LW,
          isLocked: At.z.boolean(),
        }),
        Pr = At.z.object({
          id: At.z.number(),
          markets: zr.array(),
          isAnyMarketLocked: At.z.boolean(),
        }),
        Or = At.z.boolean(),
        Hr = ({
          collateralChange: e,
          setCollateralChange: t,
          max: a,
          displaySymbol: r,
          symbol: i,
          currentCollateral: o,
          minDelegation: s,
          isLoadingRequiredData: l,
          isAnyMarketLocked: c,
          isBase: d,
          currentDebt: u,
          collateralPrice: h,
          accountId: x,
          maxWithdrawable: p,
          navigate: g,
        }) => {
          const y = ca(i),
            j = (0, n.useCallback)(() => {
              a && t(a.mul(-1));
            }, [a, t]),
            { minutes: b, hours: w, isRunning: C } = ha(x),
            L = o?.add(e) || (0, Ce.wei)(0),
            M = L.gte(s || (0, Ce.wei)(0)) || L.eq(0),
            S = !0 === c,
            k = e.abs().gt(a),
            D = l || !0 === c || e.gte(0) || !M || k || (u?.gt(0) && d),
            v = (0, n.useMemo)(() => {
              const t = [
                {
                  label: "Locked " + i,
                  value: (0, m.jsx)(_e.D, {
                    value: o || f.GH,
                    newValue: L,
                    formatFn: (e) => (0, _.Aq)(e),
                    hasChanges: e.abs().gt(0),
                    size: "sm",
                  }),
                },
              ];
              return d
                ? t
                : [
                    ...t,
                    {
                      label: "C-ratio",
                      value: (0, m.jsx)(Oa.p, {
                        currentCollateral: o,
                        currentDebt: u,
                        collateralChange: e,
                        collateralPrice: h,
                        debtChange: f.GH,
                        size: "sm",
                      }),
                    },
                  ];
            }, [e, h, o, u, d, L, i]);
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsx)(A.x, {
                color: "gray./50",
                fontSize: "sm",
                fontWeight: "700",
                mb: "3",
                children: "Unlock Collateral",
              }),
              (0, m.jsxs)(ve, {
                display: "flex",
                p: 3,
                mb: "6",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: "1",
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: i,
                              width: 16,
                              height: 16,
                            }),
                            r,
                          ],
                        }),
                      }),
                      (0, m.jsxs)(E.k, {
                        gap: "1",
                        fontSize: "12px",
                        children: [
                          (0, m.jsx)(A.x, {
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            children: "Locked:",
                          }),
                          (0, m.jsx)(De.$, {
                            value: a,
                            "data-cy": "available to unlock",
                          }),
                          a?.gt(0) &&
                            (0, m.jsx)(A.x, {
                              as: "span",
                              cursor: "pointer",
                              onClick: j,
                              color: "cyan.500",
                              fontWeight: 700,
                              children: "Max",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDir: "column",
                    flexGrow: 1,
                    children: [
                      (0, m.jsx)(Ae, {
                        InputProps: {
                          isDisabled: S,
                          isRequired: !0,
                          "data-cy": "undelegate amount input",
                          "data-max": a?.toString(),
                          type: "number",
                          min: 0,
                        },
                        value: e.abs(),
                        onChange: (e) => t(e.mul(-1)),
                        max: a,
                        min: f.GH,
                      }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          y.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: e.abs().mul(y),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(fe.U, {
                in: S,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  mb: 6,
                  status: "warning",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(E.k, {
                      direction: "column",
                      children: [
                        (0, m.jsx)(Er.C, {
                          children: "Credit capacity reached",
                        }),
                        (0, m.jsx)(be.X, {
                          children:
                            "One of the markets has reached its credit capacity and is currently in a locked state. You cannot unlock collateral from the pool at this time.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: !M && !e.eq(0),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  mb: 6,
                  status: "info",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(E.k, {
                      direction: "column",
                      children: [
                        (0, m.jsxs)(Er.C, {
                          children: [
                            "The minimal locked amount is ",
                            (0, m.jsx)(De.$, { value: s, suffix: ` ${i}` }),
                          ],
                        }),
                        (0, m.jsx)(be.X, {
                          children:
                            "You can close your position by removing all the collateral.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: e.abs().gt(0) && M && C,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  status: "warning",
                  mb: "6",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You will be able to withdraw assets in ",
                        w,
                        "H",
                        b,
                        "M. Any account activity will reset this timer to 24H.",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: e.abs().gt(0) && M && !C && p?.gt(0),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  status: "info",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You already have ",
                        (0, m.jsx)(De.$, { value: p, suffix: ` ${i}` }),
                        " unlocked.  ",
                        (0, m.jsx)(A.x, {
                          onClick: () => g("withdraw"),
                          cursor: "pointer",
                          as: "span",
                          textDecoration: "underline",
                          children: "Withdraw",
                        }),
                        " ",
                        "before unlocking again as it will restart the 24h withdrawal timeout.",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: u?.gt(0) && d,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  status: "error",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "To Unlock this amount, you need to  ",
                        (0, m.jsxs)(A.x, {
                          onClick: () => g("repay"),
                          cursor: "pointer",
                          as: "span",
                          textDecoration: "underline",
                          children: [
                            "repay ",
                            (0, m.jsx)(De.$, { value: u, suffix: ` ${i}` }),
                          ],
                        }),
                        " ",
                        "to your position",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: e.abs().gt(0),
                animateOpacity: !0,
                children: (0, m.jsx)(Ge.v, { mb: 6, items: v }),
              }),
              (0, m.jsx)(I.z, {
                "data-cy": "undelegate submit",
                type: "submit",
                isDisabled: D,
                children: e.gte(0) ? "Enter Amount" : "Unlock Collateral",
              }),
            ],
          });
        },
        $r = ({ liquidityPosition: e }) => {
          const {
              collateralChange: t,
              debtChange: a,
              setCollateralChange: r,
            } = (0, n.useContext)(Ia.n),
            { poolId: o, accountId: s, collateralSymbol: l } = (0, ue.UO)(),
            { data: c } = (0, Mt.t)(l),
            d = ((e) => {
              const { network: t } = (0, G.LN)(),
                { data: a } = (0, te.a)(),
                r = (0, G.yL)();
              return (0, y.useQuery)({
                enabled: Boolean(a && e && t && r),
                queryKey: [
                  `${t?.id}-${t?.preset}`,
                  "PoolConfiguration",
                  { poolId: e },
                  { contractsHash: (0, ne.K)([a]) },
                ],
                queryFn: async () => {
                  if (!(a && e && t && r)) throw "OMFG";
                  const n = new ie.CH(a.address, a.abi, r),
                    i = (await n.getPoolConfiguration(Lt.O$.from(e))).map(
                      ({
                        marketId: e,
                        maxDebtShareValueD18: t,
                        weightD18: a,
                      }) => ({ id: e, weight: t, maxDebtShareValue: a })
                    ),
                    o = await Promise.all(
                      i.map((e) =>
                        n.populateTransaction.isMarketCapacityLocked(e.id)
                      )
                    ),
                    s = await (0, jt.QH)(await (0, jt.kp)(t), t).catch(
                      () => {}
                    );
                  s && o.unshift(s);
                  const l = await (0, Ct.Iy)(
                    t,
                    r,
                    o,
                    (e) =>
                      (Array.isArray(e) ? e : [e]).map((e) =>
                        Or.parse(
                          n.interface.decodeFunctionResult(
                            "isMarketCapacityLocked",
                            e
                          )[0]
                        )
                      ),
                    "isMarketCapacityLocked"
                  );
                  return Pr.parse({
                    id: parseInt(e),
                    markets: i.map((e, t) => ({ ...e, isLocked: l[t] })),
                    isAnyMarketLocked: l.some(Boolean),
                  });
                },
              });
            })(o),
            { network: u } = (0, G.LN)(),
            h = e?.collateralPrice,
            { newDebt: x } = Ta({
              issuanceRatioD18: c?.issuanceRatioD18,
              collateralAmount: e?.collateralAmount,
              collateralPrice: h,
              debt: e?.debt,
              collateralChange: t,
              debtChange: a,
            }),
            p = (0, Wt.Yz)(u?.id, u?.preset),
            { data: g } = (0, Xt.p)(),
            { data: j } = (0, Zt.ar)(s, g?.address),
            [b] = (0, i.lr)(),
            w = (0, F.s0)(),
            C = (0, n.useMemo)(
              () =>
                p
                  ? (e?.accountCollateral.availableCollateral || f.GH).add(
                      j?.availableCollateral || f.GH
                    )
                  : e?.accountCollateral.availableCollateral || f.GH,
              [
                p,
                e?.accountCollateral.availableCollateral,
                j?.availableCollateral,
              ]
            ),
            L = (() => {
              if (!e || !c) return;
              const { collateralAmount: t, collateralValue: a } = e;
              if (p) return t;
              if (x.lte(0)) return t;
              const r = x.mul(c.liquidationRatioD18);
              if (a.lt(r)) return (0, Ce.wei)(0);
              const n = a.sub(r).mul(0.98);
              return Le().min(t, n);
            })();
          return c
            ? (0, m.jsx)(Hr, {
                displaySymbol: c.displaySymbol,
                symbol: c.symbol,
                minDelegation: c.minDelegationD18,
                setCollateralChange: r,
                collateralChange: t,
                currentCollateral: e?.collateralAmount,
                currentDebt: e?.debt,
                max: L,
                isLoadingRequiredData: d.isLoading || !L,
                isAnyMarketLocked: d.data?.isAnyMarketLocked,
                isBase: p,
                collateralPrice: e?.collateralPrice,
                accountId: s,
                maxWithdrawable: C,
                navigate: (e) => {
                  b.set("manageAction", e),
                    w({
                      pathname: `/positions/${c?.symbol}/${o}`,
                      search: b.toString(),
                    });
                },
              })
            : null;
        },
        Rr = At.z
          .object({ value: Gt.rK, amount: Gt.rK })
          .transform(({ value: e, amount: t }) => ({
            value: (0, Ce.wei)(e),
            amount: (0, Ce.wei)(t),
          })),
        Ur = Gt.rK.transform((e) => (0, Ce.wei)(e));
      function Br(e, t) {
        return !t || !e || e <= 0 ? "-" : `${e.toFixed(2)}%`;
      }
      const Wr = () => {
          const { poolId: e, networkId: t } = (0, ue.UO)(),
            a = G.g5.find((e) => e.id === Number(t)),
            { data: r, isPending: o } = ((e, t) => {
              const { network: a } = (0, G.LN)(),
                r = t || a,
                { data: n } = (0, Mt.T)(!1, t),
                { data: i } = (0, te.a)(t),
                o = (0, G.eK)(r);
              return (0, y.useQuery)({
                queryKey: [
                  `${r?.id}-${r?.preset}`,
                  "VaultCollaterals",
                  {
                    pool: e,
                    tokens: n ? n?.map((e) => e.tokenAddress).sort() : [],
                  },
                ],
                enabled: Boolean(i && n && e && r && o),
                queryFn: async () => {
                  if (!(i && n && e && r && o))
                    throw Error(
                      "useVaultsData should not be enabled when missing data"
                    );
                  const t = new ie.CH(i.address, i.abi, o),
                    a = Promise.all(
                      n.map((a) =>
                        t.populateTransaction.getVaultCollateral(
                          e,
                          a.tokenAddress
                        )
                      )
                    ),
                    s = Promise.all(
                      n.map((a) =>
                        t.populateTransaction.getVaultDebt(e, a.tokenAddress)
                      )
                    ),
                    l = await Promise.all([a, s]),
                    c = await (0, jt.QH)(await (0, jt.kp)(r), r).catch(
                      () => {}
                    );
                  return (
                    c && l.unshift(c),
                    await (0, Ct.Iy)(
                      r,
                      o,
                      l.flat(),
                      (e) => {
                        if (!Array.isArray(e)) throw Error("Expected array");
                        const t = e.slice(0, n.length),
                          a = e.slice(n.length);
                        return t.map((e, t) => {
                          const r =
                              a[t] ||
                              "0x0000000000000000000000000000000000000000000000000000000000000000",
                            o = new Ze.vU(i.abi),
                            s = o.decodeFunctionResult("getVaultDebt", r),
                            l = o.decodeFunctionResult("getVaultCollateral", e),
                            c = Rr.parse({ ...l });
                          return {
                            debt: Ur.parse(s[0]),
                            collateral: c,
                            collateralType: n[t],
                          };
                        });
                      },
                      "useVaultsData"
                    )
                  );
                },
              });
            })(Number(e), a),
            { data: s, isPending: l } = (0, ka.L)(a),
            c = (0, F.s0)(),
            [d] = (0, i.lr)(),
            { network: u, setNetwork: h } = (0, G.LN)(),
            { connect: x } = (0, G.Os)(),
            { collateral: p, debt: g } = ((e) => {
              const t = {
                collateral: { value: (0, Ce.wei)(0), amount: (0, Ce.wei)(0) },
                debt: (0, Ce.wei)(0),
              };
              return e
                ? e.reduce(
                    (e, { collateral: t, debt: a }) => (
                      (e.collateral = {
                        value: e.collateral.value.add(t.value),
                        amount: e.collateral.amount.add(t.amount),
                      }),
                      (e.debt = e.debt.add(a)),
                      e
                    ),
                    t
                  )
                : t;
            })(r),
            f = g.lt(0);
          return (0, m.jsxs)(E.k, {
            bg: "navy.700",
            borderWidth: "1px",
            borderColor: "gray.900",
            borderRadius: "base",
            padding: 6,
            flexDirection: "column",
            "data-cy": "pool collateral types",
            children: [
              (0, m.jsx)(A.x, {
                fontWeight: 700,
                fontSize: "xl",
                children: "Pool Collateralization",
              }),
              (0, m.jsxs)(ve, {
                padding: 4,
                mt: 4,
                flexDirection: "column",
                children: [
                  (0, m.jsxs)(E.k, {
                    justifyContent: "space-between",
                    mb: 2,
                    children: [
                      (0, m.jsx)(A.x, {
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        fontSize: "md",
                        gap: 1,
                        color: "white",
                        children: "Total TVL",
                      }),
                      (0, m.jsx)(Et.O, {
                        startColor: "whiteAlpha.500",
                        endColor: "whiteAlpha.200",
                        borderRadius: 4,
                        isLoaded: Boolean(!o && r),
                        placeholder: "$147,654,901.78",
                        width: "163px",
                        height: "26px",
                        children: (0, m.jsx)(Pt.p, {
                          in: !0,
                          children: (0, m.jsx)(A.x, {
                            fontWeight: 700,
                            fontSize: "xl",
                            color: "white",
                            "data-cy": "pool tvl",
                            textAlign: "end",
                            children: za(p.value.toNumber(), {
                              maximumFractionDigits: 0,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    justifyContent: "space-between",
                    mb: 2,
                    children: [
                      (0, m.jsx)(A.x, {
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        fontSize: "md",
                        gap: 1,
                        color: "white",
                        children: "Total Debt/Profit",
                      }),
                      (0, m.jsx)(Et.O, {
                        startColor: "whiteAlpha.500",
                        endColor: "whiteAlpha.200",
                        borderRadius: 4,
                        isLoaded: Boolean(!o && r),
                        placeholder: "$147,654,901.78",
                        width: "163px",
                        height: "26px",
                        children: (0, m.jsx)(Pt.p, {
                          in: !0,
                          children: (0, m.jsxs)(A.x, {
                            fontWeight: 700,
                            fontSize: "xl",
                            "data-cy": "pool total debt",
                            textAlign: "end",
                            color: f ? "green.500" : "white",
                            children: [
                              f ? "+" : "-",
                              za(g.abs().toNumber(), {
                                maximumFractionDigits: 0,
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    justifyContent: "space-between",
                    children: [
                      (0, m.jsx)(A.x, {
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        fontSize: "md",
                        gap: 1,
                        color: "white",
                        children: "APR",
                      }),
                      (0, m.jsx)(Et.O, {
                        startColor: "whiteAlpha.500",
                        endColor: "whiteAlpha.200",
                        borderRadius: 4,
                        isLoaded: !l,
                        width: "163px",
                        height: "26px",
                        children: (0, m.jsx)(Pt.p, {
                          in: !0,
                          children: (0, m.jsx)(se.u, {
                            label:
                              "APR is averaged over the trailing 7 days and is comprised of both performance and rewards",
                            children: (0, m.jsxs)(A.x, {
                              fontWeight: 700,
                              fontSize: "xl",
                              color: "white",
                              textAlign: "end",
                              children: [
                                a?.id === G.PO.id ? "Up to " : "",
                                Br(s?.combinedApr, a?.id),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(dt.x, {
                maxW: "100%",
                mt: 4,
                borderRadius: "5px",
                sx: { borderCollapse: "separate !important", borderSpacing: 0 },
                children: (0, m.jsxs)(ut.i, {
                  children: [
                    (0, m.jsx)(ht.h, {
                      children: (0, m.jsxs)(xt.Tr, {
                        children: [
                          (0, m.jsx)(pt.Th, {
                            borderBottom: "none",
                            fontFamily: "heading",
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: "16px",
                            letterSpacing: 0.6,
                            color: "gray.600",
                            textTransform: "none",
                            children: "Asset",
                          }),
                          (0, m.jsx)(pt.Th, {
                            borderBottom: "none",
                            fontFamily: "heading",
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: "16px",
                            letterSpacing: 0.6,
                            color: "gray.600",
                            textTransform: "none",
                            children: "TVL",
                          }),
                          (0, m.jsx)(pt.Th, {
                            borderBottom: "none",
                            fontFamily: "heading",
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: "16px",
                            letterSpacing: 0.6,
                            color: "gray.600",
                            textTransform: "none",
                            children: "Debt/Profit",
                          }),
                          (0, m.jsx)(pt.Th, {
                            borderBottom: "none",
                            fontFamily: "heading",
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: "16px",
                            letterSpacing: 0.6,
                            color: "gray.600",
                            textTransform: "none",
                            children: "APR",
                          }),
                          (0, m.jsx)(pt.Th, {
                            borderBottom: "none",
                            fontFamily: "heading",
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: "16px",
                            letterSpacing: 0.6,
                            color: "gray.600",
                            textTransform: "none",
                            children: " ",
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsxs)(mt.p, {
                      children: [
                        (l || o || !r) &&
                          (0, m.jsx)(n.Fragment, {
                            children: [1, 2, 3].map((e) =>
                              (0, m.jsxs)(
                                xt.Tr,
                                {
                                  textAlign: "left",
                                  borderBottomColor: "gray.900",
                                  borderBottomWidth: "1px",
                                  children: [
                                    (0, m.jsx)(pt.Th, {
                                      borderBottom: "none",
                                      children: (0, m.jsx)(Et.O, {
                                        startColor: "whiteAlpha.500",
                                        endColor: "whiteAlpha.200",
                                        borderRadius: 4,
                                        height: "26px",
                                        width: "92px",
                                      }),
                                    }),
                                    (0, m.jsx)(pt.Th, {
                                      borderBottom: "none",
                                      children: (0, m.jsx)(Et.O, {
                                        startColor: "whiteAlpha.500",
                                        endColor: "whiteAlpha.200",
                                        borderRadius: 4,
                                        height: "26px",
                                        width: "92px",
                                      }),
                                    }),
                                    (0, m.jsx)(pt.Th, {
                                      borderBottom: "none",
                                      children: (0, m.jsx)(Et.O, {
                                        startColor: "whiteAlpha.500",
                                        endColor: "whiteAlpha.200",
                                        borderRadius: 4,
                                        height: "26px",
                                        width: "92px",
                                      }),
                                    }),
                                    (0, m.jsx)(pt.Th, {
                                      borderBottom: "none",
                                      children: (0, m.jsx)(Et.O, {
                                        startColor: "whiteAlpha.500",
                                        endColor: "whiteAlpha.200",
                                        borderRadius: 4,
                                        height: "26px",
                                        width: "92px",
                                      }),
                                    }),
                                    (0, m.jsx)(pt.Th, {
                                      borderBottom: "none",
                                      children: (0, m.jsx)(Et.O, {
                                        startColor: "whiteAlpha.500",
                                        endColor: "whiteAlpha.200",
                                        borderRadius: 4,
                                        height: "26px",
                                        width: "92px",
                                      }),
                                    }),
                                  ],
                                },
                                e
                              )
                            ),
                          }),
                        r?.map((t, r) => {
                          const n = (0, Yt.Zj)(t.debt, t.collateral.value),
                            i = s?.collateralAprs.find(
                              (e) =>
                                e.collateralType.toLowerCase() ===
                                t.collateralType.tokenAddress.toLowerCase()
                            ),
                            {
                              apr28d: o,
                              apr28dRewards: l,
                              apr28dPnl: p,
                            } = i || {
                              apr28d: 0,
                              apr28dRewards: 0,
                              apr28dPnl: 0,
                            },
                            g = t.debt.lt(0),
                            f = 0 === r ? "1px" : "0px";
                          return (0, m.jsxs)(
                            xt.Tr,
                            {
                              borderTopWidth: f,
                              borderTopColor: "gray.900",
                              borderBottomWidth: "1px",
                              borderBottomColor: "gray.900",
                              children: [
                                (0, m.jsx)(gt.Td, {
                                  borderBottom: "none",
                                  py: 1,
                                  children: (0, m.jsx)(Pt.p, {
                                    in: !0,
                                    children: (0, m.jsxs)(E.k, {
                                      alignItems: "center",
                                      gap: 2,
                                      children: [
                                        (0, m.jsx)(xe, {
                                          symbol: t.collateralType.symbol,
                                          w: 30,
                                          h: 30,
                                        }),
                                        (0, m.jsx)(E.k, {
                                          children: (0, m.jsxs)(E.k, {
                                            direction: "column",
                                            children: [
                                              (0, m.jsx)(A.x, {
                                                fontWeight: 700,
                                                lineHeight: "20px",
                                                fontSize: "14px",
                                                color: "white",
                                                children:
                                                  t.collateralType
                                                    .displaySymbol,
                                              }),
                                              (0, m.jsx)(A.x, {
                                                fontFamily: "heading",
                                                fontSize: "12px",
                                                lineHeight: "16px",
                                                color: "gray.500",
                                                children: t.collateralType.name,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, m.jsx)(gt.Td, {
                                  borderBottom: "none",
                                  children: (0, m.jsx)(Pt.p, {
                                    in: !0,
                                    children: (0, m.jsxs)(E.k, {
                                      direction: "column",
                                      children: [
                                        (0, m.jsx)(A.x, {
                                          fontSize: "14px",
                                          fontWeight: 500,
                                          color: "white",
                                          lineHeight: "20px",
                                          fontFamily: "heading",
                                          "data-cy": "collateral value",
                                          children: za(
                                            t.collateral.value.toNumber(),
                                            {
                                              maximumFractionDigits: 0,
                                              minimumFractionDigits: 0,
                                            }
                                          ),
                                        }),
                                        (0, m.jsxs)(A.x, {
                                          fontSize: "12px",
                                          color: "gray.500",
                                          lineHeight: "16px",
                                          fontFamily: "heading",
                                          "data-cy": "collateral value",
                                          children: [
                                            Pa(t.collateral.amount.toNumber(), {
                                              maximumFractionDigits: 0,
                                              minimumFractionDigits: 0,
                                            }),
                                            " ",
                                            t.collateralType.symbol,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, m.jsx)(gt.Td, {
                                  borderBottom: "none",
                                  children: (0, m.jsx)(Pt.p, {
                                    in: !0,
                                    children: (0, m.jsx)(se.u, {
                                      label: g
                                        ? `This vault has a profit of ${za(
                                            t.debt.abs().toNumber(),
                                            {
                                              maximumFractionDigits: 0,
                                              minimumFractionDigits: 0,
                                            }
                                          )}`
                                        : "",
                                      children: (0, m.jsxs)(E.k, {
                                        direction: "column",
                                        children: [
                                          (0, m.jsxs)(A.x, {
                                            fontSize: "14px",
                                            color: g ? "green.500" : "white",
                                            "data-cy": "collateral debt",
                                            fontWeight: 500,
                                            children: [
                                              g ? "+" : "-",
                                              za(t.debt.abs().toNumber(), {
                                                maximumFractionDigits: 0,
                                                minimumFractionDigits: 0,
                                              }),
                                            ],
                                          }),
                                          (0, m.jsxs)(A.x, {
                                            fontFamily: "heading",
                                            fontSize: "12px",
                                            lineHeight: "14px",
                                            color: "gray.500",
                                            children: [
                                              "C-ratio: ",
                                              n.lte(0)
                                                ? "Infinite"
                                                : ((y = n.toNumber()),
                                                  new Intl.NumberFormat(
                                                    "en-EN",
                                                    {
                                                      minimumFractionDigits: 0,
                                                      maximumFractionDigits: 2,
                                                      style: "percent",
                                                      ...j,
                                                    }
                                                  ).format(Number(y))),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, m.jsx)(gt.Td, {
                                  borderBottom: "none",
                                  children: (0, m.jsx)(Pt.p, {
                                    in: !0,
                                    children: (0, m.jsx)(se.u, {
                                      label: (0, m.jsxs)(E.k, {
                                        direction: "column",
                                        children: [
                                          (0, m.jsxs)(E.k, {
                                            justifyContent: "space-between",
                                            children: [
                                              (0, m.jsx)(A.x, {
                                                fontWeight: 700,
                                                mr: 2,
                                                children: "Total APR:",
                                              }),
                                              (0, m.jsx)(A.x, {
                                                fontWeight: 700,
                                                children: Br(100 * o, a?.id),
                                              }),
                                            ],
                                          }),
                                          (0, m.jsxs)(E.k, {
                                            justifyContent: "space-between",
                                            children: [
                                              (0, m.jsx)(A.x, {
                                                mr: 2,
                                                children: "Performance:",
                                              }),
                                              (0, m.jsx)(A.x, {
                                                children: Br(100 * p, a?.id),
                                              }),
                                            ],
                                          }),
                                          (0, m.jsxs)(E.k, {
                                            justifyContent: "space-between",
                                            children: [
                                              (0, m.jsx)(A.x, {
                                                mr: 2,
                                                children: "Rewards: ",
                                              }),
                                              (0, m.jsx)(A.x, {
                                                children: Br(100 * l, a?.id),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      children: (0, m.jsxs)(E.k, {
                                        alignItems: "center",
                                        children: [
                                          (0, m.jsx)(A.x, {
                                            fontSize: "sm",
                                            fontWeight: 500,
                                            color: "white",
                                            "data-cy": "collateral apr",
                                            children: Br(100 * o, a?.id),
                                          }),
                                          (0, m.jsx)(V.P$, {
                                            w: "14px",
                                            h: "14px",
                                            mb: 1,
                                            ml: "0.5px",
                                            mt: "1px",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, m.jsx)(gt.Td, {
                                  borderBottom: "none",
                                  textAlign: "end",
                                  children: (0, m.jsx)(Pt.p, {
                                    in: !0,
                                    children: (0, m.jsx)(I.z, {
                                      onClick: async (r) => {
                                        try {
                                          if ((r.stopPropagation(), !u))
                                            return void x();
                                          if (
                                            a &&
                                            u.id !== a.id &&
                                            !(await h(a.id))
                                          )
                                            return;
                                          d.set("manageAction", "deposit"),
                                            c({
                                              pathname: `/positions/${t.collateralType.symbol}/${e}`,
                                              search: d.toString(),
                                            });
                                        } catch (e) {}
                                      },
                                      height: "32px",
                                      py: "10px",
                                      px: "12px",
                                      whiteSpace: "nowrap",
                                      borderRadius: "4px",
                                      fontFamily: "heading",
                                      fontWeight: 700,
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                      children: "Deposit",
                                    }),
                                  }),
                                }),
                              ],
                            },
                            t.collateralType.tokenAddress
                          );
                          var y, j;
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Zr =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNSAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NS4yNVYxYzAgMS43NzItLjM3IDMuMzQ3LTEuMjIgNC41ODYtLjgxMyAxLjE4Ni0yLjAyMiAxLjk5Ny0zLjU5OSAyLjM5LS4wMDMtLjc4My0uMTI1LTEuMDktLjIxNi0xLjMxOHEtLjAzNC0uMDgzLS4wNTktLjE2YzEuMjE4LS4zMjEgMi4wNy0uOTMzIDIuNjM3LTEuNzYuNTIzLS43NjMuODQtMS43Ni45My0yLjk4OEgxM2E0Ljc1IDQuNzUgMCAwIDAtNC4xNzggMi40ODdjLS4zODgtLjYxOS0uNjA3LS44OC0xLTEuMjM3QTYuMjQgNi4yNCAwIDAgMSAxMyAuMjV6bS0xMi4yNSAySC43NVYzYzAgMi4xMTUuNTI5IDMuOTU0IDEuNzY3IDUuMjY1QzMuNjMgOS40NDIgNS4yMjMgMTAuMSA3LjI1IDEwLjIyN3YzLjgyQTYgNiAwIDAgMCAyIDIwaDEyYTYgNiAwIDAgMC01LjI1LTUuOTUzVjguNUE2LjI1IDYuMjUgMCAwIDAgMi41IDIuMjVNNy4yNSA4LjV2LjIyNEM1LjU1IDguNiA0LjM3OSA4LjA1IDMuNjA4IDcuMjM1Yy0uNzY1LS44MS0xLjIyLTEuOTcxLTEuMzMxLTMuNDg1SDIuNUE0Ljc1IDQuNzUgMCAwIDEgNy4yNSA4LjVtNC45MDggOS43NzhxLjA0NS4xMS4wODUuMjIySDMuNzU3YTQuNSA0LjUgMCAwIDEgMS4wNjEtMS42ODIgNC41MDIgNC41MDIgMCAwIDEgNy4zNCAxLjQ2IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==",
        qr = ({ network: e, isToros: t, collateralType: a }) => {
          const r = (0, Wt.Yz)(e?.id, e?.preset);
          return t
            ? (0, m.jsxs)(E.k, {
                alignItems: "center",
                gap: 2,
                children: [
                  a?.symbol?.toUpperCase() === "wstETH".toUpperCase() &&
                    (0, m.jsx)(oa.u, {
                      textAlign: "left",
                      label: "Yield on yield",
                      hasArrow: !0,
                      children: (0, m.jsx)("img", {
                        src: Zr,
                        alt: "Yield on yield",
                      }),
                    }),
                  (0, m.jsx)(oa.u, {
                    textAlign: "left",
                    label: "Auto compounding rewards",
                    hasArrow: !0,
                    children: (0, m.jsx)("img", {
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMy4wMTcgNS40NCAyLjU0LjAyLS41NDYtLjgwMWE3LjE3IDcuMTcgMCAwIDAtMy4zMzItMi42ODQgNy4xNSA3LjE1IDAgMCAwLTcuOTQ2IDEuODc4IDcuMiA3LjIgMCAwIDAtMS40NjggMi41MTNsLTEuMjQ3LS44NUMyLjI4IDIuMjg5IDUuNDE2IDAgOS4wNTggMGE4LjYgOC42IDAgMCAxIDMuNjIuNzk3Yy42NS4zMDEgMS41MjIuOTk1IDIuMTUgMS41MzNhOC4yIDguMiAwIDAgMSAxLjQxIDEuNjA4bC4zNS41MTFWMS44SDE4djUuMDc3aC00Ljk4M3ptLTguMDM0IDcuMTItMi41NC0uMDIuNTQ2LjgwMWE3LjE3IDcuMTcgMCAwIDAgMy4zMzIgMi42ODQgNy4xNSA3LjE1IDAgMCAwIDcuOTQ2LTEuODc4IDcuMiA3LjIgMCAwIDAgMS40NjgtMi41MTNsMS4yNDcuODVDMTUuNzIgMTUuNzExIDEyLjU4NCAxOCA4Ljk0MiAxOGE4LjYgOC42IDAgMCAxLTMuNjItLjc5N2MtLjY1LS4zMDEtMS41MjMtLjk5NS0yLjE1LTEuNTMzYTguMiA4LjIgMCAwIDEtMS40MS0xLjYwOGwtLjM1LS41MTF2Mi42NUgwdi01LjA3N2g0Ljk4M3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguMTUyIDcuNDMzYy4wMDUtLjI2LjA4LS4zNjQuMTMtLjQxNS4wNjYtLjA2Ni4xOTQtLjEzNy40My0uMTc0LjQ5Mi0uMDc4IDEuMTU4LjAzNSAxLjcwOC4xNzlsLjY3NS4xNzcuMzU2LTEuMzQxLS42NzUtLjE3N2MtLjU4LS4xNTItMS40ODYtLjMzNC0yLjI4NC0uMjA4LS40MDguMDY1LS44NTUuMjItMS4yMDIuNTY4LS4zNi4zNjItLjUzNS44NTItLjUzNSAxLjQyMXYuMDI2bC4wMDIuMDI3Yy4wNS42NTkuNDQ2IDEuMDk3Ljg1NSAxLjM4NS4zNzYuMjY0Ljg0MS40NTYgMS4yMTcuNjEybC4wNDIuMDE3Yy40MjUuMTc2Ljc0LjMxMS45NTguNDcuMTkzLjE0LjIxMi4yMjUuMjEyLjMgMCAuMjg5LS4wODYuNDA0LS4xNTMuNDY0LS4wOS4wODEtLjI2LjE2LS41NDguMTk2LS41ODcuMDcyLTEuMzUtLjA3LTEuOTExLS4yMmwtLjY3NS0uMTgtLjM2IDEuMzQuNjc0LjE4Yy41OTMuMTU4IDEuNTc2LjM2NCAyLjQ0NS4yNTYuNDQtLjA1NS45MjctLjE5OCAxLjMxMS0uNTQzLjQwNy0uMzY1LjYxMy0uODguNjEzLTEuNDk0IDAtLjY3LS4zNzctMS4xMjMtLjc4My0xLjQxOC0uMzY5LS4yNjgtLjgzNy0uNDYyLTEuMjE1LS42MThsLS4wMzEtLjAxM2MtLjQyNC0uMTc1LS43NTItLjMxNC0uOTg5LS40OC0uMjAxLS4xNDItLjI1NC0uMjQ2LS4yNjctLjMzNyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC45OTQgMTEuMzI2Yy4zODUgMCAuNjk4LjMxLjY5OC42OTN2MS43MzRIOC4yOTV2LTEuNzM0YzAtLjM4My4zMTMtLjY5My42OTktLjY5M20uNjk4LTcuMjgxdjEuNzMzYS42OTYuNjk2IDAgMCAxLS42OTguNjk0LjY5Ni42OTYgMCAwIDEtLjY5OS0uNjk0VjQuMDQ1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=",
                      alt: "Auto compounding rewards",
                    }),
                  }),
                ],
              })
            : r
            ? a?.symbol?.toUpperCase() === "stataUSDC".toUpperCase()
              ? (0, m.jsx)(oa.u, {
                  textAlign: "left",
                  label: "Yield on yield",
                  hasArrow: !0,
                  children: (0, m.jsx)("img", {
                    src: Zr,
                    alt: "Yield on yield",
                  }),
                })
              : (0, m.jsx)(A.x, {
                  fontFamily: "heading",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "white",
                  children: "N/A",
                })
            : (0, m.jsx)(oa.u, {
                textAlign: "left",
                label: "Interest free loan",
                hasArrow: !0,
                children: (0, m.jsx)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ0NS4zOTUgNyAuMDY2bC0uNDQ1LjMyOUM0Ljg0OCAxLjY1MyAzLjIyIDMuODI3IDIuMDI0IDYuMTQ0LjgyOCA4LjQ1OSAwIDExLjAzNyAwIDEzLjE0OGMwIDIuMDYzLjc2NyAzLjczNiAyLjA2NSA0Ljg4NiAxLjI4NyAxLjE0IDMuMDM4IDEuNzE0IDQuOTM1IDEuNzE0IDEuODg4IDAgMy42MzgtLjU0NSA0LjkyOC0xLjY1OEMxMy4yMyAxNi45NjQgMTQgMTUuMzEzIDE0IDEzLjI0OGMwLTIuMTEtLjgyNy00LjcxMi0yLjAyMi03LjA1MS0xLjE5Ni0yLjM0LTIuODI0LTQuNTQyLTQuNTMzLTUuODAyTTEuNSAxMy4xNDhjMC0xLjc3OC43MTctNC4xMSAxLjg1Ni02LjMxNi44MjctMS42IDEuODQzLTMuMDcgMi44OTQtNC4xNjR2MTUuNTQ0Yy0xLjI4MS0uMTI4LTIuMzgxLS41ODUtMy4xOS0xLjMwMi0uOTUyLS44NDMtMS41Ni0yLjA5NS0xLjU2LTMuNzYybTYuMjUgNS4wNjVjMS4yODgtLjEyMiAyLjM5LS41NjIgMy4xOTctMS4yNTkuOTQ3LS44MTcgMS41NTMtMi4wNCAxLjU1My0zLjcwNnEwLS4zMTctLjAzLS42NTdsLTQuNzIgMi44MzF6bTAtNC41NHYtMS4yNWw0LjE1Ni0yLjQ5NHEuMTcyLjU0Ny4yOTggMS4wNzN6bTAtMyAzLjYzNC0yLjE4Yy0uMjItLjUzOS0uNDctMS4wOC0uNzQyLTEuNjE0QzkuODE1IDUuMjYxIDguOCAzLjc3NSA3Ljc1IDIuNjczeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=",
                  alt: "Interest free loan",
                }),
              });
        },
        Vr = ({
          pool: e,
          network: t,
          apr: a,
          collateralType: r,
          collateralPrices: n,
        }) => {
          const { data: o } = (0, Vt.H)((0, Wt.$l)(r.symbol), t),
            s = (0, Wt.Yz)(t?.id, t?.preset) ? o : r?.tokenAddress,
            { data: l } = (0, ke.mM)(s, t),
            c = (0, F.s0)(),
            [d] = (0, i.lr)(),
            { network: u, setNetwork: h } = (0, G.LN)(),
            { connect: x } = (0, G.Os)(),
            p = (0, Ce.wei)(
              n?.find((e) => e.symbol.toUpperCase() === r.symbol.toUpperCase())
                ?.price || f.GH
            ),
            g = a.collateralAprs.find(
              (e) => e.collateralType === r.tokenAddress.toLowerCase()
            ) || { apr7d: 0, apr7dRewards: 0, apr7dPnl: 0 },
            { apr7d: y, apr7dRewards: j, apr7dPnl: b } = g,
            w = async () => {
              try {
                if (!u) return void x();
                if (u.id !== t.id && !(await h(t.id))) return;
                d.set("manageAction", "deposit"),
                  c({
                    pathname: `/positions/${r.symbol}/${e.id}`,
                    search: d.toString(),
                  });
              } catch (e) {}
            },
            C = u ? "Deposit" : "Connect Wallet";
          return (0, m.jsx)(Pt.p, {
            in: !0,
            children: (0, m.jsxs)(E.k, {
              flexDir: "column",
              w: "100%",
              border: "1px solid",
              borderColor: "gray.900",
              rounded: "base",
              bg: "navy.700",
              px: 3,
              py: 4,
              children: [
                (0, m.jsxs)(E.k, {
                  px: 4,
                  flexDir: "row",
                  w: "100%",
                  gap: 4,
                  children: [
                    (0, m.jsxs)(E.k, {
                      width: "190px",
                      alignItems: "center",
                      _hover: { cursor: "pointer" },
                      onClick: w,
                      children: [
                        (0, m.jsxs)(E.k, {
                          position: "relative",
                          children: [
                            (0, m.jsx)(xe, { w: 40, h: 40, symbol: r.symbol }),
                            (0, m.jsx)(G.dF, {
                              position: "absolute",
                              right: 0,
                              bottom: 0,
                              networkId: t.id,
                              size: "14px",
                            }),
                          ],
                        }),
                        (0, m.jsxs)(E.k, {
                          flexDirection: "column",
                          ml: 3,
                          mr: "auto",
                          children: [
                            (0, m.jsx)(A.x, {
                              fontSize: "14px",
                              color: "white",
                              fontWeight: 700,
                              lineHeight: "1.25rem",
                              fontFamily: "heading",
                              children: r.symbol,
                            }),
                            (0, m.jsxs)(A.x, {
                              textTransform: "capitalize",
                              fontSize: "xs",
                              color: "gray.500",
                              fontFamily: "heading",
                              lineHeight: "1rem",
                              children: [t.name, " Network"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsxs)(E.k, {
                      width: "220px",
                      direction: "column",
                      alignItems: "flex-end",
                      children: [
                        (0, m.jsx)(A.x, {
                          fontFamily: "heading",
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: "28px",
                          color: "white",
                          children: l ? za(l.mul(p).toNumber()) : "-",
                        }),
                        (0, m.jsxs)(A.x, {
                          color: "gray.500",
                          fontFamily: "heading",
                          fontSize: "12px",
                          lineHeight: "16px",
                          children: [l ? Pa(l.toNumber()) : "", " ", r.symbol],
                        }),
                      ],
                    }),
                    (0, m.jsxs)(E.k, {
                      width: "189px",
                      flexDir: "column",
                      justifyContent: "cetner",
                      alignItems: "flex-end",
                      children: [
                        (0, m.jsx)(A.x, {
                          fontFamily: "heading",
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: "28px",
                          color: "white",
                          children: "SC Pool",
                        }),
                        (0, m.jsx)(A.x, {
                          color: "gray.500",
                          fontFamily: "heading",
                          fontSize: "12px",
                          lineHeight: "16px",
                          children: "Spartan Council",
                        }),
                      ],
                    }),
                    (0, m.jsx)(E.k, {
                      width: "144px",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      children: (0, m.jsx)(A.x, {
                        fontFamily: "heading",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        color: "white",
                        textAlign: "right",
                        children: p
                          ? za(
                              (0, Ce.wei)(
                                r.collateralDeposited,
                                Number(r.decimals),
                                !0
                              )
                                .mul(p)
                                .toNumber()
                            )
                          : 0,
                      }),
                    }),
                    (0, m.jsx)(E.k, {
                      width: "144px",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      children: (0, m.jsxs)(A.x, {
                        fontFamily: "heading",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        color: "white",
                        children: [
                          Br(100 * y, t?.id),
                          (0, m.jsx)(se.u, {
                            label: (0, m.jsxs)(E.k, {
                              direction: "column",
                              children: [
                                (0, m.jsxs)(E.k, {
                                  justifyContent: "space-between",
                                  children: [
                                    (0, m.jsx)(A.x, {
                                      fontWeight: 700,
                                      mr: 2,
                                      children: "Total APR:",
                                    }),
                                    (0, m.jsx)(A.x, {
                                      fontWeight: 700,
                                      children: Br(100 * y, t?.id),
                                    }),
                                  ],
                                }),
                                (0, m.jsxs)(E.k, {
                                  justifyContent: "space-between",
                                  children: [
                                    (0, m.jsx)(A.x, {
                                      mr: 2,
                                      children: "Performance:",
                                    }),
                                    (0, m.jsx)(A.x, {
                                      children: Br(100 * b, t?.id),
                                    }),
                                  ],
                                }),
                                (0, m.jsxs)(E.k, {
                                  justifyContent: "space-between",
                                  children: [
                                    (0, m.jsx)(A.x, {
                                      mr: 2,
                                      children: "Rewards: ",
                                    }),
                                    (0, m.jsx)(A.x, {
                                      children: Br(100 * j, t?.id),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            children: (0, m.jsx)(E.k, {
                              as: "span",
                              display: "inline",
                              children: (0, m.jsx)(V.P$, {
                                w: "14px",
                                h: "14px",
                                mb: 1,
                                ml: "0.5px",
                                mt: "1px",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsx)(E.k, {
                      alignItems: "center",
                      justifyContent: "flex-end",
                      width: "121px",
                      textAlign: "right",
                      children: (0, m.jsx)(qr, {
                        network: t,
                        collateralType: r,
                      }),
                    }),
                    (0, m.jsx)(E.k, {
                      minW: "159px",
                      flex: "1",
                      justifyContent: "flex-end",
                      children: (0, m.jsx)(I.z, {
                        onClick: w,
                        size: "sm",
                        height: "32px",
                        py: "10px",
                        px: 2,
                        whiteSpace: "nowrap",
                        borderRadius: "4px",
                        fontFamily: "heading",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "20px",
                        children: C,
                      }),
                    }),
                  ],
                }),
                [G.RR.id, G.NM.id].includes(t.id) &&
                  (0, m.jsx)(Ar, { network: t, type: "banner" }),
              ],
            }),
          });
        },
        Gr = ({
          pool: e,
          network: t,
          apr: a,
          collateralTypes: r,
          collateralPrices: n,
        }) =>
          (0, m.jsx)(m.Fragment, {
            children: r?.map((r) =>
              (0, m.jsx)(
                Vr,
                {
                  pool: e,
                  network: t,
                  apr: a,
                  collateralType: r,
                  collateralPrices: n,
                },
                r.tokenAddress + t.id
              )
            ),
          }),
        _r = G.g5
          .filter(({ isSupported: e, isTestnet: t }) => e && !t)
          .filter(({ id: e }) => 10 !== e),
        Qr = ({ activeChains: e, dispatch: t }) => {
          const a = 0 === e.length;
          return (0, m.jsxs)(E.k, {
            justifyContent: "center",
            children: [
              (0, m.jsx)(E.k, {
                variant: "unstyled",
                bg: a ? "whiteAlpha.300" : "transparent",
                onClick: () => t({ type: "RESET_CHAIN" }),
                color: "gray.50",
                as: I.z,
                px: "16px",
                py: "6px",
                fontWeight: 600,
                borderRadius: "9999px",
                mr: 1.5,
                fontSize: "sm",
                children: "All Networks",
              }),
              _r.map((a) => {
                const r = e.includes(a.id);
                return (0, m.jsx)(
                  E.k,
                  {
                    onClick: () => {
                      t(
                        r
                          ? { type: "REMOVE_CHAIN", payload: { chain: a.id } }
                          : { type: "ADD_CHAIN", payload: { chain: a.id } }
                      );
                    },
                    variant: "unstyled",
                    bg: r ? "whiteAlpha.300" : "transparent",
                    justifyContent: "center",
                    display: "flex",
                    mr: 1.5,
                    as: I.z,
                    px: "16px",
                    py: "6px",
                    fontWeight: 600,
                    borderRadius: "9999px",
                    children: (0, m.jsx)(G.dF, {
                      size: "18px",
                      networkId: a.id,
                    }),
                  },
                  a.id
                );
              }),
            ],
          });
        },
        Yr = ["WETH", "SNX", "USDC", "ARB", "wstETH"],
        Kr = ({ activeCollaterals: e, dispatch: t }) => {
          const a = 0 === e.length;
          return (0, m.jsxs)(E.k, {
            justifyContent: "center",
            children: [
              (0, m.jsx)(E.k, {
                variant: "unstyled",
                bg: a ? "whiteAlpha.300" : "transparent",
                onClick: () => t({ type: "RESET_COLLATERAL" }),
                color: "gray.50",
                as: I.z,
                px: "16px",
                py: "6px",
                fontWeight: 600,
                borderRadius: "9999px",
                mr: 1.5,
                fontSize: "sm",
                children: "All Collaterals",
              }),
              Yr.map((a) => {
                const r = e.includes(a);
                return (0, m.jsx)(
                  E.k,
                  {
                    onClick: () => {
                      t(
                        r
                          ? {
                              type: "REMOVE_COLLATERAL",
                              payload: { collateral: a },
                            }
                          : {
                              type: "ADD_COLLATERAL",
                              payload: { collateral: a },
                            }
                      );
                    },
                    variant: "unstyled",
                    bg: r ? "whiteAlpha.300" : "transparent",
                    justifyContent: "center",
                    display: "flex",
                    mr: 1.5,
                    as: I.z,
                    px: "16px",
                    py: "6px",
                    fontWeight: 600,
                    borderRadius: "9999px",
                    children: (0, m.jsx)(xe, {
                      width: 18,
                      height: 18,
                      symbol: a,
                    }),
                  },
                  a
                );
              }),
            ],
          });
        };
      a(5875),
        a(50509),
        a(38728),
        a(64810),
        a(43419),
        a(32825),
        a(16093),
        a(77829),
        a(60253),
        a(49225),
        a(79941),
        a(57265),
        a(25888),
        a(15840),
        a(37610),
        a(13351);
      var Xr = a(62929),
        Jr = a(21287),
        en = a(37595);
      const tn = {
        USDC: {
          pool: "0xc1e02884af4a283ca25ab63c45360d220d69da52",
          address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          network: G.PZ,
          link: "https://toros.finance/synthetix-usdc-andromeda-yield",
        },
        wstETH: {
          pool: "0xe9b5260d99d283ff887859c569baf8ad1bd12aac",
          address: "0x5979d7b546e38e414f7e9822514be443a4800529",
          network: G.PO,
          link: "https://toros.finance/synthetix-eth-yield",
        },
      };
      function an({ token: e }) {
        const t = tn[e],
          { data: a } = (0, ke.mM)(t.address, t.network),
          { data: r } = (0, y.useQuery)({
            queryKey: ["toros-pool", e],
            queryFn: () => (0, en.Y4)(t.pool),
          });
        return (0, m.jsx)(Pt.p, {
          in: !0,
          children: (0, m.jsxs)(E.k, {
            flexDir: "row",
            w: "100%",
            border: "1px solid",
            borderColor: "gray.900",
            rounded: "base",
            bg: "navy.700",
            gap: 4,
            px: 7,
            py: 4,
            children: [
              (0, m.jsxs)(E.k, {
                width: "190px",
                alignItems: "center",
                children: [
                  (0, m.jsxs)(E.k, {
                    position: "relative",
                    children: [
                      (0, m.jsx)(xe, { w: 40, h: 40, symbol: e }),
                      (0, m.jsx)(G.dF, {
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        networkId: t.network.id,
                        size: "14px",
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDirection: "column",
                    ml: 3,
                    mr: "auto",
                    children: [
                      (0, m.jsx)(A.x, {
                        fontSize: "14px",
                        color: "white",
                        fontWeight: 700,
                        lineHeight: "1.25rem",
                        fontFamily: "heading",
                        children: e,
                      }),
                      (0, m.jsxs)(A.x, {
                        textTransform: "capitalize",
                        fontSize: "xs",
                        color: "gray.500",
                        fontFamily: "heading",
                        lineHeight: "1rem",
                        children: [t.network.name, " Network"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                width: "220px",
                direction: "column",
                alignItems: "flex-end",
                children: [
                  (0, m.jsx)(A.x, {
                    fontFamily: "heading",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: "white",
                    children: a ? za(a.toNumber()) : "-",
                  }),
                  (0, m.jsxs)(A.x, {
                    color: "gray.500",
                    fontFamily: "heading",
                    fontSize: "12px",
                    lineHeight: "16px",
                    children: [
                      a ? (0, Jr.formatNumber)(a.toNumber()) : "",
                      " ",
                      e,
                    ],
                  }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                width: "189px",
                flexDir: "column",
                justifyContent: "cetner",
                alignItems: "flex-end",
                children: [
                  (0, m.jsx)(A.x, {
                    fontFamily: "heading",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: "white",
                    children: "Toros Yield Vault",
                  }),
                  (0, m.jsx)(A.x, {
                    color: "gray.500",
                    fontFamily: "heading",
                    fontSize: "12px",
                    lineHeight: "16px",
                    children: "Toros",
                  }),
                ],
              }),
              (0, m.jsx)(E.k, {
                width: "144px",
                alignItems: "center",
                justifyContent: "flex-end",
                children: (0, m.jsxs)(A.x, {
                  fontFamily: "heading",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "white",
                  textAlign: "right",
                  children: ["$", r?.tvl],
                }),
              }),
              (0, m.jsx)(E.k, {
                width: "144px",
                alignItems: "center",
                justifyContent: "flex-end",
                children: (0, m.jsxs)(A.x, {
                  fontFamily: "heading",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "white",
                  children: [r?.apy, "%"],
                }),
              }),
              (0, m.jsx)(E.k, {
                alignItems: "center",
                justifyContent: "flex-end",
                width: "121px",
                textAlign: "right",
                children: (0, m.jsx)(qr, {
                  isToros: !0,
                  collateralType: { address: t.address, symbol: e },
                }),
              }),
              (0, m.jsx)(E.k, {
                flex: 1,
                minWidth: "159px",
                alignItems: "center",
                justifyContent: "flex-end",
                children: (0, m.jsx)(v.r, {
                  href: t.link,
                  rel: "noopener",
                  target: "_blank",
                  _hover: { textDecoration: "none" },
                  children: (0, m.jsxs)(I.z, {
                    size: "sm",
                    height: "32px",
                    py: "10px",
                    px: 2,
                    whiteSpace: "nowrap",
                    borderRadius: "4px",
                    fontFamily: "heading",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    children: ["Deposit", (0, m.jsx)(rn, { ml: 1 })],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      const rn = ({ ...e }) =>
          (0, m.jsxs)(Xr.J, {
            width: "14px",
            height: "14px",
            viewBox: "0 0 14 14",
            fill: "none",
            ...e,
            children: [
              (0, m.jsx)("g", {
                clipPath: "url(#clip0_13614_19286)",
                children: (0, m.jsx)("path", {
                  d: "M9.07955 4.47121L4.65447 4.47121L4.65447 3.30472L11.071 3.30472L11.071 9.72124L9.90451 9.72124L9.90451 5.29617L4.11719 11.325L3.29224 10.5L9.07955 4.47121Z",
                  fill: "currentColor",
                }),
              }),
              (0, m.jsx)("defs", {
                children: (0, m.jsx)("clipPath", {
                  id: "clip0_13614_19286",
                  children: (0, m.jsx)("rect", {
                    width: "14",
                    height: "14",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        nn = () =>
          (0, m.jsx)(m.Fragment, {
            children: Array.from(Array(6).keys()).map((e) =>
              (0, m.jsxs)(
                E.k,
                {
                  w: "100%",
                  border: "1px solid",
                  borderColor: "gray.900",
                  rounded: "base",
                  bg: "navy.700",
                  gap: 4,
                  py: 6,
                  px: 4,
                  children: [
                    (0, m.jsxs)(E.k, {
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "190px",
                      gap: 3,
                      children: [
                        (0, m.jsx)(Et.O, {
                          width: "40px",
                          height: "40px",
                          rounded: "full",
                        }),
                        (0, m.jsxs)(E.k, {
                          flex: 1,
                          flexDirection: "column",
                          gap: 1,
                          children: [
                            (0, m.jsx)(Et.O, { height: 6 }),
                            (0, m.jsx)(Et.O, { height: 3.5 }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsx)(E.k, {
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "220px",
                      children: (0, m.jsx)(Et.O, { height: 6, width: "92px" }),
                    }),
                    (0, m.jsx)(E.k, {
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "189px",
                      children: (0, m.jsx)(Et.O, { height: 6, width: "92px" }),
                    }),
                    (0, m.jsx)(E.k, {
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "144px",
                      children: (0, m.jsx)(Et.O, { height: 6, width: "92px" }),
                    }),
                    (0, m.jsx)(E.k, {
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "144px",
                      children: (0, m.jsx)(Et.O, { height: 6, width: "92px" }),
                    }),
                    (0, m.jsx)(E.k, {
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "121px",
                      children: (0, m.jsx)(Et.O, { height: 6, width: "53px" }),
                    }),
                    (0, m.jsx)(E.k, {
                      justifyContent: "flex-end",
                      alignItems: "center",
                      minW: "159px",
                      flex: "1",
                      children: (0, m.jsx)(Et.O, { height: 6, width: "139px" }),
                    }),
                  ],
                },
                e
              )
            ),
          }),
        on = ({ ...e }) =>
          (0, m.jsxs)(Xr.J, {
            width: "242px",
            height: "294px",
            viewBox: "0 0 242 294",
            fill: "none",
            ...e,
            children: [
              (0, m.jsx)("path", {
                d: "M35.5978 98.5483C53.9696 117.348 91.5399 175.897 98.468 215.303",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M51.7158 58.1003C67.1932 95.8157 92.3605 137.627 95.7502 212.037",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M91.4891 51.3845C94.7773 92.4947 101.899 151.755 93.6153 220.766",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M117.383 100.944C113.854 128.734 113.664 172.383 87.1345 216.569",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M36.1586 97.9597C54.5304 116.759 92.1006 175.309 99.0288 214.715",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M118.229 100.917C114.7 128.707 114.51 172.356 87.9809 216.542",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M52.4117 57.5923C67.889 95.3077 93.0564 137.119 96.446 211.529",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M92.2393 51.2368C95.5276 92.347 102.65 151.608 94.3656 220.618",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M125.029 216.256L168.984 241.78L168.973 245.837L125.05 271.379L118.049 271.364L74.088 245.836L74.0802 241.788L118.042 216.258L125.029 216.256Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("rect", {
                width: "44.1452",
                height: "44.1452",
                transform:
                  "matrix(0.864779 0.502153 -0.864779 0.502153 121.393 221.28)",
                fill: "#00B0D6",
              }),
              (0, m.jsx)("path", {
                d: "M87.2931 245.809L121.424 225.977L121.424 230.667L91.3375 248.161L87.2931 245.809Z",
                fill: "#008EAD",
              }),
              (0, m.jsx)("path", {
                d: "M121.393 225.995L155.533 245.81L151.479 248.145L121.393 230.689L121.393 225.995Z",
                fill: "#008EAD",
              }),
              (0, m.jsx)("path", {
                d: "M83.2195 243.449L121.397 221.28L121.397 223.743L85.3475 244.688L83.2195 243.449Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M121.393 221.28L159.567 243.447L157.459 244.689L121.393 223.747L121.393 221.28Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M85.1845 244.579L121.401 223.531L121.401 225.994L87.2849 245.816L85.1845 244.579Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M121.393 223.531L157.65 244.565L155.51 245.809L121.393 225.998L121.393 223.531Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("mask", {
                id: "path-17-inside-1_14871_157174",
                fill: "white",
                children: (0, m.jsx)("path", {
                  d: "M74.0897 245.837L118.042 271.358L118.042 293.445L74.0897 267.923L74.0897 245.837Z",
                }),
              }),
              (0, m.jsx)("path", {
                d: "M74.0897 245.837L118.042 271.358L118.042 293.445L74.0897 267.923L74.0897 245.837Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M117.609 271.107L117.609 293.194L118.474 293.696L118.474 271.61L117.609 271.107Z",
                fill: "#AEA4FF",
                mask: "url(#path-17-inside-1_14871_157174)",
              }),
              (0, m.jsx)("mask", {
                id: "path-19-inside-2_14871_157174",
                fill: "white",
                children: (0, m.jsx)("path", {
                  d: "M125.023 271.359L168.974 245.837L168.974 267.924L125.023 293.445L125.023 271.359Z",
                }),
              }),
              (0, m.jsx)("path", {
                d: "M125.023 271.359L168.974 245.837L168.974 267.924L125.023 293.445L125.023 271.359Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M125.455 293.194L125.455 271.108L124.59 271.61L124.59 293.696L125.455 293.194Z",
                fill: "#AEA4FF",
                mask: "url(#path-19-inside-2_14871_157174)",
              }),
              (0, m.jsx)("mask", {
                id: "path-21-inside-3_14871_157174",
                fill: "white",
                children: (0, m.jsx)("path", {
                  d: "M118.039 271.371H125.027V293.445H118.039V271.371Z",
                }),
              }),
              (0, m.jsx)("path", {
                d: "M118.039 271.371H125.027V293.445H118.039V271.371Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M118.039 271.371V270.871H117.539V271.371H118.039ZM125.027 271.371H125.527V270.871H125.027V271.371ZM118.039 271.871H125.027V270.871H118.039V271.871ZM124.527 271.371V293.445H125.527V271.371H124.527ZM118.539 293.445V271.371H117.539V293.445H118.539Z",
                fill: "#AEA4FF",
                mask: "url(#path-21-inside-3_14871_157174)",
              }),
              (0, m.jsx)("path", {
                d: "M142.396 265.149L140.962 265.977L140.962 279.389L142.396 278.561L142.396 265.149Z",
                fill: "#06061B",
              }),
              (0, m.jsx)("path", {
                d: "M143.831 264.317L142.396 265.146L142.396 278.561L143.831 279.389L143.831 264.317Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M143.83 279.39L140.96 281.05L140.961 279.39L142.395 278.561L143.83 279.39Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("path", {
                d: "M146.704 262.66L145.269 263.489L145.269 276.901L146.704 276.073L146.704 262.66Z",
                fill: "#06061B",
              }),
              (0, m.jsx)("path", {
                d: "M148.138 261.828L146.703 262.657L146.703 276.073L148.138 276.901L148.138 261.828Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M148.137 276.901L145.267 278.562L145.268 276.901L146.702 276.073L148.137 276.901Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("path", {
                d: "M151.009 260.172L149.574 261L149.574 274.412L151.009 273.584L151.009 260.172Z",
                fill: "#06061B",
              }),
              (0, m.jsx)("path", {
                d: "M152.443 259.34L151.008 260.169L151.008 273.584L152.443 274.412L152.443 259.34Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M152.442 274.413L149.573 276.073L149.573 274.413L151.008 273.584L152.442 274.413Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("path", {
                d: "M155.314 257.683L153.879 258.512L153.879 271.924L155.314 271.096L155.314 257.683Z",
                fill: "#06061B",
              }),
              (0, m.jsx)("path", {
                d: "M156.748 256.851L155.314 257.68L155.314 271.096L156.748 271.924L156.748 256.851Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M156.747 271.924L153.878 273.585L153.878 271.924L155.313 271.096L156.747 271.924Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("path", {
                d: "M74.0921 245.839L118.046 271.374H125.014L168.974 245.838",
                stroke: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M121.533 261.713L166.418 235.65L166.418 243.578L121.533 269.641L121.533 261.713Z",
                fill: "#C9C9D9",
              }),
              (0, m.jsx)("path", {
                d: "M76.6477 235.531L121.533 261.594L121.533 269.641L76.6477 243.578L76.6477 235.531Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M125.029 187.193L168.984 212.716L168.973 216.774L125.05 242.316L118.049 242.3L74.088 216.773L74.0802 212.724L118.042 187.195L125.029 187.193Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("rect", {
                width: "44.1452",
                height: "44.1452",
                transform:
                  "matrix(0.864779 0.502153 -0.864779 0.502153 121.393 192.216)",
                fill: "#00D1FF",
              }),
              (0, m.jsx)("path", {
                d: "M87.2931 216.746L121.424 196.913L121.424 201.604L91.3375 219.097L87.2931 216.746Z",
                fill: "#008EAD",
              }),
              (0, m.jsx)("path", {
                d: "M121.393 196.932L155.533 216.746L151.479 219.082L121.393 201.625L121.393 196.932Z",
                fill: "#008EAD",
              }),
              (0, m.jsx)("path", {
                d: "M83.2195 214.385L121.397 192.216L121.397 194.68L85.3475 215.624L83.2195 214.385Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M121.393 192.216L159.567 214.383L157.459 215.626L121.393 194.683L121.393 192.216Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M85.1845 215.516L121.401 194.467L121.401 196.93L87.2849 216.752L85.1845 215.516Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M121.393 194.468L157.65 215.502L155.51 216.746L121.393 196.935L121.393 194.468Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("mask", {
                id: "path-46-inside-4_14871_157174",
                fill: "white",
                children: (0, m.jsx)("path", {
                  d: "M74.0897 216.773L118.042 242.295L118.042 264.382L74.0897 238.86L74.0897 216.773Z",
                }),
              }),
              (0, m.jsx)("path", {
                d: "M74.0897 216.773L118.042 242.295L118.042 264.382L74.0897 238.86L74.0897 216.773Z",
                fill: "#402FC8",
              }),
              (0, m.jsx)("path", {
                d: "M117.609 242.044L117.609 264.13L118.474 264.633L118.474 242.546L117.609 242.044Z",
                fill: "#AEA4FF",
                mask: "url(#path-46-inside-4_14871_157174)",
              }),
              (0, m.jsx)("mask", {
                id: "path-48-inside-5_14871_157174",
                fill: "white",
                children: (0, m.jsx)("path", {
                  d: "M125.023 242.295L168.974 216.774L168.974 238.86L125.023 264.382L125.023 242.295Z",
                }),
              }),
              (0, m.jsx)("path", {
                d: "M125.023 242.295L168.974 216.774L168.974 238.86L125.023 264.382L125.023 242.295Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M125.455 264.131L125.455 242.044L124.59 242.546L124.59 264.633L125.455 264.131Z",
                fill: "#AEA4FF",
                mask: "url(#path-48-inside-5_14871_157174)",
              }),
              (0, m.jsx)("mask", {
                id: "path-50-inside-6_14871_157174",
                fill: "white",
                children: (0, m.jsx)("path", {
                  d: "M118.039 242.307H125.027V264.382H118.039V242.307Z",
                }),
              }),
              (0, m.jsx)("path", {
                d: "M118.039 242.307H125.027V264.382H118.039V242.307Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                d: "M118.039 242.307V241.807H117.539V242.307H118.039ZM125.027 242.307H125.527V241.807H125.027V242.307ZM118.039 242.807H125.027V241.807H118.039V242.807ZM124.527 242.307V264.382H125.527V242.307H124.527ZM118.539 264.382V242.307H117.539V264.382H118.539Z",
                fill: "#AEA4FF",
                mask: "url(#path-50-inside-6_14871_157174)",
              }),
              (0, m.jsx)("path", {
                d: "M74.0921 216.776L118.046 242.31H125.014L168.974 216.775",
                stroke: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M153.163 239.714L149.356 237.516L149.356 239.519L153.163 241.717L153.163 239.714Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M142.551 245.872L138.745 243.674L138.745 245.677L142.551 247.875L142.551 245.872Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M144.596 244.692L142.552 245.872L138.746 243.674L140.79 242.494L144.596 244.692Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M155.195 238.55L153.162 239.724L149.356 237.526L151.389 236.353L155.195 238.55Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M155.208 238.563L142.549 245.872L142.549 247.894L155.208 240.586L155.208 238.563Z",
                fill: "#C9C9D9",
              }),
              (0, m.jsx)("path", {
                d: "M155.214 238.56L142.551 245.871L140.186 244.506L152.849 237.195L155.214 238.56Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M120.924 138.238C129.139 157.525 148.205 203.913 144.403 242.749",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M121.512 137.516C129.726 156.803 148.792 203.191 144.991 242.026",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M205.82 97.4355C179.333 130.637 153.721 194.747 146.117 242.106",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M206.306 98.1211C179.874 131.32 154.313 195.425 146.725 242.78",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M182.309 111.502C166.048 141.342 150.323 198.962 145.655 241.526",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M182.898 112.201C166.637 142.042 150.912 199.661 146.244 242.225",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M198.946 51.5159C135.775 104.355 147.359 193.927 144.901 242.205",
                stroke: "white",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M199.781 51.4807C136.61 104.319 148.194 193.892 145.736 242.17",
                stroke: "#C9C9D9",
                strokeWidth: "1.5",
              }),
              (0, m.jsx)("path", {
                d: "M174.533 30.1777L173.854 36.575L175.185 41.876L172.745 43.2919L171.466 40.6093L170.915 38.2281L170.54 36.2234L171.466 31.8229L174.533 30.1777Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M234.234 74.8176C239.761 63.3438 229.095 53.7159 224.713 52.8425C222.443 45.1597 218.376 42.6613 216.557 42.3267C213.002 27.5427 201.65 25.8931 200.559 32.5614C194.25 21.3759 187.567 23.5273 187.315 29.5831C181.554 23.3398 171.893 24.0898 174.818 36.7916L222.33 69.6932L229.478 77.5694L234.234 74.8176Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M172.304 29.1663L176.995 26.4646L175.784 29.1574L172.304 29.1663Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M184.517 27.9732L189.208 25.2715L187.997 27.9643L184.517 27.9732Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M197.765 32.2154L202.456 29.5137L201.245 32.2065L197.765 32.2154Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M175.13 41.9072L230.339 73.7824C230.642 72.9418 230.791 71.8492 230.791 70.528C229.835 65.3978 227.096 61.3545 223.791 58.0503C222.251 57.1613 220.931 56.7546 219.877 56.8368C219.881 56.7078 219.883 56.5745 219.883 56.437C219.177 55.5737 218.629 54.1485 218.043 52.626C217.124 50.2373 216.113 47.6091 214.256 46.537C212.964 45.7912 211.997 45.5545 211.312 45.7983C211.322 45.5973 211.327 45.3899 211.327 45.1762C211.327 41.9214 208.874 39.0744 206.722 36.5775C205.972 35.7078 205.259 34.8806 204.699 34.0934C200.899 31.8992 198.503 32.804 198.503 37.1924C198.503 37.2362 198.503 37.28 198.504 37.3239L196.146 38.6918C196.038 38.3899 195.933 38.0735 195.824 37.7452C195.124 35.6363 194.259 33.0317 191.58 30.5709C188.065 28.5415 186.226 28.9241 186.226 32.9828C186.226 33.5311 186.278 34.0954 186.377 34.6664L184.031 36.0288C182.99 34.0786 181.986 32.4106 179.981 31.2531C175.42 28.62 173.301 29.6001 173.301 34.8663C173.301 37.133 173.986 39.6104 175.13 41.9072Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M230.09 73.6617L229.924 74.9156L228.742 75.598L172.756 43.2745L175.12 41.9097L230.09 73.6617Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M172.011 44.3916L229.478 77.5699C230.753 76.5168 231.519 74.6672 231.519 72.169C231.519 66.4468 227.502 59.4886 222.546 56.6275C221.653 56.112 220.791 55.7647 219.977 55.5752C219.391 51.7703 216.746 47.6275 213.572 45.7952C212.969 45.4469 212.385 45.2041 211.83 45.0609C211.169 40.2433 207.822 34.9354 203.791 32.6084C199.934 30.3812 196.701 31.6072 195.852 35.2718C194.517 32.3924 192.358 29.7767 189.923 28.3706C185.954 26.0791 182.72 27.8491 182.586 32.3163C181.563 31.308 180.463 30.4453 179.317 29.7834C173.911 26.6622 169.528 29.1925 169.528 35.4349C169.528 38.3239 170.467 41.5017 172.011 44.3916Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M155.208 238.562L142.547 245.872L140.182 244.506L152.843 237.197L155.208 238.562Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M48.7564 14.2131L48.0777 20.6098L49.4084 25.9103L46.9688 27.3261L45.6899 24.6437L45.1389 22.2628L44.7635 20.2582L45.6899 15.8581L48.7564 14.2131Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M108.469 58.8484C113.995 47.3756 103.33 37.7486 98.948 36.8753C96.6782 29.1932 92.6117 26.695 90.7932 26.3604C87.238 11.5778 75.8879 9.92841 74.7963 16.5961C68.4882 5.41162 61.8056 7.56277 61.5542 13.618C55.7928 7.37532 46.1331 8.12529 49.058 20.8259L96.5656 53.7244L103.713 61.5999L108.469 58.8484Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M46.5424 13.2022L51.2334 10.5007L50.0225 13.1933L46.5424 13.2022Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M58.7401 12.0076L63.4311 9.30615L62.2202 11.9987L58.7401 12.0076Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M71.9872 16.2505L76.6782 13.5491L75.4673 16.2416L71.9872 16.2505Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M49.3423 25.9443L104.548 57.8174C104.852 56.9765 105.001 55.883 105.001 54.5603C104.045 49.4305 101.306 45.3876 98.0023 42.0838C96.4571 41.1917 95.1328 40.7853 94.0772 40.8712C94.0815 40.7414 94.0836 40.6073 94.0836 40.4688C93.3776 39.6057 92.8292 38.1805 92.2435 36.6582C91.3244 34.2697 90.3133 31.6418 88.4565 30.5698C87.1726 29.8286 86.2098 29.5903 85.5257 29.8268C85.5356 29.6278 85.5406 29.4225 85.5406 29.2111C85.5406 25.9565 83.0872 23.1098 80.9355 20.6132C80.1861 19.7436 79.4732 18.9164 78.9134 18.1293C75.1132 15.9353 72.7172 16.84 72.7172 21.2281C72.7172 21.2707 72.7175 21.3134 72.7181 21.3562L72.7175 21.3558L70.3614 22.7225C70.2546 22.4217 70.15 22.1067 70.0415 21.7797L70.0415 21.7797C69.3414 19.671 68.4767 17.0666 65.7972 14.606C62.2826 12.5769 60.4442 12.9594 60.4442 17.0177C60.4442 17.5646 60.496 18.1275 60.5942 18.6971L58.2411 20.0635C57.2003 18.1138 56.1963 16.4462 54.1919 15.289C49.6317 12.6561 47.5125 13.6361 47.5125 18.9018C47.5125 21.169 48.1978 23.6471 49.3423 25.9443Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M104.313 57.693L104.147 58.9468L102.965 59.6291L46.984 27.3086L49.3477 25.9439L104.313 57.693Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M46.2452 28.4261L103.708 61.6024C104.985 60.5499 105.752 58.6994 105.752 56.1992C105.752 50.4776 101.736 43.5201 96.7804 40.6593C95.8854 40.1425 95.021 39.7948 94.2053 39.6056C93.6185 35.8015 90.9745 31.6602 87.8017 29.8283C87.1965 29.4789 86.6104 29.2357 86.0543 29.0927C85.3931 24.276 82.046 18.9695 78.0165 16.643C74.1606 14.4168 70.9297 15.641 70.079 19.302C68.7435 16.424 66.5859 13.8099 64.1514 12.4044C60.1835 10.1136 56.9509 11.8824 56.8151 16.3475C55.7936 15.3403 54.6942 14.4784 53.5489 13.8172C48.1433 10.6962 43.7612 13.2262 43.7612 19.4681C43.7612 22.3575 44.7003 25.5359 46.2452 28.4261Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M120.852 17.0082C111.091 13.6038 97.9605 15.5897 92.6154 17.0082L120.852 24.9519V17.0082Z",
                fill: "#CFC9FF",
              }),
              (0, m.jsx)("path", {
                d: "M120.851 17.0082C130.611 13.6038 143.742 15.5897 149.087 17.0082L120.851 24.9519V17.0082Z",
                fill: "#10104E",
              }),
              (0, m.jsx)("path", {
                d: "M68.909 27.0796L51.4791 47.7899L120.85 23.6752C91.4285 10.0575 73.9637 20.2708 68.909 27.0796Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M172.789 27.0796L190.219 47.7899L120.848 23.6752C150.27 10.0575 167.734 20.2708 172.789 27.0796Z",
                fill: "#1D1084",
              }),
              (0, m.jsx)("path", {
                d: "M190.219 47.7899L172.789 27.0796C167.734 20.2708 150.27 10.0575 120.848 23.6752",
                stroke: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M181.379 52.0454L206.389 80.4156L181.379 108.786L121 120.537L60.621 108.786L35.6112 80.4156L60.621 52.0454L121 40.2941L181.379 52.0454Z",
                fill: "#156800",
              }),
              (0, m.jsx)("path", {
                d: "M120.849 120.417L120.849 23.6753",
                stroke: "white",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M120.845 23.6763C88.7742 23.6763 37.8788 39.8472 35.613 80.4166L35.6157 80.4196L35.5957 98.4081C41.1312 95.5975 56.7965 102.256 60.6077 126.777L60.5355 108.784L58.1177 106.032L60.5378 108.787L120.845 23.6763Z",
                fill: "#8D7EFF",
              }),
              (0, m.jsx)("path", {
                d: "M35.5978 98.4081L35.0978 98.4075L35.0969 99.2232L35.8241 98.8539L35.5978 98.4081ZM120.847 23.1763C104.743 23.1763 83.9179 27.2334 66.8182 36.3922C49.7151 45.5528 36.2621 59.8659 35.1158 80.3887L36.1143 80.4444C37.2339 60.3979 50.3615 46.3409 67.2903 37.2737C84.2226 28.2046 104.881 24.1763 120.847 24.1763V23.1763ZM35.8241 98.8539C37.0607 98.226 38.9407 98.0965 41.177 98.69C43.4017 99.2803 45.9317 100.576 48.4242 102.722C53.4041 107.01 58.2252 114.69 60.1157 126.854L61.1038 126.7C59.1832 114.343 54.266 106.433 49.0767 101.964C46.4844 99.732 43.822 98.3572 41.4335 97.7234C39.0566 97.0926 36.9026 97.1848 35.3714 97.9622L35.8241 98.8539ZM36.0978 98.4086L36.1178 80.4181L35.1178 80.417L35.0978 98.4075L36.0978 98.4086Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M120.859 23.6763C100.812 32.9368 61.5942 65.2385 60.5512 108.787L120.859 120.56V23.6763ZM60.6132 126.752C69.3539 119.96 99.9127 113.848 120.99 138.516L120.854 120.56L60.5424 108.785L60.6132 126.752Z",
                fill: "#6B59FF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M120.853 23.6765C152.924 23.6765 203.819 39.8475 206.085 80.4168L181.16 108.787L120.853 23.6765ZM181.382 126.762C183.433 115.91 191.984 94.0802 206.389 98.3929L206.092 80.4143L181.164 108.787L181.382 126.762Z",
                fill: "#2D1EA6",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M120.844 23.6765C140.891 32.937 180.108 65.2388 181.151 108.787L120.844 120.561V23.6765ZM120.999 138.501C129.93 128.3 155.534 111.235 181.375 126.761L181.161 108.786L120.853 120.559L120.999 138.501Z",
                fill: "#3726C2",
              }),
              (0, m.jsx)("path", {
                d: "M120.651 23.2224C110.558 27.8847 95.6841 38.3213 83.1989 53.0503C70.7116 67.782 60.5784 86.8505 60.0532 108.775L61.0529 108.799C61.5709 87.1747 71.5679 68.3183 83.9618 53.6969C96.3578 39.0729 111.116 28.7283 121.07 24.1302L120.651 23.2224ZM61.1155 126.749L61.0444 108.783L60.0444 108.787L60.1155 126.753L61.1155 126.749Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M120.634 24.1304C130.588 28.7286 145.347 39.0732 157.743 53.6972C170.137 68.3185 180.134 87.175 180.652 108.799L181.651 108.775C181.126 86.8507 170.993 67.7822 158.506 53.0506C146.021 38.3215 131.147 27.885 121.054 23.2226L120.634 24.1304ZM180.652 108.792L180.866 126.767L181.866 126.755L181.651 108.78L180.652 108.792Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M120.819 27.2769L121.025 138.512",
                stroke: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M120.851 24.1763C136.818 24.1763 157.476 28.2046 174.408 37.2737C191.337 46.3409 204.465 60.3979 205.584 80.4444L206.583 80.3887C205.436 59.8659 191.983 45.5528 174.88 36.3922C157.781 27.2334 136.955 23.1763 120.851 23.1763V24.1763ZM205.583 80.4223L205.881 98.4009L206.88 98.3844L206.583 80.4058L205.583 80.4223Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M113.914 23.937L115.936 26.2316L120.82 27.1821L125.703 26.2316L127.726 23.937L125.703 21.6424L120.82 20.692L115.936 21.6424L113.914 23.937Z",
                fill: "#6B59FF",
                stroke: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M60.7169 126.719C69.4481 119.7 99.9736 113.384 121.028 138.878",
                stroke: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M121.203 139.2C125.631 133.968 134.216 126.953 144.898 123.25C155.562 119.554 168.297 119.163 181.101 127.122L181.629 126.273C168.52 118.124 155.461 118.531 144.57 122.306C133.697 126.074 124.967 133.204 120.439 138.554L121.203 139.2Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M181.865 126.851C182.882 121.283 185.52 113.082 189.674 106.845C191.75 103.728 194.184 101.134 196.951 99.5899C199.703 98.0548 202.799 97.5486 206.26 98.6207L206.556 97.6654C202.814 96.5065 199.436 97.0585 196.464 98.7166C193.508 100.366 190.967 103.1 188.842 106.291C184.592 112.672 181.915 121.011 180.882 126.671L181.865 126.851Z",
                fill: "#AEA4FF",
              }),
              (0, m.jsx)("path", {
                d: "M148.213 102.493L147.647 107.824L148.756 112.241L146.723 113.421L145.657 111.186L145.198 109.201L144.885 107.531L145.657 103.864L148.213 102.493Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M197.968 139.691C202.574 130.13 193.685 122.107 190.034 121.379C188.142 114.977 184.753 112.895 183.238 112.616C180.275 100.297 170.816 98.922 169.906 104.479C164.649 95.1578 159.08 96.9505 158.871 101.997C154.069 96.7943 146.019 97.4193 148.456 108.004L188.048 135.421L194.005 141.984L197.968 139.691Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M146.36 101.65L150.269 99.3984L149.26 101.642L146.36 101.65Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M156.536 100.655L160.446 98.4038L159.437 100.648L156.536 100.655Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M167.572 104.19L171.481 101.939L170.472 104.183L167.572 104.19Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M148.715 112.272L194.716 138.83C194.968 138.13 195.093 137.219 195.093 136.118C194.296 131.843 192.013 128.473 189.26 125.72C187.976 124.979 186.876 124.64 185.997 124.709C186.001 124.601 186.002 124.489 186.002 124.374C185.414 123.655 184.957 122.467 184.469 121.198C183.703 119.208 182.86 117.018 181.313 116.124C180.241 115.505 179.437 115.307 178.867 115.506C178.875 115.34 178.879 115.168 178.879 114.991C178.879 112.279 176.835 109.906 175.042 107.826C174.417 107.101 173.823 106.412 173.356 105.756C170.189 103.927 168.193 104.681 168.193 108.338C168.193 108.374 168.193 108.41 168.193 108.447L166.224 109.589C166.134 109.337 166.047 109.073 165.956 108.799C165.372 107.042 164.652 104.871 162.419 102.82C159.49 101.129 157.958 101.448 157.958 104.83C157.958 105.288 158.001 105.759 158.083 106.235L156.13 107.369C155.263 105.744 154.426 104.354 152.755 103.389C148.955 101.195 147.189 102.012 147.189 106.4C147.189 108.29 147.761 110.357 148.715 112.272Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M194.51 138.728L194.371 139.773L193.386 140.342L146.733 113.407L148.703 112.269L194.51 138.728Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M146.115 114.337L194.002 141.985C195.064 141.107 195.702 139.566 195.702 137.484C195.702 132.716 192.355 126.918 188.225 124.534C187.482 124.105 186.765 123.816 186.088 123.657C185.599 120.487 183.396 117.034 180.751 115.507C180.248 115.217 179.761 115.015 179.299 114.895C178.749 110.881 175.959 106.458 172.6 104.519C169.385 102.662 166.691 103.685 165.984 106.74C164.871 104.34 163.072 102.159 161.042 100.987C157.735 99.0777 155.04 100.553 154.928 104.277C154.076 103.436 153.159 102.716 152.203 102.165C147.698 99.5638 144.046 101.672 144.046 106.874C144.046 109.281 144.828 111.929 146.115 114.337Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M15.3343 54.8779L14.8818 59.1424L15.7689 62.6761L14.1425 63.6199L13.2899 61.8317L12.9226 60.2444L12.6724 58.908L13.2899 55.9746L15.3343 54.8779Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M55.1391 84.6344C58.8233 76.9859 51.713 70.5679 48.7919 69.9857C47.2787 64.8643 44.5678 63.1989 43.3554 62.9758C40.9853 53.1207 33.4185 52.0211 32.6908 56.4663C28.4854 49.0099 24.0303 50.444 23.8627 54.4809C20.0218 50.3191 13.582 50.819 15.532 59.2861L47.2037 81.2184L51.9684 86.4688L55.1391 84.6344Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M13.8534 54.2036L16.9808 52.4026L16.1735 54.1976L13.8534 54.2036Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M21.99 53.4074L25.1174 51.6064L24.3101 53.4015L21.99 53.4074Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                d: "M30.8207 56.2358L33.9481 54.4348L33.1408 56.2298L30.8207 56.2358Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.7329 62.7006L52.5359 83.9488C52.7385 83.388 52.8385 82.6585 52.8385 81.7759C52.2009 78.3561 50.3751 75.6609 48.1725 73.4583C47.143 72.8639 46.2606 72.593 45.5571 72.6498C45.5599 72.5633 45.5614 72.4738 45.5614 72.3814C45.0907 71.806 44.7251 70.8559 44.3346 69.841C43.7219 68.2487 43.0478 66.4968 41.8099 65.7821C40.9523 65.2869 40.3095 65.1284 39.8533 65.2877C39.8599 65.1547 39.8632 65.0175 39.8632 64.8762C39.8632 62.7065 38.2276 60.8087 36.7932 59.1443C36.2935 58.5646 35.8183 58.0131 35.4451 57.4884C32.9116 56.0257 31.3143 56.6288 31.3143 59.5542C31.3143 59.5827 31.3145 59.6112 31.3149 59.6398L29.7434 60.5514C29.6721 60.3508 29.6023 60.1405 29.5299 59.9224L29.5298 59.9222C29.0631 58.5164 28.4866 56.7802 26.7003 55.1397C24.3572 53.787 23.1317 54.042 23.1317 56.7475C23.1317 57.1124 23.1662 57.4879 23.2317 57.8679L21.6644 58.7781C20.9705 57.4781 20.3012 56.3663 18.9648 55.5948C15.9247 53.8395 14.5118 54.4929 14.5118 58.0033C14.5118 59.5156 14.9692 61.1685 15.7329 62.7006Z",
                fill: "#E2E2F0",
              }),
              (0, m.jsx)("path", {
                d: "M52.3682 83.8642L52.2572 84.7L51.4693 85.1549L14.1488 63.6079L15.7246 62.6981L52.3682 83.8642Z",
                fill: "#FEFEFF",
              }),
              (0, m.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.6572 64.3522L51.9658 86.4697C52.817 85.768 53.3281 84.5344 53.3281 82.8679C53.3281 79.0535 50.6502 74.4152 47.3468 72.5079C46.7496 72.1632 46.1729 71.9313 45.6287 71.8052C45.2375 69.2691 43.4749 66.508 41.3596 65.2867C40.9574 65.0545 40.5679 64.8927 40.1982 64.7972C39.7576 61.586 37.5261 58.0479 34.8396 56.4968C32.2686 55.0124 30.1143 55.8291 29.5476 58.2707C28.6574 56.3516 27.2187 54.6085 25.5955 53.6713C22.95 52.144 20.7948 53.3235 20.7046 56.3007C20.0234 55.6289 19.2903 55.0541 18.5264 54.6131C14.9227 52.5325 12.0013 54.2192 12.0013 58.3804C12.0013 60.3066 12.6273 62.4255 13.6572 64.3522Z",
                fill: "#E2E2F0",
              }),
            ],
          }),
        sn = () => {
          const [e, t] = (0, n.useReducer)(ln, { collaterals: [], chains: [] }),
            { data: a, isLoading: r } = (0, en.s6)(),
            { data: i, isLoading: o } = (0, Mt.T)(!1, G.PZ),
            { data: s, isLoading: l } = (0, Mt.T)(!1, G.PO),
            { data: c, isLoading: d } = (0, Mt.T)(!1, G.RR),
            u = (0, n.useMemo)(
              () =>
                i && s && c
                  ? i
                      .concat(s)
                      .concat(c)
                      .filter((e) => "stataUSDC" !== e.displaySymbol)
                  : [],
              [s, i, c]
            ),
            { data: h, isLoading: x } = (0, jt.Sb)(
              u.map((e) => ({
                id: e.tokenAddress,
                oracleId: e.oracleNodeId,
                symbol: e.symbol,
              }))
            ),
            p = i?.find((e) => "stataUSDC" === e.symbol),
            { data: g, isLoading: f } = la(p?.oracleNodeId, G.PZ),
            { data: y, isLoading: j } = St(G.PO),
            { data: b, isLoading: w } = St(G.PZ),
            { data: C, isLoading: L } = St(G.RR),
            { collaterals: M, chains: S } = e,
            k = r || x || o || l || d || j || w || L || f,
            D = (0, n.useMemo)(
              () =>
                a?.synthetixPools
                  .map(({ network: e, poolInfo: t, apr: a }) => {
                    const r = t.map(({ collateral_type: e }) => ({
                      collateralDeposited: e.total_amount_deposited,
                      tokenAddress: e.id,
                    }));
                    let n = [],
                      o = {};
                    e.id === G.PO.id
                      ? ((n = s), (o = y))
                      : e.id === G.PZ.id
                      ? ((n = i), (o = b))
                      : e.id === G.RR.id && ((n = c), (o = C));
                    const l = n?.map((e) => ({
                      ...e,
                      collateralDeposited:
                        r.find(
                          ({ tokenAddress: t }) =>
                            t.toLowerCase() === e.tokenAddress.toLowerCase()
                        )?.collateralDeposited || "0",
                    }));
                    return {
                      network: e,
                      poolInfo: t,
                      apr: a,
                      collateralDeposited: r,
                      collateralTypes: l,
                      rewardsDistributors: o,
                    };
                  })
                  .filter((e) => {
                    const { network: t, collateralTypes: a } = e;
                    if (S.length > 0 && !S.includes(t.id)) return !1;
                    const r = a?.some(
                      (e) =>
                        !M.length ||
                        !!M.find((a) =>
                          (0, Wt.Yz)(t.id, t.preset) &&
                          "SUSDC" === e.symbol.toUpperCase()
                            ? "USDC" === a.toUpperCase()
                            : a.toUpperCase() === e.symbol.toUpperCase()
                        )
                    );
                    return !!r;
                  }) || [],
              [a?.synthetixPools, s, y, i, b, c, C, S, M]
            ),
            v = (0, n.useMemo)(() => {
              if (p && g)
                return h?.concat({
                  symbol: "stataUSDC",
                  price: g?.price.toBN(),
                });
            }, [p, h, g]);
          return (0, m.jsxs)(E.k, {
            mt: 6,
            flexDirection: "column",
            children: [
              (0, m.jsx)(pe.X, {
                fontWeight: 700,
                fontSize: 24,
                children: "Pools",
              }),
              (0, m.jsxs)(E.k, {
                flexWrap: "wrap",
                gap: 4,
                justifyContent: "space-between",
                my: 6,
                children: [
                  (0, m.jsx)(Qr, { activeChains: e.chains, dispatch: t }),
                  (0, m.jsx)(Kr, {
                    activeCollaterals: e.collaterals,
                    dispatch: t,
                  }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                minW: "1200px",
                overflowX: "auto",
                direction: "column",
                gap: 4,
                children: [
                  (0, m.jsx)(U.i, { width: "100%" }),
                  (0, m.jsxs)(E.k, {
                    gap: 4,
                    px: 4,
                    py: 3,
                    children: [
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: 0.6,
                        fontWeight: 700,
                        width: "190px",
                        children: "Collateral/Network",
                      }),
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: 0.6,
                        fontWeight: 700,
                        width: "220px",
                        textAlign: "right",
                        children: "Wallet Balance",
                      }),
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: 0.6,
                        fontWeight: 700,
                        width: "189px",
                        textAlign: "right",
                        children: "Pool / Owner",
                      }),
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: 0.6,
                        fontWeight: 700,
                        width: "144px",
                        textAlign: "right",
                        children: "TVL",
                      }),
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: 0.6,
                        fontWeight: 700,
                        width: "144px",
                        textAlign: "right",
                        children: "APY/APR",
                      }),
                      (0, m.jsx)(A.x, {
                        color: "gray.600",
                        fontFamily: "heading",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: 0.6,
                        fontWeight: 700,
                        width: "121px",
                        textAlign: "right",
                        children: "Specifics",
                      }),
                      (0, m.jsx)(E.k, { minW: "159px", flex: "1" }),
                    ],
                  }),
                  k && !D?.length ? (0, m.jsx)(nn, {}) : null,
                  (S.length && !S.includes(G.PZ.id)) ||
                  (M.length && !M.includes("USDC"))
                    ? null
                    : (0, m.jsx)(an, { token: "USDC" }),
                  (S.length && !S.includes(G.PO.id)) ||
                  (M.length && !M.includes("wstETH"))
                    ? null
                    : (0, m.jsx)(an, { token: "wstETH" }),
                  D?.length > 0
                    ? D.map(
                        ({
                          network: e,
                          poolInfo: t,
                          apr: a,
                          collateralTypes: r,
                          rewardsDistributors: n,
                        }) => {
                          const i = r?.filter(
                              (e) => !M.length || M.includes(e.symbol)
                            ),
                            o = [
                              ...new Set(
                                n?.map(({ payoutToken: e }) =>
                                  e.symbol.toUpperCase()
                                )
                              ),
                            ];
                          return (0, m.jsx)(
                            Gr,
                            {
                              collateralTypes: i,
                              collateralPrices: v,
                              apr: a,
                              network: e,
                              pool: t?.[0]?.pool,
                              rewardsPayoutTokens: o,
                            },
                            e.hexId
                          );
                        }
                      )
                    : null,
                  !k &&
                    !D?.length &&
                    (0, m.jsxs)(E.k, {
                      flexDir: "column",
                      alignItems: "center",
                      children: [
                        (0, m.jsx)(on, { mb: 12, mt: 6 }),
                        (0, m.jsx)(A.x, {
                          mb: 2,
                          color: "gray.500",
                          children:
                            "No results found, select a different network or collateral",
                        }),
                        (0, m.jsx)(A.x, {
                          onClick: () => {
                            t({ type: "RESET_CHAIN" }),
                              t({ type: "RESET_COLLATERAL" });
                          },
                          cursor: "pointer",
                          fontWeight: 700,
                          color: "cyan.500",
                          children: "Clear Filters",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
      function ln(e, t) {
        switch (t.type) {
          case "ADD_COLLATERAL":
            if (t.payload?.collateral)
              return { ...e, collaterals: [t.payload.collateral] };
          case "REMOVE_COLLATERAL":
            return {
              ...e,
              collaterals: e.collaterals.filter(
                (e) => e !== t.payload?.collateral
              ),
            };
          case "ADD_CHAIN":
            if (t.payload?.chain) return { ...e, chains: [t.payload.chain] };
          case "REMOVE_CHAIN":
            return {
              ...e,
              chains: e.chains.filter((e) => e !== t.payload?.chain),
            };
          case "RESET_COLLATERAL":
            return { collaterals: [], chains: e.chains };
          case "RESET_CHAIN":
            return { collaterals: e.collaterals, chains: [] };
          default:
            return e;
        }
      }
      var cn = a(16556);
      const dn = ({ name: e, network: t, ...a }) =>
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(E.k, {
                mt: 2,
                flexWrap: "wrap",
                gap: 4,
                alignItems: "center",
                ...a,
                children: [
                  (0, m.jsx)(Et.O, {
                    isLoaded: !!e,
                    children: (0, m.jsx)(pe.X, {
                      fontWeight: 700,
                      fontSize: "3xl",
                      children: e || "Unknown Pool",
                    }),
                  }),
                  [G.RR.id, G.PO.id].includes(t?.id) &&
                    (0, m.jsx)(cn.Vp, {
                      size: "sm",
                      bg: "purple.500",
                      mr: "auto",
                      color: "white",
                      height: "fit-content",
                      children: "Borrow Interest-Free",
                    }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                mt: 2,
                children: [
                  (0, m.jsx)(G.dF, { w: "14px", h: "14px", networkId: t?.id }),
                  (0, m.jsxs)(A.x, {
                    ml: 1,
                    fontSize: "xs",
                    color: "gray.500",
                    fontFamily: "heading",
                    lineHeight: "16px",
                    children: [
                      t?.name.charAt(0).toUpperCase() + t?.name.slice(1),
                      " Network",
                    ],
                  }),
                ],
              }),
            ],
          }),
        un = ({
          collateralSymbol: e,
          maxDebt: t,
          debtChange: a,
          setDebtChange: r,
          maxClaimble: i,
        }) => {
          const { network: o } = (0, G.LN)(),
            s = (0, Wt.Yz)(o?.id, o?.preset),
            { data: l } = (0, Xt.p)(),
            c = (0, n.useMemo)(() => i.add(t), [i, t]),
            d = s ? e : l?.symbol,
            u = ca(d);
          return (0, m.jsxs)(E.k, {
            flexDirection: "column",
            children: [
              (0, m.jsxs)(A.x, {
                color: "gray./50",
                fontSize: "sm",
                fontWeight: "700",
                mb: "3",
                children: ["Claim", s ? " Profit" : "/Borrow"],
              }),
              (0, m.jsxs)(ve, {
                display: "flex",
                p: 3,
                mb: "6",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: "1",
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          fontSize: "16px",
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: d,
                              width: 16,
                              height: 16,
                            }),
                            d,
                          ],
                        }),
                      }),
                      (0, m.jsxs)(E.k, {
                        fontSize: "12px",
                        gap: "1",
                        children: [
                          (0, m.jsx)(A.x, { children: "Credit:" }),
                          (0, m.jsx)(De.$, { value: i }),
                          i?.gt(0) &&
                            (0, m.jsx)(A.x, {
                              cursor: "pointer",
                              onClick: () => {
                                i && r(i);
                              },
                              color: "cyan.500",
                              fontWeight: 700,
                              children: " Max",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexDir: "column",
                    flexGrow: 1,
                    children: [
                      (0, m.jsx)(Ae, {
                        InputProps: {
                          isRequired: !0,
                          "data-cy": "claim amount input",
                          "data-max": i.toString(),
                          type: "number",
                          min: 0,
                        },
                        value: a,
                        onChange: (e) => r(e),
                        max: c,
                        min: f.GH,
                      }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          u.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: a.abs().mul(u),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(fe.U, {
                in: a.lte(0) && i.gt(0),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  colorScheme: "green",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "Positive market performance has credited your position. Claim up to",
                        " ",
                        (0, m.jsx)(k.xu, {
                          onClick: () => {
                            i && r(i);
                          },
                          cursor: "pointer",
                          as: "span",
                          textDecoration: "underline",
                          children: (0, m.jsx)(De.$, { value: i, prefix: "$" }),
                        }),
                        " without accruing debt.",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: a.gt(0),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  status: "warning",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsx)(A.x, {
                      children:
                        "Assets will be available to withdraw 24 hours after your last interaction with this position.",
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: a.lte(0) && !s && t.gt(0),
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  colorScheme: "blue",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You can take an interest-free loan up to  ",
                        (0, m.jsx)(k.xu, {
                          onClick: () => {
                            t && r(t.add(i));
                          },
                          cursor: "pointer",
                          as: "span",
                          textDecoration: "underline",
                          children: (0, m.jsx)(De.$, { value: t, prefix: "$" }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(fe.U, {
                in: !a.gt(c) && a.gt(0) && a.gt(i) && !s,
                animateOpacity: !0,
                children: (0, m.jsxs)(ye.b, {
                  colorScheme: "info",
                  mb: "6",
                  borderRadius: "6px",
                  children: [
                    (0, m.jsx)(je.z, {}),
                    (0, m.jsxs)(A.x, {
                      children: [
                        "You are about to take a ",
                        (0, m.jsx)(De.$, { value: a.sub(i), prefix: "$" }),
                        " ",
                        "interest-free loan",
                      ],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(I.z, {
                isDisabled: a.lte(0) || a.gt(c),
                "data-cy": "claim submit",
                type: "submit",
                children: a.lte(0)
                  ? "Enter Amount"
                  : a.gt(i) && !s
                  ? "Borrow"
                  : "Claim Profit",
              }),
            ],
          });
        },
        hn = ({ liquidityPosition: e }) => {
          const { network: t } = (0, G.LN)(),
            {
              debtChange: a,
              collateralChange: r,
              setDebtChange: i,
            } = (0, n.useContext)(Ia.n),
            { collateralSymbol: o } = (0, F.UO)(),
            s = (0, n.useMemo)(
              () =>
                !e || e?.debt.gte(0)
                  ? f.GH
                  : (0, Ce.wei)(e.debt.abs().toBN().mul(99).div(100)),
              [e]
            ),
            { data: l } = (0, Mt.t)(o),
            { maxDebt: c } = Ta({
              issuanceRatioD18: l?.issuanceRatioD18,
              collateralAmount: e?.collateralAmount,
              collateralPrice: e?.collateralPrice,
              debt: e?.debt,
              collateralChange: r,
              debtChange: a,
            });
          return (0, m.jsx)(un, {
            setDebtChange: i,
            debtChange: a,
            maxClaimble: s,
            maxDebt: (0, Wt.Yz)(t?.id, t?.preset) ? f.GH : c.mul(99).div(100),
            collateralSymbol: o,
          });
        },
        xn = () => {
          const [e, t] = (0, n.useState)(!1),
            { activeWallet: a, connect: r } = (0, G.Os)(),
            { accountId: i } = (0, ue.UO)(),
            { data: o, isPending: s, isFetching: l } = oe();
          return (
            (0, n.useEffect)(() => {
              setTimeout(() => {
                t(!0);
              }, 200);
            }, []),
            e
              ? a
                ? i
                  ? l || s || !o?.length || o.find((e) => e === i)
                    ? null
                    : (0, m.jsxs)(ye.b, {
                        colorScheme: "blue",
                        my: "4",
                        borderRadius: "6px",
                        children: [
                          (0, m.jsx)(je.z, {}),
                          (0, m.jsx)(E.k, {
                            children: (0, m.jsxs)(pe.X, {
                              fontSize: "16px",
                              children: [
                                "You are currently watching Account #",
                                i,
                              ],
                            }),
                          }),
                        ],
                      })
                  : null
                : (0, m.jsxs)(ye.b, {
                    colorScheme: "blue",
                    my: "4",
                    borderRadius: "6px",
                    children: [
                      (0, m.jsx)(je.z, {}),
                      (0, m.jsxs)(E.k, {
                        flex: 1,
                        gap: 4,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                          (0, m.jsxs)("div", {
                            children: [
                              i &&
                                (0, m.jsxs)(pe.X, {
                                  fontSize: "16px",
                                  children: [
                                    "You are currently watching Account #",
                                    i,
                                  ],
                                }),
                              (0, m.jsx)(pe.X, {
                                fontSize: "14px",
                                children:
                                  "Please connect your wallet to open, manage or view positions.",
                              }),
                            ],
                          }),
                          (0, m.jsx)(I.z, {
                            onClick: () => r(),
                            children: "Connect Wallet",
                          }),
                        ],
                      }),
                    ],
                  })
              : null
          );
        };
      function pn() {
        const { network: e } = (0, G.LN)();
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)(nt.q, {
              children: [
                (0, m.jsx)("title", { children: "Synthetix Liquidity V3" }),
                (0, m.jsx)("meta", {
                  name: "description",
                  content: "Synthetix V3 - Dashboard",
                }),
              ],
            }),
            (0, m.jsxs)(E.k, {
              pt: { base: 2, sm: 10 },
              flexDir: "column",
              mb: 16,
              children: [
                e &&
                  [G.RR.id, G.NM.id].includes(e.id) &&
                  (0, m.jsx)(Ar, { network: e, type: "alert" }),
                (0, m.jsx)(pe.X, {
                  color: "gray.50",
                  fontSize: "1.5rem",
                  children: "Dashboard",
                }),
                (0, m.jsx)(xn, {}),
                (0, m.jsx)(na, {}),
                (0, m.jsx)(Da, {}),
              ],
            }),
          ],
        });
      }
      function mn() {
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)(nt.q, {
              children: [
                (0, m.jsx)("title", { children: "Synthetix Liquidity V3" }),
                (0, m.jsx)("meta", {
                  name: "description",
                  content: "Synthetix V3 - Dashboard",
                }),
              ],
            }),
            (0, m.jsxs)(E.k, {
              overflow: "auto",
              flexDir: "column",
              mb: 16,
              children: [
                (0, m.jsx)(pe.X, {
                  mt: [6, 10],
                  color: "gray.50",
                  maxWidth: "20rem",
                  fontSize: ["2rem", "3rem"],
                  lineHeight: "120%",
                  children: "The Liquidity Layer of DeFi",
                }),
                (0, m.jsx)(A.x, {
                  color: "gray.500",
                  fontSize: "1rem",
                  lineHeight: 6,
                  fontFamily: "heading",
                  mt: "1rem",
                  children:
                    "Provide liquidity for the next generation of permissionless protocols",
                }),
                (0, m.jsx)(sn, {}),
              ],
            }),
          ],
        });
      }
      const gn = At.z.string().transform((e) => (0, Ce.wei)(e, 18, !0)),
        fn = At.z.string().transform((e) => (0, Ce.wei)(e, 18, !0)),
        yn = (e, t) => t.add(e).mul(-1),
        jn = At.z
          .object({
            id: At.z.string(),
            usd_deposited: fn,
            usd_withdrawn: fn,
            net_issuance: fn,
            reported_debt: fn,
            updated_at: At.z.string(),
            updates_in_period: At.z.string(),
          })
          .transform((e) => ({
            ...e,
            pnl: yn(e.net_issuance, e.reported_debt),
          })),
        bn = At.z
          .object({
            id: At.z.string(),
            address: At.z.string(),
            usd_deposited: fn,
            usd_withdrawn: fn,
            net_issuance: fn,
            reported_debt: fn,
            updated_at: At.z.string(),
            market_snapshots_by_week: At.z.array(jn),
          })
          .transform((e) => ({
            ...e,
            pnl: yn(e.net_issuance, e.reported_debt),
          })),
        wn = At.z.object({
          id: At.z.string(),
          market: bn,
          weight: gn,
          max_debt_share_value: fn,
        }),
        Cn = At.z.object({
          id: At.z.string(),
          total_distributed: At.z.string(),
          rewards_distributions: At.z
            .array(
              At.z.object({
                amount: At.z.string(),
                duration: At.z.string(),
                created_at: At.z.string(),
              })
            )
            .default([]),
        }),
        Ln = At.z.object({
          id: At.z.string(),
          name: At.z
            .union([At.z.string(), At.z.null()])
            .transform((e) => e || "Unnamed Pool"),
          total_weight: At.z.union([At.z.null(), gn]),
          configurations: At.z.array(wn),
          registered_distributors: At.z.array(Cn).default([]),
        }),
        Mn = At.z.object({
          data: At.z.object({ pool: At.z.union([Ln, At.z.null()]) }),
        }),
        Sn = ((e) => e[0])`
  query pool($id: String) {
    pool(id: $id) {
      id
      name
      registered_distributors(where: { isActive: true }) {
        id
        total_distributed
        rewards_distributions(orderBy: created_at, orderDirection: desc) {
          amount
          duration
          created_at
        }
      }
      total_weight
      configurations {
        id
        weight
        max_debt_share_value
        market {
          id
          address
          usd_deposited
          usd_withdrawn
          net_issuance
          reported_debt
          updated_at
          market_snapshots_by_week(first: 2, orderBy: updated_at, orderDirection: desc) {
            id
            usd_deposited
            usd_withdrawn
            net_issuance
            reported_debt
            updated_at
            updates_in_period
          }
        }
      }
    }
  }
`,
        An = (e, t) => {
          const { network: a } = (0, G.LN)(),
            r = t || a?.name;
          return (0, y.useQuery)({
            enabled: Boolean(e && parseInt(e) > 0 && r),
            queryKey: [`${a?.id}-${a?.preset}`, "PoolData", { pool: e }],
            queryFn: async () => {
              if (!e || !r) throw Error("No poolId or chainName");
              const t = await (async (e, t) => {
                const a = (0, f.Q4)(e),
                  r = await fetch(a, {
                    method: "POST",
                    body: JSON.stringify({ query: Sn, variables: { id: t } }),
                  }),
                  n = await r.json();
                if (n.errors) {
                  const { message: e } = n.errors[0];
                  throw new Error(e);
                }
                return Mn.parse(n);
              })(r, e);
              if (!t.data.pool) throw Error(`Pool ${e} not found`);
              return t.data.pool;
            },
          });
        };
      var kn = a(10896),
        Dn = a(61269);
      function vn(e) {
        const { network: t } = (0, G.LN)(),
          a = e || t;
        return (0, y.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "PythFeeds"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw new Error("OMFG");
            return (0, Dn.p)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var In = a(89709);
      function Tn(e) {
        const { network: t } = (0, G.LN)(),
          a = e || t;
        return (0, y.useQuery)({
          queryKey: [`${a?.id}-${a?.preset}`, "PythVerifier"],
          enabled: Boolean(a),
          queryFn: async function () {
            if (!a) throw new Error("OMFG");
            return (0, In.N)(a.id, a.preset);
          },
          staleTime: 1 / 0,
          throwOnError: !1,
        });
      }
      var Fn = a(25130),
        Nn = a.n(Fn),
        En = a(49494),
        zn = a(21849);
      const Pn = Nn()("snx:fetchPositionDebt");
      async function On({
        provider: e,
        CoreProxy: t,
        accountId: a,
        poolId: r,
        collateralTypeTokenAddress: n,
      }) {
        const i = new ie.CH(t.address, t.abi, e),
          o = await i.callStatic.getPositionDebt(a, r, n);
        return Pn("positionDebt: %O", o), o;
      }
      const Hn = Nn()("snx:fetchPositionDebtWithPriceUpdate");
      async function $n({
        provider: e,
        CoreProxy: t,
        Multicall3: a,
        accountId: r,
        poolId: n,
        collateralTypeTokenAddress: i,
        priceUpdateTxn: o,
      }) {
        const s = new Ze.vU(t.abi),
          l = new Ze.vU(a.abi);
        await new Promise((e) => setTimeout(e, 500));
        const c = {
            target: t.address,
            callData: s.encodeFunctionData("getPositionDebt", [r, n, i]),
            value: 0,
            requireSuccess: !0,
          },
          d = await e.call({
            to: a.address,
            data: l.encodeFunctionData("aggregate3Value", [[o, c]]),
            value: o.value,
          });
        if ((Hn("response: %O", d), d)) {
          const e = l.decodeFunctionResult("aggregate3Value", d);
          if ((Hn("decodedMulticall: %O", e), e?.returnData?.[1]?.returnData)) {
            const t = e.returnData[1].returnData;
            Hn("getPositionDebtTxnData: %O", t);
            const a = s.decodeFunctionResult("getPositionDebt", t);
            return Hn("positionDebt: %O", a), a.debt;
          }
          throw (
            (console.error({ decodedMulticall: e }),
            new Error("Unexpected multicall response"))
          );
        }
        throw new Error("Empty multicall response");
      }
      var Rn = a(17123),
        Un = a(88210);
      async function Bn({ PythVerfier: e, pythFeeds: t }) {
        if (!t.length)
          return {
            target: e.address,
            callData: Un.R,
            value: Lt.O$.from(0),
            requireSuccess: !1,
          };
        const a = new Ze.vU(e.abi),
          r = new Rn.O(f.kw),
          n = await r.getPriceFeedsUpdateData(t);
        return {
          target: e.address,
          callData: a.encodeFunctionData("updatePriceFeeds", [n]),
          value: Lt.O$.from(t.length),
          requireSuccess: !1,
        };
      }
      const Wn = Nn()("snx:fetchAccountCollateral");
      const Zn = Nn()("snx:fetchAccountCollateralWithPriceUpdate");
      const qn = $e.o;
      function Vn() {
        const { network: e } = (0, G.LN)();
        return { chainId: e?.id, preset: e?.preset };
      }
      const Gn = Nn()("snx:usePriceUpdateTxn");
      function _n() {
        const { chainId: e, preset: t } = Vn(),
          a = qn(),
          { data: r } = vn(),
          { data: n } = Tn(),
          i = (0, G.yL)();
        return (0, y.useQuery)({
          enabled: Boolean(e && t && i && r && n),
          queryKey: [e, t, "PriceUpdateTxn"],
          queryFn: async () => {
            if (!(e && t && i && r && n)) throw "OMFG";
            Gn({ chainId: e, preset: t, priceIds: r, PythVerfier: n });
            const a = await Bn({ pythFeeds: r, PythVerfier: n });
            return Gn("priceUpdateTxn: %O", a), a;
          },
          throwOnError: (e) => (a(e), !1),
          staleTime: 6e5,
          refetchInterval: 6e5,
        });
      }
      const Qn = Nn()("snx:useAccountCollateral");
      function Yn({
        provider: e,
        accountId: t,
        collateralTypeTokenAddress: a,
      }) {
        const { chainId: r, preset: n } = Vn(),
          i = qn(),
          { data: o } = (0, te.a)(),
          { data: s } = re(),
          { data: l } = _n();
        return (0, y.useQuery)({
          enabled: Boolean(
            r && n && e && o?.address && s?.address && t && a && l
          ),
          queryKey: [
            r,
            n,
            "AccountCollateral",
            { CoreProxy: o?.address, Multicall: s?.address },
            {
              accountId: t ? Lt.O$.from(t).toHexString() : void 0,
              collateralTypeTokenAddress: a,
            },
          ],
          queryFn: async () => {
            if (!(r && n && e && o?.address && s?.address && t && a && l))
              throw "OMFG";
            return (
              Qn({
                chainId: r,
                preset: n,
                CoreProxyContract: o,
                MulticallContract: s,
                accountId: t,
                collateralTypeTokenAddress: a,
                priceUpdateTxn: l,
              }),
              l.value
                ? (Qn("-> fetchAccountCollateralWithPriceUpdate"),
                  (async function ({
                    provider: e,
                    CoreProxyContract: t,
                    MulticallContract: a,
                    accountId: r,
                    collateralTypeTokenAddress: n,
                    priceUpdateTxn: i,
                  }) {
                    const o = new Ze.vU(t.abi),
                      s = new Ze.vU(a.abi),
                      l = {
                        target: t.address,
                        callData: o.encodeFunctionData("getAccountCollateral", [
                          r,
                          n,
                        ]),
                        value: 0,
                        requireSuccess: !0,
                      },
                      c = await e.call({
                        to: a.address,
                        data: s.encodeFunctionData("aggregate3Value", [[i, l]]),
                        value: i.value,
                      });
                    if ((Zn("response: %O", c), c)) {
                      const e = s.decodeFunctionResult("aggregate3Value", c);
                      if (
                        (Zn("decodedMulticall: %O", e),
                        e?.returnData?.[1]?.returnData)
                      ) {
                        const t = e.returnData[1].returnData;
                        Zn("getAccountCollateralTxnData: %O", t);
                        const a = o.decodeFunctionResult(
                          "getAccountCollateral",
                          t
                        );
                        return (
                          Zn("accountCollateral: %O", a),
                          {
                            totalAssigned: a.totalAssigned,
                            totalDeposited: a.totalDeposited,
                            totalLocked: a.totalLocked,
                          }
                        );
                      }
                      throw (
                        (console.error({ decodedMulticall: e }),
                        new Error("Unexpected multicall response"))
                      );
                    }
                    throw new Error("Empty multicall response");
                  })({
                    provider: e,
                    CoreProxyContract: o,
                    MulticallContract: s,
                    accountId: t,
                    collateralTypeTokenAddress: a,
                    priceUpdateTxn: l,
                  }))
                : (Qn("-> fetchAccountCollateral"),
                  (async function ({
                    provider: e,
                    CoreProxyContract: t,
                    accountId: a,
                    collateralTypeTokenAddress: r,
                  }) {
                    const n = new ie.CH(t.address, t.abi, e),
                      i = await n.getAccountCollateral(a, r);
                    return (
                      Wn("accountCollateral: %O", i),
                      {
                        totalAssigned: i.totalAssigned,
                        totalDeposited: i.totalDeposited,
                        totalLocked: i.totalLocked,
                      }
                    );
                  })({
                    provider: e,
                    CoreProxyContract: o,
                    accountId: t,
                    collateralTypeTokenAddress: a,
                  }))
            );
          },
          throwOnError: (e) => (i(e), !1),
          select: (e) => ({
            totalAssigned: Lt.O$.from(e.totalAssigned),
            totalDeposited: Lt.O$.from(e.totalDeposited),
            totalLocked: Lt.O$.from(e.totalLocked),
          }),
          retry: 5,
          retryDelay: (e) => 2 ** e * 1e3,
        });
      }
      const Kn = Nn()("snx:usePositionDebt");
      function Xn({
        provider: e,
        accountId: t,
        poolId: a,
        collateralTypeTokenAddress: r,
      }) {
        const { chainId: n, preset: i } = Vn(),
          o = qn(),
          { data: s } = _n(),
          { data: l } = (0, te.a)(),
          { data: c } = re();
        return (0, y.useQuery)({
          enabled: Boolean(
            n && i && e && l?.address && c?.address && t && a && r && s
          ),
          queryKey: [
            n,
            i,
            "PositionDebt",
            { CoreProxy: l?.address, Multicall: c?.address },
            {
              accountId: t ? Lt.O$.from(t).toHexString() : void 0,
              collateralTypeTokenAddress: r,
            },
          ],
          queryFn: async () => {
            if (!(n && i && e && l?.address && c?.address && t && a && r && s))
              throw "OMFG";
            return (
              Kn({
                chainId: n,
                preset: i,
                CoreProxyContract: l,
                MulticallContract: c,
                accountId: t,
                poolId: a,
                collateralTypeTokenAddress: r,
                priceUpdateTxn: s,
              }),
              s.value
                ? (Kn("-> fetchPositionDebtWithPriceUpdate"),
                  $n({
                    provider: e,
                    CoreProxy: l,
                    Multicall3: c,
                    accountId: t,
                    poolId: a,
                    collateralTypeTokenAddress: r,
                    priceUpdateTxn: s,
                  }))
                : (Kn("-> fetchPositionDebt"),
                  On({
                    provider: e,
                    CoreProxy: l,
                    accountId: t,
                    poolId: a,
                    collateralTypeTokenAddress: r,
                  }))
            );
          },
          throwOnError: (e) => (o(e), !1),
          select: (e) => Lt.O$.from(e),
          retry: 5,
          retryDelay: (e) => 2 ** e * 1e3,
        });
      }
      const Jn = Nn()("snx:ClosePositionOneStep");
      function ei({ onClose: e, onBack: t }) {
        const a = (0, ue.UO)(),
          { data: r } = (0, Mt.t)(a.collateralSymbol),
          { setCollateralChange: i, setDebtChange: o } = n.useContext(Ia.n),
          s = (0, ze.p)({ isClosable: !0, duration: 9e3 }),
          [l, c] = n.useState({ step: 0, status: "idle" }),
          d = (0, y.useQueryClient)(),
          u = (0, $e.o)(),
          { data: h } = (0, te.a)(),
          { data: x } = re(),
          { data: p } = ee(),
          { data: g } = (0, kn.b)(),
          { data: j } = Tn(),
          { data: w } = vn(),
          { data: C } = (0, Xt.p)(),
          { data: L, refetch: M } = (0, jt.Y_)(),
          { gasSpeed: S } = (0, b.jU)(),
          { network: k } = (0, G.LN)(),
          D = (0, G.mx)(),
          T = (0, G.yL)(),
          { data: F } = Xn({
            provider: T,
            accountId: a.accountId,
            poolId: a.poolId,
            collateralTypeTokenAddress: r?.tokenAddress,
          }),
          { data: N } = Yn({
            provider: T,
            accountId: a.accountId,
            collateralTypeTokenAddress: r?.tokenAddress,
          }),
          { mutate: z } = (0, y.useMutation)({
            mutationFn: async function () {
              if (
                (Jn("params: %O", a),
                Jn("collateralType: %O", r),
                Jn("accountCollateral: %O", N),
                Jn("positionDebt: %O", F),
                c({ step: 1, status: "pending" }),
                !(
                  k &&
                  T &&
                  D &&
                  h &&
                  x &&
                  p &&
                  g &&
                  j &&
                  w &&
                  a.poolId &&
                  a.accountId &&
                  C?.address &&
                  r?.tokenAddress &&
                  F
                ))
              )
                throw new Error("Not ready");
              const e = new ie.CH(g.address, g.abi, D),
                t = new ie.CH(p.address, p.abi, D),
                n = new ie.CH(
                  C?.address,
                  [
                    "function approve(address spender, uint256 amount) returns (bool)",
                  ],
                  D
                ),
                i = await Bn({ PythVerfier: j, pythFeeds: w });
              Jn("freshPriceUpdateTxn: %O", i);
              const o = i.value
                ? await $n({
                    provider: T,
                    CoreProxy: h,
                    Multicall3: x,
                    accountId: a.accountId,
                    poolId: a.poolId,
                    collateralTypeTokenAddress: r.tokenAddress,
                    priceUpdateTxn: i,
                  })
                : await On({
                    provider: T,
                    CoreProxy: h,
                    accountId: a.accountId,
                    poolId: a.poolId,
                    collateralTypeTokenAddress: r.tokenAddress,
                  });
              Jn("freshPositionDebt: %O", o);
              const s = o.lt(1) ? En.parseEther("1.00") : o.mul(120).div(100);
              Jn("adjustedAllowance: %O", s);
              const l = t.populateTransaction.approve(g.address, a.accountId),
                d = n.populateTransaction.approve(g.address, s),
                u = e.populateTransaction.closePosition(
                  h.address,
                  p.address,
                  a.accountId,
                  a.poolId,
                  r.tokenAddress
                ),
                m = Promise.all([l, d, u]),
                [f, y] = await Promise.all([m, (0, Ue.o)({ provider: T })]);
              L && f.unshift(L);
              const b = await D.getAddress(),
                { multicallTxn: M, gasLimit: A } = await (0, Ct.dI)(
                  k,
                  f,
                  "useClosePosition",
                  b
                ),
                v = (0, Be.F)({ gasLimit: A, gasPrices: y, gasSpeed: S }),
                I = await D.sendTransaction({ ...M, ...v });
              console.log("[closePosition] txn hash", I.hash), Jn("txn %O", I);
              const E = await I.wait();
              Jn("receipt %O", E);
            },
            onSuccess: async () => {
              c({ step: 1, status: "success" }),
                i(f.GH),
                o(f.GH),
                d.invalidateQueries({
                  queryKey: [`${k?.id}-${k?.preset}`, "LiquidityPosition"],
                }),
                d.invalidateQueries({
                  queryKey: [`${k?.id}-${k?.preset}`, "LiquidityPositions"],
                }),
                d.invalidateQueries({
                  queryKey: [`${k?.id}-${k?.preset}`, "Allowance"],
                }),
                d.invalidateQueries({
                  queryKey: [
                    `${k?.id}-${k?.preset}`,
                    "AccountSpecificCollateral",
                  ],
                }),
                d.invalidateQueries({
                  queryKey: [`${k?.id}-${k?.preset}`, "TokenBalance"],
                }),
                d.invalidateQueries({
                  queryKey: [
                    `${k?.id}-${k?.preset}`,
                    "AccountCollateralUnlockDate",
                  ],
                }),
                d.invalidateQueries({
                  queryKey: [k?.id, k?.preset, "PriceUpdateTxn"],
                }),
                d.invalidateQueries({
                  queryKey: [k?.id, k?.preset, "PositionDebt"],
                }),
                d.invalidateQueries({
                  queryKey: [k?.id, k?.preset, "AccountCollateral"],
                }),
                d.invalidateQueries({
                  queryKey: [k?.id, k?.preset, "AccountAvailableCollateral"],
                }),
                M();
            },
            onError: (e) => {
              c({ step: 1, status: "error" });
              const t = u(e);
              throw (
                (t && console.error(new Error(t.name), t),
                s.closeAll(),
                s({
                  title: "Transaction failed",
                  variant: "left-accent",
                  description: t
                    ? (0, m.jsx)(Pe.M, { contractError: t })
                    : "Please try again.",
                  status: "error",
                  duration: 36e5,
                }),
                Error("Transaction failed", { cause: e }))
              );
            },
          });
        return "success" === l.status
          ? (0, m.jsx)(zn.s, {
              onClose: e,
              title: "Position successfully Closed",
              subline: (0, m.jsxs)(m.Fragment, {
                children: [
                  "Your position has been successfully closed, read more about it in the",
                  " ",
                  (0, m.jsx)(v.r, {
                    href: "https://docs.synthetix.io/v/synthetix-v3-user-documentation",
                    target: "_blank",
                    color: "cyan.500",
                    children: "Synthetix V3 Documentation",
                  }),
                ],
              }),
              alertText: (0, m.jsx)(m.Fragment, {
                children: "Position successfully Closed",
              }),
            })
          : (0, m.jsxs)(E.k, {
              flexDirection: "column",
              "data-cy": "close position multistep",
              children: [
                (0, m.jsxs)(A.x, {
                  color: "gray.50",
                  fontSize: "20px",
                  fontWeight: 700,
                  children: [
                    (0, m.jsx)(mr.R, { cursor: "pointer", onClick: t, mr: 2 }),
                    "Close Position",
                  ],
                }),
                (0, m.jsx)(U.i, { mt: 6, bg: "gray.900" }),
                (0, m.jsx)(Oe.P0, {
                  step: 1,
                  title: "Close position",
                  subtitle: (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(A.x, {
                        children: "Approve close position on behalf",
                      }),
                      F && F.gt(0)
                        ? (0, m.jsx)(A.x, {
                            children: (0, m.jsx)(De.$, {
                              prefix: "Repay ",
                              value: (0, Ce.wei)(F),
                              suffix: ` ${C ? C.symbol : ""} of debt`,
                            }),
                          })
                        : null,
                      F && F.lt(0)
                        ? (0, m.jsx)(A.x, {
                            children: (0, m.jsx)(De.$, {
                              prefix: "Claim ",
                              value: (0, Ce.wei)(F.abs()),
                              suffix: ` ${C ? C.symbol : ""}`,
                            }),
                          })
                        : null,
                      (0, m.jsx)(De.$, {
                        prefix: "Unlock ",
                        value: N ? (0, Ce.wei)(N.totalAssigned) : f.GH,
                        suffix: ` ${r ? r.symbol : ""} from the pool`,
                      }),
                    ],
                  }),
                  status: {
                    failed: "error" === l.status,
                    success: "success" === l.status,
                    loading: "pending" === l.status,
                  },
                }),
                (0, m.jsxs)(I.z, {
                  "data-cy": "close position confirm button",
                  isLoading: "pending" === l.status,
                  isDisabled: !(N && N.totalAssigned.gt(0)),
                  onClick: () => z(),
                  mt: "6",
                  children: [
                    "error" === l.status ? "Retry" : null,
                    "pending" === l.status ? "Processing..." : null,
                    "idle" === l.status ? "Execute Transaction" : null,
                  ],
                }),
              ],
            });
      }
      var ti = a(86689),
        ai = a(18498),
        ri = a(70332),
        ni = a(42736);
      const ii = ({
        collateralType: e,
        liquidityPosition: t,
        poolId: a,
        onClose: r,
        onBack: i,
      }) => {
        const [o, s] = (0, n.useState)([]),
          { setCollateralChange: l, setDebtChange: c } = (0, n.useContext)(
            Ia.n
          ),
          { data: d } = (0, Xt.p)(),
          { data: u } = (0, ke.mM)(d?.address),
          { data: h } = (0, te.a)(),
          { network: x } = (0, G.LN)(),
          p = (0, ze.p)({ isClosable: !0, duration: 9e3 }),
          g = (0, Wt.Yz)(x?.id, x?.preset),
          j = g ? e.symbol : d?.symbol,
          b = e.displaySymbol,
          [w, C] = (0, n.useState)({ step: 0, status: "idle" }),
          { data: L } = (0, Vt.H)((0, Wt.$l)(t?.accountCollateral.symbol)),
          M = (0, Wt.Yz)(x?.id, x?.preset) ? L : d?.address,
          S = (0, y.useQueryClient)(),
          k = t?.usdCollateral.availableCollateral || f.GH,
          D = (t?.debt || f.GH).abs().sub(k),
          T = (0, $e.o)(),
          { approve: F, requireApproval: N } = (0, He.y)({
            contractAddress: M,
            amount: D.gt(0) ? D.toBN() : "0",
            spender: h?.address,
          }),
          { exec: z } = (0, ai.f)({
            accountId: t?.accountId,
            poolId: a,
            collateralTypeAddress: e?.tokenAddress,
            debtChange: t?.debt.mul(-1) || f.GH,
            availableUSDCollateral: k,
            balance: u,
          }),
          { exec: P } = (0, ri.V)({
            accountId: t?.accountId,
            poolId: a,
            collateralTypeAddress: t?.tokenAddress,
            collateralChange: t?.collateralAmount.mul(-1) || f.GH,
            currentCollateral: t?.collateralAmount || f.GH,
          }),
          { data: O } = (0, Fr.W)(),
          { data: H } = (0, kn.b)(),
          {
            approve: $,
            requireApproval: R,
            isLoading: B,
          } = (0, He.y)({
            contractAddress: L,
            amount: (0, _.vz)(t?.debt.abs().toString(), 6).mul(110).div(100),
            spender: O?.address,
          }),
          { exec: W } = (0, ni.G)({
            accountId: t?.accountId,
            poolId: a,
            collateralTypeAddress: t?.tokenAddress,
            collateralChange: t?.collateralAmount.mul(-1) || f.GH,
            currentCollateral: t?.collateralAmount || f.GH,
            liquidityPosition: t,
          }),
          { exec: Z } = (0, ti.h)({
            accountId: t?.accountId,
            poolId: a,
            collateralTypeAddress: e?.tokenAddress,
            debtChange: t?.debt.mul(-1) || f.GH,
          }),
          q = (0, n.useCallback)(() => {
            const e = [];
            return (
              g
                ? (t?.debt.gt(-1e-5) &&
                    R &&
                    e.push({ title: `Approve ${j} transfer`, cb: () => $(!1) }),
                  e.push({
                    title: "Unlock collateral",
                    subtitle: (0, m.jsx)(De.$, {
                      value: t?.collateralAmount || f.GH,
                      suffix: ` ${b} will be unlocked from the pool.`,
                    }),
                    cb: () => W(),
                  }),
                  t?.debt.lt(0) &&
                    e.push({
                      title: "Claim",
                      subtitle: (0, m.jsx)(De.$, {
                        prefix: "Claim ",
                        value: t?.debt.abs(),
                        suffix: ` ${j}`,
                      }),
                      cb: () => Z(),
                    }))
                : (t?.debt.gt(0)
                    ? (N &&
                        e.push({
                          title: `Approve ${d?.symbol} transfer`,
                          cb: () => F(!1),
                        }),
                      e.push({
                        title: "Repay",
                        subtitle: (0, m.jsx)(De.$, {
                          prefix: "Repay ",
                          value: t?.debt.abs(),
                          suffix: ` ${d?.symbol}`,
                        }),
                        cb: () => z(),
                      }))
                    : t?.debt.lt(0) &&
                      e.push({
                        title: "Claim",
                        subtitle: (0, m.jsx)(De.$, {
                          prefix: "Claim ",
                          value: t?.debt.abs(),
                          suffix: ` ${d?.symbol}`,
                        }),
                        cb: () => Z(),
                      }),
                  e.push({
                    title: "Unlock collateral",
                    subtitle: (0, m.jsx)(De.$, {
                      value: t?.collateralAmount || f.GH,
                      suffix: ` ${b} will be unlocked from the pool.`,
                    }),
                    cb: () => P(),
                  })),
              e
            );
          }, [
            H,
            F,
            $,
            b,
            j,
            Z,
            z,
            g,
            t?.collateralAmount,
            t?.debt,
            N,
            R,
            d?.symbol,
            P,
            W,
          ]);
        (0, n.useEffect)(() => {
          o.length || B || (C({ step: 0, status: "idle" }), s(q()));
        }, [q, B, o.length]);
        const V = w.step >= o.length,
          Q = (0, n.useCallback)(async () => {
            try {
              let e = w.step > -1 ? w.step : 0;
              for (; e < o.length; e++)
                C({ step: e, status: "pending" }), await o[e].cb();
              C({ step: o.length, status: "success" }),
                S.invalidateQueries({
                  queryKey: [`${x?.id}-${x?.preset}`, "LiquidityPosition"],
                }),
                S.invalidateQueries({
                  queryKey: [`${x?.id}-${x?.preset}`, "LiquidityPositions"],
                }),
                S.invalidateQueries({
                  queryKey: [`${x?.id}-${x?.preset}`, "Allowance"],
                }),
                S.invalidateQueries({
                  queryKey: [
                    `${x?.id}-${x?.preset}`,
                    "AccountSpecificCollateral",
                  ],
                }),
                S.invalidateQueries({
                  queryKey: [`${x?.id}-${x?.preset}`, "TokenBalance"],
                }),
                S.invalidateQueries({
                  queryKey: [
                    `${x?.id}-${x?.preset}`,
                    "AccountCollateralUnlockDate",
                  ],
                }),
                l(f.GH),
                c(f.GH);
            } catch (e) {
              C((e) => ({ step: e.step, status: "error" }));
              const t = T(e);
              throw (
                (t && console.error(new Error(t.name), t),
                p.closeAll(),
                p({
                  title: "Transaction failed",
                  variant: "left-accent",
                  description: t
                    ? (0, m.jsx)(Pe.M, { contractError: t })
                    : "Please try again.",
                  status: "error",
                  duration: 36e5,
                }),
                Error("Transaction failed", { cause: e }))
              );
            }
          }, [w.step, o, S, x?.id, x?.preset, l, c, T, p]);
        return V
          ? (0, m.jsx)(zn.s, {
              onClose: r,
              title: "Position successfully Closed",
              subline: (0, m.jsxs)(m.Fragment, {
                children: [
                  "Your position has been successfully closed, read more about it in the",
                  " ",
                  (0, m.jsx)(v.r, {
                    href: "https://docs.synthetix.io/v/synthetix-v3-user-documentation",
                    target: "_blank",
                    color: "cyan.500",
                    children: "Synthetix V3 Documentation",
                  }),
                ],
              }),
              alertText: (0, m.jsx)(m.Fragment, {
                children: "Position successfully Closed",
              }),
            })
          : (0, m.jsxs)(E.k, {
              flexDirection: "column",
              "data-cy": "close position multistep",
              children: [
                (0, m.jsxs)(A.x, {
                  color: "gray.50",
                  fontSize: "20px",
                  fontWeight: 700,
                  children: [
                    (0, m.jsx)(mr.R, { cursor: "pointer", onClick: i, mr: 2 }),
                    "Close Position",
                  ],
                }),
                (0, m.jsx)(U.i, { mt: 6, bg: "gray.900" }),
                B &&
                  !o.length &&
                  (0, m.jsx)(Et.O, { width: "100%", height: "78px", mt: "6" }),
                o.map((e, t) =>
                  (0, m.jsx)(
                    Oe.P0,
                    {
                      step: t + 1,
                      title: e.title,
                      subtitle: e.subtitle,
                      status: {
                        failed: w.step === t && "error" === w.status,
                        success: w.step > t,
                        loading: w.step === t && "pending" === w.status,
                      },
                    },
                    t
                  )
                ),
                (0, m.jsx)(I.z, {
                  "data-cy": "close position confirm button",
                  isLoading: "pending" === w.status,
                  onClick: Q,
                  mt: "6",
                  children: (() => {
                    switch (!0) {
                      case "error" === w.status:
                        return "Retry";
                      case "pending" === w.status:
                        return "Processing...";
                      default:
                        return "Execute Transaction";
                    }
                  })(),
                }),
              ],
            });
      };
      const oi = Nn()("snx:useAccountAvailableCollateral");
      function si({
        provider: e,
        accountId: t,
        collateralTypeTokenAddress: a,
      }) {
        const { chainId: r, preset: n } = Vn(),
          i = qn(),
          { data: o } = (0, te.a)();
        return (0, y.useQuery)({
          enabled: Boolean(r && n && e && o?.address && t && a),
          queryKey: [
            r,
            n,
            "AccountAvailableCollateral",
            { CoreProxy: o?.address },
            {
              accountId: t ? Lt.O$.from(t).toHexString() : void 0,
              collateralTypeTokenAddress: a,
            },
          ],
          queryFn: async () => {
            if (!(r && n && e && o?.address && t && a)) throw "OMFG";
            oi({
              chainId: r,
              preset: n,
              CoreProxy: o,
              accountId: t,
              collateralTypeTokenAddress: a,
            });
            const i = await (async function ({
              provider: e,
              CoreProxy: t,
              accountId: a,
              collateralTypeTokenAddress: r,
            }) {
              const n = new ie.CH(t.address, t.abi, e);
              return await n.getAccountAvailableCollateral(a, r);
            })({
              provider: e,
              CoreProxy: o,
              accountId: t,
              collateralTypeTokenAddress: a,
            });
            return oi("accountAvailableCollateral: %O", i), i;
          },
          throwOnError: (e) => (i(e), !1),
          select: (e) => Lt.O$.from(e),
        });
      }
      function li({
        onSubmit: e,
        debt: t,
        collateralAmount: a,
        collateralSymbol: r,
        onClose: n,
        debtSymbol: i,
      }) {
        const o = (0, ue.UO)(),
          { data: s } = (0, Mt.t)(o.collateralSymbol),
          { data: l } = (0, Xt.p)(),
          c = (0, G.yL)(),
          { data: d, isPending: u } = Xn({
            provider: c,
            accountId: o.accountId,
            poolId: o.poolId,
            collateralTypeTokenAddress: s?.tokenAddress,
          }),
          { data: h, isPending: x } = (0, ke.mM)(l?.address),
          { data: p, isPending: g } = si({
            provider: c,
            accountId: o.accountId,
            collateralTypeTokenAddress: l?.address,
          }),
          f = ca(i),
          y = ca(r),
          { data: j } = (0, kn.b)();
        return (0, m.jsxs)(E.k, {
          flexDirection: "column",
          children: [
            (0, m.jsxs)(A.x, {
              color: "gray.50",
              fontSize: "20px",
              fontWeight: 700,
              children: [
                (0, m.jsx)(mr.R, { cursor: "pointer", onClick: n, mr: 2 }),
                "Close Position",
              ],
            }),
            (0, m.jsx)(U.i, { my: 5, bg: "gray.900" }),
            (0, m.jsx)(A.x, {
              color: "gray.50",
              fontSize: "sm",
              fontWeight: "700",
              mb: 2,
              children: t.gt(0) ? "Repay Debt" : "Claim Profit",
            }),
            (0, m.jsx)(ve, {
              display: "flex",
              flexDirection: "column",
              p: 3,
              mb: "6",
              children: (0, m.jsxs)(E.k, {
                alignItems: "center",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: 1,
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: i,
                              width: 16,
                              height: 16,
                            }),
                            i,
                          ],
                        }),
                      }),
                      (0, m.jsxs)(E.k, {
                        fontSize: "12px",
                        gap: "1",
                        mr: "3",
                        children: [
                          (0, m.jsx)(De.$, {
                            prefix: t.gt(0) ? "Debt: " : "Max Claim: ",
                            value: t.abs(),
                          }),
                          (0, m.jsx)(A.x, {
                            ml: 0.5,
                            color: "gray.600",
                            fontWeight: 700,
                            children: "Max",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexGrow: 1,
                    flexDir: "column",
                    children: [
                      (0, m.jsx)(Ae, { value: t.abs(), disabled: !0 }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          f.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: t.abs().mul(f),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(A.x, {
              color: "gray.50",
              fontSize: "sm",
              fontWeight: "700",
              mb: 2,
              children: "Unlock Collateral",
            }),
            (0, m.jsx)(ve, {
              display: "flex",
              flexDirection: "column",
              p: 3,
              mb: "6",
              children: (0, m.jsxs)(E.k, {
                alignItems: "center",
                children: [
                  (0, m.jsxs)(E.k, {
                    alignItems: "flex-start",
                    flexDir: "column",
                    gap: 1,
                    children: [
                      (0, m.jsx)(ve, {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 1.5,
                        px: 2.5,
                        children: (0, m.jsxs)(A.x, {
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          fontWeight: "600",
                          children: [
                            (0, m.jsx)(xe, {
                              symbol: r,
                              width: 16,
                              height: 16,
                            }),
                            r,
                          ],
                        }),
                      }),
                      (0, m.jsxs)(E.k, {
                        fontSize: "12px",
                        gap: "1",
                        mr: "3",
                        children: [
                          (0, m.jsx)(De.$, { prefix: "Locked: ", value: a }),
                          (0, m.jsx)(A.x, {
                            ml: 0.5,
                            color: "gray.600",
                            fontWeight: 700,
                            children: "Max",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)(E.k, {
                    flexGrow: 1,
                    flexDir: "column",
                    children: [
                      (0, m.jsx)(Ae, { value: a, disabled: !0 }),
                      (0, m.jsx)(E.k, {
                        fontSize: "xs",
                        color: "whiteAlpha.700",
                        alignSelf: "flex-end",
                        gap: "1",
                        children:
                          y.gt(0) &&
                          (0, m.jsx)(De.$, {
                            prefix: "$",
                            value: a.abs().mul(y),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(fe.U, {
              in: j && h && d && p && !h.add(p).gte(d),
              animateOpacity: !0,
              children: (0, m.jsxs)(ye.b, {
                mb: 6,
                status: "error",
                borderRadius: "6px",
                children: [
                  (0, m.jsx)(je.z, {}),
                  (0, m.jsxs)(be.X, {
                    children: [
                      (0, m.jsxs)(A.x, {
                        children: [
                          "You do not have enough ",
                          l?.symbol,
                          " to repay debt",
                        ],
                      }),
                      (0, m.jsx)(A.x, {
                        children: (0, m.jsx)(De.$, {
                          prefix: "Available: ",
                          value: h && p && h.add(p),
                          suffix: ` ${l?.symbol}`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(I.z, {
              "data-cy": "close position submit",
              onClick: e,
              type: "submit",
              isDisabled:
                j && !(!u && !x && !g && h && p && d && h.add(p).gte(d)),
              children: "Close Position",
            }),
          ],
        });
      }
      const ci = ({ liquidityPosition: e, onClose: t }) => {
          const [a, r] = n.useState(!1),
            { setCollateralChange: i, setDebtChange: o } = n.useContext(Ia.n),
            s = (0, ue.UO)(),
            { data: l } = (0, Mt.t)(s.collateralSymbol),
            { network: c } = (0, G.LN)(),
            d = (0, Wt.Yz)(c?.id, c?.preset),
            { data: u } = (0, Xt.p)();
          n.useEffect(
            () => (
              e && (o(e.debt.mul(-1)), i(e.collateralAmount.mul(-1))),
              () => {
                o(f.GH), i(f.GH);
              }
            ),
            [e, i, o]
          );
          const { data: h } = (0, kn.b)();
          return l
            ? (0, m.jsxs)(m.Fragment, {
                children: [
                  a
                    ? null
                    : (0, m.jsx)(li, {
                        debt: e?.debt || f.GH,
                        collateralAmount: e?.collateralAmount || f.GH,
                        onClose: t,
                        debtSymbol: d ? s.collateralSymbol : u?.symbol,
                        collateralSymbol: l.displaySymbol,
                        onSubmit: () => r(!0),
                      }),
                  a && !h
                    ? (0, m.jsx)(ii, {
                        onBack: () => r(!1),
                        onClose: t,
                        collateralType: l,
                        liquidityPosition: e,
                        poolId: s.poolId,
                      })
                    : null,
                  a && h
                    ? (0, m.jsx)(ei, { onBack: () => r(!1), onClose: t })
                    : null,
                ],
              })
            : null;
        },
        di = ({ collateralSymbol: e, poolName: t }) =>
          (0, m.jsxs)(k.xu, {
            mb: 12,
            mt: 8,
            children: [
              (0, m.jsx)(k.xu, {
                px: [0, 6],
                children: (0, m.jsx)(vr, {
                  collateralSymbol: e,
                  poolName: t,
                  isOpen: !0,
                }),
              }),
              (0, m.jsxs)(E.k, {
                mt: 6,
                flexDirection: ["column", "column", "row"],
                gap: 4,
                children: [
                  (0, m.jsxs)(ve, {
                    gap: 4,
                    flex: 1,
                    p: 6,
                    flexDirection: "column",
                    bg: "navy.700",
                    height: "fit-content",
                    children: [
                      (0, m.jsx)(Et.O, {
                        maxW: "100px",
                        width: "100%",
                        height: "20px",
                      }),
                      (0, m.jsxs)(E.k, {
                        gap: 4,
                        children: [
                          (0, m.jsxs)(ve, {
                            display: "flex",
                            flexDir: "column",
                            gap: 2,
                            p: 4,
                            flex: 1,
                            height: "152px",
                            children: [
                              (0, m.jsx)(Et.O, {
                                width: "100px",
                                height: "20px",
                              }),
                              (0, m.jsx)(Et.O, {
                                width: "100%",
                                height: "28px",
                              }),
                            ],
                          }),
                          (0, m.jsxs)(ve, {
                            display: "flex",
                            flexDir: "column",
                            gap: 2,
                            p: 4,
                            flex: 1,
                            height: "152px",
                            children: [
                              (0, m.jsx)(Et.O, {
                                width: "100px",
                                height: "20px",
                              }),
                              (0, m.jsx)(Et.O, {
                                width: "100%",
                                height: "28px",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, m.jsxs)(ve, {
                        display: "flex",
                        flexDir: "column",
                        gap: 2,
                        p: 4,
                        flex: 1,
                        height: "130px",
                        children: [
                          (0, m.jsx)(Et.O, { width: "100px", height: "20px" }),
                          (0, m.jsx)(Et.O, {
                            width: "100%",
                            height: "28px",
                            maxW: "300px",
                          }),
                        ],
                      }),
                      (0, m.jsxs)(ve, {
                        display: "flex",
                        flexDir: "column",
                        gap: 2,
                        p: 4,
                        flex: 1,
                        height: "130px",
                        children: [
                          (0, m.jsx)(Et.O, { width: "100px", height: "20px" }),
                          (0, m.jsx)(Et.O, {
                            width: "100%",
                            height: "28px",
                            maxW: "300px",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)(ve, {
                    flex: 1,
                    maxW: ["100%", "100%", "501px"],
                    p: 6,
                    flexDirection: "column",
                    bg: "navy.700",
                    height: "fit-content",
                    children: [
                      (0, m.jsx)(Et.O, {
                        maxW: "232px",
                        width: "100%",
                        height: "20px",
                      }),
                      (0, m.jsx)(U.i, { my: 6 }),
                      (0, m.jsx)(Et.O, {
                        maxW: "232px",
                        width: "100%",
                        height: "20px",
                      }),
                      (0, m.jsx)(Et.O, {
                        mt: 4,
                        width: "100%",
                        height: "79px",
                      }),
                      (0, m.jsx)(Et.O, {
                        mt: 6,
                        width: "100%",
                        height: "48px",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      function ui(e) {
        const { network: t } = (0, G.LN)();
        return (0, n.useMemo)(() => {
          if (t?.id || !t?.preset)
            return (0, Wt.Yz)(t?.id, t?.preset)
              ? "susdc" === e?.toLowerCase()
                ? "USDC"
                : "sstatausdc" === e?.toLowerCase()
                ? "sStataUSDC"
                : e
              : e;
        }, [t?.id, t?.preset, e]);
      }
      const hi = ({
          collateralType: e,
          liquidityPosition: t,
          network: a,
          collateralSymbol: r,
          poolName: i,
          poolId: o,
        }) => {
          const [s, l] = (0, n.useState)(!1),
            { data: c } = (0, en.AI)(Number(a?.id), String(o)),
            [d, u] = (0, n.useState)(void 0),
            h = c?.apr?.collateralAprs?.find(
              (t) =>
                t.collateralType.toLowerCase() === e?.tokenAddress.toLowerCase()
            );
          return (0, m.jsxs)(k.xu, {
            mb: 12,
            mt: 8,
            children: [
              (0, m.jsxs)(E.k, {
                flexDir: ["column", "row"],
                flexWrap: "wrap",
                px: [0, 6],
                alignItems: "center",
                justifyContent: "space-between",
                mb: "8px",
                gap: 4,
                children: [
                  (0, m.jsx)(vr, {
                    collateralSymbol: r,
                    poolName: i,
                    isOpen: !1,
                    poolId: o,
                  }),
                  c &&
                    (0, m.jsxs)(E.k, {
                      alignItems: ["center", "flex-end"],
                      direction: "column",
                      children: [
                        (0, m.jsx)(se.u, {
                          label:
                            "APR is averaged over the trailing 7 days and is comprised of both performance and rewards",
                          children: (0, m.jsxs)(A.x, {
                            fontFamily: "heading",
                            fontSize: "sm",
                            lineHeight: 5,
                            fontWeight: "medium",
                            color: "gray.500",
                            children: [
                              "Estimated APR",
                              (0, m.jsx)(ct.s, {
                                ml: 1,
                                mb: "2px",
                                w: "10px",
                                h: "10px",
                              }),
                            ],
                          }),
                        }),
                        (0, m.jsx)(A.x, {
                          fontWeight: "bold",
                          fontSize: "20px",
                          color: "white",
                          lineHeight: "36px",
                          children:
                            c && h?.apr7d > 0
                              ? `${(100 * h.apr7d).toFixed(2)?.concat("%")}`
                              : "-",
                        }),
                      ],
                    }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                mt: 6,
                flexDirection: ["column", "column", "row"],
                gap: 4,
                children: [
                  (0, m.jsxs)(ve, {
                    gap: 4,
                    flex: 1,
                    p: 6,
                    flexDirection: "column",
                    bg: "navy.700",
                    height: "fit-content",
                    children: [
                      (0, m.jsx)(xr, { liquidityPosition: t }),
                      (0, m.jsx)($t, {}),
                    ],
                  }),
                  s
                    ? null
                    : (0, m.jsxs)(E.k, {
                        maxWidth: ["100%", "100%", "501px"],
                        width: "100%",
                        flex: 1,
                        alignSelf: "flex-start",
                        flexDirection: "column",
                        children: [
                          (0, m.jsx)(ve, {
                            flex: 1,
                            p: 6,
                            flexDirection: "column",
                            bg: "navy.700",
                            height: "fit-content",
                            children: (0, m.jsx)(ar, {
                              liquidityPosition: t,
                              setTxnModalOpen: u,
                              txnModalOpen: d,
                            }),
                          }),
                          t?.collateralAmount.gt(0) &&
                            !d &&
                            (0, m.jsx)(A.x, {
                              textAlign: "center",
                              cursor: "pointer",
                              onClick: () => l(!0),
                              color: "cyan.500",
                              fontWeight: 700,
                              mt: "5",
                              "data-cy": "close position",
                              children: "Close Position",
                            }),
                        ],
                      }),
                  s
                    ? (0, m.jsx)(ve, {
                        flex: 1,
                        maxW: ["100%", "100%", "501px"],
                        p: 6,
                        flexDirection: "column",
                        bg: "navy.700",
                        height: "fit-content",
                        children: (0, m.jsx)(ci, {
                          liquidityPosition: t,
                          onClose: () => l(!1),
                        }),
                      })
                    : null,
                ],
              }),
            ],
          });
        },
        xi = () => {
          const e = (0, ue.UO)(),
            t = (function (e) {
              const { network: t } = (0, G.LN)();
              return (0, n.useMemo)(
                () =>
                  "USDC" !== e
                    ? e
                    : t?.id || !t?.preset
                    ? (0, Wt.Yz)(t?.id, t?.preset) && "USDC" === e
                      ? "sUSDC"
                      : e
                    : void 0,
                [t?.id, t?.preset, e]
              );
            })(e.collateralSymbol),
            { network: a } = (0, G.LN)(),
            { activeWallet: r } = (0, G.Os)(),
            { data: i } = (0, Mt.t)(e.collateralSymbol),
            { data: o } = An(e.poolId),
            { data: s, isPending: l } = (({
              tokenAddress: e,
              accountId: t,
              poolId: a,
            }) => {
              const { data: r } = (0, te.a)(),
                { data: n } = (0, Xt.p)(),
                { network: i } = (0, G.LN)(),
                o = (0, G.eK)(i),
                { data: s } = (0, Mt.T)(!0);
              return (0, y.useQuery)({
                queryKey: [
                  `${i?.id}-${i?.preset}`,
                  "LiquidityPosition",
                  { accountId: t },
                  { pool: a, token: e },
                  { contractsHash: (0, ne.K)([r, n]) },
                ],
                enabled: Boolean(r && t && a && e && n && i && o),
                queryFn: async () => {
                  if (!(r && t && a && e && n && i && o))
                    throw Error("useLiquidityPosition not ready");
                  const l = new ie.CH(r.address, r.abi, o),
                    { calls: c, decoder: d } = await Qt({
                      collateralAddresses: [e],
                      CoreProxyContract: l,
                    }),
                    { calls: u, decoder: h } = await ta({
                      CoreProxyContract: l,
                      accountId: t,
                      poolId: a,
                      tokenAddress: e,
                    }),
                    { calls: x, decoder: p } = await (0, Zt.NN)({
                      accountId: t,
                      tokenAddresses: [e, n.address],
                      provider: o,
                      CoreProxy: r,
                    }),
                    m = c.concat(u).concat(x),
                    g = await (0, jt.QH)(await (0, jt.kp)(i), i).catch(
                      () => {}
                    );
                  return (
                    g && m.unshift(g),
                    await (0, Ct.Iy)(
                      i,
                      o,
                      m,
                      (a) => {
                        if (!Array.isArray(a)) throw Error("Expected array");
                        const r = c.length,
                          n = r,
                          i = n + u.length,
                          o = i,
                          l = d(a.slice(0, r)),
                          x = h(a.slice(n, i)),
                          [m, g] = p(a.slice(o)),
                          f = s?.find(
                            (e) =>
                              e.tokenAddress.toLowerCase() ===
                              m.tokenAddress.toLowerCase()
                          );
                        return (
                          f &&
                            ((m.symbol = f.symbol),
                            (m.displaySymbol = f.displaySymbol),
                            (m.decimals = f.decimals)),
                          {
                            collateralPrice: Array.isArray(l) ? l[0] : l,
                            collateralAmount: x.collateral.amount,
                            collateralValue: x.collateral.amount.mul(l),
                            debt: x.debt,
                            tokenAddress: e,
                            accountCollateral: m,
                            usdCollateral: g,
                            accountId: t,
                          }
                        );
                      },
                      "useLiquidityPosition"
                    )
                  );
                },
              });
            })({
              tokenAddress: i?.tokenAddress,
              accountId: e.accountId,
              poolId: e.poolId,
            }),
            c = ui(t),
            { data: d, isPending: u } = (0, Mt.T)(),
            h =
              !u &&
              o &&
              d?.length &&
              c &&
              !d.some((e) =>
                [
                  e.symbol.toUpperCase(),
                  e.displaySymbol.toUpperCase(),
                ].includes(c.toUpperCase())
              ),
            x = s && s.collateralAmount.gt(0),
            p = s && s.accountCollateral.availableCollateral.gt(0);
          return (0, m.jsxs)(Ia.T, {
            children: [
              (0, m.jsx)(xn, {}),
              r
                ? (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(lt, { isOpen: Boolean(h) }),
                      !e.accountId && l
                        ? (0, m.jsx)(Ir, { liquidityPosition: s })
                        : null,
                      e.accountId && l
                        ? (0, m.jsx)(di, {
                            poolName: o?.name,
                            collateralSymbol: t,
                          })
                        : null,
                      !e.accountId || l || x || p
                        ? null
                        : (0, m.jsx)(Ir, { liquidityPosition: s }),
                      e.accountId && !l && (x || p)
                        ? (0, m.jsx)(hi, {
                            poolName: o?.name,
                            poolId: e.poolId,
                            liquidityPosition: s,
                            network: a,
                            collateralSymbol: t,
                            collateralType: i,
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          });
        },
        pi = ({ ...e }) => {
          const t = (0, F.TH)();
          return (0, m.jsxs)(v.r, {
            px: 3,
            py: 2,
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            variant: "outline",
            lineHeight: "20px",
            color: "white",
            borderRadius: "4px",
            as: i.rU,
            borderWidth: "1px",
            borderColor: "gray.900",
            _hover: { textTransform: "none", opacity: 0.9 },
            to: { pathname: "/", search: t.search },
            fontSize: "sm",
            fontWeight: 700,
            mb: 2,
            ...e,
            children: [(0, m.jsx)(mr.R, { mr: 1 }), " All Pools"],
          });
        },
        mi = () => {
          const { poolId: e, networkId: t } = (0, ue.UO)(),
            { data: a } = (0, en.AI)(Number(t), String(e)),
            r = G.g5.find((e) => e.id === Number(t)),
            { poolInfo: n } = a || {},
            i = n ? `Pool #${n[0].pool.id} / ${n[0].pool.name}` : "Pool";
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(nt.q, {
                children: [
                  (0, m.jsx)("title", { children: i }),
                  (0, m.jsx)("meta", { name: "description", content: i }),
                ],
              }),
              (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsx)(pi, { mt: 4 }),
                  (0, m.jsx)(dn, {
                    mt: 3,
                    name: n && n[0].pool.name,
                    network: r || G.RR,
                  }),
                  (0, m.jsx)(U.i, { my: 6, bg: "gray.900" }),
                  (0, m.jsx)(E.k, {
                    gap: 4,
                    mb: 16,
                    children: (0, m.jsx)(k.xu, {
                      w: "100%",
                      children: (0, m.jsx)(Wr, {}),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function gi() {
        return (0, m.jsx)(k.xu, {
          mb: 20,
          w: "100%",
          children: (0, m.jsx)(sn, {}),
        });
      }
      var fi = a(34572),
        yi = a(38817);
      const ji = ({
        accountId: e,
        target: t,
        existing: a = [],
        selected: r = [],
      }) => {
        const { data: n } = (0, te.a)(),
          { data: i } = re(),
          o = (0, G.mx)();
        return (0, y.useMutation)({
          mutationFn: async () => {
            if (!(n && i && o)) throw "OMFG";
            const { grants: s, revokes: l } = ((e, t) => {
              let a = [],
                r = [];
              return (
                e.concat(t).forEach((n) => {
                  e.includes(n) || (a = [...a, n]),
                    t.includes(n) || (r = [...r, n]);
                }),
                { grants: a, revokes: r }
              );
            })(a, r);
            try {
              const a = new Ze.vU(n.abi),
                r = s.map((r) => ({
                  target: n.address,
                  callData: a.encodeFunctionData("grantPermission", [
                    e,
                    Fe.s(r),
                    t,
                  ]),
                  allowFailure: !1,
                  requireSuccess: !0,
                })),
                c = l.map((r) => ({
                  target: n.address,
                  callData: a.encodeFunctionData("revokePermission", [
                    e,
                    Fe.s(r),
                    t,
                  ]),
                  allowFailure: !1,
                  requireSuccess: !0,
                })),
                d = new ie.CH(i.address, i.abi, o),
                u = await d.aggregate3([...r, ...c]);
              await u.wait();
            } catch (e) {
              throw e;
            }
          },
        });
      };
      var bi = a(63014);
      const wi = ({ address: e }) => {
        const { network: t } = (0, G.LN)(),
          a = (0, n.useMemo)(
            () => It({ chain: t?.name || "", address: e }),
            [e, t?.name]
          );
        return (0, m.jsxs)(E.k, {
          alignItems: "center",
          gap: 2,
          children: [
            (0, m.jsx)(oa.u, { label: e, children: (0, _.i_)(e) }),
            (0, m.jsx)(K.T, {
              onClick: () => {
                navigator.clipboard.writeText(e);
              },
              cursor: "pointer",
              _hover: { color: "cyan" },
            }),
            (0, m.jsx)("a", {
              target: "_blank",
              href: a,
              rel: "noreferrer",
              children: (0, m.jsx)(bi.h, { _hover: { color: "cyan" } }),
            }),
          ],
        });
      };
      var Ci = a(2338),
        Li = a(50250);
      const Mi = ["ADMIN", "BURN", "DELEGATE", "MINT", "REWARDS", "WITHDRAW"];
      var Si = a(58549);
      function Ai(e) {
        const { data: t } = (0, te.a)(),
          { network: a } = (0, G.LN)(),
          r = (0, G.yL)();
        return (0, y.useQuery)({
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "AccountPermissions",
            { accountId: e },
            { contractsHash: (0, ne.K)([t]) },
          ],
          enabled: Boolean(r && t && e),
          queryFn: async function () {
            if (!(r && t && e)) throw "OMFG";
            const a = new ie.CH(t.address, t.abi, r);
            return (await a.getAccountPermissions(e)).reduce(
              (e, { user: t, permissions: a }) => ({
                ...e,
                [t.toLowerCase()]: a.map((e) => Fe.F(e)),
              }),
              {}
            );
          },
        });
      }
      function ki(e) {
        const { data: t } = ee(),
          { network: a } = (0, G.LN)(),
          r = (0, G.yL)();
        return (0, y.useQuery)({
          queryKey: [
            `${a?.id}-${a?.preset}`,
            "AccountOwner",
            { accountId: e },
            { contractsHash: (0, ne.K)([t]) },
          ],
          enabled: Boolean(r && t && e),
          queryFn: async function () {
            if (!(r && t && e)) throw "OMFG";
            const a = new ie.CH(t.address, t.abi, r);
            return await a.ownerOf(e);
          },
        });
      }
      function Di() {
        return (0, m.jsx)(oa.u, {
          label: (0, m.jsx)(m.Fragment, {
            children: (0, m.jsxs)(A.x, {
              fontWeight: 600,
              textAlign: "left",
              children: [
                "ADMIN: Full control over the account, except for transferring ownership ",
                (0, m.jsx)("br", {}),
                "WITHDRAW: Ability to withdraw collateral from the account",
                (0, m.jsx)("br", {}),
                "REWARDS: Ability to claim rewards on behalf of the account",
                (0, m.jsx)("br", {}),
                "MINT: Ability to mint snxUSD using the account's collateral",
                (0, m.jsx)("br", {}),
                "DELEGATE: Ability to delegate the account's collateral to pools",
              ],
            }),
          }),
          children: (0, m.jsx)(ct.s, { ml: 1.5, w: "10px", h: "10px" }),
        });
      }
      function vi({
        accountId: e,
        isOpen: t,
        onClose: a,
        refetch: r,
        existingPermissions: i,
        target: o,
      }) {
        const [s, l] = (0, n.useState)(o || ""),
          [c, d] = (0, n.useState)([...(i || [])]),
          { mutateAsync: u, isPending: h } = ji({
            target: s,
            accountId: e,
            existing: i || [],
            selected: c,
          }),
          { data: x } = Ai(e),
          { data: p } = ki(e);
        (0, n.useEffect)(() => {
          t || d([...(i || [])]);
        }, [i, t]);
        const g = (0, n.useMemo)(
            () =>
              Si.isAddress(s) &&
              p?.toLowerCase() !== s.toLowerCase() &&
              (!!o || (x && !x[s.toLowerCase()])),
            [p, s, x, o]
          ),
          f = (0, n.useMemo)(() => c.length > 0 && g, [g, c.length]);
        return (0, m.jsxs)(w.u_, {
          isOpen: t,
          onClose: a,
          children: [
            (0, m.jsx)(C.Z, {}),
            (0, m.jsxs)(L.h, {
              py: 2,
              border: "1px solid",
              rounded: "base",
              borderColor: "gray.900",
              bg: "navy.700",
              children: [
                (0, m.jsxs)(M.x, {
                  children: [o ? "Edit" : "New", " Permission"],
                }),
                (0, m.jsx)(Ci.o, {}),
                (0, m.jsxs)(S.f, {
                  children: [
                    (0, m.jsx)(U.i, {}),
                    (0, m.jsxs)(E.k, {
                      pt: 6,
                      flexDir: "column",
                      gap: "5",
                      children: [
                        !o &&
                          (0, m.jsxs)(m.Fragment, {
                            children: [
                              (0, m.jsx)(A.x, {
                                fontWeight: 600,
                                fontSize: "14px",
                                color: "white",
                                children: "Address",
                              }),
                              (0, m.jsx)(we.I, {
                                bg: "navy.900",
                                onChange: (e) => {
                                  l(e.target.value.trim());
                                },
                                value: s,
                                isInvalid: !g && !!s,
                              }),
                            ],
                          }),
                        (0, m.jsxs)(A.x, {
                          fontWeight: 600,
                          color: "white",
                          fontSize: "14px",
                          children: ["Select Permissions ", (0, m.jsx)(Di, {})],
                        }),
                        (0, m.jsx)(E.k, {
                          justifyContent: "space-evenly",
                          children: Mi.map((e) => {
                            const t = c.includes(e);
                            return (0, m.jsx)(
                              q.C,
                              {
                                onClick: () =>
                                  d((t) =>
                                    t.includes(e)
                                      ? t.filter((t) => t !== e)
                                      : [...t, e]
                                  ),
                                variant: "outline",
                                color: t ? "cyan" : "gray",
                                textTransform: "capitalize",
                                cursor: "pointer",
                                bg: "gray.900",
                                colorScheme: t ? "cyan" : "gray",
                                children: e,
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, m.jsx)(Li.m, {
                  justifyContent: "center",
                  children: h
                    ? (0, m.jsx)(N.$, { color: "cyan" })
                    : (0, m.jsxs)(I.z, {
                        w: "100%",
                        onClick: () => {
                          u().then(() => {
                            l(""), d([]), r(), a();
                          });
                        },
                        isDisabled: !f,
                        children: [o ? "Update " : "Add new ", " permissions"],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      const Ii = ({
        address: e,
        currentPermissions: t,
        accountId: a,
        refetch: r,
        isOwner: i,
      }) => {
        const { isOpen: o, onClose: s, onOpen: l } = (0, P.q)(),
          {
            mutate: c,
            isPending: d,
            isSuccess: u,
          } = ji({ accountId: a, target: e, selected: [], existing: t });
        return (
          (0, n.useEffect)(() => {
            u && (r(), s());
          }, [u, s, r]),
          (0, m.jsxs)(xt.Tr, {
            children: [
              (0, m.jsx)(gt.Td, {
                width: 240,
                borderBottomColor: "gray.900",
                py: "4",
                children: (0, m.jsx)(A.x, {
                  fontWeight: 400,
                  color: "white",
                  fontSize: "16px",
                  children: (0, m.jsx)(wi, { address: e }),
                }),
              }),
              (0, m.jsx)(gt.Td, {
                borderBottomColor: "gray.900",
                children: (0, m.jsx)(E.k, {
                  py: 2,
                  flexWrap: "wrap",
                  gap: 3,
                  children: Mi.map((e) => {
                    const a = t.includes(e);
                    return (0, m.jsx)(
                      q.C,
                      {
                        color: a ? "cyan" : "gray",
                        colorScheme: a ? "cyan" : "gray",
                        variant: "outline",
                        bg: a ? "cyan.900" : "gray.900",
                        size: "sm",
                        textTransform: "capitalize",
                        children: e,
                      },
                      e.concat("permission-row")
                    );
                  }),
                }),
              }),
              (0, m.jsx)(gt.Td, {
                borderBottomColor: "gray.900",
                textAlign: "end",
                children:
                  i &&
                  (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(vi, {
                        isOpen: o,
                        onClose: s,
                        accountId: a,
                        refetch: r,
                        existingPermissions: t,
                        target: e,
                      }),
                      (0, m.jsx)(Z.h, {
                        onClick: l,
                        size: "sm",
                        "aria-label": "edit",
                        variant: "outline",
                        colorScheme: "gray",
                        icon: (0, m.jsx)(fi.d, {}),
                        mr: "2",
                      }),
                      (0, m.jsx)(Z.h, {
                        variant: "outline",
                        isLoading: d,
                        colorScheme: "gray",
                        onClick: () => {
                          c();
                        },
                        size: "sm",
                        "aria-label": "delete",
                        icon: (0, m.jsx)(yi.p, {}),
                      }),
                    ],
                  }),
              }),
            ],
          })
        );
      };
      function Ti({
        isOpen: e,
        onClose: t,
        accountId: a,
        refetch: r,
        owner: i,
      }) {
        const [o, s] = (0, n.useState)(""),
          { isPending: l, mutateAsync: c } = (function (e, t) {
            const { data: a } = ee(),
              { activeWallet: r } = (0, G.Os)(),
              n = (0, G.mx)(),
              i = r?.address;
            return (0, y.useMutation)({
              mutationFn: async () => {
                if (!a) throw new Error("AccountProxy not defined");
                if (!i || !n) throw new Error("Wallet is not connected");
                const r = new ie.CH(a.address, a.abi, n),
                  o = await r.transferFrom(i, e, t);
                return await o.wait();
              },
            });
          })(o, a),
          d = (0, n.useMemo)(
            () => !!Si.isAddress(o) && o.toLowerCase() !== i.toLowerCase(),
            [i, o]
          );
        return (0, m.jsxs)(w.u_, {
          isOpen: e,
          onClose: t,
          children: [
            (0, m.jsx)(C.Z, {}),
            (0, m.jsxs)(L.h, {
              pb: 1,
              border: "1px solid",
              rounded: "base",
              borderColor: "gray.900",
              bg: "navy.700",
              children: [
                (0, m.jsx)(M.x, { children: "Transfer Ownership" }),
                (0, m.jsx)(Ci.o, {}),
                (0, m.jsxs)(S.f, {
                  children: [
                    (0, m.jsx)(U.i, {}),
                    (0, m.jsxs)(A.x, {
                      fontSize: "18px",
                      fontWeight: 700,
                      mt: "4",
                      children: ["Account #", (0, _.i_)(a, 4, 4)],
                    }),
                    (0, m.jsx)(A.x, {
                      fontSize: "14px",
                      color: "white",
                      mt: "2",
                      children: "Will be transfered from:",
                    }),
                    (0, m.jsx)(we.I, {
                      mt: "2",
                      bg: "navy.900",
                      disabled: !0,
                      value: i,
                    }),
                    (0, m.jsx)(A.x, {
                      fontSize: "14px",
                      color: "white",
                      mt: "2",
                      children: "Will be transfered to:",
                    }),
                    (0, m.jsx)(we.I, {
                      mt: "2",
                      bg: "navy.900",
                      onChange: (e) => {
                        s(e.target.value.trim());
                      },
                      value: o,
                    }),
                  ],
                }),
                (0, m.jsxs)(Li.m, {
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  justifyContent: "center",
                  children: [
                    (0, m.jsxs)(ye.b, {
                      status: "warning",
                      borderRadius: "6px",
                      children: [
                        (0, m.jsx)(je.z, {}),
                        (0, m.jsx)(E.k, {
                          direction: "column",
                          children: (0, m.jsx)(be.X, {
                            children: "This action cannot be undone",
                          }),
                        }),
                      ],
                    }),
                    l
                      ? (0, m.jsx)(N.$, { color: "cyan" })
                      : (0, m.jsx)(I.z, {
                          w: "100%",
                          onClick: () =>
                            c().then(() => {
                              s(""), r(), t();
                            }),
                          isDisabled: !d,
                          children: "Confirm",
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var Fi = a(51906);
      function Ni() {
        const e = Array.from({ length: 2 }, (e, t) => t);
        return (0, m.jsx)(m.Fragment, {
          children: e.map((e) =>
            (0, m.jsxs)(
              xt.Tr,
              {
                borderBottomWidth: 1 === e ? "none" : "1px",
                children: [
                  (0, m.jsx)(gt.Td, {
                    borderBottomColor: "gray.900",
                    py: "4",
                    width: "200px",
                    children: (0, m.jsx)(Et.O, {
                      children: (0, m.jsxs)(A.x, {
                        fontWeight: 400,
                        color: "white",
                        fontSize: "16px",
                        children: [(0, _.i_)(Fi.d), " "],
                      }),
                    }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    borderBottomColor: "gray.900",
                    py: "4",
                    children: (0, m.jsx)(Et.O, { children: "-" }),
                  }),
                  (0, m.jsx)(gt.Td, {
                    borderBottomColor: "gray.900",
                    py: "4",
                    children: (0, m.jsx)(Et.O, { children: "-" }),
                  }),
                ],
              },
              e
            )
          ),
        });
      }
      function Ei({ accountId: e, refetchAccounts: t }) {
        const { isOpen: a, onClose: r, onOpen: i } = (0, P.q)(),
          { isOpen: o, onClose: s, onOpen: l } = (0, P.q)(),
          { activeWallet: c } = (0, G.Os)(),
          { data: d, isLoading: u, refetch: h } = Ai(e),
          { data: x, isLoading: p, refetch: g } = ki(e),
          f = (0, n.useMemo)(
            () => !(!x || x?.toLowerCase() !== c?.address.toLowerCase()),
            [x, c?.address]
          );
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)(dt.x, {
              flexGrow: "2",
              borderColor: "gray.900",
              borderWidth: "1px",
              borderRadius: "5px",
              p: 6,
              sx: { borderCollapse: "separate", borderSpacing: 0 },
              bg: "navy.700",
              children: [
                (0, m.jsxs)(E.k, {
                  mb: "2",
                  w: "100%",
                  justifyContent: "space-between",
                  children: [
                    (0, m.jsxs)(pe.X, {
                      size: "md",
                      mb: "1",
                      children: ["Account #", (0, _.i_)(e, 4, 4)],
                    }),
                    f &&
                      (0, m.jsx)(I.z, {
                        size: "xs",
                        onClick: () => {
                          i();
                        },
                        children: "+ New Permission",
                      }),
                  ],
                }),
                (0, m.jsxs)(ut.i, {
                  variant: "simple",
                  children: [
                    (0, m.jsx)(ht.h, {
                      children: (0, m.jsxs)(xt.Tr, {
                        children: [
                          (0, m.jsx)(pt.Th, {
                            py: 5,
                            textTransform: "unset",
                            color: "gray.600",
                            fontFamily: "heading",
                            fontSize: "12px",
                            lineHeight: "16px",
                            borderBottomColor: "gray.900",
                            children: "Address",
                          }),
                          (0, m.jsxs)(pt.Th, {
                            py: 5,
                            textTransform: "unset",
                            color: "gray.600",
                            fontFamily: "heading",
                            fontSize: "12px",
                            lineHeight: "16px",
                            borderBottomColor: "gray.900",
                            children: ["Permissions", (0, m.jsx)(Di, {})],
                          }),
                          (0, m.jsx)(pt.Th, {
                            py: 5,
                            textTransform: "unset",
                            color: "gray.600",
                            fontFamily: "heading",
                            fontSize: "12px",
                            lineHeight: "16px",
                            borderBottomColor: "gray.900",
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsxs)(mt.p, {
                      children: [
                        (0, m.jsxs)(xt.Tr, {
                          children: [
                            (0, m.jsx)(gt.Td, {
                              width: 240,
                              py: 5,
                              borderBottomColor: "gray.900",
                              children: (0, m.jsx)(Et.O, {
                                isLoaded: !p,
                                children:
                                  x &&
                                  (0, m.jsx)(A.x, {
                                    fontWeight: 400,
                                    color: "white",
                                    fontSize: "16px",
                                    children: (0, m.jsx)(wi, { address: x }),
                                  }),
                              }),
                            }),
                            (0, m.jsx)(gt.Td, {
                              py: 5,
                              borderBottomColor: "gray.900",
                              children: (0, m.jsx)(q.C, {
                                color: "cyan",
                                variant: "outline",
                                bg: "cyan.900",
                                size: "sm",
                                textTransform: "capitalize",
                                children: "OWNER",
                              }),
                            }),
                            (0, m.jsx)(gt.Td, {
                              py: 5,
                              borderBottomColor: "gray.900",
                              textAlign: "end",
                              children:
                                f &&
                                (0, m.jsx)(I.z, {
                                  size: "xs",
                                  variant: "outline",
                                  colorScheme: "gray",
                                  color: "white",
                                  onClick: () => {
                                    l();
                                  },
                                  children: "Transfer Ownership",
                                }),
                            }),
                          ],
                        }),
                        u && (0, m.jsx)(Ni, {}),
                        !u &&
                          d &&
                          Object.keys(d)
                            .filter((e) => d[e]?.length > 0)
                            .map((t) =>
                              (0, m.jsx)(
                                Ii,
                                {
                                  address: t,
                                  currentPermissions: d[t],
                                  accountId: e,
                                  refetch: h,
                                  isOwner: f,
                                },
                                t
                              )
                            ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, m.jsx)(vi, { isOpen: a, onClose: r, accountId: e, refetch: h }),
            x &&
              (0, m.jsx)(Ti, {
                isOpen: o,
                onClose: s,
                accountId: e,
                owner: x,
                refetch: () => {
                  h(), g(), t();
                },
              }),
          ],
        });
      }
      const zi = () =>
        (0, m.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, m.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M29.3662 7.14593C29.8933 6.89158 30.5156 6.97433 30.9627 7.35822L42.9627 17.6613C43.3047 17.9549 43.5024 18.3898 43.5024 18.8485C43.5024 19.3072 43.3047 19.7421 42.9627 20.0358L30.9627 30.3388C30.5156 30.7227 29.8933 30.8054 29.3662 30.5511C28.8391 30.2967 28.5024 29.7512 28.5024 29.1515V25.5455H18.0024C17.174 25.5455 16.5024 24.8536 16.5024 24C16.5024 23.1465 17.174 22.4546 18.0024 22.4546H30.0024C30.8309 22.4546 31.5024 23.1465 31.5024 24V25.8519L39.6594 18.8485L31.5024 11.8451V13.697C31.5024 14.5505 30.8309 15.2424 30.0024 15.2424H18.0024C17.174 15.2424 16.5024 14.5505 16.5024 13.697C16.5024 12.8435 17.174 12.1515 18.0024 12.1515H28.5024V8.54547C28.5024 7.94581 28.8391 7.40028 29.3662 7.14593Z",
              fill: "white",
            }),
            (0, m.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.6362 40.8541C18.1092 41.1084 17.4868 41.0257 17.0397 40.6418L5.03972 30.3387C4.69774 30.0451 4.5 29.6102 4.5 29.1515C4.5 28.6928 4.69774 28.2579 5.03972 27.9642L17.0397 17.6612C17.4869 17.2773 18.1092 17.1946 18.6362 17.4489C19.1633 17.7033 19.5 18.2488 19.5 18.8485L19.5 22.4545L30 22.4545C30.8284 22.4545 31.5 23.1464 31.5 24C31.5 24.8535 30.8284 25.5454 30 25.5454L18 25.5454C17.1716 25.5454 16.5 24.8535 16.5 24L16.5 22.1481L8.34308 29.1515L16.5 36.1549L16.5 34.303C16.5 33.4495 17.1716 32.7576 18 32.7576L30 32.7576C30.8284 32.7576 31.5 33.4495 31.5 34.303C31.5 35.1565 30.8284 35.8485 30 35.8485L19.5 35.8485L19.5 39.4545C19.5 40.0542 19.1633 40.5997 18.6362 40.8541Z",
              fill: "white",
            }),
            (0, m.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.3584 13.6973C9.3584 12.8438 10.03 12.1519 10.8584 12.1519H12.5727C13.4011 12.1519 14.0727 12.8438 14.0727 13.6973C14.0727 14.5508 13.4011 15.2428 12.5727 15.2428H10.8584C10.03 15.2428 9.3584 14.5508 9.3584 13.6973Z",
              fill: "white",
            }),
            (0, m.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M38.644 34.3027C38.644 35.1562 37.9725 35.8481 37.144 35.8481L35.4298 35.8481C34.6013 35.8481 33.9298 35.1562 33.9298 34.3027C33.9298 33.4492 34.6013 32.7572 35.4298 32.7572L37.144 32.7572C37.9725 32.7572 38.644 33.4492 38.644 34.3027Z",
              fill: "white",
            }),
          ],
        });
      function Pi() {
        const { data: e, refetch: t } = oe();
        return (0, m.jsxs)(E.k, {
          flexDir: "column",
          gap: "7",
          children: [
            (0, m.jsx)(E.k, {
              flexDir: "column",
              gap: 7,
              children: e?.map((e) =>
                (0, m.jsx)(Ei, { accountId: e, refetchAccounts: t }, e)
              ),
            }),
            (0, m.jsxs)(E.k, {
              flexGrow: "1",
              h: "fit-content",
              border: "1px solid",
              borderColor: "gray.900",
              rounded: "base",
              flexDir: "column",
              width: "100%",
              p: "6",
              bg: "navy.700",
              children: [
                (0, m.jsx)(zi, {}),
                (0, m.jsx)(pe.X, {
                  fontSize: "14px",
                  mt: "6",
                  children: "Delegate Permissions",
                }),
                (0, m.jsx)(A.x, {
                  color: "gray.500",
                  fontSize: "12px",
                  mb: "6",
                  children:
                    "Delegation enables a wallet to execute functions on behalf of another wallet/account: lock, borrow, withdraw, claim, but not transfer. Manage addresses and their powers below.",
                }),
                (0, m.jsx)(v.r, {
                  href: "https://docs.synthetix.io/v/synthetix-v3-user-documentation/protocol-design/vaults#account-permissions",
                  rel: "noopener",
                  target: "_blank",
                  children: (0, m.jsx)(I.z, {
                    variant: "outline",
                    color: "white",
                    colorScheme: "gray",
                    size: "xs",
                    children: "Learn More",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function Oi() {
        const e = (0, F.s0)(),
          t = (0, G.T9)(),
          { data: a, isPending: r, isFetching: i } = oe();
        return (
          (0, n.useEffect)(() => {
            t || e("/");
          }, [t, e]),
          (0, n.useEffect)(() => {
            r || i || a?.length || e("/");
          }, [a?.length, i, r, t, e]),
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(nt.q, {
                children: [
                  (0, m.jsx)("title", { children: "Account Settings" }),
                  (0, m.jsx)("meta", {
                    name: "description",
                    content: "Account Settings",
                  }),
                ],
              }),
              (0, m.jsxs)(E.k, {
                flexDir: "column",
                mb: 16,
                children: [
                  (0, m.jsx)(pe.X, {
                    mt: { base: 2, sm: 8 },
                    mb: 6,
                    color: "gray.50",
                    fontSize: "1.5rem",
                    "data-cy": "account settings",
                    children: "Account Settings",
                  }),
                  (0, m.jsx)(Pi, {}),
                ],
              }),
            ],
          })
        );
      }
      const Hi = () =>
        (0, m.jsx)(n.Suspense, {
          fallback: (0, m.jsx)(N.$, {}),
          children: (0, m.jsx)(F.Z5, {
            children: (0, m.jsxs)(F.AW, {
              element: (0, m.jsx)(rt, {}),
              children: [
                (0, m.jsx)(F.AW, {
                  path: "/account/settings",
                  element: (0, m.jsx)(Oi, {}),
                }),
                (0, m.jsx)(F.AW, {
                  path: "/positions/:collateralSymbol/:poolId",
                  element: (0, m.jsx)(xi, {}),
                }),
                (0, m.jsx)(F.AW, {
                  path: "/pools",
                  element: (0, m.jsx)(gi, {}),
                }),
                (0, m.jsx)(F.AW, {
                  path: "/pools/:networkId/:poolId",
                  element: (0, m.jsx)(mi, {}),
                }),
                (0, m.jsx)(F.AW, {
                  path: "/dashboard",
                  element: (0, m.jsx)(pn, {}),
                }),
                (0, m.jsx)(F.AW, { path: "/", element: (0, m.jsx)(mn, {}) }),
                (0, m.jsx)(F.AW, { path: "*", element: (0, m.jsx)(ot, {}) }),
              ],
            }),
          }),
        });
      var $i = a(42764),
        Ri = a(75565),
        Ui = a(87013),
        Bi = a(43471),
        Wi = a(36961),
        Zi = a(46664),
        qi = a(24761);
      const Vi = Object.values(
          G.g5.reduce(
            (e, t) =>
              t.isSupported
                ? t.id in e
                  ? e
                  : Object.assign(e, {
                      [t.id]: {
                        id: t.id,
                        token: t.token,
                        label: t.label,
                        rpcUrl: t.rpcUrl(),
                        publicRpcUrl: t.publicRpcUrl,
                      },
                    })
                : e,
            {}
          )
        ),
        Gi = (0, $i.S1)({
          wallets:
            ("true" !== window.localStorage.DEBUG &&
              "snx" !== window.localStorage.DEBUG?.slice(0, 3)) ||
            !window.$magicWallet
              ? [
                  (0, qi.Z)(),
                  (0, Ri.ZP)({
                    displayUnavailable: [Ri.lN.MetaMask, Ri.lN.Trust],
                  }),
                  (0, Ui.Z)({
                    appUrl: "https://liquidity.synthetix.eth.limo",
                    email: "info@synthetix.io",
                  }),
                  (0, Bi.Z)({
                    projectId: "d6eac005846a1c3be1f8eea3a294eed9",
                    walletConnectVersion: 2,
                  }),
                  (0, Wi.Z)({
                    version: 2,
                    projectId: "d6eac005846a1c3be1f8eea3a294eed9",
                    dappUrl: "liquidity.synthetix.eth.limo",
                  }),
                  (0, Zi.Z)(),
                ]
              : [(0, Ri.ZP)()],
          chains: Vi,
          appMetadata: { ...G.EY, name: "Synthetix Liquidity" },
          accountCenter: { desktop: { enabled: !1 }, mobile: { enabled: !1 } },
          notify: { enabled: !1 },
        }),
        _i = new y.QueryClient({
          defaultOptions: {
            queries: {
              retry: !1,
              refetchInterval: !1,
              staleTime: f.yq,
              refetchOnWindowFocus: !1,
              throwOnError: (e) => (console.error(e), !1),
            },
            mutations: {
              retry: !1,
              throwOnError: (e) => (console.error(e), !1),
            },
          },
        }),
        Qi = (0, o.B1)({
          ...x,
          components: {
            ...x.components,
            Progress: {
              parts: ["filledTrack", "track"],
              baseStyle: { track: { overflow: "unset", bg: "whiteAlpha.100" } },
              variants: {
                error: (e) => ({
                  filledTrack: {
                    bg: "error",
                    boxShadow: `0px 0px 15px ${e.theme.colors.error}`,
                  },
                }),
                warning: (e) => ({
                  filledTrack: {
                    bg: "warning",
                    boxShadow: `0px 0px 15px ${e.theme.colors.warning}`,
                  },
                }),
                success: (e) => ({
                  filledTrack: {
                    bg: "success",
                    boxShadow: `0px 0px 15px ${e.theme.colors.success}`,
                  },
                }),
                "update-error": () => ({ filledTrack: { bg: "red.700" } }),
                "update-warning": () => ({ filledTrack: { bg: "orange.700" } }),
                "update-success": () => ({ filledTrack: { bg: "green.700" } }),
                white: { filledTrack: { bg: "white", borderRadius: "full" } },
              },
            },
          },
        });
      function Yi() {
        const { colorMode: e, toggleColorMode: t } = (0, s.If)();
        return (
          (0, n.useEffect)(() => {
            "light" === e && t();
          }, [e, t]),
          null
        );
      }
      const Ki = () => {
          const e =
            "true" === localStorage.getItem(f.sO.TERMS_CONDITIONS_ACCEPTED);
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(nt.Z, {
                children: [
                  (0, m.jsx)("meta", {
                    property: "og:url",
                    content: "https://liquidity.synthetix.eth.limo/",
                  }),
                  (0, m.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, m.jsx)("meta", {
                    property: "og:title",
                    content: "Synthetix | Liquidity",
                  }),
                  (0, m.jsx)("meta", {
                    property: "og:description",
                    content:
                      "The Liquidity Layer of DeFi. Provide liquidity for the next generation of permissionless protocols",
                  }),
                  (0, m.jsx)("meta", {
                    property: "og:image",
                    content:
                      "https://liquidity.synthetix.eth.limo/Liquidity.jpg",
                  }),
                  (0, m.jsx)("meta", {
                    property: "og:image:alt",
                    content: "Synthetix | Liquidity",
                  }),
                  (0, m.jsx)("meta", { property: "og:site_name", content: "" }),
                  (0, m.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, m.jsx)("meta", {
                    name: "twitter:site",
                    content: "@synthetix_io",
                  }),
                  (0, m.jsx)("meta", {
                    name: "twitter:creator",
                    content: "@synthetix_io",
                  }),
                  (0, m.jsx)("meta", {
                    name: "twitter:image",
                    content:
                      "https://liquidity.synthetix.eth.limo/Liquidity.jpg",
                  }),
                  (0, m.jsx)("meta", {
                    name: "twitter:url",
                    content: "https://liquidity.synthetix.eth.limo/",
                  }),
                ],
              }),
              (0, m.jsx)(y.QueryClientProvider, {
                client: _i,
                children: (0, m.jsx)($i.jA, {
                  web3Onboard: Gi,
                  children: (0, m.jsxs)(l.x, {
                    theme: Qi,
                    children: [
                      (0, m.jsx)(Yi, {}),
                      (0, m.jsx)(g, {}),
                      (0, m.jsx)(b.G2, {
                        children: (0, m.jsxs)(i.UT, {
                          children: [
                            (0, m.jsx)(T, { defaultOpen: !e }),
                            (0, m.jsx)(Hi, {}),
                          ],
                        }),
                      }),
                      (0, m.jsx)(j.t, {}),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Xi = document.querySelector("#app");
      async function Ji() {
        if (!Xi) throw new Error("Container #app does not exist");
        if (
          "true" === window.localStorage.DEBUG ||
          "snx" === window.localStorage.DEBUG?.slice(0, 3)
        ) {
          const { Wei: e } = await Promise.resolve().then(
              a.t.bind(a, 79929, 23)
            ),
            { ethers: t } = await Promise.all([a.e(6582), a.e(3705)]).then(
              a.bind(a, 13705)
            );
          function n(e) {
            return e.eq(t.constants.MaxUint256)
              ? "MaxUint256"
              : e.eq(t.constants.MaxInt256)
              ? "MaxInt256"
              : e.abs().gt(1e10)
              ? `wei ${parseFloat(t.utils.formatEther(`${e}`))}`
              : parseFloat(e.toString());
          }
          if (
            ((window.devtoolsFormatters = window.devtoolsFormatters ?? []),
            window.devtoolsFormatters.push({
              header: function (a) {
                return a instanceof t.BigNumber
                  ? [
                      "div",
                      { style: "color: #6ff" },
                      ["span", {}, "BigNumber("],
                      ["span", { style: "color: #ff3" }, n(a)],
                      ["span", {}, " "],
                      ["span", { style: "color: #3f3" }, a.toHexString()],
                      ["span", {}, ")"],
                    ]
                  : a instanceof e
                  ? [
                      "div",
                      { style: "color: #6ff" },
                      ["span", {}, "Wei("],
                      [
                        "span",
                        { style: "color: #ff3" },
                        n(t.BigNumber.from(a.toBN())),
                      ],
                      ["span", {}, " "],
                      [
                        "span",
                        { style: "color: #3f3" },
                        a.toBN().toHexString(),
                      ],
                      ["span", {}, ")"],
                    ]
                  : null;
              },
              hasBody: function () {
                return !1;
              },
            }),
            (window.$magicWallet = window.localStorage.MAGIC_WALLET),
            t.utils.isAddress(window.$magicWallet))
          ) {
            const i = new t.providers.JsonRpcProvider("http://127.0.0.1:8545"),
              o = await i.getNetwork();
            window.$chainId = o.chainId;
            const { getMagicProvider: s } = await Promise.resolve().then(
                a.bind(a, 908)
              ),
              l = s();
            window.ethereum = l
              ? new Proxy(l, {
                  get(e, t) {
                    switch (t) {
                      case "chainId":
                        return `0x${Number(window.$chainId).toString(16)}`;
                      case "isMetaMask":
                        return !0;
                      case "getSigner":
                        return () => l.getSigner(window.$magicWallet);
                      case "request":
                        return async ({ method: e, params: t }) => {
                          switch (e) {
                            case "eth_accounts":
                            case "eth_requestAccounts":
                              return [window.$magicWallet];
                            case "eth_chainId":
                              return `0x${Number(window.$chainId).toString(
                                16
                              )}`;
                            default:
                              try {
                                const a = await l.send(e, t);
                                return (
                                  console.log("MAGIC_WALLET", {
                                    method: e,
                                    params: t,
                                    result: a,
                                  }),
                                  a
                                );
                              } catch (a) {
                                throw (
                                  (console.log("MAGIC_WALLET", {
                                    method: e,
                                    params: t,
                                    error: a,
                                  }),
                                  a)
                                );
                              }
                          }
                        };
                      default:
                        return e[t];
                    }
                  },
                })
              : void 0;
          }
        }
        r.createRoot(Xi).render((0, m.jsx)(Ki, {}));
      }
    },
    95509: (e, t, a) => {
      const { safeLazy: r } = a(97551),
        { safeImport: n } = a(16577);
      e.exports = { safeLazy: r, safeImport: n };
    },
    97551: (e, t, a) => {
      const { lazy: r } = a(2784),
        { safeImport: n } = a(16577);
      e.exports = {
        safeLazy: function (e) {
          return r(() => n(e));
        },
      };
    },
    33196: () => {},
  },
]);
//# sourceMappingURL=app.c481aad6.js.map
