import { asset } from "../asset.js";

const blurb =
  "These are the projects where I got to ask questions, make mistakes, change my mind and eventually arrive somewhere I was happy with.";

const feature = {
  title: "Thinkly",
  category: "Chrome Extension",
  copy: "Thinkly is a browser extension that helps users manage toxic or unwanted content online by filtering comments based on different levels of moderation and replacing harmful language with more positive alternatives.",
  image: "work-thinkly.png",
};

const cards = [
  {
    title: "Senior Sakhi",
    category: "Branding",
    copy: "Building a warm and trustworthy brand identity for a senior care service focused on companionship, support, and independent living.",
    image: "work-senior-sakhi.png",
  },
  {
    title: "Editorial Design",
    category: "Magazine layouts for Outstory India.",
    copy: "Designed editorial magazine layouts for Outstory India, focusing on typography, grid systems, image composition, and page layouts to build cohesive and engaging spreads.",
    image: "work-magazines.png",
  },
  {
    title: "Social Media Design",
    category: "Visuals designed to make brands stand out",
    copy: "Designed a range of social media assets, balancing visual impact, clear communication, and brand consistency across different formats.",
    image: "work-social.png",
  },
];

function ProjectCopy({ title, category, copy }) {
  return (
    <div className="work-copy">
      <h2>{title}</h2>
      <p className="work-category">{category}</p>
      <p>{copy}</p>
    </div>
  );
}

export default function Work() {
  return (
    <div className="page work-page">
      <header className="page-intro">
        <h1>
          Things I’ve build,
          <br />
          broken, rebuild and
          <br />
          <span className="script pink">loved</span>
        </h1>
        <p>{blurb}</p>
      </header>

      <article className="work-feature">
        <div className="work-media">
          <img src={asset(feature.image)} alt="" />
        </div>
        <ProjectCopy title={feature.title} category={feature.category} copy={feature.copy} />
      </article>

      <div className="work-grid">
        {cards.map((item) => (
          <article className="work-card" key={item.title}>
            <div className="work-media">
              <img src={asset(item.image)} alt="" />
            </div>
            <ProjectCopy title={item.title} category={item.category} copy={item.copy} />
          </article>
        ))}
      </div>
    </div>
  );
}
