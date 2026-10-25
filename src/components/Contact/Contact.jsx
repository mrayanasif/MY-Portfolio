import { motion } from "framer-motion";

import {
ArrowUpRight,
Github,
Linkedin,
Mail,
} from "lucide-react";

import "./Contact.css";

function Contact() {
return ( <section className="contact-section" id="contact"> <div className="contact-background" />

  <motion.div
    className="contact-container"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
  >
    <div className="contact-hero">
      <div className="contact-eyebrow">
        <span />
        YOUR NEXT PROJECT STARTS HERE
        <span />
      </div>

      <h2>
        Let's Create <span>Together.</span>
      </h2>

      <p className="contact-description">
        Have an idea, a project, or an opportunity?
        Let's connect and build something meaningful together.
      </p>

      <div className="contact-actions">
        <a
          href="mailto:m.rayanasif2004@gmail.com"
          className="contact-primary-btn"
        >
          Get in touch
          <ArrowUpRight size={19} />
        </a>

        <a href="#projects" className="contact-secondary-btn">
          Explore projects
        </a>
      </div>
    </div>

    <div className="contact-footer-links">
      <div className="contact-legal-links">
        <a href="#home">Back to top ↑</a>
        <a href="#about">About me</a>
      </div>

      <div className="contact-navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

    <div className="contact-bottom">
      

      <div className="contact-social-links">
        <a
          href="https://github.com/mrayanasif"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={19} />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-rayan-asif-492195188"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={19} />
        </a>

        <a
          href="mailto:m.rayanasif2004@gmail.com"
          aria-label="Email"
        >
          <Mail size={19} />
        </a>
      </div>
    </div>
  </motion.div>
</section>

);
}

export default Contact;
