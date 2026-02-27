<template>
  <UHeader title="Andy" :toggle="false">
    <template #title>
      <!-- <Logo class="h-6 w-auto" /> -->
    </template>

    <template #right>
      <UButton
        to="/status"
        variant="ghost"
        color="neutral"
        icon="i-lucide-trending-up"
      >
        Status
      </UButton>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
