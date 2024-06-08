<script setup lang="ts">
import { fetchAllFiles } from '@/utils/file';
import { ref, onMounted } from 'vue'
import Card from '@/components/Card/index.vue'

const articleNames = ref<string[]>()
const fetchAllArticles = async () => {
  try {
    const data = await fetchAllFiles()
    console.log(data)
    articleNames.value = data
  } catch (err) {
    console.error(err)
  }
}
onMounted(fetchAllArticles)
</script>

<template>
  <div class="article_container">
    <div>{{ articleNames }}</div>
    <Card v-for="(articleName, index) in articleNames" :article-name="articleName" :key="index" />
  </div>
</template>

<style coped>
.article_container {
  padding-top: 15px;
  min-height: 94vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
</style>
