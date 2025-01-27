import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useSSRContext, resolveComponent, withCtx, createTextVNode } from 'vue';
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

const _imports_0$1 = "" + buildAssetsURL("class.CWbr16YD.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="class-section" data-v-254d4285><h2 class="class-title" data-v-254d4285>CLASS</h2><p class="class-subtitle" data-v-254d4285>\u30AF\u30E9\u30B9\u7D39\u4ECB</p><p class="class-description" data-v-254d4285> ART&amp;DESIGN\u3092\u4E00\u751F\u61F8\u547D\u5B66\u3093\u3067\u3044\u308B<br data-v-254d4285> \u69D8\u5B50\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-254d4285><img${ssrRenderAttr("src", _imports_0$1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-254d4285></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/class.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-254d4285"]]);
const _imports_0 = "" + buildAssetsURL("community.DwxICiLi.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_FooterBanner = __nuxt_component_0;
  const _component_Class = __nuxt_component_1;
  const _component_Usersvoice = resolveComponent("Usersvoice");
  const _component_Events = resolveComponent("Events");
  _push(`<!--[--><div class="community-section" data-v-2c68fa16><div class="community-badge" data-v-2c68fa16>7</div><h2 class="community-title" data-v-2c68fa16>COMMUNITY</h2><p class="community-subtitle" data-v-2c68fa16>\u69D8\u3005\u306A\u30A4\u30D9\u30F3\u30C8\u3067\u3001<br data-v-2c68fa16> \u6559\u5BA4\u5916\u306E\u7E4B\u304C\u308A\u3082\uFF01</p><p class="community-description" data-v-2c68fa16> \u304A\u5B50\u69D8\u306E\u6559\u80B2\u306F\u3001\u5B66\u6821\u3001\u5BB6\u5EAD\u3001\u305D\u3057\u3066\u79C1\u305F\u3061\u6C11\u9593\u30B9\u30AF\u30FC\u30EB\u306E\u307F\u306A\u3089\u305A\u3001<br data-v-2c68fa16> \u8857\u5168\u4F53\u3068\u3057\u3066\u53D6\u308A\u7D44\u3080\u3053\u3068\u304C\u5FC5\u8981\u3060\u3068EYS-Kids\u306F\u8003\u3048\u307E\u3059\u3002 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-2c68fa16><img${ssrRenderAttr("src", _imports_0)} class="h-66 rounded-lg" data-v-2c68fa16></div>`);
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
  _push(ssrRenderComponent(_component_Class, null, null, _parent));
  _push(ssrRenderComponent(_component_Usersvoice, null, null, _parent));
  _push(ssrRenderComponent(_component_Events, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const community = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2c68fa16"]]);

export { community as default };
//# sourceMappingURL=community-CBqP7Oxz.mjs.map
