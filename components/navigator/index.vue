<script setup lang="ts">

</script>

<template>
  <div class="navigator">
    <div class="navigator-content">
      <div class="flex-1">
        <NuxtLink to="/">
          <button class="btn btn-ghost navigator__title">
            Home
          </button>
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <div>
          <NuxtLink to="/articles">
            <button class="btn btn-ghost">
              Articles
            </button>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/post">
            <button class="btn btn-ghost">
              Post
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
