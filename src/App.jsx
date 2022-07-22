import "./App.css";
import BannerNav from "./components/Nav";
import FotoPrueba from "./components/assets/photo.svg";

function App() {
  return (
    <div>
      <BannerNav />
      <h1 className='container'>Juan Pablo Monteros Lazcano</h1>
      <img src={FotoPrueba} alt='foto' className='mcdonald' />
    </div>
  );
}

export default App;
