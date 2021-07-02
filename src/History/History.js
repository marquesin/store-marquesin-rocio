import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import "./PaginationHistory.css";
import image from "./image/headera.png";
// import Header from "../Componentes/Header";

export default function History({ currentPostH }) {
  return (
    <div className="conteinerHistory">
      {/* <Header /> */}
      <div className="conteinerHome">
        <button className="Home">
          <Link to="/">Return Home</Link>
        </button>
      </div>
      <img src={image} alt={"image"} className="image" />
      <h1 className="electronics">History</h1>
      <div className="conteinerItemHistory">
        <p className="itemH">Name</p>
        <p className="itemH">Categoria</p>
        <p className="itemH">Costo</p>
        <p className="itemH">Fecha de compra</p>
        <p className="itemH">Product ID</p>
      </div>
      {currentPostH}
      <button className="Home">
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
}
let ItemHistory = () => {
  const { history } = useContext(AppContext);
  return history.map((history) => {
    return (
      <div className="conteinerItemHistory">
        <p className="resultH"> {history["name"]}</p>
        <p className="resultH"> {history["category"]}</p>
        <p className="resultH">{history["cost"]}</p>
        <p className="resultH"> {history["createDate"]}</p>
        <p className="resultH">
          {history["productId"]}, ID product: {history["_id"]}
        </p>
      </div>
    );
  });
};
export { ItemHistory };
