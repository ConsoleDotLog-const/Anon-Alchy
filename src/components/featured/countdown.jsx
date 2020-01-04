import React, { Component } from 'react';

class countdown extends Component {

    state ={

    }

    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Next drink in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>

                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            hours
                        </div>

                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Mins
                        </div>
                        

                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            Seconds
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default countdown;