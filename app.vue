<template>
  <div>
    <NavBar />
    <div class="container mx-auto md:px-10 px-5">
      <div class="flex justify-center avatar py-5 md:py-10">
        <div class="w-48 rounded-full">
          <img src="https://github.com/andyjjrt.png?size=400" />
        </div>
      </div>
      <div>
        <h1 class="text-4xl font-bold text-center">Hi, I am Andy</h1>
        <div class="py-6 flex flex-col gap-5 md:gap-10">
          <Card title="Intro">
            <div class="mt-3">
              嗨，我是洪晙宸，是個全端業餘工程師，目前開始接觸大型語言模型和推薦系統。<br />
              平常寫些小小專案，也喜歡研究新技術，包括但不限於網頁技術。<br />
            </div>
          </Card>
          <Card title="Profile">
            <ul class="mt-3">
              <li>國立陽明交通大學資訊工程研究所 (NYCUCS)</li>
              <li>國立政治大學資訊科學系 (NCCUCS)</li>
              <li>GDSC NCCU 22' Core Team</li>
            </ul>
          </Card>
          <div class="flex md:grid grid-cols-2 flex-col gap-6">
            <Card title="Languages">
              <div class="flex flex-col gap-2 mt-3">
                <SkillIcon icon="c" title="C" :dark="isDark" />
                <SkillIcon icon="cpp" title="C++" :dark="isDark" />
                <SkillIcon icon="py" title="Python" :dark="isDark" />
                <SkillIcon icon="ts" title="Typescript" :dark="isDark" />
                <SkillIcon icon="js" title="Javascript" :dark="isDark" />
                <SkillIcon icon="vue" title="Vue" :dark="isDark" />
                <SkillIcon icon="nuxt" title="Nuxt 3" :dark="isDark" />
                <SkillIcon icon="react" title="React" :dark="isDark" />
                <SkillIcon icon="rust" title="Rust" :dark="isDark" />
              </div>
            </Card>
            <Card title="Tools">
              <div class="flex flex-col gap-2 mt-3">
                <SkillIcon icon="vscode" title="VS Code" :dark="isDark" />
                <SkillIcon icon="github" title="Github" :dark="isDark" />
                <SkillIcon
                  icon="githubactions"
                  title="Github Actions"
                  :dark="isDark"
                />
                <SkillIcon icon="nginx" title="Nginx" :dark="isDark" />
                <SkillIcon icon="linux" title="Linux" :dark="isDark" />
                <SkillIcon icon="docker" title="Docker" :dark="isDark" />
              </div>
            </Card>
          </div>
          <Card class="pb-4 px-4 lg:px-6 lg:pb-6">
            <template v-slot:title>
              <h2 class="card-title text-2xl font-bold px-4 pb-3">
                Github Activities
              </h2>
            </template>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GithubStatCard user="andyjjrt" />
              <GithubLanguageCard user="andyjjrt" />
            </div>
          </Card>
          <Card class="pb-4 px-4 lg:px-6 lg:pb-6">
            <template v-slot:title>
              <h2 class="card-title text-2xl font-bold px-4 pb-3">Projects</h2>
            </template>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <GithubRepoCard user="andyjjrt" repo="ojFE" :dark="isDark" />
              <GithubRepoCard user="GDSC-wallet" repo="wallet" :dark="isDark" />
              <GithubRepoCard user="andyjjrt" repo="oj-cli" :dark="isDark" />
              <GithubRepoCard
                user="andyjjrt"
                repo="NCCUCourse"
                :dark="isDark"
              />
              <GithubRepoCard user="andyjjrt" repo="dcbot" :dark="isDark" />
              <GithubRepoCard user="andyjjrt" repo="slides" :dark="isDark" />
              <GithubRepoCard
                user="andyjjrt"
                repo="slidev-theme-andyjjrt"
                :dark="isDark"
              />
            </div>
          </Card>
        </div>
      </div>
      <div class="hero min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-lg">
            <h1 class="text-2xl font-bold">Learn more about me</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <a
                href="https://www.facebook.com/andy.hung.7505/"
                target="_about"
                class="btn btn-primary"
              >
                <Icon name="mingcute:facebook-fill" class="h-6 w-6" />
                Facebook
              </a>
              <a href="https://github.com/andyjjrt" target="_about" class="btn">
                <Icon name="mingcute:github-fill" class="h-6 w-6" />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/chun-chen-hung-245bb8184/"
                target="_about"
                class="btn btn-primary"
              >
                <Icon name="mingcute:linkedin-fill" class="h-6 w-6" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    const imgUrl = computed(() => {
      return (url) => {
        return url + "&theme=one_dark_pro";
      };
    });

    const isDark = computed(() => {
      return true;
    });

    return {
      ...props,
      imgUrl,
      isDark,
    };
  },
};
</script>

<style scoped lang="postcss">
.languages {
  & li {
    @apply flex items-center;
    & i {
      @apply mr-3;
    }
  }
}
</style>
