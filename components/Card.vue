<template>
  <div class="card bg-base-200 w-full card-md shadow-md rounded-2xl">
    <div class="card-body">
      <h2 class="card-title font-bold">{{ title }}</h2>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
