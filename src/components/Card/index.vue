<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchFileByName, fileWithNoExtension } from '@/utils/file'
interface IProps {
  fileName: string
}

const props = defineProps<IProps>()
const content = ref<string>()

const fetchFile = async () => {
  try {
    const fileWithNoExt = fileWithNoExtension(props.fileName)
    const data = await fetchFileByName(fileWithNoExt)
    content.value = data
  } catch (e) {
    console.error(e)
  }
}
onMounted(fetchFile)
</script>
<template>
  <h2>{{ fileName }}</h2>
  <div class="card">{{ content }}</div>
</template>

<style coped>
.card {
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
