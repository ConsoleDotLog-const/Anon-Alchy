import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom'

import Button from '../utils/button'

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        position:['Lulu', 'Dragonfly', 'HotSauce'],
        desc:[
            'There’s no time like island time, prepare yourself for an epic journey tasting and drinking your way through the pacific, from Hawaii all the way to Aotearoa. We have taken inspiration from the islands to bring you a fresh new dining and cocktail experience with a modern take on traditional flavours.',

            'Inspired by their fathers’ heritage and hospitality successes, Dragonfly is the realisation of a dream. It represents 3 years of planning and research for the concept, interior design, food, beverage, service style and location and is the result of an exciting and creative collaboration.',

            'An ideal spot for lazy afternoon grazing, vibrant evening dining or a cheeky nightcap…or three. From pulled pork baos to beef tataki, Hot Sauce offers traditional Singaporean, Japanese, Korean and Thai flavours with a contemporary twist.'
        ],

        linkto:['https://www.lulubar.co.nz/','http://www.dragon-fly.co.nz/','https://www.hotsaucewellington.co.nz/'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                          
                            <span>{this.state.position[i]}</span>
                            
                        </div> 
                        <div className="pricing_description">
                           
                            {this.state.desc[i]}

                        </div>
                        <div className="pricing_buttons">
                            <Button
                                text="read more here"
                                bck="#ffa800"
                                color="#ffffff"
                               link={this.state.linkto[i]}
                                    
                            />
                        </div>
                    </div>
                </div>
             </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Close by options</h2>

                        <div className="pricing_wrapper">
                            {this.showBoxes()}

                        </div>

                </div>
                
            </div>
        );
    }
}

export default Pricing;