<script setup lang="ts">
const route = useRoute();
const { links } = useLinks();

const targetUrl = links[route.params.id as string] || "/";

useHead({
  title: `${route.params.id} | andyjjrt`,
  meta: [{ "http-equiv": "refresh", content: `0;url=${targetUrl}` }],
  script: [{ innerHTML: `window.location.replace("${targetUrl}")` }],
});
</script>

<template>
  <p>If you are not redirected, <a :href="targetUrl">click here</a>.</p>
</template>
