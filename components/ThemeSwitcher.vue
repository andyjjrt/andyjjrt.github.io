<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-square">
      <Icon name="mingcute:color-filter-line" class="h-6 w-6" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex-nowrap overflow-auto"
    >
      <li v-for="theme in themes">
        <a class="rounded-md" @click="changeTheme(theme)">
          {{ theme }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { themes } = useTheme();

const changeTheme = (theme: string) => {
  colorMode.preference = theme;
};
</script>
