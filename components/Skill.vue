<template>
  <div class="flex gap-2 items-center">
    <Icon :name="icon" />
    <span class="grow">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
}>();
</script>
