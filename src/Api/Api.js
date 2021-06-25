import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

export default function Api() {
  const {
    setUserYPoint,
    setProductos,
    agregarPuntos,
    setAgregarPuntos,
    getUserYPoints,
    setgetUserYPoints,
    idDeProductoPorCanjear,
    setIdDeProductoPorCanjear,
    setCompraIniciada,
  } = useContext(AppContext);

  const headers = {
    "Content-Type": "application/json",
    Acept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
  };

  //   -------------------Usuario y sus puntos actuales----------------------
  useEffect(() => {
    fetch(`https://private-77968-aerolabchallenge.apiary-proxy.com/user/me`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json(response))
      .then((usuario) => {
        return setUserYPoint(usuario);
      })
      .catch((e) => console.log("error: " + e));
    setgetUserYPoints(false);
  }, [getUserYPoints]);

  //1000, 5000 o 7500 puntos PUEDEN INGRESAR NO OTROS
  //   ------------------------------Productos---------------------------------------
  useEffect(() => {
    fetch("https://private-77968-aerolabchallenge.apiary-proxy.com/products", {
      method: "GET",
      headers,
    })
      .then((response) => response.json(response))
      .then((resultado) => {
        return setProductos(resultado);
      })
      .catch((e) => console.log("error: " + e));
  }, [setProductos, setUserYPoint, agregarPuntos, setAgregarPuntos]);

  //   ------------------------------Agregar Puntos-------------------------------

  useEffect(() => {
    if (agregarPuntos > 0) {
      fetch(
        "https://private-77968-aerolabchallenge.apiary-proxy.com/user/points",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
          },
          body: `{  "amount": 
        ${agregarPuntos}
    }`,
        }
      )
        .then((response) => response.json(response))
        .then((resultado) => {
          return resultado;
        })
        .catch((e) => "Error: " + e);
      setgetUserYPoints(true);
      setAgregarPuntos();
    }
  }, [agregarPuntos]);

  // Para canjear productos:

  useEffect(() => {
    if (idDeProductoPorCanjear !== "") {
      fetch("https://private-77968-aerolabchallenge.apiary-proxy.com/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
        },
        body: `{  "productId": 
    "${idDeProductoPorCanjear}"
}`,
      })
        .then((response) => response.json(response))
        .then((resultado) => {
          return console.log(resultado), setCompraIniciada(true);
        })
        .catch((e) => "Error:" + e);
      setgetUserYPoints(true);
      setIdDeProductoPorCanjear("");
    }
  }, [idDeProductoPorCanjear]);
  return (
    <>{(setUserYPoint, setProductos, agregarPuntos, idDeProductoPorCanjear)}</>
  );
}
