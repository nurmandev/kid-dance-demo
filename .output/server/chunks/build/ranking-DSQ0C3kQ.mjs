import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, e as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("Rank.Bc5KEsrN.png");
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf246be5><h1 class="text-4xl font-bold" data-v-bf246be5>Ranking</h1><p class="text-lg" data-v-bf246be5>EYS\u3092\u9078\u3093\u3060\u6C7A\u3081\u624B\u306F\uFF1F\u9078\u3093\u3060\u7406\u7531\u30E9\u30F3\u30AD\u30F3\u30B0</p><ul data-v-bf246be5><!--[-->`);
  ssrRenderList($data.rankings, (item, index) => {
    _push(`<li data-v-bf246be5><div class="flex justify-around" data-v-bf246be5><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>1\u4F4D</div><p data-v-bf246be5>\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\u30B9\u30BF\u30A4\u30EA\u30B9\u30C8 (99\u4EBA)</p></div></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>2\u4F4D</div><p data-v-bf246be5>\u4E0A\u9054\u4FDD\u8A3C (62\u4EBA)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>3\u4F4D</div><p data-v-bf246be5>\u88DC\u8B1B\u304C\u7121\u6599(40)</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-bf246be5><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-bf246be5></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>4\u4F4D</div><p data-v-bf246be5>22\u6642\u307E\u3067\u55B6\u696D (27\u4EBA)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>5\u4F4D</div><p data-v-bf246be5>\u7121\u6599\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3 (22\u4EBA)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>6\u4F4D</div><p data-v-bf246be5>\u30AA\u30FC\u30C0\u30FC\u30E1\u30A4\u30C9\u30EC\u30C3\u30B9\u30F3 (18\u4EBA)</p></div><div class="ranking-item" data-v-bf246be5><div class="pentagon" data-v-bf246be5>7\u4F4D</div><p data-v-bf246be5>\u4ED6\u306E\u751F\u5F92\u3055\u3093\u306E\u5370\u8C61 (9\u4EBA)</p></div><h2 data-v-bf246be5>${ssrInterpolate(item.title)}</h2><p data-v-bf246be5>${ssrInterpolate(item.reason)}</p></li>`);
  });
  _push(`<!--]--></ul>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="view-more" data-v-bf246be5><button data-v-bf246be5>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ranking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const ranking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bf246be5"]]);

export { ranking as default };
//# sourceMappingURL=ranking-DSQ0C3kQ.mjs.map
