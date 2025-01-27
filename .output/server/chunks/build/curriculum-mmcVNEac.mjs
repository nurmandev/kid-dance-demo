import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_2 } from './vid-CYsZIFkh.mjs';
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

const _imports_1$1 = "" + buildAssetsURL("haxagon.Bx_0Jscp.png");
const _imports_1 = "" + buildAssetsURL("hexa.FHCPpnEQ.png");
const _imports_3 = "" + buildAssetsURL("Foot3.BXCIGDGS.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_FootBanner = resolveComponent("FootBanner");
  _push(`<!--[--><section class="curriculum-container" data-v-81bbe48f><h1 class="title" data-v-81bbe48f>2 CURRICULUM</h1><p class="subtitle" data-v-81bbe48f>\u65B0\u3057\u3044\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u30D7\u30ED\u30B0\u30E9\u30E0\u3068\u3001\u767A\u5C55\u306E\u305F\u3081\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3002 \u6700\u521D\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u8E0F\u307F\u51FA\u3059\u305F\u3081\u306B\u3001\u3042\u306A\u305F\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002</p><img${ssrRenderAttr("src", _imports_1$1)} alt="Hexagon Image" data-v-81bbe48f><p data-v-81bbe48f>\u4E01\u5BE7\u306A\u5B66\u7FD2\u5BFE\u8C61\u30FB\u30EC\u30D9\u30EB\u5225\u306E\u30AF\u30E9\u30B9\u5206\u3051\u3067\u304A\u5B50\u69D8\u306E\u69D8\u3005\u306A\u6210\u9577\u3092\u304A\u624B\u4F1D\u3044\u3057\u307E\u3059\u3002</p><img${ssrRenderAttr("src", _imports_1)} alt="Hexagon Image" data-v-81bbe48f><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-81bbe48f><img${ssrRenderAttr("src", _imports_2)} class="h-66 rounded-lg" data-v-81bbe48f></div><p data-v-81bbe48f></p>`);
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
  _push(`<img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids Growth" class="reason-img" data-v-81bbe48f></section>`);
  _push(ssrRenderComponent(_component_FootBanner, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/curriculum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const Curriculum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81bbe48f"]]);
const curriculum = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Curriculum
}, Symbol.toStringTag, { value: "Module" }));

export { Curriculum as C, _imports_1$1 as _, _imports_3 as a, curriculum as c };
//# sourceMappingURL=curriculum-mmcVNEac.mjs.map
