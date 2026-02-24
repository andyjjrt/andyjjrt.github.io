<template>
  <div class="flex gap-2 items-center">
    <ClientOnly>
      <UIcon :name="iconName" class="size-5" />
      <template #fallback>
        <UIcon name="i-lucide-gavel" class="size-5" />
      </template>
    </ClientOnly>
    <span class="grow">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string;
    name: string;
    colorModeIcon?: boolean;
  }>(),
  {
    colorModeIcon: false,
  },
);

const colorMode = useColorMode();

const iconName = computed(
  () => `${props.icon}${props.colorModeIcon ? "-" + colorMode.value : ""}`,
);
</script>
