
import './App.css';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Main from './components/Main';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    <Main />
    <About />
    <Portfolio />
    <Skills />
    <Testimonials />
    <Resume />
    <Contact />
    </>
  );
}

export default App;
