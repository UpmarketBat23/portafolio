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
import Typewriter from "./components/typewriter/Typewriter";
import CircleBtn from "./components/sm-btn/Sm-circle-btn";

function App() {
  return (
    <div>
      <div className='navnavnav'>
        <BannerNav />
      </div>
      <div className='acomodar'>
        <div>
          <div className='titulo-banner'>
            <span className='texto'>
              Juan Pablo Monteros Lazcano FrontEnd Developer
            </span>
            <br />
            <Typewriter className='hhh' />
            <span className='yo'>Hi! I'm Juan here is my resume </span>
          </div>
          <br />
          <div className='bttn'>
            <RippleButton>Download Resume</RippleButton>
          </div>
          <div></div>
        </div>
      </div>
      <div className='bg-couleur'>
        <div className='container titulo'>
          <span className='couleurtxte'>Skills</span>
        </div>
        <div className='container'>
          <SkillsBox pic={HtmlLogo} name='HTML5' />
          <SkillsBox pic={Css3Logo} name='CSS3' />
          <SkillsBox pic={JSLogo} name='JavaScript' />
          <SkillsBox pic={ReactLogo} name='React' />
          <SkillsBox pic={BootstrapLogo} name='Bootstrap' />
          <SkillsBox pic={NPMLogo} name='NPM' />
          <SkillsBox pic={GitHubLogo} name='GitHub' />
        </div>
      </div>
      <div className='titulo'>
        <div>
          <span>About Me</span>
        </div>
        <div>
          <About
            Name='Juan Pablo Monteros Lazcano'
            Age='18 Years Old'
            DOF='14/06/2004'
            Gender='Male'
            Status='single'
            Nationality='Argentinian'
            Languages='Spanish (Native), English (Shitty) '
            Location='something'
            Phone='something'
            Email='something'
            Linkedin='something'
          ></About>
        </div>
      </div>
      <div>
        <footer className='footer'>
          <CircleBtn />
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
