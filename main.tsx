import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail, Download, ExternalLink, ArrowUpRight } from "lucide-react";
import "./styles.css";

const githubProfile = "https://github.com/kishanraj0919-9";
const linkedin = "https://www.linkedin.com/in/kishanraj58";

const projects = [
  {
    title: "Intelligent Loan Approval System",
    description:
      "An end-to-end loan prediction application built with a machine-learning pipeline and a web interface. I worked with 50K+ records, compared multiple models, and used XGBoost for the final model.",
    technologies: ["Python", "XGBoost", "Scikit-learn", "FastAPI", "React", "Docker", "AWS"],
    github: "https://github.com/prakash-afk/Loan-Prediction-Model",
    demo: "https://loan-prediction-model-sigma.vercel.app/",
  },
  {
    title: "Plant Disease Detection",
    description:
      "A CNN-based image classification project that identifies plant diseases from leaf images. The project includes a Streamlit interface where a user can upload an image and view the prediction.",
    technologies: ["Python", "TensorFlow/Keras", "CNN", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/prakash-afk/Plant_Disease_Detection",
  },
  {
    title: "Automated Face-Swapping Pipeline",
    description:
      "A deep-learning internship project developed at IIT Patna. It explores multi-person and multi-angle identity transfer by combining pretrained computer-vision models.",
    technologies: ["Python", "PyTorch", "OpenCV", "MTCNN", "FaceNet", "Google Colab"],
  },
];

const skillGroups = [
  { title: "Programming", skills: ["Python", "C++", "SQL"] },
  { title: "AI & Machine Learning", skills: ["Scikit-learn", "XGBoost", "TensorFlow/Keras", "PyTorch", "NLP", "RAG", "LangChain", "Time-series forecasting"] },
  { title: "Development", skills: ["FastAPI", "REST APIs", "React", "Streamlit"] },
  { title: "Cloud & Tools", skills: ["AWS EC2", "S3", "IAM", "CloudWatch", "Docker", "Git", "GitHub Actions", "CI/CD"] },
  { title: "Data", skills: ["Pandas", "NumPy", "MySQL", "Matplotlib"] },
];

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="wordmark" href="#home">Kishan Raj</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-small" href="/resume.pdf" download>Resume <Download size={14} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science Student · AI & ML</p>
            <h1>Hi, I'm <span>Kishan Raj.</span></h1>
            <h2>I'm learning, building and improving through real projects.</h2>
            <p className="intro">
              I'm a B.Tech Computer Science student interested in machine learning,
              deep learning and software development. I enjoy turning what I learn
              into projects that people can actually use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">See my projects <ArrowUpRight size={16} /></a>
              <a className="button button-outline" href="/resume.pdf" download>Download resume <Download size={16} /></a>
            </div>
            <div className="social-links">
              <a href={githubProfile} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:kishanraj66437@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </div>
          <aside className="student-note">
            <div className="initials">KR</div>
            <p className="note-title">A little about me</p>
            <p>Currently pursuing B.Tech in Computer Science & Engineering (AI & ML).</p>
            <div className="note-line"><span>Based in</span><strong>India</strong></div>
            <div className="note-line"><span>Graduation</span><strong>2027</strong></div>
            <div className="note-line"><span>Interested in</span><strong>AI/ML · Software</strong></div>
          </aside>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / About</p>
            <h2>A bit about me</h2>
          </div>
          <div className="about-content">
<p>
  I'm a Computer Science student specializing in Artificial
  Intelligence and Machine Learning at Sikkim Manipal
  Institute of Technology.
</p>

<p>
  I enjoy learning how things work, experimenting with
  different technologies, and building projects that solve
  practical problems. Through my internships and projects,
  I've explored electricity-demand forecasting, computer
  vision, and machine-learning applications. I'm still
  learning, improving my skills, and looking forward to
  working on real-world problems.
</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="education">
          <div className="section-heading">
            <p className="eyebrow">02 / Education</p>
            <h2>Education</h2>
          </div>
          <article className="simple-card education-card">
            <div>
              <h3>B.Tech — Computer Science & Engineering (AI & ML)</h3>
              <p>Sikkim Manipal Institute of Technology</p>
              <p className="subtle">Relevant coursework: Machine Learning, Deep Learning, DBMS, Operating Systems, Data Structures & Algorithms, Computer Networks</p>
            </div>
            <div className="education-meta"><strong>2023 – 2027</strong><span>CGPA: 7.2 / 10</span></div>
          </article>
        </section>

        <section className="content-section section-wrap" id="experience">
          <div className="section-heading">
            <p className="eyebrow">03 / Experience</p>
            <h2>Internship experience</h2>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-duration">2-month internship</div>
              <div>
                <h3>AI/ML Intern <span>— Bihar State Power Transmission Company Limited (BSPTCL)</span></h3>
                <ul>
                  <li>Worked with weather and electricity-consumption data for electricity-demand forecasting.</li>
                  <li>Restructured consumption data into 15-minute intervals for short-term prediction work.</li>
                  <li>Applied data preprocessing and feature engineering to combine different data sources.</li>
                </ul>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-duration">2-month internship</div>
              <div>
                <h3>Deep Learning Intern <span>— IIT Patna</span></h3>
                <ul>
                  <li>Worked on an automated face-swapping pipeline supporting multiple people and viewing angles.</li>
                  <li>Used pretrained models including MTCNN, FaceNet, InfoSwap and Ghost-SberSwap with PyTorch and OpenCV.</li>
                  <li>Tested GPU-accelerated model workflows using Google Colab.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading">
            <p className="eyebrow">04 / Projects</p>
            <h2>Some things I've worked on</h2>
            <p className="section-description">A few projects from my learning and internship experience.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live project <ExternalLink size={14} /></a>}
                  {!project.github && !project.demo && <span className="subtle">Internship project</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <p className="eyebrow">05 / Skills</p>
            <h2>Tools and technologies</h2>
          </div>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">06 / Contact</p>
          <h2>Thanks for visiting!</h2>
          <p>If you'd like to discuss a project, internship opportunity or just connect, feel free to reach out.</p>
          <a className="email-link" href="mailto:kishanraj66437@gmail.com">kishanraj66437@gmail.com <ArrowUpRight size={17} /></a>
          <div className="contact-social">
            <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={githubProfile} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© {new Date().getFullYear()} Kishan Raj</span>
        <span>Made with React and a lot of learning.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
