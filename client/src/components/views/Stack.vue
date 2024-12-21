<template>
  <div class="h-screen w-full max-w-screen bod">
    <div
      class="terminalContainer stack-container"
      ref="stackContainer"
      :class="{ isVisible }"
    >
      <div class="fakeMenu">
        <div class="fakeButtons fakeClose"></div>
        <div class="fakeButtons fakeMinimize"></div>
        <div class="fakeButtons fakeZoom"></div>
      </div>
      <div class="fakeScreen" v-if="isVisible">
        <p class="line1">
          $ clamscan ../informations | cat -e
          ../informations/mehdi-stack.txt<span class="cursor1">_</span>
        </p>
        <p class="line2">
          Analyse des fichiers<span class="cursor2">...</span>
        </p>
        <p class="line3">
          Aucun virus trouvé, chargement de la stack en cours<span
            class="cursor3"
            >...</span
          >
        </p>
        <p class="line4">
          Stack chargée, bonne lecture.<span class="cursor4">_</span>
        </p>
        <div class="containerWrapper" v-if="containersVisible">
          <div class="container languages" @click="handleClick('languages')">
            <h3>Langages</h3>
            <p class="stackText"></p>
          </div>
          <div class="container frameworks" @click="handleClick('frameworks')">
            <h3>Frameworks</h3>
            <p class="stackText"></p>
          </div>
          <div class="container techEnv" @click="handleClick('techEnv')">
            <h3>Environnement technique</h3>
            <p class="stackText"></p>
          </div>
        </div>
        <div v-if="isStackVisible" class="database">
          <p>mysql -u recruiter -p</p>
          <p>Enter password: *********</p>
          <p>
            Welcome to the MySQL monitor. Commands end with ; or \g. Your MySQL
            connection id is 8 Server version: 8.0.21 MySQL Community Server -
            GPL Copyright (c) 2000, 2020, Oracle and/or its affiliates. All
            rights reserved. Oracle is a registered trademark of Oracle
            Corporation and/or its affiliates. Other names may be trademarks of
            their respective owners. Type 'help;' or '\h' for help. Type '\c' to
            clear the current input statement.
          </p>
          <p>mysql> USE portfolio;</p>
          <p>mysql> Database changed</p>
          <p>
            mysql> SELECT * FROM {{ currentStack }} ORDER BY name DESC;
            <span class="cursor4 blink">_</span>
          </p>

          <div v-if="currentStack === 'languages'" class="table-container">
            <div class="table-wrapper">
              <table class="sql-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in splitArray(languages)[0]"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>
                      <b>{{ item }}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                v-if="splitArray(languages)[1].length > 0"
                class="sql-table"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in splitArray(languages)[1]"
                    :key="index"
                  >
                    <td>{{ index + 9 }}</td>
                    <td>
                      <b>{{ item }}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-if="currentStack === 'frameworks'" class="table-container">
            <div class="table-wrapper">
              <table class="sql-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in splitArray(frameworks)[0]"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>
                      <b>{{ item }}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                v-if="splitArray(frameworks)[1].length > 0"
                class="sql-table"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in splitArray(frameworks)[1]"
                    :key="index"
                  >
                    <td>{{ index + 9 }}</td>
                    <td>
                      <b>{{ item }}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-if="currentStack === 'techEnv'" class="table-container">
            <div class="table-wrapper">
              <table class="sql-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in splitArray(techEnv)[0]"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>
                      <b>{{ item }}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table v-if="splitArray(techEnv)[1].length > 0" class="sql-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in splitArray(techEnv)[1]"
                    :key="index"
                  >
                    <td>{{ index + 9 }}</td>
                    <td>
                      <b>{{ item }}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "primevue/card";

export default defineComponent({
  name: "Stack",
  components: {
    Card,
  },
  data() {
    return {
      isVisible: false,
      isStackVisible: false,
      currentStack: "" as string,
      containersVisible: false,
      languages: [
        "CSS",
        "HTML",
        "Java",
        "JavaScript",
        "NoSQL",
        "PHP",
        "Ruby",
        "SQL",
        "TypeScript",
      ],
      frameworks: [
        "Cypress",
        "Express",
        "Jest",
        "Laravel",
        "Nest",
        "NightWatch",
        "React",
        "Ruby on Rails",
        "SpringBoots",
        "Vue",
      ],
      techEnv: ["CI Gitlab", "Docker", "Git", "MongoDB", "NodeJS"],
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
          this.showContainers();
        }
      });
    });

    const stackContainer = this.$refs.stackContainer as HTMLElement;
    if (stackContainer) {
      observer.observe(stackContainer);
    }
  },
  methods: {
    showContainers() {
      setTimeout(() => {
        this.containersVisible = true;
      }, 12000);
    },
    handleClick(title: string) {
      this.currentStack = title;
      this.isStackVisible = true;

      const containers = document.querySelectorAll(".container");
      containers.forEach((container) => {
        container.classList.remove("active");
      });

      const clickedContainer = document.querySelector(`.${title}`);
      if (clickedContainer) {
        clickedContainer.classList.add("active");
      }
    },
    splitArray(array: string[]) {
      return [array.slice(0, 8), array.slice(8)];
    },
  },
});
</script>

<style scoped>
.table-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}

.table-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.sql-table {
  border-collapse: collapse;
  width: 20%;
  font-size: 12px;
  font-family: monospace;
  color: #00fa00;
  min-height: 25px;
  margin-right: 10px;
}

