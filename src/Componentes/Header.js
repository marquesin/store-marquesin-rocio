import "./componentes.css";
import React from "react";
import { ReactComponent as IconHeader } from "./images/logo.svg";
import { ReactComponent as Coin } from "./images/coin.svg";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "./images/plus-solid.svg";
import { ReactComponent as Minus } from "./images/minus-solid.svg";
import imageHeader from "./images/header.png";

export default function Header() {
  const { userYPoint, agrearPuntos, setAgregarPuntos } = useContext(AppContext);
  const [disparoPuntos, setDisparoPuntos] = useState(false);
  const ManejarDisparoPuntos = () => {
    setDisparoPuntos(!disparoPuntos);
  };
  return (
    <div className="header">
      <div className="conteiner-top-header">
        <div className="iconHeader">
          <IconHeader />
        </div>
        <div className="conteinerLink">
          <button className="buttonHistory">
            <Link to="/history">My history</Link>
          </button>
        </div>
        <div className="usuarioYMonedas">
          <p className="userName">{userYPoint?.name}</p>
          <div className="monedaMasPuntos">
            {userYPoint?.points}
            <div className="moneda">
              <Coin />
            </div>
          </div>
          <button
            className="buttonPlus"
            onClick={ManejarDisparoPuntos}
            value={disparoPuntos}
          >
            {disparoPuntos ? <Minus /> : <Plus />}
          </button>
        </div>{" "}
      </div>
      <div className="conteiner-image-header">
        {" "}
        {disparoPuntos ? (
          <div className="conteinerAgregandoPuntos">
            <AgregandoPuntos
              agrearPuntos={agrearPuntos}
              setAgregarPuntos={setAgregarPuntos}
            />
          </div>
        ) : (
          ""
        )}
        <img src={imageHeader} alt={"imageHeader"} className="image-header" />
        <h1 className="electronics">Electronics</h1>
      </div>{" "}
    </div>
  );
}

function AgregandoPuntos() {
  const { setAgregarPuntos, agrearPuntos, setLoading } = useContext(AppContext);
  const handlerBotton1 = () => {
    // setLoading(true);
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
