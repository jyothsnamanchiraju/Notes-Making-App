import React from 'react'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

const TrashList= function({nts}){
    return(
        <div>
        <List>
            { nts.filter(n=>(n.category ==='trash')).map(t=>(
                <ListItem disablePadding className="Trash">
                    <ListItemButton style={{height:'50px'}}>
                        <ListItemText key={t.id} primary={t.text} />
                    </ListItemButton>
                </ListItem>
                ))
            }
        </List>
        </div>
    )
}

export default TrashList; 