<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import UniApp from 'assets/icons/uni-app.png';

const IconBadgeType = {
  appStore: 'logos:apple-app-store',
  gitHub: 'logos:github-icon',
  html: 'logos:html-5',
  linux: 'logos:ubuntu',
  markdown: 'logos:markdown',
  vue: 'logos:vue',
  nuxtjs: 'logos:nuxt-icon',
  vueuse: 'logos:vueuse',
  react: 'logos:react',
  element: 'logos:element',
  antd: 'logos:ant-design',
  d3js: 'logos:d3',
  threejs: 'logos:threejs',
  tailwind: 'logos:tailwindcss-icon',
  sass: 'logos:sass',
  ionic: 'logos:ionic-icon',
  flutter: 'logos:flutter',
  unity: 'logos:unity',
  nodejs: 'logos:nodejs-icon',
  vite: 'logos:vitejs',
  vitest: 'logos:vitest',
  jest: 'logos:jest',
  eslint: 'logos:eslint',
  prettier: 'logos:prettier',
  blender: 'logos:blender',
  git: 'logos:git-icon',
  docker: 'logos:docker-icon',
  jenkins: 'logos:jenkins',
  github: 'logos:github-icon',
  figma: 'logos:figma',
  postman: 'logos:postman-icon',
  notion: 'logos:notion-icon',
  code: 'logos:visual-studio-code',
  typescript: 'logos:typescript-icon',
  'c#': 'logos:c-sharp',
  ps: 'logos:adobe-photoshop',
  javascript: 'logos:javascript',
  nginx: 'logos:nginx',
  uniapp: 'png',
}

const pngIconBadgeType = {
  uniapp: UniApp
}

interface Props {
  name: string;
  size?: string;
  color?: string;
}

const props = defineProps<Props>();
const isOtherLogo = computed(() => IconBadgeType[props.name as keyof typeof IconBadgeType] === 'png');
const iconName = computed(() => {
  if (isOtherLogo.value) return pngIconBadgeType[props.name as keyof typeof pngIconBadgeType ?? 'uniapp'] ?? pngIconBadgeType.uniapp;
  return IconBadgeType[props.name as keyof typeof IconBadgeType ?? 'markdown'] ?? IconBadgeType.markdown;
});
</script>

<template>
  <Icon v-if="!isOtherLogo" :icon="iconName" :height="props.size" :width="props.size" :color="props.color" />
  <img v-else :src="UniApp" :alt="props.name" :width="props.size" :height="props.size">
</template>

<style scoped lang="scss"></style>
