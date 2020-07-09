import React, { Component } from 'react'

export default class FileUpload extends Component {
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
                <br/>
                <div className='mg-top-35'>
                <input type='file' key={this.props.id} className='mg-top-15'/>
            </div>
            </div>
                </div>
        )
    }
}
