(this["webpackJsonp@backrunme/interface"] = this["webpackJsonp@backrunme/interface"] || []).push([
    [1], {
        1029: function (e, t) {},
        1056: function (e, t) {},
        1058: function (e, t) {},
        1065: function (e, t) {},
        1066: function (e, t) {},
        1157: function (e, t) {},
        1312: function (e, t) {},
        1329: function (e, t) {},
        1380: function (e, t) {},
        1488: function (e, t) {},
        1535: function (e, t) {},
        1538: function (e, t) {},
        1571: function (e, t) {},
        1768: function (e, t, n) {},
        1769: function (e, t, n) {},
        1770: function (e, t, n) {},
        1771: function (e, t, n) {},
        1772: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(76),
                i = (n(849), n(0)),
                a = n.n(i),
                o = n(135),
                c = n(101),
                s = n.n(c),
                l = n(42),
                u = n.n(l),
                d = n(23),
                p = n(116),
                b = n(50),
                f = n(12),
                h = n(15),
                m = n(2),
                j = n(3),
                g = n.n(j),
                x = n(764),
                O = n(373),
                v = n(765),
                y = n(766),
                w = n(767),
                A = n(6),
                k = n.n(A),
                I = n(38),
                C = n(9),
                T = n(11),
                E = n(17),
                N = n(18),
                S = n(522),
                M = function (e) {
                    Object(E.a)(n, e);
                    var t = Object(N.a)(n);

                    function n() {
                        var e;
                        Object(C.a)(this, n);
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(i)))._detectNetworkResult = null, e
                    }
                    return Object(T.a)(n, [{
                        key: "detectNetwork",
                        value: function () {
                            var e = Object(I.a)(k.a.mark((function e() {
                                var t;
                                return k.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null !== (t = this._detectNetworkResult) && void 0 !== t ? t : this._detectNetworkResult = this._uncachedDetectNetwork());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(S.a);

            function U(e) {
                var t = new M(e, "number" === typeof e.chainId ? e.chainId : "string" === typeof e.chainId ? parseInt(e.chainId) : "any");
                return t.pollingInterval = 15e3, t
            }
            var R, B, D = n(769),
                P = n(16),
                L = n(771),
                F = "OVERLAY_READY",
                z = (R = {}, Object(h.a)(R, m.a.MAINNET, void 0), Object(h.a)(R, m.a.ROPSTEN, "ropsten"), Object(h.a)(R, m.a.RINKEBY, "rinkeby"), Object(h.a)(R, m.a.KOVAN, "kovan"), R),
                W = function (e) {
                    Object(E.a)(r, e);
                    var t = Object(N.a)(r);

                    function r() {
                        return Object(C.a)(this, r), t.apply(this, arguments)
                    }
                    return Object(T.a)(r, [{
                        key: "activate",
                        value: function () {
                            var e = Object(I.a)(k.a.mark((function e() {
                                var t, r, i, a, o, c, s, l, u, d, p = this;
                                return k.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.fortmatic) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 3, n.e(0).then(n.t.bind(null, 1783, 7));
                                        case 3:
                                            if (t = e.sent, r = t.default, a = (i = this).apiKey, !((o = i.chainId) in z)) {
                                                e.next = 10;
                                                break
                                            }
                                            this.fortmatic = new r(a, z[o]), e.next = 11;
                                            break;
                                        case 10:
                                            throw new Error("Unsupported network ID: ".concat(o));
                                        case 11:
                                            return c = this.fortmatic.getProvider(), s = new Promise((function (e) {
                                                var t = setInterval((function () {
                                                    c.overlayReady && (clearInterval(t), p.emit(F), e())
                                                }), 200)
                                            })), e.next = 15, Promise.all([c.enable().then((function (e) {
                                                return e[0]
                                            })), s]);
                                        case 15:
                                            return l = e.sent, u = Object(P.a)(l, 1), d = u[0], e.abrupt("return", {
                                                provider: this.fortmatic.getProvider(),
                                                chainId: this.chainId,
                                                account: d
                                            });
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), r
                }(L.a),
                V = n(157),
                Y = n(312),
                G = n(77),
                J = n(14),
                q = function (e) {
                    Object(E.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e, r, i) {
                        var a;
                        return Object(C.a)(this, n), (a = t.call(this, e)).code = r, a.data = i, a
                    }
                    return n
                }(Object(Y.a)(Error)),
                Q = function e(t, n, r) {
                    var i = this;
                    Object(C.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(I.a)(k.a.mark((function e() {
                        var t, n, r, a, o, c, s, l, u, d, p, b, f, h;
                        return k.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.debug("Clearing batch", i.batch), t = i.batch, i.batch = [], i.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(i.url, {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            accept: "application/json"
                                        },
                                        body: JSON.stringify(t.map((function (e) {
                                            return e.request
                                        })))
                                    });
                                case 7:
                                    n = e.sent, e.next = 14;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(4), t.forEach((function (e) {
                                        return (0, e.reject)(new Error("Failed to send batch call"))
                                    })), e.abrupt("return");
                                case 14:
                                    if (n.ok) {
                                        e.next = 17;
                                        break
                                    }
                                    return t.forEach((function (e) {
                                        return (0, e.reject)(new q("".concat(n.status, ": ").concat(n.statusText), -32e3))
                                    })), e.abrupt("return");
                                case 17:
                                    return e.prev = 17, e.next = 20, n.json();
                                case 20:
                                    r = e.sent, e.next = 27;
                                    break;
                                case 23:
                                    return e.prev = 23, e.t1 = e.catch(17), t.forEach((function (e) {
                                        return (0, e.reject)(new Error("Failed to parse JSON response"))
                                    })), e.abrupt("return");
                                case 27:
                                    a = t.reduce((function (e, t) {
                                        return e[t.request.id] = t, e
                                    }), {}), o = Object(V.a)(r);
                                    try {
                                        for (o.s(); !(c = o.n()).done;) s = c.value, l = a[s.id], u = l.resolve, d = l.reject, p = l.request.method, "error" in s ? d(new q(null === s || void 0 === s || null === (b = s.error) || void 0 === b ? void 0 : b.message, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code, null === s || void 0 === s || null === (h = s.error) || void 0 === h ? void 0 : h.data)) : "result" in s && u ? u(s.result) : d(new q("Received unexpected JSON-RPC response to ".concat(p, " request."), -32e3, s))
                                    } catch (m) {
                                        o.e(m)
                                    } finally {
                                        o.f()
                                    }
                                    case 30:
                                    case "end":
                                        return e.stop()
                            }
                        }), e, null, [
                            [4, 10],
                            [17, 23]
                        ])
                    }))), this.sendAsync = function (e, t) {
                        i.request(e.method, e.params).then((function (n) {
                            return t(null, {
                                jsonrpc: "2.0",
                                id: e.id,
                                result: n
                            })
                        })).catch((function (e) {
                            return t(e, null)
                        }))
                    }, this.request = function () {
                        var e = Object(I.a)(k.a.mark((function e(t, n) {
                            var r, a;
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", i.request(t.method, t.params));
                                    case 2:
                                        if ("eth_chainId" !== t) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", "0x".concat(i.chainId.toString(16)));
                                    case 4:
                                        return a = new Promise((function (e, r) {
                                            i.batch.push({
                                                request: {
                                                    jsonrpc: "2.0",
                                                    id: i.nextId++,
                                                    method: t,
                                                    params: n
                                                },
                                                resolve: e,
                                                reject: r
                                            })
                                        })), i.batchTimeoutId = null !== (r = i.batchTimeoutId) && void 0 !== r ? r : setTimeout(i.clearBatch, i.batchWaitTimeMs), e.abrupt("return", a);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t, n) {
                            return e.apply(this, arguments)
                        }
                    }(), this.chainId = t, this.url = n;
                    var a = new URL(n);
                    this.host = a.host, this.path = a.pathname, this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50
                },
                H = function (e) {
                    Object(E.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e) {
                        var r, i = e.urls,
                            a = e.defaultChainId;
                        return Object(C.a)(this, n), Object(J.a)(a || 1 === Object.keys(i).length, "defaultChainId is a required argument with >1 url"), (r = t.call(this, {
                            supportedChainIds: Object.keys(i).map((function (e) {
                                return Number(e)
                            }))
                        })).providers = void 0, r.currentChainId = void 0, r.currentChainId = a || Number(Object.keys(i)[0]), r.providers = Object.keys(i).reduce((function (e, t) {
                            return e[Number(t)] = new Q(Number(t), i[Number(t)]), e
                        }), {}), r
                    }
                    return Object(T.a)(n, [{
                        key: "provider",
                        get: function () {
                            return this.providers[this.currentChainId]
                        }
                    }, {
                        key: "activate",
                        value: function () {
                            var e = Object(I.a)(k.a.mark((function e() {
                                return k.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function () {
                            var e = Object(I.a)(k.a.mark((function e() {
                                return k.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function () {
                            var e = Object(I.a)(k.a.mark((function e() {
                                return k.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function () {
                            var e = Object(I.a)(k.a.mark((function e() {
                                return k.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function () {}
                    }]), n
                }(G.AbstractConnector),
                X = n.p + "static/media/logo.4a50b488.svg",
                K = n(772),
                Z = n(773),
                _ = n(774),
                $ = "17e7f334ef104d85b3b4fe4305af43f7",
                ee = "pk_live_F937DF033A1666BF",
                te = "c0e2bf01-4b08-4fd5-ac7b-8e26b58cd236";
            var ne, re = (B = {}, Object(h.a)(B, m.a.MAINNET, "https://mainnet.infura.io/v3/".concat($)), Object(h.a)(B, m.a.RINKEBY, "https://rinkeby.infura.io/v3/".concat($)), Object(h.a)(B, m.a.ROPSTEN, "https://ropsten.infura.io/v3/".concat($)), Object(h.a)(B, m.a.G\u00d6RLI, "https://goerli.infura.io/v3/".concat($)), Object(h.a)(B, m.a.KOVAN, "https://kovan.infura.io/v3/".concat($)), B),
                ie = [m.a.MAINNET, m.a.RINKEBY, m.a.ROPSTEN, m.a.KOVAN, m.a.G\u00d6RLI],
                ae = new H({
                    urls: re,
                    defaultChainId: m.a.MAINNET
                });

            function oe() {
                var e;
                return ne = null !== (e = ne) && void 0 !== e ? e : U(ae.provider)
            }
            var ce, se, le, ue, de, pe, be, fe, he, me = new x.a({
                    supportedChainIds: ie
                }),
                je = new O.a({
                    supportedChainIds: ie,
                    infuraId: $,
                    bridge: "https://uniswap.bridge.walletconnect.org",
                    qrcode: !0
                }),
                ge = new W({
                    apiKey: ee,
                    chainId: 1
                }),
                xe = new y.a({
                    dAppId: te,
                    networks: [1, 4]
                }),
                Oe = new v.a({
                    url: re[m.a.MAINNET],
                    appName: "BacknRunMe",
                    appLogoUrl: X,
                    supportedChainIds: [1, 4]
                }),
                ve = new w.a({
                    chainId: m.a.MAINNET
                }),
                ye = new K.BscConnector({
                    supportedChainIds: ie
                }),
                we = (new D.a({
                    chainId: m.a.MAINNET,
                    url: re[m.a.MAINNET],
                    appName: "DexGuard"
                }), new Z.a({
                    supportedChainIds: ie
                }), new _.KeystoneConnector({
                    chainId: m.a.MAINNET
                }), n(37)),
                Ae = n.p + "static/media/arrow-right.956d575c.svg",
                ke = n.p + "static/media/metamask.02e3ec27.png",
                Ie = n.p + "static/media/walletConnectIcon.304e3277.svg",
                Ce = n.p + "static/media/coinbaseWalletIcon.a3a7d7fd.svg",
                Te = n.p + "static/media/torus.4d5873f7.svg",
                Ee = (new Map([
                    [2, "# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n"]
                ]), ce = {}, Object(h.a)(ce, m.a.MAINNET, "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"), Object(h.a)(ce, m.a.ROPSTEN, "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"), Object(h.a)(ce, m.a.KOVAN, "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"), Object(h.a)(ce, m.a.RINKEBY, "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"), Object(h.a)(ce, m.a.G\u00d6RLI, "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"), ce),
                Ne = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                Se = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                Me = "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
                Ue = "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303",
                Re = (se = {}, Object(h.a)(se, m.a.MAINNET, [{
                    name: "Uniswap",
                    router: Ne,
                    factory: Se,
                    initCodeHash: Me,
                    pairExplorerPrefix: "https://info.uniswap.org/pair/"
                }, {
                    name: "Sushiswap",
                    router: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
                    factory: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
                    initCodeHash: Ue,
                    pairExplorerPrefix: "https://analytics.sushi.com/pairs/"
                }]), Object(h.a)(se, m.a.RINKEBY, [{
                    name: "Uniswap",
                    router: Ne,
                    factory: Se,
                    initCodeHash: Me
                }, {
                    name: "Sushiswap",
                    router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
                    factory: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
                    initCodeHash: Ue
                }]), se),
                Be = null !== (le = "PROD") ? le : "DEV",
                De = "0x6Ab2fB1fc6f43672bE731b11Db2Ba9147B1f6add",
                Pe = Object(h.a)({}, m.a.MAINNET, "https://vkmxdva05c.execute-api.us-east-1.amazonaws.com/staging"),
                Le = (ue = {}, Object(h.a)(ue, m.a.MAINNET, De), Object(h.a)(ue, m.a.RINKEBY, "0x3234d5B32587fFF0A16994332b04cdFE7C2298aa"), ue),
                Fe = we.a.from(114e9),
                ze = (g.a.BigInt(21e3), we.a.from(25e4)),
                We = g.a.multiply(g.a.exponentiate(g.a.BigInt(10), g.a.BigInt(16)), g.a.BigInt(0)),
                Ve = new m.h(m.a.MAINNET, "0xD46bA6D942050d489DBd938a2C909A5d5039A161", 9, "AMPL", "Ampleforth"),
                Ye = new m.h(m.a.MAINNET, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18, "DAI", "Dai Stablecoin"),
                Ge = new m.h(m.a.MAINNET, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 6, "USDC", "USD//C"),
                Je = new m.h(m.a.MAINNET, "0xdAC17F958D2ee523a2206206994597C13D831ec7", 6, "USDT", "Tether USD"),
                qe = new m.h(m.a.MAINNET, "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", 8, "WBTC", "Wrapped BTC"),
                Qe = new m.h(m.a.MAINNET, "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", 18, "FEI", "Fei USD"),
                He = new m.h(m.a.MAINNET, "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B", 18, "TRIBE", "Tribe"),
                Xe = new m.h(m.a.MAINNET, "0x853d955aCEf822Db058eb8505911ED77F175b99e", 18, "FRAX", "Frax"),
                Ke = new m.h(m.a.MAINNET, "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0", 18, "FXS", "Frax Share"),
                Ze = new m.h(m.a.MAINNET, "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D", 8, "renBTC", "renBTC"),
                _e = new m.h(m.a.MAINNET, "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828", 18, "UMA", "UMA Voting Token v1"),
                $e = new m.h(m.a.MAINNET, "0xa47c8bf37f92abed4a126bda807a7b7498661acd", 18, "UST", "Wrapped UST"),
                et = new m.h(m.a.MAINNET, "0x09a3ecafa817268f77be1283176b946c4ff2e608", 18, "MIR", "Wrapped MIR"),
                tt = (de = {}, Object(h.a)(de, $e.address, [et]), Object(h.a)(de, et.address, [$e]), Object(h.a)(de, "0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84", [et, $e]), Object(h.a)(de, "0x59A921Db27Dd6d4d974745B7FfC5c33932653442", [et, $e]), Object(h.a)(de, "0x21cA39943E91d704678F5D00b6616650F066fD63", [et, $e]), Object(h.a)(de, "0xC8d674114bac90148d11D3C1d33C61835a0F9DCD", [et, $e]), Object(h.a)(de, "0x13B02c8dE71680e71F0820c996E4bE43c2F57d15", [et, $e]), Object(h.a)(de, "0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9", [et, $e]), Object(h.a)(de, "0x41BbEDd7286dAab5910a1f15d12CBda839852BD7", [et, $e]), Object(h.a)(de, "0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7", [et, $e]), Object(h.a)(de, "0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72", [et, $e]), Object(h.a)(de, "0x1d350417d9787E000cc1b95d70E9536DcD91F373", [et, $e]), Object(h.a)(de, "0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676", [et, $e]), Object(h.a)(de, "0x31c63146a635EB7465e5853020b39713AC356991", [et, $e]), Object(h.a)(de, "0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86", [et, $e]), de),
                nt = "0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F",
                rt = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                it = (pe = {}, Object(h.a)(pe, m.a.MAINNET, new m.h(m.a.MAINNET, rt, 18, "UNI", "Uniswap")), Object(h.a)(pe, m.a.RINKEBY, new m.h(m.a.RINKEBY, rt, 18, "UNI", "Uniswap")), Object(h.a)(pe, m.a.ROPSTEN, new m.h(m.a.ROPSTEN, rt, 18, "UNI", "Uniswap")), Object(h.a)(pe, m.a.G\u00d6RLI, new m.h(m.a.G\u00d6RLI, rt, 18, "UNI", "Uniswap")), Object(h.a)(pe, m.a.KOVAN, new m.h(m.a.KOVAN, rt, 18, "UNI", "Uniswap")), pe),
                at = (be = {}, Object(h.a)(be, rt, "UNI"), Object(h.a)(be, nt, "Governance"), Object(h.a)(be, "0x1a9C8182C09F50C8318d769245beA52c32BE35BC", "Timelock"), Object(h.a)({}, m.a.MAINNET, "0x090D4613473dEE047c3f2706764f49E0821D256e")),
                ot = (fe = {}, Object(h.a)(fe, m.a.MAINNET, [m.j[m.a.MAINNET]]), Object(h.a)(fe, m.a.ROPSTEN, [m.j[m.a.ROPSTEN]]), Object(h.a)(fe, m.a.RINKEBY, [m.j[m.a.RINKEBY]]), Object(h.a)(fe, m.a.G\u00d6RLI, [m.j[m.a.G\u00d6RLI]]), Object(h.a)(fe, m.a.KOVAN, [m.j[m.a.KOVAN]]), fe),
                ct = Object(f.a)(Object(f.a)({}, ot), {}, Object(h.a)({}, m.a.MAINNET, [].concat(Object(b.a)(ot[m.a.MAINNET]), [Ye, Ge, Je, qe]))),
                st = Object(h.a)({}, m.a.MAINNET, Object(f.a)(Object(f.a)({}, tt), {}, (he = {
                    "0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18": [it[m.a.MAINNET]],
                    "0x561a4717537ff4AF5c687328c0f7E90a319705C0": [it[m.a.MAINNET]],
                    "0xa6e3454fec677772dd771788a079355e43910638": [_e]
                }, Object(h.a)(he, Qe.address, [He]), Object(h.a)(he, He.address, [Qe]), Object(h.a)(he, Xe.address, [Ke]), Object(h.a)(he, Ke.address, [Xe]), Object(h.a)(he, qe.address, [Ze]), Object(h.a)(he, Ze.address, [qe]), he))),
                lt = Object(h.a)({}, m.a.MAINNET, Object(h.a)({}, Ve.address, [Ye, m.j[m.a.MAINNET]])),
                ut = Object(h.a)({}, m.a.MAINNET, [Ye, Ge, Je, qe]),
                dt = (Object(f.a)(Object(f.a)({}, ot), {}, Object(h.a)({}, m.a.MAINNET, [].concat(Object(b.a)(ot[m.a.MAINNET]), [Ye, Ge, Je, qe]))), Object(h.a)({}, m.a.MAINNET, [
                    [new m.h(m.a.MAINNET, "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643", 8, "cDAI", "Compound Dai"), new m.h(m.a.MAINNET, "0x39AA39c021dfbaE8faC545936693aC917d5E7563", 8, "cUSDC", "Compound USD Coin")],
                    [Ge, Je],
                    [Ye, Je]
                ]), {
                    INJECTED: {
                        connector: me,
                        name: "Injected",
                        iconURL: Ae,
                        description: "Injected web3 provider.",
                        href: null,
                        color: "#010101",
                        primary: !0
                    },
                    METAMASK: {
                        connector: me,
                        name: "MetaMask",
                        iconURL: ke,
                        description: "Easy-to-use browser extension.",
                        href: null,
                        color: "#E8831D",
                        mobile: !0
                    },
                    WALLET_CONNECT: {
                        connector: je,
                        name: "WalletConnect",
                        iconURL: Ie,
                        description: "Connect to Trust Wallet, Rainbow Wallet and more...",
                        href: null,
                        color: "#4196FC",
                        mobile: !0
                    },
                    WALLET_LINK: {
                        connector: Oe,
                        name: "Coinbase Wallet",
                        iconURL: Ce,
                        description: "Use Coinbase Wallet app on mobile device",
                        href: null,
                        color: "#315CF5"
                    },
                    COINBASE_LINK: {
                        name: "Coinbase Wallet",
                        iconURL: Ce,
                        description: "Open in Coinbase Wallet app.",
                        href: "https://go.cb-w.com/dapp?cb_url=".concat(window.location.href),
                        color: "#315CF5",
                        mobile: !0,
                        mobileOnly: !0
                    },
                    Torus: {
                        connector: ve,
                        name: "Torus",
                        iconURL: Te,
                        description: "Login using Torus",
                        href: null,
                        color: "#4A6C9B"
                    },
                    Binance: {
                        connector: ye,
                        name: "BinanceWallet",
                        iconURL: "data:image/jpeg;base64,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",
                        description: "Login using binanceWallet",
                        href: null,
                        color: "#4A6C9B"
                    }
                }),
                pt = "NETWORK",
                bt = 1800,
                ft = (g.a.BigInt(604800), g.a.BigInt(0), new m.f(g.a.BigInt(1), g.a.BigInt(10)), g.a.BigInt(1e4)),
                ht = new m.f(g.a.BigInt(100), ft),
                mt = new m.f(g.a.BigInt(300), ft),
                jt = new m.f(g.a.BigInt(500), ft),
                gt = new m.f(g.a.BigInt(1e3), ft),
                xt = new m.f(g.a.BigInt(1500), ft),
                Ot = g.a.exponentiate(g.a.BigInt(10), g.a.BigInt(16)),
                vt = new m.f(g.a.BigInt(50), g.a.BigInt(1e4)),
                yt = new m.f("0"),
                wt = new m.f("1"),
                At = ["0x7F367cC41522cE07553e823bf3be79A889DEbe1B", "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b", "0x901bb9583b24D97e995513C6778dc6888AB6870e", "0xA7e5d5A720f06526557c513402f2e6B5fA20b008", "0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C"],
                kt = [{
                    code: "en-US",
                    name: "EN"
                }, {
                    code: "zh-CN",
                    name: "\u4e2d\u6587"
                }];

            function It() {
                var e = Object(r.d)(),
                    t = Object(r.d)(pt);
                return e.active ? e : t
            }
            var Ct = n(1);

            function Tt(e) {
                var t = e.children,
                    n = It().account;
                return Object(i.useMemo)((function () {
                    return Boolean(n && -1 !== At.indexOf(n))
                }), [n]) ? Object(Ct.jsx)("div", {
                    children: "Blocked address"
                }) : Object(Ct.jsx)(Ct.Fragment, {
                    children: t
                })
            }
            var Et = n(235),
                Nt = n(34),
                St = n(781),
                Mt = n.n(St),
                Ut = n(782),
                Rt = n.n(Ut);
            Et.a.use(Mt.a).use(Rt.a).use(Nt.a).init({
                fallbackLng: "en-US",
                backend: {
                    loadPath: "./locales/{{lng}}.json"
                },
                react: {
                    useSuspense: !0
                },
                preload: ["en-US"],
                keySeparator: !1,
                interpolation: {
                    escapeValue: !1
                },
                detection: {
                    order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
                    caches: ["cookie"]
                }
            });
            Et.a;
            var Bt = n(10),
                Dt = n(5),
                Pt = n(75);

            function Lt(e) {
                var t = e.location,
                    n = t.pathname,
                    r = t.search;
                return Object(i.useEffect)((function () {
                    u.a.pageview("".concat(n).concat(r))
                }), [n, r]), null
            }
            var Ft, zt, Wt, Vt, Yt, Gt, Jt, qt = n(47),
                Qt = n(189),
                Ht = n(538),
                Xt = (n(1523), n(28)),
                Kt = n(783),
                Zt = Object(Qt.a)(Ht.b),
                _t = Object(Dt.default)(Zt)(Ft || (Ft = Object(Bt.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    // background-color: ", ";\n    background-color: rgba(2, 0, 25, 0.72);\n  }\n"])), (function (e) {
                    return e.theme.modalBG
                })),
                $t = Object(Qt.a)(Ht.a),
                en = Object(Dt.default)((function (e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var t = Object(qt.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return Object(Ct.jsx)($t, Object(f.a)({}, t))
                })).attrs({
                    "aria-label": "dialog"
                })(zt || (zt = Object(Bt.a)(["\n  overflow-y: ", ";\n\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    // background-color: ", ";\n    background: #202230;\n    // border: 1px solid ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 50vw;\n    overflow-y: ", ";\n    overflow-x: hidden;\n\n    align-self: ", ";\n\n    max-width: 448px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n    ", "\n    ", "\n  }\n"])), (function (e) {
                    return e.mobile ? "scroll" : "hidden"
                }), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.d)(.95, t.shadow1)
                }), (function (e) {
                    return e.mobile ? "scroll" : "hidden"
                }), (function (e) {
                    return e.mobile ? "flex-end" : "center"
                }), (function (e) {
                    var t = e.maxHeight;
                    return t && Object(Dt.css)(Wt || (Wt = Object(Bt.a)(["\n        max-height: ", "vh;\n      "])), t)
                }), (function (e) {
                    var t = e.minHeight;
                    return t && Object(Dt.css)(Vt || (Vt = Object(Bt.a)(["\n        min-height: ", "vh;\n      "])), t)
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(Yt || (Yt = Object(Bt.a)(["\n      width: 65vw;\n      margin: 0;\n    "])))
                }), (function (e) {
                    var t = e.theme,
                        n = e.mobile;
                    return t.mediaWidth.upToSmall(Gt || (Gt = Object(Bt.a)(["\n      width:  85vw;\n      ", "\n    "])), n && Object(Dt.css)(Jt || (Jt = Object(Bt.a)(["\n          width: 100vw;\n          border-radius: 20px;\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        "]))))
                }));

            function tn(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    r = e.minHeight,
                    i = void 0 !== r && r,
                    a = e.maxHeight,
                    c = void 0 === a ? 90 : a,
                    s = e.initialFocusRef,
                    l = e.children,
                    u = Object(Qt.c)(t, null, {
                        config: {
                            duration: 200
                        },
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    }),
                    d = Object(Qt.b)((function () {
                        return {
                            y: 0,
                            config: {
                                mass: 1,
                                tension: 210,
                                friction: 20
                            }
                        }
                    })),
                    p = Object(P.a)(d, 2),
                    b = p[0].y,
                    h = p[1],
                    m = Object(Kt.a)({
                        onDrag: function (e) {
                            h({
                                y: e.down ? e.movement[1] : 0
                            }), (e.movement[1] > 300 || e.velocity > 3 && e.direction[1] > 0) && n()
                        }
                    });
                return Object(Ct.jsx)(Ct.Fragment, {
                    children: u.map((function (e) {
                        var t = e.item,
                            r = e.key,
                            a = e.props;
                        return t && Object(Ct.jsx)(_t, {
                            style: a,
                            onDismiss: n,
                            initialFocusRef: s,
                            unstable_lockFocusAcrossFrames: !1,
                            children: Object(Ct.jsxs)(en, Object(f.a)(Object(f.a)({}, o.isMobile ? Object(f.a)(Object(f.a)({}, m()), {}, {
                                style: {
                                    transform: b.interpolate((function (e) {
                                        return "translateY(".concat(e > 0 ? e : 0, "px)")
                                    }))
                                }
                            }) : {}), {}, {
                                "aria-label": "dialog content",
                                minHeight: i,
                                maxHeight: c,
                                mobile: o.isMobile,
                                children: [!s && o.isMobile ? Object(Ct.jsx)("div", {
                                    tabIndex: 1
                                }) : null, l]
                            }))
                        }, r)
                    }))
                })
            }
            var nn = Dt.default.div.withConfig({
                    componentId: "sc-1hmouly-0"
                })(["display:flex;flex-direction:column;justify-content:flex-start;"]),
                rn = Object(Dt.default)(nn).withConfig({
                    componentId: "sc-1hmouly-1"
                })(["width:100%;align-items:center;background-color:#161522;padding:18px 12px;border-radius:14px;"]),
                an = Dt.default.div.withConfig({
                    componentId: "sc-1hmouly-2"
                })(["display:grid;grid-auto-rows:auto;grid-row-gap:", ";justify-items:", ";"], (function (e) {
                    var t = e.gap;
                    return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
                }), (function (e) {
                    var t = e.justify;
                    return t && t
                })),
                on = nn,
                cn = n.p + "static/media/big_unicorn.be45c251.png",
                sn = n.p + "static/media/xl_uni.89be1dda.png",
                ln = n.p + "static/media/noise.0473ebbb.png",
                un = (Dt.default.div.withConfig({
                    componentId: "uowrog-0"
                })(["display:flex;align-items:center;justify-content:center;padding:4px 12px;border:1px solid rgba(255,255,255,0.4);border-radius:20px;width:fit-content;justify-self:flex-end;"]), Object(Dt.default)(an).withConfig({
                    componentId: "uowrog-1"
                })(["background:radial-gradient(76.02% 75.41% at 1.84% 0%,#ff007a 0%,#2172e5 100%);border-radius:12px;width:100%;position:relative;overflow:hidden;"])),
                dn = Dt.default.span.withConfig({
                    componentId: "uowrog-2"
                })(["background:url(", ");width:1000px;height:600px;position:absolute;border-radius:12px;opacity:0.4;top:-100px;left:-100px;transform:rotate(-15deg);user-select:none;", ""], cn, (function (e) {
                    return e.desaturate && "filter: saturate(0)"
                })),
                pn = Dt.default.span.withConfig({
                    componentId: "uowrog-3"
                })(["background:url(", ");width:1200px;height:1200px;position:absolute;border-radius:12px;top:-300px;left:-300px;opacity:0.4;user-select:none;", ""], sn, (function (e) {
                    return e.desaturate && "filter: saturate(0)"
                })),
                bn = Dt.default.span.withConfig({
                    componentId: "uowrog-4"
                })(["background:url(", ");background-size:cover;mix-blend-mode:overlay;border-radius:12px;width:100%;height:100%;opacity:0.15;position:absolute;top:0;left:0;user-select:none;"], ln),
                fn = Object(Dt.default)(an).withConfig({
                    componentId: "uowrog-5"
                })(["padding:1rem;z-index:1;opacity:", ";"], (function (e) {
                    return e.disabled && "0.4"
                })),
                hn = Dt.default.div.withConfig({
                    componentId: "uowrog-6"
                })(["width:100%;background-color:rgba(255,255,255,0.2);height:1px;"]),
                mn = n(272),
                jn = Object(Dt.default)(mn.Box).withConfig({
                    componentId: "sc-1o1gha5-0"
                })(["width:", ";display:flex;padding:0;align-items:", ";justify-content:", ";padding:", ";border:", ";border-radius:", ";"], (function (e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function (e) {
                    var t = e.align;
                    return null !== t && void 0 !== t ? t : "center"
                }), (function (e) {
                    var t = e.justify;
                    return null !== t && void 0 !== t ? t : "flex-start"
                }), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.border
                }), (function (e) {
                    return e.borderRadius
                })),
                gn = Object(Dt.default)(jn).withConfig({
                    componentId: "sc-1o1gha5-1"
                })(["display:flex;justify-content:space-between;"]),
                xn = (Dt.default.div.withConfig({
                    componentId: "sc-1o1gha5-2"
                })(["display:flex;align-items:flex-end;"]), Object(Dt.default)(jn).withConfig({
                    componentId: "sc-1o1gha5-3"
                })(["flex-wrap:wrap;margin:", ";justify-content:", ";color:#fff;& > *{margin:", " !important;}"], (function (e) {
                    var t = e.gap;
                    return t && "-".concat(t)
                }), (function (e) {
                    var t = e.justify;
                    return t && t
                }), (function (e) {
                    return e.gap
                }))),
                On = Object(Dt.default)(jn).withConfig({
                    componentId: "sc-1o1gha5-4"
                })(["width:fit-content;margin:", ";color:rgba(255,255,255,0.4);"], (function (e) {
                    var t = e.gap;
                    return t && "-".concat(t)
                })),
                vn = jn,
                yn = n(33),
                wn = n(51),
                An = n(387),
                kn = n.n(An),
                In = n(497),
                Cn = n(110),
                Tn = n(179),
                En = n(32),
                Nn = n(523),
                Sn = n(388),
                Mn = n(785);

            function Un(e) {
                try {
                    return Object(En.getAddress)(e)
                } catch (t) {
                    return !1
                }
            }
            var Rn = {
                1: "",
                3: "ropsten.",
                4: "rinkeby.",
                5: "goerli.",
                42: "kovan."
            };

            function Bn(e, t, n) {
                var r = "https://".concat(Rn[e] || Rn[1], "etherscan.io");
                switch (n) {
                    case "transaction":
                        return "".concat(r, "/tx/").concat(t);
                    case "token":
                        return "".concat(r, "/token/").concat(t);
                    case "block":
                        return "".concat(r, "/block/").concat(t);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(t)
                }
            }

            function Dn(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    n = Un(e);
                if (!n) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(n.substring(0, t + 2), "...").concat(n.substring(42 - t))
            }

            function Pn(e) {
                return e.mul(we.a.from(12e3)).div(we.a.from(1e4))
            }
            new m.d(1, 1);

            function Ln(e, t, n, r) {
                if (!Un(e) || e === Nn.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new Tn.b(e, t, function (e, t) {
                    return t ? function (e, t) {
                        return e.getSigner(t).connectUnchecked()
                    }(e, t) : e
                }(n, r))
            }
            var Fn = function () {
                return !0
            };

            function zn(e) {
                var t = Un(e);
                if (t) {
                    var n = t.toLowerCase();
                    return function (e) {
                        return "isToken" in e ? t === e.address : n === e.address.toLowerCase()
                    }
                }
                var r = e.toLowerCase().split(/\s+/).filter((function (e) {
                    return e.length > 0
                }));
                if (0 === r.length) return Fn;
                var i = function (e) {
                    var t = e.toLowerCase().split(/\s+/).filter((function (e) {
                        return e.length > 0
                    }));
                    return r.every((function (e) {
                        return 0 === e.length || t.some((function (t) {
                            return t.startsWith(e) || t.endsWith(e)
                        }))
                    }))
                };
                return function (e) {
                    var t = e.name,
                        n = e.symbol;
                    return Boolean(n && i(n) || t && i(t))
                }
            }
            var Wn = n(786),
                Vn = "https://www.gemini.com/uniswap/manifest.json",
                Yn = ["https://raw.githubusercontent.com/The-Blockchain-Association/sec-notice-list/master/ba-sec-list.json"],
                Gn = ["https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json", "tokenlist.aave.eth", "synths.snx.eth", "https://umaproject.org/uma.tokenlist.json", "wrapped.tokensoft.eth", "https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json", "https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json", "https://app.tryroll.com/tokens.json", "https://tokens.coingecko.com/uniswap/all.json", "defi.cmc.eth", "stablecoin.cmc.eth", "t2crtokens.eth", Vn].concat(Yn),
                Jn = [Vn],
                qn = Gn.reduce((function (e, t, n) {
                    return e[t] = n + 1, e
                }), {});

            function Qn(e, t) {
                return qn[e] && qn[t] ? qn[e] - qn[t] : 0
            }
            var Hn, Xn = n(787),
                Kn = function () {
                    function e(t, n) {
                        Object(C.a)(this, e), this.isEther = !1, this.isToken = !0, this.list = void 0, this.tokenInfo = void 0, this._checksummedAddress = null, this._tags = null, this.tokenInfo = t, this.list = n
                    }
                    return Object(T.a)(e, [{
                        key: "address",
                        get: function () {
                            if (this._checksummedAddress) return this._checksummedAddress;
                            var e = Un(this.tokenInfo.address);
                            if (!e) throw new Error("Invalid token address: ".concat(this.tokenInfo.address));
                            return this._checksummedAddress = e
                        }
                    }, {
                        key: "chainId",
                        get: function () {
                            return this.tokenInfo.chainId
                        }
                    }, {
                        key: "decimals",
                        get: function () {
                            return this.tokenInfo.decimals
                        }
                    }, {
                        key: "name",
                        get: function () {
                            return this.tokenInfo.name
                        }
                    }, {
                        key: "symbol",
                        get: function () {
                            return this.tokenInfo.symbol
                        }
                    }, {
                        key: "logoURI",
                        get: function () {
                            return this.tokenInfo.logoURI
                        }
                    }, {
                        key: "tags",
                        get: function () {
                            if (null !== this._tags) return this._tags;
                            if (!this.tokenInfo.tags) return this._tags = [];
                            var e = this.list.tags;
                            return this._tags = e ? this.tokenInfo.tags.map((function (t) {
                                return Object(f.a)(Object(f.a)({}, e[t]), {}, {
                                    id: t
                                })
                            })) : []
                        }
                    }, {
                        key: "equals",
                        value: function (e) {
                            return e.chainId === this.chainId && e.address.toLowerCase() === this.address.toLowerCase()
                        }
                    }, {
                        key: "sortsBefore",
                        value: function (e) {
                            if (this.equals(e)) throw new Error("Addresses should not be equal");
                            return this.address.toLowerCase() < e.address.toLowerCase()
                        }
                    }]), e
                }(),
                Zn = (Hn = {}, Object(h.a)(Hn, m.a.KOVAN, {}), Object(h.a)(Hn, m.a.RINKEBY, {}), Object(h.a)(Hn, m.a.ROPSTEN, {}), Object(h.a)(Hn, m.a.G\u00d6RLI, {}), Object(h.a)(Hn, m.a.MAINNET, {}), Hn),
                _n = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function $n(e) {
                var t = null === _n || void 0 === _n ? void 0 : _n.get(e);
                if (t) return t;
                var n = e.tokens.reduce((function (t, n) {
                    var r = new Kn(n, e);
                    return void 0 !== t[r.chainId][r.address] ? (console.error(new Error("Duplicate token! ".concat(r.address))), t) : Object(f.a)(Object(f.a)({}, t), {}, Object(h.a)({}, r.chainId, Object(f.a)(Object(f.a)({}, t[r.chainId]), {}, Object(h.a)({}, r.address, {
                        token: r,
                        list: e
                    }))))
                }), Object(f.a)({}, Zn));
                return null === _n || void 0 === _n || _n.set(e, n), n
            }
            var er = $n(Wn);

            function tr() {
                return Object(d.d)((function (e) {
                    return e.lists.byUrl
                }))
            }

            function nr(e, t) {
                var n;
                return n = {}, Object(h.a)(n, m.a.MAINNET, Object(f.a)(Object(f.a)({}, e[m.a.MAINNET]), t[m.a.MAINNET])), Object(h.a)(n, m.a.RINKEBY, Object(f.a)(Object(f.a)({}, e[m.a.RINKEBY]), t[m.a.RINKEBY])), Object(h.a)(n, m.a.ROPSTEN, Object(f.a)(Object(f.a)({}, e[m.a.ROPSTEN]), t[m.a.ROPSTEN])), Object(h.a)(n, m.a.KOVAN, Object(f.a)(Object(f.a)({}, e[m.a.KOVAN]), t[m.a.KOVAN])), Object(h.a)(n, m.a.G\u00d6RLI, Object(f.a)(Object(f.a)({}, e[m.a.G\u00d6RLI]), t[m.a.G\u00d6RLI])), n
            }

            function rr(e) {
                var t = tr();
                return Object(i.useMemo)((function () {
                    return e ? e.slice().sort(Qn).reduce((function (e, n) {
                        var r, i = null === (r = t[n]) || void 0 === r ? void 0 : r.current;
                        if (!i) return e;
                        try {
                            return nr(e, $n(i))
                        } catch (a) {
                            return console.error("Could not show token list due to error", a), e
                        }
                    }), Zn) : Zn
                }), [t, e])
            }

            function ir() {
                var e;
                return null === (e = Object(d.d)((function (e) {
                    return e.lists.activeListUrls
                }))) || void 0 === e ? void 0 : e.filter((function (e) {
                    return !Yn.includes(e)
                }))
            }

            function ar() {
                var e = tr(),
                    t = ir();
                return Object.keys(e).filter((function (e) {
                    return !(null === t || void 0 === t ? void 0 : t.includes(e)) && !Yn.includes(e)
                }))
            }

            function or() {
                return nr(rr(ir()), er)
            }
            var cr, sr = n(22);
            ! function (e) {
                e[e.WALLET = 0] = "WALLET", e[e.SETTINGS = 1] = "SETTINGS", e[e.SELF_CLAIM = 2] = "SELF_CLAIM", e[e.ADDRESS_CLAIM = 3] = "ADDRESS_CLAIM", e[e.CLAIM_POPUP = 4] = "CLAIM_POPUP", e[e.MENU = 5] = "MENU", e[e.DELEGATE = 6] = "DELEGATE", e[e.VOTE = 7] = "VOTE", e[e.POOL_OVERVIEW_OPTIONS = 8] = "POOL_OVERVIEW_OPTIONS"
            }(cr || (cr = {}));
            var lr = Object(sr.b)("application/updateBlockNumber"),
                ur = Object(sr.b)("application/setOpenModal"),
                dr = Object(sr.b)("application/addPopup"),
                pr = Object(sr.b)("application/removePopup");

            function br() {
                var e = It().chainId;
                return Object(d.d)((function (t) {
                    return t.application.blockNumber[null !== e && void 0 !== e ? e : -1]
                }))
            }

            function fr(e) {
                return Object(d.d)((function (e) {
                    return e.application.openModal
                })) === e
            }

            function hr(e) {
                var t = fr(e),
                    n = Object(d.c)();
                return Object(i.useCallback)((function () {
                    return n(ur(t ? null : e))
                }), [n, e, t])
            }

            function mr() {
                return hr(cr.WALLET)
            }

            function jr() {
                var e = Object(d.c)();
                return Object(i.useCallback)((function (t) {
                    e(pr({
                        key: t
                    }))
                }), [e])
            }
            var gr = /^0x[a-fA-F0-9]{40}$/,
                xr = /^0x[a-f0-9]*$/;

            function Or(e) {
                if (!gr.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!xr.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                var t = "".concat(e.address, "-").concat(e.callData);
                if (e.gasRequired) {
                    if (!Number.isSafeInteger(e.gasRequired)) throw new Error("Invalid number: ".concat(e.gasRequired));
                    t += "-".concat(e.gasRequired)
                }
                return t
            }

            function vr(e) {
                var t = e.split("-");
                if (![2, 3].includes(t.length)) throw new Error("Invalid call key: ".concat(e));
                return Object(f.a)({
                    address: t[0],
                    callData: t[1]
                }, t[2] ? {
                    gasRequired: Number.parseInt(t[2])
                } : {})
            }
            var yr = Object(sr.b)("multicall/addMulticallListeners"),
                wr = Object(sr.b)("multicall/removeMulticallListeners"),
                Ar = Object(sr.b)("multicall/fetchingMulticallResults"),
                kr = Object(sr.b)("multicall/errorFetchingMulticallResults"),
                Ir = Object(sr.b)("multicall/updateMulticallResults");

            function Cr(e) {
                return we.a.isBigNumber(e) || -1 !== ["string", "number"].indexOf(typeof e)
            }

            function Tr(e) {
                return void 0 === e || Array.isArray(e) && e.every((function (e) {
                    return Cr(e) || Array.isArray(e) && e.every(Cr)
                }))
            }
            var Er = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0
                },
                Nr = {
                    blocksPerFetch: 1 / 0
                };

            function Sr(e, t) {
                var n = It().chainId,
                    r = Object(d.d)((function (e) {
                        return e.multicall.callResults
                    })),
                    a = Object(d.c)(),
                    o = Object(i.useMemo)((function () {
                        var t, n, r;
                        return JSON.stringify(null !== (t = null === e || void 0 === e || null === (n = e.filter((function (e) {
                            return Boolean(e)
                        }))) || void 0 === n || null === (r = n.map(Or)) || void 0 === r ? void 0 : r.sort()) && void 0 !== t ? t : [])
                    }), [e]);
                return Object(i.useEffect)((function () {
                    var e = JSON.parse(o);
                    if (n && 0 !== e.length) {
                        var r = e.map((function (e) {
                            return vr(e)
                        }));
                        return a(yr({
                                chainId: n,
                                calls: r,
                                options: t
                            })),
                            function () {
                                a(wr({
                                    chainId: n,
                                    calls: r,
                                    options: t
                                }))
                            }
                    }
                }), [n, a, t, o]), Object(i.useMemo)((function () {
                    return e.map((function (e) {
                        var t;
                        if (!n || !e) return Er;
                        var i, a = null === (t = r[n]) || void 0 === t ? void 0 : t[Or(e)];
                        return (null === a || void 0 === a ? void 0 : a.data) && "0x" !== (null === a || void 0 === a ? void 0 : a.data) && (i = a.data), {
                            valid: !0,
                            data: i,
                            blockNumber: null === a || void 0 === a ? void 0 : a.blockNumber
                        }
                    }))
                }), [r, e, n])
            }
            var Mr = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1
                },
                Ur = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1
                };

            function Rr(e, t, n, r) {
                if (!e) return Mr;
                var i = e.valid,
                    a = e.data,
                    o = e.blockNumber;
                if (!i) return Mr;
                if (i && !o) return Ur;
                if (!t || !n || !r) return Ur;
                var c = a && a.length > 2,
                    s = (null !== o && void 0 !== o ? o : 0) < r,
                    l = void 0;
                if (c && a) try {
                    l = t.decodeFunctionResult(n, a)
                } catch (u) {
                    return console.debug("Result data parsing failed", n, a), {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: s,
                        result: l
                    }
                }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: s,
                    result: l,
                    error: !c
                }
            }

            function Br(e, t, n, r, a, o) {
                var c = Object(i.useMemo)((function () {
                        return t.getFunction(n)
                    }), [t, n]),
                    s = Object(i.useMemo)((function () {
                        return c && Tr(r) ? t.encodeFunctionData(c, r) : void 0
                    }), [r, t, c]),
                    l = Sr(Object(i.useMemo)((function () {
                        return c && e && e.length > 0 && s ? e.map((function (e) {
                            return e && s ? Object(f.a)({
                                address: e,
                                callData: s
                            }, o ? {
                                gasRequired: o
                            } : {}) : void 0
                        })) : []
                    }), [e, s, c, o]), a),
                    u = br();
                return Object(i.useMemo)((function () {
                    return l.map((function (e) {
                        return Rr(e, t, c, u)
                    }))
                }), [c, l, t, u])
            }

            function Dr(e, t, n, r, a) {
                var o = Object(i.useMemo)((function () {
                        var n;
                        return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                    }), [e, t]),
                    c = Sr(Object(i.useMemo)((function () {
                        return e && o && Tr(n) ? [Object(f.a)({
                            address: e.address,
                            callData: e.interface.encodeFunctionData(o, n)
                        }, a ? {
                            gasRequired: a
                        } : {})] : []
                    }), [e, o, n, a]), r)[0],
                    s = br();
                return Object(i.useMemo)((function () {
                    return Rr(c, null === e || void 0 === e ? void 0 : e.interface, o, s)
                }), [c, e, o, s])
            }
            n(788), n(789);
            var Pr = n(389),
                Lr = n(790),
                Fr = n(390),
                zr = (n(791), n(792), n(793), n(794), n(795), n(796)),
                Wr = n(797),
                Vr = n(798),
                Yr = n(391),
                Gr = n(799),
                Jr = (n(800), n(801)),
                qr = n(802),
                Qr = n(803),
                Hr = n(804),
                Xr = (n(392), n(233));

            function Kr(e) {
                var t;
                return t = {}, Object(h.a)(t, m.a.MAINNET, e), Object(h.a)(t, m.a.ROPSTEN, e), Object(h.a)(t, m.a.KOVAN, e), Object(h.a)(t, m.a.RINKEBY, e), Object(h.a)(t, m.a.G\u00d6RLI, e), t
            }
            Kr(Xr.a), Kr("0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"), Kr("0xbfd8137f7d1516D3ea5cA83523914859ec47F573"), Kr("0xC36442b4a4522E871399CD717aBDD847Ab11FE88");
            var Zr = Kr("0xE592427A0AEce92De3Edee1F18E0157C05861564");
            Kr("0xA5644E29708357803b5A882D272c41cC0dF92B34");

            function _r(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = It(),
                    a = r.library,
                    o = r.account;
                return Object(i.useMemo)((function () {
                    if (!e || !t || !a) return null;
                    try {
                        return Ln(e, t, a, n && o ? o : void 0)
                    } catch (r) {
                        return console.error("Failed to get contract", r), null
                    }
                }), [e, t, a, n, o])
            }

            function $r(e, t) {
                return _r(e, Yr, t)
            }

            function ei(e) {
                var t, n = It().chainId;
                if (n) switch (n) {
                    case m.a.MAINNET:
                    case m.a.G\u00d6RLI:
                    case m.a.ROPSTEN:
                    case m.a.RINKEBY:
                        t = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                }
                return _r(t, Vr, e)
            }

            function ti(e, t) {
                return _r(e, Wr, t)
            }

            function ni() {
                var e = It().chainId;
                return _r(e && Ee[e], Jr, !1)
            }

            function ri() {
                var e = It().chainId;
                return _r(e ? at[e] : void 0, Lr.a, !0)
            }

            function ii(e, t) {
                var n = It().chainId,
                    r = Ri();
                return Object(i.useMemo)((function () {
                    if (!n) return {};
                    var i = Object.keys(e[n]).reduce((function (t, r) {
                        return t[r] = e[n][r].token, t
                    }), {});
                    return t ? r.reduce((function (e, t) {
                        return e[t.address] = t, e
                    }), Object(f.a)({}, i)) : i
                }), [n, r, e, t])
            }

            function ai() {
                return ii(or(), !0)
            }

            function oi() {
                return ii(function () {
                    var e = $n(Xn),
                        t = rr(Yn);
                    return Object(i.useMemo)((function () {
                        return nr(e, t)
                    }), [e, t])
                }(), !1)
            }

            function ci(e) {
                var t = Ri();
                return !!e && !!t.find((function (t) {
                    return Object(m.l)(e, t)
                }))
            }
            var si = /^0x[a-fA-F0-9]{64}$/;

            function li(e, t, n) {
                return e && e.length > 0 ? e : t && si.test(t) && 0 === Object(Cn.arrayify)(t)[31] ? Object(In.b)(t) : n
            }

            function ui(e) {
                var t = It().chainId,
                    n = ai(),
                    r = Un(e),
                    a = $r(r || void 0, !1),
                    o = function (e, t) {
                        return _r(e, Gr, t)
                    }(r || void 0, !1),
                    c = r ? n[r] : void 0,
                    s = Dr(c ? void 0 : a, "name", void 0, Nr),
                    l = Dr(c ? void 0 : o, "name", void 0, Nr),
                    u = Dr(c ? void 0 : a, "symbol", void 0, Nr),
                    d = Dr(c ? void 0 : o, "symbol", void 0, Nr),
                    p = Dr(c ? void 0 : a, "decimals", void 0, Nr);
                return Object(i.useMemo)((function () {
                    if (c) return c;
                    if (t && r) {
                        if (p.loading || u.loading || s.loading) return null;
                        var e, n, i, a;
                        if (p.result) return new m.h(t, r, p.result[0], li(null === (e = u.result) || void 0 === e ? void 0 : e[0], null === (n = d.result) || void 0 === n ? void 0 : n[0], "UNKNOWN"), li(null === (i = s.result) || void 0 === i ? void 0 : i[0], null === (a = l.result) || void 0 === a ? void 0 : a[0], "Unknown Token"))
                    }
                }), [r, t, p.loading, p.result, u.loading, u.result, d.result, c, s.loading, s.result, l.result])
            }

            function di(e) {
                var t = "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    n = ui(t ? void 0 : e);
                return t ? m.c : n
            }
            var pi = Object(sr.b)("user/updateMatchesDarkMode"),
                bi = Object(sr.b)("user/updateUserDarkMode"),
                fi = Object(sr.b)("user/updateUserExpertMode"),
                hi = Object(sr.b)("user/updateUserSingleHopOnly"),
                mi = Object(sr.b)("user/updateUserSlippageTolerance"),
                ji = Object(sr.b)("user/updateUserDeadline"),
                gi = Object(sr.b)("user/addSerializedToken"),
                xi = Object(sr.b)("user/removeSerializedToken"),
                Oi = Object(sr.b)("user/addSerializedPair"),
                vi = Object(sr.b)("user/removeSerializedPair"),
                yi = Object(sr.b)("app/toggleURLWarning"),
                wi = Object(sr.b)("user/updateUserUnderlyingExchange"),
                Ai = Object(sr.b)("user/updateUserGasPrice"),
                ki = Object(sr.b)("user/updateUserGasEstimateManualOverride"),
                Ii = Object(sr.b)("user/updateUserTipManualOverride"),
                Ci = Object(sr.b)("user/updateUserGasEstimate");

            function Ti(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name
                }
            }

            function Ei(e) {
                return new m.h(e.chainId, e.address, e.decimals, e.symbol, e.name)
            }

            function Ni() {
                var e = Object(d.d)((function (e) {
                        var t = e.user,
                            n = t.matchesDarkMode;
                        return {
                            userDarkMode: t.userDarkMode,
                            matchesDarkMode: n
                        }
                    }), d.b),
                    t = e.userDarkMode,
                    n = e.matchesDarkMode;
                return null === t ? n : t
            }

            function Si() {
                var e = Object(d.c)(),
                    t = Object(d.d)((function (e) {
                        return e.user.userExpertMode
                    })),
                    n = Object(i.useCallback)((function () {
                        e(fi({
                            userExpertMode: !t
                        }))
                    }), [t, e]);
                return [t, n]
            }

            function Mi() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.user.userSingleHopOnly
                })), Object(i.useCallback)((function (t) {
                    e(hi({
                        userSingleHopOnly: t
                    }))
                }), [e])]
            }

            function Ui() {
                var e = Object(d.d)((function (e) {
                    return e.user.userSlippageTolerance
                }));
                return Object(i.useMemo)((function () {
                    return "auto" === e ? "auto" : new m.f(e, 1e4)
                }), [e])
            }

            function Ri() {
                var e = It().chainId,
                    t = Object(d.d)((function (e) {
                        return e.user.tokens
                    }));
                return Object(i.useMemo)((function () {
                    var n;
                    return e ? Object.values(null !== (n = null === t || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : {}).map(Ei) : []
                }), [t, e])
            }

            function Bi() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.user.userUnderlyingExchange
                })), Object(i.useCallback)((function (t) {
                    e(wi({
                        userUnderlyingExchange: t
                    }))
                }), [e])]
            }

            function Di() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.user.userGasPrice
                })), Object(i.useCallback)((function (t) {
                    e(Ai({
                        userGasPrice: t
                    }))
                }), [e])]
            }

            function Pi() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.user.userGasEstimateManualOverride
                })), Object(i.useCallback)((function (t) {
                    e(ki({
                        userGasEstimateManualOverride: t
                    }))
                }), [e])]
            }

            function Li() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.user.userTipManualOverride
                })), Object(i.useCallback)((function (t) {
                    e(Ii({
                        userTipManualOverride: t
                    }))
                }), [e])]
            }

            function Fi() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.user.userGasEstimate
                })), Object(i.useCallback)((function (t) {
                    e(Ci({
                        userGasEstimate: t
                    })), console.log("Using gas limit: " + t)
                }), [e])]
            }
            var zi, Wi, Vi, Yi, Gi, Ji, qi, Qi, Hi, Xi, Ki, Zi, _i, $i, ea, ta, na, ra, ia, aa, oa, ca, sa, la, ua = n(1791),
                da = n(1792),
                pa = n(1793),
                ba = n(1794),
                fa = Dt.default.button(zi || (zi = Object(Bt.a)(["\n  outline: none;\n  border: none;\n  font-size: inherit;\n  padding: 0;\n  margin: 0;\n  background: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.7;\n  }\n\n  :focus {\n    text-decoration: underline;\n  }\n"]))),
                ha = (Dt.default.button.attrs((function (e) {
                    var t = e.warning,
                        n = e.theme;
                    return {
                        backgroundColor: t ? n.red1 : n.primary1
                    }
                }))(Wi || (Wi = Object(Bt.a)(["\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  :disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n  }\n"])), (function (e) {
                    return e.backgroundColor
                }), (function (e) {
                    return e.theme.white
                }), (function (e) {
                    var t = e.backgroundColor;
                    return Object(Xt.a)(.05, t)
                }), (function (e) {
                    var t = e.backgroundColor;
                    return Object(Xt.a)(.1, t)
                }), (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    return e.theme.text4
                })), Object(Dt.default)(ua.a)(Vi || (Vi = Object(Bt.a)(["\n  color: #fff;\n  cursor: pointer;\n"])))),
                ma = Dt.default.div(Yi || (Yi = Object(Bt.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  margin-right: ", ";\n  margin-left: ", ";\n  & > * {\n    stroke: ", ";\n  }\n"])), (function (e) {
                    var t = e.size;
                    return null !== t && void 0 !== t ? t : "20px"
                }), (function (e) {
                    var t = e.size;
                    return null !== t && void 0 !== t ? t : "20px"
                }), (function (e) {
                    var t = e.marginRight;
                    return null !== t && void 0 !== t ? t : 0
                }), (function (e) {
                    var t = e.marginLeft;
                    return null !== t && void 0 !== t ? t : 0
                }), (function (e) {
                    var t = e.theme,
                        n = e.stroke;
                    return null !== n && void 0 !== n ? n : t.blue1
                })),
                ja = Dt.default.button(Gi || (Gi = Object(Bt.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function (e) {
                    return e.disabled ? "default" : "pointer"
                }), (function (e) {
                    var t = e.theme;
                    return e.disabled ? t.text2 : t.primary1
                }), (function (e) {
                    return e.disabled ? null : "underline"
                }), (function (e) {
                    return e.disabled ? null : "underline"
                })),
                ga = Object(Dt.default)(p.b)(Ji || (Ji = Object(Bt.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function (e) {
                    return e.theme.primary1
                })),
                xa = Dt.default.a(qi || (qi = Object(Bt.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  // color: ", ";\n  color: #3D6FEC;\n  font-weight: 500;\n\n  :hover {\n    // text-decoration: underline;\n    color: #3D6FEC;\n  }\n\n  // :focus {\n  //   outline: none;\n  //   text-decoration: underline;\n  // }\n\n  // :active {\n  //   text-decoration: none;\n  // }\n"])), (function (e) {
                    return e.theme.primary1
                })),
                Oa = Dt.default.a(Qi || (Qi = Object(Bt.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  :hover {\n    text-decoration: none;\n    opacity: 0.7;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: none;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]))),
                va = Object(Dt.default)(da.a)(Hi || (Hi = Object(Bt.a)(["\n  height: 16px;\n  width: 18px;\n  margin-left: 10px;\n  stroke: ", ";\n"])), (function (e) {
                    return e.theme.blue1
                })),
                ya = Object(Dt.default)(pa.a)(Xi || (Xi = Object(Bt.a)(["\n  height: 16px;\n  width: 18px;\n  margin-left: 10px;\n  stroke: ", ";\n\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  :hover {\n    opacity: 0.7;\n  }\n"])), (function (e) {
                    return e.theme.text3
                })),
                wa = Object(Dt.keyframes)(Ki || (Ki = Object(Bt.a)(["\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n"]))),
                Aa = Dt.default.img(Zi || (Zi = Object(Bt.a)(["\n  animation: ", " 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n  padding: 2rem 0 0 0;\n  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));\n"])), wa);

            function ka(e) {
                var t = e.target,
                    n = void 0 === t ? "_blank" : t,
                    r = e.href,
                    a = e.rel,
                    o = void 0 === a ? "noopener noreferrer" : a,
                    c = Object(qt.a)(e, ["target", "href", "rel"]),
                    s = Object(i.useCallback)((function (e) {
                        "_blank" === n || e.ctrlKey || e.metaKey ? u.a.outboundLink({
                            label: r
                        }, (function () {
                            console.debug("Fired outbound link event", r)
                        })) : (e.preventDefault(), u.a.outboundLink({
                            label: r
                        }, (function () {
                            window.location.href = r
                        })))
                    }), [r, n]);
                return Object(Ct.jsx)(xa, Object(f.a)({
                    target: n,
                    rel: o,
                    href: r,
                    onClick: s
                }, c))
            }

            function Ia(e) {
                var t = e.target,
                    n = void 0 === t ? "_blank" : t,
                    r = e.href,
                    a = e.rel,
                    o = void 0 === a ? "noopener noreferrer" : a,
                    c = Object(qt.a)(e, ["target", "href", "rel"]),
                    s = Object(i.useCallback)((function (e) {
                        "_blank" === n || e.ctrlKey || e.metaKey ? u.a.outboundLink({
                            label: r
                        }, (function () {
                            console.debug("Fired outbound link event", r)
                        })) : (e.preventDefault(), u.a.outboundLink({
                            label: r
                        }, (function () {
                            window.location.href = r
                        })))
                    }), [r, n]);
                return Object(Ct.jsx)(Oa, Object(f.a)(Object(f.a)({
                    target: n,
                    rel: o,
                    href: r,
                    onClick: s
                }, c), {}, {
                    children: Object(Ct.jsx)(va, {})
                }))
            }
            var Ca = Object(Dt.keyframes)(_i || (_i = Object(Bt.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                Ta = Dt.default.img($i || ($i = Object(Bt.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"])), Ca);
            Object(Dt.default)(ga)(ea || (ea = Object(Bt.a)(["\n  color: ", ";\n"])), (function (e) {
                return e.theme.text1
            }));
            var Ea, Na, Sa, Ma, Ua, Ra, Ba, Da = Object(Dt.default)(Ta)(ta || (ta = Object(Bt.a)(["\n  height: ", ";\n  width: ", ";\n"])), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                })),
                Pa = (Dt.default.span(na || (na = Object(Bt.a)(["\n  ", ";\n"])), (function (e) {
                    return e.theme.mediaWidth.upToSmall(ra || (ra = Object(Bt.a)(["\n    display: none;\n  "])))
                })), Dt.default.span(ia || (ia = Object(Bt.a)(["\n  ", ";\n"])), (function (e) {
                    return e.theme.mediaWidth.upToExtraSmall(aa || (aa = Object(Bt.a)(["\n    display: none;\n  "])))
                })), Dt.default.span(oa || (oa = Object(Bt.a)(["\n  display: none;\n  ", ";\n"])), (function (e) {
                    return e.theme.mediaWidth.upToSmall(ca || (ca = Object(Bt.a)(["\n    display: block;\n  "])))
                })), Dt.default.span(sa || (sa = Object(Bt.a)(["\n  display: none;\n  ", ";\n"])), (function (e) {
                    return e.theme.mediaWidth.upToExtraSmall(la || (la = Object(Bt.a)(["\n    display: block;\n  "])))
                })), {
                    upToExtraSmall: 500,
                    upToSmall: 720,
                    upToMedium: 960,
                    upToLarge: 1280
                }),
                La = Object.keys(Pa).reduce((function (e, t) {
                    return e[t] = function (e, n, r) {
                        return Object(Dt.css)(Ea || (Ea = Object(Bt.a)(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "])), Pa[t], Object(Dt.css)(e, n, r))
                    }, e
                }), {});

            function Fa(e) {
                return {
                    white: "#FFFFFF",
                    black: "#000000",
                    text1: e ? "#FFFFFF" : "#000000",
                    text2: e ? "#C3C5CB" : "#565A69",
                    text3: e ? "#6C7284" : "#888D9B",
                    text4: e ? "#565A69" : "#C3C5CB",
                    text5: e ? "#2C2F36" : "#EDEEF2",
                    bg0: e ? "#161521" : "#202231",
                    bg1: e ? "#121212" : "#FFFFFF",
                    bg2: e ? "#2C2F36" : "#FFFFFF",
                    bg3: e ? "#40444F" : "#FFFFFF",
                    bg4: e ? "#565A69" : "#888D9B",
                    bg5: e ? "#6C7284" : "#888D9B",
                    bg6: e ? "#1A2028" : "#6C7284",
                    modalBG: e ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
                    advancedBG: e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",
                    primary1: "#161521",
                    primary2: "#2663AC",
                    primary3: "#2663AC",
                    primary4: "#2663AC",
                    primary5: "#2663AC",
                    primaryText1: e ? "#6da8ff" : "#FFFFFF",
                    secondary1: e ? "#2172E5" : "#ff007a",
                    secondary2: e ? "#17000b26" : "#F6DDE8",
                    secondary3: e ? "#17000b26" : "#FDEAF1",
                    red1: "#FD4040",
                    red2: "#F82D3A",
                    red3: "#D60000",
                    green1: "#27AE60",
                    yellow1: "#e3a507",
                    yellow2: "#ff8f00",
                    yellow3: "#F3B71E",
                    blue1: "#2172E5",
                    blue2: "#5199FF",
                    error: "#FD4040",
                    success: "#27AE60",
                    warning: "#ff8f00"
                }
            }

            function za(e) {
                var t = e.children,
                    n = Ni(),
                    r = Object(i.useMemo)((function () {
                        return function (e) {
                            return Object(f.a)(Object(f.a)({}, Fa(e)), {}, {
                                grids: {
                                    sm: 8,
                                    md: 12,
                                    lg: 24
                                },
                                shadow1: e ? "#000" : "#2F80ED",
                                mediaWidth: La,
                                flexColumnNoWrap: Object(Dt.css)(Na || (Na = Object(Bt.a)(["\n      display: flex;\n      flex-flow: column nowrap;\n    "]))),
                                flexRowNoWrap: Object(Dt.css)(Sa || (Sa = Object(Bt.a)(["\n      display: flex;\n      flex-flow: row nowrap;\n    "])))
                            })
                        }(n)
                    }), [n]);
                return Object(Ct.jsx)(Dt.ThemeProvider, {
                    theme: r,
                    children: t
                })
            }
            var Wa = Object(Dt.default)(yn.b)(Ma || (Ma = Object(Bt.a)(["\n  color: ", ";\n"])), (function (e) {
                    var t = e.color;
                    return e.theme[t]
                })),
                Va = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: "#fff"
                    }, e))
                },
                Ya = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: "primary1"
                    }, e))
                },
                Ga = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 600,
                        color: "text1"
                    }, e))
                },
                Ja = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: "text1"
                    }, e))
                },
                qa = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: "white"
                    }, e))
                },
                Qa = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 400,
                        fontSize: 16,
                        color: "text1"
                    }, e))
                },
                Ha = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 600,
                        fontSize: 24
                    }, e))
                },
                Xa = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        fontSize: 20
                    }, e))
                },
                Ka = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 400,
                        fontSize: 14
                    }, e))
                },
                Za = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        fontSize: 11
                    }, e))
                },
                _a = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: "blue1"
                    }, e))
                },
                $a = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: "text3"
                    }, e))
                },
                eo = function (e) {
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        fontSize: 12,
                        fontStyle: "italic",
                        color: "text2"
                    }, e))
                },
                to = function (e) {
                    var t = e.error,
                        n = Object(qt.a)(e, ["error"]);
                    return Object(Ct.jsx)(Wa, Object(f.a)({
                        fontWeight: 500,
                        color: t ? "red1" : "text2"
                    }, n))
                },
                no = Dt.default.div(Ua || (Ua = Object(Bt.a)(["\n  position: fixed;\n  top: 0;\n  left: calc(-100vw / 2);\n  right: 0;\n  pointer-events: none;\n  /* max-width: 100vw !important; */\n  width: 200vw;\n  height: 200vh;\n  mix-blend-mode: color;\n  // background: ", ";\n  transform: translateY(-100vh);\n  will-change: background;\n  transition: background 450ms ease;\n"])), (function (e) {
                    var t = e.backgroundColor;
                    return "radial-gradient(50% 50% at 50% 50%, ".concat(t || "#AFCBD9", " 0%, rgba(255, 255, 255, 0) 100%)")
                })),
                ro = Object(Dt.createGlobalStyle)(Ra || (Ra = Object(Bt.a)(["\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n a {\n   color: ", "; \n }\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-feature-settings: 'ss01' on, 'ss02' on,  'cv01' on, 'cv03' on;\n  \n}\n"])), Fa(!1).blue1),
                io = Object(Dt.createGlobalStyle)(Ba || (Ba = Object(Bt.a)(["\nhtml {\n  color: ", ";\n  // background-color: ", ";\n}\n\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n\n}\n"])), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg1
                })),
                ao = (n(1795), n(1796));

            function oo() {
                return Object(i.useContext)(Dt.ThemeContext)
            }
            var co = Object(Dt.default)(mn.Button).withConfig({
                    componentId: "sc-15q9f5y-0"
                })(["padding:", ";width:", ";font-weight:500;text-align:center;border-radius:20px;border-radius:", ";outline:none;border:1px solid transparent;color:white;text-decoration:none;display:flex;justify-content:center;flex-wrap:nowrap;align-items:center;cursor:pointer;position:relative;z-index:1;&:disabled{cursor:auto;pointer-events:none;}will-change:transform;transition:transform 450ms ease;transform:perspective(1px) translateZ(0);&:hover{transform:scale(0.99);}> *{user-select:none;}> a{text-decoration:none;}"], (function (e) {
                    var t = e.padding;
                    return t || "16px"
                }), (function (e) {
                    var t = e.width;
                    return t || "100%"
                }), (function (e) {
                    var t = e.borderRadius;
                    return t && t
                })),
                so = Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-1"
                })(["background-color:", ";background:linear-gradient(-45deg,#BC29BB 0%,#315ECF 100%) !important;color:white;border:0;border-radius:10px;&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";background:linear-gradient(-45deg,#BC29BB 0%,#315ECF 100%) !important;}&:hover{background-color:", ";background:linear-gradient(-45deg,#BC29BB 0%,#315ECF 100%) !important;}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";background:linear-gradient(-45deg,#BC29BB 0%,#315ECF 100%) !important;}&:disabled{background:", ";border:0;color:white;cursor:auto;box-shadow:none;border:1px solid transparent;outline:none;opacity:0.4;opacity:", ";}"], (function (e) {
                    return e.theme.primary1
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.primary1)
                }), (function (e) {
                    e.theme, e.altDisabledStyle, e.disabled;
                    return "#AAAAAA !important"
                }), (function (e) {
                    return e.altDisabledStyle ? "0.5" : "0.4"
                })),
                lo = Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-2"
                })(["background:linear-gradient(-270deg,#315ECF 0%,#BC29BB 100%);border-radius:10px;color:#fff;border:0;font-size:16px;font-weight:500;border-radius:10px;&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";background:#161521;background:linear-gradient(-270deg,#315ECF 0%,#BC29BB 100%);}&:hover{background-color:", ";background:#161521;background:linear-gradient(-270deg,#315ECF 0%,#BC29BB 100%);}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";background:#161521;background:linear-gradient(-270deg,#315ECF 0%,#BC29BB 100%);}:disabled{opacity:0.4;:hover{cursor:auto;background-color:", ";box-shadow:none;border:1px solid transparent;outline:none;}}"], (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.03, t.primary5)
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.03, t.primary5)
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.03, t.primary5)
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.05, t.primary5)
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.05, t.primary5)
                }), (function (e) {
                    return e.theme.primary5
                })),
                uo = Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-3"
                })(["background-color:", ";color:", ";font-size:16px;font-weight:500;&:focus{background-color:", ";}&:hover{background-color:", ";}&:active{background-color:", ";}"], (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    return e.theme.text2
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.05, t.bg2)
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.05, t.bg2)
                }), (function (e) {
                    var t = e.theme;
                    return !e.disabled && Object(Xt.a)(.1, t.bg2)
                })),
                po = Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-4"
                })(["border:1px solid ", ";color:", ";background-color:transparent;font-size:16px;border-radius:12px;padding:", ";&:focus{box-shadow:0 0 0 1pt ", ";border:1px solid ", ";}&:hover{border:1px solid ", ";}&:active{box-shadow:0 0 0 1pt ", ";border:1px solid ", ";}&:disabled{opacity:50%;cursor:auto;}a:hover{text-decoration:none;}"], (function (e) {
                    return e.theme.primary4
                }), (function (e) {
                    return e.theme.primary1
                }), (function (e) {
                    var t = e.padding;
                    return t || "10px"
                }), (function (e) {
                    return e.theme.primary4
                }), (function (e) {
                    return e.theme.primary3
                }), (function (e) {
                    return e.theme.primary3
                }), (function (e) {
                    return e.theme.primary4
                }), (function (e) {
                    return e.theme.primary3
                })),
                bo = (Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-5"
                })(["background-color:", ";color:white;&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:hover{background-color:", ";}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:disabled{background-color:", ";opacity:50%;cursor:auto;}"], (function (e) {
                    return e.theme.primary1
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.primary1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.primary1)
                }), (function (e) {
                    return e.theme.primary1
                })), Object(Dt.default)(so).withConfig({
                    componentId: "sc-15q9f5y-6"
                })(["color:white;padding:4px 8px;height:36px;font-weight:500;background-color:", ";background:radial-gradient(174.47% 188.91% at 1.84% 0%,#ff007a 0%,#2172e5 100%),#edeef2;width:fit-content;position:relative;cursor:pointer;border:none;white-space:no-wrap;:hover{opacity:0.8;}:active{opacity:0.9;}"], (function (e) {
                    return e.theme.bg3
                })), Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-7"
                })(["border:1px solid ", ";background-color:transparent;color:", ";&:focus{box-shadow:0 0 0 1px ", ";}&:hover{box-shadow:0 0 0 1px ", ";}&:active{box-shadow:0 0 0 1px ", ";}&:disabled{opacity:50%;cursor:auto;}"], (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    return e.theme.bg4
                }))),
                fo = Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-8"
                })(["background-color:transparent;color:", ";display:flex;justify-content:center;align-items:center;&:focus{text-decoration:underline;}&:hover{text-decoration:none;}&:active{text-decoration:none;}&:disabled{opacity:50%;cursor:auto;}"], (function (e) {
                    return e.theme.primary1
                })),
                ho = (Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-9"
                })(["padding:0;width:fit-content;background:none;text-decoration:none;&:focus{text-decoration:underline;}&:hover{opacity:0.9;}&:active{text-decoration:underline;}&:disabled{opacity:50%;cursor:auto;}"]), Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-10"
                })(["border:1px solid #edeef2;background-color:", ";color:black;&:focus{box-shadow:0 0 0 1pt ", ";}&:hover{box-shadow:0 0 0 1pt ", ";}&:active{box-shadow:0 0 0 1pt ", ";}&:disabled{opacity:50%;cursor:auto;}"], (function (e) {
                    return e.theme.bg1
                }), Object(Xt.a)(.05, "#edeef2"), Object(Xt.a)(.1, "#edeef2"), Object(Xt.a)(.1, "#edeef2")), Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-11"
                })(["background-color:", ";color:", ";&:disabled{background-color:", ";color:", ";cursor:auto;}"], (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.text2
                }))),
                mo = Object(Dt.default)(co).withConfig({
                    componentId: "sc-15q9f5y-12"
                })(["background-color:", ";border:1px solid ", ";&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:hover{background-color:", ";}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:disabled{opacity:50%;cursor:auto;box-shadow:none;background-color:", ";border:1px solid ", ";}"], (function (e) {
                    return e.theme.red1
                }), (function (e) {
                    return e.theme.red1
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.red1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.red1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.red1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.red1)
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.red1)
                }), (function (e) {
                    return e.theme.red1
                }), (function (e) {
                    return e.theme.red1
                }));

            function jo(e) {
                var t = e.confirmed,
                    n = e.altDisabledStyle,
                    r = Object(qt.a)(e, ["confirmed", "altDisabledStyle"]);
                return t ? Object(Ct.jsx)(ho, Object(f.a)({}, r)) : Object(Ct.jsx)(so, Object(f.a)(Object(f.a)({}, r), {}, {
                    altDisabledStyle: n
                }))
            }

            function go(e) {
                var t = e.error,
                    n = Object(qt.a)(e, ["error"]);
                return t ? Object(Ct.jsx)(mo, Object(f.a)({}, n)) : Object(Ct.jsx)(so, Object(f.a)({}, n))
            }
            Object(Dt.default)(bo).withConfig({
                componentId: "sc-15q9f5y-13"
            })(["border:1px solid;border-color:", ";"], (function (e) {
                return e.theme.primary1
            })), Dt.default.div.withConfig({
                componentId: "sc-15q9f5y-14"
            })(["height:20px;width:20px;border-radius:50%;background-color:", ";display:flex;align-items:center;justify-content:center;"], (function (e) {
                return e.theme.primary1
            })), Dt.default.div.withConfig({
                componentId: "sc-15q9f5y-15"
            })(["width:30px;padding:0 10px;position:absolute;top:10px;right:10px;"]), Object(Dt.default)(ao.a).withConfig({
                componentId: "sc-15q9f5y-16"
            })(["size:13px;"]);
            var xo = Object(sr.b)("transactions/addTransaction"),
                Oo = Object(sr.b)("transactions/clearAllTransactions"),
                vo = Object(sr.b)("transactions/finalizeTransaction"),
                yo = Object(sr.b)("transactions/checkedTransaction");

            function wo() {
                var e = It(),
                    t = e.chainId,
                    n = e.account,
                    r = Object(d.c)();
                return Object(i.useCallback)((function (e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = i.summary,
                        o = i.approval,
                        c = i.claim;
                    if (n && t) {
                        var s = e.hash;
                        if (!s) throw Error("No transaction hash found.");
                        r(xo({
                            hash: s,
                            from: n,
                            chainId: t,
                            approval: o,
                            summary: a,
                            claim: c
                        }))
                    }
                }), [r, t, n])
            }

            function Ao() {
                var e, t = It().chainId,
                    n = Object(d.d)((function (e) {
                        return e.transactions
                    }));
                return t && null !== (e = n[t]) && void 0 !== e ? e : {}
            }

            function ko(e) {
                return (new Date).getTime() - e.addedTime < 864e5
            }
            var Io = {};

            function Co(e) {
                var t = It().chainId,
                    n = "".concat(t, ":").concat(e),
                    r = Object(i.useState)({}),
                    a = Object(P.a)(r, 2),
                    o = a[0],
                    c = a[1];
                return Object(i.useEffect)((function () {
                    e && t && function (e, t) {
                        var n, r = Un(e);
                        if (!r) return Promise.reject(new Error("Invalid address"));
                        var i = "".concat(t, ":").concat(e);
                        return Io[i] = null !== (n = Io[i]) && void 0 !== n ? n : fetch("https://merkle-drop-1.uniswap.workers.dev/", {
                            body: JSON.stringify({
                                chainId: t,
                                address: r
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                "Referrer-Policy": "no-referrer"
                            },
                            method: "POST"
                        }).then((function (e) {
                            return e.ok ? e.json() : console.log("No claim for account ".concat(r, " on chain ID ").concat(t))
                        })).catch((function (e) {
                            return console.error("Failed to get claim data", e)
                        }))
                    }(e, t).then((function (e) {
                        return c((function (t) {
                            return Object(f.a)(Object(f.a)({}, t), {}, Object(h.a)({}, n, e))
                        }))
                    }))
                }), [e, t, n]), e && t ? o[n] : void 0
            }

            function To(e) {
                var t, n = Co(e),
                    r = Dr(ri(), "isClaimed", [null === n || void 0 === n ? void 0 : n.index]);
                return Boolean(n && !r.loading && !1 === (null === (t = r.result) || void 0 === t ? void 0 : t[0]))
            }

            function Eo(e) {
                var t = It().chainId,
                    n = Co(e),
                    r = To(e),
                    i = t ? it[t] : void 0;
                if (i) return r && n ? m.b.fromRawAmount(i, g.a.BigInt(n.amount)) : m.b.fromRawAmount(i, g.a.BigInt(0))
            }
            var No, So, Mo, Uo, Ro = "data:image/png;base64,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",
                Bo = n.p + "static/media/blue-loader.249140da.svg";

            function Do(e) {
                return /^0x0*$/.test(e)
            }

            function Po(e, t) {
                var n = Object(i.useState)(e),
                    r = Object(P.a)(n, 2),
                    a = r[0],
                    o = r[1];
                return Object(i.useEffect)((function () {
                    var n = setTimeout((function () {
                        o(e)
                    }), t);
                    return function () {
                        clearTimeout(n)
                    }
                }), [e, t]), a
            }

            function Lo(e) {
                var t, n, r, a = Po(e, 200),
                    o = Object(i.useMemo)((function () {
                        if (!a) return [void 0];
                        try {
                            return a ? [Object(Cn.namehash)(a)] : [void 0]
                        } catch (e) {
                            return [void 0]
                        }
                    }), [a]),
                    c = Dr(ei(!1), "resolver", o),
                    s = null === (t = c.result) || void 0 === t ? void 0 : t[0],
                    l = Dr(ti(s && !Do(s) ? s : void 0, !1), "addr", o),
                    u = a !== e;
                return {
                    address: u ? null : null !== (n = null === (r = l.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null,
                    loading: u || c.loading || l.loading
                }
            }

            function Fo(e) {
                var t, n, r, a = Po(e, 200),
                    o = Object(i.useMemo)((function () {
                        if (!a || !Un(a)) return [void 0];
                        try {
                            return a ? [Object(Cn.namehash)("".concat(a.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                        } catch (e) {
                            return [void 0]
                        }
                    }), [a]),
                    c = Dr(ei(!1), "resolver", o),
                    s = null === (t = c.result) || void 0 === t ? void 0 : t[0],
                    l = Dr(ti(s && !Do(s) ? s : void 0, !1), "name", o),
                    u = a !== e;
                return {
                    ENSName: u ? null : null !== (n = null === (r = l.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null,
                    loading: u || c.loading || l.loading
                }
            }

            function zo(e) {
                var t = Un(e),
                    n = Fo(t || void 0),
                    r = Lo(e);
                return {
                    loading: n.loading || r.loading,
                    address: t || r.address,
                    name: n.ENSName ? n.ENSName : !t && r.address && e || null
                }
            }
            var Wo = Dt.default.div(No || (No = Object(Bt.a)(["\n  ", "\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    return e.theme.bg1
                })),
                Vo = Dt.default.div(So || (So = Object(Bt.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"])), (function (e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.red1 : n.bg2
                }), (function (e) {
                    return e.error ? "step-end" : "step-start"
                }), (function (e) {
                    return e.error ? "step-end" : "step-start"
                }), (function (e) {
                    return e.theme.bg1
                })),
                Yo = Dt.default.div(Mo || (Mo = Object(Bt.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))),
                Go = Dt.default.input(Uo || (Uo = Object(Bt.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    return e.error ? "step-end" : "step-start"
                }), (function (e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.red1 : n.primary1
                }), (function (e) {
                    return e.theme.text4
                }), (function (e) {
                    return e.theme.text4
                }));

            function Jo(e) {
                var t = e.id,
                    n = e.value,
                    r = e.onChange,
                    a = It().chainId,
                    o = Object(i.useContext)(Dt.ThemeContext),
                    c = zo(n),
                    s = c.address,
                    l = c.loading,
                    u = c.name,
                    d = Object(i.useCallback)((function (e) {
                        var t = e.target.value.replace(/\s+/g, "");
                        r(t)
                    }), [r]),
                    p = Boolean(n.length > 0 && !l && !s);
                return Object(Ct.jsx)(Wo, {
                    id: t,
                    children: Object(Ct.jsx)(Vo, {
                        error: p,
                        children: Object(Ct.jsx)(Yo, {
                            children: Object(Ct.jsxs)(an, {
                                gap: "md",
                                children: [Object(Ct.jsxs)(gn, {
                                    children: [Object(Ct.jsx)(Ja, {
                                        color: o.text2,
                                        fontWeight: 500,
                                        fontSize: 14,
                                        children: "Recipient"
                                    }), s && a && Object(Ct.jsx)(ka, {
                                        href: Bn(a, null !== u && void 0 !== u ? u : s, "address"),
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: "(View on Etherscan)"
                                    })]
                                }), Object(Ct.jsx)(Go, {
                                    className: "recipient-address-input",
                                    type: "text",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    placeholder: "Wallet Address or ENS name",
                                    error: p,
                                    pattern: "^(0x[a-fA-F0-9]{40})$",
                                    onChange: d,
                                    value: n
                                })]
                            })
                        })
                    })
                })
            }
            var qo = n(808),
                Qo = n.n(qo),
                Ho = "object" === typeof window;

            function Xo() {
                return {
                    width: Ho ? window.innerWidth : void 0,
                    height: Ho ? window.innerHeight : void 0
                }
            }

            function Ko(e) {
                var t = e.start,
                    n = e.variant,
                    r = function () {
                        var e = Object(i.useState)(Xo),
                            t = Object(P.a)(e, 2),
                            n = t[0],
                            r = t[1];
                        return Object(i.useEffect)((function () {
                            function e() {
                                r(Xo())
                            }
                            if (Ho) return window.addEventListener("resize", e),
                                function () {
                                    window.removeEventListener("resize", e)
                                }
                        }), []), n
                    }(),
                    a = r.width,
                    o = r.height,
                    c = n || (o && a && o > 1.5 * a ? "bottom" : n);
                return t && a && o ? Object(Ct.jsx)(Qo.a, {
                    style: {
                        zIndex: 1401
                    },
                    numberOfPieces: 400,
                    recycle: !1,
                    run: !0,
                    width: a,
                    height: o,
                    confettiSource: {
                        h: o,
                        w: a,
                        x: 0,
                        y: "top" === c ? .25 * o : "bottom" === c ? .75 * o : .5 * o
                    },
                    initialVelocityX: 15,
                    initialVelocityY: 30,
                    gravity: .45,
                    tweenDuration: 100,
                    wind: .05
                }) : null
            }
            var Zo = Object(Dt.default)(an).withConfig({
                    componentId: "sc-1tfn1yf-0"
                })(["width:100%;"]),
                _o = Object(Dt.default)(un).withConfig({
                    componentId: "sc-1tfn1yf-1"
                })(["box-shadow:0px 4px 10px rgba(0,0,0,0.1);background:radial-gradient(76.02% 75.41% at 1.84% 0%,#ff007a 0%,#021d43 100%);"]),
                $o = Dt.default.div.withConfig({
                    componentId: "sc-1tfn1yf-2"
                })(["width:100%;padding:24px;position:relative;background:", ";"], (function (e) {
                    return e.activeBG && "radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"
                })),
                ec = Object(Dt.default)(rn).withConfig({
                    componentId: "sc-1tfn1yf-3"
                })(["padding:60px 0;"]);

            function tc(e) {
                var t, n, r = e.isOpen,
                    a = e.onDismiss,
                    o = It().chainId,
                    c = Object(i.useState)(""),
                    s = Object(P.a)(c, 2),
                    l = s[0],
                    u = s[1];
                var d = zo(l).address,
                    p = Object(i.useState)(!1),
                    b = Object(P.a)(p, 2),
                    f = b[0],
                    h = b[1],
                    m = function (e) {
                        var t = It(),
                            n = t.library,
                            r = t.chainId,
                            i = Co(e),
                            a = Eo(e),
                            o = wo(),
                            c = ri();
                        return {
                            claimCallback: function () {
                                var t = Object(I.a)(k.a.mark((function t() {
                                    var s, l;
                                    return k.a.wrap((function (t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (i && e && n && r && c) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                return l = [i.index, e, i.amount, i.proof], t.abrupt("return", (s = c.estimateGas).claim.apply(s, l.concat([{}])).then((function (t) {
                                                    return c.claim.apply(c, l.concat([{
                                                        value: null,
                                                        gasLimit: Pn(t)
                                                    }])).then((function (t) {
                                                        return o(t, {
                                                            summary: "Claimed ".concat(null === a || void 0 === a ? void 0 : a.toSignificant(4), " UNI"),
                                                            claim: {
                                                                recipient: e
                                                            }
                                                        }), t.hash
                                                    }))
                                                })));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function () {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }
                    }(d).claimCallback,
                    j = Eo(d),
                    g = To(d),
                    x = Object(i.useState)(),
                    O = Object(P.a)(x, 2),
                    v = O[0],
                    y = O[1],
                    w = function (e) {
                        var t = Ao();
                        return !(!e || !t[e]) && !t[e].receipt
                    }(null !== v && void 0 !== v ? v : ""),
                    A = v && !w;

                function C() {
                    h(!1), y(void 0), u(""), a()
                }
                return Object(Ct.jsxs)(tn, {
                    isOpen: r,
                    onDismiss: C,
                    maxHeight: 90,
                    children: [Object(Ct.jsx)(Ko, {
                        start: Boolean(r && A && f)
                    }), !f && Object(Ct.jsxs)(Zo, {
                        gap: "lg",
                        children: [Object(Ct.jsxs)(_o, {
                            children: [Object(Ct.jsx)(dn, {}), Object(Ct.jsx)(bn, {}), Object(Ct.jsxs)(fn, {
                                gap: "md",
                                children: [Object(Ct.jsxs)(gn, {
                                    children: [Object(Ct.jsx)(qa, {
                                        fontWeight: 500,
                                        children: "Claim UNI Token"
                                    }), Object(Ct.jsx)(ha, {
                                        onClick: C,
                                        style: {
                                            zIndex: 99
                                        },
                                        stroke: "white"
                                    })]
                                }), Object(Ct.jsxs)(qa, {
                                    fontWeight: 700,
                                    fontSize: 36,
                                    children: [null === j || void 0 === j ? void 0 : j.toFixed(0, null !== (t = {
                                        groupSeparator: ","
                                    }) && void 0 !== t ? t : "-"), " UNI"]
                                })]
                            }), Object(Ct.jsx)(hn, {})]
                        }), Object(Ct.jsxs)(an, {
                            gap: "md",
                            style: {
                                padding: "1rem",
                                paddingTop: "0"
                            },
                            justify: "center",
                            children: [Object(Ct.jsx)(Ka, {
                                fontWeight: 500,
                                children: "Enter an address to trigger a UNI claim. If the address has any claimable UNI it will be sent to them on submission."
                            }), Object(Ct.jsx)(Jo, {
                                value: l,
                                onChange: function (e) {
                                    u(e)
                                }
                            }), d && !g && Object(Ct.jsx)(to, {
                                error: !0,
                                children: "Address has no available claim"
                            }), Object(Ct.jsx)(so, {
                                disabled: !Object(Cn.isAddress)(null !== d && void 0 !== d ? d : "") || !g,
                                padding: "16px 16px",
                                width: "100%",
                                borderRadius: "12px",
                                mt: "1rem",
                                onClick: function () {
                                    h(!0), m().then((function (e) {
                                        y(e)
                                    })).catch((function (e) {
                                        h(!1), console.log(e)
                                    }))
                                },
                                children: "Claim UNI"
                            })]
                        })]
                    }), (f || A) && Object(Ct.jsxs)($o, {
                        activeBG: !0,
                        children: [Object(Ct.jsx)(bn, {}), Object(Ct.jsx)(pn, {
                            desaturate: !0
                        }), Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)("div", {}), Object(Ct.jsx)(ha, {
                                onClick: C,
                                style: {
                                    zIndex: 99
                                },
                                stroke: "black"
                            })]
                        }), Object(Ct.jsx)(ec, {
                            children: A ? Object(Ct.jsx)(Aa, {
                                width: "72px",
                                src: Ro
                            }) : Object(Ct.jsx)(Da, {
                                src: Bo,
                                alt: "loader",
                                size: "90px"
                            })
                        }), Object(Ct.jsxs)(an, {
                            gap: "100px",
                            justify: "center",
                            children: [Object(Ct.jsxs)(an, {
                                gap: "12px",
                                justify: "center",
                                children: [Object(Ct.jsx)(Ha, {
                                    fontWeight: 600,
                                    color: "black",
                                    children: A ? "Claimed" : "Claiming"
                                }), !A && Object(Ct.jsxs)(yn.b, {
                                    fontSize: 36,
                                    color: "#ff007a",
                                    fontWeight: 800,
                                    children: [null === j || void 0 === j ? void 0 : j.toFixed(0, null !== (n = {
                                        groupSeparator: ","
                                    }) && void 0 !== n ? n : "-"), " UNI"]
                                }), d && Object(Ct.jsxs)(Ha, {
                                    fontWeight: 600,
                                    color: "black",
                                    children: ["for ", Dn(d)]
                                })]
                            }), A && Object(Ct.jsx)(Ct.Fragment, {
                                children: Object(Ct.jsxs)(Ka, {
                                    fontWeight: 500,
                                    color: "black",
                                    children: [Object(Ct.jsxs)("span", {
                                        role: "img",
                                        "aria-label": "party-hat",
                                        children: ["\ud83c\udf89", " "]
                                    }), "Welcome to team Unicorn :)", " ", Object(Ct.jsx)("span", {
                                        role: "img",
                                        "aria-label": "party-hat",
                                        children: "\ud83c\udf89"
                                    })]
                                })
                            }), f && !v && Object(Ct.jsx)(Ka, {
                                color: "black",
                                children: "Confirm this transaction in your wallet"
                            }), f && v && !A && o && v && Object(Ct.jsx)(ka, {
                                href: Bn(o, v, "transaction"),
                                style: {
                                    zIndex: 99
                                },
                                children: "View transaction on Etherscan"
                            })]
                        })]
                    })]
                })
            }
            var nc = n(830),
                rc = n(1813),
                ic = n.p + "title.png",
                ac = n(541),
                oc = (new ac.b(Pr.a), n(92)),
                cc = new m.f(50, 1e4),
                sc = new m.f(50, 1e4),
                lc = new m.f(10, 1e4);

            function uc(e) {
                return function (e) {
                    var t = Ui();
                    return Object(i.useMemo)((function () {
                        return "auto" === t ? e : t
                    }), [t, e])
                }(Object(i.useMemo)((function () {
                    return e ? e instanceof wn.c ? cc : sc : lc
                }), [e]))
            }
            var dc, pc = n(395);

            function bc() {
                var e = Object(Pt.g)().search;
                return Object(i.useMemo)((function () {
                    return e && e.length > 1 ? Object(pc.parse)(e, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    }) : {}
                }), [e])
            }! function (e) {
                e.v2 = "V2", e.v3 = "V3"
            }(dc || (dc = {}));
            var fc = dc.v2;

            function hc() {
                var e = bc().use;
                if ("string" !== typeof e) return fc;
                switch (e.toLowerCase()) {
                    case "v2":
                        return dc.v2;
                    case "v3":
                    default:
                        return dc.v3
                }
            }

            function mc(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yt;
                if (e && !t) return !1;
                if (t && !e) return !0;
                if (e && t) {
                    if (e.tradeType !== t.tradeType || !Object(m.l)(e.inputAmount.currency, t.inputAmount.currency) || !Object(m.l)(t.outputAmount.currency, t.outputAmount.currency)) throw new Error("Comparing incomparable trades");
                    return n.equalTo(yt) ? e.executionPrice.lessThan(t.executionPrice) : e.executionPrice.asFraction.multiply(n.add(wt)).lessThan(t.executionPrice)
                }
            }

            function jc(e, t) {
                return t && e ? Object(m.p)(e, t) : void 0
            }

            function gc(e) {
                if (e.isEther) return e;
                var t = function (e) {
                    if (e in m.a) return e
                }(e.chainId);
                return t && e.equals(m.j[t]) ? m.c : e
            }
            var xc, Oc = n(102),
                vc = new ac.b(Fr.a);
            ! function (e) {
                e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
            }(xc || (xc = {}));

            function yc(e) {
                var t = It().chainId,
                    n = Bi(),
                    r = Object(P.a)(n, 1)[0],
                    a = Object(i.useMemo)((function () {
                        return e.map((function (e) {
                            var n = Object(P.a)(e, 2),
                                r = n[0],
                                i = n[1];
                            return [jc(r, t), jc(i, t)]
                        }))
                    }), [t, e]),
                    o = Br(Object(i.useMemo)((function () {
                        return a.map((function (e) {
                            var t = Object(P.a)(e, 2),
                                n = t[0],
                                i = t[1];
                            if (n && i && !n.equals(i)) return "Sushiswap" === r ? function (e) {
                                var t = e.tokenA,
                                    n = e.tokenB,
                                    r = t.sortsBefore(n) ? [t, n] : [n, t],
                                    i = Object(P.a)(r, 2),
                                    a = i[0],
                                    o = i[1];
                                return Object(En.getCreate2Address)("0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac", Object(Oc.keccak256)(["bytes"], [Object(Oc.pack)(["address", "address"], [a.address, o.address])]), "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303")
                            }({
                                tokenA: n,
                                tokenB: i
                            }) : wn.a.getAddress(n, i)
                        }))
                    }), [a, r]), vc, "getReserves");
                return Object(i.useMemo)((function () {
                    return o.map((function (e, t) {
                        var n = e.result,
                            r = e.loading,
                            i = a[t][0],
                            o = a[t][1];
                        if (r) return [xc.LOADING, null];
                        if (!i || !o || i.equals(o)) return [xc.INVALID, null];
                        if (!n) return [xc.NOT_EXISTS, null];
                        var c = n.reserve0,
                            s = n.reserve1,
                            l = i.sortsBefore(o) ? [i, o] : [o, i],
                            u = Object(P.a)(l, 2),
                            d = u[0],
                            p = u[1];
                        return [xc.EXISTS, new wn.a(m.b.fromRawAmount(d, c.toString()), m.b.fromRawAmount(p, s.toString()))]
                    }))
                }), [o, a])
            }

            function wc(e, t) {
                var n = yc(function (e, t) {
                    var n = It().chainId,
                        r = n ? [jc(e, n), jc(t, n)] : [void 0, void 0],
                        a = Object(P.a)(r, 2),
                        o = a[0],
                        c = a[1],
                        s = Object(i.useMemo)((function () {
                            var e, t, r, i, a;
                            if (!n) return [];
                            var s = null !== (e = ct[n]) && void 0 !== e ? e : [],
                                l = o && null !== (t = null === (r = st[n]) || void 0 === r ? void 0 : r[o.address]) && void 0 !== t ? t : [],
                                u = c && null !== (i = null === (a = st[n]) || void 0 === a ? void 0 : a[c.address]) && void 0 !== i ? i : [];
                            return [].concat(Object(b.a)(s), Object(b.a)(l), Object(b.a)(u))
                        }), [n, o, c]),
                        l = Object(i.useMemo)((function () {
                            return kn()(s, (function (e) {
                                return s.map((function (t) {
                                    return [e, t]
                                }))
                            }))
                        }), [s]);
                    return Object(i.useMemo)((function () {
                        return o && c ? [
                            [o, c]
                        ].concat(Object(b.a)(s.map((function (e) {
                            return [o, e]
                        }))), Object(b.a)(s.map((function (e) {
                            return [c, e]
                        }))), Object(b.a)(l)).filter((function (e) {
                            return Boolean(e[0] && e[1])
                        })).filter((function (e) {
                            var t = Object(P.a)(e, 2),
                                n = t[0],
                                r = t[1];
                            return n.address !== r.address
                        })).filter((function (e) {
                            var t = Object(P.a)(e, 2),
                                r = t[0],
                                i = t[1];
                            if (!n) return !0;
                            var a = lt[n],
                                o = null === a || void 0 === a ? void 0 : a[r.address],
                                c = null === a || void 0 === a ? void 0 : a[i.address];
                            return !o && !c || !(o && !o.find((function (e) {
                                return i.equals(e)
                            }))) && !(c && !c.find((function (e) {
                                return r.equals(e)
                            })))
                        })) : []
                    }), [o, c, s, l, n])
                }(e, t));
                return Object(i.useMemo)((function () {
                    return Object.values(n.filter((function (e) {
                        return Boolean(e[0] === xc.EXISTS && e[1])
                    })).reduce((function (e, t) {
                        var n, r = Object(P.a)(t, 2)[1];
                        return e[r.liquidityToken.address] = null !== (n = e[r.liquidityToken.address]) && void 0 !== n ? n : r, e
                    }), {}))
                }), [n])
            }

            function Ac(e) {
                if (e) return e instanceof wn.c ? dc.v2 : dc.v3
            }

            function kc() {
                var e, t;
                return null === (e = Dr(ni(), "getCurrentBlockTimestamp")) || void 0 === e || null === (t = e.result) || void 0 === t ? void 0 : t[0]
            }

            function Ic() {
                var e = Object(d.d)((function (e) {
                        return e.user.userDeadline
                    })),
                    t = kc();
                return Object(i.useMemo)((function () {
                    if (t && e) return t.add(e)
                }), [t, e])
            }
            var Cc = n(809),
                Tc = n.n(Cc),
                Ec = n(89),
                Nc = n(526),
                Sc = n(117),
                Mc = n(156);

            function Uc(e) {
                try {
                    var t = Object(En.getAddress)(e);
                    return Object(Mc.default)(e === t, "".concat(e, " is not checksummed.")), t
                } catch (n) {
                    Object(J.a)(!1, "".concat(e, " is not a valid address."))
                }
            }

            function Rc(e) {
                return "0x".concat(e.quotient.toString(16))
            }
            var Bc, Dc, Pc = function () {
                function e() {
                    Object(C.a)(this, e)
                }
                return Object(T.a)(e, null, [{
                    key: "swapCallParameters",
                    value: function (e, t, n) {
                        var r = t.inputAmount.currency === m.c,
                            i = t.outputAmount.currency === m.c;
                        Object(J.a)(!(r && i), "ETHER_IN_OUT"), Object(J.a)(!("ttl" in n) || n.ttl > 0, "TTL");
                        var a, o, c, s = Uc(n.recipient),
                            l = t.maximumAmountIn(n.allowedSlippage),
                            u = Rc(l),
                            d = Rc(t.minimumAmountOut(n.allowedSlippage)),
                            p = t.route.path.map((function (e) {
                                return e.address
                            })),
                            b = "0x".concat("ttl" in n ? (Math.floor((new Date).getTime() / 1e3) + n.ttl).toString(16) : n.deadline.toString(16)),
                            f = Rc(n.ethTip),
                            h = {
                                amountIn: u,
                                amountOut: d,
                                path: p,
                                to: s,
                                deadline: b
                            };
                        switch (t.tradeType) {
                            case m.i.EXACT_INPUT:
                                r ? (a = "swapExactETHForTokensWithTip", o = [e, h, f], c = Rc(l.add(n.ethTip))) : i ? (a = "swapExactTokensForETHWithTip", o = [e, h], c = f) : (a = "swapExactTokensForTokensWithTip", o = [e, h], c = f);
                                break;
                            case m.i.EXACT_OUTPUT:
                                r ? (a = "swapETHForExactTokensWithTip", o = [e, h, f], c = Rc(l.add(n.ethTip))) : i ? (a = "swapTokensForExactETHWithTip", o = [e, h], c = f) : (a = "swapTokensForExactTokensWithTip", o = [e, h], c = f)
                        }
                        return {
                            methodName: a,
                            args: o,
                            value: c
                        }
                    }
                }]), e
            }();

            function Lc(e, t, n, r) {
                var a = It(),
                    o = a.account,
                    c = a.chainId,
                    s = a.library,
                    l = zo(n).address,
                    u = null === n ? o : l,
                    d = Ic(),
                    p = function () {
                        var e = It().chainId,
                            t = Bi(),
                            n = Object(P.a)(t, 1)[0];
                        return Object(i.useMemo)((function () {
                            var t;
                            if (e) return null === (t = Re[e]) || void 0 === t ? void 0 : t.find((function (e) {
                                return e.name === n
                            }))
                        }), [e, n])
                    }(),
                    b = Di(),
                    f = Object(P.a)(b, 1)[0],
                    h = Fi(),
                    j = Object(P.a)(h, 1)[0],
                    g = Object(oc.parseUnits)(f, 0).mul(Math.round(2 * Number.parseInt(j) / 3 * .15));
                return Object(i.useMemo)((function () {
                    var n = Ac(e);
                    if (!e || !u || !s || !o || !n || !c || !d || n !== dc.v2 || !(null === p || void 0 === p ? void 0 : p.router)) return [];
                    var i = function (e, t, n, r) {
                        return Ln(e, Sn.a, n, r)
                    }(p.router, 0, s, o);
                    if (!i) return [];
                    var a = i;
                    if (a = function (e, t, n) {
                            var r;
                            return Ln(null !== (r = Le[e]) && void 0 !== r ? r : "", Mn, t, n)
                        }(c, s, o), e instanceof wn.c) {
                        if (!i) return [];
                        var l = [];
                        return l.push(Pc.swapCallParameters(i.address, e, {
                            allowedSlippage: t,
                            recipient: u,
                            deadline: d.toNumber(),
                            ethTip: m.b.ether(g.toString())
                        })), l.map((function (e) {
                            return {
                                parameters: e,
                                contract: a,
                                bxTip: g
                            }
                        }))
                    }
                    return console.debug(r), []
                }), [o, t, c, d, s, u, r, e, p, g])
            }

            function Fc(e) {
                for (var t, n, r; Boolean(e);) {
                    var i, a, o, c;
                    r = null !== (i = null !== (a = e.reason) && void 0 !== a ? a : e.message) && void 0 !== i ? i : r, e = null !== (o = e.error) && void 0 !== o ? o : null === (c = e.data) || void 0 === c ? void 0 : c.originalError
                }
                switch (0 === (null === (t = r) || void 0 === t ? void 0 : t.indexOf("execution reverted: ")) && (r = r.substr("execution reverted: ".length)), r) {
                    case "UniswapV2Router: EXPIRED":
                        return "The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.";
                    case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                    case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                        return "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                    case "TransferHelper: TRANSFER_FROM_FAILED":
                        return "The input token cannot be transferred. There may be an issue with the input token.";
                    case "UniswapV2: TRANSFER_FAILED":
                        return "The output token cannot be transferred. There may be an issue with the output token.";
                    case "UniswapV2: K":
                        return "The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.";
                    case "Too little received":
                    case "Too much requested":
                    case "STF":
                        return "This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.";
                    case "TF":
                        return "The output token cannot be transferred. There may be an issue with the output token. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.";
                    default:
                        return -1 !== (null === (n = r) || void 0 === n ? void 0 : n.indexOf("undefined is not an object")) ? (console.error(e, r), "An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.") : "Unknown error".concat(r ? ': "'.concat(r, '"') : "", ". Try increasing your slippage tolerance. Note fee on transfer and rebase tokens are incompatible with Uniswap V3.")
                }
            }! function (e) {
                e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
            }(Bc || (Bc = {})),
            function (e) {
                e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
            }(Dc || (Dc = {}));
            var zc = Object(sr.b)("swap/selectCurrency"),
                Wc = Object(sr.b)("swap/switchCurrencies"),
                Vc = Object(sr.b)("swap/typeInput"),
                Yc = Object(sr.b)("swap/replaceSwapState"),
                Gc = Object(sr.b)("swap/setRecipient"),
                Jc = Object(sr.b)("swap/updateArbiProfit");

            function qc(e) {
                return Qc.apply(this, arguments)
            }

            function Qc() {
                return (Qc = Object(I.a)(k.a.mark((function e(t) {
                    var n;
                    return k.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 3, null === t || void 0 === t ? void 0 : t.getGasPrice();
                            case 3:
                                return n = e.sent, e.abrupt("return", n || Fe);
                            case 7:
                                return e.abrupt("return", Fe);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Hc() {
                return Object(d.d)((function (e) {
                    return e.swap
                }))
            }

            function Xc(e, t) {
                if (e && t) try {
                    var n = Object(oc.parseUnits)(e, t.decimals).toString();
                    if ("0" !== n) return m.b.fromRawAmount(t, g.a.BigInt(n))
                } catch (r) {
                    console.log('Failed to parse input amount: "'.concat(e, '"'), r)
                }
            }
            var Kc = {
                "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f": !0,
                "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a": !0,
                "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D": !0
            };

            function Zc(e, t) {
                return (e instanceof wn.c ? e.route.path : e.route.tokenPath).some((function (e) {
                    return e.address === t
                })) || e instanceof wn.c && e.route.pairs.some((function (e) {
                    return e.liquidityToken.address === t
                }))
            }

            function _c(e) {
                var t, n, r, a, o, c, s, l, u = It(),
                    d = u.account,
                    p = u.library,
                    f = Object(Nt.b)().t,
                    m = Hc(),
                    j = m.independentField,
                    g = m.typedValue,
                    x = m[Dc.INPUT].currencyId,
                    O = m[Dc.OUTPUT].currencyId,
                    v = m.recipient,
                    y = di(x),
                    w = di(O),
                    A = zo(null !== v && void 0 !== v ? v : void 0),
                    C = null !== (t = null === v ? d : A.address) && void 0 !== t ? t : null,
                    T = os(null !== d && void 0 !== d ? d : void 0, [null !== y && void 0 !== y ? y : void 0, null !== w && void 0 !== w ? w : void 0]),
                    E = j === Dc.INPUT,
                    N = Xc(g, null !== (n = E ? y : w) && void 0 !== n ? n : void 0),
                    S = function (e, t) {
                        var n = wc(null === e || void 0 === e ? void 0 : e.currency, t),
                            r = Mi(),
                            a = Object(P.a)(r, 1)[0];
                        return Object(i.useMemo)((function () {
                            if (e && t && n.length > 0) {
                                var r;
                                if (a) return null !== (r = wn.c.bestTradeExactIn(n, e, t, {
                                    maxHops: 1,
                                    maxNumResults: 1
                                })[0]) && void 0 !== r ? r : null;
                                for (var i = null, o = 1; o <= 3; o++) {
                                    var c, s = null !== (c = wn.c.bestTradeExactIn(n, e, t, {
                                        maxHops: o,
                                        maxNumResults: 1
                                    })[0]) && void 0 !== c ? c : null;
                                    mc(i, s, vt) && (i = s)
                                }
                                return i
                            }
                            return null
                        }), [n, e, t, a])
                    }(E ? N : void 0, null !== w && void 0 !== w ? w : void 0),
                    M = function (e, t) {
                        var n = wc(e, null === t || void 0 === t ? void 0 : t.currency),
                            r = Mi(),
                            a = Object(P.a)(r, 1)[0];
                        return Object(i.useMemo)((function () {
                            if (e && t && n.length > 0) {
                                var r;
                                if (a) return null !== (r = wn.c.bestTradeExactOut(n, e, t, {
                                    maxHops: 1,
                                    maxNumResults: 1
                                })[0]) && void 0 !== r ? r : null;
                                for (var i = null, o = 1; o <= 3; o++) {
                                    var c, s = null !== (c = wn.c.bestTradeExactOut(n, e, t, {
                                        maxHops: o,
                                        maxNumResults: 1
                                    })[0]) && void 0 !== c ? c : null;
                                    mc(i, s, vt) && (i = s)
                                }
                                return i
                            }
                            return null
                        }), [e, t, n, a])
                    }(null !== y && void 0 !== y ? y : void 0, E ? void 0 : N),
                    U = E ? S : M,
                    R = (r = {}, Object(h.a)(r, Dc.INPUT, T[0]), Object(h.a)(r, Dc.OUTPUT, T[1]), r),
                    B = (a = {}, Object(h.a)(a, Dc.INPUT, null !== y && void 0 !== y ? y : void 0), Object(h.a)(a, Dc.OUTPUT, null !== w && void 0 !== w ? w : void 0), a);
                (d || (c = f("connect_wallet")), N) || (c = null !== (s = c) && void 0 !== s ? s : f("enter_an_amount"));
                B[Dc.INPUT] && B[Dc.OUTPUT] || (c = null !== (l = c) && void 0 !== l ? l : f("select_token"));
                var D, L, F = Un(C);
                C && F ? (Kc[F] || S && Zc(S, F) || M && Zc(M, F)) && (c = null !== (D = c) && void 0 !== D ? D : f("invalid_recipient")) : c = null !== (L = c) && void 0 !== L ? L : f("enter_recipient");
                var z = null !== (o = e === dc.v2 ? U : null) && void 0 !== o ? o : void 0,
                    W = uc(z),
                    V = [R[Dc.INPUT], null === U || void 0 === U ? void 0 : U.maximumAmountIn(W)],
                    Y = V[0],
                    G = V[1];
                Y && G && Y.lessThan(G) && (c = f("insufficient_token_balance", G.currency.symbol));
                var J = Lc(z, W, C, null),
                    q = Di(),
                    Q = Object(P.a)(q, 2)[1],
                    H = Fi(),
                    X = Object(P.a)(H, 2)[1],
                    K = Pi(),
                    Z = Object(P.a)(K, 2),
                    _ = Z[0],
                    $ = Z[1],
                    ee = Li(),
                    te = Object(P.a)(ee, 2),
                    ne = te[0],
                    re = te[1],
                    ie = br();
                return Object(i.useEffect)((function () {
                    re(!1), $(!1), X(ze.toString())
                }), [re, $, X]), Object(i.useEffect)((function () {
                    function e() {
                        return (e = Object(I.a)(k.a.mark((function e() {
                            var t;
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (ne) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, qc(p);
                                    case 3:
                                        t = e.sent, Q(t.toString());
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function () {
                        e.apply(this, arguments)
                    }()
                }), [p, ie, Q, ne]), Object(i.useEffect)((function () {
                    function e() {
                        return (e = Object(I.a)(k.a.mark((function e() {
                            var t, n, r, i;
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (p && d) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, Promise.all(J.map((function (e) {
                                            var t, n = e.parameters,
                                                r = n.methodName,
                                                i = n.args,
                                                a = n.value,
                                                o = e.contract,
                                                c = !a || Do(a) ? {} : {
                                                    value: a
                                                };
                                            return (t = o.estimateGas)[r].apply(t, Object(b.a)(i).concat([c])).then((function (t) {
                                                return {
                                                    call: e,
                                                    gasEstimate: t
                                                }
                                            })).catch((function (t) {
                                                var n;
                                                return console.debug("Gas estimate failed, trying eth_call to extract error", e), (n = o.callStatic)[r].apply(n, Object(b.a)(i).concat([c])).then((function (n) {
                                                    return console.debug("Unexpected successful call after failed estimate gas", e, t, n), {
                                                        call: e,
                                                        error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                    }
                                                })).catch((function (t) {
                                                    var n;
                                                    switch (console.debug("Call threw error", e, t), t.reason) {
                                                        case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                        case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                            n = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                            break;
                                                        default:
                                                            n = "The transaction cannot succeed due to error: ".concat(t.reason, ". This is probably an issue with one of the tokens you are swapping.")
                                                    }
                                                    return {
                                                        call: e,
                                                        error: new Error(n)
                                                    }
                                                }))
                                            }))
                                        })));
                                    case 4:
                                        if (t = e.sent, n = t.find((function (e, t, n) {
                                                return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1])
                                            }))) {
                                            e.next = 11;
                                            break
                                        }
                                        if (!((r = t.filter((function (e) {
                                                return "error" in e
                                            }))).length > 0)) {
                                            e.next = 10;
                                            break
                                        }
                                        throw r[r.length - 1].error;
                                    case 10:
                                        throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                    case 11:
                                        "gasEstimate" in n && (i = n.gasEstimate.mul(3).div(2), _ || X(i.toString()));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    U && J && !_ && function () {
                        e.apply(this, arguments)
                    }()
                }), [U, d, p, J, ne, X, _]), {
                    currencies: B,
                    currencyBalances: R,
                    parsedAmount: N,
                    inputError: c,
                    v2Trade: null !== U && void 0 !== U ? U : void 0,
                    v3TradeState: {
                        trade: null,
                        state: null
                    },
                    toggledTrade: z,
                    allowedSlippage: W
                }
            }

            function $c(e) {
                if ("string" === typeof e) {
                    var t = Un(e);
                    if (t) return t;
                    if ("ETH" === e.toUpperCase()) return "ETH"
                }
                return ""
            }
            var es = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                ts = /^0x[a-fA-F0-9]{40}$/;

            function ns(e) {
                var t, n = $c(e.inputCurrency),
                    r = $c(e.outputCurrency);
                "" === n && "" === r ? n = "ETH" : n === r && (r = "");
                var i, a = function (e) {
                    return "string" !== typeof e ? null : Un(e) || (es.test(e) || ts.test(e) ? e : null)
                }(e.recipient);
                return t = {}, Object(h.a)(t, Dc.INPUT, {
                    currencyId: n
                }), Object(h.a)(t, Dc.OUTPUT, {
                    currencyId: r
                }), Object(h.a)(t, "typedValue", "string" !== typeof (i = e.exactAmount) || isNaN(parseFloat(i)) ? "" : i), Object(h.a)(t, "independentField", function (e) {
                    return "string" === typeof e && "output" === e.toLowerCase() ? Dc.OUTPUT : Dc.INPUT
                }(e.exactField)), Object(h.a)(t, "recipient", a), Object(h.a)(t, "arbiProfit", {
                    userProfit: "0",
                    hash: null
                }), t
            }

            function rs() {
                var e = Object(d.c)();
                return [Object(d.d)((function (e) {
                    return e.swap.arbiProfit
                })), Object(i.useCallback)((function (t) {
                    e(Jc(t))
                }), [e])]
            }
            Object(h.a)({}, m.a.MAINNET, [{
                tokens: [m.j[m.a.MAINNET], Ye],
                stakingRewardAddress: "0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"
            }, {
                tokens: [m.j[m.a.MAINNET], Ge],
                stakingRewardAddress: "0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"
            }, {
                tokens: [m.j[m.a.MAINNET], Je],
                stakingRewardAddress: "0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"
            }, {
                tokens: [m.j[m.a.MAINNET], qe],
                stakingRewardAddress: "0xCA35e32e7926b96A9988f61d510E038108d8068e"
            }]);

            function is(e) {
                var t = ni(),
                    n = Object(i.useMemo)((function () {
                        return e ? e.map(Un).filter((function (e) {
                            return !1 !== e
                        })).sort() : []
                    }), [e]),
                    r = function (e, t, n, r, a) {
                        var o = Object(i.useMemo)((function () {
                                var n;
                                return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                            }), [e, t]),
                            c = Sr(Object(i.useMemo)((function () {
                                return e && o && (null === n || void 0 === n ? void 0 : n.length) > 0 && n.every((function (e) {
                                    return Tr(e)
                                })) ? n.map((function (t) {
                                    return Object(f.a)({
                                        address: e.address,
                                        callData: e.interface.encodeFunctionData(o, t)
                                    }, a ? {
                                        gasRequired: a
                                    } : {})
                                })) : []
                            }), [e, o, n, a]), r),
                            s = br();
                        return Object(i.useMemo)((function () {
                            return c.map((function (t) {
                                return Rr(t, null === e || void 0 === e ? void 0 : e.interface, o, s)
                            }))
                        }), [o, e, c, s])
                    }(t, "getEthBalance", n.map((function (e) {
                        return [e]
                    })));
                return Object(i.useMemo)((function () {
                    return n.reduce((function (e, t, n) {
                        var i, a, o = null === r || void 0 === r || null === (i = r[n]) || void 0 === i || null === (a = i.result) || void 0 === a ? void 0 : a[0];
                        return o && (e[t] = m.b.ether(g.a.BigInt(o.toString()))), e
                    }), {})
                }), [n, r])
            }

            function as(e, t) {
                return function (e, t) {
                    var n = Object(i.useMemo)((function () {
                            var e;
                            return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function (e) {
                                return !1 !== Un(null === e || void 0 === e ? void 0 : e.address)
                            }))) && void 0 !== e ? e : []
                        }), [t]),
                        r = Br(Object(i.useMemo)((function () {
                            return n.map((function (e) {
                                return e.address
                            }))
                        }), [n]), new ac.b(Yr), "balanceOf", [e], void 0, 1e5),
                        a = Object(i.useMemo)((function () {
                            return r.some((function (e) {
                                return e.loading
                            }))
                        }), [r]);
                    return [Object(i.useMemo)((function () {
                        return e && n.length > 0 ? n.reduce((function (e, t, n) {
                            var i, a, o = null === r || void 0 === r || null === (i = r[n]) || void 0 === i || null === (a = i.result) || void 0 === a ? void 0 : a[0],
                                c = o ? g.a.BigInt(o.toString()) : void 0;
                            return c && (e[t.address] = m.b.fromRawAmount(t, c)), e
                        }), {}) : {}
                    }), [e, n, r]), a]
                }(e, t)[0]
            }

            function os(e, t) {
                var n = Object(i.useMemo)((function () {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function (e) {
                            var t;
                            return null !== (t = null === e || void 0 === e ? void 0 : e.isToken) && void 0 !== t && t
                        }))) && void 0 !== e ? e : []
                    }), [t]),
                    r = as(e, n),
                    a = is(Object(i.useMemo)((function () {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.some((function (e) {
                            return null === e || void 0 === e ? void 0 : e.isEther
                        }))) && void 0 !== e && e
                    }), [t]) ? [e] : []);
                return Object(i.useMemo)((function () {
                    var n;
                    return null !== (n = null === t || void 0 === t ? void 0 : t.map((function (t) {
                        if (e && t) return t.isToken ? r[t.address] : t.isEther ? a[e] : void 0
                    }))) && void 0 !== n ? n : []
                }), [e, t, a, r])
            }

            function cs(e, t) {
                return os(e, [t])[0]
            }
            var ss = Object(Dt.default)(mn.Box).withConfig({
                    componentId: "mf4547-0"
                })(["width:", ";border-radius:16px;padding:1rem;padding:", ";border:", ";border-radius:", ";margin-bottom:0 !important;"], (function (e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.border
                }), (function (e) {
                    return e.borderRadius
                })),
                ls = ss,
                us = Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-1"
                })([""]),
                ds = Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-2"
                })(["background-color:", ";"], (function (e) {
                    return e.theme.bg2
                })),
                ps = Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-3"
                })(["background-color:#AAA;opacity:0.4;"]),
                bs = Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-4"
                })(["background:#161521;border:1px solid #2B2E40;"]),
                fs = (Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-5"
                })(["background-color:", ";"], (function (e) {
                    return e.theme.bg0
                })), Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-6"
                })(["border:1px solid ", ";"], (function (e) {
                    return e.theme.bg3
                }))),
                hs = Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-7"
                })(["background-color:rgba(243,132,30,0.05);color:", ";font-weight:500;"], (function (e) {
                    return e.theme.yellow3
                })),
                ms = (Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-8"
                })(["background-color:rgba(255,0,122,0.03);color:", ";font-weight:500;"], (function (e) {
                    return e.theme.primary1
                })), Object(Dt.default)(ss).withConfig({
                    componentId: "mf4547-9"
                })(["background-color:", ";color:", ";border-radius:12px;"], (function (e) {
                    return e.theme.primary5
                }), (function (e) {
                    return e.theme.blue2
                })), n(1800)),
                js = "data:image/png;base64,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",
                gs = n.p + "static/media/portisIcon.f44aba13.png";

            function xs() {
                var e = It().account,
                    t = Dr(_r(It().chainId === m.a.MAINNET ? "0x65770b5283117639760beA3F867b69b3697a91dd" : void 0, qr, !1), "balanceOf", [null !== e && void 0 !== e ? e : void 0], Nr).result,
                    n = null === t || void 0 === t ? void 0 : t[0];
                return n ? g.a.BigInt(n.toString()) : void 0
            }
            var Os, vs, ys = n(810),
                ws = n.n(ys),
                As = Dt.default.div.withConfig({
                    componentId: "sc-1q3egif-0"
                })(["height:1rem;width:1rem;border-radius:1.125rem;background-color:", ";"], (function (e) {
                    return e.theme.bg4
                }));

            function ks() {
                var e = Object(i.useRef)(),
                    t = It().account;
                return Object(i.useEffect)((function () {
                    t && e.current && (e.current.innerHTML = "", e.current.appendChild(ws()(16, parseInt(t.slice(2, 10), 16))))
                }), [t]), Object(Ct.jsx)(As, {
                    ref: e
                })
            }
            var Is, Cs, Ts = Object(Dt.keyframes)(Os || (Os = Object(Bt.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                Es = Dt.default.svg(vs || (vs = Object(Bt.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), Ts, (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                }), (function (e) {
                    var t = e.stroke,
                        n = e.theme;
                    return null !== t && void 0 !== t ? t : n.primary1
                }));

            function Ns(e) {
                var t = e.size,
                    n = void 0 === t ? "16px" : t,
                    r = e.stroke,
                    i = Object(qt.a)(e, ["size", "stroke"]);
                return Object(Ct.jsx)(Es, Object(f.a)(Object(f.a)({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: n,
                    stroke: r
                }, i), {}, {
                    children: Object(Ct.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }

            function Ss() {
                return (Ss = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ms(e, t) {
                if (null == e) return {};
                var n, r, i = function (e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function Us(e, t) {
                var n = e.title,
                    r = e.titleId,
                    a = Ms(e, ["title", "titleId"]);
                return i.createElement("svg", Ss({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "feather feather-x",
                    ref: t,
                    "aria-labelledby": r
                }, a), n ? i.createElement("title", {
                    id: r
                }, n) : null, Is || (Is = i.createElement("line", {
                    x1: 18,
                    y1: 6,
                    x2: 6,
                    y2: 18
                })), Cs || (Cs = i.createElement("line", {
                    x1: 6,
                    y1: 6,
                    x2: 18,
                    y2: 18
                })))
            }
            var Rs = i.forwardRef(Us);
            n.p;

            function Bs(e) {
                var t = Object(i.useRef)();
                return Object(i.useEffect)((function () {
                    t.current = e
                }), [e]), t.current
            }
            var Ds = n(736),
                Ps = n.n(Ds);
            var Ls = n(1797),
                Fs = n(1798),
                zs = Object(Dt.default)(ja).withConfig({
                    componentId: "lbkgi3-0"
                })(["color:", ";flex-shrink:0;display:flex;text-decoration:none;font-size:0.825rem;:hover,:active,:focus{text-decoration:none;color:", ";}"], (function (e) {
                    return e.theme.text3
                }), (function (e) {
                    return e.theme.text2
                })),
                Ws = Dt.default.span.withConfig({
                    componentId: "lbkgi3-1"
                })(["margin-left:0.25rem;font-size:0.825rem;", ";align-items:center;"], (function (e) {
                    return e.theme.flexRowNoWrap
                }));

            function Vs(e) {
                var t = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                            t = Object(i.useState)(!1),
                            n = Object(P.a)(t, 2),
                            r = n[0],
                            a = n[1],
                            o = Object(i.useCallback)((function (e) {
                                var t = Ps()(e);
                                a(t)
                            }), []);
                        return Object(i.useEffect)((function () {
                            if (r) {
                                var t = setTimeout((function () {
                                    a(!1)
                                }), e);
                                return function () {
                                    clearTimeout(t)
                                }
                            }
                        }), [r, a, e]), [r, o]
                    }(),
                    n = Object(P.a)(t, 2),
                    r = n[0],
                    a = n[1];
                return Object(Ct.jsxs)(zs, {
                    onClick: function () {
                        return a(e.toCopy)
                    },
                    children: [r ? Object(Ct.jsxs)(Ws, {
                        children: [Object(Ct.jsx)(Ls.a, {
                            size: "16"
                        }), Object(Ct.jsx)(Ws, {
                            children: "Copied"
                        })]
                    }) : Object(Ct.jsx)(Ws, {
                        children: Object(Ct.jsx)(Fs.a, {
                            size: "16"
                        })
                    }), r ? "" : e.children]
                })
            }
            var Ys, Gs, Js, qs, Qs, Hs, Xs, Ks, Zs, _s, $s, el, tl, nl, rl, il, al, ol, cl, sl = n(1799),
                ll = Dt.default.div.withConfig({
                    componentId: "l70srb-0"
                })([""]),
                ul = Dt.default.div.withConfig({
                    componentId: "l70srb-1"
                })(["margin-right:0.5rem;display:flex;align-items:center;:hover{text-decoration:underline;}"]),
                dl = Object(Dt.default)(ka).withConfig({
                    componentId: "l70srb-2"
                })(["display:flex;justify-content:space-between;align-items:center;text-decoration:none !important;border-radius:0.5rem;padding:0.25rem 0rem;font-weight:500;font-size:0.825rem;color:", ";"], (function (e) {
                    return e.theme.primary1
                })),
                pl = Dt.default.div.withConfig({
                    componentId: "l70srb-3"
                })(["color:", ";"], (function (e) {
                    var t = e.pending,
                        n = e.success,
                        r = e.theme;
                    return t ? r.primary1 : n ? r.green1 : r.red1
                }));

            function bl(e) {
                var t, n, r = e.hash,
                    i = It().chainId,
                    a = Ao(),
                    o = null === a || void 0 === a ? void 0 : a[r],
                    c = null === o || void 0 === o ? void 0 : o.summary,
                    s = !(null === o || void 0 === o ? void 0 : o.receipt),
                    l = !s && o && (1 === (null === (t = o.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof (null === (n = o.receipt) || void 0 === n ? void 0 : n.status));
                return i ? Object(Ct.jsx)(ll, {
                    children: Object(Ct.jsxs)(dl, {
                        href: Bn(i, r, "transaction"),
                        pending: s,
                        success: l,
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsxs)(ul, {
                                children: [null !== c && void 0 !== c ? c : r, " \u2197"]
                            })
                        }), Object(Ct.jsx)(pl, {
                            pending: s,
                            success: l,
                            children: s ? Object(Ct.jsx)(Ns, {}) : l ? Object(Ct.jsx)(Ls.a, {
                                size: "16"
                            }) : Object(Ct.jsx)(sl.a, {
                                size: "16"
                            })
                        })]
                    })
                }) : null
            }
            var fl, hl = Dt.default.div(Ys || (Ys = Object(Bt.a)(["\n  ", ";\n  padding: 20px 16px;\n  font-size: 18px;\n  font-family: Helvetica;\n  font-weight: bold;\n  color: #FFFFFF;\n  line-height: 15px;\n  // color: ", ";\n  // ", ";\n"])), (function (e) {
                    return e.theme.flexRowNoWrap
                }), (function (e) {
                    return "blue" === e.color ? function (e) {
                        return e.theme.primary1
                    } : "inherit"
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(Gs || (Gs = Object(Bt.a)(["\n  //   padding: 1rem;\n  // "])))
                })),
                ml = Dt.default.div(Js || (Js = Object(Bt.a)(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"]))),
                jl = Dt.default.div(qs || (qs = Object(Bt.a)(["\n  padding: 1rem;\n  // border: 1px solid ", ";\n  border: 1px solid #2B2E40;\n  background: #161521;\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n"])), (function (e) {
                    return e.theme.bg3
                })),
                gl = Dt.default.div(Qs || (Qs = Object(Bt.a)(["\n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n\n  div {\n    ", "\n    align-items: center;\n  }\n"])), (function (e) {
                    return e.theme.flexRowNoWrap
                }), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.flexRowNoWrap
                })),
                xl = Dt.default.div(Hs || (Hs = Object(Bt.a)(["\n  padding: 0rem 1rem;\n  ", ";\n"])), (function (e) {
                    return e.theme.mediaWidth.upToMedium(Xs || (Xs = Object(Bt.a)(["padding: 0rem 1rem 1.5rem 1rem;"])))
                })),
                Ol = Dt.default.div(Ks || (Ks = Object(Bt.a)(["\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n"]))),
                vl = Dt.default.div(Zs || (Zs = Object(Bt.a)(["\n  ", "\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  // background-color: ", ";\n  background-color: #161521;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: #fff;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ", ";\n  }\n"])), (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.text3
                })),
                yl = Dt.default.div(_s || (_s = Object(Bt.a)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]))),
                wl = Object(Dt.default)(ka)($s || ($s = Object(Bt.a)(["\n  font-size: 0.825rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ", ";\n  }\n"])), (function (e) {
                    return e.theme.text3
                }), (function (e) {
                    return e.theme.text2
                })),
                Al = Dt.default.div(el || (el = Object(Bt.a)(["\n  position: absolute;\n  right: 19px;\n  top: 15px;\n  color: #fff;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                kl = Object(Dt.default)(Rs)(tl || (tl = Object(Bt.a)(["\n  path {\n    stroke: ", ";\n  }\n"])), (function (e) {
                    return e.theme.text4
                })),
                Il = Dt.default.div(nl || (nl = Object(Bt.a)(["\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ", ";\n"])), (function (e) {
                    return e.theme.text3
                })),
                Cl = Dt.default.div(rl || (rl = Object(Bt.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"])), (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(il || (il = Object(Bt.a)(["\n    align-items: flex-end;\n  "])))
                })),
                Tl = Dt.default.div(al || (al = Object(Bt.a)(["\n  ", ";\n"])), (function (e) {
                    return e.theme.flexColumnNoWrap
                })),
                El = Object(Dt.default)(po)(ol || (ol = Object(Bt.a)(["\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  color: #3C72EC;\n  border: 1px solid #3C72EC !important;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]))),
                Nl = Object(Dt.default)(El)(cl || (cl = Object(Bt.a)(["\n  color: ", ";\n"])), (function (e) {
                    return e.theme.primary1
                }));

            function Sl(e) {
                return Object(Ct.jsx)(Tl, {
                    children: e.map((function (e, t) {
                        return Object(Ct.jsx)(bl, {
                            hash: e
                        }, t)
                    }))
                })
            }

            function Ml(e) {
                var t = e.toggleWalletModal,
                    n = e.pendingTransactions,
                    r = e.confirmedTransactions,
                    a = e.ENSName,
                    o = e.openOptions,
                    c = It(),
                    s = c.chainId,
                    l = c.account,
                    u = c.connector,
                    p = c.deactivate,
                    b = Object(Nt.b)().t,
                    f = (Object(i.useContext)(Dt.ThemeContext), Object(d.c)());

                function h() {
                    return u === me ? Object(Ct.jsx)(Cl, {
                        size: 16,
                        children: Object(Ct.jsx)(ks, {})
                    }) : u === je ? Object(Ct.jsx)(Cl, {
                        size: 16,
                        children: Object(Ct.jsx)("img", {
                            src: Ie,
                            alt: "wallet connect logo"
                        })
                    }) : u === Oe ? Object(Ct.jsx)(Cl, {
                        size: 16,
                        children: Object(Ct.jsx)("img", {
                            src: Ce,
                            alt: "coinbase wallet logo"
                        })
                    }) : u === ge ? Object(Ct.jsx)(Cl, {
                        size: 16,
                        children: Object(Ct.jsx)("img", {
                            src: js,
                            alt: "fortmatic logo"
                        })
                    }) : u === xe ? Object(Ct.jsx)(Ct.Fragment, {
                        children: Object(Ct.jsxs)(Cl, {
                            size: 16,
                            children: [Object(Ct.jsx)("img", {
                                src: gs,
                                alt: "portis logo"
                            }), Object(Ct.jsx)(Nl, {
                                onClick: function () {
                                    xe.portis.showPortis()
                                },
                                children: "Show Portis"
                            })]
                        })
                    }) : null
                }
                var m = Object(i.useCallback)((function () {
                    s && f(Oo({
                        chainId: s
                    }))
                }), [f, s]);
                return Object(Ct.jsxs)(Ct.Fragment, {
                    children: [Object(Ct.jsxs)(ml, {
                        children: [Object(Ct.jsx)(Al, {
                            onClick: t,
                            children: Object(Ct.jsx)(kl, {})
                        }), Object(Ct.jsx)(hl, {
                            children: "Account"
                        }), Object(Ct.jsx)(xl, {
                            children: Object(Ct.jsx)(Ol, {
                                children: Object(Ct.jsxs)(jl, {
                                    children: [Object(Ct.jsxs)(gl, {
                                        children: [function () {
                                            var e = window.ethereum,
                                                t = !(!e || !e.isMetaMask),
                                                n = Object.keys(dt).filter((function (e) {
                                                    return dt[e].connector === u && (u !== me || t === ("METAMASK" === e))
                                                })).map((function (e) {
                                                    return dt[e].name
                                                }))[0];
                                            return Object(Ct.jsxs)(Il, {
                                                children: ["Connected with ", n]
                                            })
                                        }(), Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsx)(El, {
                                                style: {
                                                    fontSize: ".825rem",
                                                    fontWeight: 400,
                                                    marginRight: "8px"
                                                },
                                                onClick: function () {
                                                    p()
                                                },
                                                children: "Disconnect"
                                            }), Object(Ct.jsx)(El, {
                                                style: {
                                                    fontSize: ".825rem",
                                                    fontWeight: 400
                                                },
                                                onClick: function () {
                                                    o()
                                                },
                                                children: "Change"
                                            })]
                                        })]
                                    }), Object(Ct.jsx)(gl, {
                                        id: "web3-account-identifier-row",
                                        children: Object(Ct.jsx)(yl, {
                                            children: a ? Object(Ct.jsx)(Ct.Fragment, {
                                                children: Object(Ct.jsxs)("div", {
                                                    children: [h(), Object(Ct.jsxs)("p", {
                                                        style: {
                                                            color: "#fff"
                                                        },
                                                        children: [" ", a]
                                                    })]
                                                })
                                            }) : Object(Ct.jsx)(Ct.Fragment, {
                                                children: Object(Ct.jsxs)("div", {
                                                    children: [h(), Object(Ct.jsxs)("p", {
                                                        style: {
                                                            color: "#fff"
                                                        },
                                                        children: [" ", l && Dn(l)]
                                                    })]
                                                })
                                            })
                                        })
                                    }), Object(Ct.jsx)(gl, {
                                        children: a ? Object(Ct.jsx)(Ct.Fragment, {
                                            children: Object(Ct.jsx)(yl, {
                                                children: Object(Ct.jsxs)("div", {
                                                    children: [l && Object(Ct.jsx)(Vs, {
                                                        toCopy: l,
                                                        children: Object(Ct.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: "Copy Address"
                                                        })
                                                    }), s && l && Object(Ct.jsxs)(wl, {
                                                        hasENS: !!a,
                                                        isENS: !0,
                                                        href: s && Bn(s, a, "address"),
                                                        children: [Object(Ct.jsx)(da.a, {
                                                            size: 16
                                                        }), Object(Ct.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: b("view_on_ethrscan")
                                                        })]
                                                    })]
                                                })
                                            })
                                        }) : Object(Ct.jsx)(Ct.Fragment, {
                                            children: Object(Ct.jsx)(yl, {
                                                children: Object(Ct.jsxs)("div", {
                                                    children: [l && Object(Ct.jsx)(Vs, {
                                                        toCopy: l,
                                                        children: Object(Ct.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: "Copy Address"
                                                        })
                                                    }), s && l && Object(Ct.jsxs)(wl, {
                                                        hasENS: !!a,
                                                        isENS: !1,
                                                        href: Bn(s, l, "address"),
                                                        children: [Object(Ct.jsx)(da.a, {
                                                            size: 16
                                                        }), Object(Ct.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: b("view_on_ethrscan")
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    }), n.length || r.length ? Object(Ct.jsxs)(vl, {
                        children: [Object(Ct.jsxs)(xn, {
                            mb: "1rem",
                            style: {
                                justifyContent: "space-between"
                            },
                            children: [Object(Ct.jsx)(Qa, {
                                style: {
                                    color: "#fff"
                                },
                                children: "Recent Transactions"
                            }), Object(Ct.jsx)(ja, {
                                onClick: m,
                                children: "(clear all)"
                            })]
                        }), Sl(n), Sl(r)]
                    }) : Object(Ct.jsx)(vl, {
                        children: Object(Ct.jsx)(Qa, {
                            color: "#fff",
                            children: "Your transactions will appear here..."
                        })
                    })]
                })
            }
            var Ul = Dt.default.button.withConfig({
                    componentId: "sc-1v281fy-0"
                })(["background-color:#161521;padding:1rem;outline:none;border:1px solid #2B2E40 !important;border-radius:10px;width:49% !important;margin:0 0.5%;vertical-align:top;&:focus{box-shadow:0 0 0 1px ", ";}border-color:", ";"], (function (e) {
                    return e.theme.primary1
                }), (function (e) {
                    var t = e.theme;
                    return e.active ? "transparent" : t.bg3
                })),
                Rl = Object(Dt.default)(Ul).withConfig({
                    componentId: "sc-1v281fy-1"
                })(["display:inline-flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:14px;padding:1rem;"]),
                Bl = Dt.default.div.withConfig({
                    componentId: "sc-1v281fy-2"
                })(["", ";justify-content:center;height:100%;"], (function (e) {
                    return e.theme.flexColumnNoWrap
                })),
                Dl = Object(Dt.default)(Rl).withConfig({
                    componentId: "sc-1v281fy-3"
                })(["margin-top:0;&:hover{cursor:", ";border:", ";}opacity:", ";"], (function (e) {
                    return e.clickable ? "pointer" : ""
                }), (function (e) {
                    var t = e.clickable,
                        n = e.theme;
                    return t ? "1px solid ".concat(n.primary1) : ""
                }), (function (e) {
                    return e.disabled ? "0.5" : "1"
                })),
                Pl = Object(Dt.default)(Rl).withConfig({
                    componentId: "sc-1v281fy-4"
                })(["margin-top:0;width:100% !important;&:hover{cursor:", ";border:", ";}opacity:", ";"], (function (e) {
                    return e.clickable ? "pointer" : ""
                }), (function (e) {
                    var t = e.clickable,
                        n = e.theme;
                    return t ? "1px solid ".concat(n.primary1) : ""
                }), (function (e) {
                    return e.disabled ? "0.5" : "1"
                })),
                Ll = Dt.default.div.withConfig({
                    componentId: "sc-1v281fy-5"
                })(["", " justify-content:center;align-items:center;&:first-child{height:8px;width:8px;margin-right:8px;background-color:", ";border-radius:50%;}"], (function (e) {
                    return e.theme.flexRowNoWrap
                }), (function (e) {
                    return e.theme.green1
                })),
                Fl = Dt.default.div.withConfig({
                    componentId: "sc-1v281fy-6"
                })(["color:", ";display:flex;justify-content:center;align-items:center;"], (function (e) {
                    return e.theme.green1
                })),
                zl = Dt.default.div.withConfig({
                    componentId: "sc-1v281fy-7"
                })(["", ";color:#fff;font-size:14px;line-height:15px;font-family:Helvetica;font-weight:bold;"], (function (e) {
                    return e.theme.flexRowNoWrap
                })),
                Wl = Dt.default.div.withConfig({
                    componentId: "sc-1v281fy-8"
                })(["color:#fff;margin-top:10px;font-size:12px;"]),
                Vl = Dt.default.div.withConfig({
                    componentId: "sc-1v281fy-9"
                })(["", ";align-items:center;justify-content:center;& > img,span{height:", ";width:", ";}", ";"], (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "24px"
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "24px"
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(fl || (fl = Object(Bt.a)(["\n    align-items: flex-end;\n  "])))
                }));

            function Yl(e) {
                var t = e.link,
                    n = void 0 === t ? null : t,
                    r = e.clickable,
                    i = void 0 === r || r,
                    a = e.size,
                    o = e.onClick,
                    c = void 0 === o ? null : o,
                    s = e.color,
                    l = e.header,
                    u = e.subheader,
                    d = void 0 === u ? null : u,
                    p = e.icon,
                    b = e.active,
                    f = void 0 !== b && b,
                    h = e.id,
                    m = d ? Object(Ct.jsxs)(Pl, {
                        id: h,
                        onClick: c,
                        clickable: i && !f,
                        active: f,
                        children: [Object(Ct.jsxs)(Bl, {
                            children: [Object(Ct.jsxs)(zl, {
                                color: s,
                                children: [f ? Object(Ct.jsx)(Fl, {
                                    children: Object(Ct.jsx)(Ll, {
                                        children: Object(Ct.jsx)("div", {})
                                    })
                                }) : "", l]
                            }), Object(Ct.jsx)(Wl, {
                                children: d
                            })]
                        }), Object(Ct.jsx)(Vl, {
                            size: a,
                            children: Object(Ct.jsx)("img", {
                                src: p,
                                alt: "Icon"
                            })
                        })]
                    }) : Object(Ct.jsxs)(Dl, {
                        id: h,
                        onClick: c,
                        clickable: i && !f,
                        active: f,
                        children: [Object(Ct.jsx)(Bl, {
                            children: Object(Ct.jsxs)(zl, {
                                color: s,
                                children: [f ? Object(Ct.jsx)(Fl, {
                                    children: Object(Ct.jsx)(Ll, {
                                        children: Object(Ct.jsx)("div", {})
                                    })
                                }) : "", l]
                            })
                        }), Object(Ct.jsx)(Vl, {
                            size: a,
                            children: Object(Ct.jsx)("img", {
                                src: p,
                                alt: "Icon"
                            })
                        })]
                    });
                return n ? Object(Ct.jsx)(ka, {
                    href: n,
                    children: m
                }) : m
            }
            var Gl, Jl, ql, Ql = Dt.default.div.withConfig({
                    componentId: "utawy4-0"
                })(["", ";align-items:center;justify-content:center;width:100%;& > *{width:100%;}"], (function (e) {
                    return e.theme.flexColumnNoWrap
                })),
                Hl = Object(Dt.default)(Ns).withConfig({
                    componentId: "utawy4-1"
                })(["margin-right:1rem;"]),
                Xl = Dt.default.div.withConfig({
                    componentId: "utawy4-2"
                })(["", ";align-items:center;justify-content:flex-start;border-radius:12px;margin-bottom:20px;color:#fff;border:1px solid #2B2E40;background-color:#161521;& > *{padding:1rem;}"], (function (e) {
                    return e.theme.flexRowNoWrap
                })),
                Kl = Dt.default.div.withConfig({
                    componentId: "utawy4-3"
                })(["", ";align-items:center;justify-content:flex-start;"], (function (e) {
                    return e.theme.flexRowNoWrap
                })),
                Zl = Dt.default.div.withConfig({
                    componentId: "utawy4-4"
                })(["border-radius:8px;font-size:12px;color:", ";background-color:", ";margin-left:1rem;padding:0.5rem;font-weight:600;user-select:none;&:hover{cursor:pointer;background-color:", ";}"], (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.text4)
                })),
                _l = Dt.default.div.withConfig({
                    componentId: "utawy4-5"
                })(["", ";align-items:center;justify-content:center;"], (function (e) {
                    return e.theme.flexRowNoWrap
                }));

            function $l(e) {
                var t, n, r = e.connector,
                    i = e.error,
                    a = void 0 !== i && i,
                    o = e.setPendingError,
                    c = e.tryActivation,
                    s = null === (t = window) || void 0 === t || null === (n = t.ethereum) || void 0 === n ? void 0 : n.isMetaMask,
                    l = Object(Nt.b)().t;
                return Object(Ct.jsxs)(Ql, {
                    children: [Object(Ct.jsx)(Xl, {
                        error: a,
                        children: Object(Ct.jsx)(_l, {
                            children: a ? Object(Ct.jsxs)(Kl, {
                                children: [Object(Ct.jsx)("div", {
                                    children: l("error_connecting")
                                }), Object(Ct.jsx)(Zl, {
                                    onClick: function () {
                                        o(!1), r && c(r)
                                    },
                                    children: "Try Again"
                                })]
                            }) : Object(Ct.jsxs)(Ct.Fragment, {
                                children: [Object(Ct.jsx)(Hl, {}), "Initializing..."]
                            })
                        })
                    }), Object.keys(dt).map((function (e) {
                        var t = dt[e];
                        if (t.connector === r) {
                            if (t.connector === me) {
                                if (s && "MetaMask" !== t.name) return null;
                                if (!s && "MetaMask" === t.name) return null
                            }
                            return Object(Ct.jsx)(Yl, {
                                id: "connect-".concat(e),
                                clickable: !1,
                                color: t.color,
                                header: t.name,
                                subheader: t.description,
                                icon: t.iconURL
                            }, e)
                        }
                        return null
                    }))]
                })
            }
            var eu, tu, nu, ru, iu, au, ou, cu, su, lu, uu, du = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-0"
                })(["position:absolute;right:19px;top:16px;color:#fff;&:hover{cursor:pointer;opacity:0.6;}"]),
                pu = Object(Dt.default)(Rs).withConfig({
                    componentId: "sc-5i4iqq-1"
                })(["width:20px;path{stroke:", ";}"], (function (e) {
                    return e.theme.text4
                })),
                bu = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-2"
                })(["", " margin:0;padding:0;width:100%;"], (function (e) {
                    return e.theme.flexColumnNoWrap
                })),
                fu = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-3"
                })(["", ";padding:20px 16px;font-weight:500;color:#fff;font-size:18px;line-height:15px;", ";"], (function (e) {
                    return e.theme.flexRowNoWrap
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(Gl || (Gl = Object(Bt.a)(["\n    padding: 1rem;\n  "])))
                })),
                hu = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-4"
                })(["background-color:#202230;padding:0 1rem 1rem 1rem;border-bottom-left-radius:20px;border-bottom-right-radius:20px;", ";"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(Jl || (Jl = Object(Bt.a)(["padding: 0 1rem 1rem 1rem"])))
                })),
                mu = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-5"
                })(["position:relative;h5{margin:0;margin-bottom:0.5rem;font-size:15px;font-weight:400;color:#fff;}h5:last-child{margin-bottom:0px;}h4{margin-top:0;font-weight:500;}"]),
                ju = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-6"
                })(["display:block;grid-gap:10px;", ";"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(ql || (ql = Object(Bt.a)(["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "])))
                })),
                gu = Dt.default.div.withConfig({
                    componentId: "sc-5i4iqq-7"
                })(["text-decoration:none;font-size:18px;font-family:Helvetica;font-weight:bold;color:#FFFFFF;line-height:15px;display:flex;align-items:center;:hover{cursor:pointer;}"]),
                xu = "options",
                Ou = "account",
                vu = "pending";

            function yu(e) {
                var t = e.pendingTransactions,
                    n = e.confirmedTransactions,
                    a = e.ENSName,
                    c = Object(r.d)(),
                    s = c.active,
                    l = c.account,
                    d = c.connector,
                    p = c.activate,
                    b = c.error,
                    f = Object(i.useState)(Ou),
                    h = Object(P.a)(f, 2),
                    m = h[0],
                    j = h[1],
                    g = Object(i.useState)(),
                    x = Object(P.a)(g, 2),
                    v = x[0],
                    y = x[1],
                    w = Object(i.useState)(),
                    A = Object(P.a)(w, 2),
                    C = A[0],
                    T = A[1],
                    E = fr(cr.WALLET),
                    N = mr(),
                    S = Bs(l),
                    M = Object(Nt.b)().t;
                Object(i.useEffect)((function () {
                    l && !S && E && N()
                }), [l, S, N, E]), Object(i.useEffect)((function () {
                    E && (T(!1), j(Ou))
                }), [E]);
                var U = Bs(s),
                    R = Bs(d);
                Object(i.useEffect)((function () {
                    E && (s && !U || d && d !== R && !b) && j(Ou)
                }), [j, s, b, d, E, U, R]);
                var B = function () {
                    var e = Object(I.a)(k.a.mark((function e(t) {
                        var n, i;
                        return k.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i = "", Object.keys(dt).map((function (e) {
                                        return t !== dt[e].connector || (i = dt[e].name)
                                    })), u.a.event({
                                        category: "Wallet",
                                        action: "Change Wallet",
                                        label: i
                                    }), y(t), j(vu), t instanceof O.a && (null === (n = t.walletConnectProvider) || void 0 === n ? void 0 : n.rpcUrl) && (t.walletConnectProvider = void 0), t && p(t, void 0, !0).catch((function (e) {
                                        "MetaMask" === i && o.isMobile ? window.open("https://metamask.app.link/dapp/".concat(window.location.href), "_blank", "noopener noreferrer") : e instanceof r.a ? p(t) : T(!0)
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }();

                function D() {
                    var e = window.ethereum && window.ethereum.isMetaMask;
                    return Object.keys(dt).map((function (t) {
                        var n = dt[t];
                        if (o.isMobile) return window.web3 || window.ethereum || !n.mobile ? null : Object(Ct.jsx)(Yl, {
                            onClick: function () {
                                n.connector !== d && !n.href && B(n.connector)
                            },
                            id: "connect-".concat(t),
                            active: n.connector && n.connector === d,
                            color: n.color,
                            link: n.href,
                            header: n.name,
                            subheader: null,
                            icon: n.iconURL
                        }, t);
                        if (n.connector === me) {
                            if (!window.web3 && !window.ethereum) return "MetaMask" === n.name ? Object(Ct.jsx)(Yl, {
                                id: "connect-".concat(t),
                                color: "#E8831D",
                                header: "Install Metamask",
                                subheader: null,
                                link: "https://metamask.io/",
                                icon: ke
                            }, t) : null;
                            if ("MetaMask" === n.name && !e) return null;
                            if ("Injected" === n.name && e) return null
                        }
                        return !o.isMobile && !n.mobileOnly && Object(Ct.jsx)(Yl, {
                            id: "connect-".concat(t),
                            onClick: function () {
                                n.connector === d ? j(Ou) : !n.href && B(n.connector)
                            },
                            active: n.connector === d,
                            color: n.color,
                            link: n.href,
                            header: n.name,
                            subheader: null,
                            icon: n.iconURL
                        }, t)
                    }))
                }
                return Object(i.useEffect)((function () {
                    ge.on(F, (function () {
                        N()
                    }))
                }), [N]), Object(Ct.jsx)(tn, {
                    isOpen: E,
                    onDismiss: N,
                    minHeight: !1,
                    maxHeight: 90,
                    children: Object(Ct.jsx)(bu, {
                        children: b ? Object(Ct.jsxs)(mu, {
                            children: [Object(Ct.jsx)(du, {
                                onClick: N,
                                children: Object(Ct.jsx)(pu, {})
                            }), Object(Ct.jsx)(fu, {
                                children: b instanceof r.a ? M("wrong_network") : M("error_connecting")
                            }), Object(Ct.jsx)(hu, {
                                children: b instanceof r.a ? Object(Ct.jsx)("h5", {
                                    children: M("connect_to_the_appropriate_ethereum_network")
                                }) : M("error_connecting")
                            })]
                        }) : l && m === Ou ? Object(Ct.jsx)(Ml, {
                            toggleWalletModal: N,
                            pendingTransactions: t,
                            confirmedTransactions: n,
                            ENSName: a,
                            openOptions: function () {
                                return j(xu)
                            }
                        }) : Object(Ct.jsxs)(mu, {
                            children: [Object(Ct.jsx)(du, {
                                onClick: N,
                                children: Object(Ct.jsx)(pu, {})
                            }), m !== Ou ? Object(Ct.jsx)(fu, {
                                color: "blue",
                                children: Object(Ct.jsx)(gu, {
                                    onClick: function () {
                                        T(!1), j(Ou)
                                    },
                                    children: M("back")
                                })
                            }) : Object(Ct.jsx)(fu, {
                                children: Object(Ct.jsx)(gu, {
                                    children: M("connect_to_wallet")
                                })
                            }), Object(Ct.jsxs)(hu, {
                                children: [m === vu ? Object(Ct.jsx)($l, {
                                    connector: v,
                                    error: C,
                                    setPendingError: T,
                                    tryActivation: B
                                }) : Object(Ct.jsx)(ju, {
                                    children: D()
                                }), Object(Ct.jsx)(us, {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    children: Object(Ct.jsx)(xn, {
                                        style: {
                                            flexWrap: "nowrap"
                                        },
                                        children: Object(Ct.jsxs)(Va, {
                                            fontSize: 14,
                                            children: [M("agree_to_uniswap_and_bloxroute_terms_SEC1"), " ", Object(Ct.jsx)(ka, {
                                                href: "https://uniswap.org/terms-of-service/",
                                                children: M("uniswap_terms_link")
                                            }), M("agree_to_uniswap_and_bloxroute_terms_SEC2"), " ", Object(Ct.jsx)(ka, {
                                                href: "https://bloxroute.com/wp-content/uploads/2021/03/ToS-Updated-3-18-21.pdf",
                                                children: M("bloxroute_terms_link")
                                            }), "."]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var wu = Dt.default.div(eu || (eu = Object(Bt.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ", ";\n    width: ", ";\n  }\n"])), (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                })),
                Au = Object(Dt.default)(po)(tu || (tu = Object(Bt.a)(["\n  ", "\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  // :focus {\n  //   outline: none;\n  // }\n"])), (function (e) {
                    return e.theme.flexRowNoWrap
                })),
                ku = Object(Dt.default)(Au)(nu || (nu = Object(Bt.a)(["\n  background-color: ", ";\n  // border: 1px solid ", ";\n  border: 1px solid transparent !important;\n  color: ", ";\n  font-weight: 500;\n  // :hover,\n  // :focus {\n  //   // background-color: ", ";\n  // }\n"])), (function (e) {
                    return e.theme.red1
                }), (function (e) {
                    return e.theme.red1
                }), (function (e) {
                    return e.theme.white
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.1, t.red1)
                })),
                Iu = Object(Dt.default)(Au)(ru || (ru = Object(Bt.a)(["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  font-weight: 500;\n  width: 160px;\n  height: 43px;\n  background: linear-gradient(-240deg, #315ECF 0%, #BC29BB 100%);\n  border-radius: 20px;\n  border: 0 !important;\n  // :hover,\n  // :focus {\n  //   border: 1px solid ", ";\n  //   color: ", ";\n  // }\n\n  ", "\n"])), (function (e) {
                    return e.theme.primary4
                }), (function (e) {
                    return e.theme.primaryText1
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.05, t.primary4)
                }), (function (e) {
                    return e.theme.primaryText1
                }), (function (e) {
                    return e.faded && Object(Dt.css)(iu || (iu = Object(Bt.a)(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n\n      // :hover,\n      // :focus {\n      //   border: 1px solid ", ";\n      //   color: ", ";\n      // }\n    "])), (function (e) {
                        return e.theme.primary5
                    }), (function (e) {
                        return e.theme.primary5
                    }), (function (e) {
                        return e.theme.primaryText1
                    }), (function (e) {
                        var t = e.theme;
                        return Object(Xt.a)(.05, t.primary4)
                    }), (function (e) {
                        var t = e.theme;
                        return Object(Xt.a)(.05, t.primaryText1)
                    }))
                })),
                Cu = Object(Dt.default)(Au)(au || (au = Object(Bt.a)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  // :hover,\n  // :focus {\n  //   background-color: ", ";\n\n  //   :focus {\n  //     border: 1px solid ", ";\n  //   }\n  // }\n"])), (function (e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? n.primary1 : n.bg1
                }), (function (e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? n.primary1 : n.bg2
                }), (function (e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? n.white : n.text1
                }), (function (e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? Object(Xt.a)(.05, n.primary1) : Object(Xt.b)(.05, n.bg1)
                }), (function (e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? Object(Xt.a)(.1, n.primary1) : Object(Xt.a)(.1, n.bg2)
                })),
                Tu = Dt.default.p(ou || (ou = Object(Bt.a)(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n"]))),
                Eu = Dt.default.p(cu || (cu = Object(Bt.a)(["\n  font-size: 14px\n  font-family: Helvetica;\n  font-weight: bold;\n  color: #FFFFFF;\n  line-height: 15px;\n  margin-bottom: 0;\n"]))),
                Nu = Object(Dt.default)(ms.a)(su || (su = Object(Bt.a)(["\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n"]))),
                Su = Dt.default.span(lu || (lu = Object(Bt.a)(["\n  ", ";\n"])), (function (e) {
                    return e.theme.mediaWidth.upToMedium(uu || (uu = Object(Bt.a)(["\n    display: none;\n  "])))
                }));

            function Mu(e, t) {
                return t.addedTime - e.addedTime
            }
            var Uu = Object(Ct.jsx)("span", {
                role: "img",
                "aria-label": "has socks emoji",
                style: {
                    marginTop: -4,
                    marginBottom: -4
                },
                children: "\ud83e\udde6"
            });

            function Ru(e) {
                var t = e.connector;
                return t === me ? Object(Ct.jsx)(ks, {}) : t === je ? Object(Ct.jsx)(wu, {
                    size: 16,
                    children: Object(Ct.jsx)("img", {
                        src: Ie,
                        alt: ""
                    })
                }) : t === Oe ? Object(Ct.jsx)(wu, {
                    size: 16,
                    children: Object(Ct.jsx)("img", {
                        src: Ce,
                        alt: ""
                    })
                }) : t === ge ? Object(Ct.jsx)(wu, {
                    size: 16,
                    children: Object(Ct.jsx)("img", {
                        src: js,
                        alt: ""
                    })
                }) : t === xe ? Object(Ct.jsx)(wu, {
                    size: 16,
                    children: Object(Ct.jsx)("img", {
                        src: gs,
                        alt: ""
                    })
                }) : null
            }

            function Bu() {
                var e = Object(Nt.b)().t,
                    t = Object(r.d)(),
                    n = t.account,
                    a = t.connector,
                    o = t.error,
                    c = Fo(null !== n && void 0 !== n ? n : void 0).ENSName,
                    s = Ao(),
                    l = Object(i.useMemo)((function () {
                        return Object.values(s).filter(ko).sort(Mu)
                    }), [s]).filter((function (e) {
                        return !e.receipt
                    })).map((function (e) {
                        return e.hash
                    })),
                    u = !!l.length,
                    d = function () {
                        var e = xs();
                        return Object(i.useMemo)((function () {
                            return e && g.a.greaterThan(e, g.a.BigInt(0))
                        }), [e])
                    }(),
                    p = mr();
                return n ? Object(Ct.jsxs)(Cu, {
                    id: "web3-status-connected",
                    onClick: p,
                    pending: u,
                    children: [u ? Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsxs)(Tu, {
                            children: [null === l || void 0 === l ? void 0 : l.length, " Pending"]
                        }), " ", Object(Ct.jsx)(Ns, {
                            stroke: "white"
                        })]
                    }) : Object(Ct.jsxs)(Ct.Fragment, {
                        children: [d ? Uu : null, Object(Ct.jsx)(Tu, {
                            children: c || Dn(n)
                        })]
                    }), !u && a && Object(Ct.jsx)(Ru, {
                        connector: a
                    })]
                }) : o ? Object(Ct.jsxs)(ku, {
                    onClick: p,
                    children: [Object(Ct.jsx)(Nu, {}), Object(Ct.jsx)(Tu, {
                        children: o instanceof r.a ? e("wrong_network") : e("error")
                    })]
                }) : Object(Ct.jsx)(Su, {
                    children: Object(Ct.jsx)(Iu, {
                        id: "connect-wallet",
                        onClick: p,
                        faded: !n,
                        children: Object(Ct.jsx)(Eu, {
                            children: e("connect_to_wallet")
                        })
                    })
                })
            }

            function Du() {
                var e = Object(r.d)(),
                    t = e.active,
                    n = e.account,
                    a = Object(r.d)(pt),
                    o = Fo(null !== n && void 0 !== n ? n : void 0).ENSName,
                    c = Ao(),
                    s = Object(i.useMemo)((function () {
                        return Object.values(c).filter(ko).sort(Mu)
                    }), [c]),
                    l = s.filter((function (e) {
                        return !e.receipt
                    })).map((function (e) {
                        return e.hash
                    })),
                    u = s.filter((function (e) {
                        return e.receipt
                    })).map((function (e) {
                        return e.hash
                    }));
                return a.active || t ? Object(Ct.jsxs)(Ct.Fragment, {
                    children: [Object(Ct.jsx)(Bu, {}), Object(Ct.jsx)(yu, {
                        ENSName: null !== o && void 0 !== o ? o : void 0,
                        pendingTransactions: l,
                        confirmedTransactions: u
                    })]
                }) : null
            }
            var Pu, Lu, Fu, zu, Wu, Vu, Yu, Gu, Ju, qu, Qu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAztJREFUSEu1llmoV1UUxn+fGMp1QkVEbHDCUlNCTS1JFHwo9EHCNLQcEiTIIUsNIRxAEHHKgYpIFFEpA/FBsYdADEe0CEsxSTFMMIXUzBla8l3WuRxv917/gXe//Ie9z/n2WvsbtmhgREQzYAQwBngJeAZoA1wHfgcOA7uAfZLu1vcq1TUREU2Bd4DFQKdcE0B5ffn3ZWA5sEHSvdrv/A9IRDwL7AD6Af8Am4BDCei5YvwKLASGAVOAFsAJYLyk02Wgh0Ai4kXgW6AdsBN4F3DLDgLtgW3AdGAjMAFwBUOB+8BnwOvAX8Crko4VQDUgEfFc7tg99/+XsgWTAVcwKne7GxidVe7N3X8FfAR0BNzGv32GRUXVIBHxBHA8WzQ3v68G+udu3BpX0RaYA6wBrmabuuWan4D3AXdjRYIPlHS/APGLPbFN0lsJ/CRwHjibFXSugyQXgdtAV6CLpD/yWW/I7ZwnaaUionnSsQroLsl9dnVmi8H7SToZEW7FG8B6YCbwjaQ/I+IF4EdvUpJb5mc7AOeAW6a9Qcb6AeBTSe/loibABeCMJOukekSEz6X6TCTtKf1/IKt5StK/udabmQGMM4gpagoOl7Q/F/QBfgFmS1pXAcgHwCrgeVed73gF+B7YbBBzuxdQ5UPKBW8DW5IhRyoAGZLqnyzJzxVkcrtOG+Ra9m5S6WDfBKZZWMn7YmowsBT4GDhaWm9dfQ18mZ/FlAGrDGJeN+owiM3uJtBYlbQwiA/Yim6sMznzuNg1C1jbELssMLuubdoiMzP+r072AT2BenXyKMX3lXSqluItsh2SrkREb+Bn60TS/FqKt+U8XYl3/ZbeZS+rPexVJk0PK16SXcKdKLxrvqQVdbnwh+nCdtqyC29PF7bTfpL6sZm6TR72Lyt/ILAyqxtQ48KJ7jyxultlnlwBliW1zb6RGWZFnjicvgMcA1uBBRls1t0NYMhDeVKyjUGZjM6NhpLxC2BiVvMy4EvE55mMzpnXJNU4Ql0Z74psEeWMd/wuST0Ve3IFizJ+pwItK8r4UkWV3FZs6aa6hzPIobeuottKmT4ZaM5z58iAvHe1zgz3vesHwLmyW9Kd+gzwAb0vk4iVccjWAAAAAElFTkSuQmCC",
                Hu = (n(737), Dt.default.div.withConfig({
                    componentId: "sc-121qjot-0"
                })(["display:grid;grid-template-columns:120px 1fr 120px;align-items:center;justify-content:space-between;align-items:center;flex-direction:row;width:100%;top:0;position:relative;padding:1rem;z-index:21;position:relative;padding:1.51vw 9.21vw;background-image:", " background-position:", ";background-size:100% 200%;box-shadow:0px 0px 0px 1px ", ";transition:background-position .1s,box-shadow .1s;", ";"], (function (e) {
                    var t = e.theme;
                    return "linear-gradient(to bottom, transparent 50%, ".concat(t.bg0, " 50% )}}")
                }), (function (e) {
                    return e.showBackground ? "0 -100%" : "0 0"
                }), (function (e) {
                    var t = e.theme;
                    return e.showBackground ? t.bg2 : "transparent;"
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(Pu || (Pu = Object(Bt.a)(["\n    padding:  1rem;\n    grid-template-columns: 120px 1fr;\n    display: block;\n    text-align: center;\n  "])))
                }))),
                Xu = Dt.default.div.withConfig({
                    componentId: "sc-121qjot-1"
                })(["display:flex;flex-direction:row;align-items:center;justify-self:flex-end;", ";"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(Lu || (Lu = Object(Bt.a)(["\n    flex-direction: row;\n    justify-content: space-between;\n    justify-self: flex-end;\n    // width: 100%;\n    // max-width: 960px;\n    padding: 1rem 0;\n    position: absolute;\n    top: 45px;\n    right: 0px !important;\n    // width: 100%;\n    z-index: 99;\n    height: 19.2vw;\n    border-radius: 3.2vw 3.2vw 0 0;\n    // background-color: ", ";\n    button p {\n      display: none;\n    }\n  "])), (function (e) {
                        return e.theme.bg1
                    }))
                })),
                Ku = (Dt.default.div.withConfig({
                    componentId: "sc-121qjot-2"
                })(["display:flex;flex-direction:row;align-items:center;justify-self:flex-center;font-size:1.5rem;justify-content:center;font-family:'Montserrat',sans-serif;"]), Dt.default.div.withConfig({
                    componentId: "sc-121qjot-3"
                })(["display:flex;align-items:center;& > *:not(:first-child){margin-left:8px;}", ";"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(Fu || (Fu = Object(Bt.a)(["\n    flex-direction: row-reverse;\n    align-items: center;\n  "])))
                }))),
                Zu = Object(Dt.default)(On).withConfig({
                    componentId: "sc-121qjot-4"
                })(["", ";"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(zu || (zu = Object(Bt.a)(["\n   width: 100%;\n   display: block;\n  "])))
                })),
                _u = Dt.default.div.withConfig({
                    componentId: "sc-121qjot-5"
                })(["display:flex;flex-direction:row;align-items:center;border-radius:12px;white-space:nowrap;width:100%;cursor:pointer;"]),
                $u = Dt.default.span.withConfig({
                    componentId: "sc-121qjot-6"
                })(["", ";"], (function (e) {
                    return e.theme.mediaWidth.upToSmall(Wu || (Wu = Object(Bt.a)(["\n    display: none;\n  "])))
                })),
                ed = Dt.default.span.withConfig({
                    componentId: "sc-121qjot-7"
                })(["", ";"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(Vu || (Vu = Object(Bt.a)(["\n    // display: none;\n    width: 100%;\n    img {\n      width: 70vw !important;\n      max-width: 500px;\n    }\n  "])))
                })),
                td = Object(Dt.default)(hs).withConfig({
                    componentId: "sc-121qjot-8"
                })(["border-radius:12px;padding:8px 12px;", ";"], (function (e) {
                    return e.theme.mediaWidth.upToSmall(Yu || (Yu = Object(Bt.a)(["\n    margin: 0;\n    margin-right: 0.5rem;\n    width: initial;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    flex-shrink: 1;\n  "])))
                })),
                nd = Object(Dt.default)(yn.b).withConfig({
                    componentId: "sc-121qjot-9"
                })(["", ";"], (function (e) {
                    return e.theme.mediaWidth.upToExtraSmall(Gu || (Gu = Object(Bt.a)(["\n    // display: none;\n  "])))
                })),
                rd = Dt.default.a.withConfig({
                    componentId: "sc-121qjot-10"
                })(["display:flex;align-items:center;pointer-events:auto;justify-self:flex-start;margin-right:12px;", ";:hover{cursor:pointer;}"], (function (e) {
                    return e.theme.mediaWidth.upToMedium(Ju || (Ju = Object(Bt.a)(["\n    justify-self: center;\n    display: block;\n  "])))
                })),
                id = Dt.default.div.withConfig({
                    componentId: "sc-121qjot-11"
                })(["transition:transform 0.3s ease;img{width:auto;}"]),
                ad = (Dt.default.button.withConfig({
                    componentId: "sc-121qjot-12"
                })(["position:relative;width:100%;height:100%;border:none;background-color:transparent;margin:0;padding:0;height:35px;background-color:", ";margin-left:8px;padding:0.15rem 0.5rem;border-radius:0.5rem;:hover,:focus{cursor:pointer;outline:none;background-color:", ";}svg{margin-top:2px;}> *{stroke:", ";}"], (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    return e.theme.text1
                })), qu = {}, Object(h.a)(qu, m.a.RINKEBY, "Rinkeby"), Object(h.a)(qu, m.a.ROPSTEN, "Ropsten"), Object(h.a)(qu, m.a.G\u00d6RLI, "G\xf6rli"), Object(h.a)(qu, m.a.KOVAN, "Kovan"), qu);

            function od() {
                var e, t = It(),
                    n = t.account,
                    r = t.chainId,
                    a = null === (e = is(n ? [n] : [])) || void 0 === e ? void 0 : e[null !== n && void 0 !== n ? n : ""],
                    o = function () {
                        var e = Object(d.c)(),
                            t = Ni(),
                            n = Object(i.useCallback)((function () {
                                e(bi({
                                    userDarkMode: !t
                                }))
                            }), [t, e]);
                        return [t, n]
                    }(),
                    c = (Object(P.a)(o, 1)[0], Object(nc.a)(), rc.a.Option);
                Object(Nt.b)().t;
                return Object(Ct.jsxs)(Hu, {
                    showBackground: !1,
                    children: [Object(Ct.jsx)(ed, {
                        children: Object(Ct.jsx)(Zu, {
                            children: Object(Ct.jsx)(rd, {
                                href: "/",
                                children: Object(Ct.jsx)(id, {
                                    children: Object(Ct.jsx)("img", {
                                        src: ic,
                                        height: 43,
                                        alt: "logo"
                                    })
                                })
                            })
                        })
                    }), Object(Ct.jsx)(Xu, {
                        children: Object(Ct.jsxs)(Ku, {
                            children: [Object(Ct.jsx)($u, {
                                children: r && ad[r] && Object(Ct.jsx)(td, {
                                    title: ad[r],
                                    children: ad[r]
                                })
                            }), Object(Ct.jsxs)(_u, {
                                active: !!n,
                                style: {
                                    pointerEvents: "auto"
                                },
                                children: [n && a ? Object(Ct.jsxs)(nd, {
                                    style: {
                                        flexShrink: 0
                                    },
                                    pl: "0.75rem",
                                    pr: "0.5rem",
                                    fontWeight: 500,
                                    color: "#fff",
                                    children: [null === a || void 0 === a ? void 0 : a.toSignificant(4), " ETH"]
                                }) : null, Object(Ct.jsx)(Du, {})]
                            })]
                        })
                    })]
                })
            }
            var cd, sd, ld, ud, dd, pd = n(1816),
                bd = n(1817);
            n(512);

            function fd() {
                var e = rc.a.Option,
                    t = Object(Nt.b)().t;
                return Object(Ct.jsx)("div", {
                    className: "HomeHeader",
                    children: Object(Ct.jsx)(pd.a, {
                        children: Object(Ct.jsxs)(bd.a, {
                            span: "20",
                            offset: 2,
                            children: [Object(Ct.jsx)("a", {
                                href: "/",
                                children: Object(Ct.jsx)("img", {
                                    src: ic,
                                    height: 43,
                                    width:"auto",
                                    alt: "logo"
                                })
                            }), Object(Ct.jsx)(p.b, {
                                to: "/swap",
                                className: "LaunchAppBtn",
                                children: t("launch_app")
                            })]
                        })
                    })
                })
            }
            var hd = Dt.default.div(cd || (cd = Object(Bt.a)(["\n  position: fixed;\n  display: flex;\n  right: 0;\n  bottom: 0;\n  padding: 1rem;\n  color: white;\n  transition: opacity 0.25s ease;\n  color: ", ";\n  :hover {\n    opacity: 1;\n  }\n\n  ", "\n"])), (function (e) {
                    return e.theme.green1
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(sd || (sd = Object(Bt.a)(["\n    display: none;\n  "])))
                })),
                md = Dt.default.div(ld || (ld = Object(Bt.a)(["\n  width: 8px;\n  height: 8px;\n  min-height: 8px;\n  min-width: 8px;\n  margin-left: 0.5rem;\n  margin-top: 3px;\n  border-radius: 50%;\n  position: relative;\n  background-color: ", ";\n"])), (function (e) {
                    return e.theme.green1
                })),
                jd = Object(Dt.keyframes)(ud || (ud = Object(Bt.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                gd = Dt.default.div(dd || (dd = Object(Bt.a)(["\n  animation: ", " 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n  transform: translateZ(0);\n\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  border-left: 2px solid ", ";\n  background: transparent;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  position: relative;\n\n  left: -3px;\n  top: -3px;\n"])), jd, (function (e) {
                    return e.theme.green1
                }));

            function xd() {
                var e = It().chainId,
                    t = br(),
                    n = Object(i.useState)(!0),
                    r = Object(P.a)(n, 2),
                    a = r[0],
                    o = r[1];
                return Object(i.useEffect)((function () {
                    var e = setTimeout((function () {
                        return o(!0)
                    }), 1e3);
                    return console.log(t),
                        function () {
                            o(!1), clearTimeout(e)
                        }
                }), [t]), Object(Ct.jsx)(ka, {
                    href: e && t ? Bn(e, t.toString(), "block") : "",
                    children: Object(Ct.jsxs)(hd, {
                        children: [Object(Ct.jsx)(Za, {
                            style: {
                                opacity: a ? "1" : "0.6"
                            },
                            children: t
                        }), Object(Ct.jsx)(md, {
                            children: !a && Object(Ct.jsx)(gd, {})
                        })]
                    })
                })
            }
            var Od = n(138),
                vd = {
                    pending: Object(sr.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(sr.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(sr.b)("lists/fetchTokenList/rejected")
                },
                yd = Object(sr.b)("lists/addList"),
                wd = Object(sr.b)("lists/removeList"),
                Ad = Object(sr.b)("lists/enableList"),
                kd = Object(sr.b)("lists/disableList"),
                Id = Object(sr.b)("lists/acceptListUpdate");
            Object(sr.b)("lists/rejectVersionUpdate");

            function Cd(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
            }
            var Td = Dt.default.ul.withConfig({
                componentId: "v7vwla-0"
            })(["max-height:400px;overflow:auto;"]);

            function Ed(e) {
                var t = e.popKey,
                    n = e.listUrl,
                    r = e.oldList,
                    o = e.newList,
                    c = e.auto,
                    s = jr(),
                    l = Object(i.useCallback)((function () {
                        return s(t)
                    }), [t, s]),
                    p = Object(d.c)(),
                    b = Object(i.useCallback)((function () {
                        c || (u.a.event({
                            category: "Lists",
                            action: "Update List from Popup",
                            label: n
                        }), p(Id(n)), l())
                    }), [c, p, n, l]),
                    f = Object(i.useMemo)((function () {
                        return Object(Od.b)(r.tokens, o.tokens)
                    }), [o.tokens, r.tokens]),
                    h = f.added,
                    m = f.changed,
                    j = f.removed,
                    g = Object(i.useMemo)((function () {
                        return Object.keys(m).reduce((function (e, t) {
                            return e + Object.keys(m[t]).length
                        }), 0)
                    }), [m]);
                return Object(Ct.jsx)(xn, {
                    children: Object(Ct.jsx)(an, {
                        style: {
                            flex: "1"
                        },
                        gap: "8px",
                        children: c ? Object(Ct.jsxs)(Qa, {
                            fontWeight: 500,
                            children: ['The token list "', r.name, '" has been updated to', " ", Object(Ct.jsx)("strong", {
                                children: Cd(o.version)
                            }), "."]
                        }) : Object(Ct.jsxs)(Ct.Fragment, {
                            children: [Object(Ct.jsxs)("div", {
                                children: [Object(Ct.jsxs)(yn.b, {
                                    children: ['An update is available for the token list "', r.name, '" (', Cd(r.version), " to ", Cd(o.version), ")."]
                                }), Object(Ct.jsxs)(Td, {
                                    children: [h.length > 0 ? Object(Ct.jsxs)("li", {
                                        children: [h.map((function (e, t) {
                                            return Object(Ct.jsxs)(a.a.Fragment, {
                                                children: [Object(Ct.jsx)("strong", {
                                                    title: e.address,
                                                    children: e.symbol
                                                }), t === h.length - 1 ? null : ", "]
                                            }, "".concat(e.chainId, "-").concat(e.address))
                                        })), " ", "added"]
                                    }) : null, j.length > 0 ? Object(Ct.jsxs)("li", {
                                        children: [j.map((function (e, t) {
                                            return Object(Ct.jsxs)(a.a.Fragment, {
                                                children: [Object(Ct.jsx)("strong", {
                                                    title: e.address,
                                                    children: e.symbol
                                                }), t === j.length - 1 ? null : ", "]
                                            }, "".concat(e.chainId, "-").concat(e.address))
                                        })), " ", "removed"]
                                    }) : null, g > 0 ? Object(Ct.jsxs)("li", {
                                        children: [g, " tokens updated"]
                                    }) : null]
                                })]
                            }), Object(Ct.jsxs)(xn, {
                                children: [Object(Ct.jsx)("div", {
                                    style: {
                                        flexGrow: 1,
                                        marginRight: 12
                                    },
                                    children: Object(Ct.jsx)(po, {
                                        onClick: b,
                                        children: "Accept update"
                                    })
                                }), Object(Ct.jsx)("div", {
                                    style: {
                                        flexGrow: 1
                                    },
                                    children: Object(Ct.jsx)(po, {
                                        onClick: l,
                                        children: "Dismiss"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var Nd, Sd, Md, Ud, Rd, Bd = n(1801),
                Dd = Object(Dt.default)(xn)(Nd || (Nd = Object(Bt.a)(["\n  flex-wrap: nowrap;\n"])));

            function Pd(e) {
                var t = e.hash,
                    n = e.success,
                    r = e.summary,
                    a = It().chainId,
                    o = Object(i.useContext)(Dt.ThemeContext);
                return Object(Ct.jsxs)(Dd, {
                    children: [Object(Ct.jsx)("div", {
                        style: {
                            paddingRight: 16
                        },
                        children: n ? Object(Ct.jsx)(Ls.a, {
                            color: o.green1,
                            size: 24
                        }) : Object(Ct.jsx)(Bd.a, {
                            color: o.red1,
                            size: 24
                        })
                    }), Object(Ct.jsxs)(an, {
                        gap: "8px",
                        children: [Object(Ct.jsx)(Qa, {
                            fontWeight: 500,
                            children: null !== r && void 0 !== r ? r : "Hash: " + t.slice(0, 8) + "..." + t.slice(58, 65)
                        }), a && Object(Ct.jsx)(ka, {
                            href: Bn(a, t, "transaction"),
                            children: "View on Etherscan"
                        })]
                    })]
                })
            }
            var Ld, Fd, zd, Wd, Vd = Object(Dt.default)(ua.a)(Sd || (Sd = Object(Bt.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]))),
                Yd = Dt.default.div(Md || (Md = Object(Bt.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", "\n"])), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.mediaWidth.upToSmall(Ud || (Ud = Object(Bt.a)(["\n    min-width: 290px;\n    &:not(:last-of-type) {\n      margin-right: 20px;\n    }\n  "])))
                })),
                Gd = Dt.default.div(Rd || (Rd = Object(Bt.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"])), (function (e) {
                    return e.theme.bg3
                })),
                Jd = Object(Qt.a)(Gd);

            function qd(e) {
                var t = e.removeAfterMs,
                    n = e.content,
                    r = e.popKey,
                    a = jr(),
                    o = Object(i.useCallback)((function () {
                        return a(r)
                    }), [r, a]);
                Object(i.useEffect)((function () {
                    if (null !== t) {
                        var e = setTimeout((function () {
                            o()
                        }), t);
                        return function () {
                            clearTimeout(e)
                        }
                    }
                }), [t, o]);
                var c, s = Object(i.useContext)(Dt.ThemeContext);
                if ("txn" in n) {
                    var l = n.txn,
                        u = l.hash,
                        d = l.success,
                        p = l.summary;
                    c = Object(Ct.jsx)(Pd, {
                        hash: u,
                        success: d,
                        summary: p
                    })
                } else if ("listUpdate" in n) {
                    var b = n.listUpdate,
                        f = b.listUrl,
                        h = b.oldList,
                        m = b.newList,
                        j = b.auto;
                    c = Object(Ct.jsx)(Ed, {
                        popKey: r,
                        listUrl: f,
                        oldList: h,
                        newList: m,
                        auto: j
                    })
                }
                var g = Object(Qt.b)({
                    from: {
                        width: "100%"
                    },
                    to: {
                        width: "0%"
                    },
                    config: {
                        duration: null !== t && void 0 !== t ? t : void 0
                    }
                });
                return Object(Ct.jsxs)(Yd, {
                    children: [Object(Ct.jsx)(Vd, {
                        color: s.text2,
                        onClick: o
                    }), c, null !== t ? Object(Ct.jsx)(Jd, {
                        style: g
                    }) : null]
                })
            }
            var Qd, Hd, Xd = Object(Dt.default)(an)(Ld || (Ld = Object(Bt.a)(["\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);\n  border-radius: 20px;\n  padding: 1.5rem;\n  overflow: hidden;\n  position: relative;\n  max-width: 360px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n"]))),
                Kd = Object(Dt.default)(ua.a)(Fd || (Fd = Object(Bt.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]))),
                Zd = Object(Dt.keyframes)(zd || (zd = Object(Bt.a)(["\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n"]))),
                _d = Dt.default.img(Wd || (Wd = Object(Bt.a)(["\n  animation: ", " 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n"])), Zd);

            function $d() {
                var e, t = It().account,
                    n = fr(cr.CLAIM_POPUP),
                    r = hr(cr.CLAIM_POPUP),
                    a = fr(cr.SELF_CLAIM),
                    o = hr(cr.SELF_CLAIM),
                    c = To(t),
                    s = Eo(t);
                return Object(i.useEffect)((function () {
                    c && r()
                }), [c]), Object(Ct.jsx)(Ct.Fragment, {
                    children: n && !a && Object(Ct.jsxs)(Xd, {
                        gap: "md",
                        children: [Object(Ct.jsx)(dn, {}), Object(Ct.jsx)(bn, {}), Object(Ct.jsx)(Kd, {
                            stroke: "white",
                            onClick: r
                        }), Object(Ct.jsxs)(an, {
                            style: {
                                padding: "2rem 0",
                                zIndex: 10
                            },
                            justify: "center",
                            children: [Object(Ct.jsx)(_d, {
                                width: "48px",
                                src: Ro
                            }), " ", Object(Ct.jsxs)(qa, {
                                style: {
                                    marginTop: "1rem"
                                },
                                fontSize: 36,
                                fontWeight: 600,
                                children: [null === s || void 0 === s ? void 0 : s.toFixed(0, null !== (e = {
                                    groupSeparator: ","
                                }) && void 0 !== e ? e : "-"), " UNI"]
                            }), Object(Ct.jsxs)(qa, {
                                style: {
                                    paddingTop: "1.25rem",
                                    textAlign: "center"
                                },
                                fontWeight: 600,
                                color: "white",
                                children: [Object(Ct.jsx)("span", {
                                    role: "img",
                                    "aria-label": "party",
                                    children: "\ud83c\udf89"
                                }), " ", "UNI has arrived", " ", Object(Ct.jsx)("span", {
                                    role: "img",
                                    "aria-label": "party",
                                    children: "\ud83c\udf89"
                                })]
                            }), Object(Ct.jsx)(Ka, {
                                style: {
                                    paddingTop: "0.5rem",
                                    textAlign: "center"
                                },
                                color: "white",
                                children: "Thanks for being part of the Uniswap community <3"
                            })]
                        }), Object(Ct.jsx)(an, {
                            style: {
                                zIndex: 10
                            },
                            justify: "center",
                            children: Object(Ct.jsx)(so, {
                                padding: "8px",
                                borderRadius: "8px",
                                width: "fit-content",
                                onClick: o,
                                children: "Claim your UNI tokens"
                            })
                        })]
                    })
                })
            }
            var ep = Dt.default.div.withConfig({
                    componentId: "h7l8pr-0"
                })(["position:relative;max-width:100%;height:", ";margin:", ";margin-bottom:", "};display:none;", ";"], (function (e) {
                    return e.height
                }), (function (e) {
                    return e.height ? "0 auto;" : 0
                }), (function (e) {
                    return e.height ? "20px" : 0
                }), (function (e) {
                    return e.theme.mediaWidth.upToSmall(Qd || (Qd = Object(Bt.a)(["\n    display: block;\n  "])))
                })),
                tp = Dt.default.div.withConfig({
                    componentId: "h7l8pr-1"
                })(["height:99%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}"]),
                np = Object(Dt.default)(an).withConfig({
                    componentId: "h7l8pr-2"
                })(["position:fixed;top:", ";right:1rem;max-width:355px !important;width:100%;z-index:3;", ";"], (function (e) {
                    return e.extraPadding ? "72px" : "88px"
                }), (function (e) {
                    return e.theme.mediaWidth.upToSmall(Hd || (Hd = Object(Bt.a)(["\n    display: none;\n  "])))
                }));

            function rp() {
                var e = function () {
                        var e = Object(d.d)((function (e) {
                            return e.application.popupList
                        }));
                        return Object(i.useMemo)((function () {
                            return e.filter((function (e) {
                                return e.show
                            }))
                        }), [e])
                    }(),
                    t = Object(d.d)((function (e) {
                        return e.user.URLWarningVisible
                    }));
                return Object(Ct.jsxs)(Ct.Fragment, {
                    children: [Object(Ct.jsxs)(np, {
                        gap: "20px",
                        extraPadding: t,
                        children: [Object(Ct.jsx)($d, {}), e.map((function (e) {
                            return Object(Ct.jsx)(qd, {
                                content: e.content,
                                popKey: e.key,
                                removeAfterMs: e.removeAfterMs
                            }, e.key)
                        }))]
                    }), Object(Ct.jsx)(ep, {
                        height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
                        children: Object(Ct.jsx)(tp, {
                            children: e.slice(0).reverse().map((function (e) {
                                return Object(Ct.jsx)(qd, {
                                    content: e.content,
                                    popKey: e.key,
                                    removeAfterMs: e.removeAfterMs
                                }, e.key)
                            }))
                        })
                    })]
                })
            }
            var ip = Dt.default.div.withConfig({
                    componentId: "m2mesw-0"
                })(["display:flex;align-items:center;justify-content:center;height:20rem;"]),
                ap = Dt.default.h2.withConfig({
                    componentId: "m2mesw-1"
                })(["color:", ";"], (function (e) {
                    return e.theme.secondary1
                }));

            function op(e) {
                var t = e.children,
                    n = Object(Nt.b)().t,
                    a = Object(r.d)().active,
                    c = Object(r.d)(pt),
                    s = c.active,
                    l = c.error,
                    u = c.activate,
                    d = function () {
                        var e = Object(r.d)(),
                            t = e.activate,
                            n = e.active,
                            a = Object(i.useState)(!1),
                            c = Object(P.a)(a, 2),
                            s = c[0],
                            l = c[1];
                        return Object(i.useEffect)((function () {
                            me.isAuthorized().then((function (e) {
                                e || o.isMobile && window.ethereum ? t(me, void 0, !0).catch((function () {
                                    l(!0)
                                })) : l(!0)
                            }))
                        }), [t]), Object(i.useEffect)((function () {
                            n && l(!0)
                        }), [n]), s
                    }();
                Object(i.useEffect)((function () {
                        !d || s || l || a || u(ae)
                    }), [d, s, l, u, a]),
                    function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = Object(r.d)(),
                            n = t.active,
                            a = t.error,
                            o = t.activate;
                        Object(i.useEffect)((function () {
                            var t = window.ethereum;
                            if (t && t.on && !n && !a && !e) {
                                var r = function () {
                                        o(me, void 0, !0).catch((function (e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    i = function (e) {
                                        e.length > 0 && o(me, void 0, !0).catch((function (e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return t.on("chainChanged", r), t.on("accountsChanged", i),
                                    function () {
                                        t.removeListener && (t.removeListener("chainChanged", r), t.removeListener("accountsChanged", i))
                                    }
                            }
                        }), [n, a, e, o])
                    }(!d);
                var p = Object(i.useState)(!1),
                    b = Object(P.a)(p, 2),
                    f = b[0],
                    h = b[1];
                return Object(i.useEffect)((function () {
                    var e = setTimeout((function () {
                        h(!0)
                    }), 600);
                    return function () {
                        clearTimeout(e)
                    }
                }), []), d ? !a && l ? Object(Ct.jsx)(ip, {
                    children: Object(Ct.jsx)(ap, {
                        children: n("unknownError")
                    })
                }) : a || s ? t : f ? Object(Ct.jsx)(ip, {
                    children: Object(Ct.jsx)(Ns, {})
                }) : null : null
            }
            var cp = n(534),
                sp = Object(sr.c)({
                    blockNumber: {},
                    popupList: [],
                    openModal: null
                }, (function (e) {
                    return e.addCase(lr, (function (e, t) {
                        var n = t.payload,
                            r = n.chainId,
                            i = n.blockNumber;
                        "number" !== typeof e.blockNumber[r] ? e.blockNumber[r] = i : e.blockNumber[r] = Math.max(i, e.blockNumber[r])
                    })).addCase(ur, (function (e, t) {
                        e.openModal = t.payload
                    })).addCase(dr, (function (e, t) {
                        var n = t.payload,
                            r = n.content,
                            i = n.key,
                            a = n.removeAfterMs,
                            o = void 0 === a ? 25e3 : a;
                        e.popupList = (i ? e.popupList.filter((function (e) {
                            return e.key !== i
                        })) : e.popupList).concat([{
                            key: i || Object(sr.e)(),
                            show: !0,
                            content: r,
                            removeAfterMs: o
                        }])
                    })).addCase(pr, (function (e, t) {
                        var n = t.payload.key;
                        e.popupList.forEach((function (e) {
                            e.key === n && (e.show = !1)
                        }))
                    }))
                })),
                lp = Object(sr.b)("global/updateVersion"),
                up = function () {
                    return (new Date).getTime()
                };

            function dp(e, t) {
                return "".concat(e, ";").concat(t)
            }
            var pp, bp, fp = {
                    userDarkMode: !1,
                    matchesDarkMode: !1,
                    userExpertMode: !1,
                    userSingleHopOnly: !1,
                    userSlippageTolerance: "auto",
                    userSlippageToleranceHasBeenMigratedToAuto: !0,
                    userDeadline: bt,
                    tokens: {},
                    pairs: {},
                    timestamp: up(),
                    URLWarningVisible: !0,
                    userUnderlyingExchange: "Uniswap",
                    userGasPrice: Fe.toString(),
                    userETHTip: We.toString(),
                    userGasEstimate: ze.toString(),
                    userGasEstimateManualOverride: !1,
                    userTipManualOverride: !0
                },
                hp = Object(sr.c)(fp, (function (e) {
                    return e.addCase(lp, (function (e) {
                        "number" !== typeof e.userSlippageTolerance || !Number.isInteger(e.userSlippageTolerance) || e.userSlippageTolerance < 0 || e.userSlippageTolerance > 5e3 ? e.userSlippageTolerance = "auto" : e.userSlippageToleranceHasBeenMigratedToAuto || -1 === [10, 50, 100].indexOf(e.userSlippageTolerance) || (e.userSlippageTolerance = "auto", e.userSlippageToleranceHasBeenMigratedToAuto = !0), ("number" !== typeof e.userDeadline || !Number.isInteger(e.userDeadline) || e.userDeadline < 60 || e.userDeadline > 10800) && (e.userDeadline = bt), e.lastUpdateVersionTimestamp = up()
                    })).addCase(bi, (function (e, t) {
                        e.userDarkMode = t.payload.userDarkMode, e.timestamp = up()
                    })).addCase(pi, (function (e, t) {
                        e.matchesDarkMode = t.payload.matchesDarkMode, e.timestamp = up()
                    })).addCase(fi, (function (e, t) {
                        e.userExpertMode = t.payload.userExpertMode, e.timestamp = up()
                    })).addCase(mi, (function (e, t) {
                        e.userSlippageTolerance = t.payload.userSlippageTolerance, e.timestamp = up()
                    })).addCase(ji, (function (e, t) {
                        e.userDeadline = t.payload.userDeadline, e.timestamp = up()
                    })).addCase(hi, (function (e, t) {
                        e.userSingleHopOnly = t.payload.userSingleHopOnly
                    })).addCase(gi, (function (e, t) {
                        var n = t.payload.serializedToken;
                        e.tokens || (e.tokens = {}), e.tokens[n.chainId] = e.tokens[n.chainId] || {}, e.tokens[n.chainId][n.address] = n, e.timestamp = up()
                    })).addCase(xi, (function (e, t) {
                        var n = t.payload,
                            r = n.address,
                            i = n.chainId;
                        e.tokens || (e.tokens = {}), e.tokens[i] = e.tokens[i] || {}, delete e.tokens[i][r], e.timestamp = up()
                    })).addCase(Oi, (function (e, t) {
                        var n = t.payload.serializedPair;
                        if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
                            var r = n.token0.chainId;
                            e.pairs[r] = e.pairs[r] || {}, e.pairs[r][dp(n.token0.address, n.token1.address)] = n
                        }
                        e.timestamp = up()
                    })).addCase(vi, (function (e, t) {
                        var n = t.payload,
                            r = n.chainId,
                            i = n.tokenAAddress,
                            a = n.tokenBAddress;
                        e.pairs[r] && (delete e.pairs[r][dp(i, a)], delete e.pairs[r][dp(a, i)]), e.timestamp = up()
                    })).addCase(yi, (function (e) {
                        e.URLWarningVisible = !e.URLWarningVisible
                    })).addCase(wi, (function (e, t) {
                        e.userUnderlyingExchange = t.payload.userUnderlyingExchange, e.timestamp = up()
                    })).addCase(Ai, (function (e, t) {
                        e.userGasPrice = t.payload.userGasPrice
                    })).addCase(ki, (function (e, t) {
                        e.userGasEstimateManualOverride = t.payload.userGasEstimateManualOverride
                    })).addCase(Ii, (function (e, t) {
                        e.userTipManualOverride = t.payload.userTipManualOverride
                    })).addCase(Ci, (function (e, t) {
                        e.userGasEstimate = t.payload.userGasEstimate
                    }))
                })),
                mp = function () {
                    return (new Date).getTime()
                },
                jp = Object(sr.c)({}, (function (e) {
                    return e.addCase(xo, (function (e, t) {
                        var n, r, i = t.payload,
                            a = i.chainId,
                            o = i.from,
                            c = i.hash,
                            s = i.approval,
                            l = i.summary,
                            u = i.claim;
                        if (null === (n = e[a]) || void 0 === n ? void 0 : n[c]) throw Error("Attempted to add existing transaction.");
                        var d = null !== (r = e[a]) && void 0 !== r ? r : {};
                        d[c] = {
                            hash: c,
                            approval: s,
                            summary: l,
                            claim: u,
                            from: o,
                            addedTime: mp()
                        }, e[a] = d
                    })).addCase(Oo, (function (e, t) {
                        var n = t.payload.chainId;
                        e[n] && (e[n] = {})
                    })).addCase(yo, (function (e, t) {
                        var n, r = t.payload,
                            i = r.chainId,
                            a = r.hash,
                            o = r.blockNumber,
                            c = null === (n = e[i]) || void 0 === n ? void 0 : n[a];
                        c && (c.lastCheckedBlockNumber ? c.lastCheckedBlockNumber = Math.max(o, c.lastCheckedBlockNumber) : c.lastCheckedBlockNumber = o)
                    })).addCase(vo, (function (e, t) {
                        var n, r = t.payload,
                            i = r.hash,
                            a = r.chainId,
                            o = r.receipt,
                            c = null === (n = e[a]) || void 0 === n ? void 0 : n[i];
                        c && (c.receipt = o, c.confirmedTime = mp())
                    }))
                })),
                gp = (pp = {
                    independentField: Dc.INPUT,
                    typedValue: ""
                }, Object(h.a)(pp, Dc.INPUT, {
                    currencyId: ""
                }), Object(h.a)(pp, Dc.OUTPUT, {
                    currencyId: ""
                }), Object(h.a)(pp, "recipient", null), Object(h.a)(pp, "arbiProfit", {
                    userProfit: "0",
                    hash: null
                }), pp),
                xp = Object(sr.c)(gp, (function (e) {
                    return e.addCase(Yc, (function (e, t) {
                        var n, r = t.payload,
                            i = r.typedValue,
                            a = r.recipient,
                            o = r.field,
                            c = r.inputCurrencyId,
                            s = r.outputCurrencyId;
                        return n = {}, Object(h.a)(n, Dc.INPUT, {
                            currencyId: c
                        }), Object(h.a)(n, Dc.OUTPUT, {
                            currencyId: s
                        }), Object(h.a)(n, "independentField", o), Object(h.a)(n, "typedValue", i), Object(h.a)(n, "recipient", a), Object(h.a)(n, "arbiProfit", {
                            userProfit: "0",
                            hash: null
                        }), n
                    })).addCase(zc, (function (e, t) {
                        var n, r = t.payload,
                            i = r.currencyId,
                            a = r.field,
                            o = a === Dc.INPUT ? Dc.OUTPUT : Dc.INPUT;
                        return i === e[o].currencyId ? Object(f.a)(Object(f.a)({}, e), {}, (n = {
                            independentField: e.independentField === Dc.INPUT ? Dc.OUTPUT : Dc.INPUT
                        }, Object(h.a)(n, a, {
                            currencyId: i
                        }), Object(h.a)(n, o, {
                            currencyId: e[a].currencyId
                        }), n)) : Object(f.a)(Object(f.a)({}, e), {}, Object(h.a)({}, a, {
                            currencyId: i
                        }))
                    })).addCase(Wc, (function (e) {
                        var t;
                        return Object(f.a)(Object(f.a)({}, e), {}, (t = {
                            independentField: e.independentField === Dc.INPUT ? Dc.OUTPUT : Dc.INPUT
                        }, Object(h.a)(t, Dc.INPUT, {
                            currencyId: e[Dc.OUTPUT].currencyId
                        }), Object(h.a)(t, Dc.OUTPUT, {
                            currencyId: e[Dc.INPUT].currencyId
                        }), t))
                    })).addCase(Vc, (function (e, t) {
                        var n = t.payload,
                            r = n.field,
                            i = n.typedValue;
                        return Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i
                        })
                    })).addCase(Gc, (function (e, t) {
                        var n = t.payload.recipient;
                        e.recipient = n
                    })).addCase(Jc, (function (e, t) {
                        e.arbiProfit.hash = t.payload.hash, e.arbiProfit.userProfit = t.payload.userProfit
                    }))
                }));
            ! function (e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(bp || (bp = {}));
            var Op, vp, yp = Object(sr.b)("mint/typeInputMint"),
                wp = Object(sr.b)("mint/resetMintState"),
                Ap = {
                    independentField: bp.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: "",
                    startPriceTypedValue: "",
                    leftRangeTypedValue: "",
                    rightRangeTypedValue: ""
                },
                kp = Object(sr.c)(Ap, (function (e) {
                    return e.addCase(wp, (function () {
                        return Ap
                    })).addCase(yp, (function (e, t) {
                        var n = t.payload,
                            r = n.field,
                            i = n.typedValue;
                        return n.noLiquidity ? r === e.independentField ? Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i
                        }) : Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i,
                            otherTypedValue: e.typedValue
                        }) : Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i,
                            otherTypedValue: ""
                        })
                    }))
                }));
            ! function (e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(Op || (Op = {})),
            function (e) {
                e.LOWER = "LOWER", e.UPPER = "UPPER"
            }(vp || (vp = {}));
            var Ip, Cp = Object(sr.b)("mintV3/typeInputMint"),
                Tp = Object(sr.b)("mintV3/typeStartPriceInput"),
                Ep = Object(sr.b)("mintV3/typeLeftRangeInput"),
                Np = Object(sr.b)("mintV3/typeRightRangeInput"),
                Sp = Object(sr.b)("mintV3/resetMintState"),
                Mp = {
                    independentField: Op.CURRENCY_A,
                    typedValue: "",
                    startPriceTypedValue: "",
                    leftRangeTypedValue: "",
                    rightRangeTypedValue: ""
                },
                Up = Object(sr.c)(Mp, (function (e) {
                    return e.addCase(Sp, (function () {
                        return Mp
                    })).addCase(Tp, (function (e, t) {
                        var n = t.payload.typedValue;
                        return Object(f.a)(Object(f.a)({}, e), {}, {
                            startPriceTypedValue: n
                        })
                    })).addCase(Ep, (function (e, t) {
                        var n = t.payload.typedValue;
                        return Object(f.a)(Object(f.a)({}, e), {}, {
                            leftRangeTypedValue: n
                        })
                    })).addCase(Np, (function (e, t) {
                        var n = t.payload.typedValue;
                        return Object(f.a)(Object(f.a)({}, e), {}, {
                            rightRangeTypedValue: n
                        })
                    })).addCase(Cp, (function (e, t) {
                        var n = t.payload,
                            r = n.field,
                            i = n.typedValue;
                        return n.noLiquidity ? (e.independentField, Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i
                        })) : Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i
                        })
                    }))
                })),
                Rp = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null
                },
                Bp = {
                    lastInitializedDefaultListOfLists: Gn,
                    byUrl: Object(f.a)({}, Gn.concat(Yn).reduce((function (e, t) {
                        return e[t] = Rp, e
                    }), {})),
                    activeListUrls: Jn
                },
                Dp = Object(sr.c)(Bp, (function (e) {
                    return e.addCase(vd.pending, (function (e, t) {
                        var n = t.payload,
                            r = n.requestId,
                            i = n.url;
                        e.byUrl[i] = Object(f.a)(Object(f.a)({
                            current: null,
                            pendingUpdate: null
                        }, e.byUrl[i]), {}, {
                            loadingRequestId: r,
                            error: null
                        })
                    })).addCase(vd.fulfilled, (function (e, t) {
                        var n, r, i = t.payload,
                            a = i.requestId,
                            o = i.tokenList,
                            c = i.url,
                            s = null === (n = e.byUrl[c]) || void 0 === n ? void 0 : n.current,
                            l = null === (r = e.byUrl[c]) || void 0 === r ? void 0 : r.loadingRequestId;
                        if (s) {
                            if (Object(Od.c)(s.version, o.version) === Od.a.NONE) return;
                            null !== l && l !== a || (e.byUrl[c] = Object(f.a)(Object(f.a)({}, e.byUrl[c]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: s,
                                pendingUpdate: o
                            }))
                        } else {
                            var u;
                            if (Jn.includes(c)) null === (u = e.activeListUrls) || void 0 === u || u.push(c);
                            e.byUrl[c] = Object(f.a)(Object(f.a)({}, e.byUrl[c]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: o,
                                pendingUpdate: null
                            })
                        }
                    })).addCase(vd.rejected, (function (e, t) {
                        var n, r = t.payload,
                            i = r.url,
                            a = r.requestId,
                            o = r.errorMessage;
                        (null === (n = e.byUrl[i]) || void 0 === n ? void 0 : n.loadingRequestId) === a && (e.byUrl[i] = Object(f.a)(Object(f.a)({}, e.byUrl[i]), {}, {
                            loadingRequestId: null,
                            error: o,
                            current: null,
                            pendingUpdate: null
                        }))
                    })).addCase(yd, (function (e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = Rp)
                    })).addCase(wd, (function (e, t) {
                        var n = t.payload;
                        e.byUrl[n] && delete e.byUrl[n], e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function (e) {
                            return e !== n
                        })))
                    })).addCase(Ad, (function (e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = Rp), e.activeListUrls && !e.activeListUrls.includes(n) && e.activeListUrls.push(n), e.activeListUrls || (e.activeListUrls = [n])
                    })).addCase(kd, (function (e, t) {
                        var n = t.payload;
                        e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function (e) {
                            return e !== n
                        })))
                    })).addCase(Id, (function (e, t) {
                        var n, r = t.payload;
                        if (!(null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[r] = Object(f.a)(Object(f.a)({}, e.byUrl[r]), {}, {
                            pendingUpdate: null,
                            current: e.byUrl[r].pendingUpdate
                        })
                    })).addCase(lp, (function (e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var t = e.lastInitializedDefaultListOfLists.reduce((function (e, t) {
                                        return e.add(t)
                                    }), new Set),
                                    n = Gn.reduce((function (e, t) {
                                        return e.add(t)
                                    }), new Set);
                                Gn.forEach((function (n) {
                                    t.has(n) || (e.byUrl[n] = Rp)
                                })), e.lastInitializedDefaultListOfLists.forEach((function (t) {
                                    n.has(t) || delete e.byUrl[t]
                                }))
                            }
                        } else e.byUrl = Bp.byUrl, e.activeListUrls = Bp.activeListUrls;
                        e.lastInitializedDefaultListOfLists = Gn, e.activeListUrls || (e.activeListUrls = Jn, Jn.map((function (t) {
                            return e.byUrl[t] || (e.byUrl[t] = Rp), !0
                        })))
                    }))
                }));
            ! function (e) {
                e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(Ip || (Ip = {}));
            var Pp = Object(sr.b)("burn/typeInputBurn"),
                Lp = {
                    independentField: Ip.LIQUIDITY_PERCENT,
                    typedValue: "0"
                },
                Fp = Object(sr.c)(Lp, (function (e) {
                    return e.addCase(Pp, (function (e, t) {
                        var n = t.payload,
                            r = n.field,
                            i = n.typedValue;
                        return Object(f.a)(Object(f.a)({}, e), {}, {
                            independentField: r,
                            typedValue: i
                        })
                    }))
                })),
                zp = Object(sr.c)({
                    callResults: {}
                }, (function (e) {
                    return e.addCase(yr, (function (e, t) {
                        var n, r = t.payload,
                            i = r.calls,
                            a = r.chainId,
                            o = r.options,
                            c = (o = void 0 === o ? {} : o).blocksPerFetch,
                            s = void 0 === c ? 1 : c,
                            l = e.callListeners ? e.callListeners : e.callListeners = {};
                        l[a] = null !== (n = l[a]) && void 0 !== n ? n : {}, i.forEach((function (e) {
                            var t, n, r = Or(e);
                            l[a][r] = null !== (t = l[a][r]) && void 0 !== t ? t : {}, l[a][r][s] = (null !== (n = l[a][r][s]) && void 0 !== n ? n : 0) + 1
                        }))
                    })).addCase(wr, (function (e, t) {
                        var n = t.payload,
                            r = n.chainId,
                            i = n.calls,
                            a = n.options,
                            o = (a = void 0 === a ? {} : a).blocksPerFetch,
                            c = void 0 === o ? 1 : o,
                            s = e.callListeners ? e.callListeners : e.callListeners = {};
                        s[r] && i.forEach((function (e) {
                            var t = Or(e);
                            s[r][t] && s[r][t][c] && (1 === s[r][t][c] ? delete s[r][t][c] : s[r][t][c]--)
                        }))
                    })).addCase(Ar, (function (e, t) {
                        var n, r = t.payload,
                            i = r.chainId,
                            a = r.fetchingBlockNumber,
                            o = r.calls;
                        e.callResults[i] = null !== (n = e.callResults[i]) && void 0 !== n ? n : {}, o.forEach((function (t) {
                            var n = Or(t),
                                r = e.callResults[i][n];
                            if (r) {
                                var o;
                                if ((null !== (o = r.fetchingBlockNumber) && void 0 !== o ? o : 0) >= a) return;
                                e.callResults[i][n].fetchingBlockNumber = a
                            } else e.callResults[i][n] = {
                                fetchingBlockNumber: a
                            }
                        }))
                    })).addCase(kr, (function (e, t) {
                        var n, r = t.payload,
                            i = r.fetchingBlockNumber,
                            a = r.chainId,
                            o = r.calls;
                        e.callResults[a] = null !== (n = e.callResults[a]) && void 0 !== n ? n : {}, o.forEach((function (t) {
                            var n = Or(t),
                                r = e.callResults[a][n];
                            r && "number" === typeof r.fetchingBlockNumber && r.fetchingBlockNumber <= i && (delete r.fetchingBlockNumber, r.data = null, r.blockNumber = i)
                        }))
                    })).addCase(Ir, (function (e, t) {
                        var n, r = t.payload,
                            i = r.chainId,
                            a = r.results,
                            o = r.blockNumber;
                        e.callResults[i] = null !== (n = e.callResults[i]) && void 0 !== n ? n : {}, Object.keys(a).forEach((function (t) {
                            var n, r = e.callResults[i][t];
                            (null !== (n = null === r || void 0 === r ? void 0 : r.blockNumber) && void 0 !== n ? n : 0) > o || (e.callResults[i][t] = {
                                data: a[t],
                                blockNumber: o
                            })
                        }))
                    }))
                })),
                Wp = ["user", "transactions", "lists"],
                Vp = Object(sr.a)({
                    reducer: {
                        application: sp,
                        user: hp,
                        transactions: jp,
                        swap: xp,
                        mint: kp,
                        mintV3: Up,
                        burn: Fp,
                        multicall: zp,
                        lists: Dp
                    },
                    middleware: [].concat(Object(b.a)(Object(sr.d)({
                        thunk: !1
                    })), [Object(cp.save)({
                        states: Wp,
                        debounce: 1e3
                    })]),
                    preloadedState: Object(cp.load)({
                        states: Wp
                    })
                });
            Vp.dispatch(lp());
            var Yp = Vp,
                Gp = n(821);
            var Jp = Dt.default.div.withConfig({
                    componentId: "sc-9mqbnz-0"
                })(["display:flex;flex-direction:column;width:100%;align-items:center;z-index:1;"]),
                qp = Dt.default.div.withConfig({
                    componentId: "sc-9mqbnz-1"
                })(["padding:1rem;width:100%;white-space:;"]),
                Qp = Dt.default.div.withConfig({
                    componentId: "sc-9mqbnz-2"
                })(["background:", ";overflow:auto;white-space:pre;box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:24px;padding:18px 24px;color:", ";"], (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.text1
                })),
                Hp = Dt.default.div.withConfig({
                    componentId: "sc-9mqbnz-3"
                })(["color:", ";padding:6px 24px;"], (function (e) {
                    return e.theme.blue1
                })),
                Xp = Dt.default.div.withConfig({
                    componentId: "sc-9mqbnz-4"
                })(["padding:6px 24px;"]),
                Kp = function (e) {
                    Object(E.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e) {
                        var r;
                        return Object(C.a)(this, n), (r = t.call(this, e)).state = {
                            error: null
                        }, r
                    }
                    return Object(T.a)(n, [{
                        key: "render",
                        value: function () {
                            var e = this.state.error;
                            if (null !== e) {
                                var t = encodeURIComponent(function (e) {
                                    var t = function () {
                                            var e = window.location.hash;
                                            if (!e.startsWith("#/")) return null;
                                            switch (e.substring(2).split(/[\/\\?]/)[0]) {
                                                case "swap":
                                                    return "swap"
                                            }
                                            return null
                                        }(),
                                        n = new Gp.UAParser(window.navigator.userAgent).getResult();
                                    return "## URL\n  \n".concat(window.location.href, "\n\n").concat(t ? "## `".concat(t, "` state\n    \n```json\n").concat(JSON.stringify(Yp.getState()[t], null, 2), "\n```\n") : "", "\n").concat(e.name && "## Error\n\n```\n".concat(e.name).concat(e.message && ": ".concat(e.message), "\n```\n"), "\n").concat(e.stack && "## Stacktrace\n\n```\n".concat(e.stack, "\n```\n"), "\n").concat(n && "## Device data\n\n```json\n".concat(JSON.stringify(n, null, 2), "\n```\n"), "\n")
                                }(e));
                                return Object(Ct.jsxs)(Jp, {
                                    children: [Object(Ct.jsx)(no, {}), Object(Ct.jsx)(qp, {
                                        children: Object(Ct.jsxs)(an, {
                                            gap: "md",
                                            children: [Object(Ct.jsx)(Xp, {
                                                children: Object(Ct.jsx)(Ga, {
                                                    fontSize: 24,
                                                    fontWeight: 600,
                                                    children: "Something went wrong"
                                                })
                                            }), Object(Ct.jsx)(Qp, {
                                                children: Object(Ct.jsx)("code", {
                                                    children: Object(Ct.jsx)(Va, {
                                                        fontSize: 10,
                                                        children: e.stack
                                                    })
                                                })
                                            }), Object(Ct.jsxs)(xn, {
                                                children: [Object(Ct.jsx)(Hp, {
                                                    children: Object(Ct.jsx)(ka, {
                                                        id: "create-github-issue-link",
                                                        href: "https://github.com/Uniswap/uniswap-interface/issues/new?assignees=&labels=bug&body=".concat(t, "&title=").concat(encodeURIComponent("Crash report: `".concat(e.name).concat(e.message && ": ".concat(e.message), "`"))),
                                                        target: "_blank",
                                                        children: Object(Ct.jsxs)(Ya, {
                                                            fontSize: 16,
                                                            children: ["Create an issue on GitHub", Object(Ct.jsx)("span", {
                                                                children: "\u2197"
                                                            })]
                                                        })
                                                    })
                                                }), Object(Ct.jsx)(Hp, {
                                                    children: Object(Ct.jsx)(ka, {
                                                        id: "get-support-on-discord",
                                                        href: "https://discord.gg/FCfyBSbCU5",
                                                        target: "_blank",
                                                        children: Object(Ct.jsxs)(Ya, {
                                                            fontSize: 16,
                                                            children: ["Get support on Discord", Object(Ct.jsx)("span", {
                                                                children: "\u2197"
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }
                            return this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function (e) {
                            return {
                                error: e
                            }
                        }
                    }]), n
                }(a.a.Component);

            function Zp(e) {
                var t = e.location.search,
                    n = Object(d.c)();
                return Object(i.useEffect)((function () {
                    if (t && !(t.length < 2)) {
                        var e = Object(pc.parse)(t, {
                            parseArrays: !1,
                            ignoreQueryPrefix: !0
                        }).theme;
                        "string" === typeof e && ("light" === e.toLowerCase() ? n(bi({
                            userDarkMode: !1
                        })) : "dark" === e.toLowerCase() && n(bi({
                            userDarkMode: !0
                        })))
                    }
                }), [n, t]), null
            }
            var _p = new m.f(g.a.BigInt(30), g.a.BigInt(1e4)),
                $p = new m.f(g.a.BigInt(1e4), g.a.BigInt(1e4)),
                eb = $p.subtract(_p);

            function tb(e) {
                var t;
                return t = e instanceof wn.c ? $p.subtract(e.route.pairs.reduce((function (e) {
                    return e.multiply(eb)
                }), $p)) : $p.subtract(e.route.pools.reduce((function (e, t) {
                    return e.multiply($p.subtract(new m.d(t.fee, 1e6)))
                }), $p)), new m.f(t.numerator, t.denominator)
            }
            var nb = [xt, jt, mt, ht];

            function rb(e) {
                if (!e) return 4;
                var t, n = nb.length,
                    r = Object(V.a)(nb);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        if (t.value.lessThan(e)) return n;
                        n--
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return 0
            }
            var ib, ab, ob, cb, sb, lb, ub, db, pb, bb, fb, hb, mb, jb, gb, xb = n(1802),
                Ob = Dt.default.div(ib || (ib = Object(Bt.a)(["\n  position: relative;\n  padding: 14px;\n"]))),
                vb = Dt.default.div(ab || (ab = Object(Bt.a)(["\n  padding: 6px 7.5px;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  position: relative;\n  margin-top: -14px;\n  margin-bottom: -14px;\n  left: calc(50% - 16px);\n  /* transform: rotate(90deg); */\n  background-color: ", ";\n  border: 4px solid ", ";\n  background: #202231;\n  border: 1px solid #2B2E40;\n  z-index: 2;\n  ", "\n"])), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.clickable ? Object(Dt.css)(ob || (ob = Object(Bt.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null
                })),
                yb = Dt.default.div(cb || (cb = Object(Bt.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"])), (function (e) {
                    return e.theme.bg3
                })),
                wb = Dt.default.div(sb || (sb = Object(Bt.a)(["\n  margin-top: ;\n  /* background-color: ", "; */\n"])), (function (e) {
                    return e.theme.bg1
                })),
                Ab = Object(Dt.default)(yn.b)(lb || (lb = Object(Bt.a)(["\n  color: ", ";\n"])), (function (e) {
                    var t = e.theme,
                        n = e.severity;
                    return 3 === n || 4 === n ? t.red1 : 2 === n ? t.yellow2 : 1 === n ? t.text1 : t.text2
                })),
                kb = (Object(Dt.default)(yn.b)(ub || (ub = Object(Bt.a)(["\n  border-radius: 8px;\n\n  color: ", ";\n\n  /* background-color: ", "; */\n"])), (function (e) {
                    var t = e.theme,
                        n = e.severity;
                    return 3 === n || 4 === n ? t.red1 : 2 === n ? t.yellow2 : 1 === n ? t.text1 : t.text3
                }), (function (e) {
                    var t = e.theme,
                        n = e.severity;
                    return 3 === n || 4 === n ? Object(Xt.d)(.9, t.red1) : 2 === n ? Object(Xt.d)(.9, t.yellow2) : 1 === n ? Object(Xt.d)(.9, t.text1) : Object(Xt.d)(.9, t.green1)
                })), Dt.default.button(db || (db = Object(Bt.a)(["\n  /* height: 22px; */\n  width: fit-content;\n  background-color: ", ";\n  border: none;\n  border-radius: 8px;\n  padding: 0;\n  font-size: 0.875rem;\n  font-weight: 400;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.bg2
                })), Object(Dt.default)(yn.b)(pb || (pb = Object(Bt.a)(["\n  text-overflow: ellipsis;\n  max-width: 220px;\n  overflow: hidden;\n  text-align: right;\n"])))),
                Ib = (Dt.default.span(bb || (bb = Object(Bt.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]))), Dt.default.div(fb || (fb = Object(Bt.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])), (function (e) {
                    var t = e.theme;
                    return Object(Xt.d)(.9, t.red1)
                }), (function (e) {
                    return e.theme.red1
                }))),
                Cb = Dt.default.div(hb || (hb = Object(Bt.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])), (function (e) {
                    var t = e.theme;
                    return Object(Xt.d)(.9, t.red1)
                }));

            function Tb(e) {
                var t = e.error;
                return Object(Ct.jsxs)(Ib, {
                    children: [Object(Ct.jsx)(Cb, {
                        children: Object(Ct.jsx)(xb.a, {
                            size: 24
                        })
                    }), Object(Ct.jsx)("p", {
                        style: {
                            wordBreak: "break-word"
                        },
                        children: t
                    })]
                })
            }
            var Eb = Object(Dt.default)(an)(mb || (mb = Object(Bt.a)(["\n  background-color: ", ";\n  color: ", ";\n  background: #161521;\n  border: 1px solid #2B2E40;\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])), (function (e) {
                var t = e.theme;
                return Object(Xt.d)(.9, t.primary1)
            }), (function (e) {
                return e.theme.primary1
            }));
            Dt.default.div(jb || (jb = Object(Bt.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), (function (e) {
                return e.theme.bg2
            })), Object(Dt.default)(p.b)(gb || (gb = Object(Bt.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  border-radius: 12px;\n  height: 22px;\n  margin-right: 0.5rem;\n  padding: 0 0.25rem 0 0.5rem;\n  text-decoration: none !important;\n"])), (function (e) {
                return e.theme.bg2
            }));

            function Nb(e) {
                var t = e.priceImpact;
                return Object(Ct.jsx)(Ab, {
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#999",
                    severity: rb(t),
                    children: t ? "".concat(t.multiply(-1).toFixed(2), "%") : "-"
                })
            }
            var Sb = n(822),
                Mb = n(1803);

            function Ub(e) {
                Object(Sb.a)(e);
                var t = Object(i.useContext)(Dt.ThemeContext);
                return Object(Ct.jsx)(Mb.a, {
                    size: 14,
                    color: t.text2
                })
            }
            var Rb = Object(i.memo)((function (e) {
                var t = e.trade,
                    n = t instanceof wn.c ? t.route.path : t.route.tokenPath,
                    r = Object(i.useContext)(Dt.ThemeContext);
                return Object(Ct.jsx)(yn.a, {
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    children: n.map((function (e, n, a) {
                        var o = n === a.length - 1,
                            c = gc(e);
                        return Object(Ct.jsxs)(i.Fragment, {
                            children: [Object(Ct.jsx)(yn.a, {
                                alignItems: "end",
                                children: Object(Ct.jsx)(Ja, {
                                    color: "#999",
                                    ml: "0.145rem",
                                    mr: "0.145rem",
                                    children: c.symbol
                                })
                            }), o ? null : t instanceof wn.c ? Object(Ct.jsx)(Mb.a, {
                                size: 14,
                                color: r.text2
                            }) : Object(Ct.jsx)(Ub, {
                                fee: t.route.pools[n].fee
                            })]
                        }, n)
                    }))
                })
            }));

            function Bb(e) {
                var t = e.trade,
                    n = e.allowedSlippage,
                    r = (Object(i.useContext)(Dt.ThemeContext), Object(Nt.b)().t),
                    a = Object(i.useMemo)((function () {
                        if (!t) return {
                            realizedLPFee: void 0,
                            priceImpact: void 0
                        };
                        var e = tb(t),
                            n = t.inputAmount.multiply(e);
                        return {
                            priceImpact: t.priceImpact.subtract(e),
                            realizedLPFee: n
                        }
                    }), [t]),
                    o = a.realizedLPFee,
                    c = a.priceImpact;
                return t ? Object(Ct.jsxs)(an, {
                    gap: "8px",
                    children: [Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Ja, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: "#fff",
                                children: r("liquidity_provider_fee")
                            })
                        }), Object(Ct.jsx)(Ja, {
                            textAlign: "right",
                            fontSize: 12,
                            color: "#999",
                            children: o ? "".concat(o.toSignificant(4), " ").concat(o.currency.symbol) : "-"
                        })]
                    }), Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Ja, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: "#fff",
                                children: r("route")
                            })
                        }), Object(Ct.jsx)(Ja, {
                            textAlign: "right",
                            fontSize: 12,
                            color: "#999",
                            children: Object(Ct.jsx)(Rb, {
                                trade: t
                            })
                        })]
                    }), Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Ja, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: "#fff",
                                children: r("price_impact")
                            })
                        }), Object(Ct.jsx)(Ja, {
                            textAlign: "right",
                            fontSize: 12,
                            color: "#999",
                            children: Object(Ct.jsx)(Nb, {
                                priceImpact: c
                            })
                        })]
                    }), Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Ja, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: "#fff",
                                children: t.tradeType === m.i.EXACT_INPUT ? r("minimum_received") : r("maximum_sent")
                            })
                        }), Object(Ct.jsx)(Ja, {
                            textAlign: "right",
                            fontSize: 12,
                            color: "#999",
                            children: t.tradeType === m.i.EXACT_INPUT ? "".concat(t.minimumAmountOut(n).toSignificant(6), " ").concat(t.outputAmount.currency.symbol) : "".concat(t.maximumAmountIn(n).toSignificant(6), " ").concat(t.inputAmount.currency.symbol)
                        })]
                    }), Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Ja, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: "#fff",
                                children: r("slippage_tolerance")
                            })
                        }), Object(Ct.jsxs)(Ja, {
                            textAlign: "right",
                            fontSize: 12,
                            color: "#999",
                            children: [n.toFixed(2), "%"]
                        })]
                    })]
                }) : null
            }
            var Db = n(535),
                Pb = n.n(Db),
                Lb = n(324),
                Fb = n(278);
            var zb = new TextDecoder("utf-8");

            function Wb(e) {
                var t = function (e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16);
                        return t
                    }(e),
                    n = Object(Lb.getCodec)(t);
                switch (n) {
                    case "ipfs-ns":
                        var r = Object(Lb.rmPrefix)(t),
                            i = new Pb.a(r);
                        return "ipfs://".concat(Object(Fb.toB58String)(i.multihash));
                    case "ipns-ns":
                        var a = Object(Lb.rmPrefix)(t),
                            o = new Pb.a(a),
                            c = Object(Fb.decode)(o.multihash);
                        return "identity" === c.name ? "ipns://".concat(zb.decode(c.digest).trim()) : "ipns://".concat(Object(Fb.toB58String)(o.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(n))
                }
            }
            var Vb = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;

            function Yb(e) {
                var t = e.match(Vb);
                if (t) return {
                    ensName: "".concat(t[1].toLowerCase(), "eth"),
                    ensPath: t[4]
                }
            }

            function Gb(e) {
                var t, n;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https" + e.substr(4), e];
                    case "ipfs":
                        var r = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(r, "/"), "https://ipfs.io/ipfs/".concat(r, "/")];
                    case "ipns":
                        var i = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(i, "/"), "https://ipfs.io/ipns/".concat(i, "/")];
                    default:
                        return []
                }
            }

            function Jb(e) {
                var t = Object(i.useMemo)((function () {
                        return e ? Yb(e) : void 0
                    }), [e]),
                    n = function (e) {
                        var t, n, r, a = Object(i.useMemo)((function () {
                                if (!e) return [void 0];
                                try {
                                    return e ? [Object(Cn.namehash)(e)] : [void 0]
                                } catch (t) {
                                    return [void 0]
                                }
                            }), [e]),
                            o = Dr(ei(!1), "resolver", a),
                            c = null === (t = o.result) || void 0 === t ? void 0 : t[0],
                            s = Dr(ti(c && Do(c) ? void 0 : c, !1), "contenthash", a);
                        return {
                            contenthash: null !== (n = null === (r = s.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null,
                            loading: o.loading || s.loading
                        }
                    }(null === t || void 0 === t ? void 0 : t.ensName);
                return Object(i.useMemo)((function () {
                    return t ? n.contenthash ? Gb(Wb(n.contenthash)) : [] : e ? Gb(e) : []
                }), [t, n.contenthash, e])
            }
            var qb = n(1804),
                Qb = {};

            function Hb(e) {
                var t = e.srcs,
                    n = e.alt,
                    r = e.style,
                    a = Object(qt.a)(e, ["srcs", "alt", "style"]),
                    o = Object(i.useState)(0),
                    c = Object(P.a)(o, 2)[1],
                    s = oo(),
                    l = t.find((function (e) {
                        return !Qb[e]
                    }));
                return l ? Object(Ct.jsx)("img", Object(f.a)(Object(f.a)({}, a), {}, {
                    alt: n,
                    src: l,
                    style: r,
                    onError: function () {
                        l && (Qb[l] = !0), c((function (e) {
                            return e + 1
                        }))
                    }
                })) : Object(Ct.jsx)(qb.a, Object(f.a)(Object(f.a)({}, a), {}, {
                    style: Object(f.a)(Object(f.a)({}, r), {}, {
                        color: s.bg4
                    })
                }))
            }
            var Xb, Kb = function (e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(e, "/logo.png")
                },
                Zb = Dt.default.img.withConfig({
                    componentId: "c40taa-0"
                })(["width:", ";height:", ";box-shadow:0px 6px 10px rgba(0,0,0,0.075);border-radius:24px;"], (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                })),
                _b = Object(Dt.default)(Hb).withConfig({
                    componentId: "c40taa-1"
                })(["width:", ";height:", ";border-radius:", ";box-shadow:0px 6px 10px rgba(0,0,0,0.075);background-color:", ";"], (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.theme.white
                }));

            function $b(e) {
                var t, n = e.currency,
                    r = e.size,
                    a = void 0 === r ? "24px" : r,
                    o = e.style,
                    c = Object(qt.a)(e, ["currency", "size", "style"]),
                    s = Jb(n instanceof Kn ? n.logoURI : void 0),
                    l = Object(i.useMemo)((function () {
                        if (!n || n.isEther) return [];
                        if (n.isToken) {
                            var e = n.chainId === m.a.MAINNET ? [Kb(n.address)] : [];
                            return n instanceof Kn ? [].concat(Object(b.a)(s), e) : e
                        }
                        return []
                    }), [n, s]);
                return (null === n || void 0 === n ? void 0 : n.isEther) ? Object(Ct.jsx)(Zb, Object(f.a)({
                    src: "data:image/png;base64,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",
                    size: a,
                    style: o
                }, c)) : Object(Ct.jsx)(_b, Object(f.a)({
                    size: a,
                    srcs: l,
                    alt: "".concat(null !== (t = null === n || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : "token", " logo"),
                    style: o
                }, c))
            }
            var ef = Dt.default.div.withConfig({
                    componentId: "ov4im9-0"
                })(["padding-top:calc(16px + 2rem);padding-bottom:20px;margin-top:-2rem;width:100%;max-width:400px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;color:", ";background-color:", ";z-index:-1;transform:", ";transition:transform 300ms ease-in-out;text-align:center;"], (function (e) {
                    return e.theme.text2
                }), (function (e) {
                    return e.theme.advancedBG
                }), (function (e) {
                    return e.show ? "translateY(0%)" : "translateY(-100%)"
                })),
                tf = Object(Dt.default)(_a).withConfig({
                    componentId: "ov4im9-1"
                })(["font-size:12px;", ""], (function (e) {
                    return e.theme.mediaWidth.upToSmall(Xb || (Xb = Object(Bt.a)(["\n    font-size: 10px;\n"])))
                }));

            function nf(e) {
                var t = e.show,
                    n = e.currencies,
                    r = It().chainId,
                    a = Object(i.useState)(!1),
                    o = Object(P.a)(a, 2),
                    c = o[0],
                    s = o[1],
                    l = r && n ? n.map((function (e) {
                        return jc(e, r)
                    })) : [],
                    u = oi();
                return Object(Ct.jsxs)(ef, {
                    show: t,
                    children: [Object(Ct.jsx)(tn, {
                        isOpen: c,
                        onDismiss: function () {
                            return s(!1)
                        },
                        children: Object(Ct.jsx)(ls, {
                            padding: "2rem",
                            children: Object(Ct.jsxs)(an, {
                                gap: "lg",
                                children: [Object(Ct.jsxs)(gn, {
                                    children: [Object(Ct.jsx)(Xa, {
                                        children: "Unsupported Assets"
                                    }), Object(Ct.jsx)(ha, {
                                        onClick: function () {
                                            return s(!1)
                                        }
                                    })]
                                }), l.map((function (e) {
                                    var t;
                                    return e && u && Object.keys(u).includes(e.address) && Object(Ct.jsx)(fs, {
                                        children: Object(Ct.jsxs)(an, {
                                            gap: "10px",
                                            children: [Object(Ct.jsxs)(xn, {
                                                gap: "5px",
                                                align: "center",
                                                children: [Object(Ct.jsx)($b, {
                                                    currency: e,
                                                    size: "24px"
                                                }), Object(Ct.jsx)(Qa, {
                                                    fontWeight: 500,
                                                    children: e.symbol
                                                })]
                                            }), r && Object(Ct.jsx)(ka, {
                                                href: Bn(r, e.address, "address"),
                                                children: Object(Ct.jsx)(tf, {
                                                    children: e.address
                                                })
                                            })]
                                        })
                                    }, null === (t = e.address) || void 0 === t ? void 0 : t.concat("not-supported"))
                                })), Object(Ct.jsx)(an, {
                                    gap: "lg",
                                    children: Object(Ct.jsx)(Qa, {
                                        fontWeight: 500,
                                        children: "Some assets are not available through this interface because they may not work well with the smart contracts or we are unable to allow trading for legal reasons."
                                    })
                                })]
                            })
                        })
                    }), Object(Ct.jsx)(fo, {
                        padding: "0",
                        onClick: function () {
                            return s(!0)
                        },
                        children: Object(Ct.jsx)(_a, {
                            children: "Read more about unsupported assets"
                        })
                    })]
                })
            }
            var rf = n(1812);

            function af(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Object(i.useRef)();
                Object(i.useEffect)((function () {
                    r.current = e
                }), [e]), Object(i.useEffect)((function () {
                    function e() {
                        var e = r.current;
                        e && e()
                    }
                    if (null !== t) {
                        n && e();
                        var i = setInterval(e, t);
                        return function () {
                            return clearInterval(i)
                        }
                    }
                }), [t, n])
            }
            var of = n(383), cf = Dt.default.div.withConfig({
                componentId: "yuvfmi-0"
            })(["z-index:9999;visibility:", ";opacity:", ";transition:visibility 150ms linear,opacity 150ms linear;background:", ";background:#272939;border:1px solid #272939;color:#fff;border-radius:8px;"], (function (e) {
                return e.show ? "visible" : "hidden"
            }), (function (e) {
                return e.show ? 1 : 0
            }), (function (e) {
                return e.theme.bg2
            })), sf = Dt.default.div.withConfig({
                componentId: "yuvfmi-1"
            })(["display:inline-block;"]), lf = Dt.default.div.withConfig({
                componentId: "yuvfmi-2"
            })(["width:8px;height:8px;z-index:9998;::before{position:absolute;width:8px;height:8px;z-index:9998;content:'';border:1px solid #272939;transform:rotate(45deg);background:#272939;}&.arrow-top{bottom:-5px;::before{border-top:none;border-left:none;}}&.arrow-bottom{top:-5px;::before{border-bottom:none;border-right:none;}}&.arrow-left{right:-5px;::before{border-bottom:none;border-left:none;}}&.arrow-right{left:-5px;::before{border-right:none;border-top:none;}}"]);

            function uf(e) {
                var t, n, r = e.content,
                    a = e.show,
                    o = e.children,
                    c = e.placement,
                    s = void 0 === c ? "auto" : c,
                    l = Object(i.useState)(null),
                    u = Object(P.a)(l, 2),
                    d = u[0],
                    p = u[1],
                    b = Object(i.useState)(null),
                    h = Object(P.a)(b, 2),
                    m = h[0],
                    j = h[1],
                    g = Object(i.useState)(null),
                    x = Object(P.a)(g, 2),
                    O = x[0],
                    v = x[1],
                    y = Object(rf.a)(d, m, {
                        placement: s,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [8, 8]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: O
                            }
                        }]
                    }),
                    w = y.styles,
                    A = y.update,
                    k = y.attributes;
                return af(Object(i.useCallback)((function () {
                    A && A()
                }), [A]), a ? 100 : null), Object(Ct.jsxs)(Ct.Fragment, {
                    children: [Object(Ct.jsx)(sf, {
                        ref: p,
                        children: o
                    }), Object(Ct.jsx)( of .a, {
                        children: Object(Ct.jsxs)(cf, Object(f.a)(Object(f.a)({
                            show: a,
                            ref: j,
                            style: w.popper
                        }, k.popper), {}, {
                            children: [r, Object(Ct.jsx)(lf, Object(f.a)({
                                className: "arrow-".concat(null !== (t = null === (n = k.popper) || void 0 === n ? void 0 : n["data-popper-placement"]) && void 0 !== t ? t : ""),
                                ref: v,
                                style: w.arrow
                            }, k.arrow))]
                        }))
                    })]
                })
            }
            var df = Dt.default.div.withConfig({
                componentId: "pcgzib-0"
            })(["width:256px;padding:0.6rem 1rem;font-weight:400;word-break:break-word;"]);

            function pf(e) {
                var t = e.text,
                    n = Object(qt.a)(e, ["text"]);
                return Object(Ct.jsx)(uf, Object(f.a)({
                    content: Object(Ct.jsx)(df, {
                        children: t
                    })
                }, n))
            }

            function bf(e) {
                var t = e.content,
                    n = Object(qt.a)(e, ["content"]);
                return Object(Ct.jsx)(uf, Object(f.a)({
                    content: Object(Ct.jsx)(df, {
                        children: t
                    })
                }, n))
            }

            function ff(e) {
                var t = e.children,
                    n = Object(qt.a)(e, ["children"]),
                    r = Object(i.useState)(!1),
                    a = Object(P.a)(r, 2),
                    o = a[0],
                    c = a[1],
                    s = Object(i.useCallback)((function () {
                        return c(!0)
                    }), [c]),
                    l = Object(i.useCallback)((function () {
                        return c(!1)
                    }), [c]);
                return Object(Ct.jsx)(pf, Object(f.a)(Object(f.a)({}, n), {}, {
                    show: o,
                    children: Object(Ct.jsx)("div", {
                        onMouseEnter: s,
                        onMouseLeave: l,
                        children: t
                    })
                }))
            }

            function hf(e) {
                var t = e.content,
                    n = e.children,
                    r = Object(qt.a)(e, ["content", "children"]),
                    a = Object(i.useState)(!1),
                    o = Object(P.a)(a, 2),
                    c = o[0],
                    s = o[1],
                    l = Object(i.useCallback)((function () {
                        return s(!0)
                    }), [s]),
                    u = Object(i.useCallback)((function () {
                        return s(!1)
                    }), [s]);
                return Object(Ct.jsx)(bf, Object(f.a)(Object(f.a)({}, r), {}, {
                    show: c,
                    content: t,
                    children: Object(Ct.jsx)("div", {
                        style: {
                            display: "inline-block",
                            lineHeight: 0,
                            padding: "0.25rem"
                        },
                        onMouseEnter: l,
                        onMouseLeave: u,
                        children: n
                    })
                }))
            }
            var mf = n(1809),
                jf = n(1810),
                gf = n(1811);

            function xf(e, t) {
                var n = Object(i.useState)(t && t(e) ? e : void 0),
                    r = Object(P.a)(n, 2),
                    a = r[0],
                    o = r[1];
                return Object(i.useEffect)((function () {
                    o((function (n) {
                        return !t || t(e) ? e : n
                    }))
                }), [t, e]), a
            }
            var Of = Dt.default.div.withConfig({
                    componentId: "sc-1j9plj7-0"
                })(["display:flex;align-items:center;justify-content:center;padding:0px;width:18px;height:18px;border:none;background:none;outline:none;cursor:default;border-radius:36px;font-size:12px;background:#303244;color:#fff;opacity:0.7;:hover,:focus{opacity:0.7;}"]),
                vf = (Dt.default.div.withConfig({
                    componentId: "sc-1j9plj7-1"
                })(["display:flex;align-items:center;justify-content:center;padding:0.2rem;border:none;background:none;outline:none;cursor:default;border-radius:36px;width:24px;height:24px;background-color:rgba(255,255,255,0.1);color:", ";:hover,:focus{opacity:0.7;}"], (function (e) {
                    return e.theme.white
                })), Dt.default.span.withConfig({
                    componentId: "sc-1j9plj7-2"
                })(["font-size:14px;"]));

            function yf(e) {
                var t = e.text,
                    n = Object(i.useState)(!1),
                    r = Object(P.a)(n, 2),
                    a = r[0],
                    o = r[1],
                    c = Object(i.useCallback)((function () {
                        return o(!0)
                    }), [o]),
                    s = Object(i.useCallback)((function () {
                        return o(!1)
                    }), [o]);
                return Object(Ct.jsx)("span", {
                    style: {
                        marginLeft: 4,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: Object(Ct.jsx)(pf, {
                        text: t,
                        show: a,
                        children: Object(Ct.jsx)(Of, {
                            onClick: c,
                            onMouseEnter: c,
                            onMouseLeave: s,
                            children: Object(Ct.jsx)(vf, {
                                children: "?"
                            })
                        })
                    })
                })
            }
            var wf = Dt.default.div.withConfig({
                componentId: "sc-1jnnfid-0"
            })(["border:1px solid ", ";border:1px solid transparent;border-radius:6px;display:flex;padding:6px;align-items:center;:hover{cursor:", ";background-color:", ";color:#000;}background-color:#161521;opacity:", ";"], (function (e) {
                var t = e.theme;
                return e.disable ? "transparent" : t.bg3
            }), (function (e) {
                return !e.disable && "pointer"
            }), (function (e) {
                var t = e.theme;
                return !e.disable && t.bg2
            }), (function (e) {
                return e.disable && "0.4"
            }));

            function Af(e) {
                var t, n = e.chainId,
                    r = e.onSelect,
                    i = e.selectedCurrency,
                    a = Object(Nt.b)().t;
                return Object(Ct.jsxs)(an, {
                    gap: "md",
                    children: [Object(Ct.jsxs)(xn, {
                        children: [Object(Ct.jsx)(yn.b, {
                            fontWeight: 500,
                            fontSize: 14,
                            color: "#fff",
                            children: a("common_bases")
                        }), Object(Ct.jsx)(yf, {
                            text: a("common_bases_tooltip")
                        })]
                    }), Object(Ct.jsxs)(xn, {
                        gap: "4px",
                        children: [Object(Ct.jsxs)(wf, {
                            onClick: function () {
                                i && Object(m.l)(i, m.c) || r(m.c)
                            },
                            disable: null === i || void 0 === i ? void 0 : i.isEther,
                            children: [Object(Ct.jsx)($b, {
                                currency: m.c,
                                style: {
                                    marginRight: 8
                                }
                            }), Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 16,
                                children: "ETH"
                            })]
                        }), ("number" === typeof n && null !== (t = ut[n]) && void 0 !== t ? t : []).map((function (e) {
                            var t = (null === i || void 0 === i ? void 0 : i.isToken) && i.address === e.address;
                            return Object(Ct.jsxs)(wf, {
                                onClick: function () {
                                    return !t && r(e)
                                },
                                disable: t,
                                children: [Object(Ct.jsx)($b, {
                                    currency: e,
                                    style: {
                                        marginRight: 8
                                    }
                                }), Object(Ct.jsx)(yn.b, {
                                    fontWeight: 500,
                                    fontSize: 16,
                                    children: e.symbol
                                })]
                            }, e.address)
                        }))]
                    })]
                })
            }
            var kf = n(829),
                If = (Dt.default.div.withConfig({
                    componentId: "sc-10cuchq-0"
                })(["", " align-items:center;padding:1rem 1rem;margin:0.25rem 0.5rem;justify-content:center;flex:1;user-select:none;"], (function (e) {
                    return e.theme.flexRowNoWrap
                })), Dt.default.div.withConfig({
                    componentId: "sc-10cuchq-1"
                })(["display:flex;justify-content:center;align-items:center;position:relative;border:none;"]), Dt.default.div.withConfig({
                    componentId: "sc-10cuchq-2"
                })(["z-index:100;visibility:", ";opacity:", ";transition:visibility 150ms linear,opacity 150ms linear;background:", ";border:1px solid ", ";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);color:", ";border-radius:0.5rem;padding:1rem;display:grid;grid-template-rows:1fr;grid-gap:8px;font-size:1rem;text-align:left;top:80px;"], (function (e) {
                    return e.show ? "visible" : "hidden"
                }), (function (e) {
                    return e.show ? 1 : 0
                }), (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.text2
                })), Dt.default.div.withConfig({
                    componentId: "sc-10cuchq-3"
                })(["height:3px;width:3px;background-color:", ";border-radius:50%;"], (function (e) {
                    return e.theme.text2
                }))),
                Cf = (Object(Dt.default)(On).withConfig({
                    componentId: "sc-10cuchq-4"
                })(["color:", ";font-size:14px;"], (function (e) {
                    return e.theme.primary1
                })), Dt.default.input.withConfig({
                    componentId: "sc-10cuchq-5"
                })(["border:1px solid ", ";height:20px;margin:0;"], (function (e) {
                    return e.theme.red3
                }))),
                Tf = Object(Dt.default)(an).withConfig({
                    componentId: "sc-10cuchq-6"
                })(["padding:20px;"]),
                Ef = Object(Dt.default)(gn).withConfig({
                    componentId: "sc-10cuchq-7"
                })(["padding:4px 20px;height:56px;display:grid;grid-template-columns:auto minmax(auto,1fr) auto minmax(0,72px);grid-gap:16px;cursor:", ";pointer-events:", ";:hover{background-color:#161521;}opacity:", ";"], (function (e) {
                    return !e.disabled && "pointer"
                }), (function (e) {
                    return e.disabled && "none"
                }), (function (e) {
                    var t = e.disabled,
                        n = e.selected;
                    return t || n ? .5 : 1
                })),
                Nf = Dt.default.input.withConfig({
                    componentId: "sc-10cuchq-8"
                })(["position:relative;display:flex;padding:16px;align-items:center;width:100%;white-space:nowrap;background:none;border:none;outline:none;border-radius:20px;color:", ";border-style:solid;-webkit-appearance:none;font-size:18px;background:#161521;border:1px solid #2B2E40;color:#fff;border-radius:6px;::placeholder{color:rgba(255,255,255,0.1);}transition:border 100ms;:focus{border:1px solid ", ";outline:none;}"], (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.primary1
                })),
                Sf = Dt.default.div.withConfig({
                    componentId: "sc-10cuchq-9"
                })(["width:100%;height:1px;background-color:", ";background-color:#2B2E40;"], (function (e) {
                    return e.theme.bg2
                })),
                Mf = Dt.default.div.withConfig({
                    componentId: "sc-10cuchq-10"
                })(["width:100%;height:1px;background-color:", ";"], (function (e) {
                    return e.theme.bg3
                })),
                Uf = Object(Dt.default)(Hb).withConfig({
                    componentId: "sc-12t1x1n-0"
                })(["width:", ";height:", ";"], (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                }));

            function Rf(e) {
                var t = e.logoURI,
                    n = e.style,
                    r = e.size,
                    i = void 0 === r ? "24px" : r,
                    a = e.alt,
                    o = Jb(t);
                return Object(Ct.jsx)(Uf, {
                    alt: a,
                    size: i,
                    srcs: o,
                    style: n
                })
            }
            var Bf = Dt.default.div.withConfig({
                    componentId: "py4xkd-0"
                })(["padding:4px 20px;height:56px;display:grid;grid-template-columns:auto minmax(auto,1fr) auto;grid-gap:16px;align-items:center;opacity:", ";"], (function (e) {
                    return e.dim ? "0.4" : "1"
                })),
                Df = Object(Dt.default)(Ls.a).withConfig({
                    componentId: "py4xkd-1"
                })(["height:16px;width:16px;margin-right:6px;stroke:", ";"], (function (e) {
                    return e.theme.green1
                })),
                Pf = Dt.default.div.withConfig({
                    componentId: "py4xkd-2"
                })(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-overflow:ellipsis;max-width:140px;font-size:12px;"]);

            function Lf(e) {
                var t = e.token,
                    n = e.style,
                    r = e.dim,
                    i = e.showImportView,
                    a = e.setImportToken,
                    o = oo(),
                    c = ci(t),
                    s = function (e) {
                        var t = ai();
                        return !(!t || !e) && !!t[e.address]
                    }(t),
                    l = t instanceof Kn ? t.list : void 0;
                return Object(Ct.jsxs)(Bf, {
                    style: n,
                    children: [Object(Ct.jsx)($b, {
                        currency: t,
                        size: "24px",
                        style: {
                            opacity: r ? "0.6" : "1"
                        }
                    }), Object(Ct.jsxs)(an, {
                        gap: "4px",
                        style: {
                            opacity: r ? "0.6" : "1"
                        },
                        children: [Object(Ct.jsxs)(xn, {
                            children: [Object(Ct.jsx)(Qa, {
                                fontWeight: 500,
                                color: "#fff",
                                children: t.symbol
                            }), Object(Ct.jsx)($a, {
                                ml: "8px",
                                fontWeight: 300,
                                children: Object(Ct.jsx)(Pf, {
                                    title: t.name,
                                    children: t.name
                                })
                            })]
                        }), l && l.logoURI && Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsxs)(Za, {
                                mr: "4px",
                                color: o.text3,
                                children: ["via ", l.name]
                            }), Object(Ct.jsx)(Rf, {
                                logoURI: l.logoURI,
                                size: "12px"
                            })]
                        })]
                    }), s || c ? Object(Ct.jsxs)(On, {
                        style: {
                            minWidth: "fit-content"
                        },
                        children: [Object(Ct.jsx)(Df, {}), Object(Ct.jsx)(Va, {
                            color: o.green1,
                            children: "Active"
                        })]
                    }) : Object(Ct.jsx)(so, {
                        width: "fit-content",
                        padding: "6px 12px",
                        fontWeight: 500,
                        fontSize: "14px",
                        onClick: function () {
                            a && a(t), i()
                        },
                        children: "Import"
                    })]
                })
            }
            var Ff = n.p + "static/media/tokenlist.831c6277.svg";

            function zf(e) {
                return e.isToken ? e.address : "ETHER"
            }
            var Wf = Object(Dt.default)(yn.b).withConfig({
                    componentId: "ne0e2c-0"
                })(["white-space:nowrap;overflow:hidden;max-width:5rem;text-overflow:ellipsis;"]),
                Vf = Dt.default.div.withConfig({
                    componentId: "ne0e2c-1"
                })(["background-color:", ";color:", ";font-size:14px;border-radius:4px;padding:0.25rem 0.3rem 0.25rem 0.3rem;max-width:6rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;justify-self:flex-end;margin-right:4px;"], (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.text2
                })),
                Yf = Dt.default.div.withConfig({
                    componentId: "ne0e2c-2"
                })(["padding:4px 20px;height:56px;display:grid;grid-gap:16px;align-items:center;"]);

            function Gf(e) {
                var t = e.balance;
                return Object(Ct.jsx)(Wf, {
                    title: t.toExact(),
                    children: t.toSignificant(4)
                })
            }
            var Jf = Dt.default.div.withConfig({
                    componentId: "ne0e2c-3"
                })(["display:flex;justify-content:flex-end;"]),
                qf = Dt.default.img.withConfig({
                    componentId: "ne0e2c-4"
                })(["height:20px;"]);

            function Qf(e) {
                var t = e.currency;
                if (!(t instanceof Kn)) return Object(Ct.jsx)("span", {});
                var n = t.tags;
                if (!n || 0 === n.length) return Object(Ct.jsx)("span", {});
                var r = n[0];
                return Object(Ct.jsxs)(Jf, {
                    children: [Object(Ct.jsx)(ff, {
                        text: r.description,
                        children: Object(Ct.jsx)(Vf, {
                            children: r.name
                        }, r.id)
                    }), n.length > 1 ? Object(Ct.jsx)(ff, {
                        text: n.slice(1).map((function (e) {
                            var t = e.name,
                                n = e.description;
                            return "".concat(t, ": ").concat(n)
                        })).join("; \n"),
                        children: Object(Ct.jsx)(Vf, {
                            children: "..."
                        })
                    }) : null]
                })
            }

            function Hf(e) {
                var t = e.currency,
                    n = e.onSelect,
                    r = e.isSelected,
                    i = e.otherSelected,
                    a = e.style,
                    o = It().account,
                    c = zf(t),
                    s = function (e, t) {
                        var n;
                        return Boolean((null === t || void 0 === t ? void 0 : t.isToken) && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address]))
                    }(or(), t.isToken ? t : void 0),
                    l = ci(t),
                    u = cs(null !== o && void 0 !== o ? o : void 0, t);
                return Object(Ct.jsxs)(Ef, {
                    style: a,
                    className: "token-item-".concat(c),
                    onClick: function () {
                        return r ? null : n()
                    },
                    disabled: r,
                    selected: i,
                    children: [Object(Ct.jsx)($b, {
                        currency: t,
                        size: "24px"
                    }), Object(Ct.jsxs)(on, {
                        children: [Object(Ct.jsx)(yn.b, {
                            title: t.name,
                            fontWeight: 500,
                            color: "#fff",
                            children: t.symbol
                        }), Object(Ct.jsxs)($a, {
                            ml: "0px",
                            fontSize: "12px",
                            fontWeight: 300,
                            children: [t.name, " ", !t.isEther && !s && l && "\u2022 Added by user"]
                        })]
                    }), Object(Ct.jsx)(Qf, {
                        currency: t
                    }), Object(Ct.jsx)(On, {
                        style: {
                            justifySelf: "flex-end"
                        },
                        children: u ? Object(Ct.jsx)(Gf, {
                            balance: u
                        }) : o ? Object(Ct.jsx)(Ns, {}) : null
                    })]
                })
            }
            var Xf = "BREAK";

            function Kf(e) {
                return e === Xf
            }

            function Zf(e) {
                var t = e.style,
                    n = oo();
                return Object(Ct.jsx)(Yf, {
                    style: t,
                    children: Object(Ct.jsx)(ds, {
                        padding: "8px 12px",
                        borderRadius: "8px",
                        children: Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsxs)(On, {
                                children: [Object(Ct.jsx)(qf, {
                                    src: Ff
                                }), Object(Ct.jsx)(Va, {
                                    ml: "6px",
                                    fontSize: "12px",
                                    color: n.text1,
                                    children: "Expanded results from inactive Token Lists"
                                })]
                            }), Object(Ct.jsx)(yf, {
                                text: "Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."
                            })]
                        })
                    })
                })
            }

            function _f(e) {
                var t = e.height,
                    n = e.currencies,
                    r = e.otherListTokens,
                    a = e.selectedCurrency,
                    o = e.onCurrencySelect,
                    c = e.otherCurrency,
                    s = e.fixedListRef,
                    l = e.showImportView,
                    u = e.setImportToken,
                    d = Object(i.useMemo)((function () {
                        return r && (null === r || void 0 === r ? void 0 : r.length) > 0 ? [].concat(Object(b.a)(n), [Xf], Object(b.a)(r)) : n
                    }), [n, r]),
                    p = It().chainId,
                    f = Object(i.useCallback)((function (e) {
                        var t = e.data,
                            r = e.index,
                            i = e.style,
                            s = t[r];
                        if (Kf(s)) return Object(Ct.jsx)(Zf, {
                            style: i
                        });
                        var d = s,
                            b = Boolean(d && a && Object(m.l)(a, d)),
                            f = Boolean(d && c && Object(m.l)(c, d)),
                            h = jc(d, p);
                        return r > n.length && h ? Object(Ct.jsx)(Lf, {
                            style: i,
                            token: h,
                            showImportView: l,
                            setImportToken: u,
                            dim: !0
                        }) : d ? Object(Ct.jsx)(Hf, {
                            style: i,
                            currency: d,
                            isSelected: b,
                            onSelect: function () {
                                return d && o(d)
                            },
                            otherSelected: f
                        }) : null
                    }), [p, n.length, o, c, a, u, l]),
                    h = Object(i.useCallback)((function (e, t) {
                        var n = t[e];
                        return Kf(n) ? Xf : zf(n)
                    }), []);
                return Object(Ct.jsx)(kf.a, {
                    height: t,
                    ref: s,
                    width: "100%",
                    itemData: d,
                    itemCount: d.length,
                    itemSize: 56,
                    itemKey: h,
                    children: f
                })
            }

            function $f(e) {
                var t = function () {
                        var e = It().account,
                            t = ai(),
                            n = as(null !== e && void 0 !== e ? e : void 0, Object(i.useMemo)((function () {
                                return Object.values(null !== t && void 0 !== t ? t : {})
                            }), [t]));
                        return null !== n && void 0 !== n ? n : {}
                    }(),
                    n = Object(i.useMemo)((function () {
                        return function (e) {
                            return function (t, n) {
                                var r, i, a = (r = e[t.address], i = e[n.address], r && i ? r.greaterThan(i) ? -1 : r.equalTo(i) ? 0 : 1 : r && r.greaterThan("0") ? -1 : i && i.greaterThan("0") ? 1 : 0);
                                return 0 !== a ? a : t.symbol && n.symbol ? t.symbol.toLowerCase() < n.symbol.toLowerCase() ? -1 : 1 : t.symbol || n.symbol ? -1 : 0
                            }
                        }(null !== t && void 0 !== t ? t : {})
                    }), [t]);
                return Object(i.useMemo)((function () {
                    return e ? function (e, t) {
                        return -1 * n(e, t)
                    } : n
                }), [e, n])
            }
            var eh = n(824);

            function th() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = Object(i.useState)(e),
                    n = Object(P.a)(t, 2),
                    r = n[0],
                    a = n[1],
                    o = Object(i.useCallback)((function () {
                        return a((function (e) {
                            return !e
                        }))
                    }), []);
                return [r, o]
            }

            function nh(e, t) {
                var n = Object(i.useRef)(t);
                Object(i.useEffect)((function () {
                    n.current = t
                }), [t]), Object(i.useEffect)((function () {
                    var t = function (t) {
                        var r, i;
                        null !== (r = null === (i = e.current) || void 0 === i ? void 0 : i.contains(t.target)) && void 0 !== r && r || n.current && n.current()
                    };
                    return document.addEventListener("mousedown", t),
                        function () {
                            document.removeEventListener("mousedown", t)
                        }
                }), [e])
            }
            var rh, ih = n(1805),
                ah = Object(Dt.default)(on).withConfig({
                    componentId: "sc-1n65c2w-0"
                })(["width:100%;flex:1 1;position:relative;"]),
                oh = Dt.default.div.withConfig({
                    componentId: "sc-1n65c2w-1"
                })(["width:100%;border-radius:20px;padding:20px;border-top-left-radius:0;border-top-right-radius:0;background-color:", ";border-top:1px solid ", ";"], (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    return e.theme.bg2
                }));

            function ch(e) {
                var t = e.selectedCurrency,
                    n = e.onCurrencySelect,
                    r = e.otherSelectedCurrency,
                    a = e.showCommonBases,
                    o = e.onDismiss,
                    c = e.isOpen,
                    s = e.showManageView,
                    l = e.showImportView,
                    d = e.setImportToken,
                    p = Object(Nt.b)().t,
                    f = It().chainId,
                    h = oo(),
                    j = Object(i.useRef)(),
                    g = Object(i.useState)(""),
                    x = Object(P.a)(g, 2),
                    O = x[0],
                    v = x[1],
                    y = Po(O, 200),
                    w = Object(i.useState)(!1),
                    A = Object(P.a)(w, 1)[0],
                    k = ai(),
                    I = Un(y),
                    C = ui(y),
                    T = ci(C);
                Object(i.useEffect)((function () {
                    I && u.a.event({
                        category: "Currency Select",
                        action: "Search by address",
                        label: I
                    })
                }), [I]);
                var E = $f(A),
                    N = Object(i.useMemo)((function () {
                        return e = Object.values(k), t = y, e.filter(zn(t));
                        var e, t
                    }), [k, y]),
                    S = function (e, t) {
                        return Object(i.useMemo)((function () {
                            if (!e) return [];
                            var n = t.toLowerCase().split(/\s+/).filter((function (e) {
                                return e.length > 0
                            }));
                            if (n.length > 1) return e;
                            var r = [],
                                i = [],
                                a = [];
                            return e.map((function (e) {
                                var o, c;
                                return (null === (o = e.symbol) || void 0 === o ? void 0 : o.toLowerCase()) === n[0] ? r.push(e) : (null === (c = e.symbol) || void 0 === c ? void 0 : c.toLowerCase().startsWith(t.toLowerCase().trim())) ? i.push(e) : a.push(e)
                            })), [].concat(r, i, a)
                        }), [e, t])
                    }(Object(i.useMemo)((function () {
                        return N.sort(E)
                    }), [N, E]), y),
                    M = Object(i.useMemo)((function () {
                        var e = y.toLowerCase().trim();
                        return "" === e || "e" === e || "et" === e || "eth" === e ? [m.c].concat(Object(b.a)(S)) : S
                    }), [y, S]),
                    U = Object(i.useCallback)((function (e) {
                        n(e), o(), u.a.event({
                            category: "Currency Select",
                            action: "Token Pick Up",
                            label: e.symbol
                        })
                    }), [o, n]);
                Object(i.useEffect)((function () {
                    c && v("")
                }), [c]);
                var R = Object(i.useRef)(),
                    B = Object(i.useCallback)((function (e) {
                        var t, n = e.target.value,
                            r = Un(n);
                        v(r || n), null === (t = j.current) || void 0 === t || t.scrollTo(0)
                    }), []),
                    D = Object(i.useCallback)((function (e) {
                        if ("Enter" === e.key)
                            if ("eth" === y.toLowerCase().trim()) U(m.c);
                            else if (M.length > 0) {
                            var t;
                            (null === (t = M[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== y.trim().toLowerCase() && 1 !== M.length || U(M[0])
                        }
                    }), [M, U, y]),
                    L = th(!1),
                    F = Object(P.a)(L, 2),
                    z = F[0],
                    W = F[1];
                nh(Object(i.useRef)(), z ? W : void 0);
                var Y = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = tr(),
                        r = ar(),
                        a = It().chainId,
                        o = ai();
                    return Object(i.useMemo)((function () {
                        if (!e || 0 === e.trim().length) return [];
                        var i, c = zn(e),
                            s = [],
                            l = {},
                            u = Object(V.a)(r);
                        try {
                            for (u.s(); !(i = u.n()).done;) {
                                var d = i.value,
                                    p = n[d].current;
                                if (p) {
                                    var b, f = Object(V.a)(p.tokens);
                                    try {
                                        for (f.s(); !(b = f.n()).done;) {
                                            var h = b.value;
                                            if (h.chainId === a && c(h)) {
                                                var m = new Kn(h, p);
                                                if (!(m.address in o) && !l[m.address] && (l[m.address] = !0, s.push(m), s.length >= t)) return s
                                            }
                                        }
                                    } catch (j) {
                                        f.e(j)
                                    } finally {
                                        f.f()
                                    }
                                }
                            }
                        } catch (j) {
                            u.e(j)
                        } finally {
                            u.f()
                        }
                        return s
                    }), [o, a, r, n, t, e])
                }(0 === N.length || y.length > 2 && !I ? y : void 0);
                return Object(Ct.jsxs)(ah, {
                    children: [Object(Ct.jsxs)(Tf, {
                        gap: "16px",
                        children: [Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#fff",
                                children: p("select_token")
                            }), Object(Ct.jsx)(ha, {
                                onClick: o
                            })]
                        }), Object(Ct.jsx)(vn, {
                            children: Object(Ct.jsx)(Nf, {
                                type: "text",
                                id: "token-search-input",
                                placeholder: p("tokenSearchPlaceholder"),
                                autoComplete: "off",
                                value: O,
                                ref: R,
                                onChange: B,
                                onKeyDown: D
                            })
                        }), a && Object(Ct.jsx)(Af, {
                            chainId: f,
                            onSelect: U,
                            selectedCurrency: t
                        })]
                    }), Object(Ct.jsx)(Sf, {}), C && !T ? Object(Ct.jsx)(on, {
                        style: {
                            padding: "20px 0",
                            height: "100%"
                        },
                        children: Object(Ct.jsx)(Lf, {
                            token: C,
                            showImportView: l,
                            setImportToken: d
                        })
                    }) : (null === S || void 0 === S ? void 0 : S.length) > 0 || (null === Y || void 0 === Y ? void 0 : Y.length) > 0 ? Object(Ct.jsx)("div", {
                        style: {
                            flex: "1"
                        },
                        children: Object(Ct.jsx)(eh.a, {
                            disableWidth: !0,
                            children: function (e) {
                                var n = e.height;
                                return Object(Ct.jsx)(_f, {
                                    height: n,
                                    currencies: M,
                                    otherListTokens: Y,
                                    onCurrencySelect: U,
                                    otherCurrency: r,
                                    selectedCurrency: t,
                                    fixedListRef: j,
                                    showImportView: l,
                                    setImportToken: d
                                })
                            }
                        })
                    }) : Object(Ct.jsx)(on, {
                        style: {
                            padding: "20px",
                            height: "100%"
                        },
                        children: Object(Ct.jsx)(Va, {
                            color: h.text3,
                            textAlign: "center",
                            mb: "20px",
                            children: "No results found."
                        })
                    }), Object(Ct.jsx)(oh, {
                        children: Object(Ct.jsx)(vn, {
                            justify: "center",
                            children: Object(Ct.jsx)(fa, {
                                onClick: s,
                                color: h.blue1,
                                className: "list-token-manage-button",
                                children: Object(Ct.jsxs)(On, {
                                    children: [Object(Ct.jsx)(ma, {
                                        size: "16px",
                                        marginRight: "6px",
                                        children: Object(Ct.jsx)(ih.a, {})
                                    }), Object(Ct.jsx)(Va, {
                                        color: h.blue1,
                                        children: p("manage_token_lists")
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            var sh = Dt.default.div.withConfig({
                    componentId: "sc-2f7y48-0"
                })(["position:relative;width:100%;overflow:auto;"]),
                lh = Object(Dt.default)(ls).withConfig({
                    componentId: "sc-2f7y48-1"
                })(["background-color:", ";width:fit-content;"], (function (e) {
                    var t = e.theme;
                    return e.highWarning ? Object(Xt.d)(.8, t.red1) : Object(Xt.d)(.8, t.yellow2)
                })),
                uh = Object(Dt.default)(_a).withConfig({
                    componentId: "sc-2f7y48-2"
                })(["font-size:12px;", ""], (function (e) {
                    return e.theme.mediaWidth.upToSmall(rh || (rh = Object(Bt.a)(["\n    font-size: 10px;\n"])))
                }));

            function dh(e) {
                var t = e.tokens,
                    n = e.list,
                    r = e.onBack,
                    a = e.onDismiss,
                    o = e.handleCurrencySelect,
                    c = oo(),
                    s = It().chainId,
                    l = function () {
                        var e = Object(d.c)();
                        return Object(i.useCallback)((function (t) {
                            e(gi({
                                serializedToken: Ti(t)
                            }))
                        }), [e])
                    }();
                return Object(Ct.jsxs)(sh, {
                    children: [Object(Ct.jsx)(Tf, {
                        gap: "14px",
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: Object(Ct.jsxs)(gn, {
                            children: [r ? Object(Ct.jsx)(ba.a, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: r
                            }) : Object(Ct.jsx)("div", {}), Object(Ct.jsxs)(Xa, {
                                children: ["Import ", t.length > 1 ? "Tokens" : "Token"]
                            }), a ? Object(Ct.jsx)(ha, {
                                onClick: a
                            }) : Object(Ct.jsx)("div", {})]
                        })
                    }), Object(Ct.jsx)(yb, {}), Object(Ct.jsxs)(an, {
                        gap: "md",
                        style: {
                            marginBottom: "32px",
                            padding: "1rem"
                        },
                        children: [Object(Ct.jsxs)(an, {
                            justify: "center",
                            style: {
                                textAlign: "center",
                                gap: "16px",
                                padding: "1rem"
                            },
                            children: [Object(Ct.jsx)(Bd.a, {
                                size: 48,
                                stroke: c.text2,
                                strokeWidth: 1
                            }), Object(Ct.jsx)(Qa, {
                                fontWeight: 400,
                                fontSize: 16,
                                children: "This token doesn't appear on the active token list(s). Make sure this is the token that you want to trade."
                            })]
                        }), t.map((function (e) {
                            return Object(Ct.jsx)(ls, {
                                backgroundColor: c.bg2,
                                className: ".token-warning-container",
                                padding: "2rem",
                                children: Object(Ct.jsxs)(an, {
                                    gap: "10px",
                                    justify: "center",
                                    children: [Object(Ct.jsx)($b, {
                                        currency: e,
                                        size: "32px"
                                    }), Object(Ct.jsxs)(an, {
                                        gap: "4px",
                                        justify: "center",
                                        children: [Object(Ct.jsx)(Qa, {
                                            ml: "8px",
                                            mr: "8px",
                                            fontWeight: 500,
                                            fontSize: 20,
                                            children: e.symbol
                                        }), Object(Ct.jsx)($a, {
                                            fontWeight: 400,
                                            fontSize: 14,
                                            children: e.name
                                        })]
                                    }), s && Object(Ct.jsx)(ka, {
                                        href: Bn(s, e.address, "address"),
                                        children: Object(Ct.jsx)(uh, {
                                            fontSize: 12,
                                            children: e.address
                                        })
                                    }), void 0 !== n ? Object(Ct.jsxs)(On, {
                                        children: [n.logoURI && Object(Ct.jsx)(Rf, {
                                            logoURI: n.logoURI,
                                            size: "16px"
                                        }), Object(Ct.jsxs)(Za, {
                                            ml: "6px",
                                            fontSize: 14,
                                            color: c.text3,
                                            children: ["via ", n.name, " token list"]
                                        })]
                                    }) : Object(Ct.jsx)(lh, {
                                        borderRadius: "4px",
                                        padding: "4px",
                                        highWarning: !0,
                                        children: Object(Ct.jsxs)(On, {
                                            children: [Object(Ct.jsx)(Bd.a, {
                                                stroke: c.red1,
                                                size: "10px"
                                            }), Object(Ct.jsx)(Qa, {
                                                color: c.red1,
                                                ml: "4px",
                                                fontSize: "10px",
                                                fontWeight: 500,
                                                children: "Unknown Source"
                                            })]
                                        })
                                    })]
                                })
                            }, "import" + e.address)
                        })), Object(Ct.jsx)(so, {
                            altDisabledStyle: !0,
                            borderRadius: "20px",
                            padding: "10px 1rem",
                            onClick: function () {
                                t.map((function (e) {
                                    return l(e)
                                })), o && o(t[0])
                            },
                            className: ".token-dismiss-button",
                            children: "Import"
                        })]
                    })]
                })
            }
            var ph = n(1806),
                bh = n(825),
                fh = n(367),
                hh = new(n.n(fh).a)({
                    allErrors: !0
                }).compile(bh);

            function mh(e, t) {
                return jh.apply(this, arguments)
            }

            function jh() {
                return (jh = Object(I.a)(k.a.mark((function e(t, n) {
                    var r, i, a, o, c, s, l, u, d, p, b, f, h;
                    return k.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(r = Yb(t))) {
                                    e.next = 23;
                                    break
                                }
                                return e.prev = 2, e.next = 5, n(r.ensName);
                            case 5:
                                o = e.sent, e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(2), console.debug("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName));
                            case 12:
                                e.prev = 12, c = Wb(o), e.next = 20;
                                break;
                            case 16:
                                throw e.prev = 16, e.t1 = e.catch(12), console.debug("Failed to translate contenthash to URI", o), new Error("Failed to translate contenthash to URI: ".concat(o));
                            case 20:
                                i = Gb("".concat(c).concat(null !== (a = r.ensPath) && void 0 !== a ? a : "")), e.next = 24;
                                break;
                            case 23:
                                i = Gb(t);
                            case 24:
                                s = 0;
                            case 25:
                                if (!(s < i.length)) {
                                    e.next = 55;
                                    break
                                }
                                return l = i[s], u = s === i.length - 1, d = void 0, e.prev = 29, e.next = 32, fetch(l, {
                                    credentials: "omit"
                                });
                            case 32:
                                d = e.sent, e.next = 41;
                                break;
                            case 35:
                                if (e.prev = 35, e.t2 = e.catch(29), console.debug("Failed to fetch list", t, e.t2), !u) {
                                    e.next = 40;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(t));
                            case 40:
                                return e.abrupt("continue", 52);
                            case 41:
                                if (d.ok) {
                                    e.next = 45;
                                    break
                                }
                                if (!u) {
                                    e.next = 44;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(t));
                            case 44:
                                return e.abrupt("continue", 52);
                            case 45:
                                return e.next = 47, d.json();
                            case 47:
                                if (p = e.sent, hh(p)) {
                                    e.next = 51;
                                    break
                                }
                                throw h = null !== (b = null === (f = hh.errors) || void 0 === f ? void 0 : f.reduce((function (e, t) {
                                    var n, r = "".concat(t.dataPath, " ").concat(null !== (n = t.message) && void 0 !== n ? n : "");
                                    return e.length > 0 ? "".concat(e, "; ").concat(r) : "".concat(r)
                                }), "")) && void 0 !== b ? b : "unknown error", new Error("Token list failed validation: ".concat(h));
                            case 51:
                                return e.abrupt("return", p);
                            case 52:
                                s++, e.next = 25;
                                break;
                            case 55:
                                throw new Error("Unrecognized list URL protocol.");
                            case 56:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8],
                        [12, 16],
                        [29, 35]
                    ])
                })))).apply(this, arguments)
            }
            var gh = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                xh = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                Oh = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }];

            function vh(e, t) {
                return new Tn.b(e, Oh, t)
            }

            function yh(e, t) {
                return wh.apply(this, arguments)
            }

            function wh() {
                return (wh = Object(I.a)(k.a.mark((function e(t, n) {
                    var r, i, a;
                    return k.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = new Tn.b(xh, gh, n), i = Object(Cn.namehash)(t), e.next = 4, r.resolver(i);
                            case 4:
                                return a = e.sent, e.abrupt("return", vh(a, n).contenthash(i));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ah() {
                var e = It(),
                    t = e.chainId,
                    n = e.library,
                    r = Object(d.c)(),
                    a = Object(i.useCallback)(function () {
                        var e = Object(I.a)(k.a.mark((function e(r) {
                            var i, a;
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n && t === m.a.MAINNET) {
                                            e.next = 8;
                                            break
                                        }
                                        return i = oe(), e.next = 4, i.getNetwork();
                                    case 4:
                                        if (a = e.sent, !i || a.chainId !== m.a.MAINNET) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", yh(r, i));
                                    case 7:
                                        throw new Error("Could not construct mainnet ENS resolver");
                                    case 8:
                                        return e.abrupt("return", yh(r, n));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t, n]);
                return Object(i.useCallback)(function () {
                    var e = Object(I.a)(k.a.mark((function e(t) {
                        var n, i, o = arguments;
                        return k.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = !(o.length > 1 && void 0 !== o[1]) || o[1], i = Object(sr.e)(), n && r(vd.pending({
                                        requestId: i,
                                        url: t
                                    })), e.abrupt("return", mh(t, a).then((function (e) {
                                        return n && r(vd.fulfilled({
                                            url: t,
                                            tokenList: e,
                                            requestId: i
                                        })), e
                                    })).catch((function (e) {
                                        throw console.debug("Failed to get list at url ".concat(t), e), n && r(vd.rejected({
                                            url: t,
                                            requestId: i,
                                            errorMessage: e.message
                                        })), e
                                    })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), [r, a])
            }
            var kh = n(536),
                Ih = n.n(kh);
            n(537);

            function Ch() {
                return (Ch = Object(I.a)(k.a.mark((function e(t) {
                    var n;
                    return k.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Gb(t)[0], e.abrupt("return", Ih.a.from(n).getPalette().then((function (e) {
                                    return (null === e || void 0 === e ? void 0 : e.Vibrant) ? e.Vibrant.hex : null
                                })).catch((function () {
                                    return null
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Th(e) {
                var t = Object(i.useState)("#2172E5"),
                    n = Object(P.a)(t, 2),
                    r = n[0],
                    a = n[1];
                return Object(i.useLayoutEffect)((function () {
                    var t = !1;
                    return e && function (e) {
                            return Ch.apply(this, arguments)
                        }(e).then((function (e) {
                            t || null === e || a(e)
                        })),
                        function () {
                            t = !0, a("#2172E5")
                        }
                }), [e]), r
            }
            var Eh = Dt.default.button.withConfig({
                    componentId: "d2zkc-0"
                })(["border-radius:20px;border:none;background:", ";display:flex;width:fit-content;cursor:pointer;outline:none;padding:0.4rem 0.4rem;align-items:center;"], (function (e) {
                    return e.theme.bg1
                })),
                Nh = Dt.default.span.withConfig({
                    componentId: "d2zkc-1"
                })(["border-radius:50%;height:24px;width:24px;background-color:", ";:hover{opacity:0.8;}"], (function (e) {
                    var t = e.isActive,
                        n = e.bgColor,
                        r = e.theme;
                    return t ? n : r.bg4
                })),
                Sh = Object(Dt.default)(Va).withConfig({
                    componentId: "d2zkc-2"
                })(["margin:0 10px;width:24px;color:", ";"], (function (e) {
                    var t = e.theme;
                    return e.isActive ? t.text1 : t.text3
                }));

            function Mh(e) {
                var t = e.id,
                    n = e.isActive,
                    r = e.bgColor,
                    i = e.toggle;
                return Object(Ct.jsxs)(Eh, {
                    id: t,
                    isActive: n,
                    onClick: i,
                    children: [n && Object(Ct.jsx)(Sh, {
                        fontWeight: "600",
                        margin: "0 6px",
                        isActive: !0,
                        children: "ON"
                    }), Object(Ct.jsx)(Nh, {
                        isActive: n,
                        bgColor: r
                    }), !n && Object(Ct.jsx)(Sh, {
                        fontWeight: "600",
                        margin: "0 6px",
                        isActive: !1,
                        children: "OFF"
                    })]
                })
            }
            var Uh = Object(Dt.default)(on).withConfig({
                    componentId: "sc-14emc3a-0"
                })(["width:100%;height:100%;"]),
                Rh = Object(Dt.default)(ja).withConfig({
                    componentId: "sc-14emc3a-1"
                })(["padding:0;font-size:1rem;opacity:", ";"], (function (e) {
                    return e.disabled ? "0.4" : "1"
                })),
                Bh = Dt.default.div.withConfig({
                    componentId: "sc-14emc3a-2"
                })(["z-index:100;visibility:", ";opacity:", ";transition:visibility 150ms linear,opacity 150ms linear;background:", ";border:1px solid ", ";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);color:", ";border-radius:0.5rem;padding:1rem;display:grid;grid-template-rows:1fr;grid-gap:8px;font-size:1rem;text-align:left;"], (function (e) {
                    return e.show ? "visible" : "hidden"
                }), (function (e) {
                    return e.show ? 1 : 0
                }), (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.text2
                })),
                Dh = Dt.default.div.withConfig({
                    componentId: "sc-14emc3a-3"
                })(["display:flex;justify-content:center;align-items:center;position:relative;border:none;"]),
                Ph = Dt.default.div.withConfig({
                    componentId: "sc-14emc3a-4"
                })(["font-size:16px;overflow:hidden;text-overflow:ellipsis;font-weight:600;color:", ";"], (function (e) {
                    var t = e.theme;
                    e.active;
                    return t.white
                })),
                Lh = Object(Dt.default)(Va).withConfig({
                    componentId: "sc-14emc3a-5"
                })(["font-size:12px;color:", ";"], (function (e) {
                    var t = e.theme;
                    return e.active ? "#585858" : t.text2
                })),
                Fh = Object(Dt.default)(vn).withConfig({
                    componentId: "sc-14emc3a-6"
                })(["background-color:", ";border:1px solid rgba(255,255,255,0.1);transition:200ms;align-items:center;padding:1rem;border-radius:10px;"], (function (e) {
                    e.bgColor;
                    var t = e.active;
                    e.theme;
                    return t ? "#3ab1c4" : "transparent"
                }));

            function zh(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var Wh = Object(i.memo)((function (e) {
                    var t = e.listUrl,
                        n = Object(d.d)((function (e) {
                            return e.lists.byUrl
                        })),
                        r = Object(d.c)(),
                        a = n[t],
                        o = a.current,
                        c = a.pendingUpdate,
                        s = (oo(), Th(null === o || void 0 === o ? void 0 : o.logoURI)),
                        l = function (e) {
                            var t = ir();
                            return Boolean(null === t || void 0 === t ? void 0 : t.includes(e))
                        }(t),
                        p = th(!1),
                        b = Object(P.a)(p, 2),
                        h = b[0],
                        m = b[1],
                        j = Object(i.useRef)(),
                        g = Object(i.useState)(),
                        x = Object(P.a)(g, 2),
                        O = x[0],
                        v = x[1],
                        y = Object(i.useState)(),
                        w = Object(P.a)(y, 2),
                        A = w[0],
                        k = w[1],
                        I = Object(rf.a)(O, A, {
                            placement: "auto",
                            strategy: "fixed",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8]
                                }
                            }]
                        }),
                        C = I.styles,
                        T = I.attributes;
                    nh(j, h ? m : void 0);
                    var E = Object(i.useCallback)((function () {
                            c && (u.a.event({
                                category: "Lists",
                                action: "Update List from List Select",
                                label: t
                            }), r(Id(t)))
                        }), [r, t, c]),
                        N = Object(i.useCallback)((function () {
                            u.a.event({
                                category: "Lists",
                                action: "Start Remove List",
                                label: t
                            }), "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && (u.a.event({
                                category: "Lists",
                                action: "Confirm Remove List",
                                label: t
                            }), r(wd(t)))
                        }), [r, t]),
                        S = Object(i.useCallback)((function () {
                            u.a.event({
                                category: "Lists",
                                action: "Enable List",
                                label: t
                            }), r(Ad(t))
                        }), [r, t]),
                        M = Object(i.useCallback)((function () {
                            u.a.event({
                                category: "Lists",
                                action: "Disable List",
                                label: t
                            }), r(kd(t))
                        }), [r, t]);
                    return o ? Object(Ct.jsxs)(Fh, {
                        active: l,
                        bgColor: s,
                        id: zh(t),
                        children: [o.logoURI ? Object(Ct.jsx)(Rf, {
                            size: "40px",
                            style: {
                                marginRight: "1rem"
                            },
                            logoURI: o.logoURI,
                            alt: "".concat(o.name, " list logo")
                        }) : Object(Ct.jsx)("div", {
                            style: {
                                width: "24px",
                                height: "24px",
                                marginRight: "1rem"
                            }
                        }), Object(Ct.jsxs)(on, {
                            style: {
                                flex: "1"
                            },
                            children: [Object(Ct.jsx)(vn, {
                                children: Object(Ct.jsx)(Ph, {
                                    active: l,
                                    children: o.name
                                })
                            }), Object(Ct.jsxs)(On, {
                                mt: "4px",
                                children: [Object(Ct.jsxs)(Lh, {
                                    active: l,
                                    mr: "6px",
                                    children: [o.tokens.length, " tokens"]
                                }), Object(Ct.jsxs)(Dh, {
                                    ref: j,
                                    children: [Object(Ct.jsx)(fo, {
                                        onClick: m,
                                        ref: v,
                                        padding: "0",
                                        children: Object(Ct.jsx)(ph.a, {
                                            stroke: "#fff",
                                            size: 12
                                        })
                                    }), h && Object(Ct.jsxs)(Bh, Object(f.a)(Object(f.a)({
                                        show: !0,
                                        ref: k,
                                        style: C.popper
                                    }, T.popper), {}, {
                                        children: [Object(Ct.jsx)("div", {
                                            children: o && Cd(o.version)
                                        }), Object(Ct.jsx)(Mf, {}), Object(Ct.jsx)(ka, {
                                            href: "https://tokenlists.org/token-list?url=".concat(t),
                                            children: "View list"
                                        }), Object(Ct.jsx)(Rh, {
                                            onClick: N,
                                            disabled: 1 === Object.keys(n).length,
                                            children: "Remove list"
                                        }), c && Object(Ct.jsx)(Rh, {
                                            onClick: E,
                                            children: "Update list"
                                        })]
                                    }))]
                                })]
                            })]
                        }), Object(Ct.jsx)(Mh, {
                            isActive: l,
                            bgColor: s,
                            toggle: function () {
                                l ? M() : S()
                            }
                        })]
                    }, t) : null
                })),
                Vh = Dt.default.div.withConfig({
                    componentId: "sc-14emc3a-7"
                })(["padding:1rem;height:100%;overflow:auto;padding-bottom:80px;"]);

            function Yh(e) {
                var t = e.setModalView,
                    n = e.setImportList,
                    r = e.setListUrl,
                    a = oo(),
                    o = Object(i.useState)(""),
                    c = Object(P.a)(o, 2),
                    s = c[0],
                    l = c[1],
                    u = tr(),
                    d = ir(),
                    p = Object(i.useState)(),
                    b = Object(P.a)(p, 2),
                    f = b[0],
                    h = b[1];
                Object(i.useEffect)((function () {
                    !f && d && h(d)
                }), [f, d]);
                var m = Object(i.useCallback)((function (e) {
                        l(e.target.value)
                    }), []),
                    j = Ah(),
                    g = Object(i.useMemo)((function () {
                        return Gb(s).length > 0 || Boolean(Yb(s))
                    }), [s]),
                    x = Object(i.useMemo)((function () {
                        return Object.keys(u).filter((function (e) {
                            return Boolean(u[e].current) && !Boolean(Yn.includes(e))
                        })).sort((function (e, t) {
                            var n = u[e].current,
                                r = u[t].current;
                            return (null === f || void 0 === f ? void 0 : f.includes(e)) && !(null === f || void 0 === f ? void 0 : f.includes(t)) ? -1 : !(null === f || void 0 === f ? void 0 : f.includes(e)) && (null === f || void 0 === f ? void 0 : f.includes(t)) ? 1 : n && r ? n.name.toLowerCase() < r.name.toLowerCase() ? -1 : n.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1 : n ? -1 : r ? 1 : 0
                        }))
                    }), [u, f]),
                    O = Object(i.useState)(),
                    v = Object(P.a)(O, 2),
                    y = v[0],
                    w = v[1],
                    A = Object(i.useState)(),
                    C = Object(P.a)(A, 2),
                    T = C[0],
                    E = C[1];
                Object(i.useEffect)((function () {
                    function e() {
                        return (e = Object(I.a)(k.a.mark((function e() {
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        j(s, !1).then((function (e) {
                                            return w(e)
                                        })).catch((function () {
                                            return E("Error importing list")
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    g ? function () {
                        e.apply(this, arguments)
                    }() : (w(void 0), "" !== s && E("Enter valid list location")), "" === s && E(void 0)
                }), [j, s, g]);
                var N = Object.keys(u).includes(s),
                    S = Object(i.useCallback)((function () {
                        y && (n(y), t(Zh.importList), r(s))
                    }), [s, n, r, t, y]);
                return Object(Ct.jsxs)(Uh, {
                    children: [Object(Ct.jsxs)(Tf, {
                        gap: "14px",
                        children: [Object(Ct.jsx)(vn, {
                            children: Object(Ct.jsx)(Nf, {
                                type: "text",
                                id: "list-add-input",
                                placeholder: "https:// or ipfs:// or ENS name",
                                value: s,
                                onChange: m
                            })
                        }), T ? Object(Ct.jsx)(to, {
                            title: T,
                            style: {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            },
                            error: !0,
                            children: T
                        }) : null]
                    }), y && Object(Ct.jsx)(Tf, {
                        style: {
                            paddingTop: 0
                        },
                        children: Object(Ct.jsx)(ls, {
                            backgroundColor: a.bg2,
                            padding: "12px 20px",
                            children: Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsxs)(On, {
                                    children: [y.logoURI && Object(Ct.jsx)(Rf, {
                                        logoURI: y.logoURI,
                                        size: "40px"
                                    }), Object(Ct.jsxs)(an, {
                                        gap: "4px",
                                        style: {
                                            marginLeft: "20px"
                                        },
                                        children: [Object(Ct.jsx)(Qa, {
                                            fontWeight: 600,
                                            children: y.name
                                        }), Object(Ct.jsxs)(Va, {
                                            fontSize: "12px",
                                            children: [y.tokens.length, " tokens"]
                                        })]
                                    })]
                                }), N ? Object(Ct.jsxs)(On, {
                                    children: [Object(Ct.jsx)(ma, {
                                        stroke: a.text2,
                                        size: "16px",
                                        marginRight: "10px",
                                        children: Object(Ct.jsx)(Ls.a, {})
                                    }), Object(Ct.jsx)(Qa, {
                                        color: a.text2,
                                        children: "Loaded"
                                    })]
                                }) : Object(Ct.jsx)(so, {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    padding: "6px 8px",
                                    width: "fit-content",
                                    onClick: S,
                                    children: "Import"
                                })]
                            })
                        })
                    }), Object(Ct.jsx)(Sf, {}), Object(Ct.jsx)(Vh, {
                        children: Object(Ct.jsx)(an, {
                            gap: "md",
                            children: x.map((function (e) {
                                return Object(Ct.jsx)(Wh, {
                                    listUrl: e
                                }, e)
                            }))
                        })
                    })]
                })
            }
            var Gh = Dt.default.div.withConfig({
                    componentId: "sc-1hregoh-0"
                })(["width:100%;height:calc(100% - 60px);position:relative;padding-bottom:60px;"]),
                Jh = Dt.default.div.withConfig({
                    componentId: "sc-1hregoh-1"
                })(["position:absolute;bottom:0;width:100%;border-radius:20px;border-top-right-radius:0;border-top-left-radius:0;border-top:1px solid ", ";border-top:1px solid #2B2E40;padding:20px;text-align:center;"], (function (e) {
                    return e.theme.bg3
                }));

            function qh(e) {
                var t = e.setModalView,
                    n = e.setImportToken,
                    r = It().chainId,
                    a = Object(i.useState)(""),
                    o = Object(P.a)(a, 2),
                    c = o[0],
                    s = o[1],
                    l = oo(),
                    u = Object(i.useRef)(),
                    p = Object(i.useCallback)((function (e) {
                        var t = e.target.value,
                            n = Un(t);
                        s(n || t)
                    }), []),
                    b = Un(c),
                    f = ui(c),
                    h = Ri(),
                    m = function () {
                        var e = Object(d.c)();
                        return Object(i.useCallback)((function (t, n) {
                            e(xi({
                                chainId: t,
                                address: n
                            }))
                        }), [e])
                    }(),
                    j = Object(i.useCallback)((function () {
                        r && h && h.map((function (e) {
                            return m(r, e.address)
                        }))
                    }), [m, h, r]),
                    g = Object(i.useMemo)((function () {
                        return r && h.map((function (e) {
                            return Object(Ct.jsxs)(gn, {
                                width: "100%",
                                children: [Object(Ct.jsxs)(On, {
                                    children: [Object(Ct.jsx)($b, {
                                        currency: e,
                                        size: "20px"
                                    }), Object(Ct.jsx)(ka, {
                                        href: Bn(r, e.address, "address"),
                                        children: Object(Ct.jsx)(Va, {
                                            ml: "10px",
                                            fontWeight: 600,
                                            children: e.symbol
                                        })
                                    })]
                                }), Object(Ct.jsxs)(On, {
                                    children: [Object(Ct.jsx)(ya, {
                                        onClick: function () {
                                            return m(r, e.address)
                                        }
                                    }), Object(Ct.jsx)(Ia, {
                                        href: Bn(r, e.address, "address")
                                    })]
                                })]
                            }, e.address)
                        }))
                    }), [h, r, m]);
                return Object(Ct.jsxs)(Gh, {
                    children: [Object(Ct.jsxs)(on, {
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: [Object(Ct.jsxs)(Tf, {
                            gap: "14px",
                            children: [Object(Ct.jsx)(vn, {
                                children: Object(Ct.jsx)(Nf, {
                                    type: "text",
                                    id: "token-search-input",
                                    placeholder: "0x0000",
                                    value: c,
                                    autoComplete: "off",
                                    ref: u,
                                    onChange: p
                                })
                            }), "" !== c && !b && Object(Ct.jsx)(to, {
                                error: !0,
                                children: "Enter valid token address"
                            }), f && Object(Ct.jsx)(ls, {
                                backgroundColor: l.bg2,
                                padding: "10px 0",
                                children: Object(Ct.jsx)(Lf, {
                                    token: f,
                                    showImportView: function () {
                                        return t(Zh.importToken)
                                    },
                                    setImportToken: n,
                                    style: {
                                        height: "fit-content"
                                    }
                                })
                            })]
                        }), Object(Ct.jsx)(Sf, {}), Object(Ct.jsxs)(Tf, {
                            gap: "lg",
                            children: [Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsxs)(Va, {
                                    fontWeight: 600,
                                    children: [null === h || void 0 === h ? void 0 : h.length, " Custom ", 1 === h.length ? "Token" : "Tokens"]
                                }), h.length > 0 && Object(Ct.jsx)(fa, {
                                    onClick: j,
                                    children: Object(Ct.jsx)(_a, {
                                        children: "Clear all"
                                    })
                                })]
                            }), g]
                        })]
                    }), Object(Ct.jsx)(Jh, {
                        children: Object(Ct.jsx)($a, {
                            children: "Tip: Custom tokens are stored locally in your browser"
                        })
                    })]
                })
            }
            var Qh = Dt.default.div.withConfig({
                    componentId: "m7j046-0"
                })(["width:100%;position:relative;padding-bottom:80px;"]),
                Hh = Object(Dt.default)(gn).withConfig({
                    componentId: "m7j046-1"
                })(["background-color:transparent;border-radius:12px;padding:6px;"]),
                Xh = Dt.default.div.withConfig({
                    componentId: "m7j046-2"
                })(["width:48%;padding:10px;display:flex;align-items:center;justify-content:center;border-radius:12px;font-weight:600;background-color:", ";color:", ";user-select:none;:hover{cursor:pointer;opacity:0.7;}"], (function (e) {
                    var t = e.theme;
                    return e.active ? t.bg1 : t.bg3
                }), (function (e) {
                    var t = e.theme;
                    return e.active ? t.text1 : t.text2
                }));

            function Kh(e) {
                var t = e.onDismiss,
                    n = e.setModalView,
                    r = e.setImportList,
                    a = e.setImportToken,
                    o = e.setListUrl,
                    c = Object(i.useState)(!0),
                    s = Object(P.a)(c, 2),
                    l = s[0],
                    u = s[1];
                return Object(Ct.jsxs)(Qh, {
                    children: [Object(Ct.jsx)(Tf, {
                        children: Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)(ba.a, {
                                style: {
                                    cursor: "pointer",
                                    color: "#fff"
                                },
                                onClick: function () {
                                    return n(Zh.search)
                                }
                            }), Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#fff",
                                children: "Manage"
                            }), Object(Ct.jsx)(ha, {
                                onClick: t
                            })]
                        })
                    }), Object(Ct.jsx)(Sf, {}), Object(Ct.jsx)(Tf, {
                        style: {
                            paddingBottom: 0
                        },
                        children: Object(Ct.jsxs)(Hh, {
                            children: [Object(Ct.jsx)(Xh, {
                                onClick: function () {
                                    return u(!l)
                                },
                                active: l,
                                children: "Lists"
                            }), Object(Ct.jsx)(Xh, {
                                onClick: function () {
                                    return u(!l)
                                },
                                active: !l,
                                children: "Tokens"
                            })]
                        })
                    }), l ? Object(Ct.jsx)(Yh, {
                        setModalView: n,
                        setImportList: r,
                        setListUrl: o
                    }) : Object(Ct.jsx)(qh, {
                        setModalView: n,
                        setImportToken: a
                    })]
                })
            }
            var Zh, _h = Dt.default.div.withConfig({
                componentId: "sc-1u4cw5p-0"
            })(["position:relative;width:100%;overflow:auto;"]);

            function $h(e) {
                var t, n = e.listURL,
                    r = e.list,
                    a = e.setModalView,
                    o = e.onDismiss,
                    c = oo(),
                    s = Object(d.c)(),
                    l = Object(i.useState)(!1),
                    p = Object(P.a)(l, 2),
                    b = p[0],
                    f = p[1],
                    h = tr(),
                    m = Ah(),
                    j = Boolean(null === (t = h[n]) || void 0 === t ? void 0 : t.loadingRequestId),
                    g = Object(i.useState)(null),
                    x = Object(P.a)(g, 2),
                    O = x[0],
                    v = x[1],
                    y = Object(i.useCallback)((function () {
                        j || (v(null), m(n).then((function () {
                            u.a.event({
                                category: "Lists",
                                action: "Add List",
                                label: n
                            }), s(Ad(n)), a(Zh.manage)
                        })).catch((function (e) {
                            u.a.event({
                                category: "Lists",
                                action: "Add List Failed",
                                label: n
                            }), v(e.message), s(wd(n))
                        })))
                    }), [j, s, m, n, a]);
                return Object(Ct.jsxs)(_h, {
                    children: [Object(Ct.jsx)(Tf, {
                        gap: "14px",
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)(ba.a, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function () {
                                    return a(Zh.manage)
                                }
                            }), Object(Ct.jsx)(Xa, {
                                children: "Import List"
                            }), Object(Ct.jsx)(ha, {
                                onClick: o
                            })]
                        })
                    }), Object(Ct.jsx)(yb, {}), Object(Ct.jsx)(Tf, {
                        gap: "md",
                        children: Object(Ct.jsxs)(an, {
                            gap: "md",
                            children: [Object(Ct.jsx)(ls, {
                                backgroundColor: c.bg2,
                                padding: "12px 20px",
                                children: Object(Ct.jsx)(gn, {
                                    children: Object(Ct.jsxs)(On, {
                                        children: [r.logoURI && Object(Ct.jsx)(Rf, {
                                            logoURI: r.logoURI,
                                            size: "40px"
                                        }), Object(Ct.jsxs)(an, {
                                            gap: "sm",
                                            style: {
                                                marginLeft: "20px"
                                            },
                                            children: [Object(Ct.jsxs)(On, {
                                                children: [Object(Ct.jsx)(Qa, {
                                                    fontWeight: 600,
                                                    mr: "6px",
                                                    children: r.name
                                                }), Object(Ct.jsx)(If, {}), Object(Ct.jsxs)(Va, {
                                                    fontSize: "16px",
                                                    ml: "6px",
                                                    children: [r.tokens.length, " tokens"]
                                                })]
                                            }), Object(Ct.jsx)(ka, {
                                                href: "https://tokenlists.org/token-list?url=".concat(n),
                                                children: Object(Ct.jsx)(Va, {
                                                    fontSize: "12px",
                                                    color: c.blue1,
                                                    children: n
                                                })
                                            })]
                                        })]
                                    })
                                })
                            }), Object(Ct.jsxs)(ls, {
                                style: {
                                    backgroundColor: Object(Xt.d)(.8, c.red1)
                                },
                                children: [Object(Ct.jsxs)(an, {
                                    justify: "center",
                                    style: {
                                        textAlign: "center",
                                        gap: "16px",
                                        marginBottom: "12px"
                                    },
                                    children: [Object(Ct.jsx)(xb.a, {
                                        stroke: c.red1,
                                        size: 32
                                    }), Object(Ct.jsxs)(Qa, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: c.red1,
                                        children: ["Import at your own risk", " "]
                                    })]
                                }), Object(Ct.jsxs)(an, {
                                    style: {
                                        textAlign: "center",
                                        gap: "16px",
                                        marginBottom: "12px"
                                    },
                                    children: [Object(Ct.jsx)(Qa, {
                                        fontWeight: 500,
                                        color: c.red1,
                                        children: "By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."
                                    }), Object(Ct.jsx)(Qa, {
                                        fontWeight: 600,
                                        color: c.red1,
                                        children: "If you purchase a token from this list, you may not be able to sell it back."
                                    })]
                                }), Object(Ct.jsxs)(xn, {
                                    justify: "center",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: function () {
                                        return f(!b)
                                    },
                                    children: [Object(Ct.jsx)(Cf, {
                                        name: "confirmed",
                                        type: "checkbox",
                                        checked: b,
                                        onChange: function () {
                                            return f(!b)
                                        }
                                    }), Object(Ct.jsx)(Qa, {
                                        ml: "10px",
                                        fontSize: "16px",
                                        color: c.red1,
                                        fontWeight: 500,
                                        children: "I understand"
                                    })]
                                })]
                            }), Object(Ct.jsx)(so, {
                                disabled: !b,
                                altDisabledStyle: !0,
                                borderRadius: "20px",
                                padding: "10px 1rem",
                                onClick: y,
                                children: "Import"
                            }), O ? Object(Ct.jsx)(to, {
                                title: O,
                                style: {
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                error: !0,
                                children: O
                            }) : null]
                        })
                    })]
                })
            }

            function em(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    r = e.onCurrencySelect,
                    a = e.selectedCurrency,
                    o = e.otherSelectedCurrency,
                    c = e.showCommonBases,
                    s = void 0 !== c && c,
                    l = Object(i.useState)(Zh.manage),
                    u = Object(P.a)(l, 2),
                    d = u[0],
                    p = u[1],
                    b = xf(t);
                Object(i.useEffect)((function () {
                    t && !b && p(Zh.search)
                }), [t, b]);
                var f = Object(i.useCallback)((function (e) {
                        r(e), n()
                    }), [n, r]),
                    h = Bs(d),
                    m = Object(i.useState)(),
                    j = Object(P.a)(m, 2),
                    g = j[0],
                    x = j[1],
                    O = Object(i.useState)(),
                    v = Object(P.a)(O, 2),
                    y = v[0],
                    w = v[1],
                    A = Object(i.useState)(),
                    k = Object(P.a)(A, 2),
                    I = k[0],
                    C = k[1],
                    T = d === Zh.importToken || d === Zh.importList ? 40 : 80;
                return Object(Ct.jsx)(tn, {
                    isOpen: t,
                    onDismiss: n,
                    maxHeight: 80,
                    minHeight: T,
                    children: d === Zh.search ? Object(Ct.jsx)(ch, {
                        isOpen: t,
                        onDismiss: n,
                        onCurrencySelect: f,
                        selectedCurrency: a,
                        otherSelectedCurrency: o,
                        showCommonBases: s,
                        showImportView: function () {
                            return p(Zh.importToken)
                        },
                        setImportToken: x,
                        showManageView: function () {
                            return p(Zh.manage)
                        }
                    }) : d === Zh.importToken && g ? Object(Ct.jsx)(dh, {
                        tokens: [g],
                        onDismiss: n,
                        list: g instanceof Kn ? g.list : void 0,
                        onBack: function () {
                            return p(h && h !== Zh.importToken ? h : Zh.search)
                        },
                        handleCurrencySelect: f
                    }) : d === Zh.importList && y && I ? Object(Ct.jsx)($h, {
                        list: y,
                        listURL: I,
                        onDismiss: n,
                        setModalView: p
                    }) : d === Zh.manage ? Object(Ct.jsx)(Kh, {
                        onDismiss: n,
                        setModalView: p,
                        setImportToken: x,
                        setImportList: w,
                        setListUrl: C
                    }) : ""
                })
            }! function (e) {
                e[e.search = 0] = "search", e[e.manage = 1] = "manage", e[e.importToken = 2] = "importToken", e[e.importList = 3] = "importList"
            }(Zh || (Zh = {}));
            var tm = Dt.default.div.withConfig({
                    componentId: "sc-18nleel-0"
                })(["position:relative;display:flex;flex-direction:row;margin-left:", ";"], (function (e) {
                    var t = e.sizeraw;
                    return e.margin && (t / 3 + 8).toString() + "px"
                })),
                nm = Object(Dt.default)($b).withConfig({
                    componentId: "sc-18nleel-1"
                })(["z-index:2;"]),
                rm = Object(Dt.default)($b).withConfig({
                    componentId: "sc-18nleel-2"
                })(["position:absolute;left:", " !important;"], (function (e) {
                    return "-" + (e.sizeraw / 2).toString() + "px"
                }));

            function im(e) {
                var t = e.currency0,
                    n = e.currency1,
                    r = e.size,
                    i = void 0 === r ? 16 : r,
                    a = e.margin,
                    o = void 0 !== a && a;
                return Object(Ct.jsxs)(tm, {
                    sizeraw: i,
                    margin: o,
                    children: [t && Object(Ct.jsx)(nm, {
                        currency: t,
                        size: i.toString() + "px"
                    }), n && Object(Ct.jsx)(rm, {
                        currency: n,
                        size: i.toString() + "px",
                        sizeraw: i
                    })]
                })
            }
            var am, om = Dt.default.input.withConfig({
                    componentId: "sc-97wkur-0"
                })(["color:#fff;width:0;position:relative;font-weight:500;outline:none;border:none;flex:1 1 auto;background-color:#161522;font-size:", ";text-align:", ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0px;-webkit-appearance:textfield;text-align:right;::-webkit-search-decoration{-webkit-appearance:none;}[type='number']{-moz-appearance:textfield;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:#585858;}"], (function (e) {
                    var t = e.fontSize;
                    return null !== t && void 0 !== t ? t : "24px"
                }), (function (e) {
                    var t = e.align;
                    return t && t
                })),
                cm = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                sm = a.a.memo((function (e) {
                    var t = e.value,
                        n = e.onUserInput,
                        r = e.placeholder,
                        i = e.prependSymbol,
                        a = Object(qt.a)(e, ["value", "onUserInput", "placeholder", "prependSymbol"]),
                        o = function (e) {
                            ("" === e || cm.test(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && n(e)
                        };
                    return Object(Ct.jsx)(om, Object(f.a)(Object(f.a)({}, a), {}, {
                        value: i && t ? i + t : t,
                        onChange: function (e) {
                            if (i) {
                                var t = e.target.value,
                                    n = t.toString().includes(i) ? t.toString().slice(1, t.toString().length + 1) : t;
                                o(n.replace(/,/g, "."))
                            } else o(e.target.value.replace(/,/g, "."))
                        },
                        inputMode: "decimal",
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: r || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                }));

            function lm() {
                return (lm = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function um(e, t) {
                if (null == e) return {};
                var n, r, i = function (e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function dm(e, t) {
                var n = e.title,
                    r = e.titleId,
                    a = um(e, ["title", "titleId"]);
                return i.createElement("svg", lm({
                    width: 12,
                    height: 7,
                    viewBox: "0 0 12 7",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, a), n ? i.createElement("title", {
                    id: r
                }, n) : null, am || (am = i.createElement("path", {
                    d: "M0.97168 1L6.20532 6L11.439 1",
                    stroke: "#AEAEAE"
                })))
            }
            var pm, bm = i.forwardRef(dm),
                fm = (n.p, n(1807)),
                hm = Dt.default.span.withConfig({
                    componentId: "sc-1ip7h9u-0"
                })(["cursor:auto;margin-left:", ";color:#fff;font-size:", ";:hover{color:#fff !important;}@media screen and (max-width:600px){font-size:", ";}"], (function (e) {
                    return e.margin && "4px"
                }), (function (e) {
                    var t = e.fontSize;
                    return null !== t && void 0 !== t ? t : "inherit"
                }), (function (e) {
                    return e.adjustSize && "12px"
                })),
                mm = function (e) {
                    var t = e.text,
                        n = e.maxCharacters,
                        r = void 0 === n ? 20 : n,
                        a = e.margin,
                        o = void 0 !== a && a,
                        c = e.adjustSize,
                        s = void 0 !== c && c,
                        l = e.fontSize,
                        u = e.link,
                        d = Object(qt.a)(e, ["text", "maxCharacters", "margin", "adjustSize", "fontSize", "link"]),
                        p = Object(i.useState)(!1),
                        b = Object(P.a)(p, 2),
                        h = b[0],
                        m = b[1];
                    return t ? t.length > r ? Object(Ct.jsx)(pf, {
                        text: t,
                        show: h,
                        children: Object(Ct.jsx)(hm, Object(f.a)(Object(f.a)({
                            onMouseEnter: function () {
                                return m(!0)
                            },
                            onMouseLeave: function () {
                                return m(!1)
                            },
                            margin: o,
                            adjustSize: s,
                            link: u,
                            fontSize: l
                        }, d), {}, {
                            children: " " + t.slice(0, r - 1) + "..."
                        }))
                    }) : Object(Ct.jsx)(hm, Object(f.a)(Object(f.a)({
                        margin: o,
                        adjustSize: s,
                        link: u,
                        fontSize: l
                    }, d), {}, {
                        children: t
                    })) : Object(Ct.jsx)("span", {})
                };

            function jm(e) {
                var t = e.fiatValue,
                    n = e.priceImpact,
                    r = oo(),
                    a = Object(i.useMemo)((function () {
                        if (n) {
                            if (n.lessThan("0")) return r.green1;
                            var e = rb(n);
                            return e < 1 ? r.text4 : e < 3 ? r.yellow1 : r.red1
                        }
                    }), [n, r.green1, r.red1, r.text4, r.yellow1]);
                return Object(Ct.jsxs)(Qa, {
                    fontSize: 14,
                    color: "#fff",
                    children: [t ? "~" : "", "$", Object(Ct.jsx)(mm, {
                        text: t ? null === t || void 0 === t ? void 0 : t.toSignificant(6, {
                            groupSeparator: ","
                        }) : "-"
                    }), " ", n ? Object(Ct.jsxs)("span", {
                        style: {
                            color: a
                        },
                        children: [" (", n.multiply(-1).toSignificant(3), "%)"]
                    }) : null]
                })
            }
            var gm = Dt.default.div.withConfig({
                    componentId: "sc-160uzsu-0"
                })(["", " position:relative;border-radius:", ";background-color:", ";z-index:1;width:", ";"], (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    return e.hideInput ? "16px" : "20px"
                }), (function (e) {
                    var t = e.theme;
                    return e.hideInput ? "transparent" : t.bg0
                }), (function (e) {
                    return e.hideInput ? "100%" : "initial"
                })),
                xm = Dt.default.div.withConfig({
                    componentId: "sc-160uzsu-1"
                })(["width:100%;height:100%;position:absolute;border-radius:20px;background-color:red;opacity:0.95;display:flex;align-items:center;justify-content:center;z-index:2;"]),
                Om = Dt.default.div.withConfig({
                    componentId: "sc-160uzsu-2"
                })(["border-radius:14px;border:1px solid #2B2E40;background-color:#161522;width:", ";:focus,:hover{border:1px solid #2B2E40;}"], (function (e) {
                    return e.hideInput ? "100%" : "initial"
                })),
                vm = Object(Dt.default)(uo).withConfig({
                    componentId: "sc-160uzsu-3"
                })(["align-items:center;font-size:24px;font-weight:500;background:#202230;color:#fff;border-radius:16px;box-shadow:", ";outline:none;cursor:pointer;user-select:none;border:none;height:", ";width:", ";padding:0 8px;justify-content:space-between;margin-right:", ";border:", ";:focus,:hover{background:#202230;}"], (function (e) {
                    return e.selected ? "none" : "0px 0px 5px 3px rgba(243, 30, 90, 0.5);"
                }), (function (e) {
                    return e.hideInput ? "2.8rem" : "2.4rem"
                }), (function (e) {
                    return e.hideInput ? "100%" : "initial"
                }), (function (e) {
                    return e.hideInput ? "0" : "12px"
                }), (function (e) {
                    return !e.selected && "1px solid #f31e5a"
                })),
                ym = Dt.default.div.withConfig({
                    componentId: "sc-160uzsu-4"
                })(["", " align-items:center;padding:", ";"], (function (e) {
                    return e.theme.flexRowNoWrap
                }), (function (e) {
                    return e.selected ? " 1rem 1rem 0.75rem 1rem" : "1rem 1rem 0.75rem 1rem"
                })),
                wm = Dt.default.div.withConfig({
                    componentId: "sc-160uzsu-5"
                })(["", " align-items:center;color:", ";font-size:0.75rem;line-height:1rem;padding:0 1rem 1rem;span:hover{cursor:pointer;color:", ";}"], (function (e) {
                    return e.theme.flexRowNoWrap
                }), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    var t = e.theme;
                    return Object(Xt.a)(.2, t.text2)
                })),
                Am = Object(Dt.default)(wm).withConfig({
                    componentId: "sc-160uzsu-6"
                })(["justify-content:flex-end;"]),
                km = Dt.default.span.withConfig({
                    componentId: "sc-160uzsu-7"
                })(["display:flex;align-items:center;justify-content:space-between;width:100%;"]),
                Im = Object(Dt.default)(bm).withConfig({
                    componentId: "sc-160uzsu-8"
                })(["margin:0 0.25rem 0 0.35rem;height:35%;path{stroke:", ";stroke-width:1.5px;}"], (function (e) {
                    e.selected;
                    var t = e.theme;
                    return t.white
                })),
                Cm = Dt.default.span.withConfig({
                    componentId: "sc-160uzsu-9"
                })(["", " font-size:", ";"], (function (e) {
                    e.active;
                    return "  margin: 0 0.25rem 0 0.25rem;"
                }), (function (e) {
                    e.active;
                    return "18px"
                })),
                Tm = Dt.default.button.withConfig({
                    componentId: "sc-160uzsu-10"
                })(["background-color:transparent;border:none;border-radius:12px;font-size:14px;font-weight:500;cursor:pointer;padding:0;color:", ";opacity:", ";pointer-events:", ";margin-left:0.25rem;:focus{outline:none;}", ";"], (function (e) {
                    return e.theme.primary1
                }), (function (e) {
                    return e.disabled ? .4 : 1
                }), (function (e) {
                    return e.disabled ? "none" : "initial"
                }), (function (e) {
                    return e.theme.mediaWidth.upToExtraSmall(pm || (pm = Object(Bt.a)(["\n    margin-right: 0.5rem;\n  "])))
                }));

            function Em(e) {
                var t, n, r = e.value,
                    a = e.onUserInput,
                    o = e.onMax,
                    c = e.showMaxButton,
                    s = e.onCurrencySelect,
                    l = e.currency,
                    u = e.otherCurrency,
                    d = e.id,
                    p = e.showCommonBases,
                    b = e.customBalanceText,
                    h = e.fiatValue,
                    j = e.priceImpact,
                    x = e.hideBalance,
                    O = void 0 !== x && x,
                    v = e.pair,
                    y = void 0 === v ? null : v,
                    w = e.hideInput,
                    A = void 0 !== w && w,
                    k = e.locked,
                    I = void 0 !== k && k,
                    C = Object(qt.a)(e, ["value", "onUserInput", "onMax", "showMaxButton", "onCurrencySelect", "currency", "otherCurrency", "id", "showCommonBases", "customBalanceText", "fiatValue", "priceImpact", "hideBalance", "pair", "hideInput", "locked"]),
                    T = Object(Nt.b)().t,
                    E = Object(i.useState)(!1),
                    N = Object(P.a)(E, 2),
                    S = N[0],
                    M = N[1],
                    U = It().account,
                    R = cs(null !== U && void 0 !== U ? U : void 0, null !== l && void 0 !== l ? l : void 0),
                    B = oo(),
                    D = Object(i.useCallback)((function () {
                        M(!1)
                    }), [M]);
                return Object(Ct.jsxs)(gm, Object(f.a)(Object(f.a)({
                    id: d,
                    hideInput: A
                }, C), {}, {
                    children: [I && Object(Ct.jsx)(xm, {
                        children: Object(Ct.jsxs)(an, {
                            gap: "sm",
                            justify: "center",
                            children: [Object(Ct.jsx)(fm.a, {}), Object(Ct.jsx)(Ga, {
                                fontSize: "12px",
                                textAlign: "center",
                                children: "The market price is outside your specified price range. Single-asset deposit only."
                            })]
                        })
                    }), Object(Ct.jsxs)(Om, {
                        hideInput: A,
                        children: [Object(Ct.jsxs)(ym, {
                            style: A ? {
                                padding: "0",
                                borderRadius: "8px"
                            } : {},
                            selected: !s,
                            children: [Object(Ct.jsx)(vm, {
                                selected: !!l,
                                hideInput: A,
                                className: "open-currency-select-button",
                                onClick: function () {
                                    s && M(!0)
                                },
                                children: Object(Ct.jsxs)(km, {
                                    children: [Object(Ct.jsxs)(On, {
                                        children: [y ? Object(Ct.jsx)("span", {
                                            style: {
                                                marginRight: "0.5rem"
                                            },
                                            children: Object(Ct.jsx)(im, {
                                                currency0: y.token0,
                                                currency1: y.token1,
                                                size: 24,
                                                margin: !0
                                            })
                                        }) : l ? Object(Ct.jsx)($b, {
                                            style: {
                                                marginRight: "0.5rem"
                                            },
                                            currency: l,
                                            size: "24px"
                                        }) : null, y ? Object(Ct.jsxs)(Cm, {
                                            className: "pair-name-container",
                                            children: [null === y || void 0 === y ? void 0 : y.token0.symbol, ":", null === y || void 0 === y ? void 0 : y.token1.symbol]
                                        }) : Object(Ct.jsx)(Cm, {
                                            className: "token-symbol-container",
                                            active: Boolean(l && l.symbol),
                                            children: (l && l.symbol && l.symbol.length > 20 ? l.symbol.slice(0, 4) + "..." + l.symbol.slice(l.symbol.length - 5, l.symbol.length) : null === l || void 0 === l ? void 0 : l.symbol) || T("selectToken")
                                        })]
                                    }), s && Object(Ct.jsx)(Im, {
                                        selected: !!l
                                    })]
                                })
                            }), !A && Object(Ct.jsx)(Ct.Fragment, {
                                children: Object(Ct.jsx)(sm, {
                                    className: "token-amount-input",
                                    value: r,
                                    onUserInput: function (e) {
                                        a(e)
                                    }
                                })
                            })]
                        }), !A && !O && Object(Ct.jsx)(Am, {
                            children: Object(Ct.jsxs)(gn, {
                                children: [U ? Object(Ct.jsxs)(On, {
                                    style: {
                                        height: "17px"
                                    },
                                    children: [Object(Ct.jsx)(Qa, {
                                        onClick: o,
                                        color: B.text2,
                                        fontWeight: 400,
                                        fontSize: 14,
                                        style: {
                                            display: "inline",
                                            cursor: "pointer"
                                        },
                                        children: !O && l && R ? (null !== b && void 0 !== b ? b : "Balance: ") + (t = R, n = 4, t ? g.a.equal(t.quotient, g.a.BigInt(0)) ? "0" : t.divide(t.decimalScale).lessThan(new m.d(1, 1e5)) ? "<0.00001" : t.toSignificant(n) : "-") + " " + l.symbol : "-"
                                    }), c && R ? Object(Ct.jsx)(Tm, {
                                        onClick: o,
                                        children: "(Max)"
                                    }) : null]
                                }) : "-", Object(Ct.jsx)(jm, {
                                    fiatValue: h,
                                    priceImpact: j
                                })]
                            })
                        })]
                    }), s && Object(Ct.jsx)(em, {
                        isOpen: S,
                        onDismiss: D,
                        onCurrencySelect: s,
                        selectedCurrency: l,
                        otherSelectedCurrency: u,
                        showCommonBases: p
                    })]
                }))
            }
            var Nm, Sm, Mm, Um, Rm, Bm = n(1808);
            var Dm, Pm = Dt.default.div(Nm || (Nm = Object(Bt.a)(["\n  width: 100%;\n  padding: 1rem;\n"]))),
                Lm = Object(Dt.default)(an)(Sm || (Sm = Object(Bt.a)(["\n  padding: ", ";\n"])), (function (e) {
                    e.inline;
                    return "0"
                })),
                Fm = Object(Dt.default)(Lm)(Mm || (Mm = Object(Bt.a)(["\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]))),
                zm = Object(Dt.default)(rn)(Um || (Um = Object(Bt.a)(["\n  padding: ", ";\n  background: transparent;\n"])), (function (e) {
                    return e.inline ? "20px 0" : "60px 0;"
                })),
                Wm = Dt.default.img(Rm || (Rm = Object(Bt.a)(["\n  height: 16px;\n  width: 16px;\n  margin-left: 6px;\n"])));

            function Vm(e) {
                var t = e.onDismiss,
                    n = e.pendingText,
                    r = e.inline,
                    i = Object(Nt.b)().t;
                return Object(Ct.jsx)(Pm, {
                    children: Object(Ct.jsxs)(an, {
                        gap: "md",
                        children: [!r && Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)("div", {}), Object(Ct.jsx)(ha, {
                                onClick: t
                            })]
                        }), Object(Ct.jsx)(zm, {
                            inline: r,
                            children: Object(Ct.jsx)(Da, {
                                src: Bo,
                                alt: "loader",
                                size: r ? "40px" : "90px"
                            })
                        }), Object(Ct.jsxs)(an, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: "center",
                                color: "#fff",
                                children: i("waiting_for_confirmation")
                            }), Object(Ct.jsx)(an, {
                                gap: "12px",
                                justify: "center",
                                children: Object(Ct.jsx)(yn.b, {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    textAlign: "center",
                                    color: "#fff",
                                    children: n
                                })
                            }), Object(Ct.jsx)(yn.b, {
                                fontSize: 12,
                                color: "#fff",
                                textAlign: "center",
                                marginBottom: 12,
                                children: i("waiting_for_confirmation_text_message")
                            })]
                        })]
                    })
                })
            }

            function Ym(e) {
                var t, n = e.onDismiss,
                    r = e.chainId,
                    a = e.hash,
                    o = e.currencyToAdd,
                    c = e.inline,
                    s = Object(i.useContext)(Dt.ThemeContext),
                    l = It().library,
                    u = Object(Nt.b)().t,
                    d = function (e) {
                        var t = It(),
                            n = t.library,
                            r = jc(e, t.chainId),
                            a = Object(i.useState)(),
                            o = Object(P.a)(a, 2),
                            c = o[0],
                            s = o[1];
                        return {
                            addToken: Object(i.useCallback)((function () {
                                n && n.provider.isMetaMask && n.provider.request && r ? n.provider.request({
                                    method: "wallet_watchAsset",
                                    params: {
                                        type: "ERC20",
                                        options: {
                                            address: r.address,
                                            symbol: r.symbol,
                                            decimals: r.decimals,
                                            image: Kb(r.address)
                                        }
                                    }
                                }).then((function (e) {
                                    s(e)
                                })).catch((function () {
                                    return s(!1)
                                })) : s(!1)
                            }), [n, r]),
                            success: c
                        }
                    }(o),
                    p = d.addToken,
                    b = d.success;
                return Object(Ct.jsx)(Pm, {
                    children: Object(Ct.jsxs)(Lm, {
                        inline: c,
                        children: [!c && Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)("div", {}), Object(Ct.jsx)(ha, {
                                onClick: n
                            })]
                        }), Object(Ct.jsx)(zm, {
                            inline: c,
                            children: Object(Ct.jsx)(Bm.a, {
                                strokeWidth: .5,
                                size: c ? "40px" : "90px",
                                color: "#2871F4"
                            })
                        }), Object(Ct.jsxs)(an, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: "center",
                                color: "#fff",
                                children: u("tx_submitted")
                            }), r && a && Object(Ct.jsx)(ka, {
                                href: Bn(r, a, "transaction"),
                                children: Object(Ct.jsx)(yn.b, {
                                    fontWeight: 500,
                                    fontSize: 14,
                                    color: "#3D6FEC",
                                    children: u("view_on_ethrscan")
                                })
                            }), o && (null === l || void 0 === l || null === (t = l.provider) || void 0 === t ? void 0 : t.isMetaMask) && Object(Ct.jsx)(lo, {
                                mt: "12px",
                                padding: "6px 12px",
                                width: "fit-content",
                                onClick: p,
                                children: b ? Object(Ct.jsxs)(On, {
                                    children: ["Added ", o.symbol, " ", Object(Ct.jsx)(Ls.a, {
                                        size: "16px",
                                        stroke: s.green1,
                                        style: {
                                            marginLeft: "6px"
                                        }
                                    })]
                                }) : Object(Ct.jsxs)(On, {
                                    children: ["Add ", o.symbol, " to Metamask ", Object(Ct.jsx)(Wm, {
                                        src: ke
                                    })]
                                })
                            }), Object(Ct.jsx)(so, {
                                onClick: n,
                                style: {
                                    margin: "20px 0 0 0"
                                },
                                children: Object(Ct.jsx)(yn.b, {
                                    fontWeight: 500,
                                    fontSize: 20,
                                    children: c ? "Return" : u("close")
                                })
                            })]
                        })]
                    })
                })
            }

            function Gm(e) {
                var t = e.title,
                    n = e.bottomContent,
                    r = e.onDismiss,
                    i = e.topContent;
                return Object(Ct.jsxs)(Pm, {
                    children: [Object(Ct.jsxs)(Lm, {
                        children: [Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#fff",
                                children: t
                            }), Object(Ct.jsx)(ha, {
                                onClick: r
                            })]
                        }), i()]
                    }), n && Object(Ct.jsx)(Fm, {
                        gap: "12px",
                        children: n()
                    })]
                })
            }

            function Jm(e) {
                var t = e.message,
                    n = e.onDismiss,
                    r = Object(i.useContext)(Dt.ThemeContext),
                    a = Object(Nt.b)().t;
                return Object(Ct.jsxs)(Pm, {
                    children: [Object(Ct.jsxs)(Lm, {
                        children: [Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#fff",
                                children: a("error")
                            }), Object(Ct.jsx)(ha, {
                                onClick: n
                            })]
                        }), Object(Ct.jsxs)(an, {
                            style: {
                                marginTop: 20,
                                padding: "2rem 0"
                            },
                            gap: "24px",
                            justify: "center",
                            children: [Object(Ct.jsx)(xb.a, {
                                color: r.red1,
                                style: {
                                    strokeWidth: 1.5
                                },
                                size: 64
                            }), Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 16,
                                color: r.red1,
                                style: {
                                    textAlign: "center",
                                    width: "85%",
                                    wordBreak: "break-word"
                                },
                                children: t
                            })]
                        })]
                    }), Object(Ct.jsx)(Fm, {
                        gap: "12px",
                        children: Object(Ct.jsx)(so, {
                            onClick: n,
                            children: a("dismiss")
                        })
                    })]
                })
            }

            function qm(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    r = e.attemptingTxn,
                    i = e.hash,
                    a = e.pendingText,
                    o = e.content,
                    c = e.currencyToAdd,
                    s = It().chainId;
                return s ? Object(Ct.jsx)(tn, {
                    isOpen: t,
                    onDismiss: n,
                    maxHeight: 90,
                    children: r ? Object(Ct.jsx)(Vm, {
                        onDismiss: n,
                        pendingText: a
                    }) : i ? Object(Ct.jsx)(Ym, {
                        chainId: s,
                        hash: i,
                        onDismiss: n,
                        currencyToAdd: c
                    }) : o()
                }) : null
            }

            function Qm(e) {
                var t = e.onConfirm,
                    n = e.swapErrorMessage,
                    r = e.disabledConfirm,
                    i = Object(Nt.b)().t;
                return Object(Ct.jsx)(Ct.Fragment, {
                    children: Object(Ct.jsxs)(xn, {
                        children: [Object(Ct.jsx)(go, {
                            onClick: t,
                            disabled: r,
                            style: {
                                margin: "10px 0 0 0"
                            },
                            id: "confirm-swap-or-send",
                            children: Object(Ct.jsx)(yn.b, {
                                fontSize: 20,
                                fontWeight: 500,
                                children: i("confirm_swap")
                            })
                        }), n ? Object(Ct.jsx)(Tb, {
                            error: n
                        }) : null]
                    })
                })
            }

            function Hm(e) {
                var t = function (e) {
                    var t = It().chainId,
                        n = jc(e, t),
                        r = m.j[t],
                        a = yc(Object(i.useMemo)((function () {
                            return [
                                [t && n && Object(m.l)(r, n) ? void 0 : e, t ? r : void 0],
                                [(null === n || void 0 === n ? void 0 : n.equals(Ge)) ? void 0 : n, t === m.a.MAINNET ? Ge : void 0],
                                [t ? r : void 0, t === m.a.MAINNET ? Ge : void 0]
                            ]
                        }), [t, e, r, n])),
                        o = Object(P.a)(a, 3),
                        c = Object(P.a)(o[0], 2),
                        s = c[0],
                        l = c[1],
                        u = Object(P.a)(o[1], 2),
                        d = u[0],
                        p = u[1],
                        b = Object(P.a)(o[2], 2),
                        f = b[0],
                        h = b[1];
                    return Object(i.useMemo)((function () {
                        var i;
                        if (e && n && t) {
                            if (t !== m.a.MAINNET) {
                                var a = new m.h(t, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 6, "fUSDC", "Fake USDC");
                                return new m.g(e, a, Math.pow(10, Math.max(0, e.decimals - 6)), 15 * Math.pow(10, Math.max(6 - e.decimals, 0)))
                            }
                            if (n.equals(r)) {
                                if (p) {
                                    var o = p.priceOf(r);
                                    return new m.g(e, Ge, o.denominator, o.numerator)
                                }
                            } else {
                                if (n.equals(Ge)) return new m.g(Ge, Ge, "1", "1");
                                var c = null === l || void 0 === l ? void 0 : l.reserveOf(r),
                                    u = (null === c || void 0 === c ? void 0 : c.greaterThan(0)) && (null === h || void 0 === h || null === (i = h.reserveOf(r)) || void 0 === i ? void 0 : i.greaterThan(0)) ? h.priceOf(r).quote(c).quotient : g.a.BigInt(0);
                                if (d === xc.EXISTS && p && p.reserveOf(Ge).greaterThan(u)) {
                                    var b = p.priceOf(n);
                                    return new m.g(e, Ge, b.denominator, b.numerator)
                                }
                                if (s === xc.EXISTS && l && f === xc.EXISTS && h && h.reserveOf(Ge).greaterThan("0") && l.reserveOf(r).greaterThan("0")) {
                                    var j = h.priceOf(Ge),
                                        x = l.priceOf(r),
                                        O = j.multiply(x).invert();
                                    return new m.g(e, Ge, O.denominator, O.numerator)
                                }
                            }
                        }
                    }), [t, e, l, s, h, f, p, d, r, n])
                }(null === e || void 0 === e ? void 0 : e.currency);
                return Object(i.useMemo)((function () {
                    if (!t || !e) return null;
                    try {
                        return t.quote(e)
                    } catch (n) {
                        return null
                    }
                }), [e, t])
            }

            function Xm(e, t) {
                if (t && e && Object(m.l)(e.currency, t.currency) && !g.a.equal(e.quotient, g.a.BigInt(0))) {
                    var n = wt.subtract(t.divide(e));
                    return new m.f(n.numerator, n.denominator)
                }
            }
            var Km, Zm = Dt.default.button(Dm || (Dm = Object(Bt.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  font-size: 0.875rem;\n  font-weight: 400;\n  background-color: transparent;\n  border: none;\n  height: 24px;\n  cursor: pointer;\n"])));

            function _m(e) {
                var t, n, r, a, o, c, s = e.price,
                    l = e.showInverted,
                    u = e.setShowInverted;
                Object(i.useContext)(Dt.ThemeContext);
                try {
                    var d;
                    c = l ? s.toSignificant(4) : null === (d = s.invert()) || void 0 === d ? void 0 : d.toSignificant(4)
                } catch (m) {
                    c = "0"
                }
                var p = l ? "".concat(null === (t = s.quoteCurrency) || void 0 === t ? void 0 : t.symbol) : "".concat(null === (n = s.baseCurrency) || void 0 === n ? void 0 : n.symbol, " "),
                    b = l ? "".concat(null === (r = s.baseCurrency) || void 0 === r ? void 0 : r.symbol, " ") : "".concat(null === (a = s.quoteCurrency) || void 0 === a ? void 0 : a.symbol),
                    f = Object(i.useCallback)((function () {
                        return u(!l)
                    }), [u, l]),
                    h = "".concat(null !== (o = "1 " + b + " = " + c) && void 0 !== o ? o : "-", " ").concat(p);
                return Object(Ct.jsx)(Zm, {
                    onClick: f,
                    title: h,
                    children: Object(Ct.jsx)("div", {
                        style: {
                            alignItems: "center",
                            display: "flex",
                            width: "fit-content"
                        },
                        children: Object(Ct.jsx)(yn.b, {
                            fontWeight: 500,
                            fontSize: 14,
                            color: "#fff",
                            children: h
                        })
                    })
                })
            }
            var $m;
            Object(Dt.default)(mf.a)(Km || (Km = Object(Bt.a)(["\n  // color: ", ";\n  color: #fff;\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  marign-top: 2px;\n  :hover {\n    opacity: 0.8;\n  }\n"])), (function (e) {
                return e.theme.text1
            }));

            function ej(e) {
                var t = e.fetching,
                    n = e.arbiProfit,
                    r = Object(Nt.b)().t;
                return Object(Ct.jsxs)(rn, {
                    children: [Object(Ct.jsx)(gn, {
                        children: Object(Ct.jsx)(yn.b, {
                            fontWeight: 500,
                            fontSize: 18,
                            color: "#fff",
                            children: r("backrunme")
                        })
                    }), Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Ja, {
                                fontSize: 14,
                                fontWeight: 400,
                                color: "#fff",
                                children: r("arb_profit")
                            }), Object(Ct.jsx)(yf, {
                                text: r("estimate_arb_profit_tooltip")
                            })]
                        }), Object(Ct.jsx)("div", {
                            children: t ? Object(Ct.jsx)(yn.b, {
                                fontWeight: 500,
                                fontSize: 14,
                                color: "#fff",
                                children: r("calculating")
                            }) : Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsx)(yn.b, {
                                    fontWeight: 500,
                                    fontSize: 14,
                                    color: "#fff",
                                    children: n || 0
                                }), Object(Ct.jsx)(yn.b, {
                                    fontWeight: 500,
                                    fontSize: 14,
                                    color: "#eee",
                                    paddingLeft: "4px",
                                    children: " ETH"
                                })]
                            })
                        })]
                    })]
                })
            }
            var tj = Dt.default.div($m || ($m = Object(Bt.a)(["\n  padding: 4px;\n  border-radius: 12px;\n  height: 32px;\n  width: 32px;\n  position: relative;\n  margin-top: -18px;\n  margin-bottom: -18px;\n  left: calc(50% - 16px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  background: #202230;\n  border: 1px solid #2b2e40;\n  border-radius: 50%;\n  z-index: 2;\n"])), (function (e) {
                return e.theme.bg1
            }));

            function nj(e) {
                var t = e.trade,
                    n = e.allowedSlippage,
                    r = e.recipient,
                    a = e.showAcceptChanges,
                    o = e.onAcceptChanges,
                    c = e.arbiProfit,
                    s = e.fetchingArbiProfit,
                    l = Object(i.useContext)(Dt.ThemeContext),
                    u = Object(i.useState)(!1),
                    d = Object(P.a)(u, 2),
                    p = d[0],
                    b = d[1],
                    f = Object(Nt.b)().t,
                    h = Hm(t.inputAmount),
                    j = Hm(t.outputAmount);
                return Object(Ct.jsxs)(an, {
                    gap: "4px",
                    style: {
                        marginTop: "1rem"
                    },
                    children: [Object(Ct.jsx)(bs, {
                        padding: "0.75rem 1rem",
                        children: Object(Ct.jsxs)(an, {
                            gap: "8px",
                            children: [Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsx)(Qa, {
                                    color: l.text3,
                                    fontWeight: 500,
                                    fontSize: 14,
                                    children: "From"
                                }), Object(Ct.jsx)(jm, {
                                    fiatValue: h
                                })]
                            }), Object(Ct.jsxs)(gn, {
                                align: "center",
                                children: [Object(Ct.jsxs)(On, {
                                    gap: "0px",
                                    children: [Object(Ct.jsx)($b, {
                                        currency: t.inputAmount.currency,
                                        size: "20px",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    }), Object(Ct.jsx)(yn.b, {
                                        fontSize: 20,
                                        fontWeight: 500,
                                        children: t.inputAmount.currency.symbol
                                    })]
                                }), Object(Ct.jsx)(On, {
                                    gap: "0px",
                                    children: Object(Ct.jsx)(kb, {
                                        fontSize: 24,
                                        fontWeight: 500,
                                        color: a && t.tradeType === m.i.EXACT_OUTPUT ? l.primary1 : "",
                                        children: t.inputAmount.toSignificant(6)
                                    })
                                })]
                            })]
                        })
                    }), Object(Ct.jsx)(tj, {
                        children: Object(Ct.jsx)(jf.a, {
                            size: "16",
                            color: "#fff"
                        })
                    }), Object(Ct.jsx)(bs, {
                        padding: "0.75rem 1rem",
                        style: {
                            marginBottom: "0.25rem"
                        },
                        children: Object(Ct.jsxs)(an, {
                            gap: "8px",
                            children: [Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsx)(Qa, {
                                    color: l.text3,
                                    fontWeight: 500,
                                    fontSize: 14,
                                    children: "To"
                                }), Object(Ct.jsx)(Qa, {
                                    fontSize: 14,
                                    color: l.text3,
                                    children: Object(Ct.jsx)(jm, {
                                        fiatValue: j,
                                        priceImpact: Xm(h, j)
                                    })
                                })]
                            }), Object(Ct.jsxs)(gn, {
                                align: "flex-end",
                                children: [Object(Ct.jsxs)(On, {
                                    gap: "0px",
                                    children: [Object(Ct.jsx)($b, {
                                        currency: t.outputAmount.currency,
                                        size: "20px",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    }), Object(Ct.jsx)(yn.b, {
                                        fontSize: 20,
                                        fontWeight: 500,
                                        children: t.outputAmount.currency.symbol
                                    })]
                                }), Object(Ct.jsx)(On, {
                                    gap: "0px",
                                    children: Object(Ct.jsx)(kb, {
                                        fontSize: 24,
                                        fontWeight: 500,
                                        children: t.outputAmount.toSignificant(6)
                                    })
                                })]
                            })]
                        })
                    }), Object(Ct.jsxs)(gn, {
                        style: {
                            marginTop: "0.25rem",
                            padding: "0 1rem"
                        },
                        children: [Object(Ct.jsx)(Qa, {
                            color: l.text2,
                            fontWeight: 500,
                            fontSize: 14,
                            children: "Price:"
                        }), Object(Ct.jsx)(_m, {
                            price: t.executionPrice,
                            showInverted: p,
                            setShowInverted: b
                        })]
                    }), Object(Ct.jsx)(us, {
                        style: {
                            padding: ".75rem",
                            marginTop: "0.5rem"
                        },
                        children: Object(Ct.jsx)(Bb, {
                            trade: t,
                            allowedSlippage: n
                        })
                    }), Object(Ct.jsx)(ej, {
                        arbiProfit: c,
                        fetching: s
                    }), a ? Object(Ct.jsx)(Eb, {
                        justify: "flex-start",
                        gap: "0px",
                        children: Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsxs)(On, {
                                children: [Object(Ct.jsx)(xb.a, {
                                    size: 20,
                                    style: {
                                        marginRight: "8px",
                                        minWidth: 24
                                    }
                                }), Object(Ct.jsx)(Va, {
                                    color: "#fff",
                                    children: " Price Updated"
                                })]
                            }), Object(Ct.jsx)(so, {
                                style: {
                                    padding: ".5rem",
                                    width: "fit-content",
                                    fontSize: "0.825rem",
                                    borderRadius: "12px"
                                },
                                onClick: o,
                                children: "Accept"
                            })]
                        })
                    }) : null, Object(Ct.jsx)(an, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: ".75rem 1rem"
                        },
                        children: t.tradeType === m.i.EXACT_INPUT ? Object(Ct.jsxs)(eo, {
                            fontWeight: 400,
                            textAlign: "left",
                            style: {
                                width: "100%"
                            },
                            children: [f("confirm_swap_small_alert_SEC1"), Object(Ct.jsxs)("b", {
                                children: [t.minimumAmountOut(n).toSignificant(6), " ", t.outputAmount.currency.symbol]
                            }), f("confirm_swap_small_alert_SEC2")]
                        }) : Object(Ct.jsxs)(eo, {
                            fontWeight: 400,
                            textAlign: "left",
                            style: {
                                width: "100%"
                            },
                            children: ["Input is estimated. You will sell at most ", Object(Ct.jsxs)("b", {
                                children: [t.maximumAmountIn(n).toSignificant(6), " ", t.inputAmount.currency.symbol]
                            }), " or the transaction will revert."]
                        })
                    }), null !== r ? Object(Ct.jsx)(an, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "12px 0 0 0px"
                        },
                        children: Object(Ct.jsxs)(Va, {
                            children: ["Output will be sent to", " ", Object(Ct.jsx)("b", {
                                title: r,
                                children: Un(r) ? Dn(r) : r
                            })]
                        })
                    }) : null]
                })
            }

            function rj() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = t[0],
                    i = t[1];
                return r.tradeType !== i.tradeType || !Object(m.l)(r.inputAmount.currency, i.inputAmount.currency) || !r.inputAmount.equalTo(i.inputAmount) || !Object(m.l)(r.outputAmount.currency, i.outputAmount.currency) || !r.outputAmount.equalTo(i.outputAmount)
            }

            function ij(e) {
                var t, n, r, a, o, c, s = e.trade,
                    l = e.originalTrade,
                    u = e.onAcceptChanges,
                    d = e.allowedSlippage,
                    p = e.onConfirm,
                    b = e.onDismiss,
                    f = e.recipient,
                    h = e.swapErrorMessage,
                    m = e.isOpen,
                    j = e.attemptingTxn,
                    g = e.txHash,
                    x = e.arbiProfit,
                    O = e.fetchingArbiProfit,
                    v = Object(Nt.b)().t,
                    y = Object(i.useMemo)((function () {
                        return Boolean(s instanceof wn.c && l instanceof wn.c && rj(s, l) || s instanceof Xr.b && l instanceof Xr.b && rj(s, l))
                    }), [l, s]),
                    w = Object(i.useCallback)((function () {
                        return s ? Object(Ct.jsx)(nj, {
                            trade: s,
                            allowedSlippage: d,
                            recipient: f,
                            showAcceptChanges: y,
                            onAcceptChanges: u,
                            arbiProfit: x,
                            fetchingArbiProfit: O
                        }) : null
                    }), [d, u, f, y, s]),
                    A = Object(i.useCallback)((function () {
                        return s ? Object(Ct.jsx)(Qm, {
                            onConfirm: p,
                            trade: s,
                            disabledConfirm: y || O,
                            swapErrorMessage: h
                        }) : null
                    }), [p, y, h, s]),
                    k = v("waiting_for_confirmation_swap_details", null === s || void 0 === s || null === (t = s.inputAmount) || void 0 === t ? void 0 : t.toSignificant(6), null === s || void 0 === s || null === (n = s.inputAmount) || void 0 === n || null === (r = n.currency) || void 0 === r ? void 0 : r.symbol, null === s || void 0 === s || null === (a = s.outputAmount) || void 0 === a ? void 0 : a.toSignificant(6), null === s || void 0 === s || null === (o = s.outputAmount) || void 0 === o || null === (c = o.currency) || void 0 === c ? void 0 : c.symbol),
                    I = Object(i.useCallback)((function () {
                        return h ? Object(Ct.jsx)(Jm, {
                            onDismiss: b,
                            message: h
                        }) : Object(Ct.jsx)(Gm, {
                            title: v("confirm_swap"),
                            onDismiss: b,
                            topContent: w,
                            bottomContent: A
                        })
                    }), [b, A, w, h]);
                return Object(Ct.jsx)(qm, {
                    isOpen: m,
                    onDismiss: b,
                    attemptingTxn: j,
                    hash: g,
                    content: I,
                    pendingText: k,
                    currencyToAdd: null === s || void 0 === s ? void 0 : s.outputAmount.currency
                })
            }
            var aj, oj, cj, sj, lj, uj, dj, pj, bj = Dt.default.span.withConfig({
                    componentId: "n1ep3r-0"
                })(["padding:0.25rem 0.5rem;border-radius:14px;background:", ";color:", ";font-size:1rem;font-weight:400;padding:0.35rem 0.6rem;border-radius:16px;background:", ";border-top-right-radius:", ";border-bottom-right-radius:", ";color:", ";font-size:1rem;font-weight:", ";width:120px;img{opacity:", ";}:hover{user-select:", ";background:", ";color:", ";}"], (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.primary1 : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? "theme.primary1" : t.bg0 : "none"
                }), (function (e) {
                    e.theme;
                    var t = e.isActive;
                    e.isOnSwitch;
                    return t && "0"
                }), (function (e) {
                    e.theme;
                    var t = e.isActive;
                    e.isOnSwitch;
                    return t && "0"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                }), (function (e) {
                    return e.isOnSwitch ? "500" : "400"
                }), (function (e) {
                    e.theme;
                    var t = e.isActive,
                        n = e.isOnSwitch;
                    return t && n ? 1 : .4
                }), (function (e) {
                    return e.isOnSwitch ? "none" : "initial"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.primary1 : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                })),
                fj = Dt.default.span.withConfig({
                    componentId: "n1ep3r-1"
                })(["padding:0.25rem 0.5rem;border-radius:14px;background:", ";color:", ";font-size:1rem;font-weight:400;padding:0.35rem 0.6rem;border-radius:16px;background:", ";border-top-left-radius:", ";border-bottom-left-radius:", ";color:", ";font-size:1rem;font-weight:", ";width:120px;img{opacity:", ";}:hover{user-select:", ";background:", ";color:", ";}"], (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.primary1 : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? "theme.primary1" : t.bg0 : "none"
                }), (function (e) {
                    e.theme;
                    var t = e.isActive;
                    e.isOnSwitch;
                    return t && "0"
                }), (function (e) {
                    e.theme;
                    var t = e.isActive;
                    e.isOnSwitch;
                    return t && "0"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                }), (function (e) {
                    return e.isOnSwitch ? "500" : "400"
                }), (function (e) {
                    e.theme;
                    var t = e.isActive,
                        n = e.isOnSwitch;
                    return t && n ? 1 : .4
                }), (function (e) {
                    return e.isOnSwitch ? "none" : "initial"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.primary1 : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                })),
                hj = Dt.default.span.withConfig({
                    componentId: "n1ep3r-2"
                })(["padding:0.25rem 0.5rem;border-radius:14px;background:", ";color:", ";font-size:1rem;font-weight:400;padding:0.35rem 0.6rem;border-radius:16px;background:", ";color:", ";font-size:1rem;font-weight:", ";:hover{user-select:", ";color:", ";}"], (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.primary1 : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? "#3D6FEC" : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n && r ? t.white : t.text2
                }), (function (e) {
                    return e.isOnSwitch ? "500" : "400"
                }), (function (e) {
                    return e.isOnSwitch ? "none" : "initial"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                })),
                mj = Dt.default.span.withConfig({
                    componentId: "n1ep3r-3"
                })(["padding:0.25rem 0.5rem;border-radius:14px;background:", ";color:", ";font-size:1rem;font-weight:400;padding:0.35rem 0.6rem;border-radius:16px;background:", ";color:'#fff';font-size:1rem;font-weight:", ";:hover{user-select:", ";color:", ";}"], (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.primary1 : t.bg0 : "none"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? "#3D6FEC" : t.bg0 : "none"
                }), (function (e) {
                    return e.isOnSwitch ? "500" : "400"
                }), (function (e) {
                    return e.isOnSwitch ? "none" : "initial"
                }), (function (e) {
                    var t = e.theme,
                        n = e.isActive,
                        r = e.isOnSwitch;
                    return n ? r ? t.white : t.text2 : t.text3
                })),
                jj = Dt.default.button.withConfig({
                    componentId: "n1ep3r-4"
                })(["border-radius:16px;border:none;background:#202231;display:flex;width:fit-content;cursor:pointer;outline:none;padding:0;opactiy:0.5;"]);

            function gj(e) {
                var t = e.id,
                    n = e.isActive,
                    r = e.toggle;
                return Object(Ct.jsxs)(jj, {
                    id: t,
                    isActive: n,
                    onClick: r,
                    children: [Object(Ct.jsx)(hj, {
                        isActive: n,
                        isOnSwitch: !0,
                        children: "On"
                    }), Object(Ct.jsx)(mj, {
                        isActive: !n,
                        isOnSwitch: !1,
                        children: "Off"
                    })]
                })
            }! function (e) {
                e.InvalidInput = "InvalidInput"
            }(dj || (dj = {})),
            function (e) {
                e.InvalidInput = "InvalidInput"
            }(pj || (pj = {}));
            var xj, Oj, vj, yj, wj, Aj, kj, Ij, Cj, Tj = Dt.default.button(aj || (aj = Object(Bt.a)(["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 1rem;\n  width: auto;\n  min-width: 3.5rem;\n  border: 1px solid ", ";\n  outline: none;\n  background: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"])), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    return e.theme.primary1
                })),
                Ej = Object(Dt.default)(Tj)(oj || (oj = Object(Bt.a)(["\n  margin-right: 8px;\n  :hover {\n    border: 1px solid transparent;\n    cursor: pointer;\n  }\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n"])), (function (e) {
                    var t = e.active;
                    e.theme;
                    return t ? "#3D6FEC" : "#202231"
                }), (function (e) {
                    e.active;
                    var t = e.theme;
                    return t.white
                }), (function (e) {
                    var t = e.active;
                    e.theme;
                    return t ? "1px solid #3D6FEC" : "#202231"
                })),
                Nj = Dt.default.input(cj || (cj = Object(Bt.a)(["\n  background: ", ";\n  font-size: 16px;\n  background: #202231;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ", ";\n  text-align: right;\n"])), (function (e) {
                    return e.theme.bg1
                }), (function (e) {
                    var t = e.theme;
                    return "red" === e.color ? t.red1 : t.white
                })),
                Sj = Object(Dt.default)(Tj)(sj || (sj = Object(Bt.a)(["\n  height: 2rem;\n  position: relative;\n  padding: 0 0.75rem;\n  flex: 1;\n  border: 1px solid transparent;\n  border: ", ";\n  :hover {\n    border: 1px solid transparent;\n    border: ", ";\n  }\n  background: #202231;\n  border-radius: 6px;\n  color: #fff;\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n"])), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n ? "1px solid ".concat(r ? t.red1 : t.primary1) : r && "1px solid ".concat(t.red1)
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? Object(Xt.a)(.1, t.red1) : Object(Xt.a)(.1, t.primary1))
                })),
                Mj = Dt.default.span(lj || (lj = Object(Bt.a)(["\n  color: #f3841e;\n  ", "\n"])), (function (e) {
                    return e.theme.mediaWidth.upToSmall(uj || (uj = Object(Bt.a)(["\n    display: none;  \n  "])))
                }));

            function Uj(e) {
                var t = e.placeholderSlippage,
                    n = (Object(i.useContext)(Dt.ThemeContext), Object(Nt.b)().t),
                    r = Ui(),
                    a = function () {
                        var e = Object(d.c)();
                        return Object(i.useCallback)((function (t) {
                            var n;
                            try {
                                n = "auto" === t ? "auto" : g.a.toNumber(t.multiply(1e4).quotient)
                            } catch (r) {
                                n = "auto"
                            }
                            e(mi({
                                userSlippageTolerance: n
                            }))
                        }), [e])
                    }(),
                    o = function () {
                        var e = Object(d.c)();
                        return [Object(d.d)((function (e) {
                            return e.user.userDeadline
                        })), Object(i.useCallback)((function (t) {
                            e(ji({
                                userDeadline: t
                            }))
                        }), [e])]
                    }(),
                    c = Object(P.a)(o, 2),
                    s = c[0],
                    l = c[1],
                    p = Object(i.useState)(""),
                    b = Object(P.a)(p, 2),
                    f = b[0],
                    h = b[1],
                    j = Object(i.useState)(!1),
                    x = Object(P.a)(j, 2),
                    O = x[0],
                    v = x[1],
                    y = Object(i.useState)(""),
                    w = Object(P.a)(y, 2),
                    A = w[0],
                    k = w[1],
                    I = Object(i.useState)(!1),
                    C = Object(P.a)(I, 2),
                    T = C[0],
                    E = C[1];

                function N(e) {
                    if (h(e), v(!1), u.a.event({
                            category: "Settings",
                            action: "Settings Changed: Auto slippage tolerance",
                            label: "Auto"
                        }), 0 === e.length) a("auto");
                    else {
                        var t = Math.floor(100 * Number.parseFloat(e));
                        !Number.isInteger(t) || t < 0 || t > 5e3 ? (a("auto"), "." !== e && v(dj.InvalidInput)) : a(new m.f(t, 1e4))
                    }
                }
                var S = "auto" !== r && r.lessThan(new m.f(5, 1e4)),
                    M = "auto" !== r && r.greaterThan(new m.f(1, 100));
                return Object(Ct.jsxs)(an, {
                    gap: "md",
                    children: [Object(Ct.jsxs)(an, {
                        gap: "sm",
                        children: [Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Ja, {
                                fontWeight: 600,
                                fontSize: 14,
                                color: "#fff",
                                children: n("slippage_tolerance")
                            }), Object(Ct.jsx)(yf, {
                                text: n("slippage_tolerance_tooltip")
                            })]
                        }), Object(Ct.jsxs)(gn, {
                            children: [Object(Ct.jsx)(Ej, {
                                onClick: function () {
                                    N("")
                                },
                                active: "auto" === r,
                                children: n("auto")
                            }), Object(Ct.jsx)(Sj, {
                                active: "auto" !== r,
                                warning: !!O,
                                tabIndex: -1,
                                children: Object(Ct.jsxs)(gn, {
                                    children: [S || M ? Object(Ct.jsx)(Mj, {
                                        children: Object(Ct.jsx)("span", {
                                            role: "img",
                                            "aria-label": "warning",
                                            children: "\u26a0\ufe0f"
                                        })
                                    }) : null, Object(Ct.jsx)(Nj, {
                                        placeholder: t.toFixed(2),
                                        value: f.length > 0 ? f : "auto" === r ? "" : r.toFixed(2),
                                        onChange: function (e) {
                                            return N(e.target.value)
                                        },
                                        onBlur: function () {
                                            u.a.event({
                                                category: "Settings",
                                                action: "Settings Changed: Slippage tolerance",
                                                label: f
                                            }), h(""), v(!1)
                                        },
                                        color: O ? "red" : ""
                                    }), "%"]
                                })
                            })]
                        }), O || S || M ? Object(Ct.jsx)(gn, {
                            style: {
                                fontSize: "14px",
                                paddingTop: "7px",
                                color: O ? "red" : "#F3841E"
                            },
                            children: O ? "Enter a valid slippage percentage" : S ? "Your transaction may fail" : "Your transaction may be frontrun"
                        }) : null]
                    }), Object(Ct.jsxs)(an, {
                        gap: "sm",
                        children: [Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Ja, {
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#fff",
                                children: n("transaction_deadline")
                            }), Object(Ct.jsx)(yf, {
                                text: n("transaction_deadline_tooltip")
                            })]
                        }), Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Sj, {
                                style: {
                                    width: "80px"
                                },
                                warning: !!T,
                                tabIndex: -1,
                                children: Object(Ct.jsx)(Nj, {
                                    placeholder: 30..toString(),
                                    value: A.length > 0 ? A : s === bt ? "" : (s / 60).toString(),
                                    onChange: function (e) {
                                        return function (e) {
                                            if (k(e), E(!1), 0 === e.length) l(bt);
                                            else try {
                                                var t = Math.floor(60 * Number.parseFloat(e));
                                                !Number.isInteger(t) || t < 60 || t > 10800 ? E(pj.InvalidInput) : l(t)
                                            } catch (n) {
                                                console.error(n), E(pj.InvalidInput)
                                            }
                                        }(e.target.value)
                                    },
                                    onBlur: function () {
                                        u.a.event({
                                            category: "Settings",
                                            action: "Settings Changed: Transaction deadline",
                                            label: A
                                        }), k(""), E(!1)
                                    },
                                    color: T ? "red" : ""
                                })
                            }), Object(Ct.jsx)(Qa, {
                                style: {
                                    paddingLeft: "8px",
                                    color: "#fff"
                                },
                                fontSize: 14,
                                children: n("minutes")
                            })]
                        })]
                    })]
                })
            }
            var Rj = Object(Dt.default)(ph.a)(xj || (xj = Object(Bt.a)(["\n  height: 20px;\n  width: 20px;\n\n  > * {\n    // stroke: ", ";\n    stroke: #fff;\n  }\n\n  :hover {\n    opacity: 0.7;\n  }\n"])), (function (e) {
                    return e.theme.text2
                })),
                Bj = Object(Dt.default)(ua.a)(Oj || (Oj = Object(Bt.a)(["\n  height: 20px;\n  width: 20px;\n  :hover {\n    cursor: pointer;\n  }\n\n  > * {\n    stroke: ", ";\n  }\n"])), (function (e) {
                    return e.theme.text1
                })),
                Dj = Dt.default.button(vj || (vj = Object(Bt.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  border-radius: 0.5rem;\n  height: 20px;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n  }\n"]))),
                Pj = Dt.default.div(yj || (yj = Object(Bt.a)(["\n  position: absolute;\n  bottom: -6px;\n  right: 0px;\n  font-size: 14px;\n"]))),
                Lj = Dt.default.div(wj || (wj = Object(Bt.a)(["\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n"]))),
                Fj = Dt.default.span(Aj || (Aj = Object(Bt.a)(["\n  min-width: 20.125rem;\n  // background-color: ", ";\n  background: #161521;\n  // border: 1px solid ", ";\n  border: 1px solid #272939;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 2rem;\n  right: 0rem;\n  z-index: 100;\n\n  ", ";\n\n  user-select: none;\n"])), (function (e) {
                    return e.theme.bg2
                }), (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(kj || (kj = Object(Bt.a)(["\n    min-width: 18.125rem;\n  "])))
                })),
                zj = Dt.default.div(Ij || (Ij = Object(Bt.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), (function (e) {
                    return e.theme.bg3
                })),
                Wj = Dt.default.div(Cj || (Cj = Object(Bt.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  background-color: ", ";\n  border-radius: 20px;\n"])), (function (e) {
                    return e.theme.bg2
                }));

            function Vj(e) {
                var t = e.placeholderSlippage,
                    n = Object(i.useRef)(),
                    r = fr(cr.SETTINGS),
                    a = hr(cr.SETTINGS),
                    o = (Object(i.useContext)(Dt.ThemeContext), Object(Nt.b)().t),
                    c = Si(),
                    s = Object(P.a)(c, 2),
                    l = s[0],
                    d = s[1],
                    p = Mi(),
                    b = Object(P.a)(p, 2),
                    f = b[0],
                    h = b[1],
                    m = Object(i.useState)(!1),
                    j = Object(P.a)(m, 2),
                    g = j[0],
                    x = j[1];
                nh(n, r ? a : void 0);
                return Object(Ct.jsxs)(Lj, {
                    ref: n,
                    children: [Object(Ct.jsx)(tn, {
                        isOpen: g,
                        onDismiss: function () {
                            return x(!1)
                        },
                        maxHeight: 100,
                        children: Object(Ct.jsx)(Wj, {
                            children: Object(Ct.jsxs)(an, {
                                gap: "lg",
                                children: [Object(Ct.jsxs)(gn, {
                                    style: {
                                        padding: "0 2rem"
                                    },
                                    children: [Object(Ct.jsx)("div", {}), Object(Ct.jsx)(yn.b, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        children: o("are_you_sure")
                                    }), Object(Ct.jsx)(Bj, {
                                        onClick: function () {
                                            return x(!1)
                                        }
                                    })]
                                }), Object(Ct.jsx)(zj, {}), Object(Ct.jsxs)(an, {
                                    gap: "lg",
                                    style: {
                                        padding: "0 2rem"
                                    },
                                    children: [Object(Ct.jsx)(yn.b, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        children: o("are_you_sure_text")
                                    }), Object(Ct.jsx)(yn.b, {
                                        fontWeight: 600,
                                        fontSize: 20,
                                        children: o("are_you_sure_text_alert")
                                    }), Object(Ct.jsx)(go, {
                                        error: !0,
                                        padding: "12px",
                                        onClick: function () {
                                            "confirm" === window.prompt(o("turn_on_expert_mode_confirme")) && (d(), x(!1))
                                        },
                                        children: Object(Ct.jsx)(yn.b, {
                                            fontSize: 20,
                                            fontWeight: 500,
                                            id: "confirm-expert-mode",
                                            children: o("turn_on_expert_mode")
                                        })
                                    })]
                                })]
                            })
                        })
                    }), Object(Ct.jsxs)(Dj, {
                        onClick: function () {
                            u.a.event({
                                category: "Settings",
                                action: "Settings Modal Opened",
                                label: "Settings"
                            }), a()
                        },
                        id: "open-settings-dialog-button",
                        children: [Object(Ct.jsx)(Rj, {}), l ? Object(Ct.jsx)(Pj, {
                            children: Object(Ct.jsx)("span", {
                                style: {
                                    color: "white"
                                },
                                role: "img",
                                "aria-label": "wizard-icon",
                                children: "\ud83e\uddd9"
                            })
                        }) : null]
                    }), r && Object(Ct.jsx)(Fj, {
                        children: Object(Ct.jsxs)(an, {
                            gap: "md",
                            style: {
                                padding: "1rem"
                            },
                            children: [Object(Ct.jsx)(yn.b, {
                                fontWeight: 600,
                                fontSize: 14,
                                color: "#fff",
                                children: o("transaction_settings")
                            }), Object(Ct.jsx)(Uj, {
                                placeholderSlippage: t
                            }), Object(Ct.jsx)(yn.b, {
                                fontWeight: 600,
                                fontSize: 14,
                                color: "#fff",
                                children: o("interface_settings")
                            }), Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsxs)(On, {
                                    children: [Object(Ct.jsx)(Ja, {
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: "#fff",
                                        children: o("toggle_expert_mode")
                                    }), Object(Ct.jsx)(yf, {
                                        text: o("toggle_expert_mode_tooltip")
                                    })]
                                }), Object(Ct.jsx)(gj, {
                                    id: "toggle-expert-mode-button",
                                    isActive: l,
                                    toggle: l ? function () {
                                        d(), x(!1)
                                    } : function () {
                                        a(), x(!0)
                                    }
                                })]
                            }), Object(Ct.jsxs)(gn, {
                                children: [Object(Ct.jsxs)(On, {
                                    children: [Object(Ct.jsx)(Ja, {
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: "#fff",
                                        children: o("disable_multihops")
                                    }), Object(Ct.jsx)(yf, {
                                        text: o("disable_multihops_tooltip")
                                    })]
                                }), Object(Ct.jsx)(gj, {
                                    id: "toggle-disable-multihop-button",
                                    isActive: f,
                                    toggle: function () {
                                        u.a.event({
                                            category: "Routing",
                                            action: f ? "disable single hop" : "enable single hop"
                                        }), h(!f)
                                    }
                                })]
                            })]
                        })
                    })]
                })
            }
            var Yj = Dt.default.div.withConfig({
                componentId: "qb64u2-0"
            })(["padding:1rem 1.25rem 0.5rem 1.25rem;width:100%;color:", ";"], (function (e) {
                return e.theme.text2
            }));

            function Gj(e) {
                var t = e.allowedSlippage;
                return Object(Ct.jsx)(Yj, {
                    children: Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Ja, {
                                fontWeight: 500,
                                fontSize: 16,
                                style: {
                                    marginRight: "8px"
                                }
                            })
                        }), Object(Ct.jsx)(On, {
                            children: Object(Ct.jsx)(Vj, {
                                placeholderSlippage: t
                            })
                        })]
                    })
                })
            }

            function Jj(e) {
                var t = e.isOpen,
                    n = e.tokens,
                    r = e.onConfirm,
                    i = e.onDismiss;
                return Object(Ct.jsx)(tn, {
                    isOpen: t,
                    onDismiss: i,
                    maxHeight: 100,
                    children: Object(Ct.jsx)(dh, {
                        tokens: n,
                        handleCurrencySelect: r
                    })
                })
            }
            var qj, Qj, Hj, Xj, Kj, Zj, _j = n(212);

            function $j(e, t) {
                var n, r = It().account,
                    a = (null === e || void 0 === e || null === (n = e.currency) || void 0 === n ? void 0 : n.isToken) ? e.currency : void 0,
                    o = function (e, t, n) {
                        var r = Dr($r(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(i.useMemo)((function () {
                            return [t, n]
                        }), [t, n])).result;
                        return Object(i.useMemo)((function () {
                            return e && r ? m.b.fromRawAmount(e, r.toString()) : void 0
                        }), [e, r])
                    }(a, null !== r && void 0 !== r ? r : void 0, t),
                    c = function (e, t) {
                        var n = Ao();
                        return Object(i.useMemo)((function () {
                            return "string" === typeof e && "string" === typeof t && Object.keys(n).some((function (r) {
                                var i = n[r];
                                if (!i) return !1;
                                if (i.receipt) return !1;
                                var a = i.approval;
                                return !!a && a.spender === t && a.tokenAddress === e && ko(i)
                            }))
                        }), [n, t, e])
                    }(null === a || void 0 === a ? void 0 : a.address, t),
                    s = Object(i.useMemo)((function () {
                        return e && t ? e.currency.isEther ? qj.APPROVED : o ? o.lessThan(e) ? c ? qj.PENDING : qj.NOT_APPROVED : qj.APPROVED : qj.UNKNOWN : qj.UNKNOWN
                    }), [e, o, c, t]),
                    l = $r(null === a || void 0 === a ? void 0 : a.address),
                    u = wo(),
                    d = Object(i.useCallback)(Object(I.a)(k.a.mark((function n() {
                        var r, i;
                        return k.a.wrap((function (n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (s === qj.NOT_APPROVED) {
                                        n.next = 3;
                                        break
                                    }
                                    return console.error("approve was called unnecessarily"), n.abrupt("return");
                                case 3:
                                    if (a) {
                                        n.next = 6;
                                        break
                                    }
                                    return console.error("no token"), n.abrupt("return");
                                case 6:
                                    if (l) {
                                        n.next = 9;
                                        break
                                    }
                                    return console.error("tokenContract is null"), n.abrupt("return");
                                case 9:
                                    if (e) {
                                        n.next = 12;
                                        break
                                    }
                                    return console.error("missing amount to approve"), n.abrupt("return");
                                case 12:
                                    if (t) {
                                        n.next = 15;
                                        break
                                    }
                                    return console.error("no spender"), n.abrupt("return");
                                case 15:
                                    return r = !1, n.next = 18, l.estimateGas.approve(t, _j.a).catch((function () {
                                        return r = !0, l.estimateGas.approve(t, e.quotient.toString())
                                    }));
                                case 18:
                                    return i = n.sent, n.abrupt("return", l.approve(t, r ? e.quotient.toString() : _j.a, {
                                        gasLimit: Pn(i)
                                    }).then((function (n) {
                                        u(n, {
                                            summary: "Approve " + e.currency.symbol,
                                            approval: {
                                                tokenAddress: a.address,
                                                spender: t
                                            }
                                        })
                                    })).catch((function (e) {
                                        throw console.debug("Failed to approve token", e), e
                                    })));
                                case 20:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))), [s, a, l, e, t, u]);
                return [s, d]
            }

            function eg() {
                var e, t, n = It().account,
                    r = Dr(_r(It().chainId === m.a.MAINNET ? "0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8" : void 0, zr, !1), "isArgentWallet", [null !== n && void 0 !== n ? n : void 0], Nr);
                return null !== (e = null === r || void 0 === r || null === (t = r.result) || void 0 === t ? void 0 : t[0]) && void 0 !== e && e
            }! function (e) {
                e.UNKNOWN = "UNKNOWN", e.NOT_APPROVED = "NOT_APPROVED", e.PENDING = "PENDING", e.APPROVED = "APPROVED"
            }(qj || (qj = {})),
            function (e) {
                e[e.AMOUNT = 1] = "AMOUNT", e[e.ALLOWED = 2] = "ALLOWED"
            }(Zj || (Zj = {}));
            var tg, ng = (Kj = {}, Object(h.a)(Kj, m.a.MAINNET, (Qj = {}, Object(h.a)(Qj, Ge.address, {
                type: Zj.AMOUNT,
                name: "USD Coin",
                version: "2"
            }), Object(h.a)(Qj, Ye.address, {
                type: Zj.ALLOWED,
                name: "Dai Stablecoin",
                version: "1"
            }), Object(h.a)(Qj, it[m.a.MAINNET].address, {
                type: Zj.AMOUNT,
                name: "Uniswap"
            }), Qj)), Object(h.a)(Kj, m.a.RINKEBY, (Hj = {}, Object(h.a)(Hj, "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735", {
                type: Zj.ALLOWED,
                name: "Dai Stablecoin",
                version: "1"
            }), Object(h.a)(Hj, it[m.a.RINKEBY].address, {
                type: Zj.AMOUNT,
                name: "Uniswap"
            }), Hj)), Object(h.a)(Kj, m.a.ROPSTEN, (Xj = {}, Object(h.a)(Xj, it[m.a.ROPSTEN].address, {
                type: Zj.AMOUNT,
                name: "Uniswap"
            }), Object(h.a)(Xj, "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", {
                type: Zj.AMOUNT,
                name: "USD Coin",
                version: "2"
            }), Xj)), Object(h.a)(Kj, m.a.G\u00d6RLI, Object(h.a)({}, it[m.a.G\u00d6RLI].address, {
                type: Zj.AMOUNT,
                name: "Uniswap"
            })), Object(h.a)(Kj, m.a.KOVAN, Object(h.a)({}, it[m.a.KOVAN].address, {
                type: Zj.AMOUNT,
                name: "Uniswap"
            })), Kj);
            ! function (e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.LOADING = 1] = "LOADING", e[e.NOT_SIGNED = 2] = "NOT_SIGNED", e[e.SIGNED = 3] = "SIGNED"
            }(tg || (tg = {}));
            var rg = [{
                    name: "name",
                    type: "string"
                }, {
                    name: "version",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }],
                ig = [{
                    name: "name",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }],
                ag = [{
                    name: "owner",
                    type: "address"
                }, {
                    name: "spender",
                    type: "address"
                }, {
                    name: "value",
                    type: "uint256"
                }, {
                    name: "nonce",
                    type: "uint256"
                }, {
                    name: "deadline",
                    type: "uint256"
                }],
                og = [{
                    name: "holder",
                    type: "address"
                }, {
                    name: "spender",
                    type: "address"
                }, {
                    name: "nonce",
                    type: "uint256"
                }, {
                    name: "expiry",
                    type: "uint256"
                }, {
                    name: "allowed",
                    type: "bool"
                }];

            function cg(e, t, n) {
                var r, a = It(),
                    o = a.account,
                    c = a.chainId,
                    s = a.library,
                    l = Ic(),
                    u = (null === e || void 0 === e || null === (r = e.currency) || void 0 === r ? void 0 : r.isToken) ? e.currency.address : void 0,
                    d = function (e) {
                        return _r(e, Hr, !1)
                    }(u),
                    p = eg(),
                    b = Object(i.useMemo)((function () {
                        return [null !== o && void 0 !== o ? o : void 0]
                    }), [o]),
                    h = Dr(d, "nonces", b),
                    m = null !== n && void 0 !== n ? n : c && u ? ng[c][u] : void 0,
                    j = Object(i.useState)(null),
                    x = Object(P.a)(j, 2),
                    O = x[0],
                    v = x[1];
                return Object(i.useMemo)((function () {
                    var n, r;
                    if (p || !e || !d || !o || !c || !l || !s || !h.valid || !u || !t || !m) return {
                        state: tg.NOT_APPLICABLE,
                        signatureData: null,
                        gatherPermitSignature: null
                    };
                    var i = null === (n = h.result) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.toNumber();
                    if (h.loading || "number" !== typeof i) return {
                        state: tg.LOADING,
                        signatureData: null,
                        gatherPermitSignature: null
                    };
                    var a = O && O.owner === o && O.deadline >= l.toNumber() && O.tokenAddress === u && O.nonce === i && O.spender === t && ("allowed" in O || g.a.equal(g.a.BigInt(O.amount), e.quotient));
                    return {
                        state: a ? tg.SIGNED : tg.NOT_SIGNED,
                        signatureData: a ? O : null,
                        gatherPermitSignature: function () {
                            var n = Object(I.a)(k.a.mark((function n() {
                                var r, a, d, p, b, h;
                                return k.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return r = m.type === Zj.ALLOWED, a = l.toNumber() + 1200, d = e.quotient.toString(), p = r ? {
                                                holder: o,
                                                spender: t,
                                                allowed: r,
                                                nonce: i,
                                                expiry: a
                                            } : {
                                                owner: o,
                                                spender: t,
                                                value: d,
                                                nonce: i,
                                                deadline: a
                                            }, b = m.version ? {
                                                name: m.name,
                                                version: m.version,
                                                verifyingContract: u,
                                                chainId: c
                                            } : {
                                                name: m.name,
                                                verifyingContract: u,
                                                chainId: c
                                            }, h = JSON.stringify({
                                                types: {
                                                    EIP712Domain: m.version ? rg : ig,
                                                    Permit: r ? og : ag
                                                },
                                                domain: b,
                                                primaryType: "Permit",
                                                message: p
                                            }), n.abrupt("return", s.send("eth_signTypedData_v4", [o, h]).then(Cn.splitSignature).then((function (e) {
                                                v(Object(f.a)(Object(f.a)({
                                                    v: e.v,
                                                    r: e.r,
                                                    s: e.s,
                                                    deadline: a
                                                }, r ? {
                                                    allowed: r
                                                } : {
                                                    amount: d
                                                }), {}, {
                                                    nonce: i,
                                                    chainId: c,
                                                    owner: o,
                                                    spender: t,
                                                    tokenAddress: u,
                                                    permitType: m.type
                                                }))
                                            })));
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function () {
                                return n.apply(this, arguments)
                            }
                        }()
                    }
                }), [e, d, o, c, p, l, s, h.loading, h.valid, h.result, u, t, m, O])
            }
            var sg;
            Zj.AMOUNT;

            function lg(e, t) {
                var n = It().chainId,
                    r = Zr[n];
                return cg(Object(i.useMemo)((function () {
                    return e ? e.maximumAmountIn(t) : void 0
                }), [e, t]), e instanceof wn.c ? void 0 : e instanceof Xr.b ? r : void 0, null)
            }! function (e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
            }(sg || (sg = {}));
            var ug, dg = {
                wrapType: sg.NOT_APPLICABLE
            };

            function pg(e, t, n) {
                var r = It(),
                    a = r.chainId,
                    o = r.account,
                    c = function (e) {
                        var t = It().chainId;
                        return _r(t && t in m.j ? m.j[t].address : void 0, Qr, e)
                    }(),
                    s = cs(null !== o && void 0 !== o ? o : void 0, e),
                    l = Object(i.useMemo)((function () {
                        return Xc(n, e)
                    }), [e, n]),
                    u = wo();
                return Object(i.useMemo)((function () {
                    if (!c || !a || !e || !t) return dg;
                    var n = Boolean(null === l || void 0 === l ? void 0 : l.greaterThan("0")),
                        r = l && s && !s.lessThan(l);
                    return e.isEther && Object(m.l)(m.j[a], t) ? {
                        wrapType: sg.WRAP,
                        execute: r && l ? Object(I.a)(k.a.mark((function e() {
                            var t;
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.deposit({
                                            value: "0x".concat(l.quotient.toString(16))
                                        });
                                    case 3:
                                        t = e.sent, u(t, {
                                            summary: "Wrap ".concat(l.toSignificant(6), " ETH to WETH")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: r ? void 0 : n ? "Insufficient ETH balance" : "Enter ETH amount"
                    } : Object(m.l)(m.j[a], e) && t.isEther ? {
                        wrapType: sg.UNWRAP,
                        execute: r && l ? Object(I.a)(k.a.mark((function e() {
                            var t;
                            return k.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.withdraw("0x".concat(l.quotient.toString(16)));
                                    case 3:
                                        t = e.sent, u(t, {
                                            summary: "Unwrap ".concat(l.toSignificant(6), " WETH to ETH")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: r ? void 0 : n ? "Insufficient WETH balance" : "Enter WETH amount"
                    } : dg
                }), [c, a, e, t, l, s, u])
            }
            var bg = Dt.default.div.withConfig({
                componentId: "sc-83q4k8-0"
            })(["position:relative;margin-top:", ";max-width:480px;width:100%;background:#202230;box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:24px;margin-top:9px;padding-bottom:0 !important;", ";"], (function (e) {
                var t = e.margin;
                return null !== t && void 0 !== t ? t : "0px"
            }), (function (e) {
                return e.theme.mediaWidth.upToSmall(ug || (ug = Object(Bt.a)(["\n    width: 90%;\n  "])))
            }));

            function fg(e) {
                var t = e.children,
                    n = Object(qt.a)(e, ["children"]);
                return Object(Ct.jsx)(bg, Object(f.a)(Object(f.a)({}, n), {}, {
                    children: t
                }))
            }
            var hg, mg, jg, gg, xg, Og, vg, yg, wg, Ag = "data:image/png;base64,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",
                kg = "data:image/png;base64,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",
                Ig = Dt.default.div(hg || (hg = Object(Bt.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ", ";\n    width: ", ";\n    margin-right: ", ";\n  }\n"])), (function (e) {
                    return e.theme.flexColumnNoWrap
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function (e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function (e) {
                    var t = e.marginRight;
                    return t ? t + "px" : "0px"
                }));

            function Cg(e) {
                return Object(Ct.jsx)(Ig, {
                    size: e.size,
                    marginRight: e.marginRight,
                    children: Object(Ct.jsx)("img", {
                        src: e.src,
                        alt: ""
                    })
                })
            }

            function Tg(e) {
                var t = e.id,
                    n = It().chainId,
                    r = Bi(),
                    a = Object(P.a)(r, 2),
                    o = a[0],
                    c = a[1],
                    s = !n || "Uniswap" === o,
                    l = Object(i.useCallback)((function () {
                        u.a.event({
                            category: "Mode",
                            action: "Change Mode",
                            label: s ? "Sushiswap" : "Uniswap"
                        }), n && c(s ? "Sushiswap" : "Uniswap")
                    }), [n, s, c]);
                return Object(Ct.jsxs)(jj, {
                    id: t,
                    isActive: s,
                    children: [s ? Object(Ct.jsxs)(bj, {
                        isActive: s,
                        isOnSwitch: !0,
                        children: [Object(Ct.jsx)(Cg, {
                            src: Ag
                        }), " Uniswap v2"]
                    }) : Object(Ct.jsxs)(bj, {
                        onClick: l,
                        isActive: s,
                        isOnSwitch: !0,
                        children: [Object(Ct.jsx)(Cg, {
                            src: Ag
                        }), " Uniswap v2"]
                    }), s ? Object(Ct.jsxs)(fj, {
                        onClick: l,
                        isActive: !s,
                        isOnSwitch: !0,
                        children: [Object(Ct.jsx)(Cg, {
                            src: kg
                        }), " Sushiswap"]
                    }) : Object(Ct.jsxs)(fj, {
                        isActive: !s,
                        isOnSwitch: !0,
                        children: [Object(Ct.jsx)(Cg, {
                            src: kg
                        }), " Sushiswap"]
                    })]
                })
            }! function (e) {
                e.InvalidInput = "InvalidInput"
            }(wg || (wg = {}));
            var Eg, Ng = Dt.default.button(mg || (mg = Object(Bt.a)(["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 1rem;\n  width: 100px;\n  border: 1px solid ", ";\n  outline: none;\n  background: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"])), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    return e.theme.primary1
                })),
                Sg = Dt.default.button(jg || (jg = Object(Bt.a)(["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 1rem;\n  // border: 1px solid ", ";\n  border: 1px solid transparent;\n  outline: none;\n  background: ", ";\n  :hover {\n    // border: 1px solid ", ";\n    border: 1px solid #202231;\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"])), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg3
                }), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.bg4
                }), (function (e) {
                    return e.theme.primary1
                })),
                Mg = Dt.default.input(gg || (gg = Object(Bt.a)(["\n  background: ", ";\n  font-size: 16px;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ", ";\n  text-align: right;\n"])), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    var t = e.theme;
                    return "red" === e.color ? t.red1 : t.text2
                })),
                Ug = Object(Dt.default)(Ng)(xg || (xg = Object(Bt.a)(["\n  height: 32px;\n  position: relative;\n  padding: 0 0.5rem;\n  width: 130px;\n  color: #fff;\n  border-radius: 6px;\n  // border: ", ";\n  border: 1px solid #202321;\n  border: ", ";\n  :hover {\n    border: 1px solid #202321;\n    border: ", ";\n  }\n\n  input {\n    width: 60px;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n    color: #fff;\n  }\n  @media(min-width: 320px) and (max-width: 960px) {\n    width: 120px;\n    height: 2rem;\n    input {\n      width: 40px;\n    }\n  } \n"])), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? t.red1 : "theme.primary1")
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? t.red1 : "#3D6FEC")
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? Object(Xt.a)(.1, t.red1) : Object(Xt.a)(.1, t.primary1))
                })),
                Rg = Dt.default.button(Og || (Og = Object(Bt.a)(["\n  height: 32px;\n  // color: ", ";\n  color: #fff;\n  background: ", ";\n  position: relative;\n  padding: 0 0.5rem;\n  width: 130px;\n  border-radius: 6px;\n  // border: 1px solid ", ";\n  border: 1px solid #202231;\n  input {\n    width: 75px;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n    color: #fff;\n  }\n  @media(min-width: 320px) and (max-width: 960px) {\n    width: 100px;\n    height: 2rem;\n    input {\n      width: 50px;\n    }\n  } \n"])), (function (e) {
                    return e.theme.text1
                }), (function (e) {
                    return e.theme.bg0
                }), (function (e) {
                    return e.theme.bg3
                })),
                Bg = Object(Dt.default)(Ng)(vg || (vg = Object(Bt.a)(["\n  height: 32px;\n  position: relative;\n  padding: 0 0.5rem;\n  width: 130px;\n  border-radius: 6px;\n  border: 1px solid #202321;\n  // border: ", ";\n  border: ", ";\n  :hover {\n    border: 1px solid #202321;\n    border: ", ";\n  }\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n    color: #fff;\n  }\n  @media(min-width: 320px) and (max-width: 960px) {\n    width: 120px;\n    height: 2rem;\n    input {\n      width: 100%;\n    }\n  } \n"])), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? t.red1 : t.primary1)
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? t.red1 : "#3D6FEC")
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? Object(Xt.a)(.1, t.red1) : Object(Xt.a)(.1, t.primary1))
                })),
                Dg = Object(Dt.default)(Sg)(yg || (yg = Object(Bt.a)(["\n  // border: ", ";\n  border: ", ";\n  color: #fff;\n  background-color: #202230;\n  background-color: ", ";\n  };\n  width: 64px;\n  height: 32px;\n  margin-right: 10px;\n  :hover {\n    border: ", ";\n    };\n  }\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n    color: #fff;\n  }\n  @media(min-width: 320px) and (max-width: 960px) {\n    width: auto;\n    height: 2rem;\n  } \n"])), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? t.red1 : t.primary1)
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? t.red1 : "transparent")
                }), (function (e) {
                    e.theme;
                    var t = e.active;
                    e.warning;
                    return t && "#3D6FEC !important"
                }), (function (e) {
                    var t = e.theme,
                        n = e.active,
                        r = e.warning;
                    return n && "1px solid ".concat(r ? Object(Xt.a)(.1, t.red1) : Object(Xt.a)(.1, t.primary1))
                }));

            function Pg(e) {
                var t, n, r = e.tipManualOverride,
                    a = e.setTipManualOverride,
                    o = e.userGasEstimateManualOverride,
                    c = e.setUserGasEstimateManualOverride,
                    s = Object(Nt.b)().t,
                    l = (Object(i.useContext)(Dt.ThemeContext), Di()),
                    d = Object(P.a)(l, 2),
                    p = d[0],
                    b = d[1],
                    f = Fi(),
                    h = Object(P.a)(f, 2),
                    j = h[0],
                    x = h[1],
                    O = Object(i.useState)(""),
                    v = Object(P.a)(O, 2),
                    y = v[0],
                    w = v[1],
                    A = Object(i.useState)(""),
                    k = Object(P.a)(A, 2),
                    I = k[0],
                    C = k[1],
                    T = "" === y || "0" === y || !Number.isNaN(Number.parseInt(y)) || "auto" == y,
                    E = "" === I || "0" === I || !Number.isNaN(Number.parseInt(I)) || "auto" == I;

                function N() {
                    try {
                        if ("0" === y) a(!1);
                        else if (y.length > 0) {
                            var e = function (e, t) {
                                if (e && t) try {
                                    var n = Object(oc.parseUnits)(e, "gwei").toString();
                                    if ("0" !== n) return g.a.BigInt(n)
                                } catch (r) {
                                    console.log('Failed to parse input amount: "'.concat(e, '"'), r)
                                }
                            }(y, m.c);
                            e && b(e.toString())
                        }
                    } catch (t) {}
                }
                return t = T ? void 0 : wg.InvalidInput, n = E ? void 0 : wg.InvalidInput, Object(Ct.jsxs)(rn, {
                    children: [Object(Ct.jsxs)(gn, {
                        children: [Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Ja, {
                                fontSize: 14,
                                fontWeight: 400,
                                color: "#fff",
                                children: s("gas_price")
                            }), Object(Ct.jsx)(yf, {
                                text: s("gas_price_tooltip")
                            })]
                        }), Object(Ct.jsxs)("div", {
                            children: [Object(Ct.jsx)(Dg, {
                                onClick: function () {
                                    a(!r), w("")
                                },
                                active: !r,
                                children: s("auto")
                            }), Object(Ct.jsxs)(Ug, {
                                active: r,
                                warning: !!t,
                                tabIndex: -1,
                                children: [Object(Ct.jsx)(Mg, {
                                    color: t ? "red" : void 0,
                                    onBlur: function () {
                                        N()
                                    },
                                    placeholder: function () {
                                        var e = function (e) {
                                            if (e) try {
                                                if ("0" !== Object(oc.parseEther)(e).toString()) return g.a.BigInt(Number.parseInt(Object(oc.formatUnits)(e, "gwei")))
                                            } catch (t) {
                                                console.log('Failed to parse input amount: "'.concat(e, '"'), t)
                                            }
                                        }(p);
                                        return e ? e.toString() : "0"
                                    }(),
                                    value: y.length > 0 ? y : "",
                                    onChange: function (e) {
                                        return t = e.target.value, w(t), void a(!0);
                                        var t
                                    }
                                }), " ", "GWEI"]
                            })]
                        })]
                    }), Object(Ct.jsxs)(gn, {
                        style: {
                            paddingTop: "10px"
                        },
                        children: [Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Ja, {
                                fontSize: 14,
                                fontWeight: 400,
                                color: "#fff",
                                children: s("gas_limit")
                            }), Object(Ct.jsx)(yf, {
                                text: s("gas_limit_tooltip")
                            })]
                        }), Object(Ct.jsxs)("div", {
                            children: [Object(Ct.jsx)(Dg, {
                                onClick: function () {
                                    c(!o), C("")
                                },
                                active: !o,
                                children: s("auto")
                            }), Object(Ct.jsx)(Bg, {
                                active: o,
                                warning: !!n,
                                tabIndex: -1,
                                children: Object(Ct.jsx)(Mg, {
                                    color: n ? "red" : void 0,
                                    onBlur: function () {
                                        "0" === I ? c(!1) : I.length > 0 && x(I), u.a.event({
                                            category: "Gas",
                                            action: "Gas Price",
                                            label: y
                                        }), u.a.event({
                                            category: "Gas",
                                            action: "Gas Limit",
                                            label: I
                                        })
                                    },
                                    placeholder: j,
                                    value: I.length > 0 ? I : "",
                                    onChange: function (e) {
                                        return t = e.target.value, C(t), void c(!0);
                                        var t
                                    }
                                })
                            })]
                        })]
                    }), Object(Ct.jsxs)(gn, {
                        style: {
                            paddingTop: "10px"
                        },
                        children: [Object(Ct.jsxs)(On, {
                            children: [Object(Ct.jsx)(Ja, {
                                fontSize: 14,
                                fontWeight: 400,
                                color: "#fff",
                                children: s("estimated_cost")
                            }), Object(Ct.jsx)(yf, {
                                text: s("estimated_cost_tooltip")
                            })]
                        }), Object(Ct.jsx)("div", {
                            children: Object(Ct.jsxs)(Rg, {
                                tabIndex: -1,
                                children: [Object(Ct.jsx)(Mg, {
                                    color: t ? "red" : void 0,
                                    placeholder: "0.0",
                                    value: function () {
                                        var e = Object(oc.parseUnits)(p, 0).mul(Math.round(Number.parseInt(j)));
                                        return Number.parseFloat(Object(oc.formatUnits)(e).toString()).toFixed(3)
                                    }(),
                                    disabled: !0
                                }), " ", "ETH"]
                            })
                        })]
                    })]
                })
            }

            function Lg() {
                return (Lg = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Fg(e, t) {
                if (null == e) return {};
                var n, r, i = function (e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function zg(e, t) {
                var n = e.title,
                    r = e.titleId,
                    a = Fg(e, ["title", "titleId"]);
                return i.createElement("svg", Lg({
                    width: 12,
                    height: 7,
                    viewBox: "0 0 12 7",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, a), n ? i.createElement("title", {
                    id: r
                }, n) : null, Eg || (Eg = i.createElement("path", {
                    d: "M11.4673 6L6.23364 1L0.999995 6",
                    stroke: "#388DFF"
                })))
            }
            var Wg, Vg, Yg, Gg, Jg, qg, Qg = i.forwardRef(zg),
                Hg = (n.p, n(1768), Ec.a.utils),
                Xg = (Hg.hexlify, Hg.hexValue);
            var Kg = Object(Dt.default)(mf.a)(Wg || (Wg = Object(Bt.a)(["\n  // color: ", ";\n  color: #fff;\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  marign-top: 2px;\n  :hover {\n    opacity: 0.8;\n  }\n"])), (function (e) {
                    return e.theme.text1
                })),
                Zg = Object(Dt.default)(Qg)(Vg || (Vg = Object(Bt.a)(["\n  margin: 0 0.25rem 0 0.35rem;\n  height: 35%;\n\n  path {\n    stroke: ", ";\n    stroke-width: 1.5px;\n  }\n"])), (function (e) {
                    e.selected, e.theme;
                    return "#fff"
                })),
                _g = Object(Dt.default)(bm)(Yg || (Yg = Object(Bt.a)(["\n  margin: 0 0.25rem 0 0.35rem;\n  height: 35%;\n\n  path {\n    stroke: ", ";\n    stroke-width: 1.5px;\n  }\n"])), (function (e) {
                    e.selected, e.theme;
                    return "#fff"
                }));

            function $g(e) {
                var t, n, r, a, o, c, s, l, p, j, x = e.history,
                    O = function () {
                        var e = It().chainId,
                            t = Object(d.c)(),
                            n = bc(),
                            r = Object(i.useState)(),
                            a = Object(P.a)(r, 2),
                            o = a[0],
                            c = a[1];
                        return Object(i.useEffect)((function () {
                            if (e) {
                                var r = ns(n);
                                t(Yc({
                                    typedValue: r.typedValue,
                                    field: r.independentField,
                                    inputCurrencyId: r[Dc.INPUT].currencyId,
                                    outputCurrencyId: r[Dc.OUTPUT].currencyId,
                                    recipient: r.recipient
                                })), c({
                                    inputCurrencyId: r[Dc.INPUT].currencyId,
                                    outputCurrencyId: r[Dc.OUTPUT].currencyId
                                })
                            }
                        }), [t, e]), o
                    }(),
                    v = Object(Nt.b)().t,
                    y = [di(null === O || void 0 === O ? void 0 : O.inputCurrencyId), di(null === O || void 0 === O ? void 0 : O.outputCurrencyId)],
                    w = y[0],
                    A = y[1],
                    C = Object(i.useState)(!1),
                    T = Object(P.a)(C, 2),
                    E = T[0],
                    N = T[1],
                    M = Object(i.useMemo)((function () {
                        var e, t;
                        return null !== (e = null === (t = [w, A]) || void 0 === t ? void 0 : t.filter((function (e) {
                            var t;
                            return null !== (t = null === e || void 0 === e ? void 0 : e.isToken) && void 0 !== t && t
                        }))) && void 0 !== e ? e : []
                    }), [w, A]),
                    U = Object(i.useCallback)((function () {
                        N(!0)
                    }), []),
                    R = ai(),
                    B = M && M.filter((function (e) {
                        return !Boolean(e.address in R)
                    })),
                    D = It().account,
                    L = Object(i.useContext)(Dt.ThemeContext),
                    F = mr(),
                    z = Si(),
                    W = Object(P.a)(z, 1)[0],
                    V = hc(),
                    Y = Hc(),
                    G = Y.independentField,
                    J = Y.typedValue,
                    q = Y.recipient,
                    Q = Y[Dc.INPUT].currencyId,
                    H = Y[Dc.OUTPUT].currencyId,
                    X = _c(V),
                    K = X.toggledTrade,
                    Z = X.allowedSlippage,
                    _ = X.currencyBalances,
                    $ = X.parsedAmount,
                    ee = X.currencies,
                    te = X.inputError,
                    ne = pg(ee[Dc.INPUT], ee[Dc.OUTPUT], J),
                    re = ne.wrapType,
                    ie = ne.execute,
                    ae = ne.inputError,
                    oe = re !== sg.NOT_APPLICABLE,
                    ce = Lo(q).address,
                    se = Object(i.useMemo)((function () {
                        var e, t;
                        return oe ? (e = {}, Object(h.a)(e, Dc.INPUT, $), Object(h.a)(e, Dc.OUTPUT, $), e) : (t = {}, Object(h.a)(t, Dc.INPUT, G === Dc.INPUT ? $ : null === K || void 0 === K ? void 0 : K.inputAmount), Object(h.a)(t, Dc.OUTPUT, G === Dc.OUTPUT ? $ : null === K || void 0 === K ? void 0 : K.outputAmount), t)
                    }), [G, $, oe, K]),
                    le = Hm(se[Dc.INPUT]),
                    ue = Hm(se[Dc.OUTPUT]),
                    de = Xm(le, ue),
                    pe = function () {
                        var e = Object(d.c)(),
                            t = Object(i.useCallback)((function (t, n) {
                                e(zc({
                                    field: t,
                                    currencyId: n.isToken ? n.address : n.isEther ? "ETH" : ""
                                }))
                            }), [e]);
                        return {
                            onSwitchTokens: Object(i.useCallback)((function () {
                                e(Wc())
                            }), [e]),
                            onCurrencySelection: t,
                            onUserInput: Object(i.useCallback)((function (t, n) {
                                e(Vc({
                                    field: t,
                                    typedValue: n
                                }))
                            }), [e]),
                            onChangeRecipient: Object(i.useCallback)((function (t) {
                                e(Gc({
                                    recipient: t
                                }))
                            }), [e])
                        }
                    }(),
                    be = pe.onSwitchTokens,
                    fe = pe.onCurrencySelection,
                    he = pe.onUserInput,
                    me = pe.onChangeRecipient,
                    je = !te,
                    ge = G === Dc.INPUT ? Dc.OUTPUT : Dc.INPUT,
                    xe = Object(i.useCallback)((function (e) {
                        he(Dc.INPUT, e)
                    }), [he]),
                    Oe = Object(i.useCallback)((function (e) {
                        he(Dc.OUTPUT, e)
                    }), [he]),
                    ve = Object(i.useCallback)((function () {
                        N(!0), x.push("/swap/")
                    }), [x]),
                    ye = Object(i.useState)({
                        showConfirm: !1,
                        tradeToConfirm: void 0,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        txHash: void 0
                    }),
                    Ae = Object(P.a)(ye, 2),
                    ke = Ae[0],
                    Ie = ke.showConfirm,
                    Ce = ke.tradeToConfirm,
                    Te = ke.swapErrorMessage,
                    Ee = ke.attemptingTxn,
                    Ne = ke.txHash,
                    Se = Ae[1],
                    Me = (o = {}, Object(h.a)(o, G, J), Object(h.a)(o, ge, oe ? null !== (t = null === (n = se[G]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== t ? t : "" : null !== (r = null === (a = se[ge]) || void 0 === a ? void 0 : a.toSignificant(6)) && void 0 !== r ? r : ""), o),
                    Ue = Boolean(ee[Dc.INPUT] && ee[Dc.OUTPUT] && (null === (c = se[G]) || void 0 === c ? void 0 : c.greaterThan(g.a.BigInt(0)))),
                    Re = !(null === K || void 0 === K ? void 0 : K.route),
                    Fe = function (e, t) {
                        var n = It().chainId;
                        return $j(Object(i.useMemo)((function () {
                            return e && e.inputAmount.currency.isToken ? e.maximumAmountIn(t) : void 0
                        }), [e, t]), n ? Le[n] : De)
                    }(K, Z),
                    ze = Object(P.a)(Fe, 2),
                    We = ze[0],
                    Ve = ze[1],
                    Ye = lg(K, Z),
                    Ge = Ye.state,
                    Je = Ye.signatureData,
                    qe = Ye.gatherPermitSignature,
                    Qe = Object(i.useCallback)(Object(I.a)(k.a.mark((function e() {
                        return k.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Ge !== tg.NOT_SIGNED || !qe) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, qe();
                                case 4:
                                    e.next = 11;
                                    break;
                                case 6:
                                    if (e.prev = 6, e.t0 = e.catch(1), 4001 === (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 11, Ve();
                                case 11:
                                    e.next = 15;
                                    break;
                                case 13:
                                    return e.next = 15, Ve();
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 6]
                        ])
                    }))), [Ve, qe, Ge]),
                    He = Object(i.useState)(!1),
                    Xe = Object(P.a)(He, 2),
                    Ke = Xe[0],
                    Ze = Xe[1];
                Object(i.useEffect)((function () {
                    We === qj.PENDING && Ze(!0)
                }), [We, Ke]);
                var _e = function (e) {
                        if (e) return e.currency.isEther ? g.a.greaterThan(e.quotient, Ot) ? m.b.ether(g.a.subtract(e.quotient, Ot)) : m.b.ether(g.a.BigInt(0)) : e
                    }(_[Dc.INPUT]),
                    $e = Boolean((null === _e || void 0 === _e ? void 0 : _e.greaterThan(0)) && !(null === (s = se[Dc.INPUT]) || void 0 === s ? void 0 : s.equalTo(_e))),
                    et = function (e, t, n, r) {
                        var a = It(),
                            o = a.account,
                            c = a.chainId,
                            s = a.library,
                            l = Lc(e, t, n, r),
                            u = Di(),
                            d = Object(P.a)(u, 1)[0],
                            p = Fi(),
                            j = Object(P.a)(p, 1)[0],
                            g = we.a.from(j),
                            x = we.a.from(d),
                            O = zo(n).address,
                            v = null === n ? o : O,
                            y = rs(),
                            w = Object(P.a)(y, 2),
                            A = w[0];
                        return w[1], Object(i.useMemo)((function () {
                            return e && s && o && c ? v ? {
                                state: Bc.VALID,
                                callback: function () {
                                    var e = Object(I.a)(k.a.mark((function e() {
                                        var t, n, r, i, a, s, u, d, p, j, O;
                                        return k.a.wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, Promise.all(l.map((function (e) {
                                                        var t, n = e.parameters,
                                                            r = n.methodName,
                                                            i = n.args,
                                                            a = n.value,
                                                            o = e.contract,
                                                            c = !a || Do(a) ? {} : {
                                                                value: a
                                                            };
                                                        return (t = o.estimateGas)[r].apply(t, Object(b.a)(i).concat([c])).then((function (t) {
                                                            return {
                                                                call: e,
                                                                gasEstimate: t
                                                            }
                                                        })).catch((function (t) {
                                                            var n;
                                                            return console.debug("Gas estimate failed, trying eth_call to extract error", e), (n = o.callStatic)[r].apply(n, Object(b.a)(i).concat([c])).then((function (n) {
                                                                return console.debug("Unexpected successful call after failed estimate gas", e, t, n), {
                                                                    call: e,
                                                                    error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                                }
                                                            })).catch((function (t) {
                                                                var n;
                                                                switch (console.debug("Call threw error", e, t), t.reason) {
                                                                    case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                                    case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                        n = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                        break;
                                                                    default:
                                                                        n = "The transaction cannot succeed due to error: ".concat(t.reason, ". This is probably an issue with one of the tokens you are swapping.")
                                                                }
                                                                return {
                                                                    call: e,
                                                                    error: new Error(n)
                                                                }
                                                            }))
                                                        }))
                                                    })));
                                                case 2:
                                                    if (t = e.sent, n = t.find((function (e, t, n) {
                                                            return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1])
                                                        }))) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    if (!((r = t.filter((function (e) {
                                                            return "error" in e
                                                        }))).length > 0)) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    throw r[r.length - 1].error;
                                                case 8:
                                                    throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                case 9:
                                                    return i = n.call, a = i.contract, s = i.parameters, u = s.methodName, d = s.args, p = s.value, j = function (e) {
                                                        var t = c ? Pe[c] : void 0;
                                                        if (!t) throw new Error("Could not determine relay URI for this network");
                                                        var n = JSON.stringify({
                                                            method: "blxr_private_tx",
                                                            id: "1",
                                                            jsonrpc: "2.0",
                                                            params: Object(f.a)({
                                                                transaction: e.slice(2)
                                                            }, A.hash ? {
                                                                uuid: A.hash
                                                            } : {})
                                                        });
                                                        fetch("".concat(t, "/blxr_private_tx") + "?blxr_env=" + Be, {
                                                            method: "POST",
                                                            body: n,
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            }
                                                        }).then((function (e) {
                                                            return e.json()
                                                        })).then((function (e) {
                                                            return console.log(e)
                                                        })).catch((function (e) {
                                                            return console.error(e)
                                                        }))
                                                    }, O = Object(f.a)({
                                                        from: o,
                                                        to: a.address,
                                                        data: a.interface.encodeFunctionData(u, d),
                                                        gasLimit: g,
                                                        gasPrice: x
                                                    }, p && !Do(p) ? {
                                                        value: p
                                                    } : {}), e.abrupt("return", a.signer.populateTransaction(O).then((function (e) {
                                                        var t, n, r = (t = {}, Object(h.a)(t, m.a.MAINNET, "mainnet"), Object(h.a)(t, m.a.RINKEBY, "rinkeby"), t)[c];
                                                        if (!r) throw new Error("Unknown chain ID ".concat(c, " when building transaction"));
                                                        new Tc.a({
                                                            chain: r,
                                                            hardfork: "berlin"
                                                        });
                                                        var i = {
                                                            nonce: void 0 !== e.nonce ? Ec.a.utils.hexlify(e.nonce, {
                                                                hexPad: "left"
                                                            }) : void 0,
                                                            gasPrice: void 0 !== e.gasPrice ? Ec.a.utils.hexlify(e.gasPrice, {
                                                                hexPad: "left"
                                                            }) : void 0,
                                                            gasLimit: void 0 !== e.gasLimit ? Ec.a.utils.hexlify(e.gasLimit, {
                                                                hexPad: "left"
                                                            }) : void 0,
                                                            to: e.to,
                                                            value: void 0 !== e.value ? Ec.a.utils.hexlify(e.value, {
                                                                hexPad: "left"
                                                            }) : void 0,
                                                            data: null === (n = e.data) || void 0 === n ? void 0 : n.toString(),
                                                            chainId: void 0 !== e.chainId ? Ec.a.utils.hexlify(e.chainId) : void 0,
                                                            type: void 0 !== e.type ? Ec.a.utils.hexlify(e.type) : void 0
                                                        };
                                                        console.log(i);
                                                        var s = Nc.TransactionFactory.fromTxData(i, {}),
                                                            l = s.getMessageToSign();
                                                        if (!(a.signer instanceof Sc.b)) throw new Error("Cannot sign transactions with this wallet type");
                                                        var u, d, p = a.signer;
                                                        return p.provider instanceof S.a && p.provider.provider.isMetaMask && (d = p.provider, u = d.provider.isMetaMask, d.provider.isMetaMask = !1), p.provider.send("eth_sign", [o, Ec.a.utils.hexlify(l)]).then((function (t) {
                                                            var n = Ec.a.utils.splitSignature(t),
                                                                r = s._processSignature(n.v, Ec.a.utils.arrayify(n.r), Ec.a.utils.arrayify(n.s));
                                                            return {
                                                                signedTx: Ec.a.utils.hexlify(r.serialize()),
                                                                fullTx: e
                                                            }
                                                        })).finally((function () {
                                                            d && (d.provider.isMetaMask = u)
                                                        }))
                                                    })).then((function (e) {
                                                        var t = e.signedTx,
                                                            n = e.fullTx,
                                                            r = Ec.a.utils.keccak256(t);
                                                        return console.log("full signed tx: ".concat(JSON.stringify(n), ", signed: ").concat(t)), j(t), r
                                                    })).catch((function (e) {
                                                        throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, u, d, p), new Error("Swap failed: ".concat(Fc(e))))
                                                    })));
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function () {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                error: null
                            } : null !== n ? {
                                state: Bc.INVALID,
                                callback: null,
                                error: "Invalid recipient"
                            } : {
                                state: Bc.LOADING,
                                callback: null,
                                error: null
                            } : {
                                state: Bc.INVALID,
                                callback: null,
                                error: "Missing dependencies"
                            }
                        }), [e, s, o, c, v, n, l, x, g])
                    }(K, Z, q, Je),
                    tt = et.callback,
                    nt = et.error,
                    rt = Mi(),
                    it = Object(P.a)(rt, 1)[0],
                    at = Object(i.useCallback)((function () {
                        var e;
                        tt && (de && !((e = de).lessThan(gt) ? e.lessThan(jt) || window.confirm("This swap has a price impact of at least ".concat(jt.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(gt.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))) || (Se({
                            attemptingTxn: !0,
                            tradeToConfirm: Ce,
                            showConfirm: Ie,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }), tt().then((function (e) {
                            var t, n, r, i;
                            Se({
                                attemptingTxn: !1,
                                tradeToConfirm: Ce,
                                showConfirm: Ie,
                                swapErrorMessage: void 0,
                                txHash: e
                            }), u.a.event({
                                category: "Swap",
                                action: null === q ? "Swap w/o Send" : (null !== ce && void 0 !== ce ? ce : q) === D ? "Swap w/o Send + recipient" : "Swap w/ Send",
                                label: [null === K || void 0 === K || null === (t = K.inputAmount) || void 0 === t || null === (n = t.currency) || void 0 === n ? void 0 : n.symbol, null === K || void 0 === K || null === (r = K.outputAmount) || void 0 === r || null === (i = r.currency) || void 0 === i ? void 0 : i.symbol, Ac(K), it ? "SH" : "MH"].join("/")
                            })
                        })).catch((function (e) {
                            Se({
                                attemptingTxn: !1,
                                tradeToConfirm: Ce,
                                showConfirm: Ie,
                                swapErrorMessage: e.message,
                                txHash: void 0
                            })
                        }))))
                    }), [de, tt, Ce, Ie, q, ce, D, K, it]),
                    ot = Object(i.useState)(!1),
                    ct = Object(P.a)(ot, 2),
                    st = ct[0],
                    lt = ct[1],
                    ut = Object(i.useMemo)((function () {
                        var e = null === K || void 0 === K ? void 0 : K.priceImpact;
                        return rb(e && de ? e.greaterThan(de) ? e : de : null !== e && void 0 !== e ? e : de)
                    }), [de, K]),
                    dt = !te && (We === qj.NOT_APPROVED || We === qj.PENDING || Ke && We === qj.APPROVED) && !(ut > 3 && !W),
                    pt = Object(i.useCallback)((function () {
                        Se({
                            showConfirm: !1,
                            tradeToConfirm: Ce,
                            attemptingTxn: Ee,
                            swapErrorMessage: Te,
                            txHash: Ne
                        }), Ne && he(Dc.INPUT, "")
                    }), [Ee, he, Te, Ce, Ne]),
                    bt = Object(i.useCallback)((function () {
                        Jt(), Se({
                            tradeToConfirm: K,
                            swapErrorMessage: Te,
                            txHash: Ne,
                            attemptingTxn: Ee,
                            showConfirm: Ie
                        })
                    }), [Ee, Ie, Te, K, Ne]),
                    ft = Object(i.useCallback)((function (e) {
                        Ze(!1), fe(Dc.INPUT, e)
                    }), [fe]),
                    ht = Object(i.useCallback)((function () {
                        _e && he(Dc.INPUT, _e.toExact())
                    }), [_e, he]),
                    mt = Object(i.useCallback)((function (e) {
                        return fe(Dc.OUTPUT, e)
                    }), [fe]),
                    xt = function (e, t) {
                        var n = oi();
                        return Object(i.useMemo)((function () {
                            return Boolean(n && ((null === e || void 0 === e ? void 0 : e.isToken) && n[e.address] || (null === t || void 0 === t ? void 0 : t.isToken) && n[t.address]))
                        }), [e, t, n])
                    }(null === ee || void 0 === ee ? void 0 : ee.INPUT, null === ee || void 0 === ee ? void 0 : ee.OUTPUT),
                    vt = Li(),
                    yt = Object(P.a)(vt, 2),
                    wt = yt[0],
                    At = yt[1],
                    kt = Pi(),
                    Tt = Object(P.a)(kt, 2),
                    Et = Tt[0],
                    St = Tt[1],
                    Mt = ut > 3 && !W,
                    Ut = Object(i.useState)(!1),
                    Rt = Object(P.a)(Ut, 2),
                    Pt = Rt[0],
                    Lt = Rt[1],
                    Ft = Dt.default.div(Gg || (Gg = Object(Bt.a)(["\n    position: relative;\n    margin-top: ", ";\n    max-width: 480px;\n    background: ", ";\n    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n      0px 24px 32px rgba(0, 0, 0, 0.01);\n    border-radius: 24px;\n    margin-top: 70px;\n    border: 1px solid #2b2e40;\n    border-radius: 16px;\n    ", ";\n  "])), (function (e) {
                        var t = e.margin;
                        return null !== t && void 0 !== t ? t : "0px"
                    }), (function (e) {
                        return e.theme.bg0
                    }), (function (e) {
                        return e.theme.mediaWidth.upToSmall(Jg || (Jg = Object(Bt.a)(["\n    margin-top: 18vw;\n  "])))
                    })),
                    zt = Dt.default.div(qg || (qg = Object(Bt.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-self: flex-center;\n    width: 100%;\n    justify-content: center;\n  "]))),
                    Wt = !D || !K || xt || Re,
                    Vt = function (e) {
                        var t = It(),
                            n = t.account,
                            r = t.chainId,
                            a = t.library,
                            o = Di(),
                            c = Object(P.a)(o, 1)[0],
                            s = Fi(),
                            l = Object(P.a)(s, 1)[0],
                            u = we.a.from(l),
                            d = we.a.from(c),
                            p = Object(i.useState)(!1),
                            b = Object(P.a)(p, 2),
                            h = b[0],
                            m = b[1],
                            j = rs(),
                            g = Object(P.a)(j, 2),
                            x = g[0],
                            O = g[1],
                            v = _c(hc()),
                            y = v.toggledTrade,
                            w = v.allowedSlippage,
                            A = lg(y, w).signatureData,
                            C = Lc(y, w, e, A),
                            T = function () {
                                var e = Object(I.a)(k.a.mark((function e() {
                                    var t, i, o, c, s, l, p, b, h, j, g, x, v, w;
                                    return k.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (y && a && n && r) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return console.log("Could not determine the trade pair"), e.abrupt("return");
                                            case 3:
                                                if (t = r ? Pe[r] : void 0) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return console.log("Could not determine relay URI for this network"), e.abrupt("return");
                                            case 7:
                                                if (1 === C.length) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return console.log("Could not determine the swap call for bx router"), e.abrupt("return");
                                            case 10:
                                                return i = C[0], o = i.contract, c = i.parameters, s = c.methodName, l = c.args, p = c.value, b = o.interface.encodeFunctionData(s, l), h = Object(f.a)({
                                                    from: n,
                                                    to: o.address,
                                                    data: o.interface.encodeFunctionData(s, l),
                                                    gasLimit: u,
                                                    gasPrice: d
                                                }, p && !Do(p) ? {
                                                    value: p
                                                } : {}), e.next = 16, o.signer.populateTransaction(h);
                                            case 16:
                                                return j = e.sent, g = JSON.stringify({
                                                    method: "estimate_arb_profit",
                                                    id: "1",
                                                    params: {
                                                        chain_id: Xg(r || 1),
                                                        from: n,
                                                        to: o.address,
                                                        gas: Xg(u),
                                                        gas_price: Xg(d),
                                                        input: b,
                                                        nonce: j.nonce ? Xg(j.nonce) : "0x0",
                                                        value: Ec.a.utils.isHexString(p) ? p : Xg(Ec.a.BigNumber.from(p))
                                                    }
                                                }), console.log("estimate_arb_profit.body =>", g), m(!0), e.prev = 20, e.next = 23, fetch("".concat(t, "/estimate_arb_profit") + "?blxr_env=" + Be, {
                                                    method: "POST",
                                                    body: g,
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    }
                                                }).then((function (e) {
                                                    return e.json()
                                                }));
                                            case 23:
                                                v = e.sent, w = Ec.a.utils.formatEther(we.a.from(v.result.userProfit)), console.log("profitInETH => ", w), O({
                                                    hash: (null === (x = v.result) || void 0 === x ? void 0 : x.hashId) || null,
                                                    userProfit: w
                                                }), e.next = 33;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t0 = e.catch(20), console.log(e.t0.message), O({
                                                    hash: null,
                                                    userProfit: "0"
                                                });
                                            case 33:
                                                m(!1);
                                            case 34:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [20, 29]
                                    ])
                                })));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return {
                            loading: h,
                            arbiProfit: x.userProfit,
                            refetch: T
                        }
                    }(ce),
                    Yt = Vt.loading,
                    Gt = Vt.arbiProfit,
                    Jt = Vt.refetch,
                    qt = Po(J, 100);
                return Object(i.useEffect)((function () {
                    !Ie && K && Jt()
                }), [qt, Q, H]), Object(Ct.jsxs)(Ct.Fragment, {
                    children: [Object(Ct.jsx)(Ft, {
                        children: Object(Ct.jsx)(zt, {
                            children: Object(Ct.jsx)(Tg, {
                                id: "underlying-exchange-toggle"
                            })
                        })
                    }), Object(Ct.jsx)(Jj, {
                        isOpen: B.length > 0 && !E,
                        tokens: B,
                        onConfirm: U,
                        onDismiss: ve
                    }), Object(Ct.jsxs)(fg, {
                        children: [Object(Ct.jsx)(Gj, {
                            allowedSlippage: Z
                        }), Object(Ct.jsxs)(Ob, {
                            id: "swap-page",
                            children: [Object(Ct.jsx)(ij, {
                                isOpen: Ie,
                                trade: K,
                                originalTrade: Ce,
                                onAcceptChanges: bt,
                                attemptingTxn: Ee,
                                txHash: Ne,
                                recipient: q,
                                allowedSlippage: Z,
                                onConfirm: at,
                                swapErrorMessage: Te,
                                onDismiss: pt,
                                arbiProfit: Gt,
                                fetchingArbiProfit: Yt
                            }), Object(Ct.jsxs)(an, {
                                gap: "md",
                                children: [Object(Ct.jsxs)("div", {
                                    style: {
                                        display: "relative"
                                    },
                                    children: [Object(Ct.jsx)(Em, {
                                        label: G !== Dc.OUTPUT || oe ? "From" : "From (at most)",
                                        value: Me[Dc.INPUT],
                                        showMaxButton: $e,
                                        currency: ee[Dc.INPUT],
                                        onUserInput: xe,
                                        onMax: ht,
                                        fiatValue: null !== le && void 0 !== le ? le : void 0,
                                        onCurrencySelect: ft,
                                        otherCurrency: ee[Dc.OUTPUT],
                                        showCommonBases: !0,
                                        id: "swap-currency-input"
                                    }), Object(Ct.jsx)(an, {
                                        justify: "space-between",
                                        children: Object(Ct.jsx)(xn, {
                                            justify: "space-between",
                                            children: Object(Ct.jsx)(vb, {
                                                clickable: !0,
                                                children: Object(Ct.jsx)(jf.a, {
                                                    size: "16",
                                                    onClick: function () {
                                                        Ze(!1), be()
                                                    },
                                                    color: "#fff"
                                                })
                                            })
                                        })
                                    }), Object(Ct.jsx)(Em, {
                                        value: Me[Dc.OUTPUT],
                                        onUserInput: Oe,
                                        label: G !== Dc.INPUT || oe ? "To" : "To (at least)",
                                        showMaxButton: !0,
                                        hideBalance: !1,
                                        fiatValue: null !== ue && void 0 !== ue ? ue : void 0,
                                        priceImpact: de,
                                        currency: ee[Dc.OUTPUT],
                                        onCurrencySelect: mt,
                                        otherCurrency: ee[Dc.INPUT],
                                        showCommonBases: !0,
                                        id: "swap-currency-output"
                                    })]
                                }), Object(Ct.jsx)(vn, {
                                    style: {
                                        justifyContent: K ? "space-between" : "center"
                                    },
                                    children: K ? Object(Ct.jsx)(Ct.Fragment, {
                                        children: Object(Ct.jsxs)("div", {
                                            className: Pt ? "showInfo show" : "showInfo",
                                            children: [Object(Ct.jsxs)(On, {
                                                children: [Object(Ct.jsx)(_m, {
                                                    price: K.executionPrice,
                                                    showInverted: st,
                                                    setShowInverted: lt
                                                }), Object(Ct.jsx)(hf, {
                                                    content: Object(Ct.jsx)(Bb, {
                                                        trade: K,
                                                        allowedSlippage: Z
                                                    }),
                                                    children: Object(Ct.jsx)(Kg, {})
                                                })]
                                            }), Pt ? Object(Ct.jsx)("span", {
                                                onClick: function () {
                                                    return Lt(!1)
                                                },
                                                children: Object(Ct.jsx)(Zg, {
                                                    selected: !1
                                                })
                                            }) : Object(Ct.jsx)("span", {
                                                onClick: function () {
                                                    Lt(!0), u.a.event({
                                                        category: "Settings",
                                                        action: "Clicked Changes DropDown",
                                                        label: "Changes"
                                                    })
                                                },
                                                children: Object(Ct.jsx)(_g, {
                                                    selected: !1
                                                })
                                            })]
                                        })
                                    }) : null
                                }), K && Pt ? Object(Ct.jsx)(vn, {
                                    className: Pt && "showDiv",
                                    width: "100%",
                                    justify: "space-between",
                                    style: {
                                        padding: "0rem 0rem 0rem 0rem"
                                    },
                                    children: Object(Ct.jsx)(Pg, {
                                        tipManualOverride: wt,
                                        setTipManualOverride: At,
                                        userGasEstimateManualOverride: Et,
                                        setUserGasEstimateManualOverride: St
                                    })
                                }) : null, Wt ? null : Object(Ct.jsx)(vn, {
                                    width: "100%",
                                    justify: "space-between",
                                    style: {
                                        padding: "0rem 0rem 0rem 0rem"
                                    },
                                    children: Object(Ct.jsx)(ej, {
                                        fetching: Yt,
                                        arbiProfit: Gt
                                    })
                                }), null === q || oe ? null : Object(Ct.jsxs)(Ct.Fragment, {
                                    children: [Object(Ct.jsxs)(xn, {
                                        justify: "space-between",
                                        style: {
                                            padding: "0 1rem"
                                        },
                                        children: [Object(Ct.jsx)(vb, {
                                            clickable: !1,
                                            children: Object(Ct.jsx)(jf.a, {
                                                size: "16",
                                                color: L.text2
                                            })
                                        }), Object(Ct.jsx)(ja, {
                                            id: "remove-recipient-button",
                                            onClick: function () {
                                                return me(null)
                                            },
                                            children: v("remove_send")
                                        })]
                                    }), Object(Ct.jsx)(Jo, {
                                        id: "recipient",
                                        value: q,
                                        onChange: me
                                    })]
                                }), Object(Ct.jsxs)(wb, {
                                    children: [xt ? Object(Ct.jsx)(so, {
                                        disabled: !0,
                                        children: Object(Ct.jsx)(Va, {
                                            mb: "4px",
                                            children: v("unsupported_asset")
                                        })
                                    }) : D ? oe ? Object(Ct.jsx)(so, {
                                        disabled: Boolean(ae),
                                        onClick: ie,
                                        children: null !== ae && void 0 !== ae ? ae : re === sg.WRAP ? "Wrap" : re === sg.UNWRAP ? "Unwrap" : null
                                    }) : Re && Ue ? Object(Ct.jsx)(ps, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: Object(Ct.jsx)(Va, {
                                            mb: "4px",
                                            children: "".concat(v("insufficient_liquidity_for_this_trade")).concat(it ? " Try enabling multi-hop trades." : "")
                                        })
                                    }) : dt ? Object(Ct.jsx)(xn, {
                                        style: {
                                            flexWrap: "nowrap",
                                            width: "100%"
                                        },
                                        children: Object(Ct.jsxs)(an, {
                                            style: {
                                                width: "100%"
                                            },
                                            gap: "12px",
                                            children: [Object(Ct.jsx)(jo, {
                                                onClick: Qe,
                                                disabled: We !== qj.NOT_APPROVED || Ke || Ge === tg.SIGNED,
                                                width: "100%",
                                                altDisabledStyle: We === qj.PENDING,
                                                confirmed: We === qj.APPROVED || Ge === tg.SIGNED,
                                                children: Object(Ct.jsxs)(xn, {
                                                    justify: "space-between",
                                                    style: {
                                                        flexWrap: "nowrap"
                                                    },
                                                    children: [Object(Ct.jsxs)("span", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [Object(Ct.jsx)($b, {
                                                            currency: ee[Dc.INPUT],
                                                            size: "20px",
                                                            style: {
                                                                marginRight: "8px",
                                                                flexShrink: 0
                                                            }
                                                        }), We === qj.APPROVED || Ge === tg.SIGNED ? "You can now trade " + (null === (l = ee[Dc.INPUT]) || void 0 === l ? void 0 : l.symbol) : "Allow the bloXroute Swap Protocol to use your " + (null === (p = ee[Dc.INPUT]) || void 0 === p ? void 0 : p.symbol)]
                                                    }), We === qj.PENDING ? Object(Ct.jsx)(Ns, {
                                                        stroke: "white"
                                                    }) : Ke && We === qj.APPROVED || Ge === tg.SIGNED ? Object(Ct.jsx)(Ls.a, {
                                                        size: "20",
                                                        color: L.green1
                                                    }) : Object(Ct.jsx)(ff, {
                                                        text: v("give_the_uniswap_smart_contracts_permission", null === (j = ee[Dc.INPUT]) || void 0 === j ? void 0 : j.symbol),
                                                        children: Object(Ct.jsx)(gf.a, {
                                                            size: "20",
                                                            color: "white",
                                                            style: {
                                                                marginLeft: "8px"
                                                            }
                                                        })
                                                    })]
                                                })
                                            }), Object(Ct.jsx)(go, {
                                                onClick: function () {
                                                    W ? at() : Se({
                                                        tradeToConfirm: K,
                                                        attemptingTxn: !1,
                                                        swapErrorMessage: void 0,
                                                        showConfirm: !0,
                                                        txHash: void 0
                                                    })
                                                },
                                                width: "100%",
                                                id: "swap-button",
                                                disabled: !je || We !== qj.APPROVED && Ge !== tg.SIGNED || Mt,
                                                error: je && ut > 2,
                                                children: Object(Ct.jsx)(yn.b, {
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    children: v(ut > 2 ? "swap_anyway" : "swap_v2")
                                                })
                                            })]
                                        })
                                    }) : Object(Ct.jsx)(go, {
                                        onClick: function () {
                                            W ? at() : Se({
                                                tradeToConfirm: K,
                                                attemptingTxn: !1,
                                                swapErrorMessage: void 0,
                                                showConfirm: !0,
                                                txHash: void 0
                                            })
                                        },
                                        id: "swap-button",
                                        disabled: !je || Mt || !!nt,
                                        error: je && ut > 2 && !nt,
                                        children: Object(Ct.jsx)(yn.b, {
                                            fontSize: 20,
                                            fontWeight: 500,
                                            children: te || v(Mt ? "price_impact_too_high" : ut > 2 ? "swap_anyway" : "swap_v2")
                                        })
                                    }) : Object(Ct.jsx)(lo, {
                                        onClick: F,
                                        children: v("connect_wallet")
                                    }), W && Te ? Object(Ct.jsx)(Tb, {
                                        error: Te
                                    }) : null]
                                })]
                            })]
                        })]
                    }), Object(Ct.jsxs)("div", {
                        className: "swapSec06",
                        children: [Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsx)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row left",
                                        span: 6
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row left",
                                        span: 6,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsx)("a", {
                                                href: "https://bloxroute.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: v("footer_about_bloxroute")
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://twitter.com",
                                                rel: "noreferrer",
                                                children: v("footer_contact_us")
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://medium.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: v("footer_discord")
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(Ct.jsxs)("div", {
                            className: "footerBottom",
                            children: [Object(Ct.jsx)("span", {
                                className: "footerLine"
                            }), Object(Ct.jsxs)("div", {
                                className: "copy",
                                children: [Object(Ct.jsx)("span", {
                                    children: v("footer_backrunme_powered_by_bloxroute")
                                }), Object(Ct.jsx)("span", {
                                    children: v("footer_all_rights_reserved_2022")
                                })]
                            })]
                        })]
                    }), xt ? Object(Ct.jsx)(nf, {
                        show: xt,
                        currencies: [ee.INPUT, ee.OUTPUT]
                    }) : null]
                })
            }
            var ex = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAEs2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNjIiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNjIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI2MiIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjYyIgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDUt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",
                tx = "data:image/png;base64,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",
                nx = n.p + "static/media/1-icon.8737ed9f.svg",
                rx = n.p + "static/media/2-icon.a1a9dfbc.svg",
                ix = n.p + "static/media/3-icon.7bb2da45.svg",
                ax = n.p + "static/media/sec4Icon1.d035b8c9.png",
                ox = n.p + "static/media/sec4Icon2.d92e6e96.png",
                cx = n.p + "static/media/sec4Icon3.5c622063.png",
                sx = n.p + "logo.png";
            n(1769);

            function lx() {
                var e = Object(Nt.b)().t;
                return Object(Ct.jsxs)("div", {
                    className: "Home",
                    children: [Object(Ct.jsx)("div", {
                        className: "sec01",
                        children: Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsxs)(bd.a, {
                                span: 15,
                                offset: 5,
                                className: "content",
                                children: [Object(Ct.jsx)("h1", {
                                    children: e("your_dex_swaps")
                                }), Object(Ct.jsx)("h2", {
                                    children: e("are_at_risk")
                                }), Object(Ct.jsx)(p.b, {
                                    to: "/swap",
                                    className: "Btn",
                                    children: e("launch_app")
                                }), Object(Ct.jsxs)("div", {
                                    className: "pc",
                                    children: [Object(Ct.jsxs)("p", {
                                        className: "textP",
                                        children: [Object(Ct.jsx)("span", {
                                            children: e("supported_dexs")
                                        }), Object(Ct.jsx)("span", {
                                            children: e("bloxroute_BDN_performance")
                                        })]
                                    }), Object(Ct.jsxs)("div", {
                                        className: "bottomData",
                                        children: [Object(Ct.jsxs)("div", {
                                            className: "left",
                                            children: [Object(Ct.jsx)("img", {
                                                src: ex,
                                                alt: "uni"
                                            }), Object(Ct.jsx)("img", {
                                                src: tx,
                                                alt: "sushi"
                                            })]
                                        }), Object(Ct.jsxs)("div", {
                                            className: "right",
                                            children: [Object(Ct.jsxs)("p", {
                                                className: "circular",
                                                children: [Object(Ct.jsx)("h4", {
                                                    children: "90%"
                                                }), Object(Ct.jsx)("span", {
                                                    children: e("private_Tx_hash_Power")
                                                })]
                                            }), Object(Ct.jsxs)("p", {
                                                className: "circular",
                                                children: [Object(Ct.jsx)("h4", {
                                                    children: e("7k")
                                                }), Object(Ct.jsx)("span", {
                                                    children: e("daily_private_Tx")
                                                })]
                                            }), Object(Ct.jsxs)("p", {
                                                className: "circular",
                                                children: [Object(Ct.jsx)("h4", {
                                                    children: e("1.5b")
                                                }), Object(Ct.jsx)("span", {
                                                    children: e("daily_BDN_volume")
                                                })]
                                            })]
                                        })]
                                    })]
                                }), Object(Ct.jsxs)("div", {
                                    className: "mobile",
                                    children: [Object(Ct.jsx)("p", {
                                        className: "textP",
                                        children: Object(Ct.jsx)("span", {
                                            children: e("supported_dexs")
                                        })
                                    }), Object(Ct.jsxs)("div", {
                                        className: "left",
                                        children: [Object(Ct.jsx)("img", {
                                            src: ex,
                                            alt: "uni"
                                        }), Object(Ct.jsx)("img", {
                                            src: tx,
                                            alt: "sushi"
                                        })]
                                    }), Object(Ct.jsxs)("div", {
                                        className: "bottomData",
                                        children: [Object(Ct.jsx)("p", {
                                            className: "textP",
                                            children: Object(Ct.jsx)("span", {
                                                children: e("bloxroute_BDN_performance")
                                            })
                                        }), Object(Ct.jsxs)("div", {
                                            className: "right",
                                            children: [Object(Ct.jsxs)("p", {
                                                className: "circular",
                                                children: [Object(Ct.jsx)("h4", {
                                                    children: "90%"
                                                }), Object(Ct.jsx)("span", {
                                                    children: e("private_Tx_hash_Power")
                                                })]
                                            }), Object(Ct.jsxs)("p", {
                                                className: "circular",
                                                children: [Object(Ct.jsx)("h4", {
                                                    children: e("7k")
                                                }), Object(Ct.jsx)("span", {
                                                    children: e("daily_private_Tx")
                                                })]
                                            }), Object(Ct.jsxs)("p", {
                                                className: "circular",
                                                children: [Object(Ct.jsx)("h4", {
                                                    children: e("1.5b")
                                                }), Object(Ct.jsx)("span", {
                                                    children: e("daily_BDN_volume")
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), Object(Ct.jsx)("div", {
                        className: "sec02",
                        children: Object(Ct.jsx)("div", {
                            className: "bgDiv",
                            children: Object(Ct.jsx)(pd.a, {
                                children: Object(Ct.jsxs)(bd.a, {
                                    span: 14,
                                    offset: 5,
                                    className: "content",
                                    children: [Object(Ct.jsx)("h2", {
                                        className: "title",
                                        children: e("the_problem")
                                    }), Object(Ct.jsx)("span", {
                                        className: "titleLine"
                                    }), Object(Ct.jsxs)("div", {
                                        className: "textDiv",
                                        children: [Object(Ct.jsx)("p", {
                                            children: e("the_problem_text_P1")
                                        }), Object(Ct.jsx)("p", {
                                            children: e("the_problem_text_P2")
                                        }), Object(Ct.jsx)("p", {
                                            children: e("the_problem_text_P3")
                                        })]
                                    })]
                                })
                            })
                        })
                    }), Object(Ct.jsx)("div", {
                        className: "sec03",
                        children: Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsxs)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: [Object(Ct.jsx)("h2", {
                                    className: "title",
                                    children: e("our_solution")
                                }), Object(Ct.jsx)("span", {
                                    className: "titleLine"
                                }), Object(Ct.jsxs)("div", {
                                    className: "textDiv",
                                    children: [Object(Ct.jsxs)("p", {
                                        className: "pc",
                                        children: [e("our_solution_subtext_SEC1"), Object(Ct.jsx)("br", {}), " ", e("our_solution_subtext_SEC2")]
                                    }), Object(Ct.jsxs)("p", {
                                        className: "mobile",
                                        children: [e("our_solution_subtext_SEC1"), " ", e("our_solution_subtext_SEC2")]
                                    })]
                                }), Object(Ct.jsx)("div", {
                                    className: "cardDiv",
                                    children: Object(Ct.jsxs)(pd.a, {
                                        gutter: 32,
                                        children: [Object(Ct.jsx)(bd.a, {
                                            className: "gutter-row card",
                                            span: 8,
                                            children: Object(Ct.jsxs)("div", {
                                                children: [Object(Ct.jsx)("img", {
                                                    src: nx,
                                                    alt: "icon"
                                                }), Object(Ct.jsx)("p", {
                                                    className: "bigFont",
                                                    children: e("frontrun_protection")
                                                }), Object(Ct.jsx)("p", {
                                                    className: "subFont",
                                                    children: e("skip_the_mempool")
                                                }), Object(Ct.jsx)("p", {
                                                    className: "smallFont",
                                                    children: e("frontrun_protection_text_P")
                                                })]
                                            })
                                        }), Object(Ct.jsx)(bd.a, {
                                            className: "gutter-row card",
                                            span: 8,
                                            children: Object(Ct.jsxs)("div", {
                                                children: [Object(Ct.jsx)("img", {
                                                    src: rx,
                                                    alt: "icon"
                                                }), Object(Ct.jsx)("p", {
                                                    className: "bigFont",
                                                    children: e("arbitrage_extraction")
                                                }), Object(Ct.jsx)("p", {
                                                    className: "subFont",
                                                    children: e("stop_leaving_money_on_the_table")
                                                }), Object(Ct.jsx)("p", {
                                                    className: "smallFont",
                                                    children: e("arbitrage_extraction_text_P")
                                                })]
                                            })
                                        }), Object(Ct.jsx)(bd.a, {
                                            className: "gutter-row card",
                                            span: 8,
                                            children: Object(Ct.jsxs)("div", {
                                                children: [Object(Ct.jsx)("img", {
                                                    src: ix,
                                                    alt: "icon"
                                                }), Object(Ct.jsx)("p", {
                                                    className: "bigFont",
                                                    children: e("community_benefit")
                                                }), Object(Ct.jsx)("p", {
                                                    className: "subFont",
                                                    children: e("promote_network_efficiency")
                                                }), Object(Ct.jsx)("p", {
                                                    className: "smallFont",
                                                    children: e("community_benefit_text_P")
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    }), Object(Ct.jsx)("div", {
                        className: "sec04",
                        children: Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsxs)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: [Object(Ct.jsx)("h2", {
                                    className: "title",
                                    children: e("how_it_works")
                                }), Object(Ct.jsx)("span", {
                                    className: "titleLine"
                                }), Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row leftCard1",
                                        span: 12,
                                        children: Object(Ct.jsx)("div", {
                                            children: Object(Ct.jsx)("img", {
                                                src: ax,
                                                alt: "icon"
                                            })
                                        })
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row rightCard1",
                                        span: 12,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsxs)("h2", {
                                                children: [Object(Ct.jsx)("img", {
                                                    src: "data:image/png;base64,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",
                                                    alt: "icon"
                                                }), e("fast_protect_title")]
                                            }), Object(Ct.jsx)("p", {
                                                className: "title",
                                                children: e("skip_the_mempool_entirely")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("fast_protect_text_P1")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("fast_protect_text_P2")
                                            })]
                                        })
                                    })]
                                }), Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    className: "mobileRever",
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row leftCard2",
                                        span: 12,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsxs)("h2", {
                                                children: [Object(Ct.jsx)("img", {
                                                    src: "data:image/png;base64,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",
                                                    alt: "icon"
                                                }), e("BackRunMe_title")]
                                            }), Object(Ct.jsx)("p", {
                                                className: "title",
                                                children: e("paid_for_creating_arbitrage")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("BackRunMe_text_P1")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("BackRunMe_text_P2")
                                            })]
                                        })
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row rightCard2",
                                        span: 12,
                                        children: Object(Ct.jsx)("div", {
                                            children: Object(Ct.jsx)("img", {
                                                src: ox,
                                                alt: "icon"
                                            })
                                        })
                                    })]
                                }), Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row leftCard3",
                                        span: 12,
                                        children: Object(Ct.jsx)("div", {
                                            children: Object(Ct.jsx)("img", {
                                                src: cx,
                                                alt: "icon"
                                            })
                                        })
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row rightCard3",
                                        span: 12,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsxs)("h2", {
                                                children: [Object(Ct.jsx)("img", {
                                                    src: "data:image/png;base64,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",
                                                    alt: "icon"
                                                }), e("community_benefit_title")]
                                            }), Object(Ct.jsx)("p", {
                                                className: "title",
                                                children: e("deter_malicious_bot_behavior")
                                            }), Object(Ct.jsxs)("p", {
                                                children: [e("community_benefit_text_P1_SEC1"), " ", Object(Ct.jsx)("a", {
                                                    href: "https://explore.flashbots.net/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: e("475m")
                                                }), " ", e("community_benefit_text_P1_SEC2")]
                                            }), Object(Ct.jsx)("p", {
                                                children: e("community_benefit_text_P2")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("community_benefit_text_P3")
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    }), Object(Ct.jsx)("div", {
                        className: "sec05 pc",
                        children: Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsx)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row leftCard",
                                        span: 12,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsx)("h2", {
                                                children: e("about_bloxroute")
                                            }), Object(Ct.jsx)("span", {
                                                className: "titleLine"
                                            }), Object(Ct.jsx)("p", {
                                                children: e("about_bloxroute_text_P1")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("about_bloxroute_text_P2")
                                            }), Object(Ct.jsxs)("p", {
                                                children: [e("about_bloxroute_text_P3"), " ", Object(Ct.jsx)("a", {
                                                    href: "https://bloxroute.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "www.bloxroute.com"
                                                })]
                                            })]
                                        })
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row rightCard",
                                        span: 12,
                                        children: Object(Ct.jsx)("div", {
                                            children: Object(Ct.jsx)("a", {
                                                href: "https://bloxroute.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: Object(Ct.jsx)("img", {
                                                    src: sx,
                                                    alt: "icon"
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    }), Object(Ct.jsx)("div", {
                        className: "sec05 mobile",
                        children: Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsx)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: Object(Ct.jsx)(pd.a, {
                                    gutter: 32,
                                    children: Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row leftCard",
                                        span: 12,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsx)("h2", {
                                                children: e("about_bloxroute")
                                            }), Object(Ct.jsx)("span", {
                                                className: "titleLine"
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://bloxroute.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: Object(Ct.jsx)("img", {
                                                    src: sx,
                                                    alt: "icon"
                                                })
                                            }), Object(Ct.jsx)("p", {
                                                children: e("about_bloxroute_text_P1")
                                            }), Object(Ct.jsx)("p", {
                                                children: e("about_bloxroute_text_P2")
                                            }), Object(Ct.jsxs)("p", {
                                                children: [e("about_bloxroute_text_P3"), " ", Object(Ct.jsx)("a", {
                                                    href: "https://bloxroute.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "www.bloxroute.com"
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    }), Object(Ct.jsxs)("div", {
                        className: "sec06",
                        children: [Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsx)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row left",
                                        span: 6
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row left",
                                        span: 6,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsx)("a", {
                                                href: "https://t.me",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e("footer_about_bloxroute")
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://twitter.com",
                                                rel: "noreferrer",
                                                children: e("footer_contact_us")
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://medium.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e("footer_discord")
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(Ct.jsxs)("div", {
                            className: "footerBottom",
                            children: [Object(Ct.jsx)("span", {
                                className: "footerLine"
                            }), Object(Ct.jsxs)("div", {
                                className: "copy",
                                children: [Object(Ct.jsx)("span", {
                                    children: e("footer_backrunme_powered_by_bloxroute")
                                }), Object(Ct.jsx)("span", {
                                    children: e("footer_all_rights_reserved_2022")
                                })]
                            })]
                        })]
                    })]
                })
            }

            function ux(e) {
                var t = e.location;
                return Object(Ct.jsx)(Pt.a, {
                    to: Object(f.a)(Object(f.a)({}, t), {}, {
                        pathname: "/swap"
                    })
                })
            }

            function dx(e) {
                var t = e.location.search,
                    n = e.match.params.outputCurrency;
                return Object(Ct.jsx)(Pt.a, {
                    to: Object(f.a)(Object(f.a)({}, e.location), {}, {
                        pathname: "/swap",
                        search: t && t.length > 1 ? "".concat(t, "&outputCurrency=").concat(n) : "?outputCurrency=".concat(n)
                    })
                })
            }

            function px(e) {
                var t = Object(d.c)();
                return Object(i.useEffect)((function () {
                    t(ur(cr.ADDRESS_CLAIM))
                }), [t]), Object(Ct.jsx)(ux, Object(f.a)({}, e))
            }

            function bx() {
                return function () {
                    var e = Object(d.c)(),
                        t = bc().ape;
                    Object(i.useEffect)((function () {
                        "string" === typeof t && ("" !== t && "true" !== t.toLowerCase() || e(fi({
                            userExpertMode: !0
                        })))
                    }))
                }(), null
            }
            var fx, hx = n.p + "static/media/404.f8fbc395.png";
            n(1770);

            function mx() {
                var e = Object(Nt.b)().t;
                return Object(Ct.jsxs)("div", {
                    className: "PageNotFound",
                    children: [Object(Ct.jsxs)("div", {
                        className: "sec01",
                        children: [Object(Ct.jsx)("div", {
                            className: "content",
                            children: Object(Ct.jsxs)("div", {
                                children: [Object(Ct.jsx)("h2", {
                                    children: "404."
                                }), Object(Ct.jsx)("h2", {
                                    children: "That\u2019s an error."
                                }), Object(Ct.jsx)("p", {
                                    children: "The requested URL/badpage was"
                                }), Object(Ct.jsx)("p", {
                                    children: "not found on this server."
                                }), Object(Ct.jsx)("p", {
                                    children: "That\u2019s all we know."
                                })]
                            })
                        }), Object(Ct.jsx)("div", {
                            className: "content",
                            children: Object(Ct.jsx)("img", {
                                src: hx,
                                alt: "page_not_found",
                                className: "error-image"
                            })
                        })]
                    }), Object(Ct.jsxs)("div", {
                        className: "sec02",
                        children: [Object(Ct.jsx)(pd.a, {
                            children: Object(Ct.jsx)(bd.a, {
                                span: 14,
                                offset: 5,
                                className: "content",
                                children: Object(Ct.jsxs)(pd.a, {
                                    gutter: 32,
                                    children: [Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row left",
                                        span: 6
                                    }), Object(Ct.jsx)(bd.a, {
                                        className: "gutter-row left",
                                        span: 6,
                                        children: Object(Ct.jsxs)("div", {
                                            children: [Object(Ct.jsx)("a", {
                                                href: "https://t.me",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e("footer_about_bloxroute")
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://twitter.com",
                                                rel: "noreferrer",
                                                children: e("footer_contact_us")
                                            }), Object(Ct.jsx)("a", {
                                                href: "https://medium.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e("footer_discord")
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(Ct.jsxs)("div", {
                            className: "footerBottom",
                            children: [Object(Ct.jsx)("span", {
                                className: "footerLine"
                            }), Object(Ct.jsxs)("div", {
                                className: "copy",
                                children: [Object(Ct.jsx)("span", {
                                    children: e("footer_backrunme_powered_by_bloxroute")
                                }), Object(Ct.jsx)("span", {
                                    children: e("footer_all_rights_reserved_2022")
                                })]
                            })]
                        })]
                    })]
                })
            }
            var jx = Dt.default.div.withConfig({
                    componentId: "sc-1diyrgu-0"
                })(["display:flex;flex-flow:column;align-items:flex-start;background:#00001d !important;"]),
                gx = Dt.default.div.withConfig({
                    componentId: "sc-1diyrgu-1"
                })([""]),
                xx = Dt.default.div.withConfig({
                    componentId: "sc-1diyrgu-2"
                })(["display:flex;flex-direction:column;width:100%;padding-top:120px;align-items:center;flex:1;z-index:1;", ";"], (function (e) {
                    return e.theme.mediaWidth.upToSmall(fx || (fx = Object(Bt.a)(["\n    padding: 16px 0 150px;\n    padding-top: 4rem;\n  "])))
                })),
                Ox = Dt.default.div.withConfig({
                    componentId: "sc-1diyrgu-3"
                })(["width:100%;justify-content:space-between;position:absolute;top:0;z-index:2;"]),
                vx = Dt.default.div.withConfig({
                    componentId: "sc-1diyrgu-4"
                })(["margin-top:5rem;"]);

            function yx() {
                var e = fr(cr.ADDRESS_CLAIM),
                    t = hr(cr.ADDRESS_CLAIM);
                return Object(Ct.jsx)(tc, {
                    isOpen: e,
                    onDismiss: t
                })
            }

            function wx() {
                return Object(Ct.jsx)(Kp, {
                    children: Object(Ct.jsxs)(i.Suspense, {
                        fallback: null,
                        children: [Object(Ct.jsx)(Pt.b, {
                            component: Lt
                        }), Object(Ct.jsx)(Pt.b, {
                            component: Zp
                        }), Object(Ct.jsx)(Pt.b, {
                            component: bx
                        }), "/swap" === Object(Pt.g)().pathname ? Object(Ct.jsxs)(jx, {
                            children: [Object(Ct.jsx)(Ox, {
                                children: Object(Ct.jsx)(od, {})
                            }), Object(Ct.jsxs)(xx, {
                                children: [Object(Ct.jsx)(rp, {}), Object(Ct.jsx)(xd, {}), Object(Ct.jsx)(yx, {}), Object(Ct.jsx)(op, {
                                    children: Object(Ct.jsxs)(Pt.d, {
                                        children: [Object(Ct.jsx)(Pt.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/claim",
                                            component: px
                                        }), Object(Ct.jsx)(Pt.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/send",
                                            component: ux
                                        }), Object(Ct.jsx)(Pt.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/swap/:outputCurrency",
                                            component: dx
                                        }), Object(Ct.jsx)(Pt.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/swap",
                                            component: $g
                                        }), Object(Ct.jsx)(Pt.b, {
                                            component: ux
                                        }), Object(Ct.jsx)(Pt.b, {
                                            path: "*",
                                            component: mx
                                        })]
                                    })
                                }), Object(Ct.jsx)(vx, {})]
                            })]
                        }) : Object(Ct.jsxs)(gx, {
                            children: [Object(Ct.jsx)(Ox, {
                                children: Object(Ct.jsx)(fd, {})
                            }), Object(Ct.jsx)(op, {
                                children: Object(Ct.jsxs)(Pt.d, {
                                    children: [Object(Ct.jsx)(Pt.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/",
                                        component: lx
                                    }), Object(Ct.jsx)(Pt.b, {
                                        path: "*",
                                        component: mx
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var Ax = "visibilityState" in document;

            function kx() {
                return !Ax || "hidden" !== document.visibilityState
            }

            function Ix() {
                var e = Object(i.useState)(kx()),
                    t = Object(P.a)(e, 2),
                    n = t[0],
                    r = t[1],
                    a = Object(i.useCallback)((function () {
                        r(kx())
                    }), [r]);
                return Object(i.useEffect)((function () {
                    if (Ax) return document.addEventListener("visibilitychange", a),
                        function () {
                            document.removeEventListener("visibilitychange", a)
                        }
                }), [a]), n
            }

            function Cx() {
                var e = It(),
                    t = e.library,
                    n = e.chainId,
                    r = Object(d.c)(),
                    a = Ix(),
                    o = Object(i.useState)({
                        chainId: n,
                        blockNumber: null
                    }),
                    c = Object(P.a)(o, 2),
                    s = c[0],
                    l = c[1],
                    u = Object(i.useCallback)((function (e) {
                        l((function (t) {
                            return n === t.chainId ? "number" !== typeof t.blockNumber ? {
                                chainId: n,
                                blockNumber: e
                            } : {
                                chainId: n,
                                blockNumber: Math.max(e, t.blockNumber)
                            } : t
                        }))
                    }), [n, l]);
                Object(i.useEffect)((function () {
                    if (t && n && a) return l({
                            chainId: n,
                            blockNumber: null
                        }), t.getBlockNumber().then(u).catch((function (e) {
                            return console.error("Failed to get block number for chainId: ".concat(n), e)
                        })), t.on("block", u),
                        function () {
                            t.removeListener("block", u)
                        }
                }), [r, n, t, u, a]);
                var p = Po(s, 100);
                return Object(i.useEffect)((function () {
                    p.chainId && p.blockNumber && a && r(lr({
                        chainId: p.chainId,
                        blockNumber: p.blockNumber
                    }))
                }), [a, r, p.blockNumber, p.chainId]), null
            }

            function Tx() {
                var e = It().library,
                    t = Object(d.c)(),
                    n = Ix(),
                    r = tr(),
                    a = ir(),
                    o = Ah();
                return af(Object(i.useCallback)((function () {
                    n && Object.keys(r).forEach((function (e) {
                        return o(e).catch((function (e) {
                            return console.debug("interval list fetching error", e)
                        }))
                    }))
                }), [o, n, r]), e ? 6e5 : null), Object(i.useEffect)((function () {
                    Object.keys(r).forEach((function (e) {
                        var t = r[e];
                        t.current || t.loadingRequestId || t.error || o(e).catch((function (e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [t, o, e, r]), Object(i.useEffect)((function () {
                    Yn.forEach((function (e) {
                        var t = r[e];
                        t && (t.current || t.loadingRequestId || t.error) || o(e).catch((function (e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [t, o, e, r]), Object(i.useEffect)((function () {
                    Object.keys(r).forEach((function (e) {
                        var n = r[e];
                        if (n.current && n.pendingUpdate) {
                            var i = Object(Od.c)(n.current.version, n.pendingUpdate.version);
                            switch (i) {
                                case Od.a.NONE:
                                    throw new Error("unexpected no version bump");
                                case Od.a.PATCH:
                                case Od.a.MINOR:
                                    i >= Object(Od.d)(n.current.tokens, n.pendingUpdate.tokens) ? t(Id(e)) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                                    break;
                                case Od.a.MAJOR:
                                    t(Id(e))
                            }
                        }
                    }))
                }), [t, r, a]), null
            }
            var Ex = 2e5;

            function Nx(e, t) {
                return n = e + Math.round(Math.random() * Math.max(0, t - e)), new Promise((function (e) {
                    return setTimeout(e, n)
                }));
                var n
            }
            var Sx = function (e) {
                    Object(E.a)(n, e);
                    var t = Object(N.a)(n);

                    function n() {
                        return Object(C.a)(this, n), t.call(this, "Cancelled")
                    }
                    return n
                }(Object(Y.a)(Error)),
                Mx = function (e) {
                    Object(E.a)(n, e);
                    var t = Object(N.a)(n);

                    function n() {
                        return Object(C.a)(this, n), t.apply(this, arguments)
                    }
                    return n
                }(Object(Y.a)(Error));

            function Ux() {
                return (Ux = Object(I.a)(k.a.mark((function e(t, n, r) {
                    var i, a, o, c, s;
                    return k.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.debug("Fetching chunk", n, r), e.prev = 1, e.next = 4, t.callStatic.tryBlockAndAggregate(!1, n.map((function (e) {
                                    return {
                                        target: e.address,
                                        callData: e.callData
                                    }
                                })));
                            case 4:
                                o = e.sent, c = o.blockNumber, s = o.returnData, i = c.toNumber(), a = s, e.next = 15;
                                break;
                            case 11:
                                throw e.prev = 11, e.t0 = e.catch(1), console.debug("Failed to fetch chunk", e.t0), e.t0;
                            case 15:
                                if (!(i < r)) {
                                    e.next = 18;
                                    break
                                }
                                throw console.debug("Fetched results for old block number: ".concat(i.toString(), " vs. ").concat(r)), new Mx("Fetched for old block number");
                            case 18:
                                return e.abrupt("return", {
                                    results: a,
                                    blockNumber: i
                                });
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))).apply(this, arguments)
            }

            function Rx() {
                var e = Object(d.c)(),
                    t = Object(d.d)((function (e) {
                        return e.multicall
                    })),
                    n = Po(t.callListeners, 100),
                    r = br(),
                    a = It().chainId,
                    o = ni(),
                    c = Object(i.useRef)(),
                    s = Object(i.useMemo)((function () {
                        return function (e, t) {
                            if (!e || !t) return {};
                            var n = e[t];
                            return n ? Object.keys(n).reduce((function (e, t) {
                                var r = n[t];
                                return e[t] = Object.keys(r).filter((function (e) {
                                    var t = parseInt(e);
                                    return !(t <= 0) && r[t] > 0
                                })).reduce((function (e, t) {
                                    return Math.min(e, parseInt(t))
                                }), 1 / 0), e
                            }), {}) : {}
                        }(n, a)
                    }), [n, a]),
                    l = Object(i.useMemo)((function () {
                        return function (e, t, n, r) {
                            return n && r ? e[n] ? Object.keys(t).filter((function (i) {
                                var a = t[i],
                                    o = e[n][i];
                                if (!o) return !0;
                                var c = r - (a - 1);
                                return !(o.fetchingBlockNumber && o.fetchingBlockNumber >= c) && (!o.blockNumber || o.blockNumber < c)
                            })) : Object.keys(t) : []
                        }(t.callResults, s, a, r)
                    }), [a, t.callResults, s, r]),
                    u = Object(i.useMemo)((function () {
                        return JSON.stringify(l.sort())
                    }), [l]);
                return Object(i.useEffect)((function () {
                    var t;
                    if (r && a && o) {
                        var n = JSON.parse(u);
                        if (0 !== n.length) {
                            var i, s, l = n.map((function (e) {
                                    return vr(e)
                                })),
                                d = function (e) {
                                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e8, n = [], r = [], i = 0, a = 0; a < e.length; a++) {
                                        var o, c = e[a],
                                            s = null !== (o = null === c || void 0 === c ? void 0 : c.gasRequired) && void 0 !== o ? o : Ex;
                                        0 === r.length || i + s < t ? (r.push(c), i += s) : (n.push(r), r = [c], i = s)
                                    }
                                    return r.length > 0 && n.push(r), n
                                }(l);
                            if ((null === (t = c.current) || void 0 === t ? void 0 : t.blockNumber) !== r) null === (i = c.current) || void 0 === i || null === (s = i.cancellations) || void 0 === s || s.forEach((function (e) {
                                return e()
                            }));
                            e(Ar({
                                calls: l,
                                chainId: a,
                                fetchingBlockNumber: r
                            })), c.current = {
                                blockNumber: r,
                                cancellations: d.map((function (t, i) {
                                    var s = function (e, t) {
                                            var n, r = t.n,
                                                i = t.minWait,
                                                a = t.maxWait,
                                                o = !1;
                                            return {
                                                promise: new Promise(function () {
                                                    var t = Object(I.a)(k.a.mark((function t(c, s) {
                                                        var l;
                                                        return k.a.wrap((function (t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    n = s;
                                                                case 1:
                                                                    return l = void 0, t.prev = 3, t.next = 6, e();
                                                                case 6:
                                                                    return l = t.sent, o || (c(l), o = !0), t.abrupt("break", 24);
                                                                case 11:
                                                                    if (t.prev = 11, t.t0 = t.catch(3), !o) {
                                                                        t.next = 15;
                                                                        break
                                                                    }
                                                                    return t.abrupt("break", 24);
                                                                case 15:
                                                                    if (!(r <= 0) && t.t0 instanceof Mx) {
                                                                        t.next = 19;
                                                                        break
                                                                    }
                                                                    return s(t.t0), o = !0, t.abrupt("break", 24);
                                                                case 19:
                                                                    r--;
                                                                case 20:
                                                                    return t.next = 22, Nx(i, a);
                                                                case 22:
                                                                    t.next = 1;
                                                                    break;
                                                                case 24:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [3, 11]
                                                        ])
                                                    })));
                                                    return function (e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()),
                                                cancel: function () {
                                                    o || (o = !0, n(new Sx))
                                                }
                                            }
                                        }((function () {
                                            return function (e, t, n) {
                                                return Ux.apply(this, arguments)
                                            }(o, t, r)
                                        }), {
                                            n: 1 / 0,
                                            minWait: 1e3,
                                            maxWait: 2500
                                        }),
                                        l = s.cancel;
                                    return s.promise.then((function (t) {
                                        var o = t.results,
                                            s = t.blockNumber;
                                        c.current = {
                                            cancellations: [],
                                            blockNumber: r
                                        };
                                        var l = d.slice(0, i).reduce((function (e, t) {
                                                return e + t.length
                                            }), 0),
                                            u = l + o.length,
                                            p = n.slice(l, u).reduce((function (e, t, n) {
                                                var r;
                                                o[n].success ? e.results[t] = null !== (r = o[n].returnData) && void 0 !== r ? r : null : e.erroredCalls.push(vr(t));
                                                return e
                                            }), {
                                                erroredCalls: [],
                                                results: {}
                                            }),
                                            b = p.erroredCalls,
                                            f = p.results;
                                        Object.keys(f).length > 0 && e(Ir({
                                            chainId: a,
                                            results: f,
                                            blockNumber: s
                                        })), b.length > 0 && (console.debug("Calls errored in fetch", b), e(kr({
                                            calls: b,
                                            chainId: a,
                                            fetchingBlockNumber: s
                                        })))
                                    })).catch((function (n) {
                                        n instanceof Sx ? console.debug("Cancelled fetch for blockNumber", r) : (console.error("Failed to fetch multicall chunk", t, a, n), e(kr({
                                            calls: t,
                                            chainId: a,
                                            fetchingBlockNumber: r
                                        })))
                                    })), l
                                }))
                            }
                        }
                    }
                }), [a, o, e, u, r]), null
            }

            function Bx() {
                var e = It(),
                    t = e.chainId,
                    n = e.library,
                    r = br(),
                    a = Object(d.c)(),
                    o = Object(d.d)((function (e) {
                        return e.transactions
                    })),
                    c = Object(i.useMemo)((function () {
                        var e;
                        return t && null !== (e = o[t]) && void 0 !== e ? e : {}
                    }), [t, o]),
                    s = function () {
                        var e = Object(d.c)();
                        return Object(i.useCallback)((function (t, n) {
                            e(dr({
                                content: t,
                                key: n
                            }))
                        }), [e])
                    }();
                return Object(i.useEffect)((function () {
                    t && n && r && Object.keys(c).filter((function (e) {
                        return function (e, t) {
                            if (t.receipt) return !1;
                            if (!t.lastCheckedBlockNumber) return !0;
                            var n = e - t.lastCheckedBlockNumber;
                            if (n < 1) return !1;
                            var r = ((new Date).getTime() - t.addedTime) / 1e3 / 60;
                            return r > 60 ? n > 9 : !(r > 5) || n > 2
                        }(r, c[e])
                    })).forEach((function (e) {
                        n.getTransactionReceipt(e).then((function (n) {
                            var i;
                            n ? (a(vo({
                                chainId: t,
                                hash: e,
                                receipt: {
                                    blockHash: n.blockHash,
                                    blockNumber: n.blockNumber,
                                    contractAddress: n.contractAddress,
                                    from: n.from,
                                    status: n.status,
                                    to: n.to,
                                    transactionHash: n.transactionHash,
                                    transactionIndex: n.transactionIndex
                                }
                            })), s({
                                txn: {
                                    hash: e,
                                    success: 1 === n.status,
                                    summary: null === (i = c[e]) || void 0 === i ? void 0 : i.summary
                                }
                            }, e)) : a(yo({
                                chainId: t,
                                hash: e,
                                blockNumber: r
                            }))
                        })).catch((function (t) {
                            console.error("failed to check transaction hash: ".concat(e), t)
                        }))
                    }))
                }), [t, n, c, r, a, s]), null
            }

            function Dx() {
                var e = Object(d.c)();
                return Object(i.useEffect)((function () {
                    var t, n = function (t) {
                            e(pi({
                                matchesDarkMode: t.matches
                            }))
                        },
                        r = null === (t = window) || void 0 === t ? void 0 : t.matchMedia("(prefers-color-scheme: dark)");
                    return e(pi({
                            matchesDarkMode: r.matches
                        })), (null === r || void 0 === r ? void 0 : r.addListener) ? null === r || void 0 === r || r.addListener(n) : (null === r || void 0 === r ? void 0 : r.addEventListener) && (null === r || void 0 === r || r.addEventListener("change", n)),
                        function () {
                            (null === r || void 0 === r ? void 0 : r.removeListener) ? null === r || void 0 === r || r.removeListener(n): (null === r || void 0 === r ? void 0 : r.removeEventListener) && (null === r || void 0 === r || r.removeEventListener("change", n))
                        }
                }), [e]), null
            }
            n(1771);
            var Px = Object(r.c)(pt);
            window.ethereum && (window.ethereum.autoRefreshOnNetworkChange = !1);
            var Lx = "G-RC7YJSBSEZ";

            function Fx() {
                return Object(Ct.jsxs)(Ct.Fragment, {
                    children: [Object(Ct.jsx)(Tx, {}), Object(Ct.jsx)(Dx, {}), Object(Ct.jsx)(Cx, {}), Object(Ct.jsx)(Bx, {}), Object(Ct.jsx)(Rx, {})]
                })
            }
            u.a.initialize(Lx, {
                gaOptions: {
                    storage: "none",
                    storeGac: !1
                }
            }), u.a.set({
                anonymizeIp: !0,
                customBrowserType: o.isMobile ? "web3" in window || "ethereum" in window ? "mobileWeb3" : "mobileRegular" : "desktop"
            }), s.a.render(Object(Ct.jsxs)(i.StrictMode, {
                children: [Object(Ct.jsx)(ro, {}), Object(Ct.jsx)(r.b, {
                    getLibrary: U,
                    children: Object(Ct.jsx)(Px, {
                        getLibrary: U,
                        children: Object(Ct.jsx)(Tt, {
                            children: Object(Ct.jsxs)(d.a, {
                                store: Yp,
                                children: [Object(Ct.jsx)(Fx, {}), Object(Ct.jsxs)(za, {
                                    children: [Object(Ct.jsx)(io, {}), Object(Ct.jsx)(p.a, {
                                        children: Object(Ct.jsx)(wx, {})
                                    })]
                                })]
                            })
                        })
                    })
                })]
            }), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            })).catch((function (e) {
                console.error(e.message)
            }))
        },
        391: function (e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        737: function (e, t, n) {},
        785: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_bxAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback","payable":true},{"inputs":[],"name":"bxAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"stateMutability":"payable","type":"receive","payable":true},{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"router","type":"address"},{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BxSwap.Trade","name":"trade","type":"tuple"},{"internalType":"uint256","name":"tipAmount","type":"uint256"}],"name":"swapExactETHForTokensWithTip","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"router","type":"address"},{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BxSwap.Trade","name":"trade","type":"tuple"},{"internalType":"uint256","name":"tipAmount","type":"uint256"}],"name":"swapETHForExactTokensWithTip","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"router","type":"address"},{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BxSwap.Trade","name":"trade","type":"tuple"}],"name":"swapExactTokensForTokensWithTip","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"router","type":"address"},{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BxSwap.Trade","name":"trade","type":"tuple"}],"name":"swapTokensForExactTokensWithTip","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"router","type":"address"},{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BxSwap.Trade","name":"trade","type":"tuple"}],"name":"swapExactTokensForETHWithTip","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"router","type":"address"},{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BxSwap.Trade","name":"trade","type":"tuple"}],"name":"swapTokensForExactETHWithTip","outputs":[],"stateMutability":"payable","type":"function","payable":true}]')
        },
        787: function (e) {
            e.exports = JSON.parse('{"name":"Unsupported Tokens","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["uniswap","unsupported"],"tokens":[{"name":"Gold Tether","address":"0x4922a015c4407F87432B179bb209e125432E4a2A","symbol":"XAUt","decimals":6,"chainId":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"},{"name":"Grump Cat","address":"0x93B2FfF814FCaEFFB01406e80B4Ecd89Ca6A021b","symbol":"GRUMPY","decimals":9,"chainId":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"}]}')
        },
        796: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"},{"internalType":"address[]","name":"_implementations","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"CodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"ImplementationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"acceptedCodes","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"acceptedImplementations","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"addCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_argentWallet","type":"address"}],"name":"addCodeAndImplementationFromWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_impl","type":"address"}],"name":"addImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCodes","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getImplementations","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"isArgentWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
        },
        797: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        798: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        799: function (e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        800: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        801: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]')
        },
        802: function (e) {
            e.exports = JSON.parse('[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":"22405"},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":"631"},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":"1248"},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":"259486"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":"38422"},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":"38016"},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":"182636"},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":"35897"},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":"35927"},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":"6612"},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":"6642"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":"873"},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":"903"},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":"933"},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":"963"},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":"1126"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":"1195"},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":"1186"},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":"1415"},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":"1246"}]')
        },
        803: function (e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        804: function (e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"nonces","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        861: function (e, t) {},
        884: function (e, t) {},
        886: function (e, t) {},
        900: function (e, t) {},
        916: function (e, t) {},
        918: function (e, t) {}
    },
    [
        [1772, 2, 3]
    ]
]);
//# sourceMappingURL=main.acbeca35.chunk.js.map