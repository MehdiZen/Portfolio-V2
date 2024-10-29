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
              <p class="m-0 projectContent truncated">
                {{ project.content  }}
              </p>
              <p class="m-0 stack">{{ project.stack }}</p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button
                  :label="
                    project.nda
                      ? '[NDA] ' + 'Voir le produit'
                      : '[GitHub] ' + 'Voir plus'
                  "
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

interface IProject {
  image: string;
  title: string;
  subtitle: string;
  content: string;
  url: string;
  stack: string;
  nda: boolean;
}

interface Project extends Array<IProject> {}

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
      projects: {} as Project,
      showFullContent: false,
    };
  },
  computed: {},
  mounted() {
    this.fetch();
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
    async fetch() {
      const response = await fetch(
        "https://nodejs-production-82fd.up.railway.app/projects"
      );
      this.projects = await response.json();
    },
    openUrl(url: string) {
      window.open(url, "_blank");
    },

  },
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
  user-select: none;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.projectContent {
  font-family: Arial, Helvetica, sans-serif;
}

.truncated {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-item:hover .truncated {
  white-space: normal;
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
  height: 100%;
  min-height: calc(90vh - 40px);
  padding-top: 8vh;
  overflow: hidden;
  margin-bottom: 5rem;
}

.card-item {
  width: 18.75rem;
  max-width: 18.75rem;
  flex: 1 1 calc(20% - 40px);
  transition: transform 0.8s ease-in-out;

}


.card-item:hover {
  z-index: 3;
  transform: scale(1.1);
  box-shadow: 0px 0px 25px #ffffff;
}
.buttn,
.stack {
  display: none;
}

.card-item:hover .buttn,
.card-item:hover .stack {
  display: flex;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.stack {
  padding-top: 10px;
  font-size: 14px;
  color: rgb(0, 128, 75);
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
