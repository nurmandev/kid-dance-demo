import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$3 = {
  methods: {
    navigateTo(type) {
      if (type === "entrance") {
        this.$router.push("/entrance-info");
      } else if (type === "lesson") {
        this.$router.push("/lesson-info");
      } else if (type === "transfer") {
        this.$router.push("/transfer-info");
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing" }, _attrs))} data-v-fe866a8c><h2 data-v-fe866a8c>料金プラン</h2><div class="price-container" data-v-fe866a8c><div class="price-item" data-v-fe866a8c><h3 data-v-fe866a8c>入学金</h3><p data-v-fe866a8c>¥17,000</p></div><div class="price-item" data-v-fe866a8c><h3 data-v-fe866a8c>レッスン料</h3><p data-v-fe866a8c>¥10,500 / 月</p></div><div class="price-item" data-v-fe866a8c><h3 data-v-fe866a8c>入学移行手数料</h3><p data-v-fe866a8c>¥0</p></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-fe866a8c"]]);
const _sfc_main$2 = {
  data() {
    return {
      currentDate: /* @__PURE__ */ new Date()
    };
  },
  computed: {
    monthYear() {
      return this.currentDate.toLocaleString("default", { month: "long", year: "numeric" });
    },
    days() {
      return ["日", "月", "火", "水", "木", "金", "土"];
    },
    monthDates() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const lastDay = new Date(year, month + 1, 0);
      const dates = [];
      for (let i = 1; i <= lastDay.getDate(); i++) {
        dates.push(i);
      }
      return dates;
    }
  },
  methods: {
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "lesson-schedule" }, _attrs))} data-v-e846f59f><h2 data-v-e846f59f>レッスンスケジュール</h2><div class="calendar" data-v-e846f59f><div class="calendar-header" data-v-e846f59f><button data-v-e846f59f>◀</button><h3 data-v-e846f59f>${ssrInterpolate($options.monthYear)}</h3><button data-v-e846f59f>▶</button></div><div class="days" data-v-e846f59f><!--[-->`);
  ssrRenderList($options.days, (day) => {
    _push(`<div class="day" data-v-e846f59f>${ssrInterpolate(day)}</div>`);
  });
  _push(`<!--]--></div><div class="dates" data-v-e846f59f><!--[-->`);
  ssrRenderList($options.monthDates, (date) => {
    _push(`<div class="date" data-v-e846f59f>${ssrInterpolate(date)}</div>`);
  });
  _push(`<!--]--></div></div><div class="additional-info" data-v-e846f59f><p class="bold-text" data-v-e846f59f>いつでもどこでも予約できる！</p><p data-v-e846f59f>補講はスマホでサクサク予約</p><p data-v-e846f59f>レッスン予約は会員サイト「SecondCommunity(SC)」より「日付」「インストラクター」「コース」どれからでも予約できて便利！</p></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LessonSchedule.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e846f59f"]]);
const _imports_0 = "" + __buildAssetsURL("Foot4.UHyLmfGR.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "reason" }, _attrs))} data-v-21442367><h2 data-v-21442367>EYS-Kidsを選ぶ理由</h2><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids Growth" class="reason-img" data-v-21442367></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Foot4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-21442367"]]);
const _sfc_main = {
  components: {
    PricingComponent: __nuxt_component_0,
    LessonSchedule: __nuxt_component_1,
    Foot4: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PricingComponent = __nuxt_component_0;
  const _component_LessonSchedule = __nuxt_component_1;
  const _component_Foot4 = __nuxt_component_2;
  const _component_Freetrial = resolveComponent("Freetrial");
  const _component_News = resolveComponent("News");
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-79b0d620>`);
  _push(ssrRenderComponent(_component_PricingComponent, null, null, _parent));
  _push(ssrRenderComponent(_component_LessonSchedule, null, null, _parent));
  _push(ssrRenderComponent(_component_Foot4, null, null, _parent));
  _push(ssrRenderComponent(_component_Freetrial, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`<section class="pricing-system" data-v-79b0d620><h2 data-v-79b0d620>料金システム</h2><p data-v-79b0d620>「固定制＋無料補講」をご用意。</p><p data-v-79b0d620>固定の教室・決まった日程・時間に受講します。</p><div class="comments" data-v-79b0d620><div class="comment" data-v-79b0d620><p data-v-79b0d620>レッスンの日が予防接種や検診日と重なってしまった</p></div><div class="comment" data-v-79b0d620><p data-v-79b0d620>発熱や体調不良でレッスン日に行けなくなってしまった</p></div><div class="comment" data-v-79b0d620><p data-v-79b0d620>固定制でも月謝が無駄になりません。振替レッスンが可能です！</p></div></div></section>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/home",
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
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-79b0d620"]]);
export {
  pricing as default
};
//# sourceMappingURL=pricing-RgISrAOt.js.map
