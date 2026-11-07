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
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false);
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

  useEffect(() => {
    const minimumTime = 850;
    const startedAt = performance.now();
    let finished = false;
    let fadeTimer;
    let fallbackTimer;
    let readyTimer;

    const dismissLoader = () => {
      if (finished) return;
      finished = true;
      setIsLoaderLeaving(true);
      fadeTimer = window.setTimeout(() => setIsLoading(false), 450);
      window.clearTimeout(fallbackTimer);
    };

    const onPageReady = () => {
      const remaining = Math.max(0, minimumTime - (performance.now() - startedAt));
      readyTimer = window.setTimeout(dismissLoader, remaining);
    };

    fallbackTimer = window.setTimeout(dismissLoader, 4500);

    if (document.readyState === "complete") {
      onPageReady();
    } else {
      window.addEventListener("load", onPageReady, { once: true });
    }

    return () => {
      window.removeEventListener("load", onPageReady);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(readyTimer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`boot-screen${isLoaderLeaving ? " boot-screen-leaving" : ""}`}
          role="status"
          aria-label="Rayan portfolio is loading"
        >
          <span className="boot-loader-word" aria-hidden="true" />
          <span className="boot-loader-caption" aria-hidden="true">PORTFOLIO</span>
        </div>
      )}
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
