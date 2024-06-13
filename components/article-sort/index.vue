<script setup lang="ts">
export interface SortMethod {
  tagAction: string;
  timeAction: string;
}

const props = defineProps<SortMethod>()

const tagAction = ref(props.tagAction);

const timeAction = ref(props.timeAction);

const emit = defineEmits<{
  (e: 'sort', v: SortMethod): void
}>()

/**
 * description: change action
 */
const changeAction = (action: string) => {
  return action === 'up' ? 'down' : 'up';
};

const onClick = (type: 'tag' | 'time') => {
  if (type === 'tag') {
    tagAction.value = changeAction(tagAction.value);
  } else if (type === 'time') {
    timeAction.value = changeAction(timeAction.value);
  }
  emit('sort', { tagAction: tagAction.value, timeAction: timeAction.value });
};
</script>
<template>
  <div class="sort">
    <div class="sort-item">
      <div class="sort-tag">
        tag
        <div class="sort-btn" @click="onClick('tag')">
          <div v-if="tagAction === 'up'">
            up
          </div>
          <div v-else>
            down
          </div>
        </div>
      </div>
      <div class="sort-time">
        time
        <div class="sort-btn" @click="onClick('time')">
          <div v-if="timeAction === 'up'">
            up
          </div>
          <div v-else>
            down
          </div>
        </div>
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
