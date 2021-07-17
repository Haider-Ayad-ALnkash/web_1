import React from 'react';
const Contact =()=>{
    return(
      
      <div className="drop">
          <div className="container">
              <h2 className="drop-title">Drop Me A line</h2>
              <form action="">
                  <div className="form-input"> 
                      <input type="text" placeholder="Your name "/>
                      <input type="email" placeholder="Enter Your Email"/>
                  </div>
                  <input type="text" className="subject" placeholder="Your Subject"/>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Your Message "></textarea>
                  <button>Submit</button>
              </form>
          </div>
      </div>
    )
}
export default Contact;