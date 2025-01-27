import { _ as __nuxt_component_0 } from "./Foot1-Cyne5fga.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("Firstaid.Cg0ZpFrE.png");
const _sfc_main = {
  components: {
    Foot1: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Foot1 = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "safety-container" }, _attrs))} data-v-9f3fc2fb><h1 class="title" data-v-9f3fc2fb>SAFETY</h1><p class="subtitle" data-v-9f3fc2fb>心も身体も大切に、安心・安全に徹底配慮！</p><div class="flex-container" data-v-9f3fc2fb><div class="hexagon" data-v-9f3fc2fb><h2 data-v-9f3fc2fb>初心者Kidsの気持ちを守る</h2><p data-v-9f3fc2fb>初めてのお子様に配慮したクラスに放り込むことはありません。</p></div><div class="hexagon" data-v-9f3fc2fb><h2 data-v-9f3fc2fb>挫折させないクラス構成</h2><p data-v-9f3fc2fb>楽しみながら学ぶ、それがEYS-KidsのVisionです。</p></div><div class="hexagon" data-v-9f3fc2fb><h2 data-v-9f3fc2fb>お子様を怪我から守る</h2><p data-v-9f3fc2fb>大切なお子様の身体をお預かりする観点から、</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-9f3fc2fb><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-9f3fc2fb></div></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/usersvoice",
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
  _push(ssrRenderComponent(_component_Foot1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/safety.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Safety = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9f3fc2fb"]]);
export {
  Safety as default
};
//# sourceMappingURL=safety-bFZGkZxu.js.map
