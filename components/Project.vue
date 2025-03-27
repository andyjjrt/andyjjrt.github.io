<template>
  <li class="list-row px-0">
    <!-- <div class="h-10 flex items-center">
      <Icon name="mdi:git-repository" />
    </div> -->

    <div class="list-col-grow flex flex-col">
      <div class="min-h-10 flex items-center gap-2">
        <a class="text-lg grow">{{ title }}</a>
        <a
          class="btn btn-square btn-ghost btn-sm not-hover:opacity-40 transition"
          v-if="website"
          target="_blank"
          :href="website"
        >
          <Icon name="mdi:globe" size="20px" />
        </a>
        <a
          class="btn btn-square btn-ghost btn-sm not-hover:opacity-40 transition"
          v-if="github"
          target="_blank"
          :href="github"
        >
          <Icon name="mdi:github" size="20px" />
        </a>
      </div>
      <div class=" overflow-x-auto">
        <div class="flex gap-2">
          <div
            class="badge badge-soft badge-primary badge-sm shrink-0"
            v-for="lang in languages"
          >
            {{ lang }}
          </div>
        </div>
      </div>

      <p class="text-xs mt-2">
        {{ description }}
      </p>
    </div>
    <div class=" mx-h-20">
      <NuxtImg
        v-if="screenshot"
        :src="screenshot"
        class="hidden sm:block sm:max-w-50 aspect-auto"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  screenshot?: string;
  title: string;
  languages: string[];
  description: string;
  website?: string;
  github?: string;
}>();
</script>
