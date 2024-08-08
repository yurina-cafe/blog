<script setup lang="ts">
import type { ArticleMeta } from "~/types/article";
import ItemList from './list.vue'
import ItemGroup from './group.vue'
import { splitArticleName } from '~/utils/article'
import { getRawArticlesWithoutMapping } from '~/composables/article'
import { Icon } from '@iconify/vue'
import { useToggle } from '~/composables/use-toggle'

enum SortRule {
  Tag = 'Tag',
  Time = 'Time'
}
const { val, to } = useToggle([SortRule.Time, SortRule.Tag]);

const articleMetaList = ref<ArticleMeta[]>([]);

const fetchAndMappingArticle = async () => {
  try {
    const data: string[] = await getRawArticlesWithoutMapping();
    articleMetaList.value = data.map((fileName: string) => splitArticleName(fileName)) as ArticleMeta[];
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

onMounted(fetchAndMappingArticle)

</script>

<template>
  <div class="articles">
    <div class="flex items-center gap-4">
      <button class="btn rounded-lg flex items-center" @click="to(SortRule.Tag)">
        <span class="flex items-center gap-2">
          <Icon height="20" width="20" icon="mingcute:tag-line" />
          <span>根据标签排序</span>
        </span>
      </button>

      <button class="btn rounded-lg" @click="to(SortRule.Time)">
        <span class="flex items-center gap-2">
          <Icon height="20" width="20" icon="mingcute:time-line" />
          <span>根据时间排序</span>
        </span>
      </button>
    </div>

    <div v-if="val === SortRule.Tag" class="articles-group">
      <ItemGroup :article-meta-list="articleMetaList" />
    </div>
    <div v-else class="articles-list">
      <ItemList :article-meta-list="articleMetaList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles-group {
  @apply bg-purple-50 bg-opacity-10 rounded-xl gap-2 flex-wrap items-start w-full;
}

.articles-list {
  @apply flex;
}
</style>
