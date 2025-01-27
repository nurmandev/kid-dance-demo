import { a as buildAssetsURL } from '../routes/renderer.mjs';
import Access from './access-DZD-n1ls.mjs';
import Safety from './safety-bFZGkZxu.mjs';
import Freetrial from './freetrial-BKZtcKVn.mjs';
import News from './news-D3nLugIv.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
import './Foot1-Cyne5fga.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("list.Cz6q4aYn.png");
const _sfc_main = {
  name: "Listss",
  components: {
    Access,
    Safety,
    Freetrial,
    News
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Access = resolveComponent("Access");
  const _component_Safety = resolveComponent("Safety");
  const _component_Freetrial = resolveComponent("Freetrial");
  const _component_News = resolveComponent("News");
  _push(`<!--[--><div class="bg-grapageient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg"></div><div>`);
  _push(ssrRenderComponent(_component_Access, null, null, _parent));
  _push(ssrRenderComponent(_component_Safety, null, null, _parent));
  _push(ssrRenderComponent(_component_Freetrial, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/listss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const listss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { listss as default };
//# sourceMappingURL=listss-C74C_J-e.mjs.map
