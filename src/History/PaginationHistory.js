import React from "react";
import "./PaginationHistory.css";
import "../Paginacion/Paginacion.css";

export default function PaginationHistory({
  historyPerPagin,
  totalProducts,
  paginateH,
}) {
  const pageNumberh = [];
  for (let i = 1; i <= Math.ceil(totalProducts / historyPerPagin); i++) {
    pageNumberh.push(i);
  }

  return (
    <div className="conteinerPaginationH">
      <div className="item-paginaH">
        {pageNumberh.map((numbers) => {
          return (
            <div className="conteinerNroPagHistory">
              <button
                className="buttonNumberPage"
                onClick={() => paginateH(numbers)}
              >
                {numbers}
              </button>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
