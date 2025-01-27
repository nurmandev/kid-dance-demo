import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InstructorCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6d63736f"]]);
const _imports_0 = "" + __buildAssetsURL("inst.C4_r2bk_.png");
const _imports_1 = "" + __buildAssetsURL("lesson-booking.Duei5jmP.png");
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "instructors" }, _attrs))} data-v-af032809><div class="hero-content" data-v-af032809><h1 data-v-af032809>パフォーマーではなく、教育者としてのダンサーを揃えています。</h1><p data-v-af032809>成長著しいKidsのスキル＆個性を最大限引き出すインストラクターをご紹介。</p><button data-v-af032809>お子様にピッタリのインストラクターが見つかります！</button></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-af032809><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-af032809></div><div class="instructor-list" data-v-af032809><!--[-->`);
  ssrRenderList($data.instructors, (instructor) => {
    _push(ssrRenderComponent(_component_InstructorCard, {
      key: instructor.id,
      instructor
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="additional-info" data-v-af032809><h2 data-v-af032809>お子さまの成長に責任を持つインストラクターはみんな子供が大好き</h2><p data-v-af032809>優れたダンサーであること、講師として優れているかどうかは別のものですが、EYS-Kidsに在籍しているスタッフは、講師としてもダンサーとしても、自信をもって勧められる高いレベルです。</p></div><div class="booking-info" data-v-af032809><div class="card red" data-v-af032809><h3 data-v-af032809>講師の満足度をチェック！</h3><p data-v-af032809>EYSでは会員様から寄せられた講師の満足度を公開しています。</p></div><div class="card orange" data-v-af032809><h3 data-v-af032809>ENJOY保証で安心！</h3><p data-v-af032809>満足できなかったレッスンは、別の講師で無料でレッスンをやり直します。</p></div></div><div class="lesson-booking" data-v-af032809><img${ssrRenderAttr("src", _imports_1)} alt="Lesson Booking" data-v-af032809><h3 data-v-af032809>レッスンを予約しよう</h3><p data-v-af032809>希望の条件を選んで、レッスンを予約しましょう。</p></div><div class="comment" data-v-af032809><p data-v-af032809>先生たちも最初は初心者。だからこそ、EYS-Kidsのレッスンも、気持ちを大事に親身に教えられます。</p></div><div class="kite-comment" data-v-af032809><div class="kite" data-v-af032809><p data-v-af032809>インストラクターの先生は、みんな子供が大好き！</p></div></div><div class="final-comment" data-v-af032809><p data-v-af032809>優れたダンサーであること、講師として優れているかどうかは別の問題ですが、EYS-Kidsに在籍しているスタッフは、講師としてもダンサーとしても、自信をもって進められる高いレベルの方ばかりです。</p></div><div class="view-more" data-v-af032809><button data-v-af032809>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/instructors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Instructors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-af032809"]]);
export {
  Instructors as default
};
//# sourceMappingURL=instructors-DJEOI4TP.js.map
