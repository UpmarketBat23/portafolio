import "./App.css";
import React from "react";
import BannerNav from "./components/nav/Nav";
import HtmlLogo from "./components/assets/html5logo.svg";
import Css3Logo from "./components/assets/css3-svgrepo-com.svg";
import BootstrapLogo from "./components/assets/bootstrap-4-logo-svgrepo-com.svg";
import JSLogo from "./components/assets/jslogo.svg";
import ReactLogo from "./components/assets/React-icon.svg";
import NPMLogo from "./components/assets/Npm-logo.svg";
import GitHubLogo from "./components/assets/GitHubLogo.svg";
import SkillsBox from "./components/card/Card";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import RippleButton from "./components/pruebas/Pruebas";
import CircleBtn from "./components/sm-btn/Sm-circle-btn";
import TypewriterBanner from "./components/typewriter/Typewriter";

function App() {
  return (
    <div className="bg-couleur">
      <div className="navnavnav">
        <BannerNav />
      </div>
      <div className="acomodar">
        <div>
          <div className="titulo-banner">
            <span className="texto">
              Juan Pablo Monteros Lazcano FrontEnd Developer
            </span>
            <br />
            <TypewriterBanner />
          </div>
          <br />
          <div className="bttn">
            <a href="./images/CV.pdf" target="blank" download>
              <RippleButton>Download Resume</RippleButton>
            </a>
          </div>
          <div>
            <CircleBtn />
          </div>
        </div>
      </div>
      <div className="bg-couleur skills">
        <div className="container titulo">
          <span style={{ color: "white", fontSize: "3rem" }}>Skills</span>
        </div>
        <div className="container">
          <SkillsBox pic={HtmlLogo} name="HTML5" />
          <SkillsBox pic={Css3Logo} name="CSS3" />
          <SkillsBox pic={JSLogo} name="JavaScript" />
          <SkillsBox pic={ReactLogo} name="React" />
          <SkillsBox pic={BootstrapLogo} name="Bootstrap" />
          <SkillsBox pic={NPMLogo} name="NPM" />
          <SkillsBox pic={GitHubLogo} name="GitHub" />
        </div>
      </div>
      <div className="titulo">
        <div>
          <About
            style={{ color: "red" }}
            Name="Juan Pablo Monteros Lazcano"
            Age="18 Years Old"
            DOF="14/06/2004"
            Gender="Male"
            Status="Single"
            Nationality="Argentinian"
            Languages="Spanish (Native), English (Shitty) "
            Location="San Miguel de Tucumán, Argentina"
            Phone="+54 9 381 505 2310"
            Email="xxxnaujxxx@gmail.com"
            Linkedin="ypyppyp"
          ></About>
        </div>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
