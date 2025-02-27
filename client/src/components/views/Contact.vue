<template>
  <div class="whole">
    <div
      class="mt-4 waiting"
      ref="screenElement"
      :class="{ 'fade-out': !isAnimating }"
    >
      <transition name="fade">
        <div class="screen" v-if="isAnimating">
          <ul class="timeline">
            <li class="step">
              <span class="circle circle-flash-1"></span>
            </li>
            <li class="step">
              <span class="circle circle-flash-2"></span>
            </li>
            <li class="step">
              <span class="circle circle-flash-3"></span>
            </li>
            <li class="step">
              <span class="circle circle-flash-4"></span>
            </li>
            <li class="step">
              <span class="circle circle-flash-5"></span>
            </li>
            <li class="step">
              <span class="circle circle-flash-6"></span>
            </li>
            <li class="step">
              <span class="circle circle-flash-7"></span>
            </li>
          </ul>
          <div class="circle circle-main">
            <div class="ppcircle"></div>
          </div>
        </div>
      </transition>
    </div>

    <transition name="fade">
      <section class="contact hidden" ref="contactSection">
        <div class="contact-header">
          <h3 id="co-title">Contact</h3>
          <h1 id="co-text">
            L'innovation commence par une simple conversation.
          </h1>
        </div>

        <div class="contact-content">
          <div class="contact-form">
            <h3 id="form-title">
              Assez parlé de moi,<br />
              parlons de nous.
            </h3>
            <form :action="mailUrl" method="POST">
              <fieldset>
                <div class="form-field">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div class="form-field">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Votre mail"
                    required
                  />
                </div>
                <div class="form-field">
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div class="form-field">
                  <textarea
                    name="message"
                    type="text"
                    id="message"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
              </fieldset>
              <input id="form-btn" type="submit" value="send" />
            </form>
          </div>

          <div class="CV">
            <img src="https://i.ibb.co/WNy1L2WR/MEHDI-ZENATI-D-veloppeur-Web-Full-Stack-Resume-page-0001.jpg" alt="CV" width="auto" />
            <div class="download-container">
              <a
                href="../../assets/CV_Mehdi_Zenati.pdf"
                class="download"
                id="pdf-download"
                download="CV_Zenati_Mehdi"
              >
                <p class="downloadtext">Télécharger en PDF</p>
                <i class="ml-2 pi pi-download"></i>
              </a>
            </div>
          </div>

          <div class="contact-info">
            <img
              class="pp"
              src="../../assets/download20200101143704.png"
              width="200vw"
            />
            <h3>Contactez-moi</h3>
            <a href="mailto:mehdi.zenati1999@gmail.com">
              <p>mehdi.zenati1999@gmail.com</p>
            </a>
            <h3>Mes réseaux</h3>
            <div class="contact-links">
              <a href="https://www.linkedin.com/in/mehdizen"
                ><i class="pi pi-linkedin"></i
              ></a>
              <a href="https://github.com/MehdiZen"
                ><i class="pi pi-github"></i
              ></a>
            </div>
            <div class="ending">© Mehdi Zenati. Tous droits réservés</div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailUrl: import.meta.env.VITE_MAIL_URL,
      isAnimating: false,
    };
  },
  methods: {
    showContainers() {
      this.isAnimating = true;

      setTimeout(() => {
        this.$refs.screenElement.classList.add("fade-out");

        setTimeout(() => {
          this.isAnimating = false;
          this.$refs.contactSection.classList.remove("hidden");
          this.$refs.contactSection.classList.add("fade-in");

          setTimeout(() => {
            this.$refs.contactSection.style.opacity = 1;
          }, 50);
        }, 1000);
      }, 8000);
    },
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          this.showContainers();
        }
      });
    });

    observer.observe(this.$refs.screenElement);
  },
};
</script>

<style lang="css" scoped>
.ppcircle {
  height: 100%;
  width: 100%;
  border-radius: 60px;
  background-image: url("../../assets/download20200101143704.png");
  background-size: cover;
  animation: ppcircle-fade 12s forwards;
}

