<template>
  <button class="round-button">
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

  &:hover {
    background: #333;
  }
}
</style>
