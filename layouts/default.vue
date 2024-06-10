<script setup lang="ts"></script>

<template>
  <div class="layout">
    <Navigator />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.navigator {
  display: flex;
  gap: 10px;
}

.main {
  max-width: 1200px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  padding: 20px;
  width: 100%;
}
</style>
