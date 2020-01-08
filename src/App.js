import React from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './components/header_footer/header'
import Feature from './components/featured'
import Info from './components/Info'
import Highlights from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/footer'


function App() {
  
      return (
       <div className="App"
          style={{
            height:'1500px',
            
          }}
       >
         <Header/>

          <Element name="Featured">
          <Feature/>
          </Element>
          
          <Element name ="Info">
          <Info/>
          </Element>
         

         <Element name="Highlights">
          <Highlights/>
         </Element>
         
         <Element name="Pricing">
          <Pricing/> 
         </Element>
         
          <Element name = "Location">
          <Location/>
          </Element>
         
         <Footer/>
       </div>
      );   
  }
  

export default App;
