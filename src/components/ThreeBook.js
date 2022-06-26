import React from "react";
import { ReactComponent as LogoTop } from "../asstes/ornamentos/libro-top.svg";
import { ReactComponent as LogoLeo } from "../asstes/ornamentos/libro-leon.svg";
import { useState } from "react";
import "../css/book.css";
import MyBook from "./Libro";

const ThreeBook = () => {
  const [real, setActive] = useState(true);

  const popHandler = () => {
    setActive(false);
  };

  return (
    <>
      <div id="tridiv">
        <div className={real ? "scene" : "scene-active"} onClick={popHandler}>
          <div
            className={`shape cuboid-1 ${
              real ? "cub-1" : "cub-1 cub-1-active"
            }`}
          >
            <div className="face ft pagina"></div>
            <div className="face bk pagina">
              <MyBook></MyBook>
            </div>
            <div className="face rt sideview"></div>
            <div className="face lt sideview"></div>
            <div className="face bm sideview"></div>
            <div className="face tp sideview"></div>
          </div>

          <div
          id='hola'
            className={`shape cuboid-2 ${
              real ? "cub-2 cub-2-deact" : "cub-2 cub-2-active"
            }`}
          >
            <div className={`face ft ${real ? 'portada' :"pagina"}`}></div>
            <div className={`face bk ${real ? 'portada' :"pagina"}`}>
              <LogoTop className="logo-top"></LogoTop>
              <div className="logo">
                <h1> <b> Boda de Cardenas </b>  <br /> Montiel</h1>
              </div>
              <LogoLeo className="logo-btm"></LogoLeo>
            </div>
            <div className="face rt sideview"></div>
            <div className="face lt sideview"></div>
            <div className="face bm sideview"></div>
            <div className="face tp sideview"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeBook;
