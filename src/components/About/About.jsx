import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Download,
  MapPin,
  Mail,
  Phone,
  User,
} from "lucide-react";

import "./About.css";

const skills = [
  { name: "HTML & CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 65, category: "Frontend" },
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "React Native", level: 55, category: "Mobile Development" },
  { name: "Flutter", level: 50, category: "Mobile Development" },
  { name: "Tailwind CSS", level: 78, category: "Frontend" },
  { name: "Node.js & Express", level: 72, category: "Backend" },
  { name: "MongoDB", level: 65, category: "Database" },
  { name: ".NET", level: 60, category: "Backend" },
  { name: "SQL & SQL Server", level: 70, category: "Database" },
  { name: "Firebase", level: 65, category: "Database" },
  { name: "Git & GitHub", level: 70, category: "Tools" },
];

function About() {
  return (
    <section className="about-section section-wrap" id="about">
      {/* Section Heading */}

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="about-heading-left">
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            GET TO KNOW ME
          </span>

          <h2>
            More Than Code.
            <br />
            <span>A Mind That Builds.</span>
          </h2>
        </div>
      </motion.div>

      {/* About Content */}

      <div className="about-profile-grid">
        {/* Profile Card */}

        <motion.div
          className="about-profile-column"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-profile-card">
            <div className="about-profile-top">
              <span className="about-card-label">A LITTLE ABOUT ME</span>

              <span className="about-profile-number">01</span>
            </div>

            <div className="about-photo-frame">
              <img
                src="/assets/images/WhatsApp Image 2026-10-23 at 11.08.05 PM.jpeg"
                alt="Rayan, Software Engineering student"
                className="about-profile-image"
                onError={(event) => {
                  event.currentTarget.style.display = "none";

                  event.currentTarget.parentElement.classList.add(
                    "about-photo-placeholder",
                  );
                }}
              />

              <div className="about-photo-fallback">
                <Code2 size={42} />
                <span>Add your profile photo</span>
              </div>
            </div>

            <div className="about-profile-caption">
              <div>
                <h3>MUHAMMAD RAYAN</h3>

                <p>Software Engineering Student</p>
              </div>

              <div className="about-profile-badge">
                <Code2 size={18} />
              </div>
            </div>
            <div className="about-profile-contact">
              <a
                href="mailto:m.rayanasif2004@gmail.com"
                className="about-contact-item"
              >
                <span className="about-contact-icon">
                  <Mail size={16} />
                </span>

                <span className="about-contact-text">
                  <small>Email</small>
                  <span>m.rayanasif2004@gmail.com</span>
                </span>
              </a>

              <a href="hello" className="about-contact-item">
                <span className="about-contact-icon">
                  <User size={16} />
                </span>

                <span className="about-contact-text">
                  <small>Age</small>
                  <span>22</span>
                </span>
              </a>

              <a href="tel:+92 335 2112258" className="about-contact-item">
                <span className="about-contact-icon">
                  <Phone size={16} />
                </span>

                <span className="about-contact-text">
                  <small>Phone</small>
                  <span>+92 335 2112258</span>
                </span>
              </a>
            </div>

            <div className="about-location">
              <span className="about-location-dot" />
              <MapPin size={14} />
              Karachi, Pakistan
            </div>
          </div>
        </motion.div>

        {/* About Me */}

        <motion.div
          className="about-details-column"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <div className="about-story-card">
            <div className="about-story-top">
              <span className="about-card-label">BIO</span>

              <Code2 size={21} />
            </div>

            <h3>
              Learning today.
              <br />
              Building for tomorrow.
            </h3>

            <p>
              My primary focus is Full-Stack Web Development, specializing in
              the MERN Stack (MongoDB, Express.js, React.js, Node.js) and
              relational databases (SQL Server, MySQL, MongoDB, Firebase). I
              have hands-on experience building responsive user interfaces with
              HTML5, CSS3, JavaScript, Bootstrap, ReactJS, and Tailwind CSS, as
              well as developing mobile app solutions with Flutter, ReactNative
              and IoT embedded systems.
            </p>

            <p>
              Beyond core development, I hold certifications as a Google
              Certified Educator (Level 1 & Level 2), also in Digital Marketing
              I am also an award winner at Aptech Vision (Best Project) and
              Contest AZM (IoT Ignite).
            </p>

            <p>
              My goal is to keep learning, solve real-world problems through
              code, and secure an internship or developer position where I can
              apply my MERN Stack and software engineering skills to real-world
              projects. Alongside web development, I am actively learning
              Flutter and exploring mobile app development, continuously
              expanding my technical knowledge while growing under expert
              mentorship.
            </p>

            {/* Action Buttons */}

            <div className="about-actions">
              <a href="#projects" className="about-project-link">
                Explore my projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/assets/Rayan-CV.pdf"
                className="about-cv-link"
                download="Rayan-CV.pdf"
              >
                Download CV
                <Download size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}

      <motion.div
        className="about-skills-section"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
        id="skills"
      >
        <div className="skills-heading">
          <div>
            <span className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              MY TECH STACK
            </span>

            <h3>
              Skills That Bring
              <br />
              <span>ideas to life.</span>
            </h3>
          </div>

          <p>
            Technologies I use and continue to learn while building web
            applications, software projects, and mobile experiences.
          </p>
        </div>

        {/* Horizontal Skill Bars */}

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-item"
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: (index % 6) * 0.06,
              }}
            >
              <div className="skill-info">
                <div className="skill-title-group">
                  <span className="skill-name">{skill.name}</span>

                  <span className="skill-category">{skill.category}</span>
                </div>

                <span className="skill-percentage">{skill.level}%</span>
              </div>

              <div
                className="skill-progress-track"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  className={`skill-progress-fill skill-fill-${index % 4}`}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: (index % 6) * 0.06,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
