import { useState, createContext, useEffect } from "react";
import clienteAxios from '../config/axios'

const PacientesContext = createContext()

export const PacientesProvider = ({children}) => {

    return(
        <PacientesContext.Provider value={{

        }}>
            {children}
        </PacientesContext.Provider>
    )

}

export default PacientesContext;

