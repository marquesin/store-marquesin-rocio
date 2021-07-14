import "./Productos.css"
import Producto from "./Producto/Producto.js";

import React from "react";

export default function Productos(props) {
  return (
    <section className="conteinerProductos" key="conteinerProductos">
      {props.productos.map((producto) => {
        return (
          <>
            <Producto producto={producto} key={producto.name}></Producto>
          </>
        );
      })}
    </section>
  );
}
