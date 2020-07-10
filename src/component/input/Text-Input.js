import React, { Component } from 'react'
import {MainContext} from '../../ContextAPI'
import '../../App.css'

export default class TextInput extends Component {
    static contextType=MainContext
    state={
        show:false,
        id:'',
        currentEle:''
    }
    toggleDelete=(e)=> {
      this.setState({
        id:e.target.id,
        currentEle:e.target.dataset.value
      },()=>{
          this.context.deleteElement(this.state.id)
      })
        }
    render() {
     
        return (
            <div>
                
                <div className='input-box' onMouseEnter={()=>this.setState({show:!this.state.show})} onMouseLeave={()=>this.setState({show:!this.state.show})}>
                <div  className={`edit-del-${this.state.show} grid-container`} >
                <div className='float-left'>
                <p style={{float:'left'}} className='item-name'>{this.props.name}</p>
                {
                    this.props.required ? 
                    (<p style={{float:'left',marginLeft:15}} className='item-name'>required</p>)
                    :
                    ''
                }
                
                        </div>
                        <div className='float-right'>
                        <p onClick={this.props.toggleMenu} id={this.props.id} data-value={this.props.name} className='blue-button preview-button'> Edit</p>
                <p onClick={this.props.toggleDelete} id={this.props.id} data-value={this.props.name} className='button bg-black preview-button'> Delete</p>

                    </div>
                
                
              
               
                </div>
                <br/>
                <div className='ps-a mg-top-35'>
                  <label>{this.props.label}</label>  <input type='text'  className='input' placeholder={this.props.placeholder} id={this.props.id}/>
                    
                </div>
                </div>
              
            </div>
        )
    }
}


