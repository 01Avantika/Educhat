//import React from 'react'
//import {createRoot} from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom';
//import './index.css'
//import Educhat from './educhat.jsx/'
//import Login from "./login.jsx";
//import Signup from "./signup.jsx";

//createRoot(document.getElementById('root')).render(
//<BrowserRouter>
//<Educhat/>
//</BrowserRouter>

//)
//import React from "react";
//import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
//import './index.css'
//import Educhat from "./Educhat.jsx";
//import Login from "./login.jsx";
//import Signup from "./signup.jsx";


//createRoot(document.getElementById('root')).render(
  //<BrowserRouter>
 // <Educhat/>
 // </BrowserRouter>
//)
//function App() {
  //return (
    //<Router>
     // <Routes>
          
        //<Route path="/Educhat" element={<Educhat />} />
        //<Route path="/login" element={<Login />} />
       // <Route path="/signup" element={<Signup />} />
        
     // </Routes>
   // </Router>
 // );
//}

//export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Educhat from "./educhat.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import About from "./about.jsx";
import Logindashboard from "./login-dashboard.jsx";
import StudentDashboard from "./student-dashboard.jsx";
import AI_assistant from "./ai.jsx";
import ContextProvider from "./context/context.jsx";



function MainApp() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AI_assistant />} />
      <Route path="/Educhat" element={<Educhat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/login-dashboard" element={<Logindashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/ai" element={<AI_assistant />} />
      
    </Routes>
    </BrowserRouter>

    </ContextProvider>
    
    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <MainApp />
    
  </React.StrictMode>
);
