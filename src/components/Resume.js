import React from "react";
import "./styles/resumest.css"
import resume from "./resources/RAGHAV-RESUME.pdf"
import resumes from "./resources/resume.png"
export default function Resume(){
    return(
        <div style={{backgroundImage:"linear-gradient(to right,#FFD3A5,#FD6585)"}} id="Resume">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resume</title>
  <h1 className="wel">Resume</h1>
  <div className="frame">
  <object data={resume} type="application/pdf" className="pdf">
    </object>
  </div>
  <h2 className="wel">Download My Resume here</h2>
  <div className="download">
    <a href="resources/RAGHAV-RESUME.pdf" download="raghav-resume">
      <img src={resumes} className="re" alt="raghav"/>
    </a>
  </div>
</div>

    )
}
