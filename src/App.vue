<template>
  <div class="container">
    <div class="flags">
      <span class="fi fi-fr mr-4 cursor-pointer flag" id="french"></span >
      <span class="fi fi-gb mr-4 cursor-pointer flag" id="english"></span >
    </div>
    <header>
      <Header />
    </header>
    <section>
      <Intro />
    </section>
    <section>
      <Stack />
    </section>
    <section>
      <Project />
    </section>
  </div>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from '@/components/views/Header.vue';
import Intro from '@/components/views/Intro.vue';
import Stack from "@/components/views/Stack.vue";
import Project from "@/components/views/Projects.vue"

export default {
  components: {
    Header,
    Intro,
    Stack,
    Project,
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
  top: 0;
  right: 0;
  z-index: 10;
  font-size: 22px;
}
.flag:hover{
  transform: scale(1.15);
  box-shadow: 0px 0px 5px #000000;

}
</style>