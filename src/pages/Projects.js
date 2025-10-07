import React from 'react';
import './Projects.css';
import campusClaimQR from '../images/campusclaim.png'; // Add your QR code image here
import figmaQR1 from '../images/E-commerce_figma.png'; // Add your Figma QR code image here

function Projects() {
  const projectList = [
    {
      title: 'CampusClaim',
      description: 'A school-specific Lost & Found web app built with React and Firebase. It enables verified users to report, find, and claim lost items securely.',
      tech: ['React', 'Firebase', 'Cloudinary', 'CSS'],
      link: 'https://campusclaim.web.app',
      qr: campusClaimQR // Add QR code property
    },
    {
      title: 'Mini E-Commerce Figma Design',
      description: 'A small online store design created using Figma, showcasing a clean and user-friendly interface for browsing and purchasing products.',
      tech: ['Figma', 'UI/UX'],
      figma: 'https://embed.figma.com/proto/trBQjVEyVFyBA7cXFWTe4j/Mini-E-Commerce?node-id=1-37&starting-point-node-id=1%3A37&embed-host=share', // <-- your Figma link here
      qr: figmaQR1 // Add QR code property
    },
    {
      title: 'Online Appointment Booking System Figma Design',
      description: 'A system where users can book appointments online, designed in Figma to provide an intuitive and efficient scheduling experience.',
      tech: ['Figma', 'UI/UX'],
      figma: 'https://embed.figma.com/proto/8ZF3BvnxDyvJjlVuiomoPI/Online-Appointment-Booking-System?node-id=1-37&starting-point-node-id=1%3A37&embed-host=share', // <-- your Figma link here
    }
  ];

  return (
    <section className="projects-page">
      <h1 className="projects-title">My Featured projects</h1>
      <p className="projects-subtitle">
        Here is my favorite project that showcase my skills in web development and figma.
      </p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            {/* Show QR code if available */}
            {project.qr && (
              <div className="project-qr">
                <img src={project.qr} alt={`${project.title} QR code`} style={{ width: 100, margin: '12px auto' }} />
                <div style={{ fontSize: '0.9rem', color: '#555' }}>Scan to open</div>
              </div>
            )}
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  Website
                </a>
              )}
              {project.figma && (
                <a href={project.figma} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View Figma
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;