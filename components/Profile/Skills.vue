<template>
  <div class="grid md:grid-cols-2 gap-6">
    <UPageCard title="Languages" variant="soft">
      <template #description>
        <div class="flex flex-col gap-2">
          <ProfileSkill icon="i-skill-icons-c" name="C" />
          <ProfileSkill icon="i-skill-icons-cpp" name="C++" />
          <ProfileSkill
            icon="i-skill-icons-python"
            name="Python"
            :color-mode-icon="true"
          />
          <ProfileSkill icon="i-skill-icons-typescript" name="Typescript" />
          <ProfileSkill icon="i-skill-icons-javascript" name="Javascript" />
          <ProfileSkill
            icon="i-skill-icons-vuejs"
            name="Vue"
            :color-mode-icon="true"
          />
          <ProfileSkill
            icon="i-skill-icons-nuxtjs"
            name="Nuxt 3"
            :color-mode-icon="true"
          />
          <ProfileSkill
            icon="i-skill-icons-react"
            name="React"
            :color-mode-icon="true"
          />
        </div>
      </template>
    </UPageCard>
    <UPageCard title="Tools" variant="soft">
      <template #description>
        <div class="flex flex-col gap-2">
          <ProfileSkill
            icon="i-skill-icons-github"
            name="Github"
            :color-mode-icon="true"
          />
          <ProfileSkill
            icon="i-skill-icons-githubactions"
            name="Github Actions"
            :color-mode-icon="true"
          />
          <ProfileSkill icon="i-skill-icons-nginx" name="Nginx" />
          <ProfileSkill icon="i-skill-icons-docker" name="Docker" />
          <ProfileSkill icon="i-skill-icons-kubernetes" name="Kubernetes" />
          <ProfileSkill
            icon="i-skill-icons-linux"
            name="Linux"
            :color-mode-icon="true"
          />
          <ProfileSkill
            icon="i-skill-icons-vite"
            name="Vite"
            :color-mode-icon="true"
          />
          <ProfileSkill
            icon="i-skill-icons-tailwindcss"
            name="Tailwind CSS"
            :color-mode-icon="true"
          />
        </div>
      </template>
    </UPageCard>
  </div>
</template>
