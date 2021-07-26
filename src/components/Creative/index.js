import React from 'react';
import Certific from  './certigic.pdf';
const Creative =()=>{
    return(
      <div className="creative">
      <div className="container">
          <div className="creative-info">
              <h2 className="creative-title">This is Me </h2>
              <h4 className="creative-dir">Graphic Designer and programmer </h4>
              <p className="info-desc">
              I graduated in 2013 with a Bachelor’s degree in Computer Science from Al-Rafidain University in Iraq             </p>
             <p className="info-desc">
                 In the year 2020, I have a certificate from Google in digital marketing,If you want to see the certificate 
                 <a href={Certific} download="Certificate_HAIDER_ALNKASH">Download it</a>      
             </p>

          </div>
      </div>
  </div>
  )
}
export default Creative;