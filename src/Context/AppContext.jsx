import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint] = useState([]);
    const [productos, setProductos] = useState([]);
    const [agregarPuntos, setAgregarPuntos] = useState();
    const [getUserYPoints, setgetUserYPoints] = useState(true);
    const [idDeProductoPorCanjear, setIdDeProductoPorCanjear] = useState("");
    const [compraIniciada, setCompraIniciada] = useState(false);
    const [compraFallida, setCompraFallida] = useState(false);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPagin] = useState(16);
    const [currentPageH, setCurrentPageH] = useState(1);
    const [historyPerPagin] = useState(30);

    return (
        <AppContext.Provider value={{
            userYPoint, setUserYPoint, productos, setProductos, agregarPuntos, setAgregarPuntos, getUserYPoints, setgetUserYPoints, idDeProductoPorCanjear, setIdDeProductoPorCanjear, compraIniciada, setCompraIniciada, compraFallida, setCompraFallida, loading, setLoading, history, setHistory, currentPage, setCurrentPage, productPerPagin, currentPageH, setCurrentPageH, historyPerPagin
        }}>
            {props.children}
        </AppContext.Provider>
    );
};