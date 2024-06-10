<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const { title } = route.params;
const { tag, time } = route.query;

const fileName = ref('');
const spliceFileName = () => {
  fileName.value = [title, time, tag].filter(Boolean).join('@');
}
onBeforeMount(spliceFileName)
</script>
<template>
  <div class="viewer">
    <div class="viewer-header">
      <div class="back-articles">
        <NuxtLink to="/articles">
          <span>
            < </span>
        </NuxtLink>
      </div>
      <h1 class="article__title">{{ title }}</h1>
    </div>
    <div class="article__tag">
      <div class="tag-container">
        {{ tag }}
      </div>
    </div>
    <div class="article-view">
      <ArticleViewer :file-name="fileName" />
    </div>
  </div>
</template>

<style coped lang="scss">
.viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.viewer-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.article__title {
  margin: 0;
  padding: 0;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.article__tag {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75em;

  .tag-container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(107 114 128);
    background-color: #f0f0f0;
    border-radius: 3px;
    padding: 0.2em 0.6em; // badge-sm
  }
}

.article-view {
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
