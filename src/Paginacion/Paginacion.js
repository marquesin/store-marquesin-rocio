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
      <p className="cantidadProductDisponibleBotton">16 of 32 products</p>
      {currentPage == 2 ? (
        <button>
          <ArrowLeft onClick={() => paginate(1)} />
        </button>
      ) : (
        ""
      )}
      {pageNumber.map((numbers) => {
        return (
          <div key={numbers} className="item-pagina">
            <a
              href="!#"
              className="page-link"
              onClick={() => paginate(numbers)}
            >
              {numbers}
            </a>
          </div>
        );
      })}{" "}
      {currentPage == 1 ? (
        <>
          <botton>
            <ArrowRight onClick={() => paginate(2)} />
          </botton>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
