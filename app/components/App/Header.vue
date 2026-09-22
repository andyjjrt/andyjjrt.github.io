<template>
  <UHeader title="Andy" mode="slideover">
    <template #title>
      <!-- <Logo class="h-6 w-auto" /> -->
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path == "/"
  },
  {
    label: 'Status',
    to: '/status',
    active: route.path.startsWith("/status")
  },
  {
    label: 'Slides',
    to: 'https://slidev.andyjjrt.cc',
    target: '_blank'
  }
])
</script>
