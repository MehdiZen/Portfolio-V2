<template>
  <div class="h-screen w-full max-w-screen bod">
    <div class="projects-section">
      <div class="wormhole-container">
        <SpaceBackground />
      </div>
      <div class="content">
        <div class="project-title"><p>Mes réalisations</p></div>
        <div class="cards-container">
          <Card
            v-for="(project, index) in projects"
            :key="index"
            class="card-item"
          >
            <template #header>
              <img alt="user header" :src="project.image" class="card-image" />
            </template>
            <template #title>{{ project.title }}</template>
            <template #subtitle>{{ project.subtitle }}</template>
            <template #content>
              <p class="m-0">{{ project.content }}</p>
            </template>
            <template #stack>
              <p class="m-0">{{ project.stack }}</p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button
                  :label="'Voir plus'"
                  class="buttn w-full"
                  @click="openUrl(project.url)"
                />
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import SpaceBackground from "./SpaceBackground.vue";

interface IProduct {
  image: string;
  title: string;
  subtitle: string;
  content: string;
  url: string
  stack: string
}

interface Products extends Array<IProduct> {}

export default {
  name: "product",
  components: {
    Card,
    Button,
    SpaceBackground,
  },
  data() {
    return {
      isVisible: false,
      // projects: [
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 1",
      //     subtitle: "sous titre 1",
      //     color: "blue",
      //     content: "test de texte de fond 1",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 2",
      //     subtitle: "sous titre 2",
      //     color: "green",
      //     content: "test de texte de fond 2",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 3",
      //     subtitle: "sous titre 3",
      //     color: "red",
      //     content: "test de texte de fond 3",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 4",
      //     subtitle: "sous titre 4",
      //     color: "yellow",
      //     content: "test de texte de fond 4",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 5",
      //     subtitle: "sous titre 5",
      //     color: "purple",
      //     content: "test de texte de fond 5",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 6",
      //     subtitle: "sous titre 6",
      //     color: "orange",
      //     content: "test de texte de fond 6",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 7",
      //     subtitle: "sous titre 7",
      //     color: "cyan",
      //     content: "test de texte de fond 7",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 8",
      //     subtitle: "sous titre 8",
      //     color: "magenta",
      //     content: "test de texte de fond 8",
      //   },
      //   {
      //     src: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
      //     title: "titre 9",
      //     subtitle: "sous titre 9",
      //     color: "brown",
      //     content: "test de texte de fond 9",
      //   },

      // ] as Products,
      projects: {} as Products,
    };
  },
  computed: {
   
  },
  mounted() {
    this.fetch()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    });
    const projectsContainer = this.$refs.projectsContainer as HTMLElement;
    if (projectsContainer) {
      observer.observe(projectsContainer);
    }
  },
  methods: {
    async fetch(){
      const response = await fetch("https://nodejs-production-82fd.up.railway.app/projects");
      this.projects = await response.json();
    },
    openUrl(url){
      console.log(url);
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
.wormhole-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.projects-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 2;
}

.project-title {
  position: relative;
  top: 1%;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 4vh;
  margin: 0;
}

.project-title p {
  font-size: 46px;
  color: yellow;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  height: auto;
  min-height: calc(90vh - 40px);
  padding: 0 15vw;
  padding-top: 8vh;
  overflow: hidden;
}

.card-item {
  width: 18.75rem;
  max-width: 18.75rem;
  flex: 1 1 calc(20% - 40px);
}

.card-item:hover {
  z-index: 3;
  transform: scale(1.1);
  box-shadow: 0px 0px 25px #ffffff;
}
.buttn {
  display: none;
}

.card-item:hover .buttn {
  display: flex;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

@media screen and (max-width: 1200px) {
  .card-item {
    flex: 1 1 calc(33.33% - 40px);
    max-width: 33.33%;
  }
}

@media screen and (max-width: 768px) {
  .card-item {
    flex: 1 1 calc(50% - 40px);
    max-width: 50%;
  }
}

@media screen and (max-width: 576px) {
  .card-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
