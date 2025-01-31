<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showScrollUp = ref(false);

// Detect scroll position for the up arrow visibility
const handleScroll = () => {
  showScrollUp.value = window.scrollY > 200;
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Attach event listeners
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-blue-200">
    <div class="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <div class="text-2xl font-bold text-gray-800 mb-4">月会費</div>
      <p class="text-lg text-gray-700 mb-4">0120-978-900</p>
      <p class="text-lg font-semibold text-blue-600 mb-6">無料休憩レッスン</p>
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold text-gray-800 mb-4">お客様にお問合せ</h2>
        <p class="text-lg text-gray-700 mb-4">0120-978-900</p>
        <p class="text-lg font-semibold text-blue-600">無料休憩レッスン</p>
      </div>
    </div>
    <div class=""></div>
    <div
      class="w-[80%] max-w-[900px] bg-white/70 backdrop-blur-md shadow-lg rounded-xl flex items-center p-3 z-50"
    >
      <!-- Banner Image -->
      <!-- <img src="/kid.jpg" alt="Promo Banner" class="h-20 rounded-lg" /> -->

      <!-- CTA Button -->
      <div class="ml-4">
        <button
          class="bg-blue-500 text-white text-lg px-6 py-2 rounded-lg transition hover:bg-blue-600"
        >
          無料体験レッスン
        </button>
      </div>

      <!-- Scroll-Up Button -->
      <button
        v-if="showScrollUp"
        @click="scrollToTop"
        class="absolute right-3 bottom-3 w-10 h-10 bg-white border border-blue-500 text-blue-500 rounded-full flex items-center justify-center text-xl hover:bg-blue-500 hover:text-white transition"
      >
        ▲
      </button>
    </div>
  </div>
</template>
