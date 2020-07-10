import React, { Component } from 'react'
import './editor.css'
import {MainContext} from '../../ContextAPI'

const initialState={
    label:'',
    placeholder:'',
    required:false,
    radioValue:'',
    pdf:false,
    png:false,
    doc:false,   
    min:'',
    max:'' ,
    DDMMYYYY:false,
    MMDDYYYY:false,
    YYYYDDMM:false,
    option:''
}
export default class Editor extends Component {
    static contextType=MainContext;
    constructor(props, context) {
        super(props, context);
       
        this.state=initialState
      
    }
     
    onClear=(e)=>{
        this.setState(initialState)
        this.props.toggleClose(e)
    }
   
    handleSubmit=(data)=>{
        // console.log(this.state.validation)
        if(this.props.currentEle==='Number Input'){

            if(this.state.validation==='yes'){
                console.log('nim VaildYes')
                let filehtmlFormat={
                   min:this.state.min,
                   max:this.state.max
                }
    
                data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle,filehtmlFormat)
    
            }
            else{
                // console.log(this.state.required)
                data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle)
            }

        }
        else if(this.props.currentEle==='Select Image'){
            if(this.state.validation==='yes'){
                console.log('VaildYes')
                let filehtmlFormat={
                    pdf:this.state.pdf,
                    png:this.state.png,
                    doc:this.state.doc
                }
    
                data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle,filehtmlFormat)
    
            }
            else{
                // console.log(this.state.required)
                data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle)
            }

        }
       else if(this.props.currentEle==='Date'){

            if(this.state.validation==='yes'){
                console.log('nim VaildYes')
                let filehtmlFormat={
                    DDMMYYYY:this.state.DDMMYYYY,
            MMDDYYYY:this.state.MMDDYYYY,
            YYYYDDMM:this.state.YYYYDDMM,
                }
    
                data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle,filehtmlFormat)
    
            }
            else{
                // console.log(this.state.required)
                data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle)
            }

        }else if(this.props.currentEle==='Select'){
            data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle)
        }else if(this.props.currentEle==='Search with select'){
            data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle)
        }

        else{

            data.updatePreviewViaEditor(this.props.id,this.state,this.props.currentEle)
        }

      
   

    }
    onChange=(e)=>{
        
        this.setState({
                [e.target.name]:e.target.value
        },()=>this.changeRequired(this.state.radioValue))


       

    }

    changeRequired=(value)=>{
        if(value=='yes')
        {
            
         
            this.setState({
                required:true
            },()=>console.log(this.state.required))
        }
        else if(value=='no'){
          
            this.setState({
                required:false
            },()=>console.log(this.state.required))

        }

    }

    handleInputChange=(e)=>{
     
        this.setState({
          [e.target.name]:e.target.checked
        })

    }

 
    render() {
        // console.log(this.state.required)
        // console.log(this.props.currentEle)
        var visibility = "hide";
 
        if (this.props.visibility) {
          visibility = "show";
        }
        return (
            <div>
            <div className={` ${visibility} editor`}>
            <form className='editor-form'>
            
{
    
    this.props.currentEle === 'Text Input' ?  ( <div>
    <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Label</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='label' value={this.state.label} onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Placeholder</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='placeholder' onChange={this.onChange}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes"  onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
    </div>)
    :
    this.props.currentEle === 'Paragraph' ? 
    (<div>

    <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Paragraph Content (label)</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>

    </div>) :
    this.props.currentEle==='Radio List' ? (
        <div>

        <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>label</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="Yes" name="radioValue" value="yes" className='hi' onChange={this.onChange}/>
<label htmlFor="Yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>

        </div>
    ):
    this.props.currentEle==='Single Checkbox' ? (
        <div>
        <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>label</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes" checked={this.state.radioValue==='yes'} onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
        </div>
    )
    :
    this.props.currentEle === 'Number Input' ?  ( <div>
    <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Label</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Placeholder</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='placeholder' onChange={this.onChange}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes" onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Validation</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="vaildYes" name="validation" value="yes" onChange={this.onChange}/>
<label htmlFor="vaildYes">Yes</label>
<input type="radio" id="vaildNo" name="validation" value="no"  onChange={this.onChange}/>
<label htmlFor="vaildNo">No</label><br/>
                   
                    </div>
                </div>
            </div>
            { 
               this.state.validation=== 'yes' ? (<div className='row'>
            <div className='col-5 p-top-20'>
            <label>
          Min:
          <input
            name="min"
            type="number"
            onChange={this.onChange} />
        </label>
        <div>
        <label>
          Max:
          <input
            name="max"
            type="number"
            onChange={this.onChange} />
        </label>
        </div>
      
            </div>

            </div>)
            :
            ''
    }
    </div>)
    :
    this.props.currentEle==='Select Image' ? (
        <div>
        <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>label</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes" checked={this.state.radioValue==='yes'} onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Validation</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="vaildYes" name="validation" value="yes" onChange={this.onChange}/>
<label htmlFor="vaildYes">Yes</label>
<input type="radio" id="vaildNo" name="validation" value="no"  onChange={this.onChange}/>
<label htmlFor="vaildNo">No</label><br/>
                   
                    </div>
                </div>
            </div>
           { 
               this.state.validation=== 'yes' ? (<div className='row'>
            <div className='col'>
            <label>
          PDF:
          <input
            name="pdf"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        <div>
        <label>
          PNG:
          <input
            name="png"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        </div>
        <div>
        <label>
          DOC:
          <input
            name="doc"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        </div>
            </div>

            </div>)
            :
            ''
    }
        </div>
    )
    :
    this.props.currentEle==='Email' ? (<div>
    <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Label</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Placeholder</p>
                    </div>
                </div>
            
           
                <div className='col-5'>
                    <div className='text'>
                        <input type='text' name='placeholder' onChange={this.onChange}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes"  onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
    </div>)
    :
    this.props.currentEle==='Date' ? (<div>
    <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Label</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>

            {/* <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Placeholder</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='placeholder' onChange={this.onChange}/>
                    </div>
                </div>
            </div> */}
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes"  onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Validation</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="vaildYes" name="validation" value="yes" onChange={this.onChange}/>
<label htmlFor="vaildYes">Yes</label>
<input type="radio" id="vaildNo" name="validation" value="no"  onChange={this.onChange}/>
<label htmlFor="vaildNo">No</label><br/>
                   
                    </div>
                </div>
            </div>
            { 
               this.state.validation=== 'yes' ? (<div className='row'>
            <div className='col'>
            <label>
          DD/MM/YYYY:
          <input
            name="DDMMYYYY"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        <div>
        <label>
          MM/DD/YYYY:
          <input
            name="MMDDYYYY"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        </div>
        <div>
        <label>
          YYYY/DD/MM:
          <input
            name="YYYYDDMM"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        </div>
            </div>

            </div>)
            :
            ''
    }
    </div>)
    :
    this.props.currentEle ==='Select' ? (<div>
        <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Label</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>option</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='option' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes"  onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
            </div>

    )
    :
    this.props.currentEle ==='Search with select' ? (<div>
        <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>Label</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='label' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>option</p>
                    </div>
                </div>
            
           
                <div className='col'>
                    <div className='text'>
                        <input type='text' name='option' onChange={this.onChange}/>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='text'>
                        <p>required</p>
                    </div>
                </div>
            
           
                <div className='col-5 p-top-20'>
                    <div className='text'>
                    <input type="radio" id="yes" name="radioValue" value="yes"  onChange={this.onChange}/>
<label htmlFor="yes">Yes</label>
<input type="radio" id="No" name="radioValue" value="no"  onChange={this.onChange}/>
<label htmlFor="No">No</label><br/>
                   
                    </div>
                </div>
            </div>
            </div>

    )
    :
    ''
    }

           
                
          
           </form>
           <div className='row' style={{paddingLeft:'15rem'}}>

<div className='button col-3'>
     <input type='reset' className='button bg-black' onClick={this.onClear} value='Close'/>
         {/* Close
     </button> */}
 </div>

<div className='button col-3'>
     <button className='blue-button' onClick={()=>this.handleSubmit(this.context)}>
         Submit
     </button>
 </div>
</div>
            </div>
            </div>
        )
    }
}
