import React, { useState } from 'react';
import './App.css';
// import Aboutt from './components/Aboutt';
import Navbarr from './components/Navbarr';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const[mode,setmode]= useState('light');
  const[alert,setalert]=useState('hello');

  const showalert=(message,type)=>{
    setalert({
    msg:message,
    type:type
  })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.getElementById('mybox').style.backgroundColor = 'grey';
      document.getElementById('mybox').style.color = 'white';
      document.getElementById('ha').style.color = 'white';
      document.getElementById('ha1').style.color = 'white';
      showalert("dark mode has been enabled","success");
      // setInterval(() => {
      //   document.title="Textutils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install now';
      // }, 1500);
      document.title="Textutils-dark mode"


    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('mybox').style.backgroundColor = 'white';
      document.getElementById('mybox').style.color = 'black';
      document.getElementById('ha').style.color = 'black';
      document.getElementById('ha1').style.color = 'black';
      showalert("light mode has been enabled","success");
      document.title="Textutils-light mode"




    }

  }
  return (
   <>
   {/* <BrowserRouter>
<Navbarr title= "Textutils" mode={mode} toggleMode={toggleMode} about="About"/>
<div className="container my - 3">
  <Alert alert={alert}/>
  <Routes>
          <Route exact path="/Aboutt" element={
            <Aboutt />}/>
          
          <Route exact path="/"
          element={<TextForm showalert={showalert} heading="enter the text to analyze"/>}/>
          
          </Routes>
 <Aboutt/> 
</div>
</BrowserRouter> */}

<Navbarr title= "Text Master" mode={mode} toggleMode={toggleMode} about="About"/>
<div className="container my - 3">
  <Alert alert={alert}/>
  <TextForm showalert={showalert} heading="enter the text to analyze"/>
          
{/* <Aboutt/> */}
</div>
   </>
  );
}

export default App;
