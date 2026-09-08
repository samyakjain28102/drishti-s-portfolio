import { asset } from "../asset.js";

const links = [
  { id: "home", label: "Home", href: "#/home" },
  { id: "work", label: "Work", href: "#/work" },
  { id: "gallery", label: "Gallery", href: "#/gallery" },
  { id: "about", label: "About", href: "#/about" },
  { id: "contact", label: "Contact", href: "#/contact" },
];

export default function Sidebar({ current, open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "is-open" : ""}`}>
      <div className="sidebar-card">
        <div className="sidebar-profile">
          <div className="avatar">
            <img src={asset("avatar.png")} alt="Drishti Jain" />
          </div>
          <p className="sidebar-name">Drishti Jain</p>
        </div>
        <div className="sidebar-rule" />
        <nav className="sidebar-nav" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={current === link.id ? "nav-link is-active" : "nav-link"}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-rule" />
        <img className="badge-shade" src={asset("badge-shade.png")} alt="A Shade Apart" />
      </div>
      <div className="socials">
        <a className="social" href="mailto:hello@drishtijain.com" aria-label="Email">
          <img src={asset("icon-gmail.svg")} alt="" width="35" height="35" />
        </a>
        <a
          className="social social-dark"
          href="https://www.behance.net/"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
        >
          <img src={asset("icon-behance.svg")} alt="" width="67" height="67" />
        </a>
        <a
          className="social social-linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={asset("icon-linkedin.svg")} alt="" width="67" height="67" />
        </a>
      </div>
    </aside>
  );
}
