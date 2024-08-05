<script setup lang="ts">
import { Icon } from '@iconify/vue';

const pageSets = [
  {
    href: '/articles',
    title: '笔记',
    icon: 'material-symbols:folder-rounded',
  },
  {
    href: '/post',
    title: '上传',
    icon: 'material-symbols:drive-folder-upload-rounded',
  }
]
</script>

<template>
  <div class="navigator">
    <div class="navigator__content">
      <div class="flex-1">
        <NuxtLink to="/">
          <button class="btn btn-ghost">
            <Icon icon="material-symbols:book-2-rounded" height="24px" />
            <p class="navigator__title">博客 Amumu</p>
            <p class="navigator__subtitle">一些作品和笔记</p>
          </button>
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <div v-for="page in pageSets" :key="page.title">
          <NuxtLink :to="page.href">
            <button class="btn btn-ghost">
              <Icon :icon="page.icon" height="20px" />
              <p>{{ page.title }}</p>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigator {
  @apply h-[50px] w-full;
  @apply flex justify-center my-2;

  &__content {
    @apply backdrop-blur max-w-[1200px] w-full px-[20px];
    @apply flex items-center;
  }

  &__title {
    font-size: 18px;
  }

  &__subtitle {
    font-size: 16px;
    @apply text-primary font-light;
  }
}

@media screen and (max-width: 768px) {
  .navigator__subtitle {
    display: none;
  }

}
</style>
