<script setup lang="ts">
export interface SortMethod {
  name: string;
  action: string;
}

const props = defineProps<{
  tagAction: string;
  timeAction: string;
}>()

const tagAction = ref(props.tagAction);

const timeAction = ref(props.timeAction);

const emit = defineEmits<{
  (e: 'sort', v: SortMethod): void
}>()

const onClick = (method: SortMethod) => {
  emit('sort', method);
};
</script>
<template>
  <div class="sort">
    <div class="sort-item">
      <div class="sort-tag">
        tag
        <div v-if="tagAction === 'up'" class="sort-btn" @click="onClick({ name: 'tag', action: 'up' })">up</div>
        <div v-else class="sort-btn" @click="onClick({ name: 'tag', action: 'down' })">down</div>
      </div>
      <div class="sort-time">
        time
        <div v-if="timeAction === 'up'" class="sort-btn" @click="onClick({ name: 'time', action: 'up' })">up</div>
        <div v-else class="sort-btn" @click="onClick({ name: 'time', action: 'down' })">down</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sort {
  @apply w-full h-[35px];
  @apply flex justify-end;

  &-item {
    @apply flex gap-4;
  }

  &-tag {
    @apply flex gap-2 items-center;
    @apply text-blue-300;
  }

  &-time {
    @apply flex gap-2 items-center;
    @apply text-purple-300;
  }
}

.sort-btn {
  @apply cursor-pointer;
}

.sort-btn:hover {
  @apply text-gray-300;
}
</style>
