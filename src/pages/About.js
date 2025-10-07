import './About.css';

function About() {
return ( <div className="about-container"> 
<div className="about-content"> 

    <div className="about-text">
      <h1>About Me</h1>
      <p>
        Hi, I’m <strong>Kent Ezekiel R. Villahermosa</strong>, a dedicated web developer who enjoys building clean,
        responsive, and goal-driven applications. I focus on crafting smooth user experiences and reliable backend
        systems that help clients bring their ideas to life.
      </p>

      <p>
  My main tools include <strong>React </strong> 
   for building dynamic and responsive user interfaces, and <strong>Firebase </strong>
   for handling authentication, real-time databases, and Cloudinary for cloud storage. I focus on developing web apps that are scalable, efficient, and user-friendly — ensuring a smooth experience from design to deployment.
</p>

      <h2>Skills & Tools</h2>
      <ul>
        <li>Frontend: React.js, HTML, CSS, JavaScript</li>
        <li>Backend: Node.js</li>
        <li>Database: Firebase Firestore</li>
        <li>Tools: GitHub, VS Code</li>
      </ul>

      <p className="about-footer">
        I’m passionate about learning new technologies and continuously improving my craft. Every project I take on
        is a chance to grow, collaborate, and deliver meaningful digital experiences.
      </p>
    </div>
  </div>
</div>

);
}

export default About;
