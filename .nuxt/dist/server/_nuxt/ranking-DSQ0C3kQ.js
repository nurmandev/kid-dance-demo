import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("Rank.Bc5KEsrN.png");
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/freetrial");
    }
  },
  name: "Ranking",
  components: {
    FooterBanner: __nuxt_component_0
  },
  data() {
    return {
      rankings: [
        { title: "Ranking 1", reason: "Reason for ranking 1" },
        { title: "Ranking 2", reason: "Reason for ranking 2" },
        { title: "Ranking 3", reason: "Reason for ranking 3" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FooterBanner = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf246be5><h1 class="text-4xl font-bold" data-v-bf246be5>Ranking</h1><p class="text-lg" data-v-bf246be5>EYSを選んだ決め手は？選んだ理由ランキング</p><ul data-v-bf246be5><!--[-->`);
  ssrRenderList($data.rankings, (item, index) => {
    _push(`<li data-v-bf246be5><div class="flex justify-around" data-v-bf246be5><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>1位</div><p data-v-bf246be5>ミュージックスタイリスト (99人)</p></div></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>2位</div><p data-v-bf246be5>上達保証 (62人)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>3位</div><p data-v-bf246be5>補講が無料(40)</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-bf246be5><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-bf246be5></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>4位</div><p data-v-bf246be5>22時まで営業 (27人)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>5位</div><p data-v-bf246be5>無料体験レッスン (22人)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>6位</div><p data-v-bf246be5>オーダーメイドレッスン (18人)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>7位</div><p data-v-bf246be5>他の生徒さんの印象 (9人)</p></div><h2 data-v-bf246be5>${ssrInterpolate(item.title)}</h2><p data-v-bf246be5>${ssrInterpolate(item.reason)}</p></li>`);
  });
  _push(`<!--]--></ul>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-bf246be5><button data-v-bf246be5>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ranking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ranking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bf246be5"]]);
export {
  ranking as default
};
//# sourceMappingURL=ranking-DSQ0C3kQ.js.map
