import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { products } from './mocks/products.json'
import { useFiltros } from "./hooks/useFiltros"
import { Cart } from "./components/cart"
import { CartProvider } from "./context/CartContext"





function App() {
  const { filtrarProductos } = useFiltros()
  

  const productosFiltrados = filtrarProductos(products)
 
  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products productos= { productosFiltrados}  />
    {/* <Footer /> */}
    </CartProvider>
  )
}

export default App
