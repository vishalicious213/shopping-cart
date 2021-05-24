import Header from './components/Header'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import data from './data'
import { useState } from 'react'

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Gallery products={products} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
