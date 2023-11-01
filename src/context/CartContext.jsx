import { estadoInicial, reducer } from "../reducers/cartReducer";





import { createContext, useReducer } from "react";

// crear el contexto
export const CartCotext = createContext()

//proveer el contexto
export function CartProvider ({ children }){

    //este estado que teniamos a manita ahora lo vamos a traer desde el reducer
    // =>  const [cart, setCart] = useState([])
    
    //utilizando el reducer
    const [ estado, dispatch ] = useReducer( reducer, estadoInicial)

    const añadirAlCarrito = (producto) => dispatch({
        type: 'añadirAlCarrito',
        payload: producto
    })  

    

    const quitarProductoDelCarrito = (producto) => dispatch({
        type: 'quitarProductoDelCarrito',
        payload: producto
    })

    const limpiarCarrito = () => dispatch({
        type: 'limpiarCarrito'
    })
    return (
        <CartCotext.Provider value={{cart: estado, añadirAlCarrito, limpiarCarrito, quitarProductoDelCarrito}}>
            { children}
        </CartCotext.Provider>
    )
}


