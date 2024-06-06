<script setup>
import { onMounted, ref } from 'vue';
import { baseURL, useHttp } from './utils/http.js'
const files = ref([]);
const postUrl = baseURL + 'notes'
const fetchFiles = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'notes'
    }
    const { data } = await useHttp(options);
    files.value = data;
  } catch (e) {
    console.error(e)
  }
};

const getFiles = async (fileName) => {
  try {
    const options = {
      method: 'GET',
      url: `notes/${fileName}`
    }
    const { data } = await useHttp(options);
    files.value = data;
  } catch (e) {
    console.log(e)
  }
}
onMounted(fetchFiles)
</script>

<template>
  <h2>上传文件</h2>
  <form :action=postUrl method="post" enctype="multipart/form-data">
    文件：<input type="file" name="details" />
    <hr />
    <button type="submit">提交</button>
  </form>
  <hr />
  <h2>文件列表</h2>
  <ul>
    <li v-for="file in files" :key="file" @click="getFiles(file)">{{ file }}</li>
  </ul>
</template>

<style scoped></style>async
