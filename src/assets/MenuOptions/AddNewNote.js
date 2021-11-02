import React from 'react'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

const AddNewNote= function(){
    return(
        <div>
        <List>
             <ListItem disablePadding className="newNote">
                <ListItemButton style={{height:'50px'}}>
                    <ListItemText primary="New Notes" />
                </ListItemButton>
             </ListItem>
        </List>
        </div>
    )
}

export default AddNewNote; 