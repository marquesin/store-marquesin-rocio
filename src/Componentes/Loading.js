import React from "react";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { ReactComponent as LoadingIcon } from "../Componentes/images/loading.svg";

export default function Loading() {
  const { loading } = useContext(AppContext);
  return (
    <>
      {loading === true ? (
        <div className="conteinerLoading">
          <LoadingIcon />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
