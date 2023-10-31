import {
  S as y,
  i as b,
  s as S,
  k as d,
  q as v,
  a as E,
  l as _,
  m as f,
  r as g,
  h as p,
  c as P,
  b as j,
  D as r,
  u as q,
  H as x,
} from "../chunks/index.dada67a2.js";
console.log("runs on client");
const O = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
function D(c) {
  let e,
    t,
    n,
    o,
    l,
    i = c[0].message + "",
    m;
  return {
    c() {
      (e = d("div")),
        (t = d("h1")),
        (n = v("Nice example of an very simple component")),
        (o = E()),
        (l = d("p")),
        (m = v(i));
    },
    l(s) {
      e = _(s, "DIV", {});
      var a = f(e);
      t = _(a, "H1", {});
      var u = f(t);
      (n = g(u, "Nice example of an very simple component")),
        u.forEach(p),
        (o = P(a)),
        (l = _(a, "P", {}));
      var h = f(l);
      (m = g(h, i)), h.forEach(p), a.forEach(p);
    },
    m(s, a) {
      j(s, e, a), r(e, t), r(t, n), r(e, o), r(e, l), r(l, m);
    },
    p(s, [a]) {
      a & 1 && i !== (i = s[0].message + "") && q(m, i);
    },
    i: x,
    o: x,
    d(s) {
      s && p(e);
    },
  };
}
function H(c, e, t) {
  let { data: n } = e;
  return (
    console.log(n),
    (c.$$set = (o) => {
      "data" in o && t(0, (n = o.data));
    }),
    [n]
  );
}
class k extends y {
  constructor(e) {
    super(), b(this, e, H, D, S, { data: 0 });
  }
}
export { k as component, O as universal };
