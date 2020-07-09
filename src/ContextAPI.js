import React, { Component } from 'react'
const MainContext = React.createContext();
export default class MainProvider extends Component {
    
    constructor(props) {
        super(props);
        this.updatePreview = this.updatePreview.bind(this)
        this.updatePreviewViaEditor = this.updatePreviewViaEditor.bind(this)
        this.deleteElement=this.deleteElement.bind(this);
        this.openWindow = this.openWindow.bind(this)
        this.changeDrag = this.changeDrag.bind(this)
        // this.logout = this.logout.bind(this)
       
        this.state={
            default_data: [
              {name:'Single Checkbox', category:'wip', icon:'fa-check-circle-o'},
              {name:'Select Image', category:'wip', icon:'fa-file-image-o'},
              {name:'Radio List', category:'wip',icon:'fa-stop-circle-o'},
              {name:'Select', category:'wip',icon:'fa-chevron-down'},
                {name:'Paragraph', category:'wip', icon:'fa-paragraph'},
                {name:'Text Input', category:'wip',icon:'fa-keyboard-o'},
                {name:'Number Input', category:'wip',icon:'fa-plus'},
                {name:"Email",category:"wip",icon:'fa-envelope'},
                {name:"Date", category:"wip",icon:'fa-calendar'},
                {name:"Search with select", category:"wip",icon:'fa-chevron-down'},
              ],
              preview:[],
              newWindow:false,
              i:0,
              drag:false
        }

      
      } 


      changeDrag=()=>{
        this.setState({
          drag:!this.state.drag
        })
      }

      updatePreview(data){
        const obj={};
        obj['name']=data
        obj['HtmlName']=data
        obj['label']='label'
        obj['placeholder']="none"
        obj['required']=false
        obj['validation']='none'
        obj['format']={}
        obj['id']=this.state.i
        this.state.preview.push(obj)
        this.setState({i:this.state.i+1})
      }
      openWindow(){
        this.setState({
            newWindow:!this.state.newWindow
        })
      }
      updatePreviewViaEditor(id,allData,currentEle,fileFormat){
        // console.log(currentEle)

        if(currentEle==='Single Checkbox'){
          this.updatePreviewViaEditorForRadio(id,allData)
        }
        else if(currentEle==='Text Input')
        {

          this.updatePreviewViaEditorForText(id,allData)
        }
        else if(currentEle==='Select Image')
        {

          this.updatePreviewViaEditorForFile(id,allData,fileFormat)
        }
        else if(currentEle==='Number Input')
        {
          this.updatePreviewViaEditorForNumber(id,allData,fileFormat)
        }else if(currentEle==='Email'){
          this.updatePreviewViaEditorForText(id,allData)

        }
        else if(currentEle==='Date'){
        
          this.updatePreviewViaEditorForDate(id,allData,fileFormat)
        }else if(currentEle==='Paragraph'){
        
          this.updatePreviewViaEditorForParagraph(id,allData,fileFormat)
        }else if(currentEle==='Select'){
          this.updatePreviewViaEditorForSelect(id,allData,fileFormat)
        }else if(currentEle==="Search with select"){
          this.updatePreviewViaEditorForSearchWithSelect(id,allData,fileFormat)
        }

      }
      updatePreviewViaEditorForText(id,allData){
     
       console.log('text')
        var preview = [...this.state.preview];
        var index = preview.findIndex(obj => obj.id == id);
     
        preview[index].placeholder = allData.placeholder;
        preview[index].required = allData.required;
        preview[index].label=allData.label;
        this.setState({preview});
     }
     updatePreviewViaEditorForRadio(id,allData){
     
      console.log('radio')
      console.log(allData.required)
      var preview = [...this.state.preview];
      var index = preview.findIndex(obj => obj.id == id);
      preview[index].required = allData.required;
      preview[index].label=allData.label;
      this.setState({preview});
   }

