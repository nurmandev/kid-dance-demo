import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
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
const _imports_0$1 = "" + __buildAssetsURL("class.CWbr16YD.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="class-section" data-v-254d4285><h2 class="class-title" data-v-254d4285>CLASS</h2><p class="class-subtitle" data-v-254d4285>クラス紹介</p><p class="class-description" data-v-254d4285> ART&amp;DESIGNを一生懸命学んでいる<br data-v-254d4285> 様子をご紹介します </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-254d4285><img${ssrRenderAttr("src", _imports_0$1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-254d4285></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/class.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-254d4285"]]);
const _imports_0 = "" + __buildAssetsURL("community.DwxICiLi.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_FooterBanner = __nuxt_component_0;
  const _component_Class = __nuxt_component_1;
  const _component_Usersvoice = resolveComponent("Usersvoice");
  const _component_Events = resolveComponent("Events");
  _push(`<!--[--><div class="community-section" data-v-2c68fa16><div class="community-badge" data-v-2c68fa16>7</div><h2 class="community-title" data-v-2c68fa16>COMMUNITY</h2><p class="community-subtitle" data-v-2c68fa16>様々なイベントで、<br data-v-2c68fa16> 教室外の繋がりも！</p><p class="community-description" data-v-2c68fa16> お子様の教育は、学校、家庭、そして私たち民間スクールのみならず、<br data-v-2c68fa16> 街全体として取り組むことが必要だとEYS-Kidsは考えます。 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-2c68fa16><img${ssrRenderAttr("src", _imports_0)} class="h-66 rounded-lg" data-v-2c68fa16></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/pricing",
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const community = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2c68fa16"]]);
export {
  community as default
};
//# sourceMappingURL=community-CBqP7Oxz.js.map
