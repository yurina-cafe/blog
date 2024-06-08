<script setup lang="ts">

</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition>
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style coped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transform: all .3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
