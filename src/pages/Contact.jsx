import { asset } from "../asset.js";

export default function Contact() {
  return (
    <div className="page contact-page">
      <span className="chip">Say hello</span>
      <h1>
        Let’s make something <span className="script pink">beautiful</span>
      </h1>
      <p className="contact-lead">
        Whether it’s a brand, a publication, or a little digital experiment — I’d love to hear what you’re thinking.
      </p>
      <div className="contact-cards">
        <a className="contact-card" href="mailto:hello@drishtijain.com">
          <img src={asset("icon-gmail.svg")} alt="" width="42" height="42" />
          <div>
            <h2>Email</h2>
            <p>hello@drishtijain.com</p>
          </div>
        </a>
        <a className="contact-card" href="https://www.behance.net/" target="_blank" rel="noreferrer">
          <img src={asset("icon-behance.svg")} alt="" width="67" height="67" />
          <div>
            <h2>Behance</h2>
            <p>See the full case studies</p>
          </div>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={asset("icon-linkedin.svg")} alt="" width="67" height="67" />
          <div>
            <h2>LinkedIn</h2>
            <p>Let’s connect</p>
          </div>
        </a>
      </div>
    </div>
  );
}
