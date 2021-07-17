import React,{ Component } from 'react';
import Footer from './Footer';
import Home from './Home';
import Work from './Work';
import Portifilio from './Portofolio';
import Profile from './Profile';
import Social from './SocialMedia';
import Creative from './Creative';
class Index extends Component {
  render(){
    return(
     <div>
       <Home/>
       <Work/>
       <Portifilio/>
       <Profile/>
       <Creative/>
       <Social/>
       <Footer/>
     </div>
    )
  }
}
export default Index;