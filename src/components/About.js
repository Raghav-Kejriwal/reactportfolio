import React from "react";
import rside from "./resources/rside.jpg"
import timeline from "./resources/timeline.png"
import c1 from "./resources/c1.jpeg"
import c2 from "./resources/c2.jpeg"
import c3 from "./resources/c3.jpeg"
import c4 from "./resources/c4.jpeg"
import lkd from "./resources/lkd.png"
import './styles/aboutst.css';
export default function About() {
  return (
  <div style={{backgroundImage:"linear-gradient(to right,#FFD3A5,#FD6585)"}} id="About">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Me</title>
  <h1 className="wel">About Me</h1>
  <div>
    <img src={rside} className="right" alt="raghavimage"/>
    <p className="main">
      <br />
      Greetings! I came into this world on the 17th of September in 2004, into a
      middle-class family nestled in Faridabad, Haryana. My academic journey has
      led me to pursue a Bachelor's degree in Computer Science at the
      prestigious Vellore Institute of Technology.
      <br />
      <br />
      Having spent my formative years in Faridabad, I successfully navigated my
      academic milestones, completing both my Class 10th and Class 12th at MVN
      Aravali Hills Senior Secondary School. Mathematics and the Sciences have
      always been my forte, igniting a fervent interest in the realm of Computer
      Science. Presently, my passion lies in the dynamic fields of Machine
      Learning and Deep Learning.
      <br />
      <br />
      I am an avid learner, constantly seeking to expand my knowledge and
      staying abreast of the latest industry advancements. Beyond academia, my
      personal interests encompass the harmonious world of music, the immersive
      realm of books, and the thrill of video games.
      <br />
      <br />
      Fluency in English, Hindi, and French empowers me to communicate
      effectively across diverse linguistic landscapes. With aspirations to
      secure enriching internships and rewarding employment opportunities in the
      near future, I am poised to contribute meaningfully to the ever-evolving
      tech industry.
      <br />
      <br />
      In the realm of academics, I take pride in my consistent pursuit of
      excellence. I secured an impressive 94.40% and 96.60% in my Class 12th and
      Class 10th examinations, respectively, reflecting a strong foundation and
      dedication to academic success.
      <br />
      <br />
      As I progress through my higher education journey, my current Cumulative
      Grade Point Average (CGPA) stands at 9.65 after completing three semesters
      at Vellore Institute of Technology. This academic achievement underscores
      my commitment to maintaining a high standard of learning and academic
      rigor.
      <br />
      <br />I am driven by a formal approach to education, valuing the
      discipline and structure it provides. These academic accomplishments serve
      as a testament to my diligence and passion for acquiring knowledge. I
      remain steadfast in my commitment to maintaining this level of academic
      excellence throughout my educational and professional pursuits.
    </p>
  </div>
  <div>
    <img src={timeline} className="time" />
  </div>
  <div>
    <h2 className="wel">
      I have also done some certification courses based on my interests
    </h2>
  </div>
  <div className="space">
    <div className="parent">
      <div className="first">
        <p className="main">Skills Gained</p>
        <ul className="main">
          <li>Linear Regression</li>
          <li>Regularization to Avoid Overfitting</li>
          <li>Logistic Regression for Classification</li>
          <li>Gradient Descent</li>
          <li>Supervised Learning</li>
        </ul>
      </div>
      <div className="second">
        <img className="cert" src={c1} alt="First slide" />
      </div>
    </div>
    <div className="parent">
      <div className="first">
        <img className="cert" src={c2} alt="Second slide" />
      </div>
      <div className="second">
        <p className="main">Skills Gained</p>
        <ul className="main">
          <li>Tensorflow</li>
          <li>Advice for Model Development</li>
          <li>Artificial Neural Network</li>
          <li>Xgboost</li>
          <li>Tree Ensembles</li>
        </ul>{" "}
      </div>
    </div>
    <div className="parent">
      <div className="first">
        <p className="main">Skills Gained</p>
        <ul className="main">
          <li>Anomaly Detection</li>
          <li>Unsupervised Learning</li>
          <li>Reinforcement Learning</li>
          <li>Collaborative Filtering</li>
          <li>Recommender Systems</li>
        </ul>
      </div>
      <div className="second">
        <img className="cert" src={c3} alt="Third slide" />
      </div>
    </div>
    <div className="parent">
      <div className="first">
        <img className="cert" src={c4} alt="Fourth slide" />
      </div>
      <div className="second">
        <p className="main">Skills Gained</p>
        <ul className="main">
          <li>Artificial Neural Network</li>
          <li>Backpropagation</li>
          <li>Python Programming</li>
          <li>Deep Learning</li>
          <li>Neural Network Architecture</li>
        </ul>{" "}
      </div>
    </div>
  </div>
  <h2 className="wel">Connect with me on linkedin</h2>
  <div className="linkedin">
    <a href="https://www.linkedin.com/in/raghav-kejriwal-5ab38624b/">
      <img src={lkd} />
    </a>
  </div>
</div>
  );
}