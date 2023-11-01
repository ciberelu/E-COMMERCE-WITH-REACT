import { useContext,  } from "react"
import { FiltrosContexto } from "../context/FiltersContext"

export function useFiltros (){

    const { filtros, setFiltros } = useContext(FiltrosContexto)

    const filtrarProductos = (productos) => {
      return  productos.filter(producto => {
        return (
          producto.price >= filtros.precioMinimo && (
            filtros.categoria === 'all' ||
            producto.category === filtros.categoria
          )
        )
      })
    }
  
    return {filtros, setFiltros, filtrarProductos}
  }
  