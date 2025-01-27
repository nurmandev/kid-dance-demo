import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { V as Vision, _ as __nuxt_component_0$1, a as _imports_0$1 } from './vision-BbNw5Qol.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { C as Curriculum, _ as _imports_1$1, a as _imports_3$1 } from './curriculum-mmcVNEac.mjs';
import { _ as _imports_2$1 } from './vid-CYsZIFkh.mjs';
import News from './news-D3nLugIv.mjs';
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

const _sfc_main$2 = {
  components: { VisionCard: __nuxt_component_0$1 }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VisionCard = __nuxt_component_0$1;
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vision-container" }, _attrs))} data-v-d238772a><h1 class="title" data-v-d238772a>1 VISION</h1><p class="subtitle" data-v-d238772a>EYS-Kids\u306F\u3001\u30B9\u30C8\u30EA\u30FC\u30C8\u30C0\u30F3\u30B9\u3092\u30D1\u30D5\u30A9\u30FC\u30DE\u30FC\u80B2\u6210\u3067\u306F\u306A\u304F\u3001&quot;\u30C0\u30F3\u30B9\u3092\u901A\u3058\u305F\u6559\u80B2&quot;\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002</p><div class="vision-content" data-v-d238772a>`);
  _push(ssrRenderComponent(_component_VisionCard, {
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
  _push(ssrRenderComponent(_component_VisionCard, {
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
  _push(ssrRenderComponent(_component_VisionCard, {
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
  _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="EYS-Kids Growth" class="reason-img" data-v-d238772a></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vision.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d238772a"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "curriculum-container" }, _attrs))} data-v-d85c3e78><h1 class="title" data-v-d85c3e78>2 CURRICULUM</h1><p class="subtitle" data-v-d85c3e78>\u65B0\u3057\u3044\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u30D7\u30ED\u30B0\u30E9\u30E0\u3068\u3001\u767A\u5C55\u306E\u305F\u3081\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3002 \u6700\u521D\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u8E0F\u307F\u51FA\u3059\u305F\u3081\u306B\u3001\u3042\u306A\u305F\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002</p><img${ssrRenderAttr("src", _imports_1$1)} alt="Hexagon Image" data-v-d85c3e78><p data-v-d85c3e78>\u4E01\u5BE7\u306A\u5B66\u7FD2\u5BFE\u8C61\u30FB\u30EC\u30D9\u30EB\u5225\u306E\u30AF\u30E9\u30B9\u5206\u3051\u3067\u304A\u5B50\u69D8\u306E\u69D8\u3005\u306A\u6210\u9577\u3092\u304A\u624B\u4F1D\u3044\u3057\u307E\u3059\u3002</p><img${ssrRenderAttr("src", _imports_1$1)} alt="Hexagon Image" data-v-d85c3e78><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-d85c3e78><img${ssrRenderAttr("src", _imports_2$1)} class="h-66 rounded-lg" data-v-d85c3e78></div><p data-v-d85c3e78></p>`);
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
  _push(`<img${ssrRenderAttr("src", _imports_3$1)} alt="EYS-Kids Growth" class="reason-img" data-v-d85c3e78></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Curriculum.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d85c3e78"]]);
const _imports_0 = "" + buildAssetsURL("interior.ByuW742e.png");
const _imports_1 = "" + buildAssetsURL("ved.DLVgNhSa.png");
const _imports_2 = "" + buildAssetsURL("loge.DNDsfBrS.png");
const _imports_3 = "" + buildAssetsURL("jed.Bd5SpkvC.png");
const _imports_4 = "" + buildAssetsURL("curricle.DZxxjLqH.png");
const _imports_5 = "" + buildAssetsURL("dist.DzD8Lt1N.png");
const _imports_6 = "" + buildAssetsURL("calender.DhhVC5t7.png");
const _sfc_main = {
  name: "Exploration",
  components: {
    FooterBanner: __nuxt_component_0,
    News,
    Curriculum,
    Vision
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Explore = resolveComponent("Explore");
  const _component_FooterBanner = __nuxt_component_0;
  const _component_News = resolveComponent("News");
  const _component_Vision = __nuxt_component_1;
  const _component_Curriculum = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0f162734>`);
  _push(ssrRenderComponent(_component_Explore, null, null, _parent));
  _push(`<div class="text-section" data-v-0f162734><p class="subheading" data-v-0f162734>\u3053\u3060\u308F\u308A\u629C\u3044\u305F\u30C7\u30B6\u30A4\u30F3</p><h2 class="main-heading" data-v-0f162734>\u60C5\u64CD\u6559\u80B2\u306B\u3075\u3055\u308F\u3057\u3044<br data-v-0f162734>\u6D17\u7DF4\u3055\u308C\u305F\u7A7A\u9593\u306E\u4EE3\u5B98\u5C71\u6559\u5BA4</h2><p class="description" data-v-0f162734> \u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u8857\u4E26\u307F\u306E\u3088\u3046\u306A\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u30ED\u30D3\u30FC\u3084\u3001\u5317\u6B27\u88FD\u306E\u7167\u660E\u30FB\u30A4\u30F3\u30C6\u30EA\u30A2\u3002<br data-v-0f162734> \u5B89\u3089\u304E\u306E\u89B3\u8449\u690D\u7269\u3001\u307B\u306E\u304B\u306B\u9999\u308B\u30A2\u30ED\u30DE\u306A\u3069\u7D30\u90E8\u306B\u307E\u3067\u3053\u3060\u308F\u3063\u305F\u6E29\u3082\u308A\u3042\u308B\u7A7A\u9593\u304C \u304A\u5B50\u69D8\u3060\u3051\u3067\u306A\u304F\u4ED8\u304D\u6DFB\u3044\u306E\u3054\u4E21\u89AA\u3082\u304A\u3082\u3066\u306A\u3057\u3057\u307E\u3059\u3002 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="text-section" data-v-0f162734><h2 class="main-heading" data-v-0f162734>\u696D\u754C\u6700\u5148\u7AEF\u306E<br data-v-0f162734>\u6700\u65B0\u8A2D\u5099\u3068\u6700\u65B0\u6A5F\u6750</h2><p class="description" data-v-0f162734> \u4EE3\u5B98\u5C71\u30B9\u30BF\u30B8\u30AA\u306F\u30A4\u30F3\u30C6\u30EA\u30A2\u3060\u3051\u3067\u306A\u304F\u3001\u304A\u5B50\u69D8\u306E\u5B89\u5168\u3092\u7B2C\u4E00\u306B\u8003\u3048\u305F\u8A2D\u8A08\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002<br data-v-0f162734> \u6E05\u6F54\u611F\u306E\u3042\u308B\u30B9\u30BF\u30B8\u30AA\u3067\u5B58\u5206\u306B\u30EC\u30C3\u30B9\u30F3\u3092\u304A\u697D\u3057\u307F\u304F\u3060\u3055\u3044\u3002 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="floor-map-section" data-v-0f162734><h2 class="title" data-v-0f162734>\u30D5\u30ED\u30A2\u30DE\u30C3\u30D7</h2><p class="description" data-v-0f162734> \u30D5\u30ED\u30A2\u30DE\u30C3\u30D7\u4E2D\u306E\u5404\u30EB\u30FC\u30E0\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068<br data-v-0f162734> \u5185\u90E8\u306E\u69D8\u5B50\u3092\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059\u3002 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_2)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_4)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`<div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_5)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_6)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div>`);
  _push(ssrRenderComponent(_component_Vision, null, null, _parent));
  _push(ssrRenderComponent(_component_Curriculum, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/exploration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const exploration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0f162734"]]);

export { exploration as default };
//# sourceMappingURL=exploration-DQT4crZM.mjs.map
