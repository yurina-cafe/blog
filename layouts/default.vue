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
  @apply flex flex-1 flex-col items-center mx-auto w-full max-w-[1200px] pt-[20px] px-[20px];
}
</style>
