import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_2 } from "./vid-CYsZIFkh.js";
import { _ as _export_sfc } from "../server.mjs";
const _imports_1$1 = "" + __buildAssetsURL("haxagon.Bx_0Jscp.png");
const _imports_1 = "" + __buildAssetsURL("hexa.FHCPpnEQ.png");
const _imports_3 = "" + __buildAssetsURL("Foot3.BXCIGDGS.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_FootBanner = resolveComponent("FootBanner");
  _push(`<!--[--><section class="curriculum-container" data-v-81bbe48f><h1 class="title" data-v-81bbe48f>2 CURRICULUM</h1><p class="subtitle" data-v-81bbe48f>新しいプログラムは、オプションプログラムと、発展のためのプログラム。 最初のステップを踏み出すために、あなたをサポートします。</p><img${ssrRenderAttr("src", _imports_1$1)} alt="Hexagon Image" data-v-81bbe48f><p data-v-81bbe48f>丁寧な学習対象・レベル別のクラス分けでお子様の様々な成長をお手伝いします。</p><img${ssrRenderAttr("src", _imports_1)} alt="Hexagon Image" data-v-81bbe48f><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-81bbe48f><img${ssrRenderAttr("src", _imports_2)} class="h-66 rounded-lg" data-v-81bbe48f></div><p data-v-81bbe48f></p>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/pricing",
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
  _push(`<img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids Growth" class="reason-img" data-v-81bbe48f></section>`);
  _push(ssrRenderComponent(_component_FootBanner, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/curriculum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Curriculum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81bbe48f"]]);
const curriculum = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Curriculum
}, Symbol.toStringTag, { value: "Module" }));
export {
  Curriculum as C,
  _imports_1$1 as _,
  _imports_3 as a,
  curriculum as c
};
//# sourceMappingURL=curriculum-mmcVNEac.js.map
