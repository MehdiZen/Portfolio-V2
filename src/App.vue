<template>
  <div class="container">
    <div class="flags">
      <span class="fi fi-fr ml-4 cursor-pointer flag"></span >
      <span class="fi fi-gb ml-4 cursor-pointer flag"></span >
    </div>
    <header>
      <Header />
    </header>
    <section>
      <Intro />
    </section>
    <section>
      < />
    </section>
  </div>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "../src/components/views/Header.vue";
import Intro from "../src/components/views/Intro.vue";
export default {
  components: {
    Header,
    Intro,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  scroll-snap-type: y mandatory; 
  overflow-y: scroll; 
  scroll-behavior: smooth; 
  margin: 0;
  padding: 0;
}

header, section {
  height: 100vh; 
  scroll-snap-align: start; 
}
.flags{
  position: absolute;
  top: 2px;
  left: 0;
  z-index: 10;
  font-size: 22px;
}
.flag:hover{
  font-size: 24px;
}
</style>