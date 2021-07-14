import { ReactComponent as BuyBlue } from "../images/Icons/buy-blue.svg";
import { ReactComponent as Coin } from "../images/Icons/coin.svg";
import { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

export default function Producto(props) {
    const { setIdDeProductoPorCanjear, userYPoint, setLoading } =
      useContext(AppContext);
    const handlerCanje = () => {
      setIdDeProductoPorCanjear(props.producto._id);
      setLoading(true);
    };
  
    return (
      <>
        <div
          className="conteinerCard"
          key={props.producto._id}
          onClick={handlerCanje}
        >
          <img
            src={props.producto.img.url}
            alt={props.producto.name}
            className="imageProducto"
          ></img>
          {userYPoint.points > props.producto.cost ? (
            <BuyBlue className="buyBlue" onClick={handlerCanje} />
          ) : userYPoint.points < props.producto.cost ? (
            <div className="needMoney">
              <p className="pNeed">
                You need {props.producto.cost - userYPoint.points}
              </p>
              <Coin className="coinNeed" />
            </div>
          ) : (
            ""
          )}
          <div className="detalleProducto">
            <p className="categoryProducto">{props.producto.category}</p>
            <p className="nameProducto">{props.producto.name}</p>
          </div>
        </div>
      </>
    );
  }
  