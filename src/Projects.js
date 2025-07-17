import React from 'react';

function Projects() {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>A modern, responsive personal website to showcase my projects and skills. Built with React and custom CSS. <a href="https://github.com/Rohan801651/Protfolio.git" target="_blank" rel="noopener noreferrer">View Code</a></p>
      </div>

      <div className="project-card">
        <h3>Convo-Craft AI</h3>
        <p>Developed a web application that acts as your personal AI English Tutor. It provides a simple and engaging chat interface where users can practice their English conversation skills with a helpful AI. 
        <a href="https://github.com/Rohan801651/ProjectAI.git" target="_blank" rel="noopener noreferrer">View Code</a></p>
      </div>
      
    </div>
  );
}

export default Projects;