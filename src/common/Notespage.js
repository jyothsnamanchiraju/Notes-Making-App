import React, {Component} from 'react'; 
import './Notespage.css'; 

import TextField from '@mui/material/TextField';
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

class Notespage extends Component{
    constructor(){
        super(); 
        this.state={
            listItemSelect:""
        }
    }

    listItemHandler=()=>{
            this.setState({listItemSelect:"list-item-select"}); 
    }

    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', width:'auto'}}>
                <div className="notes-header">
                    <TextField id="searchNotes" variant="outlined" 
                    placeholder="Search for notes" size="small" style={{backgroundColor:'white', 
                    margin:'5px', width:'-webkit-fill-available'}} /> 
                    <div className="notes-list">
                        <List>
                                <ListItem disablePadding className={this.state.listItemSelect} onClick={()=>this.listItemHandler()}>
                                    <ListItemButton style={{height:'50px'}}>
                                        <ListItemText primary="Welcome Notes" />
                                    </ListItemButton>
                                </ListItem>
                        </List>
                    </div>
                </div>
                <div className="notes-content">
                     
                </div>

            </div>
        )
    }

}

export default Notespage; 