import React from 'react';
import cv from './CV_HAIDER_ALNKASH_2021.pdf'
const Home =()=>{
    return(
      <div className="home">
        <div className="container">
            <div className="home-info">
                <h2 className="home-title">HAIDER ALNKASH</h2>
                <h4 className="home-desc">Programmer & Designer </h4>
                   
                <p className="home-paragraph">
                   <span> Welcome to my site </span>
                   I will be happy when I provide my services, browse the site and enjoy
                </p>
                <a className="home-btn" href={cv} download="CV_HAIDER_ALNKASH">Download My C.V</a>
            </div>
        </div>
    </div>
    )
}
export default Home;