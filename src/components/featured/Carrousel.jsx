import React from 'react';

import Slider from 'react-slick'
import S4 from '../../resources/images/s4.jpg'
import S2 from '../../resources/images/s1.jpg'
import S3 from '../../resources/images/s3.jpg'

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500,
        
    }

    return (
        <div

            className="carrousel_wrapper"
            style={{
            
                height:`${window.innerHeight}px`,
                overflow:'hidden',

            }}
        >

            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                                backgroundSize:'cover',
                                background:`url(${S4})`,
                                height:`${window.innerHeight}px`,
                        }}
                   >



                   </div>
                </div>

                <div>
                <div 
                        className="carrousel_image"
                        style={{
                                
                                background:`url(${S2})`,
                                height:`${window.innerHeight}px`,
                        }}
                   >



                   </div>
                </div>

                <div>
                <div 
                        className="carrousel_image"
                        style={{
                                background:`url(${S3})`,
                                height:`${window.innerHeight}px`,
                        }}
                   >



                   </div>
                </div>

            </Slider>
            
        </div>
    );
};

export default Carrousel;