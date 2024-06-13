<script setup lang="ts">
import type { SortMethod } from '~/components/article-sort/index.vue';

enum ActionType {
  Up = 'up',
  Down = 'down',
}

const handleSort = (v: SortMethod) => {
  console.log(v)
}
</script>

<template>
  <div class="test">
    <ArticleSort @sort="handleSort" :tag-action="ActionType.Up" :time-action="ActionType.Up"></ArticleSort>
    <Articles></Articles>
  </div>
</template>

<style lang="scss" scoped>
.test {
  width: 100%;
}
</style>
