import Scene from "./components/three/Canvas/Scene";
import { Stars } from "@react-three/drei";
import Burbujas from "./components/Burbuja";

import { ReactComponent as Phone } from "./asstes/svg/mobile-screen-solid.svg";

//Image by <a href="https://pixabay.com/users/celestials-7664630/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4766098">celestials</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4766098">Pixabay</a>
function App() {
  return (
    <>
      <Scene className="bg">
        <ambientLight />
        <Stars />
      </Scene>
      <div className="main">
        <Burbujas />
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
