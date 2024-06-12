<script setup lang="ts">
const article = ref<object>();
const props = defineProps<{
  fileName: string;
}>();
const fetch = () => {
  debugGetArticles(props.fileName).then((res) => {
    article.value = res;
  });
};

onMounted(fetch);
</script>

<template>
  <div>{{ article }}</div>
</template>

<style lang="scss" scoped></style>
