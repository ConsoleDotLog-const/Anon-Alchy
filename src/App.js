import React from 'react';
import './resources/styles.css'

import Header from './components/header_footer/header'
import Feature from './components/featured'


function App() {
  
      return (
       <div className="App"
          style={{
            height:'1500px',
            background:'red'
          }}
       >
         <Header/>
         <Feature/>
       </div>
      );   
  }
  

export default App;
