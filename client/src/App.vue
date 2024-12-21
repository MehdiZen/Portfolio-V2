<template>
  <div class="container">
    <div class="audio-player">
    <audio ref="audio" :src="audioSrc" @ended="handleEnd" />
    <div class="controls">
      <transition name="fade">
      <span v-if="showMessage" class="message">{{ message }}</span>
      </transition>
      <button @click="toggleAudio">
        <i :class="isPlaying ? 'pi pi-pause' : 'pi pi-play'"></i>
      </button>
      </div>
  </div>
    <!-- <div class="flags">
      <span class="fi fi-fr mr-4 cursor-pointer flag" id="french"></span>
      <span class="fi fi-gb mr-4 cursor-pointer flag" id="english"></span>
    </div> -->
    <header>
      <Header />
    </header>
    <section>
      <Intro/>
    </section>
    <section>
      <Stack />
    </section>
    <section>
      <Project />
    </section>
    <section>
      <Contact />
    </section>
  </div>
  <!-- <RouterView /> -->
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/views/Header.vue";
import Intro from "@/components/views/Intro.vue";
import Stack from "@/components/views/Stack.vue";
import Contact from "@/components/views/Contact.vue";
import Project from "@/components/views/Projects.vue";
import songtheme from "./assets/songtheme.mp3";

export default {
  components: {
    Header,
    Intro,
    Stack,
    Project,
    Contact,
  },

  data() {
    
    return {
      audioSrc: songtheme,
      isPlaying: false,
      showMessage: true, 
      message: "Pour une exploration en musique",
    };
  },
  mounted(){
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  },
  methods: {
    toggleAudio() {
      if (this.isPlaying) {
        this.pauseAudio();
      } else {
        this.playAudio();
      }
    },
    playAudio() {
      this.$refs.audio.play();
      this.isPlaying = true; 
    },
    pauseAudio() {
      this.$refs.audio.pause();
      this.isPlaying = false; 
    },
    handleEnd() {
      console.log("La musique a fini de jouer !");
      this.isPlaying = false; 
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.audio-player {
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 5px;
  padding: 10px;
  z-index: 100;
}

.controls {
  margin-top: 10px;
}

button {
  color: yellow;
  text-shadow: 1px 1px 1px  black;
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  transition: background-color 0.3s, transform 0.3s; 
}

button:focus {
  outline: none;
}

button:active {
  transform: scale(0.95); 
}

button[disabled] {
  background-color: #ccc; 
  cursor: not-allowed; 
}
.container {
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

header,
section {
  height: 100vh;
  scroll-snap-align: start;
}
.flags {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  font-size: 22px;
}
.flag:hover {
  transform: scale(1.15);
  box-shadow: 0px 0px 5px #000000;
}
body{
  background-color: black;
}
</style>
