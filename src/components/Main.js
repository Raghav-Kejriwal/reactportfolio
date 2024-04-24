import React from "react";
import "./styles/indexst.css"
import raghavphoto from "./resources/raghavphoto.png"
export default function Main(){
    return(
        <div style={{backgroundImage:"linear-gradient(to right,#FFD3A5,#FD6585)"}} id="Main">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Page</title>
  <h1 className="wel">Welcome!</h1>
  <div>
    <img className="photo" src={raghavphoto} alt="raghav"/>
    <p className="main">
      🌟 Welcome to Raghav's Corner of the Web! 🌟
      <br />
      <br />
      Hello and a warm greeting to all visitors!
      <br />
      <br />
      I'm thrilled to have you here at my personal space on the internet. This
      is more than just a website; it's a reflection of who I am, what I'm
      passionate about, and the journey I'm on.
      <br />
      <br />
      Feel free to explore the different sections to get to know me better.
      Whether you're here out of curiosity, shared interests, or just stumbled
      upon this virtual haven, I hope you find something that resonates with
      you.
      <br />
      <br />
      Expect to discover a blend of my thoughts, experiences, and creative
      expressions. I believe in the power of connection and the beauty of shared
      stories, so don't hesitate to reach out, leave a comment, or connect
      through social media. Let's make this digital space a community where
      ideas flow, conversations spark, and friendships blossom.
      <br />
      <br />
      Thank you for taking the time to visit. Your presence here means a lot to
      me. Here's to a journey of exploration, inspiration, and connection!
      <br />
      <br />
      Cheers, Raghav Kejriwal
    </p>
  </div>
  <h2 className="wel">✨ Know in detail here ✨ </h2>
  <div>
    <p className="maine">
      Crafting digital dreams into reality, one pixel at a time. Welcome to my
      portfolio, where creativity meets functionality, and innovation finds its
      home.
    </p>
  </div>
</div>

    )
}
