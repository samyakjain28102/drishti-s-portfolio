import { useEffect, useState } from "react";
import { asset } from "../asset.js";

export default function Splash({ onComplete }) {
  const [vibrating, setVibrating] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [svgHtml, setSvgHtml] = useState(null);

  useEffect(() => {
    const url = asset("splash.svg");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.text();
      })
      .then((data) => {
        if (data && data.includes("<svg")) {
          setSvgHtml(data);
        }
      })
      .catch((err) => console.error("Failed to load splash SVG:", err));
  }, []);

  const handleClick = () => {
    if (vibrating || exiting) return;
    setVibrating(true);

    // Vibrate for 750ms, then exit & transition to home
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 750);
  };

  return (
    <div
      className={`splash-overlay ${vibrating ? "splash-active-vibrate" : ""} ${exiting ? "splash-exit" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Click to enter Drishti Jain's portfolio"
    >
      <div className={`splash-container ${vibrating ? "vibrate-elements" : ""}`}>
        {svgHtml ? (
          <div
            className={`splash-inline-svg ${vibrating ? "vibrate-elements" : ""}`}
            dangerouslySetInnerHTML={{ __html: svgHtml }}
          />
        ) : (
          <img
            src={asset("splash.svg")}
            alt="Drishti Jain Portfolio Splash Illustration"
            className={`splash-img-fallback ${vibrating ? "vibrate-elements" : ""}`}
          />
        )}
      </div>
      <div className={`splash-hint ${vibrating ? "splash-hint-hide" : ""}`}>
        <span>Click anywhere to start ✦</span>
      </div>
    </div>
  );
}
