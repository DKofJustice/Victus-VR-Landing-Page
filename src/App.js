import About from './Components/About';
import Header from './Components/Header';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='landing-page'>
        <Landing/>
        <About/>
      </div>
    </div>
  );
}

export default App;