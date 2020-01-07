import React from 'react';

import Button from '@material-ui/core/Button'

import iconTicket from '../../resources/icons/ticket.png'

const button = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="smal"
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            <img 
                src={iconTicket}
                className="iconImage"
                alt="icon_button"
                
                
            
            /> {props.text}
                
        </Button>
    );
};

export default button;