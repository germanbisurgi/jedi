function st() {
  const n = [];
  return function(e, t) {
    if (typeof t != "object" || t === null)
      return t;
    for (; n.length > 0 && n.at(-1) !== this; )
      n.pop();
    return n.includes(t) ? "[Circular]" : (n.push(t), t);
  };
}
function M(n) {
  if (!(typeof n > "u"))
    return JSON.parse(JSON.stringify(n, st()));
}
function it(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Fe(n, e, t) {
  return n.replace(new RegExp(it(e), "g"), t);
}
function A(n) {
  return Fe(Fe(n, "#", "root"), "/", "-");
}
function D(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Pe(n) {
  return Object.keys(n).sort().reduce((e, t) => (e[t] = n[t], e), {});
}
function Se(n, e) {
  return f(n) && f(e) && (n = Pe(n), e = Pe(e)), JSON.stringify(n) === JSON.stringify(e);
}
function Oe(n, e) {
  return !Se(n, e);
}
function Te(n) {
  return n === null;
}
function d(n) {
  return typeof n < "u";
}
function N(n) {
  return typeof n > "u";
}
function k(n) {
  return typeof n == "number";
}
function B(n) {
  return k(n) && n === Math.floor(n);
}
function V(n) {
  return typeof n == "string";
}
function T(n) {
  return typeof n == "boolean";
}
function x(n) {
  return Array.isArray(n);
}
function f(n) {
  return !Te(n) && !x(n) && typeof n == "object";
}
function nt(n) {
  let e = "any";
  return k(n) ? e = B(n) ? "integer" : "number" : V(n) ? e = "string" : T(n) ? e = "boolean" : x(n) ? e = "array" : Te(n) ? e = "null" : f(n) && (e = "object"), e;
}
function K(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  return f(n) && f(t) && Object.keys(t).forEach((s) => {
    f(t[s]) ? (n[s] || Object.assign(n, {
      [s]: {}
    }), K(n[s], t[s])) : Object.assign(n, {
      [s]: t[s]
    });
  }), K(n, ...e);
}
function rt(n, e) {
  return Object.keys(e).forEach(function(t) {
    t in n && typeof n[t] == typeof e[t] && (n[t] = e[t]);
  }), n;
}
function at(n, e) {
  const t = e.split(".");
  let s = n;
  for (const r of t)
    if (Array.isArray(s) && /^\d+$/.test(r)) {
      const i = parseInt(r);
      if (i >= 0 && i < s.length)
        s = s[i];
      else
        return;
    } else if (D(s, r))
      s = s[r];
    else
      return;
  return s;
}
function L(n, e) {
  return n.replace(/{{(.*?)}}/g, (t) => {
    t = t.replace(/\s/g, "");
    const s = t.split(/{{|}}/)[1];
    return at(e, s);
  });
}
function ot(n, e, t) {
  return Math.max(e, Math.min(n, t));
}
function $e(n) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (const s of n) {
    const r = JSON.stringify(s);
    t.has(r) || (t.add(r), e.push(s));
  }
  return e;
}
function je(n) {
  return f(n.additionalProperties) || T(n.additionalProperties) ? n.additionalProperties : void 0;
}
function lt(n) {
  return f(n.propertyNames) || T(n.propertyNames) ? n.propertyNames : void 0;
}
function ke(n) {
  return x(n.allOf) ? n.allOf : void 0;
}
function J(n) {
  return x(n.anyOf) ? n.anyOf : void 0;
}
function ct(n) {
  return n.const;
}
function dt(n) {
  return f(n.contains) || T(n.contains) ? n.contains : void 0;
}
function ht(n) {
  return n.default;
}
function ze(n) {
  return f(n.dependentRequired) ? n.dependentRequired : void 0;
}
function ut(n) {
  return f(n.dependentSchemas) ? n.dependentSchemas : void 0;
}
function j(n) {
  return V(n.description) ? n.description : void 0;
}
function Me(n) {
  return f(n.else) || T(n.else) ? n.else : void 0;
}
function R(n) {
  if (x(n.enum) && n.enum.length > 0)
    return n.enum;
}
function pt(n) {
  return k(n.exclusiveMaximum) ? n.exclusiveMaximum : void 0;
}
function mt(n) {
  return k(n.exclusiveMinimum) ? n.exclusiveMinimum : void 0;
}
function q(n) {
  return V(n.format) ? n.format : void 0;
}
function Re(n) {
  if (f(n.if) || T(n.if))
    return n.if;
}
function Ge(n) {
  return f(n.items) || T(n.items) ? n.items : void 0;
}
function ft(n) {
  return k(n.maximum) ? n.maximum : void 0;
}
function gt(n) {
  if (B(n.maxContains) && n.maxContains >= 0)
    return n.maxContains;
}
function Ze(n) {
  if (B(n.maxItems) && n.maxItems >= 0)
    return n.maxItems;
}
function bt(n) {
  if (B(n.maxLength) && n.maxLength >= 0)
    return n.maxLength;
}
function vt(n) {
  if (B(n.maxProperties))
    return n.maxProperties;
}
function Ct(n) {
  return k(n.minimum) ? n.minimum : void 0;
}
function yt(n) {
  if (B(n.minContains) && n.minContains >= 0)
    return n.minContains;
}
function _e(n) {
  if (B(n.minItems) && n.minItems >= 0)
    return n.minItems;
}
function Et(n) {
  if (B(n.minLength) && n.minLength >= 0)
    return n.minLength;
}
function Lt(n) {
  if (B(n.minProperties) && n.minProperties >= 0)
    return n.minProperties;
}
function xt(n) {
  if (k(n.multipleOf) && n.multipleOf >= 0)
    return n.multipleOf;
}
function It(n) {
  return f(n.not) || T(n.not) ? n.not : void 0;
}
function m(n, e) {
  return n.options && n.options[e] ? n.options[e] : void 0;
}
function We(n, e) {
  return n["x-options"] && n["x-options"][e] ? n["x-options"][e] : void 0;
}
function wt(n) {
  return V(n.pattern) ? n.pattern : void 0;
}
function ve(n) {
  return f(n.patternProperties) ? n.patternProperties : void 0;
}
function Ve(n) {
  return x(n.prefixItems) ? n.prefixItems : void 0;
}
function be(n) {
  return f(n.properties) ? n.properties : void 0;
}
function Ue(n) {
  return T(n.readOnly) ? n.readOnly : void 0;
}
function Xe(n) {
  return x(n.required) ? [...new Set(n.required)] : void 0;
}
function He(n) {
  return f(n.then) || T(n.then) ? n.then : void 0;
}
function I(n) {
  return V(n.title) ? n.title : void 0;
}
function H(n) {
  if (V(n.type) || x(n.type))
    return n.type;
}
function $(n) {
  return x(n.oneOf) ? n.oneOf : void 0;
}
function At(n) {
  return T(n.unevaluatedProperties) ? n.unevaluatedProperties : void 0;
}
function Pt(n) {
  return T(n.uniqueItems) ? n.uniqueItems : void 0;
}
function z(n, e, t, s) {
  let r = [];
  const i = ke(t);
  return d(i) && i.forEach((a) => {
    const o = new S({ refParser: n.refParser, schema: a, data: e, rootName: s }), l = o.getErrors();
    o.destroy(), r = [...r, ...l], r = $e(r);
  }), r;
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
function G(n, e, t, s, r) {
  const i = [], a = Et(t);
  return V(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length < a && i.push({
    messages: [
      L(v.errorMinLength, {
        minLength: a
      })
    ],
    path: r,
    constrain: "minLength"
  })), i;
}
function Z(n, e, t, s, r) {
  const i = [], a = J(t);
  if (d(a)) {
    let o = !1;
    a.forEach((l) => {
      const c = new S({ refParser: n.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && (o = !0);
    }), o || i.push({
      messages: [
        v.errorAnyOf
      ],
      path: r,
      constrain: "anyOf"
    });
  }
  return i;
}
function _(n, e, t, s, r) {
  const i = [], a = R(t);
  return d(a) && !a.some((l) => JSON.stringify(e) === JSON.stringify(l)) && i.push({
    messages: [
      L(v.errorEnum, {
        enum: JSON.stringify(a)
      })
    ],
    path: r,
    constrain: "enum"
  }), i;
}
function W(n, e, t, s, r) {
  const i = [], a = pt(t);
  return k(e) && d(a) && e >= a && i.push({
    messages: [
      L(v.errorExclusiveMaximum, {
        exclusiveMaximum: a
      })
    ],
    path: r,
    constrain: "exclusiveMaximum"
  }), i;
}
function X(n, e, t, s, r) {
  const i = [], a = mt(t);
  return k(e) && d(a) && e <= a && i.push({
    messages: [
      L(v.errorExclusiveMinimum, {
        exclusiveMinimum: a
      })
    ],
    path: r,
    constrain: "exclusiveMinimum"
  }), i;
}
function Q(n, e, t, s, r) {
  const i = [], a = q(t);
  let o = n.validateFormat;
  if (m(t, "validateFormat") && (o = t.options.validateFormat), d(a) && V(e) && o) {
    let l;
    a === "email" && (l = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i)), a === "url" && (l = new RegExp(/^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:@](?:[^\s:@-]*[^\s:@])?\.?)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d{2,5})?(?:\/[^\s]*)?$/i)), a === "uuid" && (l = new RegExp(/^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/i)), d(l) && !l.test(e) && i.push({
      messages: [
        L(v.errorFormat, { format: a })
      ],
      path: r,
      constrain: "format"
    });
  }
  return i;
}
function Y(n, e, t, s, r) {
  const i = [], a = Ge(t), o = Ve(t);
  if (x(e) && d(a)) {
    const l = d(o) ? o.length : 0;
    a === !1 && e.length > 0 && e.length > l && i.push({
      messages: [v.errorItems],
      path: r,
      constrain: "items"
    });
  }
  return i;
}
function ee(n, e, t, s, r) {
  const i = [], a = Ze(t);
  return x(e) && d(a) && e.length > a && i.push({
    messages: [
      L(v.errorMaxItems, {
        maxItems: a
      })
    ],
    path: r,
    constrain: "maxItems"
  }), i;
}
function te(n, e, t, s, r) {
  const i = [], a = bt(t);
  return V(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length > a && i.push({
    messages: [
      L(v.errorMaxLength, {
        maxLength: a
      })
    ],
    path: r,
    constrain: "maxLength"
  })), i;
}
function se(n, e, t, s, r) {
  const i = [], a = vt(t);
  return f(e) && d(a) && Object.keys(e).length > a && i.push({
    messages: [
      L(v.errorMaxProperties, {
        maxProperties: a
      })
    ],
    path: r,
    constrain: "maxProperties"
  }), i;
}
function ie(n, e, t, s, r) {
  const i = [], a = Ct(t);
  return k(e) && d(a) && e < a && i.push({
    messages: [
      L(v.errorMinimum, {
        minimum: a
      })
    ],
    path: r,
    constrain: "minimum"
  }), i;
}
function ne(n, e, t, s, r) {
  const i = [], a = _e(t);
  return x(e) && d(a) && e.length < a && i.push({
    messages: [
      L(v.errorMinItems, {
        minItems: a
      })
    ],
    path: r,
    constrain: "minItems"
  }), i;
}
function re(n, e, t, s, r) {
  const i = [], a = Lt(t);
  return f(e) && d(a) && Object.keys(e).length < a && i.push({
    messages: [
      L(v.errorMinProperties, {
        minProperties: a
      })
    ],
    path: r,
    constrain: "minProperties"
  }), i;
}
function ae(n, e, t, s, r) {
  const i = [], a = xt(t);
  if (k(e) && d(a)) {
    if (e === 0)
      return i;
    (!(e / a === Math.floor(e / a)) || e.toString().includes("e")) && i.push({
      messages: [
        L(v.errorMultipleOf, {
          multipleOf: a
        })
      ],
      path: r,
      constrain: "multipleOf"
    });
  }
  return i;
}
function oe(n, e, t, s, r) {
  const i = [], a = It(t);
  if (d(a)) {
    const o = new S({ refParser: n.refParser, schema: a, data: e }), l = o.getErrors();
    o.destroy(), l.length === 0 && i.push({
      messages: [
        L(v.errorNot)
      ],
      path: r,
      constrain: "not"
    });
  }
  return i;
}
function le(n, e, t, s, r) {
  const i = [], a = $(t);
  if (d(a)) {
    let o = 0;
    a.forEach((l) => {
      const c = new S({ refParser: n.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && o++;
    }), o !== 1 && i.push({
      messages: [
        L(v.errorOneOf, {
          counter: o
        })
      ],
      path: r,
      constrain: "oneOf"
    });
  }
  return i;
}
function ce(n, e, t, s, r) {
  const i = [], a = wt(t);
  return V(e) && d(a) && !new RegExp(a).test(e) && i.push({
    messages: [
      L(v.errorPattern, {
        pattern: a
      })
    ],
    path: r,
    constrain: "pattern"
  }), i;
}
function de(n, e, t, s) {
  let r = [];
  const i = ve(t);
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
function he(n, e, t, s, r) {
  const i = [], a = Xe(t);
  if (f(e) && d(a)) {
    const o = [], l = Object.keys(e);
    a.forEach((h) => {
      l.includes(h) || o.push(h);
    }), o.length > 0 && i.push({
      messages: [
        L(v.errorRequired, {
          required: o.join(", ")
        })
      ],
      path: r,
      constrain: "required"
    });
  }
  return i;
}
function ue(n, e, t, s, r) {
  const i = [], a = H(t);
  if (a === "any")
    return i;
  if (d(a)) {
    const o = {
      string: (c) => V(c),
      number: (c) => k(c),
      integer: (c) => B(c),
      boolean: (c) => T(c),
      array: (c) => x(c),
      object: (c) => f(c),
      null: (c) => Te(c)
    };
    let l = !0;
    x(a) ? l = a.some((c) => o[c](e)) : l = o[a](e), l || i.push({
      messages: [
        L(v.errorType, {
          type: a,
          valueType: nt(e)
        })
      ],
      path: r,
      constrain: "type"
    });
  }
  return i;
}
function pe(n, e, t, s, r) {
  const i = [], a = ft(t);
  return k(e) && d(a) && e > a && i.push({
    messages: [
      L(v.errorMaximum, {
        maximum: a
      })
    ],
    path: r,
    constrain: "maximum"
  }), i;
}
function me(n, e, t, s, r) {
  const i = [], a = Pt(t);
  if (x(e) && d(a) && a === !0) {
    const o = [];
    let l = !1;
    for (let h = 0; h < e.length; h++) {
      let u = e[h];
      f(u) && (u = Pe(u));
      const p = JSON.stringify(u);
      if (l = o.some((g) => g === p), l)
        break;
      o.push(p);
    }
    l && i.push({
      messages: [
        v.errorUniqueItems
      ],
      path: r,
      constrain: "uniqueItems"
    });
  }
  return i;
}
function fe(n, e, t, s, r) {
  const i = [], a = je(t), o = ve(t), l = be(t);
  if (f(e) && d(a)) {
    const c = l || {}, h = a, u = o || {};
    Object.keys(e).forEach((p) => {
      const g = Object.keys(u).some((b) => new RegExp(b).test(p)), C = D(c, p);
      if (!g && !C) {
        if (h === !1)
          i.push({
            messages: [
              L(v.errorAdditionalProperties, { property: p })
            ],
            path: r,
            constrain: "additionalProperties"
          });
        else if (f(h)) {
          const b = new S({
            refParser: n.refParser,
            schema: h,
            data: e[p]
          }), E = b.getErrors().map((y) => ({
            messages: y.messages,
            path: `${r}.${p}`,
            constrain: "additionalProperties"
          }));
          i.push(...E), b.destroy();
        }
      }
    });
  }
  return i;
}
const St = {
  additionalProperties: fe,
  allOf: z,
  anyOf: Z,
  enum: _,
  exclusiveMaximum: W,
  exclusiveMinimum: X,
  format: Q,
  items: Y,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  required: he,
  type: ue,
  uniqueItems: me
};
function Ce(n, e, t, s, r) {
  const i = [], a = ct(t);
  return d(a) && Oe(e, a) && i.push({
    messages: [
      L(v.errorConst, {
        const: JSON.stringify(a)
      })
    ],
    path: r,
    constrain: "const"
  }), i;
}
function ye(n, e, t, s, r) {
  const i = [], a = dt(t), o = yt(t), l = gt(t);
  if (x(e) && d(a)) {
    let c = 0;
    e.forEach((u) => {
      const p = new S({ refParser: n.refParser, schema: a, data: u });
      p.getErrors().length === 0 && c++, p.destroy();
    });
    const h = c === 0;
    d(o) ? c < o && i.push({
      messages: [
        L(v.errorMinContains, {
          counter: c,
          minContains: o
        })
      ],
      path: r,
      constrain: "minContains"
    }) : h && i.push({
      messages: [v.errorContains],
      path: r,
      constrain: "contains"
    }), d(l) && c > l && i.push({
      messages: [
        L(v.errorMaxContains, {
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
function Ee(n, e, t, s, r) {
  const i = [], a = ze(t);
  if (f(e) && d(a)) {
    let o = [];
    Object.keys(a).forEach((c) => {
      d(e[c]) && (o = a[c].filter((u) => !D(e, u)));
    }), o.length > 0 && i.push({
      messages: [
        L(v.errorDependentRequired, {
          dependentRequired: o.join(", ")
        })
      ],
      path: r,
      constrain: "dependentRequired"
    });
  }
  return i;
}
function Le(n, e, t) {
  let s = [];
  const r = ut(t);
  return f(e) && d(r) && Object.keys(r).forEach((i) => {
    if (d(e[i])) {
      const a = r[i], o = new S({ refParser: n.refParser, schema: a, data: e }), l = o.getErrors();
      o.destroy(), s = [...s, ...l];
    }
  }), s;
}
function xe(n, e, t) {
  const s = [], r = Re(t), i = He(t), a = Me(t);
  if (d(r)) {
    if (N(i) && N(a))
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
function Ie(n, e, t, s, r) {
  const i = [], a = Ve(t);
  return x(e) && d(a) && a.forEach((o, l) => {
    const c = e[l];
    if (d(c)) {
      const h = new S({ refParser: n.refParser, schema: o, data: c }), u = h.getErrors();
      h.destroy(), u.length > 0 && i.push({
        messages: [
          L(v.errorPrefixItems, {
            index: l
          })
        ],
        path: r,
        constrain: "prefixItems"
      });
    }
  }), i;
}
const Ot = {
  additionalProperties: fe,
  allOf: z,
  anyOf: Z,
  const: Ce,
  contains: ye,
  dependentRequired: Ee,
  dependentSchemas: Le,
  enum: _,
  exclusiveMaximum: W,
  exclusiveMinimum: X,
  format: Q,
  if: xe,
  items: Y,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Ie,
  required: he,
  type: ue,
  uniqueItems: me
}, Tt = {
  additionalProperties: fe,
  allOf: z,
  anyOf: Z,
  const: Ce,
  contains: ye,
  dependentRequired: Ee,
  dependentSchemas: Le,
  enum: _,
  exclusiveMaximum: W,
  exclusiveMinimum: X,
  format: Q,
  if: xe,
  items: Y,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Ie,
  required: he,
  type: ue,
  uniqueItems: me
};
function Qe(n, e, t, s, r) {
  let i = [];
  const a = At(t), o = ve(t), l = be(t), c = ke(t), h = J(t), u = $(t);
  if (f(e) && d(a)) {
    let p = d(l) ? l : {};
    const g = a, C = o;
    [
      c,
      h,
      u
    ].forEach((E) => {
      d(E) && E.forEach((y) => {
        d(y.properties) && (p = { ...p, ...y.properties });
      });
    }), p && Object.keys(e).forEach((E) => {
      let y = !1;
      if (d(C) && Object.keys(C).forEach((P) => {
        y = new RegExp(P).test(E);
      }), !y && g === !1 && !D(p, E) && i.push({
        messages: [
          L(v.errorUnevaluatedProperties, {
            property: E
          })
        ],
        path: r,
        constrain: "unevaluatedProperties"
      }), !y && f(g) && !D(p, E)) {
        const P = new S({
          refParser: n.refParser,
          schema: g,
          data: e[E]
        }), w = P.getErrors().map((O) => ({
          messages: O.messages,
          path: E,
          constrain: "unevaluatedProperties"
        }));
        i = [...i, ...w], P.destroy();
      }
    });
  }
  return i;
}
const jt = {
  additionalProperties: fe,
  allOf: z,
  anyOf: Z,
  const: Ce,
  contains: ye,
  dependentRequired: Ee,
  dependentSchemas: Le,
  enum: _,
  exclusiveMaximum: W,
  exclusiveMinimum: X,
  format: Q,
  if: xe,
  items: Y,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Ie,
  required: he,
  type: ue,
  unevaluatedProperties: Qe,
  uniqueItems: me
};
function kt(n, e, t, s, r) {
  const i = [], a = lt(t);
  return f(e) && d(a) && Object.keys(e).forEach((o) => {
    new S({
      refParser: n.refParser,
      schema: a,
      data: o
    }).getErrors().length > 0 && i.push({
      messages: [
        L(v.errorPropertyNames, { propertyName: o })
      ],
      path: r,
      constrain: "propertyNames"
    });
  }), i;
}
const Ke = {
  additionalProperties: fe,
  allOf: z,
  anyOf: Z,
  const: Ce,
  contains: ye,
  dependentRequired: Ee,
  dependentSchemas: Le,
  enum: _,
  exclusiveMaximum: W,
  exclusiveMinimum: X,
  format: Q,
  if: xe,
  items: Y,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Ie,
  propertyNames: kt,
  required: he,
  type: ue,
  unevaluatedProperties: Qe,
  uniqueItems: me
};
class Mt {
  constructor(e = {}) {
    this.refParser = e.refParser, this.validateFormat = e.validateFormat ? e.validateFormat : !1, this.draft = Ke, this.jsonSchemaDrafts = {
      "http://json-schema.org/draft-04/schema#": St,
      "http://json-schema.org/draft-06/schema#": Ot,
      "http://json-schema.org/draft-07/schema#": Tt,
      "https://json-schema.org/draft/2019-09/schema": jt,
      "https://json-schema.org/draft/2020-12/schema": Ke
    };
  }
  /**
   * Validates a value against it's schema
   */
  getErrors(e, t, s, r) {
    let i = [];
    const a = m(t, "messages"), o = M(t);
    return T(o) && o === !0 ? i : T(o) && o === !1 ? [{
      messages: d(a) ? a : ["invalid"],
      path: r
    }] : (Object.keys(this.draft).forEach((l) => {
      if (D(o, l)) {
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
}
class Ye {
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
class F extends Ye {
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
    if (N(this.value)) {
      let e;
      const t = H(this.schema);
      t === "boolean" && (e = !1), t === "number" && (e = 0), t === "integer" && (e = 0), t === "string" && (e = ""), t === "array" && (e = []), t === "object" && (e = {}), t === "null" && (e = null), this.value = e;
    }
  }
  setDefaultValue() {
    const e = ht(this.schema);
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
    return $e(e);
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
const Rt = {
  properties: "glyphicon glyphicon-list",
  delete: "glyphicon glyphicon-trash",
  add: "glyphicon glyphicon-plus",
  moveUp: "glyphicon glyphicon-arrow-up",
  moveDown: "glyphicon glyphicon-arrow-down",
  collapse: "glyphicon glyphicon-chevron-down"
}, Vt = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down",
  collapse: "bi bi-chevron-down"
}, Ht = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down",
  collapse: "icon-chevron-down"
}, Bt = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down",
  collapse: "fa fa-chevron-down"
}, qt = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down",
  collapse: "fas fa-chevron-down"
}, Nt = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down",
  collapse: "fa-solid fa-chevron-down"
};
class we {
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
    }), C = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: p,
      collapse: g,
      startCollapsed: e.startCollapsed
    }), b = this.getPropertiesActivators(), E = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + e.id,
      label: "Property"
    }), y = this.getAddPropertyButton(), P = this.getFieldset(), w = this.getLegend({
      textContent: e.title,
      id: e.id
    });
    return y.classList.add("jedi-object-add"), t.appendChild(P), t.appendChild(h), P.appendChild(w), P.appendChild(g), g.appendChild(i), i.appendChild(o), i.appendChild(l), w.appendChild(s), s.appendChild(r), i.appendChild(c), e.addProperty && (h.appendChild(E.container), h.appendChild(y), h.appendChild(document.createElement("hr"))), e.enablePropertiesToggle && (s.appendChild(u), h.appendChild(a), h.appendChild(b)), e.enableCollapseToggle && s.appendChild(C), {
      container: t,
      collapse: g,
      collapseToggle: C,
      body: i,
      actions: s,
      messages: l,
      childrenSlot: c,
      propertiesToggle: u,
      propertiesContainer: h,
      addPropertyControl: E,
      addPropertyBtn: y,
      ariaLive: a,
      propertiesActivators: b,
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
    }), g = "collapse-" + e.id, C = this.getCollapse({
      id: g,
      startCollapsed: e.startCollapsed
    }), b = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: g,
      collapse: C,
      startCollapsed: e.startCollapsed
    });
    return t.appendChild(u), u.appendChild(p), u.appendChild(C), C.appendChild(i), i.appendChild(a), i.appendChild(o), p.appendChild(s), s.appendChild(c), c.appendChild(h), s.appendChild(r), i.appendChild(l), e.enableCollapseToggle && s.appendChild(b), {
      container: t,
      collapseToggle: b,
      collapse: C,
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
    const p = [], g = [], C = [], b = [];
    return e.values.forEach((E, y) => {
      const P = document.createElement("div");
      p.push(P);
      const w = document.createElement("input");
      w.setAttribute("type", "radio"), w.setAttribute("id", e.id + "-" + y), w.setAttribute("value", E), g.push(w);
      const O = l + " " + h;
      w.setAttribute("aria-describedby", O);
      const ge = document.createElement("label");
      ge.setAttribute("for", e.id + "-" + y);
      const De = document.createElement("span");
      b.push(De), e.titles && e.titles[y] && (De.textContent = e.titles[y]), C.push(ge);
    }), t.appendChild(i), t.appendChild(s), i.appendChild(o), i.appendChild(a), s.appendChild(r), p.forEach((E, y) => {
      a.appendChild(p[y]), E.appendChild(g[y]), E.appendChild(C[y]), C[y].appendChild(b[y]);
    }), i.appendChild(u), i.appendChild(c), {
      container: t,
      fieldset: i,
      legend: o,
      body: a,
      radios: g,
      labels: C,
      labelTexts: b,
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
    i.setAttribute("id", e.id), e.values.forEach((g, C) => {
      const b = document.createElement("option");
      b.setAttribute("value", g), e.titles && e.titles[C] && (b.textContent = e.titles[C]), i.appendChild(b);
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
class Dt extends we {
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
class Ft extends we {
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
class Ut extends we {
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
class U {
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
          e = Rt;
          break;
        case "bootstrap-icons":
          e = Vt;
          break;
        case "fontawesome3":
          e = Ht;
          break;
        case "fontawesome4":
          e = Bt;
          break;
        case "fontawesome5":
          e = qt;
          break;
        case "fontawesome6":
          e = Nt;
          break;
      }
    switch (this.instance.jedi.options.theme) {
      case "bootstrap3":
        this.theme = new Dt(e);
        break;
      case "bootstrap4":
        this.theme = new Ft(e);
        break;
      case "bootstrap5":
        this.theme = new Ut(e);
        break;
      default:
        this.theme = new we(e);
    }
  }
  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-path", this.instance.path), this.control.container.setAttribute("data-type", H(this.instance.schema));
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
    const e = R(this.instance.schema);
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
    const s = I(this.instance.schema) || this.instance.getKey();
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
}
class et extends U {
  build() {
    this.control = this.theme.getMultipleControl({
      title: "Options",
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: A(this.instance.path),
      description: j(this.instance.schema),
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
class Kt extends F {
  setUI() {
    this.ui = new et(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.activeInstanceChanged = !0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.ifThenElseShemas = [], this.traverseSchema(this.schema), delete this.schema.if, delete this.schema.then, delete this.schema.else;
    let e = 0;
    this.ifThenElseShemas.forEach((i) => {
      d(i.then) && (this.schemas.push(K({}, M(this.schema), i.then)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(i.then)), e++), d(i.else) && (this.schemas.push(K({}, M(this.schema), i.else)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(i.else)), e++);
    });
    const t = M(this.schema);
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
        f(c) && f(h) && (h = rt(c, h)), l.setValue(h, !1);
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
    const t = Re(e);
    if (d(t)) {
      const s = He(e), r = Me(e);
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
class Jt extends F {
  setUI() {
    this.ui = new et(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.lastIndex = 0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.on("set-value", () => {
      this.onSetValue();
    });
    const e = H(this.schema);
    if (d(J(this.schema)) || d($(this.schema))) {
      const s = d(J(this.schema)) ? J(this.schema) : $(this.schema), r = M(this.schema);
      delete r.anyOf, delete r.oneOf, delete r.options, s.forEach((i, a) => {
        i = { ...r, ...i }, this.jedi.refParser && (i = this.jedi.refParser.expand(i));
        let o = "Option-" + (a + 1);
        const l = m(i, "switcherTitle"), c = I(i);
        d(c) && (o = c), d(l) && (o = l), this.switcherOptionValues.push(a), this.switcherOptionsLabels.push(o), this.schemas.push(i);
      });
    } else if (x(e))
      e.forEach((s, r) => {
        const i = K(this.schema), a = {
          ...i,
          type: s,
          title: s[0].toUpperCase() + s.slice(1)
        };
        d(i.title) && (a.title = i.title), this.switcherOptionValues.push(r), this.switcherOptionsLabels.push(s.charAt(0).toUpperCase() + s.slice(1)), this.schemas.push(a);
      });
    else if (e === "any" || !e) {
      const s = M(this.schema);
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
        value: M(this.value)
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
    if (Oe(this.activeInstance.getValue(), this.value)) {
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
      (N(s) || N(r)) && (s = t, r = a), a.length < r.length && (s = t, r = a), t++;
    }
    return s;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
}
class Be extends U {
  build() {
    this.control = this.theme.getCheckboxControl({
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
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
class $t extends Be {
  build() {
    this.control = this.theme.getRadiosControl({
      values: ["false", "true"],
      titles: m(this.instance.schema, "enumTitles") || ["false", "true"],
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
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
class Je extends Be {
  build() {
    this.control = this.theme.getSelectControl({
      values: ["false", "true"],
      titles: m(this.instance.schema, "enumTitles") || ["false", "true"],
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
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
class zt extends F {
  setUI() {
    const e = H(this.schema), t = q(this.schema);
    e === "boolean" && t === "radio" ? this.ui = new $t(this) : e === "boolean" && t === "select" ? this.ui = new Je(this) : e === "boolean" && t === "checkbox" ? this.ui = new Be(this) : e === "boolean" && (this.ui = new Je(this));
  }
}
class qe extends U {
  build() {
    this.propertyActivators = {};
    const e = this.instance.schema.options || {};
    let t = !0;
    const s = je(this.instance.schema);
    d(s) && s === !1 && (t = !1);
    let r = !1;
    d(this.instance.jedi.options.enablePropertiesToggle) && (r = this.instance.jedi.options.enablePropertiesToggle), d(e.enablePropertiesToggle) && (r = e.enablePropertiesToggle), this.control = this.theme.getObjectControl({
      title: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: A(this.instance.path),
      description: j(this.instance.schema),
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
      const o = I(i.schema), l = d(o) ? o : e, c = this.theme.getAriaLiveMessage();
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
    if (Se(this.instance.jedi.options.enablePropertiesToggle, !0) || Se(e, !0)) {
      const t = Object.keys(this.instance.properties), s = this.instance.children.map((i) => i.getKey());
      [...t, ...s].forEach((i) => {
        const a = this.instance.isRequired(i), o = this.instance.isDependentRequired(i), l = !a && !o, c = this.propertyActivators[i], h = this.control.ariaLive, u = this.instance.getPropertySchema(i), p = I(u), g = this.instance.path + this.instance.jedi.pathSeparator + i, C = A(g) + "-activator", b = d(p) ? p : i;
        if (l && !c) {
          const y = this.theme.getCheckboxControl({
            id: C,
            label: b,
            titleHidden: !1
          }), P = y.input;
          this.propertyActivators[i] = P, P.addEventListener("change", () => {
            h.innerHTML = "";
            const w = this.theme.getAriaLiveMessage();
            P.checked ? (this.instance.getChild(i) || this.instance.createChild(u, i), this.instance.getChild(i).activate(), w.textContent = b + " field was added to the form", h.appendChild(w)) : (this.instance.getChild(i).deactivate(), w.textContent = b + " field was removed from the form", h.appendChild(w)), this.control.propertiesContainer.close(), this.control.propertiesContainer.showModal();
          }), this.control.propertiesActivators.appendChild(y.container);
        }
        const E = this.propertyActivators[i];
        E && (E.disabled = this.disabled, E.checked = D(this.instance.getValue(), i));
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
class Gt extends qe {
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    let e = this.theme.getRow();
    this.control.childrenSlot.appendChild(e), this.instance.children.forEach((t) => {
      if (t.isActive) {
        const s = m(t.schema, "columns") || 12, r = m(t.schema, "offset") || 0, i = this.theme.getCol(12, s, r);
        m(t.schema, "newRow") === !0 && (e = this.theme.getRow(), this.control.childrenSlot.appendChild(e)), e.appendChild(i), i.appendChild(t.ui.control.container), this.disabled || this.instance.isReadOnly() ? t.ui.disable() : t.ui.enable();
      }
    });
  }
}
class Zt extends qe {
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    const e = this.instance.schema["x-control-cols"], t = this.instance.schema["x-control-stacked"], s = this.instance.schema["x-control-variant"], r = this.theme.getRow(), i = d(e) ? e : 3, a = this.theme.getCol(12, i), o = this.theme.getCol(12, 12 - i), l = this.theme.getTabContent(), c = this.theme.getTabList({
      stacked: d(t) ? t : !1,
      type: d(s) ? s : "pils"
    });
    this.control.childrenSlot.appendChild(r), r.appendChild(a), r.appendChild(o), a.appendChild(c), o.appendChild(l), this.instance.children.forEach((h, u) => {
      if (h.isActive) {
        const p = u === this.activeTabIndex, g = A(h.path), C = I(h.schema), b = this.theme.getTab({
          title: d(C) ? C : h.getKey(),
          id: g,
          active: p
        });
        b.list.addEventListener("click", () => {
          this.activeTabIndex = u;
        }), this.theme.setTabPaneAttributes(h.ui.control.container, p, g), c.appendChild(b.list), l.appendChild(h.ui.control.container), this.disabled || this.instance.isReadOnly() ? h.ui.disable() : h.ui.enable();
      }
    });
  }
}
class _t extends F {
  setUI() {
    const e = H(this.schema), t = q(this.schema), s = this.schema["x-control"];
    e === "object" && t === "grid" ? this.ui = new Gt(this) : e === "object" && s === "nav" ? this.ui = new Zt(this) : this.ui = new qe(this);
  }
  prepare() {
    this.properties = {};
    const e = be(this.schema);
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
    const t = Xe(this.schema);
    return d(t) && t.includes(e);
  }
  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired(e) {
    const t = ze(this.schema);
    if (d(t)) {
      let s = [];
      return Object.keys(t).forEach((r) => {
        d(this.value[r]) && (s = t[r].filter((a) => !D(this.value, a)));
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
      value: M(s)
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
    const s = je(this.schema), r = be(this.schema), i = ve(this.schema);
    return d(r) && D(r, e) ? t = r[e] : d(i) && Object.keys(i).forEach((a) => {
      new RegExp(a).test(e) && (t = i[a]);
    }), e === "name" && (console.log("", JSON.stringify(t, null, 2)), console.log("", JSON.stringify(s, null, 2)), console.log("", t, d(s))), N(t) && d(s) && (t = s), N(t) && (t = {}), t;
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
          Oe(r, i) && s.setValue(i, !1);
        } else {
          const r = this.getPropertySchema(t);
          this.createChild(r, t, e[t], !0);
        }
      });
      for (let t = this.children.length - 1; t >= 0; t--) {
        const s = this.children[t], r = s.getKey();
        N(e[r]) && (this.getChild(r) ? s.deactivate() : this.deleteChild(r));
      }
    }
  }
}
class tt extends U {
  build() {
    this.control = this.theme.getArrayControl({
      title: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: A(this.instance.path),
      description: j(this.instance.schema),
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
    return x(e) ? e : [];
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
class Wt extends tt {
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
    const e = m(this.instance.schema, "navCols"), t = m(this.instance.schema, "navStacked"), s = m(this.instance.schema, "navType"), r = this.theme.getRow(), i = d(e) ? e : 3, a = this.theme.getCol(12, i), o = this.theme.getCol(12, 12 - i), l = this.theme.getTabContent(), c = this.theme.getTabList({
      stacked: d(t) ? t : !1,
      type: d(s) ? s : "pils"
    });
    this.control.childrenSlot.appendChild(r), r.appendChild(a), r.appendChild(o), a.appendChild(c), o.appendChild(l), this.instance.children.forEach((h, u) => {
      const p = this.theme.getDeleteItemBtn(), g = this.theme.getMoveUpItemBtn(), C = this.theme.getMoveDownItemBtn();
      h.ui.control.arrayActions.innerHTML = "", h.ui.control.arrayActions.appendChild(p), h.ui.control.arrayActions.appendChild(g), h.ui.control.arrayActions.appendChild(C), this.control.childrenSlot.appendChild(h.ui.control.container);
      let b;
      const E = m(this.instance.schema, "itemTemplate");
      if (E) {
        const O = E, ge = {
          i0: u,
          i1: u + 1,
          value: h.getValue()
        };
        b = L(O, ge);
      } else {
        const O = I(h.schema);
        b = d(O) ? O + " " + (u + 1) : h.getKey();
      }
      p.addEventListener("click", () => {
        this.activeTabIndex = ot(u - 1, 0, this.instance.value.length - 1), this.instance.deleteItem(u);
      }), g.addEventListener("click", () => {
        const O = u - 1;
        this.activeTabIndex = O, this.instance.move(u, O);
      }), C.addEventListener("click", () => {
        const O = u + 1;
        this.activeTabIndex = O, this.instance.move(u, O);
      });
      const y = u === this.activeTabIndex, P = A(h.path), w = this.theme.getTab({
        title: b,
        id: P,
        active: y
      });
      w.list.addEventListener("click", () => {
        this.activeTabIndex = u;
      }), this.theme.setTabPaneAttributes(h.ui.control.container, y, P), c.appendChild(w.list), l.appendChild(h.ui.control.container), this.disabled || this.instance.isReadOnly() ? h.ui.disable() : h.ui.enable(), u === 0 && g.setAttribute("disabled", ""), this.instance.value.length - 1 === u && C.setAttribute("disabled", "");
    });
  }
}
class Xt extends F {
  setUI() {
    const e = H(this.schema), t = q(this.schema);
    e === "array" && t === "nav" ? this.ui = new Wt(this) : this.ui = new tt(this);
  }
  prepare() {
    this.refreshChildren(), this.on("set-value", () => {
      this.refreshChildren();
    });
  }
  createItemInstance(e) {
    let t;
    const s = this.children.length, r = Ge(this.schema), i = Ve(this.schema);
    t = d(r) ? r : {}, d(i) && d(i[s]) && (t = i[s]);
    const o = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path + this.jedi.pathSeparator + s,
      parent: this,
      value: M(e)
    });
    return d(e) && o.setValue(e, !1), o;
  }
  move(e, t) {
    const s = M(this.getValue()), r = s[e];
    s.splice(e, 1), s.splice(t, 0, r), this.setValue(s);
  }
  addItem() {
    const e = this.createItemInstance(), t = M(this.getValue());
    t.push(e.getValue()), e.destroy(), this.setValue(t);
  }
  deleteItem(e) {
    const s = M(this.getValue()).filter((r, i) => i !== e);
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
    x(e) && e.forEach((t) => {
      const s = this.createItemInstance(t);
      this.children.push(s);
    });
  }
}
class Ae extends U {
  build() {
    const e = ["hidden", "color", "date", "datetime-local", "email", "number", "month", "password", "search", "time", "tel", "text", "textarea", "url", "week"], t = q(this.instance.schema);
    this.control = this.theme.getInputControl({
      type: e.includes(t) ? t : "text",
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || t === "hidden",
      description: j(this.instance.schema)
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
class Qt extends Ae {
  build() {
    this.control = this.theme.getRadiosControl({
      values: R(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || R(this.instance.schema),
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
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
class Yt extends Ae {
  build() {
    this.control = this.theme.getSelectControl({
      values: R(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || R(this.instance.schema),
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    }), this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
}
class es extends U {
  build() {
    this.control = this.theme.getTextareaControl({
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || q(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
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
class ts extends Ae {
  build() {
    this.control = this.theme.getInputControl({
      type: "text",
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
    try {
      new window.Awesomplete(this.control.input, We(this.instance.schema, "awesomplete")), this.control.container.querySelector(".awesomplete").style.display = "block";
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
class ss extends F {
  setUI() {
    const e = H(this.schema), t = R(this.schema), s = q(this.schema), r = We(this.schema, "awesomplete");
    e === "string" && d(t) && s === "radio" ? this.ui = new Qt(this) : e === "string" && s === "textarea" ? this.ui = new es(this) : e === "string" && d(t) ? this.ui = new Yt(this) : e === "string" && d(r) ? this.ui = new ts(this) : e === "string" && (this.ui = new Ae(this));
  }
}
class Ne extends U {
  build() {
    this.control = this.theme.getInputControl({
      type: "number",
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || q(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
  sanitize(e) {
    return H(this.instance.schema) === "integer" ? Math.floor(Number(e)) : Number(e);
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = this.instance.getValue();
    k(e) && (this.control.input.value = this.instance.getValue());
  }
}
class is extends Ne {
  build() {
    this.control = this.theme.getRadiosControl({
      values: R(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || R(this.instance.schema),
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
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
class ns extends Ne {
  build() {
    this.control = this.theme.getSelectControl({
      values: R(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || R(this.instance.schema),
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
}
class rs extends F {
  setUI() {
    const e = H(this.schema), t = R(this.schema), s = q(this.schema), r = e === "number" || e === "integer";
    r && d(t) && s === "radio" ? this.ui = new is(this) : r && d(t) ? this.ui = new ns(this) : r && (this.ui = new Ne(this));
  }
}
class as extends U {
  build() {
    this.control = this.theme.getNullControl({
      id: A(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || q(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  sanitize() {
    return null;
  }
}
class os extends F {
  setUI() {
    this.ui = new as(this);
  }
}
class ls extends Ye {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor(e) {
    super(), this.options = Object.assign({
      container: null,
      refParser: null,
      enablePropertiesToggle: !1,
      enableCollapseToggle: !1,
      startCollapsed: !1,
      deactivateNonRequired: !1,
      schema: {},
      showErrors: "change",
      data: void 0,
      validateFormat: !1,
      mergeAllOf: !1
    }, e), this.rootName = "#", this.pathSeparator = "/", this.instances = {}, this.root = null, this.theme = null, this.validator = null, this.schema = {}, this.refParser = this.options.refParser ? this.options.refParser : null, this.init();
  }
  /**
   * Initializes instance properties
   * @private
   */
  init() {
    this.schema = this.options.schema, this.validator = new Mt({ refParser: this.refParser, validateFormat: this.options.validateFormat }), this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    }), d(this.options.data) && this.root.setValue(this.options.data, !1), this.options.container && (this.container = this.options.container, this.appendHiddenInput(), this.container.appendChild(this.root.ui.control.container), this.container.classList.add("jedi-ready")), this.bindEventListeners();
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
    const e = this.root.ui.theme.getInputControl({
      type: "hidden",
      id: "jedi-hidden-input"
    });
    this.hiddenInput = e.input, this.hiddenInput.setAttribute("name", "json"), this.hiddenInput.removeAttribute("aria-describedby"), this.container.appendChild(this.hiddenInput), this.hiddenInput.value = JSON.stringify(this.getValue());
  }
  /**
   * Adds a child instance pointer to the instances list
   * @private
   */
  register(e) {
    this.instances[e.path] = e;
  }
  /**
   * Deletes a child instance pointer from the instances list
   * @private
   */
  unregister(e) {
    this.instances[e.path] = null, delete this.instances[e.path];
  }
  /**
   * Creates a json instance and dereference schema on the fly if needed.
   */
  createInstance(e) {
    if (this.options.mergeAllOf || m(e.schema, "mergeAllOf")) {
      const c = ke(e.schema);
      d(c) && c.forEach((h) => {
        e.schema = K({}, e.schema, h);
      });
    }
    this.refParser && (e.schema = this.refParser.expand(e.schema, e.path));
    const s = H(e.schema), r = $(e.schema), i = J(e.schema), a = Re(e.schema), o = He(e.schema), l = Me(e.schema);
    if (d(i) || d(r) || s === "any" || x(s) || N(s))
      return new Jt(e);
    if (d(a) && (d(o) || d(l)))
      return new Kt(e);
    if (s === "object")
      return new _t(e);
    if (s === "array")
      return new Xt(e);
    if (s === "string")
      return new ss(e);
    if (s === "number" || s === "integer")
      return new rs(e);
    if (s === "boolean")
      return new zt(e);
    if (s === "null")
      return new os(e);
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
    this.root.destroy(), this.options.container && (this.container.innerHTML = ""), Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
}
const S = ls;
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
      return delete t.$ref, this.expand(K({}, this.refs[s], t));
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
const ds = {
  Jedi: S,
  RefParser: cs
};
export {
  ds as default
};
