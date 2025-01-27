import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = {
  props: {
    title: String,
    color: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vision-card", $props.color]
  }, _attrs))} data-v-fd9c6e7a><h2 class="vision-title" data-v-fd9c6e7a>${ssrInterpolate($props.title)}</h2><p class="vision-text" data-v-fd9c6e7a>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visionCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fd9c6e7a"]]);
const _imports_0 = "" + __buildAssetsURL("Foot2.C4Fg8Ly1.png");
const _sfc_main = {
  components: { visionCard: __nuxt_component_0 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_visionCard = __nuxt_component_0;
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vision-container" }, _attrs))} data-v-286bc8e4><h1 class="title" data-v-286bc8e4>1 VISION</h1><p class="subtitle" data-v-286bc8e4>EYS-Kidsは、ストリートダンスをパフォーマー育成ではなく、&quot;ダンスを通じた教育&quot;と考えています。</p><div class="vision-content" data-v-286bc8e4>`);
  _push(ssrRenderComponent(_component_visionCard, {
    title: "マナーを身につける",
    color: "green"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` レッスンを通じて、コミュニケーションや協調性が向上します。 `);
      } else {
        return [
          createTextVNode(" レッスンを通じて、コミュニケーションや協調性が向上します。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_visionCard, {
    title: "自主性を育んじる",
    color: "red"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 発表会の作品や、ユニフォーム作成を自分たちで考え、実践する機会が多くあります。 `);
      } else {
        return [
          createTextVNode(" 発表会の作品や、ユニフォーム作成を自分たちで考え、実践する機会が多くあります。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_visionCard, {
    title: "チームワークと目標達成力を育む",
    color: "blue"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 発表会の作品作りやイベント参加を通して、チームの大切さを学びます。 `);
      } else {
        return [
          createTextVNode(" 発表会の作品作りやイベント参加を通して、チームの大切さを学びます。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/curriculum",
    class: "view-more-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`VIEW MORE →`);
      } else {
        return [
          createTextVNode("VIEW MORE →")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids Growth" class="reason-img" data-v-286bc8e4></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vision.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Vision = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-286bc8e4"]]);
const vision = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vision
}, Symbol.toStringTag, { value: "Module" }));
export {
  Vision as V,
  __nuxt_component_0 as _,
  _imports_0 as a,
  vision as v
};
//# sourceMappingURL=vision-BbNw5Qol.js.map
