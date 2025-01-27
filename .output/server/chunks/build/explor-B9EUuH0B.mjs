import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4 } from './last-BCTSG0mQ.mjs';
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

const _imports_0 = "" + buildAssetsURL("explor.CzhTp1nE.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_FooterBanner = __nuxt_component_0;
  _push(`<!--[--><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f32de2be></div><div class="dance-section" data-v-f32de2be><h2 class="dance-title" data-v-f32de2be>\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\u3067\u30C0\u30F3\u30B9\u3092\u7FD2\u304A\u3046\uFF01</h2><p class="dance-description" data-v-f32de2be> \u6771\u4EAC\u306E\u4E2D\u3067\u3082\u5C48\u6307\u306E\u7E41\u83EF\u8857\u3001\u6E0B\u8C37\u3002<br data-v-f32de2be> \u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u3001\u30A2\u30FC\u30C8\u3001\u30B5\u30D6\u30AB\u30EB\u30C1\u30E3\u30FC\u304C\u8A70\u307E\u3063\u305F\u3053\u306E\u30A8\u30EA\u30A2\u306F<br data-v-f32de2be> \u60F3\u50CF\u529B\u304C\u7121\u9650\u306B\u81A8\u3089\u3080\u6700\u9AD8\u306E\u5834\u6240\u3067\u3082\u3042\u308A\u307E\u3059\u3002\u5404\u5730\u304B\u3089\u306E\u30A2\u30AF\u30BB\u30B9\u3082\u629C\u7FA4\u3067\u3059\u3002 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_1)} class="h-66 rounded-lg" data-v-f32de2be></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_2)} class="h-66 rounded-lg" data-v-f32de2be></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_3)} class="h-66 rounded-lg" data-v-f32de2be></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/pricing",
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
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f32de2be><img${ssrRenderAttr("src", _imports_4)} class="h-66 rounded-lg" data-v-f32de2be></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/explor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const explor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f32de2be"]]);

export { explor as default };
//# sourceMappingURL=explor-B9EUuH0B.mjs.map
