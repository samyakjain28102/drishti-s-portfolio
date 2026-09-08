import { asset } from "../asset.js";

const projects = [
  { title: "Thinkly", category: "Extension", image: "project-thinkly.png" },
  { title: "Senior Sakshi", category: "Branding", image: "project-senior-sakshi.png" },
  { title: "Magazines", category: "Publication Design", image: "project-magazines.png" },
  { title: "Marketing Assets", category: "Posts", image: "project-marketing-assets.png" },
];

const skills = [
  { name: "UI/UX", color: "#e6d8ed" },
  { name: "Brand Identity", color: "#fee4db" },
  { name: "Social Media", color: "#e2ebf3" },
  { name: "Publication", color: "#e5ead4" },
  { name: "Infographics", color: "#e6d8ed" },
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
            <span className="hero-title-text">Welcome to my little corner</span>
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
            <p className="script note-text">
              Let’s create something<br />beautiful together!
            </p>
          </div>
        </div>
        <div className="hero-art">
          <img className="hero-scene" src={asset("hero-desk.png")} alt="" />
          <img className="hero-character" src={asset("hero-character.png")} alt="Illustration of Drishti" />
        </div>
      </section>

      <section className="stats" aria-label="Highlights">
        <div className="stat">
          <div className="stat-top">
            <img className="stat-icon" src={asset("stat-palette.png")} alt="" />
            <strong>4+</strong>
          </div>
          <p>
            Design Disciplines
            <br />
            Explored
          </p>
        </div>
        <div className="stat">
          <div className="stat-top">
            <img className="stat-icon" src={asset("stat-folder.png")} alt="" />
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
            <img className="stat-icon" src={asset("stat-chat.png")} alt="" />
            <strong>5+</strong>
          </div>
          <p>
            Happy
            <br />
            Clients
          </p>
        </div>
        <div className="stat stat-wide">
          <p>a collection of things I've designed, explored and learned along the way.</p>
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
              <div className="project-thumb">
                <img src={asset(project.image)} alt="" />
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <img src={asset("arrow-card.svg")} alt="" width="36" height="36" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="skills" aria-label="Design disciplines">
        {skills.map((skill) => (
          <span className="skill-pill" style={{ background: skill.color }} key={skill.name}>
            {skill.name}
          </span>
        ))}
      </section>

      <section className="home-footer">
        <div className="polaroid-stack" aria-hidden="true">
          <img className="polaroid-shot shot-a" src={asset("polaroid-home-1.png")} alt="" />
          <img className="polaroid-shot shot-b" src={asset("polaroid-home-4.png")} alt="" />
          <img className="polaroid-shot shot-c" src={asset("polaroid-home-2.png")} alt="" />
          <img className="polaroid-shot shot-d" src={asset("polaroid-home-3.png")} alt="" />
        </div>
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
        </div>
        <img className="tools-row" src={asset("tools.png")} alt="InDesign, Premiere, Photoshop, Illustrator, Figma, and Framer" />
      </section>

      <section className="companies">
        <img
          className="company-bar"
          src={asset("companies.png")}
          alt="Darkrelay, Fox Clues, Outstory India, The Sweep, Winkget"
        />
        <p className="past-label">Past Associations</p>
      </section>
    </div>
  );
}
