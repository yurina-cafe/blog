<script setup lang="ts">
import type { ArticleInfo } from '~/types/article';

const props = defineProps<{
  articleName: string
}>()

const articleInfo = ref<ArticleInfo>();
const splitArticleName = (name: string) => {
  let [title, time, tag] = name.replace(".md", "").split("@");

  return { title, time, tag };
};
onMounted(() => {
  articleInfo.value = splitArticleName(props.articleName);
});
</script>
<template>
  <div class="article-item">
    <NuxtLink :to="`/article/${articleInfo?.title}`">
      <div class="article-title">
        <a class="article-title btn">
          <div class="article-title content">
            <div>></div>
            <div>{{ articleInfo?.title }}</div>
          </div>
        </a>
      </div>
    </NuxtLink>
    <div class="article-tag">{{ articleInfo?.tag }}</div>
    <div class="article-time">{{ articleInfo?.time }}</div>
  </div>
</template>

<style coped>
.article-item {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.article-title {
  display: flex;
  align-items: center;
  padding: 5px;
  min-width: 90px;
  font-weight: 500;
}

.article-title.btn {
  position: relative;
}

.article-title.btn:hover {
  cursor: pointer;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.article-title.btn::before {
  content: "点击跳转";
  position: absolute;
  width: 80px;
  height: 30px;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f0f0f0;
  color: #3f3e3e;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s;
  visibility: hidden;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
}

.article-title.content {
  display: flex;
  gap: 5px;
}

.article-title.btn:hover::before {
  opacity: 1;
  visibility: visible;
}

.article-tag {
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px;
}

.article-time {
  font-weight: 300;
  margin-left: auto;
}
</style>
