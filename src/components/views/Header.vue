<template>
  <div class="banner h-screen w-screen">
    <div
      class="flex flex-column justify-content-end align-items-end center mr-7"
    >
      <h1 class="name">Mehdi Zenati</h1>
      <h1 class="title">Développeur Full Stack</h1>
    </div>
    <div class="scroller flex flex-column align-items-center">
      <div class="text-2xl text">Scrollez pour réaliser vos rêves</div>
      <span class="pi pi-arrow-circle-down breathing"></span>
    </div>
  </div>
  <RouterView />
</template>

<script lang="ts">
import Menubar from "primevue/menubar";
export default {
  components: {
    Menubar,
  },

  data() {
    return {
      item: [
        {
          label: "Home",
          icon: "pi pi-home",
        },
        {
          label: "Features",
          icon: "pi pi-star",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 380px) and (max-width: 768px) {
  .banner {
    color: yellow;
    text-shadow: 1px 1px 10px black;
    background: url("../../assets/banner.jpeg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
@media (min-width: 1500px) {
  .banner {
    color: yellow;
    text-shadow: 1px 1px 10px black;
    background: url("../../assets/banner.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  .center {
    font-size: 2.5vw;
    padding-top: 10rem;
  }
  .scroller {
    position: absolute;
    bottom: 3%;
    width: 100%;
  }
  .breathing {
    margin-top: 10px;
    animation: breathe 4s ease-in-out infinite;
    font-size: 24px;
  }
  @keyframes breathe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
