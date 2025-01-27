import { _ as _export_sfc, e as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0, a as _imports_0$1, V as Vision } from "./vision-BbNw5Qol.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1$1, a as _imports_3$1, C as Curriculum } from "./curriculum-mmcVNEac.js";
import { _ as _imports_2$1 } from "./vid-CYsZIFkh.js";
import News from "./news-D3nLugIv.js";
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
const _sfc_main$2 = {
  components: { VisionCard: __nuxt_component_0 }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VisionCard = __nuxt_component_0;
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vision-container" }, _attrs))} data-v-d238772a><h1 class="title" data-v-d238772a>1 VISION</h1><p class="subtitle" data-v-d238772a>EYS-Kidsは、ストリートダンスをパフォーマー育成ではなく、&quot;ダンスを通じた教育&quot;と考えています。</p><div class="vision-content" data-v-d238772a>`);
  _push(ssrRenderComponent(_component_VisionCard, {
    title: "マナーを身につける",
    color: "green"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` レッスンを通じて、コミュニケーションや協調性が向上します。 `);
      } else {
        return [
          createTextVNode(" レッスンを通じて、コミュニケーションや協調性が向上します。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_VisionCard, {
    title: "自主性を育んじる",
    color: "red"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 発表会の作品や、ユニフォーム作成を自分たちで考え、実践する機会が多くあります。 `);
      } else {
        return [
          createTextVNode(" 発表会の作品や、ユニフォーム作成を自分たちで考え、実践する機会が多くあります。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_VisionCard, {
    title: "チームワークと目標達成力を育む",
    color: "blue"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 発表会の作品作りやイベント参加を通して、チームの大切さを学びます。 `);
      } else {
        return [
          createTextVNode(" 発表会の作品作りやイベント参加を通して、チームの大切さを学びます。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/curriculum",
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
  _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="EYS-Kids Growth" class="reason-img" data-v-d238772a></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vision.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d238772a"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "curriculum-container" }, _attrs))} data-v-5f62ff3f><h1 class="title" data-v-5f62ff3f>2 CURRICULUM</h1><p class="subtitle" data-v-5f62ff3f>新しいプログラムは、オプションプログラムと、発展のためのプログラム。 最初のステップを踏み出すために、あなたをサポートします。</p><img${ssrRenderAttr("src", _imports_1$1)} alt="Hexagon Image" data-v-5f62ff3f><p data-v-5f62ff3f>丁寧な学習対象・レベル別のクラス分けでお子様の様々な成長をお手伝いします。</p><img${ssrRenderAttr("src", _imports_1$1)} alt="Hexagon Image" data-v-5f62ff3f><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-5f62ff3f><img${ssrRenderAttr("src", _imports_2$1)} class="h-66 rounded-lg" data-v-5f62ff3f></div><p data-v-5f62ff3f></p>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/curriculum",
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
  _push(`<img${ssrRenderAttr("src", _imports_3$1)} alt="EYS-Kids Growth" class="reason-img" data-v-5f62ff3f></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Curriculum.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5f62ff3f"]]);
const _imports_0 = "" + __buildAssetsURL("interior.ByuW742e.png");
const _imports_1 = "" + __buildAssetsURL("ved.DLVgNhSa.png");
const _imports_2 = "" + __buildAssetsURL("loge.DNDsfBrS.png");
const _imports_3 = "" + __buildAssetsURL("jed.Bd5SpkvC.png");
const _imports_4 = "" + __buildAssetsURL("curricle.DZxxjLqH.png");
const _imports_5 = "" + __buildAssetsURL("dist.DzD8Lt1N.png");
const _imports_6 = "" + __buildAssetsURL("calender.DhhVC5t7.png");
const _sfc_main = {
  name: "Exploration",
  components: {
    FooterBanner: __nuxt_component_0$1,
    News,
    Curriculum,
    Vision
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Explore = resolveComponent("Explore");
  const _component_FooterBanner = __nuxt_component_0$1;
  const _component_News = resolveComponent("News");
  const _component_Vision = __nuxt_component_1;
  const _component_Curriculum = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0f162734>`);
  _push(ssrRenderComponent(_component_Explore, null, null, _parent));
  _push(`<div class="text-section" data-v-0f162734><p class="subheading" data-v-0f162734>こだわり抜いたデザイン</p><h2 class="main-heading" data-v-0f162734>情操教育にふさわしい<br data-v-0f162734>洗練された空間の代官山教室</h2><p class="description" data-v-0f162734> ヨーロッパの街並みのようなエントランスロビーや、北欧製の照明・インテリア。<br data-v-0f162734> 安らぎの観葉植物、ほのかに香るアロマなど細部にまでこだわった温もりある空間が お子様だけでなく付き添いのご両親もおもてなしします。 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_0)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="text-section" data-v-0f162734><h2 class="main-heading" data-v-0f162734>業界最先端の<br data-v-0f162734>最新設備と最新機材</h2><p class="description" data-v-0f162734> 代官山スタジオはインテリアだけでなく、お子様の安全を第一に考えた設計となっています。<br data-v-0f162734> 清潔感のあるスタジオで存分にレッスンをお楽しみください。 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_1)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="floor-map-section" data-v-0f162734><h2 class="title" data-v-0f162734>フロアマップ</h2><p class="description" data-v-0f162734> フロアマップ中の各ルームをクリックすると<br data-v-0f162734> 内部の様子をご覧いただけます。 </p></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_2)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_3)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div><div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_4)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`<div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_5)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div>`);
  _push(ssrRenderComponent(_component_FooterBanner, null, null, _parent));
  _push(`<div class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center" data-v-0f162734><img${ssrRenderAttr("src", _imports_6)} alt="EYS-Kids" class="h-66 rounded-lg" data-v-0f162734></div>`);
  _push(ssrRenderComponent(_component_Vision, null, null, _parent));
  _push(ssrRenderComponent(_component_Curriculum, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/exploration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exploration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0f162734"]]);
export {
  exploration as default
};
//# sourceMappingURL=exploration-BMxxLXPA.js.map
