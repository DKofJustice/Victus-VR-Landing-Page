import About from './Components/About';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Products from './Components/Products';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='landing-page'>
        <Landing/>
        <About/>
        <Features/>
        <Reviews/>
        <Products/>
      </div>
      <Footer />
    </div>
  );
}

export default App;