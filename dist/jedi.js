function tt() {
  const n = [];
  return function(e, t) {
    if (typeof t != "object" || t === null)
      return t;
    for (; n.length > 0 && n.at(-1) !== this; )
      n.pop();
    return n.includes(t) ? "[Circular]" : (n.push(t), t);
  };
}
function k(n) {
  if (!(typeof n > "u"))
    return JSON.parse(JSON.stringify(n, tt()));
}
function st(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Fe(n, e, t) {
  return n.replace(new RegExp(st(e), "g"), t);
}
function P(n) {
  return Fe(Fe(n, "#", "root"), "/", "-");
}
function q(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Ae(n) {
  return Object.keys(n).sort().reduce((e, t) => (e[t] = n[t], e), {});
}
function Pe(n, e) {
  return f(n) && f(e) && (n = Ae(n), e = Ae(e)), JSON.stringify(n) === JSON.stringify(e);
}
function Se(n, e) {
  return !Pe(n, e);
}
function Oe(n) {
  return n === null;
}
function d(n) {
  return typeof n < "u";
}
function B(n) {
  return typeof n > "u";
}
function j(n) {
  return typeof n == "number";
}
function H(n) {
  return j(n) && n === Math.floor(n);
}
function R(n) {
  return typeof n == "string";
}
function O(n) {
  return typeof n == "boolean";
}
function I(n) {
  return Array.isArray(n);
}
function f(n) {
  return !Oe(n) && !I(n) && typeof n == "object";
}
function it(n) {
  let e = "any";
  return j(n) ? e = H(n) ? "integer" : "number" : R(n) ? e = "string" : O(n) ? e = "boolean" : I(n) ? e = "array" : Oe(n) ? e = "null" : f(n) && (e = "object"), e;
}
function U(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  return f(n) && f(t) && Object.keys(t).forEach((s) => {
    f(t[s]) ? (n[s] || Object.assign(n, {
      [s]: {}
    }), U(n[s], t[s])) : Object.assign(n, {
      [s]: t[s]
    });
  }), U(n, ...e);
}
function nt(n, e) {
  return Object.keys(e).forEach(function(t) {
    t in n && typeof n[t] == typeof e[t] && (n[t] = e[t]);
  }), n;
}
function rt(n, e) {
  const t = e.split(".");
  let s = n;
  for (const r of t)
    if (Array.isArray(s) && /^\d+$/.test(r)) {
      const i = parseInt(r);
      if (i >= 0 && i < s.length)
        s = s[i];
      else
        return;
    } else if (q(s, r))
      s = s[r];
    else
      return;
  return s;
}
function y(n, e) {
  return n.replace(/{{(.*?)}}/g, (t) => {
    t = t.replace(/\s/g, "");
    const s = t.split(/{{|}}/)[1];
    return rt(e, s);
  });
}
function at(n, e, t) {
  return Math.max(e, Math.min(n, t));
}
function ze(n) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (const s of n) {
    const r = JSON.stringify(s);
    t.has(r) || (t.add(r), e.push(s));
  }
  return e;
}
function Te(n) {
  return f(n.additionalProperties) || O(n.additionalProperties) ? n.additionalProperties : void 0;
}
function ot(n) {
  return f(n.propertyNames) || O(n.propertyNames) ? n.propertyNames : void 0;
}
function je(n) {
  return I(n.allOf) ? n.allOf : void 0;
}
function K(n) {
  return I(n.anyOf) ? n.anyOf : void 0;
}
function lt(n) {
  return n.const;
}
function ct(n) {
  return f(n.contains) || O(n.contains) ? n.contains : void 0;
}
function dt(n) {
  return n.default;
}
function Je(n) {
  return f(n.dependentRequired) ? n.dependentRequired : void 0;
}
function ht(n) {
  return f(n.dependentSchemas) ? n.dependentSchemas : void 0;
}
function T(n) {
  return R(n.description) ? n.description : void 0;
}
function ke(n) {
  return f(n.else) || O(n.else) ? n.else : void 0;
}
function M(n) {
  if (I(n.enum) && n.enum.length > 0)
    return n.enum;
}
function ut(n) {
  return j(n.exclusiveMaximum) ? n.exclusiveMaximum : void 0;
}
function pt(n) {
  return j(n.exclusiveMinimum) ? n.exclusiveMinimum : void 0;
}
function N(n) {
  return R(n.format) ? n.format : void 0;
}
function Me(n) {
  if (f(n.if) || O(n.if))
    return n.if;
}
function Ge(n) {
  return f(n.items) || O(n.items) ? n.items : void 0;
}
function mt(n) {
  return j(n.maximum) ? n.maximum : void 0;
}
function ft(n) {
  if (H(n.maxContains) && n.maxContains >= 0)
    return n.maxContains;
}
function Ze(n) {
  if (H(n.maxItems) && n.maxItems >= 0)
    return n.maxItems;
}
function gt(n) {
  if (H(n.maxLength) && n.maxLength >= 0)
    return n.maxLength;
}
function bt(n) {
  if (H(n.maxProperties))
    return n.maxProperties;
}
function vt(n) {
  return j(n.minimum) ? n.minimum : void 0;
}
function Ct(n) {
  if (H(n.minContains) && n.minContains >= 0)
    return n.minContains;
}
function _e(n) {
  if (H(n.minItems) && n.minItems >= 0)
    return n.minItems;
}
function yt(n) {
  if (H(n.minLength) && n.minLength >= 0)
    return n.minLength;
}
function Et(n) {
  if (H(n.minProperties) && n.minProperties >= 0)
    return n.minProperties;
}
function Lt(n) {
  if (j(n.multipleOf) && n.multipleOf >= 0)
    return n.multipleOf;
}
function xt(n) {
  return f(n.not) || O(n.not) ? n.not : void 0;
}
function m(n, e) {
  return n["x-options"] && n["x-options"][e] ? n["x-options"][e] : void 0;
}
function It(n) {
  return R(n.pattern) ? n.pattern : void 0;
}
function be(n) {
  return f(n.patternProperties) ? n.patternProperties : void 0;
}
function Re(n) {
  return I(n.prefixItems) ? n.prefixItems : void 0;
}
function ge(n) {
  return f(n.properties) ? n.properties : void 0;
}
function Ue(n) {
  return O(n.readOnly) ? n.readOnly : void 0;
}
function We(n) {
  return I(n.required) ? [...new Set(n.required)] : void 0;
}
function Ve(n) {
  return f(n.then) || O(n.then) ? n.then : void 0;
}
function w(n) {
  return R(n.title) ? n.title : void 0;
}
function V(n) {
  if (R(n.type) || I(n.type))
    return n.type;
}
function $(n) {
  return I(n.oneOf) ? n.oneOf : void 0;
}
function wt(n) {
  return O(n.unevaluatedProperties) ? n.unevaluatedProperties : void 0;
}
function At(n) {
  return O(n.uniqueItems) ? n.uniqueItems : void 0;
}
function z(n, e, t, s) {
  let r = [];
  const i = je(t);
  return d(i) && i.forEach((a) => {
    const o = new S({ refParser: n.refParser, schema: a, data: e, rootName: s }), l = o.getErrors();
    o.destroy(), r = [...r, ...l], r = ze(r);
  }), r;
}
const b = {
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
function J(n, e, t, s, r) {
  const i = [], a = yt(t);
  return R(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length < a && i.push({
    messages: [
      y(b.errorMinLength, {
        minLength: a
      })
    ],
    path: r,
    constrain: "minLength"
  })), i;
}
function G(n, e, t, s, r) {
  const i = [], a = K(t);
  if (d(a)) {
    let o = !1;
    a.forEach((l) => {
      const c = new S({ refParser: n.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && (o = !0);
    }), o || i.push({
      messages: [
        b.errorAnyOf
      ],
      path: r,
      constrain: "anyOf"
    });
  }
  return i;
}
function Z(n, e, t, s, r) {
  const i = [], a = M(t);
  return d(a) && !a.some((l) => JSON.stringify(e) === JSON.stringify(l)) && i.push({
    messages: [
      y(b.errorEnum, {
        enum: JSON.stringify(a)
      })
    ],
    path: r,
    constrain: "enum"
  }), i;
}
function _(n, e, t, s, r) {
  const i = [], a = ut(t);
  return j(e) && d(a) && e >= a && i.push({
    messages: [
      y(b.errorExclusiveMaximum, {
        exclusiveMaximum: a
      })
    ],
    path: r,
    constrain: "exclusiveMaximum"
  }), i;
}
function W(n, e, t, s, r) {
  const i = [], a = pt(t);
  return j(e) && d(a) && e <= a && i.push({
    messages: [
      y(b.errorExclusiveMinimum, {
        exclusiveMinimum: a
      })
    ],
    path: r,
    constrain: "exclusiveMinimum"
  }), i;
}
function X(n, e, t, s, r) {
  const i = [], a = N(t);
  let o = n.validateFormat;
  if (m(t, "validateFormat") && (o = t.options.validateFormat), d(a) && R(e) && o) {
    let l;
    a === "email" && (l = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i)), a === "url" && (l = new RegExp(/^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:@](?:[^\s:@-]*[^\s:@])?\.?)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d{2,5})?(?:\/[^\s]*)?$/i)), a === "uuid" && (l = new RegExp(/^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/i)), d(l) && !l.test(e) && i.push({
      messages: [
        y(b.errorFormat, { format: a })
      ],
      path: r,
      constrain: "format"
    });
  }
  return i;
}
function Q(n, e, t, s, r) {
  const i = [], a = Ge(t), o = Re(t);
  if (I(e) && d(a)) {
    const l = d(o) ? o.length : 0;
    a === !1 && e.length > 0 && e.length > l && i.push({
      messages: [b.errorItems],
      path: r,
      constrain: "items"
    });
  }
  return i;
}
function Y(n, e, t, s, r) {
  const i = [], a = Ze(t);
  return I(e) && d(a) && e.length > a && i.push({
    messages: [
      y(b.errorMaxItems, {
        maxItems: a
      })
    ],
    path: r,
    constrain: "maxItems"
  }), i;
}
function ee(n, e, t, s, r) {
  const i = [], a = gt(t);
  return R(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length > a && i.push({
    messages: [
      y(b.errorMaxLength, {
        maxLength: a
      })
    ],
    path: r,
    constrain: "maxLength"
  })), i;
}
function te(n, e, t, s, r) {
  const i = [], a = bt(t);
  return f(e) && d(a) && Object.keys(e).length > a && i.push({
    messages: [
      y(b.errorMaxProperties, {
        maxProperties: a
      })
    ],
    path: r,
    constrain: "maxProperties"
  }), i;
}
function se(n, e, t, s, r) {
  const i = [], a = vt(t);
  return j(e) && d(a) && e < a && i.push({
    messages: [
      y(b.errorMinimum, {
        minimum: a
      })
    ],
    path: r,
    constrain: "minimum"
  }), i;
}
function ie(n, e, t, s, r) {
  const i = [], a = _e(t);
  return I(e) && d(a) && e.length < a && i.push({
    messages: [
      y(b.errorMinItems, {
        minItems: a
      })
    ],
    path: r,
    constrain: "minItems"
  }), i;
}
function ne(n, e, t, s, r) {
  const i = [], a = Et(t);
  return f(e) && d(a) && Object.keys(e).length < a && i.push({
    messages: [
      y(b.errorMinProperties, {
        minProperties: a
      })
    ],
    path: r,
    constrain: "minProperties"
  }), i;
}
function re(n, e, t, s, r) {
  const i = [], a = Lt(t);
  if (j(e) && d(a)) {
    if (e === 0)
      return i;
    (!(e / a === Math.floor(e / a)) || e.toString().includes("e")) && i.push({
      messages: [
        y(b.errorMultipleOf, {
          multipleOf: a
        })
      ],
      path: r,
      constrain: "multipleOf"
    });
  }
  return i;
}
function ae(n, e, t, s, r) {
  const i = [], a = xt(t);
  if (d(a)) {
    const o = new S({ refParser: n.refParser, schema: a, data: e }), l = o.getErrors();
    o.destroy(), l.length === 0 && i.push({
      messages: [
        y(b.errorNot)
      ],
      path: r,
      constrain: "not"
    });
  }
  return i;
}
function oe(n, e, t, s, r) {
  const i = [], a = $(t);
  if (d(a)) {
    let o = 0;
    a.forEach((l) => {
      const c = new S({ refParser: n.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && o++;
    }), o !== 1 && i.push({
      messages: [
        y(b.errorOneOf, {
          counter: o
        })
      ],
      path: r,
      constrain: "oneOf"
    });
  }
  return i;
}
function le(n, e, t, s, r) {
  const i = [], a = It(t);
  return R(e) && d(a) && !new RegExp(a).test(e) && i.push({
    messages: [
      y(b.errorPattern, {
        pattern: a
      })
    ],
    path: r,
    constrain: "pattern"
  }), i;
}
function ce(n, e, t, s) {
  let r = [];
  const i = be(t);
  return f(e) && d(i) && Object.keys(e).forEach((a) => {
    Object.keys(i).forEach((o) => {
      if (new RegExp(o).test(a)) {
        const c = i[o], h = new S({
          refParser: n.refParser,
          schema: c,
          data: e[a]
        }), u = h.getErrors().map((p) => ({
          messages: p.messages,
          path: s + "/" + a,
          constrain: "patternProperties"
        }));
        r = [...r, ...u], h.destroy();
      }
    });
  }), r;
}
function de(n, e, t, s, r) {
  const i = [], a = We(t);
  if (f(e) && d(a)) {
    const o = [], l = Object.keys(e);
    a.forEach((h) => {
      l.includes(h) || o.push(h);
    }), o.length > 0 && i.push({
      messages: [
        y(b.errorRequired, {
          required: o.join(", ")
        })
      ],
      path: r,
      constrain: "required"
    });
  }
  return i;
}
function he(n, e, t, s, r) {
  const i = [], a = V(t);
  if (a === "any")
    return i;
  if (d(a)) {
    const o = {
      string: (c) => R(c),
      number: (c) => j(c),
      integer: (c) => H(c),
      boolean: (c) => O(c),
      array: (c) => I(c),
      object: (c) => f(c),
      null: (c) => Oe(c)
    };
    let l = !0;
    I(a) ? l = a.some((c) => o[c](e)) : l = o[a](e), l || i.push({
      messages: [
        y(b.errorType, {
          type: a,
          valueType: it(e)
        })
      ],
      path: r,
      constrain: "type"
    });
  }
  return i;
}
function ue(n, e, t, s, r) {
  const i = [], a = mt(t);
  return j(e) && d(a) && e > a && i.push({
    messages: [
      y(b.errorMaximum, {
        maximum: a
      })
    ],
    path: r,
    constrain: "maximum"
  }), i;
}
function pe(n, e, t, s, r) {
  const i = [], a = At(t);
  if (I(e) && d(a) && a === !0) {
    const o = [];
    let l = !1;
    for (let h = 0; h < e.length; h++) {
      let u = e[h];
      f(u) && (u = Ae(u));
      const p = JSON.stringify(u);
      if (l = o.some((g) => g === p), l)
        break;
      o.push(p);
    }
    l && i.push({
      messages: [
        b.errorUniqueItems
      ],
      path: r,
      constrain: "uniqueItems"
    });
  }
  return i;
}
function me(n, e, t, s, r) {
  const i = [], a = Te(t), o = be(t), l = ge(t);
  if (f(e) && d(a)) {
    const c = l || {}, h = a, u = o || {};
    Object.keys(e).forEach((p) => {
      const g = Object.keys(u).some((E) => new RegExp(E).test(p)), L = q(c, p);
      if (!g && !L) {
        if (h === !1)
          i.push({
            messages: [
              y(b.errorAdditionalProperties, { property: p })
            ],
            path: r,
            constrain: "additionalProperties"
          });
        else if (f(h)) {
          const E = new S({
            refParser: n.refParser,
            schema: h,
            data: e[p]
          }), C = E.getErrors().map((v) => ({
            messages: v.messages,
            path: `${r}.${p}`,
            constrain: "additionalProperties"
          }));
          i.push(...C), E.destroy();
        }
      }
    });
  }
  return i;
}
const Pt = {
  additionalProperties: me,
  allOf: z,
  anyOf: G,
  enum: Z,
  exclusiveMaximum: _,
  exclusiveMinimum: W,
  format: X,
  items: Q,
  maximum: ue,
  maxItems: Y,
  maxLength: ee,
  maxProperties: te,
  minimum: se,
  minItems: ie,
  minLength: J,
  minProperties: ne,
  multipleOf: re,
  not: ae,
  oneOf: oe,
  pattern: le,
  patternProperties: ce,
  required: de,
  type: he,
  uniqueItems: pe
};
function ve(n, e, t, s, r) {
  const i = [], a = lt(t);
  return d(a) && Se(e, a) && i.push({
    messages: [
      y(b.errorConst, {
        const: JSON.stringify(a)
      })
    ],
    path: r,
    constrain: "const"
  }), i;
}
function Ce(n, e, t, s, r) {
  const i = [], a = ct(t), o = Ct(t), l = ft(t);
  if (I(e) && d(a)) {
    let c = 0;
    e.forEach((u) => {
      const p = new S({ refParser: n.refParser, schema: a, data: u });
      p.getErrors().length === 0 && c++, p.destroy();
    });
    const h = c === 0;
    d(o) ? c < o && i.push({
      messages: [
        y(b.errorMinContains, {
          counter: c,
          minContains: o
        })
      ],
      path: r,
      constrain: "minContains"
    }) : h && i.push({
      messages: [b.errorContains],
      path: r,
      constrain: "contains"
    }), d(l) && c > l && i.push({
      messages: [
        y(b.errorMaxContains, {
          counter: c,
          maxContains: l
        })
      ],
      path: r,
      constrain: "maxContains"
    });
  }
  return i;
}
function ye(n, e, t, s, r) {
  const i = [], a = Je(t);
  if (f(e) && d(a)) {
    let o = [];
    Object.keys(a).forEach((c) => {
      d(e[c]) && (o = a[c].filter((u) => !q(e, u)));
    }), o.length > 0 && i.push({
      messages: [
        y(b.errorDependentRequired, {
          dependentRequired: o.join(", ")
        })
      ],
      path: r,
      constrain: "dependentRequired"
    });
  }
  return i;
}
function Ee(n, e, t) {
  let s = [];
  const r = ht(t);
  return f(e) && d(r) && Object.keys(r).forEach((i) => {
    if (d(e[i])) {
      const a = r[i], o = new S({ refParser: n.refParser, schema: a, data: e }), l = o.getErrors();
      o.destroy(), s = [...s, ...l];
    }
  }), s;
}
function Le(n, e, t) {
  const s = [], r = Me(t), i = Ve(t), a = ke(t);
  if (d(r)) {
    if (B(i) && B(a))
      return s;
    const o = new S({ refParser: n.refParser, schema: r, data: e }), l = o.getErrors();
    o.destroy();
    let c = [], h = [];
    if (d(i)) {
      const u = new S({ refParser: n.refParser, schema: i, data: e });
      c = u.getErrors(), u.destroy();
    }
    if (d(a)) {
      const u = new S({ refParser: n.refParser, schema: a, data: e });
      h = u.getErrors(), u.destroy();
    }
    if (r === !0)
      return c;
    if (r === !1)
      return h;
    if (l.length === 0)
      return c;
    if (l.length > 0)
      return h;
  }
  return s;
}
function xe(n, e, t, s, r) {
  const i = [], a = Re(t);
  return I(e) && d(a) && a.forEach((o, l) => {
    const c = e[l];
    if (d(c)) {
      const h = new S({ refParser: n.refParser, schema: o, data: c }), u = h.getErrors();
      h.destroy(), u.length > 0 && i.push({
        messages: [
          y(b.errorPrefixItems, {
            index: l
          })
        ],
        path: r,
        constrain: "prefixItems"
      });
    }
  }), i;
}
const St = {
  additionalProperties: me,
  allOf: z,
  anyOf: G,
  const: ve,
  contains: Ce,
  dependentRequired: ye,
  dependentSchemas: Ee,
  enum: Z,
  exclusiveMaximum: _,
  exclusiveMinimum: W,
  format: X,
  if: Le,
  items: Q,
  maximum: ue,
  maxItems: Y,
  maxLength: ee,
  maxProperties: te,
  minimum: se,
  minItems: ie,
  minLength: J,
  minProperties: ne,
  multipleOf: re,
  not: ae,
  oneOf: oe,
  pattern: le,
  patternProperties: ce,
  prefixItems: xe,
  required: de,
  type: he,
  uniqueItems: pe
}, Ot = {
  additionalProperties: me,
  allOf: z,
  anyOf: G,
  const: ve,
  contains: Ce,
  dependentRequired: ye,
  dependentSchemas: Ee,
  enum: Z,
  exclusiveMaximum: _,
  exclusiveMinimum: W,
  format: X,
  if: Le,
  items: Q,
  maximum: ue,
  maxItems: Y,
  maxLength: ee,
  maxProperties: te,
  minimum: se,
  minItems: ie,
  minLength: J,
  minProperties: ne,
  multipleOf: re,
  not: ae,
  oneOf: oe,
  pattern: le,
  patternProperties: ce,
  prefixItems: xe,
  required: de,
  type: he,
  uniqueItems: pe
};
function Xe(n, e, t, s, r) {
  let i = [];
  const a = wt(t), o = be(t), l = ge(t), c = je(t), h = K(t), u = $(t);
  if (f(e) && d(a)) {
    let p = d(l) ? l : {};
    const g = a, L = o;
    [
      c,
      h,
      u
    ].forEach((C) => {
      d(C) && C.forEach((v) => {
        d(v.properties) && (p = { ...p, ...v.properties });
      });
    }), p && Object.keys(e).forEach((C) => {
      let v = !1;
      if (d(L) && Object.keys(L).forEach((x) => {
        v = new RegExp(x).test(C);
      }), !v && g === !1 && !q(p, C) && i.push({
        messages: [
          y(b.errorUnevaluatedProperties, {
            property: C
          })
        ],
        path: r,
        constrain: "unevaluatedProperties"
      }), !v && f(g) && !q(p, C)) {
        const x = new S({
          refParser: n.refParser,
          schema: g,
          data: e[C]
        }), A = x.getErrors().map((fe) => ({
          messages: fe.messages,
          path: C,
          constrain: "unevaluatedProperties"
        }));
        i = [...i, ...A], x.destroy();
      }
    });
  }
  return i;
}
const Tt = {
  additionalProperties: me,
  allOf: z,
  anyOf: G,
  const: ve,
  contains: Ce,
  dependentRequired: ye,
  dependentSchemas: Ee,
  enum: Z,
  exclusiveMaximum: _,
  exclusiveMinimum: W,
  format: X,
  if: Le,
  items: Q,
  maximum: ue,
  maxItems: Y,
  maxLength: ee,
  maxProperties: te,
  minimum: se,
  minItems: ie,
  minLength: J,
  minProperties: ne,
  multipleOf: re,
  not: ae,
  oneOf: oe,
  pattern: le,
  patternProperties: ce,
  prefixItems: xe,
  required: de,
  type: he,
  unevaluatedProperties: Xe,
  uniqueItems: pe
};
function jt(n, e, t, s, r) {
  const i = [], a = ot(t);
  return f(e) && d(a) && Object.keys(e).forEach((o) => {
    new S({
      refParser: n.refParser,
      schema: a,
      data: o
    }).getErrors().length > 0 && i.push({
      messages: [
        y(b.errorPropertyNames, { propertyName: o })
      ],
      path: r,
      constrain: "propertyNames"
    });
  }), i;
}
const Ke = {
  additionalProperties: me,
  allOf: z,
  anyOf: G,
  const: ve,
  contains: Ce,
  dependentRequired: ye,
  dependentSchemas: Ee,
  enum: Z,
  exclusiveMaximum: _,
  exclusiveMinimum: W,
  format: X,
  if: Le,
  items: Q,
  maximum: ue,
  maxItems: Y,
  maxLength: ee,
  maxProperties: te,
  minimum: se,
  minItems: ie,
  minLength: J,
  minProperties: ne,
  multipleOf: re,
  not: ae,
  oneOf: oe,
  pattern: le,
  patternProperties: ce,
  prefixItems: xe,
  propertyNames: jt,
  required: de,
  type: he,
  unevaluatedProperties: Xe,
  uniqueItems: pe
};
let kt = class {
  constructor(e = {}) {
    this.refParser = e.refParser, this.validateFormat = e.validateFormat ? e.validateFormat : !1, this.draft = Ke, this.jsonSchemaDrafts = {
      "http://json-schema.org/draft-04/schema#": Pt,
      "http://json-schema.org/draft-06/schema#": St,
      "http://json-schema.org/draft-07/schema#": Ot,
      "https://json-schema.org/draft/2019-09/schema": Tt,
      "https://json-schema.org/draft/2020-12/schema": Ke
    };
  }
  /**
   * Validates a value against it's schema
   */
  getErrors(e, t, s, r) {
    let i = [];
    const a = m(t, "messages"), o = k(t);
    return O(o) && o === !0 ? i : O(o) && o === !1 ? [{
      messages: d(a) ? a : ["invalid"],
      path: r
    }] : (Object.keys(this.draft).forEach((l) => {
      if (q(o, l)) {
        const c = this.draft[l], h = c(this, e, t, s, r);
        h && (i = [...i, ...h]);
      }
    }), i.length > 0 && a && (i = [
      {
        messages: a,
        path: r
      }
    ]), i);
  }
};
class Qe {
  constructor() {
    this.listeners = [];
  }
  /**
   * Adds a named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed when this event is emitted
   */
  on(e, t) {
    this.listeners.push({ name: e, callback: t });
  }
  off(e) {
    this.listeners = this.listeners.filter((t) => t.name !== e);
  }
  /**
   * Triggers the callback function of a named event listener
   * @public
   * @param {string} name - The name of the event to be emitted
   * @param {*} payload - Payload containing data that is passed along with the callback function
   */
  emit(e, t = void 0) {
    this.listeners.filter((r) => r.name === e).forEach((r) => {
      r.callback(t);
    });
  }
  /**
   * Deletes all properties of the class
   */
  destroy() {
    Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
}
class D extends Qe {
  constructor(e) {
    super(), this.jedi = e.jedi, this.path = e.path || this.jedi.rootName, this.schema = e.schema, this.value = d(e.value) ? e.value : void 0, this.isActive = !0, this.parent = e.parent || null, this.children = [], this.ui = null, this.init();
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
    if (B(this.value)) {
      let e;
      const t = V(this.schema);
      t === "boolean" && (e = !1), t === "number" && (e = 0), t === "integer" && (e = 0), t === "string" && (e = ""), t === "array" && (e = []), t === "object" && (e = {}), t === "null" && (e = null), this.value = e;
    }
  }
  setDefaultValue() {
    const e = dt(this.schema);
    d(e) && this.setValue(e, !1);
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
  setValue(e, t = !0) {
    this.value = e, this.emit("set-value", e), t && this.emit("change");
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
    const e = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
    return ze(e);
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
    let e = !1;
    return Ue(this.schema) === !0 && (e = !0), this.parent && Ue(this.parent.schema) === !0 && (e = !0), e;
  }
  /**
   * Destroy the instance and it's children
   */
  destroy() {
    this.listeners = [], this.children.forEach((e) => {
      e.destroy();
    }), this.unregister(), this.ui && this.ui.destroy(), Object.keys(this).forEach((e) => {
      delete this[e];
    }), super.destroy();
  }
}
const Mt = {
  properties: "glyphicon glyphicon-list",
  delete: "glyphicon glyphicon-trash",
  add: "glyphicon glyphicon-plus",
  moveUp: "glyphicon glyphicon-arrow-up",
  moveDown: "glyphicon glyphicon-arrow-down",
  collapse: "glyphicon glyphicon-chevron-down"
}, Rt = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down",
  collapse: "bi bi-chevron-down"
}, Vt = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down",
  collapse: "icon-chevron-down"
}, Ht = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down",
  collapse: "fa fa-chevron-down"
}, Bt = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down",
  collapse: "fas fa-chevron-down"
}, qt = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down",
  collapse: "fa-solid fa-chevron-down"
};
class Ie {
  constructor(e = null) {
    this.icons = e, this.useToggleEvents = !0, this.init();
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
  getIcon(e) {
    const t = document.createElement("i"), s = this.icons[e].split(" ");
    return s.length > 0 && s.forEach((r) => {
      t.classList.add(r);
    }), t;
  }
  /**
   * Used to wrap the editor UI elements
   * @private
   */
  getEditorContainer() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-container"), e;
  }
  /**
   * Used to group several controls
   * @private
   */
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("jedi-editor-fieldset"), e;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   * @private
   */
  getLegend(e) {
    const t = document.createElement("legend"), s = document.createElement("span");
    return t.classList.add("jedi-editor-legend"), s.classList.add("jedi-editor-legend-text"), t.setAttribute("aria-labelledby", "#legend-" + e.id), s.textContent = e.textContent, s.setAttribute("id", "#legend-" + e.id), t.appendChild(s), t;
  }
  /**
   * Container for complex editors like arrays, objects and multiple
   * @private
   */
  getCard() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-card"), e;
  }
  /**
   * Header for cards
   * @private
   */
  getCardHeader() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-card-header"), e;
  }
  /**
   * A body for the cards
   * @private
   */
  getCardBody() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-card-body"), e;
  }
  /**
   * Wrapper for editor actions buttons
   * @private
   */
  getActionsSlot() {
    const e = document.createElement("div");
    return e.classList.add("jedi-actions-slot"), e;
  }
  /**
   * Wrapper for editor array specific actions buttons
   * @private
   */
  getArrayActionsSlot() {
    const e = document.createElement("span");
    return e.classList.add("jedi-array-actions-slot"), e;
  }
  /**
   * Wrapper for child editors
   * @private
   */
  getChildrenSlot() {
    const e = document.createElement("div");
    return e.classList.add("jedi-children-slot"), e;
  }
  /**
   * Wrapper for error messages
   * @private
   */
  getMessagesSlot(e = {}) {
    const t = document.createElement("div");
    return t.classList.add("jedi-messages-slot"), t.setAttribute("aria-atomic", "false"), t.setAttribute("aria-live", "polite"), e.id && t.setAttribute("id", e.id), t;
  }
  /**
   * Wrapper for editor controls
   * @private
   */
  getControlSlot() {
    const e = document.createElement("div");
    return e.classList.add("jedi-control-slot"), e;
  }
  /**
   * Toggles the ObjectEditor properties wrapper visibility
   * @private
   */
  getPropertiesToggle(e) {
    const t = this.getButton(e);
    return t.classList.add("jedi-properties-toggle"), t.addEventListener("click", () => {
      e.propertiesContainer.open ? e.propertiesContainer.close() : e.propertiesContainer.showModal();
    }), t;
  }
  /**
   * Container that will collapse and expand to show and hide it contents
   * @private
   */
  getCollapse(e) {
    const t = document.createElement("div");
    return t.classList.add("jedi-collapse"), t.setAttribute("id", e.id), this.useToggleEvents && e.startCollapsed && (t.style.display = "none"), t;
  }
  /**
   * Toggle button for collapse
   * @private
   */
  getCollapseToggle(e) {
    const t = this.getButton(e);
    t.classList.add("jedi-collapse-toggle"), this.useToggleEvents && t.addEventListener("click", () => {
      e.collapse.style.display === "none" ? e.collapse.style.display = "block" : e.collapse.style.display = "none";
    });
    let s = e.startCollapsed;
    return t.style.transition = "transform 0.1s ease", s && (t.style.transform = "rotate(90deg)"), t.addEventListener("click", () => {
      s ? t.style.transform = "rotate(0deg)" : t.style.transform = "rotate(90deg)", s = !s;
    }), t;
  }
  /**
   * Container for properties editing elements like property activators
   * @private
   */
  getPropertiesSlot(e) {
    const t = document.createElement("dialog");
    return t.classList.add("jedi-properties-slot"), t.setAttribute("id", e.id), window.addEventListener("click", (s) => {
      s.target === t && t.close();
    }), t;
  }
  /**
   * Container for screen reader announced messages
   * @private
   */
  getPropertiesAriaLive() {
    const e = document.createElement("div");
    return e.classList.add("jedi-properties-aria-live"), e.setAttribute("role", "status"), e.setAttribute("aria-live", "polite"), e;
  }
  /**
   * A message that will be announced by screen reader
   * @private
   */
  getAriaLiveMessage(e) {
    const t = document.createElement("p");
    return t.classList.add("jedi-aria-live-message"), t.textContent = e, this.visuallyHidden(t), t;
  }
  /**
   * Wrapper for property activators
   * @private
   */
  getPropertiesActivators() {
    const e = document.createElement("div");
    return e.classList.add("jedi-properties-activators"), e;
  }
  /**
   * Wrapper buttons
   * @private
   */
  getBtnGroup() {
    const e = document.createElement("span");
    return e.classList.add("jedi-btn-group"), e;
  }
  /**
   * A button
   * @private
   */
  getButton(e) {
    const t = document.createElement("button");
    t.classList.add("jedi-btn"), t.setAttribute("type", "button"), e.value && (t.value = e.value), e.id && t.setAttribute("id", e.id);
    const s = document.createElement("span");
    if (s.textContent = e.textContent, this.icons && e.icon) {
      const r = this.getIcon(e.icon);
      r.setAttribute("title", e.textContent), t.appendChild(r), this.visuallyHidden(s);
    }
    return t.appendChild(s), t;
  }
  /**
   * Array "add" item button
   * @private
   */
  getArrayBtnAdd() {
    const e = this.getButton({
      textContent: "Add item",
      icon: "add"
    });
    return e.classList.add("jedi-array-add"), e;
  }
  getAddPropertyButton() {
    const e = this.getButton({
      textContent: "Add property"
    });
    return e.classList.add("jedi-add-property-btn"), e;
  }
  /**
   * Array "delete" item button
   * @private
   */
  getDeleteItemBtn() {
    const e = this.getButton({
      textContent: "Delete item",
      icon: "delete"
    });
    return e.classList.add("jedi-array-delete"), e;
  }
  /**
   * Array "move up" item button
   * @private
   */
  getMoveUpItemBtn() {
    const e = this.getButton({
      textContent: "Move up",
      icon: "moveUp"
    });
    return e.classList.add("jedi-array-move-up"), e;
  }
  /**
   * Array "move down" item button
   * @private
   */
  getMoveDownItemBtn() {
    const e = this.getButton({
      textContent: "Move down",
      icon: "moveDown"
    });
    return e.classList.add("jedi-array-move-down"), e;
  }
  /**
   * Wrapper for the editor description
   * @private
   */
  getDescription(e = {}) {
    const t = document.createElement("small");
    return t.classList.add("jedi-description"), e.textContent && (t.textContent = e.textContent), e.id && t.setAttribute("id", e.id), t;
  }
  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   * @private
   */
  getObjectControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = this.getCardBody(), a = this.getPropertiesAriaLive(), o = this.getDescription({
      textContent: e.description
    }), l = this.getMessagesSlot(), c = this.getChildrenSlot(), h = this.getPropertiesSlot({
      id: "properties-slot-" + e.id
    }), u = this.getPropertiesToggle({
      textContent: e.title + " properties",
      id: "properties-slot-toggle-" + e.id,
      icon: "properties",
      propertiesContainer: h
    }), p = "collapse-" + e.id, g = this.getCollapse({
      id: p,
      startCollapsed: e.startCollapsed
    }), L = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: p,
      collapse: g,
      startCollapsed: e.startCollapsed
    }), E = this.getPropertiesActivators(), C = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + e.id,
      label: "Property"
    }), v = this.getAddPropertyButton(), x = this.getFieldset(), A = this.getLegend({
      textContent: e.title,
      id: e.id
    });
    return v.classList.add("jedi-object-add"), t.appendChild(x), t.appendChild(h), x.appendChild(A), x.appendChild(g), g.appendChild(i), i.appendChild(o), i.appendChild(l), A.appendChild(s), s.appendChild(r), i.appendChild(c), e.addProperty && (h.appendChild(C.container), h.appendChild(v), h.appendChild(document.createElement("hr"))), e.enablePropertiesToggle && (s.appendChild(u), h.appendChild(a), h.appendChild(E)), e.enableCollapseToggle && s.appendChild(L), {
      container: t,
      collapse: g,
      collapseToggle: L,
      body: i,
      actions: s,
      messages: l,
      childrenSlot: c,
      propertiesToggle: u,
      propertiesContainer: h,
      addPropertyControl: C,
      addPropertyBtn: v,
      ariaLive: a,
      propertiesActivators: E,
      arrayActions: r
    };
  }
  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   * @private
   */
  getArrayControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = this.getCardBody(), a = this.getDescription({
      textContent: e.description
    }), o = this.getMessagesSlot(), l = this.getChildrenSlot(), c = this.getBtnGroup(), h = this.getArrayBtnAdd(), u = this.getFieldset(), p = this.getLegend({
      textContent: e.title,
      id: e.id
    }), g = "collapse-" + e.id, L = this.getCollapse({
      id: g,
      startCollapsed: e.startCollapsed
    }), E = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: g,
      collapse: L,
      startCollapsed: e.startCollapsed
    });
    return t.appendChild(u), u.appendChild(p), u.appendChild(L), L.appendChild(i), i.appendChild(a), i.appendChild(o), p.appendChild(s), s.appendChild(c), c.appendChild(h), s.appendChild(r), i.appendChild(l), e.enableCollapseToggle && s.appendChild(E), {
      container: t,
      collapseToggle: E,
      collapse: L,
      body: i,
      actions: s,
      messages: o,
      childrenSlot: l,
      btnGroup: c,
      addBtn: h,
      arrayActions: r
    };
  }
  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   * @private
   */
  getMultipleControl(e) {
    const t = document.createElement("div"), s = this.getCard(), r = this.getActionsSlot(), i = this.getArrayActionsSlot(), a = this.getCardHeader({
      textContent: e.title,
      titleHidden: e.titleHidden
    }), o = this.getCardBody(), l = this.getDescription({
      textContent: e.description
    }), c = this.getMessagesSlot(), h = this.getChildrenSlot(), u = this.getSwitcher({
      values: e.switcherOptionValues,
      titles: e.switcherOptionsLabels,
      id: e.id + "-switcher",
      label: e.id + "-switcher",
      titleHidden: !0,
      readOnly: e.readOnly
    });
    return u.container.classList.add("jedi-switcher"), t.appendChild(l), t.appendChild(s), s.appendChild(a), s.appendChild(o), a.appendChild(r), r.appendChild(u.container), r.appendChild(i), o.appendChild(c), o.appendChild(h), {
      container: t,
      card: s,
      header: a,
      body: o,
      actions: r,
      messages: c,
      childrenSlot: h,
      switcher: u,
      arrayActions: i
    };
  }
  /**
   * Control for NullEditor
   * @private
   */
  getNullControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = document.createElement("label");
    i.setAttribute("for", e.id);
    const a = document.createElement("span");
    a.textContent = e.label, e.titleHidden && this.visuallyHidden(i);
    const o = e.id + "-description", l = this.getDescription({
      textContent: e.description,
      id: o
    }), c = this.getMessagesSlot();
    return t.appendChild(i), t.appendChild(l), t.appendChild(c), t.appendChild(s), s.appendChild(r), i.appendChild(a), { container: t, label: i, labelText: a, description: l, messages: c, actions: s, arrayActions: r };
  }
  /**
   * A Textarea
   * @private
   */
  getTextareaControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = document.createElement("textarea");
    i.setAttribute("id", e.id), i.style.width = "100%";
    const a = document.createElement("label");
    a.setAttribute("for", e.id);
    const o = document.createElement("span");
    o.textContent = e.label, e.titleHidden && this.visuallyHidden(a);
    const l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + l;
    return i.setAttribute("aria-describedby", p), t.appendChild(a), t.appendChild(i), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(r), a.appendChild(o), { container: t, input: i, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: r };
  }
  /**
   * An Input control
   * @private
   */
  getInputControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = document.createElement("input");
    i.setAttribute("type", e.type), i.setAttribute("id", e.id), i.style.width = "100%";
    const a = document.createElement("label");
    a.setAttribute("for", e.id);
    const o = document.createElement("span");
    o.textContent = e.label, e.titleHidden && this.visuallyHidden(a);
    const l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + l;
    return i.setAttribute("aria-describedby", p), t.appendChild(a), t.appendChild(i), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(r), a.appendChild(o), { container: t, input: i, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: r };
  }
  /**
   * A radio group control
   * @private
   */
  getRadiosControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = this.getFieldset(), a = this.getCardBody(), o = this.getLegend({
      textContent: e.label,
      id: e.id
    }), l = e.id + "-messages", c = this.getMessagesSlot({
      id: l
    }), h = e.id + "-description", u = this.getDescription({
      textContent: e.description,
      id: h
    });
    e.titleHidden && this.visuallyHidden(o);
    const p = [], g = [], L = [], E = [];
    return e.values.forEach((C, v) => {
      const x = document.createElement("div");
      p.push(x);
      const A = document.createElement("input");
      A.setAttribute("type", "radio"), A.setAttribute("id", e.id + "-" + v), A.setAttribute("value", C), g.push(A);
      const fe = l + " " + h;
      A.setAttribute("aria-describedby", fe);
      const Ne = document.createElement("label");
      Ne.setAttribute("for", e.id + "-" + v);
      const De = document.createElement("span");
      E.push(De), e.titles && e.titles[v] && (De.textContent = e.titles[v]), L.push(Ne);
    }), t.appendChild(i), t.appendChild(s), i.appendChild(o), i.appendChild(a), s.appendChild(r), p.forEach((C, v) => {
      a.appendChild(p[v]), C.appendChild(g[v]), C.appendChild(L[v]), L[v].appendChild(E[v]);
    }), i.appendChild(u), i.appendChild(c), {
      container: t,
      fieldset: i,
      legend: o,
      body: a,
      radios: g,
      labels: L,
      labelTexts: E,
      radioControls: p,
      description: u,
      messages: c,
      actions: s,
      arrayActions: r
    };
  }
  /**
   * A checkbox control
   * @private
   */
  getCheckboxControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = document.createElement("div"), a = document.createElement("input");
    a.setAttribute("type", "checkbox"), a.setAttribute("id", e.id);
    const o = document.createElement("label");
    o.setAttribute("for", e.id);
    const l = document.createElement("span");
    l.textContent = e.label, e.titleHidden && this.visuallyHidden(o);
    const c = e.id + "-description", h = this.getDescription({
      textContent: e.description,
      id: c
    }), u = e.id + "-messages", p = this.getMessagesSlot({
      id: u
    }), g = u + " " + c;
    return a.setAttribute("aria-describedby", g), t.appendChild(i), t.appendChild(s), s.appendChild(r), i.appendChild(a), i.appendChild(o), o.appendChild(l), i.appendChild(h), i.appendChild(p), { container: t, formGroup: i, input: a, label: o, labelText: l, description: h, messages: p, actions: s, arrayActions: r };
  }
  /**
   * A select control
   * @private
   */
  getSelectControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), i = document.createElement("select");
    i.setAttribute("id", e.id), e.values.forEach((g, L) => {
      const E = document.createElement("option");
      E.setAttribute("value", g), e.titles && e.titles[L] && (E.textContent = e.titles[L]), i.appendChild(E);
    });
    const a = document.createElement("label");
    a.setAttribute("for", e.id);
    const o = document.createElement("span");
    o.textContent = e.label, e.titleHidden && this.visuallyHidden(a);
    const l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + l;
    return i.setAttribute("aria-describedby", p), t.appendChild(a), t.appendChild(i), a.appendChild(o), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(r), { container: t, input: i, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: r };
  }
  /**
   * Control to switch between multiple editors options
   * @private
   */
  getSwitcher(e) {
    const t = document.createElement("span"), s = document.createElement("select");
    s.setAttribute("id", e.id), e.values.forEach((a, o) => {
      const l = document.createElement("option");
      l.setAttribute("value", a), e.titles && e.titles[o] && (l.textContent = e.titles[o]), s.appendChild(l);
    });
    const r = document.createElement("label");
    r.setAttribute("for", e.id);
    const i = document.createElement("span");
    return i.textContent = e.label, this.visuallyHidden(r), t.appendChild(r), t.appendChild(s), r.appendChild(i), { container: t, input: s, label: r, labelText: i };
  }
  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   * @private
   */
  getAlert(e) {
    return this.getInvalidFeedback(e);
  }
  /**
   * Error messages
   * @public
   */
  getInvalidFeedback(e) {
    const t = document.createElement("div"), s = document.createElement("span"), r = document.createElement("span");
    return s.textContent = e.message, r.textContent = "⚠ ", r.classList.add("jedi-error-message"), r.setAttribute("aria-hidden", "true"), t.classList.add("jedi-error-message"), t.appendChild(r), t.appendChild(s), t;
  }
  /**
   * Container for columns
   * @private
   */
  getRow() {
    const e = document.createElement("div");
    return e.classList.add("jedi-row"), e;
  }
  /**
   * A column to contain content to a specific width
   * @private
   */
  getCol(e, t, s) {
    const r = document.createElement("div");
    return r.classList.add("jedi-col-xs-" + e), r.classList.add("jedi-col-md-" + t), s && r.classList.add("jedi-col-md-offset-" + s), r;
  }
  /**
   * Tab list is a list of links that triggers tabs visibility ne at the time
   * @private
   */
  getTabList() {
    const e = document.createElement("ul");
    return e.classList.add("jedi-nav-list"), e;
  }
  /**
   * A Tab is a wrapper for content
   * @private
   */
  getTab(e) {
    const t = document.createElement("li"), s = document.createElement("a");
    return s.classList.add("jedi-nav-link"), s.setAttribute("href", "#" + e.id), s.textContent = e.title, t.appendChild(s), { list: t, link: s };
  }
  /**
   * Wrapper for tabs
   * @private
   */
  getTabContent() {
    const e = document.createElement("div");
    return e.classList.add("tab-content"), e;
  }
  /**
   * Set tab attributes to make it toggleable
   * @private
   */
  setTabPaneAttributes(e, t, s) {
    e.setAttribute("id", s), e.classList.add("jedi-tab-pane");
  }
  /**
   * Makes an element visually hidden
   * @private
   */
  visuallyHidden(e) {
    e.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;");
  }
  /**
   * Reveals a visually hidden element
   * @private
   */
  visuallyVisible(e) {
    e.removeAttribute("style");
  }
}
class Nt extends Ie {
  init() {
    this.useToggleEvents = !1;
  }
  getAddPropertyButton() {
    const e = super.getAddPropertyButton();
    return e.classList.add("btn-primary"), e.classList.add("btn-block"), e;
  }
  getCollapseToggle(e) {
    const t = super.getCollapseToggle(e);
    return t.setAttribute("href", "#" + e.collapseId), t.setAttribute("data-toggle", "collapse"), t;
  }
  getCollapse(e) {
    const t = super.getCollapse(e);
    return t.classList.add("collapse"), e.startCollapsed || t.classList.add("in"), t;
  }
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("panel"), e.classList.add("panel-default"), e;
  }
  getLegend(e) {
    const t = super.getLegend(e);
    return t.classList.add("h5"), t.classList.add("panel-heading"), t.classList.add("pull-left"), t.setAttribute("style", "margin: 0; display: flex; justify-content: space-between; align-items: center;"), t;
  }
  getCard() {
    const e = super.getCard();
    return e.classList.add("panel"), e.classList.add("panel-default"), e;
  }
  getCardHeader(e) {
    const t = super.getCardHeader(e);
    return t.classList.add("panel-heading"), t.classList.add("text-right"), t;
  }
  getCardBody() {
    const e = super.getCardBody();
    return e.classList.add("panel-body"), e.style.clear = "both", e;
  }
  getBtnGroup() {
    const e = super.getBtnGroup();
    return e.classList.add("btn-group"), e;
  }
  getButton(e) {
    const t = super.getButton(e);
    return t.classList.add("btn"), t.classList.add("btn-xs"), t.classList.add("btn-default"), t;
  }
  getDescription(e) {
    const t = super.getDescription(e);
    return t.classList.add("text-muted"), t;
  }
  getTextareaControl(e) {
    const t = super.getTextareaControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { body: s, radios: r, labels: i, labelTexts: a, radioControls: o, description: l, messages: c } = t;
    return o.forEach((h, u) => {
      h.classList.add("radio"), s.appendChild(o[u]), h.appendChild(i[u]), i[u].appendChild(r[u]), i[u].appendChild(a[u]);
    }), s.appendChild(l), s.appendChild(c), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: r, input: i, label: a, labelText: o, description: l, messages: c } = t;
    return r.classList.add("checkbox"), s.appendChild(r), r.appendChild(a), a.appendChild(i), a.appendChild(o), r.appendChild(l), r.appendChild(c), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getAlert(e) {
    const t = super.getAlert(e);
    return t.classList.add("alert"), t.classList.add("alert-danger"), t;
  }
  getInvalidFeedback(e) {
    const t = super.getInvalidFeedback(e);
    return t.classList.add("text-danger"), t;
  }
  getRow() {
    const e = super.getRow();
    return e.classList.add("row"), e;
  }
  getCol(e, t, s) {
    const r = super.getRow();
    return r.classList.add("col-xs-" + e), r.classList.add("col-md-" + t), s && r.classList.add("col-md-offset-" + s), r;
  }
  getTabList(e) {
    const t = super.getTabList(e);
    return t.classList.add("nav"), e.type === "tabs" ? t.classList.add("nav-tabs") : t.classList.add("nav-pills"), t.classList.add("nav-stacked"), e.stacked === !1 && t.classList.remove("nav-stacked"), t;
  }
  getTab(e) {
    const t = super.getTab(e);
    return e.active && t.list.classList.add("active"), t.link.setAttribute("data-toggle", "tab"), t;
  }
  setTabPaneAttributes(e, t, s) {
    super.setTabPaneAttributes(e, t, s), e.classList.add("tab-pane"), t && (e.classList.add("in"), e.classList.add("active"));
  }
  visuallyHidden(e) {
    e.classList.add("sr-only");
  }
  visuallyVisible(e) {
    e.classList.remove("sr-only");
  }
}
class Dt extends Ie {
  init() {
    this.useToggleEvents = !1;
  }
  getAddPropertyButton() {
    const e = super.getAddPropertyButton();
    return e.classList.add("btn-primary"), e.classList.add("btn-block"), e;
  }
  getCollapseToggle(e) {
    const t = super.getCollapseToggle(e);
    return t.setAttribute("href", "#" + e.collapseId), t.setAttribute("data-toggle", "collapse"), t;
  }
  getCollapse(e) {
    const t = super.getCollapse(e);
    return t.classList.add("collapse"), e.startCollapsed || t.classList.add("show"), t;
  }
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getLegend(e) {
    const t = super.getLegend(e);
    return t.classList.add("h6"), t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-between"), t.classList.add("align-items-center"), t.classList.add("float-left"), t.classList.add("py-2"), t;
  }
  getCard() {
    const e = super.getCard();
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getCardHeader(e) {
    const t = super.getCardHeader(e);
    return t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-end"), t.classList.add("align-items-center"), t.classList.add("py-1"), t;
  }
  getCardBody() {
    const e = super.getCardBody();
    return e.classList.add("card-body"), e.classList.add("pb-0"), e;
  }
  getBtnGroup() {
    const e = super.getBtnGroup();
    return e.classList.add("btn-group"), e;
  }
  getButton(e) {
    const t = super.getButton(e);
    return t.classList.add("btn"), t.classList.add("btn-sm"), t;
  }
  getDescription(e) {
    const t = super.getDescription(e);
    return t.classList.add("text-muted"), t;
  }
  getTextareaControl(e) {
    const t = super.getTextareaControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { container: s, body: r, radios: i, labels: a, labelTexts: o, radioControls: l, description: c, messages: h } = t;
    return s.classList.add("form-group"), l.forEach((u, p) => {
      u.classList.add("form-check"), i[p].classList.add("form-check-input"), a[p].classList.add("form-check-label"), r.appendChild(l[p]), u.appendChild(i[p]), u.appendChild(a[p]), a[p].appendChild(o[p]);
    }), r.appendChild(c), r.appendChild(h), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: r, input: i, label: a, description: o, messages: l } = t;
    return r.classList.add("form-group"), r.classList.add("form-check"), i.classList.add("form-check-input"), a.classList.add("form-check-label"), s.appendChild(r), r.appendChild(i), r.appendChild(a), r.appendChild(o), r.appendChild(l), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: r } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), t;
  }
  getAlert(e) {
    const t = super.getAlert(e);
    return t.classList.add("alert"), t.classList.add("alert-danger"), t;
  }
  getInvalidFeedback(e) {
    const t = super.getInvalidFeedback(e);
    return t.classList.add("text-danger"), t.classList.add("form-text"), t.classList.add("d-block"), t;
  }
  getColumnClass(e, t) {
    return "col-" + e + "-" + t;
  }
  getRow() {
    const e = super.getRow();
    return e.classList.add("row"), e;
  }
  getCol(e, t, s) {
    const r = super.getRow(e, t, s);
    return r.classList.add("col-" + e), r.classList.add("col-md-" + t), s && r.classList.add("offset-md-" + s), r;
  }
  getTabList(e) {
    const t = super.getTabList();
    return t.classList.add("nav"), e.type === "tabs" ? t.classList.add("nav-tabs") : t.classList.add("nav-pills"), t.classList.add("flex-column"), e.stacked === !1 && t.classList.remove("flex-column"), t;
  }
  getTab(e) {
    const t = super.getTab(e);
    return t.list.classList.add("nav-item"), t.link.classList.add("nav-link"), t.link.setAttribute("data-toggle", "tab"), e.active && t.link.classList.add("active"), t;
  }
  setTabPaneAttributes(e, t, s) {
    super.setTabPaneAttributes(e, t, s), e.classList.add("tab-pane"), t && e.classList.add("active");
  }
  visuallyHidden(e) {
    e.classList.add("sr-only");
  }
  visuallyVisible(e) {
    e.classList.remove("sr-only");
  }
}
class Ft extends Ie {
  init() {
    this.useToggleEvents = !1;
  }
  getAddPropertyButton() {
    const e = super.getAddPropertyButton();
    return e.classList.add("btn-primary"), e.classList.add("w-100"), e;
  }
  getCollapseToggle(e) {
    const t = super.getCollapseToggle(e);
    return t.setAttribute("href", "#" + e.collapseId), t.setAttribute("data-bs-toggle", "collapse"), t;
  }
  getCollapse(e) {
    const t = super.getCollapse(e);
    return t.classList.add("collapse"), e.startCollapsed || t.classList.add("show"), t;
  }
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getLegend(e) {
    const t = super.getLegend(e);
    return t.classList.add("h6"), t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-between"), t.classList.add("align-items-center"), t.classList.add("py-2"), t;
  }
  getCard() {
    const e = super.getCard();
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getCardHeader(e) {
    const t = super.getCardHeader(e);
    return t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-end"), t.classList.add("align-items-center"), t.classList.add("py-1"), t;
  }
  getCardBody() {
    const e = super.getCardBody();
    return e.classList.add("card-body"), e.classList.add("pb-0"), e;
  }
  getControlSlot() {
    const e = super.getControlSlot();
    return e.classList.add("mb-3"), e;
  }
  getBtnGroup() {
    const e = super.getBtnGroup();
    return e.classList.add("btn-group"), e;
  }
  getButton(e) {
    const t = super.getButton(e);
    return t.classList.add("btn"), t.classList.add("btn-sm"), t;
  }
  getDescription(e) {
    const t = super.getDescription(e);
    return t.classList.add("text-muted"), t;
  }
  getTextareaControl(e) {
    const t = super.getTextareaControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("mb-3"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: r, label: i } = t;
    return s.classList.add("mb-3"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(i), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { container: s, body: r, radios: i, labels: a, labelTexts: o, radioControls: l, description: c, messages: h } = t;
    return s.classList.add("mb-3"), l.forEach((u, p) => {
      u.classList.add("form-check"), i[p].classList.add("form-check-input"), a[p].classList.add("form-check-label"), r.appendChild(l[p]), u.appendChild(i[p]), u.appendChild(a[p]), a[p].appendChild(o[p]);
    }), r.appendChild(c), r.appendChild(h), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: r, input: i, label: a, description: o, messages: l } = t;
    return s.classList.add("mb-3"), r.classList.add("form-check"), i.classList.add("form-check-input"), a.classList.add("form-check-label"), e.titleHidden && this.visuallyHidden(a), s.appendChild(r), r.appendChild(i), r.appendChild(a), r.appendChild(o), r.appendChild(l), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: r } = t;
    return s.classList.add("mb-3"), r.classList.add("form-select"), t;
  }
  getAlert(e) {
    const t = super.getAlert(e);
    return t.classList.add("alert"), t.classList.add("alert-danger"), t;
  }
  getInvalidFeedback(e) {
    const t = super.getInvalidFeedback(e);
    return t.classList.add("text-danger"), t.classList.add("d-block"), t.classList.add("form-text"), t.classList.add("form-text"), t;
  }
  getRow() {
    const e = super.getRow();
    return e.classList.add("row"), e;
  }
  getCol(e, t, s) {
    const r = super.getRow(e, t, s);
    return r.classList.add("col-" + e), r.classList.add("col-md-" + t), s && r.classList.add("offset-md-" + s), r;
  }
  getTabList(e) {
    const t = super.getTabList(e);
    return t.classList.add("nav"), e.type === "tabs" ? t.classList.add("nav-tabs") : t.classList.add("nav-pills"), t.classList.add("flex-column"), e.stacked === !1 && t.classList.remove("flex-column"), t;
  }
  getTab(e) {
    const t = super.getTab(e);
    return t.list.classList.add("nav-item"), t.link.classList.add("nav-link"), t.link.setAttribute("data-bs-toggle", "tab"), e.active && t.link.classList.add("active"), t;
  }
  setTabPaneAttributes(e, t, s) {
    super.setTabPaneAttributes(e, t, s), e.classList.add("tab-pane"), t && e.classList.add("active");
  }
  visuallyHidden(e) {
    e.classList.add("visually-hidden");
  }
  visuallyVisible(e) {
    e.classList.remove("visually-hidden");
  }
}
let F = class {
  constructor(e) {
    if (this.instance = e, this.theme = null, this.control = null, this.disabled = !1, this.readOnly = this.instance.isReadOnly(), this.init(), this.build(), this.coerceValue(), this.addEventListeners(), this.setContainerAttributes(), this.refreshUI(), this.instance.jedi.options.showErrors === "always" || m(this.instance.schema, "showErrors") === "always") {
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
    let e = null;
    if (d(this.instance.jedi.options.iconLib))
      switch (this.instance.jedi.options.iconLib) {
        case "glyphicons":
          e = Mt;
          break;
        case "bootstrap-icons":
          e = Rt;
          break;
        case "fontawesome3":
          e = Vt;
          break;
        case "fontawesome4":
          e = Ht;
          break;
        case "fontawesome5":
          e = Bt;
          break;
        case "fontawesome6":
          e = qt;
          break;
      }
    switch (this.instance.jedi.options.theme) {
      case "bootstrap3":
        this.theme = new Nt(e);
        break;
      case "bootstrap4":
        this.theme = new Dt(e);
        break;
      case "bootstrap5":
        this.theme = new Ft(e);
        break;
      default:
        this.theme = new Ie(e);
    }
  }
  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-path", this.instance.path), this.control.container.setAttribute("data-type", V(this.instance.schema));
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
    const e = M(this.instance.schema);
    d(e) && !e.includes(this.instance.getValue()) && d(e[0]) && this.instance.setValue(e[0], !1);
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
  showValidationErrors(e) {
    if (this.instance.jedi.options.showErrors === "never" || m(this.instance.schema, "showErrors") === "never")
      return;
    this.control.messages.innerHTML = "";
    const s = w(this.instance.schema) || this.instance.getKey();
    e.forEach((r) => {
      r.messages.forEach((i) => {
        const a = this.getInvalidFeedback({
          message: s + ": " + i
        });
        this.control.messages.appendChild(a);
      });
    });
  }
  /**
   * Get an error message container
   * @private
   */
  getInvalidFeedback(e) {
    return this.theme.getInvalidFeedback(e);
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
    this.control.container.querySelectorAll("button, input, select, textarea").forEach((t) => {
      this.disabled || this.readOnly ? t.setAttribute("disabled", "") : t.removeAttribute("disabled", "");
    });
  }
  /**
   * Transforms the input value if necessary before value set
   * @private
   */
  sanitize(e) {
    return e;
  }
  /**
   * Destroys the editor
   * @private
   */
  destroy() {
    this.control.container && this.control.container.parentNode && this.control.container.parentNode.removeChild(this.control.container), Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
};
class Ye extends F {
  build() {
    this.control = this.theme.getMultipleControl({
      title: "Options",
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: P(this.instance.path),
      description: T(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    });
  }
  addEventListeners() {
    this.control.switcher.input.addEventListener("change", () => {
      const e = Number(this.control.switcher.input.value);
      this.instance.switchInstance(e);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.childrenSlot.innerHTML = "", this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container), this.control.switcher.input.value = this.instance.index, this.disabled || this.instance.isReadOnly() ? this.instance.activeInstance.ui.disable() : this.instance.activeInstance.ui.enable();
  }
  getInvalidFeedback(e) {
    return this.theme.getAlert(e);
  }
}
class Ut extends D {
  setUI() {
    this.ui = new Ye(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.activeInstanceChanged = !0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.ifThenElseShemas = [], this.traverseSchema(this.schema), delete this.schema.if, delete this.schema.then, delete this.schema.else;
    let e = 0;
    this.ifThenElseShemas.forEach((i) => {
      d(i.then) && (this.schemas.push(U({}, k(this.schema), i.then)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(i.then)), e++), d(i.else) && (this.schemas.push(U({}, k(this.schema), i.else)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(i.else)), e++);
    });
    const t = k(this.schema);
    delete t.if, delete t.then, delete t.else;
    const s = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path,
      parent: this.parent
    });
    this.schemas.forEach((i) => {
      const a = this.jedi.createInstance({
        jedi: this.jedi,
        schema: i,
        path: this.path,
        parent: this.parent
      });
      a.unregister(), a.on("change", () => {
        const o = this.activeInstance.getValue();
        this.getFittestIndex(o) !== this.index ? this.setValue(o) : (this.value = this.activeInstance.getValue(), this.emit("change"));
      }), this.instances.push(a), this.register();
    }), this.on("set-value", (i) => {
      this.instances.forEach((l) => {
        const c = l.getValue();
        let h = i;
        f(c) && f(h) && (h = nt(c, h)), l.setValue(h, !1);
      });
      const a = this.getFittestIndex(i);
      a !== this.index && (this.switchInstance(a), this.emit("change"));
    }), this.value = s.getValue(), s.destroy();
    const r = this.getFittestIndex(this.value);
    this.switchInstance(r);
  }
  switchInstance(e) {
    this.index = e, this.activeInstance = this.instances[this.index], this.value = this.activeInstance.getValue(), this.emit("change");
  }
  traverseSchema(e) {
    const t = Me(e);
    if (d(t)) {
      const s = Ve(e), r = ke(e);
      this.ifThenElseShemas.push({
        if: t,
        then: d(s) ? s : {}
      }), this.ifThenElseShemas.push({
        if: t,
        else: d(r) ? r : {}
      });
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(e) {
    let t = this.index;
    return this.ifThenElseShemas.forEach((s, r) => {
      const i = new S({
        schema: s.if,
        data: e
      }), a = i.getErrors();
      i.destroy(), a.length === 0 && s.then && (t = r), a.length > 0 && s.else && (t = r);
    }), t;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
  getAllOfCombinations(e) {
    const t = [], s = (i, a) => ({ ...i, ...a }), r = (i, a) => {
      if (a.length === 0) {
        t.push(i);
        return;
      }
      const o = a[0];
      r(s(i, o), a.slice(1)), r(i, a.slice(1));
    };
    for (let i = 0; i < e.length; i++)
      r(e[i], e.slice(i + 1));
    return t.sort((i, a) => Object.keys(i).length - Object.keys(a).length), t;
  }
}
class Kt extends D {
  setUI() {
    this.ui = new Ye(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.lastIndex = 0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.on("set-value", () => {
      this.onSetValue();
    });
    const e = V(this.schema);
    if (d(K(this.schema)) || d($(this.schema))) {
      const s = d(K(this.schema)) ? K(this.schema) : $(this.schema), r = k(this.schema);
      delete r.anyOf, delete r.oneOf, delete r.options, s.forEach((i, a) => {
        i = { ...r, ...i }, this.jedi.refParser && (i = this.jedi.refParser.expand(i));
        let o = "Option-" + (a + 1);
        const l = m(i, "switcherTitle"), c = w(i);
        d(c) && (o = c), d(l) && (o = l), this.switcherOptionValues.push(a), this.switcherOptionsLabels.push(o), this.schemas.push(i);
      });
    } else if (I(e))
      e.forEach((s, r) => {
        const i = U(this.schema), a = {
          ...i,
          type: s,
          title: s[0].toUpperCase() + s.slice(1)
        };
        d(i.title) && (a.title = i.title), this.switcherOptionValues.push(r), this.switcherOptionsLabels.push(s.charAt(0).toUpperCase() + s.slice(1)), this.schemas.push(a);
      });
    else if (e === "any" || !e) {
      const s = k(this.schema);
      this.schemas = [
        { ...s, type: "object" },
        { ...s, type: "array" },
        { ...s, type: "string" },
        { ...s, type: "number" },
        { ...s, type: "integer" },
        { ...s, type: "boolean" },
        { ...s, type: "null" }
      ], this.schemas.forEach((r, i) => {
        this.switcherOptionValues.push(i);
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
      const r = this.jedi.createInstance({
        jedi: this.jedi,
        schema: s,
        path: this.path,
        parent: this.parent,
        value: k(this.value)
      });
      d(this.value) && r.setValue(this.value, !1), r.unregister(), r.off("change"), r.on("change", () => {
        this.value = this.activeInstance.getValue(), this.emit("change");
      }), this.instances.push(r), this.register();
    });
    const t = this.getFittestIndex(this.value);
    this.switchInstance(t, this.value);
  }
  switchInstance(e, t) {
    this.lastIndex = this.index, this.index = e, this.activeInstance = this.instances[e], d(t) && this.activeInstance.setValue(t, !1), this.setValue(this.activeInstance.getValue());
  }
  onSetValue() {
    if (Se(this.activeInstance.getValue(), this.value)) {
      const e = this.getFittestIndex(this.value);
      this.switchInstance(e, this.value);
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(e) {
    let t = 0, s, r;
    for (const i of this.instances) {
      const a = this.jedi.validator.getErrors(e, i.schema, i.getKey(), i.path);
      (B(s) || B(r)) && (s = t, r = a), a.length < r.length && (s = t, r = a), t++;
    }
    return s;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
}
class He extends F {
  build() {
    this.control = this.theme.getCheckboxControl({
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.checked);
    });
  }
  sanitize(e) {
    return !!e;
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.checked = this.instance.getValue();
  }
}
class $t extends He {
  build() {
    this.control = this.theme.getRadiosControl({
      values: ["false", "true"],
      titles: m(this.instance.schema, "enumTitles") || ["false", "true"],
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((e) => {
      e.addEventListener("change", () => {
        const t = e.value === "true";
        this.instance.setValue(t);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((e) => {
      const t = e.value === "true";
      e.checked = t === this.instance.getValue();
    });
  }
}
class $e extends He {
  build() {
    this.control = this.theme.getSelectControl({
      values: ["false", "true"],
      titles: m(this.instance.schema, "enumTitles") || ["false", "true"],
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.control.input.value === "true";
      this.instance.setValue(e);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue() === !0 ? "true" : "false";
  }
}
class zt extends D {
  setUI() {
    const e = V(this.schema), t = N(this.schema);
    e === "boolean" && t === "radio" ? this.ui = new $t(this) : e === "boolean" && t === "select" ? this.ui = new $e(this) : e === "boolean" && t === "checkbox" ? this.ui = new He(this) : e === "boolean" && (this.ui = new $e(this));
  }
}
class Be extends F {
  build() {
    this.propertyActivators = {};
    const e = this.instance.schema.options || {};
    let t = !0;
    const s = Te(this.instance.schema);
    d(s) && s === !1 && (t = !1);
    let r = !1;
    d(this.instance.jedi.options.enablePropertiesToggle) && (r = this.instance.jedi.options.enablePropertiesToggle), d(e.enablePropertiesToggle) && (r = e.enablePropertiesToggle), this.control = this.theme.getObjectControl({
      title: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: P(this.instance.path),
      description: T(this.instance.schema),
      enablePropertiesToggle: r,
      addProperty: t,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || m(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || m(this.instance.schema, "startCollapsed")
    });
  }
  addEventListeners() {
    this.control.addPropertyBtn.addEventListener("click", () => {
      const e = this.control.addPropertyControl.input.value.split(" ").join("");
      if (e.length === 0 || d(this.instance.value[e]))
        return;
      const r = this.instance.getPropertySchema(e), i = this.instance.createChild(r, e);
      i.activate(), this.instance.setValue(this.instance.value), this.control.addPropertyControl.input.value = "";
      const a = this.control.ariaLive;
      a.innerHTML = "";
      const o = w(i.schema), l = d(o) ? o : e, c = this.theme.getAriaLiveMessage();
      c.textContent = l + " field was added to the form", a.appendChild(c), this.control.propertiesContainer.close(), this.control.propertiesContainer.showModal();
    });
  }
  sanitize(e) {
    return f(e) ? e : {};
  }
  getInvalidFeedback(e) {
    return this.theme.getAlert(e);
  }
  refreshPropertiesSlot() {
    const e = m(this.instance.schema, "enablePropertiesToggle");
    if (Pe(this.instance.jedi.options.enablePropertiesToggle, !0) || Pe(e, !0)) {
      const t = Object.keys(this.instance.properties), s = this.instance.children.map((i) => i.getKey());
      [...t, ...s].forEach((i) => {
        const a = this.instance.isRequired(i), o = this.instance.isDependentRequired(i), l = !a && !o, c = this.propertyActivators[i], h = this.control.ariaLive, u = this.instance.getPropertySchema(i), p = w(u), g = this.instance.path + this.instance.jedi.pathSeparator + i, L = P(g) + "-activator", E = d(p) ? p : i;
        if (l && !c) {
          const v = this.theme.getCheckboxControl({
            id: L,
            label: E,
            titleHidden: !1
          }), x = v.input;
          this.propertyActivators[i] = x, x.addEventListener("change", () => {
            h.innerHTML = "";
            const A = this.theme.getAriaLiveMessage();
            x.checked ? (this.instance.getChild(i) || this.instance.createChild(u, i), this.instance.getChild(i).activate(), A.textContent = E + " field was added to the form", h.appendChild(A)) : (this.instance.getChild(i).deactivate(), A.textContent = E + " field was removed from the form", h.appendChild(A)), this.control.propertiesContainer.close(), this.control.propertiesContainer.showModal();
          }), this.control.propertiesActivators.appendChild(v.container);
        }
        const C = this.propertyActivators[i];
        C && (C.disabled = this.disabled, C.checked = q(this.instance.getValue(), i));
      });
    }
  }
  refreshEditors() {
    this.instance.children.forEach((e) => {
      e.isActive ? (e.ui.control.container.parentNode === null && this.control.childrenSlot.appendChild(e.ui.control.container), this.disabled || this.instance.isReadOnly() ? e.ui.disable() : e.ui.enable()) : e.ui.control.container.parentNode && e.ui.control.container.parentNode.removeChild(e.ui.control.container);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.refreshPropertiesSlot(), this.refreshEditors();
  }
}
class Jt extends Be {
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    const e = m(this.instance.schema, "grid");
    console.log(e);
    let t = this.theme.getRow();
    this.control.childrenSlot.appendChild(t), this.instance.children.forEach((s) => {
      if (s.isActive) {
        const r = m(s.schema, "grid"), i = r.columns || 12, a = r.offset || 0, o = this.theme.getCol(12, i, a);
        (r.newRow || !1) && (t = this.theme.getRow(), this.control.childrenSlot.appendChild(t)), t.appendChild(o), o.appendChild(s.ui.control.container), this.disabled || this.instance.isReadOnly() ? s.ui.disable() : s.ui.enable();
      }
    });
  }
}
class Gt extends Be {
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    const e = m(this.instance.schema, "nav"), t = this.theme.getRow(), s = d(e.cols) ? e.cols : 3, r = this.theme.getCol(12, s), i = this.theme.getCol(12, 12 - s), a = this.theme.getTabContent(), o = this.theme.getTabList({
      stacked: d(e.stacked) ? e.stacked : !1,
      type: d(e.variant) ? e.variant : "pils"
    });
    this.control.childrenSlot.appendChild(t), t.appendChild(r), t.appendChild(i), r.appendChild(o), i.appendChild(a), this.instance.children.forEach((l, c) => {
      if (l.isActive) {
        const h = c === this.activeTabIndex, u = P(l.path), p = w(l.schema), g = this.theme.getTab({
          title: d(p) ? p : l.getKey(),
          id: u,
          active: h
        });
        g.list.addEventListener("click", () => {
          this.activeTabIndex = c;
        }), this.theme.setTabPaneAttributes(l.ui.control.container, h, u), o.appendChild(g.list), a.appendChild(l.ui.control.container), this.disabled || this.instance.isReadOnly() ? l.ui.disable() : l.ui.enable();
      }
    });
  }
}
class Zt extends D {
  setUI() {
    const e = V(this.schema), t = m(this.schema, "nav"), s = m(this.schema, "grid");
    e === "object" && d(s) ? this.ui = new Jt(this) : e === "object" && d(t) ? this.ui = new Gt(this) : this.ui = new Be(this);
  }
  prepare() {
    this.properties = {};
    const e = ge(this.schema);
    d(e) && Object.keys(e).forEach((t) => {
      const s = e[t];
      this.properties[t] = { schema: s };
      let r = !0;
      const i = this.jedi.options.deactivateNonRequired, a = m(this.schema, "deactivateNonRequired"), o = m(s, "deactivateNonRequired");
      this.isNotRequired(t) && d(i) && i === !0 && (r = !1), this.isNotRequired(t) && d(a) && a === !0 && (r = !1), this.isNotRequired(t) && d(o) && o === !0 && (r = !1), r && this.createChild(s, t);
    }), this.refreshInstances(), this.on("set-value", () => {
      this.refreshInstances();
    });
  }
  /**
   * Returns true if the property is required
   */
  isRequired(e) {
    const t = We(this.schema);
    return d(t) && t.includes(e);
  }
  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired(e) {
    const t = Je(this.schema);
    if (d(t)) {
      let s = [];
      return Object.keys(t).forEach((r) => {
        d(this.value[r]) && (s = t[r].filter((a) => !q(this.value, a)));
      }), s.includes(e);
    }
    return !1;
  }
  createChild(e, t, s, r = !1) {
    const i = this.jedi.createInstance({
      jedi: this.jedi,
      schema: e,
      path: this.path + this.jedi.pathSeparator + t,
      parent: this,
      value: k(s)
    });
    this.children.push(i), this.value[t] = i.getValue();
    const a = this.jedi.options.deactivateNonRequired || m(this.schema, "deactivateNonRequired");
    return this.isNotRequired(t) && d(a) && a === !0 && !r && i.deactivate(), i;
  }
  isNotRequired(e) {
    return !this.isRequired(e) && !this.isDependentRequired(e);
  }
  deleteChild(e) {
    for (let t = this.children.length - 1; t >= 0; t--) {
      const s = this.children[t];
      s.getKey() === e && (s.destroy(), this.children.splice(t, 1), this.onChildChange());
    }
  }
  getChild(e) {
    return this.children.find((t) => e === t.getKey().split(this.jedi.pathSeparator).pop());
  }
  getPropertySchema(e) {
    let t;
    const s = Te(this.schema), r = ge(this.schema), i = be(this.schema);
    return d(r) && q(r, e) ? t = r[e] : d(i) && Object.keys(i).forEach((a) => {
      new RegExp(a).test(e) && (t = i[a]);
    }), B(t) && d(s) && (t = s), B(t) && (t = {}), t;
  }
  onChildChange() {
    const e = {};
    this.children.forEach((t) => {
      t.isActive && (e[t.getKey()] = t.getValue());
    }), this.value = e, this.emit("change");
  }
  refreshInstances() {
    const e = this.getValue();
    if (f(e)) {
      Object.keys(e).forEach((t) => {
        const s = this.getChild(t);
        if (s) {
          s.activate();
          const r = s.getValue(), i = e[s.getKey()];
          Se(r, i) && s.setValue(i, !1);
        } else {
          const r = this.getPropertySchema(t);
          this.createChild(r, t, e[t], !0);
        }
      });
      for (let t = this.children.length - 1; t >= 0; t--) {
        const s = this.children[t], r = s.getKey();
        B(e[r]) && (this.getChild(r) ? s.deactivate() : this.deleteChild(r));
      }
    }
  }
}
class et extends F {
  build() {
    this.control = this.theme.getArrayControl({
      title: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: P(this.instance.path),
      description: T(this.instance.schema),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || m(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || m(this.instance.schema, "startCollapsed")
    });
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.instance.addItem();
    });
  }
  getInvalidFeedback(e) {
    return this.theme.getAlert(e);
  }
  sanitize(e) {
    return I(e) ? e : [];
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = Ze(this.instance.schema), t = _e(this.instance.schema);
    d(e) && e === this.instance.value.length && this.control.addBtn.setAttribute("disabled", ""), this.control.childrenSlot.innerHTML = "", this.instance.children.forEach((s) => {
      const r = Number(s.getKey()), i = this.theme.getDeleteItemBtn(), a = this.theme.getMoveUpItemBtn(), o = this.theme.getMoveDownItemBtn(), l = this.theme.getBtnGroup();
      s.ui.control.arrayActions.innerHTML = "", s.ui.control.arrayActions.appendChild(l), l.appendChild(i), l.appendChild(a), l.appendChild(o), this.control.childrenSlot.appendChild(s.ui.control.container), i.addEventListener("click", () => {
        const c = Number(s.path.split(this.instance.jedi.pathSeparator).pop());
        this.instance.deleteItem(c);
      }), a.addEventListener("click", () => {
        const c = r - 1;
        this.instance.move(r, c);
      }), o.addEventListener("click", () => {
        const c = r + 1;
        this.instance.move(r, c);
      }), this.disabled || this.instance.isReadOnly() ? s.ui.disable() : s.ui.enable(), d(t) && this.instance.value.length <= t && i.setAttribute("disabled", "");
    });
  }
}
class _t extends et {
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
    const e = m(this.instance.schema, "nav"), t = this.theme.getRow(), s = d(e.cols) ? e.cols : 3, r = this.theme.getCol(12, s), i = this.theme.getCol(12, 12 - s), a = this.theme.getTabContent(), o = this.theme.getTabList({
      stacked: d(e.stacked) ? e.stacked : !1,
      type: d(e.type) ? e.type : "pils"
    });
    this.control.childrenSlot.appendChild(t), t.appendChild(r), t.appendChild(i), r.appendChild(o), i.appendChild(a), this.instance.children.forEach((l, c) => {
      const h = this.theme.getDeleteItemBtn(), u = this.theme.getMoveUpItemBtn(), p = this.theme.getMoveDownItemBtn();
      l.ui.control.arrayActions.innerHTML = "", l.ui.control.arrayActions.appendChild(h), l.ui.control.arrayActions.appendChild(u), l.ui.control.arrayActions.appendChild(p), this.control.childrenSlot.appendChild(l.ui.control.container);
      let g;
      const L = m(this.instance.schema, "itemTemplate");
      if (L) {
        const x = L, A = {
          i0: c,
          i1: c + 1,
          value: l.getValue()
        };
        g = y(x, A);
      } else {
        const x = w(l.schema);
        g = d(x) ? x + " " + (c + 1) : l.getKey();
      }
      h.addEventListener("click", () => {
        this.activeTabIndex = at(c - 1, 0, this.instance.value.length - 1), this.instance.deleteItem(c);
      }), u.addEventListener("click", () => {
        const x = c - 1;
        this.activeTabIndex = x, this.instance.move(c, x);
      }), p.addEventListener("click", () => {
        const x = c + 1;
        this.activeTabIndex = x, this.instance.move(c, x);
      });
      const E = c === this.activeTabIndex, C = P(l.path), v = this.theme.getTab({
        title: g,
        id: C,
        active: E
      });
      v.list.addEventListener("click", () => {
        this.activeTabIndex = c;
      }), this.theme.setTabPaneAttributes(l.ui.control.container, E, C), o.appendChild(v.list), a.appendChild(l.ui.control.container), this.disabled || this.instance.isReadOnly() ? l.ui.disable() : l.ui.enable(), c === 0 && u.setAttribute("disabled", ""), this.instance.value.length - 1 === c && p.setAttribute("disabled", "");
    });
  }
}
class Wt extends D {
  setUI() {
    const e = V(this.schema), t = m(this.schema, "nav");
    e === "array" && d(t) ? this.ui = new _t(this) : this.ui = new et(this);
  }
  prepare() {
    this.refreshChildren(), this.on("set-value", () => {
      this.refreshChildren();
    });
  }
  createItemInstance(e) {
    let t;
    const s = this.children.length, r = Ge(this.schema), i = Re(this.schema);
    t = d(r) ? r : {}, d(i) && d(i[s]) && (t = i[s]);
    const o = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path + this.jedi.pathSeparator + s,
      parent: this,
      value: k(e)
    });
    return d(e) && o.setValue(e, !1), o;
  }
  move(e, t) {
    const s = k(this.getValue()), r = s[e];
    s.splice(e, 1), s.splice(t, 0, r), this.setValue(s);
  }
  addItem() {
    const e = this.createItemInstance(), t = k(this.getValue());
    t.push(e.getValue()), e.destroy(), this.setValue(t);
  }
  deleteItem(e) {
    const s = k(this.getValue()).filter((r, i) => i !== e);
    this.setValue(s);
  }
  onChildChange() {
    const e = [];
    this.children.forEach((t) => {
      e.push(t.getValue());
    }), this.value = e, this.emit("change");
  }
  refreshChildren() {
    this.children = [];
    const e = this.getValue();
    I(e) && e.forEach((t) => {
      const s = this.createItemInstance(t);
      this.children.push(s);
    });
  }
}
class we extends F {
  build() {
    const e = ["hidden", "color", "date", "datetime-local", "email", "number", "month", "password", "search", "time", "tel", "text", "textarea", "url", "week"], t = N(this.instance.schema);
    this.control = this.theme.getInputControl({
      type: e.includes(t) ? t : "text",
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || t === "hidden",
      description: T(this.instance.schema)
    }), t === "color" && this.instance.value.length === 0 && this.instance.setValue("#000000", !1);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  sanitize(e) {
    return String(e);
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class Xt extends we {
  build() {
    this.control = this.theme.getRadiosControl({
      values: M(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((e) => {
      e.addEventListener("change", () => {
        this.instance.setValue(e.value);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((e) => {
      e.checked = e.value === this.instance.getValue();
    });
  }
}
class Qt extends we {
  build() {
    this.control = this.theme.getSelectControl({
      values: M(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    }), this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
}
class Yt extends F {
  build() {
    this.control = this.theme.getTextareaControl({
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || N(this.instance.schema) === "hidden",
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  sanitize(e) {
    return String(e);
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class es extends we {
  build() {
    this.control = this.theme.getInputControl({
      type: "text",
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
    try {
      new window.Awesomplete(this.control.input, m(this.instance.schema, "awesomplete")), this.control.container.querySelector(".awesomplete").style.display = "block";
    } catch (e) {
      console.error("Awesomplete is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
  }
  refreshUI() {
    this.refreshInteractiveElements();
  }
}
class ts extends D {
  setUI() {
    const e = V(this.schema), t = M(this.schema), s = N(this.schema), r = m(this.schema, "awesomplete");
    e === "string" && d(t) && s === "radio" ? this.ui = new Xt(this) : e === "string" && s === "textarea" ? this.ui = new Yt(this) : e === "string" && d(t) ? this.ui = new Qt(this) : e === "string" && d(r) ? this.ui = new es(this) : e === "string" && (this.ui = new we(this));
  }
}
class qe extends F {
  build() {
    this.control = this.theme.getInputControl({
      type: "number",
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || N(this.instance.schema) === "hidden",
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
  sanitize(e) {
    return V(this.instance.schema) === "integer" ? Math.floor(Number(e)) : Number(e);
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = this.instance.getValue();
    j(e) && (this.control.input.value = this.instance.getValue());
  }
}
class ss extends qe {
  build() {
    this.control = this.theme.getRadiosControl({
      values: M(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((e) => {
      e.addEventListener("change", () => {
        const t = this.sanitize(e.value);
        this.instance.setValue(t);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((e) => {
      e.checked = Number(e.value) === Number(this.instance.getValue());
    });
  }
}
class is extends qe {
  build() {
    this.control = this.theme.getSelectControl({
      values: M(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: T(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
}
class ns extends D {
  setUI() {
    const e = V(this.schema), t = M(this.schema), s = N(this.schema), r = e === "number" || e === "integer";
    r && d(t) && s === "radio" ? this.ui = new ss(this) : r && d(t) ? this.ui = new is(this) : r && (this.ui = new qe(this));
  }
}
class rs extends F {
  build() {
    this.control = this.theme.getNullControl({
      id: P(this.instance.path),
      label: w(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || N(this.instance.schema) === "hidden",
      description: T(this.instance.schema)
    });
  }
  sanitize() {
    return null;
  }
}
class as extends D {
  setUI() {
    this.ui = new rs(this);
  }
}
class os extends Qe {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor(e) {
    super(), this.options = Object.assign({
      refParser: null,
      schema: {},
      data: void 0,
      validateFormat: !1,
      mergeAllOf: !1
    }, e), this.rootName = "#", this.pathSeparator = "/", this.instances = {}, this.root = null, this.theme = null, this.validator = null, this.schema = {}, this.refParser = this.options.refParser ? this.options.refParser : null, this.init(), this.bindEventListeners();
  }
  /**
   * Initializes instance properties
   */
  init() {
    this.schema = this.options.schema, this.validator = new kt({ refParser: this.refParser, validateFormat: this.options.validateFormat }), this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    }), d(this.options.data) && this.root.setValue(this.options.data, !1);
  }
  bindEventListeners() {
    this.root && this.root.on("change", () => {
      this.emit("change");
    });
  }
  /**
   * Adds a child instance pointer to the instances list
   */
  register(e) {
    this.instances[e.path] = e;
  }
  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister(e) {
    this.instances[e.path] = null, delete this.instances[e.path];
  }
  /**
   * Creates a json instance and dereference schema on the fly if needed.
   */
  createInstance(e) {
    if (this.options.mergeAllOf || m(e.schema, "mergeAllOf")) {
      const c = je(e.schema);
      d(c) && c.forEach((h) => {
        e.schema = U({}, e.schema, h);
      });
    }
    this.refParser && (e.schema = this.refParser.expand(e.schema, e.path));
    const s = V(e.schema), r = $(e.schema), i = K(e.schema), a = Me(e.schema), o = Ve(e.schema), l = ke(e.schema);
    if (d(i) || d(r) || s === "any" || I(s) || B(s))
      return new Kt(e);
    if (d(a) && (d(o) || d(l)))
      return new Ut(e);
    if (s === "object")
      return new Zt(e);
    if (s === "array")
      return new Wt(e);
    if (s === "string")
      return new ts(e);
    if (s === "number" || s === "integer")
      return new ns(e);
    if (s === "boolean")
      return new zt(e);
    if (s === "null")
      return new as(e);
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
  getInstance(e) {
    return this.instances[e];
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    let e = [];
    return Object.keys(this.instances).forEach((t) => {
      const s = this.instances[t];
      e = [...e, ...s.getErrors()];
    }), e;
  }
  /**
   * Destroy the root instance and it's children
   */
  destroy() {
    this.root.destroy(), Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
}
const S = os;
class ls extends S {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor(e) {
    super(e), this.options = Object.assign({
      container: null,
      enablePropertiesToggle: !1,
      enableCollapseToggle: !1,
      startCollapsed: !1,
      deactivateNonRequired: !1,
      showErrors: "change"
    }, e), this.theme = null;
  }
  /**
   * Initializes instance properties
   */
  init() {
    super.init(), this.options.container && (this.container = this.options.container, this.appendHiddenInput(), this.container.appendChild(this.root.ui.control.container), this.container.classList.add("jedi-ready"));
  }
  bindEventListeners() {
    super.bindEventListeners(), this.hiddenInput && this.on("change", () => {
      this.hiddenInput.value = JSON.stringify(this.getValue());
    });
  }
  /**
   * Appends a hidden input to the root container whose value will be the value
   * of the root instance.
   * @private
   */
  appendHiddenInput() {
    const e = this.root.ui.theme.getInputControl({
      type: "hidden",
      id: "jedi-hidden-input"
    });
    this.hiddenInput = e.input, this.hiddenInput.setAttribute("name", "json"), this.hiddenInput.removeAttribute("aria-describedby"), this.container.appendChild(this.hiddenInput), this.hiddenInput.value = JSON.stringify(this.getValue());
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
   * Destroy the root instance and it's children
   */
  destroy() {
    this.options.container && (this.container.innerHTML = ""), super.destroy();
  }
}
class cs {
  constructor() {
    this.refs = {}, this.data = {};
  }
  async dereference(e) {
    for (await this.collectRefs(e); this.refsResolved() === !1; )
      await this.collectRefs(e);
  }
  refsResolved() {
    return Object.values(this.refs).every((e) => e !== null);
  }
  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * If the ref has no value in data will be given a value of null. This value will be later
   * replaced in a future iteration. At that time the data will be available
   * @param schema
   * @param path
   */
  async collectRefs(e, t = "#") {
    if (!(typeof e != "object" || e === null))
      for (const [s, r] of Object.entries(e)) {
        const i = t ? `${t}/${s}` : `/${s}`;
        if (this.hasRef(e)) {
          const a = e.$ref;
          if (this.isExternalRef(a)) {
            const o = await this.load(a);
            this.refs[a] = o, await this.collectRefs(o, i);
          } else
            this.refs[a] = this.data[a] ?? null;
        }
        this.data[t] = e, await this.collectRefs(r, i);
      }
  }
  hasRef(e) {
    return typeof e.$ref < "u" && typeof e.$ref == "string";
  }
  isExternalRef(e) {
    return typeof e != "string" ? !1 : e.startsWith("http") || e.startsWith("https");
  }
  isObject(e) {
    return e !== null && typeof e == "object";
  }
  expand(e) {
    const t = JSON.parse(JSON.stringify(e));
    if (this.isObject(t) && this.hasRef(t)) {
      const s = t.$ref;
      return delete t.$ref, this.expand(U({}, this.refs[s], t));
    }
    return t;
  }
  /**
   * Loads a schema with a synchronous http request
   * @param uri
   * @returns {any}
   */
  async load(e) {
    try {
      const t = await fetch(e);
      if (!t.ok)
        throw new Error("Network response was not ok");
      return await t.json();
    } catch (t) {
      throw console.error("Error loading", e, t), t;
    }
  }
}
const us = {
  RefParser: cs,
  Editor: ls,
  Validator: S
};
export {
  us as default
};
