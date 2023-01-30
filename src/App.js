import About from './Components/About';
import Features from './Components/Features';
import Header from './Components/Header';
import Landing from './Components/Landing';
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
      </div>
    </div>
  );
}

export default App;