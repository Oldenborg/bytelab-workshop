<script setup lang="ts">
interface Props {
  success: boolean;
  danger: boolean;
}
defineProps<Props>();
</script>
<template>
  <button class="round-button" :class="{ success, danger }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.round-button {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  background: lightslategray;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #fff;

  &.success {
    background: #63d790;
  }

  &.danger {
    background: #ee4f41;
  }

  &:hover {
    background: #333;

    &.success {
      background: #5bbd82;

      &:active {
        background: #63d790;
      }
    }
    &.danger {
      background: #c43b2d;

      &:active {
        background: #ee4f41;
      }
    }
  }
}
</style>
