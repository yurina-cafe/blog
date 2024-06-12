<script setup lang="ts">
import { debugGetAllArticles } from "~/utils/get-all-debug";

const articleNames = ref<string[]>();


const fetch = () => {
  debugGetAllArticles().then((res) => {
    articleNames.value = res;
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
