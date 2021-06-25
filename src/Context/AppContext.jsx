import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    const [productos, setProductos]= useState([]);
    const[agregarPuntos, setAgregarPuntos]=useState();
    const[getUserYPoints, setgetUserYPoints]=useState(true);
    const[idDeProductoPorCanjear, setIdDeProductoPorCanjear]=useState("");
    const [compraIniciada, setCompraIniciada]= useState(false);

    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint, productos, setProductos,agregarPuntos, setAgregarPuntos,getUserYPoints, setgetUserYPoints,idDeProductoPorCanjear, setIdDeProductoPorCanjear,compraIniciada, setCompraIniciada}
    }>
        {props.children}
        </AppContext.Provider>
    );
};