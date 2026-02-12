import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useState, useEffect } from "react";

const ChildCarousel = (props) => {
  const [carouselMovies, setCarouselMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=856b2af6648ffe4fff1a4e19be4e761e&page=3",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setCarouselMovies(data.results);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || carouselMovies.length === 0) {
    return <div>Loading movies...</div>;
  }

  const filteredMovies = carouselMovies.filter((movie) =>
    movie.title.toLowerCase().includes(props.searchTerm.toLowerCase()),
  );

  let brandNameStyle = {
    color: "red",
    fontSize: "30px",
  };
  return (
    <>
      <div
        className="container d-block text-light"
        style={{ fontSize: "22px" }}
      >
        <p>
          <span style={brandNameStyle}>More</span>...
        </p>
      </div>

      <div className="container my-3">
        <Swiper
          style={{
            "--swiper-navigation-color": "#FF0000",
          }}
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={15}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 },
            720: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
          className="movie-row h-100"
        >
          {filteredMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                className="card h-100"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    `https://www.themoviedb.org/movie/${movie.id}`,
                    "_blank",
                  )
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  className="card-img-top h-75"
                  alt={movie.title}
                />
              </div>
              <div className="container text-center my-3">
                <button
                  className="btn btn-danger rounded-circle"
                  onClick={() => {
                    props.updateMyList(movie);
                    props.triggerAlert();
                  }}
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ChildCarousel;
