import React from "react";

import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { ReactComponent as Check } from "../Componentes/images/check-solid.svg";

export default function CompraExitosaPopUp() {
  const { compraIniciada, setCompraIniciada } = useContext(AppContext);
  return (
    <div>
      {compraIniciada === true ? (
        <div className="conteinerPopUp">
          <button className="buttonX" onClick={() => setCompraIniciada(false)}>
            X
          </button>{" "}
          <br />
          <p className="compraRealizadaText">
            {" "}
            You've redeem the product successfully{" "}
          </p>{" "}
          <br />
          <Check />
          <br />
          <button
            className="continuarComprando"
            onClick={() => setCompraIniciada(false)}
          >
            Continue buying...
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
