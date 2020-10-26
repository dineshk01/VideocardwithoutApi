import React from 'react';
import Classes from './Topbar.module.css';

class Topbar extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
    
        }
    }
    
    render(){
        return(
            <div className={Classes.TopbarDiv}>
                <span  className={Classes.TopbarMenu}>Home</span>
                <span  className={Classes.TopbarMenu}>SignIn</span>
            </div>
        )
    }
     
    }
    
    export default Topbar;