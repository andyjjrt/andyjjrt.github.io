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
        to="https://www.facebook.com/andy.hung.7505/"
        target="_blank"
        aria-label="Facebook"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/andy-hung-245bb8184/"
        target="_blank"
        aria-label="LinkedIn"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/andyjjrt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
