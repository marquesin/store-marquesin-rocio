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
    setCompraFallida,
  } = useContext(AppContext);
  const headers = {
    "Content-Type": "application/json",
    Acept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
  };
  //   -------------------Usuario y sus puntos actuales----------------------
  useEffect(() => {
    setLoading(true);
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers,
    })
      .then((response) => response.json(response))
      .then((usuario) => {
        return setUserYPoint(usuario), setLoading(false);
      })
      .catch((e) => console.log("Error: " + e));
    setgetUserYPoints(false);
  }, [getUserYPoints, setUserYPoint]);

  //1000, 5000 o 7500 puntos PUEDEN INGRESAR, NO OTROS
  //   ------------------------------Productos---------------------------------------
  useEffect(() => {
    fetch(`https://coding-challenge-api.aerolab.co/products`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json(response))
      .then((resultado) => {
        return setProductos(resultado);
      })
      .catch((e) => console.log("Error: " + e));
  }, [setProductos, setUserYPoint, agregarPuntos, setAgregarPuntos]);

  //   ------------------------------Agregar Puntos-------------------------------
  useEffect(() => {
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
        .catch((e) => console.log("Error: " + e));
      setgetUserYPoints(true);
      setAgregarPuntos();
    }
  }, [agregarPuntos]);

  // ------------------------------Para canjear productos:--------------------------------------------------
  useEffect(() => {
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
        .catch((e) => console.log("Error:" + e) + setCompraFallida(true));
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
          return setHistory(resultado), setLoading(false);
        })
        .catch((e) => console.log("Error:" + e));
    }
  }, [setHistory]);
  return (
    <>
      {
        (setUserYPoint,
        userYPoint,
        setProductos,
        agregarPuntos,
        idDeProductoPorCanjear,
        setHistory,
        setCompraFallida)
      }
    </>
  );
}
