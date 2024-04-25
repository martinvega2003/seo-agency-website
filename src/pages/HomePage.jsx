//IMPORTES DE REACT
import React, { useState } from "react";

//IMPORTES DE CSS
import "../App.css";
import "../pages-style/HomePage.css";

// IMPORTE DE COMPONENTES PARA LAS SECCIONES
import Faqs from "./homePageFiles/faqs.jsx";
import Hero from "./homePageFiles/hero.jsx";
import Process from "./homePageFiles/process.jsx";
import Benefits from "./homePageFiles/benefits.jsx";
import About from "./homePageFiles/about.jsx";
import FinalCTA from "./homePageFiles/finalCTA.jsx";
// import MenuDesplegable from "../components/menuDesplegable";

// CONTEXT PARA EL CTAOPEN:

// export const Context = React.createContext();

const HomePage = () => {
  // const [ctaOpen, setCtaOpen] = useState(false);

  return (
    <>
      {/* HEADER STICKY ----------------------------------------- */}

      <header className="header-sticky">
        <nav className="links">
          <a className="link" href="#home">
            home
          </a>
          <a className="link" href="#process">
            process
          </a>
          <a className="link" href="#benefits">
            benefits
          </a>
          <a className="link" href="#faqs">
            faqs
          </a>
          <a className="link" href="#about">
            about
          </a>
        </nav>
        <div className="email-container">
          <h2>contact us! </h2>
          <span>vegma@govegma.contact.com</span>
        </div>
      </header>

      {/* MENU DESPLEGABLE ------------------------------------------- */}

      {/* <Context.Provider value={[ctaOpen, setCtaOpen]}> */}
        {/* <MenuDesplegable /> */}
      {/* </Context.Provider> */}

      {/* PARTE DEL HERO --------------------------------------------- */}

      <Hero />

      {/* SECCION DE NUESTRO PROCESO ---------------------------------- */}

      <Process />

      {/* SECCION DE LOS BENEFICIOS ------------------------------- */}

      <Benefits />

      {/* SECCION DE LAS FAQS --------------------------- */}

      <Faqs />

      {/* SECCION DE ABOUT THE OWNER -------------------- */}

      <About />

      {/* FINAL CTA SECTION ---------------------------- */}

      <FinalCTA />

      {/* FOOTER -------------------------------------- */}

      <div className="footer">
        <p>2024 @ all rights reserved</p>
      </div>
    </>
  );
};

export default HomePage;
