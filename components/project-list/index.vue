<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ImgCssAnimation from 'assets/images/cssanimation.jpg'
import ImgBlog from 'assets/images/blog.jpg'
import ImgZustCloud from 'assets/images/zustcloud.jpg'
import ImgAmumuStore from 'assets/images/amumustore.png'

import React from '/components/badge-set/react.vue'
import Typescript from '/components/badge-set/ts.vue'
import Daisyui from '/components/badge-set/daisyui.vue'
import Tailwind from '/components/badge-set/tailwind.vue'
import Git from '/components/badge-set/git.vue'
import Nuxt from '/components/badge-set/nuxt.vue'
import Ionic from '/components/badge-set/ionic.vue'
import Vite from '/components/badge-set/vite.vue'
import Vue from '/components/badge-set/vue.vue'
import Nginx from '/components/badge-set/nginx.vue'
import Node from '/components/badge-set/node.vue'
import Element from '/components/badge-set/element.vue'


</script>
<template>
  <div class="w-full flex flex-col items-center gap-6">
    <div class="text-3xl mt-24 mb-4 font-semibold">Demos & 项目</div>
    <ProjectItem title="CSSAnimation Gallery" :img="ImgCssAnimation">
      <template #content>
        <div>
          🖼️ CSS动画展览馆,你可以在这里找到很多有趣的动画效果。
        </div>
        <div class="flex gap-1.5">
          <React />
          <Typescript />
          <Daisyui />
          <Tailwind />
          <Vite />
        </div>
      </template>
      <template #footer>
        <a class="link-btn !bg-blue-400" target="_blank" href="">
          <Icon icon="ci:building-04" />
          站点
        </a>
        <a class="link-btn !bg-gray-200" target="_blank" href="https://github.com/chenmh0901/CSSAnimation">
          <Icon icon="mage:github" />
          GitHub
        </a>
      </template>
    </ProjectItem>
    <ProjectItem title="Blog" :img="ImgBlog">
      <template #content>
        <div>
          🎇 基于nuxtjs的博客模版,支持markdown编辑和Github actions自动部署。
        </div>
        <div class="flex gap-1.5">
          <Nuxt />
          <Typescript />
          <Daisyui />
          <Tailwind />
        </div>
      </template>
      <template #footer>
        <a class="link-btn !bg-blue-400" target="_blank" href="">
          <Icon icon="ci:building-04" />
          站点
        </a>
        <a class="link-btn !bg-gray-200" target="_blank" href="https://github.com/chenmh0901/blog">
          <Icon icon="mage:github" />
          GitHub
        </a>
      </template>
    </ProjectItem>
    <ProjectItem title="Blog Server" :img="ImgBlog">
      <template #content>
        <div>
          🎑 基于nodejs的静态文件资源管理系统。
        </div>
        <div class="flex gap-1.5">
          <Node />
          <Typescript />
          <Nginx />
        </div>
      </template>
      <template #footer>
        <a class="link-btn !bg-gray-200" target="_blank" href="https://github.com/chenmh0901/server">
          <Icon icon="mage:github" />
          GitHub
        </a>
      </template>
    </ProjectItem>
    <ProjectItem title="ZustCloud" :img="ImgZustCloud">
      <template #content>
        <div>
          🎐 校内信息推广App,基于ionic构建。
        </div>
        <div class="flex gap-1.5">
          <Ionic />
          <Typescript />
          <Vue />
          <Element />
          <Git />
          <Vite />
        </div>
      </template>
      <template #footer>
        <a class="link-btn !bg-gray-200" target="_blank" href="https://github.com/ZustCloud/next">
          <Icon icon="mage:github" />
          GitHub
        </a>
      </template>
    </ProjectItem>
    <ProjectItem title="Amumu Store" :img="ImgAmumuStore">
      <template #content>
        <div>
          🛒 后台管理模版,基于vue + ts + element构建。
        </div>
        <div class="flex gap-1.5">
          <Vue />
          <Typescript />
          <Element />
        </div>
      </template>
      <template #footer>
        <a class="link-btn !bg-gray-200" target="_blank" href="https://github.com/chenmh0901/vue-admin-template">
          <Icon icon="mage:github" />
          GitHub
        </a>
      </template>
    </ProjectItem>
  </div>
</template>

<style scoped>
.link-btn {
  @apply btn btn-sm !rounded-t-lg !rounded-b-none glass font-bold;
  transition: all 0.26s;
}

.link-btn:hover {
  @apply h-[40px];
}
</style>
