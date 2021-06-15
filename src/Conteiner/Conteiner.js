import Header from "../Componentes/Header.js";
import FiltrosDeProductos from "../Componentes/FiltrosDeProductos";
import Productos from "../Componentes/Productos/Productos.js";
import PieDePagina from "../Componentes/PieDePagina.js";
import Api from "../Api/Api";
import React from "react";

export default function Conteiner() {
  return (
    <div>
      <Header />
      <FiltrosDeProductos />
      <Productos />
      <PieDePagina />
      <Api />
    </div>
  );
}
