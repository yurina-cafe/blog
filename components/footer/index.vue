<script setup lang="ts">
import { Icon } from '@iconify/vue'

const linkSets = [
  {
    icon: 'mingcute:github-fill',
    name: '我的GitHub',
    link: 'https://github.com/chenmh0901'
  },
]
</script>

<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-blog">
        <div class="text-lg flex items-center gap-2">
          <Icon icon="material-symbols:cloud" height="20px" />
          Amumu Blog
        </div>
        <a href="https://nuxt.com/" class="footer-link">
          Powered by Nuxt.js
        </a>
      </div>

      <div class="footer-list">
        <div class="text-xs">浙ICP备2024110118号-1</div>

        <div class="footer-links">
          <a v-for="link in linkSets" :key="link.name" :href="link.link" target="_blank" class="footer-item">
            <Icon :icon="link.icon" height="18px" width="18px" />
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss">
.footer {
  @apply flex justify-center;
  @apply h-[80px] mt-[80px] w-full;

  color: #aaa;
  background: repeating-linear-gradient(45deg,
      #222,
      #222 10px,
      #111 10px,
      #111 20px);

  &-container {
    @apply max-w-[1200px] w-full px-[20px];
    @apply flex items-center justify-between;
  }

  &-blog {
    @apply flex flex-col justify-center items-start;
    @apply text-xs;
  }

  &-list {
    @apply flex flex-col items-end;
  }

  &-item {
    @apply text-xs flex items-center justify-center gap-1;
    @apply cursor-pointer;
    @apply footer-link;
  }
}

.footer-link {
  @apply hover:text-sky-300;
}
</style>
