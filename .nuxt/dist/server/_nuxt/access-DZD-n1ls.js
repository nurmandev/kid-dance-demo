import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/safety");
    }
  },
  name: "AccessComplete"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "access" }, _attrs))} data-v-2308a467><h1 data-v-2308a467>ACCESS</h1><p data-v-2308a467>駅チカで通いやすい、全国31スタジオ展開中！</p><p data-v-2308a467>お子様のベストなレッスンのために、こだわり抜いたスタジオをご用意しています。</p><div class="pickup-section" data-v-2308a467><h2 data-v-2308a467>PICK UP</h2><button data-v-2308a467>銀座スタジオ</button></div><div class="info-container" data-v-2308a467><div class="top-logo" data-v-2308a467><span data-v-2308a467>新規 OPEN</span></div><div class="info-content" data-v-2308a467><p data-v-2308a467>dummy ×実際のスタジオ写真を入れてください</p></div></div><div class="additional-info" data-v-2308a467><div class="info-box" data-v-2308a467><p data-v-2308a467>dummy ※実際のスタジオ写真を入れてください</p></div></div><div class="flex-navigation" data-v-2308a467><h2 data-v-2308a467>All studio</h2><div class="studio-buttons" data-v-2308a467><button class="studio-button" data-v-2308a467>北海道・東北 (1)</button><button class="studio-button" data-v-2308a467>東京 (11)</button><button class="studio-button" data-v-2308a467>関東(東京以外) (4)</button><button class="studio-button" data-v-2308a467>北陸・中部 (3)</button><button class="studio-button" data-v-2308a467>関西 (5)</button></div><div class="flex-navigation" data-v-2308a467><h2 data-v-2308a467>All studio</h2><div class="studio-buttons" data-v-2308a467><button class="studio-button" data-v-2308a467>北海道 (1)</button><button class="studio-button" data-v-2308a467>東京都 (11)</button><button class="studio-button" data-v-2308a467>神奈川県 (2)</button><button class="studio-button" data-v-2308a467>埼玉県 (1)</button><button class="studio-button" data-v-2308a467>千葉県 (1)</button><button class="studio-button" data-v-2308a467>新潟県 (1)</button><button class="studio-button" data-v-2308a467>愛知県 (1)</button><button class="studio-button" data-v-2308a467>大阪府 (4)</button><button class="studio-button" data-v-2308a467>京都府 (1)</button></div><button class="studio-button" data-v-2308a467>北海道・東北の教室</button></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt 銀座</h3><p data-v-2308a467>東京都中央区銀座1丁目8-19ギャラリー銀座 6F</p><p data-v-2308a467>東京メトロ銀座一丁目駅 9番出口より徒歩1分</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>東京の教室</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt 銀座</h3><p data-v-2308a467>東京都中央区銀座1丁目8-19ギャラリー銀座 6F</p><p data-v-2308a467>東京メトロ銀座一丁目駅 9番出口より徒歩1分</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>関東(東京以外)の教室</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt 銀座</h3><p data-v-2308a467>東京都中央区銀座1丁目8-19ギャラリー銀座 6F</p><p data-v-2308a467>東京メトロ銀座一丁目駅 9番出口より徒歩1分</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>北陸・中部の教室</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt 銀座</h3><p data-v-2308a467>東京都中央区銀座1丁目8-19ギャラリー銀座 6F</p><p data-v-2308a467>東京メトロ銀座一丁目駅 9番出口より徒歩1分</p></div><div class="studio-infos" data-v-2308a467><h3 data-v-2308a467>東京の教室</h3></div><div class="studio-info" data-v-2308a467><h3 data-v-2308a467>WeArt 銀座</h3><p data-v-2308a467>東京都中央区銀座1丁目8-19ギャラリー銀座 6F</p><p data-v-2308a467>東京メトロ銀座一丁目駅 9番出口より徒歩1分</p></div></div><div class="view-more" data-v-2308a467><button data-v-2308a467>VIEW MORE</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Access = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2308a467"]]);
export {
  Access as default
};
//# sourceMappingURL=access-DZD-n1ls.js.map
