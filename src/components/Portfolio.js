import React from "react";
import "./styles/portfoliost.css"
import irctc1 from "./resources/irctc1.png"
import irctc2 from "./resources/irctc2.png"
import irctc3 from "./resources/irctc3.png"
import irctc4 from "./resources/irctc4.png"
import irctc5 from "./resources/irctc5.png"
import irctc6 from "./resources/irctc6.png"
export default function Portfolio(){
    return(
<div style={{backgroundImage:"linear-gradient(to right,#FFD3A5,#FD6585)"}} id="Portfolio">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <h1 className="wel">My Projects</h1>
  <div>
    <h2 className="lwel">Hotel Management System</h2>
    <ul>
      <li>Tech Stack Used : C++</li>
      <li>
        Developed a hotel management system during the first year of college,
        leveraging introductory knowledge of C++
      </li>
      <li>
        Successfully completed the project within a tight deadline, acquiring
        proficiency in various new concepts and features.
      </li>
      <li>
        It allows users to perform various tasks related to hotel management
        such as making reservations, checking in and out, viewing room details,
        and managing hotel amenities.
      </li>
    </ul>
  </div>
  <div>
    <h2 className="lwel">IRCTC Landing Page Clone</h2>
    <ul>
      <li>Tech Stack Used: HTML, CSS</li>
      <li>
        I tested my HTML and CSS skills to their full potential by creating a
        non-functional clone of the IRCTC landing page
      </li>
      <li>I completed this project within 8 hours</li>
    </ul>
  </div>
  <div>
    <h2 className="lwel">LLM Bigram Model from scratch</h2>
    <ul>
      <li>Tech Stack Used: Python, Jupyter, Pytorch</li>
      <li>Learnt about LLM's in detail</li>
      <li>Created a bigram model from scratch</li>
      <li>Trained it to achieve accuracy about ~35%</li>
    </ul>
  </div>
  <div className="phro1">
    <img className="row1" src={irctc1} />
    <img className="row1" src={irctc2} />
    <img className="row1" src={irctc3} />
  </div>
  <div className="phro2">
    <img className="row2" src={irctc4} />
    <img className="row2" src={irctc5} />
    <img className="row2" src={irctc6} />
  </div>
</div>

    )
}