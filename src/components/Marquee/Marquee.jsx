import { ArrowUpRight, Sparkles } from "lucide-react";
import "./Marquee.css";

const marqueeItems = [
"UI/UX DESIGN",
"REACT.JS",
"LANDING PAGES",
"FULL-STACK DEVELOPMENT",
"CUSTOM MOBILE APPS",
];

function Marquee() {
return ( <section className="marquee-section" aria-label="Areas of expertise"> <div className="marquee-top"> <span className="marquee-label"> <Sparkles size={15} />
WHAT I DO </span>

    <span className="marquee-caption">
      Turning ideas into digital experiences
    </span>
  </div>

  <div className="marquee-track-wrapper">
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <div
          className="marquee-group"
          key={copy}
          aria-hidden={copy === 1 ? "true" : undefined}
        >
          {marqueeItems.map((item, index) => (
            <span
              className="marquee-item"
              key={`${copy}-${item}`}
            >
              <span className="marquee-text">{item}</span>

              <span className="marquee-icon">
                {index % 2 === 0 ? (
                  <Sparkles size={22} />
                ) : (
                  <ArrowUpRight size={22} />
                )}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

);
}

export default Marquee;
