import { BrowserRouter as Router } from 'react-router-dom';
import { useRef } from 'react';
import profile from './images/Kent.jpg';
import './App.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function Landing({ onViewWork }) {
  return (
    <section className="landing">
      <img src={profile} className="landing-profile" alt="Kent Villahermosa" />
      <h1>Hi, I’m <span>Kent Ezekiel R. Villahermosa</span></h1>
      <p className="tagline">
        I build responsive and user-friendly web apps.
      </p>
      <div className="landing-buttons">
        <button className="btn btn-outline" onClick={onViewWork}>View My Work</button>
      </div>
      <div className="scroll-down-text">
        <span>↓ Scroll down for more info</span>
      </div>
    </section>
  );
}

function App() {
  const projectsRef = useRef(null);
  const aboutsRef = useRef(null);
  const contactRef = useRef(null);

  const handleViewWork = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">

        {/* Landing Page Section */}
        <Landing onViewWork={handleViewWork} />
        
        {/* Projects Section */}
        <section id="projects" ref={projectsRef}>
          <Projects />
          {/* About Section */}
        <section id="about" ref={aboutsRef}>
          <About />
        </section>
        </section>
        {/* Contact Section */}
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;