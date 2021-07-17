import React,{useState,useEffect} from'react';
import axios from 'axios';
const Portifilio =()=>{

    const[images,setImages]=useState([]);
    useEffect(() => {
        axios.get('js/data.json').then( res =>{setImages(res.data.portfolio)})
    }, [])
    const portifilioImages=images.map(imageItem=>{

        return(
            <div key={imageItem.id}>
            <img src={imageItem.image} alt=""/>
            <div className="overlay">
                <span>Show Image</span>
            </div>
            </div>
        )
    })
 return(
        <div className="portfolio">
        <div className="container">
            <h2 className="portfolio-title">MY portfolio</h2>
            <ul className="portoflio-list">
                <li className="portoflio-item">photoshop</li>
                <li className="portoflio-item">photoshop</li>
                <li className="portoflio-item" >photoshop</li>
                <li className="portoflio-item">photoshop</li>
            </ul>
        </div>
        <div className="box">
        {portifilioImages}
        </div>
    </div>
    )
}
export default Portifilio;