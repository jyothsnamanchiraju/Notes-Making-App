
import React, {Component} from 'react';
//import {v4 as uuid} from 'uuid'; 
//import dayjs from 'dayjs'; 
/*
const Note=[{
        id: 0,                   //uuid(), 
        text:"",
        category:"",
        favourite:false,
        created: new Date(),            //dayjs().format(),
        lastupdated: new Date()         //dayjs().format()
}]; 

export default Note; */ 

class Note extends Component{
        state={
                notes:["corn", "potato"],
        };

        saveInput = (e) =>{
                this.setState({input: e}); 
        };

        addNewNotes = () =>{
                let {notes, input } = this.state; 
                notes.push(input); 
        };

}

export default Note; 