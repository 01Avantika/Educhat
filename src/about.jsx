import React from "react";
import "./index.css";
import aboutImg from "./images.png";


const about = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About</h2>
        <p className="subtitle">Learn more about EduChat</p>
        <p>
          EduChat is a privacy-focused AI chatbot designed to assist students
          and faculty with tasks related to a college’s ERP system. Built on
          state-of-the-art technologies and a commitment to user privacy,
          EduChat offers a secure and intuitive experience. Our mission is to
          empower the educational community with a smart and private assistant
          that simplifies their academic workflows.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="EduChat illustration" />
      </div>
    </div>
  );
};

export default about;
