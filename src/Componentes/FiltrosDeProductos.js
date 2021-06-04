import React from "react";
import { ReactComponent as ArrowRight } from "./images/arrow-right.svg";

export default function FiltrosDeProductos() {
  return (
    <div>
      <div>cantidad de productos visibles 16/32</div>
      <div>
        Sort by:
        <button>Most recent</button>
        <button>Lowest price</button>
        <button>Highest price</button>
      </div>
      <ArrowRight />
    </div>
  );
}
