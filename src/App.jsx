import "./App.css";
import React from "react";
import BannerNav from "./components/nav/Nav";
import FotoPrueba from "./components/assets/photo.svg";
import juanjuan from "./components/assets/IMG_1860_pp.jpg";
import opapo from "./components/assets/istockphoto-1248542684-612x612.jpg";
import HtmlLogo from "./components/assets/html5logo.svg";
import Css3Logo from "./components/assets/css3-svgrepo-com.svg";
import BootstrapLogo from "./components/assets/bootstrap-4-logo-svgrepo-com.svg";
import JSLogo from "./components/assets/jslogo.svg";
import ReactLogo from "./components/assets/react-svgrepo-com.svg";
import SkillsBox from "./components/card/Card";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import RippleButton from "./components/pruebas/Pruebas";
import Button from "react-bootstrap/Button";
import IsoCard from "./components/isocard/IsoCard";

function App() {
  return (
    <div>
      <div className='navnavnav'>
        <BannerNav />
      </div>
      <div className='acomodar'>
        <div>
          <div className='titulo'>
            <span className='container'>Juan Pablo Monteros Lazcano</span>
            <br />
            <span className='yo'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              non, doloribus qui officiis aperiam soluta, distinctio culpa, aut
              ad dicta necessitatibus possimus iste nemo.
            </span>
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
          <SkillsBox foto={HtmlLogo} nombre='HTML5' />
          <SkillsBox foto={Css3Logo} nombre='CSS3' />
          <SkillsBox foto={JSLogo} nombre='JavaScript' />
          <SkillsBox foto={ReactLogo} nombre='React' />
          <SkillsBox foto={BootstrapLogo} nombre='Bootstrap' />
        </div>
      </div>
      <div className='titulo '>
        <div>
          <span className='jualdo'>About Me</span>
        </div>
        <div>
          <About></About>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
