import React, { Component } from 'react'


export default class Toolbox extends Component {
   
    listCard=()=>{
        
    }
    render() {
    //     this.props.items.forEach ((t) => {
            
    //          <div key={t.name} 
    //                onDragStart = {(e) => this.onDragStart(e, t.name)}
    //                draggable
    //                className="draggable"
    //                style = {{backgroundColor: '#3B454D'}}
    //            >
    //            <div className='button-icon'><i className={`fa ${t.icon}`}></i></div>
    //                {t.name}
    //            </div>
           
    //    });
    
        return (
            <div className='toolbox'>
             {
                 this.props.items.map((t)=>{
                     return(
                        <div key={t.name} 
                   onDragStart = {(e) => this.props.onDragStart(e, t.name)}
                   draggable
                   onDragOver={(e)=>this.props.onDragOver(e,t.name)}
                    onDrop={(e)=>{this.props.onDrop(e,t.name)}}
                   className="draggable"
                   style = {{backgroundColor: '#3B454D'}}
               >
               <div className='button-icon'><i className={`fa ${t.icon}`}></i></div>
                   {t.name}
               </div>
                         )
                 })
             }
                </div>
           
        )
    }
}
