import React, { Component } from 'react';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        position:['Balconey', 'Meduim', 'star'],
        desc:[
            'random'
        ],
        linkto:['https://www.google.com/','https://www.google.com/','https://www.google.com/']
    }

    showBoxes = () => (
        this.state.prices.map(()=>{
                <div className="prices_item">
                    <div className="pricing_inner_wrapper">
                        <div></div> 

                    </div>

                </div>
        })
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                        <div className="pricing_wrapper">
                            BOXES

                        </div>

                </div>
                
            </div>
        );
    }
}

export default Pricing;