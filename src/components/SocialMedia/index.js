import React from 'react';
const Social =()=>{
    return(
         <section className="social-media">
             <a href="https://www.facebook.com/HaiderAyadALnakash" target="_blank" rel="noreferrer">
                <div className="social facebook">
                    <i className="icon fa fa-facebook fa-2x"></i>
                    <h3>Follow Me</h3>
                    <h4>SOCIAL FACEBOOK</h4>
                </div>
                </a>
            <a href="https://github.com/Haider-Ayad-ALnkash" target="_blank"  rel="noreferrer">
                <div className="social github">
                    <i className="icon fa fa-github fa-2x"></i>
                    <h3>Follow Me</h3>
                    <h4>SOCIAL GitHub</h4>
                </div>
            </a>
            
            <a  href="https://www.youtube.com/channel/UCOhgtWZ40FR2neJpK5wAqdg"  target="_blank" rel="noreferrer">
                <div className="social youtube">
                    <i className="icon fa fa-youtube fa-2x"></i>
                    <h3>Follow Me</h3>
                    <h4>SOCIAL YouTube</h4>
                </div>
            </a>
            
        </section>
    )
}
export default Social;