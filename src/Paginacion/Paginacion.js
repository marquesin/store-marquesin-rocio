import React from "react";
import "./Paginacion.css";
import { ReactComponent as ArrowRight } from "../Componentes/images/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../Componentes/images/arrow-left.svg";

export default function Paginacion({
  productPerPagin,
  totalProducts,
  paginate,
  currentPage,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPagin); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="conteinerPagination">
      {currentPage === 1 ? (
        <p className="cantidadProductDisponibleBotton">16 of 32 products</p>
      ) : (
        <p className="cantidadProductDisponibleBotton">32 of 32 products</p>
      )}
      <div className="item-pagina">
        {pageNumber.map((numbers) => {
          return (
            <button
              className="buttonNumberPage"
              onClick={() => paginate(numbers)}
            >
              {numbers}
            </button>
          );
        })}{" "}
      </div>
      {currentPage === 1 ? (
        <div className="arrow">
          <ArrowRight onClick={() => paginate(2)} />
        </div>
      ) : currentPage === 2 ? (
        <div className="arrow">
          <ArrowLeft onClick={() => paginate(1)} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
