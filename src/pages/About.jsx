import { asset } from "../asset.js";

const hobbies = [
  { name: "Design", color: "#e6d8ed", icon: "hobby-icon-design.png" },
  { name: "Draw", color: "#fee4db", icon: "hobby-icon-draw.png" },
  { name: "Dance", color: "#e2ebf3", icon: "hobby-icon-dance.png" },
  { name: "Bake", color: "#e5ead4", icon: "hobby-icon-bake.png" },
  { name: "Chocoholic", color: "#fce4c4", icon: "hobby-icon-chocoholic.png" },
  { name: "Clay-ing", color: "#e9dbeb", icon: "hobby-icon-clay.png" },
  { name: "Photoholic", color: "#e2ebf3", icon: "hobby-icon-photo.png" },
  { name: "Wanderer", color: "#fee2d0", icon: "hobby-icon-wanderer.png" },
];

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-copy-left">
        <span className="chip">More about Me</span>
        <h1>
          What makes me,
          <br />
          <span className="script pink me-text">Me</span>
        </h1>
      </div>

      <img
        className="about-art"
        src={asset("about-character.png")}
        alt="Illustrated portrait of Drishti"
      />

      <div className="about-right">
        <p className="about-lead">
          Hi, I’m Drishti a design student, curious learner and someone who genuinely enjoys making things.
        </p>
        <div className="thats-me">
          <img src={asset("badge-thats-me.png")} alt="" />
          <span className="script">That’s me</span>
        </div>
        <div className="hobby-grid">
          {hobbies.map((hobby) => (
            <div className="hobby" style={{ background: hobby.color }} key={hobby.name}>
              <span className="hobby-icon">
                <img src={asset(hobby.icon)} alt="" />
              </span>
              <span>{hobby.name}</span>
            </div>
          ))}
        </div>
        <img
          className="about-tools-row"
          src={asset("tools-about.png")}
          alt="InDesign, Premiere, Photoshop, Illustrator, Figma, and Framer"
        />
      </div>
    </div>
  );
}
