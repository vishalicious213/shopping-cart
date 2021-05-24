import Header from './components/Header'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import data from './data'
import { useState } from 'react'

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exists = cartItems.find(x => x.id === product.id)
    if(exists) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exists, qty: exists.qty + 1} : x))
    } else {
    setCartItems([...cartItems, { ...products, qty: 1 }])
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Gallery onAdd={onAdd} products={products} />
        <Cart onAdd={onAdd} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
