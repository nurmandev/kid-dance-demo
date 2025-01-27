import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("View.lGiTkl0c.png");
const _imports_1 = "" + __buildAssetsURL("User.Crtf6Er4.png");
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-voice" }, _attrs))} data-v-68e72fcc><h1 class="title" data-v-68e72fcc>USER&#39;S VOICE</h1><p class="subtitle" data-v-68e72fcc>お子様を通わせている親御様に本音を伺いました！</p><div class="speech-bubble" data-v-68e72fcc><p data-v-68e72fcc>代官山教室のダンスレッスンはどうですか？</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-68e72fcc><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-68e72fcc></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-68e72fcc><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-68e72fcc></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-68e72fcc><button data-v-68e72fcc>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/usersvoice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usersvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-68e72fcc"]]);
export {
  usersvoice as default
};
//# sourceMappingURL=usersvoice-C1ttQmnc.js.map
