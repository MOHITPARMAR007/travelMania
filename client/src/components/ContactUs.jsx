import React, { useState } from "react";
import './ContactUs.css'
const FORM_ENDPOINT = "https://herotofu.com/start"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

  

    
        setSubmitted(true);
      
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contact-container">
      <h1><strong>Contact Us</strong></h1>
      
      <div className="in-contact-container">
      <div className="reach-us" style={{textAlign:'center', width:'40%'}}>
        <h1><strong>Reach Us</strong></h1>
        <br />
        <p><strong>Phone : </strong>07849847738</p>
        <p><strong>Toll free : </strong>1800 180 6543</p>

        <p><strong>Toll free : </strong>1800 180 6539</p>
        <br></br>
        <br />
        <h1><strong>Our locations</strong>
        <br />
          
        </h1>
        <p><strong>Main head quarters : </strong>Andheri, Mumbai</p>
        <p><strong>Other offices : </strong>Bangalore, Pune, Delhi</p>



      </div>
      
<form className="form-container"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <h1 style={{fontSize:'32px', padding:'20px'}}>Any Query?</h1>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
      </div>
      
    </div>
    
  );
};

export default ContactForm;