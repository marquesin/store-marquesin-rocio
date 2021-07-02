import { ReactComponent as BuyBlue } from "./images/Icons/buy-blue.svg";
import { ReactComponent as Coin } from "./images/Icons/coin.svg";

// import { ReactComponent as BuyWhite } from "./images/Icons/buy-white.svg";
// import { ReactComponent as Coin } from "./images/Icons/coin.svg";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

import React from "react";

export default function Productos(props) {
  const { setIdDeProductoPorCanjear } = useContext(AppContext);

  // const [hover, setHover] = useState(true);
  // // const [hoverOut, setHoverOut] = useState(false);

  // const handlerHover = () => {
  //   setHover(false);
  // };
  // const handlerHoverout = () => {
  //   setHoverOut(!hoverOut);
  //   if (hover) {
  //     setHover(false);
  //   }
  // };
  // console.log(hover);
  // useEffect(() => {
  //   <Product />;
  // }, []);
  return (
    <div className="conteinerProductos" key="conteinerProductos">
      {props.productos.map((producto) => {
        return (
          <>
            <Product
              producto={producto}
              // hover={hover}
              // hoverOut={hoverOut}
            ></Product>
          </>
        );
      })}
    </div>
  );
}
function Product(props) {
  const { setIdDeProductoPorCanjear, userYPoint, setLoading } =
    useContext(AppContext);
  // const handlerCanje = (e) => {
  //   setIdDeProductoPorCanjear(props.producto.id);
  //   console.log(props.producto.id);
  // };
  const handlerCanje = () => {
    setIdDeProductoPorCanjear(props.producto._id);
    setLoading(true);
    // setCompraIniciada(true);
  };

  return (
    <>
      <div
        className="conteinerCard"
        key={props.producto._id}
        onClick={handlerCanje}
        // onMouseOver={handlerHover}
        // onMouseOut={handlerHoverout}
        //mouseover/mouseout
        // value={hover}
      >
        <img
          src={props.producto.img.url}
          alt={props.producto.name}
          className="imageProducto"
          // key={props.producto.id}
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
      {/* <div className="hoverProduct">
        <p>{props.producto.cost}</p>
        <div className="cobertorImage">
          <img
            src={props.producto.img.hdUrl}
            alt={props.producto.name + 1}
            className="imageHoverProduct"
          />
        </div>
        <BuyWhite />
        <Coin />
      </div> */}
    </>
  );
}
