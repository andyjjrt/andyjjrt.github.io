<template>
  <div class="flex gap-2 items-center">
    <img :src="iconUrl" class=" w-8 h-8" />
    <span>{{ title }}</span>
  </div>
  
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string;
  title: string;
}>(), {
  icon: "",
  title: ""
})

const iconUrl = computed(() => {
  return props.icon === "" ? "" : `https://skillicons.dev/icons?i=${props.icon}`
})
</script>