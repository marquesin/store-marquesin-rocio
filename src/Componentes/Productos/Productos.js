import { ReactComponent as BuyBlue } from "./images/Icons/buy-blue.svg";
// import { ReactComponent as BuyWhite } from "./images/Icons/buy-white.svg";
// import { ReactComponent as Coin } from "./images/Icons/coin.svg";
// import { useContext } from "react";
// import { AppContext } from "../../Context/AppContext";

import React from "react";

export default function Productos(props) {
  // const { productos } = useContext(AppContext);
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
    <div className="conteinerProductos">
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
  return (
    <>
      <div
        className="conteinerCard"
        key={props.producto._id}
        // onMouseOver={handlerHover}
        // onMouseOut={handlerHoverout}
        //mouseover/mouseout
        // value={hover}
      >
        <img
          src={props.producto.img.url}
          alt={props.producto.name}
          className="imageProducto"
          key={props.producto.id}
        ></img>
        <BuyBlue className="buyBlue" />
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
