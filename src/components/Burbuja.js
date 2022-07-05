import React from "react";
import { useState } from "react";

function Burbujas() {
  const [active, setActive] = useState(true);

  const popHandler = () => {
    setActive(false);
  };


  return (
    <>
      <div className={active ? "burbuja": 'popped'}
      onClick={popHandler}>
        
      </div>
    </>
  );
}

export default Burbujas;
