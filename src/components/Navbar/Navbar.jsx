import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {/* Logo */}
      <a
        href="#home"
        className="brand"
        aria-label="Rayan home"
        onClick={closeMenu}
      >
        <span className="brand-mark">RA.</span>

        <span>
          MUHAMMAD RAYAN ASIF
        </span>
      </a>

      {/* Navigation */}
      <nav
        className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={closeMenu}>
            {link.name}
          </a>
        ))}

        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let's Connect
          <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Navbar;
