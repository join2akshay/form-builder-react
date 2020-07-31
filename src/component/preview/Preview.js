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
        var input, filter, a, i;
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
		// console.log(retrievedData)
		console.log(data)
		return (
			data.map((item)=>{
				// console.log(item.id)
				if(item.HtmlName==='Paragraph')
				{
					return(
						<p key={item.id}>{item.label}</p>
					)
				}else if(item.HtmlName==='Text Input'){
					return (
						<div class="input-group" key={item.id}>
							<label for="name">{item.label}</label>
							<input type="text" id="name" required={item.required} placeholder={item.placeholder}/>
						</div>
					)

				}else if(item.HtmlName==='Number Input'){
					return (
						<div class="input-group" key={item.id}>
							<label for="name">{item.label}</label>
							<input type="text" id="name" required={item.required} pattern="[1-9]{1}[0-9]{9}"  placeholder={item.placeholder}/>
						</div>
					)

				}else if(item.HtmlName==='Email'){
					return (
						<div class="input-group" key={item.id}>
							<label for="name">{item.label}</label>
							<input type="email" id="name" required={item.required}  placeholder={item.placeholder}/>
						</div>
					)

				}
				else if(item.HtmlName==='Date'){
					return (
						<div class="input-group" key={item.id}>
							<label for="name">{item.label}</label>
							<input type="date" id="name" required={item.required}/>
						</div>
					)

				}else if(item.HtmlName==='Select'){
				
					// console.log(item)
					return(<div className='input-group' key={item.id}>
						  <label>{item.label}</label>  <select id={item.id} required={item.required}>
                  {
                      item.option===undefined ? (
                          
                        <option value="volvo">Select</option>
                 
                  

                      )
                      :
                      (
                          item.option.map((item)=>{
                              return (
                                <option value="volvo" key={item.id}>{item}</option>
                              )
                          })
                      )
                  }
                  
 
</select>
					</div>)
				}
// 				else if(item.HtmlName==='Search with select'){
				
// 					console.log(item)
// 					return(
// 					<div className='input-group'>
// 				<div class="dropdown">
//   <div onClick={this.myFunction} class="dropbtn" ref={this.exampleRef}>{item.label} <i className='fa fa-chevron-down'></i></div>
//   <div id="myDropdown" class="dropdown-content">
//     <input type="text" placeholder="Search.." id="myInput" onKeyUp={this.filterFunction}/>
//     {
//                       item.options===undefined ? (
                          
//                         <a href='#' onClick={this.myFunction}>Option 1</a>
                 
                  

//                       )
//                       :
//                       (
//                           item.options.map((item)=>{
//                               return (
//                                 <a href='#' onClick={this.myFunction}>{item}</a>
//                               )
//                           })
//                       )
//                   }
   
//   </div>
// </div>
// 					</div>)
// 				}
				else if(item.HtmlName==='Radio'){
					return(
						<div key={item.id}>
						<input name={item.label} type="radio" id="color_red" value={item.label} required={item.required}/>
						<label for="color_red">{item.label}</label>
						</div>
					)
				}
					else if(item.HtmlName==='File Upload')
					{
						return(
							<input  type='file' key={this.props.id} required={item.required} />
						)
					}
					else if(item.HtmlName==='Single Checkbox'){
						return(
							<div key={item.id}>
							<input type="checkbox" name={item.label} required={item.required}/>
							<label for={item.label}>{item.label}</label>
							</div>
						)
					}
				else{
					return('')
				}
			})
		)

	}
    render() {
		
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
	{/* <div>
<input name="color" type="radio" id="color_red" value="Red" data-error="#e4" required="" aria-required="true"/>
<label for="color_red">Red</label>
</div>
<p>
<input type="checkbox" name="food" id="food_asian" data-error="#e7" required="" aria-required="true"/>
<label for="food_asian">Asian</label>
</p>
<div class="file-field input-field col s12">
<div class="btn-file">
<span>Browse</span>
<input type="file" data-error="#e9" required="" aria-required="true"/>
</div>
<div class="file-path-wrapper">
<input class="file-path validate" type="text" placeholder="Select a file to upload"/>
</div>
<div class="input-field">
<div id="e9"></div>
</div>
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
