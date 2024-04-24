import React, { useState } from "react";
import "./styles/contactst.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    query: "",
    communication: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      query: "",
      communication: "",
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-description">Enter your details and I will get in touch with you at the earliest!📞</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="query">Query:</label>
          <textarea id="query" name="query" value={formData.query} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Preferred form of communication:</label>
          <div className="communication-options">
            <input type="radio" id="emailOption" name="communication" value="E-mail" onChange={handleChange} checked={formData.communication === "E-mail"} />
            <label htmlFor="emailOption">E-mail</label>
            <input type="radio" id="callOption" name="communication" value="Call" onChange={handleChange} checked={formData.communication === "Call"} />
            <label htmlFor="callOption">Call</label>
            <input type="radio" id="whatsappOption" name="communication" value="Whatsapp DM" onChange={handleChange} checked={formData.communication === "Whatsapp DM"} />
            <label htmlFor="whatsappOption">Whatsapp DM</label>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            query: "",
            communication: "",
          })}>Clear</button>
        </div>
      </form>
      <div className="contact-handles">
        <p>My Handles:🔗</p>
        <ul>
          <li>E-mail: <a href="mailto:raghavkejriwal199@gmail.com">raghavkejriwal199@gmail.com</a></li>
          <li>Phone-Number: <a href="tel:+918826744107">+918826744107</a></li>
          <li>Linkedin: <a href="https://www.linkedin.com/in/raghav-kejriwal-5ab38624b/">Raghav Kejriwal</a></li>
          <li>Github: <a href="https://github.com/Raghav-Kejriwal">Raghav-Kejriwal</a></li>
        </ul>
      </div>
    </div>
  );
}
