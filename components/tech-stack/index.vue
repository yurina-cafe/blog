<script setup lang="ts">
import { Icon } from '@iconify/vue';
const blocks = [
  {
    name: 'Web 框架',
    list: [
      'vuejs',
      'nuxtjs',
      'react',
    ]
  },
  {
    name: 'Web 设计',
    list: [
      'tailwindcss',
      'elementplus',
      'antd',
      'sass',
      'd3js'
    ]
  },
  {
    name: '客户端',
    list: [
      'ionic',
      'flutter',
      'uniapp',
    ]
  },
  {
    name: 'BFF / 质量',
    list: [
      'nodejs',
      'vite',
      'eslint',
      'prettier',
    ]
  },
  {
    name: '工具',
    list: [
      'git',
      'github',
      'ps',
      'postman',
      'notion',
    ]
  }
]
</script>
<template>
  <div class="tech-stack">
    <h2 class="flex items-center gap-2">
      <Icon icon="lucide:box" height="28px" />
      技术栈
    </h2>
    <div class="tech-stack__skills">
      <div v-for="block in blocks " :key="block.name" class="apps">
        <div class="apps-title">
          <div v-for="(item, index) in block" :key="index" class="apps-item">
            <div>{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tech-stack {
  @apply rounded-xl p-6;
  background: linear-gradient(90deg, #d8f3e8bf 0%, #bbf0ff99 100%);

  &__skills {
    @apply flex flex-wrap p-4 gap-[80px];
  }
}

.apps {
  @apply flex flex-col gap-[6px];

  &-title {
    @apply text-lg font-semibold my-2;
  }

  &-item {
    @apply flex justify-between items-center gap-1 text-sm w-[90px];
  }
}
</style>
