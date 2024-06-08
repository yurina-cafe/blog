<script setup lang="ts"></script>

<template>
  <div>
    <div class="test viewer">
      <h1>Viewer</h1>
      <ArticleViewer file-name="123"></ArticleViewer>
    </div>
    <div class="test list">
      <Articles></Articles>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
}
.poster {
  @apply bg-yellow-200;
}
</style>
