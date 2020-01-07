import React from 'react';

import Fade from 'react-reveal/Fade'

const desc = () => {
    return (
        <Fade duration={1500}>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                    <div className="highlight_description"> 
                    Will be a detailed description of the resturant/pub/club we will be drinking at. Followed by previous reviews and ratings. Recommended drinks and chefs specials.

                    </div>

            </div>
        </Fade>
        
    );
};

export default desc;