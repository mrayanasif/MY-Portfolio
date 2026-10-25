import { motion } from "framer-motion";

import {
ArrowDownRight,
ArrowRight,
Github,
Linkedin,
Mail,
MapPin,
Code2,
Sparkles,
} from "lucide-react";

import "./Home.css";

const HERO_IMAGE = "/assets/images/Git5.jpg";

function Home() {
return ( <section className="hero section-wrap" id="home">
{/* Top Information */} <div className="hero-topline"> <span> <span className="status-dot" />
AVAILABLE FOR OPPORTUNITIES </span>


    
  </div>

  {/* Main Hero Layout */}
  <div className="hero-grid">
    {/* Left Content */}
    <div className="hero-copy">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        HELLO, I'M MUHAMMAD RAYAN
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        I Build Digital
        <br />
        <span className="italic-word">Experiences</span>
        <span className="heading-period">.</span>
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Iam a Software engineering student at Aptech and passionate
        about building modern web applications, creative user
        interfaces and useful digital products.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <a className="button button-dark" href="#projects">
          Explore My Work
          <ArrowDownRight size={17} />
        </a>

        <a className="text-link" href="#about">
          Want To Know More?
          <ArrowRight size={16} />
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="hero-socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.75 }}
      >
        <span>FOLLOW ALONG</span>

        <a
          href="https://github.com/mrayanasif"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={17} />
        </a>

        <a
          href="https://linkedin.com/in/muhammad-rayan-asif-492195188"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={17} />
        </a>

        <a href="mailto:m.rayanasif2004@gmail.com" aria-label="Email">
          <Mail size={17} />
        </a>
      </motion.div>
    </div>

    {/* Right Visual */}
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />

      {/* Organic Image Frame */}
      <div className="hero-image-frame">
        <img
          src={HERO_IMAGE}
          alt="Rayan working at his desk"
          fetchPriority="high"
          onError={(event) => {
            console.error(
              "Hero image could not be loaded:",
              event.currentTarget.src
            );
          }}
        />
      </div>

      {/* Floating Card */}
      <motion.div
        className="floating-note note-top"
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={16} />

        <span>
          Curiosity-led
          <br />
          development
        </span>
      </motion.div>

      <motion.div
        className="floating-note note-bottom"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="note-icon">
          <Code2 size={19} />
        </span>

        <span>
          <strong>Code with purpose</strong>
          <small>Design · Build · Improve</small>
        </span>
      </motion.div>

      {/* Decorative Sticker */}
      <div className="visual-sticker">
        CREATIVE
        <br />
        MINDSET
        <span>✳</span>
      </div>
    </motion.div>
  </div>

  
</section>

);
}

export default Home;
