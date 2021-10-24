import React, { Component } from 'react'; 
import './Home.css'; 
import Sidebar from '../common/Sidebar'; 
import Notespage from '../common/Notespage';

class Home extends Component{
    render(){
        return(<div className="home">
            <Sidebar/>
            <Notespage/>
        </div>);
    }
}

export default Home; 