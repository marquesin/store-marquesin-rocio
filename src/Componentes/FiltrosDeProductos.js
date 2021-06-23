import "./componentes.css";
import React from "react";
import { ReactComponent as ArrowRight } from "./images/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "./images/arrow-left.svg";

export default function FiltrosDeProductos({ currentPage, paginate }) {
  return (
    <div className="conteinerFiltrosYCantidad">
      <div className="conteinerCantidad">
        {currentPage === 1 ? (
          <p className="cantidadProductDisponible">16 of 32 products</p>
        ) : (
          <p className="cantidadProductDisponible">32 of 32 products</p>
        )}
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
      {currentPage === 1 ? (
        <div className="arrow-top">
          <ArrowRight onClick={() => paginate(2)} />
        </div>
      ) : currentPage === 2 ? (
        <div className="arrow-top">
          <ArrowLeft onClick={() => paginate(1)} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
