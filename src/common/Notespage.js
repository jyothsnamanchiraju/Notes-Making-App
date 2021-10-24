import React, {Component} from 'react'; 
import './Notespage.css'; 

import TextField from '@mui/material/TextField';

class Notespage extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', width:'auto'}}>
                <div className="notes-header">
                    <TextField id="searchNotes" variant="outlined" 
                    placeholder="Search for notes" size="small" style={{backgroundColor:'white', 
                    margin:'5px', width:'-webkit-fill-available'}} /> 
                </div>
                <div className="notes-list"></div>
            </div>
        )
    }

}

export default Notespage; 