function Xe() {
  const i = [];
  return function(e, t) {
    if (typeof t != "object" || t === null)
      return t;
    for (; i.length > 0 && i.at(-1) !== this; )
      i.pop();
    return i.includes(t) ? "[Circular]" : (i.push(t), t);
  };
}
function R(i) {
  if (!(typeof i > "u"))
    return JSON.parse(JSON.stringify(i, Xe()));
}
function Ye(i) {
  return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ne(i, e, t) {
  return i.replace(new RegExp(Ye(e), "g"), t);
}
function P(i) {
  return Ne(Ne(i, "#", "root"), "/", "-");
}
function B(i, e) {
  return Object.prototype.hasOwnProperty.call(i, e);
}
function ve(i) {
  return Object.keys(i).sort().reduce((e, t) => (e[t] = i[t], e), {});
}
function Ce(i, e) {
  return f(i) && f(e) && (i = ve(i), e = ve(e)), JSON.stringify(i) === JSON.stringify(e);
}
function ye(i, e) {
  return !Ce(i, e);
}
function Le(i) {
  return i === null;
}
function d(i) {
  return typeof i < "u";
}
function H(i) {
  return typeof i > "u";
}
function k(i) {
  return typeof i == "number";
}
function q(i) {
  return k(i) && i === Math.floor(i);
}
function V(i) {
  return typeof i == "string";
}
function j(i) {
  return typeof i == "boolean";
}
function w(i) {
  return Array.isArray(i);
}
function f(i) {
  return !Le(i) && !w(i) && typeof i == "object";
}
function et(i) {
  let e = "any";
  return k(i) ? e = q(i) ? "integer" : "number" : V(i) ? e = "string" : j(i) ? e = "boolean" : w(i) ? e = "array" : Le(i) ? e = "null" : f(i) && (e = "object"), e;
}
function D(i, ...e) {
  if (!e.length)
    return i;
  const t = e.shift();
  return f(i) && f(t) && Object.keys(t).forEach((s) => {
    f(t[s]) ? (i[s] || Object.assign(i, {
      [s]: {}
    }), D(i[s], t[s])) : Object.assign(i, {
      [s]: t[s]
    });
  }), D(i, ...e);
}
function tt(i, e) {
  return Object.keys(e).forEach(function(t) {
    t in i && typeof i[t] == typeof e[t] && (i[t] = e[t]);
  }), i;
}
function st(i, e) {
  const t = e.split(".");
  let s = i;
  for (const r of t)
    if (Array.isArray(s) && /^\d+$/.test(r)) {
      const n = parseInt(r);
      if (n >= 0 && n < s.length)
        s = s[n];
      else
        return;
    } else if (B(s, r))
      s = s[r];
    else
      return;
  return s;
}
function C(i, e) {
  return i.replace(/{{(.*?)}}/g, (t) => {
    t = t.replace(/\s/g, "");
    const s = t.split(/{{|}}/)[1];
    return st(e, s);
  });
}
function it(i, e, t) {
  return Math.max(e, Math.min(i, t));
}
function Fe(i) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (const s of i) {
    const r = JSON.stringify(s);
    t.has(r) || (t.add(r), e.push(s));
  }
  return e;
}
const Ft = {
  getCircularReplacer: Xe,
  clone: R,
  escapeRegExp: Ye,
  replaceAll: Ne,
  pathToAttribute: P,
  hasOwn: B,
  sortObject: ve,
  equal: Ce,
  different: ye,
  isNull: Le,
  isSet: d,
  notSet: H,
  isNumber: k,
  isInteger: q,
  isString: V,
  isBoolean: j,
  isArray: w,
  isObject: f,
  getType: et,
  mergeDeep: D,
  overwriteExistingProperties: tt,
  getValueByJSONPath: st,
  compileTemplate: C,
  clamp: it,
  removeDuplicatesFromArray: Fe
};
function Ut(i, e) {
  const t = "x-" + e;
  return i[t];
}
function Kt(i) {
  return V(i.$schema) ? i.$schema : void 0;
}
function Ee(i) {
  return f(i.additionalProperties) || j(i.additionalProperties) ? i.additionalProperties : void 0;
}
function nt(i) {
  return f(i.propertyNames) || j(i.propertyNames) ? i.propertyNames : void 0;
}
function xe(i) {
  return w(i.allOf) ? i.allOf : void 0;
}
function N(i) {
  return w(i.anyOf) ? i.anyOf : void 0;
}
function rt(i) {
  return i.const;
}
function at(i) {
  return f(i.contains) || j(i.contains) ? i.contains : void 0;
}
function ot(i) {
  return i.default;
}
function Ue(i) {
  return f(i.dependentRequired) ? i.dependentRequired : void 0;
}
function lt(i) {
  return f(i.dependentSchemas) ? i.dependentSchemas : void 0;
}
function O(i) {
  return V(i.description) ? i.description : void 0;
}
function Ie(i) {
  return f(i.else) || j(i.else) ? i.else : void 0;
}
function M(i) {
  if (w(i.enum) && i.enum.length > 0)
    return i.enum;
}
function ct(i) {
  return k(i.exclusiveMaximum) ? i.exclusiveMaximum : void 0;
}
function dt(i) {
  return k(i.exclusiveMinimum) ? i.exclusiveMinimum : void 0;
}
function ht(i) {
  return V(i.format) ? i.format : void 0;
}
function we(i) {
  if (f(i.if) || j(i.if))
    return i.if;
}
function Ke(i) {
  return f(i.items) || j(i.items) ? i.items : void 0;
}
function ut(i) {
  return k(i.maximum) ? i.maximum : void 0;
}
function pt(i) {
  if (q(i.maxContains) && i.maxContains >= 0)
    return i.maxContains;
}
function $e(i) {
  if (q(i.maxItems) && i.maxItems >= 0)
    return i.maxItems;
}
function mt(i) {
  if (q(i.maxLength) && i.maxLength >= 0)
    return i.maxLength;
}
function ft(i) {
  if (q(i.maxProperties))
    return i.maxProperties;
}
function gt(i) {
  return k(i.minimum) ? i.minimum : void 0;
}
function bt(i) {
  if (q(i.minContains) && i.minContains >= 0)
    return i.minContains;
}
function ze(i) {
  if (q(i.minItems) && i.minItems >= 0)
    return i.minItems;
}
function vt(i) {
  if (q(i.minLength) && i.minLength >= 0)
    return i.minLength;
}
function Ct(i) {
  if (q(i.minProperties) && i.minProperties >= 0)
    return i.minProperties;
}
function yt(i) {
  if (k(i.multipleOf) && i.multipleOf >= 0)
    return i.multipleOf;
}
function Lt(i) {
  return f(i.not) || j(i.not) ? i.not : void 0;
}
function p(i, e) {
  return i["x-options"] && i["x-options"][e] ? i["x-options"][e] : void 0;
}
function Et(i) {
  return V(i.pattern) ? i.pattern : void 0;
}
function J(i) {
  return f(i.patternProperties) ? i.patternProperties : void 0;
}
function Ae(i) {
  return w(i.prefixItems) ? i.prefixItems : void 0;
}
function z(i) {
  return f(i.properties) ? i.properties : void 0;
}
function De(i) {
  return j(i.readOnly) ? i.readOnly : void 0;
}
function Je(i) {
  return w(i.required) ? [...new Set(i.required)] : void 0;
}
function Pe(i) {
  return f(i.then) || j(i.then) ? i.then : void 0;
}
function A(i) {
  return V(i.title) ? i.title : void 0;
}
function E(i) {
  if (V(i.type) || w(i.type))
    return i.type;
}
function U(i) {
  return w(i.oneOf) ? i.oneOf : void 0;
}
function xt(i) {
  return j(i.unevaluatedProperties) ? i.unevaluatedProperties : void 0;
}
function It(i) {
  return j(i.uniqueItems) ? i.uniqueItems : void 0;
}
const $t = {
  getSchemaX: Ut,
  getSchemaSchema: Kt,
  getSchemaAdditionalProperties: Ee,
  getSchemaPropertyNames: nt,
  getSchemaAllOf: xe,
  getSchemaAnyOf: N,
  getSchemaConst: rt,
  getSchemaContains: at,
  getSchemaDefault: ot,
  getSchemaDependentRequired: Ue,
  getSchemaDependentSchemas: lt,
  getSchemaDescription: O,
  getSchemaElse: Ie,
  getSchemaEnum: M,
  getSchemaExclusiveMaximum: ct,
  getSchemaExclusiveMinimum: dt,
  getSchemaFormat: ht,
  getSchemaIf: we,
  getSchemaItems: Ke,
  getSchemaMaximum: ut,
  getSchemaMaxContains: pt,
  getSchemaMaxItems: $e,
  getSchemaMaxLength: mt,
  getSchemaMaxProperties: ft,
  getSchemaMinimum: gt,
  getSchemaMinContains: bt,
  getSchemaMinItems: ze,
  getSchemaMinLength: vt,
  getSchemaMinProperties: Ct,
  getSchemaMultipleOf: yt,
  getSchemaNot: Lt,
  getSchemaXOption: p,
  getSchemaPattern: Et,
  getSchemaPatternProperties: J,
  getSchemaPrefixItems: Ae,
  getSchemaProperties: z,
  getSchemaReadOnly: De,
  getSchemaRequired: Je,
  getSchemaThen: Pe,
  getSchemaTitle: A,
  getSchemaType: E,
  getSchemaOneOf: U,
  getSchemaUnevaluatedProperties: xt,
  getSchemaUniqueItems: It
};
function G(i, e, t, s) {
  let r = [];
  const n = xe(t);
  return d(n) && n.forEach((a) => {
    const o = new T({ refParser: i.refParser, schema: a, data: e, rootName: s }), l = o.getErrors();
    o.destroy(), r = [...r, ...l], r = Fe(r);
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
function Z(i, e, t, s, r) {
  const n = [], a = vt(t);
  return V(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length < a && n.push({
    messages: [
      C(b.errorMinLength, {
        minLength: a
      })
    ],
    path: r,
    constrain: "minLength"
  })), n;
}
function Q(i, e, t, s, r) {
  const n = [], a = N(t);
  if (d(a)) {
    let o = !1;
    a.forEach((l) => {
      const c = new T({ refParser: i.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && (o = !0);
    }), o || n.push({
      messages: [
        b.errorAnyOf
      ],
      path: r,
      constrain: "anyOf"
    });
  }
  return n;
}
function W(i, e, t, s, r) {
  const n = [], a = M(t);
  return d(a) && !a.some((l) => JSON.stringify(e) === JSON.stringify(l)) && n.push({
    messages: [
      C(b.errorEnum, {
        enum: JSON.stringify(a)
      })
    ],
    path: r,
    constrain: "enum"
  }), n;
}
function _(i, e, t, s, r) {
  const n = [], a = ct(t);
  return k(e) && d(a) && e >= a && n.push({
    messages: [
      C(b.errorExclusiveMaximum, {
        exclusiveMaximum: a
      })
    ],
    path: r,
    constrain: "exclusiveMaximum"
  }), n;
}
function X(i, e, t, s, r) {
  const n = [], a = dt(t);
  return k(e) && d(a) && e <= a && n.push({
    messages: [
      C(b.errorExclusiveMinimum, {
        exclusiveMinimum: a
      })
    ],
    path: r,
    constrain: "exclusiveMinimum"
  }), n;
}
function Y(i, e, t, s, r) {
  const n = [], a = ht(t);
  let o = i.validateFormat;
  if (p(t, "validateFormat") && (o = t.options.validateFormat), d(a) && V(e) && o) {
    let l;
    a === "email" && (l = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i)), a === "url" && (l = new RegExp(/^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:@](?:[^\s:@-]*[^\s:@])?\.?)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d{2,5})?(?:\/[^\s]*)?$/i)), a === "uuid" && (l = new RegExp(/^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/i)), d(l) && !l.test(e) && n.push({
      messages: [
        C(b.errorFormat, { format: a })
      ],
      path: r,
      constrain: "format"
    });
  }
  return n;
}
function ee(i, e, t, s, r) {
  const n = [], a = Ke(t), o = Ae(t);
  if (w(e) && d(a)) {
    const l = d(o) ? o.length : 0;
    a === !1 && e.length > 0 && e.length > l && n.push({
      messages: [b.errorItems],
      path: r,
      constrain: "items"
    });
  }
  return n;
}
function te(i, e, t, s, r) {
  const n = [], a = $e(t);
  return w(e) && d(a) && e.length > a && n.push({
    messages: [
      C(b.errorMaxItems, {
        maxItems: a
      })
    ],
    path: r,
    constrain: "maxItems"
  }), n;
}
function se(i, e, t, s, r) {
  const n = [], a = mt(t);
  return V(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length > a && n.push({
    messages: [
      C(b.errorMaxLength, {
        maxLength: a
      })
    ],
    path: r,
    constrain: "maxLength"
  })), n;
}
function ie(i, e, t, s, r) {
  const n = [], a = ft(t);
  return f(e) && d(a) && Object.keys(e).length > a && n.push({
    messages: [
      C(b.errorMaxProperties, {
        maxProperties: a
      })
    ],
    path: r,
    constrain: "maxProperties"
  }), n;
}
function ne(i, e, t, s, r) {
  const n = [], a = gt(t);
  return k(e) && d(a) && e < a && n.push({
    messages: [
      C(b.errorMinimum, {
        minimum: a
      })
    ],
    path: r,
    constrain: "minimum"
  }), n;
}
function re(i, e, t, s, r) {
  const n = [], a = ze(t);
  return w(e) && d(a) && e.length < a && n.push({
    messages: [
      C(b.errorMinItems, {
        minItems: a
      })
    ],
    path: r,
    constrain: "minItems"
  }), n;
}
function ae(i, e, t, s, r) {
  const n = [], a = Ct(t);
  return f(e) && d(a) && Object.keys(e).length < a && n.push({
    messages: [
      C(b.errorMinProperties, {
        minProperties: a
      })
    ],
    path: r,
    constrain: "minProperties"
  }), n;
}
function oe(i, e, t, s, r) {
  const n = [], a = yt(t);
  if (k(e) && d(a)) {
    if (e === 0)
      return n;
    (!(e / a === Math.floor(e / a)) || e.toString().includes("e")) && n.push({
      messages: [
        C(b.errorMultipleOf, {
          multipleOf: a
        })
      ],
      path: r,
      constrain: "multipleOf"
    });
  }
  return n;
}
function le(i, e, t, s, r) {
  const n = [], a = Lt(t);
  if (d(a)) {
    const o = new T({ refParser: i.refParser, schema: a, data: e }), l = o.getErrors();
    o.destroy(), l.length === 0 && n.push({
      messages: [
        C(b.errorNot)
      ],
      path: r,
      constrain: "not"
    });
  }
  return n;
}
function ce(i, e, t, s, r) {
  const n = [], a = U(t);
  if (d(a)) {
    let o = 0;
    a.forEach((l) => {
      const c = new T({ refParser: i.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && o++;
    }), o !== 1 && n.push({
      messages: [
        C(b.errorOneOf, {
          counter: o
        })
      ],
      path: r,
      constrain: "oneOf"
    });
  }
  return n;
}
function de(i, e, t, s, r) {
  const n = [], a = Et(t);
  return V(e) && d(a) && !new RegExp(a).test(e) && n.push({
    messages: [
      C(b.errorPattern, {
        pattern: a
      })
    ],
    path: r,
    constrain: "pattern"
  }), n;
}
function he(i, e, t, s) {
  let r = [];
  const n = J(t);
  return f(e) && d(n) && Object.keys(e).forEach((a) => {
    Object.keys(n).forEach((o) => {
      if (new RegExp(o).test(a)) {
        const c = n[o], h = new T({
          refParser: i.refParser,
          schema: c,
          data: e[a]
        }), u = h.getErrors().map((m) => ({
          messages: m.messages,
          path: s + "/" + a,
          constrain: "patternProperties"
        }));
        r = [...r, ...u], h.destroy();
      }
    });
  }), r;
}
function ue(i, e, t, s, r) {
  const n = [], a = Je(t);
  if (f(e) && d(a)) {
    const o = [], l = Object.keys(e);
    a.forEach((h) => {
      l.includes(h) || o.push(h);
    }), o.length > 0 && n.push({
      messages: [
        C(b.errorRequired, {
          required: o.join(", ")
        })
      ],
      path: r,
      constrain: "required"
    });
  }
  return n;
}
function pe(i, e, t, s, r) {
  const n = [], a = E(t);
  if (a === "any")
    return n;
  if (d(a)) {
    const o = {
      string: (c) => V(c),
      number: (c) => k(c),
      integer: (c) => q(c),
      boolean: (c) => j(c),
      array: (c) => w(c),
      object: (c) => f(c),
      null: (c) => Le(c)
    };
    let l = !0;
    w(a) ? l = a.some((c) => o[c](e)) : l = o[a](e), l || n.push({
      messages: [
        C(b.errorType, {
          type: a,
          valueType: et(e)
        })
      ],
      path: r,
      constrain: "type"
    });
  }
  return n;
}
function me(i, e, t, s, r) {
  const n = [], a = ut(t);
  return k(e) && d(a) && e > a && n.push({
    messages: [
      C(b.errorMaximum, {
        maximum: a
      })
    ],
    path: r,
    constrain: "maximum"
  }), n;
}
function fe(i, e, t, s, r) {
  const n = [], a = It(t);
  if (w(e) && d(a) && a === !0) {
    const o = [];
    let l = !1;
    for (let h = 0; h < e.length; h++) {
      let u = e[h];
      f(u) && (u = ve(u));
      const m = JSON.stringify(u);
      if (l = o.some((g) => g === m), l)
        break;
      o.push(m);
    }
    l && n.push({
      messages: [
        b.errorUniqueItems
      ],
      path: r,
      constrain: "uniqueItems"
    });
  }
  return n;
}
function ge(i, e, t, s, r) {
  const n = [], a = Ee(t), o = J(t), l = z(t);
  if (f(e) && d(a)) {
    const c = l || {}, h = a, u = o || {};
    Object.keys(e).forEach((m) => {
      const g = Object.keys(u).some((L) => new RegExp(L).test(m)), x = B(c, m);
      if (!g && !x) {
        if (h === !1)
          n.push({
            messages: [
              C(b.errorAdditionalProperties, { property: m })
            ],
            path: r,
            constrain: "additionalProperties"
          });
        else if (f(h)) {
          const L = new T({
            refParser: i.refParser,
            schema: h,
            data: e[m]
          }), y = L.getErrors().map((v) => ({
            messages: v.messages,
            path: `${r}.${m}`,
            constrain: "additionalProperties"
          }));
          n.push(...y), L.destroy();
        }
      }
    });
  }
  return n;
}
const zt = {
  additionalProperties: ge,
  allOf: G,
  anyOf: Q,
  enum: W,
  exclusiveMaximum: _,
  exclusiveMinimum: X,
  format: Y,
  items: ee,
  maximum: me,
  maxItems: te,
  maxLength: se,
  maxProperties: ie,
  minimum: ne,
  minItems: re,
  minLength: Z,
  minProperties: ae,
  multipleOf: oe,
  not: le,
  oneOf: ce,
  pattern: de,
  patternProperties: he,
  required: ue,
  type: pe,
  uniqueItems: fe
};
function Se(i, e, t, s, r) {
  const n = [], a = rt(t);
  return d(a) && ye(e, a) && n.push({
    messages: [
      C(b.errorConst, {
        const: JSON.stringify(a)
      })
    ],
    path: r,
    constrain: "const"
  }), n;
}
function Oe(i, e, t, s, r) {
  const n = [], a = at(t), o = bt(t), l = pt(t);
  if (w(e) && d(a)) {
    let c = 0;
    e.forEach((u) => {
      const m = new T({ refParser: i.refParser, schema: a, data: u });
      m.getErrors().length === 0 && c++, m.destroy();
    });
    const h = c === 0;
    d(o) ? c < o && n.push({
      messages: [
        C(b.errorMinContains, {
          counter: c,
          minContains: o
        })
      ],
      path: r,
      constrain: "minContains"
    }) : h && n.push({
      messages: [b.errorContains],
      path: r,
      constrain: "contains"
    }), d(l) && c > l && n.push({
      messages: [
        C(b.errorMaxContains, {
          counter: c,
          maxContains: l
        })
      ],
      path: r,
      constrain: "maxContains"
    });
  }
  return n;
}
function Te(i, e, t, s, r) {
  const n = [], a = Ue(t);
  if (f(e) && d(a)) {
    let o = [];
    Object.keys(a).forEach((c) => {
      d(e[c]) && (o = a[c].filter((u) => !B(e, u)));
    }), o.length > 0 && n.push({
      messages: [
        C(b.errorDependentRequired, {
          dependentRequired: o.join(", ")
        })
      ],
      path: r,
      constrain: "dependentRequired"
    });
  }
  return n;
}
function je(i, e, t) {
  let s = [];
  const r = lt(t);
  return f(e) && d(r) && Object.keys(r).forEach((n) => {
    if (d(e[n])) {
      const a = r[n], o = new T({ refParser: i.refParser, schema: a, data: e }), l = o.getErrors();
      o.destroy(), s = [...s, ...l];
    }
  }), s;
}
function ke(i, e, t) {
  const s = [], r = we(t), n = Pe(t), a = Ie(t);
  if (d(r)) {
    if (H(n) && H(a))
      return s;
    const o = new T({ refParser: i.refParser, schema: r, data: e }), l = o.getErrors();
    o.destroy();
    let c = [], h = [];
    if (d(n)) {
      const u = new T({ refParser: i.refParser, schema: n, data: e });
      c = u.getErrors(), u.destroy();
    }
    if (d(a)) {
      const u = new T({ refParser: i.refParser, schema: a, data: e });
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
function Me(i, e, t, s, r) {
  const n = [], a = Ae(t);
  return w(e) && d(a) && a.forEach((o, l) => {
    const c = e[l];
    if (d(c)) {
      const h = new T({ refParser: i.refParser, schema: o, data: c }), u = h.getErrors();
      h.destroy(), u.length > 0 && n.push({
        messages: [
          C(b.errorPrefixItems, {
            index: l
          })
        ],
        path: r,
        constrain: "prefixItems"
      });
    }
  }), n;
}
const Jt = {
  additionalProperties: ge,
  allOf: G,
  anyOf: Q,
  const: Se,
  contains: Oe,
  dependentRequired: Te,
  dependentSchemas: je,
  enum: W,
  exclusiveMaximum: _,
  exclusiveMinimum: X,
  format: Y,
  if: ke,
  items: ee,
  maximum: me,
  maxItems: te,
  maxLength: se,
  maxProperties: ie,
  minimum: ne,
  minItems: re,
  minLength: Z,
  minProperties: ae,
  multipleOf: oe,
  not: le,
  oneOf: ce,
  pattern: de,
  patternProperties: he,
  prefixItems: Me,
  required: ue,
  type: pe,
  uniqueItems: fe
}, Gt = {
  additionalProperties: ge,
  allOf: G,
  anyOf: Q,
  const: Se,
  contains: Oe,
  dependentRequired: Te,
  dependentSchemas: je,
  enum: W,
  exclusiveMaximum: _,
  exclusiveMinimum: X,
  format: Y,
  if: ke,
  items: ee,
  maximum: me,
  maxItems: te,
  maxLength: se,
  maxProperties: ie,
  minimum: ne,
  minItems: re,
  minLength: Z,
  minProperties: ae,
  multipleOf: oe,
  not: le,
  oneOf: ce,
  pattern: de,
  patternProperties: he,
  prefixItems: Me,
  required: ue,
  type: pe,
  uniqueItems: fe
};
function wt(i, e, t, s, r) {
  let n = [];
  const a = xt(t), o = J(t), l = z(t), c = xe(t), h = N(t), u = U(t);
  if (f(e) && d(a)) {
    let m = d(l) ? l : {};
    const g = a, x = o;
    [
      c,
      h,
      u
    ].forEach((y) => {
      d(y) && y.forEach((v) => {
        d(v.properties) && (m = { ...m, ...v.properties });
      });
    }), m && Object.keys(e).forEach((y) => {
      let v = !1;
      if (d(x) && Object.keys(x).forEach((I) => {
        v = new RegExp(I).test(y);
      }), !v && g === !1 && !B(m, y) && n.push({
        messages: [
          C(b.errorUnevaluatedProperties, {
            property: y
          })
        ],
        path: r,
        constrain: "unevaluatedProperties"
      }), !v && f(g) && !B(m, y)) {
        const I = new T({
          refParser: i.refParser,
          schema: g,
          data: e[y]
        }), S = I.getErrors().map((be) => ({
          messages: be.messages,
          path: y,
          constrain: "unevaluatedProperties"
        }));
        n = [...n, ...S], I.destroy();
      }
    });
  }
  return n;
}
const Zt = {
  additionalProperties: ge,
  allOf: G,
  anyOf: Q,
  const: Se,
  contains: Oe,
  dependentRequired: Te,
  dependentSchemas: je,
  enum: W,
  exclusiveMaximum: _,
  exclusiveMinimum: X,
  format: Y,
  if: ke,
  items: ee,
  maximum: me,
  maxItems: te,
  maxLength: se,
  maxProperties: ie,
  minimum: ne,
  minItems: re,
  minLength: Z,
  minProperties: ae,
  multipleOf: oe,
  not: le,
  oneOf: ce,
  pattern: de,
  patternProperties: he,
  prefixItems: Me,
  required: ue,
  type: pe,
  unevaluatedProperties: wt,
  uniqueItems: fe
};
function Qt(i, e, t, s, r) {
  const n = [], a = nt(t);
  return f(e) && d(a) && Object.keys(e).forEach((o) => {
    new T({
      refParser: i.refParser,
      schema: a,
      data: o
    }).getErrors().length > 0 && n.push({
      messages: [
        C(b.errorPropertyNames, { propertyName: o })
      ],
      path: r,
      constrain: "propertyNames"
    });
  }), n;
}
const _e = {
  additionalProperties: ge,
  allOf: G,
  anyOf: Q,
  const: Se,
  contains: Oe,
  dependentRequired: Te,
  dependentSchemas: je,
  enum: W,
  exclusiveMaximum: _,
  exclusiveMinimum: X,
  format: Y,
  if: ke,
  items: ee,
  maximum: me,
  maxItems: te,
  maxLength: se,
  maxProperties: ie,
  minimum: ne,
  minItems: re,
  minLength: Z,
  minProperties: ae,
  multipleOf: oe,
  not: le,
  oneOf: ce,
  pattern: de,
  patternProperties: he,
  prefixItems: Me,
  propertyNames: Qt,
  required: ue,
  type: pe,
  unevaluatedProperties: wt,
  uniqueItems: fe
};
class Wt {
  constructor(e = {}) {
    this.refParser = e.refParser, this.validateFormat = e.validateFormat ? e.validateFormat : !1, this.draft = _e, this.jsonSchemaDrafts = {
      "http://json-schema.org/draft-04/schema#": zt,
      "http://json-schema.org/draft-06/schema#": Jt,
      "http://json-schema.org/draft-07/schema#": Gt,
      "https://json-schema.org/draft/2019-09/schema": Zt,
      "https://json-schema.org/draft/2020-12/schema": _e
    };
  }
  /**
   * Validates a value against it's schema
   */
  getErrors(e, t, s, r) {
    let n = [];
    const a = p(t, "messages"), o = R(t);
    return j(o) && o === !0 ? n : j(o) && o === !1 ? [{
      messages: d(a) ? a : ["invalid"],
      path: r
    }] : (Object.keys(this.draft).forEach((l) => {
      if (B(o, l)) {
        const c = this.draft[l], h = c(this, e, t, s, r);
        h && (n = [...n, ...h]);
      }
    }), n.length > 0 && a && (n = [
      {
        messages: a,
        path: r
      }
    ]), n);
  }
}
class At {
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
class F extends At {
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
    const e = this.jedi.uiResolver.getClass(this.schema);
    this.ui = new e(this);
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
    if (H(this.value)) {
      let e;
      const t = E(this.schema);
      t === "boolean" && (e = !1), t === "number" && (e = 0), t === "integer" && (e = 0), t === "string" && (e = ""), t === "array" && (e = []), t === "object" && (e = {}), t === "null" && (e = null), this.value = e;
    }
  }
  setDefaultValue() {
    const e = ot(this.schema);
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
    return Fe(e);
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
    return De(this.schema) === !0 && (e = !0), this.parent && De(this.parent.schema) === !0 && (e = !0), e;
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
class K {
  constructor(e) {
    this.instance = e, this.theme = null, this.control = null, this.disabled = !1, this.readOnly = this.instance.isReadOnly(), this.init(), this.build(), this.coerceValue(), this.addEventListeners(), this.setContainerAttributes(), this.refreshUI(), (this.instance.jedi.options.showErrors === "always" || p(this.instance.schema, "showErrors") === "always") && this.showValidationErrors(this.instance.getErrors()), this.instance.on("set-value", () => {
      this.refreshUI(), this.showValidationErrors(this.instance.getErrors());
    }), this.instance.on("change", () => {
      this.refreshUI(), this.showValidationErrors(this.instance.getErrors());
    });
  }
  static resolves(e) {
  }
  /**
   * Initializes the editor
   * @private
   */
  init() {
    this.theme = this.instance.jedi.theme;
  }
  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-path", this.instance.path), this.control.container.setAttribute("data-type", E(this.instance.schema));
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
    if (this.instance.jedi.options.showErrors === "never" || p(this.instance.schema, "showErrors") === "never")
      return;
    this.control.messages.innerHTML = "";
    const s = A(this.instance.schema) || this.instance.getKey();
    e.forEach((r) => {
      r.messages.forEach((n) => {
        const a = this.getInvalidFeedback({
          message: s + ": " + n
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
class Ge extends K {
  static resolves(e) {
    const t = E(e), s = U(e), r = N(e);
    return d(r) || d(s) || t === "any" || w(t) || H(t);
  }
  build() {
    this.control = this.theme.getMultipleControl({
      title: "Options",
      titleHidden: p(this.instance.schema, "titleHidden"),
      id: P(this.instance.path),
      description: O(this.instance.schema),
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
class _t extends F {
  setUI() {
    this.ui = new Ge(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.activeInstanceChanged = !0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.ifThenElseShemas = [], this.traverseSchema(this.schema), delete this.schema.if, delete this.schema.then, delete this.schema.else;
    let e = 0;
    this.ifThenElseShemas.forEach((n) => {
      d(n.then) && (this.schemas.push(D({}, R(this.schema), n.then)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(n.then)), e++), d(n.else) && (this.schemas.push(D({}, R(this.schema), n.else)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(n.else)), e++);
    });
    const t = R(this.schema);
    delete t.if, delete t.then, delete t.else;
    const s = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path,
      parent: this.parent
    });
    this.schemas.forEach((n) => {
      const a = this.jedi.createInstance({
        jedi: this.jedi,
        schema: n,
        path: this.path,
        parent: this.parent
      });
      a.unregister(), a.on("change", () => {
        const o = this.activeInstance.getValue();
        this.getFittestIndex(o) !== this.index ? this.setValue(o) : (this.value = this.activeInstance.getValue(), this.emit("change"));
      }), this.instances.push(a), this.register();
    }), this.on("set-value", (n) => {
      this.instances.forEach((l) => {
        const c = l.getValue();
        let h = n;
        f(c) && f(h) && (h = tt(c, h)), l.setValue(h, !1);
      });
      const a = this.getFittestIndex(n);
      a !== this.index && (this.switchInstance(a), this.emit("change"));
    }), this.value = s.getValue(), s.destroy();
    const r = this.getFittestIndex(this.value);
    this.switchInstance(r);
  }
  switchInstance(e) {
    this.index = e, this.activeInstance = this.instances[this.index], this.value = this.activeInstance.getValue(), this.emit("change");
  }
  traverseSchema(e) {
    const t = we(e);
    if (d(t)) {
      const s = Pe(e), r = Ie(e);
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
      const n = new T({
        schema: s.if,
        data: e
      }), a = n.getErrors();
      n.destroy(), a.length === 0 && s.then && (t = r), a.length > 0 && s.else && (t = r);
    }), t;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
  getAllOfCombinations(e) {
    const t = [], s = (n, a) => ({ ...n, ...a }), r = (n, a) => {
      if (a.length === 0) {
        t.push(n);
        return;
      }
      const o = a[0];
      r(s(n, o), a.slice(1)), r(n, a.slice(1));
    };
    for (let n = 0; n < e.length; n++)
      r(e[n], e.slice(n + 1));
    return t.sort((n, a) => Object.keys(n).length - Object.keys(a).length), t;
  }
}
class Xt extends F {
  prepare() {
    this.instances = [], this.activeInstance = null, this.lastIndex = 0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.on("set-value", () => {
      this.onSetValue();
    });
    const e = E(this.schema);
    if (d(N(this.schema)) || d(U(this.schema))) {
      const s = d(N(this.schema)) ? N(this.schema) : U(this.schema), r = R(this.schema);
      delete r.anyOf, delete r.oneOf, delete r.options, s.forEach((n, a) => {
        n = { ...r, ...n }, this.jedi.refParser && (n = this.jedi.refParser.expand(n));
        let o = "Option-" + (a + 1);
        const l = p(n, "switcherTitle"), c = A(n);
        d(c) && (o = c), d(l) && (o = l), this.switcherOptionValues.push(a), this.switcherOptionsLabels.push(o), this.schemas.push(n);
      });
    } else if (w(e))
      e.forEach((s, r) => {
        const n = D(this.schema), a = {
          ...n,
          type: s,
          title: s[0].toUpperCase() + s.slice(1)
        };
        d(n.title) && (a.title = n.title), this.switcherOptionValues.push(r), this.switcherOptionsLabels.push(s.charAt(0).toUpperCase() + s.slice(1)), this.schemas.push(a);
      });
    else if (e === "any" || !e) {
      const s = R(this.schema);
      this.schemas = [
        { ...s, type: "object" },
        { ...s, type: "array" },
        { ...s, type: "string" },
        { ...s, type: "number" },
        { ...s, type: "integer" },
        { ...s, type: "boolean" },
        { ...s, type: "null" }
      ], this.schemas.forEach((r, n) => {
        this.switcherOptionValues.push(n);
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
        value: R(this.value)
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
    if (ye(this.activeInstance.getValue(), this.value)) {
      const e = this.getFittestIndex(this.value);
      this.switchInstance(e, this.value);
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(e) {
    let t = 0, s, r;
    for (const n of this.instances) {
      const a = this.jedi.validator.getErrors(e, n.schema, n.getKey(), n.path);
      (H(s) || H(r)) && (s = t, r = a), a.length < r.length && (s = t, r = a), t++;
    }
    return s;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
}
class Yt extends F {
}
class es extends F {
  prepare() {
    this.properties = {};
    const e = z(this.schema);
    d(e) && Object.keys(e).forEach((t) => {
      const s = e[t];
      this.properties[t] = { schema: s };
      let r = !0;
      const n = this.jedi.options.deactivateNonRequired, a = p(this.schema, "deactivateNonRequired"), o = p(s, "deactivateNonRequired");
      this.isNotRequired(t) && d(n) && n === !0 && (r = !1), this.isNotRequired(t) && d(a) && a === !0 && (r = !1), this.isNotRequired(t) && d(o) && o === !0 && (r = !1), r && this.createChild(s, t);
    }), this.refreshInstances(), this.on("set-value", () => {
      this.refreshInstances();
    });
  }
  /**
   * Returns true if the property is required
   */
  isRequired(e) {
    const t = Je(this.schema);
    return d(t) && t.includes(e);
  }
  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired(e) {
    const t = Ue(this.schema);
    if (d(t)) {
      let s = [];
      return Object.keys(t).forEach((r) => {
        d(this.value[r]) && (s = t[r].filter((a) => !B(this.value, a)));
      }), s.includes(e);
    }
    return !1;
  }
  createChild(e, t, s, r = !1) {
    const n = this.jedi.createInstance({
      jedi: this.jedi,
      schema: e,
      path: this.path + this.jedi.pathSeparator + t,
      parent: this,
      value: R(s)
    });
    this.children.push(n), this.value[t] = n.getValue();
    const a = this.jedi.options.deactivateNonRequired || p(this.schema, "deactivateNonRequired");
    return this.isNotRequired(t) && d(a) && a === !0 && !r && n.deactivate(), n;
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
    const s = Ee(this.schema), r = z(this.schema), n = J(this.schema);
    return d(r) && B(r, e) ? t = r[e] : d(n) && Object.keys(n).forEach((a) => {
      new RegExp(a).test(e) && (t = n[a]);
    }), H(t) && d(s) && (t = s), H(t) && (t = {}), t;
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
          const r = s.getValue(), n = e[s.getKey()];
          ye(r, n) && s.setValue(n, !1);
        } else {
          const r = this.getPropertySchema(t);
          this.createChild(r, t, e[t], !0);
        }
      });
      for (let t = this.children.length - 1; t >= 0; t--) {
        const s = this.children[t], r = s.getKey();
        H(e[r]) && (this.getChild(r) ? s.deactivate() : this.deleteChild(r));
      }
    }
  }
}
class ts extends F {
  prepare() {
    this.refreshChildren(), this.on("set-value", () => {
      this.refreshChildren();
    });
  }
  createItemInstance(e) {
    let t;
    const s = this.children.length, r = Ke(this.schema), n = Ae(this.schema);
    t = d(r) ? r : {}, d(n) && d(n[s]) && (t = n[s]);
    const o = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path + this.jedi.pathSeparator + s,
      parent: this,
      value: R(e)
    });
    return d(e) && o.setValue(e, !1), o;
  }
  move(e, t) {
    const s = R(this.getValue()), r = s[e];
    s.splice(e, 1), s.splice(t, 0, r), this.setValue(s);
  }
  addItem() {
    const e = this.createItemInstance(), t = R(this.getValue());
    t.push(e.getValue()), e.destroy(), this.setValue(t);
  }
  deleteItem(e) {
    const s = R(this.getValue()).filter((r, n) => n !== e);
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
    w(e) && e.forEach((t) => {
      const s = this.createItemInstance(t);
      this.children.push(s);
    });
  }
}
class ss extends F {
}
class is extends F {
}
class ns extends F {
}
const rs = {
  properties: "glyphicon glyphicon-list",
  delete: "glyphicon glyphicon-trash",
  add: "glyphicon glyphicon-plus",
  moveUp: "glyphicon glyphicon-arrow-up",
  moveDown: "glyphicon glyphicon-arrow-down",
  collapse: "glyphicon glyphicon-chevron-down"
}, as = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down",
  collapse: "bi bi-chevron-down"
}, os = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down",
  collapse: "icon-chevron-down"
}, ls = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down",
  collapse: "fa fa-chevron-down"
}, cs = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down",
  collapse: "fas fa-chevron-down"
}, ds = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down",
  collapse: "fa-solid fa-chevron-down"
};
class Re extends K {
  sanitize(e) {
    return !!e;
  }
}
class Pt extends Re {
  static resolves(e) {
    return E(e) === "boolean" && p(e, "format") === "radio";
  }
  build() {
    this.control = this.theme.getRadiosControl({
      values: ["false", "true"],
      titles: p(this.instance.schema, "enumTitles") || ["false", "true"],
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
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
class St extends Re {
  static resolves(e) {
    return E(e) === "boolean";
  }
  build() {
    this.control = this.theme.getSelectControl({
      values: ["false", "true"],
      titles: p(this.instance.schema, "enumTitles") || ["false", "true"],
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
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
class Ot extends Re {
  static resolves(e) {
    return E(e) === "boolean" && p(e, "format") === "checkbox";
  }
  build() {
    this.control = this.theme.getCheckboxControl({
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
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
class $ extends K {
  sanitize(e) {
    return String(e);
  }
}
class Tt extends $ {
  static resolves(e) {
    return E(e) === "string" && p(e, "format") === "radio";
  }
  build() {
    this.control = this.theme.getRadiosControl({
      values: M(this.instance.schema),
      titles: p(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
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
class jt extends $ {
  static resolves(e) {
    return E(e) === "string" && d(M(e));
  }
  build() {
    this.control = this.theme.getSelectControl({
      values: M(this.instance.schema),
      titles: p(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class kt extends $ {
  static resolves(e) {
    return E(e) === "string" && p(e, "format") === "textarea";
  }
  build() {
    this.control = this.theme.getTextareaControl({
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden") || p(this.instance.schema, "format") === "hidden",
      description: O(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class Mt extends $ {
  static resolves(e) {
    return E(e) === "string" && d(p(e, "awesomplete"));
  }
  build() {
    this.control = this.theme.getInputControl({
      type: "text",
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
    });
    try {
      this.awesomplete = new window.Awesomplete(this.control.input, p(this.instance.schema, "awesomplete")), this.control.container.querySelector(".awesomplete").style.display = "block";
    } catch (e) {
      console.error("Awesomplete is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.control.input.addEventListener("awesomplete-selectcomplete", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
  destroy() {
    this.awesomplete.destroy(), super.destroy();
  }
}
class Ve extends $ {
  static resolves(e) {
    return E(e) === "string";
  }
  static getTypes() {
    return ["hidden", "color", "date", "datetime-local", "email", "number", "month", "password", "search", "time", "tel", "text", "url", "week"];
  }
  build() {
    const e = p(this.instance.schema, "format");
    this.control = this.theme.getInputControl({
      type: Ve.getTypes().includes(e) ? e : "text",
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden") || e === "hidden",
      description: O(this.instance.schema)
    }), e === "color" && this.instance.value.length === 0 && this.instance.setValue("#000000", !1);
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
class He extends K {
  sanitize(e) {
    return E(this.instance.schema) === "integer" ? Math.floor(Number(e)) : Number(e);
  }
}
class Rt extends He {
  static resolves(e) {
    const t = E(e), s = M(e), r = p(e, "format");
    return (t === "number" || t === "integer") && d(s) && r === "radio";
  }
  build() {
    this.control = this.theme.getRadiosControl({
      values: M(this.instance.schema),
      titles: p(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
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
class Vt extends He {
  static resolves(e) {
    const t = E(e);
    return (t === "number" || t === "integer") && d(M(e));
  }
  build() {
    this.control = this.theme.getSelectControl({
      values: M(this.instance.schema),
      titles: p(this.instance.schema, "enumTitles") || M(this.instance.schema),
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = this.instance.getValue();
    k(e) && (this.control.input.value = this.instance.getValue());
  }
}
class Ht extends He {
  static resolves(e) {
    const t = E(e);
    return t === "number" || t === "integer";
  }
  build() {
    this.control = this.theme.getInputControl({
      type: "number",
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden") || p(this.instance.schema, "format") === "hidden",
      description: O(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = this.instance.getValue();
    k(e) && (this.control.input.value = this.instance.getValue());
  }
}
class qe extends K {
  static resolves(e) {
    return E(e) === "object";
  }
  build() {
    this.propertyActivators = {};
    const e = this.instance.schema.options || {};
    let t = !0;
    const s = Ee(this.instance.schema);
    d(s) && s === !1 && (t = !1);
    let r = !1;
    d(this.instance.jedi.options.enablePropertiesToggle) && (r = this.instance.jedi.options.enablePropertiesToggle), d(e.enablePropertiesToggle) && (r = e.enablePropertiesToggle), this.control = this.theme.getObjectControl({
      title: A(this.instance.schema) || this.instance.getKey(),
      titleHidden: p(this.instance.schema, "titleHidden"),
      id: P(this.instance.path),
      description: O(this.instance.schema),
      enablePropertiesToggle: r,
      addProperty: t,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || p(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || p(this.instance.schema, "startCollapsed")
    });
  }
  addEventListeners() {
    this.control.addPropertyBtn.addEventListener("click", () => {
      const e = this.control.addPropertyControl.input.value.split(" ").join("");
      if (e.length === 0 || d(this.instance.value[e]))
        return;
      const r = this.instance.getPropertySchema(e), n = this.instance.createChild(r, e);
      n.activate(), this.instance.setValue(this.instance.value), this.control.addPropertyControl.input.value = "";
      const a = this.control.ariaLive;
      a.innerHTML = "";
      const o = A(n.schema), l = d(o) ? o : e, c = this.theme.getAriaLiveMessage();
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
    const e = p(this.instance.schema, "enablePropertiesToggle");
    if (Ce(this.instance.jedi.options.enablePropertiesToggle, !0) || Ce(e, !0)) {
      const t = Object.keys(this.instance.properties), s = this.instance.children.map((n) => n.getKey());
      [...t, ...s].forEach((n) => {
        const a = this.instance.isRequired(n), o = this.instance.isDependentRequired(n), l = !a && !o, c = this.propertyActivators[n], h = this.control.ariaLive, u = this.instance.getPropertySchema(n), m = A(u), g = this.instance.path + this.instance.jedi.pathSeparator + n, x = P(g) + "-activator", L = d(m) ? m : n;
        if (l && !c) {
          const v = this.theme.getCheckboxControl({
            id: x,
            label: L,
            titleHidden: !1
          }), I = v.input;
          this.propertyActivators[n] = I, I.addEventListener("change", () => {
            h.innerHTML = "";
            const S = this.theme.getAriaLiveMessage();
            I.checked ? (this.instance.getChild(n) || this.instance.createChild(u, n), this.instance.getChild(n).activate(), S.textContent = L + " field was added to the form", h.appendChild(S)) : (this.instance.getChild(n).deactivate(), S.textContent = L + " field was removed from the form", h.appendChild(S)), this.control.propertiesContainer.close(), this.control.propertiesContainer.showModal();
          }), this.control.propertiesActivators.appendChild(v.container);
        }
        const y = this.propertyActivators[n];
        y && (y.disabled = this.disabled, y.checked = B(this.instance.getValue(), n));
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
class qt extends qe {
  static resolves(e) {
    return E(e) === "object" && d(p(e, "grid"));
  }
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    let e = this.theme.getRow();
    this.control.childrenSlot.appendChild(e), this.instance.children.forEach((t) => {
      if (t.isActive) {
        const s = p(t.schema, "grid"), r = s.columns || 12, n = s.offset || 0, a = this.theme.getCol(12, r, n);
        (s.newRow || !1) && (e = this.theme.getRow(), this.control.childrenSlot.appendChild(e)), e.appendChild(a), a.appendChild(t.ui.control.container), this.disabled || this.instance.isReadOnly() ? t.ui.disable() : t.ui.enable();
      }
    });
  }
}
class Bt extends qe {
  static resolves(e) {
    return E(e) === "object" && d(p(e, "nav"));
  }
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    const e = p(this.instance.schema, "nav"), t = this.theme.getRow(), s = d(e.cols) ? e.cols : 3, r = this.theme.getCol(12, s), n = this.theme.getCol(12, 12 - s), a = this.theme.getTabContent(), o = this.theme.getTabList({
      stacked: d(e.stacked) ? e.stacked : !1,
      type: d(e.variant) ? e.variant : "pils"
    });
    this.control.childrenSlot.appendChild(t), t.appendChild(r), t.appendChild(n), r.appendChild(o), n.appendChild(a), this.instance.children.forEach((l, c) => {
      if (l.isActive) {
        const h = c === this.activeTabIndex, u = P(l.path), m = A(l.schema), g = this.theme.getTab({
          title: d(m) ? m : l.getKey(),
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
class Ze extends K {
  static resolves(e) {
    return E(e) === "array";
  }
  build() {
    this.control = this.theme.getArrayControl({
      title: A(this.instance.schema) || this.instance.getKey(),
      titleHidden: p(this.instance.schema, "titleHidden"),
      id: P(this.instance.path),
      description: O(this.instance.schema),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || p(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || p(this.instance.schema, "startCollapsed")
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
    return w(e) ? e : [];
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = $e(this.instance.schema), t = ze(this.instance.schema);
    d(e) && e === this.instance.value.length && this.control.addBtn.setAttribute("disabled", ""), this.control.childrenSlot.innerHTML = "", this.instance.children.forEach((s) => {
      const r = Number(s.getKey()), n = this.theme.getDeleteItemBtn(), a = this.theme.getMoveUpItemBtn(), o = this.theme.getMoveDownItemBtn(), l = this.theme.getBtnGroup();
      s.ui.control.arrayActions.innerHTML = "", s.ui.control.arrayActions.appendChild(l), l.appendChild(n), l.appendChild(a), l.appendChild(o), this.control.childrenSlot.appendChild(s.ui.control.container), n.addEventListener("click", () => {
        const c = Number(s.path.split(this.instance.jedi.pathSeparator).pop());
        this.instance.deleteItem(c);
      }), a.addEventListener("click", () => {
        const c = r - 1;
        this.instance.move(r, c);
      }), o.addEventListener("click", () => {
        const c = r + 1;
        this.instance.move(r, c);
      }), this.disabled || this.instance.isReadOnly() ? s.ui.disable() : s.ui.enable(), d(t) && this.instance.value.length <= t && n.setAttribute("disabled", "");
    });
  }
}
class Nt extends Ze {
  static resolves(e) {
    return E(e) === "array" && d(p(e, "nav"));
  }
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
    const e = p(this.instance.schema, "nav"), t = this.theme.getRow(), s = d(e.cols) ? e.cols : 3, r = this.theme.getCol(12, s), n = this.theme.getCol(12, 12 - s), a = this.theme.getTabContent(), o = this.theme.getTabList({
      stacked: d(e.stacked) ? e.stacked : !1,
      type: d(e.type) ? e.type : "pils"
    });
    this.control.childrenSlot.appendChild(t), t.appendChild(r), t.appendChild(n), r.appendChild(o), n.appendChild(a), this.instance.children.forEach((l, c) => {
      const h = this.theme.getDeleteItemBtn(), u = this.theme.getMoveUpItemBtn(), m = this.theme.getMoveDownItemBtn();
      l.ui.control.arrayActions.innerHTML = "", l.ui.control.arrayActions.appendChild(h), l.ui.control.arrayActions.appendChild(u), l.ui.control.arrayActions.appendChild(m), this.control.childrenSlot.appendChild(l.ui.control.container);
      let g;
      const x = p(this.instance.schema, "itemTemplate");
      if (x) {
        const I = x, S = {
          i0: c,
          i1: c + 1,
          value: l.getValue()
        };
        g = C(I, S);
      } else {
        const I = A(l.schema);
        g = d(I) ? I + " " + (c + 1) : l.getKey();
      }
      h.addEventListener("click", () => {
        this.activeTabIndex = it(c - 1, 0, this.instance.value.length - 1), this.instance.deleteItem(c);
      }), u.addEventListener("click", () => {
        const I = c - 1;
        this.activeTabIndex = I, this.instance.move(c, I);
      }), m.addEventListener("click", () => {
        const I = c + 1;
        this.activeTabIndex = I, this.instance.move(c, I);
      });
      const L = c === this.activeTabIndex, y = P(l.path), v = this.theme.getTab({
        title: g,
        id: y,
        active: L
      });
      v.list.addEventListener("click", () => {
        this.activeTabIndex = c;
      }), this.theme.setTabPaneAttributes(l.ui.control.container, L, y), o.appendChild(v.list), a.appendChild(l.ui.control.container), this.disabled || this.instance.isReadOnly() ? l.ui.disable() : l.ui.enable(), c === 0 && u.setAttribute("disabled", ""), this.instance.value.length - 1 === c && m.setAttribute("disabled", "");
    });
  }
}
class Dt extends K {
  static resolves(e) {
    return E(e) === "null";
  }
  build() {
    this.control = this.theme.getNullControl({
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden") || p(this.instance.schema, "format") === "hidden",
      description: O(this.instance.schema)
    });
  }
  sanitize() {
    return null;
  }
}
class hs extends $ {
  static resolves(e) {
    return E(e) === "string" && d(p(e, "quill"));
  }
  build() {
    this.control = this.theme.getPlaceholderControl({
      id: P(this.instance.path),
      label: A(this.instance.schema) || this.instance.getKey(),
      labelIconClass: p(this.instance.schema, "labelIconClass"),
      titleHidden: p(this.instance.schema, "titleHidden"),
      description: O(this.instance.schema)
    });
    try {
      this.quill = new window.Quill(this.control.placeholder, p(this.instance.schema, "quill"));
    } catch (e) {
      console.error("Quill is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.quill.root.addEventListener("blur", () => {
      const e = this.quill.getText();
      e !== this.instance.getValue() && this.instance.setValue(e);
    });
  }
  refreshInteractiveElements() {
    this.disabled || this.readOnly ? this.quill.disable() : this.quill.enable();
  }
  refreshUI() {
    super.refreshUI(), this.quill.setText(this.instance.getValue());
  }
}
class us {
  constructor(e) {
    this.customEditors = e.customEditors ?? [], this.editors = [
      Pt,
      Ot,
      St,
      Tt,
      jt,
      kt,
      Mt,
      hs,
      Ve,
      Rt,
      Vt,
      Ht,
      qt,
      Bt,
      qe,
      Nt,
      Ze,
      Dt,
      Ge
    ];
  }
  getClass(e) {
    for (const t of this.customEditors)
      if (t.resolves(e))
        return t;
    for (const t of this.editors)
      if (t.resolves(e))
        return t;
    return null;
  }
}
class ps extends At {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   */
  constructor(e) {
    super(), this.options = Object.assign({
      container: null,
      iconLib: null,
      theme: null,
      refParser: null,
      enablePropertiesToggle: !1,
      enableCollapseToggle: !1,
      startCollapsed: !1,
      deactivateNonRequired: !1,
      schema: {},
      showErrors: "change",
      data: void 0,
      validateFormat: !1,
      mergeAllOf: !1,
      customEditors: []
    }, e), this.rootName = "#", this.pathSeparator = "/", this.instances = {}, this.root = null, this.validator = null, this.schema = {}, this.theme = null, this.uiResolver = null, this.refParser = this.options.refParser ? this.options.refParser : null, this.init(), this.bindEventListeners();
  }
  /**
   * Initializes instance properties
   */
  init() {
    if (this.uiResolver = new us({
      customEditors: this.options.customEditors
    }), this.theme = this.options.theme, d(this.options.iconLib))
      switch (this.options.iconLib) {
        case "glyphicons":
          this.theme.icons = rs;
          break;
        case "bootstrap-icons":
          this.theme.icons = as;
          break;
        case "fontawesome3":
          this.theme.icons = os;
          break;
        case "fontawesome4":
          this.theme.icons = ls;
          break;
        case "fontawesome5":
          this.theme.icons = cs;
          break;
        case "fontawesome6":
          this.theme.icons = ds;
          break;
      }
    this.schema = this.options.schema, this.validator = new Wt({ refParser: this.refParser, validateFormat: this.options.validateFormat }), this.root = this.createInstance({
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
    if (this.options.mergeAllOf || p(e.schema, "mergeAllOf")) {
      const c = xe(e.schema);
      d(c) && c.forEach((h) => {
        e.schema = D({}, e.schema, h);
      });
    }
    this.refParser && (e.schema = this.refParser.expand(e.schema, e.path));
    const s = E(e.schema), r = U(e.schema), n = N(e.schema), a = we(e.schema), o = Pe(e.schema), l = Ie(e.schema);
    if (d(n) || d(r) || s === "any" || w(s) || H(s))
      return new Xt(e);
    if (d(a) && (d(o) || d(l)))
      return new _t(e);
    if (s === "object")
      return new es(e);
    if (s === "array")
      return new ts(e);
    if (s === "string")
      return new ss(e);
    if (s === "number" || s === "integer")
      return new is(e);
    if (s === "boolean")
      return new Yt(e);
    if (s === "null")
      return new ns(e);
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
const T = ps;
class ms {
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
        const n = t ? `${t}/${s}` : `/${s}`;
        if (this.hasRef(e)) {
          const a = e.$ref;
          if (this.isExternalRef(a)) {
            const o = await this.load(a);
            this.refs[a] = o, await this.collectRefs(o, n);
          } else
            this.refs[a] = this.data[a] ?? null;
        }
        this.data[t] = e, await this.collectRefs(r, n);
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
      return delete t.$ref, this.expand(D({}, this.refs[s], t));
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
class Be {
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
   */
  getLegend(e) {
    const t = document.createElement("legend"), s = document.createElement("span");
    return t.classList.add("jedi-editor-legend"), s.classList.add("jedi-editor-legend-text"), t.setAttribute("aria-labelledby", "#legend-" + e.id), s.textContent = e.textContent, s.setAttribute("id", "#legend-" + e.id), t.appendChild(s), t;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLabel(e) {
    const t = document.createElement("label");
    t.setAttribute("for", e.for);
    const s = this.getIcon(e.labelIconClass), r = document.createElement("span");
    return r.textContent = e.text, e.visuallyHidden && this.visuallyHidden(t), t.classList.add("jedi-title"), t.appendChild(s), t.appendChild(r), { label: t, labelText: r, icon: s };
  }
  /**
   * Returns a icon element
   * @private
   */
  getIcon(e = "") {
    const t = document.createElement("i");
    let s = e.split(" ");
    return s = s.filter((r) => r.length > 0), s && s.forEach((r) => {
      t.classList.add(r);
    }), t;
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
      const r = this.getIcon(this.icons[e.icon]);
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
  getPlaceholderControl(e) {
    const t = document.createElement("div"), s = document.createElement("div"), r = this.getActionsSlot(), n = this.getArrayActionsSlot(), { label: a, labelText: o } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden,
      labelIconClass: e.labelIconClass
    }), l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    });
    return t.appendChild(a), t.appendChild(s), t.appendChild(c), t.appendChild(u), t.appendChild(r), r.appendChild(n), { container: t, placeholder: s, label: a, labelText: o, description: c, messages: u, actions: r, arrayActions: n };
  }
  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   * @private
   */
  getObjectControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = this.getCardBody(), a = this.getPropertiesAriaLive(), o = this.getDescription({
      textContent: e.description
    }), l = this.getMessagesSlot(), c = this.getChildrenSlot(), h = this.getPropertiesSlot({
      id: "properties-slot-" + e.id
    }), u = this.getPropertiesToggle({
      textContent: e.title + " properties",
      id: "properties-slot-toggle-" + e.id,
      icon: "properties",
      propertiesContainer: h
    }), m = "collapse-" + e.id, g = this.getCollapse({
      id: m,
      startCollapsed: e.startCollapsed
    }), x = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: m,
      collapse: g,
      startCollapsed: e.startCollapsed
    }), L = this.getPropertiesActivators(), y = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + e.id,
      label: "Property"
    }), v = this.getAddPropertyButton(), I = this.getFieldset(), S = this.getLegend({
      textContent: e.title,
      id: e.id
    });
    return v.classList.add("jedi-object-add"), t.appendChild(I), t.appendChild(h), I.appendChild(S), I.appendChild(g), g.appendChild(n), n.appendChild(o), n.appendChild(l), S.appendChild(s), s.appendChild(r), n.appendChild(c), e.addProperty && (h.appendChild(y.container), h.appendChild(v), h.appendChild(document.createElement("hr"))), e.enablePropertiesToggle && (s.appendChild(u), h.appendChild(a), h.appendChild(L)), e.enableCollapseToggle && s.appendChild(x), {
      container: t,
      collapse: g,
      collapseToggle: x,
      body: n,
      actions: s,
      messages: l,
      childrenSlot: c,
      propertiesToggle: u,
      propertiesContainer: h,
      addPropertyControl: y,
      addPropertyBtn: v,
      ariaLive: a,
      propertiesActivators: L,
      arrayActions: r
    };
  }
  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   * @private
   */
  getArrayControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = this.getCardBody(), a = this.getDescription({
      textContent: e.description
    }), o = this.getMessagesSlot(), l = this.getChildrenSlot(), c = this.getBtnGroup(), h = this.getArrayBtnAdd(), u = this.getFieldset(), m = this.getLegend({
      textContent: e.title,
      id: e.id
    }), g = "collapse-" + e.id, x = this.getCollapse({
      id: g,
      startCollapsed: e.startCollapsed
    }), L = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: g,
      collapse: x,
      startCollapsed: e.startCollapsed
    });
    return t.appendChild(u), u.appendChild(m), u.appendChild(x), x.appendChild(n), n.appendChild(a), n.appendChild(o), m.appendChild(s), s.appendChild(c), c.appendChild(h), s.appendChild(r), n.appendChild(l), e.enableCollapseToggle && s.appendChild(L), {
      container: t,
      collapseToggle: L,
      collapse: x,
      body: n,
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
    const t = document.createElement("div"), s = this.getCard(), r = this.getActionsSlot(), n = this.getArrayActionsSlot(), a = this.getCardHeader({
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
    return u.container.classList.add("jedi-switcher"), t.appendChild(l), t.appendChild(s), s.appendChild(a), s.appendChild(o), a.appendChild(r), r.appendChild(u.container), r.appendChild(n), o.appendChild(c), o.appendChild(h), {
      container: t,
      card: s,
      header: a,
      body: o,
      actions: r,
      messages: c,
      childrenSlot: h,
      switcher: u,
      arrayActions: n
    };
  }
  /**
   * Control for NullEditor
   * @private
   */
  getNullControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), { label: n, labelText: a } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden,
      labelIconClass: e.labelIconClass
    }), o = e.id + "-description", l = this.getDescription({
      textContent: e.description,
      id: o
    }), c = this.getMessagesSlot();
    return t.appendChild(n), t.appendChild(l), t.appendChild(c), t.appendChild(s), s.appendChild(r), { container: t, label: n, labelText: a, description: l, messages: c, actions: s, arrayActions: r };
  }
  /**
   * A Textarea
   * @private
   */
  getTextareaControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = document.createElement("textarea");
    n.setAttribute("id", e.id), n.style.width = "100%";
    const { label: a, labelText: o } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden
    }), l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), m = h + " " + l;
    return n.setAttribute("aria-describedby", m), t.appendChild(a), t.appendChild(n), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(r), { container: t, input: n, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: r };
  }
  /**
   * An Input control
   * @private
   */
  getInputControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = document.createElement("input");
    n.setAttribute("type", e.type), n.setAttribute("id", e.id), n.style.width = "100%";
    const { label: a, labelText: o } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden,
      labelIconClass: e.labelIconClass
    }), l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), m = h + " " + l;
    return n.setAttribute("aria-describedby", m), t.appendChild(a), t.appendChild(n), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(r), { container: t, input: n, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: r };
  }
  /**
   * A radio group control
   * @private
   */
  getRadiosControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = this.getFieldset(), a = this.getCardBody(), o = this.getLegend({
      textContent: e.label,
      id: e.id
    }), l = e.id + "-messages", c = this.getMessagesSlot({
      id: l
    }), h = e.id + "-description", u = this.getDescription({
      textContent: e.description,
      id: h
    });
    e.titleHidden && this.visuallyHidden(o);
    const m = [], g = [], x = [], L = [];
    return e.values.forEach((y, v) => {
      const I = document.createElement("div");
      m.push(I);
      const S = document.createElement("input");
      S.setAttribute("type", "radio"), S.setAttribute("id", e.id + "-" + v), S.setAttribute("value", y), g.push(S);
      const be = l + " " + h;
      S.setAttribute("aria-describedby", be);
      const Qe = document.createElement("label");
      Qe.setAttribute("for", e.id + "-" + v);
      const We = document.createElement("span");
      L.push(We), e.titles && e.titles[v] && (We.textContent = e.titles[v]), x.push(Qe);
    }), t.appendChild(n), t.appendChild(s), n.appendChild(o), n.appendChild(a), s.appendChild(r), m.forEach((y, v) => {
      a.appendChild(m[v]), y.appendChild(g[v]), y.appendChild(x[v]), x[v].appendChild(L[v]);
    }), n.appendChild(u), n.appendChild(c), {
      container: t,
      fieldset: n,
      legend: o,
      body: a,
      radios: g,
      labels: x,
      labelTexts: L,
      radioControls: m,
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
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = document.createElement("div"), a = document.createElement("input");
    a.setAttribute("type", "checkbox"), a.setAttribute("id", e.id);
    const { label: o, labelText: l } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden
    }), c = e.id + "-description", h = this.getDescription({
      textContent: e.description,
      id: c
    }), u = e.id + "-messages", m = this.getMessagesSlot({
      id: u
    }), g = u + " " + c;
    return a.setAttribute("aria-describedby", g), t.appendChild(n), t.appendChild(s), s.appendChild(r), n.appendChild(a), n.appendChild(o), n.appendChild(h), n.appendChild(m), { container: t, formGroup: n, input: a, label: o, labelText: l, description: h, messages: m, actions: s, arrayActions: r };
  }
  /**
   * A select control
   * @private
   */
  getSelectControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), r = this.getArrayActionsSlot(), n = document.createElement("select");
    n.setAttribute("id", e.id), e.values.forEach((g, x) => {
      const L = document.createElement("option");
      L.setAttribute("value", g), e.titles && e.titles[x] && (L.textContent = e.titles[x]), n.appendChild(L);
    });
    const { label: a, labelText: o } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden
    }), l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), m = h + " " + l;
    return n.setAttribute("aria-describedby", m), t.appendChild(a), t.appendChild(n), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(r), { container: t, input: n, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: r };
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
    const { label: r, labelText: n } = this.getLabel({
      for: e.id,
      text: e.label,
      visuallyHidden: e.titleHidden
    });
    return t.appendChild(r), t.appendChild(s), { container: t, input: s, label: r, labelText: n };
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
class fs extends Be {
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
  getLabel(e) {
    const t = super.getLabel(e);
    return t.icon.classList && t.icon.setAttribute("style", "margin-right: 5px;"), t;
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
    const t = super.getTextareaControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { body: s, radios: r, labels: n, labelTexts: a, radioControls: o, description: l, messages: c } = t;
    return o.forEach((h, u) => {
      h.classList.add("radio"), s.appendChild(o[u]), h.appendChild(n[u]), n[u].appendChild(r[u]), n[u].appendChild(a[u]);
    }), s.appendChild(l), s.appendChild(c), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: r, input: n, label: a, labelText: o, description: l, messages: c } = t;
    return r.classList.add("checkbox"), s.appendChild(r), r.appendChild(a), a.appendChild(n), a.appendChild(o), r.appendChild(l), r.appendChild(c), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
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
class gs extends Be {
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
  getLabel(e) {
    const t = super.getLabel(e);
    return t.icon.classList && t.icon.classList.add("mr-1"), t;
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
    const t = super.getTextareaControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("form-group"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { container: s, body: r, radios: n, labels: a, labelTexts: o, radioControls: l, description: c, messages: h } = t;
    return s.classList.add("form-group"), l.forEach((u, m) => {
      u.classList.add("form-check"), n[m].classList.add("form-check-input"), a[m].classList.add("form-check-label"), r.appendChild(l[m]), u.appendChild(n[m]), u.appendChild(a[m]), a[m].appendChild(o[m]);
    }), r.appendChild(c), r.appendChild(h), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: r, input: n, label: a, description: o, messages: l } = t;
    return r.classList.add("form-group"), r.classList.add("form-check"), n.classList.add("form-check-input"), a.classList.add("form-check-label"), s.appendChild(r), r.appendChild(n), r.appendChild(a), r.appendChild(o), r.appendChild(l), t;
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
class bs extends Be {
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
  getLabel(e) {
    const t = super.getLabel(e);
    return t.icon.classList && t.icon.classList.add("me-1"), t;
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
    const t = super.getTextareaControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("mb-3"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: r, label: n } = t;
    return s.classList.add("mb-3"), r.classList.add("form-control"), e.titleHidden && this.visuallyHidden(n), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { container: s, body: r, radios: n, labels: a, labelTexts: o, radioControls: l, description: c, messages: h } = t;
    return s.classList.add("mb-3"), l.forEach((u, m) => {
      u.classList.add("form-check"), n[m].classList.add("form-check-input"), a[m].classList.add("form-check-label"), r.appendChild(l[m]), u.appendChild(n[m]), u.appendChild(a[m]), a[m].appendChild(o[m]);
    }), r.appendChild(c), r.appendChild(h), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: r, input: n, label: a, description: o, messages: l } = t;
    return s.classList.add("mb-3"), r.classList.add("form-check"), n.classList.add("form-check-input"), a.classList.add("form-check-label"), e.titleHidden && this.visuallyHidden(a), s.appendChild(r), r.appendChild(n), r.appendChild(a), r.appendChild(o), r.appendChild(l), t;
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
const vs = {
  Schema: $t,
  Utils: Ft,
  EditorBoolean: Re,
  EditorBooleanEnumRadio: Pt,
  EditorBooleanEnumSelect: St,
  EditorBooleanCheckbox: Ot,
  EditorString: $,
  EditorStringEnumRadio: Tt,
  EditorStringEnumSelect: jt,
  EditorStringTextarea: kt,
  EditorStringAwesomplete: Mt,
  EditorStringInput: Ve,
  EditorNumber: He,
  EditorNumberEnumRadio: Rt,
  EditorNumberEnumSelect: Vt,
  EditorNumberInput: Ht,
  EditorObjectGrid: qt,
  EditorObjectNav: Bt,
  EditorObject: qe,
  EditorArrayNav: Nt,
  EditorArray: Ze,
  EditorMultiple: Ge,
  EditorNull: Dt,
  Theme: Be,
  ThemeBootstrap3: fs,
  ThemeBootstrap4: gs,
  ThemeBootstrap5: bs,
  RefParser: ms,
  Create: T
};
export {
  vs as default
};
