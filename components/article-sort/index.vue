<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { ActionType, ClickType } from '~/types/sort';

export interface SortMethod {
  clickType: ClickType;
  action: ActionType;
}

const props = defineProps<SortMethod>();
const clickType = ref(props.clickType);
const action = ref(props.action);
const emit = defineEmits<{
  (e: 'sort', v: SortMethod): void;
}>();

const changeAction = (action: ActionType) => action === ActionType.Up ? ActionType.Down : ActionType.Up;

const onClick = (click: ClickType) => {
  action.value = clickType.value === click ? changeAction(action.value) : action.value;
  clickType.value = click;
  emit('sort', { clickType: click, action: action.value });
};
</script>

<template>
  <div class="sort">
    <div class="sort-item">
      <div class="sort__condition">
        <div :class="['sort-tag', { 'picked': clickType === ClickType.Tag }]" @click="onClick(ClickType.Tag)">tag</div>
        <div :class="['sort-time', { 'picked': clickType === ClickType.Time }]" @click="onClick(ClickType.Time)">time
        </div>
        <div>{{ action === ActionType.Up ? 'up' : 'down' }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sort {
  @apply w-full h-[35px] flex justify-end;

  &-item {
    @apply flex gap-4;
  }

  &__condition {
    @apply flex gap-2 items-center;
  }

  &-tag,
  &-time {
    @apply cursor-pointer;
  }

  .picked {
    @apply text-blue-300;
    /* 如果picked样式相同，只需定义一次 */
  }
}
</style>
