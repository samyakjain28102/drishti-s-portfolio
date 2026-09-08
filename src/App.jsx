import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Splash from "./components/Splash.jsx";

import { asset } from "./asset.js";

const pages = {
  home: Home,
  work: Work,
  about: About,
};

function pageFromHash() {
  const value = window.location.hash.replace("#/", "").replace("#", "") || "home";
  return pages[value] ? value : "home";
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [homeAnimating, setHomeAnimating] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setPage(pageFromHash());
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHomeAnimating(true);
    // Remove entrance animation class after animation completes
    setTimeout(() => {
      setHomeAnimating(false);
    }, 1000);
  };

  const Page = pages[page];

  return (
    <div className="app">
      {showSplash ? (
        <Splash onComplete={handleSplashComplete} />
      ) : null}
      <header className="mobile-header">
        <div className="mobile-profile">
          <img src={asset("avatar.png")} alt="" className="mobile-avatar" />
          <span className="script mobile-name">Drishti Jain</span>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5H17M1 7H17M1 12.5H17" stroke="#393330" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Menu</span>
        </button>
      </header>
      {menuOpen ? (
        <button
          className="backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <Sidebar current={page} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className={`main ${homeAnimating ? "page-enter-animation" : ""}`}>
        <Page />
      </main>
    </div>
  );
}

