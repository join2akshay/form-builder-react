import React, { Component } from 'react'
import Label from '../input/Label'
import TextInput from '../input/Text-Input'
import SingleCheckbox from '../input/SingleCheckbox';
import Editor from '../editor/Editor'
import Radio from '../input/Radio';
import Paragragh from '../input/Paragragh';
import Number from '../input/Number';
import {MainContext} from '../../ContextAPI'
import FileUpload from '../input/FileUpload';
import Email from '../input/Email';
import Date from '../input/Date';
import Select from '../input/Select';
import SearchWithSelect from '../input/SearchWithSelect';
import './preview.css'


export default class Preview extends Component {
    static contextType=MainContext;
    constructor(props, context) {
        super(props, context);
       
        this.state = {
          visible: false,
          show:false,
          id:'',
          currentEle:''
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
     
    toggleMenu(e) {
        
        if(e.target.id){
            this.setState({
                visible: !this.state.visible,
                id:e.target.id,
                currentEle:e.target.dataset.value
                
            });
            
        }

      
    else{

        this.setState({
            visible: !this.state.visible
            
        });
    }
  
    }

     
    toggleClose=(e)=> {
     
        
        if(e.target.id){
            this.setState({
                visible: !this.state.visible,
                id:e.target.id,
                currentEle:e.target.dataset.value
                
            });
            
        }

      
    else{

        this.setState({
            visible: !this.state.visible
            
        });
    }
  
    }
   
    toggleDelete=(e)=> {
        this.setState({
          id:e.target.id,
          currentEle:e.target.dataset.value
        },()=>{
            this.context.deleteElement(this.state.id)
        })
          }
    displayElement(item){
       
        if(item.name=='Label')
        {
            return(<Label/>)
        }
        else if(item.name==='Text Input')
        {
            return(
          
            <TextInput id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete} required={item.required}/>
            )
        }else if(item.name==='Single Checkbox')
        {
            return (
               <SingleCheckbox id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete}/>
           
            )
        }else if(item.name=='Radio List'){
            return(
           
            <Radio id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete}/>
           
            )
        }
        else if(item.name=== 'Paragraph'){
            return(
                
                <Paragragh id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete}/>
                
            )
        } else if(item.name=== 'Number Input'){
            return(
          
            <Number id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete} placeholder={item.placeholder}/>
                
            )
        } else if(item.name=== 'Select Image'){
            return(
          
            <FileUpload id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete}/>
           
            )
        }else if(item.name==='Email'){
           return(  <Email id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete} placeholder={item.placeholder}
           />)
        }else if(item.name==='Date')
        {
            return(
                <Date id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete}/>
     
            )
        }else if(item.name==='Select')
        {
            return(
                <Select id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete} required={item.required} options={item.option}/>
     
            )
        }else if(item.HtmlName==='Search with select'){

           return( <SearchWithSelect id={item.id} label={item.label} toggleMenu={this.toggleMenu} name={item.name} show={this.state.show} toggleDelete={this.toggleDelete} required={item.required} options={item.option}/>
			)		
        }
       else{
           console.log(item)
       }

       

    }
    render() {
      
        return (
            <div className={this.context.drag ? 'preview':`preview`}>
               <div className="droppable" 
                    onDragOver={(e)=>this.props.onDragOver(e)}
                    onDrop={(e)=>this.props.onDrop(e)}>
                     
                   {
                       this.props.items.length ?
                       this.props.items.map((item)=>{
                          return this.displayElement(item)
                       
                       })
                       :
                       <div className='drop-container'>
                         <div className='content-center'>Drop Something</div>
                       </div> 
                   }

                   {
                       this.context.drag  ? (
                           <div className='draging'>

                           Drop here

                           </div>
                       ):''
                   }
                </div>
                <Editor visibility={this.state.visible} id={this.state.id} currentEle={this.state.currentEle} toggleClose={this.toggleClose} />   
            </div>

        )
    }
}
