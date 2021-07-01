import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import "./PaginationHistory.css";
// import { ReactComponent as ArrowRight } from "../Componentes/images/arrow-right.svg";
// import { ReactComponent as ArrowLeft } from "../Componentes/images/arrow-left.svg";
export default function History() {
  const { history } = useContext(AppContext);

  return (
    <div className="conteinerHistory">
      <button className="Home">
        <Link to="/">Return Home</Link>
      </button>
      <h1 className="History">Historia</h1>
      <div className="conteinerItemHistory">
        <p className="itemH">Name</p>
        <p className="itemH">Categoria</p>
        <p className="itemH">Costo</p>
        <p className="itemH">Fecha de compra</p>
        <p className="itemH">Product ID</p>
      </div>
      {history.map((history) => {
        return (
          <div className="conteinerItemHistory">
            <p> {history["name"]}</p>
            <p> {history["category"]}</p>
            <p>{history["cost"]}</p>
            <p> {history["createDate"]}</p>
            <p>
              {history["productId"]}, ID product: {history["_id"]}
            </p>
          </div>
        );
      })}
      <button className="Home">
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
}
