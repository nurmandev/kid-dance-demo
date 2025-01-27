import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import Freetrial from './freetrial-BKZtcKVn.mjs';
import News from './news-D3nLugIv.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "activity",
  __ssrInlineRender: true,
  setup(__props) {
    const qaList = ref([
      {
        question: "\u697D\u5668\u306E\u7D4C\u9A13\u304C\u306A\u3044\u306E\u3067\u3059\u304C\u3001\u30EC\u30C3\u30B9\u30F3\u306B\u3064\u3044\u3066\u3044\u3051\u307E\u3059\u304B\uFF1F",
        answer: "\u5927\u4E08\u592B\u3067\u3059\u3002\u5927\u4EBA\u306B\u306A\u3063\u3066\u304B\u3089\u697D\u5668\u3092\u59CB\u3081\u3089\u308C\u305F\u65B9\u304C\u5927\u534A\u3067\u3059\u3002"
      },
      {
        question: "\u5165\u4F1A\u306F\u3044\u3064\u9803\u307E\u3067\u9014\u4E2D\u5165\u4F1A\u3067\u304D\u307E\u3059\u304B\uFF1F",
        answer: "\u5E74\u5EA6\u9014\u4E2D\u3067\u3082\u3054\u5165\u4F1A\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
      },
      {
        question: "\u5165\u4F1A\u306F\u3044\u3064\u9803\u307E\u3067\u9014\u4E2D\u5165\u4F1A\u3067\u304D\u307E\u3059\u304B\uFF1F",
        answer: "\u5E74\u5EA6\u9014\u4E2D\u3067\u3082\u3054\u5165\u4F1A\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
      },
      {
        question: "\u5165\u4F1A\u524D\u306B\u30EC\u30C3\u30B9\u30F3\u306E\u69D8\u5B50\u3092\u77E5\u308A\u305F\u3044\u306E\u3067\u3059\u304C\uFF1F",
        answer: "\u5404\u30B3\u30FC\u30B9\u3067\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u3092\u3057\u3066\u3044\u307E\u3059\u3002\u5404\u30B3\u30FC\u30B9\u3067\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u3092\u3057\u3066\u3044\u307E\u3059\u3002"
      },
      {
        question: "\u697D\u5668\u306E\u7D4C\u9A13\u304C\u306A\u3044\u306E\u3067\u3059\u304C\u3001\u30EC\u30C3\u30B9\u30F3\u306B\u3064\u3044\u3066\u3044\u3051\u307E\u3059\u304B\uFF1F",
        answer: "\u5927\u4E08\u592B\u3067\u3059\u3002\u5927\u4EBA\u306B\u306A\u3063\u3066\u304B\u3089\u697D\u5668\u3092\u59CB\u3081\u3089\u308C\u305F\u65B9\u304C\u5927\u534A\u3067\u3059\u3002"
      },
      {
        question: " \u5E74\u5EA6\u9014\u4E2D\u304B\u3089\u3067\u3082\u3054\u5165\u4F1A\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",
        answer: "\u697D\u8B5C\u304C\u8AAD\u3081\u306A\u3044\u65B9\u306B\u3082\u4E00\u304B\u3089\u4E01\u5BE7\u306B\u304A\u6559\u3048\u3044\u305F\u3057\u307E\u3059\u3002\u30EC\u30C3\u30B9\u30F3\u306E\u30B9\u30D4\u30FC\u30C9\u3082\u3001\u3054\u5E0C\u671B\u306B\u5408\u308F\u305B\u3066\u9032\u3081\u3066\u3044\u304D\u307E\u3059\u306E\u3067\u3001\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002\u697D\u8B5C\u304C\u8AAD\u3081\u306A\u3044\u65B9\u306B\u3082\u4E00\u304B\u3089\u4E01\u5BE7\u306B\u304A\u6559\u3048\u3044\u305F\u3057\u307E\u3059\u3002\u30EC\u30C3\u30B9\u30F3\u306E\u30B9\u30D4\u30FC\u30C9\u3082\u3001\u3054\u5E0C\u671B\u306B\u5408\u308F\u305B\u3066\u9032\u3081\u3066\u3044\u304D\u307E\u3059\u306E\u3067\u3001\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002\u697D\u8B5C\u304C\u8AAD\u3081\u306A\u3044\u65B9\u306B\u3082\u4E00\u304B\u3089\u4E01\u5BE7\u306B\u304A\u6559\u3048\u3044\u305F\u3057\u307E\u3059\u3002\u30EC\u30C3\u30B9\u30F3\u306E\u30B9\u30D4\u30FC\u30C9\u3082\u3001\u3054\u5E0C\u671B\u306B\u5408\u308F\u305B\u3066\u9032\u3081\u3066\u3044\u304D\u307E\u3059\u306E\u3067\u3001\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FooterBanner = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="qa-container" data-v-2826e771><h1 data-v-2826e771>\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F</h1><!--[-->`);
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
            _push2(`VIEW MORE \u2192`);
          } else {
            return [
              createTextVNode("VIEW MORE \u2192")
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const activity = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2826e771"]]);

export { activity as default };
//# sourceMappingURL=activity-DjrDLpYd.mjs.map
