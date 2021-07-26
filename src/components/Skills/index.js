import React from 'react';

const Skills =()=>{
    return(
      <div className="profile_skills">
      <div className="container">
          <div className="skills">
              <h2 className="skills-title">Some <span> Skills </span></h2>
              <p>
              I am passionate about increasing my skills by learning from paid or free sources, as well as learning from books everything new in the field of technology to increase my ability to produce professional works
              </p>
              
              <div className="bar">
                  <span className="bar-title">HTML</span>
                  <span className="bar-perc">80%</span>
                  <div className="parent-bar">
                      <span className="sp80"></span>
                  </div>
              </div>
             
              <div className="bar">
                  <span className="bar-title">CSS</span>
                  <span className="bar-perc">70%</span>
                  <div className="parent-bar">
                      <span className="sp70"></span>
                  </div>
              </div>
             
              <div className="bar">
                  <span className="bar-title">JAVASCRIPT</span>
                  <span className="bar-perc">60%</span>
                  <div className="parent-bar">
                      <span className="sp60"></span>
                  </div>
              </div>
            
              <div className="bar">
                  <span className="bar-title">React</span>
                  <span className="bar-perc">60%</span>
                  <div className="parent-bar">
                      <span className="sp60"></span>
                  </div>
              </div>
            
              <div className="bar">
                  <span className="bar-title">Photoshop</span>
                  <span className="bar-perc">60%</span>
                  <div className="parent-bar">
                      <span className="sp60"></span>
                  </div>
              </div>

              <div className="bar">
                  <span className="bar-title">INDESIGN</span>
                  <span className="bar-perc">70%</span>
                  <div className="parent-bar">
                      <span className="sp70"></span>
                  </div>
              </div>


          </div>
      </div>
  </div>
    )
}
export default Skills;