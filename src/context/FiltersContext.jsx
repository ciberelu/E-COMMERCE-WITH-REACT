import { createContext } from "react"
import { useState } from "react"

//crear el contexto
//el contexto creado es el que se consume
export const FiltrosContexto = createContext()

//proveer el contexto
//la funcion provider debe envolver a los componentes que uno quiere que tengan acceso
// eslint-disable-next-line react/prop-types
export function FiltrosContextoProvider ({ children } ){ 
    const [ filtros, setFiltros ] = useState({
        categoria: 'all',
        precioMinimo: 0
      })

    return (
        <FiltrosContexto.Provider value={{filtros, setFiltros}}>
            { children }
        </FiltrosContexto.Provider>
    )
}