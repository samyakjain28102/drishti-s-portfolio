import { asset } from "../asset.js";

const links = [
  { id: "home", label: "Home", href: "#/home" },
  { id: "work", label: "Work", href: "#/work" },
  { id: "about", label: "About", href: "#/about" },
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
        <a
          className="social"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=drishtij845@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <img src={asset("icon-gmail.svg")} alt="" />
        </a>
        <a
          className="social social-dark"
          href="https://www.behance.net/drishtijain22"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
        >
          <img src={asset("icon-behance.svg")} alt="" />
        </a>
        <a
          className="social social-linkedin"
          href="https://www.linkedin.com/in/drishti-jain-93b42b281"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={asset("icon-linkedin.svg")} alt="" />
        </a>
      </div>
    </aside>
  );
}
