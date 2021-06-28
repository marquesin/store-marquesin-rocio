import React from "react";
import "./Paginacion.css";
import { ReactComponent as ArrowRight } from "../Componentes/images/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../Componentes/images/arrow-left.svg";

export default function Paginacion({
  productPerPagin,
  totalProducts,
  paginate,
  currentPage,
  currentPost,
  categoria,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPagin); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="conteinerPagination">
      <ProductosPorPagina
        currentPage={currentPage}
        categoria={categoria}
        currentPost={currentPost}
      />
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
export function ProductosPorPagina(props) {
  return (
    <div className="conteinerCantidad">
      {props.currentPage === 1 && props.categoria !== "categorias" ? (
        <p className="cantidadProductDisponible">
          {props.currentPost.length} of {props.currentPost.length} products
        </p>
      ) : props.currentPage === 1 ? (
        <p className="cantidadProductDisponible">16 of 32 products</p>
      ) : props.currentPage === 2 && props.categoria === "categorias" ? (
        <p className="cantidadProductDisponible">32 of 32 products</p>
      ) : (
        ""
      )}
    </div>
  );
}
