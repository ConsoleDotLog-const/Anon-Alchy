import React from 'react';

import Drawer from "@material-ui/core/Drawer"
import List from '@material-ui/core/List'
import ListItem from "@material-ui/core/ListItem"

const sideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onclose={()=> props.onClose(false)}
        >
            drawer
        </Drawer>
    );
};

export default sideDrawer;