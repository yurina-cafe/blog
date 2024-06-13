<script setup lang="ts">
import { GetArticles } from "~/composables/article";
import type { ArticleNameSplit } from "~/types/article";
import type { ActionType, ClickType } from "~/types/sort";
import { sortArticles } from "~/utils/article";

interface SortMethod {
  clickType: ClickType;
  action: ActionType;
}

const props = defineProps<SortMethod>();

const titleSplitList = ref<ArticleNameSplit[]>([]);

const fetch = async () => {
  const data = await GetArticles();
  titleSplitList.value = sortArticles(data.map((title: string) => splitArticleName(title)), props.clickType, props.action);
};
onMounted(fetch)

watch(() => props, (newProps) => {
  titleSplitList.value = sortArticles(titleSplitList.value, newProps.clickType, newProps.action);
}, { deep: true })
</script>

<template>
  <div class="articles">
    <ArticleItem v-for="(title, index) in titleSplitList" :title="title" :key="index" />
  </div>
</template>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
