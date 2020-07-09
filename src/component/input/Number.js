import React, { Component } from 'react'

export default class Number extends Component {
    state={
        show:false
    }
    render() {
        return (
            <div>
            
  <div className='input-box' onMouseEnter={()=>this.setState({show:!this.state.show})} onMouseLeave={()=>this.setState({show:!this.state.show})}>
  <div  className={`edit-del-${this.state.show} grid-container`} >
                <div className='float-left'>
                <p style={{float:'left'}} className='item-name'>{this.props.name}</p>
                        </div>
                        <div className='float-right'>
                        <p onClick={this.props.toggleMenu} id={this.props.id} data-value={this.props.name} className='blue-button preview-button'> edit</p>
                <p onClick={this.props.toggleDelete} id={this.props.id} data-value={this.props.name} className='black-button preview-button'> delete</p>

                    </div>
                
                
              
               
                </div>
                
                <label>{this.props.label}</label>  <input type='number'  className='input' placeholder={this.props.placeholder} id={this.props.id}/>
               </div>
            </div>
        )
    }
}
