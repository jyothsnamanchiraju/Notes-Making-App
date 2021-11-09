import React, {Component} from 'react'; 
import './Notespage.css'; 

import TextField from '@mui/material/TextField';
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

import AddNewNote from '../assets/MenuOptions/AddNewNote'; 
import FavList from '../assets/MenuOptions/FavList'; 
import NotesList from '../assets/MenuOptions/NotesList'; 
import TrashList from '../assets/MenuOptions/TrashList'; 

class Notespage extends Component{
    constructor(){
        super(); 
        this.state={
            listItemSelect:"", 
            notes:[{
                    id:1, 
                    text:"corn**",
                    category:"trash",
                    favourite:false
                    }, 
                   {
                    id:2,
                    text:"potato",
                    category:"",
                    favourite:false
                    },
                    {
                     id:3, 
                     text:"tomato**",
                     category:"trash",
                     favourite:true
                    },
                    {
                    id:4,
                    text:"pumpkin",
                    category:"",
                    favourite:true
                }
                ]
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
                        {this.props.type === 'new'?
                            <div>
                                <AddNewNote/> 
                                <NotesList/>
                            </div>
                            : this.props.type ==='fav'?
                            <div>
                                 <FavList nts={this.state.notes}/>
                            </div>
                            : this.props.type === 'trash'?
                            <div> 
                                 <TrashList nts={this.state.notes}/>
                            </div>
                            : 
                            <div>
                                <NotesList nts={this.state.notes}/>
                            </div>
                        }
                    </div>
                </div>
                <div className="notes-content">
                     
                </div>

            </div>
        )
    }

}

export default Notespage; 