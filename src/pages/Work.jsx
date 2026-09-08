const featured = {
  title: "Thinkly",
  category: "Extension",
  copy: "These are the projects where I got to ask questions, make mistakes, change my mind and eventually arrive somewhere I was happy with.",
};

const grid = [
  { title: "Senior Sakhi", category: "Branding", tone: "wine" },
  { title: "Thinkly", category: "Extension", tone: "wine" },
  { title: "Aaurix Turf", category: "Website", tone: "wine" },
];

export default function Work() {
  return (
    <div className="page work-page">
      <header className="page-intro">
        <h1>
          Things I’ve built, broken, rebuilt and <span className="script pink">loved</span>
        </h1>
        <p>
          These are the projects where I got to ask questions, make mistakes, change my mind and eventually arrive somewhere I was happy with.
        </p>
      </header>

      <article className="work-feature">
        <div className="work-media teal" />
        <div className="work-copy">
          <h2>
            {featured.title}
            <span>{featured.category}</span>
          </h2>
          <p>{featured.copy}</p>
        </div>
      </article>

      <div className="work-grid">
        {grid.map((item) => (
          <article className="work-card" key={`${item.title}-${item.category}`}>
            <div className={`work-media ${item.tone}`} />
            <div className="work-copy">
              <h2>
                {item.title}
                <span>{item.category}</span>
              </h2>
              <p>{featured.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <article className="work-feature">
        <div className="work-media teal" />
        <div className="work-copy">
          <h2>
            Magazines
            <span>Publication Design</span>
          </h2>
          <p>{featured.copy}</p>
        </div>
      </article>
    </div>
  );
}
