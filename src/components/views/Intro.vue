<template>
  <div class="h-screen w-full max-w-screen bod">
    <div class="head">
      <div class="headerobjectswrapper">
        <div class="weatherforcastbox">
          <span style="font-style: italic"
            >Weather forecast for the next 24 hours: Plenty of Sunshine</span
          ><br />
          <span>Wind: 11km/h SSE; Temp: 24°C; Humidity: 42%</span>
        </div>
        <header>FrameYork Buggle</header>
      </div>

      <div class="subhead">
        York, MA - Monday October 14, 2024 - One Page ~french edition~
      </div>
    </div>
    <div>
      <div
        class="flex flex-column justify-content-end align-items-center center mr-7"
      >
        <h1>L'étoile montante du développement web</h1>
      </div>
      <div class="container-wrapper">
        <div class="container">
          <p class="titleContent">Un Jeune Talent Émergent
          </p>
          <p class="textContent">
            Paris, France – Dans un monde numérique en constante évolution, un
            jeune <b>talent</b> se démarque : <b>Mehdi</b> Zenati. <b>Développeur Full Stack</b>,
            Mehdi ne se contente pas de maîtriser le code ; il transcende les
            frontières du développement web avec une <b>passion</b> ardente et une
            <b>créativité</b> débordante.
          </p>
        </div>
        <div class="divider"></div>
        <div class="container">
          <p class="titleContent">Parcours Académique Éloquent</p>
          <p class="textContent">
            Originaire de la région parisienne, Mehdi a toujours été fasciné par la technologie et son potentiel illimité. Diplômé en intégration web de l'école Epitech, il allie <b>expertise technique</b> et <b>sens artistique</b>. Auparavant, il a enrichi son expérience en tant qu'assistant développeur web chez <b>Ubisoft</b>, où il a contribué à <b>l’élaboration de nouvelles fonctionnalités</b> et <b>collaboré</b> étroitement avec les équipes pour garantir une <b>expérience utilisateur optimale</b>.
          </p>
        </div>
        <div class="divider"></div>
        <div class="container">
          <p class="titleContent">Compétences Techniques Diversifiées
          </p>
          <p class="textContent">
            <b>Polyvalent</b> et <b>curieux</b>, Mehdi manie avec aisance des langages tels
            que <b>JavaScript</b> et <b>TypeScript</b>, tout en jonglant avec des frameworks
            modernes comme <b>Vue.js</b> et <b>Node.js</b>. Mais ce n’est pas tout : son
            savoir-faire ne s’arrête pas là. Grâce à son approche <b>agile</b> et son
            expertise en gestion de projet, il s'assure que chaque ligne de code
            ne soit pas seulement fonctionnelle, mais également conçue avec
            soin.
          </p>
        </div>
      </div>
      <div class="container-wrapper">
        <div class="container">
          <p class="titleContent">Un Esprit Compétitif et Créatif
          </p>
          <p class="textContent">
            En dehors de son travail, Mehdi est un fervent amateur de sports,
            notamment le <b>basket-ball</b> et le <b>kick-boxing</b>, reflétant ainsi son
            <b>esprit de compétition</b> et sa <b>discipline</b>. Également passionné par la
            culture geek, il trouve du réconfort dans les <b>jeux vidéo</b> et les
            <b>comic books</b>, prouvant que le <b>développeur idéal</b> allie à la fois
            <b>rigueur technique</b> et <b>créativité</b>.
          </p>
        </div>
        <div class="divider"></div> 
        <div class="container">
          <p class="titleContent">Une Ambition sans Limites</p>
          <p class="textContent">
            Avec une ambition sans limite et un désir constant d'<b>apprendre</b>,
            Mehdi Zenati est sans conteste un nom à retenir dans le paysage
            numérique de demain. Sa détermination et sa vision novatrice ne
            manqueront pas de faire parler d’elles.
          </p>
        </div>
        <div class="container">
          <p class="titleContent"></p>
          <img src="../../assets/goodDev.gif"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from 'primevue/image';

export default {};
</script>

<style scoped>
.bod {
  font-family: "Droid Serif", serif;
  font-size: 14px;
  color: #2f2f2f;
  background-color: #f9f7f1;
}
h1 {
  font-family: "Droid Serif", serif;
  font-size: 60px;
}
header {
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: 80px;
  text-transform: uppercase;
  display: inline-block;
  line-height: 72px;
  margin-bottom: 20px;
}
p {
  margin-top: 0;
  margin-bottom: 20px;
}
.container-wrapper {
  display: flex;
  margin: 20px 15rem;
  position: relative;

}
.container {
  padding: 30px;
  flex: 1;
  margin: 0 15px;
  text-align: left;
  text-align: justify; 
  max-width: 540px;
  font-family: "Old Standard TT", serif; /* Application de la police Old Standard TT */

}
.divider {
  width: 2px; 
  background-color: #2f2f2f; 
  height: 200px; 
  margin: 0 20px;
  align-self: center; 
}

.titleContent {
  font-family: "Droid Serif", serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #111111;
}
.textContent {
  font-family: "Droid Serif", serif;
  font-size: 20px;
  line-height: 1.6;
  color: #000000;
}

.head {
  text-align: center;
  position: relative;
}

.subhead {
  text-transform: uppercase;
  border-bottom: 2px solid #2f2f2f;
  border-top: 2px solid #2f2f2f;
  padding: 12px 0 12px 0;
}
.weatherforcastbox {
  position: relative;
  width: 12%;
  left: 10px;
  border: 3px double #2f2f2f;
  padding: 10px 15px 10px 15px;
  line-height: 20px;
  display: inline-block;
  margin: 0 50px 20px -360px;
}
.media {
  -webkit-filter: sepia(80%) contrast(1) opacity(0.8);
  filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
  mix-blend-mode: multiply;
  width: 100%;
}

@media only all and (max-width: 1300px) {
  .weatherforcastbox {
    display: none;
  }
}
@media only all and (max-width: 1200px) {
  .collumn {
    width: 31%;
  }
}
@media only all and (max-width: 900px) {
  .collumn {
    width: 47%;
  }
}
@media only all and (max-width: 600px) {
  .collumn {
    width: 100%;
  }
  .collumn + .collumn {
    border-left: none;
    border-bottom: 1px solid #2f2f2f;
  }
  header {
    max-width: 320px;
    font-size: 60px;
    line-height: 54px;
    overflow: hidden;
  }
}
</style>
