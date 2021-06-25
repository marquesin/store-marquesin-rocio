import "./componentes.css";
import React from "react";
import { ReactComponent as IconHeader } from "./images/logo.svg";
import { ReactComponent as Coin } from "./images/coin.svg";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

import imageHeader from "./images/header.png";
export default function Header() {
  const { userYPoint, agrearPuntos, setAgregarPuntos } = useContext(AppContext);
  return (
    <div className="header">
      <div className="conteiner-top-header">
        <div className="iconHeader">
          <IconHeader />
        </div>
        <AgregandoPuntos
          agrearPuntos={agrearPuntos}
          setAgregarPuntos={setAgregarPuntos}
        />
        <div className="usuarioYMonedas">
          <p className="userName">{userYPoint?.name}</p>
          <div className="monedaMasPuntos">
            {userYPoint?.points}

            <div className="moneda">
              <Coin />
            </div>
          </div>
        </div>
      </div>
      <div className="conteiner-image-header">
        <img src={imageHeader} alt={"imageHeader"} className="image-header" />
        <h1 className="electronics">Electronics</h1>
      </div>{" "}
    </div>
  );
}

function AgregandoPuntos() {
  const { setAgregarPuntos, agrearPuntos } = useContext(AppContext);
  const handlerBotton1 = () => {
    // setBtn1(true);
    setAgregarPuntos(1000);
  };
  const handlerBotton2 = () => {
    // setBtn2(true);
    setAgregarPuntos(5000);
  };
  const handlerBotton3 = () => {
    // setBtn3(true);
    setAgregarPuntos(7500);
  };
  return (
    <div className="conteinerButtonMonedas">
      {agrearPuntos}
      <button className="btn1000" onClick={handlerBotton1} value={agrearPuntos}>
        Agregar 1000
      </button>
      <button className="btn5000" onClick={handlerBotton2} value={agrearPuntos}>
        Agregar 5000
      </button>
      <button className="btn7500" onClick={handlerBotton3} value={agrearPuntos}>
        Agregar 7500
      </button>
      {/* <PuntosAAgregar
        agrearPuntos={agrearPuntos}
        btn1={btn1}
        btn2={btn2}
        btn3={btn3}
        setAgregarPuntos={setAgregarPuntos} */}
      {/* /> */}
    </div>
  );
}

//
//   return <h1>caguè</h1>;
// }
