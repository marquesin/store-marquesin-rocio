// import { useEffect } from "react";
// export default function Api() {
//   //usuarios
//   useEffect(() => {
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
//     };
//  fetch(
//       `https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/user/me`,
//       headers
//     )
//       .then((response) => response.json(response))
//       .then((resultado) => {
//         return console.log(resultado);
//       })
//       .catch((e) => alert("Error: " + e));
//     //puntos
//     //   fetch(
//     //     "https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/user/poin/amount=1000",
//     //     headers
//     //   )
//     //     .then((response) => response.json(response))
//     //     .then((resultado) => {
//     //       console.log(resultado);
//     //     })
//     //     .catch((e) => alert("Error: " + e));

//     //productos

//     fetch(
//       "https://private-anon-c923f3fb16-aerolabchallenge.apiary-mock.com/products",
//       headers
//     )
//       .then((response) => response.json(response))
//       .then((resultado) => {
//         return console.log(resultado);
//       })
//       .catch((e) => alert("error: " + e));
//   }, []);
// }
