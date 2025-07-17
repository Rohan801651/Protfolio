import React from 'react';

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact</h1>
      <div className="contact-details">
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        <p><strong>GitHub:</strong> <a href="#" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
      </div>
    </div>
  );
}

export default Contact;