<template>
  <a
    :href="githubUrl"
    target="_blank"
    class="hover:shadow-sm hover:md:shadow-xl transition-shadow rounded-2xl dark:bg-base-100 flex items-center"
  >
    <NuxtImg
      v-if="display"
      preload
      provider="GithubStatus"
      src="/api/pin"
      :modifiers="modifiers"
      class="rounded-2xl h-32"
    />
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: string;
    repo: string;
    theme?: string;
  }>(),
  {
    user: "andyjjrt",
    repo: "andyjjrt.github.io",
  }
);

const { colorSchema } = useTheme();
const colorMode = useColorMode();
const display = ref(false);

const modifiers = ref({
  username: props.user,
  repo: props.repo,
  bg_color: "",
  text_color: "",
});

const githubUrl = computed(() => {
  return "https://github.com/" + props.user + "/" + props.repo;
});

onMounted(() => {
  modifiers.value.bg_color = colorSchema(colorMode.value)["base-100"].replace(
    "#",
    ""
  );
  modifiers.value.text_color = colorSchema(colorMode.value)[
    "base-content"
  ].replace("#", "");
  display.value = true;
});

watch(
  () => colorMode.value,
  (val) => {
    if (val) {
      modifiers.value.bg_color = colorSchema(colorMode.value)[
        "base-100"
      ].replace("#", "");
      modifiers.value.text_color = colorSchema(colorMode.value)[
        "base-content"
      ].replace("#", "");
    }
  }
);
</script>
