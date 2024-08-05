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
  },
  {
    href: '/books',
    title: '书单',
    icon: 'material-symbols:book-5-rounded',
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
      <div class="flex gap-2 ">
        <div v-for="page in pageSets" :key="page.title" class="navigator__pageSets">
          <NuxtLink :to="page.href">
            <button class="btn btn-ghost">
              <Icon :icon="page.icon" height="20px" />
              <p>{{ page.title }}</p>
            </button>
          </NuxtLink>
        </div>
        <div class="dropdown dropdown-hover dropdown-bottom dropdown-end navigator__pageDrop">
          <div tabindex="0" role="button" class="btn btn-ghost p-2">
            <Icon icon="material-symbols:add-circle-outline-rounded" height="20px" />
          </div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-1">
            <li v-for="page in pageSets" :key="page.title">
              <NuxtLink :to="page.href">
                <Icon :icon="page.icon" height="20px" />
                <p>{{ page.title }}</p>
              </NuxtLink>
            </li>
          </ul>
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

  &__pageDrop {
    @apply hidden;
  }
}

@media screen and (max-width: 768px) {
  .navigator__pageDrop {
    display: block;
  }

  .navigator__pageSets {
    display: none;
  }
}
</style>
