import React from 'react';

import Fade from 'react-reveal/Fade'

const footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Anon Alchy</div>
                <div className="footer_copyright">
                Anon Alchy 2020. All rights reserved
                </div>

            </Fade>
        </footer>
    
    );
};

export default footer;