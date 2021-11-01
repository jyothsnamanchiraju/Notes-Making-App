import React, {Component} from 'react'; 
import './Scratchpad.css'; 
import { Typography } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';

class Scratchpad extends Component{

    render(){
        return(
            <div className="scratch-area">
                <Typography align="left" variant="h6">#Scratchpad</Typography>
                <div>
                <Typography align="left" variant="subtitle2">The easiest note to find. </Typography>
                <TextareaAutosize aria-label="scratch-area" placeholder="scratch pad"
                                        size='large'
                                        variant='filled'
                                        style={{width:'1000px', border:'none'}}
                                        > 
                </TextareaAutosize>
               
                </div> 
            </div>
        ); 
    }
}

export default Scratchpad; 