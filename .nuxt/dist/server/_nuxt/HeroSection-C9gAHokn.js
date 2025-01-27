import { ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("Panel.1DwSo9zB.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f2a9ce31><div class="absolute inset-0 bg-black bg-opacity-40" data-v-f2a9ce31></div><div class="relative z-10 text-center text-white px-6" data-v-f2a9ce31><div class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-2 rounded-lg inline-block" data-v-f2a9ce31> 4 KARTE </div><h1 class="text-6xl font-bold mt-4" data-v-f2a9ce31>充実カルテで モチベーションアップ！</h1><p class="text-lg mt-4" data-v-f2a9ce31>レッスン後は毎回、講師からカルテが届きます</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f2a9ce31"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=HeroSection-C9gAHokn.js.map
