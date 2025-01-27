import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("Panel.1DwSo9zB.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f2a9ce31><div class="absolute inset-0 bg-black bg-opacity-40" data-v-f2a9ce31></div><div class="relative z-10 text-center text-white px-6" data-v-f2a9ce31><div class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-2 rounded-lg inline-block" data-v-f2a9ce31> 4 KARTE </div><h1 class="text-6xl font-bold mt-4" data-v-f2a9ce31>\u5145\u5B9F\u30AB\u30EB\u30C6\u3067 \u30E2\u30C1\u30D9\u30FC\u30B7\u30E7\u30F3\u30A2\u30C3\u30D7\uFF01</h1><p class="text-lg mt-4" data-v-f2a9ce31>\u30EC\u30C3\u30B9\u30F3\u5F8C\u306F\u6BCE\u56DE\u3001\u8B1B\u5E2B\u304B\u3089\u30AB\u30EB\u30C6\u304C\u5C4A\u304D\u307E\u3059</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f2a9ce31"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=HeroSection-C9gAHokn.mjs.map
