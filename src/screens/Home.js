import React, { Component } from 'react'; 
import './Home.css'; 
import Sidebar from '../common/Sidebar'; 
import Notespage from '../common/Notespage';
import Scratchpad from './Scratchpad';

class Home extends Component{
    constructor(){
        super(); 
        this.state={
            scratchSelected: false,
            scratchText:"",
            notesType:""
        }
    }

/** 
 * handleScratchpad is called from the child component Sidebar
 * It is invoked on clicking the 'Sidebar' option in the Menu.
*/

    handleScratchpad=(c)=>{
           this.setState({scratchSelected: c});  
    }
 /**
   * handleNotes is called from the child component Sidebar
   * on clicking the buttons of 'Notes', 'Favourite', 'Trash', 
   * the respective value is  passed through the parameter 'o' 
   * and updated into state variable 'notes'
 */
    handleNotes=(o)=>{
        this.setState({scratchSelected:false, notesType:o});
    }

 /**
  * The below method retains the text from scratchpad 
  * and is sent to scratchpad through props
  * The Scratchpad component is sent two props- 
  * 'scratch' it retains the original message in the scrathpad 
  * 'sText' it suggests the previous scratch before mounting the component. 
  * */   
      retainScratchText=(r)=>{
          this.setState({scratchText:r});
      }

    render(){
        return(<div className="home">
            <Sidebar scratchPad={this.handleScratchpad} notes={this.handleNotes} />
            {   this.state.scratchSelected ? <Scratchpad scratch={this.retainScratchText} sText={this.state.scratchText}/>
                                           : <Notespage type={this.state.notesType}/>
            }
        </div>);
    }
}

export default Home; 