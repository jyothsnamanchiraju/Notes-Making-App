import React, {Component} from 'react'; 
import './Notespage.css'; 

import TextField from '@mui/material/TextField';
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText'; 
import { TextareaAutosize } from '@material-ui/core';

class Notespage extends Component{
    constructor(){
        super(); 
        this.state={
            listItemSelect:"", 
            noteSelected:0,
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
       // let nts = this.state.notes; 
        const AddNewNote=(
            <div>
            <List>
             <ListItem disablePadding className="newNote">
                <ListItemButton style={{height:'50px'}}>
                    <ListItemText primary="New Notes" />
                </ListItemButton>
             </ListItem>
            </List>
        </div>
        );

        const NotesList =(
            <div>
            <List>{
                    this.state.notes.filter(n1=>(n1.category!=='trash')).map((n2)=>
                        <ListItem disablePadding className="NotesList" 
                                  onClick={()=>{this.setState({noteSelected: n2.id})}}>
                            <ListItemButton style={{height:'50px'}}>
                                <ListItemText key={n2.id} primary={n2.text} />
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List>
        </div>
        );

        const FavList=(
        <div>
            <List>{
                    this.state.notes.filter(n=>(n.favourite === true && n.category!=='trash')).map((f)=>(
                    <ListItem disablePadding className="Favorites"
                              onClick={()=>{this.setState({noteSelected: f.id})}}  >
                        <ListItemButton style={{height:'50px'}}>
                            <ListItemText key ={f.id} primary={f.text} />
                        </ListItemButton>
                    </ListItem>
                    ))
                }
            </List>
        </div>
        );

        const TrashList=(
        <div>
                <List>
                    { this.state.notes.filter(n=>(n.category ==='trash')).map(t=>(
                        <ListItem disablePadding className="Trash"
                                  onClick={()=>{this.setState({noteSelected: t.id})}} >
                            <ListItemButton style={{height:'50px'}}>
                                <ListItemText key={t.id} primary={t.text} />
                            </ListItemButton>
                        </ListItem>
                        ))
                    }
                </List>
        </div>
        );

        const notesDisplay=(
           <div> 
            {
            this.state.notes.filter(n=>(n.id === this.state.noteSelected)).map(s=>(
            <TextareaAutosize aria-label="scratch-area" placeholder="scratch pad"
                                        size='large'
                                        variant='filled'
                                        style={{width:'1000px', border:'none'}}
                                        value={s.text}
                                        onChange={this.textChangeHandler}> 
            </TextareaAutosize>
            ))}
            </div>
        );

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
                                {AddNewNote} 
                                {NotesList}
                            </div>
                            : this.props.type ==='fav'?
                            <div>
                                 {FavList}
                            </div>
                            : this.props.type === 'trash'?
                            <div> 
                                 {TrashList}
                            </div>
                            : 
                            <div>
                                {NotesList}
                            </div>
                        }
                    </div>
                </div>
                <div className="notes-content">
                     {
                         this.state.noteSelected ===0 ?
                         <div> New Note</div>
                         :
                         <div>{notesDisplay}</div>
                     }
                </div>

            </div>
        )
    }
}

export default Notespage; 