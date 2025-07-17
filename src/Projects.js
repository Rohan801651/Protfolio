import React from 'react';

function Projects() {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>A modern, responsive personal website to showcase my projects and skills. Built with React and custom CSS. <a href="#" target="_blank" rel="noopener noreferrer">View Code</a></p>
      </div>
      <div className="project-card">
        <h3>Task Manager App</h3>
        <p>Full-stack productivity app with user authentication, task tracking, and RESTful API. Built using MERN stack. <a href="#" target="_blank" rel="noopener noreferrer">View Code</a></p>
      </div>
      <div className="project-card">
        <h3>Weather Dashboard</h3>
        <p>React app that fetches real-time weather data using OpenWeatherMap API. Features search, favorites, and responsive design. <a href="#" target="_blank" rel="noopener noreferrer">View Code</a></p>
      </div>
    </div>
  );
}

export default Projects;