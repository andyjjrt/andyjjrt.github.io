<template>
  <UFooter>
    <template #left>
      <UIcon name="i-custom-logo" class="size-5" />
      <p class="text-muted text-sm">
        © Copyright {{ new Date().getFullYear() }} andyjjrt
      </p>
    </template>
    <template #right>
      <UButton
        icon="i-simple-icons-facebook"
        color="neutral"
        variant="ghost"
        to="/links/facebook"
        target="_blank"
        aria-label="Facebook"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="/links/linkedin"
        target="_blank"
        aria-label="LinkedIn"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="/links/github"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
