import React,{useState} from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core"

function Search() {
//keep track of seached input
//use state hook

const [input,setInput] = useState('');
   
    console.log("you hit search")
    const search = (e) =>{
        e.preventDefault();
    
    
  
    };

    return (
        <div className="search">
        <div className="search_input">
            <SearchIcon className = "search_inputIcon"/>
            <input value={input} onChange = {e => setInput(e.target.value)}/>
            <MicIcon/>
        </div>
        <div className="search_buttons">
            <Button  onClick={Search} varient="outlined">
                Google Search
            </Button>
            <Button varient="outlined">
                I'm feeling Lucky ;)
            </Button>
        </div>
        </div>
    )
}

export default Search
