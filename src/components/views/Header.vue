<template>
  <div class="banner h-screen w-screen">
    <div class="flex flex-column justify-content-center align-items-end center-right">
      <h1 class="name">Mehdi Zenati</h1>
      <h1 class="title">Développeur Full Stack</h1>
    </div>
    <div class="scroller flex flex-column align-items-center">
      <div class="text-2xl text">Scrollez à travers les univers...</div>
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
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; 
  background: url("../../assets/banner.jpeg") no-repeat center center;
  background-size: cover;
  color: yellow;
  text-shadow: 1px 1px 10px black;
  height: 100vh;
  width: 100vw;
}

.center-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 1rem;
}

.name {
  margin-bottom: 1rem;
  padding: 0;
}

.title {
  margin-top: 1rem;
  padding: 0;
}

.scroller {
  position: absolute;
  bottom: 5%;
  left: 50%; 
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroller .text-2xl {
  margin-bottom: 10px;
}
.breathing {
  animation: breathe 4s ease-in-out infinite;
}
@media (max-width: 380px) {
  .banner {
    padding: 2rem;
    background-size: cover;
  }

  .name {
    font-size: 2rem;
  }

  .title {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .scroller .text-2xl {
    font-size: 0.2rem;
  }

  .breathing {
    font-size: 1.5rem;
  }
}

@media (min-width: 380px) and (max-width: 768px) {
  .banner {
    background-size: cover;
  }

  .name {
    font-size: 3rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .scroller .text-2xl {
    font-size: 1.2rem;
  }

  .breathing {
    font-size: 2rem;
  }
}

@media (min-width: 1500px) {
  .center-right {
    justify-content: center;
    align-items: flex-end;
    margin-right: 7rem;
  }

  .name {
    font-size: 4.5vw;
  }

  .title {
    font-size: 4vw;
  }

  .scroller {
    bottom: 5%;
    width: 100%;
  }

  .breathing {
    font-size: 24px;
  }
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
</style>
