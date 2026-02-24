<template>
  <UPageCard
    title="Github Activities"
    variant="soft"
    :ui="{ body: 'flex-1 w-full' }"
  >
    <template #description>
      <div class="grid md:grid-cols-2 gap-6">
        <img
          src="https://raw.githubusercontent.com/andyjjrt/andyjjrt/refs/heads/main/profile/stats.svg"
        />
        <img
          src="https://raw.githubusercontent.com/andyjjrt/andyjjrt/refs/heads/main/profile/language.svg"
        />
      </div>
    </template>
  </UPageCard>
</template>
