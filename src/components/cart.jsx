import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'

import '../style/cart.css'
import { useCart } from '../hooks/useCart'



export function Cart (){
    const checkBoxId = useId()
    const { cart, limpiarCarrito, añadirAlCarrito } = useCart()
    const [mostrarScroll, setMostrarScroll] = useState(false)

    function handleOnMouseEnter () {
        setMostrarScroll(true)
    }
    
    function handleOnMouseLeave () {
        setMostrarScroll(false)
    }
    
    return (
        <>
            <label className='cart-button' htmlFor={checkBoxId}><CartIcon/></label>
            <input type="checkbox"  id={checkBoxId} hidden />

            <aside className={mostrarScroll ? 'cart scrollCart' : 'cart'} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                <ul>
                    {
                        cart.map(productoEnCarrito => {
                            return (
                                <li key={productoEnCarrito.id}>
                                    <img src={productoEnCarrito.thumbnail} alt={productoEnCarrito.title}  />
                                    <div>
                                        <strong>{productoEnCarrito.title}</strong><span>${productoEnCarrito.price}</span>
                                    </div>
                                    <footer>
                                        <small>Cantidad</small> <span>{productoEnCarrito.cantidad}</span>
                                        <button onClick={() => añadirAlCarrito(productoEnCarrito)}>+</button>
                                    </footer>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                <button onClick={limpiarCarrito}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}