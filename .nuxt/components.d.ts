
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AboutSection': typeof import("../components/AboutSection.vue")['default']
    'Curriculum': typeof import("../components/Curriculum.vue")['default']
    'Eys': typeof import("../components/Eys.vue")['default']
    'FeaturesGrid': typeof import("../components/FeaturesGrid.vue")['default']
    'Foot1': typeof import("../components/Foot1.vue")['default']
    'Foot2': typeof import("../components/Foot2.vue")['default']
    'Foot3': typeof import("../components/Foot3.vue")['default']
    'Foot4': typeof import("../components/Foot4.vue")['default']
    'FooterBanner': typeof import("../components/FooterBanner.vue")['default']
    'Form': typeof import("../components/Form.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'InstructorCard': typeof import("../components/InstructorCard.vue")['default']
    'Karteinfo': typeof import("../components/Karteinfo.vue")['default']
    'LessonSchedule': typeof import("../components/LessonSchedule.vue")['default']
    'LessonSection': typeof import("../components/LessonSection.vue")['default']
    'PricingComponent': typeof import("../components/PricingComponent.vue")['default']
    'ReasonSection': typeof import("../components/ReasonSection.vue")['default']
    'ReasonsList': typeof import("../components/ReasonsList.vue")['default']
    'StemSection': typeof import("../components/StemSection.vue")['default']
    'Step': typeof import("../components/Step.vue")['default']
    'ViewMoreButton': typeof import("../components/ViewMoreButton.vue")['default']
    'Vision': typeof import("../components/Vision.vue")['default']
    'CardFoot2': typeof import("../components/card/Foot2.vue")['default']
    'CardInstructorCard': typeof import("../components/card/InstructorCard.vue")['default']
    'CardVisionCard': typeof import("../components/card/visionCard.vue")['default']
    'Childregistration': typeof import("../components/childregistration.vue")['default']
    'Class': typeof import("../components/class.vue")['default']
    'VisionCard': typeof import("../components/visionCard.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAboutSection': typeof import("../components/AboutSection.vue")['default']
    'LazyCurriculum': typeof import("../components/Curriculum.vue")['default']
    'LazyEys': typeof import("../components/Eys.vue")['default']
    'LazyFeaturesGrid': typeof import("../components/FeaturesGrid.vue")['default']
    'LazyFoot1': typeof import("../components/Foot1.vue")['default']
    'LazyFoot2': typeof import("../components/Foot2.vue")['default']
    'LazyFoot3': typeof import("../components/Foot3.vue")['default']
    'LazyFoot4': typeof import("../components/Foot4.vue")['default']
    'LazyFooterBanner': typeof import("../components/FooterBanner.vue")['default']
    'LazyForm': typeof import("../components/Form.vue")['default']
    'LazyHeader': typeof import("../components/Header.vue")['default']
    'LazyHeroSection': typeof import("../components/HeroSection.vue")['default']
    'LazyInstructorCard': typeof import("../components/InstructorCard.vue")['default']
    'LazyKarteinfo': typeof import("../components/Karteinfo.vue")['default']
    'LazyLessonSchedule': typeof import("../components/LessonSchedule.vue")['default']
    'LazyLessonSection': typeof import("../components/LessonSection.vue")['default']
    'LazyPricingComponent': typeof import("../components/PricingComponent.vue")['default']
    'LazyReasonSection': typeof import("../components/ReasonSection.vue")['default']
    'LazyReasonsList': typeof import("../components/ReasonsList.vue")['default']
    'LazyStemSection': typeof import("../components/StemSection.vue")['default']
    'LazyStep': typeof import("../components/Step.vue")['default']
    'LazyViewMoreButton': typeof import("../components/ViewMoreButton.vue")['default']
    'LazyVision': typeof import("../components/Vision.vue")['default']
    'LazyCardFoot2': typeof import("../components/card/Foot2.vue")['default']
    'LazyCardInstructorCard': typeof import("../components/card/InstructorCard.vue")['default']
    'LazyCardVisionCard': typeof import("../components/card/visionCard.vue")['default']
    'LazyChildregistration': typeof import("../components/childregistration.vue")['default']
    'LazyClass': typeof import("../components/class.vue")['default']
    'LazyVisionCard': typeof import("../components/visionCard.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AboutSection: typeof import("../components/AboutSection.vue")['default']
export const Curriculum: typeof import("../components/Curriculum.vue")['default']
export const Eys: typeof import("../components/Eys.vue")['default']
export const FeaturesGrid: typeof import("../components/FeaturesGrid.vue")['default']
export const Foot1: typeof import("../components/Foot1.vue")['default']
export const Foot2: typeof import("../components/Foot2.vue")['default']
export const Foot3: typeof import("../components/Foot3.vue")['default']
export const Foot4: typeof import("../components/Foot4.vue")['default']
export const FooterBanner: typeof import("../components/FooterBanner.vue")['default']
export const Form: typeof import("../components/Form.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const InstructorCard: typeof import("../components/InstructorCard.vue")['default']
export const Karteinfo: typeof import("../components/Karteinfo.vue")['default']
export const LessonSchedule: typeof import("../components/LessonSchedule.vue")['default']
export const LessonSection: typeof import("../components/LessonSection.vue")['default']
export const PricingComponent: typeof import("../components/PricingComponent.vue")['default']
export const ReasonSection: typeof import("../components/ReasonSection.vue")['default']
export const ReasonsList: typeof import("../components/ReasonsList.vue")['default']
export const StemSection: typeof import("../components/StemSection.vue")['default']
export const Step: typeof import("../components/Step.vue")['default']
export const ViewMoreButton: typeof import("../components/ViewMoreButton.vue")['default']
export const Vision: typeof import("../components/Vision.vue")['default']
export const CardFoot2: typeof import("../components/card/Foot2.vue")['default']
export const CardInstructorCard: typeof import("../components/card/InstructorCard.vue")['default']
export const CardVisionCard: typeof import("../components/card/visionCard.vue")['default']
export const Childregistration: typeof import("../components/childregistration.vue")['default']
export const Class: typeof import("../components/class.vue")['default']
export const VisionCard: typeof import("../components/visionCard.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAboutSection: typeof import("../components/AboutSection.vue")['default']
export const LazyCurriculum: typeof import("../components/Curriculum.vue")['default']
export const LazyEys: typeof import("../components/Eys.vue")['default']
export const LazyFeaturesGrid: typeof import("../components/FeaturesGrid.vue")['default']
export const LazyFoot1: typeof import("../components/Foot1.vue")['default']
export const LazyFoot2: typeof import("../components/Foot2.vue")['default']
export const LazyFoot3: typeof import("../components/Foot3.vue")['default']
export const LazyFoot4: typeof import("../components/Foot4.vue")['default']
export const LazyFooterBanner: typeof import("../components/FooterBanner.vue")['default']
export const LazyForm: typeof import("../components/Form.vue")['default']
export const LazyHeader: typeof import("../components/Header.vue")['default']
export const LazyHeroSection: typeof import("../components/HeroSection.vue")['default']
export const LazyInstructorCard: typeof import("../components/InstructorCard.vue")['default']
export const LazyKarteinfo: typeof import("../components/Karteinfo.vue")['default']
export const LazyLessonSchedule: typeof import("../components/LessonSchedule.vue")['default']
export const LazyLessonSection: typeof import("../components/LessonSection.vue")['default']
export const LazyPricingComponent: typeof import("../components/PricingComponent.vue")['default']
export const LazyReasonSection: typeof import("../components/ReasonSection.vue")['default']
export const LazyReasonsList: typeof import("../components/ReasonsList.vue")['default']
export const LazyStemSection: typeof import("../components/StemSection.vue")['default']
export const LazyStep: typeof import("../components/Step.vue")['default']
export const LazyViewMoreButton: typeof import("../components/ViewMoreButton.vue")['default']
export const LazyVision: typeof import("../components/Vision.vue")['default']
export const LazyCardFoot2: typeof import("../components/card/Foot2.vue")['default']
export const LazyCardInstructorCard: typeof import("../components/card/InstructorCard.vue")['default']
export const LazyCardVisionCard: typeof import("../components/card/visionCard.vue")['default']
export const LazyChildregistration: typeof import("../components/childregistration.vue")['default']
export const LazyClass: typeof import("../components/class.vue")['default']
export const LazyVisionCard: typeof import("../components/visionCard.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
