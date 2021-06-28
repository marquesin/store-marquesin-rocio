import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
export default function History() {
  const { history } = useContext(AppContext);
  return (
    <div>
      <Link to="/">Home</Link> <h1>Historial de compras</h1>
      {history.map((history) => {
        return (
          <>
            <p>
              Name: {history.name} Categoria: {history.category}, Costo:{" "}
              {history.cost}, Fecha de compra: {history.createDate} ProductId:{" "}
              {history.productId}, ID product: {history._id}
            </p>
          </>
        );
      })}
      {/* <p>{history}</p> */}
    </div>
  );
}
// category: "Laptops"
// cost: 600
// createDate: "2020-06-27T18:44:51.803Z"
// img: {url: "https://aerolab-challenge.now.sh/images/AcerAspire-x1.png", hdUrl: "https://aerolab-challenge.now.sh/images/AcerAspire-x2.png"}
// name: "Acer Aspire E1-522"
// productId: "5a0b36ac734d1d08bf70856c"
// _id: "5e59e22c742352001ed90974"
