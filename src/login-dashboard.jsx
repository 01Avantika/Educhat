import { Link } from "react-router-dom";
import "./index.css";

export default function Logindashboard() {
  return (
    <div className="login-dashboard">
      <h1 className="login-title">Login Dashboard</h1>
      <p className="login-subtitle">
        Choose how you want to continue with EduChat
      </p>

      <div className="login-options">
        <Link to="/login" className="login-card student">
          <h2>Student</h2>
          <p>Access personalized student dashboard</p>
        </Link>

        <Link to="/login" className="login-card faculty">
          <h2>Faculty / Officials</h2>
          <p>Manage courses, ERP, and official tasks</p>
        </Link>

        <Link to="/login" className="login-card visitor">
          <h2>Visitor</h2>
          <p>Explore EduChat as a guest</p>
        </Link>
      </div>
    </div>
  );
}
