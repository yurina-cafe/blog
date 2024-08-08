<script setup lang="ts">
import type { ArticleMeta } from '~/types/article'
import ArticleItem from './item.vue'

const props = defineProps<{
  articleMetaList: ArticleMeta[]
}>()

const tagGroupedArticles = computed(() => {
  return [...props.articleMetaList].reduce((acc, cur) => {
    const tag = cur.tag;
    if (!acc[tag]) {
      acc[tag] = [];
    }
    acc[tag].push(cur);
    return acc;
  }, {} as Record<string, ArticleMeta[]>);
});

const tagKeys = computed(() => Object.keys(tagGroupedArticles.value))
</script>
<template>
  <div class="article-group">
    <div v-for="(tag, index) in tagKeys" :key="index" class="tag-group">
      <div class="flex items-center gap-2 text-2xl text-[#666] m-2">
        <BadgeIcon size="36" :name="tag" />
        {{ tag }}
      </div>
      <div v-for="(a, index) in tagGroupedArticles[tag]" :key="index" class="tag-articles">
        <div class="article-block">
          <ArticleItem :article-desc="a" :show-badge="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-group {
  @apply py-4 w-full flex flex-wrap gap-5;

  .tag-group {
    @apply flex flex-col w-1/3 py-5 flex-grow;
  }

  .tag-articles {
    @apply bg-opacity-80 pl-3 pr-6 py-1 rounded-lg flex-grow;
    background: linear-gradient(135deg, rgba(215, 241, 237, 0.17), rgba(255, 245, 245, 0.59));
  }

  .article-block {
    @apply flex h-[50px];
  }
}
</style>
