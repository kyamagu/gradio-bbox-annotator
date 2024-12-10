const {
  SvelteComponent: h,
  append_hydration: y,
  attr: c,
  children: b,
  claim_element: u,
  detach: f,
  element: _,
  empty: d,
  init: k,
  insert_hydration: v,
  noop: o,
  safe_not_equal: p,
  src_url_equal: m,
  toggle_class: r
} = window.__gradio__svelte__internal;
function g(s) {
  let l, e, t;
  return {
    c() {
      l = _("div"), e = _("img"), this.h();
    },
    l(i) {
      l = u(i, "DIV", { class: !0 });
      var a = b(l);
      e = u(a, "IMG", { src: !0, alt: !0, class: !0 }), a.forEach(f), this.h();
    },
    h() {
      m(e.src, t = /*value*/
      s[0].image.url) || c(e, "src", t), c(e, "alt", ""), c(e, "class", "svelte-giydt1"), c(l, "class", "container svelte-giydt1"), r(
        l,
        "table",
        /*type*/
        s[1] === "table"
      ), r(
        l,
        "gallery",
        /*type*/
        s[1] === "gallery"
      ), r(
        l,
        "selected",
        /*selected*/
        s[2]
      );
    },
    m(i, a) {
      v(i, l, a), y(l, e);
    },
    p(i, a) {
      a & /*value*/
      1 && !m(e.src, t = /*value*/
      i[0].image.url) && c(e, "src", t), a & /*type*/
      2 && r(
        l,
        "table",
        /*type*/
        i[1] === "table"
      ), a & /*type*/
      2 && r(
        l,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), a & /*selected*/
      4 && r(
        l,
        "selected",
        /*selected*/
        i[2]
      );
    },
    d(i) {
      i && f(l);
    }
  };
}
function q(s) {
  let l, e = (
    /*value*/
    s[0] && g(s)
  );
  return {
    c() {
      e && e.c(), l = d();
    },
    l(t) {
      e && e.l(t), l = d();
    },
    m(t, i) {
      e && e.m(t, i), v(t, l, i);
    },
    p(t, [i]) {
      /*value*/
      t[0] ? e ? e.p(t, i) : (e = g(t), e.c(), e.m(l.parentNode, l)) : e && (e.d(1), e = null);
    },
    i: o,
    o,
    d(t) {
      t && f(l), e && e.d(t);
    }
  };
}
function w(s, l, e) {
  let { value: t } = l, { type: i } = l, { selected: a = !1 } = l;
  return s.$$set = (n) => {
    "value" in n && e(0, t = n.value), "type" in n && e(1, i = n.type), "selected" in n && e(2, a = n.selected);
  }, [t, i, a];
}
class E extends h {
  constructor(l) {
    super(), k(this, l, w, q, p, { value: 0, type: 1, selected: 2 });
  }
}
export {
  E as default
};
