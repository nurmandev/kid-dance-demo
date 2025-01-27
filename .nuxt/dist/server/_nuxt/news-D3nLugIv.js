import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("News.CCWk5AhG.png");
const _imports_1 = "" + __buildAssetsURL("New.Dw_e4sld.png");
const _sfc_main = {
  name: "News",
  components: {
    FooterBanner: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FooterBanner = __nuxt_component_0;
  _push(`<!--[--><div class="news-container" data-v-b55126df><h1 class="news-title" data-v-b55126df>NEWS</h1><p class="news-subtitle" data-v-b55126df>新着ニュース</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-b55126df><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-b55126df></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-b55126df><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-b55126df></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b55126df"]]);
export {
  News as default
};
//# sourceMappingURL=news-D3nLugIv.js.map
