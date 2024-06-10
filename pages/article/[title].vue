<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const fileName = ref('');

const spliceFileName = () => {
  const { title } = route.params;
  const { tag, time } = route.query;

  fileName.value = [title, time, tag].filter(Boolean).join('@');
}
onBeforeMount(spliceFileName)
</script>
<template>
  <div class="test viewer">
    <h1>Viewer</h1>
    <h2>{{ fileName }}</h2>
    <ArticleViewer :file-name="fileName"></ArticleViewer>
  </div>
</template>

<style coped>
.test {
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
}
</style>
