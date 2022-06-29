import React from "react";
import { useState } from "react";
import ThreeBook from "./ThreeBook";

function Burbujas() {
  const [active, setActive] = useState(true);

  const popHandler = () => {
    setActive(false);
  };


  return (
    <>
      <div className={active ? "burbuja": 'popped'}
      onClick={popHandler}>
        <ThreeBook ></ThreeBook>
      </div>
    </>
  );
}

export default Burbujas;
