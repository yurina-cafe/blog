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
  <div>
    <button @click="fetch"></button>
    <div v-for="i in articleNames">{{ i }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
