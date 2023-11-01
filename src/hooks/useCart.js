import { CartCotext } from "../context/CartContext";
import { useContext } from "react";

export function useCart (){
    const {cart, añadirAlCarrito, limpiarCarrito, quitarProductoDelCarrito} = useContext(CartCotext)

    return {cart, añadirAlCarrito, limpiarCarrito, quitarProductoDelCarrito}
}