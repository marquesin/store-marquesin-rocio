import React from "react";

import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { ReactComponent as Check } from "../Componentes/images/check-solid.svg";
import { ReactComponent as Cross } from "./Productos/images/Icons/times-circle-solid.svg";

export default function CompraExitosaPopUp() {
  const { compraIniciada, setCompraIniciada, compraFallida, setCompraFallida } =
    useContext(AppContext);
  return (
    <div>
      {compraIniciada ? (
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
      ) : compraFallida === true ? (
        <div className="conteinerPopUp">
          <button className="buttonX" onClick={() => setCompraFallida(false)}>
            X
          </button>{" "}
          <br />
          <Cross />
          <br />
          <p className="compraRealizadaText">
            Error, something happened, try again...
          </p>{" "}
          <br />
          <button
            className="continuarComprando"
            onClick={() => setCompraFallida(false)}
          >
            Try again
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
