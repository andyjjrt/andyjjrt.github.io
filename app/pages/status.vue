<template>
  <UPage>
    <!-- Header Section -->
    <UPageHeader title="Service Status" description="Uptime tracker powered by Uptime.js">
      <template #headline>
        <UBadge icon="i-lucide-loader" size="lg" color="neutral" variant="soft" v-if="!data">
          Loading
        </UBadge>
        <UBadge icon="i-lucide-badge-check" size="lg" color="success" variant="soft" v-else-if="downCount == 0">
          All services Operational
        </UBadge>
        <UBadge icon="i-lucide-badge-x" size="lg" color="error" variant="soft" v-else>
          {{ downCount }} services Down
        </UBadge>
      </template>
    </UPageHeader>

    <!-- Status List -->
    <UPageBody>
      <div class="flex flex-col gap-6">
        <Status v-for="service in data" :key="service.slug" :service="service"
          class="transition-all duration-200 hover:shadow-lg w-full" />
      </div>

      <!-- Empty State -->
      <div v-if="!data || data.length === 0" class="flex flex-col items-center justify-center py-12">
        <UIcon name="i-lucide-loader" class="w-8 h-8 animate-spin text-gray-400" />
        <p class="mt-4 text-gray-500 dark:text-gray-400">Loading status...</p>
      </div>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
import type { ServiceList } from '~/components/Status/status'

// Set page metadata
useHead({
  title: 'Service Status | andyjjrt',
  meta: [
    { name: 'description', content: 'Uptime tracker powered by Uptime.js' }
  ]
})

const { data, pending } = await useFetch('https://raw.githubusercontent.com/andyjjrt/status/refs/heads/master/history/summary.json', {
  server: false,
  transform: (value: string) => JSON.parse(value) as ServiceList
})

const onlineCount = computed(() => {
  if (!data.value) return 0
  return data.value.filter(s => s.status === 'up').length
})

const downCount = computed(() => {
  if (!data.value) return 0
  return data.value.filter(s => s.status === 'down').length
})
</script>
