import React from "react";
import "./styles/testimonialsst.css"
import report from "./resources/report.pdf"

export default function Testimonials(){
    return(
    <div style={{backgroundImage:"linear-gradient(to right,#FFD3A5,#FD6585)"}} id="Testimonials">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Testimonials</title>
  <h1 className="wel">My Awards</h1>
  <h2 className="lwel">Certificate of Merit</h2>
  <div className="frame">
      <object data={report} type="application/pdf" className="pdf">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
    </object>
  </div>
  <div className="text">
    <ul>
      <li>
        I ranked 11th among 3000 students in my branch and received a
        scholarship on University Day
      </li>
      <li>Served as Programme Representative in my first year</li>
    </ul>
  </div>
</div>
    )
}