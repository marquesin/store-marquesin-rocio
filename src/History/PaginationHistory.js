import React from "react";
import "./PaginationHistory.css";
import "../Paginacion/Paginacion.css";

export default function PaginationHistory({
  productPerPagin,
  totalProducts,
  paginate,
}) {
  const pageNumberh = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPagin); i++) {
    pageNumberh.push(i);
  }

  return (
    <div className="conteinerPaginationH">
      <div className="item-paginaH">
        {pageNumberh.map((numbers) => {
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
    </div>
  );
}
