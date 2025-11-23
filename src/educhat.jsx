import React from "react";
import { Link } from "react-router-dom";
import Img from "./image.png";
import Img1 from "./image1.jpeg";
import Img2 from "./image2.jpeg";
import Img3 from "./image3.jpeg";



export default function Educhat() {
  return (
    <div>
      <header>
        <h1>EduChat</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#features">Features</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login-dashboard" className="btn">Get started</Link></li>
          </ul>
        </nav>
      </header>

      <section className="container">
        <div className="text">
          <h1 style={{ textAlign: "center" }}>
            Smart. Private. <br />
            Your College <br /> Assistant.
          </h1>
          
          <p>
            Experience the privacy-aware AI chatbot <br /> for your college's ERP system.
          </p>
          <Link to="/login" className="btn">Try Educhat</Link>
        </div>

        <div className="img">
          <img src={Img} width="500" height="600" alt="EduChat demo" />
        </div>
      </section>

      <section id="features" className="containers">
        <div className="ab">
          <h1>Features</h1>
          <div className="features">
            <div className="feature-item">
              <img src={Img1} alt="Secure Chat" />
              <p>Secure Chat</p>
            </div>
            <div className="feature-item">
              <img src={Img2} alt="ERP Integration" />
              <p>ERP Integration</p>
            </div>
            <div className="feature-item">
              <img src={Img3} alt="AI-Powered" />
              <p>AI-Powered</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="abc">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Login</li>
            <li>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
