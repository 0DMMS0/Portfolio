import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <h1>Mi Portfolio</h1>
      <p>Welcome to my WebSite 🚀</p>
      <About />
    </div>
  );
}

export default App;
