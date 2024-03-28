<template>
  <NuxtImg :src="src" :class="class" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
});
</script>
