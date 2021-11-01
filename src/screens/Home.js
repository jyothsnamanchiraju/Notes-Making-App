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

    render(){
        return(<div className="home">
            <Sidebar scratchPad={this.handleScratchpad} notes={this.handleNotes} />
            {   this.state.scratchSelected ? <Scratchpad/>
                                           : <Notespage type={this.state.notesType}/>
            }
        </div>);
    }
}

export default Home; 