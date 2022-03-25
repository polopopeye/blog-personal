import * as React from "react"
import "../styles/global.css"
import fabulosa from "../images/fabulosa.jpg"
import img1 from "../images/foto1.jpg"
import kenhackclan from "../images/kenhackclan.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const hola = () => (
  <Layout>
    <Seo title="Curriculum Vitae" />

    <div className="p-16 text-lg max-w-full font-mono bg-gray-200">
      <div className="grid md:flex  md:flex-flow-col md:flex-cols-2 md:flex-row-2  gap-4">
        <div className=" md:w-1/5 md:block hidden">
          <img width="100%" src={img1} />
        </div>
        <div className="md:w-4/5">
          <p>
            &iexcl;Hola! Mi nombre es Kenneth y desde que tengo uso de razón
            siempre me ha gustado la tecnolog&iacute;a, la primera vez que
            estuve en contacto con un ordenador fue alrebedor de los 5
            a&ntilde;os cuando pude trastear el ordenador del trabajo de mi
            padre, desde entonces supe que tenia que saber como estaba hecha esa
            m&aacute;gia negra y entender como funcionaba ese juego de cartas
            llamado solitario... <br></br>
            <br></br>
            Cuando tenía 13 a&ntilde;os era asiduo de internet y decid&iacute;
            crear un foro junto con unos amigos para compartir nuestras cosas...
            (Cosas de frikis)
          </p>
        </div>
      </div>
      <div className="grid md:flex  md:flex-flow-col md:flex-cols-2 md:flex-row-2  gap-4">
        <div className="md:w-2/3">
          <p>
            Aqui principalmente poniamos programas pirateados, con el tiempo el
            foro creció pero sacaron leyes antipirateria entre ellas la ley SOPA
            por la cual nos cerraron el chiringito... 😥 <br></br>
            <br></br>
            En ese punto de mi vida sentí ira hacia el govierno y odio hacia las
            normas, por suerte no me volví anarquista ni nada parecido si no que
            las leyes estan para respetarse si no vas a la carcel
            principalmente... A parte de algo de CSS, HTML, JavaScript que no
            viene mal.
          </p>
          <p>
            Despues de ese batacazo los siguientes años los pasé trasteando con
            Wordpress y el PHP, en ese entonces el mejor lenguaje de
            programación del mundo para mí... (que ingenuo que era) Ademas de
            experimentar configurando Servidores WAMP (Windows Apache MySQL y
            PHP)
          </p>
          <p>
            mientras aprendía para ganar algo de money reparaba ordenadores y
            enseñaba cosas basicas a conocidos, asi me costeaba mis lujos, a los
            16 años decidí crear una marca para darle mas profesionalidad al
            asunto, aunque de profesional no tenia nada. lo llam&eacute; Hard
            Monkey PC.&nbsp;
          </p>
        </div>
        <div className="md:w-1/3">
          <img width="100%" src={kenhackclan} />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="grid md:flex  md:flex-flow-col md:flex-cols-2 md:flex-row-2  gap-4">
        <div className="md:w-2/3">
          <img width="100%" src={fabulosa} />
        </div>
        <div>
          <p>
            A los 17 a&ntilde;os comenzé a trabajar en una radio local llamada
            Fabulosa FM, me aventuré a hacerles una web en wordpress, al final
            les gusto y los siguientes años los pasé encargandome de la web, el
            mantenimiento de los ordenadores y las redes sociales, mientras lo
            compaginaba con mis estudios por las tardes.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className=" grid md:flex  md:flex-flow-col   md:flex-cols-2 flex-row-2  gap-4">
        <div className="w-full md:w-1/2">
          A los 20 a&ntilde;os decid&iacute; crear mi propia agencia de
          programaci&oacute;n llamada Hard Monkey PC Limited (la fiscalización
          en londres era mas sencilla antes del brexit)
        </div>
        <div className="w-full md:w-1/2">
          <div className="tiny-pageembed">
            <iframe
              src="https://www.ivoox.com/player_ej_18284042_2_1.html?data=kp2fmpmUeJOhhpywj5aaaZS1kpqah5yncZOhhpywj5aRaZi3jpWah5yncZLh2rjcztrYrdDijJadkJWYcpKrjK3O1MmPkdDixNDS25C0h4yZk524x9PSqdXcjLjiw9fJvoy71pKSmaiRlqy2wJadmJOdb6fBjoqkpZKY&amp;"
              width="100%"
              height="175"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="grid sm:flex  flex-flow-col flex-cols-4 flex-row-1 gap-2">
        <div>
          {/* <p>Aqui haciendo el mongolo...</p> */}
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/Kz0I7_Ff_-s?rel=0"
            scrolling="no"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/RpdG5vsADpk?rel=0"
            scrolling="no"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/jfNWonE0CRc?rel=0"
            scrolling="no"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/_a3Lh7jdH4w?rel=0"
            scrolling="no"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
      <div className="flex  flex-flow-col flex-cols-1 flex-row-2  gap-4">
        <div>
          <p>
            Durante los siguientes años trabajamos con varios clientes, creando
            páginas web y campañas de marketing. Cada proyecto era estres y
            aventura, ademas nos daba para poder hacer algunos proyectos propios
            como por ejemplo: <br></br>
            <strong>BusinessMonkeyNews</strong>: Una web de noticias automaticas
            que tuvo bastante exito, de hecho murio por su &eacute;xito, llegaba
            tantas visitas que el servidor petaba y la mensualidad para mantener
            esa web comenzo a escalar exponencialmente es ah&iacute; donde
            descubri lo que era NodeJS con MongoDB mucho mas rapido que el
            tradicional servidor en PHP y MySQL.&nbsp;
          </p>
          <br></br>
          <p>
            Otra que creamos fue un proveedor de servicios hosting llamado
            <b>BestMonkeyHosting</b>.&nbsp;
          </p>
        </div>
        <div>{/* TEEEEEEEEEEEEEEEEEEEEEEEEEEEST */}</div>
      </div>
      <br></br>
      <br></br>
      <div className="grid md:flex  md:flex-flow-col md:flex-cols-2 md:flex-row-2  gap-4">
        <div className="md:1/3">
          <img
            src="  https://www.infobae.com/new-resizer/8_61oIBJBpGy2fbdkyvVyjqBE6w=/1200x900/filters:format(jpg):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/19175636/Estonia-1920-5.jpg
 "
            width="100%s"
          ></img>
        </div>
        <div className="md:2/3">
          <p>
            A los 21 A&ntilde;os intentamos crear la fiscalizaci&oacute;n en
            Estonia, pero desgraciadamente las cosas no iban muy bien, nos quedo
            muy grande el proyecto, as&iacute; que la empresa se cerro y estudie
            en Estonia 2 a&ntilde;os.
          </p>
          <p>
            Durante esos 2 a&ntilde;os tambi&eacute;n comenze&nbsp;a desarrollar
            un robot que invertia en la bolsa (Expert Advisor) en C++, no con
            buenos resultados ya que el mundo de la bolsa es dificil, pero
            gracias a ello descubri varias cosas de las cuales disfruto ahora
            como es StonksBot, un robot desarrollado con NodeJS y React que
            tradea a trav&eacute;s de otros robots que estan en Darwinex y esta
            vez si que me ha dado muy buenos resultados durante el anterior
            a&ntilde;o. &nbsp;&nbsp;
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="grid md:flex  md:flex-flow-col md:flex-cols-2 md:flex-row-2  gap-4">
        <div className="md:2/3">
          <p>
            Cuando volv&iacute; trabaj&eacute; en &nbsp;Ibermatica SL
            subcontratado por 1d3a SL desarrollando una Pizarra 3D&nbsp;de
            deportes ademas de otros proyectos incluyendo mas deportes para la
            pizarra.&nbsp;
          </p>
          <br></br>
          <br></br>
          <p className="text-center bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-all duration-500">
            <a target="_blank" href="https://aifortext.com/blackboardpage.html">
              Demo de la pizarra
            </a>
            <br></br>
          </p>
        </div>
        <div className="md:1/3">
          <img
            src="https://scontent.fmad6-1.fna.fbcdn.net/v/t1.6435-9/155956961_3755549737898343_5053585129780710514_n.png?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=O54_zSFMPSYAX8KbXzg&_nc_ht=scontent.fmad6-1.fna&oh=e18e8ce2a6006c34585bfdb50555f15c&oe=60B3510C"
            width="100%"
          ></img>
        </div>
      </div>

      {/* <p>
        Y ahora estoy en la busqueda de un gran reto aplicando los conocimientos
        que he obtenido durante todos estos a&ntilde;os.
      </p> */}
    </div>
  </Layout>
)

export default hola
