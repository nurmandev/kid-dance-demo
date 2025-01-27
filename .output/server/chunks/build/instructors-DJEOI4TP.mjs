import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  props: {
    instructor: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewMore() {
      alert(`Viewing more details for ${this.instructor.name}`);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "instructor-card" }, _attrs))} data-v-29912031><h3 data-v-29912031>${ssrInterpolate($props.instructor.name)}</h3><p data-v-29912031>${ssrInterpolate($props.instructor.description)}</p><button data-v-29912031>View More</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstructorCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-29912031"]]);
const _sfc_main$1 = {
  props: {
    instructor: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewMore() {
      alert(`Viewing more details for ${this.instructor.name}`);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "instructor-card" }, _attrs))} data-v-6d63736f><h3 data-v-6d63736f>${ssrInterpolate($props.instructor.name)}</h3><p data-v-6d63736f>${ssrInterpolate($props.instructor.description)}</p><button data-v-6d63736f>View More</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/InstructorCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const InstructorCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6d63736f"]]);
const _imports_0 = "" + buildAssetsURL("inst.C4_r2bk_.png");
const _imports_1 = "" + buildAssetsURL("lesson-booking.Duei5jmP.png");
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/access");
    }
  },
  components: {
    InstructorCard
  },
  data() {
    return {
      instructors: [
        { id: 1, name: "Instructor 1", description: "Description for Instructor 1" },
        { id: 2, name: "Instructor 2", description: "Description for Instructor 2" }
        // Add more instructors as needed
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InstructorCard = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "instructors" }, _attrs))} data-v-af032809><div class="hero-content" data-v-af032809><h1 data-v-af032809>\u30D1\u30D5\u30A9\u30FC\u30DE\u30FC\u3067\u306F\u306A\u304F\u3001\u6559\u80B2\u8005\u3068\u3057\u3066\u306E\u30C0\u30F3\u30B5\u30FC\u3092\u63C3\u3048\u3066\u3044\u307E\u3059\u3002</h1><p data-v-af032809>\u6210\u9577\u8457\u3057\u3044Kids\u306E\u30B9\u30AD\u30EB\uFF06\u500B\u6027\u3092\u6700\u5927\u9650\u5F15\u304D\u51FA\u3059\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u3092\u3054\u7D39\u4ECB\u3002</p><button data-v-af032809>\u304A\u5B50\u69D8\u306B\u30D4\u30C3\u30BF\u30EA\u306E\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u304C\u898B\u3064\u304B\u308A\u307E\u3059\uFF01</button></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-af032809><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-af032809></div><div class="instructor-list" data-v-af032809><!--[-->`);
  ssrRenderList($data.instructors, (instructor) => {
    _push(ssrRenderComponent(_component_InstructorCard, {
      key: instructor.id,
      instructor
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="additional-info" data-v-af032809><h2 data-v-af032809>\u304A\u5B50\u3055\u307E\u306E\u6210\u9577\u306B\u8CAC\u4EFB\u3092\u6301\u3064\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306F\u307F\u3093\u306A\u5B50\u4F9B\u304C\u5927\u597D\u304D</h2><p data-v-af032809>\u512A\u308C\u305F\u30C0\u30F3\u30B5\u30FC\u3067\u3042\u308B\u3053\u3068\u3001\u8B1B\u5E2B\u3068\u3057\u3066\u512A\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u306F\u5225\u306E\u3082\u306E\u3067\u3059\u304C\u3001EYS-Kids\u306B\u5728\u7C4D\u3057\u3066\u3044\u308B\u30B9\u30BF\u30C3\u30D5\u306F\u3001\u8B1B\u5E2B\u3068\u3057\u3066\u3082\u30C0\u30F3\u30B5\u30FC\u3068\u3057\u3066\u3082\u3001\u81EA\u4FE1\u3092\u3082\u3063\u3066\u52E7\u3081\u3089\u308C\u308B\u9AD8\u3044\u30EC\u30D9\u30EB\u3067\u3059\u3002</p></div><div class="booking-info" data-v-af032809><div class="card red" data-v-af032809><h3 data-v-af032809>\u8B1B\u5E2B\u306E\u6E80\u8DB3\u5EA6\u3092\u30C1\u30A7\u30C3\u30AF\uFF01</h3><p data-v-af032809>EYS\u3067\u306F\u4F1A\u54E1\u69D8\u304B\u3089\u5BC4\u305B\u3089\u308C\u305F\u8B1B\u5E2B\u306E\u6E80\u8DB3\u5EA6\u3092\u516C\u958B\u3057\u3066\u3044\u307E\u3059\u3002</p></div><div class="card orange" data-v-af032809><h3 data-v-af032809>ENJOY\u4FDD\u8A3C\u3067\u5B89\u5FC3\uFF01</h3><p data-v-af032809>\u6E80\u8DB3\u3067\u304D\u306A\u304B\u3063\u305F\u30EC\u30C3\u30B9\u30F3\u306F\u3001\u5225\u306E\u8B1B\u5E2B\u3067\u7121\u6599\u3067\u30EC\u30C3\u30B9\u30F3\u3092\u3084\u308A\u76F4\u3057\u307E\u3059\u3002</p></div></div><div class="lesson-booking" data-v-af032809><img${ssrRenderAttr("src", _imports_1)} alt="Lesson Booking" data-v-af032809><h3 data-v-af032809>\u30EC\u30C3\u30B9\u30F3\u3092\u4E88\u7D04\u3057\u3088\u3046</h3><p data-v-af032809>\u5E0C\u671B\u306E\u6761\u4EF6\u3092\u9078\u3093\u3067\u3001\u30EC\u30C3\u30B9\u30F3\u3092\u4E88\u7D04\u3057\u307E\u3057\u3087\u3046\u3002</p></div><div class="comment" data-v-af032809><p data-v-af032809>\u5148\u751F\u305F\u3061\u3082\u6700\u521D\u306F\u521D\u5FC3\u8005\u3002\u3060\u304B\u3089\u3053\u305D\u3001EYS-Kids\u306E\u30EC\u30C3\u30B9\u30F3\u3082\u3001\u6C17\u6301\u3061\u3092\u5927\u4E8B\u306B\u89AA\u8EAB\u306B\u6559\u3048\u3089\u308C\u307E\u3059\u3002</p></div><div class="kite-comment" data-v-af032809><div class="kite" data-v-af032809><p data-v-af032809>\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306E\u5148\u751F\u306F\u3001\u307F\u3093\u306A\u5B50\u4F9B\u304C\u5927\u597D\u304D\uFF01</p></div></div><div class="final-comment" data-v-af032809><p data-v-af032809>\u512A\u308C\u305F\u30C0\u30F3\u30B5\u30FC\u3067\u3042\u308B\u3053\u3068\u3001\u8B1B\u5E2B\u3068\u3057\u3066\u512A\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u306F\u5225\u306E\u554F\u984C\u3067\u3059\u304C\u3001EYS-Kids\u306B\u5728\u7C4D\u3057\u3066\u3044\u308B\u30B9\u30BF\u30C3\u30D5\u306F\u3001\u8B1B\u5E2B\u3068\u3057\u3066\u3082\u30C0\u30F3\u30B5\u30FC\u3068\u3057\u3066\u3082\u3001\u81EA\u4FE1\u3092\u3082\u3063\u3066\u9032\u3081\u3089\u308C\u308B\u9AD8\u3044\u30EC\u30D9\u30EB\u306E\u65B9\u3070\u304B\u308A\u3067\u3059\u3002</p></div><div class="view-more" data-v-af032809><button data-v-af032809>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/instructors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const Instructors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-af032809"]]);

export { Instructors as default };
//# sourceMappingURL=instructors-DJEOI4TP.mjs.map