   updatePreviewViaEditorForFile(id,allData,fileFormat){
     
    console.log('file')
    
    var preview = [...this.state.preview];
    var index = preview.findIndex(obj => obj.id == id);
    preview[index].required = allData.required;
    preview[index].label=allData.label;
   
    preview[index].validation=allData.validation;
    
  
    preview[index].format={...fileFormat}
    
 
 }
 updatePreviewViaEditorForNumber=(id,allData,fileFormat)=>{
   
  var preview = [...this.state.preview];
  var index = preview.findIndex(obj => obj.id == id);
  preview[index].required = allData.required;
  preview[index].label=allData.label;
  preview[index].validation=allData.validation;
  preview[index].format={...fileFormat}
  
  this.setState({preview});

 }
 updatePreviewViaEditorForDate(id,allData,fileFormat){
     
  console.log('file')
  
  var preview = [...this.state.preview];
  var index = preview.findIndex(obj => obj.id == id);
  preview[index].required = allData.required;
  preview[index].label=allData.label;
 
  preview[index].validation=allData.validation;
  

  preview[index].format={...fileFormat}
  

}
updatePreviewViaEditorForSelect(id,allData,fileFormat){
     
  console.log('select')
  console.log(allData)
  let option=allData.option
  let sliptData=option.split(',')
  
  var preview = [...this.state.preview];
  var index = preview.findIndex(obj => obj.id == id);
  preview[index].required = allData.required;
  preview[index].label=allData.label;
 
  preview[index].validation=allData.validation;
  preview[index].option=sliptData
  

  preview[index].format={...fileFormat}
  

}

updatePreviewViaEditorForSearchWithSelect(id,allData,fileFormat){
     
  console.log('select')
  console.log(allData)
  let option=allData.option
  let sliptData=option.split(',')
  
  var preview = [...this.state.preview];
  var index = preview.findIndex(obj => obj.id == id);
  preview[index].required = allData.required;
  preview[index].label=allData.label;
 
  preview[index].validation=allData.validation;
  preview[index].option=sliptData
  

  preview[index].format={...fileFormat}
  

}

updatePreviewViaEditorForParagraph(id,allData){
     
  console.log('Paragraph')
   var preview = [...this.state.preview];
   var index = preview.findIndex(obj => obj.id == id);
   preview[index].label=allData.label;
   this.setState({preview});
}
     
 deleteElement(id){
   let preview = this.state.preview
  var index = preview.findIndex(obj => obj.id == id);
  if (index > -1) {
    preview.splice(index, 1);
  }
  this.setState({
    preview
  })
 }
    
    render() {
  
      console.log(this.state.preview)
     
        return (
          <MainContext.Provider value={{...this.state,
           updatePreview:this.updatePreview,
           openWindow:this.openWindow,
           updatePreviewViaEditor:this.updatePreviewViaEditor,
           deleteElement:this.deleteElement,
           changeDrag:this.changeDrag}}>
              {this.props.children}
          </MainContext.Provider>
        )
    }
}
const MainConsumer = MainProvider.Consumer;
export {MainProvider, MainConsumer, MainContext};



 

//   {name:'Single Checkbox', category:'wip', icon:'fa-check-circle-o'},
//   {name:'Checkbox List', category:'wip', icon:'fa-th-list'},
//   {name:'Select Image', category:'wip', icon:'fa-file-image-o'},
//   {name:'Multi-Select', category:'wip',icon:'fa-dot-circle-o'},
//   {name:'Radio List', category:'wip',icon:'fa-stop-circle-o'},
//   {name:'Select', category:'wip',icon:'fa-chevron-down'},
//   {name:'Submit', category:'wip',icon:'fa fa-square'},
//  {name:'Header Text', category:'wip', icon:'fa-header'},
// {name:'Label', category:'wip', icon:'fa-tag'},
//     {name:'Paragraph', category:'wip', icon:'fa-paragraph'},
//     {name:'Line Break', category:'wip', icon:'fa-arrows-h'},
//     {name:'Dropdown', category:'wip' , icon:'fa-caret-square-o-down'},
//     {name:'Tags', category:'wip',icon:'fa-tags'},
//     {name:'Checkboxes', category:'wip',icon:'fa-check-circle-o'},
//     {name:'Text Input', category:'wip',icon:'fa-keyboard-o'},
//     {name:'Number Input', category:'wip',icon:'fa-plus'},
//     {name:'Multi-line Input', category:'wip',icon:'fa-dot-circle-o'},
//     {name:'Rating', category:'wip',icon:'fa-star'},
//     {name:'Web site', category:'wip',icon:'fa-bookmark'},
//     {name:'Range', category:'wip',icon:'fa-tachometer'},
//     {name:"Email",category:"wip",icon:'fa-envelope'},
//     {name:"Date", category:"wip",icon:'fa-calendar'},
//     {name:"Signature", category:"complete",icon:'fa-american-sign-language-interpreting'}