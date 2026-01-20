import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react"; 
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom"

function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message ,type)=>{
    setAlert(
      {msg:message,
      type:type}
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success");
      document.title='MicroProject - Dark Mode';
      // setInterval(() => {
      //   document.title='Install MicroProject Now';
      // }, 100);
      // setInterval(() => {
      //   document.title='MicroProject is Amazing';
      // }, 200);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title='MicroProject - Light Mode';
      // setInterval(() => {
      //   document.title='Install MicroProject Now';
      // }, 100);
      // setInterval(() => {
      //   document.title='MicroProject is Amazing';
      // }, 200);    
    }
  }


  return (
    <>
 <Router>
  <Navbar title='Text-Utils' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} mode={mode}/>
  <div className="container my-3">
  {/* <TextForm showAlert={showAlert} heading='Enter Text:' mode={mode}/> */}
  <Routes>
    <Route exact path="/about" element={<About mode={mode}/>} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter Text:' mode={mode}/>} />
  </Routes>
  </div>
  </Router>
    </> 
  );
}

export default App;
