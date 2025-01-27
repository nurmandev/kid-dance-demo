import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/safety");
    }
  },
  name: "AccessComplete"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "access" }, _attrs))} data-v-2308a467><h1 data-v-2308a467>ACCESS</h1><p data-v-2308a467>\u99C5\u30C1\u30AB\u3067\u901A\u3044\u3084\u3059\u3044\u3001\u5168\u56FD31\u30B9\u30BF\u30B8\u30AA\u5C55\u958B\u4E2D\uFF01</p><p data-v-2308a467>\u304A\u5B50\u69D8\u306E\u30D9\u30B9\u30C8\u306A\u30EC\u30C3\u30B9\u30F3\u306E\u305F\u3081\u306B\u3001\u3053\u3060\u308F\u308A\u629C\u3044\u305F\u30B9\u30BF\u30B8\u30AA\u3092\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002</p><div class="pickup-section" data-v-2308a467><h2 data-v-2308a467>PICK UP</h2><button data-v-2308a467>\u9280\u5EA7\u30B9\u30BF\u30B8\u30AA</button></div><div class="info-container" data-v-2308a467><div class="top-logo" data-v-2308a467><span data-v-2308a467>\u65B0\u898F OPEN</span></div><div class="info-content" data-v-2308a467><p data-v-2308a467>dummy \xD7\u5B9F\u969B\u306E\u30B9\u30BF\u30B8\u30AA\u5199\u771F\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044</p></div></div><div class="additional-info" data-v-2308a467><div class="info-box" data-v-2308a467><p data-v-2308a467>dummy \u203B\u5B9F\u969B\u306E\u30B9\u30BF\u30B8\u30AA\u5199\u771F\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044</p></div></div><div class="flex-navigation" data-v-2308a467><h2 data-v-2308a467>All studio</h2><div class="studio-buttons" data-v-2308a467><button class="studio-button" data-v-2308a467>\u5317\u6D77\u9053\u30FB\u6771\u5317 (1)</button><button class="studio-button" data-v-2308a467>\u6771\u4EAC (11)</button><button class="studio-button" data-v-2308a467>\u95A2\u6771(\u6771\u4EAC\u4EE5\u5916) (4)</button><button class="studio-button" data-v-2308a467>\u5317\u9678\u30FB\u4E2D\u90E8 (3)</button><button class="studio-button" data-v-2308a467>\u95A2\u897F (5)</button></div><div class="flex-navigation" data-v-2308a467><h2 data-v-2308a467>All studio</h2><div class="studio-buttons" data-v-2308a467><button class="studio-button" data-v-2308a467>\u5317\u6D77\u9053 (1)</button><button class="studio-button" data-v-2308a467>\u6771\u4EAC\u90FD (11)</button><button class="studio-button" data-v-2308a467>\u795E\u5948\u5DDD\u770C (2)</button><button class="studio-button" data-v-2308a467>\u57FC\u7389\u770C (1)</button><button class="studio-button" data-v-2308a467>\u5343\u8449\u770C (1)</button><button class="studio-button" data-v-2308a467>\u65B0\u6F5F\u770C (1)</button><button class="studio-button" data-v-2308a467>\u611B\u77E5\u770C (1)</button><button class="studio-button" data-v-2308a467>\u5927\u962A\u5E9C (4)</button><button class="studio-button" data-v-2308a467>\u4EAC\u90FD\u5E9C (1)</button></div><button class="studio-button" data-v-2308a467>\u5317\u6D77\u9053\u30FB\u6771\u5317\u306E\u6559\u5BA4</button></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt \u9280\u5EA7</h3><p data-v-2308a467>\u6771\u4EAC\u90FD\u4E2D\u592E\u533A\u9280\u5EA71\u4E01\u76EE8-19\u30AE\u30E3\u30E9\u30EA\u30FC\u9280\u5EA7 6F</p><p data-v-2308a467>\u6771\u4EAC\u30E1\u30C8\u30ED\u9280\u5EA7\u4E00\u4E01\u76EE\u99C5 9\u756A\u51FA\u53E3\u3088\u308A\u5F92\u6B691\u5206</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>\u6771\u4EAC\u306E\u6559\u5BA4</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt \u9280\u5EA7</h3><p data-v-2308a467>\u6771\u4EAC\u90FD\u4E2D\u592E\u533A\u9280\u5EA71\u4E01\u76EE8-19\u30AE\u30E3\u30E9\u30EA\u30FC\u9280\u5EA7 6F</p><p data-v-2308a467>\u6771\u4EAC\u30E1\u30C8\u30ED\u9280\u5EA7\u4E00\u4E01\u76EE\u99C5 9\u756A\u51FA\u53E3\u3088\u308A\u5F92\u6B691\u5206</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>\u95A2\u6771(\u6771\u4EAC\u4EE5\u5916)\u306E\u6559\u5BA4</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt \u9280\u5EA7</h3><p data-v-2308a467>\u6771\u4EAC\u90FD\u4E2D\u592E\u533A\u9280\u5EA71\u4E01\u76EE8-19\u30AE\u30E3\u30E9\u30EA\u30FC\u9280\u5EA7 6F</p><p data-v-2308a467>\u6771\u4EAC\u30E1\u30C8\u30ED\u9280\u5EA7\u4E00\u4E01\u76EE\u99C5 9\u756A\u51FA\u53E3\u3088\u308A\u5F92\u6B691\u5206</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>\u5317\u9678\u30FB\u4E2D\u90E8\u306E\u6559\u5BA4</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt \u9280\u5EA7</h3><p data-v-2308a467>\u6771\u4EAC\u90FD\u4E2D\u592E\u533A\u9280\u5EA71\u4E01\u76EE8-19\u30AE\u30E3\u30E9\u30EA\u30FC\u9280\u5EA7 6F</p><p data-v-2308a467>\u6771\u4EAC\u30E1\u30C8\u30ED\u9280\u5EA7\u4E00\u4E01\u76EE\u99C5 9\u756A\u51FA\u53E3\u3088\u308A\u5F92\u6B691\u5206</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>\u6771\u4EAC\u306E\u6559\u5BA4</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt \u9280\u5EA7</h3><p data-v-2308a467>\u6771\u4EAC\u90FD\u4E2D\u592E\u533A\u9280\u5EA71\u4E01\u76EE8-19\u30AE\u30E3\u30E9\u30EA\u30FC\u9280\u5EA7 6F</p><p data-v-2308a467>\u6771\u4EAC\u30E1\u30C8\u30ED\u9280\u5EA7\u4E00\u4E01\u76EE\u99C5 9\u756A\u51FA\u53E3\u3088\u308A\u5F92\u6B691\u5206</p></div></div><div class="view-more" data-v-2308a467><button data-v-2308a467>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const Access = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2308a467"]]);

export { Access as default };
//# sourceMappingURL=access-DZD-n1ls.mjs.map
