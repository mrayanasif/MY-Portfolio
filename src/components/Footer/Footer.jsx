import { ArrowUpRight, ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
const currentYear = new Date().getFullYear();

return ( <footer className="portfolio-footer"> <div className="footer-main section-wrap">

    <a href="#home" className="footer-brand">
      <span className="footer-brand-mark">RA</span>

      <span className="footer-brand-text">
        MUHAMMAD RAYAN ASIF
        <small>Software Developer</small>
      </span>
    </a>

    <nav
      className="footer-navigation"
      aria-label="Footer navigation"
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    
  </div>

  <div className="footer-bottom section-wrap">
    
   

    <a href="#contact" className="footer-contact-link">
      Let's connect
      <ArrowUpRight size={14} />
    </a>
  </div>
</footer>

);
}

export default Footer;
