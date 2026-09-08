export function HobbyIcon({ name }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": true,
  };

  switch (name) {
    case "Design":
      return (
        <svg {...common}>
          <circle cx="10" cy="18" r="5.2" fill="#f4d7ee" stroke="#7a5aa3" strokeWidth="1.6" />
          <path d="M14.2 14.2L22 6.4" stroke="#7a5aa3" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M19.2 6.1h3.4v3.4" stroke="#7a5aa3" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.2 16.4h3.6M10 14.6v3.6" stroke="#7a5aa3" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "Draw":
      return (
        <svg {...common}>
          <path d="M16.8 5.6l5.1 5.1-11.4 11.4H5.4v-5.1L16.8 5.6z" fill="#ffd2c4" stroke="#c45c3e" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M15.2 7.3l5 5" stroke="#c45c3e" strokeWidth="1.5" />
          <path d="M7.2 16.8l3.8 3.8" stroke="#c45c3e" strokeWidth="1.4" />
        </svg>
      );
    case "Dance":
      return (
        <svg {...common}>
          <circle cx="15.2" cy="6.2" r="2.5" fill="#cfe3f3" stroke="#3d6d8c" strokeWidth="1.6" />
          <path d="M15.1 8.9c.2 2.2-1.4 3.4-3.2 4.6M15.2 11.4c1.8.4 3.4 1.8 4.6 3.2" stroke="#3d6d8c" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M11.6 13.8L8 22.2M12.4 16.4l5.8 1.2M18.1 17.4L21 22.2" stroke="#3d6d8c" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "Bake":
      return (
        <svg {...common}>
          <path d="M8 16h12.5v5.2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V16z" fill="#f7e7c3" stroke="#5a7a3a" strokeWidth="1.6" />
          <path d="M9.2 16c.2-4.2 2.6-6.8 5.1-6.8s4.8 2.6 5 6.8" fill="#ffe9ef" stroke="#5a7a3a" strokeWidth="1.6" />
          <circle cx="14.3" cy="7.4" r="1.3" fill="#eb6a7f" />
          <path d="M11 18.6h7" stroke="#5a7a3a" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "Chocoholic":
      return (
        <svg {...common}>
          <rect x="6" y="8" width="16" height="13" rx="2" fill="#e8b07a" stroke="#8a4b22" strokeWidth="1.6" />
          <path d="M6 14.5h16M14 8v13" stroke="#8a4b22" strokeWidth="1.5" />
          <path d="M8.4 10.6h3.2M16.4 10.6h3.2M8.4 16.8h3.2M16.4 16.8h3.2" stroke="#8a4b22" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "Clay-ing":
      return (
        <svg {...common}>
          <ellipse cx="14" cy="19.2" rx="8.2" ry="3.2" fill="#ead7ee" stroke="#6a4d86" strokeWidth="1.6" />
          <path d="M7.2 18.6c.4-5.4 3.2-9.2 6.8-9.2s6.4 3.8 6.8 9.2" fill="#f4e6f6" stroke="#6a4d86" strokeWidth="1.6" />
          <path d="M11.4 12.6c.8-1.4 1.8-2.1 2.6-2.1" stroke="#6a4d86" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "Photoholic":
      return (
        <svg {...common}>
          <rect x="4.2" y="10" width="19.6" height="12.4" rx="2.2" fill="#d7e6f3" stroke="#3d6d8c" strokeWidth="1.6" />
          <path d="M10 10l1.5-3.2h5.2L18.2 10" fill="#d7e6f3" stroke="#3d6d8c" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="14.1" cy="16.2" r="3.5" fill="#fcf6f4" stroke="#3d6d8c" strokeWidth="1.6" />
          <circle cx="14.1" cy="16.2" r="1.5" fill="#3d6d8c" />
        </svg>
      );
    case "Wanderer":
      return (
        <svg {...common}>
          <path d="M14 4.8l7.6 18.4H6.4L14 4.8z" fill="#f7d3b3" stroke="#b56a2b" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10.4 16.4h7.2" stroke="#b56a2b" strokeWidth="1.5" />
          <circle cx="14" cy="13.6" r="1.4" fill="#b56a2b" />
        </svg>
      );
    default:
      return null;
  }
}

export function AdobeIcon({ mark, bg, fg }) {
  return (
    <span className="adobe-icon" style={{ background: bg, color: fg }} aria-hidden="true">
      {mark}
    </span>
  );
}

export function FramerIcon() {
  return (
    <svg className="framer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="5.2" fill="#000" />
      <path fill="#fff" d="M7 5.2h10v5.4H12.2L7 5.2zm0 5.4h5.2V16L7 10.6zm5.2 0H17L12.2 18.8V10.6z" />
    </svg>
  );
}
