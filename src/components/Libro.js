import React, { useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

function MyBook() {
  const book = useRef();
  /*
  useEffect(() => {
    book.current.pageFlip().update();
  }, [])
  */

  return (
    <HTMLFlipBook
      width={620}
      height={800}
      size="stretch"
      minWidth={620}
      maxWidth={680}
      minHeight={325}
      maxHeight={830}
      disableFlipByClick="true"
      ref={book}
    >
      <div className="pagina">
        Con gran orgullo para todos y un enorme place te damos la bienvenida. A
        Nuestra boda. -EN GRANDE- Nuestro huésped, sea usted Venga al servicio a
        probar Una servilleta así, chérie y nosotros hacemos lo demás.{" "}
      </div>
      <div className="pagina">
        <div style={"display:flex"}>
          <div >

          </div>
        </div>
        “No hay tristeza ni protesta cuando aquí se hace la fiesta. Habrá trucos
        sin par y mil bromas que contar”{" "}
      </-div>
      <div className="pagina">Page 3</div>
      <div className="pagina">Page sad 4</div>
      <div className="pagina">Page 5</div>
    </HTMLFlipBook>
  );
}

export default MyBook;
