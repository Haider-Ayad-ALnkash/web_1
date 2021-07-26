import React, { Component } from 'react';
import axios from 'axios';
class Work extends Component {
    state={
        work:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{this.setState({work:res.data.works})})
    }
render(){
    const {work}=this.state;
    const workList=work.map(workItem=>{
        return(
            <div className="part" key={workItem.id}>
                <a href={workItem.href} target="_blank" rel="noreferrer">
                    <i className={workItem.icon_name}></i>
                    <h4 className="part-title">{workItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                        {workItem.body}
                    </p>
                </a>
            </div>
        )
       
    })
    return(    
        <div className="work">
        <div className="container">
            <h2 className="work-title">MY WORK</h2>
                {workList}
        </div>
    </div>
        )
}
   
}
export default Work;