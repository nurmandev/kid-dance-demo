import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext, resolveComponent, withCtx, createTextVNode } from 'vue';
import { _ as _export_sfc, e as __nuxt_component_0$1 } from './server.mjs';
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

const _sfc_main$1 = {
  data() {
    return {
      selectedLocations: [],
      regions: [
        { name: "\u6771\u4EAC", count: 11, class: "region-tokyo", locations: [{ name: "\u79CB\u8449\u539F", details: "\u79CB\u8449\u539F\u99C5\u304B\u3089\u5F92\u6B692\u5206" }, { name: "\u79CB\u8449\u539F", details: "\u79CB\u8449\u539F\u99C5\u304B\u3089\u5F92\u6B692\u5206" }] },
        { name: "\u95A2\u6771(\u6771\u4EAC\u4EE5\u5916)", count: 4, class: "region-kanto", locations: [{ name: "\u79CB\u8449\u539F", details: "\u79CB\u8449\u539F\u99C5\u304B\u3089\u5F92\u6B692\u5206" }] },
        { name: "\u5317\u9678\u30FB\u4E2D\u90E8", count: 4, class: "region-chubu", locations: [{ name: "\u79CB\u8449\u539F", details: "\u79CB\u8449\u539F\u99C5\u304B\u3089\u5F92\u6B692\u5206" }] },
        { name: "\u95A2\u897F", count: 4, class: "region-kansai", locations: [{ name: "\u79CB\u8449\u539F", details: "\u79CB\u8449\u539F\u99C5\u304B\u3089\u5F92\u6B692\u5206" }] },
        { name: "\u5317\u6D77\u9053", count: 4, class: "region-hokkaido", locations: [{ name: "\u79CB\u8449\u539F", details: "\u79CB\u8449\u539F\u99C5\u304B\u3089\u5F92\u6B692\u5206" }] }
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
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c1830a8e"]]);
const _imports_0 = "" + buildAssetsURL("stat.CMy_2Nfr.png");
const _imports_1 = "" + buildAssetsURL("Pic.vK91inpt.png");
const _imports_2 = "" + buildAssetsURL("card.B-Mkt5_X.png");
const _imports_3 = "" + buildAssetsURL("flan.Y-5nPcXZ.png");
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
  _push(`<!--[--><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><div data-v-1a2aa918><h1 class="text-4xl font-bold" data-v-1a2aa918>FreeTrial</h1><p class="text-lg" data-v-1a2aa918>EYS-Kids\u3067\u306E\u3073\u306E\u3073\u30C0\u30F3\u30B9\u30EC\u30C3\u30B9\u30F3\uFF01</p><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><input type="text"${ssrRenderAttr("value", $data.name)} placeholder="\u304A\u540D\u524D" required data-v-1a2aa918><input type="email"${ssrRenderAttr("value", $data.email)} placeholder="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" required data-v-1a2aa918><button type="submit" data-v-1a2aa918>\u7533\u3057\u8FBC\u3080</button><div class="flow-description" data-v-1a2aa918><p data-v-1a2aa918>\u304A\u7533\u8FBC\u307F\u304B\u3089\u7121\u6599\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u53D7\u8B1B\u307E\u3067\u306E\u6D41\u308C</p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_2)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><div data-v-1a2aa918><h1 class="text-4xl font-bold" data-v-1a2aa918>FreeTrial</h1><p class="text-lg" data-v-1a2aa918>EYS-Kids\u3067\u306E\u3073\u306E\u3073\u30C0\u30F3\u30B9\u30EC\u30C3\u30B9\u30F3\uFF01</p><p class="text-lg" data-v-1a2aa918>\u7121\u6599\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u304A\u7533\u3057\u8FBC\u307F</p><form data-v-1a2aa918><div data-v-1a2aa918><label data-v-1a2aa918>\u304A\u5B50\u69D8\u306E\u304A\u540D\u524D\uFF08\u6F22\u5B57\uFF09</label><input type="text"${ssrRenderAttr("value", $data.childNameKanji)} required data-v-1a2aa918></div><div data-v-1a2aa918><label data-v-1a2aa918>\u304A\u5B50\u69D8\u306E\u304A\u540D\u524D\uFF08\u304B\u306A\uFF09</label><input type="text"${ssrRenderAttr("value", $data.childNameKana)} required data-v-1a2aa918></div><div data-v-1a2aa918><label data-v-1a2aa918>\u304A\u5B50\u69D8\u306E\u6027\u5225</label><div data-v-1a2aa918><label data-v-1a2aa918><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "\u7537\u306E\u5B50")) ? " checked" : ""} value="\u7537\u306E\u5B50" required data-v-1a2aa918> \u7537\u306E\u5B50</label><label data-v-1a2aa918><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.gender, "\u5973\u306E\u5B50")) ? " checked" : ""} value="\u5973\u306E\u5B50" required data-v-1a2aa918> \u5973\u306E\u5B50</label></div></div><div data-v-1a2aa918><label data-v-1a2aa918>\u304A\u5B50\u69D8\u306E\u5B66\u5E74</label><select required data-v-1a2aa918><option value="\u5E74\u5C11\u672A\u6E80" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "\u5E74\u5C11\u672A\u6E80") : ssrLooseEqual($data.grade, "\u5E74\u5C11\u672A\u6E80")) ? " selected" : ""}>\u5E74\u5C11\u672A\u6E80</option><option value="\u5E74\u5C11" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "\u5E74\u5C11") : ssrLooseEqual($data.grade, "\u5E74\u5C11")) ? " selected" : ""}>\u5E74\u5C11</option><option value="\u5E74\u4E2D" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "\u5E74\u4E2D") : ssrLooseEqual($data.grade, "\u5E74\u4E2D")) ? " selected" : ""}>\u5E74\u4E2D</option><option value="\u5E74\u9577" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "\u5E74\u9577") : ssrLooseEqual($data.grade, "\u5E74\u9577")) ? " selected" : ""}>\u5E74\u9577</option><option value="\u5C0F\u5B66\u751F" data-v-1a2aa918${ssrIncludeBooleanAttr(Array.isArray($data.grade) ? ssrLooseContain($data.grade, "\u5C0F\u5B66\u751F") : ssrLooseEqual($data.grade, "\u5C0F\u5B66\u751F")) ? " selected" : ""}>\u5C0F\u5B66\u751F</option></select></div></form></div><div data-v-1a2aa918></div></div><p class="text-lg" data-v-1a2aa918>\u7121\u6599\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u304A\u7533\u3057\u8FBC\u307F</p><form data-v-1a2aa918><input type="text"${ssrRenderAttr("value", $data.name)} placeholder="\u304A\u540D\u524D" required data-v-1a2aa918><input type="email"${ssrRenderAttr("value", $data.email)} placeholder="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" required data-v-1a2aa918><button type="submit" data-v-1a2aa918>\u7533\u3057\u8FBC\u3080</button></form><div class="course-selection" data-v-1a2aa918><p data-v-1a2aa918>\u30B3\u30FC\u30B9\u4E00\u89A7\u304B\u3089\u9078\u3076</p><p data-v-1a2aa918>\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u304B\u3089\u9078\u3076</p></div><div class="flex-container" data-v-1a2aa918><button class="course-button" data-v-1a2aa918>HIP-HOP</button><button class="course-button" data-v-1a2aa918>Jazz</button><button class="course-button" data-v-1a2aa918>Kids Rhythm Dance</button><button class="course-button" data-v-1a2aa918>Theme Park Dance</button><button class="course-button" data-v-1a2aa918>Lock</button><button class="course-button" data-v-1a2aa918>Contemporary</button><button class="course-button" data-v-1a2aa918>House</button><button class="course-button" data-v-1a2aa918>Breakin&#39; / Acrobat</button></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-1a2aa918><img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-1a2aa918></div><div class="space-selection" data-v-1a2aa918><p data-v-1a2aa918>\u3054\u5E0C\u671B\u306E\u30B9\u30DA\u30FC\u30B9</p><button class="space-button" data-v-1a2aa918>\u9078\u629E\u3059\u308B</button></div>`);
  _push(ssrRenderComponent(_component_Form, null, null, _parent));
  _push(`<div data-v-1a2aa918><h2 data-v-1a2aa918>\u3054\u5E0C\u671B\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</h2><label data-v-1a2aa918><input type="radio" name="schedule" value="\u5E73\u65E5" required data-v-1a2aa918> \u5E73\u65E5 </label><label data-v-1a2aa918><input type="radio" name="schedule" value="\u795D\u4F11\u65E5" required data-v-1a2aa918> \u795D\u4F11\u65E5 </label></div><div data-v-1a2aa918><h2 data-v-1a2aa918>\u3054\u5E0C\u671B\u306E\u6642\u9593\u5E2F</h2><label data-v-1a2aa918><input type="radio" name="time" value="10\u6642\u301C14\u6642" required data-v-1a2aa918> 10\u6642\u301C14\u6642 </label><label data-v-1a2aa918><input type="radio" name="time" value="14\u6642\u301C18\u6642" required data-v-1a2aa918> 14\u6642\u301C18\u6642 </label><label data-v-1a2aa918><input type="radio" name="time" value="18\u6642\u301C21\u6642" required data-v-1a2aa918> 18\u6642\u301C21\u6642 </label></div><div data-v-1a2aa918><h2 data-v-1a2aa918>\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u30B3\u30FC\u30C9</h2><input type="text" placeholder="\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u30B3\u30FC\u30C9\u304C\u3042\u308C\u3070\u5165\u529B" data-v-1a2aa918></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/news",
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/freetrial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const Freetrial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a2aa918"]]);

export { Freetrial as default };
//# sourceMappingURL=freetrial-BKZtcKVn.mjs.map
