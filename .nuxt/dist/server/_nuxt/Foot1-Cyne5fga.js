import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("foot.y3BAejfL.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "reason" }, _attrs))} data-v-51d2b17f><h2 data-v-51d2b17f>EYS-Kidsを選ぶ理由</h2><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids Growth" class="reason-img" data-v-51d2b17f></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Foot1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-51d2b17f"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Foot1-Cyne5fga.js.map
