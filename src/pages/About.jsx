import { asset } from "../asset.js";

const hobbies = [
  { name: "Design", color: "#e6d8ed" },
  { name: "Draw", color: "#fee4db" },
  { name: "Dance", color: "#e2ebf3" },
  { name: "Bake", color: "#e5ead4" },
  { name: "Chocoholic", color: "#fce4c4" },
  { name: "Clay-ing", color: "#e9dbeb" },
  { name: "Photoholic", color: "#e2ebf3" },
  { name: "Wanderer", color: "#fee2d0" },
];

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-left">
        <span className="chip">More about Me</span>
        <h1>
          What make me,
          <br />
          <span className="script pink huge">Me</span>
        </h1>
        <div className="about-art-wrap">
          <img className="about-art" src={asset("about-character.png")} alt="Illustrated portrait of Drishti" />
        </div>
      </div>
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
              <span className="hobby-icon" />
              <span>{hobby.name}</span>
            </div>
          ))}
        </div>
        <img className="tools-row about-tools" src={asset("tools.png")} alt="Photoshop, Illustrator, Figma, and Framer" />
      </div>
    </div>
  );
}
