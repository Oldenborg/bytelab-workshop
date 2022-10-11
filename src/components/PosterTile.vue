<script setup lang="ts">
interface Props {
  title: string;
}
defineProps<Props>();
</script>

<template>{{ title }}</template>
