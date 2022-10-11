<script setup lang="ts">
interface Props {
  title: string;
  image: string;
}
defineProps<Props>();
</script>

<template>
  <div>{{ title }}</div>
  <img :src="image" />
</template>
