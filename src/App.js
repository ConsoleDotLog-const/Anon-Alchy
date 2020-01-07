import React from 'react';
import './resources/styles.css'

import Header from './components/header_footer/header'
import Feature from './components/featured'
import Info from './components/Info'
import Highlights from './components/highlights'
import Pricing from './components/pricing'


function App() {
  
      return (
       <div className="App"
          style={{
            height:'1500px',
            
          }}
       >
         <Header/>
         <Feature/>
         <Info/>
         <Highlights/>
         <Pricing/>
       </div>
      );   
  }
  

export default App;
