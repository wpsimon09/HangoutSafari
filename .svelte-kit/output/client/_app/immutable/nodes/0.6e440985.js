import {
  S as C,
  i as D,
  s as F,
  C as I,
  k as d,
  a as K,
  q as k,
  l as p,
  m as h,
  h as _,
  c as O,
  r as y,
  n as A,
  b as j,
  D as o,
  E as w,
  F as x,
  G,
  g as L,
  d as M,
} from "../chunks/index.dada67a2.js";
function N(r) {
  let t, i, u, n, a, m, f, $, E, c;
  const g = r[1].default,
    s = I(g, r, r[0], null);
  return {
    c() {
      (t = d("div")),
        (i = d("main")),
        s && s.c(),
        (u = K()),
        (n = d("footer")),
        (a = d("p")),
        (m = k("visit ")),
        (f = d("a")),
        ($ = k("kit.svelte.dev")),
        (E = k(" to learn SvelteKit")),
        this.h();
    },
    l(e) {
      t = p(e, "DIV", { class: !0 });
      var l = h(t);
      i = p(l, "MAIN", {});
      var S = h(i);
      s && s.l(S), S.forEach(_), (u = O(l)), (n = p(l, "FOOTER", {}));
      var b = h(n);
      a = p(b, "P", {});
      var v = h(a);
      (m = y(v, "visit ")), (f = p(v, "A", { href: !0 }));
      var q = h(f);
      ($ = y(q, "kit.svelte.dev")),
        q.forEach(_),
        (E = y(v, " to learn SvelteKit")),
        v.forEach(_),
        b.forEach(_),
        l.forEach(_),
        this.h();
    },
    h() {
      A(f, "href", "https://kit.svelte.dev"),
        A(t, "class", "flex flex-col h-screen justify-between");
    },
    m(e, l) {
      j(e, t, l),
        o(t, i),
        s && s.m(i, null),
        o(t, u),
        o(t, n),
        o(n, a),
        o(a, m),
        o(a, f),
        o(f, $),
        o(a, E),
        (c = !0);
    },
    p(e, [l]) {
      s &&
        s.p &&
        (!c || l & 1) &&
        w(s, g, e, e[0], c ? G(g, e[0], l, null) : x(e[0]), null);
    },
    i(e) {
      c || (L(s, e), (c = !0));
    },
    o(e) {
      M(s, e), (c = !1);
    },
    d(e) {
      e && _(t), s && s.d(e);
    },
  };
}
function P(r, t, i) {
  let { $$slots: u = {}, $$scope: n } = t;
  return (
    (r.$$set = (a) => {
      "$$scope" in a && i(0, (n = a.$$scope));
    }),
    [n, u]
  );
}
class T extends C {
  constructor(t) {
    super(), D(this, t, P, N, F, {});
  }
}
export { T as component };
