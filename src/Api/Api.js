import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

export default function Api() {
  const { setUserYPoint, setProductos } = useContext(AppContext);

  //   -------------------Usuario y sus puntos actuales----------------------
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Acept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    };
    fetch(`https://private-77968-aerolabchallenge.apiary-mock.com/user/me`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json(response))
      .then((usuario) => {
        return setUserYPoint(usuario);
      })
      .catch((e) => console.log("error: " + e));

    //   ------------------------------Agregar Puntos-------------------------------
    //PROBLEMA CON PUNTOS AGREGADOS ANDA PERO ROMPE EL NAME DE USUARIO
    // fetch(
    //   "https://private-77968-aerolabchallenge.apiary-mock.com/user/points",
    //   {
    //     method: "POST",
    //     body: { amount: 1000 },
    //   },
    //   headers
    // )
    //   .then((response) => response.json(response))
    //   .then((resultado) => {
    //     return console.log(resultado);
    //   })
    //   .catch((e) => "Error: " + e);

    //   ------------------------------Productos---------------------------------------

    fetch(
      "https://private-amnesiac-77968-aerolabchallenge.apiary-proxy.com/products",
      { method: "GET", headers }
    )
      .then((response) => response.json(response))
      .then((resultado) => {
        return setProductos(resultado);
      })
      .catch((e) => console.log("error: " + e));
  }, [setProductos, setUserYPoint]);

  return <>{(setUserYPoint, setProductos)}</>;
}