.sql-table th,
.sql-table td {
  border: 1px solid green;
  padding: 1px;
  text-align: left;
}

.sql-table th {
  font-weight: bold;
}

.containerWrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 50px;
  margin-top: 20px;
}

.stack-container {
  opacity: 0;
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
  transform: translateY(20px);
}

.stack-container.isVisible {
  opacity: 1;
  transform: translateY(0);
}

.container {
  font-family: monospace;
  color: #fff;
  text-shadow: 2px 2px 2px black;
  width: 30%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
}

.container:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 25px #00d742;
  transition: transform 0.3s ease;
}
.container.active {
  transform: scale(1.1);
  box-shadow: 0px 0px 40px #00d742;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.languages {
  background-image: url("https://i1.wp.com/le-m-verbatem.fr/wp-content/uploads/2020/05/99436813_490859398281340_2840617577741287424_n-scaled.jpg?fit=2560%2C1706&ssl=1");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.frameworks {
  background-image: url("../../assets/frameworks.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.techEnv {
  background-image: url("https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/docker-logo__w1200.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
h3 {
  margin: 0;
  font-size: 1.2em;
  color: #ffffff;
}

.stackText {
  margin: 5px 0 0;
  font-size: 1em;
  color: #fff;
  text-align: center;
  line-height: 1.5;
}

.terminalContainer {
  height: 100vh;
  width: 100vw;
}
.fakeButtons {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 6px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;
}

.fakeMinimize {
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
}

.fakeZoom {
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
}

.fakeMenu {
  width: 100vw;
  box-sizing: border-box;
  height: 25px;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #151515;
  box-sizing: border-box;
  height: 97.5vh;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.line1,
.line2,
.line3,
.line4 {
  text-align: left;
  font-size: 1em;
  font-family: monospace;
  white-space: normal;
  overflow: hidden;
  width: 0;
}

span {
  color: #fff;
  font-weight: bold;
}

.line1 {
  color: #9cd9f0;
  -webkit-animation: type 2.5s 1s steps(83, end) forwards;
  -moz-animation: type 2.5s 1s steps(83, end) forwards;
  -o-animation: type 2.5s 1s steps(83, end) forwards;
  animation: type 2.5s 1s steps(83, end) forwards;
}

.cursor1 {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
}

.line2 {
  color: #fa0000;
  -webkit-animation: type 2.5s 4.25s steps(21, end) forwards;
  -moz-animation: type 2.5s 4.25s steps(21, end) forwards;
  -o-animation: type 2.5s 4.25s steps(21, end) forwards;
  animation: type 2.5s 4.25s steps(21, end) forwards;
}

.cursor2 {
  -webkit-animation: blink 1s 5.25s 2 forwards;
  -moz-animation: blink 1s 5.25s 2 forwards;
  -o-animation: blink 1s 5.25s 2 forwards;
  animation: blink 1s 5.25s 2 forwards;
}

.line3 {
  color: #00fa00;
  -webkit-animation: type 2.5s 7.5s steps(51, end) forwards;
  -moz-animation: type 2.5s 7.5s steps(51, end) forwards;
  -o-animation: type 2.5s 7.5s steps(51, end) forwards;
  animation: type 2.5s 7.5s steps(51, end) forwards;
}

.cursor3 {
  -webkit-animation: blink 1s 8.5s 2 forwards;
  -moz-animation: blink 1s 8.5s 2 forwards;
  -o-animation: blink 1s 8.5s 2 forwards;
  animation: blink 1s 8.5s 2 forwards;
}

.line4 {
  color: #00fa00;
  -webkit-animation: type 2.5s 10.75s steps(30, end) forwards;
  -moz-animation: type 2.5s 10.75s steps(30, end) forwards;
  -o-animation: type 2.5s 10.75s steps(30, end) forwards;
  animation: type 2.5s 10.75s steps(30, end) forwards;
}

.cursor4 {
  -webkit-animation: blink 1s 11.75s 2 forwards;
  -moz-animation: blink 1s 11.75s 2 forwards;
  -o-animation: blink 1s 11.75s 2 forwards;
  animation: blink 1s 11.75s 2 forwards;
}
.database {
  font-family: monospace;
  color: #00fa00;
}
@media(max-width: 600px) AND (max-height: 1000px) {
  .container {
    font-size: 1.1em;
    height: 15vh;
    width: 45%;
    text-shadow: 2px 1px 3px black;
    flex: 1 1 33%;
    max-width: 35%;
  }
  .container.active {
    transform: scale(1.1);
    box-shadow: 0px 0px 5px #00d742;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }
  .database {
    font-size: 0.9em;
  }
  h3 {
    font-size: 1em;
  }

  .stackText {
    font-size: 0.9em;
  }

  .sql-table {
    font-size: 1.2em;
  }

  .line1,
  .line2,
  .line3,
  .line4 {
    font-size: 0.9em;
  }

  .containerWrapper {
    padding: 10px 0px;
    margin-top: 10px;
    gap: 10px; 
  }

  .sql-table {
    width: 100%;
  }
}
@media (max-width: 600px) AND (max-height: 740px) {
  .database {
    font-size: 0.7em;
  }
}
@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes type {
  to {
    width: 100%;
  }
}

@-moz-keyframes type {
  to {
    width: 100%;
  }
}

@-o-keyframes type {
  to {
    width: 100%;
  }
}

@keyframes type {
  to {
    width: 100%;
  }
}
</style>
