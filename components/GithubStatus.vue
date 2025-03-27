<template>
  <Card title="Github Activities">
    <div class="flex flex-col xs:grid xs:grid-cols-2 gap-4">
      <div class="rounded-2xl bg-base-100 xs:h-24 sm:h-36 md:h-48">
        <NuxtImg
          provider="GithubStatus"
          src="/api"
          :modifiers="statModifier"
          class="w-full h-full"
        />
      </div>
      <div class="rounded-2xl bg-base-100 xs:h-24 sm:h-36 md:h-48">
        <NuxtImg
          provider="GithubStatus"
          src="/api/top-langs"
          :modifiers="langModifier"
          class="w-full h-full"
        />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
const statModifier = {
  username: "andyjjrt",
  show_icons: true,
  theme: "transparent",
  hide_border: true,
};

const langModifier = {
  username: "andyjjrt",
  theme: "transparent",
  layout: "compact",
  card_width: "400px",
  hide: "html,Lua,C,c%2B%2B",
};
</script>
