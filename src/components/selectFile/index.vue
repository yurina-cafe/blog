<script setup lang="ts">
import { readFileContent } from '@/utils/file';
import { ref } from 'vue'

const emit = defineEmits<{
  (e: "select", v: string): void
}>();
const fileInput = ref();
const onFileSelect = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files) {
    const fileContent = await readFileContent(files[0]);
    emit('select', fileContent)
  }
};

const onChooseFileClick = () => {
  fileInput.value?.click();
};
</script>

<template>
  <button class="upload_btn" @click="onChooseFileClick">选择本地文件</button>
  <input type="file" ref="fileInput" @change="onFileSelect" style="display: none;" />
</template>

<style scoped></style>
