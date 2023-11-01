import { estadoInicial, reducer, CART_OPTIONS } from "../reducers/cartReducer";





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
        type: CART_OPTIONS.addTocart,
        payload: producto
    })  

    

    const quitarProductoDelCarrito = (producto) => dispatch({
        type: CART_OPTIONS.quitarProductoDelCarrito,
        payload: producto
    })

    const limpiarCarrito = () => dispatch({
        type: CART_OPTIONS.limpiarCarrito
    })
    return (
        <CartCotext.Provider value={{cart: estado, añadirAlCarrito, limpiarCarrito, quitarProductoDelCarrito}}>
            { children}
        </CartCotext.Provider>
    )
}


