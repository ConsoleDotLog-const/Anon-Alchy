import React from 'react';
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {

const scrollToNavLink = (navlink) => {
    scroller.scrollTo(navlink,{
        duration:1500,
        delay:100,
        smooth:true,
        offset: -140
    })
    props.onClose(false)

}

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick = {()=> scrollToNavLink('Featured')}>
                    Featured
                </ListItem>

                <ListItem button onClick = {()=> scrollToNavLink("Info")}>
                    Info
                </ListItem>

                <ListItem button onClick = {()=> scrollToNavLink('Highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick = {()=> scrollToNavLink("Pricing")}>
                  Where Else
                </ListItem>

                <ListItem button onClick = {()=> scrollToNavLink("Location")}>
                    Location
                </ListItem>

            </List>

        </Drawer>
    );
};

export default SideDrawer;