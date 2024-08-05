<script setup lang="ts">
import type { SortMethod } from '~/components/article-sort/index.vue';
import { ActionType, ClickType } from '~/types/sort';

const sortMethod = ref<SortMethod>({ clickType: ClickType.Time, action: ActionType.Up })
const handleSort = (v: SortMethod) => {
  sortMethod.value = v
}
</script>

<template>
  <div class="articles">
    <ArticleSort :sort-rule="sortMethod" @sort="handleSort" />
    <ArticleList :sort-rule="sortMethod" />
  </div>
</template>

<style lang="scss" scoped>
.articles {
  width: 100%;
}
</style>
