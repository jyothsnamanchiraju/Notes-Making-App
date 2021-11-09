import React from 'react'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 

const FavList= function({nts}){
    return(
        <div>
        <List>{
                nts.filter(n=>(n.favourite === true && n.category!=='trash')).map((f)=>(
                <ListItem disablePadding className="Favorites">
                    <ListItemButton style={{height:'50px'}}>
                        <ListItemText key ={f.id} primary={f.text} />
                    </ListItemButton>
                </ListItem>
                ))
              }
        </List>
        </div>
    )
}

export default FavList; 