import HTMLFlipBook from "react-pageflip";

function MyBook( ) {

  const heightData = 400;
  const widthData = 400;

  return (
    <HTMLFlipBook width={272} height={400} autoSize='trueno'  >
        <div className="pagina">Page 1</div>
        <div className="pagina">Page 2
        </div>
        <div className="pagina">Page 3</div>
        <div className="pagina">Page 4</div>
        <div className="pagina">Page 5</div>
    </HTMLFlipBook>
  );
}

export default MyBook;