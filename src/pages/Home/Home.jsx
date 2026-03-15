import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/Gallery/Gallery";
import FeaturedBands from "../../components/FeaturedBands/FeaturedBands";
import Forum from "../Forum/Forum";
import "./Home.css";

const GENRE_OPTIONS = [
  { value: "all", label: "All Genres" },
  { value: "thrash", label: "Thrash Metal" },
  { value: "heavy", label: "Heavy Metal" },
];

function Home() {
  const [featuredGenre, setFeaturedGenre] = useState("all");

  return (
    <>
      <Hero />

      {/* Featured Bands — state + props demo */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Bands</h2>

          <div className="genre-filter">
            {GENRE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`genre-btn ${featuredGenre === opt.value ? "is-active" : ""}`}
                onClick={() => setFeaturedGenre(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Props passed to child */}
          <FeaturedBands genre={featuredGenre} />
        </div>
      </section>

      <Gallery />

      {/* Forum embedded in Home */}
      <Forum />
    </>
  );
}

export default Home;