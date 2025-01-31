<template>
  <header class="shadow-md">
    <!-- Top bar -->
    <div class="bg-[#f4ebfe]">
      <div
        class="flex justify-between items-center max-w-4xl w-full mx-auto px-6 py-2 text-sm"
      >
        <div class="flex space-x-4 items-center">
          <span class="text-green-500 text-xl font-bold">EYS-Kids</span>
          <div class="">
            <div>0歳から幼児、小学生まで</div>
            <div>こどもの早期音楽教育ならEYS-KIDS</div>
          </div>
        </div>
        <div class="md:flex space-x-4 hidden">
          <span>こどもSTE-LAB</span>
          <div class="">
            <div>こどもオリンピア</div>
            <div class="text-red-500">Coming Soon</div>
          </div>
          <div class="">
            <div>Businessがつくる</div>
            <div class="text-red-500">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main header -->
    <div class="border-b">
      <div
        class="flex justify-between items-center max-w-4xl w-full mx-auto bg-white px-8 py-4"
      >
        <div class="text-xl font-bold flex items-center flex-1 space-x-2">
          <span class="text-black">DANCE</span>
          <span class="text-gray-500">ACADEMY</span>
          <span class="text-xs text-gray-600">EYS-Kids</span>
        </div>
        <div class="hidden md:flex items-center flex-1 space-x-4">
          <span class="text-lg text-[#22aadc] font-bold">0120-978-900</span>
          <button
            class="bg-[#22aadc] text-white px-4 py-1 clip-slant flex items-center gap-4"
          >
            無料体験レッスン
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="bg-white max-w-4xl w-full mx-auto">
      <ul class="flex justify-center py-2 overflow-x-auto whitespace-nowrap">
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          トップ
        </li>
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          初めての方へ
        </li>
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          システム・料金
        </li>
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          ジャンル・カリキュラム
        </li>
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          アクセス
        </li>
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          インストラクター
        </li>
        <li class="hover:bg-[#fde0e2] rounded-full p-2 px-5 cursor-pointer">
          もっと見る
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.clip-slant {
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>
