import axios from 'axios';
import React, { Component } from 'react';
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
                <i className={workItem.icon_name}></i>
                <h4 className="part-title">{workItem.title}</h4>
                <hr className="line"/>
                <p className="part-desc">
                    {workItem.body}
                </p>
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