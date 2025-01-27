import Access from "./access-DZD-n1ls.js";
import Safety from "./safety-bFZGkZxu.js";
import Freetrial from "./freetrial-BKZtcKVn.js";
import News from "./news-D3nLugIv.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "./Foot1-Cyne5fga.js";
const _imports_0 = "" + __buildAssetsURL("list.Cz6q4aYn.png");
const _sfc_main = {
  name: "Listss",
  components: {
    Access,
    Safety,
    Freetrial,
    News
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Access = resolveComponent("Access");
  const _component_Safety = resolveComponent("Safety");
  const _component_Freetrial = resolveComponent("Freetrial");
  const _component_News = resolveComponent("News");
  _push(`<!--[--><div class="bg-grapageient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg"></div><div>`);
  _push(ssrRenderComponent(_component_Access, null, null, _parent));
  _push(ssrRenderComponent(_component_Safety, null, null, _parent));
  _push(ssrRenderComponent(_component_Freetrial, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/listss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const listss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  listss as default
};
//# sourceMappingURL=listss-C74C_J-e.js.map
