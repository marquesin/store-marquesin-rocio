import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint}}>
        {props.children}
        </AppContext.Provider>
    );
};