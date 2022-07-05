import Scene from "./components/three/Canvas/Scene";
import { Stars } from "@react-three/drei";
import Burbujas from "./components/Burbuja";
import ThreeBook from "./components/ThreeBook";

import { ReactComponent as Phone } from "./asstes/svg/mobile-screen-solid.svg";

function App() {

  const webapp =document.documentElement;

  if (window.innerWidth<1000) {
    webapp.requestFullscreen();
  }


  return (
    <>
      <Scene className="bg">
        <ambientLight />
        <Stars />
      </Scene>
      <div className="main">
        <Burbujas />
        <ThreeBook></ThreeBook>
      </div>
      <div className="warning">
        <p> Por favor gire su</p>
        <Phone style={{ transform: "rotate(90deg)", maxWidth: "40%" }}></Phone>
        <p> dipostivo a modo paisaje </p>
      </div>
    </>
  );
}

export default App;
//<MyBook />
