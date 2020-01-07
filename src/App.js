import React from 'react';
import './resources/styles.css'

import Header from './components/header_footer/header'
import Feature from './components/featured'
import Info from './components/Info'
import Highlights from './components/highlights'


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
       </div>
      );   
  }
  

export default App;
