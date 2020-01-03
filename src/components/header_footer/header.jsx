import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/Button'

import SideDrawer from './SideDrawer'

class header extends Component {


    state = {
        drawerOpen: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }


    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#2f2f2f',
                    boxShadow:'none',
                    padding:'5px 0px'
                    
                }}
            
            >
               <ToolBar>

                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">Anon Alchy</div>
                        <div className="header_logo_title">Drinking Specialists</div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true)}
                    > 
                        <MenuIcon/>
                       
                        </IconButton>
                       
                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=>this.toggleDrawer(value)}
                    />

               </ToolBar>

            </AppBar>
        );
    }
}

export default header;