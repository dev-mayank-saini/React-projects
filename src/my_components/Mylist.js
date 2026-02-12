import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ChildCarousel = ({ myList, removeFromMyList, triggerDeleteAlert }) => {
  if (myList.length === 0) {
    return (
      <div className="text-center text-light p-5" style={{ fontSize: "18px" }}>
        My List is empty. Add movies!
      </div>
    );
  }

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
          <span style={brandNameStyle}>My List</span>...
        </p>
      </div>
      <Swiper
        style={{ "--swiper-navigation-color": "#FF0000" }}
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
        {myList.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="card h-100 position-relative">
              <img
                alt="mylist"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
            </div>
            <div className="container text-center my-3">
              <button
                className="btn btn-danger rounded-circle"
                onClick={() => {
                  removeFromMyList(movie.id);
                  triggerDeleteAlert();
                }}
              >
                <i className="bi bi-dash-lg"></i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ChildCarousel;
