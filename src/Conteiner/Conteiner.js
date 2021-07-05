import React, { useState } from "react";
import { useContext } from "react";
import Header from "../Componentes/Header.js";
import FiltrosDeProductos from "../Componentes/FiltrosDeProductos";
import Productos from "../Componentes/Productos/Productos.js";
import Api from "../Api/Api";
import Pagination from "../Paginacion/Paginacion.js";
import { AppContext } from "../Context/AppContext.jsx";
import CompraExitosaPopUp from "../Componentes/CompraExitosaPopUp.js";
import Loading from "../Componentes/Loading.js";
import { Route } from "react-router-dom";
import History from "../History/History.js";
import PaginationHistory from "../History/PaginationHistory.js";
import { ItemHistory } from "../History/History";

export default function Conteiner() {
  const { productos, history } = useContext(AppContext);

  const [categoria, setCategoria] = useState("categorias");
  const [orden, setOden] = useState("Sort by:");

  const manejarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const manejarOrden = (e) => {
    setOden(e.target.value);
  };
  const productosOrden = () => {
    if (orden === "Lowest price") {
      return productos
        .sort((a, b) => a.cost - b.cost)
        .map((productos) => {
          return productos;
        });
    } else if (orden === "Highest price") {
      return productos
        .sort((a, b) => b.cost - a.cost)
        .map((productos) => {
          return productos;
        });
    } else if (orden === "Sort by:") {
      return productos;
    }
    return productos;
  };
  const ordenados = productosOrden();

  const nuevaLista = ordenados.filter((productos) => {
    if (categoria !== "categorias") {
      return productos.category === categoria;
    } else if (categoria === "categorias") {
      return productos;
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPagin] = useState(16);

  const [currentPageH, setCurrentPageH] = useState(1);
  const [historyPerPagin] = useState(30);

  const indexOfLastPost = currentPage * productPerPagin;
  const indexOfFirstPost = indexOfLastPost - productPerPagin;

  const indexOfLastPostH = currentPageH * historyPerPagin;
  const indexOfFirstPostH = indexOfLastPostH - historyPerPagin;

  const currentPost = nuevaLista.slice(indexOfFirstPost, indexOfLastPost);

  const listH = ItemHistory();
  const currentPostH = listH.slice(indexOfFirstPostH, indexOfLastPostH);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateH = (pageNumberh) => setCurrentPageH(pageNumberh);

  return (
    <div>
      <Route exact path="/">
        <Header />
        <FiltrosDeProductos
          currentPage={currentPage}
          paginate={paginate}
          categoria={categoria}
          manejarCategoria={manejarCategoria}
          orden={orden}
          manejarOrden={manejarOrden}
          currentPost={currentPost}
        />
        <Loading></Loading>
        <CompraExitosaPopUp></CompraExitosaPopUp>
        <Productos productos={currentPost} />
        <Pagination
          productPerPagin={productPerPagin}
          totalProducts={productos.length}
          paginate={paginate}
          currentPage={currentPage}
          currentPost={currentPost}
          categoria={categoria}
        />
        <Api />
      </Route>
      <Route exact path="/history">
        <History currentPostH={currentPostH} />
        <PaginationHistory
          historyPerPagin={historyPerPagin}
          totalProducts={history.length}
          paginateH={paginateH}
        />
      </Route>
    </div>
  );
}
