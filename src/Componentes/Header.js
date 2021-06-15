import "./componentes.css";
import React from "react";
import { ReactComponent as IconHeader } from "./images/logo.svg";
import { ReactComponent as Coin } from "./images/coin.svg";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import imageHeader from "./images/header.png";
export default function Header() {
  const { userYPoint, setUserYPoint } = useContext(AppContext);
  // const { newPoints, setNewPoint } = useContext(AppContext);

  return (
    <div className="header">
      <div className="conteiner-top-header">
        <div className="iconHeader">
          <IconHeader />
        </div>
        <div className="usuarioYMonedas">
          <p className="userName">{userYPoint.name}</p>
          <div className="monedaMasPuntos">
            {userYPoint.points}
            <div className="moneda">
              <Coin />
            </div>
          </div>
        </div>
      </div>
      <div className="conteiner-image-header">
        <img src={imageHeader} alt={"imageHeader"} className="image-header" />
        <h1 className="electronics">Electronics</h1>
      </div>
    </div>
  );
}
