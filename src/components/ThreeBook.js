import React from "react";
import { ReactComponent as LogoTop } from "../asstes/ornamentos/libro-top.svg";
import { ReactComponent as LogoLeo } from "../asstes/ornamentos/libro-leon.svg";
import { useState } from "react";
import "../css/book.css";
import MyBook from "./Libro";

const ThreeBook = () => {
  const [real, setActive] = useState(true);

  //const atributtion ='<a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a>'
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
            <div className={`face ft ${real ? "portada" : "pagina"}`}></div>
            <div className="face bk portada"></div>
            <div className="face rt sideview"></div>
            <div className="face lt sideview"></div>
            <div className="face bm sideview"></div>
            <div className="face tp sideview"></div>
          </div>

          <div
            id="hola"
            className={`shape cuboid-2 ${
              real ? "cub-2 " : "cub-2 cub-2-active"
            }`}
          >
            <div className={`face ft ${real ? "portada" : "pagina"}`}></div>
            <div className={`face bk portada`}>
              <LogoTop className="logo-top"></LogoTop>
              <div className="logo">
                <h1>
                   Boda de Cardenas <br /> Montiel
                </h1>
              </div>
              <LogoLeo className="logo-btm"></LogoLeo>
            </div>
            <div className="face rt sideview"></div>
            <div className="face lt portada"></div>
            <div className="face bm sideview"></div>
            <div className="face tp sideview"></div>
          </div>

          <div class={`shape cuboid-3 ${real ? 'cub-3':'cub-3 cub-3-active' }`}>
            <div class="face ft">
              <MyBook></MyBook>
            </div>
            <div class="face bk"></div>
            <div class="face rt"></div>
            <div class="face lt"></div>
            <div class="face bm"></div>
            <div class="face tp"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeBook;
