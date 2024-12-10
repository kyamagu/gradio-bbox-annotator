var n4 = Object.defineProperty;
var Fo = (r) => {
  throw TypeError(r);
};
var a4 = (r, e, t) => e in r ? n4(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Se = (r, e, t) => a4(r, typeof e != "symbol" ? e + "" : e, t), Vi = (r, e, t) => e.has(r) || Fo("Cannot " + t);
var Wr = (r, e, t) => (Vi(r, e, "read from private field"), t ? t.call(r) : e.get(r)), ji = (r, e, t) => e.has(r) ? Fo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Co = (r, e, t, n) => (Vi(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), pa = (r, e, t) => (Vi(r, e, "access private method"), t);
const {
  SvelteComponent: i4,
  assign: l4,
  children: s4,
  claim_element: o4,
  create_slot: u4,
  detach: Mo,
  element: c4,
  get_all_dirty_from_scope: h4,
  get_slot_changes: f4,
  get_spread_update: m4,
  init: d4,
  insert_hydration: p4,
  safe_not_equal: g4,
  set_dynamic_element_data: Bo,
  set_style: lt,
  toggle_class: At,
  transition_in: Dc,
  transition_out: Ec,
  update_slot_base: b4
} = window.__gradio__svelte__internal;
function v4(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[22].default
  ), i = u4(
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
    s = l4(s, l[o]);
  return {
    c() {
      e = c4(
        /*tag*/
        r[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = o4(
        o,
        /*tag*/
        (r[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var u = s4(e);
      i && i.l(u), u.forEach(Mo), this.h();
    },
    h() {
      Bo(
        /*tag*/
        r[18]
      )(e, s), At(
        e,
        "hidden",
        /*visible*/
        r[13] === !1
      ), At(
        e,
        "padded",
        /*padding*/
        r[9]
      ), At(
        e,
        "flex",
        /*flex*/
        r[0]
      ), At(
        e,
        "border_focus",
        /*border_mode*/
        r[8] === "focus"
      ), At(
        e,
        "border_contrast",
        /*border_mode*/
        r[8] === "contrast"
      ), At(e, "hide-container", !/*explicit_call*/
      r[11] && !/*container*/
      r[12]), At(
        e,
        "auto-margin",
        /*scale*/
        r[16] === null
      ), lt(
        e,
        "height",
        /*get_dimension*/
        r[19](
          /*height*/
          r[1]
        )
      ), lt(
        e,
        "min-height",
        /*get_dimension*/
        r[19](
          /*min_height*/
          r[2]
        )
      ), lt(
        e,
        "max-height",
        /*get_dimension*/
        r[19](
          /*max_height*/
          r[3]
        )
      ), lt(e, "width", typeof /*width*/
      r[4] == "number" ? `calc(min(${/*width*/
      r[4]}px, 100%))` : (
        /*get_dimension*/
        r[19](
          /*width*/
          r[4]
        )
      )), lt(
        e,
        "border-style",
        /*variant*/
        r[7]
      ), lt(
        e,
        "overflow",
        /*allow_overflow*/
        r[14] ? (
          /*overflow_behavior*/
          r[15]
        ) : "hidden"
      ), lt(
        e,
        "flex-grow",
        /*scale*/
        r[16]
      ), lt(e, "min-width", `calc(min(${/*min_width*/
      r[17]}px, 100%))`), lt(e, "border-width", "var(--block-border-width)");
    },
    m(o, u) {
      p4(o, e, u), i && i.m(e, null), n = !0;
    },
    p(o, u) {
      i && i.p && (!n || u & /*$$scope*/
      2097152) && b4(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        n ? f4(
          a,
          /*$$scope*/
          o[21],
          u,
          null
        ) : h4(
          /*$$scope*/
          o[21]
        ),
        null
      ), Bo(
        /*tag*/
        o[18]
      )(e, s = m4(l, [
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
      ])), At(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), At(
        e,
        "padded",
        /*padding*/
        o[9]
      ), At(
        e,
        "flex",
        /*flex*/
        o[0]
      ), At(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), At(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), At(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), At(
        e,
        "auto-margin",
        /*scale*/
        o[16] === null
      ), u & /*height*/
      2 && lt(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), u & /*min_height*/
      4 && lt(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), u & /*max_height*/
      8 && lt(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), u & /*width*/
      16 && lt(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), u & /*variant*/
      128 && lt(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), u & /*allow_overflow, overflow_behavior*/
      49152 && lt(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), u & /*scale*/
      65536 && lt(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), u & /*min_width*/
      131072 && lt(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      n || (Dc(i, o), n = !0);
    },
    o(o) {
      Ec(i, o), n = !1;
    },
    d(o) {
      o && Mo(e), i && i.d(o);
    }
  };
}
function _4(r) {
  let e, t = (
    /*tag*/
    r[18] && v4(r)
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
      e || (Dc(t, n), e = !0);
    },
    o(n) {
      Ec(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function y4(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: u = "" } = e, { elem_classes: c = [] } = e, { variant: m = "solid" } = e, { border_mode: g = "base" } = e, { padding: d = !0 } = e, { type: _ = "normal" } = e, { test_id: y = void 0 } = e, { explicit_call: E = !1 } = e, { container: A = !0 } = e, { visible: w = !0 } = e, { allow_overflow: v = !0 } = e, { overflow_behavior: x = "auto" } = e, { scale: C = null } = e, { min_width: N = 0 } = e, { flex: S = !1 } = e;
  w || (S = !1);
  let z = _ === "fieldset" ? "fieldset" : "div";
  const L = (R) => {
    if (R !== void 0) {
      if (typeof R == "number")
        return R + "px";
      if (typeof R == "string")
        return R;
    }
  };
  return r.$$set = (R) => {
    "height" in R && t(1, i = R.height), "min_height" in R && t(2, l = R.min_height), "max_height" in R && t(3, s = R.max_height), "width" in R && t(4, o = R.width), "elem_id" in R && t(5, u = R.elem_id), "elem_classes" in R && t(6, c = R.elem_classes), "variant" in R && t(7, m = R.variant), "border_mode" in R && t(8, g = R.border_mode), "padding" in R && t(9, d = R.padding), "type" in R && t(20, _ = R.type), "test_id" in R && t(10, y = R.test_id), "explicit_call" in R && t(11, E = R.explicit_call), "container" in R && t(12, A = R.container), "visible" in R && t(13, w = R.visible), "allow_overflow" in R && t(14, v = R.allow_overflow), "overflow_behavior" in R && t(15, x = R.overflow_behavior), "scale" in R && t(16, C = R.scale), "min_width" in R && t(17, N = R.min_width), "flex" in R && t(0, S = R.flex), "$$scope" in R && t(21, a = R.$$scope);
  }, [
    S,
    i,
    l,
    s,
    o,
    u,
    c,
    m,
    g,
    d,
    y,
    E,
    A,
    w,
    v,
    x,
    C,
    N,
    z,
    L,
    _,
    a,
    n
  ];
}
class Ac extends i4 {
  constructor(e) {
    super(), d4(this, e, y4, _4, g4, {
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
class xs {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new xs(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Ss {
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
    return new Ss(t, xs.range(this, e));
  }
}
class J {
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
      var c;
      i + 15 < s.length ? c = s.slice(i, i + 15) + "…" : c = s.slice(i), n += u + o + c;
    }
    var m = new Error(n);
    return m.name = "ParseError", m.__proto__ = J.prototype, m.position = a, a != null && i != null && (m.length = i - a), m.rawMessage = e, m;
  }
}
J.prototype.__proto__ = Error.prototype;
var w4 = function(e, t) {
  return e.indexOf(t) !== -1;
}, k4 = function(e, t) {
  return e === void 0 ? t : e;
}, D4 = /([A-Z])/g, E4 = function(e) {
  return e.replace(D4, "-$1").toLowerCase();
}, A4 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, x4 = /[&><"']/g;
function S4(r) {
  return String(r).replace(x4, (e) => A4[e]);
}
var xc = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, T4 = function(e) {
  var t = xc(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, F4 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, C4 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ee = {
  contains: w4,
  deflt: k4,
  escape: S4,
  hyphenate: E4,
  getBaseElem: xc,
  isCharacterBox: T4,
  protocolFromUrl: C4
};
class O0 {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return s0[M4[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return s0[B4[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return s0[N4[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return s0[I4[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return s0[z4[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return s0[L4[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Ts = 0, Ja = 1, rn = 2, B0 = 3, Un = 4, Ot = 5, an = 6, wt = 7, s0 = [new O0(Ts, 0, !1), new O0(Ja, 0, !0), new O0(rn, 1, !1), new O0(B0, 1, !0), new O0(Un, 2, !1), new O0(Ot, 2, !0), new O0(an, 3, !1), new O0(wt, 3, !0)], M4 = [Un, Ot, Un, Ot, an, wt, an, wt], B4 = [Ot, Ot, Ot, Ot, wt, wt, wt, wt], N4 = [rn, B0, Un, Ot, an, wt, an, wt], I4 = [B0, B0, Ot, Ot, wt, wt, wt, wt], z4 = [Ja, Ja, B0, B0, Ot, Ot, wt, wt], L4 = [Ts, Ja, rn, B0, rn, B0, rn, B0], re = {
  DISPLAY: s0[Ts],
  TEXT: s0[rn],
  SCRIPT: s0[Un],
  SCRIPTSCRIPT: s0[an]
}, Gl = [{
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
function R4(r) {
  for (var e = 0; e < Gl.length; e++)
    for (var t = Gl[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var Ua = [];
Gl.forEach((r) => r.blocks.forEach((e) => Ua.push(...e)));
function O4(r) {
  for (var e = 0; e < Ua.length; e += 2)
    if (r >= Ua[e] && r <= Ua[e + 1])
      return !0;
  return !1;
}
var Xr = 80, H4 = function(e, t) {
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
}, P4 = function(e, t) {
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
}, q4 = function(e, t) {
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
}, U4 = function(e, t) {
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
}, G4 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, V4 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, j4 = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, W4 = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = H4(t, Xr);
      break;
    case "sqrtSize1":
      a = P4(t, Xr);
      break;
    case "sqrtSize2":
      a = q4(t, Xr);
      break;
    case "sqrtSize3":
      a = U4(t, Xr);
      break;
    case "sqrtSize4":
      a = G4(t, Xr);
      break;
    case "sqrtTall":
      a = j4(t, Xr, n);
  }
  return a;
}, X4 = function(e, t) {
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
}, No = {
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
}, Y4 = function(e, t) {
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
class na {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
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
var M0 = {
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
}, Io = {
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
function Fs(r, e, t) {
  if (!M0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = M0[e][n];
  if (!a && r[0] in Io && (n = Io[r[0]].charCodeAt(0), a = M0[e][n]), !a && t === "text" && O4(n) && (a = M0[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Vl = {
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
}, Z4 = {
  ex: !0,
  em: !0,
  mu: !0
}, $4 = function(e) {
  return typeof e != "string" && (e = e.unit), e in Vl || e in Z4 || e === "ex";
}, Ne = function(e, t) {
  var n;
  if (e.unit in Vl)
    n = Vl[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new J("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, j = function(e) {
  return +e.toFixed(4) + "em";
}, er = function(e) {
  return e.filter((t) => t).join(" ");
}, Sc = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Tc = function(e) {
  var t = document.createElement(e);
  t.className = er(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Fc = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ee.escape(er(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += ee.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + ee.escape(n) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + ee.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class Di {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Sc.call(this, e, n, a), this.children = t || [];
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
    return ee.contains(this.classes, e);
  }
  toNode() {
    return Tc.call(this, "span");
  }
  toMarkup() {
    return Fc.call(this, "span");
  }
}
class Cc {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Sc.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  toNode() {
    return Tc.call(this, "a");
  }
  toMarkup() {
    return Fc.call(this, "a");
  }
}
class Q4 {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ee.escape(this.src) + '"' + (' alt="' + ee.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += ee.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + ee.escape(t) + '"'), e += "'/>", e;
  }
}
var J4 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class d0 {
  constructor(e, t, n, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var u = R4(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = J4[this.text]);
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = j(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = er(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t = t || document.createElement("span"), t.style[n] = this.style[n]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += ee.escape(er(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += ee.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + ee.escape(n) + '"');
    var i = ee.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class tr {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ee.escape(this.attributes[t]) + '"');
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class wr {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", No[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ee.escape(this.alternate) + '"/>' : '<path d="' + ee.escape(No[this.pathName]) + '"/>';
  }
}
class zo {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ee.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Lo(r) {
  if (r instanceof d0)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function K4(r) {
  if (r instanceof Di)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var e2 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Ue = {
  math: {},
  text: {}
};
function h(r, e, t, n, a, i) {
  Ue[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (Ue[r][n] = Ue[r][a]);
}
var f = "math", H = "text", p = "main", k = "ams", Me = "accent-token", X = "bin", Dt = "close", pn = "inner", K = "mathord", Xe = "op-token", Nt = "open", Ei = "punct", D = "rel", R0 = "spacing", T = "textord";
h(f, p, D, "≡", "\\equiv", !0);
h(f, p, D, "≺", "\\prec", !0);
h(f, p, D, "≻", "\\succ", !0);
h(f, p, D, "∼", "\\sim", !0);
h(f, p, D, "⊥", "\\perp");
h(f, p, D, "⪯", "\\preceq", !0);
h(f, p, D, "⪰", "\\succeq", !0);
h(f, p, D, "≃", "\\simeq", !0);
h(f, p, D, "∣", "\\mid", !0);
h(f, p, D, "≪", "\\ll", !0);
h(f, p, D, "≫", "\\gg", !0);
h(f, p, D, "≍", "\\asymp", !0);
h(f, p, D, "∥", "\\parallel");
h(f, p, D, "⋈", "\\bowtie", !0);
h(f, p, D, "⌣", "\\smile", !0);
h(f, p, D, "⊑", "\\sqsubseteq", !0);
h(f, p, D, "⊒", "\\sqsupseteq", !0);
h(f, p, D, "≐", "\\doteq", !0);
h(f, p, D, "⌢", "\\frown", !0);
h(f, p, D, "∋", "\\ni", !0);
h(f, p, D, "∝", "\\propto", !0);
h(f, p, D, "⊢", "\\vdash", !0);
h(f, p, D, "⊣", "\\dashv", !0);
h(f, p, D, "∋", "\\owns");
h(f, p, Ei, ".", "\\ldotp");
h(f, p, Ei, "⋅", "\\cdotp");
h(f, p, T, "#", "\\#");
h(H, p, T, "#", "\\#");
h(f, p, T, "&", "\\&");
h(H, p, T, "&", "\\&");
h(f, p, T, "ℵ", "\\aleph", !0);
h(f, p, T, "∀", "\\forall", !0);
h(f, p, T, "ℏ", "\\hbar", !0);
h(f, p, T, "∃", "\\exists", !0);
h(f, p, T, "∇", "\\nabla", !0);
h(f, p, T, "♭", "\\flat", !0);
h(f, p, T, "ℓ", "\\ell", !0);
h(f, p, T, "♮", "\\natural", !0);
h(f, p, T, "♣", "\\clubsuit", !0);
h(f, p, T, "℘", "\\wp", !0);
h(f, p, T, "♯", "\\sharp", !0);
h(f, p, T, "♢", "\\diamondsuit", !0);
h(f, p, T, "ℜ", "\\Re", !0);
h(f, p, T, "♡", "\\heartsuit", !0);
h(f, p, T, "ℑ", "\\Im", !0);
h(f, p, T, "♠", "\\spadesuit", !0);
h(f, p, T, "§", "\\S", !0);
h(H, p, T, "§", "\\S");
h(f, p, T, "¶", "\\P", !0);
h(H, p, T, "¶", "\\P");
h(f, p, T, "†", "\\dag");
h(H, p, T, "†", "\\dag");
h(H, p, T, "†", "\\textdagger");
h(f, p, T, "‡", "\\ddag");
h(H, p, T, "‡", "\\ddag");
h(H, p, T, "‡", "\\textdaggerdbl");
h(f, p, Dt, "⎱", "\\rmoustache", !0);
h(f, p, Nt, "⎰", "\\lmoustache", !0);
h(f, p, Dt, "⟯", "\\rgroup", !0);
h(f, p, Nt, "⟮", "\\lgroup", !0);
h(f, p, X, "∓", "\\mp", !0);
h(f, p, X, "⊖", "\\ominus", !0);
h(f, p, X, "⊎", "\\uplus", !0);
h(f, p, X, "⊓", "\\sqcap", !0);
h(f, p, X, "∗", "\\ast");
h(f, p, X, "⊔", "\\sqcup", !0);
h(f, p, X, "◯", "\\bigcirc", !0);
h(f, p, X, "∙", "\\bullet", !0);
h(f, p, X, "‡", "\\ddagger");
h(f, p, X, "≀", "\\wr", !0);
h(f, p, X, "⨿", "\\amalg");
h(f, p, X, "&", "\\And");
h(f, p, D, "⟵", "\\longleftarrow", !0);
h(f, p, D, "⇐", "\\Leftarrow", !0);
h(f, p, D, "⟸", "\\Longleftarrow", !0);
h(f, p, D, "⟶", "\\longrightarrow", !0);
h(f, p, D, "⇒", "\\Rightarrow", !0);
h(f, p, D, "⟹", "\\Longrightarrow", !0);
h(f, p, D, "↔", "\\leftrightarrow", !0);
h(f, p, D, "⟷", "\\longleftrightarrow", !0);
h(f, p, D, "⇔", "\\Leftrightarrow", !0);
h(f, p, D, "⟺", "\\Longleftrightarrow", !0);
h(f, p, D, "↦", "\\mapsto", !0);
h(f, p, D, "⟼", "\\longmapsto", !0);
h(f, p, D, "↗", "\\nearrow", !0);
h(f, p, D, "↩", "\\hookleftarrow", !0);
h(f, p, D, "↪", "\\hookrightarrow", !0);
h(f, p, D, "↘", "\\searrow", !0);
h(f, p, D, "↼", "\\leftharpoonup", !0);
h(f, p, D, "⇀", "\\rightharpoonup", !0);
h(f, p, D, "↙", "\\swarrow", !0);
h(f, p, D, "↽", "\\leftharpoondown", !0);
h(f, p, D, "⇁", "\\rightharpoondown", !0);
h(f, p, D, "↖", "\\nwarrow", !0);
h(f, p, D, "⇌", "\\rightleftharpoons", !0);
h(f, k, D, "≮", "\\nless", !0);
h(f, k, D, "", "\\@nleqslant");
h(f, k, D, "", "\\@nleqq");
h(f, k, D, "⪇", "\\lneq", !0);
h(f, k, D, "≨", "\\lneqq", !0);
h(f, k, D, "", "\\@lvertneqq");
h(f, k, D, "⋦", "\\lnsim", !0);
h(f, k, D, "⪉", "\\lnapprox", !0);
h(f, k, D, "⊀", "\\nprec", !0);
h(f, k, D, "⋠", "\\npreceq", !0);
h(f, k, D, "⋨", "\\precnsim", !0);
h(f, k, D, "⪹", "\\precnapprox", !0);
h(f, k, D, "≁", "\\nsim", !0);
h(f, k, D, "", "\\@nshortmid");
h(f, k, D, "∤", "\\nmid", !0);
h(f, k, D, "⊬", "\\nvdash", !0);
h(f, k, D, "⊭", "\\nvDash", !0);
h(f, k, D, "⋪", "\\ntriangleleft");
h(f, k, D, "⋬", "\\ntrianglelefteq", !0);
h(f, k, D, "⊊", "\\subsetneq", !0);
h(f, k, D, "", "\\@varsubsetneq");
h(f, k, D, "⫋", "\\subsetneqq", !0);
h(f, k, D, "", "\\@varsubsetneqq");
h(f, k, D, "≯", "\\ngtr", !0);
h(f, k, D, "", "\\@ngeqslant");
h(f, k, D, "", "\\@ngeqq");
h(f, k, D, "⪈", "\\gneq", !0);
h(f, k, D, "≩", "\\gneqq", !0);
h(f, k, D, "", "\\@gvertneqq");
h(f, k, D, "⋧", "\\gnsim", !0);
h(f, k, D, "⪊", "\\gnapprox", !0);
h(f, k, D, "⊁", "\\nsucc", !0);
h(f, k, D, "⋡", "\\nsucceq", !0);
h(f, k, D, "⋩", "\\succnsim", !0);
h(f, k, D, "⪺", "\\succnapprox", !0);
h(f, k, D, "≆", "\\ncong", !0);
h(f, k, D, "", "\\@nshortparallel");
h(f, k, D, "∦", "\\nparallel", !0);
h(f, k, D, "⊯", "\\nVDash", !0);
h(f, k, D, "⋫", "\\ntriangleright");
h(f, k, D, "⋭", "\\ntrianglerighteq", !0);
h(f, k, D, "", "\\@nsupseteqq");
h(f, k, D, "⊋", "\\supsetneq", !0);
h(f, k, D, "", "\\@varsupsetneq");
h(f, k, D, "⫌", "\\supsetneqq", !0);
h(f, k, D, "", "\\@varsupsetneqq");
h(f, k, D, "⊮", "\\nVdash", !0);
h(f, k, D, "⪵", "\\precneqq", !0);
h(f, k, D, "⪶", "\\succneqq", !0);
h(f, k, D, "", "\\@nsubseteqq");
h(f, k, X, "⊴", "\\unlhd");
h(f, k, X, "⊵", "\\unrhd");
h(f, k, D, "↚", "\\nleftarrow", !0);
h(f, k, D, "↛", "\\nrightarrow", !0);
h(f, k, D, "⇍", "\\nLeftarrow", !0);
h(f, k, D, "⇏", "\\nRightarrow", !0);
h(f, k, D, "↮", "\\nleftrightarrow", !0);
h(f, k, D, "⇎", "\\nLeftrightarrow", !0);
h(f, k, D, "△", "\\vartriangle");
h(f, k, T, "ℏ", "\\hslash");
h(f, k, T, "▽", "\\triangledown");
h(f, k, T, "◊", "\\lozenge");
h(f, k, T, "Ⓢ", "\\circledS");
h(f, k, T, "®", "\\circledR");
h(H, k, T, "®", "\\circledR");
h(f, k, T, "∡", "\\measuredangle", !0);
h(f, k, T, "∄", "\\nexists");
h(f, k, T, "℧", "\\mho");
h(f, k, T, "Ⅎ", "\\Finv", !0);
h(f, k, T, "⅁", "\\Game", !0);
h(f, k, T, "‵", "\\backprime");
h(f, k, T, "▲", "\\blacktriangle");
h(f, k, T, "▼", "\\blacktriangledown");
h(f, k, T, "■", "\\blacksquare");
h(f, k, T, "⧫", "\\blacklozenge");
h(f, k, T, "★", "\\bigstar");
h(f, k, T, "∢", "\\sphericalangle", !0);
h(f, k, T, "∁", "\\complement", !0);
h(f, k, T, "ð", "\\eth", !0);
h(H, p, T, "ð", "ð");
h(f, k, T, "╱", "\\diagup");
h(f, k, T, "╲", "\\diagdown");
h(f, k, T, "□", "\\square");
h(f, k, T, "□", "\\Box");
h(f, k, T, "◊", "\\Diamond");
h(f, k, T, "¥", "\\yen", !0);
h(H, k, T, "¥", "\\yen", !0);
h(f, k, T, "✓", "\\checkmark", !0);
h(H, k, T, "✓", "\\checkmark");
h(f, k, T, "ℶ", "\\beth", !0);
h(f, k, T, "ℸ", "\\daleth", !0);
h(f, k, T, "ℷ", "\\gimel", !0);
h(f, k, T, "ϝ", "\\digamma", !0);
h(f, k, T, "ϰ", "\\varkappa");
h(f, k, Nt, "┌", "\\@ulcorner", !0);
h(f, k, Dt, "┐", "\\@urcorner", !0);
h(f, k, Nt, "└", "\\@llcorner", !0);
h(f, k, Dt, "┘", "\\@lrcorner", !0);
h(f, k, D, "≦", "\\leqq", !0);
h(f, k, D, "⩽", "\\leqslant", !0);
h(f, k, D, "⪕", "\\eqslantless", !0);
h(f, k, D, "≲", "\\lesssim", !0);
h(f, k, D, "⪅", "\\lessapprox", !0);
h(f, k, D, "≊", "\\approxeq", !0);
h(f, k, X, "⋖", "\\lessdot");
h(f, k, D, "⋘", "\\lll", !0);
h(f, k, D, "≶", "\\lessgtr", !0);
h(f, k, D, "⋚", "\\lesseqgtr", !0);
h(f, k, D, "⪋", "\\lesseqqgtr", !0);
h(f, k, D, "≑", "\\doteqdot");
h(f, k, D, "≓", "\\risingdotseq", !0);
h(f, k, D, "≒", "\\fallingdotseq", !0);
h(f, k, D, "∽", "\\backsim", !0);
h(f, k, D, "⋍", "\\backsimeq", !0);
h(f, k, D, "⫅", "\\subseteqq", !0);
h(f, k, D, "⋐", "\\Subset", !0);
h(f, k, D, "⊏", "\\sqsubset", !0);
h(f, k, D, "≼", "\\preccurlyeq", !0);
h(f, k, D, "⋞", "\\curlyeqprec", !0);
h(f, k, D, "≾", "\\precsim", !0);
h(f, k, D, "⪷", "\\precapprox", !0);
h(f, k, D, "⊲", "\\vartriangleleft");
h(f, k, D, "⊴", "\\trianglelefteq");
h(f, k, D, "⊨", "\\vDash", !0);
h(f, k, D, "⊪", "\\Vvdash", !0);
h(f, k, D, "⌣", "\\smallsmile");
h(f, k, D, "⌢", "\\smallfrown");
h(f, k, D, "≏", "\\bumpeq", !0);
h(f, k, D, "≎", "\\Bumpeq", !0);
h(f, k, D, "≧", "\\geqq", !0);
h(f, k, D, "⩾", "\\geqslant", !0);
h(f, k, D, "⪖", "\\eqslantgtr", !0);
h(f, k, D, "≳", "\\gtrsim", !0);
h(f, k, D, "⪆", "\\gtrapprox", !0);
h(f, k, X, "⋗", "\\gtrdot");
h(f, k, D, "⋙", "\\ggg", !0);
h(f, k, D, "≷", "\\gtrless", !0);
h(f, k, D, "⋛", "\\gtreqless", !0);
h(f, k, D, "⪌", "\\gtreqqless", !0);
h(f, k, D, "≖", "\\eqcirc", !0);
h(f, k, D, "≗", "\\circeq", !0);
h(f, k, D, "≜", "\\triangleq", !0);
h(f, k, D, "∼", "\\thicksim");
h(f, k, D, "≈", "\\thickapprox");
h(f, k, D, "⫆", "\\supseteqq", !0);
h(f, k, D, "⋑", "\\Supset", !0);
h(f, k, D, "⊐", "\\sqsupset", !0);
h(f, k, D, "≽", "\\succcurlyeq", !0);
h(f, k, D, "⋟", "\\curlyeqsucc", !0);
h(f, k, D, "≿", "\\succsim", !0);
h(f, k, D, "⪸", "\\succapprox", !0);
h(f, k, D, "⊳", "\\vartriangleright");
h(f, k, D, "⊵", "\\trianglerighteq");
h(f, k, D, "⊩", "\\Vdash", !0);
h(f, k, D, "∣", "\\shortmid");
h(f, k, D, "∥", "\\shortparallel");
h(f, k, D, "≬", "\\between", !0);
h(f, k, D, "⋔", "\\pitchfork", !0);
h(f, k, D, "∝", "\\varpropto");
h(f, k, D, "◀", "\\blacktriangleleft");
h(f, k, D, "∴", "\\therefore", !0);
h(f, k, D, "∍", "\\backepsilon");
h(f, k, D, "▶", "\\blacktriangleright");
h(f, k, D, "∵", "\\because", !0);
h(f, k, D, "⋘", "\\llless");
h(f, k, D, "⋙", "\\gggtr");
h(f, k, X, "⊲", "\\lhd");
h(f, k, X, "⊳", "\\rhd");
h(f, k, D, "≂", "\\eqsim", !0);
h(f, p, D, "⋈", "\\Join");
h(f, k, D, "≑", "\\Doteq", !0);
h(f, k, X, "∔", "\\dotplus", !0);
h(f, k, X, "∖", "\\smallsetminus");
h(f, k, X, "⋒", "\\Cap", !0);
h(f, k, X, "⋓", "\\Cup", !0);
h(f, k, X, "⩞", "\\doublebarwedge", !0);
h(f, k, X, "⊟", "\\boxminus", !0);
h(f, k, X, "⊞", "\\boxplus", !0);
h(f, k, X, "⋇", "\\divideontimes", !0);
h(f, k, X, "⋉", "\\ltimes", !0);
h(f, k, X, "⋊", "\\rtimes", !0);
h(f, k, X, "⋋", "\\leftthreetimes", !0);
h(f, k, X, "⋌", "\\rightthreetimes", !0);
h(f, k, X, "⋏", "\\curlywedge", !0);
h(f, k, X, "⋎", "\\curlyvee", !0);
h(f, k, X, "⊝", "\\circleddash", !0);
h(f, k, X, "⊛", "\\circledast", !0);
h(f, k, X, "⋅", "\\centerdot");
h(f, k, X, "⊺", "\\intercal", !0);
h(f, k, X, "⋒", "\\doublecap");
h(f, k, X, "⋓", "\\doublecup");
h(f, k, X, "⊠", "\\boxtimes", !0);
h(f, k, D, "⇢", "\\dashrightarrow", !0);
h(f, k, D, "⇠", "\\dashleftarrow", !0);
h(f, k, D, "⇇", "\\leftleftarrows", !0);
h(f, k, D, "⇆", "\\leftrightarrows", !0);
h(f, k, D, "⇚", "\\Lleftarrow", !0);
h(f, k, D, "↞", "\\twoheadleftarrow", !0);
h(f, k, D, "↢", "\\leftarrowtail", !0);
h(f, k, D, "↫", "\\looparrowleft", !0);
h(f, k, D, "⇋", "\\leftrightharpoons", !0);
h(f, k, D, "↶", "\\curvearrowleft", !0);
h(f, k, D, "↺", "\\circlearrowleft", !0);
h(f, k, D, "↰", "\\Lsh", !0);
h(f, k, D, "⇈", "\\upuparrows", !0);
h(f, k, D, "↿", "\\upharpoonleft", !0);
h(f, k, D, "⇃", "\\downharpoonleft", !0);
h(f, p, D, "⊶", "\\origof", !0);
h(f, p, D, "⊷", "\\imageof", !0);
h(f, k, D, "⊸", "\\multimap", !0);
h(f, k, D, "↭", "\\leftrightsquigarrow", !0);
h(f, k, D, "⇉", "\\rightrightarrows", !0);
h(f, k, D, "⇄", "\\rightleftarrows", !0);
h(f, k, D, "↠", "\\twoheadrightarrow", !0);
h(f, k, D, "↣", "\\rightarrowtail", !0);
h(f, k, D, "↬", "\\looparrowright", !0);
h(f, k, D, "↷", "\\curvearrowright", !0);
h(f, k, D, "↻", "\\circlearrowright", !0);
h(f, k, D, "↱", "\\Rsh", !0);
h(f, k, D, "⇊", "\\downdownarrows", !0);
h(f, k, D, "↾", "\\upharpoonright", !0);
h(f, k, D, "⇂", "\\downharpoonright", !0);
h(f, k, D, "⇝", "\\rightsquigarrow", !0);
h(f, k, D, "⇝", "\\leadsto");
h(f, k, D, "⇛", "\\Rrightarrow", !0);
h(f, k, D, "↾", "\\restriction");
h(f, p, T, "‘", "`");
h(f, p, T, "$", "\\$");
h(H, p, T, "$", "\\$");
h(H, p, T, "$", "\\textdollar");
h(f, p, T, "%", "\\%");
h(H, p, T, "%", "\\%");
h(f, p, T, "_", "\\_");
h(H, p, T, "_", "\\_");
h(H, p, T, "_", "\\textunderscore");
h(f, p, T, "∠", "\\angle", !0);
h(f, p, T, "∞", "\\infty", !0);
h(f, p, T, "′", "\\prime");
h(f, p, T, "△", "\\triangle");
h(f, p, T, "Γ", "\\Gamma", !0);
h(f, p, T, "Δ", "\\Delta", !0);
h(f, p, T, "Θ", "\\Theta", !0);
h(f, p, T, "Λ", "\\Lambda", !0);
h(f, p, T, "Ξ", "\\Xi", !0);
h(f, p, T, "Π", "\\Pi", !0);
h(f, p, T, "Σ", "\\Sigma", !0);
h(f, p, T, "Υ", "\\Upsilon", !0);
h(f, p, T, "Φ", "\\Phi", !0);
h(f, p, T, "Ψ", "\\Psi", !0);
h(f, p, T, "Ω", "\\Omega", !0);
h(f, p, T, "A", "Α");
h(f, p, T, "B", "Β");
h(f, p, T, "E", "Ε");
h(f, p, T, "Z", "Ζ");
h(f, p, T, "H", "Η");
h(f, p, T, "I", "Ι");
h(f, p, T, "K", "Κ");
h(f, p, T, "M", "Μ");
h(f, p, T, "N", "Ν");
h(f, p, T, "O", "Ο");
h(f, p, T, "P", "Ρ");
h(f, p, T, "T", "Τ");
h(f, p, T, "X", "Χ");
h(f, p, T, "¬", "\\neg", !0);
h(f, p, T, "¬", "\\lnot");
h(f, p, T, "⊤", "\\top");
h(f, p, T, "⊥", "\\bot");
h(f, p, T, "∅", "\\emptyset");
h(f, k, T, "∅", "\\varnothing");
h(f, p, K, "α", "\\alpha", !0);
h(f, p, K, "β", "\\beta", !0);
h(f, p, K, "γ", "\\gamma", !0);
h(f, p, K, "δ", "\\delta", !0);
h(f, p, K, "ϵ", "\\epsilon", !0);
h(f, p, K, "ζ", "\\zeta", !0);
h(f, p, K, "η", "\\eta", !0);
h(f, p, K, "θ", "\\theta", !0);
h(f, p, K, "ι", "\\iota", !0);
h(f, p, K, "κ", "\\kappa", !0);
h(f, p, K, "λ", "\\lambda", !0);
h(f, p, K, "μ", "\\mu", !0);
h(f, p, K, "ν", "\\nu", !0);
h(f, p, K, "ξ", "\\xi", !0);
h(f, p, K, "ο", "\\omicron", !0);
h(f, p, K, "π", "\\pi", !0);
h(f, p, K, "ρ", "\\rho", !0);
h(f, p, K, "σ", "\\sigma", !0);
h(f, p, K, "τ", "\\tau", !0);
h(f, p, K, "υ", "\\upsilon", !0);
h(f, p, K, "ϕ", "\\phi", !0);
h(f, p, K, "χ", "\\chi", !0);
h(f, p, K, "ψ", "\\psi", !0);
h(f, p, K, "ω", "\\omega", !0);
h(f, p, K, "ε", "\\varepsilon", !0);
h(f, p, K, "ϑ", "\\vartheta", !0);
h(f, p, K, "ϖ", "\\varpi", !0);
h(f, p, K, "ϱ", "\\varrho", !0);
h(f, p, K, "ς", "\\varsigma", !0);
h(f, p, K, "φ", "\\varphi", !0);
h(f, p, X, "∗", "*", !0);
h(f, p, X, "+", "+");
h(f, p, X, "−", "-", !0);
h(f, p, X, "⋅", "\\cdot", !0);
h(f, p, X, "∘", "\\circ", !0);
h(f, p, X, "÷", "\\div", !0);
h(f, p, X, "±", "\\pm", !0);
h(f, p, X, "×", "\\times", !0);
h(f, p, X, "∩", "\\cap", !0);
h(f, p, X, "∪", "\\cup", !0);
h(f, p, X, "∖", "\\setminus", !0);
h(f, p, X, "∧", "\\land");
h(f, p, X, "∨", "\\lor");
h(f, p, X, "∧", "\\wedge", !0);
h(f, p, X, "∨", "\\vee", !0);
h(f, p, T, "√", "\\surd");
h(f, p, Nt, "⟨", "\\langle", !0);
h(f, p, Nt, "∣", "\\lvert");
h(f, p, Nt, "∥", "\\lVert");
h(f, p, Dt, "?", "?");
h(f, p, Dt, "!", "!");
h(f, p, Dt, "⟩", "\\rangle", !0);
h(f, p, Dt, "∣", "\\rvert");
h(f, p, Dt, "∥", "\\rVert");
h(f, p, D, "=", "=");
h(f, p, D, ":", ":");
h(f, p, D, "≈", "\\approx", !0);
h(f, p, D, "≅", "\\cong", !0);
h(f, p, D, "≥", "\\ge");
h(f, p, D, "≥", "\\geq", !0);
h(f, p, D, "←", "\\gets");
h(f, p, D, ">", "\\gt", !0);
h(f, p, D, "∈", "\\in", !0);
h(f, p, D, "", "\\@not");
h(f, p, D, "⊂", "\\subset", !0);
h(f, p, D, "⊃", "\\supset", !0);
h(f, p, D, "⊆", "\\subseteq", !0);
h(f, p, D, "⊇", "\\supseteq", !0);
h(f, k, D, "⊈", "\\nsubseteq", !0);
h(f, k, D, "⊉", "\\nsupseteq", !0);
h(f, p, D, "⊨", "\\models");
h(f, p, D, "←", "\\leftarrow", !0);
h(f, p, D, "≤", "\\le");
h(f, p, D, "≤", "\\leq", !0);
h(f, p, D, "<", "\\lt", !0);
h(f, p, D, "→", "\\rightarrow", !0);
h(f, p, D, "→", "\\to");
h(f, k, D, "≱", "\\ngeq", !0);
h(f, k, D, "≰", "\\nleq", !0);
h(f, p, R0, " ", "\\ ");
h(f, p, R0, " ", "\\space");
h(f, p, R0, " ", "\\nobreakspace");
h(H, p, R0, " ", "\\ ");
h(H, p, R0, " ", " ");
h(H, p, R0, " ", "\\space");
h(H, p, R0, " ", "\\nobreakspace");
h(f, p, R0, null, "\\nobreak");
h(f, p, R0, null, "\\allowbreak");
h(f, p, Ei, ",", ",");
h(f, p, Ei, ";", ";");
h(f, k, X, "⊼", "\\barwedge", !0);
h(f, k, X, "⊻", "\\veebar", !0);
h(f, p, X, "⊙", "\\odot", !0);
h(f, p, X, "⊕", "\\oplus", !0);
h(f, p, X, "⊗", "\\otimes", !0);
h(f, p, T, "∂", "\\partial", !0);
h(f, p, X, "⊘", "\\oslash", !0);
h(f, k, X, "⊚", "\\circledcirc", !0);
h(f, k, X, "⊡", "\\boxdot", !0);
h(f, p, X, "△", "\\bigtriangleup");
h(f, p, X, "▽", "\\bigtriangledown");
h(f, p, X, "†", "\\dagger");
h(f, p, X, "⋄", "\\diamond");
h(f, p, X, "⋆", "\\star");
h(f, p, X, "◃", "\\triangleleft");
h(f, p, X, "▹", "\\triangleright");
h(f, p, Nt, "{", "\\{");
h(H, p, T, "{", "\\{");
h(H, p, T, "{", "\\textbraceleft");
h(f, p, Dt, "}", "\\}");
h(H, p, T, "}", "\\}");
h(H, p, T, "}", "\\textbraceright");
h(f, p, Nt, "{", "\\lbrace");
h(f, p, Dt, "}", "\\rbrace");
h(f, p, Nt, "[", "\\lbrack", !0);
h(H, p, T, "[", "\\lbrack", !0);
h(f, p, Dt, "]", "\\rbrack", !0);
h(H, p, T, "]", "\\rbrack", !0);
h(f, p, Nt, "(", "\\lparen", !0);
h(f, p, Dt, ")", "\\rparen", !0);
h(H, p, T, "<", "\\textless", !0);
h(H, p, T, ">", "\\textgreater", !0);
h(f, p, Nt, "⌊", "\\lfloor", !0);
h(f, p, Dt, "⌋", "\\rfloor", !0);
h(f, p, Nt, "⌈", "\\lceil", !0);
h(f, p, Dt, "⌉", "\\rceil", !0);
h(f, p, T, "\\", "\\backslash");
h(f, p, T, "∣", "|");
h(f, p, T, "∣", "\\vert");
h(H, p, T, "|", "\\textbar", !0);
h(f, p, T, "∥", "\\|");
h(f, p, T, "∥", "\\Vert");
h(H, p, T, "∥", "\\textbardbl");
h(H, p, T, "~", "\\textasciitilde");
h(H, p, T, "\\", "\\textbackslash");
h(H, p, T, "^", "\\textasciicircum");
h(f, p, D, "↑", "\\uparrow", !0);
h(f, p, D, "⇑", "\\Uparrow", !0);
h(f, p, D, "↓", "\\downarrow", !0);
h(f, p, D, "⇓", "\\Downarrow", !0);
h(f, p, D, "↕", "\\updownarrow", !0);
h(f, p, D, "⇕", "\\Updownarrow", !0);
h(f, p, Xe, "∐", "\\coprod");
h(f, p, Xe, "⋁", "\\bigvee");
h(f, p, Xe, "⋀", "\\bigwedge");
h(f, p, Xe, "⨄", "\\biguplus");
h(f, p, Xe, "⋂", "\\bigcap");
h(f, p, Xe, "⋃", "\\bigcup");
h(f, p, Xe, "∫", "\\int");
h(f, p, Xe, "∫", "\\intop");
h(f, p, Xe, "∬", "\\iint");
h(f, p, Xe, "∭", "\\iiint");
h(f, p, Xe, "∏", "\\prod");
h(f, p, Xe, "∑", "\\sum");
h(f, p, Xe, "⨂", "\\bigotimes");
h(f, p, Xe, "⨁", "\\bigoplus");
h(f, p, Xe, "⨀", "\\bigodot");
h(f, p, Xe, "∮", "\\oint");
h(f, p, Xe, "∯", "\\oiint");
h(f, p, Xe, "∰", "\\oiiint");
h(f, p, Xe, "⨆", "\\bigsqcup");
h(f, p, Xe, "∫", "\\smallint");
h(H, p, pn, "…", "\\textellipsis");
h(f, p, pn, "…", "\\mathellipsis");
h(H, p, pn, "…", "\\ldots", !0);
h(f, p, pn, "…", "\\ldots", !0);
h(f, p, pn, "⋯", "\\@cdots", !0);
h(f, p, pn, "⋱", "\\ddots", !0);
h(f, p, T, "⋮", "\\varvdots");
h(f, p, Me, "ˊ", "\\acute");
h(f, p, Me, "ˋ", "\\grave");
h(f, p, Me, "¨", "\\ddot");
h(f, p, Me, "~", "\\tilde");
h(f, p, Me, "ˉ", "\\bar");
h(f, p, Me, "˘", "\\breve");
h(f, p, Me, "ˇ", "\\check");
h(f, p, Me, "^", "\\hat");
h(f, p, Me, "⃗", "\\vec");
h(f, p, Me, "˙", "\\dot");
h(f, p, Me, "˚", "\\mathring");
h(f, p, K, "", "\\@imath");
h(f, p, K, "", "\\@jmath");
h(f, p, T, "ı", "ı");
h(f, p, T, "ȷ", "ȷ");
h(H, p, T, "ı", "\\i", !0);
h(H, p, T, "ȷ", "\\j", !0);
h(H, p, T, "ß", "\\ss", !0);
h(H, p, T, "æ", "\\ae", !0);
h(H, p, T, "œ", "\\oe", !0);
h(H, p, T, "ø", "\\o", !0);
h(H, p, T, "Æ", "\\AE", !0);
h(H, p, T, "Œ", "\\OE", !0);
h(H, p, T, "Ø", "\\O", !0);
h(H, p, Me, "ˊ", "\\'");
h(H, p, Me, "ˋ", "\\`");
h(H, p, Me, "ˆ", "\\^");
h(H, p, Me, "˜", "\\~");
h(H, p, Me, "ˉ", "\\=");
h(H, p, Me, "˘", "\\u");
h(H, p, Me, "˙", "\\.");
h(H, p, Me, "¸", "\\c");
h(H, p, Me, "˚", "\\r");
h(H, p, Me, "ˇ", "\\v");
h(H, p, Me, "¨", '\\"');
h(H, p, Me, "˝", "\\H");
h(H, p, Me, "◯", "\\textcircled");
var Mc = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
h(H, p, T, "–", "--", !0);
h(H, p, T, "–", "\\textendash");
h(H, p, T, "—", "---", !0);
h(H, p, T, "—", "\\textemdash");
h(H, p, T, "‘", "`", !0);
h(H, p, T, "‘", "\\textquoteleft");
h(H, p, T, "’", "'", !0);
h(H, p, T, "’", "\\textquoteright");
h(H, p, T, "“", "``", !0);
h(H, p, T, "“", "\\textquotedblleft");
h(H, p, T, "”", "''", !0);
h(H, p, T, "”", "\\textquotedblright");
h(f, p, T, "°", "\\degree", !0);
h(H, p, T, "°", "\\degree");
h(H, p, T, "°", "\\textdegree", !0);
h(f, p, T, "£", "\\pounds");
h(f, p, T, "£", "\\mathsterling", !0);
h(H, p, T, "£", "\\pounds");
h(H, p, T, "£", "\\textsterling", !0);
h(f, k, T, "✠", "\\maltese");
h(H, k, T, "✠", "\\maltese");
var Ro = '0123456789/@."';
for (var Wi = 0; Wi < Ro.length; Wi++) {
  var Oo = Ro.charAt(Wi);
  h(f, p, T, Oo, Oo);
}
var Ho = '0123456789!@*()-=+";:?/.,';
for (var Xi = 0; Xi < Ho.length; Xi++) {
  var Po = Ho.charAt(Xi);
  h(H, p, T, Po, Po);
}
var Ka = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Yi = 0; Yi < Ka.length; Yi++) {
  var ga = Ka.charAt(Yi);
  h(f, p, K, ga, ga), h(H, p, T, ga, ga);
}
h(f, k, T, "C", "ℂ");
h(H, k, T, "C", "ℂ");
h(f, k, T, "H", "ℍ");
h(H, k, T, "H", "ℍ");
h(f, k, T, "N", "ℕ");
h(H, k, T, "N", "ℕ");
h(f, k, T, "P", "ℙ");
h(H, k, T, "P", "ℙ");
h(f, k, T, "Q", "ℚ");
h(H, k, T, "Q", "ℚ");
h(f, k, T, "R", "ℝ");
h(H, k, T, "R", "ℝ");
h(f, k, T, "Z", "ℤ");
h(H, k, T, "Z", "ℤ");
h(f, p, K, "h", "ℎ");
h(H, p, K, "h", "ℎ");
var ie = "";
for (var bt = 0; bt < Ka.length; bt++) {
  var Re = Ka.charAt(bt);
  ie = String.fromCharCode(55349, 56320 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56372 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56424 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56580 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56684 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56736 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56788 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56840 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56944 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), bt < 26 && (ie = String.fromCharCode(55349, 56632 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie), ie = String.fromCharCode(55349, 56476 + bt), h(f, p, K, Re, ie), h(H, p, T, Re, ie));
}
ie = "𝕜";
h(f, p, K, "k", ie);
h(H, p, T, "k", ie);
for (var ar = 0; ar < 10; ar++) {
  var H0 = ar.toString();
  ie = String.fromCharCode(55349, 57294 + ar), h(f, p, K, H0, ie), h(H, p, T, H0, ie), ie = String.fromCharCode(55349, 57314 + ar), h(f, p, K, H0, ie), h(H, p, T, H0, ie), ie = String.fromCharCode(55349, 57324 + ar), h(f, p, K, H0, ie), h(H, p, T, H0, ie), ie = String.fromCharCode(55349, 57334 + ar), h(f, p, K, H0, ie), h(H, p, T, H0, ie);
}
var qo = "ÐÞþ";
for (var Zi = 0; Zi < qo.length; Zi++) {
  var ba = qo.charAt(Zi);
  h(f, p, K, ba, ba), h(H, p, T, ba, ba);
}
var va = [
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
], Uo = [
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
], t2 = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [va[s][2], va[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [Uo[o][2], Uo[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [va[0][2], va[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new J("Unsupported character: " + e);
  }
}, Ai = function(e, t, n) {
  return Ue[n][e] && Ue[n][e].replace && (e = Ue[n][e].replace), {
    value: e,
    metrics: Fs(e, t, n)
  };
}, Jt = function(e, t, n, a, i) {
  var l = Ai(e, t, n), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var u = s.italic;
    (n === "text" || a && a.font === "mathit") && (u = 0), o = new d0(e, s.height, s.depth, u, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), o = new d0(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var c = a.getColor();
    c && (o.style.color = c);
  }
  return o;
}, r2 = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Ai(e, "Main-Bold", t).metrics ? Jt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || Ue[t][e].font === "main" ? Jt(e, "Main-Regular", t, n, a) : Jt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, n2 = function(e, t, n, a, i) {
  return i !== "textord" && Ai(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, a2 = function(e, t, n) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, u = "", c = "";
  if (i.charCodeAt(0) === 55349 && ([u, c] = t2(i, a)), u.length > 0)
    return Jt(i, u, a, t, l.concat(c));
  if (o) {
    var m, g;
    if (o === "boldsymbol") {
      var d = n2(i, a, t, l, n);
      m = d.fontName, g = [d.fontClass];
    } else s ? (m = Ic[o].fontName, g = [o]) : (m = _a(o, t.fontWeight, t.fontShape), g = [o, t.fontWeight, t.fontShape]);
    if (Ai(i, m, a).metrics)
      return Jt(i, m, a, t, l.concat(g));
    if (Mc.hasOwnProperty(i) && m.slice(0, 10) === "Typewriter") {
      for (var _ = [], y = 0; y < i.length; y++)
        _.push(Jt(i[y], m, a, t, l.concat(g)));
      return Nc(_);
    }
  }
  if (n === "mathord")
    return Jt(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (n === "textord") {
    var E = Ue[a][i] && Ue[a][i].font;
    if (E === "ams") {
      var A = _a("amsrm", t.fontWeight, t.fontShape);
      return Jt(i, A, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (E === "main" || !E) {
      var w = _a("textrm", t.fontWeight, t.fontShape);
      return Jt(i, w, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var v = _a(E, t.fontWeight, t.fontShape);
      return Jt(i, v, a, t, l.concat(v, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, i2 = (r, e) => {
  if (er(r.classes) !== er(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
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
}, l2 = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof d0 && n instanceof d0 && i2(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Cs = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > n && (n = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, St = function(e, t, n, a) {
  var i = new Di(e, t, n, a);
  return Cs(i), i;
}, Bc = (r, e, t, n) => new Di(r, e, t, n), s2 = function(e, t, n) {
  var a = St([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = j(a.height), a.maxFontSize = 1, a;
}, o2 = function(e, t, n, a) {
  var i = new Cc(e, t, n, a);
  return Cs(i), i;
}, Nc = function(e) {
  var t = new na(e);
  return Cs(t), t;
}, u2 = function(e, t) {
  return e instanceof na ? St([], [e], t) : e;
}, c2 = function(e) {
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
    for (var c = e.positionData, m = 0; m < e.children.length; m++) {
      var g = e.children[m];
      c -= g.type === "kern" ? g.size : g.elem.height + g.elem.depth;
    }
    u = c;
  } else if (e.positionType === "bottom")
    u = -e.positionData;
  else {
    var d = e.children[0];
    if (d.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      u = -d.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      u = -d.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: u
  };
}, h2 = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = c2(e), i = 0, l = 0; l < n.length; l++) {
    var s = n[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var u = St(["pstrut"], []);
  u.style.height = j(i);
  for (var c = [], m = a, g = a, d = a, _ = 0; _ < n.length; _++) {
    var y = n[_];
    if (y.type === "kern")
      d += y.size;
    else {
      var E = y.elem, A = y.wrapperClasses || [], w = y.wrapperStyle || {}, v = St(A, [u, E], void 0, w);
      v.style.top = j(-i - d - E.depth), y.marginLeft && (v.style.marginLeft = y.marginLeft), y.marginRight && (v.style.marginRight = y.marginRight), c.push(v), d += E.height + E.depth;
    }
    m = Math.min(m, d), g = Math.max(g, d);
  }
  var x = St(["vlist"], c);
  x.style.height = j(g);
  var C;
  if (m < 0) {
    var N = St([], []), S = St(["vlist"], [N]);
    S.style.height = j(-m);
    var z = St(["vlist-s"], [new d0("​")]);
    C = [St(["vlist-r"], [x, z]), St(["vlist-r"], [S])];
  } else
    C = [St(["vlist-r"], [x])];
  var L = St(["vlist-t"], C);
  return C.length === 2 && L.classes.push("vlist-t2"), L.height = g, L.depth = -m, L;
}, f2 = (r, e) => {
  var t = St(["mspace"], [], e), n = Ne(r, e);
  return t.style.marginRight = j(n), t;
}, _a = function(e, t, n) {
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
}, Ic = {
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
}, zc = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, m2 = function(e, t) {
  var [n, a, i] = zc[e], l = new wr(n), s = new tr([l], {
    width: j(a),
    height: j(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + j(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = Bc(["overlay"], [s], t);
  return o.height = i, o.style.height = j(i), o.style.width = j(a), o;
}, B = {
  fontMap: Ic,
  makeSymbol: Jt,
  mathsym: r2,
  makeSpan: St,
  makeSvgSpan: Bc,
  makeLineSpan: s2,
  makeAnchor: o2,
  makeFragment: Nc,
  wrapFragment: u2,
  makeVList: h2,
  makeOrd: a2,
  makeGlue: f2,
  staticSvg: m2,
  svgData: zc,
  tryCombineChars: l2
}, Be = {
  number: 3,
  unit: "mu"
}, ir = {
  number: 4,
  unit: "mu"
}, w0 = {
  number: 5,
  unit: "mu"
}, d2 = {
  mord: {
    mop: Be,
    mbin: ir,
    mrel: w0,
    minner: Be
  },
  mop: {
    mord: Be,
    mop: Be,
    mrel: w0,
    minner: Be
  },
  mbin: {
    mord: ir,
    mop: ir,
    mopen: ir,
    minner: ir
  },
  mrel: {
    mord: w0,
    mop: w0,
    mopen: w0,
    minner: w0
  },
  mopen: {},
  mclose: {
    mop: Be,
    mbin: ir,
    mrel: w0,
    minner: Be
  },
  mpunct: {
    mord: Be,
    mop: Be,
    mrel: w0,
    mopen: Be,
    mclose: Be,
    mpunct: Be,
    minner: Be
  },
  minner: {
    mord: Be,
    mop: Be,
    mbin: ir,
    mrel: w0,
    mopen: Be,
    mpunct: Be,
    minner: Be
  }
}, p2 = {
  mord: {
    mop: Be
  },
  mop: {
    mord: Be,
    mop: Be
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Be
  },
  mpunct: {},
  minner: {
    mop: Be
  }
}, Lc = {}, ei = {}, ti = {};
function W(r) {
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
    Lc[t[o]] = s;
  e && (i && (ei[e] = i), l && (ti[e] = l));
}
function zr(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  W({
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
var ri = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, qe = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, ln = B.makeSpan, g2 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], b2 = ["rightmost", "mrel", "mclose", "mpunct"], v2 = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
}, _2 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, ut = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var s = pe(e[l], t);
    if (s instanceof na) {
      var o = s.children;
      i.push(...o);
    } else
      i.push(s);
  }
  if (B.tryCombineChars(i), !n)
    return i;
  var u = t;
  if (e.length === 1) {
    var c = e[0];
    c.type === "sizing" ? u = t.havingSize(c.size) : c.type === "styling" && (u = t.havingStyle(v2[c.style]));
  }
  var m = ln([a[0] || "leftmost"], [], t), g = ln([a[1] || "rightmost"], [], t), d = n === "root";
  return Go(i, (_, y) => {
    var E = y.classes[0], A = _.classes[0];
    E === "mbin" && ee.contains(b2, A) ? y.classes[0] = "mord" : A === "mbin" && ee.contains(g2, E) && (_.classes[0] = "mord");
  }, {
    node: m
  }, g, d), Go(i, (_, y) => {
    var E = jl(y), A = jl(_), w = E && A ? _.hasClass("mtight") ? p2[E][A] : d2[E][A] : null;
    if (w)
      return B.makeGlue(w, u);
  }, {
    node: m
  }, g, d), i;
}, Go = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = Rc(s);
    if (o) {
      r(o.children, t, n, null, i);
      continue;
    }
    var u = !s.hasClass("mspace");
    if (u) {
      var c = t(s, n.node);
      c && (n.insertAfter ? n.insertAfter(c) : (e.unshift(c), l++));
    }
    u ? n.node = s : i && s.hasClass("newline") && (n.node = ln(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((m) => (g) => {
      e.splice(m + 1, 0, g), l++;
    })(l);
  }
  a && e.pop();
}, Rc = function(e) {
  return e instanceof na || e instanceof Cc || e instanceof Di && e.hasClass("enclosing") ? e : null;
}, y2 = function r(e, t) {
  var n = Rc(e);
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
}, jl = function(e, t) {
  return e ? (t && (e = y2(e, t)), _2[e.classes[0]] || null) : null;
}, Gn = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return ln(t.concat(n));
}, pe = function(e, t, n) {
  if (!e)
    return ln();
  if (ei[e.type]) {
    var a = ei[e.type](e, t);
    if (n && t.size !== n.size) {
      a = ln(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new J("Got group of unknown type: '" + e.type + "'");
};
function Oc(r) {
  return new na(r);
}
class Kt {
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
    this.classes.length > 0 && (e.className = er(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ee.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ee.escape(er(this.classes)) + '"'), e += ">";
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
class Rn {
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
    return ee.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class w2 {
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
    return e.setAttribute("width", j(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + j(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var q = {
  MathNode: Kt,
  TextNode: Rn,
  SpaceNode: w2,
  newDocumentFragment: Oc
}, Ut = function(e, t, n) {
  return Ue[t][e] && Ue[t][e].replace && e.charCodeAt(0) !== 55349 && !(Mc.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = Ue[t][e].replace), new q.TextNode(e);
}, Ms = function(e) {
  return e.length === 1 ? e[0] : new q.MathNode("mrow", e);
}, Bs = function(e, t) {
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
  if (ee.contains(["\\imath", "\\jmath"], i))
    return null;
  Ue[a][i] && Ue[a][i].replace && (i = Ue[a][i].replace);
  var l = B.fontMap[n].fontName;
  return Fs(i, l, a) ? B.fontMap[n].variant : null;
}, It = function(e, t, n) {
  if (e.length === 1) {
    var a = De(e[0], t);
    return n && a instanceof Kt && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = De(e[s], t);
    if (o instanceof Kt && l instanceof Kt) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mi" && o.children.length === 1 && l.type === "mn") {
        var u = o.children[0];
        if (u instanceof Rn && u.text === ".") {
          l.children.push(...o.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var c = l.children[0];
        if (c instanceof Rn && c.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var m = o.children[0];
          m instanceof Rn && m.text.length > 0 && (m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, rr = function(e, t, n) {
  return Ms(It(e, t, n));
}, De = function(e, t) {
  if (!e)
    return new q.MathNode("mrow");
  if (ti[e.type]) {
    var n = ti[e.type](e, t);
    return n;
  } else
    throw new J("Got group of unknown type: '" + e.type + "'");
}, k2 = {
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
}, D2 = function(e) {
  var t = new q.MathNode("mo", [new q.TextNode(k2[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, E2 = {
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
}, A2 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, x2 = function(e, t) {
  function n() {
    var s = 4e5, o = e.label.slice(1);
    if (ee.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var u = e, c = A2(u.base), m, g, d;
      if (c > 5)
        o === "widehat" || o === "widecheck" ? (m = 420, s = 2364, d = 0.42, g = o + "4") : (m = 312, s = 2340, d = 0.34, g = "tilde4");
      else {
        var _ = [1, 1, 2, 2, 3, 3][c];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][_], m = [0, 239, 300, 360, 420][_], d = [0, 0.24, 0.3, 0.3, 0.36, 0.42][_], g = o + _) : (s = [0, 600, 1033, 2339, 2340][_], m = [0, 260, 286, 306, 312][_], d = [0, 0.26, 0.286, 0.3, 0.306, 0.34][_], g = "tilde" + _);
      }
      var y = new wr(g), E = new tr([y], {
        width: "100%",
        height: j(d),
        viewBox: "0 0 " + s + " " + m,
        preserveAspectRatio: "none"
      });
      return {
        span: B.makeSvgSpan([], [E], t),
        minWidth: 0,
        height: d
      };
    } else {
      var A = [], w = E2[o], [v, x, C] = w, N = C / 1e3, S = v.length, z, L;
      if (S === 1) {
        var R = w[3];
        z = ["hide-tail"], L = [R];
      } else if (S === 2)
        z = ["halfarrow-left", "halfarrow-right"], L = ["xMinYMin", "xMaxYMin"];
      else if (S === 3)
        z = ["brace-left", "brace-center", "brace-right"], L = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + S + " children.");
      for (var I = 0; I < S; I++) {
        var M = new wr(v[I]), Ee = new tr([M], {
          width: "400em",
          height: j(N),
          viewBox: "0 0 " + s + " " + C,
          preserveAspectRatio: L[I] + " slice"
        }), U = B.makeSvgSpan([z[I]], [Ee], t);
        if (S === 1)
          return {
            span: U,
            minWidth: x,
            height: N
          };
        U.style.height = j(N), A.push(U);
      }
      return {
        span: B.makeSpan(["stretchy"], A, t),
        minWidth: x,
        height: N
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: l
  } = n();
  return a.height = l, a.style.height = j(l), i > 0 && (a.style.minWidth = j(i)), a;
}, S2 = function(e, t, n, a, i) {
  var l, s = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = B.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new zo({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new zo({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var c = new tr(u, {
      width: "100%",
      height: j(s)
    });
    l = B.makeSvgSpan([], [c], i);
  }
  return l.height = s, l.style.height = j(s), l;
}, I0 = {
  encloseSpan: S2,
  mathMLnode: D2,
  svgSpan: x2
};
function ue(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function Ns(r) {
  var e = xi(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function xi(r) {
  return r && (r.type === "atom" || e2.hasOwnProperty(r.type)) ? r : null;
}
var Is = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = ue(r.base, "accent"), t = n.base, r.base = t, a = K4(pe(r, e)), r.base = n) : (n = ue(r, "accent"), t = n.base);
  var i = pe(t, e.havingCrampedStyle()), l = n.isShifty && ee.isCharacterBox(t), s = 0;
  if (l) {
    var o = ee.getBaseElem(t), u = pe(o, e.havingCrampedStyle());
    s = Lo(u).skew;
  }
  var c = n.label === "\\c", m = c ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), g;
  if (n.isStretchy)
    g = I0.svgSpan(n, e), g = B.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: g,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + j(2 * s) + ")",
          marginLeft: j(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var d, _;
    n.label === "\\vec" ? (d = B.staticSvg("vec", e), _ = B.svgData.vec[1]) : (d = B.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), d = Lo(d), d.italic = 0, _ = d.width, c && (m += d.depth)), g = B.makeSpan(["accent-body"], [d]);
    var y = n.label === "\\textcircled";
    y && (g.classes.push("accent-full"), m = i.height);
    var E = s;
    y || (E -= _ / 2), g.style.left = j(E), n.label === "\\textcircled" && (g.style.top = ".2em"), g = B.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -m
      }, {
        type: "elem",
        elem: g
      }]
    }, e);
  }
  var A = B.makeSpan(["mord", "accent"], [g], e);
  return a ? (a.children[0] = A, a.height = Math.max(A.height, a.height), a.classes[0] = "mord", a) : A;
}, Hc = (r, e) => {
  var t = r.isStretchy ? I0.mathMLnode(r.label) : new q.MathNode("mo", [Ut(r.label, r.mode)]), n = new q.MathNode("mover", [De(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, T2 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
W({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = ri(e[0]), n = !T2.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Is,
  mathmlBuilder: Hc
});
W({
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
  htmlBuilder: Is,
  mathmlBuilder: Hc
});
W({
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
    var t = pe(r.base, e), n = I0.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = B.makeVList({
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
    return B.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = I0.mathMLnode(r.label), n = new q.MathNode("munder", [De(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var ya = (r) => {
  var e = new q.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
W({
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
    var t = e.style, n = e.havingStyle(t.sup()), a = B.wrapFragment(pe(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    r.below && (n = e.havingStyle(t.sub()), l = B.wrapFragment(pe(r.below, n, e), e), l.classes.push(i + "-arrow-pad"));
    var s = I0.svgSpan(r, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, u = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (u -= a.depth);
    var c;
    if (l) {
      var m = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      c = B.makeVList({
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
      c = B.makeVList({
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
    return c.children[0].children[0].children[1].classes.push("svg-align"), B.makeSpan(["mrel", "x-arrow"], [c], e);
  },
  mathmlBuilder(r, e) {
    var t = I0.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = ya(De(r.body, e));
      if (r.below) {
        var i = ya(De(r.below, e));
        n = new q.MathNode("munderover", [t, i, a]);
      } else
        n = new q.MathNode("mover", [t, a]);
    } else if (r.below) {
      var l = ya(De(r.below, e));
      n = new q.MathNode("munder", [t, l]);
    } else
      n = ya(), n = new q.MathNode("mover", [t, n]);
    return n;
  }
});
var F2 = B.makeSpan;
function Pc(r, e) {
  var t = ut(r.body, e, !0);
  return F2([r.mclass], t, e);
}
function qc(r, e) {
  var t, n = It(r.body, e);
  return r.mclass === "minner" ? t = new q.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new q.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new q.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
W({
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
      body: qe(a),
      isCharacterBox: ee.isCharacterBox(a)
    };
  },
  htmlBuilder: Pc,
  mathmlBuilder: qc
});
var Si = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
W({
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
      mclass: Si(e[0]),
      body: qe(e[1]),
      isCharacterBox: ee.isCharacterBox(e[1])
    };
  }
});
W({
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
    n !== "\\stackrel" ? l = Si(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: qe(a)
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
      isCharacterBox: ee.isCharacterBox(o)
    };
  },
  htmlBuilder: Pc,
  mathmlBuilder: qc
});
W({
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
      mclass: Si(e[0]),
      body: qe(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = ut(r.body, e, !0), n = B.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = It(r.body, e), n = new q.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var C2 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Vo = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), jo = (r) => r.type === "textord" && r.text === "@", M2 = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function B2(r, e, t) {
  var n = C2[r];
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
function N2(r) {
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
      throw new J("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var l = e[i], s = Vo(), o = 0; o < l.length; o++)
      if (!jo(l[o]))
        s.body.push(l[o]);
      else {
        n.push(s), o += 1;
        var u = Ns(l[o]).text, c = new Array(2);
        if (c[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, c[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var m = 0; m < 2; m++) {
            for (var g = !0, d = o + 1; d < l.length; d++) {
              if (M2(l[d], u)) {
                g = !1, o = d;
                break;
              }
              if (jo(l[d]))
                throw new J("Missing a " + u + " character to complete a CD arrow.", l[d]);
              c[m].body.push(l[d]);
            }
            if (g)
              throw new J("Missing a " + u + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new J('Expected one of "<>AV=|." after @', l[o]);
        var _ = B2(u, c, r), y = {
          type: "styling",
          body: [_],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(y), s = Vo();
      }
    i % 2 === 0 ? n.push(s) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var E = new Array(a[0].length).fill({
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
    cols: E,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
W({
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
    var t = e.havingStyle(e.style.sup()), n = B.wrapFragment(pe(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = j(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mrow", [De(r.label, e)]);
    return t = new q.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new q.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
W({
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
    var t = B.wrapFragment(pe(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new q.MathNode("mrow", [De(r.fragment, e)]);
  }
});
W({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = ue(e[0], "ordgroup"), a = n.body, i = "", l = 0; l < a.length; l++) {
      var s = ue(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), u;
    if (isNaN(o))
      throw new J("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new J("\\@char with invalid code point " + i);
    return o <= 65535 ? u = String.fromCharCode(o) : (o -= 65536, u = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var Uc = (r, e) => {
  var t = ut(r.body, e.withColor(r.color), !1);
  return B.makeFragment(t);
}, Gc = (r, e) => {
  var t = It(r.body, e.withColor(r.color)), n = new q.MathNode("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
W({
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
    } = r, n = ue(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: qe(a)
    };
  },
  htmlBuilder: Uc,
  mathmlBuilder: Gc
});
W({
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
    } = r, a = ue(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Uc,
  mathmlBuilder: Gc
});
W({
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
      size: a && ue(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = B.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = j(Ne(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", j(Ne(r.size, e)))), t;
  }
});
var Wl = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Vc = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new J("Expected a control sequence", r);
  return e;
}, I2 = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, jc = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
};
W({
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
    if (Wl[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = Wl[n.text]), ue(e.parseFunction(), "internal");
    throw new J("Invalid token after macro prefix", n);
  }
});
W({
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
      throw new J("Expected a control sequence", n);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new J('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new J('Argument number "' + n.text + '" out of order');
        i++, s.push([]);
      } else {
        if (n.text === "EOF")
          throw new J("Expected a macro definition");
        s[i].push(n.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === Wl[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
W({
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
    } = r, n = Vc(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = I2(e);
    return jc(e, n, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
W({
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
    } = r, n = Vc(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return jc(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var In = function(e, t, n) {
  var a = Ue.math[e] && Ue.math[e].replace, i = Fs(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, zs = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), l = B.makeSpan(a.concat(i.sizingClasses(n)), [e], n), s = i.sizeMultiplier / n.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, Wc = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = j(i), e.height -= i, e.depth += i;
}, z2 = function(e, t, n, a, i, l) {
  var s = B.makeSymbol(e, "Main-Regular", i, a), o = zs(s, t, a, l);
  return n && Wc(o, a, t), o;
}, L2 = function(e, t, n, a) {
  return B.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, Xc = function(e, t, n, a, i, l) {
  var s = L2(e, t, i, a), o = zs(B.makeSpan(["delimsizing", "size" + t], [s], a), re.TEXT, a, l);
  return n && Wc(o, a, re.TEXT), o;
}, $i = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = B.makeSpan(["delimsizinginner", a], [B.makeSpan([], [B.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, Qi = function(e, t, n) {
  var a = M0["Size4-Regular"][e.charCodeAt(0)] ? M0["Size4-Regular"][e.charCodeAt(0)][4] : M0["Size1-Regular"][e.charCodeAt(0)][4], i = new wr("inner", X4(e, Math.round(1e3 * t))), l = new tr([i], {
    width: j(a),
    height: j(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + j(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = B.makeSvgSpan([], [l], n);
  return s.height = t, s.style.height = j(t), s.style.width = j(a), {
    type: "elem",
    elem: s
  };
}, Xl = 8e-3, wa = {
  type: "kern",
  size: -1 * Xl
}, R2 = ["|", "\\lvert", "\\rvert", "\\vert"], O2 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Yc = function(e, t, n, a, i, l) {
  var s, o, u, c, m = "", g = 0;
  s = u = c = e, o = null;
  var d = "Size1-Regular";
  e === "\\uparrow" ? u = c = "⏐" : e === "\\Uparrow" ? u = c = "‖" : e === "\\downarrow" ? s = u = "⏐" : e === "\\Downarrow" ? s = u = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", u = "⏐", c = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", u = "‖", c = "\\Downarrow") : ee.contains(R2, e) ? (u = "∣", m = "vert", g = 333) : ee.contains(O2, e) ? (u = "∥", m = "doublevert", g = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", u = "⎢", c = "⎣", d = "Size4-Regular", m = "lbrack", g = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", u = "⎥", c = "⎦", d = "Size4-Regular", m = "rbrack", g = 667) : e === "\\lfloor" || e === "⌊" ? (u = s = "⎢", c = "⎣", d = "Size4-Regular", m = "lfloor", g = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", u = c = "⎢", d = "Size4-Regular", m = "lceil", g = 667) : e === "\\rfloor" || e === "⌋" ? (u = s = "⎥", c = "⎦", d = "Size4-Regular", m = "rfloor", g = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", u = c = "⎥", d = "Size4-Regular", m = "rceil", g = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", u = "⎜", c = "⎝", d = "Size4-Regular", m = "lparen", g = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", u = "⎟", c = "⎠", d = "Size4-Regular", m = "rparen", g = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", c = "⎩", u = "⎪", d = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", c = "⎭", u = "⎪", d = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", c = "⎩", u = "⎪", d = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", c = "⎭", u = "⎪", d = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", c = "⎭", u = "⎪", d = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", c = "⎩", u = "⎪", d = "Size4-Regular");
  var _ = In(s, d, i), y = _.height + _.depth, E = In(u, d, i), A = E.height + E.depth, w = In(c, d, i), v = w.height + w.depth, x = 0, C = 1;
  if (o !== null) {
    var N = In(o, d, i);
    x = N.height + N.depth, C = 2;
  }
  var S = y + v + x, z = Math.max(0, Math.ceil((t - S) / (C * A))), L = S + z * C * A, R = a.fontMetrics().axisHeight;
  n && (R *= a.sizeMultiplier);
  var I = L / 2 - R, M = [];
  if (m.length > 0) {
    var Ee = L - y - v, U = Math.round(L * 1e3), Z = Y4(m, Math.round(Ee * 1e3)), se = new wr(m, Z), Ge = (g / 1e3).toFixed(3) + "em", ge = (U / 1e3).toFixed(3) + "em", Ae = new tr([se], {
      width: Ge,
      height: ge,
      viewBox: "0 0 " + g + " " + U
    }), xe = B.makeSvgSpan([], [Ae], a);
    xe.height = U / 1e3, xe.style.width = Ge, xe.style.height = ge, M.push({
      type: "elem",
      elem: xe
    });
  } else {
    if (M.push($i(c, d, i)), M.push(wa), o === null) {
      var oe = L - y - v + 2 * Xl;
      M.push(Qi(u, oe, a));
    } else {
      var me = (L - y - v - x) / 2 + 2 * Xl;
      M.push(Qi(u, me, a)), M.push(wa), M.push($i(o, d, i)), M.push(wa), M.push(Qi(u, me, a));
    }
    M.push(wa), M.push($i(s, d, i));
  }
  var be = a.havingBaseStyle(re.TEXT), He = B.makeVList({
    positionType: "bottom",
    positionData: I,
    children: M
  }, be);
  return zs(B.makeSpan(["delimsizing", "mult"], [He], be), re.TEXT, a, l);
}, Ji = 80, Ki = 0.08, el = function(e, t, n, a, i) {
  var l = W4(e, a, n), s = new wr(e, l), o = new tr([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: j(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return B.makeSvgSpan(["hide-tail"], [o], i);
}, H2 = function(e, t) {
  var n = t.havingBaseSizing(), a = Jc("\\surd", e * n.sizeMultiplier, Qc, n), i = n.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, u = 0, c = 0, m;
  return a.type === "small" ? (c = 1e3 + 1e3 * l + Ji, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + Ki) / i, u = (1 + l) / i, s = el("sqrtMain", o, c, l, t), s.style.minWidth = "0.853em", m = 0.833 / i) : a.type === "large" ? (c = (1e3 + Ji) * On[a.size], u = (On[a.size] + l) / i, o = (On[a.size] + l + Ki) / i, s = el("sqrtSize" + a.size, o, c, l, t), s.style.minWidth = "1.02em", m = 1 / i) : (o = e + l + Ki, u = e + l, c = Math.floor(1e3 * e + l) + Ji, s = el("sqrtTall", o, c, l, t), s.style.minWidth = "0.742em", m = 1.056), s.height = u, s.style.height = j(o), {
    span: s,
    advanceWidth: m,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Zc = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], P2 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], $c = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], On = [0, 1.2, 1.8, 2.4, 3], q2 = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ee.contains(Zc, e) || ee.contains($c, e))
    return Xc(e, t, !1, n, a, i);
  if (ee.contains(P2, e))
    return Yc(e, On[t], !1, n, a, i);
  throw new J("Illegal delimiter: '" + e + "'");
}, U2 = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
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
}], G2 = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "stack"
}], Qc = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
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
}], V2 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Jc = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < n.length && n[l].type !== "stack"; l++) {
    var s = In(e, V2(n[l]), "math"), o = s.height + s.depth;
    if (n[l].type === "small") {
      var u = a.havingBaseStyle(n[l].style);
      o *= u.sizeMultiplier;
    }
    if (o > t)
      return n[l];
  }
  return n[n.length - 1];
}, Kc = function(e, t, n, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  ee.contains($c, e) ? s = U2 : ee.contains(Zc, e) ? s = Qc : s = G2;
  var o = Jc(e, t, s, a);
  return o.type === "small" ? z2(e, o.style, n, a, i, l) : o.type === "large" ? Xc(e, o.size, n, a, i, l) : Yc(e, t, n, a, i, l);
}, j2 = function(e, t, n, a, i, l) {
  var s = a.fontMetrics().axisHeight * a.sizeMultiplier, o = 901, u = 5 / a.fontMetrics().ptPerEm, c = Math.max(t - s, n + s), m = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    c / 500 * o,
    2 * c - u
  );
  return Kc(e, m, !0, a, i, l);
}, N0 = {
  sqrtImage: H2,
  sizedDelim: q2,
  sizeToMaxHeight: On,
  customSizedDelim: Kc,
  leftRightDelim: j2
}, Wo = {
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
}, W2 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Ti(r, e) {
  var t = xi(r);
  if (t && ee.contains(W2, t.text))
    return t;
  throw t ? new J("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new J("Invalid delimiter type '" + r.type + "'", r);
}
W({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = Ti(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Wo[r.funcName].size,
      mclass: Wo[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? B.makeSpan([r.mclass]) : N0.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(Ut(r.delim, r.mode));
    var t = new q.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = j(N0.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Xo(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
W({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new J("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: Ti(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
W({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Ti(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = ue(n.parseFunction(), "leftright-right");
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
    Xo(r);
    for (var t = ut(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (n = Math.max(t[l].height, n), a = Math.max(t[l].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (r.left === "." ? s = Gn(e, ["mopen"]) : s = N0.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var u = t[o], c = u.isMiddle;
        c && (t[o] = N0.leftRightDelim(c.delim, n, a, c.options, r.mode, []));
      }
    var m;
    if (r.right === ".")
      m = Gn(e, ["mclose"]);
    else {
      var g = r.rightColor ? e.withColor(r.rightColor) : e;
      m = N0.leftRightDelim(r.right, n, a, g, r.mode, ["mclose"]);
    }
    return t.push(m), B.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Xo(r);
    var t = It(r.body, e);
    if (r.left !== ".") {
      var n = new q.MathNode("mo", [Ut(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new q.MathNode("mo", [Ut(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Ms(t);
  }
});
W({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Ti(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new J("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = Gn(e, []);
    else {
      t = N0.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? Ut("|", "text") : Ut(r.delim, r.mode), n = new q.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Ls = (r, e) => {
  var t = B.wrapFragment(pe(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = ee.isCharacterBox(r.body);
  if (n === "sout")
    i = B.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var o = Ne({
      number: 0.6,
      unit: "pt"
    }, e), u = Ne({
      number: 0.35,
      unit: "ex"
    }, e), c = e.havingBaseSizing();
    a = a / c.sizeMultiplier;
    var m = t.height + t.depth + o + u;
    t.style.paddingLeft = j(m / 2 + o);
    var g = Math.floor(1e3 * m * a), d = V4(g), _ = new tr([new wr("phase", d)], {
      width: "400em",
      height: j(g / 1e3),
      viewBox: "0 0 400000 " + g,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = B.makeSvgSpan(["hide-tail"], [_], e), i.style.height = j(m), l = t.depth + o + u;
  } else {
    /cancel/.test(n) ? s || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var y = 0, E = 0, A = 0;
    /box/.test(n) ? (A = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), y = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : A), E = y) : n === "angl" ? (A = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), y = 4 * A, E = Math.max(0, 0.25 - t.depth)) : (y = s ? 0.2 : 0, E = y), i = I0.encloseSpan(t, n, y, E, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = j(A)) : n === "angl" && A !== 0.049 && (i.style.borderTopWidth = j(A), i.style.borderRightWidth = j(A)), l = t.depth + E, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var w;
  if (r.backgroundColor)
    w = B.makeVList({
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
    var v = /cancel|phase/.test(n) ? ["svg-align"] : [];
    w = B.makeVList({
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
          wrapperClasses: v
        }
      ]
    }, e);
  }
  return /cancel/.test(n) && (w.height = t.height, w.depth = t.depth), /cancel/.test(n) && !s ? B.makeSpan(["mord", "cancel-lap"], [w], e) : B.makeSpan(["mord"], [w], e);
}, Rs = (r, e) => {
  var t = 0, n = new q.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [De(r.body, e)]);
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
W({
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
    } = r, i = ue(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Ls,
  mathmlBuilder: Rs
});
W({
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
    } = r, i = ue(e[0], "color-token").color, l = ue(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: Ls,
  mathmlBuilder: Rs
});
W({
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
W({
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
  htmlBuilder: Ls,
  mathmlBuilder: Rs
});
W({
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
var eh = {};
function p0(r) {
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
    eh[t[o]] = s;
  i && (ei[e] = i), l && (ti[e] = l);
}
var X2 = {};
function b(r, e) {
  X2[r] = e;
}
function Yo(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Fi = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new J("{" + r.envName + "} can be used only in display mode.");
};
function Os(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function nr(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: s,
    autoTag: o,
    singleRow: u,
    emptySingleRow: c,
    maxNumCols: m,
    leqno: g
  } = e;
  if (r.gullet.beginGroup(), u || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var d = r.gullet.expandMacroAsText("\\arraystretch");
    if (d == null)
      l = 1;
    else if (l = parseFloat(d), !l || l < 0)
      throw new J("Invalid \\arraystretch: " + d);
  }
  r.gullet.beginGroup();
  var _ = [], y = [_], E = [], A = [], w = o != null ? [] : void 0;
  function v() {
    o && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function x() {
    w && (r.gullet.macros.get("\\df@tag") ? (w.push(r.subparse([new Ss("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!o && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (v(), A.push(Yo(r)); ; ) {
    var C = r.parseExpression(!1, u ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), C = {
      type: "ordgroup",
      mode: r.mode,
      body: C
    }, t && (C = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [C]
    }), _.push(C);
    var N = r.fetch().text;
    if (N === "&") {
      if (m && _.length === m) {
        if (u || s)
          throw new J("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (N === "\\end") {
      x(), _.length === 1 && C.type === "styling" && C.body[0].body.length === 0 && (y.length > 1 || !c) && y.pop(), A.length < y.length + 1 && A.push([]);
      break;
    } else if (N === "\\\\") {
      r.consume();
      var S = void 0;
      r.gullet.future().text !== " " && (S = r.parseSizeGroup(!0)), E.push(S ? S.value : null), x(), A.push(Yo(r)), _ = [], y.push(_), v();
    } else
      throw new J("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: l,
    body: y,
    cols: i,
    rowGaps: E,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: A,
    colSeparationType: s,
    tags: w,
    leqno: g
  };
}
function Hs(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var g0 = function(e, t) {
  var n, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), u = [], c = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), m = 1 / t.fontMetrics().ptPerEm, g = 5 * m;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var d = t.havingStyle(re.SCRIPT).sizeMultiplier;
    g = 0.2778 * (d / t.sizeMultiplier);
  }
  var _ = e.colSeparationType === "CD" ? Ne({
    number: 3,
    unit: "ex"
  }, t) : 12 * m, y = 3 * m, E = e.arraystretch * _, A = 0.7 * E, w = 0.3 * E, v = 0;
  function x(ct) {
    for (var v0 = 0; v0 < ct.length; ++v0)
      v0 > 0 && (v += 0.25), u.push({
        pos: v,
        isDashed: ct[v0]
      });
  }
  for (x(l[0]), n = 0; n < e.body.length; ++n) {
    var C = e.body[n], N = A, S = w;
    s < C.length && (s = C.length);
    var z = new Array(C.length);
    for (a = 0; a < C.length; ++a) {
      var L = pe(C[a], t);
      S < L.depth && (S = L.depth), N < L.height && (N = L.height), z[a] = L;
    }
    var R = e.rowGaps[n], I = 0;
    R && (I = Ne(R, t), I > 0 && (I += w, S < I && (S = I), I = 0)), e.addJot && (S += y), z.height = N, z.depth = S, v += N, z.pos = v, v += S + I, o[n] = z, x(l[n + 1]);
  }
  var M = v / 2 + t.fontMetrics().axisHeight, Ee = e.cols || [], U = [], Z, se, Ge = [];
  if (e.tags && e.tags.some((ct) => ct))
    for (n = 0; n < i; ++n) {
      var ge = o[n], Ae = ge.pos - M, xe = e.tags[n], oe = void 0;
      xe === !0 ? oe = B.makeSpan(["eqn-num"], [], t) : xe === !1 ? oe = B.makeSpan([], [], t) : oe = B.makeSpan([], ut(xe, t, !0), t), oe.depth = ge.depth, oe.height = ge.height, Ge.push({
        type: "elem",
        elem: oe,
        shift: Ae
      });
    }
  for (
    a = 0, se = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || se < Ee.length;
    ++a, ++se
  ) {
    for (var me = Ee[se] || {}, be = !0; me.type === "separator"; ) {
      if (be || (Z = B.makeSpan(["arraycolsep"], []), Z.style.width = j(t.fontMetrics().doubleRuleSep), U.push(Z)), me.separator === "|" || me.separator === ":") {
        var He = me.separator === "|" ? "solid" : "dashed", G = B.makeSpan(["vertical-separator"], [], t);
        G.style.height = j(v), G.style.borderRightWidth = j(c), G.style.borderRightStyle = He, G.style.margin = "0 " + j(-c / 2);
        var rt = v - M;
        rt && (G.style.verticalAlign = j(-rt)), U.push(G);
      } else
        throw new J("Invalid separator type: " + me.separator);
      se++, me = Ee[se] || {}, be = !1;
    }
    if (!(a >= s)) {
      var Ye = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Ye = ee.deflt(me.pregap, g), Ye !== 0 && (Z = B.makeSpan(["arraycolsep"], []), Z.style.width = j(Ye), U.push(Z)));
      var nt = [];
      for (n = 0; n < i; ++n) {
        var P = o[n], Le = P[a];
        if (Le) {
          var O = P.pos - M;
          Le.depth = P.depth, Le.height = P.height, nt.push({
            type: "elem",
            elem: Le,
            shift: O
          });
        }
      }
      nt = B.makeVList({
        positionType: "individualShift",
        children: nt
      }, t), nt = B.makeSpan(["col-align-" + (me.align || "c")], [nt]), U.push(nt), (a < s - 1 || e.hskipBeforeAndAfter) && (Ye = ee.deflt(me.postgap, g), Ye !== 0 && (Z = B.makeSpan(["arraycolsep"], []), Z.style.width = j(Ye), U.push(Z)));
    }
  }
  if (o = B.makeSpan(["mtable"], U), u.length > 0) {
    for (var ne = B.makeLineSpan("hline", t, c), te = B.makeLineSpan("hdashline", t, c), _e = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; u.length > 0; ) {
      var ke = u.pop(), at = ke.pos - M;
      ke.isDashed ? _e.push({
        type: "elem",
        elem: te,
        shift: at
      }) : _e.push({
        type: "elem",
        elem: ne,
        shift: at
      });
    }
    o = B.makeVList({
      positionType: "individualShift",
      children: _e
    }, t);
  }
  if (Ge.length === 0)
    return B.makeSpan(["mord"], [o], t);
  var Ve = B.makeVList({
    positionType: "individualShift",
    children: Ge
  }, t);
  return Ve = B.makeSpan(["tag"], [Ve], t), B.makeFragment([o, Ve]);
}, Y2 = {
  c: "center ",
  l: "left ",
  r: "right "
}, b0 = function(e, t) {
  for (var n = [], a = new q.MathNode("mtd", [], ["mtr-glue"]), i = new q.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], u = 0; u < s.length; u++)
      o.push(new q.MathNode("mtd", [De(s[u], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), n.push(new q.MathNode("mtr", o));
  }
  var c = new q.MathNode("mtable", n), m = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  c.setAttribute("rowspacing", j(m));
  var g = "", d = "";
  if (e.cols && e.cols.length > 0) {
    var _ = e.cols, y = "", E = !1, A = 0, w = _.length;
    _[0].type === "separator" && (g += "top ", A = 1), _[_.length - 1].type === "separator" && (g += "bottom ", w -= 1);
    for (var v = A; v < w; v++)
      _[v].type === "align" ? (d += Y2[_[v].align], E && (y += "none "), E = !0) : _[v].type === "separator" && E && (y += _[v].separator === "|" ? "solid " : "dashed ", E = !1);
    c.setAttribute("columnalign", d.trim()), /[sd]/.test(y) && c.setAttribute("columnlines", y.trim());
  }
  if (e.colSeparationType === "align") {
    for (var x = e.cols || [], C = "", N = 1; N < x.length; N++)
      C += N % 2 ? "0em " : "1em ";
    c.setAttribute("columnspacing", C.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? c.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? c.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? c.setAttribute("columnspacing", "0.5em") : c.setAttribute("columnspacing", "1em");
  var S = "", z = e.hLinesBeforeRow;
  g += z[0].length > 0 ? "left " : "", g += z[z.length - 1].length > 0 ? "right " : "";
  for (var L = 1; L < z.length - 1; L++)
    S += z[L].length === 0 ? "none " : z[L][0] ? "dashed " : "solid ";
  return /[sd]/.test(S) && c.setAttribute("rowlines", S.trim()), g !== "" && (c = new q.MathNode("menclose", [c]), c.setAttribute("notation", g.trim())), e.arraystretch && e.arraystretch < 1 && (c = new q.MathNode("mstyle", [c]), c.setAttribute("scriptlevel", "1")), c;
}, th = function(e, t) {
  e.envName.indexOf("ed") === -1 && Fi(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = nr(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : Os(e.envName),
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
    for (var c = "", m = 0; m < t[0].body.length; m++) {
      var g = ue(t[0].body[m], "textord");
      c += g.text;
    }
    s = Number(c), o = s * 2;
  }
  var d = !o;
  l.body.forEach(function(A) {
    for (var w = 1; w < A.length; w += 2) {
      var v = ue(A[w], "styling"), x = ue(v.body[0], "ordgroup");
      x.body.unshift(u);
    }
    if (d)
      o < A.length && (o = A.length);
    else {
      var C = A.length / 2;
      if (s < C)
        throw new J("Too many math in a row: " + ("expected " + s + ", but got " + C), A[0]);
    }
  });
  for (var _ = 0; _ < o; ++_) {
    var y = "r", E = 0;
    _ % 2 === 1 ? y = "l" : _ > 0 && d && (E = 1), n[_] = {
      type: "align",
      align: y,
      pregap: E,
      postgap: 0
    };
  }
  return l.colSeparationType = d ? "align" : "alignat", l;
};
p0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = xi(e[0]), n = t ? [e[0]] : ue(e[0], "ordgroup").body, a = n.map(function(l) {
      var s = Ns(l), o = s.text;
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
      throw new J("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return nr(r.parser, i, Hs(r.envName));
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
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
          throw new J("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = nr(r.parser, n, Hs(r.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
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
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = nr(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = xi(e[0]), n = t ? [e[0]] : ue(e[0], "ordgroup").body, a = n.map(function(l) {
      var s = Ns(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new J("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new J("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = nr(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new J("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
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
    }, t = nr(r.parser, e, Hs(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: th,
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    ee.contains(["gather", "gather*"], r.envName) && Fi(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Os(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return nr(r.parser, e, "display");
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: th,
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Fi(r);
    var e = {
      autoTag: Os(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return nr(r.parser, e, "display");
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
p0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return Fi(r), N2(r.parser);
  },
  htmlBuilder: g0,
  mathmlBuilder: b0
});
b("\\nonumber", "\\gdef\\@eqnsw{0}");
b("\\notag", "\\nonumber");
W({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new J(r.funcName + " valid only within array environment");
  }
});
var Zo = eh;
W({
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
      throw new J("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += ue(a.body[l], "textord").text;
    if (n === "\\begin") {
      if (!Zo.hasOwnProperty(i))
        throw new J("No such environment: " + i, a);
      var s = Zo[i], {
        args: o,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", s), c = {
        mode: t.mode,
        envName: i,
        parser: t
      }, m = s.handler(c, o, u);
      t.expect("\\end", !1);
      var g = t.nextToken, d = ue(t.parseFunction(), "environment");
      if (d.name !== i)
        throw new J("Mismatch: \\begin{" + i + "} matched by \\end{" + d.name + "}", g);
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
var rh = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return pe(r.body, n);
}, nh = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return De(r.body, n);
}, $o = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
W({
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
    } = r, a = ri(e[0]), i = n;
    return i in $o && (i = $o[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: rh,
  mathmlBuilder: nh
});
W({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0], a = ee.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Si(n),
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
W({
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
  htmlBuilder: rh,
  mathmlBuilder: nh
});
var ah = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= re.SCRIPT.id ? t.text() : re.DISPLAY : r === "text" && t.size === re.DISPLAY.size ? t = re.TEXT : r === "script" ? t = re.SCRIPT : r === "scriptscript" && (t = re.SCRIPTSCRIPT), t;
}, Ps = (r, e) => {
  var t = ah(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var l = pe(r.numer, i, e);
  if (r.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var u = pe(r.denom, i, e), c, m, g;
  r.hasBarLine ? (r.barSize ? (m = Ne(r.barSize, e), c = B.makeLineSpan("frac-line", e, m)) : c = B.makeLineSpan("frac-line", e), m = c.height, g = c.height) : (c = null, m = 0, g = e.fontMetrics().defaultRuleThickness);
  var d, _, y;
  t.size === re.DISPLAY.size || r.size === "display" ? (d = e.fontMetrics().num1, m > 0 ? _ = 3 * g : _ = 7 * g, y = e.fontMetrics().denom1) : (m > 0 ? (d = e.fontMetrics().num2, _ = g) : (d = e.fontMetrics().num3, _ = 3 * g), y = e.fontMetrics().denom2);
  var E;
  if (c) {
    var w = e.fontMetrics().axisHeight;
    d - l.depth - (w + 0.5 * m) < _ && (d += _ - (d - l.depth - (w + 0.5 * m))), w - 0.5 * m - (u.height - y) < _ && (y += _ - (w - 0.5 * m - (u.height - y)));
    var v = -(w - 0.5 * m);
    E = B.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: y
      }, {
        type: "elem",
        elem: c,
        shift: v
      }, {
        type: "elem",
        elem: l,
        shift: -d
      }]
    }, e);
  } else {
    var A = d - l.depth - (u.height - y);
    A < _ && (d += 0.5 * (_ - A), y += 0.5 * (_ - A)), E = B.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: y
      }, {
        type: "elem",
        elem: l,
        shift: -d
      }]
    }, e);
  }
  i = e.havingStyle(t), E.height *= i.sizeMultiplier / e.sizeMultiplier, E.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var x;
  t.size === re.DISPLAY.size ? x = e.fontMetrics().delim1 : t.size === re.SCRIPTSCRIPT.size ? x = e.havingStyle(re.SCRIPT).fontMetrics().delim2 : x = e.fontMetrics().delim2;
  var C, N;
  return r.leftDelim == null ? C = Gn(e, ["mopen"]) : C = N0.customSizedDelim(r.leftDelim, x, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? N = B.makeSpan([]) : r.rightDelim == null ? N = Gn(e, ["mclose"]) : N = N0.customSizedDelim(r.rightDelim, x, !0, e.havingStyle(t), r.mode, ["mclose"]), B.makeSpan(["mord"].concat(i.sizingClasses(e)), [C, B.makeSpan(["mfrac"], [E]), N], e);
}, qs = (r, e) => {
  var t = new q.MathNode("mfrac", [De(r.numer, e), De(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = Ne(r.barSize, e);
    t.setAttribute("linethickness", j(n));
  }
  var a = ah(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new q.MathNode("mstyle", [t]);
    var i = a.size === re.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var l = [];
    if (r.leftDelim != null) {
      var s = new q.MathNode("mo", [new q.TextNode(r.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), r.rightDelim != null) {
      var o = new q.MathNode("mo", [new q.TextNode(r.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    return Ms(l);
  }
  return t;
};
W({
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
  htmlBuilder: Ps,
  mathmlBuilder: qs
});
W({
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
W({
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
var Qo = ["display", "text", "script", "scriptscript"], Jo = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
W({
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
    } = r, n = e[4], a = e[5], i = ri(e[0]), l = i.type === "atom" && i.family === "open" ? Jo(i.text) : null, s = ri(e[1]), o = s.type === "atom" && s.family === "close" ? Jo(s.text) : null, u = ue(e[2], "size"), c, m = null;
    u.isBlank ? c = !0 : (m = u.value, c = m.number > 0);
    var g = "auto", d = e[3];
    if (d.type === "ordgroup") {
      if (d.body.length > 0) {
        var _ = ue(d.body[0], "textord");
        g = Qo[Number(_.text)];
      }
    } else
      d = ue(d, "textord"), g = Qo[Number(d.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: c,
      barSize: m,
      leftDelim: l,
      rightDelim: o,
      size: g
    };
  },
  htmlBuilder: Ps,
  mathmlBuilder: qs
});
W({
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
      size: ue(e[0], "size").value,
      token: a
    };
  }
});
W({
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
    } = r, a = e[0], i = F4(ue(e[1], "infix").size), l = e[2], s = i.number > 0;
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
  htmlBuilder: Ps,
  mathmlBuilder: qs
});
var ih = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? pe(r.sup, e.havingStyle(t.sup()), e) : pe(r.sub, e.havingStyle(t.sub()), e), a = ue(r.base, "horizBrace")) : a = ue(r, "horizBrace");
  var i = pe(a.base, e.havingBaseStyle(re.DISPLAY)), l = I0.svgSpan(a, e), s;
  if (a.isOver ? (s = B.makeVList({
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
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = B.makeVList({
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
    var o = B.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
    a.isOver ? s = B.makeVList({
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
    }, e) : s = B.makeVList({
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
  return B.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
}, Z2 = (r, e) => {
  var t = I0.mathMLnode(r.label);
  return new q.MathNode(r.isOver ? "mover" : "munder", [De(r.base, e), t]);
};
W({
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
  htmlBuilder: ih,
  mathmlBuilder: Z2
});
W({
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
    } = r, n = e[1], a = ue(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: qe(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = ut(r.body, e, !1);
    return B.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = rr(r.body, e);
    return t instanceof Kt || (t = new Kt("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
W({
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
    } = r, n = ue(e[0], "url").url;
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
      body: qe(s)
    };
  }
});
W({
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
      body: qe(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = ut(r.body, e, !1);
    return B.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new q.MathNode("mrow", It(r.body, e));
  }
});
W({
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
    } = r, i = ue(e[0], "raw").string, l = e[1];
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
        for (var u = i.split(","), c = 0; c < u.length; c++) {
          var m = u[c].split("=");
          if (m.length !== 2)
            throw new J("Error parsing key-value for \\htmlData");
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
      body: qe(l)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = ut(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = B.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => rr(r.body, e)
});
W({
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
      html: qe(e[0]),
      mathml: qe(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = ut(r.html, e, !1);
    return B.makeFragment(t);
  },
  mathmlBuilder: (r, e) => rr(r.mathml, e)
});
var tl = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new J("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!$4(n))
    throw new J("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
W({
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
      for (var o = ue(t[0], "raw").string, u = o.split(","), c = 0; c < u.length; c++) {
        var m = u[c].split("=");
        if (m.length === 2) {
          var g = m[1].trim();
          switch (m[0].trim()) {
            case "alt":
              s = g;
              break;
            case "width":
              a = tl(g);
              break;
            case "height":
              i = tl(g);
              break;
            case "totalheight":
              l = tl(g);
              break;
            default:
              throw new J("Invalid key: '" + m[0] + "' in \\includegraphics.");
          }
        }
      }
    var d = ue(e[0], "url").url;
    return s === "" && (s = d, s = s.replace(/^.*[\\/]/, ""), s = s.substring(0, s.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: d
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: s,
      width: a,
      height: i,
      totalheight: l,
      src: d
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = Ne(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = Ne(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = Ne(r.width, e));
    var i = {
      height: j(t + n)
    };
    a > 0 && (i.width = j(a)), n > 0 && (i.verticalAlign = j(-n));
    var l = new Q4(r.src, r.alt, i);
    return l.height = t, l.depth = n, l;
  },
  mathmlBuilder: (r, e) => {
    var t = new q.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = Ne(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = Ne(r.totalheight, e) - n, t.setAttribute("valign", j(-a))), t.setAttribute("height", j(n + a)), r.width.number > 0) {
      var i = Ne(r.width, e);
      t.setAttribute("width", j(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
W({
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
    } = r, a = ue(e[0], "size");
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
    return B.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = Ne(r.dimension, e);
    return new q.SpaceNode(t);
  }
});
W({
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
    r.alignment === "clap" ? (t = B.makeSpan([], [pe(r.body, e)]), t = B.makeSpan(["inner"], [t], e)) : t = B.makeSpan(["inner"], [pe(r.body, e)]);
    var n = B.makeSpan(["fix"], []), a = B.makeSpan([r.alignment], [t, n], e), i = B.makeSpan(["strut"]);
    return i.style.height = j(a.height + a.depth), a.depth && (i.style.verticalAlign = j(-a.depth)), a.children.unshift(i), a = B.makeSpan(["thinbox"], [a], e), B.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new q.MathNode("mpadded", [De(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
W({
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
W({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new J("Mismatched " + r.funcName);
  }
});
var Ko = (r, e) => {
  switch (e.style.size) {
    case re.DISPLAY.size:
      return r.display;
    case re.TEXT.size:
      return r.text;
    case re.SCRIPT.size:
      return r.script;
    case re.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
W({
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
      display: qe(e[0]),
      text: qe(e[1]),
      script: qe(e[2]),
      scriptscript: qe(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ko(r, e), n = ut(t, e, !1);
    return B.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Ko(r, e);
    return rr(t, e);
  }
});
var lh = (r, e, t, n, a, i, l) => {
  r = B.makeSpan([], [r]);
  var s = t && ee.isCharacterBox(t), o, u;
  if (e) {
    var c = pe(e, n.havingStyle(a.sup()), n);
    u = {
      elem: c,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - c.depth)
    };
  }
  if (t) {
    var m = pe(t, n.havingStyle(a.sub()), n);
    o = {
      elem: m,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - m.height)
    };
  }
  var g;
  if (u && o) {
    var d = n.fontMetrics().bigOpSpacing5 + o.elem.height + o.elem.depth + o.kern + r.depth + l;
    g = B.makeVList({
      positionType: "bottom",
      positionData: d,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: j(-i)
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
        marginLeft: j(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (o) {
    var _ = r.height - l;
    g = B.makeVList({
      positionType: "top",
      positionData: _,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: j(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, n);
  } else if (u) {
    var y = r.depth + l;
    g = B.makeVList({
      positionType: "bottom",
      positionData: y,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: j(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return r;
  var E = [g];
  if (o && i !== 0 && !s) {
    var A = B.makeSpan(["mspace"], [], n);
    A.style.marginRight = j(i), E.unshift(A);
  }
  return B.makeSpan(["mop", "op-limits"], E, n);
}, sh = ["\\smallint"], gn = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = ue(r.base, "op"), a = !0) : i = ue(r, "op");
  var l = e.style, s = !1;
  l.size === re.DISPLAY.size && i.symbol && !ee.contains(sh, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var u = s ? "Size2-Regular" : "Size1-Regular", c = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (c = i.name.slice(1), i.name = c === "oiint" ? "\\iint" : "\\iiint"), o = B.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), c.length > 0) {
      var m = o.italic, g = B.staticSvg(c + "Size" + (s ? "2" : "1"), e);
      o = B.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: o,
          shift: 0
        }, {
          type: "elem",
          elem: g,
          shift: s ? 0.08 : 0
        }]
      }, e), i.name = "\\" + c, o.classes.unshift("mop"), o.italic = m;
    }
  } else if (i.body) {
    var d = ut(i.body, e, !0);
    d.length === 1 && d[0] instanceof d0 ? (o = d[0], o.classes[0] = "mop") : o = B.makeSpan(["mop"], d, e);
  } else {
    for (var _ = [], y = 1; y < i.name.length; y++)
      _.push(B.mathsym(i.name[y], i.mode, e));
    o = B.makeSpan(["mop"], _, e);
  }
  var E = 0, A = 0;
  return (o instanceof d0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (E = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, A = o.italic), a ? lh(o, t, n, e, l, A, E) : (E && (o.style.position = "relative", o.style.top = j(E)), o);
}, aa = (r, e) => {
  var t;
  if (r.symbol)
    t = new Kt("mo", [Ut(r.name, r.mode)]), ee.contains(sh, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new Kt("mo", It(r.body, e));
  else {
    t = new Kt("mi", [new Rn(r.name.slice(1))]);
    var n = new Kt("mo", [Ut("⁡", "text")]);
    r.parentIsSupSub ? t = new Kt("mrow", [t, n]) : t = Oc([t, n]);
  }
  return t;
}, $2 = {
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
W({
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
    return a.length === 1 && (a = $2[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: aa
});
W({
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
      body: qe(n)
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: aa
});
var Q2 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
W({
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
  htmlBuilder: gn,
  mathmlBuilder: aa
});
W({
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
  htmlBuilder: gn,
  mathmlBuilder: aa
});
W({
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
    return n.length === 1 && (n = Q2[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: aa
});
var oh = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = ue(r.base, "operatorname"), a = !0) : i = ue(r, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((m) => {
      var g = m.text;
      return typeof g == "string" ? {
        type: "textord",
        mode: m.mode,
        text: g
      } : m;
    }), o = ut(s, e.withFont("mathrm"), !0), u = 0; u < o.length; u++) {
      var c = o[u];
      c instanceof d0 && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = B.makeSpan(["mop"], o, e);
  } else
    l = B.makeSpan(["mop"], [], e);
  return a ? lh(l, t, n, e, e.style, 0, 0) : l;
}, J2 = (r, e) => {
  for (var t = It(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof q.SpaceNode)) if (i instanceof q.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof q.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var s = t.map((c) => c.toText()).join("");
    t = [new q.TextNode(s)];
  }
  var o = new q.MathNode("mi", t);
  o.setAttribute("mathvariant", "normal");
  var u = new q.MathNode("mo", [Ut("⁡", "text")]);
  return r.parentIsSupSub ? new q.MathNode("mrow", [o, u]) : q.newDocumentFragment([o, u]);
};
W({
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
      body: qe(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: oh,
  mathmlBuilder: J2
});
b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
zr({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? B.makeFragment(ut(r.body, e, !1)) : B.makeSpan(["mord"], ut(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return rr(r.body, e, !0);
  }
});
W({
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
    var t = pe(r.body, e.havingCrampedStyle()), n = B.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = B.makeVList({
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
    return B.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mo", [new q.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new q.MathNode("mover", [De(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
W({
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
      body: qe(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = ut(r.body, e.withPhantom(), !1);
    return B.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = It(r.body, e);
    return new q.MathNode("mphantom", t);
  }
});
W({
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
    var t = B.makeSpan([], [pe(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0, t.children[n].depth = 0;
    return t = B.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), B.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = It(qe(r.body), e), n = new q.MathNode("mphantom", t), a = new q.MathNode("mpadded", [n]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
W({
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
    var t = B.makeSpan(["inner"], [pe(r.body, e.withPhantom())]), n = B.makeSpan(["fix"], []);
    return B.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = It(qe(r.body), e), n = new q.MathNode("mphantom", t), a = new q.MathNode("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
W({
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
    } = r, n = ue(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = pe(r.body, e), n = Ne(r.dy, e);
    return B.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mpadded", [De(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
W({
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
W({
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
    } = r, a = t[0], i = ue(e[0], "size"), l = ue(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && ue(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(r, e) {
    var t = B.makeSpan(["mord", "rule"], [], e), n = Ne(r.width, e), a = Ne(r.height, e), i = r.shift ? Ne(r.shift, e) : 0;
    return t.style.borderRightWidth = j(n), t.style.borderTopWidth = j(a), t.style.bottom = j(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = Ne(r.width, e), n = Ne(r.height, e), a = r.shift ? Ne(r.shift, e) : 0, i = e.color && e.getColor() || "black", l = new q.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", j(t)), l.setAttribute("height", j(n));
    var s = new q.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", j(a)) : (s.setAttribute("height", j(a)), s.setAttribute("depth", j(-a))), s.setAttribute("voffset", j(a)), s;
  }
});
function uh(r, e, t) {
  for (var n = ut(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var l = n[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[l + 1] === "reset-size" + e.size && (n[i].classes[l + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return B.makeFragment(n);
}
var eu = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], K2 = (r, e) => {
  var t = e.havingSize(r.size);
  return uh(r.body, t, e);
};
W({
  type: "sizing",
  names: eu,
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
      size: eu.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: K2,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = It(r.body, t), a = new q.MathNode("mstyle", n);
    return a.setAttribute("mathsize", j(t.sizeMultiplier)), a;
  }
});
W({
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
    } = r, a = !1, i = !1, l = t[0] && ue(t[0], "ordgroup");
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
    var c = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: c,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = B.makeSpan([], [pe(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = B.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return B.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new q.MathNode("mpadded", [De(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
W({
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
    var t = pe(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = B.wrapFragment(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < re.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: u,
      advanceWidth: c
    } = N0.sqrtImage(s, e), m = o.height - u;
    m > t.height + t.depth + l && (l = (l + m - t.height - t.depth) / 2);
    var g = o.height - t.height - l - u;
    t.style.paddingLeft = j(c);
    var d = B.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + g)
      }, {
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: u
      }]
    }, e);
    if (r.index) {
      var _ = e.havingStyle(re.SCRIPTSCRIPT), y = pe(r.index, _, e), E = 0.6 * (d.height - d.depth), A = B.makeVList({
        positionType: "shift",
        positionData: -E,
        children: [{
          type: "elem",
          elem: y
        }]
      }, e), w = B.makeSpan(["root"], [A]);
      return B.makeSpan(["mord", "sqrt"], [w, d], e);
    } else
      return B.makeSpan(["mord", "sqrt"], [d], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new q.MathNode("mroot", [De(t, e), De(n, e)]) : new q.MathNode("msqrt", [De(t, e)]);
  }
});
var tu = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
};
W({
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
    var t = tu[r.style], n = e.havingStyle(t).withFont("");
    return uh(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = tu[r.style], n = e.havingStyle(t), a = It(r.body, n), i = new q.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[r.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var em = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === re.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? gn : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === re.DISPLAY.size || n.limits);
      return i ? oh : null;
    } else {
      if (n.type === "accent")
        return ee.isCharacterBox(n.base) ? Is : null;
      if (n.type === "horizBrace") {
        var l = !e.sub;
        return l === n.isOver ? ih : null;
      } else
        return null;
    }
  else return null;
};
zr({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = em(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, l = pe(n, e), s, o, u = e.fontMetrics(), c = 0, m = 0, g = n && ee.isCharacterBox(n);
    if (a) {
      var d = e.havingStyle(e.style.sup());
      s = pe(a, d, e), g || (c = l.height - d.fontMetrics().supDrop * d.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var _ = e.havingStyle(e.style.sub());
      o = pe(i, _, e), g || (m = l.depth + _.fontMetrics().subDrop * _.sizeMultiplier / e.sizeMultiplier);
    }
    var y;
    e.style === re.DISPLAY ? y = u.sup1 : e.style.cramped ? y = u.sup3 : y = u.sup2;
    var E = e.sizeMultiplier, A = j(0.5 / u.ptPerEm / E), w = null;
    if (o) {
      var v = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof d0 || v) && (w = j(-l.italic));
    }
    var x;
    if (s && o) {
      c = Math.max(c, y, s.depth + 0.25 * u.xHeight), m = Math.max(m, u.sub2);
      var C = u.defaultRuleThickness, N = 4 * C;
      if (c - s.depth - (o.height - m) < N) {
        m = N - (c - s.depth) + o.height;
        var S = 0.8 * u.xHeight - (c - s.depth);
        S > 0 && (c += S, m -= S);
      }
      var z = [{
        type: "elem",
        elem: o,
        shift: m,
        marginRight: A,
        marginLeft: w
      }, {
        type: "elem",
        elem: s,
        shift: -c,
        marginRight: A
      }];
      x = B.makeVList({
        positionType: "individualShift",
        children: z
      }, e);
    } else if (o) {
      m = Math.max(m, u.sub1, o.height - 0.8 * u.xHeight);
      var L = [{
        type: "elem",
        elem: o,
        marginLeft: w,
        marginRight: A
      }];
      x = B.makeVList({
        positionType: "shift",
        positionData: m,
        children: L
      }, e);
    } else if (s)
      c = Math.max(c, y, s.depth + 0.25 * u.xHeight), x = B.makeVList({
        positionType: "shift",
        positionData: -c,
        children: [{
          type: "elem",
          elem: s,
          marginRight: A
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var R = jl(l, "right") || "mord";
    return B.makeSpan([R], [l, B.makeSpan(["msupsub"], [x])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [De(r.base, e)];
    r.sub && i.push(De(r.sub, e)), r.sup && i.push(De(r.sup, e));
    var l;
    if (t)
      l = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var u = r.base;
        u && u.type === "op" && u.limits && e.style === re.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === re.DISPLAY || u.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var o = r.base;
        o && o.type === "op" && o.limits && (e.style === re.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === re.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = r.base;
      s && s.type === "op" && s.limits && (e.style === re.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === re.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new q.MathNode(l, i);
  }
});
zr({
  type: "atom",
  htmlBuilder(r, e) {
    return B.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mo", [Ut(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Bs(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var ch = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
zr({
  type: "mathord",
  htmlBuilder(r, e) {
    return B.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mi", [Ut(r.text, r.mode, e)]), n = Bs(r, e) || "italic";
    return n !== ch[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
zr({
  type: "textord",
  htmlBuilder(r, e) {
    return B.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = Ut(r.text, r.mode, e), n = Bs(r, e) || "normal", a;
    return r.mode === "text" ? a = new q.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new q.MathNode("mn", [t]) : r.text === "\\prime" ? a = new q.MathNode("mo", [t]) : a = new q.MathNode("mi", [t]), n !== ch[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var rl = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, nl = {
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
zr({
  type: "spacing",
  htmlBuilder(r, e) {
    if (nl.hasOwnProperty(r.text)) {
      var t = nl[r.text].className || "";
      if (r.mode === "text") {
        var n = B.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return B.makeSpan(["mspace", t], [B.mathsym(r.text, r.mode, e)], e);
    } else {
      if (rl.hasOwnProperty(r.text))
        return B.makeSpan(["mspace", rl[r.text]], [], e);
      throw new J('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (nl.hasOwnProperty(r.text))
      t = new q.MathNode("mtext", [new q.TextNode(" ")]);
    else {
      if (rl.hasOwnProperty(r.text))
        return new q.MathNode("mspace");
      throw new J('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var ru = () => {
  var r = new q.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
zr({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mtable", [new q.MathNode("mtr", [ru(), new q.MathNode("mtd", [rr(r.body, e)]), ru(), new q.MathNode("mtd", [rr(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var nu = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, au = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, tm = {
  "\\textit": "textit",
  "\\textup": "textup"
}, iu = (r, e) => {
  var t = r.font;
  if (t) {
    if (nu[t])
      return e.withTextFontFamily(nu[t]);
    if (au[t])
      return e.withTextFontWeight(au[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(tm[t]);
};
W({
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
      body: qe(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = iu(r, e), n = ut(r.body, t, !0);
    return B.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = iu(r, e);
    return rr(r.body, t);
  }
});
W({
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
    var t = pe(r.body, e), n = B.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = B.makeVList({
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
    return B.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new q.MathNode("mo", [new q.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new q.MathNode("munder", [De(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
W({
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
    var t = pe(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return B.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new q.MathNode("mpadded", [De(r.body, e)], ["vcenter"]);
  }
});
W({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new J("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = lu(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), n.push(B.makeSymbol(l, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return B.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), B.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new q.TextNode(lu(r)), n = new q.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var lu = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), rm = Lc;
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
var su = {
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
        throw new J("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = su[e.text], n == null || n >= t)
      throw new J("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = su[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Us = (r, e, t) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new J("\\newcommand's first argument must be a macro name");
  var a = n[0].text, i = r.isDefined(a);
  if (i && !e)
    throw new J("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new J("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var s = "", o = r.expandNextToken(); o.text !== "]" && o.text !== "EOF"; )
      s += o.text, o = r.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new J("Invalid number of arguments: " + s);
    l = parseInt(s), n = r.consumeArg().tokens;
  }
  return r.macros.set(a, {
    tokens: n,
    numArgs: l
  }), "";
};
b("\\newcommand", (r) => Us(r, !1, !0));
b("\\renewcommand", (r) => Us(r, !0, !1));
b("\\providecommand", (r) => Us(r, !0, !0));
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
  return console.log(e, r.macros.get(t), rm[t], Ue.math[t], Ue.text[t]), "";
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
var ou = {
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
  return t in ou ? e = ou[t] : (t.slice(0, 4) === "\\not" || t in Ue.math && ee.contains(["bin", "rel"], Ue.math[t].group)) && (e = "\\dotsb"), e;
});
var Gs = {
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
  return e in Gs ? "\\ldots\\," : "\\ldots";
});
b("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Gs && e !== "," ? "\\ldots\\," : "\\ldots";
});
b("\\cdots", function(r) {
  var e = r.future().text;
  return e in Gs ? "\\@cdots\\," : "\\@cdots";
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
    throw new J("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
b("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
b("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
b("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
b("\\newline", "\\\\\\relax");
b("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var hh = j(M0["Main-Regular"][84][1] - 0.7 * M0["Main-Regular"][65][1]);
b("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + hh + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
b("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + hh + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var fh = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var o = (m) => (g) => {
    r && (g.macros.set("|", l), a.length && g.macros.set("\\|", s));
    var d = m;
    if (!m && a.length) {
      var _ = g.future();
      _.text === "|" && (g.popToken(), d = !0);
    }
    return {
      tokens: d ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", o(!1)), a.length && e.macros.set("\\|", o(!0));
  var u = e.consumeArg().tokens, c = e.expandTokens([
    ...i,
    ...u,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: c.reverse(),
    numArgs: 0
  };
};
b("\\bra@ket", fh(!1));
b("\\bra@set", fh(!0));
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
function Vs() {
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
let Lr = Vs();
function mh(r) {
  Lr = r;
}
const dh = /[&<>"']/, nm = new RegExp(dh.source, "g"), ph = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, am = new RegExp(ph.source, "g"), im = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, uu = (r) => im[r];
function Mt(r, e) {
  if (e) {
    if (dh.test(r))
      return r.replace(nm, uu);
  } else if (ph.test(r))
    return r.replace(am, uu);
  return r;
}
const lm = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function sm(r) {
  return r.replace(lm, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const om = /(^|[^\[])\^/g;
function we(r, e) {
  let t = typeof r == "string" ? r : r.source;
  e = e || "";
  const n = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(om, "$1"), t = t.replace(a, l), n;
    },
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
function cu(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const Hn = { exec: () => null };
function hu(r, e) {
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
function ka(r, e, t) {
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
function um(r, e) {
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
function fu(r, e, t, n) {
  const a = e.href, i = e.title ? Mt(e.title) : null, l = r[1].replace(/\\([\[\]])/g, "$1");
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
    text: Mt(l)
  };
}
function cm(r, e) {
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
class ni {
  // set by the lexer
  constructor(e) {
    Se(this, "options");
    Se(this, "rules");
    // set by the lexer
    Se(this, "lexer");
    this.options = e || Lr;
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
        text: this.options.pedantic ? n : ka(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], a = cm(n, t[3] || "");
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
        const a = ka(n, "#");
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
      n = ka(n.replace(/^ *>[ \t]?/gm, ""), `
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
        let c = !1;
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e))
          break;
        s = t[0], e = e.substring(s.length);
        let m = t[2].split(`
`, 1)[0].replace(/^\t+/, (A) => " ".repeat(3 * A.length)), g = e.split(`
`, 1)[0], d = 0;
        this.options.pedantic ? (d = 2, o = m.trimStart()) : (d = t[2].search(/[^ ]/), d = d > 4 ? 1 : d, o = m.slice(d), d += t[1].length);
        let _ = !1;
        if (!m && /^ *$/.test(g) && (s += g + `
`, e = e.substring(g.length + 1), c = !0), !c) {
          const A = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), w = new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), v = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`), x = new RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
          for (; e; ) {
            const C = e.split(`
`, 1)[0];
            if (g = C, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), v.test(g) || x.test(g) || A.test(g) || w.test(e))
              break;
            if (g.search(/[^ ]/) >= d || !g.trim())
              o += `
` + g.slice(d);
            else {
              if (_ || m.search(/[^ ]/) >= 4 || v.test(m) || x.test(m) || w.test(m))
                break;
              o += `
` + g;
            }
            !_ && !g.trim() && (_ = !0), s += C + `
`, e = e.substring(C.length + 1), m = g.slice(d);
          }
        }
        i.loose || (u ? i.loose = !0 : /\n *\n *$/.test(s) && (u = !0));
        let y = null, E;
        this.options.gfm && (y = /^\[[ xX]\] /.exec(o), y && (E = y[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: s,
          task: !!y,
          checked: E,
          loose: !1,
          text: o,
          tokens: []
        }), i.raw += s;
      }
      i.items[i.items.length - 1].raw = s.trimEnd(), i.items[i.items.length - 1].text = o.trimEnd(), i.raw = i.raw.trimEnd();
      for (let c = 0; c < i.items.length; c++)
        if (this.lexer.state.top = !1, i.items[c].tokens = this.lexer.blockTokens(i.items[c].text, []), !i.loose) {
          const m = i.items[c].tokens.filter((d) => d.type === "space"), g = m.length > 0 && m.some((d) => /\n.*\n/.test(d.raw));
          i.loose = g;
        }
      if (i.loose)
        for (let c = 0; c < i.items.length; c++)
          i.items[c].loose = !0;
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
    const n = hu(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
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
        l.rows.push(hu(s, l.header.length).map((o) => ({
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
        text: Mt(t[1])
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
        const l = ka(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0)
          return;
      } else {
        const l = um(t[2], "()");
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
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(n) ? a = a.slice(1) : a = a.slice(1, -1)), fu(t, {
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
      return fu(n, i, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && n.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const l = [...a[0]].length - 1;
      let s, o, u = l, c = 0;
      const m = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (m.lastIndex = 0, t = t.slice(-1 * e.length + l); (a = m.exec(t)) != null; ) {
        if (s = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !s)
          continue;
        if (o = [...s].length, a[3] || a[4]) {
          u += o;
          continue;
        } else if ((a[5] || a[6]) && l % 3 && !((l + o) % 3)) {
          c += o;
          continue;
        }
        if (u -= o, u > 0)
          continue;
        o = Math.min(o, o + u + c);
        const g = [...a[0]][0].length, d = e.slice(0, l + a.index + g + o);
        if (Math.min(l, o) % 2) {
          const y = d.slice(1, -1);
          return {
            type: "em",
            raw: d,
            text: y,
            tokens: this.lexer.inlineTokens(y)
          };
        }
        const _ = d.slice(2, -2);
        return {
          type: "strong",
          raw: d,
          text: _,
          tokens: this.lexer.inlineTokens(_)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(n), i = /^ /.test(n) && / $/.test(n);
      return a && i && (n = n.substring(1, n.length - 1)), n = Mt(n, !0), {
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
      return t[2] === "@" ? (n = Mt(t[1]), a = "mailto:" + n) : (n = Mt(t[1]), a = n), {
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
        a = Mt(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (l !== t[0]);
        a = Mt(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
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
      return this.lexer.state.inRawBlock ? n = t[0] : n = Mt(t[0]), {
        type: "text",
        raw: t[0],
        text: n
      };
    }
  }
}
const hm = /^(?: *(?:\n|$))+/, fm = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, mm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ia = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, dm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, gh = /(?:[*+-]|\d{1,9}[.)])/, bh = we(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, gh).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), js = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, pm = /^[^\n]+/, Ws = /(?!\s*\])(?:\\.|[^\[\]\\])+/, gm = we(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ws).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bm = we(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, gh).getRegex(), Ci = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Xs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, vm = we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Xs).replace("tag", Ci).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), vh = we(js).replace("hr", ia).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ci).getRegex(), _m = we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", vh).getRegex(), Ys = {
  blockquote: _m,
  code: fm,
  def: gm,
  fences: mm,
  heading: dm,
  hr: ia,
  html: vm,
  lheading: bh,
  list: bm,
  newline: hm,
  paragraph: vh,
  table: Hn,
  text: pm
}, mu = we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ia).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ci).getRegex(), ym = {
  ...Ys,
  table: mu,
  paragraph: we(js).replace("hr", ia).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", mu).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ci).getRegex()
}, wm = {
  ...Ys,
  html: we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Xs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Hn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: we(js).replace("hr", ia).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bh).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, _h = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, km = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, yh = /^( {2,}|\\)\n(?!\s*$)/, Dm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, la = "\\p{P}\\p{S}", Em = we(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, la).getRegex(), Am = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, xm = we(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, la).getRegex(), Sm = we("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, la).getRegex(), Tm = we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, la).getRegex(), Fm = we(/\\([punct])/, "gu").replace(/punct/g, la).getRegex(), Cm = we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Mm = we(Xs).replace("(?:-->|$)", "-->").getRegex(), Bm = we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Mm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ai = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Nm = we(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ai).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), wh = we(/^!?\[(label)\]\[(ref)\]/).replace("label", ai).replace("ref", Ws).getRegex(), kh = we(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ws).getRegex(), Im = we("reflink|nolink(?!\\()", "g").replace("reflink", wh).replace("nolink", kh).getRegex(), Zs = {
  _backpedal: Hn,
  // only used for GFM url
  anyPunctuation: Fm,
  autolink: Cm,
  blockSkip: Am,
  br: yh,
  code: km,
  del: Hn,
  emStrongLDelim: xm,
  emStrongRDelimAst: Sm,
  emStrongRDelimUnd: Tm,
  escape: _h,
  link: Nm,
  nolink: kh,
  punctuation: Em,
  reflink: wh,
  reflinkSearch: Im,
  tag: Bm,
  text: Dm,
  url: Hn
}, zm = {
  ...Zs,
  link: we(/^!?\[(label)\]\((.*?)\)/).replace("label", ai).getRegex(),
  reflink: we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ai).getRegex()
}, Yl = {
  ...Zs,
  escape: we(_h).replace("])", "~|])").getRegex(),
  url: we(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Lm = {
  ...Yl,
  br: we(yh).replace("{2,}", "*").getRegex(),
  text: we(Yl.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Da = {
  normal: Ys,
  gfm: ym,
  pedantic: wm
}, Dn = {
  normal: Zs,
  gfm: Yl,
  breaks: Lm,
  pedantic: zm
};
class o0 {
  constructor(e) {
    Se(this, "tokens");
    Se(this, "options");
    Se(this, "state");
    Se(this, "tokenizer");
    Se(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Lr, this.options.tokenizer = this.options.tokenizer || new ni(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Da.normal,
      inline: Dn.normal
    };
    this.options.pedantic ? (t.block = Da.pedantic, t.inline = Dn.pedantic) : this.options.gfm && (t.block = Da.gfm, this.options.breaks ? t.inline = Dn.breaks : t.inline = Dn.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Da,
      inline: Dn
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new o0(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new o0(t).inlineTokens(e);
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
          this.options.extensions.startBlock.forEach((c) => {
            u = c.call({ lexer: this }, o), typeof u == "number" && u >= 0 && (s = Math.min(s, u));
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
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          c.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, s.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (u = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (n = c.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
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
          let c = 1 / 0;
          const m = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((d) => {
            g = d.call({ lexer: this }, m), typeof g == "number" && g >= 0 && (c = Math.min(c, g));
          }), c < 1 / 0 && c >= 0 && (i = e.substring(0, c + 1));
        }
        if (n = this.tokenizer.inlineText(i)) {
          e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), o = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += n.raw, a.text += n.text) : t.push(n);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
    return t;
  }
}
class ii {
  constructor(e) {
    Se(this, "options");
    this.options = e || Lr;
  }
  code(e, t, n) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + Mt(a) + '">' + (n ? e : Mt(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : Mt(e, !0)) + `</code></pre>
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
    const a = cu(e);
    if (a === null)
      return n;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>", i;
  }
  image(e, t, n) {
    const a = cu(e);
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
class $s {
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
class u0 {
  constructor(e) {
    Se(this, "options");
    Se(this, "renderer");
    Se(this, "textRenderer");
    this.options = e || Lr, this.options.renderer = this.options.renderer || new ii(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new $s();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new u0(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new u0(t).parseInline(e);
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
          n += this.renderer.heading(this.parseInline(l.tokens), l.depth, sm(this.parseInline(l.tokens, this.textRenderer)));
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
          for (let c = 0; c < l.header.length; c++)
            o += this.renderer.tablecell(this.parseInline(l.header[c].tokens), { header: !0, align: l.align[c] });
          s += this.renderer.tablerow(o);
          let u = "";
          for (let c = 0; c < l.rows.length; c++) {
            const m = l.rows[c];
            o = "";
            for (let g = 0; g < m.length; g++)
              o += this.renderer.tablecell(this.parseInline(m[g].tokens), { header: !1, align: l.align[g] });
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
          let c = "";
          for (let m = 0; m < l.items.length; m++) {
            const g = l.items[m], d = g.checked, _ = g.task;
            let y = "";
            if (g.task) {
              const E = this.renderer.checkbox(!!d);
              u ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = E + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = E + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: E + " "
              }) : y += E + " ";
            }
            y += this.parse(g.tokens, u), c += this.renderer.listitem(y, _, !!d);
          }
          n += this.renderer.list(c, s, o);
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
class Pn {
  constructor(e) {
    Se(this, "options");
    this.options = e || Lr;
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
Se(Pn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Ir, Zl, Dh;
class Rm {
  constructor(...e) {
    ji(this, Ir);
    Se(this, "defaults", Vs());
    Se(this, "options", this.setOptions);
    Se(this, "parse", pa(this, Ir, Zl).call(this, o0.lex, u0.parse));
    Se(this, "parseInline", pa(this, Ir, Zl).call(this, o0.lexInline, u0.parseInline));
    Se(this, "Parser", u0);
    Se(this, "Renderer", ii);
    Se(this, "TextRenderer", $s);
    Se(this, "Lexer", o0);
    Se(this, "Tokenizer", ni);
    Se(this, "Hooks", Pn);
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
        const i = this.defaults.renderer || new ii(this.defaults);
        for (const l in n.renderer) {
          if (!(l in i))
            throw new Error(`renderer '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = n.renderer[s], u = i[s];
          i[s] = (...c) => {
            let m = o.apply(i, c);
            return m === !1 && (m = u.apply(i, c)), m || "";
          };
        }
        a.renderer = i;
      }
      if (n.tokenizer) {
        const i = this.defaults.tokenizer || new ni(this.defaults);
        for (const l in n.tokenizer) {
          if (!(l in i))
            throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l))
            continue;
          const s = l, o = n.tokenizer[s], u = i[s];
          i[s] = (...c) => {
            let m = o.apply(i, c);
            return m === !1 && (m = u.apply(i, c)), m;
          };
        }
        a.tokenizer = i;
      }
      if (n.hooks) {
        const i = this.defaults.hooks || new Pn();
        for (const l in n.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = n.hooks[s], u = i[s];
          Pn.passThroughHooks.has(l) ? i[s] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(i, c)).then((g) => u.call(i, g));
            const m = o.call(i, c);
            return u.call(i, m);
          } : i[s] = (...c) => {
            let m = o.apply(i, c);
            return m === !1 && (m = u.apply(i, c)), m;
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
    return o0.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return u0.parse(e, t ?? this.defaults);
  }
}
Ir = new WeakSet(), Zl = function(e, t) {
  return (n, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = pa(this, Ir, Dh).call(this, !!l.silent, !!l.async);
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
}, Dh = function(e, t) {
  return (n) => {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + Mt(n.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(n);
    throw n;
  };
};
const kr = new Rm();
function ye(r, e) {
  return kr.parse(r, e);
}
ye.options = ye.setOptions = function(r) {
  return kr.setOptions(r), ye.defaults = kr.defaults, mh(ye.defaults), ye;
};
ye.getDefaults = Vs;
ye.defaults = Lr;
ye.use = function(...r) {
  return kr.use(...r), ye.defaults = kr.defaults, mh(ye.defaults), ye;
};
ye.walkTokens = function(r, e) {
  return kr.walkTokens(r, e);
};
ye.parseInline = kr.parseInline;
ye.Parser = u0;
ye.parser = u0.parse;
ye.Renderer = ii;
ye.TextRenderer = $s;
ye.Lexer = o0;
ye.lexer = o0.lex;
ye.Tokenizer = ni;
ye.Hooks = Pn;
ye.parse = ye;
ye.options;
ye.setOptions;
ye.use;
ye.walkTokens;
ye.parseInline;
u0.parse;
o0.lex;
const Om = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Hm = Object.hasOwnProperty;
class Eh {
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
    let a = Pm(e, t === !0);
    const i = a;
    for (; Hm.call(n.occurrences, a); )
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
function Pm(r, e) {
  return typeof r != "string" ? "" : (e || (r = r.toLowerCase()), r.replace(Om, "").replace(/ /g, "-"));
}
new Eh();
var du = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qm = { exports: {} };
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
        encode: function w(v) {
          return v instanceof o ? new o(v.type, w(v.content), v.alias) : Array.isArray(v) ? v.map(w) : v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        type: function(w) {
          return Object.prototype.toString.call(w).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(w) {
          return w.__id || Object.defineProperty(w, "__id", { value: ++i }), w.__id;
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
        clone: function w(v, x) {
          x = x || {};
          var C, N;
          switch (s.util.type(v)) {
            case "Object":
              if (N = s.util.objId(v), x[N])
                return x[N];
              C = /** @type {Record<string, any>} */
              {}, x[N] = C;
              for (var S in v)
                v.hasOwnProperty(S) && (C[S] = w(v[S], x));
              return (
                /** @type {any} */
                C
              );
            case "Array":
              return N = s.util.objId(v), x[N] ? x[N] : (C = [], x[N] = C, /** @type {Array} */
              /** @type {any} */
              v.forEach(function(z, L) {
                C[L] = w(z, x);
              }), /** @type {any} */
              C);
            default:
              return v;
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
        getLanguage: function(w) {
          for (; w; ) {
            var v = a.exec(w.className);
            if (v)
              return v[1].toLowerCase();
            w = w.parentElement;
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
        setLanguage: function(w, v) {
          w.className = w.className.replace(RegExp(a, "gi"), ""), w.classList.add("language-" + v);
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
          } catch (C) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack) || [])[1];
            if (w) {
              var v = document.getElementsByTagName("script");
              for (var x in v)
                if (v[x].src == w)
                  return v[x];
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
        isActive: function(w, v, x) {
          for (var C = "no-" + v; w; ) {
            var N = w.classList;
            if (N.contains(v))
              return !0;
            if (N.contains(C))
              return !1;
            w = w.parentElement;
          }
          return !!x;
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
        extend: function(w, v) {
          var x = s.util.clone(s.languages[w]);
          for (var C in v)
            x[C] = v[C];
          return x;
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
        insertBefore: function(w, v, x, C) {
          C = C || /** @type {any} */
          s.languages;
          var N = C[w], S = {};
          for (var z in N)
            if (N.hasOwnProperty(z)) {
              if (z == v)
                for (var L in x)
                  x.hasOwnProperty(L) && (S[L] = x[L]);
              x.hasOwnProperty(z) || (S[z] = N[z]);
            }
          var R = C[w];
          return C[w] = S, s.languages.DFS(s.languages, function(I, M) {
            M === R && I != w && (this[I] = S);
          }), S;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(v, x, C, N) {
          N = N || {};
          var S = s.util.objId;
          for (var z in v)
            if (v.hasOwnProperty(z)) {
              x.call(v, z, v[z], C || z);
              var L = v[z], R = s.util.type(L);
              R === "Object" && !N[S(L)] ? (N[S(L)] = !0, w(L, x, null, N)) : R === "Array" && !N[S(L)] && (N[S(L)] = !0, w(L, x, z, N));
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
      highlightAll: function(w, v) {
        s.highlightAllUnder(document, w, v);
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
      highlightAllUnder: function(w, v, x) {
        var C = {
          callback: x,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", C), C.elements = Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)), s.hooks.run("before-all-elements-highlight", C);
        for (var N = 0, S; S = C.elements[N++]; )
          s.highlightElement(S, v === !0, C.callback);
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
      highlightElement: function(w, v, x) {
        var C = s.util.getLanguage(w), N = s.languages[C];
        s.util.setLanguage(w, C);
        var S = w.parentElement;
        S && S.nodeName.toLowerCase() === "pre" && s.util.setLanguage(S, C);
        var z = w.textContent, L = {
          element: w,
          language: C,
          grammar: N,
          code: z
        };
        function R(M) {
          L.highlightedCode = M, s.hooks.run("before-insert", L), L.element.innerHTML = L.highlightedCode, s.hooks.run("after-highlight", L), s.hooks.run("complete", L), x && x.call(L.element);
        }
        if (s.hooks.run("before-sanity-check", L), S = L.element.parentElement, S && S.nodeName.toLowerCase() === "pre" && !S.hasAttribute("tabindex") && S.setAttribute("tabindex", "0"), !L.code) {
          s.hooks.run("complete", L), x && x.call(L.element);
          return;
        }
        if (s.hooks.run("before-highlight", L), !L.grammar) {
          R(s.util.encode(L.code));
          return;
        }
        if (v && n.Worker) {
          var I = new Worker(s.filename);
          I.onmessage = function(M) {
            R(M.data);
          }, I.postMessage(JSON.stringify({
            language: L.language,
            code: L.code,
            immediateClose: !0
          }));
        } else
          R(s.highlight(L.code, L.grammar, L.language));
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
      highlight: function(w, v, x) {
        var C = {
          code: w,
          grammar: v,
          language: x
        };
        if (s.hooks.run("before-tokenize", C), !C.grammar)
          throw new Error('The language "' + C.language + '" has no grammar.');
        return C.tokens = s.tokenize(C.code, C.grammar), s.hooks.run("after-tokenize", C), o.stringify(s.util.encode(C.tokens), C.language);
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
      tokenize: function(w, v) {
        var x = v.rest;
        if (x) {
          for (var C in x)
            v[C] = x[C];
          delete v.rest;
        }
        var N = new m();
        return g(N, N.head, w), c(w, N, v, N.head, 0), _(N);
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
        add: function(w, v) {
          var x = s.hooks.all;
          x[w] = x[w] || [], x[w].push(v);
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
        run: function(w, v) {
          var x = s.hooks.all[w];
          if (!(!x || !x.length))
            for (var C = 0, N; N = x[C++]; )
              N(v);
        }
      },
      Token: o
    };
    n.Prism = s;
    function o(w, v, x, C) {
      this.type = w, this.content = v, this.alias = x, this.length = (C || "").length | 0;
    }
    o.stringify = function w(v, x) {
      if (typeof v == "string")
        return v;
      if (Array.isArray(v)) {
        var C = "";
        return v.forEach(function(R) {
          C += w(R, x);
        }), C;
      }
      var N = {
        type: v.type,
        content: w(v.content, x),
        tag: "span",
        classes: ["token", v.type],
        attributes: {},
        language: x
      }, S = v.alias;
      S && (Array.isArray(S) ? Array.prototype.push.apply(N.classes, S) : N.classes.push(S)), s.hooks.run("wrap", N);
      var z = "";
      for (var L in N.attributes)
        z += " " + L + '="' + (N.attributes[L] || "").replace(/"/g, "&quot;") + '"';
      return "<" + N.tag + ' class="' + N.classes.join(" ") + '"' + z + ">" + N.content + "</" + N.tag + ">";
    };
    function u(w, v, x, C) {
      w.lastIndex = v;
      var N = w.exec(x);
      if (N && C && N[1]) {
        var S = N[1].length;
        N.index += S, N[0] = N[0].slice(S);
      }
      return N;
    }
    function c(w, v, x, C, N, S) {
      for (var z in x)
        if (!(!x.hasOwnProperty(z) || !x[z])) {
          var L = x[z];
          L = Array.isArray(L) ? L : [L];
          for (var R = 0; R < L.length; ++R) {
            if (S && S.cause == z + "," + R)
              return;
            var I = L[R], M = I.inside, Ee = !!I.lookbehind, U = !!I.greedy, Z = I.alias;
            if (U && !I.pattern.global) {
              var se = I.pattern.toString().match(/[imsuy]*$/)[0];
              I.pattern = RegExp(I.pattern.source, se + "g");
            }
            for (var Ge = I.pattern || I, ge = C.next, Ae = N; ge !== v.tail && !(S && Ae >= S.reach); Ae += ge.value.length, ge = ge.next) {
              var xe = ge.value;
              if (v.length > w.length)
                return;
              if (!(xe instanceof o)) {
                var oe = 1, me;
                if (U) {
                  if (me = u(Ge, Ae, w, Ee), !me || me.index >= w.length)
                    break;
                  var rt = me.index, be = me.index + me[0].length, He = Ae;
                  for (He += ge.value.length; rt >= He; )
                    ge = ge.next, He += ge.value.length;
                  if (He -= ge.value.length, Ae = He, ge.value instanceof o)
                    continue;
                  for (var G = ge; G !== v.tail && (He < be || typeof G.value == "string"); G = G.next)
                    oe++, He += G.value.length;
                  oe--, xe = w.slice(Ae, He), me.index -= Ae;
                } else if (me = u(Ge, 0, xe, Ee), !me)
                  continue;
                var rt = me.index, Ye = me[0], nt = xe.slice(0, rt), P = xe.slice(rt + Ye.length), Le = Ae + xe.length;
                S && Le > S.reach && (S.reach = Le);
                var O = ge.prev;
                nt && (O = g(v, O, nt), Ae += nt.length), d(v, O, oe);
                var ne = new o(z, M ? s.tokenize(Ye, M) : Ye, Z, Ye);
                if (ge = g(v, O, ne), P && g(v, ge, P), oe > 1) {
                  var te = {
                    cause: z + "," + R,
                    reach: Le
                  };
                  c(w, v, x, ge.prev, Ae, te), S && te.reach > S.reach && (S.reach = te.reach);
                }
              }
            }
          }
        }
    }
    function m() {
      var w = { value: null, prev: null, next: null }, v = { value: null, prev: w, next: null };
      w.next = v, this.head = w, this.tail = v, this.length = 0;
    }
    function g(w, v, x) {
      var C = v.next, N = { value: x, prev: v, next: C };
      return v.next = N, C.prev = N, w.length++, N;
    }
    function d(w, v, x) {
      for (var C = v.next, N = 0; N < x && C !== w.tail; N++)
        C = C.next;
      v.next = C, C.prev = v, w.length -= N;
    }
    function _(w) {
      for (var v = [], x = w.head.next; x !== w.tail; )
        v.push(x.value), x = x.next;
      return v;
    }
    if (!n.document)
      return n.addEventListener && (s.disableWorkerMessageHandler || n.addEventListener("message", function(w) {
        var v = JSON.parse(w.data), x = v.language, C = v.code, N = v.immediateClose;
        n.postMessage(s.highlight(C, s.languages[x], x)), N && n.close();
      }, !1)), s;
    var y = s.util.currentScript();
    y && (s.filename = y.src, y.hasAttribute("data-manual") && (s.manual = !0));
    function E() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var A = document.readyState;
      A === "loading" || A === "interactive" && y && y.defer ? document.addEventListener("DOMContentLoaded", E) : window.requestAnimationFrame ? window.requestAnimationFrame(E) : window.setTimeout(E, 16);
    }
    return s;
  }(e);
  r.exports && (r.exports = t), typeof du < "u" && (du.Prism = t), t.languages.markup = {
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
    var n = "Loading…", a = function(y, E) {
      return "✖ Error " + y + " while fetching file: " + E;
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
    }, s = "data-src-status", o = "loading", u = "loaded", c = "failed", m = "pre[data-src]:not([" + s + '="' + u + '"]):not([' + s + '="' + o + '"])';
    function g(y, E, A) {
      var w = new XMLHttpRequest();
      w.open("GET", y, !0), w.onreadystatechange = function() {
        w.readyState == 4 && (w.status < 400 && w.responseText ? E(w.responseText) : w.status >= 400 ? A(a(w.status, w.statusText)) : A(i));
      }, w.send(null);
    }
    function d(y) {
      var E = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y || "");
      if (E) {
        var A = Number(E[1]), w = E[2], v = E[3];
        return w ? v ? [A, Number(v)] : [A, void 0] : [A, A];
      }
    }
    t.hooks.add("before-highlightall", function(y) {
      y.selector += ", " + m;
    }), t.hooks.add("before-sanity-check", function(y) {
      var E = (
        /** @type {HTMLPreElement} */
        y.element
      );
      if (E.matches(m)) {
        y.code = "", E.setAttribute(s, o);
        var A = E.appendChild(document.createElement("CODE"));
        A.textContent = n;
        var w = E.getAttribute("data-src"), v = y.language;
        if (v === "none") {
          var x = (/\.(\w+)$/.exec(w) || [, "none"])[1];
          v = l[x] || x;
        }
        t.util.setLanguage(A, v), t.util.setLanguage(E, v);
        var C = t.plugins.autoloader;
        C && C.loadLanguages(v), g(
          w,
          function(N) {
            E.setAttribute(s, u);
            var S = d(E.getAttribute("data-range"));
            if (S) {
              var z = N.split(/\r\n?|\n/g), L = S[0], R = S[1] == null ? z.length : S[1];
              L < 0 && (L += z.length), L = Math.max(0, Math.min(L - 1, z.length)), R < 0 && (R += z.length), R = Math.max(0, Math.min(R, z.length)), N = z.slice(L, R).join(`
`), E.hasAttribute("data-start") || E.setAttribute("data-start", String(L + 1));
            }
            A.textContent = N, t.highlightElement(A);
          },
          function(N) {
            E.setAttribute(s, c), A.textContent = N;
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
      highlight: function(E) {
        for (var A = (E || document).querySelectorAll(m), w = 0, v; v = A[w++]; )
          t.highlightElement(v);
      }
    };
    var _ = !1;
    t.fileHighlight = function() {
      _ || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), _ = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(qm);
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
new Eh();
const Um = (r) => {
  const e = {};
  for (let t = 0, n = r.length; t < n; t++) {
    const a = r[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, Gm = [
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
], Vm = [
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
], jm = [
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
], Wm = [
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
], Xm = [
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
], Ym = [
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
  ...Gm,
  ...Vm.map((r) => `svg:${r}`),
  ...jm.map((r) => `math:${r}`)
], Um([
  Object.fromEntries(Wm.map((r) => [r, ["*"]])),
  Object.fromEntries(Xm.map((r) => [r, ["svg:*"]])),
  Object.fromEntries(Ym.map((r) => [r, ["math:*"]]))
]);
const {
  SvelteComponent: Zm,
  append_hydration: al,
  attr: Ea,
  children: pu,
  claim_component: $m,
  claim_element: gu,
  claim_space: Qm,
  claim_text: Jm,
  create_component: Km,
  destroy_component: ed,
  detach: il,
  element: bu,
  init: td,
  insert_hydration: rd,
  mount_component: nd,
  safe_not_equal: ad,
  set_data: id,
  space: ld,
  text: sd,
  toggle_class: P0,
  transition_in: od,
  transition_out: ud
} = window.__gradio__svelte__internal;
function cd(r) {
  let e, t, n, a, i, l;
  return n = new /*Icon*/
  r[1]({}), {
    c() {
      e = bu("label"), t = bu("span"), Km(n.$$.fragment), a = ld(), i = sd(
        /*label*/
        r[0]
      ), this.h();
    },
    l(s) {
      e = gu(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = pu(e);
      t = gu(o, "SPAN", { class: !0 });
      var u = pu(t);
      $m(n.$$.fragment, u), u.forEach(il), a = Qm(o), i = Jm(
        o,
        /*label*/
        r[0]
      ), o.forEach(il), this.h();
    },
    h() {
      Ea(t, "class", "svelte-168uj4v"), Ea(e, "for", ""), Ea(e, "data-testid", "block-label"), Ea(e, "class", "svelte-168uj4v"), P0(e, "hide", !/*show_label*/
      r[2]), P0(e, "sr-only", !/*show_label*/
      r[2]), P0(
        e,
        "float",
        /*float*/
        r[4]
      ), P0(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    m(s, o) {
      rd(s, e, o), al(e, t), nd(n, t, null), al(e, a), al(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && id(
        i,
        /*label*/
        s[0]
      ), (!l || o & /*show_label*/
      4) && P0(e, "hide", !/*show_label*/
      s[2]), (!l || o & /*show_label*/
      4) && P0(e, "sr-only", !/*show_label*/
      s[2]), (!l || o & /*float*/
      16) && P0(
        e,
        "float",
        /*float*/
        s[4]
      ), (!l || o & /*disable*/
      8) && P0(
        e,
        "hide-label",
        /*disable*/
        s[3]
      );
    },
    i(s) {
      l || (od(n.$$.fragment, s), l = !0);
    },
    o(s) {
      ud(n.$$.fragment, s), l = !1;
    },
    d(s) {
      s && il(e), ed(n);
    }
  };
}
function hd(r, e, t) {
  let { label: n = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return r.$$set = (o) => {
    "label" in o && t(0, n = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [n, a, i, l, s];
}
class Ah extends Zm {
  constructor(e) {
    super(), td(this, e, hd, cd, ad, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: fd,
  append_hydration: Ga,
  attr: T0,
  bubble: md,
  check_outros: dd,
  children: $l,
  claim_component: pd,
  claim_element: Ql,
  claim_space: vu,
  claim_text: gd,
  construct_svelte_component: _u,
  create_component: yu,
  create_slot: bd,
  destroy_component: wu,
  detach: qn,
  element: Jl,
  get_all_dirty_from_scope: vd,
  get_slot_changes: _d,
  group_outros: yd,
  init: wd,
  insert_hydration: xh,
  listen: kd,
  mount_component: ku,
  safe_not_equal: Dd,
  set_data: Ed,
  set_style: Aa,
  space: Du,
  text: Ad,
  toggle_class: xt,
  transition_in: ll,
  transition_out: sl,
  update_slot_base: xd
} = window.__gradio__svelte__internal;
function Eu(r) {
  let e, t;
  return {
    c() {
      e = Jl("span"), t = Ad(
        /*label*/
        r[1]
      ), this.h();
    },
    l(n) {
      e = Ql(n, "SPAN", { class: !0 });
      var a = $l(e);
      t = gd(
        a,
        /*label*/
        r[1]
      ), a.forEach(qn), this.h();
    },
    h() {
      T0(e, "class", "svelte-vk34kx");
    },
    m(n, a) {
      xh(n, e, a), Ga(e, t);
    },
    p(n, a) {
      a & /*label*/
      2 && Ed(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && qn(e);
    }
  };
}
function Sd(r) {
  let e, t, n, a, i, l, s, o, u = (
    /*show_label*/
    r[2] && Eu(r)
  );
  var c = (
    /*Icon*/
    r[0]
  );
  function m(_, y) {
    return {};
  }
  c && (a = _u(c, m()));
  const g = (
    /*#slots*/
    r[14].default
  ), d = bd(
    g,
    r,
    /*$$scope*/
    r[13],
    null
  );
  return {
    c() {
      e = Jl("button"), u && u.c(), t = Du(), n = Jl("div"), a && yu(a.$$.fragment), i = Du(), d && d.c(), this.h();
    },
    l(_) {
      e = Ql(_, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var y = $l(e);
      u && u.l(y), t = vu(y), n = Ql(y, "DIV", { class: !0 });
      var E = $l(n);
      a && pd(a.$$.fragment, E), i = vu(E), d && d.l(E), E.forEach(qn), y.forEach(qn), this.h();
    },
    h() {
      T0(n, "class", "svelte-vk34kx"), xt(
        n,
        "small",
        /*size*/
        r[4] === "small"
      ), xt(
        n,
        "large",
        /*size*/
        r[4] === "large"
      ), xt(
        n,
        "medium",
        /*size*/
        r[4] === "medium"
      ), e.disabled = /*disabled*/
      r[7], T0(
        e,
        "aria-label",
        /*label*/
        r[1]
      ), T0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        r[8]
      ), T0(
        e,
        "title",
        /*label*/
        r[1]
      ), T0(e, "class", "svelte-vk34kx"), xt(
        e,
        "pending",
        /*pending*/
        r[3]
      ), xt(
        e,
        "padded",
        /*padded*/
        r[5]
      ), xt(
        e,
        "highlight",
        /*highlight*/
        r[6]
      ), xt(
        e,
        "transparent",
        /*transparent*/
        r[9]
      ), Aa(e, "color", !/*disabled*/
      r[7] && /*_color*/
      r[11] ? (
        /*_color*/
        r[11]
      ) : "var(--block-label-text-color)"), Aa(e, "--bg-color", /*disabled*/
      r[7] ? "auto" : (
        /*background*/
        r[10]
      ));
    },
    m(_, y) {
      xh(_, e, y), u && u.m(e, null), Ga(e, t), Ga(e, n), a && ku(a, n, null), Ga(n, i), d && d.m(n, null), l = !0, s || (o = kd(
        e,
        "click",
        /*click_handler*/
        r[15]
      ), s = !0);
    },
    p(_, [y]) {
      if (/*show_label*/
      _[2] ? u ? u.p(_, y) : (u = Eu(_), u.c(), u.m(e, t)) : u && (u.d(1), u = null), y & /*Icon*/
      1 && c !== (c = /*Icon*/
      _[0])) {
        if (a) {
          yd();
          const E = a;
          sl(E.$$.fragment, 1, 0, () => {
            wu(E, 1);
          }), dd();
        }
        c ? (a = _u(c, m()), yu(a.$$.fragment), ll(a.$$.fragment, 1), ku(a, n, i)) : a = null;
      }
      d && d.p && (!l || y & /*$$scope*/
      8192) && xd(
        d,
        g,
        _,
        /*$$scope*/
        _[13],
        l ? _d(
          g,
          /*$$scope*/
          _[13],
          y,
          null
        ) : vd(
          /*$$scope*/
          _[13]
        ),
        null
      ), (!l || y & /*size*/
      16) && xt(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!l || y & /*size*/
      16) && xt(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!l || y & /*size*/
      16) && xt(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!l || y & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!l || y & /*label*/
      2) && T0(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!l || y & /*hasPopup*/
      256) && T0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!l || y & /*label*/
      2) && T0(
        e,
        "title",
        /*label*/
        _[1]
      ), (!l || y & /*pending*/
      8) && xt(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!l || y & /*padded*/
      32) && xt(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!l || y & /*highlight*/
      64) && xt(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!l || y & /*transparent*/
      512) && xt(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), y & /*disabled, _color*/
      2176 && Aa(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[11] ? (
        /*_color*/
        _[11]
      ) : "var(--block-label-text-color)"), y & /*disabled, background*/
      1152 && Aa(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      ));
    },
    i(_) {
      l || (a && ll(a.$$.fragment, _), ll(d, _), l = !0);
    },
    o(_) {
      a && sl(a.$$.fragment, _), sl(d, _), l = !1;
    },
    d(_) {
      _ && qn(e), u && u.d(), a && wu(a), d && d.d(_), s = !1, o();
    }
  };
}
function Td(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: u = !1 } = e, { size: c = "small" } = e, { padded: m = !0 } = e, { highlight: g = !1 } = e, { disabled: d = !1 } = e, { hasPopup: _ = !1 } = e, { color: y = "var(--block-label-text-color)" } = e, { transparent: E = !1 } = e, { background: A = "var(--block-background-fill)" } = e;
  function w(v) {
    md.call(this, r, v);
  }
  return r.$$set = (v) => {
    "Icon" in v && t(0, l = v.Icon), "label" in v && t(1, s = v.label), "show_label" in v && t(2, o = v.show_label), "pending" in v && t(3, u = v.pending), "size" in v && t(4, c = v.size), "padded" in v && t(5, m = v.padded), "highlight" in v && t(6, g = v.highlight), "disabled" in v && t(7, d = v.disabled), "hasPopup" in v && t(8, _ = v.hasPopup), "color" in v && t(12, y = v.color), "transparent" in v && t(9, E = v.transparent), "background" in v && t(10, A = v.background), "$$scope" in v && t(13, i = v.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*highlight, color*/
    4160 && t(11, n = g ? "var(--color-accent)" : y);
  }, [
    l,
    s,
    o,
    u,
    c,
    m,
    g,
    d,
    _,
    E,
    A,
    n,
    y,
    i,
    a,
    w
  ];
}
class bn extends fd {
  constructor(e) {
    super(), wd(this, e, Td, Sd, Dd, {
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
  SvelteComponent: Fd,
  append_hydration: Cd,
  attr: ol,
  binding_callbacks: Md,
  children: Au,
  claim_element: xu,
  create_slot: Bd,
  detach: ul,
  element: Su,
  get_all_dirty_from_scope: Nd,
  get_slot_changes: Id,
  init: zd,
  insert_hydration: Ld,
  safe_not_equal: Rd,
  toggle_class: q0,
  transition_in: Od,
  transition_out: Hd,
  update_slot_base: Pd
} = window.__gradio__svelte__internal;
function qd(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[5].default
  ), i = Bd(
    a,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = Su("div"), t = Su("div"), i && i.c(), this.h();
    },
    l(l) {
      e = xu(l, "DIV", { class: !0, "aria-label": !0 });
      var s = Au(e);
      t = xu(s, "DIV", { class: !0 });
      var o = Au(t);
      i && i.l(o), o.forEach(ul), s.forEach(ul), this.h();
    },
    h() {
      ol(t, "class", "icon svelte-3w3rth"), ol(e, "class", "empty svelte-3w3rth"), ol(e, "aria-label", "Empty value"), q0(
        e,
        "small",
        /*size*/
        r[0] === "small"
      ), q0(
        e,
        "large",
        /*size*/
        r[0] === "large"
      ), q0(
        e,
        "unpadded_box",
        /*unpadded_box*/
        r[1]
      ), q0(
        e,
        "small_parent",
        /*parent_height*/
        r[3]
      );
    },
    m(l, s) {
      Ld(l, e, s), Cd(e, t), i && i.m(t, null), r[6](e), n = !0;
    },
    p(l, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      16) && Pd(
        i,
        a,
        l,
        /*$$scope*/
        l[4],
        n ? Id(
          a,
          /*$$scope*/
          l[4],
          s,
          null
        ) : Nd(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!n || s & /*size*/
      1) && q0(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), (!n || s & /*size*/
      1) && q0(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), (!n || s & /*unpadded_box*/
      2) && q0(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!n || s & /*parent_height*/
      8) && q0(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      n || (Od(i, l), n = !0);
    },
    o(l) {
      Hd(i, l), n = !1;
    },
    d(l) {
      l && ul(e), i && i.d(l), r[6](null);
    }
  };
}
function Ud(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e, { size: l = "small" } = e, { unpadded_box: s = !1 } = e, o;
  function u(m) {
    var g;
    if (!m) return !1;
    const { height: d } = m.getBoundingClientRect(), { height: _ } = ((g = m.parentElement) === null || g === void 0 ? void 0 : g.getBoundingClientRect()) || { height: d };
    return d > _ + 2;
  }
  function c(m) {
    Md[m ? "unshift" : "push"](() => {
      o = m, t(2, o);
    });
  }
  return r.$$set = (m) => {
    "size" in m && t(0, l = m.size), "unpadded_box" in m && t(1, s = m.unpadded_box), "$$scope" in m && t(4, i = m.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*el*/
    4 && t(3, n = u(o));
  }, [l, s, o, n, i, a, c];
}
class Gd extends Fd {
  constructor(e) {
    super(), zd(this, e, Ud, qd, Rd, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Vd,
  append_hydration: cl,
  attr: Wt,
  children: xa,
  claim_svg_element: Sa,
  detach: En,
  init: jd,
  insert_hydration: Wd,
  noop: hl,
  safe_not_equal: Xd,
  set_style: l0,
  svg_element: Ta
} = window.__gradio__svelte__internal;
function Yd(r) {
  let e, t, n, a;
  return {
    c() {
      e = Ta("svg"), t = Ta("g"), n = Ta("path"), a = Ta("path"), this.h();
    },
    l(i) {
      e = Sa(i, "svg", {
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
      var l = xa(e);
      t = Sa(l, "g", { transform: !0 });
      var s = xa(t);
      n = Sa(s, "path", { d: !0, style: !0 }), xa(n).forEach(En), s.forEach(En), a = Sa(l, "path", { d: !0, style: !0 }), xa(a).forEach(En), l.forEach(En), this.h();
    },
    h() {
      Wt(n, "d", "M18,6L6.087,17.913"), l0(n, "fill", "none"), l0(n, "fill-rule", "nonzero"), l0(n, "stroke-width", "2px"), Wt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Wt(a, "d", "M4.364,4.364L19.636,19.636"), l0(a, "fill", "none"), l0(a, "fill-rule", "nonzero"), l0(a, "stroke-width", "2px"), Wt(e, "width", "100%"), Wt(e, "height", "100%"), Wt(e, "viewBox", "0 0 24 24"), Wt(e, "version", "1.1"), Wt(e, "xmlns", "http://www.w3.org/2000/svg"), Wt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Wt(e, "xml:space", "preserve"), Wt(e, "stroke", "currentColor"), l0(e, "fill-rule", "evenodd"), l0(e, "clip-rule", "evenodd"), l0(e, "stroke-linecap", "round"), l0(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      Wd(i, e, l), cl(e, t), cl(t, n), cl(e, a);
    },
    p: hl,
    i: hl,
    o: hl,
    d(i) {
      i && En(e);
    }
  };
}
class Sh extends Vd {
  constructor(e) {
    super(), jd(this, e, null, Yd, Xd, {});
  }
}
const {
  SvelteComponent: Zd,
  append_hydration: $d,
  attr: Yr,
  children: Tu,
  claim_svg_element: Fu,
  detach: fl,
  init: Qd,
  insert_hydration: Jd,
  noop: ml,
  safe_not_equal: Kd,
  svg_element: Cu
} = window.__gradio__svelte__internal;
function e5(r) {
  let e, t;
  return {
    c() {
      e = Cu("svg"), t = Cu("path"), this.h();
    },
    l(n) {
      e = Fu(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var a = Tu(e);
      t = Fu(a, "path", { fill: !0, d: !0 }), Tu(t).forEach(fl), a.forEach(fl), this.h();
    },
    h() {
      Yr(t, "fill", "currentColor"), Yr(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Yr(e, "xmlns", "http://www.w3.org/2000/svg"), Yr(e, "width", "100%"), Yr(e, "height", "100%"), Yr(e, "viewBox", "0 0 32 32");
    },
    m(n, a) {
      Jd(n, e, a), $d(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && fl(e);
    }
  };
}
class t5 extends Zd {
  constructor(e) {
    super(), Qd(this, e, null, e5, Kd, {});
  }
}
const {
  SvelteComponent: r5,
  append_hydration: dl,
  attr: je,
  children: Fa,
  claim_svg_element: Ca,
  detach: An,
  init: n5,
  insert_hydration: a5,
  noop: pl,
  safe_not_equal: i5,
  svg_element: Ma
} = window.__gradio__svelte__internal;
function l5(r) {
  let e, t, n, a;
  return {
    c() {
      e = Ma("svg"), t = Ma("rect"), n = Ma("circle"), a = Ma("polyline"), this.h();
    },
    l(i) {
      e = Ca(i, "svg", {
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
      var l = Fa(e);
      t = Ca(l, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Fa(t).forEach(An), n = Ca(l, "circle", { cx: !0, cy: !0, r: !0 }), Fa(n).forEach(An), a = Ca(l, "polyline", { points: !0 }), Fa(a).forEach(An), l.forEach(An), this.h();
    },
    h() {
      je(t, "x", "3"), je(t, "y", "3"), je(t, "width", "18"), je(t, "height", "18"), je(t, "rx", "2"), je(t, "ry", "2"), je(n, "cx", "8.5"), je(n, "cy", "8.5"), je(n, "r", "1.5"), je(a, "points", "21 15 16 10 5 21"), je(e, "xmlns", "http://www.w3.org/2000/svg"), je(e, "width", "100%"), je(e, "height", "100%"), je(e, "viewBox", "0 0 24 24"), je(e, "fill", "none"), je(e, "stroke", "currentColor"), je(e, "stroke-width", "1.5"), je(e, "stroke-linecap", "round"), je(e, "stroke-linejoin", "round"), je(e, "class", "feather feather-image");
    },
    m(i, l) {
      a5(i, e, l), dl(e, t), dl(e, n), dl(e, a);
    },
    p: pl,
    i: pl,
    o: pl,
    d(i) {
      i && An(e);
    }
  };
}
class Qs extends r5 {
  constructor(e) {
    super(), n5(this, e, null, l5, i5, {});
  }
}
const {
  SvelteComponent: s5,
  append_hydration: o5,
  attr: Zr,
  children: Mu,
  claim_svg_element: Bu,
  detach: gl,
  init: u5,
  insert_hydration: c5,
  noop: bl,
  safe_not_equal: h5,
  svg_element: Nu
} = window.__gradio__svelte__internal;
function f5(r) {
  let e, t;
  return {
    c() {
      e = Nu("svg"), t = Nu("path"), this.h();
    },
    l(n) {
      e = Bu(n, "svg", {
        xmlns: !0,
        viewBox: !0,
        width: !0,
        height: !0
      });
      var a = Mu(e);
      t = Bu(a, "path", { fill: !0, d: !0 }), Mu(t).forEach(gl), a.forEach(gl), this.h();
    },
    h() {
      Zr(t, "fill", "currentColor"), Zr(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Zr(e, "xmlns", "http://www.w3.org/2000/svg"), Zr(e, "viewBox", "0 0 24 24"), Zr(e, "width", "100%"), Zr(e, "height", "100%");
    },
    m(n, a) {
      c5(n, e, a), o5(e, t);
    },
    p: bl,
    i: bl,
    o: bl,
    d(n) {
      n && gl(e);
    }
  };
}
class m5 extends s5 {
  constructor(e) {
    super(), u5(this, e, null, f5, h5, {});
  }
}
const {
  SvelteComponent: d5,
  append_hydration: p5,
  attr: Xt,
  children: Iu,
  claim_svg_element: zu,
  detach: vl,
  init: g5,
  insert_hydration: b5,
  noop: _l,
  safe_not_equal: v5,
  svg_element: Lu
} = window.__gradio__svelte__internal;
function _5(r) {
  let e, t;
  return {
    c() {
      e = Lu("svg"), t = Lu("path"), this.h();
    },
    l(n) {
      e = zu(n, "svg", {
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
      var a = Iu(e);
      t = zu(a, "path", { d: !0 }), Iu(t).forEach(vl), a.forEach(vl), this.h();
    },
    h() {
      Xt(t, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24"), Xt(e, "fill", "none"), Xt(e, "stroke", "currentColor"), Xt(e, "stroke-width", "1.5"), Xt(e, "stroke-linecap", "round"), Xt(e, "stroke-linejoin", "round"), Xt(e, "class", "feather feather-edit-2");
    },
    m(n, a) {
      b5(n, e, a), p5(e, t);
    },
    p: _l,
    i: _l,
    o: _l,
    d(n) {
      n && vl(e);
    }
  };
}
class Ru extends d5 {
  constructor(e) {
    super(), g5(this, e, null, _5, v5, {});
  }
}
const {
  SvelteComponent: y5,
  append_hydration: w5,
  attr: Qe,
  children: Ou,
  claim_svg_element: Hu,
  detach: yl,
  init: k5,
  insert_hydration: D5,
  noop: Pu,
  safe_not_equal: E5,
  svg_element: qu
} = window.__gradio__svelte__internal;
function A5(r) {
  let e, t, n;
  return {
    c() {
      e = qu("svg"), t = qu("rect"), this.h();
    },
    l(a) {
      e = Hu(a, "svg", {
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
      var i = Ou(e);
      t = Hu(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Ou(t).forEach(yl), i.forEach(yl), this.h();
    },
    h() {
      Qe(t, "x", "3"), Qe(t, "y", "3"), Qe(t, "width", "18"), Qe(t, "height", "18"), Qe(t, "rx", "2"), Qe(t, "ry", "2"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(
        e,
        "fill",
        /*fill*/
        r[0]
      ), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", n = `${/*stroke_width*/
      r[1]}`), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-square");
    },
    m(a, i) {
      D5(a, e, i), w5(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && Qe(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && n !== (n = `${/*stroke_width*/
      a[1]}`) && Qe(e, "stroke-width", n);
    },
    i: Pu,
    o: Pu,
    d(a) {
      a && yl(e);
    }
  };
}
function x5(r, e, t) {
  let { fill: n = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return r.$$set = (i) => {
    "fill" in i && t(0, n = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [n, a];
}
class Kl extends y5 {
  constructor(e) {
    super(), k5(this, e, x5, A5, E5, { fill: 0, stroke_width: 1 });
  }
}
const {
  SvelteComponent: S5,
  append_hydration: U0,
  attr: Fe,
  children: G0,
  claim_svg_element: V0,
  claim_text: T5,
  detach: k0,
  init: F5,
  insert_hydration: C5,
  noop: wl,
  safe_not_equal: M5,
  svg_element: j0,
  text: B5
} = window.__gradio__svelte__internal;
function N5(r) {
  let e, t, n, a, i, l, s, o, u;
  return {
    c() {
      e = j0("svg"), t = j0("defs"), n = j0("style"), a = B5(`.cls-1 {
				fill: none;
			}
		`), i = j0("rect"), l = j0("rect"), s = j0("path"), o = j0("rect"), u = j0("rect"), this.h();
    },
    l(c) {
      e = V0(c, "svg", {
        id: !0,
        xmlns: !0,
        viewBox: !0,
        fill: !0,
        width: !0,
        height: !0
      });
      var m = G0(e);
      t = V0(m, "defs", {});
      var g = G0(t);
      n = V0(g, "style", {});
      var d = G0(n);
      a = T5(d, `.cls-1 {
				fill: none;
			}
		`), d.forEach(k0), g.forEach(k0), i = V0(m, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0
      }), G0(i).forEach(k0), l = V0(m, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0
      }), G0(l).forEach(k0), s = V0(m, "path", { d: !0 }), G0(s).forEach(k0), o = V0(m, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0
      }), G0(o).forEach(k0), u = V0(m, "rect", {
        id: !0,
        "data-name": !0,
        class: !0,
        width: !0,
        height: !0
      }), G0(u).forEach(k0), m.forEach(k0), this.h();
    },
    h() {
      Fe(i, "x", "12"), Fe(i, "y", "12"), Fe(i, "width", "2"), Fe(i, "height", "12"), Fe(l, "x", "18"), Fe(l, "y", "12"), Fe(l, "width", "2"), Fe(l, "height", "12"), Fe(s, "d", "M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"), Fe(o, "x", "12"), Fe(o, "y", "2"), Fe(o, "width", "8"), Fe(o, "height", "2"), Fe(u, "id", "_Transparent_Rectangle_"), Fe(u, "data-name", "<Transparent Rectangle>"), Fe(u, "class", "cls-1"), Fe(u, "width", "32"), Fe(u, "height", "32"), Fe(e, "id", "icon"), Fe(e, "xmlns", "http://www.w3.org/2000/svg"), Fe(e, "viewBox", "0 0 32 32"), Fe(e, "fill", "currentColor"), Fe(e, "width", "100%"), Fe(e, "height", "100%");
    },
    m(c, m) {
      C5(c, e, m), U0(e, t), U0(t, n), U0(n, a), U0(e, i), U0(e, l), U0(e, s), U0(e, o), U0(e, u);
    },
    p: wl,
    i: wl,
    o: wl,
    d(c) {
      c && k0(e);
    }
  };
}
class I5 extends S5 {
  constructor(e) {
    super(), F5(this, e, null, N5, M5, {});
  }
}
const {
  SvelteComponent: z5,
  append_hydration: kl,
  attr: ft,
  children: Ba,
  claim_svg_element: Na,
  detach: xn,
  init: L5,
  insert_hydration: R5,
  noop: Dl,
  safe_not_equal: O5,
  svg_element: Ia
} = window.__gradio__svelte__internal;
function H5(r) {
  let e, t, n, a;
  return {
    c() {
      e = Ia("svg"), t = Ia("path"), n = Ia("polyline"), a = Ia("line"), this.h();
    },
    l(i) {
      e = Na(i, "svg", {
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
      var l = Ba(e);
      t = Na(l, "path", { d: !0 }), Ba(t).forEach(xn), n = Na(l, "polyline", { points: !0 }), Ba(n).forEach(xn), a = Na(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Ba(a).forEach(xn), l.forEach(xn), this.h();
    },
    h() {
      ft(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ft(n, "points", "17 8 12 3 7 8"), ft(a, "x1", "12"), ft(a, "y1", "3"), ft(a, "x2", "12"), ft(a, "y2", "15"), ft(e, "xmlns", "http://www.w3.org/2000/svg"), ft(e, "width", "90%"), ft(e, "height", "90%"), ft(e, "viewBox", "0 0 24 24"), ft(e, "fill", "none"), ft(e, "stroke", "currentColor"), ft(e, "stroke-width", "2"), ft(e, "stroke-linecap", "round"), ft(e, "stroke-linejoin", "round"), ft(e, "class", "feather feather-upload");
    },
    m(i, l) {
      R5(i, e, l), kl(e, t), kl(e, n), kl(e, a);
    },
    p: Dl,
    i: Dl,
    o: Dl,
    d(i) {
      i && xn(e);
    }
  };
}
let P5 = class extends z5 {
  constructor(e) {
    super(), L5(this, e, null, H5, O5, {});
  }
};
const q5 = [
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
], Uu = {
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
q5.reduce(
  (r, { color: e, primary: t, secondary: n }) => ({
    ...r,
    [e]: {
      primary: Uu[e][t],
      secondary: Uu[e][n]
    }
  }),
  {}
);
const U5 = /^(#\s*)(.+)$/m;
function G5(r) {
  const e = r.trim(), t = e.match(U5);
  if (!t)
    return [!1, e || !1];
  const [n, , a] = t, i = a.trim();
  if (e === n)
    return [i, !1];
  const l = t.index !== void 0 ? t.index + n.length : 0, o = e.substring(l).trim() || !1;
  return [i, o];
}
const {
  SvelteComponent: V5,
  append_hydration: vr,
  attr: Vn,
  check_outros: j5,
  children: jn,
  claim_component: Th,
  claim_element: Wn,
  claim_space: Mi,
  claim_text: pr,
  create_component: Fh,
  destroy_component: Ch,
  detach: pt,
  element: Xn,
  empty: li,
  group_outros: W5,
  init: X5,
  insert_hydration: r0,
  mount_component: Mh,
  safe_not_equal: Y5,
  set_data: Yn,
  space: Bi,
  text: gr,
  toggle_class: Gu,
  transition_in: si,
  transition_out: oi
} = window.__gradio__svelte__internal;
function Z5(r) {
  let e, t;
  return e = new P5({}), {
    c() {
      Fh(e.$$.fragment);
    },
    l(n) {
      Th(e.$$.fragment, n);
    },
    m(n, a) {
      Mh(e, n, a), t = !0;
    },
    i(n) {
      t || (si(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ch(e, n);
    }
  };
}
function $5(r) {
  let e, t;
  return e = new m5({}), {
    c() {
      Fh(e.$$.fragment);
    },
    l(n) {
      Th(e.$$.fragment, n);
    },
    m(n, a) {
      Mh(e, n, a), t = !0;
    },
    i(n) {
      t || (si(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ch(e, n);
    }
  };
}
function Q5(r) {
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
    r[3] !== "short" && Vu(r)
  );
  return {
    c() {
      t = gr(e), n = Bi(), i && i.c(), a = li();
    },
    l(l) {
      t = pr(l, e), n = Mi(l), i && i.l(l), a = li();
    },
    m(l, s) {
      r0(l, t, s), r0(l, n, s), i && i.m(l, s), r0(l, a, s);
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
      ) + "") && Yn(t, e), /*mode*/
      l[3] !== "short" ? i ? i.p(l, s) : (i = Vu(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (pt(t), pt(n), pt(a)), i && i.d(l);
    }
  };
}
function J5(r) {
  let e, t, n = (
    /*heading*/
    r[6] && ju(r)
  ), a = (
    /*paragraph*/
    r[5] && Wu(r)
  );
  return {
    c() {
      n && n.c(), e = Bi(), a && a.c(), t = li();
    },
    l(i) {
      n && n.l(i), e = Mi(i), a && a.l(i), t = li();
    },
    m(i, l) {
      n && n.m(i, l), r0(i, e, l), a && a.m(i, l), r0(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? n ? n.p(i, l) : (n = ju(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = Wu(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (pt(e), pt(t)), n && n.d(i), a && a.d(i);
    }
  };
}
function Vu(r) {
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
      e = Xn("span"), t = gr("- "), a = gr(n), i = gr(" -"), l = Bi(), o = gr(s), this.h();
    },
    l(u) {
      e = Wn(u, "SPAN", { class: !0 });
      var c = jn(e);
      t = pr(c, "- "), a = pr(c, n), i = pr(c, " -"), c.forEach(pt), l = Mi(u), o = pr(u, s), this.h();
    },
    h() {
      Vn(e, "class", "or svelte-1xg7h5n");
    },
    m(u, c) {
      r0(u, e, c), vr(e, t), vr(e, a), vr(e, i), r0(u, l, c), r0(u, o, c);
    },
    p(u, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      u[1]("common.or") + "") && Yn(a, n), c & /*message, i18n*/
      6 && s !== (s = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && Yn(o, s);
    },
    d(u) {
      u && (pt(e), pt(l), pt(o));
    }
  };
}
function ju(r) {
  let e, t;
  return {
    c() {
      e = Xn("h2"), t = gr(
        /*heading*/
        r[6]
      ), this.h();
    },
    l(n) {
      e = Wn(n, "H2", { class: !0 });
      var a = jn(e);
      t = pr(
        a,
        /*heading*/
        r[6]
      ), a.forEach(pt), this.h();
    },
    h() {
      Vn(e, "class", "svelte-1xg7h5n");
    },
    m(n, a) {
      r0(n, e, a), vr(e, t);
    },
    p(n, a) {
      a & /*heading*/
      64 && Yn(
        t,
        /*heading*/
        n[6]
      );
    },
    d(n) {
      n && pt(e);
    }
  };
}
function Wu(r) {
  let e, t;
  return {
    c() {
      e = Xn("p"), t = gr(
        /*paragraph*/
        r[5]
      ), this.h();
    },
    l(n) {
      e = Wn(n, "P", { class: !0 });
      var a = jn(e);
      t = pr(
        a,
        /*paragraph*/
        r[5]
      ), a.forEach(pt), this.h();
    },
    h() {
      Vn(e, "class", "svelte-1xg7h5n");
    },
    m(n, a) {
      r0(n, e, a), vr(e, t);
    },
    p(n, a) {
      a & /*paragraph*/
      32 && Yn(
        t,
        /*paragraph*/
        n[5]
      );
    },
    d(n) {
      n && pt(e);
    }
  };
}
function K5(r) {
  let e, t, n, a, i, l;
  const s = [$5, Z5], o = [];
  function u(d, _) {
    return (
      /*type*/
      d[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(r), a = o[n] = s[n](r);
  function c(d, _) {
    return (
      /*heading*/
      d[6] || /*paragraph*/
      d[5] ? J5 : Q5
    );
  }
  let m = c(r), g = m(r);
  return {
    c() {
      e = Xn("div"), t = Xn("span"), a.c(), i = Bi(), g.c(), this.h();
    },
    l(d) {
      e = Wn(d, "DIV", { class: !0 });
      var _ = jn(e);
      t = Wn(_, "SPAN", { class: !0 });
      var y = jn(t);
      a.l(y), y.forEach(pt), i = Mi(_), g.l(_), _.forEach(pt), this.h();
    },
    h() {
      Vn(t, "class", "icon-wrap svelte-1xg7h5n"), Gu(
        t,
        "hovered",
        /*hovered*/
        r[4]
      ), Vn(e, "class", "wrap svelte-1xg7h5n");
    },
    m(d, _) {
      r0(d, e, _), vr(e, t), o[n].m(t, null), vr(e, i), g.m(e, null), l = !0;
    },
    p(d, [_]) {
      let y = n;
      n = u(d), n !== y && (W5(), oi(o[y], 1, 1, () => {
        o[y] = null;
      }), j5(), a = o[n], a || (a = o[n] = s[n](d), a.c()), si(a, 1), a.m(t, null)), (!l || _ & /*hovered*/
      16) && Gu(
        t,
        "hovered",
        /*hovered*/
        d[4]
      ), m === (m = c(d)) && g ? g.p(d, _) : (g.d(1), g = m(d), g && (g.c(), g.m(e, null)));
    },
    i(d) {
      l || (si(a), l = !0);
    },
    o(d) {
      oi(a), l = !1;
    },
    d(d) {
      d && pt(e), o[n].d(), g.d();
    }
  };
}
function e3(r, e, t) {
  let n, a, { type: i = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: u = !1 } = e, { placeholder: c = void 0 } = e;
  const m = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return r.$$set = (g) => {
    "type" in g && t(0, i = g.type), "i18n" in g && t(1, l = g.i18n), "message" in g && t(2, s = g.message), "mode" in g && t(3, o = g.mode), "hovered" in g && t(4, u = g.hovered), "placeholder" in g && t(8, c = g.placeholder);
  }, r.$$.update = () => {
    r.$$.dirty & /*placeholder*/
    256 && t(6, [n, a] = c ? G5(c) : [!1, !1], n, (t(5, a), t(8, c)));
  }, [i, l, s, o, u, a, n, m, c];
}
class t3 extends V5 {
  constructor(e) {
    super(), X5(this, e, e3, K5, Y5, {
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
  SvelteComponent: r3,
  attr: n3,
  children: a3,
  claim_element: i3,
  create_slot: l3,
  detach: Xu,
  element: s3,
  get_all_dirty_from_scope: o3,
  get_slot_changes: u3,
  init: c3,
  insert_hydration: h3,
  safe_not_equal: f3,
  toggle_class: Yu,
  transition_in: m3,
  transition_out: d3,
  update_slot_base: p3
} = window.__gradio__svelte__internal;
function g3(r) {
  let e, t;
  const n = (
    /*#slots*/
    r[2].default
  ), a = l3(
    n,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = s3("div"), a && a.c(), this.h();
    },
    l(i) {
      e = i3(i, "DIV", { class: !0 });
      var l = a3(e);
      a && a.l(l), l.forEach(Xu), this.h();
    },
    h() {
      n3(e, "class", "svelte-q32hvf"), Yu(
        e,
        "show_border",
        /*show_border*/
        r[0]
      );
    },
    m(i, l) {
      h3(i, e, l), a && a.m(e, null), t = !0;
    },
    p(i, [l]) {
      a && a.p && (!t || l & /*$$scope*/
      2) && p3(
        a,
        n,
        i,
        /*$$scope*/
        i[1],
        t ? u3(
          n,
          /*$$scope*/
          i[1],
          l,
          null
        ) : o3(
          /*$$scope*/
          i[1]
        ),
        null
      ), (!t || l & /*show_border*/
      1) && Yu(
        e,
        "show_border",
        /*show_border*/
        i[0]
      );
    },
    i(i) {
      t || (m3(a, i), t = !0);
    },
    o(i) {
      d3(a, i), t = !1;
    },
    d(i) {
      i && Xu(e), a && a.d(i);
    }
  };
}
function b3(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { show_border: i = !1 } = e;
  return r.$$set = (l) => {
    "show_border" in l && t(0, i = l.show_border), "$$scope" in l && t(1, a = l.$$scope);
  }, [i, a, n];
}
class Bh extends r3 {
  constructor(e) {
    super(), c3(this, e, b3, g3, f3, { show_border: 0 });
  }
}
const {
  SvelteComponent: v3,
  attr: Zu,
  children: _3,
  claim_element: y3,
  create_slot: w3,
  detach: $u,
  element: k3,
  get_all_dirty_from_scope: D3,
  get_slot_changes: E3,
  init: A3,
  insert_hydration: x3,
  null_to_empty: Qu,
  safe_not_equal: S3,
  transition_in: T3,
  transition_out: F3,
  update_slot_base: C3
} = window.__gradio__svelte__internal;
function M3(r) {
  let e, t, n;
  const a = (
    /*#slots*/
    r[2].default
  ), i = w3(
    a,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = k3("div"), i && i.c(), this.h();
    },
    l(l) {
      e = y3(l, "DIV", { class: !0 });
      var s = _3(e);
      i && i.l(s), s.forEach($u), this.h();
    },
    h() {
      Zu(e, "class", t = Qu(`icon-button-wrapper ${/*top_panel*/
      r[0] ? "top-panel" : ""}`) + " svelte-171ybii");
    },
    m(l, s) {
      x3(l, e, s), i && i.m(e, null), n = !0;
    },
    p(l, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && C3(
        i,
        a,
        l,
        /*$$scope*/
        l[1],
        n ? E3(
          a,
          /*$$scope*/
          l[1],
          s,
          null
        ) : D3(
          /*$$scope*/
          l[1]
        ),
        null
      ), (!n || s & /*top_panel*/
      1 && t !== (t = Qu(`icon-button-wrapper ${/*top_panel*/
      l[0] ? "top-panel" : ""}`) + " svelte-171ybii")) && Zu(e, "class", t);
    },
    i(l) {
      n || (T3(i, l), n = !0);
    },
    o(l) {
      F3(i, l), n = !1;
    },
    d(l) {
      l && $u(e), i && i.d(l);
    }
  };
}
function B3(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { top_panel: i = !0 } = e;
  return r.$$set = (l) => {
    "top_panel" in l && t(0, i = l.top_panel), "$$scope" in l && t(1, a = l.$$scope);
  }, [i, a, n];
}
class Nh extends v3 {
  constructor(e) {
    super(), A3(this, e, B3, M3, S3, { top_panel: 0 });
  }
}
const { setContext: Zg, getContext: N3 } = window.__gradio__svelte__internal, I3 = "WORKER_PROXY_CONTEXT_KEY";
function z3() {
  return N3(I3);
}
const L3 = "lite.local";
function R3(r) {
  return r.host === window.location.host || r.host === "localhost:7860" || r.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  r.host === L3;
}
function O3(r, e) {
  const t = e.toLowerCase();
  for (const [n, a] of Object.entries(r))
    if (n.toLowerCase() === t)
      return a;
}
function H3(r) {
  const e = typeof window < "u";
  if (r == null || !e)
    return !1;
  const t = new URL(r, window.location.href);
  return !(!R3(t) || t.protocol !== "http:" && t.protocol !== "https:");
}
const {
  SvelteComponent: P3,
  assign: ui,
  check_outros: Ih,
  children: zh,
  claim_element: Lh,
  compute_rest_props: Ju,
  create_slot: Js,
  detach: sn,
  element: Rh,
  empty: ci,
  exclude_internal_props: q3,
  get_all_dirty_from_scope: Ks,
  get_slot_changes: eo,
  get_spread_update: Oh,
  group_outros: Hh,
  init: U3,
  insert_hydration: Ni,
  listen: Ph,
  prevent_default: G3,
  safe_not_equal: V3,
  set_attributes: hi,
  set_style: Ku,
  toggle_class: fi,
  transition_in: Dr,
  transition_out: Er,
  update_slot_base: to
} = window.__gradio__svelte__internal, { createEventDispatcher: j3, onMount: $g } = window.__gradio__svelte__internal;
function W3(r) {
  let e, t, n, a, i;
  const l = (
    /*#slots*/
    r[8].default
  ), s = Js(
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
  for (let c = 0; c < o.length; c += 1)
    u = ui(u, o[c]);
  return {
    c() {
      e = Rh("a"), s && s.c(), this.h();
    },
    l(c) {
      e = Lh(c, "A", {
        class: !0,
        href: !0,
        target: !0,
        rel: !0,
        download: !0
      });
      var m = zh(e);
      s && s.l(m), m.forEach(sn), this.h();
    },
    h() {
      hi(e, u), Ku(e, "position", "relative"), fi(e, "svelte-151nsdd", !0);
    },
    m(c, m) {
      Ni(c, e, m), s && s.m(e, null), n = !0, a || (i = Ph(
        e,
        "click",
        /*dispatch*/
        r[3].bind(null, "click")
      ), a = !0);
    },
    p(c, m) {
      s && s.p && (!n || m & /*$$scope*/
      128) && to(
        s,
        l,
        c,
        /*$$scope*/
        c[7],
        n ? eo(
          l,
          /*$$scope*/
          c[7],
          m,
          null
        ) : Ks(
          /*$$scope*/
          c[7]
        ),
        null
      ), hi(e, u = Oh(o, [
        { class: "download-link" },
        (!n || m & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || m & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        m & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), Ku(e, "position", "relative"), fi(e, "svelte-151nsdd", !0);
    },
    i(c) {
      n || (Dr(s, c), n = !0);
    },
    o(c) {
      Er(s, c), n = !1;
    },
    d(c) {
      c && sn(e), s && s.d(c), a = !1, i();
    }
  };
}
function X3(r) {
  let e, t, n, a;
  const i = [Z3, Y3], l = [];
  function s(o, u) {
    return (
      /*is_downloading*/
      o[2] ? 0 : 1
    );
  }
  return e = s(r), t = l[e] = i[e](r), {
    c() {
      t.c(), n = ci();
    },
    l(o) {
      t.l(o), n = ci();
    },
    m(o, u) {
      l[e].m(o, u), Ni(o, n, u), a = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? l[e].p(o, u) : (Hh(), Er(l[c], 1, 1, () => {
        l[c] = null;
      }), Ih(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), Dr(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      a || (Dr(t), a = !0);
    },
    o(o) {
      Er(t), a = !1;
    },
    d(o) {
      o && sn(n), l[e].d(o);
    }
  };
}
function Y3(r) {
  let e, t, n, a;
  const i = (
    /*#slots*/
    r[8].default
  ), l = Js(
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
    o = ui(o, s[u]);
  return {
    c() {
      e = Rh("a"), l && l.c(), this.h();
    },
    l(u) {
      e = Lh(u, "A", { href: !0 });
      var c = zh(e);
      l && l.l(c), c.forEach(sn), this.h();
    },
    h() {
      hi(e, o), fi(e, "svelte-151nsdd", !0);
    },
    m(u, c) {
      Ni(u, e, c), l && l.m(e, null), t = !0, n || (a = Ph(e, "click", G3(
        /*wasm_click_handler*/
        r[5]
      )), n = !0);
    },
    p(u, c) {
      l && l.p && (!t || c & /*$$scope*/
      128) && to(
        l,
        i,
        u,
        /*$$scope*/
        u[7],
        t ? eo(
          i,
          /*$$scope*/
          u[7],
          c,
          null
        ) : Ks(
          /*$$scope*/
          u[7]
        ),
        null
      ), hi(e, o = Oh(s, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        u[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) }
      ])), fi(e, "svelte-151nsdd", !0);
    },
    i(u) {
      t || (Dr(l, u), t = !0);
    },
    o(u) {
      Er(l, u), t = !1;
    },
    d(u) {
      u && sn(e), l && l.d(u), n = !1, a();
    }
  };
}
function Z3(r) {
  let e;
  const t = (
    /*#slots*/
    r[8].default
  ), n = Js(
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
      128) && to(
        n,
        t,
        a,
        /*$$scope*/
        a[7],
        e ? eo(
          t,
          /*$$scope*/
          a[7],
          i,
          null
        ) : Ks(
          /*$$scope*/
          a[7]
        ),
        null
      );
    },
    i(a) {
      e || (Dr(n, a), e = !0);
    },
    o(a) {
      Er(n, a), e = !1;
    },
    d(a) {
      n && n.d(a);
    }
  };
}
function $3(r) {
  let e, t, n, a, i;
  const l = [X3, W3], s = [];
  function o(u, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (u[4] && H3(
      /*href*/
      u[0]
    ))), e ? 0 : 1;
  }
  return t = o(r, -1), n = s[t] = l[t](r), {
    c() {
      n.c(), a = ci();
    },
    l(u) {
      n.l(u), a = ci();
    },
    m(u, c) {
      s[t].m(u, c), Ni(u, a, c), i = !0;
    },
    p(u, [c]) {
      let m = t;
      t = o(u, c), t === m ? s[t].p(u, c) : (Hh(), Er(s[m], 1, 1, () => {
        s[m] = null;
      }), Ih(), n = s[t], n ? n.p(u, c) : (n = s[t] = l[t](u), n.c()), Dr(n, 1), n.m(a.parentNode, a));
    },
    i(u) {
      i || (Dr(n), i = !0);
    },
    o(u) {
      Er(n), i = !1;
    },
    d(u) {
      u && sn(a), s[t].d(u);
    }
  };
}
function Q3(r, e, t) {
  const n = ["href", "download"];
  let a = Ju(e, n), { $$slots: i = {}, $$scope: l } = e, { href: s = void 0 } = e, { download: o } = e;
  const u = j3();
  let c = !1;
  const m = z3();
  async function g() {
    if (c)
      return;
    if (u("click"), s == null)
      throw new Error("href is not defined.");
    if (m == null)
      throw new Error("Wasm worker proxy is not available.");
    const _ = new URL(s, window.location.href).pathname;
    t(2, c = !0), m.httpRequest({
      method: "GET",
      path: _,
      headers: {},
      query_string: ""
    }).then((y) => {
      if (y.status !== 200)
        throw new Error(`Failed to get file ${_} from the Wasm worker.`);
      const E = new Blob(
        [y.body],
        {
          type: O3(y.headers, "content-type")
        }
      ), A = URL.createObjectURL(E), w = document.createElement("a");
      w.href = A, w.download = o, w.click(), URL.revokeObjectURL(A);
    }).finally(() => {
      t(2, c = !1);
    });
  }
  return r.$$set = (d) => {
    e = ui(ui({}, e), q3(d)), t(6, a = Ju(e, n)), "href" in d && t(0, s = d.href), "download" in d && t(1, o = d.download), "$$scope" in d && t(7, l = d.$$scope);
  }, [
    s,
    o,
    c,
    u,
    m,
    g,
    a,
    l,
    i
  ];
}
class J3 extends P3 {
  constructor(e) {
    super(), U3(this, e, Q3, $3, V3, { href: 0, download: 1 });
  }
}
function tt(r, e, t) {
  return Math.min(Math.max(r, e), t);
}
function e1(r, e = "application/json", t = "utf-8") {
  return "data:" + e + ";charset=" + t + "," + encodeURIComponent(JSON.stringify(r));
}
const {
  SvelteComponent: K3,
  attr: D0,
  binding_callbacks: E0,
  bubble: A0,
  children: t1,
  claim_element: x0,
  claim_space: W0,
  detach: Ze,
  element: S0,
  get_svelte_dataset: lr,
  init: e7,
  insert_hydration: st,
  listen: Je,
  noop: r1,
  prevent_default: Ke,
  run_all: t7,
  safe_not_equal: r7,
  set_style: ae,
  space: X0,
  stop_propagation: et,
  toggle_class: We
} = window.__gradio__svelte__internal, { createEventDispatcher: n7 } = window.__gradio__svelte__internal;
function a7(r) {
  let e, t = "", n, a, i = "", l, s, o = "", u, c, m = "", g, d, _ = "", y, E, A = "", w, v, x, C, N = "", S, z, L, R;
  return {
    c() {
      e = S0("div"), e.innerHTML = t, n = X0(), a = S0("div"), a.innerHTML = i, l = X0(), s = S0("div"), s.innerHTML = o, u = X0(), c = S0("div"), c.innerHTML = m, g = X0(), d = S0("div"), d.innerHTML = _, y = X0(), E = S0("div"), E.innerHTML = A, w = X0(), v = S0("div"), x = X0(), C = S0("div"), C.innerHTML = N, S = X0(), z = S0("div"), this.h();
    },
    l(I) {
      e = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(e) !== "svelte-5ppv5" && (e.innerHTML = t), n = W0(I), a = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(a) !== "svelte-14ip1zw" && (a.innerHTML = i), l = W0(I), s = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(s) !== "svelte-7ci7cp" && (s.innerHTML = o), u = W0(I), c = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(c) !== "svelte-4b5agg" && (c.innerHTML = m), g = W0(I), d = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(d) !== "svelte-1neki9" && (d.innerHTML = _), y = W0(I), E = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(E) !== "svelte-e8w135" && (E.innerHTML = A), w = W0(I), v = x0(I, "DIV", { class: !0 }), t1(v).forEach(Ze), x = W0(I), C = x0(I, "DIV", { class: !0, "data-svelte-h": !0 }), lr(C) !== "svelte-v7bzbv" && (C.innerHTML = N), S = W0(I), z = x0(I, "DIV", { class: !0 }), t1(z).forEach(Ze), this.h();
    },
    h() {
      D0(e, "class", "box-cursor svelte-12x5anh"), We(e, "inactive", !/*active*/
      r[1]), We(
        e,
        "selectable",
        /*active*/
        r[1] && !/*dragging*/
        r[0]
      ), ae(
        e,
        "left",
        /*left*/
        r[2] + "px"
      ), ae(
        e,
        "top",
        /*top*/
        r[3] + "px"
      ), ae(
        e,
        "width",
        /*right*/
        r[4] - /*left*/
        r[2] + "px"
      ), ae(
        e,
        "height",
        /*bottom*/
        r[5] - /*top*/
        r[3] + "px"
      ), D0(a, "class", "box-anchor svelte-12x5anh"), We(a, "inactive", !/*active*/
      r[1]), ae(a, "cursor", "nwse-resize"), ae(
        a,
        "left",
        /*left*/
        r[2] - 5 + "px"
      ), ae(
        a,
        "top",
        /*top*/
        r[3] - 5 + "px"
      ), D0(s, "class", "box-anchor svelte-12x5anh"), We(s, "inactive", !/*active*/
      r[1]), ae(s, "cursor", "ew-resize"), ae(
        s,
        "left",
        /*left*/
        r[2] - 5 + "px"
      ), ae(
        s,
        "top",
        /*top*/
        (r[3] + /*bottom*/
        r[5]) / 2 - 5 + "px"
      ), D0(c, "class", "box-anchor svelte-12x5anh"), We(c, "inactive", !/*active*/
      r[1]), ae(c, "cursor", "nesw-resize"), ae(
        c,
        "left",
        /*left*/
        r[2] - 5 + "px"
      ), ae(
        c,
        "top",
        /*bottom*/
        r[5] - 5 + "px"
      ), D0(d, "class", "box-anchor svelte-12x5anh"), We(d, "inactive", !/*active*/
      r[1]), ae(d, "cursor", "ns-resize"), ae(
        d,
        "left",
        /*left*/
        (r[2] + /*right*/
        r[4]) / 2 - 5 + "px"
      ), ae(
        d,
        "top",
        /*bottom*/
        r[5] - 5 + "px"
      ), D0(E, "class", "box-anchor svelte-12x5anh"), We(E, "inactive", !/*active*/
      r[1]), ae(E, "cursor", "nwse-resize"), ae(
        E,
        "left",
        /*right*/
        r[4] - 5 + "px"
      ), ae(
        E,
        "top",
        /*bottom*/
        r[5] - 5 + "px"
      ), D0(v, "class", "box-anchor svelte-12x5anh"), We(v, "inactive", !/*active*/
      r[1]), ae(v, "cursor", "ew-resize"), ae(
        v,
        "left",
        /*right*/
        r[4] - 5 + "px"
      ), ae(
        v,
        "top",
        /*top*/
        (r[3] + /*bottom*/
        r[5]) / 2 - 5 + "px"
      ), D0(C, "class", "box-anchor svelte-12x5anh"), We(C, "inactive", !/*active*/
      r[1]), ae(C, "cursor", "nesw-resize"), ae(
        C,
        "left",
        /*right*/
        r[4] - 5 + "px"
      ), ae(
        C,
        "top",
        /*top*/
        r[3] - 5 + "px"
      ), D0(z, "class", "box-anchor svelte-12x5anh"), We(z, "inactive", !/*active*/
      r[1]), ae(z, "cursor", "ns-resize"), ae(
        z,
        "left",
        /*left*/
        (r[2] + /*right*/
        r[4]) / 2 - 5 + "px"
      ), ae(
        z,
        "top",
        /*top*/
        r[3] - 5 + "px"
      );
    },
    m(I, M) {
      st(I, e, M), r[24](e), st(I, n, M), st(I, a, M), r[25](a), st(I, l, M), st(I, s, M), r[27](s), st(I, u, M), st(I, c, M), r[29](c), st(I, g, M), st(I, d, M), r[31](d), st(I, y, M), st(I, E, M), r[33](E), st(I, w, M), st(I, v, M), r[35](v), st(I, x, M), st(I, C, M), r[37](C), st(I, S, M), st(I, z, M), r[39](z), L || (R = [
        Je(e, "mousedown", et(Ke(
          /*onCursorMousedown*/
          r[8]
        ))),
        Je(e, "click", et(Ke(
          /*click_handler*/
          r[23]
        ))),
        Je(a, "mousedown", et(Ke(
          /*mousedown_handler*/
          r[26]
        ))),
        Je(a, "click", et(Ke(
          /*click_handler_1*/
          r[22]
        ))),
        Je(s, "mousedown", et(Ke(
          /*mousedown_handler_1*/
          r[28]
        ))),
        Je(s, "click", et(Ke(
          /*click_handler_2*/
          r[21]
        ))),
        Je(c, "mousedown", et(Ke(
          /*mousedown_handler_2*/
          r[30]
        ))),
        Je(c, "click", et(Ke(
          /*click_handler_3*/
          r[20]
        ))),
        Je(d, "mousedown", et(Ke(
          /*mousedown_handler_3*/
          r[32]
        ))),
        Je(d, "click", et(Ke(
          /*click_handler_4*/
          r[19]
        ))),
        Je(E, "mousedown", et(Ke(
          /*mousedown_handler_4*/
          r[34]
        ))),
        Je(E, "click", et(Ke(
          /*click_handler_5*/
          r[18]
        ))),
        Je(v, "mousedown", et(Ke(
          /*mousedown_handler_5*/
          r[36]
        ))),
        Je(v, "click", et(Ke(
          /*click_handler_6*/
          r[17]
        ))),
        Je(C, "mousedown", et(Ke(
          /*mousedown_handler_6*/
          r[38]
        ))),
        Je(C, "click", et(Ke(
          /*click_handler_7*/
          r[16]
        ))),
        Je(z, "mousedown", et(Ke(
          /*mousedown_handler_7*/
          r[40]
        ))),
        Je(z, "click", et(Ke(
          /*click_handler_8*/
          r[15]
        )))
      ], L = !0);
    },
    p(I, M) {
      M[0] & /*active*/
      2 && We(e, "inactive", !/*active*/
      I[1]), M[0] & /*active, dragging*/
      3 && We(
        e,
        "selectable",
        /*active*/
        I[1] && !/*dragging*/
        I[0]
      ), M[0] & /*left*/
      4 && ae(
        e,
        "left",
        /*left*/
        I[2] + "px"
      ), M[0] & /*top*/
      8 && ae(
        e,
        "top",
        /*top*/
        I[3] + "px"
      ), M[0] & /*right, left*/
      20 && ae(
        e,
        "width",
        /*right*/
        I[4] - /*left*/
        I[2] + "px"
      ), M[0] & /*bottom, top*/
      40 && ae(
        e,
        "height",
        /*bottom*/
        I[5] - /*top*/
        I[3] + "px"
      ), M[0] & /*active*/
      2 && We(a, "inactive", !/*active*/
      I[1]), M[0] & /*left*/
      4 && ae(
        a,
        "left",
        /*left*/
        I[2] - 5 + "px"
      ), M[0] & /*top*/
      8 && ae(
        a,
        "top",
        /*top*/
        I[3] - 5 + "px"
      ), M[0] & /*active*/
      2 && We(s, "inactive", !/*active*/
      I[1]), M[0] & /*left*/
      4 && ae(
        s,
        "left",
        /*left*/
        I[2] - 5 + "px"
      ), M[0] & /*top, bottom*/
      40 && ae(
        s,
        "top",
        /*top*/
        (I[3] + /*bottom*/
        I[5]) / 2 - 5 + "px"
      ), M[0] & /*active*/
      2 && We(c, "inactive", !/*active*/
      I[1]), M[0] & /*left*/
      4 && ae(
        c,
        "left",
        /*left*/
        I[2] - 5 + "px"
      ), M[0] & /*bottom*/
      32 && ae(
        c,
        "top",
        /*bottom*/
        I[5] - 5 + "px"
      ), M[0] & /*active*/
      2 && We(d, "inactive", !/*active*/
      I[1]), M[0] & /*left, right*/
      20 && ae(
        d,
        "left",
        /*left*/
        (I[2] + /*right*/
        I[4]) / 2 - 5 + "px"
      ), M[0] & /*bottom*/
      32 && ae(
        d,
        "top",
        /*bottom*/
        I[5] - 5 + "px"
      ), M[0] & /*active*/
      2 && We(E, "inactive", !/*active*/
      I[1]), M[0] & /*right*/
      16 && ae(
        E,
        "left",
        /*right*/
        I[4] - 5 + "px"
      ), M[0] & /*bottom*/
      32 && ae(
        E,
        "top",
        /*bottom*/
        I[5] - 5 + "px"
      ), M[0] & /*active*/
      2 && We(v, "inactive", !/*active*/
      I[1]), M[0] & /*right*/
      16 && ae(
        v,
        "left",
        /*right*/
        I[4] - 5 + "px"
      ), M[0] & /*top, bottom*/
      40 && ae(
        v,
        "top",
        /*top*/
        (I[3] + /*bottom*/
        I[5]) / 2 - 5 + "px"
      ), M[0] & /*active*/
      2 && We(C, "inactive", !/*active*/
      I[1]), M[0] & /*right*/
      16 && ae(
        C,
        "left",
        /*right*/
        I[4] - 5 + "px"
      ), M[0] & /*top*/
      8 && ae(
        C,
        "top",
        /*top*/
        I[3] - 5 + "px"
      ), M[0] & /*active*/
      2 && We(z, "inactive", !/*active*/
      I[1]), M[0] & /*left, right*/
      20 && ae(
        z,
        "left",
        /*left*/
        (I[2] + /*right*/
        I[4]) / 2 - 5 + "px"
      ), M[0] & /*top*/
      8 && ae(
        z,
        "top",
        /*top*/
        I[3] - 5 + "px"
      );
    },
    i: r1,
    o: r1,
    d(I) {
      I && (Ze(e), Ze(n), Ze(a), Ze(l), Ze(s), Ze(u), Ze(c), Ze(g), Ze(d), Ze(y), Ze(E), Ze(w), Ze(v), Ze(x), Ze(C), Ze(S), Ze(z)), r[24](null), r[25](null), r[27](null), r[29](null), r[31](null), r[33](null), r[35](null), r[37](null), r[39](null), L = !1, t7(R);
    }
  };
}
function i7(r, e, t) {
  let { frame: n } = e, { dragging: a = !1 } = e, { active: i = !1 } = e, l = 0, s = 0, o = 0, u = 0;
  function c(P) {
    t(2, l = P.left), t(3, s = P.top), t(4, o = P.right), t(5, u = P.bottom);
  }
  function m() {
    return { left: l, top: s, right: o, bottom: u };
  }
  let g = null, d = {
    nw: null,
    n: null,
    ne: null,
    w: null,
    sw: null,
    s: null,
    se: null,
    e: null
  };
  const _ = n7();
  function y(P) {
    const Le = P.clientX, O = P.clientY, ne = { left: l, top: s, right: o, bottom: u };
    t(0, a = !0);
    function te(ke) {
      const at = tt(ke.clientX - Le, n.left - ne.left, n.right - ne.right), Ve = tt(ke.clientY - O, n.top - ne.top, n.bottom - ne.bottom);
      t(2, l = ne.left + at), t(3, s = ne.top + Ve), t(4, o = ne.right + at), t(5, u = ne.bottom + Ve), _("change", { left: l, top: s, right: o, bottom: u }), ke.preventDefault(), ke.stopPropagation();
    }
    function _e(ke) {
      window.removeEventListener("mousemove", te), window.removeEventListener("mouseup", _e), ke.preventDefault(), ke.stopPropagation(), t(0, a = !1);
    }
    window.addEventListener("mousemove", te), window.addEventListener("mouseup", _e);
  }
  function E(P, Le) {
    const O = P.clientX, ne = P.clientY, te = { left: l, top: s, right: o, bottom: u };
    t(0, a = !0);
    function _e(at) {
      const Ve = at.clientX - O, ct = at.clientY - ne;
      Le.includes("w") ? te.left + Ve <= te.right ? t(2, l = tt(te.left + Ve, n.left, n.right)) : (t(2, l = te.right), t(4, o = tt(te.left + Ve, n.left, n.right))) : Le.includes("e") && (te.right + Ve >= te.left ? t(4, o = tt(te.right + Ve, n.left, n.right)) : (t(4, o = te.left), t(2, l = tt(te.right + Ve, n.left, n.right)))), Le.includes("n") ? te.top + ct <= te.bottom ? t(3, s = tt(te.top + ct, n.top, n.bottom)) : (t(3, s = te.bottom), t(5, u = tt(te.top + ct, n.top, n.bottom))) : Le.includes("s") && (te.bottom + ct >= te.top ? t(5, u = tt(te.bottom + ct, n.top, n.bottom)) : (t(5, u = te.bottom), t(3, s = tt(te.bottom + ct, n.top, n.bottom)))), _("change", { left: l, top: s, right: o, bottom: u }), at.preventDefault(), at.stopPropagation();
    }
    function ke(at) {
      window.removeEventListener("mousemove", _e), window.removeEventListener("mouseup", ke), at.preventDefault(), at.stopPropagation(), t(0, a = !1);
    }
    window.addEventListener("mousemove", _e), window.addEventListener("mouseup", ke);
  }
  function A(P = null) {
    g == null || g.dispatchEvent(new MouseEvent("mousedown", P));
  }
  function w(P, Le = null) {
    var O;
    (O = d[P]) === null || O === void 0 || O.dispatchEvent(new MouseEvent("mousedown", Le));
  }
  function v(P) {
    A0.call(this, r, P);
  }
  function x(P) {
    A0.call(this, r, P);
  }
  function C(P) {
    A0.call(this, r, P);
  }
  function N(P) {
    A0.call(this, r, P);
  }
  function S(P) {
    A0.call(this, r, P);
  }
  function z(P) {
    A0.call(this, r, P);
  }
  function L(P) {
    A0.call(this, r, P);
  }
  function R(P) {
    A0.call(this, r, P);
  }
  function I(P) {
    A0.call(this, r, P);
  }
  function M(P) {
    E0[P ? "unshift" : "push"](() => {
      g = P, t(6, g);
    });
  }
  function Ee(P) {
    E0[P ? "unshift" : "push"](() => {
      d.nw = P, t(7, d);
    });
  }
  const U = (P) => E(P, "nw");
  function Z(P) {
    E0[P ? "unshift" : "push"](() => {
      d.w = P, t(7, d);
    });
  }
  const se = (P) => E(P, "w");
  function Ge(P) {
    E0[P ? "unshift" : "push"](() => {
      d.sw = P, t(7, d);
    });
  }
  const ge = (P) => E(P, "sw");
  function Ae(P) {
    E0[P ? "unshift" : "push"](() => {
      d.s = P, t(7, d);
    });
  }
  const xe = (P) => E(P, "s");
  function oe(P) {
    E0[P ? "unshift" : "push"](() => {
      d.se = P, t(7, d);
    });
  }
  const me = (P) => E(P, "se");
  function be(P) {
    E0[P ? "unshift" : "push"](() => {
      d.e = P, t(7, d);
    });
  }
  const He = (P) => E(P, "e");
  function G(P) {
    E0[P ? "unshift" : "push"](() => {
      d.ne = P, t(7, d);
    });
  }
  const rt = (P) => E(P, "ne");
  function Ye(P) {
    E0[P ? "unshift" : "push"](() => {
      d.n = P, t(7, d);
    });
  }
  const nt = (P) => E(P, "n");
  return r.$$set = (P) => {
    "frame" in P && t(10, n = P.frame), "dragging" in P && t(0, a = P.dragging), "active" in P && t(1, i = P.active);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*dragging*/
    1 && a && _("drag");
  }, [
    a,
    i,
    l,
    s,
    o,
    u,
    g,
    d,
    y,
    E,
    n,
    c,
    m,
    A,
    w,
    v,
    x,
    C,
    N,
    S,
    z,
    L,
    R,
    I,
    M,
    Ee,
    U,
    Z,
    se,
    Ge,
    ge,
    Ae,
    xe,
    oe,
    me,
    be,
    He,
    G,
    rt,
    Ye,
    nt
  ];
}
class l7 extends K3 {
  constructor(e) {
    super(), e7(
      this,
      e,
      i7,
      a7,
      r7,
      {
        frame: 10,
        dragging: 0,
        active: 1,
        setPosition: 11,
        getPosition: 12,
        emitCursorMousedown: 13,
        emitAnchorMousedown: 14
      },
      null,
      [-1, -1]
    );
  }
  get setPosition() {
    return this.$$.ctx[11];
  }
  get getPosition() {
    return this.$$.ctx[12];
  }
  get emitCursorMousedown() {
    return this.$$.ctx[13];
  }
  get emitAnchorMousedown() {
    return this.$$.ctx[14];
  }
}
const {
  SvelteComponent: s7,
  attr: El,
  bubble: o7,
  children: u7,
  claim_element: c7,
  detach: n1,
  element: h7,
  init: f7,
  insert_hydration: m7,
  listen: d7,
  noop: a1,
  safe_not_equal: p7,
  set_style: Y0,
  toggle_class: za
} = window.__gradio__svelte__internal;
function g7(r) {
  let e, t, n, a;
  return {
    c() {
      e = h7("div"), this.h();
    },
    l(i) {
      e = c7(i, "DIV", { class: !0, "data-label": !0 });
      var l = u7(e);
      l.forEach(n1), this.h();
    },
    h() {
      El(e, "class", "box-preview svelte-a3o0xh"), El(e, "data-label", t = /*annotation*/
      r[0].label), za(
        e,
        "selectable",
        /*interactive*/
        r[1] && /*selectable*/
        r[2]
      ), za(e, "inactive", !/*active*/
      r[3]), Y0(
        e,
        "left",
        /*annotation*/
        r[0].left + "px"
      ), Y0(
        e,
        "top",
        /*annotation*/
        r[0].top + "px"
      ), Y0(
        e,
        "width",
        /*annotation*/
        r[0].right - /*annotation*/
        r[0].left + "px"
      ), Y0(
        e,
        "height",
        /*annotation*/
        r[0].bottom - /*annotation*/
        r[0].top + "px"
      );
    },
    m(i, l) {
      m7(i, e, l), n || (a = d7(
        e,
        "mousedown",
        /*mousedown_handler*/
        r[4]
      ), n = !0);
    },
    p(i, [l]) {
      l & /*annotation*/
      1 && t !== (t = /*annotation*/
      i[0].label) && El(e, "data-label", t), l & /*interactive, selectable*/
      6 && za(
        e,
        "selectable",
        /*interactive*/
        i[1] && /*selectable*/
        i[2]
      ), l & /*active*/
      8 && za(e, "inactive", !/*active*/
      i[3]), l & /*annotation*/
      1 && Y0(
        e,
        "left",
        /*annotation*/
        i[0].left + "px"
      ), l & /*annotation*/
      1 && Y0(
        e,
        "top",
        /*annotation*/
        i[0].top + "px"
      ), l & /*annotation*/
      1 && Y0(
        e,
        "width",
        /*annotation*/
        i[0].right - /*annotation*/
        i[0].left + "px"
      ), l & /*annotation*/
      1 && Y0(
        e,
        "height",
        /*annotation*/
        i[0].bottom - /*annotation*/
        i[0].top + "px"
      );
    },
    i: a1,
    o: a1,
    d(i) {
      i && n1(e), n = !1, a();
    }
  };
}
function b7(r, e, t) {
  let { annotation: n } = e, { interactive: a } = e, { selectable: i } = e, { active: l = !0 } = e;
  function s(o) {
    o7.call(this, r, o);
  }
  return r.$$set = (o) => {
    "annotation" in o && t(0, n = o.annotation), "interactive" in o && t(1, a = o.interactive), "selectable" in o && t(2, i = o.selectable), "active" in o && t(3, l = o.active);
  }, [n, a, i, l, s];
}
class v7 extends s7 {
  constructor(e) {
    super(), f7(this, e, b7, g7, p7, {
      annotation: 0,
      interactive: 1,
      selectable: 2,
      active: 3
    });
  }
}
const {
  SvelteComponent: _7,
  action_destroyer: y7,
  append_hydration: La,
  attr: $r,
  binding_callbacks: Al,
  check_outros: Zn,
  children: es,
  claim_component: Rr,
  claim_element: Va,
  claim_space: ja,
  create_component: Or,
  destroy_component: Hr,
  destroy_each: ro,
  detach: $0,
  element: Wa,
  empty: on,
  ensure_array_like: un,
  group_outros: $n,
  init: w7,
  insert_hydration: _r,
  listen: k7,
  mount_component: Pr,
  prevent_default: D7,
  run_all: E7,
  safe_not_equal: A7,
  set_style: Z0,
  space: Xa,
  src_url_equal: i1,
  stop_propagation: x7,
  toggle_class: l1,
  transition_in: Pe,
  transition_out: ot
} = window.__gradio__svelte__internal;
function s1(r, e, t) {
  const n = r.slice();
  return n[27] = e[t], n;
}
function o1(r, e, t) {
  const n = r.slice();
  return n[27] = e[t], n;
}
function u1(r, e, t) {
  const n = r.slice();
  return n[32] = e[t], n[34] = t, n;
}
function c1(r) {
  let e, t, n, a, i, l, s, o, u, c, m, g, d, _, y, E = un(
    /*displayAnnotations*/
    r[8]
  ), A = [];
  for (let S = 0; S < E.length; S += 1)
    A[S] = h1(u1(r, E, S));
  const w = (S) => ot(A[S], 1, 1, () => {
    A[S] = null;
  });
  let v = {
    active: (
      /*interactive*/
      r[3] && /*selected*/
      r[10] !== null
    ),
    frame: (
      /*imageRect*/
      r[5]
    )
  };
  l = new l7({ props: v }), r[21](l), l.$on(
    "change",
    /*onCursorChange*/
    r[16]
  );
  const x = [T7, S7], C = [];
  function N(S, z) {
    return (
      /*interactive*/
      S[3] ? 0 : (
        /*show_legend*/
        S[4] && /*categories*/
        S[1].length > 0 ? 1 : -1
      )
    );
  }
  return ~(c = N(r)) && (m = C[c] = x[c](r)), {
    c() {
      e = Wa("div"), t = Wa("img"), a = Xa();
      for (let S = 0; S < A.length; S += 1)
        A[S].c();
      i = Xa(), s = Wa("div"), Or(l.$$.fragment), u = Xa(), m && m.c(), g = on(), this.h();
    },
    l(S) {
      e = Va(S, "DIV", { class: !0 });
      var z = es(e);
      t = Va(z, "IMG", {
        src: !0,
        alt: !0,
        loading: !0,
        class: !0
      }), a = ja(z);
      for (let R = 0; R < A.length; R += 1)
        A[R].l(z);
      i = ja(z), s = Va(z, "DIV", { style: !0 });
      var L = es(s);
      Rr(l.$$.fragment, L), z.forEach($0), u = ja(S), m && m.l(S), g = on(), this.h();
    },
    h() {
      var S;
      i1(t.src, n = /*value*/
      r[0].image.url) || $r(t, "src", n), $r(t, "alt", "background"), $r(t, "loading", "lazy"), $r(t, "class", "svelte-40mb5q"), l1(
        t,
        "inserting",
        /*interactive*/
        r[3] && /*inserting*/
        r[11]
      ), Z0(s, "display", "contents"), Z0(s, "--box-color", o = /*selected*/
      r[10] !== null ? (
        /*colorMap*/
        r[2][
          /*value*/
          ((S = r[0].annotations[
            /*selected*/
            r[10]
          ]) == null ? void 0 : S.label) || ""
        ]
      ) : "white"), $r(e, "class", "image-frame svelte-40mb5q");
    },
    m(S, z) {
      _r(S, e, z), La(e, t), r[19](t), La(e, a);
      for (let L = 0; L < A.length; L += 1)
        A[L] && A[L].m(e, null);
      La(e, i), La(e, s), Pr(l, s, null), r[22](e), _r(S, u, z), ~c && C[c].m(S, z), _r(S, g, z), d = !0, _ || (y = [
        y7(
          /*onResize*/
          r[13].call(null, e)
        ),
        k7(e, "mousedown", x7(D7(
          /*onFrameMousedown*/
          r[15]
        )))
      ], _ = !0);
    },
    p(S, z) {
      var I;
      if ((!d || z[0] & /*value*/
      1 && !i1(t.src, n = /*value*/
      S[0].image.url)) && $r(t, "src", n), (!d || z[0] & /*interactive, inserting*/
      2056) && l1(
        t,
        "inserting",
        /*interactive*/
        S[3] && /*inserting*/
        S[11]
      ), z[0] & /*displayAnnotations, interactive, inserting, selected, onSelect, colorMap*/
      19724) {
        E = un(
          /*displayAnnotations*/
          S[8]
        );
        let M;
        for (M = 0; M < E.length; M += 1) {
          const Ee = u1(S, E, M);
          A[M] ? (A[M].p(Ee, z), Pe(A[M], 1)) : (A[M] = h1(Ee), A[M].c(), Pe(A[M], 1), A[M].m(e, i));
        }
        for ($n(), M = E.length; M < A.length; M += 1)
          w(M);
        Zn();
      }
      z[0] & /*selected, colorMap, value*/
      1029 && o !== (o = /*selected*/
      S[10] !== null ? (
        /*colorMap*/
        S[2][
          /*value*/
          ((I = S[0].annotations[
            /*selected*/
            S[10]
          ]) == null ? void 0 : I.label) || ""
        ]
      ) : "white") && Z0(s, "--box-color", o);
      const L = {};
      z[0] & /*interactive, selected*/
      1032 && (L.active = /*interactive*/
      S[3] && /*selected*/
      S[10] !== null), z[0] & /*imageRect*/
      32 && (L.frame = /*imageRect*/
      S[5]), l.$set(L);
      let R = c;
      c = N(S), c === R ? ~c && C[c].p(S, z) : (m && ($n(), ot(C[R], 1, 1, () => {
        C[R] = null;
      }), Zn()), ~c ? (m = C[c], m ? m.p(S, z) : (m = C[c] = x[c](S), m.c()), Pe(m, 1), m.m(g.parentNode, g)) : m = null);
    },
    i(S) {
      if (!d) {
        for (let z = 0; z < E.length; z += 1)
          Pe(A[z]);
        Pe(l.$$.fragment, S), Pe(m), d = !0;
      }
    },
    o(S) {
      A = A.filter(Boolean);
      for (let z = 0; z < A.length; z += 1)
        ot(A[z]);
      ot(l.$$.fragment, S), ot(m), d = !1;
    },
    d(S) {
      S && ($0(e), $0(u), $0(g)), r[19](null), ro(A, S), r[21](null), Hr(l), r[22](null), ~c && C[c].d(S), _ = !1, E7(y);
    }
  };
}
function h1(r) {
  let e, t, n, a, i;
  function l(...s) {
    return (
      /*mousedown_handler*/
      r[20](
        /*index*/
        r[34],
        ...s
      )
    );
  }
  return e = new v7({
    props: {
      annotation: (
        /*annotation*/
        r[32]
      ),
      interactive: (
        /*interactive*/
        r[3]
      ),
      selectable: !/*inserting*/
      r[11],
      active: !/*interactive*/
      r[3] || /*selected*/
      r[10] !== /*index*/
      r[34]
    }
  }), e.$on("mousedown", l), {
    c() {
      t = Wa("div"), Or(e.$$.fragment), this.h();
    },
    l(s) {
      t = Va(s, "DIV", { style: !0 });
      var o = es(t);
      Rr(e.$$.fragment, o), this.h();
    },
    h() {
      Z0(t, "display", "contents"), Z0(t, "--box-color", n = /*colorMap*/
      r[2][
        /*annotation*/
        r[32].label || ""
      ]), Z0(t, "--cursor", a = /*inserting*/
      r[11] ? "crosshair" : "default");
    },
    m(s, o) {
      _r(s, t, o), Pr(e, t, null), i = !0;
    },
    p(s, o) {
      r = s, o[0] & /*colorMap, displayAnnotations*/
      260 && n !== (n = /*colorMap*/
      r[2][
        /*annotation*/
        r[32].label || ""
      ]) && Z0(t, "--box-color", n), o[0] & /*inserting*/
      2048 && a !== (a = /*inserting*/
      r[11] ? "crosshair" : "default") && Z0(t, "--cursor", a);
      const u = {};
      o[0] & /*displayAnnotations*/
      256 && (u.annotation = /*annotation*/
      r[32]), o[0] & /*interactive*/
      8 && (u.interactive = /*interactive*/
      r[3]), o[0] & /*inserting*/
      2048 && (u.selectable = !/*inserting*/
      r[11]), o[0] & /*interactive, selected*/
      1032 && (u.active = !/*interactive*/
      r[3] || /*selected*/
      r[10] !== /*index*/
      r[34]), e.$set(u);
    },
    i(s) {
      i || (Pe(e.$$.fragment, s), i = !0);
    },
    o(s) {
      ot(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && e && $0(t), Hr(e, s);
    }
  };
}
function S7(r) {
  let e, t;
  return e = new Bh({
    props: {
      show_border: !0,
      $$slots: { default: [F7] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Or(e.$$.fragment);
    },
    l(n) {
      Rr(e.$$.fragment, n);
    },
    m(n, a) {
      Pr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*categories, colorMap*/
      6 | a[1] & /*$$scope*/
      16 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (Pe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hr(e, n);
    }
  };
}
function T7(r) {
  let e, t;
  return e = new Bh({
    props: {
      show_border: !0,
      $$slots: { default: [C7] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Or(e.$$.fragment);
    },
    l(n) {
      Rr(e.$$.fragment, n);
    },
    m(n, a) {
      Pr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*selected, categories, inserting, currentCategory, colorMap*/
      7174 | a[1] & /*$$scope*/
      16 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (Pe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hr(e, n);
    }
  };
}
function f1(r) {
  let e, t;
  return e = new bn({
    props: {
      Icon: Kl,
      show_label: !0,
      label: (
        /*category*/
        r[27]
      ),
      size: "medium",
      padded: !0,
      color: (
        /*colorMap*/
        r[2][
          /*category*/
          r[27]
        ] || "white"
      )
    }
  }), {
    c() {
      Or(e.$$.fragment);
    },
    l(n) {
      Rr(e.$$.fragment, n);
    },
    m(n, a) {
      Pr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*categories*/
      2 && (i.label = /*category*/
      n[27]), a[0] & /*colorMap, categories*/
      6 && (i.color = /*colorMap*/
      n[2][
        /*category*/
        n[27]
      ] || "white"), e.$set(i);
    },
    i(n) {
      t || (Pe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hr(e, n);
    }
  };
}
function F7(r) {
  let e, t, n = un(
    /*categories*/
    r[1]
  ), a = [];
  for (let l = 0; l < n.length; l += 1)
    a[l] = f1(s1(r, n, l));
  const i = (l) => ot(a[l], 1, 1, () => {
    a[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      e = on();
    },
    l(l) {
      for (let s = 0; s < a.length; s += 1)
        a[s].l(l);
      e = on();
    },
    m(l, s) {
      for (let o = 0; o < a.length; o += 1)
        a[o] && a[o].m(l, s);
      _r(l, e, s), t = !0;
    },
    p(l, s) {
      if (s[0] & /*categories, colorMap*/
      6) {
        n = un(
          /*categories*/
          l[1]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const u = s1(l, n, o);
          a[o] ? (a[o].p(u, s), Pe(a[o], 1)) : (a[o] = f1(u), a[o].c(), Pe(a[o], 1), a[o].m(e.parentNode, e));
        }
        for ($n(), o = n.length; o < a.length; o += 1)
          i(o);
        Zn();
      }
    },
    i(l) {
      if (!t) {
        for (let s = 0; s < n.length; s += 1)
          Pe(a[s]);
        t = !0;
      }
    },
    o(l) {
      a = a.filter(Boolean);
      for (let s = 0; s < a.length; s += 1)
        ot(a[s]);
      t = !1;
    },
    d(l) {
      l && $0(e), ro(a, l);
    }
  };
}
function m1(r) {
  let e, t;
  function n() {
    return (
      /*click_handler*/
      r[23](
        /*category*/
        r[27]
      )
    );
  }
  return e = new bn({
    props: {
      Icon: (
        /*categories*/
        r[1].length > 1 ? Kl : Ru
      ),
      show_label: (
        /*categories*/
        r[1].length > 1
      ),
      label: (
        /*category*/
        r[27]
      ),
      size: "medium",
      padded: !0,
      hasPopup: !0,
      highlight: (
        /*inserting*/
        r[11] && /*category*/
        r[27] === /*currentCategory*/
        r[12]
      ),
      color: (
        /*colorMap*/
        r[2][
          /*category*/
          r[27]
        ] || "white"
      )
    }
  }), e.$on("click", n), {
    c() {
      Or(e.$$.fragment);
    },
    l(a) {
      Rr(e.$$.fragment, a);
    },
    m(a, i) {
      Pr(e, a, i), t = !0;
    },
    p(a, i) {
      r = a;
      const l = {};
      i[0] & /*categories*/
      2 && (l.Icon = /*categories*/
      r[1].length > 1 ? Kl : Ru), i[0] & /*categories*/
      2 && (l.show_label = /*categories*/
      r[1].length > 1), i[0] & /*categories*/
      2 && (l.label = /*category*/
      r[27]), i[0] & /*inserting, categories, currentCategory*/
      6146 && (l.highlight = /*inserting*/
      r[11] && /*category*/
      r[27] === /*currentCategory*/
      r[12]), i[0] & /*colorMap, categories*/
      6 && (l.color = /*colorMap*/
      r[2][
        /*category*/
        r[27]
      ] || "white"), e.$set(l);
    },
    i(a) {
      t || (Pe(e.$$.fragment, a), t = !0);
    },
    o(a) {
      ot(e.$$.fragment, a), t = !1;
    },
    d(a) {
      Hr(e, a);
    }
  };
}
function C7(r) {
  let e, t, n, a = un(
    /*categories*/
    r[1]
  ), i = [];
  for (let s = 0; s < a.length; s += 1)
    i[s] = m1(o1(r, a, s));
  const l = (s) => ot(i[s], 1, 1, () => {
    i[s] = null;
  });
  return t = new bn({
    props: {
      Icon: I5,
      label: "Remove",
      size: "medium",
      padded: !0,
      disabled: (
        /*selected*/
        r[10] === null
      )
    }
  }), t.$on(
    "click",
    /*removeAnnotation*/
    r[17]
  ), {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Xa(), Or(t.$$.fragment);
    },
    l(s) {
      for (let o = 0; o < i.length; o += 1)
        i[o].l(s);
      e = ja(s), Rr(t.$$.fragment, s);
    },
    m(s, o) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(s, o);
      _r(s, e, o), Pr(t, s, o), n = !0;
    },
    p(s, o) {
      if (o[0] & /*categories, inserting, currentCategory, colorMap, onClickInsertion*/
      268294) {
        a = un(
          /*categories*/
          s[1]
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const m = o1(s, a, c);
          i[c] ? (i[c].p(m, o), Pe(i[c], 1)) : (i[c] = m1(m), i[c].c(), Pe(i[c], 1), i[c].m(e.parentNode, e));
        }
        for ($n(), c = a.length; c < i.length; c += 1)
          l(c);
        Zn();
      }
      const u = {};
      o[0] & /*selected*/
      1024 && (u.disabled = /*selected*/
      s[10] === null), t.$set(u);
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < a.length; o += 1)
          Pe(i[o]);
        Pe(t.$$.fragment, s), n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        ot(i[o]);
      ot(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $0(e), ro(i, s), Hr(t, s);
    }
  };
}
function M7(r) {
  let e, t, n = (
    /*value*/
    r[0] !== null && c1(r)
  );
  return {
    c() {
      n && n.c(), e = on();
    },
    l(a) {
      n && n.l(a), e = on();
    },
    m(a, i) {
      n && n.m(a, i), _r(a, e, i), t = !0;
    },
    p(a, i) {
      /*value*/
      a[0] !== null ? n ? (n.p(a, i), i[0] & /*value*/
      1 && Pe(n, 1)) : (n = c1(a), n.c(), Pe(n, 1), n.m(e.parentNode, e)) : n && ($n(), ot(n, 1, 1, () => {
        n = null;
      }), Zn());
    },
    i(a) {
      t || (Pe(n), t = !0);
    },
    o(a) {
      ot(n), t = !1;
    },
    d(a) {
      a && $0(e), n && n.d(a);
    }
  };
}
function B7(r, e, t) {
  let { value: n = null } = e, { interactive: a = !1 } = e, { show_legend: i = !0 } = e, { categories: l = [] } = e, { colorMap: s = {} } = e, o = {
    left: 0,
    top: 0,
    right: 1,
    bottom: 1,
    width: 1,
    height: 1,
    naturalWidth: 2,
    naturalHeight: 2
  }, u, c, m = [], g, d = null, _ = !1, y = "";
  function E(U) {
    const Z = new ResizeObserver(() => {
      t(5, o = {
        left: c.offsetLeft,
        top: c.offsetTop,
        right: c.offsetLeft + c.offsetWidth,
        bottom: c.offsetTop + c.offsetHeight,
        width: c.offsetWidth,
        height: c.offsetHeight,
        naturalWidth: c.naturalWidth,
        naturalHeight: c.naturalHeight
      });
    });
    return Z.observe(U), {
      destroy() {
        Z.disconnect();
      }
    };
  }
  function A(U, Z) {
    t(8, m = (U == null ? void 0 : U.annotations.map((se) => ({
      left: se.left / (Z.naturalWidth - 1) * Z.width + Z.left,
      top: se.top / (Z.naturalHeight - 1) * Z.height + Z.top,
      right: se.right / (Z.naturalWidth - 1) * Z.width + Z.left,
      bottom: se.bottom / (Z.naturalHeight - 1) * Z.height + Z.top,
      label: se.label
    }))) || []), d !== null && g.setPosition(m[d]);
  }
  function w(U, Z) {
    _ || (t(10, d = Z), g.setPosition(m[d]), U.stopPropagation(), g.emitCursorMousedown({
      clientX: U.clientX,
      clientY: U.clientY
    }));
  }
  function v(U) {
    if (!n || (t(10, d = null), !_)) return;
    const Z = u.getBoundingClientRect(), se = {
      left: (U.clientX - Z.left - o.left) / o.width * (o.naturalWidth - 1),
      top: (U.clientY - Z.top - o.top) / o.height * (o.naturalHeight - 1)
    };
    n.annotations.push({
      left: tt(se.left, 0, o.naturalWidth - 1),
      top: tt(se.top, 0, o.naturalHeight - 1),
      right: tt(se.left, 0, o.naturalWidth - 1),
      bottom: tt(se.top, 0, o.naturalHeight - 1),
      label: y || null
    }), t(10, d = n.annotations.length - 1), A(n, o), t(11, _ = !1), t(12, y = ""), g.emitAnchorMousedown("se", {
      clientX: U.clientX,
      clientY: U.clientY
    });
  }
  function x() {
    if (n !== null && d !== null) {
      const U = g.getPosition(), Z = {
        left: (U.left - o.left) / o.width * (o.naturalWidth - 1),
        top: (U.top - o.top) / o.height * (o.naturalHeight - 1),
        right: (U.right - o.left) / o.width * (o.naturalWidth - 1),
        bottom: (U.bottom - o.top) / o.height * (o.naturalHeight - 1)
      };
      t(0, n.annotations[d].left = tt(Math.round(Z.left), 0, o.naturalWidth - 1), n), t(0, n.annotations[d].top = tt(Math.round(Z.top), 0, o.naturalHeight - 1), n), t(0, n.annotations[d].right = tt(Math.round(Z.right), 0, o.naturalWidth - 1), n), t(0, n.annotations[d].bottom = tt(Math.round(Z.bottom), 0, o.naturalHeight - 1), n);
    }
  }
  function C() {
    n !== null && d !== null && (n.annotations.splice(d, 1), t(10, d = null), t(0, n));
  }
  function N(U) {
    t(10, d = null), t(11, _ = !(_ && y === U)), t(12, y = U);
  }
  function S(U) {
    if (U) {
      for (let Z of U.annotations) {
        const se = Z.label || "";
        l.includes(se) || l.push(se);
      }
      t(1, l);
    }
  }
  function z(U) {
    for (let Z of U)
      if (!s[Z]) {
        const se = Object.keys(s).length, Ge = Math.round((se + 4) / 8 * 360) % 360;
        t(2, s[Z] = `hsl(${Ge}, 100%, 50%)`, s);
      }
    t(2, s);
  }
  function L(U) {
    Al[U ? "unshift" : "push"](() => {
      c = U, t(7, c);
    });
  }
  const R = (U, Z) => {
    a && !_ && w(Z, U);
  };
  function I(U) {
    Al[U ? "unshift" : "push"](() => {
      g = U, t(9, g);
    });
  }
  function M(U) {
    Al[U ? "unshift" : "push"](() => {
      u = U, t(6, u);
    });
  }
  const Ee = (U) => {
    N(U);
  };
  return r.$$set = (U) => {
    "value" in U && t(0, n = U.value), "interactive" in U && t(3, a = U.interactive), "show_legend" in U && t(4, i = U.show_legend), "categories" in U && t(1, l = U.categories), "colorMap" in U && t(2, s = U.colorMap);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*value, imageRect*/
    33 && A(n, o), r.$$.dirty[0] & /*value*/
    1 && S(n), r.$$.dirty[0] & /*categories*/
    2 && z(l);
  }, [
    n,
    l,
    s,
    a,
    i,
    o,
    u,
    c,
    m,
    g,
    d,
    _,
    y,
    E,
    w,
    v,
    x,
    C,
    N,
    L,
    R,
    I,
    M,
    Ee
  ];
}
class qh extends _7 {
  constructor(e) {
    super(), w7(
      this,
      e,
      B7,
      M7,
      A7,
      {
        value: 0,
        interactive: 3,
        show_legend: 4,
        categories: 1,
        colorMap: 2
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: N7,
  check_outros: Uh,
  claim_component: Ar,
  claim_space: Gh,
  create_component: xr,
  destroy_component: Sr,
  detach: mi,
  empty: di,
  group_outros: Vh,
  init: I7,
  insert_hydration: pi,
  mount_component: Tr,
  safe_not_equal: z7,
  space: jh,
  transition_in: qt,
  transition_out: n0
} = window.__gradio__svelte__internal;
function L7(r) {
  let e, t, n, a;
  return e = new Nh({
    props: {
      $$slots: { default: [H7] },
      $$scope: { ctx: r }
    }
  }), n = new qh({
    props: {
      value: (
        /*value*/
        r[0]
      ),
      categories: (
        /*categories*/
        r[5]
      )
    }
  }), {
    c() {
      xr(e.$$.fragment), t = jh(), xr(n.$$.fragment);
    },
    l(i) {
      Ar(e.$$.fragment, i), t = Gh(i), Ar(n.$$.fragment, i);
    },
    m(i, l) {
      Tr(e, i, l), pi(i, t, l), Tr(n, i, l), a = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope, value, i18n, show_download_button*/
      89 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
      const o = {};
      l & /*value*/
      1 && (o.value = /*value*/
      i[0]), l & /*categories*/
      32 && (o.categories = /*categories*/
      i[5]), n.$set(o);
    },
    i(i) {
      a || (qt(e.$$.fragment, i), qt(n.$$.fragment, i), a = !0);
    },
    o(i) {
      n0(e.$$.fragment, i), n0(n.$$.fragment, i), a = !1;
    },
    d(i) {
      i && mi(t), Sr(e, i), Sr(n, i);
    }
  };
}
function R7(r) {
  let e, t;
  return e = new Gd({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [P7] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      xr(e.$$.fragment);
    },
    l(n) {
      Ar(e.$$.fragment, n);
    },
    m(n, a) {
      Tr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*$$scope*/
      64 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (qt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      n0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sr(e, n);
    }
  };
}
function d1(r) {
  let e, t;
  return e = new J3({
    props: {
      href: e1(
        /*value*/
        r[0]
      ),
      download: (
        /*value*/
        (r[0].image.orig_name || "image") + ".json"
      ),
      $$slots: { default: [O7] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      xr(e.$$.fragment);
    },
    l(n) {
      Ar(e.$$.fragment, n);
    },
    m(n, a) {
      Tr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*value*/
      1 && (i.href = e1(
        /*value*/
        n[0]
      )), a & /*value*/
      1 && (i.download = /*value*/
      (n[0].image.orig_name || "image") + ".json"), a & /*$$scope, i18n*/
      80 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (qt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      n0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sr(e, n);
    }
  };
}
function O7(r) {
  let e, t;
  return e = new bn({
    props: {
      Icon: t5,
      label: (
        /*i18n*/
        r[4]("common.download")
      )
    }
  }), {
    c() {
      xr(e.$$.fragment);
    },
    l(n) {
      Ar(e.$$.fragment, n);
    },
    m(n, a) {
      Tr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*i18n*/
      16 && (i.label = /*i18n*/
      n[4]("common.download")), e.$set(i);
    },
    i(n) {
      t || (qt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      n0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sr(e, n);
    }
  };
}
function H7(r) {
  let e, t, n = (
    /*show_download_button*/
    r[3] && d1(r)
  );
  return {
    c() {
      n && n.c(), e = di();
    },
    l(a) {
      n && n.l(a), e = di();
    },
    m(a, i) {
      n && n.m(a, i), pi(a, e, i), t = !0;
    },
    p(a, i) {
      /*show_download_button*/
      a[3] ? n ? (n.p(a, i), i & /*show_download_button*/
      8 && qt(n, 1)) : (n = d1(a), n.c(), qt(n, 1), n.m(e.parentNode, e)) : n && (Vh(), n0(n, 1, 1, () => {
        n = null;
      }), Uh());
    },
    i(a) {
      t || (qt(n), t = !0);
    },
    o(a) {
      n0(n), t = !1;
    },
    d(a) {
      a && mi(e), n && n.d(a);
    }
  };
}
function P7(r) {
  let e, t;
  return e = new Qs({}), {
    c() {
      xr(e.$$.fragment);
    },
    l(n) {
      Ar(e.$$.fragment, n);
    },
    m(n, a) {
      Tr(e, n, a), t = !0;
    },
    i(n) {
      t || (qt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      n0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sr(e, n);
    }
  };
}
function q7(r) {
  let e, t, n, a, i, l;
  e = new Ah({
    props: {
      show_label: (
        /*show_label*/
        r[2]
      ),
      Icon: Qs,
      label: (
        /*label*/
        r[1] || /*i18n*/
        r[4]("image.image")
      )
    }
  });
  const s = [R7, L7], o = [];
  function u(c, m) {
    return (
      /*value*/
      c[0] === null || !/*value*/
      c[0].image.url ? 0 : 1
    );
  }
  return n = u(r), a = o[n] = s[n](r), {
    c() {
      xr(e.$$.fragment), t = jh(), a.c(), i = di();
    },
    l(c) {
      Ar(e.$$.fragment, c), t = Gh(c), a.l(c), i = di();
    },
    m(c, m) {
      Tr(e, c, m), pi(c, t, m), o[n].m(c, m), pi(c, i, m), l = !0;
    },
    p(c, [m]) {
      const g = {};
      m & /*show_label*/
      4 && (g.show_label = /*show_label*/
      c[2]), m & /*label, i18n*/
      18 && (g.label = /*label*/
      c[1] || /*i18n*/
      c[4]("image.image")), e.$set(g);
      let d = n;
      n = u(c), n === d ? o[n].p(c, m) : (Vh(), n0(o[d], 1, 1, () => {
        o[d] = null;
      }), Uh(), a = o[n], a ? a.p(c, m) : (a = o[n] = s[n](c), a.c()), qt(a, 1), a.m(i.parentNode, i));
    },
    i(c) {
      l || (qt(e.$$.fragment, c), qt(a), l = !0);
    },
    o(c) {
      n0(e.$$.fragment, c), n0(a), l = !1;
    },
    d(c) {
      c && (mi(t), mi(i)), Sr(e, c), o[n].d(c);
    }
  };
}
function U7(r, e, t) {
  let { value: n = null } = e, { label: a = void 0 } = e, { show_label: i } = e, { show_download_button: l = !0 } = e, { i18n: s } = e, { categories: o = [] } = e;
  return r.$$set = (u) => {
    "value" in u && t(0, n = u.value), "label" in u && t(1, a = u.label), "show_label" in u && t(2, i = u.show_label), "show_download_button" in u && t(3, l = u.show_download_button), "i18n" in u && t(4, s = u.i18n), "categories" in u && t(5, o = u.categories);
  }, [n, a, i, l, s, o];
}
class G7 extends N7 {
  constructor(e) {
    super(), I7(this, e, U7, q7, z7, {
      value: 0,
      label: 1,
      show_label: 2,
      show_download_button: 3,
      i18n: 4,
      categories: 5
    });
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
async function V7(r, e) {
  return r.map(
    (t) => new j7({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class j7 {
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
var C0;
class Qg extends TransformStream {
  /** Constructs a new instance. */
  constructor(t = { allowCR: !1 }) {
    super({
      transform: (n, a) => {
        for (n = Wr(this, C0) + n; ; ) {
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
        Co(this, C0, n);
      },
      flush: (n) => {
        if (Wr(this, C0) === "")
          return;
        const a = t.allowCR && Wr(this, C0).endsWith("\r") ? Wr(this, C0).slice(0, -1) : Wr(this, C0);
        n.enqueue(a);
      }
    });
    ji(this, C0, "");
  }
}
C0 = new WeakMap();
function yr() {
}
function W7(r) {
  return r();
}
function X7(r) {
  r.forEach(W7);
}
function Y7(r) {
  return typeof r == "function";
}
function Z7(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function $7(r, ...e) {
  if (r == null) {
    for (const n of e)
      n(void 0);
    return yr;
  }
  const t = r.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
const Wh = typeof window < "u";
let p1 = Wh ? () => window.performance.now() : () => Date.now(), Xh = Wh ? (r) => requestAnimationFrame(r) : yr;
const nn = /* @__PURE__ */ new Set();
function Yh(r) {
  nn.forEach((e) => {
    e.c(r) || (nn.delete(e), e.f());
  }), nn.size !== 0 && Xh(Yh);
}
function Q7(r) {
  let e;
  return nn.size === 0 && Xh(Yh), {
    promise: new Promise((t) => {
      nn.add(e = { c: r, f: t });
    }),
    abort() {
      nn.delete(e);
    }
  };
}
const Qr = [];
function J7(r, e) {
  return {
    subscribe: sa(r, e).subscribe
  };
}
function sa(r, e = yr) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function a(s) {
    if (Z7(r, s) && (r = s, t)) {
      const o = !Qr.length;
      for (const u of n)
        u[1](), Qr.push(u, r);
      if (o) {
        for (let u = 0; u < Qr.length; u += 2)
          Qr[u][0](Qr[u + 1]);
        Qr.length = 0;
      }
    }
  }
  function i(s) {
    a(s(r));
  }
  function l(s, o = yr) {
    const u = [s, o];
    return n.add(u), n.size === 1 && (t = e(a, i) || yr), s(r), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function vn(r, e, t) {
  const n = !Array.isArray(r), a = n ? [r] : r;
  if (!a.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return J7(t, (l, s) => {
    let o = !1;
    const u = [];
    let c = 0, m = yr;
    const g = () => {
      if (c)
        return;
      m();
      const _ = e(n ? u[0] : u, l, s);
      i ? l(_) : m = Y7(_) ? _ : yr;
    }, d = a.map(
      (_, y) => $7(
        _,
        (E) => {
          u[y] = E, c &= ~(1 << y), o && g();
        },
        () => {
          c |= 1 << y;
        }
      )
    );
    return o = !0, g(), function() {
      X7(d), m(), o = !1;
    };
  });
}
function g1(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function ts(r, e, t, n) {
  if (typeof t == "number" || g1(t)) {
    const a = n - t, i = (t - e) / (r.dt || 1 / 60), l = r.opts.stiffness * a, s = r.opts.damping * i, o = (l - s) * r.inv_mass, u = (i + o) * r.dt;
    return Math.abs(u) < r.opts.precision && Math.abs(a) < r.opts.precision ? n : (r.settled = !1, g1(t) ? new Date(t.getTime() + u) : t + u);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => ts(r, e[i], t[i], n[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = ts(r, e[i], t[i], n[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function b1(r, e = {}) {
  const t = sa(r), { stiffness: n = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, u = r, c = r, m = 1, g = 0, d = !1;
  function _(E, A = {}) {
    c = E;
    const w = o = {};
    return r == null || A.hard || y.stiffness >= 1 && y.damping >= 1 ? (d = !0, l = p1(), u = E, t.set(r = c), Promise.resolve()) : (A.soft && (g = 1 / ((A.soft === !0 ? 0.5 : +A.soft) * 60), m = 0), s || (l = p1(), d = !1, s = Q7((v) => {
      if (d)
        return d = !1, s = null, !1;
      m = Math.min(m + g, 1);
      const x = {
        inv_mass: m,
        opts: y,
        settled: !0,
        dt: (v - l) * 60 / 1e3
      }, C = ts(x, u, r, c);
      return l = v, u = r, t.set(r = C), x.settled && (s = null), !x.settled;
    })), new Promise((v) => {
      s.promise.then(() => {
        w === o && v();
      });
    }));
  }
  const y = {
    set: _,
    update: (E, A) => _(E(c, r), A),
    subscribe: t.subscribe,
    stiffness: n,
    damping: a,
    precision: i
  };
  return y;
}
var Ya = { exports: {} }, K7 = function(e) {
  return e6(e) && !t6(e);
};
function e6(r) {
  return !!r && typeof r == "object";
}
function t6(r) {
  var e = Object.prototype.toString.call(r);
  return e === "[object RegExp]" || e === "[object Date]" || a6(r);
}
var r6 = typeof Symbol == "function" && Symbol.for, n6 = r6 ? Symbol.for("react.element") : 60103;
function a6(r) {
  return r.$$typeof === n6;
}
function i6(r) {
  return Array.isArray(r) ? [] : {};
}
function Qn(r, e) {
  return e.clone !== !1 && e.isMergeableObject(r) ? cn(i6(r), r, e) : r;
}
function l6(r, e, t) {
  return r.concat(e).map(function(n) {
    return Qn(n, t);
  });
}
function s6(r, e) {
  if (!e.customMerge)
    return cn;
  var t = e.customMerge(r);
  return typeof t == "function" ? t : cn;
}
function o6(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(e) {
    return Object.propertyIsEnumerable.call(r, e);
  }) : [];
}
function v1(r) {
  return Object.keys(r).concat(o6(r));
}
function Zh(r, e) {
  try {
    return e in r;
  } catch {
    return !1;
  }
}
function u6(r, e) {
  return Zh(r, e) && !(Object.hasOwnProperty.call(r, e) && Object.propertyIsEnumerable.call(r, e));
}
function c6(r, e, t) {
  var n = {};
  return t.isMergeableObject(r) && v1(r).forEach(function(a) {
    n[a] = Qn(r[a], t);
  }), v1(e).forEach(function(a) {
    u6(r, a) || (Zh(r, a) && t.isMergeableObject(e[a]) ? n[a] = s6(a, t)(r[a], e[a], t) : n[a] = Qn(e[a], t));
  }), n;
}
function cn(r, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || l6, t.isMergeableObject = t.isMergeableObject || K7, t.cloneUnlessOtherwiseSpecified = Qn;
  var n = Array.isArray(e), a = Array.isArray(r), i = n === a;
  return i ? n ? t.arrayMerge(r, e, t) : c6(r, e, t) : Qn(e, t);
}
cn.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, a) {
    return cn(n, a, t);
  }, {});
};
var h6 = cn;
Ya.exports = h6;
const f6 = (Ya.exports == null ? {} : Ya.exports).default || Ya.exports;
var rs = function(r, e) {
  return rs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
  }, rs(r, e);
};
function Ii(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  rs(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ve = function() {
  return ve = Object.assign || function(e) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ve.apply(this, arguments);
};
function m6(r, e) {
  var t = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(r); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (t[n[a]] = r[n[a]]);
  return t;
}
function xl(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, a = e.length, i; n < a; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return r.concat(i || Array.prototype.slice.call(e));
}
function Sl(r, e) {
  var t = e && e.cache ? e.cache : _6, n = e && e.serializer ? e.serializer : v6, a = e && e.strategy ? e.strategy : p6;
  return a(r, {
    cache: t,
    serializer: n
  });
}
function d6(r) {
  return r == null || typeof r == "number" || typeof r == "boolean";
}
function $h(r, e, t, n) {
  var a = d6(n) ? n : t(n), i = e.get(a);
  return typeof i > "u" && (i = r.call(this, n), e.set(a, i)), i;
}
function Qh(r, e, t) {
  var n = Array.prototype.slice.call(arguments, 3), a = t(n), i = e.get(a);
  return typeof i > "u" && (i = r.apply(this, n), e.set(a, i)), i;
}
function no(r, e, t, n, a) {
  return t.bind(e, r, n, a);
}
function p6(r, e) {
  var t = r.length === 1 ? $h : Qh;
  return no(r, this, t, e.cache.create(), e.serializer);
}
function g6(r, e) {
  return no(r, this, Qh, e.cache.create(), e.serializer);
}
function b6(r, e) {
  return no(r, this, $h, e.cache.create(), e.serializer);
}
var v6 = function() {
  return JSON.stringify(arguments);
};
function ao() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ao.prototype.get = function(r) {
  return this.cache[r];
};
ao.prototype.set = function(r, e) {
  this.cache[r] = e;
};
var _6 = {
  create: function() {
    return new ao();
  }
}, Tl = {
  variadic: g6,
  monadic: b6
}, he;
(function(r) {
  r[r.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", r[r.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", r[r.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", r[r.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", r[r.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", r[r.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", r[r.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", r[r.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", r[r.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", r[r.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", r[r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", r[r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", r[r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", r[r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", r[r.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", r[r.INVALID_TAG = 23] = "INVALID_TAG", r[r.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", r[r.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", r[r.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(he || (he = {}));
var Ce;
(function(r) {
  r[r.literal = 0] = "literal", r[r.argument = 1] = "argument", r[r.number = 2] = "number", r[r.date = 3] = "date", r[r.time = 4] = "time", r[r.select = 5] = "select", r[r.plural = 6] = "plural", r[r.pound = 7] = "pound", r[r.tag = 8] = "tag";
})(Ce || (Ce = {}));
var hn;
(function(r) {
  r[r.number = 0] = "number", r[r.dateTime = 1] = "dateTime";
})(hn || (hn = {}));
function _1(r) {
  return r.type === Ce.literal;
}
function y6(r) {
  return r.type === Ce.argument;
}
function Jh(r) {
  return r.type === Ce.number;
}
function Kh(r) {
  return r.type === Ce.date;
}
function ef(r) {
  return r.type === Ce.time;
}
function tf(r) {
  return r.type === Ce.select;
}
function rf(r) {
  return r.type === Ce.plural;
}
function w6(r) {
  return r.type === Ce.pound;
}
function nf(r) {
  return r.type === Ce.tag;
}
function af(r) {
  return !!(r && typeof r == "object" && r.type === hn.number);
}
function ns(r) {
  return !!(r && typeof r == "object" && r.type === hn.dateTime);
}
var lf = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, k6 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function D6(r) {
  var e = {};
  return r.replace(k6, function(t) {
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
var E6 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function A6(r) {
  if (r.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = r.split(E6).filter(function(g) {
    return g.length > 0;
  }), t = [], n = 0, a = e; n < a.length; n++) {
    var i = a[n], l = i.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = l[0], o = l.slice(1), u = 0, c = o; u < c.length; u++) {
      var m = c[u];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    t.push({ stem: s, options: o });
  }
  return t;
}
function x6(r) {
  return r.replace(/^(.*?)-/, "");
}
var y1 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, sf = /^(@+)?(\+|#+)?[rs]?$/g, S6 = /(\*)(0+)|(#+)(0+)|(0+)/g, of = /^(0+)$/;
function w1(r) {
  var e = {};
  return r[r.length - 1] === "r" ? e.roundingPriority = "morePrecision" : r[r.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), r.replace(sf, function(t, n, a) {
    return typeof a != "string" ? (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length) : a === "+" ? e.minimumSignificantDigits = n.length : n[0] === "#" ? e.maximumSignificantDigits = n.length : (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length + (typeof a == "string" ? a.length : 0)), "";
  }), e;
}
function uf(r) {
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
function T6(r) {
  var e;
  if (r[0] === "E" && r[1] === "E" ? (e = {
    notation: "engineering"
  }, r = r.slice(2)) : r[0] === "E" && (e = {
    notation: "scientific"
  }, r = r.slice(1)), e) {
    var t = r.slice(0, 2);
    if (t === "+!" ? (e.signDisplay = "always", r = r.slice(2)) : t === "+?" && (e.signDisplay = "exceptZero", r = r.slice(2)), !of.test(r))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = r.length;
  }
  return e;
}
function k1(r) {
  var e = {}, t = uf(r);
  return t || e;
}
function F6(r) {
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
        e.style = "unit", e.unit = x6(a.options[0]);
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
        e = ve(ve(ve({}, e), { notation: "scientific" }), a.options.reduce(function(o, u) {
          return ve(ve({}, o), k1(u));
        }, {}));
        continue;
      case "engineering":
        e = ve(ve(ve({}, e), { notation: "engineering" }), a.options.reduce(function(o, u) {
          return ve(ve({}, o), k1(u));
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
        a.options[0].replace(S6, function(o, u, c, m, g, d) {
          if (u)
            e.minimumIntegerDigits = c.length;
          else {
            if (m && g)
              throw new Error("We currently do not support maximum integer digits");
            if (d)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (of.test(a.stem)) {
      e.minimumIntegerDigits = a.stem.length;
      continue;
    }
    if (y1.test(a.stem)) {
      if (a.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      a.stem.replace(y1, function(o, u, c, m, g, d) {
        return c === "*" ? e.minimumFractionDigits = u.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : g && d ? (e.minimumFractionDigits = g.length, e.maximumFractionDigits = g.length + d.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var i = a.options[0];
      i === "w" ? e = ve(ve({}, e), { trailingZeroDisplay: "stripIfInteger" }) : i && (e = ve(ve({}, e), w1(i)));
      continue;
    }
    if (sf.test(a.stem)) {
      e = ve(ve({}, e), w1(a.stem));
      continue;
    }
    var l = uf(a.stem);
    l && (e = ve(ve({}, e), l));
    var s = T6(a.stem);
    s && (e = ve(ve({}, e), s));
  }
  return e;
}
var Ra = {
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
function C6(r, e) {
  for (var t = "", n = 0; n < r.length; n++) {
    var a = r.charAt(n);
    if (a === "j") {
      for (var i = 0; n + 1 < r.length && r.charAt(n + 1) === a; )
        i++, n++;
      var l = 1 + (i & 1), s = i < 2 ? 1 : 3 + (i >> 1), o = "a", u = M6(e);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        t += o;
      for (; l-- > 0; )
        t = u + t;
    } else a === "J" ? t += "H" : t += a;
  }
  return t;
}
function M6(r) {
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
  var a = Ra[n || ""] || Ra[t || ""] || Ra["".concat(t, "-001")] || Ra["001"];
  return a[0];
}
var Fl, B6 = new RegExp("^".concat(lf.source, "*")), N6 = new RegExp("".concat(lf.source, "*$"));
function fe(r, e) {
  return { start: r, end: e };
}
var I6 = !!String.prototype.startsWith && "_a".startsWith("a", 1), z6 = !!String.fromCodePoint, L6 = !!Object.fromEntries, R6 = !!String.prototype.codePointAt, O6 = !!String.prototype.trimStart, H6 = !!String.prototype.trimEnd, P6 = !!Number.isSafeInteger, q6 = P6 ? Number.isSafeInteger : function(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r && Math.abs(r) <= 9007199254740991;
}, as = !0;
try {
  var U6 = hf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  as = ((Fl = U6.exec("a")) === null || Fl === void 0 ? void 0 : Fl[0]) === "a";
} catch {
  as = !1;
}
var D1 = I6 ? (
  // Native
  function(e, t, n) {
    return e.startsWith(t, n);
  }
) : (
  // For IE11
  function(e, t, n) {
    return e.slice(n, n + t.length) === t;
  }
), is = z6 ? String.fromCodePoint : (
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
), E1 = (
  // native
  L6 ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var t = {}, n = 0, a = e; n < a.length; n++) {
        var i = a[n], l = i[0], s = i[1];
        t[l] = s;
      }
      return t;
    }
  )
), cf = R6 ? (
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
), G6 = O6 ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(B6, "");
  }
), V6 = H6 ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(N6, "");
  }
);
function hf(r, e) {
  return new RegExp(r, e);
}
var ls;
if (as) {
  var A1 = hf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ls = function(e, t) {
    var n;
    A1.lastIndex = t;
    var a = A1.exec(e);
    return (n = a[1]) !== null && n !== void 0 ? n : "";
  };
} else
  ls = function(e, t) {
    for (var n = []; ; ) {
      var a = cf(e, t);
      if (a === void 0 || ff(a) || Y6(a))
        break;
      n.push(a), t += a >= 65536 ? 2 : 1;
    }
    return is.apply(void 0, n);
  };
var j6 = (
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
              type: Ce.pound,
              location: fe(s, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(he.UNMATCHED_CLOSING_TAG, fe(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && ss(this.peek() || 0)) {
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
            type: Ce.literal,
            value: "<".concat(a, "/>"),
            location: fe(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(e + 1, t, !0);
        if (i.err)
          return i;
        var l = i.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !ss(this.char()))
            return this.error(he.INVALID_TAG, fe(s, this.clonePosition()));
          var o = this.clonePosition(), u = this.parseTagName();
          return a !== u ? this.error(he.UNMATCHED_CLOSING_TAG, fe(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ce.tag,
              value: a,
              children: l,
              location: fe(n, this.clonePosition())
            },
            err: null
          } : this.error(he.INVALID_TAG, fe(s, this.clonePosition())));
        } else
          return this.error(he.UNCLOSED_TAG, fe(n, this.clonePosition()));
      } else
        return this.error(he.INVALID_TAG, fe(n, this.clonePosition()));
    }, r.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && X6(this.char()); )
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
      var o = fe(n, this.clonePosition());
      return {
        val: { type: Ce.literal, value: a, location: o },
        err: null
      };
    }, r.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !W6(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return is.apply(void 0, t);
    }, r.prototype.tryParseUnquoted = function(e, t) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), is(n));
    }, r.prototype.parseArgument = function(e, t) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE, fe(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(he.EMPTY_ARGUMENT, fe(n, this.clonePosition()));
      var a = this.parseIdentifierIfPossible().value;
      if (!a)
        return this.error(he.MALFORMED_ARGUMENT, fe(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE, fe(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ce.argument,
              // value does not include the opening and closing braces.
              value: a,
              location: fe(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE, fe(n, this.clonePosition())) : this.parseArgumentOptions(e, t, a, n);
        default:
          return this.error(he.MALFORMED_ARGUMENT, fe(n, this.clonePosition()));
      }
    }, r.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), t = this.offset(), n = ls(this.message, t), a = t + n.length;
      this.bumpTo(a);
      var i = this.clonePosition(), l = fe(e, i);
      return { value: n, location: l };
    }, r.prototype.parseArgumentOptions = function(e, t, n, a) {
      var i, l = this.clonePosition(), s = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (s) {
        case "":
          return this.error(he.EXPECT_ARGUMENT_TYPE, fe(l, o));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var g = V6(m.val);
            if (g.length === 0)
              return this.error(he.EXPECT_ARGUMENT_STYLE, fe(this.clonePosition(), this.clonePosition()));
            var d = fe(c, this.clonePosition());
            u = { style: g, styleLocation: d };
          }
          var _ = this.tryParseArgumentClose(a);
          if (_.err)
            return _;
          var y = fe(a, this.clonePosition());
          if (u && D1(u == null ? void 0 : u.style, "::", 0)) {
            var E = G6(u.style.slice(2));
            if (s === "number") {
              var m = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return m.err ? m : {
                val: { type: Ce.number, value: n, location: y, style: m.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(he.EXPECT_DATE_TIME_SKELETON, y);
              var A = E;
              this.locale && (A = C6(E, this.locale));
              var g = {
                type: hn.dateTime,
                pattern: A,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? D6(A) : {}
              }, w = s === "date" ? Ce.date : Ce.time;
              return {
                val: { type: w, value: n, location: y, style: g },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? Ce.number : s === "date" ? Ce.date : Ce.time,
              value: n,
              location: y,
              style: (i = u == null ? void 0 : u.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(he.EXPECT_SELECT_ARGUMENT_OPTIONS, fe(v, ve({}, v)));
          this.bumpSpace();
          var x = this.parseIdentifierIfPossible(), C = 0;
          if (s !== "select" && x.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(he.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, fe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(he.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, he.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), x = this.parseIdentifierIfPossible(), C = m.val;
          }
          var N = this.tryParsePluralOrSelectOptions(e, s, t, x);
          if (N.err)
            return N;
          var _ = this.tryParseArgumentClose(a);
          if (_.err)
            return _;
          var S = fe(a, this.clonePosition());
          return s === "select" ? {
            val: {
              type: Ce.select,
              value: n,
              options: E1(N.val),
              location: S
            },
            err: null
          } : {
            val: {
              type: Ce.plural,
              value: n,
              options: E1(N.val),
              offset: C,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: S
            },
            err: null
          };
        }
        default:
          return this.error(he.INVALID_ARGUMENT_TYPE, fe(l, o));
      }
    }, r.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE, fe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, r.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var a = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(he.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, fe(a, this.clonePosition()));
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
        n = A6(e);
      } catch {
        return this.error(he.INVALID_NUMBER_SKELETON, t);
      }
      return {
        val: {
          type: hn.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? F6(n) : {}
        },
        err: null
      };
    }, r.prototype.tryParsePluralOrSelectOptions = function(e, t, n, a) {
      for (var i, l = !1, s = [], o = /* @__PURE__ */ new Set(), u = a.value, c = a.location; ; ) {
        if (u.length === 0) {
          var m = this.clonePosition();
          if (t !== "select" && this.bumpIf("=")) {
            var g = this.tryParseDecimalInteger(he.EXPECT_PLURAL_ARGUMENT_SELECTOR, he.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (g.err)
              return g;
            c = fe(m, this.clonePosition()), u = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (o.has(u))
          return this.error(t === "select" ? he.DUPLICATE_SELECT_ARGUMENT_SELECTOR : he.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (l = !0), this.bumpSpace();
        var d = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(t === "select" ? he.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : he.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, fe(this.clonePosition(), this.clonePosition()));
        var _ = this.parseMessage(e + 1, t, n);
        if (_.err)
          return _;
        var y = this.tryParseArgumentClose(d);
        if (y.err)
          return y;
        s.push([
          u,
          {
            value: _.val,
            location: fe(d, this.clonePosition())
          }
        ]), o.add(u), this.bumpSpace(), i = this.parseIdentifierIfPossible(), u = i.value, c = i.location;
      }
      return s.length === 0 ? this.error(t === "select" ? he.EXPECT_SELECT_ARGUMENT_SELECTOR : he.EXPECT_PLURAL_ARGUMENT_SELECTOR, fe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(he.MISSING_OTHER_CLAUSE, fe(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
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
      var o = fe(a, this.clonePosition());
      return i ? (l *= n, q6(l) ? { val: l, err: null } : this.error(t, o)) : this.error(e, o);
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
      var t = cf(this.message, e);
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
      if (D1(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && ff(this.char()); )
        this.bump();
    }, r.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), t = this.offset(), n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
      return n ?? null;
    }, r;
  }()
);
function ss(r) {
  return r >= 97 && r <= 122 || r >= 65 && r <= 90;
}
function W6(r) {
  return ss(r) || r === 47;
}
function X6(r) {
  return r === 45 || r === 46 || r >= 48 && r <= 57 || r === 95 || r >= 97 && r <= 122 || r >= 65 && r <= 90 || r == 183 || r >= 192 && r <= 214 || r >= 216 && r <= 246 || r >= 248 && r <= 893 || r >= 895 && r <= 8191 || r >= 8204 && r <= 8205 || r >= 8255 && r <= 8256 || r >= 8304 && r <= 8591 || r >= 11264 && r <= 12271 || r >= 12289 && r <= 55295 || r >= 63744 && r <= 64975 || r >= 65008 && r <= 65533 || r >= 65536 && r <= 983039;
}
function ff(r) {
  return r >= 9 && r <= 13 || r === 32 || r === 133 || r >= 8206 && r <= 8207 || r === 8232 || r === 8233;
}
function Y6(r) {
  return r >= 33 && r <= 35 || r === 36 || r >= 37 && r <= 39 || r === 40 || r === 41 || r === 42 || r === 43 || r === 44 || r === 45 || r >= 46 && r <= 47 || r >= 58 && r <= 59 || r >= 60 && r <= 62 || r >= 63 && r <= 64 || r === 91 || r === 92 || r === 93 || r === 94 || r === 96 || r === 123 || r === 124 || r === 125 || r === 126 || r === 161 || r >= 162 && r <= 165 || r === 166 || r === 167 || r === 169 || r === 171 || r === 172 || r === 174 || r === 176 || r === 177 || r === 182 || r === 187 || r === 191 || r === 215 || r === 247 || r >= 8208 && r <= 8213 || r >= 8214 && r <= 8215 || r === 8216 || r === 8217 || r === 8218 || r >= 8219 && r <= 8220 || r === 8221 || r === 8222 || r === 8223 || r >= 8224 && r <= 8231 || r >= 8240 && r <= 8248 || r === 8249 || r === 8250 || r >= 8251 && r <= 8254 || r >= 8257 && r <= 8259 || r === 8260 || r === 8261 || r === 8262 || r >= 8263 && r <= 8273 || r === 8274 || r === 8275 || r >= 8277 && r <= 8286 || r >= 8592 && r <= 8596 || r >= 8597 && r <= 8601 || r >= 8602 && r <= 8603 || r >= 8604 && r <= 8607 || r === 8608 || r >= 8609 && r <= 8610 || r === 8611 || r >= 8612 && r <= 8613 || r === 8614 || r >= 8615 && r <= 8621 || r === 8622 || r >= 8623 && r <= 8653 || r >= 8654 && r <= 8655 || r >= 8656 && r <= 8657 || r === 8658 || r === 8659 || r === 8660 || r >= 8661 && r <= 8691 || r >= 8692 && r <= 8959 || r >= 8960 && r <= 8967 || r === 8968 || r === 8969 || r === 8970 || r === 8971 || r >= 8972 && r <= 8991 || r >= 8992 && r <= 8993 || r >= 8994 && r <= 9e3 || r === 9001 || r === 9002 || r >= 9003 && r <= 9083 || r === 9084 || r >= 9085 && r <= 9114 || r >= 9115 && r <= 9139 || r >= 9140 && r <= 9179 || r >= 9180 && r <= 9185 || r >= 9186 && r <= 9254 || r >= 9255 && r <= 9279 || r >= 9280 && r <= 9290 || r >= 9291 && r <= 9311 || r >= 9472 && r <= 9654 || r === 9655 || r >= 9656 && r <= 9664 || r === 9665 || r >= 9666 && r <= 9719 || r >= 9720 && r <= 9727 || r >= 9728 && r <= 9838 || r === 9839 || r >= 9840 && r <= 10087 || r === 10088 || r === 10089 || r === 10090 || r === 10091 || r === 10092 || r === 10093 || r === 10094 || r === 10095 || r === 10096 || r === 10097 || r === 10098 || r === 10099 || r === 10100 || r === 10101 || r >= 10132 && r <= 10175 || r >= 10176 && r <= 10180 || r === 10181 || r === 10182 || r >= 10183 && r <= 10213 || r === 10214 || r === 10215 || r === 10216 || r === 10217 || r === 10218 || r === 10219 || r === 10220 || r === 10221 || r === 10222 || r === 10223 || r >= 10224 && r <= 10239 || r >= 10240 && r <= 10495 || r >= 10496 && r <= 10626 || r === 10627 || r === 10628 || r === 10629 || r === 10630 || r === 10631 || r === 10632 || r === 10633 || r === 10634 || r === 10635 || r === 10636 || r === 10637 || r === 10638 || r === 10639 || r === 10640 || r === 10641 || r === 10642 || r === 10643 || r === 10644 || r === 10645 || r === 10646 || r === 10647 || r === 10648 || r >= 10649 && r <= 10711 || r === 10712 || r === 10713 || r === 10714 || r === 10715 || r >= 10716 && r <= 10747 || r === 10748 || r === 10749 || r >= 10750 && r <= 11007 || r >= 11008 && r <= 11055 || r >= 11056 && r <= 11076 || r >= 11077 && r <= 11078 || r >= 11079 && r <= 11084 || r >= 11085 && r <= 11123 || r >= 11124 && r <= 11125 || r >= 11126 && r <= 11157 || r === 11158 || r >= 11159 && r <= 11263 || r >= 11776 && r <= 11777 || r === 11778 || r === 11779 || r === 11780 || r === 11781 || r >= 11782 && r <= 11784 || r === 11785 || r === 11786 || r === 11787 || r === 11788 || r === 11789 || r >= 11790 && r <= 11798 || r === 11799 || r >= 11800 && r <= 11801 || r === 11802 || r === 11803 || r === 11804 || r === 11805 || r >= 11806 && r <= 11807 || r === 11808 || r === 11809 || r === 11810 || r === 11811 || r === 11812 || r === 11813 || r === 11814 || r === 11815 || r === 11816 || r === 11817 || r >= 11818 && r <= 11822 || r === 11823 || r >= 11824 && r <= 11833 || r >= 11834 && r <= 11835 || r >= 11836 && r <= 11839 || r === 11840 || r === 11841 || r === 11842 || r >= 11843 && r <= 11855 || r >= 11856 && r <= 11857 || r === 11858 || r >= 11859 && r <= 11903 || r >= 12289 && r <= 12291 || r === 12296 || r === 12297 || r === 12298 || r === 12299 || r === 12300 || r === 12301 || r === 12302 || r === 12303 || r === 12304 || r === 12305 || r >= 12306 && r <= 12307 || r === 12308 || r === 12309 || r === 12310 || r === 12311 || r === 12312 || r === 12313 || r === 12314 || r === 12315 || r === 12316 || r === 12317 || r >= 12318 && r <= 12319 || r === 12320 || r === 12336 || r === 64830 || r === 64831 || r >= 65093 && r <= 65094;
}
function os(r) {
  r.forEach(function(e) {
    if (delete e.location, tf(e) || rf(e))
      for (var t in e.options)
        delete e.options[t].location, os(e.options[t].value);
    else Jh(e) && af(e.style) || (Kh(e) || ef(e)) && ns(e.style) ? delete e.style.location : nf(e) && os(e.children);
  });
}
function Z6(r, e) {
  e === void 0 && (e = {}), e = ve({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var t = new j6(r, e).parse();
  if (t.err) {
    var n = SyntaxError(he[t.err.kind]);
    throw n.location = t.err.location, n.originalMessage = t.err.message, n;
  }
  return e != null && e.captureLocation || os(t.val), t.val;
}
var fn;
(function(r) {
  r.MISSING_VALUE = "MISSING_VALUE", r.INVALID_VALUE = "INVALID_VALUE", r.MISSING_INTL_API = "MISSING_INTL_API";
})(fn || (fn = {}));
var zi = (
  /** @class */
  function(r) {
    Ii(e, r);
    function e(t, n, a) {
      var i = r.call(this, t) || this;
      return i.code = n, i.originalMessage = a, i;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), x1 = (
  /** @class */
  function(r) {
    Ii(e, r);
    function e(t, n, a, i) {
      return r.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(a).join('", "'), '"'), fn.INVALID_VALUE, i) || this;
    }
    return e;
  }(zi)
), $6 = (
  /** @class */
  function(r) {
    Ii(e, r);
    function e(t, n, a) {
      return r.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), fn.INVALID_VALUE, a) || this;
    }
    return e;
  }(zi)
), Q6 = (
  /** @class */
  function(r) {
    Ii(e, r);
    function e(t, n) {
      return r.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), fn.MISSING_VALUE, n) || this;
    }
    return e;
  }(zi)
), _t;
(function(r) {
  r[r.literal = 0] = "literal", r[r.object = 1] = "object";
})(_t || (_t = {}));
function J6(r) {
  return r.length < 2 ? r : r.reduce(function(e, t) {
    var n = e[e.length - 1];
    return !n || n.type !== _t.literal || t.type !== _t.literal ? e.push(t) : n.value += t.value, e;
  }, []);
}
function K6(r) {
  return typeof r == "function";
}
function Za(r, e, t, n, a, i, l) {
  if (r.length === 1 && _1(r[0]))
    return [
      {
        type: _t.literal,
        value: r[0].value
      }
    ];
  for (var s = [], o = 0, u = r; o < u.length; o++) {
    var c = u[o];
    if (_1(c)) {
      s.push({
        type: _t.literal,
        value: c.value
      });
      continue;
    }
    if (w6(c)) {
      typeof i == "number" && s.push({
        type: _t.literal,
        value: t.getNumberFormat(e).format(i)
      });
      continue;
    }
    var m = c.value;
    if (!(a && m in a))
      throw new Q6(m, l);
    var g = a[m];
    if (y6(c)) {
      (!g || typeof g == "string" || typeof g == "number") && (g = typeof g == "string" || typeof g == "number" ? String(g) : ""), s.push({
        type: typeof g == "string" ? _t.literal : _t.object,
        value: g
      });
      continue;
    }
    if (Kh(c)) {
      var d = typeof c.style == "string" ? n.date[c.style] : ns(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: _t.literal,
        value: t.getDateTimeFormat(e, d).format(g)
      });
      continue;
    }
    if (ef(c)) {
      var d = typeof c.style == "string" ? n.time[c.style] : ns(c.style) ? c.style.parsedOptions : n.time.medium;
      s.push({
        type: _t.literal,
        value: t.getDateTimeFormat(e, d).format(g)
      });
      continue;
    }
    if (Jh(c)) {
      var d = typeof c.style == "string" ? n.number[c.style] : af(c.style) ? c.style.parsedOptions : void 0;
      d && d.scale && (g = g * (d.scale || 1)), s.push({
        type: _t.literal,
        value: t.getNumberFormat(e, d).format(g)
      });
      continue;
    }
    if (nf(c)) {
      var _ = c.children, y = c.value, E = a[y];
      if (!K6(E))
        throw new $6(y, "function", l);
      var A = Za(_, e, t, n, a, i), w = E(A.map(function(C) {
        return C.value;
      }));
      Array.isArray(w) || (w = [w]), s.push.apply(s, w.map(function(C) {
        return {
          type: typeof C == "string" ? _t.literal : _t.object,
          value: C
        };
      }));
    }
    if (tf(c)) {
      var v = c.options[g] || c.options.other;
      if (!v)
        throw new x1(c.value, g, Object.keys(c.options), l);
      s.push.apply(s, Za(v.value, e, t, n, a));
      continue;
    }
    if (rf(c)) {
      var v = c.options["=".concat(g)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new zi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, fn.MISSING_INTL_API, l);
        var x = t.getPluralRules(e, { type: c.pluralType }).select(g - (c.offset || 0));
        v = c.options[x] || c.options.other;
      }
      if (!v)
        throw new x1(c.value, g, Object.keys(c.options), l);
      s.push.apply(s, Za(v.value, e, t, n, a, g - (c.offset || 0)));
      continue;
    }
  }
  return J6(s);
}
function ep(r, e) {
  return e ? ve(ve(ve({}, r || {}), e || {}), Object.keys(r).reduce(function(t, n) {
    return t[n] = ve(ve({}, r[n]), e[n] || {}), t;
  }, {})) : r;
}
function tp(r, e) {
  return e ? Object.keys(r).reduce(function(t, n) {
    return t[n] = ep(r[n], e[n]), t;
  }, ve({}, r)) : r;
}
function Cl(r) {
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
function rp(r) {
  return r === void 0 && (r = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Sl(function() {
      for (var e, t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return new ((e = Intl.NumberFormat).bind.apply(e, xl([void 0], t, !1)))();
    }, {
      cache: Cl(r.number),
      strategy: Tl.variadic
    }),
    getDateTimeFormat: Sl(function() {
      for (var e, t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, xl([void 0], t, !1)))();
    }, {
      cache: Cl(r.dateTime),
      strategy: Tl.variadic
    }),
    getPluralRules: Sl(function() {
      for (var e, t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return new ((e = Intl.PluralRules).bind.apply(e, xl([void 0], t, !1)))();
    }, {
      cache: Cl(r.pluralRules),
      strategy: Tl.variadic
    })
  };
}
var np = (
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
        var c = u.reduce(function(m, g) {
          return !m.length || g.type !== _t.literal || typeof m[m.length - 1] != "string" ? m.push(g.value) : m[m.length - 1] += g.value, m;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(o) {
        return Za(i.ast, i.locales, i.formatters, i.formats, o, void 0, i.message);
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
        var s = m6(l, ["formatters"]);
        this.ast = r.__parse(e, ve(ve({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = tp(r.formats, n), this.formatters = a && a.formatters || rp(this.formatterCache);
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
    }, r.__parse = Z6, r.formats = {
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
function ap(r, e) {
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
const Q0 = {}, ip = (r, e, t) => t && (e in Q0 || (Q0[e] = {}), r in Q0[e] || (Q0[e][r] = t), t), mf = (r, e) => {
  if (e == null)
    return;
  if (e in Q0 && r in Q0[e])
    return Q0[e][r];
  const t = Li(e);
  for (let n = 0; n < t.length; n++) {
    const a = t[n], i = sp(a, r);
    if (i)
      return ip(r, e, i);
  }
};
let io;
const oa = sa({});
function lp(r) {
  return io[r] || null;
}
function df(r) {
  return r in io;
}
function sp(r, e) {
  if (!df(r))
    return null;
  const t = lp(r);
  return ap(t, e);
}
function op(r) {
  if (r == null)
    return;
  const e = Li(r);
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (df(n))
      return n;
  }
}
function up(r, ...e) {
  delete Q0[r], oa.update((t) => (t[r] = f6.all([t[r] || {}, ...e]), t));
}
vn(
  [oa],
  ([r]) => Object.keys(r)
);
oa.subscribe((r) => io = r);
const $a = {};
function cp(r, e) {
  $a[r].delete(e), $a[r].size === 0 && delete $a[r];
}
function pf(r) {
  return $a[r];
}
function hp(r) {
  return Li(r).map((e) => {
    const t = pf(e);
    return [e, t ? [...t] : []];
  }).filter(([, e]) => e.length > 0);
}
function us(r) {
  return r == null ? !1 : Li(r).some(
    (e) => {
      var t;
      return (t = pf(e)) == null ? void 0 : t.size;
    }
  );
}
function fp(r, e) {
  return Promise.all(
    e.map((n) => (cp(r, n), n().then((a) => a.default || a)))
  ).then((n) => up(r, ...n));
}
const Sn = {};
function gf(r) {
  if (!us(r))
    return r in Sn ? Sn[r] : Promise.resolve();
  const e = hp(r);
  return Sn[r] = Promise.all(
    e.map(
      ([t, n]) => fp(t, n)
    )
  ).then(() => {
    if (us(r))
      return gf(r);
    delete Sn[r];
  }), Sn[r];
}
const mp = {
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
}, dp = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: mp,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, pp = dp;
function mn() {
  return pp;
}
const Ml = sa(!1);
var gp = Object.defineProperty, bp = Object.defineProperties, vp = Object.getOwnPropertyDescriptors, S1 = Object.getOwnPropertySymbols, _p = Object.prototype.hasOwnProperty, yp = Object.prototype.propertyIsEnumerable, T1 = (r, e, t) => e in r ? gp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, wp = (r, e) => {
  for (var t in e || (e = {}))
    _p.call(e, t) && T1(r, t, e[t]);
  if (S1)
    for (var t of S1(e))
      yp.call(e, t) && T1(r, t, e[t]);
  return r;
}, kp = (r, e) => bp(r, vp(e));
let cs;
const gi = sa(null);
function F1(r) {
  return r.split("-").map((e, t, n) => n.slice(0, t + 1).join("-")).reverse();
}
function Li(r, e = mn().fallbackLocale) {
  const t = F1(r);
  return e ? [.../* @__PURE__ */ new Set([...t, ...F1(e)])] : t;
}
function qr() {
  return cs ?? void 0;
}
gi.subscribe((r) => {
  cs = r ?? void 0, typeof window < "u" && r != null && document.documentElement.setAttribute("lang", r);
});
const Dp = (r) => {
  if (r && op(r) && us(r)) {
    const { loadingDelay: e } = mn();
    let t;
    return typeof window < "u" && qr() != null && e ? t = window.setTimeout(
      () => Ml.set(!0),
      e
    ) : Ml.set(!0), gf(r).then(() => {
      gi.set(r);
    }).finally(() => {
      clearTimeout(t), Ml.set(!1);
    });
  }
  return gi.set(r);
}, ua = kp(wp({}, gi), {
  set: Dp
}), Ri = (r) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const a = JSON.stringify(n);
    return a in e ? e[a] : e[a] = r(n);
  };
};
var Ep = Object.defineProperty, bi = Object.getOwnPropertySymbols, bf = Object.prototype.hasOwnProperty, vf = Object.prototype.propertyIsEnumerable, C1 = (r, e, t) => e in r ? Ep(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, lo = (r, e) => {
  for (var t in e || (e = {}))
    bf.call(e, t) && C1(r, t, e[t]);
  if (bi)
    for (var t of bi(e))
      vf.call(e, t) && C1(r, t, e[t]);
  return r;
}, _n = (r, e) => {
  var t = {};
  for (var n in r)
    bf.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && bi)
    for (var n of bi(r))
      e.indexOf(n) < 0 && vf.call(r, n) && (t[n] = r[n]);
  return t;
};
const Jn = (r, e) => {
  const { formats: t } = mn();
  if (r in t && e in t[r])
    return t[r][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${r} format.`);
}, Ap = Ri(
  (r) => {
    var e = r, { locale: t, format: n } = e, a = _n(e, ["locale", "format"]);
    if (t == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (a = Jn("number", n)), new Intl.NumberFormat(t, a);
  }
), xp = Ri(
  (r) => {
    var e = r, { locale: t, format: n } = e, a = _n(e, ["locale", "format"]);
    if (t == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? a = Jn("date", n) : Object.keys(a).length === 0 && (a = Jn("date", "short")), new Intl.DateTimeFormat(t, a);
  }
), Sp = Ri(
  (r) => {
    var e = r, { locale: t, format: n } = e, a = _n(e, ["locale", "format"]);
    if (t == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? a = Jn("time", n) : Object.keys(a).length === 0 && (a = Jn("time", "short")), new Intl.DateTimeFormat(t, a);
  }
), Tp = (r = {}) => {
  var e = r, {
    locale: t = qr()
  } = e, n = _n(e, [
    "locale"
  ]);
  return Ap(lo({ locale: t }, n));
}, Fp = (r = {}) => {
  var e = r, {
    locale: t = qr()
  } = e, n = _n(e, [
    "locale"
  ]);
  return xp(lo({ locale: t }, n));
}, Cp = (r = {}) => {
  var e = r, {
    locale: t = qr()
  } = e, n = _n(e, [
    "locale"
  ]);
  return Sp(lo({ locale: t }, n));
}, Mp = Ri(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (r, e = qr()) => new np(r, e, mn().formats, {
    ignoreTag: mn().ignoreTag
  })
), Bp = (r, e = {}) => {
  var t, n, a, i;
  let l = e;
  typeof r == "object" && (l = r, r = l.id);
  const {
    values: s,
    locale: o = qr(),
    default: u
  } = l;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = mf(r, o);
  if (!c)
    c = (i = (a = (n = (t = mn()).handleMissingMessage) == null ? void 0 : n.call(t, { locale: o, id: r, defaultValue: u })) != null ? a : u) != null ? i : r;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${r}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!s)
    return c;
  let m = c;
  try {
    m = Mp(c, o).format(s);
  } catch (g) {
    g instanceof Error && console.warn(
      `[svelte-i18n] Message "${r}" has syntax error:`,
      g.message
    );
  }
  return m;
}, Np = (r, e) => Cp(e).format(r), Ip = (r, e) => Fp(e).format(r), zp = (r, e) => Tp(e).format(r), Lp = (r, e = qr()) => mf(r, e);
vn([ua, oa], () => Bp);
vn([ua], () => Np);
vn([ua], () => Ip);
vn([ua], () => zp);
vn([ua, oa], () => Lp);
const {
  SvelteComponent: Rp,
  append_hydration: Tt,
  attr: hr,
  children: fr,
  claim_element: mr,
  claim_space: hs,
  claim_text: Kr,
  detach: F0,
  element: dr,
  init: Op,
  insert_hydration: _f,
  noop: M1,
  safe_not_equal: Hp,
  set_data: vi,
  set_style: Bl,
  space: fs,
  text: en,
  toggle_class: B1
} = window.__gradio__svelte__internal, { onMount: Pp, createEventDispatcher: qp, onDestroy: Up } = window.__gradio__svelte__internal;
function N1(r) {
  let e, t, n, a, i = zn(
    /*file_to_display*/
    r[2]
  ) + "", l, s, o, u, c = (
    /*file_to_display*/
    r[2].orig_name + ""
  ), m;
  return {
    c() {
      e = dr("div"), t = dr("span"), n = dr("div"), a = dr("progress"), l = en(i), o = fs(), u = dr("span"), m = en(c), this.h();
    },
    l(g) {
      e = mr(g, "DIV", { class: !0 });
      var d = fr(e);
      t = mr(d, "SPAN", {});
      var _ = fr(t);
      n = mr(_, "DIV", { class: !0 });
      var y = fr(n);
      a = mr(y, "PROGRESS", { style: !0, max: !0, class: !0 });
      var E = fr(a);
      l = Kr(E, i), E.forEach(F0), y.forEach(F0), _.forEach(F0), o = hs(d), u = mr(d, "SPAN", { class: !0 });
      var A = fr(u);
      m = Kr(A, c), A.forEach(F0), d.forEach(F0), this.h();
    },
    h() {
      Bl(a, "visibility", "hidden"), Bl(a, "height", "0"), Bl(a, "width", "0"), a.value = s = zn(
        /*file_to_display*/
        r[2]
      ), hr(a, "max", "100"), hr(a, "class", "svelte-cr2edf"), hr(n, "class", "progress-bar svelte-cr2edf"), hr(u, "class", "file-name svelte-cr2edf"), hr(e, "class", "file svelte-cr2edf");
    },
    m(g, d) {
      _f(g, e, d), Tt(e, t), Tt(t, n), Tt(n, a), Tt(a, l), Tt(e, o), Tt(e, u), Tt(u, m);
    },
    p(g, d) {
      d & /*file_to_display*/
      4 && i !== (i = zn(
        /*file_to_display*/
        g[2]
      ) + "") && vi(l, i), d & /*file_to_display*/
      4 && s !== (s = zn(
        /*file_to_display*/
        g[2]
      )) && (a.value = s), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      g[2].orig_name + "") && vi(m, c);
    },
    d(g) {
      g && F0(e);
    }
  };
}
function Gp(r) {
  let e, t, n, a = (
    /*files_with_progress*/
    r[0].length + ""
  ), i, l, s = (
    /*files_with_progress*/
    r[0].length > 1 ? "files" : "file"
  ), o, u, c, m = (
    /*file_to_display*/
    r[2] && N1(r)
  );
  return {
    c() {
      e = dr("div"), t = dr("span"), n = en("Uploading "), i = en(a), l = fs(), o = en(s), u = en("..."), c = fs(), m && m.c(), this.h();
    },
    l(g) {
      e = mr(g, "DIV", { class: !0 });
      var d = fr(e);
      t = mr(d, "SPAN", { class: !0 });
      var _ = fr(t);
      n = Kr(_, "Uploading "), i = Kr(_, a), l = hs(_), o = Kr(_, s), u = Kr(_, "..."), _.forEach(F0), c = hs(d), m && m.l(d), d.forEach(F0), this.h();
    },
    h() {
      hr(t, "class", "uploading svelte-cr2edf"), hr(e, "class", "wrap svelte-cr2edf"), B1(
        e,
        "progress",
        /*progress*/
        r[1]
      );
    },
    m(g, d) {
      _f(g, e, d), Tt(e, t), Tt(t, n), Tt(t, i), Tt(t, l), Tt(t, o), Tt(t, u), Tt(e, c), m && m.m(e, null);
    },
    p(g, [d]) {
      d & /*files_with_progress*/
      1 && a !== (a = /*files_with_progress*/
      g[0].length + "") && vi(i, a), d & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      g[0].length > 1 ? "files" : "file") && vi(o, s), /*file_to_display*/
      g[2] ? m ? m.p(g, d) : (m = N1(g), m.c(), m.m(e, null)) : m && (m.d(1), m = null), d & /*progress*/
      2 && B1(
        e,
        "progress",
        /*progress*/
        g[1]
      );
    },
    i: M1,
    o: M1,
    d(g) {
      g && F0(e), m && m.d();
    }
  };
}
function zn(r) {
  return r.progress * 100 / (r.size || 0) || 0;
}
function Vp(r) {
  let e = 0;
  return r.forEach((t) => {
    e += zn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / r.length).toFixed(2) + "%"), e / r.length;
}
function jp(r, e, t) {
  let { upload_id: n } = e, { root: a } = e, { files: i } = e, { stream_handler: l } = e, s, o = !1, u, c, m = i.map((_) => Object.assign(Object.assign({}, _), { progress: 0 }));
  const g = qp();
  function d(_, y) {
    t(0, m = m.map((E) => (E.orig_name === _ && (E.progress += y), E)));
  }
  return Pp(async () => {
    if (s = await l(new URL(`${a}/gradio_api/upload_progress?upload_id=${n}`)), s == null)
      throw new Error("Event source is not defined");
    s.onmessage = async function(_) {
      const y = JSON.parse(_.data);
      o || t(1, o = !0), y.msg === "done" ? (s == null || s.close(), g("done")) : (t(7, u = y), d(y.orig_name, y.chunk_size));
    };
  }), Up(() => {
    (s != null || s != null) && s.close();
  }), r.$$set = (_) => {
    "upload_id" in _ && t(3, n = _.upload_id), "root" in _ && t(4, a = _.root), "files" in _ && t(5, i = _.files), "stream_handler" in _ && t(6, l = _.stream_handler);
  }, r.$$.update = () => {
    r.$$.dirty & /*files_with_progress*/
    1 && Vp(m), r.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, c = u || m[0]);
  }, [
    m,
    o,
    c,
    n,
    a,
    i,
    l,
    u
  ];
}
class Wp extends Rp {
  constructor(e) {
    super(), Op(this, e, jp, Gp, Hp, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Xp,
  append_hydration: I1,
  attr: dt,
  binding_callbacks: Yp,
  bubble: sr,
  check_outros: yf,
  children: wf,
  claim_component: Zp,
  claim_element: ms,
  claim_space: $p,
  create_component: Qp,
  create_slot: kf,
  destroy_component: Jp,
  detach: dn,
  element: ds,
  empty: _i,
  get_all_dirty_from_scope: Df,
  get_slot_changes: Ef,
  group_outros: Af,
  init: Kp,
  insert_hydration: Oi,
  listen: Ct,
  mount_component: e8,
  prevent_default: or,
  run_all: t8,
  safe_not_equal: r8,
  set_style: yi,
  space: n8,
  stop_propagation: ur,
  toggle_class: Oe,
  transition_in: K0,
  transition_out: Fr,
  update_slot_base: xf
} = window.__gradio__svelte__internal, { createEventDispatcher: a8, tick: i8, getContext: Jg } = window.__gradio__svelte__internal;
function l8(r) {
  let e, t, n, a, i, l, s, o, u, c, m;
  const g = (
    /*#slots*/
    r[28].default
  ), d = kf(
    g,
    r,
    /*$$scope*/
    r[27],
    null
  );
  return {
    c() {
      e = ds("button"), d && d.c(), t = n8(), n = ds("input"), this.h();
    },
    l(_) {
      e = ms(_, "BUTTON", { tabindex: !0, class: !0 });
      var y = wf(e);
      d && d.l(y), t = $p(y), n = ms(y, "INPUT", {
        "aria-label": !0,
        "data-testid": !0,
        type: !0,
        accept: !0,
        webkitdirectory: !0,
        mozdirectory: !0,
        class: !0
      }), y.forEach(dn), this.h();
    },
    h() {
      dt(n, "aria-label", "file upload"), dt(n, "data-testid", "file-upload"), dt(n, "type", "file"), dt(n, "accept", a = /*accept_file_types*/
      r[17] || void 0), n.multiple = i = /*file_count*/
      r[6] === "multiple" || void 0, dt(n, "webkitdirectory", l = /*file_count*/
      r[6] === "directory" || void 0), dt(n, "mozdirectory", s = /*file_count*/
      r[6] === "directory" || void 0), dt(n, "class", "svelte-160acj8"), dt(e, "tabindex", o = /*hidden*/
      r[9] ? -1 : 0), dt(e, "class", "svelte-160acj8"), Oe(
        e,
        "hidden",
        /*hidden*/
        r[9]
      ), Oe(
        e,
        "center",
        /*center*/
        r[4]
      ), Oe(
        e,
        "boundedheight",
        /*boundedheight*/
        r[3]
      ), Oe(
        e,
        "flex",
        /*flex*/
        r[5]
      ), Oe(
        e,
        "disable_click",
        /*disable_click*/
        r[7]
      ), Oe(
        e,
        "icon-mode",
        /*icon_upload*/
        r[12]
      ), yi(
        e,
        "height",
        /*icon_upload*/
        r[12] ? "" : "100%"
      );
    },
    m(_, y) {
      Oi(_, e, y), d && d.m(e, null), I1(e, t), I1(e, n), r[36](n), u = !0, c || (m = [
        Ct(
          n,
          "change",
          /*load_files_from_upload*/
          r[19]
        ),
        Ct(e, "drag", ur(or(
          /*drag_handler*/
          r[29]
        ))),
        Ct(e, "dragstart", ur(or(
          /*dragstart_handler*/
          r[30]
        ))),
        Ct(e, "dragend", ur(or(
          /*dragend_handler*/
          r[31]
        ))),
        Ct(e, "dragover", ur(or(
          /*dragover_handler*/
          r[32]
        ))),
        Ct(e, "dragenter", ur(or(
          /*dragenter_handler*/
          r[33]
        ))),
        Ct(e, "dragleave", ur(or(
          /*dragleave_handler*/
          r[34]
        ))),
        Ct(e, "drop", ur(or(
          /*drop_handler*/
          r[35]
        ))),
        Ct(
          e,
          "click",
          /*open_file_upload*/
          r[14]
        ),
        Ct(
          e,
          "drop",
          /*loadFilesFromDrop*/
          r[20]
        ),
        Ct(
          e,
          "dragenter",
          /*updateDragging*/
          r[18]
        ),
        Ct(
          e,
          "dragleave",
          /*updateDragging*/
          r[18]
        )
      ], c = !0);
    },
    p(_, y) {
      d && d.p && (!u || y[0] & /*$$scope*/
      134217728) && xf(
        d,
        g,
        _,
        /*$$scope*/
        _[27],
        u ? Ef(
          g,
          /*$$scope*/
          _[27],
          y,
          null
        ) : Df(
          /*$$scope*/
          _[27]
        ),
        null
      ), (!u || y[0] & /*accept_file_types*/
      131072 && a !== (a = /*accept_file_types*/
      _[17] || void 0)) && dt(n, "accept", a), (!u || y[0] & /*file_count*/
      64 && i !== (i = /*file_count*/
      _[6] === "multiple" || void 0)) && (n.multiple = i), (!u || y[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      _[6] === "directory" || void 0)) && dt(n, "webkitdirectory", l), (!u || y[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      _[6] === "directory" || void 0)) && dt(n, "mozdirectory", s), (!u || y[0] & /*hidden*/
      512 && o !== (o = /*hidden*/
      _[9] ? -1 : 0)) && dt(e, "tabindex", o), (!u || y[0] & /*hidden*/
      512) && Oe(
        e,
        "hidden",
        /*hidden*/
        _[9]
      ), (!u || y[0] & /*center*/
      16) && Oe(
        e,
        "center",
        /*center*/
        _[4]
      ), (!u || y[0] & /*boundedheight*/
      8) && Oe(
        e,
        "boundedheight",
        /*boundedheight*/
        _[3]
      ), (!u || y[0] & /*flex*/
      32) && Oe(
        e,
        "flex",
        /*flex*/
        _[5]
      ), (!u || y[0] & /*disable_click*/
      128) && Oe(
        e,
        "disable_click",
        /*disable_click*/
        _[7]
      ), (!u || y[0] & /*icon_upload*/
      4096) && Oe(
        e,
        "icon-mode",
        /*icon_upload*/
        _[12]
      ), y[0] & /*icon_upload*/
      4096 && yi(
        e,
        "height",
        /*icon_upload*/
        _[12] ? "" : "100%"
      );
    },
    i(_) {
      u || (K0(d, _), u = !0);
    },
    o(_) {
      Fr(d, _), u = !1;
    },
    d(_) {
      _ && dn(e), d && d.d(_), r[36](null), c = !1, t8(m);
    }
  };
}
function s8(r) {
  let e, t, n = !/*hidden*/
  r[9] && z1(r);
  return {
    c() {
      n && n.c(), e = _i();
    },
    l(a) {
      n && n.l(a), e = _i();
    },
    m(a, i) {
      n && n.m(a, i), Oi(a, e, i), t = !0;
    },
    p(a, i) {
      /*hidden*/
      a[9] ? n && (Af(), Fr(n, 1, 1, () => {
        n = null;
      }), yf()) : n ? (n.p(a, i), i[0] & /*hidden*/
      512 && K0(n, 1)) : (n = z1(a), n.c(), K0(n, 1), n.m(e.parentNode, e));
    },
    i(a) {
      t || (K0(n), t = !0);
    },
    o(a) {
      Fr(n), t = !1;
    },
    d(a) {
      a && dn(e), n && n.d(a);
    }
  };
}
function o8(r) {
  let e, t, n, a, i;
  const l = (
    /*#slots*/
    r[28].default
  ), s = kf(
    l,
    r,
    /*$$scope*/
    r[27],
    null
  );
  return {
    c() {
      e = ds("button"), s && s.c(), this.h();
    },
    l(o) {
      e = ms(o, "BUTTON", { tabindex: !0, class: !0 });
      var u = wf(e);
      s && s.l(u), u.forEach(dn), this.h();
    },
    h() {
      dt(e, "tabindex", t = /*hidden*/
      r[9] ? -1 : 0), dt(e, "class", "svelte-160acj8"), Oe(
        e,
        "hidden",
        /*hidden*/
        r[9]
      ), Oe(
        e,
        "center",
        /*center*/
        r[4]
      ), Oe(
        e,
        "boundedheight",
        /*boundedheight*/
        r[3]
      ), Oe(
        e,
        "flex",
        /*flex*/
        r[5]
      ), Oe(
        e,
        "icon-mode",
        /*icon_upload*/
        r[12]
      ), yi(
        e,
        "height",
        /*icon_upload*/
        r[12] ? "" : "100%"
      );
    },
    m(o, u) {
      Oi(o, e, u), s && s.m(e, null), n = !0, a || (i = Ct(
        e,
        "click",
        /*paste_clipboard*/
        r[13]
      ), a = !0);
    },
    p(o, u) {
      s && s.p && (!n || u[0] & /*$$scope*/
      134217728) && xf(
        s,
        l,
        o,
        /*$$scope*/
        o[27],
        n ? Ef(
          l,
          /*$$scope*/
          o[27],
          u,
          null
        ) : Df(
          /*$$scope*/
          o[27]
        ),
        null
      ), (!n || u[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      o[9] ? -1 : 0)) && dt(e, "tabindex", t), (!n || u[0] & /*hidden*/
      512) && Oe(
        e,
        "hidden",
        /*hidden*/
        o[9]
      ), (!n || u[0] & /*center*/
      16) && Oe(
        e,
        "center",
        /*center*/
        o[4]
      ), (!n || u[0] & /*boundedheight*/
      8) && Oe(
        e,
        "boundedheight",
        /*boundedheight*/
        o[3]
      ), (!n || u[0] & /*flex*/
      32) && Oe(
        e,
        "flex",
        /*flex*/
        o[5]
      ), (!n || u[0] & /*icon_upload*/
      4096) && Oe(
        e,
        "icon-mode",
        /*icon_upload*/
        o[12]
      ), u[0] & /*icon_upload*/
      4096 && yi(
        e,
        "height",
        /*icon_upload*/
        o[12] ? "" : "100%"
      );
    },
    i(o) {
      n || (K0(s, o), n = !0);
    },
    o(o) {
      Fr(s, o), n = !1;
    },
    d(o) {
      o && dn(e), s && s.d(o), a = !1, i();
    }
  };
}
function z1(r) {
  let e, t;
  return e = new Wp({
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
      Qp(e.$$.fragment);
    },
    l(n) {
      Zp(e.$$.fragment, n);
    },
    m(n, a) {
      e8(e, n, a), t = !0;
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
      t || (K0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Fr(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Jp(e, n);
    }
  };
}
function u8(r) {
  let e, t, n, a;
  const i = [o8, s8, l8], l = [];
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
      t.c(), n = _i();
    },
    l(o) {
      t.l(o), n = _i();
    },
    m(o, u) {
      l[e].m(o, u), Oi(o, n, u), a = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? l[e].p(o, u) : (Af(), Fr(l[c], 1, 1, () => {
        l[c] = null;
      }), yf(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), K0(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      a || (K0(t), a = !0);
    },
    o(o) {
      Fr(t), a = !1;
    },
    d(o) {
      o && dn(n), l[e].d(o);
    }
  };
}
function c8(r, e, t) {
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
function h8(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e, { filetype: l = null } = e, { dragging: s = !1 } = e, { boundedheight: o = !0 } = e, { center: u = !0 } = e, { flex: c = !0 } = e, { file_count: m = "single" } = e, { disable_click: g = !1 } = e, { root: d } = e, { hidden: _ = !1 } = e, { format: y = "file" } = e, { uploading: E = !1 } = e, { hidden_upload: A = null } = e, { show_progress: w = !0 } = e, { max_file_size: v = null } = e, { upload: x } = e, { stream_handler: C } = e, { icon_upload: N = !1 } = e, S, z, L, R = null;
  const I = () => {
    if (typeof navigator < "u") {
      const O = navigator.userAgent.toLowerCase();
      return O.indexOf("iphone") > -1 || O.indexOf("ipad") > -1;
    }
    return !1;
  }, M = a8(), Ee = ["image", "video", "audio", "text", "file"], U = (O) => n && O.startsWith(".") ? (R = !0, O) : n && O.includes("file/*") ? "*" : O.startsWith(".") || O.endsWith("/*") ? O : Ee.includes(O) ? O + "/*" : "." + O;
  function Z() {
    t(21, s = !s);
  }
  function se() {
    navigator.clipboard.read().then(async (O) => {
      for (let ne = 0; ne < O.length; ne++) {
        const te = O[ne].types.find((_e) => _e.startsWith("image/"));
        if (te) {
          O[ne].getType(te).then(async (_e) => {
            const ke = new File([_e], `clipboard.${te.replace("image/", "")}`);
            await Ae([ke]);
          });
          break;
        }
      }
    });
  }
  function Ge() {
    g || A && (t(2, A.value = "", A), A.click());
  }
  async function ge(O) {
    await i8(), t(15, S = Math.random().toString(36).substring(2, 15)), t(1, E = !0);
    try {
      const ne = await x(O, d, S, v ?? 1 / 0);
      return M("load", m === "single" ? ne == null ? void 0 : ne[0] : ne), t(1, E = !1), ne || [];
    } catch (ne) {
      return M("error", ne.message), t(1, E = !1), [];
    }
  }
  async function Ae(O) {
    if (!O.length)
      return;
    let ne = O.map((te) => new File([te], te instanceof File ? te.name : "file", { type: te.type }));
    return n && R && (ne = ne.filter((te) => xe(te) ? !0 : (M("error", `Invalid file type: ${te.name}. Only ${l} allowed.`), !1)), ne.length === 0) ? [] : (t(16, z = await V7(ne)), await ge(z));
  }
  function xe(O) {
    return l ? (Array.isArray(l) ? l : [l]).some((te) => {
      const _e = U(te);
      if (_e.startsWith("."))
        return O.name.toLowerCase().endsWith(_e.toLowerCase());
      if (_e === "*")
        return !0;
      if (_e.endsWith("/*")) {
        const [ke] = _e.split("/");
        return O.type.startsWith(ke + "/");
      }
      return O.type === _e;
    }) : !0;
  }
  async function oe(O) {
    const ne = O.target;
    if (ne.files)
      if (y != "blob")
        await Ae(Array.from(ne.files));
      else {
        if (m === "single") {
          M("load", ne.files[0]);
          return;
        }
        M("load", ne.files);
      }
  }
  async function me(O) {
    var ne;
    if (t(21, s = !1), !(!((ne = O.dataTransfer) === null || ne === void 0) && ne.files)) return;
    const te = Array.from(O.dataTransfer.files).filter((_e) => {
      const ke = "." + _e.name.split(".").pop();
      return ke && c8(L, ke, _e.type) || (ke && Array.isArray(l) ? l.includes(ke) : ke === l) ? !0 : (M("error", `Invalid file type only ${l} allowed.`), !1);
    });
    if (y != "blob")
      await Ae(te);
    else {
      if (m === "single") {
        M("load", te[0]);
        return;
      }
      M("load", te);
    }
  }
  function be(O) {
    sr.call(this, r, O);
  }
  function He(O) {
    sr.call(this, r, O);
  }
  function G(O) {
    sr.call(this, r, O);
  }
  function rt(O) {
    sr.call(this, r, O);
  }
  function Ye(O) {
    sr.call(this, r, O);
  }
  function nt(O) {
    sr.call(this, r, O);
  }
  function P(O) {
    sr.call(this, r, O);
  }
  function Le(O) {
    Yp[O ? "unshift" : "push"](() => {
      A = O, t(2, A);
    });
  }
  return r.$$set = (O) => {
    "filetype" in O && t(0, l = O.filetype), "dragging" in O && t(21, s = O.dragging), "boundedheight" in O && t(3, o = O.boundedheight), "center" in O && t(4, u = O.center), "flex" in O && t(5, c = O.flex), "file_count" in O && t(6, m = O.file_count), "disable_click" in O && t(7, g = O.disable_click), "root" in O && t(8, d = O.root), "hidden" in O && t(9, _ = O.hidden), "format" in O && t(22, y = O.format), "uploading" in O && t(1, E = O.uploading), "hidden_upload" in O && t(2, A = O.hidden_upload), "show_progress" in O && t(10, w = O.show_progress), "max_file_size" in O && t(23, v = O.max_file_size), "upload" in O && t(24, x = O.upload), "stream_handler" in O && t(11, C = O.stream_handler), "icon_upload" in O && t(12, N = O.icon_upload), "$$scope" in O && t(27, i = O.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*filetype, ios*/
    67108865 && (l == null ? t(17, L = null) : typeof l == "string" ? t(17, L = U(l)) : n && l.includes("file/*") ? t(17, L = "*") : (t(0, l = l.map(U)), t(17, L = l.join(", "))));
  }, t(26, n = I()), [
    l,
    E,
    A,
    o,
    u,
    c,
    m,
    g,
    d,
    _,
    w,
    C,
    N,
    se,
    Ge,
    S,
    z,
    L,
    Z,
    oe,
    me,
    s,
    y,
    v,
    x,
    Ae,
    n,
    i,
    a,
    be,
    He,
    G,
    rt,
    Ye,
    nt,
    P,
    Le
  ];
}
class f8 extends Xp {
  constructor(e) {
    super(), Kp(
      this,
      e,
      h8,
      u8,
      r8,
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
  SvelteComponent: m8,
  add_flush_callback: ps,
  append_hydration: Nl,
  attr: Il,
  bind: gs,
  binding_callbacks: wi,
  bubble: d8,
  check_outros: bs,
  children: L1,
  claim_component: Kn,
  claim_element: R1,
  claim_space: zl,
  create_component: ea,
  create_slot: p8,
  destroy_component: ta,
  detach: Ln,
  element: O1,
  empty: H1,
  get_all_dirty_from_scope: g8,
  get_slot_changes: b8,
  group_outros: vs,
  init: v8,
  insert_hydration: _s,
  mount_component: ra,
  noop: _8,
  safe_not_equal: y8,
  space: Ll,
  transition_in: yt,
  transition_out: Rt,
  update_slot_base: w8
} = window.__gradio__svelte__internal, { createEventDispatcher: k8, tick: Kg } = window.__gradio__svelte__internal;
function P1(r) {
  let e, t;
  return e = new Nh({
    props: {
      $$slots: { default: [D8] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      ea(e.$$.fragment);
    },
    l(n) {
      Kn(e.$$.fragment, n);
    },
    m(n, a) {
      ra(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*$$scope, value*/
      524289 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ta(e, n);
    }
  };
}
function D8(r) {
  let e, t;
  return e = new bn({
    props: { Icon: Sh, label: "Remove Image" }
  }), e.$on(
    "click",
    /*click_handler*/
    r[13]
  ), {
    c() {
      ea(e.$$.fragment);
    },
    l(n) {
      Kn(e.$$.fragment, n);
    },
    m(n, a) {
      ra(e, n, a), t = !0;
    },
    p: _8,
    i(n) {
      t || (yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ta(e, n);
    }
  };
}
function q1(r) {
  let e;
  const t = (
    /*#slots*/
    r[12].default
  ), n = p8(
    t,
    r,
    /*$$scope*/
    r[19],
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
      524288) && w8(
        n,
        t,
        a,
        /*$$scope*/
        a[19],
        e ? b8(
          t,
          /*$$scope*/
          a[19],
          i,
          null
        ) : g8(
          /*$$scope*/
          a[19]
        ),
        null
      );
    },
    i(a) {
      e || (yt(n, a), e = !0);
    },
    o(a) {
      Rt(n, a), e = !1;
    },
    d(a) {
      n && n.d(a);
    }
  };
}
function E8(r) {
  let e, t, n = (
    /*value*/
    r[0] === null && q1(r)
  );
  return {
    c() {
      n && n.c(), e = H1();
    },
    l(a) {
      n && n.l(a), e = H1();
    },
    m(a, i) {
      n && n.m(a, i), _s(a, e, i), t = !0;
    },
    p(a, i) {
      /*value*/
      a[0] === null ? n ? (n.p(a, i), i & /*value*/
      1 && yt(n, 1)) : (n = q1(a), n.c(), yt(n, 1), n.m(e.parentNode, e)) : n && (vs(), Rt(n, 1, 1, () => {
        n = null;
      }), bs());
    },
    i(a) {
      t || (yt(n), t = !0);
    },
    o(a) {
      Rt(n), t = !1;
    },
    d(a) {
      a && Ln(e), n && n.d(a);
    }
  };
}
function U1(r) {
  let e, t, n;
  function a(l) {
    r[18](l);
  }
  let i = {
    categories: (
      /*categories*/
      r[6]
    ),
    interactive: !0
  };
  return (
    /*value*/
    r[0] !== void 0 && (i.value = /*value*/
    r[0]), e = new qh({ props: i }), wi.push(() => gs(e, "value", a)), {
      c() {
        ea(e.$$.fragment);
      },
      l(l) {
        Kn(e.$$.fragment, l);
      },
      m(l, s) {
        ra(e, l, s), n = !0;
      },
      p(l, s) {
        const o = {};
        s & /*categories*/
        64 && (o.categories = /*categories*/
        l[6]), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], ps(() => t = !1)), e.$set(o);
      },
      i(l) {
        n || (yt(e.$$.fragment, l), n = !0);
      },
      o(l) {
        Rt(e.$$.fragment, l), n = !1;
      },
      d(l) {
        ta(e, l);
      }
    }
  );
}
function A8(r) {
  var E;
  let e, t, n, a, i, l, s, o, u, c;
  e = new Ah({
    props: {
      show_label: (
        /*show_label*/
        r[2]
      ),
      Icon: Qs,
      label: (
        /*label*/
        r[1] || "Image"
      )
    }
  });
  let m = (
    /*value*/
    ((E = r[0]) == null ? void 0 : E.image.url) && P1(r)
  );
  function g(A) {
    r[15](A);
  }
  function d(A) {
    r[16](A);
  }
  let _ = {
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
    $$slots: { default: [E8] },
    $$scope: { ctx: r }
  };
  /*uploading*/
  r[7] !== void 0 && (_.uploading = /*uploading*/
  r[7]), /*dragging*/
  r[8] !== void 0 && (_.dragging = /*dragging*/
  r[8]), l = new f8({ props: _ }), r[14](l), wi.push(() => gs(l, "uploading", g)), wi.push(() => gs(l, "dragging", d)), l.$on(
    "load",
    /*handle_upload*/
    r[10]
  ), l.$on(
    "error",
    /*error_handler*/
    r[17]
  );
  let y = (
    /*value*/
    r[0] !== null && U1(r)
  );
  return {
    c() {
      ea(e.$$.fragment), t = Ll(), n = O1("div"), m && m.c(), a = Ll(), i = O1("div"), ea(l.$$.fragment), u = Ll(), y && y.c(), this.h();
    },
    l(A) {
      Kn(e.$$.fragment, A), t = zl(A), n = R1(A, "DIV", { "data-testid": !0, class: !0 });
      var w = L1(n);
      m && m.l(w), a = zl(w), i = R1(w, "DIV", { class: !0 });
      var v = L1(i);
      Kn(l.$$.fragment, v), u = zl(v), y && y.l(v), v.forEach(Ln), w.forEach(Ln), this.h();
    },
    h() {
      Il(i, "class", "upload-container svelte-1cpftnx"), Il(n, "data-testid", "image"), Il(n, "class", "image-container svelte-1cpftnx");
    },
    m(A, w) {
      ra(e, A, w), _s(A, t, w), _s(A, n, w), m && m.m(n, null), Nl(n, a), Nl(n, i), ra(l, i, null), Nl(i, u), y && y.m(i, null), c = !0;
    },
    p(A, [w]) {
      var C;
      const v = {};
      w & /*show_label*/
      4 && (v.show_label = /*show_label*/
      A[2]), w & /*label*/
      2 && (v.label = /*label*/
      A[1] || "Image"), e.$set(v), /*value*/
      (C = A[0]) != null && C.image.url ? m ? (m.p(A, w), w & /*value*/
      1 && yt(m, 1)) : (m = P1(A), m.c(), yt(m, 1), m.m(n, a)) : m && (vs(), Rt(m, 1, 1, () => {
        m = null;
      }), bs());
      const x = {};
      w & /*upload*/
      16 && (x.upload = /*upload*/
      A[4]), w & /*stream_handler*/
      32 && (x.stream_handler = /*stream_handler*/
      A[5]), w & /*value*/
      1 && (x.hidden = /*value*/
      A[0] !== null), w & /*root*/
      8 && (x.root = /*root*/
      A[3]), w & /*$$scope, value*/
      524289 && (x.$$scope = { dirty: w, ctx: A }), !s && w & /*uploading*/
      128 && (s = !0, x.uploading = /*uploading*/
      A[7], ps(() => s = !1)), !o && w & /*dragging*/
      256 && (o = !0, x.dragging = /*dragging*/
      A[8], ps(() => o = !1)), l.$set(x), /*value*/
      A[0] !== null ? y ? (y.p(A, w), w & /*value*/
      1 && yt(y, 1)) : (y = U1(A), y.c(), yt(y, 1), y.m(i, null)) : y && (vs(), Rt(y, 1, 1, () => {
        y = null;
      }), bs());
    },
    i(A) {
      c || (yt(e.$$.fragment, A), yt(m), yt(l.$$.fragment, A), yt(y), c = !0);
    },
    o(A) {
      Rt(e.$$.fragment, A), Rt(m), Rt(l.$$.fragment, A), Rt(y), c = !1;
    },
    d(A) {
      A && (Ln(t), Ln(n)), ta(e, A), m && m.d(), r[14](null), ta(l), y && y.d();
    }
  };
}
function x8(r, e, t) {
  let { $$slots: n = {}, $$scope: a } = e, { value: i = null } = e, { label: l = void 0 } = e, { show_label: s } = e, { root: o } = e, { upload: u } = e, { stream_handler: c } = e, { categories: m = [] } = e, g, d = !1;
  function _({ detail: S }) {
    t(0, i = { image: S, annotations: [] }), y("upload");
  }
  const y = k8();
  let E = !1;
  const A = (S) => {
    t(0, i = null), y("clear"), S.stopPropagation();
  };
  function w(S) {
    wi[S ? "unshift" : "push"](() => {
      g = S, t(9, g);
    });
  }
  function v(S) {
    d = S, t(7, d);
  }
  function x(S) {
    E = S, t(8, E);
  }
  function C(S) {
    d8.call(this, r, S);
  }
  function N(S) {
    i = S, t(0, i), t(7, d);
  }
  return r.$$set = (S) => {
    "value" in S && t(0, i = S.value), "label" in S && t(1, l = S.label), "show_label" in S && t(2, s = S.show_label), "root" in S && t(3, o = S.root), "upload" in S && t(4, u = S.upload), "stream_handler" in S && t(5, c = S.stream_handler), "categories" in S && t(6, m = S.categories), "$$scope" in S && t(19, a = S.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*uploading*/
    128 && d && t(0, i = null), r.$$.dirty & /*dragging*/
    256 && y("drag", E);
  }, [
    i,
    l,
    s,
    o,
    u,
    c,
    m,
    d,
    E,
    g,
    _,
    y,
    n,
    A,
    w,
    v,
    x,
    C,
    N,
    a
  ];
}
class S8 extends m8 {
  constructor(e) {
    super(), v8(this, e, x8, A8, y8, {
      value: 0,
      label: 1,
      show_label: 2,
      root: 3,
      upload: 4,
      stream_handler: 5,
      categories: 6
    });
  }
}
function tn(r) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; r > 1e3 && t < e.length - 1; )
    r /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(r) ? r : r.toFixed(1)) + n;
}
const {
  SvelteComponent: T8,
  append_hydration: Yt,
  attr: de,
  children: zt,
  claim_element: F8,
  claim_svg_element: Zt,
  component_subscribe: G1,
  detach: Ft,
  element: C8,
  init: M8,
  insert_hydration: B8,
  noop: V1,
  safe_not_equal: N8,
  set_style: Oa,
  svg_element: $t,
  toggle_class: j1
} = window.__gradio__svelte__internal, { onMount: I8 } = window.__gradio__svelte__internal;
function z8(r) {
  let e, t, n, a, i, l, s, o, u, c, m, g;
  return {
    c() {
      e = C8("div"), t = $t("svg"), n = $t("g"), a = $t("path"), i = $t("path"), l = $t("path"), s = $t("path"), o = $t("g"), u = $t("path"), c = $t("path"), m = $t("path"), g = $t("path"), this.h();
    },
    l(d) {
      e = F8(d, "DIV", { class: !0 });
      var _ = zt(e);
      t = Zt(_, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var y = zt(t);
      n = Zt(y, "g", { style: !0 });
      var E = zt(n);
      a = Zt(E, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), zt(a).forEach(Ft), i = Zt(E, "path", { d: !0, fill: !0, class: !0 }), zt(i).forEach(Ft), l = Zt(E, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), zt(l).forEach(Ft), s = Zt(E, "path", { d: !0, fill: !0, class: !0 }), zt(s).forEach(Ft), E.forEach(Ft), o = Zt(y, "g", { style: !0 });
      var A = zt(o);
      u = Zt(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), zt(u).forEach(Ft), c = Zt(A, "path", { d: !0, fill: !0, class: !0 }), zt(c).forEach(Ft), m = Zt(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), zt(m).forEach(Ft), g = Zt(A, "path", { d: !0, fill: !0, class: !0 }), zt(g).forEach(Ft), A.forEach(Ft), y.forEach(Ft), _.forEach(Ft), this.h();
    },
    h() {
      de(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), de(a, "fill", "#FF7C00"), de(a, "fill-opacity", "0.4"), de(a, "class", "svelte-43sxxs"), de(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), de(i, "fill", "#FF7C00"), de(i, "class", "svelte-43sxxs"), de(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), de(l, "fill", "#FF7C00"), de(l, "fill-opacity", "0.4"), de(l, "class", "svelte-43sxxs"), de(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), de(s, "fill", "#FF7C00"), de(s, "class", "svelte-43sxxs"), Oa(n, "transform", "translate(" + /*$top*/
      r[1][0] + "px, " + /*$top*/
      r[1][1] + "px)"), de(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), de(u, "fill", "#FF7C00"), de(u, "fill-opacity", "0.4"), de(u, "class", "svelte-43sxxs"), de(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), de(c, "fill", "#FF7C00"), de(c, "class", "svelte-43sxxs"), de(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), de(m, "fill", "#FF7C00"), de(m, "fill-opacity", "0.4"), de(m, "class", "svelte-43sxxs"), de(g, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), de(g, "fill", "#FF7C00"), de(g, "class", "svelte-43sxxs"), Oa(o, "transform", "translate(" + /*$bottom*/
      r[2][0] + "px, " + /*$bottom*/
      r[2][1] + "px)"), de(t, "viewBox", "-1200 -1200 3000 3000"), de(t, "fill", "none"), de(t, "xmlns", "http://www.w3.org/2000/svg"), de(t, "class", "svelte-43sxxs"), de(e, "class", "svelte-43sxxs"), j1(
        e,
        "margin",
        /*margin*/
        r[0]
      );
    },
    m(d, _) {
      B8(d, e, _), Yt(e, t), Yt(t, n), Yt(n, a), Yt(n, i), Yt(n, l), Yt(n, s), Yt(t, o), Yt(o, u), Yt(o, c), Yt(o, m), Yt(o, g);
    },
    p(d, [_]) {
      _ & /*$top*/
      2 && Oa(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), _ & /*$bottom*/
      4 && Oa(o, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), _ & /*margin*/
      1 && j1(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: V1,
    o: V1,
    d(d) {
      d && Ft(e);
    }
  };
}
function L8(r, e, t) {
  let n, a, { margin: i = !0 } = e;
  const l = b1([0, 0]);
  G1(r, l, (g) => t(1, n = g));
  const s = b1([0, 0]);
  G1(r, s, (g) => t(2, a = g));
  let o;
  async function u() {
    await Promise.all([l.set([125, 140]), s.set([-125, -140])]), await Promise.all([l.set([-125, 140]), s.set([125, -140])]), await Promise.all([l.set([-125, 0]), s.set([125, -0])]), await Promise.all([l.set([125, 0]), s.set([-125, 0])]);
  }
  async function c() {
    await u(), o || c();
  }
  async function m() {
    await Promise.all([l.set([125, 0]), s.set([-125, 0])]), c();
  }
  return I8(() => (m(), () => o = !0)), r.$$set = (g) => {
    "margin" in g && t(0, i = g.margin);
  }, [i, n, a, l, s];
}
class R8 extends T8 {
  constructor(e) {
    super(), M8(this, e, L8, z8, N8, { margin: 0 });
  }
}
const {
  SvelteComponent: O8,
  append_hydration: br,
  attr: t0,
  binding_callbacks: W1,
  check_outros: ys,
  children: c0,
  claim_component: Sf,
  claim_element: h0,
  claim_space: Ht,
  claim_text: Ie,
  create_component: Tf,
  create_slot: Ff,
  destroy_component: Cf,
  destroy_each: Mf,
  detach: Q,
  element: f0,
  empty: Gt,
  ensure_array_like: ki,
  get_all_dirty_from_scope: Bf,
  get_slot_changes: Nf,
  group_outros: ws,
  init: H8,
  insert_hydration: le,
  mount_component: If,
  noop: ks,
  safe_not_equal: P8,
  set_data: Vt,
  set_style: J0,
  space: Pt,
  text: ze,
  toggle_class: Lt,
  transition_in: e0,
  transition_out: m0,
  update_slot_base: zf
} = window.__gradio__svelte__internal, { tick: q8 } = window.__gradio__svelte__internal, { onDestroy: U8 } = window.__gradio__svelte__internal, { createEventDispatcher: G8 } = window.__gradio__svelte__internal, V8 = (r) => ({}), X1 = (r) => ({}), j8 = (r) => ({}), Y1 = (r) => ({});
function Z1(r, e, t) {
  const n = r.slice();
  return n[40] = e[t], n[42] = t, n;
}
function $1(r, e, t) {
  const n = r.slice();
  return n[40] = e[t], n;
}
function W8(r) {
  let e, t, n, a, i = (
    /*i18n*/
    r[1]("common.error") + ""
  ), l, s, o;
  t = new bn({
    props: {
      Icon: Sh,
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
  ), c = Ff(
    u,
    r,
    /*$$scope*/
    r[29],
    X1
  );
  return {
    c() {
      e = f0("div"), Tf(t.$$.fragment), n = Pt(), a = f0("span"), l = ze(i), s = Pt(), c && c.c(), this.h();
    },
    l(m) {
      e = h0(m, "DIV", { class: !0 });
      var g = c0(e);
      Sf(t.$$.fragment, g), g.forEach(Q), n = Ht(m), a = h0(m, "SPAN", { class: !0 });
      var d = c0(a);
      l = Ie(d, i), d.forEach(Q), s = Ht(m), c && c.l(m), this.h();
    },
    h() {
      t0(e, "class", "clear-status svelte-17v219f"), t0(a, "class", "error svelte-17v219f");
    },
    m(m, g) {
      le(m, e, g), If(t, e, null), le(m, n, g), le(m, a, g), br(a, l), le(m, s, g), c && c.m(m, g), o = !0;
    },
    p(m, g) {
      const d = {};
      g[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      m[1]("common.clear")), t.$set(d), (!o || g[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      m[1]("common.error") + "") && Vt(l, i), c && c.p && (!o || g[0] & /*$$scope*/
      536870912) && zf(
        c,
        u,
        m,
        /*$$scope*/
        m[29],
        o ? Nf(
          u,
          /*$$scope*/
          m[29],
          g,
          V8
        ) : Bf(
          /*$$scope*/
          m[29]
        ),
        X1
      );
    },
    i(m) {
      o || (e0(t.$$.fragment, m), e0(c, m), o = !0);
    },
    o(m) {
      m0(t.$$.fragment, m), m0(c, m), o = !1;
    },
    d(m) {
      m && (Q(e), Q(n), Q(a), Q(s)), Cf(t), c && c.d(m);
    }
  };
}
function X8(r) {
  let e, t, n, a, i, l, s, o, u, c = (
    /*variant*/
    r[8] === "default" && /*show_eta_bar*/
    r[18] && /*show_progress*/
    r[6] === "full" && Q1(r)
  );
  function m(v, x) {
    if (
      /*progress*/
      v[7]
    ) return $8;
    if (
      /*queue_position*/
      v[2] !== null && /*queue_size*/
      v[3] !== void 0 && /*queue_position*/
      v[2] >= 0
    ) return Z8;
    if (
      /*queue_position*/
      v[2] === 0
    ) return Y8;
  }
  let g = m(r), d = g && g(r), _ = (
    /*timer*/
    r[5] && ec(r)
  );
  const y = [eg, K8], E = [];
  function A(v, x) {
    return (
      /*last_progress_level*/
      v[15] != null ? 0 : (
        /*show_progress*/
        v[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = A(r)) && (l = E[i] = y[i](r));
  let w = !/*timer*/
  r[5] && sc(r);
  return {
    c() {
      c && c.c(), e = Pt(), t = f0("div"), d && d.c(), n = Pt(), _ && _.c(), a = Pt(), l && l.c(), s = Pt(), w && w.c(), o = Gt(), this.h();
    },
    l(v) {
      c && c.l(v), e = Ht(v), t = h0(v, "DIV", { class: !0 });
      var x = c0(t);
      d && d.l(x), n = Ht(x), _ && _.l(x), x.forEach(Q), a = Ht(v), l && l.l(v), s = Ht(v), w && w.l(v), o = Gt(), this.h();
    },
    h() {
      t0(t, "class", "progress-text svelte-17v219f"), Lt(
        t,
        "meta-text-center",
        /*variant*/
        r[8] === "center"
      ), Lt(
        t,
        "meta-text",
        /*variant*/
        r[8] === "default"
      );
    },
    m(v, x) {
      c && c.m(v, x), le(v, e, x), le(v, t, x), d && d.m(t, null), br(t, n), _ && _.m(t, null), le(v, a, x), ~i && E[i].m(v, x), le(v, s, x), w && w.m(v, x), le(v, o, x), u = !0;
    },
    p(v, x) {
      /*variant*/
      v[8] === "default" && /*show_eta_bar*/
      v[18] && /*show_progress*/
      v[6] === "full" ? c ? c.p(v, x) : (c = Q1(v), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), g === (g = m(v)) && d ? d.p(v, x) : (d && d.d(1), d = g && g(v), d && (d.c(), d.m(t, n))), /*timer*/
      v[5] ? _ ? _.p(v, x) : (_ = ec(v), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), (!u || x[0] & /*variant*/
      256) && Lt(
        t,
        "meta-text-center",
        /*variant*/
        v[8] === "center"
      ), (!u || x[0] & /*variant*/
      256) && Lt(
        t,
        "meta-text",
        /*variant*/
        v[8] === "default"
      );
      let C = i;
      i = A(v), i === C ? ~i && E[i].p(v, x) : (l && (ws(), m0(E[C], 1, 1, () => {
        E[C] = null;
      }), ys()), ~i ? (l = E[i], l ? l.p(v, x) : (l = E[i] = y[i](v), l.c()), e0(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      v[5] ? w && (ws(), m0(w, 1, 1, () => {
        w = null;
      }), ys()) : w ? (w.p(v, x), x[0] & /*timer*/
      32 && e0(w, 1)) : (w = sc(v), w.c(), e0(w, 1), w.m(o.parentNode, o));
    },
    i(v) {
      u || (e0(l), e0(w), u = !0);
    },
    o(v) {
      m0(l), m0(w), u = !1;
    },
    d(v) {
      v && (Q(e), Q(t), Q(a), Q(s), Q(o)), c && c.d(v), d && d.d(), _ && _.d(), ~i && E[i].d(v), w && w.d(v);
    }
  };
}
function Q1(r) {
  let e, t = `translateX(${/*eta_level*/
  (r[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = f0("div"), this.h();
    },
    l(n) {
      e = h0(n, "DIV", { class: !0 }), c0(e).forEach(Q), this.h();
    },
    h() {
      t0(e, "class", "eta-bar svelte-17v219f"), J0(e, "transform", t);
    },
    m(n, a) {
      le(n, e, a);
    },
    p(n, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && J0(e, "transform", t);
    },
    d(n) {
      n && Q(e);
    }
  };
}
function Y8(r) {
  let e;
  return {
    c() {
      e = ze("processing |");
    },
    l(t) {
      e = Ie(t, "processing |");
    },
    m(t, n) {
      le(t, e, n);
    },
    p: ks,
    d(t) {
      t && Q(e);
    }
  };
}
function Z8(r) {
  let e, t = (
    /*queue_position*/
    r[2] + 1 + ""
  ), n, a, i, l;
  return {
    c() {
      e = ze("queue: "), n = ze(t), a = ze("/"), i = ze(
        /*queue_size*/
        r[3]
      ), l = ze(" |");
    },
    l(s) {
      e = Ie(s, "queue: "), n = Ie(s, t), a = Ie(s, "/"), i = Ie(
        s,
        /*queue_size*/
        r[3]
      ), l = Ie(s, " |");
    },
    m(s, o) {
      le(s, e, o), le(s, n, o), le(s, a, o), le(s, i, o), le(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && Vt(n, t), o[0] & /*queue_size*/
      8 && Vt(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (Q(e), Q(n), Q(a), Q(i), Q(l));
    }
  };
}
function $8(r) {
  let e, t = ki(
    /*progress*/
    r[7]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = K1($1(r, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      e = Gt();
    },
    l(a) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(a);
      e = Gt();
    },
    m(a, i) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, i);
      le(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = ki(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = $1(a, t, l);
          n[l] ? n[l].p(s, i) : (n[l] = K1(s), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      a && Q(e), Mf(n, a);
    }
  };
}
function J1(r) {
  let e, t = (
    /*p*/
    r[40].unit + ""
  ), n, a, i = " ", l;
  function s(c, m) {
    return (
      /*p*/
      c[40].length != null ? J8 : Q8
    );
  }
  let o = s(r), u = o(r);
  return {
    c() {
      u.c(), e = Pt(), n = ze(t), a = ze(" | "), l = ze(i);
    },
    l(c) {
      u.l(c), e = Ht(c), n = Ie(c, t), a = Ie(c, " | "), l = Ie(c, i);
    },
    m(c, m) {
      u.m(c, m), le(c, e, m), le(c, n, m), le(c, a, m), le(c, l, m);
    },
    p(c, m) {
      o === (o = s(c)) && u ? u.p(c, m) : (u.d(1), u = o(c), u && (u.c(), u.m(e.parentNode, e))), m[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[40].unit + "") && Vt(n, t);
    },
    d(c) {
      c && (Q(e), Q(n), Q(a), Q(l)), u.d(c);
    }
  };
}
function Q8(r) {
  let e = tn(
    /*p*/
    r[40].index || 0
  ) + "", t;
  return {
    c() {
      t = ze(e);
    },
    l(n) {
      t = Ie(n, e);
    },
    m(n, a) {
      le(n, t, a);
    },
    p(n, a) {
      a[0] & /*progress*/
      128 && e !== (e = tn(
        /*p*/
        n[40].index || 0
      ) + "") && Vt(t, e);
    },
    d(n) {
      n && Q(t);
    }
  };
}
function J8(r) {
  let e = tn(
    /*p*/
    r[40].index || 0
  ) + "", t, n, a = tn(
    /*p*/
    r[40].length
  ) + "", i;
  return {
    c() {
      t = ze(e), n = ze("/"), i = ze(a);
    },
    l(l) {
      t = Ie(l, e), n = Ie(l, "/"), i = Ie(l, a);
    },
    m(l, s) {
      le(l, t, s), le(l, n, s), le(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = tn(
        /*p*/
        l[40].index || 0
      ) + "") && Vt(t, e), s[0] & /*progress*/
      128 && a !== (a = tn(
        /*p*/
        l[40].length
      ) + "") && Vt(i, a);
    },
    d(l) {
      l && (Q(t), Q(n), Q(i));
    }
  };
}
function K1(r) {
  let e, t = (
    /*p*/
    r[40].index != null && J1(r)
  );
  return {
    c() {
      t && t.c(), e = Gt();
    },
    l(n) {
      t && t.l(n), e = Gt();
    },
    m(n, a) {
      t && t.m(n, a), le(n, e, a);
    },
    p(n, a) {
      /*p*/
      n[40].index != null ? t ? t.p(n, a) : (t = J1(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Q(e), t && t.d(n);
    }
  };
}
function ec(r) {
  let e, t = (
    /*eta*/
    r[0] ? `/${/*formatted_eta*/
    r[19]}` : ""
  ), n, a;
  return {
    c() {
      e = ze(
        /*formatted_timer*/
        r[20]
      ), n = ze(t), a = ze("s");
    },
    l(i) {
      e = Ie(
        i,
        /*formatted_timer*/
        r[20]
      ), n = Ie(i, t), a = Ie(i, "s");
    },
    m(i, l) {
      le(i, e, l), le(i, n, l), le(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && Vt(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && Vt(n, t);
    },
    d(i) {
      i && (Q(e), Q(n), Q(a));
    }
  };
}
function K8(r) {
  let e, t;
  return e = new R8({
    props: { margin: (
      /*variant*/
      r[8] === "default"
    ) }
  }), {
    c() {
      Tf(e.$$.fragment);
    },
    l(n) {
      Sf(e.$$.fragment, n);
    },
    m(n, a) {
      If(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      n[8] === "default"), e.$set(i);
    },
    i(n) {
      t || (e0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      m0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cf(e, n);
    }
  };
}
function eg(r) {
  let e, t, n, a, i, l = `${/*last_progress_level*/
  r[15] * 100}%`, s = (
    /*progress*/
    r[7] != null && tc(r)
  );
  return {
    c() {
      e = f0("div"), t = f0("div"), s && s.c(), n = Pt(), a = f0("div"), i = f0("div"), this.h();
    },
    l(o) {
      e = h0(o, "DIV", { class: !0 });
      var u = c0(e);
      t = h0(u, "DIV", { class: !0 });
      var c = c0(t);
      s && s.l(c), c.forEach(Q), n = Ht(u), a = h0(u, "DIV", { class: !0 });
      var m = c0(a);
      i = h0(m, "DIV", { class: !0 }), c0(i).forEach(Q), m.forEach(Q), u.forEach(Q), this.h();
    },
    h() {
      t0(t, "class", "progress-level-inner svelte-17v219f"), t0(i, "class", "progress-bar svelte-17v219f"), J0(i, "width", l), t0(a, "class", "progress-bar-wrap svelte-17v219f"), t0(e, "class", "progress-level svelte-17v219f");
    },
    m(o, u) {
      le(o, e, u), br(e, t), s && s.m(t, null), br(e, n), br(e, a), br(a, i), r[31](i);
    },
    p(o, u) {
      /*progress*/
      o[7] != null ? s ? s.p(o, u) : (s = tc(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && J0(i, "width", l);
    },
    i: ks,
    o: ks,
    d(o) {
      o && Q(e), s && s.d(), r[31](null);
    }
  };
}
function tc(r) {
  let e, t = ki(
    /*progress*/
    r[7]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = lc(Z1(r, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      e = Gt();
    },
    l(a) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(a);
      e = Gt();
    },
    m(a, i) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, i);
      le(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = ki(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Z1(a, t, l);
          n[l] ? n[l].p(s, i) : (n[l] = lc(s), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      a && Q(e), Mf(n, a);
    }
  };
}
function rc(r) {
  let e, t, n, a, i = (
    /*i*/
    r[42] !== 0 && tg()
  ), l = (
    /*p*/
    r[40].desc != null && nc(r)
  ), s = (
    /*p*/
    r[40].desc != null && /*progress_level*/
    r[14] && /*progress_level*/
    r[14][
      /*i*/
      r[42]
    ] != null && ac()
  ), o = (
    /*progress_level*/
    r[14] != null && ic(r)
  );
  return {
    c() {
      i && i.c(), e = Pt(), l && l.c(), t = Pt(), s && s.c(), n = Pt(), o && o.c(), a = Gt();
    },
    l(u) {
      i && i.l(u), e = Ht(u), l && l.l(u), t = Ht(u), s && s.l(u), n = Ht(u), o && o.l(u), a = Gt();
    },
    m(u, c) {
      i && i.m(u, c), le(u, e, c), l && l.m(u, c), le(u, t, c), s && s.m(u, c), le(u, n, c), o && o.m(u, c), le(u, a, c);
    },
    p(u, c) {
      /*p*/
      u[40].desc != null ? l ? l.p(u, c) : (l = nc(u), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      u[40].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[42]
      ] != null ? s || (s = ac(), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), /*progress_level*/
      u[14] != null ? o ? o.p(u, c) : (o = ic(u), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && (Q(e), Q(t), Q(n), Q(a)), i && i.d(u), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function tg(r) {
  let e;
  return {
    c() {
      e = ze(" /");
    },
    l(t) {
      e = Ie(t, " /");
    },
    m(t, n) {
      le(t, e, n);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function nc(r) {
  let e = (
    /*p*/
    r[40].desc + ""
  ), t;
  return {
    c() {
      t = ze(e);
    },
    l(n) {
      t = Ie(n, e);
    },
    m(n, a) {
      le(n, t, a);
    },
    p(n, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[40].desc + "") && Vt(t, e);
    },
    d(n) {
      n && Q(t);
    }
  };
}
function ac(r) {
  let e;
  return {
    c() {
      e = ze("-");
    },
    l(t) {
      e = Ie(t, "-");
    },
    m(t, n) {
      le(t, e, n);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function ic(r) {
  let e = (100 * /*progress_level*/
  (r[14][
    /*i*/
    r[42]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ze(e), n = ze("%");
    },
    l(a) {
      t = Ie(a, e), n = Ie(a, "%");
    },
    m(a, i) {
      le(a, t, i), le(a, n, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[42]
      ] || 0)).toFixed(1) + "") && Vt(t, e);
    },
    d(a) {
      a && (Q(t), Q(n));
    }
  };
}
function lc(r) {
  let e, t = (
    /*p*/
    (r[40].desc != null || /*progress_level*/
    r[14] && /*progress_level*/
    r[14][
      /*i*/
      r[42]
    ] != null) && rc(r)
  );
  return {
    c() {
      t && t.c(), e = Gt();
    },
    l(n) {
      t && t.l(n), e = Gt();
    },
    m(n, a) {
      t && t.m(n, a), le(n, e, a);
    },
    p(n, a) {
      /*p*/
      n[40].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[42]
      ] != null ? t ? t.p(n, a) : (t = rc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Q(e), t && t.d(n);
    }
  };
}
function sc(r) {
  let e, t, n, a;
  const i = (
    /*#slots*/
    r[30]["additional-loading-text"]
  ), l = Ff(
    i,
    r,
    /*$$scope*/
    r[29],
    Y1
  );
  return {
    c() {
      e = f0("p"), t = ze(
        /*loading_text*/
        r[9]
      ), n = Pt(), l && l.c(), this.h();
    },
    l(s) {
      e = h0(s, "P", { class: !0 });
      var o = c0(e);
      t = Ie(
        o,
        /*loading_text*/
        r[9]
      ), o.forEach(Q), n = Ht(s), l && l.l(s), this.h();
    },
    h() {
      t0(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      le(s, e, o), br(e, t), le(s, n, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && Vt(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && zf(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? Nf(
          i,
          /*$$scope*/
          s[29],
          o,
          j8
        ) : Bf(
          /*$$scope*/
          s[29]
        ),
        Y1
      );
    },
    i(s) {
      a || (e0(l, s), a = !0);
    },
    o(s) {
      m0(l, s), a = !1;
    },
    d(s) {
      s && (Q(e), Q(n)), l && l.d(s);
    }
  };
}
function rg(r) {
  let e, t, n, a, i;
  const l = [X8, W8], s = [];
  function o(u, c) {
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
      e = f0("div"), n && n.c(), this.h();
    },
    l(u) {
      e = h0(u, "DIV", { class: !0 });
      var c = c0(e);
      n && n.l(c), c.forEach(Q), this.h();
    },
    h() {
      t0(e, "class", a = "wrap " + /*variant*/
      r[8] + " " + /*show_progress*/
      r[6] + " svelte-17v219f"), Lt(e, "hide", !/*status*/
      r[4] || /*status*/
      r[4] === "complete" || /*show_progress*/
      r[6] === "hidden" || /*status*/
      r[4] == "streaming"), Lt(
        e,
        "translucent",
        /*variant*/
        r[8] === "center" && /*status*/
        (r[4] === "pending" || /*status*/
        r[4] === "error") || /*translucent*/
        r[11] || /*show_progress*/
        r[6] === "minimal"
      ), Lt(
        e,
        "generating",
        /*status*/
        r[4] === "generating" && /*show_progress*/
        r[6] === "full"
      ), Lt(
        e,
        "border",
        /*border*/
        r[12]
      ), J0(
        e,
        "position",
        /*absolute*/
        r[10] ? "absolute" : "static"
      ), J0(
        e,
        "padding",
        /*absolute*/
        r[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, c) {
      le(u, e, c), ~t && s[t].m(e, null), r[33](e), i = !0;
    },
    p(u, c) {
      let m = t;
      t = o(u), t === m ? ~t && s[t].p(u, c) : (n && (ws(), m0(s[m], 1, 1, () => {
        s[m] = null;
      }), ys()), ~t ? (n = s[t], n ? n.p(u, c) : (n = s[t] = l[t](u), n.c()), e0(n, 1), n.m(e, null)) : n = null), (!i || c[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-17v219f")) && t0(e, "class", a), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Lt(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden" || /*status*/
      u[4] == "streaming"), (!i || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Lt(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Lt(
        e,
        "generating",
        /*status*/
        u[4] === "generating" && /*show_progress*/
        u[6] === "full"
      ), (!i || c[0] & /*variant, show_progress, border*/
      4416) && Lt(
        e,
        "border",
        /*border*/
        u[12]
      ), c[0] & /*absolute*/
      1024 && J0(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && J0(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      i || (e0(n), i = !0);
    },
    o(u) {
      m0(n), i = !1;
    },
    d(u) {
      u && Q(e), ~t && s[t].d(), r[33](null);
    }
  };
}
let Ha = [], Rl = !1;
const ng = typeof window < "u", Lf = ng ? window.requestAnimationFrame : (r) => {
};
async function ag(r, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (Ha.push(r), !Rl) Rl = !0;
    else return;
    await q8(), Lf(() => {
      let t = [0, 0];
      for (let n = 0; n < Ha.length; n++) {
        const i = Ha[n].getBoundingClientRect();
        (n === 0 || i.top + window.scrollY <= t[0]) && (t[0] = i.top + window.scrollY, t[1] = n);
      }
      window.scrollTo({ top: t[0] - 20, behavior: "smooth" }), Rl = !1, Ha = [];
    });
  }
}
function ig(r, e, t) {
  let n, { $$slots: a = {}, $$scope: i } = e;
  const l = G8();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: u } = e, { queue_size: c } = e, { status: m } = e, { scroll_to_output: g = !1 } = e, { timer: d = !0 } = e, { show_progress: _ = "full" } = e, { message: y = null } = e, { progress: E = null } = e, { variant: A = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: v = !0 } = e, { translucent: x = !1 } = e, { border: C = !1 } = e, { autoscroll: N } = e, S, z = !1, L = 0, R = 0, I = null, M = null, Ee = 0, U = null, Z, se = null, Ge = !0;
  const ge = () => {
    t(0, o = t(27, I = t(19, oe = null))), t(25, L = performance.now()), t(26, R = 0), z = !0, Ae();
  };
  function Ae() {
    Lf(() => {
      t(26, R = (performance.now() - L) / 1e3), z && Ae();
    });
  }
  function xe() {
    t(26, R = 0), t(0, o = t(27, I = t(19, oe = null))), z && (z = !1);
  }
  U8(() => {
    z && xe();
  });
  let oe = null;
  function me(G) {
    W1[G ? "unshift" : "push"](() => {
      se = G, t(16, se), t(7, E), t(14, U), t(15, Z);
    });
  }
  const be = () => {
    l("clear_status");
  };
  function He(G) {
    W1[G ? "unshift" : "push"](() => {
      S = G, t(13, S);
    });
  }
  return r.$$set = (G) => {
    "i18n" in G && t(1, s = G.i18n), "eta" in G && t(0, o = G.eta), "queue_position" in G && t(2, u = G.queue_position), "queue_size" in G && t(3, c = G.queue_size), "status" in G && t(4, m = G.status), "scroll_to_output" in G && t(22, g = G.scroll_to_output), "timer" in G && t(5, d = G.timer), "show_progress" in G && t(6, _ = G.show_progress), "message" in G && t(23, y = G.message), "progress" in G && t(7, E = G.progress), "variant" in G && t(8, A = G.variant), "loading_text" in G && t(9, w = G.loading_text), "absolute" in G && t(10, v = G.absolute), "translucent" in G && t(11, x = G.translucent), "border" in G && t(12, C = G.border), "autoscroll" in G && t(24, N = G.autoscroll), "$$scope" in G && t(29, i = G.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = I), o != null && I !== o && (t(28, M = (performance.now() - L) / 1e3 + o), t(19, oe = M.toFixed(1)), t(27, I = o))), r.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, Ee = M === null || M <= 0 || !R ? null : Math.min(R / M, 1)), r.$$.dirty[0] & /*progress*/
    128 && E != null && t(18, Ge = !1), r.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (E != null ? t(14, U = E.map((G) => {
      if (G.index != null && G.length != null)
        return G.index / G.length;
      if (G.progress != null)
        return G.progress;
    })) : t(14, U = null), U ? (t(15, Z = U[U.length - 1]), se && (Z === 0 ? t(16, se.style.transition = "0", se) : t(16, se.style.transition = "150ms", se))) : t(15, Z = void 0)), r.$$.dirty[0] & /*status*/
    16 && (m === "pending" ? ge() : xe()), r.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && S && g && (m === "pending" || m === "complete") && ag(S, N), r.$$.dirty[0] & /*status, message*/
    8388624, r.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = R.toFixed(1));
  }, [
    o,
    s,
    u,
    c,
    m,
    d,
    _,
    E,
    A,
    w,
    v,
    x,
    C,
    S,
    U,
    Z,
    se,
    Ee,
    Ge,
    oe,
    n,
    l,
    g,
    y,
    N,
    L,
    R,
    I,
    M,
    i,
    a,
    me,
    be,
    He
  ];
}
class Rf extends O8 {
  constructor(e) {
    super(), H8(
      this,
      e,
      ig,
      rg,
      P8,
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
  entries: Of,
  setPrototypeOf: oc,
  isFrozen: lg,
  getPrototypeOf: sg,
  getOwnPropertyDescriptor: og
} = Object;
let {
  freeze: kt,
  seal: jt,
  create: Hf
} = Object, {
  apply: Ds,
  construct: Es
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(e) {
  return e;
});
jt || (jt = function(e) {
  return e;
});
Ds || (Ds = function(e, t, n) {
  return e.apply(t, n);
});
Es || (Es = function(e, t) {
  return new e(...t);
});
const Pa = Bt(Array.prototype.forEach), uc = Bt(Array.prototype.pop), Tn = Bt(Array.prototype.push), Qa = Bt(String.prototype.toLowerCase), Ol = Bt(String.prototype.toString), cc = Bt(String.prototype.match), Fn = Bt(String.prototype.replace), ug = Bt(String.prototype.indexOf), cg = Bt(String.prototype.trim), Qt = Bt(Object.prototype.hasOwnProperty), vt = Bt(RegExp.prototype.test), Cn = hg(TypeError);
function Bt(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      n[a - 1] = arguments[a];
    return Ds(r, e, n);
  };
}
function hg(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Es(r, t);
  };
}
function ce(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qa;
  oc && oc(r, null);
  let n = e.length;
  for (; n--; ) {
    let a = e[n];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (lg(e) || (e[n] = i), a = i);
    }
    r[a] = !0;
  }
  return r;
}
function fg(r) {
  for (let e = 0; e < r.length; e++)
    Qt(r, e) || (r[e] = null);
  return r;
}
function cr(r) {
  const e = Hf(null);
  for (const [t, n] of Of(r))
    Qt(r, t) && (Array.isArray(n) ? e[t] = fg(n) : n && typeof n == "object" && n.constructor === Object ? e[t] = cr(n) : e[t] = n);
  return e;
}
function Mn(r, e) {
  for (; r !== null; ) {
    const n = og(r, e);
    if (n) {
      if (n.get)
        return Bt(n.get);
      if (typeof n.value == "function")
        return Bt(n.value);
    }
    r = sg(r);
  }
  function t() {
    return null;
  }
  return t;
}
const hc = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Hl = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pl = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), mg = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ql = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dg = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), fc = kt(["#text"]), mc = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ul = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), dc = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), qa = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pg = jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), gg = jt(/<%[\w\W]*|[\w\W]*%>/gm), bg = jt(/\${[\w\W]*}/gm), vg = jt(/^data-[\-\w.\u00B7-\uFFFF]/), _g = jt(/^aria-[\-\w]+$/), Pf = jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yg = jt(/^(?:\w+script|data):/i), wg = jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), qf = jt(/^html$/i), kg = jt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var pc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: _g,
  ATTR_WHITESPACE: wg,
  CUSTOM_ELEMENT: kg,
  DATA_ATTR: vg,
  DOCTYPE_NAME: qf,
  ERB_EXPR: gg,
  IS_ALLOWED_URI: Pf,
  IS_SCRIPT_OR_DATA: yg,
  MUSTACHE_EXPR: pg,
  TMPLIT_EXPR: bg
});
const Bn = {
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
}, Dg = function() {
  return typeof window > "u" ? null : window;
}, Eg = function(e, t) {
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
function Uf() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dg();
  const e = ($) => Uf($);
  if (e.version = "3.2.1", e.removed = [], !r || !r.document || r.document.nodeType !== Bn.document)
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
    NamedNodeMap: c = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: m,
    DOMParser: g,
    trustedTypes: d
  } = r, _ = o.prototype, y = Mn(_, "cloneNode"), E = Mn(_, "remove"), A = Mn(_, "nextSibling"), w = Mn(_, "childNodes"), v = Mn(_, "parentNode");
  if (typeof l == "function") {
    const $ = t.createElement("template");
    $.content && $.content.ownerDocument && (t = $.content.ownerDocument);
  }
  let x, C = "";
  const {
    implementation: N,
    createNodeIterator: S,
    createDocumentFragment: z,
    getElementsByTagName: L
  } = t, {
    importNode: R
  } = n;
  let I = {};
  e.isSupported = typeof Of == "function" && typeof v == "function" && N && N.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: M,
    ERB_EXPR: Ee,
    TMPLIT_EXPR: U,
    DATA_ATTR: Z,
    ARIA_ATTR: se,
    IS_SCRIPT_OR_DATA: Ge,
    ATTR_WHITESPACE: ge,
    CUSTOM_ELEMENT: Ae
  } = pc;
  let {
    IS_ALLOWED_URI: xe
  } = pc, oe = null;
  const me = ce({}, [...hc, ...Hl, ...Pl, ...ql, ...fc]);
  let be = null;
  const He = ce({}, [...mc, ...Ul, ...dc, ...qa]);
  let G = Object.seal(Hf(null, {
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
  })), rt = null, Ye = null, nt = !0, P = !0, Le = !1, O = !0, ne = !1, te = !0, _e = !1, ke = !1, at = !1, Ve = !1, ct = !1, v0 = !1, uo = !0, co = !1;
  const Zf = "user-content-";
  let Hi = !0, yn = !1, Ur = {}, Gr = null;
  const ho = ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let fo = null;
  const mo = ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let Pi = null;
  const po = ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ca = "http://www.w3.org/1998/Math/MathML", ha = "http://www.w3.org/2000/svg", _0 = "http://www.w3.org/1999/xhtml";
  let Vr = _0, qi = !1, Ui = null;
  const $f = ce({}, [ca, ha, _0], Ol);
  let fa = ce({}, ["mi", "mo", "mn", "ms", "mtext"]), ma = ce({}, ["annotation-xml"]);
  const Qf = ce({}, ["title", "style", "font", "a", "script"]);
  let wn = null;
  const Jf = ["application/xhtml+xml", "text/html"], Kf = "text/html";
  let $e = null, jr = null;
  const e4 = t.createElement("form"), go = function(F) {
    return F instanceof RegExp || F instanceof Function;
  }, Gi = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(jr && jr === F)) {
      if ((!F || typeof F != "object") && (F = {}), F = cr(F), wn = // eslint-disable-next-line unicorn/prefer-includes
      Jf.indexOf(F.PARSER_MEDIA_TYPE) === -1 ? Kf : F.PARSER_MEDIA_TYPE, $e = wn === "application/xhtml+xml" ? Ol : Qa, oe = Qt(F, "ALLOWED_TAGS") ? ce({}, F.ALLOWED_TAGS, $e) : me, be = Qt(F, "ALLOWED_ATTR") ? ce({}, F.ALLOWED_ATTR, $e) : He, Ui = Qt(F, "ALLOWED_NAMESPACES") ? ce({}, F.ALLOWED_NAMESPACES, Ol) : $f, Pi = Qt(F, "ADD_URI_SAFE_ATTR") ? ce(cr(po), F.ADD_URI_SAFE_ATTR, $e) : po, fo = Qt(F, "ADD_DATA_URI_TAGS") ? ce(cr(mo), F.ADD_DATA_URI_TAGS, $e) : mo, Gr = Qt(F, "FORBID_CONTENTS") ? ce({}, F.FORBID_CONTENTS, $e) : ho, rt = Qt(F, "FORBID_TAGS") ? ce({}, F.FORBID_TAGS, $e) : {}, Ye = Qt(F, "FORBID_ATTR") ? ce({}, F.FORBID_ATTR, $e) : {}, Ur = Qt(F, "USE_PROFILES") ? F.USE_PROFILES : !1, nt = F.ALLOW_ARIA_ATTR !== !1, P = F.ALLOW_DATA_ATTR !== !1, Le = F.ALLOW_UNKNOWN_PROTOCOLS || !1, O = F.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = F.SAFE_FOR_TEMPLATES || !1, te = F.SAFE_FOR_XML !== !1, _e = F.WHOLE_DOCUMENT || !1, Ve = F.RETURN_DOM || !1, ct = F.RETURN_DOM_FRAGMENT || !1, v0 = F.RETURN_TRUSTED_TYPE || !1, at = F.FORCE_BODY || !1, uo = F.SANITIZE_DOM !== !1, co = F.SANITIZE_NAMED_PROPS || !1, Hi = F.KEEP_CONTENT !== !1, yn = F.IN_PLACE || !1, xe = F.ALLOWED_URI_REGEXP || Pf, Vr = F.NAMESPACE || _0, fa = F.MATHML_TEXT_INTEGRATION_POINTS || fa, ma = F.HTML_INTEGRATION_POINTS || ma, G = F.CUSTOM_ELEMENT_HANDLING || {}, F.CUSTOM_ELEMENT_HANDLING && go(F.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = F.CUSTOM_ELEMENT_HANDLING.tagNameCheck), F.CUSTOM_ELEMENT_HANDLING && go(F.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = F.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), F.CUSTOM_ELEMENT_HANDLING && typeof F.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = F.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (P = !1), ct && (Ve = !0), Ur && (oe = ce({}, fc), be = [], Ur.html === !0 && (ce(oe, hc), ce(be, mc)), Ur.svg === !0 && (ce(oe, Hl), ce(be, Ul), ce(be, qa)), Ur.svgFilters === !0 && (ce(oe, Pl), ce(be, Ul), ce(be, qa)), Ur.mathMl === !0 && (ce(oe, ql), ce(be, dc), ce(be, qa))), F.ADD_TAGS && (oe === me && (oe = cr(oe)), ce(oe, F.ADD_TAGS, $e)), F.ADD_ATTR && (be === He && (be = cr(be)), ce(be, F.ADD_ATTR, $e)), F.ADD_URI_SAFE_ATTR && ce(Pi, F.ADD_URI_SAFE_ATTR, $e), F.FORBID_CONTENTS && (Gr === ho && (Gr = cr(Gr)), ce(Gr, F.FORBID_CONTENTS, $e)), Hi && (oe["#text"] = !0), _e && ce(oe, ["html", "head", "body"]), oe.table && (ce(oe, ["tbody"]), delete rt.tbody), F.TRUSTED_TYPES_POLICY) {
        if (typeof F.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof F.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = F.TRUSTED_TYPES_POLICY, C = x.createHTML("");
      } else
        x === void 0 && (x = Eg(d, a)), x !== null && typeof C == "string" && (C = x.createHTML(""));
      kt && kt(F), jr = F;
    }
  }, bo = ce({}, [...Hl, ...Pl, ...mg]), vo = ce({}, [...ql, ...dg]), t4 = function(F) {
    let V = v(F);
    (!V || !V.tagName) && (V = {
      namespaceURI: Vr,
      tagName: "template"
    });
    const Y = Qa(F.tagName), Te = Qa(V.tagName);
    return Ui[F.namespaceURI] ? F.namespaceURI === ha ? V.namespaceURI === _0 ? Y === "svg" : V.namespaceURI === ca ? Y === "svg" && (Te === "annotation-xml" || fa[Te]) : !!bo[Y] : F.namespaceURI === ca ? V.namespaceURI === _0 ? Y === "math" : V.namespaceURI === ha ? Y === "math" && ma[Te] : !!vo[Y] : F.namespaceURI === _0 ? V.namespaceURI === ha && !ma[Te] || V.namespaceURI === ca && !fa[Te] ? !1 : !vo[Y] && (Qf[Y] || !bo[Y]) : !!(wn === "application/xhtml+xml" && Ui[F.namespaceURI]) : !1;
  }, a0 = function(F) {
    Tn(e.removed, {
      element: F
    });
    try {
      v(F).removeChild(F);
    } catch {
      E(F);
    }
  }, da = function(F, V) {
    try {
      Tn(e.removed, {
        attribute: V.getAttributeNode(F),
        from: V
      });
    } catch {
      Tn(e.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(F), F === "is" && !be[F])
      if (Ve || ct)
        try {
          a0(V);
        } catch {
        }
      else
        try {
          V.setAttribute(F, "");
        } catch {
        }
  }, _o = function(F) {
    let V = null, Y = null;
    if (at)
      F = "<remove></remove>" + F;
    else {
      const it = cc(F, /^[\r\n\t ]+/);
      Y = it && it[0];
    }
    wn === "application/xhtml+xml" && Vr === _0 && (F = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + F + "</body></html>");
    const Te = x ? x.createHTML(F) : F;
    if (Vr === _0)
      try {
        V = new g().parseFromString(Te, wn);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = N.createDocument(Vr, "template", null);
      try {
        V.documentElement.innerHTML = qi ? C : Te;
      } catch {
      }
    }
    const ht = V.body || V.documentElement;
    return F && Y && ht.insertBefore(t.createTextNode(Y), ht.childNodes[0] || null), Vr === _0 ? L.call(V, _e ? "html" : "body")[0] : _e ? V.documentElement : ht;
  }, yo = function(F) {
    return S.call(
      F.ownerDocument || F,
      F,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, wo = function(F) {
    return F instanceof m && (typeof F.nodeName != "string" || typeof F.textContent != "string" || typeof F.removeChild != "function" || !(F.attributes instanceof c) || typeof F.removeAttribute != "function" || typeof F.setAttribute != "function" || typeof F.namespaceURI != "string" || typeof F.insertBefore != "function" || typeof F.hasChildNodes != "function");
  }, ko = function(F) {
    return typeof s == "function" && F instanceof s;
  };
  function y0($, F, V) {
    I[$] && Pa(I[$], (Y) => {
      Y.call(e, F, V, jr);
    });
  }
  const Do = function(F) {
    let V = null;
    if (y0("beforeSanitizeElements", F, null), wo(F))
      return a0(F), !0;
    const Y = $e(F.nodeName);
    if (y0("uponSanitizeElement", F, {
      tagName: Y,
      allowedTags: oe
    }), F.hasChildNodes() && !ko(F.firstElementChild) && vt(/<[/\w]/g, F.innerHTML) && vt(/<[/\w]/g, F.textContent) || F.nodeType === Bn.progressingInstruction || te && F.nodeType === Bn.comment && vt(/<[/\w]/g, F.data))
      return a0(F), !0;
    if (!oe[Y] || rt[Y]) {
      if (!rt[Y] && Ao(Y) && (G.tagNameCheck instanceof RegExp && vt(G.tagNameCheck, Y) || G.tagNameCheck instanceof Function && G.tagNameCheck(Y)))
        return !1;
      if (Hi && !Gr[Y]) {
        const Te = v(F) || F.parentNode, ht = w(F) || F.childNodes;
        if (ht && Te) {
          const it = ht.length;
          for (let Et = it - 1; Et >= 0; --Et) {
            const i0 = y(ht[Et], !0);
            i0.__removalCount = (F.__removalCount || 0) + 1, Te.insertBefore(i0, A(F));
          }
        }
      }
      return a0(F), !0;
    }
    return F instanceof o && !t4(F) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && vt(/<\/no(script|embed|frames)/i, F.innerHTML) ? (a0(F), !0) : (ne && F.nodeType === Bn.text && (V = F.textContent, Pa([M, Ee, U], (Te) => {
      V = Fn(V, Te, " ");
    }), F.textContent !== V && (Tn(e.removed, {
      element: F.cloneNode()
    }), F.textContent = V)), y0("afterSanitizeElements", F, null), !1);
  }, Eo = function(F, V, Y) {
    if (uo && (V === "id" || V === "name") && (Y in t || Y in e4))
      return !1;
    if (!(P && !Ye[V] && vt(Z, V))) {
      if (!(nt && vt(se, V))) {
        if (!be[V] || Ye[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ao(F) && (G.tagNameCheck instanceof RegExp && vt(G.tagNameCheck, F) || G.tagNameCheck instanceof Function && G.tagNameCheck(F)) && (G.attributeNameCheck instanceof RegExp && vt(G.attributeNameCheck, V) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(V)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && vt(G.tagNameCheck, Y) || G.tagNameCheck instanceof Function && G.tagNameCheck(Y)))
          ) return !1;
        } else if (!Pi[V]) {
          if (!vt(xe, Fn(Y, ge, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && F !== "script" && ug(Y, "data:") === 0 && fo[F])) {
              if (!(Le && !vt(Ge, Fn(Y, ge, "")))) {
                if (Y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ao = function(F) {
    return F !== "annotation-xml" && cc(F, Ae);
  }, xo = function(F) {
    y0("beforeSanitizeAttributes", F, null);
    const {
      attributes: V
    } = F;
    if (!V)
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let Te = V.length;
    for (; Te--; ) {
      const ht = V[Te], {
        name: it,
        namespaceURI: Et,
        value: i0
      } = ht, kn = $e(it);
      let gt = it === "value" ? i0 : cg(i0);
      if (Y.attrName = kn, Y.attrValue = gt, Y.keepAttr = !0, Y.forceKeepAttr = void 0, y0("uponSanitizeAttribute", F, Y), gt = Y.attrValue, co && (kn === "id" || kn === "name") && (da(it, F), gt = Zf + gt), te && vt(/((--!?|])>)|<\/(style|title)/i, gt)) {
        da(it, F);
        continue;
      }
      if (Y.forceKeepAttr || (da(it, F), !Y.keepAttr))
        continue;
      if (!O && vt(/\/>/i, gt)) {
        da(it, F);
        continue;
      }
      ne && Pa([M, Ee, U], (To) => {
        gt = Fn(gt, To, " ");
      });
      const So = $e(F.nodeName);
      if (Eo(So, kn, gt)) {
        if (x && typeof d == "object" && typeof d.getAttributeType == "function" && !Et)
          switch (d.getAttributeType(So, kn)) {
            case "TrustedHTML": {
              gt = x.createHTML(gt);
              break;
            }
            case "TrustedScriptURL": {
              gt = x.createScriptURL(gt);
              break;
            }
          }
        try {
          Et ? F.setAttributeNS(Et, it, gt) : F.setAttribute(it, gt), wo(F) ? a0(F) : uc(e.removed);
        } catch {
        }
      }
    }
    y0("afterSanitizeAttributes", F, null);
  }, r4 = function $(F) {
    let V = null;
    const Y = yo(F);
    for (y0("beforeSanitizeShadowDOM", F, null); V = Y.nextNode(); )
      y0("uponSanitizeShadowNode", V, null), !Do(V) && (V.content instanceof i && $(V.content), xo(V));
    y0("afterSanitizeShadowDOM", F, null);
  };
  return e.sanitize = function($) {
    let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, Y = null, Te = null, ht = null;
    if (qi = !$, qi && ($ = "<!-->"), typeof $ != "string" && !ko($))
      if (typeof $.toString == "function") {
        if ($ = $.toString(), typeof $ != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!e.isSupported)
      return $;
    if (ke || Gi(F), e.removed = [], typeof $ == "string" && (yn = !1), yn) {
      if ($.nodeName) {
        const i0 = $e($.nodeName);
        if (!oe[i0] || rt[i0])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if ($ instanceof s)
      V = _o("<!---->"), Y = V.ownerDocument.importNode($, !0), Y.nodeType === Bn.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? V = Y : V.appendChild(Y);
    else {
      if (!Ve && !ne && !_e && // eslint-disable-next-line unicorn/prefer-includes
      $.indexOf("<") === -1)
        return x && v0 ? x.createHTML($) : $;
      if (V = _o($), !V)
        return Ve ? null : v0 ? C : "";
    }
    V && at && a0(V.firstChild);
    const it = yo(yn ? $ : V);
    for (; Te = it.nextNode(); )
      Do(Te) || (Te.content instanceof i && r4(Te.content), xo(Te));
    if (yn)
      return $;
    if (Ve) {
      if (ct)
        for (ht = z.call(V.ownerDocument); V.firstChild; )
          ht.appendChild(V.firstChild);
      else
        ht = V;
      return (be.shadowroot || be.shadowrootmode) && (ht = R.call(n, ht, !0)), ht;
    }
    let Et = _e ? V.outerHTML : V.innerHTML;
    return _e && oe["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && vt(qf, V.ownerDocument.doctype.name) && (Et = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + Et), ne && Pa([M, Ee, U], (i0) => {
      Et = Fn(Et, i0, " ");
    }), x && v0 ? x.createHTML(Et) : Et;
  }, e.setConfig = function() {
    let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Gi($), ke = !0;
  }, e.clearConfig = function() {
    jr = null, ke = !1;
  }, e.isValidAttribute = function($, F, V) {
    jr || Gi({});
    const Y = $e($), Te = $e(F);
    return Eo(Y, Te, V);
  }, e.addHook = function($, F) {
    typeof F == "function" && (I[$] = I[$] || [], Tn(I[$], F));
  }, e.removeHook = function($) {
    if (I[$])
      return uc(I[$]);
  }, e.removeHooks = function($) {
    I[$] && (I[$] = []);
  }, e.removeAllHooks = function() {
    I = {};
  }, e;
}
Uf();
const {
  SvelteComponent: Ag,
  append_hydration: xg,
  attr: Nn,
  children: Sg,
  claim_element: gc,
  detach: As,
  element: bc,
  empty: vc,
  init: Tg,
  insert_hydration: Gf,
  noop: _c,
  safe_not_equal: Fg,
  src_url_equal: yc,
  toggle_class: Jr
} = window.__gradio__svelte__internal;
function wc(r) {
  let e, t, n;
  return {
    c() {
      e = bc("div"), t = bc("img"), this.h();
    },
    l(a) {
      e = gc(a, "DIV", { class: !0 });
      var i = Sg(e);
      t = gc(i, "IMG", { src: !0, alt: !0, class: !0 }), i.forEach(As), this.h();
    },
    h() {
      yc(t.src, n = /*value*/
      r[0].image.url) || Nn(t, "src", n), Nn(t, "alt", ""), Nn(t, "class", "svelte-giydt1"), Nn(e, "class", "container svelte-giydt1"), Jr(
        e,
        "table",
        /*type*/
        r[1] === "table"
      ), Jr(
        e,
        "gallery",
        /*type*/
        r[1] === "gallery"
      ), Jr(
        e,
        "selected",
        /*selected*/
        r[2]
      );
    },
    m(a, i) {
      Gf(a, e, i), xg(e, t);
    },
    p(a, i) {
      i & /*value*/
      1 && !yc(t.src, n = /*value*/
      a[0].image.url) && Nn(t, "src", n), i & /*type*/
      2 && Jr(
        e,
        "table",
        /*type*/
        a[1] === "table"
      ), i & /*type*/
      2 && Jr(
        e,
        "gallery",
        /*type*/
        a[1] === "gallery"
      ), i & /*selected*/
      4 && Jr(
        e,
        "selected",
        /*selected*/
        a[2]
      );
    },
    d(a) {
      a && As(e);
    }
  };
}
function Cg(r) {
  let e, t = (
    /*value*/
    r[0] && wc(r)
  );
  return {
    c() {
      t && t.c(), e = vc();
    },
    l(n) {
      t && t.l(n), e = vc();
    },
    m(n, a) {
      t && t.m(n, a), Gf(n, e, a);
    },
    p(n, [a]) {
      /*value*/
      n[0] ? t ? t.p(n, a) : (t = wc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: _c,
    o: _c,
    d(n) {
      n && As(e), t && t.d(n);
    }
  };
}
function Mg(r, e, t) {
  let { value: n } = e, { type: a } = e, { selected: i = !1 } = e;
  return r.$$set = (l) => {
    "value" in l && t(0, n = l.value), "type" in l && t(1, a = l.type), "selected" in l && t(2, i = l.selected);
  }, [n, a, i];
}
class e9 extends Ag {
  constructor(e) {
    super(), Tg(this, e, Mg, Cg, Fg, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Bg,
  add_flush_callback: Ng,
  assign: Vf,
  bind: Ig,
  binding_callbacks: zg,
  check_outros: Lg,
  claim_component: Cr,
  claim_space: jf,
  create_component: Mr,
  destroy_component: Br,
  detach: so,
  empty: kc,
  flush: mt,
  get_spread_object: Wf,
  get_spread_update: Xf,
  group_outros: Rg,
  init: Og,
  insert_hydration: oo,
  mount_component: Nr,
  safe_not_equal: Hg,
  space: Yf,
  transition_in: z0,
  transition_out: L0
} = window.__gradio__svelte__internal;
function Pg(r) {
  let e, t;
  return e = new Ac({
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
        r[16] ? "focus" : "base"
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
      $$slots: { default: [Gg] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Mr(e.$$.fragment);
    },
    l(n) {
      Cr(e.$$.fragment, n);
    },
    m(n, a) {
      Nr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*visible*/
      8 && (i.visible = /*visible*/
      n[3]), a & /*value*/
      1 && (i.variant = /*value*/
      n[0] === null ? "dashed" : "solid"), a & /*dragging*/
      65536 && (i.border_mode = /*dragging*/
      n[16] ? "focus" : "base"), a & /*elem_id*/
      2 && (i.elem_id = /*elem_id*/
      n[1]), a & /*elem_classes*/
      4 && (i.elem_classes = /*elem_classes*/
      n[2]), a & /*container*/
      128 && (i.container = /*container*/
      n[7]), a & /*scale*/
      256 && (i.scale = /*scale*/
      n[8]), a & /*min_width*/
      512 && (i.min_width = /*min_width*/
      n[9]), a & /*$$scope, gradio, root, label, show_label, categories, value, dragging, placeholder, loading_status*/
      33682481 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (z0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      L0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function qg(r) {
  let e, t;
  return e = new Ac({
    props: {
      visible: (
        /*visible*/
        r[3]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        r[16] ? "focus" : "base"
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
      $$slots: { default: [Vg] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Mr(e.$$.fragment);
    },
    l(n) {
      Cr(e.$$.fragment, n);
    },
    m(n, a) {
      Nr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*visible*/
      8 && (i.visible = /*visible*/
      n[3]), a & /*dragging*/
      65536 && (i.border_mode = /*dragging*/
      n[16] ? "focus" : "base"), a & /*elem_id*/
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
      33588337 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
    },
    i(n) {
      t || (z0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      L0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function Ug(r) {
  let e, t;
  return e = new t3({
    props: {
      i18n: (
        /*gradio*/
        r[15].i18n
      ),
      type: "image",
      placeholder: (
        /*placeholder*/
        r[13]
      )
    }
  }), {
    c() {
      Mr(e.$$.fragment);
    },
    l(n) {
      Cr(e.$$.fragment, n);
    },
    m(n, a) {
      Nr(e, n, a), t = !0;
    },
    p(n, a) {
      const i = {};
      a & /*gradio*/
      32768 && (i.i18n = /*gradio*/
      n[15].i18n), a & /*placeholder*/
      8192 && (i.placeholder = /*placeholder*/
      n[13]), e.$set(i);
    },
    i(n) {
      t || (z0(e.$$.fragment, n), t = !0);
    },
    o(n) {
      L0(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function Gg(r) {
  let e, t, n, a, i;
  const l = [
    {
      autoscroll: (
        /*gradio*/
        r[15].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      r[15].i18n
    ) },
    /*loading_status*/
    r[10]
  ];
  let s = {};
  for (let c = 0; c < l.length; c += 1)
    s = Vf(s, l[c]);
  e = new Rf({ props: s }), e.$on(
    "clear_status",
    /*clear_status_handler_1*/
    r[18]
  );
  function o(c) {
    r[21](c);
  }
  let u = {
    upload: (
      /*func*/
      r[19]
    ),
    stream_handler: (
      /*func_1*/
      r[20]
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
    categories: (
      /*categories*/
      r[14]
    ),
    $$slots: { default: [Ug] },
    $$scope: { ctx: r }
  };
  return (
    /*value*/
    r[0] !== void 0 && (u.value = /*value*/
    r[0]), n = new S8({ props: u }), zg.push(() => Ig(n, "value", o)), n.$on(
      "clear",
      /*clear_handler*/
      r[22]
    ), n.$on(
      "drag",
      /*drag_handler*/
      r[23]
    ), n.$on(
      "upload",
      /*upload_handler*/
      r[24]
    ), {
      c() {
        Mr(e.$$.fragment), t = Yf(), Mr(n.$$.fragment);
      },
      l(c) {
        Cr(e.$$.fragment, c), t = jf(c), Cr(n.$$.fragment, c);
      },
      m(c, m) {
        Nr(e, c, m), oo(c, t, m), Nr(n, c, m), i = !0;
      },
      p(c, m) {
        const g = m & /*gradio, loading_status*/
        33792 ? Xf(l, [
          m & /*gradio*/
          32768 && {
            autoscroll: (
              /*gradio*/
              c[15].autoscroll
            )
          },
          m & /*gradio*/
          32768 && { i18n: (
            /*gradio*/
            c[15].i18n
          ) },
          m & /*loading_status*/
          1024 && Wf(
            /*loading_status*/
            c[10]
          )
        ]) : {};
        e.$set(g);
        const d = {};
        m & /*gradio*/
        32768 && (d.upload = /*func*/
        c[19]), m & /*gradio*/
        32768 && (d.stream_handler = /*func_1*/
        c[20]), m & /*root*/
        4096 && (d.root = /*root*/
        c[12]), m & /*label*/
        16 && (d.label = /*label*/
        c[4]), m & /*show_label*/
        32 && (d.show_label = /*show_label*/
        c[5]), m & /*categories*/
        16384 && (d.categories = /*categories*/
        c[14]), m & /*$$scope, gradio, placeholder*/
        33595392 && (d.$$scope = { dirty: m, ctx: c }), !a && m & /*value*/
        1 && (a = !0, d.value = /*value*/
        c[0], Ng(() => a = !1)), n.$set(d);
      },
      i(c) {
        i || (z0(e.$$.fragment, c), z0(n.$$.fragment, c), i = !0);
      },
      o(c) {
        L0(e.$$.fragment, c), L0(n.$$.fragment, c), i = !1;
      },
      d(c) {
        c && so(t), Br(e, c), Br(n, c);
      }
    }
  );
}
function Vg(r) {
  let e, t, n, a;
  const i = [
    {
      autoscroll: (
        /*gradio*/
        r[15].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      r[15].i18n
    ) },
    /*loading_status*/
    r[10]
  ];
  let l = {};
  for (let s = 0; s < i.length; s += 1)
    l = Vf(l, i[s]);
  return e = new Rf({ props: l }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    r[17]
  ), n = new G7({
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
        r[15].i18n
      )
    }
  }), {
    c() {
      Mr(e.$$.fragment), t = Yf(), Mr(n.$$.fragment);
    },
    l(s) {
      Cr(e.$$.fragment, s), t = jf(s), Cr(n.$$.fragment, s);
    },
    m(s, o) {
      Nr(e, s, o), oo(s, t, o), Nr(n, s, o), a = !0;
    },
    p(s, o) {
      const u = o & /*gradio, loading_status*/
      33792 ? Xf(i, [
        o & /*gradio*/
        32768 && {
          autoscroll: (
            /*gradio*/
            s[15].autoscroll
          )
        },
        o & /*gradio*/
        32768 && { i18n: (
          /*gradio*/
          s[15].i18n
        ) },
        o & /*loading_status*/
        1024 && Wf(
          /*loading_status*/
          s[10]
        )
      ]) : {};
      e.$set(u);
      const c = {};
      o & /*value*/
      1 && (c.value = /*value*/
      s[0]), o & /*label*/
      16 && (c.label = /*label*/
      s[4]), o & /*show_label*/
      32 && (c.show_label = /*show_label*/
      s[5]), o & /*show_download_button*/
      64 && (c.show_download_button = /*show_download_button*/
      s[6]), o & /*gradio*/
      32768 && (c.i18n = /*gradio*/
      s[15].i18n), n.$set(c);
    },
    i(s) {
      a || (z0(e.$$.fragment, s), z0(n.$$.fragment, s), a = !0);
    },
    o(s) {
      L0(e.$$.fragment, s), L0(n.$$.fragment, s), a = !1;
    },
    d(s) {
      s && so(t), Br(e, s), Br(n, s);
    }
  };
}
function jg(r) {
  let e, t, n, a;
  const i = [qg, Pg], l = [];
  function s(o, u) {
    return (
      /*interactive*/
      o[11] ? 1 : 0
    );
  }
  return e = s(r), t = l[e] = i[e](r), {
    c() {
      t.c(), n = kc();
    },
    l(o) {
      t.l(o), n = kc();
    },
    m(o, u) {
      l[e].m(o, u), oo(o, n, u), a = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? l[e].p(o, u) : (Rg(), L0(l[c], 1, 1, () => {
        l[c] = null;
      }), Lg(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), z0(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      a || (z0(t), a = !0);
    },
    o(o) {
      L0(t), a = !1;
    },
    d(o) {
      o && so(n), l[e].d(o);
    }
  };
}
function Wg(r, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { value: l = null } = e, { label: s } = e, { show_label: o } = e, { show_download_button: u } = e, { container: c = !0 } = e, { scale: m = null } = e, { min_width: g = void 0 } = e, { loading_status: d } = e, { interactive: _ } = e, { root: y } = e, { placeholder: E = void 0 } = e, { categories: A = [] } = e, { gradio: w } = e, v;
  const x = () => w.dispatch("clear_status", d), C = () => w.dispatch("clear_status", d), N = (...M) => w.client.upload(...M), S = (...M) => w.client.stream(...M);
  function z(M) {
    l = M, t(0, l);
  }
  const L = () => w.dispatch("clear"), R = ({ detail: M }) => t(16, v = M), I = () => w.dispatch("upload");
  return r.$$set = (M) => {
    "elem_id" in M && t(1, n = M.elem_id), "elem_classes" in M && t(2, a = M.elem_classes), "visible" in M && t(3, i = M.visible), "value" in M && t(0, l = M.value), "label" in M && t(4, s = M.label), "show_label" in M && t(5, o = M.show_label), "show_download_button" in M && t(6, u = M.show_download_button), "container" in M && t(7, c = M.container), "scale" in M && t(8, m = M.scale), "min_width" in M && t(9, g = M.min_width), "loading_status" in M && t(10, d = M.loading_status), "interactive" in M && t(11, _ = M.interactive), "root" in M && t(12, y = M.root), "placeholder" in M && t(13, E = M.placeholder), "categories" in M && t(14, A = M.categories), "gradio" in M && t(15, w = M.gradio);
  }, r.$$.update = () => {
    r.$$.dirty & /*value, gradio*/
    32769 && w.dispatch("change");
  }, [
    l,
    n,
    a,
    i,
    s,
    o,
    u,
    c,
    m,
    g,
    d,
    _,
    y,
    E,
    A,
    w,
    v,
    x,
    C,
    N,
    S,
    z,
    L,
    R,
    I
  ];
}
class t9 extends Bg {
  constructor(e) {
    super(), Og(this, e, Wg, jg, Hg, {
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
      categories: 14,
      gradio: 15
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), mt();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), mt();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(e) {
    this.$$set({ visible: e }), mt();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), mt();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(e) {
    this.$$set({ label: e }), mt();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), mt();
  }
  get show_download_button() {
    return this.$$.ctx[6];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), mt();
  }
  get container() {
    return this.$$.ctx[7];
  }
  set container(e) {
    this.$$set({ container: e }), mt();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(e) {
    this.$$set({ scale: e }), mt();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), mt();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), mt();
  }
  get interactive() {
    return this.$$.ctx[11];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), mt();
  }
  get root() {
    return this.$$.ctx[12];
  }
  set root(e) {
    this.$$set({ root: e }), mt();
  }
  get placeholder() {
    return this.$$.ctx[13];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), mt();
  }
  get categories() {
    return this.$$.ctx[14];
  }
  set categories(e) {
    this.$$set({ categories: e }), mt();
  }
  get gradio() {
    return this.$$.ctx[15];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), mt();
  }
}
export {
  e9 as BaseExample,
  S8 as BaseImageUploader,
  G7 as BaseStaticImage,
  t9 as default
};
