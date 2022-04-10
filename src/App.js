import './App.css';
import Info from './components/Info.js'
import About from './components/About.js'
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>

  );
}

export default App;
