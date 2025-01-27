import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4 } from "./last-BCTSG0mQ.js";
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
const _imports_0 = "" + __buildAssetsURL("explor.CzhTp1nE.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_FooterBanner = __nuxt_component_0;
  _push(`<!--[--><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f32de2be></div><div class="dance-section" data-v-f32de2be><h2 class="dance-title" data-v-f32de2be>東京都渋谷区でダンスを習おう！</h2><p class="dance-description" data-v-f32de2be> 東京の中でも屈指の繁華街、渋谷。<br data-v-f32de2be> ファッション、アート、サブカルチャーが詰まったこのエリアは<br data-v-f32de2be> 想像力が無限に膨らむ最高の場所でもあります。各地からのアクセスも抜群です。 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_1)} class="h-66 rounded-lg" data-v-f32de2be></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_2)} class="h-66 rounded-lg" data-v-f32de2be></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_3)} class="h-66 rounded-lg" data-v-f32de2be></div>`);
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
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_4)} class="h-66 rounded-lg" data-v-f32de2be></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/explor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const explor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f32de2be"]]);
export {
  explor as default
};
//# sourceMappingURL=explor-B9EUuH0B.js.map
