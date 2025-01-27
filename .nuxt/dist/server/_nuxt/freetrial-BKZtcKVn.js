import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc, e as __nuxt_component_0$1 } from "../server.mjs";
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
const _sfc_main$1 = {
  data() {
    return {
      selectedLocations: [],
      regions: [
        { name: "東京", count: 11, class: "region-tokyo", locations: [{ name: "秋葉原", details: "秋葉原駅から徒歩2分" }, { name: "秋葉原", details: "秋葉原駅から徒歩2分" }] },
        { name: "関東(東京以外)", count: 4, class: "region-kanto", locations: [{ name: "秋葉原", details: "秋葉原駅から徒歩2分" }] },
        { name: "北陸・中部", count: 4, class: "region-chubu", locations: [{ name: "秋葉原", details: "秋葉原駅から徒歩2分" }] },
        { name: "関西", count: 4, class: "region-kansai", locations: [{ name: "秋葉原", details: "秋葉原駅から徒歩2分" }] },
        { name: "北海道", count: 4, class: "region-hokkaido", locations: [{ name: "秋葉原", details: "秋葉原駅から徒歩2分" }] }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c1830a8e><!--[-->`);
  ssrRenderList($data.regions, (region) => {
    _push(`<div class="${ssrRenderClass(region.class)}" data-v-c1830a8e><h2 class="region-title" data-v-c1830a8e>${ssrInterpolate(region.name)} <span class="count" data-v-c1830a8e>${ssrInterpolate(region.count)}</span></h2><div class="grid-container" data-v-c1830a8e><!--[-->`);
    ssrRenderList(region.locations, (location, index) => {
      _push(`<div class="location-item" data-v-c1830a8e><label data-v-c1830a8e><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.selectedLocations) ? ssrLooseContain($data.selectedLocations, location.name) : $data.selectedLocations) ? " checked" : ""}${ssrRenderAttr("value", location.name)} data-v-c1830a8e><span class="location-name" data-v-c1830a8e>${ssrInterpolate(location.name)}</span><span class="location-details" data-v-c1830a8e>${ssrInterpolate(location.details)}</span></label></div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c1830a8e"]]);
const _imports_0 = "" + __buildAssetsURL("stat.CMy_2Nfr.png");
const _imports_1 = "" + __buildAssetsURL("Pic.vK91inpt.png");
const _imports_2 = "" + __buildAssetsURL("card.B-Mkt5_X.png");
const _imports_3 = "" + __buildAssetsURL("flan.Y-5nPcXZ.png");
const _sfc_main = {
  methods: {
    viewMore() {
      this.$router.push("/news");
    }
  },
  name: "freetrial",
  components: {
    Form: __nuxt_component_0,
    FooterBanner: __nuxt_component_0$1
  },
  data() {
    return {
      childNameKanji: "",
      childNameKana: "",
      gender: "",
      grade: "",
      phone: "",
      email: "",
      name: "",
      email: ""
    };
  },
  methods: {
    submitForm() {
      console.log(`Child Name (Kanji): ${this.childNameKanji}, Child Name (Kana): ${this.childNameKana}, Gender: ${this.gender}, Grade: ${this.grade}, Phone: ${this.phone}, Email: ${this.email}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Form = __nuxt_component_0;
  const _component_FooterBanner = __nuxt_component_0$1;
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><div data-v-1a2aa918><h1 class="text-4xl font-bold" data-v-1a2aa918>FreeTrial</h1><p class="text-lg" data-v-1a2aa918>EYS-Kidsでのびのびダンスレッスン！</p><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><input type="text"${ssrRenderAttr("value", $data.name)} placeholder="お名前" required data-v-1a2aa918><input type="email"${ssrRenderAttr("value", $data.email)} placeholder="メールアドレス" required data-v-1a2aa918><button type="submit" data-v-1a2aa918>申し込む</button><div class="flow-description" data-v-1a2aa918><p data-v-1a2aa918>お申込みから無料体験レッスン受講までの流れ</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_2)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><div data-v-1a2aa918><h1 class="text-4xl font-bold" data-v-1a2aa918>FreeTrial</h1><p class="text-lg" data-v-1a2aa918>EYS-Kidsでのびのびダンスレッスン！</p><p class="text-lg" data-v-1a2aa918>無料体験レッスンお申し込み</p><form data-v-1a2aa918><div data-v-1a2aa918><label data-v-1a2aa918>お子様のお名前（漢字）</label><input type="text"${ssrRenderAttr("value", $data.childNameKanji)} required data-v-1a2aa918></div><div data-v-1a2aa918><label data-v-1a2aa918>お子様のお名前（かな）</label><input type="text"${ssrRenderAttr("value", $data.childNameKana)} required data-v-1a2aa918></div><div data-v-1a2aa918><label data-v-1a2aa918>お子様の性別</label><div data-v-1a2aa918><label data-v-1a2aa918><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "男の子")) ? " checked" : ""} value="男の子" required data-v-1a2aa918> 男の子</label><label data-v-1a2aa918><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "女の子")) ? " checked" : ""} value="女の子" required data-v-1a2aa918> 女の子</label></div></div><div data-v-1a2aa918><label data-v-1a2aa918>お子様の学年</label><select required data-v-1a2aa918><option value="年少未満" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "年少未満") : ssrLooseEqual($data.grade, "年少未満")) ? " selected" : ""}>年少未満</option><option value="年少" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "年少") : ssrLooseEqual($data.grade, "年少")) ? " selected" : ""}>年少</option><option value="年中" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "年中") : ssrLooseEqual($data.grade, "年中")) ? " selected" : ""}>年中</option><option value="年長" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "年長") : ssrLooseEqual($data.grade, "年長")) ? " selected" : ""}>年長</option><option value="小学生" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "小学生") : ssrLooseEqual($data.grade, "小学生")) ? " selected" : ""}>小学生</option></select></div></form></div><div data-v-1a2aa918></div></div><p class="text-lg" data-v-1a2aa918>無料体験レッスンお申し込み</p><form data-v-1a2aa918><input type="text"${ssrRenderAttr("value", $data.name)} placeholder="お名前" required data-v-1a2aa918><input type="email"${ssrRenderAttr("value", $data.email)} placeholder="メールアドレス" required data-v-1a2aa918><button type="submit" data-v-1a2aa918>申し込む</button></form><div class="course-selection" data-v-1a2aa918><p data-v-1a2aa918>コース一覧から選ぶ</p><p data-v-1a2aa918>インストラクターから選ぶ</p></div><div class="flex-container" data-v-1a2aa918><button class="course-button" data-v-1a2aa918>HIP-HOP</button><button class="course-button" data-v-1a2aa918>Jazz</button><button class="course-button" data-v-1a2aa918>Kids Rhythm Dance</button><button class="course-button" data-v-1a2aa918>Theme Park Dance</button><button class="course-button" data-v-1a2aa918>Lock</button><button class="course-button" data-v-1a2aa918>Contemporary</button><button class="course-button" data-v-1a2aa918>House</button><button class="course-button" data-v-1a2aa918>Breakin&#39; / Acrobat</button></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><div class="space-selection" data-v-1a2aa918><p data-v-1a2aa918>ご希望のスペース</p><button class="space-button" data-v-1a2aa918>選択する</button></div>`);
  _push(ssrRenderComponent(_component_Form, null, null, _parent));
  _push(`<div data-v-1a2aa918><h2 data-v-1a2aa918>ご希望のスケジュール</h2><label data-v-1a2aa918><input type="radio" name="schedule" value="平日" required data-v-1a2aa918> 平日 </label><label data-v-1a2aa918><input type="radio" name="schedule" value="祝休日" required data-v-1a2aa918> 祝休日 </label></div><div data-v-1a2aa918><h2 data-v-1a2aa918>ご希望の時間帯</h2><label data-v-1a2aa918><input type="radio" name="time" value="10時〜14時" required data-v-1a2aa918> 10時〜14時 </label><label data-v-1a2aa918><input type="radio" name="time" value="14時〜18時" required data-v-1a2aa918> 14時〜18時 </label><label data-v-1a2aa918><input type="radio" name="time" value="18時〜21時" required data-v-1a2aa918> 18時〜21時 </label></div><div data-v-1a2aa918><h2 data-v-1a2aa918>キャンペーンコード</h2><input type="text" placeholder="キャンペーンコードがあれば入力" data-v-1a2aa918></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/news",
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/freetrial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Freetrial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a2aa918"]]);
export {
  Freetrial as default
};
//# sourceMappingURL=freetrial-BKZtcKVn.js.map
