<template>
  <Card class="p-4">
    <div class="flex items-center h-full bg-base-100 rounded-md">
      <NuxtImg
        v-if="display"
        preload
        provider="GithubStatus"
        src="/api"
        :modifiers="modifiers"
        class="h-full min-h-16 md:min-h-[96px] lg:min-h-[192px]"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: string;
    theme?: string;
  }>(),
  {
    user: "andyjjrt",
  }
);

const { colorSchema } = useTheme();
const colorMode = useColorMode();
const display = ref(false);

const modifiers = ref({
  username: props.user,
  bg_color: "",
  text_color: "",
});

const githubUrl = computed(() => {
  return "https://github.com/" + props.user;
});

watch(
  () => colorMode.preference,
  (val) => {
    if (val) {
      display.value = true;
      modifiers.value.bg_color = colorSchema(colorMode.preference)[
        "base-100"
      ].replace("#", "");
      modifiers.value.text_color = colorSchema(colorMode.preference)[
        "base-content"
      ].replace("#", "");
    }
  }
);
</script>
