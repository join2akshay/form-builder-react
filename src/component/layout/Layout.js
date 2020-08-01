import React, { Component } from 'react'
import Preview from '../drag-section/Preview.js'
import Toolbox from '../drop-section/Toolbox'
import './layout.css'
import {MainContext} from '../../ContextAPI'
// import { TimelineLite } from "gsap/all";
// import { Controls, PlayState, Tween } from 'react-gsap';


// import NewWindow from 'react-new-window'
export default class Layout extends Component {
    constructor(props) {
        super(props);
    
        // console.log(this.props)
        	// logo container
        this.exportBtn = null;
        this.previewBtn=null
        this.logo=null;
		// logo tween
        this.exportBtnTween = null;
        this.previewBtnTween = null;
        this.logoTween=null;
    }
    
    state={
        currentElement:'',
        newWindow:false
    }
    static contextType=MainContext;
    onDragStart = (ev, id) => {

        this.context.changeDrag();
     
      this.setState({
        currentElement:id
    })
    this.setState({
        currentElement:id
    })
    
    }

    onDragOver = (ev,id) => {
        
        ev.preventDefault();
     

    }

    onDrop = (ev,id) => {
        this.context.changeDrag();
        this.context.updatePreview(this.state.currentElement)
        this.setState({
            currentElement:''
        })
    
       
    
    }
    openWindow=()=>{
    // //   this.setState({
    // //       newWindow:!this.state.newWindow
    // //   })
    // console.log(this.props)
    localStorage.setItem("data", JSON.stringify(this.context.preview));
    window.open('/preview')

    }

    // PreviewOut=()=>{
    //     const preview= <PreviewOut/>
    //     return(
    //         <PreviewOut Preview={preview}/>
    //     )
    // }
    componentDidMount(){
		// create logo tween
		// this.exportBtnTween = new TimelineLite({ paused: false }).to(this.exportBtn, 0.5, {autoAlpha:1, x: 400, delay: 0.5});
        // this.previewBtnTween = new TimelineLite({ paused: false }).to(this.previewBtn, 0.5, {autoAlpha:1, x: -800, delay: 0.5});
        // this.logoTween = new TimelineLite({ paused: false }).from(this.logo1, 0.5, {delay:1,
        //     y:20,
        //     opacity:0,});
        //     this.logoTween = new TimelineLite({ paused: false }).from(this.logo2, 0.5, {delay:1,
        //         y:20,
        //         opacity:0,});
        // this.exportBtn.current.classList.add(`animation_trigger`);
        // console.log(this.exportBtn.classList.add('hello'))
        // this.exportBtn.classList.add('expbtn')
    
    }
    copyToClipboard=()=>{
        localStorage.setItem("data", JSON.stringify(this.context.preview));
        let retrievedData = localStorage.getItem("data");
            navigator.clipboard.writeText(retrievedData)

            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
           
    }
    render() {
        // console.log(this.context.preview)
       
        return (
            <div>
            
           
               {/* this.context.newWindow ? 
            <NewWindow onUnload={this.context.openWindow} features={"width=420,height=230,resizable,scrollbars=yes,status=1"} title='Preview'>
           {this.PreviewOut()}
          </NewWindow>
           
           : */}
           <div  className='App'>
           {/* <Controls playState={PlayState.stop}>
  <Tween to={{ x: '200px', rotation: 180 }} duration={2} ease="back.out(1.7)">
    <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
  </Tween>
</Controls> */}
            <div className='row'>
            <div className='column flex'>
            <h2 ref={ logo => this.logo1 = logo}>
                        From
                    </h2>
                    <h2 >
                        -
                    </h2>
                    <h2 ref={ logo => this.logo2 = logo}>
                       Builder
                    </h2>
            </div>
                <div className='column mg-bottom-2rem mg-1rem'>
                {/* <button ref={ btn => this.exportBtn = btn} className='button bg-black export-button' onClick={this.copyToClipboard}>
                        Export
                    </button>
                    <button ref={ btn => this.previewBtn = btn} className='button bg-blue view-button' onClick={
                      this.openWindow
                   
                    
                    }>
                    
                        Preview
                    </button> */}
                    <button ref={ btn => this.exportBtn = btn} className='button bg-black' style={{marginLeft:100,marginRight:100}} onClick={this.copyToClipboard}>
                        Export
                    </button>
                    <button ref={ btn => this.previewBtn = btn} className='button bg-blue' onClick={
                      this.openWindow
                   
                    
                    }>
                    
                        Preview
                    </button>
                </div>
            </div>
                <div className='container'>
                    <Preview onDragOver={this.onDragOver} onDrop={this.onDrop} onDragStart={this.onDragStart} items={this.context.preview}/>
                    <Toolbox items={this.context.default_data} onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDrop={this.onDrop} />
                </div>
            </div>
            <div id="snackbar">Data has benn copied</div>
            </div>
        )
    }
}
