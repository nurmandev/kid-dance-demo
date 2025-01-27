import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

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
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fd9c6e7a"]]);
const _imports_0 = "" + buildAssetsURL("Foot2.C4Fg8Ly1.png");
const _sfc_main = {
  components: { visionCard: __nuxt_component_0 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_visionCard = __nuxt_component_0;
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vision-container" }, _attrs))} data-v-286bc8e4><h1 class="title" data-v-286bc8e4>1 VISION</h1><p class="subtitle" data-v-286bc8e4>EYS-Kids\u306F\u3001\u30B9\u30C8\u30EA\u30FC\u30C8\u30C0\u30F3\u30B9\u3092\u30D1\u30D5\u30A9\u30FC\u30DE\u30FC\u80B2\u6210\u3067\u306F\u306A\u304F\u3001&quot;\u30C0\u30F3\u30B9\u3092\u901A\u3058\u305F\u6559\u80B2&quot;\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002</p><div class="vision-content" data-v-286bc8e4>`);
  _push(ssrRenderComponent(_component_visionCard, {
    title: "\u30DE\u30CA\u30FC\u3092\u8EAB\u306B\u3064\u3051\u308B",
    color: "green"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u30EC\u30C3\u30B9\u30F3\u3092\u901A\u3058\u3066\u3001\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3084\u5354\u8ABF\u6027\u304C\u5411\u4E0A\u3057\u307E\u3059\u3002 `);
      } else {
        return [
          createTextVNode(" \u30EC\u30C3\u30B9\u30F3\u3092\u901A\u3058\u3066\u3001\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3084\u5354\u8ABF\u6027\u304C\u5411\u4E0A\u3057\u307E\u3059\u3002 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_visionCard, {
    title: "\u81EA\u4E3B\u6027\u3092\u80B2\u3093\u3058\u308B",
    color: "red"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u767A\u8868\u4F1A\u306E\u4F5C\u54C1\u3084\u3001\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u4F5C\u6210\u3092\u81EA\u5206\u305F\u3061\u3067\u8003\u3048\u3001\u5B9F\u8DF5\u3059\u308B\u6A5F\u4F1A\u304C\u591A\u304F\u3042\u308A\u307E\u3059\u3002 `);
      } else {
        return [
          createTextVNode(" \u767A\u8868\u4F1A\u306E\u4F5C\u54C1\u3084\u3001\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u4F5C\u6210\u3092\u81EA\u5206\u305F\u3061\u3067\u8003\u3048\u3001\u5B9F\u8DF5\u3059\u308B\u6A5F\u4F1A\u304C\u591A\u304F\u3042\u308A\u307E\u3059\u3002 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_visionCard, {
    title: "\u30C1\u30FC\u30E0\u30EF\u30FC\u30AF\u3068\u76EE\u6A19\u9054\u6210\u529B\u3092\u80B2\u3080",
    color: "blue"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u767A\u8868\u4F1A\u306E\u4F5C\u54C1\u4F5C\u308A\u3084\u30A4\u30D9\u30F3\u30C8\u53C2\u52A0\u3092\u901A\u3057\u3066\u3001\u30C1\u30FC\u30E0\u306E\u5927\u5207\u3055\u3092\u5B66\u3073\u307E\u3059\u3002 `);
      } else {
        return [
          createTextVNode(" \u767A\u8868\u4F1A\u306E\u4F5C\u54C1\u4F5C\u308A\u3084\u30A4\u30D9\u30F3\u30C8\u53C2\u52A0\u3092\u901A\u3057\u3066\u3001\u30C1\u30FC\u30E0\u306E\u5927\u5207\u3055\u3092\u5B66\u3073\u307E\u3059\u3002 ")
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
        _push2(`VIEW MORE \u2192`);
      } else {
        return [
          createTextVNode("VIEW MORE \u2192")
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const Vision = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-286bc8e4"]]);
const vision = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vision
}, Symbol.toStringTag, { value: "Module" }));

export { Vision as V, __nuxt_component_0 as _, _imports_0 as a, vision as v };
//# sourceMappingURL=vision-BbNw5Qol.mjs.map
