import {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userYPoint, setUserYPoint]= useState([]);
    // const [newPoints, setNewPoints]= useState([])
    return (
        <AppContext.Provider value= {{userYPoint, setUserYPoint}
        // , {newPoints, setNewPoints}
    }>
        {props.children}
        </AppContext.Provider>
    );
};