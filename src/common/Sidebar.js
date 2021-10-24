import React,{Component} from 'react';
import './Sidebar.css';


import PlusBox from 'mdi-material-ui/PlusBox'; 

import MakeNotes from '../assets/mdi-Icons/MakeNotes';
import NoteText from '../assets/mdi-Icons/NoteText'; 
import Star from '../assets/mdi-Icons/Star'; 
import Dropdown from '../assets/mdi-Icons/Dropdown';
import Trash from '../assets/mdi-Icons/Trash'; 
import Right from '../assets/mdi-Icons/Right'; 
import Plus from '../assets/mdi-Icons/Plus'; 
import { Typography } from '@mui/material';


class Sidebar extends Component{
    constructor(){
        super(); 
        this.state={
            newNotesHighlight:"newNotes",
            spadHighlight: 'catalog-list',
            notesHighlight:'catalog-list', 
            favHighlight:'catalog-list',
            trashHighlight:'catalog-list'
        }
    }


    newNotesMouseOver=()=>{
         this.setState({newNotesHighlight: 'newNotes-highlight'})   
    }
    newNotesMouseOut=()=>{
        this.setState({newNotesHighlight: "newNotes"});
    }

    catalogListMouseOver=(o)=>{

        if(o==='spad')
            this.setState({spadHighlight:'catalog-list-highlight'});

        if(o==='notes')
            this.setState({notesHighlight:'catalog-list-highlight'});    
        
        if(o==='fav')    
            this.setState({favHighlight:'catalog-list-highlight'});
        
        if(o==='trash')    
            this.setState({trashHighlight:'catalog-list-highlight'});
    
       }

    catalogListMouseOut=(o)=>{

        if(o==='spad')
            this.setState({spadHighlight:'catalog-list'});

        if(o==='notes')
            this.setState({notesHighlight:'catalog-list'});    
        
        if(o==='fav')    
            this.setState({favHighlight:'catalog-list'});
        
        if(o==='trash')    
            this.setState({trashHighlight:'catalog-list'});
    }

    render(){
        return(
            
            <div>
                <div className="navigation">
                    
                        <div    className={this.state.newNotesHighlight} 
                                onMouseOver={()=>this.newNotesMouseOver()} 
                                onMouseOut={()=>this.newNotesMouseOut()} >

                            <PlusBox style={{margin:'5px'}}/> 
                            <Typography align='left' variant='h6'>New note</Typography>

                        </div>
                        <div    className="catalog">

                                <div className={this.state.spadHighlight} 
                                     onMouseOver={()=>this.catalogListMouseOver('spad')}
                                     onMouseOut={()=>this.catalogListMouseOut('spad')}>            
                                    <MakeNotes/>
                                    <Typography align='left' variant='subtitle1'>Scratchpad</Typography>
                                </div>
                                <div className={this.state.notesHighlight}
                                     onMouseOver={()=>this.catalogListMouseOver('notes')}
                                     onMouseOut={()=>this.catalogListMouseOut('notes')}>
                                    <NoteText/>
                                    <Typography align='left' variant='subtitle1'>Notes</Typography>
                                </div>
                                <div className={this.state.favHighlight}
                                     onMouseOver={()=>this.catalogListMouseOver('fav')}
                                     onMouseOut={()=>this.catalogListMouseOut('fav')}>
                                    <Star/>
                                    <Typography align='left' variant='subtitle1'>Favourites</Typography>
                                </div>
                                <div className={this.state.trashHighlight}
                                     onMouseOver={()=>this.catalogListMouseOver('trash')}
                                     onMouseOut={()=>this.catalogListMouseOut('trash')}>
                                    <Trash/>
                                    <Typography align='left' variant='subtitle1'>Trash</Typography>
                                </div>
                        </div>
                        <div className="categories" style={{margin:'10px', display:'flex', 
                                                            flexDirection:'column', justifyContent:'flex-start',
                                                            alignItems:'center', height:'auto',  
                                                            width: '-webkit-fill-available', color:'grey'}}>
                             <div className="category-bar" style={{display:'flex', 
                                                                   flexDirection:'row',
                                                                   justifyContent:'flex-start', 
                                                                   alignItems:'center', 
                                                                   width: '-webkit-fill-available'}}>                                                                   
                                <div style={{margin:'5px',display:'flex', flexDirection:'row', 
                                             justifyContent:'flex-start', 
                                             width: '-webkit-fill-available',
                                             alignItems:'center'}}>
                                    <Dropdown/> 
                                    <Typography align='left' variant='subtitle1' >CATEGORIES</Typography>  
                                </div>
                                <div>                                  
                                    <Plus/>
                                </div>
                             </div>   
                        </div>    
                </div>    

            </div>
            
        ); 
    }
}

export default Sidebar; 