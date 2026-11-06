import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Marquee from "./components/Marquee/Marquee";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./styles.css";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("rayan-portfolio-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("rayan-portfolio-theme", theme);
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }, [theme]);

  return (
    <>
      <div className="site-shell">

        <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")} />

        <main>
          <Home />
            <Marquee />
          <About/>
<Projects/>
<Contact/>
        <Footer/>
        </main>

      </div>

      <a
        className="back-top"
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}

export default App;
