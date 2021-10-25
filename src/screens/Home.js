import React, { Component } from 'react'; 
import './Home.css'; 
import Sidebar from '../common/Sidebar'; 
import Notespage from '../common/Notespage';
import Scratchpad from './Scratchpad';

class Home extends Component{
    constructor(){
        super(); 
        this.state={
            scratchSelected: true
        }
    }

    render(){
        return(<div className="home">
            <Sidebar/>
            {   this.state.scratchSelected ? <Scratchpad/>
                                           : <Notespage/>
            }
        </div>);
    }
}

export default Home; 