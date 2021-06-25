import React, { useState } from "react";
import { useContext } from "react";
import Header from "../Componentes/Header.js";
import FiltrosDeProductos from "../Componentes/FiltrosDeProductos";
import Productos from "../Componentes/Productos/Productos.js";
import Api from "../Api/Api";
import Pagination from "../Paginacion/Paginacion.js";
import { AppContext } from "../Context/AppContext.jsx";
import CompraExitosaPopUp from "../Componentes/CompraExitosaPopUp.js";

export default function Conteiner() {
  const { productos } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPagin] = useState(16);

  const indexOfLastPost = currentPage * productPerPagin;
  const indexOfFirstPost = indexOfLastPost - productPerPagin;
  const currentPost = productos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Header />
      <FiltrosDeProductos currentPage={currentPage} paginate={paginate} />
      <CompraExitosaPopUp></CompraExitosaPopUp>
      <Productos productos={currentPost} />
      <Pagination
        productPerPagin={productPerPagin}
        totalProducts={productos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Api />
    </div>
  );
}
