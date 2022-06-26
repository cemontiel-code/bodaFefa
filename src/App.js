import "./App.css";
import Scene from "./components/three/Canvas/Scene";
import { Stars } from "@react-three/drei";
import Burbujas from "./components/Burbuja";

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
    </>
  );
}

export default App;
//<MyBook />
