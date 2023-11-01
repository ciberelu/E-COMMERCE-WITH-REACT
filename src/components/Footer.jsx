import { useCart } from '../hooks/useCart'
import { useFiltros } from '../hooks/useFiltros'
import '../style/footer.css'


export function Footer () {
    const { filtros } = useFiltros()
    const {cart} = useCart()
  
    return (
      <footer className='footer'>
        {
            JSON.stringify(cart, null,1)
        }
      </footer>
    )
  }