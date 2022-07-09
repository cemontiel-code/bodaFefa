import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactModal from "react-modal";
/* svgs */
import { ReactComponent as Zoom } from "../asstes/svg/video-solid.svg";
import { ReactComponent as Dress } from "../asstes/svg/dress.svg";
import { ReactComponent as Suit } from "../asstes/svg/suit.svg";
import { ReactComponent as Gift } from "../asstes/svg/gift-solid.svg";
import { ReactComponent as Bank } from "../asstes/svg/building-columns-solid.svg";

function MyBook() {
  const book = useRef();

  const [modalState, setIsOpen] = useState(false);
  const [modalfirma, setOpenFirma] = useState(false);
  const [modalBank, setOpenBank] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalFirma = () => {
    setOpenFirma(true);
  };
  const closeModalFirma = () => {
    setOpenFirma(false);
  };

  const openModalBank = () => {
    setOpenBank(true);
  };
  const closeModalBank = () => {
    setOpenBank(false);
  };

  return (
    <HTMLFlipBook
      width={240}
      height={400}
      size="stretch"
      disableFlipByClick="true"
      ref={book}
      style={{ marginTop: "-0.5%" }}
    >
      <div className="pagina">
        <div className="pagina-content">
          <p>
            Con gran orgullo para todos y un enorme placer<br/> te damos la
            bienvenida a
          </p>
          <h1 className="h3"> Nuestra boda.</h1>
          <p>
            Nuestro huesped, sea usted Venga al servicio a probar Una servilleta
            asi, cherie y nosotros hacemos lo demas.
          </p>
        </div>
      </div>

      <div className="pagina">
        <div className="pagina-content">
          <h3>Donde y Cuando</h3>
          <div className="location-modal-group">
            <button className="btn-modals" onClick={openModalFirma}>
              Lugar de la firma
            </button>
            <button className="btn-modals" onClick={openModal}>
              Lugar de la recepcion
            </button>
            <ReactModal
              isOpen={modalfirma}
              onRequestClose={closeModalFirma}
              contentLabel={"lugar de la firma"}
              overlayClassName={"modalsOverlay"}
              className="modals"
              id="firma"
              ariaHideApp={false}
            >
              <button className="modals-close-btn" onClick={closeModalFirma}>
                x
              </button>
              <h3> Firma </h3>
              <p>Sede Cental - Registro Civil </p>
              <iframe
                title="mapFirma"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.2445671694145!2d-58.38801693686847!3d-34.600374315593605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac70d526ae3%3A0x37aa9757a93e89f0!2sRegistro%20Civil%20Central!5e0!3m2!1ses-419!2sve!4v1656635589977!5m2!1ses-419!2sve"
                style={{
                  width: "80%",
                  height: "45%",
                  border: "5px solid #b28c33",
                }}
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>Direccion : Uruguay 753, C1015 CABA, Argentina </p>

              <a
                id="zoom-btn"
                target={"_blank"}
                rel="noreferrer"
                href="https://meet.google.com/eod-akia-mpt"
              >
                <Zoom
                  style={{
                    width: "25px",
                    marginTop: "10px",
                    marginRight: "5px",
                  }}
                ></Zoom>
                entrar a meeting
              </a>
            </ReactModal>
            <ReactModal
              isOpen={modalState}
              onRequestClose={closeModal}
              contentLabel={"lugar de la recepcion"}
              overlayClassName={"modalsOverlay"}
              className="modals"
              id="recepcion"
              ariaHideApp={false}
            >
              <button className="modals-close-btn" onClick={closeModal}>
                x
              </button>
              <h3> Recepcion</h3>
              <div className="picture">
                <img
                  alt="lugar de firma"
                  height={"100%"}
                  width={"100%"}
                  src="https://cdn0.casamientos.com.ar/vendor/7033/3_2/960/jpg/congo-ii_7_147033-158101730157433.jpeg&auto=compress&fit=crop&q=40"
                />
              </div>
              <div className="descRep">
                <p> Donde y Cuando?</p>
                <h4> Congo Club Cultural </h4>

                <div className="descFlex">
                  <div>
                    <iframe
                      title="mapRep"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6569.396659087155!2d-58.433111000000004!3d-34.586499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb0d1001fa7258aa!2sCongo%20Club%20Cultural!5e0!3m2!1ses!2sar!4v1656640717230!5m2!1ses!2sar"
                      style={{
                        width: "95%",
                        height: "100%",
                        border: "5px solid #b28c33",
                      }}
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div>
                    <p> 24 de Septiembre del 2022 </p>
                    <p> 20:00hs a 02:00hs </p>
                  </div>
                </div>
              </div>
            </ReactModal>
          </div>
          <p>
            “No hay tristeza ni protesta cuando aqui se hace la fiesta. Habra
            trucos sin par y mil bromas que contar”
          </p>
        </div>
      </div>

      <div className="pagina">
        <div className="pagina-content">
          <h3> Codigo de vestimenta </h3>
          <Dress style={{ maxWidth: "80%" }}></Dress>
          <p> Cocktail </p>
        </div>
      </div>

      <div className="pagina">
        <div className="pagina-content">
          <h3> Codigo de vestimenta </h3>
          <Suit style={{ maxWidth: "80%" }}></Suit>
          <p> Elegante Sport</p>
        </div>
      </div>

      <div className="pagina">
        <div className="pagina-content">
          <h3> Regalos </h3>
          <Gift style={{ maxWidth: "40%" }}></Gift>
          <p>¿Que tengo aqui?</p>
          <p>
            ¡Que lindo es! Es un tesoro que descubri, es muy simple decir que no
            hay mas que pedir.
          </p>
        </div>
      </div>
      <div className="pagina">
        <div className="pagina-content">
          <h3> Regalos</h3>
          <p>
            Regalitos asi tengo miles, aunque a veces no sepa que
            son.
          </p>
          <button
            className="btn-modals"
            style={{ background: "" }}
            onClick={openModalBank}
          >
            Datos Bancarios
          </button>
          <p>
            Pero nosotros en verdad, queremos mas, queremos ver algo especial.
          </p>
        </div>
        <ReactModal
          isOpen={modalBank}
          onRequestClose={closeModalBank}
          contentLabel={"Datos bancarios"}
          overlayClassName={"modalsOverlay"}
          className="modals"
          id="Banco"
          ariaHideApp={false}
        >
          <button className="modals-close-btn" onClick={closeModalBank}>
            x
          </button>
          <h3> Datos Bancarios </h3>
          <Bank id="bankSvg" style={{ maxWidth: "15%" }}></Bank>
          <div className="bankDiv">
            <div className="Bnk-data-bg">
              <h1>CUENTA ARS </h1>
              <p>Titular: Stephane Chiquinquirá Montiel Gallardo</p>
              <p>CUIT/CUIL: 27-95865243-2.</p>
              <p>Alias: bodajoseyfefa CBU: 14300017 - 13001634810012</p>
              <p>NRO. CUENTA: 1300163481001</p>
            </div>
            <div className="Bnk-data-bg">
              <h1>CUENTA USD </h1>
              <p>
                Transferencia por Zelle :
                <a href="mailto:alexjcardenas64@gmail.com">
                  alexjcardenas64@gmail.com
                </a>
              </p>
              <p>
                Transferencias por PayPal:
                <a href="mailto:stephanemontielgallardo@gmail.com">
                  stephanemontielgallardo@gmail.com{" "}
                </a>
              </p>
            </div>
          </div>
        </ReactModal>
      </div>
      <div className="pagina">
        <div className="pagina-content">
          <h4>Te esperamos !! ❤</h4>
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;
