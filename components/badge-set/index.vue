<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps<{
  name: string;
  icon: string
  size?: string
}>();
</script>
<template>
  <div class="base-badge">
    <Icon :icon="props.icon" :height="props.size ?? '24px'" :width="props.size ?? '24px'" />
    <p>{{ props.name }}</p>
  </div>
</template>

<style scoped lang="scss">
.base-badge {
  @apply badge badge-ghost border-none rounded-md gap-2 h-[40px] my-2 shadow-md;
  font-size: 16px;
  font-weight: 600;
  text-shadow: black 0px 0px 3px;
  color: white;
  background-color: rgba(177, 177, 177, 0.2);
}

@media screen and (max-width: 640px) {
  .base-badge p {
    display: none;
  }
}
</style>
