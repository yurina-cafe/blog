<script setup lang="ts">
import { debugGetAllArticles } from "~/utils/get-all-debug";

const articleNames = ref<string[]>();


const fetch = () => {
  debugGetAllArticles().then((res) => {
    articleNames.value = res;
  });
};
</script>

<template>
  <div class="articles">
    <button @click="fetch"></button>
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
