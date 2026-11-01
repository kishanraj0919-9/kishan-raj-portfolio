import React from "react";
import {createRoot} from "react-dom/client";
import {ArrowUpRight, Github, Linkedin, Mail, Download, BrainCircuit, Cloud, Database, Code2, ExternalLink} from "lucide-react";
import "./styles.css";

const github="https://github.com/prakash-afk";
const linkedin="https://www.linkedin.com/in/kishanraj58";
const projects=[
 {num:"01",tag:"FULL-STACK ML",title:"Intelligent Loan Approval System",desc:"End-to-end loan approval prediction platform using 50K+ records, model comparison, engineered risk features, FastAPI inference and a React dashboard.",stack:["Python","XGBoost","Scikit-learn","FastAPI","React","Docker","AWS"],repo:"https://github.com/prakash-afk/Loan-Prediction-Model",demo:"https://loan-prediction-model-sigma.vercel.app/"},
 {num:"02",tag:"COMPUTER VISION",title:"Plant Disease Detection",desc:"Deep-learning image classification system using MobileNetV2 transfer learning, FastAPI prediction APIs and a Streamlit interface with confidence and top predictions.",stack:["TensorFlow/Keras","MobileNetV2","FastAPI","Streamlit","Python"],repo:"https://github.com/prakash-afk/Plant_Disease_Detection",demo:"#"},
 {num:"03",tag:"DEEP LEARNING",title:"Automated Face-Swapping Pipeline",desc:"Research project for multi-person, multi-angle identity transfer using pretrained computer-vision models and GPU-accelerated inference.",stack:["PyTorch","OpenCV","MTCNN","FaceNet","Google Colab"],repo:"#",demo:"#"}
];
const skills=[
 ["Languages","Python · C++ · SQL"],["AI / ML","Scikit-learn · XGBoost · PyTorch · TensorFlow/Keras"],["GenAI","LLMs · NLP · RAG · LangChain · AI Automation"],["Backend","FastAPI · REST APIs · Uvicorn"],["Frontend","React · Vite · Tailwind CSS"],["Cloud & DevOps","AWS EC2 · S3 · IAM · CloudWatch · Docker · GitHub Actions"],["Data","Pandas · NumPy · MySQL"],["Testing","Pytest · Selenium · CI/CD"]
];

function App(){
 return <div className="site">
  <header className="nav"><a className="logo" href="#home">KR<span>.</span></a><nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><a className="navBtn" href="#contact">Let's talk <ArrowUpRight size={15}/></a></header>
  <main>
   <section id="home" className="hero">
    <div className="heroText"><p className="eyebrow"><i/> AI / ML · SOFTWARE · DATA</p><h1>Engineering<br/><em>intelligent systems.</em></h1><p className="lead">I'm <strong>Kishan Raj</strong>, a B.Tech Computer Science (AI & ML) student building practical machine-learning, GenAI and full-stack applications.</p><div className="actions"><a className="primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a><a className="secondary" href="/resume.pdf" download>Download resume <Download size={16}/></a></div><div className="social"><a href={github} target="_blank"><Github/></a><a href={linkedin} target="_blank"><Linkedin/></a><a href="mailto:kishanraj66437@gmail.com"><Mail/></a></div></div>
    <div className="heroVisual"><div className="halo"/><div className="grid"/><div className="terminal"><div className="dots"><b/><b/><b/></div><pre>{`$ python train.py
> loading dataset... 50,000 rows
> feature engineering...
> cross-validation complete
> best model: XGBoost

$ deploy --production
✓ FastAPI online
✓ React dashboard
✓ CI pipeline passing`}</pre></div><div className="badge b1"><BrainCircuit/> <span>AI / ML</span></div><div className="badge b2"><Cloud/> <span>AWS</span></div></div>
   </section>

   <section id="about" className="section split"><div><p className="eyebrow">01 / About</p><h2>From data to<br/><em>working software.</em></h2></div><div className="copy"><p>I’m a Computer Science undergraduate specializing in AI & ML at Sikkim Manipal Institute of Technology, graduating in 2027.</p><p>My focus is practical engineering: preparing real-world data, training and evaluating models, exposing predictions through APIs, and turning them into usable interfaces.</p><div className="stats"><div><strong>7.2</strong><span>CGPA / 10</span></div><div><strong>2027</strong><span>Graduation</span></div><div><strong>2</strong><span>Internships</span></div></div></div></section>

   <section id="experience" className="section"><div className="sectionHead"><div><p className="eyebrow">02 / Experience</p><h2>Real projects.<br/><em>Real data.</em></h2></div></div>
    <div className="timeline">
     <article><div className="date">2 MONTHS</div><div><h3>AI/ML Intern <span>· BSPTCL</span></h3><p className="muted">Bihar State Power Transmission Company Limited</p><ul><li>Merged real-world weather and electricity-consumption data for demand forecasting.</li><li>Restructured consumption at 15-minute intervals for short-term prediction.</li><li>Applied preprocessing and feature engineering across heterogeneous data sources.</li></ul></div></article>
     <article><div className="date">2 MONTHS</div><div><h3>Deep Learning Intern <span>· IIT Patna</span></h3><p className="muted">Research / Computer Vision</p><ul><li>Engineered a multi-person, multi-angle face-swapping pipeline.</li><li>Integrated MTCNN, FaceNet, InfoSwap and Ghost-SberSwap with PyTorch/OpenCV.</li><li>Validated GPU-accelerated inference workflows in Google Colab.</li></ul></div></article>
    </div>
   </section>

   <section id="projects" className="section"><div className="sectionHead"><div><p className="eyebrow">03 / Selected work</p><h2>Things I've <em>built.</em></h2></div><p className="note">ML systems, computer vision and cloud-ready full-stack applications.</p></div>
    <div className="projects">{projects.map((p,i)=><article className="project" key={p.title}><div className={"visual v"+i}><span>{p.num}</span><div>{i===0?<Database size={46}/>:i===1?<BrainCircuit size={46}/>:<Code2 size={46}/>}</div></div><div className="pbody"><p className="tag">{p.tag}</p><h3>{p.title}</h3><p className="desc">{p.desc}</p><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="links">{p.repo!=="#"&&<a href={p.repo} target="_blank">GitHub <Github size={14}/></a>}{p.demo!=="#"&&<a href={p.demo} target="_blank">Live demo <ExternalLink size={14}/></a>}</div></div></article>)}</div>
   </section>

   <section id="skills" className="section split"><div><p className="eyebrow">04 / Toolkit</p><h2>A practical<br/><em>engineering stack.</em></h2><p className="note">Built around machine learning, APIs, cloud deployment and data.</p></div><div className="skillList">{skills.map(([a,b])=><div className="skill" key={a}><span>{a}</span><strong>{b}</strong></div>)}</div></section>

   <section id="contact" className="contact section"><p className="eyebrow">05 / Contact</p><h2>Let's build something<br/><em>useful.</em></h2><p>Open to internships, entry-level roles and engineering collaborations.</p><a className="email" href="mailto:kishanraj66437@gmail.com">kishanraj66437@gmail.com <ArrowUpRight size={20}/></a><div className="contactLinks"><a href={linkedin} target="_blank">LinkedIn <ArrowUpRight size={14}/></a><a href={github} target="_blank">GitHub <ArrowUpRight size={14}/></a></div></section>
  </main>
  <footer><span>© {new Date().getFullYear()} Kishan Raj</span><span>React · TypeScript · Vite</span></footer>
 </div>
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);