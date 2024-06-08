<script setup lang="ts">
import { ref, onMounted } from 'vue'
interface IProps {
  articleName: string
}
defineProps<IProps>()

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
const color1 = ref(randomColor());
const color2 = ref(randomColor());

onMounted(() => {
  color1.value = randomColor();
  color2.value = randomColor();
});

const onClick = () => {
  console.log('click')
}
</script>
<template>
  <div class="card" :style="{ background: `linear-gradient(to right, ${color1}, ${color2})` }" @click="onClick">
    <h2>{{ articleName }}</h2>
    <div class="card_item">
      <div class="card_tag">标签</div>
      <div class="card_date">日期</div>
    </div>
  </div>
</template>

<style coped>
.card {
  border-radius: 15px;
  padding: 20px;
  color: white;
  width: 800px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

.card:hover {
  cursor: pointer;
}

.card h2 {
  font-size: 20px;
}

.card_item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
}

.card_tag,
.card_date {
  font-size: 12px;
}
</style>
