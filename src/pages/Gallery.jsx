import { useMemo, useState } from "react";

const filters = ["My Fav", "Me", "Food", "Nature", "My Style", "My Journey", "My People"];
const rotations = [-4, 3, -2, 5, -5, 2, 4, -3];

export default function Gallery() {
  const [active, setActive] = useState("My Fav");
  const shots = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        caption: "heheheh",
        rotate: rotations[index],
      })),
    []
  );

  return (
    <div className="page gallery-page">
      <h1>A little bit of everything I love</h1>
      <div className="filters" role="tablist" aria-label="Gallery categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={active === filter ? "btn btn-pink" : "btn btn-cream"}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="polaroids">
        {shots.map((shot) => (
          <figure
            className="polaroid"
            key={shot.id}
            style={{ transform: `rotate(${shot.rotate}deg)` }}
          >
            <img src="/assets/polaroid.jpg" alt={`${active} photo`} />
            <figcaption className="script">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
