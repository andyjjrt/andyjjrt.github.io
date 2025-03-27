<template>
  <label class="swap swap-rotate">
    <input type="checkbox" v-model="value" />

    <Icon
      name="material-symbols:moon-stars-rounded"
      class="swap-off fill-current"
    />
    <Icon
      name="material-symbols:sunny-rounded"
      class="swap-on fill-current"
    />
  </label>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "sunset",
  valueLight: "nord",
});

const toggleDark = useToggle(isDark);

const value = computed({
  get: () => isDark.value,
  set: (val) => {
    toggleDark();
  },
});
</script>
