import { useEffect, useState, useCallback } from "react";
import { asset } from "../asset.js";

// All elements from the Figma splash page with their relative positions
// Frame: 1440×1024, positions calculated from Figma absolute bounding boxes
const SPLASH_ELEMENTS = [
  { name: "character",         file: "splash-character.svg",         className: "sp-character" },
  { name: "group3-camera",     file: "splash-group3-camera.svg",     className: "sp-camera" },
  { name: "group5-teddy",      file: "splash-group5-teddy.svg",      className: "sp-teddy" },
  { name: "group14-pencilcup", file: "splash-group14-pencilcup.svg", className: "sp-pencilcup" },
  { name: "group2-laptop",     file: "splash-group2-laptop.svg",     className: "sp-laptop" },
  { name: "group6-palette",    file: "splash-group6-palette.svg",    className: "sp-palette" },
  { name: "group9-chocolate",  file: "splash-group9-chocolate.svg",  className: "sp-chocolate" },
  { name: "group7-cup",        file: "splash-group7-cup.svg",        className: "sp-cup" },
  { name: "group4-plant",      file: "splash-group4-plant.svg",      className: "sp-plant" },
  { name: "group17-tag",       file: "splash-group17-tag.svg",       className: "sp-tag" },
  { name: "group16-book",      file: "splash-group16-book.svg",      className: "sp-book" },
  { name: "group15-badge",     file: "splash-group15-badge.svg",     className: "sp-badge" },
  { name: "group22-glasses",   file: "splash-group22-glasses.svg",   className: "sp-glasses" },
  { name: "group21-badge2",    file: "splash-group21-badge2.svg",    className: "sp-badge2" },
  { name: "group19-star",      file: "splash-group19-star.svg",      className: "sp-star" },
];

export default function Splash({ onComplete }) {
  const [vibrating, setVibrating] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [svgData, setSvgData] = useState({});

  // Manage body scroll locking while splash is visible
  useEffect(() => {
    document.body.classList.add("splash-active");
    return () => {
      document.body.classList.remove("splash-active");
    };
  }, []);

  // Fetch all individual SVGs as inline HTML
  useEffect(() => {
    SPLASH_ELEMENTS.forEach((el) => {
      const url = asset(el.file);
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.text();
        })
        .then((html) => {
          if (html && html.includes("<svg")) {
            setSvgData((prev) => ({ ...prev, [el.name]: html }));
          }
        })
        .catch((err) => console.error(`Failed to load ${el.file}:`, err));
    });
  }, []);

  const handleClick = useCallback(() => {
    if (vibrating || exiting) return;

    // On small screens/mobile (<= 768px), disable vibration animation & enter immediately
    if (window.innerWidth <= 768) {
      if (onComplete) onComplete();
      return;
    }

    setVibrating(true);

    // Vibrate for 800ms on desktop, then exit & transition to home
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 800);
  }, [vibrating, exiting, onComplete]);

  return (
    <div
      className={`splash-overlay ${exiting ? "splash-exit" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Click to enter Drishti Jain's portfolio"
    >
      <div className="splash-scene">
        {SPLASH_ELEMENTS.map((el, i) => (
          <div
            key={el.name}
            className={`splash-el ${el.className} ${vibrating ? "shake" : ""}`}
            style={{ animationDelay: vibrating ? `${i * 0.03}s` : undefined }}
          >
            {svgData[el.name] ? (
              <div
                className="splash-svg-wrap"
                dangerouslySetInnerHTML={{ __html: svgData[el.name] }}
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className={`splash-hint ${vibrating ? "splash-hint-hide" : ""}`}>
        <span>Click anywhere to start ✦</span>
      </div>
    </div>
  );
}
