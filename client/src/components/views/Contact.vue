<template>
  <section class="contact">
    <div class="contact-header">
      <h3 id="co-title">Contact</h3>
      <h1 id="co-text">L'innovation commence par une simple conversation.</h1>
    </div>

    <div class="contact-content">
      <div class="contact-form">
        <h3 id="form-title">Assez parlé de moi,<br/> parlons de nous.</h3>
        <form
          :action="mailUrl"
          method="POST"
        >
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
                name="Subject"
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
        <img src="https://i.ibb.co/GTfcT6m/CV.jpg" alt="CV" width="auto" />
        <div class="download-container">
          <a
            href="../../assets/CV_Mehdi_Zenati.pdf"
            class="download"
            id="pdf-download"
            download
          >
            Télécharger en PDF <i class="ml-2 pi pi-download"></i>
          </a>
        </div>
      </div>

      <div class="contact-info">
        <img
        class="pp"
        src="../../assets/download20200101143704.png"
        width="200vw"
        />
        <h3>Contactez moi</h3>
        <a href="mailto:mehdi.zenati1999@gmail.com">
          <p>mehdi.zenati1999@gmail.com</p></a
        >
        <h3>Mes réseaux</h3>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/mehdizen"
            ><i class="pi pi-linkedin"></i
          ></a>
          <a href="https://github.com/MehdiZen"><i class="pi pi-github"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mailUrl: import.meta.env.VITE_MAIL_URL,
    };
  },
};
</script>

<style lang="css" scoped>
.contact {
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
}
.pp {
  background-color: white;
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
  width: 150%;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #99999900;
  border: rgb(255, 255, 255) 1px solid;
  color: white;
  text-decoration: none;
  font-size: 0.6vw;
  transition: background-color 0.3s ease;
  margin-bottom: 3vh;
}
#pdf-download .pi{
  color: grey;
}
#pdf-download:hover {
  background-color: #626262;
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

.contact-info .pi {
  font-size: 1.5rem;
  line-height: 3rem;
  padding-left: 2rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact-links .pi:hover{
  transform: scale(1.2);
}
@media screen and (max-width: 960px) {
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
