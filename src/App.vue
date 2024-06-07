<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchFileAll, uploadFile } from './utils/file';
import Card from './components/Card/index.vue'

const showfile = ref<boolean>(false)
const filename = ref<string>('')
const selectedFile = ref<File>()
const existFiles = ref<string[]>([])

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files) {
    console.log(target.files)
    selectedFile.value = target.files[0]
  }
}

const handleUpload = async () => {
  if (selectedFile.value) {
    await uploadFile(selectedFile.value)
    fetchFiles()
  }
}

const fetchFiles = async () => {
  existFiles.value = await fetchFileAll()
}

onMounted(fetchFiles)

const handleClick = (fileName: string) => {
  filename.value = fileName
  showfile.value = true
}
</script>

<template>
  <h2>
    上传文件
  </h2>
  <hr />
  <form @submit.prevent="handleUpload">
    文件名<input type="file" @change="handleFileChange" />
    <hr />
    <button>上传</button>
  </form>
  <h2 class="btn" @click="() => {
    showfile = false
  }">
    已上传文件列表
  </h2>
  <hr />
  <ul v-if="!showfile">
    <li class="btn" v-for="file in existFiles" :key="file" @click="handleClick(file)">{{ file }}</li>
  </ul>
  <Card v-else :fileName="filename" />
</template>

<style scoped>
.btn:hover {
  cursor: pointer;
}
</style>
