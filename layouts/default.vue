<script setup lang="ts"></script>

<template>
  <div>
    <div class="navigator">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/article">Articles</NuxtLink>
      <NuxtLink to="/post">Post</NuxtLink>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.navigator {
  display: flex;
  gap: 10px;
}
</style>
