import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    const [productos, setProductos]= useState([]);

    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint, productos, setProductos}
    }>
        {props.children}
        </AppContext.Provider>
    );
};