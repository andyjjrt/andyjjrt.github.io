<template>
  <a :href="githubUrl" target="_blank" class="shadow-sm md:shadow-xl rounded-2xl">
    <ClientImg :src="imgUrl" class="rounded-2xl max-h-52" />
  </a>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: "",
    },
    repo: {
      type: String,
      default: "",
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const imgUrl = computed(() => {
      return (
        "https://github-readme-stats-jrzz.vercel.app/api/pin/?username=" +
        props.user +
        "&repo=" +
        props.repo +
        (props.dark ? "&theme=dark" : "")
      );
    });

    const githubUrl = computed(() => {
      return "https://github.com/" + props.user + "/" + props.repo;
    });

    return { ...props, imgUrl, githubUrl };
  },
};
</script>
