<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goRoute = (route: string) => {
  router.push(route)
}
</script>

<template>
  <div class="header">
    <div class="header_item" @click="goRoute('/articles')">文章</div>
    <div class="header_item" @click="goRoute('/upload')">上传</div>
  </div>
</template>

<style coped>
.header {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 12px 18px rgba(123, 123, 123, 0.2);
}

.header_item {
  margin-right: 10px;
  cursor: pointer;
  font-size: 24px;
  transition: opacity 300ms ease-in-out;
  opacity: 0.5;
}

.header_item:hover {
  opacity: 1;
}
</style>
