<script setup lang="ts">
import { type ArticleMeta } from '~/types/article';

const props = defineProps<{
  articleDesc: ArticleMeta;
  showBadge: Boolean
}>()

</script>
<template>
  <div class="article-item">
    <div class="tooltip max-w-[calc(100%-70px)]" data-tip="点击跳转">
      <div class="flex btn btn-ghost btn-sm">
        <NuxtLink
          :to="{ path: `/article/${props.articleDesc.name}`, query: { tag: props.articleDesc.tag, time: props.articleDesc.time } }">
          <div class="text-sm w-full flex gap-2 items-center">
            <div v-if="showBadge" class="w-[30px] flex items-center justify-center">
              <BadgeIcon size="28" :name="props.articleDesc.tag" />
            </div>
            <span class="truncate">{{ props.articleDesc.name }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="article-time">
      {{ props.articleDesc.time }}
    </div>
  </div>
</template>

<style scoped>
.article-item {
  @apply text-sm;
  @apply text-[#333];
  @apply flex items-center h-[45px] w-full;
}

.article-time {
  @apply ml-auto text-xs cursor-default;
}
</style>
