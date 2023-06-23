<template>
  <div class="flex gap-2 items-center">
    <ClientImg :src="iconUrl" class="w-8 h-8" />
    <span>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string;
    title: string;
    dark?: boolean;
  }>(),
  {
    icon: "",
    title: "",
    dark: false,
  }
);

const iconUrl = computed(() => {
  return props.icon === ""
    ? ""
    : `https://skillicons.dev/icons?i=${props.icon}&theme=${
        props.dark ? "dark" : "light"
      }`;
});
</script>
