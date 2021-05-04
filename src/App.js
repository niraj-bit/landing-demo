import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Todos } from './components/Todos';
import { About } from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Header/>
    <Todos/>
    <Footer/>
    <Contact/>
    <About/>
      </>

  );
}

export default App;
