import "./Header.css";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import imageHeader from "../images/header.png";
import { HeaderTop } from "./HeaderTop/HeaderTop";

export default function Header() {
  const { userYPoint, agregarPuntos, setAgregarPuntos } =
    useContext(AppContext);
  return (
    <header className="header">
      <HeaderTop
        userYPoint={userYPoint}
        agregarPuntos={agregarPuntos}
        setAgregarPuntos={setAgregarPuntos}
        Button={ButtonMiHistory()}
        AgregandoPuntos={AgregandoPuntos()}
      />
      <div className="conteiner-image-header">
        <h1 className="electronics">Electronics</h1>
        <img src={imageHeader} alt={"imageHeader"} className="image-header" />
      </div>
    </header>
  );
}

export function AgregandoPuntos() {
  const { setAgregarPuntos, agregarPuntos } = useContext(AppContext);
  const handlerBotton1 = () => {
    setAgregarPuntos(1000);
  };
  const handlerBotton2 = () => {
    setAgregarPuntos(5000);
  };
  const handlerBotton3 = () => {
    setAgregarPuntos(7500);
  };
  return (
    <div className="conteinerButtonMonedas">
      <button
        className="btn1000"
        onClick={handlerBotton1}
        value={agregarPuntos}
      >
        Agregar 1000
      </button>
      <button
        className="btn5000"
        onClick={handlerBotton2}
        value={agregarPuntos}
      >
        Agregar 5000
      </button>
      <button
        className="btn7500"
        onClick={handlerBotton3}
        value={agregarPuntos}
      >
        Agregar 7500
      </button>
    </div>
  );
}


export function ButtonMiHistory() {
  return (
    <button className="buttonHistory">
      <Link to="/history">My history</Link>
    </button>
  );
}
