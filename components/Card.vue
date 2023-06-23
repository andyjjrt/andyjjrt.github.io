<template>
  <div class="card w-auto grow bg-base-300 shadow-xl">
    <div class="card-body gap-0" :class="class">
      <h2 class="card-title text-2xl font-bold">{{ title }}</h2>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string;
  class?: string;
}>(), {
  title: "",
  class: ""
})
</script>
