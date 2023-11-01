
import { useCart } from '../hooks/useCart'
import '../style/productos.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products ( { productos }) { 
    
    const {cart, añadirAlCarrito, quitarProductoDelCarrito} = useCart()
   
    //recorrer el array para ver si el producto ya esta en el carrito

    const verSiEstaEnElCarrito = (producto) => {
        return cart.some(productoInCarrito => {
            return productoInCarrito.id === producto.id
        })
    }
    
    return (
        <main className='productos'>
            <ul>
                {
                    productos.map(producto => {
                        const estaEnElCarrito = verSiEstaEnElCarrito(producto)
                        return (
                            <li key={producto.id}>
                                <img 
                                    src={producto.thumbnail} 
                                    alt={producto.title}  />
                                <div>
                                    <strong>{producto.title}</strong>
                                    <span>$.{producto.price}</span>
                                </div>
                                <button 
                                    style={{backgroundColor : estaEnElCarrito ? 'red' : null}}
                                    onClick={() => {
                                        if (estaEnElCarrito) {
                                            quitarProductoDelCarrito(producto)
                                            
                                            return
                                        }
                                        añadirAlCarrito(producto)
                                    }}>
                                        {
                                            estaEnElCarrito 
                                            ? <RemoveFromCartIcon/>
                                            : <AddToCartIcon/>
                                        }
                                        
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}