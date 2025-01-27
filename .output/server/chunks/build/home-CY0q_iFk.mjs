import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './HeroSection-C9gAHokn.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { _ as _export_sfc, e as __nuxt_component_0$1 } from './server.mjs';
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

const _imports_0$1 = "" + buildAssetsURL("dance-feature1.D1XF28Hb.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="EYS-Kids" class="h-66 rounded-lg"></div><div class="bg-white rounded-lg shadow-lg p-6 w-full mx-4 xl:text-center md:text-left relative"><h2 class="text-gray-500 font-medium mb-4"> \u3082\u3046\u3059\u3050\u30B4\u30FC\u30EB\u30C7\u30F3\u30A6\u30A3\u30FC\u30AF\uFF01\u65B0\u3057\u3044\u3053\u3068\u3092\u306F\u3058\u3081\u3088\u3046\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3 </h2><h2 class="text-red-500 text-4xl md:text-5xl font-bold mb-4"> \u6708\u4F1A\u8CBB <span class="text-6xl">2\u304B\u6708\u7121\u6599</span></h2><div class="flex flex-col md:flex-row items-center justify-between mb-4"><div class="text-blue-700 font-semibold text-lg md:text-xl"><span class="bg-gray-200 rounded-full px-2 py-1 text-black"> 12/24(\u65E5) 23:59 </span></div><div class="text-purple-500">\u6B8B\u308A14\u65E5 12\u6642\u9593 59\u5206</div></div><div class="bg-red-100 text-red-600 rounded-full px-4 py-2 mt-4 md:mt-0"><p>\u304A\u5F97\u306A\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3</p></div><div class="flex flex-col md:flex-row items-center justify-between"><p class="text-lg mt-4 text-gray-700"> \u3054\u4E0D\u660E\u70B9\u304C\u3042\u308C\u3070\u304A\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002 </p><p class="font-bold text-2xl">\u{1F4DE}0120-978-900</p></div><a href="#" class="bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-red-600 mt-4 md:mt-0"> \u7533\u3057\u8FBC\u3080 </a></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("Karte-info.CRxTfnbH.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-screen h-screen flex flex-col items-center justify-center text-center bg-white" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Karte Info" class="w-full h-screen object-cover"><div class="w-full max-w-4xl px-6 py-12"><h2 class="text-4xl font-bold text-gray-900">\u300C\u30AB\u30EB\u30C6\u300D\u3063\u3066\u4F55\uFF1F</h2><p class="text-lg text-gray-700 mt-4"> EYS-Kids\u72EC\u81EA\u306E\u30EC\u30C3\u30B9\u30F3\u30B7\u30B9\u30C6\u30E0\u3002<br> \u81EA\u5206\u306E\u30EC\u30C3\u30B9\u30F3\u3092\u6BCE\u56DE\u53EF\u8996\u5316\u3067\u304D\u3001<br> \u81EA\u8EAB\u306E\u30B9\u30AD\u30EB\u30A2\u30C3\u30D7\u304C\u78BA\u5B9F\u306B\u5B9F\u611F\u3067\u304D\u307E\u3059\uFF01 </p></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Karteinfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const KarteInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/instructors");
    }
  },
  components: {
    HeroSection: __nuxt_component_0,
    KarteInfo,
    FeaturesGrid: __nuxt_component_1,
    FooterBanner: __nuxt_component_0$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_KarteInfo = resolveComponent("KarteInfo");
  const _component_FeaturesGrid = __nuxt_component_1;
  const _component_FooterBanner = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-a2cac120>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_KarteInfo, null, null, _parent));
  _push(ssrRenderComponent(_component_FeaturesGrid, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-a2cac120><button data-v-a2cac120>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2cac120"]]);

export { home as default };
//# sourceMappingURL=home-CY0q_iFk.mjs.map
