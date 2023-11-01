
import "../style/filtros.css"
import { useFiltros } from "../hooks/useFiltros"

export function Filtros () {
   const { filtros, setFiltros } = useFiltros()
   

    
    function handleRangoChange(e){
        
        setFiltros( filtros => ({ ...filtros, precioMinimo:e.target.value}))
        
    }

    function handleCategoriaChange(e){
        
        setFiltros( filtros => ({ ...filtros, categoria:e.target.value   }))
        
    }

    return (
        
        <div className="filtros">
            <div >
                <label htmlFor="precio">Precio</label>
                <input
                    type="range"
                    id="precio"
                    value={filtros.precioMinimo}
                    min={0}
                    max={1000}
                    onChange={handleRangoChange}
                />
                <span>Q. {filtros.precioMinimo}</span>
            </div>
            <div>
                <label htmlFor="categoria">categoria</label>
                <select name="" id="categoria" value={filtros.categoria} onChange={handleCategoriaChange}>
                    <option value="all">Todas</option>
                    <option value="laptops">Computadora</option>
                </select>
            </div>
        </div>
            
    )
}