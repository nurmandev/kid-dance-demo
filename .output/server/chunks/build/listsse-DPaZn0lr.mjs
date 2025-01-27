import Instructors from './instructors-DJEOI4TP.mjs';
import Freetrial from './freetrial-BKZtcKVn.mjs';
import News from './news-D3nLugIv.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = {
  name: "List",
  components: {
    Instructors,
    Freetrial,
    News
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Instructors = resolveComponent("Instructors");
  const _component_Freetrial = resolveComponent("Freetrial");
  const _component_News = resolveComponent("News");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Instructors, null, null, _parent));
  _push(ssrRenderComponent(_component_Freetrial, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/listsse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const listsse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { listsse as default };
//# sourceMappingURL=listsse-DPaZn0lr.mjs.map
