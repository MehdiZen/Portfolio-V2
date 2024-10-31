<template>
  <div class="h-screen w-full max-w-screen bod">
    <div class="h-screen w-full journal" ref="observedSection">
      <div class="head">
        <div class="headerobjectswrapper">
          <div class="weatherforcastbox">
            <span style="font-style: italic">{{ weatherInfo }}</span
            ><br />
            <span
              >Wind: {{ windSpeed }}; Temp: {{ temperature }}°C; Humidity:
              {{ humidity }}%</span
            >
          </div>
          <header>Frame-York Buggle</header>
        </div>
        <div class="subhead">Paris, FR - {{ dateInfo }}</div>
      </div>
      <div>
        <div
          class="flex flex-column justify-content-end align-items-center center"
        >
          <h1>L'étoile montante du développement web</h1>
        </div>
        <div class="container-wrapper">
          <div class="container">
            <p class="titleContent">Un Jeune Talent Émergent</p>
            <p class="textContent">
              Paris, France – Dans un monde numérique en constante évolution, un
              jeune <b>talent</b> se démarque : <b>Mehdi</b> Zenati.
              <b>Développeur Full Stack</b>, Mehdi ne se contente pas de
              maîtriser le code; il transcende les frontières du développement
              web avec une <b>passion</b> ardente et une
              <b>créativité</b> débordante.
            </p>
          </div>
          <div class="divider"></div>
          <div class="container">
            <p class="titleContent">Parcours Académique Éloquent</p>
            <p class="textContent">
              Originaire de la région parisienne, Mehdi a toujours été fasciné
              par la technologie et son potentiel illimité. Diplômé en
              intégration web de l'école Epitech, il allie
              <b>expertise technique</b> et <b>sens artistique</b>. Auparavant,
              il a enrichi son expérience en tant qu'assistant développeur web
              chez <b>Ubisoft</b>, où il a contribué à
              <b>l’élaboration de nouvelles fonctionnalités</b> et
              <b>collaboré</b> étroitement avec les <b>équipes</b> pour garantir
              une <b>expérience utilisateur optimale</b>.
            </p>
          </div>
          <div class="divider"></div>
          <div class="container">
            <p class="titleContent">Compétences Techniques Diversifiées</p>
            <p class="textContent">
              <b>Polyvalent</b> et <b>curieux</b>, Mehdi manie avec aisance des
              langages tels que <b>JavaScript</b> et <b>TypeScript</b>, tout en
              jonglant avec des frameworks modernes comme <b>Vue.js</b> et
              <b>Node.js</b>. Mais ce n’est pas tout : son savoir-faire ne
              s’arrête pas là. Grâce à son approche <b>agile</b> et son
              expertise en gestion de projet, il s'assure que chaque ligne de
              code ne soit pas seulement fonctionnelle, mais également conçue
              avec soin.
            </p>
          </div>
        </div>
        <div class="container-wrapper">
          <div class="container">
            <p class="titleContent">Un Esprit Compétitif et Créatif</p>
            <p class="textContent">
              En dehors de son travail, Mehdi est un fervent amateur de sports,
              notamment le <b>basket-ball</b> et le <b>kick-boxing</b>,
              reflétant ainsi son <b>esprit de compétition</b> et sa
              <b>discipline</b>. Également passionné par la culture geek, il
              trouve du réconfort dans les <b>jeux vidéo</b> et les
              <b>comic books</b>, prouvant que le <b>développeur idéal</b> allie
              à la fois <b>rigueur technique</b> et <b>créativité</b>.
            </p>
          </div>
          <div class="divider"></div>
          <div class="container">
            <p class="titleContent">Une Ambition sans Limites</p>
            <p class="textContent">
              Avec une ambition sans limite et un désir constant
              d'<b>apprendre</b>, Mehdi Zenati est sans conteste un nom à
              retenir dans le paysage numérique de demain. Sa détermination et
              sa vision novatrice ne manqueront pas de faire parler d’elles.
            </p>
          </div>
          <div class="container">
            <p class="titleContent"></p>
            <img class="gif" src="../../assets/goodDev.gif" />
          </div>
        </div>
      </div>
      <hr />
      <div
        class="flex flex-column justify-content-end align-items-center center"
      >
        <h1>Un justicier masqué aperçu à Paris</h1>
      </div>
      <div class="container-wrapper">
        <div class="container">
          <p class="titleContent">Il Sème le Mystère dans la Capitale</p>
          <p class="textContent">
            Un justicier masqué a été aperçu plusieurs fois dans les rues de
            Paris, notamment dans les quartiers du Marais et de Belleville. Vêtu
            de noir, il intervient pour résoudre des altercations mineures et
            semble toujours disparaître avant l'arrivée des autorités. Les
            rumeurs courent sur son identité, mais jusqu'à présent, personne n'a
            pu lever le voile sur cet énigmatique personnage.
          </p>
        </div>
        <div class="divider"></div>
        <div class="container">
          <p class="titleContent">Une Habileté Hors du Commun</p>
          <p class="textContent">
            Les témoins rapportent que le justicier possède une agilité
            impressionnante et une connaissance surprenante des technologies
            urbaines. Certains parlent même de piratage informatique, ce qui
            alimente encore plus les spéculations sur ses origines. Selon
            quelques insiders anonymes, il pourrait bien s’agir d’un expert en
            code.
          </p>
        </div>
        <div class="divider"></div>
        <div class="container">
          <p class="titleContent">Le Mystère Persiste</p>
          <p class="textContent">
            Un détail curieux a été remarqué par ceux qui l’ont croisé : il
            porte sur sa poitrine un logo en forme de "V" vert, similaire à
            celui du framework Vue.js. Une coïncidence troublante pour ceux qui
            connaissent le milieu du développement web, et qui pourrait bien
            révéler des indices sur sa véritable identité.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weatherInfo: "Weather forecast for the next 24 hours: Plenty of Sunshine",
      windSpeed: "11km/h SSE",
      temperature: 24,
      humidity: 42,
      dateInfo: "",
    };
  },
  async mounted() {
    const response = await fetch(
      "https://worldtimeapi.org/api/timezone/Europe/Paris"
    );
    const data = await response.json();
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    this.dateInfo = new Date(data.datetime).toLocaleDateString(
      "en-US",
      dateOptions
    );

    const apiKey = import.meta.env.VITE_API_KEY;
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`
    );
    const weatherData = await weatherResponse.json();
    this.weatherInfo = `Weather forecast for the next 24 hours: ${weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}`;
    this.windSpeed = `${weatherData.wind.speed} m/s ${this.getWindDirection(weatherData.wind.deg)}`;
    this.temperature = Math.round(weatherData.main.temp);
    this.humidity = weatherData.main.humidity;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startAnimation();
          observer.unobserve(this.$refs.observedSection);
        }
      });
    });

    observer.observe(this.$refs.observedSection);
  },
  methods: {
    getWindDirection(degrees) {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      const index = Math.round((degrees % 360) / 45);
      return directions[index % 8];
    },
    startAnimation() {
      this.$refs.observedSection.classList.add("animate");
    },
  },
};
</script>

<style scoped>
@keyframes spin-grow {
  0% {
    transform: rotate(0deg) scale(0) translate(200px, -200px);
    opacity: 1;
    filter: blur(5px);
  }
  10% {
    transform: rotate(360deg) scale(0.1) translate(150px, -150px);
    opacity: 1;
    filter: blur(5px);
  }
  20% {
    transform: rotate(720deg) scale(0.1) translate(100px, -100px);
    opacity: 1;
    filter: blur(5px);
  }
  30% {
    transform: rotate(1080deg) scale(0.2) translate(50px, -50px);
    opacity: 1;
    filter: blur(5px);
  }
  40% {
    transform: rotate(1440deg) scale(0.2) translate(0px, 0px);
    opacity: 1;
    filter: blur(5px);
  }
  50% {
    transform: rotate(1800deg) scale(0.3) translate(0, 0);
    opacity: 1;
    filter: blur(5px);
  }
  60% {
    transform: rotate(2160deg) scale(0.4) translate(0, 0);
    opacity: 1;
    filter: blur(5px);
  }
  70% {
    transform: rotate(2520deg) scale(0.5) translate(0, 0);
    opacity: 1;
    filter: blur(5px);
  }
  80% {
    transform: rotate(2880deg) scale(0.6) translate(0, 0);
    opacity: 1;
    filter: blur(5px);
  }
  90% {
    transform: rotate(3240deg) scale(0.8) translate(0, 0);
    opacity: 1;
    filter: blur(5px);
  }
  100% {
    transform: rotate(3600deg) scale(1) translate(0, 0);
    opacity: 1;
    filter: blur(5px);
  }
}
.animate {
  animation: spin-grow 1.2s linear;
}
.gif {
  width: 75%;
  margin: auto 10%;
}
.bod {
  font-family: "Droid Serif", serif;
  font-size: 1vw;
  color: #2f2f2f;
  background: url("https://i.pinimg.com/originals/5b/b1/3b/5bb13b2f73e906861918ddbde3eb09f0.jpg");
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
  padding: 1px;
  height: 100vh;
  overflow: hidden;
}
.journal {
  background-color: #f9f7f1;
}

h1 {
  font-family: "Droid Serif", serif;
  font-size: calc(1.5vw + 1vh);
  text-align: center;
  margin: 1rem 0;
}
header {
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: calc(2vw + 2vh);
  text-transform: uppercase;
  display: inline-block;
  line-height: 1.2;
  margin-bottom: 30px;
}
p {
  margin: 0;
  margin-bottom: 0.5vw;
}
.container-wrapper {
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 2vw;
}
.container {
  padding: 10px;
  flex: 1;
  max-width: 48%;
  text-align: justify;
  font-family: "Old Standard TT", serif;
}
.divider {
  width: 1px;
  background-color: #2f2f2f;
  height: 100px;
  margin: 0 10px;
}
.titleContent {
  font-family: "Droid Serif", serif;
  font-size: calc(1vw + 1vh);
  font-weight: bold;
  margin-bottom: 5px;
  color: #111111;
}
.textContent {
  font-family: "Droid Serif", serif;
  font-size: calc(0.6vw + 0.6vh);
  line-height: 1.4;
  color: #000000;
}
.head {
  text-align: center;
  position: relative;
  margin-bottom: 5px;
}
.subhead {
  text-transform: uppercase;
  border-bottom: 2px solid #2f2f2f;
  border-top: 2px solid #2f2f2f;
  padding: 5px 0;
  font-size: 1vw;
}
.weatherforcastbox {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 10vw;
  border: 3px double #2f2f2f;
  padding: 5px;
  font-size: calc(0.4vw + 0.4vh);
}


@media (max-width: 600px) and (max-height: 1000px) {
  .container {
    max-width: 48%;
    flex: 1 1 48%;
  }
  h1 {
    font-size: 5vw;
  }
  header {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 5vw;
  }
  .titleContent {
    font-size: 3vw;
  }
  .textContent {
    font-size: 2.2vw;
  }
  img {
    width: 44% !important;
    margin: 0 !important;
    padding: 0;
    position: absolute;
    top: -90%;
    right: 1vw;
  }
  .weatherforcastbox{
    width: 15vw;
  }
  .divider {
    display: none;
  }
}
@media (max-width: 600px) AND (max-height: 740px) {
  img {
    width: 44% !important;
    margin: 0 !important;
    padding: 0;
    position: absolute;
    top: -90%;
    right: 1vw;
  }
}
</style>
