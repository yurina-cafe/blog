<script setup lang="ts">
import type { SortMethod } from '~/components/article-sort/index.vue';
import { ActionType } from '~/types/sort';


const handleSort = (v: SortMethod) => {
  console.log(v)
}
</script>

<template>
  <div class="articles">
    <ArticleSort @sort="handleSort" :tag-action="ActionType.Up" :time-action="ActionType.Up"></ArticleSort>
    <Articles></Articles>
  </div>
</template>

<style lang="scss" scoped>
.articles {
  width: 100%;
}
</style>
