import logo from './logo.svg';
import './App.css';
import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Hero/>
     <Features/>
    </div>
  );
}

export default App;
