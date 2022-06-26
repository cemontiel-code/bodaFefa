import React from "react";
import MyBook from "./Libro";
import { useState } from "react";
import ThreeBook from "./ThreeBook";

function Burbujas() {
  const [active, setActive] = useState(true);

  const popHandler = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={"burbuja"}
      onClick={popHandler}>
        <ThreeBook ></ThreeBook>
      </div>
    </>
  );
}

export default Burbujas;
