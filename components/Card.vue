<template>
  <div class="card w-auto grow bg-base-300 shadow-xl">
    <div class="card-body" :class="classList">
      <h2 class="card-title text-2xl font-bold" v-if="title">{{ title }}</h2>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const classList = computed(() => {
      if(props.class === "") return [];
      return props.class.split(" ");
    })
    return { ...props, classList }
  }
};
</script>
