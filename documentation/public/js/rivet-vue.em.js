const { openBlock: c, createElementBlock: l, normalizeClass: a, renderSlot: r } = { ...Vue };
const _ = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
}, p = {
  __name: "SimpleBox",
  props: {
    class: String
  },
  setup(e) {
    const o = e;
    return (t, s) => (c(), l("div", {
      class: a(["classy", o.class])
    }, [
      r(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, i = /* @__PURE__ */ _(p, [["__scopeId", "data-v-96b2165a"]]), m = {
  install: (e, o) => {
    e.component("SimpleBox", i);
  }
};
export {
  m as default
};
