<template>
  <UPage>
    <div class="flex flex-col gap-6 py-8">
      <img
        src="https://github.com/andyjjrt.png?size=400"
        class="w-24 rounded-full self-center"
      />
      <h1 class="text-4xl font-bold text-center">Hi, I'm Andy</h1>
      <ProfileIntro />
      <ProfileExperience />
      <ProfileSkills />
      <ProfileGithubStatus />
    </div>
  </UPage>
</template>

<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    to: "/docs/getting-started",
    icon: "i-lucide-square-play",
  },
  {
    label: "Learn more",
    to: "/docs/getting-started/theme/design-system",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>
