<script setup lang="ts">
import { marked } from 'marked';
import { GetArticleContent } from '~/composables/article';

const props = defineProps<{
  fileName: string;
}>();

const render = new marked.Renderer();

marked.setOptions({
  renderer: render,
  gfm: true,
  pedantic: false,
});

const content = ref();
// fetch article and marked it
const fetch = async () => {
  const data = await GetArticleContent(props.fileName);
  content.value = marked(data)
};

onMounted(fetch);
</script>

<template>
  <div v-html="content"></div>
</template>

<style lang="scss" scoped></style>
