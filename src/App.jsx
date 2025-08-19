import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//    Route,
// } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
export default function Myapp() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState('primary');
  const [text, settext] = useState('Text Summary');
  const [page, setpage] = useState("Home");

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
      showalert("dark mode is enabled", "success")
      setcolor('dark')
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setmode('light');
      setcolor('primary')
      document.body.style.backgroundColor = 'white';
      showalert("light mode is enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }

  const togglemoder = () => {
    if (mode === 'light') {
      setmode('red');
      setcolor('danger');
      document.body.style.backgroundColor = '#8b1a12ff';
      showalert("Red mode is enabled", "success");
    } else {
      setmode('light');
      setcolor('primary');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled", "success");
    }
  };
  
  const togglemodeb = () => {
    if (mode === 'light') {
      setmode('blue');
      setcolor('info');
      document.body.style.backgroundColor = '#122e8bff';
      showalert("blue mode is enabled", "success");
    } else {
      setmode('light');
      setcolor('primary');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled", "success");
    }
  };

  const togglemodeg = () => {
    if (mode === 'light') {
      setmode('green');
      setcolor('success');
      document.body.style.backgroundColor = '#268b12ff';
      showalert("Green mode is enabled", "success");
    } else {
      setmode('light');
      setcolor('primary');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar Title="TextUtiles" mode={mode} togglemode={togglemode} togglemoder={togglemoder} togglemodeb={togglemodeb} togglemodeg={togglemodeg} color={color} setPage={setpage} />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes>
            <Route path="/About" element={<About />} />  */}
            <Textarea mode={mode} color={color} /> 
        </div>
      {/* </Router> */}
    </>
  );
}
