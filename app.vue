<template>
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
          嗨，我是洪晙宸，是個全端業餘工程師。<br />
          前端專攻Vue, Vuex, Vite，同時也會React, Redux，用過Vuetify, mui,
          bootstrap等UI libarary。<br />
          後端接觸較少，使用Express框架。<br />
          平常寫些小小專案，也喜歡研究新技術，包括但不限於網頁技術。
        </Card>
        <Card title="Profile">
          <ul>
            <li>國立政治大學資訊科學系 (NCCUCS)</li>
            <li>GDSC NCCU 22' Core Team</li>
          </ul>
        </Card>
        <div class="flex flex-col md:flex-row gap-5 md:gap-10">
          <Card title="Skills">
            <ul class="languages">
              <li><i class="devicon-vuejs-plain colored"></i>Vue</li>
              <li><i class="devicon-vuetify-line colored"></i>Vuetify</li>
              <li><i class="devicon-react-original colored"></i>React</li>
              <li><i class="devicon-jquery-plain colored"></i>Jquery</li>
              <li><i class="devicon-redux-original colored"></i>Redux</li>
              <li><i class="devicon-bootstrap-plain colored"></i>Bootstrap</li>
              <li><i class="devicon-html5-plain colored"></i>HTML</li>
              <li>
                <i class="devicon-javascript-plain colored"></i>Javascript
              </li>
              <li><i class="devicon-css3-plain colored"></i>CSS</li>
              <li>
                <i class="devicon-github-original colored block dark:hidden"></i
                ><i class="devicon-github-original hidden dark:block"></i>Github
              </li>
              <li><i class="devicon-c-plain colored"></i>C</li>
              <li><i class="devicon-cplusplus-plain colored"></i>C++</li>
              <li><i class="devicon-python-plain colored"></i>Python</li>
            </ul>
          </Card>
          <Card title="Learning">
            <ul class="languages">
              <li><i class="devicon-java-plain colored"></i>Java</li>
              <li><i class="devicon-dotnetcore-plain colored"></i>.NET</li>
              <li><i class="devicon-csharp-plain colored"></i>C#</li>
              <li><i class="devicon-docker-plain colored"></i>Docker</li>
            </ul>
          </Card>
        </div>
        <div class="flex flex-col md:flex-row gap-5 md:gap-10">
          <Card class="py-1 px-1 lg:px-5">
            <div class="mx-auto my-auto">
              <ClientImg
                :src="
                  imgUrl(
                    'https://github-readme-stats-jrzz.vercel.app/api?username=andyjjrt'
                  )
                "
              />
            </div>
          </Card>
          <Card class="py-1 px-1 lg:px-5">
            <div class="mx-auto my-auto">
              <ClientImg
                :src="
                  imgUrl(
                    'https://github-readme-stats-jrzz.vercel.app/api/top-langs?username=andyjjrt&layout=compact&hide=html,Lua'
                  )
                "
              />
            </div>
          </Card>
        </div>
        <Card class="pb-2 px-2 md:px-4 md:pb-4 lg:px-6 lg:pb-6">
          <template v-slot:title>
            <h2 class="card-title text-2xl font-bold px-6">Projects</h2>
          </template>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GithubRepoCard
              user="andyjjrt"
              repo="bootstrap-ojFE"
              :dark="isDark"
            />
            <GithubRepoCard user="GDSC-wallet" repo="wallet" :dark="isDark" />
            <GithubRepoCard user="andyjjrt" repo="oj-cli" :dark="isDark" />
            <GithubRepoCard user="andyjjrt" repo="wallet" :dark="isDark" />
            <GithubRepoCard user="andyjjrt" repo="bazaar" :dark="isDark" />
            <GithubRepoCard user="andyjjrt" repo="bazaar-data" :dark="isDark" />
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
              class="btn bg-blue-700 hover:bg-blue-800 border-none flex flex-row gap-1"
            >
              <i class="devicon-facebook-plain"></i>
              Facebook
            </a>
            <a
              href="https://github.com/andyjjrt"
              target="_about"
              class="btn bg-neutral-700 hover:bg-neutral-900 border-none flex flex-row gap-1"
            >
              <i class="devicon-github-original"></i>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/chun-chen-hung-245bb8184/"
              target="_about"
              class="btn bg-blue-700 hover:bg-blue-800 border-none flex flex-row gap-1"
            >
              <i class="devicon-linkedin-plain"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    const colorMode = useColorMode();

    const imgUrl = computed(() => {
      return (url) => {
        return url + (colorMode.value == "dark" ? "&theme=dark" : "");
      };
    });

    const isDark = computed(() => {
      return colorMode.value === "dark";
    });

    return {
      ...props,
      imgUrl,
      isDark,
      colorMode,
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
