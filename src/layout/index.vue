<script setup lang="ts">
import Header from '@/layout/components/header/index.vue'
import Main from '@/layout/components/main/index.vue'
</script>

<template>
  <div class="layout_container">
    <div class="layout_header">
      <Header />
    </div>
    <div class="layout_main">
      <Main />
    </div>
  </div>
</template>

<style coped>
.layout_container {
  height: 100vh;
  width: 100%;
}

.layout_header {
  width: 100%;
  height: 6vh;
}

.layout_main {
  width: 100%;
}
</style>
