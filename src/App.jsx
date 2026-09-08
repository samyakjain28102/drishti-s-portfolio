import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const pages = {
  home: Home,
  work: Work,
  gallery: Gallery,
  about: About,
  contact: Contact,
};

function pageFromHash() {
  const value = window.location.hash.replace("#/", "").replace("#", "") || "home";
  return pages[value] ? value : "home";
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setPage(pageFromHash());
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = pages[page];

  return (
    <div className="app">
      <button
        className="menu-toggle"
        type="button"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        Menu
      </button>
      {menuOpen ? (
        <button
          className="backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <Sidebar current={page} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main">
        <Page />
      </main>
    </div>
  );
}
