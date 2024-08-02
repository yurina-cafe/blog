<script setup lang="ts">

</script>

<template>
  <div class="navigator">
    <div class="navigator-content">
      <div class="flex-1">
        <NuxtLink to="/">
          <span class="navigator__title">
            Home
          </span>
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <div>
          <NuxtLink to="/articles">
            Articles
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/post">
            Post
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigator {
  @apply h-[50px] w-full;
  @apply flex justify-center py-2;

  &-content {
    @apply backdrop-blur max-w-[1200px] w-full;
    @apply flex items-center;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
