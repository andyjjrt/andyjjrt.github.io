<template>
  <div
    class="navbar sticky top-0 z-10"
    :class="
      display
        ? 'bg-base-100 backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md transition-opacity'
        : 'bg-transparent'
    "
  >
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" :class="{ hidden: !display }"
        >andyjjrt</a
      >
    </div>
    <div class="flex-none">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();

const display = computed(() => y.value > 300);

watch(y, (val) => {
  console.log(val);
});
</script>
