import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("View.lGiTkl0c.png");
const _imports_1 = "" + buildAssetsURL("User.Crtf6Er4.png");
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/events");
    }
  },
  name: "UserVoice",
  components: {
    FooterBanner: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FooterBanner = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-voice" }, _attrs))} data-v-68e72fcc><h1 class="title" data-v-68e72fcc>USER&#39;S VOICE</h1><p class="subtitle" data-v-68e72fcc>\u304A\u5B50\u69D8\u3092\u901A\u308F\u305B\u3066\u3044\u308B\u89AA\u5FA1\u69D8\u306B\u672C\u97F3\u3092\u4F3A\u3044\u307E\u3057\u305F\uFF01</p><div class="speech-bubble" data-v-68e72fcc><p data-v-68e72fcc>\u4EE3\u5B98\u5C71\u6559\u5BA4\u306E\u30C0\u30F3\u30B9\u30EC\u30C3\u30B9\u30F3\u306F\u3069\u3046\u3067\u3059\u304B\uFF1F</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-68e72fcc><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-68e72fcc></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-68e72fcc><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-68e72fcc></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-68e72fcc><button data-v-68e72fcc>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/usersvoice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const usersvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-68e72fcc"]]);

export { usersvoice as default };
//# sourceMappingURL=usersvoice-C1ttQmnc.mjs.map
