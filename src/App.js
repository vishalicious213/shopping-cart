import Header from './components/Header'
import Gallery from './components/Gallery';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Gallery />
        <Cart />
      </div>
    </div>
  );
}

export default App;
