import React from "react";
import "./Loading.css"
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";
import { ReactComponent as LoadingIcon } from "../images/loading.svg";

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
