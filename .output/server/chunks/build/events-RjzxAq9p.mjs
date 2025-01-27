import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("event.CdbgW23i.png");
const _imports_1 = "" + buildAssetsURL("const.B8-JqUhL.png");
const _imports_2 = "" + buildAssetsURL("Plans.MRPLN3tf.png");
const _imports_3 = "" + buildAssetsURL("Media.D8p54zKt.png");
const _imports_4 = "" + buildAssetsURL("even.Bv_UwoDO.png");
const _imports_5 = "" + buildAssetsURL("Comments.F1a1IsW3.png");
const _imports_6 = "" + buildAssetsURL("Comment.IjjaJBAQ.png");
const _imports_7 = "" + buildAssetsURL("Video.C-Vg3tZl.png");
const _imports_8 = "" + buildAssetsURL("Celebration.Cslxg1mP.png");
const _imports_9 = "" + buildAssetsURL("Event-lists.CukndUPe.png");
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/activity");
    }
  },
  name: "Events",
  components: {
    FooterBanner: __nuxt_component_0
  },
  data() {
    return {
      events: [
        { id: 1, name: "Halloween Dance Party", description: "Join us for a spooky dance party!" },
        { id: 2, name: "Christmas Workshop", description: "Celebrate the season with dance!" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FooterBanner = __nuxt_component_0;
  _push(`<!--[--><div class="events" data-v-f624001b><h1 class="title" data-v-f624001b>EVENT &amp; WORKSHOP</h1><p class="subtitle" data-v-f624001b>\u767A\u8868\u4F1A\u30FB\u30A4\u30D9\u30F3\u30C8\u30FB\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u304C\u5145\u5B9F</p><div class="event-list" data-v-f624001b><!--[-->`);
  ssrRenderList($data.events, (event) => {
    _push(`<div class="event-item" data-v-f624001b><h2 data-v-f624001b>${ssrInterpolate(event.name)}</h2><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_2)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_4)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><p data-v-f624001b>${ssrInterpolate(event.description)}</p></div>`);
  });
  _push(`<!--]--><div class="additional-info" data-v-f624001b>\u307F\u3093\u306A\u304C\u5927\u597D\u304D\u306A\u30D0\u30EC\u30FC\u30C9\u66F2\u3084\u3001\u99B4\u67D3\u307F\u306E\u3042\u308B\u66F2\u3092\u4F7F\u3063\u3066\u3001\u30C6\u30FC\u30DE\u30D1\u30FC\u30AF\u3067\u306E\u30C0\u30F3\u30B5\u30FC\u7D4C\u9A13\u304C\u3042\u308B\u8B1B\u5E2B\u304C\u30EC\u30C3\u30B9\u30F3\u3092\u62C5\u5F53\u3057\u307E\u3059\uFF01</div></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_5)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_6)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_7)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_8)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_9)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-f624001b><button data-v-f624001b>VIEW MORE</button></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const events = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f624001b"]]);

export { events as default };
//# sourceMappingURL=events-RjzxAq9p.mjs.map
