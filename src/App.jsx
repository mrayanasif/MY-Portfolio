import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Marquee from "./components/Marquee/Marquee";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./styles.css";

function App() {
  return (
    <>
      <div className="site-shell">

        <Navbar />

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