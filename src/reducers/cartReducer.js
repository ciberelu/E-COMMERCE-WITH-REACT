//aplicando un reducer

//Hay que indicar cual es el estado incial 

export const estadoInicial = JSON.parse(window.localStorage.getItem('cart')) || []

function actualizarLocalStorage (estado){
    window.localStorage.setItem('cart', JSON.stringify(estado))
    
}

export const CART_OPTIONS = {
    addTocart: "añadirAlCarrito",
    limpiarCarrito: "limpiarCarrito",
    quitarProductoDelCarrito: "quitarProductoDelCarrito"


}

// declarar el reduce
//el reducer recibe por parametro el estado y la accion, y devuelve ( retorna ) el nuevo estado

export const reducer = (estado, accion) => {
    const {type, payload} = accion
    
    if (type === 'añadirAlCarrito'){
        const { id } = payload
        const indiceSiEstaEnElCarrito = estado.findIndex(productoEnCaro => {
            return productoEnCaro.id === id
        })
    

         

        if (indiceSiEstaEnElCarrito >= 0){
            const newEstado = [...estado]
            newEstado[indiceSiEstaEnElCarrito].cantidad += 1
            actualizarLocalStorage(newEstado)
            return newEstado
        }
        
        
        const newState = [
            ...estado, {...payload, cantidad: 1}
        ]
        actualizarLocalStorage(newState)
        return newState
    }

    if ( type === 'limpiarCarrito'){
        actualizarLocalStorage([])
        window.localStorage.clear()
        return estadoInicial // => devuelve el [ ] array vacio
    }
    
    if( type === 'quitarProductoDelCarrito'){
        const { id } = payload
        const newState = estado.filter(productoEnCarro => {
            return productoEnCarro.id !== id
        })
        actualizarLocalStorage(newState)
        return newState
    }
    
}




//para consumir el reducer se utiliza el hook useReducer
// => useReducer(reducer, estadoInicial)
// y del useReducer podemos sacar el estado => porque es lo que retorna y el dispatch