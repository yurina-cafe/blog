<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { ActionType, ClickType } from '~/types/sort';

export interface SortMethod {
  clickType: ClickType;
  action: ActionType;
}

const props = defineProps<{
  sortRule: SortMethod;
}>();
const sortRule = ref(props.sortRule)

const emit = defineEmits<{
  (e: 'sort', v: SortMethod): void;
}>();

const changeAction = (action: ActionType) => action === ActionType.Up ? ActionType.Down : ActionType.Up;

// 点击同一个tag或time时，切换排序方式
const onClick = (click: ClickType) => {
  sortRule.value.action = sortRule.value.clickType === click ? changeAction(sortRule.value.action) : sortRule.value.action;
  sortRule.value.clickType = click;
  emit('sort', sortRule.value);
};
</script>

<template>
  <div class="sort">
    <div class="sort-item">
      <div class="sort__condition">
        <div :class="['sort-tag', { 'picked': sortRule.clickType === ClickType.Tag }]" @click="onClick(ClickType.Tag)">
          tag</div>
        <div :class="['sort-time', { 'picked': sortRule.clickType === ClickType.Time }]"
          @click="onClick(ClickType.Time)">time
        </div>
        <div>{{ sortRule.action === ActionType.Up ? 'up' : 'down' }}</div>
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
