import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("event.CdbgW23i.png");
const _imports_1 = "" + __buildAssetsURL("const.B8-JqUhL.png");
const _imports_2 = "" + __buildAssetsURL("Plans.MRPLN3tf.png");
const _imports_3 = "" + __buildAssetsURL("Media.D8p54zKt.png");
const _imports_4 = "" + __buildAssetsURL("even.Bv_UwoDO.png");
const _imports_5 = "" + __buildAssetsURL("Comments.F1a1IsW3.png");
const _imports_6 = "" + __buildAssetsURL("Comment.IjjaJBAQ.png");
const _imports_7 = "" + __buildAssetsURL("Video.C-Vg3tZl.png");
const _imports_8 = "" + __buildAssetsURL("Celebration.Cslxg1mP.png");
const _imports_9 = "" + __buildAssetsURL("Event-lists.CukndUPe.png");
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
  _push(`<!--[--><div class="events" data-v-f624001b><h1 class="title" data-v-f624001b>EVENT &amp; WORKSHOP</h1><p class="subtitle" data-v-f624001b>発表会・イベント・ワークショップが充実</p><div class="event-list" data-v-f624001b><!--[-->`);
  ssrRenderList($data.events, (event) => {
    _push(`<div class="event-item" data-v-f624001b><h2 data-v-f624001b>${ssrInterpolate(event.name)}</h2><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_2)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_4)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><p data-v-f624001b>${ssrInterpolate(event.description)}</p></div>`);
  });
  _push(`<!--]--><div class="additional-info" data-v-f624001b>みんなが大好きなバレード曲や、馴染みのある曲を使って、テーマパークでのダンサー経験がある講師がレッスンを担当します！</div></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_5)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_6)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_7)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_8)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-f624001b><img${ssrRenderAttr("src", _imports_9)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-f624001b></div></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-f624001b><button data-v-f624001b>VIEW MORE</button></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const events = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f624001b"]]);
export {
  events as default
};
//# sourceMappingURL=events-RjzxAq9p.js.map
