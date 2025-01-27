import { e as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import Freetrial from "./freetrial-BKZtcKVn.js";
import News from "./news-D3nLugIv.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "activity",
  __ssrInlineRender: true,
  setup(__props) {
    const qaList = ref([
      {
        question: "楽器の経験がないのですが、レッスンについていけますか？",
        answer: "大丈夫です。大人になってから楽器を始められた方が大半です。"
      },
      {
        question: "入会はいつ頃まで途中入会できますか？",
        answer: "年度途中でもご入会いただけます。"
      },
      {
        question: "入会はいつ頃まで途中入会できますか？",
        answer: "年度途中でもご入会いただけます。"
      },
      {
        question: "入会前にレッスンの様子を知りたいのですが？",
        answer: "各コースで体験レッスンをしています。各コースで体験レッスンをしています。"
      },
      {
        question: "楽器の経験がないのですが、レッスンについていけますか？",
        answer: "大丈夫です。大人になってから楽器を始められた方が大半です。"
      },
      {
        question: " 年度途中からでもご入会いただけますか？",
        answer: "楽譜が読めない方にも一から丁寧にお教えいたします。レッスンのスピードも、ご希望に合わせて進めていきますので、インストラクターにご相談ください。楽譜が読めない方にも一から丁寧にお教えいたします。レッスンのスピードも、ご希望に合わせて進めていきますので、インストラクターにご相談ください。楽譜が読めない方にも一から丁寧にお教えいたします。レッスンのスピードも、ご希望に合わせて進めていきますので、インストラクターにご相談ください。"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FooterBanner = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="qa-container" data-v-2826e771><h1 data-v-2826e771>よくあるご質問</h1><!--[-->`);
      ssrRenderList(qaList.value, (item, index) => {
        _push(`<div class="qa-item" data-v-2826e771><div class="question" data-v-2826e771><strong data-v-2826e771>Q:</strong> ${ssrInterpolate(item.question)}</div><div class="answer" data-v-2826e771><strong data-v-2826e771>A:</strong> ${ssrInterpolate(item.answer)}</div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/ranking",
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
      _push(ssrRenderComponent(Freetrial, null, null, _parent));
      _push(ssrRenderComponent(News, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activity = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2826e771"]]);
export {
  activity as default
};
//# sourceMappingURL=activity-DjrDLpYd.js.map
