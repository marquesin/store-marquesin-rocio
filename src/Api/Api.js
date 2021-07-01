import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

export default function Api() {
  const {
    userYPoint,
    setUserYPoint,
    setProductos,
    agregarPuntos,
    setAgregarPuntos,
    getUserYPoints,
    setgetUserYPoints,
    idDeProductoPorCanjear,
    setIdDeProductoPorCanjear,
    setCompraIniciada,
    setLoading,
    setHistory,
  } = useContext(AppContext);
  setLoading(true);
  const headers = {
    "Content-Type": "application/json",
    Acept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
  };
  // const BASE_URL = `https://private-77968-aerolabchallenge.apiary-proxy.com/`;

  //   -------------------Usuario y sus puntos actuales----------------------
  useEffect(() => {
    setLoading(true);
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers,
    })
      .then((response) => response.json(response))
      .then((usuario) => {
        return setUserYPoint(usuario);
      })
      .catch((e) => console.log("error: " + e));
    setgetUserYPoints(false);
    // setLoading(false);
  }, [getUserYPoints, setUserYPoint]);

  //1000, 5000 o 7500 puntos PUEDEN INGRESAR NO OTROS
  //   ------------------------------Productos---------------------------------------
  useEffect(() => {
    setLoading(true);
    fetch(`https://coding-challenge-api.aerolab.co/products`, {
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
    setLoading(true);
    if (agregarPuntos > 0) {
      setLoading(true);
      fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
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
      })
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
    setLoading(true);
    if (idDeProductoPorCanjear !== "") {
      setLoading(true);
      fetch(`https://coding-challenge-api.aerolab.co/redeem`, {
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
          return resultado, setCompraIniciada(true);
        })
        .catch((e) => "Error:" + e);
      setgetUserYPoints(true);
      setIdDeProductoPorCanjear("");
    }
  }, [idDeProductoPorCanjear]);

  // -----------------------------------------historial--------------------------
  useEffect(() => {
    if (userYPoint !== []) {
      setLoading(true);
      fetch(`https://coding-challenge-api.aerolab.co/user/history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
        },
      })
        .then((response) => response.json(response))
        .then((resultado) => {
          return setHistory(resultado);
        })
        .catch((e) => "Error:" + e);
    }
  }, [setHistory]);
  setLoading(false);
  return (
    <>
      {
        (setUserYPoint,
        userYPoint,
        setProductos,
        agregarPuntos,
        idDeProductoPorCanjear,
        setHistory)
      }
    </>
  );
}
