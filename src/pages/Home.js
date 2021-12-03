import React from 'react'
import './home.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from './Search';

function Home() {
    return (
        <div className="home">
           

            <div className='home_header'>

            
                <div className='home_headerLeft'>
                    {/*Link About */}
                    <Link to='/about'>About</Link>
                    {/*Link Store*/}
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    {/*Link Gmail */}
                    <Link to='/gmail'>Gmail</Link>
                    {/*Link Images*/}
                    <Link to='/images'>Images</Link>
                    {/*Link All Apps Icon*/}
                    <AppsIcon/>
                    {/*Link Avatar*/}
                    <Avatar/>
                </div>
            </div>

            <div className='home_body'>
                        <img 
                            src = " https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="glogo"/>
                           
                 <div className="home_inputContainer"/>
                     <Search/>
                </div>
            </div>
      
          
    )
}

export default Home
