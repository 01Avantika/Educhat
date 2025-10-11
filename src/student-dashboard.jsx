import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./index.css";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Student-dashboard")
  
console.log("logging out...");
    navigate("/"); 
  };

  

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h2>EduChat</h2>
        <p>Role: Student</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Secure Chat</h3>
          <p>View your chat history securely</p>
          <button>Open History</button>
        </div>
        <div className="card">
          <h3>ERP Integration</h3>
          <p>Connect with your college ERP system</p>
          <button>Connect ERP</button>
        </div>
        <div className="card">
          <h3>AI Assistant</h3>
          <p>Ask anything, get instant answers</p>
          <Link to="/ai"><button>Open Chatbot</button></Link>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>© 2025 EduChat | Help & Support</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;
