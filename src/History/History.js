import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
export default function History() {
  const { history } = useContext(AppContext);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [productPerPagin] = useState(100);

  // const indexOfLastPost = currentPage * productPerPagin;
  // const indexOfFirstPost = indexOfLastPost - productPerPagin;
  // const currentPost = nuevaLista.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(totalProducts / productPerPagin); i++) {
  //   pageNumber.push(i);
  return (
    <div>
      <Link to="/">Home</Link> <h1>Historial de compras</h1>
      {history.map((history) => {
        return (
          <>
            <div>Name: {history["name"]}</div>
            <div>Categoria: {history["category"]}</div>
            <div>
              {" "}
              Costo:
              {history["cost"]}
            </div>
            <div>Fecha de compra: {history["createDate"]}</div>
            <div>
              {" "}
              ProductId:
              {history["productId"]}, ID product: {history["_id"]}
            </div>
          </>
        );
      })}
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
function name(params) {}
