import React, { Component } from 'react'


export default class SearchWithSelect extends Component {
    state={
        show:false,
        id:'',
        currentEle:''
    }
    filterFunction=()=> {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        let div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
         let txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }
       myFunction=()=> {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    render() {
        console.log('hi search')
        return (
            <div className='search-with-select'>
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
                  
<div class="dropdown">
  <button onClick={this.myFunction} class="dropbtn">{this.props.label} <i className='fa fa-chevron-down'></i></button>
  <div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search.." id="myInput" onKeyUp={this.filterFunction}/>
    {
                      this.props.options===undefined ? (
                          
                        <a onClick={this.myFunction}>Option 1</a>
                 
                  

                      )
                      :
                      (
                          this.props.options.map((item)=>{
                              return (
                                <a onClick={this.myFunction}>{item}</a>
                              )
                          })
                      )
                  }
   
  </div>
</div>
                    
                </div>
                </div>
            </div>
        )
    }
}
