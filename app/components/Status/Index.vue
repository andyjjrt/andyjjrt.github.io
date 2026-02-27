<template>
  <UCard class="h-full transition-all duration-200 hover:shadow-md">
    <template #header>
      <div class="flex justify-between items-center gap-4">
        <div class="flex items-center gap-3">
          <UIcon v-if="service.status === 'up'" name="i-lucide-trending-up" class="text-success w-5 h-5" />
          <UIcon v-else name="i-lucide-trending-down" class="text-error w-5 h-5" />
          <h2 class="font-medium text-lg m-0">{{ service.name }}</h2>
        </div>
        <UBadge v-if="service.status === 'up'" :label="service.uptimeMonth" color="success" variant="soft" size="sm" />
        <UBadge v-else label="Down" color="error" variant="soft" size="sm" />
      </div>
    </template>

    <div class="relative chart-container">
      <VisXYContainer :data="chartData" :height="64" :padding="{ top: 0, bottom: 8, left: 0, right: 0 }" class="w-full">
        <VisStackedBar :x="x" :y="y" :color="color" :barPadding="0.25" :roundedCorners="2" />
        <VisTooltip :triggers="triggers" />
      </VisXYContainer>
    </div>

    <div class="flex justify-between mt-4 text-xs font-medium text-gray-500 dark:text-gray-400">
      <span>{{ MAX_DAYS }} days ago</span>
      <span>Today</span>
    </div>
  </UCard>

</template>

<script setup lang="ts">
import { VisXYContainer, VisStackedBar, VisTooltip } from '@unovis/vue'
import yaml from 'js-yaml'
import type { ServiceStatus, ServiceSummary } from './status'
import { StackedBar } from '@unovis/ts'

const props = defineProps<{
  service: ServiceStatus
}>()

const { status, data: summary } = await useFetch(`https://raw.githubusercontent.com/andyjjrt/status/refs/heads/master/history/${props.service.slug}.yml`, {
  server: false,
  transform: (value: string) => {
    return yaml.load(value) as ServiceSummary
  }
})

const isSmallScreen = useMediaQuery('(max-width: 640px)')
const MAX_DAYS = computed(() => isSmallScreen.value ? 30 : 90)

const chartData = computed(() => {
  const data = []

  const endDate = new Date(summary.value!.lastUpdated)
  const startDate = new Date(summary.value!.startTime)

  // Normalize the start date to midnight for accurate day-to-day comparison
  startDate.setHours(0, 0, 0, 0)

  // Always iterate exactly 30 times
  for (let i = MAX_DAYS.value - 1; i >= 0; i--) {
    const d = new Date(endDate)
    d.setDate(d.getDate() - i)

    // Normalize iterated date to midnight for comparison
    const compareDate = new Date(d)
    compareDate.setHours(0, 0, 0, 0)

    const year = new Date(d).getFullYear()
    const month = String(new Date(d).getMonth() + 1).padStart(2, '0')
    const day = String(new Date(d).getDate()).padStart(2, '0')
    const dateKey = `${year}-${month}-${day}`

    let currentStatus: number
    let minsDown = 0

    // Check if this specific day occurred before monitoring started
    if (compareDate.getTime() < startDate.getTime()) {
      currentStatus = -1 // -1 represents "Not Monitored" / Empty
    } else {
      minsDown = props.service.dailyMinutesDown?.[dateKey] || 0
      currentStatus = minsDown > 0 ? 0 : 1 // 0 = Down, 1 = Up
    }

    data.push({
      dateKey,
      dateStr: new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric' }).format(d),
      status: currentStatus,
      minutesDown: minsDown,
      value: 1 // Fixed height for the bar
    })
  }
  return data
})

const x = (d: any, i: number) => i
const y = [(d: any) => d.value]
const color = (d: any) => {
  if (d.status === 1) return 'var(--ui-success)'
  if (d.status === 0) return 'var(--ui-error)'
  return 'var(--ui-bg-elevated)'
}
const triggers = {
  [StackedBar.selectors.bar]: (d: any) => {
    if (d.datum.status === 1) return `${d.datum.dateStr}: Online`
    if (d.datum.status === 0) return `${d.datum.dateStr}: Down for ${d.datum.minutesDown} minutes`
    return `${d.datum.dateStr}: No Data`
  }
}
</script>

<style scoped>
/* Unovis applies default styling to the tooltip container that we need to override for dark mode */
.chart-container {
  --vis-tooltip-background-color: var(--ui-bg-muted);
  --vis-tooltip-border-color: var(--ui-border);
  --vis-tooltip-text-color: var(--ui-text);
  --vis-tooltip-padding: 2px 4px;
}
</style>