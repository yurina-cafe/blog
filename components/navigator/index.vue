<script setup lang="ts">

</script>
<template>
  <div class="navigator">
    <div class="navigator-content">
      <div class="flex-1 ">
        <NuxtLink to="/">
          <span class="navigator__title">
            Home
          </span>
        </NuxtLink>
      </div>
      <div class="flex gap-2 ">
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

<style coped lang="scss">
.navigator {
  @apply h-[50px];
  @apply flex justify-center p-0;

  &-content {
    @apply w-[1200px];
    @apply backdrop-blur;
    @apply flex items-center;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
