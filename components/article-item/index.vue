<script setup lang="ts">
import { splitArticleName } from '~/utils/article';
import type { ArticleNameSplit } from '~/types/article';

const props = defineProps<{
  title: ArticleNameSplit
}>()

</script>
<template>
  <div class="article-item">
    <div class="article-item__header">
      <NuxtLink
        :to="{ path: `/article/${props.title?.name}`, query: { tag: props.title?.tag, time: props.title?.time } }">
        <div class="article-title">
          <a class="article-title btn">
            <div class="article-title content">
              <div>></div>
              <div>{{ props.title.name }}</div>
            </div>
          </a>
        </div>
      </NuxtLink>
      <div v-if="props.title.tag" class="article-item__tag">{{ props.title.tag }}</div>
    </div>
    <div class="article-item__time">{{ formatedTime(props.title.time) }}</div>
  </div>
</template>

<style scoped lang="scss">
.article-item {
  @apply w-full h-[35px];
  @apply flex items-center gap-2 justify-between;

  &__header {
    @apply flex gap-2 items-center;
  }
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

.article-item__tag {
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px;
}

.article-item__time {
  @apply text-sm text-gray-500;
}
</style>
