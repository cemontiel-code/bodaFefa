import HTMLFlipBook from "react-pageflip";

function MyBook( ) {

  const heightData = () => {  };
  const widthData = ()  => {  };

  return (
    <HTMLFlipBook width={272} height={400} autoSize='true'  >
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