<script setup lang="ts">
import { Icon } from '@iconify/vue';
const blocks = [
  {
    name: 'Web 框架',
    list: [
      'vue',
      'nuxtjs',
      'react',
    ]
  },
  {
    name: 'Web 设计',
    list: [
      'tailwind',
      'element',
      'antd',
      'sass',
      'threejs'
    ]
  },
  {
    name: '客户端',
    list: [
      'ionic',
      'flutter',
      'uniapp',
      'unity'
    ]
  },
  {
    name: 'BFF / 质量',
    list: [
      'nodejs',
      'vite',
      'eslint',
      'prettier',
      'nginx',
      'jest'
    ]
  },
  {
    name: '工具 / 软件',
    list: [
      'git',
      'github',
      'ps',
      'postman',
      'notion',
      'code'
    ]
  },
  {
    name: '常用语言',
    list: [
      'javascript',
      'typescript',
      'c#',
      'markdown',
    ]
  }
]
</script>
<template>
  <div class="tech-stack relative overflow-hidden">
    <h2 class="flex items-center gap-2">
      <Icon icon="mingcute:box-3-fill" height="28px" />
      技术栈
    </h2>
    <div>个人掌握的技能和常用的开发工具 🔧 </div>
    <div class="absolute right-[-25px] top-[-22px]">
      <Icon icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" height="120px" />
    </div>
    <div class="tech-stack__skills">
      <div v-for="block in blocks " :key="block.name" class="block">
        <div class="block-title">
          {{ block.name }}
        </div>
        <div v-for="(item, index) in block.list" :key="index" class="block-item">
          <BadgeIcon :name="item" size="18px" />
          <div>{{ item }}</div>
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
    @apply flex flex-wrap p-4 gap-[60px];
  }
}

.block {
  @apply flex flex-col gap-[6px] items-center;

  &-title {
    @apply text-lg font-semibold my-2;
  }

  &-item {
    @apply flex justify-between items-center gap-1 text-xs w-[100px];
  }
}
</style>
