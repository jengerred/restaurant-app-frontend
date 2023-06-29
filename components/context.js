import React from "react";
import { createContext } from "react";

const AppContext = createContext(
    {
        isAuthenticated:false, 

        cart: {
            items:[], 
            total:0},

            addItem:()=>{},
            removeItem:()=>{},

        user:false, 
        setUser:()=>{},
    });

    export default AppContext;
    



