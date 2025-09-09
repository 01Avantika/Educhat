import React from "react";
export default function eduChat() {
  return (
    <div>
    <header>
       <h1>EduChat</h1>
         <nav>
<ul><li> <a href="home">Home</a> </li>
    <li> <a href="feature">Feature</a>  </li>
    <li> <a href="About.html">About</a> </li>
    <li> <a href="login.jsx">Login</a>  </li>
    <li>  <a href="get started" className="btn">Get started</a></li>
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
    Experience the privacy-aware AI chatbot <br /> for your college's ERP
    system.
    </p>
   <a href="Try Educhat" className="btn"> Try Educhat </a>
        </div>
        <div className="img">
          <img src="image.png" width="500" height="600" alt="EduChat demo" />
        </div>
        </section>
       <section className="containers">
       <section class="containers">
<div class="ab">
<h1>Features</h1>
<div class="features">
  <div class="feature-item">
    <img src="image1.jpeg" alt="Secure Chat"/>
    <p>Secure Chat</p>
  </div>
  <div class="feature-item">
    <img src="image2.jpeg" alt="ERP Integration"/>
    <p>ERP Integration</p>
  </div>
  <div class="feature-item">
    <img src="image3.jpeg" alt="AI-Powered"/>
    <p>AI-Powered</p>
  </div>
</div>   
</div>
      </section>
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
  
)
}