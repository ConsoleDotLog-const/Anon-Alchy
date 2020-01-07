import React, { Component } from 'react';

import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import Button from '../utils/button'

class rating extends Component {

    state ={
        ratingStart:0,
        ratingEnd:30,

    }

    percentage =() => {
        if(this.state.ratingStart < this.state.ratingEnd){
            this.setState({
                ratingStart: this.state.ratingStart + 1
            })

        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
           
            <Fade 
                onReveal= {()=> this.percentage()}
             >
                    <div className="discount_porcentage">
                            <span>{this.state.ratingStart}%</span>
                            <span> off</span>
                    </div>
            </Fade>

            <Slide right>
                    <div className='discount_description'>
                        <h3> See the Special deals on now</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse excepturi necessitatibus, minima quasi dignissimos possimus vero ad non id voluptatibus, a impedit aut et aperiam, commodi quis quidem corrupti sed?</p>

                      
                        <Button
                            text="Find out more"
                            bck="#ffa800"
                            color="#ffffff"
                            link=""
                        />

                        
            
                    </div>
            </Slide>
                </div>
                
            </div>
        );
    }
}

export default rating;