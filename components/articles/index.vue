<script setup lang="ts">
import { GetArticles } from "~/api/article";

const articleNames = ref<string[]>();

const fetch = () => {
  GetArticles().then((res) => {
    articleNames.value = res.data;
  });
};
onMounted(fetch)
</script>

<template>
  <div class="articles">
    <ArticleItem v-for="i in articleNames" :articleName="i" :key="i" />
  </div>
</template>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
