import "./componentes.css";
import React from "react";
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
}) {
  const { productos } = useContext(AppContext);

  return (
    <div className="conteinerFiltrosYCantidad">
      <div className="conteinerCantidad">
        {currentPage === 1 ? (
          <p className="cantidadProductDisponible">16 of 32 products</p>
        ) : (
          <p className="cantidadProductDisponible">32 of 32 products</p>
        )}
      </div>
      {/* <div className="conteinerSort">
        <p className="sort">Sort by:</p>
      </div> */}
      <div className="conteinerFiltros">
        <div className="fitros">
          <select
            name="Ordenar por"
            id="Ordenar por"
            onChange={manejarOrden}
            value={orden}
          >
            <option value="Sort by:">Sort by:</option>
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
