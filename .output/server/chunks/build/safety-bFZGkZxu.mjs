import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './Foot1-Cyne5fga.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = "" + buildAssetsURL("Firstaid.Cg0ZpFrE.png");
const _sfc_main = {
  components: {
    Foot1: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Foot1 = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "safety-container" }, _attrs))} data-v-9f3fc2fb><h1 class="title" data-v-9f3fc2fb>SAFETY</h1><p class="subtitle" data-v-9f3fc2fb>\u5FC3\u3082\u8EAB\u4F53\u3082\u5927\u5207\u306B\u3001\u5B89\u5FC3\u30FB\u5B89\u5168\u306B\u5FB9\u5E95\u914D\u616E\uFF01</p><div class="flex-container" data-v-9f3fc2fb><div class="hexagon" data-v-9f3fc2fb><h2 data-v-9f3fc2fb>\u521D\u5FC3\u8005Kids\u306E\u6C17\u6301\u3061\u3092\u5B88\u308B</h2><p data-v-9f3fc2fb>\u521D\u3081\u3066\u306E\u304A\u5B50\u69D8\u306B\u914D\u616E\u3057\u305F\u30AF\u30E9\u30B9\u306B\u653E\u308A\u8FBC\u3080\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p></div><div class="hexagon" data-v-9f3fc2fb><h2 data-v-9f3fc2fb>\u632B\u6298\u3055\u305B\u306A\u3044\u30AF\u30E9\u30B9\u69CB\u6210</h2><p data-v-9f3fc2fb>\u697D\u3057\u307F\u306A\u304C\u3089\u5B66\u3076\u3001\u305D\u308C\u304CEYS-Kids\u306EVision\u3067\u3059\u3002</p></div><div class="hexagon" data-v-9f3fc2fb><h2 data-v-9f3fc2fb>\u304A\u5B50\u69D8\u3092\u602A\u6211\u304B\u3089\u5B88\u308B</h2><p data-v-9f3fc2fb>\u5927\u5207\u306A\u304A\u5B50\u69D8\u306E\u8EAB\u4F53\u3092\u304A\u9810\u304B\u308A\u3059\u308B\u89B3\u70B9\u304B\u3089\u3001</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-9f3fc2fb><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-9f3fc2fb></div></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/usersvoice",
    class: "view-more-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`VIEW MORE \u2192`);
      } else {
        return [
          createTextVNode("VIEW MORE \u2192")
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const Safety = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9f3fc2fb"]]);

export { Safety as default };
//# sourceMappingURL=safety-bFZGkZxu.mjs.map
