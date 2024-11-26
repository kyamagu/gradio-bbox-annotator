var Gh = Object.defineProperty;
var Ts = (r) => {
  throw TypeError(r);
};
var Vh = (r, e, t) => e in r ? Gh(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var _e = (r, e, t) => Vh(r, typeof e != "symbol" ? e + "" : e, t), Ja = (r, e, t) => e.has(r) || Ts("Cannot " + t);
var hr = (r, e, t) => (Ja(r, e, "read from private field"), t ? t.call(r) : e.get(r)), Ka = (r, e, t) => e.has(r) ? Ts("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Cs = (r, e, t, n) => (Ja(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), Tn = (r, e, t) => (Ja(r, e, "access private method"), t);
const {
  SvelteComponent: jh,
  assign: Wh,
  children: Xh,
  claim_element: $h,
  create_slot: Yh,
  detach: Ms,
  element: Zh,
  get_all_dirty_from_scope: Qh,
  get_slot_changes: Jh,
  get_spread_update: Kh,
  init: e4,
  insert_hydration: t4,
  safe_not_equal: r4,
  set_dynamic_element_data: Bs,
  set_style: Ue,
  toggle_class: st,
  transition_in: a1,
  transition_out: i1,
  update_slot_base: n4
} = window.__gradio__svelte__internal;
function a4(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[22].default
  ), i = Yh(
    a,
    r,
    /*$$scope*/
    r[21],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      r[10]
    ) },
    { id: (
      /*elem_id*/
      r[5]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      r[6].join(" ") + " svelte-dbzldu"
    }
  ], s = {};
  for (let o = 0; o < l.length; o += 1)
    s = Wh(s, l[o]);
  return {
    c() {
      e = Zh(
        /*tag*/
        r[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = $h(
        o,
        /*tag*/
        (r[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var u = Xh(e);
      i && i.l(u), u.forEach(Ms), this.h();
    },
    h() {
      Bs(
        /*tag*/
        r[18]
      )(e, s), st(
        e,
        "hidden",
        /*visible*/
        r[13] === !1
      ), st(
        e,
        "padded",
        /*padding*/
        r[9]
      ), st(
        e,
        "flex",
        /*flex*/
        r[0]
      ), st(
        e,
        "border_focus",
        /*border_mode*/
        r[8] === "focus"
      ), st(
        e,
        "border_contrast",
        /*border_mode*/
        r[8] === "contrast"
      ), st(e, "hide-container", !/*explicit_call*/
      r[11] && !/*container*/
      r[12]), st(
        e,
        "auto-margin",
        /*scale*/
        r[16] === null
      ), Ue(
        e,
        "height",
        /*get_dimension*/
        r[19](
          /*height*/
          r[1]
        )
      ), Ue(
        e,
        "min-height",
        /*get_dimension*/
        r[19](
          /*min_height*/
          r[2]
        )
      ), Ue(
        e,
        "max-height",
        /*get_dimension*/
        r[19](
          /*max_height*/
          r[3]
        )
      ), Ue(e, "width", typeof /*width*/
      r[4] == "number" ? `calc(min(${/*width*/
      r[4]}px, 100%))` : (
        /*get_dimension*/
        r[19](
          /*width*/
          r[4]
        )
      )), Ue(
        e,
        "border-style",
        /*variant*/
        r[7]
      ), Ue(
        e,
        "overflow",
        /*allow_overflow*/
        r[14] ? (
          /*overflow_behavior*/
          r[15]
        ) : "hidden"
      ), Ue(
        e,
        "flex-grow",
        /*scale*/
        r[16]
      ), Ue(e, "min-width", `calc(min(${/*min_width*/
      r[17]}px, 100%))`), Ue(e, "border-width", "var(--block-border-width)");
    },
    m(o, u) {
      t4(o, e, u), i && i.m(e, null), n = !0;
    },
    p(o, u) {
      i && i.p && (!n || u & /*$$scope*/
      2097152) && n4(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        n ? Jh(
          a,
          /*$$scope*/
          o[21],
          u,
          null
        ) : Qh(
          /*$$scope*/
          o[21]
        ),
        null
      ), Bs(
        /*tag*/
        o[18]
      )(e, s = Kh(l, [
        (!n || u & /*test_id*/
        1024) && { "data-testid": (
          /*test_id*/
          o[10]
        ) },
        (!n || u & /*elem_id*/
        32) && { id: (
          /*elem_id*/
          o[5]
        ) },
        (!n || u & /*elem_classes*/
        64 && t !== (t = "block " + /*elem_classes*/
        o[6].join(" ") + " svelte-dbzldu")) && { class: t }
      ])), st(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), st(
        e,
        "padded",
        /*padding*/
        o[9]
      ), st(
        e,
        "flex",
        /*flex*/
        o[0]
      ), st(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), st(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), st(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), st(
        e,
        "auto-margin",
        /*scale*/
        o[16] === null
      ), u & /*height*/
      2 && Ue(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), u & /*min_height*/
      4 && Ue(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), u & /*max_height*/
      8 && Ue(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), u & /*width*/
      16 && Ue(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), u & /*variant*/
      128 && Ue(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), u & /*allow_overflow, overflow_behavior*/
      49152 && Ue(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), u & /*scale*/
      65536 && Ue(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), u & /*min_width*/
      131072 && Ue(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      n || (a1(i, o), n = !0);
    },
    o(o) {
      i1(i, o), n = !1;
    },
    d(o) {
      o && Ms(e), i && i.d(o);
    }
  };
}
function i4(r) {
  let e, t = (
    /*tag*/
    r[18] && a4(r)
  );
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, a) {
      t && t.m(n, a), e = !0;
    },
    p(n, [a]) {
      /*tag*/
      n[18] && t.p(n, a);
    },
    i(n) {
      e || (a1(t, n), e = !0);
    },
    o(n) {
      i1(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function l4(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: u = "" } = e, { elem_classes: h = [] } = e, { variant: m = "solid" } = e, { border_mode: p = "base" } = e, { padding: g = !0 } = e, { type: v = "normal" } = e, { test_id: w = void 0 } = e, { explicit_call: T = !1 } = e, { container: S = !0 } = e, { visible: D = !0 } = e, { allow_overflow: _ = !0 } = e, { overflow_behavior: A = "auto" } = e, { scale: F = null } = e, { min_width: M = 0 } = e, { flex: B = !1 } = e;
  D || (B = !1);
  let U = v === "fieldset" ? "fieldset" : "div";
  const I = (z) => {
    if (z !== void 0) {
      if (typeof z == "number")
        return z + "px";
      if (typeof z == "string")
        return z;
    }
  };
  return r.$$set = (z) => {
    "height" in z && t(1, i = z.height), "min_height" in z && t(2, l = z.min_height), "max_height" in z && t(3, s = z.max_height), "width" in z && t(4, o = z.width), "elem_id" in z && t(5, u = z.elem_id), "elem_classes" in z && t(6, h = z.elem_classes), "variant" in z && t(7, m = z.variant), "border_mode" in z && t(8, p = z.border_mode), "padding" in z && t(9, g = z.padding), "type" in z && t(20, v = z.type), "test_id" in z && t(10, w = z.test_id), "explicit_call" in z && t(11, T = z.explicit_call), "container" in z && t(12, S = z.container), "visible" in z && t(13, D = z.visible), "allow_overflow" in z && t(14, _ = z.allow_overflow), "overflow_behavior" in z && t(15, A = z.overflow_behavior), "scale" in z && t(16, F = z.scale), "min_width" in z && t(17, M = z.min_width), "flex" in z && t(0, B = z.flex), "$$scope" in z && t(21, a = z.$$scope);
  }, [
    B,
    i,
    l,
    s,
    o,
    u,
    h,
    m,
    p,
    g,
    w,
    T,
    S,
    D,
    _,
    A,
    F,
    M,
    U,
    I,
    v,
    a,
    n
  ];
}
class l1 extends jh {
  constructor(e) {
    super(), e4(this, e, l4, i4, r4, {
      height: 1,
      min_height: 2,
      max_height: 3,
      width: 4,
      elem_id: 5,
      elem_classes: 6,
      variant: 7,
      border_mode: 8,
      padding: 9,
      type: 20,
      test_id: 10,
      explicit_call: 11,
      container: 12,
      visible: 13,
      allow_overflow: 14,
      overflow_behavior: 15,
      scale: 16,
      min_width: 17,
      flex: 0
    });
  }
}
class Sl {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Sl(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Fl {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Fl(t, Sl.range(this, e));
  }
}
class $ {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var n = "KaTeX parse error: " + e, a, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var s = l.lexer.input;
      a = l.start, i = l.end, a === s.length ? n += " at end of input: " : n += " at position " + (a + 1) + ": ";
      var o = s.slice(a, i).replace(/[^]/g, "$&̲"), u;
      a > 15 ? u = "…" + s.slice(a - 15, a) : u = s.slice(0, a);
      var h;
      i + 15 < s.length ? h = s.slice(i, i + 15) + "…" : h = s.slice(i), n += u + o + h;
    }
    var m = new Error(n);
    return m.name = "ParseError", m.__proto__ = $.prototype, m.position = a, a != null && i != null && (m.length = i - a), m.rawMessage = e, m;
  }
}
$.prototype.__proto__ = Error.prototype;
var s4 = function(e, t) {
  return e.indexOf(t) !== -1;
}, o4 = function(e, t) {
  return e === void 0 ? t : e;
}, u4 = /([A-Z])/g, c4 = function(e) {
  return e.replace(u4, "-$1").toLowerCase();
}, h4 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, f4 = /[&><"']/g;
function m4(r) {
  return String(r).replace(f4, (e) => h4[e]);
}
var s1 = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, d4 = function(e) {
  var t = s1(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, p4 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, g4 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, Z = {
  contains: s4,
  deflt: o4,
  escape: m4,
  hyphenate: c4,
  getBaseElem: s1,
  isCharacterBox: d4,
  protocolFromUrl: g4
};
class b0 {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Gt[b4[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Gt[v4[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Gt[_4[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Gt[y4[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Gt[w4[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Gt[k4[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Tl = 0, la = 1, wr = 2, h0 = 3, sn = 4, wt = 5, Dr = 6, nt = 7, Gt = [new b0(Tl, 0, !1), new b0(la, 0, !0), new b0(wr, 1, !1), new b0(h0, 1, !0), new b0(sn, 2, !1), new b0(wt, 2, !0), new b0(Dr, 3, !1), new b0(nt, 3, !0)], b4 = [sn, wt, sn, wt, Dr, nt, Dr, nt], v4 = [wt, wt, wt, wt, nt, nt, nt, nt], _4 = [wr, h0, sn, wt, Dr, nt, Dr, nt], y4 = [h0, h0, wt, wt, nt, nt, nt, nt], w4 = [la, la, h0, h0, wt, wt, nt, nt], k4 = [Tl, la, wr, h0, wr, h0, wr, h0], Q = {
  DISPLAY: Gt[Tl],
  TEXT: Gt[wr],
  SCRIPT: Gt[sn],
  SCRIPTSCRIPT: Gt[Dr]
}, ji = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function D4(r) {
  for (var e = 0; e < ji.length; e++)
    for (var t = ji[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var ea = [];
ji.forEach((r) => r.blocks.forEach((e) => ea.push(...e)));
function x4(r) {
  for (var e = 0; e < ea.length; e += 2)
    if (r >= ea[e] && r <= ea[e + 1])
      return !0;
  return !1;
}
var fr = 80, A4 = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, E4 = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, S4 = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, F4 = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, T4 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, C4 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, M4 = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, B4 = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = A4(t, fr);
      break;
    case "sqrtSize1":
      a = E4(t, fr);
      break;
    case "sqrtSize2":
      a = S4(t, fr);
      break;
    case "sqrtSize3":
      a = F4(t, fr);
      break;
    case "sqrtSize4":
      a = T4(t, fr);
      break;
    case "sqrtTall":
      a = M4(t, fr, n);
  }
  return a;
}, N4 = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Ns = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, I4 = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class bn {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var c0 = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, Is = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Cl(r, e, t) {
  if (!c0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = c0[e][n];
  if (!a && r[0] in Is && (n = Is[r[0]].charCodeAt(0), a = c0[e][n]), !a && t === "text" && x4(n) && (a = c0[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Wi = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, z4 = {
  ex: !0,
  em: !0,
  mu: !0
}, R4 = function(e) {
  return typeof e != "string" && (e = e.unit), e in Wi || e in z4 || e === "ex";
}, Fe = function(e, t) {
  var n;
  if (e.unit in Wi)
    n = Wi[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new $("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, q = function(e) {
  return +e.toFixed(4) + "em";
}, E0 = function(e) {
  return e.filter((t) => t).join(" ");
}, o1 = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, u1 = function(e) {
  var t = document.createElement(e);
  t.className = E0(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, c1 = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Z.escape(E0(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += Z.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + Z.escape(n) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + Z.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class Ma {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, o1.call(this, e, n, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  toNode() {
    return u1.call(this, "span");
  }
  toMarkup() {
    return c1.call(this, "span");
  }
}
class h1 {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, o1.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  toNode() {
    return u1.call(this, "a");
  }
  toMarkup() {
    return c1.call(this, "a");
  }
}
class L4 {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + Z.escape(this.src) + '"' + (' alt="' + Z.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += Z.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + Z.escape(t) + '"'), e += "'/>", e;
  }
}
var O4 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Jt {
  constructor(e, t, n, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var u = D4(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = O4[this.text]);
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = q(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = E0(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t = t || document.createElement("span"), t.style[n] = this.style[n]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Z.escape(E0(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += Z.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + Z.escape(n) + '"');
    var i = Z.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class S0 {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + Z.escape(this.attributes[t]) + '"');
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class X0 {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Ns[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + Z.escape(this.alternate) + '"/>' : '<path d="' + Z.escape(Ns[this.pathName]) + '"/>';
  }
}
class zs {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + Z.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Rs(r) {
  if (r instanceof Jt)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function H4(r) {
  if (r instanceof Ma)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var P4 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Ie = {
  math: {},
  text: {}
};
function c(r, e, t, n, a, i) {
  Ie[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (Ie[r][n] = Ie[r][a]);
}
var f = "math", N = "text", d = "main", y = "ams", De = "accent-token", V = "bin", it = "close", Mr = "inner", Y = "mathord", Re = "op-token", bt = "open", Ba = "punct", k = "rel", g0 = "spacing", x = "textord";
c(f, d, k, "≡", "\\equiv", !0);
c(f, d, k, "≺", "\\prec", !0);
c(f, d, k, "≻", "\\succ", !0);
c(f, d, k, "∼", "\\sim", !0);
c(f, d, k, "⊥", "\\perp");
c(f, d, k, "⪯", "\\preceq", !0);
c(f, d, k, "⪰", "\\succeq", !0);
c(f, d, k, "≃", "\\simeq", !0);
c(f, d, k, "∣", "\\mid", !0);
c(f, d, k, "≪", "\\ll", !0);
c(f, d, k, "≫", "\\gg", !0);
c(f, d, k, "≍", "\\asymp", !0);
c(f, d, k, "∥", "\\parallel");
c(f, d, k, "⋈", "\\bowtie", !0);
c(f, d, k, "⌣", "\\smile", !0);
c(f, d, k, "⊑", "\\sqsubseteq", !0);
c(f, d, k, "⊒", "\\sqsupseteq", !0);
c(f, d, k, "≐", "\\doteq", !0);
c(f, d, k, "⌢", "\\frown", !0);
c(f, d, k, "∋", "\\ni", !0);
c(f, d, k, "∝", "\\propto", !0);
c(f, d, k, "⊢", "\\vdash", !0);
c(f, d, k, "⊣", "\\dashv", !0);
c(f, d, k, "∋", "\\owns");
c(f, d, Ba, ".", "\\ldotp");
c(f, d, Ba, "⋅", "\\cdotp");
c(f, d, x, "#", "\\#");
c(N, d, x, "#", "\\#");
c(f, d, x, "&", "\\&");
c(N, d, x, "&", "\\&");
c(f, d, x, "ℵ", "\\aleph", !0);
c(f, d, x, "∀", "\\forall", !0);
c(f, d, x, "ℏ", "\\hbar", !0);
c(f, d, x, "∃", "\\exists", !0);
c(f, d, x, "∇", "\\nabla", !0);
c(f, d, x, "♭", "\\flat", !0);
c(f, d, x, "ℓ", "\\ell", !0);
c(f, d, x, "♮", "\\natural", !0);
c(f, d, x, "♣", "\\clubsuit", !0);
c(f, d, x, "℘", "\\wp", !0);
c(f, d, x, "♯", "\\sharp", !0);
c(f, d, x, "♢", "\\diamondsuit", !0);
c(f, d, x, "ℜ", "\\Re", !0);
c(f, d, x, "♡", "\\heartsuit", !0);
c(f, d, x, "ℑ", "\\Im", !0);
c(f, d, x, "♠", "\\spadesuit", !0);
c(f, d, x, "§", "\\S", !0);
c(N, d, x, "§", "\\S");
c(f, d, x, "¶", "\\P", !0);
c(N, d, x, "¶", "\\P");
c(f, d, x, "†", "\\dag");
c(N, d, x, "†", "\\dag");
c(N, d, x, "†", "\\textdagger");
c(f, d, x, "‡", "\\ddag");
c(N, d, x, "‡", "\\ddag");
c(N, d, x, "‡", "\\textdaggerdbl");
c(f, d, it, "⎱", "\\rmoustache", !0);
c(f, d, bt, "⎰", "\\lmoustache", !0);
c(f, d, it, "⟯", "\\rgroup", !0);
c(f, d, bt, "⟮", "\\lgroup", !0);
c(f, d, V, "∓", "\\mp", !0);
c(f, d, V, "⊖", "\\ominus", !0);
c(f, d, V, "⊎", "\\uplus", !0);
c(f, d, V, "⊓", "\\sqcap", !0);
c(f, d, V, "∗", "\\ast");
c(f, d, V, "⊔", "\\sqcup", !0);
c(f, d, V, "◯", "\\bigcirc", !0);
c(f, d, V, "∙", "\\bullet", !0);
c(f, d, V, "‡", "\\ddagger");
c(f, d, V, "≀", "\\wr", !0);
c(f, d, V, "⨿", "\\amalg");
c(f, d, V, "&", "\\And");
c(f, d, k, "⟵", "\\longleftarrow", !0);
c(f, d, k, "⇐", "\\Leftarrow", !0);
c(f, d, k, "⟸", "\\Longleftarrow", !0);
c(f, d, k, "⟶", "\\longrightarrow", !0);
c(f, d, k, "⇒", "\\Rightarrow", !0);
c(f, d, k, "⟹", "\\Longrightarrow", !0);
c(f, d, k, "↔", "\\leftrightarrow", !0);
c(f, d, k, "⟷", "\\longleftrightarrow", !0);
c(f, d, k, "⇔", "\\Leftrightarrow", !0);
c(f, d, k, "⟺", "\\Longleftrightarrow", !0);
c(f, d, k, "↦", "\\mapsto", !0);
c(f, d, k, "⟼", "\\longmapsto", !0);
c(f, d, k, "↗", "\\nearrow", !0);
c(f, d, k, "↩", "\\hookleftarrow", !0);
c(f, d, k, "↪", "\\hookrightarrow", !0);
c(f, d, k, "↘", "\\searrow", !0);
c(f, d, k, "↼", "\\leftharpoonup", !0);
c(f, d, k, "⇀", "\\rightharpoonup", !0);
c(f, d, k, "↙", "\\swarrow", !0);
c(f, d, k, "↽", "\\leftharpoondown", !0);
c(f, d, k, "⇁", "\\rightharpoondown", !0);
c(f, d, k, "↖", "\\nwarrow", !0);
c(f, d, k, "⇌", "\\rightleftharpoons", !0);
c(f, y, k, "≮", "\\nless", !0);
c(f, y, k, "", "\\@nleqslant");
c(f, y, k, "", "\\@nleqq");
c(f, y, k, "⪇", "\\lneq", !0);
c(f, y, k, "≨", "\\lneqq", !0);
c(f, y, k, "", "\\@lvertneqq");
c(f, y, k, "⋦", "\\lnsim", !0);
c(f, y, k, "⪉", "\\lnapprox", !0);
c(f, y, k, "⊀", "\\nprec", !0);
c(f, y, k, "⋠", "\\npreceq", !0);
c(f, y, k, "⋨", "\\precnsim", !0);
c(f, y, k, "⪹", "\\precnapprox", !0);
c(f, y, k, "≁", "\\nsim", !0);
c(f, y, k, "", "\\@nshortmid");
c(f, y, k, "∤", "\\nmid", !0);
c(f, y, k, "⊬", "\\nvdash", !0);
c(f, y, k, "⊭", "\\nvDash", !0);
c(f, y, k, "⋪", "\\ntriangleleft");
c(f, y, k, "⋬", "\\ntrianglelefteq", !0);
c(f, y, k, "⊊", "\\subsetneq", !0);
c(f, y, k, "", "\\@varsubsetneq");
c(f, y, k, "⫋", "\\subsetneqq", !0);
c(f, y, k, "", "\\@varsubsetneqq");
c(f, y, k, "≯", "\\ngtr", !0);
c(f, y, k, "", "\\@ngeqslant");
c(f, y, k, "", "\\@ngeqq");
c(f, y, k, "⪈", "\\gneq", !0);
c(f, y, k, "≩", "\\gneqq", !0);
c(f, y, k, "", "\\@gvertneqq");
c(f, y, k, "⋧", "\\gnsim", !0);
c(f, y, k, "⪊", "\\gnapprox", !0);
c(f, y, k, "⊁", "\\nsucc", !0);
c(f, y, k, "⋡", "\\nsucceq", !0);
c(f, y, k, "⋩", "\\succnsim", !0);
c(f, y, k, "⪺", "\\succnapprox", !0);
c(f, y, k, "≆", "\\ncong", !0);
c(f, y, k, "", "\\@nshortparallel");
c(f, y, k, "∦", "\\nparallel", !0);
c(f, y, k, "⊯", "\\nVDash", !0);
c(f, y, k, "⋫", "\\ntriangleright");
c(f, y, k, "⋭", "\\ntrianglerighteq", !0);
c(f, y, k, "", "\\@nsupseteqq");
c(f, y, k, "⊋", "\\supsetneq", !0);
c(f, y, k, "", "\\@varsupsetneq");
c(f, y, k, "⫌", "\\supsetneqq", !0);
c(f, y, k, "", "\\@varsupsetneqq");
c(f, y, k, "⊮", "\\nVdash", !0);
c(f, y, k, "⪵", "\\precneqq", !0);
c(f, y, k, "⪶", "\\succneqq", !0);
c(f, y, k, "", "\\@nsubseteqq");
c(f, y, V, "⊴", "\\unlhd");
c(f, y, V, "⊵", "\\unrhd");
c(f, y, k, "↚", "\\nleftarrow", !0);
c(f, y, k, "↛", "\\nrightarrow", !0);
c(f, y, k, "⇍", "\\nLeftarrow", !0);
c(f, y, k, "⇏", "\\nRightarrow", !0);
c(f, y, k, "↮", "\\nleftrightarrow", !0);
c(f, y, k, "⇎", "\\nLeftrightarrow", !0);
c(f, y, k, "△", "\\vartriangle");
c(f, y, x, "ℏ", "\\hslash");
c(f, y, x, "▽", "\\triangledown");
c(f, y, x, "◊", "\\lozenge");
c(f, y, x, "Ⓢ", "\\circledS");
c(f, y, x, "®", "\\circledR");
c(N, y, x, "®", "\\circledR");
c(f, y, x, "∡", "\\measuredangle", !0);
c(f, y, x, "∄", "\\nexists");
c(f, y, x, "℧", "\\mho");
c(f, y, x, "Ⅎ", "\\Finv", !0);
c(f, y, x, "⅁", "\\Game", !0);
c(f, y, x, "‵", "\\backprime");
c(f, y, x, "▲", "\\blacktriangle");
c(f, y, x, "▼", "\\blacktriangledown");
c(f, y, x, "■", "\\blacksquare");
c(f, y, x, "⧫", "\\blacklozenge");
c(f, y, x, "★", "\\bigstar");
c(f, y, x, "∢", "\\sphericalangle", !0);
c(f, y, x, "∁", "\\complement", !0);
c(f, y, x, "ð", "\\eth", !0);
c(N, d, x, "ð", "ð");
c(f, y, x, "╱", "\\diagup");
c(f, y, x, "╲", "\\diagdown");
c(f, y, x, "□", "\\square");
c(f, y, x, "□", "\\Box");
c(f, y, x, "◊", "\\Diamond");
c(f, y, x, "¥", "\\yen", !0);
c(N, y, x, "¥", "\\yen", !0);
c(f, y, x, "✓", "\\checkmark", !0);
c(N, y, x, "✓", "\\checkmark");
c(f, y, x, "ℶ", "\\beth", !0);
c(f, y, x, "ℸ", "\\daleth", !0);
c(f, y, x, "ℷ", "\\gimel", !0);
c(f, y, x, "ϝ", "\\digamma", !0);
c(f, y, x, "ϰ", "\\varkappa");
c(f, y, bt, "┌", "\\@ulcorner", !0);
c(f, y, it, "┐", "\\@urcorner", !0);
c(f, y, bt, "└", "\\@llcorner", !0);
c(f, y, it, "┘", "\\@lrcorner", !0);
c(f, y, k, "≦", "\\leqq", !0);
c(f, y, k, "⩽", "\\leqslant", !0);
c(f, y, k, "⪕", "\\eqslantless", !0);
c(f, y, k, "≲", "\\lesssim", !0);
c(f, y, k, "⪅", "\\lessapprox", !0);
c(f, y, k, "≊", "\\approxeq", !0);
c(f, y, V, "⋖", "\\lessdot");
c(f, y, k, "⋘", "\\lll", !0);
c(f, y, k, "≶", "\\lessgtr", !0);
c(f, y, k, "⋚", "\\lesseqgtr", !0);
c(f, y, k, "⪋", "\\lesseqqgtr", !0);
c(f, y, k, "≑", "\\doteqdot");
c(f, y, k, "≓", "\\risingdotseq", !0);
c(f, y, k, "≒", "\\fallingdotseq", !0);
c(f, y, k, "∽", "\\backsim", !0);
c(f, y, k, "⋍", "\\backsimeq", !0);
c(f, y, k, "⫅", "\\subseteqq", !0);
c(f, y, k, "⋐", "\\Subset", !0);
c(f, y, k, "⊏", "\\sqsubset", !0);
c(f, y, k, "≼", "\\preccurlyeq", !0);
c(f, y, k, "⋞", "\\curlyeqprec", !0);
c(f, y, k, "≾", "\\precsim", !0);
c(f, y, k, "⪷", "\\precapprox", !0);
c(f, y, k, "⊲", "\\vartriangleleft");
c(f, y, k, "⊴", "\\trianglelefteq");
c(f, y, k, "⊨", "\\vDash", !0);
c(f, y, k, "⊪", "\\Vvdash", !0);
c(f, y, k, "⌣", "\\smallsmile");
c(f, y, k, "⌢", "\\smallfrown");
c(f, y, k, "≏", "\\bumpeq", !0);
c(f, y, k, "≎", "\\Bumpeq", !0);
c(f, y, k, "≧", "\\geqq", !0);
c(f, y, k, "⩾", "\\geqslant", !0);
c(f, y, k, "⪖", "\\eqslantgtr", !0);
c(f, y, k, "≳", "\\gtrsim", !0);
c(f, y, k, "⪆", "\\gtrapprox", !0);
c(f, y, V, "⋗", "\\gtrdot");
c(f, y, k, "⋙", "\\ggg", !0);
c(f, y, k, "≷", "\\gtrless", !0);
c(f, y, k, "⋛", "\\gtreqless", !0);
c(f, y, k, "⪌", "\\gtreqqless", !0);
c(f, y, k, "≖", "\\eqcirc", !0);
c(f, y, k, "≗", "\\circeq", !0);
c(f, y, k, "≜", "\\triangleq", !0);
c(f, y, k, "∼", "\\thicksim");
c(f, y, k, "≈", "\\thickapprox");
c(f, y, k, "⫆", "\\supseteqq", !0);
c(f, y, k, "⋑", "\\Supset", !0);
c(f, y, k, "⊐", "\\sqsupset", !0);
c(f, y, k, "≽", "\\succcurlyeq", !0);
c(f, y, k, "⋟", "\\curlyeqsucc", !0);
c(f, y, k, "≿", "\\succsim", !0);
c(f, y, k, "⪸", "\\succapprox", !0);
c(f, y, k, "⊳", "\\vartriangleright");
c(f, y, k, "⊵", "\\trianglerighteq");
c(f, y, k, "⊩", "\\Vdash", !0);
c(f, y, k, "∣", "\\shortmid");
c(f, y, k, "∥", "\\shortparallel");
c(f, y, k, "≬", "\\between", !0);
c(f, y, k, "⋔", "\\pitchfork", !0);
c(f, y, k, "∝", "\\varpropto");
c(f, y, k, "◀", "\\blacktriangleleft");
c(f, y, k, "∴", "\\therefore", !0);
c(f, y, k, "∍", "\\backepsilon");
c(f, y, k, "▶", "\\blacktriangleright");
c(f, y, k, "∵", "\\because", !0);
c(f, y, k, "⋘", "\\llless");
c(f, y, k, "⋙", "\\gggtr");
c(f, y, V, "⊲", "\\lhd");
c(f, y, V, "⊳", "\\rhd");
c(f, y, k, "≂", "\\eqsim", !0);
c(f, d, k, "⋈", "\\Join");
c(f, y, k, "≑", "\\Doteq", !0);
c(f, y, V, "∔", "\\dotplus", !0);
c(f, y, V, "∖", "\\smallsetminus");
c(f, y, V, "⋒", "\\Cap", !0);
c(f, y, V, "⋓", "\\Cup", !0);
c(f, y, V, "⩞", "\\doublebarwedge", !0);
c(f, y, V, "⊟", "\\boxminus", !0);
c(f, y, V, "⊞", "\\boxplus", !0);
c(f, y, V, "⋇", "\\divideontimes", !0);
c(f, y, V, "⋉", "\\ltimes", !0);
c(f, y, V, "⋊", "\\rtimes", !0);
c(f, y, V, "⋋", "\\leftthreetimes", !0);
c(f, y, V, "⋌", "\\rightthreetimes", !0);
c(f, y, V, "⋏", "\\curlywedge", !0);
c(f, y, V, "⋎", "\\curlyvee", !0);
c(f, y, V, "⊝", "\\circleddash", !0);
c(f, y, V, "⊛", "\\circledast", !0);
c(f, y, V, "⋅", "\\centerdot");
c(f, y, V, "⊺", "\\intercal", !0);
c(f, y, V, "⋒", "\\doublecap");
c(f, y, V, "⋓", "\\doublecup");
c(f, y, V, "⊠", "\\boxtimes", !0);
c(f, y, k, "⇢", "\\dashrightarrow", !0);
c(f, y, k, "⇠", "\\dashleftarrow", !0);
c(f, y, k, "⇇", "\\leftleftarrows", !0);
c(f, y, k, "⇆", "\\leftrightarrows", !0);
c(f, y, k, "⇚", "\\Lleftarrow", !0);
c(f, y, k, "↞", "\\twoheadleftarrow", !0);
c(f, y, k, "↢", "\\leftarrowtail", !0);
c(f, y, k, "↫", "\\looparrowleft", !0);
c(f, y, k, "⇋", "\\leftrightharpoons", !0);
c(f, y, k, "↶", "\\curvearrowleft", !0);
c(f, y, k, "↺", "\\circlearrowleft", !0);
c(f, y, k, "↰", "\\Lsh", !0);
c(f, y, k, "⇈", "\\upuparrows", !0);
c(f, y, k, "↿", "\\upharpoonleft", !0);
c(f, y, k, "⇃", "\\downharpoonleft", !0);
c(f, d, k, "⊶", "\\origof", !0);
c(f, d, k, "⊷", "\\imageof", !0);
c(f, y, k, "⊸", "\\multimap", !0);
c(f, y, k, "↭", "\\leftrightsquigarrow", !0);
c(f, y, k, "⇉", "\\rightrightarrows", !0);
c(f, y, k, "⇄", "\\rightleftarrows", !0);
c(f, y, k, "↠", "\\twoheadrightarrow", !0);
c(f, y, k, "↣", "\\rightarrowtail", !0);
c(f, y, k, "↬", "\\looparrowright", !0);
c(f, y, k, "↷", "\\curvearrowright", !0);
c(f, y, k, "↻", "\\circlearrowright", !0);
c(f, y, k, "↱", "\\Rsh", !0);
c(f, y, k, "⇊", "\\downdownarrows", !0);
c(f, y, k, "↾", "\\upharpoonright", !0);
c(f, y, k, "⇂", "\\downharpoonright", !0);
c(f, y, k, "⇝", "\\rightsquigarrow", !0);
c(f, y, k, "⇝", "\\leadsto");
c(f, y, k, "⇛", "\\Rrightarrow", !0);
c(f, y, k, "↾", "\\restriction");
c(f, d, x, "‘", "`");
c(f, d, x, "$", "\\$");
c(N, d, x, "$", "\\$");
c(N, d, x, "$", "\\textdollar");
c(f, d, x, "%", "\\%");
c(N, d, x, "%", "\\%");
c(f, d, x, "_", "\\_");
c(N, d, x, "_", "\\_");
c(N, d, x, "_", "\\textunderscore");
c(f, d, x, "∠", "\\angle", !0);
c(f, d, x, "∞", "\\infty", !0);
c(f, d, x, "′", "\\prime");
c(f, d, x, "△", "\\triangle");
c(f, d, x, "Γ", "\\Gamma", !0);
c(f, d, x, "Δ", "\\Delta", !0);
c(f, d, x, "Θ", "\\Theta", !0);
c(f, d, x, "Λ", "\\Lambda", !0);
c(f, d, x, "Ξ", "\\Xi", !0);
c(f, d, x, "Π", "\\Pi", !0);
c(f, d, x, "Σ", "\\Sigma", !0);
c(f, d, x, "Υ", "\\Upsilon", !0);
c(f, d, x, "Φ", "\\Phi", !0);
c(f, d, x, "Ψ", "\\Psi", !0);
c(f, d, x, "Ω", "\\Omega", !0);
c(f, d, x, "A", "Α");
c(f, d, x, "B", "Β");
c(f, d, x, "E", "Ε");
c(f, d, x, "Z", "Ζ");
c(f, d, x, "H", "Η");
c(f, d, x, "I", "Ι");
c(f, d, x, "K", "Κ");
c(f, d, x, "M", "Μ");
c(f, d, x, "N", "Ν");
c(f, d, x, "O", "Ο");
c(f, d, x, "P", "Ρ");
c(f, d, x, "T", "Τ");
c(f, d, x, "X", "Χ");
c(f, d, x, "¬", "\\neg", !0);
c(f, d, x, "¬", "\\lnot");
c(f, d, x, "⊤", "\\top");
c(f, d, x, "⊥", "\\bot");
c(f, d, x, "∅", "\\emptyset");
c(f, y, x, "∅", "\\varnothing");
c(f, d, Y, "α", "\\alpha", !0);
c(f, d, Y, "β", "\\beta", !0);
c(f, d, Y, "γ", "\\gamma", !0);
c(f, d, Y, "δ", "\\delta", !0);
c(f, d, Y, "ϵ", "\\epsilon", !0);
c(f, d, Y, "ζ", "\\zeta", !0);
c(f, d, Y, "η", "\\eta", !0);
c(f, d, Y, "θ", "\\theta", !0);
c(f, d, Y, "ι", "\\iota", !0);
c(f, d, Y, "κ", "\\kappa", !0);
c(f, d, Y, "λ", "\\lambda", !0);
c(f, d, Y, "μ", "\\mu", !0);
c(f, d, Y, "ν", "\\nu", !0);
c(f, d, Y, "ξ", "\\xi", !0);
c(f, d, Y, "ο", "\\omicron", !0);
c(f, d, Y, "π", "\\pi", !0);
c(f, d, Y, "ρ", "\\rho", !0);
c(f, d, Y, "σ", "\\sigma", !0);
c(f, d, Y, "τ", "\\tau", !0);
c(f, d, Y, "υ", "\\upsilon", !0);
c(f, d, Y, "ϕ", "\\phi", !0);
c(f, d, Y, "χ", "\\chi", !0);
c(f, d, Y, "ψ", "\\psi", !0);
c(f, d, Y, "ω", "\\omega", !0);
c(f, d, Y, "ε", "\\varepsilon", !0);
c(f, d, Y, "ϑ", "\\vartheta", !0);
c(f, d, Y, "ϖ", "\\varpi", !0);
c(f, d, Y, "ϱ", "\\varrho", !0);
c(f, d, Y, "ς", "\\varsigma", !0);
c(f, d, Y, "φ", "\\varphi", !0);
c(f, d, V, "∗", "*", !0);
c(f, d, V, "+", "+");
c(f, d, V, "−", "-", !0);
c(f, d, V, "⋅", "\\cdot", !0);
c(f, d, V, "∘", "\\circ", !0);
c(f, d, V, "÷", "\\div", !0);
c(f, d, V, "±", "\\pm", !0);
c(f, d, V, "×", "\\times", !0);
c(f, d, V, "∩", "\\cap", !0);
c(f, d, V, "∪", "\\cup", !0);
c(f, d, V, "∖", "\\setminus", !0);
c(f, d, V, "∧", "\\land");
c(f, d, V, "∨", "\\lor");
c(f, d, V, "∧", "\\wedge", !0);
c(f, d, V, "∨", "\\vee", !0);
c(f, d, x, "√", "\\surd");
c(f, d, bt, "⟨", "\\langle", !0);
c(f, d, bt, "∣", "\\lvert");
c(f, d, bt, "∥", "\\lVert");
c(f, d, it, "?", "?");
c(f, d, it, "!", "!");
c(f, d, it, "⟩", "\\rangle", !0);
c(f, d, it, "∣", "\\rvert");
c(f, d, it, "∥", "\\rVert");
c(f, d, k, "=", "=");
c(f, d, k, ":", ":");
c(f, d, k, "≈", "\\approx", !0);
c(f, d, k, "≅", "\\cong", !0);
c(f, d, k, "≥", "\\ge");
c(f, d, k, "≥", "\\geq", !0);
c(f, d, k, "←", "\\gets");
c(f, d, k, ">", "\\gt", !0);
c(f, d, k, "∈", "\\in", !0);
c(f, d, k, "", "\\@not");
c(f, d, k, "⊂", "\\subset", !0);
c(f, d, k, "⊃", "\\supset", !0);
c(f, d, k, "⊆", "\\subseteq", !0);
c(f, d, k, "⊇", "\\supseteq", !0);
c(f, y, k, "⊈", "\\nsubseteq", !0);
c(f, y, k, "⊉", "\\nsupseteq", !0);
c(f, d, k, "⊨", "\\models");
c(f, d, k, "←", "\\leftarrow", !0);
c(f, d, k, "≤", "\\le");
c(f, d, k, "≤", "\\leq", !0);
c(f, d, k, "<", "\\lt", !0);
c(f, d, k, "→", "\\rightarrow", !0);
c(f, d, k, "→", "\\to");
c(f, y, k, "≱", "\\ngeq", !0);
c(f, y, k, "≰", "\\nleq", !0);
c(f, d, g0, " ", "\\ ");
c(f, d, g0, " ", "\\space");
c(f, d, g0, " ", "\\nobreakspace");
c(N, d, g0, " ", "\\ ");
c(N, d, g0, " ", " ");
c(N, d, g0, " ", "\\space");
c(N, d, g0, " ", "\\nobreakspace");
c(f, d, g0, null, "\\nobreak");
c(f, d, g0, null, "\\allowbreak");
c(f, d, Ba, ",", ",");
c(f, d, Ba, ";", ";");
c(f, y, V, "⊼", "\\barwedge", !0);
c(f, y, V, "⊻", "\\veebar", !0);
c(f, d, V, "⊙", "\\odot", !0);
c(f, d, V, "⊕", "\\oplus", !0);
c(f, d, V, "⊗", "\\otimes", !0);
c(f, d, x, "∂", "\\partial", !0);
c(f, d, V, "⊘", "\\oslash", !0);
c(f, y, V, "⊚", "\\circledcirc", !0);
c(f, y, V, "⊡", "\\boxdot", !0);
c(f, d, V, "△", "\\bigtriangleup");
c(f, d, V, "▽", "\\bigtriangledown");
c(f, d, V, "†", "\\dagger");
c(f, d, V, "⋄", "\\diamond");
c(f, d, V, "⋆", "\\star");
c(f, d, V, "◃", "\\triangleleft");
c(f, d, V, "▹", "\\triangleright");
c(f, d, bt, "{", "\\{");
c(N, d, x, "{", "\\{");
c(N, d, x, "{", "\\textbraceleft");
c(f, d, it, "}", "\\}");
c(N, d, x, "}", "\\}");
c(N, d, x, "}", "\\textbraceright");
c(f, d, bt, "{", "\\lbrace");
c(f, d, it, "}", "\\rbrace");
c(f, d, bt, "[", "\\lbrack", !0);
c(N, d, x, "[", "\\lbrack", !0);
c(f, d, it, "]", "\\rbrack", !0);
c(N, d, x, "]", "\\rbrack", !0);
c(f, d, bt, "(", "\\lparen", !0);
c(f, d, it, ")", "\\rparen", !0);
c(N, d, x, "<", "\\textless", !0);
c(N, d, x, ">", "\\textgreater", !0);
c(f, d, bt, "⌊", "\\lfloor", !0);
c(f, d, it, "⌋", "\\rfloor", !0);
c(f, d, bt, "⌈", "\\lceil", !0);
c(f, d, it, "⌉", "\\rceil", !0);
c(f, d, x, "\\", "\\backslash");
c(f, d, x, "∣", "|");
c(f, d, x, "∣", "\\vert");
c(N, d, x, "|", "\\textbar", !0);
c(f, d, x, "∥", "\\|");
c(f, d, x, "∥", "\\Vert");
c(N, d, x, "∥", "\\textbardbl");
c(N, d, x, "~", "\\textasciitilde");
c(N, d, x, "\\", "\\textbackslash");
c(N, d, x, "^", "\\textasciicircum");
c(f, d, k, "↑", "\\uparrow", !0);
c(f, d, k, "⇑", "\\Uparrow", !0);
c(f, d, k, "↓", "\\downarrow", !0);
c(f, d, k, "⇓", "\\Downarrow", !0);
c(f, d, k, "↕", "\\updownarrow", !0);
c(f, d, k, "⇕", "\\Updownarrow", !0);
c(f, d, Re, "∐", "\\coprod");
c(f, d, Re, "⋁", "\\bigvee");
c(f, d, Re, "⋀", "\\bigwedge");
c(f, d, Re, "⨄", "\\biguplus");
c(f, d, Re, "⋂", "\\bigcap");
c(f, d, Re, "⋃", "\\bigcup");
c(f, d, Re, "∫", "\\int");
c(f, d, Re, "∫", "\\intop");
c(f, d, Re, "∬", "\\iint");
c(f, d, Re, "∭", "\\iiint");
c(f, d, Re, "∏", "\\prod");
c(f, d, Re, "∑", "\\sum");
c(f, d, Re, "⨂", "\\bigotimes");
c(f, d, Re, "⨁", "\\bigoplus");
c(f, d, Re, "⨀", "\\bigodot");
c(f, d, Re, "∮", "\\oint");
c(f, d, Re, "∯", "\\oiint");
c(f, d, Re, "∰", "\\oiiint");
c(f, d, Re, "⨆", "\\bigsqcup");
c(f, d, Re, "∫", "\\smallint");
c(N, d, Mr, "…", "\\textellipsis");
c(f, d, Mr, "…", "\\mathellipsis");
c(N, d, Mr, "…", "\\ldots", !0);
c(f, d, Mr, "…", "\\ldots", !0);
c(f, d, Mr, "⋯", "\\@cdots", !0);
c(f, d, Mr, "⋱", "\\ddots", !0);
c(f, d, x, "⋮", "\\varvdots");
c(f, d, De, "ˊ", "\\acute");
c(f, d, De, "ˋ", "\\grave");
c(f, d, De, "¨", "\\ddot");
c(f, d, De, "~", "\\tilde");
c(f, d, De, "ˉ", "\\bar");
c(f, d, De, "˘", "\\breve");
c(f, d, De, "ˇ", "\\check");
c(f, d, De, "^", "\\hat");
c(f, d, De, "⃗", "\\vec");
c(f, d, De, "˙", "\\dot");
c(f, d, De, "˚", "\\mathring");
c(f, d, Y, "", "\\@imath");
c(f, d, Y, "", "\\@jmath");
c(f, d, x, "ı", "ı");
c(f, d, x, "ȷ", "ȷ");
c(N, d, x, "ı", "\\i", !0);
c(N, d, x, "ȷ", "\\j", !0);
c(N, d, x, "ß", "\\ss", !0);
c(N, d, x, "æ", "\\ae", !0);
c(N, d, x, "œ", "\\oe", !0);
c(N, d, x, "ø", "\\o", !0);
c(N, d, x, "Æ", "\\AE", !0);
c(N, d, x, "Œ", "\\OE", !0);
c(N, d, x, "Ø", "\\O", !0);
c(N, d, De, "ˊ", "\\'");
c(N, d, De, "ˋ", "\\`");
c(N, d, De, "ˆ", "\\^");
c(N, d, De, "˜", "\\~");
c(N, d, De, "ˉ", "\\=");
c(N, d, De, "˘", "\\u");
c(N, d, De, "˙", "\\.");
c(N, d, De, "¸", "\\c");
c(N, d, De, "˚", "\\r");
c(N, d, De, "ˇ", "\\v");
c(N, d, De, "¨", '\\"');
c(N, d, De, "˝", "\\H");
c(N, d, De, "◯", "\\textcircled");
var f1 = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(N, d, x, "–", "--", !0);
c(N, d, x, "–", "\\textendash");
c(N, d, x, "—", "---", !0);
c(N, d, x, "—", "\\textemdash");
c(N, d, x, "‘", "`", !0);
c(N, d, x, "‘", "\\textquoteleft");
c(N, d, x, "’", "'", !0);
c(N, d, x, "’", "\\textquoteright");
c(N, d, x, "“", "``", !0);
c(N, d, x, "“", "\\textquotedblleft");
c(N, d, x, "”", "''", !0);
c(N, d, x, "”", "\\textquotedblright");
c(f, d, x, "°", "\\degree", !0);
c(N, d, x, "°", "\\degree");
c(N, d, x, "°", "\\textdegree", !0);
c(f, d, x, "£", "\\pounds");
c(f, d, x, "£", "\\mathsterling", !0);
c(N, d, x, "£", "\\pounds");
c(N, d, x, "£", "\\textsterling", !0);
c(f, y, x, "✠", "\\maltese");
c(N, y, x, "✠", "\\maltese");
var Ls = '0123456789/@."';
for (var ei = 0; ei < Ls.length; ei++) {
  var Os = Ls.charAt(ei);
  c(f, d, x, Os, Os);
}
var Hs = '0123456789!@*()-=+";:?/.,';
for (var ti = 0; ti < Hs.length; ti++) {
  var Ps = Hs.charAt(ti);
  c(N, d, x, Ps, Ps);
}
var sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var ri = 0; ri < sa.length; ri++) {
  var Cn = sa.charAt(ri);
  c(f, d, Y, Cn, Cn), c(N, d, x, Cn, Cn);
}
c(f, y, x, "C", "ℂ");
c(N, y, x, "C", "ℂ");
c(f, y, x, "H", "ℍ");
c(N, y, x, "H", "ℍ");
c(f, y, x, "N", "ℕ");
c(N, y, x, "N", "ℕ");
c(f, y, x, "P", "ℙ");
c(N, y, x, "P", "ℙ");
c(f, y, x, "Q", "ℚ");
c(N, y, x, "Q", "ℚ");
c(f, y, x, "R", "ℝ");
c(N, y, x, "R", "ℝ");
c(f, y, x, "Z", "ℤ");
c(N, y, x, "Z", "ℤ");
c(f, d, Y, "h", "ℎ");
c(N, d, Y, "h", "ℎ");
var K = "";
for (var Ke = 0; Ke < sa.length; Ke++) {
  var Me = sa.charAt(Ke);
  K = String.fromCharCode(55349, 56320 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56372 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56424 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56580 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56684 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56736 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56788 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56840 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56944 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), Ke < 26 && (K = String.fromCharCode(55349, 56632 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K), K = String.fromCharCode(55349, 56476 + Ke), c(f, d, Y, Me, K), c(N, d, x, Me, K));
}
K = "𝕜";
c(f, d, Y, "k", K);
c(N, d, x, "k", K);
for (var C0 = 0; C0 < 10; C0++) {
  var v0 = C0.toString();
  K = String.fromCharCode(55349, 57294 + C0), c(f, d, Y, v0, K), c(N, d, x, v0, K), K = String.fromCharCode(55349, 57314 + C0), c(f, d, Y, v0, K), c(N, d, x, v0, K), K = String.fromCharCode(55349, 57324 + C0), c(f, d, Y, v0, K), c(N, d, x, v0, K), K = String.fromCharCode(55349, 57334 + C0), c(f, d, Y, v0, K), c(N, d, x, v0, K);
}
var qs = "ÐÞþ";
for (var ni = 0; ni < qs.length; ni++) {
  var Mn = qs.charAt(ni);
  c(f, d, Y, Mn, Mn), c(N, d, x, Mn, Mn);
}
var Bn = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Us = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], q4 = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [Bn[s][2], Bn[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [Us[o][2], Us[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [Bn[0][2], Bn[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new $("Unsupported character: " + e);
  }
}, Na = function(e, t, n) {
  return Ie[n][e] && Ie[n][e].replace && (e = Ie[n][e].replace), {
    value: e,
    metrics: Cl(e, t, n)
  };
}, Nt = function(e, t, n, a, i) {
  var l = Na(e, t, n), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var u = s.italic;
    (n === "text" || a && a.font === "mathit") && (u = 0), o = new Jt(e, s.height, s.depth, u, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), o = new Jt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var h = a.getColor();
    h && (o.style.color = h);
  }
  return o;
}, U4 = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Na(e, "Main-Bold", t).metrics ? Nt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || Ie[t][e].font === "main" ? Nt(e, "Main-Regular", t, n, a) : Nt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, G4 = function(e, t, n, a, i) {
  return i !== "textord" && Na(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, V4 = function(e, t, n) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, u = "", h = "";
  if (i.charCodeAt(0) === 55349 && ([u, h] = q4(i, a)), u.length > 0)
    return Nt(i, u, a, t, l.concat(h));
  if (o) {
    var m, p;
    if (o === "boldsymbol") {
      var g = G4(i, a, t, l, n);
      m = g.fontName, p = [g.fontClass];
    } else s ? (m = p1[o].fontName, p = [o]) : (m = Nn(o, t.fontWeight, t.fontShape), p = [o, t.fontWeight, t.fontShape]);
    if (Na(i, m, a).metrics)
      return Nt(i, m, a, t, l.concat(p));
    if (f1.hasOwnProperty(i) && m.slice(0, 10) === "Typewriter") {
      for (var v = [], w = 0; w < i.length; w++)
        v.push(Nt(i[w], m, a, t, l.concat(p)));
      return d1(v);
    }
  }
  if (n === "mathord")
    return Nt(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (n === "textord") {
    var T = Ie[a][i] && Ie[a][i].font;
    if (T === "ams") {
      var S = Nn("amsrm", t.fontWeight, t.fontShape);
      return Nt(i, S, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (T === "main" || !T) {
      var D = Nn("textrm", t.fontWeight, t.fontShape);
      return Nt(i, D, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var _ = Nn(T, t.fontWeight, t.fontShape);
      return Nt(i, _, a, t, l.concat(_, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, j4 = (r, e) => {
  if (E0(r.classes) !== E0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var n in r.style)
    if (r.style.hasOwnProperty(n) && r.style[n] !== e.style[n])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
      return !1;
  return !0;
}, W4 = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof Jt && n instanceof Jt && j4(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Ml = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > n && (n = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, ut = function(e, t, n, a) {
  var i = new Ma(e, t, n, a);
  return Ml(i), i;
}, m1 = (r, e, t, n) => new Ma(r, e, t, n), X4 = function(e, t, n) {
  var a = ut([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = q(a.height), a.maxFontSize = 1, a;
}, $4 = function(e, t, n, a) {
  var i = new h1(e, t, n, a);
  return Ml(i), i;
}, d1 = function(e) {
  var t = new bn(e);
  return Ml(t), t;
}, Y4 = function(e, t) {
  return e instanceof bn ? ut([], [e], t) : e;
}, Z4 = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, l = 1; l < t.length; l++) {
      var s = -t[l].shift - i - t[l].elem.depth, o = s - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + s, n.push({
        type: "kern",
        size: o
      }), n.push(t[l]);
    }
    return {
      children: n,
      depth: a
    };
  }
  var u;
  if (e.positionType === "top") {
    for (var h = e.positionData, m = 0; m < e.children.length; m++) {
      var p = e.children[m];
      h -= p.type === "kern" ? p.size : p.elem.height + p.elem.depth;
    }
    u = h;
  } else if (e.positionType === "bottom")
    u = -e.positionData;
  else {
    var g = e.children[0];
    if (g.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      u = -g.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      u = -g.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: u
  };
}, Q4 = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = Z4(e), i = 0, l = 0; l < n.length; l++) {
    var s = n[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var u = ut(["pstrut"], []);
  u.style.height = q(i);
  for (var h = [], m = a, p = a, g = a, v = 0; v < n.length; v++) {
    var w = n[v];
    if (w.type === "kern")
      g += w.size;
    else {
      var T = w.elem, S = w.wrapperClasses || [], D = w.wrapperStyle || {}, _ = ut(S, [u, T], void 0, D);
      _.style.top = q(-i - g - T.depth), w.marginLeft && (_.style.marginLeft = w.marginLeft), w.marginRight && (_.style.marginRight = w.marginRight), h.push(_), g += T.height + T.depth;
    }
    m = Math.min(m, g), p = Math.max(p, g);
  }
  var A = ut(["vlist"], h);
  A.style.height = q(p);
  var F;
  if (m < 0) {
    var M = ut([], []), B = ut(["vlist"], [M]);
    B.style.height = q(-m);
    var U = ut(["vlist-s"], [new Jt("​")]);
    F = [ut(["vlist-r"], [A, U]), ut(["vlist-r"], [B])];
  } else
    F = [ut(["vlist-r"], [A])];
  var I = ut(["vlist-t"], F);
  return F.length === 2 && I.classes.push("vlist-t2"), I.height = p, I.depth = -m, I;
}, J4 = (r, e) => {
  var t = ut(["mspace"], [], e), n = Fe(r, e);
  return t.style.marginRight = q(n), t;
}, Nn = function(e, t, n) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && n === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, p1 = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, g1 = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, K4 = function(e, t) {
  var [n, a, i] = g1[e], l = new X0(n), s = new S0([l], {
    width: q(a),
    height: q(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + q(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = m1(["overlay"], [s], t);
  return o.height = i, o.style.height = q(i), o.style.width = q(a), o;
}, C = {
  fontMap: p1,
  makeSymbol: Nt,
  mathsym: U4,
  makeSpan: ut,
  makeSvgSpan: m1,
  makeLineSpan: X4,
  makeAnchor: $4,
  makeFragment: d1,
  wrapFragment: Y4,
  makeVList: Q4,
  makeOrd: V4,
  makeGlue: J4,
  staticSvg: K4,
  svgData: g1,
  tryCombineChars: W4
}, Se = {
  number: 3,
  unit: "mu"
}, M0 = {
  number: 4,
  unit: "mu"
}, l0 = {
  number: 5,
  unit: "mu"
}, ef = {
  mord: {
    mop: Se,
    mbin: M0,
    mrel: l0,
    minner: Se
  },
  mop: {
    mord: Se,
    mop: Se,
    mrel: l0,
    minner: Se
  },
  mbin: {
    mord: M0,
    mop: M0,
    mopen: M0,
    minner: M0
  },
  mrel: {
    mord: l0,
    mop: l0,
    mopen: l0,
    minner: l0
  },
  mopen: {},
  mclose: {
    mop: Se,
    mbin: M0,
    mrel: l0,
    minner: Se
  },
  mpunct: {
    mord: Se,
    mop: Se,
    mrel: l0,
    mopen: Se,
    mclose: Se,
    mpunct: Se,
    minner: Se
  },
  minner: {
    mord: Se,
    mop: Se,
    mbin: M0,
    mrel: l0,
    mopen: Se,
    mpunct: Se,
    minner: Se
  }
}, tf = {
  mord: {
    mop: Se
  },
  mop: {
    mord: Se,
    mop: Se
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Se
  },
  mpunct: {},
  minner: {
    mop: Se
  }
}, b1 = {}, oa = {}, ua = {};
function G(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = r, s = {
    type: e,
    numArgs: n.numArgs,
    argTypes: n.argTypes,
    allowedInArgument: !!n.allowedInArgument,
    allowedInText: !!n.allowedInText,
    allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
    numOptionalArgs: n.numOptionalArgs || 0,
    infix: !!n.infix,
    primitive: !!n.primitive,
    handler: a
  }, o = 0; o < t.length; ++o)
    b1[t[o]] = s;
  e && (i && (oa[e] = i), l && (ua[e] = l));
}
function nr(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  G({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: n
  });
}
var ca = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, Ne = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, xr = C.makeSpan, rf = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], nf = ["rightmost", "mrel", "mclose", "mpunct"], af = {
  display: Q.DISPLAY,
  text: Q.TEXT,
  script: Q.SCRIPT,
  scriptscript: Q.SCRIPTSCRIPT
}, lf = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Ge = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var s = ue(e[l], t);
    if (s instanceof bn) {
      var o = s.children;
      i.push(...o);
    } else
      i.push(s);
  }
  if (C.tryCombineChars(i), !n)
    return i;
  var u = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? u = t.havingSize(h.size) : h.type === "styling" && (u = t.havingStyle(af[h.style]));
  }
  var m = xr([a[0] || "leftmost"], [], t), p = xr([a[1] || "rightmost"], [], t), g = n === "root";
  return Gs(i, (v, w) => {
    var T = w.classes[0], S = v.classes[0];
    T === "mbin" && Z.contains(nf, S) ? w.classes[0] = "mord" : S === "mbin" && Z.contains(rf, T) && (v.classes[0] = "mord");
  }, {
    node: m
  }, p, g), Gs(i, (v, w) => {
    var T = Xi(w), S = Xi(v), D = T && S ? v.hasClass("mtight") ? tf[T][S] : ef[T][S] : null;
    if (D)
      return C.makeGlue(D, u);
  }, {
    node: m
  }, p, g), i;
}, Gs = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = v1(s);
    if (o) {
      r(o.children, t, n, null, i);
      continue;
    }
    var u = !s.hasClass("mspace");
    if (u) {
      var h = t(s, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), l++));
    }
    u ? n.node = s : i && s.hasClass("newline") && (n.node = xr(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((m) => (p) => {
      e.splice(m + 1, 0, p), l++;
    })(l);
  }
  a && e.pop();
}, v1 = function(e) {
  return e instanceof bn || e instanceof h1 || e instanceof Ma && e.hasClass("enclosing") ? e : null;
}, sf = function r(e, t) {
  var n = v1(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (t === "right")
        return r(a[a.length - 1], "right");
      if (t === "left")
        return r(a[0], "left");
    }
  }
  return e;
}, Xi = function(e, t) {
  return e ? (t && (e = sf(e, t)), lf[e.classes[0]] || null) : null;
}, on = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return xr(t.concat(n));
}, ue = function(e, t, n) {
  if (!e)
    return xr();
  if (oa[e.type]) {
    var a = oa[e.type](e, t);
    if (n && t.size !== n.size) {
      a = xr(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new $("Got group of unknown type: '" + e.type + "'");
};
function _1(r) {
  return new bn(r);
}
class It {
  constructor(e, t, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = E0(this.classes));
    for (var n = 0; n < this.children.length; n++)
      e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += Z.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + Z.escape(E0(this.classes)) + '"'), e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class tn {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return Z.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class of {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", q(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + q(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var O = {
  MathNode: It,
  TextNode: tn,
  SpaceNode: of,
  newDocumentFragment: _1
}, xt = function(e, t, n) {
  return Ie[t][e] && Ie[t][e].replace && e.charCodeAt(0) !== 55349 && !(f1.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = Ie[t][e].replace), new O.TextNode(e);
}, Bl = function(e) {
  return e.length === 1 ? e[0] : new O.MathNode("mrow", e);
}, Nl = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var n = t.font;
  if (!n || n === "mathnormal")
    return null;
  var a = e.mode;
  if (n === "mathit")
    return "italic";
  if (n === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (n === "mathbf")
    return "bold";
  if (n === "mathbb")
    return "double-struck";
  if (n === "mathfrak")
    return "fraktur";
  if (n === "mathscr" || n === "mathcal")
    return "script";
  if (n === "mathsf")
    return "sans-serif";
  if (n === "mathtt")
    return "monospace";
  var i = e.text;
  if (Z.contains(["\\imath", "\\jmath"], i))
    return null;
  Ie[a][i] && Ie[a][i].replace && (i = Ie[a][i].replace);
  var l = C.fontMap[n].fontName;
  return Cl(i, l, a) ? C.fontMap[n].variant : null;
}, vt = function(e, t, n) {
  if (e.length === 1) {
    var a = be(e[0], t);
    return n && a instanceof It && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = be(e[s], t);
    if (o instanceof It && l instanceof It) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mi" && o.children.length === 1 && l.type === "mn") {
        var u = o.children[0];
        if (u instanceof tn && u.text === ".") {
          l.children.push(...o.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var h = l.children[0];
        if (h instanceof tn && h.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var m = o.children[0];
          m instanceof tn && m.text.length > 0 && (m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, F0 = function(e, t, n) {
  return Bl(vt(e, t, n));
}, be = function(e, t) {
  if (!e)
    return new O.MathNode("mrow");
  if (ua[e.type]) {
    var n = ua[e.type](e, t);
    return n;
  } else
    throw new $("Got group of unknown type: '" + e.type + "'");
}, uf = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, cf = function(e) {
  var t = new O.MathNode("mo", [new O.TextNode(uf[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, hf = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, ff = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, mf = function(e, t) {
  function n() {
    var s = 4e5, o = e.label.slice(1);
    if (Z.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var u = e, h = ff(u.base), m, p, g;
      if (h > 5)
        o === "widehat" || o === "widecheck" ? (m = 420, s = 2364, g = 0.42, p = o + "4") : (m = 312, s = 2340, g = 0.34, p = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][h];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][v], m = [0, 239, 300, 360, 420][v], g = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], p = o + v) : (s = [0, 600, 1033, 2339, 2340][v], m = [0, 260, 286, 306, 312][v], g = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], p = "tilde" + v);
      }
      var w = new X0(p), T = new S0([w], {
        width: "100%",
        height: q(g),
        viewBox: "0 0 " + s + " " + m,
        preserveAspectRatio: "none"
      });
      return {
        span: C.makeSvgSpan([], [T], t),
        minWidth: 0,
        height: g
      };
    } else {
      var S = [], D = hf[o], [_, A, F] = D, M = F / 1e3, B = _.length, U, I;
      if (B === 1) {
        var z = D[3];
        U = ["hide-tail"], I = [z];
      } else if (B === 2)
        U = ["halfarrow-left", "halfarrow-right"], I = ["xMinYMin", "xMaxYMin"];
      else if (B === 3)
        U = ["brace-left", "brace-center", "brace-right"], I = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + B + " children.");
      for (var L = 0; L < B; L++) {
        var J = new X0(_[L]), Le = new S0([J], {
          width: "400em",
          height: q(M),
          viewBox: "0 0 " + s + " " + F,
          preserveAspectRatio: I[L] + " slice"
        }), se = C.makeSvgSpan([U[L]], [Le], t);
        if (B === 1)
          return {
            span: se,
            minWidth: A,
            height: M
          };
        se.style.height = q(M), S.push(se);
      }
      return {
        span: C.makeSpan(["stretchy"], S, t),
        minWidth: A,
        height: M
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: l
  } = n();
  return a.height = l, a.style.height = q(l), i > 0 && (a.style.minWidth = q(i)), a;
}, df = function(e, t, n, a, i) {
  var l, s = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = C.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new zs({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new zs({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new S0(u, {
      width: "100%",
      height: q(s)
    });
    l = C.makeSvgSpan([], [h], i);
  }
  return l.height = s, l.style.height = q(s), l;
}, m0 = {
  encloseSpan: df,
  mathMLnode: cf,
  svgSpan: mf
};
function te(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function Il(r) {
  var e = Ia(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Ia(r) {
  return r && (r.type === "atom" || P4.hasOwnProperty(r.type)) ? r : null;
}
var zl = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = te(r.base, "accent"), t = n.base, r.base = t, a = H4(ue(r, e)), r.base = n) : (n = te(r, "accent"), t = n.base);
  var i = ue(t, e.havingCrampedStyle()), l = n.isShifty && Z.isCharacterBox(t), s = 0;
  if (l) {
    var o = Z.getBaseElem(t), u = ue(o, e.havingCrampedStyle());
    s = Rs(u).skew;
  }
  var h = n.label === "\\c", m = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), p;
  if (n.isStretchy)
    p = m0.svgSpan(n, e), p = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: p,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + q(2 * s) + ")",
          marginLeft: q(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var g, v;
    n.label === "\\vec" ? (g = C.staticSvg("vec", e), v = C.svgData.vec[1]) : (g = C.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), g = Rs(g), g.italic = 0, v = g.width, h && (m += g.depth)), p = C.makeSpan(["accent-body"], [g]);
    var w = n.label === "\\textcircled";
    w && (p.classes.push("accent-full"), m = i.height);
    var T = s;
    w || (T -= v / 2), p.style.left = q(T), n.label === "\\textcircled" && (p.style.top = ".2em"), p = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -m
      }, {
        type: "elem",
        elem: p
      }]
    }, e);
  }
  var S = C.makeSpan(["mord", "accent"], [p], e);
  return a ? (a.children[0] = S, a.height = Math.max(S.height, a.height), a.classes[0] = "mord", a) : S;
}, y1 = (r, e) => {
  var t = r.isStretchy ? m0.mathMLnode(r.label) : new O.MathNode("mo", [xt(r.label, r.mode)]), n = new O.MathNode("mover", [be(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, pf = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
G({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = ca(e[0]), n = !pf.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: zl,
  mathmlBuilder: y1
});
G({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = e[0], n = r.parser.mode;
    return n === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: zl,
  mathmlBuilder: y1
});
G({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = ue(r.base, e), n = m0.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = C.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return C.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = m0.mathMLnode(r.label), n = new O.MathNode("munder", [be(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var In = (r) => {
  var e = new O.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
G({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r;
    return {
      type: "xArrow",
      mode: n.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(r, e) {
    var t = e.style, n = e.havingStyle(t.sup()), a = C.wrapFragment(ue(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    r.below && (n = e.havingStyle(t.sub()), l = C.wrapFragment(ue(r.below, n, e), e), l.classes.push(i + "-arrow-pad"));
    var s = m0.svgSpan(r, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, u = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (u -= a.depth);
    var h;
    if (l) {
      var m = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      h = C.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: s,
          shift: o
        }, {
          type: "elem",
          elem: l,
          shift: m
        }]
      }, e);
    } else
      h = C.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: s,
          shift: o
        }]
      }, e);
    return h.children[0].children[0].children[1].classes.push("svg-align"), C.makeSpan(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(r, e) {
    var t = m0.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = In(be(r.body, e));
      if (r.below) {
        var i = In(be(r.below, e));
        n = new O.MathNode("munderover", [t, i, a]);
      } else
        n = new O.MathNode("mover", [t, a]);
    } else if (r.below) {
      var l = In(be(r.below, e));
      n = new O.MathNode("munder", [t, l]);
    } else
      n = In(), n = new O.MathNode("mover", [t, n]);
    return n;
  }
});
var gf = C.makeSpan;
function w1(r, e) {
  var t = Ge(r.body, e, !0);
  return gf([r.mclass], t, e);
}
function k1(r, e) {
  var t, n = vt(r.body, e);
  return r.mclass === "minner" ? t = new O.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new O.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new O.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
G({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: Ne(a),
      isCharacterBox: Z.isCharacterBox(a)
    };
  },
  htmlBuilder: w1,
  mathmlBuilder: k1
});
var za = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
G({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: za(e[0]),
      body: Ne(e[1]),
      isCharacterBox: Z.isCharacterBox(e[1])
    };
  }
});
G({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[1], i = e[0], l;
    n !== "\\stackrel" ? l = za(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: Ne(a)
    }, o = {
      type: "supsub",
      mode: i.mode,
      base: s,
      sup: n === "\\underset" ? null : i,
      sub: n === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [o],
      isCharacterBox: Z.isCharacterBox(o)
    };
  },
  htmlBuilder: w1,
  mathmlBuilder: k1
});
G({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: za(e[0]),
      body: Ne(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Ge(r.body, e, !0), n = C.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = vt(r.body, e), n = new O.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var bf = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Vs = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), js = (r) => r.type === "textord" && r.text === "@", vf = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function _f(r, e, t) {
  var n = bf[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [i], []), s = t.callFunction("\\\\cdright", [e[1]], []), o = {
        type: "ordgroup",
        mode: "math",
        body: [a, l, s]
      };
      return t.callFunction("\\\\cdparent", [o], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var u = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [u], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function yf(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new $("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var l = e[i], s = Vs(), o = 0; o < l.length; o++)
      if (!js(l[o]))
        s.body.push(l[o]);
      else {
        n.push(s), o += 1;
        var u = Il(l[o]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var m = 0; m < 2; m++) {
            for (var p = !0, g = o + 1; g < l.length; g++) {
              if (vf(l[g], u)) {
                p = !1, o = g;
                break;
              }
              if (js(l[g]))
                throw new $("Missing a " + u + " character to complete a CD arrow.", l[g]);
              h[m].body.push(l[g]);
            }
            if (p)
              throw new $("Missing a " + u + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new $('Expected one of "<>AV=|." after @', l[o]);
        var v = _f(u, h, r), w = {
          type: "styling",
          body: [v],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(w), s = Vs();
      }
    i % 2 === 0 ? n.push(s) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var T = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: T,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
G({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), n = C.wrapFragment(ue(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = q(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mrow", [be(r.label, e)]);
    return t = new O.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new O.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
G({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = C.wrapFragment(ue(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new O.MathNode("mrow", [be(r.fragment, e)]);
  }
});
G({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = te(e[0], "ordgroup"), a = n.body, i = "", l = 0; l < a.length; l++) {
      var s = te(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), u;
    if (isNaN(o))
      throw new $("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new $("\\@char with invalid code point " + i);
    return o <= 65535 ? u = String.fromCharCode(o) : (o -= 65536, u = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var D1 = (r, e) => {
  var t = Ge(r.body, e.withColor(r.color), !1);
  return C.makeFragment(t);
}, x1 = (r, e) => {
  var t = vt(r.body, e.withColor(r.color)), n = new O.MathNode("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
G({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = te(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: Ne(a)
    };
  },
  htmlBuilder: D1,
  mathmlBuilder: x1
});
G({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, a = te(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: D1,
  mathmlBuilder: x1
});
G({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && te(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = C.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = q(Fe(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", q(Fe(r.size, e)))), t;
  }
});
var $i = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, A1 = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new $("Expected a control sequence", r);
  return e;
}, wf = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, E1 = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
};
G({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var n = e.fetch();
    if ($i[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = $i[n.text]), te(e.parseFunction(), "internal");
    throw new $("Invalid token after macro prefix", n);
  }
});
G({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new $("Expected a control sequence", n);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new $('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new $('Argument number "' + n.text + '" out of order');
        i++, s.push([]);
      } else {
        if (n.text === "EOF")
          throw new $("Expected a macro definition");
        s[i].push(n.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === $i[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
G({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = A1(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = wf(e);
    return E1(e, n, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
G({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = A1(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return E1(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Kr = function(e, t, n) {
  var a = Ie.math[e] && Ie.math[e].replace, i = Cl(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Rl = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), l = C.makeSpan(a.concat(i.sizingClasses(n)), [e], n), s = i.sizeMultiplier / n.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, S1 = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = q(i), e.height -= i, e.depth += i;
}, kf = function(e, t, n, a, i, l) {
  var s = C.makeSymbol(e, "Main-Regular", i, a), o = Rl(s, t, a, l);
  return n && S1(o, a, t), o;
}, Df = function(e, t, n, a) {
  return C.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, F1 = function(e, t, n, a, i, l) {
  var s = Df(e, t, i, a), o = Rl(C.makeSpan(["delimsizing", "size" + t], [s], a), Q.TEXT, a, l);
  return n && S1(o, a, Q.TEXT), o;
}, ai = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = C.makeSpan(["delimsizinginner", a], [C.makeSpan([], [C.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, ii = function(e, t, n) {
  var a = c0["Size4-Regular"][e.charCodeAt(0)] ? c0["Size4-Regular"][e.charCodeAt(0)][4] : c0["Size1-Regular"][e.charCodeAt(0)][4], i = new X0("inner", N4(e, Math.round(1e3 * t))), l = new S0([i], {
    width: q(a),
    height: q(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + q(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = C.makeSvgSpan([], [l], n);
  return s.height = t, s.style.height = q(t), s.style.width = q(a), {
    type: "elem",
    elem: s
  };
}, Yi = 8e-3, zn = {
  type: "kern",
  size: -1 * Yi
}, xf = ["|", "\\lvert", "\\rvert", "\\vert"], Af = ["\\|", "\\lVert", "\\rVert", "\\Vert"], T1 = function(e, t, n, a, i, l) {
  var s, o, u, h, m = "", p = 0;
  s = u = h = e, o = null;
  var g = "Size1-Regular";
  e === "\\uparrow" ? u = h = "⏐" : e === "\\Uparrow" ? u = h = "‖" : e === "\\downarrow" ? s = u = "⏐" : e === "\\Downarrow" ? s = u = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", u = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", u = "‖", h = "\\Downarrow") : Z.contains(xf, e) ? (u = "∣", m = "vert", p = 333) : Z.contains(Af, e) ? (u = "∥", m = "doublevert", p = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", u = "⎢", h = "⎣", g = "Size4-Regular", m = "lbrack", p = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", u = "⎥", h = "⎦", g = "Size4-Regular", m = "rbrack", p = 667) : e === "\\lfloor" || e === "⌊" ? (u = s = "⎢", h = "⎣", g = "Size4-Regular", m = "lfloor", p = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", u = h = "⎢", g = "Size4-Regular", m = "lceil", p = 667) : e === "\\rfloor" || e === "⌋" ? (u = s = "⎥", h = "⎦", g = "Size4-Regular", m = "rfloor", p = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", u = h = "⎥", g = "Size4-Regular", m = "rceil", p = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", u = "⎜", h = "⎝", g = "Size4-Regular", m = "lparen", p = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", u = "⎟", h = "⎠", g = "Size4-Regular", m = "rparen", p = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", h = "⎩", u = "⎪", g = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", h = "⎭", u = "⎪", g = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", h = "⎩", u = "⎪", g = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", h = "⎭", u = "⎪", g = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", h = "⎭", u = "⎪", g = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", h = "⎩", u = "⎪", g = "Size4-Regular");
  var v = Kr(s, g, i), w = v.height + v.depth, T = Kr(u, g, i), S = T.height + T.depth, D = Kr(h, g, i), _ = D.height + D.depth, A = 0, F = 1;
  if (o !== null) {
    var M = Kr(o, g, i);
    A = M.height + M.depth, F = 2;
  }
  var B = w + _ + A, U = Math.max(0, Math.ceil((t - B) / (F * S))), I = B + U * F * S, z = a.fontMetrics().axisHeight;
  n && (z *= a.sizeMultiplier);
  var L = I / 2 - z, J = [];
  if (m.length > 0) {
    var Le = I - w - _, se = Math.round(I * 1e3), xe = I4(m, Math.round(Le * 1e3)), Ae = new X0(m, xe), Ve = (p / 1e3).toFixed(3) + "em", fe = (se / 1e3).toFixed(3) + "em", ye = new S0([Ae], {
      width: Ve,
      height: fe,
      viewBox: "0 0 " + p + " " + se
    }), Ee = C.makeSvgSpan([], [ye], a);
    Ee.height = se / 1e3, Ee.style.width = Ve, Ee.style.height = fe, J.push({
      type: "elem",
      elem: Ee
    });
  } else {
    if (J.push(ai(h, g, i)), J.push(zn), o === null) {
      var re = I - w - _ + 2 * Yi;
      J.push(ii(u, re, a));
    } else {
      var he = (I - w - _ - A) / 2 + 2 * Yi;
      J.push(ii(u, he, a)), J.push(zn), J.push(ai(o, g, i)), J.push(zn), J.push(ii(u, he, a));
    }
    J.push(zn), J.push(ai(s, g, i));
  }
  var me = a.havingBaseStyle(Q.TEXT), Oe = C.makeVList({
    positionType: "bottom",
    positionData: L,
    children: J
  }, me);
  return Rl(C.makeSpan(["delimsizing", "mult"], [Oe], me), Q.TEXT, a, l);
}, li = 80, si = 0.08, oi = function(e, t, n, a, i) {
  var l = B4(e, a, n), s = new X0(e, l), o = new S0([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: q(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return C.makeSvgSpan(["hide-tail"], [o], i);
}, Ef = function(e, t) {
  var n = t.havingBaseSizing(), a = N1("\\surd", e * n.sizeMultiplier, B1, n), i = n.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, u = 0, h = 0, m;
  return a.type === "small" ? (h = 1e3 + 1e3 * l + li, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + si) / i, u = (1 + l) / i, s = oi("sqrtMain", o, h, l, t), s.style.minWidth = "0.853em", m = 0.833 / i) : a.type === "large" ? (h = (1e3 + li) * rn[a.size], u = (rn[a.size] + l) / i, o = (rn[a.size] + l + si) / i, s = oi("sqrtSize" + a.size, o, h, l, t), s.style.minWidth = "1.02em", m = 1 / i) : (o = e + l + si, u = e + l, h = Math.floor(1e3 * e + l) + li, s = oi("sqrtTall", o, h, l, t), s.style.minWidth = "0.742em", m = 1.056), s.height = u, s.style.height = q(o), {
    span: s,
    advanceWidth: m,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, C1 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Sf = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], M1 = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], rn = [0, 1.2, 1.8, 2.4, 3], Ff = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Z.contains(C1, e) || Z.contains(M1, e))
    return F1(e, t, !1, n, a, i);
  if (Z.contains(Sf, e))
    return T1(e, rn[t], !1, n, a, i);
  throw new $("Illegal delimiter: '" + e + "'");
}, Tf = [{
  type: "small",
  style: Q.SCRIPTSCRIPT
}, {
  type: "small",
  style: Q.SCRIPT
}, {
  type: "small",
  style: Q.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], Cf = [{
  type: "small",
  style: Q.SCRIPTSCRIPT
}, {
  type: "small",
  style: Q.SCRIPT
}, {
  type: "small",
  style: Q.TEXT
}, {
  type: "stack"
}], B1 = [{
  type: "small",
  style: Q.SCRIPTSCRIPT
}, {
  type: "small",
  style: Q.SCRIPT
}, {
  type: "small",
  style: Q.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], Mf = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, N1 = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < n.length && n[l].type !== "stack"; l++) {
    var s = Kr(e, Mf(n[l]), "math"), o = s.height + s.depth;
    if (n[l].type === "small") {
      var u = a.havingBaseStyle(n[l].style);
      o *= u.sizeMultiplier;
    }
    if (o > t)
      return n[l];
  }
  return n[n.length - 1];
}, I1 = function(e, t, n, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  Z.contains(M1, e) ? s = Tf : Z.contains(C1, e) ? s = B1 : s = Cf;
  var o = N1(e, t, s, a);
  return o.type === "small" ? kf(e, o.style, n, a, i, l) : o.type === "large" ? F1(e, o.size, n, a, i, l) : T1(e, t, n, a, i, l);
}, Bf = function(e, t, n, a, i, l) {
  var s = a.fontMetrics().axisHeight * a.sizeMultiplier, o = 901, u = 5 / a.fontMetrics().ptPerEm, h = Math.max(t - s, n + s), m = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * o,
    2 * h - u
  );
  return I1(e, m, !0, a, i, l);
}, f0 = {
  sqrtImage: Ef,
  sizedDelim: Ff,
  sizeToMaxHeight: rn,
  customSizedDelim: I1,
  leftRightDelim: Bf
}, Ws = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, Nf = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Ra(r, e) {
  var t = Ia(r);
  if (t && Z.contains(Nf, t.text))
    return t;
  throw t ? new $("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new $("Invalid delimiter type '" + r.type + "'", r);
}
G({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = Ra(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Ws[r.funcName].size,
      mclass: Ws[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? C.makeSpan([r.mclass]) : f0.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(xt(r.delim, r.mode));
    var t = new O.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = q(f0.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Xs(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
G({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new $("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: Ra(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
G({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Ra(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = te(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (r, e) => {
    Xs(r);
    for (var t = Ge(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (n = Math.max(t[l].height, n), a = Math.max(t[l].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (r.left === "." ? s = on(e, ["mopen"]) : s = f0.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var u = t[o], h = u.isMiddle;
        h && (t[o] = f0.leftRightDelim(h.delim, n, a, h.options, r.mode, []));
      }
    var m;
    if (r.right === ".")
      m = on(e, ["mclose"]);
    else {
      var p = r.rightColor ? e.withColor(r.rightColor) : e;
      m = f0.leftRightDelim(r.right, n, a, p, r.mode, ["mclose"]);
    }
    return t.push(m), C.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Xs(r);
    var t = vt(r.body, e);
    if (r.left !== ".") {
      var n = new O.MathNode("mo", [xt(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new O.MathNode("mo", [xt(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Bl(t);
  }
});
G({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Ra(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new $("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = on(e, []);
    else {
      t = f0.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? xt("|", "text") : xt(r.delim, r.mode), n = new O.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Ll = (r, e) => {
  var t = C.wrapFragment(ue(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = Z.isCharacterBox(r.body);
  if (n === "sout")
    i = C.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var o = Fe({
      number: 0.6,
      unit: "pt"
    }, e), u = Fe({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var m = t.height + t.depth + o + u;
    t.style.paddingLeft = q(m / 2 + o);
    var p = Math.floor(1e3 * m * a), g = C4(p), v = new S0([new X0("phase", g)], {
      width: "400em",
      height: q(p / 1e3),
      viewBox: "0 0 400000 " + p,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = C.makeSvgSpan(["hide-tail"], [v], e), i.style.height = q(m), l = t.depth + o + u;
  } else {
    /cancel/.test(n) ? s || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var w = 0, T = 0, S = 0;
    /box/.test(n) ? (S = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), w = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : S), T = w) : n === "angl" ? (S = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), w = 4 * S, T = Math.max(0, 0.25 - t.depth)) : (w = s ? 0.2 : 0, T = w), i = m0.encloseSpan(t, n, w, T, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = q(S)) : n === "angl" && S !== 0.049 && (i.style.borderTopWidth = q(S), i.style.borderRightWidth = q(S)), l = t.depth + T, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var D;
  if (r.backgroundColor)
    D = C.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var _ = /cancel|phase/.test(n) ? ["svg-align"] : [];
    D = C.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: l,
          wrapperClasses: _
        }
      ]
    }, e);
  }
  return /cancel/.test(n) && (D.height = t.height, D.depth = t.depth), /cancel/.test(n) && !s ? C.makeSpan(["mord", "cancel-lap"], [D], e) : C.makeSpan(["mord"], [D], e);
}, Ol = (r, e) => {
  var t = 0, n = new O.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [be(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * t + "pt"), n.setAttribute("height", "+" + 2 * t + "pt"), n.setAttribute("lspace", t + "pt"), n.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        n.setAttribute("style", "border: " + a + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
G({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = te(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Ll,
  mathmlBuilder: Ol
});
G({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = te(e[0], "color-token").color, l = te(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: Ll,
  mathmlBuilder: Ol
});
G({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
G({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
    };
  },
  htmlBuilder: Ll,
  mathmlBuilder: Ol
});
G({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var z1 = {};
function Kt(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = r, s = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, o = 0; o < t.length; ++o)
    z1[t[o]] = s;
  i && (oa[e] = i), l && (ua[e] = l);
}
var If = {};
function b(r, e) {
  If[r] = e;
}
function $s(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var La = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new $("{" + r.envName + "} can be used only in display mode.");
};
function Hl(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function T0(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: s,
    autoTag: o,
    singleRow: u,
    emptySingleRow: h,
    maxNumCols: m,
    leqno: p
  } = e;
  if (r.gullet.beginGroup(), u || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var g = r.gullet.expandMacroAsText("\\arraystretch");
    if (g == null)
      l = 1;
    else if (l = parseFloat(g), !l || l < 0)
      throw new $("Invalid \\arraystretch: " + g);
  }
  r.gullet.beginGroup();
  var v = [], w = [v], T = [], S = [], D = o != null ? [] : void 0;
  function _() {
    o && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function A() {
    D && (r.gullet.macros.get("\\df@tag") ? (D.push(r.subparse([new Fl("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : D.push(!!o && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (_(), S.push($s(r)); ; ) {
    var F = r.parseExpression(!1, u ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), F = {
      type: "ordgroup",
      mode: r.mode,
      body: F
    }, t && (F = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [F]
    }), v.push(F);
    var M = r.fetch().text;
    if (M === "&") {
      if (m && v.length === m) {
        if (u || s)
          throw new $("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (M === "\\end") {
      A(), v.length === 1 && F.type === "styling" && F.body[0].body.length === 0 && (w.length > 1 || !h) && w.pop(), S.length < w.length + 1 && S.push([]);
      break;
    } else if (M === "\\\\") {
      r.consume();
      var B = void 0;
      r.gullet.future().text !== " " && (B = r.parseSizeGroup(!0)), T.push(B ? B.value : null), A(), S.push($s(r)), v = [], w.push(v), _();
    } else
      throw new $("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: l,
    body: w,
    cols: i,
    rowGaps: T,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: S,
    colSeparationType: s,
    tags: D,
    leqno: p
  };
}
function Pl(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var e0 = function(e, t) {
  var n, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), u = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), m = 1 / t.fontMetrics().ptPerEm, p = 5 * m;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var g = t.havingStyle(Q.SCRIPT).sizeMultiplier;
    p = 0.2778 * (g / t.sizeMultiplier);
  }
  var v = e.colSeparationType === "CD" ? Fe({
    number: 3,
    unit: "ex"
  }, t) : 12 * m, w = 3 * m, T = e.arraystretch * v, S = 0.7 * T, D = 0.3 * T, _ = 0;
  function A(r0) {
    for (var n0 = 0; n0 < r0.length; ++n0)
      n0 > 0 && (_ += 0.25), u.push({
        pos: _,
        isDashed: r0[n0]
      });
  }
  for (A(l[0]), n = 0; n < e.body.length; ++n) {
    var F = e.body[n], M = S, B = D;
    s < F.length && (s = F.length);
    var U = new Array(F.length);
    for (a = 0; a < F.length; ++a) {
      var I = ue(F[a], t);
      B < I.depth && (B = I.depth), M < I.height && (M = I.height), U[a] = I;
    }
    var z = e.rowGaps[n], L = 0;
    z && (L = Fe(z, t), L > 0 && (L += D, B < L && (B = L), L = 0)), e.addJot && (B += w), U.height = M, U.depth = B, _ += M, U.pos = _, _ += B + L, o[n] = U, A(l[n + 1]);
  }
  var J = _ / 2 + t.fontMetrics().axisHeight, Le = e.cols || [], se = [], xe, Ae, Ve = [];
  if (e.tags && e.tags.some((r0) => r0))
    for (n = 0; n < i; ++n) {
      var fe = o[n], ye = fe.pos - J, Ee = e.tags[n], re = void 0;
      Ee === !0 ? re = C.makeSpan(["eqn-num"], [], t) : Ee === !1 ? re = C.makeSpan([], [], t) : re = C.makeSpan([], Ge(Ee, t, !0), t), re.depth = fe.depth, re.height = fe.height, Ve.push({
        type: "elem",
        elem: re,
        shift: ye
      });
    }
  for (
    a = 0, Ae = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || Ae < Le.length;
    ++a, ++Ae
  ) {
    for (var he = Le[Ae] || {}, me = !0; he.type === "separator"; ) {
      if (me || (xe = C.makeSpan(["arraycolsep"], []), xe.style.width = q(t.fontMetrics().doubleRuleSep), se.push(xe)), he.separator === "|" || he.separator === ":") {
        var Oe = he.separator === "|" ? "solid" : "dashed", P = C.makeSpan(["vertical-separator"], [], t);
        P.style.height = q(_), P.style.borderRightWidth = q(h), P.style.borderRightStyle = Oe, P.style.margin = "0 " + q(-h / 2);
        var Ze = _ - J;
        Ze && (P.style.verticalAlign = q(-Ze)), se.push(P);
      } else
        throw new $("Invalid separator type: " + he.separator);
      Ae++, he = Le[Ae] || {}, me = !1;
    }
    if (!(a >= s)) {
      var Pe = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Pe = Z.deflt(he.pregap, p), Pe !== 0 && (xe = C.makeSpan(["arraycolsep"], []), xe.style.width = q(Pe), se.push(xe)));
      var Qe = [];
      for (n = 0; n < i; ++n) {
        var ht = o[n], ft = ht[a];
        if (ft) {
          var R = ht.pos - J;
          ft.depth = ht.depth, ft.height = ht.height, Qe.push({
            type: "elem",
            elem: ft,
            shift: R
          });
        }
      }
      Qe = C.makeVList({
        positionType: "individualShift",
        children: Qe
      }, t), Qe = C.makeSpan(["col-align-" + (he.align || "c")], [Qe]), se.push(Qe), (a < s - 1 || e.hskipBeforeAndAfter) && (Pe = Z.deflt(he.postgap, p), Pe !== 0 && (xe = C.makeSpan(["arraycolsep"], []), xe.style.width = q(Pe), se.push(xe)));
    }
  }
  if (o = C.makeSpan(["mtable"], se), u.length > 0) {
    for (var ne = C.makeLineSpan("hline", t, h), ge = C.makeLineSpan("hdashline", t, h), ve = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; u.length > 0; ) {
      var je = u.pop(), lr = je.pos - J;
      je.isDashed ? ve.push({
        type: "elem",
        elem: ge,
        shift: lr
      }) : ve.push({
        type: "elem",
        elem: ne,
        shift: lr
      });
    }
    o = C.makeVList({
      positionType: "individualShift",
      children: ve
    }, t);
  }
  if (Ve.length === 0)
    return C.makeSpan(["mord"], [o], t);
  var Ht = C.makeVList({
    positionType: "individualShift",
    children: Ve
  }, t);
  return Ht = C.makeSpan(["tag"], [Ht], t), C.makeFragment([o, Ht]);
}, zf = {
  c: "center ",
  l: "left ",
  r: "right "
}, t0 = function(e, t) {
  for (var n = [], a = new O.MathNode("mtd", [], ["mtr-glue"]), i = new O.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], u = 0; u < s.length; u++)
      o.push(new O.MathNode("mtd", [be(s[u], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), n.push(new O.MathNode("mtr", o));
  }
  var h = new O.MathNode("mtable", n), m = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", q(m));
  var p = "", g = "";
  if (e.cols && e.cols.length > 0) {
    var v = e.cols, w = "", T = !1, S = 0, D = v.length;
    v[0].type === "separator" && (p += "top ", S = 1), v[v.length - 1].type === "separator" && (p += "bottom ", D -= 1);
    for (var _ = S; _ < D; _++)
      v[_].type === "align" ? (g += zf[v[_].align], T && (w += "none "), T = !0) : v[_].type === "separator" && T && (w += v[_].separator === "|" ? "solid " : "dashed ", T = !1);
    h.setAttribute("columnalign", g.trim()), /[sd]/.test(w) && h.setAttribute("columnlines", w.trim());
  }
  if (e.colSeparationType === "align") {
    for (var A = e.cols || [], F = "", M = 1; M < A.length; M++)
      F += M % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", F.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var B = "", U = e.hLinesBeforeRow;
  p += U[0].length > 0 ? "left " : "", p += U[U.length - 1].length > 0 ? "right " : "";
  for (var I = 1; I < U.length - 1; I++)
    B += U[I].length === 0 ? "none " : U[I][0] ? "dashed " : "solid ";
  return /[sd]/.test(B) && h.setAttribute("rowlines", B.trim()), p !== "" && (h = new O.MathNode("menclose", [h]), h.setAttribute("notation", p.trim())), e.arraystretch && e.arraystretch < 1 && (h = new O.MathNode("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, R1 = function(e, t) {
  e.envName.indexOf("ed") === -1 && La(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = T0(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : Hl(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s, o = 0, u = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var h = "", m = 0; m < t[0].body.length; m++) {
      var p = te(t[0].body[m], "textord");
      h += p.text;
    }
    s = Number(h), o = s * 2;
  }
  var g = !o;
  l.body.forEach(function(S) {
    for (var D = 1; D < S.length; D += 2) {
      var _ = te(S[D], "styling"), A = te(_.body[0], "ordgroup");
      A.body.unshift(u);
    }
    if (g)
      o < S.length && (o = S.length);
    else {
      var F = S.length / 2;
      if (s < F)
        throw new $("Too many math in a row: " + ("expected " + s + ", but got " + F), S[0]);
    }
  });
  for (var v = 0; v < o; ++v) {
    var w = "r", T = 0;
    v % 2 === 1 ? w = "l" : v > 0 && g && (T = 1), n[v] = {
      type: "align",
      align: w,
      pregap: T,
      postgap: 0
    };
  }
  return l.colSeparationType = g ? "align" : "alignat", l;
};
Kt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ia(e[0]), n = t ? [e[0]] : te(e[0], "ordgroup").body, a = n.map(function(l) {
      var s = Il(l), o = s.text;
      if ("lcr".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      if (o === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (o === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new $("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return T0(r.parser, i, Pl(r.envName));
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var a = r.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new $("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = T0(r.parser, n, Pl(r.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
    return i.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = T0(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ia(e[0]), n = t ? [e[0]] : te(e[0], "ordgroup").body, a = n.map(function(l) {
      var s = Il(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new $("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new $("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = T0(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new $("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = T0(r.parser, e, Pl(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: R1,
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Z.contains(["gather", "gather*"], r.envName) && La(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Hl(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return T0(r.parser, e, "display");
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: R1,
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    La(r);
    var e = {
      autoTag: Hl(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return T0(r.parser, e, "display");
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
Kt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return La(r), yf(r.parser);
  },
  htmlBuilder: e0,
  mathmlBuilder: t0
});
b("\\nonumber", "\\gdef\\@eqnsw{0}");
b("\\notag", "\\nonumber");
G({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new $(r.funcName + " valid only within array environment");
  }
});
var Ys = z1;
G({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    if (a.type !== "ordgroup")
      throw new $("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += te(a.body[l], "textord").text;
    if (n === "\\begin") {
      if (!Ys.hasOwnProperty(i))
        throw new $("No such environment: " + i, a);
      var s = Ys[i], {
        args: o,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", s), h = {
        mode: t.mode,
        envName: i,
        parser: t
      }, m = s.handler(h, o, u);
      t.expect("\\end", !1);
      var p = t.nextToken, g = te(t.parseFunction(), "environment");
      if (g.name !== i)
        throw new $("Mismatch: \\begin{" + i + "} matched by \\end{" + g.name + "}", p);
      return m;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var L1 = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return ue(r.body, n);
}, O1 = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return be(r.body, n);
}, Zs = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
G({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = ca(e[0]), i = n;
    return i in Zs && (i = Zs[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: L1,
  mathmlBuilder: O1
});
G({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0], a = Z.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: za(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: a
    };
  }
});
G({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      breakOnTokenText: a
    } = r, {
      mode: i
    } = t, l = t.parseExpression(!0, a), s = "math" + n.slice(1);
    return {
      type: "font",
      mode: i,
      font: s,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: L1,
  mathmlBuilder: O1
});
var H1 = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= Q.SCRIPT.id ? t.text() : Q.DISPLAY : r === "text" && t.size === Q.DISPLAY.size ? t = Q.TEXT : r === "script" ? t = Q.SCRIPT : r === "scriptscript" && (t = Q.SCRIPTSCRIPT), t;
}, ql = (r, e) => {
  var t = H1(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var l = ue(r.numer, i, e);
  if (r.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var u = ue(r.denom, i, e), h, m, p;
  r.hasBarLine ? (r.barSize ? (m = Fe(r.barSize, e), h = C.makeLineSpan("frac-line", e, m)) : h = C.makeLineSpan("frac-line", e), m = h.height, p = h.height) : (h = null, m = 0, p = e.fontMetrics().defaultRuleThickness);
  var g, v, w;
  t.size === Q.DISPLAY.size || r.size === "display" ? (g = e.fontMetrics().num1, m > 0 ? v = 3 * p : v = 7 * p, w = e.fontMetrics().denom1) : (m > 0 ? (g = e.fontMetrics().num2, v = p) : (g = e.fontMetrics().num3, v = 3 * p), w = e.fontMetrics().denom2);
  var T;
  if (h) {
    var D = e.fontMetrics().axisHeight;
    g - l.depth - (D + 0.5 * m) < v && (g += v - (g - l.depth - (D + 0.5 * m))), D - 0.5 * m - (u.height - w) < v && (w += v - (D - 0.5 * m - (u.height - w)));
    var _ = -(D - 0.5 * m);
    T = C.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: w
      }, {
        type: "elem",
        elem: h,
        shift: _
      }, {
        type: "elem",
        elem: l,
        shift: -g
      }]
    }, e);
  } else {
    var S = g - l.depth - (u.height - w);
    S < v && (g += 0.5 * (v - S), w += 0.5 * (v - S)), T = C.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: w
      }, {
        type: "elem",
        elem: l,
        shift: -g
      }]
    }, e);
  }
  i = e.havingStyle(t), T.height *= i.sizeMultiplier / e.sizeMultiplier, T.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var A;
  t.size === Q.DISPLAY.size ? A = e.fontMetrics().delim1 : t.size === Q.SCRIPTSCRIPT.size ? A = e.havingStyle(Q.SCRIPT).fontMetrics().delim2 : A = e.fontMetrics().delim2;
  var F, M;
  return r.leftDelim == null ? F = on(e, ["mopen"]) : F = f0.customSizedDelim(r.leftDelim, A, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? M = C.makeSpan([]) : r.rightDelim == null ? M = on(e, ["mclose"]) : M = f0.customSizedDelim(r.rightDelim, A, !0, e.havingStyle(t), r.mode, ["mclose"]), C.makeSpan(["mord"].concat(i.sizingClasses(e)), [F, C.makeSpan(["mfrac"], [T]), M], e);
}, Ul = (r, e) => {
  var t = new O.MathNode("mfrac", [be(r.numer, e), be(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = Fe(r.barSize, e);
    t.setAttribute("linethickness", q(n));
  }
  var a = H1(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new O.MathNode("mstyle", [t]);
    var i = a.size === Q.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var l = [];
    if (r.leftDelim != null) {
      var s = new O.MathNode("mo", [new O.TextNode(r.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), r.rightDelim != null) {
      var o = new O.MathNode("mo", [new O.TextNode(r.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    return Bl(l);
  }
  return t;
};
G({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1], l, s = null, o = null, u = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, s = "(", o = ")";
        break;
      case "\\\\bracefrac":
        l = !1, s = "\\{", o = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, s = "[", o = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        u = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        u = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: l,
      leftDelim: s,
      rightDelim: o,
      size: u,
      barSize: null
    };
  },
  htmlBuilder: ql,
  mathmlBuilder: Ul
});
G({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
G({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: n
    } = r, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: n
    };
  }
});
var Qs = ["display", "text", "script", "scriptscript"], Js = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
G({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], a = e[5], i = ca(e[0]), l = i.type === "atom" && i.family === "open" ? Js(i.text) : null, s = ca(e[1]), o = s.type === "atom" && s.family === "close" ? Js(s.text) : null, u = te(e[2], "size"), h, m = null;
    u.isBlank ? h = !0 : (m = u.value, h = m.number > 0);
    var p = "auto", g = e[3];
    if (g.type === "ordgroup") {
      if (g.body.length > 0) {
        var v = te(g.body[0], "textord");
        p = Qs[Number(v.text)];
      }
    } else
      g = te(g, "textord"), p = Qs[Number(g.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: m,
      leftDelim: l,
      rightDelim: o,
      size: p
    };
  },
  htmlBuilder: ql,
  mathmlBuilder: Ul
});
G({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: te(e[0], "size").value,
      token: a
    };
  }
});
G({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = p4(te(e[1], "infix").size), l = e[2], s = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: l,
      continued: !1,
      hasBarLine: s,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: ql,
  mathmlBuilder: Ul
});
var P1 = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? ue(r.sup, e.havingStyle(t.sup()), e) : ue(r.sub, e.havingStyle(t.sub()), e), a = te(r.base, "horizBrace")) : a = te(r, "horizBrace");
  var i = ue(a.base, e.havingBaseStyle(Q.DISPLAY)), l = m0.svgSpan(a, e), s;
  if (a.isOver ? (s = C.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = C.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), s.children[0].children[0].children[0].classes.push("svg-align")), n) {
    var o = C.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
    a.isOver ? s = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }, e) : s = C.makeVList({
      positionType: "bottom",
      positionData: o.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: o
      }]
    }, e);
  }
  return C.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
}, Rf = (r, e) => {
  var t = m0.mathMLnode(r.label);
  return new O.MathNode(r.isOver ? "mover" : "munder", [be(r.base, e), t]);
};
G({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: e[0]
    };
  },
  htmlBuilder: P1,
  mathmlBuilder: Rf
});
G({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], a = te(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: Ne(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = Ge(r.body, e, !1);
    return C.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = F0(r.body, e);
    return t instanceof It || (t = new It("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
G({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = te(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < n.length; i++) {
      var l = n[i];
      l === "~" && (l = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var s = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: n,
      body: Ne(s)
    };
  }
});
G({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: Ne(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Ge(r.body, e, !1);
    return C.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new O.MathNode("mrow", vt(r.body, e));
  }
});
G({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r, i = te(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var s, o = {};
    switch (n) {
      case "\\htmlClass":
        o.class = i, s = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        o.id = i, s = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        o.style = i, s = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var u = i.split(","), h = 0; h < u.length; h++) {
          var m = u[h].split("=");
          if (m.length !== 2)
            throw new $("Error parsing key-value for \\htmlData");
          o["data-" + m[0].trim()] = m[1].trim();
        }
        s = {
          command: "\\htmlData",
          attributes: o
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(s) ? {
      type: "html",
      mode: t.mode,
      attributes: o,
      body: Ne(l)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = Ge(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = C.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => F0(r.body, e)
});
G({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: Ne(e[0]),
      mathml: Ne(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ge(r.html, e, !1);
    return C.makeFragment(t);
  },
  mathmlBuilder: (r, e) => F0(r.mathml, e)
});
var ui = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new $("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!R4(n))
    throw new $("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
G({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, s = "";
    if (t[0])
      for (var o = te(t[0], "raw").string, u = o.split(","), h = 0; h < u.length; h++) {
        var m = u[h].split("=");
        if (m.length === 2) {
          var p = m[1].trim();
          switch (m[0].trim()) {
            case "alt":
              s = p;
              break;
            case "width":
              a = ui(p);
              break;
            case "height":
              i = ui(p);
              break;
            case "totalheight":
              l = ui(p);
              break;
            default:
              throw new $("Invalid key: '" + m[0] + "' in \\includegraphics.");
          }
        }
      }
    var g = te(e[0], "url").url;
    return s === "" && (s = g, s = s.replace(/^.*[\\/]/, ""), s = s.substring(0, s.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: g
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: s,
      width: a,
      height: i,
      totalheight: l,
      src: g
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = Fe(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = Fe(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = Fe(r.width, e));
    var i = {
      height: q(t + n)
    };
    a > 0 && (i.width = q(a)), n > 0 && (i.verticalAlign = q(-n));
    var l = new L4(r.src, r.alt, i);
    return l.height = t, l.depth = n, l;
  },
  mathmlBuilder: (r, e) => {
    var t = new O.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = Fe(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = Fe(r.totalheight, e) - n, t.setAttribute("valign", q(-a))), t.setAttribute("height", q(n + a)), r.width.number > 0) {
      var i = Fe(r.width, e);
      t.setAttribute("width", q(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
G({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = te(e[0], "size");
    if (t.settings.strict) {
      var i = n[1] === "m", l = a.value.unit === "mu";
      i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(r, e) {
    return C.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = Fe(r.dimension, e);
    return new O.SpaceNode(t);
  }
});
G({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: n.slice(5),
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = C.makeSpan([], [ue(r.body, e)]), t = C.makeSpan(["inner"], [t], e)) : t = C.makeSpan(["inner"], [ue(r.body, e)]);
    var n = C.makeSpan(["fix"], []), a = C.makeSpan([r.alignment], [t, n], e), i = C.makeSpan(["strut"]);
    return i.style.height = q(a.height + a.depth), a.depth && (i.style.verticalAlign = q(-a.depth)), a.children.unshift(i), a = C.makeSpan(["thinbox"], [a], e), C.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new O.MathNode("mpadded", [be(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
G({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    var {
      funcName: t,
      parser: n
    } = r, a = n.mode;
    n.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", l = n.parseExpression(!1, i);
    return n.expect(i), n.switchMode(a), {
      type: "styling",
      mode: n.mode,
      style: "text",
      body: l
    };
  }
});
G({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new $("Mismatched " + r.funcName);
  }
});
var Ks = (r, e) => {
  switch (e.style.size) {
    case Q.DISPLAY.size:
      return r.display;
    case Q.TEXT.size:
      return r.text;
    case Q.SCRIPT.size:
      return r.script;
    case Q.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
G({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: Ne(e[0]),
      text: Ne(e[1]),
      script: Ne(e[2]),
      scriptscript: Ne(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ks(r, e), n = Ge(t, e, !1);
    return C.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Ks(r, e);
    return F0(t, e);
  }
});
var q1 = (r, e, t, n, a, i, l) => {
  r = C.makeSpan([], [r]);
  var s = t && Z.isCharacterBox(t), o, u;
  if (e) {
    var h = ue(e, n.havingStyle(a.sup()), n);
    u = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var m = ue(t, n.havingStyle(a.sub()), n);
    o = {
      elem: m,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - m.height)
    };
  }
  var p;
  if (u && o) {
    var g = n.fontMetrics().bigOpSpacing5 + o.elem.height + o.elem.depth + o.kern + r.depth + l;
    p = C.makeVList({
      positionType: "bottom",
      positionData: g,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: q(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: q(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (o) {
    var v = r.height - l;
    p = C.makeVList({
      positionType: "top",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: q(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, n);
  } else if (u) {
    var w = r.depth + l;
    p = C.makeVList({
      positionType: "bottom",
      positionData: w,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: q(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return r;
  var T = [p];
  if (o && i !== 0 && !s) {
    var S = C.makeSpan(["mspace"], [], n);
    S.style.marginRight = q(i), T.unshift(S);
  }
  return C.makeSpan(["mop", "op-limits"], T, n);
}, U1 = ["\\smallint"], Br = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = te(r.base, "op"), a = !0) : i = te(r, "op");
  var l = e.style, s = !1;
  l.size === Q.DISPLAY.size && i.symbol && !Z.contains(U1, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var u = s ? "Size2-Regular" : "Size1-Regular", h = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (h = i.name.slice(1), i.name = h === "oiint" ? "\\iint" : "\\iiint"), o = C.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), h.length > 0) {
      var m = o.italic, p = C.staticSvg(h + "Size" + (s ? "2" : "1"), e);
      o = C.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: o,
          shift: 0
        }, {
          type: "elem",
          elem: p,
          shift: s ? 0.08 : 0
        }]
      }, e), i.name = "\\" + h, o.classes.unshift("mop"), o.italic = m;
    }
  } else if (i.body) {
    var g = Ge(i.body, e, !0);
    g.length === 1 && g[0] instanceof Jt ? (o = g[0], o.classes[0] = "mop") : o = C.makeSpan(["mop"], g, e);
  } else {
    for (var v = [], w = 1; w < i.name.length; w++)
      v.push(C.mathsym(i.name[w], i.mode, e));
    o = C.makeSpan(["mop"], v, e);
  }
  var T = 0, S = 0;
  return (o instanceof Jt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (T = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, S = o.italic), a ? q1(o, t, n, e, l, S, T) : (T && (o.style.position = "relative", o.style.top = q(T)), o);
}, vn = (r, e) => {
  var t;
  if (r.symbol)
    t = new It("mo", [xt(r.name, r.mode)]), Z.contains(U1, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new It("mo", vt(r.body, e));
  else {
    t = new It("mi", [new tn(r.name.slice(1))]);
    var n = new It("mo", [xt("⁡", "text")]);
    r.parentIsSupSub ? t = new It("mrow", [t, n]) : t = _1([t, n]);
  }
  return t;
}, Lf = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
G({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = n;
    return a.length === 1 && (a = Lf[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: Br,
  mathmlBuilder: vn
});
G({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: Ne(n)
    };
  },
  htmlBuilder: Br,
  mathmlBuilder: vn
});
var Of = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
G({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Br,
  mathmlBuilder: vn
});
G({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Br,
  mathmlBuilder: vn
});
G({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = Of[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Br,
  mathmlBuilder: vn
});
var G1 = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = te(r.base, "operatorname"), a = !0) : i = te(r, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((m) => {
      var p = m.text;
      return typeof p == "string" ? {
        type: "textord",
        mode: m.mode,
        text: p
      } : m;
    }), o = Ge(s, e.withFont("mathrm"), !0), u = 0; u < o.length; u++) {
      var h = o[u];
      h instanceof Jt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = C.makeSpan(["mop"], o, e);
  } else
    l = C.makeSpan(["mop"], [], e);
  return a ? q1(l, t, n, e, e.style, 0, 0) : l;
}, Hf = (r, e) => {
  for (var t = vt(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof O.SpaceNode)) if (i instanceof O.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof O.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var s = t.map((h) => h.toText()).join("");
    t = [new O.TextNode(s)];
  }
  var o = new O.MathNode("mi", t);
  o.setAttribute("mathvariant", "normal");
  var u = new O.MathNode("mo", [xt("⁡", "text")]);
  return r.parentIsSupSub ? new O.MathNode("mrow", [o, u]) : O.newDocumentFragment([o, u]);
};
G({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: Ne(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: G1,
  mathmlBuilder: Hf
});
b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
nr({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? C.makeFragment(Ge(r.body, e, !1)) : C.makeSpan(["mord"], Ge(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return F0(r.body, e, !0);
  }
});
G({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = ue(r.body, e.havingCrampedStyle()), n = C.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return C.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mo", [new O.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new O.MathNode("mover", [be(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
G({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: Ne(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ge(r.body, e.withPhantom(), !1);
    return C.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = vt(r.body, e);
    return new O.MathNode("mphantom", t);
  }
});
G({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = C.makeSpan([], [ue(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0, t.children[n].depth = 0;
    return t = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), C.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = vt(Ne(r.body), e), n = new O.MathNode("mphantom", t), a = new O.MathNode("mpadded", [n]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
G({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = C.makeSpan(["inner"], [ue(r.body, e.withPhantom())]), n = C.makeSpan(["fix"], []);
    return C.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = vt(Ne(r.body), e), n = new O.MathNode("mphantom", t), a = new O.MathNode("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
G({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = te(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = ue(r.body, e), n = Fe(r.dy, e);
    return C.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mpadded", [be(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
G({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
G({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = te(e[0], "size"), l = te(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && te(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(r, e) {
    var t = C.makeSpan(["mord", "rule"], [], e), n = Fe(r.width, e), a = Fe(r.height, e), i = r.shift ? Fe(r.shift, e) : 0;
    return t.style.borderRightWidth = q(n), t.style.borderTopWidth = q(a), t.style.bottom = q(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = Fe(r.width, e), n = Fe(r.height, e), a = r.shift ? Fe(r.shift, e) : 0, i = e.color && e.getColor() || "black", l = new O.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", q(t)), l.setAttribute("height", q(n));
    var s = new O.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", q(a)) : (s.setAttribute("height", q(a)), s.setAttribute("depth", q(-a))), s.setAttribute("voffset", q(a)), s;
  }
});
function V1(r, e, t) {
  for (var n = Ge(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var l = n[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[l + 1] === "reset-size" + e.size && (n[i].classes[l + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return C.makeFragment(n);
}
var eo = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Pf = (r, e) => {
  var t = e.havingSize(r.size);
  return V1(r.body, t, e);
};
G({
  type: "sizing",
  names: eo,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: eo.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: Pf,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = vt(r.body, t), a = new O.MathNode("mstyle", n);
    return a.setAttribute("mathsize", q(t.sizeMultiplier)), a;
  }
});
G({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = !1, i = !1, l = t[0] && te(t[0], "ordgroup");
    if (l)
      for (var s = "", o = 0; o < l.body.length; ++o) {
        var u = l.body[o];
        if (s = u.text, s === "t")
          a = !0;
        else if (s === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var h = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: h,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = C.makeSpan([], [ue(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return C.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new O.MathNode("mpadded", [be(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
G({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(r, e) {
    var t = ue(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = C.wrapFragment(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < Q.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: u,
      advanceWidth: h
    } = f0.sqrtImage(s, e), m = o.height - u;
    m > t.height + t.depth + l && (l = (l + m - t.height - t.depth) / 2);
    var p = o.height - t.height - l - u;
    t.style.paddingLeft = q(h);
    var g = C.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + p)
      }, {
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: u
      }]
    }, e);
    if (r.index) {
      var v = e.havingStyle(Q.SCRIPTSCRIPT), w = ue(r.index, v, e), T = 0.6 * (g.height - g.depth), S = C.makeVList({
        positionType: "shift",
        positionData: -T,
        children: [{
          type: "elem",
          elem: w
        }]
      }, e), D = C.makeSpan(["root"], [S]);
      return C.makeSpan(["mord", "sqrt"], [D, g], e);
    } else
      return C.makeSpan(["mord", "sqrt"], [g], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new O.MathNode("mroot", [be(t, e), be(n, e)]) : new O.MathNode("msqrt", [be(t, e)]);
  }
});
var to = {
  display: Q.DISPLAY,
  text: Q.TEXT,
  script: Q.SCRIPT,
  scriptscript: Q.SCRIPTSCRIPT
};
G({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!0, t), l = n.slice(1, n.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = to[r.style], n = e.havingStyle(t).withFont("");
    return V1(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = to[r.style], n = e.havingStyle(t), a = vt(r.body, n), i = new O.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[r.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var qf = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === Q.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? Br : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === Q.DISPLAY.size || n.limits);
      return i ? G1 : null;
    } else {
      if (n.type === "accent")
        return Z.isCharacterBox(n.base) ? zl : null;
      if (n.type === "horizBrace") {
        var l = !e.sub;
        return l === n.isOver ? P1 : null;
      } else
        return null;
    }
  else return null;
};
nr({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = qf(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, l = ue(n, e), s, o, u = e.fontMetrics(), h = 0, m = 0, p = n && Z.isCharacterBox(n);
    if (a) {
      var g = e.havingStyle(e.style.sup());
      s = ue(a, g, e), p || (h = l.height - g.fontMetrics().supDrop * g.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var v = e.havingStyle(e.style.sub());
      o = ue(i, v, e), p || (m = l.depth + v.fontMetrics().subDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    var w;
    e.style === Q.DISPLAY ? w = u.sup1 : e.style.cramped ? w = u.sup3 : w = u.sup2;
    var T = e.sizeMultiplier, S = q(0.5 / u.ptPerEm / T), D = null;
    if (o) {
      var _ = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof Jt || _) && (D = q(-l.italic));
    }
    var A;
    if (s && o) {
      h = Math.max(h, w, s.depth + 0.25 * u.xHeight), m = Math.max(m, u.sub2);
      var F = u.defaultRuleThickness, M = 4 * F;
      if (h - s.depth - (o.height - m) < M) {
        m = M - (h - s.depth) + o.height;
        var B = 0.8 * u.xHeight - (h - s.depth);
        B > 0 && (h += B, m -= B);
      }
      var U = [{
        type: "elem",
        elem: o,
        shift: m,
        marginRight: S,
        marginLeft: D
      }, {
        type: "elem",
        elem: s,
        shift: -h,
        marginRight: S
      }];
      A = C.makeVList({
        positionType: "individualShift",
        children: U
      }, e);
    } else if (o) {
      m = Math.max(m, u.sub1, o.height - 0.8 * u.xHeight);
      var I = [{
        type: "elem",
        elem: o,
        marginLeft: D,
        marginRight: S
      }];
      A = C.makeVList({
        positionType: "shift",
        positionData: m,
        children: I
      }, e);
    } else if (s)
      h = Math.max(h, w, s.depth + 0.25 * u.xHeight), A = C.makeVList({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: s,
          marginRight: S
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var z = Xi(l, "right") || "mord";
    return C.makeSpan([z], [l, C.makeSpan(["msupsub"], [A])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [be(r.base, e)];
    r.sub && i.push(be(r.sub, e)), r.sup && i.push(be(r.sup, e));
    var l;
    if (t)
      l = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var u = r.base;
        u && u.type === "op" && u.limits && e.style === Q.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === Q.DISPLAY || u.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var o = r.base;
        o && o.type === "op" && o.limits && (e.style === Q.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === Q.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = r.base;
      s && s.type === "op" && s.limits && (e.style === Q.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === Q.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new O.MathNode(l, i);
  }
});
nr({
  type: "atom",
  htmlBuilder(r, e) {
    return C.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mo", [xt(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Nl(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var j1 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
nr({
  type: "mathord",
  htmlBuilder(r, e) {
    return C.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mi", [xt(r.text, r.mode, e)]), n = Nl(r, e) || "italic";
    return n !== j1[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
nr({
  type: "textord",
  htmlBuilder(r, e) {
    return C.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = xt(r.text, r.mode, e), n = Nl(r, e) || "normal", a;
    return r.mode === "text" ? a = new O.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new O.MathNode("mn", [t]) : r.text === "\\prime" ? a = new O.MathNode("mo", [t]) : a = new O.MathNode("mi", [t]), n !== j1[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var ci = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, hi = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
nr({
  type: "spacing",
  htmlBuilder(r, e) {
    if (hi.hasOwnProperty(r.text)) {
      var t = hi[r.text].className || "";
      if (r.mode === "text") {
        var n = C.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return C.makeSpan(["mspace", t], [C.mathsym(r.text, r.mode, e)], e);
    } else {
      if (ci.hasOwnProperty(r.text))
        return C.makeSpan(["mspace", ci[r.text]], [], e);
      throw new $('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (hi.hasOwnProperty(r.text))
      t = new O.MathNode("mtext", [new O.TextNode(" ")]);
    else {
      if (ci.hasOwnProperty(r.text))
        return new O.MathNode("mspace");
      throw new $('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var ro = () => {
  var r = new O.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
nr({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mtable", [new O.MathNode("mtr", [ro(), new O.MathNode("mtd", [F0(r.body, e)]), ro(), new O.MathNode("mtd", [F0(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var no = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, ao = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Uf = {
  "\\textit": "textit",
  "\\textup": "textup"
}, io = (r, e) => {
  var t = r.font;
  if (t) {
    if (no[t])
      return e.withTextFontFamily(no[t]);
    if (ao[t])
      return e.withTextFontWeight(ao[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Uf[t]);
};
G({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: Ne(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = io(r, e), n = Ge(r.body, t, !0);
    return C.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = io(r, e);
    return F0(r.body, t);
  }
});
G({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = ue(r.body, e), n = C.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = C.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return C.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new O.MathNode("mo", [new O.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new O.MathNode("munder", [be(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
G({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = ue(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return C.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new O.MathNode("mpadded", [be(r.body, e)], ["vcenter"]);
  }
});
G({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new $("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = lo(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), n.push(C.makeSymbol(l, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return C.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), C.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new O.TextNode(lo(r)), n = new O.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var lo = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Gf = b1;
b("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
b("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
b("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
b("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
b("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
b("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
b("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var so = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
b("\\char", function(r) {
  var e = r.popToken(), t, n = "";
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new $("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = so[e.text], n == null || n >= t)
      throw new $("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = so[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Gl = (r, e, t) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new $("\\newcommand's first argument must be a macro name");
  var a = n[0].text, i = r.isDefined(a);
  if (i && !e)
    throw new $("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new $("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var s = "", o = r.expandNextToken(); o.text !== "]" && o.text !== "EOF"; )
      s += o.text, o = r.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new $("Invalid number of arguments: " + s);
    l = parseInt(s), n = r.consumeArg().tokens;
  }
  return r.macros.set(a, {
    tokens: n,
    numArgs: l
  }), "";
};
b("\\newcommand", (r) => Gl(r, !1, !0));
b("\\renewcommand", (r) => Gl(r, !0, !1));
b("\\providecommand", (r) => Gl(r, !0, !0));
b("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
b("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
b("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), Gf[t], Ie.math[t], Ie.text[t]), "";
});
b("\\bgroup", "{");
b("\\egroup", "}");
b("~", "\\nobreakspace");
b("\\lq", "`");
b("\\rq", "'");
b("\\aa", "\\r a");
b("\\AA", "\\r A");
b("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
b("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
b("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
b("ℬ", "\\mathscr{B}");
b("ℰ", "\\mathscr{E}");
b("ℱ", "\\mathscr{F}");
b("ℋ", "\\mathscr{H}");
b("ℐ", "\\mathscr{I}");
b("ℒ", "\\mathscr{L}");
b("ℳ", "\\mathscr{M}");
b("ℛ", "\\mathscr{R}");
b("ℭ", "\\mathfrak{C}");
b("ℌ", "\\mathfrak{H}");
b("ℨ", "\\mathfrak{Z}");
b("\\Bbbk", "\\Bbb{k}");
b("·", "\\cdotp");
b("\\llap", "\\mathllap{\\textrm{#1}}");
b("\\rlap", "\\mathrlap{\\textrm{#1}}");
b("\\clap", "\\mathclap{\\textrm{#1}}");
b("\\mathstrut", "\\vphantom{(}");
b("\\underbar", "\\underline{\\text{#1}}");
b("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
b("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
b("\\ne", "\\neq");
b("≠", "\\neq");
b("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
b("∉", "\\notin");
b("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
b("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
b("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
b("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
b("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
b("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
b("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
b("⟂", "\\perp");
b("‼", "\\mathclose{!\\mkern-0.8mu!}");
b("∌", "\\notni");
b("⌜", "\\ulcorner");
b("⌝", "\\urcorner");
b("⌞", "\\llcorner");
b("⌟", "\\lrcorner");
b("©", "\\copyright");
b("®", "\\textregistered");
b("️", "\\textregistered");
b("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
b("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
b("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
b("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
b("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
b("⋮", "\\vdots");
b("\\varGamma", "\\mathit{\\Gamma}");
b("\\varDelta", "\\mathit{\\Delta}");
b("\\varTheta", "\\mathit{\\Theta}");
b("\\varLambda", "\\mathit{\\Lambda}");
b("\\varXi", "\\mathit{\\Xi}");
b("\\varPi", "\\mathit{\\Pi}");
b("\\varSigma", "\\mathit{\\Sigma}");
b("\\varUpsilon", "\\mathit{\\Upsilon}");
b("\\varPhi", "\\mathit{\\Phi}");
b("\\varPsi", "\\mathit{\\Psi}");
b("\\varOmega", "\\mathit{\\Omega}");
b("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
b("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
b("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
b("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
b("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
b("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var oo = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
b("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in oo ? e = oo[t] : (t.slice(0, 4) === "\\not" || t in Ie.math && Z.contains(["bin", "rel"], Ie.math[t].group)) && (e = "\\dotsb"), e;
});
var Vl = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
b("\\dotso", function(r) {
  var e = r.future().text;
  return e in Vl ? "\\ldots\\," : "\\ldots";
});
b("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Vl && e !== "," ? "\\ldots\\," : "\\ldots";
});
b("\\cdots", function(r) {
  var e = r.future().text;
  return e in Vl ? "\\@cdots\\," : "\\@cdots";
});
b("\\dotsb", "\\cdots");
b("\\dotsm", "\\cdots");
b("\\dotsi", "\\!\\cdots");
b("\\dotsx", "\\ldots\\,");
b("\\DOTSI", "\\relax");
b("\\DOTSB", "\\relax");
b("\\DOTSX", "\\relax");
b("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
b("\\,", "\\tmspace+{3mu}{.1667em}");
b("\\thinspace", "\\,");
b("\\>", "\\mskip{4mu}");
b("\\:", "\\tmspace+{4mu}{.2222em}");
b("\\medspace", "\\:");
b("\\;", "\\tmspace+{5mu}{.2777em}");
b("\\thickspace", "\\;");
b("\\!", "\\tmspace-{3mu}{.1667em}");
b("\\negthinspace", "\\!");
b("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
b("\\negthickspace", "\\tmspace-{5mu}{.277em}");
b("\\enspace", "\\kern.5em ");
b("\\enskip", "\\hskip.5em\\relax");
b("\\quad", "\\hskip1em\\relax");
b("\\qquad", "\\hskip2em\\relax");
b("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
b("\\tag@paren", "\\tag@literal{({#1})}");
b("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new $("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
b("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
b("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
b("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
b("\\newline", "\\\\\\relax");
b("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var W1 = q(c0["Main-Regular"][84][1] - 0.7 * c0["Main-Regular"][65][1]);
b("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + W1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
b("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + W1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
b("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
b("\\@hspace", "\\hskip #1\\relax");
b("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
b("\\ordinarycolon", ":");
b("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
b("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
b("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
b("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
b("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
b("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
b("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
b("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
b("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
b("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
b("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
b("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
b("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
b("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
b("∷", "\\dblcolon");
b("∹", "\\eqcolon");
b("≔", "\\coloneqq");
b("≕", "\\eqqcolon");
b("⩴", "\\Coloneqq");
b("\\ratio", "\\vcentcolon");
b("\\coloncolon", "\\dblcolon");
b("\\colonequals", "\\coloneqq");
b("\\coloncolonequals", "\\Coloneqq");
b("\\equalscolon", "\\eqqcolon");
b("\\equalscoloncolon", "\\Eqqcolon");
b("\\colonminus", "\\coloneq");
b("\\coloncolonminus", "\\Coloneq");
b("\\minuscolon", "\\eqcolon");
b("\\minuscoloncolon", "\\Eqcolon");
b("\\coloncolonapprox", "\\Colonapprox");
b("\\coloncolonsim", "\\Colonsim");
b("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
b("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
b("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
b("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
b("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
b("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
b("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
b("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
b("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
b("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
b("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
b("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
b("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
b("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
b("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
b("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
b("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
b("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
b("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
b("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
b("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
b("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
b("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
b("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
b("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
b("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
b("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
b("\\imath", "\\html@mathml{\\@imath}{ı}");
b("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
b("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
b("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
b("⟦", "\\llbracket");
b("⟧", "\\rrbracket");
b("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
b("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
b("⦃", "\\lBrace");
b("⦄", "\\rBrace");
b("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
b("⦵", "\\minuso");
b("\\darr", "\\downarrow");
b("\\dArr", "\\Downarrow");
b("\\Darr", "\\Downarrow");
b("\\lang", "\\langle");
b("\\rang", "\\rangle");
b("\\uarr", "\\uparrow");
b("\\uArr", "\\Uparrow");
b("\\Uarr", "\\Uparrow");
b("\\N", "\\mathbb{N}");
b("\\R", "\\mathbb{R}");
b("\\Z", "\\mathbb{Z}");
b("\\alef", "\\aleph");
b("\\alefsym", "\\aleph");
b("\\Alpha", "\\mathrm{A}");
b("\\Beta", "\\mathrm{B}");
b("\\bull", "\\bullet");
b("\\Chi", "\\mathrm{X}");
b("\\clubs", "\\clubsuit");
b("\\cnums", "\\mathbb{C}");
b("\\Complex", "\\mathbb{C}");
b("\\Dagger", "\\ddagger");
b("\\diamonds", "\\diamondsuit");
b("\\empty", "\\emptyset");
b("\\Epsilon", "\\mathrm{E}");
b("\\Eta", "\\mathrm{H}");
b("\\exist", "\\exists");
b("\\harr", "\\leftrightarrow");
b("\\hArr", "\\Leftrightarrow");
b("\\Harr", "\\Leftrightarrow");
b("\\hearts", "\\heartsuit");
b("\\image", "\\Im");
b("\\infin", "\\infty");
b("\\Iota", "\\mathrm{I}");
b("\\isin", "\\in");
b("\\Kappa", "\\mathrm{K}");
b("\\larr", "\\leftarrow");
b("\\lArr", "\\Leftarrow");
b("\\Larr", "\\Leftarrow");
b("\\lrarr", "\\leftrightarrow");
b("\\lrArr", "\\Leftrightarrow");
b("\\Lrarr", "\\Leftrightarrow");
b("\\Mu", "\\mathrm{M}");
b("\\natnums", "\\mathbb{N}");
b("\\Nu", "\\mathrm{N}");
b("\\Omicron", "\\mathrm{O}");
b("\\plusmn", "\\pm");
b("\\rarr", "\\rightarrow");
b("\\rArr", "\\Rightarrow");
b("\\Rarr", "\\Rightarrow");
b("\\real", "\\Re");
b("\\reals", "\\mathbb{R}");
b("\\Reals", "\\mathbb{R}");
b("\\Rho", "\\mathrm{P}");
b("\\sdot", "\\cdot");
b("\\sect", "\\S");
b("\\spades", "\\spadesuit");
b("\\sub", "\\subset");
b("\\sube", "\\subseteq");
b("\\supe", "\\supseteq");
b("\\Tau", "\\mathrm{T}");
b("\\thetasym", "\\vartheta");
b("\\weierp", "\\wp");
b("\\Zeta", "\\mathrm{Z}");
b("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
b("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
b("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
b("\\bra", "\\mathinner{\\langle{#1}|}");
b("\\ket", "\\mathinner{|{#1}\\rangle}");
b("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
b("\\Bra", "\\left\\langle#1\\right|");
b("\\Ket", "\\left|#1\\right\\rangle");
var X1 = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var o = (m) => (p) => {
    r && (p.macros.set("|", l), a.length && p.macros.set("\\|", s));
    var g = m;
    if (!m && a.length) {
      var v = p.future();
      v.text === "|" && (p.popToken(), g = !0);
    }
    return {
      tokens: g ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", o(!1)), a.length && e.macros.set("\\|", o(!0));
  var u = e.consumeArg().tokens, h = e.expandTokens([
    ...i,
    ...u,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
b("\\bra@ket", X1(!1));
b("\\bra@set", X1(!0));
b("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
b("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
b("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
b("\\angln", "{\\angl n}");
b("\\blue", "\\textcolor{##6495ed}{#1}");
b("\\orange", "\\textcolor{##ffa500}{#1}");
b("\\pink", "\\textcolor{##ff00af}{#1}");
b("\\red", "\\textcolor{##df0030}{#1}");
b("\\green", "\\textcolor{##28ae7b}{#1}");
b("\\gray", "\\textcolor{gray}{#1}");
b("\\purple", "\\textcolor{##9d38bd}{#1}");
b("\\blueA", "\\textcolor{##ccfaff}{#1}");
b("\\blueB", "\\textcolor{##80f6ff}{#1}");
b("\\blueC", "\\textcolor{##63d9ea}{#1}");
b("\\blueD", "\\textcolor{##11accd}{#1}");
b("\\blueE", "\\textcolor{##0c7f99}{#1}");
b("\\tealA", "\\textcolor{##94fff5}{#1}");
b("\\tealB", "\\textcolor{##26edd5}{#1}");
b("\\tealC", "\\textcolor{##01d1c1}{#1}");
b("\\tealD", "\\textcolor{##01a995}{#1}");
b("\\tealE", "\\textcolor{##208170}{#1}");
b("\\greenA", "\\textcolor{##b6ffb0}{#1}");
b("\\greenB", "\\textcolor{##8af281}{#1}");
b("\\greenC", "\\textcolor{##74cf70}{#1}");
b("\\greenD", "\\textcolor{##1fab54}{#1}");
b("\\greenE", "\\textcolor{##0d923f}{#1}");
b("\\goldA", "\\textcolor{##ffd0a9}{#1}");
b("\\goldB", "\\textcolor{##ffbb71}{#1}");
b("\\goldC", "\\textcolor{##ff9c39}{#1}");
b("\\goldD", "\\textcolor{##e07d10}{#1}");
b("\\goldE", "\\textcolor{##a75a05}{#1}");
b("\\redA", "\\textcolor{##fca9a9}{#1}");
b("\\redB", "\\textcolor{##ff8482}{#1}");
b("\\redC", "\\textcolor{##f9685d}{#1}");
b("\\redD", "\\textcolor{##e84d39}{#1}");
b("\\redE", "\\textcolor{##bc2612}{#1}");
b("\\maroonA", "\\textcolor{##ffbde0}{#1}");
b("\\maroonB", "\\textcolor{##ff92c6}{#1}");
b("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
b("\\maroonD", "\\textcolor{##ca337c}{#1}");
b("\\maroonE", "\\textcolor{##9e034e}{#1}");
b("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
b("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
b("\\purpleC", "\\textcolor{##aa87ff}{#1}");
b("\\purpleD", "\\textcolor{##7854ab}{#1}");
b("\\purpleE", "\\textcolor{##543b78}{#1}");
b("\\mintA", "\\textcolor{##f5f9e8}{#1}");
b("\\mintB", "\\textcolor{##edf2df}{#1}");
b("\\mintC", "\\textcolor{##e0e5cc}{#1}");
b("\\grayA", "\\textcolor{##f6f7f7}{#1}");
b("\\grayB", "\\textcolor{##f0f1f2}{#1}");
b("\\grayC", "\\textcolor{##e3e5e6}{#1}");
b("\\grayD", "\\textcolor{##d6d8da}{#1}");
b("\\grayE", "\\textcolor{##babec2}{#1}");
b("\\grayF", "\\textcolor{##888d93}{#1}");
b("\\grayG", "\\textcolor{##626569}{#1}");
b("\\grayH", "\\textcolor{##3b3e40}{#1}");
b("\\grayI", "\\textcolor{##21242c}{#1}");
b("\\kaBlue", "\\textcolor{##314453}{#1}");
b("\\kaGreen", "\\textcolor{##71B307}{#1}");
typeof document < "u" && document.compatMode !== "CSS1Compat" && typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
function jl() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let ar = jl();
function $1(r) {
  ar = r;
}
const Y1 = /[&<>"']/, Vf = new RegExp(Y1.source, "g"), Z1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, jf = new RegExp(Z1.source, "g"), Wf = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, uo = (r) => Wf[r];
function pt(r, e) {
  if (e) {
    if (Y1.test(r))
      return r.replace(Vf, uo);
  } else if (Z1.test(r))
    return r.replace(jf, uo);
  return r;
}
const Xf = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function $f(r) {
  return r.replace(Xf, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Yf = /(^|[^\[])\^/g;
function pe(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(Yf, "$1"), t = t.replace(a, l), n;
    },
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
function co(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const nn = { exec: () => null };
function ho(r, e) {
  const t = r.replace(/\|/g, (i, l, s) => {
    let o = !1, u = l;
    for (; --u >= 0 && s[u] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), n = t.split(/ \|/);
  let a = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; )
        n.push("");
  for (; a < n.length; a++)
    n[a] = n[a].trim().replace(/\\\|/g, "|");
  return n;
}
function Rn(r, e, t) {
  const n = r.length;
  if (n === 0)
    return "";
  let a = 0;
  for (; a < n; ) {
    const i = r.charAt(n - a - 1);
    if (i === e && !t)
      a++;
    else if (i !== e && t)
      a++;
    else
      break;
  }
  return r.slice(0, n - a);
}
function Zf(r, e) {
  if (r.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++)
    if (r[n] === "\\")
      n++;
    else if (r[n] === e[0])
      t++;
    else if (r[n] === e[1] && (t--, t < 0))
      return n;
  return -1;
}
function fo(r, e, t, n) {
  const a = e.href, i = e.title ? pt(e.title) : null, l = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const s = {
      type: "link",
      raw: t,
      href: a,
      title: i,
      text: l,
      tokens: n.inlineTokens(l)
    };
    return n.state.inLink = !1, s;
  }
  return {
    type: "image",
    raw: t,
    href: a,
    title: i,
    text: pt(l)
  };
}
function Qf(r, e) {
  const t = r.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const n = t[1];
  return e.split(`
`).map((a) => {
    const i = a.match(/^\s+/);
    if (i === null)
      return a;
    const [l] = i;
    return l.length >= n.length ? a.slice(n.length) : a;
  }).join(`
`);
}
class ha {
  // set by the lexer
  constructor(e) {
    _e(this, "options");
    _e(this, "rules");
    // set by the lexer
    _e(this, "lexer");
    this.options = e || ar;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : Rn(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], a = Qf(n, t[3] || "");
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: a
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const a = Rn(n, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (n = a.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = Rn(n.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(n);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: n
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const a = n.length > 1, i = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = a ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = a ? n : "[*+-]");
      const l = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let s = "", o = "", u = !1;
      for (; e; ) {
        let h = !1;
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e))
          break;
        s = t[0], e = e.substring(s.length);
        let m = t[2].split(`
`, 1)[0].replace(/^\t+/, (S) => " ".repeat(3 * S.length)), p = e.split(`
`, 1)[0], g = 0;
        this.options.pedantic ? (g = 2, o = m.trimStart()) : (g = t[2].search(/[^ ]/), g = g > 4 ? 1 : g, o = m.slice(g), g += t[1].length);
        let v = !1;
        if (!m && /^ *$/.test(p) && (s += p + `
`, e = e.substring(p.length + 1), h = !0), !h) {
          const S = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), D = new RegExp(`^ {0,${Math.min(3, g - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), _ = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:\`\`\`|~~~)`), A = new RegExp(`^ {0,${Math.min(3, g - 1)}}#`);
          for (; e; ) {
            const F = e.split(`
`, 1)[0];
            if (p = F, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), _.test(p) || A.test(p) || S.test(p) || D.test(e))
              break;
            if (p.search(/[^ ]/) >= g || !p.trim())
              o += `
` + p.slice(g);
            else {
              if (v || m.search(/[^ ]/) >= 4 || _.test(m) || A.test(m) || D.test(m))
                break;
              o += `
` + p;
            }
            !v && !p.trim() && (v = !0), s += F + `
`, e = e.substring(F.length + 1), m = p.slice(g);
          }
        }
        i.loose || (u ? i.loose = !0 : /\n *\n *$/.test(s) && (u = !0));
        let w = null, T;
        this.options.gfm && (w = /^\[[ xX]\] /.exec(o), w && (T = w[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: s,
          task: !!w,
          checked: T,
          loose: !1,
          text: o,
          tokens: []
        }), i.raw += s;
      }
      i.items[i.items.length - 1].raw = s.trimEnd(), i.items[i.items.length - 1].text = o.trimEnd(), i.raw = i.raw.trimEnd();
      for (let h = 0; h < i.items.length; h++)
        if (this.lexer.state.top = !1, i.items[h].tokens = this.lexer.blockTokens(i.items[h].text, []), !i.loose) {
          const m = i.items[h].tokens.filter((g) => g.type === "space"), p = m.length > 0 && m.some((g) => /\n.*\n/.test(g.raw));
          i.loose = p;
        }
      if (i.loose)
        for (let h = 0; h < i.items.length; h++)
          i.items[h].loose = !0;
      return i;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "), a = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: a,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const n = ho(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], l = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === a.length) {
      for (const s of a)
        /^ *-+: *$/.test(s) ? l.align.push("right") : /^ *:-+: *$/.test(s) ? l.align.push("center") : /^ *:-+ *$/.test(s) ? l.align.push("left") : l.align.push(null);
      for (const s of n)
        l.header.push({
          text: s,
          tokens: this.lexer.inline(s)
        });
      for (const s of i)
        l.rows.push(ho(s, l.header.length).map((o) => ({
          text: o,
          tokens: this.lexer.inline(o)
        })));
      return l;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: pt(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n))
          return;
        const l = Rn(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0)
          return;
      } else {
        const l = Zf(t[2], "()");
        if (l > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let a = t[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        l && (a = l[1], i = l[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(n) ? a = a.slice(1) : a = a.slice(1, -1)), fo(t, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const a = (n[2] || n[1]).replace(/\s+/g, " "), i = t[a.toLowerCase()];
      if (!i) {
        const l = n[0].charAt(0);
        return {
          type: "text",
          raw: l,
          text: l
        };
      }
      return fo(n, i, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && n.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const l = [...a[0]].length - 1;
      let s, o, u = l, h = 0;
      const m = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (m.lastIndex = 0, t = t.slice(-1 * e.length + l); (a = m.exec(t)) != null; ) {
        if (s = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !s)
          continue;
        if (o = [...s].length, a[3] || a[4]) {
          u += o;
          continue;
        } else if ((a[5] || a[6]) && l % 3 && !((l + o) % 3)) {
          h += o;
          continue;
        }
        if (u -= o, u > 0)
          continue;
        o = Math.min(o, o + u + h);
        const p = [...a[0]][0].length, g = e.slice(0, l + a.index + p + o);
        if (Math.min(l, o) % 2) {
          const w = g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: w,
            tokens: this.lexer.inlineTokens(w)
          };
        }
        const v = g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: v,
          tokens: this.lexer.inlineTokens(v)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(n), i = /^ /.test(n) && / $/.test(n);
      return a && i && (n = n.substring(1, n.length - 1)), n = pt(n, !0), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, a;
      return t[2] === "@" ? (n = pt(t[1]), a = "mailto:" + n) : (n = pt(t[1]), a = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: a,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let a, i;
      if (t[2] === "@")
        a = pt(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (l !== t[0]);
        a = pt(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: a,
        href: i,
        tokens: [
          {
            type: "text",
            raw: a,
            text: a
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let n;
      return this.lexer.state.inRawBlock ? n = t[0] : n = pt(t[0]), {
        type: "text",
        raw: t[0],
        text: n
      };
    }
  }
}
const Jf = /^(?: *(?:\n|$))+/, Kf = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, e2 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, _n = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, t2 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Q1 = /(?:[*+-]|\d{1,9}[.)])/, J1 = pe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Q1).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Wl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, r2 = /^[^\n]+/, Xl = /(?!\s*\])(?:\\.|[^\[\]\\])+/, n2 = pe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Xl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), a2 = pe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Q1).getRegex(), Oa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", $l = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, i2 = pe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", $l).replace("tag", Oa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), K1 = pe(Wl).replace("hr", _n).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oa).getRegex(), l2 = pe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", K1).getRegex(), Yl = {
  blockquote: l2,
  code: Kf,
  def: n2,
  fences: e2,
  heading: t2,
  hr: _n,
  html: i2,
  lheading: J1,
  list: a2,
  newline: Jf,
  paragraph: K1,
  table: nn,
  text: r2
}, mo = pe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", _n).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oa).getRegex(), s2 = {
  ...Yl,
  table: mo,
  paragraph: pe(Wl).replace("hr", _n).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", mo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oa).getRegex()
}, o2 = {
  ...Yl,
  html: pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", $l).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: nn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: pe(Wl).replace("hr", _n).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", J1).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ec = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, u2 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, tc = /^( {2,}|\\)\n(?!\s*$)/, c2 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, yn = "\\p{P}\\p{S}", h2 = pe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, yn).getRegex(), f2 = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, m2 = pe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, yn).getRegex(), d2 = pe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, yn).getRegex(), p2 = pe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, yn).getRegex(), g2 = pe(/\\([punct])/, "gu").replace(/punct/g, yn).getRegex(), b2 = pe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), v2 = pe($l).replace("(?:-->|$)", "-->").getRegex(), _2 = pe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", v2).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), fa = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, y2 = pe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", fa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), rc = pe(/^!?\[(label)\]\[(ref)\]/).replace("label", fa).replace("ref", Xl).getRegex(), nc = pe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Xl).getRegex(), w2 = pe("reflink|nolink(?!\\()", "g").replace("reflink", rc).replace("nolink", nc).getRegex(), Zl = {
  _backpedal: nn,
  // only used for GFM url
  anyPunctuation: g2,
  autolink: b2,
  blockSkip: f2,
  br: tc,
  code: u2,
  del: nn,
  emStrongLDelim: m2,
  emStrongRDelimAst: d2,
  emStrongRDelimUnd: p2,
  escape: ec,
  link: y2,
  nolink: nc,
  punctuation: h2,
  reflink: rc,
  reflinkSearch: w2,
  tag: _2,
  text: c2,
  url: nn
}, k2 = {
  ...Zl,
  link: pe(/^!?\[(label)\]\((.*?)\)/).replace("label", fa).getRegex(),
  reflink: pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", fa).getRegex()
}, Zi = {
  ...Zl,
  escape: pe(ec).replace("])", "~|])").getRegex(),
  url: pe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, D2 = {
  ...Zi,
  br: pe(tc).replace("{2,}", "*").getRegex(),
  text: pe(Zi.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Ln = {
  normal: Yl,
  gfm: s2,
  pedantic: o2
}, Ur = {
  normal: Zl,
  gfm: Zi,
  breaks: D2,
  pedantic: k2
};
class jt {
  constructor(e) {
    _e(this, "tokens");
    _e(this, "options");
    _e(this, "state");
    _e(this, "tokenizer");
    _e(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ar, this.options.tokenizer = this.options.tokenizer || new ha(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Ln.normal,
      inline: Ur.normal
    };
    this.options.pedantic ? (t.block = Ln.pedantic, t.inline = Ur.pedantic) : this.options.gfm && (t.block = Ln.gfm, this.options.breaks ? t.inline = Ur.breaks : t.inline = Ur.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Ln,
      inline: Ur
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new jt(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new jt(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (s, o, u) => o + "    ".repeat(u.length));
    let n, a, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s) => (n = s.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
        if (n = this.tokenizer.space(e)) {
          e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n);
          continue;
        }
        if (n = this.tokenizer.code(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + n.raw, a.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.fences(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.heading(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.hr(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.blockquote(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.list(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.html(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.def(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + n.raw, a.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
            href: n.href,
            title: n.title
          });
          continue;
        }
        if (n = this.tokenizer.table(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.lheading(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let s = 1 / 0;
          const o = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach((h) => {
            u = h.call({ lexer: this }, o), typeof u == "number" && u >= 0 && (s = Math.min(s, u));
          }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(i))) {
          a = t[t.length - 1], l && a.type === "paragraph" ? (a.raw += `
` + n.raw, a.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(n), l = i.length !== e.length, e = e.substring(n.raw.length);
          continue;
        }
        if (n = this.tokenizer.text(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && a.type === "text" ? (a.raw += `
` + n.raw, a.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(n);
          continue;
        }
        if (e) {
          const s = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(s);
            break;
          } else
            throw new Error(s);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let n, a, i, l = e, s, o, u;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          h.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, s.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (u = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((h) => (n = h.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
        if (n = this.tokenizer.escape(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.tag(e)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && n.type === "text" && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.link(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(n.raw.length), a = t[t.length - 1], a && n.type === "text" && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.emStrong(e, l, u)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.codespan(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.br(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.del(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.autolink(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e))) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let h = 1 / 0;
          const m = e.slice(1);
          let p;
          this.options.extensions.startInline.forEach((g) => {
            p = g.call({ lexer: this }, m), typeof p == "number" && p >= 0 && (h = Math.min(h, p));
          }), h < 1 / 0 && h >= 0 && (i = e.substring(0, h + 1));
        }
        if (n = this.tokenizer.inlineText(i)) {
          e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), o = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (e) {
          const h = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
    return t;
  }
}
class ma {
  constructor(e) {
    _e(this, "options");
    this.options = e || ar;
  }
  code(e, t, n) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + pt(a) + '">' + (n ? e : pt(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : pt(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, n) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, n) {
    const a = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + a + i + `>
` + e + "</" + a + `>
`;
  }
  listitem(e, t, n) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, n) {
    const a = co(e);
    if (a === null)
      return n;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>", i;
  }
  image(e, t, n) {
    const a = co(e);
    if (a === null)
      return n;
    e = a;
    let i = `<img src="${e}" alt="${n}"`;
    return t && (i += ` title="${t}"`), i += ">", i;
  }
  text(e) {
    return e;
  }
}
class Ql {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return "" + n;
  }
  image(e, t, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
class Wt {
  constructor(e) {
    _e(this, "options");
    _e(this, "renderer");
    _e(this, "textRenderer");
    this.options = e || ar, this.options.renderer = this.options.renderer || new ma(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ql();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Wt(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Wt(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let n = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = i, s = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (s !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          n += s || "";
          continue;
        }
      }
      switch (i.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          const l = i;
          n += this.renderer.heading(this.parseInline(l.tokens), l.depth, $f(this.parseInline(l.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const l = i;
          n += this.renderer.code(l.text, l.lang, !!l.escaped);
          continue;
        }
        case "table": {
          const l = i;
          let s = "", o = "";
          for (let h = 0; h < l.header.length; h++)
            o += this.renderer.tablecell(this.parseInline(l.header[h].tokens), { header: !0, align: l.align[h] });
          s += this.renderer.tablerow(o);
          let u = "";
          for (let h = 0; h < l.rows.length; h++) {
            const m = l.rows[h];
            o = "";
            for (let p = 0; p < m.length; p++)
              o += this.renderer.tablecell(this.parseInline(m[p].tokens), { header: !1, align: l.align[p] });
            u += this.renderer.tablerow(o);
          }
          n += this.renderer.table(s, u);
          continue;
        }
        case "blockquote": {
          const l = i, s = this.parse(l.tokens);
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          const l = i, s = l.ordered, o = l.start, u = l.loose;
          let h = "";
          for (let m = 0; m < l.items.length; m++) {
            const p = l.items[m], g = p.checked, v = p.task;
            let w = "";
            if (p.task) {
              const T = this.renderer.checkbox(!!g);
              u ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = T + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = T + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({
                type: "text",
                text: T + " "
              }) : w += T + " ";
            }
            w += this.parse(p.tokens, u), h += this.renderer.listitem(w, v, !!g);
          }
          n += this.renderer.list(h, s, o);
          continue;
        }
        case "html": {
          const l = i;
          n += this.renderer.html(l.text, l.block);
          continue;
        }
        case "paragraph": {
          const l = i;
          n += this.renderer.paragraph(this.parseInline(l.tokens));
          continue;
        }
        case "text": {
          let l = i, s = l.tokens ? this.parseInline(l.tokens) : l.text;
          for (; a + 1 < e.length && e[a + 1].type === "text"; )
            l = e[++a], s += `
` + (l.tokens ? this.parseInline(l.tokens) : l.text);
          n += t ? this.renderer.paragraph(s) : s;
          continue;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += l || "";
          continue;
        }
      }
      switch (i.type) {
        case "escape": {
          const l = i;
          n += t.text(l.text);
          break;
        }
        case "html": {
          const l = i;
          n += t.html(l.text);
          break;
        }
        case "link": {
          const l = i;
          n += t.link(l.href, l.title, this.parseInline(l.tokens, t));
          break;
        }
        case "image": {
          const l = i;
          n += t.image(l.href, l.title, l.text);
          break;
        }
        case "strong": {
          const l = i;
          n += t.strong(this.parseInline(l.tokens, t));
          break;
        }
        case "em": {
          const l = i;
          n += t.em(this.parseInline(l.tokens, t));
          break;
        }
        case "codespan": {
          const l = i;
          n += t.codespan(l.text);
          break;
        }
        case "br": {
          n += t.br();
          break;
        }
        case "del": {
          const l = i;
          n += t.del(this.parseInline(l.tokens, t));
          break;
        }
        case "text": {
          const l = i;
          n += t.text(l.text);
          break;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
}
class an {
  constructor(e) {
    _e(this, "options");
    this.options = e || ar;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
_e(an, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var rr, Qi, ac;
class x2 {
  constructor(...e) {
    Ka(this, rr);
    _e(this, "defaults", jl());
    _e(this, "options", this.setOptions);
    _e(this, "parse", Tn(this, rr, Qi).call(this, jt.lex, Wt.parse));
    _e(this, "parseInline", Tn(this, rr, Qi).call(this, jt.lexInline, Wt.parseInline));
    _e(this, "Parser", Wt);
    _e(this, "Renderer", ma);
    _e(this, "TextRenderer", Ql);
    _e(this, "Lexer", jt);
    _e(this, "Tokenizer", ha);
    _e(this, "Hooks", an);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var a, i;
    let n = [];
    for (const l of e)
      switch (n = n.concat(t.call(this, l)), l.type) {
        case "table": {
          const s = l;
          for (const o of s.header)
            n = n.concat(this.walkTokens(o.tokens, t));
          for (const o of s.rows)
            for (const u of o)
              n = n.concat(this.walkTokens(u.tokens, t));
          break;
        }
        case "list": {
          const s = l;
          n = n.concat(this.walkTokens(s.items, t));
          break;
        }
        default: {
          const s = l;
          (i = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && i[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            const u = s[o].flat(1 / 0);
            n = n.concat(this.walkTokens(u, t));
          }) : s.tokens && (n = n.concat(this.walkTokens(s.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const a = { ...n };
      if (a.async = this.defaults.async || a.async || !1, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const l = t.renderers[i.name];
          l ? t.renderers[i.name] = function(...s) {
            let o = i.renderer.apply(this, s);
            return o === !1 && (o = l.apply(this, s)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const l = t[i.level];
          l ? l.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), a.extensions = t), n.renderer) {
        const i = this.defaults.renderer || new ma(this.defaults);
        for (const l in n.renderer) {
          if (!(l in i))
            throw new Error(`renderer '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = n.renderer[s], u = i[s];
          i[s] = (...h) => {
            let m = o.apply(i, h);
            return m === !1 && (m = u.apply(i, h)), m || "";
          };
        }
        a.renderer = i;
      }
      if (n.tokenizer) {
        const i = this.defaults.tokenizer || new ha(this.defaults);
        for (const l in n.tokenizer) {
          if (!(l in i))
            throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l))
            continue;
          const s = l, o = n.tokenizer[s], u = i[s];
          i[s] = (...h) => {
            let m = o.apply(i, h);
            return m === !1 && (m = u.apply(i, h)), m;
          };
        }
        a.tokenizer = i;
      }
      if (n.hooks) {
        const i = this.defaults.hooks || new an();
        for (const l in n.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = n.hooks[s], u = i[s];
          an.passThroughHooks.has(l) ? i[s] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(i, h)).then((p) => u.call(i, p));
            const m = o.call(i, h);
            return u.call(i, m);
          } : i[s] = (...h) => {
            let m = o.apply(i, h);
            return m === !1 && (m = u.apply(i, h)), m;
          };
        }
        a.hooks = i;
      }
      if (n.walkTokens) {
        const i = this.defaults.walkTokens, l = n.walkTokens;
        a.walkTokens = function(s) {
          let o = [];
          return o.push(l.call(this, s)), i && (o = o.concat(i.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return jt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Wt.parse(e, t ?? this.defaults);
  }
}
rr = new WeakSet(), Qi = function(e, t) {
  return (n, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = Tn(this, rr, ac).call(this, !!l.silent, !!l.async);
    if (typeof n > "u" || n === null)
      return s(new Error("marked(): input parameter is undefined or null"));
    if (typeof n != "string")
      return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
    if (l.hooks && (l.hooks.options = l), l.async)
      return Promise.resolve(l.hooks ? l.hooks.preprocess(n) : n).then((o) => e(o, l)).then((o) => l.hooks ? l.hooks.processAllTokens(o) : o).then((o) => l.walkTokens ? Promise.all(this.walkTokens(o, l.walkTokens)).then(() => o) : o).then((o) => t(o, l)).then((o) => l.hooks ? l.hooks.postprocess(o) : o).catch(s);
    try {
      l.hooks && (n = l.hooks.preprocess(n));
      let o = e(n, l);
      l.hooks && (o = l.hooks.processAllTokens(o)), l.walkTokens && this.walkTokens(o, l.walkTokens);
      let u = t(o, l);
      return l.hooks && (u = l.hooks.postprocess(u)), u;
    } catch (o) {
      return s(o);
    }
  };
}, ac = function(e, t) {
  return (n) => {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + pt(n.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(n);
    throw n;
  };
};
const $0 = new x2();
function de(r, e) {
  return $0.parse(r, e);
}
de.options = de.setOptions = function(r) {
  return $0.setOptions(r), de.defaults = $0.defaults, $1(de.defaults), de;
};
de.getDefaults = jl;
de.defaults = ar;
de.use = function(...r) {
  return $0.use(...r), de.defaults = $0.defaults, $1(de.defaults), de;
};
de.walkTokens = function(r, e) {
  return $0.walkTokens(r, e);
};
de.parseInline = $0.parseInline;
de.Parser = Wt;
de.parser = Wt.parse;
de.Renderer = ma;
de.TextRenderer = Ql;
de.Lexer = jt;
de.lexer = jt.lex;
de.Tokenizer = ha;
de.Hooks = an;
de.parse = de;
de.options;
de.setOptions;
de.use;
de.walkTokens;
de.parseInline;
Wt.parse;
jt.lex;
const A2 = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, E2 = Object.hasOwnProperty;
class ic {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, t) {
    const n = this;
    let a = S2(e, t === !0);
    const i = a;
    for (; E2.call(n.occurrences, a); )
      n.occurrences[i]++, a = i + "-" + n.occurrences[i];
    return n.occurrences[a] = 0, a;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function S2(r, e) {
  return typeof r != "string" ? "" : (e || (r = r.toLowerCase()), r.replace(A2, "").replace(/ /g, "-"));
}
new ic();
var po = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function F2(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var T2 = { exports: {} };
(function(r) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(n) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, l = {}, s = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: n.Prism && n.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function D(_) {
          return _ instanceof o ? new o(_.type, D(_.content), _.alias) : Array.isArray(_) ? _.map(D) : _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(D) {
          return Object.prototype.toString.call(D).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(D) {
          return D.__id || Object.defineProperty(D, "__id", { value: ++i }), D.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function D(_, A) {
          A = A || {};
          var F, M;
          switch (s.util.type(_)) {
            case "Object":
              if (M = s.util.objId(_), A[M])
                return A[M];
              F = /** @type {Record<string, any>} */
              {}, A[M] = F;
              for (var B in _)
                _.hasOwnProperty(B) && (F[B] = D(_[B], A));
              return (
                /** @type {any} */
                F
              );
            case "Array":
              return M = s.util.objId(_), A[M] ? A[M] : (F = [], A[M] = F, /** @type {Array} */
              /** @type {any} */
              _.forEach(function(U, I) {
                F[I] = D(U, A);
              }), /** @type {any} */
              F);
            default:
              return _;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(D) {
          for (; D; ) {
            var _ = a.exec(D.className);
            if (_)
              return _[1].toLowerCase();
            D = D.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(D, _) {
          D.className = D.className.replace(RegExp(a, "gi"), ""), D.classList.add("language-" + _);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (F) {
            var D = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(F.stack) || [])[1];
            if (D) {
              var _ = document.getElementsByTagName("script");
              for (var A in _)
                if (_[A].src == D)
                  return _[A];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(D, _, A) {
          for (var F = "no-" + _; D; ) {
            var M = D.classList;
            if (M.contains(_))
              return !0;
            if (M.contains(F))
              return !1;
            D = D.parentElement;
          }
          return !!A;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: l,
        plaintext: l,
        text: l,
        txt: l,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(D, _) {
          var A = s.util.clone(s.languages[D]);
          for (var F in _)
            A[F] = _[F];
          return A;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(D, _, A, F) {
          F = F || /** @type {any} */
          s.languages;
          var M = F[D], B = {};
          for (var U in M)
            if (M.hasOwnProperty(U)) {
              if (U == _)
                for (var I in A)
                  A.hasOwnProperty(I) && (B[I] = A[I]);
              A.hasOwnProperty(U) || (B[U] = M[U]);
            }
          var z = F[D];
          return F[D] = B, s.languages.DFS(s.languages, function(L, J) {
            J === z && L != D && (this[L] = B);
          }), B;
        },
        // Traverse a language definition with Depth First Search
        DFS: function D(_, A, F, M) {
          M = M || {};
          var B = s.util.objId;
          for (var U in _)
            if (_.hasOwnProperty(U)) {
              A.call(_, U, _[U], F || U);
              var I = _[U], z = s.util.type(I);
              z === "Object" && !M[B(I)] ? (M[B(I)] = !0, D(I, A, null, M)) : z === "Array" && !M[B(I)] && (M[B(I)] = !0, D(I, A, U, M));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(D, _) {
        s.highlightAllUnder(document, D, _);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(D, _, A) {
        var F = {
          callback: A,
          container: D,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", F), F.elements = Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)), s.hooks.run("before-all-elements-highlight", F);
        for (var M = 0, B; B = F.elements[M++]; )
          s.highlightElement(B, _ === !0, F.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(D, _, A) {
        var F = s.util.getLanguage(D), M = s.languages[F];
        s.util.setLanguage(D, F);
        var B = D.parentElement;
        B && B.nodeName.toLowerCase() === "pre" && s.util.setLanguage(B, F);
        var U = D.textContent, I = {
          element: D,
          language: F,
          grammar: M,
          code: U
        };
        function z(J) {
          I.highlightedCode = J, s.hooks.run("before-insert", I), I.element.innerHTML = I.highlightedCode, s.hooks.run("after-highlight", I), s.hooks.run("complete", I), A && A.call(I.element);
        }
        if (s.hooks.run("before-sanity-check", I), B = I.element.parentElement, B && B.nodeName.toLowerCase() === "pre" && !B.hasAttribute("tabindex") && B.setAttribute("tabindex", "0"), !I.code) {
          s.hooks.run("complete", I), A && A.call(I.element);
          return;
        }
        if (s.hooks.run("before-highlight", I), !I.grammar) {
          z(s.util.encode(I.code));
          return;
        }
        if (_ && n.Worker) {
          var L = new Worker(s.filename);
          L.onmessage = function(J) {
            z(J.data);
          }, L.postMessage(JSON.stringify({
            language: I.language,
            code: I.code,
            immediateClose: !0
          }));
        } else
          z(s.highlight(I.code, I.grammar, I.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(D, _, A) {
        var F = {
          code: D,
          grammar: _,
          language: A
        };
        if (s.hooks.run("before-tokenize", F), !F.grammar)
          throw new Error('The language "' + F.language + '" has no grammar.');
        return F.tokens = s.tokenize(F.code, F.grammar), s.hooks.run("after-tokenize", F), o.stringify(s.util.encode(F.tokens), F.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(D, _) {
        var A = _.rest;
        if (A) {
          for (var F in A)
            _[F] = A[F];
          delete _.rest;
        }
        var M = new m();
        return p(M, M.head, D), h(D, M, _, M.head, 0), v(M);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(D, _) {
          var A = s.hooks.all;
          A[D] = A[D] || [], A[D].push(_);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(D, _) {
          var A = s.hooks.all[D];
          if (!(!A || !A.length))
            for (var F = 0, M; M = A[F++]; )
              M(_);
        }
      },
      Token: o
    };
    n.Prism = s;
    function o(D, _, A, F) {
      this.type = D, this.content = _, this.alias = A, this.length = (F || "").length | 0;
    }
    o.stringify = function D(_, A) {
      if (typeof _ == "string")
        return _;
      if (Array.isArray(_)) {
        var F = "";
        return _.forEach(function(z) {
          F += D(z, A);
        }), F;
      }
      var M = {
        type: _.type,
        content: D(_.content, A),
        tag: "span",
        classes: ["token", _.type],
        attributes: {},
        language: A
      }, B = _.alias;
      B && (Array.isArray(B) ? Array.prototype.push.apply(M.classes, B) : M.classes.push(B)), s.hooks.run("wrap", M);
      var U = "";
      for (var I in M.attributes)
        U += " " + I + '="' + (M.attributes[I] || "").replace(/"/g, "&quot;") + '"';
      return "<" + M.tag + ' class="' + M.classes.join(" ") + '"' + U + ">" + M.content + "</" + M.tag + ">";
    };
    function u(D, _, A, F) {
      D.lastIndex = _;
      var M = D.exec(A);
      if (M && F && M[1]) {
        var B = M[1].length;
        M.index += B, M[0] = M[0].slice(B);
      }
      return M;
    }
    function h(D, _, A, F, M, B) {
      for (var U in A)
        if (!(!A.hasOwnProperty(U) || !A[U])) {
          var I = A[U];
          I = Array.isArray(I) ? I : [I];
          for (var z = 0; z < I.length; ++z) {
            if (B && B.cause == U + "," + z)
              return;
            var L = I[z], J = L.inside, Le = !!L.lookbehind, se = !!L.greedy, xe = L.alias;
            if (se && !L.pattern.global) {
              var Ae = L.pattern.toString().match(/[imsuy]*$/)[0];
              L.pattern = RegExp(L.pattern.source, Ae + "g");
            }
            for (var Ve = L.pattern || L, fe = F.next, ye = M; fe !== _.tail && !(B && ye >= B.reach); ye += fe.value.length, fe = fe.next) {
              var Ee = fe.value;
              if (_.length > D.length)
                return;
              if (!(Ee instanceof o)) {
                var re = 1, he;
                if (se) {
                  if (he = u(Ve, ye, D, Le), !he || he.index >= D.length)
                    break;
                  var Ze = he.index, me = he.index + he[0].length, Oe = ye;
                  for (Oe += fe.value.length; Ze >= Oe; )
                    fe = fe.next, Oe += fe.value.length;
                  if (Oe -= fe.value.length, ye = Oe, fe.value instanceof o)
                    continue;
                  for (var P = fe; P !== _.tail && (Oe < me || typeof P.value == "string"); P = P.next)
                    re++, Oe += P.value.length;
                  re--, Ee = D.slice(ye, Oe), he.index -= ye;
                } else if (he = u(Ve, 0, Ee, Le), !he)
                  continue;
                var Ze = he.index, Pe = he[0], Qe = Ee.slice(0, Ze), ht = Ee.slice(Ze + Pe.length), ft = ye + Ee.length;
                B && ft > B.reach && (B.reach = ft);
                var R = fe.prev;
                Qe && (R = p(_, R, Qe), ye += Qe.length), g(_, R, re);
                var ne = new o(U, J ? s.tokenize(Pe, J) : Pe, xe, Pe);
                if (fe = p(_, R, ne), ht && p(_, fe, ht), re > 1) {
                  var ge = {
                    cause: U + "," + z,
                    reach: ft
                  };
                  h(D, _, A, fe.prev, ye, ge), B && ge.reach > B.reach && (B.reach = ge.reach);
                }
              }
            }
          }
        }
    }
    function m() {
      var D = { value: null, prev: null, next: null }, _ = { value: null, prev: D, next: null };
      D.next = _, this.head = D, this.tail = _, this.length = 0;
    }
    function p(D, _, A) {
      var F = _.next, M = { value: A, prev: _, next: F };
      return _.next = M, F.prev = M, D.length++, M;
    }
    function g(D, _, A) {
      for (var F = _.next, M = 0; M < A && F !== D.tail; M++)
        F = F.next;
      _.next = F, F.prev = _, D.length -= M;
    }
    function v(D) {
      for (var _ = [], A = D.head.next; A !== D.tail; )
        _.push(A.value), A = A.next;
      return _;
    }
    if (!n.document)
      return n.addEventListener && (s.disableWorkerMessageHandler || n.addEventListener("message", function(D) {
        var _ = JSON.parse(D.data), A = _.language, F = _.code, M = _.immediateClose;
        n.postMessage(s.highlight(F, s.languages[A], A)), M && n.close();
      }, !1)), s;
    var w = s.util.currentScript();
    w && (s.filename = w.src, w.hasAttribute("data-manual") && (s.manual = !0));
    function T() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var S = document.readyState;
      S === "loading" || S === "interactive" && w && w.defer ? document.addEventListener("DOMContentLoaded", T) : window.requestAnimationFrame ? window.requestAnimationFrame(T) : window.setTimeout(T, 16);
    }
    return s;
  }(e);
  r.exports && (r.exports = t), typeof po < "u" && (po.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(n) {
    n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(a, i) {
      var l = {};
      l["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: l
        }
      };
      s["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var o = {};
      o[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: s
      }, t.languages.insertBefore("markup", "cdata", o);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(n, a) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: t.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(n) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, n.languages.css.atrule.inside.rest = n.languages.css;
    var i = n.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var n = "Loading…", a = function(w, T) {
      return "✖ Error " + w + " while fetching file: " + T;
    }, i = "✖ Error: File does not exist or is empty", l = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, s = "data-src-status", o = "loading", u = "loaded", h = "failed", m = "pre[data-src]:not([" + s + '="' + u + '"]):not([' + s + '="' + o + '"])';
    function p(w, T, S) {
      var D = new XMLHttpRequest();
      D.open("GET", w, !0), D.onreadystatechange = function() {
        D.readyState == 4 && (D.status < 400 && D.responseText ? T(D.responseText) : D.status >= 400 ? S(a(D.status, D.statusText)) : S(i));
      }, D.send(null);
    }
    function g(w) {
      var T = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w || "");
      if (T) {
        var S = Number(T[1]), D = T[2], _ = T[3];
        return D ? _ ? [S, Number(_)] : [S, void 0] : [S, S];
      }
    }
    t.hooks.add("before-highlightall", function(w) {
      w.selector += ", " + m;
    }), t.hooks.add("before-sanity-check", function(w) {
      var T = (
        /** @type {HTMLPreElement} */
        w.element
      );
      if (T.matches(m)) {
        w.code = "", T.setAttribute(s, o);
        var S = T.appendChild(document.createElement("CODE"));
        S.textContent = n;
        var D = T.getAttribute("data-src"), _ = w.language;
        if (_ === "none") {
          var A = (/\.(\w+)$/.exec(D) || [, "none"])[1];
          _ = l[A] || A;
        }
        t.util.setLanguage(S, _), t.util.setLanguage(T, _);
        var F = t.plugins.autoloader;
        F && F.loadLanguages(_), p(
          D,
          function(M) {
            T.setAttribute(s, u);
            var B = g(T.getAttribute("data-range"));
            if (B) {
              var U = M.split(/\r\n?|\n/g), I = B[0], z = B[1] == null ? U.length : B[1];
              I < 0 && (I += U.length), I = Math.max(0, Math.min(I - 1, U.length)), z < 0 && (z += U.length), z = Math.max(0, Math.min(z, U.length)), M = U.slice(I, z).join(`
`), T.hasAttribute("data-start") || T.setAttribute("data-start", String(I + 1));
            }
            S.textContent = M, t.highlightElement(S);
          },
          function(M) {
            T.setAttribute(s, h), S.textContent = M;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(T) {
        for (var S = (T || document).querySelectorAll(m), D = 0, _; _ = S[D++]; )
          t.highlightElement(_);
      }
    };
    var v = !1;
    t.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(T2);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(r) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  r.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, r.languages.tex = r.languages.latex, r.languages.context = r.languages.latex;
})(Prism);
(function(r) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, n = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  r.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: n.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, t.inside = r.languages.bash;
  for (var a = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], i = n.variable[1].inside, l = 0; l < a.length; l++)
    i[a[l]] = r.languages.bash[a[l]];
  r.languages.sh = r.languages.bash, r.languages.shell = r.languages.bash;
})(Prism);
new ic();
const C2 = (r) => {
  const e = {};
  for (let t = 0, n = r.length; t < n; t++) {
    const a = r[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, M2 = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], B2 = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], N2 = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], I2 = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], z2 = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], R2 = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
[
  ...M2,
  ...B2.map((r) => `svg:${r}`),
  ...N2.map((r) => `math:${r}`)
], C2([
  Object.fromEntries(I2.map((r) => [r, ["*"]])),
  Object.fromEntries(z2.map((r) => [r, ["svg:*"]])),
  Object.fromEntries(R2.map((r) => [r, ["math:*"]]))
]);
const {
  SvelteComponent: L2,
  append_hydration: fi,
  attr: On,
  children: go,
  claim_component: O2,
  claim_element: bo,
  claim_space: H2,
  claim_text: P2,
  create_component: q2,
  destroy_component: U2,
  detach: mi,
  element: vo,
  init: G2,
  insert_hydration: V2,
  mount_component: j2,
  safe_not_equal: W2,
  set_data: X2,
  space: $2,
  text: Y2,
  toggle_class: _0,
  transition_in: Z2,
  transition_out: Q2
} = window.__gradio__svelte__internal;
function J2(r) {
  let e, t, n, a, i, l;
  return n = new /*Icon*/
  r[1]({}), {
    c() {
      e = vo("label"), t = vo("span"), q2(n.$$.fragment), a = $2(), i = Y2(
        /*label*/
        r[0]
      ), this.h();
    },
    l(s) {
      e = bo(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = go(e);
      t = bo(o, "SPAN", { class: !0 });
      var u = go(t);
      O2(n.$$.fragment, u), u.forEach(mi), a = H2(o), i = P2(
        o,
        /*label*/
        r[0]
      ), o.forEach(mi), this.h();
    },
    h() {
      On(t, "class", "svelte-168uj4v"), On(e, "for", ""), On(e, "data-testid", "block-label"), On(e, "class", "svelte-168uj4v"), _0(e, "hide", !/*show_label*/
      r[2]), _0(e, "sr-only", !/*show_label*/
      r[2]), _0(
        e,
        "float",
        /*float*/
        r[4]
      ), _0(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    m(s, o) {
      V2(s, e, o), fi(e, t), j2(n, t, null), fi(e, a), fi(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && X2(
        i,
        /*label*/
        s[0]
      ), (!l || o & /*show_label*/
      4) && _0(e, "hide", !/*show_label*/
      s[2]), (!l || o & /*show_label*/
      4) && _0(e, "sr-only", !/*show_label*/
      s[2]), (!l || o & /*float*/
      16) && _0(
        e,
        "float",
        /*float*/
        s[4]
      ), (!l || o & /*disable*/
      8) && _0(
        e,
        "hide-label",
        /*disable*/
        s[3]
      );
    },
    i(s) {
      l || (Z2(n.$$.fragment, s), l = !0);
    },
    o(s) {
      Q2(n.$$.fragment, s), l = !1;
    },
    d(s) {
      s && mi(e), U2(n);
    }
  };
}
function K2(r, e, t) {
  let { label: n = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return r.$$set = (o) => {
    "label" in o && t(0, n = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [n, a, i, l, s];
}
class lc extends L2 {
  constructor(e) {
    super(), G2(this, e, K2, J2, W2, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: em,
  append_hydration: ta,
  attr: s0,
  bubble: tm,
  check_outros: rm,
  children: Ji,
  claim_component: nm,
  claim_element: Ki,
  claim_space: _o,
  claim_text: am,
  construct_svelte_component: yo,
  create_component: wo,
  create_slot: im,
  destroy_component: ko,
  detach: ln,
  element: el,
  get_all_dirty_from_scope: lm,
  get_slot_changes: sm,
  group_outros: om,
  init: um,
  insert_hydration: sc,
  listen: cm,
  mount_component: Do,
  safe_not_equal: hm,
  set_data: fm,
  set_style: Hn,
  space: xo,
  text: mm,
  toggle_class: ot,
  transition_in: di,
  transition_out: pi,
  update_slot_base: dm
} = window.__gradio__svelte__internal;
function Ao(r) {
  let e, t;
  return {
    c() {
      e = el("span"), t = mm(
        /*label*/
        r[1]
      ), this.h();
    },
    l(n) {
      e = Ki(n, "SPAN", { class: !0 });
      var a = Ji(e);
      t = am(
        a,
        /*label*/
        r[1]
      ), a.forEach(ln), this.h();
    },
    h() {
      s0(e, "class", "svelte-vk34kx");
    },
    m(n, a) {
      sc(n, e, a), ta(e, t);
    },
    p(n, a) {
      a & /*label*/
      2 && fm(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && ln(e);
    }
  };
}
function pm(r) {
  let e, t, n, a, i, l, s, o, u = (
    /*show_label*/
    r[2] && Ao(r)
  );
  var h = (
    /*Icon*/
    r[0]
  );
  function m(v, w) {
    return {};
  }
  h && (a = yo(h, m()));
  const p = (
    /*#slots*/
    r[14].default
  ), g = im(
    p,
    r,
    /*$$scope*/
    r[13],
    null
  );
  return {
    c() {
      e = el("button"), u && u.c(), t = xo(), n = el("div"), a && wo(a.$$.fragment), i = xo(), g && g.c(), this.h();
    },
    l(v) {
      e = Ki(v, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var w = Ji(e);
      u && u.l(w), t = _o(w), n = Ki(w, "DIV", { class: !0 });
      var T = Ji(n);
      a && nm(a.$$.fragment, T), i = _o(T), g && g.l(T), T.forEach(ln), w.forEach(ln), this.h();
    },
    h() {
      s0(n, "class", "svelte-vk34kx"), ot(
        n,
        "small",
        /*size*/
        r[4] === "small"
      ), ot(
        n,
        "large",
        /*size*/
        r[4] === "large"
      ), ot(
        n,
        "medium",
        /*size*/
        r[4] === "medium"
      ), e.disabled = /*disabled*/
      r[7], s0(
        e,
        "aria-label",
        /*label*/
        r[1]
      ), s0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        r[8]
      ), s0(
        e,
        "title",
        /*label*/
        r[1]
      ), s0(e, "class", "svelte-vk34kx"), ot(
        e,
        "pending",
        /*pending*/
        r[3]
      ), ot(
        e,
        "padded",
        /*padded*/
        r[5]
      ), ot(
        e,
        "highlight",
        /*highlight*/
        r[6]
      ), ot(
        e,
        "transparent",
        /*transparent*/
        r[9]
      ), Hn(e, "color", !/*disabled*/
      r[7] && /*_color*/
      r[11] ? (
        /*_color*/
        r[11]
      ) : "var(--block-label-text-color)"), Hn(e, "--bg-color", /*disabled*/
      r[7] ? "auto" : (
        /*background*/
        r[10]
      ));
    },
    m(v, w) {
      sc(v, e, w), u && u.m(e, null), ta(e, t), ta(e, n), a && Do(a, n, null), ta(n, i), g && g.m(n, null), l = !0, s || (o = cm(
        e,
        "click",
        /*click_handler*/
        r[15]
      ), s = !0);
    },
    p(v, [w]) {
      if (/*show_label*/
      v[2] ? u ? u.p(v, w) : (u = Ao(v), u.c(), u.m(e, t)) : u && (u.d(1), u = null), w & /*Icon*/
      1 && h !== (h = /*Icon*/
      v[0])) {
        if (a) {
          om();
          const T = a;
          pi(T.$$.fragment, 1, 0, () => {
            ko(T, 1);
          }), rm();
        }
        h ? (a = yo(h, m()), wo(a.$$.fragment), di(a.$$.fragment, 1), Do(a, n, i)) : a = null;
      }
      g && g.p && (!l || w & /*$$scope*/
      8192) && dm(
        g,
        p,
        v,
        /*$$scope*/
        v[13],
        l ? sm(
          p,
          /*$$scope*/
          v[13],
          w,
          null
        ) : lm(
          /*$$scope*/
          v[13]
        ),
        null
      ), (!l || w & /*size*/
      16) && ot(
        n,
        "small",
        /*size*/
        v[4] === "small"
      ), (!l || w & /*size*/
      16) && ot(
        n,
        "large",
        /*size*/
        v[4] === "large"
      ), (!l || w & /*size*/
      16) && ot(
        n,
        "medium",
        /*size*/
        v[4] === "medium"
      ), (!l || w & /*disabled*/
      128) && (e.disabled = /*disabled*/
      v[7]), (!l || w & /*label*/
      2) && s0(
        e,
        "aria-label",
        /*label*/
        v[1]
      ), (!l || w & /*hasPopup*/
      256) && s0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        v[8]
      ), (!l || w & /*label*/
      2) && s0(
        e,
        "title",
        /*label*/
        v[1]
      ), (!l || w & /*pending*/
      8) && ot(
        e,
        "pending",
        /*pending*/
        v[3]
      ), (!l || w & /*padded*/
      32) && ot(
        e,
        "padded",
        /*padded*/
        v[5]
      ), (!l || w & /*highlight*/
      64) && ot(
        e,
        "highlight",
        /*highlight*/
        v[6]
      ), (!l || w & /*transparent*/
      512) && ot(
        e,
        "transparent",
        /*transparent*/
        v[9]
      ), w & /*disabled, _color*/
      2176 && Hn(e, "color", !/*disabled*/
      v[7] && /*_color*/
      v[11] ? (
        /*_color*/
        v[11]
      ) : "var(--block-label-text-color)"), w & /*disabled, background*/
      1152 && Hn(e, "--bg-color", /*disabled*/
      v[7] ? "auto" : (
        /*background*/
        v[10]
      ));
    },
    i(v) {
      l || (a && di(a.$$.fragment, v), di(g, v), l = !0);
    },
    o(v) {
      a && pi(a.$$.fragment, v), pi(g, v), l = !1;
    },
    d(v) {
      v && ln(e), u && u.d(), a && ko(a), g && g.d(v), s = !1, o();
    }
  };
}
function gm(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: u = !1 } = e, { size: h = "small" } = e, { padded: m = !0 } = e, { highlight: p = !1 } = e, { disabled: g = !1 } = e, { hasPopup: v = !1 } = e, { color: w = "var(--block-label-text-color)" } = e, { transparent: T = !1 } = e, { background: S = "var(--block-background-fill)" } = e;
  function D(_) {
    tm.call(this, r, _);
  }
  return r.$$set = (_) => {
    "Icon" in _ && t(0, l = _.Icon), "label" in _ && t(1, s = _.label), "show_label" in _ && t(2, o = _.show_label), "pending" in _ && t(3, u = _.pending), "size" in _ && t(4, h = _.size), "padded" in _ && t(5, m = _.padded), "highlight" in _ && t(6, p = _.highlight), "disabled" in _ && t(7, g = _.disabled), "hasPopup" in _ && t(8, v = _.hasPopup), "color" in _ && t(12, w = _.color), "transparent" in _ && t(9, T = _.transparent), "background" in _ && t(10, S = _.background), "$$scope" in _ && t(13, i = _.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*highlight, color*/
    4160 && t(11, n = p ? "var(--color-accent)" : w);
  }, [
    l,
    s,
    o,
    u,
    h,
    m,
    p,
    g,
    v,
    T,
    S,
    n,
    w,
    i,
    a,
    D
  ];
}
class Jl extends em {
  constructor(e) {
    super(), um(this, e, gm, pm, hm, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: bm,
  append_hydration: vm,
  attr: gi,
  binding_callbacks: _m,
  children: Eo,
  claim_element: So,
  create_slot: ym,
  detach: bi,
  element: Fo,
  get_all_dirty_from_scope: wm,
  get_slot_changes: km,
  init: Dm,
  insert_hydration: xm,
  safe_not_equal: Am,
  toggle_class: y0,
  transition_in: Em,
  transition_out: Sm,
  update_slot_base: Fm
} = window.__gradio__svelte__internal;
function Tm(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[5].default
  ), i = ym(
    a,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = Fo("div"), t = Fo("div"), i && i.c(), this.h();
    },
    l(l) {
      e = So(l, "DIV", { class: !0, "aria-label": !0 });
      var s = Eo(e);
      t = So(s, "DIV", { class: !0 });
      var o = Eo(t);
      i && i.l(o), o.forEach(bi), s.forEach(bi), this.h();
    },
    h() {
      gi(t, "class", "icon svelte-3w3rth"), gi(e, "class", "empty svelte-3w3rth"), gi(e, "aria-label", "Empty value"), y0(
        e,
        "small",
        /*size*/
        r[0] === "small"
      ), y0(
        e,
        "large",
        /*size*/
        r[0] === "large"
      ), y0(
        e,
        "unpadded_box",
        /*unpadded_box*/
        r[1]
      ), y0(
        e,
        "small_parent",
        /*parent_height*/
        r[3]
      );
    },
    m(l, s) {
      xm(l, e, s), vm(e, t), i && i.m(t, null), r[6](e), n = !0;
    },
    p(l, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      16) && Fm(
        i,
        a,
        l,
        /*$$scope*/
        l[4],
        n ? km(
          a,
          /*$$scope*/
          l[4],
          s,
          null
        ) : wm(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!n || s & /*size*/
      1) && y0(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), (!n || s & /*size*/
      1) && y0(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), (!n || s & /*unpadded_box*/
      2) && y0(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!n || s & /*parent_height*/
      8) && y0(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      n || (Em(i, l), n = !0);
    },
    o(l) {
      Sm(i, l), n = !1;
    },
    d(l) {
      l && bi(e), i && i.d(l), r[6](null);
    }
  };
}
function Cm(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e, { size: l = "small" } = e, { unpadded_box: s = !1 } = e, o;
  function u(m) {
    var p;
    if (!m) return !1;
    const { height: g } = m.getBoundingClientRect(), { height: v } = ((p = m.parentElement) === null || p === void 0 ? void 0 : p.getBoundingClientRect()) || { height: g };
    return g > v + 2;
  }
  function h(m) {
    _m[m ? "unshift" : "push"](() => {
      o = m, t(2, o);
    });
  }
  return r.$$set = (m) => {
    "size" in m && t(0, l = m.size), "unpadded_box" in m && t(1, s = m.unpadded_box), "$$scope" in m && t(4, i = m.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*el*/
    4 && t(3, n = u(o));
  }, [l, s, o, n, i, a, h];
}
class Mm extends bm {
  constructor(e) {
    super(), Dm(this, e, Cm, Tm, Am, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Bm,
  append_hydration: vi,
  attr: Ft,
  children: Pn,
  claim_svg_element: qn,
  detach: Gr,
  init: Nm,
  insert_hydration: Im,
  noop: _i,
  safe_not_equal: zm,
  set_style: Ut,
  svg_element: Un
} = window.__gradio__svelte__internal;
function Rm(r) {
  let e, t, n, a;
  return {
    c() {
      e = Un("svg"), t = Un("g"), n = Un("path"), a = Un("path"), this.h();
    },
    l(i) {
      e = qn(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "xml:space": !0,
        stroke: !0,
        style: !0
      });
      var l = Pn(e);
      t = qn(l, "g", { transform: !0 });
      var s = Pn(t);
      n = qn(s, "path", { d: !0, style: !0 }), Pn(n).forEach(Gr), s.forEach(Gr), a = qn(l, "path", { d: !0, style: !0 }), Pn(a).forEach(Gr), l.forEach(Gr), this.h();
    },
    h() {
      Ft(n, "d", "M18,6L6.087,17.913"), Ut(n, "fill", "none"), Ut(n, "fill-rule", "nonzero"), Ut(n, "stroke-width", "2px"), Ft(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ft(a, "d", "M4.364,4.364L19.636,19.636"), Ut(a, "fill", "none"), Ut(a, "fill-rule", "nonzero"), Ut(a, "stroke-width", "2px"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "version", "1.1"), Ft(e, "xmlns", "http://www.w3.org/2000/svg"), Ft(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ft(e, "xml:space", "preserve"), Ft(e, "stroke", "currentColor"), Ut(e, "fill-rule", "evenodd"), Ut(e, "clip-rule", "evenodd"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      Im(i, e, l), vi(e, t), vi(t, n), vi(e, a);
    },
    p: _i,
    i: _i,
    o: _i,
    d(i) {
      i && Gr(e);
    }
  };
}
class oc extends Bm {
  constructor(e) {
    super(), Nm(this, e, null, Rm, zm, {});
  }
}
const {
  SvelteComponent: Lm,
  append_hydration: Om,
  attr: mr,
  children: To,
  claim_svg_element: Co,
  detach: yi,
  init: Hm,
  insert_hydration: Pm,
  noop: wi,
  safe_not_equal: qm,
  svg_element: Mo
} = window.__gradio__svelte__internal;
function Um(r) {
  let e, t;
  return {
    c() {
      e = Mo("svg"), t = Mo("path"), this.h();
    },
    l(n) {
      e = Co(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var a = To(e);
      t = Co(a, "path", { fill: !0, d: !0 }), To(t).forEach(yi), a.forEach(yi), this.h();
    },
    h() {
      mr(t, "fill", "currentColor"), mr(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), mr(e, "xmlns", "http://www.w3.org/2000/svg"), mr(e, "width", "100%"), mr(e, "height", "100%"), mr(e, "viewBox", "0 0 32 32");
    },
    m(n, a) {
      Pm(n, e, a), Om(e, t);
    },
    p: wi,
    i: wi,
    o: wi,
    d(n) {
      n && yi(e);
    }
  };
}
class Gm extends Lm {
  constructor(e) {
    super(), Hm(this, e, null, Um, qm, {});
  }
}
const {
  SvelteComponent: Vm,
  append_hydration: ki,
  attr: ze,
  children: Gn,
  claim_svg_element: Vn,
  detach: Vr,
  init: jm,
  insert_hydration: Wm,
  noop: Di,
  safe_not_equal: Xm,
  svg_element: jn
} = window.__gradio__svelte__internal;
function $m(r) {
  let e, t, n, a;
  return {
    c() {
      e = jn("svg"), t = jn("rect"), n = jn("circle"), a = jn("polyline"), this.h();
    },
    l(i) {
      e = Vn(i, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var l = Gn(e);
      t = Vn(l, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Gn(t).forEach(Vr), n = Vn(l, "circle", { cx: !0, cy: !0, r: !0 }), Gn(n).forEach(Vr), a = Vn(l, "polyline", { points: !0 }), Gn(a).forEach(Vr), l.forEach(Vr), this.h();
    },
    h() {
      ze(t, "x", "3"), ze(t, "y", "3"), ze(t, "width", "18"), ze(t, "height", "18"), ze(t, "rx", "2"), ze(t, "ry", "2"), ze(n, "cx", "8.5"), ze(n, "cy", "8.5"), ze(n, "r", "1.5"), ze(a, "points", "21 15 16 10 5 21"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "1.5"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-image");
    },
    m(i, l) {
      Wm(i, e, l), ki(e, t), ki(e, n), ki(e, a);
    },
    p: Di,
    i: Di,
    o: Di,
    d(i) {
      i && Vr(e);
    }
  };
}
class Kl extends Vm {
  constructor(e) {
    super(), jm(this, e, null, $m, Xm, {});
  }
}
const {
  SvelteComponent: Ym,
  append_hydration: Zm,
  attr: dr,
  children: Bo,
  claim_svg_element: No,
  detach: xi,
  init: Qm,
  insert_hydration: Jm,
  noop: Ai,
  safe_not_equal: Km,
  svg_element: Io
} = window.__gradio__svelte__internal;
function ed(r) {
  let e, t;
  return {
    c() {
      e = Io("svg"), t = Io("path"), this.h();
    },
    l(n) {
      e = No(n, "svg", {
        xmlns: !0,
        viewBox: !0,
        width: !0,
        height: !0
      });
      var a = Bo(e);
      t = No(a, "path", { fill: !0, d: !0 }), Bo(t).forEach(xi), a.forEach(xi), this.h();
    },
    h() {
      dr(t, "fill", "currentColor"), dr(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), dr(e, "xmlns", "http://www.w3.org/2000/svg"), dr(e, "viewBox", "0 0 24 24"), dr(e, "width", "100%"), dr(e, "height", "100%");
    },
    m(n, a) {
      Jm(n, e, a), Zm(e, t);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(n) {
      n && xi(e);
    }
  };
}
class td extends Ym {
  constructor(e) {
    super(), Qm(this, e, null, ed, Km, {});
  }
}
const {
  SvelteComponent: rd,
  append_hydration: Ei,
  attr: Xe,
  children: Wn,
  claim_svg_element: Xn,
  detach: jr,
  init: nd,
  insert_hydration: ad,
  noop: Si,
  safe_not_equal: id,
  svg_element: $n
} = window.__gradio__svelte__internal;
function ld(r) {
  let e, t, n, a;
  return {
    c() {
      e = $n("svg"), t = $n("path"), n = $n("polyline"), a = $n("line"), this.h();
    },
    l(i) {
      e = Xn(i, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var l = Wn(e);
      t = Xn(l, "path", { d: !0 }), Wn(t).forEach(jr), n = Xn(l, "polyline", { points: !0 }), Wn(n).forEach(jr), a = Xn(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Wn(a).forEach(jr), l.forEach(jr), this.h();
    },
    h() {
      Xe(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Xe(n, "points", "17 8 12 3 7 8"), Xe(a, "x1", "12"), Xe(a, "y1", "3"), Xe(a, "x2", "12"), Xe(a, "y2", "15"), Xe(e, "xmlns", "http://www.w3.org/2000/svg"), Xe(e, "width", "90%"), Xe(e, "height", "90%"), Xe(e, "viewBox", "0 0 24 24"), Xe(e, "fill", "none"), Xe(e, "stroke", "currentColor"), Xe(e, "stroke-width", "2"), Xe(e, "stroke-linecap", "round"), Xe(e, "stroke-linejoin", "round"), Xe(e, "class", "feather feather-upload");
    },
    m(i, l) {
      ad(i, e, l), Ei(e, t), Ei(e, n), Ei(e, a);
    },
    p: Si,
    i: Si,
    o: Si,
    d(i) {
      i && jr(e);
    }
  };
}
let sd = class extends rd {
  constructor(e) {
    super(), nd(this, e, null, ld, id, {});
  }
};
const od = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], zo = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
od.reduce(
  (r, { color: e, primary: t, secondary: n }) => ({
    ...r,
    [e]: {
      primary: zo[e][t],
      secondary: zo[e][n]
    }
  }),
  {}
);
const ud = /^(#\s*)(.+)$/m;
function cd(r) {
  const e = r.trim(), t = e.match(ud);
  if (!t)
    return [!1, e || !1];
  const [n, , a] = t, i = a.trim();
  if (e === n)
    return [i, !1];
  const l = t.index !== void 0 ? t.index + n.length : 0, o = e.substring(l).trim() || !1;
  return [i, o];
}
const {
  SvelteComponent: hd,
  append_hydration: j0,
  attr: un,
  check_outros: fd,
  children: cn,
  claim_component: uc,
  claim_element: hn,
  claim_space: Ha,
  claim_text: P0,
  create_component: cc,
  destroy_component: hc,
  detach: Ye,
  element: fn,
  empty: da,
  group_outros: md,
  init: dd,
  insert_hydration: Lt,
  mount_component: fc,
  safe_not_equal: pd,
  set_data: mn,
  space: Pa,
  text: q0,
  toggle_class: Ro,
  transition_in: pa,
  transition_out: ga
} = window.__gradio__svelte__internal;
function gd(r) {
  let e, t;
  return e = new sd({}), {
    c() {
      cc(e.$$.fragment);
    },
    l(n) {
      uc(e.$$.fragment, n);
    },
    m(n, a) {
      fc(e, n, a), t = !0;
    },
    i(n) {
      t || (pa(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ga(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hc(e, n);
    }
  };
}
function bd(r) {
  let e, t;
  return e = new td({}), {
    c() {
      cc(e.$$.fragment);
    },
    l(n) {
      uc(e.$$.fragment, n);
    },
    m(n, a) {
      fc(e, n, a), t = !0;
    },
    i(n) {
      t || (pa(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ga(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hc(e, n);
    }
  };
}
function vd(r) {
  let e = (
    /*i18n*/
    r[1](
      /*defs*/
      r[7][
        /*type*/
        r[0]
      ] || /*defs*/
      r[7].file
    ) + ""
  ), t, n, a, i = (
    /*mode*/
    r[3] !== "short" && Lo(r)
  );
  return {
    c() {
      t = q0(e), n = Pa(), i && i.c(), a = da();
    },
    l(l) {
      t = P0(l, e), n = Ha(l), i && i.l(l), a = da();
    },
    m(l, s) {
      Lt(l, t, s), Lt(l, n, s), i && i.m(l, s), Lt(l, a, s);
    },
    p(l, s) {
      s & /*i18n, type*/
      3 && e !== (e = /*i18n*/
      l[1](
        /*defs*/
        l[7][
          /*type*/
          l[0]
        ] || /*defs*/
        l[7].file
      ) + "") && mn(t, e), /*mode*/
      l[3] !== "short" ? i ? i.p(l, s) : (i = Lo(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (Ye(t), Ye(n), Ye(a)), i && i.d(l);
    }
  };
}
function _d(r) {
  let e, t, n = (
    /*heading*/
    r[6] && Oo(r)
  ), a = (
    /*paragraph*/
    r[5] && Ho(r)
  );
  return {
    c() {
      n && n.c(), e = Pa(), a && a.c(), t = da();
    },
    l(i) {
      n && n.l(i), e = Ha(i), a && a.l(i), t = da();
    },
    m(i, l) {
      n && n.m(i, l), Lt(i, e, l), a && a.m(i, l), Lt(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? n ? n.p(i, l) : (n = Oo(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = Ho(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (Ye(e), Ye(t)), n && n.d(i), a && a.d(i);
    }
  };
}
function Lo(r) {
  let e, t, n = (
    /*i18n*/
    r[1]("common.or") + ""
  ), a, i, l, s = (
    /*message*/
    (r[2] || /*i18n*/
    r[1]("upload_text.click_to_upload")) + ""
  ), o;
  return {
    c() {
      e = fn("span"), t = q0("- "), a = q0(n), i = q0(" -"), l = Pa(), o = q0(s), this.h();
    },
    l(u) {
      e = hn(u, "SPAN", { class: !0 });
      var h = cn(e);
      t = P0(h, "- "), a = P0(h, n), i = P0(h, " -"), h.forEach(Ye), l = Ha(u), o = P0(u, s), this.h();
    },
    h() {
      un(e, "class", "or svelte-1xg7h5n");
    },
    m(u, h) {
      Lt(u, e, h), j0(e, t), j0(e, a), j0(e, i), Lt(u, l, h), Lt(u, o, h);
    },
    p(u, h) {
      h & /*i18n*/
      2 && n !== (n = /*i18n*/
      u[1]("common.or") + "") && mn(a, n), h & /*message, i18n*/
      6 && s !== (s = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && mn(o, s);
    },
    d(u) {
      u && (Ye(e), Ye(l), Ye(o));
    }
  };
}
function Oo(r) {
  let e, t;
  return {
    c() {
      e = fn("h2"), t = q0(
        /*heading*/
        r[6]
      ), this.h();
    },
    l(n) {
      e = hn(n, "H2", { class: !0 });
      var a = cn(e);
      t = P0(
        a,
        /*heading*/
        r[6]
      ), a.forEach(Ye), this.h();
    },
    h() {
      un(e, "class", "svelte-1xg7h5n");
    },
    m(n, a) {
      Lt(n, e, a), j0(e, t);
    },
    p(n, a) {
      a & /*heading*/
      64 && mn(
        t,
        /*heading*/
        n[6]
      );
    },
    d(n) {
      n && Ye(e);
    }
  };
}
function Ho(r) {
  let e, t;
  return {
    c() {
      e = fn("p"), t = q0(
        /*paragraph*/
        r[5]
      ), this.h();
    },
    l(n) {
      e = hn(n, "P", { class: !0 });
      var a = cn(e);
      t = P0(
        a,
        /*paragraph*/
        r[5]
      ), a.forEach(Ye), this.h();
    },
    h() {
      un(e, "class", "svelte-1xg7h5n");
    },
    m(n, a) {
      Lt(n, e, a), j0(e, t);
    },
    p(n, a) {
      a & /*paragraph*/
      32 && mn(
        t,
        /*paragraph*/
        n[5]
      );
    },
    d(n) {
      n && Ye(e);
    }
  };
}
function yd(r) {
  let e, t, n, a, i, l;
  const s = [bd, gd], o = [];
  function u(g, v) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(r), a = o[n] = s[n](r);
  function h(g, v) {
    return (
      /*heading*/
      g[6] || /*paragraph*/
      g[5] ? _d : vd
    );
  }
  let m = h(r), p = m(r);
  return {
    c() {
      e = fn("div"), t = fn("span"), a.c(), i = Pa(), p.c(), this.h();
    },
    l(g) {
      e = hn(g, "DIV", { class: !0 });
      var v = cn(e);
      t = hn(v, "SPAN", { class: !0 });
      var w = cn(t);
      a.l(w), w.forEach(Ye), i = Ha(v), p.l(v), v.forEach(Ye), this.h();
    },
    h() {
      un(t, "class", "icon-wrap svelte-1xg7h5n"), Ro(
        t,
        "hovered",
        /*hovered*/
        r[4]
      ), un(e, "class", "wrap svelte-1xg7h5n");
    },
    m(g, v) {
      Lt(g, e, v), j0(e, t), o[n].m(t, null), j0(e, i), p.m(e, null), l = !0;
    },
    p(g, [v]) {
      let w = n;
      n = u(g), n !== w && (md(), ga(o[w], 1, 1, () => {
        o[w] = null;
      }), fd(), a = o[n], a || (a = o[n] = s[n](g), a.c()), pa(a, 1), a.m(t, null)), (!l || v & /*hovered*/
      16) && Ro(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), m === (m = h(g)) && p ? p.p(g, v) : (p.d(1), p = m(g), p && (p.c(), p.m(e, null)));
    },
    i(g) {
      l || (pa(a), l = !0);
    },
    o(g) {
      ga(a), l = !1;
    },
    d(g) {
      g && Ye(e), o[n].d(), p.d();
    }
  };
}
function wd(r, e, t) {
  let n, a, { type: i = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: u = !1 } = e, { placeholder: h = void 0 } = e;
  const m = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return r.$$set = (p) => {
    "type" in p && t(0, i = p.type), "i18n" in p && t(1, l = p.i18n), "message" in p && t(2, s = p.message), "mode" in p && t(3, o = p.mode), "hovered" in p && t(4, u = p.hovered), "placeholder" in p && t(8, h = p.placeholder);
  }, r.$$.update = () => {
    r.$$.dirty & /*placeholder*/
    256 && t(6, [n, a] = h ? cd(h) : [!1, !1], n, (t(5, a), t(8, h)));
  }, [i, l, s, o, u, a, n, m, h];
}
class kd extends hd {
  constructor(e) {
    super(), dd(this, e, wd, yd, pd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4,
      placeholder: 8
    });
  }
}
const {
  SvelteComponent: Dd,
  attr: Po,
  children: xd,
  claim_element: Ad,
  create_slot: Ed,
  detach: qo,
  element: Sd,
  get_all_dirty_from_scope: Fd,
  get_slot_changes: Td,
  init: Cd,
  insert_hydration: Md,
  null_to_empty: Uo,
  safe_not_equal: Bd,
  transition_in: Nd,
  transition_out: Id,
  update_slot_base: zd
} = window.__gradio__svelte__internal;
function Rd(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[2].default
  ), i = Ed(
    a,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = Sd("div"), i && i.c(), this.h();
    },
    l(l) {
      e = Ad(l, "DIV", { class: !0 });
      var s = xd(e);
      i && i.l(s), s.forEach(qo), this.h();
    },
    h() {
      Po(e, "class", t = Uo(`icon-button-wrapper ${/*top_panel*/
      r[0] ? "top-panel" : ""}`) + " svelte-171ybii");
    },
    m(l, s) {
      Md(l, e, s), i && i.m(e, null), n = !0;
    },
    p(l, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && zd(
        i,
        a,
        l,
        /*$$scope*/
        l[1],
        n ? Td(
          a,
          /*$$scope*/
          l[1],
          s,
          null
        ) : Fd(
          /*$$scope*/
          l[1]
        ),
        null
      ), (!n || s & /*top_panel*/
      1 && t !== (t = Uo(`icon-button-wrapper ${/*top_panel*/
      l[0] ? "top-panel" : ""}`) + " svelte-171ybii")) && Po(e, "class", t);
    },
    i(l) {
      n || (Nd(i, l), n = !0);
    },
    o(l) {
      Id(i, l), n = !1;
    },
    d(l) {
      l && qo(e), i && i.d(l);
    }
  };
}
function Ld(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { top_panel: i = !0 } = e;
  return r.$$set = (l) => {
    "top_panel" in l && t(0, i = l.top_panel), "$$scope" in l && t(1, a = l.$$scope);
  }, [i, a, n];
}
class mc extends Dd {
  constructor(e) {
    super(), Cd(this, e, Ld, Rd, Bd, { top_panel: 0 });
  }
}
const { setContext: Tp, getContext: Od } = window.__gradio__svelte__internal, Hd = "WORKER_PROXY_CONTEXT_KEY";
function Pd() {
  return Od(Hd);
}
const qd = "lite.local";
function Ud(r) {
  return r.host === window.location.host || r.host === "localhost:7860" || r.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  r.host === qd;
}
function Gd(r, e) {
  const t = e.toLowerCase();
  for (const [n, a] of Object.entries(r))
    if (n.toLowerCase() === t)
      return a;
}
function Vd(r) {
  const e = typeof window < "u";
  if (r == null || !e)
    return !1;
  const t = new URL(r, window.location.href);
  return !(!Ud(t) || t.protocol !== "http:" && t.protocol !== "https:");
}
const {
  SvelteComponent: jd,
  assign: ba,
  check_outros: dc,
  children: pc,
  claim_element: gc,
  compute_rest_props: Go,
  create_slot: es,
  detach: Ar,
  element: bc,
  empty: va,
  exclude_internal_props: Wd,
  get_all_dirty_from_scope: ts,
  get_slot_changes: rs,
  get_spread_update: vc,
  group_outros: _c,
  init: Xd,
  insert_hydration: qa,
  listen: yc,
  prevent_default: $d,
  safe_not_equal: Yd,
  set_attributes: _a,
  set_style: Vo,
  toggle_class: ya,
  transition_in: Y0,
  transition_out: Z0,
  update_slot_base: ns
} = window.__gradio__svelte__internal, { createEventDispatcher: Zd, onMount: Cp } = window.__gradio__svelte__internal;
function Qd(r) {
  let e, t, n, a, i;
  const l = (
    /*#slots*/
    r[8].default
  ), s = es(
    l,
    r,
    /*$$scope*/
    r[7],
    null
  );
  let o = [
    { class: "download-link" },
    { href: (
      /*href*/
      r[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      r[1]
    ) },
    /*$$restProps*/
    r[6]
  ], u = {};
  for (let h = 0; h < o.length; h += 1)
    u = ba(u, o[h]);
  return {
    c() {
      e = bc("a"), s && s.c(), this.h();
    },
    l(h) {
      e = gc(h, "A", {
        class: !0,
        href: !0,
        target: !0,
        rel: !0,
        download: !0
      });
      var m = pc(e);
      s && s.l(m), m.forEach(Ar), this.h();
    },
    h() {
      _a(e, u), Vo(e, "position", "relative"), ya(e, "svelte-151nsdd", !0);
    },
    m(h, m) {
      qa(h, e, m), s && s.m(e, null), n = !0, a || (i = yc(
        e,
        "click",
        /*dispatch*/
        r[3].bind(null, "click")
      ), a = !0);
    },
    p(h, m) {
      s && s.p && (!n || m & /*$$scope*/
      128) && ns(
        s,
        l,
        h,
        /*$$scope*/
        h[7],
        n ? rs(
          l,
          /*$$scope*/
          h[7],
          m,
          null
        ) : ts(
          /*$$scope*/
          h[7]
        ),
        null
      ), _a(e, u = vc(o, [
        { class: "download-link" },
        (!n || m & /*href*/
        1) && { href: (
          /*href*/
          h[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || m & /*download*/
        2) && { download: (
          /*download*/
          h[1]
        ) },
        m & /*$$restProps*/
        64 && /*$$restProps*/
        h[6]
      ])), Vo(e, "position", "relative"), ya(e, "svelte-151nsdd", !0);
    },
    i(h) {
      n || (Y0(s, h), n = !0);
    },
    o(h) {
      Z0(s, h), n = !1;
    },
    d(h) {
      h && Ar(e), s && s.d(h), a = !1, i();
    }
  };
}
function Jd(r) {
  let e, t, n, a;
  const i = [e5, Kd], l = [];
  function s(o, u) {
    return (
      /*is_downloading*/
      o[2] ? 0 : 1
    );
  }
  return e = s(r), t = l[e] = i[e](r), {
    c() {
      t.c(), n = va();
    },
    l(o) {
      t.l(o), n = va();
    },
    m(o, u) {
      l[e].m(o, u), qa(o, n, u), a = !0;
    },
    p(o, u) {
      let h = e;
      e = s(o), e === h ? l[e].p(o, u) : (_c(), Z0(l[h], 1, 1, () => {
        l[h] = null;
      }), dc(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), Y0(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      a || (Y0(t), a = !0);
    },
    o(o) {
      Z0(t), a = !1;
    },
    d(o) {
      o && Ar(n), l[e].d(o);
    }
  };
}
function Kd(r) {
  let e, t, n, a;
  const i = (
    /*#slots*/
    r[8].default
  ), l = es(
    i,
    r,
    /*$$scope*/
    r[7],
    null
  );
  let s = [
    /*$$restProps*/
    r[6],
    { href: (
      /*href*/
      r[0]
    ) }
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = ba(o, s[u]);
  return {
    c() {
      e = bc("a"), l && l.c(), this.h();
    },
    l(u) {
      e = gc(u, "A", { href: !0 });
      var h = pc(e);
      l && l.l(h), h.forEach(Ar), this.h();
    },
    h() {
      _a(e, o), ya(e, "svelte-151nsdd", !0);
    },
    m(u, h) {
      qa(u, e, h), l && l.m(e, null), t = !0, n || (a = yc(e, "click", $d(
        /*wasm_click_handler*/
        r[5]
      )), n = !0);
    },
    p(u, h) {
      l && l.p && (!t || h & /*$$scope*/
      128) && ns(
        l,
        i,
        u,
        /*$$scope*/
        u[7],
        t ? rs(
          i,
          /*$$scope*/
          u[7],
          h,
          null
        ) : ts(
          /*$$scope*/
          u[7]
        ),
        null
      ), _a(e, o = vc(s, [
        h & /*$$restProps*/
        64 && /*$$restProps*/
        u[6],
        (!t || h & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) }
      ])), ya(e, "svelte-151nsdd", !0);
    },
    i(u) {
      t || (Y0(l, u), t = !0);
    },
    o(u) {
      Z0(l, u), t = !1;
    },
    d(u) {
      u && Ar(e), l && l.d(u), n = !1, a();
    }
  };
}
function e5(r) {
  let e;
  const t = (
    /*#slots*/
    r[8].default
  ), n = es(
    t,
    r,
    /*$$scope*/
    r[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    l(a) {
      n && n.l(a);
    },
    m(a, i) {
      n && n.m(a, i), e = !0;
    },
    p(a, i) {
      n && n.p && (!e || i & /*$$scope*/
      128) && ns(
        n,
        t,
        a,
        /*$$scope*/
        a[7],
        e ? rs(
          t,
          /*$$scope*/
          a[7],
          i,
          null
        ) : ts(
          /*$$scope*/
          a[7]
        ),
        null
      );
    },
    i(a) {
      e || (Y0(n, a), e = !0);
    },
    o(a) {
      Z0(n, a), e = !1;
    },
    d(a) {
      n && n.d(a);
    }
  };
}
function t5(r) {
  let e, t, n, a, i;
  const l = [Jd, Qd], s = [];
  function o(u, h) {
    return h & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (u[4] && Vd(
      /*href*/
      u[0]
    ))), e ? 0 : 1;
  }
  return t = o(r, -1), n = s[t] = l[t](r), {
    c() {
      n.c(), a = va();
    },
    l(u) {
      n.l(u), a = va();
    },
    m(u, h) {
      s[t].m(u, h), qa(u, a, h), i = !0;
    },
    p(u, [h]) {
      let m = t;
      t = o(u, h), t === m ? s[t].p(u, h) : (_c(), Z0(s[m], 1, 1, () => {
        s[m] = null;
      }), dc(), n = s[t], n ? n.p(u, h) : (n = s[t] = l[t](u), n.c()), Y0(n, 1), n.m(a.parentNode, a));
    },
    i(u) {
      i || (Y0(n), i = !0);
    },
    o(u) {
      Z0(n), i = !1;
    },
    d(u) {
      u && Ar(a), s[t].d(u);
    }
  };
}
function r5(r, e, t) {
  const n = ["href", "download"];
  let a = Go(e, n), { $$slots: i = {}, $$scope: l } = e, { href: s = void 0 } = e, { download: o } = e;
  const u = Zd();
  let h = !1;
  const m = Pd();
  async function p() {
    if (h)
      return;
    if (u("click"), s == null)
      throw new Error("href is not defined.");
    if (m == null)
      throw new Error("Wasm worker proxy is not available.");
    const v = new URL(s, window.location.href).pathname;
    t(2, h = !0), m.httpRequest({
      method: "GET",
      path: v,
      headers: {},
      query_string: ""
    }).then((w) => {
      if (w.status !== 200)
        throw new Error(`Failed to get file ${v} from the Wasm worker.`);
      const T = new Blob(
        [w.body],
        {
          type: Gd(w.headers, "content-type")
        }
      ), S = URL.createObjectURL(T), D = document.createElement("a");
      D.href = S, D.download = o, D.click(), URL.revokeObjectURL(S);
    }).finally(() => {
      t(2, h = !1);
    });
  }
  return r.$$set = (g) => {
    e = ba(ba({}, e), Wd(g)), t(6, a = Go(e, n)), "href" in g && t(0, s = g.href), "download" in g && t(1, o = g.download), "$$scope" in g && t(7, l = g.$$scope);
  }, [
    s,
    o,
    h,
    u,
    m,
    p,
    a,
    l,
    i
  ];
}
class n5 extends jd {
  constructor(e) {
    super(), Xd(this, e, r5, t5, Yd, { href: 0, download: 1 });
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
async function a5(r, e) {
  return r.map(
    (t) => new i5({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class i5 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: a,
    blob: i,
    is_stream: l,
    mime_type: s,
    alt_text: o,
    b64: u
  }) {
    this.meta = { _type: "gradio.FileData" }, this.path = e, this.url = t, this.orig_name = n, this.size = a, this.blob = t ? void 0 : i, this.is_stream = l, this.mime_type = s, this.alt_text = o, this.b64 = u;
  }
}
typeof process < "u" && process.versions && process.versions.node;
var u0;
class Mp extends TransformStream {
  /** Constructs a new instance. */
  constructor(t = { allowCR: !1 }) {
    super({
      transform: (n, a) => {
        for (n = hr(this, u0) + n; ; ) {
          const i = n.indexOf(`
`), l = t.allowCR ? n.indexOf("\r") : -1;
          if (l !== -1 && l !== n.length - 1 && (i === -1 || i - 1 > l)) {
            a.enqueue(n.slice(0, l)), n = n.slice(l + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = n[i - 1] === "\r" ? i - 1 : i;
          a.enqueue(n.slice(0, s)), n = n.slice(i + 1);
        }
        Cs(this, u0, n);
      },
      flush: (n) => {
        if (hr(this, u0) === "")
          return;
        const a = t.allowCR && hr(this, u0).endsWith("\r") ? hr(this, u0).slice(0, -1) : hr(this, u0);
        n.enqueue(a);
      }
    });
    Ka(this, u0, "");
  }
}
u0 = new WeakMap();
const {
  SvelteComponent: l5,
  append_hydration: jo,
  attr: pr,
  check_outros: wc,
  children: Wo,
  claim_component: Nr,
  claim_element: Fi,
  claim_space: kc,
  create_component: Ir,
  destroy_component: zr,
  detach: U0,
  element: Ti,
  empty: wa,
  group_outros: Dc,
  init: s5,
  insert_hydration: dn,
  mount_component: Rr,
  safe_not_equal: o5,
  space: xc,
  src_url_equal: Xo,
  toggle_class: $o,
  transition_in: Ot,
  transition_out: Qt
} = window.__gradio__svelte__internal;
function u5(r) {
  let e, t, n, a, i, l, s;
  return e = new mc({
    props: {
      $$slots: { default: [f5] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Ir(e.$$.fragment), t = xc(), n = Ti("button"), a = Ti("div"), i = Ti("img"), this.h();
    },
    l(o) {
      Nr(e.$$.fragment, o), t = kc(o), n = Fi(o, "BUTTON", { class: !0 });
      var u = Wo(n);
      a = Fi(u, "DIV", { class: !0 });
      var h = Wo(a);
      i = Fi(h, "IMG", { src: !0, alt: !0, loading: !0 }), h.forEach(U0), u.forEach(U0), this.h();
    },
    h() {
      Xo(i.src, l = /*value*/
      r[0].url) || pr(i, "src", l), pr(i, "alt", ""), pr(i, "loading", "lazy"), pr(a, "class", "image-container svelte-mdifpc"), $o(
        a,
        "selectable",
        /*selectable*/
        r[4]
      ), pr(n, "class", "svelte-mdifpc");
    },
    m(o, u) {
      Rr(e, o, u), dn(o, t, u), dn(o, n, u), jo(n, a), jo(a, i), s = !0;
    },
    p(o, u) {
      const h = {};
      u & /*$$scope, value, i18n, show_download_button*/
      105 && (h.$$scope = { dirty: u, ctx: o }), e.$set(h), (!s || u & /*value*/
      1 && !Xo(i.src, l = /*value*/
      o[0].url)) && pr(i, "src", l), (!s || u & /*selectable*/
      16) && $o(
        a,
        "selectable",
        /*selectable*/
        o[4]
      );
    },
    i(o) {
      s || (Ot(e.$$.fragment, o), s = !0);
    },
    o(o) {
      Qt(e.$$.fragment, o), s = !1;
    },
    d(o) {
      o && (U0(t), U0(n)), zr(e, o);
    }
  };
}
function c5(r) {
  let e, t;
  return e = new Mm({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [m5] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Ir(e.$$.fragment);
    },
    l(n) {
      Nr(e.$$.fragment, n);
    },
    m(n, a) {
      Rr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*$$scope*/
      64 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (Ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zr(e, n);
    }
  };
}
function Yo(r) {
  let e, t;
  return e = new n5({
    props: {
      href: (
        /*value*/
        r[0].url
      ),
      download: (
        /*value*/
        r[0].orig_name || "image"
      ),
      $$slots: { default: [h5] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Ir(e.$$.fragment);
    },
    l(n) {
      Nr(e.$$.fragment, n);
    },
    m(n, a) {
      Rr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*value*/
      1 && (i.href = /*value*/
      n[0].url), a & /*value*/
      1 && (i.download = /*value*/
      n[0].orig_name || "image"), a & /*$$scope, i18n*/
      96 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (Ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zr(e, n);
    }
  };
}
function h5(r) {
  let e, t;
  return e = new Jl({
    props: {
      Icon: Gm,
      label: (
        /*i18n*/
        r[5]("common.download")
      )
    }
  }), {
    c() {
      Ir(e.$$.fragment);
    },
    l(n) {
      Nr(e.$$.fragment, n);
    },
    m(n, a) {
      Rr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*i18n*/
      32 && (i.label = /*i18n*/
      n[5]("common.download")), e.$set(i);
    },
    i(n) {
      t || (Ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zr(e, n);
    }
  };
}
function f5(r) {
  let e, t, n = (
    /*show_download_button*/
    r[3] && Yo(r)
  );
  return {
    c() {
      n && n.c(), e = wa();
    },
    l(a) {
      n && n.l(a), e = wa();
    },
    m(a, i) {
      n && n.m(a, i), dn(a, e, i), t = !0;
    },
    p(a, i) {
      /*show_download_button*/
      a[3] ? n ? (n.p(a, i), i & /*show_download_button*/
      8 && Ot(n, 1)) : (n = Yo(a), n.c(), Ot(n, 1), n.m(e.parentNode, e)) : n && (Dc(), Qt(n, 1, 1, () => {
        n = null;
      }), wc());
    },
    i(a) {
      t || (Ot(n), t = !0);
    },
    o(a) {
      Qt(n), t = !1;
    },
    d(a) {
      a && U0(e), n && n.d(a);
    }
  };
}
function m5(r) {
  let e, t;
  return e = new Kl({}), {
    c() {
      Ir(e.$$.fragment);
    },
    l(n) {
      Nr(e.$$.fragment, n);
    },
    m(n, a) {
      Rr(e, n, a), t = !0;
    },
    i(n) {
      t || (Ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zr(e, n);
    }
  };
}
function d5(r) {
  let e, t, n, a, i, l;
  e = new lc({
    props: {
      show_label: (
        /*show_label*/
        r[2]
      ),
      Icon: Kl,
      label: (
        /*label*/
        r[1] || /*i18n*/
        r[5]("image.image")
      )
    }
  });
  const s = [c5, u5], o = [];
  function u(h, m) {
    return (
      /*value*/
      h[0] === null || !/*value*/
      h[0].url ? 0 : 1
    );
  }
  return n = u(r), a = o[n] = s[n](r), {
    c() {
      Ir(e.$$.fragment), t = xc(), a.c(), i = wa();
    },
    l(h) {
      Nr(e.$$.fragment, h), t = kc(h), a.l(h), i = wa();
    },
    m(h, m) {
      Rr(e, h, m), dn(h, t, m), o[n].m(h, m), dn(h, i, m), l = !0;
    },
    p(h, [m]) {
      const p = {};
      m & /*show_label*/
      4 && (p.show_label = /*show_label*/
      h[2]), m & /*label, i18n*/
      34 && (p.label = /*label*/
      h[1] || /*i18n*/
      h[5]("image.image")), e.$set(p);
      let g = n;
      n = u(h), n === g ? o[n].p(h, m) : (Dc(), Qt(o[g], 1, 1, () => {
        o[g] = null;
      }), wc(), a = o[n], a ? a.p(h, m) : (a = o[n] = s[n](h), a.c()), Ot(a, 1), a.m(i.parentNode, i));
    },
    i(h) {
      l || (Ot(e.$$.fragment, h), Ot(a), l = !0);
    },
    o(h) {
      Qt(e.$$.fragment, h), Qt(a), l = !1;
    },
    d(h) {
      h && (U0(t), U0(i)), zr(e, h), o[n].d(h);
    }
  };
}
function p5(r, e, t) {
  let { value: n } = e, { label: a = void 0 } = e, { show_label: i } = e, { show_download_button: l = !0 } = e, { selectable: s = !1 } = e, { i18n: o } = e;
  return r.$$set = (u) => {
    "value" in u && t(0, n = u.value), "label" in u && t(1, a = u.label), "show_label" in u && t(2, i = u.show_label), "show_download_button" in u && t(3, l = u.show_download_button), "selectable" in u && t(4, s = u.selectable), "i18n" in u && t(5, o = u.i18n);
  }, [n, a, i, l, s, o];
}
class g5 extends l5 {
  constructor(e) {
    super(), s5(this, e, p5, d5, o5, {
      value: 0,
      label: 1,
      show_label: 2,
      show_download_button: 3,
      selectable: 4,
      i18n: 5
    });
  }
}
function W0() {
}
function b5(r) {
  return r();
}
function v5(r) {
  r.forEach(b5);
}
function _5(r) {
  return typeof r == "function";
}
function y5(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function w5(r, ...e) {
  if (r == null) {
    for (const n of e)
      n(void 0);
    return W0;
  }
  const t = r.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
const Ac = typeof window < "u";
let Zo = Ac ? () => window.performance.now() : () => Date.now(), Ec = Ac ? (r) => requestAnimationFrame(r) : W0;
const kr = /* @__PURE__ */ new Set();
function Sc(r) {
  kr.forEach((e) => {
    e.c(r) || (kr.delete(e), e.f());
  }), kr.size !== 0 && Ec(Sc);
}
function k5(r) {
  let e;
  return kr.size === 0 && Ec(Sc), {
    promise: new Promise((t) => {
      kr.add(e = { c: r, f: t });
    }),
    abort() {
      kr.delete(e);
    }
  };
}
const gr = [];
function D5(r, e) {
  return {
    subscribe: wn(r, e).subscribe
  };
}
function wn(r, e = W0) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function a(s) {
    if (y5(r, s) && (r = s, t)) {
      const o = !gr.length;
      for (const u of n)
        u[1](), gr.push(u, r);
      if (o) {
        for (let u = 0; u < gr.length; u += 2)
          gr[u][0](gr[u + 1]);
        gr.length = 0;
      }
    }
  }
  function i(s) {
    a(s(r));
  }
  function l(s, o = W0) {
    const u = [s, o];
    return n.add(u), n.size === 1 && (t = e(a, i) || W0), s(r), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function Lr(r, e, t) {
  const n = !Array.isArray(r), a = n ? [r] : r;
  if (!a.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return D5(t, (l, s) => {
    let o = !1;
    const u = [];
    let h = 0, m = W0;
    const p = () => {
      if (h)
        return;
      m();
      const v = e(n ? u[0] : u, l, s);
      i ? l(v) : m = _5(v) ? v : W0;
    }, g = a.map(
      (v, w) => w5(
        v,
        (T) => {
          u[w] = T, h &= ~(1 << w), o && p();
        },
        () => {
          h |= 1 << w;
        }
      )
    );
    return o = !0, p(), function() {
      v5(g), m(), o = !1;
    };
  });
}
function Qo(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function tl(r, e, t, n) {
  if (typeof t == "number" || Qo(t)) {
    const a = n - t, i = (t - e) / (r.dt || 1 / 60), l = r.opts.stiffness * a, s = r.opts.damping * i, o = (l - s) * r.inv_mass, u = (i + o) * r.dt;
    return Math.abs(u) < r.opts.precision && Math.abs(a) < r.opts.precision ? n : (r.settled = !1, Qo(t) ? new Date(t.getTime() + u) : t + u);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => tl(r, e[i], t[i], n[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = tl(r, e[i], t[i], n[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Jo(r, e = {}) {
  const t = wn(r), { stiffness: n = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, u = r, h = r, m = 1, p = 0, g = !1;
  function v(T, S = {}) {
    h = T;
    const D = o = {};
    return r == null || S.hard || w.stiffness >= 1 && w.damping >= 1 ? (g = !0, l = Zo(), u = T, t.set(r = h), Promise.resolve()) : (S.soft && (p = 1 / ((S.soft === !0 ? 0.5 : +S.soft) * 60), m = 0), s || (l = Zo(), g = !1, s = k5((_) => {
      if (g)
        return g = !1, s = null, !1;
      m = Math.min(m + p, 1);
      const A = {
        inv_mass: m,
        opts: w,
        settled: !0,
        dt: (_ - l) * 60 / 1e3
      }, F = tl(A, u, r, h);
      return l = _, u = r, t.set(r = F), A.settled && (s = null), !A.settled;
    })), new Promise((_) => {
      s.promise.then(() => {
        D === o && _();
      });
    }));
  }
  const w = {
    set: v,
    update: (T, S) => v(T(h, r), S),
    subscribe: t.subscribe,
    stiffness: n,
    damping: a,
    precision: i
  };
  return w;
}
var x5 = function(e) {
  return A5(e) && !E5(e);
};
function A5(r) {
  return !!r && typeof r == "object";
}
function E5(r) {
  var e = Object.prototype.toString.call(r);
  return e === "[object RegExp]" || e === "[object Date]" || T5(r);
}
var S5 = typeof Symbol == "function" && Symbol.for, F5 = S5 ? Symbol.for("react.element") : 60103;
function T5(r) {
  return r.$$typeof === F5;
}
function C5(r) {
  return Array.isArray(r) ? [] : {};
}
function pn(r, e) {
  return e.clone !== !1 && e.isMergeableObject(r) ? Er(C5(r), r, e) : r;
}
function M5(r, e, t) {
  return r.concat(e).map(function(n) {
    return pn(n, t);
  });
}
function B5(r, e) {
  if (!e.customMerge)
    return Er;
  var t = e.customMerge(r);
  return typeof t == "function" ? t : Er;
}
function N5(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(e) {
    return Object.propertyIsEnumerable.call(r, e);
  }) : [];
}
function Ko(r) {
  return Object.keys(r).concat(N5(r));
}
function Fc(r, e) {
  try {
    return e in r;
  } catch {
    return !1;
  }
}
function I5(r, e) {
  return Fc(r, e) && !(Object.hasOwnProperty.call(r, e) && Object.propertyIsEnumerable.call(r, e));
}
function z5(r, e, t) {
  var n = {};
  return t.isMergeableObject(r) && Ko(r).forEach(function(a) {
    n[a] = pn(r[a], t);
  }), Ko(e).forEach(function(a) {
    I5(r, a) || (Fc(r, a) && t.isMergeableObject(e[a]) ? n[a] = B5(a, t)(r[a], e[a], t) : n[a] = pn(e[a], t));
  }), n;
}
function Er(r, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || M5, t.isMergeableObject = t.isMergeableObject || x5, t.cloneUnlessOtherwiseSpecified = pn;
  var n = Array.isArray(e), a = Array.isArray(r), i = n === a;
  return i ? n ? t.arrayMerge(r, e, t) : z5(r, e, t) : pn(e, t);
}
Er.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, a) {
    return Er(n, a, t);
  }, {});
};
var R5 = Er, L5 = R5;
const O5 = /* @__PURE__ */ F2(L5);
var rl = function(r, e) {
  return rl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
  }, rl(r, e);
};
function Ua(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  rl(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ce = function() {
  return ce = Object.assign || function(e) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ce.apply(this, arguments);
};
function H5(r, e) {
  var t = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(r); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (t[n[a]] = r[n[a]]);
  return t;
}
function Ci(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, a = e.length, i; n < a; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return r.concat(i || Array.prototype.slice.call(e));
}
function Mi(r, e) {
  var t = e && e.cache ? e.cache : j5, n = e && e.serializer ? e.serializer : V5, a = e && e.strategy ? e.strategy : q5;
  return a(r, {
    cache: t,
    serializer: n
  });
}
function P5(r) {
  return r == null || typeof r == "number" || typeof r == "boolean";
}
function Tc(r, e, t, n) {
  var a = P5(n) ? n : t(n), i = e.get(a);
  return typeof i > "u" && (i = r.call(this, n), e.set(a, i)), i;
}
function Cc(r, e, t) {
  var n = Array.prototype.slice.call(arguments, 3), a = t(n), i = e.get(a);
  return typeof i > "u" && (i = r.apply(this, n), e.set(a, i)), i;
}
function as(r, e, t, n, a) {
  return t.bind(e, r, n, a);
}
function q5(r, e) {
  var t = r.length === 1 ? Tc : Cc;
  return as(r, this, t, e.cache.create(), e.serializer);
}
function U5(r, e) {
  return as(r, this, Cc, e.cache.create(), e.serializer);
}
function G5(r, e) {
  return as(r, this, Tc, e.cache.create(), e.serializer);
}
var V5 = function() {
  return JSON.stringify(arguments);
};
function is() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
is.prototype.get = function(r) {
  return this.cache[r];
};
is.prototype.set = function(r, e) {
  this.cache[r] = e;
};
var j5 = {
  create: function() {
    return new is();
  }
}, Bi = {
  variadic: U5,
  monadic: G5
}, ie;
(function(r) {
  r[r.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", r[r.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", r[r.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", r[r.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", r[r.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", r[r.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", r[r.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", r[r.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", r[r.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", r[r.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", r[r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", r[r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", r[r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", r[r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", r[r.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", r[r.INVALID_TAG = 23] = "INVALID_TAG", r[r.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", r[r.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", r[r.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ie || (ie = {}));
var ke;
(function(r) {
  r[r.literal = 0] = "literal", r[r.argument = 1] = "argument", r[r.number = 2] = "number", r[r.date = 3] = "date", r[r.time = 4] = "time", r[r.select = 5] = "select", r[r.plural = 6] = "plural", r[r.pound = 7] = "pound", r[r.tag = 8] = "tag";
})(ke || (ke = {}));
var Sr;
(function(r) {
  r[r.number = 0] = "number", r[r.dateTime = 1] = "dateTime";
})(Sr || (Sr = {}));
function eu(r) {
  return r.type === ke.literal;
}
function W5(r) {
  return r.type === ke.argument;
}
function Mc(r) {
  return r.type === ke.number;
}
function Bc(r) {
  return r.type === ke.date;
}
function Nc(r) {
  return r.type === ke.time;
}
function Ic(r) {
  return r.type === ke.select;
}
function zc(r) {
  return r.type === ke.plural;
}
function X5(r) {
  return r.type === ke.pound;
}
function Rc(r) {
  return r.type === ke.tag;
}
function Lc(r) {
  return !!(r && typeof r == "object" && r.type === Sr.number);
}
function nl(r) {
  return !!(r && typeof r == "object" && r.type === Sr.dateTime);
}
var Oc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, $5 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Y5(r) {
  var e = {};
  return r.replace($5, function(t) {
    var n = t.length;
    switch (t[0]) {
      case "G":
        e.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = n === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = n < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var Z5 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Q5(r) {
  if (r.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = r.split(Z5).filter(function(p) {
    return p.length > 0;
  }), t = [], n = 0, a = e; n < a.length; n++) {
    var i = a[n], l = i.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = l[0], o = l.slice(1), u = 0, h = o; u < h.length; u++) {
      var m = h[u];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    t.push({ stem: s, options: o });
  }
  return t;
}
function J5(r) {
  return r.replace(/^(.*?)-/, "");
}
var tu = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Hc = /^(@+)?(\+|#+)?[rs]?$/g, K5 = /(\*)(0+)|(#+)(0+)|(0+)/g, Pc = /^(0+)$/;
function ru(r) {
  var e = {};
  return r[r.length - 1] === "r" ? e.roundingPriority = "morePrecision" : r[r.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), r.replace(Hc, function(t, n, a) {
    return typeof a != "string" ? (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length) : a === "+" ? e.minimumSignificantDigits = n.length : n[0] === "#" ? e.maximumSignificantDigits = n.length : (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length + (typeof a == "string" ? a.length : 0)), "";
  }), e;
}
function qc(r) {
  switch (r) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function e3(r) {
  var e;
  if (r[0] === "E" && r[1] === "E" ? (e = {
    notation: "engineering"
  }, r = r.slice(2)) : r[0] === "E" && (e = {
    notation: "scientific"
  }, r = r.slice(1)), e) {
    var t = r.slice(0, 2);
    if (t === "+!" ? (e.signDisplay = "always", r = r.slice(2)) : t === "+?" && (e.signDisplay = "exceptZero", r = r.slice(2)), !Pc.test(r))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = r.length;
  }
  return e;
}
function nu(r) {
  var e = {}, t = qc(r);
  return t || e;
}
function t3(r) {
  for (var e = {}, t = 0, n = r; t < n.length; t++) {
    var a = n[t];
    switch (a.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = a.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = J5(a.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = ce(ce(ce({}, e), { notation: "scientific" }), a.options.reduce(function(o, u) {
          return ce(ce({}, o), nu(u));
        }, {}));
        continue;
      case "engineering":
        e = ce(ce(ce({}, e), { notation: "engineering" }), a.options.reduce(function(o, u) {
          return ce(ce({}, o), nu(u));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(a.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (a.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        a.options[0].replace(K5, function(o, u, h, m, p, g) {
          if (u)
            e.minimumIntegerDigits = h.length;
          else {
            if (m && p)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Pc.test(a.stem)) {
      e.minimumIntegerDigits = a.stem.length;
      continue;
    }
    if (tu.test(a.stem)) {
      if (a.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      a.stem.replace(tu, function(o, u, h, m, p, g) {
        return h === "*" ? e.minimumFractionDigits = u.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : p && g ? (e.minimumFractionDigits = p.length, e.maximumFractionDigits = p.length + g.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var i = a.options[0];
      i === "w" ? e = ce(ce({}, e), { trailingZeroDisplay: "stripIfInteger" }) : i && (e = ce(ce({}, e), ru(i)));
      continue;
    }
    if (Hc.test(a.stem)) {
      e = ce(ce({}, e), ru(a.stem));
      continue;
    }
    var l = qc(a.stem);
    l && (e = ce(ce({}, e), l));
    var s = e3(a.stem);
    s && (e = ce(ce({}, e), s));
  }
  return e;
}
var Yn = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function r3(r, e) {
  for (var t = "", n = 0; n < r.length; n++) {
    var a = r.charAt(n);
    if (a === "j") {
      for (var i = 0; n + 1 < r.length && r.charAt(n + 1) === a; )
        i++, n++;
      var l = 1 + (i & 1), s = i < 2 ? 1 : 3 + (i >> 1), o = "a", u = n3(e);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        t += o;
      for (; l-- > 0; )
        t = u + t;
    } else a === "J" ? t += "H" : t += a;
  }
  return t;
}
function n3(r) {
  var e = r.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  r.hourCycles && // @ts-ignore
  r.hourCycles.length && (e = r.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var t = r.language, n;
  t !== "root" && (n = r.maximize().region);
  var a = Yn[n || ""] || Yn[t || ""] || Yn["".concat(t, "-001")] || Yn["001"];
  return a[0];
}
var Ni, a3 = new RegExp("^".concat(Oc.source, "*")), i3 = new RegExp("".concat(Oc.source, "*$"));
function le(r, e) {
  return { start: r, end: e };
}
var l3 = !!String.prototype.startsWith && "_a".startsWith("a", 1), s3 = !!String.fromCodePoint, o3 = !!Object.fromEntries, u3 = !!String.prototype.codePointAt, c3 = !!String.prototype.trimStart, h3 = !!String.prototype.trimEnd, f3 = !!Number.isSafeInteger, m3 = f3 ? Number.isSafeInteger : function(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r && Math.abs(r) <= 9007199254740991;
}, al = !0;
try {
  var d3 = Gc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  al = ((Ni = d3.exec("a")) === null || Ni === void 0 ? void 0 : Ni[0]) === "a";
} catch {
  al = !1;
}
var au = l3 ? (
  // Native
  function(e, t, n) {
    return e.startsWith(t, n);
  }
) : (
  // For IE11
  function(e, t, n) {
    return e.slice(n, n + t.length) === t;
  }
), il = s3 ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    for (var n = "", a = e.length, i = 0, l; a > i; ) {
      if (l = e[i++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      n += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return n;
  }
), iu = (
  // native
  o3 ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var t = {}, n = 0, a = e; n < a.length; n++) {
        var i = a[n], l = i[0], s = i[1];
        t[l] = s;
      }
      return t;
    }
  )
), Uc = u3 ? (
  // Native
  function(e, t) {
    return e.codePointAt(t);
  }
) : (
  // IE 11
  function(e, t) {
    var n = e.length;
    if (!(t < 0 || t >= n)) {
      var a = e.charCodeAt(t), i;
      return a < 55296 || a > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? a : (a - 55296 << 10) + (i - 56320) + 65536;
    }
  }
), p3 = c3 ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(a3, "");
  }
), g3 = h3 ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(i3, "");
  }
);
function Gc(r, e) {
  return new RegExp(r, e);
}
var ll;
if (al) {
  var lu = Gc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ll = function(e, t) {
    var n;
    lu.lastIndex = t;
    var a = lu.exec(e);
    return (n = a[1]) !== null && n !== void 0 ? n : "";
  };
} else
  ll = function(e, t) {
    for (var n = []; ; ) {
      var a = Uc(e, t);
      if (a === void 0 || Vc(a) || y3(a))
        break;
      n.push(a), t += a >= 65536 ? 2 : 1;
    }
    return il.apply(void 0, n);
  };
var b3 = (
  /** @class */
  function() {
    function r(e, t) {
      t === void 0 && (t = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
    }
    return r.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, r.prototype.parseMessage = function(e, t, n) {
      for (var a = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var l = this.parseArgument(e, n);
          if (l.err)
            return l;
          a.push(l.val);
        } else {
          if (i === 125 && e > 0)
            break;
          if (i === 35 && (t === "plural" || t === "selectordinal")) {
            var s = this.clonePosition();
            this.bump(), a.push({
              type: ke.pound,
              location: le(s, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(ie.UNMATCHED_CLOSING_TAG, le(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && sl(this.peek() || 0)) {
            var l = this.parseTag(e, t);
            if (l.err)
              return l;
            a.push(l.val);
          } else {
            var l = this.parseLiteral(e, t);
            if (l.err)
              return l;
            a.push(l.val);
          }
        }
      }
      return { val: a, err: null };
    }, r.prototype.parseTag = function(e, t) {
      var n = this.clonePosition();
      this.bump();
      var a = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ke.literal,
            value: "<".concat(a, "/>"),
            location: le(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(e + 1, t, !0);
        if (i.err)
          return i;
        var l = i.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !sl(this.char()))
            return this.error(ie.INVALID_TAG, le(s, this.clonePosition()));
          var o = this.clonePosition(), u = this.parseTagName();
          return a !== u ? this.error(ie.UNMATCHED_CLOSING_TAG, le(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ke.tag,
              value: a,
              children: l,
              location: le(n, this.clonePosition())
            },
            err: null
          } : this.error(ie.INVALID_TAG, le(s, this.clonePosition())));
        } else
          return this.error(ie.UNCLOSED_TAG, le(n, this.clonePosition()));
      } else
        return this.error(ie.INVALID_TAG, le(n, this.clonePosition()));
    }, r.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && _3(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, r.prototype.parseLiteral = function(e, t) {
      for (var n = this.clonePosition(), a = ""; ; ) {
        var i = this.tryParseQuote(t);
        if (i) {
          a += i;
          continue;
        }
        var l = this.tryParseUnquoted(e, t);
        if (l) {
          a += l;
          continue;
        }
        var s = this.tryParseLeftAngleBracket();
        if (s) {
          a += s;
          continue;
        }
        break;
      }
      var o = le(n, this.clonePosition());
      return {
        val: { type: ke.literal, value: a, location: o },
        err: null
      };
    }, r.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !v3(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, r.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var t = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            t.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          t.push(n);
        this.bump();
      }
      return il.apply(void 0, t);
    }, r.prototype.tryParseUnquoted = function(e, t) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), il(n));
    }, r.prototype.parseArgument = function(e, t) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ie.EXPECT_ARGUMENT_CLOSING_BRACE, le(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ie.EMPTY_ARGUMENT, le(n, this.clonePosition()));
      var a = this.parseIdentifierIfPossible().value;
      if (!a)
        return this.error(ie.MALFORMED_ARGUMENT, le(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ie.EXPECT_ARGUMENT_CLOSING_BRACE, le(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ke.argument,
              // value does not include the opening and closing braces.
              value: a,
              location: le(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ie.EXPECT_ARGUMENT_CLOSING_BRACE, le(n, this.clonePosition())) : this.parseArgumentOptions(e, t, a, n);
        default:
          return this.error(ie.MALFORMED_ARGUMENT, le(n, this.clonePosition()));
      }
    }, r.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), t = this.offset(), n = ll(this.message, t), a = t + n.length;
      this.bumpTo(a);
      var i = this.clonePosition(), l = le(e, i);
      return { value: n, location: l };
    }, r.prototype.parseArgumentOptions = function(e, t, n, a) {
      var i, l = this.clonePosition(), s = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (s) {
        case "":
          return this.error(ie.EXPECT_ARGUMENT_TYPE, le(l, o));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var h = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var p = g3(m.val);
            if (p.length === 0)
              return this.error(ie.EXPECT_ARGUMENT_STYLE, le(this.clonePosition(), this.clonePosition()));
            var g = le(h, this.clonePosition());
            u = { style: p, styleLocation: g };
          }
          var v = this.tryParseArgumentClose(a);
          if (v.err)
            return v;
          var w = le(a, this.clonePosition());
          if (u && au(u == null ? void 0 : u.style, "::", 0)) {
            var T = p3(u.style.slice(2));
            if (s === "number") {
              var m = this.parseNumberSkeletonFromString(T, u.styleLocation);
              return m.err ? m : {
                val: { type: ke.number, value: n, location: w, style: m.val },
                err: null
              };
            } else {
              if (T.length === 0)
                return this.error(ie.EXPECT_DATE_TIME_SKELETON, w);
              var S = T;
              this.locale && (S = r3(T, this.locale));
              var p = {
                type: Sr.dateTime,
                pattern: S,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Y5(S) : {}
              }, D = s === "date" ? ke.date : ke.time;
              return {
                val: { type: D, value: n, location: w, style: p },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? ke.number : s === "date" ? ke.date : ke.time,
              value: n,
              location: w,
              style: (i = u == null ? void 0 : u.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var _ = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ie.EXPECT_SELECT_ARGUMENT_OPTIONS, le(_, ce({}, _)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), F = 0;
          if (s !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, le(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ie.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), F = m.val;
          }
          var M = this.tryParsePluralOrSelectOptions(e, s, t, A);
          if (M.err)
            return M;
          var v = this.tryParseArgumentClose(a);
          if (v.err)
            return v;
          var B = le(a, this.clonePosition());
          return s === "select" ? {
            val: {
              type: ke.select,
              value: n,
              options: iu(M.val),
              location: B
            },
            err: null
          } : {
            val: {
              type: ke.plural,
              value: n,
              options: iu(M.val),
              offset: F,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: B
            },
            err: null
          };
        }
        default:
          return this.error(ie.INVALID_ARGUMENT_TYPE, le(l, o));
      }
    }, r.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(ie.EXPECT_ARGUMENT_CLOSING_BRACE, le(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, r.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var a = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ie.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, le(a, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(t.offset, this.offset()),
        err: null
      };
    }, r.prototype.parseNumberSkeletonFromString = function(e, t) {
      var n = [];
      try {
        n = Q5(e);
      } catch {
        return this.error(ie.INVALID_NUMBER_SKELETON, t);
      }
      return {
        val: {
          type: Sr.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? t3(n) : {}
        },
        err: null
      };
    }, r.prototype.tryParsePluralOrSelectOptions = function(e, t, n, a) {
      for (var i, l = !1, s = [], o = /* @__PURE__ */ new Set(), u = a.value, h = a.location; ; ) {
        if (u.length === 0) {
          var m = this.clonePosition();
          if (t !== "select" && this.bumpIf("=")) {
            var p = this.tryParseDecimalInteger(ie.EXPECT_PLURAL_ARGUMENT_SELECTOR, ie.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (p.err)
              return p;
            h = le(m, this.clonePosition()), u = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (o.has(u))
          return this.error(t === "select" ? ie.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ie.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
        u === "other" && (l = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(t === "select" ? ie.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ie.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, le(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, t, n);
        if (v.err)
          return v;
        var w = this.tryParseArgumentClose(g);
        if (w.err)
          return w;
        s.push([
          u,
          {
            value: v.val,
            location: le(g, this.clonePosition())
          }
        ]), o.add(u), this.bumpSpace(), i = this.parseIdentifierIfPossible(), u = i.value, h = i.location;
      }
      return s.length === 0 ? this.error(t === "select" ? ie.EXPECT_SELECT_ARGUMENT_SELECTOR : ie.EXPECT_PLURAL_ARGUMENT_SELECTOR, le(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(ie.MISSING_OTHER_CLAUSE, le(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
    }, r.prototype.tryParseDecimalInteger = function(e, t) {
      var n = 1, a = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var i = !1, l = 0; !this.isEOF(); ) {
        var s = this.char();
        if (s >= 48 && s <= 57)
          i = !0, l = l * 10 + (s - 48), this.bump();
        else
          break;
      }
      var o = le(a, this.clonePosition());
      return i ? (l *= n, m3(l) ? { val: l, err: null } : this.error(t, o)) : this.error(e, o);
    }, r.prototype.offset = function() {
      return this.position.offset;
    }, r.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, r.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, r.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var t = Uc(this.message, e);
      if (t === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return t;
    }, r.prototype.error = function(e, t) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: t
        }
      };
    }, r.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, r.prototype.bumpIf = function(e) {
      if (au(this.message, e, this.offset())) {
        for (var t = 0; t < e.length; t++)
          this.bump();
        return !0;
      }
      return !1;
    }, r.prototype.bumpUntil = function(e) {
      var t = this.offset(), n = this.message.indexOf(e, t);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, r.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var t = this.offset();
        if (t === e)
          break;
        if (t > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, r.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Vc(this.char()); )
        this.bump();
    }, r.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), t = this.offset(), n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
      return n ?? null;
    }, r;
  }()
);
function sl(r) {
  return r >= 97 && r <= 122 || r >= 65 && r <= 90;
}
function v3(r) {
  return sl(r) || r === 47;
}
function _3(r) {
  return r === 45 || r === 46 || r >= 48 && r <= 57 || r === 95 || r >= 97 && r <= 122 || r >= 65 && r <= 90 || r == 183 || r >= 192 && r <= 214 || r >= 216 && r <= 246 || r >= 248 && r <= 893 || r >= 895 && r <= 8191 || r >= 8204 && r <= 8205 || r >= 8255 && r <= 8256 || r >= 8304 && r <= 8591 || r >= 11264 && r <= 12271 || r >= 12289 && r <= 55295 || r >= 63744 && r <= 64975 || r >= 65008 && r <= 65533 || r >= 65536 && r <= 983039;
}
function Vc(r) {
  return r >= 9 && r <= 13 || r === 32 || r === 133 || r >= 8206 && r <= 8207 || r === 8232 || r === 8233;
}
function y3(r) {
  return r >= 33 && r <= 35 || r === 36 || r >= 37 && r <= 39 || r === 40 || r === 41 || r === 42 || r === 43 || r === 44 || r === 45 || r >= 46 && r <= 47 || r >= 58 && r <= 59 || r >= 60 && r <= 62 || r >= 63 && r <= 64 || r === 91 || r === 92 || r === 93 || r === 94 || r === 96 || r === 123 || r === 124 || r === 125 || r === 126 || r === 161 || r >= 162 && r <= 165 || r === 166 || r === 167 || r === 169 || r === 171 || r === 172 || r === 174 || r === 176 || r === 177 || r === 182 || r === 187 || r === 191 || r === 215 || r === 247 || r >= 8208 && r <= 8213 || r >= 8214 && r <= 8215 || r === 8216 || r === 8217 || r === 8218 || r >= 8219 && r <= 8220 || r === 8221 || r === 8222 || r === 8223 || r >= 8224 && r <= 8231 || r >= 8240 && r <= 8248 || r === 8249 || r === 8250 || r >= 8251 && r <= 8254 || r >= 8257 && r <= 8259 || r === 8260 || r === 8261 || r === 8262 || r >= 8263 && r <= 8273 || r === 8274 || r === 8275 || r >= 8277 && r <= 8286 || r >= 8592 && r <= 8596 || r >= 8597 && r <= 8601 || r >= 8602 && r <= 8603 || r >= 8604 && r <= 8607 || r === 8608 || r >= 8609 && r <= 8610 || r === 8611 || r >= 8612 && r <= 8613 || r === 8614 || r >= 8615 && r <= 8621 || r === 8622 || r >= 8623 && r <= 8653 || r >= 8654 && r <= 8655 || r >= 8656 && r <= 8657 || r === 8658 || r === 8659 || r === 8660 || r >= 8661 && r <= 8691 || r >= 8692 && r <= 8959 || r >= 8960 && r <= 8967 || r === 8968 || r === 8969 || r === 8970 || r === 8971 || r >= 8972 && r <= 8991 || r >= 8992 && r <= 8993 || r >= 8994 && r <= 9e3 || r === 9001 || r === 9002 || r >= 9003 && r <= 9083 || r === 9084 || r >= 9085 && r <= 9114 || r >= 9115 && r <= 9139 || r >= 9140 && r <= 9179 || r >= 9180 && r <= 9185 || r >= 9186 && r <= 9254 || r >= 9255 && r <= 9279 || r >= 9280 && r <= 9290 || r >= 9291 && r <= 9311 || r >= 9472 && r <= 9654 || r === 9655 || r >= 9656 && r <= 9664 || r === 9665 || r >= 9666 && r <= 9719 || r >= 9720 && r <= 9727 || r >= 9728 && r <= 9838 || r === 9839 || r >= 9840 && r <= 10087 || r === 10088 || r === 10089 || r === 10090 || r === 10091 || r === 10092 || r === 10093 || r === 10094 || r === 10095 || r === 10096 || r === 10097 || r === 10098 || r === 10099 || r === 10100 || r === 10101 || r >= 10132 && r <= 10175 || r >= 10176 && r <= 10180 || r === 10181 || r === 10182 || r >= 10183 && r <= 10213 || r === 10214 || r === 10215 || r === 10216 || r === 10217 || r === 10218 || r === 10219 || r === 10220 || r === 10221 || r === 10222 || r === 10223 || r >= 10224 && r <= 10239 || r >= 10240 && r <= 10495 || r >= 10496 && r <= 10626 || r === 10627 || r === 10628 || r === 10629 || r === 10630 || r === 10631 || r === 10632 || r === 10633 || r === 10634 || r === 10635 || r === 10636 || r === 10637 || r === 10638 || r === 10639 || r === 10640 || r === 10641 || r === 10642 || r === 10643 || r === 10644 || r === 10645 || r === 10646 || r === 10647 || r === 10648 || r >= 10649 && r <= 10711 || r === 10712 || r === 10713 || r === 10714 || r === 10715 || r >= 10716 && r <= 10747 || r === 10748 || r === 10749 || r >= 10750 && r <= 11007 || r >= 11008 && r <= 11055 || r >= 11056 && r <= 11076 || r >= 11077 && r <= 11078 || r >= 11079 && r <= 11084 || r >= 11085 && r <= 11123 || r >= 11124 && r <= 11125 || r >= 11126 && r <= 11157 || r === 11158 || r >= 11159 && r <= 11263 || r >= 11776 && r <= 11777 || r === 11778 || r === 11779 || r === 11780 || r === 11781 || r >= 11782 && r <= 11784 || r === 11785 || r === 11786 || r === 11787 || r === 11788 || r === 11789 || r >= 11790 && r <= 11798 || r === 11799 || r >= 11800 && r <= 11801 || r === 11802 || r === 11803 || r === 11804 || r === 11805 || r >= 11806 && r <= 11807 || r === 11808 || r === 11809 || r === 11810 || r === 11811 || r === 11812 || r === 11813 || r === 11814 || r === 11815 || r === 11816 || r === 11817 || r >= 11818 && r <= 11822 || r === 11823 || r >= 11824 && r <= 11833 || r >= 11834 && r <= 11835 || r >= 11836 && r <= 11839 || r === 11840 || r === 11841 || r === 11842 || r >= 11843 && r <= 11855 || r >= 11856 && r <= 11857 || r === 11858 || r >= 11859 && r <= 11903 || r >= 12289 && r <= 12291 || r === 12296 || r === 12297 || r === 12298 || r === 12299 || r === 12300 || r === 12301 || r === 12302 || r === 12303 || r === 12304 || r === 12305 || r >= 12306 && r <= 12307 || r === 12308 || r === 12309 || r === 12310 || r === 12311 || r === 12312 || r === 12313 || r === 12314 || r === 12315 || r === 12316 || r === 12317 || r >= 12318 && r <= 12319 || r === 12320 || r === 12336 || r === 64830 || r === 64831 || r >= 65093 && r <= 65094;
}
function ol(r) {
  r.forEach(function(e) {
    if (delete e.location, Ic(e) || zc(e))
      for (var t in e.options)
        delete e.options[t].location, ol(e.options[t].value);
    else Mc(e) && Lc(e.style) || (Bc(e) || Nc(e)) && nl(e.style) ? delete e.style.location : Rc(e) && ol(e.children);
  });
}
function w3(r, e) {
  e === void 0 && (e = {}), e = ce({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var t = new b3(r, e).parse();
  if (t.err) {
    var n = SyntaxError(ie[t.err.kind]);
    throw n.location = t.err.location, n.originalMessage = t.err.message, n;
  }
  return e != null && e.captureLocation || ol(t.val), t.val;
}
var Fr;
(function(r) {
  r.MISSING_VALUE = "MISSING_VALUE", r.INVALID_VALUE = "INVALID_VALUE", r.MISSING_INTL_API = "MISSING_INTL_API";
})(Fr || (Fr = {}));
var Ga = (
  /** @class */
  function(r) {
    Ua(e, r);
    function e(t, n, a) {
      var i = r.call(this, t) || this;
      return i.code = n, i.originalMessage = a, i;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), su = (
  /** @class */
  function(r) {
    Ua(e, r);
    function e(t, n, a, i) {
      return r.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(a).join('", "'), '"'), Fr.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ga)
), k3 = (
  /** @class */
  function(r) {
    Ua(e, r);
    function e(t, n, a) {
      return r.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), Fr.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ga)
), D3 = (
  /** @class */
  function(r) {
    Ua(e, r);
    function e(t, n) {
      return r.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), Fr.MISSING_VALUE, n) || this;
    }
    return e;
  }(Ga)
), rt;
(function(r) {
  r[r.literal = 0] = "literal", r[r.object = 1] = "object";
})(rt || (rt = {}));
function x3(r) {
  return r.length < 2 ? r : r.reduce(function(e, t) {
    var n = e[e.length - 1];
    return !n || n.type !== rt.literal || t.type !== rt.literal ? e.push(t) : n.value += t.value, e;
  }, []);
}
function A3(r) {
  return typeof r == "function";
}
function ra(r, e, t, n, a, i, l) {
  if (r.length === 1 && eu(r[0]))
    return [
      {
        type: rt.literal,
        value: r[0].value
      }
    ];
  for (var s = [], o = 0, u = r; o < u.length; o++) {
    var h = u[o];
    if (eu(h)) {
      s.push({
        type: rt.literal,
        value: h.value
      });
      continue;
    }
    if (X5(h)) {
      typeof i == "number" && s.push({
        type: rt.literal,
        value: t.getNumberFormat(e).format(i)
      });
      continue;
    }
    var m = h.value;
    if (!(a && m in a))
      throw new D3(m, l);
    var p = a[m];
    if (W5(h)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), s.push({
        type: typeof p == "string" ? rt.literal : rt.object,
        value: p
      });
      continue;
    }
    if (Bc(h)) {
      var g = typeof h.style == "string" ? n.date[h.style] : nl(h.style) ? h.style.parsedOptions : void 0;
      s.push({
        type: rt.literal,
        value: t.getDateTimeFormat(e, g).format(p)
      });
      continue;
    }
    if (Nc(h)) {
      var g = typeof h.style == "string" ? n.time[h.style] : nl(h.style) ? h.style.parsedOptions : n.time.medium;
      s.push({
        type: rt.literal,
        value: t.getDateTimeFormat(e, g).format(p)
      });
      continue;
    }
    if (Mc(h)) {
      var g = typeof h.style == "string" ? n.number[h.style] : Lc(h.style) ? h.style.parsedOptions : void 0;
      g && g.scale && (p = p * (g.scale || 1)), s.push({
        type: rt.literal,
        value: t.getNumberFormat(e, g).format(p)
      });
      continue;
    }
    if (Rc(h)) {
      var v = h.children, w = h.value, T = a[w];
      if (!A3(T))
        throw new k3(w, "function", l);
      var S = ra(v, e, t, n, a, i), D = T(S.map(function(F) {
        return F.value;
      }));
      Array.isArray(D) || (D = [D]), s.push.apply(s, D.map(function(F) {
        return {
          type: typeof F == "string" ? rt.literal : rt.object,
          value: F
        };
      }));
    }
    if (Ic(h)) {
      var _ = h.options[p] || h.options.other;
      if (!_)
        throw new su(h.value, p, Object.keys(h.options), l);
      s.push.apply(s, ra(_.value, e, t, n, a));
      continue;
    }
    if (zc(h)) {
      var _ = h.options["=".concat(p)];
      if (!_) {
        if (!Intl.PluralRules)
          throw new Ga(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Fr.MISSING_INTL_API, l);
        var A = t.getPluralRules(e, { type: h.pluralType }).select(p - (h.offset || 0));
        _ = h.options[A] || h.options.other;
      }
      if (!_)
        throw new su(h.value, p, Object.keys(h.options), l);
      s.push.apply(s, ra(_.value, e, t, n, a, p - (h.offset || 0)));
      continue;
    }
  }
  return x3(s);
}
function E3(r, e) {
  return e ? ce(ce(ce({}, r || {}), e || {}), Object.keys(r).reduce(function(t, n) {
    return t[n] = ce(ce({}, r[n]), e[n] || {}), t;
  }, {})) : r;
}
function S3(r, e) {
  return e ? Object.keys(r).reduce(function(t, n) {
    return t[n] = E3(r[n], e[n]), t;
  }, ce({}, r)) : r;
}
function Ii(r) {
  return {
    create: function() {
      return {
        get: function(e) {
          return r[e];
        },
        set: function(e, t) {
          r[e] = t;
        }
      };
    }
  };
}
function F3(r) {
  return r === void 0 && (r = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Mi(function() {
      for (var e, t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return new ((e = Intl.NumberFormat).bind.apply(e, Ci([void 0], t, !1)))();
    }, {
      cache: Ii(r.number),
      strategy: Bi.variadic
    }),
    getDateTimeFormat: Mi(function() {
      for (var e, t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Ci([void 0], t, !1)))();
    }, {
      cache: Ii(r.dateTime),
      strategy: Bi.variadic
    }),
    getPluralRules: Mi(function() {
      for (var e, t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return new ((e = Intl.PluralRules).bind.apply(e, Ci([void 0], t, !1)))();
    }, {
      cache: Ii(r.pluralRules),
      strategy: Bi.variadic
    })
  };
}
var T3 = (
  /** @class */
  function() {
    function r(e, t, n, a) {
      t === void 0 && (t = r.defaultLocale);
      var i = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var u = i.formatToParts(o);
        if (u.length === 1)
          return u[0].value;
        var h = u.reduce(function(m, p) {
          return !m.length || p.type !== rt.literal || typeof m[m.length - 1] != "string" ? m.push(p.value) : m[m.length - 1] += p.value, m;
        }, []);
        return h.length <= 1 ? h[0] || "" : h;
      }, this.formatToParts = function(o) {
        return ra(i.ast, i.locales, i.formatters, i.formats, o, void 0, i.message);
      }, this.resolvedOptions = function() {
        var o;
        return {
          locale: ((o = i.resolvedLocale) === null || o === void 0 ? void 0 : o.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
        };
      }, this.getAst = function() {
        return i.ast;
      }, this.locales = t, this.resolvedLocale = r.resolveLocale(t), typeof e == "string") {
        if (this.message = e, !r.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = a || {};
        l.formatters;
        var s = H5(l, ["formatters"]);
        this.ast = r.__parse(e, ce(ce({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = S3(r.formats, n), this.formatters = a && a.formatters || F3(this.formatterCache);
    }
    return Object.defineProperty(r, "defaultLocale", {
      get: function() {
        return r.memoizedDefaultLocale || (r.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), r.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), r.memoizedDefaultLocale = null, r.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var t = Intl.NumberFormat.supportedLocalesOf(e);
        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, r.__parse = w3, r.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, r;
  }()
);
function C3(r, e) {
  if (e == null)
    return;
  if (e in r)
    return r[e];
  const t = e.split(".");
  let n = r;
  for (let a = 0; a < t.length; a++)
    if (typeof n == "object") {
      if (a > 0) {
        const i = t.slice(a, t.length).join(".");
        if (i in n) {
          n = n[i];
          break;
        }
      }
      n = n[t[a]];
    } else
      n = void 0;
  return n;
}
const k0 = {}, M3 = (r, e, t) => t && (e in k0 || (k0[e] = {}), r in k0[e] || (k0[e][r] = t), t), jc = (r, e) => {
  if (e == null)
    return;
  if (e in k0 && r in k0[e])
    return k0[e][r];
  const t = Va(e);
  for (let n = 0; n < t.length; n++) {
    const a = t[n], i = N3(a, r);
    if (i)
      return M3(r, e, i);
  }
};
let ls;
const kn = wn({});
function B3(r) {
  return ls[r] || null;
}
function Wc(r) {
  return r in ls;
}
function N3(r, e) {
  if (!Wc(r))
    return null;
  const t = B3(r);
  return C3(t, e);
}
function I3(r) {
  if (r == null)
    return;
  const e = Va(r);
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (Wc(n))
      return n;
  }
}
function z3(r, ...e) {
  delete k0[r], kn.update((t) => (t[r] = O5.all([t[r] || {}, ...e]), t));
}
Lr(
  [kn],
  ([r]) => Object.keys(r)
);
kn.subscribe((r) => ls = r);
const na = {};
function R3(r, e) {
  na[r].delete(e), na[r].size === 0 && delete na[r];
}
function Xc(r) {
  return na[r];
}
function L3(r) {
  return Va(r).map((e) => {
    const t = Xc(e);
    return [e, t ? [...t] : []];
  }).filter(([, e]) => e.length > 0);
}
function ul(r) {
  return r == null ? !1 : Va(r).some(
    (e) => {
      var t;
      return (t = Xc(e)) == null ? void 0 : t.size;
    }
  );
}
function O3(r, e) {
  return Promise.all(
    e.map((n) => (R3(r, n), n().then((a) => a.default || a)))
  ).then((n) => z3(r, ...n));
}
const Wr = {};
function $c(r) {
  if (!ul(r))
    return r in Wr ? Wr[r] : Promise.resolve();
  const e = L3(r);
  return Wr[r] = Promise.all(
    e.map(
      ([t, n]) => O3(t, n)
    )
  ).then(() => {
    if (ul(r))
      return $c(r);
    delete Wr[r];
  }), Wr[r];
}
const H3 = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, P3 = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: H3,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, q3 = P3;
function Tr() {
  return q3;
}
const zi = wn(!1);
var U3 = Object.defineProperty, G3 = Object.defineProperties, V3 = Object.getOwnPropertyDescriptors, ou = Object.getOwnPropertySymbols, j3 = Object.prototype.hasOwnProperty, W3 = Object.prototype.propertyIsEnumerable, uu = (r, e, t) => e in r ? U3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, X3 = (r, e) => {
  for (var t in e || (e = {}))
    j3.call(e, t) && uu(r, t, e[t]);
  if (ou)
    for (var t of ou(e))
      W3.call(e, t) && uu(r, t, e[t]);
  return r;
}, $3 = (r, e) => G3(r, V3(e));
let cl;
const ka = wn(null);
function cu(r) {
  return r.split("-").map((e, t, n) => n.slice(0, t + 1).join("-")).reverse();
}
function Va(r, e = Tr().fallbackLocale) {
  const t = cu(r);
  return e ? [.../* @__PURE__ */ new Set([...t, ...cu(e)])] : t;
}
function ir() {
  return cl ?? void 0;
}
ka.subscribe((r) => {
  cl = r ?? void 0, typeof window < "u" && r != null && document.documentElement.setAttribute("lang", r);
});
const Y3 = (r) => {
  if (r && I3(r) && ul(r)) {
    const { loadingDelay: e } = Tr();
    let t;
    return typeof window < "u" && ir() != null && e ? t = window.setTimeout(
      () => zi.set(!0),
      e
    ) : zi.set(!0), $c(r).then(() => {
      ka.set(r);
    }).finally(() => {
      clearTimeout(t), zi.set(!1);
    });
  }
  return ka.set(r);
}, Dn = $3(X3({}, ka), {
  set: Y3
}), ja = (r) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const a = JSON.stringify(n);
    return a in e ? e[a] : e[a] = r(n);
  };
};
var Z3 = Object.defineProperty, Da = Object.getOwnPropertySymbols, Yc = Object.prototype.hasOwnProperty, Zc = Object.prototype.propertyIsEnumerable, hu = (r, e, t) => e in r ? Z3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ss = (r, e) => {
  for (var t in e || (e = {}))
    Yc.call(e, t) && hu(r, t, e[t]);
  if (Da)
    for (var t of Da(e))
      Zc.call(e, t) && hu(r, t, e[t]);
  return r;
}, Or = (r, e) => {
  var t = {};
  for (var n in r)
    Yc.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Da)
    for (var n of Da(r))
      e.indexOf(n) < 0 && Zc.call(r, n) && (t[n] = r[n]);
  return t;
};
const gn = (r, e) => {
  const { formats: t } = Tr();
  if (r in t && e in t[r])
    return t[r][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${r} format.`);
}, Q3 = ja(
  (r) => {
    var e = r, { locale: t, format: n } = e, a = Or(e, ["locale", "format"]);
    if (t == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (a = gn("number", n)), new Intl.NumberFormat(t, a);
  }
), J3 = ja(
  (r) => {
    var e = r, { locale: t, format: n } = e, a = Or(e, ["locale", "format"]);
    if (t == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? a = gn("date", n) : Object.keys(a).length === 0 && (a = gn("date", "short")), new Intl.DateTimeFormat(t, a);
  }
), K3 = ja(
  (r) => {
    var e = r, { locale: t, format: n } = e, a = Or(e, ["locale", "format"]);
    if (t == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? a = gn("time", n) : Object.keys(a).length === 0 && (a = gn("time", "short")), new Intl.DateTimeFormat(t, a);
  }
), e7 = (r = {}) => {
  var e = r, {
    locale: t = ir()
  } = e, n = Or(e, [
    "locale"
  ]);
  return Q3(ss({ locale: t }, n));
}, t7 = (r = {}) => {
  var e = r, {
    locale: t = ir()
  } = e, n = Or(e, [
    "locale"
  ]);
  return J3(ss({ locale: t }, n));
}, r7 = (r = {}) => {
  var e = r, {
    locale: t = ir()
  } = e, n = Or(e, [
    "locale"
  ]);
  return K3(ss({ locale: t }, n));
}, n7 = ja(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (r, e = ir()) => new T3(r, e, Tr().formats, {
    ignoreTag: Tr().ignoreTag
  })
), a7 = (r, e = {}) => {
  var t, n, a, i;
  let l = e;
  typeof r == "object" && (l = r, r = l.id);
  const {
    values: s,
    locale: o = ir(),
    default: u
  } = l;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let h = jc(r, o);
  if (!h)
    h = (i = (a = (n = (t = Tr()).handleMissingMessage) == null ? void 0 : n.call(t, { locale: o, id: r, defaultValue: u })) != null ? a : u) != null ? i : r;
  else if (typeof h != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${r}" must be of type "string", found: "${typeof h}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), h;
  if (!s)
    return h;
  let m = h;
  try {
    m = n7(h, o).format(s);
  } catch (p) {
    p instanceof Error && console.warn(
      `[svelte-i18n] Message "${r}" has syntax error:`,
      p.message
    );
  }
  return m;
}, i7 = (r, e) => r7(e).format(r), l7 = (r, e) => t7(e).format(r), s7 = (r, e) => e7(e).format(r), o7 = (r, e = ir()) => jc(r, e);
Lr([Dn, kn], () => a7);
Lr([Dn], () => i7);
Lr([Dn], () => l7);
Lr([Dn], () => s7);
Lr([Dn, kn], () => o7);
const {
  SvelteComponent: u7,
  append_hydration: ct,
  attr: R0,
  children: L0,
  claim_element: O0,
  claim_space: hl,
  claim_text: vr,
  detach: o0,
  element: H0,
  init: c7,
  insert_hydration: Qc,
  noop: fu,
  safe_not_equal: h7,
  set_data: xa,
  set_style: Ri,
  space: fl,
  text: _r,
  toggle_class: mu
} = window.__gradio__svelte__internal, { onMount: f7, createEventDispatcher: m7, onDestroy: d7 } = window.__gradio__svelte__internal;
function du(r) {
  let e, t, n, a, i = en(
    /*file_to_display*/
    r[2]
  ) + "", l, s, o, u, h = (
    /*file_to_display*/
    r[2].orig_name + ""
  ), m;
  return {
    c() {
      e = H0("div"), t = H0("span"), n = H0("div"), a = H0("progress"), l = _r(i), o = fl(), u = H0("span"), m = _r(h), this.h();
    },
    l(p) {
      e = O0(p, "DIV", { class: !0 });
      var g = L0(e);
      t = O0(g, "SPAN", {});
      var v = L0(t);
      n = O0(v, "DIV", { class: !0 });
      var w = L0(n);
      a = O0(w, "PROGRESS", { style: !0, max: !0, class: !0 });
      var T = L0(a);
      l = vr(T, i), T.forEach(o0), w.forEach(o0), v.forEach(o0), o = hl(g), u = O0(g, "SPAN", { class: !0 });
      var S = L0(u);
      m = vr(S, h), S.forEach(o0), g.forEach(o0), this.h();
    },
    h() {
      Ri(a, "visibility", "hidden"), Ri(a, "height", "0"), Ri(a, "width", "0"), a.value = s = en(
        /*file_to_display*/
        r[2]
      ), R0(a, "max", "100"), R0(a, "class", "svelte-cr2edf"), R0(n, "class", "progress-bar svelte-cr2edf"), R0(u, "class", "file-name svelte-cr2edf"), R0(e, "class", "file svelte-cr2edf");
    },
    m(p, g) {
      Qc(p, e, g), ct(e, t), ct(t, n), ct(n, a), ct(a, l), ct(e, o), ct(e, u), ct(u, m);
    },
    p(p, g) {
      g & /*file_to_display*/
      4 && i !== (i = en(
        /*file_to_display*/
        p[2]
      ) + "") && xa(l, i), g & /*file_to_display*/
      4 && s !== (s = en(
        /*file_to_display*/
        p[2]
      )) && (a.value = s), g & /*file_to_display*/
      4 && h !== (h = /*file_to_display*/
      p[2].orig_name + "") && xa(m, h);
    },
    d(p) {
      p && o0(e);
    }
  };
}
function p7(r) {
  let e, t, n, a = (
    /*files_with_progress*/
    r[0].length + ""
  ), i, l, s = (
    /*files_with_progress*/
    r[0].length > 1 ? "files" : "file"
  ), o, u, h, m = (
    /*file_to_display*/
    r[2] && du(r)
  );
  return {
    c() {
      e = H0("div"), t = H0("span"), n = _r("Uploading "), i = _r(a), l = fl(), o = _r(s), u = _r("..."), h = fl(), m && m.c(), this.h();
    },
    l(p) {
      e = O0(p, "DIV", { class: !0 });
      var g = L0(e);
      t = O0(g, "SPAN", { class: !0 });
      var v = L0(t);
      n = vr(v, "Uploading "), i = vr(v, a), l = hl(v), o = vr(v, s), u = vr(v, "..."), v.forEach(o0), h = hl(g), m && m.l(g), g.forEach(o0), this.h();
    },
    h() {
      R0(t, "class", "uploading svelte-cr2edf"), R0(e, "class", "wrap svelte-cr2edf"), mu(
        e,
        "progress",
        /*progress*/
        r[1]
      );
    },
    m(p, g) {
      Qc(p, e, g), ct(e, t), ct(t, n), ct(t, i), ct(t, l), ct(t, o), ct(t, u), ct(e, h), m && m.m(e, null);
    },
    p(p, [g]) {
      g & /*files_with_progress*/
      1 && a !== (a = /*files_with_progress*/
      p[0].length + "") && xa(i, a), g & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      p[0].length > 1 ? "files" : "file") && xa(o, s), /*file_to_display*/
      p[2] ? m ? m.p(p, g) : (m = du(p), m.c(), m.m(e, null)) : m && (m.d(1), m = null), g & /*progress*/
      2 && mu(
        e,
        "progress",
        /*progress*/
        p[1]
      );
    },
    i: fu,
    o: fu,
    d(p) {
      p && o0(e), m && m.d();
    }
  };
}
function en(r) {
  return r.progress * 100 / (r.size || 0) || 0;
}
function g7(r) {
  let e = 0;
  return r.forEach((t) => {
    e += en(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / r.length).toFixed(2) + "%"), e / r.length;
}
function b7(r, e, t) {
  let { upload_id: n } = e, { root: a } = e, { files: i } = e, { stream_handler: l } = e, s, o = !1, u, h, m = i.map((v) => Object.assign(Object.assign({}, v), { progress: 0 }));
  const p = m7();
  function g(v, w) {
    t(0, m = m.map((T) => (T.orig_name === v && (T.progress += w), T)));
  }
  return f7(async () => {
    if (s = await l(new URL(`${a}/gradio_api/upload_progress?upload_id=${n}`)), s == null)
      throw new Error("Event source is not defined");
    s.onmessage = async function(v) {
      const w = JSON.parse(v.data);
      o || t(1, o = !0), w.msg === "done" ? (s == null || s.close(), p("done")) : (t(7, u = w), g(w.orig_name, w.chunk_size));
    };
  }), d7(() => {
    (s != null || s != null) && s.close();
  }), r.$$set = (v) => {
    "upload_id" in v && t(3, n = v.upload_id), "root" in v && t(4, a = v.root), "files" in v && t(5, i = v.files), "stream_handler" in v && t(6, l = v.stream_handler);
  }, r.$$.update = () => {
    r.$$.dirty & /*files_with_progress*/
    1 && g7(m), r.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, h = u || m[0]);
  }, [
    m,
    o,
    h,
    n,
    a,
    i,
    l,
    u
  ];
}
class v7 extends u7 {
  constructor(e) {
    super(), c7(this, e, b7, p7, h7, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: _7,
  append_hydration: pu,
  attr: $e,
  binding_callbacks: y7,
  bubble: B0,
  check_outros: Jc,
  children: Kc,
  claim_component: w7,
  claim_element: ml,
  claim_space: k7,
  create_component: D7,
  create_slot: eh,
  destroy_component: x7,
  detach: Cr,
  element: dl,
  empty: Aa,
  get_all_dirty_from_scope: th,
  get_slot_changes: rh,
  group_outros: nh,
  init: A7,
  insert_hydration: Wa,
  listen: dt,
  mount_component: E7,
  prevent_default: N0,
  run_all: S7,
  safe_not_equal: F7,
  set_style: Ea,
  space: T7,
  stop_propagation: I0,
  toggle_class: Be,
  transition_in: A0,
  transition_out: Q0,
  update_slot_base: ah
} = window.__gradio__svelte__internal, { createEventDispatcher: C7, tick: M7, getContext: Bp } = window.__gradio__svelte__internal;
function B7(r) {
  let e, t, n, a, i, l, s, o, u, h, m;
  const p = (
    /*#slots*/
    r[28].default
  ), g = eh(
    p,
    r,
    /*$$scope*/
    r[27],
    null
  );
  return {
    c() {
      e = dl("button"), g && g.c(), t = T7(), n = dl("input"), this.h();
    },
    l(v) {
      e = ml(v, "BUTTON", { tabindex: !0, class: !0 });
      var w = Kc(e);
      g && g.l(w), t = k7(w), n = ml(w, "INPUT", {
        "aria-label": !0,
        "data-testid": !0,
        type: !0,
        accept: !0,
        webkitdirectory: !0,
        mozdirectory: !0,
        class: !0
      }), w.forEach(Cr), this.h();
    },
    h() {
      $e(n, "aria-label", "file upload"), $e(n, "data-testid", "file-upload"), $e(n, "type", "file"), $e(n, "accept", a = /*accept_file_types*/
      r[17] || void 0), n.multiple = i = /*file_count*/
      r[6] === "multiple" || void 0, $e(n, "webkitdirectory", l = /*file_count*/
      r[6] === "directory" || void 0), $e(n, "mozdirectory", s = /*file_count*/
      r[6] === "directory" || void 0), $e(n, "class", "svelte-160acj8"), $e(e, "tabindex", o = /*hidden*/
      r[9] ? -1 : 0), $e(e, "class", "svelte-160acj8"), Be(
        e,
        "hidden",
        /*hidden*/
        r[9]
      ), Be(
        e,
        "center",
        /*center*/
        r[4]
      ), Be(
        e,
        "boundedheight",
        /*boundedheight*/
        r[3]
      ), Be(
        e,
        "flex",
        /*flex*/
        r[5]
      ), Be(
        e,
        "disable_click",
        /*disable_click*/
        r[7]
      ), Be(
        e,
        "icon-mode",
        /*icon_upload*/
        r[12]
      ), Ea(
        e,
        "height",
        /*icon_upload*/
        r[12] ? "" : "100%"
      );
    },
    m(v, w) {
      Wa(v, e, w), g && g.m(e, null), pu(e, t), pu(e, n), r[36](n), u = !0, h || (m = [
        dt(
          n,
          "change",
          /*load_files_from_upload*/
          r[19]
        ),
        dt(e, "drag", I0(N0(
          /*drag_handler*/
          r[29]
        ))),
        dt(e, "dragstart", I0(N0(
          /*dragstart_handler*/
          r[30]
        ))),
        dt(e, "dragend", I0(N0(
          /*dragend_handler*/
          r[31]
        ))),
        dt(e, "dragover", I0(N0(
          /*dragover_handler*/
          r[32]
        ))),
        dt(e, "dragenter", I0(N0(
          /*dragenter_handler*/
          r[33]
        ))),
        dt(e, "dragleave", I0(N0(
          /*dragleave_handler*/
          r[34]
        ))),
        dt(e, "drop", I0(N0(
          /*drop_handler*/
          r[35]
        ))),
        dt(
          e,
          "click",
          /*open_file_upload*/
          r[14]
        ),
        dt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          r[20]
        ),
        dt(
          e,
          "dragenter",
          /*updateDragging*/
          r[18]
        ),
        dt(
          e,
          "dragleave",
          /*updateDragging*/
          r[18]
        )
      ], h = !0);
    },
    p(v, w) {
      g && g.p && (!u || w[0] & /*$$scope*/
      134217728) && ah(
        g,
        p,
        v,
        /*$$scope*/
        v[27],
        u ? rh(
          p,
          /*$$scope*/
          v[27],
          w,
          null
        ) : th(
          /*$$scope*/
          v[27]
        ),
        null
      ), (!u || w[0] & /*accept_file_types*/
      131072 && a !== (a = /*accept_file_types*/
      v[17] || void 0)) && $e(n, "accept", a), (!u || w[0] & /*file_count*/
      64 && i !== (i = /*file_count*/
      v[6] === "multiple" || void 0)) && (n.multiple = i), (!u || w[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      v[6] === "directory" || void 0)) && $e(n, "webkitdirectory", l), (!u || w[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      v[6] === "directory" || void 0)) && $e(n, "mozdirectory", s), (!u || w[0] & /*hidden*/
      512 && o !== (o = /*hidden*/
      v[9] ? -1 : 0)) && $e(e, "tabindex", o), (!u || w[0] & /*hidden*/
      512) && Be(
        e,
        "hidden",
        /*hidden*/
        v[9]
      ), (!u || w[0] & /*center*/
      16) && Be(
        e,
        "center",
        /*center*/
        v[4]
      ), (!u || w[0] & /*boundedheight*/
      8) && Be(
        e,
        "boundedheight",
        /*boundedheight*/
        v[3]
      ), (!u || w[0] & /*flex*/
      32) && Be(
        e,
        "flex",
        /*flex*/
        v[5]
      ), (!u || w[0] & /*disable_click*/
      128) && Be(
        e,
        "disable_click",
        /*disable_click*/
        v[7]
      ), (!u || w[0] & /*icon_upload*/
      4096) && Be(
        e,
        "icon-mode",
        /*icon_upload*/
        v[12]
      ), w[0] & /*icon_upload*/
      4096 && Ea(
        e,
        "height",
        /*icon_upload*/
        v[12] ? "" : "100%"
      );
    },
    i(v) {
      u || (A0(g, v), u = !0);
    },
    o(v) {
      Q0(g, v), u = !1;
    },
    d(v) {
      v && Cr(e), g && g.d(v), r[36](null), h = !1, S7(m);
    }
  };
}
function N7(r) {
  let e, t, n = !/*hidden*/
  r[9] && gu(r);
  return {
    c() {
      n && n.c(), e = Aa();
    },
    l(a) {
      n && n.l(a), e = Aa();
    },
    m(a, i) {
      n && n.m(a, i), Wa(a, e, i), t = !0;
    },
    p(a, i) {
      /*hidden*/
      a[9] ? n && (nh(), Q0(n, 1, 1, () => {
        n = null;
      }), Jc()) : n ? (n.p(a, i), i[0] & /*hidden*/
      512 && A0(n, 1)) : (n = gu(a), n.c(), A0(n, 1), n.m(e.parentNode, e));
    },
    i(a) {
      t || (A0(n), t = !0);
    },
    o(a) {
      Q0(n), t = !1;
    },
    d(a) {
      a && Cr(e), n && n.d(a);
    }
  };
}
function I7(r) {
  let e, t, n, a, i;
  const l = (
    /*#slots*/
    r[28].default
  ), s = eh(
    l,
    r,
    /*$$scope*/
    r[27],
    null
  );
  return {
    c() {
      e = dl("button"), s && s.c(), this.h();
    },
    l(o) {
      e = ml(o, "BUTTON", { tabindex: !0, class: !0 });
      var u = Kc(e);
      s && s.l(u), u.forEach(Cr), this.h();
    },
    h() {
      $e(e, "tabindex", t = /*hidden*/
      r[9] ? -1 : 0), $e(e, "class", "svelte-160acj8"), Be(
        e,
        "hidden",
        /*hidden*/
        r[9]
      ), Be(
        e,
        "center",
        /*center*/
        r[4]
      ), Be(
        e,
        "boundedheight",
        /*boundedheight*/
        r[3]
      ), Be(
        e,
        "flex",
        /*flex*/
        r[5]
      ), Be(
        e,
        "icon-mode",
        /*icon_upload*/
        r[12]
      ), Ea(
        e,
        "height",
        /*icon_upload*/
        r[12] ? "" : "100%"
      );
    },
    m(o, u) {
      Wa(o, e, u), s && s.m(e, null), n = !0, a || (i = dt(
        e,
        "click",
        /*paste_clipboard*/
        r[13]
      ), a = !0);
    },
    p(o, u) {
      s && s.p && (!n || u[0] & /*$$scope*/
      134217728) && ah(
        s,
        l,
        o,
        /*$$scope*/
        o[27],
        n ? rh(
          l,
          /*$$scope*/
          o[27],
          u,
          null
        ) : th(
          /*$$scope*/
          o[27]
        ),
        null
      ), (!n || u[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      o[9] ? -1 : 0)) && $e(e, "tabindex", t), (!n || u[0] & /*hidden*/
      512) && Be(
        e,
        "hidden",
        /*hidden*/
        o[9]
      ), (!n || u[0] & /*center*/
      16) && Be(
        e,
        "center",
        /*center*/
        o[4]
      ), (!n || u[0] & /*boundedheight*/
      8) && Be(
        e,
        "boundedheight",
        /*boundedheight*/
        o[3]
      ), (!n || u[0] & /*flex*/
      32) && Be(
        e,
        "flex",
        /*flex*/
        o[5]
      ), (!n || u[0] & /*icon_upload*/
      4096) && Be(
        e,
        "icon-mode",
        /*icon_upload*/
        o[12]
      ), u[0] & /*icon_upload*/
      4096 && Ea(
        e,
        "height",
        /*icon_upload*/
        o[12] ? "" : "100%"
      );
    },
    i(o) {
      n || (A0(s, o), n = !0);
    },
    o(o) {
      Q0(s, o), n = !1;
    },
    d(o) {
      o && Cr(e), s && s.d(o), a = !1, i();
    }
  };
}
function gu(r) {
  let e, t;
  return e = new v7({
    props: {
      root: (
        /*root*/
        r[8]
      ),
      upload_id: (
        /*upload_id*/
        r[15]
      ),
      files: (
        /*file_data*/
        r[16]
      ),
      stream_handler: (
        /*stream_handler*/
        r[11]
      )
    }
  }), {
    c() {
      D7(e.$$.fragment);
    },
    l(n) {
      w7(e.$$.fragment, n);
    },
    m(n, a) {
      E7(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*root*/
      256 && (i.root = /*root*/
      n[8]), a[0] & /*upload_id*/
      32768 && (i.upload_id = /*upload_id*/
      n[15]), a[0] & /*file_data*/
      65536 && (i.files = /*file_data*/
      n[16]), a[0] & /*stream_handler*/
      2048 && (i.stream_handler = /*stream_handler*/
      n[11]), e.$set(i);
    },
    i(n) {
      t || (A0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      x7(e, n);
    }
  };
}
function z7(r) {
  let e, t, n, a;
  const i = [I7, N7, B7], l = [];
  function s(o, u) {
    return (
      /*filetype*/
      o[0] === "clipboard" ? 0 : (
        /*uploading*/
        o[1] && /*show_progress*/
        o[10] ? 1 : 2
      )
    );
  }
  return e = s(r), t = l[e] = i[e](r), {
    c() {
      t.c(), n = Aa();
    },
    l(o) {
      t.l(o), n = Aa();
    },
    m(o, u) {
      l[e].m(o, u), Wa(o, n, u), a = !0;
    },
    p(o, u) {
      let h = e;
      e = s(o), e === h ? l[e].p(o, u) : (nh(), Q0(l[h], 1, 1, () => {
        l[h] = null;
      }), Jc(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), A0(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      a || (A0(t), a = !0);
    },
    o(o) {
      Q0(t), a = !1;
    },
    d(o) {
      o && Cr(n), l[e].d(o);
    }
  };
}
function R7(r, e, t) {
  if (!r || r === "*" || r === "file/*" || Array.isArray(r) && r.some((a) => a === "*" || a === "file/*"))
    return !0;
  let n;
  if (typeof r == "string")
    n = r.split(",").map((a) => a.trim());
  else if (Array.isArray(r))
    n = r;
  else
    return !1;
  return n.includes(e) || n.some((a) => {
    const [i] = a.split("/").map((l) => l.trim());
    return a.endsWith("/*") && t.startsWith(i + "/");
  });
}
function L7(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e, { filetype: l = null } = e, { dragging: s = !1 } = e, { boundedheight: o = !0 } = e, { center: u = !0 } = e, { flex: h = !0 } = e, { file_count: m = "single" } = e, { disable_click: p = !1 } = e, { root: g } = e, { hidden: v = !1 } = e, { format: w = "file" } = e, { uploading: T = !1 } = e, { hidden_upload: S = null } = e, { show_progress: D = !0 } = e, { max_file_size: _ = null } = e, { upload: A } = e, { stream_handler: F } = e, { icon_upload: M = !1 } = e, B, U, I, z = null;
  const L = () => {
    if (typeof navigator < "u") {
      const R = navigator.userAgent.toLowerCase();
      return R.indexOf("iphone") > -1 || R.indexOf("ipad") > -1;
    }
    return !1;
  }, J = C7(), Le = ["image", "video", "audio", "text", "file"], se = (R) => n && R.startsWith(".") ? (z = !0, R) : n && R.includes("file/*") ? "*" : R.startsWith(".") || R.endsWith("/*") ? R : Le.includes(R) ? R + "/*" : "." + R;
  function xe() {
    t(21, s = !s);
  }
  function Ae() {
    navigator.clipboard.read().then(async (R) => {
      for (let ne = 0; ne < R.length; ne++) {
        const ge = R[ne].types.find((ve) => ve.startsWith("image/"));
        if (ge) {
          R[ne].getType(ge).then(async (ve) => {
            const je = new File([ve], `clipboard.${ge.replace("image/", "")}`);
            await ye([je]);
          });
          break;
        }
      }
    });
  }
  function Ve() {
    p || S && (t(2, S.value = "", S), S.click());
  }
  async function fe(R) {
    await M7(), t(15, B = Math.random().toString(36).substring(2, 15)), t(1, T = !0);
    try {
      const ne = await A(R, g, B, _ ?? 1 / 0);
      return J("load", m === "single" ? ne == null ? void 0 : ne[0] : ne), t(1, T = !1), ne || [];
    } catch (ne) {
      return J("error", ne.message), t(1, T = !1), [];
    }
  }
  async function ye(R) {
    if (!R.length)
      return;
    let ne = R.map((ge) => new File([ge], ge instanceof File ? ge.name : "file", { type: ge.type }));
    return n && z && (ne = ne.filter((ge) => Ee(ge) ? !0 : (J("error", `Invalid file type: ${ge.name}. Only ${l} allowed.`), !1)), ne.length === 0) ? [] : (t(16, U = await a5(ne)), await fe(U));
  }
  function Ee(R) {
    return l ? (Array.isArray(l) ? l : [l]).some((ge) => {
      const ve = se(ge);
      if (ve.startsWith("."))
        return R.name.toLowerCase().endsWith(ve.toLowerCase());
      if (ve === "*")
        return !0;
      if (ve.endsWith("/*")) {
        const [je] = ve.split("/");
        return R.type.startsWith(je + "/");
      }
      return R.type === ve;
    }) : !0;
  }
  async function re(R) {
    const ne = R.target;
    if (ne.files)
      if (w != "blob")
        await ye(Array.from(ne.files));
      else {
        if (m === "single") {
          J("load", ne.files[0]);
          return;
        }
        J("load", ne.files);
      }
  }
  async function he(R) {
    var ne;
    if (t(21, s = !1), !(!((ne = R.dataTransfer) === null || ne === void 0) && ne.files)) return;
    const ge = Array.from(R.dataTransfer.files).filter((ve) => {
      const je = "." + ve.name.split(".").pop();
      return je && R7(I, je, ve.type) || (je && Array.isArray(l) ? l.includes(je) : je === l) ? !0 : (J("error", `Invalid file type only ${l} allowed.`), !1);
    });
    if (w != "blob")
      await ye(ge);
    else {
      if (m === "single") {
        J("load", ge[0]);
        return;
      }
      J("load", ge);
    }
  }
  function me(R) {
    B0.call(this, r, R);
  }
  function Oe(R) {
    B0.call(this, r, R);
  }
  function P(R) {
    B0.call(this, r, R);
  }
  function Ze(R) {
    B0.call(this, r, R);
  }
  function Pe(R) {
    B0.call(this, r, R);
  }
  function Qe(R) {
    B0.call(this, r, R);
  }
  function ht(R) {
    B0.call(this, r, R);
  }
  function ft(R) {
    y7[R ? "unshift" : "push"](() => {
      S = R, t(2, S);
    });
  }
  return r.$$set = (R) => {
    "filetype" in R && t(0, l = R.filetype), "dragging" in R && t(21, s = R.dragging), "boundedheight" in R && t(3, o = R.boundedheight), "center" in R && t(4, u = R.center), "flex" in R && t(5, h = R.flex), "file_count" in R && t(6, m = R.file_count), "disable_click" in R && t(7, p = R.disable_click), "root" in R && t(8, g = R.root), "hidden" in R && t(9, v = R.hidden), "format" in R && t(22, w = R.format), "uploading" in R && t(1, T = R.uploading), "hidden_upload" in R && t(2, S = R.hidden_upload), "show_progress" in R && t(10, D = R.show_progress), "max_file_size" in R && t(23, _ = R.max_file_size), "upload" in R && t(24, A = R.upload), "stream_handler" in R && t(11, F = R.stream_handler), "icon_upload" in R && t(12, M = R.icon_upload), "$$scope" in R && t(27, i = R.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*filetype, ios*/
    67108865 && (l == null ? t(17, I = null) : typeof l == "string" ? t(17, I = se(l)) : n && l.includes("file/*") ? t(17, I = "*") : (t(0, l = l.map(se)), t(17, I = l.join(", "))));
  }, t(26, n = L()), [
    l,
    T,
    S,
    o,
    u,
    h,
    m,
    p,
    g,
    v,
    D,
    F,
    M,
    Ae,
    Ve,
    B,
    U,
    I,
    xe,
    re,
    he,
    s,
    w,
    _,
    A,
    ye,
    n,
    i,
    a,
    me,
    Oe,
    P,
    Ze,
    Pe,
    Qe,
    ht,
    ft
  ];
}
class O7 extends _7 {
  constructor(e) {
    super(), A7(
      this,
      e,
      L7,
      z7,
      F7,
      {
        filetype: 0,
        dragging: 21,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 22,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 23,
        upload: 24,
        stream_handler: 11,
        icon_upload: 12,
        paste_clipboard: 13,
        open_file_upload: 14,
        load_files: 25
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[13];
  }
  get open_file_upload() {
    return this.$$.ctx[14];
  }
  get load_files() {
    return this.$$.ctx[25];
  }
}
const {
  SvelteComponent: H7,
  claim_component: ih,
  create_component: lh,
  destroy_component: sh,
  init: P7,
  mount_component: oh,
  noop: q7,
  safe_not_equal: U7,
  transition_in: uh,
  transition_out: ch
} = window.__gradio__svelte__internal, { createEventDispatcher: G7 } = window.__gradio__svelte__internal;
function V7(r) {
  let e, t;
  return e = new Jl({
    props: { Icon: oc, label: "Remove Image" }
  }), e.$on(
    "click",
    /*click_handler*/
    r[1]
  ), {
    c() {
      lh(e.$$.fragment);
    },
    l(n) {
      ih(e.$$.fragment, n);
    },
    m(n, a) {
      oh(e, n, a), t = !0;
    },
    p: q7,
    i(n) {
      t || (uh(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ch(e.$$.fragment, n), t = !1;
    },
    d(n) {
      sh(e, n);
    }
  };
}
function j7(r) {
  let e, t;
  return e = new mc({
    props: {
      $$slots: { default: [V7] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      lh(e.$$.fragment);
    },
    l(n) {
      ih(e.$$.fragment, n);
    },
    m(n, a) {
      oh(e, n, a), t = !0;
    },
    p(n, [a]) {
      const i = {};
      a & /*$$scope*/
      4 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (uh(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ch(e.$$.fragment, n), t = !1;
    },
    d(n) {
      sh(e, n);
    }
  };
}
function W7(r) {
  const e = G7();
  return [e, (n) => {
    e("remove_image"), n.stopPropagation();
  }];
}
class X7 extends H7 {
  constructor(e) {
    super(), P7(this, e, W7, j7, U7, {});
  }
}
const {
  SvelteComponent: $7,
  add_flush_callback: bu,
  append_hydration: aa,
  attr: w0,
  bind: vu,
  binding_callbacks: pl,
  bubble: Y7,
  check_outros: hh,
  children: gl,
  claim_component: bl,
  claim_element: Sa,
  claim_space: Li,
  create_component: vl,
  create_slot: Z7,
  destroy_component: _l,
  detach: G0,
  element: Fa,
  empty: _u,
  get_all_dirty_from_scope: Q7,
  get_slot_changes: J7,
  group_outros: fh,
  init: K7,
  insert_hydration: Ta,
  mount_component: yl,
  noop: e6,
  safe_not_equal: t6,
  space: Oi,
  src_url_equal: yu,
  transition_in: Vt,
  transition_out: D0,
  update_slot_base: r6
} = window.__gradio__svelte__internal, { createEventDispatcher: n6 } = window.__gradio__svelte__internal;
function wu(r) {
  let e, t;
  return e = new X7({}), e.$on(
    "remove_image",
    /*remove_image_handler*/
    r[12]
  ), {
    c() {
      vl(e.$$.fragment);
    },
    l(n) {
      bl(e.$$.fragment, n);
    },
    m(n, a) {
      yl(e, n, a), t = !0;
    },
    p: e6,
    i(n) {
      t || (Vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      D0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _l(e, n);
    }
  };
}
function ku(r) {
  let e;
  const t = (
    /*#slots*/
    r[11].default
  ), n = Z7(
    t,
    r,
    /*$$scope*/
    r[17],
    null
  );
  return {
    c() {
      n && n.c();
    },
    l(a) {
      n && n.l(a);
    },
    m(a, i) {
      n && n.m(a, i), e = !0;
    },
    p(a, i) {
      n && n.p && (!e || i & /*$$scope*/
      131072) && r6(
        n,
        t,
        a,
        /*$$scope*/
        a[17],
        e ? J7(
          t,
          /*$$scope*/
          a[17],
          i,
          null
        ) : Q7(
          /*$$scope*/
          a[17]
        ),
        null
      );
    },
    i(a) {
      e || (Vt(n, a), e = !0);
    },
    o(a) {
      D0(n, a), e = !1;
    },
    d(a) {
      n && n.d(a);
    }
  };
}
function a6(r) {
  let e, t, n = (
    /*value*/
    r[0] === null && ku(r)
  );
  return {
    c() {
      n && n.c(), e = _u();
    },
    l(a) {
      n && n.l(a), e = _u();
    },
    m(a, i) {
      n && n.m(a, i), Ta(a, e, i), t = !0;
    },
    p(a, i) {
      /*value*/
      a[0] === null ? n ? (n.p(a, i), i & /*value*/
      1 && Vt(n, 1)) : (n = ku(a), n.c(), Vt(n, 1), n.m(e.parentNode, e)) : n && (fh(), D0(n, 1, 1, () => {
        n = null;
      }), hh());
    },
    i(a) {
      t || (Vt(n), t = !0);
    },
    o(a) {
      D0(n), t = !1;
    },
    d(a) {
      a && G0(e), n && n.d(a);
    }
  };
}
function Du(r) {
  let e, t, n, a;
  return {
    c() {
      e = Fa("div"), t = Fa("img"), this.h();
    },
    l(i) {
      e = Sa(i, "DIV", { class: !0 });
      var l = gl(e);
      t = Sa(l, "IMG", { src: !0, alt: !0 }), l.forEach(G0), this.h();
    },
    h() {
      yu(t.src, n = /*value*/
      r[0].url) || w0(t, "src", n), w0(t, "alt", a = /*value*/
      r[0].alt_text), w0(e, "class", "image-frame svelte-1mw9bca");
    },
    m(i, l) {
      Ta(i, e, l), aa(e, t);
    },
    p(i, l) {
      l & /*value*/
      1 && !yu(t.src, n = /*value*/
      i[0].url) && w0(t, "src", n), l & /*value*/
      1 && a !== (a = /*value*/
      i[0].alt_text) && w0(t, "alt", a);
    },
    d(i) {
      i && G0(e);
    }
  };
}
function i6(r) {
  var T;
  let e, t, n, a, i, l, s, o, u, h;
  e = new lc({
    props: {
      show_label: (
        /*show_label*/
        r[2]
      ),
      Icon: Kl,
      label: (
        /*label*/
        r[1] || "Image"
      )
    }
  });
  let m = (
    /*value*/
    ((T = r[0]) == null ? void 0 : T.url) && wu(r)
  );
  function p(S) {
    r[14](S);
  }
  function g(S) {
    r[15](S);
  }
  let v = {
    upload: (
      /*upload*/
      r[4]
    ),
    stream_handler: (
      /*stream_handler*/
      r[5]
    ),
    hidden: (
      /*value*/
      r[0] !== null
    ),
    filetype: "image/*",
    root: (
      /*root*/
      r[3]
    ),
    $$slots: { default: [a6] },
    $$scope: { ctx: r }
  };
  /*uploading*/
  r[6] !== void 0 && (v.uploading = /*uploading*/
  r[6]), /*dragging*/
  r[7] !== void 0 && (v.dragging = /*dragging*/
  r[7]), l = new O7({ props: v }), r[13](l), pl.push(() => vu(l, "uploading", p)), pl.push(() => vu(l, "dragging", g)), l.$on(
    "load",
    /*handle_upload*/
    r[9]
  ), l.$on(
    "error",
    /*error_handler*/
    r[16]
  );
  let w = (
    /*value*/
    r[0] !== null && Du(r)
  );
  return {
    c() {
      vl(e.$$.fragment), t = Oi(), n = Fa("div"), m && m.c(), a = Oi(), i = Fa("div"), vl(l.$$.fragment), u = Oi(), w && w.c(), this.h();
    },
    l(S) {
      bl(e.$$.fragment, S), t = Li(S), n = Sa(S, "DIV", { "data-testid": !0, class: !0 });
      var D = gl(n);
      m && m.l(D), a = Li(D), i = Sa(D, "DIV", { class: !0 });
      var _ = gl(i);
      bl(l.$$.fragment, _), u = Li(_), w && w.l(_), _.forEach(G0), D.forEach(G0), this.h();
    },
    h() {
      w0(i, "class", "upload-container svelte-1mw9bca"), w0(n, "data-testid", "image"), w0(n, "class", "image-container svelte-1mw9bca");
    },
    m(S, D) {
      yl(e, S, D), Ta(S, t, D), Ta(S, n, D), m && m.m(n, null), aa(n, a), aa(n, i), yl(l, i, null), aa(i, u), w && w.m(i, null), h = !0;
    },
    p(S, [D]) {
      var F;
      const _ = {};
      D & /*show_label*/
      4 && (_.show_label = /*show_label*/
      S[2]), D & /*label*/
      2 && (_.label = /*label*/
      S[1] || "Image"), e.$set(_), /*value*/
      (F = S[0]) != null && F.url ? m ? (m.p(S, D), D & /*value*/
      1 && Vt(m, 1)) : (m = wu(S), m.c(), Vt(m, 1), m.m(n, a)) : m && (fh(), D0(m, 1, 1, () => {
        m = null;
      }), hh());
      const A = {};
      D & /*upload*/
      16 && (A.upload = /*upload*/
      S[4]), D & /*stream_handler*/
      32 && (A.stream_handler = /*stream_handler*/
      S[5]), D & /*value*/
      1 && (A.hidden = /*value*/
      S[0] !== null), D & /*root*/
      8 && (A.root = /*root*/
      S[3]), D & /*$$scope, value*/
      131073 && (A.$$scope = { dirty: D, ctx: S }), !s && D & /*uploading*/
      64 && (s = !0, A.uploading = /*uploading*/
      S[6], bu(() => s = !1)), !o && D & /*dragging*/
      128 && (o = !0, A.dragging = /*dragging*/
      S[7], bu(() => o = !1)), l.$set(A), /*value*/
      S[0] !== null ? w ? w.p(S, D) : (w = Du(S), w.c(), w.m(i, null)) : w && (w.d(1), w = null);
    },
    i(S) {
      h || (Vt(e.$$.fragment, S), Vt(m), Vt(l.$$.fragment, S), h = !0);
    },
    o(S) {
      D0(e.$$.fragment, S), D0(m), D0(l.$$.fragment, S), h = !1;
    },
    d(S) {
      S && (G0(t), G0(n)), _l(e, S), m && m.d(), r[13](null), _l(l), w && w.d();
    }
  };
}
function l6(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { value: i } = e, { label: l = void 0 } = e, { show_label: s } = e, { root: o } = e, { upload: u } = e, { stream_handler: h } = e, m, p = !1;
  function g({ detail: F }) {
    t(0, i = F), v("upload");
  }
  const v = n6();
  let w = !1;
  const T = () => {
    t(0, i = null), v("clear");
  };
  function S(F) {
    pl[F ? "unshift" : "push"](() => {
      m = F, t(8, m);
    });
  }
  function D(F) {
    p = F, t(6, p);
  }
  function _(F) {
    w = F, t(7, w);
  }
  function A(F) {
    Y7.call(this, r, F);
  }
  return r.$$set = (F) => {
    "value" in F && t(0, i = F.value), "label" in F && t(1, l = F.label), "show_label" in F && t(2, s = F.show_label), "root" in F && t(3, o = F.root), "upload" in F && t(4, u = F.upload), "stream_handler" in F && t(5, h = F.stream_handler), "$$scope" in F && t(17, a = F.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*uploading*/
    64 && p && t(0, i = null), r.$$.dirty & /*dragging*/
    128 && v("drag", w);
  }, [
    i,
    l,
    s,
    o,
    u,
    h,
    p,
    w,
    m,
    g,
    v,
    n,
    T,
    S,
    D,
    _,
    A,
    a
  ];
}
class s6 extends $7 {
  constructor(e) {
    super(), K7(this, e, l6, i6, t6, {
      value: 0,
      label: 1,
      show_label: 2,
      root: 3,
      upload: 4,
      stream_handler: 5
    });
  }
}
function yr(r) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; r > 1e3 && t < e.length - 1; )
    r /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(r) ? r : r.toFixed(1)) + n;
}
const {
  SvelteComponent: o6,
  append_hydration: Tt,
  attr: oe,
  children: _t,
  claim_element: u6,
  claim_svg_element: Ct,
  component_subscribe: xu,
  detach: mt,
  element: c6,
  init: h6,
  insert_hydration: f6,
  noop: Au,
  safe_not_equal: m6,
  set_style: Zn,
  svg_element: Mt,
  toggle_class: Eu
} = window.__gradio__svelte__internal, { onMount: d6 } = window.__gradio__svelte__internal;
function p6(r) {
  let e, t, n, a, i, l, s, o, u, h, m, p;
  return {
    c() {
      e = c6("div"), t = Mt("svg"), n = Mt("g"), a = Mt("path"), i = Mt("path"), l = Mt("path"), s = Mt("path"), o = Mt("g"), u = Mt("path"), h = Mt("path"), m = Mt("path"), p = Mt("path"), this.h();
    },
    l(g) {
      e = u6(g, "DIV", { class: !0 });
      var v = _t(e);
      t = Ct(v, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var w = _t(t);
      n = Ct(w, "g", { style: !0 });
      var T = _t(n);
      a = Ct(T, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _t(a).forEach(mt), i = Ct(T, "path", { d: !0, fill: !0, class: !0 }), _t(i).forEach(mt), l = Ct(T, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _t(l).forEach(mt), s = Ct(T, "path", { d: !0, fill: !0, class: !0 }), _t(s).forEach(mt), T.forEach(mt), o = Ct(w, "g", { style: !0 });
      var S = _t(o);
      u = Ct(S, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _t(u).forEach(mt), h = Ct(S, "path", { d: !0, fill: !0, class: !0 }), _t(h).forEach(mt), m = Ct(S, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _t(m).forEach(mt), p = Ct(S, "path", { d: !0, fill: !0, class: !0 }), _t(p).forEach(mt), S.forEach(mt), w.forEach(mt), v.forEach(mt), this.h();
    },
    h() {
      oe(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), oe(a, "fill", "#FF7C00"), oe(a, "fill-opacity", "0.4"), oe(a, "class", "svelte-43sxxs"), oe(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), oe(i, "fill", "#FF7C00"), oe(i, "class", "svelte-43sxxs"), oe(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), oe(l, "fill", "#FF7C00"), oe(l, "fill-opacity", "0.4"), oe(l, "class", "svelte-43sxxs"), oe(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), oe(s, "fill", "#FF7C00"), oe(s, "class", "svelte-43sxxs"), Zn(n, "transform", "translate(" + /*$top*/
      r[1][0] + "px, " + /*$top*/
      r[1][1] + "px)"), oe(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), oe(u, "fill", "#FF7C00"), oe(u, "fill-opacity", "0.4"), oe(u, "class", "svelte-43sxxs"), oe(h, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), oe(h, "fill", "#FF7C00"), oe(h, "class", "svelte-43sxxs"), oe(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), oe(m, "fill", "#FF7C00"), oe(m, "fill-opacity", "0.4"), oe(m, "class", "svelte-43sxxs"), oe(p, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), oe(p, "fill", "#FF7C00"), oe(p, "class", "svelte-43sxxs"), Zn(o, "transform", "translate(" + /*$bottom*/
      r[2][0] + "px, " + /*$bottom*/
      r[2][1] + "px)"), oe(t, "viewBox", "-1200 -1200 3000 3000"), oe(t, "fill", "none"), oe(t, "xmlns", "http://www.w3.org/2000/svg"), oe(t, "class", "svelte-43sxxs"), oe(e, "class", "svelte-43sxxs"), Eu(
        e,
        "margin",
        /*margin*/
        r[0]
      );
    },
    m(g, v) {
      f6(g, e, v), Tt(e, t), Tt(t, n), Tt(n, a), Tt(n, i), Tt(n, l), Tt(n, s), Tt(t, o), Tt(o, u), Tt(o, h), Tt(o, m), Tt(o, p);
    },
    p(g, [v]) {
      v & /*$top*/
      2 && Zn(n, "transform", "translate(" + /*$top*/
      g[1][0] + "px, " + /*$top*/
      g[1][1] + "px)"), v & /*$bottom*/
      4 && Zn(o, "transform", "translate(" + /*$bottom*/
      g[2][0] + "px, " + /*$bottom*/
      g[2][1] + "px)"), v & /*margin*/
      1 && Eu(
        e,
        "margin",
        /*margin*/
        g[0]
      );
    },
    i: Au,
    o: Au,
    d(g) {
      g && mt(e);
    }
  };
}
function g6(r, e, t) {
  let n, a, { margin: i = !0 } = e;
  const l = Jo([0, 0]);
  xu(r, l, (p) => t(1, n = p));
  const s = Jo([0, 0]);
  xu(r, s, (p) => t(2, a = p));
  let o;
  async function u() {
    await Promise.all([l.set([125, 140]), s.set([-125, -140])]), await Promise.all([l.set([-125, 140]), s.set([125, -140])]), await Promise.all([l.set([-125, 0]), s.set([125, -0])]), await Promise.all([l.set([125, 0]), s.set([-125, 0])]);
  }
  async function h() {
    await u(), o || h();
  }
  async function m() {
    await Promise.all([l.set([125, 0]), s.set([-125, 0])]), h();
  }
  return d6(() => (m(), () => o = !0)), r.$$set = (p) => {
    "margin" in p && t(0, i = p.margin);
  }, [i, n, a, l, s];
}
class b6 extends o6 {
  constructor(e) {
    super(), h6(this, e, g6, p6, m6, { margin: 0 });
  }
}
const {
  SvelteComponent: v6,
  append_hydration: V0,
  attr: Rt,
  binding_callbacks: Su,
  check_outros: wl,
  children: Xt,
  claim_component: mh,
  claim_element: $t,
  claim_space: kt,
  claim_text: Te,
  create_component: dh,
  create_slot: ph,
  destroy_component: gh,
  destroy_each: bh,
  detach: X,
  element: Yt,
  empty: At,
  ensure_array_like: Ca,
  get_all_dirty_from_scope: vh,
  get_slot_changes: _h,
  group_outros: kl,
  init: _6,
  insert_hydration: ee,
  mount_component: yh,
  noop: Dl,
  safe_not_equal: y6,
  set_data: Et,
  set_style: x0,
  space: Dt,
  text: Ce,
  toggle_class: yt,
  transition_in: zt,
  transition_out: Zt,
  update_slot_base: wh
} = window.__gradio__svelte__internal, { tick: w6 } = window.__gradio__svelte__internal, { onDestroy: k6 } = window.__gradio__svelte__internal, { createEventDispatcher: D6 } = window.__gradio__svelte__internal, x6 = (r) => ({}), Fu = (r) => ({}), A6 = (r) => ({}), Tu = (r) => ({});
function Cu(r, e, t) {
  const n = r.slice();
  return n[40] = e[t], n[42] = t, n;
}
function Mu(r, e, t) {
  const n = r.slice();
  return n[40] = e[t], n;
}
function E6(r) {
  let e, t, n, a, i = (
    /*i18n*/
    r[1]("common.error") + ""
  ), l, s, o;
  t = new Jl({
    props: {
      Icon: oc,
      label: (
        /*i18n*/
        r[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    r[32]
  );
  const u = (
    /*#slots*/
    r[30].error
  ), h = ph(
    u,
    r,
    /*$$scope*/
    r[29],
    Fu
  );
  return {
    c() {
      e = Yt("div"), dh(t.$$.fragment), n = Dt(), a = Yt("span"), l = Ce(i), s = Dt(), h && h.c(), this.h();
    },
    l(m) {
      e = $t(m, "DIV", { class: !0 });
      var p = Xt(e);
      mh(t.$$.fragment, p), p.forEach(X), n = kt(m), a = $t(m, "SPAN", { class: !0 });
      var g = Xt(a);
      l = Te(g, i), g.forEach(X), s = kt(m), h && h.l(m), this.h();
    },
    h() {
      Rt(e, "class", "clear-status svelte-17v219f"), Rt(a, "class", "error svelte-17v219f");
    },
    m(m, p) {
      ee(m, e, p), yh(t, e, null), ee(m, n, p), ee(m, a, p), V0(a, l), ee(m, s, p), h && h.m(m, p), o = !0;
    },
    p(m, p) {
      const g = {};
      p[0] & /*i18n*/
      2 && (g.label = /*i18n*/
      m[1]("common.clear")), t.$set(g), (!o || p[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      m[1]("common.error") + "") && Et(l, i), h && h.p && (!o || p[0] & /*$$scope*/
      536870912) && wh(
        h,
        u,
        m,
        /*$$scope*/
        m[29],
        o ? _h(
          u,
          /*$$scope*/
          m[29],
          p,
          x6
        ) : vh(
          /*$$scope*/
          m[29]
        ),
        Fu
      );
    },
    i(m) {
      o || (zt(t.$$.fragment, m), zt(h, m), o = !0);
    },
    o(m) {
      Zt(t.$$.fragment, m), Zt(h, m), o = !1;
    },
    d(m) {
      m && (X(e), X(n), X(a), X(s)), gh(t), h && h.d(m);
    }
  };
}
function S6(r) {
  let e, t, n, a, i, l, s, o, u, h = (
    /*variant*/
    r[8] === "default" && /*show_eta_bar*/
    r[18] && /*show_progress*/
    r[6] === "full" && Bu(r)
  );
  function m(_, A) {
    if (
      /*progress*/
      _[7]
    ) return C6;
    if (
      /*queue_position*/
      _[2] !== null && /*queue_size*/
      _[3] !== void 0 && /*queue_position*/
      _[2] >= 0
    ) return T6;
    if (
      /*queue_position*/
      _[2] === 0
    ) return F6;
  }
  let p = m(r), g = p && p(r), v = (
    /*timer*/
    r[5] && zu(r)
  );
  const w = [I6, N6], T = [];
  function S(_, A) {
    return (
      /*last_progress_level*/
      _[15] != null ? 0 : (
        /*show_progress*/
        _[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = S(r)) && (l = T[i] = w[i](r));
  let D = !/*timer*/
  r[5] && Uu(r);
  return {
    c() {
      h && h.c(), e = Dt(), t = Yt("div"), g && g.c(), n = Dt(), v && v.c(), a = Dt(), l && l.c(), s = Dt(), D && D.c(), o = At(), this.h();
    },
    l(_) {
      h && h.l(_), e = kt(_), t = $t(_, "DIV", { class: !0 });
      var A = Xt(t);
      g && g.l(A), n = kt(A), v && v.l(A), A.forEach(X), a = kt(_), l && l.l(_), s = kt(_), D && D.l(_), o = At(), this.h();
    },
    h() {
      Rt(t, "class", "progress-text svelte-17v219f"), yt(
        t,
        "meta-text-center",
        /*variant*/
        r[8] === "center"
      ), yt(
        t,
        "meta-text",
        /*variant*/
        r[8] === "default"
      );
    },
    m(_, A) {
      h && h.m(_, A), ee(_, e, A), ee(_, t, A), g && g.m(t, null), V0(t, n), v && v.m(t, null), ee(_, a, A), ~i && T[i].m(_, A), ee(_, s, A), D && D.m(_, A), ee(_, o, A), u = !0;
    },
    p(_, A) {
      /*variant*/
      _[8] === "default" && /*show_eta_bar*/
      _[18] && /*show_progress*/
      _[6] === "full" ? h ? h.p(_, A) : (h = Bu(_), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), p === (p = m(_)) && g ? g.p(_, A) : (g && g.d(1), g = p && p(_), g && (g.c(), g.m(t, n))), /*timer*/
      _[5] ? v ? v.p(_, A) : (v = zu(_), v.c(), v.m(t, null)) : v && (v.d(1), v = null), (!u || A[0] & /*variant*/
      256) && yt(
        t,
        "meta-text-center",
        /*variant*/
        _[8] === "center"
      ), (!u || A[0] & /*variant*/
      256) && yt(
        t,
        "meta-text",
        /*variant*/
        _[8] === "default"
      );
      let F = i;
      i = S(_), i === F ? ~i && T[i].p(_, A) : (l && (kl(), Zt(T[F], 1, 1, () => {
        T[F] = null;
      }), wl()), ~i ? (l = T[i], l ? l.p(_, A) : (l = T[i] = w[i](_), l.c()), zt(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      _[5] ? D && (kl(), Zt(D, 1, 1, () => {
        D = null;
      }), wl()) : D ? (D.p(_, A), A[0] & /*timer*/
      32 && zt(D, 1)) : (D = Uu(_), D.c(), zt(D, 1), D.m(o.parentNode, o));
    },
    i(_) {
      u || (zt(l), zt(D), u = !0);
    },
    o(_) {
      Zt(l), Zt(D), u = !1;
    },
    d(_) {
      _ && (X(e), X(t), X(a), X(s), X(o)), h && h.d(_), g && g.d(), v && v.d(), ~i && T[i].d(_), D && D.d(_);
    }
  };
}
function Bu(r) {
  let e, t = `translateX(${/*eta_level*/
  (r[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Yt("div"), this.h();
    },
    l(n) {
      e = $t(n, "DIV", { class: !0 }), Xt(e).forEach(X), this.h();
    },
    h() {
      Rt(e, "class", "eta-bar svelte-17v219f"), x0(e, "transform", t);
    },
    m(n, a) {
      ee(n, e, a);
    },
    p(n, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && x0(e, "transform", t);
    },
    d(n) {
      n && X(e);
    }
  };
}
function F6(r) {
  let e;
  return {
    c() {
      e = Ce("processing |");
    },
    l(t) {
      e = Te(t, "processing |");
    },
    m(t, n) {
      ee(t, e, n);
    },
    p: Dl,
    d(t) {
      t && X(e);
    }
  };
}
function T6(r) {
  let e, t = (
    /*queue_position*/
    r[2] + 1 + ""
  ), n, a, i, l;
  return {
    c() {
      e = Ce("queue: "), n = Ce(t), a = Ce("/"), i = Ce(
        /*queue_size*/
        r[3]
      ), l = Ce(" |");
    },
    l(s) {
      e = Te(s, "queue: "), n = Te(s, t), a = Te(s, "/"), i = Te(
        s,
        /*queue_size*/
        r[3]
      ), l = Te(s, " |");
    },
    m(s, o) {
      ee(s, e, o), ee(s, n, o), ee(s, a, o), ee(s, i, o), ee(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && Et(n, t), o[0] & /*queue_size*/
      8 && Et(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (X(e), X(n), X(a), X(i), X(l));
    }
  };
}
function C6(r) {
  let e, t = Ca(
    /*progress*/
    r[7]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = Iu(Mu(r, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      e = At();
    },
    l(a) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(a);
      e = At();
    },
    m(a, i) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, i);
      ee(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = Ca(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Mu(a, t, l);
          n[l] ? n[l].p(s, i) : (n[l] = Iu(s), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      a && X(e), bh(n, a);
    }
  };
}
function Nu(r) {
  let e, t = (
    /*p*/
    r[40].unit + ""
  ), n, a, i = " ", l;
  function s(h, m) {
    return (
      /*p*/
      h[40].length != null ? B6 : M6
    );
  }
  let o = s(r), u = o(r);
  return {
    c() {
      u.c(), e = Dt(), n = Ce(t), a = Ce(" | "), l = Ce(i);
    },
    l(h) {
      u.l(h), e = kt(h), n = Te(h, t), a = Te(h, " | "), l = Te(h, i);
    },
    m(h, m) {
      u.m(h, m), ee(h, e, m), ee(h, n, m), ee(h, a, m), ee(h, l, m);
    },
    p(h, m) {
      o === (o = s(h)) && u ? u.p(h, m) : (u.d(1), u = o(h), u && (u.c(), u.m(e.parentNode, e))), m[0] & /*progress*/
      128 && t !== (t = /*p*/
      h[40].unit + "") && Et(n, t);
    },
    d(h) {
      h && (X(e), X(n), X(a), X(l)), u.d(h);
    }
  };
}
function M6(r) {
  let e = yr(
    /*p*/
    r[40].index || 0
  ) + "", t;
  return {
    c() {
      t = Ce(e);
    },
    l(n) {
      t = Te(n, e);
    },
    m(n, a) {
      ee(n, t, a);
    },
    p(n, a) {
      a[0] & /*progress*/
      128 && e !== (e = yr(
        /*p*/
        n[40].index || 0
      ) + "") && Et(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function B6(r) {
  let e = yr(
    /*p*/
    r[40].index || 0
  ) + "", t, n, a = yr(
    /*p*/
    r[40].length
  ) + "", i;
  return {
    c() {
      t = Ce(e), n = Ce("/"), i = Ce(a);
    },
    l(l) {
      t = Te(l, e), n = Te(l, "/"), i = Te(l, a);
    },
    m(l, s) {
      ee(l, t, s), ee(l, n, s), ee(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = yr(
        /*p*/
        l[40].index || 0
      ) + "") && Et(t, e), s[0] & /*progress*/
      128 && a !== (a = yr(
        /*p*/
        l[40].length
      ) + "") && Et(i, a);
    },
    d(l) {
      l && (X(t), X(n), X(i));
    }
  };
}
function Iu(r) {
  let e, t = (
    /*p*/
    r[40].index != null && Nu(r)
  );
  return {
    c() {
      t && t.c(), e = At();
    },
    l(n) {
      t && t.l(n), e = At();
    },
    m(n, a) {
      t && t.m(n, a), ee(n, e, a);
    },
    p(n, a) {
      /*p*/
      n[40].index != null ? t ? t.p(n, a) : (t = Nu(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function zu(r) {
  let e, t = (
    /*eta*/
    r[0] ? `/${/*formatted_eta*/
    r[19]}` : ""
  ), n, a;
  return {
    c() {
      e = Ce(
        /*formatted_timer*/
        r[20]
      ), n = Ce(t), a = Ce("s");
    },
    l(i) {
      e = Te(
        i,
        /*formatted_timer*/
        r[20]
      ), n = Te(i, t), a = Te(i, "s");
    },
    m(i, l) {
      ee(i, e, l), ee(i, n, l), ee(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && Et(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && Et(n, t);
    },
    d(i) {
      i && (X(e), X(n), X(a));
    }
  };
}
function N6(r) {
  let e, t;
  return e = new b6({
    props: { margin: (
      /*variant*/
      r[8] === "default"
    ) }
  }), {
    c() {
      dh(e.$$.fragment);
    },
    l(n) {
      mh(e.$$.fragment, n);
    },
    m(n, a) {
      yh(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      n[8] === "default"), e.$set(i);
    },
    i(n) {
      t || (zt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Zt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gh(e, n);
    }
  };
}
function I6(r) {
  let e, t, n, a, i, l = `${/*last_progress_level*/
  r[15] * 100}%`, s = (
    /*progress*/
    r[7] != null && Ru(r)
  );
  return {
    c() {
      e = Yt("div"), t = Yt("div"), s && s.c(), n = Dt(), a = Yt("div"), i = Yt("div"), this.h();
    },
    l(o) {
      e = $t(o, "DIV", { class: !0 });
      var u = Xt(e);
      t = $t(u, "DIV", { class: !0 });
      var h = Xt(t);
      s && s.l(h), h.forEach(X), n = kt(u), a = $t(u, "DIV", { class: !0 });
      var m = Xt(a);
      i = $t(m, "DIV", { class: !0 }), Xt(i).forEach(X), m.forEach(X), u.forEach(X), this.h();
    },
    h() {
      Rt(t, "class", "progress-level-inner svelte-17v219f"), Rt(i, "class", "progress-bar svelte-17v219f"), x0(i, "width", l), Rt(a, "class", "progress-bar-wrap svelte-17v219f"), Rt(e, "class", "progress-level svelte-17v219f");
    },
    m(o, u) {
      ee(o, e, u), V0(e, t), s && s.m(t, null), V0(e, n), V0(e, a), V0(a, i), r[31](i);
    },
    p(o, u) {
      /*progress*/
      o[7] != null ? s ? s.p(o, u) : (s = Ru(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && x0(i, "width", l);
    },
    i: Dl,
    o: Dl,
    d(o) {
      o && X(e), s && s.d(), r[31](null);
    }
  };
}
function Ru(r) {
  let e, t = Ca(
    /*progress*/
    r[7]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = qu(Cu(r, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      e = At();
    },
    l(a) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(a);
      e = At();
    },
    m(a, i) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, i);
      ee(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = Ca(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Cu(a, t, l);
          n[l] ? n[l].p(s, i) : (n[l] = qu(s), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      a && X(e), bh(n, a);
    }
  };
}
function Lu(r) {
  let e, t, n, a, i = (
    /*i*/
    r[42] !== 0 && z6()
  ), l = (
    /*p*/
    r[40].desc != null && Ou(r)
  ), s = (
    /*p*/
    r[40].desc != null && /*progress_level*/
    r[14] && /*progress_level*/
    r[14][
      /*i*/
      r[42]
    ] != null && Hu()
  ), o = (
    /*progress_level*/
    r[14] != null && Pu(r)
  );
  return {
    c() {
      i && i.c(), e = Dt(), l && l.c(), t = Dt(), s && s.c(), n = Dt(), o && o.c(), a = At();
    },
    l(u) {
      i && i.l(u), e = kt(u), l && l.l(u), t = kt(u), s && s.l(u), n = kt(u), o && o.l(u), a = At();
    },
    m(u, h) {
      i && i.m(u, h), ee(u, e, h), l && l.m(u, h), ee(u, t, h), s && s.m(u, h), ee(u, n, h), o && o.m(u, h), ee(u, a, h);
    },
    p(u, h) {
      /*p*/
      u[40].desc != null ? l ? l.p(u, h) : (l = Ou(u), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      u[40].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[42]
      ] != null ? s || (s = Hu(), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), /*progress_level*/
      u[14] != null ? o ? o.p(u, h) : (o = Pu(u), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && (X(e), X(t), X(n), X(a)), i && i.d(u), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function z6(r) {
  let e;
  return {
    c() {
      e = Ce(" /");
    },
    l(t) {
      e = Te(t, " /");
    },
    m(t, n) {
      ee(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function Ou(r) {
  let e = (
    /*p*/
    r[40].desc + ""
  ), t;
  return {
    c() {
      t = Ce(e);
    },
    l(n) {
      t = Te(n, e);
    },
    m(n, a) {
      ee(n, t, a);
    },
    p(n, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[40].desc + "") && Et(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function Hu(r) {
  let e;
  return {
    c() {
      e = Ce("-");
    },
    l(t) {
      e = Te(t, "-");
    },
    m(t, n) {
      ee(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function Pu(r) {
  let e = (100 * /*progress_level*/
  (r[14][
    /*i*/
    r[42]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = Ce(e), n = Ce("%");
    },
    l(a) {
      t = Te(a, e), n = Te(a, "%");
    },
    m(a, i) {
      ee(a, t, i), ee(a, n, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[42]
      ] || 0)).toFixed(1) + "") && Et(t, e);
    },
    d(a) {
      a && (X(t), X(n));
    }
  };
}
function qu(r) {
  let e, t = (
    /*p*/
    (r[40].desc != null || /*progress_level*/
    r[14] && /*progress_level*/
    r[14][
      /*i*/
      r[42]
    ] != null) && Lu(r)
  );
  return {
    c() {
      t && t.c(), e = At();
    },
    l(n) {
      t && t.l(n), e = At();
    },
    m(n, a) {
      t && t.m(n, a), ee(n, e, a);
    },
    p(n, a) {
      /*p*/
      n[40].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[42]
      ] != null ? t ? t.p(n, a) : (t = Lu(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function Uu(r) {
  let e, t, n, a;
  const i = (
    /*#slots*/
    r[30]["additional-loading-text"]
  ), l = ph(
    i,
    r,
    /*$$scope*/
    r[29],
    Tu
  );
  return {
    c() {
      e = Yt("p"), t = Ce(
        /*loading_text*/
        r[9]
      ), n = Dt(), l && l.c(), this.h();
    },
    l(s) {
      e = $t(s, "P", { class: !0 });
      var o = Xt(e);
      t = Te(
        o,
        /*loading_text*/
        r[9]
      ), o.forEach(X), n = kt(s), l && l.l(s), this.h();
    },
    h() {
      Rt(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      ee(s, e, o), V0(e, t), ee(s, n, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && Et(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && wh(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? _h(
          i,
          /*$$scope*/
          s[29],
          o,
          A6
        ) : vh(
          /*$$scope*/
          s[29]
        ),
        Tu
      );
    },
    i(s) {
      a || (zt(l, s), a = !0);
    },
    o(s) {
      Zt(l, s), a = !1;
    },
    d(s) {
      s && (X(e), X(n)), l && l.d(s);
    }
  };
}
function R6(r) {
  let e, t, n, a, i;
  const l = [S6, E6], s = [];
  function o(u, h) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = o(r)) && (n = s[t] = l[t](r)), {
    c() {
      e = Yt("div"), n && n.c(), this.h();
    },
    l(u) {
      e = $t(u, "DIV", { class: !0 });
      var h = Xt(e);
      n && n.l(h), h.forEach(X), this.h();
    },
    h() {
      Rt(e, "class", a = "wrap " + /*variant*/
      r[8] + " " + /*show_progress*/
      r[6] + " svelte-17v219f"), yt(e, "hide", !/*status*/
      r[4] || /*status*/
      r[4] === "complete" || /*show_progress*/
      r[6] === "hidden" || /*status*/
      r[4] == "streaming"), yt(
        e,
        "translucent",
        /*variant*/
        r[8] === "center" && /*status*/
        (r[4] === "pending" || /*status*/
        r[4] === "error") || /*translucent*/
        r[11] || /*show_progress*/
        r[6] === "minimal"
      ), yt(
        e,
        "generating",
        /*status*/
        r[4] === "generating" && /*show_progress*/
        r[6] === "full"
      ), yt(
        e,
        "border",
        /*border*/
        r[12]
      ), x0(
        e,
        "position",
        /*absolute*/
        r[10] ? "absolute" : "static"
      ), x0(
        e,
        "padding",
        /*absolute*/
        r[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, h) {
      ee(u, e, h), ~t && s[t].m(e, null), r[33](e), i = !0;
    },
    p(u, h) {
      let m = t;
      t = o(u), t === m ? ~t && s[t].p(u, h) : (n && (kl(), Zt(s[m], 1, 1, () => {
        s[m] = null;
      }), wl()), ~t ? (n = s[t], n ? n.p(u, h) : (n = s[t] = l[t](u), n.c()), zt(n, 1), n.m(e, null)) : n = null), (!i || h[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-17v219f")) && Rt(e, "class", a), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && yt(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden" || /*status*/
      u[4] == "streaming"), (!i || h[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && yt(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && yt(
        e,
        "generating",
        /*status*/
        u[4] === "generating" && /*show_progress*/
        u[6] === "full"
      ), (!i || h[0] & /*variant, show_progress, border*/
      4416) && yt(
        e,
        "border",
        /*border*/
        u[12]
      ), h[0] & /*absolute*/
      1024 && x0(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), h[0] & /*absolute*/
      1024 && x0(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      i || (zt(n), i = !0);
    },
    o(u) {
      Zt(n), i = !1;
    },
    d(u) {
      u && X(e), ~t && s[t].d(), r[33](null);
    }
  };
}
let Qn = [], Hi = !1;
const L6 = typeof window < "u", kh = L6 ? window.requestAnimationFrame : (r) => {
};
async function O6(r, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (Qn.push(r), !Hi) Hi = !0;
    else return;
    await w6(), kh(() => {
      let t = [0, 0];
      for (let n = 0; n < Qn.length; n++) {
        const i = Qn[n].getBoundingClientRect();
        (n === 0 || i.top + window.scrollY <= t[0]) && (t[0] = i.top + window.scrollY, t[1] = n);
      }
      window.scrollTo({ top: t[0] - 20, behavior: "smooth" }), Hi = !1, Qn = [];
    });
  }
}
function H6(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e;
  const l = D6();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: u } = e, { queue_size: h } = e, { status: m } = e, { scroll_to_output: p = !1 } = e, { timer: g = !0 } = e, { show_progress: v = "full" } = e, { message: w = null } = e, { progress: T = null } = e, { variant: S = "default" } = e, { loading_text: D = "Loading..." } = e, { absolute: _ = !0 } = e, { translucent: A = !1 } = e, { border: F = !1 } = e, { autoscroll: M } = e, B, U = !1, I = 0, z = 0, L = null, J = null, Le = 0, se = null, xe, Ae = null, Ve = !0;
  const fe = () => {
    t(0, o = t(27, L = t(19, re = null))), t(25, I = performance.now()), t(26, z = 0), U = !0, ye();
  };
  function ye() {
    kh(() => {
      t(26, z = (performance.now() - I) / 1e3), U && ye();
    });
  }
  function Ee() {
    t(26, z = 0), t(0, o = t(27, L = t(19, re = null))), U && (U = !1);
  }
  k6(() => {
    U && Ee();
  });
  let re = null;
  function he(P) {
    Su[P ? "unshift" : "push"](() => {
      Ae = P, t(16, Ae), t(7, T), t(14, se), t(15, xe);
    });
  }
  const me = () => {
    l("clear_status");
  };
  function Oe(P) {
    Su[P ? "unshift" : "push"](() => {
      B = P, t(13, B);
    });
  }
  return r.$$set = (P) => {
    "i18n" in P && t(1, s = P.i18n), "eta" in P && t(0, o = P.eta), "queue_position" in P && t(2, u = P.queue_position), "queue_size" in P && t(3, h = P.queue_size), "status" in P && t(4, m = P.status), "scroll_to_output" in P && t(22, p = P.scroll_to_output), "timer" in P && t(5, g = P.timer), "show_progress" in P && t(6, v = P.show_progress), "message" in P && t(23, w = P.message), "progress" in P && t(7, T = P.progress), "variant" in P && t(8, S = P.variant), "loading_text" in P && t(9, D = P.loading_text), "absolute" in P && t(10, _ = P.absolute), "translucent" in P && t(11, A = P.translucent), "border" in P && t(12, F = P.border), "autoscroll" in P && t(24, M = P.autoscroll), "$$scope" in P && t(29, i = P.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = L), o != null && L !== o && (t(28, J = (performance.now() - I) / 1e3 + o), t(19, re = J.toFixed(1)), t(27, L = o))), r.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, Le = J === null || J <= 0 || !z ? null : Math.min(z / J, 1)), r.$$.dirty[0] & /*progress*/
    128 && T != null && t(18, Ve = !1), r.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (T != null ? t(14, se = T.map((P) => {
      if (P.index != null && P.length != null)
        return P.index / P.length;
      if (P.progress != null)
        return P.progress;
    })) : t(14, se = null), se ? (t(15, xe = se[se.length - 1]), Ae && (xe === 0 ? t(16, Ae.style.transition = "0", Ae) : t(16, Ae.style.transition = "150ms", Ae))) : t(15, xe = void 0)), r.$$.dirty[0] & /*status*/
    16 && (m === "pending" ? fe() : Ee()), r.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && B && p && (m === "pending" || m === "complete") && O6(B, M), r.$$.dirty[0] & /*status, message*/
    8388624, r.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = z.toFixed(1));
  }, [
    o,
    s,
    u,
    h,
    m,
    g,
    v,
    T,
    S,
    D,
    _,
    A,
    F,
    B,
    se,
    xe,
    Ae,
    Le,
    Ve,
    re,
    n,
    l,
    p,
    w,
    M,
    I,
    z,
    L,
    J,
    i,
    a,
    he,
    me,
    Oe
  ];
}
class Dh extends v6 {
  constructor(e) {
    super(), _6(
      this,
      e,
      H6,
      R6,
      y6,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
/*! @license DOMPurify 3.2.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.1/LICENSE */
const {
  entries: xh,
  setPrototypeOf: Gu,
  isFrozen: P6,
  getPrototypeOf: q6,
  getOwnPropertyDescriptor: U6
} = Object;
let {
  freeze: at,
  seal: St,
  create: Ah
} = Object, {
  apply: xl,
  construct: Al
} = typeof Reflect < "u" && Reflect;
at || (at = function(e) {
  return e;
});
St || (St = function(e) {
  return e;
});
xl || (xl = function(e, t, n) {
  return e.apply(t, n);
});
Al || (Al = function(e, t) {
  return new e(...t);
});
const Jn = gt(Array.prototype.forEach), Vu = gt(Array.prototype.pop), Xr = gt(Array.prototype.push), ia = gt(String.prototype.toLowerCase), Pi = gt(String.prototype.toString), ju = gt(String.prototype.match), $r = gt(String.prototype.replace), G6 = gt(String.prototype.indexOf), V6 = gt(String.prototype.trim), Bt = gt(Object.prototype.hasOwnProperty), et = gt(RegExp.prototype.test), Yr = j6(TypeError);
function gt(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      n[a - 1] = arguments[a];
    return xl(r, e, n);
  };
}
function j6(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Al(r, t);
  };
}
function ae(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ia;
  Gu && Gu(r, null);
  let n = e.length;
  for (; n--; ) {
    let a = e[n];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (P6(e) || (e[n] = i), a = i);
    }
    r[a] = !0;
  }
  return r;
}
function W6(r) {
  for (let e = 0; e < r.length; e++)
    Bt(r, e) || (r[e] = null);
  return r;
}
function z0(r) {
  const e = Ah(null);
  for (const [t, n] of xh(r))
    Bt(r, t) && (Array.isArray(n) ? e[t] = W6(n) : n && typeof n == "object" && n.constructor === Object ? e[t] = z0(n) : e[t] = n);
  return e;
}
function Zr(r, e) {
  for (; r !== null; ) {
    const n = U6(r, e);
    if (n) {
      if (n.get)
        return gt(n.get);
      if (typeof n.value == "function")
        return gt(n.value);
    }
    r = q6(r);
  }
  function t() {
    return null;
  }
  return t;
}
const Wu = at(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), qi = at(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ui = at(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), X6 = at(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Gi = at(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $6 = at(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xu = at(["#text"]), $u = at(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Vi = at(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yu = at(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Kn = at(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Y6 = St(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Z6 = St(/<%[\w\W]*|[\w\W]*%>/gm), Q6 = St(/\${[\w\W]*}/gm), J6 = St(/^data-[\-\w.\u00B7-\uFFFF]/), K6 = St(/^aria-[\-\w]+$/), Eh = St(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ep = St(/^(?:\w+script|data):/i), tp = St(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Sh = St(/^html$/i), rp = St(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Zu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: K6,
  ATTR_WHITESPACE: tp,
  CUSTOM_ELEMENT: rp,
  DATA_ATTR: J6,
  DOCTYPE_NAME: Sh,
  ERB_EXPR: Z6,
  IS_ALLOWED_URI: Eh,
  IS_SCRIPT_OR_DATA: ep,
  MUSTACHE_EXPR: Y6,
  TMPLIT_EXPR: Q6
});
const Qr = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, np = function() {
  return typeof window > "u" ? null : window;
}, ap = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (n = t.getAttribute(a));
  const i = "dompurify" + (n ? "#" + n : "");
  try {
    return e.createPolicy(i, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Fh() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : np();
  const e = (W) => Fh(W);
  if (e.version = "3.2.1", e.removed = [], !r || !r.document || r.document.nodeType !== Qr.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = r;
  const n = t, a = n.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: s,
    Element: o,
    NodeFilter: u,
    NamedNodeMap: h = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: m,
    DOMParser: p,
    trustedTypes: g
  } = r, v = o.prototype, w = Zr(v, "cloneNode"), T = Zr(v, "remove"), S = Zr(v, "nextSibling"), D = Zr(v, "childNodes"), _ = Zr(v, "parentNode");
  if (typeof l == "function") {
    const W = t.createElement("template");
    W.content && W.content.ownerDocument && (t = W.content.ownerDocument);
  }
  let A, F = "";
  const {
    implementation: M,
    createNodeIterator: B,
    createDocumentFragment: U,
    getElementsByTagName: I
  } = t, {
    importNode: z
  } = n;
  let L = {};
  e.isSupported = typeof xh == "function" && typeof _ == "function" && M && M.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: J,
    ERB_EXPR: Le,
    TMPLIT_EXPR: se,
    DATA_ATTR: xe,
    ARIA_ATTR: Ae,
    IS_SCRIPT_OR_DATA: Ve,
    ATTR_WHITESPACE: fe,
    CUSTOM_ELEMENT: ye
  } = Zu;
  let {
    IS_ALLOWED_URI: Ee
  } = Zu, re = null;
  const he = ae({}, [...Wu, ...qi, ...Ui, ...Gi, ...Xu]);
  let me = null;
  const Oe = ae({}, [...$u, ...Vi, ...Yu, ...Kn]);
  let P = Object.seal(Ah(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ze = null, Pe = null, Qe = !0, ht = !0, ft = !1, R = !0, ne = !1, ge = !0, ve = !1, je = !1, lr = !1, Ht = !1, r0 = !1, n0 = !1, cs = !0, hs = !1;
  const zh = "user-content-";
  let Xa = !0, Hr = !1, sr = {}, or = null;
  const fs = ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ms = null;
  const ds = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let $a = null;
  const ps = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xn = "http://www.w3.org/1998/Math/MathML", An = "http://www.w3.org/2000/svg", a0 = "http://www.w3.org/1999/xhtml";
  let ur = a0, Ya = !1, Za = null;
  const Rh = ae({}, [xn, An, a0], Pi);
  let En = ae({}, ["mi", "mo", "mn", "ms", "mtext"]), Sn = ae({}, ["annotation-xml"]);
  const Lh = ae({}, ["title", "style", "font", "a", "script"]);
  let Pr = null;
  const Oh = ["application/xhtml+xml", "text/html"], Hh = "text/html";
  let He = null, cr = null;
  const Ph = t.createElement("form"), gs = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, Qa = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(cr && cr === E)) {
      if ((!E || typeof E != "object") && (E = {}), E = z0(E), Pr = // eslint-disable-next-line unicorn/prefer-includes
      Oh.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? Hh : E.PARSER_MEDIA_TYPE, He = Pr === "application/xhtml+xml" ? Pi : ia, re = Bt(E, "ALLOWED_TAGS") ? ae({}, E.ALLOWED_TAGS, He) : he, me = Bt(E, "ALLOWED_ATTR") ? ae({}, E.ALLOWED_ATTR, He) : Oe, Za = Bt(E, "ALLOWED_NAMESPACES") ? ae({}, E.ALLOWED_NAMESPACES, Pi) : Rh, $a = Bt(E, "ADD_URI_SAFE_ATTR") ? ae(z0(ps), E.ADD_URI_SAFE_ATTR, He) : ps, ms = Bt(E, "ADD_DATA_URI_TAGS") ? ae(z0(ds), E.ADD_DATA_URI_TAGS, He) : ds, or = Bt(E, "FORBID_CONTENTS") ? ae({}, E.FORBID_CONTENTS, He) : fs, Ze = Bt(E, "FORBID_TAGS") ? ae({}, E.FORBID_TAGS, He) : {}, Pe = Bt(E, "FORBID_ATTR") ? ae({}, E.FORBID_ATTR, He) : {}, sr = Bt(E, "USE_PROFILES") ? E.USE_PROFILES : !1, Qe = E.ALLOW_ARIA_ATTR !== !1, ht = E.ALLOW_DATA_ATTR !== !1, ft = E.ALLOW_UNKNOWN_PROTOCOLS || !1, R = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = E.SAFE_FOR_TEMPLATES || !1, ge = E.SAFE_FOR_XML !== !1, ve = E.WHOLE_DOCUMENT || !1, Ht = E.RETURN_DOM || !1, r0 = E.RETURN_DOM_FRAGMENT || !1, n0 = E.RETURN_TRUSTED_TYPE || !1, lr = E.FORCE_BODY || !1, cs = E.SANITIZE_DOM !== !1, hs = E.SANITIZE_NAMED_PROPS || !1, Xa = E.KEEP_CONTENT !== !1, Hr = E.IN_PLACE || !1, Ee = E.ALLOWED_URI_REGEXP || Eh, ur = E.NAMESPACE || a0, En = E.MATHML_TEXT_INTEGRATION_POINTS || En, Sn = E.HTML_INTEGRATION_POINTS || Sn, P = E.CUSTOM_ELEMENT_HANDLING || {}, E.CUSTOM_ELEMENT_HANDLING && gs(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = E.CUSTOM_ELEMENT_HANDLING.tagNameCheck), E.CUSTOM_ELEMENT_HANDLING && gs(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), E.CUSTOM_ELEMENT_HANDLING && typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (ht = !1), r0 && (Ht = !0), sr && (re = ae({}, Xu), me = [], sr.html === !0 && (ae(re, Wu), ae(me, $u)), sr.svg === !0 && (ae(re, qi), ae(me, Vi), ae(me, Kn)), sr.svgFilters === !0 && (ae(re, Ui), ae(me, Vi), ae(me, Kn)), sr.mathMl === !0 && (ae(re, Gi), ae(me, Yu), ae(me, Kn))), E.ADD_TAGS && (re === he && (re = z0(re)), ae(re, E.ADD_TAGS, He)), E.ADD_ATTR && (me === Oe && (me = z0(me)), ae(me, E.ADD_ATTR, He)), E.ADD_URI_SAFE_ATTR && ae($a, E.ADD_URI_SAFE_ATTR, He), E.FORBID_CONTENTS && (or === fs && (or = z0(or)), ae(or, E.FORBID_CONTENTS, He)), Xa && (re["#text"] = !0), ve && ae(re, ["html", "head", "body"]), re.table && (ae(re, ["tbody"]), delete Ze.tbody), E.TRUSTED_TYPES_POLICY) {
        if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Yr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Yr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        A = E.TRUSTED_TYPES_POLICY, F = A.createHTML("");
      } else
        A === void 0 && (A = ap(g, a)), A !== null && typeof F == "string" && (F = A.createHTML(""));
      at && at(E), cr = E;
    }
  }, bs = ae({}, [...qi, ...Ui, ...X6]), vs = ae({}, [...Gi, ...$6]), qh = function(E) {
    let H = _(E);
    (!H || !H.tagName) && (H = {
      namespaceURI: ur,
      tagName: "template"
    });
    const j = ia(E.tagName), we = ia(H.tagName);
    return Za[E.namespaceURI] ? E.namespaceURI === An ? H.namespaceURI === a0 ? j === "svg" : H.namespaceURI === xn ? j === "svg" && (we === "annotation-xml" || En[we]) : !!bs[j] : E.namespaceURI === xn ? H.namespaceURI === a0 ? j === "math" : H.namespaceURI === An ? j === "math" && Sn[we] : !!vs[j] : E.namespaceURI === a0 ? H.namespaceURI === An && !Sn[we] || H.namespaceURI === xn && !En[we] ? !1 : !vs[j] && (Lh[j] || !bs[j]) : !!(Pr === "application/xhtml+xml" && Za[E.namespaceURI]) : !1;
  }, Pt = function(E) {
    Xr(e.removed, {
      element: E
    });
    try {
      _(E).removeChild(E);
    } catch {
      T(E);
    }
  }, Fn = function(E, H) {
    try {
      Xr(e.removed, {
        attribute: H.getAttributeNode(E),
        from: H
      });
    } catch {
      Xr(e.removed, {
        attribute: null,
        from: H
      });
    }
    if (H.removeAttribute(E), E === "is" && !me[E])
      if (Ht || r0)
        try {
          Pt(H);
        } catch {
        }
      else
        try {
          H.setAttribute(E, "");
        } catch {
        }
  }, _s = function(E) {
    let H = null, j = null;
    if (lr)
      E = "<remove></remove>" + E;
    else {
      const qe = ju(E, /^[\r\n\t ]+/);
      j = qe && qe[0];
    }
    Pr === "application/xhtml+xml" && ur === a0 && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const we = A ? A.createHTML(E) : E;
    if (ur === a0)
      try {
        H = new p().parseFromString(we, Pr);
      } catch {
      }
    if (!H || !H.documentElement) {
      H = M.createDocument(ur, "template", null);
      try {
        H.documentElement.innerHTML = Ya ? F : we;
      } catch {
      }
    }
    const We = H.body || H.documentElement;
    return E && j && We.insertBefore(t.createTextNode(j), We.childNodes[0] || null), ur === a0 ? I.call(H, ve ? "html" : "body")[0] : ve ? H.documentElement : We;
  }, ys = function(E) {
    return B.call(
      E.ownerDocument || E,
      E,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, ws = function(E) {
    return E instanceof m && (typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || !(E.attributes instanceof h) || typeof E.removeAttribute != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function");
  }, ks = function(E) {
    return typeof s == "function" && E instanceof s;
  };
  function i0(W, E, H) {
    L[W] && Jn(L[W], (j) => {
      j.call(e, E, H, cr);
    });
  }
  const Ds = function(E) {
    let H = null;
    if (i0("beforeSanitizeElements", E, null), ws(E))
      return Pt(E), !0;
    const j = He(E.nodeName);
    if (i0("uponSanitizeElement", E, {
      tagName: j,
      allowedTags: re
    }), E.hasChildNodes() && !ks(E.firstElementChild) && et(/<[/\w]/g, E.innerHTML) && et(/<[/\w]/g, E.textContent) || E.nodeType === Qr.progressingInstruction || ge && E.nodeType === Qr.comment && et(/<[/\w]/g, E.data))
      return Pt(E), !0;
    if (!re[j] || Ze[j]) {
      if (!Ze[j] && As(j) && (P.tagNameCheck instanceof RegExp && et(P.tagNameCheck, j) || P.tagNameCheck instanceof Function && P.tagNameCheck(j)))
        return !1;
      if (Xa && !or[j]) {
        const we = _(E) || E.parentNode, We = D(E) || E.childNodes;
        if (We && we) {
          const qe = We.length;
          for (let lt = qe - 1; lt >= 0; --lt) {
            const qt = w(We[lt], !0);
            qt.__removalCount = (E.__removalCount || 0) + 1, we.insertBefore(qt, S(E));
          }
        }
      }
      return Pt(E), !0;
    }
    return E instanceof o && !qh(E) || (j === "noscript" || j === "noembed" || j === "noframes") && et(/<\/no(script|embed|frames)/i, E.innerHTML) ? (Pt(E), !0) : (ne && E.nodeType === Qr.text && (H = E.textContent, Jn([J, Le, se], (we) => {
      H = $r(H, we, " ");
    }), E.textContent !== H && (Xr(e.removed, {
      element: E.cloneNode()
    }), E.textContent = H)), i0("afterSanitizeElements", E, null), !1);
  }, xs = function(E, H, j) {
    if (cs && (H === "id" || H === "name") && (j in t || j in Ph))
      return !1;
    if (!(ht && !Pe[H] && et(xe, H))) {
      if (!(Qe && et(Ae, H))) {
        if (!me[H] || Pe[H]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(As(E) && (P.tagNameCheck instanceof RegExp && et(P.tagNameCheck, E) || P.tagNameCheck instanceof Function && P.tagNameCheck(E)) && (P.attributeNameCheck instanceof RegExp && et(P.attributeNameCheck, H) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(H)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            H === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && et(P.tagNameCheck, j) || P.tagNameCheck instanceof Function && P.tagNameCheck(j)))
          ) return !1;
        } else if (!$a[H]) {
          if (!et(Ee, $r(j, fe, ""))) {
            if (!((H === "src" || H === "xlink:href" || H === "href") && E !== "script" && G6(j, "data:") === 0 && ms[E])) {
              if (!(ft && !et(Ve, $r(j, fe, "")))) {
                if (j)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, As = function(E) {
    return E !== "annotation-xml" && ju(E, ye);
  }, Es = function(E) {
    i0("beforeSanitizeAttributes", E, null);
    const {
      attributes: H
    } = E;
    if (!H)
      return;
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let we = H.length;
    for (; we--; ) {
      const We = H[we], {
        name: qe,
        namespaceURI: lt,
        value: qt
      } = We, qr = He(qe);
      let Je = qe === "value" ? qt : V6(qt);
      if (j.attrName = qr, j.attrValue = Je, j.keepAttr = !0, j.forceKeepAttr = void 0, i0("uponSanitizeAttribute", E, j), Je = j.attrValue, hs && (qr === "id" || qr === "name") && (Fn(qe, E), Je = zh + Je), ge && et(/((--!?|])>)|<\/(style|title)/i, Je)) {
        Fn(qe, E);
        continue;
      }
      if (j.forceKeepAttr || (Fn(qe, E), !j.keepAttr))
        continue;
      if (!R && et(/\/>/i, Je)) {
        Fn(qe, E);
        continue;
      }
      ne && Jn([J, Le, se], (Fs) => {
        Je = $r(Je, Fs, " ");
      });
      const Ss = He(E.nodeName);
      if (xs(Ss, qr, Je)) {
        if (A && typeof g == "object" && typeof g.getAttributeType == "function" && !lt)
          switch (g.getAttributeType(Ss, qr)) {
            case "TrustedHTML": {
              Je = A.createHTML(Je);
              break;
            }
            case "TrustedScriptURL": {
              Je = A.createScriptURL(Je);
              break;
            }
          }
        try {
          lt ? E.setAttributeNS(lt, qe, Je) : E.setAttribute(qe, Je), ws(E) ? Pt(E) : Vu(e.removed);
        } catch {
        }
      }
    }
    i0("afterSanitizeAttributes", E, null);
  }, Uh = function W(E) {
    let H = null;
    const j = ys(E);
    for (i0("beforeSanitizeShadowDOM", E, null); H = j.nextNode(); )
      i0("uponSanitizeShadowNode", H, null), !Ds(H) && (H.content instanceof i && W(H.content), Es(H));
    i0("afterSanitizeShadowDOM", E, null);
  };
  return e.sanitize = function(W) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, H = null, j = null, we = null, We = null;
    if (Ya = !W, Ya && (W = "<!-->"), typeof W != "string" && !ks(W))
      if (typeof W.toString == "function") {
        if (W = W.toString(), typeof W != "string")
          throw Yr("dirty is not a string, aborting");
      } else
        throw Yr("toString is not a function");
    if (!e.isSupported)
      return W;
    if (je || Qa(E), e.removed = [], typeof W == "string" && (Hr = !1), Hr) {
      if (W.nodeName) {
        const qt = He(W.nodeName);
        if (!re[qt] || Ze[qt])
          throw Yr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (W instanceof s)
      H = _s("<!---->"), j = H.ownerDocument.importNode(W, !0), j.nodeType === Qr.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? H = j : H.appendChild(j);
    else {
      if (!Ht && !ne && !ve && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return A && n0 ? A.createHTML(W) : W;
      if (H = _s(W), !H)
        return Ht ? null : n0 ? F : "";
    }
    H && lr && Pt(H.firstChild);
    const qe = ys(Hr ? W : H);
    for (; we = qe.nextNode(); )
      Ds(we) || (we.content instanceof i && Uh(we.content), Es(we));
    if (Hr)
      return W;
    if (Ht) {
      if (r0)
        for (We = U.call(H.ownerDocument); H.firstChild; )
          We.appendChild(H.firstChild);
      else
        We = H;
      return (me.shadowroot || me.shadowrootmode) && (We = z.call(n, We, !0)), We;
    }
    let lt = ve ? H.outerHTML : H.innerHTML;
    return ve && re["!doctype"] && H.ownerDocument && H.ownerDocument.doctype && H.ownerDocument.doctype.name && et(Sh, H.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + H.ownerDocument.doctype.name + `>
` + lt), ne && Jn([J, Le, se], (qt) => {
      lt = $r(lt, qt, " ");
    }), A && n0 ? A.createHTML(lt) : lt;
  }, e.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qa(W), je = !0;
  }, e.clearConfig = function() {
    cr = null, je = !1;
  }, e.isValidAttribute = function(W, E, H) {
    cr || Qa({});
    const j = He(W), we = He(E);
    return xs(j, we, H);
  }, e.addHook = function(W, E) {
    typeof E == "function" && (L[W] = L[W] || [], Xr(L[W], E));
  }, e.removeHook = function(W) {
    if (L[W])
      return Vu(L[W]);
  }, e.removeHooks = function(W) {
    L[W] && (L[W] = []);
  }, e.removeAllHooks = function() {
    L = {};
  }, e;
}
Fh();
const {
  SvelteComponent: ip,
  append_hydration: lp,
  attr: Jr,
  children: sp,
  claim_element: Qu,
  detach: El,
  element: Ju,
  empty: Ku,
  init: op,
  insert_hydration: Th,
  noop: e1,
  safe_not_equal: up,
  src_url_equal: t1,
  toggle_class: br
} = window.__gradio__svelte__internal;
function r1(r) {
  let e, t, n;
  return {
    c() {
      e = Ju("div"), t = Ju("img"), this.h();
    },
    l(a) {
      e = Qu(a, "DIV", { class: !0 });
      var i = sp(e);
      t = Qu(i, "IMG", { src: !0, alt: !0, class: !0 }), i.forEach(El), this.h();
    },
    h() {
      t1(t.src, n = /*value*/
      r[0].url) || Jr(t, "src", n), Jr(t, "alt", ""), Jr(t, "class", "svelte-giydt1"), Jr(e, "class", "container svelte-giydt1"), br(
        e,
        "table",
        /*type*/
        r[1] === "table"
      ), br(
        e,
        "gallery",
        /*type*/
        r[1] === "gallery"
      ), br(
        e,
        "selected",
        /*selected*/
        r[2]
      );
    },
    m(a, i) {
      Th(a, e, i), lp(e, t);
    },
    p(a, i) {
      i & /*value*/
      1 && !t1(t.src, n = /*value*/
      a[0].url) && Jr(t, "src", n), i & /*type*/
      2 && br(
        e,
        "table",
        /*type*/
        a[1] === "table"
      ), i & /*type*/
      2 && br(
        e,
        "gallery",
        /*type*/
        a[1] === "gallery"
      ), i & /*selected*/
      4 && br(
        e,
        "selected",
        /*selected*/
        a[2]
      );
    },
    d(a) {
      a && El(e);
    }
  };
}
function cp(r) {
  let e, t = (
    /*value*/
    r[0] && r1(r)
  );
  return {
    c() {
      t && t.c(), e = Ku();
    },
    l(n) {
      t && t.l(n), e = Ku();
    },
    m(n, a) {
      t && t.m(n, a), Th(n, e, a);
    },
    p(n, [a]) {
      /*value*/
      n[0] ? t ? t.p(n, a) : (t = r1(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: e1,
    o: e1,
    d(n) {
      n && El(e), t && t.d(n);
    }
  };
}
function hp(r, e, t) {
  let { value: n } = e, { type: a } = e, { selected: i = !1 } = e;
  return r.$$set = (l) => {
    "value" in l && t(0, n = l.value), "type" in l && t(1, a = l.type), "selected" in l && t(2, i = l.selected);
  }, [n, a, i];
}
class Np extends ip {
  constructor(e) {
    super(), op(this, e, hp, cp, up, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: fp,
  add_flush_callback: mp,
  assign: Ch,
  bind: dp,
  binding_callbacks: pp,
  check_outros: gp,
  claim_component: J0,
  claim_space: Mh,
  create_component: K0,
  destroy_component: er,
  detach: os,
  empty: n1,
  flush: tt,
  get_spread_object: Bh,
  get_spread_update: Nh,
  group_outros: bp,
  init: vp,
  insert_hydration: us,
  mount_component: tr,
  safe_not_equal: _p,
  space: Ih,
  transition_in: d0,
  transition_out: p0
} = window.__gradio__svelte__internal;
function yp(r) {
  let e, t;
  return e = new l1({
    props: {
      visible: (
        /*visible*/
        r[3]
      ),
      variant: (
        /*value*/
        r[0] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        r[15] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        r[1]
      ),
      elem_classes: (
        /*elem_classes*/
        r[2]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        r[7]
      ),
      scale: (
        /*scale*/
        r[8]
      ),
      min_width: (
        /*min_width*/
        r[9]
      ),
      $$slots: { default: [Dp] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      K0(e.$$.fragment);
    },
    l(n) {
      J0(e.$$.fragment, n);
    },
    m(n, a) {
      tr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*visible*/
      8 && (i.visible = /*visible*/
      n[3]), a & /*value*/
      1 && (i.variant = /*value*/
      n[0] === null ? "dashed" : "solid"), a & /*dragging*/
      32768 && (i.border_mode = /*dragging*/
      n[15] ? "focus" : "base"), a & /*elem_id*/
      2 && (i.elem_id = /*elem_id*/
      n[1]), a & /*elem_classes*/
      4 && (i.elem_classes = /*elem_classes*/
      n[2]), a & /*container*/
      128 && (i.container = /*container*/
      n[7]), a & /*scale*/
      256 && (i.scale = /*scale*/
      n[8]), a & /*min_width*/
      512 && (i.min_width = /*min_width*/
      n[9]), a & /*$$scope, gradio, root, label, show_label, value, dragging, placeholder, loading_status*/
      16839729 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (d0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function wp(r) {
  let e, t;
  return e = new l1({
    props: {
      visible: (
        /*visible*/
        r[3]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        r[15] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        r[1]
      ),
      elem_classes: (
        /*elem_classes*/
        r[2]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        r[7]
      ),
      scale: (
        /*scale*/
        r[8]
      ),
      min_width: (
        /*min_width*/
        r[9]
      ),
      $$slots: { default: [xp] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      K0(e.$$.fragment);
    },
    l(n) {
      J0(e.$$.fragment, n);
    },
    m(n, a) {
      tr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*visible*/
      8 && (i.visible = /*visible*/
      n[3]), a & /*dragging*/
      32768 && (i.border_mode = /*dragging*/
      n[15] ? "focus" : "base"), a & /*elem_id*/
      2 && (i.elem_id = /*elem_id*/
      n[1]), a & /*elem_classes*/
      4 && (i.elem_classes = /*elem_classes*/
      n[2]), a & /*container*/
      128 && (i.container = /*container*/
      n[7]), a & /*scale*/
      256 && (i.scale = /*scale*/
      n[8]), a & /*min_width*/
      512 && (i.min_width = /*min_width*/
      n[9]), a & /*$$scope, value, label, show_label, show_download_button, gradio, loading_status*/
      16794737 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (d0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function kp(r) {
  let e, t;
  return e = new kd({
    props: {
      i18n: (
        /*gradio*/
        r[14].i18n
      ),
      type: "image",
      placeholder: (
        /*placeholder*/
        r[13]
      )
    }
  }), {
    c() {
      K0(e.$$.fragment);
    },
    l(n) {
      J0(e.$$.fragment, n);
    },
    m(n, a) {
      tr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*gradio*/
      16384 && (i.i18n = /*gradio*/
      n[14].i18n), a & /*placeholder*/
      8192 && (i.placeholder = /*placeholder*/
      n[13]), e.$set(i);
    },
    i(n) {
      t || (d0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function Dp(r) {
  let e, t, n, a, i;
  const l = [
    {
      autoscroll: (
        /*gradio*/
        r[14].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      r[14].i18n
    ) },
    /*loading_status*/
    r[10]
  ];
  let s = {};
  for (let h = 0; h < l.length; h += 1)
    s = Ch(s, l[h]);
  e = new Dh({ props: s }), e.$on(
    "clear_status",
    /*clear_status_handler_1*/
    r[17]
  );
  function o(h) {
    r[20](h);
  }
  let u = {
    upload: (
      /*func*/
      r[18]
    ),
    stream_handler: (
      /*func_1*/
      r[19]
    ),
    root: (
      /*root*/
      r[12]
    ),
    label: (
      /*label*/
      r[4]
    ),
    show_label: (
      /*show_label*/
      r[5]
    ),
    $$slots: { default: [kp] },
    $$scope: { ctx: r }
  };
  return (
    /*value*/
    r[0] !== void 0 && (u.value = /*value*/
    r[0]), n = new s6({ props: u }), pp.push(() => dp(n, "value", o)), n.$on(
      "clear",
      /*clear_handler*/
      r[21]
    ), n.$on(
      "drag",
      /*drag_handler*/
      r[22]
    ), n.$on(
      "upload",
      /*upload_handler*/
      r[23]
    ), {
      c() {
        K0(e.$$.fragment), t = Ih(), K0(n.$$.fragment);
      },
      l(h) {
        J0(e.$$.fragment, h), t = Mh(h), J0(n.$$.fragment, h);
      },
      m(h, m) {
        tr(e, h, m), us(h, t, m), tr(n, h, m), i = !0;
      },
      p(h, m) {
        const p = m & /*gradio, loading_status*/
        17408 ? Nh(l, [
          m & /*gradio*/
          16384 && {
            autoscroll: (
              /*gradio*/
              h[14].autoscroll
            )
          },
          m & /*gradio*/
          16384 && { i18n: (
            /*gradio*/
            h[14].i18n
          ) },
          m & /*loading_status*/
          1024 && Bh(
            /*loading_status*/
            h[10]
          )
        ]) : {};
        e.$set(p);
        const g = {};
        m & /*gradio*/
        16384 && (g.upload = /*func*/
        h[18]), m & /*gradio*/
        16384 && (g.stream_handler = /*func_1*/
        h[19]), m & /*root*/
        4096 && (g.root = /*root*/
        h[12]), m & /*label*/
        16 && (g.label = /*label*/
        h[4]), m & /*show_label*/
        32 && (g.show_label = /*show_label*/
        h[5]), m & /*$$scope, gradio, placeholder*/
        16801792 && (g.$$scope = { dirty: m, ctx: h }), !a && m & /*value*/
        1 && (a = !0, g.value = /*value*/
        h[0], mp(() => a = !1)), n.$set(g);
      },
      i(h) {
        i || (d0(e.$$.fragment, h), d0(n.$$.fragment, h), i = !0);
      },
      o(h) {
        p0(e.$$.fragment, h), p0(n.$$.fragment, h), i = !1;
      },
      d(h) {
        h && os(t), er(e, h), er(n, h);
      }
    }
  );
}
function xp(r) {
  let e, t, n, a;
  const i = [
    {
      autoscroll: (
        /*gradio*/
        r[14].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      r[14].i18n
    ) },
    /*loading_status*/
    r[10]
  ];
  let l = {};
  for (let s = 0; s < i.length; s += 1)
    l = Ch(l, i[s]);
  return e = new Dh({ props: l }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    r[16]
  ), n = new g5({
    props: {
      value: (
        /*value*/
        r[0]
      ),
      label: (
        /*label*/
        r[4]
      ),
      show_label: (
        /*show_label*/
        r[5]
      ),
      show_download_button: (
        /*show_download_button*/
        r[6]
      ),
      i18n: (
        /*gradio*/
        r[14].i18n
      )
    }
  }), {
    c() {
      K0(e.$$.fragment), t = Ih(), K0(n.$$.fragment);
    },
    l(s) {
      J0(e.$$.fragment, s), t = Mh(s), J0(n.$$.fragment, s);
    },
    m(s, o) {
      tr(e, s, o), us(s, t, o), tr(n, s, o), a = !0;
    },
    p(s, o) {
      const u = o & /*gradio, loading_status*/
      17408 ? Nh(i, [
        o & /*gradio*/
        16384 && {
          autoscroll: (
            /*gradio*/
            s[14].autoscroll
          )
        },
        o & /*gradio*/
        16384 && { i18n: (
          /*gradio*/
          s[14].i18n
        ) },
        o & /*loading_status*/
        1024 && Bh(
          /*loading_status*/
          s[10]
        )
      ]) : {};
      e.$set(u);
      const h = {};
      o & /*value*/
      1 && (h.value = /*value*/
      s[0]), o & /*label*/
      16 && (h.label = /*label*/
      s[4]), o & /*show_label*/
      32 && (h.show_label = /*show_label*/
      s[5]), o & /*show_download_button*/
      64 && (h.show_download_button = /*show_download_button*/
      s[6]), o & /*gradio*/
      16384 && (h.i18n = /*gradio*/
      s[14].i18n), n.$set(h);
    },
    i(s) {
      a || (d0(e.$$.fragment, s), d0(n.$$.fragment, s), a = !0);
    },
    o(s) {
      p0(e.$$.fragment, s), p0(n.$$.fragment, s), a = !1;
    },
    d(s) {
      s && os(t), er(e, s), er(n, s);
    }
  };
}
function Ap(r) {
  let e, t, n, a;
  const i = [wp, yp], l = [];
  function s(o, u) {
    return (
      /*interactive*/
      o[11] ? 1 : 0
    );
  }
  return e = s(r), t = l[e] = i[e](r), {
    c() {
      t.c(), n = n1();
    },
    l(o) {
      t.l(o), n = n1();
    },
    m(o, u) {
      l[e].m(o, u), us(o, n, u), a = !0;
    },
    p(o, [u]) {
      let h = e;
      e = s(o), e === h ? l[e].p(o, u) : (bp(), p0(l[h], 1, 1, () => {
        l[h] = null;
      }), gp(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), d0(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      a || (d0(t), a = !0);
    },
    o(o) {
      p0(t), a = !1;
    },
    d(o) {
      o && os(n), l[e].d(o);
    }
  };
}
function Ep(r, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { value: l = null } = e, { label: s } = e, { show_label: o } = e, { show_download_button: u } = e, { container: h = !0 } = e, { scale: m = null } = e, { min_width: p = void 0 } = e, { loading_status: g } = e, { interactive: v } = e, { root: w } = e, { placeholder: T = void 0 } = e, { gradio: S } = e, D;
  const _ = () => S.dispatch("clear_status", g), A = () => S.dispatch("clear_status", g), F = (...L) => S.client.upload(...L), M = (...L) => S.client.stream(...L);
  function B(L) {
    l = L, t(0, l);
  }
  const U = () => S.dispatch("clear"), I = ({ detail: L }) => t(15, D = L), z = () => S.dispatch("upload");
  return r.$$set = (L) => {
    "elem_id" in L && t(1, n = L.elem_id), "elem_classes" in L && t(2, a = L.elem_classes), "visible" in L && t(3, i = L.visible), "value" in L && t(0, l = L.value), "label" in L && t(4, s = L.label), "show_label" in L && t(5, o = L.show_label), "show_download_button" in L && t(6, u = L.show_download_button), "container" in L && t(7, h = L.container), "scale" in L && t(8, m = L.scale), "min_width" in L && t(9, p = L.min_width), "loading_status" in L && t(10, g = L.loading_status), "interactive" in L && t(11, v = L.interactive), "root" in L && t(12, w = L.root), "placeholder" in L && t(13, T = L.placeholder), "gradio" in L && t(14, S = L.gradio);
  }, r.$$.update = () => {
    r.$$.dirty & /*value, gradio*/
    16385 && S.dispatch("change");
  }, [
    l,
    n,
    a,
    i,
    s,
    o,
    u,
    h,
    m,
    p,
    g,
    v,
    w,
    T,
    S,
    D,
    _,
    A,
    F,
    M,
    B,
    U,
    I,
    z
  ];
}
class Ip extends fp {
  constructor(e) {
    super(), vp(this, e, Ep, Ap, _p, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      label: 4,
      show_label: 5,
      show_download_button: 6,
      container: 7,
      scale: 8,
      min_width: 9,
      loading_status: 10,
      interactive: 11,
      root: 12,
      placeholder: 13,
      gradio: 14
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), tt();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), tt();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(e) {
    this.$$set({ visible: e }), tt();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), tt();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(e) {
    this.$$set({ label: e }), tt();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), tt();
  }
  get show_download_button() {
    return this.$$.ctx[6];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), tt();
  }
  get container() {
    return this.$$.ctx[7];
  }
  set container(e) {
    this.$$set({ container: e }), tt();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(e) {
    this.$$set({ scale: e }), tt();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), tt();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), tt();
  }
  get interactive() {
    return this.$$.ctx[11];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), tt();
  }
  get root() {
    return this.$$.ctx[12];
  }
  set root(e) {
    this.$$set({ root: e }), tt();
  }
  get placeholder() {
    return this.$$.ctx[13];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), tt();
  }
  get gradio() {
    return this.$$.ctx[14];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), tt();
  }
}
export {
  Np as BaseExample,
  s6 as BaseImageUploader,
  g5 as BaseStaticImage,
  Ip as default
};
