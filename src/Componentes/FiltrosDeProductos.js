import "./componentes.css";
import React from "react";
import { ReactComponent as ArrowRight } from "./images/arrow-right.svg";

export default function FiltrosDeProductos() {
  return (
    <div className="conteinerFiltrosYCantidad">
      <div className="conteinerCantidad">
        <p className="cantidadProductDisponible">16 of 32 products</p>
      </div>
      <div className="conteinerSort">
        <p className="sort">Sort by:</p>
      </div>
      <div className="conteinerFiltros">
        <div className="fitros">
          <button className="most">Most recent</button>
          <button className="lowest">Lowest price</button>
          <button className="highest">Highest price</button>
        </div>
      </div>
      <ArrowRight />
    </div>
  );
}
