import React,{ Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Index from './Components';
import Contact from './Components/Contact';
import Nav from './Components/Navbar';

class App extends Component {
    //Global render
  render(){
    return(
     <div>
       <BrowserRouter>
          <Nav/>
          <Route exact path='/' component={Index} />
          <Route path='/contact' component={Contact} />
       </BrowserRouter>
      
     </div>
    )
  }
}
export default App;
