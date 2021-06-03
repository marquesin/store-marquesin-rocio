import "./componentes.css";
import React from "react";
import { ReactComponent as IconHeader } from "./images/logo.svg";

import imageHeader from "./images/header.png";
export default function Header() {
  return (
    <div className="header">
      <div className="conteiner-top-header">
        <div>
          <IconHeader />
        </div>
        <div className="usuarioYMonedas">request con nombre y moneditas</div>
      </div>
      <div className="conteiner-botton-header">
        <img src={imageHeader} alt={"imageHeader"} className="image-header" />
      </div>
    </div>
  );
}
