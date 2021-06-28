import "./componentes.css";
import React from "react";
import { ProductosPorPagina } from "../Paginacion/Paginacion.js";
import { ReactComponent as ArrowRight } from "./images/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "./images/arrow-left.svg";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function FiltrosDeProductos({
  currentPage,
  paginate,
  categoria,
  manejarCategoria,
  manejarOrden,
  orden,
  currentPost,
}) {
  const { productos } = useContext(AppContext);

  return (
    <div className="conteinerFiltrosYCantidad">
      <ProductosPorPagina
        currentPage={currentPage}
        categoria={categoria}
        currentPost={currentPost}
      />

      <div className="conteinerFiltros">
        <div className="fitros">
          <select
            name="Ordenar por"
            id="OrdenarPor"
            onChange={manejarOrden}
            value={orden}
          >
            <option value="Sort by:" className="option">
              Sort by:
            </option>
            <option value="Lowest price">Lowest price</option>
            <option value="Highest price">Highest price</option>
          </select>
          <select
            name="Categoria"
            id="Categoria"
            onChange={manejarCategoria}
            value={categoria}
          >
            <option value="categorias">Categories</option>
            <option value="Laptops">Laptops</option>
            <option value="Cameras">Cameras</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Audio">Audio</option>
            <option value="Monitors & TV">Monitors & TV</option>
            <option value="PC Accessories">PC Accessories</option>
            <option value="Gaming">Gaming</option>
            <option value="Tablets & E-readers">Tablets & E-readers</option>
            <option value="Phones">Phones</option>
            <option value="Drones">Drones</option>
            <option value="Phone Accessories">Phone Accessories</option>
          </select>
          {/* <button className="lowest">Lowest price</button>
          <button className="highest">Highest price</button> */}
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
