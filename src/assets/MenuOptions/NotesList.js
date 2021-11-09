import React from 'react'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

const NotesList= function({nts}){
    return(
        <div>
        <List>{
                nts.filter(n1=>(n1.category!=='trash')).map((n2)=>
                    <ListItem disablePadding className="NotesList">
                        <ListItemButton style={{height:'50px'}}>
                            <ListItemText key={n2.id} primary={n2.text} />
                        </ListItemButton>
                    </ListItem>
                )
            }
        </List>
        </div>
    )
}

export default NotesList; 