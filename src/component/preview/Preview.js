import React, { Component } from 'react'
import './preview-out.css'
import {MainContext} from '../../ContextAPI'
export default class Preview extends Component {
	constructor(props) {
		super(props)
	
		// Create the ref
		this.exampleRef = React.createRef()
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

	static contextType=MainContext;
	displayForm=()=>{
		let retrievedData = localStorage.getItem("data");

		let data= JSON.parse(retrievedData);
		console.log(retrievedData)
		console.log(data)
		return (
			data.map((item)=>{
				if(item.HtmlName==='Paragraph')
				{
					return(
						<p>{item.label}</p>
					)
				}else if(item.HtmlName==='Text Input'){
					return (
						<div class="input-group">
							<label for="name">{item.label}</label>
							<input type="text" id="name" required={item.required} placeholder={item.placeholder}/>
						</div>
					)

				}else if(item.HtmlName==='Number Input'){
					return (
						<div class="input-group">
							<label for="name">{item.label}</label>
							<input type="number" id="name" required={item.required} placeholder={item.placeholder}/>
						</div>
					)

				}else if(item.HtmlName==='Email'){
					return (
						<div class="input-group">
							<label for="name">{item.label}</label>
							<input type="email" id="name" required={item.required} placeholder={item.placeholder}/>
						</div>
					)

				}
				else if(item.HtmlName==='Date'){
					return (
						<div class="input-group">
							<label for="name">{item.label}</label>
							<input type="date" id="name" required={item.required}/>
						</div>
					)

				}else if(item.HtmlName==='Select'){
				
					console.log(item)
					return(<div className='input-group'>
						  <label>{item.label}</label>  <select id={item.id} required={item.required}>
                  {
                      item.option===undefined ? (
                          
                        <option value="volvo">Select</option>
                 
                  

                      )
                      :
                      (
                          item.option.map((item)=>{
                              return (
                                <option value="volvo">{item}</option>
                              )
                          })
                      )
                  }
                  
 
</select>
					</div>)
				}else if(item.HtmlName==='Search with select'){
				
					console.log(item)
					return(
					<div className='input-group'>
				<div class="dropdown">
  <div onClick={this.myFunction} class="dropbtn" ref={this.exampleRef}>{item.label} <i className='fa fa-chevron-down'></i></div>
  <div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search.." id="myInput" onKeyUp={this.filterFunction}/>
    {
                      item.options===undefined ? (
                          
                        <a onClick={this.myFunction}>Option 1</a>
                 
                  

                      )
                      :
                      (
                          item.options.map((item)=>{
                              return (
                                <a onClick={this.myFunction}>{item}</a>
                              )
                          })
                      )
                  }
   
  </div>
</div>
					</div>)
				}
				else{
					return('')
				}
			})
		)

	}
    render() {
		console.log(this.props.Preview)
        return (
            <div className=''>
           	<div className="banner">
		</div>
<form className="preview-form">
	<h1>Our Form</h1>
	<p>Dragable form</p>
	{
		this.displayForm()
	}
	{/* <div className="input-group">
		<label htmlFor="name">Your Name</label>
		<input type="text" id="name"/>
	</div>
	<div className="input-group">
		<label htmlFor="email">Email</label>
		<input type="email" id="email" required/>
	</div>
	<div className="input-group">
		<label htmlFor="text-area">Text Area</label>
		<textarea id="text-area" required></textarea>
	</div>
	<div className="input-group">
		<label htmlFor="email">Disabled</label>
		<input type="email" id="email" disabled/>
	</div> */}
	<div className="input-group">
	<button type='submit' className='btn'>Submit</button>
	</div>
	<div className="input-group">
	<p className="warning">Never submit your password thoruhg Our Forms.</p>
	</div>



</form> 

            </div>
        )
    }
}
