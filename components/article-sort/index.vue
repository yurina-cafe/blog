<script setup lang="ts">
import { ActionType, ClickType } from '~/types/sort';

export interface SortMethod {
  tagAction: ActionType;
  timeAction: ActionType;
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
  return action === ActionType.Up ? ActionType.Down : ActionType.Up;
};

const onClick = (type: ClickType) => {
  if (type === ClickType.Tag) {
    tagAction.value = changeAction(tagAction.value);
  } else if (type === ClickType.Time) {
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
        <div class="sort-btn" @click="onClick(ClickType.Tag)">
          <div v-if="tagAction === ActionType.Up">
            up
          </div>
          <div v-else>
            down
          </div>
        </div>
      </div>
      <div class="sort-time">
        time
        <div class="sort-btn" @click="onClick(ClickType.Time)">
          <div v-if="timeAction === ActionType.Up">
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