.fade-in {
  opacity: 1;
  transition: opacity 1s ease;
}

.hidden {
  opacity: 0;
  transition:
    opacity 1s ease,
    visibility 1s ease;
  display: none;
}
.fade-out {
  opacity: 0;
  transition: opacity 1s ease;
}
.screen {
  background: black !important;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
}
.circle {
  background: white;
  background-size: cover;
  border-radius: 60px;
  height: 120px;
  position: relative;
  width: 120px;
}

.circle-main {
  left: -120px;
  margin-top: -60px;
  top: 44%;
  animation: circle-slide 12s linear forwards;
}

.timeline {
  display: block;
  height: 120px;
  margin-top: -60px;
  position: absolute;
  top: 50%;
  width: 100%;
}

.timeline .step {
  display: block;
  float: left;
  height: 120px;
  margin: 0;
  position: relative;
  width: 200px;
}

.timeline .step .circle {
  background: transparent;
  position: absolute;
  right: -60px;
}

.timeline .step .circle-flash-1 {
  animation: circle-flash 1s 0.8s;
}

.timeline .step .circle-flash-2 {
  animation: circle-flash 1s 1.4s;
}

.timeline .step .circle-flash-3 {
  animation: circle-flash 1s 2s;
}

.timeline .step .circle-flash-4 {
  animation: circle-flash 1s 2.6s;
}

.timeline .step .circle-flash-5 {
  animation: circle-flash 1s 3.2s;
}
.timeline .step .circle-flash-6 {
  animation: circle-flash 1s 3.8s;
}
.timeline .step .circle-flash-7 {
  animation: circle-flash 1s 4.4s;
}

@keyframes circle-flash {
  0% {
    background: white;
  }
  100% {
    background: transparent;
  }
}

@keyframes circle-slide {
  44% {
    transform: scale(1);
    left: 90vw;
    top: 44%;
  }
  55%,
  58% {
    transform: scale(1.7);
    left: 82.75vw;
    top: 28%;
  }
  100% {
    transform: scale(1.7);
    left: 82.75vw;
    top: 28%;
  }
}
@keyframes ppcircle-fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes gunbarrel-bg {
  0% {
    opacity: 0;
  }
  6.25% {
    opacity: 1;
  }
  100% {
    left: -120px;
    opacity: 1;
  }
}

/* Above here is the animation */
.contact {
  opacity: 0;
  transition:
    opacity 1s ease,
    visibility 1s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  background:
    linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.89),
      rgba(46, 45, 45, 0.705),
      rgba(255, 255, 255, 0.904)
    ),
    url("https://i.imgur.com/3vacZxN.jpeg") center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow-y: none;
}
.pp {
  border-radius: 50%;
  margin-bottom: 6vh;
}
.contact-header {
  font-family: "Montserrat", sans-serif;
  margin: 10vh 10vw 3vh 10vw;
  text-align: center;
}

#co-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #999999b6;
  text-transform: uppercase;
}

#co-text {
  font-size: 3rem;
  color: white;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-self: center;
  line-height: 2;
  width: 90%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.74);
  margin-bottom: 10vh;
}

.contact-form {
  font-family: "Montserrat", sans-serif;
  padding: 5rem;
}
.CV {
  max-width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 2vw;
}
.CV img {
  width: 90%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 3vh;
}

.download-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 10vw;
  margin-left: 1vw;
}

#pdf-download {
  font-family: Arial, Helvetica, sans-serif;
  display: inline-flex;
  width: 15vh;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  background-color: #99999900;
  border: rgb(110, 110, 110) 1px solid;
  color: white;
  text-decoration: none;
  font-size: 0.5vw;
  transition: background-color 0.3s ease;
  margin-bottom: 3vh;
}
#pdf-download .pi {
  color: grey;
}
#pdf-download:hover {
  background-color: #62626256;
  transform: translateY(-2.5%);
}
#pdf-download:hover .pi {
  transform: scale(1.2);
  color: #ffffff;
}
#form-title {
  color: #fff;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  line-height: 1;
  margin-left: 4rem;
  margin-bottom: 3rem;
}

