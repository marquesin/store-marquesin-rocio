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

export default function Conteiner() {
  const { productos } = useContext(AppContext);
  //aca tengo que filtar por categoria
  //
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
      return productos.category == categoria;
    } else if (categoria === "categorias") {
      return productos;
    }
  });

  // if (orden == "Lowest price") {
  //     return productos.cost.sort(function (a, b) {
  //       return a - b;
  //     });
  //   } else if (orden === "Sort by:") {
  //     return productos;
  //   } else if (orden === "Highest price") {
  //     return productos.cost.sort(function (a, b) {
  //       return b - a;
  //     });
  //   }
  //   return productos;

  // numeros.sort(function(a, b){return a - b}); // --> 3, 12, 23
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPagin] = useState(16);

  const indexOfLastPost = currentPage * productPerPagin;
  const indexOfFirstPost = indexOfLastPost - productPerPagin;
  const currentPost = nuevaLista.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
        />
        <Loading></Loading>
        <CompraExitosaPopUp></CompraExitosaPopUp>
        <Productos productos={currentPost} />
        <Pagination
          productPerPagin={productPerPagin}
          totalProducts={productos.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <Api />
      </Route>
      <Route exact path="/history">
        <History />
      </Route>
    </div>
  );
}
