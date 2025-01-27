import { _ as __nuxt_component_0 } from "./HeroSection-C9gAHokn.js";
import { ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, mergeProps, resolveComponent } from "vue";
import { _ as _export_sfc, e as __nuxt_component_0$1 } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _imports_0$1 = "" + __buildAssetsURL("dance-feature1.D1XF28Hb.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="EYS-Kids" class="h-66 rounded-lg"></div><div class="bg-white rounded-lg shadow-lg p-6 w-full mx-4 xl:text-center md:text-left relative"><h2 class="text-gray-500 font-medium mb-4"> もうすぐゴールデンウィーク！新しいことをはじめようキャンペーン </h2><h2 class="text-red-500 text-4xl md:text-5xl font-bold mb-4"> 月会費 <span class="text-6xl">2か月無料</span></h2><div class="flex flex-col md:flex-row items-center justify-between mb-4"><div class="text-blue-700 font-semibold text-lg md:text-xl"><span class="bg-gray-200 rounded-full px-2 py-1 text-black"> 12/24(日) 23:59 </span></div><div class="text-purple-500">残り14日 12時間 59分</div></div><div class="bg-red-100 text-red-600 rounded-full px-4 py-2 mt-4 md:mt-0"><p>お得な体験レッスン</p></div><div class="flex flex-col md:flex-row items-center justify-between"><p class="text-lg mt-4 text-gray-700"> ご不明点があればお気軽にご相談ください。 </p><p class="font-bold text-2xl">📞0120-978-900</p></div><a href="#" class="bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-red-600 mt-4 md:mt-0"> 申し込む </a></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + __buildAssetsURL("Karte-info.CRxTfnbH.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-screen h-screen flex flex-col items-center justify-center text-center bg-white" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Karte Info" class="w-full h-screen object-cover"><div class="w-full max-w-4xl px-6 py-12"><h2 class="text-4xl font-bold text-gray-900">「カルテ」って何？</h2><p class="text-lg text-gray-700 mt-4"> EYS-Kids独自のレッスンシステム。<br> 自分のレッスンを毎回可視化でき、<br> 自身のスキルアップが確実に実感できます！ </p></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Karteinfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2cac120"]]);
export {
  home as default
};
//# sourceMappingURL=home-CY0q_iFk.js.map
