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

const nameSplitList = ref<ArticleNameSplit[]>([]);
const articleNames = ref<string[]>();

const fetch = async () => {
  const data = await GetArticles();
  data.forEach((title: string) => {
    nameSplitList.value.push(splitArticleName(title));
  });
  articleNames.value = data;
  console.log(nameSplitList.value);
};
onMounted(fetch)

watch(() => props, (newProps) => {
  console.log(nameSplitList.value);
  nameSplitList.value = sortArticles(nameSplitList.value, newProps.clickType, newProps.action);
  console.log(nameSplitList.value);
}, { deep: true })
</script>

<template>
  <div class="articles">
    <ArticleItem v-for="name in articleNames" :articleName="name" :key="name" />
  </div>
</template>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
