import React from 'react';
import Carrousel from './Carrousel'
import Countdown from './countdown'

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>
            
            {/* <div className="artist_name">
                <div className ="wrapper">
                    Drink

                </div>

            </div> */}

            <Countdown/>
            
        </div>
    );
};

export default Featured;