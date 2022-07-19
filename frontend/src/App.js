import React from 'react';
import './App.css';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
     
     <div className="container" style={{height:"100%", width:"70%"}}>
    {/* <Routes>
    <Route path="/" element={<Signup/>}/>
    </Routes> */}
    <Signup/>
    </div>
    
    
     
    
      
    </div>
  );
}

export default App;
