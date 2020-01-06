import React from 'react';

import Zoom from 'react-reveal/Zoom'



const Info = () => {
    return (
        <div className='bck_black'>
           <div className="center_wrapper">
               <div className="vn_wrapper">

<Zoom duration={900} delay={400}>
                   <div className="vn_item">
                       <div className="vn_outer">
                           <div className="vn_inner">
                               <div className="vn_icon_square bck_red">
                                   <div 
                                            className="vn_icon"
                                            style={{
                                                background:`url(${''})`
                                            }}
                                   >

                                   </div>
                               </div>
                               <div className="vn_title"> Event Date and Time</div>
                                   <div className='vn_desc'>10th January 2020 @9.00 Pm</div>
                           </div>
                       </div>
                   </div>
 </Zoom>

 <Zoom duration={1200} delay={500}>
                   <div className="vn_item">
                       <div className="vn_outer">
                           <div className="vn_inner">
                               <div className="vn_icon_square bck_yellow">
                                   <div 
                                            className="vn_icon"
                                            style={{
                                                background:`url(${''})`
                                            }}
                                   >

                                   </div>
                               </div>
                               <div className="vn_title"> Event Location</div>
                                   <div className='vn_desc'><br/>TBA</div>
                           </div>
                       </div>
                   </div>
</Zoom>

               </div>
           </div>
        </div>
    );
};

export default Info;