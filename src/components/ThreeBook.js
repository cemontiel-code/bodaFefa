import React from "react";
import { ReactComponent as LogoTop } from "../asstes/ornamentos/libro-top.svg";
import { ReactComponent as LogoLeo } from "../asstes/ornamentos/libro-leon.svg";
import { useState } from "react";
import MyBook from "./Libro";

const ThreeBook = () => {
  const [active, setActive] = useState(true);
  const [show, setshow] = useState(false);

  //const atributtion ='<a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a>'
  const popHandler = () => {
    setActive(false);
    setTimeout(setshow(true),50000);
  };

  return (
    <>
      <div id="tridiv">
        <div className={active ? "scene" : "scene-active"} onClick={popHandler}>
          <div
            className={`shape cuboid-1 ${
              active ? "cub-1" : "cub-1 cub-1-active"
            }`}
          >
            <div className={`face ft portada  `}></div>
            <div className={`face bk pagina   `}></div>
            <div className={`face rt sideview ${active ? '':'growX'} `}></div>
            <div className={`face lt sideview ${active ? '':'growX'} `}></div>
            <div className={`face bm sideview ${active ? '':'growY'} `}></div>
            <div className={`face tp sideview ${active ? '':'growY'} `}></div>
          </div>

          <div
            id="hola"
            className={`shape cuboid-2 ${
              active ? "cub-2 " : "cub-2 cub-2-active"
            }`}
          >
            <div
              className={`face ft ${active ? "portada" : "pagina"} ${
                active ? "" : "banish"
              } `}
            ></div>
            <div className={`face bk portada bookCover`}>
              <LogoTop className="logo-top"></LogoTop>
              <div className="logo">
                <h1>
                  Boda de Cardenas <br /> Montiel
                </h1>
              </div>
              <LogoLeo className="logo-btm"></LogoLeo>
            </div>
            <div className={`face rt sideview  ${active ? '':'growX'} `}></div>
            <div className={`face lt portada  ${active ? '':'growX'} `}></div>
            <div className={`face bm sideview  ${active ? '':'growY'} `}></div>
            <div className={`face tp sideview  ${active ? '':'growY'} `}></div>
          </div>

          <div
            class={`shape cuboid-3 ${show ? "cub-3 cub-3-active" : "cub-3 "}`}
          >
            <div class="face ft">
              <MyBook></MyBook>
            </div>
            <div className="face bk"></div>
            <div className="face rt"></div>
            <div className="face lt"></div>
            <div className="face bm"></div>
            <div className="face tp"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeBook;
