import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
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
  const _component_Pricing = resolveComponent("Pricing");
  const _component_Home = resolveComponent("Home");
  const _component_Safety = resolveComponent("Safety");
  const _component_Instructors = resolveComponent("Instructors");
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div data-v-104361aa>`);
  _push(ssrRenderComponent(_component_Pricing, null, null, _parent));
  _push(ssrRenderComponent(_component_Home, null, null, _parent));
  _push(ssrRenderComponent(_component_Safety, null, null, _parent));
  _push(ssrRenderComponent(_component_Instructors, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/pricing",
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lists.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lists = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-104361aa"]]);
export {
  lists as default
};
//# sourceMappingURL=lists-DdY5ZNT3.js.map
