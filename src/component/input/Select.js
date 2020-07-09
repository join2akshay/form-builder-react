import React, { Component } from 'react'
import {MainContext} from '../../ContextAPI'
export default class Select extends Component {
    static contextType=MainContext
    state={
        show:false,
        id:'',
        currentEle:''
    }
    render() {
     
        return (
            <div className='select'>
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
                        <p onClick={this.props.toggleMenu} id={this.props.id} data-value={this.props.name} className='blue-button preview-button'> edit</p>
                <p onClick={this.props.toggleDelete} id={this.props.id} data-value={this.props.name} className='black-button preview-button'> delete</p>

                    </div>
                
                
              
               
                </div>
                <br/>
                <div className='ps-a mg-top-35'>
                  <label>{this.props.label}</label>  <select id={this.props.id}>
                  {
                      this.props.options===undefined ? (
                          
                        <option value="volvo">Select</option>
                 
                  

                      )
                      :
                      (
                          this.props.options.map((item)=>{
                              return (
                                <option value="volvo">{item}</option>
                              )
                          })
                      )
                  }
                  
 
</select>
                    
                </div>
                </div>
            </div>
        )
    }
}
