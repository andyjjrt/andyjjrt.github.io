<template>
  <div
    class="hover:shadow-sm hover:md:shadow-xl transition-shadow rounded-2xl dark:bg-base-100 flex items-center"
  >
    <NuxtImg
      v-if="display"
      provider="GithubStatus"
      src="/api/top-langs"
      :modifiers="modifiers"
      class="rounded-2xl h-full min-h-16 md:min-h-[192px]"
    />
  </div>
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
  layout: "compact",
  card_width: "400px",
  hide: "html,Lua",
  bg_color: "",
  text_color: "",
});

const githubUrl = computed(() => {
  return "https://github.com/" + props.user;
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
