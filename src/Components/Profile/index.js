import React from 'react';

const Profile =()=>{
    return(
      <div class="profile_skills">
      <div class="container">
          <div class="profile">
              <h2 class="profile-title"><span>My</span>Profile</h2>
              <ul class="profile-list">
                  <li class="profile-item">
                      <span>Name</span>
                      Haider Ayad
                  </li>
                  <li  class="profile-item">
                      <span>Birthday</span>
                          1992/10/14
                  </li>
                  <li  class="profile-item">
                      <span>Addres</span>
                          Iraq|baghdad
                  </li>
                  <li class="profile-item">
                  <span>phone</span>
                          07709630919
                  </li>
                  <li  class="profile-item">
                  <span>Email</span>
                          haiderayadit@gmail.com
                  </li>
              </ul>   
          </div>
          
          <div class="skills">
              <h2 class="skills-title">Some <span> Skills </span></h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem nemo qui laborum omnis aperiam, quibusdam atque possimus voluptatum cupiditate minima delectus in, ut error quod aliquid, sapiente nam explicabo.
              </p>
              
              <div class="bar">
                  <span class="bar-title">Bootstrap</span>
                  <span class="bar-perc">80%</span>
                  <div class="parent-bar">
                      <span class="sp80"></span>
                  </div>
              </div>
             
              <div class="bar">
                  <span class="bar-title">Bootstrap</span>
                  <span class="bar-perc">70%</span>
                  <div class="parent-bar">
                      <span class="sp70"></span>
                  </div>
              </div>
             
              <div class="bar">
                  <span class="bar-title">HTML</span>
                  <span class="bar-perc">60%</span>
                  <div class="parent-bar">
                      <span class="sp60"></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}
export default Profile;