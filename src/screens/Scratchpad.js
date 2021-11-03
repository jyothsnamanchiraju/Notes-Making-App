import React, {Component} from 'react'; 
import './Scratchpad.css'; 
import { Typography } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';

class Scratchpad extends Component{
    constructor(){
        super();
        this.state={
            scratchText:""
        }
    }

    componentWillMount(){
        this.setState({scratchText: this.props.sText});
    }

    scratchTextHandler=(e)=>{
        this.setState({scratchText: e.target.value});
        this.props.scratch(e.target.value); 
    }
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
                                        value={this.state.scratchText}
                                        onChange={this.scratchTextHandler}> 
                </TextareaAutosize>
               
                </div> 
            </div>
        ); 
    }
}

export default Scratchpad; 