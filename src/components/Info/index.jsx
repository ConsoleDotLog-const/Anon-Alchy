import React from 'react';

import icon_calender from '../../resources/images/icons/calender.png'


const Info = () => {
    return (
        <div className='bck_black'>
           <div className="center_wrapper">
               <div className="vn_wrapper">
                   <div className="vn_item">
                       <div className="vn_outer">
                           <div className="vn_inner">
                               <div className="vn_icon_square bck_red">
                                   <div 
                                            className="vn_con"
                                            style={{
                                                background:`url(${icon_calender})`
                                            }}
                                   
                                   
                                   >

                                   </div>

                               </div>

                           </div>

                       </div>

                   </div>


               </div>

           </div>
        </div>
    );
};

export default Info;