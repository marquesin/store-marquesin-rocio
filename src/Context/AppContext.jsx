import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    const [productos, setProductos]= useState([]);
    const[agregarPuntos, setAgregarPuntos]=useState();
    const[getUserYPoints, setgetUserYPoints]=useState(true);
    const[idDeProductoPorCanjear, setIdDeProductoPorCanjear]=useState("");
    const [compraIniciada, setCompraIniciada]= useState(false);
    const [compraFallida, setCompraFallida]= useState(false);
    const [loading, setLoading]=useState(false);
    const [history, setHistory]= useState ([]);

    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint, productos, setProductos,agregarPuntos, setAgregarPuntos,getUserYPoints, setgetUserYPoints,idDeProductoPorCanjear, setIdDeProductoPorCanjear,compraIniciada, setCompraIniciada,compraFallida, setCompraFallida, loading, setLoading,history, setHistory}
    }>
        {props.children}
        </AppContext.Provider>
    );
};