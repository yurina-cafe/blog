<script setup lang="ts">
import { getRawArticlesWithoutMapping } from "~/composables/article";
import type { ArticleMeta } from "~/types/article";
import type { ActionType, ClickType } from "~/types/sort";
import { sortArticles, splitArticleName } from "~/utils/article";

interface SortMethod {
  clickType: ClickType;
  action: ActionType;
}

const props = defineProps<{
  sortRule: SortMethod;
}>();

const articleMetaList = ref<ArticleMeta[]>([]);

const sortedArticleMetaList = computed(() => {
  return sortArticles(articleMetaList.value, props.sortRule.clickType, props.sortRule.action);
});

const fetchAndMappingArticle = async () => {
  try {
    const data: string[] = await getRawArticlesWithoutMapping();
    articleMetaList.value = data.map((title: string) => splitArticleName(title)) as ArticleMeta[];
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

onMounted(fetchAndMappingArticle)
</script>

<template>
  <div class="articles">
    <ArticleItem v-for="(title, index) in sortedArticleMetaList" :key="index" :title="title" />
  </div>
</template>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
