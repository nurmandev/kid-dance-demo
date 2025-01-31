<template>
  <!-- Fullscreen Background Image -->
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
      rel="stylesheet"
    />
  </Head>
  <section class="relative w-full md:h-[500px] flex overflow-hidden flex-wrap">
    <!-- First Child -->
    <div
      class="relative w-1/2 md:w-1/4 h-[250px] md:h-full bg-blue-300 flex items-center justify-center"
    >
      <img
        src="/static/images/hero1.jpg"
        alt="Kid 1"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Second Child -->
    <div
      class="relative w-[calc(50%+4rem)] md:w-[calc(25%+6rem)] h-[250px] md:h-full bg-teal-400 flex items-center justify-center clip-slant -ml-16 md:-ml-24"
    >
      <img
        src="/static/images/hero2.jpg"
        alt="Kid 2"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Third Child -->
    <div
      class="relative w-[calc(50%+4rem)] md:w-[calc(25%+6rem)] h-[250px] md:h-full bg-pink-300 flex items-center justify-center clip-slant -ml-16 md:-ml-24"
    >
      <img
        src="/static/images/hero3.jpg"
        alt="Kid 3"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Fourth Child -->
    <div
      class="relative w-[calc(50%+4rem)] md:w-[calc(25%+6rem)] h-[250px] md:h-full bg-yellow-400 flex items-center justify-center clip-slant -ml-16 md:-ml-24"
    >
      <img
        src="/static/images/hero1.jpg"
        alt="Kid 4"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Text Overlay -->
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-white text-8xl md:text-9xl -rotate-12 lets-dance">
        <span class="block">Let's</span>
        <span class="block ml-20 md:ml-40">Dance!</span>
      </h1>
    </div>
  </section>

  <!-- Overlay -->
  <!-- <div class="absolute inset-0 bg-black bg-opacity-40"></div> -->

  <!-- Centered Content -->
  <!-- <div class="relative z-10 text-center text-white px-6">
    <div
      class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-2 rounded-lg inline-block"
    >
      4 KARTE
    </div>
    <h1 class="text-6xl font-bold mt-4">充実カルテで モチベーションアップ！</h1>
    <p class="text-lg mt-4">レッスン後は毎回、講師からカルテが届きます</p>
  </div> -->
</template>
<script setup>
import { Head } from "#components";
</script>

<style scoped>
.clip-slant {
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.text-gradient {
  background: linear-gradient(to right, #32d3ff, #a855f7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.lets-dance {
  font-family: "Dancing Script", serif;
}
</style>
