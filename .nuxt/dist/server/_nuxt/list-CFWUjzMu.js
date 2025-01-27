import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Activity = resolveComponent("Activity");
  const _component_Ranking = resolveComponent("Ranking");
  const _component_Freetrial = resolveComponent("Freetrial");
  const _component_News = resolveComponent("News");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Activity, null, null, _parent));
  _push(ssrRenderComponent(_component_Ranking, null, null, _parent));
  _push(ssrRenderComponent(_component_Freetrial, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  list as default
};
//# sourceMappingURL=list-CFWUjzMu.js.map
