import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    const [productos, setProductos]= useState([]);
    const[agregarPuntos, setAgregarPuntos]=useState();
    const[getUserYPoints, setgetUserYPoints]=useState(true);

    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint, productos, setProductos,agregarPuntos, setAgregarPuntos,getUserYPoints, setgetUserYPoints}
    }>
        {props.children}
        </AppContext.Provider>
    );
};