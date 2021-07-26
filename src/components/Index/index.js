import React,{ Component } from 'react';
import Home from '../Home';
import Work from '../Work';
import Portifilio from '../Portofolio';
import About from '../About';
import Creative from '../Creative';
import Social from '../SocialMedia';
import Skills from '../Skills'
class Index extends Component {
  render(){
    return(
     <div>
      <Home/>
       <About/>
       <Skills/>
        <Work/>
      <Portifilio/>
       <Creative/>
       <Social/>
     </div>
    )
  }
}
export default Index;