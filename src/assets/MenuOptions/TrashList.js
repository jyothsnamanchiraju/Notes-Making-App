import React from 'react'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

const TrashList= function(){
    return(
        <div>
        <List>
             <ListItem disablePadding className="Trash">
                <ListItemButton style={{height:'50px'}}>
                    <ListItemText primary="Trash List" />
                </ListItemButton>
             </ListItem>
        </List>
        </div>
    )
}

export default TrashList; 