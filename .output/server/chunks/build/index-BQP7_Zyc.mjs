import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './HeroSection-C9gAHokn.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Foot1-Cyne5fga.mjs';
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

const _imports_0$4 = "" + buildAssetsURL("reason-chart.Bz9bp68r.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "reason" }, _attrs))} data-v-922efbbb><h2 data-v-922efbbb>EYS-Kids\u3092\u9078\u3076\u7406\u7531</h2><img${ssrRenderAttr("src", _imports_0$4)} alt="EYS-Kids Growth" class="reason-img" data-v-922efbbb></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReasonSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-922efbbb"]]);
const _imports_0$3 = "" + buildAssetsURL("stem-info.CDucVADz.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "stem" }, _attrs))} data-v-ee3a966b><h2 data-v-ee3a966b>STEM\u6559\u80B2 + \u82B8\u8853</h2><p data-v-ee3a966b>\u79D1\u5B66\u30FB\u6280\u8853\u30FB\u5DE5\u5B66\u30FB\u6570\u5B66\u30FB\u82B8\u8853\u30FB\u8A9E\u5B66\u306E6\u5206\u91CE\u3092\u7D71\u5408</p><img${ssrRenderAttr("src", _imports_0$3)} alt="STEM Education" class="stem-img" data-v-ee3a966b></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StemSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-ee3a966b"]]);
const _imports_0$2 = "" + buildAssetsURL("lesson-banner.B-4SoniK.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "lesson" }, _attrs))} data-v-df901d99><h2 data-v-df901d99>\u7121\u6599\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3</h2><img${ssrRenderAttr("src", _imports_0$2)} alt="Free Lesson" class="lesson-img" data-v-df901d99></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LessonSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-df901d99"]]);
const _imports_0$1 = "" + buildAssetsURL("About.D9nhn_CP.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-3464b318><h2 data-v-3464b318>ABOUT EYS-Kids</h2><p data-v-3464b318>EYS-Kids\u30C0\u30F3\u30B9\u30A2\u30AB\u30C7\u30DF\u30FC\u306F3\u6B73\u304B\u3089\u5B66\u3079\u308B\u672C\u683C\u30B9\u30AF\u30FC\u30EB</p><img${ssrRenderAttr("src", _imports_0$1)} alt="Free Lesson" class="lesson-img" data-v-3464b318></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-3464b318"]]);
const _imports_0 = "" + buildAssetsURL("Lesson.BOusgddB.png");
const _sfc_main$1 = {
  data() {
    return {
      reasons: [
        "VISION - \u30D0\u30E9\u30F3\u30B9\u3088\u304F\u80B2\u3064",
        "CURRICULUM - \u5B50\u4F9B\u306E\u6210\u9577\u306B\u5408\u308F\u305B\u305F\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0",
        "\u81EA\u7531\u6027 - \u81EA\u7531\u306B\u9078\u3079\u308B",
        "PRICE/SYSTEM - \u5B89\u5FC3\u306E\u6599\u91D1\u4F53\u7CFB",
        "INSTRUCTORS - \u30D7\u30ED\u8B1B\u5E2B\u304C\u6307\u5C0E",
        "ACCESS - \u901A\u3044\u3084\u3059\u3044",
        "EVENT - \u767A\u8868\u4F1A\u3084\u30A4\u30D9\u30F3\u30C8\u591A\u6570"
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "reasons" }, _attrs))} data-v-34273e4a><h2 data-v-34273e4a>7\u3064\u306E\u7406\u7531</h2><img${ssrRenderAttr("src", _imports_0)} alt="Free Lesson" class="lesson-img" data-v-34273e4a><ul data-v-34273e4a><!--[-->`);
  ssrRenderList($data.reasons, (reason, index2) => {
    _push(`<li data-v-34273e4a>${ssrInterpolate(reason)}</li>`);
  });
  _push(`<!--]--></ul></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReasonsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-34273e4a"]]);
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/vision");
    }
  },
  components: {
    HeroSection: __nuxt_component_0,
    ReasonSection: __nuxt_component_1,
    StemSection: __nuxt_component_2,
    LessonSection: __nuxt_component_3,
    Foot: __nuxt_component_0$1,
    AboutSection: __nuxt_component_5,
    ReasonsList: __nuxt_component_6
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_ReasonSection = __nuxt_component_1;
  const _component_StemSection = __nuxt_component_2;
  const _component_LessonSection = __nuxt_component_3;
  const _component_Foot1 = __nuxt_component_0$1;
  const _component_AboutSection = __nuxt_component_5;
  const _component_ReasonsList = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e316ca7a>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ReasonSection, null, null, _parent));
  _push(ssrRenderComponent(_component_StemSection, null, null, _parent));
  _push(ssrRenderComponent(_component_LessonSection, null, null, _parent));
  _push(ssrRenderComponent(_component_Foot1, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ReasonsList, null, null, _parent));
  _push(`<div class="view-more" data-v-e316ca7a><button data-v-e316ca7a>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e316ca7a"]]);

export { index as default };
//# sourceMappingURL=index-BQP7_Zyc.mjs.map
