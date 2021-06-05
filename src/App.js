import "./App.css";
import Container from "./Conteiner.js";
import { useEffect } from "react";
// import Api from "./Api/Api.js";

function App() {
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    };
    fetch(
      `https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/user/me`,
      headers
    )
      .then((response) => response.json(response))
      .then((resultado) => {
        return console.log(resultado);
      })
      .catch((e) => alert("Error: " + e));
    //productos

    fetch(
      "https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/products",
      headers
    )
      .then((response) => response.json(response))
      .then((resultado) => {
        return console.log(resultado);
      })
      .catch((e) => alert("error: " + e));
    //   fetch(
    //     "https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/user/poin/amount",
    //     headers
    //   )
    //     .then((response) => response.json(response))
    //     .then((resultado) => {
    //       console.log(resultado);
    //     })
    //     .catch((e) => alert("Error: " + e));
  }, []);

  return (
    <div className="App">
      <Container />
      {/* <Api /> */}
    </div>
  );
}

export default App;
