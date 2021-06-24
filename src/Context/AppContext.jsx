import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    const [productos, setProductos]= useState([]);
    const[agregarPuntos, setAgregarPuntos]=useState();
    const[getUserYPoints, setgetUserYPoints]=useState(true);
    const[idDeProductoPorCanjear, setIdDeProductoPorCanjear]=useState("");

    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint, productos, setProductos,agregarPuntos, setAgregarPuntos,getUserYPoints, setgetUserYPoints,idDeProductoPorCanjear, setIdDeProductoPorCanjear}
    }>
        {props.children}
        </AppContext.Provider>
    );
};