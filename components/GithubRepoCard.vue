<template>
  <a :href="githubUrl" target="_blank" class="shadow-sm md:shadow-2xl rounded-2xl">
    <ClientImg :src="imgUrl" class="w-full rounded-2xl" />
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
