import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/Index';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Nav/>
          <Index/>
          <Contact/>
          <Footer/>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
