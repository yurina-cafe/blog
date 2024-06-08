<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MdEditor from '@/components/mdEditor/index.vue';
import SelectFile from '@/components/selectFile/index.vue';
import { uploadFile } from '@/utils/file';
import { Article } from '@/types/dao';
import { GetLocalArticleContent } from '@/store/file';

const text = ref('# Hello Editor');
const onSave = (v: any) => {
  text.value = v;
};

const onUpload = () => {
  const article: Article = {
    title: 'test',
    content: text.value,
  }
  uploadFile(article);
}

const onSelect = (v: string) => {
  console.log(v)
  text.value = v
}
const getSavedContent = () => {
  const content = GetLocalArticleContent();
  if (content) {
    text.value = content
  }
}
onMounted(getSavedContent)
</script>

<template>
  <div class="upload">
    <div class="editor_container">
      <MdEditor :content="text" @save="onSave" />
    </div>
    <div class="upload_btns">
      <SelectFile @select="onSelect" />
      <button class="upload_btn" @click="onUpload">上传文件</button>
    </div>
  </div>
</template>

<style coped>
.upload {
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 5px;
}

.editor_container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.upload_btns {
  display: flex;
  gap: 5px;
  height: 50px;
}

.upload_btn {
  padding: 2px;
}
</style>
