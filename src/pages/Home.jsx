import { asset } from "../asset.js";

const projects = [
  { title: "Marketing Assets", category: "Posts" },
  { title: "Senior Sakshi", category: "Branding" },
  { title: "Magazines", category: "Publication Design" },
  { title: "Thinkly", category: "Extension" },
  { title: "Aaurix Turf", category: "Website" },
];

const skills = [
  { name: "UI/UX", color: "#e6d8ed" },
  { name: "Infographic", color: "#e9dbeb" },
  { name: "Brand Identity", color: "#fee4db" },
  { name: "Social Media", color: "#e2ebf3" },
  { name: "Publication", color: "#e5ead4" },
  { name: "Visual", color: "#fce4c4" },
  { name: "Illustration", color: "#fee2d0" },
];

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <span className="chip">I am a Designer</span>
          <h1 className="hero-title">
            You found Me!
            <br />
            Hi, I’m <span className="script pink">Drishti</span>
            <br />
            Welcome to my little corner
          </h1>
          <div className="hero-actions">
            <a className="btn btn-pink" href="#/work">
              Explore my Work
            </a>
            <a className="btn btn-cream" href="#/about">
              My Resume
            </a>
          </div>
          <div className="hero-note">
            <img src={asset("arrow-hand.svg")} alt="" className="hand-arrow" />
            <p className="script note-text">Let’s create something beautiful together!</p>
          </div>
        </div>
        <div className="hero-art">
          <img src={asset("hero.png")} alt="Illustration of Drishti at her desk" />
        </div>
      </section>

      <section className="stats" aria-label="Highlights">
        <div className="stat">
          <div className="stat-top">
            <span className="stat-square" />
            <strong>4+</strong>
          </div>
          <p>Design Disciplines Explored</p>
        </div>
        <div className="stat">
          <div className="stat-top">
            <span className="stat-square" />
            <strong>7+</strong>
          </div>
          <p>
            Completed
            <br />
            Projects
          </p>
        </div>
        <div className="stat">
          <div className="stat-top">
            <span className="stat-square" />
            <strong>5+</strong>
          </div>
          <p>
            Happy
            <br />
            Clients
          </p>
        </div>
        <div className="stat stat-wide">
          <p>a collection of things I’ve designed, explored and learned along the way.</p>
          <img src={asset("swatch.svg")} alt="" className="swatch" />
        </div>
      </section>

      <section className="featured">
        <div className="section-head">
          <h2>Featured Projects</h2>
          <a className="btn btn-cream btn-small" href="#/work">
            View All
          </a>
        </div>
        <div className="project-row">
          {projects.map((project) => (
            <a className="project-card" href="#/work" key={project.title}>
              <div className="project-thumb" />
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <img src={asset("arrow-card.svg")} alt="" width="29" height="29" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="companies">
        <h2>Companies I’ve worked with</h2>
        <img className="company-bar" src={asset("companies.png")} alt="Darkrelay, Fox Clues, Outstory India, The Sweep, Winkget" />
      </section>

      <section className="skills" aria-label="Design disciplines">
        {skills.map((skill) => (
          <span className="skill-pill" style={{ background: skill.color }} key={skill.name}>
            {skill.name}
          </span>
        ))}
      </section>

      <section className="home-footer">
        <img className="desk-art" src={asset("footer-desk.png")} alt="" />
        <div className="home-footer-copy">
          <p>
            When I’m not designing, you’ll probably find me dancing, baking, cooking, exploring, or noticing something I’ll eventually turn into an idea.
          </p>
          <a className="btn btn-lilac" href="#/about">
            Know More
          </a>
        </div>
        <div className="hmm-wrap">
          <img src={asset("badge-hmm.png")} alt="" />
          <span className="script hmm-label">turning “hmm…” into “oh”</span>
        </div>
        <img className="tools-row" src={asset("tools.png")} alt="Photoshop, Illustrator, Figma, and Framer" />
      </section>
    </div>
  );
}
