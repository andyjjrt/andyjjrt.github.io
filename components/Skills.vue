<template>
  <div class="flex flex-col xs:grid xs:grid-cols-2 gap-8 xs:gap-6 w-full">
    <Card title="Languages">
      <div class="flex flex-col gap-2">
        <Skill icon="skill-icons:c" name="C" />
        <Skill icon="skill-icons:cpp" name="C++" />
        <Skill icon="skill-icons:python-dark" name="Python" />
        <Skill icon="skill-icons:typescript" name="Typescript" />
        <Skill icon="skill-icons:javascript" name="Javascript" />
        <Skill icon="skill-icons:vuejs-dark" name="Vue" />
        <Skill icon="skill-icons:nuxtjs-dark" name="Nuxt 3" />
        <Skill icon="skill-icons:react-dark" name="React" />
      </div>
    </Card>
    <Card title="Tools">
      <div class="flex flex-col gap-2">
        <Skill icon="skill-icons:vscode-dark" name="VS Code" />
        <Skill icon="skill-icons:github-dark" name="Github" />
        <Skill icon="skill-icons:githubactions-dark" name="Github Actions" />
        <Skill icon="skill-icons:nginx" name="Nginx" />
        <Skill icon="skill-icons:docker" name="Docker" />
        <Skill icon="skill-icons:linux-dark" name="Linux" />
        <Skill icon="skill-icons:vite-dark" name="Vite" />
        <Skill icon="skill-icons:tailwindcss-dark" name="Tailwind Css" />
      </div>
    </Card>
  </div>
</template>
