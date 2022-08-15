<template>
  <header-layout></header-layout>
  <router-view />
  <footer-layout></footer-layout>
  <div class="dimmed" v-if="dimed"></div>
</template>
<script>
import HeaderLayout from "@/layout/HeaderLayout.vue";
import FooterLayout from "@/layout/FooterLayout.vue";
export default {
  data() {
    return {
      dimed: false,
    };
  },
  components: {
    HeaderLayout,
    FooterLayout,
  },
  mounted() {
    this.$router.replace("main");
  },
};
</script>
<style lang="scss">
.dimmed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.4);
  z-index: 10;
}
</style>