fieldset {
  border: none;
}

.form-field {
  outline: none;
  width: 200%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  margin-bottom: 0.9rem;
}

#name,
#email,
#subject,
#message {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  outline: none;
  background: transparent;
  border: none;
  letter-spacing: 2px;
  font-size: 0.6rem;
  line-height: 2rem;
  padding-bottom: 0.7rem;
  width: 100%;
}

textarea,
#message {
  width: 100%;
  color: #fff;
  overflow: visible;
}

#form-btn {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  border: none;
  color: white;
  font-size: 0.6rem;
  letter-spacing: 2.5px;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  height: 60px;
  background-color: #999999b6;
  cursor: pointer;
  transition: all 0.3s ease;
}

#form-btn:hover {
  opacity: 0.9;
  transform: translateY(-2.5%);
  box-shadow: 0 0 15px 0 #000;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 5rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.contact-info h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #ffffff;
}

.contact-info a {
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: #666;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 5rem;
  transition: all 0.3s ease;
}

.contact-info a:hover {
  transform: translateY(-2.5%);
  color: #999;
}
textarea {
  resize: none;
}
.contact-info .pi {
  font-size: 1.5rem;
  line-height: 3rem;
  padding-left: 2rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact-links .pi:hover {
  transform: scale(1.2);
}
.ending {
  text-align: center;
  width: 100%;
  font-family: "Arial", sans-serif;
  font-size: 0.5vw;
  line-height: 1.5;
  color: #ffffff;
  text-shadow: 1px 1px black;
  margin-top: 5vh;
}
@media screen and (max-width: 1000px) {
  .ending {
    font-size: 2vw;

  }
  .contact {
    overflow-y: auto;
  }
  .contact-content {
    display: flex;
    flex-direction: column;
  }

  .form-field {
    width: 100%;
  }

  #form-btn {
    width: 100%;
  }

  #form-title {
    margin: 3rem auto;
  }

  .contact-header {
    margin: 5rem 5rem 3rem 5rem;
  }

  #co-title {
    font-size: 1rem;
  }

  #co-text {
    font-size: 2.5rem;
  }

  .contact-form {
    padding: 2.5rem;
  }
  .CV {
    max-width: 100%;
    display: block;
    justify-content: space-between;
    align-items: flex-end;
  }
  .CV img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    margin-bottom: 0;
  }
  .download .pi {
    color: white !important;
  }
  #pdf-download {
    font-family: Arial, Helvetica, sans-serif;
    display: inline-flex;
    width: 150%;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;
    background-color: #99999970;
    border: rgb(110, 110, 110) 1px solid;
    color: white;
    text-decoration: none;
    font-size: 3vw;
    transition: background-color 0.3s ease;
    margin-bottom: 3vh;
  }
  .download-container {
    margin: 0;
    width: 100%;
  }
  .contact-links .pi {
    color: rgb(39, 39, 39) !important;
  }
  .timeline {
    display: none;
  }
}

@media screen and (min-width: 960px) {
  .form-field {
    width: 125%;
  }

  #form-title {
    margin: 3rem auto;
  }

  #form-btn {
    width: 125%;
  }

  .contact-header {
    margin: 7vh 7vw 3vh 7vw;
  }

  .contact-info {
    padding: 3vw;
  }

  #co-title {
    font-size: 1rem;
  }

  #co-text {
    font-size: 2.5rem;
  }

  .contact-form {
    padding: 2.5vw;
  }
}

@media screen and (min-width: 1440px) {
  .contact-header {
    margin: 0px 5vw 0px 5vw;
  }
  .form-field {
    width: 200%;
  }

  #form-btn {
    width: 200%;
  }
  .CV img:hover {
    transform: scale(1.4) translateY(-4vh);
  }
}

@media screen and (min-width: 2000px) {
  .form-field {
    width: 200%;
  }

  #form-btn {
    width: 200%;
  }
  .CV img:hover {
    transform: scale(1.4);
  }
  .contact-header {
    margin: 0px 10vw 7vh 10vw;
  }
}
</style>
