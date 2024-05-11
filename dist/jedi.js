function ee() {
  const i = [];
  return function(t, e) {
    if (typeof e != "object" || e === null)
      return e;
    for (; i.length > 0 && i.at(-1) !== this; )
      i.pop();
    return i.includes(e) ? "[Circular]" : (i.push(e), e);
  };
}
function k(i) {
  if (!(typeof i > "u"))
    return JSON.parse(JSON.stringify(i, ee()));
}
function se(i) {
  return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Dt(i, t, e) {
  return i.replace(new RegExp(se(t), "g"), e);
}
function S(i) {
  return Dt(Dt(i, "#", "root"), "/", "-");
}
function N(i, t) {
  return Object.prototype.hasOwnProperty.call(i, t);
}
function It(i) {
  return Object.keys(i).sort().reduce((t, e) => (t[e] = i[e], t), {});
}
function wt(i, t) {
  return m(i) && m(t) && (i = It(i), t = It(t)), JSON.stringify(i) === JSON.stringify(t);
}
function Pt(i, t) {
  return !wt(i, t);
}
function At(i) {
  return i === null;
}
function l(i) {
  return typeof i < "u";
}
function U(i) {
  return typeof i > "u";
}
function O(i) {
  return typeof i == "number";
}
function H(i) {
  return O(i) && i === Math.floor(i);
}
function V(i) {
  return typeof i == "string";
}
function P(i) {
  return typeof i == "boolean";
}
function x(i) {
  return Array.isArray(i);
}
function m(i) {
  return !At(i) && !x(i) && typeof i == "object";
}
function ie(i) {
  let t = "any";
  return O(i) ? t = H(i) ? "integer" : "number" : V(i) ? t = "string" : P(i) ? t = "boolean" : x(i) ? t = "array" : At(i) ? t = "null" : m(i) && (t = "object"), t;
}
function K(i, ...t) {
  if (!t.length)
    return i;
  const e = t.shift();
  return m(i) && m(e) && Object.keys(e).forEach((s) => {
    m(e[s]) ? (i[s] || Object.assign(i, {
      [s]: {}
    }), K(i[s], e[s])) : Object.assign(i, {
      [s]: e[s]
    });
  }), K(i, ...t);
}
function $t(i, t) {
  return Object.keys(t).forEach(function(e) {
    e in i && typeof i[e] == typeof t[e] && (i[e] = t[e]);
  }), i;
}
function ne(i, t) {
  const e = t.split(".");
  let s = i;
  for (const n of e)
    if (Array.isArray(s) && /^\d+$/.test(n)) {
      const r = parseInt(n);
      if (r >= 0 && r < s.length)
        s = s[r];
      else
        return;
    } else if (N(s, n))
      s = s[n];
    else
      return;
  return s;
}
function y(i, t) {
  return i.replace(/{{(.*?)}}/g, (e) => {
    e = e.replace(/\s/g, "");
    const s = e.split(/{{|}}/)[1];
    return ne(t, s);
  });
}
function re(i, t, e) {
  return Math.max(t, Math.min(i, e));
}
function Kt(i) {
  const t = [], e = /* @__PURE__ */ new Set();
  for (const s of i) {
    const n = JSON.stringify(s);
    e.has(n) || (e.add(n), t.push(s));
  }
  return t;
}
function St(i) {
  return m(i.additionalProperties) || P(i.additionalProperties) ? i.additionalProperties : void 0;
}
function ae(i) {
  return m(i.propertyNames) || P(i.propertyNames) ? i.propertyNames : void 0;
}
function zt(i) {
  return x(i.allOf) ? i.allOf : void 0;
}
function $(i) {
  return x(i.anyOf) ? i.anyOf : void 0;
}
function oe(i) {
  return i.const;
}
function ce(i) {
  return m(i.contains) || P(i.contains) ? i.contains : void 0;
}
function de(i) {
  return i.default;
}
function Jt(i) {
  return m(i.dependentRequired) ? i.dependentRequired : void 0;
}
function le(i) {
  return m(i.dependentSchemas) ? i.dependentSchemas : void 0;
}
function j(i) {
  return V(i.description) ? i.description : void 0;
}
function Ot(i) {
  return m(i.else) || P(i.else) ? i.else : void 0;
}
function T(i) {
  if (x(i.enum) && i.enum.length > 0)
    return i.enum;
}
function he(i) {
  return O(i.exclusiveMaximum) ? i.exclusiveMaximum : void 0;
}
function ue(i) {
  return O(i.exclusiveMinimum) ? i.exclusiveMinimum : void 0;
}
function B(i) {
  return V(i.format) ? i.format : void 0;
}
function jt(i) {
  if (m(i.if) || P(i.if))
    return i.if;
}
function Gt(i) {
  return m(i.items) || P(i.items) ? i.items : void 0;
}
function pe(i) {
  return O(i.maximum) ? i.maximum : void 0;
}
function me(i) {
  if (H(i.maxContains) && i.maxContains >= 0)
    return i.maxContains;
}
function _t(i) {
  if (H(i.maxItems) && i.maxItems >= 0)
    return i.maxItems;
}
function fe(i) {
  if (H(i.maxLength) && i.maxLength >= 0)
    return i.maxLength;
}
function ge(i) {
  if (H(i.maxProperties))
    return i.maxProperties;
}
function ve(i) {
  return O(i.minimum) ? i.minimum : void 0;
}
function be(i) {
  if (H(i.minContains) && i.minContains >= 0)
    return i.minContains;
}
function Wt(i) {
  if (H(i.minItems) && i.minItems >= 0)
    return i.minItems;
}
function Ce(i) {
  if (H(i.minLength) && i.minLength >= 0)
    return i.minLength;
}
function ye(i) {
  if (H(i.minProperties) && i.minProperties >= 0)
    return i.minProperties;
}
function Le(i) {
  if (O(i.multipleOf) && i.multipleOf >= 0)
    return i.multipleOf;
}
function Ee(i) {
  return m(i.not) || P(i.not) ? i.not : void 0;
}
function f(i, t) {
  return i.options && i.options[t] ? i.options[t] : void 0;
}
function xe(i) {
  return V(i.pattern) ? i.pattern : void 0;
}
function kt(i) {
  return m(i.patternProperties) ? i.patternProperties : void 0;
}
function Tt(i) {
  return x(i.prefixItems) ? i.prefixItems : void 0;
}
function Mt(i) {
  return m(i.properties) ? i.properties : void 0;
}
function Ft(i) {
  return P(i.readOnly) ? i.readOnly : void 0;
}
function Qt(i) {
  return x(i.required) ? [...new Set(i.required)] : void 0;
}
function Vt(i) {
  return m(i.then) || P(i.then) ? i.then : void 0;
}
function I(i) {
  return V(i.title) ? i.title : void 0;
}
function R(i) {
  if (V(i.type) || x(i.type))
    return i.type;
}
function z(i) {
  return x(i.oneOf) ? i.oneOf : void 0;
}
function Ie(i) {
  return P(i.unevaluatedProperties) ? i.unevaluatedProperties : void 0;
}
function we(i) {
  return P(i.uniqueItems) ? i.uniqueItems : void 0;
}
function J(i, t, e, s) {
  let n = [];
  const r = zt(e);
  return l(r) && r.forEach((a) => {
    const o = new w({ refParser: i.refParser, schema: a, data: t, rootName: s }), c = o.getErrors();
    o.destroy(), n = [...n, ...c], n = Kt(n);
  }), n;
}
const v = {
  errorAdditionalProperties: 'Has additional property "{{ property }}" but no additional properties are allowed.',
  errorAnyOf: "Must validate against at least one of the provided schemas.",
  errorConst: "Must have value of: {{ const }}.",
  errorContains: "Must contain at least one item matching the provided schema.",
  errorDependentRequired: "Must have the required properties: {{ dependentRequired }}.",
  errorEnum: "Must be one of the enumerated values: {{ enum }}.",
  errorExclusiveMaximum: "Must be less than {{ exclusiveMaximum }}.",
  errorExclusiveMinimum: "Must be greater than {{ exclusiveMinimum }}.",
  errorFormat: "Must be a valid {{ format }}.",
  errorItems: "Must have items that validate against the provided schema.",
  errorMaximum: "Must be at most {{ maximum }}.",
  errorMaxItems: "Must have at most {{ maxItems }} items.",
  errorMaxLength: "Must be at most {{ maxLength }} characters long.",
  errorMaxProperties: "Must have at most {{ maxProperties }} properties.",
  errorMaxContains: "Must contain at most {{ maxContains }} items matching the provided schema. It currently contains {{ counter }}.",
  errorMinContains: "Must contain at least {{ minContains }} items matching the provided schema. It currently contains {{ counter }}.",
  errorMinimum: "Must be at least {{ minimum }}.",
  errorMinItems: "Must have at least {{ minItems }} items.",
  errorMinLength: "Must be at least {{ minLength }} characters long.",
  errorMinProperties: "Must have at least {{ minProperties }} properties.",
  errorMultipleOf: "Must be multiple of {{ multipleOf }}.",
  errorNot: "Must not validate against the provided schema.",
  errorOneOf: "Must validate against exactly one of the provided schemas. It currently validates against {{ counter }} of the schemas.",
  errorPattern: 'Must match the pattern: "{{ pattern }}".',
  errorPrefixItems: "Item {{ index }} fails validation.",
  errorPropertyNames: 'Property name "{{ propertyName }}" fails validation.',
  errorRequired: "Must have the required properties: {{ required }}.",
  errorType: "Must be of type {{ type }}.",
  errorUnevaluatedProperties: 'Has invalid unevaluated property "{{ property }}"',
  errorUniqueItems: "Must have unique items."
};
function G(i, t, e, s, n) {
  const r = [], a = Ce(e);
  return V(t) && l(a) && (t = t.replace(/[\uDCA9]/g, ""), t.length < a && r.push({
    messages: [
      y(v.errorMinLength, {
        minLength: a
      })
    ],
    path: n,
    constrain: "minLength"
  })), r;
}
function _(i, t, e, s, n) {
  const r = [], a = $(e);
  if (l(a)) {
    let o = !1;
    a.forEach((c) => {
      const d = new w({ refParser: i.refParser, schema: c, data: t }), h = d.getErrors();
      d.destroy(), h.length === 0 && (o = !0);
    }), o || r.push({
      messages: [
        v.errorAnyOf
      ],
      path: n,
      constrain: "anyOf"
    });
  }
  return r;
}
function W(i, t, e, s, n) {
  const r = [], a = T(e);
  return l(a) && !a.some((c) => JSON.stringify(t) === JSON.stringify(c)) && r.push({
    messages: [
      y(v.errorEnum, {
        enum: JSON.stringify(a)
      })
    ],
    path: n,
    constrain: "enum"
  }), r;
}
function Q(i, t, e, s, n) {
  const r = [], a = he(e);
  return O(t) && l(a) && t >= a && r.push({
    messages: [
      y(v.errorExclusiveMaximum, {
        exclusiveMaximum: a
      })
    ],
    path: n,
    constrain: "exclusiveMaximum"
  }), r;
}
function X(i, t, e, s, n) {
  const r = [], a = ue(e);
  return O(t) && l(a) && t <= a && r.push({
    messages: [
      y(v.errorExclusiveMinimum, {
        exclusiveMinimum: a
      })
    ],
    path: n,
    constrain: "exclusiveMinimum"
  }), r;
}
function Y(i, t, e, s, n) {
  const r = [], a = B(e);
  let o = i.validateFormat;
  if (f(e, "validateFormat") && (o = e.options.validateFormat), l(a) && V(t) && o) {
    let c;
    a === "email" && (c = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)), a === "url" && (c = new RegExp(/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu)), a === "uuid" && (c = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i)), l(c) && !c.test(t) && r.push({
      messages: [
        y(v.errorFormat, { format: a })
      ],
      path: n,
      constrain: "format"
    });
  }
  return r;
}
function Z(i, t, e, s, n) {
  const r = [], a = Gt(e), o = Tt(e);
  if (x(t) && l(a)) {
    const c = l(o) ? o.length : 0;
    a === !1 && t.length > 0 && t.length > c && r.push({
      messages: [v.errorItems],
      path: n,
      constrain: "items"
    });
  }
  return r;
}
function tt(i, t, e, s, n) {
  const r = [], a = _t(e);
  return x(t) && l(a) && t.length > a && r.push({
    messages: [
      y(v.errorMaxItems, {
        maxItems: a
      })
    ],
    path: n,
    constrain: "maxItems"
  }), r;
}
function et(i, t, e, s, n) {
  const r = [], a = fe(e);
  return V(t) && l(a) && (t = t.replace(/[\uDCA9]/g, ""), t.length > a && r.push({
    messages: [
      y(v.errorMaxLength, {
        maxLength: a
      })
    ],
    path: n,
    constrain: "maxLength"
  })), r;
}
function st(i, t, e, s, n) {
  const r = [], a = ge(e);
  return m(t) && l(a) && Object.keys(t).length > a && r.push({
    messages: [
      y(v.errorMaxProperties, {
        maxProperties: a
      })
    ],
    path: n,
    constrain: "maxProperties"
  }), r;
}
function it(i, t, e, s, n) {
  const r = [], a = ve(e);
  return O(t) && l(a) && t < a && r.push({
    messages: [
      y(v.errorMinimum, {
        minimum: a
      })
    ],
    path: n,
    constrain: "minimum"
  }), r;
}
function nt(i, t, e, s, n) {
  const r = [], a = Wt(e);
  return x(t) && l(a) && t.length < a && r.push({
    messages: [
      y(v.errorMinItems, {
        minItems: a
      })
    ],
    path: n,
    constrain: "minItems"
  }), r;
}
function rt(i, t, e, s, n) {
  const r = [], a = ye(e);
  return m(t) && l(a) && Object.keys(t).length < a && r.push({
    messages: [
      y(v.errorMinProperties, {
        minProperties: a
      })
    ],
    path: n,
    constrain: "minProperties"
  }), r;
}
function at(i, t, e, s, n) {
  const r = [], a = Le(e);
  if (O(t) && l(a)) {
    if (t === 0)
      return r;
    (!(t / a === Math.floor(t / a)) || t.toString().includes("e")) && r.push({
      messages: [
        y(v.errorMultipleOf, {
          multipleOf: a
        })
      ],
      path: n,
      constrain: "multipleOf"
    });
  }
  return r;
}
function ot(i, t, e, s, n) {
  const r = [], a = Ee(e);
  if (l(a)) {
    const o = new w({ refParser: i.refParser, schema: a, data: t }), c = o.getErrors();
    o.destroy(), c.length === 0 && r.push({
      messages: [
        y(v.errorNot)
      ],
      path: n,
      constrain: "not"
    });
  }
  return r;
}
function ct(i, t, e, s, n) {
  const r = [], a = z(e);
  if (l(a)) {
    let o = 0;
    a.forEach((c) => {
      const d = new w({ refParser: i.refParser, schema: c, data: t }), h = d.getErrors();
      d.destroy(), h.length === 0 && o++;
    }), o !== 1 && r.push({
      messages: [
        y(v.errorOneOf, {
          counter: o
        })
      ],
      path: n,
      constrain: "oneOf"
    });
  }
  return r;
}
function dt(i, t, e, s, n) {
  const r = [], a = xe(e);
  return V(t) && l(a) && !new RegExp(a).test(t) && r.push({
    messages: [
      y(v.errorPattern, {
        pattern: a
      })
    ],
    path: n,
    constrain: "pattern"
  }), r;
}
function lt(i, t, e, s) {
  let n = [];
  const r = kt(e);
  return m(t) && l(r) && Object.keys(t).forEach((a) => {
    Object.keys(r).forEach((o) => {
      if (new RegExp(o).test(a)) {
        const d = r[o], h = new w({
          refParser: i.refParser,
          schema: d,
          data: t[a]
        }), u = h.getErrors().map((p) => ({
          messages: p.messages,
          path: s + "/" + a,
          constrain: "patternProperties"
        }));
        n = [...n, ...u], h.destroy();
      }
    });
  }), n;
}
function ht(i, t, e, s, n) {
  const r = [], a = Qt(e);
  if (m(t) && l(a)) {
    const o = [], c = Object.keys(t);
    a.forEach((h) => {
      c.includes(h) || o.push(h);
    }), o.length > 0 && r.push({
      messages: [
        y(v.errorRequired, {
          required: o.join(", ")
        })
      ],
      path: n,
      constrain: "required"
    });
  }
  return r;
}
function ut(i, t, e, s, n) {
  const r = [], a = R(e);
  if (a === "any")
    return r;
  if (l(a)) {
    const o = {
      string: (d) => V(d),
      number: (d) => O(d),
      integer: (d) => H(d),
      boolean: (d) => P(d),
      array: (d) => x(d),
      object: (d) => m(d),
      null: (d) => At(d)
    };
    let c = !0;
    x(a) ? c = a.some((d) => o[d](t)) : c = o[a](t), c || r.push({
      messages: [
        y(v.errorType, {
          type: a,
          valueType: ie(t)
        })
      ],
      path: n,
      constrain: "type"
    });
  }
  return r;
}
function pt(i, t, e, s, n) {
  const r = [], a = pe(e);
  return O(t) && l(a) && t > a && r.push({
    messages: [
      y(v.errorMaximum, {
        maximum: a
      })
    ],
    path: n,
    constrain: "maximum"
  }), r;
}
function mt(i, t, e, s, n) {
  const r = [], a = we(e);
  if (x(t) && l(a) && a === !0) {
    const o = [];
    let c = !1;
    for (let h = 0; h < t.length; h++) {
      let u = t[h];
      m(u) && (u = It(u));
      const p = JSON.stringify(u);
      if (c = o.some((g) => g === p), c)
        break;
      o.push(p);
    }
    c && r.push({
      messages: [
        v.errorUniqueItems
      ],
      path: n,
      constrain: "uniqueItems"
    });
  }
  return r;
}
function ft(i, t, e, s, n) {
  let r = [];
  const a = St(e), o = kt(e), c = Mt(e);
  if (m(t) && l(a)) {
    const d = l(c) ? c : {}, h = a, u = o;
    d && Object.keys(t).forEach((p) => {
      let g = !1;
      if (l(u) && Object.keys(u).forEach((b) => {
        g = new RegExp(b).test(p);
      }), !g && h === !1 && !N(d, p) && r.push({
        messages: [
          y(v.errorAdditionalProperties, {
            property: p
          })
        ],
        path: n,
        constrain: "additionalProperties"
      }), !g && m(h) && !N(d, p)) {
        const b = new w({
          refParser: i.refParser,
          schema: h,
          data: t[p]
        }), L = b.getErrors().map((C) => ({
          messages: C.messages,
          path: p,
          constrain: "additionalProperties"
        }));
        r = [...r, ...L], b.destroy();
      }
    });
  }
  return r;
}
const Se = {
  additionalProperties: ft,
  allOf: J,
  anyOf: _,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  items: Z,
  maximum: pt,
  maxItems: tt,
  maxLength: et,
  maxProperties: st,
  minimum: it,
  minItems: nt,
  minLength: G,
  minProperties: rt,
  multipleOf: at,
  not: ot,
  oneOf: ct,
  pattern: dt,
  patternProperties: lt,
  required: ht,
  type: ut,
  uniqueItems: mt
};
function vt(i, t, e, s, n) {
  const r = [], a = oe(e);
  return l(a) && Pt(t, a) && r.push({
    messages: [
      y(v.errorConst, {
        const: JSON.stringify(a)
      })
    ],
    path: n,
    constrain: "const"
  }), r;
}
function bt(i, t, e, s, n) {
  const r = [], a = ce(e), o = be(e), c = me(e);
  if (x(t) && l(a)) {
    let d = 0;
    t.forEach((u) => {
      const p = new w({ refParser: i.refParser, schema: a, data: u });
      p.getErrors().length === 0 && d++, p.destroy();
    });
    const h = d === 0;
    l(o) ? d < o && r.push({
      messages: [
        y(v.errorMinContains, {
          counter: d,
          minContains: o
        })
      ],
      path: n,
      constrain: "minContains"
    }) : h && r.push({
      messages: [v.errorContains],
      path: n,
      constrain: "contains"
    }), l(c) && d > c && r.push({
      messages: [
        y(v.errorMaxContains, {
          counter: d,
          maxContains: c
        })
      ],
      path: n,
      constrain: "maxContains"
    });
  }
  return r;
}
function Ct(i, t, e, s, n) {
  const r = [], a = Jt(e);
  if (m(t) && l(a)) {
    let o = [];
    Object.keys(a).forEach((d) => {
      l(t[d]) && (o = a[d].filter((u) => !N(t, u)));
    }), o.length > 0 && r.push({
      messages: [
        y(v.errorDependentRequired, {
          dependentRequired: o.join(", ")
        })
      ],
      path: n,
      constrain: "dependentRequired"
    });
  }
  return r;
}
function yt(i, t, e) {
  let s = [];
  const n = le(e);
  return m(t) && l(n) && Object.keys(n).forEach((r) => {
    if (l(t[r])) {
      const a = n[r], o = new w({ refParser: i.refParser, schema: a, data: t }), c = o.getErrors();
      o.destroy(), s = [...s, ...c];
    }
  }), s;
}
function Lt(i, t, e) {
  const s = [], n = jt(e), r = Vt(e), a = Ot(e);
  if (l(n)) {
    if (U(r) && U(a))
      return s;
    const o = new w({ refParser: i.refParser, schema: n, data: t }), c = o.getErrors();
    o.destroy();
    let d = [], h = [];
    if (l(r)) {
      const u = new w({ refParser: i.refParser, schema: r, data: t });
      d = u.getErrors(), u.destroy();
    }
    if (l(a)) {
      const u = new w({ refParser: i.refParser, schema: a, data: t });
      h = u.getErrors(), u.destroy();
    }
    if (n === !0)
      return d;
    if (n === !1)
      return h;
    if (c.length === 0)
      return d;
    if (c.length > 0)
      return h;
  }
  return s;
}
function Et(i, t, e, s, n) {
  const r = [], a = Tt(e);
  return x(t) && l(a) && a.forEach((o, c) => {
    const d = t[c];
    if (l(d)) {
      const h = new w({ refParser: i.refParser, schema: o, data: d }), u = h.getErrors();
      h.destroy(), u.length > 0 && r.push({
        messages: [
          y(v.errorPrefixItems, {
            index: c
          })
        ],
        path: n,
        constrain: "prefixItems"
      });
    }
  }), r;
}
const Pe = {
  additionalProperties: ft,
  allOf: J,
  anyOf: _,
  const: vt,
  contains: bt,
  dependentRequired: Ct,
  dependentSchemas: yt,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Lt,
  items: Z,
  maximum: pt,
  maxItems: tt,
  maxLength: et,
  maxProperties: st,
  minimum: it,
  minItems: nt,
  minLength: G,
  minProperties: rt,
  multipleOf: at,
  not: ot,
  oneOf: ct,
  pattern: dt,
  patternProperties: lt,
  prefixItems: Et,
  required: ht,
  type: ut,
  uniqueItems: mt
}, Ae = {
  additionalProperties: ft,
  allOf: J,
  anyOf: _,
  const: vt,
  contains: bt,
  dependentRequired: Ct,
  dependentSchemas: yt,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Lt,
  items: Z,
  maximum: pt,
  maxItems: tt,
  maxLength: et,
  maxProperties: st,
  minimum: it,
  minItems: nt,
  minLength: G,
  minProperties: rt,
  multipleOf: at,
  not: ot,
  oneOf: ct,
  pattern: dt,
  patternProperties: lt,
  prefixItems: Et,
  required: ht,
  type: ut,
  uniqueItems: mt
};
function Xt(i, t, e, s, n) {
  let r = [];
  const a = Ie(e), o = kt(e), c = Mt(e), d = zt(e), h = $(e), u = z(e);
  if (m(t) && l(a)) {
    let p = l(c) ? c : {};
    const g = a, b = o;
    [
      d,
      h,
      u
    ].forEach((C) => {
      l(C) && C.forEach((E) => {
        l(E.properties) && (p = { ...p, ...E.properties });
      });
    }), p && Object.keys(t).forEach((C) => {
      let E = !1;
      if (l(b) && Object.keys(b).forEach((q) => {
        E = new RegExp(q).test(C);
      }), !E && g === !1 && !N(p, C) && r.push({
        messages: [
          y(v.errorUnevaluatedProperties, {
            property: C
          })
        ],
        path: n,
        constrain: "unevaluatedProperties"
      }), !E && m(g) && !N(p, C)) {
        const q = new w({
          refParser: i.refParser,
          schema: g,
          data: t[C]
        }), M = q.getErrors().map((A) => ({
          messages: A.messages,
          path: C,
          constrain: "unevaluatedProperties"
        }));
        r = [...r, ...M], q.destroy();
      }
    });
  }
  return r;
}
const Oe = {
  additionalProperties: ft,
  allOf: J,
  anyOf: _,
  const: vt,
  contains: bt,
  dependentRequired: Ct,
  dependentSchemas: yt,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Lt,
  items: Z,
  maximum: pt,
  maxItems: tt,
  maxLength: et,
  maxProperties: st,
  minimum: it,
  minItems: nt,
  minLength: G,
  minProperties: rt,
  multipleOf: at,
  not: ot,
  oneOf: ct,
  pattern: dt,
  patternProperties: lt,
  prefixItems: Et,
  required: ht,
  type: ut,
  unevaluatedProperties: Xt,
  uniqueItems: mt
};
function je(i, t, e, s, n) {
  const r = [], a = ae(e);
  return m(t) && l(a) && Object.keys(t).forEach((o) => {
    new w({
      refParser: i.refParser,
      schema: a,
      data: o
    }).getErrors().length > 0 && r.push({
      messages: [
        y(v.errorPropertyNames, { propertyName: o })
      ],
      path: n,
      constrain: "propertyNames"
    });
  }), r;
}
const Ut = {
  additionalProperties: ft,
  allOf: J,
  anyOf: _,
  const: vt,
  contains: bt,
  dependentRequired: Ct,
  dependentSchemas: yt,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Lt,
  items: Z,
  maximum: pt,
  maxItems: tt,
  maxLength: et,
  maxProperties: st,
  minimum: it,
  minItems: nt,
  minLength: G,
  minProperties: rt,
  multipleOf: at,
  not: ot,
  oneOf: ct,
  pattern: dt,
  patternProperties: lt,
  prefixItems: Et,
  propertyNames: je,
  required: ht,
  type: ut,
  unevaluatedProperties: Xt,
  uniqueItems: mt
};
class ke {
  constructor(t = {}) {
    this.refParser = t.refParser, this.validateFormat = t.validateFormat ? t.validateFormat : !1, this.draft = Ut, this.jsonSchemaDrafts = {
      "http://json-schema.org/draft-04/schema#": Se,
      "http://json-schema.org/draft-06/schema#": Pe,
      "http://json-schema.org/draft-07/schema#": Ae,
      "https://json-schema.org/draft/2019-09/schema": Oe,
      "https://json-schema.org/draft/2020-12/schema": Ut
    };
  }
  /**
   * Validates a value against it's schema
   */
  getErrors(t, e, s, n) {
    let r = [];
    const a = f(e, "messages"), o = k(e);
    return P(o) && o === !0 ? r : P(o) && o === !1 ? [{
      messages: l(a) ? a : ["invalid"],
      path: n
    }] : (Object.keys(this.draft).forEach((c) => {
      if (N(o, c)) {
        const d = this.draft[c], h = d(this, t, e, s, n);
        h && (r = [...r, ...h]);
      }
    }), r.length > 0 && a && (r = [
      {
        messages: a,
        path: n
      }
    ]), r);
  }
}
class Yt {
  constructor() {
    this.listeners = [];
  }
  /**
   * Adds a named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed when this event is emitted
   */
  on(t, e) {
    this.listeners.push({ name: t, callback: e });
  }
  /**
   * Triggers the callback function of a named event listener
   * @public
   * @param {string} name - The name of the event to be emitted
   * @param {*} payload - Payload containing data that is passed along with the callback function
   */
  emit(t, e = void 0) {
    this.listeners.filter((n) => n.name === t).forEach((n) => {
      n.callback(e);
    });
  }
  /**
   * Deletes all properties of the class
   */
  destroy() {
    Object.keys(this).forEach((t) => {
      delete this[t];
    });
  }
}
class D extends Yt {
  constructor(t) {
    super(), this.jedi = t.jedi, this.path = t.path || this.jedi.rootName, this.schema = t.schema, this.value = l(t.value) ? t.value : void 0, this.isActive = !0, this.parent = t.parent || null, this.children = [], this.ui = null, this.init();
  }
  /**
   * Initializes and register the instance
   */
  init() {
    this.register(), this.setInitialValue(), this.prepare(), this.setDefaultValue(), this.jedi.options.container && this.setUI(), this.on("change", () => {
      this.parent && this.parent.onChildChange();
    });
  }
  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI() {
  }
  /**
   * Return the last part of the instance path
   */
  getKey() {
    return this.path.split(this.jedi.pathSeparator).pop();
  }
  /**
   * Adds a child instance pointer to the instances list
   */
  register() {
    this.jedi.register(this);
  }
  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister() {
    this.jedi.unregister(this);
  }
  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue() {
    if (U(this.value)) {
      let t;
      const e = R(this.schema);
      e === "boolean" && (t = !1), e === "number" && (t = 0), e === "integer" && (t = 0), e === "string" && (t = ""), e === "array" && (t = []), e === "object" && (t = {}), e === "null" && (t = null), this.value = t;
    }
  }
  setDefaultValue() {
    const t = de(this.schema);
    l(t) && this.setValue(t, !1);
  }
  /**
   * Returns the value of the instance
   */
  getValue() {
    return this.value;
  }
  /**
   * Sets the instance value
   */
  setValue(t, e = !0) {
    this.value = t, this.emit("set-value", t), e && this.emit("change");
  }
  /**
   * Fires when a child's instance state changes
   */
  onChildChange() {
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    if (!this.isActive)
      return [];
    const t = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
    return Kt(t);
  }
  /**
   * Prepare data before building the editor
   */
  prepare() {
  }
  /**
   * Activates the instance
   */
  activate() {
    this.isActive === !1 && (this.isActive = !0, this.emit("change"));
  }
  /**
   * Deactivates the instance
   */
  deactivate() {
    this.isActive === !0 && (this.isActive = !1, this.emit("change"));
  }
  /**
   * Returns true if this instance is read only
   */
  isReadOnly() {
    let t = !1;
    return Ft(this.schema) === !0 && (t = !0), this.parent && Ft(this.parent.schema) === !0 && (t = !0), t;
  }
  /**
   * Destroy the instance and it's children
   */
  destroy() {
    this.listeners = [], this.children.forEach((t) => {
      t.destroy();
    }), this.unregister(), this.ui && this.ui.destroy(), Object.keys(this).forEach((t) => {
      delete this[t];
    }), super.destroy();
  }
}
const Te = {
  properties: "glyphicon glyphicon-list",
  delete: "glyphicon glyphicon-trash",
  add: "glyphicon glyphicon-plus",
  moveUp: "glyphicon glyphicon-arrow-up",
  moveDown: "glyphicon glyphicon-arrow-down"
}, Me = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down"
}, Ve = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down"
}, Re = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down"
}, He = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down"
}, Be = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down"
};
class xt {
  constructor(t = null) {
    this.icons = t, this.useToggleEvents = !0, this.init();
  }
  /**
   * Inits some instance properties
   * @private
   */
  init() {
    this.useToggleEvents = !0;
  }
  /**
   * Returns a icon element
   * @private
   */
  getIcon(t) {
    const e = document.createElement("i"), s = this.icons[t].split(" ");
    return s.length > 0 && s.forEach((n) => {
      e.classList.add(n);
    }), e;
  }
  /**
   * Used to wrap the editor UI elements
   * @private
   */
  getEditorContainer() {
    const t = document.createElement("div");
    return t.classList.add("jedi-editor-container"), t;
  }
  /**
   * Used to group several controls
   * @private
   */
  getFieldset() {
    const t = document.createElement("fieldset");
    return t.classList.add("jedi-editor-fieldset"), t;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   * @private
   */
  getLegend(t) {
    const e = document.createElement("legend"), s = document.createElement("span");
    return e.classList.add("jedi-editor-legend"), s.classList.add("jedi-editor-legend-text"), e.setAttribute("aria-labelledby", "#legend-" + t.id), s.textContent = t.textContent, s.setAttribute("id", "#legend-" + t.id), e.appendChild(s), e;
  }
  /**
   * Container for complex editors like arrays, objects and multiple
   * @private
   */
  getCard() {
    const t = document.createElement("div");
    return t.classList.add("jedi-editor-card"), t;
  }
  /**
   * Header for cards
   * @private
   */
  getCardHeader() {
    const t = document.createElement("div");
    return t.classList.add("jedi-editor-card-header"), t;
  }
  /**
   * A body for the cards
   * @private
   */
  getCardBody() {
    const t = document.createElement("div");
    return t.classList.add("jedi-editor-card-body"), t;
  }
  /**
   * Wrapper for editor actions buttons
   * @private
   */
  getActionsSlot() {
    const t = document.createElement("div");
    return t.classList.add("jedi-actions-slot"), t;
  }
  /**
   * Wrapper for editor array specific actions buttons
   * @private
   */
  getArrayActionsSlot() {
    const t = this.getBtnGroup();
    return t.classList.add("jedi-array-actions-slot"), t;
  }
  /**
   * Wrapper for child editors
   * @private
   */
  getChildrenSlot() {
    const t = document.createElement("div");
    return t.classList.add("jedi-children-slot"), t;
  }
  /**
   * Wrapper for error messages
   * @private
   */
  getMessagesSlot(t = {}) {
    const e = document.createElement("div");
    return e.classList.add("jedi-messages-slot"), e.setAttribute("aria-atomic", "false"), e.setAttribute("aria-live", "polite"), t.id && e.setAttribute("id", t.id), e;
  }
  /**
   * Wrapper for editor controls
   * @private
   */
  getControlSlot() {
    const t = document.createElement("div");
    return t.classList.add("jedi-control-slot"), t;
  }
  /**
   * Container for properties editing elements like property activators
   * @private
   */
  getPropertiesSlot(t) {
    const e = document.createElement("div");
    return e.classList.add("jedi-properties-slot"), e.setAttribute("id", t.id), this.useToggleEvents && (e.style.display = "none"), e;
  }
  /**
   * Container for screen reader announced messages
   * @private
   */
  getPropertiesAriaLive() {
    const t = document.createElement("div");
    return t.classList.add("jedi-properties-aria-live"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t;
  }
  /**
   * A message that will be announced by screen reader
   * @private
   */
  getAriaLiveMessage(t) {
    const e = document.createElement("p");
    return e.classList.add("jedi-aria-live-message"), e.textContent = t, this.visuallyHidden(e), e;
  }
  /**
   * Toggles the ObjectEditor properties wrapper visibility
   * @private
   */
  getPropertiesToggle(t) {
    const e = this.getButton(t);
    return e.classList.add("jedi-properties-toggle"), this.useToggleEvents && e.addEventListener("click", () => {
      t.propertiesContainer.hasAttribute("style") ? this.visuallyVisible(t.propertiesContainer) : this.visuallyHidden(t.propertiesContainer);
    }), e;
  }
  /**
   * Wrapper for property activators
   * @private
   */
  getPropertiesActivators() {
    const t = document.createElement("div");
    return t.classList.add("jedi-properties-activators"), t;
  }
  /**
   * Wrapper buttons
   * @private
   */
  getBtnGroup() {
    const t = document.createElement("span");
    return t.classList.add("jedi-btn-group"), t.style.display = "initial", t;
  }
  /**
   * A button
   * @private
   */
  getButton(t) {
    const e = document.createElement("button");
    e.classList.add("jedi-btn"), e.setAttribute("type", "button"), t.value && (e.value = t.value), t.id && e.setAttribute("id", t.id);
    const s = document.createElement("span");
    if (s.textContent = t.textContent, this.icons && t.icon) {
      const n = this.getIcon(t.icon);
      n.setAttribute("title", t.textContent), e.appendChild(n), this.visuallyHidden(s);
    }
    return e.appendChild(s), e;
  }
  /**
   * Array "add" item button
   * @private
   */
  getArrayBtnAdd() {
    const t = this.getButton({
      textContent: "Add item into",
      icon: "add"
    });
    return t.classList.add("jedi-array-add"), t;
  }
  getAddPropertyButton() {
    const t = this.getButton({
      textContent: "Add property"
    });
    return t.classList.add("jedi-add-property-btn"), t;
  }
  /**
   * Array "delete" item button
   * @private
   */
  getDeleteItemBtn() {
    const t = this.getButton({
      textContent: "Delete item",
      icon: "delete"
    });
    return t.classList.add("jedi-array-delete"), t;
  }
  /**
   * Array "move up" item button
   * @private
   */
  getMoveUpItemBtn() {
    const t = this.getButton({
      textContent: "Move up",
      icon: "moveUp"
    });
    return t.classList.add("jedi-array-move-up"), t;
  }
  /**
   * Array "move down" item button
   * @private
   */
  getMoveDownItemBtn() {
    const t = this.getButton({
      textContent: "Move down",
      icon: "moveDown"
    });
    return t.classList.add("jedi-array-move-down"), t;
  }
  /**
   * Wrapper for the editor description
   * @private
   */
  getDescription(t = {}) {
    const e = document.createElement("small");
    return e.classList.add("jedi-description"), t.textContent && (e.textContent = t.textContent), t.id && e.setAttribute("id", t.id), e;
  }
  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   * @private
   */
  getObjectControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = this.getCardBody(), a = this.getPropertiesAriaLive(), o = this.getDescription({
      textContent: t.description
    }), c = this.getMessagesSlot(), d = this.getChildrenSlot(), h = this.getPropertiesSlot({
      id: "properties-slot-" + t.id
    }), u = this.getPropertiesToggle({
      textContent: t.title + " properties",
      id: "properties-slot-toggle-" + t.id,
      icon: "properties",
      propertiesContainer: h
    }), p = this.getPropertiesActivators(), g = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + t.id,
      label: "Property"
    }), b = this.getAddPropertyButton(), L = this.getFieldset(), C = this.getLegend({
      textContent: t.title,
      id: t.id
    });
    return b.classList.add("jedi-object-add"), e.appendChild(L), L.appendChild(C), L.appendChild(r), r.appendChild(o), r.appendChild(c), C.appendChild(s), s.appendChild(n), r.appendChild(h), r.appendChild(d), t.addProperty && (h.appendChild(g.container), h.appendChild(b)), t.editableProperties && (s.appendChild(u), h.appendChild(a), h.appendChild(p)), {
      container: e,
      body: r,
      actions: s,
      messages: c,
      childrenSlot: d,
      propertiesToggle: u,
      propertiesContainer: h,
      addPropertyControl: g,
      addPropertyBtn: b,
      ariaLive: a,
      propertiesActivators: p,
      arrayActions: n
    };
  }
  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   * @private
   */
  getArrayControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = this.getCardBody(), a = this.getDescription({
      textContent: t.description
    }), o = this.getMessagesSlot(), c = this.getChildrenSlot(), d = this.getBtnGroup(), h = this.getArrayBtnAdd(), u = this.getFieldset(), p = this.getLegend({
      textContent: t.title,
      id: t.id
    });
    return e.appendChild(u), u.appendChild(p), u.appendChild(r), r.appendChild(a), r.appendChild(o), p.appendChild(s), s.appendChild(d), d.appendChild(h), s.appendChild(n), r.appendChild(c), {
      container: e,
      body: r,
      actions: s,
      messages: o,
      childrenSlot: c,
      btnGroup: d,
      addBtn: h,
      arrayActions: n
    };
  }
  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   * @private
   */
  getMultipleControl(t) {
    const e = document.createElement("div"), s = this.getCard(), n = this.getActionsSlot(), r = this.getArrayActionsSlot(), a = this.getCardHeader({
      textContent: t.title,
      titleHidden: t.titleHidden
    }), o = this.getCardBody(), c = this.getDescription({
      textContent: t.description
    }), d = this.getMessagesSlot(), h = this.getChildrenSlot(), u = this.getSwitcher({
      values: t.switcherOptionValues,
      titles: t.switcherOptionsLabels,
      id: t.id + "-switcher",
      label: t.id + "-switcher",
      titleHidden: !0,
      readOnly: t.readOnly
    });
    return u.container.classList.add("jedi-switcher"), e.appendChild(c), e.appendChild(s), s.appendChild(a), s.appendChild(o), a.appendChild(n), n.appendChild(r), n.appendChild(u.container), o.appendChild(d), o.appendChild(h), {
      container: e,
      card: s,
      header: a,
      body: o,
      actions: n,
      messages: d,
      childrenSlot: h,
      switcher: u,
      arrayActions: r
    };
  }
  /**
   * Control for NullEditor
   * @private
   */
  getNullControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("label");
    r.setAttribute("for", t.id);
    const a = document.createElement("span");
    a.textContent = t.label, t.titleHidden && this.visuallyHidden(r);
    const o = t.id + "-description", c = this.getDescription({
      textContent: t.description,
      id: o
    }), d = this.getMessagesSlot();
    return e.appendChild(r), e.appendChild(c), e.appendChild(d), e.appendChild(s), s.appendChild(n), r.appendChild(a), { container: e, label: r, labelText: a, description: c, messages: d, actions: s, arrayActions: n };
  }
  /**
   * A Textarea
   * @private
   */
  getTextareaControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("textarea");
    r.setAttribute("id", t.id), r.style.width = "100%";
    const a = document.createElement("label");
    a.setAttribute("for", t.id);
    const o = document.createElement("span");
    o.textContent = t.label, t.titleHidden && this.visuallyHidden(a);
    const c = t.id + "-description", d = this.getDescription({
      textContent: t.description,
      id: c
    }), h = t.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + c;
    return r.setAttribute("aria-describedby", p), e.appendChild(a), e.appendChild(r), e.appendChild(d), e.appendChild(u), e.appendChild(s), s.appendChild(n), a.appendChild(o), { container: e, input: r, label: a, labelText: o, description: d, messages: u, actions: s, arrayActions: n };
  }
  /**
   * An Input control
   * @private
   */
  getInputControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("input");
    r.setAttribute("type", t.type), r.setAttribute("id", t.id), r.style.width = "100%";
    const a = document.createElement("label");
    a.setAttribute("for", t.id);
    const o = document.createElement("span");
    o.textContent = t.label, t.titleHidden && this.visuallyHidden(a);
    const c = t.id + "-description", d = this.getDescription({
      textContent: t.description,
      id: c
    }), h = t.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + c;
    return r.setAttribute("aria-describedby", p), e.appendChild(a), e.appendChild(r), e.appendChild(d), e.appendChild(u), e.appendChild(s), s.appendChild(n), a.appendChild(o), { container: e, input: r, label: a, labelText: o, description: d, messages: u, actions: s, arrayActions: n };
  }
  /**
   * A radio group control
   * @private
   */
  getRadiosControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = this.getFieldset(), a = this.getCardBody(), o = this.getLegend({
      textContent: t.label,
      id: t.id
    }), c = t.id + "-messages", d = this.getMessagesSlot({
      id: c
    }), h = t.id + "-description", u = this.getDescription({
      textContent: t.description,
      id: h
    });
    t.titleHidden && this.visuallyHidden(o);
    const p = [], g = [], b = [], L = [];
    return t.values.forEach((C, E) => {
      const q = document.createElement("div");
      p.push(q);
      const M = document.createElement("input");
      M.setAttribute("type", "radio"), M.setAttribute("id", t.id + "-" + E), M.setAttribute("value", C), g.push(M);
      const A = c + " " + h;
      M.setAttribute("aria-describedby", A);
      const gt = document.createElement("label");
      gt.setAttribute("for", t.id + "-" + E);
      const Nt = document.createElement("span");
      L.push(Nt), t.titles && t.titles[E] && (Nt.textContent = t.titles[E]), b.push(gt);
    }), e.appendChild(r), e.appendChild(s), r.appendChild(o), r.appendChild(a), s.appendChild(n), p.forEach((C, E) => {
      a.appendChild(p[E]), C.appendChild(g[E]), C.appendChild(b[E]), b[E].appendChild(L[E]);
    }), r.appendChild(u), r.appendChild(d), { container: e, fieldset: r, legend: o, body: a, radios: g, labels: b, labelTexts: L, radioControls: p, description: u, messages: d, actions: s, arrayActions: n };
  }
  /**
   * A checkbox control
   * @private
   */
  getCheckboxControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("div"), a = document.createElement("input");
    a.setAttribute("type", "checkbox"), a.setAttribute("id", t.id);
    const o = document.createElement("label");
    o.setAttribute("for", t.id);
    const c = document.createElement("span");
    c.textContent = t.label, t.titleHidden && this.visuallyHidden(o);
    const d = t.id + "-description", h = this.getDescription({
      textContent: t.description,
      id: d
    }), u = t.id + "-messages", p = this.getMessagesSlot({
      id: u
    }), g = u + " " + d;
    return a.setAttribute("aria-describedby", g), e.appendChild(r), e.appendChild(s), s.appendChild(n), r.appendChild(a), r.appendChild(o), o.appendChild(c), r.appendChild(h), r.appendChild(p), { container: e, formGroup: r, input: a, label: o, labelText: c, description: h, messages: p, actions: s, arrayActions: n };
  }
  /**
   * A select control
   * @private
   */
  getSelectControl(t) {
    const e = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("select");
    r.setAttribute("id", t.id), r.style.width = "100%", t.values.forEach((g, b) => {
      const L = document.createElement("option");
      L.setAttribute("value", g), t.titles && t.titles[b] && (L.textContent = t.titles[b]), r.appendChild(L);
    });
    const a = document.createElement("label");
    a.setAttribute("for", t.id);
    const o = document.createElement("span");
    o.textContent = t.label, t.titleHidden && this.visuallyHidden(a);
    const c = t.id + "-description", d = this.getDescription({
      textContent: t.description,
      id: c
    }), h = t.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + c;
    return r.setAttribute("aria-describedby", p), e.appendChild(a), e.appendChild(r), a.appendChild(o), e.appendChild(d), e.appendChild(u), e.appendChild(s), s.appendChild(n), { container: e, input: r, label: a, labelText: o, description: d, messages: u, actions: s, arrayActions: n };
  }
  /**
   * Control to switch between multiple editors options
   * @private
   */
  getSwitcher(t) {
    return this.getSelectControl(t);
  }
  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   * @private
   */
  getAlert(t) {
    return this.getInvalidFeedback(t);
  }
  /**
   * Error messages
   * @public
   */
  getInvalidFeedback(t) {
    const e = document.createElement("div"), s = document.createElement("span"), n = document.createElement("span");
    return s.textContent = t.message, n.textContent = "⚠ ", n.classList.add("jedi-error-message"), n.setAttribute("aria-hidden", "true"), e.classList.add("jedi-error-message"), e.appendChild(n), e.appendChild(s), e;
  }
  /**
   * Container for columns
   * @private
   */
  getRow() {
    const t = document.createElement("div");
    return t.classList.add("jedi-row"), t;
  }
  /**
   * A column to contain content to a specific width
   * @private
   */
  getCol(t, e, s) {
    const n = document.createElement("div");
    return n.classList.add("jedi-col-xs-" + t), n.classList.add("jedi-col-md-" + e), s && n.classList.add("jedi-col-md-offset-" + s), n;
  }
  /**
   * Tab list is a list of links that triggers tabs visibility ne at the time
   * @private
   */
  getTabList() {
    const t = document.createElement("ul");
    return t.classList.add("jedi-nav-list"), t;
  }
  /**
   * A Tab is a wrapper for content
   * @private
   */
  getTab(t) {
    const e = document.createElement("li"), s = document.createElement("a");
    return s.classList.add("jedi-nav-link"), s.setAttribute("href", "#" + t.id), s.textContent = t.title, e.appendChild(s), { list: e, link: s };
  }
  /**
   * Wrapper for tabs
   * @private
   */
  getTabContent() {
    const t = document.createElement("div");
    return t.classList.add("tab-content"), t;
  }
  /**
   * Set tab attributes to make it toggleable
   * @private
   */
  setTabPaneAttributes(t, e, s) {
    t.setAttribute("id", s), t.classList.add("jedi-tab-pane");
  }
  /**
   * Makes an element visually hidden
   * @private
   */
  visuallyHidden(t) {
    t.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;");
  }
  /**
   * Reveals a visually hidden element
   * @private
   */
  visuallyVisible(t) {
    t.removeAttribute("style");
  }
}
class qe extends xt {
  init() {
    this.useToggleEvents = !1;
  }
  getFieldset() {
    const t = document.createElement("fieldset");
    return t.classList.add("panel"), t.classList.add("panel-default"), t;
  }
  getLegend(t) {
    const e = super.getLegend(t);
    return e.classList.add("h5"), e.classList.add("panel-heading"), e.classList.add("pull-left"), e.setAttribute("style", "margin: 0; display: flex; justify-content: space-between; align-items: center;"), e;
  }
  getCard() {
    const t = super.getCard();
    return t.classList.add("panel"), t.classList.add("panel-default"), t;
  }
  getCardHeader(t) {
    const e = super.getCardHeader(t);
    return e.classList.add("panel-heading"), e.classList.add("text-right"), e;
  }
  getCardBody() {
    const t = super.getCardBody();
    return t.classList.add("panel-body"), t.style.clear = "both", t;
  }
  getPropertiesToggle(t) {
    const e = this.getButton(t);
    return e.setAttribute("data-toggle", "collapse"), e.setAttribute("data-target", "#" + t.propertiesContainer.id), e.classList.add("jedi-properties-toggle"), e;
  }
  getPropertiesSlot(t) {
    const e = super.getPropertiesSlot(t);
    return e.classList.add("collapse"), e.setAttribute("id", t.id), e;
  }
  getBtnGroup() {
    const t = super.getBtnGroup();
    return t.classList.add("btn-group"), t;
  }
  getButton(t) {
    const e = super.getButton(t);
    return e.classList.add("btn"), e.classList.add("btn-xs"), e.classList.add("btn-default"), e;
  }
  getDescription(t) {
    const e = super.getDescription(t);
    return e.classList.add("text-muted"), e;
  }
  getTextareaControl(t) {
    const e = super.getTextareaControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("form-group"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getInputControl(t) {
    const e = super.getInputControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("form-group"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getRadiosControl(t) {
    const e = super.getRadiosControl(t), { body: s, radios: n, labels: r, labelTexts: a, radioControls: o, description: c, messages: d } = e;
    return o.forEach((h, u) => {
      h.classList.add("radio"), s.appendChild(o[u]), h.appendChild(r[u]), r[u].appendChild(n[u]), r[u].appendChild(a[u]);
    }), s.appendChild(c), s.appendChild(d), e;
  }
  getCheckboxControl(t) {
    const e = super.getCheckboxControl(t), { container: s, formGroup: n, input: r, label: a, labelText: o, description: c, messages: d } = e;
    return n.classList.add("checkbox"), s.appendChild(n), n.appendChild(a), a.appendChild(r), a.appendChild(o), n.appendChild(c), n.appendChild(d), e;
  }
  getSelectControl(t) {
    const e = super.getSelectControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("form-group"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getSwitcher(t) {
    const e = super.getSwitcher(t), { container: s, input: n } = e;
    return s.classList.remove("form-group"), n.classList.remove("form-control"), e;
  }
  getAlert(t) {
    const e = super.getAlert(t);
    return e.classList.add("alert"), e.classList.add("alert-danger"), e;
  }
  getInvalidFeedback(t) {
    const e = super.getInvalidFeedback(t);
    return e.classList.add("text-danger"), e;
  }
  getRow() {
    const t = super.getRow();
    return t.classList.add("row"), t;
  }
  getCol(t, e, s) {
    const n = super.getRow();
    return n.classList.add("col-xs-" + t), n.classList.add("col-md-" + e), s && n.classList.add("col-md-offset-" + s), n;
  }
  getTabList(t) {
    const e = super.getTabList(t);
    return e.classList.add("nav"), t.type === "tabs" ? e.classList.add("nav-tabs") : e.classList.add("nav-pills"), e.classList.add("nav-stacked"), t.stacked === !1 && e.classList.remove("nav-stacked"), e;
  }
  getTab(t) {
    const e = super.getTab(t);
    return t.active && e.list.classList.add("active"), e.link.setAttribute("data-toggle", "tab"), e;
  }
  setTabPaneAttributes(t, e, s) {
    super.setTabPaneAttributes(t, e, s), t.classList.add("tab-pane"), e && (t.classList.add("in"), t.classList.add("active"));
  }
  visuallyHidden(t) {
    t.classList.add("sr-only");
  }
  visuallyVisible(t) {
    t.classList.remove("sr-only");
  }
}
class Ne extends xt {
  init() {
    this.useToggleEvents = !1;
  }
  getFieldset() {
    const t = document.createElement("fieldset");
    return t.classList.add("card"), t.classList.add("mb-3"), t;
  }
  getLegend(t) {
    const e = super.getLegend(t);
    return e.classList.add("h6"), e.classList.add("card-header"), e.classList.add("d-flex"), e.classList.add("justify-content-between"), e.classList.add("align-items-center"), e.classList.add("float-left"), e.classList.add("py-2"), e;
  }
  getCard() {
    const t = super.getCard();
    return t.classList.add("card"), t.classList.add("mb-3"), t;
  }
  getCardHeader(t) {
    const e = super.getCardHeader(t);
    return e.classList.add("card-header"), e.classList.add("d-flex"), e.classList.add("justify-content-end"), e.classList.add("align-items-center"), e.classList.add("py-1"), e;
  }
  getCardBody() {
    const t = super.getCardBody();
    return t.classList.add("card-body"), t;
  }
  getPropertiesSlot(t) {
    const e = super.getPropertiesSlot(t);
    return e.classList.add("collapse"), e.setAttribute("id", t.id), e;
  }
  getPropertiesToggle(t) {
    const e = this.getButton(t);
    return e.setAttribute("data-toggle", "collapse"), e.setAttribute("data-target", "#" + t.propertiesContainer.id), e.classList.add("jedi-properties-toggle"), e;
  }
  getBtnGroup() {
    const t = super.getBtnGroup();
    return t.classList.add("btn-group"), t;
  }
  getButton(t) {
    const e = super.getButton(t);
    return e.classList.add("btn"), e.classList.add("btn-sm"), e;
  }
  getDescription(t) {
    const e = super.getDescription(t);
    return e.classList.add("text-muted"), e;
  }
  getTextareaControl(t) {
    const e = super.getTextareaControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("form-group"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getInputControl(t) {
    const e = super.getInputControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("form-group"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getRadiosControl(t) {
    const e = super.getRadiosControl(t), { container: s, body: n, radios: r, labels: a, labelTexts: o, radioControls: c, description: d, messages: h } = e;
    return s.classList.add("form-group"), c.forEach((u, p) => {
      u.classList.add("form-check"), r[p].classList.add("form-check-input"), a[p].classList.add("form-check-label"), n.appendChild(c[p]), u.appendChild(r[p]), u.appendChild(a[p]), a[p].appendChild(o[p]);
    }), n.appendChild(d), n.appendChild(h), e;
  }
  getCheckboxControl(t) {
    const e = super.getCheckboxControl(t), { container: s, formGroup: n, input: r, label: a, description: o, messages: c } = e;
    return n.classList.add("form-group"), n.classList.add("form-check"), r.classList.add("form-check-input"), a.classList.add("form-check-label"), s.appendChild(n), n.appendChild(r), n.appendChild(a), n.appendChild(o), n.appendChild(c), e;
  }
  getSelectControl(t) {
    const e = super.getSelectControl(t), { container: s, input: n } = e;
    return s.classList.add("form-group"), n.classList.add("form-control"), e;
  }
  getSwitcher(t) {
    const e = super.getSwitcher(t), { container: s, input: n } = e;
    return s.classList.remove("form-group"), n.classList.remove("form-control"), e;
  }
  getAlert(t) {
    const e = super.getAlert(t);
    return e.classList.add("alert"), e.classList.add("alert-danger"), e;
  }
  getInvalidFeedback(t) {
    const e = super.getInvalidFeedback(t);
    return e.classList.add("text-danger"), e.classList.add("form-text"), e.classList.add("d-block"), e;
  }
  getColumnClass(t, e) {
    return "col-" + t + "-" + e;
  }
  getRow() {
    const t = super.getRow();
    return t.classList.add("row"), t;
  }
  getCol(t, e, s) {
    const n = super.getRow(t, e, s);
    return n.classList.add("col-" + t), n.classList.add("col-md-" + e), s && n.classList.add("offset-md-" + s), n;
  }
  getTabList(t) {
    const e = super.getTabList();
    return e.classList.add("nav"), t.type === "tabs" ? e.classList.add("nav-tabs") : e.classList.add("nav-pills"), e.classList.add("flex-column"), t.stacked === !1 && e.classList.remove("flex-column"), e;
  }
  getTab(t) {
    const e = super.getTab(t);
    return e.list.classList.add("nav-item"), e.link.classList.add("nav-link"), e.link.setAttribute("data-toggle", "tab"), t.active && e.link.classList.add("active"), e;
  }
  setTabPaneAttributes(t, e, s) {
    super.setTabPaneAttributes(t, e, s), t.classList.add("tab-pane"), e && t.classList.add("active");
  }
  visuallyHidden(t) {
    t.classList.add("sr-only");
  }
  visuallyVisible(t) {
    t.classList.remove("sr-only");
  }
}
class De extends xt {
  init() {
    this.useToggleEvents = !1;
  }
  getFieldset() {
    const t = document.createElement("fieldset");
    return t.classList.add("card"), t.classList.add("mb-3"), t;
  }
  getLegend(t) {
    const e = super.getLegend(t);
    return e.classList.add("h6"), e.classList.add("card-header"), e.classList.add("d-flex"), e.classList.add("justify-content-between"), e.classList.add("align-items-center"), e.classList.add("py-2"), e;
  }
  getCard() {
    const t = super.getCard();
    return t.classList.add("card"), t.classList.add("mb-3"), t;
  }
  getCardHeader(t) {
    const e = super.getCardHeader(t);
    return e.classList.add("card-header"), e.classList.add("d-flex"), e.classList.add("justify-content-end"), e.classList.add("align-items-center"), e.classList.add("py-1"), e;
  }
  getCardBody() {
    const t = super.getCardBody();
    return t.classList.add("card-body"), t;
  }
  getPropertiesSlot(t) {
    const e = super.getPropertiesSlot(t);
    return e.classList.add("collapse"), e.setAttribute("id", t.id), e;
  }
  getControlSlot() {
    const t = super.getControlSlot();
    return t.classList.add("mb-3"), t;
  }
  getPropertiesToggle(t) {
    const e = this.getButton(t);
    return e.setAttribute("data-bs-toggle", "collapse"), e.setAttribute("data-bs-target", "#" + t.propertiesContainer.id), e.classList.add("jedi-properties-toggle"), e;
  }
  getBtnGroup() {
    const t = super.getBtnGroup();
    return t.classList.add("btn-group"), t;
  }
  getButton(t) {
    const e = super.getButton(t);
    return e.classList.add("btn"), e.classList.add("btn-sm"), e;
  }
  getDescription(t) {
    const e = super.getDescription(t);
    return e.classList.add("text-muted"), e;
  }
  getTextareaControl(t) {
    const e = super.getTextareaControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("mb-3"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getInputControl(t) {
    const e = super.getInputControl(t), { container: s, input: n, label: r } = e;
    return s.classList.add("mb-3"), n.classList.add("form-control"), t.titleHidden && this.visuallyHidden(r), e;
  }
  getRadiosControl(t) {
    const e = super.getRadiosControl(t), { container: s, body: n, radios: r, labels: a, labelTexts: o, radioControls: c, description: d, messages: h } = e;
    return s.classList.add("mb-3"), c.forEach((u, p) => {
      u.classList.add("form-check"), r[p].classList.add("form-check-input"), a[p].classList.add("form-check-label"), n.appendChild(c[p]), u.appendChild(r[p]), u.appendChild(a[p]), a[p].appendChild(o[p]);
    }), n.appendChild(d), n.appendChild(h), e;
  }
  getCheckboxControl(t) {
    const e = super.getCheckboxControl(t), { container: s, formGroup: n, input: r, label: a, description: o, messages: c } = e;
    return s.classList.add("mb-3"), n.classList.add("form-check"), r.classList.add("form-check-input"), a.classList.add("form-check-label"), t.titleHidden && this.visuallyHidden(a), s.appendChild(n), n.appendChild(r), n.appendChild(a), n.appendChild(o), n.appendChild(c), e;
  }
  getSelectControl(t) {
    const e = super.getSelectControl(t), { container: s, input: n } = e;
    return s.classList.add("mb-3"), n.classList.add("form-select"), e;
  }
  getSwitcher(t) {
    const e = super.getSwitcher(t), { container: s, input: n, label: r } = e;
    return s.classList.remove("mb-3"), n.classList.remove("form-select"), this.visuallyHidden(r), e;
  }
  getAlert(t) {
    const e = super.getAlert(t);
    return e.classList.add("alert"), e.classList.add("alert-danger"), e;
  }
  getInvalidFeedback(t) {
    const e = super.getInvalidFeedback(t);
    return e.classList.add("text-danger"), e.classList.add("d-block"), e.classList.add("form-text"), e.classList.add("form-text"), e;
  }
  getRow() {
    const t = super.getRow();
    return t.classList.add("row"), t;
  }
  getCol(t, e, s) {
    const n = super.getRow(t, e, s);
    return n.classList.add("col-" + t), n.classList.add("col-md-" + e), s && n.classList.add("offset-md-" + s), n;
  }
  getTabList(t) {
    const e = super.getTabList(t);
    return e.classList.add("nav"), t.type === "tabs" ? e.classList.add("nav-tabs") : e.classList.add("nav-pills"), e.classList.add("flex-column"), t.stacked === !1 && e.classList.remove("flex-column"), e;
  }
  getTab(t) {
    const e = super.getTab(t);
    return e.list.classList.add("nav-item"), e.link.classList.add("nav-link"), e.link.setAttribute("data-bs-toggle", "tab"), t.active && e.link.classList.add("active"), e;
  }
  setTabPaneAttributes(t, e, s) {
    super.setTabPaneAttributes(t, e, s), t.classList.add("tab-pane"), e && t.classList.add("active");
  }
  visuallyHidden(t) {
    t.classList.add("visually-hidden");
  }
  visuallyVisible(t) {
    t.classList.remove("visually-hidden");
  }
}
class F {
  constructor(t) {
    if (this.instance = t, this.theme = null, this.control = null, this.disabled = !1, this.readOnly = this.instance.isReadOnly(), this.init(), this.build(), this.coerceValue(), this.addEventListeners(), this.setContainerAttributes(), this.refreshUI(), this.instance.jedi.options.showErrors === "always" || f(this.instance.schema, "showErrors") === "always") {
      const s = this.instance.getErrors();
      this.showValidationErrors(s);
    }
    this.instance.on("set-value", () => {
      this.refreshUI();
      const s = this.instance.getErrors();
      this.showValidationErrors(s);
    }), this.instance.on("change", () => {
      this.refreshUI();
      const s = this.instance.getErrors();
      this.showValidationErrors(s);
    });
  }
  /**
   * Initializes the editor
   * @private
   */
  init() {
    let t = null;
    if (l(this.instance.jedi.options.iconLib))
      switch (this.instance.jedi.options.iconLib) {
        case "glyphicons":
          t = Te;
          break;
        case "bootstrap-icons":
          t = Me;
          break;
        case "fontawesome3":
          t = Ve;
          break;
        case "fontawesome4":
          t = Re;
          break;
        case "fontawesome5":
          t = He;
          break;
        case "fontawesome6":
          t = Be;
          break;
      }
    switch (this.instance.jedi.options.theme) {
      case "bootstrap3":
        this.theme = new qe(t);
        break;
      case "bootstrap4":
        this.theme = new Ne(t);
        break;
      case "bootstrap5":
        this.theme = new De(t);
        break;
      default:
        this.theme = new xt(t);
    }
  }
  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-path", this.instance.path), this.control.container.setAttribute("data-type", R(this.instance.schema));
  }
  /**
   * Builds the editor control and appends it to the editor container
   * @private
   */
  build() {
  }
  /**
   * Updates the value of the instance by making assumptions based on constrains
   */
  coerceValue() {
    const t = T(this.instance.schema);
    l(t) && !t.includes(this.instance.getValue()) && l(t[0]) && this.instance.setValue(t[0], !1);
  }
  /**
   * Add event listeners to ui elements
   * @private
   */
  addEventListeners() {
  }
  /**
   * Shows validation messages in the editor container.
   * @private
   */
  showValidationErrors(t) {
    if (this.instance.jedi.options.showErrors === "never" || f(this.instance.schema, "showErrors") === "never")
      return;
    this.control.messages.innerHTML = "";
    const s = I(this.instance.schema) || this.instance.getKey();
    t.forEach((n) => {
      n.messages.forEach((r) => {
        const a = this.getInvalidFeedback({
          message: s + ": " + r
        });
        this.control.messages.appendChild(a);
      });
    });
  }
  /**
   * Get an error message container
   * @private
   */
  getInvalidFeedback(t) {
    return this.theme.getInvalidFeedback(t);
  }
  /**
   * Disables the editor
   */
  disable() {
    this.disabled = !0, this.refreshUI();
  }
  /**
   * Enables the editor
   */
  enable() {
    this.disabled = !1, this.refreshUI();
  }
  /**
   * Updates control UI when its state changes
   * @private
   */
  refreshUI() {
    this.refreshInteractiveElements();
  }
  refreshInteractiveElements() {
    this.control.container.querySelectorAll("button, input, select, textarea").forEach((e) => {
      this.disabled || this.readOnly ? e.setAttribute("disabled", "") : e.removeAttribute("disabled", "");
    });
  }
  /**
   * Transforms the input value if necessary before value set
   * @private
   */
  sanitize(t) {
    return t;
  }
  /**
   * Destroys the editor
   * @private
   */
  destroy() {
    this.control.container && this.control.container.parentNode && this.control.container.parentNode.removeChild(this.control.container), Object.keys(this).forEach((t) => {
      delete this[t];
    });
  }
}
class Zt extends F {
  build() {
    this.control = this.theme.getMultipleControl({
      title: "Options",
      titleHidden: f(this.instance.schema, "titleHidden"),
      id: S(this.instance.path),
      description: j(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    });
  }
  addEventListeners() {
    this.control.switcher.input.addEventListener("change", () => {
      const t = Number(this.control.switcher.input.value);
      this.instance.switchInstance(t);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.childrenSlot.innerHTML = "", this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container), this.control.switcher.input.value = this.instance.index, this.disabled || this.instance.isReadOnly() ? this.instance.activeInstance.ui.disable() : this.instance.activeInstance.ui.enable();
  }
  getInvalidFeedback(t) {
    return this.theme.getAlert(t);
  }
}
class Fe extends D {
  setUI() {
    this.ui = new Zt(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.activeInstanceChanged = !0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.ifThenElseShemas = [], this.traverseSchema(this.schema), delete this.schema.if, delete this.schema.then, delete this.schema.else;
    let t = 0;
    this.ifThenElseShemas.forEach((r) => {
      l(r.then) && (this.schemas.push(K({}, k(this.schema), r.then)), this.switcherOptionValues.push(t), this.switcherOptionsLabels.push(JSON.stringify(r.then)), t++), l(r.else) && (this.schemas.push(K({}, k(this.schema), r.else)), this.switcherOptionValues.push(t), this.switcherOptionsLabels.push(JSON.stringify(r.else)), t++);
    });
    const e = k(this.schema);
    delete e.if, delete e.then, delete e.else;
    const s = this.jedi.createInstance({
      jedi: this.jedi,
      schema: e,
      path: this.path,
      parent: this.parent
    });
    this.schemas.forEach((r) => {
      const a = this.jedi.createInstance({
        jedi: this.jedi,
        schema: r,
        path: this.path,
        parent: this.parent
      });
      a.unregister(), a.on("change", () => {
        const o = this.activeInstance.getValue();
        this.getFittestIndex(o) !== this.index ? this.setValue(o) : (this.value = this.activeInstance.getValue(), this.emit("change"));
      }), this.instances.push(a), this.register();
    }), this.on("set-value", (r) => {
      this.instances.forEach((c) => {
        const d = c.getValue();
        let h = r;
        m(d) && m(h) && (h = $t(d, h)), c.setValue(h, !1);
      });
      const a = this.getFittestIndex(r);
      a !== this.index && (this.switchInstance(a), this.emit("change"));
    }), this.value = s.getValue(), s.destroy();
    const n = this.getFittestIndex(this.value);
    this.switchInstance(n);
  }
  switchInstance(t) {
    this.index = t, this.activeInstance = this.instances[this.index], this.value = this.activeInstance.getValue(), this.emit("change");
  }
  traverseSchema(t) {
    const e = jt(t);
    if (l(e)) {
      const s = Vt(t), n = Ot(t);
      this.ifThenElseShemas.push({
        if: e,
        then: l(s) ? s : {}
      }), this.ifThenElseShemas.push({
        if: e,
        else: l(n) ? n : {}
      });
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(t) {
    let e = this.index;
    return this.ifThenElseShemas.forEach((s, n) => {
      const r = new w({
        schema: s.if,
        data: t
      }), a = r.getErrors();
      r.destroy(), a.length === 0 && s.then && (e = n), a.length > 0 && s.else && (e = n);
    }), e;
  }
  destroy() {
    this.instances.forEach((t) => {
      t.destroy();
    }), super.destroy();
  }
  getAllOfCombinations(t) {
    const e = [], s = (r, a) => ({ ...r, ...a }), n = (r, a) => {
      if (a.length === 0) {
        e.push(r);
        return;
      }
      const o = a[0];
      n(s(r, o), a.slice(1)), n(r, a.slice(1));
    };
    for (let r = 0; r < t.length; r++)
      n(t[r], t.slice(r + 1));
    return e.sort((r, a) => Object.keys(r).length - Object.keys(a).length), e;
  }
}
class Ue extends D {
  setUI() {
    this.ui = new Zt(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.activeInstanceChanged = !0, this.lastIndex = 0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.on("set-value", () => {
      this.onSetValue();
    });
    const t = R(this.schema);
    if (l($(this.schema)) || l(z(this.schema))) {
      const s = l($(this.schema)) ? $(this.schema) : z(this.schema), n = k(this.schema);
      delete n.anyOf, delete n.oneOf, delete n.options, s.forEach((r, a) => {
        r = { ...n, ...r }, this.jedi.refParser && (r = this.jedi.refParser.expand(r));
        let o = "Option-" + (a + 1);
        const c = f(r, "switcherTitle"), d = I(r);
        l(d) && (o = d), l(c) && (o = c), this.switcherOptionValues.push(a), this.switcherOptionsLabels.push(o), this.schemas.push(r);
      });
    } else if (x(t))
      t.forEach((s, n) => {
        const r = K(this.schema), a = {
          ...r,
          type: s,
          title: s[0].toUpperCase() + s.slice(1)
        };
        l(r.title) && (a.title = r.title), this.switcherOptionValues.push(n), this.switcherOptionsLabels.push(s.charAt(0).toUpperCase() + s.slice(1)), this.schemas.push(a);
      });
    else if (t === "any" || !t) {
      const s = k(this.schema);
      this.schemas = [
        { ...s, type: "object" },
        { ...s, type: "array" },
        { ...s, type: "string" },
        { ...s, type: "number" },
        { ...s, type: "integer" },
        { ...s, type: "boolean" },
        { ...s, type: "null" }
      ], this.schemas.forEach((n, r) => {
        this.switcherOptionValues.push(r);
      }), this.switcherOptionsLabels = [
        "Object",
        "Array",
        "String",
        "Number",
        "Integer",
        "Boolean",
        "Null"
      ];
    }
    this.schemas.forEach((s) => {
      const n = this.jedi.createInstance({
        jedi: this.jedi,
        schema: s,
        path: this.path,
        parent: this.parent,
        value: k(this.value)
      });
      l(this.value) && n.setValue(this.value, !1), n.unregister(), n.on("change", () => {
        this.activeInstanceChanged = !0, this.setValue(this.activeInstance.getValue());
      }), this.instances.push(n), this.register();
    });
    const e = l(this.if) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value);
    this.switchInstance(e, this.value);
  }
  switchInstance(t, e) {
    this.lastIndex = this.index, this.index = t, this.activeInstance = this.instances[t], l(e) && this.activeInstance.setValue(e, !1), this.setValue(this.activeInstance.getValue());
  }
  onSetValue() {
    if (Pt(this.activeInstance.getValue(), this.value) || this.activeInstanceChanged) {
      this.activeInstanceChanged = !1;
      const t = l(this.if) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value);
      this.switchInstance(t, this.value);
    }
  }
  reassignValues() {
    const t = this.instances[this.lastIndex].getValue(), e = this.activeInstance.getValue();
    if (m(t) && m(e)) {
      const s = $t(e, t);
      this.activeInstance.setValue(s, !1);
    }
  }
  getIfIndex(t) {
    const e = new w({ schema: this.if, data: t }), s = e.getErrors();
    return e.destroy(), s.length === 0 ? 0 : 1;
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(t) {
    let e = 0, s, n;
    for (const r of this.instances) {
      const a = this.jedi.validator.getErrors(t, r.schema, r.getKey(), r.path);
      (U(s) || U(n)) && (s = e, n = a), a.length < n.length && (s = e, n = a), e++;
    }
    return s;
  }
  destroy() {
    this.instances.forEach((t) => {
      t.destroy();
    }), super.destroy();
  }
}
class Rt extends F {
  build() {
    this.control = this.theme.getCheckboxControl({
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.checked);
    });
  }
  sanitize(t) {
    return !!t;
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.checked = this.instance.getValue();
  }
}
class $e extends Rt {
  build() {
    this.control = this.theme.getRadiosControl({
      values: ["false", "true"],
      titles: f(this.instance.schema, "enumTitles") || ["false", "true"],
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((t) => {
      t.addEventListener("change", () => {
        const e = t.value === "true";
        this.instance.setValue(e);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((t) => {
      const e = t.value === "true";
      t.checked = e === this.instance.getValue();
    });
  }
}
class Ke extends Rt {
  build() {
    this.control = this.theme.getSelectControl({
      values: ["false", "true"],
      titles: f(this.instance.schema, "enumTitles") || ["false", "true"],
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const t = this.control.input.value === "true";
      this.instance.setValue(t);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue() === !0 ? "true" : "false";
  }
}
class ze extends D {
  setUI() {
    const t = R(this.schema), e = B(this.schema);
    t === "boolean" && e === "radio" ? this.ui = new $e(this) : t === "boolean" && e === "select" ? this.ui = new Ke(this) : t === "boolean" && (this.ui = new Rt(this));
  }
}
class Ht extends F {
  build() {
    this.propertyActivators = {};
    const t = this.instance.schema.options || {};
    let e = !0;
    const s = St(this.instance.schema);
    l(s) && s === !1 && (e = !1);
    let n = !1;
    l(this.instance.jedi.options.editableProperties) && (n = this.instance.jedi.options.editableProperties), l(t.editableProperties) && (n = t.editableProperties), this.control = this.theme.getObjectControl({
      title: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      id: S(this.instance.path),
      description: j(this.instance.schema),
      editableProperties: n,
      addProperty: e
    });
  }
  addEventListeners() {
    this.control.addPropertyBtn.addEventListener("click", () => {
      const t = this.control.addPropertyControl.input.value.split(" ").join("");
      if (t.length === 0 || l(this.instance.value[t]))
        return;
      let n = {};
      const r = St(this.instance.schema);
      l(r) && (n = r);
      const a = this.instance.createChild(n, t);
      a.activate(), this.instance.properties[t] = { schema: n }, this.instance.setValue(this.instance.value), this.control.addPropertyControl.input.value = "";
      const o = this.control.ariaLive;
      o.innerHTML = "";
      const c = I(a.schema), d = l(c) ? c : t, h = this.theme.getAriaLiveMessage();
      h.textContent = d + " field was added to the form", o.appendChild(h);
    });
  }
  sanitize(t) {
    return m(t) ? t : {};
  }
  getInvalidFeedback(t) {
    return this.theme.getAlert(t);
  }
  refreshPropertiesSlot() {
    const t = f(this.instance.schema, "editableProperties");
    (wt(this.instance.jedi.options.editableProperties, !0) || wt(t, !0)) && Object.keys(this.instance.properties).forEach((e) => {
      const s = this.instance.isRequired(e), n = this.instance.isDependentRequired(e), r = !s && !n, a = this.propertyActivators[e], o = this.control.ariaLive, c = this.instance.properties[e].schema, d = I(c), h = this.instance.path + this.instance.jedi.pathSeparator + e, u = S(h) + "-activator", p = l(d) ? d : e;
      if (r && !a) {
        const b = this.theme.getCheckboxControl({
          id: u,
          label: p,
          titleHidden: !1
        }), L = b.input;
        this.propertyActivators[e] = L, L.addEventListener("change", () => {
          o.innerHTML = "";
          const C = this.theme.getAriaLiveMessage();
          L.checked ? (this.instance.getChild(e) || this.instance.createChild(c, e), this.instance.getChild(e).activate(), C.textContent = p + " field was added to the form", o.appendChild(C)) : (this.instance.getChild(e).deactivate(), C.textContent = p + " field was removed from the form", o.appendChild(C));
        }), this.control.propertiesActivators.appendChild(b.container);
      }
      const g = this.propertyActivators[e];
      g && (g.disabled = this.disabled, g.checked = N(this.instance.getValue(), e));
    });
  }
  refreshEditors() {
    this.instance.children.forEach((t) => {
      t.isActive ? (t.ui.control.container.parentNode === null && this.control.childrenSlot.appendChild(t.ui.control.container), this.disabled || this.instance.isReadOnly() ? t.ui.disable() : t.ui.enable()) : t.ui.control.container.parentNode && t.ui.control.container.parentNode.removeChild(t.ui.control.container);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.refreshPropertiesSlot(), this.refreshEditors();
  }
}
class Je extends Ht {
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    let t = this.theme.getRow();
    this.control.childrenSlot.appendChild(t), this.instance.children.forEach((e) => {
      if (e.isActive) {
        const s = f(e.schema, "columns") || 12, n = f(e.schema, "offset") || 0, r = this.theme.getCol(12, s, n);
        f(e.schema, "newRow") === !0 && (t = this.theme.getRow(), this.control.childrenSlot.appendChild(t)), t.appendChild(r), r.appendChild(e.ui.control.container), this.disabled || this.instance.isReadOnly() ? e.ui.disable() : e.ui.enable();
      }
    });
  }
}
class Ge extends Ht {
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    const t = this.instance.schema["x-control-cols"], e = this.instance.schema["x-control-stacked"], s = this.instance.schema["x-control-variant"], n = this.theme.getRow(), r = l(t) ? t : 3, a = this.theme.getCol(12, r), o = this.theme.getCol(12, 12 - r), c = this.theme.getTabContent(), d = this.theme.getTabList({
      stacked: l(e) ? e : !1,
      type: l(s) ? s : "pils"
    });
    this.control.childrenSlot.appendChild(n), n.appendChild(a), n.appendChild(o), a.appendChild(d), o.appendChild(c), this.instance.children.forEach((h, u) => {
      if (h.isActive) {
        const p = u === this.activeTabIndex, g = S(h.path), b = I(h.schema), L = this.theme.getTab({
          title: l(b) ? b : h.getKey(),
          id: g,
          active: p
        });
        L.list.addEventListener("click", () => {
          this.activeTabIndex = u;
        }), this.theme.setTabPaneAttributes(h.ui.control.container, p, g), d.appendChild(L.list), c.appendChild(h.ui.control.container), this.disabled || this.instance.isReadOnly() ? h.ui.disable() : h.ui.enable();
      }
    });
  }
}
class _e extends D {
  setUI() {
    const t = R(this.schema), e = B(this.schema), s = this.schema["x-control"];
    t === "object" && e === "grid" ? this.ui = new Je(this) : t === "object" && s === "nav" ? this.ui = new Ge(this) : this.ui = new Ht(this);
  }
  prepare() {
    this.properties = {};
    const t = Mt(this.schema);
    l(t) && Object.keys(t).forEach((e) => {
      const s = t[e];
      this.properties[e] = { schema: s };
      let n = !0;
      const r = f(this.schema, "deactivateNonRequired"), a = f(s, "deactivateNonRequired");
      this.isNotRequired(e) && l(r) && r === !0 && (n = !1), this.isNotRequired(e) && l(a) && a === !0 && (n = !1), n && this.createChild(s, e);
    }), this.refreshInstances(), this.on("set-value", () => {
      this.refreshInstances();
    });
  }
  /**
   * Returns true if the property is required
   */
  isRequired(t) {
    const e = Qt(this.schema);
    return l(e) && e.includes(t);
  }
  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired(t) {
    const e = Jt(this.schema);
    if (l(e)) {
      let s = [];
      return Object.keys(e).forEach((n) => {
        l(this.value[n]) && (s = e[n].filter((a) => !N(this.value, a)));
      }), s.includes(t);
    }
    return !1;
  }
  createChild(t, e, s) {
    const n = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path + this.jedi.pathSeparator + e,
      parent: this,
      value: k(s)
    });
    this.children.push(n), this.value[e] = n.getValue();
    const r = f(this.schema, "deactivateNonRequired");
    return this.isNotRequired(e) && l(r) && r === !0 && n.deactivate(), n;
  }
  isNotRequired(t) {
    return !this.isRequired(t) && !this.isDependentRequired(t);
  }
  deleteChild(t) {
    for (let e = this.children.length - 1; e >= 0; e--) {
      const s = this.children[e];
      s.getKey() === t && (s.destroy(), this.children.splice(e, 1), this.onChildChange());
    }
  }
  getChild(t) {
    return this.children.find((e) => t === e.getKey().split(this.jedi.pathSeparator).pop());
  }
  onChildChange() {
    const t = {};
    this.children.forEach((e) => {
      e.isActive && (t[e.getKey()] = e.getValue());
    }), this.setValue(t);
  }
  refreshInstances() {
    const t = this.getValue();
    if (m(t)) {
      Object.keys(t).forEach((e) => {
        const s = this.getChild(e);
        if (s) {
          s.activate();
          const n = s.getValue(), r = t[s.getKey()];
          Pt(n, r) && s.setValue(r, !1);
        } else
          this.createChild({}, e, t[e]);
      });
      for (let e = this.children.length - 1; e >= 0; e--) {
        const s = this.children[e], n = s.getKey();
        U(t[n]) && (this.getChild(n) ? s.deactivate() : this.deleteChild(n));
      }
    }
  }
}
class te extends F {
  build() {
    this.control = this.theme.getArrayControl({
      title: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      id: S(this.instance.path),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.instance.addItem();
    });
  }
  getInvalidFeedback(t) {
    return this.theme.getAlert(t);
  }
  sanitize(t) {
    return x(t) ? t : [];
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const t = _t(this.instance.schema), e = Wt(this.instance.schema);
    l(t) && t === this.instance.value.length && this.control.addBtn.setAttribute("disabled", ""), this.control.childrenSlot.innerHTML = "", this.instance.children.forEach((s) => {
      const n = Number(s.getKey()), r = this.theme.getDeleteItemBtn(), a = this.theme.getMoveUpItemBtn(), o = this.theme.getMoveDownItemBtn();
      s.ui.control.arrayActions.innerHTML = "", s.ui.control.arrayActions.appendChild(r), s.ui.control.arrayActions.appendChild(a), s.ui.control.arrayActions.appendChild(o), this.control.childrenSlot.appendChild(s.ui.control.container), r.addEventListener("click", () => {
        const c = Number(s.path.split(this.instance.jedi.pathSeparator).pop());
        this.instance.deleteItem(c);
      }), a.addEventListener("click", () => {
        const c = n - 1;
        this.instance.move(n, c);
      }), o.addEventListener("click", () => {
        const c = n + 1;
        this.instance.move(n, c);
      }), this.disabled || this.instance.isReadOnly() ? s.ui.disable() : s.ui.enable(), l(e) && this.instance.value.length <= e && r.setAttribute("disabled", "");
    });
  }
}
class We extends te {
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeTabIndex = this.instance.value.length, this.instance.addItem();
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.childrenSlot.innerHTML = "";
    const t = f(this.instance.schema, "navCols"), e = f(this.instance.schema, "navStacked"), s = f(this.instance.schema, "navType"), n = this.theme.getRow(), r = l(t) ? t : 3, a = this.theme.getCol(12, r), o = this.theme.getCol(12, 12 - r), c = this.theme.getTabContent(), d = this.theme.getTabList({
      stacked: l(e) ? e : !1,
      type: l(s) ? s : "pils"
    });
    this.control.childrenSlot.appendChild(n), n.appendChild(a), n.appendChild(o), a.appendChild(d), o.appendChild(c), this.instance.children.forEach((h, u) => {
      const p = this.theme.getDeleteItemBtn(), g = this.theme.getMoveUpItemBtn(), b = this.theme.getMoveDownItemBtn();
      h.ui.control.arrayActions.innerHTML = "", h.ui.control.arrayActions.appendChild(p), h.ui.control.arrayActions.appendChild(g), h.ui.control.arrayActions.appendChild(b), this.control.childrenSlot.appendChild(h.ui.control.container);
      let L;
      const C = f(this.instance.schema, "itemTemplate");
      if (C) {
        const A = C, gt = {
          i0: u,
          i1: u + 1,
          value: h.getValue()
        };
        L = y(A, gt);
      } else {
        const A = I(h.schema);
        L = l(A) ? A + " " + (u + 1) : h.getKey();
      }
      p.addEventListener("click", () => {
        this.activeTabIndex = re(u - 1, 0, this.instance.value.length - 1), this.instance.deleteItem(u);
      }), g.addEventListener("click", () => {
        const A = u - 1;
        this.activeTabIndex = A, this.instance.move(u, A);
      }), b.addEventListener("click", () => {
        const A = u + 1;
        this.activeTabIndex = A, this.instance.move(u, A);
      });
      const E = u === this.activeTabIndex, q = S(h.path), M = this.theme.getTab({
        title: L,
        id: q,
        active: E
      });
      M.list.addEventListener("click", () => {
        this.activeTabIndex = u;
      }), this.theme.setTabPaneAttributes(h.ui.control.container, E, q), d.appendChild(M.list), c.appendChild(h.ui.control.container), this.disabled || this.instance.isReadOnly() ? h.ui.disable() : h.ui.enable(), u === 0 && g.setAttribute("disabled", ""), this.instance.value.length - 1 === u && b.setAttribute("disabled", "");
    });
  }
}
class Qe extends D {
  setUI() {
    const t = R(this.schema), e = B(this.schema);
    t === "array" && e === "nav" ? this.ui = new We(this) : this.ui = new te(this);
  }
  prepare() {
    this.refreshChildren(), this.on("set-value", () => {
      this.refreshChildren();
    });
  }
  createItemInstance(t) {
    let e;
    const s = this.children.length, n = Gt(this.schema), r = Tt(this.schema);
    e = l(n) ? n : {}, l(r) && l(r[s]) && (e = r[s]);
    const o = this.jedi.createInstance({
      jedi: this.jedi,
      schema: e,
      path: this.path + this.jedi.pathSeparator + s,
      parent: this,
      value: k(t)
    });
    return l(t) && o.setValue(t, !1), o;
  }
  move(t, e) {
    const s = k(this.getValue()), n = s[t];
    s.splice(t, 1), s.splice(e, 0, n), this.setValue(s);
  }
  addItem() {
    const t = this.createItemInstance(), e = k(this.getValue());
    e.push(t.getValue()), t.destroy(), this.setValue(e);
  }
  deleteItem(t) {
    const s = k(this.getValue()).filter((n, r) => r !== t);
    this.setValue(s);
  }
  onChildChange() {
    const t = [];
    this.children.forEach((e) => {
      t.push(e.getValue());
    }), this.setValue(t);
  }
  refreshChildren() {
    this.children = [];
    const t = this.getValue();
    x(t) && t.forEach((e) => {
      const s = this.createItemInstance(e);
      this.children.push(s);
    });
  }
}
class Bt extends F {
  build() {
    const t = ["hidden", "color", "date", "datetime-local", "email", "number", "month", "password", "search", "time", "tel", "text", "textarea", "url", "week"], e = B(this.instance.schema);
    this.control = this.theme.getInputControl({
      type: t.includes(e) ? e : "text",
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden") || e === "hidden",
      description: j(this.instance.schema)
    }), e === "color" && this.instance.value.length === 0 && this.instance.setValue("#000000", !1);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  sanitize(t) {
    return String(t);
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class Xe extends Bt {
  build() {
    this.control = this.theme.getRadiosControl({
      values: T(this.instance.schema),
      titles: f(this.instance.schema, "enumTitles") || T(this.instance.schema),
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((t) => {
      t.addEventListener("change", () => {
        this.instance.setValue(t.value);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((t) => {
      t.checked = t.value === this.instance.getValue();
    });
  }
}
class Ye extends Bt {
  build() {
    this.control = this.theme.getSelectControl({
      values: T(this.instance.schema),
      titles: f(this.instance.schema, "enumTitles") || T(this.instance.schema),
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    }), this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
}
class Ze extends F {
  build() {
    this.control = this.theme.getTextareaControl({
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden") || B(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  sanitize(t) {
    return String(t);
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class ts extends D {
  setUI() {
    const t = R(this.schema), e = T(this.schema), s = B(this.schema);
    t === "string" && l(e) && s === "radio" ? this.ui = new Xe(this) : t === "string" && s === "textarea" ? this.ui = new Ze(this) : t === "string" && l(e) ? this.ui = new Ye(this) : t === "string" && (this.ui = new Bt(this));
  }
}
class qt extends F {
  build() {
    this.control = this.theme.getInputControl({
      type: "number",
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden") || B(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const t = this.sanitize(this.control.input.value);
      this.instance.setValue(t);
    });
  }
  sanitize(t) {
    return R(this.instance.schema) === "integer" ? Math.floor(Number(t)) : Number(t);
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const t = this.instance.getValue();
    O(t) && (this.control.input.value = this.instance.getValue());
  }
}
class es extends qt {
  build() {
    this.control = this.theme.getRadiosControl({
      values: T(this.instance.schema),
      titles: f(this.instance.schema, "enumTitles") || T(this.instance.schema),
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((t) => {
      t.addEventListener("change", () => {
        const e = this.sanitize(t.value);
        this.instance.setValue(e);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((t) => {
      t.checked = Number(t.value) === Number(this.instance.getValue());
    });
  }
}
class ss extends qt {
  build() {
    this.control = this.theme.getSelectControl({
      values: T(this.instance.schema),
      titles: f(this.instance.schema, "enumTitles") || T(this.instance.schema),
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const t = this.sanitize(this.control.input.value);
      this.instance.setValue(t);
    });
  }
}
class is extends D {
  setUI() {
    const t = R(this.schema), e = T(this.schema), s = B(this.schema), n = t === "number" || t === "integer";
    n && l(e) && s === "radio" ? this.ui = new es(this) : n && l(e) ? this.ui = new ss(this) : n && (this.ui = new qt(this));
  }
}
class ns extends F {
  build() {
    this.control = this.theme.getNullControl({
      id: S(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: f(this.instance.schema, "titleHidden") || B(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  sanitize() {
    return null;
  }
}
class rs extends D {
  setUI() {
    this.ui = new ns(this);
  }
}
class as extends Yt {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor(t) {
    super(), this.options = Object.assign({
      container: null,
      refParser: null,
      editableProperties: !1,
      schema: {},
      showErrors: "change",
      data: void 0,
      validateFormat: !1
    }, t), this.rootName = "#", this.pathSeparator = "/", this.instances = {}, this.root = null, this.theme = null, this.validator = null, this.schema = {}, this.refParser = this.options.refParser ? this.options.refParser : null, this.init();
  }
  /**
   * Initializes instance properties
   * @private
   */
  init() {
    this.schema = this.options.schema, this.validator = new ke({ refParser: this.refParser, validateFormat: this.options.validateFormat }), this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    }), l(this.options.data) && this.root.setValue(this.options.data, !1), this.options.container && (this.container = this.options.container, this.appendHiddenInput(), this.container.appendChild(this.root.ui.control.container), this.container.classList.add("jedi-ready")), this.bindEventListeners();
  }
  bindEventListeners() {
    this.root && this.root.on("change", () => {
      this.emit("change");
    }), this.hiddenInput && this.on("change", () => {
      this.hiddenInput.value = JSON.stringify(this.getValue());
    });
  }
  /**
   * Appends a hidden input to the root container whose value will be the value
   * of the root instance.
   * @private
   */
  appendHiddenInput() {
    const t = this.root.ui.theme.getInputControl({
      type: "hidden",
      id: "jedi-hidden-input"
    });
    this.hiddenInput = t.input, this.hiddenInput.setAttribute("name", "json"), this.hiddenInput.removeAttribute("aria-describedby"), this.container.appendChild(this.hiddenInput), this.hiddenInput.value = JSON.stringify(this.getValue());
  }
  /**
   * Adds a child instance pointer to the instances list
   * @private
   */
  register(t) {
    this.instances[t.path] = t;
  }
  /**
   * Deletes a child instance pointer from the instances list
   * @private
   */
  unregister(t) {
    this.instances[t.path] = null, delete this.instances[t.path];
  }
  /**
   * Creates a json instance and dereference schema on the fly if needed.
   * @private
   */
  createInstance(t) {
    this.refParser && (t.schema = this.refParser.expand(t.schema, t.path));
    const e = R(t.schema), s = z(t.schema), n = $(t.schema), r = jt(t.schema), a = Vt(t.schema), o = Ot(t.schema);
    if (l(n) || l(s) || e === "any" || x(e) || U(e))
      return new Ue(t);
    if (l(r) && (l(a) || l(o)))
      return new Fe(t);
    if (e === "object")
      return new _e(t);
    if (e === "array")
      return new Qe(t);
    if (e === "string")
      return new ts(t);
    if (e === "number" || e === "integer")
      return new is(t);
    if (e === "boolean")
      return new ze(t);
    if (e === "null")
      return new rs(t);
  }
  /**
   * Returns the value of the root instance
   * @return {*}
   */
  getValue() {
    return this.root.getValue();
  }
  /**
   * Sets the value of the root instance
   */
  setValue() {
    this.root.setValue(...arguments);
  }
  /**
   * Returns an instance by path
   * @return {*}
   */
  getInstance(t) {
    return this.instances[t];
  }
  /**
   * Disables the root instance and it's children user interfaces
   */
  disable() {
    this.root.ui.disable();
  }
  /**
   * Enables the root instance and it's children user interfaces
   */
  enable() {
    this.root.ui.enable();
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    let t = [];
    return Object.keys(this.instances).forEach((e) => {
      const s = this.instances[e];
      t = [...t, ...s.getErrors()];
    }), t;
  }
  /**
   * Destroy the root instance and it's children
   */
  destroy() {
    this.root.destroy(), this.options.container && (this.container.innerHTML = ""), Object.keys(this).forEach((t) => {
      delete this[t];
    });
  }
}
const w = as;
class os {
  constructor() {
    this.refs = {};
  }
  async dereference(t) {
    await this.traverseExternal(t), this.traverseLocal(t);
  }
  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * Initially the added properties will habe a value of null. This value will be later
   * replaced with the resolved schema for that json path using resolveExternal() and resolveLocal().
   *
   * It also adds a new property in the this.refs object with key being the json path to that schema
   * and value being the schema.
   * @param schema
   * @param path
   */
  async traverseExternal(t, e = "#") {
    if (!(typeof t != "object" || t === null))
      for (const [s, n] of Object.entries(t)) {
        const r = e ? `${e}/${s}` : `/${s}`;
        if (this.hasRef(t)) {
          const a = t.$ref;
          if (this.refs[a])
            return;
          if (this.refs[a] = null, this.hasExternalRef(t)) {
            const o = await this.resolveExternal(t);
            await this.traverseExternal(o, r);
          }
        }
        this.refs[e] = t, await this.traverseExternal(n, r);
      }
  }
  traverseLocal(t, e = "#") {
    if (!(typeof t != "object" || t === null))
      for (const [s, n] of Object.entries(t)) {
        const r = e ? `${e}/${s}` : `/${s}`;
        if (this.hasRef(t)) {
          const a = t.$ref;
          if (this.refs[a])
            return;
          if (!this.hasExternalRef(t)) {
            const o = this.resolveLocal(t);
            this.traverseLocal(o, r);
          }
        }
        this.traverseLocal(n, r);
      }
  }
  /**
   * Iterates through the this.refs object keys. If the key is an uri containing "http" or "https" then
   * uses that key as the url in a http request to retrieve the external schema. The retrieved schema
   * will be used for the value of that property
   */
  async resolveExternal(t) {
    const e = t.$ref, s = await this.load(e);
    return this.refs[e] = s, s;
  }
  /**
   * Iterates through the this.refs object keys and resolve all schemas that can be found in this.refs object
   */
  resolveLocal(t) {
    const e = t.$ref;
    let s = null;
    return this.refs[e] && (s = this.refs[e], this.refs[e] = s), s;
  }
  hasRef(t) {
    return typeof t.$ref < "u";
  }
  hasExternalRef(t) {
    const e = t.$ref;
    return typeof e != "string" ? !1 : e.startsWith("http") || e.startsWith("https");
  }
  isCircularRef(t) {
    const e = `"$ref":"${t}"`, s = this.refs[t];
    return JSON.stringify(s).includes(e);
  }
  isObject(t) {
    return t !== null && typeof t == "object";
  }
  expand(t) {
    const e = JSON.parse(JSON.stringify(t));
    if (this.isObject(e) && "$ref" in e) {
      const s = e.$ref;
      return delete e.$ref, Object.assign({}, this.refs[s], e);
    }
    return e;
  }
  /**
   * Loads a schema with a synchronous http request
   * @param uri
   * @returns {any}
   */
  async load(t) {
    try {
      const e = await fetch(t);
      if (!e.ok)
        throw new Error("Network response was not ok");
      return await e.json();
    } catch (e) {
      throw console.error("Error loading", t, e), e;
    }
  }
}
const cs = {
  Jedi: w,
  RefParser: os
};
export {
  cs as default
};
