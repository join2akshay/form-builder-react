import React, { Component } from 'react'
import { TimelineLite } from "gsap/all";

export default class Toolbox extends Component {
    constructor(props) {
        super(props);
    
        // console.log(this.props)
        	// logo container
		this.toolKit = null;
		// logo tween
		this.toolKitTween = null;
    }
    componentDidMount(){
		// create logo tween
		this.toolKitTween = new TimelineLite({ paused: false }).to(this.toolKit, 0.5, {autoAlpha:1, y: -700, delay: 0.5});
    
	}
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
            <div className='toolbox' ref={ img => this.toolKit = img}>
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
