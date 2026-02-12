import React, { useState, useEffect } from "react";

const MainCarousel = () => {
  const [carouselMovies, setCarouselMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=856b2af6648ffe4fff1a4e19be4e761e",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setCarouselMovies(data.results.slice(0, 7));
          setLoading(false);
        }
      })
      .catch(setLoading(false));
  }, []);

  if (loading || carouselMovies.length === 0) {
    return (
      <div className="carousel slide" style={{ height: "600px" }}>
        <div className="d-flex justify-content-center align-items-center h-100 text-white">
          <div>Loading movies...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ height: "600px" }}
    >
      <div className="carousel-indicators">
        {carouselMovies.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner h-100">
        {carouselMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="d-block w-100 h-100"
              style={{ objectFit: "cover" }}
              alt={movie.title}
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank",
                )
              }
            />
            <div className="carousel-caption d-md-block">
              <h5>{movie.title}</h5>
              <p>{movie.overview.slice(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev h-100"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next h-100"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainCarousel;
