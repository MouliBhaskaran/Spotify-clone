import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

export const StateProviderContext = createContext(); // creating a context- preparing the data here for what abouts to come


export const StateProvider = ({initialState, reducer, children}) => (
    <StateProviderContext.Provider value={useReducer(reducer, initialState)} >
        {children} 
    </StateProviderContext.Provider>

)

export const useStateProviderValue = () => useContext(StateProviderContext);