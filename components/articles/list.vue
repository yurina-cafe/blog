<script setup lang="ts">
import type { ArticleMeta } from '~/types/article'
import ArticleItem from './item.vue'

const props = defineProps<{
  articleMetaList: ArticleMeta[]
}>()

const timeSortedArticles = computed(() => {
  return [...props.articleMetaList].sort((a, b) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });
});

</script>
<template>
  <div class="article-list">
    <div v-for="(article, index) in timeSortedArticles" :key="index" class="article-block">
      <ArticleItem :show-badge="true" :article-desc="article" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-list {
  @apply py-8 w-full flex flex-wrap;

  .article-block {
    @apply w-1/2 flex h-[50px] px-4 my-2;
  }
}
</style>
