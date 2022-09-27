<template>
  <div class="bgcolor">
    <Header class="Header" />
    <router-view />
    <Footer class="Footer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { Header, Footer },
};
</script>

<style scoped>
.bgcolor {
  background-color: white;
}
</style>
