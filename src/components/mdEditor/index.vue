<script setup lang="ts">
import { ref, watch } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { SetLocalArticleContent } from '@/store/file';

interface IProps {
  content: string;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'save', v: any): void;
}>();
const text = ref(props.content);
const onSave = (content: string) => {
  emit('save', content);
};

watch(() => props.content, (newContent) => {
  text.value = newContent;
})
setInterval(() => {
  SetLocalArticleContent(text.value)
}, 5000)
</script>

<template>
  <MdEditor v-model="text" @onSave="onSave" class="editor" />
</template>

<style coped>
.editor {
  flex-grow: 1;
  border-radius: 15px;
}
</style>
