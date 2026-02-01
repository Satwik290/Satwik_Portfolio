import React, { useEffect, useRef, useState } from "react";
import { 
  SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiHtml5, SiCss3,
  SiReact, SiVite, SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiExpress, SiSocketdotio, SiPrisma, SiJsonwebtokens,
  SiMongodb, SiRedis, SiDocker, SiTurborepo, SiGit, SiPostman, SiStripe, SiCloudinary,
  SiGithub, SiLinkedin, SiLeetcode, SiGeeksforgeeks
} from "react-icons/si";
import { 
  FaCode, 
  FaDatabase, 
  FaTools, 
  FaPalette,
  FaMapMarkerAlt,
  FaTrophy,
  FaChartLine
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import "./App.css";

// Star field background component
const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }[] = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        speed: Math.random() * 0.8,
        opacity: Math.random(),
      });
    }

    let frame = 0;

    const animate = () => {
      frame++;
      ctx.fillStyle = "rgba(10, 10, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.opacity = Math.sin(frame * 0.01 + index) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (star.size > 1.5) {
          ctx.fillStyle = `rgba(99, 102, 241, ${star.opacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="star-field" />;
};

// Navigation
const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "achievements", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div className="logo">
          <span className="logo-bracket">{"<"}</span>
          Satwik
          <span className="logo-bracket">{"/>"}</span>
        </div>
        <div className="nav-links">
          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className={activeSection === "achievements" ? "active" : ""}
            onClick={() => scrollToSection("achievements")}
          >
            Achievements
          </button>
          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero
const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        ></div>
        <div
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        ></div>
        <div
          className="gradient-orb orb-3"
          style={{
            transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
          }}
        ></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Satwik Mohanty</span> 👋
          </h1>
          <p className="hero-subtitle">
            Full-Stack Software Engineer building scalable systems and efficient user experiences
          </p>
          <p className="hero-description">
            TypeScript • React • Node.js • Microservices • PostgreSQL
          </p>
          <div className="hero-buttons">
            <button
              className="cta-button primary"
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="cta-button secondary"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="laptop-container">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="screen-glow"></div>
                <div className="code-editor">
                  <div className="editor-header">
                    <div className="editor-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="editor-title">App.tsx</div>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-function">buildService</span> ={" "}
                      <span className="code-bracket">{"() => {"}</span>
                    </div>
                    <div className="code-line indent">
                      <span className="code-keyword">return</span>{" "}
                      <span className="code-bracket">{"{"}</span>
                    </div>
                    <div className="code-line indent-2">
                      <span className="code-attr">scalable</span>:{" "}
                      <span className="code-keyword">true</span>,
                    </div>
                    <div className="code-line indent-2">
                      <span className="code-attr">typeSafe</span>:{" "}
                      <span className="code-string">"100%"</span>,
                    </div>
                    <div className="code-line indent-2">
                      <span className="code-attr">performance</span>:{" "}
                      <span className="code-string">"optimized"</span>
                    </div>
                    <div className="code-line indent">
                      <span className="code-bracket">{"}"}</span>
                    </div>
                    <div className="code-line">
                      <span className="code-bracket">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About
const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-intro">
              I am a <strong>Full-stack Software Engineer</strong> dedicated to building resilient, scalable systems and intuitive digital experiences. Currently, I am honing my technical foundations while pursuing a B.Tech in Computer Science at <strong>DRIEMS University</strong>.
            </p>
            <p className="about-description">
              My core focus lies in <strong>Backend Architecture</strong> and distributed systems. I enjoy the challenge of optimizing database performance and orchestrating microservices. I believe in writing code that is not just functional, but clean, type-safe, and maintainable.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <FaCode className="highlight-icon" />
                <div>
                  <h4>Distributed Systems</h4>
                  <p>Designing scalable architectures using TypeScript and Node.js</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaChartLine className="highlight-icon" />
                <div>
                  <h4>Optimization Focus</h4>
                  <p>Proven track record in reducing latency and enhancing UX responsiveness</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaTrophy className="highlight-icon" />
                <div>
                  <h4>Problem Solver</h4>
                  <p>Active competitive programmer; LeetCode 1574 (Top 35% globally)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">350+</div>
              <div className="stat-label">DSA Challenges</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Full-Stack</div>
              <div className="stat-label">Project Ready</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2026</div>
              <div className="stat-label">B.Tech Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Skills
const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: <FaCode />,
      skills: [
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599c" },
        { name: "SQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
      ],
    },
    {
      name: "Frontend",
      icon: <FaPalette />,
      skills: [
        { name: "React.js", icon: <SiReact />, color: "#61dafb" },
        { name: "Vite", icon: <SiVite />, color: "#646cff" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
        { name: "Shadcn/UI", icon: <SiShadcnui />, color: "#000000" },
      ],
    },
    {
      name: "Backend",
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" },
        { name: "Prisma ORM", icon: <SiPrisma />, color: "#2d3748" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
      ],
    },
    {
      name: "Database & Tools",
      icon: <FaTools />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "Redis", icon: <SiRedis />, color: "#dc382d" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
        { name: "Turborepo", icon: <SiTurborepo />, color: "#ef4444" },
        { name: "Git", icon: <SiGit />, color: "#f05032" },
        { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
        { name: "Stripe API", icon: <SiStripe />, color: "#635bff" },
        { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448c5" },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="category-title">
                {category.icon}
                {category.name}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-mini-bar">
                      <div className="skill-progress" style={{ backgroundColor: skill.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects
const Projects: React.FC = () => {
  const projects = [
    {
      title: "DocLync Pro",
      tech: "TypeScript, React, Node.js, PostgreSQL, Redis, Prisma",
      description:
        "Microservices healthcare platform with real-time WebSocket chat, secure payment flows, and 100% type-safety across services.",
      features: ["Real-time Chat", "Microservices", "Type-Safe", "Scalable"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      achievements: [
        "Built real-time WebSocket chat with Socket.io and Redis Pub/Sub",
        "Engineered microservices monorepo with Turborepo",
        "Integrated Stripe API and Cloudinary for secure payments"
      ],
      links: {
        github: "https://codolio.com/profile/Satwik290",
      },
    },
    {
      title: "FinTrack",
      tech: "React, Node.js, Express, MongoDB, Chart.js",
      description:
        "Full-stack personal finance management system with real-time expense analytics and automated budget tracking.",
      features: ["Real-time Analytics", "14+ REST APIs", "Data Visualization", "Budget Tracking"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      achievements: [
        "Reduced query latency by 30% via MongoDB indexing",
        "Engineered 14+ modular REST endpoints",
        "Improved dashboard responsiveness by 40%"
      ],
      links: {
        github: "https://github.com/Satwik290/fintrack",
      },
    },
    {
      title: "Learnify",
      tech: "Node.js, Express, MongoDB, MVC Architecture",
      description:
        "Full-stack course platform with MVC architecture and role-based access control for seamless enrollment flows.",
      features: ["MVC Architecture", "RBAC", "12+ REST APIs", "Zod Validation"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      achievements: [
        "Built 12+ REST APIs for enrollment flows",
        "Reduced redundant permission checks by 50%",
        "Improved server response times by 25%"
      ],
      links: {
        github: "https://github.com/Satwik290/learnify",
      },
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-achievements">
                  <h4 className="achievements-title">Key Achievements</h4>
                  <ul className="achievements-list">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.links.github} 
                    className="project-link github" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <SiGithub />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Achievements
const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <SiLeetcode />,
      title: "LeetCode",
      stats: "Rating: 1574",
      description: "Top 35% globally",
      color: "#ffa116",
      link: "https://leetcode.com/u/Satwik290/",
    },
    {
      icon: <SiGeeksforgeeks />,
      title: "GeeksForGeeks",
      stats: "Rating: 1735",
      description: "Institute Rank: Top 8",
      color: "#2f8d46",
      link: "https://www.geeksforgeeks.org/user/satwik290/",
    },
    {
      icon: <FaCode />,
      title: "DSA Problems",
      stats: "350+ Solved",
      description: "LeetCode, GFG, Codeforces",
      color: "#ff3366",
      link: "https://codolio.com/profile/Satwik290",
    },
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Achievements & Coding Profiles</h2>
          <div className="section-line"></div>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <a
              key={achievement.title}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-stats">{achievement.stats}</div>
              <div className="achievement-description">{achievement.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-intro">
          <p>
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
        </div>
        
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                />
              </div>
              
              {submitStatus.type && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <MdSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info-cards">
            <a href="mailto:mohanty.satwik290@gmail.com" className="contact-card">
              <div className="contact-icon-wrapper">
                <MdEmail className="contact-icon" />
              </div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-text">mohanty.satwik290@gmail.com</div>
              </div>
            </a>
            
            <div className="contact-card location-card">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <div className="contact-info">
                <div className="contact-label">Location</div>
                <div className="contact-text">Cuttack, Odisha</div>
              </div>
            </div>
            
            <a
              href="https://www.linkedin.com/in/satwik-mohanty-94b262252/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <SiLinkedin className="contact-icon" />
              </div>
              <div className="contact-info">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-text">satwik-mohanty</div>
              </div>
            </a>
            
            <a
              href="https://github.com/Satwik290"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <SiGithub className="contact-icon" />
              </div>
              <div className="contact-info">
                <div className="contact-label">GitHub</div>
                <div className="contact-text">Satwik290</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">{"<"}</span>
            Satwik
            <span className="logo-bracket">{"/>"}</span>
          </div>
          <p className="footer-tagline">
            Building scalable systems, one line at a time
          </p>
        </div>
        <div className="footer-right">
          <button className="scroll-top" onClick={scrollToTop}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 15V5M10 5L5 10M10 5L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to top
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Satwik Mohanty. Built with React & TypeScript</p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="app">
      <StarField />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;