import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Api() {
  const { userYPoint, setUserYPoint } = useContext(AppContext);
  //   -------------------Usuario y sus puntos actuales----------------------
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    Acept: "application/json",
  };
  fetch(
    `https://private-77968-aerolabchallenge.apiary-mock.com/user/me`,
    headers
  )
    .then((response) => response.json(response))
    .then((resultado) => {
      setUserYPoint(resultado);
    });

  // //puntos
  // fetch(
  //   "https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/user/poin/amount=1000",
  //   headers
  // )
  //   .then((response) => response.json(response))
  //   .then((resultado) => {
  //     console.log(resultado);
  //   })
  //   .catch((e) => alert("Error: " + e));

  // //productos

  // fetch(
  //   "https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/products",
  //   headers
  // )
  //   .then((response) => response.json(response))
  //   .then((resultado) => {
  //     return console.log(resultado);
  //   })
  //   .catch((e) => alert("error: " + e));
  return setUserYPoint;
}

// useEffect(() => {
//   Api();
// }, []);
