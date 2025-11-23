
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./index.css";
import { Link } from "react-router-dom";

import img1 from "./image1.jpeg";
import img2 from "./image2.jpeg";
import img3 from "./image3.jpeg";


const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Student-dashboard")
  
console.log("logging out...");
    navigate("/"); 
  };
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2><span className="highlight"></span>EduChat</h2>
        <div className="role-section">
          <span className="role">Role: Student</span>
          <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        </div>
      </header>
     

      <main className="dashboard-main">
        <h1>Hello, <span className="highlight">Student.</span></h1>

        <div className="dashboard-cards">
          <div className="card">
          <img src={img1} alt="Secure Chat" />
            <h3>Secure Chat</h3>
            <p>View your chat history securely</p>
            <button className="blue-btn">Open History</button>
          </div>

          <div className="card">
          <img src={img2} alt="ERP Integration" />
            <h3>ERP Integration</h3>
            <p>Connect with your college ERP system</p>
            <button className="green-btn">Connect ERP</button>
          </div>

          <div className="card">
          <img src={img3} alt="AI Assitant" />
            <h3>AI Assistant</h3>
            <p>Ask anything, get instant answers</p>
            <Link to="/ai"><button>Open Chatbot</button></Link>
          </div>
        </div>
      </main>

    
      <footer className="dashboard-footer">
        <p>© 2025 EduChat | Help & Support</p>
      </footer>
    </div>
  );
};

export default  StudentDashboard;

