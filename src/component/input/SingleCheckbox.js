import React, { Component } from 'react'

export default class SingleCheckbox extends Component {
    state={
        show:false
    }
    render() {
   
        return (
            <div className='input-box' onMouseEnter={()=>this.setState({show:true})} onMouseLeave={()=>this.setState({show:false})}>
                {/* <div  className={`edit-del-${this.state.show}  grid-container`} > */}
                <div  className={`edit-del-${this.state.show} grid-container`} >
                <div className='float-left'>
                <p style={{float:'left'}} className='item-name'>{this.props.name}</p>
                        </div>
                        <div className='float-right'>
                        <p onClick={this.props.toggleMenu} id={this.props.id} data-value={this.props.name} className='blue-button preview-button'> Edit</p>
                <p onClick={this.props.toggleDelete} id={this.props.id} data-value={this.props.name} className='button bg-black preview-button'> Delete</p>

                    </div>
                
                
              
               
                </div>
                <br/>
            <div className='single-checkbox'>
                <div className='input-bo'>
                <section title=".squaredThree" className='flex'>
  
    <div className="squaredThree">
      <input type="checkbox" value="None" id="squaredThree" name="check"/>
      <label htmlFor="squaredThree" className='check-label'></label>
    </div>
    <label htmlFor="squaredThree" className='check-label'>{this.props.label}</label>
   
  </section>
                    
                </div>
            </div>
            </div>
        )
    }
}
