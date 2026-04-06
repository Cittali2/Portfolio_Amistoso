import "./App.css";
import { useEffect } from "react";
import Typed from "typed.js";

import profile from "./assets/profilenbg.png";
import profiledos from "./assets/profiledos.png";
import tradetime from "./assets/tradetime.png";
import playlist from "./assets/playlist.png";
import yogasuit from "./assets/yogasuit.png";
import ballpen from "./assets/ballpen.png";

function App() {
  useEffect(() => {
    const typed = new Typed(".multiple", {
      strings: ["Front-End Developer", "Web Designer", "IT Student"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <a href="#home">
              <span>Personal</span> Portfolio
            </a>
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="container">
          <div className="home-info">
            <div className="left">
              <h3>Hello, I'm</h3>
              <h1>Niña Amistoso</h1>
              <h4>
                And I'm a <span className="multiple"></span>
              </h4>

              <p>
                Currently pursuing a Bachelor of Science in Information Technology at Western Institute of Technology, with a strong interest in exploring new technologies and building practical, tech-driven projects.
              </p>

              <div className="social">
                <a href="https://www.instagram.com/nins.svg" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/nina-amistoso" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a href="https://twitter.com/ninyamistoso" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>

                <a href="https://www.facebook.com/misnins" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>

              <button
                className="btn"
                onClick={() => window.open("/cv.pdf")}
              >
                Download CV
              </button>
            </div>

            <div className="right">
              <div className="profile">
                <img src={profile} alt="profile" />
              </div>
              <span className="floating-dot"></span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
  <div className="container">
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-image-frame">
          <img src={profiledos} alt="about" />
        </div>
      </div>

      <div className="about-right">
        <div className="about-tag">About Me</div>
        <h2>
          About <span>Me</span>
        </h2>
        <h3>Front-End Developer</h3>
        <p>
          I am a Front-End Developer who enjoys creating clean, responsive, and user-friendly websites. I use HTML, CSS, and JavaScript to turn ideas into functional and visually appealing designs. I focus on improving user experience and continuously learning new tools to enhance my skills.
        </p>

        <div className="about-highlights">
          <span>Responsive Design</span>
          <span>UI-Focused</span>
          <span>Creative Layouts</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="services" className="services">
        <div className="container">
          <h2>
            <span>Services</span>
          </h2>

          <div className="service-box">
            <div className="box">
              <i className="fa-solid fa-code"></i>
              <h3>Web Development</h3>
              <p>Building fast, reliable, and responsive interfaces using HTML, CSS, and JavaScript.</p>
            </div>

            <div className="box">
              <i className="fa-solid fa-pen-fancy"></i>
              <h3>UX/UI</h3>
              <p>Creating clear and concise UI content that improves usability and guides users smoothly.</p>
            </div>

            <div className="box">
              <i className="fa-solid fa-palette"></i>
              <h3>Web Design</h3>
              <p>Designing visually engaging layouts that balance creativity and usability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>
            Latest <span>Project</span>
          </h2>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img src={tradetime} />

              <div className="portfolio-content">
                <h4>TRADETIME</h4>
                <p>Trading app interface design.</p>
                <span>View Project</span>
              </div>
            </div>

            <div className="portfolio-box">
              <img src={playlist} alt="Playlist Design" />
              <div className="portfolio-content">
                <h4>Playlist</h4>
                <p>Music playlist interface design.</p>
                <span>View Project</span>
              </div>
            </div>

            <div className="portfolio-box">
              <img src={ballpen} alt="Ballpen Ad" />
              <div className="portfolio-content">
                <h4>Ballpen Ad</h4>
                <p>Stationery product advertisement design.</p>
                <span>View Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>
            Contact <span>Me</span>
          </h2>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;