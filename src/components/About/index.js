import React from 'react';
import imgAbout from '../images/About/About.gif'
const About =()=>{
    return(
      <div className="profile_About">
      <div className="container">
          <div className="profile">
              <h2 className="profile-title"><span>About </span>Me</h2>
              <p>
              I am Haider ALnkash ,from Iraq with a degree in computer science in 2014,I have a passion for graphics and web design, as well as creating meaningful content on social media.
              </p>
            
          </div>
          <div className="picture-about">
                <img src={imgAbout} alt="AboutImage"/>
          </div>
           </div>
  </div>
    )
}
export default About;