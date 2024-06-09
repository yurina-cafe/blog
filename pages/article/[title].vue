<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const title = route.params.title;
</script>
<template>
  <div>
    <div>{{ title }}</div>
  </div>
</template>

<style coped></style>
