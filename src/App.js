import Header from './components/Header'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import data from './data'

function App() {
  const { products } = data

  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Gallery products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
