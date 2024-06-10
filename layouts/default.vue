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
  margin: auto 0;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
</style>
