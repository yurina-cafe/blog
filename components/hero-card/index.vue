<script setup lang="ts">
import { Icon } from '@iconify/vue';

const cardBackgroundStyle = {
  background: 'linear-gradient(90deg, #ededed81 0%, #edfbff99 100%)'
}

const props = defineProps<{
  title: string;
  desc: string[];
}>();
</script>
<template>
  <div class="w-full p-6 rounded-xl relative overflow-hidden" :style="cardBackgroundStyle">
    <h1 class="mb-4 flex items-center gap-1">
      <Icon icon="material-symbols:book-5-rounded" />
      {{ props.title }}
    </h1>
    <div v-for="item, index in props.desc" :key="index" class="mb-1">
      {{ item }}
    </div>
    <div class="flex items-center gap-1">
      <span>简历入口</span>
      <a href="/resume">
        <Icon icon="mingcute:open-door-line"
          class="text-[28px] flex items-center hover:text-purple-400 transition-all duration-300" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
