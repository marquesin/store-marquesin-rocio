import React, {useState} from "react";
import "../Header.css";
import { ReactComponent as IconHeader } from "../../images/logo.svg";
import { ReactComponent as Coin } from "../../images/coin.svg";
import { ReactComponent as Plus } from "../../images/plus-solid.svg";
import { ReactComponent as Minus } from "../../images/minus-solid.svg";

export function HeaderTop(props) {
    const [disparoPuntos, setDisparoPuntos] = useState(false);
    const ManejarDisparoPuntos = () => {
      setDisparoPuntos(!disparoPuntos);
    };
    return (
      <nav className="conteiner-top-header">
        <div className="iconHeader">
          <IconHeader />
        </div>
        <div className="conteinerLink">{props.Button}</div>
        <div className="usuarioYMonedas">
          <p className="userName">{props.userYPoint?.name}</p>
          <div className="monedaMasPuntos">
            <p className="userPoint"> {props.userYPoint?.points}</p>
            <div className="moneda">
              <Coin />
            </div>
          </div>
          <button
            className="buttonPlus"
            onClick={ManejarDisparoPuntos}
            value={disparoPuntos}
          >
            {disparoPuntos ? <Minus /> : <Plus />}
          </button>
        </div>{" "}
        {disparoPuntos ? (
          <div className="conteinerAgregandoPuntos">{props.AgregandoPuntos}</div>
        ) : (
          ""
        )}
      </nav>
    );
  }